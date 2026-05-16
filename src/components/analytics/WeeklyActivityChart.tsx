'use client'

import { useMemo } from 'react'
import { AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { cn } from '@/lib/utils'
import type { WeeklyDay } from '@/hooks/useAnalytics'
import { useT } from '@/lib/i18n/use-t'
import { ChartFrame, GlassTooltip, SERIES, GRID, AXIS, GRAD } from '@/components/dataviz'

interface WeeklyActivityChartProps {
  data: WeeklyDay[]
  className?: string
}

export function WeeklyActivityChart({ data, className }: WeeklyActivityChartProps) {
  const t = useT()
  const totalMinutes = data.reduce((s, d) => s + d.studyMinutes, 0)
  const totalQuestions = data.reduce((s, d) => s + d.questionsAnswered, 0)

  const studyLabel = t('analytics.weekly.study_time')
  const questionsLabel = t('analytics.weekly.questions')

  // Map onto the premium "cinematic glass" trend layer. Study time is the
  // primary filled area; questions answered is an overlaid line so both
  // series stay visible (the old bespoke chart used a bar + dot overlay).
  const chartData = useMemo(
    () =>
      data.map((d) => ({
        label: d.label,
        date: d.date,
        [studyLabel]: d.studyMinutes,
        [questionsLabel]: d.questionsAnswered,
      })),
    [data, studyLabel, questionsLabel],
  )

  return (
    <div className={cn('w-full', className)}>
      {/* Legend */}
      <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: SERIES[0] }} />
          {studyLabel} ({totalMinutes}
          {t('analytics.unit.minute_short')})
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: SERIES[1] }} />
          {questionsLabel} ({totalQuestions})
        </div>
      </div>

      {/* Chart */}
      <ChartFrame height={180}>
        <AreaChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
          <defs>
            <linearGradient id={GRAD.area} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={SERIES[0]} stopOpacity={0.45} />
              <stop offset="100%" stopColor={SERIES[0]} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid {...GRID} />
          <XAxis dataKey="label" {...AXIS} />
          <YAxis {...AXIS} width={36} allowDecimals={false} />
          <Tooltip content={<GlassTooltip />} cursor={{ stroke: 'hsl(var(--border))' }} />
          <Area
            type="monotone"
            dataKey={studyLabel}
            stroke={SERIES[0]}
            strokeWidth={2.5}
            fill={`url(#${GRAD.area})`}
            isAnimationActive
            animationDuration={900}
            dot={{ r: 3, fill: SERIES[0], strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey={questionsLabel}
            stroke={SERIES[1]}
            strokeWidth={2}
            dot={{ r: 3, fill: SERIES[1], strokeWidth: 0 }}
            activeDot={{ r: 5 }}
            isAnimationActive
            animationDuration={900}
          />
        </AreaChart>
      </ChartFrame>
    </div>
  )
}
