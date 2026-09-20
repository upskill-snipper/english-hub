// ─── Objective (auto-marked) scoring - shared across Reading + Mock ─────────
// One source of truth for marking the objective question types (mcq / tfng /
// gap / matching) so the standalone Reading page and the Mock score identically.
//
// The model: most questions are worth ONE mark, but a `matching` question is
// worth ONE MARK PER ITEM (exactly like the real exam, where e.g. "Questions
// 14-18, match each paragraph to a heading" is five marks). So callers must use
// MARKS - not array length - for totals, and the helpers here do that.
//
// Matching answers are stored in the same flat AnswerMap under a composite key
// (`<questionId>::<itemId>`) via `matchKey`, so no answer-map shape change is
// needed anywhere.
// ────────────────────────────────────────────────────────────────────────────

import type { ObjectiveQuestion } from './types'
import { shuffledOptionsFor } from '@/lib/quiz/shuffle'

export type AnswerMap = Record<string, string>

/** Non-matching question types, for the single-answer correctness check. */
type SingleQuestion = Exclude<ObjectiveQuestion, { type: 'matching' }>

/** Composite AnswerMap key for one item of a matching question. */
export function matchKey(questionId: string, itemId: string): string {
  return `${questionId}::${itemId}`
}

/**
 * The option order a learner is shown, and the correct option's TEXT.
 *
 * WHY THIS EXISTS (20 September 2026). Both surfaces that mark through this
 * module rendered `question.options` in authored order and recorded the clicked
 * POSITION, and this module marked it with `idx === q.correctIndex`. The
 * authored order put the answer at B in 288 of 429 Reading MCQs (67.1%) and 260
 * of 302 Listening MCQs (86.1%), so clicking B on every multiple-choice item,
 * without reading or listening to anything, scored that share of the marks and
 * a predicted band to match.
 *
 * The salt is the question id alone, with no per-attempt component. That is a
 * deliberate trade: these are exam simulations rendered on the server, and a
 * salt drawn at render would give the server one order and the browser another.
 * A fixed but scattered order removes the bias, which is the defect; a retake
 * showing the same order is a smaller cost than a hydration mismatch on a timed
 * mock.
 */
export function shownMcqOptions(q: Extract<ObjectiveQuestion, { type: 'mcq' }>): {
  options: string[]
  correctValue: string
  explanation: string
} {
  return shuffledOptionsFor(
    q.options,
    q.correctIndex,
    q.id,
    '',
    q.prompt ?? '',
    q.explanation ?? '',
  )
}

/**
 * Correctness of a single (non-matching) recorded answer. Empty = wrong.
 *
 * An mcq answer is the chosen option's TEXT, not its position. It was the
 * position until 20 September 2026, which is what made the bias above scoreable
 * - see `shownMcqOptions`. Nothing persists an AnswerMap, so there is no stored
 * answer in the old shape to migrate.
 */
export function isSingleAnswerCorrect(q: SingleQuestion, raw: string | undefined): boolean {
  if (raw === undefined) return false
  const given = raw.trim()
  if (given === '') return false
  if (q.type === 'mcq') {
    return given === (q.options[q.correctIndex] ?? '')
  }
  if (q.type === 'tfng') {
    return given === q.answer
  }
  // gap: case-insensitive, trimmed match against any acceptable answer
  const normalised = given.toLowerCase()
  return q.acceptableAnswers.some((a) => a.trim().toLowerCase() === normalised)
}

/** How many marks a question is worth (matching = one per item). */
export function questionMarks(q: ObjectiveQuestion): number {
  return q.type === 'matching' ? q.items.length : 1
}

/** Correct marks within a single question. */
export function correctMarks(q: ObjectiveQuestion, answers: AnswerMap): number {
  if (q.type === 'matching') {
    return q.items.reduce((n, it) => {
      const v = (answers[matchKey(q.id, it.id)] ?? '').trim()
      return n + (v !== '' && v === it.answer ? 1 : 0)
    }, 0)
  }
  return isSingleAnswerCorrect(q, answers[q.id]) ? 1 : 0
}

/** Answered (non-empty) marks within a single question. */
export function answeredMarks(q: ObjectiveQuestion, answers: AnswerMap): number {
  if (q.type === 'matching') {
    return q.items.reduce((n, it) => {
      const v = (answers[matchKey(q.id, it.id)] ?? '').trim()
      return n + (v !== '' ? 1 : 0)
    }, 0)
  }
  const v = answers[q.id]
  return v !== undefined && v.trim() !== '' ? 1 : 0
}

/** A question is "fully correct" when every mark is correct (review styling). */
export function isQuestionFullyCorrect(q: ObjectiveQuestion, answers: AnswerMap): boolean {
  return correctMarks(q, answers) === questionMarks(q)
}

// ─── List-level totals (use these, never `.length`, for objective scoring) ──

export function totalMarks(questions: ObjectiveQuestion[]): number {
  return questions.reduce((n, q) => n + questionMarks(q), 0)
}

export function totalCorrect(questions: ObjectiveQuestion[], answers: AnswerMap): number {
  return questions.reduce((n, q) => n + correctMarks(q, answers), 0)
}

export function totalAnswered(questions: ObjectiveQuestion[], answers: AnswerMap): number {
  return questions.reduce((n, q) => n + answeredMarks(q, answers), 0)
}

/**
 * The 1-based START number for each question, accumulating MARKS so a matching
 * question reserves a numbered range (e.g. Q14 with 5 items occupies 14-18 and
 * the next question starts at 19).
 */
export function questionStartNumbers(questions: ObjectiveQuestion[]): Record<string, number> {
  const map: Record<string, number> = {}
  let acc = 0
  for (const q of questions) {
    map[q.id] = acc + 1
    acc += questionMarks(q)
  }
  return map
}

// ─── Review labels ──────────────────────────────────────────────────────────

const TFNG_LABEL: Record<'true' | 'false' | 'not-given', string> = {
  true: 'True',
  false: 'False',
  'not-given': 'Not Given',
}

/** Human-readable correct answer, for post-test review. */
export function correctAnswerLabel(q: ObjectiveQuestion): string {
  if (q.type === 'mcq') return q.options[q.correctIndex] ?? ''
  if (q.type === 'tfng') return TFNG_LABEL[q.answer]
  if (q.type === 'matching') {
    return q.items
      .map((it) => {
        const opt = q.options.find((o) => o.key === it.answer)
        return `${it.text} → ${it.answer}${opt ? ` (${opt.label})` : ''}`
      })
      .join('; ')
  }
  return q.acceptableAnswers.join(' / ')
}

/** Human-readable form of the learner's answer to a non-matching question. */
export function userAnswerLabel(
  q: SingleQuestion,
  raw: string | undefined,
  noAnswerLabel: string,
): string {
  if (raw === undefined || raw.trim() === '') return noAnswerLabel
  // An mcq answer is already the option's text, so it is its own label.
  if (q.type === 'mcq') return raw
  if (q.type === 'tfng') {
    return TFNG_LABEL[raw as 'true' | 'false' | 'not-given'] ?? raw
  }
  return raw
}
