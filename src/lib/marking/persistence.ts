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
  /**
   * Teacher has sent the work back to the student WITH feedback. Distinct
   * from 'teacher_review_required' (still mid-review in the queue): the
   * student may see the teacher's feedback for this status.
   */
  | 'returned'
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

// ─── Server-side school/class resolution ─────────────────────────────────────

export interface SubmissionContext {
  source: SubmissionSource
  schoolId: string | null
  classId: string | null
}

/**
 * Resolve the submitting student's school and class SERVER-side from their
 * most recent active `class_students` enrolment (and the class's school_id).
 *
 * WHY: schoolId/classId must never be trusted from the request body - a
 * client could otherwise inject its submission into another school's marking
 * queue, and could equally hide a class submission from its teacher by
 * claiming b2c. A pupil with an active enrolment in an active class submits
 * as 'b2b_class' scoped to that class's school; everyone else is 'b2c_self'
 * with no school or class.
 */
export async function resolveSubmissionContext(
  svc: SupabaseClient,
  studentId: string,
): Promise<SubmissionContext> {
  const { data, error } = await svc
    .from('class_students')
    .select('class_id, joined_at, classes!inner(id, school_id, is_active)')
    .eq('student_id', studentId)
    .eq('is_active', true)
    .eq('classes.is_active', true)
    .order('joined_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error) {
    // A failed lookup must not block the submission - it only loses B2B
    // routing for this one row. Logged so a systemic failure is visible.
    console.error('[marking/persistence] class enrolment lookup failed', error)
    return { source: 'b2c_self', schoolId: null, classId: null }
  }
  if (!data) {
    return { source: 'b2c_self', schoolId: null, classId: null }
  }

  const row = data as unknown as {
    class_id: string
    classes:
      | { id: string; school_id: string | null }
      | { id: string; school_id: string | null }[]
      | null
  }
  const cls = Array.isArray(row.classes) ? (row.classes[0] ?? null) : row.classes
  if (!cls || !cls.school_id) {
    return { source: 'b2c_self', schoolId: null, classId: null }
  }
  return { source: 'b2b_class', schoolId: cls.school_id, classId: row.class_id }
}

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

// ─── List (the student's own history) ────────────────────────────────────────
//
// WHY THIS EXISTS (19 September 2026, SF-2)
// `/marking/history` and the `/marking` landing page read the student's
// marking history from `localStorage` and nowhere else. The server had no list
// endpoint at all: `GET /api/marking/{id}` is per-id, and
// `/api/submissions` exported only `POST`.
//
// So a student who marked essays on the school desktop and then opened the
// site on their phone saw an empty history and an empty progress graph. Their
// work was safe in `marking_submissions` the whole time; nothing could ask for
// it. Clearing browser data had the same effect, permanently.
//
// The list is deliberately NARROW. `SUBMISSION_SELECT` is the full row
// including `essay_text` and `ai_result`; a history screen needs neither, and
// shipping a child's essay bodies to render a list of titles would be a
// gratuitous widening of what crosses the wire.

/** One row of a student's marking history, as the history screens consume it. */
export interface SubmissionListItem {
  id: string
  title: string
  board: string
  paper: string
  markSchemeId: string | null
  /** null when unmarked, or when the mark is not yet visible to the student. */
  grade: number | null
  gradeBand: string | null
  wordCount: number
  status: SubmissionStatus
  source: string
  submittedAt: string
}

/**
 * Columns for the list view.
 *
 * `essay_text` is selected but NEVER returned - it is read only to compute a
 * word count, then dropped in the mapper below.
 *
 * `teacher_grade` is here because the per-id hydration this replaces resolved
 * the displayed mark as `teacher_grade ?? ai_grade`. Selecting only `ai_grade`
 * would have quietly shown a school pupil the AI's draft mark in place of the
 * teacher's approved one - a worse answer than the one being replaced.
 */
export const SUBMISSION_LIST_SELECT = `
  id,
  question_text,
  essay_title,
  exam_board,
  paper,
  mark_scheme_id,
  ai_grade,
  ai_grade_band,
  ai_score,
  ai_max_marks,
  teacher_grade,
  status,
  source,
  submitted_at,
  essay_text
`

/**
 * `ai_grade` and `teacher_grade` are TEXT in the table, not integers - GCSE
 * grades are written like '7', 'Grade 7', '8/9'. The history screen needs a
 * number to average and to plot.
 *
 * Returns the first standalone 1-9 found, or null. Anything unparseable
 * becomes null rather than 0: an unmarked essay counted as a zero would drag
 * a student's average down and show them a false decline on their progress
 * graph, which is the one thing this screen must never do.
 */
export function parseGradeToNumber(value: unknown): number | null {
  if (typeof value === 'number') {
    return Number.isFinite(value) && value >= 1 && value <= 9 ? value : null
  }
  if (typeof value !== 'string') return null
  const match = value.match(/\b([1-9])\b/)
  return match ? Number(match[1]) : null
}

/** Word count from the essay body, which is then discarded. */
function wordCountOf(essay: unknown): number {
  if (typeof essay !== 'string') return 0
  const trimmed = essay.trim()
  if (!trimmed) return 0
  return trimmed.split(/\s+/).length
}

/**
 * List a student's own submissions, newest first.
 *
 * Pass the REQUEST-SCOPED client, not the service-role one: the RLS policy
 * `marking_submissions_students_select` (auth.uid() = student_id) is then the
 * only thing that decides what comes back, so a bug in the `studentId`
 * argument cannot return another child's work.
 */
export async function listSubmissionsForStudent(
  client: SupabaseClient,
  studentId: string,
  limit: number,
): Promise<SubmissionListItem[]> {
  const { data, error } = await client
    .from(SUBMISSIONS_TABLE)
    .select(SUBMISSION_LIST_SELECT)
    .eq('student_id', studentId)
    .order('submitted_at', { ascending: false })
    .limit(limit)

  if (error) throw error
  if (!data) return []

  return (data as Record<string, unknown>[]).map((row) => ({
    id: String(row.id),
    // `essay_title` is NULL on every row the spine writes - insertSubmission
    // never sets it. Falling back to the question text keeps the list
    // readable instead of rendering a column of blanks.
    title: (row.essay_title as string | null) ?? (row.question_text as string | null) ?? 'Untitled',
    board: (row.exam_board as string | null) ?? '',
    paper: (row.paper as string | null) ?? '',
    markSchemeId: (row.mark_scheme_id as string | null) ?? null,
    grade: parseGradeToNumber(row.teacher_grade) ?? parseGradeToNumber(row.ai_grade),
    gradeBand: (row.ai_grade_band as string | null) ?? null,
    wordCount: wordCountOf(row.essay_text),
    status: row.status as SubmissionStatus,
    source: String(row.source ?? ''),
    submittedAt: String(row.submitted_at ?? ''),
  }))
}

/**
 * Whether a student may see the mark on their own submission yet.
 *
 * Mirrors the per-id route's safeguard exactly (see
 * `src/app/api/marking/[submissionId]/route.ts`). In particular 'returned' IS
 * visible for school pupils: it is teacher-initiated and always carries their
 * comments, and withholding it made "send back to student" a no-op from the
 * student's side. That was a real bug once; it must not come back through the
 * list endpoint.
 */
export function studentCanSeeGrade(status: SubmissionStatus, source: string): boolean {
  if (source === 'b2b_class') {
    return status === 'approved' || status === 'returned'
  }
  return status === 'ai_marked' || status === 'approved' || status === 'returned'
}
