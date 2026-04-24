'use client'

/**
 * PostHogProvider — mounts PostHog on the client and captures $pageview
 * events on every App Router route change.
 *
 * Consent: PostHog is initialised with `opt_out_capturing_by_default: true`
 * (see src/lib/posthog.ts). Nothing ships until the user accepts analytics
 * cookies AND is not flagged as a minor. This component listens for the
 * `cookie-consent-changed` event dispatched by <CookieConsent /> and
 * refreshes the opt-in state live.
 */

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { capture, initPostHog, refreshOptInState } from '@/lib/posthog'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // One-time init on mount (client-only).
  useEffect(() => {
    initPostHog()

    function onConsentChange() {
      refreshOptInState()
    }
    window.addEventListener('cookie-consent-changed', onConsentChange)
    window.addEventListener('focus', onConsentChange)
    return () => {
      window.removeEventListener('cookie-consent-changed', onConsentChange)
      window.removeEventListener('focus', onConsentChange)
    }
  }, [])

  // Manual pageview capture on route changes (App Router doesn't fire a
  // navigation event PostHog can hook into; we use pathname + search).
  useEffect(() => {
    if (!pathname) return
    const qs = searchParams?.toString()
    const url = qs ? `${pathname}?${qs}` : pathname
    capture('$pageview', {
      $current_url:
        typeof window !== 'undefined'
          ? `${window.location.origin}${url}`
          : url,
      path: pathname,
    })
  }, [pathname, searchParams])

  return <>{children}</>
}
