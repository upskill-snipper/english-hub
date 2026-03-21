import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type ExamBoard = 'AQA' | 'Edexcel'

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
