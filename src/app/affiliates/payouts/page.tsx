import { createServerSupabaseClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import type { AffiliateWithRelations } from '@/lib/types'
import AffiliatePayoutsClient from './AffiliatePayoutsClient'

export const metadata = {
  title: 'Affiliate Payouts — The English Hub',
}

export default async function AffiliatePayoutsPage() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login?redirect=/affiliates/payouts')

  const { data: affiliate } = await supabase
    .from('affiliates')
    .select(`
      *,
      affiliate_referrals (
        id,
        plan_type,
        plan_amount_gbp,
        commission_amount_gbp,
        commission_status,
        converted_to_paid_at,
        created_at
      ),
      affiliate_payouts (
        id,
        period_start,
        period_end,
        referral_count,
        gross_commission_gbp,
        status,
        payment_reference,
        paid_at,
        created_at
      )
    `)
    .eq('user_id', user.id)
    .single()

  if (!affiliate) {
    redirect('/affiliates/apply')
  }

  if (affiliate.status !== 'active') {
    redirect('/affiliates/apply?status=pending')
  }

  const typedAffiliate = affiliate as unknown as AffiliateWithRelations

  const referrals = typedAffiliate.affiliate_referrals ?? []
  const payouts = typedAffiliate.affiliate_payouts ?? []

  // Total earned (paid commissions)
  const totalEarned = referrals
    .filter((r) => r.commission_status === 'paid')
    .reduce((sum, r) => sum + (r.commission_amount_gbp ?? 0), 0)

  // Total paid out
  const totalPaidOut = payouts
    .filter((p) => p.status === 'paid')
    .reduce((sum, p) => sum + p.gross_commission_gbp, 0)

  // Pending confirmation (pending + confirmed but not yet paid)
  const pendingConfirmation = referrals
    .filter((r) => ['pending', 'confirmed'].includes(r.commission_status))
    .reduce((sum, r) => sum + (r.commission_amount_gbp ?? 0), 0)

  // Current month referrals
  const now = new Date()
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const thisMonthReferrals = referrals.filter(
    (r) =>
      r.converted_to_paid_at &&
      new Date(r.converted_to_paid_at) >= monthStart &&
      r.commission_status !== 'voided'
  )
  const thisMonthEstimate = thisMonthReferrals.reduce(
    (sum, r) => sum + (r.commission_amount_gbp ?? 0),
    0
  )

  // Next payout date: 1st of next month
  const nextPayoutDate = new Date(now.getFullYear(), now.getMonth() + 1, 1)

  return (
    <AffiliatePayoutsClient
      totalEarned={totalEarned}
      totalPaidOut={totalPaidOut}
      pendingConfirmation={pendingConfirmation}
      thisMonthReferralCount={thisMonthReferrals.length}
      thisMonthEstimate={thisMonthEstimate}
      nextPayoutDate={nextPayoutDate.toISOString()}
      payouts={payouts}
    />
  )
}
