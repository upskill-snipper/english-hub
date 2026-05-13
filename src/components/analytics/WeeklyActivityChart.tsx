'use client'

import { cn } from '@/lib/utils'
import type { WeeklyDay } from '@/hooks/useAnalytics'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useT } from '@/lib/i18n/use-t'

interface WeeklyActivityChartProps {
  data: WeeklyDay[]
  className?: string
}

export function WeeklyActivityChart({ data, className }: WeeklyActivityChartProps) {
  const t = useT()
  const maxMinutes = Math.max(...data.map((d) => d.studyMinutes), 1)
  const maxQuestions = Math.max(...data.map((d) => d.questionsAnswered), 1)
  const totalMinutes = data.reduce((s, d) => s + d.studyMinutes, 0)
  const totalQuestions = data.reduce((s, d) => s + d.questionsAnswered, 0)

  return (
    <div className={cn('w-full', className)}>
      {/* Legend */}
      <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-primary" />
          {t('analytics.weekly.study_time')} ({totalMinutes}
          {t('analytics.unit.minute_short')})
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-blue-400" />
          {t('analytics.weekly.questions')} ({totalQuestions})
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end gap-2" style={{ height: 160 }}>
        {data.map((day) => {
          const barHeight = maxMinutes > 0 ? (day.studyMinutes / maxMinutes) * 100 : 0
          const lineHeight = maxQuestions > 0 ? (day.questionsAnswered / maxQuestions) * 100 : 0

          return (
            <Tooltip key={day.date}>
              <TooltipTrigger className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="relative flex w-full items-end justify-center"
                  style={{ height: 130 }}
                >
                  {/* Study time bar */}
                  <div
                    className="w-full max-w-8 rounded-t-md bg-primary/80 transition-all duration-300"
                    style={{
                      height: `${Math.max(barHeight, 2)}%`,
                      minHeight: day.studyMinutes > 0 ? 4 : 2,
                    }}
                  />
                  {/* Questions dot overlay */}
                  {day.questionsAnswered > 0 && (
                    <div
                      className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 ring-2 ring-card"
                      style={{ bottom: `${Math.max(lineHeight, 4)}%` }}
                    />
                  )}
                </div>
                <span className="text-[10px] text-muted-foreground">{day.label}</span>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p className="text-xs font-medium">{day.date}</p>
                <p className="text-xs text-muted-foreground">
                  {day.studyMinutes}
                  {t('analytics.unit.minute_short')} {t('analytics.weekly.study_time')}
                </p>
                <p className="text-xs text-muted-foreground">
                  {day.questionsAnswered} {t('analytics.weekly.questions').toLowerCase()}
                </p>
              </TooltipContent>
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}
