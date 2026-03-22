import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ExamAnswer {
  questionId: string
  answer: string
  lastUpdatedAt: string
}

export interface ExamAttempt {
  id: string
  examId: string
  board: string
  paperTitle: string
  startedAt: string
  completedAt: string | null
  totalTimeMinutes: number
  timeSpentSeconds: number
  answers: Record<string, string>
  submitted: boolean
}

type ExamPhase = 'config' | 'in-progress' | 'results'

interface ExamState {
  // ── Current exam session ───────────────────────────────────────────────
  phase: ExamPhase
  currentExamId: string | null
  currentSectionIndex: number
  answers: Record<string, string>        // questionId -> answer text
  startedAt: string | null
  timeRemainingSeconds: number
  isPaused: boolean

  // ── History ────────────────────────────────────────────────────────────
  examHistory: ExamAttempt[]

  // ── Actions ────────────────────────────────────────────────────────────
  startExam: (examId: string, totalTimeMinutes: number) => void
  setAnswer: (questionId: string, answer: string) => void
  setSection: (index: number) => void
  nextSection: (maxSections: number) => void
  prevSection: () => void
  tick: () => void
  setTimeRemaining: (seconds: number) => void
  togglePause: () => void
  submitExam: (board: string, paperTitle: string) => void
  resetExam: () => void
  setPhase: (phase: ExamPhase) => void

  // ── Hydration ──────────────────────────────────────────────────────────
  _hasHydrated: boolean
  setHasHydrated: (v: boolean) => void
}

// ─── Store ───────────────────────────────────────────────────────────────────

export const useExamStore = create<ExamState>()(
  persist(
    (set, get) => ({
      phase: 'config',
      currentExamId: null,
      currentSectionIndex: 0,
      answers: {},
      startedAt: null,
      timeRemainingSeconds: 0,
      isPaused: false,
      examHistory: [],
      _hasHydrated: false,

      setHasHydrated: (v) => set({ _hasHydrated: v }),

      startExam: (examId, totalTimeMinutes) =>
        set({
          phase: 'in-progress',
          currentExamId: examId,
          currentSectionIndex: 0,
          answers: {},
          startedAt: new Date().toISOString(),
          timeRemainingSeconds: totalTimeMinutes * 60,
          isPaused: false,
        }),

      setAnswer: (questionId, answer) =>
        set((state) => ({
          answers: { ...state.answers, [questionId]: answer },
        })),

      setSection: (index) => set({ currentSectionIndex: index }),

      nextSection: (maxSections) =>
        set((state) => ({
          currentSectionIndex: Math.min(state.currentSectionIndex + 1, maxSections - 1),
        })),

      prevSection: () =>
        set((state) => ({
          currentSectionIndex: Math.max(state.currentSectionIndex - 1, 0),
        })),

      tick: () =>
        set((state) => {
          if (state.isPaused || state.timeRemainingSeconds <= 0) return state
          return { timeRemainingSeconds: state.timeRemainingSeconds - 1 }
        }),

      setTimeRemaining: (seconds) =>
        set({ timeRemainingSeconds: Math.max(0, seconds) }),

      togglePause: () => set((state) => ({ isPaused: !state.isPaused })),

      submitExam: (board, paperTitle) => {
        const state = get()
        const attempt: ExamAttempt = {
          id: `attempt-${Date.now()}`,
          examId: state.currentExamId!,
          board,
          paperTitle,
          startedAt: state.startedAt!,
          completedAt: new Date().toISOString(),
          totalTimeMinutes: Math.ceil(
            (state.timeRemainingSeconds + (Date.now() - new Date(state.startedAt!).getTime()) / 1000) / 60
          ),
          timeSpentSeconds: Math.round(
            (Date.now() - new Date(state.startedAt!).getTime()) / 1000
          ),
          answers: { ...state.answers },
          submitted: true,
        }

        set((s) => ({
          phase: 'results',
          isPaused: true,
          examHistory: [attempt, ...s.examHistory].slice(0, 20), // Keep last 20
        }))
      },

      resetExam: () =>
        set({
          phase: 'config',
          currentExamId: null,
          currentSectionIndex: 0,
          answers: {},
          startedAt: null,
          timeRemainingSeconds: 0,
          isPaused: false,
        }),

      setPhase: (phase) => set({ phase }),
    }),
    {
      name: 'english-hub-exam',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      },
      partialize: (state) => ({
        // Persist everything needed for exam recovery and history
        phase: state.phase,
        currentExamId: state.currentExamId,
        currentSectionIndex: state.currentSectionIndex,
        answers: state.answers,
        startedAt: state.startedAt,
        timeRemainingSeconds: state.timeRemainingSeconds,
        isPaused: state.isPaused,
        examHistory: state.examHistory,
      }),
    }
  )
)
