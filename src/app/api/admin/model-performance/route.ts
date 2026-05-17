// ─── Platform-admin — AI marking model performance ──────────────────────────
// GET /api/admin/model-performance
//
// Site-admin only. Computes live model-vs-teacher agreement metrics directly
// from the frozen Smart-IP schema using the service-role Supabase client
// (these tables are RLS deny-by-default — see the migration).
//
// For every `marking_submissions` row joined to its LATEST
// `teacher_moderations` row we compute:
//   • mean absolute score error   mean |ai_score − teacher_score|
//   • % within 1 mark / % within 2 marks
//   • accuracy sliced by exam_board / question_type / grade_band
//   • teacher override rate       moderations decided corrected|rejected
//                                   ÷ total reviewed
//   • feedback edit rate          feedback_after ≠ feedback_before
//   • most common adjustment_reason
//   • AI-confidence reliability   mean |error| bucketed by ai_confidence
//
// EMPTY-TABLE SAFE: a missing table / query error degrades to a zeroed
// payload (never a 500) so the dashboard renders an empty state — these
// tables are expected to be empty until the marking pipeline is live.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

interface SubmissionRow {
  id: string
  exam_board: string | null
  question_type: string | null
  target_grade: string | null
  ai_grade_band: string | null
  ai_score: number | null
  ai_confidence: number | null
}

interface ModerationRow {
  submission_id: string
  decision: string | null
  ai_score: number | null
  teacher_score: number | null
  feedback_before: string | null
  feedback_after: string | null
  adjustment_reason: string | null
  created_at: string
}

interface SliceAccuracy {
  slice: string
  n: number
  meanAbsError: number
  within1Pct: number
  within2Pct: number
}

function emptyPayload(reason: string | null) {
  return {
    generatedAt: new Date().toISOString(),
    storeAvailable: reason === null,
    note: reason,
    totals: {
      submissions: 0,
      reviewed: 0,
      scoredPairs: 0,
    },
    scoreAccuracy: {
      meanAbsError: 0,
      within1Pct: 0,
      within2Pct: 0,
      exactPct: 0,
    },
    byExamBoard: [] as SliceAccuracy[],
    byQuestionType: [] as SliceAccuracy[],
    byGradeBand: [] as SliceAccuracy[],
    teacherOverrideRate: 0,
    feedbackEditRate: 0,
    decisionBreakdown: {} as Record<string, number>,
    topAdjustmentReasons: [] as { reason: string; count: number }[],
    confidenceReliability: [] as {
      bucket: string
      n: number
      meanAbsError: number
      within1Pct: number
    }[],
  }
}

/** Round to 3 dp for stable JSON / display. */
const r3 = (n: number) => Math.round(n * 1000) / 1000

function sliceAccuracy(rows: { key: string; absErr: number }[]): SliceAccuracy[] {
  const groups = new Map<string, number[]>()
  for (const row of rows) {
    const arr = groups.get(row.key) ?? []
    arr.push(row.absErr)
    groups.set(row.key, arr)
  }
  const out: SliceAccuracy[] = []
  for (const [slice, errs] of groups) {
    const n = errs.length
    const sum = errs.reduce((a, b) => a + b, 0)
    const w1 = errs.filter((e) => e <= 1).length
    const w2 = errs.filter((e) => e <= 2).length
    out.push({
      slice,
      n,
      meanAbsError: r3(sum / n),
      within1Pct: r3(w1 / n),
      within2Pct: r3(w2 / n),
    })
  }
  // Largest slices first — most statistically meaningful at the top.
  return out.sort((a, b) => b.n - a.n)
}

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-model-perf:${ip}`, { limit: 30, windowSeconds: 60 })
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

    // ── Pull submissions (denormalised hot fields only) ───────────────────
    const { data: subData, error: subErr } = await supabase
      .from('marking_submissions')
      .select('id, exam_board, question_type, target_grade, ai_grade_band, ai_score, ai_confidence')
      .limit(20000)

    if (subErr) {
      // Table almost certainly not migrated on this DB yet — empty state.
      console.error('[admin/model-performance] submissions query failed', subErr)
      return NextResponse.json(emptyPayload('Marking store unavailable'))
    }

    const submissions = (subData ?? []) as SubmissionRow[]
    if (submissions.length === 0) {
      return NextResponse.json(emptyPayload(null))
    }

    const submissionById = new Map(submissions.map((s) => [s.id, s]))

    // ── Pull moderations; reduce to the LATEST per submission ─────────────
    const { data: modData, error: modErr } = await supabase
      .from('teacher_moderations')
      .select(
        'submission_id, decision, ai_score, teacher_score, feedback_before, feedback_after, adjustment_reason, created_at',
      )
      .order('created_at', { ascending: false })
      .limit(50000)

    if (modErr) {
      // Submissions exist but no moderation history table — still useful:
      // report submission totals, zero agreement.
      console.error('[admin/model-performance] moderations query failed', modErr)
      const payload = emptyPayload('Moderation history unavailable')
      payload.storeAvailable = true
      payload.totals.submissions = submissions.length
      return NextResponse.json(payload)
    }

    const moderations = (modData ?? []) as ModerationRow[]

    // First occurrence wins because we ordered created_at DESC → latest.
    const latestBySubmission = new Map<string, ModerationRow>()
    for (const m of moderations) {
      if (!latestBySubmission.has(m.submission_id)) {
        latestBySubmission.set(m.submission_id, m)
      }
    }

    const reviewed = latestBySubmission.size

    // ── Scored pairs: need an AI score AND a teacher score ────────────────
    const scoredErrors: number[] = []
    const boardRows: { key: string; absErr: number }[] = []
    const qTypeRows: { key: string; absErr: number }[] = []
    const gradeBandRows: { key: string; absErr: number }[] = []
    const confidenceRows: { conf: number; absErr: number }[] = []

    let overrideCount = 0
    let feedbackEdits = 0
    const decisionBreakdown: Record<string, number> = {}
    const adjustmentReasonCounts = new Map<string, number>()

    for (const [submissionId, mod] of latestBySubmission) {
      const sub = submissionById.get(submissionId)

      // Decision breakdown + override rate (corrected|rejected ÷ reviewed).
      const decision = (mod.decision ?? 'unknown').trim() || 'unknown'
      decisionBreakdown[decision] = (decisionBreakdown[decision] ?? 0) + 1
      if (decision === 'corrected' || decision === 'rejected') overrideCount++

      // Feedback edit rate.
      const fb = (mod.feedback_before ?? '').trim()
      const fa = (mod.feedback_after ?? '').trim()
      if (fa.length > 0 && fa !== fb) feedbackEdits++

      // Most common adjustment reason.
      const reason = (mod.adjustment_reason ?? '').trim()
      if (reason) {
        adjustmentReasonCounts.set(reason, (adjustmentReasonCounts.get(reason) ?? 0) + 1)
      }

      // Score agreement — prefer the moderation's own ai_score, fall back to
      // the submission's denormalised ai_score.
      const aiScore =
        typeof mod.ai_score === 'number'
          ? mod.ai_score
          : typeof sub?.ai_score === 'number'
            ? sub.ai_score
            : null
      const teacherScore = typeof mod.teacher_score === 'number' ? mod.teacher_score : null

      if (aiScore !== null && teacherScore !== null) {
        const absErr = Math.abs(aiScore - teacherScore)
        scoredErrors.push(absErr)

        const board = (sub?.exam_board ?? '').trim() || 'Unspecified'
        const qType = (sub?.question_type ?? '').trim() || 'Unspecified'
        // Grade band: prefer the AI-assigned band, else the target grade.
        const band =
          (sub?.ai_grade_band ?? '').trim() || (sub?.target_grade ?? '').trim() || 'Unspecified'

        boardRows.push({ key: board, absErr })
        qTypeRows.push({ key: qType, absErr })
        gradeBandRows.push({ key: band, absErr })

        if (typeof sub?.ai_confidence === 'number') {
          confidenceRows.push({ conf: sub.ai_confidence, absErr })
        }
      }
    }

    const scoredPairs = scoredErrors.length
    const sumErr = scoredErrors.reduce((a, b) => a + b, 0)
    const within1 = scoredErrors.filter((e) => e <= 1).length
    const within2 = scoredErrors.filter((e) => e <= 2).length
    const exact = scoredErrors.filter((e) => e === 0).length

    // ── AI-confidence reliability: fixed buckets on the 0..1 scale ────────
    const buckets: { label: string; lo: number; hi: number }[] = [
      { label: '0.0–0.5', lo: 0, hi: 0.5 },
      { label: '0.5–0.7', lo: 0.5, hi: 0.7 },
      { label: '0.7–0.85', lo: 0.7, hi: 0.85 },
      { label: '0.85–1.0', lo: 0.85, hi: 1.0001 },
    ]
    const confidenceReliability = buckets
      .map((b) => {
        const inB = confidenceRows.filter((c) => c.conf >= b.lo && c.conf < b.hi)
        const n = inB.length
        if (n === 0) {
          return { bucket: b.label, n: 0, meanAbsError: 0, within1Pct: 0 }
        }
        const s = inB.reduce((a, c) => a + c.absErr, 0)
        const w1 = inB.filter((c) => c.absErr <= 1).length
        return {
          bucket: b.label,
          n,
          meanAbsError: r3(s / n),
          within1Pct: r3(w1 / n),
        }
      })
      .filter((b) => b.n > 0)

    const topAdjustmentReasons = Array.from(adjustmentReasonCounts.entries())
      .map(([reason, count]) => ({ reason, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8)

    return NextResponse.json({
      generatedAt: new Date().toISOString(),
      storeAvailable: true,
      note: null,
      totals: {
        submissions: submissions.length,
        reviewed,
        scoredPairs,
      },
      scoreAccuracy: {
        meanAbsError: scoredPairs > 0 ? r3(sumErr / scoredPairs) : 0,
        within1Pct: scoredPairs > 0 ? r3(within1 / scoredPairs) : 0,
        within2Pct: scoredPairs > 0 ? r3(within2 / scoredPairs) : 0,
        exactPct: scoredPairs > 0 ? r3(exact / scoredPairs) : 0,
      },
      byExamBoard: sliceAccuracy(boardRows),
      byQuestionType: sliceAccuracy(qTypeRows),
      byGradeBand: sliceAccuracy(gradeBandRows),
      teacherOverrideRate: reviewed > 0 ? r3(overrideCount / reviewed) : 0,
      feedbackEditRate: reviewed > 0 ? r3(feedbackEdits / reviewed) : 0,
      decisionBreakdown,
      topAdjustmentReasons,
      confidenceReliability,
    })
  } catch (error) {
    console.error('[api/admin/model-performance] Unexpected error:', error)
    // Even on a hard failure we prefer an empty-state 200 so the admin
    // dashboard degrades rather than showing a broken page.
    return NextResponse.json(emptyPayload('Metrics temporarily unavailable'))
  }
}
