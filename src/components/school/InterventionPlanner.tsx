'use client'

import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import {
  AlertTriangle,
  ArrowDown,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Eye,
  FileText,
  Loader2,
  Phone,
  Plus,
  Printer,
  Target,
  TrendingDown,
  Users,
  UserPlus,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { StudentAnalytics } from '@/lib/types'
import { percentageToGCSEGradeLabel } from '@/lib/grades'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

// ── Types ────────────────────────────────────────────────────────────────────

export type InterventionType =
  | '1-to-1'
  | 'small-group'
  | 'targeted-homework'
  | 'revision-resources'
  | 'parent-contact'

export type InterventionStatus = 'planned' | 'in-progress' | 'completed' | 'reviewed'

export interface InterventionPlan {
  id: string
  classId: string
  studentIds: string[]
  type: InterventionType
  status: InterventionStatus
  title: string
  notes: string
  resources: string
  startDate: string
  endDate: string
  weeksDuration: number
  gradesBefore: Record<string, string | null>
  gradesAfter: Record<string, string | null>
  createdAt: string
  updatedAt: string
}

interface StudentNeedingIntervention {
  student: StudentAnalytics
  gap: number
  suggestedIntervention: InterventionType
  reason: string
}

// ── Props ────────────────────────────────────────────────────────────────────

interface InterventionPlannerProps {
  students: StudentAnalytics[]
  classId: string
}

// ── Constants ────────────────────────────────────────────────────────────────

const INTERVENTION_LABELS: Record<InterventionType, string> = {
  '1-to-1': '1-to-1 Session',
  'small-group': 'Small Group',
  'targeted-homework': 'Targeted Homework',
  'revision-resources': 'Revision Resources',
  'parent-contact': 'Parent Contact',
}

const INTERVENTION_ICONS: Record<InterventionType, typeof Users> = {
  '1-to-1': UserPlus,
  'small-group': Users,
  'targeted-homework': FileText,
  'revision-resources': BookOpen,
  'parent-contact': Phone,
}

const STATUS_CONFIG: Record<InterventionStatus, { label: string; bg: string; text: string }> = {
  planned: { label: 'Planned', bg: 'bg-blue-500/10', text: 'text-blue-400' },
  'in-progress': { label: 'In Progress', bg: 'bg-amber-500/10', text: 'text-clay-600' },
  completed: { label: 'Completed', bg: 'bg-green-500/10', text: 'text-green-400' },
  reviewed: { label: 'Reviewed', bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
}

const STATUS_ORDER: InterventionStatus[] = ['planned', 'in-progress', 'completed', 'reviewed']

const GRADE_OPTIONS = ['9', '8', '7', '6', '5', '4', '3', '2', '1', 'U']

const STORAGE_KEY_PREFIX = 'intervention-plans-'

// ── Helpers ──────────────────────────────────────────────────────────────────

function generateId(): string {
  return `int-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function gradeToNumber(grade: string | null): number {
  if (!grade) return 0
  const g = grade.trim().toUpperCase()
  if (g === 'U') return 0
  const n = parseInt(g, 10)
  return isNaN(n) ? 0 : n
}

function getTargetGrade(student: StudentAnalytics): string {
  // Infer a reasonable target: if predicted grade exists, aim 1 above; otherwise use score-based estimate
  const predicted = gradeToNumber(student.predicted_grade)
  if (predicted > 0) return String(Math.min(predicted + 1, 9))
  if (student.avg_quiz_score >= 70) return '7'
  if (student.avg_quiz_score >= 50) return '5'
  return '4'
}

function suggestIntervention(student: StudentAnalytics): {
  type: InterventionType
  reason: string
} {
  if (student.trajectory === 'declining' && student.avg_quiz_score < 40) {
    return { type: '1-to-1', reason: 'Rapidly declining with low scores - needs intensive support' }
  }
  if (student.trajectory === 'declining') {
    return { type: 'parent-contact', reason: 'Declining trajectory - parent awareness needed' }
  }
  if (student.weaknesses.length >= 3) {
    return { type: 'small-group', reason: 'Multiple weak areas - benefits from peer learning' }
  }
  if (student.completion_rate < 50) {
    return { type: 'targeted-homework', reason: 'Low completion rate - structured homework needed' }
  }
  return { type: 'revision-resources', reason: 'Below target - additional resources recommended' }
}

function loadPlans(classId: string): InterventionPlan[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PREFIX + classId)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function savePlans(classId: string, plans: InterventionPlan[]) {
  localStorage.setItem(STORAGE_KEY_PREFIX + classId, JSON.stringify(plans))
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function getWeekLabel(dateStr: string): string {
  const d = new Date(dateStr)
  const weekStart = new Date(d)
  weekStart.setDate(d.getDate() - d.getDay() + 1) // Monday
  return weekStart.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

// ── Main Component ───────────────────────────────────────────────────────────

export function InterventionPlanner({ students, classId }: InterventionPlannerProps) {
  const [plans, setPlans] = useState<InterventionPlan[]>([])
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<InterventionPlan | null>(null)
  const [activeTab, setActiveTab] = useState<'needs' | 'plans' | 'timeline'>('needs')
  const printRef = useRef<HTMLDivElement>(null)

  // Load from localStorage on mount
  useEffect(() => {
    setPlans(loadPlans(classId))
  }, [classId])

  // Persist plans on change
  const updatePlans = useCallback(
    (updater: (prev: InterventionPlan[]) => InterventionPlan[]) => {
      setPlans((prev) => {
        const next = updater(prev)
        savePlans(classId, next)
        return next
      })
    },
    [classId],
  )

  // Identify students needing intervention
  const studentsNeedingIntervention = useMemo<StudentNeedingIntervention[]>(() => {
    return students
      .filter((s) => {
        const predicted = gradeToNumber(s.predicted_grade)
        const target = gradeToNumber(getTargetGrade(s))
        const belowTarget = predicted > 0 && predicted < target
        const declining = s.trajectory === 'declining'
        const lowScore = s.avg_quiz_score < 50
        return belowTarget || declining || lowScore
      })
      .map((student) => {
        const predicted = gradeToNumber(student.predicted_grade)
        const target = gradeToNumber(getTargetGrade(student))
        const { type, reason } = suggestIntervention(student)
        return {
          student,
          gap: Math.max(target - predicted, 0),
          suggestedIntervention: type,
          reason,
        }
      })
      .sort((a, b) => b.gap - a.gap || a.student.avg_quiz_score - b.student.avg_quiz_score)
  }, [students])

  // Timeline weeks (next 8 weeks)
  const timelineWeeks = useMemo(() => {
    const weeks: { start: Date; label: string }[] = []
    const now = new Date()
    const monday = new Date(now)
    monday.setDate(now.getDate() - now.getDay() + 1)
    monday.setHours(0, 0, 0, 0)
    for (let i = 0; i < 8; i++) {
      const start = new Date(monday)
      start.setDate(monday.getDate() + i * 7)
      weeks.push({
        start,
        label: start.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
      })
    }
    return weeks
  }, [])

  // Map student IDs to names
  const studentMap = useMemo(() => {
    const map = new Map<string, StudentAnalytics>()
    students.forEach((s) => map.set(s.student_id, s))
    return map
  }, [students])

  // Plan counts by status
  const statusCounts = useMemo(() => {
    const counts: Record<InterventionStatus, number> = {
      planned: 0,
      'in-progress': 0,
      completed: 0,
      reviewed: 0,
    }
    plans.forEach((p) => counts[p.status]++)
    return counts
  }, [plans])

  const handleAdvanceStatus = useCallback(
    (planId: string) => {
      updatePlans((prev) =>
        prev.map((p) => {
          if (p.id !== planId) return p
          const idx = STATUS_ORDER.indexOf(p.status)
          if (idx < STATUS_ORDER.length - 1) {
            return { ...p, status: STATUS_ORDER[idx + 1], updatedAt: new Date().toISOString() }
          }
          return p
        }),
      )
    },
    [updatePlans],
  )

  const handleDeletePlan = useCallback(
    (planId: string) => {
      updatePlans((prev) => prev.filter((p) => p.id !== planId))
      setSelectedPlan(null)
    },
    [updatePlans],
  )

  const handleUpdateGradeAfter = useCallback(
    (planId: string, studentId: string, grade: string) => {
      updatePlans((prev) =>
        prev.map((p) => {
          if (p.id !== planId) return p
          return {
            ...p,
            gradesAfter: { ...p.gradesAfter, [studentId]: grade },
            updatedAt: new Date().toISOString(),
          }
        }),
      )
    },
    [updatePlans],
  )

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  return (
    <div className="space-y-6">
      {/* Header stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{studentsNeedingIntervention.length}</p>
              <p className="text-xs text-muted-foreground">Need Intervention</p>
            </div>
          </CardContent>
        </Card>
        {(['planned', 'in-progress', 'completed'] as InterventionStatus[]).map((status) => {
          const cfg = STATUS_CONFIG[status]
          return (
            <Card key={status}>
              <CardContent className="flex items-center gap-3 p-4">
                <div
                  className={cn(
                    'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
                    cfg.bg,
                  )}
                >
                  {status === 'planned' && <Calendar className={cn('h-5 w-5', cfg.text)} />}
                  {status === 'in-progress' && <Clock className={cn('h-5 w-5', cfg.text)} />}
                  {status === 'completed' && <CheckCircle2 className={cn('h-5 w-5', cfg.text)} />}
                </div>
                <div>
                  <p className="text-2xl font-bold">{statusCounts[status]}</p>
                  <p className="text-xs text-muted-foreground">{cfg.label}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Tab navigation */}
      <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/30 p-1">
        {[
          { key: 'needs' as const, label: 'Students Needing Intervention', icon: AlertTriangle },
          { key: 'plans' as const, label: 'Intervention Plans', icon: FileText },
          { key: 'timeline' as const, label: 'Timeline', icon: Calendar },
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={cn(
              'flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
              activeTab === key
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>

      {/* Tab: Students Needing Intervention */}
      {activeTab === 'needs' && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Students Needing Intervention</CardTitle>
              <CardDescription>
                Auto-identified from below-target grades, declining trajectories, and low scores
              </CardDescription>
            </div>
            <Button size="sm" onClick={() => setShowCreateDialog(true)}>
              <Plus className="mr-1.5 h-4 w-4" data-icon="inline-start" />
              Create Plan
            </Button>
          </CardHeader>
          <CardContent>
            {studentsNeedingIntervention.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="mb-3 h-10 w-10 text-green-400" />
                <p className="font-medium">All students are on track</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  No students currently require intervention based on analytics data
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {studentsNeedingIntervention.map(
                  ({ student, gap, suggestedIntervention, reason }) => {
                    const InterventionIcon = INTERVENTION_ICONS[suggestedIntervention]
                    return (
                      <div
                        key={student.student_id}
                        className="flex flex-col gap-3 rounded-lg border border-border p-4 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="flex-1 space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{student.student_name}</span>
                            {student.trajectory === 'declining' && (
                              <Badge variant="destructive" className="gap-1">
                                <TrendingDown className="h-3 w-3" />
                                Declining
                              </Badge>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                            <span>
                              Current:{' '}
                              <span className="font-medium text-foreground">
                                {student.predicted_grade ?? 'N/A'}
                              </span>
                            </span>
                            <span>
                              Target:{' '}
                              <span className="font-medium text-foreground">
                                {getTargetGrade(student)}
                              </span>
                            </span>
                            <span>
                              Gap:{' '}
                              <span
                                className={cn(
                                  'font-medium',
                                  gap > 2 ? 'text-red-400' : 'text-clay-600',
                                )}
                              >
                                {gap} grade{gap !== 1 ? 's' : ''}
                              </span>
                            </span>
                            <span>
                              Avg Score:{' '}
                              <span
                                className={cn(
                                  'font-medium',
                                  student.avg_quiz_score >= 70
                                    ? 'text-green-400'
                                    : student.avg_quiz_score >= 50
                                      ? 'text-clay-600'
                                      : 'text-red-400',
                                )}
                              >
                                {percentageToGCSEGradeLabel(Math.round(student.avg_quiz_score))}
                              </span>
                            </span>
                          </div>
                          {student.weaknesses.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {student.weaknesses.slice(0, 4).map((w) => (
                                <Badge key={w} variant="outline" className="text-xs">
                                  {w}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1.5 rounded-md bg-muted/50 px-3 py-1.5 text-sm">
                            <InterventionIcon className="h-3.5 w-3.5 text-muted-foreground" />
                            <span>{INTERVENTION_LABELS[suggestedIntervention]}</span>
                          </div>
                        </div>
                      </div>
                    )
                  },
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Tab: Intervention Plans */}
      {activeTab === 'plans' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Intervention Plans</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="mr-1.5 h-4 w-4" data-icon="inline-start" />
                Print
              </Button>
              <Button size="sm" onClick={() => setShowCreateDialog(true)}>
                <Plus className="mr-1.5 h-4 w-4" data-icon="inline-start" />
                New Plan
              </Button>
            </div>
          </div>

          {plans.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <FileText className="mb-3 h-10 w-10 text-muted-foreground" />
                <p className="font-medium">No intervention plans yet</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Create a plan to start tracking interventions
                </p>
              </CardContent>
            </Card>
          ) : (
            <div ref={printRef} className="space-y-3 print:space-y-6">
              {/* Print header - only visible when printing */}
              <div className="hidden print:block print:mb-4">
                <h1 className="text-xl font-bold">Intervention Plans</h1>
                <p className="text-sm text-muted-foreground">
                  Printed {new Date().toLocaleDateString('en-GB')}
                </p>
                <Separator className="mt-2" />
              </div>

              {plans
                .sort(
                  (a, b) =>
                    STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status) ||
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
                )
                .map((plan) => {
                  const cfg = STATUS_CONFIG[plan.status]
                  const InterventionIcon = INTERVENTION_ICONS[plan.type]
                  return (
                    <Card
                      key={plan.id}
                      className="print:break-inside-avoid print:border print:shadow-none"
                    >
                      <CardContent className="p-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                              <InterventionIcon className="h-4 w-4 text-muted-foreground" />
                              <span className="font-semibold">{plan.title}</span>
                              <Badge className={cn(cfg.bg, cfg.text, 'border-0')}>
                                {cfg.label}
                              </Badge>
                              <Badge variant="outline">{INTERVENTION_LABELS[plan.type]}</Badge>
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                              <span>
                                {formatDate(plan.startDate)} - {formatDate(plan.endDate)}
                              </span>
                              <span>
                                {plan.weeksDuration} week{plan.weeksDuration !== 1 ? 's' : ''}
                              </span>
                              <span>
                                {plan.studentIds.length} student
                                {plan.studentIds.length !== 1 ? 's' : ''}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {plan.studentIds.map((id) => {
                                const s = studentMap.get(id)
                                return (
                                  <Badge key={id} variant="secondary" className="text-xs">
                                    {s?.student_name ?? id}
                                  </Badge>
                                )
                              })}
                            </div>
                            {plan.notes && (
                              <p className="text-sm text-muted-foreground">{plan.notes}</p>
                            )}

                            {/* Impact tracking for completed/reviewed */}
                            {(plan.status === 'completed' || plan.status === 'reviewed') && (
                              <div className="mt-2 rounded-md border border-border bg-muted/20 p-3">
                                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                  Impact Tracking
                                </p>
                                <div className="space-y-1.5">
                                  {plan.studentIds.map((id) => {
                                    const s = studentMap.get(id)
                                    const before = plan.gradesBefore[id]
                                    const after = plan.gradesAfter[id]
                                    const improved =
                                      before &&
                                      after &&
                                      gradeToNumber(after) > gradeToNumber(before)
                                    return (
                                      <div key={id} className="flex items-center gap-2 text-sm">
                                        <span className="w-32 truncate">
                                          {s?.student_name ?? id}
                                        </span>
                                        <span className="text-muted-foreground">
                                          {before ?? 'N/A'}
                                        </span>
                                        <ChevronRight className="h-3 w-3 text-muted-foreground" />
                                        <span
                                          className={cn(
                                            'font-medium',
                                            improved ? 'text-green-400' : 'text-foreground',
                                          )}
                                        >
                                          {after ?? '-'}
                                        </span>
                                        {improved && (
                                          <Badge className="border-0 bg-green-500/10 text-green-400 text-xs">
                                            +{gradeToNumber(after!) - gradeToNumber(before!)}
                                          </Badge>
                                        )}
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="flex shrink-0 gap-2 print:hidden">
                            <Button
                              variant="outline"
                              size="xs"
                              onClick={() => setSelectedPlan(plan)}
                            >
                              <Eye className="mr-1 h-3 w-3" data-icon="inline-start" />
                              Details
                            </Button>
                            {plan.status !== 'reviewed' && (
                              <Button size="xs" onClick={() => handleAdvanceStatus(plan.id)}>
                                <ChevronRight className="mr-1 h-3 w-3" data-icon="inline-start" />
                                {STATUS_ORDER[STATUS_ORDER.indexOf(plan.status) + 1]
                                  ? STATUS_CONFIG[
                                      STATUS_ORDER[STATUS_ORDER.indexOf(plan.status) + 1]
                                    ].label
                                  : ''}
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          )}
        </div>
      )}

      {/* Tab: Timeline */}
      {activeTab === 'timeline' && (
        <Card>
          <CardHeader>
            <CardTitle>Intervention Timeline</CardTitle>
            <CardDescription>Planned interventions over the coming weeks</CardDescription>
          </CardHeader>
          <CardContent>
            {plans.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Calendar className="mb-3 h-10 w-10 text-muted-foreground" />
                <p className="font-medium">No interventions scheduled</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Create an intervention plan to see it on the timeline
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <div className="min-w-[640px]">
                  {/* Week headers */}
                  <div className="mb-2 grid grid-cols-[180px_repeat(8,1fr)] gap-1">
                    <div className="text-xs font-medium text-muted-foreground">Intervention</div>
                    {timelineWeeks.map((w) => (
                      <div
                        key={w.label}
                        className="text-center text-xs font-medium text-muted-foreground"
                      >
                        w/c {w.label}
                      </div>
                    ))}
                  </div>

                  <Separator className="mb-2" />

                  {/* Plan rows */}
                  {plans.map((plan) => {
                    const cfg = STATUS_CONFIG[plan.status]
                    const planStart = new Date(plan.startDate)
                    const planEnd = new Date(plan.endDate)

                    return (
                      <div
                        key={plan.id}
                        className="mb-1.5 grid grid-cols-[180px_repeat(8,1fr)] gap-1"
                      >
                        <div className="flex items-center gap-1.5 truncate text-sm">
                          <span className={cn('h-2 w-2 rounded-full', cfg.bg.replace('/10', ''))} />
                          <span className="truncate">{plan.title}</span>
                        </div>
                        {timelineWeeks.map((w) => {
                          const weekEnd = new Date(w.start)
                          weekEnd.setDate(w.start.getDate() + 6)
                          const active = planStart <= weekEnd && planEnd >= w.start
                          const isStart = planStart >= w.start && planStart <= weekEnd
                          const isEnd = planEnd >= w.start && planEnd <= weekEnd

                          return (
                            <div key={w.label} className="flex items-center px-0.5">
                              {active ? (
                                <div
                                  className={cn(
                                    'h-6 w-full',
                                    cfg.bg,
                                    isStart && 'rounded-l-md',
                                    isEnd && 'rounded-r-md',
                                    !isStart && !isEnd && 'rounded-none',
                                  )}
                                  title={`${plan.title} (${cfg.label})`}
                                />
                              ) : (
                                <div className="h-6 w-full" />
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}

                  {/* Legend */}
                  <Separator className="my-3" />
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    {STATUS_ORDER.map((status) => {
                      const cfg = STATUS_CONFIG[status]
                      return (
                        <div key={status} className="flex items-center gap-1.5">
                          <div className={cn('h-3 w-3 rounded-sm', cfg.bg)} />
                          <span>{cfg.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Create Plan Dialog */}
      <CreatePlanDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        students={students}
        studentsNeedingIntervention={studentsNeedingIntervention}
        classId={classId}
        onCreatePlan={(plan) => {
          updatePlans((prev) => [...prev, plan])
          setShowCreateDialog(false)
        }}
      />

      {/* Plan Detail Dialog */}
      {selectedPlan && (
        <PlanDetailDialog
          plan={selectedPlan}
          studentMap={studentMap}
          onClose={() => setSelectedPlan(null)}
          onAdvanceStatus={handleAdvanceStatus}
          onDelete={handleDeletePlan}
          onUpdateGradeAfter={handleUpdateGradeAfter}
        />
      )}
    </div>
  )
}

// ── Create Plan Dialog ───────────────────────────────────────────────────────

interface CreatePlanDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  students: StudentAnalytics[]
  studentsNeedingIntervention: StudentNeedingIntervention[]
  classId: string
  onCreatePlan: (plan: InterventionPlan) => void
}

function CreatePlanDialog({
  open,
  onOpenChange,
  students,
  studentsNeedingIntervention,
  classId,
  onCreatePlan,
}: CreatePlanDialogProps) {
  const [selectedStudentIds, setSelectedStudentIds] = useState<Set<string>>(new Set())
  const [interventionType, setInterventionType] = useState<InterventionType>('1-to-1')
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [resources, setResources] = useState('')
  const [weeksDuration, setWeeksDuration] = useState(4)
  const [startDate, setStartDate] = useState(() => {
    const d = new Date()
    const monday = new Date(d)
    monday.setDate(d.getDate() - d.getDay() + 1 + 7) // Next Monday
    return monday.toISOString().split('T')[0]
  })

  // Reset form when opening
  useEffect(() => {
    if (open) {
      setSelectedStudentIds(new Set())
      setInterventionType('1-to-1')
      setTitle('')
      setNotes('')
      setResources('')
      setWeeksDuration(4)
    }
  }, [open])

  // Pre-populate suggestions
  const suggestions = useMemo(() => {
    const grouped: Record<InterventionType, string[]> = {
      '1-to-1': [],
      'small-group': [],
      'targeted-homework': [],
      'revision-resources': [],
      'parent-contact': [],
    }
    studentsNeedingIntervention.forEach(({ student, suggestedIntervention }) => {
      grouped[suggestedIntervention].push(student.student_id)
    })
    return grouped
  }, [studentsNeedingIntervention])

  const handleSelectSuggestion = (type: InterventionType) => {
    setInterventionType(type)
    setSelectedStudentIds(new Set(suggestions[type]))
    setTitle(
      `${INTERVENTION_LABELS[type]} - ${new Date().toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}`,
    )
  }

  const toggleStudent = (id: string) => {
    setSelectedStudentIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleCreate = () => {
    if (selectedStudentIds.size === 0 || !title.trim()) return

    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + weeksDuration * 7)

    const gradesBefore: Record<string, string | null> = {}
    selectedStudentIds.forEach((id) => {
      const s = students.find((st) => st.student_id === id)
      gradesBefore[id] = s?.predicted_grade ?? null
    })

    const plan: InterventionPlan = {
      id: generateId(),
      classId,
      studentIds: Array.from(selectedStudentIds),
      type: interventionType,
      status: 'planned',
      title: title.trim(),
      notes: notes.trim(),
      resources: resources.trim(),
      startDate,
      endDate: endDate.toISOString().split('T')[0],
      weeksDuration,
      gradesBefore,
      gradesAfter: {},
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    onCreatePlan(plan)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Intervention Plan</DialogTitle>
          <DialogDescription>
            Select students and configure the intervention details
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 py-2">
          {/* Pre-populated suggestions */}
          {studentsNeedingIntervention.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Quick Suggestions</label>
              <div className="flex flex-wrap gap-2">
                {(Object.entries(suggestions) as [InterventionType, string[]][])
                  .filter(([, ids]) => ids.length > 0)
                  .map(([type, ids]) => (
                    <button
                      key={type}
                      onClick={() => handleSelectSuggestion(type)}
                      className="flex items-center gap-1.5 rounded-md border border-border bg-muted/30 px-3 py-1.5 text-sm transition-colors hover:bg-muted/60"
                    >
                      {(() => {
                        const Icon = INTERVENTION_ICONS[type]
                        return <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                      })()}
                      <span>{INTERVENTION_LABELS[type]}</span>
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {ids.length}
                      </Badge>
                    </button>
                  ))}
              </div>
            </div>
          )}

          {/* Title */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Plan Title</label>
            <Input
              placeholder="e.g. Year 11 Writing Intervention - Spring Term"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Intervention type */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Intervention Type</label>
            <Select
              value={interventionType}
              onValueChange={(v) => setInterventionType(v as InterventionType)}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(Object.entries(INTERVENTION_LABELS) as [InterventionType, string][]).map(
                  ([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ),
                )}
              </SelectContent>
            </Select>
          </div>

          {/* Duration & Start */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Start Date</label>
              <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Duration (weeks)</label>
              <Select
                value={String(weeksDuration)}
                onValueChange={(v) => setWeeksDuration(Number(v))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 6, 8, 10, 12].map((w) => (
                    <SelectItem key={w} value={String(w)}>
                      {w} week{w !== 1 ? 's' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Student selection */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium">
              Select Students ({selectedStudentIds.size} selected)
            </label>
            <div className="max-h-48 overflow-y-auto rounded-md border border-border">
              {students
                .sort((a, b) => a.student_name.localeCompare(b.student_name))
                .map((s) => {
                  const needsIntervention = studentsNeedingIntervention.some(
                    (n) => n.student.student_id === s.student_id,
                  )
                  return (
                    <label
                      key={s.student_id}
                      className={cn(
                        'flex cursor-pointer items-center gap-3 border-b border-border px-3 py-2 last:border-0 transition-colors hover:bg-muted/30',
                        selectedStudentIds.has(s.student_id) && 'bg-primary/5',
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={selectedStudentIds.has(s.student_id)}
                        onChange={() => toggleStudent(s.student_id)}
                        className="h-4 w-4 shrink-0 rounded border-border accent-primary"
                      />
                      <span className="flex-1 text-sm">{s.student_name}</span>
                      <span className="text-xs text-muted-foreground">
                        {s.predicted_grade ?? '-'}
                      </span>
                      {needsIntervention && (
                        <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-clay-600" />
                      )}
                    </label>
                  )
                })}
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Notes</label>
            <textarea
              className="flex min-h-[80px] w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              placeholder="Intervention goals, focus areas, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Resources */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Resources</label>
            <Input
              placeholder="e.g. AQA revision guide p.45-60, past papers"
              value={resources}
              onChange={(e) => setResources(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose
            render={
              <button className="inline-flex h-9 items-center justify-center rounded-lg border border-border px-3.5 text-sm font-semibold transition-colors hover:bg-accent" />
            }
          >
            Cancel
          </DialogClose>
          <Button onClick={handleCreate} disabled={selectedStudentIds.size === 0 || !title.trim()}>
            Create Plan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// ── Plan Detail Dialog ───────────────────────────────────────────────────────

interface PlanDetailDialogProps {
  plan: InterventionPlan
  studentMap: Map<string, StudentAnalytics>
  onClose: () => void
  onAdvanceStatus: (planId: string) => void
  onDelete: (planId: string) => void
  onUpdateGradeAfter: (planId: string, studentId: string, grade: string) => void
}

function PlanDetailDialog({
  plan,
  studentMap,
  onClose,
  onAdvanceStatus,
  onDelete,
  onUpdateGradeAfter,
}: PlanDetailDialogProps) {
  const cfg = STATUS_CONFIG[plan.status]
  const InterventionIcon = INTERVENTION_ICONS[plan.type]
  const nextStatusIdx = STATUS_ORDER.indexOf(plan.status) + 1
  const canAdvance = nextStatusIdx < STATUS_ORDER.length

  return (
    <Dialog open onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <InterventionIcon className="h-5 w-5" />
            {plan.title}
          </DialogTitle>
          <DialogDescription>
            {INTERVENTION_LABELS[plan.type]} - {plan.weeksDuration} week
            {plan.weeksDuration !== 1 ? 's' : ''}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Status & dates */}
          <div className="flex flex-wrap gap-2">
            <Badge className={cn(cfg.bg, cfg.text, 'border-0')}>{cfg.label}</Badge>
            <Badge variant="outline">
              {formatDate(plan.startDate)} - {formatDate(plan.endDate)}
            </Badge>
          </div>

          {/* Students & impact */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Students ({plan.studentIds.length})</p>
            <div className="rounded-md border border-border">
              <div className="grid grid-cols-[1fr_60px_20px_60px] items-center gap-2 border-b border-border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <span>Name</span>
                <span className="text-center">Before</span>
                <span />
                <span className="text-center">After</span>
              </div>
              {plan.studentIds.map((id) => {
                const s = studentMap.get(id)
                const before = plan.gradesBefore[id]
                const after = plan.gradesAfter[id]
                const showGradeInput = plan.status === 'completed' || plan.status === 'reviewed'

                return (
                  <div
                    key={id}
                    className="grid grid-cols-[1fr_60px_20px_60px] items-center gap-2 border-b border-border px-3 py-2 last:border-0"
                  >
                    <span className="truncate text-sm">{s?.student_name ?? id}</span>
                    <span className="text-center text-sm">{before ?? 'N/A'}</span>
                    <ChevronRight className="mx-auto h-3 w-3 text-muted-foreground" />
                    {showGradeInput ? (
                      <Select
                        value={after ?? ''}
                        onValueChange={(v) => onUpdateGradeAfter(plan.id, id, v)}
                      >
                        <SelectTrigger size="sm" className="h-7 w-full text-xs">
                          <SelectValue placeholder="-" />
                        </SelectTrigger>
                        <SelectContent>
                          {GRADE_OPTIONS.map((g) => (
                            <SelectItem key={g} value={g}>
                              {g}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <span className="text-center text-sm text-muted-foreground">-</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Notes & resources */}
          {plan.notes && (
            <div className="space-y-1">
              <p className="text-sm font-medium">Notes</p>
              <p className="text-sm text-muted-foreground">{plan.notes}</p>
            </div>
          )}
          {plan.resources && (
            <div className="space-y-1">
              <p className="text-sm font-medium">Resources</p>
              <p className="text-sm text-muted-foreground">{plan.resources}</p>
            </div>
          )}

          <Separator />

          <p className="text-xs text-muted-foreground">
            Created {formatDate(plan.createdAt)} - Last updated {formatDate(plan.updatedAt)}
          </p>
        </div>

        <DialogFooter>
          <Button variant="destructive" size="sm" onClick={() => onDelete(plan.id)}>
            Delete
          </Button>
          <div className="flex-1" />
          <DialogClose
            render={
              <button className="inline-flex h-9 items-center justify-center rounded-lg border border-border px-3.5 text-sm font-semibold transition-colors hover:bg-accent" />
            }
          >
            Close
          </DialogClose>
          {canAdvance && (
            <Button
              size="sm"
              onClick={() => {
                onAdvanceStatus(plan.id)
                onClose()
              }}
            >
              Move to {STATUS_CONFIG[STATUS_ORDER[nextStatusIdx]].label}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
