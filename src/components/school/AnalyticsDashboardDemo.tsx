'use client'

import {
  Activity,
  AlertTriangle,
  BarChart3,
  Brain,
  BookOpen,
  CheckCircle,
  ClipboardCheck,
  GraduationCap,
  MessageSquare,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'

// ─── Static mock data ─────────────────────────────────────────────────────────

const STATS = [
  { label: 'Students', value: '342', icon: Users, accent: 'text-teal-500', bg: 'bg-teal-500/15' },
  { label: 'Teachers', value: '18', icon: BookOpen, accent: 'text-primary', bg: 'bg-primary/15' },
  { label: 'Classes', value: '12', icon: Brain, accent: 'text-sage-500', bg: 'bg-sage-500/15' },
  {
    label: 'Active This Week',
    value: '89%',
    icon: TrendingUp,
    accent: 'text-clay-500',
    bg: 'bg-clay-500/15',
  },
]

// Year-on-year and cohort breakdown - sized realistically against 342 students:
//  - 67% on track  → 229
//  - 8% at risk    → 27
//  - 14% EAL       → 48
const STATS_EXTRA = [
  {
    label: 'Avg Attainment',
    value: '5.6 → 6.1',
    sub: 'Year-on-year',
    icon: GraduationCap,
    accent: 'text-primary',
    bg: 'bg-primary/15',
  },
  {
    label: 'On Track',
    value: '67%',
    sub: '229 students',
    icon: ClipboardCheck,
    accent: 'text-teal-500',
    bg: 'bg-teal-500/15',
  },
  {
    label: 'At Risk',
    value: '8%',
    sub: '27 students',
    icon: AlertTriangle,
    accent: 'text-clay-500',
    bg: 'bg-clay-500/15',
  },
  {
    label: 'EAL Cohort',
    value: '14%',
    sub: '48 students',
    icon: Sparkles,
    accent: 'text-sage-500',
    bg: 'bg-sage-500/15',
  },
]

// Lightweight sparkline series per year group - used in the table to show the
// last 6 data points (term-on-term avg score).
const YEAR_GROUPS = [
  {
    year: 'Year 7',
    students: 58,
    avg: 71,
    progress: 71,
    trend: '+4%',
    spark: [62, 64, 66, 67, 69, 71],
  },
  {
    year: 'Year 8',
    students: 54,
    avg: 68,
    progress: 68,
    trend: '+2%',
    spark: [64, 65, 66, 66, 67, 68],
  },
  {
    year: 'Year 9',
    students: 49,
    avg: 74,
    progress: 74,
    trend: '+6%',
    spark: [62, 65, 67, 70, 72, 74],
  },
  {
    year: 'Year 10',
    students: 62,
    avg: 66,
    progress: 66,
    trend: '-1%',
    spark: [68, 67, 67, 66, 67, 66],
  },
  {
    year: 'Year 11',
    students: 57,
    avg: 78,
    progress: 78,
    trend: '+8%',
    spark: [66, 69, 72, 74, 76, 78],
  },
  {
    year: 'Year 12',
    students: 34,
    avg: 82,
    progress: 82,
    trend: '+3%',
    spark: [77, 78, 79, 80, 81, 82],
  },
  {
    year: 'Year 13',
    students: 28,
    avg: 85,
    progress: 85,
    trend: '+5%',
    spark: [78, 80, 81, 83, 84, 85],
  },
]

const AT_RISK_STUDENTS = [
  {
    name: 'Marcus Thompson',
    year: 'Y10',
    issue: 'No activity in 14 days',
    severity: 'high',
    class: '10B English',
  },
  {
    name: 'Priya Sharma',
    year: 'Y11',
    issue: '3 missed assignments',
    severity: 'high',
    class: '11A Literature',
  },
  {
    name: 'Callum Wood',
    year: 'Y9',
    issue: 'Grade drop: 7 to 5',
    severity: 'medium',
    class: '9C English',
  },
  {
    name: 'Nathan Wright',
    year: 'Y11',
    issue: 'Mock results down 1 grade',
    severity: 'high',
    class: '11B English',
  },
  {
    name: 'Amelia Banks',
    year: 'Y13',
    issue: 'Coursework deadline missed',
    severity: 'high',
    class: '13 AQA Lang',
  },
  {
    name: 'Daniel Kowalski',
    year: 'Y8',
    issue: 'Attendance + engagement low',
    severity: 'medium',
    class: '8B English',
  },
]

const TOP_CLASSES = [
  { name: '11A Literature', teacher: 'Ms. Okafor', avg: 84 },
  { name: '13B English Lang.', teacher: 'Mr. Patel', avg: 81 },
  { name: '12A English Lit.', teacher: 'Ms. Rahman', avg: 79 },
  { name: '9C English', teacher: 'Mr. Davies', avg: 76 },
]

const COMPLETION_RINGS = [
  { label: 'Essays', pct: 91, color: 'var(--cd-teal)' },
  { label: 'Worksheets', pct: 87, color: 'var(--cd-primary)' },
  { label: 'Quizzes', pct: 94, color: 'var(--cd-sage)' },
  { label: 'Reading', pct: 78, color: 'var(--cd-clay)' },
]

const RECENT_ACTIVITY = [
  {
    icon: ClipboardCheck,
    text: 'Ms. Patel marked 23 essays',
    time: '2h ago',
    accent: 'text-teal-500',
    bg: 'bg-teal-500/15',
  },
  {
    icon: GraduationCap,
    text: 'Y10 mock exam results imported',
    time: 'Yesterday',
    accent: 'text-primary',
    bg: 'bg-primary/15',
  },
  {
    icon: MessageSquare,
    text: '12 students received intervention feedback',
    time: 'This morning',
    accent: 'text-clay-500',
    bg: 'bg-clay-500/15',
  },
  {
    icon: Activity,
    text: 'Department averages updated',
    time: 'Today',
    accent: 'text-sage-500',
    bg: 'bg-sage-500/15',
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function progressColor(pct: number): string {
  if (pct >= 78) return 'bg-teal-500'
  if (pct >= 65) return 'bg-ochre-500'
  return 'bg-clay-500'
}

function isPositiveTrend(trend: string): boolean {
  return trend.startsWith('+')
}

// Tiny inline sparkline (no JS) - pure SVG path from a numeric series.
function MiniSpark({ values, positive }: { values: number[]; positive: boolean }) {
  if (values.length < 2) return null
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1
  const width = 56
  const height = 16
  const stepX = width / (values.length - 1)
  const points = values
    .map((v, i) => {
      const x = i * stepX
      const y = height - ((v - min) / range) * height
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
  const stroke = positive ? 'hsl(var(--primary))' : 'rgb(198 90 51)' // clay-500
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="shrink-0"
      aria-hidden="true"
    >
      <polyline
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  )
}

// SVG donut ring - animated stroke-dasharray for the filled arc, with the
// percentage rendered in the centre.
function DonutRing({ pct, color, label }: { pct: number; color: string; label: string }) {
  const size = 72
  const stroke = 7
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const dash = (pct / 100) * c
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="hsl(var(--foreground) / 0.08)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${c - dash}`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <span className="absolute font-heading text-sm font-bold tabular-nums text-foreground">
          {pct}%
        </span>
      </div>
      <p className="text-[11px] font-medium text-muted-foreground">{label}</p>
    </div>
  )
}

// ─── Section: Stats Row ───────────────────────────────────────────────────────

function StatTile({
  label,
  value,
  sub,
  icon: Icon,
  accent,
  bg,
}: {
  label: string
  value: string
  sub?: string
  icon: React.ElementType
  accent: string
  bg: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-foreground/[0.02] p-3">
      <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-lg', bg)}>
        <Icon className={cn('h-4 w-4', accent)} />
      </div>
      <div className="min-w-0">
        <p className="font-heading text-lg font-bold leading-none tabular-nums text-foreground">
          {value}
        </p>
        <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
          {label}
          {sub && <span className="ml-1 opacity-70">· {sub}</span>}
        </p>
      </div>
    </div>
  )
}

function StatsSection() {
  return (
    <GlassPanel accent="primary" className="p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
            <BarChart3 className="h-4 w-4 text-primary" />
          </span>
          <div>
            <PanelEyebrow>Overview</PanelEyebrow>
            <p className="font-heading text-sm font-bold text-foreground">School at a glance</p>
          </div>
        </div>
        <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[11px] font-semibold text-teal-600">
          Spring Term · live
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {STATS.map((s) => (
          <StatTile key={s.label} {...s} />
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {STATS_EXTRA.map((s) => (
          <StatTile key={s.label} {...s} />
        ))}
      </div>
    </GlassPanel>
  )
}

// ─── Section: Year Group Table ────────────────────────────────────────────────

function YearGroupSection() {
  return (
    <GlassPanel accent="teal">
      <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/15">
            <BarChart3 className="h-4 w-4 text-teal-500" />
          </span>
          <div>
            <PanelEyebrow>Year groups</PanelEyebrow>
            <p className="font-heading text-sm font-bold text-foreground">Year Group Overview</p>
          </div>
        </div>
        <span className="hidden text-[11px] text-muted-foreground sm:inline">
          Avg. score this term · delta vs last term
        </span>
      </div>
      <div className="divide-y divide-border/40">
        {YEAR_GROUPS.map((row) => {
          const positive = isPositiveTrend(row.trend)
          return (
            <div key={row.year} className="flex items-center gap-3 px-4 py-2.5">
              <p className="w-16 shrink-0 text-xs font-semibold text-foreground">{row.year}</p>
              <p className="w-16 shrink-0 text-[11px] text-muted-foreground">
                {row.students} pupils
              </p>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/[0.06]">
                <div
                  className={cn('h-full rounded-full transition-all', progressColor(row.progress))}
                  style={{ width: `${row.progress}%` }}
                />
              </div>
              <MiniSpark values={row.spark} positive={positive} />
              <p className="w-6 shrink-0 text-right font-heading text-sm font-bold tabular-nums text-foreground">
                {row.avg}
              </p>
              <p
                className={cn(
                  'flex w-14 shrink-0 items-center justify-end gap-0.5 text-right text-[11px] font-semibold tabular-nums',
                  positive ? 'text-teal-600' : 'text-clay-600',
                )}
              >
                <span aria-hidden="true">{positive ? '▲' : '▼'}</span>
                {row.trend}
              </p>
            </div>
          )
        })}
      </div>
    </GlassPanel>
  )
}

// ─── Section: At-Risk Students ────────────────────────────────────────────────

function initialsFor(name: string): string {
  const parts = name.split(' ').filter(Boolean)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function AtRiskSection() {
  return (
    <GlassPanel accent="clay">
      <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-clay-500/15">
            <AlertTriangle className="h-4 w-4 text-clay-600" />
          </span>
          <div>
            <PanelEyebrow>Risk register</PanelEyebrow>
            <p className="font-heading text-sm font-bold text-foreground">At-Risk Students</p>
          </div>
        </div>
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-clay-500 px-1.5 text-[10px] font-bold text-white">
          {AT_RISK_STUDENTS.length}
        </span>
      </div>
      <ul className="divide-y divide-border/40">
        {AT_RISK_STUDENTS.map((s) => {
          const isHigh = s.severity === 'high'
          return (
            <li key={s.name} className="flex items-start gap-3 px-4 py-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay-500/15 text-[11px] font-bold text-clay-600">
                {initialsFor(s.name)}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-semibold text-foreground">{s.name}</p>
                  <span
                    className={cn(
                      'inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold',
                      isHigh ? 'bg-clay-500/20 text-clay-700' : 'bg-ochre-500/20 text-ochre-600',
                    )}
                  >
                    {isHigh && <AlertTriangle className="h-3 w-3" aria-hidden="true" />}
                    {!isHigh && <AlertTriangle className="h-3 w-3" aria-hidden="true" />}
                    {isHigh ? 'High' : 'Medium'}
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  {s.class} · {s.year}
                </p>
                <p className="mt-0.5 text-[11px] text-clay-600">{s.issue}</p>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="border-t border-border/50 px-4 py-2.5">
        <button
          type="button"
          className="text-[11px] font-semibold text-clay-600 transition-colors hover:text-clay-700"
        >
          View all interventions &rarr;
        </button>
      </div>
    </GlassPanel>
  )
}

// ─── Section: Top Classes ─────────────────────────────────────────────────────

function TopClassesSection() {
  const max = Math.max(...TOP_CLASSES.map((c) => c.avg))
  return (
    <GlassPanel accent="sage">
      <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sage-500/15">
          <Star className="h-4 w-4 text-sage-600" />
        </span>
        <div>
          <PanelEyebrow>Leaderboard</PanelEyebrow>
          <p className="font-heading text-sm font-bold text-foreground">Top Classes</p>
        </div>
      </div>
      <ul className="space-y-3 px-4 py-3">
        {TOP_CLASSES.map((cls, i) => (
          <li key={cls.name} className="space-y-1.5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-500/15 text-[10px] font-bold text-sage-600">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">{cls.name}</p>
                  <p className="text-[11px] text-muted-foreground">{cls.teacher}</p>
                </div>
              </div>
              <span className="shrink-0 font-heading text-base font-bold tabular-nums text-foreground">
                {cls.avg}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-foreground/[0.06]">
              <div
                className="h-full rounded-full bg-teal-500/40 transition-all"
                style={{ width: `${(cls.avg / max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </GlassPanel>
  )
}

// ─── Section: Assignment Completion ──────────────────────────────────────────

function CompletionSection() {
  return (
    <GlassPanel accent="ochre">
      <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ochre-500/15">
          <CheckCircle className="h-4 w-4 text-ochre-500" />
        </span>
        <div>
          <PanelEyebrow>Completion</PanelEyebrow>
          <p className="font-heading text-sm font-bold text-foreground">Assignment Completion</p>
        </div>
      </div>
      <div className="flex items-center justify-around gap-2 px-4 py-5">
        {COMPLETION_RINGS.map((r, i) => {
          // Map the per-ring CSS variable string back to a real colour
          const colorMap: Record<string, string> = {
            'var(--cd-teal)': 'rgb(53 125 119)',
            'var(--cd-primary)': 'hsl(var(--primary))',
            'var(--cd-sage)': 'rgb(107 138 107)',
            'var(--cd-clay)': 'rgb(198 90 51)',
          }
          return (
            <DonutRing
              key={r.label}
              pct={r.pct}
              color={colorMap[r.color] ?? 'hsl(var(--primary))'}
              label={r.label}
            />
          )
        })}
      </div>
      <div className="flex items-center justify-between border-t border-border/50 px-4 py-2.5">
        <span className="text-[11px] text-muted-foreground">Overall rate this term</span>
        <span className="font-heading text-sm font-bold text-teal-600">88%</span>
      </div>
    </GlassPanel>
  )
}

// ─── Section: Recent Activity ────────────────────────────────────────────────

function RecentActivitySection() {
  return (
    <GlassPanel accent="teal">
      <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.06]">
          <Activity className="h-4 w-4 text-muted-foreground" />
        </span>
        <div>
          <PanelEyebrow>Pulse</PanelEyebrow>
          <p className="font-heading text-sm font-bold text-foreground">Recent activity</p>
        </div>
      </div>
      <ol className="divide-y divide-border/40">
        {RECENT_ACTIVITY.map((row, i) => {
          const Icon = row.icon
          return (
            <li key={i} className="flex items-center gap-3 px-4 py-2.5">
              <span
                className={cn(
                  'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                  row.bg,
                )}
              >
                <Icon className={cn('h-4 w-4', row.accent)} />
              </span>
              <p className="flex-1 truncate text-xs text-foreground">{row.text}</p>
              <span className="shrink-0 text-[11px] tabular-nums text-muted-foreground">
                {row.time}
              </span>
            </li>
          )
        })}
      </ol>
    </GlassPanel>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function AnalyticsDashboardDemo() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-background/40 shadow-2xl backdrop-blur-xl">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-foreground/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-clay-500/80" />
        <span className="h-3 w-3 rounded-full bg-ochre-500/80" />
        <span className="h-3 w-3 rounded-full bg-teal-500/80" />
        <div className="ml-4 flex items-center gap-1.5 rounded-md bg-foreground/[0.05] px-3 py-1">
          <BarChart3 className="h-3 w-3 text-muted-foreground" />
          <span className="font-mono text-[11px] text-muted-foreground">
            englishhub.ai / admin / analytics
          </span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500" />
          <span className="font-mono text-[11px] text-muted-foreground">Live</span>
        </div>
      </div>

      {/* Dashboard header */}
      <div className="flex items-center justify-between border-b border-border/60 bg-foreground/[0.02] px-5 py-3">
        <div>
          <h2 className="font-heading text-base font-bold text-foreground">School Dashboard</h2>
          <p className="mt-0.5 text-[11px] text-muted-foreground">
            Ashworth Academy &bull; Spring Term 2026
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[11px] font-semibold text-teal-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500" />
          All systems healthy
        </span>
      </div>

      {/* Dashboard body */}
      <div className="space-y-4 p-4">
        <StatsSection />
        <YearGroupSection />

        <div className="grid gap-4 lg:grid-cols-2">
          <AtRiskSection />
          <TopClassesSection />
        </div>

        <CompletionSection />
        <RecentActivitySection />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border/60 bg-foreground/[0.02] px-5 py-2.5">
        <span className="font-mono text-[11px] text-muted-foreground/70">
          Last updated: just now
        </span>
        <span className="font-mono text-[11px] text-muted-foreground/70">
          Data refreshes every 15 min &bull; GDPR compliant
        </span>
      </div>
    </div>
  )
}
