import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AffiliateDashboardClient from './dashboard-client'

// ─── /affiliates/dashboard ──────────────────────────────────────────────────
//
// Reads from the NEW affiliate_accounts system (commit 20260420_affiliates_v2).
// The legacy affiliates table path has been retired from the dashboard — every
// self-serve enrolment via /api/affiliates/enrol writes to affiliate_accounts,
// and the few legacy rows that still exist are handled by the soft banner on
// /affiliates (commit 157b5a4 updated that path).
//
// Fixes the redirect-loop flash: the previous implementation redirected to
// /affiliates/apply when no legacy row existed, which bounced via
// /affiliates/page.tsx back to /affiliates/dashboard → infinite loop.
// ────────────────────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Affiliate Dashboard — The English Hub',
}

export default async function AffiliateDashboardPage() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login?redirect=/affiliates/dashboard')
  }

  const admin = createServiceRoleClient()

  // Load the new-system affiliate row
  const { data: account } = await admin
    .from('affiliate_accounts')
    .select('id, code, status, tier, full_name, email, confirmed_referral_count, created_at')
    .eq('user_id', user.id)
    .maybeSingle()

  // No row — user needs to enrol. Send them to the enrolment form,
  // NOT /affiliates/apply (which redirects and causes the historical loop).
  if (!account) {
    redirect('/affiliates#apply')
  }

  // Paused / terminated accounts see a stripped-back notice
  const isActive = account.status === 'active' || account.status === 'approved'

  // Pull conversions, clicks, links, payouts for the widgets
  const [conversionsRes, clicksRes, linksRes, payoutsRes] = await Promise.all([
    admin
      .from('affiliate_conversions')
      .select(
        'id, commission_pence, order_value_pence, currency, status, tier_at_conversion, product_type, created_at, confirmed_at, paid_at',
      )
      .eq('affiliate_id', account.id)
      .order('created_at', { ascending: false })
      .limit(200),
    admin
      .from('affiliate_clicks')
      .select('id, created_at, country, device, referrer')
      .eq('affiliate_id', account.id)
      .order('created_at', { ascending: false })
      .limit(500),
    admin
      .from('affiliate_links')
      .select('id, token, target_path, campaign, click_count, conversion_count, created_at')
      .eq('affiliate_id', account.id)
      .is('archived_at', null)
      .order('created_at', { ascending: false })
      .limit(20),
    admin
      .from('affiliate_payout_batches')
      .select('id, period_start, period_end, amount_pence, conversion_count, status, paid_at, created_at')
      .eq('affiliate_id', account.id)
      .order('period_start', { ascending: false })
      .limit(12),
  ])

  const conversions = conversionsRes.data ?? []
  const clicks = clicksRes.data ?? []
  const links = linksRes.data ?? []
  const payouts = payoutsRes.data ?? []

  // ── Aggregate metrics ─────────────────────────────────────────────────
  const totalEarningsPence = conversions
    .filter((c) => c.status === 'paid' || c.status === 'confirmed')
    .reduce((sum, c) => sum + c.commission_pence, 0)

  const pendingEarningsPence = conversions
    .filter((c) => c.status === 'pending')
    .reduce((sum, c) => sum + c.commission_pence, 0)

  const paidOutPence = payouts
    .filter((p) => p.status === 'paid')
    .reduce((sum, p) => sum + p.amount_pence, 0)

  const thisMonth = new Date()
  thisMonth.setUTCDate(1)
  thisMonth.setUTCHours(0, 0, 0, 0)
  const thisMonthEarningsPence = conversions
    .filter(
      (c) =>
        c.status !== 'voided' &&
        c.status !== 'refunded' &&
        new Date(c.created_at) >= thisMonth,
    )
    .reduce((sum, c) => sum + c.commission_pence, 0)

  const totalClicks = clicks.length
  const totalConversions = conversions.filter(
    (c) => c.status === 'paid' || c.status === 'confirmed',
  ).length
  const conversionRatePct =
    totalClicks > 0 ? Math.min(100, Math.round((totalConversions / totalClicks) * 1000) / 10) : 0

  // Build last-30-day bucket counts for sparkline
  const now = Date.now()
  const DAY_MS = 86_400_000
  const last30Days = Array.from({ length: 30 }, (_, i) => {
    const dayEnd = now - (29 - i) * DAY_MS
    const dayStart = dayEnd - DAY_MS
    const dayClicks = clicks.filter((c) => {
      const t = new Date(c.created_at).getTime()
      return t >= dayStart && t < dayEnd
    }).length
    const dayEarningsPence = conversions
      .filter((c) => {
        const t = new Date(c.created_at).getTime()
        return (
          t >= dayStart &&
          t < dayEnd &&
          c.status !== 'voided' &&
          c.status !== 'refunded'
        )
      })
      .reduce((sum, c) => sum + c.commission_pence, 0)
    return {
      date: new Date(dayStart).toISOString().slice(0, 10),
      clicks: dayClicks,
      earningsPence: dayEarningsPence,
    }
  })

  // Tier progress calculation
  const tierThresholds = { bronze: 0, silver: 5, gold: 25 }
  const tier = (account.tier ?? 'bronze') as 'bronze' | 'silver' | 'gold'
  const confirmedCount = account.confirmed_referral_count ?? 0
  const nextTier: 'silver' | 'gold' | null =
    tier === 'bronze' ? 'silver' : tier === 'silver' ? 'gold' : null
  const nextThreshold = nextTier ? tierThresholds[nextTier] : null
  const progressPct = nextThreshold
    ? Math.min(100, Math.round((confirmedCount / nextThreshold) * 100))
    : 100
  const commissionPctByTier = { bronze: 10, silver: 15, gold: 25 }

  const referralUrl = `https://theenglishhub.app/?ref=${account.code}`

  return (
    <AffiliateDashboardClient
      account={{
        code: account.code,
        displayName: account.full_name,
        status: account.status,
        isActive,
        tier,
        confirmedCount,
        joinedAt: account.created_at,
      }}
      stats={{
        totalEarningsPence,
        pendingEarningsPence,
        paidOutPence,
        thisMonthEarningsPence,
        totalClicks,
        totalConversions,
        conversionRatePct,
      }}
      tierProgress={{
        tier,
        nextTier,
        progressPct,
        currentCount: confirmedCount,
        nextThreshold,
        commissionPct: commissionPctByTier[tier],
        nextCommissionPct: nextTier ? commissionPctByTier[nextTier] : null,
      }}
      last30Days={last30Days}
      conversions={conversions.slice(0, 10)}
      clicks={clicks.slice(0, 5)}
      links={links}
      payouts={payouts}
      referralUrl={referralUrl}
    />
  )
}
