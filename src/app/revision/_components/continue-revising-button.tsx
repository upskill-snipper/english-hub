'use client'

// The hub's primary action, resolved from real history.
//
// DEFECT being fixed (2026-08-23): the most prominent button on /revision
// opened /revision/study-plan. That route sits behind requireSubscription
// (src/app/revision/study-plan/layout.tsx), so a lapsed-trial student's
// first click on their own hub bounced them to /pricing. An earlier pass had
// also relabelled the button away from "Continue last lesson" because
// nothing tracked where the student was - the VisitTracker added today now
// writes that history, so a genuine continue target exists.
//
// Honesty rules this component keeps:
//   - it only ever offers a page the student actually opened (read back from
//     the continuity keys the VisitTracker writes), never a guessed "next
//     lesson", and never an invented streak or progress figure;
//   - with no history it renders the fallback label ("Start revising") and a
//     free, board-valid destination chosen by the server component;
//   - the fallback is also what renders on the server and on first paint, so
//     hydration cannot flash a continue target that does not exist.

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const RECENTLY_STUDIED_KEY = 'english-hub-recently-studied'
const LAST_VISITED_KEY = 'english-hub-last-visited-revision'

interface LastLesson {
  href: string
  title: string
}

interface StoredEntry {
  href?: unknown
  title?: unknown
  timestamp?: unknown
}

/**
 * Only same-origin paths are ever used as a destination. localStorage is
 * writable by anything running on the origin, so an absolute or
 * protocol-relative URL is rejected rather than turned into a link.
 */
function isInternalPath(value: unknown): value is string {
  return typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')
}

/** "/revision/texts/an-inspector-calls" → "An Inspector Calls" (mirrors VisitTracker). */
function pathToTitle(pathname: string): string {
  const slug = pathname.split('/').filter(Boolean).pop() ?? ''
  const title = slug
    .split('-')
    .filter(Boolean)
    .map((w) => (w.length <= 2 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ')
  return title || 'Revision'
}

/** Read the newest genuinely-visited revision page, or null when there is none. */
function resolveLastLesson(): LastLesson | null {
  try {
    const raw = window.localStorage.getItem(RECENTLY_STUDIED_KEY)
    if (raw) {
      const parsed: unknown = JSON.parse(raw)
      if (Array.isArray(parsed)) {
        const newest = (parsed as StoredEntry[])
          .filter((entry) => !!entry && isInternalPath(entry.href))
          .sort((a, b) => {
            const at = typeof a.timestamp === 'number' ? a.timestamp : 0
            const bt = typeof b.timestamp === 'number' ? b.timestamp : 0
            return bt - at
          })[0]
        if (newest && isInternalPath(newest.href)) {
          const title =
            typeof newest.title === 'string' && newest.title.trim()
              ? newest.title.trim()
              : pathToTitle(newest.href)
          return { href: newest.href, title }
        }
      }
    }

    // VisitTracker writes a bare pathname string to this key (not JSON), so
    // it is read as a string - a JSON.parse here would always throw.
    const lastVisited = window.localStorage.getItem(LAST_VISITED_KEY)
    if (isInternalPath(lastVisited)) {
      return { href: lastVisited, title: pathToTitle(lastVisited) }
    }
  } catch {
    // Storage unavailable (private mode / quota) - fall back to the honest
    // "start revising" label rather than breaking the hub's main action.
  }
  return null
}

export function ContinueRevisingButton({
  fallbackHref,
  fallbackLabel,
  continueTemplate,
}: {
  /** Free, board-valid destination used when there is no history. */
  fallbackHref: string
  /** Honest label for that case, e.g. "Start revising". */
  fallbackLabel: string
  /** Resolved template carrying a {title} placeholder, e.g. "Continue: {title}". */
  continueTemplate: string
}) {
  const [lastLesson, setLastLesson] = useState<LastLesson | null>(null)

  useEffect(() => {
    setLastLesson(resolveLastLesson())
  }, [])

  const href = lastLesson ? lastLesson.href : fallbackHref
  const label = lastLesson ? continueTemplate.replace('{title}', lastLesson.title) : fallbackLabel

  return (
    <Button variant="default" size="lg" render={<Link href={href} />}>
      <span className="max-w-[16rem] truncate">{label}</span>
      <ArrowRight className="size-4" aria-hidden="true" />
    </Button>
  )
}
