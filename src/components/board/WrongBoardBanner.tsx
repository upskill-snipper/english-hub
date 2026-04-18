'use client'

import Link from 'next/link'
import { ArrowRight, Lock, RefreshCw } from 'lucide-react'
import { useBoard, getBoardConfig } from '@/lib/board/board-store'
import type { ExamBoard } from '@/lib/board/board-store'

type Props = {
  contentBoards: ExamBoard[]
  contentName: string
  redirectTo?: string
}

/**
 * Client-side STRICT content gate. Used to hide content from users whose
 * exam board doesn't study this text / topic.
 *
 * Behaviour:
 * - Not hydrated yet -> render nothing (avoids flicker).
 * - No board set     -> render nothing (SEO crawlers + first-time visitors see content).
 * - Board matches    -> render nothing (content shows through).
 * - Board mismatch   -> render a full-width blocking screen that covers the content.
 *
 * When used alongside a server layout, the layout passes {children}, and this
 * component is rendered above them. We use position: fixed + z-50 so the
 * blocker covers the whole viewport for mismatched users.
 */
export function WrongBoardBanner({
  contentBoards,
  contentName,
  redirectTo = '/revision',
}: Props) {
  const { board, isHydrated } = useBoard()

  if (!isHydrated) return null
  if (!board) return null
  if (contentBoards.includes(board)) return null

  const userBoardName = getBoardConfig(board)?.name ?? 'your board'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Wrong exam board"
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-background/95 p-4 backdrop-blur-md"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border/60 bg-card/90 p-8 shadow-2xl backdrop-blur-xl backdrop-saturate-150">
        {/* Decorative gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-rose-500/10"
        />
        <div className="relative flex flex-col items-center gap-5 text-center">
          <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
            <Lock className="size-7" aria-hidden="true" />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
              Not part of your course
            </h2>
            <p className="text-sm text-muted-foreground">
              This page covers <strong className="text-foreground">{contentName}</strong>, which is
              not studied on <strong className="text-foreground">{userBoardName}</strong>.
              You&apos;re only shown content that matches your exam board.
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 pt-2">
            <Link
              href={redirectTo}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Back to your {userBoardName} content
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/board-select?change=1"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border/60 bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <RefreshCw className="size-4" aria-hidden="true" />
              Change exam board
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WrongBoardBanner
