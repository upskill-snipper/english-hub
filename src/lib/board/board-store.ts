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
      // 02 May 2026 - COOKIE IS AUTHORITATIVE.
      //
      // The cookie is the single source of truth for the user's current
      // board. Middleware writes it on every `?setBoard=<id>` redirect
      // (the homepage cards, BoardSwitcher, BoardSelectorSection); the
      // server reader `getServerBoard()` reads it for SSR. localStorage
      // is purely a client-side cache for fast first paint and survives
      // the cookie expiring.
      //
      // Rule: if the cookie has a valid board, the store ALWAYS adopts it
      // (overriding any stale localStorage value). The previous
      // `if (!state.board)` gate was a real bug - once a user had a board
      // in localStorage (e.g. from earlier testing), every later cookie
      // change via setBoard was silently ignored, the header chip stayed
      // on the old board, and clicking "AQA" still rendered IGCSE
      // content. Reported in the wild on 2026-05-02 ship day.
      //
      // onRehydrateStorage is the cookie<->store bridge: it assigns
      // state.board from readBoardCookie() when the cookie wins, or calls
      // writeBoardCookie(state.board) to repair a missing cookie.
      onRehydrateStorage: () => (state) => {
        if (!state) return

        const validIds = BOARDS.map((b) => b.id) as readonly string[]
        const cookieValue = readBoardCookie()
        if (cookieValue && validIds.includes(cookieValue)) {
          // Cookie wins. Apply if different from cached store value.
          if (cookieValue !== state.board) {
            state.board = cookieValue as ExamBoard
          }
        } else if (state.board && validIds.includes(state.board)) {
          // No cookie (cleared / expired / private window) but we have a
          // valid cached board - repair the cookie so middleware + server
          // components see the same value as the client store.
          writeBoardCookie(state.board)
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
