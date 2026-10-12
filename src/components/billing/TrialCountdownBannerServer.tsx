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
import { getPupilSchoolAccess } from '@/lib/school-entitlement'
import { TrialCountdownBanner } from './TrialCountdownBanner'
import { NotOnProCard } from './NotOnProCard'

interface Props {
  className?: string
}

/**
 * Whether the signed-in person is a pupil of a school whose access is live.
 * Never throws; a failed read answers false, which only means the usual
 * banner is shown.
 */
async function isLiveSchoolPupil(): Promise<boolean> {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    return user ? Boolean(await getPupilSchoolAccess(user.id)) : false
  } catch (err) {
    console.error('[TrialCountdownBannerServer] school lookup failed', err)
    return false
  }
}

export async function TrialCountdownBannerServer({ className }: Props) {
  const { trialEndsAt, isPremium, kind, trialEndedAt } = await getTrialState()

  // A paying customer needs nothing here.
  if (isPremium) return null

  // Nor does a pupil whose school pays (12 October 2026). Their access comes
  // from the school's live pilot, not from a plan of their own, so a trial
  // countdown or a "you are not on Pro, see plans" card would ask a child to
  // pay for what their school already provides.
  if (await isLiveSchoolPupil()) return null

  // Day 8 onwards. This used to return null, so at 04:15 the expiry cron
  // flipped the account to free and the dashboard simply went quiet - no
  // banner, no explanation, and the AI marking link still sitting there
  // ungated - at the exact moment a trialist decides whether to pay.
  //
  // 'unknown' is deliberately excluded: it means the read failed, and telling
  // somebody their trial ended because Prisma timed out would be worse than
  // saying nothing.
  if (!trialEndsAt) {
    if (kind === 'trial-ended' || kind === 'never-trialed') {
      return <NotOnProCard kind={kind} endedAt={trialEndedAt} className={className} />
    }
    return null
  }

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
