'use client'

// ─── Assessment objectives: the department view ────────────────────────────
// /school/analytics/marking
//
// The pilot proposal promises: "A department view shows which assessment
// objectives are costing marks, class by class, and for each pupil which
// objectives are strengths and which are holding them back."
//
// REBUILT 12 OCTOBER 2026. The page was built only from teacher corrections:
// until a teacher had adjusted an AI mark it said "No marking to analyse
// yet", however many essays the AI had marked, and what it did show was
// where teachers disagreed with the AI rather than where pupils lose marks.
// Its "marking agreement" figures subtracted a grade from a mark.
//
// It now shows, from every essay the AI has marked (using a teacher's
// adjusted mark where there is one):
//   * across the school, or across the teacher's own classes;
//   * by class, weakest objective first;
//   * by pupil, their strongest and weakest objective;
//   * where teachers changed the AI's marks, in marks;
//   * the questions with the lowest share of marks.
//
// HONESTY RULES, unchanged from the first version of this page:
//   * Every number comes from the API. Nothing is estimated or filled in.
//   * With no marked essays it says so. It never shows a sample cohort.
//   * Fewer than three essays is labelled a small sample, every time.
//   * A share of marks is never turned into a grade.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { AlertTriangle, ArrowLeft, BarChart3, Info, TrendingDown, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz'
import { useT } from '@/lib/i18n/use-t'
import { useFormatDate } from '@/lib/i18n/use-format-date'
import {
  ObjectiveList,
  SmallSampleBadge,
  mixesSubjects,
  percent,
} from '@/components/school/objectives/ObjectiveList'
import type {
  DepartmentObjectivesResponse,
  ObjectivePeriod,
} from '@/app/api/school/analytics/marking/route'

const PERIODS: { value: ObjectivePeriod; labelKey: string }[] = [
  { value: '90d', labelKey: 'school.objectives.period.90d' },
  { value: '12m', labelKey: 'school.objectives.period.12m' },
  { value: 'all', labelKey: 'school.objectives.period.all' },
]

export default function MarkingAnalyticsPage() {
  const t = useT()
  const fmt = useFormatDate()
  const [period, setPeriod] = useState<ObjectivePeriod>('all')
  const [data, setData] = useState<DepartmentObjectivesResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pupilClass, setPupilClass] = useState('all')

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/school/analytics/marking?period=${period}`, {
        cache: 'no-store',
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error ?? t('school.objectives.load_error'))
      }
      setData((await res.json()) as DepartmentObjectivesResponse)
    } catch (err) {
      setData(null)
      setError(err instanceof Error ? err.message : t('school.objectives.load_error'))
    } finally {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [period])

  useEffect(() => {
    load()
  }, [load])

  const classNames = useMemo(
    () => new Map((data?.classes ?? []).map((c) => [c.classId, c.className])),
    [data],
  )
  const pupils = useMemo(
    () =>
      (data?.pupils ?? []).filter((p) => pupilClass === 'all' || p.classIds.includes(pupilClass)),
    [data, pupilClass],
  )

  const hasObjectives = (data?.overall.essays ?? 0) > 0

  return (
    <div className="mx-auto max-w-6xl py-2">
      <nav aria-label={t('school.objectives.breadcrumb')} className="mb-6">
        <Link
          href="/school/analytics"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {t('school.objectives.back')}
        </Link>
      </nav>

      <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
            {t('school.objectives.title')}
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            {t('school.objectives.subtitle')}
          </p>
        </div>
        <div
          className="flex flex-wrap gap-1.5"
          role="group"
          aria-label={t('school.objectives.period.label')}
        >
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
              {t(p.labelKey)}
            </button>
          ))}
        </div>
      </header>

      {loading ? (
        <div className="space-y-4" aria-busy="true">
          <Skeleton className="h-28 w-full rounded-2xl" />
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
      ) : error ? (
        <GlassPanel className="p-5 sm:p-6">
          <div role="alert" className="flex flex-col items-center gap-3 py-10 text-center">
            <AlertTriangle
              className="size-7 text-amber-600 dark:text-amber-400"
              aria-hidden="true"
            />
            <p className="text-sm text-muted-foreground">{error}</p>
            <Button variant="outline" onClick={load}>
              {t('school.queue.retry')}
            </Button>
          </div>
        </GlassPanel>
      ) : !data || !hasObjectives ? (
        <GlassPanel className="p-5 sm:p-6">
          <div className="mx-auto flex max-w-lg flex-col items-center gap-4 py-12 text-center">
            <BarChart3 className="size-8 text-muted-foreground" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-foreground">
              {t('school.objectives.empty_title')}
            </h2>
            <p className="text-sm text-muted-foreground">
              {(data?.totals.essays ?? 0) > 0
                ? t('school.objectives.empty_body_waiting').replace(
                    '{n}',
                    String(data?.totals.essays ?? 0),
                  )
                : t('school.objectives.empty_body_none')}
            </p>
            <Button render={<Link href="/school/marking" />}>
              {t('school.objectives.open_queue')}
            </Button>
          </div>
        </GlassPanel>
      ) : (
        <div className="space-y-6">
          {data.scope === 'teacher' ? (
            <p className="flex items-start gap-2 rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
              <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              {t('school.objectives.scope_teacher')}
            </p>
          ) : null}

          <p className="text-xs text-muted-foreground">{t('school.objectives.share_note')}</p>

          {/* ── Across the school, or the teacher's classes ──────────────── */}
          <GlassPanel className="p-5 sm:p-6">
            <PanelEyebrow>
              {data.scope === 'school'
                ? t('school.objectives.overall_school')
                : t('school.objectives.overall_teacher')}
            </PanelEyebrow>
            <p className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {t('school.objectives.essays_n').replace('{n}', String(data.overall.essays))}
              {data.overall.smallSample ? <SmallSampleBadge /> : null}
            </p>
            <ObjectiveList
              objectives={data.overall.objectives}
              showSubject={mixesSubjects(data.overall.objectives)}
            />
          </GlassPanel>

          {/* ── By class ─────────────────────────────────────────────────── */}
          {data.classes.length > 0 ? (
            <GlassPanel className="p-5 sm:p-6">
              <PanelEyebrow>{t('school.objectives.by_class')}</PanelEyebrow>
              <p className="mb-5 text-xs text-muted-foreground">
                {t('school.objectives.by_class_hint')}
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {data.classes.map((c) => (
                  <section
                    key={c.classId}
                    className="rounded-xl border border-border/60 bg-background/40 p-4"
                    aria-label={c.className ?? t('school.queue.unnamed_class')}
                  >
                    <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-semibold text-foreground">
                        {c.className ?? t('school.queue.unnamed_class')}
                      </h3>
                      <p className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        {t('school.objectives.essays_n').replace('{n}', String(c.essays))}
                        {c.smallSample ? <SmallSampleBadge /> : null}
                      </p>
                    </div>
                    <ObjectiveList
                      objectives={c.objectives}
                      showSubject={mixesSubjects(c.objectives)}
                    />
                  </section>
                ))}
              </div>
            </GlassPanel>
          ) : null}

          {/* ── By pupil ─────────────────────────────────────────────────── */}
          <GlassPanel className="p-5 sm:p-6">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <PanelEyebrow>{t('school.objectives.by_pupil')}</PanelEyebrow>
                <p className="text-xs text-muted-foreground">
                  {t('school.objectives.by_pupil_hint')}
                </p>
              </div>
              {data.classes.length > 1 ? (
                <select
                  value={pupilClass}
                  onChange={(e) => setPupilClass(e.target.value)}
                  aria-label={t('school.queue.filter.class_label')}
                  className="h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground"
                >
                  <option value="all">{t('school.queue.filter.class_all')}</option>
                  {data.classes.map((c) => (
                    <option key={c.classId} value={c.classId}>
                      {c.className ?? t('school.queue.unnamed_class')}
                    </option>
                  ))}
                </select>
              ) : null}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <caption className="sr-only">{t('school.objectives.by_pupil')}</caption>
                <thead className="text-xs uppercase tracking-wide text-muted-foreground">
                  <tr className="border-b border-border/60">
                    <th scope="col" className="px-2 py-2 text-start font-medium">
                      {t('school.objectives.col.pupil')}
                    </th>
                    <th scope="col" className="px-2 py-2 text-start font-medium">
                      {t('school.objectives.col.essays')}
                    </th>
                    <th scope="col" className="px-2 py-2 text-start font-medium">
                      {t('school.objectives.col.strongest')}
                    </th>
                    <th scope="col" className="px-2 py-2 text-start font-medium">
                      {t('school.objectives.col.weakest')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {pupils.map((p) => (
                    <tr key={p.studentId}>
                      <td className="px-2 py-2.5 align-top">
                        <Link
                          href={`/school/students/${p.studentId}`}
                          className="font-medium text-foreground hover:text-primary hover:underline"
                        >
                          {p.name ?? t('school.queue.unnamed_pupil')}
                        </Link>
                        <span className="block text-xs text-muted-foreground">
                          {p.classIds
                            .map((id) => classNames.get(id) ?? t('school.queue.unnamed_class'))
                            .join(', ')}
                        </span>
                      </td>
                      <td className="px-2 py-2.5 align-top tabular-nums">
                        <span className="flex flex-wrap items-center gap-2">
                          {p.essays}
                          {p.smallSample ? <SmallSampleBadge /> : null}
                        </span>
                      </td>
                      {p.strongest && p.weakest ? (
                        <>
                          <td className="px-2 py-2.5 align-top">
                            <span className="inline-flex items-center gap-1.5 text-green-700 dark:text-green-400">
                              <TrendingUp className="size-3.5" aria-hidden="true" />
                              <span className="font-semibold">{p.strongest.ao}</span>
                              <span className="tabular-nums">{percent(p.strongest.meanShare)}</span>
                            </span>
                          </td>
                          <td className="px-2 py-2.5 align-top">
                            <span className="inline-flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                              <TrendingDown className="size-3.5" aria-hidden="true" />
                              <span className="font-semibold">{p.weakest.ao}</span>
                              <span className="tabular-nums">{percent(p.weakest.meanShare)}</span>
                            </span>
                          </td>
                        </>
                      ) : (
                        <td
                          colSpan={2}
                          className="px-2 py-2.5 align-top text-xs text-muted-foreground"
                        >
                          {p.objectives.length === 1
                            ? t('school.objectives.one_objective')
                            : t('school.objectives.no_difference')}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>

          {/* ── Where teachers changed the AI ───────────────────────────── */}
          {data.agreement.reviewed > 0 ? (
            <GlassPanel className="p-5 sm:p-6">
              <PanelEyebrow>{t('school.objectives.agreement_title')}</PanelEyebrow>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  {
                    label: t('school.objectives.agreement.reviewed'),
                    value: data.agreement.reviewed,
                  },
                  {
                    label: t('school.objectives.agreement.unchanged'),
                    value: data.agreement.unchanged,
                  },
                  { label: t('school.objectives.agreement.raised'), value: data.agreement.raised },
                  {
                    label: t('school.objectives.agreement.lowered'),
                    value: data.agreement.lowered,
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border/60 bg-background/40 p-4 text-center"
                  >
                    <p className="font-heading text-2xl font-bold tabular-nums text-foreground">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
              {data.agreement.raised + data.agreement.lowered > 0 ? (
                <p className="mt-4 text-xs text-muted-foreground">
                  {t('school.objectives.agreement.mean_change').replace(
                    '{n}',
                    String(data.agreement.meanAbsChangeWhenChanged),
                  )}
                </p>
              ) : null}

              {data.adjustments.length > 0 ? (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-foreground">
                    {t('school.objectives.adjustments_title')}
                  </h3>
                  <p className="mb-3 text-xs text-muted-foreground">
                    {t('school.objectives.adjustments_hint')}
                  </p>
                  <ul className="space-y-2">
                    {data.adjustments.map((a) => (
                      <li
                        key={a.key}
                        className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-border/60 bg-background/40 p-3 text-sm"
                      >
                        <span className="font-semibold text-foreground">{a.ao}</span>
                        {a.label ? <span className="text-muted-foreground">{a.label}</span> : null}
                        <span className="text-xs text-muted-foreground">
                          {t('school.objectives.essays_n').replace('{n}', String(a.adjustedEssays))}
                        </span>
                        <span className="ms-auto text-xs tabular-nums text-muted-foreground">
                          {t('school.objectives.mean_change').replace(
                            '{n}',
                            `${a.meanChange > 0 ? '+' : ''}${a.meanChange}`,
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </GlassPanel>
          ) : null}

          {/* ── Questions ────────────────────────────────────────────────── */}
          {data.questions.length > 0 ? (
            <GlassPanel className="p-5 sm:p-6">
              <PanelEyebrow>{t('school.objectives.questions_title')}</PanelEyebrow>
              <p className="mb-4 text-xs text-muted-foreground">
                {t('school.objectives.questions_hint')}
              </p>
              <ul className="space-y-2">
                {data.questions.map((q) => (
                  <li
                    key={q.key}
                    className="flex flex-wrap items-center gap-3 rounded-xl border border-border/60 bg-background/40 p-3"
                  >
                    <span className="min-w-0 flex-1 text-sm text-foreground">
                      {q.text ?? t('school.queue.untitled')}
                    </span>
                    <span className="text-sm font-semibold tabular-nums text-foreground">
                      {percent(q.meanShare)}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t('school.objectives.essays_n').replace('{n}', String(q.essays))}
                    </span>
                    {q.smallSample ? <SmallSampleBadge /> : null}
                  </li>
                ))}
              </ul>
            </GlassPanel>
          ) : null}

          <div className="space-y-1 text-center text-xs text-muted-foreground">
            <p>
              {t('school.objectives.generated')
                .replace('{n}', String(data.overall.essays))
                .replace('{date}', fmt(data.generatedAt))}
            </p>
            {data.totals.notYetMarked > 0 ? (
              <p>
                {t('school.objectives.not_marked_note').replace(
                  '{n}',
                  String(data.totals.notYetMarked),
                )}
              </p>
            ) : null}
            {data.totals.markedWithoutBreakdown > 0 ? (
              <p>
                {t('school.objectives.no_breakdown_note').replace(
                  '{n}',
                  String(data.totals.markedWithoutBreakdown),
                )}
              </p>
            ) : null}
            {data.truncated ? <p>{t('school.objectives.truncated')}</p> : null}
          </div>
        </div>
      )}
    </div>
  )
}
