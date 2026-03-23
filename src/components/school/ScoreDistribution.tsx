'use client'

import { useMemo, useState, memo } from 'react'
import { cn } from '@/lib/utils'

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface GradeCount {
  grade: number // 1-9
  count: number
  targetCount?: number
}

interface ScoreDistributionProps {
  /** Grade distribution data. Grades 1-9 (GCSE style). */
  grades: GradeCount[]
  /** National average distribution for comparison (grade → percentage) */
  nationalAverage?: Record<number, number>
  /** Total number of students (used for national average calculation) */
  totalStudents?: number
  /** Title above the chart */
  title?: string
  /** Height of the chart area in px */
  height?: number
  className?: string
  /** Print-friendly mode */
  printFriendly?: boolean
}

/* ── Grade color mapping ───────────────────────────────────────────────────── */

function gradeColor(grade: number): string {
  if (grade >= 7) return '#22c55e' // green
  if (grade >= 5) return '#eab308' // yellow
  if (grade >= 4) return '#f59e0b' // amber
  return '#ef4444' // red
}

function gradeColorClass(grade: number): string {
  if (grade >= 7) return 'text-green-500'
  if (grade >= 5) return 'text-yellow-500'
  if (grade >= 4) return 'text-amber-500'
  return 'text-red-500'
}

/* ── Component ─────────────────────────────────────────────────────────────── */

export const ScoreDistribution = memo(function ScoreDistribution({
  grades,
  nationalAverage,
  totalStudents: totalStudentsProp,
  title,
  height = 320,
  className,
  printFriendly = false,
}: ScoreDistributionProps) {
  const [hoveredGrade, setHoveredGrade] = useState<number | null>(null)

  /* Fill in all 9 grades */
  const allGrades = useMemo(() => {
    const map = new Map(grades.map((g) => [g.grade, g]))
    return Array.from({ length: 9 }, (_, i) => {
      const grade = 9 - i // 9 down to 1
      const existing = map.get(grade)
      return {
        grade,
        count: existing?.count ?? 0,
        targetCount: existing?.targetCount ?? 0,
      }
    })
  }, [grades])

  const totalStudents = totalStudentsProp ?? allGrades.reduce((s, g) => s + g.count, 0)
  const maxCount = useMemo(
    () => Math.max(...allGrades.map((g) => Math.max(g.count, g.targetCount ?? 0)), 1),
    [allGrades],
  )

  const padding = { top: 24, right: 60, bottom: 32, left: 40 }
  const svgWidth = 560
  const chartWidth = svgWidth - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom
  const barHeight = Math.min(Math.floor(chartHeight / 9) - 4, 28)
  const barGap = (chartHeight - barHeight * 9) / 8

  /* National average counts */
  const nationalCounts = useMemo(() => {
    if (!nationalAverage || totalStudents === 0) return null
    const result: Record<number, number> = {}
    for (let g = 1; g <= 9; g++) {
      result[g] = Math.round(((nationalAverage[g] ?? 0) / 100) * totalStudents)
    }
    return result
  }, [nationalAverage, totalStudents])

  if (totalStudents === 0) {
    return (
      <div
        className={cn(
          'flex items-center justify-center text-sm text-muted-foreground',
          className,
        )}
        style={{ height }}
      >
        No grade distribution data available.
      </div>
    )
  }

  return (
    <div className={cn('print:break-inside-avoid', className)}>
      {title && (
        <h3 className="mb-2 text-sm font-semibold text-foreground">{title}</h3>
      )}

      {/* Legend */}
      <div className="mb-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-5 rounded-sm bg-current opacity-60" />
          <span>Current</span>
        </div>
        {allGrades.some((g) => (g.targetCount ?? 0) > 0) && (
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-5 rounded-sm border-2 border-dashed border-foreground/30" />
            <span>Target</span>
          </div>
        )}
        {nationalCounts && (
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-0.5 w-5 bg-blue-400" />
            <span>National Avg</span>
          </div>
        )}
      </div>

      <svg
        viewBox={`0 0 ${svgWidth} ${height}`}
        className="w-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Score distribution chart"
      >
        {allGrades.map((g, i) => {
          const y = padding.top + i * (barHeight + barGap)
          const barW = (g.count / maxCount) * chartWidth
          const targetW = ((g.targetCount ?? 0) / maxCount) * chartWidth
          const nationalW = nationalCounts
            ? ((nationalCounts[g.grade] ?? 0) / maxCount) * chartWidth
            : 0
          const gap = g.targetCount !== undefined ? g.targetCount - g.count : 0
          const isHovered = hoveredGrade === g.grade

          return (
            <g
              key={g.grade}
              onMouseEnter={printFriendly ? undefined : () => setHoveredGrade(g.grade)}
              onMouseLeave={printFriendly ? undefined : () => setHoveredGrade(null)}
              className="cursor-default"
            >
              {/* Row background on hover */}
              {isHovered && (
                <rect
                  x={0}
                  y={y - 2}
                  width={svgWidth}
                  height={barHeight + 4}
                  rx="4"
                  fill="currentColor"
                  className="text-muted-foreground"
                  opacity="0.04"
                />
              )}

              {/* Grade label */}
              <text
                x={padding.left - 10}
                y={y + barHeight / 2 + 4}
                textAnchor="end"
                fontSize="13"
                fontWeight="700"
                className={cn('tabular-nums', gradeColorClass(g.grade))}
                fill="currentColor"
              >
                {g.grade}
              </text>

              {/* Target bar (behind) */}
              {targetW > 0 && (
                <rect
                  x={padding.left}
                  y={y}
                  width={Math.max(targetW, 2)}
                  height={barHeight}
                  rx="4"
                  fill="none"
                  stroke="currentColor"
                  className="text-foreground/20"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />
              )}

              {/* Current bar */}
              <rect
                x={padding.left}
                y={y}
                width={Math.max(barW, 2)}
                height={barHeight}
                rx="4"
                fill={gradeColor(g.grade)}
                opacity={isHovered ? 0.9 : 0.7}
                className="transition-opacity duration-150"
              />

              {/* National average marker */}
              {nationalW > 0 && (
                <line
                  x1={padding.left + nationalW}
                  x2={padding.left + nationalW}
                  y1={y - 2}
                  y2={y + barHeight + 2}
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}

              {/* Count label */}
              <text
                x={padding.left + Math.max(barW, 2) + 8}
                y={y + barHeight / 2 + 4}
                fontSize="11"
                fontWeight="600"
                className="fill-foreground tabular-nums"
              >
                {g.count}
              </text>

              {/* Gap indicator */}
              {gap !== 0 && isHovered && (
                <text
                  x={padding.left + Math.max(barW, targetW, 2) + 30}
                  y={y + barHeight / 2 + 4}
                  fontSize="10"
                  fontWeight="600"
                  fill={gap > 0 ? '#ef4444' : '#22c55e'}
                >
                  {gap > 0 ? `${gap} below target` : `${Math.abs(gap)} above target`}
                </text>
              )}

              {/* Hover tooltip */}
              {isHovered && !printFriendly && (
                <g>
                  <rect
                    x={svgWidth - padding.right - 120}
                    y={Math.max(y - 30, 2)}
                    width={120}
                    height={nationalCounts ? 52 : 38}
                    rx="6"
                    fill="var(--foreground)"
                    opacity="0.92"
                  />
                  <text
                    x={svgWidth - padding.right - 110}
                    y={Math.max(y - 30, 2) + 14}
                    fontSize="10"
                    fill="var(--background)"
                    fontWeight="600"
                  >
                    Grade {g.grade}
                  </text>
                  <text
                    x={svgWidth - padding.right - 110}
                    y={Math.max(y - 30, 2) + 28}
                    fontSize="9"
                    fill="var(--background)"
                  >
                    {g.count} students ({totalStudents > 0 ? Math.round((g.count / totalStudents) * 100) : 0}%)
                    {g.targetCount ? ` / Target: ${g.targetCount}` : ''}
                  </text>
                  {nationalCounts && (
                    <text
                      x={svgWidth - padding.right - 110}
                      y={Math.max(y - 30, 2) + 42}
                      fontSize="9"
                      fill="var(--background)"
                    >
                      National: {nationalCounts[g.grade] ?? 0} ({nationalAverage?.[g.grade] ?? 0}%)
                    </text>
                  )}
                </g>
              )}
            </g>
          )
        })}

        {/* X-axis baseline */}
        <line
          x1={padding.left}
          x2={padding.left}
          y1={padding.top - 4}
          y2={padding.top + chartHeight + 4}
          stroke="currentColor"
          className="text-border"
          strokeWidth="1"
        />
      </svg>

      {/* Summary stats */}
      <div className="mt-2 grid grid-cols-3 gap-3 text-center text-xs">
        {(() => {
          const above7 = allGrades.filter((g) => g.grade >= 7).reduce((s, g) => s + g.count, 0)
          const pass4 = allGrades.filter((g) => g.grade >= 4).reduce((s, g) => s + g.count, 0)
          const below4 = totalStudents - pass4
          return (
            <>
              <div className="rounded-md border bg-muted/20 px-2 py-1.5">
                <p className="text-green-500 font-bold text-lg tabular-nums">{above7}</p>
                <p className="text-muted-foreground">Grade 7+</p>
              </div>
              <div className="rounded-md border bg-muted/20 px-2 py-1.5">
                <p className="text-amber-500 font-bold text-lg tabular-nums">{pass4}</p>
                <p className="text-muted-foreground">Grade 4+ (Pass)</p>
              </div>
              <div className="rounded-md border bg-muted/20 px-2 py-1.5">
                <p className="text-red-500 font-bold text-lg tabular-nums">{below4}</p>
                <p className="text-muted-foreground">Below Grade 4</p>
              </div>
            </>
          )
        })()}
      </div>
    </div>
  )
})
