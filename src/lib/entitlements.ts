/**
 * Entitlement resolution - shared between `/api/me` and
 * `/api/me/entitlements`.
 *
 * Reads the caller's `Subscription` row(s) from Prisma and projects them
 * onto the wire shape the mobile app expects:
 *
 *   {
 *     pro, teacher_tools,
 *     platform, status,
 *     currentPeriodEnd, trialEndsAt, cancelledAt,
 *     subscription: { plan, isTeacherPlan } | null,
 *     warning?: string
 *   }
 *
 * Rules (see english-hub-mobile/docs/SUBSCRIPTION_AND_ENTITLEMENTS.md):
 *
 * 1. `pro` is true whenever the row is in an access-granting state
 *    (ACTIVE, TRIALING, PAUSED, or a cancelled row whose paid period
 *    has not yet ended). PAST_DUE grants *read-only* access on mobile
 *    but does NOT grant `pro` - the status field carries the
 *    `grace_period` signal so the client can degrade gracefully.
 *
 * 2. `teacher_tools` additionally requires `isTeacherPlan = true`.
 *
 * 3. If the user has more than one Subscription row (edge case where
 *    the dual-subscription guard in the webhook failed to trigger),
 *    we pick the one with the latest `currentPeriodEnd` and surface a
 *    `warning` string so the caller can show a "multiple
 *    subscriptions detected" banner.
 *
 * 4. Returning `null` for every field means "no known subscription" -
 *    a free user. Mobile treats this as `free_with_demo_credits`.
 */

import type { Subscription } from '@prisma/client'
import type { PrismaClient } from '@prisma/client'

// ─── Wire shape ────────────────────────────────────────────────────────

export type EntitlementPlatform = 'web' | 'ios' | 'android' | null

export type EntitlementStatus =
  | 'active'
  | 'trialing'
  | 'grace_period'
  | 'billing_retry'
  | 'paused'
  | 'expired'
  | 'cancelled'
  | null

export interface EntitlementPayload {
  pro: boolean
  teacher_tools: boolean
  platform: EntitlementPlatform
  status: EntitlementStatus
  currentPeriodEnd: string | null
  trialEndsAt: string | null
  cancelledAt: string | null
  subscription: {
    plan: 'MONTHLY' | 'ANNUAL'
    isTeacherPlan: boolean
  } | null
  /**
   * Populated only when the user has more than one live Subscription
   * row. Multi-sub prevention is enforced at purchase time; this is
   * an edge-case signal for the client.
   */
  warning?: string
}

// ─── Empty payload helper ──────────────────────────────────────────────

export function emptyEntitlement(): EntitlementPayload {
  return {
    pro: false,
    teacher_tools: false,
    platform: null,
    status: null,
    currentPeriodEnd: null,
    trialEndsAt: null,
    cancelledAt: null,
    subscription: null,
  }
}

// ─── Status projection ─────────────────────────────────────────────────
//
// DB `SubscriptionStatus` → public entitlement `status` string. We peek
// at `currentPeriodEnd` and `cancelledAt` to distinguish "cancelled but
// still in paid period" from "expired".

function projectStatus(sub: Subscription, now: Date): EntitlementStatus {
  const periodEnd = sub.currentPeriodEnd
  const stillInPeriod = periodEnd.getTime() > now.getTime()

  switch (sub.status) {
    case 'ACTIVE':
      return stillInPeriod ? 'active' : 'expired'
    case 'TRIALING':
      return stillInPeriod ? 'trialing' : 'expired'
    case 'PAUSED':
      return 'paused'
    case 'PAST_DUE':
      // PAST_DUE covers Apple's grace window AND Google's account-hold
      // / billing-retry window. We surface `grace_period` while the
      // paid period is still live and `billing_retry` once we're past
      // it - mobile uses the same read-only gate for both so the
      // distinction is informational only.
      return stillInPeriod ? 'grace_period' : 'billing_retry'
    case 'CANCELLED':
      // A cancelled row with a future period end = user turned
      // auto-renew off but paid period hasn't ended. Otherwise,
      // terminal.
      if (stillInPeriod && sub.cancelledAt) return 'cancelled'
      return 'expired'
    default: {
      const _exhaustive: never = sub.status
      void _exhaustive
      return 'expired'
    }
  }
}

// ─── Access projection ─────────────────────────────────────────────────

function grantsPro(status: EntitlementStatus): boolean {
  // ACTIVE, TRIALING, PAUSED, and CANCELLED-in-period grant Pro.
  // grace_period / billing_retry are explicitly read-only - mobile
  // shows the past essays but blocks new marking.
  return (
    status === 'active' || status === 'trialing' || status === 'paused' || status === 'cancelled'
  )
}

// ─── Platform projection ───────────────────────────────────────────────
//
// `Subscription.platform` is a WEB / IOS / ANDROID enum. We lowercase
// for the wire and treat the WEB enum as `'web'`.

function projectPlatform(sub: Subscription): EntitlementPlatform {
  switch (sub.platform) {
    case 'WEB':
      return 'web'
    case 'IOS':
      return 'ios'
    case 'ANDROID':
      return 'android'
    default: {
      const _exhaustive: never = sub.platform
      void _exhaustive
      return null
    }
  }
}

// ─── Trial end projection ──────────────────────────────────────────────
//
// A Subscription row in TRIALING status has its `currentPeriodEnd`
// pointing at the trial end date (per the reconciler - INITIAL_PURCHASE
// with `is_trial_period=true` writes the Apple/Play-reported expiry
// into `currentPeriodEnd`). We only surface `trialEndsAt` while the
// status is actually trialing; once the trial converts to ACTIVE the
// field returns to null.

function projectTrialEndsAt(sub: Subscription): string | null {
  if (sub.status !== 'TRIALING') return null
  return sub.currentPeriodEnd.toISOString()
}

// ─── Subscription picker ───────────────────────────────────────────────
//
// Prisma's `User.subscription` is 1:1, so in normal operation this is a
// single-row fetch. The schema has a `@unique` on `Subscription.userId`
// which enforces the invariant at the DB level - this helper therefore
// only has to handle the "zero rows" branch and a defensive "multiple
// rows" branch for platform drift (e.g., if an out-of-band migration or
// a school-seat grant inserts a second row bypassing the unique
// constraint in a future schema change).

export interface PickSubscriptionOptions {
  /** Override `now` for deterministic testing. */
  now?: Date
}

export function pickEntitlement(
  rows: Subscription[],
  options: PickSubscriptionOptions = {},
): EntitlementPayload {
  const now = options.now ?? new Date()

  if (rows.length === 0) {
    return emptyEntitlement()
  }

  // Pick the row with the latest `currentPeriodEnd` - this is the
  // "freshest" entitlement and matches the mobile spec.
  const sorted = [...rows].sort(
    (a, b) => b.currentPeriodEnd.getTime() - a.currentPeriodEnd.getTime(),
  )
  const winner = sorted[0]

  const status = projectStatus(winner, now)
  const platform = projectPlatform(winner)
  const pro = grantsPro(status)
  const teacherTools = pro && winner.isTeacherPlan

  const payload: EntitlementPayload = {
    pro,
    teacher_tools: teacherTools,
    platform,
    status,
    currentPeriodEnd: winner.currentPeriodEnd.toISOString(),
    trialEndsAt: projectTrialEndsAt(winner),
    cancelledAt: winner.cancelledAt ? winner.cancelledAt.toISOString() : null,
    subscription: {
      plan: winner.plan,
      isTeacherPlan: winner.isTeacherPlan,
    },
  }

  if (rows.length > 1) {
    payload.warning =
      'multiple_active_subscriptions: user has more than one Subscription row - returning the latest by currentPeriodEnd'
  }

  return payload
}

// ─── DB fetch helper ───────────────────────────────────────────────────
//
// Small wrapper so the route handlers don't duplicate the Prisma call.
// Fetches every Subscription row for the user (the `@unique` means we
// normally get 0 or 1, but we query `findMany` to be resilient).

export async function fetchUserEntitlement(
  prisma: Pick<PrismaClient, 'subscription'>,
  userId: string,
  options: PickSubscriptionOptions = {},
): Promise<EntitlementPayload> {
  const rows = await prisma.subscription.findMany({
    where: { userId },
  })
  return pickEntitlement(rows, options)
}
