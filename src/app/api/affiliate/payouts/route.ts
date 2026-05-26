/**
 * GET /api/affiliate/payouts
 *
 * Returns payout history for the currently authenticated affiliate plus a
 * lightweight summary (total paid, pending commission, current tier).
 *
 * Supports optional pagination via ?limit=&offset= (limit default 20, max 100).
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { getCurrentTierInfo } from '@/lib/affiliate/tiers'
import { rateLimit } from '@/lib/rate-limit'

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    // ── Rate limit: 30 per minute per user ────────────────────────────
    const rl = await rateLimit(`affiliate-payouts:${user.id}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const { searchParams } = request.nextUrl
    const limit = Math.min(100, Math.max(1, Number(searchParams.get('limit') ?? 20)))
    const offset = Math.max(0, Number(searchParams.get('offset') ?? 0))

    const admin = createServiceRoleClient()

    // 1. Resolve affiliate account
    const { data: account, error: accountErr } = await admin
      .from('affiliate_accounts')
      .select('id, code, status, tier, confirmed_referral_count')
      .eq('user_id', user.id)
      .maybeSingle()

    if (accountErr) {
      console.error('[affiliate/payouts] account lookup failed:', accountErr)
      return NextResponse.json({ error: 'Failed to load affiliate account' }, { status: 500 })
    }

    if (!account) {
      return NextResponse.json(
        { error: 'No affiliate account found for this user' },
        { status: 404 },
      )
    }

    // 2. Fetch payouts paginated, newest first.
    // Cycle 4: switched from `affiliate_payouts` (legacy Rewardful table)
    // to `affiliate_payout_batches` (new percentage-tier system, created
    // by supabase/migrations/20260420_affiliates_v2.sql). The admin
    // Rewardful payout route at src/app/api/admin/affiliates/payout.ts
    // continues to use the legacy table - the two pipelines stay
    // separate by design.
    const {
      data: payouts,
      error: payoutsErr,
      count,
    } = await admin
      .from('affiliate_payout_batches')
      .select(
        'id, period_start, period_end, amount_pence, currency, status, paid_at, payment_reference, created_at',
        { count: 'exact' },
      )
      .eq('affiliate_id', account.id)
      .order('period_end', { ascending: false })
      .range(offset, offset + limit - 1)

    if (payoutsErr) {
      console.error('[affiliate/payouts] payouts lookup failed:', payoutsErr)
      return NextResponse.json({ error: 'Failed to load payouts' }, { status: 500 })
    }

    // 3. Summary: total paid, pending (unpaid commissions), tier info
    const { data: totals } = await admin
      .from('affiliate_payout_batches')
      .select('amount_pence, status')
      .eq('affiliate_id', account.id)

    const totalPaidPence = (totals ?? [])
      .filter((p) => p.status === 'paid')
      .reduce((sum, p) => sum + Number(p.amount_pence ?? 0), 0)
    const totalPendingPayoutPence = (totals ?? [])
      .filter((p) => p.status === 'approved' || p.status === 'calculated')
      .reduce((sum, p) => sum + Number(p.amount_pence ?? 0), 0)

    // Unpaid conversions not yet rolled into a payout
    const { data: unpaidConv } = await admin
      .from('affiliate_conversions')
      .select('commission_pence')
      .eq('affiliate_id', account.id)
      .in('status', ['pending', 'confirmed'])
      .is('payout_id', null)

    const unpaidCommissionPence = (unpaidConv ?? []).reduce(
      (sum, c) => sum + Number(c.commission_pence ?? 0),
      0,
    )

    const referralCount = Number(account.confirmed_referral_count ?? 0)
    const tierInfo = getCurrentTierInfo(referralCount)

    return NextResponse.json(
      {
        success: true,
        affiliate: {
          id: account.id,
          code: account.code,
          status: account.status,
          confirmed_referrals: referralCount,
          tier: tierInfo.tier,
          tier_label: tierInfo.label,
          commission_pence: tierInfo.commissionPence,
          commission_gbp: tierInfo.commissionGbp,
          // Flat-rate system - no percentage. Kept for API backward compat.
          commission_rate: 0,
          next_tier: tierInfo.nextTier,
          signups_to_next_tier: tierInfo.signupsToNextTier,
          /** @deprecated Use signups_to_next_tier. */
          referrals_to_next_tier: tierInfo.signupsToNextTier,
        },
        summary: {
          total_paid_pence: totalPaidPence,
          total_pending_payout_pence: totalPendingPayoutPence,
          unpaid_commission_pence: unpaidCommissionPence,
          currency: 'gbp',
        },
        payouts: payouts ?? [],
        pagination: {
          limit,
          offset,
          total: count ?? 0,
        },
      },
      { status: 200 },
    )
  } catch (err) {
    console.error('[affiliate/payouts] unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
