import { expect, test } from "@playwright/test";

test.use({ reducedMotion: "reduce" });

const DESKTOP = { width: 1280, height: 720 };
const PHONE = { width: 390, height: 667 };
const READABLE_SUPPORT_PX = 14;
const GEOMETRY_TOLERANCE_PX = 1;
const SCHELLING_OPTION_COUNT = 100;
const SCHELLING_FOCAL_NUMBER = "47";

test("Schelling example reveals locally and preserves keyboard navigation", async ({ page }) => {
  await page.setViewportSize(DESKTOP);
  await page.goto("/deck/#s7");
  const slide = page.locator("#s7");
  const options = slide.locator(".schelling-options li");
  await expect(options).toHaveCount(SCHELLING_OPTION_COUNT);
  const focal = slide.locator(".schelling-options li[data-focal]");
  await expect(focal).toHaveCount(1);
  await expect(focal).toHaveText(SCHELLING_FOCAL_NUMBER);
  const otherBackground = await slide
    .locator(".schelling-options li:not([data-focal])")
    .first()
    .evaluate((element) => getComputedStyle(element).backgroundColor);
  await expect(focal).not.toHaveCSS("background-color", otherBackground);
  await expect(
    slide.locator(
      ".schelling-options button, .schelling-options input, .schelling-options [role=button]",
    ),
  ).toHaveCount(0);
  const reveal = slide.getByRole("button", { name: "Reveal example", exact: true });
  const reset = slide.getByRole("button", { name: "Reset game", exact: true });
  const explanation = page.locator("#schelling-explanation");
  await expect(reveal).toHaveAttribute("aria-controls", "schelling-explanation");
  await expect(reveal).toHaveAttribute("aria-expanded", "false");
  await expect(explanation).toBeHidden();
  await reveal.focus();
  await page.keyboard.press("Space");
  await expect(reveal).toHaveAttribute("aria-expanded", "true");
  await expect(explanation).toBeVisible();
  await expect(explanation).toContainText(/shared expectations/i);
  await expect(page.locator(".rail [aria-current]")).toHaveAttribute("href", "#s7");
  await page.keyboard.press("Space");
  await expect(explanation).toBeVisible();
  await expect(page.locator(".rail [aria-current]")).toHaveAttribute("href", "#s7");
  await reset.click();
  await expect(explanation).toBeHidden();
  await expect(reveal).toHaveAttribute("aria-expanded", "false");
  await slide.locator("h2").focus();
  await page.keyboard.press("Space");
  await expect(page.locator(".rail [aria-current]")).toHaveAttribute("href", "#s8");
  await page.keyboard.press("Shift+Space");
  await expect(page.locator(".rail [aria-current]")).toHaveAttribute("href", "#s7");
});

test("slide navigation keeps heading focus without a presentation outline", async ({ page }) => {
  await page.setViewportSize(DESKTOP);
  await page.goto("/deck/");
  await page.keyboard.press("Space");
  const heading = page.locator("#s2 h2");
  await expect(heading).toBeFocused();
  await expect(heading).toHaveCSS("outline-style", "none");
  await page.keyboard.press("Shift+Space");
  const title = page.locator("#s1 h1");
  await expect(title).toBeFocused();
  await expect(title).toHaveCSS("outline-style", "none");
  const next = page.getByRole("button", { name: "Next", exact: true });
  await next.focus();
  await expect(next).toHaveCSS("outline-style", "solid");
});

for (const scenario of [
  { slide: "s13", button: "Apply appeal result", result: /0\.700.*43\.8%/ },
  { slide: "s14", button: "Show debunked outcome", result: /Future funding stops/ },
]) {
  test(`${scenario.button} shows its result on the current slide`, async ({ page }) => {
    for (const viewport of [DESKTOP, PHONE]) {
      await page.setViewportSize(viewport);
      await page.goto(`/deck/#${scenario.slide}`);
      const slide = page.locator(`#${scenario.slide}`);
      const result = slide.locator('[role="status"]');
      await page.getByRole("button", { name: scenario.button, exact: true }).click();
      await expect(result).toHaveText(scenario.result);
      await expect(result).toBeInViewport({ ratio: 1 });
      await expect(page.locator(".rail [aria-current]")).toHaveAttribute(
        "href",
        `#${scenario.slide}`,
      );
      if (viewport === DESKTOP) {
        const bounds = await slide.boundingBox();
        expect(bounds).not.toBeNull();
        expect(bounds?.height).toBeLessThanOrEqual(viewport.height + GEOMETRY_TOLERANCE_PX);
      }
      await page.getByRole("button", { name: "Reset worked example", exact: true }).click();
      await expect(result).toBeEmpty();
    }
  });
}

test("reset restores the worked example after a zero budget", async ({ page }) => {
  await page.goto("/deck/#s12");
  const budget = page.getByRole("slider", { name: "Illustrative distribution per day" });
  const initialBudget = await budget.inputValue();
  const rates = page.locator("[data-project-rate]");
  const initialRates = await rates.allTextContents();
  await budget.fill("0");
  await expect(rates).toHaveText(["0.00", "0.00", "0.00"]);
  await page.getByRole("button", { name: "Apply lower assessment", exact: true }).click();
  await page.getByRole("button", { name: "Reset worked example", exact: true }).click();
  await expect(budget).toHaveValue(initialBudget);
  await expect(rates).toHaveText(initialRates);
});

test("projected slides keep only the workshop entry link", async ({ page }) => {
  await page.goto("/deck/");
  const links = page.locator("main a:not(.support-logo)");
  await expect(links).toHaveCount(1);
  await expect(links).toHaveAttribute("data-link", "room");
  await expect(links).toHaveAttribute("href", /\/r\//);
});

test("deck qualifications and chart keys remain readable without hiding content", async ({
  page,
}) => {
  for (const viewport of [DESKTOP, PHONE]) {
    await page.setViewportSize(viewport);
    await page.goto("/deck/");
    await page.locator("#w-bloc .dot").first().waitFor();
    await page.evaluate(() => document.fonts.ready);
    const smallText = await page
      .locator(".slide .source, .slide .note, .slide .legend, .slide .anchors")
      .evaluateAll(
        (nodes, minimum) =>
          nodes
            .filter((node) => Number.parseFloat(getComputedStyle(node).fontSize) < minimum)
            .map((node) => ({
              slide: node.closest(".slide")?.id,
              fontSize: Number.parseFloat(getComputedStyle(node).fontSize),
            })),
        READABLE_SUPPORT_PX,
      );
    expect(smallText, `supporting text must be at least ${READABLE_SUPPORT_PX}px`).toEqual([]);
    const slides = await page.locator(".slide").evaluateAll((nodes) =>
      nodes.map((node) => {
        const bounds = node.getBoundingClientRect();
        const last = node.lastElementChild?.getBoundingClientRect();
        return {
          id: node.id,
          horizontalOverflow: node.scrollWidth > node.clientWidth,
          height: bounds.height,
          lastBottom: last ? last.bottom - bounds.top : 0,
        };
      }),
    );
    expect(slides.filter((slide) => slide.horizontalOverflow)).toEqual([]);
    if (viewport.width === DESKTOP.width) {
      const controlsTop = await page
        .locator(".deck-nav")
        .evaluate((node) => node.getBoundingClientRect().top);
      expect(
        slides.filter((slide) => slide.height > DESKTOP.height + GEOMETRY_TOLERANCE_PX),
      ).toEqual([]);
      expect(slides.filter((slide) => slide.lastBottom >= controlsTop)).toEqual([]);
    }
  }
});
