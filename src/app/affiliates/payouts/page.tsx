import type { Metadata } from 'next'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AffiliatePayoutsClient from './AffiliatePayoutsClient'
import { t } from '@/lib/i18n/t'

// 2026-05-13: metadata wired to i18n - document title resolves through
// `affiliates.payouts.meta.title` so the AR locale serves Khaleeji copy.
export async function generateMetadata(): Promise<Metadata> {
  return { title: await t('affiliates.payouts.meta.title') }
}

// ─── /affiliates/payouts ────────────────────────────────────────────────────
//
// Reads from the NEW affiliate_accounts system (commit 20260420_affiliates_v2).
// The legacy `affiliates` / `affiliate_referrals` / `affiliate_payouts` tables
// are no longer queried here - the previous implementation redirected to
// /affiliates/apply on miss, which bounced via /affiliates/page.tsx back to
// /affiliates/dashboard → infinite redirect loop.
//
// Migration logic: when a user has rows in BOTH systems (legacy carry-over
// during the cutover) we always prefer `affiliate_accounts`. The legacy
// admin-driven Rewardful payout path lives on at
// `src/app/api/admin/affiliates/payout.ts`; the two pipelines stay separate.
//
// Display threshold: first payout cleared at £20 - informational only,
// not enforced here.
// ────────────────────────────────────────────────────────────────────────────

export default async function AffiliatePayoutsPage() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login?redirect=/affiliates/payouts')

  const admin = createServiceRoleClient()

  // 1. Resolve affiliate account on the new system.
  const { data: account } = await admin
    .from('affiliate_accounts')
    .select(
      'id, code, status, tier, full_name, email, confirmed_referral_count, payout_method, payout_email, created_at',
    )
    .eq('user_id', user.id)
    .maybeSingle()

  // No new-system row - bounce to the self-serve enrolment anchor on
  // /affiliates. NEVER /affiliates/apply (legacy redirect loop).
  if (!account) {
    redirect('/affiliates#apply')
  }

  // Paused / terminated / pending / rejected - render but mark as inactive.
  // We still want the page to load (no redirect) so the user can see why
  // they're not earning, instead of recycling.
  const isActive = account.status === 'active' || account.status === 'approved'

  // 2. Pull conversions and payout batches in parallel.
  const [conversionsRes, payoutsRes] = await Promise.all([
    admin
      .from('affiliate_conversions')
      .select(
        'id, affiliate_id, link_id, external_id, order_value_pence, commission_pence, commission_rate, tier_at_conversion, currency, product_type, referred_user_id, status, confirmed_at, paid_at, payout_id, created_at',
      )
      .eq('affiliate_id', account.id)
      .order('created_at', { ascending: false })
      .limit(500),
    admin
      .from('affiliate_payout_batches')
      .select(
        'id, period_start, period_end, conversion_count, amount_pence, currency, status, payment_method, payment_reference, paid_at, created_at',
      )
      .eq('affiliate_id', account.id)
      .order('period_end', { ascending: false })
      .limit(50),
  ])

  const conversions = conversionsRes.data ?? []
  const payouts = payoutsRes.data ?? []

  // ── Aggregate metrics ────────────────────────────────────────────────
  const PENCE = 100

  // Total earned: confirmed + paid commissions (i.e. money definitely owed)
  const totalEarnedGbp =
    conversions
      .filter((c) => c.status === 'paid' || c.status === 'confirmed')
      .reduce((sum, c) => sum + Number(c.commission_pence ?? 0), 0) / PENCE

  // Total paid out: sum of batches with status 'paid'
  const totalPaidOutGbp =
    payouts
      .filter((p) => p.status === 'paid')
      .reduce((sum, p) => sum + Number(p.amount_pence ?? 0), 0) / PENCE

  // Pending confirmation: commissions still in 'pending' (not yet confirmed)
  const pendingConfirmationGbp =
    conversions
      .filter((c) => c.status === 'pending')
      .reduce((sum, c) => sum + Number(c.commission_pence ?? 0), 0) / PENCE

  // Current month estimate: any non-voided/refunded conversion in this month
  const now = new Date()
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const thisMonthConversions = conversions.filter(
    (c) =>
      c.created_at &&
      new Date(c.created_at) >= monthStart &&
      c.status !== 'voided' &&
      c.status !== 'refunded',
  )
  const thisMonthEstimateGbp =
    thisMonthConversions.reduce((sum, c) => sum + Number(c.commission_pence ?? 0), 0) / PENCE

  // Next payout date: 1st of next month
  const nextPayoutDate = new Date(now.getFullYear(), now.getMonth() + 1, 1)

  // Map payout batches to the shape the client expects
  const payoutsForClient = payouts.map((p) => ({
    id: p.id,
    period_start: p.period_start,
    period_end: p.period_end,
    referral_count: p.conversion_count ?? 0,
    gross_commission_gbp: Number(p.amount_pence ?? 0) / PENCE,
    status: p.status,
    payment_reference: p.payment_reference,
    paid_at: p.paid_at,
  }))

  return (
    <AffiliatePayoutsClient
      isActive={isActive}
      accountStatus={account.status}
      totalEarned={totalEarnedGbp}
      totalPaidOut={totalPaidOutGbp}
      pendingConfirmation={pendingConfirmationGbp}
      thisMonthReferralCount={thisMonthConversions.length}
      thisMonthEstimate={thisMonthEstimateGbp}
      nextPayoutDate={nextPayoutDate.toISOString()}
      payouts={payoutsForClient}
      minimumPayoutGbp={20}
    />
  )
}
