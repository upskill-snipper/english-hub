'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useBoard } from '@/lib/board/board-store'
import type { ExamBoard } from '@/lib/board/board-store'

type BoardGuardProps = {
  allowedBoards: ExamBoard[]
  redirectTo?: string
  children: React.ReactNode
}

/**
 * Client-side complement to the server-side board guards.
 *
 * Most board filtering should happen in server components (via
 * `getServerBoard()`). This component exists for the few places where we
 * need to react to a board change that happens entirely on the client
 * (e.g. after the user flips board in a settings drawer without a page
 * navigation). It also gracefully handles the pre-hydration state by
 * rendering its children until Zustand has rehydrated.
 */
export function BoardGuard({
  allowedBoards,
  redirectTo = '/revision/poetry?wrongBoard=1',
  children,
}: BoardGuardProps) {
  const router = useRouter()
  const { board, isHydrated } = useBoard()

  useEffect(() => {
    if (!isHydrated) return
    if (board && !allowedBoards.includes(board)) {
      router.replace(redirectTo)
    }
  }, [board, isHydrated, allowedBoards, redirectTo, router])

  return <>{children}</>
}

export default BoardGuard
