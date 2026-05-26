'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ImprovementTrend, type TrendPoint } from '@/components/marking/ImprovementTrend'
import { useT } from '@/lib/i18n/use-t'

interface HistoryEntry {
  id: string
  title: string
  board: string
  paper: string
  grade: number
  wordCount: number
  submittedAt: string
}

export default function MarkingHistoryPage() {
  const tx = useT()
  const [entries, setEntries] = useState<HistoryEntry[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('english-hub-marking-history')
      if (raw) setEntries(JSON.parse(raw))
    } catch {
      /* ignore */
    }
    setLoaded(true)
  }, [])

  // Build trend points oldest → newest
  const trendPoints: TrendPoint[] = [...entries].reverse().map((e) => ({
    date: e.submittedAt,
    grade: e.grade,
    label: e.title,
  }))

  const averageGrade =
    entries.length > 0
      ? (entries.reduce((sum, e) => sum + e.grade, 0) / entries.length).toFixed(1)
      : '-'
  const highestGrade = entries.length > 0 ? Math.max(...entries.map((e) => e.grade)) : '-'

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* ── Breadcrumb ────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/marking" className="hover:text-primary">
              {tx('marking.nav.marking')}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-medium text-foreground">{tx('marking.history.breadcrumb')}</li>
        </ol>
      </nav>

      <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
            {tx('marking.history.title')}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{tx('marking.history.subtitle')}</p>
        </div>
        <Button render={<Link href="/marking/submit" />}>{tx('marking.history.btn_new')}</Button>
      </header>

      {/* ── Stats row ─────────────────────────────────────── */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <Card size="sm">
          <CardHeader>
            <CardDescription>{tx('marking.history.stat_essays')}</CardDescription>
            <CardTitle className="font-heading text-3xl">{entries.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card size="sm">
          <CardHeader>
            <CardDescription>{tx('marking.history.stat_avg')}</CardDescription>
            <CardTitle className="font-heading text-3xl">{averageGrade}</CardTitle>
          </CardHeader>
        </Card>
        <Card size="sm">
          <CardHeader>
            <CardDescription>{tx('marking.history.stat_best')}</CardDescription>
            <CardTitle className="font-heading text-3xl">{highestGrade}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* ── Trend chart ───────────────────────────────────── */}
      <div className="mb-6">
        <ImprovementTrend points={trendPoints} />
      </div>

      {/* ── History list ──────────────────────────────────── */}
      <section>
        <h2 className="mb-3 font-heading text-lg font-bold text-foreground">
          {tx('marking.history.section_past')}
        </h2>

        {!loaded ? (
          <p className="text-sm text-muted-foreground">{tx('marking.history.loading')}</p>
        ) : entries.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center gap-3 py-12 text-center">
              <p className="text-sm text-muted-foreground">{tx('marking.history.empty')}</p>
              <Button render={<Link href="/marking/submit" />}>
                {tx('marking.history.btn_first')}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <ul className="space-y-3">
            {entries.map((e) => (
              <li key={e.id}>
                <Link href={`/marking/results/${e.id}`} className="block group">
                  <Card className="transition-colors group-hover:border-primary/40">
                    <CardContent className="flex items-center gap-4 py-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 font-heading text-xl font-extrabold text-primary">
                        {e.grade}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-foreground">{e.title}</p>
                        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                          <Badge variant="outline">{e.board}</Badge>
                          <span>{e.paper}</span>
                          <span aria-hidden>·</span>
                          <span>{e.wordCount} words</span>
                          <span aria-hidden>·</span>
                          <span>{new Date(e.submittedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <span
                        aria-hidden
                        className="text-muted-foreground transition-colors group-hover:text-primary"
                      >
                        →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Note: history currently read from localStorage - migrate to /api/mark when available */}
    </div>
  )
}
