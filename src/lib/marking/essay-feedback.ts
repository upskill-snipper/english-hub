// ─── What /api/essay-feedback marks against ─────────────────────────────────
//
// WHY THIS EXISTS (9 October 2026)
//
// Essay feedback read src/data/mark-schemes.ts, a second mark-scheme corpus
// that nothing connected to the one the GCSE marker and the examiner tool use
// (./mark-schemes, with its verification registry in
// ./examiner/verification.ts). That file is now deleted. What it did wrong:
//
//   • Its Literature entry for every board carried AO1 to AO4, with AO4 called
//     "Comparison". AO4 in GCSE English Literature is spelling, punctuation and
//     grammar, and Edexcel marks it on Paper 1 Section B only. Its Edexcel entry
//     gave each of the four objectives 20 marks.
//   • It had one "Literature" paper beside "Paper 1" and "Paper 2", which were
//     the Language papers. The inline feedback on the mock-exam and practice
//     pages sends "Paper 1" or "Paper 2" for every answer, so a Literature
//     answer was marked against the board's LANGUAGE paper: the Edexcel
//     Literature Paper 2 mocks against Non-fiction and Transactional Writing.
//
// THE RULE NOW. A request names a scheme and a question in ./mark-schemes, and
// is marked against that question's own objectives and tariffs, with the
// scheme's verification status stated to the model. Or it names none, and gets
// general feedback with no marks per objective. Nothing in between is guessed:
// a mark against the wrong objectives is a number a student acts on.
// ────────────────────────────────────────────────────────────────────────────

import {
  MARK_SCHEMES,
  type AssessmentObjective,
  type MarkScheme,
  type QuestionScheme,
} from './mark-schemes'
import { isSpecVerified, verificationSentence } from './examiner/verification'
import { resolveMarkingBoard, schemesForBoard, type MarkingBoard } from './mock-handoff'

export type FeedbackSubject = 'English Literature' | 'English Language'

/** A scheme and one of its own questions. */
export interface SchemeTarget {
  scheme: MarkScheme
  question: QuestionScheme
}

/** One objective's mark, as the essay-feedback response carries it. */
export interface FeedbackAoScore {
  id: string
  label: string
  score: number
  maxScore: number
  comment: string
}

/**
 * The scheme and question a request names, or null if either is unknown or the
 * question is not that scheme's own. Never a nearest match.
 */
export function resolveSchemeTarget(schemeId: unknown, questionId: unknown): SchemeTarget | null {
  if (typeof schemeId !== 'string' || typeof questionId !== 'string') return null
  if (!Object.prototype.hasOwnProperty.call(MARK_SCHEMES, schemeId)) return null
  const scheme = MARK_SCHEMES[schemeId]
  const question = scheme.questions.find((q) => q.id === questionId)
  return question ? { scheme, question } : null
}

/**
 * Questions that ask for continuous writing, which is what essay feedback is
 * for. Retrieval, true-or-false, proofreading and short-answer questions are
 * left out, as the old page left out its "Information Retrieval" types.
 */
const SHORT_ANSWER =
  /retriev|true\/false|proofread|editing|in own words|select and explain|short-answer|comprehension/i

export function isEssayQuestion(question: QuestionScheme): boolean {
  return question.totalMarks >= 6 && !SHORT_ANSWER.test(question.questionType)
}

/** Board options for the feedback page, in the marking page's vocabulary. */
export const FEEDBACK_BOARDS: readonly { value: MarkingBoard; label: string }[] = [
  { value: 'AQA', label: 'AQA' },
  { value: 'Edexcel', label: 'Edexcel' },
  { value: 'OCR', label: 'OCR' },
  { value: 'Eduqas', label: 'Eduqas (WJEC)' },
  { value: 'Cambridge-0500', label: 'Cambridge IGCSE 0500' },
  { value: 'Cambridge-0990', label: 'Cambridge IGCSE 0990' },
]

/** A board's schemes that have at least one essay question, Literature first. */
export function feedbackSchemesFor(board: string | null): MarkScheme[] {
  const marking = board ? resolveMarkingBoard(board) : null
  if (!marking) return []
  return schemesForBoard(marking)
    .filter((s) => s.questions.some(isEssayQuestion))
    .sort((a, b) =>
      a.subject !== b.subject
        ? b.subject.localeCompare(a.subject)
        : a.paper.localeCompare(b.paper, undefined, { numeric: true }),
    )
}

/** How a scheme is named in the paper picker, unverified ones said so. */
export function schemeLabel(scheme: MarkScheme): string {
  const name = `${scheme.board} ${scheme.subject} ${scheme.paper}: ${scheme.title}`
  return isSpecVerified(scheme.id) ? name : `${name} (unverified - marks are indicative only)`
}

/** How a question is named in the question picker. */
export function questionLabel(question: QuestionScheme): string {
  return `${question.id} - ${question.questionType} (${question.totalMarks} marks)`
}

// ─── The prompt ─────────────────────────────────────────────────────────────

function formatObjective(ao: AssessmentObjective): string {
  return [
    `${ao.label} - maximum ${ao.maxMarks} marks. ${ao.description}`,
    ...ao.bands.map(
      (b) => `  ${b.band} (${b.minMarks}-${b.maxMarks} marks): ${b.label}. ${b.descriptor}`,
    ),
  ].join('\n')
}

/**
 * The mark-scheme section of the essay-feedback system prompt for one
 * question: its objectives, their maximums and their bands, and whether the
 * scheme has been checked against the board's published material.
 */
export function formatSchemeForFeedback({ scheme, question }: SchemeTarget): string {
  const verified = isSpecVerified(scheme.id)
  const lines = [
    `${scheme.board} ${scheme.subject}, ${scheme.paper}: ${scheme.title}`,
    `Question: ${question.id} - ${question.questionType} (${question.totalMarks} marks)`,
    `Task: ${question.taskDescription}`,
    '',
    `VERIFICATION: ${verificationSentence(scheme.id)}`,
    ...(verified
      ? []
      : [
          'Because this scheme is unverified, say so in one short sentence in gradeJustification, and present the grade band as an indication only.',
        ]),
    '',
    `Assessment objectives for THIS question. Mark these objectives and no others: an objective that is not listed is not assessed on this question. The marks for the question total ${question.totalMarks}.`,
    '',
    ...question.assessmentObjectives.map(formatObjective),
  ]
  if (question.examinerNotes) lines.push('', `Examiner notes: ${question.examinerNotes}`)
  return lines.join('\n')
}

/**
 * The assessment objectives every board shares, from the DfE subject content.
 * Used, in words only, when no scheme on the site matches the question.
 */
const GENERAL_OBJECTIVES: Record<FeedbackSubject, readonly string[]> = {
  'English Literature': [
    'AO1: read, understand and respond to texts, with a critical style and an informed personal response, using textual references, including quotations, to support and illustrate interpretations.',
    'AO2: analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
    'AO3: show understanding of the relationships between texts and the contexts in which they were written.',
    'AO4: use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
  ],
  'English Language': [
    'AO1: identify and interpret explicit and implicit information and ideas; select and synthesise evidence from different texts.',
    'AO2: explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology.',
    'AO3: compare writers’ ideas and perspectives, and how these are conveyed, across two or more texts.',
    'AO4: evaluate texts critically and support this with appropriate textual references.',
    'AO5: communicate clearly, effectively and imaginatively, adapting tone, style and register to form, purpose and audience, and organise information and ideas.',
    'AO6: use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling, punctuation and grammar.',
  ],
}

/**
 * The mark-scheme section of the prompt when no scheme on the site matches the
 * question. It names no tariff and asks for none.
 */
export function formatGeneralGuidance(subject: FeedbackSubject | null): string {
  return [
    'NO MARK SCHEME: no mark scheme on this site matches this question yet, so there are no marks per objective to award.',
    'Return "aoScores" as an empty array. Do not invent a tariff, a mark or a maximum for any objective.',
    'Present the grade band as an indication only, and say so in one short sentence in gradeJustification.',
    '',
    subject
      ? `Give your feedback against the general ${subject} assessment objectives, in words:`
      : 'Give your feedback on what GCSE English examiners reward: a clear, relevant response to the question; analysis of methods, supported by precise references; and accurate, controlled writing.',
    ...(subject ? GENERAL_OBJECTIVES[subject] : []),
  ].join('\n')
}

// ─── The marks that come back ───────────────────────────────────────────────

/**
 * The model's objective marks, held to the question: one entry per objective
 * the question carries, in its order, each with the scheme's own maximum and
 * label, the mark rounded and clamped to that maximum. Objectives the question
 * does not carry are dropped.
 *
 * Returns null when an objective is missing or its mark is not a number, so the
 * route can refuse an incomplete response rather than show a zero the model
 * never gave. A maximum is never taken from the model: a mark is only as good
 * as the tariff it is out of.
 */
export function normaliseAoScores(
  raw: unknown,
  question: QuestionScheme,
): FeedbackAoScore[] | null {
  if (!Array.isArray(raw)) return null
  const out: FeedbackAoScore[] = []
  for (const ao of question.assessmentObjectives) {
    const hit = raw.find(
      (r): r is Record<string, unknown> =>
        !!r &&
        typeof r === 'object' &&
        String((r as Record<string, unknown>).id ?? '')
          .trim()
          .toUpperCase() === ao.id.toUpperCase(),
    )
    if (!hit) return null
    const mark = Number(hit.score)
    if (!Number.isFinite(mark)) return null
    out.push({
      id: ao.id,
      label: ao.label,
      score: Math.min(ao.maxMarks, Math.max(0, Math.round(mark))),
      maxScore: ao.maxMarks,
      comment: typeof hit.comment === 'string' ? hit.comment : '',
    })
  }
  return out
}

// ─── What is stored ─────────────────────────────────────────────────────────

/**
 * The middle of each grade band on the grade predictor's indicative AQA proxy
 * curve (src/lib/marking/grade-predictor.ts: grade 4 from 37%, 6 from 55%, 8
 * from 73%). General feedback has no marks, so this is its overall score.
 */
const BAND_MIDPOINT: Readonly<Record<string, number>> = {
  'Grade 4-5': 46,
  'Grade 6-7': 64,
  'Grade 8-9': 86,
}

/** AIFeedback's five fixed score columns, each 0-100. */
export interface FeedbackColumns {
  overallScore: number
  argumentScore: number
  structureScore: number
  vocabularyScore: number
  grammarScore: number
}

/**
 * The values for AIFeedback's fixed columns, which predate assessment
 * objectives and which the weekly parent report reads as technical accuracy
 * (grammar), structure, argument and vocabulary.
 *
 * Until 9 October 2026 the route stored the first four objectives by position,
 * so a Language question's AO2 filled "vocabulary" and its AO4 evaluation
 * filled "grammar", and every question carried four. A question now carries
 * only its own objectives, often one or two, and a position would put zeros in
 * the rest, which a report would read as weaknesses. So each column takes the
 * objective that means what it says, and one the question does not assess
 * takes the overall percentage, which leaves it neutral:
 *
 *   grammar and vocabulary   Literature AO4, Language AO6 (vocabulary,
 *                            sentence structures, spelling, punctuation)
 *   structure                AO2 (language, form and structure)
 *   argument                 AO1; for Language, else AO4, AO5 or AO3
 *
 * With no marks at all (general feedback), the overall is the grade band's
 * midpoint and every column equals it.
 */
export function feedbackColumns(
  aoScores: readonly FeedbackAoScore[],
  gradeBand: string,
  subject: FeedbackSubject | null,
): FeedbackColumns {
  const total = aoScores.reduce((s, a) => s + a.score, 0)
  const max = aoScores.reduce((s, a) => s + a.maxScore, 0)
  const overall = max > 0 ? Math.round((total / max) * 100) : (BAND_MIDPOINT[gradeBand] ?? 0)
  const pct = (id: string): number | null => {
    const ao = aoScores.find((a) => a.id === id)
    return ao && ao.maxScore > 0 ? Math.round((ao.score / ao.maxScore) * 100) : null
  }
  const first = (...ids: string[]): number =>
    ids.map(pct).find((v): v is number => v !== null) ?? overall
  const literature = subject === 'English Literature'
  const accuracy = literature ? first('AO4') : first('AO6')
  return {
    overallScore: overall,
    argumentScore: literature ? first('AO1') : first('AO1', 'AO4', 'AO5', 'AO3'),
    structureScore: first('AO2'),
    vocabularyScore: accuracy,
    grammarScore: accuracy,
  }
}

/** The subject a scheme or a free-text hint names, or null. */
export function feedbackSubject(hint: unknown): FeedbackSubject | null {
  if (typeof hint !== 'string') return null
  if (/literature/i.test(hint)) return 'English Literature'
  if (/language/i.test(hint)) return 'English Language'
  return null
}
