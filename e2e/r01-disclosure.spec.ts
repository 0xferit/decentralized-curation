import { type BrowserContext, expect, type Page, test } from "@playwright/test";
import { SCORE_MAX } from "../public/protocol.js";

const ROSTER = [
  { pid: "r01bloc1", name: "First instructed juror" },
  { pid: "r01bloc2", name: "Second instructed juror" },
  { pid: "r01other", name: "Independent juror" },
];
const HOST = ROSTER[0];
const INSTRUCTED_JURORS = 2;
const OTHER_SCORE = 90;
const BLOC_SEED = "80";
const BLOC_FRACTION = 0.55;
const STEP = 15_000;
const PHONE = { width: 390, height: 844 };
const LAYOUT_TOLERANCE = 1;

async function seedRoom(page: Page, room: string): Promise<number> {
  await page.goto("/");
  return page.evaluate(
    async ({ room, roster, seed, blocFraction }) => {
      const storeModule = "/store.js";
      const domainModule = "/domain.js";
      const protocolModule = "/protocol.js";
      const { connect } = await import(storeModule);
      const { NOMINEES } = await import(domainModule);
      const { GAME_PHASE, ROOM_PATH, SCORE_MAX } = await import(protocolModule);
      const nominee = NOMINEES.find((candidate: { bloc?: boolean }) => candidate.bloc);
      if (!nominee) throw new Error("The workshop has no instructed-bloc nominee");
      const host = roster[0];
      if (!host) throw new Error("The room needs a host");
      const epoch = "disclosure-regression";
      for (const juror of roster) {
        const db = connect(`${location.origin.replace("http", "ws")}/r/${room}/ws`);
        try {
          await db.hello(juror.pid, `${juror.pid}-secret`);
          if (juror.pid === host.pid) {
            const state = db.doc(ROOM_PATH.STATE);
            await state.acquire({ holder: juror.pid });
            await state.set(
              {
                phase: GAME_PHASE.LOBBY,
                nomineeIdx: 0,
                hostPid: juror.pid,
                epoch,
                seed,
                blocFraction,
                openProofs: true,
                docket: [nominee],
              },
              { expect: { epoch: null } },
            );
          }
          await db
            .doc(`${ROOM_PATH.GAMES}/${epoch}/${ROOM_PATH.PLAYERS}/${juror.pid}`)
            .set(juror, { stamp: ["joinedAt"] });
        } finally {
          db.close();
        }
      }
      return Number.parseFloat(nominee.blocScore) * SCORE_MAX;
    },
    { room, roster: ROSTER, seed: BLOC_SEED, blocFraction: BLOC_FRACTION },
  );
}

async function joinAs(context: BrowserContext, room: string, juror: (typeof ROSTER)[number]) {
  await context.addInitScript((identity) => {
    localStorage.setItem("cg_pid", identity.pid);
    localStorage.setItem("cg_secret", `${identity.pid}-secret`);
    localStorage.setItem("cg_name", identity.name);
  }, juror);
  const page = await context.newPage();
  await page.goto(`/r/${room}`);
  return page;
}

test("a successful instructed bloc reports outcomes without claiming a full-system defence", async ({
  browser,
}) => {
  const room = `r01-${Date.now().toString(36)}`;
  const contexts: BrowserContext[] = [];
  try {
    const setup = await browser.newContext();
    contexts.push(setup);
    const instructedScore = await seedRoom(await setup.newPage(), room);
    const pages: Page[] = [];
    for (const juror of ROSTER) {
      const context = await browser.newContext();
      contexts.push(context);
      pages.push(await joinAs(context, room, juror));
    }
    const host = pages[0];
    if (!HOST || !host) throw new Error("The room needs a host");
    await host.locator("#open").click();
    for (const [index, page] of pages.entries()) {
      if (index < INSTRUCTED_JURORS) {
        await expect(page.getByText("You are in the bloc.", { exact: false })).toBeVisible();
      } else {
        await expect(page.getByText("You are in the bloc.", { exact: false })).toHaveCount(0);
      }
      await page
        .locator("#rng")
        .fill(String((index < INSTRUCTED_JURORS ? instructedScore : OTHER_SCORE) / SCORE_MAX));
      await page.locator("#seal").click();
      await expect(page.locator("#chg")).toBeVisible({ timeout: STEP });
    }
    await host.locator("#toReveal").click();
    await expect(host.getByText("Everyone has revealed.")).toBeVisible({ timeout: STEP });
    await host.locator("#toRes").click();
    const result = host.locator(".banner").filter({ hasText: "Bloc assigned" });
    await expect(result).toContainText("2 of 2 submitted the instructed score");
    await expect(result).toContainText("1 other juror and 0 assigned jurors");
    await expect(result).not.toContainText(/full design|anti-prereveal|deter collusion/i);
  } finally {
    await Promise.all(contexts.map((context) => context.close()));
  }
});

test("post-demonstration disclosure response states its version and remaining attack surface", async ({
  page,
}) => {
  await page.goto("/deck/#s21");
  const response = page.locator("#s21 tr").filter({ hasText: /prove.*sealed score.*buyer/i });
  await expect(response).toHaveCount(1);
  await expect(response).toContainText(/workshop only/i);
  await expect(response).toContainText(/penalty.*bounty/i);
  await expect(response).toContainText(/other verification routes remain/i);
  await page.setViewportSize(PHONE);
  const cells = await response.locator("th, td").evaluateAll((elements) =>
    elements.map((element) => {
      const { top, bottom } = element.getBoundingClientRect();
      return { top, bottom };
    }),
  );
  const [attack, defence, weakness] = cells;
  if (!attack || !defence || !weakness) throw new Error("The attack row needs three cells");
  expect(attack.bottom).toBeLessThanOrEqual(Math.min(defence.top, weakness.top) + LAYOUT_TOLERANCE);
});
