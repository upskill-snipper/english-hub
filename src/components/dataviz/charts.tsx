'use client'

// ─── Cinematic-glass chart primitives (Recharts 3) ────────────────────────────
// Premium, themed wrappers so every school/teacher surface renders
// consistent "future-tech" visuals. Recharts is client-only; this whole
// module is 'use client'. All colours come from theme.ts (brand tokens).
// ──────────────────────────────────────────────────────────────────────────────

import * as React from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts'
import { cn } from '@/lib/utils'
import { SERIES, RAG, GRID, AXIS, GRAD, ragColor } from './theme'

/* ─── Glass tooltip ───────────────────────────────────────────────── */

interface TipPayload {
  name?: string
  value?: number | string
  color?: string
  payload?: Record<string, unknown>
}

export function GlassTooltip({
  active,
  payload,
  label,
  suffix = '',
}: {
  active?: boolean
  payload?: TipPayload[]
  label?: string | number
  suffix?: string
}) {
  if (!active || !payload || payload.length === 0) return null
  return (
    <div className="rounded-xl border border-border/60 bg-card/90 px-3 py-2 shadow-xl backdrop-blur-xl">
      {label != null && (
        <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
      )}
      {payload.map((p, i) => (
        <p key={i} className="flex items-center gap-2 text-xs text-foreground">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: p.color ?? SERIES[i % SERIES.length] }}
          />
          <span className="text-muted-foreground">{p.name}</span>
          <span className="ml-auto font-semibold tabular-nums">
            {typeof p.value === 'number' ? p.value : p.value}
            {suffix}
          </span>
        </p>
      ))}
    </div>
  )
}

/* ─── Frame ───────────────────────────────────────────────────────── */

export function ChartFrame({
  height = 240,
  children,
  className,
}: {
  height?: number
  children: React.ReactElement
  className?: string
}) {
  return (
    <div className={cn('w-full', className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  )
}

/* ─── Trend area (KPI over time) ───────────────────────────────────── */

export function TrendArea({
  data,
  xKey,
  yKey,
  height = 240,
  color = SERIES[0],
  suffix = '%',
  domain = [0, 100],
}: {
  data: Record<string, unknown>[]
  xKey: string
  yKey: string
  height?: number
  color?: string
  suffix?: string
  domain?: [number, number]
}) {
  return (
    <ChartFrame height={height}>
      <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
        <defs>
          <linearGradient id={GRAD.area} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.45} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid {...GRID} />
        <XAxis dataKey={xKey} {...AXIS} />
        <YAxis domain={domain} {...AXIS} width={40} />
        <Tooltip
          content={<GlassTooltip suffix={suffix} />}
          cursor={{ stroke: 'hsl(var(--border))' }}
        />
        <Area
          type="monotone"
          dataKey={yKey}
          stroke={color}
          strokeWidth={2.5}
          fill={`url(#${GRAD.area})`}
          isAnimationActive
          animationDuration={900}
          dot={{ r: 3, fill: color, strokeWidth: 0 }}
          activeDot={{ r: 5 }}
        />
      </AreaChart>
    </ChartFrame>
  )
}

/* ─── Mini sparkline (for KPI tiles) ───────────────────────────────── */

export function Sparkline({
  data,
  yKey,
  color = SERIES[0],
  height = 40,
}: {
  data: Record<string, unknown>[]
  yKey: string
  color?: string
  height?: number
}) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
          <Line
            type="monotone"
            dataKey={yKey}
            stroke={color}
            strokeWidth={2}
            dot={false}
            isAnimationActive
            animationDuration={800}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

/* ─── Radial score gauge ──────────────────────────────────────────── */

export function RadialScore({
  value,
  label,
  size = 180,
}: {
  value: number
  label?: string
  size?: number
}) {
  const color = ragColor(value)
  const data = [{ name: label ?? 'score', value: Math.max(0, Math.min(100, value)) }]
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="72%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <defs>
            <linearGradient id={GRAD.radial} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.7} />
              <stop offset="100%" stopColor={color} stopOpacity={1} />
            </linearGradient>
          </defs>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar
            background={{ fill: 'hsl(var(--muted))' }}
            dataKey="value"
            cornerRadius={999}
            fill={`url(#${GRAD.radial})`}
            isAnimationActive
            animationDuration={1000}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold tabular-nums text-foreground">{Math.round(value)}</span>
        {label && (
          <span className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}

/* ─── Horizontal rank bars (year groups / classes) ─────────────────── */

export function RankBars({
  data,
  labelKey,
  valueKey,
  height = 260,
  suffix = '%',
}: {
  data: Record<string, unknown>[]
  labelKey: string
  valueKey: string
  height?: number
  suffix?: string
}) {
  return (
    <ChartFrame height={height}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 4, right: 16, bottom: 4, left: 8 }}
        barCategoryGap={10}
      >
        <CartesianGrid {...GRID} horizontal={false} vertical />
        <XAxis type="number" domain={[0, 100]} {...AXIS} />
        <YAxis
          type="category"
          dataKey={labelKey}
          {...AXIS}
          width={96}
          tick={{ fontSize: 11, fill: 'hsl(var(--foreground))' }}
        />
        <Tooltip
          content={<GlassTooltip suffix={suffix} />}
          cursor={{ fill: 'hsl(var(--muted)/0.4)' }}
        />
        <Bar dataKey={valueKey} radius={[0, 8, 8, 0]} isAnimationActive animationDuration={900}>
          {data.map((d, i) => (
            <Cell key={i} fill={ragColor(Number(d[valueKey]) || 0)} />
          ))}
        </Bar>
      </BarChart>
    </ChartFrame>
  )
}

/* ─── Skill radar ─────────────────────────────────────────────────── */

export function SkillRadar({
  data,
  angleKey,
  valueKey,
  height = 280,
  color = SERIES[1],
}: {
  data: Record<string, unknown>[]
  angleKey: string
  valueKey: string
  height?: number
  color?: string
}) {
  return (
    <ChartFrame height={height}>
      <RadarChart data={data} outerRadius="72%">
        <PolarGrid stroke="hsl(var(--border))" />
        <PolarAngleAxis
          dataKey={angleKey}
          tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
        />
        <Radar
          dataKey={valueKey}
          stroke={color}
          fill={color}
          fillOpacity={0.3}
          isAnimationActive
          animationDuration={900}
        />
        <Tooltip content={<GlassTooltip suffix="%" />} />
      </RadarChart>
    </ChartFrame>
  )
}

/* ─── Heatmap (CSS grid — no recharts) ─────────────────────────────── */

export function Heatmap({
  rows,
  cols,
  getValue,
  getLabel,
}: {
  rows: string[]
  cols: string[]
  /** 0–100 intensity for cell (rowIndex, colIndex). */
  getValue: (r: number, c: number) => number
  getLabel?: (r: number, c: number) => string
}) {
  return (
    <div className="overflow-x-auto">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `minmax(80px,auto) repeat(${cols.length}, minmax(28px,1fr))`,
        }}
      >
        <div />
        {cols.map((c) => (
          <div
            key={c}
            className="pb-1 text-center font-mono text-[9px] uppercase tracking-wider text-muted-foreground"
          >
            {c}
          </div>
        ))}
        {rows.map((r, ri) => (
          <React.Fragment key={r}>
            <div className="flex items-center pr-2 text-xs text-foreground">{r}</div>
            {cols.map((_, ci) => {
              const v = getValue(ri, ci)
              return (
                <div
                  key={ci}
                  title={getLabel?.(ri, ci) ?? `${Math.round(v)}%`}
                  className="aspect-square rounded-[4px] transition-transform hover:scale-110"
                  style={{
                    background: ragColor(v),
                    opacity: 0.25 + (Math.max(0, Math.min(100, v)) / 100) * 0.75,
                  }}
                />
              )
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export { RAG }
