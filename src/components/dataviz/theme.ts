// ─── Premium dataviz theme ────────────────────────────────────────────────────
// Shared palette + helpers for the school/teacher "cinematic glass" data
// visualisation layer. Colours are the site's own brand accents (teal /
// clay / ochre / sage) + the existing --chart-* CSS vars, NOT generic
// neon - so the premium look stays on-theme in both light and dark.
// ──────────────────────────────────────────────────────────────────────────────

/** Ordered categorical series palette (brand accents). */
export const SERIES = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
] as const

/** Semantic performance colours (RAG), tuned for the dark glass surface. */
export const RAG = {
  high: 'hsl(152 60% 45%)',
  mid: 'hsl(35 85% 55%)',
  low: 'hsl(0 72% 58%)',
} as const

export function ragColor(pct: number): string {
  if (pct >= 70) return RAG.high
  if (pct >= 50) return RAG.mid
  return RAG.low
}

/** Stable gradient ids so <defs> can be referenced across a chart. */
export const GRAD = {
  area: 'eh-grad-area',
  areaAlt: 'eh-grad-area-alt',
  bar: 'eh-grad-bar',
  radial: 'eh-grad-radial',
} as const

/** Recharts axis/grid styling shared by every chart (muted, low-contrast). */
export const AXIS = {
  stroke: 'hsl(var(--muted-foreground))',
  fontSize: 11,
  tickLine: false,
  axisLine: false,
} as const

export const GRID = {
  stroke: 'hsl(var(--border))',
  strokeDasharray: '3 6',
  vertical: false,
} as const

/** Format a 0-100 value as a percentage string. */
export const pct = (v: number | null | undefined): string => (v == null ? '-' : `${Math.round(v)}%`)

/** Compact integer formatting (1,284 → 1.3k on tight axes). */
export function compact(n: number): string {
  if (Math.abs(n) >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`
  return String(n)
}
