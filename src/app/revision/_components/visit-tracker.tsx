'use client'

// Writes the continuity keys the hub reads.
//
// The "In Progress" lens (revision-hub-lenses.tsx) and the RecentlyStudied
// panel both read 'english-hub-recently-studied' and
// 'english-hub-last-visited-revision', and RecentlyStudied additionally reads
// 'english-hub-studied-poems'. Until now NOTHING in the codebase wrote any of
// them, so the continuity layer was permanently empty: the hub could never
// show a student where they left off, no matter how much they studied.
//
// This mounts once in the revision layout and records each content page the
// student opens.

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const RECENTLY_STUDIED_KEY = 'english-hub-recently-studied'
const LAST_VISITED_KEY = 'english-hub-last-visited-revision'
const STUDIED_POEMS_KEY = 'english-hub-studied-poems'
const MAX_ENTRIES = 10

interface StudiedItem {
  title: string
  href: string
  section: string
  timestamp: number
}

/** Hub/index routes are navigation, not study - do not record them. */
const IGNORED_EXACT = new Set([
  '/revision',
  '/revision/',
  '/revision/study-plan',
  '/revision/analytics',
])

/** Turn "/revision/texts/an-inspector-calls" into "An Inspector Calls". */
function pathToTitle(pathname: string): string {
  const slug = pathname.split('/').filter(Boolean).pop() ?? ''
  return slug
    .split('-')
    .filter(Boolean)
    .map((w) => (w.length <= 2 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ')
}

/** Second path segment gives the section: /revision/<section>/... */
function pathToSection(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean)
  const raw = parts[1] ?? 'Revision'
  return raw.charAt(0).toUpperCase() + raw.slice(1).replace(/-/g, ' ')
}

export function VisitTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname || !pathname.startsWith('/revision')) return
    if (IGNORED_EXACT.has(pathname)) return
    // Needs at least /revision/<section>/<leaf> to be a content page.
    const depth = pathname.split('/').filter(Boolean).length
    if (depth < 3) return

    try {
      window.localStorage.setItem(LAST_VISITED_KEY, pathname)

      const entry: StudiedItem = {
        title: pathToTitle(pathname),
        href: pathname,
        section: pathToSection(pathname),
        timestamp: Date.now(),
      }

      const raw = window.localStorage.getItem(RECENTLY_STUDIED_KEY)
      const prev: StudiedItem[] = raw ? JSON.parse(raw) : []
      const deduped = prev.filter((p) => p && p.href !== entry.href)
      const next = [entry, ...deduped].slice(0, MAX_ENTRIES)
      window.localStorage.setItem(RECENTLY_STUDIED_KEY, JSON.stringify(next))

      // Poems get their own slug list, which RecentlyStudied maps onto the
      // right board-specific poetry hub.
      if (pathname.includes('/revision/poetry/')) {
        const slug = pathname.split('/').filter(Boolean).pop()
        if (slug) {
          const rawPoems = window.localStorage.getItem(STUDIED_POEMS_KEY)
          const poems: string[] = rawPoems ? JSON.parse(rawPoems) : []
          if (!poems.includes(slug)) {
            window.localStorage.setItem(
              STUDIED_POEMS_KEY,
              JSON.stringify([slug, ...poems].slice(0, MAX_ENTRIES)),
            )
          }
        }
      }
    } catch {
      // Storage unavailable (private mode / quota) - continuity is a
      // convenience, never block the page for it.
    }
  }, [pathname])

  return null
}
