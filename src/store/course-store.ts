import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'
import type { CourseData, CourseModule } from '@/lib/types'

interface CourseState {
  currentCourse: CourseData | null
  currentModule: CourseModule | null
  currentModuleIndex: number
  quizAnswers: Record<string, number>
  completedModules: Set<string>
  setCourse: (course: CourseData) => void
  setModule: (module: CourseModule, index: number) => void
  setQuizAnswer: (quizId: string, answer: number) => void
  markModuleComplete: (moduleId: string) => void
  reset: () => void
}

export const useCourseStore = create<CourseState>((set) => ({
  currentCourse: null,
  currentModule: null,
  currentModuleIndex: 0,
  quizAnswers: {},
  completedModules: new Set(),
  setCourse: (course) => set({ currentCourse: course }),
  setModule: (module, index) => set({ currentModule: module, currentModuleIndex: index }),
  setQuizAnswer: (quizId, answer) =>
    set((state) => ({ quizAnswers: { ...state.quizAnswers, [quizId]: answer } })),
  markModuleComplete: (moduleId) =>
    set((state) => {
      const completed = new Set(state.completedModules)
      completed.add(moduleId)
      return { completedModules: completed }
    }),
  reset: () =>
    set({
      currentCourse: null,
      currentModule: null,
      currentModuleIndex: 0,
      quizAnswers: {},
      completedModules: new Set(),
    }),
}))

// ── Optimized selectors ─────────────────────────────────────────────────────

/** Select completed modules + markModuleComplete (shallow-compared) */
export const useCourseProgress = () =>
  useCourseStore(
    useShallow((s) => ({
      completedModules: s.completedModules,
      markModuleComplete: s.markModuleComplete,
    }))
  )

/** Select course actions (stable references) */
export const useCourseActions = () =>
  useCourseStore(
    useShallow((s) => ({
      setCourse: s.setCourse,
      setModule: s.setModule,
      setQuizAnswer: s.setQuizAnswer,
      markModuleComplete: s.markModuleComplete,
      reset: s.reset,
    }))
  )
