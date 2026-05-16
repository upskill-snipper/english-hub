'use client'

import { useEffect, useState } from 'react'
import { GraduationCap, History, Languages, Sparkles } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { CEFR_BAND_DESCRIPTION, type CEFRCohortSummary } from '@/lib/eal/cefr-aggregate'
import { EAL_CATEGORY_LABEL } from '@/lib/eal/types'
import type { EALCategory } from '@/lib/eal/types'

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
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">English level (CEFR)</CardTitle>
              <CardDescription>Loading placement progress…</CardDescription>
            </div>
            <Languages className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <Skeleton className="h-16 w-full rounded-lg" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
        </CardContent>
      </Card>
    )
  }

  // ── No linked child (404 from the API) ─────────────────────────────────────
  if (state.status === 'no-child') {
    return (
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">English level (CEFR)</CardTitle>
              <CardDescription>Placement test progress</CardDescription>
            </div>
            <Languages className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
            Link a child account to see their English placement progress here.
          </p>
        </CardContent>
      </Card>
    )
  }

  // ── Error ──────────────────────────────────────────────────────────────────
  if (state.status === 'error') {
    return (
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">English level (CEFR)</CardTitle>
              <CardDescription>Placement test progress</CardDescription>
            </div>
            <Languages className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
            We couldn&apos;t load CEFR progress just now. Please try again later.
          </p>
        </CardContent>
      </Card>
    )
  }

  // ── Ready ──────────────────────────────────────────────────────────────────
  const { childName, summary } = state.data
  const firstName = childName.split(' ')[0] || childName

  // Not migrated yet — friendly "will activate" notice.
  if (!summary.available) {
    return (
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">English level (CEFR)</CardTitle>
              <CardDescription>Placement test progress</CardDescription>
            </div>
            <Languages className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
            CEFR placement progress will appear here automatically once it&apos;s enabled.
          </p>
        </CardContent>
      </Card>
    )
  }

  // Available but the child hasn't taken the placement test yet.
  if (summary.learnersAssessed === 0) {
    return (
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">English level (CEFR)</CardTitle>
              <CardDescription>Placement test progress</CardDescription>
            </div>
            <Languages className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
            {firstName} hasn&apos;t taken the English placement test yet.
          </p>
        </CardContent>
      </Card>
    )
  }

  // For a single child, latestByUser has (at most) one entry.
  const latest = summary.latestByUser[0]
  const bandDescription = latest ? CEFR_BAND_DESCRIPTION[latest.band] : null

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base">English level (CEFR)</CardTitle>
            <CardDescription>{firstName}&apos;s placement test results</CardDescription>
          </div>
          <Languages className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Latest placement headline */}
        {latest && (
          <div className="flex flex-col gap-4 rounded-xl border border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-foreground">{latest.band}</span>
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
            <div className="text-center sm:text-right">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Composite
              </p>
              <p className="text-2xl font-extrabold text-primary">
                {latest.compositePct != null ? `${latest.compositePct}%` : '—'}
              </p>
              {latest.confidence != null && (
                <p className="text-xs text-muted-foreground">{latest.confidence}% confidence</p>
              )}
            </div>
          </div>
        )}

        {/* Per-skill breakdown (weakest first — skillAverages is pre-sorted) */}
        {summary.skillAverages.length > 0 && (
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Skill breakdown</span>
            </div>
            <ul className="space-y-3">
              {summary.skillAverages.map((s) => (
                <li key={s.skill} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm capitalize text-foreground">
                      {skillLabel(s.skill)}
                    </span>
                    <span className="text-sm font-bold text-foreground">{s.averagePct}%</span>
                  </div>
                  <Progress value={s.averagePct} className="h-1.5" />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Placement history — use the over-time trend when available,
            otherwise fall back to the single latest placement. */}
        {(summary.trend.length > 0 || latest) && (
          <div>
            <Separator className="mb-4" />
            <div className="mb-3 flex items-center gap-2">
              <History className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Placement history</span>
            </div>
            {summary.trend.length > 0 ? (
              <ul className="space-y-2">
                {summary.trend.map((point) => (
                  <li
                    key={point.month}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
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
            ) : (
              latest && (
                <ul className="space-y-2">
                  <li className="flex items-center justify-between rounded-lg border border-border p-3">
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
            <p className="mt-3 text-xs text-muted-foreground">
              {summary.totalPlacements}{' '}
              {summary.totalPlacements === 1 ? 'placement attempt' : 'placement attempts'} recorded
              in total.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
