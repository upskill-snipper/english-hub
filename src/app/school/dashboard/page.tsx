'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import {
  LayoutDashboard,
  Users,
  BookOpen,
  BarChart3,
  Upload,
  Download,
  CheckCircle,
  Clock,
  School,
  GraduationCap,
  Filter,
  BookOpenCheck,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
// Grade utilities - used when student assessment data is available
// import {
//   percentageToGCSEGrade,
//   gcseGradeColor,
//   gcseGradeBg,
//   calculateWorkingAtGrade,
//   calculatePredictedGrade,
//   calculateTargetGrade,
//   type GCSEGrade,
// } from "@/lib/grades"

// ── Types ────────────────────────────────────────────────────────────────────

interface DashboardStats {
  totalStudents: number
  totalTeachers: number
  activeClasses: number
  assignmentsThisWeek: number
}

interface SchoolData {
  id: string
  name: string
  subscription_plan: string
  created_at: string
}

interface ClassData {
  id: string
  name: string
  year_group: string | null
  is_active: boolean
}

interface HardestQuestion {
  questionId: string
  correctRate: number
  totalAttempts: number
  avgTimeSeconds: number
  difficulty: 'easy' | 'medium' | 'hard' | 'very-hard'
}

const FOUNDER_ACCESS_UNTIL = 'August 2027'

// ── Setup checklist ──────────────────────────────────────────────────────────

interface SetupStep {
  label: string
  done: boolean
}

// ── Component ────────────────────────────────────────────────────────────────

export default function SchoolDashboardPage() {
  const { user } = useAuthStore()
  const [school, setSchool] = useState<SchoolData | null>(null)
  const [stats, setStats] = useState<DashboardStats>({
    totalStudents: 0,
    totalTeachers: 0,
    activeClasses: 0,
    assignmentsThisWeek: 0,
  })
  const [classes, setClasses] = useState<ClassData[]>([])
  const [isFounder, setIsFounder] = useState(false)
  const [setupSteps, setSetupSteps] = useState<SetupStep[]>([])
  const [hardestQuestions, setHardestQuestions] = useState<HardestQuestion[]>([])
  const [loading, setLoading] = useState(true)

  // Filters
  const [selectedClass, setSelectedClass] = useState<string>('all')
  const [selectedYear, setSelectedYear] = useState<string>('all')

  useEffect(() => {
    if (!user) return

    async function fetchDashboardData() {
      const supabase = createClient()

      // Fetch school membership
      const { data: membership } = await supabase
        .from('school_members')
        .select('*, schools(*)')
        .eq('user_id', user!.id)
        .eq('invite_status', 'accepted')
        .limit(1)
        .single()

      if (!membership?.school_id) {
        setLoading(false)
        return
      }

      const schoolData = (membership as { schools?: SchoolData }).schools
      if (schoolData) {
        setSchool(schoolData)
        setIsFounder(
          schoolData.subscription_plan === 'custom' || schoolData.subscription_plan === 'school',
        )
      }

      const schoolId = membership.school_id

      // Fetch stats and classes in parallel
      const [studentsRes, teachersRes, classesRes, assignmentsRes, classListRes] =
        await Promise.all([
          supabase
            .from('school_members')
            .select('id', { count: 'exact', head: true })
            .eq('school_id', schoolId)
            .eq('role', 'student')
            .eq('invite_status', 'accepted'),
          supabase
            .from('school_members')
            .select('id', { count: 'exact', head: true })
            .eq('school_id', schoolId)
            .in('role', ['teacher', 'head_of_department'])
            .eq('invite_status', 'accepted'),
          supabase
            .from('classes')
            .select('id', { count: 'exact', head: true })
            .eq('school_id', schoolId)
            .eq('is_active', true),
          supabase
            .from('assignments')
            .select('id', { count: 'exact', head: true })
            .eq('school_id', schoolId)
            .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
          supabase
            .from('classes')
            .select('id, name, year_group, is_active')
            .eq('school_id', schoolId)
            .eq('is_active', true)
            .order('name'),
        ])

      const totalStudents = studentsRes.count ?? 0
      const totalTeachers = teachersRes.count ?? 0
      const activeClasses = classesRes.count ?? 0
      const assignmentsThisWeek = assignmentsRes.count ?? 0

      setStats({ totalStudents, totalTeachers, activeClasses, assignmentsThisWeek })
      setClasses((classListRes.data as ClassData[]) || [])

      // Build setup checklist
      setSetupSteps([
        { label: 'Create school account', done: true },
        { label: 'Import teachers', done: totalTeachers > 0 },
        { label: 'Import students', done: totalStudents > 0 },
        { label: 'Create classes', done: activeClasses > 0 },
        {
          label: 'Assign students to classes',
          done: activeClasses > 0 && totalStudents > 0,
        },
      ])

      // Hardest questions (real data via getHardestQuestions).
      // Fire-and-forget: if it fails we just render the empty state.
      try {
        const res = await fetch('/api/school/analytics/hardest-questions?limit=10')
        if (res.ok) {
          const json = (await res.json()) as { hardestQuestions?: HardestQuestion[] }
          setHardestQuestions(json.hardestQuestions ?? [])
        }
      } catch {
        // Network error — leave list empty; the UI shows the empty-state copy.
      }

      setLoading(false)
    }

    fetchDashboardData()
  }, [user])

  // Filter classes by year group
  const availableClasses = useMemo(() => {
    if (selectedYear === 'all') return classes
    return classes.filter((c) => c.year_group === selectedYear)
  }, [selectedYear, classes])

  // Get unique year groups from classes
  const yearGroups = useMemo(() => {
    const ygs = new Set(classes.map((c) => c.year_group).filter(Boolean))
    return Array.from(ygs).sort() as string[]
  }, [classes])

  const isNewSchool =
    !loading && stats.totalTeachers === 0 && stats.totalStudents === 0 && stats.activeClasses === 0

  const hasData = !loading && stats.totalStudents > 0

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-7 w-7 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">School Dashboard</h1>
          </div>
          {school && (
            <p className="mt-1 flex items-center gap-2 text-muted-foreground">
              <School className="h-4 w-4" />
              {school.name}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" render={<Link href="/school/analytics" />}>
            <BarChart3 className="mr-1.5 h-3.5 w-3.5" />
            Analytics
          </Button>
          <Button variant="outline" size="sm" render={<Link href="/school/guide" />}>
            Setup Guide
          </Button>
        </div>
      </div>

      {/* FOUNDER access banner */}
      {isFounder && (
        <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-5 py-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-lg">&#9733;</span>
            <div>
              <p className="font-semibold text-clay-600">
                Your Founding Schools access is active until {FOUNDER_ACCESS_UNTIL}.
              </p>
              <p className="mt-0.5 text-sm text-clay-600/80">
                Your preferential rate is locked. Contact us to discuss renewal.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Filters (shown when there's data) ────────────────────────────── */}
      {hasData && yearGroups.length > 0 && (
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
        </div>
      )}

      {/* ── Hero Stat Cards ──────────────────────────────────────────────── */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Students */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-blue-400/80">
                Total Students
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                {loading ? <span className="text-muted-foreground">--</span> : stats.totalStudents}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Enrolled students</p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15">
              <Users className="h-5 w-5 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Active Classes */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-400/80">
                Active Classes
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                {loading ? <span className="text-muted-foreground">--</span> : stats.activeClasses}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                <Link href="/school/classes" className="text-primary hover:underline">
                  Manage classes
                </Link>
              </p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15">
              <BookOpen className="h-5 w-5 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Total Teachers */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-violet-500/10 to-violet-500/5 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-violet-400/80">
                Teachers
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                {loading ? <span className="text-muted-foreground">--</span> : stats.totalTeachers}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Active staff members</p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15">
              <GraduationCap className="h-5 w-5 text-violet-400" />
            </div>
          </div>
        </div>

        {/* Assignments This Week */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-clay-600/80">
                Assignments
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                {loading ? (
                  <span className="text-muted-foreground">--</span>
                ) : (
                  stats.assignmentsThisWeek
                )}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Set this week</p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15">
              <BarChart3 className="h-5 w-5 text-clay-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left column: main content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Student Overview - shown when school has data */}
          {hasData && (
            <Card className="border-border bg-card/60">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                    <Users className="h-4 w-4 text-blue-400" />
                    Student Overview
                  </CardTitle>
                  <Link href="/school/analytics" className="text-xs text-primary hover:underline">
                    Full analytics
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Student grade data (Working At Grade, Predicted Grade, Target Grade) is populated
                  as students complete assessments on the platform. The more assessments completed,
                  the richer the data becomes.
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-border bg-background/50 p-4 text-center">
                    <p className="text-xs text-muted-foreground">Working At Grade</p>
                    <p className="mt-1 text-2xl font-bold text-foreground">--</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">Avg across students</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background/50 p-4 text-center">
                    <p className="text-xs text-muted-foreground">Predicted Grade</p>
                    <p className="mt-1 text-2xl font-bold text-foreground">--</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">Based on trajectory</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background/50 p-4 text-center">
                    <p className="text-xs text-muted-foreground">On Track</p>
                    <p className="mt-1 text-2xl font-bold text-foreground">--%</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">Meeting target grade</p>
                  </div>
                </div>
                <div className="mt-4 rounded-lg border border-blue-500/20 bg-blue-500/5 p-3">
                  <p className="text-xs text-blue-300">
                    Grade distribution, on-track/off-track analysis, and at-risk student
                    identification will appear here as assessment data is collected. Assign mock
                    exams, quizzes, and essays to start building student profiles.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick actions */}
          <Card className="border-border bg-card/60">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <Button
                variant="outline"
                className="h-auto justify-start gap-3 px-4 py-3"
                render={<Link href="/school/import" />}
              >
                <Upload className="h-4 w-4 shrink-0 text-primary" />
                <div className="text-left">
                  <p className="text-sm font-medium">Import Students / Teachers</p>
                  <p className="text-xs text-muted-foreground">Upload CSV to bulk-add users</p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto justify-start gap-3 px-4 py-3"
                render={<Link href="/school/classes" />}
              >
                <BookOpen className="h-4 w-4 shrink-0 text-primary" />
                <div className="text-left">
                  <p className="text-sm font-medium">Manage Classes</p>
                  <p className="text-xs text-muted-foreground">Create and organise classes</p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto justify-start gap-3 px-4 py-3"
                render={<Link href="/school/analytics" />}
              >
                <BarChart3 className="h-4 w-4 shrink-0 text-primary" />
                <div className="text-left">
                  <p className="text-sm font-medium">View Analytics</p>
                  <p className="text-xs text-muted-foreground">Track progress and performance</p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto justify-start gap-3 px-4 py-3"
                render={<Link href="/school/import" />}
              >
                <Download className="h-4 w-4 shrink-0 text-primary" />
                <div className="text-left">
                  <p className="text-sm font-medium">Download Login Details</p>
                  <p className="text-xs text-muted-foreground">Export credentials for students</p>
                </div>
              </Button>
            </CardContent>
          </Card>

          {/* Hardest Questions — powered by getHardestQuestions (real data) */}
          <Card className="border-border bg-card/60">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <AlertTriangle className="h-4 w-4 text-clay-600" />
                  Questions students struggle with most
                </CardTitle>
                <Link href="/school/analytics" className="text-xs text-primary hover:underline">
                  View all
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              {/*
                TODO(school-scope): results are currently platform-wide.
                Filtering to this school's students requires joining through
                school_members.user_id → quiz_responses.user_id — tracked for a
                follow-up. For now this surfaces useful signal while data grows.
              */}
              {loading ? (
                <p className="text-sm text-muted-foreground">Loading question data...</p>
              ) : hardestQuestions.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-background/40 py-8 text-center">
                  <AlertTriangle className="mb-3 h-8 w-8 text-muted-foreground/40" />
                  <p className="text-sm text-muted-foreground">
                    No quiz data yet — your students&apos; responses will appear here as they
                    practise.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/60">
                        <th className="pb-2 text-left font-medium text-muted-foreground">Topic</th>
                        <th className="pb-2 text-right font-medium text-muted-foreground">
                          Correct
                        </th>
                        <th className="pb-2 text-right font-medium text-muted-foreground">
                          Attempts
                        </th>
                        <th className="pb-2 text-right font-medium text-muted-foreground">
                          Avg time
                        </th>
                        <th className="pb-2 pl-3 text-left font-medium text-muted-foreground">
                          Difficulty
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      {hardestQuestions.map((q) => {
                        // Best-effort topic derivation: many question IDs look
                        // like `topic.subtopic` or `topic-123`. Split on the
                        // first `.` or `-` to surface something human-readable.
                        const topicRaw = q.questionId.split(/[.-]/)[0] ?? q.questionId
                        const topic = topicRaw.replace(/_/g, ' ')
                        return (
                          <tr key={q.questionId} className="hover:bg-muted/20 transition-colors">
                            <td className="py-2 font-medium">
                              <span className="block truncate" title={q.questionId}>
                                {topic || q.questionId}
                              </span>
                            </td>
                            <td className="py-2 text-right tabular-nums">{q.correctRate}%</td>
                            <td className="py-2 text-right tabular-nums text-muted-foreground">
                              {q.totalAttempts}
                            </td>
                            <td className="py-2 text-right tabular-nums text-muted-foreground">
                              {q.avgTimeSeconds}s
                            </td>
                            <td className="py-2 pl-3">
                              <span
                                className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${
                                  q.difficulty === 'very-hard'
                                    ? 'bg-red-500/15 text-red-400'
                                    : q.difficulty === 'hard'
                                      ? 'bg-orange-500/15 text-orange-400'
                                      : q.difficulty === 'medium'
                                        ? 'bg-amber-500/15 text-clay-600'
                                        : 'bg-emerald-500/15 text-emerald-400'
                                }`}
                              >
                                {q.difficulty.replace('-', ' ')}
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Reading Age Section */}
          {hasData && (
            <Card className="border-border bg-card/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <BookOpenCheck className="h-4 w-4 text-cyan-400" />
                  Reading Age Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm text-muted-foreground">
                  Reading age data is populated from the Reading Comprehension Assessment. Assign
                  the assessment to your classes to generate reading age, decoding age, and fluency
                  age data for each student.
                </p>
                <Button variant="outline" size="sm" render={<Link href="/assessment/reading" />}>
                  <BookOpenCheck className="mr-1.5 h-3.5 w-3.5" />
                  View Reading Assessment
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Activity placeholder */}
          {!hasData && (
            <Card className="border-border bg-card/60">
              <CardHeader>
                <CardTitle className="text-base font-semibold text-foreground">
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Clock className="mb-3 h-8 w-8 text-muted-foreground/40" />
                  <p className="text-sm text-muted-foreground">
                    Activity will appear here as teachers and students use the platform.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right column: setup + grade info */}
        <div className="space-y-6">
          {isNewSchool && (
            <Card className="border-border bg-card/60">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Setup Progress
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    Getting started
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {setupSteps.map((step, index) => (
                    <li key={index} className="flex items-center gap-3">
                      {step.done ? (
                        <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                      ) : (
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-border text-xs font-bold text-muted-foreground">
                          {index + 1}
                        </div>
                      )}
                      <span
                        className={
                          step.done
                            ? 'text-sm text-muted-foreground line-through'
                            : 'text-sm font-medium text-foreground'
                        }
                      >
                        {step.label}
                      </span>
                    </li>
                  ))}
                </ol>
                <Button className="mt-6 w-full" size="sm" render={<Link href="/school/guide" />}>
                  View Setup Guide
                </Button>
              </CardContent>
            </Card>
          )}

          {!isNewSchool && !loading && (
            <Card className="border-border bg-card/60">
              <CardHeader>
                <CardTitle className="text-base font-semibold text-foreground">
                  Setup Complete
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center py-4 text-center">
                  <CheckCircle className="mb-3 h-10 w-10 text-green-500" />
                  <p className="text-sm text-muted-foreground">
                    Your school is set up and ready to go.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    render={<Link href="/school/guide" />}
                  >
                    Setup Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Grade System Info */}
          {hasData && (
            <Card className="border-border bg-card/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-foreground">
                  Grade Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="rounded-lg border border-border bg-background/50 px-3 py-2.5">
                    <p className="text-xs font-medium text-foreground">Working At Grade</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      Based on the average of recent assessment scores.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-background/50 px-3 py-2.5">
                    <p className="text-xs font-medium text-foreground">Predicted Grade</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      Projected grade based on the student's trajectory.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-background/50 px-3 py-2.5">
                    <p className="text-xs font-medium text-foreground">Target Grade</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      Aspirational grade set 1-2 grades above working at grade.
                    </p>
                  </div>
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2.5">
                    <p className="text-xs font-medium text-emerald-400">On Track</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      A student is "on track" when their predicted grade meets or exceeds their
                      target grade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Demo link */}
          <Card className="border-border bg-card/60">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-foreground">
                See it in action
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-xs text-muted-foreground">
                View the interactive demo dashboard with sample student data to see grade
                distributions, on-track analysis, and student intervention lists.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href="/demo/school" />}
              >
                View Demo Dashboard
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
