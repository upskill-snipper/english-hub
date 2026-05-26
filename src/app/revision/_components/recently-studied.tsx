'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Clock, ArrowRight } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import type { ExamBoard } from '@/hooks/useBoard'

const RECENTLY_STUDIED_KEY = 'english-hub-recently-studied'
const STUDIED_POEMS_KEY = 'english-hub-studied-poems'
const LAST_VISITED_KEY = 'english-hub-last-visited-revision'

// Fallback poetry hub bases used when the user has no board set or is on a
// board that does not have a dedicated poetry hub. Mirrors the previous
// hardcoded behaviour of this widget.
const FALLBACK_POETRY_HUB_PATHS: readonly string[] = [
  '/revision/poetry/power-and-conflict',
  '/revision/poetry/love-and-relationships',
  '/revision/poetry/eduqas',
]

// Map each board to its preferred poetry hub bases (no trailing slug).
// Order matters: the first base whose `${base}/${slug}` href has not yet
// been added to the merged list is what we link to.
const POETRY_HUB_PATHS_BY_BOARD: Partial<Record<ExamBoard, readonly string[]>> = {
  aqa: [
    '/revision/poetry/power-and-conflict',
    '/revision/poetry/love-and-relationships',
    '/revision/poetry/aqa-worlds-and-lives',
  ],
  edexcel: ['/revision/poetry/edexcel/conflict', '/revision/poetry/edexcel/time-and-place'],
  ocr: [
    '/revision/poetry/ocr/love-and-relationships',
    '/revision/poetry/ocr/conflict',
    '/revision/poetry/ocr/youth-and-age',
    '/revision/poetry/ocr/power-and-natural-world',
  ],
  eduqas: ['/revision/poetry/eduqas'],
  // IGCSE boards: use the IGCSE hub
  'edexcel-igcse': ['/igcse/edexcel/poetry'],
  'edexcel-igcse-lang': ['/igcse/edexcel-lang/anthology'],
  // No-board / A-Level / IAL / KS3 / Cambridge: use the AQA-style fallback
  // ordering defined in FALLBACK_POETRY_HUB_PATHS.
}

function buildCandidatePaths(slug: string, board: ExamBoard | null): readonly string[] {
  const bases =
    board && POETRY_HUB_PATHS_BY_BOARD[board]
      ? POETRY_HUB_PATHS_BY_BOARD[board]!
      : FALLBACK_POETRY_HUB_PATHS
  return bases.map((base) => `${base}/${slug}`)
}

interface RecentItem {
  title: string
  href: string
  section: string
  timestamp: number
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((s) => (s.length > 0 ? s[0].toUpperCase() + s.slice(1) : s))
    .join(' ')
}

export function RecentlyStudied() {
  const [recentItems, setRecentItems] = useState<RecentItem[]>([])
  const [mounted, setMounted] = useState(false)
  const { board } = useBoard()

  useEffect(() => {
    setMounted(true)
    try {
      const merged: RecentItem[] = []
      const seen = new Set<string>()

      // 1. Explicit recently-studied entries
      const stored = localStorage.getItem(RECENTLY_STUDIED_KEY)
      if (stored) {
        const parsed: RecentItem[] = JSON.parse(stored)
        for (const item of parsed) {
          if (!seen.has(item.href)) {
            merged.push(item)
            seen.add(item.href)
          }
        }
      }

      // 2. Last visited revision page
      const lastVisited = localStorage.getItem(LAST_VISITED_KEY)
      if (lastVisited) {
        try {
          const parsed = JSON.parse(lastVisited) as {
            href: string
            title: string
            section: string
            timestamp: number
          }
          if (parsed && parsed.href && !seen.has(parsed.href)) {
            merged.push(parsed)
            seen.add(parsed.href)
          }
        } catch {
          if (!seen.has(lastVisited)) {
            merged.push({
              title: slugToTitle(lastVisited.split('/').filter(Boolean).pop() ?? 'Revision'),
              href: lastVisited,
              section: 'Revision',
              timestamp: Date.now(),
            })
            seen.add(lastVisited)
          }
        }
      }

      // 3. Studied poem slugs - build candidate paths board-aware so that a
      // student who switches boards is linked to a hub valid for their
      // current board rather than the AQA URL the poem was studied under.
      const studiedPoems = localStorage.getItem(STUDIED_POEMS_KEY)
      if (studiedPoems) {
        const slugs: string[] = JSON.parse(studiedPoems)
        for (const slug of slugs) {
          const candidatePaths = buildCandidatePaths(slug, board)
          for (const href of candidatePaths) {
            if (seen.has(href)) continue
            merged.push({
              title: slugToTitle(slug),
              href,
              section: 'Poetry',
              timestamp: Date.now(),
            })
            seen.add(href)
            break
          }
        }
      }

      merged.sort((a, b) => b.timestamp - a.timestamp)
      setRecentItems(merged.slice(0, 5))
    } catch {
      // ignore parse errors
    }
  }, [board])

  if (!mounted || recentItems.length === 0) return null

  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <Clock className="size-5 text-muted-foreground" />
        <h2 className="text-heading-lg font-heading text-foreground">Recently Studied</h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {recentItems.map((item) => (
          <Link
            key={item.href + item.timestamp}
            href={item.href}
            className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 transition-all duration-200 hover:border-border hover:shadow-card-hover"
          >
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="size-4 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground">{item.section}</p>
            </div>
            <ArrowRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </section>
  )
}
