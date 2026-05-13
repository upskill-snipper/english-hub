'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useT } from '@/lib/i18n/use-t'
import { GRADE_LEVELS } from './grade-data'

/* ─── Grade Tabs component ──────────────────────────────────── */

// Maps the EN descriptor strings on the GradeLevel records to dictionary keys.
const DESCRIPTOR_KEY: Record<string, string> = {
  Exceptional: 'model_answers.grade.descriptor.exceptional',
  Strong: 'model_answers.grade.descriptor.strong',
  Solid: 'model_answers.grade.descriptor.solid',
  Developing: 'model_answers.grade.descriptor.developing',
}

interface GradeTabsProps {
  /** Which grade levels to show (defaults to all 4) */
  levels?: number[]
  /** The content for each grade tab, keyed by grade number */
  children: Record<number, React.ReactNode>
  /** Default grade to show */
  defaultGrade?: number
}

export function GradeTabs({ levels, children, defaultGrade }: GradeTabsProps) {
  const t = useT()
  const activeLevels = levels ? GRADE_LEVELS.filter((l) => levels.includes(l.grade)) : GRADE_LEVELS

  const defaultValue = String(defaultGrade ?? activeLevels[0]?.grade ?? 9)

  const [value, setValue] = useState(defaultValue)

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabsList className="mb-6 w-full flex-wrap">
        {activeLevels.map((level) => {
          const label = t(`model_answers.grade.label.${level.grade}`)
          const descriptorKey = DESCRIPTOR_KEY[level.descriptor]
          const descriptor = descriptorKey ? t(descriptorKey) : level.descriptor
          return (
            <TabsTrigger key={level.grade} value={String(level.grade)} className="flex-1 gap-1.5">
              <span className={`inline-block h-2.5 w-2.5 rounded-full ${level.bgColor}`} />
              {label}
              <span className="hidden sm:inline text-xs opacity-60">({descriptor})</span>
            </TabsTrigger>
          )
        })}
      </TabsList>
      {activeLevels.map((level) => {
        const label = t(`model_answers.grade.label.${level.grade}`)
        return (
          <TabsContent key={level.grade} value={String(level.grade)}>
            {children[level.grade] ?? (
              <p className="text-muted-foreground italic py-8 text-center">
                {t('model_answers.tabs.empty')} {label} {t('model_answers.tabs.empty_suffix')}
              </p>
            )}
          </TabsContent>
        )
      })}
    </Tabs>
  )
}
