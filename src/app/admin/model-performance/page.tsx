'use client'

// ─── Platform-admin - Model Performance + Eval Scorecard ────────────────────
// Site-admin only (server routes enforce; redirect on 401/403 mirrors
// src/app/admin/affiliates/page.tsx). Renders /api/admin/model-performance
// and, anchored at #evals, /api/admin/evals (always non-certified).
// Empty-table safe throughout.

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
  Gauge,
  Target,
  Sigma,
  ClipboardList,
  AlertTriangle,
} from 'lucide-react'

interface SliceAccuracy {
  slice: string
  n: number
  meanAbsError: number
  within1Pct: number
  within2Pct: number
}

interface PerfPayload {
  storeAvailable: boolean
  note: string | null
  totals: { submissions: number; reviewed: number; scoredPairs: number }
  scoreAccuracy: {
    meanAbsError: number
    within1Pct: number
    within2Pct: number
    exactPct: number
  }
  byExamBoard: SliceAccuracy[]
  byQuestionType: SliceAccuracy[]
  byGradeBand: SliceAccuracy[]
  teacherOverrideRate: number
  feedbackEditRate: number
  decisionBreakdown: Record<string, number>
  topAdjustmentReasons: { reason: string; count: number }[]
  confidenceReliability: {
    bucket: string
    n: number
    meanAbsError: number
    within1Pct: number
  }[]
}

interface EvalPayload {
  storeAvailable: boolean
  certifiable: boolean
  certifiableReason: string
  realDataProtocol: string
  banner: string
  thresholds: {
    source: string
    version: number
    rationale: string
    minExactAgreement: number
    minAdjacentAgreement: number
    minQwk: number
    maxDisparityDelta: number
    maxGradeInstabilityRate: number
  }
  fieldMetrics: {
    scoredPairs: number
    meanAbsError: number
    exactPct: number
    within1Pct: number
    within2Pct: number
  }
  scorecard: {
    metric: string
    threshold: number
    fieldProxy: string
    fieldValue: number | null
    pass: boolean | null
  }[]
}

const pct = (n: number) => `${(n * 100).toFixed(1)}%`

export default function AdminModelPerformancePage() {
  const router = useRouter()
  const { user, profile } = useAuthStore()
  const t = useT()

  const [perf, setPerf] = useState<PerfPayload | null>(null)
  const [evals, setEvals] = useState<EvalPayload | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [authorized, setAuthorized] = useState(false)

  const fetchAll = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const [perfRes, evalRes] = await Promise.all([
        fetch('/api/admin/model-performance'),
        fetch('/api/admin/evals'),
      ])
      if (perfRes.status === 401 || evalRes.status === 401) {
        router.push('/auth/login?redirect=/admin/model-performance')
        return
      }
      if (perfRes.status === 403 || evalRes.status === 403) {
        router.push('/dashboard')
        return
      }
      if (!perfRes.ok || !evalRes.ok) throw new Error('fetch failed')
      setPerf((await perfRes.json()) as PerfPayload)
      setEvals((await evalRes.json()) as EvalPayload)
      setAuthorized(true)
    } catch {
      setError(t('admin.aim.error_load'))
    }
    setLoading(false)
  }, [router, t])

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/admin/model-performance')
      return
    }
    if (user) fetchAll()
  }, [user, profile, router, fetchAll])

  if (loading || !authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const sa = perf?.scoreAccuracy ?? {
    meanAbsError: 0,
    within1Pct: 0,
    within2Pct: 0,
    exactPct: 0,
  }
  const totals = perf?.totals ?? { submissions: 0, reviewed: 0, scoredPairs: 0 }
  const noData = totals.scoredPairs === 0

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/admin/ai-marking"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('admin.aim.back_to_admin')}
        </Link>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <Gauge className="w-7 h-7 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">{t('admin.aim.mp.title')}</h1>
          </div>
          <button
            onClick={fetchAll}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {t('admin.aim.refresh')}
          </button>
        </div>
        <p className="text-muted-foreground mb-8">{t('admin.aim.mp.subtitle')}</p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm">
            {error}
          </div>
        )}

        {perf && !perf.storeAvailable && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-6 text-clay-600 text-sm">
            {t('admin.aim.store_unavailable')}
          </div>
        )}

        {/* Totals */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <StatCard label={t('admin.aim.mp.stat.submissions')} value={totals.submissions} />
          <StatCard label={t('admin.aim.mp.stat.reviewed')} value={totals.reviewed} />
          <StatCard label={t('admin.aim.mp.stat.scored_pairs')} value={totals.scoredPairs} />
        </div>

        {noData ? (
          <div className="bg-card border border-border rounded-xl p-8 text-center text-muted-foreground text-sm mb-8">
            {t('admin.aim.mp.empty')}
          </div>
        ) : (
          <>
            {/* Score accuracy */}
            <section className="bg-card border border-border rounded-xl p-6 mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                {t('admin.aim.mp.score_accuracy')}
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Metric label={t('admin.aim.mp.mae')} value={sa.meanAbsError.toFixed(2)} />
                <Metric label={t('admin.aim.mp.exact')} value={pct(sa.exactPct)} />
                <Metric label={t('admin.aim.mp.within1')} value={pct(sa.within1Pct)} />
                <Metric label={t('admin.aim.mp.within2')} value={pct(sa.within2Pct)} />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Metric
                  label={t('admin.aim.mp.override_rate')}
                  value={pct(perf?.teacherOverrideRate ?? 0)}
                />
                <Metric
                  label={t('admin.aim.mp.feedback_edit_rate')}
                  value={pct(perf?.feedbackEditRate ?? 0)}
                />
              </div>
            </section>

            <SliceTable title={t('admin.aim.mp.by_board')} rows={perf?.byExamBoard ?? []} t={t} />
            <SliceTable
              title={t('admin.aim.mp.by_qtype')}
              rows={perf?.byQuestionType ?? []}
              t={t}
            />
            <SliceTable title={t('admin.aim.mp.by_band')} rows={perf?.byGradeBand ?? []} t={t} />

            {/* Confidence reliability */}
            {(perf?.confidenceReliability ?? []).length > 0 && (
              <section className="bg-card border border-border rounded-xl p-6 mb-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  {t('admin.aim.mp.confidence')}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-left text-muted-foreground">
                        <th className="pb-3 pr-4 font-medium">{t('admin.aim.mp.col.bucket')}</th>
                        <th className="pb-3 pr-4 font-medium">{t('admin.aim.mp.col.n')}</th>
                        <th className="pb-3 pr-4 font-medium">{t('admin.aim.mp.mae')}</th>
                        <th className="pb-3 font-medium">{t('admin.aim.mp.within1')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {perf!.confidenceReliability.map((b) => (
                        <tr key={b.bucket} className="text-foreground">
                          <td className="py-3 pr-4">{b.bucket}</td>
                          <td className="py-3 pr-4">{b.n}</td>
                          <td className="py-3 pr-4">{b.meanAbsError.toFixed(2)}</td>
                          <td className="py-3">{pct(b.within1Pct)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Top adjustment reasons */}
            {(perf?.topAdjustmentReasons ?? []).length > 0 && (
              <section className="bg-card border border-border rounded-xl p-6 mb-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  {t('admin.aim.mp.top_reasons')}
                </h2>
                <div className="space-y-2">
                  {perf!.topAdjustmentReasons.map((r) => (
                    <div
                      key={r.reason}
                      className="flex items-center justify-between bg-background rounded-lg p-3 border border-border"
                    >
                      <span className="text-sm text-foreground">{r.reason}</span>
                      <span className="text-sm font-semibold text-foreground">{r.count}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* ── Eval scorecard (anchored) ───────────────────────────────── */}
        <section id="evals" className="bg-card border border-border rounded-xl p-6 scroll-mt-24">
          <h2 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-primary" />
            {t('admin.aim.ev.title')}
          </h2>
          <p className="text-muted-foreground text-sm mb-4">{t('admin.aim.ev.subtitle')}</p>

          {/* Always-on non-certification banner. */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-5">
            <div className="flex items-center gap-2 text-red-400 font-semibold mb-1">
              <AlertTriangle className="w-4 h-4" />
              {t('admin.aim.ev.not_certified')}
            </div>
            <p className="text-sm text-red-300/90">{evals?.banner}</p>
          </div>

          {evals && (
            <>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-muted-foreground">
                      <th className="pb-3 pr-4 font-medium">{t('admin.aim.ev.col.metric')}</th>
                      <th className="pb-3 pr-4 font-medium">{t('admin.aim.ev.col.bar')}</th>
                      <th className="pb-3 pr-4 font-medium">{t('admin.aim.ev.col.field')}</th>
                      <th className="pb-3 font-medium">{t('admin.aim.ev.col.value')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {evals.scorecard.map((s) => (
                      <tr key={s.metric} className="text-foreground">
                        <td className="py-3 pr-4 font-mono text-xs">{s.metric}</td>
                        <td className="py-3 pr-4">{s.threshold}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{s.fieldProxy}</td>
                        <td className="py-3">
                          {s.fieldValue === null ? (
                            <span className="text-muted-foreground">{t('admin.aim.ev.na')}</span>
                          ) : (
                            pct(s.fieldValue)
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-background rounded-lg border border-border p-4 text-xs text-muted-foreground">
                <p className="mb-1">
                  <strong className="text-foreground">{t('admin.aim.ev.source')}:</strong>{' '}
                  {evals.thresholds.source} (v{evals.thresholds.version})
                </p>
                <p className="mb-1">
                  <strong className="text-foreground">certifiable:</strong>{' '}
                  {String(evals.certifiable)} - {evals.certifiableReason}
                </p>
                <p>{evals.thresholds.rationale}</p>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <span className="text-sm text-muted-foreground">{label}</span>
      <p className="text-3xl font-bold text-foreground mt-1">{value.toLocaleString()}</p>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background rounded-lg border border-border p-4">
      <span className="text-xs text-muted-foreground">{label}</span>
      <p className="text-xl font-bold text-foreground mt-1">{value}</p>
    </div>
  )
}

function SliceTable({
  title,
  rows,
  t,
}: {
  title: string
  rows: SliceAccuracy[]
  t: (k: string) => string
}) {
  return (
    <section className="bg-card border border-border rounded-xl p-6 mb-6">
      <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <Sigma className="w-5 h-5 text-primary" />
        {title}
      </h2>
      {rows.length === 0 ? (
        <p className="text-muted-foreground text-sm py-4 text-center">
          {t('admin.aim.empty_generic')}
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-3 pr-4 font-medium">{t('admin.aim.mp.col.slice')}</th>
                <th className="pb-3 pr-4 font-medium">{t('admin.aim.mp.col.n')}</th>
                <th className="pb-3 pr-4 font-medium">{t('admin.aim.mp.mae')}</th>
                <th className="pb-3 pr-4 font-medium">{t('admin.aim.mp.within1')}</th>
                <th className="pb-3 font-medium">{t('admin.aim.mp.within2')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((r) => (
                <tr key={r.slice} className="text-foreground">
                  <td className="py-3 pr-4">{r.slice}</td>
                  <td className="py-3 pr-4">{r.n}</td>
                  <td className="py-3 pr-4">{r.meanAbsError.toFixed(2)}</td>
                  <td className="py-3 pr-4">{(r.within1Pct * 100).toFixed(1)}%</td>
                  <td className="py-3">{(r.within2Pct * 100).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
