'use client'

import { useEffect, useMemo, useState } from 'react'
import { guidePageForScheme } from '@/lib/marking/guide-links'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useBoard } from '@/hooks/useBoard'
import type { ExamBoard } from '@/lib/board/board-config'
import { useT } from '@/lib/i18n/use-t'

/* ─── Types ────────────────────────────────────────────────── */

interface MarkingHistoryEntry {
  id: string
  title: string
  board: string
  paper: string
  /**
   * UX-6: typed `number` while the submit page writes `grade: null` into the
   * very same localStorage record. The type was not describing the data.
   */
  grade: number | null
  wordCount: number
  submittedAt: string
}

interface MarkSchemeGroup {
  board: string
  /** ExamBoard ids this group is relevant to. Used to scope the marking-guide
   *  library to the user's selected board. */
  boardIds: ExamBoard[]
  items: { label: string; href: string }[]
}

/* ─── The mark-scheme guides ──────────────────────────────── */

type MarkSchemeGroupDef = {
  board: string
  boardIds: ExamBoard[]
  items: { labelKey: string; href: string }[]
}

/**
 * UX-6 (19 September 2026): every one of these twelve hrefs was '#'. They
 * looked like links and clicking one did nothing; they then pointed at the
 * matching card on /resources/teacher-library/mark-schemes.
 *
 * 24 OCTOBER 2026: THE CARDS WERE EMPTY. Those cards were a title and a line
 * each, with nothing behind them, so the founder clicked a mark scheme here and
 * "it only shows boxes for each one, no reference cards behind it". Each link
 * now opens that paper's full guide (src/data/mark-scheme-guides): what every
 * question asks, what earns marks and what each level looks like. The guides
 * cover every paper the marker can mark, so OCR and Eduqas Language, the two
 * Edexcel International GCSE papers and the four Cambridge papers are listed
 * too, and a Cambridge or International GCSE student no longer sees "Coming
 * soon". `guidePageForScheme` builds each address from the guide's own title;
 * a test resolves every one to a guide that exists.
 *
 * OCR and Eduqas call their papers components, which is why the labels differ.
 */
const guide = (schemeId: string) =>
  guidePageForScheme(schemeId) ?? '/resources/teacher-library/mark-schemes'

const MARK_SCHEME_DEFS: MarkSchemeGroupDef[] = [
  {
    board: 'AQA',
    boardIds: ['aqa'],
    items: [
      { labelKey: 'marking.scheme.lang_p1', href: guide('aqa-lang-paper1') },
      { labelKey: 'marking.scheme.lang_p2', href: guide('aqa-lang-paper2') },
      { labelKey: 'marking.scheme.lit_p1', href: guide('aqa-lit-paper1') },
      { labelKey: 'marking.scheme.lit_p2', href: guide('aqa-lit-paper2') },
    ],
  },
  {
    board: 'Edexcel',
    boardIds: ['edexcel'],
    items: [
      { labelKey: 'marking.scheme.lang_p1', href: guide('edexcel-lang-paper1') },
      { labelKey: 'marking.scheme.lang_p2', href: guide('edexcel-lang-paper2') },
      { labelKey: 'marking.scheme.lit_p1', href: guide('edexcel-lit-paper1') },
      { labelKey: 'marking.scheme.lit_p2', href: guide('edexcel-lit-paper2') },
    ],
  },
  {
    board: 'OCR',
    boardIds: ['ocr'],
    items: [
      { labelKey: 'marking.scheme.lang_c01', href: guide('ocr-lang-component01') },
      { labelKey: 'marking.scheme.lang_c02', href: guide('ocr-lang-component02') },
      { labelKey: 'marking.scheme.lit_c01', href: guide('ocr-lit-component01') },
      { labelKey: 'marking.scheme.lit_c02', href: guide('ocr-lit-component02') },
    ],
  },
  {
    board: 'Eduqas',
    boardIds: ['eduqas'],
    items: [
      { labelKey: 'marking.scheme.lang_c1', href: guide('eduqas-lang-comp1') },
      { labelKey: 'marking.scheme.lang_c2', href: guide('eduqas-lang-comp2') },
      { labelKey: 'marking.scheme.lit_c1', href: guide('eduqas-lit-comp1') },
      { labelKey: 'marking.scheme.lit_c2', href: guide('eduqas-lit-comp2') },
    ],
  },
  {
    board: 'Edexcel International GCSE',
    boardIds: ['edexcel-igcse', 'edexcel-igcse-lang'],
    items: [
      { labelKey: 'marking.scheme.igcse_lang_p1', href: guide('edexcel-igcse-lang-paper1') },
      { labelKey: 'marking.scheme.lit_p1', href: guide('edexcel-igcse-lit') },
    ],
  },
  {
    board: 'Cambridge IGCSE',
    boardIds: ['cambridge-0500', 'cambridge-0990'],
    items: [
      { labelKey: 'marking.scheme.cam_0500_p1', href: guide('cambridge-0500-paper1') },
      { labelKey: 'marking.scheme.cam_0500_p2', href: guide('cambridge-0500-paper2') },
      { labelKey: 'marking.scheme.cam_0990_p1', href: guide('cambridge-0990-paper1') },
      { labelKey: 'marking.scheme.cam_0990_p2', href: guide('cambridge-0990-paper2') },
    ],
  },
]

/* ─── Page ─────────────────────────────────────────────────── */

export default function MarkingHubPage() {
  const t = useT()
  const [history, setHistory] = useState<MarkingHistoryEntry[]>([])
  const { board: userBoard, isHydrated: isBoardHydrated } = useBoard()

  useEffect(() => {
    // SF-2: server first, localStorage as a merge fallback. This list used to
    // come from this device only, so the "recent work" panel was empty for a
    // student who had marked everything on a different one. See
    // src/app/marking/history/page.tsx for the full note.
    let cancelled = false

    function readLocal(): MarkingHistoryEntry[] {
      try {
        const raw = localStorage.getItem('english-hub-marking-history')
        return raw ? (JSON.parse(raw) as MarkingHistoryEntry[]) : []
      } catch {
        return []
      }
    }

    const local = readLocal()
    if (local.length > 0) setHistory(local)
    ;(async () => {
      try {
        const res = await fetch('/api/submissions?limit=10')
        if (!res.ok) throw new Error(String(res.status))
        const body = (await res.json()) as {
          data?: { submissions?: MarkingHistoryEntry[] }
          submissions?: MarkingHistoryEntry[]
        }
        const server = body.data?.submissions ?? body.submissions ?? []
        if (cancelled) return
        const seen = new Set(server.map((e) => e.id))
        const merged = [...server, ...readLocal().filter((e) => !seen.has(e.id))].sort((a, b) =>
          (b.submittedAt ?? '').localeCompare(a.submittedAt ?? ''),
        )
        setHistory(merged)
      } catch {
        if (!cancelled) setHistory(readLocal())
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  const recent = history.slice(0, 3)

  // Restrict the marking-guide library to the user's selected board so an
  // OCR student doesn't see AQA, Edexcel, Eduqas guides next to their own.
  // While the board cookie is still rehydrating, fall back to all guides
  // (matches the historical behaviour and avoids a content flash).
  const visibleMarkSchemes = useMemo(() => {
    if (!isBoardHydrated || !userBoard) return MARK_SCHEME_DEFS
    return MARK_SCHEME_DEFS.filter((g) => g.boardIds.includes(userBoard))
  }, [userBoard, isBoardHydrated])

  const tWords = t('marking.history.words')

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* ── Header ────────────────────────────────────────── */}
      <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-wider text-primary uppercase">
            {t('brand.name')}
          </p>
          <h1 className="mt-1 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {t('marking.h1')}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{t('marking.lead')}</p>
        </div>
        <div className="flex gap-2">
          <Button size="lg" render={<Link href="/marking/submit" />}>
            {t('marking.cta.new')}
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/marking/history" />}>
            {t('marking.cta.history')}
          </Button>
        </div>
      </header>

      {/* ── Recent essays ─────────────────────────────────── */}
      <section className="mb-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-heading text-xl font-bold text-foreground">
            {t('marking.recent.h2')}
          </h2>
          {history.length > 3 && (
            <Link
              href="/marking/history"
              className="text-sm font-medium text-primary hover:underline"
            >
              {t('action.view_all')}
            </Link>
          )}
        </div>

        {recent.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center gap-3 py-10 text-center">
              <p className="text-sm text-muted-foreground">{t('marking.recent.empty')}</p>
              <Button render={<Link href="/marking/submit" />}>
                {t('marking.recent.empty_cta')}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((e) => (
              <Link key={e.id} href={`/marking/results/${e.id}`} className="group">
                <Card className="h-full transition-colors group-hover:border-primary/40">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="line-clamp-2">{e.title}</CardTitle>
                      {/*
                        UX-6: this printed `{e.grade}` straight out, so an
                        essay still being marked showed an empty coloured
                        square - which reads as a grade the page failed to
                        load, not as work in progress. The history page has
                        always said "Awaiting mark" here; the hub now says the
                        same thing, in the same words.
                      */}
                      {typeof e.grade === 'number' ? (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 font-heading text-lg font-extrabold text-primary">
                          {e.grade}
                        </div>
                      ) : (
                        <span className="shrink-0 rounded-lg bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                          {t('marking.history.awaiting')}
                        </span>
                      )}
                    </div>
                    <CardDescription>
                      {e.board} · {e.paper}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      {e.wordCount} {tWords} · {new Date(e.submittedAt).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ── Quick actions ─────────────────────────────────── */}
      <section className="mb-10 grid gap-4 sm:grid-cols-2">
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle>{t('marking.start_new.title')}</CardTitle>
            <CardDescription>{t('marking.start_new.desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button render={<Link href="/marking/submit" />}>{t('marking.start_new.cta')}</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('marking.samples.title')}</CardTitle>
            <CardDescription>{t('marking.samples.desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" render={<Link href="/marking/sample" />}>
              {t('marking.samples.cta')}
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* ── Marking guide library ──────────────────────────── */}
      <section>
        <h2 className="mb-4 font-heading text-xl font-bold text-foreground">
          {t('marking.library.h2')}
        </h2>
        {visibleMarkSchemes.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-sm text-muted-foreground">
              {t('marking.library.coming_soon')}
            </CardContent>
          </Card>
        ) : (
          <div
            className={
              visibleMarkSchemes.length === 1
                ? 'grid gap-4 sm:grid-cols-1'
                : 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3'
            }
          >
            {visibleMarkSchemes.map((group) => (
              <Card key={group.board} size="sm">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{group.board}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item.labelKey + group.board}>
                        {/* Plainly a link: each opens that paper's guide. */}
                        <Link
                          href={item.href}
                          className="inline-flex min-h-9 items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
                        >
                          {t(item.labelKey)}
                          <ArrowRight className="size-3.5 shrink-0" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
