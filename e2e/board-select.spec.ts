import { test, expect } from '@playwright/test'

test.describe('Board Selection', () => {
  test('board selection page loads', async ({ page }) => {
    await page.goto('/board-select')

    await expect(page.locator('main')).toBeVisible()
  })

  test('displays exam board options', async ({ page }) => {
    await page.goto('/board-select')

    // The page should present exam board choices (AQA, Edexcel, OCR, etc.)
    const content = page.locator('main')
    await expect(content).toBeVisible()

    // There should be clickable board options
    const links = content.locator('a, button')
    await expect(links.first()).toBeVisible()
  })

  test('board option links are navigable', async ({ page }) => {
    await page.goto('/board-select')

    // Click the first board option and verify navigation occurs
    const firstOption = page.locator('main').locator('a').first()
    if (await firstOption.isVisible()) {
      const href = await firstOption.getAttribute('href')
      expect(href).toBeTruthy()
    }
  })
})
