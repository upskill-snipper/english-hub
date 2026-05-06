'use client'

/**
 * GoogleAnalytics — server-side relay client.
 *
 * No more gtag.js. All pageviews + events post to /api/ga4/track which
 * forwards to GA4 via the Measurement Protocol — bypasses uBlock /
 * Brave Shields / AdGuard etc. that were silently swallowing every
 * event for ~30–40 % of visitors.
 *
 * Privacy:
 *   - Doesn't fire unless NEXT_PUBLIC_GA4_ID is set.
 *   - Doesn't fire unless localStorage `cookie-consent === 'all'`.
 *   - The server route gates again on the `eh-cookie-consent` cookie,
 *     which initGA4() mirrors from localStorage.
 */

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initGA4, trackPageView, isGAEnabled } from '@/lib/gtag'

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // ── Sync consent → cookie + fire pageview when consent is newly granted ──
  // Without this, a visitor who accepts cookies on the home page would
  // never have a pageview recorded for that page (the route useEffect
  // below only fires on navigation).
  useEffect(() => {
    if (!isGAEnabled()) return

    function syncConsent() {
      try {
        initGA4()
      } catch {
        // localStorage / cookie write blocked — bail silently
      }
    }

    // On mount: write the consent cookie if consent is already 'all'
    // (returning visitor). The route useEffect below will then fire
    // the first pageview with the cookie in place.
    syncConsent()

    // When the cookie banner saves a choice, mirror it and — if newly
    // consented — manually fire a pageview for the current page since
    // the route useEffect won't re-run without a navigation.
    function onConsentChange() {
      syncConsent()
      try {
        if (localStorage.getItem('cookie-consent') === 'all') {
          const url =
            window.location.pathname + (window.location.search ? window.location.search : '')
          trackPageView(url)
        }
      } catch {
        // ignore
      }
    }

    window.addEventListener('cookie-consent-changed', onConsentChange)
    return () => {
      window.removeEventListener('cookie-consent-changed', onConsentChange)
    }
  }, [])

  // ── Fire pageview on every route change ────────────────────────────────
  // Server-side gate decides whether to actually relay — if the visitor
  // hasn't consented, the route returns 204 silently.
  useEffect(() => {
    if (!isGAEnabled()) return
    if (typeof window === 'undefined') return
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    trackPageView(url)
  }, [pathname, searchParams])

  return null
}
