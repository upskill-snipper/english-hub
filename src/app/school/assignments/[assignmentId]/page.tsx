'use client'

import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ClipboardList,
  Calendar,
  Users,
  CheckCircle,
  BarChart3,
  Clock,
  MessageSquare,
  Loader2,
  AlertTriangle,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { percentageToGCSEGradeLabel, percentageToGCSEGrade, gcseGradeColor } from '@/lib/grades'
import { toast } from 'sonner'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  fetchAssignmentById,
  patchAssignment,
  type ApiAssignment,
  type ApiSubmission,
} from '@/lib/types/assignment'
import { API_TYPE_LABELS } from '@/components/school/AssignmentCard'
import { useT } from '@/lib/i18n/use-t'
import { ReadAloudButton } from '@/components/speech/ReadAloudButton'

/* ── View model (adapted from the server API) ──────────────────────────── */

type ViewStatus = 'draft' | 'active' | 'closed'
type ViewSubmissionStatus = 'pending' | 'submitted' | 'graded'

interface SubmissionView {
  id: string
  studentId: string
  studentName: string
  status: ViewSubmissionStatus
  score: number | null
  feedback: string | null
  submittedAt: string | null
}

interface AssignmentView {
  id: string
  classId: string
  title: string
  description: string | null
  typeLabel: string
  status: ViewStatus
  dueDate: string | null
  submissions: SubmissionView[]
}

function toViewStatus(status: string): ViewStatus {
  const lower = status.toLowerCase()
  return lower === 'active' || lower === 'closed' ? lower : 'draft'
}

function toViewSubmissionStatus(status: string): ViewSubmissionStatus {
  const lower = status.toLowerCase()
  return lower === 'submitted' || lower === 'graded' ? lower : 'pending'
}

function apiToView(a: ApiAssignment, nameByStudentId: Map<string, string>): AssignmentView {
  return {
    id: a.id,
    classId: a.classId,
    title: a.title,
    description: a.description,
    typeLabel: API_TYPE_LABELS[a.type] ?? a.type,
    status: toViewStatus(a.status),
    dueDate: a.dueDate,
    submissions: (a.submissions ?? []).map((s: ApiSubmission) => ({
      id: s.id,
      studentId: s.studentId,
      // Resolved from the class roster; a pupil since removed from the class
      // shows as unnamed rather than invented.
      studentName: nameByStudentId.get(s.studentId) ?? 'Unknown pupil',
      status: toViewSubmissionStatus(s.status),
      score: s.score,
      feedback: s.feedback,
      submittedAt: s.submittedAt,
    })),
  }
}

/* ── Helpers ───────────────────────────────────────────────────────────── */

function statusBadgeClass(status: ViewStatus): string {
  switch (status) {
    case 'active':
      return 'border-green-500/30 bg-green-500/10 text-green-400'
    case 'draft':
      return 'border-amber-500/30 bg-amber-500/10 text-clay-600'
    case 'closed':
      return 'border-zinc-500/30 bg-zinc-500/10 text-zinc-400'
  }
}

function submissionStatusBadge(status: ViewSubmissionStatus): string {
  switch (status) {
    case 'graded':
      return 'border-green-500/30 bg-green-500/10 text-green-400'
    case 'submitted':
      return 'border-blue-500/30 bg-blue-500/10 text-blue-400'
    case 'pending':
      return 'border-zinc-500/30 bg-zinc-500/10 text-zinc-400'
  }
}

function scoreColor(score: number): string {
  if (score >= 70) return 'text-green-400'
  if (score >= 50) return 'text-clay-600'
  return 'text-red-400'
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

/* ── Component ─────────────────────────────────────────────────────────── */

export default function AssignmentDetailPage() {
  const t = useT()
  const params = useParams()
  const assignmentId = params.assignmentId as string

  const [assignment, setAssignment] = useState<AssignmentView | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)
  const [statusSaving, setStatusSaving] = useState(false)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setLoadError(false)
    async function load() {
      try {
        const api = await fetchAssignmentById(assignmentId)
        // Resolve pupil names from the class roster - the assignments API
        // returns submission rows keyed by student id only.
        const nameByStudentId = new Map<string, string>()
        try {
          const res = await fetch(`/api/school/classes/${api.classId}/students`)
          if (res.ok) {
            const json = (await res.json()) as {
              students?: { student_id: string; full_name: string | null; email: string }[]
            }
            for (const s of json.students ?? []) {
              nameByStudentId.set(s.student_id, s.full_name ?? s.email)
            }
          }
        } catch {
          // Roster fetch failure just means names fall back to "Unknown pupil".
        }
        if (!cancelled) setAssignment(apiToView(api, nameByStudentId))
      } catch {
        if (!cancelled) setLoadError(true)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [assignmentId, reloadKey])

  const handleStatusChange = useCallback(
    async (newStatus: ViewStatus) => {
      if (!assignment || newStatus === assignment.status) return
      setStatusSaving(true)
      try {
        await patchAssignment(assignment.id, { status: newStatus.toUpperCase() })
        setAssignment((prev) => (prev ? { ...prev, status: newStatus } : prev))
      } catch (err) {
        toast.error(err instanceof Error ? err.message : 'Failed to update the assignment')
      } finally {
        setStatusSaving(false)
      }
    },
    [assignment],
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (loadError || !assignment) {
    return (
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          size="sm"
          className="mb-4 gap-1.5 text-muted-foreground"
          render={<Link href="/school/assignments" />}
        >
          <ArrowLeft className="h-4 w-4" />
          {t('school.assignments.back')}
        </Button>
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <AlertTriangle className="mb-3 h-10 w-10 text-muted-foreground" />
            <h3 className="mb-1 font-semibold text-foreground">
              {t('school.assignments.not_found.title')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('school.assignments.not_found.body')}
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => setReloadKey((k) => k + 1)}
            >
              {t('school.classes.error.retry')}
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Computed stats - all derived from real submission rows
  const totalStudents = assignment.submissions.length
  const submitted = assignment.submissions.filter(
    (s) => s.status === 'submitted' || s.status === 'graded',
  ).length
  const graded = assignment.submissions.filter((s) => s.status === 'graded').length
  const pending = assignment.submissions.filter((s) => s.status === 'pending').length
  const completionRate = totalStudents > 0 ? Math.round((submitted / totalStudents) * 100) : 0

  const gradedSubmissions = assignment.submissions.filter(
    (s) => s.status === 'graded' && s.score !== null,
  )
  const avgScore =
    gradedSubmissions.length > 0
      ? Math.round(
          gradedSubmissions.reduce((acc, s) => acc + (s.score ?? 0), 0) / gradedSubmissions.length,
        )
      : null

  const highestScore =
    gradedSubmissions.length > 0 ? Math.max(...gradedSubmissions.map((s) => s.score ?? 0)) : null

  const lowestScore =
    gradedSubmissions.length > 0 ? Math.min(...gradedSubmissions.map((s) => s.score ?? 0)) : null

  const isOverdue =
    assignment.status === 'active' &&
    assignment.dueDate !== null &&
    new Date(assignment.dueDate) < new Date()

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      {/* Back link */}
      <Button
        variant="ghost"
        size="sm"
        className="mb-4 gap-1.5 text-muted-foreground"
        render={<Link href="/school/assignments" />}
      >
        <ArrowLeft className="h-4 w-4" />
        {t('school.assignments.back')}
      </Button>

      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <ClipboardList className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                {assignment.title}
              </h1>
              <Badge
                variant="outline"
                className={cn('text-xs', statusBadgeClass(assignment.status))}
              >
                {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
              </Badge>
              {isOverdue && (
                <Badge
                  variant="outline"
                  className="text-xs border-red-500/30 bg-red-500/10 text-red-400"
                >
                  {t('school.assignments.badge.overdue')}
                </Badge>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{assignment.typeLabel}</p>
          </div>
        </div>

        {/* Status control - persists via PATCH /api/school/assignments/[id] */}
        <div className="flex items-center gap-2 shrink-0">
          <Select
            value={assignment.status}
            onValueChange={(v) => v && handleStatusChange(v as ViewStatus)}
            disabled={statusSaving}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">{t('school.assignments.status.draft')}</SelectItem>
              <SelectItem value="active">{t('school.assignments.status.active')}</SelectItem>
              <SelectItem value="closed">{t('school.assignments.status.closed')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Description */}
      {assignment.description && (
        <Card className="mb-6">
          <CardContent className="py-4">
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">
              {assignment.description}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Stats Cards */}
      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
                <Users className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold tabular-nums text-foreground">{totalStudents}</p>
                <p className="text-xs text-muted-foreground">
                  {t('school.assignments.stat.students')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10">
                <CheckCircle className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold tabular-nums text-foreground">{completionRate}%</p>
                <p className="text-xs text-muted-foreground">
                  {t('school.assignments.stat.submitted')} ({submitted}/{totalStudents})
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10">
                <BarChart3 className="h-4 w-4 text-purple-400" />
              </div>
              <div>
                <p
                  className={cn(
                    'text-2xl font-bold tabular-nums',
                    avgScore !== null ? scoreColor(avgScore) : 'text-foreground',
                  )}
                >
                  {avgScore !== null ? `${avgScore}%` : '--'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t('school.assignments.stat.avg_score')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10">
                <Calendar className="h-4 w-4 text-clay-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {assignment.dueDate ? formatDate(assignment.dueDate) : '--'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t('school.assignments.stat.due_date')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Score range */}
      {gradedSubmissions.length > 0 && (
        <div className="mb-6 flex items-center gap-6 text-sm text-muted-foreground">
          <span>
            {t('school.assignments.range.highest')}:{' '}
            <span className={cn('font-semibold', scoreColor(highestScore!))}>{highestScore}%</span>
          </span>
          <span>
            {t('school.assignments.range.lowest')}:{' '}
            <span className={cn('font-semibold', scoreColor(lowestScore!))}>{lowestScore}%</span>
          </span>
          <span>
            {t('school.assignments.range.graded')}:{' '}
            <span className="font-semibold text-foreground">
              {graded}/{totalStudents}
            </span>
          </span>
        </div>
      )}

      <Separator className="mb-6" />

      {/* Submissions Table (read-only: marking happens through the marking
          workflow, and no submission-grading endpoint exists yet) */}
      <Card>
        <CardHeader>
          <CardTitle>{t('school.assignments.submissions.title')}</CardTitle>
          <CardDescription>
            {pending} {t('school.assignments.submissions.pending')} &middot; {submitted - graded}{' '}
            {t('school.assignments.submissions.submitted')} &middot; {graded}{' '}
            {t('school.assignments.submissions.graded')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 pr-4 font-medium text-muted-foreground">
                    {t('school.assignments.col.student')}
                  </th>
                  <th className="pb-3 pr-4 font-medium text-muted-foreground">
                    {t('school.assignments.col.status')}
                  </th>
                  <th className="pb-3 pr-4 font-medium text-muted-foreground">
                    {t('school.assignments.col.submitted')}
                  </th>
                  <th className="pb-3 pr-4 font-medium text-muted-foreground">
                    {t('school.assignments.col.score')}
                  </th>
                  <th className="pb-3 font-medium text-muted-foreground">
                    {t('school.assignments.col.feedback')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {assignment.submissions.map((sub) => (
                  <tr key={sub.id} className="border-b border-border/50 last:border-0">
                    <td className="py-3 pr-4">
                      <span className="font-medium text-foreground">{sub.studentName}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <Badge
                        variant="outline"
                        className={cn('text-xs', submissionStatusBadge(sub.status))}
                      >
                        {sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground">
                      {sub.submittedAt ? (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDate(sub.submittedAt)}
                        </span>
                      ) : (
                        <span className="text-xs">--</span>
                      )}
                    </td>
                    <td className="py-3 pr-4">
                      {sub.score !== null ? (
                        <span
                          className={cn(
                            'font-semibold tabular-nums',
                            gcseGradeColor(percentageToGCSEGrade(sub.score)),
                          )}
                        >
                          {percentageToGCSEGradeLabel(sub.score)}
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">--</span>
                      )}
                    </td>
                    <td className="py-3">
                      {sub.feedback ? (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground max-w-[200px] truncate">
                          <MessageSquare className="h-3 w-3 shrink-0" />
                          {sub.feedback}
                          <ReadAloudButton text={sub.feedback} iconOnly className="ml-1 shrink-0" />
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">--</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {assignment.submissions.length === 0 && (
            <div className="py-8 text-center text-muted-foreground">
              <Users className="mx-auto mb-2 h-8 w-8 opacity-50" />
              <p className="text-sm">{t('school.assignments.no_students')}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
