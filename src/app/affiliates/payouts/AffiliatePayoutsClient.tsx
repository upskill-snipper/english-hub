'use client'

import {
  Wallet,
  DollarSign,
  TrendingUp,
  Clock,
  CalendarCheck,
  AlertTriangle,
  Info,
} from 'lucide-react'

/**
 * View model for a single payout row, derived from `affiliate_payout_batches`
 * but expressed in GBP for the UI. The status enum here is the new one:
 *   'calculated' | 'approved' | 'paid' | 'failed' | 'cancelled'
 */
export interface PayoutRow {
  id: string
  period_start: string
  period_end: string
  referral_count: number
  gross_commission_gbp: number
  status: string
  payment_reference: string | null
  paid_at: string | null
}

interface AffiliatePayoutsClientProps {
  isActive: boolean
  accountStatus: string
  totalEarned: number
  totalPaidOut: number
  pendingConfirmation: number
  thisMonthReferralCount: number
  thisMonthEstimate: number
  nextPayoutDate: string
  payouts: PayoutRow[]
  minimumPayoutGbp: number
}

export default function AffiliatePayoutsClient({
  isActive,
  accountStatus,
  totalEarned,
  totalPaidOut,
  pendingConfirmation,
  thisMonthReferralCount,
  thisMonthEstimate,
  nextPayoutDate,
  payouts,
  minimumPayoutGbp,
}: AffiliatePayoutsClientProps) {
  const formatGBP = (amount: number) => `£${amount.toFixed(2)}`

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })

  const formatPeriod = (start: string, end: string) => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    const monthName = startDate.toLocaleDateString('en-GB', { month: 'long' })
    const year = startDate.getFullYear()
    // If same month, show "March 2026"
    if (
      startDate.getMonth() === endDate.getMonth() &&
      startDate.getFullYear() === endDate.getFullYear()
    ) {
      return `${monthName} ${year}`
    }
    // Otherwise show full range
    return `${formatDate(start)} - ${formatDate(end)}`
  }

  const nextPayoutFormatted = new Date(nextPayoutDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  // Next payout estimate: pending + current month
  const nextPayoutEstimate = pendingConfirmation + thisMonthEstimate

  // ── Status badge for the new affiliate_payout_batches enum ─────────────
  // Source: supabase/migrations/20260420_affiliates_v2.sql line 217.
  const statusBadge = (status: string) => {
    const styles: Record<string, string> = {
      calculated: 'bg-yellow-500/10 text-clay-600',
      approved: 'bg-blue-500/10 text-blue-400',
      paid: 'bg-primary/10 text-primary',
      failed: 'bg-red-500/10 text-red-400',
      cancelled: 'bg-border text-muted-foreground',
    }
    const labels: Record<string, string> = {
      calculated: 'Calculated',
      approved: 'Approved',
      paid: 'Paid',
      failed: 'Failed',
      cancelled: 'Cancelled',
    }
    return (
      <span
        className={`inline-block text-xs px-2 py-0.5 rounded-full ${styles[status] ?? 'bg-border text-muted-foreground'}`}
      >
        {labels[status] ?? status}
      </span>
    )
  }

  const sortedPayouts = [...payouts].sort(
    (a, b) => new Date(b.period_end).getTime() - new Date(a.period_end).getTime(),
  )

  // Friendly label for non-active account states
  const statusLabel = (status: string) => {
    const labels: Record<string, string> = {
      pending: 'pending review',
      approved: 'approved',
      active: 'active',
      suspended: 'suspended',
      terminated: 'terminated',
      rejected: 'rejected',
    }
    return labels[status] ?? status
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Wallet className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Payouts</h1>
        </div>

        {/* ── Account-state notice (non-active) ───────────────────────── */}
        {!isActive && (
          <div className="mb-6 flex items-start gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
            <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-clay-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-yellow-700">
                Your affiliate account is {statusLabel(accountStatus)}.
              </p>
              <p className="text-sm text-yellow-700/80 mt-1">
                Payouts only run while the account is active. Any commissions earned to date are
                still recorded below.
              </p>
            </div>
          </div>
        )}

        {/* ── Payout Summary Cards ─────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <SummaryCard
            icon={<DollarSign className="w-5 h-5" />}
            label="Total Earned"
            value={formatGBP(totalEarned)}
          />
          <SummaryCard
            icon={<TrendingUp className="w-5 h-5" />}
            label="Total Paid Out"
            value={formatGBP(totalPaidOut)}
          />
          <SummaryCard
            icon={<Clock className="w-5 h-5" />}
            label="Pending Confirmation"
            value={formatGBP(pendingConfirmation)}
          />
          <SummaryCard
            icon={<CalendarCheck className="w-5 h-5" />}
            label="Next Payout Estimate"
            value={formatGBP(nextPayoutEstimate)}
          />
        </div>

        {/* ── Upcoming Payout ──────────────────────────────────────── */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Upcoming Payout</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Current month&apos;s referrals</p>
              <p className="text-2xl font-bold text-foreground">{thisMonthReferralCount}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Estimated commission</p>
              <p className="text-2xl font-bold text-foreground">{formatGBP(thisMonthEstimate)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Expected payout date</p>
              <p className="text-2xl font-bold text-foreground">{nextPayoutFormatted}</p>
            </div>
          </div>

          <div className="flex items-start gap-2 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-3">
            <Info className="w-4 h-4 text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Commissions confirm after 30 days from the referral&apos;s payment date. Only
              confirmed commissions are included in payouts.
            </p>
          </div>

          <div className="flex items-start gap-2 bg-primary/5 border border-primary/20 rounded-lg p-3">
            <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-foreground">
              Minimum payout threshold:{' '}
              <span className="font-semibold">{formatGBP(minimumPayoutGbp)}</span>. Balances below
              this amount roll over to the next monthly batch.
            </p>
          </div>
        </div>

        {/* ── Payout History Table ─────────────────────────────────── */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Payout History</h2>

          {sortedPayouts.length === 0 ? (
            <p className="text-muted-foreground text-sm py-8 text-center">
              No payouts yet. Payouts are processed monthly on the 1st.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-3 pr-4 font-medium">Period</th>
                    <th className="pb-3 pr-4 font-medium">Referrals</th>
                    <th className="pb-3 pr-4 font-medium">Commission</th>
                    <th className="pb-3 pr-4 font-medium">Status</th>
                    <th className="pb-3 pr-4 font-medium">Reference</th>
                    <th className="pb-3 font-medium">Date Paid</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sortedPayouts.map((p) => (
                    <tr key={p.id} className="text-foreground">
                      <td className="py-3 pr-4 text-xs text-muted-foreground">
                        {formatPeriod(p.period_start, p.period_end)}
                      </td>
                      <td className="py-3 pr-4">{p.referral_count}</td>
                      <td className="py-3 pr-4 font-semibold">
                        {formatGBP(p.gross_commission_gbp)}
                      </td>
                      <td className="py-3 pr-4">{statusBadge(p.status)}</td>
                      <td className="py-3 pr-4 text-xs text-muted-foreground font-mono">
                        {p.payment_reference ?? '-'}
                      </td>
                      <td className="py-3 text-xs text-muted-foreground">
                        {p.paid_at ? formatDate(p.paid_at) : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ── Tax Information ──────────────────────────────────────── */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-clay-600 mt-0.5 shrink-0" />
          <div className="space-y-1.5">
            <h3 className="text-sm font-semibold text-yellow-700">Tax Information</h3>
            <ul className="text-sm text-yellow-700/80 space-y-1 list-disc list-inside">
              <li>You are responsible for declaring affiliate income to HMRC</li>
              <li>We do not deduct tax at source</li>
              <li>Keep your payout records for your tax return</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function SummaryCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-center gap-2 text-primary mb-2">
        {icon}
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  )
}
