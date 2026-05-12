import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import type { ExamBoard } from '@/lib/board/board-config'
import { BOARDS } from '@/lib/board/board-config'

// ─── Per-user write rate limit (PATCH/DELETE only) ────────────────────
// 60 mutating requests per hour per authenticated user. GET is unlimited
// because it is a cheap read used by the poem index UI on every render.
const WRITE_LIMIT = 60
const WRITE_WINDOW_SECONDS = 60 * 60

// ─── Validation ───────────────────────────────────────────────────────
// Derive valid boards from the canonical BOARDS array so this route stays
// in sync with the board picker UI (same pattern as /api/board).
const VALID_BOARDS = BOARDS.map((b) => b.id) as [ExamBoard, ...ExamBoard[]]

// Status values: 'unread' is implicit (no row); rows exist once a poem is
// touched. 'in_progress' / 'studied' / 'mastered' represent the learner's
// self-reported progression. Kept open to extension via a small enum.
const VALID_STATUSES = ['in_progress', 'studied', 'mastered'] as const

const patchSchema = z.object({
  slug: z.string().min(1).max(120),
  board: z.enum(VALID_BOARDS).optional(),
  status: z.enum(VALID_STATUSES).optional(),
  // Annotated line numbers the learner has highlighted/marked. Bounded
  // to keep payloads small and prevent abuse via runaway arrays.
  annotatedLines: z.array(z.number().int().min(0).max(10_000)).max(1000).optional(),
})

// ─── GET /api/progress/poems?board=AQA ────────────────────────────────
// Returns this user's poem progress rows, optionally filtered by board.
// Auth required (401 otherwise). Unlimited rate.

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
    const boardParam = url.searchParams.get('board')

    let query = supabase
      .from('progress_poems')
      .select('poem_slug, board, status, annotated_lines, last_seen_at')
      .eq('user_id', user.id)
      .order('last_seen_at', { ascending: false })

    if (boardParam) {
      // Be lenient: the spec example uses "AQA" (uppercase) while board
      // ids in BOARDS are lowercase ("aqa"). Normalise before filtering.
      const normalised = boardParam.toLowerCase()
      const parsed = z.enum(VALID_BOARDS).safeParse(normalised)
      if (!parsed.success) {
        return NextResponse.json(
          { error: 'Invalid board', details: parsed.error.flatten() },
          { status: 400 },
        )
      }
      query = query.eq('board', parsed.data)
    }

    const { data, error } = await query
    if (error) {
      console.error('[progress/poems GET] DB error:', error)
      return NextResponse.json({ error: 'Failed to load poem progress' }, { status: 500 })
    }

    return NextResponse.json({ poems: data ?? [] })
  } catch (err) {
    console.error('[progress/poems GET] Error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// ─── PATCH /api/progress/poems ────────────────────────────────────────
// Upserts the (user_id, poem_slug) row and bumps last_seen_at to now().

export async function PATCH(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const rl = await rateLimit(`progress-poems-write:${user.id}`, {
      limit: WRITE_LIMIT,
      windowSeconds: WRITE_WINDOW_SECONDS,
    })
    if (!rl.success) {
      return NextResponse.json(
        {
          error: 'Rate limited. Try again later.',
          retryAfter: Math.ceil((rl.resetAt - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const parsed = patchSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten() },
        { status: 400 },
      )
    }

    const { slug, board, status, annotatedLines } = parsed.data

    // Build the upsert row. Only include columns the caller sent so we
    // don't clobber existing values with undefined on a partial update.
    const row: Record<string, unknown> = {
      user_id: user.id,
      poem_slug: slug,
      last_seen_at: new Date().toISOString(),
    }
    if (board !== undefined) row.board = board
    if (status !== undefined) row.status = status
    if (annotatedLines !== undefined) row.annotated_lines = annotatedLines

    const { data, error } = await supabase
      .from('progress_poems')
      .upsert(row, { onConflict: 'user_id,poem_slug' })
      .select('poem_slug, board, status, annotated_lines, last_seen_at')
      .single()

    if (error) {
      console.error('[progress/poems PATCH] DB error:', error)
      return NextResponse.json({ error: 'Failed to save poem progress' }, { status: 500 })
    }

    return NextResponse.json({ poem: data })
  } catch (err) {
    console.error('[progress/poems PATCH] Error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// ─── DELETE /api/progress/poems?slug=ozymandias ───────────────────────
// Removes the row for this user + slug. Idempotent (200 even if the row
// did not exist — Supabase returns success for a no-op delete).

export async function DELETE(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const rl = await rateLimit(`progress-poems-write:${user.id}`, {
      limit: WRITE_LIMIT,
      windowSeconds: WRITE_WINDOW_SECONDS,
    })
    if (!rl.success) {
      return NextResponse.json(
        {
          error: 'Rate limited. Try again later.',
          retryAfter: Math.ceil((rl.resetAt - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const url = new URL(request.url)
    const slug = url.searchParams.get('slug')

    const slugParse = z.string().min(1).max(120).safeParse(slug)
    if (!slugParse.success) {
      return NextResponse.json(
        { error: 'Missing or invalid slug query parameter' },
        { status: 400 },
      )
    }

    const { error } = await supabase
      .from('progress_poems')
      .delete()
      .eq('user_id', user.id)
      .eq('poem_slug', slugParse.data)

    if (error) {
      console.error('[progress/poems DELETE] DB error:', error)
      return NextResponse.json({ error: 'Failed to delete poem progress' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[progress/poems DELETE] Error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
