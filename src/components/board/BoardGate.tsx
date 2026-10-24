'use client'

import * as React from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { BoardQuickPicker } from '@/components/board/BoardQuickPicker'
import { useBoard } from '@/lib/board/board-store'
import { isBoardSpecificPath } from '@/lib/board/gated-paths'
import { lockPageScroll } from '@/lib/ui/scroll-lock'
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
 *
 * ON A PHONE IT COULD NOT BE USED (fixed 24 October 2026). The pop-up was a
 * flex box centred in the screen with three steps of tall cards inside, so on
 * an 812-pixel phone its 1,738-pixel card overflowed upwards as well as down:
 * the question and the close button sat 463 pixels above the screen, where
 * no scrolling reaches, and the page behind was locked. Every board-filtered
 * page (revision, games, practice, mock exams, marking, courses) opened this
 * way for a visitor without a board, which is how "a number of the pages do
 * not scroll" (the founder, 24 October). Now:
 *   - the overlay is the scroll container and the card sits in a wrapper at
 *     least the screen's height, so a card taller than the screen starts at
 *     its top and scrolls to its bottom (BoardGate.test.tsx holds the layout);
 *   - one tap on a board chooses it (BoardQuickPicker), instead of a level,
 *     then a body, then a paper;
 *   - the page is refreshed after a choice, so what the server rendered
 *     without a board is replaced by the board's own content;
 *   - the page lock is the shared one (src/lib/ui/scroll-lock.ts), which
 *     cannot leave the page frozen when overlays close out of order;
 *   - it waits until the cookie banner has been answered, so a first visit
 *     meets one pop-up at a time rather than the banner lying across the
 *     board list.
 */

/** Whether the cookie banner has been answered (src/components/cookie-consent.tsx). */
function cookieChoiceMade(): boolean {
  try {
    return localStorage.getItem('cookie-consent') !== null
  } catch {
    // Storage blocked: the banner cannot record an answer either, so waiting
    // for one would keep the question away for good.
    return true
  }
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
  const router = useRouter()
  const { board, isHydrated } = useBoard()
  const isBoardRoute = isBoardSpecificPath(pathname)
  const t = useT()

  // The cookie is read on every render, not once on mount (2 October 2026).
  // The middleware writes it when a navigation carries ?setBoard=, and a
  // client-side navigation does not rehydrate the zustand store, so a value
  // read only on mount could be stale: the visitor would have chosen a board,
  // the cookie would hold it, and the next board-filtered page would still
  // ask. The card clicks checked on production that day were full page loads,
  // which rehydrate the store, so this closes a gap rather than a reported
  // failure. Reading during render also removes the frame in which an old value
  // could show the modal before an effect updated it. On the server isHydrated
  // is false and nothing is read, as before.
  const cookieBoard = isHydrated ? readBoardCookie() : null

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

  // One pop-up at a time: the cookie banner first.
  const [consentAnswered, setConsentAnswered] = React.useState(false)
  React.useEffect(() => {
    setConsentAnswered(cookieChoiceMade())
    const onChange = () => setConsentAnswered(cookieChoiceMade())
    window.addEventListener('cookie-consent-changed', onChange)
    return () => window.removeEventListener('cookie-consent-changed', onChange)
  }, [])

  const resolvedBoard = board ?? cookieBoard
  const showModal = !resolvedBoard && isBoardRoute && isHydrated && !dismissed && consentAnswered

  // Lock background scroll while the modal is open.
  React.useEffect(() => {
    if (!showModal) return
    return lockPageScroll()
  }, [showModal])

  // Focus the question when the pop-up opens, so a keyboard or screen-reader
  // user starts at the top of it rather than somewhere behind it.
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  React.useEffect(() => {
    if (showModal) titleRef.current?.focus({ preventScroll: false })
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
          className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-background/80 backdrop-blur-sm animate-in fade-in-0 duration-200"
          data-board-gate-scroller=""
          onClick={(event) => {
            if (event.target === event.currentTarget) setDismissed(true)
          }}
        >
          {/* At least the screen's height, so a card that fits is centred and
              a card that does not starts at its top. Clicks here, outside the
              card, close the pop-up like the backdrop does. */}
          <div
            className="flex min-h-full items-start justify-center px-3 py-4 sm:items-center sm:p-6"
            data-board-gate-frame=""
            onClick={(event) => {
              if (event.target === event.currentTarget) setDismissed(true)
            }}
          >
            <div className="relative flex w-full max-w-2xl flex-col gap-5 rounded-2xl border border-border bg-card p-5 shadow-2xl animate-in zoom-in-95 fade-in-0 duration-200 sm:p-7">
              <button
                type="button"
                onClick={() => setDismissed(true)}
                aria-label={t('board.gate.dismiss_aria')}
                className="absolute end-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
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

              <div className="flex flex-col gap-1.5 pe-10">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  {t('board.gate.eyebrow')}
                </span>
                <h2
                  id="board-gate-title"
                  ref={titleRef}
                  tabIndex={-1}
                  className="font-heading text-2xl font-semibold tracking-tight text-foreground outline-none sm:text-3xl"
                >
                  {t('board.gate.title')}
                </h2>
                <p id="board-gate-description" className="text-sm text-muted-foreground">
                  {t('board.gate.body')}
                </p>
              </div>

              <BoardQuickPicker
                onChosen={() => {
                  setDismissed(true)
                  // The page was rendered on the server without a board; this
                  // fetches it again with the cookie the store has just written.
                  router.refresh()
                }}
              />

              {/* Explicit way out for anyone who does not know their board yet,
                  or is here for IELTS/EAL where no board applies. */}
              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="mx-auto min-h-11 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                {t('board.gate.browse_without')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BoardGate
