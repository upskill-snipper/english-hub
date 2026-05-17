'use client'

// ─── Platform-admin — Paid-marker QA scorecard ───────────────────────────────
// Site-admin only (auth/redirect mirrors src/app/admin/affiliates/page.tsx —
// the API routes enforce verifyAdmin; this page redirects on 401/403).
//
// Surfaces, from /api/admin/marker-qa + /api/admin/marker-gold:
//   • per-marker gold accuracy (exact / ±1 / MAE / grade QWK) + drift badge
//   • inter-marker agreement (overall + per pair)
//   • the gold-item manager (mark an existing submission as gold)
//   • board / paper slice filter
//
// i18n: useT() with inline English fallbacks via tt() — the dictionary returns
// a [[key]] sentinel for unknown keys, so tt() falls back to readable English.
// Keys are listed in the task report for later addition to the dictionaries
// (NOT edited here). gold_expected is admin-only and only shown on this gated
// page via the admin API.
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
  Target,
  GitCompareArrows,
  CheckCircle2,
  Plus,
} from 'lucide-react'

// ─── API payload types (mirror the route responses) ──────────────────────────

interface PerMarker {
  markerId: string
  markerName: string
  gradedCount: number
  totalGold: number
  exactRate: number
  within1Rate: number
  meanAbsError: number
  gradeQwk: number
  gradeExact: number
  insufficientData: boolean
}
interface PairAgreement {
  markerAId: string
  markerAName: string
  markerBId: string
  markerBName: string
  sharedScripts: number
  exactRate: number
  within1Rate: number
  meanAbsError: number
  gradeQwk: number
}
interface DriftFlag {
  markerId: string
  markerName: string
  flagged: boolean
  reasons: string[]
  insufficientData: boolean
  recentExactRate: number
  baselineExactRate: number
  exactDrop: number
}
interface ThroughputRow {
  markerId: string
  markerName: string
  approved: number
  totalAssigned: number
}
interface SliceRow {
  slice: string
  n: number
  exactRate: number
  within1Rate: number
  meanAbsError: number
}
interface QaPayload {
  generatedAt: string
  storeAvailable: boolean
  note: string | null
  thresholds: {
    goldExactMin: number
    goldWithin1Min: number
    goldQwkMin: number
    driftWindow: number
    driftMinBaseline: number
    driftDrop: number
  }
  totals: {
    markers: number
    goldItems: number
    approvedGold: number
    approvedTotal: number
    sharedScripts: number
  }
  perMarker: PerMarker[]
  interMarker: {
    sharedScriptCount: number
    pairObservations: number
    overallExactRate: number
    overallWithin1Rate: number
    overallMeanAbsError: number
    overallGradeQwk: number
    pairs: PairAgreement[]
  }
  driftFlags: DriftFlag[]
  throughput: ThroughputRow[]
  byBoard: SliceRow[]
  byPaper: SliceRow[]
}

const pct = (n: number) => `${Math.round(n * 100)}%`

export default function AdminMarkerQaPage() {
  const router = useRouter()
  const { user } = useAuthStore()
  const rawT = useT()

  // Dictionary returns "[[key]]" for unknown keys → fall back to English.
  const tt = useCallback(
    (key: string, fallback: string) => {
      const v = rawT(key)
      return !v || v === `[[${key}]]` ? fallback : v
    },
    [rawT],
  )

  const [data, setData] = useState<QaPayload | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [authorized, setAuthorized] = useState(false)
  const [boardFilter, setBoardFilter] = useState<string>('')

  // Gold-item manager form state.
  const [goldSubmissionId, setGoldSubmissionId] = useState('')
  const [goldMark, setGoldMark] = useState('')
  const [goldGrade, setGoldGrade] = useState('6')
  const [goldBusy, setGoldBusy] = useState(false)
  const [goldMsg, setGoldMsg] = useState<{ ok: boolean; text: string } | null>(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/marker-qa')
      if (res.status === 401) {
        router.push('/auth/login?redirect=/admin/marker-qa')
        return
      }
      if (res.status === 403) {
        router.push('/dashboard')
        return
      }
      if (!res.ok) throw new Error('Failed to fetch')
      const json = (await res.json()) as QaPayload
      setAuthorized(true)
      setData(json)
    } catch {
      setError(tt('admin.mqa.error_load', 'Could not load the marker QA scorecard.'))
    }
    setLoading(false)
  }, [router, tt])

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/admin/marker-qa')
      return
    }
    if (user) fetchData()
  }, [user, router, fetchData])

  const submitGold = async (e: React.FormEvent) => {
    e.preventDefault()
    setGoldBusy(true)
    setGoldMsg(null)
    try {
      const res = await fetch('/api/admin/marker-gold', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submissionId: goldSubmissionId.trim(),
          goldExpected: { mark: Number(goldMark), grade: goldGrade },
        }),
      })
      const json = await res.json()
      if (res.ok && json.updated > 0) {
        setGoldMsg({
          ok: true,
          text: tt('admin.mqa.gold_ok', 'Marked as gold.'),
        })
        setGoldSubmissionId('')
        setGoldMark('')
        fetchData()
      } else {
        setGoldMsg({
          ok: false,
          text:
            json.error ||
            json.results?.[0]?.error ||
            tt('admin.mqa.gold_fail', 'Could not mark this submission as gold.'),
        })
      }
    } catch {
      setGoldMsg({
        ok: false,
        text: tt('admin.network_error_short', 'Network error. Please try again.'),
      })
    }
    setGoldBusy(false)
  }

  if (loading || !authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const t = data?.thresholds
  const boards = data ? data.byBoard.map((b) => b.slice) : []
  const visibleBoards = boardFilter
    ? (data?.byBoard ?? []).filter((b) => b.slice === boardFilter)
    : (data?.byBoard ?? [])

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {tt('admin.back_to_admin', 'Back to admin')}
        </Link>

        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7 text-primary" />
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              {tt('admin.mqa.title', 'Marker QA — gold calibration & inter-marker agreement')}
            </h1>
          </div>
          <button
            onClick={fetchData}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {tt('admin.refresh', 'Refresh')}
          </button>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm">
            {error}
          </div>
        )}

        {data?.note && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-6 text-clay-600 text-sm">
            {data.note}
          </div>
        )}

        {/* Totals */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <StatCard
            icon={<Users className="w-5 h-5" />}
            label={tt('admin.mqa.stat.markers', 'Markers')}
            value={data?.totals.markers ?? 0}
          />
          <StatCard
            icon={<Target className="w-5 h-5" />}
            label={tt('admin.mqa.stat.gold', 'Gold items')}
            value={data?.totals.goldItems ?? 0}
          />
          <StatCard
            icon={<CheckCircle2 className="w-5 h-5" />}
            label={tt('admin.mqa.stat.approved_gold', 'Approved gold')}
            value={data?.totals.approvedGold ?? 0}
          />
          <StatCard
            icon={<CheckCircle2 className="w-5 h-5" />}
            label={tt('admin.mqa.stat.approved_total', 'Approved total')}
            value={data?.totals.approvedTotal ?? 0}
          />
          <StatCard
            icon={<GitCompareArrows className="w-5 h-5" />}
            label={tt('admin.mqa.stat.shared', 'Shared scripts')}
            value={data?.totals.sharedScripts ?? 0}
          />
        </div>

        {/* Thresholds note */}
        {t && (
          <p className="text-xs text-muted-foreground mb-8">
            {tt('admin.mqa.thresholds_label', 'QA thresholds')}:{' '}
            {tt('admin.mqa.th_exact', 'gold exact ≥')}
            {pct(t.goldExactMin)} · {tt('admin.mqa.th_within1', '±1 ≥')}
            {pct(t.goldWithin1Min)} · {tt('admin.mqa.th_qwk', 'grade QWK ≥')}
            {t.goldQwkMin} · {tt('admin.mqa.th_drift', 'drift if last')} {t.driftWindow}{' '}
            {tt('admin.mqa.th_drift_tail', 'gold drop ≥')}
            {pct(t.driftDrop)} {tt('admin.mqa.th_vs_baseline', 'vs baseline')}
          </p>
        )}

        {/* Per-marker gold accuracy + drift badge */}
        <section className="card p-4 sm:p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            {tt('admin.mqa.per_marker', 'Per-marker gold accuracy')}
          </h2>
          {!data || data.perMarker.length === 0 ? (
            <EmptyNote text={tt('admin.mqa.no_gold', 'No approved gold items yet.')} />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-3 pr-4 font-medium">
                      {tt('admin.mqa.col.marker', 'Marker')}
                    </th>
                    <th className="pb-3 pr-4 font-medium">
                      {tt('admin.mqa.col.scored', 'Scored')}
                    </th>
                    <th className="pb-3 pr-4 font-medium">{tt('admin.mqa.col.exact', 'Exact')}</th>
                    <th className="pb-3 pr-4 font-medium">{tt('admin.mqa.col.within1', '±1')}</th>
                    <th className="pb-3 pr-4 font-medium">{tt('admin.mqa.col.mae', 'MAE')}</th>
                    <th className="pb-3 pr-4 font-medium">
                      {tt('admin.mqa.col.qwk', 'Grade QWK')}
                    </th>
                    <th className="pb-3 font-medium">{tt('admin.mqa.col.status', 'Status')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {data.perMarker.map((m) => {
                    const drift = data.driftFlags.find((d) => d.markerId === m.markerId)
                    return (
                      <tr key={m.markerId} className="text-foreground">
                        <td className="py-3 pr-4">{m.markerName}</td>
                        <td className="py-3 pr-4">{m.gradedCount}</td>
                        <td
                          className={`py-3 pr-4 ${
                            !m.insufficientData && t && m.exactRate < t.goldExactMin
                              ? 'text-red-400'
                              : ''
                          }`}
                        >
                          {pct(m.exactRate)}
                        </td>
                        <td
                          className={`py-3 pr-4 ${
                            !m.insufficientData && t && m.within1Rate < t.goldWithin1Min
                              ? 'text-red-400'
                              : ''
                          }`}
                        >
                          {pct(m.within1Rate)}
                        </td>
                        <td className="py-3 pr-4">{m.meanAbsError}</td>
                        <td className="py-3 pr-4">{m.gradeQwk}</td>
                        <td className="py-3">
                          {m.insufficientData ? (
                            <Badge tone="muted">
                              {tt('admin.mqa.badge.insufficient', 'Insufficient data')}
                            </Badge>
                          ) : drift?.flagged ? (
                            <Badge tone="red">
                              {tt('admin.mqa.badge.drift', 'Drift')}
                              {drift.reasons.length ? ` · ${drift.reasons.join(', ')}` : ''}
                            </Badge>
                          ) : (
                            <Badge tone="green">{tt('admin.mqa.badge.ok', 'OK')}</Badge>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Inter-marker agreement */}
        <section className="card p-4 sm:p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <GitCompareArrows className="w-5 h-5 text-primary" />
            {tt('admin.mqa.inter', 'Inter-marker agreement')}
          </h2>
          {!data || data.interMarker.pairs.length === 0 ? (
            <EmptyNote
              text={tt(
                'admin.mqa.no_shared',
                'No scripts have been marked by two or more markers yet.',
              )}
            />
          ) : (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <MiniStat
                  label={tt('admin.mqa.im.exact', 'Pairwise exact')}
                  value={pct(data.interMarker.overallExactRate)}
                />
                <MiniStat
                  label={tt('admin.mqa.im.within1', 'Pairwise ±1')}
                  value={pct(data.interMarker.overallWithin1Rate)}
                />
                <MiniStat
                  label={tt('admin.mqa.im.mae', 'Pairwise MAE')}
                  value={String(data.interMarker.overallMeanAbsError)}
                />
                <MiniStat
                  label={tt('admin.mqa.im.qwk', 'Pooled grade QWK')}
                  value={String(data.interMarker.overallGradeQwk)}
                />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-muted-foreground">
                      <th className="pb-3 pr-4 font-medium">
                        {tt('admin.mqa.col.pair', 'Marker pair')}
                      </th>
                      <th className="pb-3 pr-4 font-medium">
                        {tt('admin.mqa.col.shared', 'Shared')}
                      </th>
                      <th className="pb-3 pr-4 font-medium">
                        {tt('admin.mqa.col.exact', 'Exact')}
                      </th>
                      <th className="pb-3 pr-4 font-medium">{tt('admin.mqa.col.within1', '±1')}</th>
                      <th className="pb-3 font-medium">{tt('admin.mqa.col.qwk', 'Grade QWK')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {data.interMarker.pairs.map((p) => (
                      <tr key={`${p.markerAId}-${p.markerBId}`} className="text-foreground">
                        <td className="py-3 pr-4">
                          {p.markerAName} ↔ {p.markerBName}
                        </td>
                        <td className="py-3 pr-4">{p.sharedScripts}</td>
                        <td className="py-3 pr-4">{pct(p.exactRate)}</td>
                        <td className="py-3 pr-4">{pct(p.within1Rate)}</td>
                        <td className="py-3">{p.gradeQwk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </section>

        {/* Throughput */}
        <section className="card p-4 sm:p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {tt('admin.mqa.throughput', 'Throughput (approved per marker)')}
          </h2>
          {!data || data.throughput.length === 0 ? (
            <EmptyNote text={tt('admin.mqa.no_throughput', 'No approved work yet.')} />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-3 pr-4 font-medium">
                      {tt('admin.mqa.col.marker', 'Marker')}
                    </th>
                    <th className="pb-3 pr-4 font-medium">
                      {tt('admin.mqa.col.approved', 'Approved')}
                    </th>
                    <th className="pb-3 font-medium">{tt('admin.mqa.col.assigned', 'Assigned')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {data.throughput.map((tr) => (
                    <tr key={tr.markerId} className="text-foreground">
                      <td className="py-3 pr-4">{tr.markerName}</td>
                      <td className="py-3 pr-4">{tr.approved}</td>
                      <td className="py-3">{tr.totalAssigned}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Board / paper slices */}
        <section className="card p-4 sm:p-6 mb-6">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <h2 className="text-lg font-semibold text-foreground">
              {tt('admin.mqa.slices', 'Gold accuracy by board / paper')}
            </h2>
            {boards.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setBoardFilter('')}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    boardFilter === ''
                      ? 'bg-primary text-white'
                      : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tt('admin.mqa.filter.all', 'All boards')}
                </button>
                {boards.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBoardFilter(b)}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      boardFilter === b
                        ? 'bg-primary text-white'
                        : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SliceTable title={tt('admin.mqa.by_board', 'By board')} rows={visibleBoards} tt={tt} />
            <SliceTable
              title={tt('admin.mqa.by_paper', 'By paper')}
              rows={data?.byPaper ?? []}
              tt={tt}
            />
          </div>
        </section>

        {/* Gold-item manager */}
        <section className="card p-4 sm:p-6">
          <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Plus className="w-5 h-5 text-primary" />
            {tt('admin.mqa.gold_mgr', 'Mark a submission as gold')}
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            {tt(
              'admin.mqa.gold_help',
              'Sets the expert-true mark/grade on an existing queue item and inserts it blind into the assigned marker’s queue. The expected answer is never shown to markers.',
            )}
          </p>
          <form
            onSubmit={submitGold}
            className="flex flex-col sm:flex-row sm:items-end gap-4 flex-wrap"
          >
            <div className="flex-1 min-w-[220px]">
              <label className="label">{tt('admin.mqa.f.submission', 'Submission ID')}</label>
              <input
                type="text"
                required
                value={goldSubmissionId}
                onChange={(e) => setGoldSubmissionId(e.target.value)}
                className="input-field w-full"
                placeholder="uuid"
              />
            </div>
            <div>
              <label className="label">{tt('admin.mqa.f.mark', 'Expert mark')}</label>
              <input
                type="number"
                required
                min={0}
                value={goldMark}
                onChange={(e) => setGoldMark(e.target.value)}
                className="input-field w-28"
              />
            </div>
            <div>
              <label className="label">{tt('admin.mqa.f.grade', 'Expert grade')}</label>
              <select
                value={goldGrade}
                onChange={(e) => setGoldGrade(e.target.value)}
                className="input-field w-24"
              >
                {['U', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" disabled={goldBusy} className="btn-primary px-4 py-3 text-sm">
              {goldBusy
                ? tt('admin.mqa.f.saving', 'Saving…')
                : tt('admin.mqa.f.submit', 'Mark as gold')}
            </button>
          </form>
          {goldMsg && (
            <p className={`mt-3 text-sm ${goldMsg.ok ? 'text-primary' : 'text-red-400'}`}>
              {goldMsg.text}
            </p>
          )}
        </section>
      </div>
    </div>
  )
}

// ─── Small presentational helpers ────────────────────────────────────────────

function EmptyNote({ text }: { text: string }) {
  return <p className="text-muted-foreground text-sm py-8 text-center">{text}</p>
}

function Badge({ tone, children }: { tone: 'red' | 'green' | 'muted'; children: React.ReactNode }) {
  const styles =
    tone === 'red'
      ? 'bg-red-500/10 text-red-400'
      : tone === 'green'
        ? 'bg-primary/10 text-primary'
        : 'bg-border text-muted-foreground'
  return (
    <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${styles}`}>{children}</span>
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
    <div className="card p-4 sm:p-5">
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

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background rounded-lg border border-border p-3">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-lg font-semibold text-foreground">{value}</p>
    </div>
  )
}

function SliceTable({
  title,
  rows,
  tt,
}: {
  title: string
  rows: SliceRow[]
  tt: (k: string, f: string) => string
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-muted-foreground mb-2">{title}</h3>
      {rows.length === 0 ? (
        <EmptyNote text={tt('admin.mqa.no_slice', 'No data.')} />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-2 pr-4 font-medium">{tt('admin.mqa.col.slice', 'Slice')}</th>
                <th className="pb-2 pr-4 font-medium">{tt('admin.mqa.col.n', 'n')}</th>
                <th className="pb-2 pr-4 font-medium">{tt('admin.mqa.col.exact', 'Exact')}</th>
                <th className="pb-2 font-medium">{tt('admin.mqa.col.within1', '±1')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((s) => (
                <tr key={s.slice} className="text-foreground">
                  <td className="py-2 pr-4">{s.slice}</td>
                  <td className="py-2 pr-4">{s.n}</td>
                  <td className="py-2 pr-4">{pct(s.exactRate)}</td>
                  <td className="py-2">{pct(s.within1Rate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
