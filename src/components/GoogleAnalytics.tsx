'use client'

/**
 * GoogleAnalytics — Mounts in the root layout and:
 *
 * 1. Auto-initialises GA4 if the user previously accepted cookies
 *    (so returning visitors don't re-trigger the consent banner just
 *    to be tracked)
 * 2. Tracks page views on every Next.js route change (client-side
 *    navigation doesn't fire page_view automatically)
 *
 * Privacy:
 * - Does nothing unless NEXT_PUBLIC_GA4_ID is set
 * - Does nothing unless localStorage cookie-consent === 'all'
 * - Anonymises IP via initGA4()
 */

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initGA4, trackPageView, isGAEnabled } from '@/lib/gtag'

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // On first mount: load GA4 if user has previously consented
  useEffect(() => {
    if (!isGAEnabled()) return
    try {
      const consent = localStorage.getItem('cookie-consent')
      if (consent === 'all') {
        initGA4()
      }
    } catch {
      // localStorage unavailable (private browsing, etc.) — skip silently
    }
  }, [])

  // On route change: track page view
  useEffect(() => {
    if (!isGAEnabled()) return
    if (typeof window === 'undefined') return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof (window as any).gtag !== 'function') return // Not loaded (no consent yet)

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    trackPageView(url)
  }, [pathname, searchParams])

  // No visible output — this is a tracking-only component
  return null
}
