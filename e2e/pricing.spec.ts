import { test, expect } from '@playwright/test'

test.describe('Pricing Page', () => {
  test('pricing page loads successfully', async ({ page }) => {
    await page.goto('/pricing')

    await expect(page.locator('main')).toBeVisible()
  })

  test('displays pricing plans', async ({ page }) => {
    await page.goto('/pricing')

    // Should show at least one pricing card or plan
    const main = page.locator('main')
    await expect(main).toContainText(/free|premium|pro|plan|month|year/i)
  })

  test('pricing page contains call-to-action buttons', async ({ page }) => {
    await page.goto('/pricing')

    // Expect at least one CTA button (e.g. "Get Started", "Subscribe")
    const buttons = page.locator('main').locator('a, button')
    await expect(buttons.first()).toBeVisible()
  })
})
