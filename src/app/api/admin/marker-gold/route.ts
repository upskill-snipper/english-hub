// ─── Platform-admin — Gold-set manager (paid-marker drive) ───────────────────
// POST /api/admin/marker-gold   — mark batch item(s) as gold (set is_gold +
//                                  gold_expected). Single or bulk.
// GET  /api/admin/marker-gold    — list gold items + their per-marker QA
//                                  outcome (marker mark/grade vs expert).
//
// Site-admin ONLY (verifyAdmin). gold_expected is the expert ground truth and
// is admin-only by construction: it is written and read ONLY here and in
// /api/admin/marker-qa. The marker console is a separate workspace and never
// receives these fields — that boundary is enforced by gating every route in
// this folder behind verifyAdmin.
//
// EMPTY-TABLE SAFE: GET degrades to an empty list (never a 500) when the
// marking tables are not migrated yet.
//
// DB access: Supabase service-role client only (these tables are RLS
// deny-by-default; never Prisma — Windows EPERM).
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'
import {
  badRequestResponse,
  forbiddenResponse,
  rateLimitResponse,
  serverErrorResponse,
  successResponse,
  unauthorizedResponse,
  requireJsonContentType,
} from '@/lib/api-response'

export const dynamic = 'force-dynamic'

// ─── Validation ──────────────────────────────────────────────────────────────

const VALID_GRADES = new Set(['U', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

interface ValidGoldExpected {
  mark: number
  grade: string
  ao?: Record<string, number>
}

interface GoldItemInput {
  submissionId: string
  goldExpected: ValidGoldExpected
}

/** Validate one { submissionId, goldExpected:{mark,grade,ao?} } item. */
function validateItem(
  raw: unknown,
): { ok: true; item: GoldItemInput } | { ok: false; error: string } {
  if (!raw || typeof raw !== 'object') {
    return { ok: false, error: 'Each item must be an object.' }
  }
  const b = raw as Record<string, unknown>

  const submissionId = typeof b.submissionId === 'string' ? b.submissionId.trim() : ''
  if (!submissionId) {
    return { ok: false, error: 'submissionId is required.' }
  }

  const ge = b.goldExpected
  if (!ge || typeof ge !== 'object') {
    return { ok: false, error: 'goldExpected is required.' }
  }
  const g = ge as Record<string, unknown>

  if (typeof g.mark !== 'number' || !Number.isFinite(g.mark) || g.mark < 0) {
    return { ok: false, error: 'goldExpected.mark must be a non-negative number.' }
  }
  if (typeof g.grade !== 'string' || !VALID_GRADES.has(g.grade.trim())) {
    return { ok: false, error: 'goldExpected.grade must be one of U,1..9.' }
  }

  let ao: Record<string, number> | undefined
  if (g.ao !== undefined && g.ao !== null) {
    if (typeof g.ao !== 'object' || Array.isArray(g.ao)) {
      return { ok: false, error: 'goldExpected.ao must be an object of AO id → marks.' }
    }
    ao = {}
    for (const [k, v] of Object.entries(g.ao as Record<string, unknown>)) {
      if (typeof v !== 'number' || !Number.isFinite(v)) {
        return { ok: false, error: `goldExpected.ao.${k} must be a number.` }
      }
      ao[k] = v
    }
  }

  return {
    ok: true,
    item: {
      submissionId,
      goldExpected: { mark: g.mark, grade: g.grade.trim(), ...(ao ? { ao } : {}) },
    },
  }
}

// ─── POST — set gold on existing batch item(s) ───────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const ctError = requireJsonContentType(request)
    if (ctError) return ctError

    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-marker-gold:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    const { error: authError } = await verifyAdmin()
    if (authError === 'Unauthorized') return unauthorizedResponse()
    if (authError === 'Forbidden') return forbiddenResponse()

    let raw: unknown
    try {
      raw = await request.json()
    } catch {
      return badRequestResponse('Invalid JSON in request body.')
    }
    if (!raw || typeof raw !== 'object') {
      return badRequestResponse('Request body must be an object.')
    }
    const body = raw as Record<string, unknown>

    // Accept either a single item or { items: [...] } (bulk).
    const rawItems: unknown[] = Array.isArray(body.items)
      ? body.items
      : [{ submissionId: body.submissionId, goldExpected: body.goldExpected }]

    if (rawItems.length === 0) {
      return badRequestResponse('No items supplied.')
    }
    if (rawItems.length > 500) {
      return badRequestResponse('Too many items in one request (max 500).')
    }

    const items: GoldItemInput[] = []
    for (let i = 0; i < rawItems.length; i++) {
      const v = validateItem(rawItems[i])
      if (!v.ok) return badRequestResponse(`Item ${i + 1}: ${v.error}`)
      items.push(v.item)
    }

    const supabase = createServiceRoleClient()
    const results: { submissionId: string; ok: boolean; error?: string }[] = []
    let updated = 0

    // Per-row update: gold_expected differs per row so a single bulk update is
    // not possible; the gold set is small (drive-scale) so this is fine.
    for (const it of items) {
      const { data, error } = await supabase
        .from('marking_submissions')
        .update({ is_gold: true, gold_expected: it.goldExpected })
        .eq('id', it.submissionId)
        .select('id')
        .maybeSingle()

      if (error) {
        results.push({ submissionId: it.submissionId, ok: false, error: 'update failed' })
      } else if (!data) {
        results.push({ submissionId: it.submissionId, ok: false, error: 'not found' })
      } else {
        updated++
        results.push({ submissionId: it.submissionId, ok: true })
      }
    }

    return successResponse({
      requested: items.length,
      updated,
      failed: items.length - updated,
      results,
    })
  } catch (err) {
    console.error('[api/admin/marker-gold] POST unexpected error', err)
    return serverErrorResponse('Failed to update gold items.')
  }
}

// ─── GET — list gold items + per-marker QA outcome ───────────────────────────

interface GoldListRow {
  submissionId: string
  board: string | null
  paper: string | null
  questionType: string | null
  status: string
  assignedMarkerId: string | null
  markerName: string | null
  /** Expert ground truth — admin-only payload (this route is admin-gated). */
  goldExpected: { mark: number | null; grade: string | null; ao?: unknown } | null
  /** Marker's decision on this gold item (latest moderation), if any. */
  markerDecision: string | null
  markerMark: number | null
  markerGrade: string | null
  decidedAt: string | null
  /** |markerMark − expertMark| when both present, else null. */
  markAbsError: number | null
  gradeMatches: boolean | null
}

function emptyGoldList(note: string | null) {
  return {
    generatedAt: new Date().toISOString(),
    storeAvailable: note === null,
    note,
    totalGold: 0,
    items: [] as GoldListRow[],
  }
}

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-marker-gold-get:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    const { error: authError } = await verifyAdmin()
    if (authError === 'Unauthorized') return unauthorizedResponse()
    if (authError === 'Forbidden') return forbiddenResponse()

    const supabase = createServiceRoleClient()

    const { data: goldData, error: goldErr } = await supabase
      .from('marking_submissions')
      .select('id, exam_board, paper, question_type, status, assigned_marker_id, gold_expected')
      .eq('is_gold', true)
      .limit(5000)

    if (goldErr) {
      console.error('[api/admin/marker-gold] gold query failed', goldErr)
      return NextResponse.json(emptyGoldList('Marking store unavailable'))
    }

    const gold = (goldData ?? []) as {
      id: string
      exam_board: string | null
      paper: string | null
      question_type: string | null
      status: string
      assigned_marker_id: string | null
      gold_expected: { mark?: number; grade?: string; ao?: unknown } | null
    }[]

    if (gold.length === 0) {
      return NextResponse.json(emptyGoldList(null))
    }

    // Marker display names (best-effort; absence is non-fatal).
    const markerIds = [
      ...new Set(gold.map((g) => g.assigned_marker_id).filter((x): x is string => !!x)),
    ]
    const markerNames = new Map<string, string>()
    if (markerIds.length > 0) {
      const { data: mData } = await supabase
        .from('markers')
        .select('id, display_name')
        .in('id', markerIds)
      for (const m of (mData ?? []) as { id: string; display_name: string }[]) {
        markerNames.set(m.id, m.display_name)
      }
    }

    // Latest moderation per gold submission (created_at DESC → first wins).
    const goldIds = gold.map((g) => g.id)
    const latestMod = new Map<
      string,
      {
        decision: string | null
        teacher_score: number | null
        teacher_grade: string | null
        created_at: string
      }
    >()
    const { data: modData, error: modErr } = await supabase
      .from('teacher_moderations')
      .select('submission_id, decision, teacher_score, teacher_grade, created_at')
      .in('submission_id', goldIds)
      .order('created_at', { ascending: false })
      .limit(20000)
    if (!modErr) {
      for (const m of (modData ?? []) as {
        submission_id: string
        decision: string | null
        teacher_score: number | null
        teacher_grade: string | null
        created_at: string
      }[]) {
        if (!latestMod.has(m.submission_id)) {
          latestMod.set(m.submission_id, {
            decision: m.decision,
            teacher_score: m.teacher_score,
            teacher_grade: m.teacher_grade,
            created_at: m.created_at,
          })
        }
      }
    }

    const items: GoldListRow[] = gold.map((g) => {
      const ge = g.gold_expected ?? null
      const expectMark = typeof ge?.mark === 'number' ? ge.mark : null
      const expectGrade = typeof ge?.grade === 'string' ? ge.grade : null
      const mod = latestMod.get(g.id) ?? null
      const mMark = typeof mod?.teacher_score === 'number' ? mod.teacher_score : null
      const mGrade = typeof mod?.teacher_grade === 'string' ? mod.teacher_grade : null

      return {
        submissionId: g.id,
        board: g.exam_board,
        paper: g.paper,
        questionType: g.question_type,
        status: g.status,
        assignedMarkerId: g.assigned_marker_id,
        markerName: g.assigned_marker_id ? (markerNames.get(g.assigned_marker_id) ?? null) : null,
        goldExpected: ge
          ? { mark: expectMark, grade: expectGrade, ...(ge.ao !== undefined ? { ao: ge.ao } : {}) }
          : null,
        markerDecision: mod?.decision ?? null,
        markerMark: mMark,
        markerGrade: mGrade,
        decidedAt: mod?.created_at ?? null,
        markAbsError: expectMark !== null && mMark !== null ? Math.abs(mMark - expectMark) : null,
        gradeMatches: expectGrade !== null && mGrade !== null ? expectGrade === mGrade : null,
      }
    })

    return NextResponse.json({
      generatedAt: new Date().toISOString(),
      storeAvailable: true,
      note: null,
      totalGold: items.length,
      items,
    })
  } catch (err) {
    console.error('[api/admin/marker-gold] GET unexpected error', err)
    return NextResponse.json(emptyGoldList('Metrics temporarily unavailable'))
  }
}
