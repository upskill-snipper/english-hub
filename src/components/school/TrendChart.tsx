'use client'

import { useMemo } from 'react'
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  BarChart as RechartsBar,
  Bar as RechartsBarItem,
  Cell as RechartsCell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from 'recharts'
import { cn } from '@/lib/utils'
import { GlassTooltip, ChartFrame } from '@/components/dataviz'
import { GRID, AXIS, GRAD } from '@/components/dataviz'

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface DataPoint {
  label: string
  value: number
  secondaryValue?: number
}

interface Annotation {
  /** Index in the data array where the annotation should appear */
  index: number
  label: string
  type?: 'exam' | 'module' | 'event'
}

type DateRange = '4w' | '8w' | 'term' | 'year'

interface DataSeries {
  key: string
  label: string
  data: number[]
  color: string
  dashArray?: string
  /** Width of stroke. Default 2.5 */
  strokeWidth?: number
}

interface TrendChartProps {
  /** Basic mode: simple data points */
  data?: DataPoint[]
  /** Advanced mode: multiple series overlay */
  series?: DataSeries[]
  /** X-axis labels (used with series mode) */
  xLabels?: string[]
  /** Target score line (horizontal) */
  targetValue?: number
  targetLabel?: string
  /** Annotations / event markers */
  annotations?: Annotation[]
  /** Date range options */
  dateRanges?: { key: DateRange; label: string }[]
  activeDateRange?: DateRange
  onDateRangeChange?: (range: DateRange) => void

  height?: number
  maxValue?: number
  color?: string
  secondaryColor?: string
  showLabels?: boolean
  showDots?: boolean
  showArea?: boolean
  className?: string
  label?: string
  secondaryLabel?: string
  /** Print-friendly: hides interactive elements, increases contrast */
  printFriendly?: boolean
}

/* ── Default date ranges ──────────────────────────────────────────────────── */

const DEFAULT_DATE_RANGES: { key: DateRange; label: string }[] = [
  { key: '4w', label: '4 Weeks' },
  { key: '8w', label: '8 Weeks' },
  { key: 'term', label: 'This Term' },
  { key: 'year', label: 'This Year' },
]

/* ── Annotation marker colour ─────────────────────────────────────────────── */

function annotationColor(type?: string): string {
  switch (type) {
    case 'exam':
      return 'hsl(var(--chart-5))'
    case 'module':
      return 'hsl(var(--chart-4))'
    default:
      return 'hsl(var(--chart-3))'
  }
}

/* ── Line/Area Chart ───────────────────────────────────────────────────────── */
// Re-skinned onto the premium "cinematic glass" Recharts layer. The public
// API (props, types, exports, defaults) is byte-identical to the previous
// hand-rolled SVG implementation — only the internals changed.

export function TrendChart({
  data,
  series,
  xLabels,
  targetValue,
  targetLabel = 'Target',
  annotations,
  dateRanges,
  activeDateRange,
  onDateRangeChange,
  height = 240,
  maxValue: maxValueProp,
  color = 'hsl(var(--chart-1))',
  secondaryColor = 'hsl(var(--chart-2))',
  showLabels = true,
  showDots = true,
  showArea = true,
  className,
  label,
  secondaryLabel,
  printFriendly = false,
}: TrendChartProps) {
  /* ── Determine data length ─────────────────────────────────────────────── */

  const dataLength = series ? Math.max(...series.map((s) => s.data.length), 0) : (data?.length ?? 0)

  /* ── Y-axis max ────────────────────────────────────────────────────────── */

  const maxValue = useMemo(() => {
    if (maxValueProp) return maxValueProp
    let max = 10
    if (series) {
      for (const s of series) {
        for (const v of s.data) max = Math.max(max, v)
      }
    }
    if (data) {
      for (const d of data) {
        max = Math.max(max, d.value, d.secondaryValue ?? 0)
      }
    }
    if (targetValue !== undefined) max = Math.max(max, targetValue)
    return max * 1.1
  }, [data, series, maxValueProp, targetValue])

  /* ── X-axis labels ─────────────────────────────────────────────────────── */

  const effectiveLabels = useMemo(() => {
    if (xLabels) return xLabels
    if (data) return data.map((d) => d.label)
    return []
  }, [xLabels, data])

  /* ── Recharts row data ─────────────────────────────────────────────────── */

  const chartData = useMemo(() => {
    if (series) {
      return Array.from({ length: dataLength }, (_, i) => {
        const row: Record<string, unknown> = {
          _i: i,
          _label: effectiveLabels[i] ?? `Point ${i + 1}`,
        }
        for (const s of series) row[s.key] = s.data[i]
        return row
      })
    }
    return (data ?? []).map((d, i) => ({
      _i: i,
      _label: d.label,
      __primary: d.value,
      __secondary: d.secondaryValue,
    }))
  }, [series, data, dataLength, effectiveLabels])

  const hasSecondary = !series && (data?.some((d) => d.secondaryValue !== undefined) ?? false)

  /* ── Empty state ───────────────────────────────────────────────────────── */

  if (dataLength === 0) {
    return (
      <div
        className={cn('flex items-center justify-center text-sm text-muted-foreground', className)}
        style={{ height }}
      >
        No trend data available yet.
      </div>
    )
  }

  /* ── Render ─────────────────────────────────────────────────────────────── */

  return (
    <div className={cn('print:break-inside-avoid', className)}>
      {/* Controls row */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {series ? (
            series.map((s) => (
              <div key={s.key} className="flex items-center gap-1.5">
                <span
                  className="inline-block h-2 w-4 rounded-sm"
                  style={{ backgroundColor: s.color }}
                />
                <span className="text-muted-foreground">{s.label}</span>
              </div>
            ))
          ) : (
            <>
              {label && (
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-muted-foreground">{label}</span>
                </div>
              )}
              {secondaryLabel && (
                <div className="flex items-center gap-1.5">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: secondaryColor }}
                  />
                  <span className="text-muted-foreground">{secondaryLabel}</span>
                </div>
              )}
            </>
          )}
          {targetValue !== undefined && (
            <div className="flex items-center gap-1.5">
              <span className="inline-block h-0.5 w-4 rounded-sm bg-yellow-500" />
              <span className="text-muted-foreground">{targetLabel}</span>
            </div>
          )}
        </div>

        {/* Date range selector */}
        {!printFriendly && onDateRangeChange && (
          <div className="flex items-center gap-1 rounded-lg border bg-muted/30 p-0.5 print:hidden">
            {(dateRanges ?? DEFAULT_DATE_RANGES).map((dr) => (
              <button
                key={dr.key}
                type="button"
                onClick={() => onDateRangeChange(dr.key)}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium transition-colors',
                  activeDateRange === dr.key
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {dr.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Recharts cinematic-glass chart */}
      <ChartFrame height={height}>
        <ComposedChart data={chartData} margin={{ top: 16, right: 24, bottom: 8, left: -12 }}>
          <defs>
            <linearGradient id={GRAD.area} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.4} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid {...GRID} />
          <XAxis
            dataKey="_label"
            {...AXIS}
            hide={!showLabels}
            interval="preserveStartEnd"
            minTickGap={24}
          />
          <YAxis domain={[0, maxValue]} {...AXIS} width={44} />
          <Tooltip
            content={<GlassTooltip />}
            cursor={{ stroke: 'hsl(var(--border))', strokeDasharray: '3 3' }}
          />

          {/* Target line */}
          {targetValue !== undefined && (
            <ReferenceLine
              y={targetValue}
              stroke="hsl(var(--chart-3))"
              strokeWidth={1.5}
              strokeDasharray="8 4"
              strokeOpacity={0.7}
              label={{
                value: targetLabel,
                position: 'right',
                fontSize: 9,
                fill: 'hsl(var(--chart-3))',
                fontWeight: 600,
              }}
            />
          )}

          {/* Annotation markers */}
          {annotations?.map((ann, i) => (
            <ReferenceLine
              key={`ann-${i}`}
              x={chartData[ann.index]?._label as string | undefined}
              stroke={annotationColor(ann.type)}
              strokeWidth={1}
              strokeDasharray="3 3"
              strokeOpacity={0.5}
              label={{
                value: ann.label,
                position: 'insideTop',
                fontSize: 8,
                fill: annotationColor(ann.type),
                fontWeight: 600,
              }}
            />
          ))}

          {/* ── Series mode ─────────────────────────────────────────────── */}
          {series ? (
            series.map((s, si) => (
              <Area
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.label}
                stroke={s.color}
                strokeWidth={s.strokeWidth ?? 2.5}
                strokeDasharray={s.dashArray}
                fill={si === 0 && showArea ? `url(#${GRAD.area})` : 'transparent'}
                fillOpacity={si === 0 && showArea ? 1 : 0}
                isAnimationActive={!printFriendly}
                animationDuration={900}
                dot={showDots ? { r: 3, fill: s.color, strokeWidth: 0 } : false}
                activeDot={showDots ? { r: 5 } : false}
                connectNulls
              />
            ))
          ) : (
            /* ── Legacy single/dual mode ──────────────────────────────────── */
            <>
              <Area
                type="monotone"
                dataKey="__primary"
                name={label ?? 'Value'}
                stroke={color}
                strokeWidth={2.5}
                fill={showArea ? `url(#${GRAD.area})` : 'transparent'}
                fillOpacity={showArea ? 1 : 0}
                isAnimationActive={!printFriendly}
                animationDuration={900}
                dot={showDots ? { r: 4, fill: color, strokeWidth: 0 } : false}
                activeDot={showDots ? { r: 6 } : false}
                connectNulls
              />
              {hasSecondary && (
                <Line
                  type="monotone"
                  dataKey="__secondary"
                  name={secondaryLabel ?? 'Secondary'}
                  stroke={secondaryColor}
                  strokeWidth={2}
                  strokeDasharray="6 3"
                  isAnimationActive={!printFriendly}
                  animationDuration={900}
                  dot={showDots ? { r: 3, fill: secondaryColor, strokeWidth: 0 } : false}
                  activeDot={showDots ? { r: 5 } : false}
                  connectNulls
                />
              )}
            </>
          )}
        </ComposedChart>
      </ChartFrame>
    </div>
  )
}

/* ── Bar Chart variant ─────────────────────────────────────────────────────── */

interface BarDataPoint {
  label: string
  value: number
  color?: string
}

interface BarChartProps {
  data: BarDataPoint[]
  height?: number
  maxValue?: number
  defaultColor?: string
  className?: string
  thresholds?: { value: number; color: string }[]
}

function getThresholdColor(
  value: number,
  thresholds?: { value: number; color: string }[],
  fallback?: string,
): string {
  if (!thresholds || thresholds.length === 0) return fallback ?? 'hsl(var(--chart-1))'
  const sorted = [...thresholds].sort((a, b) => a.value - b.value)
  for (const t of sorted) {
    if (value < t.value) return t.color
  }
  return sorted[sorted.length - 1].color
}

export function BarChart({
  data,
  height = 200,
  maxValue: maxValueProp,
  defaultColor = 'hsl(var(--chart-1))',
  className,
  thresholds,
}: BarChartProps) {
  const maxValue = useMemo(() => {
    if (maxValueProp) return maxValueProp
    return Math.max(...data.map((d) => d.value), 1) * 1.15
  }, [data, maxValueProp])

  const rows = useMemo(
    () =>
      data.map((d) => ({
        ...d,
        __fill: d.color ?? getThresholdColor(d.value, thresholds, defaultColor),
      })),
    [data, thresholds, defaultColor],
  )

  if (data.length === 0) {
    return (
      <div
        className={cn('flex items-center justify-center text-sm text-muted-foreground', className)}
        style={{ height }}
      >
        No data available.
      </div>
    )
  }

  return (
    <div className={cn('w-full', className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBar
          data={rows}
          margin={{ top: 20, right: 8, bottom: 4, left: -16 }}
          barCategoryGap="16%"
        >
          <CartesianGrid {...GRID} />
          <XAxis
            dataKey="label"
            {...AXIS}
            interval={0}
            tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis domain={[0, maxValue]} {...AXIS} width={40} />
          <Tooltip content={<GlassTooltip />} cursor={{ fill: 'hsl(var(--muted)/0.4)' }} />
          <RechartsBarItem
            dataKey="value"
            radius={[6, 6, 0, 0]}
            isAnimationActive
            animationDuration={700}
          >
            {rows.map((r, i) => (
              <RechartsCell key={i} fill={r.__fill} />
            ))}
          </RechartsBarItem>
        </RechartsBar>
      </ResponsiveContainer>
    </div>
  )
}
