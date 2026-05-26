import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'

// ─── Validation ──────────────────────────────────────────────────────────
//
// Reading-age sessions are append-only - every attempt becomes a row so the
// UI can render a longitudinal trend. Never UPDATE existing rows.
//
// readingAgeYears is constrained 5-20 inclusive: lower than 5 indicates a
// scoring bug (no GCSE-track passage tests below KS1), higher than 20 makes
// no sense for any current passage in the bank.

const postSchema = z.object({
  passageId: z.string().min(1).max(200),
  readingAgeYears: z.number().min(5).max(20),
  comprehensionScore: z.number().min(0).max(100),
  timeSeconds: z
    .number()
    .int()
    .nonnegative()
    .max(60 * 60 * 4),
})

const DEFAULT_LIMIT = 50
const MAX_LIMIT = 200

// ─── GET /api/progress/reading-age ───────────────────────────────────────
// Returns the latest N reading-age sessions for the authenticated user,
// newest first.

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const url = new URL(request.url)
    const limitParam = url.searchParams.get('limit')
    let limit = DEFAULT_LIMIT
    if (limitParam !== null) {
      const parsed = Number(limitParam)
      if (!Number.isFinite(parsed) || !Number.isInteger(parsed) || parsed < 1) {
        return NextResponse.json({ error: 'Invalid limit parameter' }, { status: 400 })
      }
      limit = Math.min(parsed, MAX_LIMIT)
    }

    const { data, error } = await supabase
      .from('progress_reading_age')
      .select(
        'session_id, passage_id, reading_age_years, comprehension_score, time_seconds, completed_at',
      )
      .eq('user_id', user.id)
      .order('completed_at', { ascending: false })
      .limit(limit)

    if (error) {
      console.error('[reading-age] DB error:', error)
      return NextResponse.json({ error: 'Failed to load sessions' }, { status: 500 })
    }

    return NextResponse.json({ sessions: data ?? [] })
  } catch (err) {
    console.error('[reading-age] GET error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// ─── POST /api/progress/reading-age ──────────────────────────────────────
// Appends a new session row. Rate-limited to 20/hour/user to stop farming
// of false reading-age data points (which would skew the trend chart).

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Rate-limit keyed on user id (not IP) so shared networks aren't punished
    // and a single bad actor can't escape by rotating IPs.
    const rl = await rateLimit(`reading-age-post:${user.id}`, {
      limit: 20,
      windowSeconds: 60 * 60,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many sessions. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
          },
        },
      )
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

    const { passageId, readingAgeYears, comprehensionScore, timeSeconds } = parsed.data

    const { data, error } = await supabase
      .from('progress_reading_age')
      .insert({
        user_id: user.id,
        passage_id: passageId,
        reading_age_years: readingAgeYears,
        comprehension_score: comprehensionScore,
        time_seconds: timeSeconds,
        completed_at: new Date().toISOString(),
      })
      .select(
        'session_id, passage_id, reading_age_years, comprehension_score, time_seconds, completed_at',
      )
      .single()

    if (error) {
      console.error('[reading-age] Insert error:', error)
      return NextResponse.json({ error: 'Failed to save session' }, { status: 500 })
    }

    return NextResponse.json({ session: data }, { status: 201 })
  } catch (err) {
    console.error('[reading-age] POST error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
