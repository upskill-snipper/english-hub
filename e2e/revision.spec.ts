import { test, expect } from '@playwright/test'

test.describe('Revision Pages', () => {
  test('revision hub page loads', async ({ page }) => {
    await page.goto('/revision')

    await expect(page.locator('main')).toBeVisible()
  })

  test('revision page contains navigation to subtopics', async ({ page }) => {
    await page.goto('/revision')

    // Should have links to revision sub-sections (poetry, texts, etc.)
    const links = page.locator('main a')
    await expect(links.first()).toBeVisible()
  })

  test('poetry revision section loads', async ({ page }) => {
    await page.goto('/revision/poetry')

    await expect(page.locator('main')).toBeVisible()
  })

  test('specific text revision page loads', async ({ page }) => {
    await page.goto('/revision/texts/macbeth')

    await expect(page.locator('main')).toBeVisible()
  })
})
