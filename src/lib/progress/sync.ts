import type { SupabaseClient } from '@supabase/supabase-js'

// ─── Types ─────────────────────────────────────────────────────────────

export type ProgressType =
  | 'poem_studied'
  | 'game_played'
  | 'quiz_completed'
  | 'text_studied'
  | 'reading_assessment'
  | 'essay_marked'
  | 'flashcard_session'

export interface ProgressEntry {
  slug?: string
  score?: number
  max_score?: number
  grade?: string
  duration_seconds?: number
  metadata?: Record<string, unknown>
  created_at?: string // ISO string
}

interface StudentProgressRow {
  user_id: string
  progress_type: ProgressType
  slug: string | null
  score: number | null
  max_score: number | null
  grade: string | null
  duration_seconds: number | null
  metadata: Record<string, unknown>
  created_at: string
  updated_at: string
}

// ─── localStorage keys ─────────────────────────────────────────────────

const LS_KEYS = {
  studiedPoems: 'english-hub-studied-poems',
  gameScores: 'english-hub-game-scores',
  quizHistory: 'english-hub-quiz-history',
  revisionProgress: 'english-hub-revision-progress',
} as const

// ─── Helpers ───────────────────────────────────────────────────────────

function safeJsonParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback
  try {
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

/**
 * Read localStorage data and transform into student_progress rows.
 * Runs client-side only.
 */
function collectLocalStorageProgress(): Omit<StudentProgressRow, 'user_id'>[] {
  if (typeof window === 'undefined') return []

  const rows: Omit<StudentProgressRow, 'user_id'>[] = []
  const now = new Date().toISOString()

  // ── Studied poems ────────────────────────────────────────────────────
  const poems = safeJsonParse<Record<string, unknown>[]>(
    localStorage.getItem(LS_KEYS.studiedPoems),
    []
  )
  for (const poem of poems) {
    const slug = (poem.slug ?? poem.id ?? poem.title ?? '') as string
    if (!slug) continue
    rows.push({
      progress_type: 'poem_studied',
      slug,
      score: null,
      max_score: null,
      grade: null,
      duration_seconds: typeof poem.duration === 'number' ? poem.duration : null,
      metadata: poem,
      created_at: (poem.date as string) ?? (poem.timestamp as string) ?? now,
      updated_at: now,
    })
  }

  // ── Game scores ──────────────────────────────────────────────────────
  const games = safeJsonParse<Record<string, unknown>[]>(
    localStorage.getItem(LS_KEYS.gameScores),
    []
  )
  for (const game of games) {
    rows.push({
      progress_type: 'game_played',
      slug: (game.game ?? game.slug ?? game.id ?? '') as string || null,
      score: typeof game.score === 'number' ? game.score : null,
      max_score: typeof game.maxScore === 'number' ? game.maxScore : null,
      grade: (game.grade as string) ?? null,
      duration_seconds: typeof game.duration === 'number' ? game.duration : null,
      metadata: game,
      created_at: (game.date as string) ?? (game.timestamp as string) ?? now,
      updated_at: now,
    })
  }

  // ── Quiz history ─────────────────────────────────────────────────────
  const quizzes = safeJsonParse<Record<string, unknown>[]>(
    localStorage.getItem(LS_KEYS.quizHistory),
    []
  )
  for (const quiz of quizzes) {
    rows.push({
      progress_type: 'quiz_completed',
      slug: (quiz.slug ?? quiz.quizId ?? quiz.id ?? '') as string || null,
      score: typeof quiz.score === 'number' ? quiz.score : null,
      max_score: typeof quiz.total === 'number' ? quiz.total : (typeof quiz.maxScore === 'number' ? quiz.maxScore : null),
      grade: (quiz.grade as string) ?? null,
      duration_seconds: typeof quiz.duration === 'number' ? quiz.duration : null,
      metadata: quiz,
      created_at: (quiz.date as string) ?? (quiz.timestamp as string) ?? now,
      updated_at: now,
    })
  }

  // ── Revision / flashcard progress ────────────────────────────────────
  const revision = safeJsonParse<Record<string, unknown>>(
    localStorage.getItem(LS_KEYS.revisionProgress),
    {}
  )
  // revision-progress is often keyed by poem slug → { level, lastReviewed, ... }
  for (const [slug, value] of Object.entries(revision)) {
    if (!value || typeof value !== 'object') continue
    const entry = value as Record<string, unknown>
    rows.push({
      progress_type: 'flashcard_session',
      slug,
      score: typeof entry.level === 'number' ? entry.level : null,
      max_score: null,
      grade: null,
      duration_seconds: null,
      metadata: entry,
      created_at: (entry.lastReviewed as string) ?? (entry.date as string) ?? now,
      updated_at: now,
    })
  }

  return rows
}

// ─── Public API ────────────────────────────────────────────────────────

/**
 * Sync all localStorage progress data to Supabase.
 * Deduplicates by (user_id, progress_type, slug, created_at).
 */
export async function syncProgressToSupabase(supabase: SupabaseClient): Promise<{
  synced: number
  errors: string[]
}> {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { synced: 0, errors: ['Not authenticated'] }

  const localRows = collectLocalStorageProgress()
  if (localRows.length === 0) return { synced: 0, errors: [] }

  const errors: string[] = []
  let synced = 0

  // Batch upsert in chunks of 50
  const BATCH_SIZE = 50
  for (let i = 0; i < localRows.length; i += BATCH_SIZE) {
    const batch = localRows.slice(i, i + BATCH_SIZE).map((row) => ({
      ...row,
      user_id: user.id,
    }))

    // Check for existing entries to avoid duplicates
    const { data: existing } = await supabase
      .from('student_progress')
      .select('progress_type, slug, created_at')
      .eq('user_id', user.id)
      .in('progress_type', batch.map((r) => r.progress_type))

    const existingKeys = new Set(
      (existing ?? []).map(
        (e: { progress_type: string; slug: string | null; created_at: string }) =>
          `${e.progress_type}|${e.slug ?? ''}|${e.created_at}`
      )
    )

    const newRows = batch.filter(
      (r) => !existingKeys.has(`${r.progress_type}|${r.slug ?? ''}|${r.created_at}`)
    )

    if (newRows.length === 0) continue

    const { error } = await supabase.from('student_progress').insert(newRows)
    if (error) {
      errors.push(`Batch ${i}: ${error.message}`)
    } else {
      synced += newRows.length
    }
  }

  return { synced, errors }
}

/**
 * Load all progress from Supabase for the authenticated user.
 */
export async function loadProgressFromSupabase(supabase: SupabaseClient): Promise<{
  data: StudentProgressRow[]
  error: string | null
}> {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { data: [], error: 'Not authenticated' }

  const { data, error } = await supabase
    .from('student_progress')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) return { data: [], error: error.message }
  return { data: data as StudentProgressRow[], error: null }
}

/**
 * Save a single progress entry (writes to both Supabase and localStorage).
 */
export async function saveProgress(
  supabase: SupabaseClient,
  type: ProgressType,
  data: ProgressEntry
): Promise<{ success: boolean; error: string | null }> {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { success: false, error: 'Not authenticated' }

  const now = new Date().toISOString()

  const { error } = await supabase.from('student_progress').insert({
    user_id: user.id,
    progress_type: type,
    slug: data.slug ?? null,
    score: data.score ?? null,
    max_score: data.max_score ?? null,
    grade: data.grade ?? null,
    duration_seconds: data.duration_seconds ?? null,
    metadata: data.metadata ?? {},
    created_at: data.created_at ?? now,
    updated_at: now,
  })

  if (error) return { success: false, error: error.message }
  return { success: true, error: null }
}
