'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Copy,
  Check,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  AlertTriangle,
  ExternalLink,
} from 'lucide-react'
import type {
  AffiliateWithRelations,
  AffiliateReferral,
  AffiliatePayout,
  AffiliateCommissionDefaults,
} from '@/lib/types'

interface AffiliateDashboardProps {
  affiliate: AffiliateWithRelations
  referrals: AffiliateReferral[]
  payouts: AffiliatePayout[]
  totalEarnings: number
  pendingEarnings: number
  totalPaid: number
  thisMonthEarnings: number
  commissionRates: AffiliateCommissionDefaults | null
}

export default function AffiliateDashboard({
  affiliate,
  referrals,
  payouts,
  totalEarnings,
  pendingEarnings,
  totalPaid,
  thisMonthEarnings,
  commissionRates,
}: AffiliateDashboardProps) {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'referrals' | 'payouts'>('referrals')

  const affiliateUrl = `https://theenglishhub.app?via=${affiliate.rewardful_affiliate_id ?? 'YOUR_CODE'}`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(affiliateUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatGBP = (amount: number) =>
    `£${amount.toFixed(2)}`

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })

  const statusBadge = (status: string) => {
    const styles: Record<string, string> = {
      pending: 'bg-yellow-500/10 text-yellow-400',
      confirmed: 'bg-blue-500/10 text-blue-400',
      paid: 'bg-brand-accent/10 text-brand-accent',
      voided: 'bg-red-500/10 text-red-400',
      refunded: 'bg-orange-500/10 text-orange-400',
      calculated: 'bg-yellow-500/10 text-yellow-400',
      disclosure_checked: 'bg-blue-500/10 text-blue-400',
      approved: 'bg-brand-accent/10 text-brand-accent',
      failed: 'bg-red-500/10 text-red-400',
    }
    return (
      <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${styles[status] ?? 'bg-brand-border text-brand-muted'}`}>
        {status}
      </span>
    )
  }

  const sortedReferrals = [...referrals].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )

  const sortedPayouts = [...payouts].sort(
    (a, b) => new Date(b.period_end).getTime() - new Date(a.period_end).getTime()
  )

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to dashboard
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-7 h-7 text-brand-accent" />
          <h1 className="text-3xl font-bold text-brand-text">Affiliate Dashboard</h1>
          <span className="text-xs px-2 py-0.5 rounded-full bg-brand-accent/10 text-brand-accent">
            Tier {affiliate.tier}
          </span>
        </div>

        {/* Disclosure Reminder */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
          <div className="text-sm text-yellow-200">
            <strong>Required for every post:</strong> Include <code className="bg-yellow-500/20 px-1 rounded">#ad</code> in
            the first 3 words of your caption. Posts without disclosure will not earn commission.{' '}
            <a
              href="https://www.asa.org.uk/advice-online/recognising-ads-social-media.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-100"
            >
              ASA guidance <ExternalLink className="inline w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<DollarSign className="w-5 h-5" />}
            label="Total Earned"
            value={formatGBP(totalEarnings)}
          />
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            label="This Month"
            value={formatGBP(thisMonthEarnings)}
          />
          <StatCard
            icon={<Clock className="w-5 h-5" />}
            label="Pending"
            value={formatGBP(pendingEarnings)}
          />
          <StatCard
            icon={<Users className="w-5 h-5" />}
            label="Total Referrals"
            value={String(referrals.length)}
          />
        </div>

        {/* Affiliate Link */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-semibold text-brand-text mb-3">Your Affiliate Link</h2>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-brand-bg rounded-lg border border-brand-border px-4 py-3 font-mono text-sm text-brand-muted truncate">
              {affiliateUrl}
            </div>
            <button
              onClick={handleCopy}
              className="btn-primary px-4 py-3 gap-2 text-sm shrink-0"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          {commissionRates && (
            <p className="text-sm text-brand-muted mt-3">
              You earn: <strong className="text-brand-text">£{commissionRates.commission_annual_gbp}</strong> per annual signup
              {' · '}
              <strong className="text-brand-text">£{commissionRates.commission_monthly_gbp}</strong> per monthly signup
              {' · '}
              Paid monthly on the 1st
            </p>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-4 bg-brand-card border border-brand-border rounded-lg p-1 w-fit">
          <button
            onClick={() => setActiveTab('referrals')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'referrals'
                ? 'bg-brand-accent text-white'
                : 'text-brand-muted hover:text-brand-text'
            }`}
          >
            Referrals ({referrals.length})
          </button>
          <button
            onClick={() => setActiveTab('payouts')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'payouts'
                ? 'bg-brand-accent text-white'
                : 'text-brand-muted hover:text-brand-text'
            }`}
          >
            Payouts ({payouts.length})
          </button>
        </div>

        {/* Referrals Table */}
        {activeTab === 'referrals' && (
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-brand-text mb-4">Referral History</h2>
            {sortedReferrals.length === 0 ? (
              <p className="text-brand-muted text-sm py-8 text-center">
                No referrals yet. Share your link to start earning!
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-brand-border text-left text-brand-muted">
                      <th className="pb-3 pr-4 font-medium">Date</th>
                      <th className="pb-3 pr-4 font-medium">Plan</th>
                      <th className="pb-3 pr-4 font-medium">Amount</th>
                      <th className="pb-3 pr-4 font-medium">Commission</th>
                      <th className="pb-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border">
                    {sortedReferrals.map((r) => (
                      <tr key={r.id} className="text-brand-text">
                        <td className="py-3 pr-4 text-brand-muted text-xs">
                          {r.converted_to_paid_at
                            ? formatDate(r.converted_to_paid_at)
                            : formatDate(r.created_at)}
                        </td>
                        <td className="py-3 pr-4 capitalize">{r.plan_type ?? '—'}</td>
                        <td className="py-3 pr-4">
                          {r.plan_amount_gbp != null ? formatGBP(r.plan_amount_gbp) : '—'}
                        </td>
                        <td className="py-3 pr-4 font-semibold">
                          {r.commission_amount_gbp != null
                            ? formatGBP(r.commission_amount_gbp)
                            : '—'}
                        </td>
                        <td className="py-3">{statusBadge(r.commission_status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Payouts Table */}
        {activeTab === 'payouts' && (
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-brand-text mb-4">Payout History</h2>
            {sortedPayouts.length === 0 ? (
              <p className="text-brand-muted text-sm py-8 text-center">
                No payouts yet. Payouts are processed monthly on the 1st.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-brand-border text-left text-brand-muted">
                      <th className="pb-3 pr-4 font-medium">Period</th>
                      <th className="pb-3 pr-4 font-medium">Referrals</th>
                      <th className="pb-3 pr-4 font-medium">Amount</th>
                      <th className="pb-3 pr-4 font-medium">Status</th>
                      <th className="pb-3 font-medium">Paid</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border">
                    {sortedPayouts.map((p) => (
                      <tr key={p.id} className="text-brand-text">
                        <td className="py-3 pr-4 text-xs text-brand-muted">
                          {formatDate(p.period_start)} — {formatDate(p.period_end)}
                        </td>
                        <td className="py-3 pr-4">{p.referral_count}</td>
                        <td className="py-3 pr-4 font-semibold">
                          {formatGBP(p.gross_commission_gbp)}
                        </td>
                        <td className="py-3 pr-4">{statusBadge(p.status)}</td>
                        <td className="py-3 text-xs text-brand-muted">
                          {p.paid_at ? formatDate(p.paid_at) : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="card p-5">
      <div className="flex items-center gap-2 text-brand-accent mb-2">
        {icon}
        <span className="text-sm text-brand-muted">{label}</span>
      </div>
      <p className="text-2xl font-bold text-brand-text">{value}</p>
    </div>
  )
}
