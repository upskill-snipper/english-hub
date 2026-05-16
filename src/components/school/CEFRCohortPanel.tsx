'use client'

// ─── CEFR Cohort Panel (teacher / school dashboard) ───────────────────────────
// Renders cohort-level CEFR placement analytics from /api/school/cefr.
//
// Three terminal states, all designed to look intentional:
//   1. Not migrated yet (summary.available === false) → a calm info card
//      explaining it activates automatically once the DB migration lands.
//   2. Available but learnersAssessed === 0 → "no placements yet" note.
//   3. Data → KPI tiles + band distribution + per-skill averages
//      (weakest first) + an optional monthly trend.
//
// English-only by design: the rest of the school dashboard
// (StatCard, GradeDistributionChart, the analytics page) is EN.
// Visual language matches the school analytics page — the cinematic
// "glass + Recharts" dataviz layer (GlassPanel / RankBars / TrendArea).
// ──────────────────────────────────────────────────────────────────────────────

import { useEffect, useMemo, useState } from 'react'
import { GraduationCap, Layers, Info, TrendingUp } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { CEFR_BAND_DESCRIPTION } from '@/lib/eal/cefr-aggregate'
import { CEFR_PRODUCT_BANDS, type CEFRBand } from '@/lib/eal/cefr'
import { EAL_CATEGORY_LABEL } from '@/lib/eal/types'
import type { EALCategory } from '@/lib/eal/types'
import { GlassPanel, PanelEyebrow, KpiTile, RankBars, TrendArea } from '@/components/dataviz'

// ── Types (mirror CEFRCohortSummary from the shared aggregate lib) ────────────

interface SkillAverage {
  skill: EALCategory
  averagePct: number
  sampleSize: number
}

interface TrendPoint {
  month: string
  averageBandRank: number
  placements: number
}

interface CEFRCohortSummary {
  available: boolean
  learnersAssessed: number
  totalPlacements: number
  bandDistribution: Record<CEFRBand, number>
  skillAverages: SkillAverage[]
  latestByUser: unknown[]
  trend: TrendPoint[]
}

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Format a YYYY-MM month key as e.g. "May 2026". */
function formatMonth(month: string): string {
  const [y, m] = month.split('-').map(Number)
  if (!y || !m) return month
  const d = new Date(Date.UTC(y, m - 1, 1))
  return d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}

// ── Panel shell ──────────────────────────────────────────────────────────────

/** Cinematic header used by every state so the panel reads consistently. */
function PanelShell({ children }: { children: React.ReactNode }) {
  return (
    <GlassPanel accent="primary" as="section" aria-labelledby="cefr-cohort-heading">
      <div className="flex items-start gap-3 border-b border-border/50 p-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-foreground/[0.06]">
          <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <PanelEyebrow>CEFR Placement</PanelEyebrow>
          <h2
            id="cefr-cohort-heading"
            className="font-heading text-lg font-bold tracking-tight text-foreground"
          >
            CEFR Placement Overview
          </h2>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Cohort-level English proficiency from the CEFR placement test (A2–C1).
          </p>
        </div>
      </div>
      <div className="p-5">{children}</div>
    </GlassPanel>
  )
}

// ── Main component ───────────────────────────────────────────────────────────

export function CEFRCohortPanel() {
  const [summary, setSummary] = useState<CEFRCohortSummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    async function fetchData() {
      try {
        const res = await fetch('/api/school/cefr')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json: CEFRCohortSummary = await res.json()
        if (!cancelled) setSummary(json)
      } catch {
        if (!cancelled) setError('Could not load CEFR placement analytics.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchData()
    return () => {
      cancelled = true
    }
  }, [])

  // Band distribution as RankBars rows (% of cohort drives RAG colour).
  const bandRows = useMemo(() => {
    if (!summary) return []
    return CEFR_PRODUCT_BANDS.map((band) => {
      const count = summary.bandDistribution[band] ?? 0
      const pctOfCohort =
        summary.learnersAssessed > 0 ? Math.round((count / summary.learnersAssessed) * 100) : 0
      return {
        band: `${band} · ${CEFR_BAND_DESCRIPTION[band]}`,
        pctOfCohort,
        learners: count,
      }
    })
  }, [summary])

  // Per-skill averages — already weakest-first; recharts renders the array
  // top-to-bottom so the order is preserved visually.
  const skillRows = useMemo(() => {
    if (!summary) return []
    return summary.skillAverages.map((s) => ({
      skill: EAL_CATEGORY_LABEL[s.skill]?.en ?? s.skill,
      averagePct: s.averagePct,
      sampleSize: s.sampleSize,
    }))
  }, [summary])

  // Monthly trend — band rank is 0..3; chart over that domain.
  const trendRows = useMemo(() => {
    if (!summary) return []
    return summary.trend.map((p) => ({
      month: formatMonth(p.month),
      averageBandRank: p.averageBandRank,
      placements: p.placements,
    }))
  }, [summary])

  // ── Loading ────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <PanelShell>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Skeleton className="h-24 w-full rounded-2xl" />
            <Skeleton className="h-24 w-full rounded-2xl" />
          </div>
          <Skeleton className="h-40 w-full rounded-2xl" />
        </div>
      </PanelShell>
    )
  }

  // ── Error ──────────────────────────────────────────────────────────────────
  if (error || !summary) {
    return (
      <PanelShell>
        <p className="py-4 text-center text-sm text-muted-foreground">
          {error ?? 'Could not load CEFR placement analytics.'}
        </p>
      </PanelShell>
    )
  }

  // ── Not migrated yet ───────────────────────────────────────────────────────
  if (summary.available === false) {
    return (
      <PanelShell>
        <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-foreground/[0.03] p-4">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            CEFR placement analytics will activate automatically once the database migration is
            applied — no further action needed here.
          </p>
        </div>
      </PanelShell>
    )
  }

  // ── Available but no placements yet ────────────────────────────────────────
  if (summary.learnersAssessed === 0) {
    return (
      <PanelShell>
        <p className="py-4 text-center text-sm text-muted-foreground">
          No students have completed the CEFR placement test yet.
        </p>
      </PanelShell>
    )
  }

  // ── Data ───────────────────────────────────────────────────────────────────
  return (
    <PanelShell>
      <div className="space-y-8">
        {/* ── KPI tiles ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <KpiTile
            label="Learners assessed"
            value={summary.learnersAssessed}
            icon={GraduationCap}
            accent="teal"
          />
          <KpiTile
            label="Total placements taken"
            value={summary.totalPlacements}
            icon={Layers}
            accent="sage"
          />
        </div>

        {/* ── Band distribution ───────────────────────────────────────────── */}
        <div>
          <PanelEyebrow className="mb-3">Band distribution (latest placement)</PanelEyebrow>
          <RankBars
            data={bandRows}
            labelKey="band"
            valueKey="pctOfCohort"
            height={Math.max(160, bandRows.length * 40)}
            suffix="%"
          />
        </div>

        {/* ── Per-skill averages (weakest first) ──────────────────────────── */}
        {skillRows.length > 0 && (
          <div>
            <PanelEyebrow className="mb-3">Average skill scores · weakest first</PanelEyebrow>
            <RankBars
              data={skillRows}
              labelKey="skill"
              valueKey="averagePct"
              height={Math.max(160, skillRows.length * 40)}
              suffix="%"
            />
          </div>
        )}

        {/* ── Monthly trend (mean band rank A2=0 … C1=3) ───────────────────── */}
        {trendRows.length > 0 && (
          <div>
            <PanelEyebrow className="mb-3 flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5" />
              Monthly trend · mean band rank (A2&nbsp;=&nbsp;0 … C1&nbsp;=&nbsp;3)
            </PanelEyebrow>
            <TrendArea
              data={trendRows}
              xKey="month"
              yKey="averageBandRank"
              domain={[0, 3]}
              suffix=""
              height={220}
            />
          </div>
        )}
      </div>
    </PanelShell>
  )
}

export default CEFRCohortPanel
