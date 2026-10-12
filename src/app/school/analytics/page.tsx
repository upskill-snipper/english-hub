'use client'

// ─── School analytics: activity and quiz progress ──────────────────────────
// /school/analytics
//
// CHANGED 12 OCTOBER 2026, with GET /api/school/analytics:
//   * Every pupil was listed as "Never logged in", last active 1 January
//     1970. Last activity now comes from what each pupil actually did, and a
//     pupil who has done nothing is shown as "No activity yet".
//   * "Assignments submitted" counted assignments created. It is now essays
//     submitted for marking.
//   * Quiz averages were shown as GCSE grades ("Working at Grade 6"). A quiz
//     percentage is not a grade, so they are shown as percentages.
//   * The resource-usage panel could only ever be empty (nothing records
//     resource use) and the two export buttons were permanently disabled.
//     Both are gone.
//   * Year-group rows linked to /school/classes?year=..., a filter that page
//     never read. They no longer link.
// The assessment-objective view lives at /school/analytics/marking.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  Activity,
  AlertTriangle,
  BarChart3,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useT } from '@/lib/i18n/use-t'
import { useFormatDate } from '@/lib/i18n/use-format-date'
import { CEFRCohortPanel } from '@/components/school/CEFRCohortPanel'
import { GlassPanel, PanelEyebrow, KpiTile, RankBars, ragColor } from '@/components/dataviz'
import type { AnalyticsResponse, PupilIssue } from '@/app/api/school/analytics/route'

type DateRange = 'week' | 'month' | 'term' | 'year'
const DATE_RANGES: DateRange[] = ['week', 'month', 'term', 'year']

function GlassMeter({ value }: { value: number }) {
  const clamped = Math.min(Math.max(value, 0), 100)
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-foreground/[0.08]">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${clamped}%`, background: ragColor(clamped) }}
        />
      </div>
      <span className="w-10 text-end text-xs tabular-nums text-muted-foreground">
        {Math.round(value)}%
      </span>
    </div>
  )
}

function PanelHeader({
  title,
  subtitle,
  icon: Icon,
  id,
}: {
  title: string
  subtitle?: string
  icon: React.ElementType
  id: string
}) {
  return (
    <div className="flex items-start gap-3 border-b border-border/50 p-5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-foreground/[0.06]">
        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h2 id={id} className="font-heading text-lg font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {subtitle ? <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p> : null}
      </div>
    </div>
  )
}

export default function SchoolAnalyticsPage() {
  const t = useT()
  const fmt = useFormatDate()
  const [dateRange, setDateRange] = useState<DateRange>('month')
  const [data, setData] = useState<AnalyticsResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/school/analytics?period=${dateRange}`, { cache: 'no-store' })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error ?? t('school.portal.analytics.load_error'))
      }
      setData((await res.json()) as AnalyticsResponse)
    } catch (err) {
      setData(null)
      setError(err instanceof Error ? err.message : t('school.portal.analytics.load_error'))
    } finally {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange])

  useEffect(() => {
    load()
  }, [load])

  function issueText(issue: PupilIssue): string {
    switch (issue.kind) {
      case 'no_activity':
        return t('school.pupil.no_activity')
      case 'inactive':
        return t('school.portal.analytics.issue.inactive').replace('{n}', String(issue.days))
      case 'low_quiz_average':
        return t('school.portal.analytics.issue.low_quiz').replace('{n}', String(issue.percent))
    }
  }

  function emailAbout(name: string) {
    const subject = encodeURIComponent(`${name} - The English Hub`)
    // No recipient is filled in: the sender chooses one rather than the
    // product inventing it.
    window.open(`mailto:?subject=${subject}`)
  }

  const rankBarData = useMemo(
    () =>
      (data?.yearGroupStats ?? [])
        .filter((y) => y.averageQuizScore !== null)
        .map((y) => ({
          year: (y.yearGroup ?? '?').replace('Year ', 'Y'),
          average: y.averageQuizScore as number,
        })),
    [data],
  )

  return (
    <div className="space-y-8 text-foreground">
      <GlassPanel accent="primary" className="p-6 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15">
              <BarChart3 className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {t('school.analytics.title')}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">{t('school.analytics.subtitle')}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <div
              className="flex flex-wrap gap-0.5 rounded-lg border border-border/60 bg-background/40 p-0.5"
              role="group"
              aria-label={t('school.objectives.period.label')}
            >
              {DATE_RANGES.map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => setDateRange(range)}
                  aria-pressed={dateRange === range}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                    dateRange === range
                      ? 'bg-foreground/[0.08] text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t(`school.analytics.range.${range}`)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>

      <Link
        href="/school/analytics/marking"
        className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm font-medium text-primary hover:bg-primary/10"
      >
        <Target className="h-4 w-4 shrink-0" aria-hidden="true" />
        {t('school.portal.analytics.objectives_link')}
      </Link>

      {loading ? (
        <div className="space-y-4" aria-busy="true">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-32 rounded-2xl" />
            ))}
          </div>
          <Skeleton className="h-64 rounded-2xl" />
        </div>
      ) : error || !data ? (
        <GlassPanel accent="clay" className="p-8">
          <div role="alert" className="flex flex-col items-center gap-4 text-center">
            <AlertTriangle className="h-8 w-8 text-red-400" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">
              {error ?? t('school.portal.analytics.load_error')}
            </p>
            <Button variant="outline" size="sm" onClick={load}>
              {t('school.queue.retry')}
            </Button>
          </div>
        </GlassPanel>
      ) : (
        <>
          <section aria-label={t('school.analytics.title')}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <KpiTile
                label={t('school.analytics.stat.active_students')}
                value={data.activeStudentsThisWeek}
                icon={Users}
                accent="teal"
              />
              <KpiTile
                label={t('school.portal.analytics.essays_week')}
                value={data.essaysSubmittedThisWeek}
                icon={CheckCircle}
                accent="sage"
              />
              {data.averageQuizScore !== null ? (
                <KpiTile
                  label={t('school.pupil.quiz_average')}
                  value={data.averageQuizScore}
                  suffix="%"
                  icon={TrendingUp}
                  accent="clay"
                />
              ) : (
                <GlassPanel className="p-5">
                  <PanelEyebrow>{t('school.pupil.quiz_average')}</PanelEyebrow>
                  <p className="mt-3 text-3xl font-bold text-muted-foreground">-</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {t('school.portal.analytics.no_quiz_scores')}
                  </p>
                </GlassPanel>
              )}
              <KpiTile
                label={t('school.portal.analytics.flagged')}
                value={data.atRisk.total}
                icon={AlertTriangle}
                accent="ochre"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{t('school.pupil.quiz_note')}</p>
          </section>

          <GlassPanel accent="primary" as="section" aria-labelledby="year-group-heading">
            <PanelHeader
              id="year-group-heading"
              title={t('school.analytics.year_group.title')}
              subtitle={t('school.portal.analytics.year_group_hint')}
              icon={BarChart3}
            />
            <div className="space-y-6 p-5">
              {data.yearGroupStats.length === 0 ? (
                <p className="py-8 text-center text-sm text-muted-foreground">
                  {t('school.portal.analytics.no_pupils')}
                </p>
              ) : (
                <>
                  {rankBarData.length > 0 ? (
                    <RankBars
                      data={rankBarData}
                      labelKey="year"
                      valueKey="average"
                      height={Math.max(180, rankBarData.length * 36)}
                      suffix="%"
                    />
                  ) : null}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <caption className="sr-only">
                        {t('school.analytics.year_group.title')}
                      </caption>
                      <thead>
                        <tr className="border-b border-border/50">
                          <th
                            scope="col"
                            className="pb-3 text-start font-medium text-muted-foreground"
                          >
                            {t('school.analytics.col.year_group')}
                          </th>
                          <th
                            scope="col"
                            className="pb-3 text-end font-medium text-muted-foreground"
                          >
                            {t('school.analytics.col.students')}
                          </th>
                          <th
                            scope="col"
                            className="min-w-[180px] pb-3 ps-6 text-start font-medium text-muted-foreground"
                          >
                            {t('school.pupil.quiz_average')}
                          </th>
                          <th
                            scope="col"
                            className="pb-3 text-end font-medium text-muted-foreground"
                          >
                            {t('school.portal.analytics.col.quizzes')}
                          </th>
                          <th
                            scope="col"
                            className="pb-3 text-end font-medium text-muted-foreground"
                          >
                            {t('school.portal.analytics.flagged')}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40">
                        {data.yearGroupStats.map((row) => (
                          <tr key={row.yearGroup ?? '-'}>
                            <td className="py-3 font-medium">
                              {row.yearGroup ?? t('school.portal.analytics.unknown_year')}
                            </td>
                            <td className="py-3 text-end tabular-nums text-muted-foreground">
                              {row.studentCount}
                            </td>
                            <td className="py-3 ps-6">
                              {row.averageQuizScore !== null ? (
                                <GlassMeter value={row.averageQuizScore} />
                              ) : (
                                <span className="text-xs text-muted-foreground">-</span>
                              )}
                            </td>
                            <td className="py-3 text-end tabular-nums text-muted-foreground">
                              {row.quizzesCompleted}
                            </td>
                            <td className="py-3 text-end">
                              <Badge variant={row.atRiskCount > 0 ? 'destructive' : 'secondary'}>
                                {row.atRiskCount}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </GlassPanel>

          <GlassPanel accent="ochre" as="section" aria-labelledby="at-risk-heading">
            <PanelHeader
              id="at-risk-heading"
              title={t('school.analytics.at_risk.title')}
              subtitle={t('school.portal.analytics.flagged_hint')}
              icon={AlertTriangle}
            />
            <div className="p-5">
              {data.atRisk.pupils.length === 0 ? (
                <p className="py-4 text-center text-sm text-muted-foreground">
                  {t('school.portal.analytics.none_flagged')}
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <caption className="sr-only">{t('school.analytics.at_risk.title')}</caption>
                    <thead>
                      <tr className="border-b border-border/50">
                        <th
                          scope="col"
                          className="pb-3 text-start font-medium text-muted-foreground"
                        >
                          {t('school.analytics.col.name')}
                        </th>
                        <th
                          scope="col"
                          className="pb-3 text-start font-medium text-muted-foreground"
                        >
                          {t('school.analytics.col.year')}
                        </th>
                        <th
                          scope="col"
                          className="pb-3 text-start font-medium text-muted-foreground"
                        >
                          {t('school.analytics.col.last_active')}
                        </th>
                        <th
                          scope="col"
                          className="pb-3 text-start font-medium text-muted-foreground"
                        >
                          {t('school.analytics.col.issue')}
                        </th>
                        <th scope="col" className="pb-3 text-end font-medium text-muted-foreground">
                          {t('school.analytics.col.action')}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      {data.atRisk.pupils.map((p) => {
                        const name = p.name ?? t('school.queue.unnamed_pupil')
                        return (
                          <tr key={p.userId}>
                            <td className="py-3 font-medium">
                              <Link
                                href={`/school/students/${p.userId}`}
                                className="hover:text-primary hover:underline"
                              >
                                {name}
                              </Link>
                            </td>
                            <td className="py-3 text-muted-foreground">
                              {p.yearGroup ?? t('school.portal.analytics.unknown_year')}
                            </td>
                            <td className="py-3 text-muted-foreground">
                              <span className="inline-flex items-center gap-1.5">
                                <Clock className="h-3 w-3 shrink-0" aria-hidden="true" />
                                {p.lastActiveAt
                                  ? fmt(p.lastActiveAt)
                                  : t('school.pupil.no_activity')}
                              </span>
                            </td>
                            <td className="py-3">
                              <span className="inline-flex flex-wrap gap-1.5">
                                {p.issues.map((issue) => (
                                  <span
                                    key={issue.kind}
                                    className="rounded-md bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-800 dark:text-amber-300"
                                  >
                                    {issueText(issue)}
                                  </span>
                                ))}
                              </span>
                            </td>
                            <td className="py-3 text-end">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 gap-1.5 text-xs"
                                onClick={() => emailAbout(name)}
                              >
                                <Mail className="h-3 w-3" aria-hidden="true" />
                                {t('school.analytics.email_teacher')}
                              </Button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  {data.atRisk.total > data.atRisk.pupils.length ? (
                    <p className="mt-3 text-xs text-muted-foreground">
                      {t('school.portal.analytics.flagged_more').replace(
                        '{n}',
                        String(data.atRisk.total),
                      )}
                    </p>
                  ) : null}
                </div>
              )}
            </div>
          </GlassPanel>

          <GlassPanel accent="sage" as="section" aria-labelledby="classes-heading">
            <PanelHeader
              id="classes-heading"
              title={t('school.portal.analytics.classes_title')}
              subtitle={t('school.portal.analytics.classes_hint')}
              icon={BookOpen}
            />
            <div className="p-5">
              {data.classStats.length === 0 ? (
                <p className="py-8 text-center text-sm text-muted-foreground">
                  {t('school.portal.dash.no_classes_school')}
                </p>
              ) : (
                <ul className="space-y-3">
                  {data.classStats.map((c) => (
                    <li
                      key={c.classId}
                      className="flex items-center gap-3 rounded-xl border border-border/40 bg-foreground/[0.02] px-4 py-3"
                    >
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/school/classes/${c.classId}`}
                          className="truncate font-medium hover:text-primary hover:underline"
                        >
                          {c.className ?? t('school.queue.unnamed_class')}
                        </Link>
                        <p className="text-xs text-muted-foreground">
                          {[
                            c.teacherName,
                            t('school.portal.dash.class_pupils').replace(
                              '{n}',
                              String(c.studentCount),
                            ),
                          ]
                            .filter(Boolean)
                            .join(' · ')}
                        </p>
                      </div>
                      <span className="text-lg font-bold tabular-nums">
                        {c.averageQuizScore !== null ? `${c.averageQuizScore}%` : '-'}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </GlassPanel>

          <CEFRCohortPanel />

          <GlassPanel accent="clay" as="section" aria-labelledby="weekly-activity-heading">
            <PanelHeader
              id="weekly-activity-heading"
              title={t('school.portal.analytics.weekly_title')}
              subtitle={t('school.portal.analytics.weekly_hint')}
              icon={Activity}
            />
            <div className="overflow-x-auto p-5">
              <table className="w-full text-sm">
                <caption className="sr-only">{t('school.portal.analytics.weekly_title')}</caption>
                <thead>
                  <tr className="border-b border-border/50">
                    <th scope="col" className="pb-3 text-start font-medium text-muted-foreground">
                      {t('school.portal.analytics.week_beginning')}
                    </th>
                    <th scope="col" className="pb-3 text-end font-medium text-muted-foreground">
                      {t('school.portal.analytics.active_pupils')}
                    </th>
                    <th scope="col" className="pb-3 text-end font-medium text-muted-foreground">
                      {t('school.portal.analytics.essays_submitted')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {data.weeklyActivity.map((w) => (
                    <tr key={w.weekStart}>
                      <td className="py-3 font-medium">{fmt(w.weekStart)}</td>
                      <td className="py-3 text-end tabular-nums text-muted-foreground">
                        {w.activeStudents}
                      </td>
                      <td className="py-3 text-end tabular-nums text-muted-foreground">
                        {w.essaysSubmitted}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>
        </>
      )}
    </div>
  )
}
