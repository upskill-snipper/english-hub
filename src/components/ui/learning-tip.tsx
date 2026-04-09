'use client'

import { useState, useEffect, useCallback } from 'react'
import { Lightbulb, Brain, BookOpen, Target, Sparkles } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip'
import {
  type TipCategory,
  type LearningTip as LearningTipData,
  getTipsByCategory,
} from '@/data/learning-tips'
import { cn } from '@/lib/utils'

/* ── Icon map ──────────────────────────────────────────────────────────── */

const CATEGORY_ICONS: Record<TipCategory, typeof Lightbulb> = {
  study: Lightbulb,
  exam: Target,
  grade: Sparkles,
  motivation: Brain,
  resource: BookOpen,
  progress: Sparkles,
  course: BookOpen,
  practice: Target,
}

const CATEGORY_LABELS: Record<TipCategory, string> = {
  study: 'Study Tip',
  exam: 'Exam Tip',
  grade: 'Grade Insight',
  motivation: 'Motivation',
  resource: 'Resource Tip',
  progress: 'Progress Insight',
  course: 'Course Tip',
  practice: 'Practice Tip',
}

/* ── Props ──────────────────────────────────────────────────────────────── */

interface LearningTipProps {
  /** Which tip categories to draw from */
  categories?: TipCategory[]
  /** Where to position the tooltip */
  side?: 'top' | 'bottom' | 'left' | 'right'
  /** Size variant */
  size?: 'sm' | 'md'
  /** Additional class names for the trigger wrapper */
  className?: string
  /** If provided, wraps children and shows the tip on hover over them */
  children?: React.ReactNode
  /** Override the icon entirely */
  icon?: React.ReactNode
}

/* ── Component ─────────────────────────────────────────────────────────── */

export function LearningTip({
  categories = [],
  side = 'top',
  size = 'sm',
  className,
  children,
  icon,
}: LearningTipProps) {
  const [tip, setTip] = useState<LearningTipData | null>(null)

  const pickTip = useCallback(() => {
    const pool =
      categories.length > 0 ? getTipsByCategory(...categories) : getTipsByCategory()
    if (pool.length === 0) return
    setTip(pool[Math.floor(Math.random() * pool.length)])
  }, [categories])

  // Pick a random tip on mount
  useEffect(() => {
    pickTip()
  }, [pickTip])

  // Rotate tip each time the tooltip opens
  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (open) pickTip()
    },
    [pickTip],
  )

  if (!tip) return children ?? null

  const CategoryIcon = CATEGORY_ICONS[tip.category] ?? Lightbulb
  const label = CATEGORY_LABELS[tip.category] ?? 'Tip'

  const iconSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'

  // If children are provided, wrap them and show the tip on hover
  if (children) {
    return (
      <TooltipProvider delay={500}>
        <Tooltip onOpenChange={handleOpenChange}>
          <TooltipTrigger className="inline-flex items-center gap-1">
            {children}
          </TooltipTrigger>
          <TooltipContent
            side={side}
            className="max-w-xs rounded-lg border border-primary/20 bg-card px-3.5 py-2.5 text-card-foreground shadow-lg"
          >
            <div className="flex items-start gap-2">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <CategoryIcon className="h-3 w-3 text-primary" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {label}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {tip.text}
                </p>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  // Standalone icon trigger
  return (
    <TooltipProvider delay={500}>
      <Tooltip onOpenChange={handleOpenChange}>
        <TooltipTrigger
          className={cn(
            'inline-flex items-center justify-center rounded-md text-muted-foreground/60 transition-colors hover:text-primary/80 focus-visible:outline-none',
            size === 'sm' ? 'h-5 w-5' : 'h-6 w-6',
            className,
          )}
          aria-label={`${label}: hover for a helpful tip`}
        >
          {icon ?? <CategoryIcon className={iconSize} />}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          className="max-w-xs rounded-lg border border-primary/20 bg-card px-3.5 py-2.5 text-card-foreground shadow-lg"
        >
          <div className="flex items-start gap-2">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/10">
              <CategoryIcon className="h-3 w-3 text-primary" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                {label}
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                {tip.text}
              </p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
