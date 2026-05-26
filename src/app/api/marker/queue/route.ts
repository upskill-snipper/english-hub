// ─── Paid Marker · Review Queue ────────────────────────────────────────────
// GET /api/marker/queue?limit=20
//
// Returns the next slice of work for the signed-in marker: marking_submissions
// rows where
//   • assigned_marker_id = the resolved ACTIVE marker's id   (HARD scope)
//   • status            = 'teacher_review_required'           (AI-drafted,
//                          awaiting this marker's human review)
// ordered oldest-first (submitted_at ASC) so the queue drains FIFO.
//
// Authorisation: an ACTIVE marker only (requireMarker → 401/403). A marker
// can ONLY ever see rows assigned to THEM - the assigned_marker_id filter is
// the security boundary (defence-in-depth on top of the RLS policy
// marking_submissions_marker_select). Other markers' / pupils' work is never
// returned.
//
// BLIND QA: `is_gold` is surfaced so the console can badge a gold item, but
// `gold_expected` (the known-correct answer for gold scripts) is DELIBERATELY
// not selected - the marker must mark gold scripts blind.
//
// Empty / pre-migration safe: a missing table or zero matches returns
// { items: [], total: 0 } (HTTP 200), never a 404/500 - the console renders
// an "all caught up" state.
//
// Supabase generated types don't know about marking_submissions yet (Prisma
// client not regenerated - see migration note), so rows are cast through
// `unknown` to the SELECT shape.

import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { rateLimitResponse, serverErrorResponse } from '@/lib/api-response'
import { requireMarker } from '@/lib/marker-auth'

export const dynamic = 'force-dynamic'

const DEFAULT_LIMIT = 20
const MAX_LIMIT = 50

// Exactly the fields the console needs. NOTE: gold_expected is intentionally
// excluded (blind QA). assigned_marker_id is not echoed (the marker already
// implicitly is the assignee - every row is theirs).
const QUEUE_COLUMNS =
  'id, source, batch_id, exam_board, qualification, paper,' +
  ' essay_title, essay_text, question_text, question_type, studied_text,' +
  ' status, submitted_at, is_gold,' +
  ' ai_result, ai_grade, ai_score, ai_max_marks, ai_grade_band,' +
  ' ai_ao_breakdown, ai_feedback, ai_confidence, ai_band_marks'

interface QueueRowRaw {
  id: string
  source: string | null
  batch_id: string | null
  exam_board: string | null
  qualification: string | null
  paper: string | null
  essay_title: string | null
  essay_text: string | null
  question_text: string | null
  question_type: string | null
  studied_text: string | null
  status: string | null
  submitted_at: string
  is_gold: boolean | null
  ai_result: unknown
  ai_grade: string | null
  ai_score: number | null
  ai_max_marks: number | null
  ai_grade_band: string | null
  ai_ao_breakdown: unknown
  ai_feedback: string | null
  ai_confidence: number | null
  ai_band_marks: unknown
}

export async function GET(req: NextRequest) {
  try {
    const guard = await requireMarker()
    if (!guard.ok) return guard.response
    const { marker } = guard

    const ip = getClientIp(req.headers)
    const rl = await rateLimit(`marker-queue:${marker.id}:${ip}`, {
      limit: 60,
      windowSeconds: 60,
    })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    // Parse ?limit (clamped). Bad / missing → default.
    const rawLimit = req.nextUrl.searchParams.get('limit')
    let limit = DEFAULT_LIMIT
    if (rawLimit !== null) {
      const n = Number.parseInt(rawLimit, 10)
      if (Number.isFinite(n) && n > 0) limit = Math.min(n, MAX_LIMIT)
    }

    const admin = createServiceRoleClient()

    // The two filters below ARE the access-control boundary: a marker only
    // ever receives rows assigned to them and still needing review.
    const { data: rowsRaw, error: queryError } = await admin
      .from('marking_submissions')
      .select(QUEUE_COLUMNS)
      .eq('assigned_marker_id', marker.id)
      .eq('status', 'teacher_review_required')
      .order('submitted_at', { ascending: true })
      .limit(limit)

    if (queryError) {
      // Most likely: marking_submissions / the marker columns don't exist
      // yet (pre-migration). Degrade to an empty queue, not a 500.
      return NextResponse.json({ items: [], total: 0 })
    }

    const rows = (rowsRaw ?? []) as unknown as QueueRowRaw[]

    const items = rows.map((r) => ({
      id: r.id,
      source: r.source ?? null,
      batch_id: r.batch_id ?? null,
      exam_board: r.exam_board ?? null,
      qualification: r.qualification ?? null,
      paper: r.paper ?? null,
      essay_title: r.essay_title ?? null,
      essay_text: r.essay_text ?? '',
      question_text: r.question_text ?? null,
      question_type: r.question_type ?? null,
      studied_text: r.studied_text ?? null,
      status: r.status ?? 'teacher_review_required',
      submitted_at: r.submitted_at,
      is_gold: r.is_gold === true,
      // Structured AI draft the marker reviews + edits.
      ai_result: r.ai_result && typeof r.ai_result === 'object' ? r.ai_result : null,
      ai_grade: r.ai_grade ?? null,
      ai_score: r.ai_score ?? null,
      ai_max_marks: r.ai_max_marks ?? null,
      ai_grade_band: r.ai_grade_band ?? null,
      ai_ao_breakdown: Array.isArray(r.ai_ao_breakdown)
        ? r.ai_ao_breakdown
        : (r.ai_ao_breakdown ?? null),
      ai_feedback: r.ai_feedback ?? null,
      ai_confidence: r.ai_confidence ?? null,
      ai_band_marks: Array.isArray(r.ai_band_marks) ? r.ai_band_marks : [],
    }))

    return NextResponse.json({ items, total: items.length })
  } catch (err) {
    console.error('[marker/queue GET] unexpected error', err)
    return serverErrorResponse('Failed to load the marking queue')
  }
}
