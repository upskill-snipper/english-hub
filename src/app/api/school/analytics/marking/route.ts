// ─── School Analytics: Smart IP Marking-Derived Metrics ─────────────────────
//
// GET /api/school/analytics/marking?period=month
//
// ADDITIVE sibling to /api/school/analytics. Surfaces teacher-in-the-loop
// marking intelligence aggregated from the FROZEN Smart IP schema
// (supabase/migrations/20260518_smart_ip_marking.sql):
//
//   • marking_submissions  — ai_score / teacher_grade / ai_ao_breakdown /
//                             question_text / mark_scheme_id / status / source
//   • teacher_moderations   — ao_corrections / ai_score / teacher_score /
//                             decision  (full reviewer-action history)
//
// Metrics returned (all empty-table-safe — zeros, never 500):
//   commonWeaknesses        — most-corrected AOs (student / class / school)
//   improvementOverTime     — teacher-score trend per student (oldest→newest)
//   averageMarkMovement     — mean ai_score vs teacher_score delta
//   mostCommonAoGaps        — AOs most frequently downgraded by teachers
//   mostImprovedStudents    — largest positive teacher-score trend
//   hardestQuestions        — lowest avg teacher_score by question/scheme
//   teacherOverridePatterns — override rate, direction, avg adjustment
//   aiConfidenceReliability  — agreement bucketed by AI uncertainty
//
// Auth mirrors /api/school/marking:
//   • admin / head_of_department  → whole school
//   • teacher                     → only their own classes' students
//
// DB access: Supabase service-role client ONLY (Prisma client is NOT
// regenerated for these extended columns — Windows EPERM). This route never
// touches Prisma.

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface WeaknessStat {
  /** Assessment Objective code, e.g. "AO2" (or a normalised label). */
  ao: string
  /** How many teacher moderations corrected/touched this AO. */
  occurrences: number
  /** Mean signed mark delta on this AO (teacher − ai); negative = AI over-marked. */
  avgDelta: number
}

interface StudentTrendPoint {
  date: string
  /** Final human mark where available, else AI mark. */
  score: number
  maxMarks: number | null
}

interface StudentImprovement {
  studentId: string
  studentName: string
  /** Linear slope of score over the period (marks per submission). */
  slope: number
  firstScore: number
  lastScore: number
  sampleSize: number
  trend: 'improving' | 'stable' | 'declining' | 'insufficient_data'
}

interface HardestQuestion {
  questionKey: string
  questionText: string | null
  markSchemeId: string | null
  avgTeacherScore: number
  avgAiScore: number
  sampleSize: number
}

interface MarkMovement {
  /** Mean (teacher_score − ai_score) across moderated submissions. */
  avgMovement: number
  /** Mean |teacher_score − ai_score| — magnitude regardless of direction. */
  avgAbsMovement: number
  upheldCount: number
  raisedCount: number
  loweredCount: number
  sampleSize: number
}

interface OverridePattern {
  totalReviewed: number
  totalOverridden: number
  overrideRate: number
  decisionCounts: Record<string, number>
  avgAdjustmentWhenChanged: number
}

interface ConfidenceReliabilityBucket {
  bucket: 'flagged_uncertain' | 'not_flagged'
  sampleSize: number
  /** Mean |teacher − ai| in this bucket. */
  avgAbsDelta: number
  /** Fraction the teacher left unchanged (|delta| === 0). */
  exactAgreementRate: number
}

interface MarkingAnalyticsResponse {
  scope: 'school' | 'teacher'
  period: string
  generatedAt: string
  totals: {
    submissions: number
    aiMarked: number
    teacherReviewed: number
    approved: number
    awaitingReview: number
    moderations: number
  }
  commonWeaknesses: {
    school: WeaknessStat[]
    byClass: Array<{ classId: string; className: string; weaknesses: WeaknessStat[] }>
    byStudent: Array<{ studentId: string; studentName: string; weaknesses: WeaknessStat[] }>
  }
  mostCommonAoGaps: WeaknessStat[]
  improvementOverTime: Array<{
    studentId: string
    studentName: string
    points: StudentTrendPoint[]
  }>
  mostImprovedStudents: StudentImprovement[]
  averageMarkMovement: MarkMovement
  hardestQuestions: HardestQuestion[]
  teacherOverridePatterns: OverridePattern
  aiConfidenceReliability: ConfidenceReliabilityBucket[]
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Empty, all-zero response so the dashboard renders pre-data / pre-migration. */
function emptyResponse(scope: 'school' | 'teacher', period: string): MarkingAnalyticsResponse {
  return {
    scope,
    period,
    generatedAt: new Date().toISOString(),
    totals: {
      submissions: 0,
      aiMarked: 0,
      teacherReviewed: 0,
      approved: 0,
      awaitingReview: 0,
      moderations: 0,
    },
    commonWeaknesses: { school: [], byClass: [], byStudent: [] },
    mostCommonAoGaps: [],
    improvementOverTime: [],
    mostImprovedStudents: [],
    averageMarkMovement: {
      avgMovement: 0,
      avgAbsMovement: 0,
      upheldCount: 0,
      raisedCount: 0,
      loweredCount: 0,
      sampleSize: 0,
    },
    hardestQuestions: [],
    teacherOverridePatterns: {
      totalReviewed: 0,
      totalOverridden: 0,
      overrideRate: 0,
      decisionCounts: {},
      avgAdjustmentWhenChanged: 0,
    },
    aiConfidenceReliability: [],
  }
}

function round2(n: number): number {
  return Math.round(n * 100) / 100
}

/**
 * Extract { aoCode → numericDelta } from a teacher_moderations.ao_corrections
 * JSON blob. The schema stores this as free JSONB so we defensively accept the
 * common shapes:
 *   { "AO1": { "ai": 8, "teacher": 6 }, ... }
 *   { "AO1": { "delta": -2 }, ... }
 *   { "AO1": -2, ... }
 *   [ { "ao": "AO1", "ai": 8, "teacher": 6 }, ... ]
 * Anything unparseable is skipped (never throws).
 */
function extractAoDeltas(raw: unknown): Map<string, number> {
  const out = new Map<string, number>()
  if (!raw) return out

  const pushPair = (aoRaw: unknown, value: number) => {
    const ao = String(aoRaw ?? '')
      .trim()
      .toUpperCase()
    if (!ao || !Number.isFinite(value)) return
    out.set(ao, (out.get(ao) ?? 0) + value)
  }

  const valueOf = (v: Record<string, unknown>): number | null => {
    if (typeof v.delta === 'number') return v.delta
    if (typeof v.teacher === 'number' && typeof v.ai === 'number') return v.teacher - v.ai
    if (typeof v.teacher_score === 'number' && typeof v.ai_score === 'number')
      return v.teacher_score - v.ai_score
    if (typeof v.change === 'number') return v.change
    return null
  }

  try {
    if (Array.isArray(raw)) {
      for (const item of raw) {
        if (item && typeof item === 'object') {
          const o = item as Record<string, unknown>
          const ao = o.ao ?? o.code ?? o.objective
          const val = valueOf(o)
          if (val !== null) pushPair(ao, val)
        }
      }
      return out
    }
    if (typeof raw === 'object') {
      for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
        if (typeof v === 'number') {
          pushPair(k, v)
        } else if (v && typeof v === 'object') {
          const val = valueOf(v as Record<string, unknown>)
          if (val !== null) pushPair(k, val)
        }
      }
    }
  } catch {
    /* defensive: malformed JSON contributes nothing */
  }
  return out
}

/**
 * AO codes the AI itself flagged weak, from marking_submissions.ai_ao_breakdown.
 * Accepts the AOScore[] production shape plus a few tolerant fallbacks. Returns
 * AOs scoring below `ratio` of their max as "AI-identified gaps".
 */
function extractAiWeakAos(raw: unknown, ratio = 0.6): string[] {
  const weak: string[] = []
  if (!raw) return weak
  try {
    const arr = Array.isArray(raw)
      ? raw
      : typeof raw === 'object'
        ? Object.values(raw as Record<string, unknown>)
        : []
    for (const item of arr) {
      if (!item || typeof item !== 'object') continue
      const o = item as Record<string, unknown>
      const code = String(o.id ?? o.code ?? o.ao ?? '')
        .trim()
        .toUpperCase()
      const score = Number(o.marks ?? o.score ?? o.awarded)
      const max = Number(o.maxMarks ?? o.max ?? o.maxMark)
      if (!code || !Number.isFinite(score) || !Number.isFinite(max) || max <= 0) continue
      if (score / max < ratio) weak.push(code)
    }
  } catch {
    /* defensive */
  }
  return weak
}

/** Least-squares slope of y over its index (x = 0..n-1). */
function linearSlope(ys: number[]): number {
  const n = ys.length
  if (n < 2) return 0
  const xMean = (n - 1) / 2
  const yMean = ys.reduce((a, b) => a + b, 0) / n
  let num = 0
  let den = 0
  for (let i = 0; i < n; i++) {
    num += (i - xMean) * (ys[i] - yMean)
    den += (i - xMean) ** 2
  }
  return den === 0 ? 0 : num / den
}

function topWeaknesses(
  deltaAccum: Map<string, { occ: number; sum: number }>,
  limit: number,
): WeaknessStat[] {
  return Array.from(deltaAccum.entries())
    .map(([ao, v]) => ({
      ao,
      occurrences: v.occ,
      avgDelta: round2(v.sum / Math.max(1, v.occ)),
    }))
    .sort((a, b) => b.occurrences - a.occurrences || a.avgDelta - b.avgDelta)
    .slice(0, limit)
}

// ---------------------------------------------------------------------------
// Row shapes (Supabase generated types don't know the extended columns yet —
// see migration note; cast through `unknown`).
// ---------------------------------------------------------------------------

interface SubmissionRow {
  id: string
  student_id: string | null
  class_id: string | null
  school_id: string | null
  source: string | null
  status: string | null
  question_text: string | null
  mark_scheme_id: string | null
  essay_title: string | null
  ai_score: number | null
  ai_max_marks: number | null
  ai_grade: string | null
  ai_ao_breakdown: unknown
  ai_uncertainty_flags: unknown
  teacher_grade: string | null
  submitted_at: string | null
  teacher_reviewed_at: string | null
  approved_at: string | null
}

interface ModerationRow {
  id: string
  submission_id: string
  decision: string | null
  ai_score: number | null
  teacher_score: number | null
  ao_corrections: unknown
  created_at: string | null
}

// ---------------------------------------------------------------------------
// GET
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  try {
    // ── Rate limit (mirror sibling analytics routes) ────────────────────────
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-analytics-marking:${ip}`, {
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

    // ── Auth ────────────────────────────────────────────────────────────────
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const member = await verifySchoolMember(user.id, ['admin', 'head_of_department', 'teacher'])
    if (!member) {
      return NextResponse.json(
        { error: 'Forbidden: school admin or teacher access required' },
        { status: 403 },
      )
    }

    const isTeacher = member.role === 'teacher'
    const scope: 'school' | 'teacher' = isTeacher ? 'teacher' : 'school'
    const schoolId = member.school_id as string

    const { searchParams } = new URL(request.url)
    const period = searchParams.get('period') ?? 'month'
    const periodMs: Record<string, number> = {
      week: 7 * 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000,
      term: 90 * 24 * 60 * 60 * 1000,
      year: 365 * 24 * 60 * 60 * 1000,
      all: Number.MAX_SAFE_INTEGER,
    }
    const windowMs = periodMs[period] ?? periodMs.month
    const periodStart =
      windowMs === Number.MAX_SAFE_INTEGER
        ? new Date(0).toISOString()
        : new Date(Date.now() - windowMs).toISOString()

    const admin = createServiceRoleClient()

    // ── Resolve the visible submission set (mirror /api/school/marking) ──────
    let subQuery = admin
      .from('marking_submissions')
      .select(
        `
        id, student_id, class_id, school_id, source, status,
        question_text, mark_scheme_id, essay_title,
        ai_score, ai_max_marks, ai_grade, ai_ao_breakdown, ai_uncertainty_flags,
        teacher_grade, submitted_at, teacher_reviewed_at, approved_at
        `,
      )
      .eq('school_id', schoolId)
      .gte('submitted_at', periodStart)
      .order('submitted_at', { ascending: true })
      .limit(5000)

    if (isTeacher) {
      // Teachers: restrict to students in classes they own. Two-step lookup
      // (no reliance on a Postgres function we don't ship), graceful-empty
      // exactly like /api/school/marking.
      const { data: ownedClasses, error: classesErr } = await admin
        .from('classes')
        .select('id, name')
        .eq('school_id', schoolId)
        .eq('teacher_id', member.id)

      if (classesErr) {
        return NextResponse.json(emptyResponse(scope, period))
      }
      const classIds = (ownedClasses ?? []).map((c: { id: string }) => c.id)
      if (classIds.length === 0) {
        return NextResponse.json(emptyResponse(scope, period))
      }
      subQuery = subQuery.in('class_id', classIds)
    }

    const { data: subData, error: subErr } = await subQuery
    if (subErr) {
      // Most likely cause: table/columns not present yet (pre-migration).
      // Degrade to a clean empty payload — never 500.
      return NextResponse.json(emptyResponse(scope, period))
    }

    const submissions = (subData ?? []) as unknown as SubmissionRow[]
    if (submissions.length === 0) {
      return NextResponse.json(emptyResponse(scope, period))
    }

    const submissionIds = submissions.map((s) => s.id)
    const subById = new Map(submissions.map((s) => [s.id, s]))

    // ── Pull the moderation history for these submissions ───────────────────
    let moderations: ModerationRow[] = []
    {
      const { data: modData, error: modErr } = await admin
        .from('teacher_moderations')
        .select('id, submission_id, decision, ai_score, teacher_score, ao_corrections, created_at')
        .in('submission_id', submissionIds)
        .order('created_at', { ascending: true })
      if (!modErr && modData) {
        moderations = modData as unknown as ModerationRow[]
      }
      // modErr (e.g. table missing) → moderations stays []; metrics derive
      // from marking_submissions inline columns instead.
    }

    // ── Hydrate student + class names (batched; failures → fallback label) ──
    const studentIds = Array.from(
      new Set(submissions.map((s) => s.student_id).filter(Boolean) as string[]),
    )
    const classIds = Array.from(
      new Set(submissions.map((s) => s.class_id).filter(Boolean) as string[]),
    )

    const [studentsRes, classesRes] = await Promise.all([
      studentIds.length > 0
        ? admin.from('profiles').select('id, full_name, email').in('id', studentIds)
        : Promise.resolve({
            data: [] as Array<{ id: string; full_name: string | null; email: string | null }>,
          }),
      classIds.length > 0
        ? admin.from('classes').select('id, name').in('id', classIds)
        : Promise.resolve({ data: [] as Array<{ id: string; name: string | null }> }),
    ])

    const studentNameById = new Map(
      (
        (studentsRes.data ?? []) as Array<{
          id: string
          full_name: string | null
          email: string | null
        }>
      ).map((s) => [s.id, s.full_name?.trim() || s.email?.split('@')[0] || 'Student']),
    )
    const classNameById = new Map(
      ((classesRes.data ?? []) as Array<{ id: string; name: string | null }>).map((c) => [
        c.id,
        c.name ?? 'Class',
      ]),
    )

    // ── Totals ──────────────────────────────────────────────────────────────
    const totals = {
      submissions: submissions.length,
      aiMarked: submissions.filter((s) =>
        ['ai_marked', 'teacher_review_required', 'teacher_reviewed', 'approved'].includes(
          s.status ?? '',
        ),
      ).length,
      teacherReviewed: submissions.filter((s) =>
        ['teacher_reviewed', 'approved', 'rejected'].includes(s.status ?? ''),
      ).length,
      approved: submissions.filter((s) => s.status === 'approved').length,
      awaitingReview: submissions.filter((s) =>
        ['submitted', 'pending', 'ai_marked', 'teacher_review_required'].includes(s.status ?? ''),
      ).length,
      moderations: moderations.length,
    }

    // ── Mark-movement signal source ─────────────────────────────────────────
    // Prefer explicit moderation rows (ai_score vs teacher_score). Fall back
    // to the submission's inline ai_score where a teacher_grade exists but no
    // moderation row was written (legacy override path).
    interface MovementSample {
      submissionId: string
      ai: number
      teacher: number
      delta: number
    }
    const movementSamples: MovementSample[] = []

    for (const m of moderations) {
      if (typeof m.ai_score === 'number' && typeof m.teacher_score === 'number') {
        movementSamples.push({
          submissionId: m.submission_id,
          ai: m.ai_score,
          teacher: m.teacher_score,
          delta: m.teacher_score - m.ai_score,
        })
      }
    }
    const moderatedSubmissionIds = new Set(movementSamples.map((s) => s.submissionId))
    for (const s of submissions) {
      if (moderatedSubmissionIds.has(s.id)) continue
      const tScore = s.teacher_grade != null ? Number(s.teacher_grade) : NaN
      if (
        typeof s.ai_score === 'number' &&
        Number.isFinite(tScore) &&
        ['teacher_reviewed', 'approved', 'rejected'].includes(s.status ?? '')
      ) {
        movementSamples.push({
          submissionId: s.id,
          ai: s.ai_score,
          teacher: tScore,
          delta: tScore - s.ai_score,
        })
      }
    }

    let upheld = 0
    let raised = 0
    let lowered = 0
    let movementSum = 0
    let absMovementSum = 0
    for (const ms of movementSamples) {
      movementSum += ms.delta
      absMovementSum += Math.abs(ms.delta)
      if (ms.delta === 0) upheld++
      else if (ms.delta > 0) raised++
      else lowered++
    }
    const averageMarkMovement: MarkMovement = {
      avgMovement: movementSamples.length ? round2(movementSum / movementSamples.length) : 0,
      avgAbsMovement: movementSamples.length ? round2(absMovementSum / movementSamples.length) : 0,
      upheldCount: upheld,
      raisedCount: raised,
      loweredCount: lowered,
      sampleSize: movementSamples.length,
    }

    // ── Common weaknesses / AO gaps ─────────────────────────────────────────
    // Primary signal: teacher_moderations.ao_corrections (what a human
    // actually changed). Secondary: AI-self-identified weak AOs from
    // ai_ao_breakdown — folded in so the metric is non-empty even before any
    // structured moderation rows exist.
    const schoolAccum = new Map<string, { occ: number; sum: number }>()
    const byStudentAccum = new Map<string, Map<string, { occ: number; sum: number }>>()
    const byClassAccum = new Map<string, Map<string, { occ: number; sum: number }>>()
    // Downgrades only (teacher LOWERED the AO) → "most common AO gaps".
    const gapAccum = new Map<string, { occ: number; sum: number }>()

    const bump = (map: Map<string, { occ: number; sum: number }>, ao: string, delta: number) => {
      const e = map.get(ao) ?? { occ: 0, sum: 0 }
      e.occ += 1
      e.sum += delta
      map.set(ao, e)
    }

    for (const m of moderations) {
      const sub = subById.get(m.submission_id)
      const deltas = extractAoDeltas(m.ao_corrections)
      for (const [ao, delta] of deltas) {
        bump(schoolAccum, ao, delta)
        if (delta < 0) bump(gapAccum, ao, delta)
        if (sub?.student_id) {
          if (!byStudentAccum.has(sub.student_id)) byStudentAccum.set(sub.student_id, new Map())
          bump(byStudentAccum.get(sub.student_id)!, ao, delta)
        }
        if (sub?.class_id) {
          if (!byClassAccum.has(sub.class_id)) byClassAccum.set(sub.class_id, new Map())
          bump(byClassAccum.get(sub.class_id)!, ao, delta)
        }
      }
    }

    // Secondary: AI-flagged weak AOs (delta unknown → recorded as 0 so it
    // raises occurrence count without skewing avgDelta).
    for (const s of submissions) {
      const weak = extractAiWeakAos(s.ai_ao_breakdown)
      for (const ao of weak) {
        bump(schoolAccum, ao, 0)
        bump(gapAccum, ao, 0)
        if (s.student_id) {
          if (!byStudentAccum.has(s.student_id)) byStudentAccum.set(s.student_id, new Map())
          bump(byStudentAccum.get(s.student_id)!, ao, 0)
        }
        if (s.class_id) {
          if (!byClassAccum.has(s.class_id)) byClassAccum.set(s.class_id, new Map())
          bump(byClassAccum.get(s.class_id)!, ao, 0)
        }
      }
    }

    const commonWeaknesses = {
      school: topWeaknesses(schoolAccum, 6),
      byClass: Array.from(byClassAccum.entries())
        .map(([classId, accum]) => ({
          classId,
          className: classNameById.get(classId) ?? 'Class',
          weaknesses: topWeaknesses(accum, 4),
        }))
        .filter((c) => c.weaknesses.length > 0)
        .slice(0, 25),
      byStudent: Array.from(byStudentAccum.entries())
        .map(([studentId, accum]) => ({
          studentId,
          studentName: studentNameById.get(studentId) ?? 'Student',
          weaknesses: topWeaknesses(accum, 4),
        }))
        .filter((s) => s.weaknesses.length > 0)
        .slice(0, 50),
    }
    const mostCommonAoGaps = topWeaknesses(gapAccum, 6)

    // ── Improvement over time + most improved students ──────────────────────
    // Per student, ordered series of "best available" score (teacher final
    // where present, else AI). Normalise to a percentage so questions with
    // different max marks compare fairly for the slope.
    const seriesByStudent = new Map<
      string,
      Array<{ date: string; score: number; maxMarks: number | null; pct: number }>
    >()

    for (const s of submissions) {
      if (!s.student_id) continue
      const tScore = s.teacher_grade != null ? Number(s.teacher_grade) : NaN
      const usingTeacher = Number.isFinite(tScore)
      const score = usingTeacher ? tScore : typeof s.ai_score === 'number' ? s.ai_score : NaN
      if (!Number.isFinite(score)) continue
      const max = typeof s.ai_max_marks === 'number' && s.ai_max_marks > 0 ? s.ai_max_marks : null
      const pct = max ? (score / max) * 100 : score
      const when = s.submitted_at ?? new Date().toISOString()
      if (!seriesByStudent.has(s.student_id)) seriesByStudent.set(s.student_id, [])
      seriesByStudent.get(s.student_id)!.push({ date: when, score, maxMarks: max, pct })
    }

    const improvementOverTime: MarkingAnalyticsResponse['improvementOverTime'] = []
    const mostImprovedStudents: StudentImprovement[] = []

    for (const [studentId, seriesRaw] of seriesByStudent) {
      const series = [...seriesRaw].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      )
      const name = studentNameById.get(studentId) ?? 'Student'

      improvementOverTime.push({
        studentId,
        studentName: name,
        points: series.map((p) => ({
          date: p.date,
          score: round2(p.score),
          maxMarks: p.maxMarks,
        })),
      })

      const pcts = series.map((p) => p.pct)
      let trend: StudentImprovement['trend'] = 'insufficient_data'
      let slope = 0
      if (pcts.length >= 2) {
        slope = round2(linearSlope(pcts))
        if (slope > 1.5) trend = 'improving'
        else if (slope < -1.5) trend = 'declining'
        else trend = 'stable'
      }
      mostImprovedStudents.push({
        studentId,
        studentName: name,
        slope,
        firstScore: round2(series[0].score),
        lastScore: round2(series[series.length - 1].score),
        sampleSize: series.length,
        trend,
      })
    }

    // Cap improvement series payload (most recent 30 students by activity).
    improvementOverTime.sort(
      (a, b) =>
        new Date(b.points[b.points.length - 1]?.date ?? 0).getTime() -
        new Date(a.points[a.points.length - 1]?.date ?? 0).getTime(),
    )
    improvementOverTime.splice(30)

    mostImprovedStudents.sort((a, b) => b.slope - a.slope)
    const mostImproved = mostImprovedStudents
      .filter((s) => s.sampleSize >= 2 && s.slope > 0)
      .slice(0, 10)

    // ── Hardest questions (lowest avg teacher score) ────────────────────────
    // Key by mark_scheme_id + question_text so the same question across
    // students aggregates. Prefer teacher score; fall back to AI score when a
    // question has no human marks yet (still informative, flagged via
    // avgTeacherScore === avgAiScore degenerate only when no teacher data).
    const qAccum = new Map<
      string,
      {
        questionText: string | null
        markSchemeId: string | null
        teacherScores: number[]
        aiScores: number[]
      }
    >()
    for (const s of submissions) {
      const qText = s.question_text ?? s.essay_title ?? null
      const key = `${s.mark_scheme_id ?? 'unknown'}::${qText ?? 'unknown'}`
      if (!qAccum.has(key)) {
        qAccum.set(key, {
          questionText: qText,
          markSchemeId: s.mark_scheme_id ?? null,
          teacherScores: [],
          aiScores: [],
        })
      }
      const e = qAccum.get(key)!
      const tScore = s.teacher_grade != null ? Number(s.teacher_grade) : NaN
      const max = typeof s.ai_max_marks === 'number' && s.ai_max_marks > 0 ? s.ai_max_marks : null
      if (Number.isFinite(tScore)) e.teacherScores.push(max ? (tScore / max) * 100 : tScore)
      if (typeof s.ai_score === 'number')
        e.aiScores.push(max ? (s.ai_score / max) * 100 : s.ai_score)
    }

    const hardestQuestions: HardestQuestion[] = Array.from(qAccum.entries())
      .map(([key, e]) => {
        const tArr = e.teacherScores
        const aArr = e.aiScores
        const avgT = tArr.length ? tArr.reduce((a, b) => a + b, 0) / tArr.length : NaN
        const avgA = aArr.length ? aArr.reduce((a, b) => a + b, 0) / aArr.length : NaN
        return {
          questionKey: key,
          questionText: e.questionText,
          markSchemeId: e.markSchemeId,
          avgTeacherScore: Number.isFinite(avgT) ? round2(avgT) : round2(avgA || 0),
          avgAiScore: Number.isFinite(avgA) ? round2(avgA) : 0,
          sampleSize: Math.max(tArr.length, aArr.length),
        }
      })
      .filter((q) => q.sampleSize > 0)
      .sort((a, b) => a.avgTeacherScore - b.avgTeacherScore)
      .slice(0, 10)

    // ── Teacher override patterns ───────────────────────────────────────────
    const decisionCounts: Record<string, number> = {}
    for (const m of moderations) {
      const d = m.decision ?? 'unknown'
      decisionCounts[d] = (decisionCounts[d] ?? 0) + 1
    }
    const changedDeltas = movementSamples.filter((s) => s.delta !== 0)
    const teacherOverridePatterns: OverridePattern = {
      totalReviewed: totals.teacherReviewed,
      totalOverridden: changedDeltas.length,
      overrideRate: totals.teacherReviewed
        ? round2(changedDeltas.length / totals.teacherReviewed)
        : 0,
      decisionCounts,
      avgAdjustmentWhenChanged: changedDeltas.length
        ? round2(changedDeltas.reduce((a, b) => a + b.delta, 0) / changedDeltas.length)
        : 0,
    }

    // ── AI-confidence reliability ───────────────────────────────────────────
    // Bucket moderated submissions by whether the AI flagged uncertainty
    // (ai_uncertainty_flags non-empty) and measure how often / how far the
    // teacher had to correct. A well-calibrated model should show larger
    // avgAbsDelta + lower exactAgreement in the "flagged_uncertain" bucket.
    const movementBySubmission = new Map<string, number>()
    for (const ms of movementSamples) {
      // last write wins; submissions rarely have >1 movement sample
      movementBySubmission.set(ms.submissionId, ms.delta)
    }
    const flaggedDeltas: number[] = []
    const notFlaggedDeltas: number[] = []
    for (const s of submissions) {
      if (!movementBySubmission.has(s.id)) continue
      const delta = movementBySubmission.get(s.id)!
      const flags = s.ai_uncertainty_flags
      const isFlagged =
        (Array.isArray(flags) && flags.length > 0) ||
        (!!flags && typeof flags === 'object' && Object.keys(flags).length > 0)
      ;(isFlagged ? flaggedDeltas : notFlaggedDeltas).push(delta)
    }
    const buildBucket = (
      bucket: ConfidenceReliabilityBucket['bucket'],
      deltas: number[],
    ): ConfidenceReliabilityBucket => ({
      bucket,
      sampleSize: deltas.length,
      avgAbsDelta: deltas.length
        ? round2(deltas.reduce((a, b) => a + Math.abs(b), 0) / deltas.length)
        : 0,
      exactAgreementRate: deltas.length
        ? round2(deltas.filter((d) => d === 0).length / deltas.length)
        : 0,
    })
    const aiConfidenceReliability: ConfidenceReliabilityBucket[] = [
      buildBucket('flagged_uncertain', flaggedDeltas),
      buildBucket('not_flagged', notFlaggedDeltas),
    ].filter((b) => b.sampleSize > 0)

    // ── Response ────────────────────────────────────────────────────────────
    const response: MarkingAnalyticsResponse = {
      scope,
      period,
      generatedAt: new Date().toISOString(),
      totals,
      commonWeaknesses,
      mostCommonAoGaps,
      improvementOverTime,
      mostImprovedStudents: mostImproved,
      averageMarkMovement,
      hardestQuestions,
      teacherOverridePatterns,
      aiConfidenceReliability,
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('[school/analytics/marking] GET error:', error)
    // Never 500 the dashboard for this additive panel — return an empty,
    // well-formed payload so the page degrades to "no marking data yet".
    return NextResponse.json(
      emptyResponse('school', new URL(request.url).searchParams.get('period') ?? 'month'),
    )
  }
}
