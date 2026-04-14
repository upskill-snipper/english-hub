import { test, expect } from '@playwright/test'

test.describe('Legal pages', () => {
  test('privacy policy page loads', async ({ page }) => {
    await page.goto('/privacy-policy')

    await expect(page.locator('main')).toBeVisible()

    // Should contain privacy-related content
    const body = await page.textContent('main')
    expect(body?.toLowerCase()).toContain('privacy')
  })

  test('terms of service page loads', async ({ page }) => {
    await page.goto('/terms')

    await expect(page.locator('main')).toBeVisible()

    const body = await page.textContent('main')
    expect(body?.toLowerCase()).toMatch(/terms|conditions|service/)
  })

  test('online safety page loads', async ({ page }) => {
    await page.goto('/legal/online-safety')

    await expect(page.locator('main')).toBeVisible()

    const body = await page.textContent('main')
    expect(body?.toLowerCase()).toMatch(/safety|safeguard|online/)
  })

  test('AI transparency page loads', async ({ page }) => {
    await page.goto('/legal/ai-transparency')

    await expect(page.locator('main')).toBeVisible()

    const body = await page.textContent('main')
    expect(body?.toLowerCase()).toMatch(/ai|artificial intelligence|transparency/)
  })

  test('acceptable use policy page loads', async ({ page }) => {
    await page.goto('/legal/acceptable-use')

    await expect(page.locator('main')).toBeVisible()
  })

  test('cancellation policy page loads', async ({ page }) => {
    await page.goto('/legal/cancellation')

    await expect(page.locator('main')).toBeVisible()
  })
})
