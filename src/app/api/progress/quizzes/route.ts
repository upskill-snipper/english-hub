import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'

// ─── GET /api/progress/quizzes ────────────────────────────────────────
// Returns the authenticated user's quiz progress rows from
// `progress_quizzes` (one row per quiz_id).

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: rows, error } = await supabase
      .from('progress_quizzes')
      .select('quiz_id, attempts, best_score, last_score, completed_at')
      .eq('user_id', user.id)
      .order('completed_at', { ascending: false })

    if (error) {
      console.error('[progress/quizzes] DB error:', error)
      return NextResponse.json({ error: 'Failed to load quiz progress' }, { status: 500 })
    }

    return NextResponse.json({ quizzes: rows ?? [] })
  } catch (err) {
    console.error('[progress/quizzes] GET error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// ─── POST /api/progress/quizzes ───────────────────────────────────────
// Body: { quizId: string, score: number }
// Upserts a row in `progress_quizzes`:
//   - increments attempts (defaults to 1 on first insert)
//   - sets best_score to MAX(existing.best_score, score)
//   - sets last_score to score
//   - sets completed_at to now()
// Auth required. Rate limited to 30 POSTs/hour per user.

const postSchema = z.object({
  quizId: z.string().min(1).max(200),
  score: z.number().finite().min(0).max(100),
})

export async function POST(request: NextRequest) {
  try {
    // ── Auth check ─────────────────────────────────────────────────────
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // ── Rate limit: 30 per hour per user ───────────────────────────────
    const rl = await rateLimit(`progress-quizzes-post:${user.id}`, {
      limit: 30,
      windowSeconds: 60 * 60,
    })
    if (!rl.success) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
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

    // ── Parse + validate body ──────────────────────────────────────────
    let raw: unknown
    try {
      raw = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const parsed = postSchema.safeParse(raw)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid payload', details: parsed.error.flatten() },
        { status: 400 },
      )
    }

    const { quizId, score } = parsed.data
    const now = new Date().toISOString()

    // ── Read existing row (for attempts increment + best_score MAX) ────
    const { data: existing, error: selectError } = await supabase
      .from('progress_quizzes')
      .select('attempts, best_score')
      .eq('user_id', user.id)
      .eq('quiz_id', quizId)
      .maybeSingle()

    if (selectError) {
      console.error('[progress/quizzes] select error:', selectError)
      return NextResponse.json({ error: 'Failed to load existing progress' }, { status: 500 })
    }

    const prevAttempts = typeof existing?.attempts === 'number' ? existing.attempts : 0
    const prevBest = typeof existing?.best_score === 'number' ? existing.best_score : -Infinity

    const row = {
      user_id: user.id,
      quiz_id: quizId,
      attempts: prevAttempts + 1,
      best_score: Math.max(prevBest, score),
      last_score: score,
      completed_at: now,
    }

    const { data: upserted, error: upsertError } = await supabase
      .from('progress_quizzes')
      .upsert(row, { onConflict: 'user_id,quiz_id' })
      .select('quiz_id, attempts, best_score, last_score, completed_at')
      .single()

    if (upsertError) {
      console.error('[progress/quizzes] upsert error:', upsertError)
      return NextResponse.json({ error: 'Failed to save quiz progress' }, { status: 500 })
    }

    return NextResponse.json({ ok: true, quiz: upserted })
  } catch (err) {
    console.error('[progress/quizzes] POST error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
