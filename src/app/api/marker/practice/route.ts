// ─── Marker · Practice queue (calibration) ───────────────────────────────────
// GET /api/marker/practice?board=&limit=
//
// Returns SPECIMEN gold scripts for the boards the signed-in marker is APPROVED
// for, so a new examiner can calibrate: mark blind, then reveal the expert mark
// (POST /api/marker/practice/check). Practice is formative — nothing is written.
//
// SAFETY: only `is_gold = true AND source = 'specimen'` scripts are served here.
// Live blind-QA gold (commissioned/platform) is NEVER exposed, so practice can't
// be used to look up answers to QA scripts. `gold_expected` is excluded from this
// list (revealed only by the check route, after the marker commits an answer).
//
// DB: Supabase service-role client. Empty/pre-migration safe → { items: [] }.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { rateLimitResponse, serverErrorResponse } from '@/lib/api-response'
import { requireMarker } from '@/lib/marker-auth'
import { approvedBoards, normaliseBoard } from '@/lib/marker-board-access'

export const dynamic = 'force-dynamic'

const DEFAULT_LIMIT = 20
const MAX_LIMIT = 50

// gold_expected DELIBERATELY excluded (revealed only after a committed attempt).
const COLUMNS =
  'id, source, exam_board, qualification, paper, essay_title, essay_text,' +
  ' question_text, question_type, studied_text, is_gold,' +
  ' ai_result, ai_grade, ai_score, ai_max_marks, ai_grade_band, ai_ao_breakdown,' +
  ' ai_feedback, ai_confidence, ai_band_marks'

interface RowRaw {
  id: string
  source: string | null
  exam_board: string | null
  qualification: string | null
  paper: string | null
  essay_title: string | null
  essay_text: string | null
  question_text: string | null
  question_type: string | null
  studied_text: string | null
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
    const rl = await rateLimit(`marker-practice:${marker.id}:${ip}`, {
      limit: 60,
      windowSeconds: 60,
    })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    let limit = DEFAULT_LIMIT
    const rawLimit = req.nextUrl.searchParams.get('limit')
    if (rawLimit !== null) {
      const n = Number.parseInt(rawLimit, 10)
      if (Number.isFinite(n) && n > 0) limit = Math.min(n, MAX_LIMIT)
    }

    const boardFilter = req.nextUrl.searchParams.get('board')
    const wantedBoard = boardFilter ? normaliseBoard(boardFilter) : null

    const approved = await approvedBoards(marker.id)
    if (approved.size === 0) {
      return NextResponse.json({ items: [], total: 0, approvedBoards: [] })
    }
    if (wantedBoard && !approved.has(wantedBoard)) {
      return NextResponse.json({ items: [], total: 0, approvedBoards: Array.from(approved) })
    }

    const admin = createServiceRoleClient()
    const { data: rowsRaw, error } = await admin
      .from('marking_submissions')
      .select(COLUMNS)
      .eq('is_gold', true)
      .eq('source', 'specimen')
      .order('submitted_at', { ascending: true })
      .limit(200)

    if (error) {
      return NextResponse.json({ items: [], total: 0, approvedBoards: Array.from(approved) })
    }

    const rows = ((rowsRaw ?? []) as unknown as RowRaw[])
      .filter((r) => {
        const b = r.exam_board ? normaliseBoard(r.exam_board) : null
        if (!b || !approved.has(b)) return false
        if (wantedBoard && b !== wantedBoard) return false
        return true
      })
      .slice(0, limit)

    const items = rows.map((r) => ({
      id: r.id,
      source: r.source ?? null,
      exam_board: r.exam_board ?? null,
      qualification: r.qualification ?? null,
      paper: r.paper ?? null,
      essay_title: r.essay_title ?? null,
      essay_text: r.essay_text ?? '',
      question_text: r.question_text ?? null,
      question_type: r.question_type ?? null,
      studied_text: r.studied_text ?? null,
      is_gold: r.is_gold === true,
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

    return NextResponse.json({ items, total: items.length, approvedBoards: Array.from(approved) })
  } catch (err) {
    console.error('[marker/practice GET] unexpected error', err)
    return serverErrorResponse('Failed to load the practice queue')
  }
}
