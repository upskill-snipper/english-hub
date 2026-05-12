import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'

// ─── Validation ────────────────────────────────────────────────────────
//
// `game_slug` is a kebab-case identifier ("quote-detective",
// "context-clues"). Keep the regex permissive enough for future games
// without allowing arbitrary input that could mess up cache keys or
// downstream routing.
const slugSchema = z
  .string()
  .min(1)
  .max(64)
  .regex(/^[a-z0-9][a-z0-9-]*$/, 'slug must be kebab-case')

const postSchema = z.object({
  slug: slugSchema,
  // Some games score in tens-of-thousands (typing speed × accuracy bonuses);
  // cap generously but block obvious garbage / overflow attempts.
  score: z.number().int().min(0).max(1_000_000),
  // A single session shouldn't exceed an hour — anything larger is almost
  // certainly a bug or a tab left open. Round to integer seconds.
  timeSeconds: z.number().int().min(0).max(3600),
})

interface ProgressGameRow {
  user_id: string
  game_slug: string
  best_score: number
  total_plays: number
  total_time_seconds: number
  last_played_at: string
}

// ─── GET /api/progress/games ───────────────────────────────────────────

export async function GET() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data, error } = await supabase
    .from('progress_games')
    .select('game_slug, best_score, total_plays, total_time_seconds, last_played_at')
    .eq('user_id', user.id)
    .order('last_played_at', { ascending: false })

  if (error) {
    console.error('[progress/games] GET DB error:', error)
    return NextResponse.json({ error: 'Failed to load game progress' }, { status: 500 })
  }

  return NextResponse.json({ games: data ?? [] })
}

// ─── POST /api/progress/games ──────────────────────────────────────────
// Records the result of a game session. Increments play count and total
// time; updates best_score only if it beats the existing record.
//
// Rate limit strategy:
//   • 60 POSTs per hour per user — covers heavy practice sessions.
//   • If the SAME slug is hit >10 times in 1 minute, throttle that
//     specific (user, slug) pair. This catches runaway clients
//     (broken loops, accidental double-submits) without punishing the
//     legitimate flow of "play game → submit → play again".

export async function POST(request: NextRequest) {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = postSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid payload', details: parsed.error.flatten() },
      { status: 400 },
    )
  }

  const { slug, score, timeSeconds } = parsed.data

  // Hourly cap (per user, all games)
  const hourly = await rateLimit(`progress-games-post:${user.id}`, {
    limit: 60,
    windowSeconds: 3600,
  })
  if (!hourly.success) {
    return NextResponse.json(
      { error: 'Too many submissions. Please slow down.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((hourly.resetAt - Date.now()) / 1000)),
        },
      },
    )
  }

  // Per-slug burst cap (per user, per game)
  const burst = await rateLimit(`progress-games-post:${user.id}:${slug}`, {
    limit: 10,
    windowSeconds: 60,
  })
  if (!burst.success) {
    return NextResponse.json(
      { error: 'Too many submissions for this game. Please wait a moment.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((burst.resetAt - Date.now()) / 1000)),
        },
      },
    )
  }

  // ── Read-then-write ─────────────────────────────────────────────────
  // No native UPSERT-with-MAX in PostgREST without a custom RPC, and we
  // don't want to require a migration as part of this route. The race
  // window between SELECT and UPSERT is tolerable: in the worst case a
  // concurrent submission's best_score could be overwritten by a slightly
  // lower value — game progress is not a financial system, and the
  // per-user-per-slug burst cap above bounds how often this can happen.
  const { data: existing, error: readError } = await supabase
    .from('progress_games')
    .select('best_score, total_plays, total_time_seconds')
    .eq('user_id', user.id)
    .eq('game_slug', slug)
    .maybeSingle()

  if (readError) {
    console.error('[progress/games] read error:', readError)
    return NextResponse.json({ error: 'Failed to record progress' }, { status: 500 })
  }

  const now = new Date().toISOString()
  const merged: ProgressGameRow = {
    user_id: user.id,
    game_slug: slug,
    best_score: Math.max(existing?.best_score ?? 0, score),
    total_plays: (existing?.total_plays ?? 0) + 1,
    total_time_seconds: (existing?.total_time_seconds ?? 0) + timeSeconds,
    last_played_at: now,
  }

  const { data: upserted, error: writeError } = await supabase
    .from('progress_games')
    .upsert(merged, { onConflict: 'user_id,game_slug' })
    .select('game_slug, best_score, total_plays, total_time_seconds, last_played_at')
    .single()

  if (writeError) {
    console.error('[progress/games] write error:', writeError)
    return NextResponse.json({ error: 'Failed to record progress' }, { status: 500 })
  }

  return NextResponse.json({ ok: true, game: upserted })
}

// ─── DELETE /api/progress/games?slug=quote-detective ───────────────────

export async function DELETE(request: NextRequest) {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const slugParam = request.nextUrl.searchParams.get('slug')
  const parsed = slugSchema.safeParse(slugParam)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid or missing slug', details: parsed.error.flatten() },
      { status: 400 },
    )
  }

  const { error } = await supabase
    .from('progress_games')
    .delete()
    .eq('user_id', user.id)
    .eq('game_slug', parsed.data)

  if (error) {
    console.error('[progress/games] DELETE DB error:', error)
    return NextResponse.json({ error: 'Failed to delete game progress' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
