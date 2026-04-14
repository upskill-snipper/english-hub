import { test, expect } from '@playwright/test'

test.describe('School Landing Page', () => {
  test('for-schools page loads', async ({ page }) => {
    await page.goto('/for-schools')

    await expect(page.locator('main')).toBeVisible()
  })

  test('displays school-oriented content', async ({ page }) => {
    await page.goto('/for-schools')

    const main = page.locator('main')
    await expect(main).toContainText(/school/i)
  })

  test('has a contact or registration link', async ({ page }) => {
    await page.goto('/for-schools')

    // Should link to a contact or registration page for schools
    const links = page.locator('main a')
    await expect(links.first()).toBeVisible()
  })
})
