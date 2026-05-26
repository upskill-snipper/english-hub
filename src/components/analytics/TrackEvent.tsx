'use client'

/**
 * TrackEvent - fire-and-forget funnel event helper for the product
 * analytics (PostHog EU) pipeline. Mount it somewhere inside a page to
 * record a single event on mount.
 *
 * All capture() calls are already gated by canCaptureAnalytics() in
 * src/lib/posthog.ts, so TrackEvent is a safe no-op for non-consented
 * visitors and for minor accounts.
 *
 * Example:
 *   <TrackEvent event="pricing_viewed" />
 */

import { useEffect } from 'react'
import { capture, type CaptureProps } from '@/lib/posthog'

export function TrackEvent({ event, props }: { event: string; props?: CaptureProps }) {
  useEffect(() => {
    capture(event, props)
    // We intentionally fire once per mount - re-firing on prop changes would
    // distort funnel counts.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
