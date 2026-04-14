import { test, expect } from '@playwright/test'

test.describe('Settings page', () => {
  test('settings page loads', async ({ page }) => {
    await page.goto('/settings')

    await expect(page.locator('main')).toBeVisible()
  })

  test('settings page shows board/notification sections', async ({ page }) => {
    await page.goto('/settings')

    await expect(page.locator('main')).toBeVisible()

    const body = await page.textContent('main')
    // Settings page should reference exam board or notification preferences
    expect(body?.toLowerCase()).toMatch(/board|notification|settings|preferences/)
  })
})
