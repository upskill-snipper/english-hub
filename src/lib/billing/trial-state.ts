/**
 * Trial state resolver - server-side.
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
 *     A user inside their trial is NOT premium yet - that's the whole
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
 *
 * Identity convergence note (Cycle 7 / Identity PR-3): `supabase.auth.getUser()`
 * returns a Supabase UUID, but `Subscription.userId` references the Prisma
 * `User.id` (cuid). We resolve the Prisma user via `supabaseUserId` with an
 * email fallback for pre-backfill rows - same pattern as `/api/me/entitlements`.
 * Querying `Subscription` directly with the Supabase UUID would silently miss
 * every row.
 */
export async function getTrialState(): Promise<TrialState> {
  let supabaseUserId: string | null = null
  let supabaseEmail: string | null = null

  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) return EMPTY
    supabaseUserId = data.user.id
    supabaseEmail = data.user.email ?? null
  } catch (err) {
    console.error('[trial-state] auth lookup failed:', err)
    return EMPTY
  }

  try {
    // Resolve the Prisma user id from the Supabase identity.
    const prismaUser = await prisma.user.findUnique({
      where: { supabaseUserId },
      select: { id: true },
    })
    const profile =
      prismaUser ??
      (supabaseEmail
        ? await prisma.user.findUnique({
            where: { email: supabaseEmail.toLowerCase() },
            select: { id: true },
          })
        : null)
    const sub = profile
      ? await prisma.subscription.findUnique({
          where: { userId: profile.id },
          select: { status: true, currentPeriodEnd: true, cancelledAt: true },
        })
      : null

    // ── No Prisma row: read the profile instead ───────────────────────────
    //
    // THE DEFECT (19 September 2026). Both `if (!profile) return EMPTY` and
    // `if (!sub) return EMPTY` were unconditional, so the countdown banner
    // required a Prisma Subscription row to say anything at all. Production
    // held 13 Prisma users against 206 profiles and ZERO TRIALING rows, so
    // this banner had never rendered for a single person - and the four
    // paying customers got no premium signal either.
    //
    // `profiles.subscription_status` and `subscription_end_date` are what the
    // web entitlement gates actually read, so they are a sound fallback. The
    // profile cannot distinguish a no-card trial from a paid plan (it writes
    // 'pro' for both), so an account with only a profile is treated as
    // premium rather than trialing: over-claiming a countdown that is not
    // there would be worse than not showing one.
    if (!sub) {
      if (!supabaseUserId) return EMPTY
      try {
        const supabase = createServerSupabaseClient()
        const { data: p } = await supabase
          .from('profiles')
          .select('subscription_status, subscription_end_date')
          .eq('id', supabaseUserId)
          .single()

        const status = String(p?.subscription_status ?? '').toLowerCase()
        const endsAt = p?.subscription_end_date ? new Date(p.subscription_end_date) : null
        const live = endsAt ? endsAt.getTime() > Date.now() : false

        if (!live) return EMPTY
        if (status === 'trialing') return { trialEndsAt: endsAt, isPremium: false }
        if (status === 'pro' || status === 'active') return { trialEndsAt: null, isPremium: true }
        return EMPTY
      } catch (err) {
        console.error('[trial-state] profile fallback failed:', err)
        return EMPTY
      }
    }

    const now = Date.now()
    const periodEnd = sub.currentPeriodEnd.getTime()
    const stillInPeriod = periodEnd > now

    // Trial state - only surfaced while the row is genuinely TRIALING and
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
