'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Star, TrendingUp, TrendingDown, Minus, Clock, BookOpen, Award } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

import type { StudentAnalytics } from '@/lib/types'

/* ── Types ──────────────────────────────────────────────────────────────────── */

export interface ProgressCardData extends StudentAnalytics {
  target_grade: string | null
  effort_rating: number // 1-5
  teacher_comment: string
  next_steps: string[]
  recommended_revision_hours: number
  actual_revision_hours: number
}

export interface ProgressCardProps {
  student: ProgressCardData
  className?: string
  schoolName?: string
  date?: string
  onCommentChange?: (studentId: string, comment: string) => void
  editable?: boolean
}

/* ── Helpers ────────────────────────────────────────────────────────────────── */

function parseGrade(grade: string | null): number {
  if (!grade) return 0
  const n = parseInt(grade, 10)
  return isNaN(n) ? 0 : Math.min(9, Math.max(0, n))
}

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const mins = Math.round((seconds % 3600) / 60)
  if (hours === 0) return `${mins}m`
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`
}

/* ── Grade Gauge (SVG semi-circle dial) ─────────────────────────────────────── */

function GradeGauge({ grade, maxGrade = 9 }: { grade: number; maxGrade?: number }) {
  const radius = 40
  const strokeWidth = 8
  const cx = 50
  const cy = 50
  // Semi-circle from 180deg to 0deg (left to right)
  const startAngle = Math.PI
  const endAngle = 0
  const range = startAngle - endAngle
  const ratio = Math.min(grade / maxGrade, 1)
  const angle = startAngle - ratio * range
  // Arc path
  const bgArcD = describeArc(cx, cy, radius, endAngle, startAngle)
  const filledArcD = describeArc(cx, cy, radius, angle, startAngle)
  // Needle position
  const needleX = cx + radius * Math.cos(angle)
  const needleY = cy - radius * Math.sin(angle)

  const gradeColour =
    grade >= 7 ? '#22c55e' : grade >= 5 ? '#f59e0b' : grade >= 1 ? '#ef4444' : '#6b7280'

  return (
    <svg viewBox="0 0 100 58" className="w-full max-w-[100px]">
      {/* Background track */}
      <path d={bgArcD} fill="none" stroke="#374151" strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* Filled arc */}
      <path d={filledArcD} fill="none" stroke={gradeColour} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* Needle dot */}
      <circle cx={needleX} cy={needleY} r={3} fill={gradeColour} />
      {/* Grade number */}
      <text
        x={cx}
        y={cy - 4}
        textAnchor="middle"
        className="fill-current"
        style={{ fontSize: '18px', fontWeight: 800, fill: gradeColour }}
      >
        {grade > 0 ? grade : '-'}
      </text>
      {/* Label */}
      <text
        x={cx}
        y={cy + 8}
        textAnchor="middle"
        style={{ fontSize: '6px', fill: '#9ca3af' }}
      >
        Predicted
      </text>
    </svg>
  )
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const startX = cx + r * Math.cos(endAngle)
  const startY = cy - r * Math.sin(endAngle)
  const endX = cx + r * Math.cos(startAngle)
  const endY = cy - r * Math.sin(startAngle)
  const largeArc = endAngle - startAngle > Math.PI ? 1 : 0
  return `M ${startX} ${startY} A ${r} ${r} 0 ${largeArc} 0 ${endX} ${endY}`
}

/* ── Effort Stars ───────────────────────────────────────────────────────────── */

function EffortStars({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          className={cn(
            'h-3.5 w-3.5',
            i < rating ? 'fill-amber-400 text-amber-400' : 'fill-none text-muted-foreground',
          )}
        />
      ))}
    </div>
  )
}

/* ── Progress Bar (simple, print-friendly) ──────────────────────────────────── */

function SimpleProgressBar({
  value,
  max,
  colour = 'bg-primary',
}: {
  value: number
  max: number
  colour?: string
}) {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0
  return (
    <div className="progress-bar-track h-2.5 w-full rounded-full bg-gray-700 print:bg-gray-200">
      <div
        className={cn('h-full rounded-full transition-all', colour)}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

/* ── Revision Comparison Bar ────────────────────────────────────────────────── */

function RevisionBar({ actual, recommended }: { actual: number; recommended: number }) {
  const max = Math.max(actual, recommended, 1)
  const actualPct = (actual / max) * 100
  const recPct = (recommended / max) * 100
  const isOnTrack = actual >= recommended * 0.8

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-[10px]">
        <span className="w-16 text-muted-foreground shrink-0">Actual</span>
        <div className="h-2 flex-1 rounded-full bg-gray-700 print:bg-gray-200">
          <div
            className={cn('h-full rounded-full', isOnTrack ? 'bg-green-500' : 'bg-amber-500')}
            style={{ width: `${actualPct}%` }}
          />
        </div>
        <span className="w-8 text-right tabular-nums text-foreground print:text-black">{actual}h</span>
      </div>
      <div className="flex items-center gap-2 text-[10px]">
        <span className="w-16 text-muted-foreground shrink-0">Recommended</span>
        <div className="h-2 flex-1 rounded-full bg-gray-700 print:bg-gray-200">
          <div className="h-full rounded-full bg-blue-500" style={{ width: `${recPct}%` }} />
        </div>
        <span className="w-8 text-right tabular-nums text-foreground print:text-black">{recommended}h</span>
      </div>
    </div>
  )
}

/* ── Print Styles ──────────────────────────────────────────────────────────── */

export const PROGRESS_CARD_PRINT_STYLES = `
@media print {
  /* Hide everything except the printable root */
  body > *:not(#progress-cards-root) {
    display: none !important;
  }

  nav, header, aside, footer,
  [data-print-hide],
  .no-print {
    display: none !important;
  }

  #progress-cards-root {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  @page {
    size: A4 portrait;
    margin: 8mm;
  }

  .progress-card {
    width: 100%;
    height: 140mm; /* Half A4 minus margins = ~140mm */
    padding: 6mm 8mm;
    page-break-inside: avoid;
    break-inside: avoid;
    box-sizing: border-box;
    border: 1px solid #ccc !important;
    border-radius: 4px;
    background: white !important;
    color: black !important;
  }

  /* Force 2 cards per page */
  .progress-card:nth-child(odd) {
    margin-bottom: 0;
  }

  .progress-card:nth-child(even) {
    page-break-after: always;
    break-after: page;
  }

  .progress-card * {
    color: black !important;
  }

  .progress-card .text-muted-foreground {
    color: #666 !important;
  }

  .progress-card textarea {
    border: 1px solid #999 !important;
    background: #fafafa !important;
    resize: none;
  }

  .progress-card svg text {
    fill: currentColor !important;
  }

  .progress-bar-track {
    background: #e5e7eb !important;
  }

  .signature-line {
    border-bottom: 1px solid #333 !important;
  }
}
`

/* ── Main Component ────────────────────────────────────────────────────────── */

export const ProgressCard = forwardRef<HTMLDivElement, ProgressCardProps>(
  function ProgressCard(
    { student, className, schoolName, date, onCommentChange, editable = true },
    ref,
  ) {
    const grade = parseGrade(student.predicted_grade)
    const targetGrade = parseGrade(student.target_grade)
    const strengths = student.strengths.slice(0, 3)
    const weaknesses = student.weaknesses.slice(0, 3)
    const nextSteps = student.next_steps.slice(0, 3)

    const trajectoryInfo = {
      improving: { icon: TrendingUp, label: 'Improving', colour: 'text-green-500' },
      stable: { icon: Minus, label: 'Stable', colour: 'text-amber-500' },
      declining: { icon: TrendingDown, label: 'Declining', colour: 'text-red-500' },
    }
    const traj = trajectoryInfo[student.trajectory]
    const TrajectoryIcon = traj.icon

    return (
      <div
        ref={ref}
        className={cn(
          'progress-card rounded-2xl border border-border/60 bg-card p-5 print:p-0',
          className,
        )}
      >
        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-3 border-b border-border/60 pb-3 mb-3 print:border-gray-300">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              {schoolName && (
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {schoolName}
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-foreground truncate print:text-black">
              {student.student_name}
            </h3>
            <div className="flex items-center gap-3 mt-0.5 text-xs text-muted-foreground flex-wrap">
              {student.year_group && <span>Year {student.year_group}</span>}
              {student.exam_board && <span>{student.exam_board}</span>}
              {date && <span>{date}</span>}
            </div>
          </div>
          {/* Grade Gauge */}
          <div className="shrink-0 w-[90px]">
            <GradeGauge grade={grade} />
          </div>
        </div>

        {/* ── Body Grid ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-xs">
          {/* Left Column */}
          <div className="space-y-3">
            {/* Target Grade + Trajectory */}
            <div className="flex items-center gap-4">
              <div>
                <span className="text-muted-foreground">Target Grade</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-400 print:text-blue-700 print:bg-blue-50 print:border print:border-blue-200">
                    {targetGrade > 0 ? targetGrade : '-'}
                  </span>
                </div>
              </div>
              <div>
                <span className="text-muted-foreground">Trajectory</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <TrajectoryIcon className={cn('h-4 w-4', traj.colour)} />
                  <span className={cn('font-medium', traj.colour)}>{traj.label}</span>
                </div>
              </div>
            </div>

            {/* Modules Completed */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-muted-foreground flex items-center gap-1">
                  <BookOpen className="h-3 w-3" /> Modules Completed
                </span>
                <span className="font-semibold tabular-nums text-foreground print:text-black">
                  {student.modules_completed}/{student.total_modules}
                </span>
              </div>
              <SimpleProgressBar
                value={student.modules_completed}
                max={student.total_modules}
                colour="bg-primary"
              />
            </div>

            {/* Strengths */}
            <div>
              <span className="text-muted-foreground font-medium">Strengths</span>
              <ul className="mt-1 space-y-0.5">
                {strengths.length > 0 ? (
                  strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                      <span className="text-foreground print:text-black">{s}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-muted-foreground italic">No data yet</li>
                )}
              </ul>
            </div>

            {/* Areas for Improvement */}
            <div>
              <span className="text-muted-foreground font-medium">Areas for Improvement</span>
              <ul className="mt-1 space-y-0.5">
                {weaknesses.length > 0 ? (
                  weaknesses.map((w, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span className="text-foreground print:text-black">{w}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-muted-foreground italic">No data yet</li>
                )}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            {/* Effort + Stats Row */}
            <div className="flex items-center gap-4">
              <div>
                <span className="text-muted-foreground">Effort This Term</span>
                <div className="mt-0.5">
                  <EffortStars rating={student.effort_rating} />
                </div>
              </div>
              <div>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Award className="h-3 w-3" /> Avg Score
                </span>
                <span className="font-semibold text-foreground print:text-black mt-0.5 block">
                  {Math.round(student.avg_quiz_score)}%
                </span>
              </div>
            </div>

            {/* Revision Time */}
            <div>
              <span className="text-muted-foreground flex items-center gap-1 mb-1">
                <Clock className="h-3 w-3" /> Revision Time This Term
              </span>
              <RevisionBar
                actual={student.actual_revision_hours}
                recommended={student.recommended_revision_hours}
              />
            </div>

            {/* Next Steps */}
            <div>
              <span className="text-muted-foreground font-medium">Next Steps</span>
              <ul className="mt-1 space-y-0.5">
                {nextSteps.length > 0 ? (
                  nextSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="mt-0.5 text-primary font-bold shrink-0">{i + 1}.</span>
                      <span className="text-foreground print:text-black">{step}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-muted-foreground italic">No recommendations</li>
                )}
              </ul>
            </div>

            {/* Teacher Comment */}
            <div>
              <span className="text-muted-foreground font-medium">Teacher Comment</span>
              <div className="mt-1">
                {editable ? (
                  <Textarea
                    value={student.teacher_comment}
                    onChange={(e) =>
                      onCommentChange?.(student.student_id, e.target.value)
                    }
                    placeholder="Add a comment..."
                    className="min-h-[48px] text-xs resize-none print:min-h-[36px]"
                    rows={2}
                  />
                ) : (
                  <p className="text-foreground print:text-black whitespace-pre-wrap">
                    {student.teacher_comment || (
                      <span className="text-muted-foreground italic">No comment</span>
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer: Parent Signature ───────────────────────────────────────── */}
        <div className="mt-3 pt-2 border-t border-border/60 print:border-gray-300 flex items-end justify-between gap-4">
          <div className="flex-1">
            <span className="text-[10px] text-muted-foreground">Parent / Guardian Signature</span>
            <div className="signature-line mt-2 border-b border-border/60 print:border-gray-400 w-full h-5" />
          </div>
          <div className="shrink-0">
            <span className="text-[10px] text-muted-foreground">Date</span>
            <div className="signature-line mt-2 border-b border-border/60 print:border-gray-400 w-24 h-5" />
          </div>
        </div>
      </div>
    )
  },
)
