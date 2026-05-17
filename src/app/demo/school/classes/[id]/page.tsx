'use client'

import { useState, useMemo } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Users,
  BookOpen,
  GraduationCap,
  Search,
  X,
  Plus,
  TrendingUp,
  AlertTriangle,
  BarChart3,
} from 'lucide-react'
import { toast } from 'sonner'
import { DEMO_CLASSES, DEMO_STUDENTS } from '@/data/demo-data'
import type { DemoStudent } from '@/data/demo-data'
import { percentageToGCSEGrade } from '@/lib/grades'
import { GlassPanel, PanelEyebrow, TrendArea, RankBars, SERIES, pct } from '@/components/dataviz'

// ── Helpers ──────────────────────────────────────────────────────────────────

function boardBadgeClass(board: string): string {
  switch (board) {
    case 'AQA':
      return 'bg-accent/10 text-accent border-accent/20'
    case 'Edexcel':
      return 'bg-primary/10 text-primary border-primary/20'
    case 'OCR':
      return 'bg-primary/10 text-primary border-primary/20'
    case 'WJEC':
      return 'bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-300'
    case 'CAIE IGCSE':
      return 'bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-300'
    case 'KS3':
      return 'bg-primary/10 text-primary border-primary/20'
    default:
      return 'bg-muted text-muted-foreground border-border/60'
  }
}

function progressBarColor(pct: number): string {
  if (pct >= 70) return 'bg-teal-700'
  if (pct >= 40) return 'bg-amber-500'
  return 'bg-red-500'
}

function statusBadgeStyle(status: DemoStudent['status']): { label: string; className: string } {
  switch (status) {
    case 'excelling':
      return {
        label: 'Excelling',
        className: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-300',
      }
    case 'on-track':
      return { label: 'On Track', className: 'bg-primary/10 text-primary border-primary/20' }
    case 'needs-support':
      return {
        label: 'Needs Support',
        className: 'bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-300',
      }
    case 'at-risk':
      return {
        label: 'At Risk',
        className: 'bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-300',
      }
    default:
      return { label: status, className: 'bg-muted text-muted-foreground border-border/60' }
  }
}

// ── Weekly activity data (static demo) ───────────────────────────────────────

const WEEKLY_ACTIVITY = [
  { day: 'Mon', value: 82 },
  { day: 'Tue', value: 65 },
  { day: 'Wed', value: 91 },
  { day: 'Thu', value: 74 },
  { day: 'Fri', value: 58 },
  { day: 'Sat', value: 30 },
  { day: 'Sun', value: 22 },
]

// ── Component ────────────────────────────────────────────────────────────────

export default function DemoClassDetailPage() {
  const params = useParams()
  const classId = params.id as string
  const [activeTab, setActiveTab] = useState<'students' | 'analytics'>('students')
  const [search, setSearch] = useState('')

  const cls = DEMO_CLASSES.find((c) => c.id === classId)
  const students = useMemo(() => DEMO_STUDENTS.filter((s) => s.classId === classId), [classId])

  const filteredStudents = useMemo(() => {
    if (!search.trim()) return students
    const q = search.toLowerCase()
    return students.filter((s) => s.name.toLowerCase().includes(q))
  }, [search, students])

  // Analytics computations
  const avgScore = useMemo(() => {
    if (students.length === 0) return cls?.avgScore ?? 0
    return Math.round(students.reduce((sum, s) => sum + s.averageScore, 0) / students.length)
  }, [students, cls])

  const completionRate = cls?.completionRate ?? 0

  const atRiskCount = useMemo(
    () => students.filter((s) => s.status === 'at-risk' || s.status === 'needs-support').length,
    [students],
  )

  const topPerformers = useMemo(
    () => [...students].sort((a, b) => b.averageScore - a.averageScore).slice(0, 5),
    [students],
  )

  const scoreDistribution = useMemo(() => {
    const buckets = [
      { label: 'Grade 1-3', count: 0, color: 'bg-red-500' },
      { label: 'Grade 4-5', count: 0, color: 'bg-amber-500' },
      { label: 'Grade 6-7', count: 0, color: 'bg-blue-500' },
      { label: 'Grade 8-9', count: 0, color: 'bg-green-500' },
    ]
    students.forEach((s) => {
      if (s.averageScore < 40) buckets[0].count++
      else if (s.averageScore < 60) buckets[1].count++
      else if (s.averageScore < 80) buckets[2].count++
      else buckets[3].count++
    })
    return buckets
  }, [students])

  // Distribution as % of class for the RankBars chart (mirrors the live
  // school class page). Counts are kept for the accessible list below.
  const distScored = students.length || 1
  const distBandData = useMemo(
    () =>
      scoreDistribution.map((b) => ({
        band: b.label,
        value: Math.round((b.count / distScored) * 100),
        count: b.count,
      })),
    [scoreDistribution, distScored],
  )

  if (!cls) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <BookOpen className="h-12 w-12 text-muted-foreground/40 mb-4" />
        <h2 className="text-lg font-semibold mb-2">Class not found</h2>
        <p className="text-sm text-muted-foreground mb-6">
          The class you are looking for does not exist in demo data.
        </p>
        <Link
          href="/demo/school/classes"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Classes
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Back link */}
      <Link
        href="/demo/school/classes"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        All Classes
      </Link>

      {/* Class header */}
      <div className="rounded-xl border border-border bg-card p-6 mb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <h1 className="text-xl font-bold tracking-tight">{cls.name}</h1>
              <span className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium bg-secondary/50 text-secondary-foreground border-border">
                {cls.yearGroup}
              </span>
              <span
                className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${boardBadgeClass(cls.examBoard)}`}
              >
                {cls.examBoard}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4" />
                {cls.teacher}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                {students.length > 0 ? students.length : cls.studentCount} students
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 rounded-lg bg-muted p-1 mb-6">
        <button
          onClick={() => setActiveTab('students')}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'students'
              ? 'bg-card text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Users className="inline h-4 w-4 mr-1.5 -mt-0.5" />
          Students
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'analytics'
              ? 'bg-card text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <BarChart3 className="inline h-4 w-4 mr-1.5 -mt-0.5" />
          Analytics
        </button>
      </div>

      {/* ── Students Tab ───────────────────────────────────────────────────── */}
      {activeTab === 'students' && (
        <div>
          {/* Search + Add */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search students..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-border bg-card pl-10 pr-10 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <button
              onClick={() =>
                toast.info('Available with full account', {
                  description: 'Register your school to add students to classes.',
                })
              }
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors self-start"
            >
              <Plus className="h-4 w-4" />
              Add Students
            </button>
          </div>

          {/* Student table */}
          {filteredStudents.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-12 text-center">
              <Users className="h-8 w-8 text-muted-foreground/40 mb-2" />
              <p className="text-sm text-muted-foreground">
                {search
                  ? 'No students match your search.'
                  : 'No students with detailed records in this class yet.'}
              </p>
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                        Progress
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                        Score
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                        Last Active
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student) => {
                      const badge = statusBadgeStyle(student.status)
                      return (
                        <tr
                          key={student.id}
                          className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                        >
                          <td className="px-4 py-3">
                            <Link
                              href={`/demo/school/students/${student.id}`}
                              className="font-medium text-foreground hover:text-primary transition-colors hover:underline"
                            >
                              {student.name}
                            </Link>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="h-1.5 w-20 rounded-full bg-muted overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${progressBarColor(student.overallProgress)}`}
                                  style={{ width: `${student.overallProgress}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground tabular-nums">
                                {student.overallProgress}%
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 tabular-nums">
                            {student.averageScore}%{' '}
                            <span className="text-muted-foreground text-xs">
                              (G{percentageToGCSEGrade(student.averageScore)})
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium ${badge.className}`}
                            >
                              {badge.label}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">{student.lastActive}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Analytics Tab ──────────────────────────────────────────────────── */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          {/* Top stat cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Avg score */}
            <GlassPanel accent="teal" className="p-5">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                Class Average Score
              </p>
              <p className="text-3xl font-bold tabular-nums">
                {avgScore}%{' '}
                <span className="text-lg font-normal text-muted-foreground">
                  (Grade {percentageToGCSEGrade(avgScore)})
                </span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Across {students.length > 0 ? students.length : cls.studentCount} students
              </p>
            </GlassPanel>

            {/* Completion rate */}
            <GlassPanel accent="sage" className="p-5">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                Assignment Completion
              </p>
              <p className="text-3xl font-bold tabular-nums">{completionRate}%</p>
              <div className="mt-2 h-2 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full ${progressBarColor(completionRate)}`}
                  style={{ width: `${completionRate}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {cls.assignmentsCompleted} of {cls.assignmentsSet} assignments
              </p>
            </GlassPanel>

            {/* At-risk */}
            <GlassPanel accent="clay" className="p-5">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                At-Risk Students
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold tabular-nums text-red-400">{atRiskCount}</p>
                <AlertTriangle className="h-5 w-5 text-red-400/60" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {students.length > 0
                  ? `${Math.round((atRiskCount / students.length) * 100)}% of class`
                  : 'Based on demo data'}
              </p>
            </GlassPanel>
          </div>

          {/* Top performers + Weekly activity */}
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Top 5 performers */}
            <GlassPanel accent="sage" className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-emerald-700 dark:text-emerald-300" />
                <PanelEyebrow>Top 5 Performers</PanelEyebrow>
              </div>
              {topPerformers.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No detailed student records for this class.
                </p>
              ) : (
                <div className="space-y-3">
                  {topPerformers.map((student, i) => (
                    <div key={student.id} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{student.name}</p>
                      </div>
                      <span className="text-sm font-semibold tabular-nums text-emerald-700 dark:text-emerald-300">
                        {student.averageScore}%{' '}
                        <span className="text-xs font-normal text-muted-foreground">
                          (G{percentageToGCSEGrade(student.averageScore)})
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </GlassPanel>

            {/* Weekly activity chart */}
            <GlassPanel accent="primary" className="p-5">
              <PanelEyebrow>Weekly Activity (logins)</PanelEyebrow>
              <div className="mt-4">
                <TrendArea
                  data={WEEKLY_ACTIVITY}
                  xKey="day"
                  yKey="value"
                  height={160}
                  color={SERIES[0]}
                  suffix=""
                  domain={[0, 100]}
                />
              </div>
              <ul className="sr-only">
                {WEEKLY_ACTIVITY.map((d) => (
                  <li key={d.day}>
                    {d.day}: {d.value}
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </div>

          {/* Score distribution */}
          <GlassPanel accent="ochre" className="p-5">
            <PanelEyebrow>Score Distribution</PanelEyebrow>
            <div className="mt-4">
              <RankBars data={distBandData} labelKey="band" valueKey="value" height={220} />
            </div>
            {/* Accessible text equivalent (counts per band) */}
            <ul className="sr-only">
              {distBandData.map((b) => (
                <li key={b.band}>
                  {b.band}: {b.count} ({pct(b.value)})
                </li>
              ))}
            </ul>
          </GlassPanel>
        </div>
      )}
    </div>
  )
}
