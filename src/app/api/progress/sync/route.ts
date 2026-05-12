import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'

// ─── POST /api/progress/sync ──────────────────────────────────────────
//
// Bulk upsert localStorage progress into Supabase tables. Splits the
// payload across four tables — `progress_poems`, `progress_games`,
// `progress_quizzes`, `progress_reading_age` — and stamps `user_id`
// from the authenticated session on every row (clients cannot forge
// the user id by including it in the body).
//
// Auth: requires a Supabase session — returns 401 otherwise.
// Rate limit: 10 syncs per hour per user (writes can be expensive and
// the typical client only needs one sync per session).
//
// Response shape (always):
//   { inserted: number, updated: number, errors: string[] }
//
// `errors` is best-effort per-table — a failure on one table does not
// abort the others, and partial successes are still reported in the
// counters. This avoids losing already-committed work on a partial
// failure (e.g. quizzes succeed but reading_age trips a constraint).

// ─── Validation ───────────────────────────────────────────────────────

const isoDate = z.string().datetime().optional()

const poemSchema = z.object({
  slug: z.string().min(1).max(200),
  board: z.string().max(64).optional(),
  status: z.string().max(32).optional(),
  annotatedLines: z.number().int().nonnegative().optional(),
  lastSeenAt: isoDate,
})

const gameSchema = z.object({
  slug: z.string().min(1).max(200),
  bestScore: z.number().nonnegative().optional(),
  totalPlays: z.number().int().nonnegative().optional(),
  totalTimeSeconds: z.number().int().nonnegative().optional(),
  lastPlayedAt: isoDate,
})

const quizSchema = z.object({
  quizId: z.string().min(1).max(200),
  attempts: z.number().int().nonnegative().optional(),
  bestScore: z.number().nonnegative().optional(),
  lastScore: z.number().nonnegative().optional(),
  completedAt: isoDate,
})

const readingAgeSchema = z.object({
  passageId: z.string().min(1).max(200),
  readingAgeYears: z.number().nonnegative().optional(),
  comprehensionScore: z.number().nonnegative().optional(),
  timeSeconds: z.number().int().nonnegative().optional(),
  completedAt: isoDate,
})

// Cap total payload to keep upserts inside Supabase's request budget
// and to bound the work a single rate-limited request can do.
const MAX_PER_ARRAY = 500

const payloadSchema = z.object({
  poems: z.array(poemSchema).max(MAX_PER_ARRAY).optional(),
  games: z.array(gameSchema).max(MAX_PER_ARRAY).optional(),
  quizzes: z.array(quizSchema).max(MAX_PER_ARRAY).optional(),
  readingAge: z.array(readingAgeSchema).max(MAX_PER_ARRAY).optional(),
})

type Payload = z.infer<typeof payloadSchema>

interface SyncResult {
  inserted: number
  updated: number
  errors: string[]
}

// Minimal subset of the Supabase client shape this route uses. We
// keep it loose so the test harness can swap in a mock without
// pulling the full @supabase/ssr type surface.
interface SupabaseLike {
  auth: {
    getUser: () => Promise<{
      data: { user: { id: string } | null }
      error: { message: string } | null
    }>
  }
  from: (table: string) => {
    select: (cols: string) => {
      eq: (
        col: string,
        val: string,
      ) => {
        in: (
          col: string,
          vals: string[],
        ) => Promise<{
          data: Array<Record<string, unknown>> | null
          error: { message: string } | null
        }>
      }
    }
    upsert: (
      rows: Array<Record<string, unknown>>,
      opts?: { onConflict?: string },
    ) => Promise<{ error: { message: string } | null }>
    insert: (rows: Array<Record<string, unknown>>) => Promise<{ error: { message: string } | null }>
  }
}

// ─── Per-table helpers ────────────────────────────────────────────────
//
// Each helper is responsible for: pre-counting which rows already
// exist (so we can split inserted vs. updated cleanly), upserting
// the batch, and surfacing any DB error as a string in `errors`.

async function syncUpsertTable<T extends { [k: string]: unknown }>(
  supabase: SupabaseLike,
  table: string,
  conflictKey: string,
  keyField: keyof T,
  rows: Array<Record<string, unknown>>,
  rowKeys: string[],
  result: SyncResult,
): Promise<void> {
  if (rows.length === 0) return

  // Determine which keys are already present so we can attribute
  // counts. A failure here is non-fatal — fall back to treating
  // every row as inserted, which is the safer over-count.
  let existingKeys = new Set<string>()
  try {
    const userId = rows[0]?.user_id as string
    const { data, error } = await supabase
      .from(table)
      .select(String(keyField))
      .eq('user_id', userId)
      .in(String(keyField), rowKeys)

    if (!error && Array.isArray(data)) {
      existingKeys = new Set(data.map((r) => String(r[keyField as string])))
    }
  } catch {
    // Swallow — we'll just over-attribute to inserted.
  }

  const { error } = await supabase.from(table).upsert(rows, { onConflict: conflictKey })

  if (error) {
    result.errors.push(`${table}: ${error.message}`)
    return
  }

  for (const key of rowKeys) {
    if (existingKeys.has(key)) {
      result.updated += 1
    } else {
      result.inserted += 1
    }
  }
}

async function syncPoems(
  supabase: SupabaseLike,
  userId: string,
  poems: NonNullable<Payload['poems']>,
  result: SyncResult,
): Promise<void> {
  const rows = poems.map((p) => ({
    user_id: userId,
    slug: p.slug,
    board: p.board ?? null,
    status: p.status ?? null,
    annotated_lines: p.annotatedLines ?? null,
    last_seen_at: p.lastSeenAt ?? null,
  }))
  await syncUpsertTable(
    supabase,
    'progress_poems',
    'user_id,slug',
    'slug',
    rows,
    poems.map((p) => p.slug),
    result,
  )
}

async function syncGames(
  supabase: SupabaseLike,
  userId: string,
  games: NonNullable<Payload['games']>,
  result: SyncResult,
): Promise<void> {
  const rows = games.map((g) => ({
    user_id: userId,
    slug: g.slug,
    best_score: g.bestScore ?? null,
    total_plays: g.totalPlays ?? null,
    total_time_seconds: g.totalTimeSeconds ?? null,
    last_played_at: g.lastPlayedAt ?? null,
  }))
  await syncUpsertTable(
    supabase,
    'progress_games',
    'user_id,slug',
    'slug',
    rows,
    games.map((g) => g.slug),
    result,
  )
}

async function syncQuizzes(
  supabase: SupabaseLike,
  userId: string,
  quizzes: NonNullable<Payload['quizzes']>,
  result: SyncResult,
): Promise<void> {
  const rows = quizzes.map((q) => ({
    user_id: userId,
    quiz_id: q.quizId,
    attempts: q.attempts ?? null,
    best_score: q.bestScore ?? null,
    last_score: q.lastScore ?? null,
    completed_at: q.completedAt ?? null,
  }))
  await syncUpsertTable(
    supabase,
    'progress_quizzes',
    'user_id,quiz_id',
    'quiz_id',
    rows,
    quizzes.map((q) => q.quizId),
    result,
  )
}

async function syncReadingAge(
  supabase: SupabaseLike,
  userId: string,
  readingAge: NonNullable<Payload['readingAge']>,
  result: SyncResult,
): Promise<void> {
  if (readingAge.length === 0) return

  // No natural conflict key — each completion is a new row. Insert
  // straight into the table; every successful row counts as
  // inserted.
  const rows = readingAge.map((r) => ({
    user_id: userId,
    passage_id: r.passageId,
    reading_age_years: r.readingAgeYears ?? null,
    comprehension_score: r.comprehensionScore ?? null,
    time_seconds: r.timeSeconds ?? null,
    completed_at: r.completedAt ?? null,
  }))

  const { error } = await supabase.from('progress_reading_age').insert(rows)
  if (error) {
    result.errors.push(`progress_reading_age: ${error.message}`)
    return
  }
  result.inserted += rows.length
}

// ─── Handler ──────────────────────────────────────────────────────────

export async function POST(request: NextRequest): Promise<NextResponse> {
  let supabase: SupabaseLike
  try {
    supabase = createServerSupabaseClient() as unknown as SupabaseLike
  } catch (err) {
    console.error('[progress/sync] Failed to build Supabase client:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  // ── Auth ────────────────────────────────────────────────────────────
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // ── Rate limit: 10/hour per user ────────────────────────────────────
  const rl = await rateLimit(`progress-sync:${user.id}`, {
    limit: 10,
    windowSeconds: 3600,
  })
  if (!rl.success) {
    return NextResponse.json(
      {
        error: 'Rate limited. Please wait before syncing again.',
        retryAfter: Math.ceil((rl.resetAt - Date.now()) / 1000),
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
        },
      },
    )
  }

  // ── Parse + validate ────────────────────────────────────────────────
  let raw: unknown
  try {
    raw = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = payloadSchema.safeParse(raw)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid payload', details: parsed.error.flatten() },
      { status: 400 },
    )
  }
  const payload = parsed.data

  const result: SyncResult = { inserted: 0, updated: 0, errors: [] }

  // ── Dispatch per-table ──────────────────────────────────────────────
  // Run sequentially so we never stack four parallel writes for the
  // same user (Supabase pool friendliness + simpler error attribution).
  if (payload.poems && payload.poems.length > 0) {
    await syncPoems(supabase, user.id, payload.poems, result)
  }
  if (payload.games && payload.games.length > 0) {
    await syncGames(supabase, user.id, payload.games, result)
  }
  if (payload.quizzes && payload.quizzes.length > 0) {
    await syncQuizzes(supabase, user.id, payload.quizzes, result)
  }
  if (payload.readingAge && payload.readingAge.length > 0) {
    await syncReadingAge(supabase, user.id, payload.readingAge, result)
  }

  return NextResponse.json(result)
}
