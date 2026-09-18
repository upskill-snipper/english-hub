// ─── The no-card trial, provisioned where a session actually exists ─────────
//
// THE DEFECT THIS FIXES (18 September 2026, counted against production)
//
// The product promises a 7-day no-card trial in at least three places: the
// signup success card ("Your free trial is ready"), the dashboard banner
// ("Your 7-day free trial includes every premium feature") and the pricing
// page. Nobody has ever received one.
//
// The only writer of that trial was POST /api/auth/register, which the
// register page calls immediately after `supabase.auth.signUp()`. With email
// confirmation switched on there is no session at that moment, so the route's
// own session gate answers 403 and the call is dropped on the floor. The
// teacher signup route has the identical gate. The 18 September
// `handle_new_user` trigger writes the profile but deliberately does not touch
// `subscription_status`, so the column keeps its DEFAULT 'free'.
//
// Production on 18 September: 206 profiles — 197 free, 4 pro (the payers),
// 5 cancelled. Prisma `Subscription` held 3 rows and **0 TRIALING**. Of the
// 105 accounts created in the preceding 30 days, 100 were free. Every one of
// them was told their trial was ready and then refused on their first essay
// with "AI marking is a Premium feature. Please upgrade".
//
// THE FIX
//
// Move provisioning to the first moment a session provably exists: the auth
// callback, once `exchangeCodeForSession` / `verifyOtp` has succeeded, with
// `/api/auth/record-login` as a second net for anyone who confirmed before
// this shipped or whose callback failed midway.
//
// WHAT THIS DELIBERATELY DOES NOT DO
//
//   • It does not take a date of birth. The old route's Zod schema required
//     one, which is why teacher signups never reached the trial block on any
//     path — the client only calls it when a DOB was entered. This takes the
//     Supabase user id and nothing else, and reads the role from the profile
//     the trigger wrote.
//   • It does not back-date. The 7-day window guard means a dormant free
//     account from May cannot be handed a fresh trial by logging in. Whether
//     the ~100 recent free accounts get a retrospective trial now that the AI
//     works is a business decision, and it is Calum's, not this function's.
//     `scripts/list-untrialled-accounts.mjs` prepares that list read-only.
//   • It never downgrades. A profile already 'pro', 'active' or 'past_due' is
//     left exactly as found, so a repeated callback cannot shorten a paid
//     period.
//   • It never throws. Every caller is in an authentication path; a failure
//     to provision must never cost someone their sign-in.
// ────────────────────────────────────────────────────────────────────────────

import * as Sentry from '@sentry/nextjs'
import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { tryPrismaUserId } from '@/lib/identity'
import { PRICING } from '@/constants/pricing'

/**
 * What provisioning did. Returned rather than logged-and-swallowed so the
 * callers can count outcomes and the tests can assert on the reason a trial
 * was withheld, which is the part that carries the risk.
 */
export type TrialProvisionResult =
  | { provisioned: true; trialEndsAt: Date; prismaUserId: string }
  | {
      provisioned: false
      reason:
        | 'no-profile'
        | 'already-subscribed'
        | 'outside-window'
        | 'identity-unresolved'
        | 'error'
    }

/** Statuses that mean "this account already has an entitlement" — never touch. */
const ENTITLED_STATUSES = new Set(['pro', 'active', 'trialing', 'past_due', 'cancelled'])

const TRIAL_MS = PRICING.TRIAL_DAYS * 24 * 60 * 60 * 1000

/**
 * Give a newly-confirmed account its no-card trial.
 *
 * Safe to call on every confirmation and every login: the Prisma upsert has an
 * empty `update` branch and the profile write is gated on the current status,
 * so the second and subsequent calls are no-ops.
 *
 * @param supabaseUserId The Supabase `auth.users` uuid. The only input.
 */
export async function provisionSignupTrial(supabaseUserId: string): Promise<TrialProvisionResult> {
  try {
    const svc = createServiceRoleClient()

    // One read: does this account already have an entitlement, is it young
    // enough to qualify, and is it a teacher? The 18 September trigger is what
    // makes `role` trustworthy here — before it, every profile read 'student'.
    const { data: profile } = await svc
      .from('profiles')
      .select('subscription_status, created_at, role')
      .eq('id', supabaseUserId)
      .single()

    if (!profile) return { provisioned: false, reason: 'no-profile' }

    const current = (profile.subscription_status ?? '').toLowerCase()
    if (ENTITLED_STATUSES.has(current)) {
      return { provisioned: false, reason: 'already-subscribed' }
    }

    // Only accounts inside their first trial window. A missing created_at is
    // treated as out of window: withholding a trial from an account whose age
    // we cannot establish is recoverable; handing a free trial to every
    // dormant account on its next login is not.
    const createdAt = profile.created_at ? new Date(profile.created_at) : null
    const now = new Date()
    if (!createdAt || Number.isNaN(createdAt.getTime())) {
      return { provisioned: false, reason: 'outside-window' }
    }
    if (now.getTime() - createdAt.getTime() > TRIAL_MS) {
      return { provisioned: false, reason: 'outside-window' }
    }

    // Project the Prisma user. `tryPrismaUserId` creates the row if the
    // account has never been projected, which is the case for most accounts.
    const prismaUserId = await tryPrismaUserId(supabaseUserId)
    if (!prismaUserId) {
      console.error('[trial] could not resolve identity for', supabaseUserId)
      return { provisioned: false, reason: 'identity-unresolved' }
    }

    // The trial runs from confirmation, not from signup: the clock a user
    // experiences starts when they can first use the product.
    const trialEnd = new Date(now.getTime() + TRIAL_MS)
    const isTeacher = (profile.role ?? '').toLowerCase() === 'teacher'

    // Mobile-parity row. `stripeSubscriptionId` stays null, which is what the
    // trial-allowance meter uses to tell a no-card trial from a Stripe one.
    // Empty `update` branch: an existing row, paid or not, is never clobbered.
    await prisma.subscription.upsert({
      where: { userId: prismaUserId },
      create: {
        userId: prismaUserId,
        plan: 'MONTHLY',
        status: 'TRIALING',
        currentPeriodStart: now,
        currentPeriodEnd: trialEnd,
        platform: 'WEB',
        isTeacherPlan: isTeacher,
      },
      update: {},
    })

    // The web entitlement gate reads the profile, so both have to agree. The
    // status filter makes this a conditional write at the database rather than
    // a check-then-write: two concurrent callbacks cannot both win, and the
    // Stripe webhook cannot be overtaken by a stale read taken before it ran.
    // NULL is included because the column only acquired its DEFAULT 'free' in
    // the initial schema; nothing guarantees every historic row has it.
    const { error: profileErr } = await svc
      .from('profiles')
      .update({
        subscription_status: 'pro',
        subscription_end_date: trialEnd.toISOString(),
      })
      .eq('id', supabaseUserId)
      .or('subscription_status.is.null,subscription_status.eq.free,subscription_status.eq.')

    if (profileErr) {
      console.error('[trial] profile write failed for', supabaseUserId, profileErr)
      Sentry.captureException(profileErr, { tags: { area: 'trial-provisioning' } })
      return { provisioned: false, reason: 'error' }
    }

    return { provisioned: true, trialEndsAt: trialEnd, prismaUserId }
  } catch (err) {
    // An authentication path must not fail because billing state could not be
    // written. Log loudly, hand back a failure, let the caller carry on.
    console.error('[trial] provisioning failed for', supabaseUserId, err)
    Sentry.captureException(err, { tags: { area: 'trial-provisioning' } })
    return { provisioned: false, reason: 'error' }
  }
}
