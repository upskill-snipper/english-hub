import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { modelAnswerFor } from '../model-answer'

/**
 * Which model answer a mock question shows (31 October 2026).
 *
 * THE DEFECT. The results view looked only for the chosen band, then 6-7,
 * then 4-5, and headed whatever it found with the band the student chose. The
 * Language mocks restructured on 24 October 2026 carry one Grade 8-9 answer
 * for each question worth 6 or more, so a student on 4-5 or 6-7 read "Model
 * answer not available" under a question that had one; a fallback answer was
 * labelled as a band it was not; and the Cambridge mocks' answers, keyed by
 * letter grade, never showed at all.
 */

describe('the model answer for a band', () => {
  it("is the band's own where the question has it", () => {
    const answers = { 'Grade 4-5': 'a', 'Grade 6-7': 'b', 'Grade 8-9': 'c' }
    expect(modelAnswerFor(answers, 'Grade 4-5')).toEqual({ band: 'Grade 4-5', text: 'a' })
    expect(modelAnswerFor(answers, 'Grade 6-7')).toEqual({ band: 'Grade 6-7', text: 'b' })
    expect(modelAnswerFor(answers, 'Grade 8-9')).toEqual({ band: 'Grade 8-9', text: 'c' })
  })

  it('is otherwise the nearest band the question has, named as itself', () => {
    expect(modelAnswerFor({ 'Grade 8-9': 'c' }, 'Grade 4-5')).toEqual({
      band: 'Grade 8-9',
      text: 'c',
    })
    expect(modelAnswerFor({ 'Grade 4-5': 'a', 'Grade 8-9': 'c' }, 'Grade 4-5')?.band).toBe(
      'Grade 4-5',
    )
    expect(modelAnswerFor({ 'Grade 4-5': 'a', 'Grade 6-7': 'b' }, 'Grade 8-9')?.band).toBe(
      'Grade 6-7',
    )
    // Equally near on both sides: the stronger answer.
    expect(modelAnswerFor({ 'Grade 4-5': 'a', 'Grade 8-9': 'c' }, 'Grade 6-7')?.band).toBe(
      'Grade 8-9',
    )
  })

  it("reads Cambridge's letter grades beside the nearest band", () => {
    const answers = { 'Grade C': 'c', 'Grade B': 'b', 'Grade A/A*': 'a' }
    expect(modelAnswerFor(answers, 'Grade 4-5')?.band).toBe('Grade C')
    expect(modelAnswerFor(answers, 'Grade 6-7')?.band).toBe('Grade B')
    expect(modelAnswerFor(answers, 'Grade 8-9')?.band).toBe('Grade A/A*')
  })

  it('passes over an empty answer, joins one kept as paragraphs, and finds none in nothing', () => {
    expect(modelAnswerFor({ 'Grade 6-7': '  ', 'Grade 8-9': 'c' }, 'Grade 6-7')?.band).toBe(
      'Grade 8-9',
    )
    expect(modelAnswerFor({ 'Grade 6-7': ['one', 'two'] }, 'Grade 6-7')?.text).toBe('one\n\ntwo')
    expect(modelAnswerFor({ 'Grade 7-9': 'old key' }, 'Grade 6-7')?.band).toBe('Grade 7-9')
    expect(modelAnswerFor(undefined, 'Grade 6-7')).toBeNull()
    expect(modelAnswerFor({}, 'Grade 6-7')).toBeNull()
  })
})

describe('the mock-exam results view', () => {
  const page = readFileSync(join(process.cwd(), 'src/app/dashboard/mock-exam/page.tsx'), 'utf8')

  it('chooses the answer it shows here, and heads it with the band it is', () => {
    // A test of the function alone would still pass with the page back on its
    // own lookup, which is the defect.
    expect(page).toMatch(/modelAnswerFor\(question\.modelAnswers, selectedGrade\)/)
    expect(page).not.toMatch(/modelAnswers\?\.\[/)
    expect(page).not.toMatch(/Model Answer \(\{selectedGrade\}\)/)
  })
})
