'use client'

import { useState } from 'react'
import { useBoard, getBoardConfig, type ExamBoard } from '@/lib/board/board-store'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface BoardMismatchBannerProps {
  /** The board this page is showing content for. */
  pageBoard: ExamBoard
  /** Optional override for the page-board display name. */
  pageBoardLabel?: string
}

export default function BoardMismatchBanner({
  pageBoard,
  pageBoardLabel,
}: BoardMismatchBannerProps) {
  const { board: cookieBoard, isHydrated, setBoard } = useBoard()
  const [dismissed, setDismissed] = useState(false)

  // Don't render until hydrated (avoids SSR / client mismatch)
  if (!isHydrated) return null
  // No cookie set: don't show anything (no opinion to mismatch)
  if (!cookieBoard) return null
  // Cookie matches page: nothing to do
  if (cookieBoard === pageBoard) return null
  // User dismissed
  if (dismissed) return null

  const cookieBoardLabel = getBoardConfig(cookieBoard)?.shortName ?? cookieBoard
  const pageLabel = pageBoardLabel ?? getBoardConfig(pageBoard)?.shortName ?? pageBoard

  return (
    <div
      role="status"
      className="rounded-lg border border-amber-300/40 bg-amber-50/60 dark:bg-amber-900/10 p-4 mb-6"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <p className="text-sm text-foreground font-medium">
            You&apos;re viewing {pageLabel} content. Your saved board is {cookieBoardLabel}.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="default"
              onClick={() => {
                setBoard(pageBoard)
                // Reload the page so server-rendered chrome refreshes
                if (typeof window !== 'undefined') window.location.reload()
              }}
            >
              Switch to {pageLabel}
            </Button>
            <Button size="sm" variant="outline" onClick={() => setDismissed(true)}>
              Stay on {cookieBoardLabel}
            </Button>
          </div>
        </div>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  )
}
