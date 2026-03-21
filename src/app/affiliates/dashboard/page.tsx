import { createServerSupabaseClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import type { AffiliateWithRelations } from '@/lib/types'
import AffiliateDashboard from '@/components/affiliates/AffiliateDashboard'

export const metadata = {
  title: 'Affiliate Dashboard — The English Hub',
}

export default async function AffiliateDashboardPage() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login?redirect=/affiliates/dashboard')

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
        paid_at,
        created_at
      )
    `)
    .eq('user_id', user.id)
    .single()

  if (!affiliate) {
    redirect('/affiliates/apply')
  }

  if (affiliate.status === 'pending' || affiliate.status === 'agreement_sent') {
    redirect('/affiliates/apply?status=pending')
  }

  const typedAffiliate = affiliate as unknown as AffiliateWithRelations

  const referrals = typedAffiliate.affiliate_referrals ?? []
  const payouts = typedAffiliate.affiliate_payouts ?? []

  const totalEarnings = referrals
    .filter((r) => r.commission_status === 'paid')
    .reduce((sum, r) => sum + (r.commission_amount_gbp ?? 0), 0)

  const pendingEarnings = referrals
    .filter((r) => ['pending', 'confirmed'].includes(r.commission_status))
    .reduce((sum, r) => sum + (r.commission_amount_gbp ?? 0), 0)

  const totalPaid = payouts
    .filter((p) => p.status === 'paid')
    .reduce((sum, p) => sum + p.gross_commission_gbp, 0)

  // Current month earnings
  const now = new Date()
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const thisMonthEarnings = referrals
    .filter(
      (r) =>
        r.converted_to_paid_at &&
        new Date(r.converted_to_paid_at) >= monthStart &&
        r.commission_status !== 'voided'
    )
    .reduce((sum, r) => sum + (r.commission_amount_gbp ?? 0), 0)

  // Get commission defaults for display
  const { data: commissionDefaults } = await supabase
    .from('affiliate_commission_defaults')
    .select('*')
    .eq('tier', typedAffiliate.tier)
    .single()

  return (
    <AffiliateDashboard
      affiliate={typedAffiliate}
      referrals={referrals}
      payouts={payouts}
      totalEarnings={totalEarnings}
      pendingEarnings={pendingEarnings}
      totalPaid={totalPaid}
      thisMonthEarnings={thisMonthEarnings}
      commissionRates={commissionDefaults}
    />
  )
}
