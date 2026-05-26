// ─── Platform-admin - Marker batch management ───────────────────────────────
// GET  /api/admin/marker-batches    list batches (newest first) + live counts
// POST /api/admin/marker-batches    create a batch
//
// Site-admin only (verifyAdmin - RLS deny-by-default; service-role only).
// Mirrors src/app/api/admin/prompts/route.ts house style.
//
// `marker_batches` columns (snake_case - see 20260519_marker_drive.sql):
//   id, label, board, paper, source_type ∈ commissioned|platform|specimen,
//   target_count, status ∈ open|closed, created_by, created_at
//
// Per-batch counts are derived from marking_submissions.batch_id:
//   total          rows in the batch
//   ai_drafted     status NOT IN ('submitted')           (an AI draft exists)
//   assigned       assigned_marker_id IS NOT NULL
//   approved       status = 'approved'
//
// EMPTY-TABLE SAFE: missing table / query error → empty list + note, never 500.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

const BATCHES_TABLE = 'marker_batches'
const SUBMISSIONS_TABLE = 'marking_submissions'

const SOURCE_TYPES = ['commissioned', 'platform', 'specimen'] as const
type SourceType = (typeof SOURCE_TYPES)[number]

const BATCH_SELECT =
  'id, label, board, paper, source_type, target_count, status, created_by, created_at'

interface BatchRow {
  id: string
  label: string
  board: string
  paper: string | null
  source_type: string
  target_count: number | null
  status: string
  created_by: string | null
  created_at: string
}

interface CreateBatchBody {
  label?: string
  board?: string
  paper?: string | null
  source_type?: string
  target_count?: number | null
}

interface BatchCounts {
  total: number
  ai_drafted: number
  assigned: number
  approved: number
}

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-marker-batches-list:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const { error: authError } = await verifyAdmin()
    if (authError === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    if (authError === 'Forbidden') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const supabase = createServiceRoleClient()
    const { data, error } = await supabase
      .from(BATCHES_TABLE)
      .select(BATCH_SELECT)
      .order('created_at', { ascending: false })
      .limit(500)

    if (error) {
      console.error('[api/admin/marker-batches GET] query failed', error)
      return NextResponse.json({
        batches: [],
        storeAvailable: false,
        note: 'Batch store unavailable',
      })
    }

    const rows = (data ?? []) as unknown as BatchRow[]

    // Derive per-batch counts. One lean pull over the batch rows only
    // (id, status, assignment) so we never N+1 and stay correct on an
    // empty store. Degrades to zeroed counts on any error.
    const countsByBatch = new Map<string, BatchCounts>()
    const batchIds = rows.map((b) => b.id)
    if (batchIds.length > 0) {
      const { data: subRows, error: subErr } = await supabase
        .from(SUBMISSIONS_TABLE)
        .select('batch_id, status, assigned_marker_id')
        .in('batch_id', batchIds)
        .limit(100000)

      if (!subErr) {
        for (const r of (subRows ?? []) as unknown as Array<{
          batch_id: string | null
          status: string | null
          assigned_marker_id: string | null
        }>) {
          if (!r.batch_id) continue
          const c =
            countsByBatch.get(r.batch_id) ??
            ({ total: 0, ai_drafted: 0, assigned: 0, approved: 0 } as BatchCounts)
          c.total += 1
          if (r.status && r.status !== 'submitted') c.ai_drafted += 1
          if (r.assigned_marker_id) c.assigned += 1
          if (r.status === 'approved') c.approved += 1
          countsByBatch.set(r.batch_id, c)
        }
      } else {
        console.error('[api/admin/marker-batches GET] counts query failed', subErr)
      }
    }

    const batches = rows.map((b) => ({
      id: b.id,
      label: b.label,
      board: b.board,
      paper: b.paper ?? null,
      source_type: b.source_type,
      target_count: b.target_count ?? 0,
      status: b.status ?? 'open',
      created_by: b.created_by ?? null,
      created_at: b.created_at,
      counts:
        countsByBatch.get(b.id) ??
        ({ total: 0, ai_drafted: 0, assigned: 0, approved: 0 } as BatchCounts),
    }))

    return NextResponse.json({ batches, storeAvailable: true, note: null })
  } catch (error) {
    console.error('[api/admin/marker-batches GET] Unexpected error:', error)
    return NextResponse.json({ batches: [], storeAvailable: false, note: 'Unavailable' })
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-marker-batches-create:${ip}`, {
      limit: 20,
      windowSeconds: 60,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const { user, error: authError } = await verifyAdmin()
    if (authError === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    if (authError === 'Forbidden') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const ct = request.headers.get('content-type')
    if (!ct || !ct.includes('application/json')) {
      return NextResponse.json({ error: 'Content-Type must be application/json' }, { status: 415 })
    }

    let body: CreateBatchBody
    try {
      body = (await request.json()) as CreateBatchBody
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const label = typeof body.label === 'string' ? body.label.trim() : ''
    const board = typeof body.board === 'string' ? body.board.trim() : ''
    if (label.length === 0) {
      return NextResponse.json({ error: 'label is required' }, { status: 400 })
    }
    if (board.length === 0) {
      return NextResponse.json({ error: 'board is required' }, { status: 400 })
    }
    if (
      typeof body.source_type !== 'string' ||
      !SOURCE_TYPES.includes(body.source_type as SourceType)
    ) {
      return NextResponse.json(
        { error: `source_type must be one of ${SOURCE_TYPES.join(', ')}` },
        { status: 400 },
      )
    }

    let targetCount = 0
    if (body.target_count !== undefined && body.target_count !== null) {
      const n = Number(body.target_count)
      if (!Number.isFinite(n) || n < 0 || !Number.isInteger(n)) {
        return NextResponse.json(
          { error: 'target_count must be a non-negative integer' },
          { status: 400 },
        )
      }
      targetCount = n
    }

    const supabase = createServiceRoleClient()
    const { data, error } = await supabase
      .from(BATCHES_TABLE)
      .insert({
        label,
        board,
        paper:
          typeof body.paper === 'string' && body.paper.trim().length > 0 ? body.paper.trim() : null,
        source_type: body.source_type as SourceType,
        target_count: targetCount,
        status: 'open',
        created_by: user?.id ?? null,
      })
      .select(BATCH_SELECT)
      .single()

    if (error || !data) {
      console.error('[api/admin/marker-batches POST] insert failed', error)
      return NextResponse.json(
        { error: error?.message ?? 'Failed to create batch' },
        { status: 502 },
      )
    }

    return NextResponse.json(
      {
        batch: {
          ...(data as unknown as BatchRow),
          counts: { total: 0, ai_drafted: 0, assigned: 0, approved: 0 },
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('[api/admin/marker-batches POST] Unexpected error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
