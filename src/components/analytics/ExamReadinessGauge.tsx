'use client'

import { cn } from '@/lib/utils'
import { percentageToGCSEGrade, gcseGradeColor } from '@/lib/grades'
import { useT } from '@/lib/i18n/use-t'
import { RadialScore } from '@/components/dataviz'

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

  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      {/* Cinematic radial gauge — RAG-coloured, animated. Keeps the
          previous 120px footprint so consumers' layout is unchanged. */}
      <div className="relative" style={{ width: 120, height: 120 }}>
        <RadialScore value={clampedPct} size={120} />
        {/* Overlay the GCSE grade + % (the bare RadialScore only shows the
            rounded number); positioned over its inner hub. */}
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
