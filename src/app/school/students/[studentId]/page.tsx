'use client'

import { useEffect, useState, useMemo, useCallback } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Minus,
  BookOpen,
  CheckCircle,
  Award,
  Clock,
  Flame,
  FileText,
  BarChart3,
  Target,
  Zap,
  XCircle,
  ExternalLink,
  TrendingUp,
  TrendingDown,
  Printer,
  Mail,
  CalendarDays,
  PenLine,
  Save,
  Trash2,
  Plus,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  GraduationCap,
} from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { percentageToGCSEGrade, percentageToGCSEGradeLabel, gcseGradeColor, formatPercentageWithGrade } from '@/lib/grades'

// ─── Types ───────────────────────────────────────────────────────────────────

interface ModuleProgressItem {
  moduleId: string
  moduleName: string
  courseName: string
  status: 'complete' | 'in_progress' | 'not_started'
  quizScore: number | null
  timeSpentMinutes: number
  attempts: number
}

interface StrengthWeaknessItem {
  area: string
  score: number
}

interface Recommendation {
  id: string
  title: string
  description: string
  link: string
  type: 'improvement' | 'praise' | 'suggestion'
}

interface ActivityItem {
  id: string
  type: 'module_complete' | 'quiz_score' | 'certificate' | 'practice' | 'enrolment'
  text: string
  timestamp: string
}

interface WeeklyScore {
  week: string
  score: number
  trend: 'up' | 'down' | 'stable'
}

interface QuizAttempt {
  id: string
  quizName: string
  score: number
  maxScore: number
  date: string
  moduleName: string
}

interface MockExamResult {
  id: string
  examName: string
  score: number
  maxScore: number
  grade: string
  date: string
  areasForImprovement: string[]
}

interface EssaySubmission {
  id: string
  title: string
  grade: string
  score: number
  submittedAt: string
  feedbackPoints: string[]
  wordCount: number
}

interface RevisionWeek {
  week: string
  hours: number
}

interface TeacherNote {
  id: string
  text: string
  createdAt: string
  updatedAt: string
}

interface StudentData {
  id: string
  name: string
  email: string
  yearGroup: string
  examBoard: string
  predictedGrade: number
  averageScore: number
  trajectory: { trend: 'improving' | 'stable' | 'declining'; change: number }
  lastActive: string
  classId: string
  className: string
  modulesCompleted: number
  totalModules: number
  averageQuizScore: number
  totalStudyTimeMinutes: number
  practiceSessions: number
  certificatesEarned: number
  currentStreak: number
  examReadiness: number
  modules: ModuleProgressItem[]
  strengths: StrengthWeaknessItem[]
  weaknesses: StrengthWeaknessItem[]
  recommendations: Recommendation[]
  recentActivity: ActivityItem[]
  quizHistory: QuizAttempt[]
  mockExamResults: MockExamResult[]
  essaySubmissions: EssaySubmission[]
  revisionHours: RevisionWeek[]
}

interface TrendsData {
  weeklyScores: WeeklyScore[]
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function gradeColorClass(grade: number): string {
  if (grade >= 8) return 'text-purple-400'
  if (grade >= 6) return 'text-green-400'
  if (grade >= 4) return 'text-amber-400'
  return 'text-red-400'
}

function gradeBgClass(grade: number): string {
  if (grade >= 8) return 'bg-purple-500/10 border-purple-500/20'
  if (grade >= 6) return 'bg-green-500/10 border-green-500/20'
  if (grade >= 4) return 'bg-amber-500/10 border-amber-500/20'
  return 'bg-red-500/10 border-red-500/20'
}

function scoreBarColor(score: number): string {
  if (score >= 70) return 'bg-green-500'
  if (score >= 50) return 'bg-amber-500'
  return 'bg-red-500'
}

function scoreTextColor(score: number): string {
  if (score >= 70) return 'text-green-400'
  if (score >= 50) return 'text-amber-400'
  return 'text-red-400'
}

function formatStudyTime(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours}h ${minutes.toString().padStart(2, '0')}m`
}

function relativeTime(dateStr: string): string {
  const now = new Date()
  const date = new Date(dateStr)
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)
  const diffWeeks = Math.floor(diffDays / 7)

  if (diffMins < 1) return 'just now'
  if (diffMins < 60) return `${diffMins} minute${diffMins === 1 ? '' : 's'} ago`
  if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`
  if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`
  if (diffWeeks < 5) return `${diffWeeks} week${diffWeeks === 1 ? '' : 's'} ago`
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function statusBadge(status: ModuleProgressItem['status']) {
  switch (status) {
    case 'complete':
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 border border-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400">
          <CheckCircle className="h-3 w-3" />
          Complete
        </span>
      )
    case 'in_progress':
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-400">
          <Clock className="h-3 w-3" />
          In Progress
        </span>
      )
    case 'not_started':
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-border/50 px-2 py-0.5 text-xs font-medium text-muted-foreground">
          <Minus className="h-3 w-3" />
          Not Started
        </span>
      )
  }
}

function activityIcon(type: ActivityItem['type']) {
  switch (type) {
    case 'module_complete':
      return <BookOpen className="h-4 w-4 text-blue-400" />
    case 'quiz_score':
      return <CheckCircle className="h-4 w-4 text-green-400" />
    case 'certificate':
      return <Award className="h-4 w-4 text-yellow-400" />
    case 'practice':
      return <Target className="h-4 w-4 text-purple-400" />
    case 'enrolment':
      return <BookOpen className="h-4 w-4 text-cyan-400" />
    default:
      return <FileText className="h-4 w-4 text-muted-foreground" />
  }
}

function recommendationIcon(type: Recommendation['type']) {
  switch (type) {
    case 'improvement':
      return <Target className="h-5 w-5 text-amber-400" />
    case 'praise':
      return <Zap className="h-5 w-5 text-green-400" />
    case 'suggestion':
      return <BookOpen className="h-5 w-5 text-blue-400" />
  }
}

function recommendationBorder(type: Recommendation['type']) {
  switch (type) {
    case 'improvement':
      return 'border-amber-500/20 hover:border-amber-500/40'
    case 'praise':
      return 'border-green-500/20 hover:border-green-500/40'
    case 'suggestion':
      return 'border-blue-500/20 hover:border-blue-500/40'
  }
}

// ─── Exam Readiness Gauge (inline SVG) ───────────────────────────────────────

function ExamReadinessGaugeInline({ score }: { score: number }) {
  const size = 140
  const strokeWidth = 10
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference
  const color = score >= 70 ? '#22c55e' : score >= 50 ? '#f59e0b' : '#ef4444'

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" className="stroke-muted" strokeWidth={strokeWidth} />
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-700 ease-out" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-lg font-bold ${gcseGradeColor(percentageToGCSEGrade(score))}`}>Grade {percentageToGCSEGrade(score)}</span>
          <span className="text-[10px] text-muted-foreground">{score}%</span>
        </div>
      </div>
    </div>
  )
}

// ─── Line Chart (SVG) ────────────────────────────────────────────────────────

function LineChart({
  data,
  height = 200,
  valueKey = 'score',
  labelKey = 'label',
  color = 'hsl(var(--chart-4))',
  maxValue,
}: {
  data: { [key: string]: unknown }[]
  height?: number
  valueKey?: string
  labelKey?: string
  color?: string
  maxValue?: number
}) {
  if (data.length === 0) return null

  const width = 600
  const padding = { top: 20, right: 20, bottom: 30, left: 40 }
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  const values = data.map((d) => Number(d[valueKey]) || 0)
  const max = maxValue ?? Math.max(...values, 1)
  const min = 0

  const points = values.map((v, i) => ({
    x: padding.left + (i / Math.max(data.length - 1, 1)) * chartWidth,
    y: padding.top + chartHeight - ((v - min) / (max - min || 1)) * chartHeight,
  }))

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const areaD = `${pathD} L ${points[points.length - 1].x} ${padding.top + chartHeight} L ${points[0].x} ${padding.top + chartHeight} Z`

  const yTicks = [0, 25, 50, 75, 100].filter((t) => t <= max)

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="xMidYMid meet">
      {/* Grid lines */}
      {yTicks.map((tick) => {
        const y = padding.top + chartHeight - (tick / max) * chartHeight
        return (
          <g key={tick}>
            <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} className="stroke-border" strokeWidth={0.5} strokeDasharray="4 4" />
            <text x={padding.left - 8} y={y + 4} textAnchor="end" className="fill-muted-foreground" fontSize={10}>
              {tick}%
            </text>
          </g>
        )
      })}

      {/* Area fill */}
      <path d={areaD} fill={color} opacity={0.1} />

      {/* Line */}
      <path d={pathD} fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />

      {/* Data points */}
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={4} fill={color} className="transition-all duration-200" />
          <circle cx={p.x} cy={p.y} r={6} fill={color} opacity={0} className="hover:opacity-20 transition-opacity" />
          {/* Value label on hover area */}
          <text x={p.x} y={p.y - 10} textAnchor="middle" className="fill-foreground" fontSize={10} fontWeight={600}>
            {values[i]}%
          </text>
        </g>
      ))}

      {/* X-axis labels */}
      {data.map((d, i) => (
        <text
          key={i}
          x={padding.left + (i / Math.max(data.length - 1, 1)) * chartWidth}
          y={height - 5}
          textAnchor="middle"
          className="fill-muted-foreground"
          fontSize={9}
        >
          {String(d[labelKey] ?? '')}
        </text>
      ))}
    </svg>
  )
}

// ─── Revision Hours Bar Chart (SVG) ──────────────────────────────────────────

function RevisionBarChart({ data }: { data: RevisionWeek[] }) {
  if (data.length === 0) return null

  const maxHours = Math.max(...data.map((d) => d.hours), 1)
  const barHeight = 180

  return (
    <div className="flex h-52 items-end gap-2">
      <div className="flex h-full flex-col justify-between text-xs text-muted-foreground pr-2 shrink-0">
        <span>{maxHours}h</span>
        <span>{Math.round(maxHours * 0.75)}h</span>
        <span>{Math.round(maxHours * 0.5)}h</span>
        <span>{Math.round(maxHours * 0.25)}h</span>
        <span>0h</span>
      </div>
      <div className="flex flex-1 items-end gap-2 sm:gap-3">
        {data.map((week, i) => {
          const heightPct = (week.hours / maxHours) * 100
          return (
            <div key={i} className="group relative flex flex-1 flex-col items-center">
              <div className="pointer-events-none absolute -top-8 z-10 hidden rounded bg-background border border-border px-2 py-1 text-xs font-medium whitespace-nowrap group-hover:block">
                {week.hours}h
              </div>
              <div
                className="w-full max-w-[48px] rounded-t bg-indigo-500 transition-all duration-300 hover:bg-indigo-400"
                style={{ height: `${Math.max(heightPct, 2)}%` }}
              />
              <span className="mt-1.5 text-[10px] text-muted-foreground leading-tight text-center">
                {week.week}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Skeleton Components ─────────────────────────────────────────────────────

function HeaderSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <Skeleton className="h-8 w-48" />
          <div className="flex gap-2">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-24 rounded-full" />
          </div>
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="h-16 w-16 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  )
}

function OverviewCardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-5 animate-pulse">
      <Skeleton className="h-4 w-24 mb-3" />
      <Skeleton className="h-8 w-16 mb-1" />
      <Skeleton className="h-3 w-20" />
    </div>
  )
}

function TableSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
      <Skeleton className="h-6 w-40 mb-4" />
      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    </div>
  )
}

function SidebarSkeleton() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
        <Skeleton className="h-5 w-28 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
        <Skeleton className="h-5 w-28 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
        <Skeleton className="h-5 w-24 mb-4" />
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-full" />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Teacher Notes Hook ──────────────────────────────────────────────────────

function useTeacherNotes(studentId: string) {
  const storageKey = `teacher-notes-${studentId}`

  const [notes, setNotes] = useState<TeacherNote[]>([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) setNotes(JSON.parse(stored))
    } catch {
      // ignore parse errors
    }
  }, [storageKey])

  const saveNotes = useCallback(
    (updated: TeacherNote[]) => {
      setNotes(updated)
      localStorage.setItem(storageKey, JSON.stringify(updated))
    },
    [storageKey],
  )

  const addNote = useCallback(
    (text: string) => {
      const note: TeacherNote = {
        id: crypto.randomUUID(),
        text,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      saveNotes([note, ...notes])
    },
    [notes, saveNotes],
  )

  const updateNote = useCallback(
    (id: string, text: string) => {
      saveNotes(
        notes.map((n) =>
          n.id === id ? { ...n, text, updatedAt: new Date().toISOString() } : n,
        ),
      )
    },
    [notes, saveNotes],
  )

  const deleteNote = useCallback(
    (id: string) => {
      saveNotes(notes.filter((n) => n.id !== id))
    },
    [notes, saveNotes],
  )

  return { notes, addNote, updateNote, deleteNote }
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function StudentDrilldownPage() {
  const params = useParams()
  const studentId = params.studentId as string

  const [student, setStudent] = useState<StudentData | null>(null)
  const [trends, setTrends] = useState<TrendsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState<'status' | 'score'>('status')

  // Teacher notes
  const { notes, addNote, updateNote, deleteNote } = useTeacherNotes(studentId)
  const [newNoteText, setNewNoteText] = useState('')
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null)
  const [editingNoteText, setEditingNoteText] = useState('')

  // Collapsible sections
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    quizHistory: true,
    mockExams: true,
    essays: true,
    revisionTime: true,
    recommendations: true,
    notes: true,
    activity: false,
  })

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  useEffect(() => {
    if (!studentId) return

    async function fetchData() {
      try {
        const [studentRes, trendsRes] = await Promise.all([
          fetch(`/api/school/students/${studentId}`),
          fetch(`/api/school/students/${studentId}/trends`),
        ])

        if (studentRes.ok) {
          const data = await studentRes.json()
          setStudent(data)
        }

        if (trendsRes.ok) {
          const data = await trendsRes.json()
          setTrends(data)
        }
      } catch (err) {
        console.error('Failed to fetch student data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [studentId])

  // ── Sorted modules ──────────────────────────────────────────────────────

  const sortedModules = useMemo(() => {
    if (!student) return []
    const mods = [...student.modules]
    if (sortBy === 'score') {
      return mods.sort((a, b) => (b.quizScore ?? -1) - (a.quizScore ?? -1))
    }
    const statusOrder = { in_progress: 0, not_started: 1, complete: 2 }
    return mods.sort((a, b) => statusOrder[a.status] - statusOrder[b.status])
  }, [student, sortBy])

  // ── Completion percentage ───────────────────────────────────────────────

  const completionPct = useMemo(() => {
    if (!student || student.totalModules === 0) return 0
    return Math.round((student.modulesCompleted / student.totalModules) * 100)
  }, [student])

  // ── Quiz history for line chart ─────────────────────────────────────────

  const quizChartData = useMemo(() => {
    if (!student?.quizHistory) return []
    return student.quizHistory
      .slice(-10)
      .map((q) => ({
        label: formatDate(q.date).replace(/\s\d{4}$/, ''),
        score: Math.round((q.score / q.maxScore) * 100),
      }))
  }, [student])

  // ── Action handlers ─────────────────────────────────────────────────────

  const handlePrintReport = () => {
    window.print()
  }

  const handleGenerateStudyPlan = () => {
    // Placeholder: would trigger API call to generate AI study plan
    alert(`Study plan generation requested for ${student?.name}. This feature will create a personalised revision schedule based on their strengths and weaknesses.`)
  }

  const handleContactParent = () => {
    if (student?.email) {
      window.location.href = `mailto:${student.email}?subject=Progress Update: ${student.name}&body=Dear Parent/Guardian,%0D%0A%0D%0AI would like to discuss ${student.name}'s progress in English.%0D%0A%0D%0AKind regards`
    }
  }

  // ── Loading state ───────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Skeleton className="h-4 w-32 mb-6" />
          </div>
          <HeaderSkeleton />
          <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <OverviewCardSkeleton key={i} />
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Skeleton className="h-32 w-32 rounded-full" />
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TableSkeleton />
            </div>
            <SidebarSkeleton />
          </div>
          <div className="mt-6">
            <Skeleton className="h-64 w-full rounded-xl" />
          </div>
        </div>
      </div>
    )
  }

  if (!student) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/school"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to School Dashboard
          </Link>
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 py-16 text-center">
            <p className="text-lg font-semibold text-foreground">Student not found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              The student you are looking for does not exist or you do not have permission to view their profile.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const weeklyScores = trends?.weeklyScores ?? []

  // ── Section header helper ───────────────────────────────────────────────

  function SectionHeader({
    sectionKey,
    icon,
    title,
    count,
  }: {
    sectionKey: string
    icon: React.ReactNode
    title: string
    count?: number
  }) {
    return (
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full flex items-center justify-between mb-4"
      >
        <h2 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {icon}
          {title}
          {count !== undefined && (
            <span className="ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
              {count}
            </span>
          )}
        </h2>
        {expandedSections[sectionKey] ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground print:bg-white print:text-black">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* ── Back Link ──────────────────────────────────────────────────── */}
        <div className="mb-6 flex items-center justify-between print:hidden">
          <Link
            href={student.classId ? `/school/classes/${student.classId}` : '/school'}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {student.className || 'Class'}
          </Link>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleGenerateStudyPlan} className="gap-1.5">
              <CalendarDays className="h-4 w-4" />
              <span className="hidden sm:inline">Generate Study Plan</span>
            </Button>
            <Button variant="outline" size="sm" onClick={handlePrintReport} className="gap-1.5">
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline">Print Report</span>
            </Button>
            <Button variant="outline" size="sm" onClick={handleContactParent} className="gap-1.5">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Contact Parent</span>
            </Button>
          </div>
        </div>

        {/* ── Student Header ─────────────────────────────────────────────── */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            {/* Left: Name, badges, trajectory, last active */}
            <div className="space-y-3">
              <h1 className="text-2xl font-bold sm:text-3xl">{student.name}</h1>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                  {student.yearGroup}
                </Badge>
                <Badge variant="outline" className="border-blue-500/20 text-blue-400 bg-blue-500/10">
                  {student.examBoard}
                </Badge>
                {student.className && (
                  <Badge variant="outline" className="border-violet-500/20 text-violet-400 bg-violet-500/10">
                    {student.className}
                  </Badge>
                )}
              </div>

              {/* Trajectory */}
              <div className="flex items-center gap-2">
                {student.trajectory.trend === 'improving' ? (
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-green-400">
                    <ArrowUp className="h-4 w-4" />
                    Improving
                  </span>
                ) : student.trajectory.trend === 'declining' ? (
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-red-400">
                    <ArrowDown className="h-4 w-4" />
                    Declining
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground">
                    <Minus className="h-4 w-4" />
                    Stable
                  </span>
                )}
                {student.trajectory.change !== 0 && (
                  <span className="text-xs text-muted-foreground">
                    ({student.trajectory.change > 0 ? '+' : ''}
                    {student.trajectory.change}%)
                  </span>
                )}
              </div>

              {/* Last active */}
              <p className="text-sm text-muted-foreground">
                Last active: {student.lastActive ? relativeTime(student.lastActive) : 'Never'}
              </p>
            </div>

            {/* Right: Grade Prediction Card */}
            <div className="flex flex-col items-center gap-3 sm:min-w-[160px]">
              <div className={`flex flex-col items-center gap-1 rounded-xl border-2 p-4 ${gradeBgClass(student.predictedGrade)}`}>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Predicted Grade
                </span>
                <span className={`text-4xl font-bold ${gradeColorClass(student.predictedGrade)}`}>
                  {student.predictedGrade}
                </span>
                <div className="flex items-center gap-1 mt-1">
                  {student.trajectory.trend === 'improving' ? (
                    <TrendingUp className="h-3.5 w-3.5 text-green-400" />
                  ) : student.trajectory.trend === 'declining' ? (
                    <TrendingDown className="h-3.5 w-3.5 text-red-400" />
                  ) : (
                    <Minus className="h-3.5 w-3.5 text-muted-foreground" />
                  )}
                  <span className={`text-xs font-medium ${
                    student.trajectory.trend === 'improving'
                      ? 'text-green-400'
                      : student.trajectory.trend === 'declining'
                      ? 'text-red-400'
                      : 'text-muted-foreground'
                  }`}>
                    {student.trajectory.trend === 'improving'
                      ? 'Upward trajectory'
                      : student.trajectory.trend === 'declining'
                      ? 'Downward trajectory'
                      : 'Holding steady'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Overview Cards Row ──────────────────────────────────────────── */}
        <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <BookOpen className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Modules</span>
            </div>
            <p className="text-2xl font-bold tabular-nums">
              {student.modulesCompleted}
              <span className="text-base font-normal text-muted-foreground">
                /{student.totalModules}
              </span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">Completed</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <BarChart3 className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Avg Score</span>
            </div>
            <p className={`text-2xl font-bold tabular-nums ${scoreTextColor(student.averageQuizScore)}`}>
              {student.averageQuizScore}%
            </p>
            <p className="text-xs text-muted-foreground mt-1">Quiz Average</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Clock className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Study Time</span>
            </div>
            <p className="text-2xl font-bold tabular-nums">
              {formatStudyTime(student.totalStudyTimeMinutes)}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Total</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Target className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Practice</span>
            </div>
            <p className="text-2xl font-bold tabular-nums">{student.practiceSessions}</p>
            <p className="text-xs text-muted-foreground mt-1">Sessions</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Award className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Certificates</span>
            </div>
            <p className="text-2xl font-bold tabular-nums">{student.certificatesEarned}</p>
            <p className="text-xs text-muted-foreground mt-1">Earned</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Flame className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Streak</span>
            </div>
            <p className="text-2xl font-bold tabular-nums text-orange-400">
              {student.currentStreak}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Days</p>
          </div>
        </div>

        {/* ── Module Completion Progress Bar ───────────────────────────────── */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Module Completion
            </h2>
            <span className="text-sm font-semibold tabular-nums">
              {completionPct}% <span className="text-muted-foreground font-normal">({student.modulesCompleted}/{student.totalModules})</span>
            </span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
              style={{ width: `${completionPct}%` }}
            />
          </div>
          {/* Module status summary */}
          <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              {student.modules.filter((m) => m.status === 'complete').length} Complete
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              {student.modules.filter((m) => m.status === 'in_progress').length} In Progress
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-border" />
              {student.modules.filter((m) => m.status === 'not_started').length} Not Started
            </span>
          </div>
        </div>

        {/* ── Exam Readiness + Grade Prediction Row ────────────────────────── */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground text-center">
              Exam Readiness
            </h2>
            <ExamReadinessGaugeInline score={student.examReadiness} />
          </div>

          {/* Strengths & Weaknesses Summary */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground text-center">
              Skill Profile
            </h2>
            <div className="space-y-2">
              {[...student.strengths, ...student.weaknesses]
                .sort((a, b) => b.score - a.score)
                .slice(0, 6)
                .map((item, i) => {
                  const isStrength = student.strengths.some((s) => s.area === item.area)
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-28 truncate text-xs font-medium text-foreground">
                        {item.area}
                      </span>
                      <div className="flex-1 h-2 overflow-hidden rounded-full bg-muted">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isStrength ? 'bg-green-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                      <span
                        className={`text-xs font-semibold tabular-nums w-14 text-right ${gcseGradeColor(percentageToGCSEGrade(item.score))}`}
                      >
                        G{percentageToGCSEGrade(item.score)}
                      </span>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>

        {/* ── Two-Column Layout: Modules + Strengths/Weaknesses ────────────── */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* Left Column: Module Progress Table */}
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Module Progress
              </h2>
              <div className="flex items-center gap-1 rounded-lg bg-background p-0.5">
                <button
                  onClick={() => setSortBy('status')}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    sortBy === 'status'
                      ? 'bg-card text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Status
                </button>
                <button
                  onClick={() => setSortBy('score')}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    sortBy === 'score'
                      ? 'bg-card text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Score
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    <th className="pb-3 pr-4">Module</th>
                    <th className="pb-3 pr-4">Status</th>
                    <th className="pb-3 pr-4">Quiz Score</th>
                    <th className="pb-3 pr-4">Time</th>
                    <th className="pb-3">Attempts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sortedModules.map((mod) => (
                    <tr key={mod.moduleId} className="group">
                      <td className="py-3 pr-4">
                        <div>
                          <p className="font-medium text-foreground">{mod.moduleName}</p>
                          <p className="text-xs text-muted-foreground">{mod.courseName}</p>
                        </div>
                      </td>
                      <td className="py-3 pr-4">{statusBadge(mod.status)}</td>
                      <td className="py-3 pr-4">
                        {mod.quizScore !== null ? (
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-16 overflow-hidden rounded-full bg-muted">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${scoreBarColor(mod.quizScore)}`}
                                style={{ width: `${mod.quizScore}%` }}
                              />
                            </div>
                            <span className={`text-xs font-medium tabular-nums ${scoreTextColor(mod.quizScore)}`}>
                              {mod.quizScore}%
                            </span>
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">&mdash;</span>
                        )}
                      </td>
                      <td className="py-3 pr-4">
                        <span className="text-xs tabular-nums text-muted-foreground">
                          {mod.timeSpentMinutes}m
                        </span>
                      </td>
                      <td className="py-3">
                        <span className="text-xs tabular-nums text-muted-foreground">
                          {mod.attempts}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {sortedModules.length === 0 && (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No module data available.
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Strengths, Weaknesses */}
          <div className="space-y-6">
            {/* Strengths Panel */}
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-green-400">
                <Award className="h-4 w-4" />
                Strengths
              </h3>
              {student.strengths.length > 0 ? (
                <div className="space-y-2">
                  {student.strengths.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg bg-green-500/10 border border-green-500/15 px-3 py-2"
                    >
                      <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-green-400 shrink-0" />
                        <span className="truncate">{s.area}</span>
                      </span>
                      <span className="shrink-0 rounded-md bg-green-500/20 px-2 py-0.5 text-xs font-semibold text-green-400 tabular-nums">
                        G{percentageToGCSEGrade(s.score)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">Not enough data yet.</p>
              )}
            </div>

            {/* Weaknesses Panel */}
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-400">
                <XCircle className="h-4 w-4" />
                Weaknesses
              </h3>
              {student.weaknesses.length > 0 ? (
                <div className="space-y-2">
                  {student.weaknesses.map((w, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg bg-red-500/10 border border-red-500/15 px-3 py-2"
                    >
                      <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <XCircle className="h-3.5 w-3.5 text-red-400 shrink-0" />
                        <span className="truncate">{w.area}</span>
                      </span>
                      <span className="shrink-0 rounded-md bg-red-500/20 px-2 py-0.5 text-xs font-semibold text-red-400 tabular-nums">
                        G{percentageToGCSEGrade(w.score)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">Not enough data yet.</p>
              )}
            </div>

            {/* Performance Summary */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Performance Summary
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Overall Score</span>
                  <span className={`font-semibold tabular-nums ${scoreTextColor(student.averageQuizScore)}`}>{student.averageQuizScore}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className={`h-full rounded-full transition-all duration-500 ${scoreBarColor(student.averageQuizScore)}`} style={{ width: `${student.averageQuizScore}%` }} />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Completion</span>
                  <span className="font-semibold tabular-nums text-foreground">
                    {completionPct}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${completionPct}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Quiz & Assessment Score History (Line Chart) ─────────────────── */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <SectionHeader
            sectionKey="quizHistory"
            icon={<BarChart3 className="h-4 w-4 text-indigo-400" />}
            title="Quiz & Assessment Scores - Last 10 Attempts"
            count={student.quizHistory?.length}
          />

          {expandedSections.quizHistory && (
            <>
              {quizChartData.length > 0 ? (
                <LineChart
                  data={quizChartData}
                  height={220}
                  valueKey="score"
                  labelKey="label"
                  color="hsl(var(--chart-4))"
                  maxValue={100}
                />
              ) : (
                <div className="flex h-48 items-center justify-center text-muted-foreground text-sm">
                  No quiz attempts recorded yet.
                </div>
              )}
            </>
          )}
        </div>

        {/* ── Weekly Score Trend Chart ──────────────────────────────────────── */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Weekly Quiz Scores — Last 8 Weeks
          </h2>

          {weeklyScores.length > 0 ? (
            <div className="flex h-56 items-end gap-2">
              <div className="flex h-full flex-col justify-between text-xs text-muted-foreground pr-2 shrink-0">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>

              <div className="flex flex-1 items-end gap-2 sm:gap-3">
                {weeklyScores.map((week, i) => {
                  const barColor =
                    week.trend === 'up'
                      ? 'bg-green-500'
                      : week.trend === 'down'
                      ? 'bg-red-500'
                      : 'bg-border'

                  return (
                    <div
                      key={i}
                      className="group relative flex flex-1 flex-col items-center"
                    >
                      <div className="pointer-events-none absolute -top-8 z-10 hidden rounded bg-background border border-border px-2 py-1 text-xs font-medium whitespace-nowrap group-hover:block">
                        {percentageToGCSEGradeLabel(week.score)} ({week.score}%)
                      </div>
                      <div
                        className={`w-full max-w-[48px] rounded-t transition-all duration-300 ${barColor}`}
                        style={{ height: `${Math.max(week.score, 2)}%` }}
                      />
                      <span className="mt-1.5 text-[10px] text-muted-foreground leading-tight text-center">
                        {week.week}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="flex h-48 items-center justify-center text-muted-foreground text-sm">
              No weekly score data available yet.
            </div>
          )}
        </div>

        {/* ── Mock Exam Results Table ──────────────────────────────────────── */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <SectionHeader
            sectionKey="mockExams"
            icon={<GraduationCap className="h-4 w-4 text-purple-400" />}
            title="Mock Exam Results"
            count={student.mockExamResults?.length}
          />

          {expandedSections.mockExams && (
            <>
              {student.mockExamResults && student.mockExamResults.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        <th className="pb-3 pr-4">Exam</th>
                        <th className="pb-3 pr-4">Date</th>
                        <th className="pb-3 pr-4">Score</th>
                        <th className="pb-3 pr-4">Grade</th>
                        <th className="pb-3">Areas for Improvement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {student.mockExamResults.map((exam) => {
                        const pct = Math.round((exam.score / exam.maxScore) * 100)
                        return (
                          <tr key={exam.id}>
                            <td className="py-3 pr-4 font-medium text-foreground">{exam.examName}</td>
                            <td className="py-3 pr-4 text-xs text-muted-foreground">{formatDate(exam.date)}</td>
                            <td className="py-3 pr-4">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-16 overflow-hidden rounded-full bg-muted">
                                  <div
                                    className={`h-full rounded-full ${scoreBarColor(pct)}`}
                                    style={{ width: `${pct}%` }}
                                  />
                                </div>
                                <span className={`text-xs font-semibold tabular-nums ${scoreTextColor(pct)}`}>
                                  {exam.score}/{exam.maxScore}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 pr-4">
                              <Badge variant="outline" className={`text-xs ${
                                exam.grade === '9' || exam.grade === '8'
                                  ? 'border-purple-500/30 text-purple-400'
                                  : exam.grade === '7' || exam.grade === '6'
                                  ? 'border-green-500/30 text-green-400'
                                  : exam.grade === '5' || exam.grade === '4'
                                  ? 'border-amber-500/30 text-amber-400'
                                  : 'border-red-500/30 text-red-400'
                              }`}>
                                Grade {exam.grade}
                              </Badge>
                            </td>
                            <td className="py-3">
                              <div className="flex flex-wrap gap-1">
                                {exam.areasForImprovement.map((area, i) => (
                                  <span
                                    key={i}
                                    className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-[10px] font-medium text-amber-400"
                                  >
                                    <AlertTriangle className="h-2.5 w-2.5" />
                                    {area}
                                  </span>
                                ))}
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No mock exam results recorded yet.
                </div>
              )}
            </>
          )}
        </div>

        {/* ── Essay Feedback History ───────────────────────────────────────── */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <SectionHeader
            sectionKey="essays"
            icon={<PenLine className="h-4 w-4 text-cyan-400" />}
            title="Essay Feedback History"
            count={student.essaySubmissions?.length}
          />

          {expandedSections.essays && (
            <>
              {student.essaySubmissions && student.essaySubmissions.length > 0 ? (
                <div className="space-y-4">
                  {student.essaySubmissions.map((essay) => (
                    <div
                      key={essay.id}
                      className="rounded-lg border border-border bg-background p-4 hover:border-border/80 transition-colors"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h4 className="font-medium text-foreground truncate">{essay.title}</h4>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                            <span>{formatDate(essay.submittedAt)}</span>
                            <span className="text-border">|</span>
                            <span>{essay.wordCount} words</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <Badge
                            variant="outline"
                            className={`text-sm font-bold ${
                              essay.score >= 70
                                ? 'border-green-500/30 text-green-400'
                                : essay.score >= 50
                                ? 'border-amber-500/30 text-amber-400'
                                : 'border-red-500/30 text-red-400'
                            }`}
                          >
                            {essay.grade}
                          </Badge>
                          <span className={`text-sm font-semibold tabular-nums ${gcseGradeColor(percentageToGCSEGrade(essay.score))}`}>
                            {percentageToGCSEGradeLabel(essay.score)}
                          </span>
                        </div>
                      </div>
                      {essay.feedbackPoints.length > 0 && (
                        <div className="mt-3 space-y-1">
                          {essay.feedbackPoints.map((point, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <span className="mt-1 h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No essay submissions recorded yet.
                </div>
              )}
            </>
          )}
        </div>

        {/* ── Revision Time Chart ──────────────────────────────────────────── */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <SectionHeader
            sectionKey="revisionTime"
            icon={<Clock className="h-4 w-4 text-indigo-400" />}
            title="Revision Time - Last 8 Weeks"
          />

          {expandedSections.revisionTime && (
            <>
              {student.revisionHours && student.revisionHours.length > 0 ? (
                <RevisionBarChart data={student.revisionHours} />
              ) : (
                <div className="flex h-48 items-center justify-center text-muted-foreground text-sm">
                  No revision time data available yet.
                </div>
              )}
            </>
          )}
        </div>

        {/* ── Personalized Recommendations ────────────────────────────────── */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <SectionHeader
            sectionKey="recommendations"
            icon={<Zap className="h-4 w-4 text-primary" />}
            title="What This Student Should Focus on Next"
            count={student.recommendations.length}
          />

          {expandedSections.recommendations && (
            <>
              {student.recommendations.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {student.recommendations.map((rec) => (
                    <div
                      key={rec.id}
                      className={`rounded-xl border bg-background p-4 transition-colors ${recommendationBorder(rec.type)}`}
                    >
                      <div className="mb-2 flex items-start gap-3">
                        <div className="shrink-0 mt-0.5">{recommendationIcon(rec.type)}</div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold text-foreground leading-snug">
                            {rec.title}
                          </h4>
                          <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                            {rec.description}
                          </p>
                        </div>
                      </div>
                      {rec.link && (
                        <Link
                          href={rec.link}
                          className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Go to resource
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Complete more activities to receive personalized recommendations.
                </p>
              )}
            </>
          )}
        </div>

        {/* ── Teacher Notes ────────────────────────────────────────────────── */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6 print:hidden">
          <SectionHeader
            sectionKey="notes"
            icon={<FileText className="h-4 w-4 text-amber-400" />}
            title="Teacher Notes"
            count={notes.length}
          />

          {expandedSections.notes && (
            <div className="space-y-4">
              {/* Add note form */}
              <div className="flex gap-2">
                <textarea
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  placeholder="Add a note about this student..."
                  className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  rows={2}
                />
                <Button
                  size="sm"
                  onClick={() => {
                    if (newNoteText.trim()) {
                      addNote(newNoteText.trim())
                      setNewNoteText('')
                    }
                  }}
                  disabled={!newNoteText.trim()}
                  className="self-end gap-1.5"
                >
                  <Plus className="h-4 w-4" />
                  Add
                </Button>
              </div>

              <Separator />

              {/* Notes list */}
              {notes.length > 0 ? (
                <div className="space-y-3">
                  {notes.map((note) => (
                    <div
                      key={note.id}
                      className="rounded-lg border border-border bg-background p-4"
                    >
                      {editingNoteId === note.id ? (
                        <div className="space-y-2">
                          <textarea
                            value={editingNoteText}
                            onChange={(e) => setEditingNoteText(e.target.value)}
                            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                            rows={3}
                          />
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                updateNote(note.id, editingNoteText.trim())
                                setEditingNoteId(null)
                              }}
                              disabled={!editingNoteText.trim()}
                              className="gap-1"
                            >
                              <Save className="h-3 w-3" />
                              Save
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setEditingNoteId(null)}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="text-sm text-foreground whitespace-pre-wrap">{note.text}</p>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-[10px] text-muted-foreground">
                              {formatDate(note.createdAt)}
                              {note.updatedAt !== note.createdAt && ' (edited)'}
                            </span>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => {
                                  setEditingNoteId(note.id)
                                  setEditingNoteText(note.text)
                                }}
                                className="rounded p-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                                title="Edit note"
                              >
                                <PenLine className="h-3 w-3" />
                              </button>
                              <button
                                onClick={() => deleteNote(note.id)}
                                className="rounded p-1 text-muted-foreground hover:text-red-400 hover:bg-red-500/10 transition-colors"
                                title="Delete note"
                              >
                                <Trash2 className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="py-4 text-center text-sm text-muted-foreground">
                  No notes yet. Add a note above to keep track of observations about this student.
                </p>
              )}
            </div>
          )}
        </div>

        {/* ── Recent Activity Feed ────────────────────────────────────────── */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <SectionHeader
            sectionKey="activity"
            icon={<Clock className="h-4 w-4 text-muted-foreground" />}
            title="Recent Activity"
            count={student.recentActivity.length}
          />

          {expandedSections.activity && (
            <>
              {student.recentActivity.length > 0 ? (
                <div className="relative">
                  <div className="absolute left-[11px] top-0 bottom-0 w-px bg-border" />

                  <div className="space-y-0">
                    {student.recentActivity.map((activity) => (
                      <div key={activity.id} className="relative flex items-start gap-4 py-3">
                        <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-card border border-border">
                          {activityIcon(activity.type)}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm text-foreground leading-snug">{activity.text}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {relativeTime(activity.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No recent activity.
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  )
}
