'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

import { BoardSelectorSection } from '@/components/board/BoardSelectorSection'
import { useBoard } from '@/lib/board/board-store'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

/**
 * Paths where the board gate is *not* enforced. Visitors may browse these
 * without picking a board — the modal will not appear on them, and if it is
 * open it can be dismissed with Escape.
 *
 * Entries ending in `/*` match the prefix (e.g. `/auth/*` matches `/auth/login`).
 *
 * This list MUST stay in sync with `BOARD_ALLOWLIST_EXACT` and
 * `BOARD_ALLOWLIST_PREFIX` in `src/middleware.ts`. The middleware handles the
 * server-side redirect; this component handles the client-side modal.
 *
 * Philosophy: ONLY gate content that materially changes by exam board
 * (revision/*, practice, mock-exams, games, assessment/*, courses, igcse/*).
 * Marketing, policy, compliance, demo, and account pages are crawlable
 * without a board cookie — Googlebot, social unfurlers, diligence reviewers,
 * school DPOs, and paid-ad landers must see real content.
 *
 * Commercial note: extending this list to /revision/*, /games, /mock-exams,
 * /practice, /igcse (previously gated) unlocks Google indexing of ~200
 * long-tail content pages. Each page has its own client-side board-aware
 * filter; visitors without a board see the board-agnostic version with a
 * soft "pick your board" nudge baked into the page content.
 */
const ALLOWLISTED_PATHS = [
  // Root + board selector
  '/',
  '/board-select',
  '/board-select/*',

  // Auth flows
  '/auth/*',

  // Marketing / conversion surfaces
  '/pricing',
  '/about',
  '/contact',
  '/for-schools',
  '/for-schools/*',
  '/for-teachers',
  '/for-teachers/*',
  '/for-parents',
  '/for-parents/*',
  // 2026-05-20: institutional repositioning canonical URLs.
  '/schools',
  '/school-pilot',
  '/teachers',
  '/students',
  '/eal',
  '/eal/*',
  '/affiliates',
  '/affiliates/*',
  '/creators',
  '/creators/*',
  '/resources',
  '/resources/*',
  '/help',
  '/faqs',

  // Legal / compliance
  '/terms',
  '/privacy',
  '/privacy-policy',
  '/cookie-policy',
  '/refund-policy',
  '/accessibility',
  '/safeguarding',
  '/data-processing',
  '/legal',
  '/legal/*',

  // Account-adjacent
  '/verify',
  '/consent',
  '/certificate',

  // School flows (board chosen via school code)
  '/school/*',

  // Demo — must be public
  '/demo/*',

  // Content surfaces previously gated — now crawlable for SEO.
  // Each page has its own board-aware filter; no-board visitors see the
  // generic version. Both the root (`/games`) AND the prefix (`/games/*`)
  // entries are required — the prefix matcher doesn't match the exact root.
  '/analysis',
  '/analysis/*',
  '/revision',
  '/revision/*',
  '/practice',
  '/practice/*',
  '/games',
  '/games/*',
  '/assessment',
  '/assessment/*',
  '/mock-exams',
  '/mock-exams/*',
  '/courses',
  '/courses/*',
  '/igcse',
  '/igcse/*',
  '/learn',
  '/learn/*',
  '/marking',
  '/marking/*',
  '/toolkit',
  '/toolkit/*',

  // API + internals
  '/api/*',
] as const

function isAllowlisted(pathname: string | null): boolean {
  if (!pathname) return true
  for (const entry of ALLOWLISTED_PATHS) {
    if (entry.endsWith('/*')) {
      const prefix = entry.slice(0, -2)
      if (pathname === prefix || pathname.startsWith(`${prefix}/`)) return true
    } else if (pathname === entry) {
      return true
    }
  }
  return false
}

/** Read the `english-hub-board` cookie (client side) as a fallback pre-hydration. */
function readBoardCookie(): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.split('; ').find((row) => row.startsWith('english-hub-board='))
  if (!match) return null
  const value = match.split('=')[1]
  return value ? decodeURIComponent(value) : null
}

type BoardGateProps = {
  children: React.ReactNode
}

export function BoardGate({ children }: BoardGateProps) {
  const pathname = usePathname()
  const { board, isHydrated } = useBoard()
  const onAllowlist = isAllowlisted(pathname)
  const t = useT()

  // Pre-hydration fallback: read the cookie directly so we don't flash the
  // gate on returning visitors before zustand finishes rehydrating.
  const [cookieBoard, setCookieBoard] = React.useState<string | null>(null)
  React.useEffect(() => {
    setCookieBoard(readBoardCookie())
  }, [])

  // Dismissal state — reset on every navigation. Dismissal is only honoured on
  // allowlisted paths; on gated paths the modal is re-shown until a board is
  // chosen.
  const [dismissed, setDismissed] = React.useState(false)
  React.useEffect(() => {
    setDismissed(false)
  }, [pathname])

  React.useEffect(() => {
    if (!onAllowlist) return
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDismissed(true)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onAllowlist])

  const resolvedBoard = board ?? cookieBoard
  const needsGate = !resolvedBoard && !onAllowlist
  const showModal = needsGate && isHydrated && !dismissed

  // Lock background scroll while the modal is open.
  React.useEffect(() => {
    if (!showModal) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [showModal])

  return (
    <>
      {children}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="board-gate-title"
          aria-describedby="board-gate-description"
          className={cn(
            'fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto',
            'bg-background/80 backdrop-blur-sm',
            'animate-in fade-in-0 duration-200',
          )}
          onClick={(event) => {
            // Allowlisted paths: clicking the backdrop dismisses.
            if (onAllowlist && event.target === event.currentTarget) {
              setDismissed(true)
            }
          }}
        >
          <div
            className={cn(
              'relative m-4 flex w-full max-w-3xl flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8',
              'animate-in zoom-in-95 fade-in-0 duration-200',
            )}
          >
            <div className="flex flex-col gap-2 text-center">
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-primary/10 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-primary">
                {t('board.gate.eyebrow')}
              </span>
              <h2
                id="board-gate-title"
                className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                {t('board.gate.title')}
              </h2>
              <p
                id="board-gate-description"
                className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base"
              >
                {t('board.gate.body')}
              </p>
            </div>

            <BoardSelectorSection disableRedirect compact onSelected={() => setDismissed(true)} />
          </div>
        </div>
      )}
    </>
  )
}

export default BoardGate
