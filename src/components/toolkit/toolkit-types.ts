// ─── Toolkit Shared Types ─────────────────────────────────────────────────
// Shared types and localStorage helpers for the Student Toolkit.
// All data is persisted in localStorage -- no Supabase dependency.
// ──────────────────────────────────────────────────────────────────────────

export interface QuizHistoryEntry {
  id: string
  topic: string
  score: number          // percentage 0-100
  total: number
  correct: number
  date: string           // ISO string
  board: string
  difficulty?: string
}

export interface StudiedPoem {
  slug: string
  title: string
  date: string
  board: string
}

export interface GameScoreEntry {
  game: string
  score: number
  date: string
  board: string
}

export interface RevisionProgressEntry {
  topic: string
  completed: boolean
  date: string
  board: string
}

export interface MarkingHistoryEntry {
  id: string
  topic: string
  grade: string
  date: string
  board: string
  score?: number
}

export interface SavedMaterial {
  id: string
  title: string
  type: 'test' | 'notes' | 'quotes'
  topic: string
  board: string
  dateCreated: string
  data: unknown
}

export interface GeneratedQuestion {
  id: string
  type: 'multiple-choice' | 'short-answer'
  question: string
  options?: string[]
  correctAnswer: string | number
  explanation: string
  topic: string
}

export interface GeneratedTest {
  questions: GeneratedQuestion[]
  metadata: {
    topic: string
    difficulty: string
    board: string
    generatedAt: string
  }
}

// ─── localStorage Keys ─────────────────────────────────────────────────────

export const LS_KEYS = {
  quizHistory: 'english-hub-quiz-history',
  studiedPoems: 'english-hub-studied-poems',
  gameScores: 'english-hub-game-scores',
  revisionProgress: 'english-hub-revision-progress',
  markingHistory: 'english-hub-marking-history',
  myMaterials: 'english-hub-my-materials',
  streakDates: 'english-hub-streak-dates',
} as const

// ─── Safe localStorage helpers ─────────────────────────────────────────────

export function lsGet<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function lsSet<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // localStorage full or blocked
  }
}

// ─── Grade colour helpers ──────────────────────────────────────────────────

export function gradeColour(grade: number): string {
  if (grade >= 9) return 'text-amber-500'     // gold
  if (grade >= 7) return 'text-emerald-500'   // green
  if (grade >= 4) return 'text-amber-500'     // amber
  return 'text-red-500'                       // red
}

export function gradeBgColour(grade: number): string {
  if (grade >= 9) return 'bg-amber-500/10 border-amber-500/25'
  if (grade >= 7) return 'bg-emerald-500/10 border-emerald-500/25'
  if (grade >= 4) return 'bg-amber-500/10 border-amber-500/25'
  return 'bg-red-500/10 border-red-500/25'
}
