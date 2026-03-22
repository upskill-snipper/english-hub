'use client'

import { cn } from '@/lib/utils'

interface ExamReadinessGaugeProps {
  percentage: number
  className?: string
}

function getReadinessColor(pct: number): string {
  if (pct >= 75) return 'text-green-400'
  if (pct >= 50) return 'text-amber-400'
  if (pct >= 25) return 'text-orange-400'
  return 'text-red-400'
}

function getReadinessTrackColor(pct: number): string {
  if (pct >= 75) return 'stroke-green-500'
  if (pct >= 50) return 'stroke-amber-500'
  if (pct >= 25) return 'stroke-orange-500'
  return 'stroke-red-500'
}

function getReadinessLabel(pct: number): string {
  if (pct >= 80) return 'Exam Ready'
  if (pct >= 60) return 'Good Progress'
  if (pct >= 40) return 'Building Up'
  if (pct >= 20) return 'Getting Started'
  return 'Just Starting'
}

export function ExamReadinessGauge({ percentage, className }: ExamReadinessGaugeProps) {
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
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
        >
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
            className={cn('transition-all duration-700 ease-out', getReadinessTrackColor(clampedPct))}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn('text-2xl font-bold tabular-nums', getReadinessColor(clampedPct))}>
            {clampedPct}%
          </span>
        </div>
      </div>
      <span className={cn('text-xs font-medium', getReadinessColor(clampedPct))}>
        {getReadinessLabel(clampedPct)}
      </span>
    </div>
  )
}
