'use client'

import { useMemo } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts'
import { ChartFrame } from '@/components/dataviz'
import { GRID, AXIS } from '@/components/dataviz'
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
  barStart: number // GBP - base of the bar
  barTop: number // GBP - top of the bar
  colour: string
  isTotal?: boolean
}

interface WaterfallRow {
  key: string
  label: string
  amount: number
  /** invisible offset so the visible segment "floats" to its level */
  base: number
  /** visible segment height (GBP) */
  span: number
  fill: string
  isTotal: boolean
}

/* Brand-token colours (replaces the old tailwind bg-* utility strings so the
 * Recharts <Cell fill> values are real colours, on-theme in light + dark). */
const COLOUR: Record<string, string> = {
  start: 'hsl(var(--muted-foreground))',
  new: 'hsl(152 60% 45%)',
  expansion: 'hsl(152 55% 52%)',
  upgrade: 'hsl(152 50% 60%)',
  reactivation: 'hsl(199 89% 60%)',
  contraction: 'hsl(28 90% 58%)',
  downgrade: 'hsl(25 90% 50%)',
  churn: 'hsl(0 72% 58%)',
  end: 'hsl(var(--chart-1))',
}

function WaterfallTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: { payload?: WaterfallRow }[]
}) {
  if (!active || !payload || payload.length === 0) return null
  const row = payload[0]?.payload
  if (!row) return null
  const negative = row.amount < 0
  return (
    <div className="rounded-xl border border-border/60 bg-card/90 px-3 py-2 shadow-xl backdrop-blur-xl">
      <p className="font-medium text-foreground">{row.label}</p>
      <p className="tabular-nums text-muted-foreground">
        {row.isTotal
          ? formatGBP(row.amount, true)
          : `${negative ? '-' : '+'}${formatGBP(Math.abs(row.amount), true)}`}
      </p>
    </div>
  )
}

/**
 * MRR Waterfall for a single month. Shows how we went from starting MRR
 * to ending MRR via new/expansion/upgrade/contraction/downgrade/churn bars.
 *
 * Re-skinned onto the premium "cinematic glass" Recharts layer - the public
 * API ({ month, className }) and every metric/label is preserved exactly;
 * only the rendering changed from CSS divs to a themed Recharts waterfall.
 */
export function MRRWaterfallChart({ month, className }: MRRWaterfallChartProps) {
  const t = useT()

  const bars = useMemo<Bar[]>(() => {
    const list: Bar[] = []
    let cursor = month.startingMRR

    list.push({
      key: 'start',
      label: t('analytics.mrr.starting'),
      amount: month.startingMRR,
      barStart: 0,
      barTop: month.startingMRR,
      colour: COLOUR.start,
      isTotal: true,
    })

    const addMovement = (key: string, label: string, amount: number, colour: string) => {
      if (amount === 0) return
      const signed = amount
      const nextCursor = cursor + signed
      const barStart = Math.min(cursor, nextCursor)
      const barTop = Math.max(cursor, nextCursor)
      list.push({ key, label, amount: signed, barStart, barTop, colour })
      cursor = nextCursor
    }

    addMovement('new', t('analytics.mrr.new'), month.newMRR, COLOUR.new)
    addMovement('expansion', t('analytics.mrr.expansion'), month.expansionMRR, COLOUR.expansion)
    addMovement('upgrade', t('analytics.mrr.upgrade'), month.upgradeMRR, COLOUR.upgrade)
    addMovement(
      'reactivation',
      t('analytics.mrr.reactivation'),
      month.reactivationMRR,
      COLOUR.reactivation,
    )
    addMovement(
      'contraction',
      t('analytics.mrr.contraction'),
      -month.contractionMRR,
      COLOUR.contraction,
    )
    addMovement('downgrade', t('analytics.mrr.downgrade'), -month.downgradeMRR, COLOUR.downgrade)
    addMovement('churn', t('analytics.mrr.churn'), -month.churnMRR, COLOUR.churn)

    list.push({
      key: 'end',
      label: t('analytics.mrr.ending'),
      amount: month.endingMRR,
      barStart: 0,
      barTop: month.endingMRR,
      colour: COLOUR.end,
      isTotal: true,
    })

    return list
  }, [month, t])

  const rows = useMemo<WaterfallRow[]>(
    () =>
      bars.map((b) => ({
        key: b.key,
        label: b.label,
        amount: b.amount,
        base: b.barStart,
        span: Math.max(b.barTop - b.barStart, 0),
        fill: b.colour,
        isTotal: Boolean(b.isTotal),
      })),
    [bars],
  )

  const max = Math.max(...bars.map((b) => b.barTop)) * 1.08

  return (
    <div className={cn('w-full', className)}>
      <p className="mb-4 text-xs text-muted-foreground">
        {month.label} &middot; {t('analytics.mrr.starting')} {formatGBP(month.startingMRR, true)} →{' '}
        {t('analytics.mrr.ending')} {formatGBP(month.endingMRR, true)}
      </p>

      <ChartFrame height={280}>
        <BarChart
          data={rows}
          margin={{ top: 24, right: 12, bottom: 8, left: -8 }}
          barCategoryGap="18%"
          stackOffset="sign"
        >
          <CartesianGrid {...GRID} />
          <XAxis
            dataKey="label"
            {...AXIS}
            interval={0}
            tick={{ fontSize: 10, fill: 'hsl(var(--foreground))' }}
            tickFormatter={(v: string) => (v.length > 11 ? `${v.slice(0, 10)}…` : v)}
          />
          <YAxis
            domain={[0, max]}
            {...AXIS}
            width={56}
            tickFormatter={(v: number) => formatGBP(v, true)}
          />
          <Tooltip content={<WaterfallTooltip />} cursor={{ fill: 'hsl(var(--muted)/0.4)' }} />
          {/* Invisible base lifts each segment to its waterfall level */}
          <Bar dataKey="base" stackId="wf" fill="transparent" isAnimationActive={false} />
          <Bar
            dataKey="span"
            stackId="wf"
            radius={[6, 6, 0, 0]}
            isAnimationActive
            animationDuration={800}
          >
            {rows.map((r) => (
              <Cell key={r.key} fill={r.fill} />
            ))}
            <LabelList
              dataKey="amount"
              position="top"
              formatter={(value) => {
                const n = Number(value)
                return `${n < 0 ? '-' : '+'}${formatGBP(Math.abs(n), true)}`
              }}
              style={{ fontSize: 9, fill: 'hsl(var(--muted-foreground))' }}
            />
          </Bar>
        </BarChart>
      </ChartFrame>

      {/* X-axis value summary (kept from the original for parity / scanability) */}
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
