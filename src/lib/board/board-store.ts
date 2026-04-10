'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Re-export server-safe types and data from board-config so existing imports keep working.
export { BOARDS, getBoardConfig } from './board-config'
export type { ExamBoard, BoardConfig } from './board-config'
import type { ExamBoard } from './board-config'

type State = { board: ExamBoard | null; isHydrated: boolean }
type Actions = { setBoard: (b: ExamBoard) => void; clearBoard: () => void; _setHydrated: () => void }

export const useBoardStore = create<State & Actions>()(
  persist(
    (set) => ({
      board: null,
      isHydrated: false,
      setBoard: (b) => {
        set({ board: b })
        if (typeof document !== 'undefined') {
          document.cookie = `english-hub-board=${b}; path=/; max-age=31536000; SameSite=Lax`
        }
      },
      clearBoard: () => {
        set({ board: null })
        if (typeof document !== 'undefined') {
          document.cookie = 'english-hub-board=; path=/; max-age=0'
        }
      },
      _setHydrated: () => set({ isHydrated: true }),
    }),
    {
      name: 'english-hub-board',
      onRehydrateStorage: () => (state) => state?._setHydrated(),
    }
  )
)

export function useBoard() {
  const board = useBoardStore((s) => s.board)
  const isHydrated = useBoardStore((s) => s.isHydrated)
  const setBoard = useBoardStore((s) => s.setBoard)
  const clearBoard = useBoardStore((s) => s.clearBoard)
  return { board, isHydrated, setBoard, clearBoard }
}
