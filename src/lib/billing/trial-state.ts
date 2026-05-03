/**
 * Trial state resolver — server-side.
 *
 * Reads the signed-in user's `Subscription` row from Prisma and projects
 * it onto the minimal shape the `TrialCountdownBanner` needs:
 *
 *   { trialEndsAt: Date | null, isPremium: boolean }
 *
 * Rules (mirrors `src/lib/entitlements.ts`):
 *
 *   - `trialEndsAt`  Set ONLY while the row is in TRIALING status and
 *     `currentPeriodEnd` is still in the future. Once the trial converts
 *     to ACTIVE (or expires) we return null so the banner hides itself.
 *
 *   - `isPremium`    True when the row grants Pro access through any
 *     non-trial path (ACTIVE, PAUSED, or CANCELLED-still-in-paid-period).
 *     A user inside their trial is NOT premium yet — that's the whole
 *     point of the banner. Once they convert, isPremium=true and the
 *     banner self-hides.
 *
 *   - No subscription row, no auth, or any DB error → free user, banner
 *     stays hidden until they start the trial. We swallow errors so the
 *     banner never blocks page render.
 *
 * Intended for server components only. The trial-end Date is then passed
 * as a serialised prop into the client `TrialCountdownBanner`.
 */

import { prisma } from '@/lib/prisma'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export interface TrialState {
  trialEndsAt: Date | null
  isPremium: boolean
}

const EMPTY: TrialState = { trialEndsAt: null, isPremium: false }

/**
 * Fetches the trial state for the currently authenticated user.
 *
 * Returns `{ trialEndsAt: null, isPremium: false }` when:
 *   - the user is not signed in
 *   - the user has no Subscription row
 *   - the trial has already expired
 *   - the Prisma read throws (logged, never re-thrown)
 */
export async function getTrialState(): Promise<TrialState> {
  let userId: string | null = null

  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) return EMPTY
    userId = data.user.id
  } catch (err) {
    console.error('[trial-state] auth lookup failed:', err)
    return EMPTY
  }

  try {
    const sub = await prisma.subscription.findUnique({
      where: { userId },
      select: { status: true, currentPeriodEnd: true, cancelledAt: true },
    })
    if (!sub) return EMPTY

    const now = Date.now()
    const periodEnd = sub.currentPeriodEnd.getTime()
    const stillInPeriod = periodEnd > now

    // Trial state — only surfaced while the row is genuinely TRIALING and
    // the trial end is still in the future. An expired trial reverts to
    // EMPTY so the banner hides and we don't taunt the user.
    const trialEndsAt = sub.status === 'TRIALING' && stillInPeriod ? sub.currentPeriodEnd : null

    // Premium = any access-granting state OTHER than TRIALING. We exclude
    // PAST_DUE (read-only grace) so we don't claim premium for users who
    // are technically losing access.
    const isPremium =
      stillInPeriod &&
      (sub.status === 'ACTIVE' ||
        sub.status === 'PAUSED' ||
        (sub.status === 'CANCELLED' && sub.cancelledAt !== null))

    return { trialEndsAt, isPremium }
  } catch (err) {
    console.error('[trial-state] prisma read failed:', err)
    return EMPTY
  }
}
