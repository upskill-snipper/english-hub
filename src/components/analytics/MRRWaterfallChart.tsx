'use client'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { formatGBP } from '@/lib/analytics/nrr'
import type { MonthlyMRR } from '@/lib/analytics/mrr-movements'
import { useT } from '@/lib/i18n/use-t'
import { cn } from '@/lib/utils'

interface MRRWaterfallChartProps {
  month: MonthlyMRR
  className?: string
}

interface Bar {
  key: string
  label: string
  amount: number // actual MRR value of the bar (+/-)
  barStart: number // GBP — base of the bar
  barTop: number // GBP — top of the bar
  colour: string
  isTotal?: boolean
}

/**
 * MRR Waterfall for a single month. Shows how we went from starting MRR
 * to ending MRR via new/expansion/upgrade/contraction/downgrade/churn bars.
 */
export function MRRWaterfallChart({ month, className }: MRRWaterfallChartProps) {
  const t = useT()
  const bars: Bar[] = []
  let cursor = month.startingMRR

  bars.push({
    key: 'start',
    label: t('analytics.mrr.starting'),
    amount: month.startingMRR,
    barStart: 0,
    barTop: month.startingMRR,
    colour: 'bg-ink-500/70',
    isTotal: true,
  })

  const addMovement = (key: string, label: string, amount: number, colour: string) => {
    if (amount === 0) return
    const signed = amount
    const nextCursor = cursor + signed
    const barStart = Math.min(cursor, nextCursor)
    const barTop = Math.max(cursor, nextCursor)
    bars.push({ key, label, amount: signed, barStart, barTop, colour })
    cursor = nextCursor
  }

  addMovement('new', t('analytics.mrr.new'), month.newMRR, 'bg-emerald-500/80')
  addMovement('expansion', t('analytics.mrr.expansion'), month.expansionMRR, 'bg-emerald-400/80')
  addMovement('upgrade', t('analytics.mrr.upgrade'), month.upgradeMRR, 'bg-emerald-300/80')
  addMovement(
    'reactivation',
    t('analytics.mrr.reactivation'),
    month.reactivationMRR,
    'bg-sky-400/80',
  )
  addMovement(
    'contraction',
    t('analytics.mrr.contraction'),
    -month.contractionMRR,
    'bg-orange-400/80',
  )
  addMovement('downgrade', t('analytics.mrr.downgrade'), -month.downgradeMRR, 'bg-orange-500/80')
  addMovement('churn', t('analytics.mrr.churn'), -month.churnMRR, 'bg-red-500/80')

  bars.push({
    key: 'end',
    label: t('analytics.mrr.ending'),
    amount: month.endingMRR,
    barStart: 0,
    barTop: month.endingMRR,
    colour: 'bg-ink-400/80',
    isTotal: true,
  })

  const max = Math.max(...bars.map((b) => b.barTop)) * 1.08
  const min = 0
  const range = max - min || 1

  return (
    <div className={cn('w-full', className)}>
      <p className="mb-4 text-xs text-muted-foreground">
        {month.label} &middot; {t('analytics.mrr.starting')} {formatGBP(month.startingMRR, true)} →{' '}
        {t('analytics.mrr.ending')} {formatGBP(month.endingMRR, true)}
      </p>

      <div
        className="relative flex items-end gap-3 rounded-lg border border-border/40 bg-muted/10 p-4"
        style={{ height: 280 }}
      >
        {bars.map((bar) => {
          const heightPct = ((bar.barTop - bar.barStart) / range) * 100
          const bottomPct = (bar.barStart / range) * 100
          const isNegative = bar.amount < 0
          return (
            <div
              key={bar.key}
              className="relative flex flex-1 flex-col items-center justify-end"
              style={{ height: '100%' }}
            >
              <Tooltip>
                <TooltipTrigger>
                  <div className="relative h-full w-full">
                    <div
                      className={cn(
                        'absolute left-1/2 w-4/5 -translate-x-1/2 rounded-t-md transition-transform hover:scale-105',
                        bar.colour,
                      )}
                      style={{
                        bottom: `${bottomPct}%`,
                        height: `${Math.max(heightPct, 0.5)}%`,
                      }}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p className="font-medium">{bar.label}</p>
                  <p className="tabular-nums text-muted-foreground">
                    {bar.isTotal
                      ? formatGBP(bar.amount, true)
                      : `${isNegative ? '-' : '+'}${formatGBP(Math.abs(bar.amount), true)}`}
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
          )
        })}
      </div>

      {/* X-axis labels */}
      <div className="mt-2 flex gap-3">
        {bars.map((bar) => (
          <div key={`${bar.key}-label`} className="flex flex-1 flex-col items-center gap-0.5">
            <span className="text-[10px] font-medium text-foreground">{bar.label}</span>
            <span
              className={cn(
                'text-[10px] tabular-nums',
                bar.isTotal
                  ? 'text-muted-foreground'
                  : bar.amount < 0
                    ? 'text-red-400'
                    : 'text-emerald-400',
              )}
            >
              {bar.isTotal
                ? formatGBP(bar.amount, true)
                : `${bar.amount < 0 ? '-' : '+'}${formatGBP(Math.abs(bar.amount), true)}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
