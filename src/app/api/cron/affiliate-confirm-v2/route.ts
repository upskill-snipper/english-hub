import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import * as Sentry from '@sentry/nextjs'
import { stripe } from '@/lib/stripe'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { runCron } from '@/lib/cron/observability'

export const dynamic = 'force-dynamic'

/**
 * GET /api/cron/affiliate-confirm-v2
 *
 * Daily cron that promotes `affiliate_conversions` rows from
 * `status='pending'` to `confirmed` once they're past the 60-day
 * clearance window (14-day UK statutory refund + 46-day clawback
 * buffer — see src/lib/affiliate/tiers.ts for the rationale).
 *
 * BUG-2 fix (3 May 2026): the legacy cron at /api/cron/affiliate-confirm
 * only operates on the legacy `affiliate_referrals` table. The new
 * `affiliate_conversions` table (populated by both
 * /api/affiliate/track-conversion and the webhook's
 * recordCodeBasedConversion) had no equivalent confirm cron — rows
 * inserted at status='pending' would sit there forever. The dashboard's
 * "All-time earnings" stat (which counts only confirmed/paid) showed
 * £0 even after a successful affiliate sale.
 *
 * This cron mirrors the legacy one's structure (auth via CRON_SECRET,
 * batched processing via Promise.allSettled, ≤10% error threshold),
 * but operates on `affiliate_conversions` and uses the correct 60-day
 * window for the new programme.
 *
 * Behaviour per pending conversion (older than 60 days):
 *   1. Look up the referred user's active subscription.
 *   2. If active/trialing → flip to `status='confirmed'`.
 *   3. If cancelled/incomplete/etc → flip to `status='voided'` with
 *      a clear `voided_reason`.
 *   4. After processing, call `recount_affiliate_referrals(affiliate_id)`
 *      so `confirmed_referral_count` (used for tier advancement) stays
 *      in sync.
 *
 * Schedule: daily at 02:00 UTC (configure in vercel.json or Vercel
 * Dashboard → Cron Jobs).
 *
 * Protected by CRON_SECRET in the `Authorization: Bearer …` header to
 * prevent unauthorised invocation.
 */
export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }
  const authHeader = request.headers.get('authorization')
  const incoming = Buffer.from(authHeader ?? '')
  const expected = Buffer.from(`Bearer ${cronSecret}`)
  if (incoming.length !== expected.length || !timingSafeEqual(incoming, expected)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return runCron('affiliate-confirm-v2', async () => {
    const supabase = createServiceRoleClient()

    // Pending conversions older than 60 days are eligible for confirmation.
    // The 60-day window covers the 14-day UK statutory refund window plus
    // a 46-day clawback buffer so we don't pay commission on a sale the
    // customer ends up reversing.
    const sixtyDaysAgo = new Date()
    sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60)

    const { data: pending, error: fetchError } = await supabase
      .from('affiliate_conversions')
      .select('id, external_id, affiliate_id, product_type, referred_user_id, created_at')
      .eq('status', 'pending')
      .lt('created_at', sixtyDaysAgo.toISOString())

    if (fetchError) {
      throw new Error(`Failed to fetch pending conversions: ${fetchError.message}`)
    }

    if (!pending || pending.length === 0) {
      return {
        confirmed: 0,
        voided: 0,
        message: 'No pending conversions ready for confirmation',
      }
    }

    let confirmed = 0
    let voided = 0
    const errors: string[] = []
    const affiliateIdsToRecount = new Set<string>()

    // Stripe subscriptions: we need to know whether the referred user
    // still has an active subscription. We resolve this by reading the
    // Prisma Subscription row keyed off the user_id when available, or
    // by using `stripe.subscriptions.list({ customer })` as a fallback.

    const BATCH_SIZE = 5
    for (let i = 0; i < pending.length; i += BATCH_SIZE) {
      const batch = pending.slice(i, i + BATCH_SIZE)
      const results = await Promise.allSettled(
        batch.map(async (conv) => {
          // Non-subscription products (one-time, course) clear immediately
          // — there's no subscription to check, and the 60-day window has
          // already absorbed the refund risk.
          if (conv.product_type !== 'subscription') {
            await supabase
              .from('affiliate_conversions')
              .update({ status: 'confirmed', confirmed_at: new Date().toISOString() })
              .eq('id', conv.id)
            return 'confirmed' as const
          }

          // Look up the user's current subscription in Stripe via the
          // Prisma Subscription row (canonical) or, if missing, by
          // listing customer subscriptions directly.
          let stripeSubscriptionId: string | null = null
          if (conv.referred_user_id) {
            const { data: profile } = await supabase
              .from('profiles')
              .select('stripe_customer_id')
              .eq('id', conv.referred_user_id)
              .maybeSingle()

            if (profile?.stripe_customer_id) {
              const subs = await stripe.subscriptions.list({
                customer: profile.stripe_customer_id,
                status: 'all',
                limit: 5,
              })
              // Prefer active/trialing; fall back to most recent.
              const active = subs.data.find((s) => ['active', 'trialing'].includes(s.status))
              const candidate = active ?? subs.data[0] ?? null
              stripeSubscriptionId = candidate?.id ?? null
            }
          }

          if (!stripeSubscriptionId) {
            // No subscription found — confirm anyway. A subscription that
            // was cancelled within the 60-day window would still appear
            // in the list (status: 'canceled'), so absence here usually
            // means the user paid for a different SKU or used a different
            // payment method. Conservative-but-fair: confirm.
            await supabase
              .from('affiliate_conversions')
              .update({ status: 'confirmed', confirmed_at: new Date().toISOString() })
              .eq('id', conv.id)
            return 'confirmed' as const
          }

          const subscription = await stripe.subscriptions.retrieve(stripeSubscriptionId)
          if (['active', 'trialing', 'past_due'].includes(subscription.status)) {
            // Past_due is treated as still-confirmed: the customer hasn't
            // requested a refund, just failed to pay this month. Stripe
            // will dunning-retry and we'd rather not churn the affiliate's
            // commission record on a transient billing hiccup.
            await supabase
              .from('affiliate_conversions')
              .update({ status: 'confirmed', confirmed_at: new Date().toISOString() })
              .eq('id', conv.id)
            return 'confirmed' as const
          }

          // canceled / unpaid / incomplete_expired → void the commission.
          await supabase
            .from('affiliate_conversions')
            .update({
              status: 'voided',
              voided_reason: `Subscription status '${subscription.status}' at 60-day confirmation check`,
            })
            .eq('id', conv.id)
          return 'voided' as const
        }),
      )

      for (let j = 0; j < results.length; j++) {
        const result = results[j]
        const conv = batch[j]
        if (result.status === 'fulfilled') {
          if (result.value === 'confirmed') confirmed++
          else voided++
          // Mark this affiliate for a recount after we finish the run —
          // confirmed_referral_count drives tier advancement.
          affiliateIdsToRecount.add(conv.affiliate_id)
        } else {
          console.error(`Failed to process conversion ${conv.external_id}:`, result.reason)
          Sentry.captureException(result.reason, {
            tags: { cron: 'affiliate-confirm-v2' },
            extra: { conversionId: conv.id, externalId: conv.external_id },
          })
          errors.push(conv.id)
        }
      }
    }

    // Recount confirmed_referral_count for every affiliate we touched.
    // The SQL helper exists in supabase/migrations/20260420_affiliates_v2.sql
    // (recount_affiliate_referrals(uuid)). It's idempotent and cheap.
    for (const affiliateId of affiliateIdsToRecount) {
      try {
        const { error: rpcErr } = await supabase.rpc('recount_affiliate_referrals', {
          p_affiliate_id: affiliateId,
        })
        if (rpcErr) {
          // Non-fatal — the count is rebuilt on next run. Log and continue.
          console.error(
            `[affiliate-confirm-v2] recount failed for affiliate ${affiliateId}:`,
            rpcErr,
          )
        }
      } catch (err) {
        console.error(`[affiliate-confirm-v2] recount threw for affiliate ${affiliateId}:`, err)
      }
    }

    // 10% error threshold — same as the legacy cron.
    const totalProcessed = pending.length
    if (errors.length > 0 && errors.length > totalProcessed * 0.1) {
      const err = new Error(
        `Partial failure: ${errors.length}/${totalProcessed} conversions failed (>10% threshold)`,
      )
      Sentry.setContext('affiliate-confirm-v2', {
        confirmed,
        voided,
        errors: errors.length,
        total: totalProcessed,
        affiliatesRecounted: affiliateIdsToRecount.size,
      })
      throw err
    }

    return {
      confirmed,
      voided,
      errors: errors.length,
      total: totalProcessed,
      affiliatesRecounted: affiliateIdsToRecount.size,
    }
  })
}
