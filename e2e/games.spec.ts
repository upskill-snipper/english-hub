import { test, expect } from '@playwright/test'

test.describe('Games Page', () => {
  test('games hub page loads', async ({ page }) => {
    await page.goto('/games')

    await expect(page.locator('main')).toBeVisible()
  })

  test('displays available games', async ({ page }) => {
    await page.goto('/games')

    // Should present links to individual games
    const links = page.locator('main a')
    await expect(links.first()).toBeVisible()
  })

  test('individual game page loads', async ({ page }) => {
    await page.goto('/games/vocabulary-builder')

    await expect(page.locator('main')).toBeVisible()
  })
})
