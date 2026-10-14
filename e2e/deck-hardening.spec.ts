import { expect, test } from "@playwright/test";

test.use({ reducedMotion: "reduce" });

const DESKTOP = { width: 1280, height: 720 };
const PHONE = { width: 390, height: 667 };
const READABLE_SUPPORT_PX = 14;
const GEOMETRY_TOLERANCE_PX = 1;

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
