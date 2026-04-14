import { test, expect } from '@playwright/test'

test.describe('IGCSE Section', () => {
  test('IGCSE hub page loads', async ({ page }) => {
    await page.goto('/igcse')

    await expect(page.locator('main')).toBeVisible()
  })

  test('displays exam board options for IGCSE', async ({ page }) => {
    await page.goto('/igcse')

    // Should present links to Cambridge, Edexcel, etc.
    const links = page.locator('main a')
    await expect(links.first()).toBeVisible()
  })

  test('Cambridge IGCSE section loads', async ({ page }) => {
    await page.goto('/igcse/cambridge')

    await expect(page.locator('main')).toBeVisible()
  })

  test('IGCSE 0500 syllabus page loads', async ({ page }) => {
    await page.goto('/igcse/cambridge/0500')

    await expect(page.locator('main')).toBeVisible()
  })
})
