'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'
import {
  LayoutDashboard,
  Users,
  BookOpen,
  BarChart3,
  Upload,
  Download,
  School,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  GraduationCap,
  Target,
  Filter,
  BookOpenCheck,
  Info,
  Sparkles,
  Mail,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DEMO_SCHOOL, DEMO_STUDENTS, DEMO_CLASSES, DEMO_YEAR_GROUPS } from '@/data/demo-data'
import { GradeDistributionChart } from '@/components/analytics/GradeDistributionChart'
import { gcseGradeColor, gcseGradeBg } from '@/lib/grades'
import { RadialScore, RankBars } from '@/components/dataviz'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'
import { InterventionInsightsPanel } from '@/components/school/InterventionInsightsPanel'

// ── Computed student-level data ─────────────────────────────────────────────

function computeStudentMetrics(students: typeof DEMO_STUDENTS) {
  if (students.length === 0)
    return {
      total: 0,
      avgWorkingAt: 0,
      avgPredicted: 0,
      avgTarget: 0,
      onTrackCount: 0,
      offTrackCount: 0,
      onTrackPct: 0,
      gradeDistribution: {} as Record<number, number>,
      atRiskStudents: [] as typeof DEMO_STUDENTS,
      topImproving: [] as typeof DEMO_STUDENTS,
      needingIntervention: [] as typeof DEMO_STUDENTS,
    }

  const total = students.length
  const avgWorkingAt = Math.round(students.reduce((sum, s) => sum + s.workingAtGrade, 0) / total)
  const avgPredicted = Math.round(students.reduce((sum, s) => sum + s.predictedGrade, 0) / total)
  const avgTarget = Math.round(students.reduce((sum, s) => sum + s.targetGrade, 0) / total)

  // On track = predicted grade >= target grade
  const onTrackCount = students.filter((s) => s.predictedGrade >= s.targetGrade).length
  const offTrackCount = total - onTrackCount
  const onTrackPct = Math.round((onTrackCount / total) * 100)

  // Grade distribution (working at grade)
  const gradeDistribution: Record<number, number> = {}
  for (let g = 1; g <= 9; g++) gradeDistribution[g] = 0
  students.forEach((s) => {
    gradeDistribution[s.workingAtGrade] = (gradeDistribution[s.workingAtGrade] || 0) + 1
  })

  // At-risk students
  const atRiskStudents = students.filter((s) => s.atRisk)

  // Top improving: students whose predicted > working at
  const topImproving = [...students]
    .filter((s) => s.predictedGrade > s.workingAtGrade)
    .sort((a, b) => b.predictedGrade - b.workingAtGrade - (a.predictedGrade - a.workingAtGrade))
    .slice(0, 5)

  // Needing intervention: predicted grade declining (predicted < working at) OR at-risk
  const needingIntervention = students
    .filter((s) => s.predictedGrade < s.workingAtGrade || s.atRisk)
    .sort((a, b) => a.predictedGrade - b.predictedGrade)
    .slice(0, 8)

  return {
    total,
    avgWorkingAt,
    avgPredicted,
    avgTarget,
    onTrackCount,
    offTrackCount,
    onTrackPct,
    gradeDistribution,
    atRiskStudents,
    topImproving,
    needingIntervention,
  }
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function DemoSchoolDashboardPage() {
  const t = useT()
  const [selectedClass, setSelectedClass] = useState<string>('all')
  const [selectedYear, setSelectedYear] = useState<string>('all')

  // Filter students based on selections
  const filteredStudents = useMemo(() => {
    let students = DEMO_STUDENTS
    if (selectedYear !== 'all') {
      students = students.filter((s) => s.yearGroup === selectedYear)
    }
    if (selectedClass !== 'all') {
      students = students.filter((s) => s.className === selectedClass)
    }
    return students
  }, [selectedClass, selectedYear])

  // Available classes for the year group filter
  const availableClasses = useMemo(() => {
    if (selectedYear === 'all') return DEMO_CLASSES
    return DEMO_CLASSES.filter((c) => c.yearGroup === selectedYear)
  }, [selectedYear])

  const metrics = computeStudentMetrics(filteredStudents)
  const maxGradeCount = Math.max(...Object.values(metrics.gradeDistribution), 1)

  // Year groups for filter
  const yearGroups = DEMO_YEAR_GROUPS.map((yg) => yg.label)

  // Active filter label
  const filterLabel =
    selectedClass !== 'all' ? selectedClass : selectedYear !== 'all' ? selectedYear : 'All Students'

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      {/* Chip-style "sample demo" alert */}
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
        <Info className="h-3.5 w-3.5" />
        You&rsquo;re viewing synthetic data for demo purposes.
      </div>

      {/* Demo banner */}
      <div className="mb-6 rounded-lg border border-blue-500/30 bg-teal-800/10 px-5 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
            <p className="text-sm text-blue-300">
              You are viewing an interactive demo with sample data. Register your school to use with
              your own students.
            </p>
          </div>
          <Button size="sm" className="shrink-0" render={<Link href="/for-schools/register" />}>
            Register Your School
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-7 w-7 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">School Dashboard</h1>
          </div>
          <p className="mt-1 flex items-center gap-2 text-muted-foreground">
            <School className="h-4 w-4" />
            {DEMO_SCHOOL.name}
            <Badge
              variant="secondary"
              className="ml-1 border-amber-500/30 bg-amber-500/10 text-xs text-clay-600"
            >
              DEMO
            </Badge>
            <Badge
              variant="secondary"
              className="border-primary/30 bg-primary/10 text-xs text-primary"
            >
              Exam Board: AQA
            </Badge>
          </p>
        </div>
        <Button variant="outline" size="sm" render={<Link href="/demo/school/analytics" />}>
          <BarChart3 className="mr-1.5 h-3.5 w-3.5" />
          Analytics
        </Button>
      </div>

      {/* ── Filters ─────────────────────────────────────────────────────── */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="h-4 w-4" />
          <span className="font-medium">Filter:</span>
        </div>
        <select
          value={selectedYear}
          onChange={(e) => {
            setSelectedYear(e.target.value)
            setSelectedClass('all')
          }}
          className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="all">All Year Groups</option>
          {yearGroups.map((yg) => (
            <option key={yg} value={yg}>
              {yg}
            </option>
          ))}
        </select>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="all">All Classes</option>
          {availableClasses.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
        {(selectedYear !== 'all' || selectedClass !== 'all') && (
          <button
            onClick={() => {
              setSelectedYear('all')
              setSelectedClass('all')
            }}
            className="text-xs text-primary hover:underline"
          >
            Clear filters
          </button>
        )}
        {filterLabel !== 'All Students' && (
          <Badge variant="secondary" className="text-xs">
            Showing: {filterLabel}
          </Badge>
        )}
      </div>

      {/* ── At-Risk Alert Banner ─────────────────────────────────────────── */}
      {metrics.atRiskStudents.length > 0 && (
        <div className="mb-8 overflow-hidden rounded-xl border border-red-500/30 bg-gradient-to-r from-red-500/10 via-red-500/5 to-transparent">
          <div className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-red-300">
                  {metrics.atRiskStudents.length} student
                  {metrics.atRiskStudents.length !== 1 && 's'} flagged as at-risk
                </p>
                <p className="text-xs text-red-400/70">
                  {metrics.atRiskStudents
                    .slice(0, 5)
                    .map((s) => s.name)
                    .join(', ')}
                  {metrics.atRiskStudents.length > 5 &&
                    ` and ${metrics.atRiskStudents.length - 5} more`}
                </p>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="shrink-0 border-red-500/30 text-red-400 hover:bg-red-500/10"
              render={<Link href="/demo/school/analytics?filter=at-risk" />}
            >
              Review Students
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      )}

      {/* ── Hero Stat Cards ──────────────────────────────────────────────── */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {/* Total Students */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-teal-800/10 to-teal-600/5 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-teal-700/80">
                Students
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                {metrics.total}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Across {DEMO_YEAR_GROUPS.length} year groups
              </p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15">
              <Users className="h-5 w-5 text-teal-700" />
            </div>
          </div>
        </div>

        {/* Avg Working At Grade */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-violet-500/10 to-clay-500/5 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-teal-700/80">
                {t('demo_school.dash.avg_working_at')}
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                {t('analytics.grade.label')} {metrics.avgWorkingAt}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {t('demo_school.dash.current_attainment')}
              </p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700/15">
              <BookOpen className="h-5 w-5 text-teal-700" />
            </div>
          </div>
        </div>

        {/* Avg Predicted Grade */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-violet-500/10 to-clay-500/5 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-teal-700/80">
                {t('demo_school.dash.avg_predicted')}
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                {t('analytics.grade.label')} {metrics.avgPredicted}
              </p>
              <p
                className={`mt-1 flex items-center gap-1 text-xs ${metrics.avgPredicted >= metrics.avgWorkingAt ? 'text-teal-700' : 'text-red-400'}`}
              >
                {metrics.avgPredicted >= metrics.avgWorkingAt ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {metrics.avgPredicted >= metrics.avgWorkingAt
                  ? t('demo_school.dash.positive_trajectory')
                  : t('demo_school.dash.declining_trajectory')}
              </p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700/15">
              <TrendingUp className="h-5 w-5 text-teal-700" />
            </div>
          </div>
        </div>

        {/* On Track % */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-teal-800/10 to-teal-600/5 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-teal-700/80">
                {t('demo_school.dash.on_track')}
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                {metrics.onTrackPct}%
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {t('demo_school.dash.of_students').replace('{n}', String(metrics.total))} (
                {metrics.onTrackCount})
              </p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-800/10">
              <Target className="h-5 w-5 text-teal-700" />
            </div>
          </div>
        </div>

        {/* Avg Target Grade */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-clay-600/80">
                {t('demo_school.dash.avg_target')}
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                {t('analytics.grade.label')} {metrics.avgTarget}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {t('demo_school.dash.aspirational_target')}
              </p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15">
              <GraduationCap className="h-5 w-5 text-clay-600" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Intervention Insights ────────────────────────────────────────── */}
      <div className="mb-8">
        <InterventionInsightsPanel />
      </div>

      {/* ── Two-column body ──────────────────────────────────────────────── */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* LEFT COLUMN - 8 cols */}
        <div className="space-y-6 lg:col-span-8">
          {/* Grade Distribution Chart */}
          <Card className="border-border bg-card/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold text-foreground">
                {t('demo_school.dash.working_at_distribution')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <GradeDistributionChart counts={metrics.gradeDistribution} title={null} />
            </CardContent>
          </Card>

          {/* On Track vs Off Track + Year Group Overview side by side */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* On Track vs Off Track */}
            <Card className="border-border bg-card/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-foreground">
                  On Track vs Off Track
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <RadialScore value={metrics.onTrackPct} label="on track" size={96} />
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        On Track (predicted &ge; target)
                      </p>
                      <p className="text-lg font-semibold text-teal-700">
                        {metrics.onTrackCount} students
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Off Track (predicted &lt; target)
                      </p>
                      <p className="text-lg font-semibold text-red-400">
                        {metrics.offTrackCount} students
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Year Group Performance */}
            <Card className="border-border bg-card/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-foreground">
                  Year Group Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {DEMO_YEAR_GROUPS.slice(0, 5).map((yg: any) => {
                    const ygStudents = DEMO_STUDENTS.filter((s) => s.yearGroup === yg.label)
                    const avgWAG =
                      ygStudents.length > 0
                        ? Math.round(
                            ygStudents.reduce((sum, s) => sum + s.workingAtGrade, 0) /
                              ygStudents.length,
                          )
                        : 0
                    return (
                      <button
                        key={yg.year}
                        onClick={() => {
                          setSelectedYear(yg.label)
                          setSelectedClass('all')
                        }}
                        className="flex w-full items-center gap-3 rounded-lg border border-border bg-background/50 px-3 py-2 text-left transition-colors hover:border-primary/30 hover:bg-primary/5"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-foreground">{yg.label}</p>
                          <p className="text-[11px] text-muted-foreground">
                            {yg.studentCount} students
                          </p>
                        </div>
                        <div className="text-right">
                          <span className={`text-sm font-bold ${gcseGradeColor(avgWAG)}`}>
                            G{avgWAG}
                          </span>
                          <p className="text-[10px] text-muted-foreground">avg WAG</p>
                        </div>
                        {yg.atRiskCount > 0 && (
                          <span className="inline-flex items-center gap-0.5 rounded-full bg-red-500/10 px-1.5 py-0.5 text-[10px] font-medium text-red-400">
                            <AlertTriangle className="h-2.5 w-2.5" />
                            {yg.atRiskCount}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Students Needing Intervention */}
          <Card className="border-border bg-card/60">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                  Students Needing Intervention
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="border-red-500/30 bg-red-500/10 text-xs text-red-400"
                >
                  {metrics.needingIntervention.length}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {metrics.needingIntervention.length === 0 ? (
                <p className="py-4 text-center text-sm text-muted-foreground">
                  No students currently flagged for intervention.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-left text-xs text-muted-foreground">
                        <th className="pb-2 pr-3 font-medium">Student</th>
                        <th className="pb-2 pr-3 font-medium">Class</th>
                        <th className="pb-2 pr-3 text-center font-medium">Working At</th>
                        <th className="pb-2 pr-3 text-center font-medium">Predicted</th>
                        <th className="pb-2 pr-3 text-center font-medium">Target</th>
                        <th className="pb-2 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {metrics.needingIntervention.map((student) => (
                        <tr key={student.id} className="border-b border-border/50 last:border-0">
                          <td className="py-2.5 pr-3">
                            <Link
                              href={`/demo/school/students/${student.id}`}
                              className="font-medium text-foreground hover:text-primary hover:underline"
                            >
                              {student.name}
                            </Link>
                          </td>
                          <td className="py-2.5 pr-3 text-xs text-muted-foreground">
                            {student.className}
                          </td>
                          <td className="py-2.5 pr-3 text-center">
                            <span
                              className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${gcseGradeBg(student.workingAtGrade)} ${gcseGradeColor(student.workingAtGrade)}`}
                            >
                              {student.workingAtGrade}
                            </span>
                          </td>
                          <td className="py-2.5 pr-3 text-center">
                            <span
                              className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${gcseGradeBg(student.predictedGrade)} ${gcseGradeColor(student.predictedGrade)}`}
                            >
                              {student.predictedGrade}
                            </span>
                          </td>
                          <td className="py-2.5 pr-3 text-center">
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted/50 text-xs font-bold text-muted-foreground">
                              {student.targetGrade}
                            </span>
                          </td>
                          <td className="py-2.5">
                            {student.atRisk ? (
                              <Badge
                                variant="secondary"
                                className="border-red-500/30 bg-red-500/10 text-[10px] text-red-400"
                              >
                                At Risk
                              </Badge>
                            ) : student.predictedGrade < student.workingAtGrade ? (
                              <Badge
                                variant="secondary"
                                className="border-amber-500/30 bg-amber-500/10 text-[10px] text-clay-600"
                              >
                                Declining
                              </Badge>
                            ) : (
                              <Badge variant="secondary" className="text-[10px]">
                                Off Track
                              </Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <Button
                variant="outline"
                size="sm"
                className="mt-3 w-full"
                render={<Link href="/demo/school/analytics?filter=at-risk" />}
              >
                View All At-Risk Students
              </Button>
            </CardContent>
          </Card>

          {/* Areas of Concern */}
          <Card className="border-border bg-card/60">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                <AlertTriangle className="h-4 w-4 text-clay-600" />
                Common Areas of Concern
              </CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                const weaknessCounts: Record<string, number> = {}
                filteredStudents.forEach((s) => {
                  s.weaknesses.forEach((w) => {
                    const name = typeof w === 'string' ? w : w.name
                    weaknessCounts[name] = (weaknessCounts[name] || 0) + 1
                  })
                })
                const sorted = Object.entries(weaknessCounts)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 5)
                const max = sorted[0]?.[1] || 1
                return (
                  <>
                    <RankBars
                      data={sorted.map(([name, count]) => ({
                        name,
                        intensity: Math.round((count / max) * 100),
                      }))}
                      labelKey="name"
                      valueKey="intensity"
                      height={Math.max(140, sorted.length * 30)}
                      suffix="%"
                    />
                    <div className="mt-3 space-y-1.5">
                      {sorted.map(([name, count], i) => (
                        <div key={i} className="flex items-center justify-between gap-2 text-xs">
                          <span className="font-medium text-foreground">{name}</span>
                          <span className="text-[10px] text-muted-foreground">
                            {count} students
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )
              })()}
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN - 4 cols */}
        <div className="space-y-6 lg:col-span-4">
          {/* Quick Actions */}
          <Card className="border-border bg-card/60">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-foreground">
                {t('demo_school.dash.quick_actions')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="h-auto flex-col gap-2 px-3 py-4"
                  render={<Link href="/demo/school/import" />}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-800/10">
                    <Upload className="h-4 w-4 text-teal-700" />
                  </div>
                  <span className="text-xs font-medium">Import</span>
                </Button>

                <Button
                  variant="outline"
                  className="h-auto flex-col gap-2 px-3 py-4"
                  render={<Link href="/demo/school/classes" />}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-800/10">
                    <BookOpen className="h-4 w-4 text-teal-700" />
                  </div>
                  <span className="text-xs font-medium">Classes</span>
                </Button>

                <Button
                  variant="outline"
                  className="h-auto flex-col gap-2 px-3 py-4"
                  render={<Link href="/demo/school/analytics" />}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-800/10">
                    <BarChart3 className="h-4 w-4 text-teal-700" />
                  </div>
                  <span className="text-xs font-medium">Analytics</span>
                </Button>

                <Button
                  variant="outline"
                  className="h-auto flex-col gap-2 px-3 py-4"
                  render={<Link href="/demo/school/import" />}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10">
                    <Download className="h-4 w-4 text-clay-600" />
                  </div>
                  <span className="text-xs font-medium">Export</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Top Improving Students */}
          <Card className="border-border bg-card/60">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                <TrendingUp className="h-4 w-4 text-teal-700" />
                {t('demo_school.dash.top_improving_students')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {metrics.topImproving.length === 0 ? (
                <p className="py-4 text-center text-sm text-muted-foreground">
                  No improving students in current filter.
                </p>
              ) : (
                <div className="space-y-2">
                  {metrics.topImproving.map((student) => (
                    <Link
                      key={student.id}
                      href={`/demo/school/students/${student.id}`}
                      className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-3 py-2.5 transition-colors hover:border-teal-800/30 hover:bg-teal-800/5"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-xs font-medium text-foreground">
                          {student.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground">{student.className}</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-xs font-bold ${gcseGradeColor(student.workingAtGrade)}`}
                        >
                          G{student.workingAtGrade}
                        </span>
                        <ArrowRight className="h-3 w-3 text-teal-700" />
                        <span
                          className={`text-xs font-bold ${gcseGradeColor(student.predictedGrade)}`}
                        >
                          G{student.predictedGrade}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Reading Age (placeholder) */}
          <Card className="border-border bg-card/60">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                <BookOpenCheck className="h-4 w-4 text-teal-700" />
                Reading Age Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">
                  Reading age data is populated from the Reading Comprehension Assessment. Students
                  who have completed the assessment will have their reading age, decoding age, and
                  fluency age recorded.
                </p>
                <div className="rounded-lg border border-teal-800/20 bg-teal-600/5 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-teal-700">Assessments completed</span>
                    <span className="text-xs font-bold text-teal-700">Demo data</span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Assign the Reading Comprehension Assessment to your classes to generate reading
                    age data for each student.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  render={<Link href="/assessment/reading" />}
                >
                  <BookOpenCheck className="mr-1.5 h-3.5 w-3.5" />
                  View Reading Assessment
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Grade Comparison: WAG vs Predicted vs Target */}
          <Card className="border-border bg-card/60">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-foreground">
                Grade Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-3 py-2.5">
                  <span className="text-xs text-muted-foreground">Avg Working At Grade</span>
                  <span className={`text-sm font-bold ${gcseGradeColor(metrics.avgWorkingAt)}`}>
                    Grade {metrics.avgWorkingAt}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-3 py-2.5">
                  <span className="text-xs text-muted-foreground">Avg Predicted Grade</span>
                  <span className={`text-sm font-bold ${gcseGradeColor(metrics.avgPredicted)}`}>
                    Grade {metrics.avgPredicted}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-3 py-2.5">
                  <span className="text-xs text-muted-foreground">Avg Target Grade</span>
                  <span className={`text-sm font-bold ${gcseGradeColor(metrics.avgTarget)}`}>
                    Grade {metrics.avgTarget}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-3 py-2.5">
                  <span className="text-xs text-muted-foreground">Students on track</span>
                  <span className="text-sm font-bold text-teal-700">
                    {metrics.onTrackCount}/{metrics.total}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-3 py-2.5">
                  <span className="text-xs text-muted-foreground">At-risk students</span>
                  <span className="text-sm font-bold text-red-400">
                    {metrics.atRiskStudents.length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ── Final CTA: ready to use real data ───────────────────────────── */}
      <div className="mt-12">
        <GlassPanel accent="primary" className="p-8 sm:p-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15">
                <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <div>
                <PanelEyebrow>Get started</PanelEyebrow>
                <h3 className="mt-1 font-heading text-2xl font-bold tracking-tight text-foreground">
                  Ready to see it with your school&rsquo;s data?
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                  Run a free pilot with English Hub for a half-term. We&rsquo;ll import your
                  classes, students and exam targets — and you&rsquo;ll see real analytics in this
                  same dashboard within a week.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button variant="default" size="lg" render={<Link href="/school-pilot" />}>
                Start a free school pilot
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" render={<Link href="/contact" />}>
                <Mail className="mr-1.5 h-4 w-4" />
                Talk to us
              </Button>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  )
}
