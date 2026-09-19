import { test, expect } from '@playwright/test'

/**
 * A11Y-1, the half of it a unit test cannot reach.
 *
 * THE DEFECT. Every `'use client'` component read the `eh-lang` cookie and
 * nothing else, so a visitor arriving at /ar from Google, who by definition has
 * no cookie yet, got an Arabic page with an English header, an English Log in
 * and an English cookie banner. Probed live on 18 September 2026: the header
 * read "Your Hub, Mark an essay, Mock exams, IELTS, Pricing" while
 * `<html data-lang>` said "ar".
 *
 * THE FIX was `readClientLocale()`, which falls back to `<html data-lang>` when
 * no cookie matches, and `src/__tests__/client-locale-fallback.test.ts` covers
 * it thoroughly. But every assertion in that file sets `dataset.lang` by hand.
 * It proves the function reads a stamp; it cannot prove the stamp is there.
 *
 * The stamp arrives through four hops, and the unit test simulates all of them:
 *
 *   middleware sets x-lang=ar on the /ar branch
 *     -> the root layout reads it
 *       -> renders `<html data-lang={lang}>`
 *         -> the client component reads document.documentElement.dataset.lang
 *
 * Break any hop and the unit test still passes while /ar goes back to English.
 * That is the shape this repository keeps finding: the check that ran was not
 * the check that mattered. So this file asserts the rendered page, in a browser,
 * with no cookies, which is what the search visitor actually gets.
 *
 * IF YOU MUTATION-TEST THIS, RESTART THE DEV SERVER FIRST. Deleting the
 * fallback and re-running left all six tests green, which looked like a weak
 * test and was not: the running `next dev` was serving a stale client bundle
 * and never recompiled. Hard-wiring the resolver to return 'es' and still
 * getting an Arabic header is what proved it. A fresh server showed the
 * mutation failing exactly the two tests that depend on the fallback, on both
 * the desktop and the mobile project. Worth knowing, because a green run
 * against a stale bundle is indistinguishable from a passing test.
 *
 * WHY IT MATTERS TWICE. /ar is the only indexed Arabic entry point and IELTS at
 * GBP 39/month is the highest-priced plan, so this met every Gulf search
 * visitor. It was also a consent problem: PECR consent has to be informed, and
 * the banner was in a language the reader had not chosen.
 */

/** The no-board header, which is what a first-time visitor sees. */
const AR_NAV = {
  revision: 'المراجعة',
  blog: 'المدونة',
  schools: 'المدارس',
  pricing: 'الأسعار',
}

/**
 * The English strings that were appearing on the Arabic page. Asserted absent
 * as well as asserting the Arabic present, because a page that renders neither
 * would satisfy a presence check alone.
 *
 * `header.nav.your_hub` is deliberately not in either list: its Arabic value is
 * "Hub مالك", which contains the Latin word Hub, so it cannot distinguish the
 * two surfaces.
 */
const EN_NAV = ['Revision', 'Blog', 'Schools', 'Pricing']

const AR_CONSENT = {
  accept: 'موافقة على الكل',
  reject: 'رفض الكل',
  manage: 'إدارة التفضيلات',
}

/**
 * The visible navigation, on whichever layout this project is running.
 *
 * Below the `lg` breakpoint the nav collapses into a sheet behind a hamburger,
 * so `header.innerText` carries the brand and the auth buttons but none of the
 * labels. The mobile-chrome project is not a nice-to-have here: Gulf search
 * traffic is overwhelmingly on phones, so the Arabic surface on a small screen
 * is the case this item is really about.
 *
 * The trigger is found by its accessible name in EITHER language, because that
 * name is itself translated and hard-coding the English one would make this
 * helper fail on exactly the pages it exists to test.
 */
async function navText(page: import('@playwright/test').Page): Promise<string> {
  const header = page.locator('header').first()
  const desktopNav = header.locator('a[href="/pricing"]').first()
  if (await desktopNav.isVisible().catch(() => false)) {
    return (await header.innerText()).trim()
  }

  const trigger = page.getByRole('button', { name: /افتح القائمة|Open menu/ })
  await trigger.click()
  const sheet = page
    .getByRole('dialog')
    .filter({ hasText: /The|English/ })
    .last()
  await sheet.waitFor({ state: 'visible', timeout: 10_000 })
  return (await sheet.innerText()).trim()
}

test.describe('the Arabic surface, for a visitor arriving from search', () => {
  test('the URL prefix reaches the DOM as a stamp', async ({ page }) => {
    // Hop one to three. If this fails, readClientLocale() has nothing to read
    // and every other test in this file is failing for the same reason.
    await page.goto('/ar')
    await expect(page.locator('html')).toHaveAttribute('data-lang', 'ar')
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar')
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
  })

  test('and the visitor really has no cookie, which is the whole premise', async ({ page }) => {
    // If the /ar branch ever starts setting eh-lang - the optional extra the
    // backlog entry mentioned - then this file is no longer testing the
    // fallback, it is testing the cookie. Better to find that out here, with a
    // message that says so, than to keep a green test that has quietly changed
    // what it covers.
    await page.goto('/ar')
    const cookies = await page.context().cookies()
    const lang = cookies.find((c) => c.name === 'eh-lang')
    expect(
      lang,
      'eh-lang is now set on /ar, so these tests no longer exercise the data-lang fallback',
    ).toBeUndefined()
  })

  test('the navigation renders in Arabic', async ({ page }) => {
    await page.goto('/ar')
    await page.waitForLoadState('networkidle')

    // Vacuity guard. Without it, "no English text" passes on a nav that
    // rendered nothing at all, which is the more likely failure of the two.
    await expect(page.locator('header').first().locator('a')).not.toHaveCount(0)

    const text = await navText(page)
    expect(text.length, 'the navigation rendered empty').toBeGreaterThan(20)

    for (const [key, word] of Object.entries(AR_NAV)) {
      expect(text, `${key} is not in Arabic`).toContain(word)
    }
    for (const word of EN_NAV) {
      expect(text, `the navigation still shows "${word}" on /ar`).not.toContain(word)
    }
  })

  test('and so does the cookie banner, which is the consent point', async ({ page }) => {
    // The banner mounts behind a 500ms timer and is gated on localStorage, so a
    // fresh context always gets it.
    await page.goto('/ar')
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible({ timeout: 10_000 })

    const text = await dialog.innerText()
    for (const [key, word] of Object.entries(AR_CONSENT)) {
      expect(text, `the ${key} button is not in Arabic`).toContain(word)
    }
    for (const word of ['Accept All', 'Reject All', 'Manage Preferences']) {
      expect(text, `the consent banner still shows "${word}" on /ar`).not.toContain(word)
    }
  })
})

test.describe('the counterweights', () => {
  test('English is untouched on the unprefixed site', async ({ page }) => {
    // Without this, every assertion above could be satisfied by a change that
    // made the whole product Arabic.
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await expect(page.locator('html')).toHaveAttribute('data-lang', 'en')

    const text = await navText(page)
    for (const word of EN_NAV) {
      expect(text, `the English navigation lost "${word}"`).toContain(word)
    }
  })

  test('a reader who has chosen English keeps it on /ar', async ({ page, context, baseURL }) => {
    // The behaviour the resolver deliberately preserves by checking the cookie
    // first. Without it the language toggle would appear to do nothing on /ar:
    // the reader picks English, and the URL prefix drags it straight back.
    // The cookie is scoped to baseURL rather than a literal localhost, so this
    // still works when BASE_URL points the suite at a deployment.
    await context.addCookies([{ name: 'eh-lang', value: 'en', url: baseURL! }])
    await page.goto('/ar')
    await page.waitForLoadState('networkidle')

    const text = await navText(page)
    expect(text, 'the cookie no longer wins over the URL prefix').toContain('Pricing')
    expect(text).not.toContain(AR_NAV.pricing)
  })
})
