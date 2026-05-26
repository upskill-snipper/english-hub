// ─── Platform-admin - Assign work to a paid marker ──────────────────────────
// POST /api/admin/marker-assign
//
// Site-admin only (verifyAdmin - RLS deny-by-default; service-role only).
//
// Two shapes accepted:
//   A) { batchId, markerId, count }
//      Assign up to `count` UNASSIGNED (assigned_marker_id IS NULL),
//      AI-drafted (status = 'teacher_review_required') rows in the batch to
//      the marker. Oldest-first.
//   B) { submissionIds: [...], markerId }
//      Assign exactly those submissions to the marker (each must be
//      unassigned + 'teacher_review_required').
//
// Sets `assigned_marker_id` only. NEVER changes status to 'approved'
// (marker approval is a later, human act) and NEVER changes the row's
// status here at all - assignment is orthogonal to the review lifecycle.
//
// EMPTY-TABLE SAFE: missing table / nothing eligible → { assigned: 0 },
// never a 500.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

const SUBMISSIONS_TABLE = 'marking_submissions'
const MARKERS_TABLE = 'markers'
const BATCHES_TABLE = 'marker_batches'

// Rows are only assignable once an AI draft exists and a marker can review it.
const ASSIGNABLE_STATUS = 'teacher_review_required'
const MAX_ASSIGN = 500

interface AssignBody {
  batchId?: string
  markerId?: string
  count?: number | null
  submissionIds?: unknown
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-marker-assign:${ip}`, { limit: 30, windowSeconds: 60 })
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

    const ct = request.headers.get('content-type')
    if (!ct || !ct.includes('application/json')) {
      return NextResponse.json({ error: 'Content-Type must be application/json' }, { status: 415 })
    }

    let body: AssignBody
    try {
      body = (await request.json()) as AssignBody
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const markerId = typeof body.markerId === 'string' ? body.markerId.trim() : ''
    if (markerId.length === 0) {
      return NextResponse.json({ error: 'markerId is required' }, { status: 400 })
    }

    const supabase = createServiceRoleClient()

    // Verify the marker exists and is active (don't route work to a paused /
    // offboarded marker).
    const { data: marker, error: markerErr } = await supabase
      .from(MARKERS_TABLE)
      .select('id, status')
      .eq('id', markerId)
      .single()

    if (markerErr) {
      if ((markerErr as { code?: string }).code === 'PGRST116') {
        return NextResponse.json({ error: 'Marker not found.' }, { status: 404 })
      }
      console.error('[api/admin/marker-assign] marker lookup failed', markerErr)
      return NextResponse.json({ error: 'Marker store unavailable.', assigned: 0 }, { status: 502 })
    }
    if (!marker) {
      return NextResponse.json({ error: 'Marker not found.' }, { status: 404 })
    }
    if ((marker as { status?: string }).status !== 'active') {
      return NextResponse.json(
        { error: 'Marker is not active; cannot assign work.', assigned: 0 },
        { status: 409 },
      )
    }

    // ── Shape B: explicit submissionIds ──────────────────────────────────
    if (Array.isArray(body.submissionIds)) {
      const ids = Array.from(
        new Set(
          (body.submissionIds as unknown[])
            .map((v) => (typeof v === 'string' ? v.trim() : ''))
            .filter((v) => v.length > 0),
        ),
      )
      if (ids.length === 0) {
        return NextResponse.json({ error: 'submissionIds was empty.' }, { status: 400 })
      }
      if (ids.length > MAX_ASSIGN) {
        return NextResponse.json(
          { error: `Too many submissionIds: ${ids.length}. Maximum ${MAX_ASSIGN}.` },
          { status: 400 },
        )
      }

      // Only assign rows that are unassigned AND AI-drafted (review-ready).
      const { data: updated, error: updErr } = await supabase
        .from(SUBMISSIONS_TABLE)
        .update({ assigned_marker_id: markerId })
        .in('id', ids)
        .is('assigned_marker_id', null)
        .eq('status', ASSIGNABLE_STATUS)
        .select('id')

      if (updErr) {
        console.error('[api/admin/marker-assign] update (ids) failed', updErr)
        return NextResponse.json(
          { error: updErr.message ?? 'Failed to assign submissions.', assigned: 0 },
          { status: 502 },
        )
      }

      const assignedIds = ((updated ?? []) as Array<{ id: string }>).map((r) => r.id)
      return NextResponse.json(
        {
          assigned: assignedIds.length,
          requested: ids.length,
          skipped: ids.length - assignedIds.length,
          ids: assignedIds,
        },
        { status: 200 },
      )
    }

    // ── Shape A: batchId + count ─────────────────────────────────────────
    const batchId = typeof body.batchId === 'string' ? body.batchId.trim() : ''
    if (batchId.length === 0) {
      return NextResponse.json(
        { error: 'Provide either { batchId, count } or { submissionIds }.' },
        { status: 400 },
      )
    }

    let count = 1
    if (body.count !== undefined && body.count !== null) {
      const n = Number(body.count)
      if (!Number.isFinite(n) || n <= 0 || !Number.isInteger(n)) {
        return NextResponse.json({ error: 'count must be a positive integer' }, { status: 400 })
      }
      count = Math.min(MAX_ASSIGN, n)
    }

    // Confirm the batch exists.
    const { data: batch, error: batchErr } = await supabase
      .from(BATCHES_TABLE)
      .select('id')
      .eq('id', batchId)
      .single()
    if (batchErr) {
      if ((batchErr as { code?: string }).code === 'PGRST116') {
        return NextResponse.json({ error: 'Batch not found.' }, { status: 404 })
      }
      console.error('[api/admin/marker-assign] batch lookup failed', batchErr)
      return NextResponse.json({ error: 'Batch store unavailable.', assigned: 0 }, { status: 502 })
    }
    if (!batch) {
      return NextResponse.json({ error: 'Batch not found.' }, { status: 404 })
    }

    // Select up to `count` candidate ids (unassigned + review-ready), then
    // update by id. Two-step keeps it portable (no UPDATE … LIMIT in PostgREST)
    // and lets us report exactly how many were taken.
    const { data: candidates, error: candErr } = await supabase
      .from(SUBMISSIONS_TABLE)
      .select('id')
      .eq('batch_id', batchId)
      .is('assigned_marker_id', null)
      .eq('status', ASSIGNABLE_STATUS)
      .order('submitted_at', { ascending: true })
      .limit(count)

    if (candErr) {
      console.error('[api/admin/marker-assign] candidate query failed', candErr)
      return NextResponse.json(
        { error: 'Submission store unavailable.', assigned: 0 },
        { status: 502 },
      )
    }

    const candidateIds = ((candidates ?? []) as Array<{ id: string }>).map((r) => r.id)
    if (candidateIds.length === 0) {
      return NextResponse.json(
        { assigned: 0, requested: count, skipped: 0, ids: [] },
        { status: 200 },
      )
    }

    // Re-assert the unassigned + status guards in the UPDATE so a concurrent
    // assignment can't double-allocate a row.
    const { data: updated, error: updErr } = await supabase
      .from(SUBMISSIONS_TABLE)
      .update({ assigned_marker_id: markerId })
      .in('id', candidateIds)
      .is('assigned_marker_id', null)
      .eq('status', ASSIGNABLE_STATUS)
      .select('id')

    if (updErr) {
      console.error('[api/admin/marker-assign] update (batch) failed', updErr)
      return NextResponse.json(
        { error: updErr.message ?? 'Failed to assign submissions.', assigned: 0 },
        { status: 502 },
      )
    }

    const assignedIds = ((updated ?? []) as Array<{ id: string }>).map((r) => r.id)
    return NextResponse.json(
      {
        assigned: assignedIds.length,
        requested: count,
        skipped: candidateIds.length - assignedIds.length,
        ids: assignedIds,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('[api/admin/marker-assign POST] Unexpected error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
