/**
 * Server wrapper around `TrialCountdownBanner`.
 *
 * Async server component that resolves the user's trial state via
 * `getTrialState()` and forwards it to the client banner. Keeps page
 * components free of the Prisma+Supabase plumbing and lets us SSR the
 * "X days left" headline with no client-side flash.
 *
 * Use directly in any server component - including pages that are
 * themselves `'use client'`, by mounting the wrapper one level up in a
 * server `layout.tsx` (see `src/app/dashboard/layout.tsx`).
 */

import { headers } from 'next/headers'

import { getTrialState } from '@/lib/billing/trial-state'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { peekAllowance, resolveUsageSubject } from '@/lib/usage/free-allowance'
import { resolveNoCardTrial } from '@/lib/usage/trial-allowance'
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

  // AI checks used, beside the days remaining. PEEK ONLY - this must never
  // consume, or simply loading a page would burn the allowance it reports.
  //
  // Only a NO-CARD trial is metered. A card-on-file trial (the first 7 days
  // free WITH a card) passes resolveNoCardTrial() as null and shows no
  // ceiling, because it does not have one.
  let aiChecks: { used: number; limit: number } | null = null
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      const trial = await resolveNoCardTrial({ id: user.id, email: user.email })
      if (trial) {
        const subject = resolveUsageSubject({ headers: await headers() }, user.id)
        const state = await peekAllowance(subject, 'trial_ai', {
          trialSubscriptionId: trial.subscriptionId,
          trialEndsAt: trial.trialEndsAt,
        })
        aiChecks = { used: state.used, limit: state.limit }
      }
    }
  } catch (err) {
    // Never block the banner (or the page) on the usage read.
    console.error('[TrialCountdownBannerServer] usage peek failed', err)
  }

  return (
    <TrialCountdownBanner
      trialEndsAt={trialEndsAt}
      isPremium={isPremium}
      aiChecks={aiChecks}
      className={className}
    />
  )
}

export default TrialCountdownBannerServer
