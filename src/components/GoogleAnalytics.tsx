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
import { initGA4, trackPageView, isGAEnabled, GA_MEASUREMENT_ID } from '@/lib/gtag'
import { hasAnalyticsConsent } from '@/components/cookie-consent'

// `window.gtag` is declared globally in src/global.d.ts. We do NOT
// load gtag.js here (the relay is server-side), but if a downstream
// integration ever attaches it to the window we want our child-safe
// flags applied automatically.
/**
 * Apply the Children's Code-mandated GA4 config flags:
 *   - anonymize_ip                       — truncate visitor IP
 *   - allow_google_signals               — disable cross-device / demographics
 *   - allow_ad_personalization_signals   — disable ads personalisation
 *
 * These three flags MUST be set for any GA4 property serving under-18
 * visitors. They are idempotent — safe to call on every consent grant.
 */
function applyChildSafeGA4Config(): void {
  if (typeof window === 'undefined') return
  if (!GA_MEASUREMENT_ID) return
  if (typeof window.gtag !== 'function') return
  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })
}

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
        // Re-apply child-safe flags after every consent sync — covers the
        // case where gtag.js was attached after our first call.
        if (hasAnalyticsConsent()) {
          applyChildSafeGA4Config()
        }
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
        if (hasAnalyticsConsent()) {
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
  // Client-side gate: skip the network call entirely unless the visitor
  // has accepted analytics. The server route gates again on the cookie,
  // but cutting the request here saves bandwidth and keeps the network
  // tab clean for non-consenting users.
  useEffect(() => {
    if (!isGAEnabled()) return
    if (typeof window === 'undefined') return
    if (!hasAnalyticsConsent()) return
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    trackPageView(url)
  }, [pathname, searchParams])

  return null
}
