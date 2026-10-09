import { describe, it, expect } from 'vitest'
import { validateRequest } from '@/lib/validate-request'

/** Helper: build a valid request, then override specific fields */
function req(overrides: Partial<Parameters<typeof validateRequest>[0]> = {}) {
  const words =
    'The author uses vivid imagery and powerful language to convey the theme throughout the text in a compelling manner '
  return {
    board: 'AQA',
    paper: 'Paper 1',
    questionType: 'Creative Writing',
    questionText: 'Describe a place that is important to you.',
    essay: words.repeat(15), // ~150 words
    ...overrides,
  }
}

describe('validateRequest', () => {
  // ── Valid request ──────────────────────────────────────────────────────────

  it('returns null for a valid request', () => {
    expect(validateRequest(req())).toBeNull()
  })

  // ── Board validation ───────────────────────────────────────────────────────

  it('rejects invalid board', () => {
    const result = validateRequest(req({ board: 'InvalidBoard' }))
    expect(result).not.toBeNull()
    expect(result).toContain('Invalid exam board')
  })

  it('rejects empty board', () => {
    const result = validateRequest(req({ board: '' }))
    expect(result).not.toBeNull()
    expect(result).toContain('Invalid exam board')
  })

  it('accepts all valid boards', () => {
    // CAIE is what the inline feedback sends for a Cambridge mock paper, and
    // was refused as "Invalid exam board" until 9 October 2026. Eduqas and the
    // Cambridge syllabus codes are the feedback page's own board values.
    for (const board of [
      'AQA',
      'Edexcel',
      'OCR',
      'WJEC',
      'Eduqas',
      'CAIE',
      'Cambridge-0500',
      'Cambridge-0990',
    ]) {
      expect(validateRequest(req({ board }))).toBeNull()
    }
  })

  // ── Paper validation ───────────────────────────────────────────────────────

  it('rejects invalid paper', () => {
    const result = validateRequest(req({ paper: 'Paper 3' }))
    expect(result).not.toBeNull()
    expect(result).toContain('Invalid paper')
  })

  it('rejects empty paper', () => {
    const result = validateRequest(req({ paper: '' }))
    expect(result).not.toBeNull()
    expect(result).toContain('Invalid paper')
  })

  it('accepts all valid papers', () => {
    // A scheme's own paper name, as the feedback page sends it, as well as
    // the older callers' three.
    for (const paper of ['Paper 1', 'Paper 2', 'Literature', 'Component 01', 'Component 2']) {
      expect(validateRequest(req({ paper }))).toBeNull()
    }
  })

  // ── Scheme and question ────────────────────────────────────────────────────

  it('accepts a scheme and question named together', () => {
    expect(
      validateRequest(req({ schemeId: 'edexcel-lit-paper2', questionId: 'Section B Part 1' })),
    ).toBeNull()
  })

  it('rejects a scheme without a question, and a question without a scheme', () => {
    expect(validateRequest(req({ schemeId: 'edexcel-lit-paper2' }))).toContain(
      'Choose both the paper and the question',
    )
    expect(validateRequest(req({ questionId: 'Section B Part 1' }))).toContain(
      'Choose both the paper and the question',
    )
  })

  it('rejects a scheme or question that is not a short string', () => {
    expect(validateRequest(req({ schemeId: 42 as unknown as string, questionId: 'Q1' }))).toContain(
      'Invalid paper or question',
    )
    expect(validateRequest(req({ schemeId: 'x'.repeat(81), questionId: 'Q1' }))).toContain(
      'Invalid paper or question',
    )
  })

  it('accepts the two subjects, and nothing else', () => {
    expect(validateRequest(req({ subject: 'English Literature' }))).toBeNull()
    expect(validateRequest(req({ subject: 'English Language' }))).toBeNull()
    expect(validateRequest(req({ subject: 'Maths' }))).toContain('Invalid subject')
  })

  // ── Question type ──────────────────────────────────────────────────────────

  it('rejects empty question type', () => {
    const result = validateRequest(req({ questionType: '' }))
    expect(result).not.toBeNull()
    expect(result).toContain('Question type is required')
  })

  it('rejects whitespace-only question type', () => {
    const result = validateRequest(req({ questionType: '   ' }))
    expect(result).not.toBeNull()
    expect(result).toContain('Question type is required')
  })

  // ── Question text ──────────────────────────────────────────────────────────

  it('rejects short question text (under 5 chars)', () => {
    const result = validateRequest(req({ questionText: 'Hi' }))
    expect(result).not.toBeNull()
    expect(result).toContain('provide the question')
  })

  it('rejects empty question text', () => {
    const result = validateRequest(req({ questionText: '' }))
    expect(result).not.toBeNull()
  })

  it('accepts question text of exactly 5 characters', () => {
    expect(validateRequest(req({ questionText: 'abcde' }))).toBeNull()
  })

  // ── Essay too short ────────────────────────────────────────────────────────

  it('rejects essay under 100 words', () => {
    const shortEssay = Array(50).fill('word').join(' ')
    const result = validateRequest(req({ essay: shortEssay }))
    expect(result).not.toBeNull()
    expect(result).toContain('50 words')
    expect(result).toContain('at least 100 words')
  })

  it('rejects empty essay', () => {
    const result = validateRequest(req({ essay: '' }))
    expect(result).not.toBeNull()
    expect(result).toContain('provide your essay')
  })

  // ── Essay too long ─────────────────────────────────────────────────────────

  it('rejects essay over 5000 words', () => {
    const longEssay = Array(5100).fill('word').join(' ')
    const result = validateRequest(req({ essay: longEssay }))
    expect(result).not.toBeNull()
    expect(result).toContain('exceeds 5,000 words')
  })

  // ── Boundary cases ─────────────────────────────────────────────────────────

  it('accepts essay of exactly 100 words', () => {
    const essay = Array(100).fill('word').join(' ')
    expect(validateRequest(req({ essay }))).toBeNull()
  })

  it('accepts essay of exactly 5000 words', () => {
    const essay = Array(5000).fill('word').join(' ')
    expect(validateRequest(req({ essay }))).toBeNull()
  })
})
