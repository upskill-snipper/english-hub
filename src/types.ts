// ─── Shared Types ────────────────────────────────────────────────────────────

export interface LessonActivity {
  title: string
  duration: string
  instructions: string
  differentiation?: { support: string; core: string; stretch: string }
  resources?: string[]
}

export interface WorksheetQuestion {
  question: string
  lines: number
  modelAnswer?: string
  marks?: number
}

export interface LessonPlan {
  id: string
  title: string
  text: string
  board: string
  yearGroup: string
  duration: string
  objectives: string[]
  successCriteria: string[]
  keywords: string[]
  starterActivity: LessonActivity
  mainActivities: LessonActivity[]
  plenaryActivity: LessonActivity
  homework?: string
  worksheetQuestions: WorksheetQuestion[]
  teacherNotes: string[]
  targetedSkills: string[]
}
