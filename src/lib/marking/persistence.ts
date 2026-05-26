// ─── Marking Submission Persistence Helpers ──────────────────────────────────
//
// Shared row-mapping / load / update helpers for the unified submission +
// AI-marking spine. Every function here talks to the `marking_submissions`
// Supabase table through a passed-in Supabase client (service-role or
// RLS-scoped - the caller decides) so the DB-access rule is honoured: these
// tables are NEVER touched via the Prisma client (Prisma client is not
// regenerated locally - the new models are absent).
//
// DB column names are kept snake_case throughout - these objects are the raw
// shapes the Supabase table returns / accepts, NOT the Prisma camelCase model.
// ────────────────────────────────────────────────────────────────────────────

import type { SupabaseClient } from '@supabase/supabase-js'
import type { MarkingResult } from './mark-schemes/types'

// ─── Status lifecycle ────────────────────────────────────────────────────────
// Mirrors the CHECK constraint in
// supabase/migrations/20260518_smart_ip_marking.sql. The AI-marking spine only
// ever WRITES 'submitted', 'ai_marked' and 'teacher_review_required'. An AI
// mark is always a DRAFT - this code never writes 'approved'.

export type SubmissionStatus =
  | 'submitted'
  | 'pending'
  | 'ai_marked'
  | 'teacher_review_required'
  | 'teacher_reviewed'
  | 'approved'
  | 'rejected'
  | 'training_ready'
  | 'excluded_from_training'

export type SubmissionSource = 'b2c_self' | 'b2b_class'

const SUBMISSIONS_TABLE = 'marking_submissions'

// ─── Row shapes ──────────────────────────────────────────────────────────────

/**
 * The columns the spine reads back for a single submission. Kept explicit so a
 * `select(SUBMISSION_SELECT)` and this type stay in lock-step.
 */
export interface MarkingSubmissionRow {
  id: string
  school_id: string | null
  student_id: string
  class_id: string | null
  source: SubmissionSource
  exam_board: string | null
  qualification: string | null
  paper: string | null
  question_text: string | null
  question_type: string | null
  studied_text: string | null
  target_grade: string | null
  mark_scheme_id: string | null
  rubric_ref: string | null
  essay_title: string | null
  essay_text: string
  ai_result: unknown | null
  ai_score: number | null
  ai_max_marks: number | null
  ai_grade: string | null
  ai_grade_band: string | null
  ai_confidence: number | null
  ai_ao_breakdown: unknown | null
  ai_uncertainty_flags: unknown | null
  ai_feedback: string | null
  ai_band_marks: unknown | null
  model_version_id: string | null
  prompt_version_id: string | null
  rubric_version_id: string | null
  status: string
  submitted_at: string
  teacher_grade: string | null
  teacher_comment: string | null
  teacher_reviewed_by: string | null
  teacher_reviewed_at: string | null
  final_teacher_mark: string | null
  final_teacher_feedback: string | null
  teacher_adjustment_reason: string | null
  approved_by: string | null
  approved_at: string | null
  training_eligible: boolean | null
  moderation_notes: string | null
}

/** Explicit column list mirroring {@link MarkingSubmissionRow}. */
export const SUBMISSION_SELECT = `
  id,
  school_id,
  student_id,
  class_id,
  source,
  exam_board,
  qualification,
  paper,
  question_text,
  question_type,
  studied_text,
  target_grade,
  mark_scheme_id,
  rubric_ref,
  essay_title,
  essay_text,
  ai_result,
  ai_score,
  ai_max_marks,
  ai_grade,
  ai_grade_band,
  ai_confidence,
  ai_ao_breakdown,
  ai_uncertainty_flags,
  ai_feedback,
  ai_band_marks,
  model_version_id,
  prompt_version_id,
  rubric_version_id,
  status,
  submitted_at,
  teacher_grade,
  teacher_comment,
  teacher_reviewed_by,
  teacher_reviewed_at,
  final_teacher_mark,
  final_teacher_feedback,
  teacher_adjustment_reason,
  approved_by,
  approved_at,
  training_eligible,
  moderation_notes
` as const

// ─── Insert ──────────────────────────────────────────────────────────────────

export interface NewSubmissionInput {
  source: SubmissionSource
  studentId: string
  schoolId: string | null
  classId: string | null
  examBoard: string
  qualification: string | null
  paper: string | null
  questionText: string
  questionType: string | null
  studiedText: string | null
  targetGrade: string | null
  markSchemeId: string
  questionId: string
  /** Mapped onto `essay_text` - the student's answer is the essay. */
  studentAnswer: string
}

/**
 * Insert a freshly-submitted row in status `'submitted'`. Returns the new id.
 * `essay_text` carries the student answer; `rubric_ref` records the in-scheme
 * question id for later reproducibility. Throws the Supabase error so the
 * route can map it to a 5xx.
 */
export async function insertSubmission(
  svc: SupabaseClient,
  input: NewSubmissionInput,
): Promise<{ id: string }> {
  const { data, error } = await svc
    .from(SUBMISSIONS_TABLE)
    .insert({
      source: input.source,
      student_id: input.studentId,
      school_id: input.schoolId,
      class_id: input.classId,
      exam_board: input.examBoard,
      qualification: input.qualification,
      paper: input.paper,
      question_text: input.questionText,
      question_type: input.questionType,
      studied_text: input.studiedText,
      target_grade: input.targetGrade,
      mark_scheme_id: input.markSchemeId,
      rubric_ref: input.questionId,
      essay_text: input.studentAnswer,
      status: 'submitted' satisfies SubmissionStatus,
    })
    .select('id')
    .single()

  if (error || !data) {
    throw error ?? new Error('Insert returned no row')
  }
  return { id: (data as { id: string }).id }
}

// ─── Load ────────────────────────────────────────────────────────────────────

/**
 * Load a single submission by id. Returns null when not found (PGRST116) so
 * callers can map cleanly to a 404; rethrows any other error.
 */
export async function loadSubmission(
  client: SupabaseClient,
  submissionId: string,
): Promise<MarkingSubmissionRow | null> {
  const { data, error } = await client
    .from(SUBMISSIONS_TABLE)
    .select(SUBMISSION_SELECT)
    .eq('id', submissionId)
    .single()

  if (error) {
    if ((error as { code?: string }).code === 'PGRST116') return null
    throw error
  }
  return (data as unknown as MarkingSubmissionRow) ?? null
}

// ─── Update with AI result ───────────────────────────────────────────────────

export interface AiResultPersistInput {
  result: MarkingResult
  /** Derived uncertainty flags (gradeIsIndicativeOnly + INVALID/OFF markers). */
  uncertaintyFlags: string[]
  modelVersionId: string | null
  promptVersionId: string | null
  rubricVersionId: string | null
  /** Final status to set - never 'approved' from this code path. */
  status: Extract<SubmissionStatus, 'ai_marked' | 'teacher_review_required'>
}

/**
 * Persist a completed AI mark onto an existing row. `ai_confidence` is set to
 * NULL deliberately - we no longer fabricate a confidence number. The full
 * `MarkingResult` JSON is stored in `ai_result`; hot fields are denormalised.
 * Returns the updated row (re-selected) or throws on failure.
 */
export async function applyAiResult(
  svc: SupabaseClient,
  submissionId: string,
  input: AiResultPersistInput,
): Promise<MarkingSubmissionRow> {
  const r = input.result
  const { data, error } = await svc
    .from(SUBMISSIONS_TABLE)
    .update({
      ai_result: r as unknown as Record<string, unknown>,
      ai_score: r.totalMarks,
      ai_max_marks: r.maxMarks,
      ai_grade: r.predictedGrade,
      ai_grade_band: r.gradeBand,
      // We no longer fake confidence - explicitly NULL.
      ai_confidence: null,
      ai_ao_breakdown: r.aoScores as unknown as Record<string, unknown>[],
      ai_uncertainty_flags: input.uncertaintyFlags,
      ai_feedback: r.summary,
      model_version_id: input.modelVersionId,
      prompt_version_id: input.promptVersionId,
      rubric_version_id: input.rubricVersionId,
      status: input.status,
    })
    .eq('id', submissionId)
    .select(SUBMISSION_SELECT)
    .single()

  if (error || !data) {
    throw error ?? new Error('Update returned no row')
  }
  return data as unknown as MarkingSubmissionRow
}

// ─── Derivations ─────────────────────────────────────────────────────────────

/**
 * Derive the uncertainty-flag list persisted to `ai_uncertainty_flags`.
 * Currently: an indicative-only grade boundary (`gradeIsIndicativeOnly`).
 * INVALID_SUBMISSION / OFF_TOPIC never reach a successful persist (the route
 * rejects them before this), but the signature accepts an optional extra set
 * so a caller can fold in any future structured markers without a schema hop.
 */
export function deriveUncertaintyFlags(result: MarkingResult, extra?: readonly string[]): string[] {
  const flags: string[] = []
  if (result.gradeIsIndicativeOnly === true) {
    flags.push('GRADE_INDICATIVE_ONLY')
  }
  if (extra) {
    for (const f of extra) if (f && !flags.includes(f)) flags.push(f)
  }
  return flags
}
