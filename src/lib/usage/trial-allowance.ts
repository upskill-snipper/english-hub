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

/**
 * The one call a paywalled AI route makes, placed immediately before the first
 * model call. A paying subscriber and a card-on-file trial pass straight
 * through and never touch the meter.
 *
 * Consumes BOTH the daily sub-cap and the whole-trial ceiling, so a single
 * scripted day cannot drain the seven-day allowance before anyone sees it. If
 * the second consume refuses, the first is refunded before the 402 goes out.
 */
export async function enforceTrialAllowance(
  request: { headers: Headers },
  session: { id: string; email?: string | null },
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
