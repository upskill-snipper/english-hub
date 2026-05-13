'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { useT } from '@/lib/i18n/use-t'
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
  const t = useT()

  const [affiliates, setAffiliates] = useState<AffiliateWithStats[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [authorized, setAuthorized] = useState(false)
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
      const url = filter ? `/api/admin/affiliates?status=${filter}` : '/api/admin/affiliates'
      const res = await fetch(url)

      if (res.status === 401) {
        router.push('/auth/login?redirect=/admin/affiliates')
        return
      }
      if (res.status === 403) {
        router.push('/dashboard')
        return
      }

      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setAuthorized(true)
      setAffiliates(data)
    } catch {
      setError(t('admin.aff.error_load'))
    }
    setLoading(false)
  }, [filter, router, t])

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/admin/affiliates')
      return
    }
    if (user) {
      fetchAffiliates()
    }
  }, [user, profile, router, fetchAffiliates])

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
        alert(data.error || t('admin.action_failed'))
      }
    } catch {
      alert(t('admin.network_error_short'))
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
      setPayoutResult({ error: t('admin.aff.payout.fail_calc') })
    }
    setPayoutLoading(false)
  }

  const handlePayoutAction = async (
    payoutId: string,
    status: string,
    extra: Record<string, unknown> = {},
  ) => {
    try {
      const res = await fetch('/api/admin/affiliates/payout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update_status', payoutId, status, ...extra }),
      })
      if (!res.ok) {
        const data = await res.json()
        alert(data.error || t('admin.aff.payout.fail_update'))
      } else {
        handleCalculatePayouts()
      }
    } catch {
      alert(t('admin.network_error_short'))
    }
  }

  const formatGBP = (n: number) => `£${n.toFixed(2)}`
  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  if (loading || !authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
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
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('admin.back_to_admin')}
        </Link>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">{t('admin.aff.title')}</h1>
          </div>
          <button
            onClick={fetchAffiliates}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {t('admin.refresh')}
          </button>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<Users className="w-5 h-5" />}
            label={t('admin.aff.stat.total')}
            value={affiliates.length}
          />
          <StatCard
            icon={<Clock className="w-5 h-5" />}
            label={t('admin.aff.stat.pending')}
            value={pending.length}
          />
          <StatCard
            icon={<CheckCircle2 className="w-5 h-5" />}
            label={t('admin.aff.stat.active')}
            value={active.length}
          />
          <StatCard
            icon={<DollarSign className="w-5 h-5" />}
            label={t('admin.aff.stat.commission_paid')}
            value={formatGBP(affiliates.reduce((s, a) => s + a.stats.total_commission_paid, 0))}
          />
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {(['', 'pending', 'active', 'suspended', 'terminated'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filter === f
                  ? 'bg-primary text-white'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {f === '' ? t('admin.aff.filter.all') : t(`admin.aff.filter.${f}`)}
            </button>
          ))}
        </div>

        {/* Pending Applications */}
        {pending.length > 0 && !filter && (
          <section className="card p-6 mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-clay-600" />
              {t('admin.aff.pending_applications')} ({pending.length})
            </h2>
            <div className="space-y-4">
              {pending.map((a) => (
                <div key={a.id} className="bg-background rounded-lg border border-border p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{a.full_name}</span>
                        {a.is_minor && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 text-clay-600">
                            {t('admin.aff.under_18')}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{a.email}</p>
                      <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                        {a.tiktok_handle && (
                          <span>
                            {t('admin.aff.tiktok_label')} {a.tiktok_handle}
                          </span>
                        )}
                        {a.instagram_handle && (
                          <span>
                            {t('admin.aff.ig_label')} {a.instagram_handle}
                          </span>
                        )}
                        {a.approx_follower_count && (
                          <span>
                            {t('admin.aff.followers_label')} {a.approx_follower_count}
                          </span>
                        )}
                      </div>
                      {a.audience_description && (
                        <p className="text-sm text-muted-foreground mt-2 italic">
                          &quot;{a.audience_description}&quot;
                        </p>
                      )}
                      {a.content_plan && (
                        <p className="text-sm text-muted-foreground mt-1">
                          <strong>{t('admin.aff.content_plan_label')}</strong> {a.content_plan}
                        </p>
                      )}
                      {a.best_post_url && (
                        <a
                          href={a.best_post_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1"
                        >
                          {t('admin.aff.view_best_post')} <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {a.is_minor && a.parental_consent_guardian_name && (
                        <p className="text-xs text-clay-600 mt-2">
                          {t('admin.aff.guardian_label')} {a.parental_consent_guardian_name} (
                          {a.parental_consent_guardian_email})
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
                        {t('admin.aff.approve')}
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
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {filter
              ? `${t(`admin.aff.filter.${filter}`).charAt(0).toUpperCase() + t(`admin.aff.filter.${filter}`).slice(1)} ${t('admin.aff.suffix_affiliates')}`
              : t('admin.aff.all_affiliates')}{' '}
            ({affiliates.length})
          </h2>
          {affiliates.length === 0 ? (
            <p className="text-muted-foreground text-sm py-8 text-center">
              {t('admin.aff.none_found')}
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-3 pr-4 font-medium">{t('admin.aff.col.name')}</th>
                    <th className="pb-3 pr-4 font-medium">{t('admin.aff.col.status')}</th>
                    <th className="pb-3 pr-4 font-medium">{t('admin.aff.col.tier')}</th>
                    <th className="pb-3 pr-4 font-medium">{t('admin.aff.col.referrals')}</th>
                    <th className="pb-3 pr-4 font-medium">{t('admin.aff.col.paid')}</th>
                    <th className="pb-3 pr-4 font-medium">{t('admin.aff.col.pending')}</th>
                    <th className="pb-3 font-medium">{t('admin.aff.col.joined')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {affiliates.map((a) => (
                    <tr
                      key={a.id}
                      className="text-foreground cursor-pointer hover:bg-card/50"
                      onClick={() => setExpandedId(expandedId === a.id ? null : a.id)}
                    >
                      <td className="py-3 pr-4">
                        <div className="flex items-center gap-2">
                          <ChevronDown
                            className={`w-3 h-3 text-muted-foreground transition-transform ${
                              expandedId === a.id ? 'rotate-180' : ''
                            }`}
                          />
                          {a.full_name}
                          {a.is_minor && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-yellow-500/10 text-clay-600">
                              {t('admin.aff.minor_badge')}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 pr-4">
                        <StatusBadge status={a.status} t={t} />
                      </td>
                      <td className="py-3 pr-4">{a.tier}</td>
                      <td className="py-3 pr-4">{a.stats.total_referrals}</td>
                      <td className="py-3 pr-4">{formatGBP(a.stats.total_commission_paid)}</td>
                      <td className="py-3 pr-4">{formatGBP(a.stats.pending_commission)}</td>
                      <td className="py-3 text-muted-foreground text-xs">
                        {formatDate(a.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Payout Calculator */}
        <section className="card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            {t('admin.aff.payout.title')}
          </h2>
          <div className="flex items-end gap-4 mb-4">
            <div>
              <label className="label">{t('admin.aff.payout.year')}</label>
              <input
                type="number"
                value={payoutYear}
                onChange={(e) => setPayoutYear(Number(e.target.value))}
                className="input-field w-28"
              />
            </div>
            <div>
              <label className="label">{t('admin.aff.payout.month')}</label>
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
              {payoutLoading ? t('admin.aff.payout.calculating') : t('admin.aff.payout.calc')}
            </button>
          </div>

          {payoutResult && (
            <div className="bg-background rounded-lg border border-border p-4">
              {payoutResult.error ? (
                <p className="text-red-400 text-sm">{payoutResult.error}</p>
              ) : payoutResult.message ? (
                <p className="text-muted-foreground text-sm">{payoutResult.message}</p>
              ) : (
                <div>
                  <p className="text-muted-foreground text-sm mb-3">
                    {payoutResult.payouts.length} {t('admin.aff.payout.created_prefix')}
                  </p>
                  <div className="space-y-2">
                    {payoutResult.payouts.map((p: any) => (
                      <div
                        key={p.payout_id}
                        className="flex items-center justify-between bg-card rounded-lg p-3"
                      >
                        <div>
                          <span className="text-sm text-foreground font-medium">
                            {t('admin.aff.payout.affiliate_prefix')} {p.affiliate_id.slice(0, 8)}...
                          </span>
                          <span className="text-sm text-muted-foreground ml-3">
                            {p.referral_count} {t('admin.aff.payout.referral_suffix')} ·{' '}
                            {formatGBP(p.gross_commission_gbp)}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              handlePayoutAction(p.payout_id, 'disclosure_checked', {
                                disclosure_check_passed: true,
                              })
                            }
                            className="text-xs px-2 py-1 rounded border border-border text-muted-foreground hover:text-foreground"
                          >
                            {t('admin.aff.payout.mark_disclosure')}
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

function StatusBadge({ status, t }: { status: string; t: (key: string) => string }) {
  const styles: Record<string, string> = {
    pending: 'bg-yellow-500/10 text-clay-600',
    agreement_sent: 'bg-blue-500/10 text-blue-400',
    agreement_signed: 'bg-blue-500/10 text-blue-400',
    active: 'bg-primary/10 text-primary',
    suspended: 'bg-orange-500/10 text-clay-600',
    terminated: 'bg-red-500/10 text-red-400',
  }
  const knownStatuses = [
    'pending',
    'agreement_sent',
    'agreement_signed',
    'active',
    'suspended',
    'terminated',
  ]
  const label = knownStatuses.includes(status) ? t(`admin.aff.status.${status}`) : status
  return (
    <span
      className={`inline-block text-xs px-2 py-0.5 rounded-full ${styles[status] ?? 'bg-border text-muted-foreground'}`}
    >
      {label}
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
      <div className="flex items-center gap-2 text-primary mb-2">
        {icon}
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <p className="text-2xl font-bold text-foreground">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </p>
    </div>
  )
}
