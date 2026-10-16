import { z } from 'zod'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { allGameTaxa } from '@/lib/learning-profile/taxonomy'
import { hasTextGame } from '@/lib/games/text-games/slugs'
import {
  ACTIVITY_RE,
  CHOSEN_RE,
  CLIENT_ROUND_ID_RE,
  ITEM_ID_RE,
  ITEM_KIND_RE,
  LEVEL_RE,
  MAX_ITEMS_PER_ROUND,
  type RoundItem,
  type StoredRound,
} from './types'

/**
 * Reading and writing the game_rounds table
 * (supabase/migrations/20261013_game_rounds.sql). Server only: the table has
 * no policy for anon or authenticated, so every read and write goes through
 * the service role, and the caller decides whose rows may be touched.
 *
 * The user id is ALWAYS the Supabase auth uuid from the session, never a value
 * from the request, and never the Prisma cuid: the table is keyed on
 * auth.users(id), as quiz_responses is. Writing the other identity is exactly
 * how progress_games refused every write for five months (CLAUDE.md fact 1).
 */

/** Skills games a round may name: the taxonomy's own list, so a typo is refused, not filed. */
const SKILLS_GAMES: ReadonlySet<string> = new Set(allGameTaxa().map((g) => g.slug))

const ItemSchema = z
  .object({
    i: z.string().regex(ITEM_ID_RE),
    k: z.string().regex(ITEM_KIND_RE),
    c: z.union([z.literal(0), z.literal(1)]),
    w: z.string().regex(CHOSEN_RE).optional(),
  })
  .strict()

export const RoundPayloadSchema = z
  .object({
    clientRoundId: z.string().regex(CLIENT_ROUND_ID_RE),
    source: z.enum(['skills', 'quest']),
    activity: z.string().regex(ACTIVITY_RE),
    level: z.string().regex(LEVEL_RE).optional(),
    score: z.number().int().min(0).max(100_000).optional(),
    maxScore: z.number().int().min(0).max(100_000).optional(),
    durationSeconds: z.number().int().min(0).max(14_400).optional(),
    items: z.array(ItemSchema).max(MAX_ITEMS_PER_ROUND),
  })
  .strict()
  .refine((p) => (p.source === 'skills' ? SKILLS_GAMES.has(p.activity) : hasTextGame(p.activity)), {
    message: 'unknown activity',
    path: ['activity'],
  })
  .refine((p) => p.source === 'quest' || p.level === undefined, {
    message: 'a skills game has no level',
    path: ['level'],
  })
  .refine((p) => p.score === undefined || p.maxScore === undefined || p.score <= p.maxScore, {
    message: 'score above its maximum',
    path: ['score'],
  })

export type ParsedRound = z.infer<typeof RoundPayloadSchema>

/** A wrong-choice label is only kept on a wrong answer: on a right one it says nothing new. */
function cleanItems(items: ParsedRound['items']): RoundItem[] {
  return items.map((it) =>
    it.c === 0 && it.w ? { i: it.i, k: it.k, c: 0, w: it.w } : { i: it.i, k: it.k, c: it.c },
  )
}

export interface SaveResult {
  ok: boolean
  /** True when the browser had already sent this round: nothing new was stored. */
  duplicate?: boolean
  error?: { code: string | null; message: string }
}

/** Stores one round for `userId` (the session's auth uuid). Answered and right are counted here, not trusted. */
export async function saveRound(userId: string, round: ParsedRound): Promise<SaveResult> {
  const items = cleanItems(round.items)
  const admin = createServiceRoleClient()
  const { error } = await admin.from('game_rounds').upsert(
    {
      user_id: userId,
      client_round_id: round.clientRoundId,
      source: round.source,
      activity: round.activity,
      level: round.level ?? null,
      answered: items.length,
      correct: items.reduce((n, it) => n + it.c, 0),
      score: round.score ?? null,
      max_score: round.maxScore ?? null,
      duration_seconds: round.durationSeconds ?? null,
      items,
      finished_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,client_round_id', ignoreDuplicates: true },
  )
  if (error) {
    return {
      ok: false,
      error: { code: (error as { code?: string }).code ?? null, message: error.message },
    }
  }
  return { ok: true }
}

interface RoundRow {
  source: 'skills' | 'quest'
  activity: string
  level: string | null
  answered: number
  correct: number
  score: number | null
  max_score: number | null
  duration_seconds: number | null
  items: unknown
  finished_at: string
}

/** Defensive: a stored item that does not match the shape is dropped, not trusted. */
function readItems(raw: unknown): RoundItem[] {
  if (!Array.isArray(raw)) return []
  const out: RoundItem[] = []
  for (const x of raw) {
    const p = ItemSchema.safeParse(x)
    if (p.success) out.push(p.data as RoundItem)
  }
  return out
}

/** How far back the analytics look, and how many rounds at most. */
export const ANALYTICS_WINDOW_DAYS = 365
export const ANALYTICS_MAX_ROUNDS = 2_000

/**
 * Rows asked for in one request.
 *
 * FIXED 16 OCTOBER 2026. readRounds asked for up to 2,000 rows in a single
 * request, but Supabase's API returns at most 1,000 rows to any one request
 * by default (the project's "max rows" setting), without an error. A student
 * with more than 1,000 rounds in the window would have had the oldest
 * dropped from their analytics with nothing to say so, and a teacher's view
 * of them likewise. The rows are now read in pages well inside that cap, in
 * a stable order, until a short page shows the end.
 */
export const ROUNDS_PAGE = 500

/**
 * A student's rounds, newest first, from `since` (default: the analytics
 * window). Throws on a read error: a caller showing analytics must say it
 * could not load them, never show an empty record as if the student had
 * played nothing.
 */
export async function readRounds(
  userId: string,
  opts: { since?: Date; limit?: number } = {},
): Promise<StoredRound[]> {
  const since = opts.since ?? new Date(Date.now() - ANALYTICS_WINDOW_DAYS * 86_400_000)
  const max = opts.limit ?? ANALYTICS_MAX_ROUNDS
  const admin = createServiceRoleClient()
  const rows: RoundRow[] = []
  for (let from = 0; from < max; from += ROUNDS_PAGE) {
    const to = Math.min(from + ROUNDS_PAGE, max) - 1
    const { data, error } = await admin
      .from('game_rounds')
      .select(
        'source, activity, level, answered, correct, score, max_score, duration_seconds, items, finished_at',
      )
      .eq('user_id', userId)
      .gte('finished_at', since.toISOString())
      // `id` breaks ties, so a page boundary never repeats or skips a round
      // that shares its finishing time with another.
      .order('finished_at', { ascending: false })
      .order('id', { ascending: true })
      .range(from, to)
    if (error) throw new Error(`game_rounds read failed: ${error.message}`)
    const page = (data ?? []) as RoundRow[]
    rows.push(...page)
    if (page.length < to - from + 1) break
  }
  return rows.map((r) => ({
    source: r.source,
    activity: r.activity,
    level: r.level,
    answered: r.answered,
    correct: r.correct,
    score: r.score,
    maxScore: r.max_score,
    durationSeconds: r.duration_seconds,
    items: readItems(r.items),
    finishedAt: r.finished_at,
  }))
}
