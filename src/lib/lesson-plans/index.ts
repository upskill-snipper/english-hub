// ─── Lesson Plans – Library Re-exports ──────────────────────────────────────
//
// Convenience re-export layer so consumers can import from '@/lib/lesson-plans'
// instead of reaching into '@/data/lesson-plans' directly.

export {
  // Master array
  ALL_LESSON_PLANS,
  allLessonPlans,

  // Lookup / filter functions
  getLessonById,
  getLessonsByText,
  getLessonsByBoard,
  getLessonsByCategory,
  getByText,
  getByBoard,
  getBySkill,
  searchLessons,

  // Category / label helpers
  getLessonCategory,
  getTextLabel,
  getDifficulty,

  // Recommendation engine
  recommendLessons,
} from '@/data/lesson-plans'

export type { LessonPlan, LessonActivity, WorksheetQuestion } from '@/types'
