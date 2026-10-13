import { expect, test } from "@playwright/test";

const PHONE = { width: 390, height: 844 };
const INITIAL_SCORE = "0.50";
const NEXT_SCORE = "0.51";
const MAXIMUM_SCORE = "1.00";
const MINIMUM_SCORE = "0.00";

test("a juror can choose and submit a normalized score by keyboard", async ({ page }) => {
  await page.setViewportSize(PHONE);
  await page.goto(`/r/access-${Date.now().toString(36)}`);
  await page.locator("#nm").fill("Keyboard juror");
  await page.locator("#summon").click();
  await page.locator("#open").click();

  const score = page.getByRole("slider", { name: "Your relevance score for Inkscape" });
  await expect(score).toHaveAttribute("aria-valuetext", INITIAL_SCORE);
  await expect(score).toHaveAttribute("aria-valuemin", MINIMUM_SCORE);
  await expect(score).toHaveAttribute("aria-valuemax", MAXIMUM_SCORE);
  const accessibility = await page.context().newCDPSession(page);
  const { nodes } = await accessibility.send("Accessibility.getFullAXTree");
  const accessibleScore = nodes.find((node) => node.role?.value === "slider");
  expect(accessibleScore?.value?.value).toBe(Number(INITIAL_SCORE));
  expect(accessibleScore?.properties).toContainEqual({
    name: "valuetext",
    value: { type: "string", value: String(Number(INITIAL_SCORE)) },
  });
  await accessibility.detach();
  await score.focus();
  await score.press("ArrowRight");
  await expect(score).toHaveAttribute("aria-valuenow", NEXT_SCORE);
  await expect(page.locator("#out")).toHaveText(NEXT_SCORE);
  await score.press("End");
  await expect(score).toHaveAttribute("aria-valuetext", MAXIMUM_SCORE);
  await score.press("ArrowRight");
  await expect(score).toHaveAttribute("aria-valuetext", MAXIMUM_SCORE);
  await score.press("Home");
  await expect(score).toHaveAttribute("aria-valuetext", MINIMUM_SCORE);
  await score.press("ArrowLeft");
  await expect(score).toHaveAttribute("aria-valuetext", MINIMUM_SCORE);

  await page.getByRole("button", { name: "Sit this nominee out" }).click();
  await expect(page.locator("#rng")).toHaveCount(0);
  await page.getByRole("button", { name: "Take my seat back" }).click();
  await score.fill(String(Number(INITIAL_SCORE)));
  await score.focus();
  await score.press("ArrowRight");
  await score.press("Tab");
  await expect(page.getByRole("button", { name: "Seal and submit" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator(".proof")).toContainText(NEXT_SCORE);
  await page.locator("#toReveal").click();
  await expect(page.getByText("Everyone has revealed.")).toBeVisible();
  await page.locator("#toRes").click();
  await expect(page.locator(".v-stats")).toContainText(`you ${NEXT_SCORE}`);
});
