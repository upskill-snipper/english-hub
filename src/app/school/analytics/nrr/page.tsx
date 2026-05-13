'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Download,
  Grid3x3,
  LineChart,
  TrendingDown,
  TrendingUp,
  Wallet,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { NRRHeadline } from '@/components/analytics/NRRHeadline'
import { CohortHeatmap } from '@/components/analytics/CohortHeatmap'
import { downloadNRRCsv, formatGBP, formatPct, getNRRSummary } from '@/lib/analytics/nrr'
import { generateCohorts } from '@/lib/analytics/cohorts'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

export default function NRRDashboardPage() {
  const t = useT()
  const summary = useMemo(() => getNRRSummary(), [])
  const cohorts = useMemo(() => generateCohorts(), [])
  const [hovered, setHovered] = useState<string | null>(null)

  // Aggregate totals across the full 24-month window for the breakdown card.
  const totals = useMemo(() => {
    return summary.monthly.reduce(
      (acc, m) => ({
        expansion: acc.expansion + m.expansionMRR,
        upgrade: acc.upgrade + m.upgradeMRR,
        contraction: acc.contraction + m.contractionMRR,
        downgrade: acc.downgrade + m.downgradeMRR,
        churn: acc.churn + m.churnMRR,
        new: acc.new + m.newMRR,
      }),
      {
        expansion: 0,
        upgrade: 0,
        contraction: 0,
        downgrade: 0,
        churn: 0,
        new: 0,
      },
    )
  }, [summary])

  const maxNRR = Math.max(...summary.points.map((p) => p.nrr))
  const minNRR = Math.min(...summary.points.map((p) => p.nrr))
  const chartPadding = 8

  return (
    <div className="text-foreground">
      <div className="space-y-8">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Button
              render={<Link href="/school/analytics" />}
              variant="ghost"
              size="sm"
              className="gap-1.5"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('school.analytics.back_to_analytics')}
            </Button>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                <LineChart className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  {t('school.analytics.nrr.title')}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {t('school.analytics.nrr.subtitle')}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              render={<Link href="/school/analytics/nrr/cohorts" />}
              variant="outline"
              size="sm"
              className="gap-1.5"
            >
              <Grid3x3 className="h-4 w-4" />
              {t('school.analytics.nrr.cohort_heatmap')}
            </Button>
            <Button
              render={<Link href="/school/analytics/nrr/movements" />}
              variant="outline"
              size="sm"
              className="gap-1.5"
            >
              <Wallet className="h-4 w-4" />
              {t('school.analytics.nrr.movements')}
            </Button>
            <Button
              size="sm"
              className="gap-1.5 bg-emerald-500 text-white hover:bg-emerald-600"
              onClick={() => downloadNRRCsv(summary)}
            >
              <Download className="h-4 w-4" />
              {t('school.analytics.nrr.export_investors')}
            </Button>
          </div>
        </div>

        {/* ── Headline Number ─────────────────────────────────────────────── */}
        <NRRHeadline
          headlineNRR={summary.headlineNRR}
          previousNRR={summary.previousNRR}
          momChange={summary.momChange}
          grossRetention={summary.grossRetention}
          trailing12NRR={summary.trailing12NRR}
        />

        {/* ── Trend Chart ─────────────────────────────────────────────────── */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-4 w-4 text-primary" />
              {t('school.analytics.nrr.trend_title')}
            </CardTitle>
            <CardDescription>{t('school.analytics.nrr.trend_subtitle')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-1.5" style={{ height: 200 }}>
              {summary.points.map((p) => {
                const range = Math.max(maxNRR - minNRR, 1)
                const normalized =
                  ((p.nrr - minNRR + chartPadding) / (range + chartPadding * 2)) * 100
                const targetLine =
                  ((100 - minNRR + chartPadding) / (range + chartPadding * 2)) * 100
                const above = p.nrr >= 100
                return (
                  <div
                    key={p.month}
                    className="group relative flex flex-1 flex-col items-center justify-end"
                    style={{ height: '100%' }}
                    onMouseEnter={() => setHovered(p.month)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Target line marker */}
                    <div
                      className="absolute left-0 right-0 border-t border-dashed border-muted-foreground/40"
                      style={{ bottom: `${targetLine}%` }}
                    />
                    <div
                      className={cn(
                        'w-full max-w-7 rounded-t-sm transition-all duration-200',
                        above ? 'bg-emerald-500/80' : 'bg-amber-500/80',
                        hovered === p.month && 'bg-primary',
                      )}
                      style={{ height: `${Math.max(normalized, 2)}%` }}
                    />
                    {hovered === p.month && (
                      <div className="absolute bottom-full z-10 mb-2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-[11px] text-popover-foreground shadow-lg">
                        <div className="font-medium">{p.label}</div>
                        <div className="text-muted-foreground">NRR {formatPct(p.nrr)}</div>
                        <div className="text-muted-foreground">
                          GRR {formatPct(p.grossRetention)}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
              <span>{summary.points[0]?.label}</span>
              <span>{summary.points[summary.points.length - 1]?.label}</span>
            </div>
          </CardContent>
        </Card>

        {/* ── Movement Breakdown ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <BreakdownCard
            title={t('school.analytics.nrr.expansion')}
            subtitle={t('school.analytics.nrr.expansion_sub')}
            total={totals.expansion + totals.upgrade}
            positive
            items={[
              { label: t('school.analytics.nrr.expansion'), value: totals.expansion },
              { label: t('school.analytics.nrr.upgrades'), value: totals.upgrade },
            ]}
          />
          <BreakdownCard
            title={t('school.analytics.nrr.contraction')}
            subtitle={t('school.analytics.nrr.contraction_sub')}
            total={totals.contraction + totals.downgrade}
            items={[
              { label: t('school.analytics.nrr.contraction'), value: totals.contraction },
              { label: t('school.analytics.nrr.downgrades'), value: totals.downgrade },
            ]}
          />
          <BreakdownCard
            title={t('school.analytics.nrr.churn')}
            subtitle={t('school.analytics.nrr.churn_sub')}
            total={totals.churn}
            items={[{ label: t('school.analytics.nrr.churned_mrr'), value: totals.churn }]}
            danger
          />
        </div>

        {/* ── Cohort Retention Table Preview ──────────────────────────────── */}
        <Card>
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Grid3x3 className="h-4 w-4 text-primary" />
                {t('school.analytics.nrr.cohort_retention')}
              </CardTitle>
              <CardDescription>{t('school.analytics.nrr.cohort_retention_sub')}</CardDescription>
            </div>
            <Button
              render={<Link href="/school/analytics/nrr/cohorts" />}
              variant="outline"
              size="sm"
              className="gap-1.5"
            >
              {t('school.analytics.nrr.full_heatmap')}
              <TrendingUp className="h-3.5 w-3.5" />
            </Button>
          </CardHeader>
          <CardContent>
            <CohortHeatmap table={cohorts} maxMonthsShown={12} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// ── Movement Breakdown Card ────────────────────────────────────────────────

function BreakdownCard({
  title,
  subtitle,
  total,
  items,
  positive,
  danger,
}: {
  title: string
  subtitle: string
  total: number
  items: { label: string; value: number }[]
  positive?: boolean
  danger?: boolean
}) {
  const accent = positive ? 'text-emerald-400' : danger ? 'text-red-400' : 'text-clay-600'
  const Icon = positive ? TrendingUp : TrendingDown
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
            <CardDescription>{subtitle}</CardDescription>
          </div>
          <Badge variant="outline" className={cn('gap-1', accent)}>
            <Icon className="h-3 w-3" />
            24mo
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className={cn('text-3xl font-bold tabular-nums', accent)}>
          {positive ? '+' : danger || !positive ? '-' : ''}
          {formatGBP(total, true)}
        </p>
        <div className="mt-4 space-y-2">
          {items.map((it) => (
            <div key={it.label} className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{it.label}</span>
              <span className="tabular-nums font-medium">{formatGBP(it.value, true)}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
