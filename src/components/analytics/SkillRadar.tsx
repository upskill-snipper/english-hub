'use client'

import { cn } from '@/lib/utils'
import { percentageToGCSEGrade, gcseGradeColor } from '@/lib/grades'
import { useT } from '@/lib/i18n/use-t'
import type { SkillScore } from '@/hooks/useAnalytics'

interface SkillRadarProps {
  skills: SkillScore[]
  className?: string
}

function getScoreColor(percentage: number): string {
  if (percentage >= 70) return 'bg-green-500'
  if (percentage >= 50) return 'bg-amber-500'
  if (percentage >= 25) return 'bg-orange-500'
  return 'bg-red-500'
}

function getScoreTextColor(percentage: number): string {
  if (percentage >= 70) return 'text-green-400'
  if (percentage >= 50) return 'text-clay-600'
  if (percentage >= 25) return 'text-clay-600'
  return 'text-red-400'
}

function scoreLabelKey(percentage: number): string {
  if (percentage >= 80) return 'analytics.skill.label.excellent'
  if (percentage >= 60) return 'analytics.skill.label.good'
  if (percentage >= 40) return 'analytics.skill.label.developing'
  if (percentage > 0) return 'analytics.skill.label.needs_work'
  return 'analytics.skill.label.no_data'
}

export function SkillRadar({ skills, className }: SkillRadarProps) {
  const t = useT()
  return (
    <div className={cn('grid gap-4', className)}>
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">{skill.name}</span>
            <div className="flex items-center gap-2">
              <span className={cn('text-xs font-medium', getScoreTextColor(skill.percentage))}>
                {t(scoreLabelKey(skill.percentage))}
              </span>
              {skill.total > 0 && (
                <span
                  className={cn(
                    'text-xs tabular-nums font-semibold',
                    gcseGradeColor(percentageToGCSEGrade(skill.percentage)),
                  )}
                >
                  {t('analytics.grade.label')} {percentageToGCSEGrade(skill.percentage)}
                </span>
              )}
            </div>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-500 ease-out',
                skill.total > 0 ? getScoreColor(skill.percentage) : 'bg-muted-foreground/20',
              )}
              style={{ width: skill.total > 0 ? `${Math.max(skill.percentage, 2)}%` : '0%' }}
            />
          </div>
          <p className="text-[11px] text-muted-foreground">
            {skill.total > 0
              ? `${t('analytics.skill.based_on')} ${skill.total} ${t('analytics.unit.responses')}`
              : t('analytics.skill.no_data_yet_hint')}
          </p>
        </div>
      ))}
    </div>
  )
}
