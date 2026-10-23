// ─── Which question on a mark scheme an essay answers ───────────────────────
//
// One rule for the places that need to know: where an essay is saved
// (POST /api/submissions), where it is marked (buildMarkingPrompt, and
// POST /api/marking/run before it), and where a mock answer is handed to the
// marking form (src/lib/marking/mock-handoff.ts).
//
// THE DEFECT (found 23 October 2026). Only the marker ever asked. The mock
// exam results page handed an answer to /marking/submit with the question's
// wording where its id belongs, the save route checked the paper and not the
// question, and the first thing to notice was buildMarkingPrompt, after the
// essay had been saved: a 400 before any AI call, so no audit row, and the
// learner was shown "Unknown question ..." verbatim. A new learner saved the
// same AQA Paper 1 answer three times that morning and none of the three
// could be marked. Asking the same question at every step means a row that
// can never be marked is refused before it is saved.
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, QuestionScheme } from './mark-schemes/types'

/**
 * The question on `scheme` that `questionId` names, matched on the question's
 * id or its question type, ignoring case and surrounding space. Undefined when
 * the scheme holds no such question.
 */
export function findSchemeQuestion(
  scheme: Pick<MarkScheme, 'questions'>,
  questionId: string,
): QuestionScheme | undefined {
  const normalised = questionId.trim().toLowerCase()
  return scheme.questions.find(
    (q) => q.id.toLowerCase() === normalised || q.questionType.toLowerCase() === normalised,
  )
}
