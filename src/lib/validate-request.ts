/**
 * Validation logic for essay feedback requests.
 *
 * 9 October 2026: a request may now name a mark scheme and one of its questions
 * (schemeId, questionId), which is what the route marks against; see
 * src/lib/marking/essay-feedback.ts. Without them the route gives general
 * feedback with no marks per objective. The boards and papers accepted widened
 * with it: the inline feedback on the mock-exam and practice pages sends CAIE
 * for Cambridge papers, which was refused as "Invalid exam board", and the
 * feedback page now sends a scheme's own paper name ("Component 01").
 */

import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'

export interface EssayFeedbackRequest {
  board: string
  paper: string
  questionType: string
  questionText: string
  essay: string
  /** A scheme id in src/lib/marking/mark-schemes. Sent with questionId or not at all. */
  schemeId?: string
  /** One of that scheme's question ids. */
  questionId?: string
  /** "English Literature" or "English Language", for general feedback. */
  subject?: string
}

export const VALID_BOARDS = [
  'AQA',
  'Edexcel',
  'OCR',
  'WJEC',
  'Eduqas',
  'CAIE',
  'Cambridge-0500',
  'Cambridge-0990',
]

/** "Paper 1", "Paper 2" and "Literature" from older callers, and every scheme's own paper name. */
export const VALID_PAPERS = [
  ...new Set([
    'Paper 1',
    'Paper 2',
    'Literature',
    ...Object.values(MARK_SCHEMES).map((s) => s.paper),
  ]),
]

export const VALID_SUBJECTS = ['English Literature', 'English Language']

/**
 * Validate the essay feedback request body.
 * Returns an error message string if invalid, or null if valid.
 */
export function validateRequest(body: EssayFeedbackRequest): string | null {
  if (!body.board || !VALID_BOARDS.includes(body.board)) {
    return `Invalid exam board. Choose from: ${VALID_BOARDS.join(', ')}.`
  }
  if (!body.paper || !VALID_PAPERS.includes(body.paper)) {
    return `Invalid paper. Choose from: ${VALID_PAPERS.join(', ')}.`
  }
  if (!body.questionType || body.questionType.trim().length === 0) {
    return 'Question type is required.'
  }
  if (body.questionType.length > 100) {
    return 'Invalid question type.'
  }
  const hasScheme = body.schemeId !== undefined && body.schemeId !== null
  const hasQuestion = body.questionId !== undefined && body.questionId !== null
  if (hasScheme !== hasQuestion) {
    return 'Choose both the paper and the question, or neither.'
  }
  if (
    hasScheme &&
    (typeof body.schemeId !== 'string' ||
      typeof body.questionId !== 'string' ||
      body.schemeId.length > 80 ||
      body.questionId.length > 80)
  ) {
    return 'Invalid paper or question.'
  }
  if (
    body.subject !== undefined &&
    body.subject !== null &&
    !VALID_SUBJECTS.includes(body.subject)
  ) {
    return 'Invalid subject.'
  }
  if (!body.questionText || body.questionText.trim().length < 5) {
    return 'Please provide the question you are answering.'
  }
  if (body.questionText.length > 500) {
    return 'Question text is too long. Please keep it under 500 characters.'
  }
  if (!body.essay || body.essay.trim().length === 0) {
    return 'Please provide your essay.'
  }
  if (body.essay.length > 30_000) {
    return 'Your essay is too long. Please keep it under 30,000 characters (roughly 5,000 words).'
  }
  const wordCount = body.essay.trim().split(/\s+/).length
  if (wordCount < 100) {
    return `Your essay is ${wordCount} words. Please write at least 100 words for meaningful feedback.`
  }
  if (wordCount > 5000) {
    return 'Your essay exceeds 5,000 words. Please submit a shorter piece.'
  }
  return null
}
