'use client'

// ─── CEFR Progress Card (parent dashboard, single child) ──────────────────────
// Renders one linked child's CEFR placement progress from /api/parent/cefr.
// Re-skinned onto the cinematic "glass + Recharts" dataviz layer
// (GlassPanel / RadialScore / RankBars / TrendArea) to match the school
// analytics surface. Data fetching, response shape, and every terminal
// state + its copy are preserved exactly — only the visual layer changed.
// ──────────────────────────────────────────────────────────────────────────────

import { useEffect, useMemo, useState } from 'react'
import { GraduationCap, History, Languages, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { CEFR_BAND_DESCRIPTION, type CEFRCohortSummary } from '@/lib/eal/cefr-aggregate'
import { EAL_CATEGORY_LABEL } from '@/lib/eal/types'
import type { EALCategory } from '@/lib/eal/types'
import {
  GlassPanel,
  PanelEyebrow,
  RadialScore,
  RankBars,
  TrendArea,
  Sparkline,
  SERIES,
} from '@/components/dataviz'

// The parent dashboard is EN — copy is written inline (matching the
// literal-string convention used elsewhere on the CEFR surfaces) rather
// than added to the i18n dictionary.

interface CEFRApiResponse {
  childName: string
  summary: CEFRCohortSummary
}

type LoadState =
  | { status: 'loading' }
  | { status: 'no-child' }
  | { status: 'error' }
  | { status: 'ready'; data: CEFRApiResponse }

function skillLabel(skill: EALCategory): string {
  return EAL_CATEGORY_LABEL[skill]?.en ?? skill
}

function formatDate(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function formatMonth(month: string): string {
  // month is YYYY-MM
  const date = new Date(`${month}-01T00:00:00`)
  if (Number.isNaN(date.getTime())) return month
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}

/** Cinematic header used by every state so the card reads consistently. */
function CardShell({ subtitle, children }: { subtitle: string; children: React.ReactNode }) {
  return (
    <GlassPanel accent="teal" as="section" aria-labelledby="cefr-progress-heading">
      <div className="flex items-start justify-between gap-3 border-b border-border/50 p-5">
        <div className="min-w-0">
          <PanelEyebrow>CEFR Placement</PanelEyebrow>
          <h2
            id="cefr-progress-heading"
            className="font-heading text-base font-bold tracking-tight text-foreground"
          >
            English level (CEFR)
          </h2>
          <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-foreground/[0.06]">
          <Languages className="h-4 w-4 text-primary" aria-hidden="true" />
        </span>
      </div>
      <div className="p-5">{children}</div>
    </GlassPanel>
  )
}

/** Centred dashed-border note — preserves the original empty-state look. */
function NoteCard({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
      {children}
    </p>
  )
}

export function CEFRProgressCard() {
  const [state, setState] = useState<LoadState>({ status: 'loading' })

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch('/api/parent/cefr')
        if (cancelled) return

        if (res.status === 404) {
          setState({ status: 'no-child' })
          return
        }
        if (!res.ok) {
          setState({ status: 'error' })
          return
        }

        const data = (await res.json()) as CEFRApiResponse
        if (cancelled) return
        setState({ status: 'ready', data })
      } catch {
        if (!cancelled) setState({ status: 'error' })
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  // ── Loading ────────────────────────────────────────────────────────────────
  if (state.status === 'loading') {
    return (
      <CardShell subtitle="Loading placement progress…">
        <div className="space-y-3">
          <div className="h-32 w-full animate-pulse rounded-2xl bg-foreground/[0.06]" />
          <div className="h-3 w-full animate-pulse rounded bg-foreground/[0.06]" />
          <div className="h-3 w-4/5 animate-pulse rounded bg-foreground/[0.06]" />
        </div>
      </CardShell>
    )
  }

  // ── No linked child (404 from the API) ─────────────────────────────────────
  if (state.status === 'no-child') {
    return (
      <CardShell subtitle="Placement test progress">
        <NoteCard>Link a child account to see their English placement progress here.</NoteCard>
      </CardShell>
    )
  }

  // ── Error ──────────────────────────────────────────────────────────────────
  if (state.status === 'error') {
    return (
      <CardShell subtitle="Placement test progress">
        <NoteCard>We couldn&apos;t load CEFR progress just now. Please try again later.</NoteCard>
      </CardShell>
    )
  }

  // ── Ready ──────────────────────────────────────────────────────────────────
  const { childName, summary } = state.data
  const firstName = childName.split(' ')[0] || childName

  // Not migrated yet — friendly "will activate" notice.
  if (!summary.available) {
    return (
      <CardShell subtitle="Placement test progress">
        <NoteCard>
          CEFR placement progress will appear here automatically once it&apos;s enabled.
        </NoteCard>
      </CardShell>
    )
  }

  // Available but the child hasn't taken the placement test yet.
  if (summary.learnersAssessed === 0) {
    return (
      <CardShell subtitle="Placement test progress">
        <NoteCard>{firstName} hasn&apos;t taken the English placement test yet.</NoteCard>
      </CardShell>
    )
  }

  // For a single child, latestByUser has (at most) one entry.
  const latest = summary.latestByUser[0]
  const bandDescription = latest ? CEFR_BAND_DESCRIPTION[latest.band] : null

  // Skill rows for the dataviz RankBars (skillAverages is pre-sorted
  // weakest-first; recharts renders the array top-to-bottom).
  const skillRows = summary.skillAverages.map((s) => ({
    skill: skillLabel(s.skill),
    averagePct: s.averagePct,
  }))

  // Trend series for the placement-history area chart.
  const trendRows = summary.trend.map((point) => ({
    month: formatMonth(point.month),
    averageBandRank: point.averageBandRank,
    placements: point.placements,
  }))

  return (
    <CardShell subtitle={`${firstName}'s placement test results`}>
      <div className="space-y-6">
        {/* Latest placement headline */}
        {latest && (
          <div className="flex flex-col gap-4 rounded-xl border border-border/60 bg-foreground/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-2xl font-extrabold text-foreground">
                    {latest.band}
                  </span>
                  {bandDescription && (
                    <Badge variant="secondary" className="w-fit">
                      {bandDescription}
                    </Badge>
                  )}
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Ladder level {latest.level} · assessed {formatDate(latest.takenAt)}
                </p>
              </div>
            </div>
            {latest.compositePct != null ? (
              <div className="flex flex-col items-center gap-1 sm:items-end">
                <PanelEyebrow>Composite</PanelEyebrow>
                <RadialScore value={latest.compositePct} label="composite" size={104} />
                {latest.confidence != null && (
                  <p className="text-xs text-muted-foreground">{latest.confidence}% confidence</p>
                )}
              </div>
            ) : (
              <div className="text-center sm:text-right">
                <PanelEyebrow>Composite</PanelEyebrow>
                <p className="font-heading text-2xl font-extrabold text-primary">—</p>
                {latest.confidence != null && (
                  <p className="text-xs text-muted-foreground">{latest.confidence}% confidence</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Per-skill breakdown (weakest first — skillAverages is pre-sorted) */}
        {skillRows.length > 0 && (
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Skill breakdown</span>
            </div>
            <RankBars
              data={skillRows}
              labelKey="skill"
              valueKey="averagePct"
              height={Math.max(140, skillRows.length * 40)}
              suffix="%"
            />
          </div>
        )}

        {/* Placement history — use the over-time trend when available,
            otherwise fall back to the single latest placement. */}
        {(summary.trend.length > 0 || latest) && (
          <div className="border-t border-border/50 pt-5">
            <div className="mb-3 flex items-center gap-2">
              <History className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Placement history</span>
            </div>
            {summary.trend.length > 0 ? (
              trendRows.length > 1 ? (
                <TrendArea
                  data={trendRows}
                  xKey="month"
                  yKey="averageBandRank"
                  domain={[0, 3]}
                  suffix=""
                  height={200}
                />
              ) : (
                <ul className="space-y-2">
                  {summary.trend.map((point) => (
                    <li
                      key={point.month}
                      className="flex items-center justify-between rounded-xl border border-border/60 p-3"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {formatMonth(point.month)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {point.placements} {point.placements === 1 ? 'attempt' : 'attempts'}
                        </p>
                      </div>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        Avg band rank {point.averageBandRank}
                      </span>
                    </li>
                  ))}
                </ul>
              )
            ) : (
              latest && (
                <ul className="space-y-2">
                  <li className="flex items-center justify-between rounded-xl border border-border/60 p-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {latest.band} · {latest.level}
                      </p>
                      <p className="text-xs text-muted-foreground">{formatDate(latest.takenAt)}</p>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-foreground">
                      {latest.compositePct != null ? `${latest.compositePct}%` : '—'}
                    </span>
                  </li>
                </ul>
              )
            )}
            {summary.trend.length > 1 && (
              <div className="mt-3">
                <Sparkline
                  data={trendRows as unknown as Record<string, unknown>[]}
                  yKey="placements"
                  color={SERIES[1]}
                  height={32}
                />
              </div>
            )}
            <p className="mt-3 text-xs text-muted-foreground">
              {summary.totalPlacements}{' '}
              {summary.totalPlacements === 1 ? 'placement attempt' : 'placement attempts'} recorded
              in total.
            </p>
          </div>
        )}
      </div>
    </CardShell>
  )
}
