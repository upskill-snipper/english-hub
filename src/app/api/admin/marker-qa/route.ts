// ─── Platform-admin - Paid-marker QA scorecard ───────────────────────────────
// GET /api/admin/marker-qa
//
// Site-admin ONLY (verifyAdmin). The single QA read for the paid-marker drive:
//   • per-marker GOLD accuracy   (exact / ±1 / MAE on marks, grade QWK/exact)
//   • inter-marker agreement     (pairwise on scripts marked by ≥2 markers)
//   • drift flags                (below floor OR regressing vs own baseline)
//   • throughput                 (count of APPROVED items per marker)
//   • board / paper slices       (gold exact-rate + ±1 by board and paper)
//
// All maths is delegated to src/lib/marker-qa/metrics.ts (pure, unit-tested),
// which itself reuses evals/stats.ts for the Art. 15 grade-scale agreement -
// statistics are NOT duplicated here.
//
// gold_expected (expert ground truth) is read here only to score markers and
// is NEVER returned in this payload - only derived accuracy is. This route is
// admin-gated; the marker console is a separate workspace.
//
// EMPTY-TABLE SAFE: any missing table / query error degrades to a fully-zeroed
// payload (never a 500) so the dashboard renders an empty state.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'
import {
  perMarkerGoldAccuracy,
  interMarkerAgreement,
  markerDriftFlags,
  DEFAULT_QA_THRESHOLDS,
  type GoldOutcomeRow,
  type MarkedScriptRow,
  type PerMarkerGoldAccuracy,
  type InterMarkerAgreement,
  type MarkerDriftFlag,
} from '@/lib/marker-qa/metrics'

export const dynamic = 'force-dynamic'

interface SliceRow {
  slice: string
  n: number
  exactRate: number
  within1Rate: number
  meanAbsError: number
}

interface ThroughputRow {
  markerId: string
  markerName: string
  approved: number
  totalAssigned: number
}

interface QaPayload {
  generatedAt: string
  storeAvailable: boolean
  note: string | null
  thresholds: typeof DEFAULT_QA_THRESHOLDS
  totals: {
    markers: number
    goldItems: number
    approvedGold: number
    approvedTotal: number
    sharedScripts: number
  }
  perMarker: PerMarkerGoldAccuracy[]
  interMarker: InterMarkerAgreement
  driftFlags: MarkerDriftFlag[]
  throughput: ThroughputRow[]
  byBoard: SliceRow[]
  byPaper: SliceRow[]
}

const r3 = (n: number) => Math.round(n * 1000) / 1000

function emptyPayload(note: string | null): QaPayload {
  return {
    generatedAt: new Date().toISOString(),
    storeAvailable: note === null,
    note,
    thresholds: DEFAULT_QA_THRESHOLDS,
    totals: {
      markers: 0,
      goldItems: 0,
      approvedGold: 0,
      approvedTotal: 0,
      sharedScripts: 0,
    },
    perMarker: [],
    interMarker: {
      sharedScriptCount: 0,
      pairObservations: 0,
      overallExactRate: 0,
      overallWithin1Rate: 0,
      overallMeanAbsError: 0,
      overallGradeQwk: 0,
      pairs: [],
    },
    driftFlags: [],
    throughput: [],
    byBoard: [],
    byPaper: [],
  }
}

/** Gold-outcome rows → slice rows keyed by an arbitrary slice label. */
function sliceGold(
  rows: readonly GoldOutcomeRow[],
  keyOf: (r: GoldOutcomeRow) => string,
): SliceRow[] {
  const groups = new Map<string, number[]>()
  for (const row of rows) {
    const m = row.goldExpected.mark
    const tm = row.markerMark
    if (typeof m !== 'number' || typeof tm !== 'number') continue
    const key = keyOf(row) || 'Unspecified'
    const arr = groups.get(key) ?? []
    arr.push(Math.abs(tm - m))
    groups.set(key, arr)
  }
  const out: SliceRow[] = []
  for (const [slice, errs] of groups) {
    const n = errs.length
    out.push({
      slice,
      n,
      exactRate: r3(errs.filter((e) => e === 0).length / n),
      within1Rate: r3(errs.filter((e) => e <= 1).length / n),
      meanAbsError: r3(errs.reduce((a, b) => a + b, 0) / n),
    })
  }
  return out.sort((a, b) => b.n - a.n)
}

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-marker-qa:${ip}`, { limit: 30, windowSeconds: 60 })
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

    // ── Submissions (the marking spine). Hot fields only. ─────────────────
    const { data: subData, error: subErr } = await supabase
      .from('marking_submissions')
      .select(
        'id, exam_board, paper, question_text, question_type, studied_text, status, assigned_marker_id, is_gold, gold_expected',
      )
      .limit(50000)

    if (subErr) {
      console.error('[api/admin/marker-qa] submissions query failed', subErr)
      return NextResponse.json(emptyPayload('Marking store unavailable'))
    }

    interface Sub {
      id: string
      exam_board: string | null
      paper: string | null
      question_text: string | null
      question_type: string | null
      studied_text: string | null
      status: string
      assigned_marker_id: string | null
      is_gold: boolean
      gold_expected: { mark?: number; grade?: string; ao?: Record<string, number> } | null
    }
    const submissions = (subData ?? []) as Sub[]
    if (submissions.length === 0) {
      return NextResponse.json(emptyPayload(null))
    }
    const subById = new Map(submissions.map((s) => [s.id, s]))

    // ── Marker display names ──────────────────────────────────────────────
    const markerIds = [
      ...new Set(submissions.map((s) => s.assigned_marker_id).filter((x): x is string => !!x)),
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
    const nameOf = (id: string | null) => (id ? (markerNames.get(id) ?? id) : 'Unassigned')

    // ── Moderations: reduce to the LATEST per submission ──────────────────
    const { data: modData, error: modErr } = await supabase
      .from('teacher_moderations')
      .select('submission_id, reviewer_user_id, decision, teacher_score, teacher_grade, created_at')
      .order('created_at', { ascending: false })
      .limit(100000)

    if (modErr) {
      // Submissions exist but no moderation history - report gold counts only.
      console.error('[api/admin/marker-qa] moderations query failed', modErr)
      const payload = emptyPayload('Moderation history unavailable')
      payload.storeAvailable = true
      payload.totals.markers = markerIds.length
      payload.totals.goldItems = submissions.filter((s) => s.is_gold).length
      return NextResponse.json(payload)
    }

    interface Mod {
      submission_id: string
      decision: string | null
      teacher_score: number | null
      teacher_grade: string | null
      created_at: string
    }
    const latestBySub = new Map<string, Mod>()
    for (const m of (modData ?? []) as Mod[]) {
      if (!latestBySub.has(m.submission_id)) latestBySub.set(m.submission_id, m)
    }

    // ── Build metric inputs ───────────────────────────────────────────────
    const goldRows: GoldOutcomeRow[] = []
    const scriptRows: MarkedScriptRow[] = []
    const throughputAcc = new Map<string, { name: string; approved: number; assigned: number }>()
    let approvedTotal = 0

    for (const s of submissions) {
      const mod = latestBySub.get(s.id) ?? null
      const decision = mod?.decision ?? null
      const markerId = s.assigned_marker_id

      // Throughput: assigned + approved counts per marker.
      if (markerId) {
        const acc = throughputAcc.get(markerId) ?? {
          name: nameOf(markerId),
          approved: 0,
          assigned: 0,
        }
        acc.assigned++
        if (decision === 'approved') acc.approved++
        throughputAcc.set(markerId, acc)
      }
      if (decision === 'approved') approvedTotal++

      // Gold outcome rows: an APPROVED gold item with a marker assigned.
      if (s.is_gold && decision === 'approved' && markerId) {
        const ge = s.gold_expected ?? {}
        goldRows.push({
          submissionId: s.id,
          markerId,
          markerName: nameOf(markerId),
          board: s.exam_board,
          paper: s.paper,
          goldExpected: {
            mark: typeof ge.mark === 'number' ? ge.mark : null,
            grade: typeof ge.grade === 'string' ? ge.grade : null,
            ao: ge.ao ?? null,
          },
          markerMark: typeof mod?.teacher_score === 'number' ? mod.teacher_score : null,
          markerGrade: typeof mod?.teacher_grade === 'string' ? mod.teacher_grade : null,
          decidedAt: mod?.created_at ?? null,
        })
      }

      // Inter-marker: any reviewed, NON-gold script with a marker decision.
      // (Gold items are excluded - every marker sees the same planted answer,
      // which would inflate "agreement" artificially.) scriptKey identifies
      // the logical script: board|paper|question|studied_text.
      if (!s.is_gold && markerId && mod && decision && decision !== 'sent_back') {
        const scriptKey = [
          (s.exam_board ?? '').trim().toLowerCase(),
          (s.paper ?? '').trim().toLowerCase(),
          (s.question_text ?? '').trim().toLowerCase(),
          (s.studied_text ?? '').trim().toLowerCase(),
        ].join('|')
        scriptRows.push({
          submissionId: s.id,
          scriptKey,
          markerId,
          markerName: nameOf(markerId),
          mark: typeof mod.teacher_score === 'number' ? mod.teacher_score : null,
          grade: typeof mod.teacher_grade === 'string' ? mod.teacher_grade : null,
        })
      }
    }

    // ── Compute (delegated to the pure, unit-tested core) ─────────────────
    const perMarker = perMarkerGoldAccuracy(goldRows)
    const interMarker = interMarkerAgreement(scriptRows)
    const driftFlags = markerDriftFlags(goldRows, DEFAULT_QA_THRESHOLDS)

    const throughput: ThroughputRow[] = [...throughputAcc.entries()]
      .map(([markerId, v]) => ({
        markerId,
        markerName: v.name,
        approved: v.approved,
        totalAssigned: v.assigned,
      }))
      .sort((a, b) => b.approved - a.approved)

    const byBoard = sliceGold(goldRows, (r) => (r.board ?? '').trim())
    const byPaper = sliceGold(goldRows, (r) =>
      [(subById.get(r.submissionId)?.exam_board ?? '').trim(), (r.paper ?? '').trim()]
        .filter(Boolean)
        .join(' · '),
    )

    const payload: QaPayload = {
      generatedAt: new Date().toISOString(),
      storeAvailable: true,
      note: null,
      thresholds: DEFAULT_QA_THRESHOLDS,
      totals: {
        markers: markerIds.length,
        goldItems: submissions.filter((s) => s.is_gold).length,
        approvedGold: goldRows.length,
        approvedTotal,
        sharedScripts: interMarker.sharedScriptCount,
      },
      perMarker,
      interMarker,
      driftFlags,
      throughput,
      byBoard,
      byPaper,
    }
    return NextResponse.json(payload)
  } catch (err) {
    console.error('[api/admin/marker-qa] unexpected error', err)
    return NextResponse.json(emptyPayload('Metrics temporarily unavailable'))
  }
}
