import { expect, test } from "@playwright/test";
import { ROOM_CODE, SIGNUP_LIMITS } from "../public/protocol.js";

test.use({ reducedMotion: "reduce" });

const PHONE = { width: 375, height: 740 };
const SHORT_PHONE = { width: 390, height: 667 };
const PAGES = ["/", "/deck/", "/handout/", "/join/", "/paper/", "/paper/sheets.html"];

test("deck pages share title and source alignment across screen sizes", async ({ page }) => {
  for (const viewport of [
    { width: 1440, height: 900 },
    { width: 1280, height: 720 },
    { width: 1920, height: 1080 },
    PHONE,
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("/deck/");
    await page.locator("#w-pay .dot").first().waitFor();
    await page.evaluate(() => document.fonts.ready);
    const pages = await page.locator(".slide").evaluateAll((slides) =>
      slides.map((slide) => {
        const frame = slide.getBoundingClientRect();
        const heading = slide.querySelector("h1,h2")?.getBoundingClientRect();
        const source = slide.querySelector("p.source:last-child")?.getBoundingClientRect();
        const lastContent = slide.lastElementChild?.getBoundingClientRect();
        if (!heading) throw new Error("A slide has no title");
        return {
          id: slide.id,
          titleLeft: heading.left,
          titleTop: heading.top - frame.top,
          sourceBottom: source ? frame.bottom - source.bottom : null,
          contentBottom: lastContent ? lastContent.bottom - frame.top : 0,
          height: frame.height,
          overflow: slide.scrollWidth > slide.clientWidth,
        };
      }),
    );
    const tolerance = 1;
    const spread = (values: number[]) => Math.max(...values) - Math.min(...values);
    expect(spread(pages.map((slide) => slide.titleLeft))).toBeLessThanOrEqual(tolerance);
    expect(spread(pages.map((slide) => slide.titleTop))).toBeLessThanOrEqual(tolerance);
    expect(pages.filter((slide) => slide.overflow).map((slide) => slide.id)).toEqual([]);
    if (viewport.width > PHONE.width) {
      const sourceBottoms = pages.flatMap((slide) =>
        slide.sourceBottom === null ? [] : [slide.sourceBottom],
      );
      expect(spread(sourceBottoms)).toBeLessThanOrEqual(tolerance);
      expect(pages.filter((slide) => slide.height > viewport.height + tolerance)).toEqual([]);
      const controlsTop = await page
        .locator(".deck-nav")
        .evaluate((nav) => nav.getBoundingClientRect().top);
      expect(Math.max(...pages.map((slide) => slide.contentBottom))).toBeLessThan(controlsTop);
    }
  }
});

test("session pages fit a phone and execute without page errors", async ({ page }) => {
  await page.setViewportSize(PHONE);
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  for (const path of PAGES) {
    await page.goto(path);
    await expect(page.locator("main")).toBeVisible();
    await expect
      .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
      .toBe(true);
    if (path === "/deck/") {
      const overflowingSlides = await page
        .locator(".slide")
        .evaluateAll((slides) =>
          slides.filter((slide) => slide.scrollWidth > slide.clientWidth).map((slide) => slide.id),
        );
      expect(overflowingSlides).toEqual([]);
    }
  }
  expect(errors).toEqual([]);
});

test("funding application precedes the workshop and its real jury remains interactive", async ({
  page,
}) => {
  await page.setViewportSize(PHONE);
  await page.goto("/deck/");
  await expect(page.locator("section.slide")).toHaveCount(24);
  await expect(page.locator("#s3")).toContainText("A funding application");
  await expect(page.locator("#s9")).toContainText("Accuracy");
  await expect(page.locator("#s7")).toContainText("Appeal");
  await expect(page.locator("#s14")).toContainText("Workshop arithmetic");
  await expect(page.locator("#s18")).toContainText("precursor");
  const widget = page.locator("#w-pay");
  const dot = widget.getByRole("slider").first();
  await dot.focus();
  const before = await dot.getAttribute("aria-valuenow");
  await dot.press("ArrowRight");
  expect(await dot.getAttribute("aria-valuenow")).not.toBe(before);
  await expect(widget.locator(".v-centre")).not.toHaveText("NaN");
  await dot.scrollIntoViewIfNeeded();
  const track = await widget.locator(".track").boundingBox();
  const handle = await dot.boundingBox();
  expect(track).not.toBeNull();
  expect(handle).not.toBeNull();
  if (!track || !handle) throw new Error("the score slider has no visible geometry");
  await page.mouse.move(handle.x + handle.width / 2, handle.y + handle.height / 2);
  await page.mouse.down();
  await page.mouse.move(track.x + track.width * 0.8, handle.y + handle.height / 2);
  await page.mouse.up();
  await expect(dot).toHaveAttribute("aria-valuenow", "0.80");
  await page.locator("#w-bloc .bloc").fill("60");
  await expect(page.locator("#w-bloc .v-bloc")).toHaveText("60%");
  await page.locator("#w-bloc .reset").click();
  await expect(page.locator("#w-bloc .v-bloc")).toHaveText("0%");
});

test("deck advances from the tall slide still being read on a phone", async ({ page }) => {
  await page.setViewportSize(SHORT_PHONE);
  await page.goto("/deck/#s16");
  await expect(page.locator("#progress")).toHaveText("16 / 24");
  const initialSlide = await page.locator("#s16").boundingBox();
  const readingArea = await page.locator("main").boundingBox();
  if (!initialSlide || !readingArea) throw new Error("the deck has no visible reading area");
  const initialScroll = await page.locator("main").evaluate((element) => element.scrollTop);
  const lowerReadingFraction = 0.75;
  const minimumReadingFraction = 0.7;
  await page.mouse.move(
    readingArea.x + readingArea.width / 2,
    readingArea.y + readingArea.height / 2,
  );
  await page.mouse.wheel(0, initialSlide.height * lowerReadingFraction);
  await expect
    .poll(() => page.locator("main").evaluate((element) => element.scrollTop))
    .toBeGreaterThan(initialScroll + initialSlide.height * minimumReadingFraction);
  await expect(page.locator("#s16 p").last()).toBeInViewport({ ratio: 1 });
  const slide = await page.locator("#s16").boundingBox();
  if (!slide) throw new Error("the collusion slide has no visible geometry");
  expect(slide.y).toBeLessThanOrEqual(0);
  expect(slide.y + slide.height).toBeGreaterThan(0);
  await expect(page.locator("#progress")).toHaveText("16 / 24");
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await expect(page.locator("#progress")).toHaveText("17 / 24");
});

for (const viewport of [{ width: 1280, height: 720 }, SHORT_PHONE]) {
  test(`deck keyboard navigation reaches slides and respects boundaries at ${viewport.width}px`, async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.setViewportSize(viewport);
    await page.goto("/deck/#s4");
    const progress = page.locator("#progress");
    await expect(progress).toHaveText("4 / 24");
    await page.keyboard.press("Space");
    await expect(progress).toHaveText("5 / 24");
    await page.keyboard.press("Shift+Space");
    await expect(progress).toHaveText("4 / 24");
    await page.keyboard.press("End");
    await expect(progress).toHaveText("24 / 24");
    await page.keyboard.press("Space");
    await expect(progress).toHaveText("24 / 24");
    await page.keyboard.press("Home");
    await expect(progress).toHaveText("1 / 24");
    await page.keyboard.press("Shift+Space");
    await expect(progress).toHaveText("1 / 24");
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("ArrowRight");
    await expect(progress).toHaveText("4 / 24");
    await page.keyboard.press("ArrowLeft");
    await expect(progress).toHaveText("3 / 24");
    await page.keyboard.press("PageDown");
    await expect(progress).toHaveText("4 / 24");
    await page.keyboard.press("ArrowLeft");
    await expect(progress).toHaveText("3 / 24");
  });
}

test("keyboard shortcuts preserve controls and provide a dismissible focus-contained guide", async ({
  page,
}) => {
  await page.goto("/deck/#s6");
  const progress = page.locator("#progress");
  const score = page.locator("#example-jury input").first();
  await score.focus();
  await score.press("End");
  await expect(score).toHaveValue("1");
  await expect(progress).toHaveText("6 / 24");
  await page.getByRole("button", { name: "Next", exact: true }).focus();
  await page.keyboard.press("Space");
  await expect(progress).toHaveText("7 / 24");
  await page.getByRole("button", { name: "Apply appeal result", exact: true }).focus();
  await page.keyboard.press("Space");
  await expect(page.locator('#s8 [data-example="stage"]')).toContainText("Appeal jury");
  await expect(progress).toHaveText("7 / 24");
  await page.keyboard.press("ArrowRight");
  await expect(progress).toHaveText("8 / 24");
  await page.keyboard.press("Space");
  await expect(progress).toHaveText("9 / 24");
  await page.keyboard.press("PageUp");
  await page.keyboard.press("PageUp");
  await expect(progress).toHaveText("7 / 24");

  const shortcuts = page.getByRole("button", { name: "Keyboard shortcuts", exact: true });
  await shortcuts.click();
  const guide = page.getByRole("dialog", { name: "Keyboard shortcuts", exact: true });
  const close = guide.getByRole("button", { name: "Close", exact: true });
  await expect(guide).toBeVisible();
  await expect(guide).toContainText("Shift + Space");
  await expect(close).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(close).toBeFocused();
  await page.keyboard.press("End");
  await expect(progress).toHaveText("7 / 24");
  await page.keyboard.press("Escape");
  await expect(guide).not.toBeVisible();
  await expect(shortcuts).toBeFocused();
  await page.keyboard.press("F1");
  await expect(guide).toBeVisible();
  await close.click();
  await expect(guide).not.toBeVisible();

  await page.evaluate(() => {
    const editor = document.createElement("div");
    editor.contentEditable = "true";
    editor.setAttribute("aria-label", "Speaker notes");
    document.querySelector("#s7")?.append(editor);
    editor.focus();
  });
  await page.keyboard.type("my notes");
  await expect(page.getByLabel("Speaker notes")).toHaveText("my notes");
  await expect(progress).toHaveText("7 / 24");
  await expect(guide).not.toBeVisible();
  await page.locator("body").click({ position: { x: 1, y: 1 } });
  await page.keyboard.press("Control+ArrowRight");
  await page.keyboard.press("Meta+ArrowRight");
  await page.keyboard.type("np?");
  await expect(progress).toHaveText("7 / 24");
});

test("worked example carries jury scores through capped funding and later outcomes", async ({
  page,
}) => {
  await page.goto("/deck/#s6");
  await expect(page.locator("#s5")).toContainText("NumPy 2.0.0");
  await expect(page.locator('[data-example="mean"]')).toHaveText("0.600");
  await expect(page.locator('[data-project-rate="numpy"]')).toHaveText("40.00");
  const scores = page.locator("#example-jury input");
  await expect(scores).toHaveCount(3);
  await scores.first().focus();
  await scores.first().press("End");
  await expect(page.locator('[data-example="mean"]')).toHaveText("0.750");
  await expect(page.locator('[data-project-rate="numpy"]')).toHaveText("45.45");
  for (const score of await scores.all()) {
    await score.focus();
    await score.press("End");
  }
  await expect(page.locator('[data-example="mean"]')).toHaveText("1.000");
  await expect(page.locator('[data-example="effective"]')).toHaveText("0.800");
  await expect(page.locator('[data-project-rate="numpy"]')).toHaveText("47.06");
  for (const score of await scores.all()) {
    await score.focus();
    await score.press("Home");
  }
  await expect(page.locator('[data-project-rate="numpy"]')).toHaveText("0.00");
  const rates = await page.locator("[data-project-rate]").allTextContents();
  expect(rates.reduce((sum, value) => sum + Number(value), 0)).toBeCloseTo(100, 2);
  await page.getByRole("button", { name: "Apply appeal result", exact: true }).click();
  await expect(page.locator('[data-project-rate="numpy"]')).toHaveText("43.75");
  for (const score of await scores.all()) {
    await score.focus();
    await score.press("Home");
  }
  await page.getByRole("button", { name: "Apply lower re-score", exact: true }).click();
  await expect(page.locator('[data-example="mean"]')).toHaveText("0.600");
  await expect(page.locator('[data-project-rate="numpy"]')).toHaveText("25.00");
  await expect(page.locator("#example-outcome")).toContainText("Earlier accrual stays earned");
  await page.getByRole("button", { name: "Show debunked outcome", exact: true }).click();
  await expect(page.locator("#example-allocation tr").first().locator("td").nth(2)).toHaveText(
    "0.300",
  );
  await expect(page.locator('[data-project-rate="numpy"]')).toHaveText("0.00");
  await expect(page.locator("#example-outcome")).toContainText(
    "Accrued funding remains owed, including unclaimed amounts",
  );
  await page.getByRole("button", { name: "Reset worked example", exact: true }).click();
  await expect(page.locator('[data-example="mean"]')).toHaveText("0.600");
  await expect(page.locator('[data-project-rate="numpy"]')).toHaveText("40.00");
});

test("signup validates and retains values after a network failure", async ({ page }) => {
  await page.goto("/join/");
  await page.locator("#name").fill("Ada");
  await page.locator("#email").fill("invalid");
  await page.locator("#send").click();
  await expect(page.locator("#feedback")).toContainText("does not look right");
  await page.locator("#email").fill("ada@example.org");
  await page.route("**/api/signup", (route) => route.abort());
  await page.locator("#send").click();
  await expect(page.locator("#feedback")).toContainText("Try again");
  await expect(page.locator("#name")).toHaveValue("Ada");
  await expect(page.locator("#email")).toHaveValue("ada@example.org");
  await page.unroute("**/api/signup");
  await page.route("**/api/signup", (route) => route.fulfill({ status: 201, body: "{}" }));
  await page.locator("#send").click();
  await expect(page.locator("#thanks")).toContainText("You are on the list");
});

test("paper calculator handles score boundaries, recusal and absent jurors using the ledger", async ({
  page,
}) => {
  await page.goto("/paper/");
  await expect(page.locator("#self-check")).toHaveText("Self-check passed.");
  const fields = page.locator("textarea");
  await fields.nth(0).fill("Ada 0.62");
  await fields.nth(1).fill("Ada 62\nBen recuse");
  await fields.nth(2).fill("Ada 0\nBen 100");
  await page.locator("#grade").click();
  await expect(page.locator("#results")).toContainText("Recused");
  await expect(page.locator("#results")).toContainText("Absent");
  await expect(page.locator("#results")).not.toContainText("NaN");
  const expected = await page.evaluate(() => {
    const core = (
      globalThis as unknown as {
        JuryCore: { nomineeDeltas: (...args: unknown[]) => { delta: Record<string, number> } };
      }
    ).JuryCore;
    const roster = [
      { pid: "Ada", joinedAt: 0 },
      { pid: "Ben", joinedAt: 0 },
    ];
    const rounds = [
      [{ pid: "Ada", revealed: true, score: 62 }],
      [
        { pid: "Ada", revealed: true, score: 62 },
        { pid: "Ben", recused: true },
      ],
      [
        { pid: "Ada", revealed: true, score: 0 },
        { pid: "Ben", revealed: true, score: 100 },
      ],
    ];
    const totals: Record<string, number> = { Ada: 0, Ben: 0 };
    for (const plays of rounds)
      for (const [name, net] of Object.entries(
        core.nomineeDeltas(plays, [], roster, { seated: ["Ada", "Ben"] }).delta,
      ))
        totals[name] = (totals[name] ?? 0) + net;
    return totals;
  });
  for (const [name, amount] of Object.entries(expected))
    await expect(page.locator(`#standings [data-name="${name}"] .net`)).toHaveText(
      new Intl.NumberFormat("en-GB", { maximumFractionDigits: 2 }).format(amount),
    );
  await fields.nth(0).fill("Ada 101");
  await page.locator("#grade").click();
  await expect(page.locator("#feedback")).toContainText("0 to 1 or 0 to 100");
  await expect(fields.nth(0)).toHaveValue("Ada 101");
});

test("paper sheets use the default docket and reject invalid counts", async ({ page }) => {
  await page.goto("/paper/sheets.html?jurors=30");
  await expect(page.locator(".score-sheet")).toHaveCount(30);
  await expect(page.locator(".score-sheet").first().locator("tbody tr")).toHaveCount(6);
  await page.goto("/paper/sheets.html?jurors=-1");
  await expect(page.locator("#feedback")).toContainText("between 1 and 100");
});

test("signup returns control when the service does not answer", async ({ page }) => {
  await page.goto("/join/");
  await page.clock.install();
  await page.locator("#name").fill("Ada");
  await page.locator("#email").fill("ada@example.org");
  await page.route("**/api/signup", () => {});
  await page.locator("#send").click();
  await page.clock.fastForward(15000);
  await expect(page.locator("#feedback")).toContainText("Try again");
  await expect(page.locator("#send")).toBeEnabled();
  await expect(page.locator("#email")).toHaveValue("ada@example.org");
});

test("server-side signup validation preserves the entered values", async ({ page }) => {
  await page.goto("/join/");
  await page.locator("#name").fill("Ada");
  await page.locator("#email").fill("ada@example.org");
  await page.route("**/api/signup", (route) => route.fulfill({ status: 400, body: "{}" }));
  await page.locator("#send").click();
  await expect(page.locator("#feedback")).toContainText("does not look right");
  await expect(page.locator("#name")).toHaveValue("Ada");
  await expect(page.locator("#email")).toHaveValue("ada@example.org");
});

test("paper juror names cannot collide with object prototype keys", async ({ page }) => {
  await page.goto("/paper/");
  await page.locator("textarea").first().fill("constructor 62\n__proto__ 62");
  await page.locator("#grade").click();
  await expect(page.locator("#results")).not.toContainText("NaN");
  const expected = await page.evaluate(() => {
    const core = (globalThis as unknown as { JuryCore: { ROUND_REWARD: number } }).JuryCore;
    return new Intl.NumberFormat("en-GB", { maximumFractionDigits: 2 }).format(
      core.ROUND_REWARD / 2,
    );
  });
  for (const name of ["constructor", "__proto__"])
    await expect(page.locator(`#standings [data-name="${name}"] .net`)).toHaveText(expected);
});

test("room entry shares the server grammar and canonical lowercase route", async ({ page }) => {
  await page.goto("/");
  const input = page.locator("#room-code");
  await expect(input).toHaveAttribute("pattern", ROOM_CODE.pattern);
  for (const code of ["ab", "a_b", "a\\b"]) {
    await input.fill(code);
    await page.getByRole("button", { name: "Enter the room" }).click();
    await expect(page.locator("#feedback")).toBeVisible();
    expect(await input.evaluate((element: HTMLInputElement) => element.validity.valid)).toBe(false);
  }
  await input.fill("Ada-9");
  expect(await input.evaluate((element: HTMLInputElement) => element.validity.valid)).toBe(true);
  await page.getByRole("button", { name: "Enter the room" }).click();
  await expect(page).toHaveURL(/\/r\/ada-9$/);
});

test("signup uses the server field limits and refuses an oversized programmatic name", async ({
  page,
}) => {
  await page.goto("/join/");
  const name = page.locator("#name");
  await expect(name).toHaveAttribute("maxlength", String(SIGNUP_LIMITS.name));
  await expect(page.locator("#email")).toHaveAttribute("maxlength", String(SIGNUP_LIMITS.email));
  await name.evaluate(
    (element: HTMLInputElement, value) => {
      element.value = value;
    },
    "a".repeat(SIGNUP_LIMITS.name + 1),
  );
  await page.locator("#email").fill("ada@example.org");
  const requests: string[] = [];
  page.on("request", (request) => {
    if (request.url().endsWith("/api/signup")) requests.push(request.url());
  });
  await page.locator("#send").click();
  await expect(page.locator("#feedback")).toContainText(`at most ${SIGNUP_LIMITS.name}`);
  expect(requests).toEqual([]);
});
