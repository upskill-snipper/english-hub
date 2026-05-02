'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Re-export server-safe types and data from board-config so existing imports keep working.
export { BOARDS, getBoardConfig, getDisplayName } from './board-config'
export type { ExamBoard, BoardConfig, BoardCategory } from './board-config'
import { BOARDS } from './board-config'
import type { ExamBoard } from './board-config'

type State = { board: ExamBoard | null; isHydrated: boolean }
type Actions = {
  setBoard: (b: ExamBoard) => void
  clearBoard: () => void
  _setHydrated: () => void
}

// Cookie-write helper kept in one place so the flags stay in sync with
// the middleware writer (`/api/board` POST + the BOARD_LANDING_REDIRECTS
// path in middleware.ts). All three writers must agree on path/maxAge/
// sameSite or the server reader (`getServerBoard`) and middleware gate
// will see a different cookie scope than the client store.
function writeBoardCookie(value: string) {
  if (typeof document === 'undefined') return
  document.cookie = `english-hub-board=${value}; path=/; max-age=31536000; SameSite=Lax`
}

function clearBoardCookie() {
  if (typeof document === 'undefined') return
  document.cookie = 'english-hub-board=; path=/; max-age=0; SameSite=Lax'
}

function readBoardCookie(): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.split('; ').find((row) => row.startsWith('english-hub-board='))
  if (!match) return null
  const value = match.split('=')[1]
  return value ? decodeURIComponent(value) : null
}

export const useBoardStore = create<State & Actions>()(
  persist(
    (set) => ({
      board: null,
      isHydrated: false,
      setBoard: (b) => {
        set({ board: b })
        writeBoardCookie(b)
      },
      clearBoard: () => {
        set({ board: null })
        clearBoardCookie()
      },
      _setHydrated: () => set({ isHydrated: true }),
    }),
    {
      name: 'english-hub-board',
      onRehydrateStorage: () => (state) => {
        if (!state) return

        // localStorage → cookie repair (one-way). If the store has a board
        // but the cookie is missing (e.g. user cleared cookies but kept
        // localStorage, or the cookie expired), re-write the cookie so
        // middleware + server components see the same value as the client store.
        if (state.board && !readBoardCookie()) {
          writeBoardCookie(state.board)
        }

        // 02 May 2026 — cookie → store bridge. When middleware writes the
        // cookie via the ?setBoard=<id> mechanism, the Zustand store stays
        // empty until the user explicitly calls setBoard(). Without this
        // bridge, components reading useBoard() would show "no board" while
        // the server-rendered content shows the new board (the "different
        // board without my knowledge" symptom). Validate against BOARDS to
        // defend against stale/invalid cookie values.
        if (!state.board) {
          const cookieValue = readBoardCookie()
          if (cookieValue) {
            const validIds = BOARDS.map((b) => b.id) as readonly string[]
            if (validIds.includes(cookieValue)) {
              state.board = cookieValue as ExamBoard
            }
          }
        }

        state._setHydrated()
      },
    },
  ),
)

export function useBoard() {
  const board = useBoardStore((s) => s.board)
  const isHydrated = useBoardStore((s) => s.isHydrated)
  const setBoard = useBoardStore((s) => s.setBoard)
  const clearBoard = useBoardStore((s) => s.clearBoard)
  return { board, isHydrated, setBoard, clearBoard }
}
