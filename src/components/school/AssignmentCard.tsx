'use client'

import Link from 'next/link'
import { Calendar, Users, CheckCircle, Clock, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Assignment } from '@/lib/types/assignment'
import { ASSIGNMENT_TYPE_LABELS } from '@/lib/types/assignment'

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

function completionColor(rate: number): string {
  if (rate >= 75) return 'bg-green-500'
  if (rate >= 50) return 'bg-amber-500'
  return 'bg-red-500'
}

function formatDueDate(iso: string): string {
  const date = new Date(iso)
  const now = new Date()
  const diffMs = date.getTime() - now.getTime()
  const diffDays = Math.ceil(diffMs / 86_400_000)

  if (diffDays < 0) return `${Math.abs(diffDays)}d overdue`
  if (diffDays === 0) return 'Due today'
  if (diffDays === 1) return 'Due tomorrow'
  if (diffDays <= 7) return `Due in ${diffDays}d`
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function isDueSoon(iso: string): boolean {
  const diffMs = new Date(iso).getTime() - Date.now()
  return diffMs > 0 && diffMs < 2 * 86_400_000
}

function isOverdue(iso: string): boolean {
  return new Date(iso).getTime() < Date.now()
}

/* ── Component ─────────────────────────────────────────────────────────── */

interface AssignmentCardProps {
  assignment: Assignment
  className?: string
}

export function AssignmentCard({ assignment, className }: AssignmentCardProps) {
  const totalStudents = assignment.submissions.length
  const submitted = assignment.submissions.filter(
    (s) => s.status === 'submitted' || s.status === 'graded',
  ).length
  const completionRate = totalStudents > 0 ? Math.round((submitted / totalStudents) * 100) : 0
  const overdue = assignment.status === 'active' && isOverdue(assignment.dueDate)
  const dueSoon = assignment.status === 'active' && isDueSoon(assignment.dueDate)

  return (
    <Link href={`/school/assignments/${assignment.id}`}>
      <Card
        className={cn(
          'transition-all duration-200 hover:shadow-md hover:scale-[1.01] cursor-pointer',
          overdue && 'border-red-500/30',
          dueSoon && !overdue && 'border-amber-500/30',
          className,
        )}
      >
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <CardTitle className="truncate text-base">{assignment.title}</CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">
                {ASSIGNMENT_TYPE_LABELS[assignment.type]}
              </p>
            </div>
            <Badge
              variant="outline"
              className={cn('text-xs shrink-0', statusBadgeClass(assignment.status))}
            >
              {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          {assignment.description && (
            <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
              {assignment.description}
            </p>
          )}

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="flex items-center gap-1.5">
              <Calendar className={cn(
                'h-3.5 w-3.5',
                overdue ? 'text-red-400' : dueSoon ? 'text-clay-600' : 'text-muted-foreground',
              )} />
              <span className={cn(
                'text-xs',
                overdue ? 'text-red-400 font-medium' : dueSoon ? 'text-clay-600 font-medium' : 'text-muted-foreground',
              )}>
                {formatDueDate(assignment.dueDate)}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {totalStudents} student{totalStudents !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {submitted}/{totalStudents} done
              </span>
            </div>
          </div>

          {/* Completion bar */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-muted-foreground">Completion</span>
              <span className="font-medium tabular-nums text-foreground">
                {completionRate}%
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  'h-full rounded-full transition-all duration-500',
                  completionColor(completionRate),
                )}
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
