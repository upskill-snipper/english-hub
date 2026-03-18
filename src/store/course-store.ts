import { create } from 'zustand'
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
