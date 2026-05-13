'use client'

import { cn } from '@/lib/utils'
import { percentageToGCSEGrade, gcseGradeColor } from '@/lib/grades'
import { useT } from '@/lib/i18n/use-t'

interface ExamReadinessGaugeProps {
  percentage: number
  className?: string
}

function getReadinessColor(pct: number): string {
  if (pct >= 75) return 'text-green-400'
  if (pct >= 50) return 'text-clay-600'
  if (pct >= 25) return 'text-clay-600'
  return 'text-red-400'
}

function getReadinessTrackColor(pct: number): string {
  if (pct >= 75) return 'stroke-green-500'
  if (pct >= 50) return 'stroke-amber-500'
  if (pct >= 25) return 'stroke-orange-500'
  return 'stroke-red-500'
}

function readinessLabelKey(pct: number): string {
  if (pct >= 80) return 'analytics.readiness.exam_ready'
  if (pct >= 60) return 'analytics.readiness.good_progress'
  if (pct >= 40) return 'analytics.readiness.building_up'
  if (pct >= 20) return 'analytics.readiness.getting_started'
  return 'analytics.readiness.just_starting'
}

export function ExamReadinessGauge({ percentage, className }: ExamReadinessGaugeProps) {
  const t = useT()
  const clampedPct = Math.min(Math.max(percentage, 0), 100)

  // SVG circle math
  const size = 120
  const strokeWidth = 10
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (clampedPct / 100) * circumference

  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            className="stroke-muted"
            strokeWidth={strokeWidth}
          />
          {/* Progress arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            className={cn(
              'transition-all duration-700 ease-out',
              getReadinessTrackColor(clampedPct),
            )}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className={cn('text-lg font-bold', gcseGradeColor(percentageToGCSEGrade(clampedPct)))}
          >
            {t('analytics.grade.label')} {percentageToGCSEGrade(clampedPct)}
          </span>
          <span className="text-[10px] tabular-nums text-muted-foreground">{clampedPct}%</span>
        </div>
      </div>
      <span className={cn('text-xs font-medium', getReadinessColor(clampedPct))}>
        {t(readinessLabelKey(clampedPct))}
      </span>
    </div>
  )
}
