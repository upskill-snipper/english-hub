'use client'

import { useMemo, useState, memo, useCallback } from 'react'
import { cn } from '@/lib/utils'

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

/* ── Geometry helpers ──────────────────────────────────────────────────────── */

function polarToCart(
  cx: number,
  cy: number,
  radius: number,
  angleDeg: number,
): { x: number; y: number } {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad),
  }
}

/* ── Component ─────────────────────────────────────────────────────────────── */

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
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [hoveredDataset, setHoveredDataset] = useState<string | null>(null)

  const cx = size / 2
  const cy = size / 2
  const radius = size / 2 - 50 // leave room for labels
  const angleStep = 360 / skills.length

  /* ── Grid rings (concentric polygons) ───────────────────────────────────── */
  const gridRings = useMemo(() => {
    return Array.from({ length: rings }, (_, ri) => {
      const r = ((ri + 1) / rings) * radius
      const points = skills.map((_, si) => {
        const p = polarToCart(cx, cy, r, si * angleStep)
        return `${p.x},${p.y}`
      })
      return { r, points: points.join(' '), value: Math.round(((ri + 1) / rings) * maxValue) }
    })
  }, [rings, radius, skills, cx, cy, angleStep, maxValue])

  /* ── Axis lines ──────────────────────────────────────────────────────────── */
  const axes = useMemo(() => {
    return skills.map((skill, i) => {
      const end = polarToCart(cx, cy, radius, i * angleStep)
      const labelPos = polarToCart(cx, cy, radius + 22, i * angleStep)
      return { skill, end, labelPos, angle: i * angleStep }
    })
  }, [skills, cx, cy, radius, angleStep])

  /* ── Dataset polygons ────────────────────────────────────────────────────── */
  const dataPolygons = useMemo(() => {
    return datasets.map((ds) => {
      const points = skills.map((skill, i) => {
        const value = ds.values[skill] ?? 0
        const r = (Math.min(value, maxValue) / maxValue) * radius
        return polarToCart(cx, cy, r, i * angleStep)
      })
      const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z'
      return { ...ds, points, path }
    })
  }, [datasets, skills, cx, cy, radius, angleStep, maxValue])

  /* ── Skill dots for hovered skill ────────────────────────────────────────── */
  const hoveredSkillIdx = hoveredSkill ? skills.indexOf(hoveredSkill) : -1

  const handleAxisEnter = useCallback(
    (skill: string) => {
      if (interactive && !printFriendly) setHoveredSkill(skill)
    },
    [interactive, printFriendly],
  )

  if (datasets.length === 0) {
    return (
      <div
        className={cn(
          'flex items-center justify-center text-sm text-muted-foreground',
          className,
        )}
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
          <button
            key={ds.label}
            type="button"
            className={cn(
              'flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors',
              hoveredDataset === ds.label ? 'bg-accent' : 'hover:bg-accent/50',
              printFriendly && 'pointer-events-none',
            )}
            onMouseEnter={() => !printFriendly && setHoveredDataset(ds.label)}
            onMouseLeave={() => setHoveredDataset(null)}
          >
            <span
              className="inline-block h-2 w-4 rounded-sm"
              style={{
                backgroundColor: ds.color,
                opacity: hoveredDataset && hoveredDataset !== ds.label ? 0.3 : 1,
              }}
            />
            <span className="text-muted-foreground">{ds.label}</span>
          </button>
        ))}
      </div>

      {/* SVG Radar */}
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="mx-auto w-full"
        style={{ maxWidth: size }}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Radar chart"
        onMouseLeave={() => {
          setHoveredSkill(null)
          setHoveredDataset(null)
        }}
      >
        {/* Grid rings */}
        {gridRings.map((ring, ri) => (
          <g key={ri}>
            <polygon
              points={ring.points}
              fill="none"
              stroke="currentColor"
              className="text-border"
              strokeWidth={ri === gridRings.length - 1 ? '1' : '0.5'}
              strokeDasharray={ri === gridRings.length - 1 ? undefined : '3 3'}
            />
            {/* Ring value label */}
            <text
              x={cx + 4}
              y={cy - ring.r + 12}
              fontSize="8"
              className="fill-muted-foreground/50"
            >
              {ring.value}
            </text>
          </g>
        ))}

        {/* Axis lines + labels */}
        {axes.map((axis) => (
          <g
            key={axis.skill}
            onMouseEnter={() => handleAxisEnter(axis.skill)}
            className="cursor-default"
          >
            <line
              x1={cx}
              y1={cy}
              x2={axis.end.x}
              y2={axis.end.y}
              stroke="currentColor"
              className="text-border"
              strokeWidth="0.5"
            />
            {/* Invisible wider hit area */}
            <line
              x1={cx}
              y1={cy}
              x2={axis.end.x}
              y2={axis.end.y}
              stroke="transparent"
              strokeWidth="20"
            />
            <text
              x={axis.labelPos.x}
              y={axis.labelPos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fontWeight={hoveredSkill === axis.skill ? '700' : '500'}
              className={cn(
                'transition-all duration-150',
                hoveredSkill === axis.skill ? 'fill-foreground' : 'fill-muted-foreground',
              )}
            >
              {axis.skill}
            </text>
          </g>
        ))}

        {/* Data polygons */}
        {dataPolygons.map((dp) => {
          const dimmed = hoveredDataset && hoveredDataset !== dp.label
          return (
            <g
              key={dp.label}
              style={{
                opacity: dimmed ? 0.15 : 1,
                transition: 'opacity 200ms',
              }}
            >
              <path
                d={dp.path}
                fill={dp.color}
                fillOpacity={dp.fillOpacity ?? 0.15}
                stroke={dp.color}
                strokeWidth="2"
                strokeLinejoin="round"
                strokeDasharray={dp.dashArray}
              />
              {/* Dots at each vertex */}
              {dp.points.map((p, i) => (
                <circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r={hoveredSkillIdx === i ? 5 : 3}
                  fill={dp.color}
                  stroke="var(--background)"
                  strokeWidth="2"
                  className="transition-all duration-150"
                />
              ))}
            </g>
          )
        })}

        {/* Hovered skill tooltip */}
        {hoveredSkill && hoveredSkillIdx >= 0 && !printFriendly && (
          <g>
            {(() => {
              const tipX = axes[hoveredSkillIdx].labelPos.x
              const tipY = axes[hoveredSkillIdx].labelPos.y + 14
              const tipWidth = 130
              const tipHeight = 14 + datasets.length * 16 + 6
              // Clamp position
              const adjX = Math.min(Math.max(tipX - tipWidth / 2, 2), size - tipWidth - 2)
              const adjY = Math.min(tipY, size - tipHeight - 2)
              return (
                <>
                  <rect
                    x={adjX}
                    y={adjY}
                    width={tipWidth}
                    height={tipHeight}
                    rx="6"
                    fill="var(--foreground)"
                    opacity="0.92"
                  />
                  <text
                    x={adjX + 8}
                    y={adjY + 12}
                    fontSize="10"
                    fill="var(--background)"
                    fontWeight="700"
                  >
                    {hoveredSkill}
                  </text>
                  {datasets.map((ds, di) => (
                    <g key={ds.label}>
                      <circle
                        cx={adjX + 12}
                        cy={adjY + 24 + di * 16}
                        r="3"
                        fill={ds.color}
                      />
                      <text
                        x={adjX + 20}
                        y={adjY + 28 + di * 16}
                        fontSize="9"
                        fill="var(--background)"
                      >
                        {ds.label}: {Math.round(ds.values[hoveredSkill] ?? 0)}%
                      </text>
                    </g>
                  ))}
                </>
              )
            })()}
          </g>
        )}
      </svg>

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
                    <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ds.color }} />
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
                <tr
                  key={skill}
                  className={cn(
                    'border-b last:border-b-0 transition-colors',
                    hoveredSkill === skill && 'bg-muted/30',
                  )}
                  onMouseEnter={() => !printFriendly && setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
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
                          diff > 0 ? 'text-green-400' : diff < 0 ? 'text-red-400' : 'text-muted-foreground',
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
