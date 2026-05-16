'use client'

import { useMemo } from 'react'
import { cn } from '@/lib/utils'
import { percentageToGCSEGrade, gcseGradeColor } from '@/lib/grades'
import { useT } from '@/lib/i18n/use-t'
import type { SkillScore } from '@/hooks/useAnalytics'
import { SkillRadar as SkillRadarChart, SERIES } from '@/components/dataviz'

interface SkillRadarProps {
  skills: SkillScore[]
  className?: string
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

  // Map the incoming SkillScore[] to the dataviz radar's generic row shape.
  // Only skills with data plot meaningfully; an all-zero radar is degenerate
  // (a single point), so we fall back to the detail list alone in that case.
  const radarData = useMemo(
    () => skills.map((s) => ({ skill: s.name, value: Math.round(s.percentage) })),
    [skills],
  )
  const hasData = useMemo(() => skills.some((s) => s.total > 0), [skills])
  // Recharts radar needs >= 3 axes to render an area rather than a line/point.
  const showRadar = hasData && skills.length >= 3

  return (
    <div className={cn('grid gap-5', className)}>
      {showRadar && (
        <SkillRadarChart
          data={radarData}
          angleKey="skill"
          valueKey="value"
          height={260}
          color={SERIES[1]}
        />
      )}
      <div className="grid gap-4">
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
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: skill.total > 0 ? `${Math.max(skill.percentage, 2)}%` : '0%',
                  background:
                    skill.total > 0
                      ? skill.percentage >= 70
                        ? 'hsl(152 60% 45%)'
                        : skill.percentage >= 50
                          ? 'hsl(35 85% 55%)'
                          : 'hsl(0 72% 58%)'
                      : 'hsl(var(--muted-foreground) / 0.2)',
                }}
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
    </div>
  )
}
