'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import {
  Shield,
  ArrowLeft,
  RefreshCw,
  Loader2,
  Users,
  Clock,
  CheckCircle2,
  XCircle,
  DollarSign,
  AlertTriangle,
  ExternalLink,
  ChevronDown,
} from 'lucide-react'

const ADMIN_EMAILS = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || 'admin@theenglishhub.app')
  .split(',')
  .map((e) => e.trim().toLowerCase())

interface AffiliateWithStats {
  id: string
  full_name: string
  email: string
  status: string
  tier: number
  tiktok_handle: string | null
  instagram_handle: string | null
  approx_follower_count: string | null
  audience_description: string | null
  best_post_url: string | null
  content_plan: string | null
  date_of_birth: string
  is_minor: boolean
  disclosure_violations: number
  rewardful_affiliate_id: string | null
  created_at: string
  activated_at: string | null
  parental_consent_guardian_name: string | null
  parental_consent_guardian_email: string | null
  stats: {
    total_referrals: number
    total_commission_paid: number
    pending_commission: number
  }
}

export default function AdminAffiliatesPage() {
  const router = useRouter()
  const { user, profile } = useAuthStore()
  const isAdmin = !!profile?.email && ADMIN_EMAILS.includes(profile.email.toLowerCase())

  const [affiliates, setAffiliates] = useState<AffiliateWithStats[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('')
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // Payout calculator state
  const [payoutYear, setPayoutYear] = useState(new Date().getFullYear())
  const [payoutMonth, setPayoutMonth] = useState(new Date().getMonth() + 1)
  const [payoutResult, setPayoutResult] = useState<any>(null)
  const [payoutLoading, setPayoutLoading] = useState(false)

  const fetchAffiliates = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const url = filter
        ? `/api/admin/affiliates?status=${filter}`
        : '/api/admin/affiliates'
      const res = await fetch(url)
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setAffiliates(data)
    } catch {
      setError('Failed to load affiliates')
    }
    setLoading(false)
  }, [filter])

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/admin/affiliates')
      return
    }
    if (profile && !isAdmin) {
      router.push('/dashboard')
      return
    }
    if (profile && isAdmin) {
      fetchAffiliates()
    }
  }, [user, profile, router, isAdmin, fetchAffiliates])

  const handleAction = async (affiliateId: string, action: 'approve' | 'reject') => {
    setActionLoading(affiliateId)
    try {
      const res = await fetch('/api/admin/affiliates/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ affiliateId, action }),
      })
      if (res.ok) {
        await fetchAffiliates()
      } else {
        const data = await res.json()
        alert(data.error || 'Action failed')
      }
    } catch {
      alert('Network error')
    }
    setActionLoading(null)
  }

  const handleCalculatePayouts = async () => {
    setPayoutLoading(true)
    setPayoutResult(null)
    try {
      const res = await fetch('/api/admin/affiliates/payout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'calculate', year: payoutYear, month: payoutMonth }),
      })
      const data = await res.json()
      setPayoutResult(data)
    } catch {
      setPayoutResult({ error: 'Failed to calculate payouts' })
    }
    setPayoutLoading(false)
  }

  const handlePayoutAction = async (payoutId: string, status: string, extra: Record<string, unknown> = {}) => {
    try {
      const res = await fetch('/api/admin/affiliates/payout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update_status', payoutId, status, ...extra }),
      })
      if (!res.ok) {
        const data = await res.json()
        alert(data.error || 'Failed to update payout')
      } else {
        handleCalculatePayouts()
      }
    } catch {
      alert('Network error')
    }
  }

  const formatGBP = (n: number) => `£${n.toFixed(2)}`
  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  if (loading || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-brand-accent" />
      </div>
    )
  }

  const pending = affiliates.filter((a) => a.status === 'pending')
  const active = affiliates.filter((a) => a.status === 'active')

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to admin
        </Link>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7 text-brand-accent" />
            <h1 className="text-3xl font-bold text-brand-text">Affiliate Management</h1>
          </div>
          <button
            onClick={fetchAffiliates}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-brand-border text-brand-muted hover:text-brand-text transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<Users className="w-5 h-5" />} label="Total Affiliates" value={affiliates.length} />
          <StatCard icon={<Clock className="w-5 h-5" />} label="Pending" value={pending.length} />
          <StatCard icon={<CheckCircle2 className="w-5 h-5" />} label="Active" value={active.length} />
          <StatCard
            icon={<DollarSign className="w-5 h-5" />}
            label="Total Commission Paid"
            value={formatGBP(affiliates.reduce((s, a) => s + a.stats.total_commission_paid, 0))}
          />
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {['', 'pending', 'active', 'suspended', 'terminated'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filter === f
                  ? 'bg-brand-accent text-white'
                  : 'bg-brand-card border border-brand-border text-brand-muted hover:text-brand-text'
              }`}
            >
              {f || 'All'}
            </button>
          ))}
        </div>

        {/* Pending Applications */}
        {pending.length > 0 && !filter && (
          <section className="card p-6 mb-6">
            <h2 className="text-lg font-semibold text-brand-text mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              Pending Applications ({pending.length})
            </h2>
            <div className="space-y-4">
              {pending.map((a) => (
                <div key={a.id} className="bg-brand-bg rounded-lg border border-brand-border p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-brand-text">{a.full_name}</span>
                        {a.is_minor && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400">
                            Under 18
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-brand-muted">{a.email}</p>
                      <div className="flex gap-4 mt-2 text-xs text-brand-muted">
                        {a.tiktok_handle && <span>TikTok: {a.tiktok_handle}</span>}
                        {a.instagram_handle && <span>IG: {a.instagram_handle}</span>}
                        {a.approx_follower_count && <span>Followers: {a.approx_follower_count}</span>}
                      </div>
                      {a.audience_description && (
                        <p className="text-sm text-brand-muted mt-2 italic">
                          &quot;{a.audience_description}&quot;
                        </p>
                      )}
                      {a.content_plan && (
                        <p className="text-sm text-brand-muted mt-1">
                          <strong>Content plan:</strong> {a.content_plan}
                        </p>
                      )}
                      {a.best_post_url && (
                        <a
                          href={a.best_post_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-brand-accent hover:underline mt-1"
                        >
                          View best post <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {a.is_minor && a.parental_consent_guardian_name && (
                        <p className="text-xs text-yellow-400 mt-2">
                          Guardian: {a.parental_consent_guardian_name} ({a.parental_consent_guardian_email})
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={() => handleAction(a.id, 'approve')}
                        disabled={actionLoading === a.id}
                        className="btn-primary px-3 py-2 text-sm gap-1"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Approve
                      </button>
                      <button
                        onClick={() => handleAction(a.id, 'reject')}
                        disabled={actionLoading === a.id}
                        className="px-3 py-2 text-sm rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Affiliates Table */}
        <section className="card p-6 mb-6">
          <h2 className="text-lg font-semibold text-brand-text mb-4">
            {filter ? `${filter.charAt(0).toUpperCase() + filter.slice(1)} Affiliates` : 'All Affiliates'} ({affiliates.length})
          </h2>
          {affiliates.length === 0 ? (
            <p className="text-brand-muted text-sm py-8 text-center">No affiliates found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-brand-border text-left text-brand-muted">
                    <th className="pb-3 pr-4 font-medium">Name</th>
                    <th className="pb-3 pr-4 font-medium">Status</th>
                    <th className="pb-3 pr-4 font-medium">Tier</th>
                    <th className="pb-3 pr-4 font-medium">Referrals</th>
                    <th className="pb-3 pr-4 font-medium">Paid</th>
                    <th className="pb-3 pr-4 font-medium">Pending</th>
                    <th className="pb-3 font-medium">Joined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                  {affiliates.map((a) => (
                    <tr
                      key={a.id}
                      className="text-brand-text cursor-pointer hover:bg-brand-card/50"
                      onClick={() => setExpandedId(expandedId === a.id ? null : a.id)}
                    >
                      <td className="py-3 pr-4">
                        <div className="flex items-center gap-2">
                          <ChevronDown
                            className={`w-3 h-3 text-brand-muted transition-transform ${
                              expandedId === a.id ? 'rotate-180' : ''
                            }`}
                          />
                          {a.full_name}
                          {a.is_minor && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-400">
                              Minor
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 pr-4">
                        <StatusBadge status={a.status} />
                      </td>
                      <td className="py-3 pr-4">{a.tier}</td>
                      <td className="py-3 pr-4">{a.stats.total_referrals}</td>
                      <td className="py-3 pr-4">{formatGBP(a.stats.total_commission_paid)}</td>
                      <td className="py-3 pr-4">{formatGBP(a.stats.pending_commission)}</td>
                      <td className="py-3 text-brand-muted text-xs">{formatDate(a.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Payout Calculator */}
        <section className="card p-6">
          <h2 className="text-lg font-semibold text-brand-text mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-brand-accent" />
            Monthly Payout Calculator
          </h2>
          <div className="flex items-end gap-4 mb-4">
            <div>
              <label className="label">Year</label>
              <input
                type="number"
                value={payoutYear}
                onChange={(e) => setPayoutYear(Number(e.target.value))}
                className="input-field w-28"
              />
            </div>
            <div>
              <label className="label">Month</label>
              <select
                value={payoutMonth}
                onChange={(e) => setPayoutMonth(Number(e.target.value))}
                className="input-field w-40"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {new Date(2026, i).toLocaleString('en-GB', { month: 'long' })}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleCalculatePayouts}
              disabled={payoutLoading}
              className="btn-primary px-4 py-3 text-sm"
            >
              {payoutLoading ? 'Calculating...' : 'Calculate Payouts'}
            </button>
          </div>

          {payoutResult && (
            <div className="bg-brand-bg rounded-lg border border-brand-border p-4">
              {payoutResult.error ? (
                <p className="text-red-400 text-sm">{payoutResult.error}</p>
              ) : payoutResult.message ? (
                <p className="text-brand-muted text-sm">{payoutResult.message}</p>
              ) : (
                <div>
                  <p className="text-brand-muted text-sm mb-3">
                    {payoutResult.payouts.length} payout(s) created:
                  </p>
                  <div className="space-y-2">
                    {payoutResult.payouts.map((p: any) => (
                      <div
                        key={p.payout_id}
                        className="flex items-center justify-between bg-brand-card rounded-lg p-3"
                      >
                        <div>
                          <span className="text-sm text-brand-text font-medium">
                            Affiliate: {p.affiliate_id.slice(0, 8)}...
                          </span>
                          <span className="text-sm text-brand-muted ml-3">
                            {p.referral_count} referral(s) · {formatGBP(p.gross_commission_gbp)}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              handlePayoutAction(p.payout_id, 'disclosure_checked', {
                                disclosure_check_passed: true,
                              })
                            }
                            className="text-xs px-2 py-1 rounded border border-brand-border text-brand-muted hover:text-brand-text"
                          >
                            Mark Disclosure OK
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending: 'bg-yellow-500/10 text-yellow-400',
    agreement_sent: 'bg-blue-500/10 text-blue-400',
    agreement_signed: 'bg-blue-500/10 text-blue-400',
    active: 'bg-brand-accent/10 text-brand-accent',
    suspended: 'bg-orange-500/10 text-orange-400',
    terminated: 'bg-red-500/10 text-red-400',
  }
  return (
    <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${styles[status] ?? 'bg-brand-border text-brand-muted'}`}>
      {status}
    </span>
  )
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: number | string
}) {
  return (
    <div className="card p-5">
      <div className="flex items-center gap-2 text-brand-accent mb-2">
        {icon}
        <span className="text-sm text-brand-muted">{label}</span>
      </div>
      <p className="text-2xl font-bold text-brand-text">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </p>
    </div>
  )
}
