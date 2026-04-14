import { test, expect } from '@playwright/test'

test.describe('Authentication pages', () => {
  test('login page loads with form', async ({ page }) => {
    await page.goto('/auth/login')

    // Page should have a login form or heading
    await expect(page.locator('main')).toBeVisible()

    // Should have email / password inputs or a sign-in button
    const emailInput = page.locator('input[type="email"], input[name="email"]')
    const passwordInput = page.locator('input[type="password"]')
    const signInButton = page.locator('button, [type="submit"]').filter({ hasText: /sign in|log in/i })

    // At least the form elements or a SSO button should be present
    const hasForm = await emailInput.count() > 0 || await signInButton.count() > 0
    expect(hasForm).toBe(true)
  })

  test('register page loads', async ({ page }) => {
    await page.goto('/auth/register')

    await expect(page.locator('main')).toBeVisible()

    // Should have registration-related content
    const heading = page.locator('h1, h2').first()
    await expect(heading).toBeVisible()
  })

  test('forgot password page loads', async ({ page }) => {
    await page.goto('/auth/forgot-password')

    await expect(page.locator('main')).toBeVisible()
  })

  test('unauthenticated user visiting protected route is redirected', async ({ page }) => {
    // Visiting a route that requires auth should redirect to login
    const response = await page.goto('/account/billing')

    // Should either redirect to login or show a login prompt
    const url = page.url()
    const isRedirected = url.includes('/auth/login') || url.includes('/auth') || url.includes('/login')
    const hasLoginPrompt = await page.locator('text=/sign in|log in/i').count() > 0

    expect(isRedirected || hasLoginPrompt).toBe(true)
  })
})
