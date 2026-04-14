import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads successfully with key content', async ({ page }) => {
    await page.goto('/')

    // Page title should contain the site name
    await expect(page).toHaveTitle(/english hub/i)

    // Main heading or hero section should be visible
    await expect(page.locator('main')).toBeVisible()
  })

  test('renders navigation links', async ({ page }) => {
    await page.goto('/')

    // The header/nav should contain key navigation items
    const nav = page.locator('header, nav').first()
    await expect(nav).toBeVisible()
  })

  test('has a working footer', async ({ page }) => {
    await page.goto('/')

    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })
})
