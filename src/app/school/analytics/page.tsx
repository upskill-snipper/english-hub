'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  BarChart3,
  TrendingUp,
  Users,
  AlertTriangle,
  CheckCircle,
  Download,
  Calendar,
  Mail,
  BookOpen,
  Clock,
  ChevronRight,
  Activity,
} from 'lucide-react'
import { percentageToGCSEGrade, gcseGradeColor } from '@/lib/grades'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useT } from '@/lib/i18n/use-t'
import { CEFRCohortPanel } from '@/components/school/CEFRCohortPanel'
import {
  GlassPanel,
  PanelEyebrow,
  KpiTile,
  RankBars,
  ragColor,
  pct,
  compact,
} from '@/components/dataviz'

// ── Types ────────────────────────────────────────────────────────────────────

type DateRange = 'week' | 'month' | 'term' | 'year'

/** Exact shape returned by GET /api/school/analytics. */
interface ApiAtRiskStudent {
  userId: string
  name: string
  email: string
  yearGroup: string
  lastActiveAt: string
  issues: string[]
}

interface ApiYearGroupStat {
  yearGroup: string
  studentCount: number
  averageProgress: number
  assignmentsCompleted: number
  atRiskCount: number
}

interface ApiTopClass {
  classId: string
  className: string
  teacherName: string
  studentCount: number
  averageScore: number
}

interface ApiResourceUsage {
  resourceName: string
  accessCount: number
}

interface ApiWeeklyActivity {
  weekStart: string
  activeStudents: number
  assignmentsSubmitted: number
}

interface ApiAnalyticsResponse {
  totalStudents: number
  totalTeachers: number
  totalClasses: number
  activeStudentsThisWeek: number
  assignmentsSubmittedThisWeek: number
  averageScore: number | null
  atRiskStudents: ApiAtRiskStudent[]
  yearGroupStats: ApiYearGroupStat[]
  topClasses: ApiTopClass[]
  resourceUsage: ApiResourceUsage[]
  weeklyActivity: ApiWeeklyActivity[]
}

/** View model the page renders. */
interface AnalyticsView {
  activeStudents: number
  assignmentsSubmitted: number
  averageScore: number | null
  atRiskStudents: ApiAtRiskStudent[]
  yearGroups: ApiYearGroupStat[]
  topClasses: ApiTopClass[]
  resourceUsage: ApiResourceUsage[]
  weeklyActivity: ApiWeeklyActivity[]
}

/**
 * Adapter from the API response to the view model. The API is the source of
 * truth - nothing here invents values; missing or empty data stays empty and
 * the panels render their own empty states.
 */
function mapApiToView(api: ApiAnalyticsResponse): AnalyticsView {
  return {
    activeStudents: api.activeStudentsThisWeek ?? 0,
    assignmentsSubmitted: api.assignmentsSubmittedThisWeek ?? 0,
    averageScore: api.averageScore ?? null,
    atRiskStudents: api.atRiskStudents ?? [],
    yearGroups: api.yearGroupStats ?? [],
    topClasses: api.topClasses ?? [],
    resourceUsage: api.resourceUsage ?? [],
    weeklyActivity: api.weeklyActivity ?? [],
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function scoreColor(score: number): string {
  if (score >= 75) return 'text-green-400'
  if (score >= 60) return 'text-clay-600'
  return 'text-red-400'
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

/** Glass meter - themed replacement for the old inline progress bar. */
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
      <span className="w-9 text-right text-xs tabular-nums text-muted-foreground">
        {Math.round(value)}%
      </span>
    </div>
  )
}

/** Honest per-panel empty state. */
function PanelEmpty({ message }: { message: string }) {
  return <p className="py-8 text-center text-sm text-muted-foreground">{message}</p>
}

// ── Skeleton Components ──────────────────────────────────────────────────────

function KpiSkeleton() {
  return (
    <GlassPanel className="p-5">
      <div className="flex items-start justify-between gap-3">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-8 w-8 rounded-lg" />
      </div>
      <Skeleton className="mt-3 h-9 w-20" />
      <Skeleton className="mt-3 h-9 w-full" />
    </GlassPanel>
  )
}

function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-full rounded-lg" />
      ))}
    </div>
  )
}

// ── Sub-components ───────────────────────────────────────────────────────────

/** Panel header with cinematic eyebrow + heading + optional icon. */
function PanelHeader({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
  iconClass,
  id,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  icon: React.ElementType
  iconClass?: string
  id?: string
}) {
  return (
    <div className="flex items-start gap-3 border-b border-border/50 p-5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-foreground/[0.06]">
        <Icon className={`h-4 w-4 ${iconClass ?? 'text-primary'}`} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <PanelEyebrow>{eyebrow}</PanelEyebrow>
        <h2 id={id} className="font-heading text-lg font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {subtitle && <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  )
}

const DATE_RANGES: DateRange[] = ['week', 'month', 'term', 'year']

function useDateRangeLabels(): Record<DateRange, string> {
  const t = useT()
  return {
    week: t('school.analytics.range.week'),
    month: t('school.analytics.range.month'),
    term: t('school.analytics.range.term'),
    year: t('school.analytics.range.year'),
  }
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function SchoolAnalyticsPage() {
  const t = useT()
  const router = useRouter()
  const dateRangeLabels = useDateRangeLabels()
  const [dateRange, setDateRange] = useState<DateRange>('week')
  const [data, setData] = useState<AnalyticsView | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    async function fetchData() {
      try {
        // The API derives the school from the authenticated member and reads
        // the window from `period`.
        const res = await fetch(`/api/school/analytics?period=${dateRange}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = (await res.json()) as ApiAnalyticsResponse
        if (!cancelled) setData(mapApiToView(json))
      } catch {
        if (!cancelled) {
          setData(null)
          setError(t('school.classes.error.title'))
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchData()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange, reloadKey])

  const handleRetry = useCallback(() => setReloadKey((k) => k + 1), [])

  function handleEmailAboutStudent(studentName: string) {
    const subject = encodeURIComponent(`Concern: ${studentName} - English Hub`)
    const body = encodeURIComponent(
      `Hi,\n\nI wanted to flag a concern regarding ${studentName} on The English Hub.\n\nBest regards`,
    )
    // No recipient pre-filled: the API does not return a teacher address, so
    // the sender chooses one rather than the product inventing it.
    window.open(`mailto:?subject=${subject}&body=${body}`)
  }

  // Derived series for RankBars + KPI sparks - genuine derived arrays only.
  const rankBarData = useMemo(
    () =>
      (data?.yearGroups ?? []).map((y) => ({
        year: y.yearGroup.replace('Year ', 'Y'),
        avgProgress: y.averageProgress,
      })),
    [data],
  )
  const gradeSpark = useMemo(
    () => (data?.yearGroups ?? []).map((y) => ({ v: y.averageProgress })),
    [data],
  )
  const assignmentsSpark = useMemo(
    () => (data?.yearGroups ?? []).map((y) => ({ v: y.assignmentsCompleted })),
    [data],
  )

  return (
    <div className="text-foreground">
      <div className="space-y-8">
        {/* ── Cinematic Header ───────────────────────────────────────────── */}
        <GlassPanel accent="primary" className="p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15">
                <BarChart3 className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <PanelEyebrow>{t('school.analytics.title')}</PanelEyebrow>
                <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {t('school.analytics.title')}
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t('school.analytics.subtitle')}
                </p>
              </div>
            </div>

            {/* Date range selector */}
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <div className="flex gap-0.5 rounded-lg border border-border/60 bg-background/40 p-0.5 backdrop-blur-xl">
                {DATE_RANGES.map((range) => (
                  <button
                    key={range}
                    onClick={() => setDateRange(range)}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                      dateRange === range
                        ? 'bg-foreground/[0.08] text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {dateRangeLabels[range]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </GlassPanel>

        {/* ── Error state (real error, real retry - never mock data) ──────── */}
        {!loading && error && (
          <GlassPanel accent="clay" className="p-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <AlertTriangle className="h-8 w-8 text-red-400" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground">{t('school.classes.error.title')}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We could not load your school&apos;s analytics. No data is shown rather than
                  placeholder figures.
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={handleRetry}>
                {t('school.classes.error.retry')}
              </Button>
            </div>
          </GlassPanel>
        )}

        {/* ── Top KPI Row ─────────────────────────────────────────────────── */}
        {!error && (
          <section aria-labelledby="kpi-heading">
            <h2 id="kpi-heading" className="sr-only">
              {t('school.analytics.title')}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {loading ? (
                <>
                  <KpiSkeleton />
                  <KpiSkeleton />
                  <KpiSkeleton />
                  <KpiSkeleton />
                </>
              ) : data ? (
                <>
                  <KpiTile
                    label={t('school.analytics.stat.active_students')}
                    value={data.activeStudents}
                    icon={Users}
                    accent="teal"
                  />
                  <KpiTile
                    label={t('school.analytics.stat.assignments_submitted')}
                    value={data.assignmentsSubmitted}
                    icon={CheckCircle}
                    accent="sage"
                    spark={assignmentsSpark.length > 1 ? assignmentsSpark : undefined}
                  />
                  {data.averageScore !== null ? (
                    <KpiTile
                      label={`${t('school.analytics.stat.avg_working_grade')} · ${t('school.analytics.grade_prefix')} ${percentageToGCSEGrade(data.averageScore)}`}
                      value={data.averageScore}
                      suffix="%"
                      icon={TrendingUp}
                      accent="clay"
                      spark={gradeSpark.length > 1 ? gradeSpark : undefined}
                    />
                  ) : (
                    <GlassPanel className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <PanelEyebrow>{t('school.analytics.stat.avg_working_grade')}</PanelEyebrow>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      </div>
                      <p className="mt-3 text-3xl font-bold text-muted-foreground">&mdash;</p>
                      <p className="mt-2 text-xs text-muted-foreground">No assessment data yet</p>
                    </GlassPanel>
                  )}
                  <KpiTile
                    label={t('school.analytics.stat.at_risk_students')}
                    value={data.atRiskStudents.length}
                    icon={AlertTriangle}
                    accent="ochre"
                  />
                </>
              ) : null}
            </div>
          </section>
        )}

        {/* ── Year Group Performance ──────────────────────────────────────── */}
        {!error && (
          <GlassPanel accent="primary" as="section" aria-labelledby="year-group-heading">
            <PanelHeader
              id="year-group-heading"
              eyebrow={t('school.analytics.title')}
              title={t('school.analytics.year_group.title')}
              subtitle={t('school.analytics.year_group.subtitle')}
              icon={BarChart3}
            />
            <div className="space-y-6 p-5">
              {loading ? (
                <TableSkeleton rows={7} />
              ) : data && data.yearGroups.length > 0 ? (
                <>
                  {/* RAG-coloured rank bars (visual) */}
                  <RankBars
                    data={rankBarData}
                    labelKey="year"
                    valueKey="avgProgress"
                    height={Math.max(180, rankBarData.length * 36)}
                    suffix="%"
                  />

                  {/* Accessible per-year detail - keyboard-activatable rows */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <caption className="sr-only">
                        {t('school.analytics.year_group.subtitle')}
                      </caption>
                      <thead>
                        <tr className="border-b border-border/50">
                          <th className="pb-3 text-left font-medium text-muted-foreground">
                            {t('school.analytics.col.year_group')}
                          </th>
                          <th className="pb-3 text-right font-medium text-muted-foreground">
                            {t('school.analytics.col.students')}
                          </th>
                          <th className="pb-3 text-center font-medium text-muted-foreground">
                            {t('school.analytics.col.avg_working_at')}
                          </th>
                          <th className="min-w-[180px] pb-3 pl-6 text-left font-medium text-muted-foreground">
                            {t('school.analytics.col.avg_progress')}
                          </th>
                          <th className="pb-3 text-right font-medium text-muted-foreground">
                            {t('school.analytics.col.assignments')}
                          </th>
                          <th className="pb-3 text-right font-medium text-muted-foreground">
                            {t('school.analytics.col.at_risk')}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40">
                        {data.yearGroups.map((row) => {
                          const href = `/school/classes?year=${encodeURIComponent(row.yearGroup)}`
                          const go = () => router.push(href)
                          return (
                            <tr
                              key={row.yearGroup}
                              className="group cursor-pointer transition-colors hover:bg-foreground/[0.03] focus-within:bg-foreground/[0.04]"
                              onClick={go}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault()
                                  go()
                                }
                              }}
                              tabIndex={0}
                              role="link"
                              aria-label={`${row.yearGroup} - ${t('school.analytics.col.avg_progress')} ${pct(row.averageProgress)}`}
                            >
                              <td className="py-3 font-medium">
                                <span className="flex items-center gap-1.5 transition-colors group-hover:text-primary">
                                  {row.yearGroup}
                                  <ChevronRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                                </span>
                              </td>
                              <td className="py-3 text-right tabular-nums text-muted-foreground">
                                {row.studentCount}
                              </td>
                              <td
                                className={`py-3 text-center font-bold ${gcseGradeColor(percentageToGCSEGrade(row.averageProgress))}`}
                              >
                                {t('school.analytics.grade_prefix')}{' '}
                                {percentageToGCSEGrade(row.averageProgress)}
                              </td>
                              <td className="py-3 pl-6">
                                <GlassMeter value={row.averageProgress} />
                              </td>
                              <td className="py-3 text-right tabular-nums text-muted-foreground">
                                {row.assignmentsCompleted.toLocaleString()}
                              </td>
                              <td className="py-3 text-right">
                                {row.atRiskCount > 0 ? (
                                  <Badge variant="destructive">{row.atRiskCount}</Badge>
                                ) : (
                                  <Badge variant="secondary">0</Badge>
                                )}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <PanelEmpty message="No pupil activity yet. Year-group figures will appear once your pupils start working." />
              )}
            </div>
          </GlassPanel>
        )}

        {/* ── At-Risk Students ────────────────────────────────────────────── */}
        {!error && (
          <GlassPanel accent="ochre" as="section" aria-labelledby="at-risk-heading">
            <PanelHeader
              id="at-risk-heading"
              eyebrow={t('school.analytics.title')}
              title={t('school.analytics.at_risk.title')}
              subtitle={t('school.analytics.at_risk.subtitle')}
              icon={AlertTriangle}
              iconClass="text-red-400"
            />
            <div className="p-5">
              {loading ? (
                <TableSkeleton rows={6} />
              ) : data && data.atRiskStudents.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="pb-3 text-left font-medium text-muted-foreground">
                          {t('school.analytics.col.name')}
                        </th>
                        <th className="pb-3 text-left font-medium text-muted-foreground">
                          {t('school.analytics.col.year')}
                        </th>
                        <th className="pb-3 text-left font-medium text-muted-foreground">
                          {t('school.analytics.col.last_active')}
                        </th>
                        <th className="pb-3 text-left font-medium text-muted-foreground">
                          {t('school.analytics.col.issue')}
                        </th>
                        <th className="pb-3 text-right font-medium text-muted-foreground">
                          {t('school.analytics.col.action')}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      {data.atRiskStudents.map((student) => (
                        <tr
                          key={student.userId}
                          className="transition-colors hover:bg-foreground/[0.03]"
                        >
                          <td className="py-3 font-medium">
                            <Link
                              href={`/school/students/${student.userId}`}
                              className="transition-colors hover:text-primary hover:underline"
                            >
                              {student.name}
                            </Link>
                          </td>
                          <td className="py-3 text-muted-foreground">{student.yearGroup}</td>
                          <td className="flex items-center gap-1.5 py-3 text-muted-foreground">
                            <Clock className="h-3 w-3 shrink-0" aria-hidden="true" />
                            {student.lastActiveAt ? formatDate(student.lastActiveAt) : '—'}
                          </td>
                          <td className="py-3">
                            <span className="inline-flex items-center gap-1.5 rounded-md bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-400">
                              <AlertTriangle className="h-3 w-3 shrink-0" aria-hidden="true" />
                              {student.issues.join(' · ')}
                            </span>
                          </td>
                          <td className="py-3 text-right">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-7 gap-1.5 text-xs"
                              onClick={() => handleEmailAboutStudent(student.name)}
                            >
                              <Mail className="h-3 w-3" />
                              {t('school.analytics.email_teacher')}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="py-4 text-center text-sm text-muted-foreground">
                  {t('school.analytics.at_risk.none')}
                </p>
              )}
            </div>
          </GlassPanel>
        )}

        {/* ── Two-column row: Top Classes + Resource Usage ─────────────────── */}
        {!error && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Top Performing Classes */}
            <GlassPanel accent="sage" as="section" aria-labelledby="top-classes-heading">
              <PanelHeader
                id="top-classes-heading"
                eyebrow={t('school.analytics.title')}
                title={t('school.analytics.top_classes.title')}
                subtitle={t('school.analytics.top_classes.subtitle')}
                icon={TrendingUp}
                iconClass="text-green-400"
              />
              <div className="p-5">
                {loading ? (
                  <TableSkeleton rows={5} />
                ) : data && data.topClasses.length > 0 ? (
                  <ol className="space-y-3">
                    {data.topClasses.map((cls, i) => {
                      const rank = i + 1
                      return (
                        <li
                          key={cls.classId}
                          className="flex items-center gap-3 rounded-xl border border-border/40 bg-foreground/[0.02] px-4 py-3 transition-colors hover:bg-foreground/[0.05]"
                        >
                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                              rank === 1
                                ? 'bg-yellow-500/20 text-clay-600'
                                : 'bg-foreground/[0.06] text-muted-foreground'
                            }`}
                          >
                            {rank}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate font-medium">{cls.className}</p>
                            <p className="text-xs text-muted-foreground">
                              {cls.teacherName} &bull; {cls.studentCount}{' '}
                              {t('school.analytics.students_suffix')}
                            </p>
                          </div>
                          <span
                            className={`text-lg font-bold tabular-nums ${scoreColor(cls.averageScore)}`}
                          >
                            {cls.averageScore}%
                          </span>
                        </li>
                      )
                    })}
                  </ol>
                ) : (
                  <PanelEmpty message="No class results yet. Class rankings appear once pupils have quiz scores." />
                )}
              </div>
            </GlassPanel>

            {/* Resource Usage */}
            <GlassPanel accent="teal" as="section" aria-labelledby="resource-usage-heading">
              <PanelHeader
                id="resource-usage-heading"
                eyebrow={t('school.analytics.title')}
                title={t('school.analytics.resource_usage.title')}
                subtitle={t('school.analytics.resource_usage.subtitle')}
                icon={BookOpen}
                iconClass="text-blue-400"
              />
              <div className="p-5">
                {loading ? (
                  <TableSkeleton rows={6} />
                ) : data && data.resourceUsage.length > 0 ? (
                  <ul className="space-y-2.5">
                    {data.resourceUsage.map((item, i) => {
                      const maxCount = data.resourceUsage[0]?.accessCount ?? 1
                      const width =
                        maxCount > 0 ? Math.round((item.accessCount / maxCount) * 100) : 0
                      return (
                        <li key={i} className="space-y-1">
                          <div className="flex items-center justify-between gap-2 text-xs">
                            <span className="truncate text-muted-foreground">
                              {item.resourceName}
                            </span>
                            <span className="shrink-0 font-medium tabular-nums">
                              {compact(item.accessCount)}
                            </span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-foreground/[0.08]">
                            <div
                              className="h-full rounded-full transition-all duration-700"
                              style={{
                                width: `${width}%`,
                                background: 'hsl(var(--chart-1))',
                              }}
                            />
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  <PanelEmpty message="No resource activity yet. Usage appears once pupils open lessons and resources." />
                )}
              </div>
            </GlassPanel>
          </div>
        )}

        {/* ── CEFR Placement Overview ─────────────────────────────────────── */}
        {!error && <CEFRCohortPanel />}

        {/* ── Weekly Activity ─────────────────────────────────────────────── */}
        {!error && (
          <GlassPanel accent="clay" as="section" aria-labelledby="weekly-activity-heading">
            <PanelHeader
              id="weekly-activity-heading"
              eyebrow={t('school.analytics.title')}
              title="Weekly activity"
              subtitle="Active pupils and submitted assignments over recent weeks"
              icon={Activity}
              iconClass="text-clay-600"
            />
            <div className="p-5">
              {loading ? (
                <TableSkeleton rows={6} />
              ) : data && data.weeklyActivity.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="pb-3 text-left font-medium text-muted-foreground">
                          Week beginning
                        </th>
                        <th className="pb-3 text-right font-medium text-muted-foreground">
                          {t('school.analytics.stat.active_students')}
                        </th>
                        <th className="pb-3 text-right font-medium text-muted-foreground">
                          {t('school.analytics.stat.assignments_submitted')}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      {data.weeklyActivity.map((week) => (
                        <tr
                          key={week.weekStart}
                          className="transition-colors hover:bg-foreground/[0.03]"
                        >
                          <td className="py-3 font-medium">{formatDate(week.weekStart)}</td>
                          <td className="py-3 text-right tabular-nums text-muted-foreground">
                            {week.activeStudents}
                          </td>
                          <td className="py-3 text-right tabular-nums text-muted-foreground">
                            {week.assignmentsSubmitted}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <PanelEmpty message="No activity recorded yet." />
              )}
            </div>
          </GlassPanel>
        )}

        {/* ── Export Buttons (disabled until a real export exists) ────────── */}
        {!error && (
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button
              variant="outline"
              className="gap-2"
              disabled
              title="Exports are not available yet"
            >
              <Download className="h-4 w-4" />
              {t('school.analytics.export_excel')}
            </Button>
            <Button className="gap-2" disabled title="Exports are not available yet">
              <Download className="h-4 w-4" />
              {t('school.analytics.export_pdf')}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
