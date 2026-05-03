/**
 * Server wrapper around `TrialCountdownBanner`.
 *
 * Async server component that resolves the user's trial state via
 * `getTrialState()` and forwards it to the client banner. Keeps page
 * components free of the Prisma+Supabase plumbing and lets us SSR the
 * "X days left" headline with no client-side flash.
 *
 * Use directly in any server component — including pages that are
 * themselves `'use client'`, by mounting the wrapper one level up in a
 * server `layout.tsx` (see `src/app/dashboard/layout.tsx`).
 */

import { getTrialState } from '@/lib/billing/trial-state'
import { TrialCountdownBanner } from './TrialCountdownBanner'

interface Props {
  className?: string
}

export async function TrialCountdownBannerServer({ className }: Props) {
  const { trialEndsAt, isPremium } = await getTrialState()
  // Fast-path: skip rendering the client component entirely when there's
  // nothing to show. Saves a hydration boundary on every page load for
  // free users and converted-premium users.
  if (isPremium || !trialEndsAt) return null
  return (
    <TrialCountdownBanner trialEndsAt={trialEndsAt} isPremium={isPremium} className={className} />
  )
}

export default TrialCountdownBannerServer
