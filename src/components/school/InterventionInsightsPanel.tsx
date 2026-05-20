// ─── Intervention Insights Panel ─────────────────────────────────────────────
// Premium server-rendered panel that surfaces the school's active intervention
// programme: who is being supported, what type of support is in place, who is
// leading it, and how long it has been running. Designed to live alongside the
// other glass panels on the school demo page.
//
// Server component — no client hooks. Reads from DEMO_AT_RISK_STUDENTS and
// DEMO_STUDENTS only (extra structure is hardcoded inline). All figures are
// synthetic and clearly labelled as demo data.
// ──────────────────────────────────────────────────────────────────────────────

import { AlertTriangle, HeartHandshake, Users, Globe2, Calendar, UserSquare2 } from 'lucide-react'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'
import { DEMO_AT_RISK_STUDENTS, DEMO_STUDENTS } from '@/data/demo-data'

// ─── Intervention taxonomy (hardcoded — no new exports assumed) ─────────────

interface InterventionType {
  key: string
  label: string
  count: number
  description: string
}

interface MonitoredStudent {
  name: string
  yearGroup: string
  interventionType: string
  started: string
  ledBy: string
}

const INTERVENTION_TYPES: InterventionType[] = [
  {
    key: 'one-to-one',
    label: 'One-to-one tutoring',
    count: 11,
    description: 'Weekly 30-min sessions with subject teacher',
  },
  {
    key: 'small-group',
    label: 'Small-group catch-up',
    count: 9,
    description: 'Groups of 3-5 students, twice weekly',
  },
  {
    key: 'parental-contact',
    label: 'Parental contact',
    count: 7,
    description: 'Structured home-school communication plan',
  },
  {
    key: 'reading-support',
    label: 'Reading support',
    count: 6,
    description: 'Targeted decoding & fluency intervention',
  },
  {
    key: 'eal-support',
    label: 'EAL language support',
    count: 5,
    description: 'In-class scaffolding + dedicated EAL slots',
  },
]

// ─── Helpers ────────────────────────────────────────────────────────────────

function initialsFor(name: string): string {
  const parts = name.split(' ').filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

// ─── Component ──────────────────────────────────────────────────────────────

export function InterventionInsightsPanel() {
  // KPI inputs ---------------------------------------------------------------
  const totalActiveInterventions = INTERVENTION_TYPES.reduce((sum, t) => sum + t.count, 0)
  const studentsSupported = DEMO_AT_RISK_STUDENTS.length + 18 // at-risk + ongoing
  // ~14% of the 342-student baseline is the EAL cohort (matches the demo
  // dashboard's headline figure). Computed inline so we don't depend on a new
  // export the parallel agent may not have shipped.
  const ealCohortSize = Math.round(342 * 0.14)
  const total = totalActiveInterventions

  // Monitored students — blend real at-risk students with synthetic structure
  const baseStudents: MonitoredStudent[] = DEMO_AT_RISK_STUDENTS.slice(0, 5).map((s, i) => {
    const types = [
      'One-to-one tutoring',
      'Small-group catch-up',
      'Reading support',
      'Parental contact plan',
      'EAL language support',
    ]
    const teachers = [
      'Sarah Mitchell',
      'James Patterson',
      'David Okonkwo',
      'Fatima Al-Hassan',
      'Robert Patel',
    ]
    const startedDays = [3, 8, 14, 21, 26]
    return {
      name: s.name,
      yearGroup: s.yearGroup,
      interventionType: types[i % types.length],
      started: `${startedDays[i % startedDays.length]} days ago`,
      ledBy: teachers[i % teachers.length],
    }
  })

  // Pad with a friendly anonymised demo entry so the list reads as 6 rows
  const sixthStudent: MonitoredStudent = {
    name: DEMO_STUDENTS[10]?.name ?? 'Reece Anderson',
    yearGroup: DEMO_STUDENTS[10]?.yearGroup ?? 'Year 8',
    interventionType: 'Small-group catch-up',
    started: '11 days ago',
    ledBy: 'Emma Thornton',
  }
  const monitored: MonitoredStudent[] = [...baseStudents, sixthStudent].slice(0, 6)

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <GlassPanel accent="clay" as="section" aria-labelledby="intervention-insights-heading">
      {/* Header */}
      <div className="flex items-start gap-3 border-b border-border/50 p-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-clay-500/15">
          <HeartHandshake className="h-4 w-4 text-clay-600" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <PanelEyebrow>Intervention Insights</PanelEyebrow>
          <h2
            id="intervention-insights-heading"
            className="font-heading text-lg font-bold tracking-tight text-foreground"
          >
            Active interventions across the school
          </h2>
          <p className="mt-0.5 text-sm text-muted-foreground">
            A live view of which students are being supported, what kind of help is in place, and
            which staff are leading the work.
          </p>
        </div>
      </div>

      <div className="space-y-8 p-5">
        {/* ── 1. Headline KPI tiles ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <KpiCard
            label="Active interventions"
            value={totalActiveInterventions}
            icon={AlertTriangle}
            tint="clay"
            sub="Across all year groups"
          />
          <KpiCard
            label="Students supported"
            value={studentsSupported}
            icon={Users}
            tint="teal"
            sub={`${Math.round((studentsSupported / 342) * 100)}% of cohort`}
          />
          <KpiCard
            label="EAL cohort"
            value={ealCohortSize}
            icon={Globe2}
            tint="sage"
            sub="Receiving language support"
          />
        </div>

        {/* ── 2. Intervention type breakdown ──────────────────────────────── */}
        <div>
          <PanelEyebrow className="mb-3">Intervention mix · this term</PanelEyebrow>
          <ul className="space-y-2.5">
            {INTERVENTION_TYPES.map((t) => {
              const pct = total > 0 ? Math.round((t.count / total) * 100) : 0
              return (
                <li key={t.key} className="space-y-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-sm font-semibold text-foreground">{t.label}</p>
                    <p className="shrink-0 text-xs tabular-nums text-muted-foreground">
                      <span className="font-semibold text-foreground">{t.count}</span>
                      <span className="ml-1.5 opacity-70">· {pct}%</span>
                    </p>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-foreground/[0.06]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-clay-500/70 to-clay-500/40"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="text-[11px] leading-tight text-muted-foreground/80">
                    {t.description}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>

        {/* ── 3. Currently monitored students ─────────────────────────────── */}
        <div>
          <PanelEyebrow className="mb-3">Currently monitored · last 4 weeks</PanelEyebrow>
          <ul className="divide-y divide-border/50 overflow-hidden rounded-xl border border-border/60 bg-foreground/[0.02]">
            {monitored.map((s) => (
              <li key={`${s.name}-${s.interventionType}`} className="flex items-center gap-3 p-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clay-500/15 text-[11px] font-bold text-clay-600">
                  {initialsFor(s.name)}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="truncate text-sm font-semibold text-foreground">{s.name}</p>
                    <span className="shrink-0 rounded-full bg-foreground/[0.06] px-2 py-0.5 text-[10px] font-medium tabular-nums text-muted-foreground">
                      {s.yearGroup}
                    </span>
                  </div>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">
                    {s.interventionType}
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground/80">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      Started {s.started}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <UserSquare2 className="h-3 w-3" aria-hidden="true" />
                      Led by {s.ledBy}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── 4. Synthetic-data footnote ──────────────────────────────────── */}
        <p className="text-center text-[11px] italic text-muted-foreground/70">
          Synthetic data — demo only. Intervention figures are illustrative and do not represent a
          real cohort.
        </p>
      </div>
    </GlassPanel>
  )
}

// ─── KPI Sub-component ──────────────────────────────────────────────────────

function KpiCard({
  label,
  value,
  icon: Icon,
  tint,
  sub,
}: {
  label: string
  value: number
  icon: React.ElementType
  tint: 'clay' | 'teal' | 'sage'
  sub: string
}) {
  const tintMap: Record<typeof tint, { bg: string; fg: string }> = {
    clay: { bg: 'bg-clay-500/15', fg: 'text-clay-600' },
    teal: { bg: 'bg-teal-500/15', fg: 'text-teal-600' },
    sage: { bg: 'bg-sage-500/15', fg: 'text-sage-600' },
  }
  const t = tintMap[tint]
  return (
    <div className="rounded-xl border border-border/60 bg-foreground/[0.02] p-4">
      <div className="flex items-start justify-between gap-3">
        <PanelEyebrow>{label}</PanelEyebrow>
        <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${t.bg}`}>
          <Icon className={`h-3.5 w-3.5 ${t.fg}`} aria-hidden="true" />
        </span>
      </div>
      <p className="mt-2 font-heading text-3xl font-bold tabular-nums tracking-tight text-foreground">
        {value}
      </p>
      <p className="mt-0.5 text-[11px] text-muted-foreground">{sub}</p>
    </div>
  )
}

export default InterventionInsightsPanel
