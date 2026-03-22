import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import { stripe } from '@/lib/stripe'
import { createServiceRoleClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

/**
 * GET /api/cron/affiliate-confirm
 * Daily cron job that confirms pending affiliate referrals older than 30 days
 * if the referred subscription is still active, or voids them if cancelled.
 *
 * Protected by CRON_SECRET to prevent unauthorized invocation.
 */
export async function GET(request: NextRequest) {
  try {
    const cronSecret = process.env.CRON_SECRET
    if (!cronSecret) {
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
    }
    const authHeader = request.headers.get('authorization')
    const incoming = Buffer.from(authHeader ?? '')
    const expected = Buffer.from(`Bearer ${cronSecret}`)
    if (
      incoming.length !== expected.length ||
      !timingSafeEqual(incoming, expected)
    ) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = createServiceRoleClient()

    // Find all pending referrals older than 30 days
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const { data: pendingReferrals, error: fetchError } = await supabase
      .from('affiliate_referrals')
      .select('id, stripe_subscription_id, affiliate_id')
      .eq('commission_status', 'pending')
      .lt('converted_to_paid_at', thirtyDaysAgo.toISOString())

    if (fetchError) {
      console.error('Failed to fetch pending referrals:', fetchError)
      return NextResponse.json({ error: 'Failed to fetch referrals' }, { status: 500 })
    }

    if (!pendingReferrals || pendingReferrals.length === 0) {
      return NextResponse.json({ confirmed: 0, voided: 0, message: 'No pending referrals to process' })
    }

    let confirmed = 0
    let voided = 0
    const errors: string[] = []

    // Process referrals in batches of 5 to stay within execution time limits
    const BATCH_SIZE = 5
    for (let i = 0; i < pendingReferrals.length; i += BATCH_SIZE) {
      const batch = pendingReferrals.slice(i, i + BATCH_SIZE)
      const results = await Promise.allSettled(
        batch.map(async (referral) => {
          // Skip non-subscription referrals (one-time purchases) — confirm immediately
          if (!referral.stripe_subscription_id) {
            await supabase
              .from('affiliate_referrals')
              .update({ commission_status: 'confirmed' })
              .eq('id', referral.id)
            return 'confirmed' as const
          }

          // Check if the subscription is still active in Stripe
          const subscription = await stripe.subscriptions.retrieve(referral.stripe_subscription_id)

          if (['active', 'trialing'].includes(subscription.status)) {
            // Subscription still active — confirm the commission
            await supabase
              .from('affiliate_referrals')
              .update({ commission_status: 'confirmed' })
              .eq('id', referral.id)
            return 'confirmed' as const
          } else {
            // Subscription cancelled/expired — void the commission
            await supabase
              .from('affiliate_referrals')
              .update({
                commission_status: 'voided',
                commission_voided_reason: `Subscription status '${subscription.status}' at 30-day confirmation check`,
              })
              .eq('id', referral.id)
            return 'voided' as const
          }
        })
      )

      for (let j = 0; j < results.length; j++) {
        const result = results[j]
        if (result.status === 'fulfilled') {
          if (result.value === 'confirmed') confirmed++
          else voided++
        } else {
          const referralId = batch[j].id
          console.error(`Failed to process referral ${referralId}:`, result.reason)
          errors.push(referralId)
        }
      }
    }

    console.log(`Affiliate commission confirmation: ${confirmed} confirmed, ${voided} voided, ${errors.length} errors out of ${pendingReferrals.length} processed`)

    return NextResponse.json({ confirmed, voided, errors: errors.length, total: pendingReferrals.length })
  } catch (error) {
    console.error('Affiliate confirm cron unexpected error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
