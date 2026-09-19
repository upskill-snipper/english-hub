'use client'

// ─── Measuring the day-8 card ───────────────────────────────────────────────
//
// SF-7 asked for `trial_ended_seen` and `trial_ended_upgrade_clicked` "so the
// roadmap's week 3 funnel read has the number". The card shipped; the two
// events did not, which is the same shape as UX-2: the surface exists and
// nothing can say whether it works.
//
// It matters more here than on most screens. This is a no-card trial, so day 8
// is the only moment the product asks for money, and without these two events
// "nobody upgraded" and "nobody ever saw the card" are indistinguishable. They
// need opposite fixes.
//
// WHY A SEPARATE CLIENT COMPONENT. `NotOnProCard` is an async server component
// - it awaits `t()` - and PostHog capture is a browser call. Rather than make
// the card a client component and lose the server-side translation, the events
// live in this leaf, which renders nothing.
//
// `capture()` is the consent-gated wrapper: it returns false for minors and for
// anyone who has not consented, so this sends nothing for either.

import { useEffect, useRef } from 'react'
import { capture, EVENTS } from '@/lib/posthog'

export function NotOnProSeen({ kind }: { kind: 'trial-ended' | 'never-trialed' }) {
  // React 18 runs effects twice in development StrictMode, and a "seen" event
  // fired twice halves the apparent conversion rate of the one screen this
  // item exists to measure.
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true
    capture(EVENTS.TRIAL_ENDED_SEEN, { kind })
  }, [kind])

  return null
}

/**
 * Wraps the upgrade link. A click is reported before navigation rather than
 * after: the page is leaving, and an event queued behind a navigation is an
 * event that may never be sent.
 */
export function NotOnProUpgradeClick({
  kind,
  children,
}: {
  kind: 'trial-ended' | 'never-trialed'
  children: React.ReactNode
}) {
  return (
    <span
      onClickCapture={() => capture(EVENTS.TRIAL_ENDED_UPGRADE_CLICKED, { kind })}
      className="contents"
    >
      {children}
    </span>
  )
}
