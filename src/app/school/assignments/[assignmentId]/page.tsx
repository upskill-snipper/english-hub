'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
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

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { Assignment, AssignmentSubmission, AssignmentStatus } from '@/lib/types/assignment'
import {
  getAssignmentById,
  updateAssignment,
  ASSIGNMENT_TYPE_LABELS,
  ASSIGNMENT_STATUS_LABELS,
} from '@/lib/types/assignment'
import { useT } from '@/lib/i18n/use-t'
import { DictationButton } from '@/components/speech/DictationButton'
import { ReadAloudButton } from '@/components/speech/ReadAloudButton'

/* ── Helpers ───────────────────────────────────────────────────────────── */

function statusBadgeClass(status: Assignment['status']): string {
  switch (status) {
    case 'active':
      return 'border-green-500/30 bg-green-500/10 text-green-400'
    case 'draft':
      return 'border-amber-500/30 bg-amber-500/10 text-clay-600'
    case 'closed':
      return 'border-zinc-500/30 bg-zinc-500/10 text-zinc-400'
  }
}

function submissionStatusBadge(status: AssignmentSubmission['status']): string {
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
  const router = useRouter()
  const assignmentId = params.assignmentId as string

  const [assignment, setAssignment] = useState<Assignment | null>(null)
  const [loading, setLoading] = useState(true)

  // Inline grading state
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null)
  const [editScore, setEditScore] = useState('')
  const [editFeedback, setEditFeedback] = useState('')

  useEffect(() => {
    const data = getAssignmentById(assignmentId)
    setAssignment(data ?? null)
    setLoading(false)
  }, [assignmentId])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!assignment) {
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
          </CardContent>
        </Card>
      </div>
    )
  }

  // Computed stats
  const totalStudents = assignment.submissions.length
  const submitted = assignment.submissions.filter(
    (s) => s.status === 'submitted' || s.status === 'graded',
  ).length
  const graded = assignment.submissions.filter((s) => s.status === 'graded').length
  const pending = assignment.submissions.filter((s) => s.status === 'pending').length
  const completionRate = totalStudents > 0 ? Math.round((submitted / totalStudents) * 100) : 0

  const gradedSubmissions = assignment.submissions.filter(
    (s) => s.status === 'graded' && s.score !== undefined,
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

  const isOverdue = assignment.status === 'active' && new Date(assignment.dueDate) < new Date()

  // Handlers
  function handleStatusChange(newStatus: AssignmentStatus) {
    if (!assignment) return
    const updated = { ...assignment, status: newStatus }
    updateAssignment(updated)
    setAssignment(updated)
  }

  function handleStartGrading(submission: AssignmentSubmission) {
    setEditingStudentId(submission.studentId)
    setEditScore(submission.score?.toString() ?? '')
    setEditFeedback(submission.feedback ?? '')
  }

  function handleSaveGrade() {
    if (!assignment || !editingStudentId) return
    const score = editScore ? parseInt(editScore, 10) : undefined
    const updated: Assignment = {
      ...assignment,
      submissions: assignment.submissions.map((s) =>
        s.studentId === editingStudentId
          ? {
              ...s,
              score,
              feedback: editFeedback || undefined,
              status: 'graded' as const,
              submittedAt: s.submittedAt ?? new Date().toISOString(),
            }
          : s,
      ),
    }
    updateAssignment(updated)
    setAssignment(updated)
    setEditingStudentId(null)
    setEditScore('')
    setEditFeedback('')
  }

  function handleMarkSubmitted(studentId: string) {
    if (!assignment) return
    const updated: Assignment = {
      ...assignment,
      submissions: assignment.submissions.map((s) =>
        s.studentId === studentId
          ? { ...s, status: 'submitted' as const, submittedAt: new Date().toISOString() }
          : s,
      ),
    }
    updateAssignment(updated)
    setAssignment(updated)
  }

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
                {ASSIGNMENT_STATUS_LABELS[assignment.status]}
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
            <p className="mt-1 text-sm text-muted-foreground">
              {ASSIGNMENT_TYPE_LABELS[assignment.type]}
              {assignment.resourceId && ` \u00b7 ${t('school.assignments.resource_linked')}`}
            </p>
          </div>
        </div>

        {/* Status control */}
        <div className="flex items-center gap-2 shrink-0">
          <Select
            value={assignment.status}
            onValueChange={(v) => v && handleStatusChange(v as AssignmentStatus)}
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
                  {formatDate(assignment.dueDate)}
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

      {/* Submissions Table */}
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
                  <th className="pb-3 pr-4 font-medium text-muted-foreground">
                    {t('school.assignments.col.feedback')}
                  </th>
                  <th className="pb-3 font-medium text-muted-foreground">
                    {t('school.assignments.col.actions')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {assignment.submissions.map((sub) => (
                  <tr key={sub.studentId} className="border-b border-border/50 last:border-0">
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
                      {editingStudentId === sub.studentId ? (
                        <Input
                          type="number"
                          min={0}
                          max={100}
                          value={editScore}
                          onChange={(e) => setEditScore(e.target.value)}
                          className="w-20 h-8"
                          placeholder={t('school.assignments.grade.placeholder')}
                        />
                      ) : sub.score !== undefined ? (
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
                    <td className="py-3 pr-4">
                      {editingStudentId === sub.studentId ? (
                        <div className="flex items-start gap-1.5">
                          <Textarea
                            value={editFeedback}
                            onChange={(e) => setEditFeedback(e.target.value)}
                            className="min-h-[60px] text-xs"
                            placeholder={t('school.assignments.feedback.placeholder')}
                          />
                          <DictationButton
                            onText={(text) =>
                              setEditFeedback((v) => (v ? v.trimEnd() + ' ' : '') + text)
                            }
                            iconOnly
                          />
                        </div>
                      ) : sub.feedback ? (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground max-w-[200px] truncate">
                          <MessageSquare className="h-3 w-3 shrink-0" />
                          {sub.feedback}
                          <ReadAloudButton text={sub.feedback} iconOnly className="ml-1 shrink-0" />
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">--</span>
                      )}
                    </td>
                    <td className="py-3">
                      {editingStudentId === sub.studentId ? (
                        <div className="flex items-center gap-1">
                          <Button size="sm" onClick={handleSaveGrade}>
                            {t('school.assignments.action.save')}
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setEditingStudentId(null)}
                          >
                            {t('school.assignments.action.cancel')}
                          </Button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          {sub.status === 'pending' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleMarkSubmitted(sub.studentId)}
                            >
                              {t('school.assignments.action.mark_submitted')}
                            </Button>
                          )}
                          {(sub.status === 'submitted' || sub.status === 'graded') && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleStartGrading(sub)}
                            >
                              {sub.status === 'graded'
                                ? t('school.assignments.action.edit_grade')
                                : t('school.assignments.action.grade')}
                            </Button>
                          )}
                        </div>
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
