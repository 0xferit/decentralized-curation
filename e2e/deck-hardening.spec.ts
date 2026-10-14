import { expect, test } from "@playwright/test";

test.use({ reducedMotion: "reduce" });

const DESKTOP = { width: 1280, height: 720 };
const PHONE = { width: 390, height: 667 };
const READABLE_SUPPORT_PX = 14;
const GEOMETRY_TOLERANCE_PX = 1;

for (const scenario of [
  { slide: "s11", button: "Apply appeal result", result: /0\.700.*43\.8%/ },
  { slide: "s12", button: "Show debunked outcome", result: /Future funding stops/ },
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
  await page.goto("/deck/#s10");
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
