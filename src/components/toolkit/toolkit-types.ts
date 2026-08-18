// ─── Toolkit Shared Types ─────────────────────────────────────────────────
// Shared types and localStorage helpers for the Student Toolkit.
// All data is persisted in localStorage -- no Supabase dependency.
// ──────────────────────────────────────────────────────────────────────────

export interface QuizHistoryEntry {
  id: string
  topic: string
  score: number // percentage 0-100 for this topic
  total: number // questions asked on this topic in the attempt
  correct: number
  date: string // ISO string
  board: string
  difficulty?: string
  /** Groups the per-topic rows written by a single quiz attempt. */
  attemptId?: string
  /** Attempt-level metadata, duplicated on every row of the attempt. */
  mode?: string
  attemptCorrect?: number
  attemptTotal?: number
  attemptPercentage?: number
}

/**
 * Shape written by the quiz engine before per-topic entries existed:
 * one row per attempt with a RAW correct count in `score` and the topic
 * split tucked inside `topicBreakdown`. Kept only so old localStorage
 * data can be migrated - never write this shape again.
 */
export interface LegacyQuizResult {
  date: string
  mode: string
  score: number // raw correct count, NOT a percentage
  total: number
  percentage: number
  grade?: string
  topics?: string[]
  topicBreakdown?: Record<string, { correct: number; total: number }>
}

function isLegacyQuizResult(entry: unknown): entry is LegacyQuizResult {
  if (typeof entry !== 'object' || entry === null) return false
  const e = entry as Record<string, unknown>
  return typeof e.percentage === 'number' && typeof e.topic !== 'string'
}

/**
 * Normalise a raw quiz-history array (which may mix the legacy per-attempt
 * shape with the current per-topic shape) into per-topic QuizHistoryEntry
 * rows. Legacy attempts are expanded via their topicBreakdown; a legacy
 * attempt without one becomes a single 'mixed' row scored by its overall
 * percentage.
 */
export function normaliseQuizHistory(raw: unknown[]): QuizHistoryEntry[] {
  const out: QuizHistoryEntry[] = []
  raw.forEach((entry, index) => {
    if (isLegacyQuizResult(entry)) {
      const attemptId = `legacy-${entry.date}-${index}`
      const breakdown = entry.topicBreakdown
      const shared = {
        date: entry.date,
        board: 'unknown',
        attemptId,
        mode: entry.mode,
        attemptCorrect: entry.score,
        attemptTotal: entry.total,
        attemptPercentage: entry.percentage,
      }
      if (breakdown && Object.keys(breakdown).length > 0) {
        for (const [topic, data] of Object.entries(breakdown)) {
          if (!data || typeof data.total !== 'number') continue
          out.push({
            id: `${attemptId}-${topic}`,
            topic,
            score: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
            total: data.total,
            correct: data.correct,
            ...shared,
          })
        }
      } else {
        out.push({
          id: attemptId,
          topic: 'mixed',
          score: Math.round(entry.percentage),
          total: entry.total,
          correct: entry.score,
          ...shared,
        })
      }
      return
    }

    const e = entry as Partial<QuizHistoryEntry> | null
    if (e && typeof e.topic === 'string' && typeof e.score === 'number') {
      out.push(e as QuizHistoryEntry)
    }
  })
  return out
}

/**
 * Collapse per-topic rows back into whole attempts (oldest first) - the
 * shape grade predictors want: one percentage per quiz sat.
 */
export interface QuizAttemptSummary {
  attemptId: string
  date: string
  percentage: number
  correct: number
  total: number
  mode?: string
}

export function quizAttemptsFromHistory(entries: QuizHistoryEntry[]): QuizAttemptSummary[] {
  const attempts = new Map<
    string,
    {
      attemptId: string
      date: string
      percentage?: number
      correct: number
      total: number
      mode?: string
    }
  >()
  for (const e of entries) {
    const key = e.attemptId ?? e.id
    const existing = attempts.get(key)
    if (existing) {
      existing.correct += e.correct
      existing.total += e.total
      if (e.attemptPercentage != null) existing.percentage = e.attemptPercentage
      if (existing.mode == null && e.mode != null) existing.mode = e.mode
    } else {
      attempts.set(key, {
        attemptId: key,
        date: e.date,
        percentage: e.attemptPercentage ?? undefined,
        correct: e.correct,
        total: e.total,
        mode: e.mode,
      })
    }
  }
  return [...attempts.values()]
    .map((a) => ({
      attemptId: a.attemptId,
      date: a.date,
      correct: a.correct,
      total: a.total,
      percentage: a.percentage ?? (a.total > 0 ? Math.round((a.correct / a.total) * 100) : 0),
      mode: a.mode,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
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
  if (grade >= 9) return 'text-amber-500' // gold
  if (grade >= 7) return 'text-emerald-500' // green
  if (grade >= 4) return 'text-amber-500' // amber
  return 'text-red-500' // red
}

export function gradeBgColour(grade: number): string {
  if (grade >= 9) return 'bg-amber-500/10 border-amber-500/25'
  if (grade >= 7) return 'bg-emerald-500/10 border-emerald-500/25'
  if (grade >= 4) return 'bg-amber-500/10 border-amber-500/25'
  return 'bg-red-500/10 border-red-500/25'
}
