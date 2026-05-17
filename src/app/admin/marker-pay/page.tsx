'use client'

// ─── /admin/marker-pay — Paid-marker payment & throughput ───────────────────
//
// Client page (mirrors /admin/affiliates: client + fetch, redirect on
// 401/403). The data API GET /api/admin/marker-pay enforces verifyAdmin();
// this page additionally redirects on an unauthorized/forbidden response so
// non-admins never see the shell.
//
// Date-range picker → per-marker pay table (approved scripts, gold vs
// non-gold, pay rate, computed amount) + totals + a CSV export link that hits
// the same endpoint with &format=csv. Empty-safe. Mobile-responsive.
//
// i18n: useT() with graceful English fallbacks. The dictionary lookup()
// returns "[[key]]" for a missing entry; tf() treats that as a miss and shows
// the English default, so NO dictionary edits are required. Keys used (listed
// in the delivery report):
//   admin.back_to_admin (existing), admin.refresh (existing),
//   admin.marker_pay.title, .subtitle, .from, .to, .apply, .export_csv,
//   .stat.markers, .stat.scripts, .stat.gold, .stat.amount,
//   .col.marker, .col.email, .col.status, .col.rate, .col.scripts,
//   .col.gold, .col.nongold, .col.amount, .rate_missing, .none, .error_load,
//   .totals, .note.unavailable
// ────────────────────────────────────────────────────────────────────────────

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
  FileCheck2,
  Star,
  Banknote,
} from 'lucide-react'

interface MarkerPayLine {
  markerId: string
  displayName: string
  email: string | null
  status: string | null
  payRatePence: number | null
  rateMissing: boolean
  approvedScripts: number
  goldScripts: number
  nonGoldScripts: number
  amountPence: number
}

interface MarkerPayPayload {
  generatedAt: string
  storeAvailable: boolean
  note: string | null
  period: { from: string | null; to: string | null }
  totals: {
    markers: number
    approvedScripts: number
    goldScripts: number
    nonGoldScripts: number
    amountPence: number
  }
  markers: MarkerPayLine[]
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10)
}
function isoDaysAgo(days: number): string {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() - days)
  return d.toISOString().slice(0, 10)
}

export default function AdminMarkerPayPage() {
  const router = useRouter()
  const { user } = useAuthStore()
  const t = useT()

  // English-fallback translator: lookup() yields "[[key]]" on a miss.
  const tf = useCallback(
    (key: string, fallback: string) => {
      const v = t(key)
      return v.startsWith('[[') && v.endsWith(']]') ? fallback : v
    },
    [t],
  )

  const [data, setData] = useState<MarkerPayPayload | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [authorized, setAuthorized] = useState(false)
  const [from, setFrom] = useState<string>(isoDaysAgo(30))
  const [to, setTo] = useState<string>(todayIso())

  const fetchPay = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const qs = new URLSearchParams()
      if (from) qs.set('from', from)
      if (to) qs.set('to', to)
      const res = await fetch(`/api/admin/marker-pay?${qs.toString()}`)

      if (res.status === 401) {
        router.push('/auth/login?redirect=/admin/marker-pay')
        return
      }
      if (res.status === 403) {
        router.push('/dashboard')
        return
      }
      if (!res.ok) throw new Error('Failed to fetch')

      const json = (await res.json()) as MarkerPayPayload
      setAuthorized(true)
      setData(json)
    } catch {
      setError(tf('admin.marker_pay.error_load', 'Failed to load marker pay data.'))
    }
    setLoading(false)
  }, [from, to, router, tf])

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/admin/marker-pay')
      return
    }
    if (user) {
      fetchPay()
    }
    // Only on mount / auth change — explicit Apply re-fetches thereafter.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const csvHref = (() => {
    const qs = new URLSearchParams()
    if (from) qs.set('from', from)
    if (to) qs.set('to', to)
    qs.set('format', 'csv')
    return `/api/admin/marker-pay?${qs.toString()}`
  })()

  const fmtGBP = (pence: number) => `£${(pence / 100).toFixed(2)}`

  if (loading || !authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const totals = data?.totals
  const markers = data?.markers ?? []

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {tf('admin.back_to_admin', 'Back to admin')}
        </Link>

        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">
              {tf('admin.marker_pay.title', 'Marker Pay & Throughput')}
            </h1>
          </div>
          <button
            onClick={fetchPay}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {tf('admin.refresh', 'Refresh')}
          </button>
        </div>

        <p className="text-muted-foreground mb-8">
          {tf(
            'admin.marker_pay.subtitle',
            'Approved-script counts and pay due per paid marker for the selected period. An approved script is a distinct submission with an approving (approved/corrected) teacher moderation, attributed by reviewer or assignment.',
          )}
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm">
            {error}
          </div>
        )}

        {data?.note && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-6 text-clay-600 text-sm">
            {tf('admin.marker_pay.note.unavailable', 'Some data is currently unavailable:')}{' '}
            {data.note}
          </div>
        )}

        {/* Date range */}
        <section className="card p-6 mb-8">
          <div className="flex flex-wrap items-end gap-4">
            <div>
              <label className="label" htmlFor="mp-from">
                {tf('admin.marker_pay.from', 'From')}
              </label>
              <input
                id="mp-from"
                type="date"
                value={from}
                max={to || undefined}
                onChange={(e) => setFrom(e.target.value)}
                className="input-field w-44"
              />
            </div>
            <div>
              <label className="label" htmlFor="mp-to">
                {tf('admin.marker_pay.to', 'To')}
              </label>
              <input
                id="mp-to"
                type="date"
                value={to}
                min={from || undefined}
                max={todayIso()}
                onChange={(e) => setTo(e.target.value)}
                className="input-field w-44"
              />
            </div>
            <button onClick={fetchPay} disabled={loading} className="btn-primary px-4 py-3 text-sm">
              {tf('admin.marker_pay.apply', 'Apply')}
            </button>
            <a
              href={csvHref}
              className="inline-flex items-center justify-center px-4 py-3 text-sm rounded-lg border border-border text-foreground font-medium hover:border-primary/50 transition-colors"
            >
              {tf('admin.marker_pay.export_csv', 'Export CSV')}
            </a>
          </div>
        </section>

        {/* Totals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<Users className="w-5 h-5" />}
            label={tf('admin.marker_pay.stat.markers', 'Markers')}
            value={totals?.markers ?? 0}
          />
          <StatCard
            icon={<FileCheck2 className="w-5 h-5" />}
            label={tf('admin.marker_pay.stat.scripts', 'Approved scripts')}
            value={totals?.approvedScripts ?? 0}
          />
          <StatCard
            icon={<Star className="w-5 h-5" />}
            label={tf('admin.marker_pay.stat.gold', 'Gold scripts')}
            value={totals?.goldScripts ?? 0}
          />
          <StatCard
            icon={<Banknote className="w-5 h-5" />}
            label={tf('admin.marker_pay.stat.amount', 'Total due')}
            value={fmtGBP(totals?.amountPence ?? 0)}
          />
        </div>

        {/* Per-marker table */}
        <section className="card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {tf('admin.marker_pay.title', 'Marker Pay & Throughput')} ({markers.length})
          </h2>
          {markers.length === 0 ? (
            <p className="text-muted-foreground text-sm py-8 text-center">
              {tf('admin.marker_pay.none', 'No markers found for this period.')}
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-3 pr-4 font-medium">
                      {tf('admin.marker_pay.col.marker', 'Marker')}
                    </th>
                    <th className="pb-3 pr-4 font-medium">
                      {tf('admin.marker_pay.col.email', 'Email')}
                    </th>
                    <th className="pb-3 pr-4 font-medium">
                      {tf('admin.marker_pay.col.status', 'Status')}
                    </th>
                    <th className="pb-3 pr-4 font-medium text-right">
                      {tf('admin.marker_pay.col.rate', 'Rate (p/script)')}
                    </th>
                    <th className="pb-3 pr-4 font-medium text-right">
                      {tf('admin.marker_pay.col.scripts', 'Approved')}
                    </th>
                    <th className="pb-3 pr-4 font-medium text-right">
                      {tf('admin.marker_pay.col.gold', 'Gold')}
                    </th>
                    <th className="pb-3 pr-4 font-medium text-right">
                      {tf('admin.marker_pay.col.nongold', 'Non-gold')}
                    </th>
                    <th className="pb-3 font-medium text-right">
                      {tf('admin.marker_pay.col.amount', 'Amount')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {markers.map((m) => (
                    <tr key={m.markerId} className="text-foreground">
                      <td className="py-3 pr-4 font-medium">{m.displayName}</td>
                      <td className="py-3 pr-4 text-muted-foreground">
                        {m.email || <span className="text-muted-foreground">--</span>}
                      </td>
                      <td className="py-3 pr-4">
                        <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-border text-muted-foreground">
                          {m.status || 'unknown'}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-right">
                        {m.rateMissing ? (
                          <span
                            className="text-clay-600"
                            title={tf(
                              'admin.marker_pay.rate_missing',
                              'No pay rate set for this marker — amount is £0 until configured.',
                            )}
                          >
                            {tf('admin.marker_pay.rate_missing', 'not set')}
                          </span>
                        ) : (
                          m.payRatePence
                        )}
                      </td>
                      <td className="py-3 pr-4 text-right">{m.approvedScripts}</td>
                      <td className="py-3 pr-4 text-right">{m.goldScripts}</td>
                      <td className="py-3 pr-4 text-right">{m.nonGoldScripts}</td>
                      <td className="py-3 text-right font-medium">{fmtGBP(m.amountPence)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-border text-foreground font-semibold">
                    <td className="py-3 pr-4" colSpan={4}>
                      {tf('admin.marker_pay.totals', 'Totals')}
                    </td>
                    <td className="py-3 pr-4 text-right">{totals?.approvedScripts ?? 0}</td>
                    <td className="py-3 pr-4 text-right">{totals?.goldScripts ?? 0}</td>
                    <td className="py-3 pr-4 text-right">{totals?.nonGoldScripts ?? 0}</td>
                    <td className="py-3 text-right">{fmtGBP(totals?.amountPence ?? 0)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </section>
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
