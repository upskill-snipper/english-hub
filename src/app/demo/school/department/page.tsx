'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Users,
  TrendingUp,
  TrendingDown,
  Target,
  AlertTriangle,
  Download,
  ArrowUp,
  ArrowDown,
  Minus,
  BookOpen,
  GraduationCap,
  BarChart3,
  Lightbulb,
  ArrowUpDown,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import {
  DEMO_SCHOOL,
  DEMO_TEACHERS,
  DEMO_CLASSES,
  DEMO_YEAR_GROUPS,
  DEMO_STUDENTS,
} from '@/data/demo-data'
import DemoBanner from '@/components/demo/DemoBanner'
import { openPrintableDocument } from '@/lib/generate-download'
import { percentageToGCSEGrade } from '@/lib/grades'

// ── Constants ──────────────────────────────────────────────────────────────

const DEPT_TARGET = 72
const DEPT_AVG = 68

// ── Expanded teacher data for 18 teachers ──────────────────────────────────

interface DeptTeacher {
  id: string
  name: string
  classes: number
  students: number
  avgScore: number
  completionRate: number
  atRisk: number
}

const DEPT_TEACHERS: DeptTeacher[] = [
  ...DEMO_TEACHERS.map((t) => {
    const tc = DEMO_CLASSES.filter((c) => c.teacherId === t.id)
    const avgScore =
      tc.length > 0 ? Math.round(tc.reduce((a, c) => a + c.avgScore, 0) / tc.length) : 0
    const completionRate =
      tc.length > 0 ? Math.round(tc.reduce((a, c) => a + c.completionRate, 0) / tc.length) : 0
    const atRisk = DEMO_STUDENTS.filter(
      (s) => s.teacherName === t.name && s.status === 'at-risk',
    ).length
    return {
      id: t.id,
      name: t.name,
      classes: tc.length,
      students: t.studentCount,
      avgScore,
      completionRate,
      atRisk: atRisk || Math.round(t.studentCount * 0.08),
    }
  }),
  {
    id: 't10',
    name: 'Mr. Henderson',
    classes: 2,
    students: 27,
    avgScore: 73,
    completionRate: 71,
    atRisk: 2,
  },
  {
    id: 't11',
    name: 'Ms. Reeves',
    classes: 2,
    students: 30,
    avgScore: 66,
    completionRate: 63,
    atRisk: 4,
  },
  {
    id: 't12',
    name: 'Mrs. Gallagher',
    classes: 2,
    students: 25,
    avgScore: 70,
    completionRate: 69,
    atRisk: 3,
  },
  {
    id: 't13',
    name: 'Mr. Okonkwo',
    classes: 1,
    students: 28,
    avgScore: 75,
    completionRate: 74,
    atRisk: 1,
  },
  {
    id: 't14',
    name: 'Dr. Mahmood',
    classes: 2,
    students: 26,
    avgScore: 64,
    completionRate: 60,
    atRisk: 5,
  },
  {
    id: 't15',
    name: 'Ms. Fletcher',
    classes: 1,
    students: 24,
    avgScore: 71,
    completionRate: 72,
    atRisk: 2,
  },
  {
    id: 't16',
    name: 'Mr. Grant',
    classes: 2,
    students: 29,
    avgScore: 67,
    completionRate: 65,
    atRisk: 3,
  },
  {
    id: 't17',
    name: 'Mrs. Sullivan',
    classes: 1,
    students: 22,
    avgScore: 79,
    completionRate: 80,
    atRisk: 1,
  },
  {
    id: 't18',
    name: 'Ms. Ingram',
    classes: 2,
    students: 31,
    avgScore: 63,
    completionRate: 57,
    atRisk: 5,
  },
]

// ── All 24 classes ranked ──────────────────────────────────────────────────

interface DeptClass {
  id: string
  name: string
  teacher: string
  yearGroup: string
  avgScore: number
}

const ALL_CLASSES: DeptClass[] = [
  ...DEMO_CLASSES.map((c) => ({
    id: c.id,
    name: c.name,
    teacher: c.teacher,
    yearGroup: c.yearGroup,
    avgScore: c.avgScore,
  })),
  {
    id: 'dc10',
    name: '10C English Lang',
    teacher: 'Mr. Henderson',
    yearGroup: 'Year 10',
    avgScore: 74,
  },
  { id: 'dc11', name: '8B English', teacher: 'Mr. Henderson', yearGroup: 'Year 8', avgScore: 71 },
  { id: 'dc12', name: '9B English Lang', teacher: 'Ms. Reeves', yearGroup: 'Year 9', avgScore: 64 },
  { id: 'dc13', name: '7B English', teacher: 'Ms. Reeves', yearGroup: 'Year 7', avgScore: 68 },
  {
    id: 'dc14',
    name: '10D English Lit',
    teacher: 'Mrs. Gallagher',
    yearGroup: 'Year 10',
    avgScore: 70,
  },
  {
    id: 'dc15',
    name: '11C English Lit',
    teacher: 'Mrs. Gallagher',
    yearGroup: 'Year 11',
    avgScore: 69,
  },
  {
    id: 'dc16',
    name: '10E English Lang',
    teacher: 'Mr. Okonkwo',
    yearGroup: 'Year 10',
    avgScore: 75,
  },
  { id: 'dc17', name: '9D English Lit', teacher: 'Dr. Mahmood', yearGroup: 'Year 9', avgScore: 63 },
  { id: 'dc18', name: '8C English', teacher: 'Dr. Mahmood', yearGroup: 'Year 8', avgScore: 65 },
  {
    id: 'dc19',
    name: '11D English Lang',
    teacher: 'Ms. Fletcher',
    yearGroup: 'Year 11',
    avgScore: 71,
  },
  { id: 'dc20', name: '7C English', teacher: 'Mr. Grant', yearGroup: 'Year 7', avgScore: 66 },
  { id: 'dc21', name: '8D English', teacher: 'Mr. Grant', yearGroup: 'Year 8', avgScore: 68 },
  {
    id: 'dc22',
    name: '11E English Lang',
    teacher: 'Mrs. Sullivan',
    yearGroup: 'Year 11',
    avgScore: 79,
  },
  { id: 'dc23', name: '7D English', teacher: 'Ms. Ingram', yearGroup: 'Year 7', avgScore: 60 },
  { id: 'dc24', name: '9E English', teacher: 'Ms. Ingram', yearGroup: 'Year 9', avgScore: 66 },
].sort((a, b) => b.avgScore - a.avgScore)

// ── Year group trend data ──────────────────────────────────────────────────

interface YearTrend {
  year: string
  current: number
  change: number
}

const YEAR_TRENDS: YearTrend[] = [
  { year: 'Y7', current: 61, change: +3 },
  { year: 'Y8', current: 65, change: +2 },
  { year: 'Y9', current: 64, change: -1 },
  { year: 'Y10', current: 72, change: +4 },
  { year: 'Y11', current: 78, change: +5 },
  { year: 'Y12', current: 74, change: +1 },
  { year: 'Y13', current: 80, change: +3 },
]

// ── CPD recommendations ────────────────────────────────────────────────────

interface CpdRecommendation {
  teacher: string
  recommendation: string
}

const CPD_RECOMMENDATIONS: CpdRecommendation[] = [
  {
    teacher: 'Ms. Thompson',
    recommendation: 'Consider collaborative planning for Year 10 poetry comparison essays',
  },
  {
    teacher: 'Mrs. Clarke',
    recommendation: 'Attend AQA moderation training to improve Year 9 assessment accuracy',
  },
  {
    teacher: 'Mr. Roberts',
    recommendation: "Observe Ms. Khan's structured revision sessions for KS3 engagement strategies",
  },
  {
    teacher: 'Ms. Williams',
    recommendation: 'Pair with Mr. Patel for NQT mentoring on Year 7 literacy scaffolding',
  },
  {
    teacher: 'Mrs. Okafor',
    recommendation: 'Pilot formative assessment toolkit in Year 9 to close the gap to target',
  },
  {
    teacher: 'Ms. Reeves',
    recommendation: 'Focus on differentiated writing frames for lower-attaining Year 9 students',
  },
  {
    teacher: 'Dr. Mahmood',
    recommendation: 'Introduce retrieval practice starters to boost Year 9 retention rates',
  },
  {
    teacher: 'Ms. Ingram',
    recommendation: 'Consider collaborative planning for Year 7 creative writing with Mr. Grant',
  },
  {
    teacher: 'Mr. Grant',
    recommendation:
      'Attend KS3 literacy conference to develop Year 7 reading comprehension strategies',
  },
]

// ── Helpers ────────────────────────────────────────────────────────────────

type SortKey = 'name' | 'classes' | 'students' | 'avgScore' | 'completionRate' | 'atRisk'

function scoreColor(score: number): string {
  if (score >= DEPT_AVG + 5) return 'text-primary'
  if (score >= DEPT_AVG - 5) return 'text-amber-700 dark:text-amber-300'
  return 'text-red-700 dark:text-red-300'
}

function scoreBg(score: number): string {
  if (score >= DEPT_AVG + 5) return 'bg-primary/10'
  if (score >= DEPT_AVG - 5) return 'bg-amber-500/10'
  return 'bg-red-500/10'
}

function rankBg(rank: number, total: number): string {
  if (rank <= 5) return 'bg-primary/10 border-primary/20'
  if (rank > total - 5) return 'bg-red-500/10 border-red-500/20'
  return 'bg-muted/50 border-border/40'
}

function rankText(rank: number, total: number): string {
  if (rank <= 5) return 'text-primary'
  if (rank > total - 5) return 'text-red-700 dark:text-red-300'
  return 'text-muted-foreground'
}

function trendIcon(change: number) {
  if (change > 0) return <ArrowUp className="inline h-4 w-4 text-primary" />
  if (change < 0) return <ArrowDown className="inline h-4 w-4 text-red-700 dark:text-red-300" />
  return <Minus className="inline h-4 w-4 text-muted-foreground" />
}

function trendColor(change: number): string {
  if (change > 0) return 'text-primary'
  if (change < 0) return 'text-red-700 dark:text-red-300'
  return 'text-muted-foreground'
}

// ── Workload thresholds ────────────────────────────────────────────────────

const AVG_STUDENTS_PER_TEACHER = Math.round(
  DEPT_TEACHERS.reduce((a, t) => a + t.students, 0) / DEPT_TEACHERS.length,
)
const OVERLOAD_THRESHOLD = AVG_STUDENTS_PER_TEACHER + 5

// ── Page ───────────────────────────────────────────────────────────────────

export default function DepartmentPage() {
  const [sortKey, setSortKey] = useState<SortKey>('avgScore')
  const [sortAsc, setSortAsc] = useState(false)

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortAsc(!sortAsc)
    } else {
      setSortKey(key)
      setSortAsc(false)
    }
  }

  const sortedTeachers = [...DEPT_TEACHERS].sort((a, b) => {
    const aVal = a[sortKey]
    const bVal = b[sortKey]
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sortAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
    }
    return sortAsc ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number)
  })

  function handleExport() {
    const e = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const body = `
      <h2>Department Summary</h2>
      <table>
        <tr><th>Teachers</th><td>${DEPT_TEACHERS.length}</td><th>Department Avg</th><td>${DEPT_AVG}%</td></tr>
        <tr><th>Target</th><td>${DEPT_TARGET}%</td><th>Gap</th><td>${DEPT_AVG >= DEPT_TARGET ? 'On target' : `${DEPT_TARGET - DEPT_AVG}% below`}</td></tr>
      </table>
      <h2>Teacher Performance</h2>
      <table>
        <tr><th>Teacher</th><th>Classes</th><th>Students</th><th>Avg Score</th><th>Completion</th></tr>
        ${sortedTeachers.map((t) => `<tr><td>${e(t.name)}</td><td>${t.classes}</td><td>${t.students}</td><td>${t.avgScore}%</td><td>${t.completionRate}%</td></tr>`).join('')}
      </table>`
    openPrintableDocument('Department Overview Report', body, {
      subtitle: `${DEMO_SCHOOL.name} | English Department | Demo Data`,
    })
  }

  const gap = DEPT_AVG - DEPT_TARGET

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 1. Demo banner */}
      <DemoBanner message="You are viewing a demo department dashboard with sample data." />

      <div className="px-4 py-8 sm:px-6 lg:px-8">
        {/* 2. Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Department Overview</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {DEMO_SCHOOL.name} &middot; English Department &middot; {DEPT_TEACHERS.length}{' '}
              Teachers
            </p>
          </div>
          <Button
            onClick={handleExport}
            variant="outline"
            className="gap-2 border-border text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <Download className="h-4 w-4" />
            Download Department Report
          </Button>
        </div>

        {/* 3. Department KPIs */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-border/60 bg-card">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Total English Teachers
                  </p>
                  <p className="mt-1 text-3xl font-bold">{DEPT_TEACHERS.length}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Average Student Score
                  </p>
                  <p className="mt-1 text-3xl font-bold">
                    {DEPT_AVG}%{' '}
                    <span className="text-lg font-normal text-muted-foreground">
                      (Grade {percentageToGCSEGrade(DEPT_AVG)})
                    </span>
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Department Target
                  </p>
                  <p className="mt-1 text-3xl font-bold">{DEPT_TARGET}%</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Gap to Target
                  </p>
                  <p className="mt-1 text-3xl font-bold text-amber-700 dark:text-amber-300">
                    {gap}%
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                  <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 4. Teacher Comparison Table */}
        <Card className="mb-8 border-border/60 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="h-5 w-5 text-primary" />
              Teacher Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60 text-left text-xs uppercase tracking-wider text-muted-foreground">
                    {(
                      [
                        ['name', 'Teacher'],
                        ['classes', 'Classes'],
                        ['students', 'Students'],
                        ['avgScore', 'Avg Score'],
                        ['completionRate', 'Completion'],
                        ['atRisk', 'At-Risk'],
                      ] as [SortKey, string][]
                    ).map(([key, label]) => (
                      <th
                        key={key}
                        className="cursor-pointer px-3 py-3 hover:text-muted-foreground transition-colors select-none"
                        onClick={() => handleSort(key)}
                      >
                        <span className="inline-flex items-center gap-1">
                          {label}
                          <ArrowUpDown className="h-3 w-3" />
                          {sortKey === key && (
                            <span className="text-primary">{sortAsc ? '^' : 'v'}</span>
                          )}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {sortedTeachers.map((t) => (
                    <tr key={t.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-3 py-3 font-medium">{t.name}</td>
                      <td className="px-3 py-3 text-muted-foreground">{t.classes}</td>
                      <td className="px-3 py-3 text-muted-foreground">{t.students}</td>
                      <td className={`px-3 py-3 font-semibold ${scoreColor(t.avgScore)}`}>
                        {t.avgScore}%{' '}
                        <span className="text-muted-foreground text-xs font-normal">
                          (G{percentageToGCSEGrade(t.avgScore)})
                        </span>
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-16 rounded-full bg-muted">
                            <div
                              className={`h-1.5 rounded-full ${
                                t.completionRate >= 75
                                  ? 'bg-teal-700'
                                  : t.completionRate >= 60
                                    ? 'bg-amber-500'
                                    : 'bg-red-500'
                              }`}
                              style={{ width: `${t.completionRate}%` }}
                            />
                          </div>
                          <span className="text-muted-foreground">{t.completionRate}%</span>
                        </div>
                      </td>
                      <td className="px-3 py-3">
                        {t.atRisk > 0 ? (
                          <Badge
                            variant="outline"
                            className="border-red-500/30 bg-red-500/10 text-red-400 text-xs"
                          >
                            {t.atRisk}
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="border-primary/30 bg-primary/10 text-primary text-xs"
                          >
                            0
                          </Badge>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 5. Class Performance Ranking */}
        <Card className="mb-8 border-border/60 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="h-5 w-5 text-primary" />
              Class Performance Ranking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {ALL_CLASSES.map((c, i) => {
                const rank = i + 1
                return (
                  <div
                    key={c.id}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 ${rankBg(rank, ALL_CLASSES.length)}`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        rank <= 5
                          ? 'bg-primary/10 text-primary'
                          : rank > ALL_CLASSES.length - 5
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-muted/50 text-muted-foreground'
                      }`}
                    >
                      {rank}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{c.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {c.teacher} &middot; {c.yearGroup}
                      </p>
                    </div>
                    <span className={`text-sm font-bold ${rankText(rank, ALL_CLASSES.length)}`}>
                      {c.avgScore}%{' '}
                      <span className="text-xs font-normal text-muted-foreground">
                        (G{percentageToGCSEGrade(c.avgScore)})
                      </span>
                    </span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* 6. Year Group Trends */}
        <Card className="mb-8 border-border/60 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
              Year Group Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {YEAR_TRENDS.map((yt) => (
                <div
                  key={yt.year}
                  className="rounded-lg border border-border/60 bg-muted/50 p-4 text-center"
                >
                  <p className="text-sm font-semibold text-muted-foreground">{yt.year}</p>
                  <p className="mt-2 text-2xl font-bold">{yt.current}%</p>
                  <div
                    className={`mt-2 flex items-center justify-center gap-1 text-sm font-medium ${trendColor(yt.change)}`}
                  >
                    {trendIcon(yt.change)}
                    <span>
                      {yt.change > 0 ? '+' : ''}
                      {yt.change}% from last month
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 7. Workload Distribution */}
        <Card className="mb-8 border-border/60 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <GraduationCap className="h-5 w-5 text-amber-700 dark:text-amber-300" />
              Workload Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-xs text-muted-foreground">
              Average: {AVG_STUDENTS_PER_TEACHER} students per teacher. Flagged if above{' '}
              {OVERLOAD_THRESHOLD}.
            </p>
            <div className="space-y-3">
              {[...DEPT_TEACHERS]
                .sort((a, b) => b.students - a.students)
                .map((t) => {
                  const overloaded = t.students > OVERLOAD_THRESHOLD
                  const maxStudents = Math.max(...DEPT_TEACHERS.map((x) => x.students))
                  const pct = Math.round((t.students / maxStudents) * 100)
                  return (
                    <div key={t.id} className="flex items-center gap-3">
                      <span className="w-32 shrink-0 truncate text-sm font-medium">{t.name}</span>
                      <div className="flex-1">
                        <div className="h-5 w-full rounded-full bg-muted">
                          <div
                            className={`flex h-5 items-center justify-end rounded-full px-2 text-xs font-semibold ${
                              overloaded
                                ? 'bg-amber-500/80 text-amber-950'
                                : 'bg-primary/70 text-primary-foreground'
                            }`}
                            style={{ width: `${pct}%` }}
                          >
                            {t.students} students / {t.classes} classes
                          </div>
                        </div>
                      </div>
                      {overloaded && (
                        <Badge
                          variant="outline"
                          className="shrink-0 border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs"
                        >
                          High Load
                        </Badge>
                      )}
                    </div>
                  )
                })}
            </div>
          </CardContent>
        </Card>

        {/* 8. CPD Recommendations */}
        <Card className="mb-8 border-border/60 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Lightbulb className="h-5 w-5 text-amber-700 dark:text-amber-300" />
              CPD Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {CPD_RECOMMENDATIONS.map((rec, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-border/60 bg-muted/50 px-4 py-3"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                    <Lightbulb className="h-3 w-3 text-amber-700 dark:text-amber-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{rec.teacher}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{rec.recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
