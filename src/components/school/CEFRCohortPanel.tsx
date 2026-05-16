'use client'

// ─── CEFR Cohort Panel (teacher / school dashboard) ───────────────────────────
// Renders cohort-level CEFR placement analytics from /api/school/cefr.
//
// Three terminal states, all designed to look intentional:
//   1. Not migrated yet (summary.available === false) → a calm info card
//      explaining it activates automatically once the DB migration lands.
//   2. Available but learnersAssessed === 0 → "no placements yet" note.
//   3. Data → stat tiles + band distribution + per-skill averages
//      (weakest first) + an optional monthly trend.
//
// English-only by design: the rest of the school dashboard
// (StatCard, GradeDistributionChart, the analytics page) is EN.
// Visual language matches the school analytics page (Card / muted bars).
// ──────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react'
import { GraduationCap, Layers, Info, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { CEFR_BAND_DESCRIPTION } from '@/lib/eal/cefr-aggregate'
import { CEFR_PRODUCT_BANDS, type CEFRBand } from '@/lib/eal/cefr'
import { EAL_CATEGORY_LABEL } from '@/lib/eal/types'
import type { EALCategory } from '@/lib/eal/types'

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

/** Tailwind bar colour per product band — low→high reads cool→warm-positive. */
const BAND_BAR: Record<CEFRBand, string> = {
  A2: 'bg-red-500',
  B1: 'bg-orange-500',
  B2: 'bg-blue-500',
  C1: 'bg-green-500',
}

function skillBarColor(pct: number): string {
  if (pct >= 70) return 'bg-green-500'
  if (pct >= 50) return 'bg-amber-500'
  if (pct >= 35) return 'bg-orange-500'
  return 'bg-red-500'
}

/** Format a YYYY-MM month key as e.g. "May 2026". */
function formatMonth(month: string): string {
  const [y, m] = month.split('-').map(Number)
  if (!y || !m) return month
  const d = new Date(Date.UTC(y, m - 1, 1))
  return d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}

// ── Sub-components ───────────────────────────────────────────────────────────

function StatTile({
  icon: Icon,
  label,
  value,
  iconClass,
}: {
  icon: React.ElementType
  label: string
  value: string | number
  iconClass?: string
}) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-border/40 bg-muted/20 px-4 py-3.5">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg shrink-0 ${iconClass ?? 'bg-primary/10 text-primary'}`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground font-medium">{label}</p>
        <p className="text-3xl font-bold tracking-tight leading-none mt-1 tabular-nums">{value}</p>
      </div>
    </div>
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

  const cardHeader = (
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <GraduationCap className="h-4 w-4 text-primary" />
        CEFR Placement Overview
      </CardTitle>
      <CardDescription>
        Cohort-level English proficiency from the CEFR placement test (A2–C1).
      </CardDescription>
    </CardHeader>
  )

  // ── Loading ────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <Card>
        {cardHeader}
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Skeleton className="h-20 w-full rounded-lg" />
            <Skeleton className="h-20 w-full rounded-lg" />
          </div>
          <Skeleton className="h-32 w-full rounded-lg" />
        </CardContent>
      </Card>
    )
  }

  // ── Error ──────────────────────────────────────────────────────────────────
  if (error || !summary) {
    return (
      <Card>
        {cardHeader}
        <CardContent>
          <p className="text-sm text-muted-foreground py-4 text-center">
            {error ?? 'Could not load CEFR placement analytics.'}
          </p>
        </CardContent>
      </Card>
    )
  }

  // ── Not migrated yet ───────────────────────────────────────────────────────
  if (summary.available === false) {
    return (
      <Card>
        {cardHeader}
        <CardContent>
          <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-muted/30 p-4">
            <Info className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              CEFR placement analytics will activate automatically once the database migration is
              applied — no further action needed here.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // ── Available but no placements yet ────────────────────────────────────────
  if (summary.learnersAssessed === 0) {
    return (
      <Card>
        {cardHeader}
        <CardContent>
          <p className="text-sm text-muted-foreground py-4 text-center">
            No students have completed the CEFR placement test yet.
          </p>
        </CardContent>
      </Card>
    )
  }

  // ── Data ───────────────────────────────────────────────────────────────────
  const maxBandCount = Math.max(
    ...CEFR_PRODUCT_BANDS.map((b) => summary.bandDistribution[b] ?? 0),
    1,
  )
  const maxTrendVolume = Math.max(...summary.trend.map((p) => p.placements), 1)

  return (
    <Card>
      {cardHeader}
      <CardContent className="space-y-8">
        {/* ── Stat tiles ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <StatTile
            icon={GraduationCap}
            label="Learners assessed"
            value={summary.learnersAssessed.toLocaleString()}
            iconClass="bg-purple-500/10 text-purple-400"
          />
          <StatTile
            icon={Layers}
            label="Total placements taken"
            value={summary.totalPlacements.toLocaleString()}
            iconClass="bg-blue-500/10 text-blue-400"
          />
        </div>

        {/* ── Band distribution ───────────────────────────────────────────── */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Band distribution (latest placement)
          </p>
          <div className="space-y-3">
            {CEFR_PRODUCT_BANDS.map((band) => {
              const count = summary.bandDistribution[band] ?? 0
              const pctOfMax = Math.round((count / maxBandCount) * 100)
              const pctOfCohort =
                summary.learnersAssessed > 0
                  ? Math.round((count / summary.learnersAssessed) * 100)
                  : 0
              return (
                <div key={band} className="space-y-1">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-medium">
                      <span className="tabular-nums">{band}</span>{' '}
                      <span className="text-muted-foreground">{CEFR_BAND_DESCRIPTION[band]}</span>
                    </span>
                    <span className="tabular-nums shrink-0 font-medium">
                      {count} {count === 1 ? 'learner' : 'learners'} · {pctOfCohort}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${BAND_BAR[band]}`}
                      style={{ width: `${pctOfMax}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Per-skill averages (weakest first) ──────────────────────────── */}
        {summary.skillAverages.length > 0 && (
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Average skill scores · weakest first
            </p>
            <div className="space-y-3">
              {summary.skillAverages.map((s) => (
                <div key={s.skill} className="space-y-1">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-medium">
                      {EAL_CATEGORY_LABEL[s.skill]?.en ?? s.skill}
                    </span>
                    <span className="tabular-nums shrink-0 font-medium">
                      {s.averagePct}%{' '}
                      <span className="text-muted-foreground">
                        ({s.sampleSize} {s.sampleSize === 1 ? 'learner' : 'learners'})
                      </span>
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${skillBarColor(s.averagePct)}`}
                      style={{ width: `${Math.max(s.averagePct, 2)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Monthly trend (mean band rank A2=0 … C1=3) ───────────────────── */}
        {summary.trend.length > 0 && (
          <div>
            <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <TrendingUp className="h-3.5 w-3.5" />
              Monthly trend · mean band rank (A2&nbsp;=&nbsp;0 … C1&nbsp;=&nbsp;3)
            </p>
            <div className="space-y-2.5">
              {summary.trend.map((p) => {
                // averageBandRank is 0..3; map to 0..100% of the band ladder.
                const rankPct = Math.round((p.averageBandRank / 3) * 100)
                const volumePct = Math.round((p.placements / maxTrendVolume) * 100)
                return (
                  <div key={p.month} className="space-y-1">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="text-muted-foreground">{formatMonth(p.month)}</span>
                      <span className="tabular-nums shrink-0 font-medium">
                        {p.averageBandRank.toFixed(2)}{' '}
                        <span className="text-muted-foreground">
                          · {p.placements} {p.placements === 1 ? 'placement' : 'placements'}
                        </span>
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full bg-muted overflow-hidden"
                      title={`${p.placements} placements this month`}
                    >
                      <div
                        className="h-full rounded-full bg-purple-500 transition-all duration-500"
                        style={{
                          width: `${Math.max(rankPct, 2)}%`,
                          opacity: 0.4 + (volumePct / 100) * 0.6,
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default CEFRCohortPanel
