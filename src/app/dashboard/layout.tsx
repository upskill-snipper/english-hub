/**
 * Dashboard layout - server component.
 *
 * The dashboard page itself is `'use client'` (it calls Supabase from the
 * browser). To server-render the trial countdown banner above the
 * greeting hero we mount it here, in a thin async layout that wraps every
 * `/dashboard/*` route. Children are passed through untouched.
 *
 * NOTE: nested route layouts (e.g. `dashboard/teacher/layout.tsx`,
 * `dashboard/parent/layout.tsx`) compose underneath this one, so the
 * banner appears above their content too. That is the desired behaviour -
 * a teacher in trial should see the same countdown.
 */

import type { Metadata } from 'next'
import { TrialCountdownBannerServer } from '@/components/billing/TrialCountdownBannerServer'

// `TrialCountdownBannerServer` reads `cookies()` via the Supabase server
// client. Marking the whole layout dynamic suppresses the noisy
// "Dynamic server usage: ... used `cookies`" prerender warnings the build
// previously emitted on every /dashboard/* route. The protected routes
// were going to bail out of static prerender anyway (they all gate on a
// session cookie), so this is purely a build-log cleanup.
export const dynamic = 'force-dynamic'

// Belt-and-braces noindex for the entire /dashboard/* tree. The primary
// defense is the Disallow rule in robots.txt; this metadata is a
// defense-in-depth backup so any crawler that ignores robots.txt still
// sees a clear noindex directive.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Banner sits above the page chrome with the same horizontal
          gutter as the dashboard inner container so it visually aligns
          with the greeting card below. */}
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <TrialCountdownBannerServer />
      </div>
      {children}
    </>
  )
}
