"use client"

import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { formatPct } from "@/lib/analytics/nrr"
import { cn } from "@/lib/utils"

interface NRRHeadlineProps {
  headlineNRR: number
  previousNRR: number
  momChange: number
  grossRetention: number
  trailing12NRR: number
  className?: string
}

export function NRRHeadline({
  headlineNRR,
  previousNRR,
  momChange,
  grossRetention,
  trailing12NRR,
  className,
}: NRRHeadlineProps) {
  const isPositive = momChange > 0.05
  const isNegative = momChange < -0.05
  const Arrow = isPositive ? TrendingUp : isNegative ? TrendingDown : Minus
  const trendColor = isPositive
    ? "text-emerald-400"
    : isNegative
      ? "text-red-400"
      : "text-muted-foreground"
  const trendBg = isPositive
    ? "bg-emerald-500/10"
    : isNegative
      ? "bg-red-500/10"
      : "bg-muted"

  return (
    <Card className={cn("relative overflow-hidden", className)}>
      {/* Subtle gradient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent"
      />
      <CardContent className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
        {/* Headline figure */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Net Revenue Retention
          </p>
          <div className="flex items-end gap-4">
            <span className="text-6xl font-bold tracking-tight tabular-nums text-foreground md:text-7xl">
              {formatPct(headlineNRR)}
            </span>
            <span
              className={cn(
                "mb-2 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
                trendBg,
                trendColor,
              )}
            >
              <Arrow className="h-3.5 w-3.5" />
              {momChange >= 0 ? "+" : ""}
              {momChange.toFixed(1)} pts MoM
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Existing customer retention including expansion. Above 100%
            indicates net expansion.
          </p>
        </div>

        {/* Secondary metrics */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <SecondaryMetric
            label="Previous month"
            value={formatPct(previousNRR)}
          />
          <SecondaryMetric
            label="Trailing 12mo"
            value={formatPct(trailing12NRR)}
            highlight
          />
          <SecondaryMetric
            label="Gross retention"
            value={formatPct(grossRetention)}
          />
          <SecondaryMetric
            label="Investor target"
            value="≥ 110%"
            muted
          />
        </div>
      </CardContent>
    </Card>
  )
}

function SecondaryMetric({
  label,
  value,
  highlight,
  muted,
}: {
  label: string
  value: string
  highlight?: boolean
  muted?: boolean
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p
        className={cn(
          "text-2xl font-semibold tabular-nums",
          highlight && "text-emerald-400",
          muted && "text-muted-foreground",
        )}
      >
        {value}
      </p>
    </div>
  )
}
