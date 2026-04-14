import { test, expect } from '@playwright/test'

test.describe('Marking Page', () => {
  test('marking hub page loads', async ({ page }) => {
    await page.goto('/marking')

    await expect(page.locator('main')).toBeVisible()
  })

  test('displays marking interface without submitting', async ({ page }) => {
    await page.goto('/marking')

    const main = page.locator('main')
    await expect(main).toBeVisible()

    // Should show marking-related content (e.g. submit essay, sample essays)
    const links = main.locator('a')
    await expect(links.first()).toBeVisible()
  })

  test('sample marking page loads', async ({ page }) => {
    await page.goto('/marking/sample')

    await expect(page.locator('main')).toBeVisible()
  })
})
