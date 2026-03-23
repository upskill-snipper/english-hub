'use client'

import { useMemo, useState, useCallback, useRef } from 'react'
import { cn } from '@/lib/utils'

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

/* ── Smooth path helper (Catmull-Rom → cubic bezier) ──────────────────────── */

function smoothPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return ''
  if (pts.length === 2) return `M ${pts[0].x} ${pts[0].y} L ${pts[1].x} ${pts[1].y}`

  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[Math.min(i + 2, pts.length - 1)]

    const cp1x = p1.x + (p2.x - p0.x) / 6
    const cp1y = p1.y + (p2.y - p0.y) / 6
    const cp2x = p2.x - (p3.x - p1.x) / 6
    const cp2y = p2.y - (p3.y - p1.y) / 6

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
  }
  return d
}

/* ── Line/Area Chart ───────────────────────────────────────────────────────── */

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
  color = '#22c55e',
  secondaryColor = '#3b82f6',
  showLabels = true,
  showDots = true,
  showArea = true,
  className,
  label,
  secondaryLabel,
  printFriendly = false,
}: TrendChartProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [hoveredSeries, setHoveredSeries] = useState<string | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const padding = { top: 24, right: 24, bottom: 36, left: 44 }
  const width = 700

  /* ── Determine data length and compute max ─────────────────────────────── */

  const dataLength = series
    ? Math.max(...series.map((s) => s.data.length), 0)
    : data?.length ?? 0

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

  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  /* ── Build coordinate arrays ───────────────────────────────────────────── */

  const xScale = useCallback(
    (i: number) => padding.left + (i / Math.max(dataLength - 1, 1)) * chartWidth,
    [dataLength, chartWidth, padding.left],
  )

  const yScale = useCallback(
    (v: number) => padding.top + chartHeight - (v / maxValue) * chartHeight,
    [chartHeight, maxValue, padding.top],
  )

  /* Series mode points */
  const seriesPoints = useMemo(() => {
    if (!series) return []
    return series.map((s) => ({
      ...s,
      points: s.data.map((v, i) => ({ x: xScale(i), y: yScale(v), value: v })),
    }))
  }, [series, xScale, yScale])

  /* Legacy single/dual data mode */
  const legacyPoints = useMemo(() => {
    if (!data) return []
    return data.map((d, i) => ({
      x: xScale(i),
      y: yScale(d.value),
      secondaryY: d.secondaryValue !== undefined ? yScale(d.secondaryValue) : undefined,
      label: d.label,
      value: d.value,
      secondaryValue: d.secondaryValue,
    }))
  }, [data, xScale, yScale])

  /* Legacy paths */
  const linePath = useMemo(() => {
    if (legacyPoints.length < 2) return ''
    return smoothPath(legacyPoints.map((p) => ({ x: p.x, y: p.y })))
  }, [legacyPoints])

  const secondaryLinePath = useMemo(() => {
    if (legacyPoints.length < 2) return ''
    const hasSecondary = legacyPoints.some((p) => p.secondaryY !== undefined)
    if (!hasSecondary) return ''
    return smoothPath(
      legacyPoints.map((p) => ({ x: p.x, y: p.secondaryY ?? p.y })),
    )
  }, [legacyPoints])

  const areaPath = useMemo(() => {
    if (legacyPoints.length < 2 || !showArea) return ''
    const bottomY = padding.top + chartHeight
    return `${linePath} L ${legacyPoints[legacyPoints.length - 1].x} ${bottomY} L ${legacyPoints[0].x} ${bottomY} Z`
  }, [linePath, legacyPoints, showArea, chartHeight, padding.top])

  /* Y-axis ticks */
  const yTicks = useMemo(() => {
    const count = 5
    return Array.from({ length: count + 1 }, (_, i) => {
      const value = Math.round((maxValue / count) * i)
      const y = yScale(value)
      return { value, y }
    })
  }, [maxValue, yScale])

  /* X-axis labels */
  const effectiveLabels = useMemo(() => {
    if (xLabels) return xLabels
    if (data) return data.map((d) => d.label)
    return []
  }, [xLabels, data])

  /* ── Mouse handling ────────────────────────────────────────────────────── */

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      if (dataLength === 0) return
      const svg = e.currentTarget
      const rect = svg.getBoundingClientRect()
      const mouseX = ((e.clientX - rect.left) / rect.width) * width
      let closest = 0
      let closestDist = Infinity
      for (let i = 0; i < dataLength; i++) {
        const dist = Math.abs(xScale(i) - mouseX)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      }
      setHoveredIdx(closest)
    },
    [dataLength, width, xScale],
  )

  /* Target line Y */
  const targetY = targetValue !== undefined ? yScale(targetValue) : null

  /* ── Empty state ───────────────────────────────────────────────────────── */

  if (dataLength === 0) {
    return (
      <div
        className={cn(
          'flex items-center justify-center text-sm text-muted-foreground',
          className,
        )}
        style={{ height }}
      >
        No trend data available yet.
      </div>
    )
  }

  /* ── Build tooltip content ─────────────────────────────────────────────── */

  const tooltipContent = hoveredIdx !== null ? (() => {
    const items: { label: string; value: number; color: string }[] = []
    if (series) {
      for (const sp of seriesPoints) {
        if (sp.points[hoveredIdx]) {
          items.push({ label: sp.label, value: sp.points[hoveredIdx].value, color: sp.color })
        }
      }
    } else if (legacyPoints[hoveredIdx]) {
      const lp = legacyPoints[hoveredIdx]
      items.push({ label: label ?? 'Value', value: lp.value, color })
      if (lp.secondaryValue !== undefined) {
        items.push({ label: secondaryLabel ?? 'Secondary', value: lp.secondaryValue, color: secondaryColor })
      }
    }
    return items
  })() : []

  /* ── Tooltip positioning ───────────────────────────────────────────────── */

  const tooltipX = hoveredIdx !== null ? xScale(hoveredIdx) : 0
  const tooltipWidth = 140
  const tooltipHeight = 16 + tooltipContent.length * 18 + 8
  const tooltipXAdj = Math.min(Math.max(tooltipX - tooltipWidth / 2, 2), width - tooltipWidth - 2)
  const tooltipYAdj = 2

  /* ── Annotation marker color ───────────────────────────────────────────── */

  function annotationColor(type?: string) {
    switch (type) {
      case 'exam': return '#ef4444'
      case 'module': return '#8b5cf6'
      default: return '#f59e0b'
    }
  }

  /* ── Render ─────────────────────────────────────────────────────────────── */

  return (
    <div className={cn('print:break-inside-avoid', className)}>
      {/* Controls row */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {series ? (
            seriesPoints.map((sp) => (
              <button
                key={sp.key}
                type="button"
                className={cn(
                  'flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors',
                  hoveredSeries === sp.key
                    ? 'bg-accent'
                    : 'hover:bg-accent/50',
                  printFriendly && 'pointer-events-none',
                )}
                onMouseEnter={() => setHoveredSeries(sp.key)}
                onMouseLeave={() => setHoveredSeries(null)}
              >
                <span
                  className="inline-block h-2 w-4 rounded-sm"
                  style={{
                    backgroundColor: sp.color,
                    opacity: hoveredSeries && hoveredSeries !== sp.key ? 0.3 : 1,
                  }}
                />
                <span className="text-muted-foreground">{sp.label}</span>
              </button>
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
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: secondaryColor }} />
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

      {/* SVG Chart */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        preserveAspectRatio="xMidYMid meet"
        onMouseMove={printFriendly ? undefined : handleMouseMove}
        onMouseLeave={printFriendly ? undefined : () => setHoveredIdx(null)}
        role="img"
        aria-label="Trend chart"
      >
        {/* Grid lines */}
        {yTicks.map((tick) => (
          <g key={tick.value}>
            <line
              x1={padding.left}
              x2={width - padding.right}
              y1={tick.y}
              y2={tick.y}
              stroke="currentColor"
              className="text-border"
              strokeDasharray="4 4"
              strokeWidth="0.5"
            />
            <text
              x={padding.left - 8}
              y={tick.y + 4}
              textAnchor="end"
              className="fill-muted-foreground"
              fontSize="10"
            >
              {tick.value}
            </text>
          </g>
        ))}

        {/* Target line */}
        {targetY !== null && (
          <g>
            <line
              x1={padding.left}
              x2={width - padding.right}
              y1={targetY}
              y2={targetY}
              stroke="#eab308"
              strokeWidth="1.5"
              strokeDasharray="8 4"
              opacity={0.7}
            />
            <text
              x={width - padding.right + 4}
              y={targetY + 4}
              fontSize="9"
              fill="#eab308"
              fontWeight="600"
            >
              {targetLabel}
            </text>
          </g>
        )}

        {/* ── Series mode ─────────────────────────────────────────────────── */}
        {series ? (
          <>
            {seriesPoints.map((sp) => {
              const path = smoothPath(sp.points)
              const opacity = hoveredSeries && hoveredSeries !== sp.key ? 0.2 : 1
              return (
                <g key={sp.key} style={{ opacity, transition: 'opacity 200ms' }}>
                  {/* Area fill for first series */}
                  {showArea && sp.key === seriesPoints[0]?.key && sp.points.length >= 2 && (
                    <path
                      d={`${path} L ${sp.points[sp.points.length - 1].x} ${padding.top + chartHeight} L ${sp.points[0].x} ${padding.top + chartHeight} Z`}
                      fill={sp.color}
                      fillOpacity="0.06"
                    />
                  )}
                  <path
                    d={path}
                    fill="none"
                    stroke={sp.color}
                    strokeWidth={sp.strokeWidth ?? 2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={sp.dashArray}
                  />
                  {showDots &&
                    sp.points.map((p, i) => (
                      <circle
                        key={i}
                        cx={p.x}
                        cy={p.y}
                        r={hoveredIdx === i ? 5 : 3}
                        fill={sp.color}
                        stroke="var(--background)"
                        strokeWidth="2"
                        className="transition-all duration-150"
                      />
                    ))}
                </g>
              )
            })}
          </>
        ) : (
          /* ── Legacy single/dual mode ────────────────────────────────────── */
          <>
            {showArea && areaPath && (
              <path d={areaPath} fill={color} fillOpacity="0.08" />
            )}
            {linePath && (
              <path
                d={linePath}
                fill="none"
                stroke={color}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
            {secondaryLinePath && (
              <path
                d={secondaryLinePath}
                fill="none"
                stroke={secondaryColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="6 3"
              />
            )}
            {showDots &&
              legacyPoints.map((p, i) => (
                <g key={i}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={hoveredIdx === i ? 6 : 4}
                    fill={color}
                    stroke="var(--background)"
                    strokeWidth="2"
                    className="transition-all duration-150"
                  />
                  {p.secondaryY !== undefined && (
                    <circle
                      cx={p.x}
                      cy={p.secondaryY}
                      r={hoveredIdx === i ? 5 : 3}
                      fill={secondaryColor}
                      stroke="var(--background)"
                      strokeWidth="2"
                      className="transition-all duration-150"
                    />
                  )}
                </g>
              ))}
          </>
        )}

        {/* ── Annotation markers ──────────────────────────────────────────── */}
        {annotations?.map((ann, i) => {
          const ax = xScale(ann.index)
          const markerColor = annotationColor(ann.type)
          return (
            <g key={`ann-${i}`}>
              <line
                x1={ax}
                x2={ax}
                y1={padding.top}
                y2={padding.top + chartHeight}
                stroke={markerColor}
                strokeWidth="1"
                strokeDasharray="3 3"
                opacity={0.5}
              />
              {/* Diamond marker */}
              <polygon
                points={`${ax},${padding.top - 2} ${ax + 6},${padding.top + 6} ${ax},${padding.top + 14} ${ax - 6},${padding.top + 6}`}
                fill={markerColor}
                opacity={0.85}
              />
              <text
                x={ax}
                y={padding.top - 6}
                textAnchor="middle"
                fontSize="8"
                fill={markerColor}
                fontWeight="600"
              >
                {ann.label}
              </text>
            </g>
          )
        })}

        {/* ── Hover crosshair + tooltip ───────────────────────────────────── */}
        {!printFriendly && hoveredIdx !== null && (
          <g>
            <line
              x1={xScale(hoveredIdx)}
              x2={xScale(hoveredIdx)}
              y1={padding.top}
              y2={padding.top + chartHeight}
              stroke="currentColor"
              className="text-muted-foreground"
              strokeWidth="0.5"
              strokeDasharray="3 3"
            />
            {/* Tooltip box */}
            <rect
              x={tooltipXAdj}
              y={tooltipYAdj}
              width={tooltipWidth}
              height={tooltipHeight}
              rx="6"
              fill="var(--foreground)"
              opacity="0.92"
            />
            {/* Tooltip label */}
            <text
              x={tooltipXAdj + 10}
              y={tooltipYAdj + 14}
              fill="var(--background)"
              fontSize="10"
              fontWeight="600"
            >
              {effectiveLabels[hoveredIdx] ?? `Point ${hoveredIdx + 1}`}
            </text>
            {/* Tooltip values */}
            {tooltipContent.map((item, ti) => (
              <g key={ti}>
                <circle
                  cx={tooltipXAdj + 14}
                  cy={tooltipYAdj + 28 + ti * 18}
                  r="3"
                  fill={item.color}
                />
                <text
                  x={tooltipXAdj + 22}
                  y={tooltipYAdj + 32 + ti * 18}
                  fill="var(--background)"
                  fontSize="10"
                >
                  {item.label}: {Math.round(item.value * 10) / 10}
                </text>
              </g>
            ))}
          </g>
        )}

        {/* X-axis labels */}
        {showLabels &&
          effectiveLabels.map((lbl, i) => {
            // Skip some labels if too many
            const skip = effectiveLabels.length > 12 ? Math.ceil(effectiveLabels.length / 10) : 1
            if (i % skip !== 0 && i !== effectiveLabels.length - 1) return null
            return (
              <text
                key={i}
                x={xScale(i)}
                y={height - 6}
                textAnchor="middle"
                className="fill-muted-foreground"
                fontSize="9"
              >
                {lbl}
              </text>
            )
          })}
      </svg>
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
  if (!thresholds || thresholds.length === 0) return fallback ?? '#22c55e'
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
  defaultColor = '#22c55e',
  className,
  thresholds,
}: BarChartProps) {
  const maxValue = useMemo(() => {
    if (maxValueProp) return maxValueProp
    return Math.max(...data.map((d) => d.value), 1) * 1.15
  }, [data, maxValueProp])

  if (data.length === 0) {
    return (
      <div
        className={cn(
          'flex items-center justify-center text-sm text-muted-foreground',
          className,
        )}
        style={{ height }}
      >
        No data available.
      </div>
    )
  }

  return (
    <div
      className={cn('flex items-end gap-1 sm:gap-2', className)}
      style={{ height }}
    >
      {data.map((d, i) => {
        const barColor =
          d.color ?? getThresholdColor(d.value, thresholds, defaultColor)
        return (
          <div
            key={i}
            className="group relative flex flex-1 flex-col items-center"
          >
            <div className="pointer-events-none absolute -top-7 z-10 hidden rounded bg-foreground px-2 py-0.5 text-xs font-medium text-background whitespace-nowrap group-hover:block">
              {d.value}
            </div>
            <div
              className="w-full max-w-[40px] rounded-t transition-all duration-300"
              style={{
                height: `${Math.max((d.value / maxValue) * 100, 2)}%`,
                backgroundColor: barColor,
              }}
            />
            <span className="mt-1 text-[10px] text-muted-foreground leading-tight text-center hidden sm:block">
              {d.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
