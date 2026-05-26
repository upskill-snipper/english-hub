'use client'

import { useMemo, memo } from 'react'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  LabelList,
} from 'recharts'
import { cn } from '@/lib/utils'
import { ChartFrame } from '@/components/dataviz'
import { GRID, AXIS } from '@/components/dataviz'

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

/* ── Tooltip ───────────────────────────────────────────────────────────────── */

interface DistRow {
  grade: number
  count: number
  targetCount: number
  nationalCount: number | null
  nationalPct: number | null
  pctOfTotal: number
}

function DistTooltip({ active, payload }: { active?: boolean; payload?: { payload?: DistRow }[] }) {
  if (!active || !payload || payload.length === 0) return null
  const row = payload[0]?.payload
  if (!row) return null
  return (
    <div className="rounded-xl border border-border/60 bg-card/90 px-3 py-2 shadow-xl backdrop-blur-xl">
      <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        Grade {row.grade}
      </p>
      <p className="text-xs text-foreground">
        {row.count} students ({row.pctOfTotal}%)
        {row.targetCount ? ` / Target: ${row.targetCount}` : ''}
      </p>
      {row.nationalCount != null && (
        <p className="text-xs text-muted-foreground">
          National: {row.nationalCount} ({row.nationalPct}%)
        </p>
      )}
    </div>
  )
}

/* ── Component ─────────────────────────────────────────────────────────────── */
// Re-skinned onto the premium "cinematic glass" Recharts bar chart. The
// public API (props, types, exports, defaults) is byte-identical to the
// previous hand-rolled SVG implementation - only the internals changed.

export const ScoreDistribution = memo(function ScoreDistribution({
  grades,
  nationalAverage,
  totalStudents: totalStudentsProp,
  title,
  height = 320,
  className,
  printFriendly = false,
}: ScoreDistributionProps) {
  /* Fill in all 9 grades (9 → 1, top-down) */
  const allGrades = useMemo(() => {
    const map = new Map(grades.map((g) => [g.grade, g]))
    return Array.from({ length: 9 }, (_, i) => {
      const grade = 9 - i
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

  /* National average counts */
  const nationalCounts = useMemo(() => {
    if (!nationalAverage || totalStudents === 0) return null
    const result: Record<number, number> = {}
    for (let g = 1; g <= 9; g++) {
      result[g] = Math.round(((nationalAverage[g] ?? 0) / 100) * totalStudents)
    }
    return result
  }, [nationalAverage, totalStudents])

  const hasTarget = allGrades.some((g) => (g.targetCount ?? 0) > 0)

  const chartData: DistRow[] = useMemo(
    () =>
      allGrades.map((g) => ({
        grade: g.grade,
        count: g.count,
        targetCount: g.targetCount ?? 0,
        nationalCount: nationalCounts ? (nationalCounts[g.grade] ?? 0) : null,
        nationalPct: nationalAverage ? (nationalAverage[g.grade] ?? 0) : null,
        pctOfTotal: totalStudents > 0 ? Math.round((g.count / totalStudents) * 100) : 0,
      })),
    [allGrades, nationalCounts, nationalAverage, totalStudents],
  )

  if (totalStudents === 0) {
    return (
      <div
        className={cn('flex items-center justify-center text-sm text-muted-foreground', className)}
        style={{ height }}
      >
        No grade distribution data available.
      </div>
    )
  }

  return (
    <div className={cn('print:break-inside-avoid', className)}>
      {title && <h3 className="mb-2 text-sm font-semibold text-foreground">{title}</h3>}

      {/* Legend */}
      <div className="mb-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-5 rounded-sm bg-current opacity-60" />
          <span>Current</span>
        </div>
        {hasTarget && (
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

      <ChartFrame height={height}>
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{ top: 8, right: 56, bottom: 8, left: 8 }}
          barCategoryGap="22%"
        >
          <CartesianGrid {...GRID} horizontal={false} vertical />
          <XAxis type="number" domain={[0, maxCount]} {...AXIS} />
          <YAxis
            type="category"
            dataKey="grade"
            {...AXIS}
            width={28}
            tick={{ fontSize: 13, fontWeight: 700, fill: 'hsl(var(--foreground))' }}
            interval={0}
          />
          <Tooltip content={<DistTooltip />} cursor={{ fill: 'hsl(var(--muted)/0.4)' }} />

          {/* Target outline (behind) */}
          {hasTarget && (
            <Bar
              dataKey="targetCount"
              fill="none"
              stroke="hsl(var(--foreground)/0.2)"
              strokeWidth={1.5}
              strokeDasharray="4 3"
              radius={[0, 4, 4, 0]}
              isAnimationActive={false}
              barSize={18}
            />
          )}

          {/* Current bars */}
          <Bar
            dataKey="count"
            radius={[0, 4, 4, 0]}
            isAnimationActive={!printFriendly}
            animationDuration={700}
            barSize={20}
          >
            {chartData.map((d) => (
              <Cell key={d.grade} fill={gradeColor(d.grade)} fillOpacity={0.75} />
            ))}
            <LabelList
              dataKey="count"
              position="right"
              style={{
                fontSize: 11,
                fontWeight: 600,
                fill: 'hsl(var(--foreground))',
              }}
            />
          </Bar>

          {/* National average markers */}
          {nationalCounts &&
            chartData.map((d) =>
              (d.nationalCount ?? 0) > 0 ? (
                <ReferenceLine
                  key={`nat-${d.grade}`}
                  x={d.nationalCount ?? 0}
                  stroke="#60a5fa"
                  strokeWidth={2}
                  ifOverflow="extendDomain"
                />
              ) : null,
            )}
        </BarChart>
      </ChartFrame>

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
