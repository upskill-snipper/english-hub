'use client'

import { useMemo, memo } from 'react'
import {
  RadarChart as RechartsRadar,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from 'recharts'
import { cn } from '@/lib/utils'
import { ChartFrame, GlassTooltip } from '@/components/dataviz'

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface RadarDataSet {
  label: string
  color: string
  /** Score per skill (0-100), keyed by skill name */
  values: Record<string, number>
  /** Fill opacity 0-1. Default 0.15 */
  fillOpacity?: number
  /** Stroke dash pattern. Default solid */
  dashArray?: string
}

interface RadarChartProps {
  /** Skill names (axes). Default: English skills */
  skills?: string[]
  /** One or more data overlays (student, class avg, etc.) */
  datasets: RadarDataSet[]
  /** Max scale value. Default 100 */
  maxValue?: number
  /** Number of concentric grid rings. Default 5 */
  rings?: number
  /** Size of the chart in px. Default 350 */
  size?: number
  /** Show values on hover. Default true */
  interactive?: boolean
  /** Print-friendly mode */
  printFriendly?: boolean
  className?: string
  /** Title shown above the chart */
  title?: string
  /** Toggle between individual student or class aggregate view */
  viewMode?: 'individual' | 'class'
  onViewModeChange?: (mode: 'individual' | 'class') => void
}

/* ── Default English skills ────────────────────────────────────────────────── */

const DEFAULT_SKILLS = [
  'Reading',
  'Writing',
  'Analysis',
  'Evaluation',
  'Comparison',
  'SPaG',
  'Creative',
  'Vocabulary',
]

/* ── Component ─────────────────────────────────────────────────────────────── */
// Re-skinned onto the premium "cinematic glass" Recharts radar. The public
// API (props, types, exports, defaults) is byte-identical to the previous
// hand-rolled SVG implementation — only the internals changed.

export const RadarChart = memo(function RadarChart({
  skills = DEFAULT_SKILLS,
  datasets,
  maxValue = 100,
  rings = 5,
  size = 350,
  interactive = true,
  printFriendly = false,
  className,
  title,
  viewMode,
  onViewModeChange,
}: RadarChartProps) {
  /* One row per skill axis; one numeric key per dataset. */
  const chartData = useMemo(
    () =>
      skills.map((skill) => {
        const row: Record<string, unknown> = { skill }
        datasets.forEach((ds, di) => {
          row[`ds${di}`] = Math.min(ds.values[skill] ?? 0, maxValue)
        })
        return row
      }),
    [skills, datasets, maxValue],
  )

  if (datasets.length === 0) {
    return (
      <div
        className={cn('flex items-center justify-center text-sm text-muted-foreground', className)}
        style={{ height: size }}
      >
        No radar data available.
      </div>
    )
  }

  return (
    <div className={cn('print:break-inside-avoid', className)}>
      {/* Header row */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        {title && <h3 className="text-sm font-semibold text-foreground">{title}</h3>}

        {/* View mode toggle */}
        {onViewModeChange && !printFriendly && (
          <div className="flex items-center gap-1 rounded-lg border bg-muted/30 p-0.5 print:hidden">
            {(['individual', 'class'] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => onViewModeChange(mode)}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium capitalize transition-colors',
                  viewMode === mode
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {mode}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mb-2 flex flex-wrap items-center gap-3 text-xs">
        {datasets.map((ds) => (
          <div key={ds.label} className="flex items-center gap-1.5">
            <span
              className="inline-block h-2 w-4 rounded-sm"
              style={{ backgroundColor: ds.color }}
            />
            <span className="text-muted-foreground">{ds.label}</span>
          </div>
        ))}
      </div>

      {/* Recharts cinematic-glass radar */}
      <div className="mx-auto w-full" style={{ maxWidth: size }}>
        <ChartFrame height={size}>
          <RechartsRadar data={chartData} outerRadius="70%">
            <PolarGrid stroke="hsl(var(--border))" gridType="polygon" radialLines />
            <PolarAngleAxis
              dataKey="skill"
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
            />
            <PolarRadiusAxis
              domain={[0, maxValue]}
              tickCount={rings + 1}
              tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }}
              axisLine={false}
              stroke="hsl(var(--border))"
            />
            {datasets.map((ds, di) => (
              <Radar
                key={ds.label}
                name={ds.label}
                dataKey={`ds${di}`}
                stroke={ds.color}
                strokeWidth={2}
                strokeDasharray={ds.dashArray}
                fill={ds.color}
                fillOpacity={ds.fillOpacity ?? 0.15}
                isAnimationActive={!printFriendly}
                animationDuration={900}
                dot={{ r: 3, fill: ds.color, strokeWidth: 0 }}
              />
            ))}
            {interactive && !printFriendly && <Tooltip content={<GlassTooltip suffix="%" />} />}
          </RechartsRadar>
        </ChartFrame>
      </div>

      {/* Skill scores table (print-friendly and accessible) */}
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b">
              <th className="px-2 py-1.5 text-left font-medium text-muted-foreground">Skill</th>
              {datasets.map((ds) => (
                <th
                  key={ds.label}
                  className="px-2 py-1.5 text-center font-medium text-muted-foreground"
                >
                  <span className="flex items-center justify-center gap-1">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: ds.color }}
                    />
                    {ds.label}
                  </span>
                </th>
              ))}
              {datasets.length >= 2 && (
                <th className="px-2 py-1.5 text-center font-medium text-muted-foreground">Diff</th>
              )}
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => {
              const values = datasets.map((ds) => ds.values[skill] ?? 0)
              const diff = datasets.length >= 2 ? Math.round(values[0] - values[1]) : null
              return (
                <tr key={skill} className="border-b last:border-b-0 transition-colors">
                  <td className="px-2 py-1.5 font-medium text-foreground">{skill}</td>
                  {values.map((v, vi) => (
                    <td key={vi} className="px-2 py-1.5 text-center tabular-nums">
                      <span
                        className={cn(
                          'font-semibold',
                          v < 40
                            ? 'text-red-400'
                            : v < 60
                              ? 'text-clay-600'
                              : v < 75
                                ? 'text-clay-600'
                                : 'text-green-400',
                        )}
                      >
                        {Math.round(v)}%
                      </span>
                    </td>
                  ))}
                  {diff !== null && (
                    <td className="px-2 py-1.5 text-center tabular-nums">
                      <span
                        className={cn(
                          'font-semibold',
                          diff > 0
                            ? 'text-green-400'
                            : diff < 0
                              ? 'text-red-400'
                              : 'text-muted-foreground',
                        )}
                      >
                        {diff > 0 ? '+' : ''}
                        {diff}
                      </span>
                    </td>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
})
