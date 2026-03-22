'use client'

import { cn } from '@/lib/utils'
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
  if (percentage >= 50) return 'text-amber-400'
  if (percentage >= 25) return 'text-orange-400'
  return 'text-red-400'
}

function getScoreLabel(percentage: number): string {
  if (percentage >= 80) return 'Excellent'
  if (percentage >= 60) return 'Good'
  if (percentage >= 40) return 'Developing'
  if (percentage > 0) return 'Needs Work'
  return 'No Data'
}

export function SkillRadar({ skills, className }: SkillRadarProps) {
  return (
    <div className={cn('grid gap-4', className)}>
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">{skill.name}</span>
            <div className="flex items-center gap-2">
              <span className={cn('text-xs font-medium', getScoreTextColor(skill.percentage))}>
                {getScoreLabel(skill.percentage)}
              </span>
              {skill.total > 0 && (
                <span className="text-xs tabular-nums text-muted-foreground">
                  {skill.percentage}%
                </span>
              )}
            </div>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-500 ease-out',
                skill.total > 0 ? getScoreColor(skill.percentage) : 'bg-muted-foreground/20'
              )}
              style={{ width: skill.total > 0 ? `${Math.max(skill.percentage, 2)}%` : '0%' }}
            />
          </div>
          <p className="text-[11px] text-muted-foreground">
            {skill.total > 0
              ? `Based on ${skill.total} response${skill.total === 1 ? '' : 's'}`
              : 'No data yet - complete practice questions to see your score'}
          </p>
        </div>
      ))}
    </div>
  )
}
