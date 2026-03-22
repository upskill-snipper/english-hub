'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { WeakArea } from '@/lib/types'

/* ── Props ─────────────────────────────────────────────────────────────────── */

interface WeakAreaHeatMapProps {
  weakAreas: WeakArea[]
  onCellClick?: (area: WeakArea) => void
  className?: string
}

/* ── Color helpers ─────────────────────────────────────────────────────────── */

function scoreToCellColor(score: number): string {
  if (score < 40)
    return 'bg-red-500/25 border-red-500/40 hover:bg-red-500/35'
  if (score < 55)
    return 'bg-orange-500/20 border-orange-500/35 hover:bg-orange-500/30'
  if (score < 70)
    return 'bg-amber-500/15 border-amber-500/30 hover:bg-amber-500/25'
  return 'bg-green-500/15 border-green-500/30 hover:bg-green-500/25'
}

function scoreToTextColor(score: number): string {
  if (score < 40) return 'text-red-400'
  if (score < 55) return 'text-orange-400'
  if (score < 70) return 'text-amber-400'
  return 'text-green-400'
}

function severityBadge(severity: 'critical' | 'warning' | 'minor') {
  switch (severity) {
    case 'critical':
      return 'bg-red-500/10 text-red-400 border-red-500/20'
    case 'warning':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    case 'minor':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  }
}

/* ── Component ─────────────────────────────────────────────────────────────── */

export function WeakAreaHeatMap({
  weakAreas,
  onCellClick,
  className,
}: WeakAreaHeatMapProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Sort by severity (critical first) then by score (lowest first)
  const sorted = [...weakAreas].sort((a, b) => {
    const severityOrder = { critical: 0, warning: 1, minor: 2 }
    const severityDiff = severityOrder[a.severity] - severityOrder[b.severity]
    if (severityDiff !== 0) return severityDiff
    return a.avg_score - b.avg_score
  })

  if (sorted.length === 0) {
    return (
      <div
        className={cn(
          'flex items-center justify-center py-12 text-muted-foreground text-sm',
          className,
        )}
      >
        No weak areas identified. All students are performing well.
      </div>
    )
  }

  return (
    <div className={className}>
      {/* Heat map grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {sorted.map((area, i) => (
          <div
            key={`${area.course_id}-${area.module_id ?? i}`}
            className={cn(
              'relative rounded-lg border p-4 transition-all duration-200 cursor-pointer',
              scoreToCellColor(area.avg_score),
              hoveredIndex === i && 'ring-1 ring-foreground/20 scale-[1.02]',
            )}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => onCellClick?.(area)}
          >
            {/* Tooltip on hover */}
            {hoveredIndex === i && (
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 rounded-md bg-foreground px-3 py-1.5 text-xs text-background whitespace-nowrap shadow-lg">
                <p className="font-medium">{area.module_name ?? area.course_name}</p>
                <p>
                  Avg: {Math.round(area.avg_score)}% &middot;{' '}
                  {area.students_below_threshold} student
                  {area.students_below_threshold !== 1 ? 's' : ''} struggling
                </p>
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-foreground" />
              </div>
            )}

            {/* Score badge */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <span
                className={cn(
                  'text-2xl font-bold tabular-nums leading-none',
                  scoreToTextColor(area.avg_score),
                )}
              >
                {Math.round(area.avg_score)}%
              </span>
              <span
                className={cn(
                  'inline-flex h-5 items-center rounded-full border px-2 text-[10px] font-semibold uppercase shrink-0',
                  severityBadge(area.severity),
                )}
              >
                {area.severity}
              </span>
            </div>

            {/* Module / course name */}
            <p className="font-medium text-foreground text-sm truncate leading-snug">
              {area.module_name ?? area.course_name}
            </p>
            {area.module_name && (
              <p className="text-xs text-muted-foreground truncate mt-0.5">
                {area.course_name}
              </p>
            )}

            {/* Students struggling count */}
            <p className="mt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                {area.students_below_threshold}
              </span>{' '}
              student{area.students_below_threshold !== 1 ? 's' : ''} below
              threshold
            </p>
          </div>
        ))}
      </div>

      {/* Legend bar */}
      <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
        <span className="mr-2">Score scale:</span>
        <div className="flex items-center gap-1">
          <div className="h-3 w-8 rounded-sm bg-red-500/25" />
          <span>&lt;40%</span>
        </div>
        <div className="flex items-center gap-1 ml-2">
          <div className="h-3 w-8 rounded-sm bg-orange-500/20" />
          <span>40-55%</span>
        </div>
        <div className="flex items-center gap-1 ml-2">
          <div className="h-3 w-8 rounded-sm bg-amber-500/15" />
          <span>55-70%</span>
        </div>
        <div className="flex items-center gap-1 ml-2">
          <div className="h-3 w-8 rounded-sm bg-green-500/15" />
          <span>&gt;70%</span>
        </div>
      </div>
    </div>
  )
}
