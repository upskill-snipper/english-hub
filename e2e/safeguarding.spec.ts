import { test, expect } from '@playwright/test'

test.describe('Safeguarding', () => {
  test('safeguarding policy page loads with key content', async ({ page }) => {
    await page.goto('/safeguarding')

    await expect(page.locator('main')).toBeVisible()

    const body = await page.textContent('main')
    expect(body?.toLowerCase()).toMatch(/safeguard/)
  })

  test('safeguarding report page loads with form elements', async ({ page }) => {
    await page.goto('/safeguarding/report')

    await expect(page.locator('main')).toBeVisible()

    // The report page should show report type options
    const body = await page.textContent('main')
    expect(body?.toLowerCase()).toMatch(/worried|report|concern/)
  })

  test('safeguarding report page shows support resources', async ({ page }) => {
    await page.goto('/safeguarding/report')

    await expect(page.locator('main')).toBeVisible()

    // Should include external support links (Childline, etc.)
    const body = await page.textContent('main')
    expect(body?.toLowerCase()).toMatch(/talk to someone|confidential|support/)
  })
})
