// ─── What a pupil's results page shows ──────────────────────────────────────
//
// The decisions behind /marking/results/[id], kept out of the page so they can
// be tested without a browser (a page module may only export what Next.js
// allows, and this project caps how many tests may request jsdom).
//
// THREE DEFECTS THIS FIXES (12 October 2026)
//
// 1. A class pupil's teacher decision never reached them. The page read the
//    teacher's mark and comments as camelCase fields (`finalTeacherMark`,
//    `teacherComment`), but GET /api/marking/[submissionId] returns the
//    table's own snake_case columns, so both were always undefined and an
//    approved or returned essay showed only the AI's draft. The columns are
//    read here by their real names, and the teacher's decision is shown as
//    its own card rather than folded into the AI summary, so the pupil can
//    tell a person's mark from the AI's.
// 2. The page accepted only 'approved' for class work. Calum decided on 12
//    October 2026 that a school pupil sees their AI feedback straight away,
//    labelled as AI, and the teacher's decision afterwards, so visibility is
//    now the one rule in studentCanSeeGrade (src/lib/marking/persistence.ts),
//    the same function the API applies. A page with its own copy of the rule
//    is how 'returned' and 'teacher_reviewed' were left out before.
// 3. "Submit a new version" went to a bare /marking/submit. It now carries
//    the board, paper and question the essay was marked against.
//
// Which teacher field wins: `teacher_grade` and `teacher_comment` are written
// by BOTH writers (the review route and the school override route), and the
// override writes nothing else, so they always hold the latest decision.
// `final_teacher_mark` and `final_teacher_feedback` can be stale after an
// override, so they are only a fallback.
// ────────────────────────────────────────────────────────────────────────────

import type { AOScore } from '@/components/marking/AOBreakdown'
import { parseGradeToNumber, studentCanSeeGrade } from './persistence'
import { markingLink } from './submit-prefill'

export interface FeedbackItem {
  point: string
  suggestion?: string
  quote?: string
}

/**
 * A teacher's (or, for self-study, a platform reviewer's) decision on the AI
 * mark. Shown above the AI's own result, never merged into it.
 */
export interface ReviewDecision {
  status: 'approved' | 'teacher_reviewed' | 'returned'
  /** Their mark, when they gave one. */
  mark: string | null
  /** Their comments, when they wrote any. */
  comment: string | null
  /** True for class work, where the reviewer is the pupil's teacher. */
  byTeacher: boolean
}

/** The render shape the results page uses for server rows and local entries alike. */
export interface StoredResult {
  id: string
  title: string
  board: string
  paper: string
  question?: string
  essay: string
  wordCount: number
  /** The AI's predicted grade. A teacher's mark is in `review`, never here. */
  grade: number
  predictedGrade?: string
  gradeBand?: string
  totalMarks?: number
  maxMarks?: number
  scorePercent: number
  /** legacy localStorage key written before the confidence→scorePercent rename */
  confidence?: number
  aos: AOScore[]
  submittedAt: string
  // AI feedback fields
  strengths?: FeedbackItem[]
  improvements?: FeedbackItem[]
  nextStepsToNextGrade?: string[]
  summary?: string
  /** What the essay was marked against, so "Submit a new version" can pre-fill it. */
  markSchemeId?: string
  questionId?: string
  studiedText?: string
  /** True for class work. */
  schoolWork?: boolean
  /** A person's decision on the AI mark, when one has been made. */
  review?: ReviewDecision | null
}

/**
 * Shape returned by GET /api/marking/[submissionId]: the `marking_submissions`
 * row, snake_case. The camelCase names are kept as fallbacks because this
 * page was written against them before the route existed; nothing sends them
 * today. Everything is optional so a partly populated row renders the right
 * state rather than throwing.
 */
export interface ServerSubmission {
  id: string
  source?: string | null
  status?: string | null
  exam_board?: string | null
  paper?: string | null
  question_text?: string | null
  essay_title?: string | null
  essay_text?: string | null
  ai_result?: unknown
  ai_score?: number | null
  ai_max_marks?: number | null
  ai_grade?: string | null
  ai_grade_band?: string | null
  mark_scheme_id?: string | null
  rubric_ref?: string | null
  studied_text?: string | null
  submitted_at?: string | null
  teacher_grade?: string | null
  teacher_comment?: string | null
  final_teacher_mark?: string | null
  final_teacher_feedback?: string | null
  // Legacy camelCase fallbacks (see above).
  examBoard?: string | null
  questionText?: string | null
  essayTitle?: string | null
  studentAnswer?: string | null
  aiResult?: unknown
  aiScore?: number | null
  aiMaxMarks?: number | null
  aiGradeBand?: string | null
  finalTeacherMark?: string | null
  finalTeacherFeedback?: string | null
  teacherGrade?: string | null
  teacherComment?: string | null
}

/** The first argument that is a non-blank string, trimmed; null if none is. */
function firstText(...values: unknown[]): string | null {
  for (const v of values) {
    if (typeof v === 'string' && v.trim()) return v.trim()
  }
  return null
}

/** Whether the viewing pupil may see the result: the one rule, shared with the API. */
export function canStudentSeeFeedback(sub: Pick<ServerSubmission, 'status' | 'source'>): boolean {
  return studentCanSeeGrade(sub.status ?? '', sub.source ?? '')
}

/** Which honest message a pupil gets when the result is not theirs to see yet. */
export type HiddenState = 'unmarked' | 'reviewing' | 'rejected' | 'unavailable'

/**
 * The message for a result the pupil may not see. Until 12 October 2026 every
 * such row, including a self-study essay that had simply not been marked, told
 * the pupil it was "waiting for your teacher to review it", and promised that
 * they would see no automated mark first. Neither is true any more.
 */
export function hiddenStateFor(sub: Pick<ServerSubmission, 'status' | 'source'>): HiddenState {
  switch (sub.status) {
    case 'submitted':
    case 'pending':
      return 'unmarked'
    case 'teacher_review_required':
      // The review route's "correct" decision: a teacher's correction in
      // progress. Only class work has a teacher.
      return sub.source === 'b2b_class' ? 'reviewing' : 'unavailable'
    case 'rejected':
      return 'rejected'
    default:
      return 'unavailable'
  }
}

const REVIEWED_STATUSES = new Set(['approved', 'teacher_reviewed', 'returned'])

/** A person's decision on the AI mark, or null when none has been made. */
export function reviewDecisionOf(sub: ServerSubmission): ReviewDecision | null {
  const status = sub.status ?? ''
  if (!REVIEWED_STATUSES.has(status)) return null
  return {
    status: status as ReviewDecision['status'],
    mark: firstText(
      sub.teacher_grade,
      sub.teacherGrade,
      sub.final_teacher_mark,
      sub.finalTeacherMark,
    ),
    comment: firstText(
      sub.teacher_comment,
      sub.teacherComment,
      sub.final_teacher_feedback,
      sub.finalTeacherFeedback,
    ),
    byTeacher: sub.source === 'b2b_class',
  }
}

/** Map a server submission's row into the render shape. */
export function serverToStoredResult(sub: ServerSubmission): StoredResult {
  const board = firstText(sub.exam_board, sub.examBoard) ?? ''
  const paper = firstText(sub.paper) ?? ''
  const question = firstText(sub.question_text, sub.questionText) ?? undefined
  const essay = firstText(sub.essay_text, sub.studentAnswer) ?? ''
  const title = firstText(sub.essay_title, sub.essayTitle) ?? question ?? 'Marked submission'

  // ai_result is the full production MarkingResult JSON when present.
  const ai = (sub.ai_result ?? sub.aiResult ?? null) as {
    predictedGrade?: string
    gradeBand?: string
    totalMarks?: number
    maxMarks?: number
    summary?: string
    strengths?: FeedbackItem[]
    improvements?: FeedbackItem[]
    nextStepsToNextGrade?: string[]
    aoScores?: Array<{
      id: string
      label: string
      marks: number
      maxMarks: number
      band?: string
      justification?: string
      evidence?: string[]
    }>
  } | null

  const aiScore = typeof sub.ai_score === 'number' ? sub.ai_score : sub.aiScore
  const aiMaxMarks = typeof sub.ai_max_marks === 'number' ? sub.ai_max_marks : sub.aiMaxMarks
  const totalMarks = ai?.totalMarks ?? (typeof aiScore === 'number' ? aiScore : undefined)
  const maxMarks = ai?.maxMarks ?? (typeof aiMaxMarks === 'number' ? aiMaxMarks : undefined)
  const scorePercent =
    totalMarks != null && maxMarks != null && maxMarks > 0
      ? Math.round((totalMarks / maxMarks) * 100)
      : 0

  return {
    id: sub.id,
    title,
    board,
    paper,
    question,
    essay,
    wordCount: essay ? essay.split(/\s+/).length : 0,
    // The AI's grade only. The old mapping fell back to the raw mark total,
    // so an essay with 24 marks and no parsable grade showed "Grade 24".
    grade: parseGradeToNumber(ai?.predictedGrade) ?? parseGradeToNumber(sub.ai_grade) ?? 0,
    predictedGrade: ai?.predictedGrade,
    gradeBand: ai?.gradeBand ?? firstText(sub.ai_grade_band, sub.aiGradeBand) ?? undefined,
    totalMarks,
    maxMarks,
    scorePercent,
    aos: (ai?.aoScores ?? []).map((ao) => ({
      code: ao.id,
      label: ao.label,
      score: ao.marks,
      max: ao.maxMarks,
      band: ao.band,
      justification: ao.justification,
      evidence: ao.evidence,
    })) as AOScore[],
    strengths: ai?.strengths,
    improvements: ai?.improvements,
    nextStepsToNextGrade: ai?.nextStepsToNextGrade,
    // The AI's own summary. A teacher's comments are in `review`, labelled.
    summary: ai?.summary,
    submittedAt: firstText(sub.submitted_at) ?? new Date().toISOString(),
    markSchemeId: firstText(sub.mark_scheme_id) ?? undefined,
    questionId: firstText(sub.rubric_ref) ?? undefined,
    studiedText: firstText(sub.studied_text) ?? undefined,
    schoolWork: sub.source === 'b2b_class',
    review: reviewDecisionOf(sub),
  }
}

/**
 * Where "Submit a new version" goes, and whether the question itself is
 * carried (which decides the copy beside the button). Built by markingLink so
 * a parameter rename cannot leave the link silently inert.
 */
export function redraftLink(
  result: Pick<StoredResult, 'markSchemeId' | 'questionId' | 'studiedText'>,
): { href: string; prefilled: boolean } {
  if (!result.markSchemeId) return { href: '/marking/submit', prefilled: false }
  return {
    href: markingLink({
      schemeId: result.markSchemeId,
      questionId: result.questionId,
      text: result.studiedText,
    }),
    prefilled: Boolean(result.questionId),
  }
}
