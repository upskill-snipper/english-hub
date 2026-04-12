import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'

// ─── POST /api/progress/sync ──────────────────────────────────────────
// Receives localStorage progress data from the client and upserts to Supabase.
// Auth-gated + rate limited (1 sync per minute per user).

interface SyncPayload {
  entries: {
    progress_type: string
    slug?: string
    score?: number
    max_score?: number
    grade?: string
    duration_seconds?: number
    metadata?: Record<string, unknown>
    created_at?: string
  }[]
}

const VALID_TYPES = new Set([
  'poem_studied',
  'game_played',
  'quiz_completed',
  'text_studied',
  'reading_assessment',
  'essay_marked',
  'flashcard_session',
])

export async function POST(request: NextRequest) {
  try {
    // ── Auth check ─────────────────────────────────────────────────────
    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // ── Rate limit: 1 sync per 60 seconds per user ─────────────────────
    const rl = await rateLimit(`progress-sync:${user.id}`, {
      limit: 1,
      windowSeconds: 60,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Rate limited. Please wait before syncing again.', retryAfter: Math.ceil((rl.resetAt - Date.now()) / 1000) },
        { status: 429 }
      )
    }

    // ── Parse body ─────────────────────────────────────────────────────
    const body = (await request.json()) as SyncPayload

    if (!body.entries || !Array.isArray(body.entries)) {
      return NextResponse.json(
        { error: 'Invalid payload: entries array required' },
        { status: 400 }
      )
    }

    if (body.entries.length > 500) {
      return NextResponse.json(
        { error: 'Too many entries. Maximum 500 per sync.' },
        { status: 400 }
      )
    }

    // ── Validate and filter entries ────────────────────────────────────
    const now = new Date().toISOString()
    const validEntries = body.entries
      .filter((e) => e.progress_type && VALID_TYPES.has(e.progress_type))
      .map((e) => ({
        user_id: user.id,
        progress_type: e.progress_type,
        slug: e.slug ?? null,
        score: typeof e.score === 'number' ? e.score : null,
        max_score: typeof e.max_score === 'number' ? e.max_score : null,
        grade: typeof e.grade === 'string' ? e.grade : null,
        duration_seconds: typeof e.duration_seconds === 'number' ? e.duration_seconds : null,
        metadata: e.metadata ?? {},
        created_at: e.created_at ?? now,
        updated_at: now,
      }))

    if (validEntries.length === 0) {
      return NextResponse.json({ synced: 0, skipped: body.entries.length })
    }

    // ── Deduplicate against existing rows ───────────────────────────────
    const { data: existing } = await supabase
      .from('student_progress')
      .select('progress_type, slug, created_at')
      .eq('user_id', user.id)

    const existingKeys = new Set(
      (existing ?? []).map(
        (e: { progress_type: string; slug: string | null; created_at: string }) =>
          `${e.progress_type}|${e.slug ?? ''}|${e.created_at}`
      )
    )

    const newEntries = validEntries.filter(
      (r) => !existingKeys.has(`${r.progress_type}|${r.slug ?? ''}|${r.created_at}`)
    )

    if (newEntries.length === 0) {
      return NextResponse.json({
        synced: 0,
        skipped: body.entries.length,
        message: 'All entries already synced',
      })
    }

    // ── Insert in batches ──────────────────────────────────────────────
    const BATCH_SIZE = 50
    let synced = 0
    const errors: string[] = []

    for (let i = 0; i < newEntries.length; i += BATCH_SIZE) {
      const batch = newEntries.slice(i, i + BATCH_SIZE)
      const { error } = await supabase.from('student_progress').insert(batch)
      if (error) {
        errors.push(error.message)
      } else {
        synced += batch.length
      }
    }

    return NextResponse.json({
      synced,
      skipped: body.entries.length - validEntries.length,
      duplicates: validEntries.length - newEntries.length,
      errors: errors.length > 0 ? errors : undefined,
    })
  } catch (err) {
    console.error('[progress/sync] Error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
