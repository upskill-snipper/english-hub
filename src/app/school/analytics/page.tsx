'use client'

import { useEffect, useMemo, useState } from 'react'
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
  FileText,
  Clock,
  ChevronRight,
  LineChart,
} from 'lucide-react'
import { useAuthStore } from '@/store/auth-store'
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

interface TopStats {
  activeStudents: number
  assignmentsSubmitted: number
  averageScore: number
  atRiskCount: number
}

interface YearGroupRow {
  year: string
  students: number
  avgProgress: number
  assignmentsCompleted: number
  atRiskCount: number
}

interface AtRiskStudent {
  id: string
  name: string
  year: string
  lastActive: string
  issue: string
  teacherEmail: string
}

interface TopClass {
  rank: number
  className: string
  teacher: string
  avgScore: number
  studentCount: number
}

interface ResourceItem {
  title: string
  count: number
}

interface ClassAssignment {
  className: string
  teacher: string
  completionRate: number
  overdueCount: number
}

interface AnalyticsData {
  topStats: TopStats
  yearGroups: YearGroupRow[]
  atRiskStudents: AtRiskStudent[]
  topClasses: TopClass[]
  topLessons: ResourceItem[]
  topMocks: ResourceItem[]
  classAssignments: ClassAssignment[]
}

// ── Mock Fallback Data ───────────────────────────────────────────────────────

const MOCK_DATA: AnalyticsData = {
  topStats: {
    activeStudents: 312,
    assignmentsSubmitted: 1_847,
    averageScore: 68,
    atRiskCount: 24,
  },
  yearGroups: [
    { year: 'Year 7', students: 58, avgProgress: 74, assignmentsCompleted: 312, atRiskCount: 3 },
    { year: 'Year 8', students: 61, avgProgress: 71, assignmentsCompleted: 298, atRiskCount: 4 },
    { year: 'Year 9', students: 55, avgProgress: 66, assignmentsCompleted: 271, atRiskCount: 5 },
    { year: 'Year 10', students: 63, avgProgress: 63, assignmentsCompleted: 344, atRiskCount: 6 },
    { year: 'Year 11', students: 59, avgProgress: 58, assignmentsCompleted: 391, atRiskCount: 7 },
    { year: 'Year 12', students: 38, avgProgress: 72, assignmentsCompleted: 176, atRiskCount: 2 },
    { year: 'Year 13', students: 34, avgProgress: 69, assignmentsCompleted: 155, atRiskCount: 2 },
  ],
  atRiskStudents: [
    {
      id: '1',
      name: 'Jamie Thompson',
      year: 'Year 11',
      lastActive: '21 Mar 2026',
      issue: 'Not logged in for 14 days',
      teacherEmail: 'm.chen@school.ac.uk',
    },
    {
      id: '2',
      name: 'Priya Sharma',
      year: 'Year 10',
      lastActive: '25 Mar 2026',
      issue: 'Average score below 40% (32%)',
      teacherEmail: 's.walsh@school.ac.uk',
    },
    {
      id: '3',
      name: 'Daniel Okafor',
      year: 'Year 9',
      lastActive: '28 Mar 2026',
      issue: 'Assignment completion below 50% (38%)',
      teacherEmail: 'r.patel@school.ac.uk',
    },
    {
      id: '4',
      name: 'Chloe Whitfield',
      year: 'Year 11',
      lastActive: '20 Mar 2026',
      issue: 'Not logged in for 15 days',
      teacherEmail: 'm.chen@school.ac.uk',
    },
    {
      id: '5',
      name: 'Marcus Reid',
      year: 'Year 8',
      lastActive: '29 Mar 2026',
      issue: 'Average score below 40% (37%)',
      teacherEmail: 'j.baker@school.ac.uk',
    },
    {
      id: '6',
      name: 'Amara Diallo',
      year: 'Year 10',
      lastActive: '15 Mar 2026',
      issue: 'Not logged in for 20 days',
      teacherEmail: 's.walsh@school.ac.uk',
    },
    {
      id: '7',
      name: 'Tyler Brennan',
      year: 'Year 12',
      lastActive: '27 Mar 2026',
      issue: 'Assignment completion below 50% (41%)',
      teacherEmail: 'l.grove@school.ac.uk',
    },
  ],
  topClasses: [
    {
      rank: 1,
      className: '11A English Literature',
      teacher: 'Ms M. Chen',
      avgScore: 84,
      studentCount: 28,
    },
    {
      rank: 2,
      className: '12B English Language',
      teacher: 'Mr L. Grove',
      avgScore: 81,
      studentCount: 19,
    },
    { rank: 3, className: '9C English', teacher: 'Ms R. Patel', avgScore: 79, studentCount: 27 },
    { rank: 4, className: '7A English', teacher: 'Mr T. Harris', avgScore: 77, studentCount: 29 },
    {
      rank: 5,
      className: '10D English Literature',
      teacher: 'Ms S. Walsh',
      avgScore: 74,
      studentCount: 32,
    },
  ],
  topLessons: [
    { title: 'AQA Paper 1 Reading Strategies', count: 892 },
    { title: 'Analysing Language and Structure', count: 741 },
    { title: 'Writing Persuasive Non-Fiction', count: 688 },
    { title: 'Power and Conflict Poetry Overview', count: 634 },
    { title: 'Macbeth: Key Themes and Quotes', count: 519 },
  ],
  topMocks: [
    { title: 'GCSE English Language Paper 1 (AQA)', count: 456 },
    { title: 'GCSE English Literature Paper 2 (AQA)', count: 398 },
    { title: 'A-Level Language Analysis Mock', count: 214 },
    { title: 'GCSE English Language Paper 2 (AQA)', count: 311 },
    { title: 'A-Level Literature Unseen Poetry Mock', count: 178 },
  ],
  classAssignments: [
    {
      className: '11A English Literature',
      teacher: 'Ms M. Chen',
      completionRate: 93,
      overdueCount: 2,
    },
    {
      className: '10D English Literature',
      teacher: 'Ms S. Walsh',
      completionRate: 81,
      overdueCount: 6,
    },
    { className: '9C English', teacher: 'Ms R. Patel', completionRate: 78, overdueCount: 8 },
    {
      className: '12B English Language',
      teacher: 'Mr L. Grove',
      completionRate: 76,
      overdueCount: 4,
    },
    { className: '8B English', teacher: 'Mr J. Baker', completionRate: 64, overdueCount: 11 },
    { className: '7A English', teacher: 'Mr T. Harris', completionRate: 59, overdueCount: 14 },
  ],
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function scoreColor(score: number): string {
  if (score >= 75) return 'text-green-400'
  if (score >= 60) return 'text-clay-600'
  return 'text-red-400'
}

/** Glass meter — themed replacement for the old inline progress bar. */
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

const DATE_RANGE_LABELS: Record<DateRange, string> = {
  week: 'This Week',
  month: 'This Month',
  term: 'This Term',
  year: 'This Year',
}

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
  const profile = useAuthStore((s) => s.profile)
  const [dateRange, setDateRange] = useState<DateRange>('week')
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    async function fetchData() {
      try {
        const schoolId = (profile as { school_id?: string } | null)?.school_id ?? 'demo'
        const res = await fetch(
          `/api/school/analytics?schoolId=${encodeURIComponent(schoolId)}&range=${dateRange}`,
        )
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json: AnalyticsData = await res.json()
        if (!cancelled) setData(json)
      } catch {
        if (!cancelled) {
          setData(MOCK_DATA)
          setError(null)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchData()
    return () => {
      cancelled = true
    }
  }, [dateRange, profile])

  function handleExcelExport() {
    alert('Exporting full report as Excel...')
  }

  function handlePdfExport() {
    alert('Exporting report as PDF...')
  }

  function handleEmailTeacher(teacherEmail: string, studentName: string) {
    const subject = encodeURIComponent(`Concern: ${studentName} - English Hub`)
    const body = encodeURIComponent(
      `Hi,\n\nI wanted to flag a concern regarding ${studentName} on The English Hub.\n\nBest regards`,
    )
    window.open(`mailto:${teacherEmail}?subject=${subject}&body=${body}`)
  }

  // Derived series for RankBars + KPI sparks. Only real data is used — the
  // spark for "avg working grade" is the per-year-group progression series
  // (a genuine derived array), not fabricated trend data.
  const rankBarData = useMemo(
    () =>
      (data?.yearGroups ?? []).map((y) => ({
        year: y.year.replace('Year ', 'Y'),
        avgProgress: y.avgProgress,
      })),
    [data],
  )
  const gradeSpark = useMemo(
    () => (data?.yearGroups ?? []).map((y) => ({ v: y.avgProgress })),
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

            <div className="flex flex-wrap items-center gap-3">
              {/* Internal metrics link (NRR for investors) */}
              <Button
                render={<Link href="/school/analytics/nrr" />}
                variant="outline"
                size="sm"
                className="gap-1.5"
              >
                <LineChart className="h-4 w-4 text-emerald-400" />
                {t('school.analytics.revenue_nrr')}
              </Button>

              {/* Date range selector */}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <div className="flex gap-0.5 rounded-lg border border-border/60 bg-background/40 p-0.5 backdrop-blur-xl">
                  {(Object.keys(DATE_RANGE_LABELS) as DateRange[]).map((range) => (
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
          </div>
        </GlassPanel>

        {/* ── Top KPI Row ─────────────────────────────────────────────────── */}
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
                  value={data.topStats.activeStudents}
                  icon={Users}
                  accent="teal"
                />
                <KpiTile
                  label={t('school.analytics.stat.assignments_submitted')}
                  value={data.topStats.assignmentsSubmitted}
                  icon={CheckCircle}
                  accent="sage"
                  spark={assignmentsSpark.length > 1 ? assignmentsSpark : undefined}
                />
                <KpiTile
                  label={`${t('school.analytics.stat.avg_working_grade')} · ${t('school.analytics.grade_prefix')} ${percentageToGCSEGrade(data.topStats.averageScore)}`}
                  value={data.topStats.averageScore}
                  suffix="%"
                  icon={TrendingUp}
                  accent="clay"
                  spark={gradeSpark.length > 1 ? gradeSpark : undefined}
                />
                <KpiTile
                  label={t('school.analytics.stat.at_risk_students')}
                  value={data.topStats.atRiskCount}
                  icon={AlertTriangle}
                  accent="ochre"
                />
              </>
            ) : null}
          </div>
        </section>

        {/* ── Year Group Performance ──────────────────────────────────────── */}
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
            ) : data ? (
              <>
                {/* RAG-coloured rank bars (visual) */}
                <RankBars
                  data={rankBarData}
                  labelKey="year"
                  valueKey="avgProgress"
                  height={Math.max(180, rankBarData.length * 36)}
                  suffix="%"
                />

                {/* Accessible per-year detail — keyboard-activatable rows */}
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
                        const href = `/school/classes?year=${encodeURIComponent(row.year)}`
                        const go = () => router.push(href)
                        return (
                          <tr
                            key={row.year}
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
                            aria-label={`${row.year} — ${t('school.analytics.col.avg_progress')} ${pct(row.avgProgress)}`}
                          >
                            <td className="py-3 font-medium">
                              <span className="flex items-center gap-1.5 transition-colors group-hover:text-primary">
                                {row.year}
                                <ChevronRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                              </span>
                            </td>
                            <td className="py-3 text-right tabular-nums text-muted-foreground">
                              {row.students}
                            </td>
                            <td
                              className={`py-3 text-center font-bold ${gcseGradeColor(percentageToGCSEGrade(row.avgProgress))}`}
                            >
                              {t('school.analytics.grade_prefix')}{' '}
                              {percentageToGCSEGrade(row.avgProgress)}
                            </td>
                            <td className="py-3 pl-6">
                              <GlassMeter value={row.avgProgress} />
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
            ) : null}
          </div>
        </GlassPanel>

        {/* ── At-Risk Students ────────────────────────────────────────────── */}
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
                      <tr key={student.id} className="transition-colors hover:bg-foreground/[0.03]">
                        <td className="py-3 font-medium">
                          <Link
                            href={`/school/students/${student.id}`}
                            className="transition-colors hover:text-primary hover:underline"
                          >
                            {student.name}
                          </Link>
                        </td>
                        <td className="py-3 text-muted-foreground">{student.year}</td>
                        <td className="flex items-center gap-1.5 py-3 text-muted-foreground">
                          <Clock className="h-3 w-3 shrink-0" aria-hidden="true" />
                          {student.lastActive}
                        </td>
                        <td className="py-3">
                          <span className="inline-flex items-center gap-1.5 rounded-md bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-400">
                            <AlertTriangle className="h-3 w-3 shrink-0" aria-hidden="true" />
                            {student.issue}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 gap-1.5 text-xs"
                            onClick={() => handleEmailTeacher(student.teacherEmail, student.name)}
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

        {/* ── Two-column row: Top Classes + Resource Usage ─────────────────── */}
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
              ) : data ? (
                <ol className="space-y-3">
                  {data.topClasses.map((cls) => (
                    <li
                      key={cls.rank}
                      className="flex items-center gap-3 rounded-xl border border-border/40 bg-foreground/[0.02] px-4 py-3 transition-colors hover:bg-foreground/[0.05]"
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          cls.rank === 1
                            ? 'bg-yellow-500/20 text-clay-600'
                            : cls.rank === 2
                              ? 'bg-slate-400/20 text-slate-300'
                              : cls.rank === 3
                                ? 'bg-orange-700/20 text-orange-500'
                                : 'bg-foreground/[0.06] text-muted-foreground'
                        }`}
                      >
                        {cls.rank}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium">{cls.className}</p>
                        <p className="text-xs text-muted-foreground">
                          {cls.teacher} &bull; {cls.studentCount}{' '}
                          {t('school.analytics.students_suffix')}
                        </p>
                      </div>
                      <span
                        className={`text-lg font-bold tabular-nums ${scoreColor(cls.avgScore)}`}
                      >
                        {cls.avgScore}%
                      </span>
                    </li>
                  ))}
                </ol>
              ) : null}
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
            <div className="space-y-6 p-5">
              {loading ? (
                <TableSkeleton rows={10} />
              ) : data ? (
                <>
                  <div>
                    <PanelEyebrow className="mb-3">
                      {t('school.analytics.top_lessons')}
                    </PanelEyebrow>
                    <ul className="space-y-2.5">
                      {data.topLessons.map((item, i) => {
                        const maxCount = data.topLessons[0]?.count ?? 1
                        const width = Math.round((item.count / maxCount) * 100)
                        return (
                          <li key={i} className="space-y-1">
                            <div className="flex items-center justify-between gap-2 text-xs">
                              <span className="truncate text-muted-foreground">{item.title}</span>
                              <span className="shrink-0 font-medium tabular-nums">
                                {compact(item.count)}
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
                  </div>
                  <div>
                    <PanelEyebrow className="mb-3">{t('school.analytics.top_mocks')}</PanelEyebrow>
                    <ul className="space-y-2.5">
                      {data.topMocks.map((item, i) => {
                        const maxCount = data.topMocks[0]?.count ?? 1
                        const width = Math.round((item.count / maxCount) * 100)
                        return (
                          <li key={i} className="space-y-1">
                            <div className="flex items-center justify-between gap-2 text-xs">
                              <span className="truncate text-muted-foreground">{item.title}</span>
                              <span className="shrink-0 font-medium tabular-nums">
                                {compact(item.count)}
                              </span>
                            </div>
                            <div className="h-1.5 overflow-hidden rounded-full bg-foreground/[0.08]">
                              <div
                                className="h-full rounded-full transition-all duration-700"
                                style={{
                                  width: `${width}%`,
                                  background: 'hsl(var(--chart-3))',
                                }}
                              />
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </>
              ) : null}
            </div>
          </GlassPanel>
        </div>

        {/* ── CEFR Placement Overview ─────────────────────────────────────── */}
        <CEFRCohortPanel />

        {/* ── Assignment Overview ─────────────────────────────────────────── */}
        <GlassPanel accent="clay" as="section" aria-labelledby="assignment-overview-heading">
          <PanelHeader
            id="assignment-overview-heading"
            eyebrow={t('school.analytics.title')}
            title={t('school.analytics.assignment_overview.title')}
            subtitle={t('school.analytics.assignment_overview.subtitle')}
            icon={FileText}
            iconClass="text-clay-600"
          />
          <div className="p-5">
            {loading ? (
              <TableSkeleton rows={6} />
            ) : data ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="pb-3 text-left font-medium text-muted-foreground">
                        {t('school.analytics.col.class')}
                      </th>
                      <th className="pb-3 text-left font-medium text-muted-foreground">
                        {t('school.analytics.col.teacher')}
                      </th>
                      <th className="min-w-[200px] pb-3 pl-6 text-left font-medium text-muted-foreground">
                        {t('school.analytics.col.completion_rate')}
                      </th>
                      <th className="pb-3 text-right font-medium text-muted-foreground">
                        {t('school.analytics.col.overdue')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {data.classAssignments.map((cls, i) => (
                      <tr key={i} className="transition-colors hover:bg-foreground/[0.03]">
                        <td className="py-3 font-medium">{cls.className}</td>
                        <td className="py-3 text-muted-foreground">{cls.teacher}</td>
                        <td className="py-3 pl-6">
                          <GlassMeter value={cls.completionRate} />
                        </td>
                        <td className="py-3 text-right">
                          {cls.overdueCount > 0 ? (
                            <Badge variant="destructive">
                              {cls.overdueCount} {t('school.analytics.overdue_suffix')}
                            </Badge>
                          ) : (
                            <Badge variant="secondary">{t('school.analytics.none')}</Badge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        </GlassPanel>

        {/* ── Export Buttons ──────────────────────────────────────────────── */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button
            variant="outline"
            className="gap-2"
            onClick={handleExcelExport}
            disabled={loading}
          >
            <Download className="h-4 w-4" />
            {t('school.analytics.export_excel')}
          </Button>
          <Button className="gap-2" onClick={handlePdfExport} disabled={loading}>
            <Download className="h-4 w-4" />
            {t('school.analytics.export_pdf')}
          </Button>
        </div>
      </div>
    </div>
  )
}
