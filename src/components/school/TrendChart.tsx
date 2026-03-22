'use client'

import { useMemo, useState, useCallback } from 'react'
import { cn } from '@/lib/utils'

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface DataPoint {
  label: string
  value: number
  secondaryValue?: number
}

interface TrendChartProps {
  data: DataPoint[]
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
}

/* ── Line/Area Chart ───────────────────────────────────────────────────────── */

export function TrendChart({
  data,
  height = 200,
  maxValue: maxValueProp,
  color = '#22c55e',
  secondaryColor = '#3b82f6',
  showLabels = true,
  showDots = true,
  showArea = true,
  className,
  label,
  secondaryLabel,
}: TrendChartProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const padding = { top: 20, right: 20, bottom: 30, left: 40 }
  const width = 600

  const maxValue = useMemo(() => {
    if (maxValueProp) return maxValueProp
    const allValues = data.flatMap((d) => [d.value, d.secondaryValue ?? 0])
    return Math.max(...allValues, 10) * 1.1
  }, [data, maxValueProp])

  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  const points = useMemo(() => {
    return data.map((d, i) => ({
      x: padding.left + (i / Math.max(data.length - 1, 1)) * chartWidth,
      y: padding.top + chartHeight - (d.value / maxValue) * chartHeight,
      secondaryY:
        d.secondaryValue !== undefined
          ? padding.top +
            chartHeight -
            (d.secondaryValue / maxValue) * chartHeight
          : undefined,
      label: d.label,
      value: d.value,
      secondaryValue: d.secondaryValue,
    }))
  }, [data, chartWidth, chartHeight, maxValue, padding.left, padding.top])

  const linePath = useMemo(() => {
    if (points.length < 2) return ''
    return points
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
      .join(' ')
  }, [points])

  const secondaryLinePath = useMemo(() => {
    if (points.length < 2) return ''
    const hasSecondary = points.some((p) => p.secondaryY !== undefined)
    if (!hasSecondary) return ''
    return points
      .map(
        (p, i) =>
          `${i === 0 ? 'M' : 'L'} ${p.x} ${p.secondaryY ?? p.y}`,
      )
      .join(' ')
  }, [points])

  const areaPath = useMemo(() => {
    if (points.length < 2 || !showArea) return ''
    const bottomY = padding.top + chartHeight
    return `${linePath} L ${points[points.length - 1].x} ${bottomY} L ${points[0].x} ${bottomY} Z`
  }, [linePath, points, showArea, chartHeight, padding.top])

  const yTicks = useMemo(() => {
    const count = 4
    return Array.from({ length: count + 1 }, (_, i) => {
      const value = Math.round((maxValue / count) * i)
      const y =
        padding.top + chartHeight - (value / maxValue) * chartHeight
      return { value, y }
    })
  }, [maxValue, chartHeight, padding.top])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      if (points.length === 0) return
      const svg = e.currentTarget
      const rect = svg.getBoundingClientRect()
      const mouseX = ((e.clientX - rect.left) / rect.width) * width
      let closest = 0
      let closestDist = Infinity
      for (let i = 0; i < points.length; i++) {
        const dist = Math.abs(points[i].x - mouseX)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      }
      setHoveredIdx(closest)
    },
    [points, width],
  )

  if (data.length === 0) {
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

  return (
    <div className={className}>
      {/* Legend */}
      {(label || secondaryLabel) && (
        <div className="mb-2 flex items-center gap-4 text-xs">
          {label && (
            <div className="flex items-center gap-1.5">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: color }}
              />
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
        </div>
      )}

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        preserveAspectRatio="xMidYMid meet"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredIdx(null)}
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

        {/* Area fill */}
        {showArea && areaPath && (
          <path d={areaPath} fill={color} fillOpacity="0.08" />
        )}

        {/* Primary line */}
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

        {/* Secondary line */}
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

        {/* Dots */}
        {showDots &&
          points.map((p, i) => (
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
              <title>
                {`${p.label}: ${p.value}${p.secondaryValue !== undefined ? ` / ${p.secondaryValue}` : ''}`}
              </title>
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

        {/* Hover vertical line + tooltip */}
        {hoveredIdx !== null && points[hoveredIdx] && (
          <g>
            <line
              x1={points[hoveredIdx].x}
              x2={points[hoveredIdx].x}
              y1={padding.top}
              y2={padding.top + chartHeight}
              stroke="currentColor"
              className="text-muted-foreground"
              strokeWidth="0.5"
              strokeDasharray="3 3"
            />
            {/* Tooltip background */}
            <rect
              x={points[hoveredIdx].x - 40}
              y={Math.max(points[hoveredIdx].y - 32, 2)}
              width="80"
              height="22"
              rx="4"
              fill="var(--foreground)"
              opacity="0.9"
            />
            <text
              x={points[hoveredIdx].x}
              y={Math.max(points[hoveredIdx].y - 17, 17)}
              textAnchor="middle"
              fill="var(--background)"
              fontSize="11"
              fontWeight="600"
            >
              {points[hoveredIdx].value}
              {points[hoveredIdx].secondaryValue !== undefined
                ? ` / ${points[hoveredIdx].secondaryValue}`
                : ''}
            </text>
          </g>
        )}

        {/* X-axis labels */}
        {showLabels &&
          points.map((p, i) => (
            <text
              key={i}
              x={p.x}
              y={height - 6}
              textAnchor="middle"
              className="fill-muted-foreground"
              fontSize="9"
            >
              {p.label}
            </text>
          ))}
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
  // thresholds sorted ascending by value; pick the first one where value < threshold.value
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
