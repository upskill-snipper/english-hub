// ─── Training-Data Anonymisation ─────────────────────────────────────────────
//
// Pure, I/O-free transform from a raw marking-submission + moderation bundle
// into the anonymised `public.training_data` row shape (snake_case keys exactly
// matching supabase/migrations/20260518_smart_ip_marking.sql).
//
// DATA-PROTECTION CONTRACT (UK GDPR / Children's Code - most candidates are
// minors). The output MUST NOT contain any direct identifier:
//   • NO student / teacher / parent names
//   • NO emails, dates of birth, addresses
//   • NO school name, raw school id, raw class id, raw submission id
//   • NO uploaded-file metadata (original filenames, paths, mime, sizes)
//
// Identifiers that must survive only as a *non-reversible* correlation key
// (submission / school / class id) are passed through `hashId` (a SHA-256
// hexdigest via `hashAuditInput`, injected by the caller so this file stays
// free of any crypto/Node import and trivially unit-testable). Free-text the
// learner wrote (`student_answer`, feedback) is retained verbatim because it is
// the markable signal - in-text scrubbing of self-identifying content is the
// separate human/redaction step described in REAL-DATA-PROTOCOL.md §3.2; this
// function never *introduces* PII and never copies a name/email/DOB field.
//
// This module is deliberately decoupled from Prisma / Supabase types: the
// caller (prepare.ts) marshals DB rows into the small `RawSubmissionBundle`
// below, calls `anonymiseRecord`, and hands the result straight to a
// service-role INSERT.
// ────────────────────────────────────────────────────────────────────────────

/**
 * The minimal, already-loaded inputs `anonymiseRecord` needs. The caller
 * (prepare.ts) populates this from a `marking_submissions` row plus the latest
 * `teacher_moderations` row - it never passes the whole DB row through, so
 * unexpected PII-bearing columns cannot leak by accident.
 *
 * Every id field here is the RAW id; `anonymiseRecord` hashes the three that
 * are allowed to survive and drops everything else.
 */
export interface RawSubmissionBundle {
  /** Raw `marking_submissions.id` (UUID). Hashed → `anon_submission_id`. */
  submissionId: string
  /** Raw `marking_submissions.school_id` (nullable). Hashed → `anon_school_id`. */
  schoolId: string | null
  /** Raw `marking_submissions.class_id` (nullable). Hashed → `anon_class_id`. */
  classId: string | null
  /** `marking_submissions.source` - 'b2c_self' | 'b2b_class'. */
  source: string | null

  // ── Structured, non-identifying question context ──────────────────────────
  examBoard: string | null
  qualification: string | null
  paper: string | null
  questionText: string | null
  questionType: string | null
  /** Resolved rubric/scheme version label (NOT a person). */
  rubricVersion: string | null

  /** The learner's answer - the markable signal, retained verbatim. */
  studentAnswer: string

  // ── AI prediction (non-identifying) ───────────────────────────────────────
  aiPredictedMark: number | null
  aiFeedback: string | null
  aiGradeBand: string | null
  aiAoBreakdown: unknown
  aiConfidence: number | null

  // ── Teacher-moderated gold label ──────────────────────────────────────────
  teacherFinalMark: number | null
  teacherFinalFeedback: string | null
  teacherCorrectionReason: string | null
  /** AO-level corrections from the latest moderation, if any. */
  aoCorrections: unknown

  /** ISO timestamp the teacher approved the submission. */
  approvedAt: string | null

  // ── Provenance (model/prompt version strings - not people) ────────────────
  modelVersion: string | null
  promptVersion: string | null
}

/**
 * The exact anonymised `public.training_data` insert shape. snake_case keys
 * mirror the migration columns 1:1 (omitting db-managed `id` / `created_at`).
 * `source_submission_id` keeps the real FK (the table is service-role-only and
 * never client-readable, and it is needed for dedupe/lineage + a future
 * "forget this submission" deletion) while every *exported* artefact strips it.
 */
export interface AnonymisedTrainingRow {
  anon_submission_id: string
  source_submission_id: string
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
}

/** Coerce a possibly-non-finite value to an integer or null (no NaN leaks). */
function toIntOrNull(v: number | null | undefined): number | null {
  if (v === null || v === undefined) return null
  if (typeof v !== 'number' || !Number.isFinite(v)) return null
  return Math.round(v)
}

/** Coerce a possibly-non-finite value to a finite number or null. */
function toNumOrNull(v: number | null | undefined): number | null {
  if (v === null || v === undefined) return null
  if (typeof v !== 'number' || !Number.isFinite(v)) return null
  return v
}

/** Trim a string field to null when empty/blank; never returns "". */
function blankToNull(v: string | null | undefined): string | null {
  if (typeof v !== 'string') return null
  const t = v.trim()
  return t.length === 0 ? null : t
}

/**
 * Build the anonymised training row from a raw bundle.
 *
 * Pure & total: no I/O, no throw, deterministic. `hashId` is injected
 * (normally `hashAuditInput` from src/lib/ai-audit-log.ts) so this stays a
 * unit-testable function with no Node/crypto dependency.
 *
 * Anonymisation guarantees:
 *  - submission / school / class ids are replaced by `hashId(...)` digests;
 *  - no name / email / DOB / school-name / file-metadata field is ever read
 *    or copied (they are simply absent from `RawSubmissionBundle`);
 *  - `mark_delta` is derived (teacher − ai) so downstream never needs the
 *    raw rows.
 */
export function anonymiseRecord(
  raw: RawSubmissionBundle,
  hashId: (value: string) => string,
): AnonymisedTrainingRow {
  const aiMark = toIntOrNull(raw.aiPredictedMark)
  const teacherMark = toIntOrNull(raw.teacherFinalMark)
  const markDelta = aiMark !== null && teacherMark !== null ? teacherMark - aiMark : null

  // Prefer explicit AO corrections from the moderation; fall back to the AI
  // breakdown so the row still carries an AO signal. Neither contains PII
  // (AO codes + numeric marks only).
  const aoScores =
    raw.aoCorrections !== null && raw.aoCorrections !== undefined
      ? raw.aoCorrections
      : (raw.aiAoBreakdown ?? null)

  return {
    // Hashed correlation key - non-reversible, unique per submission.
    anon_submission_id: hashId(raw.submissionId),
    // Real FK retained ONLY in the service-role-only table (never exported).
    source_submission_id: raw.submissionId,

    exam_board: blankToNull(raw.examBoard),
    qualification: blankToNull(raw.qualification),
    paper: blankToNull(raw.paper),
    question: blankToNull(raw.questionText),
    question_type: blankToNull(raw.questionType),
    rubric_version: blankToNull(raw.rubricVersion),

    student_answer: raw.studentAnswer,

    ai_predicted_mark: aiMark,
    teacher_final_mark: teacherMark,
    mark_delta: markDelta,

    ai_feedback: blankToNull(raw.aiFeedback),
    teacher_final_feedback: blankToNull(raw.teacherFinalFeedback),
    teacher_correction_reason: blankToNull(raw.teacherCorrectionReason),

    grade_band: blankToNull(raw.aiGradeBand),
    ao_scores: aoScores,
    confidence_score: toNumOrNull(raw.aiConfidence),

    approved_at: blankToNull(raw.approvedAt),

    model_version: blankToNull(raw.modelVersion),
    prompt_version: blankToNull(raw.promptVersion),

    // Hashed school / class - null stays null (b2c self-study has no school).
    anon_school_id: raw.schoolId ? hashId(raw.schoolId) : null,
    anon_class_id: raw.classId ? hashId(raw.classId) : null,

    source: blankToNull(raw.source),
  }
}

/**
 * Exported helper: keys we will assert are absent / non-identifying at export
 * time. Used by the export route's PII guard. Kept here so the anonymiser and
 * the export assertion can never drift apart.
 */
export const FORBIDDEN_EXPORT_KEYS: readonly string[] = [
  'source_submission_id',
  'student_name',
  'student_email',
  'teacher_name',
  'teacher_email',
  'parent_email',
  'date_of_birth',
  'dob',
  'school_name',
  'school_id',
  'class_id',
  'submission_id',
  'file_name',
  'filename',
  'file_path',
] as const
