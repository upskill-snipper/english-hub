'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import type { DailyActivity } from '@/lib/engagement-metrics'

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface EngagementHeatmapProps {
  studentName: string
  data: DailyActivity[] // 12 weeks of daily activity
  metric?: 'time' | 'modules' // which metric drives colour intensity
  className?: string
}

/* ── Colour Scale ──────────────────────────────────────────────────────────── */

const INTENSITY_CLASSES = [
  'bg-muted', // 0 - no activity
  'bg-emerald-200 dark:bg-emerald-900', // 1
  'bg-emerald-400 dark:bg-emerald-700', // 2
  'bg-emerald-500 dark:bg-emerald-500', // 3
  'bg-emerald-700 dark:bg-emerald-400', // 4 - highest
] as const

function getIntensityLevel(value: number, maxValue: number): number {
  if (value === 0 || maxValue === 0) return 0
  const ratio = value / maxValue
  if (ratio <= 0.25) return 1
  if (ratio <= 0.5) return 2
  if (ratio <= 0.75) return 3
  return 4
}

/* ── Helpers ───────────────────────────────────────────────────────────────── */

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  const mins = Math.round(seconds / 60)
  if (mins < 60) return `${mins}m`
  const hrs = Math.floor(mins / 60)
  const remMins = mins % 60
  return remMins > 0 ? `${hrs}h ${remMins}m` : `${hrs}h`
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
}

/* ── Component ─────────────────────────────────────────────────────────────── */

export function EngagementHeatmap({
  studentName,
  data,
  metric = 'time',
  className,
}: EngagementHeatmapProps) {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null)

  // Organise data into weeks (columns) × days (rows)
  // Each column = 1 week, rows = Mon(0)..Sun(6)
  const { grid, weekLabels, maxValue } = useMemo(() => {
    // Determine the metric value accessor
    const getValue = (d: DailyActivity) =>
      metric === 'time' ? d.timeSpentSeconds : d.modulesCompleted

    const max = Math.max(...data.map(getValue), 1)

    // Group into weeks (7-day chunks)
    const weeks: DailyActivity[][] = []
    for (let i = 0; i < data.length; i += 7) {
      weeks.push(data.slice(i, i + 7))
    }

    // Build month labels for each week column
    const labels: string[] = weeks.map((week) => {
      const firstDay = week[0]
      if (!firstDay) return ''
      const d = new Date(firstDay.date)
      // Show month label if this week contains the 1st of the month
      // or is the first week
      const hasFirst = week.some((day) => {
        const dt = new Date(day.date)
        return dt.getDate() <= 7
      })
      return hasFirst ? d.toLocaleDateString('en-GB', { month: 'short' }) : ''
    })

    return { grid: weeks, weekLabels: labels, maxValue: max }
  }, [data, metric])

  const getValue = (d: DailyActivity) =>
    metric === 'time' ? d.timeSpentSeconds : d.modulesCompleted

  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardContent>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-medium text-foreground">{studentName}</h4>
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <span>Less</span>
            {INTENSITY_CLASSES.map((cls, i) => (
              <div key={i} className={cn('h-2.5 w-2.5 rounded-[2px]', cls)} />
            ))}
            <span>More</span>
          </div>
        </div>

        {/* Grid */}
        <div className="flex gap-[2px]">
          {/* Day labels column */}
          <div className="flex flex-col gap-[2px] mr-1 pt-4">
            {DAY_LABELS.map((label, i) => (
              <div
                key={label}
                className="h-[13px] flex items-center text-[9px] text-muted-foreground leading-none"
              >
                {i % 2 === 0 ? label : ''}
              </div>
            ))}
          </div>

          {/* Week columns */}
          <div className="flex gap-[2px] flex-1">
            {grid.map((week, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-[2px]">
                {/* Month label */}
                <div className="h-3 text-[9px] text-muted-foreground leading-none truncate">
                  {weekLabels[weekIdx]}
                </div>

                {/* Day cells */}
                {week.map((day, dayIdx) => {
                  const globalIdx = weekIdx * 7 + dayIdx
                  const value = getValue(day)
                  const level = getIntensityLevel(value, maxValue)

                  return (
                    <TooltipProvider key={day.date} delayDuration={100}>
                      <Tooltip open={hoveredCell === globalIdx}>
                        <TooltipTrigger>
                          <div
                            className={cn(
                              'h-[13px] w-[13px] rounded-[2px] transition-colors duration-100 cursor-default',
                              INTENSITY_CLASSES[level],
                              hoveredCell === globalIdx && 'ring-1 ring-foreground/30',
                            )}
                            onMouseEnter={() => setHoveredCell(globalIdx)}
                            onMouseLeave={() => setHoveredCell(null)}
                          />
                        </TooltipTrigger>
                        <TooltipContent side="top" className="text-xs">
                          <p className="font-medium">{formatDate(day.date)}</p>
                          <p className="text-muted-foreground">
                            Time spent: {formatTime(day.timeSpentSeconds)}
                          </p>
                          <p className="text-muted-foreground">
                            Modules completed: {day.modulesCompleted}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
