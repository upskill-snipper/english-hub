'use client'

import * as React from 'react'
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { GlassPanel, PanelEyebrow, type GlassAccent } from './GlassPanel'
import { AnimatedNumber } from './AnimatedNumber'
import { Sparkline } from './charts'
import { SERIES } from './theme'

/**
 * Hero KPI tile - animated figure, delta chip and an optional sparkline,
 * on a cinematic glass surface. The headline metric primitive for the
 * school/teacher overviews.
 */
export function KpiTile({
  label,
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  delta,
  deltaSuffix = '',
  icon: Icon,
  accent = 'primary',
  spark,
  className,
}: {
  label: string
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  /** Signed change vs previous period; omit to hide the chip. */
  delta?: number
  deltaSuffix?: string
  icon?: React.ElementType
  accent?: GlassAccent
  /** Tiny trend series; renders a sparkline when provided. */
  spark?: { v: number }[]
  className?: string
}) {
  const dir = delta == null ? 0 : delta > 0 ? 1 : delta < 0 ? -1 : 0
  return (
    <GlassPanel accent={accent} className={cn('p-5', className)}>
      <div className="flex items-start justify-between gap-3">
        <PanelEyebrow>{label}</PanelEyebrow>
        {Icon && (
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.06]">
            <Icon className="h-4 w-4 text-muted-foreground" aria-hidden />
          </span>
        )}
      </div>
      <div className="mt-2 flex items-end gap-2">
        <AnimatedNumber
          value={value}
          decimals={decimals}
          prefix={prefix}
          suffix={suffix}
          className="font-heading text-4xl font-bold tracking-tight text-foreground"
        />
        {dir !== 0 && (
          <span
            className={cn(
              'mb-1 inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-xs font-semibold',
              dir > 0 ? 'bg-emerald-500/15 text-emerald-500' : 'bg-red-500/15 text-red-500',
            )}
          >
            {dir > 0 ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : (
              <ArrowDownRight className="h-3 w-3" />
            )}
            {Math.abs(delta as number)}
            {deltaSuffix}
          </span>
        )}
        {dir === 0 && delta != null && (
          <span className="mb-1 inline-flex items-center gap-0.5 rounded-full bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground">
            <Minus className="h-3 w-3" />
          </span>
        )}
      </div>
      {spark && spark.length > 1 && (
        <div className="mt-3">
          <Sparkline
            data={spark as unknown as Record<string, unknown>[]}
            yKey="v"
            color={SERIES[0]}
            height={36}
          />
        </div>
      )}
    </GlassPanel>
  )
}
