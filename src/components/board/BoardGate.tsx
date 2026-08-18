'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

import { BoardSelectorSection } from '@/components/board/BoardSelectorSection'
import { useBoard } from '@/lib/board/board-store'
import { isBoardSpecificPath } from '@/lib/board/gated-paths'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

/**
 * Board nudge - offers the exam-board picker on routes whose content is
 * filtered by board, for a visitor who has not chosen one yet.
 *
 * 2026-08-18: this was an ALLOW-list of ~60 paths where the modal must not
 * appear, which meant every route the author forgot was gated by default.
 * /blog (the main organic entry point) and /ielts (a top-level nav item)
 * were both missing, so visitors landing from Google met a full-screen
 * modal with no close button - Escape and backdrop-click were deliberately
 * disabled on exactly the paths where it was blocking - and an IELTS
 * learner had no correct answer to give, because IELTS is not a board.
 *
 * Now inverted: gate only the board-specific trees listed in
 * `@/lib/board/gated-paths` (shared with the middleware so the two cannot
 * drift), and always let the visitor out. A forgotten route now fails open.
 *
 * The modal is a NUDGE, never a wall: Escape, the backdrop and an explicit
 * "Browse without choosing" control all dismiss it on every path. Every
 * board-filtered page already renders a board-agnostic version for visitors
 * who decline, so nothing is lost by dismissing.
 */

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
  const isBoardRoute = isBoardSpecificPath(pathname)
  const t = useT()

  // Pre-hydration fallback: read the cookie directly so we don't flash the
  // gate on returning visitors before zustand finishes rehydrating.
  const [cookieBoard, setCookieBoard] = React.useState<string | null>(null)
  React.useEffect(() => {
    setCookieBoard(readBoardCookie())
  }, [])

  // Dismissal resets on navigation, so the nudge can reappear when the
  // visitor moves to a different board-filtered page - but it is always
  // dismissible, on every path.
  const [dismissed, setDismissed] = React.useState(false)
  React.useEffect(() => {
    setDismissed(false)
  }, [pathname])

  React.useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDismissed(true)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const resolvedBoard = board ?? cookieBoard
  const showModal = !resolvedBoard && isBoardRoute && isHydrated && !dismissed

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
            if (event.target === event.currentTarget) setDismissed(true)
          }}
        >
          <div
            className={cn(
              'relative m-4 flex w-full max-w-3xl flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8',
              'animate-in zoom-in-95 fade-in-0 duration-200',
            )}
          >
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label={t('board.gate.dismiss_aria')}
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                className="h-4 w-4"
              >
                <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
              </svg>
            </button>

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

            {/* Explicit way out for anyone who does not know their board yet,
                or is here for IELTS/EAL where no board applies. */}
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="mx-auto text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              {t('board.gate.browse_without')}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default BoardGate
