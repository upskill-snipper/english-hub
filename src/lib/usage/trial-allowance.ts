// ─── No-card trial AI ceiling ───────────────────────────────────────────────
//
// WHY THIS EXISTS
// `/api/auth/register` writes `profiles.subscription_status = 'pro'` for a
// no-card signup. That is the IDENTICAL flag `hasActiveSubscription()` and
// `hasIeltsAccess()` read, so to every gate in the codebase a trial account is
// byte-for-byte a paying account: no card, no identity proof, and nothing
// preventing a second signup on day 8. The ten properly paywalled AI routes
// therefore let a trial user make unlimited model calls. A ceiling is the only
// control that exists.
//
// THE DISCRIMINATOR - GET THIS WRONG IN EITHER DIRECTION AND IT HURTS
// A no-card trial row is `status = 'TRIALING'` with `stripeSubscriptionId`
// null, `stripeCustomerId` null and `paymentCount = 0`.
// A checkout trial (the first 7 days free WITH a card) has a Stripe
// subscription id, and is NOT capped: the card is the abuse control, and
// capping it would break the promise that starting a paid plan gives the first
// 7 days free. A genuine subscriber is never metered at all.
//
// These are two different products and must not be merged:
//   • account signup      = 7-day free trial of the full product, NO card
//   • paid plan at checkout = the first 7 days free, WITH a card
// ────────────────────────────────────────────────────────────────────────────

import type { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import {
  consumeAllowance,
  refundAllowance,
  resolveUsageSubject,
  allowanceExhaustedResponse,
  type AllowanceState,
  type UsageSubject,
  type Meter,
} from '@/lib/usage/free-allowance'
import { serviceUnavailableResponse } from '@/lib/api-response'
import { getPupilSchoolAccess } from '@/lib/school-entitlement'
import { createServiceRoleClient } from '@/lib/supabase/server'

export interface NoCardTrial {
  subscriptionId: string
  trialEndsAt: Date
}

/**
 * Identify a NO-CARD trial for the signed-in user, or null.
 *
 * Returns null - meaning "do not meter this caller" - for:
 *   • a genuine subscriber (ACTIVE / PAUSED / CANCELLED-in-period)
 *   • a card-on-file trial (TRIALING with a Stripe subscription id)
 *   • a user with no subscription row at all
 *   • an expired trial
 *   • any database error (see the caller: the metered routes treat a throw as
 *     a 503, so this function itself never throws)
 */
export async function resolveNoCardTrial(session: {
  id: string
  email?: string | null
}): Promise<NoCardTrial | null> {
  // Supabase auth uuid -> Prisma User.id (a cuid). Same resolution order as
  // /api/me/entitlements and src/lib/billing/trial-state.ts: a lookup by the
  // uuid alone matches nothing for accounts created before the backfill.
  const byUuid = await prisma.user.findUnique({
    where: { supabaseUserId: session.id },
    select: { id: true },
  })
  const profile =
    byUuid ??
    (session.email
      ? await prisma.user.findUnique({
          where: { email: session.email.toLowerCase() },
          select: { id: true },
        })
      : null)

  if (!profile) return null

  const sub = await prisma.subscription.findUnique({
    where: { userId: profile.id },
    select: {
      id: true,
      status: true,
      currentPeriodEnd: true,
      stripeSubscriptionId: true,
      stripeCustomerId: true,
      paymentCount: true,
    },
  })

  if (!sub) return null
  if (sub.status !== 'TRIALING') return null

  // The card is the abuse control on a checkout trial - do not cap it.
  const hasCardOnFile =
    sub.stripeSubscriptionId !== null || sub.stripeCustomerId !== null || sub.paymentCount > 0
  if (hasCardOnFile) return null

  // An expired trial is handled by the paywall, not by this meter.
  if (sub.currentPeriodEnd.getTime() <= Date.now()) return null

  return { subscriptionId: sub.id, trialEndsAt: sub.currentPeriodEnd }
}

export interface TrialAllowanceGate {
  /** Non-null when the route must return immediately. */
  response: NextResponse | null
  /** Non-null when something was consumed and may need refunding. */
  consumed: { subject: UsageSubject; meters: Meter[]; trial: NoCardTrial } | null
  /** The whole-trial state, for the X-Free-Allowance-* headers. */
  state: AllowanceState | null
}

/**
 * The "nothing was metered" gate. Routes declare their holder with this BEFORE
 * their outer try block, so the catch at the bottom can still refund.
 */
export const EMPTY_TRIAL_GATE: TrialAllowanceGate = {
  response: null,
  consumed: null,
  state: null,
}

const NOOP: TrialAllowanceGate = EMPTY_TRIAL_GATE

export interface TrialAllowanceOptions {
  /**
   * Set by a route whose paywall a school's live access also opens (the GCSE
   * marking routes, all behind hasActiveSubscription in
   * src/lib/course-access.ts).
   *
   * A DEFECT, FIXED 12 OCTOBER 2026. A pupil who was also on a no-card trial
   * (anyone who signed up before joining with a code, or within their first
   * seven days) was metered like any trialist: 15 AI calls a day, 40 in all,
   * then refused with a 402, although their school's pilot was paying for
   * the same feature. Calum decided that a school pupil's access comes from
   * the school's live pilot, so on these routes such a pupil is funded by
   * the school and the trial ceiling does not apply; the route's own daily
   * rate limit still does.
   *
   * Off by default, so a route that forgets it meters, and the IELTS routes
   * leave it off on purpose: a school's pilot does not cover IELTS.
   */
  schoolFunded?: boolean
  /**
   * Set by the four IELTS routes (writing, speaking and statement feedback,
   * and IELTS Writing Task 2 marking), whose paywall is hasIeltsAccess.
   *
   * A REGRESSION, FIXED 31 OCTOBER 2026. A no-card trialist who bought IELTS
   * was metered like any trialist on those routes: 15 AI calls a day, 40 in
   * all, then a 402 telling them to see the plans, although they had just
   * paid GBP 39 a month or GBP 249 a year for that very feature. Until
   * 24 October 2026 the IELTS checkout took the trial's Subscription row, so
   * resolveNoCardTrial saw a card on file and did not meter; b24bfd2d9 rightly
   * stopped an IELTS-only subscription taking the row (mobile read it as Pro,
   * and the trial-expiry cron lost the trial), and the row then stayed a
   * no-card trial until day 8. A paid IELTS plan, `profiles.ielts_status`
   * 'active', is the card on file for these routes. Only the Stripe webhook's
   * syncIeltsEntitlement writes that value, from a live IELTS subscription.
   *
   * Off by default, and the GCSE routes leave it off: an IELTS plan does not
   * fund the rest of the catalogue, whose trial meter still applies.
   */
  ieltsFunded?: boolean
}

/**
 * True when the profile holds a paid IELTS plan (`profiles.ielts_status`
 * 'active'). Asked only of a no-card trialist on an IELTS route. Never
 * throws: a failed read answers false, so the meter applies, as the school
 * check does.
 */
async function holdsPaidIeltsPlan(supabaseUserId: string): Promise<boolean> {
  try {
    const { data, error } = await createServiceRoleClient()
      .from('profiles')
      .select('ielts_status')
      .eq('id', supabaseUserId)
      .single()
    if (error) {
      if (error.code !== 'PGRST116') {
        console.error('[trial-allowance] could not read ielts_status, metering', error)
      }
      return false
    }
    return (data as { ielts_status?: string | null } | null)?.ielts_status === 'active'
  } catch (err) {
    console.error('[trial-allowance] ielts_status read threw, metering', err)
    return false
  }
}

/**
 * The one call a paywalled AI route makes, placed immediately before the first
 * model call. A paying subscriber and a card-on-file trial pass straight
 * through and never touch the meter, and so does a pupil of a live school on
 * a route that passes `schoolFunded`, and a paid IELTS customer on a route
 * that passes `ieltsFunded` (see TrialAllowanceOptions).
 *
 * Consumes BOTH the daily sub-cap and the whole-trial ceiling, so a single
 * scripted day cannot drain the seven-day allowance before anyone sees it. If
 * the second consume refuses, the first is refunded before the 402 goes out.
 */
export async function enforceTrialAllowance(
  request: { headers: Headers },
  session: { id: string; email?: string | null },
  gate: TrialAllowanceOptions = {},
): Promise<TrialAllowanceGate> {
  let trial: NoCardTrial | null
  try {
    trial = await resolveNoCardTrial(session)
  } catch (err) {
    // Fail CLOSED: the same database already backed the auth and entitlement
    // reads earlier in this chain, so a failure here means the route is already
    // broken. Failing open would mean spending money we cannot account for.
    console.error('[trial-allowance] could not resolve the trial state, failing closed', err)
    return {
      response: serviceUnavailableResponse(
        'We could not check your account just now. Please try again shortly.',
      ),
      consumed: null,
      state: null,
    }
  }

  if (!trial) return NOOP

  // Asked only of a no-card trialist, so nobody else pays for the lookup. It
  // never throws, and a failed read answers "not a pupil": the meter applies.
  if (gate.schoolFunded && (await getPupilSchoolAccess(session.id))) return NOOP

  // Likewise asked only of a no-card trialist, on an IELTS route: a paid
  // IELTS plan funds the call (see TrialAllowanceOptions.ieltsFunded).
  if (gate.ieltsFunded && (await holdsPaidIeltsPlan(session.id))) return NOOP

  const subject = resolveUsageSubject(request, session.id)
  const options = { trialSubscriptionId: trial.subscriptionId, trialEndsAt: trial.trialEndsAt }
  const consumedMeters: Meter[] = []

  try {
    const daily = await consumeAllowance(subject, 'trial_ai_daily', options)
    if (!daily.allowed) {
      return { response: allowanceExhaustedResponse(daily), consumed: null, state: daily }
    }
    consumedMeters.push('trial_ai_daily')

    const whole = await consumeAllowance(subject, 'trial_ai', options)
    if (!whole.allowed) {
      await refundAllowance(subject, 'trial_ai_daily', options)
      return { response: allowanceExhaustedResponse(whole), consumed: null, state: whole }
    }
    consumedMeters.push('trial_ai')

    return {
      response: null,
      consumed: { subject, meters: consumedMeters, trial },
      state: whole,
    }
  } catch (err) {
    console.error('[trial-allowance] consume failed, failing closed', err)
    // Give back anything already taken before we bail.
    for (const meter of consumedMeters) {
      await refundAllowance(subject, meter, options)
    }
    return {
      response: serviceUnavailableResponse(
        'We could not check your free usage just now. Please try again shortly.',
      ),
      consumed: null,
      state: null,
    }
  }
}

/**
 * Give back everything a gate consumed.
 *
 * NOT OPTIONAL. Call this on EVERY non-success exit after the gate - the AI
 * throw, the timeout, the content-filter rejection, the unparseable response.
 * A missed refund means a provider outage silently eats a learner's trial
 * allowance with no signal to anyone, which is the least visible way this
 * feature can fail.
 */
export async function refundTrialAllowance(gate: TrialAllowanceGate): Promise<void> {
  if (!gate.consumed) return
  const { subject, meters, trial } = gate.consumed
  const options = { trialSubscriptionId: trial.subscriptionId, trialEndsAt: trial.trialEndsAt }
  for (const meter of meters) {
    await refundAllowance(subject, meter, options)
  }
}
