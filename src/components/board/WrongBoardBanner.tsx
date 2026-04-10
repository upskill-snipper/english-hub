'use client'

import Link from 'next/link'
import { useBoard, getBoardConfig } from '@/lib/board/board-store'
import type { ExamBoard } from '@/lib/board/board-store'

type Props = {
  contentBoards: ExamBoard[]
  contentName: string
  redirectTo?: string
}

/**
 * Client-side banner that warns the reader that they are viewing content
 * intended for a different exam board. SEO-safe: the banner only renders
 * after Zustand rehydrates, so Google crawlers (which never hydrate and
 * never have a board set) always see the underlying content, while a real
 * user who has chosen a different board gets a clear "Wrong board?"
 * warning and a link back to their own revision hub.
 *
 * - If the user is not hydrated yet -> render nothing (avoids flicker).
 * - If the user has NO board set     -> render nothing (SEO + first-time visitors).
 * - If the user's board is in contentBoards -> render nothing.
 * - Otherwise -> render the amber warning banner.
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
      role="note"
      aria-label="Wrong exam board warning"
      className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm"
    >
      <p className="font-medium text-foreground">
        This content covers{' '}
        <strong>{contentName}</strong>{' '}
        — you&apos;re studying <strong>{userBoardName}</strong>, which may not include this text.
      </p>
      <Link
        href={redirectTo}
        className="mt-2 inline-block font-medium text-primary hover:underline"
      >
        Go to your board&apos;s content →
      </Link>
    </div>
  )
}

export default WrongBoardBanner
