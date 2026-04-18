'use client'

import { useMemo } from 'react'
import {
  Clock,
  CalendarDays,
  AlertTriangle,
  CheckCircle2,
  Timer,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'

import {
  type ExamDate,
  getUpcomingExams,
  daysUntil,
  urgencyColor,
} from '@/data/exam-dates'

// ── Types ────────────────────────────────────────────────────────────────────

interface ExamCountdownProps {
  /** Filter to a specific exam board (e.g. "AQA"). Shows all boards if omitted. */
  board?: string
  /** Compact sidebar/dashboard mode vs full calendar-page mode */
  variant?: 'compact' | 'full'
  /** Optional className override */
  className?: string
}

// ── Colour mappings ──────────────────────────────────────────────────────────

const URGENCY_STYLES = {
  green: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200 dark:border-emerald-800',
    text: 'text-emerald-700 dark:text-emerald-400',
    badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
    ring: 'ring-emerald-500/20',
    dot: 'bg-emerald-500',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-200 dark:border-amber-800',
    text: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900',
    ring: 'ring-amber-500/20',
    dot: 'bg-amber-500',
  },
  red: {
    bg: 'bg-red-50 dark:bg-red-950/30',
    border: 'border-red-200 dark:border-red-800',
    text: 'text-red-700 dark:text-red-400',
    badge: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    ring: 'ring-red-500/20',
    dot: 'bg-red-500',
  },
} as const

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatExamDate(dateStr: string): string {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
}

function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return `${m}min`
  if (m === 0) return `${h}h`
  return `${h}h ${m}min`
}

// ── Component ────────────────────────────────────────────────────────────────

export function ExamCountdown({ board, variant = 'compact', className }: ExamCountdownProps) {
  const upcoming = useMemo(() => getUpcomingExams(board), [board])

  if (upcoming.length === 0) {
    return (
      <Card className={cn('border-dashed', className)}>
        <CardContent className="flex items-center gap-3 py-6">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          <p className="text-sm text-muted-foreground">
            {board ? `No upcoming ${board} exams` : 'No upcoming exams'}
          </p>
        </CardContent>
      </Card>
    )
  }

  const nextExam = upcoming[0]
  const days = daysUntil(nextExam.date)
  const colour = urgencyColor(days)
  const styles = URGENCY_STYLES[colour]

  // ── Compact variant (sidebar / dashboard widget) ────────────────────────
  if (variant === 'compact') {
    return (
      <Card className={cn('overflow-hidden', className)}>
        {/* Hero countdown */}
        <div className={cn('px-4 py-3', styles.bg, styles.border, 'border-b')}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Timer className={cn('h-4 w-4', styles.text)} />
              <span className="text-xs font-medium text-muted-foreground">Next Exam</span>
            </div>
            {board && (
              <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                {board}
              </Badge>
            )}
          </div>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className={cn('text-2xl font-bold tabular-nums', styles.text)}>
              {days}
            </span>
            <span className="text-xs text-muted-foreground">
              {days === 1 ? 'day' : 'days'} to go
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
            {nextExam.paper}
          </p>
        </div>

        {/* Quick list of next 3 exams */}
        <CardContent className="p-0">
          <ul className="divide-y divide-border">
            {upcoming.slice(0, 3).map((exam) => {
              const d = daysUntil(exam.date)
              const c = urgencyColor(d)
              return (
                <li key={exam.id} className="flex items-center gap-3 px-4 py-2.5">
                  <span className={cn('h-2 w-2 rounded-full shrink-0', URGENCY_STYLES[c].dot)} />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium truncate">{exam.subject}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{exam.paper}</p>
                  </div>
                  <span className="text-xs tabular-nums text-muted-foreground shrink-0">
                    {formatExamDate(exam.date)}
                  </span>
                </li>
              )
            })}
          </ul>
        </CardContent>
      </Card>
    )
  }

  // ── Full variant (calendar page) ────────────────────────────────────────
  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardHeader className={cn('pb-3', styles.bg, styles.border, 'border-b')}>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base">
            <Timer className={cn('h-5 w-5', styles.text)} />
            Exam Countdown
            {board && (
              <Badge variant="outline" className="ml-1 text-xs">
                {board}
              </Badge>
            )}
          </CardTitle>
          <div className="flex items-center gap-1.5">
            <AlertTriangle className={cn('h-4 w-4', days < 14 ? 'text-red-500' : 'hidden')} />
            <span className={cn('text-3xl font-bold tabular-nums', styles.text)}>
              {days}
            </span>
            <span className="text-sm text-muted-foreground">
              {days === 1 ? 'day' : 'days'}
            </span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Next: {nextExam.paper}
        </p>
      </CardHeader>

      <CardContent className="p-0">
        <ScrollArea className="max-h-[400px]">
          <ul className="divide-y divide-border">
            {upcoming.map((exam) => (
              <ExamRow key={exam.id} exam={exam} />
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

// ── Exam row (full variant) ──────────────────────────────────────────────────

function ExamRow({ exam }: { exam: ExamDate }) {
  const days = daysUntil(exam.date)
  const colour = urgencyColor(days)
  const styles = URGENCY_STYLES[colour]

  return (
    <li className="flex items-start gap-4 px-5 py-3.5 hover:bg-muted/40 transition-colors">
      {/* Date column */}
      <div className="flex flex-col items-center shrink-0 w-14">
        <span className="text-[10px] uppercase text-muted-foreground">
          {new Date(exam.date + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'short' })}
        </span>
        <span className="text-lg font-bold tabular-nums">
          {new Date(exam.date + 'T00:00:00').getDate()}
        </span>
        <span className="text-[10px] text-muted-foreground">
          {new Date(exam.date + 'T00:00:00').toLocaleDateString('en-GB', { month: 'short' })}
        </span>
      </div>

      {/* Urgency dot */}
      <div className="mt-2 shrink-0">
        <span className={cn('block h-2.5 w-2.5 rounded-full ring-2', styles.dot, styles.ring)} />
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold">{exam.subject}</span>
          <Badge variant="outline" className="text-[10px] px-1.5 py-0">
            {exam.board}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">{exam.paper}</p>
        <div className="flex items-center gap-3 mt-1.5 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {exam.time === 'morning' ? '9:00 AM' : '1:30 PM'}
          </span>
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3 w-3" />
            {formatDuration(exam.duration)}
          </span>
        </div>
      </div>

      {/* Countdown badge */}
      <Badge className={cn('shrink-0 tabular-nums', styles.badge)} variant="secondary">
        {days <= 0 ? 'Today' : `${days}d`}
      </Badge>
    </li>
  )
}
