// ─── GET /api/training/export?format=jsonl|csv|eval ──────────────────────────
//
// Platform-admin-only. Streams the APPROVED, anonymised training_data corpus as
// a downloadable file in one of three shapes:
//
//   • jsonl — fine-tuning records (one JSON object per line), EXACT shape:
//       { "input":  { exam_board, qualification, paper, question,
//                      question_type, rubric, student_answer },
//         "expected_output": { mark, grade_band, ao_breakdown, feedback,
//                              improvement_targets },
//         "metadata": { rubric_version, teacher_approved:true,
//                       source:"teacher_moderated", model_version,
//                       prompt_version } }
//
//   • csv  — one flat row per record, analysis-friendly columns.
//
//   • eval — the eval gold-standard dataset shape (evals/types.ts →
//            GoldStandardCase): one JSON object per line, teacher-moderated
//            marks mapped onto the examiner (gold) fields.
//
// PII GUARANTEE: every row is run through `assertNoPii` BEFORE serialisation.
// `source_submission_id` and any name/email/DOB/raw-school-id key are stripped;
// a row that still trips the assertion is SKIPPED and counted (never emitted).
// The skipped count is surfaced in an `X-Training-Skipped-Pii` response header.
// training_data is service-role-only and contains no PII by construction — this
// is defence-in-depth.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { isSiteAdmin } from '@/lib/site-admin'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import {
  forbiddenResponse,
  rateLimitResponse,
  serverErrorResponse,
  unauthorizedResponse,
} from '@/lib/api-response'
import { FORBIDDEN_EXPORT_KEYS } from '@/lib/training/anonymise'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

type ExportFormat = 'jsonl' | 'csv' | 'eval'

/** The training_data columns we read. `source_submission_id` is fetched only
 *  so the PII guard can prove it never reaches the output (stripped below). */
interface TrainingRow {
  anon_submission_id: string
  source_submission_id: string | null
  exam_board: string | null
  qualification: string | null
  paper: string | null
  question: string | null
  question_type: string | null
  rubric_version: string | null
  student_answer: string
  ai_predicted_mark: number | null
  teacher_final_mark: number | null
  mark_delta: number | null
  ai_feedback: string | null
  teacher_final_feedback: string | null
  teacher_correction_reason: string | null
  grade_band: string | null
  ao_scores: unknown
  confidence_score: number | null
  approved_at: string | null
  model_version: string | null
  prompt_version: string | null
  anon_school_id: string | null
  anon_class_id: string | null
  source: string | null
  created_at: string
}

const SELECT_COLS =
  'anon_submission_id, source_submission_id, exam_board, qualification, paper,' +
  ' question, question_type, rubric_version, student_answer, ai_predicted_mark,' +
  ' teacher_final_mark, mark_delta, ai_feedback, teacher_final_feedback,' +
  ' teacher_correction_reason, grade_band, ao_scores, confidence_score,' +
  ' approved_at, model_version, prompt_version, anon_school_id, anon_class_id,' +
  ' source, created_at'

// ─── PII guard ───────────────────────────────────────────────────────────────

const UUID_RE = /\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/i
const EMAIL_RE = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i

/**
 * Returns true if `row` is SAFE to export. A row is unsafe if it carries any
 * forbidden key (names/emails/DOB/raw ids/file metadata) with a value, or if
 * the structured-id fields look un-anonymised (raw UUID / an email anywhere in
 * the id-bearing fields). Hashed ids are 64-hex (no dashes) so they pass.
 *
 * `student_answer` / feedback are learner free-text and are NOT pattern-scanned
 * here (in-text scrubbing is the separate human redaction step per
 * REAL-DATA-PROTOCOL.md §3.2); we only assert the structural identifiers.
 */
function assertNoPii(row: Record<string, unknown>): boolean {
  for (const key of FORBIDDEN_EXPORT_KEYS) {
    const v = row[key]
    if (v !== undefined && v !== null && String(v).trim() !== '') return false
  }
  const idFields = [row['anon_submission_id'], row['anon_school_id'], row['anon_class_id']]
  for (const f of idFields) {
    if (f == null) continue
    const s = String(f)
    if (UUID_RE.test(s) || EMAIL_RE.test(s)) return false
  }
  return true
}

/** Strip the FK + any forbidden key before the row is shaped/serialised. */
function stripForbidden(row: TrainingRow): Record<string, unknown> {
  const clone: Record<string, unknown> = { ...row }
  for (const key of FORBIDDEN_EXPORT_KEYS) delete clone[key]
  return clone
}

// ─── Shapers ─────────────────────────────────────────────────────────────────

/** improvement_targets: derive a small string[] from the correction reason. */
function improvementTargets(row: TrainingRow): string[] {
  const reason = row.teacher_correction_reason
  if (!reason || reason.trim().length === 0) return []
  return reason
    .split(/\r?\n|;|•|·|•/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
}

function toJsonlRecord(row: TrainingRow) {
  return {
    input: {
      exam_board: row.exam_board,
      qualification: row.qualification,
      paper: row.paper,
      question: row.question,
      question_type: row.question_type,
      rubric: row.rubric_version,
      student_answer: row.student_answer,
    },
    expected_output: {
      mark: row.teacher_final_mark,
      grade_band: row.grade_band,
      ao_breakdown: row.ao_scores ?? null,
      feedback: row.teacher_final_feedback,
      improvement_targets: improvementTargets(row),
    },
    metadata: {
      rubric_version: row.rubric_version,
      teacher_approved: true as const,
      source: 'teacher_moderated' as const,
      model_version: row.model_version,
      prompt_version: row.prompt_version,
    },
  }
}

/** Coerce ao_scores JSON into the eval ExaminerAOMark[] shape, best-effort. */
function toExaminerMarks(aoScores: unknown): { id: string; marks: number; maxMarks: number }[] {
  if (!aoScores || typeof aoScores !== 'object') return []
  const out: { id: string; marks: number; maxMarks: number }[] = []

  const pushFrom = (id: string, val: unknown) => {
    if (val && typeof val === 'object') {
      const o = val as Record<string, unknown>
      const marks = Number(o.marks ?? o.score ?? o.awarded)
      const maxMarks = Number(o.maxMarks ?? o.max ?? o.outOf ?? o.max_marks)
      if (Number.isFinite(marks) && Number.isFinite(maxMarks)) {
        out.push({ id, marks, maxMarks })
      }
    } else if (typeof val === 'number' && Number.isFinite(val)) {
      out.push({ id, marks: val, maxMarks: val })
    }
  }

  if (Array.isArray(aoScores)) {
    for (const entry of aoScores) {
      if (entry && typeof entry === 'object') {
        const o = entry as Record<string, unknown>
        const id = String(o.id ?? o.ao ?? o.code ?? '').trim()
        if (id) pushFrom(id, o)
      }
    }
  } else {
    for (const [k, v] of Object.entries(aoScores as Record<string, unknown>)) {
      pushFrom(k, v)
    }
  }
  return out
}

/** eval shape — evals/types.ts → GoldStandardCase (teacher-moderated gold). */
function toEvalCase(row: TrainingRow) {
  return {
    id: `teh-train-${row.anon_submission_id.slice(0, 16)}`,
    board: row.exam_board ?? 'UNKNOWN',
    paper: row.paper ?? 'Unknown',
    question: row.question_type ?? row.paper ?? 'Q',
    markSchemeId: row.rubric_version ?? 'unknown',
    studentAnswer: row.student_answer,
    questionText: row.question ?? undefined,
    examinerMarks: toExaminerMarks(row.ao_scores),
    examinerGrade: row.teacher_final_mark !== null ? String(row.teacher_final_mark) : 'U',
    synthetic: false as const,
    provenance: `The English Hub teacher-moderated corpus; anon_submission_id=${row.anon_submission_id}; teacher-approved${
      row.approved_at ? ` ${row.approved_at}` : ''
    }`,
  }
}

// ─── CSV helpers ─────────────────────────────────────────────────────────────

const CSV_COLUMNS: (keyof TrainingRow)[] = [
  'anon_submission_id',
  'source',
  'exam_board',
  'qualification',
  'paper',
  'question',
  'question_type',
  'rubric_version',
  'student_answer',
  'ai_predicted_mark',
  'teacher_final_mark',
  'mark_delta',
  'ai_feedback',
  'teacher_final_feedback',
  'teacher_correction_reason',
  'grade_band',
  'ao_scores',
  'confidence_score',
  'model_version',
  'prompt_version',
  'anon_school_id',
  'anon_class_id',
  'approved_at',
  'created_at',
]

function csvCell(v: unknown): string {
  if (v === null || v === undefined) return ''
  const s = typeof v === 'object' ? JSON.stringify(v) : String(v)
  // Always quote; escape embedded quotes. Strip CR so rows can't be split.
  return `"${s.replace(/"/g, '""').replace(/\r/g, '')}"`
}

// ─── Handler ─────────────────────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    // 1. Auth.
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return unauthorizedResponse()
    }

    // 2. Platform-admin gate.
    if (!isSiteAdmin(user.email)) {
      return forbiddenResponse('Platform admin access required.')
    }

    // 3. Rate limit (exports are heavy).
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`training-export:${user.id}:${ip}`, {
      limit: 10,
      windowSeconds: 60,
    })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    // 4. Format.
    const fmtParam = (request.nextUrl.searchParams.get('format') || 'jsonl').toLowerCase()
    if (fmtParam !== 'jsonl' && fmtParam !== 'csv' && fmtParam !== 'eval') {
      return NextResponse.json(
        { error: 'format must be one of: jsonl, csv, eval' },
        { status: 400 },
      )
    }
    const format = fmtParam as ExportFormat

    // 5. Load the approved corpus (service role; training_data is
    //    service-role-only). Approved == has a teacher_final_mark recorded
    //    (prepareTrainingRecord only writes rows after the approval gate).
    const admin = createServiceRoleClient()
    const { data, error } = await admin
      .from('training_data')
      .select(SELECT_COLS)
      .order('created_at', { ascending: true })
      .limit(50000)

    if (error) {
      console.error('[training/export] query failed', error.message)
      return serverErrorResponse('Failed to load training data.')
    }

    const rows = (data ?? []) as unknown as TrainingRow[]

    // 6. Shape + per-row PII assertion (skip + count failures).
    let skippedPii = 0
    let emitted = 0
    const lines: string[] = []

    if (format === 'csv') {
      lines.push(CSV_COLUMNS.join(','))
    }

    for (const raw of rows) {
      const safe = stripForbidden(raw)
      if (!assertNoPii(safe)) {
        skippedPii++
        continue
      }
      if (format === 'jsonl') {
        lines.push(JSON.stringify(toJsonlRecord(raw)))
      } else if (format === 'eval') {
        lines.push(JSON.stringify(toEvalCase(raw)))
      } else {
        lines.push(CSV_COLUMNS.map((c) => csvCell(raw[c])).join(','))
      }
      emitted++
    }

    const body = lines.join('\n') + (lines.length > 0 ? '\n' : '')

    const stamp = new Date().toISOString().slice(0, 10)
    const ext = format === 'csv' ? 'csv' : 'jsonl'
    const filename = `training-${format}-${stamp}.${ext}`
    const contentType =
      format === 'csv' ? 'text/csv; charset=utf-8' : 'application/x-ndjson; charset=utf-8'

    return new NextResponse(body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'private, no-store',
        'X-Training-Records': String(emitted),
        'X-Training-Skipped-Pii': String(skippedPii),
      },
    })
  } catch (error) {
    console.error('[api/training/export] unexpected error', error)
    return serverErrorResponse('An unexpected error occurred.')
  }
}
