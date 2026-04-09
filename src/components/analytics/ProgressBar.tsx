'use client'

import { cn } from '@/lib/utils'
import { percentageToGCSEGrade, gcseGradeColor } from '@/lib/grades'

interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  sublabel?: string
  showPercentage?: boolean
  /** When true, display as GCSE grade instead of percentage (e.g. "Grade 7" not "72%") */
  showAsGrade?: boolean
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

const sizeClasses = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
}

function getColorClass(percentage: number): string {
  if (percentage >= 80) return 'bg-green-500'
  if (percentage >= 50) return 'bg-amber-500'
  if (percentage >= 25) return 'bg-orange-500'
  return 'bg-red-500'
}

export function ProgressBar({
  value,
  max = 100,
  label,
  sublabel,
  showPercentage = true,
  showAsGrade = false,
  size = 'md',
  color,
  className,
}: ProgressBarProps) {
  const percentage = max > 0 ? Math.min(Math.round((value / max) * 100), 100) : 0
  const barColor = color ?? getColorClass(percentage)
  const grade = percentageToGCSEGrade(percentage)

  return (
    <div className={cn('w-full', className)}>
      {(label || showPercentage) && (
        <div className="mb-1.5 flex items-center justify-between">
          <div className="min-w-0">
            {label && (
              <span className="truncate text-sm font-medium text-foreground">{label}</span>
            )}
            {sublabel && (
              <span className="ml-2 text-xs text-muted-foreground">{sublabel}</span>
            )}
          </div>
          {showPercentage && (
            <span className={cn('ml-2 shrink-0 text-xs tabular-nums', showAsGrade ? gcseGradeColor(grade) + ' font-semibold' : 'text-muted-foreground')}>
              {showAsGrade ? `Grade ${grade}` : `${percentage}%`}
            </span>
          )}
        </div>
      )}
      <div
        className={cn(
          'w-full overflow-hidden rounded-full bg-muted',
          sizeClasses[size]
        )}
      >
        <div
          className={cn('h-full rounded-full transition-all duration-500 ease-out', barColor)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
