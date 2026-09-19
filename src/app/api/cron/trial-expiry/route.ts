import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { runCron } from '@/lib/cron/observability'
import { authoriseCronRequest } from '@/lib/cron/auth'

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
 * Airtight safety discriminator
 * ─────────────────────────────
 * We only ever touch rows that are ALL of:
 *   • status = TRIALING            (never ACTIVE / PAST_DUE / paid)
 *   • stripeSubscriptionId = null  (the no-card signup trials we create;
 *                                   Stripe-managed trials + paid subs
 *                                   always carry a stripeSubscriptionId,
 *                                   so they are structurally excluded)
 *   • currentPeriodEnd < now       (the 7 days are up)
 * A paying customer can NEVER be downgraded by this job, and a
 * Stripe-managed trial (which the webhook converts) is never touched.
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
        currentPeriodEnd: { lt: now },
      },
      select: {
        id: true,
        user: { select: { supabaseUserId: true } },
      },
    })

    if (expired.length === 0) {
      return { expired: 0, downgraded: 0 }
    }

    const admin = createServiceRoleClient()
    let downgraded = 0

    for (const sub of expired) {
      const supabaseId = sub.user?.supabaseUserId
      // Downgrade the web gate truth source. Guard on the current value
      // so we only ever flip a profile still sitting on the trial 'pro'.
      if (supabaseId) {
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

    return { expired: expired.length, downgraded }
  })
}
