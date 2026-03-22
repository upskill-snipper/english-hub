/**
 * Validation logic for essay feedback requests.
 */

export interface EssayFeedbackRequest {
  board: string
  paper: string
  questionType: string
  questionText: string
  essay: string
}

export const VALID_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC']
export const VALID_PAPERS = ['Paper 1', 'Paper 2', 'Literature']

/**
 * Validate the essay feedback request body.
 * Returns an error message string if invalid, or null if valid.
 */
export function validateRequest(body: EssayFeedbackRequest): string | null {
  if (!body.board || !VALID_BOARDS.includes(body.board)) {
    return 'Invalid exam board. Choose from: AQA, Edexcel, OCR, WJEC.'
  }
  if (!body.paper || !VALID_PAPERS.includes(body.paper)) {
    return 'Invalid paper. Choose from: Paper 1, Paper 2, Literature.'
  }
  if (!body.questionType || body.questionType.trim().length === 0) {
    return 'Question type is required.'
  }
  if (!body.questionText || body.questionText.trim().length < 5) {
    return 'Please provide the question you are answering.'
  }
  if (!body.essay || body.essay.trim().length === 0) {
    return 'Please provide your essay.'
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
