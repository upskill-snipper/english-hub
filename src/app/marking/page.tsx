'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
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
  grade: number
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

/* ─── Static mock marking guide links ─────────────────────── */

type MarkSchemeGroupDef = {
  board: string
  boardIds: ExamBoard[]
  items: { labelKey: string; href: string }[]
}

const MARK_SCHEME_DEFS: MarkSchemeGroupDef[] = [
  {
    board: 'AQA',
    boardIds: ['aqa'],
    items: [
      { labelKey: 'marking.scheme.lit_p1', href: '#' },
      { labelKey: 'marking.scheme.lit_p2', href: '#' },
      { labelKey: 'marking.scheme.lang_p1', href: '#' },
      { labelKey: 'marking.scheme.lang_p2', href: '#' },
    ],
  },
  {
    board: 'Edexcel',
    boardIds: ['edexcel', 'edexcel-igcse', 'edexcel-igcse-lang', 'ial-edexcel'],
    items: [
      { labelKey: 'marking.scheme.lit_p1', href: '#' },
      { labelKey: 'marking.scheme.lit_p2', href: '#' },
      { labelKey: 'marking.scheme.lang_p1', href: '#' },
      { labelKey: 'marking.scheme.lang_p2', href: '#' },
    ],
  },
  {
    board: 'OCR',
    boardIds: ['ocr'],
    items: [
      { labelKey: 'marking.scheme.lit_p1', href: '#' },
      { labelKey: 'marking.scheme.lit_p2', href: '#' },
    ],
  },
  {
    board: 'Eduqas',
    boardIds: ['eduqas'],
    items: [
      { labelKey: 'marking.scheme.lit_p1', href: '#' },
      { labelKey: 'marking.scheme.lit_p2', href: '#' },
    ],
  },
]

/* ─── Page ─────────────────────────────────────────────────── */

export default function MarkingHubPage() {
  const t = useT()
  const [history, setHistory] = useState<MarkingHistoryEntry[]>([])
  const { board: userBoard, isHydrated: isBoardHydrated } = useBoard()

  useEffect(() => {
    try {
      const raw = localStorage.getItem('english-hub-marking-history')
      if (raw) setHistory(JSON.parse(raw))
    } catch {
      /* ignore */
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
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 font-heading text-lg font-extrabold text-primary">
                        {e.grade}
                      </div>
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
                : 'grid gap-4 sm:grid-cols-2 lg:grid-cols-4'
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
                        <Link
                          href={item.href}
                          className="text-xs text-muted-foreground hover:text-primary"
                        >
                          {t(item.labelKey)}
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
