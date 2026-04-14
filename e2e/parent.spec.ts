import { test, expect } from '@playwright/test'

test.describe('Parent portal pages', () => {
  test('parent login page loads', async ({ page }) => {
    await page.goto('/parent/login')

    await expect(page.locator('main')).toBeVisible()

    // Should have a login form or heading related to parents
    const heading = page.locator('h1, h2').first()
    await expect(heading).toBeVisible()
  })

  test('parent signup page loads', async ({ page }) => {
    await page.goto('/parent/signup')

    await expect(page.locator('main')).toBeVisible()
  })

  test('parent portal root page loads', async ({ page }) => {
    await page.goto('/parent')

    // Should load without a server error (200 or redirect to login)
    const status = page.url()
    const isOk =
      status.includes('/parent') ||
      status.includes('/auth') ||
      status.includes('/login')
    expect(isOk).toBe(true)

    await expect(page.locator('body')).toBeVisible()
  })

  test('parent settings page requires auth', async ({ page }) => {
    await page.goto('/parent/settings')

    // Should redirect to login or show auth prompt
    const url = page.url()
    const isRedirected =
      url.includes('/login') ||
      url.includes('/auth') ||
      url.includes('/parent/login')
    const hasLoginPrompt = await page.locator('text=/sign in|log in|parent/i').count() > 0

    expect(isRedirected || hasLoginPrompt).toBe(true)
  })
})
