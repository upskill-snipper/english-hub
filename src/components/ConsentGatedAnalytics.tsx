'use client'

/**
 * ConsentGatedAnalytics — mounts Vercel Analytics, Vercel Speed Insights,
 * and the Rewardful affiliate script ONLY after the visitor has accepted
 * analytics cookies.
 *
 * Before consent: nothing is rendered AND nothing is bundled into the
 * initial client chunk — the three tracking libraries are pulled in via
 * `next/dynamic` with `ssr: false`, so first-paint weight is zero and the
 * 80-120 KB cost only materialises after a user opts in.
 *
 * Re-reads consent on mount (for returning visitors) and listens for a
 * `cookie-consent-changed` event so the gate opens as soon as the
 * banner saves a choice.
 *
 * Compliance:
 *   - PECR reg. 6 (UK) — no non-essential tracking before consent.
 *   - ICO Children's Code standard 15 — third-party online tools are
 *     suppressed until the user opts in; under-16 accounts have
 *     child-defaults that keep analytics OFF by default, so the
 *     consent flag is not flipped to 'all' without an affirmative
 *     action.
 *
 * Perf (Cycle 4 follow-up):
 *   - Previous version statically imported `@vercel/analytics/react`
 *     and `@vercel/speed-insights/next`. Even though the component
 *     returned null pre-consent, the JS chunks were in the initial
 *     bundle. Dynamic imports remove that weight entirely.
 */

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import { hasAnalyticsConsent } from '@/components/cookie-consent'
import { useT } from '@/lib/i18n/use-t'

// Dynamic, client-only imports. `ssr: false` + `loading: () => null`
// means these modules are code-split into their own chunk and loaded
// only when consent flips to true.
const Analytics = dynamic(() => import('@vercel/analytics/react').then((m) => m.Analytics), {
  ssr: false,
  loading: () => null,
})

const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then((m) => m.SpeedInsights),
  { ssr: false, loading: () => null },
)

export function ConsentGatedAnalytics() {
  const t = useT()
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    setConsented(hasAnalyticsConsent())
    function onChange() {
      setConsented(hasAnalyticsConsent())
    }
    window.addEventListener('cookie-consent-changed', onChange)
    // Re-check when the tab becomes visible (cross-tab consent changes)
    window.addEventListener('focus', onChange)
    return () => {
      window.removeEventListener('cookie-consent-changed', onChange)
      window.removeEventListener('focus', onChange)
    }
  }, [])

  if (!consented) return null

  return (
    <div role="region" aria-label={t('layout.analytics.label')} className="sr-only">
      <Analytics />
      <SpeedInsights />
      {process.env.NEXT_PUBLIC_REWARDFUL_KEY && (
        <Script
          src="https://r.wdfl.co/rw.js"
          data-rewardful={process.env.NEXT_PUBLIC_REWARDFUL_KEY}
          strategy="afterInteractive"
        />
      )}
    </div>
  )
}
