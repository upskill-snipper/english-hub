import { NextRequest } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { prisma } from '@/lib/prisma'
import { stripe, isIeltsPriceId } from '@/lib/stripe'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { runCron } from '@/lib/cron/observability'
import { authoriseCronRequest } from '@/lib/cron/auth'
import { WEB_ACCESS_STATUSES, isIeltsOnly } from '@/lib/billing/duplicate-subscription-guard'

export const dynamic = 'force-dynamic'

/**
 * Cron: expire no-card signup trials (2026-06-08 Option C paywall).
 *
 * Why this exists
 * ───────────────
 * Signup provisions a 7-day no-card trial by writing
 * `profiles.subscription_status = 'pro'` + `subscription_end_date`
 * (see /api/auth/register + /api/auth/teacher-signup). The WEB
 * entitlement gates only read `subscription_status === 'pro'` and do
 * NOT look at `subscription_end_date`, so without this cron a signup
 * trial would grant 'pro' FOREVER — i.e. nobody would ever have to pay.
 * This cron is what actually ends the trial.
 *
 * The discriminator, and where it was not airtight
 * ────────────────────────────────────────────────
 * We only ever touch rows that are ALL of:
 *   • status = TRIALING            (never ACTIVE / PAST_DUE / paid)
 *   • stripeSubscriptionId = null  (the no-card signup trials we create)
 *   • platform = WEB               (RevenueCat rows also carry a null Stripe
 *                                   id, for their own reasons, and belong to
 *                                   the mobile reconciler)
 *   • currentPeriodEnd < now       (the 7 days are up)
 *
 * This docblock used to say a paying customer "can NEVER be downgraded by
 * this job" because a paid subscription always carries a Stripe id. That is
 * true only when the webhook managed to write the Prisma row. When the sync
 * failed - identity unresolved, row write failed, or the row protected as a
 * live duplicate's - the signup-trial row stayed TRIALING with no Stripe id
 * while Stripe held an ACTIVE subscription, and on day eight this job
 * revoked the access the customer had paid for (webhook:D8, audit of
 * 21 October 2026). The profile's own `stripe_customer_id` was never asked.
 *
 * So, before downgrading, if the profile names a Stripe customer, ask Stripe
 * whether that customer holds a subscription that keeps the web gate open
 * (WEB_ACCESS_STATUSES: active, trialing, and past_due by the retry-window
 * choice of 23 October 2026). If so, leave the trial alone and say so loudly:
 * the row is wrong and the reconcile script or the next webhook puts the real
 * subscription on it. If Stripe cannot be asked, or the profile cannot be
 * read, also leave it alone and try again tomorrow. A day's grace on an
 * unpaid trial costs pennies; a revoked payer is the September 2026 incident
 * again. Stripe is asked only for profiles that have a customer id, which is
 * a handful a day.
 *
 * The cron lists the customer's subscriptions itself rather than calling
 * `findDuplicateSubscription`, because that guard compares prices and here
 * any live subscription counts. The status list is the guard module's, not a
 * copy: this file used to keep its own (active and trialing only), so a payer
 * whose card was being retried was downgraded here on day eight while the
 * webhook was deliberately keeping them 'pro'. `unpaid` stays out: that is
 * Stripe having given up, and the webhook has already revoked on it.
 *
 * For each expired trial we:
 *   • flip profiles.subscription_status 'pro' → 'free' (guarded so we
 *     only change rows still sitting on the trial's 'pro'), and
 *   • mark the Prisma row CANCELLED + cancelledAt so it is processed
 *     once and mobile entitlements (entitlements.ts) stop granting pro.
 * If the user later pays, the Stripe webhook upserts the same row back
 * to ACTIVE, so a cancelled trial does not block conversion.
 *
 * Runs daily (configured in vercel.json). Protected by CRON_SECRET.
 */

type PaidCheck =
  | { outcome: 'none' }
  | { outcome: 'live'; subscriptionId: string; status: string }
  | { outcome: 'unknown'; error: string }

/**
 * Does this Stripe customer hold a subscription that keeps the web gate open
 * right now? The list of statuses is WEB_ACCESS_STATUSES, shared with the
 * webhook's coverage check; see the docblock above for why it is not a copy.
 *
 * An IELTS-only subscription does not count (24 October 2026). It grants
 * `ielts_status` and never the global 'pro', which is what this cron ends, so
 * it is not a paid main plan that the trial row failed to record. Counted as
 * live, it kept a no-card trialist who bought IELTS on the trial's 'pro' on
 * every run, for good, and so did a seven-day IELTS card trial that took no
 * money at all. The test is the webhook coverage check's (`isIeltsOnly`).
 */
async function liveStripeSubscription(customerId: string): Promise<PaidCheck> {
  try {
    const subs = await stripe.subscriptions.list({
      customer: customerId,
      status: 'all',
      limit: 100,
    })
    const live = subs.data.find(
      (s) => WEB_ACCESS_STATUSES.has(s.status) && !isIeltsOnly(s, isIeltsPriceId),
    )
    return live
      ? { outcome: 'live', subscriptionId: live.id, status: live.status }
      : { outcome: 'none' }
  } catch (err) {
    return { outcome: 'unknown', error: err instanceof Error ? err.message : String(err) }
  }
}

export async function GET(request: NextRequest) {
  const auth = authoriseCronRequest(request, 'trial-expiry')
  if (!auth.ok) return auth.response

  return runCron('trial-expiry', async () => {
    const now = new Date()

    // Find expired no-card signup trials and the Supabase id we need to
    // downgrade their profile.
    const expired = await prisma.subscription.findMany({
      where: {
        status: 'TRIALING',
        stripeSubscriptionId: null,
        platform: 'WEB',
        currentPeriodEnd: { lt: now },
      },
      select: {
        id: true,
        user: { select: { supabaseUserId: true } },
      },
    })

    if (expired.length === 0) {
      return { expired: 0, downgraded: 0, skippedPaid: 0, skippedUnknown: 0 }
    }

    const admin = createServiceRoleClient()
    let downgraded = 0
    let skippedPaid = 0
    let skippedUnknown = 0

    for (const sub of expired) {
      const supabaseId = sub.user?.supabaseUserId

      if (supabaseId) {
        // ── Is this trialist actually a payer whose row we never wrote? ──
        const { data: profile, error: profileReadErr } = await admin
          .from('profiles')
          .select('subscription_status, stripe_customer_id')
          .eq('id', supabaseId)
          .single()

        // A profile that cannot be READ is not a profile with no Stripe
        // customer. This read's error used to be discarded, so a database
        // fault answered "no customer id", Stripe was never asked, and the
        // downgrade below ran against a payer if the database had recovered
        // by then. "No row" (PGRST116) is an answer: there is nobody to ask
        // Stripe about, and the downgrade is a no-op on the profile anyway.
        if (profileReadErr && profileReadErr.code !== 'PGRST116') {
          skippedUnknown += 1
          console.error(
            `[cron:trial-expiry] TRIAL_EXPIRY_PROFILE_UNREADABLE row=${sub.id} user=${supabaseId}: ` +
              `${profileReadErr.message}. Left for the next run.`,
          )
          continue
        }

        if (profile?.stripe_customer_id) {
          const paid = await liveStripeSubscription(profile.stripe_customer_id)

          if (paid.outcome === 'live') {
            skippedPaid += 1
            console.warn(
              `[cron:trial-expiry] TRIAL_EXPIRY_SKIPPED_PAID row=${sub.id} user=${supabaseId} ` +
                `customer=${profile.stripe_customer_id} subscription=${paid.subscriptionId} ` +
                `status=${paid.status}. Stripe holds a live subscription for this customer but ` +
                'the Prisma row is still the signup trial, so the webhook never recorded it. Not ' +
                'downgraded. Run scripts/stripe-reconcile-subscriptions.mjs to repair the row.',
            )
            Sentry.captureMessage('trial-expiry skipped a paying customer with an unrecorded row', {
              level: 'warning',
              tags: { cron: 'trial-expiry', defect: 'subscription-unrecorded' },
              extra: {
                subscriptionRowId: sub.id,
                supabaseUserId: supabaseId,
                stripeCustomerId: profile.stripe_customer_id,
                stripeSubscriptionId: paid.subscriptionId,
                stripeStatus: paid.status,
              },
            })
            continue
          }

          if (paid.outcome === 'unknown') {
            // Not a downgrade. The row stays TRIALING, so tomorrow's run asks
            // again; revoking on a question Stripe did not answer is the
            // outcome this job must never produce.
            skippedUnknown += 1
            console.error(
              `[cron:trial-expiry] TRIAL_EXPIRY_STRIPE_UNREACHABLE row=${sub.id} ` +
                `customer=${profile.stripe_customer_id}: ${paid.error}. Left for the next run.`,
            )
            continue
          }
        }

        // Downgrade the web gate truth source. Guard on the current value
        // so we only ever flip a profile still sitting on the trial 'pro'.
        const { error: profileErr } = await admin
          .from('profiles')
          .update({ subscription_status: 'free' })
          .eq('id', supabaseId)
          .eq('subscription_status', 'pro')
        if (profileErr) {
          // Log and continue — one bad profile write must not abort the
          // whole batch (and must not flip the Prisma row, so a retry
          // next run can still reconcile it).
          console.error('[cron:trial-expiry] profile downgrade failed', {
            subscriptionId: sub.id,
            error: profileErr.message,
          })
          continue
        }
        downgraded += 1
      }

      // Mark the trial row cancelled so it is processed once. A later
      // Stripe checkout upserts it back to ACTIVE, so this does not
      // block conversion.
      await prisma.subscription.update({
        where: { id: sub.id },
        data: { status: 'CANCELLED', cancelledAt: now },
      })
    }

    return { expired: expired.length, downgraded, skippedPaid, skippedUnknown }
  })
}
