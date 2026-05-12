'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

export interface AOScore {
  /** e.g. "AO1" */
  code: string
  /** Short description of the assessment objective */
  label: string
  /** Marks awarded */
  score: number
  /** Maximum marks available */
  max: number
}

export interface AOBreakdownProps {
  scores: AOScore[]
  className?: string
}

/**
 * "What markers look for" bar chart.
 * Renders a labelled bar for each AO using theme tokens only.
 */
export function AOBreakdown({ scores, className }: AOBreakdownProps) {
  const t = useT()
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>{t('marking.what_markers_look_for')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {scores.map((ao) => {
          const pct = Math.round((ao.score / ao.max) * 100)
          return (
            <div key={ao.code} className="space-y-1.5">
              <div className="flex items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-sm font-bold text-foreground">{ao.code}</span>
                  <span className="text-xs text-muted-foreground">{ao.label}</span>
                </div>
                <span className="font-mono text-sm font-semibold tabular-nums text-foreground">
                  {ao.score}
                  <span className="text-muted-foreground">/{ao.max}</span>
                </span>
              </div>
              <div
                className="h-2 w-full overflow-hidden rounded-full bg-muted"
                role="progressbar"
                aria-valuenow={ao.score}
                aria-valuemin={0}
                aria-valuemax={ao.max}
                aria-label={`${ao.code} ${ao.label}`}
              >
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-700 ease-out"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {pct}% — {bandLabel(pct, t)}
              </p>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

function bandLabel(pct: number, t: (key: string) => string): string {
  if (pct >= 85) return t('marking.band_excellent')
  if (pct >= 70) return t('marking.band_strong')
  if (pct >= 55) return t('marking.band_good')
  if (pct >= 40) return t('marking.band_getting_there')
  return t('marking.band_early')
}

export default AOBreakdown
