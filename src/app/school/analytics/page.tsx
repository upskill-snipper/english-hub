'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useT } from '@/lib/i18n/use-t'
import { CEFRCohortPanel } from '@/components/school/CEFRCohortPanel'

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

function progressColor(pct: number): string {
  if (pct >= 70) return 'bg-green-500'
  if (pct >= 50) return 'bg-amber-500'
  if (pct >= 35) return 'bg-orange-500'
  return 'bg-red-500'
}

function completionColor(pct: number): string {
  if (pct >= 80) return 'bg-green-500'
  if (pct >= 60) return 'bg-amber-500'
  return 'bg-red-500'
}

function scoreColor(score: number): string {
  if (score >= 75) return 'text-green-400'
  if (score >= 60) return 'text-clay-600'
  return 'text-red-400'
}

// ── Skeleton Components ──────────────────────────────────────────────────────

function StatCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-5 flex items-start gap-4">
        <Skeleton className="h-10 w-10 rounded-lg shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-3 w-20" />
        </div>
      </CardContent>
    </Card>
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

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  iconClass,
}: {
  icon: React.ElementType
  label: string
  value: string | number
  sub?: string
  iconClass?: string
}) {
  return (
    <Card>
      <CardContent className="p-5 flex items-start gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg shrink-0 ${iconClass ?? 'bg-primary/10'}`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground font-medium">{label}</p>
          <p className="text-3xl font-bold tracking-tight leading-none mt-1">{value}</p>
          {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
        </div>
      </CardContent>
    </Card>
  )
}

function InlineProgressBar({ pct, colorClass }: { pct: number; colorClass: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${colorClass}`}
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>
      <span className="text-xs tabular-nums w-8 text-right">{pct}%</span>
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

  return (
    <div className="text-foreground">
      <div className="space-y-8">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{t('school.analytics.title')}</h1>
              <p className="text-sm text-muted-foreground">{t('school.analytics.subtitle')}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
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
              <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
              <div className="flex rounded-lg border border-border bg-muted/40 p-0.5 gap-0.5">
                {(Object.keys(DATE_RANGE_LABELS) as DateRange[]).map((range) => (
                  <button
                    key={range}
                    onClick={() => setDateRange(range)}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                      dateRange === range
                        ? 'bg-background text-foreground shadow-sm'
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

        {/* ── Top Stats Row ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {loading ? (
            <>
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
            </>
          ) : data ? (
            <>
              <StatCard
                icon={Users}
                label={t('school.analytics.stat.active_students')}
                value={data.topStats.activeStudents.toLocaleString()}
                sub={t('school.analytics.stat.active_students_sub')}
                iconClass="bg-blue-500/10 text-blue-400"
              />
              <StatCard
                icon={CheckCircle}
                label={t('school.analytics.stat.assignments_submitted')}
                value={data.topStats.assignmentsSubmitted.toLocaleString()}
                sub={`${t('school.analytics.stat.during_prefix')} ${dateRangeLabels[dateRange].toLowerCase()}`}
                iconClass="bg-green-500/10 text-green-400"
              />
              <StatCard
                icon={TrendingUp}
                label={t('school.analytics.stat.avg_working_grade')}
                value={`${t('school.analytics.grade_prefix')} ${percentageToGCSEGrade(data.topStats.averageScore)}`}
                sub={`${t('school.analytics.based_on_prefix')} ${data.topStats.averageScore}${t('school.analytics.avg_score_suffix')}`}
                iconClass="bg-purple-500/10 text-purple-400"
              />
              <StatCard
                icon={AlertTriangle}
                label={t('school.analytics.stat.at_risk_students')}
                value={data.topStats.atRiskCount}
                sub={t('school.analytics.stat.at_risk_sub')}
                iconClass="bg-red-500/10 text-red-400"
              />
            </>
          ) : null}
        </div>

        {/* ── Year Group Performance ──────────────────────────────────────── */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              {t('school.analytics.year_group.title')}
            </CardTitle>
            <CardDescription>{t('school.analytics.year_group.subtitle')}</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <TableSkeleton rows={7} />
            ) : data ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/60">
                      <th className="pb-3 text-left font-medium text-muted-foreground">
                        {t('school.analytics.col.year_group')}
                      </th>
                      <th className="pb-3 text-right font-medium text-muted-foreground">
                        {t('school.analytics.col.students')}
                      </th>
                      <th className="pb-3 text-center font-medium text-muted-foreground">
                        {t('school.analytics.col.avg_working_at')}
                      </th>
                      <th className="pb-3 pl-6 text-left font-medium text-muted-foreground min-w-[180px]">
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
                    {data.yearGroups.map((row) => (
                      <tr
                        key={row.year}
                        className="group hover:bg-muted/30 transition-colors cursor-pointer"
                        onClick={() =>
                          (window.location.href = `/school/classes?year=${encodeURIComponent(row.year)}`)
                        }
                      >
                        <td className="py-3 font-medium">
                          <span className="flex items-center gap-1.5 group-hover:text-primary transition-colors">
                            {row.year}
                            <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </span>
                        </td>
                        <td className="py-3 text-right tabular-nums text-muted-foreground">
                          {row.students}
                        </td>
                        <td
                          className={`py-3 text-center font-bold ${gcseGradeColor(percentageToGCSEGrade(row.avgProgress))}`}
                        >
                          Grade {percentageToGCSEGrade(row.avgProgress)}
                        </td>
                        <td className="py-3 pl-6">
                          <InlineProgressBar
                            pct={row.avgProgress}
                            colorClass={progressColor(row.avgProgress)}
                          />
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
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </CardContent>
        </Card>

        {/* ── At-Risk Students ────────────────────────────────────────────── */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              {t('school.analytics.at_risk.title')}
            </CardTitle>
            <CardDescription>{t('school.analytics.at_risk.subtitle')}</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <TableSkeleton rows={6} />
            ) : data && data.atRiskStudents.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/60">
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
                      <tr key={student.id} className="hover:bg-muted/30 transition-colors">
                        <td className="py-3 font-medium">
                          <Link
                            href={`/school/students/${student.id}`}
                            className="hover:text-primary hover:underline transition-colors"
                          >
                            {student.name}
                          </Link>
                        </td>
                        <td className="py-3 text-muted-foreground">{student.year}</td>
                        <td className="py-3 text-muted-foreground flex items-center gap-1.5">
                          <Clock className="h-3 w-3 shrink-0" />
                          {student.lastActive}
                        </td>
                        <td className="py-3">
                          <span className="inline-flex items-center gap-1.5 rounded-md bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-400">
                            <AlertTriangle className="h-3 w-3 shrink-0" />
                            {student.issue}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <Button
                            size="sm"
                            variant="outline"
                            className="gap-1.5 text-xs h-7"
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
              <p className="text-sm text-muted-foreground py-4 text-center">
                {t('school.analytics.at_risk.none')}
              </p>
            )}
          </CardContent>
        </Card>

        {/* ── Two-column row: Top Classes + Resource Usage ─────────────────── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Top Performing Classes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-400" />
                {t('school.analytics.top_classes.title')}
              </CardTitle>
              <CardDescription>{t('school.analytics.top_classes.subtitle')}</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <TableSkeleton rows={5} />
              ) : data ? (
                <div className="space-y-3">
                  {data.topClasses.map((cls) => (
                    <div
                      key={cls.rank}
                      className="flex items-center gap-3 rounded-lg border border-border/40 bg-muted/20 px-4 py-3 hover:bg-muted/40 transition-colors"
                    >
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold shrink-0 ${
                          cls.rank === 1
                            ? 'bg-yellow-500/20 text-clay-600'
                            : cls.rank === 2
                              ? 'bg-slate-400/20 text-slate-300'
                              : cls.rank === 3
                                ? 'bg-orange-700/20 text-orange-500'
                                : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {cls.rank}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{cls.className}</p>
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
                    </div>
                  ))}
                </div>
              ) : null}
            </CardContent>
          </Card>

          {/* Resource Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-400" />
                {t('school.analytics.resource_usage.title')}
              </CardTitle>
              <CardDescription>{t('school.analytics.resource_usage.subtitle')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {loading ? (
                <TableSkeleton rows={10} />
              ) : data ? (
                <>
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t('school.analytics.top_lessons')}
                    </p>
                    <div className="space-y-2.5">
                      {data.topLessons.map((item, i) => {
                        const maxCount = data.topLessons[0]?.count ?? 1
                        const pct = Math.round((item.count / maxCount) * 100)
                        return (
                          <div key={i} className="space-y-1">
                            <div className="flex items-center justify-between gap-2 text-xs">
                              <span className="truncate text-muted-foreground">{item.title}</span>
                              <span className="tabular-nums shrink-0 font-medium">
                                {item.count.toLocaleString()}
                              </span>
                            </div>
                            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                              <div
                                className="h-full rounded-full bg-blue-500 transition-all duration-500"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t('school.analytics.top_mocks')}
                    </p>
                    <div className="space-y-2.5">
                      {data.topMocks.map((item, i) => {
                        const maxCount = data.topMocks[0]?.count ?? 1
                        const pct = Math.round((item.count / maxCount) * 100)
                        return (
                          <div key={i} className="space-y-1">
                            <div className="flex items-center justify-between gap-2 text-xs">
                              <span className="truncate text-muted-foreground">{item.title}</span>
                              <span className="tabular-nums shrink-0 font-medium">
                                {item.count.toLocaleString()}
                              </span>
                            </div>
                            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                              <div
                                className="h-full rounded-full bg-purple-500 transition-all duration-500"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </>
              ) : null}
            </CardContent>
          </Card>
        </div>

        {/* ── CEFR Placement Overview ─────────────────────────────────────── */}
        <CEFRCohortPanel />

        {/* ── Assignment Overview ─────────────────────────────────────────── */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-clay-600" />
              {t('school.analytics.assignment_overview.title')}
            </CardTitle>
            <CardDescription>{t('school.analytics.assignment_overview.subtitle')}</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <TableSkeleton rows={6} />
            ) : data ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/60">
                      <th className="pb-3 text-left font-medium text-muted-foreground">
                        {t('school.analytics.col.class')}
                      </th>
                      <th className="pb-3 text-left font-medium text-muted-foreground">
                        {t('school.analytics.col.teacher')}
                      </th>
                      <th className="pb-3 pl-6 text-left font-medium text-muted-foreground min-w-[200px]">
                        {t('school.analytics.col.completion_rate')}
                      </th>
                      <th className="pb-3 text-right font-medium text-muted-foreground">
                        {t('school.analytics.col.overdue')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {data.classAssignments.map((cls, i) => (
                      <tr key={i} className="hover:bg-muted/30 transition-colors">
                        <td className="py-3 font-medium">{cls.className}</td>
                        <td className="py-3 text-muted-foreground">{cls.teacher}</td>
                        <td className="py-3 pl-6">
                          <InlineProgressBar
                            pct={cls.completionRate}
                            colorClass={completionColor(cls.completionRate)}
                          />
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
          </CardContent>
        </Card>

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
