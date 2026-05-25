'use client'

// ─── IELTS Academic Writing Task 1 - chart renderer ─────────────────────────
// Renders a WritingChartSpec as a REAL visual (bar / line / pie / table /
// process) so a Task 1 prompt shows the data the way the exam does, instead of
// a text-only description. Built on the shared recharts primitives + theme
// tokens so it matches the rest of the app. recharts is client-only, so this
// whole module is 'use client'.
//
// Accessibility: every chart is wrapped in a figure with a caption and an
// always-present visually-hidden data table, so the underlying numbers are
// available to screen readers (and never lost if a visual can't be perceived).
// ────────────────────────────────────────────────────────────────────────────

import * as React from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { ArrowRight, RotateCw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ChartFrame, GlassTooltip } from '@/components/dataviz/charts'
import { SERIES, GRID, AXIS } from '@/components/dataviz/theme'
import type {
  WritingChartSpec,
  BarChartSpec,
  LineChartSpec,
  PieChartSpec,
  TableChartSpec,
  ProcessChartSpec,
  ChartSeries,
} from '@/lib/ielts/types'

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Pivot {categories, series} → recharts row data keyed by series name. */
function toRows(categories: string[], series: ChartSeries[]): Record<string, string | number>[] {
  return categories.map((cat, i) => {
    const row: Record<string, string | number> = { category: cat }
    for (const s of series) row[s.name] = s.values[i] ?? 0
    return row
  })
}

function fmt(value: number, unit?: string): string {
  if (!unit) return String(value)
  if (unit === '%') return `${value}%`
  if (unit === 'US$' || unit === '$' || unit === '£' || unit === '€') return `${unit}${value}`
  return `${value} ${unit}`
}

/** Visually-hidden data table so the numbers are always available to AT. */
function SrTable({
  caption,
  columns,
  rows,
}: {
  caption: string
  columns: string[]
  rows: (string | number)[][]
}) {
  return (
    <table className="sr-only">
      <caption>{caption}</caption>
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th key={i} scope="col">
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, ri) => (
          <tr key={ri}>
            {r.map((cell, ci) =>
              ci === 0 ? (
                <th key={ci} scope="row">
                  {cell}
                </th>
              ) : (
                <td key={ci}>{cell}</td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// ─── Figure wrapper ───────────────────────────────────────────────────────────

function Figure({
  label,
  caption,
  children,
}: {
  label: string
  caption?: string
  children: React.ReactNode
}) {
  return (
    <figure
      role="group"
      aria-label={label}
      className="rounded-xl border border-border/60 bg-background/50 p-4 sm:p-5"
    >
      {children}
      {caption && (
        <figcaption className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// ─── Bar ────────────────────────────────────────────────────────────────────

function BarSpec({ spec }: { spec: BarChartSpec }) {
  const data = toRows(spec.categories, spec.series)
  const multi = spec.series.length > 1
  return (
    <Figure label={spec.caption ?? 'Bar chart'} caption={spec.caption}>
      <ChartFrame height={280}>
        <BarChart data={data} margin={{ top: 16, right: 12, bottom: 4, left: -8 }}>
          <CartesianGrid {...GRID} vertical={false} />
          <XAxis dataKey="category" {...AXIS} interval={0} tick={{ fontSize: 11 }} />
          <YAxis
            {...AXIS}
            width={48}
            label={
              spec.yAxisLabel
                ? {
                    value: spec.yAxisLabel,
                    angle: -90,
                    position: 'insideLeft',
                    style: { fontSize: 10, fill: 'hsl(var(--muted-foreground))' },
                  }
                : undefined
            }
          />
          <Tooltip
            content={<GlassTooltip suffix={spec.unit === '%' ? '%' : ''} />}
            cursor={{ fill: 'hsl(var(--muted)/0.4)' }}
          />
          {multi && <Legend wrapperStyle={{ fontSize: 11 }} />}
          {spec.series.map((s, i) => (
            <Bar
              key={s.name}
              dataKey={s.name}
              stackId={spec.stacked ? 'stack' : undefined}
              fill={SERIES[i % SERIES.length]}
              radius={spec.stacked ? [0, 0, 0, 0] : [4, 4, 0, 0]}
              isAnimationActive={false}
            />
          ))}
        </BarChart>
      </ChartFrame>
      <SrTable
        caption={spec.caption ?? 'Bar chart data'}
        columns={[
          'Category',
          ...spec.series.map((s) => `${s.name}${spec.unit ? ` (${spec.unit})` : ''}`),
        ]}
        rows={spec.categories.map((cat, i) => [cat, ...spec.series.map((s) => s.values[i] ?? 0)])}
      />
    </Figure>
  )
}

// ─── Line ─────────────────────────────────────────────────────────────────────

function LineSpec({ spec }: { spec: LineChartSpec }) {
  const data = toRows(spec.categories, spec.series)
  const multi = spec.series.length > 1
  return (
    <Figure label={spec.caption ?? 'Line graph'} caption={spec.caption}>
      <ChartFrame height={280}>
        <LineChart data={data} margin={{ top: 16, right: 16, bottom: 4, left: -8 }}>
          <CartesianGrid {...GRID} />
          <XAxis dataKey="category" {...AXIS} interval={0} tick={{ fontSize: 11 }} />
          <YAxis
            {...AXIS}
            width={48}
            label={
              spec.yAxisLabel
                ? {
                    value: spec.yAxisLabel,
                    angle: -90,
                    position: 'insideLeft',
                    style: { fontSize: 10, fill: 'hsl(var(--muted-foreground))' },
                  }
                : undefined
            }
          />
          <Tooltip content={<GlassTooltip suffix={spec.unit === '%' ? '%' : ''} />} />
          {multi && <Legend wrapperStyle={{ fontSize: 11 }} />}
          {spec.series.map((s, i) => (
            <Line
              key={s.name}
              type="monotone"
              dataKey={s.name}
              stroke={SERIES[i % SERIES.length]}
              strokeWidth={2.5}
              dot={{ r: 3 }}
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ChartFrame>
      <SrTable
        caption={spec.caption ?? 'Line graph data'}
        columns={[
          'Period',
          ...spec.series.map((s) => `${s.name}${spec.unit ? ` (${spec.unit})` : ''}`),
        ]}
        rows={spec.categories.map((cat, i) => [cat, ...spec.series.map((s) => s.values[i] ?? 0)])}
      />
    </Figure>
  )
}

// ─── Pie (one or two) ──────────────────────────────────────────────────────────

function PieSpec({ spec }: { spec: PieChartSpec }) {
  return (
    <Figure label={spec.caption ?? 'Pie chart'} caption={spec.caption}>
      <div
        className={cn('grid gap-4', spec.datasets.length > 1 ? 'sm:grid-cols-2' : 'grid-cols-1')}
      >
        {spec.datasets.map((ds) => {
          const total = ds.slices.reduce((n, s) => n + s.value, 0) || 1
          return (
            <div key={ds.name} className="flex flex-col items-center">
              <p className="mb-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {ds.name}
              </p>
              <ChartFrame height={220} className="max-w-[260px]">
                <PieChart>
                  <Pie
                    data={ds.slices}
                    dataKey="value"
                    nameKey="label"
                    innerRadius="45%"
                    outerRadius="80%"
                    paddingAngle={1}
                    isAnimationActive={false}
                    label={(p: { name?: string; value?: number }) =>
                      `${p.name}: ${Math.round(((p.value ?? 0) / total) * 100)}%`
                    }
                    labelLine={false}
                  >
                    {ds.slices.map((_, i) => (
                      <Cell key={i} fill={SERIES[i % SERIES.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<GlassTooltip suffix={spec.unit === '%' ? '%' : ''} />} />
                </PieChart>
              </ChartFrame>
            </div>
          )
        })}
      </div>
      <SrTable
        caption={spec.caption ?? 'Pie chart data'}
        columns={[
          'Segment',
          ...spec.datasets.map((d) => `${d.name}${spec.unit ? ` (${spec.unit})` : ''}`),
        ]}
        rows={(spec.datasets[0]?.slices ?? []).map((slice, i) => [
          slice.label,
          ...spec.datasets.map((d) => d.slices[i]?.value ?? 0),
        ])}
      />
    </Figure>
  )
}

// ─── Table ──────────────────────────────────────────────────────────────────

function TableSpec({ spec }: { spec: TableChartSpec }) {
  return (
    <Figure label={spec.caption ?? 'Data table'} caption={spec.caption}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              {spec.columns.map((c, i) => (
                <th
                  key={i}
                  scope="col"
                  className={cn(
                    'px-3 py-2 font-semibold text-foreground',
                    i === 0 ? 'text-left' : 'text-right',
                  )}
                >
                  {c}
                  {i > 0 && spec.unit ? (
                    <span className="ml-1 font-normal text-muted-foreground">({spec.unit})</span>
                  ) : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {spec.rows.map((row, ri) => (
              <tr key={ri} className="border-b border-border/50 last:border-0">
                <th scope="row" className="px-3 py-2 text-left font-medium text-foreground">
                  {row.label}
                </th>
                {row.cells.map((cell, ci) => (
                  <td key={ci} className="px-3 py-2 text-right tabular-nums text-foreground/90">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Figure>
  )
}

// ─── Process / life-cycle ──────────────────────────────────────────────────────

function ProcessSpec({ spec }: { spec: ProcessChartSpec }) {
  return (
    <Figure
      label={spec.caption ?? 'Process diagram'}
      caption={spec.caption ?? (spec.cyclical ? 'A cyclical process (it repeats).' : undefined)}
    >
      <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-stretch">
        {spec.steps.map((step, i) => (
          <React.Fragment key={i}>
            <li className="flex flex-1 flex-col rounded-lg border border-border/70 bg-card p-3 shadow-soft sm:min-w-[120px] sm:max-w-[180px]">
              <span className="mb-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 font-mono text-[11px] font-bold text-primary">
                {i + 1}
              </span>
              <span className="text-sm font-medium leading-snug text-foreground">{step.label}</span>
              {step.detail && (
                <span className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                  {step.detail}
                </span>
              )}
            </li>
            {i < spec.steps.length - 1 && (
              <li
                aria-hidden
                className="flex items-center justify-center self-center text-muted-foreground"
              >
                <ArrowRight className="hidden h-4 w-4 sm:block" />
                <ArrowRight className="h-4 w-4 rotate-90 sm:hidden" />
              </li>
            )}
          </React.Fragment>
        ))}
        {spec.cyclical && (
          <li className="flex items-center gap-1.5 self-center text-[11px] font-medium text-muted-foreground">
            <RotateCw className="h-3.5 w-3.5" />
            repeats
          </li>
        )}
      </ol>
    </Figure>
  )
}

// ─── Public renderer ────────────────────────────────────────────────────────

export function WritingChart({ spec, className }: { spec: WritingChartSpec; className?: string }) {
  return (
    <div className={className}>
      {spec.kind === 'bar' && <BarSpec spec={spec} />}
      {spec.kind === 'line' && <LineSpec spec={spec} />}
      {spec.kind === 'pie' && <PieSpec spec={spec} />}
      {spec.kind === 'table' && <TableSpec spec={spec} />}
      {spec.kind === 'process' && <ProcessSpec spec={spec} />}
    </div>
  )
}
