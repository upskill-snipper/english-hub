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
  /** null while the submission has not been marked (or the mark is not yet visible). */
  grade: number | null
  wordCount: number
  submittedAt: string
  /** true for submissions marked server-side, whose grade we can hydrate. */
  serverBacked?: boolean
}

/** One row of `GET /api/submissions`. */
interface ServerSubmission {
  id: string
  title: string
  board: string
  paper: string
  grade: number | null
  wordCount: number
  submittedAt: string
}

export default function MarkingHistoryPage() {
  const tx = useT()
  const [entries, setEntries] = useState<HistoryEntry[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // SF-2 (19 September 2026). This screen used to read `localStorage` and
    // nothing else, so a student who marked essays on the school desktop saw
    // an empty history - and an empty progress graph - on their phone. Their
    // work was in the database the whole time; this page had no way to ask
    // for it, because no list endpoint existed.
    //
    // The server is now the primary source. localStorage is kept as a MERGE
    // fallback rather than deleted: legacy entries written by the older
    // /api/mark path were never persisted server-side at all, and dropping
    // them would delete history a student can currently see.
    let cancelled = false

    function readLocal(): HistoryEntry[] {
      try {
        const raw = localStorage.getItem('english-hub-marking-history')
        return raw ? (JSON.parse(raw) as HistoryEntry[]) : []
      } catch {
        return []
      }
    }

    // Paint what this device knows immediately, so the screen is not blank
    // while the request is in flight.
    const local = readLocal()
    if (local.length > 0) setEntries(local)
    ;(async () => {
      try {
        const res = await fetch('/api/submissions?limit=50')
        if (!res.ok) throw new Error(String(res.status))
        const body = (await res.json()) as {
          data?: { submissions?: ServerSubmission[] }
          submissions?: ServerSubmission[]
        }
        const server = body.data?.submissions ?? body.submissions ?? []
        if (cancelled) return

        const serverEntries: HistoryEntry[] = server.map((row) => ({
          id: row.id,
          title: row.title,
          board: row.board,
          paper: row.paper,
          grade: typeof row.grade === 'number' ? row.grade : null,
          wordCount: row.wordCount ?? 0,
          submittedAt: row.submittedAt,
          serverBacked: true,
        }))

        // Server rows win on id. Local entries survive only when the server
        // has never heard of them.
        const seen = new Set(serverEntries.map((e) => e.id))
        const localOnly = readLocal().filter((e) => !seen.has(e.id))
        const merged = [...serverEntries, ...localOnly].sort((a, b) =>
          (b.submittedAt ?? '').localeCompare(a.submittedAt ?? ''),
        )
        setEntries(merged)
      } catch {
        // Offline, signed out, or the endpoint failed: keep whatever this
        // device has rather than showing nothing.
        if (!cancelled) setEntries(readLocal())
      } finally {
        if (!cancelled) setLoaded(true)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  // Only genuinely marked essays contribute to the trend and the aggregates -
  // an unmarked submission must never be counted as a zero.
  const marked = entries.filter(
    (e): e is HistoryEntry & { grade: number } => typeof e.grade === 'number',
  )

  // Build trend points oldest → newest
  const trendPoints: TrendPoint[] = [...marked].reverse().map((e) => ({
    date: e.submittedAt,
    grade: e.grade,
    label: e.title,
  }))

  const averageGrade =
    marked.length > 0
      ? (marked.reduce((sum, e) => sum + e.grade, 0) / marked.length).toFixed(1)
      : '-'
  const highestGrade = marked.length > 0 ? Math.max(...marked.map((e) => e.grade)) : '-'

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
                      {typeof e.grade === 'number' ? (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 font-heading text-xl font-extrabold text-primary">
                          {e.grade}
                        </div>
                      ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-center text-[10px] font-medium leading-tight text-muted-foreground">
                          {tx('marking.history.awaiting')}
                        </div>
                      )}
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
