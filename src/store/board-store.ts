import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { useShallow } from 'zustand/react/shallow'

export type ExamBoard = 'AQA' | 'Edexcel' | 'OCR' | 'WJEC' | 'KS3'

interface BoardState {
  selectedBoard: ExamBoard | null  // null = not yet chosen
  _hasHydrated: boolean
  setBoard: (board: ExamBoard) => void
  clearBoard: () => void
  setHasHydrated: (v: boolean) => void
}

export const useBoardStore = create<BoardState>()(
  persist(
    (set) => ({
      selectedBoard: null,
      _hasHydrated: false,
      setBoard: (board) => set({ selectedBoard: board }),
      clearBoard: () => set({ selectedBoard: null }),
      setHasHydrated: (v) => set({ _hasHydrated: v }),
    }),
    {
      name: 'english-hub-board',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      },
    }
  )
)

// ── Optimized selectors ─────────────────────────────────────────────────────

/** Select only the board value */
export const useSelectedBoard = () => useBoardStore((s) => s.selectedBoard)

/** Select only the hydration flag */
export const useBoardHydrated = () => useBoardStore((s) => s._hasHydrated)

/** Select board + hydration (shallow-compared) */
export const useBoardWithHydration = () =>
  useBoardStore(useShallow((s) => ({ selectedBoard: s.selectedBoard, _hasHydrated: s._hasHydrated })))

/** Select board actions (stable references) */
export const useBoardActions = () =>
  useBoardStore(useShallow((s) => ({ setBoard: s.setBoard, clearBoard: s.clearBoard })))
