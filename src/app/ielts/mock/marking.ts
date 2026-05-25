// ─── IELTS Mock Test — objective marking ───────────────────────────────────
// Auto-marking for the objective sections (Listening + Reading). This is a
// LOCAL helper for the mock route — it deliberately mirrors the marking rules
// used by the standalone Reading page (src/app/ielts/reading/page.tsx) so a
// learner's score is consistent wherever they answer the same item:
//   • mcq  → the recorded answer is the stringified correctIndex.
//   • tfng → exact match of 'true' | 'false' | 'not-given'.
//   • gap  → case-insensitive, trimmed match against any acceptableAnswers.
// Empty / unset answers are always wrong.
//
// We cannot import the standalone page's un-exported `isAnswerCorrect`, and we
// must not edit shared files, so the rule lives here as a small pure function.
// ────────────────────────────────────────────────────────────────────────────

import type { ObjectiveQuestion } from '@/lib/ielts/types'
import type { AnswerMap } from './mock-types'

/** True when the recorded answer for `q` is correct. */
export function isAnswerCorrect(q: ObjectiveQuestion, raw: string | undefined): boolean {
  if (raw === undefined) return false
  const given = raw.trim()
  if (given === '') return false

  if (q.type === 'mcq') {
    const idx = Number(given)
    return Number.isInteger(idx) && idx === q.correctIndex
  }
  if (q.type === 'tfng') {
    return given === q.answer
  }
  // gap
  const normalised = given.toLowerCase()
  return q.acceptableAnswers.some((a) => a.trim().toLowerCase() === normalised)
}

/** Count correct answers across a flat list of objective questions. */
export function countCorrect(questions: ObjectiveQuestion[], answers: AnswerMap): number {
  return questions.filter((q) => isAnswerCorrect(q, answers[q.id])).length
}

/** Count answered (non-empty) questions across a flat list. */
export function countAnswered(questions: ObjectiveQuestion[], answers: AnswerMap): number {
  return questions.filter((q) => {
    const v = answers[q.id]
    return v !== undefined && v.trim() !== ''
  }).length
}

/** Human-readable correct answer, for any post-test review surface. */
export function correctAnswerLabel(q: ObjectiveQuestion): string {
  if (q.type === 'mcq') return q.options[q.correctIndex]
  if (q.type === 'tfng') {
    if (q.answer === 'not-given') return 'Not Given'
    return q.answer === 'true' ? 'True' : 'False'
  }
  return q.acceptableAnswers.join(' / ')
}
