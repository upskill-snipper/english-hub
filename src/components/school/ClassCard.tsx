'use client'

import { Users, AlertTriangle, TrendingUp, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface ClassData {
  classId: string
  className: string
  teacher?: string
  yearGroup?: string | null
  examBoard?: string | null
  studentCount: number
  avgScore: number
  completionRate: number
  atRiskCount: number
}

interface ClassCardProps {
  classData: ClassData
  onClick?: (classId: string) => void
  className?: string
}

/* ── Helpers ───────────────────────────────────────────────────────────────── */

function scoreBorderColor(score: number): string {
  if (score >= 70) return 'border-t-green-500'
  if (score >= 50) return 'border-t-amber-500'
  return 'border-t-red-500'
}

function scoreTextColor(score: number): string {
  if (score >= 70) return 'text-green-400'
  if (score >= 50) return 'text-clay-600'
  return 'text-red-400'
}

/* ── Component ─────────────────────────────────────────────────────────────── */

export function ClassCard({
  classData,
  onClick,
  className: classNameProp,
}: ClassCardProps) {
  const {
    classId,
    className: name,
    teacher,
    yearGroup,
    examBoard,
    studentCount,
    avgScore,
    completionRate,
    atRiskCount,
  } = classData

  return (
    <Card
      className={cn(
        'border-t-4 transition-all duration-200',
        scoreBorderColor(avgScore),
        onClick && 'cursor-pointer hover:bg-accent/30 hover:shadow-md',
        classNameProp,
      )}
      onClick={() => onClick?.(classId)}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <CardTitle className="truncate">{name}</CardTitle>
            {teacher && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {teacher}
              </p>
            )}
            {(yearGroup || examBoard) && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {[yearGroup, examBoard].filter(Boolean).join(' \u00b7 ')}
              </p>
            )}
          </div>

          {atRiskCount > 0 && (
            <span className="inline-flex items-center gap-1 shrink-0 rounded-full bg-red-500/10 border border-red-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-red-400">
              <AlertTriangle className="h-3 w-3" />
              {atRiskCount} at risk
            </span>
          )}
        </div>
      </CardHeader>

      <CardContent>
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Students */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/10">
              <Users className="h-4 w-4 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-bold tabular-nums text-foreground">
                {studentCount}
              </p>
              <p className="text-[11px] text-muted-foreground leading-none">
                Students
              </p>
            </div>
          </div>

          {/* Avg Score */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-500/10">
              <TrendingUp className="h-4 w-4 text-green-400" />
            </div>
            <div>
              <p
                className={cn(
                  'text-sm font-bold tabular-nums',
                  scoreTextColor(avgScore),
                )}
              >
                {Math.round(avgScore)}%
              </p>
              <p className="text-[11px] text-muted-foreground leading-none">
                Avg Score
              </p>
            </div>
          </div>

          {/* Completion */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-500/10">
              <BookOpen className="h-4 w-4 text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-bold tabular-nums text-foreground">
                {Math.round(completionRate)}%
              </p>
              <p className="text-[11px] text-muted-foreground leading-none">
                Completion
              </p>
            </div>
          </div>

          {/* At Risk */}
          <div className="flex items-center gap-2">
            <div
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-md',
                atRiskCount > 0
                  ? 'bg-red-500/10'
                  : 'bg-muted',
              )}
            >
              <AlertTriangle
                className={cn(
                  'h-4 w-4',
                  atRiskCount > 0
                    ? 'text-red-400'
                    : 'text-muted-foreground',
                )}
              />
            </div>
            <div>
              <p
                className={cn(
                  'text-sm font-bold tabular-nums',
                  atRiskCount > 0 ? 'text-red-400' : 'text-foreground',
                )}
              >
                {atRiskCount}
              </p>
              <p className="text-[11px] text-muted-foreground leading-none">
                At Risk
              </p>
            </div>
          </div>
        </div>

        {/* Completion bar */}
        <div className="mt-3">
          <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
