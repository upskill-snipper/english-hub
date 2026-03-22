import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { useShallow } from 'zustand/react/shallow'

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
  totalTimeMinutes: number               // total exam duration for rehydration
  timeRemainingSeconds: number
  isPaused: boolean
  /** Total seconds spent paused (persisted for accurate wall-clock recovery) */
  pausedElapsedSeconds: number
  /** Timestamp (ISO) when the current pause started, null if not paused */
  pausedAt: string | null
  /** Number of times the user switched away from the tab (anti-cheat tracking) */
  tabSwitchCount: number

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
  incrementTabSwitchCount: () => void

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
      totalTimeMinutes: 0,
      timeRemainingSeconds: 0,
      isPaused: false,
      pausedElapsedSeconds: 0,
      pausedAt: null,
      tabSwitchCount: 0,
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
          totalTimeMinutes,
          timeRemainingSeconds: totalTimeMinutes * 60,
          isPaused: false,
          pausedElapsedSeconds: 0,
          pausedAt: null,
          tabSwitchCount: 0,
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

      togglePause: () =>
        set((state) => {
          if (state.isPaused) {
            // Resuming: accumulate the paused duration
            const pausedDuration = state.pausedAt
              ? Math.floor((Date.now() - new Date(state.pausedAt).getTime()) / 1000)
              : 0
            return {
              isPaused: false,
              pausedAt: null,
              pausedElapsedSeconds: state.pausedElapsedSeconds + pausedDuration,
            }
          } else {
            // Pausing: record when the pause started
            return {
              isPaused: true,
              pausedAt: new Date().toISOString(),
            }
          }
        }),

      incrementTabSwitchCount: () =>
        set((state) => ({ tabSwitchCount: state.tabSwitchCount + 1 })),

      submitExam: (board, paperTitle) => {
        const state = get()
        // Calculate actual active time (wall-clock minus paused time)
        const wallClockElapsed = Math.round(
          (Date.now() - new Date(state.startedAt!).getTime()) / 1000
        )
        let totalPaused = state.pausedElapsedSeconds
        if (state.isPaused && state.pausedAt) {
          totalPaused += Math.floor(
            (Date.now() - new Date(state.pausedAt).getTime()) / 1000
          )
        }
        const activeTimeSeconds = Math.max(0, wallClockElapsed - totalPaused)

        const attempt: ExamAttempt = {
          id: `attempt-${Date.now()}`,
          examId: state.currentExamId!,
          board,
          paperTitle,
          startedAt: state.startedAt!,
          completedAt: new Date().toISOString(),
          totalTimeMinutes: state.totalTimeMinutes,
          timeSpentSeconds: activeTimeSeconds,
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
          totalTimeMinutes: 0,
          timeRemainingSeconds: 0,
          isPaused: false,
          pausedElapsedSeconds: 0,
          pausedAt: null,
          tabSwitchCount: 0,
        }),

      setPhase: (phase) => set({ phase }),
    }),
    {
      name: 'english-hub-exam',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state && state.phase === 'in-progress' && state.startedAt && state.totalTimeMinutes > 0) {
          // Recalculate time remaining from wall-clock on rehydration
          // so that time spent away (closed tab / refresh) is properly deducted.
          const totalDurationSeconds = state.totalTimeMinutes * 60
          const elapsedSinceStart = Math.floor(
            (Date.now() - new Date(state.startedAt).getTime()) / 1000
          )
          // Account for accumulated pause time.  If currently paused, also
          // include time from pausedAt to now (that pause is still active).
          let totalPaused = state.pausedElapsedSeconds ?? 0
          if (state.isPaused && state.pausedAt) {
            totalPaused += Math.floor(
              (Date.now() - new Date(state.pausedAt).getTime()) / 1000
            )
          }
          const activeElapsed = Math.max(0, elapsedSinceStart - totalPaused)
          const remaining = Math.max(0, totalDurationSeconds - activeElapsed)
          state.timeRemainingSeconds = remaining

          // If the exam has already expired while the page was closed, auto-expire
          if (remaining <= 0) {
            state.timeRemainingSeconds = 0
          }
        }
        state?.setHasHydrated(true)
      },
      partialize: (state) => ({
        // Persist everything needed for exam recovery and history
        phase: state.phase,
        currentExamId: state.currentExamId,
        currentSectionIndex: state.currentSectionIndex,
        answers: state.answers,
        startedAt: state.startedAt,
        totalTimeMinutes: state.totalTimeMinutes,
        timeRemainingSeconds: state.timeRemainingSeconds,
        isPaused: state.isPaused,
        pausedElapsedSeconds: state.pausedElapsedSeconds,
        pausedAt: state.pausedAt,
        tabSwitchCount: state.tabSwitchCount,
        examHistory: state.examHistory,
      }),
    }
  )
)

// ── Optimized selectors ─────────────────────────────────────────────────────

/** Select phase + hydration status (shallow-compared) */
export const useExamPhaseStatus = () =>
  useExamStore(useShallow((s) => ({ phase: s.phase, _hasHydrated: s._hasHydrated })))

/** Select timer-related state (shallow-compared) -- for the timer hook */
export const useExamTimer = () =>
  useExamStore(
    useShallow((s) => ({
      timeRemainingSeconds: s.timeRemainingSeconds,
      isPaused: s.isPaused,
      setTimeRemaining: s.setTimeRemaining,
      togglePause: s.togglePause,
      tabSwitchCount: s.tabSwitchCount,
      incrementTabSwitchCount: s.incrementTabSwitchCount,
    }))
  )

/** Select only exam history */
export const useExamHistory = () => useExamStore((s) => s.examHistory)

/** Select only the current answers map */
export const useExamAnswers = () => useExamStore((s) => s.answers)

/** Select navigation state (shallow-compared) */
export const useExamNavigation = () =>
  useExamStore(
    useShallow((s) => ({
      currentSectionIndex: s.currentSectionIndex,
      setSection: s.setSection,
      nextSection: s.nextSection,
      prevSection: s.prevSection,
    }))
  )

/** Select exam actions for starting/submitting/resetting (stable references) */
export const useExamActions = () =>
  useExamStore(
    useShallow((s) => ({
      startExam: s.startExam,
      submitExam: s.submitExam,
      resetExam: s.resetExam,
      setAnswer: s.setAnswer,
      setPhase: s.setPhase,
    }))
  )
