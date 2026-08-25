'use client'

// ─── Departmental marking intelligence ──────────────────────────────────────
//
// WHY THIS PAGE EXISTS (2026-08-25):
// GET /api/school/analytics/marking has been a complete, working, correctly
// authorised endpoint for months - returning most-corrected assessment
// objectives by school, class and student, mark-movement between the AI and
// the teacher, hardest questions and override patterns. NOTHING CALLED IT. A
// repo-wide search found zero consumers: no page, no component, no hook.
//
// That made the single most differentiating capability in the product
// invisible to the schools paying for it, and unsellable - we cannot honestly
// demonstrate a screen that does not exist. This page is that screen.
//
// HONESTY RULES BAKED IN (this product spent an engineering cycle removing
// fabricated data, so these are not optional):
//   • Every number rendered comes from the API. Nothing is invented, estimated
//     or filled in with a plausible-looking default.
//   • With no marking data the page says so plainly and explains what to do.
//     It NEVER renders an illustrative or sample cohort.
//   • Small samples are labelled. An assessment objective corrected twice is
//     not a departmental pattern, and the page says which figures are thin
//     rather than letting a head of department over-read them.

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  ArrowLeft,
  Info,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz'

// ── Types: the exact shape of GET /api/school/analytics/marking ─────────────

interface WeaknessStat {
  ao: string
  occurrences: number
  /** Mean signed mark delta (teacher minus AI). Negative = the AI over-marked. */
  avgDelta: number
}

interface HardestQuestion {
  questionKey: string
  questionText: string | null
  markSchemeId: string | null
  avgTeacherScore: number
  avgAiScore: number
  sampleSize: number
}

interface MarkMovement {
  avgMovement: number
  avgAbsMovement: number
  upheldCount: number
  raisedCount: number
  loweredCount: number
  sampleSize: number
}

interface MarkingAnalytics {
  scope: 'school' | 'teacher'
  period: string
  generatedAt: string
  totals: {
    submissions: number
    aiMarked: number
    teacherReviewed: number
    approved: number
    awaitingReview: number
    moderations: number
  }
  commonWeaknesses: {
    school: WeaknessStat[]
    byClass: Array<{ classId: string; className: string; weaknesses: WeaknessStat[] }>
    byStudent: Array<{ studentId: string; studentName: string; weaknesses: WeaknessStat[] }>
  }
  mostCommonAoGaps: WeaknessStat[]
  averageMarkMovement: MarkMovement
  hardestQuestions: HardestQuestion[]
}

type Period = 'week' | 'month' | 'term' | 'year'

const PERIODS: { value: Period; label: string }[] = [
  { value: 'week', label: 'This week' },
  { value: 'month', label: 'This month' },
  { value: 'term', label: 'This term' },
  { value: 'year', label: 'This year' },
]

/**
 * Below this many teacher moderations, a figure is a signal not a pattern and
 * is labelled as such. Over-reading three corrections as a cohort weakness is
 * exactly the kind of false confidence this page must not create.
 */
const THIN_SAMPLE = 5

function deltaTone(avgDelta: number): { icon: typeof Minus; className: string; label: string } {
  if (avgDelta < -0.5)
    return {
      icon: TrendingDown,
      className: 'text-red-600 dark:text-red-400',
      label: 'Teachers marked below the AI',
    }
  if (avgDelta > 0.5)
    return {
      icon: TrendingUp,
      className: 'text-emerald-600 dark:text-emerald-400',
      label: 'Teachers marked above the AI',
    }
  return { icon: Minus, className: 'text-muted-foreground', label: 'Close agreement' }
}

export default function MarkingAnalyticsPage() {
  const [period, setPeriod] = useState<Period>('term')
  const [data, setData] = useState<MarkingAnalytics | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/school/analytics/marking?period=${period}`)
      if (res.status === 401) {
        setError('Please sign in to view marking analytics.')
        return
      }
      if (res.status === 403) {
        setError('Marking analytics are available to teachers and school leaders.')
        return
      }
      if (!res.ok) {
        setError('We could not load marking analytics just now. Please try again.')
        return
      }
      setData((await res.json()) as MarkingAnalytics)
    } catch {
      setError('We could not load marking analytics just now. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [period])

  useEffect(() => {
    load()
  }, [load])

  const hasMarkingData = (data?.totals.moderations ?? 0) > 0
  const schoolWeaknesses = data?.commonWeaknesses.school ?? []

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6">
        <Link
          href="/school/analytics"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to analytics
        </Link>
      </nav>

      <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
            Where marks are being lost
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            Built from the essays your teachers have reviewed. When a teacher adjusts the AI mark on
            an assessment objective, that adjustment is recorded here, so the department can see
            which objectives cost the most marks across a cohort.
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Time period">
          {PERIODS.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => setPeriod(p.value)}
              aria-pressed={period === p.value}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                period === p.value
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </header>

      {loading ? (
        <div className="space-y-4">
          <Skeleton className="h-28 w-full rounded-2xl" />
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
      ) : error ? (
        <GlassPanel>
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <AlertTriangle
              className="size-7 text-amber-600 dark:text-amber-400"
              aria-hidden="true"
            />
            <p className="text-sm text-muted-foreground">{error}</p>
            <Button variant="outline" onClick={load}>
              Try again
            </Button>
          </div>
        </GlassPanel>
      ) : !hasMarkingData ? (
        // Honest empty state. No sample cohort, no illustrative figures - this
        // page shows nothing until real marking exists, by design.
        <GlassPanel>
          <div className="mx-auto flex max-w-lg flex-col items-center gap-4 py-12 text-center">
            <BarChart3 className="size-8 text-muted-foreground" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-foreground">No marking to analyse yet</h2>
            <p className="text-sm text-muted-foreground">
              This view fills in as your teachers review AI-marked essays. Each time a teacher
              adjusts a mark against an assessment objective, that becomes a data point here.
            </p>
            <p className="text-sm text-muted-foreground">
              Set an essay for a class and review the first few in the marking queue. A single class
              set is usually enough to see the first pattern.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              <Button render={<Link href="/school/marking" />}>Open the marking queue</Button>
              <Button variant="outline" render={<Link href="/school/assignments" />}>
                Set an assignment
              </Button>
            </div>
          </div>
        </GlassPanel>
      ) : (
        <div className="space-y-6">
          {data?.scope === 'teacher' ? (
            <p className="flex items-start gap-2 rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
              <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              You are seeing your own classes. School leaders see the whole department.
            </p>
          ) : null}

          {/* ── Department-wide assessment objectives ───────────────────── */}
          <GlassPanel>
            <PanelEyebrow>Across the department</PanelEyebrow>
            <h2 className="mb-1 text-lg font-semibold text-foreground">
              Assessment objectives teachers adjust most
            </h2>
            <p className="mb-5 text-xs text-muted-foreground">
              Ordered by how often a teacher changed the AI mark on that objective. A negative
              movement means teachers marked below the AI.
            </p>

            {schoolWeaknesses.length === 0 ? (
              <p className="py-6 text-center text-sm text-muted-foreground">
                No assessment-objective adjustments recorded in this period.
              </p>
            ) : (
              <ul className="space-y-3">
                {schoolWeaknesses.map((w) => {
                  const tone = deltaTone(w.avgDelta)
                  const Icon = tone.icon
                  const thin = w.occurrences < THIN_SAMPLE
                  return (
                    <li
                      key={w.ao}
                      className="flex flex-wrap items-center gap-3 rounded-xl border border-border/60 bg-background/40 p-3"
                    >
                      <span className="min-w-14 font-heading text-lg font-bold text-foreground">
                        {w.ao}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {w.occurrences} {w.occurrences === 1 ? 'adjustment' : 'adjustments'}
                      </span>
                      <span className={`inline-flex items-center gap-1 text-sm ${tone.className}`}>
                        <Icon className="size-4" aria-hidden="true" />
                        {w.avgDelta > 0 ? '+' : ''}
                        {w.avgDelta.toFixed(1)} marks
                        <span className="sr-only">. {tone.label}.</span>
                      </span>
                      {thin ? (
                        <Badge variant="outline" className="ml-auto text-[10px]">
                          Small sample
                        </Badge>
                      ) : null}
                    </li>
                  )
                })}
              </ul>
            )}
          </GlassPanel>

          {/* ── By class ────────────────────────────────────────────────── */}
          {(data?.commonWeaknesses.byClass.length ?? 0) > 0 ? (
            <GlassPanel>
              <PanelEyebrow>By class</PanelEyebrow>
              <h2 className="mb-5 text-lg font-semibold text-foreground">
                Where each class is losing marks
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {data?.commonWeaknesses.byClass.map((c) => (
                  <div
                    key={c.classId}
                    className="rounded-xl border border-border/60 bg-background/40 p-4"
                  >
                    <p className="mb-2 font-semibold text-foreground">{c.className}</p>
                    {c.weaknesses.length === 0 ? (
                      <p className="text-xs text-muted-foreground">No adjustments recorded.</p>
                    ) : (
                      <ul className="space-y-1.5">
                        {c.weaknesses.slice(0, 3).map((w) => (
                          <li
                            key={w.ao}
                            className="flex items-center justify-between gap-2 text-sm"
                          >
                            <span className="font-medium text-foreground">{w.ao}</span>
                            <span className="text-xs text-muted-foreground">
                              {w.occurrences}x, {w.avgDelta > 0 ? '+' : ''}
                              {w.avgDelta.toFixed(1)} marks
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </GlassPanel>
          ) : null}

          {/* ── AI and teacher agreement ────────────────────────────────── */}
          <GlassPanel>
            <PanelEyebrow>Marking agreement</PanelEyebrow>
            <h2 className="mb-1 text-lg font-semibold text-foreground">
              How often teachers change the AI mark
            </h2>
            <p className="mb-5 text-xs text-muted-foreground">
              A useful check on whether the AI is pitched correctly for your cohort. Teacher
              judgement is always final.
            </p>
            <div className="grid gap-3 sm:grid-cols-4">
              {[
                { label: 'Marks reviewed', value: data?.averageMarkMovement.sampleSize ?? 0 },
                { label: 'Left unchanged', value: data?.averageMarkMovement.upheldCount ?? 0 },
                { label: 'Raised', value: data?.averageMarkMovement.raisedCount ?? 0 },
                { label: 'Lowered', value: data?.averageMarkMovement.loweredCount ?? 0 },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border/60 bg-background/40 p-4 text-center"
                >
                  <p className="font-heading text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
            {(data?.averageMarkMovement.sampleSize ?? 0) > 0 ? (
              <p className="mt-4 text-xs text-muted-foreground">
                Average change when a mark was adjusted:{' '}
                <span className="font-medium text-foreground">
                  {(data?.averageMarkMovement.avgAbsMovement ?? 0).toFixed(1)} marks
                </span>
                .
              </p>
            ) : null}
          </GlassPanel>

          {/* ── Hardest questions ───────────────────────────────────────── */}
          {(data?.hardestQuestions.length ?? 0) > 0 ? (
            <GlassPanel>
              <PanelEyebrow>Questions</PanelEyebrow>
              <h2 className="mb-5 text-lg font-semibold text-foreground">
                Questions your cohort found hardest
              </h2>
              <ul className="space-y-2">
                {data?.hardestQuestions.slice(0, 8).map((q) => (
                  <li
                    key={q.questionKey}
                    className="flex flex-wrap items-center gap-3 rounded-xl border border-border/60 bg-background/40 p-3"
                  >
                    <span className="min-w-0 flex-1 truncate text-sm text-foreground">
                      {q.questionText ?? q.questionKey}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      average {q.avgTeacherScore.toFixed(1)} marks
                    </span>
                    <Badge variant="outline" className="text-[10px]">
                      {q.sampleSize} {q.sampleSize === 1 ? 'response' : 'responses'}
                    </Badge>
                  </li>
                ))}
              </ul>
            </GlassPanel>
          ) : null}

          <p className="text-center text-xs text-muted-foreground">
            Generated {data ? new Date(data.generatedAt).toLocaleString('en-GB') : ''}. Built only
            from essays your teachers have reviewed.
          </p>
        </div>
      )}
    </div>
  )
}
