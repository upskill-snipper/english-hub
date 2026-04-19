'use client'

/**
 * ConsentGatedAnalytics — mounts Vercel Analytics, Vercel Speed Insights,
 * and the Rewardful affiliate script ONLY after the visitor has accepted
 * analytics cookies in the cookie banner.
 *
 * Before consent: nothing is rendered, no scripts are loaded, no network
 * calls are made.
 *
 * After consent: the components mount and the Rewardful script is injected.
 *
 * Re-reads consent on mount (for returning visitors) and listens for a
 * `cookie-consent-changed` event so that the gate can open as soon as the
 * banner saves a choice. This pattern matches GoogleAnalytics.tsx.
 *
 * Compliance:
 *   - PECR reg. 6 (UK) — no non-essential tracking before consent
 *   - ICO Children's Code standard 15 — third-party online tools are suppressed
 *     until the user opts in; for under-16 accounts our child-defaults
 *     (src/lib/privacy/child-defaults.ts) keep analytics OFF by default, so
 *     the consent flag will not be set to "all" without an affirmative action.
 */

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { hasAnalyticsConsent } from '@/components/cookie-consent'

export function ConsentGatedAnalytics() {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    setConsented(hasAnalyticsConsent())
    function onChange() {
      setConsented(hasAnalyticsConsent())
    }
    window.addEventListener('cookie-consent-changed', onChange)
    // Also re-check when the tab becomes visible (cross-tab consent changes)
    window.addEventListener('focus', onChange)
    return () => {
      window.removeEventListener('cookie-consent-changed', onChange)
      window.removeEventListener('focus', onChange)
    }
  }, [])

  if (!consented) return null

  return (
    <>
      <Analytics />
      <SpeedInsights />
      {process.env.NEXT_PUBLIC_REWARDFUL_KEY && (
        <Script
          src="https://r.wdfl.co/rw.js"
          data-rewardful={process.env.NEXT_PUBLIC_REWARDFUL_KEY}
          strategy="afterInteractive"
        />
      )}
    </>
  )
}
