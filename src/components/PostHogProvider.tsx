'use client'

/**
 * PostHogProvider - mounts PostHog on the client and captures $pageview
 * events on every App Router route change.
 *
 * Consent: PostHog is initialised with `opt_out_capturing_by_default: true`
 * (see src/lib/posthog.ts). Nothing ships until the user accepts analytics
 * cookies AND is not flagged as a minor. This component listens for the
 * `cookie-consent-changed` event dispatched by <CookieConsent /> and
 * refreshes the opt-in state live.
 *
 * Suspense wrapper: Next.js 15 bails out of static generation on any page
 * whose tree reads `useSearchParams()` without a <Suspense> boundary.
 * Since this provider sits in the root layout, that bail-out would
 * affect every statically-pre-rendered page in the app. The
 * `<Suspense fallback={null}>` around `PageviewTracker` isolates the
 * read so SSG can proceed for pages that don't themselves need it.
 */

import { Suspense, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { capture, initPostHog, refreshOptInState } from '@/lib/posthog'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  // One-time init on mount (client-only). Does not depend on search params,
  // so it can stay outside the Suspense boundary.
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

  return (
    <>
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
      {children}
    </>
  )
}

// Isolated so the `useSearchParams()` read is inside a Suspense boundary.
// Keeps static prerender happy for every other page in the app.
function PageviewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname) return
    const qs = searchParams?.toString()
    const url = qs ? `${pathname}?${qs}` : pathname
    capture('$pageview', {
      $current_url: typeof window !== 'undefined' ? `${window.location.origin}${url}` : url,
      path: pathname,
    })
  }, [pathname, searchParams])

  return null
}
