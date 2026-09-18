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

/**
 * What this account's plan actually is.
 *
 * THE DEFECT THIS EXISTS FOR (19 September 2026). Every non-premium,
 * non-trialing case collapsed to one EMPTY constant, so a caller could not
 * tell "the trial ended two days ago" from "never had one" from "the database
 * read failed". The countdown banner therefore renders nothing at all from day
 * 8 onwards: the moment a trialist most needs a reason to pay, the product
 * goes quiet.
 *
 * 'unknown' exists so a failed read is never mistaken for a definite answer.
 * Telling somebody their trial has ended because Prisma timed out would be
 * worse than saying nothing.
 */
export type PlanKind = 'pro' | 'trialing' | 'trial-ended' | 'never-trialed' | 'unknown'

export interface TrialState {
  trialEndsAt: Date | null
  isPremium: boolean
  kind: PlanKind
  /** When the trial ended, for the "ended on {date}" card. Null unless kind is 'trial-ended'. */
  trialEndedAt: Date | null
}

const EMPTY: TrialState = {
  trialEndsAt: null,
  isPremium: false,
  kind: 'unknown',
  trialEndedAt: null,
}

/** A definite "this person is not on a plan and never was". */
const NEVER: TrialState = {
  trialEndsAt: null,
  isPremium: false,
  kind: 'never-trialed',
  trialEndedAt: null,
}

/**
 * Was this a no-card signup trial, as opposed to a subscription somebody paid
 * for?
 *
 * THE SAFETY DISCRIMINATOR, and the reason this is a separate function.
 *
 * Prisma's SubscriptionStatus is UPPERCASE (ACTIVE | CANCELLED | PAST_DUE |
 * TRIALING | PAUSED) and subscription-sync maps Stripe's `canceled` to
 * CANCELLED and `past_due` to PAST_DUE. So a lapsed or cancelled PAYER looks
 * identical to an expired trialist on status and dates alone: not premium, and
 * a period end in the past. Classifying on that would tell somebody who paid
 * you money that their "free trial has ended".
 *
 * `stripeSubscriptionId === null` is what actually separates them - a no-card
 * trial has no Stripe subscription behind it. It is the same discriminator the
 * trial-expiry cron already relies on.
 */
function isNoCardTrial(stripeSubscriptionId: string | null): boolean {
  return stripeSubscriptionId === null
}

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
          select: {
            status: true,
            currentPeriodEnd: true,
            cancelledAt: true,
            // The safety discriminator. See isNoCardTrial.
            stripeSubscriptionId: true,
          },
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
          .select('subscription_status, subscription_end_date, stripe_customer_id')
          .eq('id', supabaseUserId)
          .single()

        const status = String(p?.subscription_status ?? '').toLowerCase()
        // The fallback has no Prisma row to read stripeSubscriptionId from, so
        // this stands in for it. Production holds 4 payers against 3 Prisma
        // Subscription rows, so at least one payer DOES reach this path -
        // anyone who has been through checkout must never be told their free
        // trial ended.
        const hasBeenThroughCheckout = Boolean(p?.stripe_customer_id)
        const endsAt = p?.subscription_end_date ? new Date(p.subscription_end_date) : null
        const live = endsAt ? endsAt.getTime() > Date.now() : false

        if (status === 'pro' || status === 'active') {
          if (live) return { trialEndsAt: null, isPremium: true, kind: 'pro', trialEndedAt: null }
          if (hasBeenThroughCheckout) return EMPTY
          // 'pro' with a date in the past: the trial-expiry cron has not run
          // yet, or the profile was never cleared. The cron deliberately leaves
          // subscription_end_date in place, so the date is still the truth.
          return { trialEndsAt: null, isPremium: false, kind: 'trial-ended', trialEndedAt: endsAt }
        }
        if (status === 'trialing') {
          if (live) {
            return { trialEndsAt: endsAt, isPremium: false, kind: 'trialing', trialEndedAt: null }
          }
          return hasBeenThroughCheckout
            ? EMPTY
            : { trialEndsAt: null, isPremium: false, kind: 'trial-ended', trialEndedAt: endsAt }
        }
        // 'free' with an end date behind it is an expired trial the cron HAS
        // cleared. 'free' with no date at all never started one.
        if (status === 'free' || status === '') {
          if (hasBeenThroughCheckout) return EMPTY
          return endsAt && !live
            ? { trialEndsAt: null, isPremium: false, kind: 'trial-ended', trialEndedAt: endsAt }
            : NEVER
        }
        // 'cancelled' and anything else: a person who paid. Never call that a
        // finished trial.
        return EMPTY
      } catch (err) {
        console.error('[trial-state] profile fallback failed:', err)
        return EMPTY
      }
    }

    const now = Date.now()
    const periodEnd = sub.currentPeriodEnd.getTime()
    const stillInPeriod = periodEnd > now
    const status = sub.status.toUpperCase()

    // Trial state - only surfaced while the row is genuinely TRIALING and
    // the trial end is still in the future.
    const trialEndsAt = status === 'TRIALING' && stillInPeriod ? sub.currentPeriodEnd : null

    // Premium = any access-granting state OTHER than TRIALING. We exclude
    // PAST_DUE (read-only grace) so we don't claim premium for users who
    // are technically losing access.
    const isPremium =
      stillInPeriod &&
      (status === 'ACTIVE' ||
        status === 'PAUSED' ||
        (status === 'CANCELLED' && sub.cancelledAt !== null))

    if (isPremium) return { trialEndsAt: null, isPremium: true, kind: 'pro', trialEndedAt: null }
    if (trialEndsAt) return { trialEndsAt, isPremium: false, kind: 'trialing', trialEndedAt: null }

    // Past the period and not premium. ONLY call this a finished trial when
    // there was no Stripe subscription behind it - otherwise a lapsed or
    // cancelled payer is told their "free trial has ended". See isNoCardTrial.
    if (!stillInPeriod && status === 'TRIALING' && isNoCardTrial(sub.stripeSubscriptionId)) {
      return {
        trialEndsAt: null,
        isPremium: false,
        kind: 'trial-ended',
        trialEndedAt: sub.currentPeriodEnd,
      }
    }

    // A lapsed payer, a past-due row, or anything else we cannot name
    // confidently. Say nothing rather than guess.
    return EMPTY
  } catch (err) {
    console.error('[trial-state] prisma read failed:', err)
    return EMPTY
  }
}
