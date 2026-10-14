import { expect, test } from "@playwright/test";

test.use({ reducedMotion: "reduce" });

const DESKTOP = { width: 1280, height: 720 };
const PHONE = { width: 390, height: 667 };
const READABLE_SUPPORT_PX = 14;
const GEOMETRY_TOLERANCE_PX = 1;
const SCHELLING_GRID_SIDE = 7;
const SCHELLING_OPTION_COUNT = SCHELLING_GRID_SIDE ** 2;
const SCHELLING_CENTER_INDEX = Math.floor(SCHELLING_OPTION_COUNT / 2);
const SCHELLING_FOCAL_NUMBER = "100";
const SCHELLING_CURATION_TARGET = "Honest · Competent · Thorough";
const SCHELLING_CURATION_CHOICES = [
  SCHELLING_CURATION_TARGET,
  "Honest · Competent · Lazy",
  "Honest · Uninformed · Thorough",
  "Honest · Uninformed · Lazy",
  "Deceptive · Competent · Thorough",
  "Deceptive · Competent · Lazy",
  "Deceptive · Uninformed · Thorough",
  "Deceptive · Uninformed · Lazy",
];

test("Schelling example reveals locally and preserves keyboard navigation", async ({ page }) => {
  await page.setViewportSize(DESKTOP);
  await page.goto("/deck/#s7");
  const slide = page.locator("#s7");
  const options = slide.locator(".schelling-options li");
  await expect(options).toHaveCount(SCHELLING_OPTION_COUNT);
  const focal = slide.locator(".schelling-options li[data-focal]");
  await expect(focal).toHaveCount(1);
  await expect(focal).toHaveText(SCHELLING_FOCAL_NUMBER);
  const values = (await options.allTextContents()).map(Number);
  expect(new Set(values).size).toBe(SCHELLING_OPTION_COUNT);
  expect(values.filter((value) => value % 2 === 0)).toEqual([Number(SCHELLING_FOCAL_NUMBER)]);
  expect(values.filter((value) => value % 2 !== 0)).toHaveLength(SCHELLING_OPTION_COUNT - 1);
  expect(values).toEqual([...values].sort((left, right) => left - right));
  expect(values[SCHELLING_CENTER_INDEX]).toBe(Number(SCHELLING_FOCAL_NUMBER));
  const optionBounds = await options.evaluateAll((elements) =>
    elements.map((element) => {
      const bounds = element.getBoundingClientRect();
      return { left: bounds.left, top: bounds.top, right: bounds.right, bottom: bounds.bottom };
    }),
  );
  expect(new Set(optionBounds.map((bounds) => bounds.left)).size).toBe(SCHELLING_GRID_SIDE);
  expect(new Set(optionBounds.map((bounds) => bounds.top)).size).toBe(SCHELLING_GRID_SIDE);
  const centerBounds = optionBounds[SCHELLING_CENTER_INDEX];
  expect(centerBounds).toBeDefined();
  if (!centerBounds) throw new Error("The number grid is missing its center option");
  const gridCenterX =
    (Math.min(...optionBounds.map((bounds) => bounds.left)) +
      Math.max(...optionBounds.map((bounds) => bounds.right))) /
    2;
  const gridCenterY =
    (Math.min(...optionBounds.map((bounds) => bounds.top)) +
      Math.max(...optionBounds.map((bounds) => bounds.bottom))) /
    2;
  expect(Math.abs((centerBounds.left + centerBounds.right) / 2 - gridCenterX)).toBeLessThanOrEqual(
    GEOMETRY_TOLERANCE_PX,
  );
  expect(Math.abs((centerBounds.top + centerBounds.bottom) / 2 - gridCenterY)).toBeLessThanOrEqual(
    GEOMETRY_TOLERANCE_PX,
  );
  const initialAppearances = await options.evaluateAll((elements) =>
    elements.map((element) => {
      const style = getComputedStyle(element);
      return JSON.stringify([
        style.fontSize,
        style.fontWeight,
        style.borderColor,
        style.borderWidth,
        style.borderStyle,
        style.boxShadow,
        style.transform,
        style.opacity,
      ]);
    }),
  );
  expect(new Set(initialAppearances).size).toBe(1);
  const otherBackground = await slide
    .locator(".schelling-options li:not([data-focal])")
    .first()
    .evaluate((element) => getComputedStyle(element).backgroundColor);
  const initialFocalBackground = await focal.evaluate(
    (element) => getComputedStyle(element).backgroundColor,
  );
  const initialFocalColor = await focal.evaluate((element) => getComputedStyle(element).color);
  const otherColor = await slide
    .locator(".schelling-options li:not([data-focal])")
    .first()
    .evaluate((element) => getComputedStyle(element).color);
  expect(initialFocalBackground).not.toBe(otherBackground);
  expect(initialFocalColor).not.toBe(otherColor);
  expect(
    new Set(
      await options.evaluateAll((elements) =>
        elements.map((element) => getComputedStyle(element).backgroundColor),
      ),
    ).size,
  ).toBe(2);
  expect(
    new Set(
      await slide
        .locator(".schelling-options li:not([data-focal])")
        .evaluateAll((elements) =>
          elements.map((element) => getComputedStyle(element).backgroundColor),
        ),
    ).size,
  ).toBe(1);
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
  await expect(explanation).toContainText(/only even number/i);
  await expect(explanation).toContainText(/shared focal point/i);
  await expect(focal).not.toHaveCSS("background-color", otherBackground);
  await expect(focal).not.toHaveCSS("background-color", initialFocalBackground);
  await expect(focal).toHaveCSS("color", "rgb(255, 255, 255)");
  await expect(page.locator(".rail [aria-current]")).toHaveAttribute("href", "#s7");
  await page.keyboard.press("Space");
  await expect(explanation).toBeVisible();
  await expect(page.locator(".rail [aria-current]")).toHaveAttribute("href", "#s7");
  await reset.click();
  await expect(explanation).toBeHidden();
  await expect(reveal).toHaveAttribute("aria-expanded", "false");
  await expect(focal).toHaveCSS("background-color", initialFocalBackground);
  await expect(focal).toHaveCSS("color", initialFocalColor);
  await expect(options).toHaveText(values.map(String));
  await slide.locator("h2").focus();
  await page.keyboard.press("Space");
  await expect(page.locator(".rail [aria-current]")).toHaveAttribute("href", "#s8");
  await expect(page.locator("#s8 h2")).toBeFocused();
  await page.keyboard.press("Space");
  await expect(page.locator(".rail [aria-current]")).toHaveAttribute("href", "#s9");
  await page.keyboard.press("Shift+Space");
  await expect(page.locator(".rail [aria-current]")).toHaveAttribute("href", "#s8");
  await page.keyboard.press("Shift+Space");
  await expect(page.locator(".rail [aria-current]")).toHaveAttribute("href", "#s7");
});

test("Schelling curation follows numbers and resets independently", async ({ page }) => {
  await page.setViewportSize(DESKTOP);
  await page.goto("/deck/#s7");
  const numberSlide = page.locator("#s7");
  await numberSlide.getByRole("button", { name: "Reveal example", exact: true }).click();
  await numberSlide.locator("h2").focus();
  await page.keyboard.press("Space");
  await expect(page.locator(".rail [aria-current]")).toHaveAttribute("href", "#s8");
  const slide = page.locator("#s8");
  const options = slide.locator(".schelling-options li");
  const reveal = slide.getByRole("button", { name: "Reveal example", exact: true });
  const reset = slide.getByRole("button", { name: "Reset game", exact: true });
  const explanation = slide.locator("#curation-explanation");
  await expect(options).toHaveCount(SCHELLING_CURATION_CHOICES.length);
  const phrases = await options.allTextContents();
  expect([...phrases].sort()).toEqual([...SCHELLING_CURATION_CHOICES].sort());
  const focal = slide.locator(".schelling-options li[data-focal]");
  await expect(focal).toHaveCount(1);
  await expect(focal).toHaveText(SCHELLING_CURATION_TARGET);
  await expect(explanation).toBeHidden();
  await expect(reveal).toHaveAttribute("aria-expanded", "false");
  const initialAppearances = await options.evaluateAll((elements) =>
    elements.map((element) => {
      const style = getComputedStyle(element);
      return JSON.stringify([
        style.backgroundColor,
        style.color,
        style.fontSize,
        style.fontWeight,
        style.borderColor,
        style.borderWidth,
        style.borderStyle,
        style.boxShadow,
        style.transform,
        style.opacity,
      ]);
    }),
  );
  expect(new Set(initialAppearances).size).toBe(1);
  const otherBackground = await options
    .filter({ hasNotText: SCHELLING_CURATION_TARGET })
    .first()
    .evaluate((element) => getComputedStyle(element).backgroundColor);
  await reveal.focus();
  await page.keyboard.press("Space");
  await expect(explanation).toBeVisible();
  await expect(explanation).toContainText(SCHELLING_CURATION_TARGET);
  await expect(explanation).toContainText(/shared (context|expectations)/i);
  await expect(explanation).toContainText(/aim|designed|most rewarding/i);
  await expect(reveal).toHaveAttribute("aria-expanded", "true");
  await expect(focal).not.toHaveCSS("background-color", otherBackground);
  await expect(page.locator(".rail [aria-current]")).toHaveAttribute("href", "#s8");
  const bounds = await slide.boundingBox();
  expect(bounds?.height).toBeLessThanOrEqual(DESKTOP.height + GEOMETRY_TOLERANCE_PX);
  const explanationBottom = await explanation.evaluate(
    (element) => element.getBoundingClientRect().bottom,
  );
  const controlsTop = await page
    .locator(".deck-nav")
    .evaluate((element) => element.getBoundingClientRect().top);
  expect(explanationBottom).toBeLessThan(controlsTop);
  await reset.click();
  await expect(explanation).toBeHidden();
  await expect(reveal).toHaveAttribute("aria-expanded", "false");
  await expect(focal).toHaveCSS("background-color", otherBackground);
  await expect(options).toHaveText(phrases);
  await expect(numberSlide.locator("#schelling-explanation")).toBeVisible();
  await reveal.click();
  await slide.locator("h2").focus();
  await page.keyboard.press("Space");
  await expect(page.locator("#s9 h2")).toHaveText(/^Expectations can\s*reinforce good judgment\.$/);
  await page.keyboard.press("Shift+Space");
  await expect(explanation).toBeVisible();
  await page.keyboard.press("Shift+Space");
  await expect(page.locator(".rail [aria-current]")).toHaveAttribute("href", "#s7");
  await numberSlide.getByRole("button", { name: "Reset game", exact: true }).click();
  await expect(numberSlide.locator("#schelling-explanation")).toBeHidden();
  await expect(explanation).toBeVisible();
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
  { slide: "s15", button: "Apply appeal result", result: /0\.700.*43\.8%/ },
  { slide: "s16", button: "Show debunked outcome", result: /Future funding stops/ },
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
  await page.goto("/deck/#s14");
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
