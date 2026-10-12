// ─── The body the queue sends to POST /api/marking/[submissionId]/review ────
//
// WHY THIS EXISTS (12 October 2026)
// The queue had no way to correct a single objective. It sent a grade and
// free text, so teacher_moderations.ao_corrections stayed empty for every
// review and the promise that "teachers approve or adjust" the mark for each
// objective had nothing behind it.
//
// The review route accepts aoCorrections as an array of
//   { ao: string, score?: number | null, maxScore?: number | null, comment?: string | null }
// and stores it verbatim. This module builds exactly that.
//
// RULES
//   * Every decision sends an ARRAY, even an empty one. The objective views
//     read the newest array as the teacher's current statement, so an empty
//     array means "no adjustments" and clears an earlier one, whereas a
//     missing value would leave it standing (src/app/api/school/_lib/objectives.ts).
//   * An objective is listed when the teacher's mark differs from the AI's,
//     or when they wrote a comment on it. Its maximum is the AI breakdown's,
//     which comes from the mark scheme; a teacher changes a mark, not a tariff.
//   * A mark that is blank, not a number, or outside 0..maximum stops the
//     whole decision. Sending the rest would record a review the teacher did
//     not finish.
// ────────────────────────────────────────────────────────────────────────────

export type ReviewDecision = 'approve' | 'correct' | 'send_back' | 'reject'

/** The objective as the detail route returns it (EffectiveAoMark). */
export interface ObjectiveForReview {
  ao: string
  marks: number
  maxMarks: number
  aiMarks: number
  teacherComment: string | null
}

/** What the teacher has typed for one objective, as text. */
export interface ObjectiveEdit {
  mark: string
  comment: string
}

export interface AoCorrectionInput {
  ao: string
  score: number
  maxScore: number
  comment: string | null
}

export type CorrectionsResult =
  | { ok: true; corrections: AoCorrectionInput[] }
  | { ok: false; invalid: string[] }

/** The text an objective's inputs start with: the mark that currently counts. */
export function initialEdit(o: ObjectiveForReview): ObjectiveEdit {
  return { mark: String(o.marks), comment: o.teacherComment ?? '' }
}

export function buildAoCorrections(
  objectives: readonly ObjectiveForReview[],
  edits: Readonly<Record<string, ObjectiveEdit | undefined>>,
): CorrectionsResult {
  const corrections: AoCorrectionInput[] = []
  const invalid: string[] = []
  for (const o of objectives) {
    const edit = edits[o.ao] ?? initialEdit(o)
    const text = edit.mark.trim()
    const mark = text === '' ? Number.NaN : Number(text)
    if (!Number.isFinite(mark) || mark < 0 || mark > o.maxMarks) {
      invalid.push(o.ao)
      continue
    }
    const comment = edit.comment.trim()
    if (mark !== o.aiMarks || comment) {
      corrections.push({ ao: o.ao, score: mark, maxScore: o.maxMarks, comment: comment || null })
    }
  }
  return invalid.length > 0 ? { ok: false, invalid } : { ok: true, corrections }
}

export interface ReviewForm {
  grade: string
  feedback: string
  reason: string
  notes: string
}

export interface ReviewBody {
  decision: ReviewDecision
  teacherGrade: string | null
  teacherFeedback: string | null
  aoCorrections: AoCorrectionInput[]
  adjustmentReason: string | null
  moderationNotes: string | null
  /**
   * Deliberately null. Whether a pupil's essay may train the AI is a consent
   * question for the school as data controller, not a per-essay switch for a
   * teacher in a marking queue, so the queue no longer offers one.
   */
  trainingEligible: null
}

export function buildReviewBody(
  decision: ReviewDecision,
  form: ReviewForm,
  corrections: AoCorrectionInput[],
): ReviewBody {
  const orNull = (s: string) => (s.trim() ? s.trim() : null)
  return {
    decision,
    teacherGrade: orNull(form.grade),
    teacherFeedback: orNull(form.feedback),
    aoCorrections: corrections,
    adjustmentReason: orNull(form.reason),
    moderationNotes: orNull(form.notes),
    trainingEligible: null,
  }
}

/** Totals for the "AI x of y; with your marks z of y" line. */
export function totals(
  objectives: readonly ObjectiveForReview[],
  edits: Readonly<Record<string, ObjectiveEdit | undefined>>,
): { ai: number; yours: number | null; max: number } {
  let ai = 0
  let yours: number | null = 0
  let max = 0
  for (const o of objectives) {
    ai += o.aiMarks
    max += o.maxMarks
    const edit = edits[o.ao] ?? initialEdit(o)
    const n = edit.mark.trim() === '' ? Number.NaN : Number(edit.mark)
    if (yours !== null && Number.isFinite(n) && n >= 0 && n <= o.maxMarks) yours += n
    else yours = null
  }
  return { ai, yours, max }
}
