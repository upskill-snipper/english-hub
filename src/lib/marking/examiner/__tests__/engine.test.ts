import { describe, expect, it } from 'vitest'
import {
  applyCap,
  extractMark,
  levelFromGates,
  markForPlacement,
  normaliseDashes,
  renderCountCommentary,
  renderLevelCommentary,
  renderWritingCommentary,
  splitTranscript,
  transcriptStats,
} from '../engine'
import { pearsonIgcseEnglishAPaper1 as pack } from '../packs/pearson-igcse-english-a-paper1'
import type { ExaminerCountSpec, ExaminerLevelSpec, ExaminerWritingSpec } from '../types'

const q1 = pack.questions.find((q) => q.id === 'Q1') as ExaminerCountSpec
const q2 = pack.questions.find((q) => q.id === 'Q2') as ExaminerCountSpec
const q4 = pack.questions.find((q) => q.id === 'Q4') as ExaminerLevelSpec
const q5 = pack.questions.find((q) => q.id === 'Q5') as ExaminerLevelSpec
const q67 = pack.questions.find((q) => q.id === 'Q67') as ExaminerWritingSpec

describe('levelFromGates', () => {
  it('starts at level 1 with nothing answered and is incomplete', () => {
    expect(levelFromGates(q4.grid, {})).toEqual({ lvl: 1, complete: false })
  })
  it('a first No places the script at level 1, complete', () => {
    expect(levelFromGates(q4.grid, { 0: 'no' })).toEqual({ lvl: 1, complete: true })
  })
  it('each Yes climbs one level and stops at the first No', () => {
    expect(levelFromGates(q4.grid, { 0: 'yes', 1: 'yes', 2: 'no' })).toEqual({
      lvl: 3,
      complete: true,
    })
  })
  it('an unanswered gate after a Yes is incomplete at that level', () => {
    expect(levelFromGates(q4.grid, { 0: 'yes', 1: 'yes' })).toEqual({ lvl: 3, complete: false })
  })
  it('all Yes answers reach the top level', () => {
    expect(levelFromGates(q4.grid, { 0: 'yes', 1: 'yes', 2: 'yes', 3: 'yes' })).toEqual({
      lvl: 5,
      complete: true,
    })
  })
})

describe('markForPlacement', () => {
  it('returns bottom, rounded middle and top of the level range', () => {
    // Q4 Level 3 is 5-7
    expect(markForPlacement(q4.grid, 3, 'bottom')).toBe(5)
    expect(markForPlacement(q4.grid, 3, 'mid')).toBe(6)
    expect(markForPlacement(q4.grid, 3, 'top')).toBe(7)
    // Q5 Level 4 is 14-18, middle rounds to 16
    expect(markForPlacement(q5.grid, 4, 'mid')).toBe(16)
  })
})

describe('applyCap', () => {
  it('the Q5 one-text cap holds level at 2 and mark at 8', () => {
    expect(applyCap(q5, true, 5, 22)).toEqual({ lvl: 2, mark: 8 })
    expect(applyCap(q5, false, 5, 22)).toEqual({ lvl: 5, mark: 22 })
  })
  it('a question with no cap note is unchanged', () => {
    expect(applyCap(q4, true, 4, 9)).toEqual({ lvl: 4, mark: 9 })
  })
})

describe('renderCountCommentary', () => {
  it('uses the singular for one mark and omits the cap clause at full marks', () => {
    const full = renderCountCommentary(q1, 2)
    expect(full).toMatch(/2 marks$/)
    expect(full).not.toContain('Capping reason')
    const one = renderCountCommentary(q1, 1)
    expect(one).toMatch(/1 mark$/)
    expect(one).toContain('Capping reason')
  })
  it('never exceeds the maximum', () => {
    expect(renderCountCommentary(q2, 9)).toMatch(/4 marks$/)
  })
  it('pluralises {s} placeholders', () => {
    expect(renderCountCommentary(q2, 1)).toContain('1 valid point (')
    expect(renderCountCommentary(q2, 3)).toContain('3 valid points (')
  })
})

describe('renderLevelCommentary', () => {
  it('ends on the terminal formula and names the placement feature', () => {
    const c = renderLevelCommentary(
      q5,
      4,
      14,
      'bottom',
      'the overall balance of references lifts this just into Level 4',
    )
    expect(c).toMatch(/Level 4 - 14 marks$/)
    expect(c).toContain(
      'Best fit places this at the bottom of Level 4: the overall balance of references lifts this just into Level 4.',
    )
    expect(c).toContain(q5.levelSentences[3])
  })
  it('leaves a bracketed placeholder when no feature is named', () => {
    expect(renderLevelCommentary(q4, 3, 6, 'mid', '')).toContain('[Placement clause')
  })
})

describe('renderWritingCommentary', () => {
  it('produces one paragraph per assessment objective and a summed tally', () => {
    const c = renderWritingCommentary(
      q67,
      [
        { gridId: 'AO4', lvl: 4, mark: 21 },
        { gridId: 'AO5', lvl: 4, mark: 14 },
      ],
      '',
    )
    expect(c).toContain('A mark of 21 in Level 4 is appropriate for AO4.')
    expect(c).toContain('For AO5 the candidate')
    expect(c).toMatch(/AO4 Level 4 - 21\nAO5 Level 4 - 14 = 35$/)
  })
})

describe('transcriptStats and splitTranscript', () => {
  it('counts doubtful and unreadable markers without counting them as words', () => {
    const s = transcriptStats('[page 1]\nThe [?wether] was [illegible: ~3 words] cold.')
    expect(s).toEqual({ doubtful: 1, illegible: 1, words: 3 })
  })
  it('splits the two-section reply and tolerates a missing notes section', () => {
    expect(splitTranscript('<<<TRANSCRIPT>>>\nhello\n<<<NOTES>>>\nNone.')).toEqual({
      text: 'hello',
      notes: 'None.',
    })
    expect(splitTranscript('<<<TRANSCRIPT>>>\nhello')).toEqual({ text: 'hello', notes: '' })
    expect(splitTranscript('plain')).toEqual({ text: 'plain', notes: '' })
  })
})

describe('extractMark', () => {
  it('reads the writing tally line', () => {
    const text = 'walkthrough...\n\nAO4 Level 4 - 21\nAO5 Level 4 - 14 = 35'
    expect(extractMark(text, q67)).toEqual({ mark: 35, max: 45, note: 'AO4 + AO5' })
  })
  it('reads the last Level formula on a levelled question', () => {
    const text = 'Some understanding ... Level 2 - 4 marks. On reflection, Level 3 - 6 marks'
    expect(extractMark(text, q4)).toEqual({ mark: 6, max: 12, note: 'Level 3' })
  })
  it('reads a bare count on a points question and rejects impossible values', () => {
    expect(extractMark('Two acceptable phrases are selected. 2 marks', q1)).toEqual({
      mark: 2,
      max: 2,
      note: '',
    })
    expect(extractMark('This would be 40 marks', q1)).toBeNull()
  })
  it('reads an X / max fraction', () => {
    expect(extractMark('The response sits at 9 / 12 overall.', q4)).toEqual({
      mark: 9,
      max: 12,
      note: '',
    })
  })
  it('returns null on empty text', () => {
    expect(extractMark('', q4)).toBeNull()
  })
})

describe('normaliseDashes', () => {
  it('replaces em and en dashes with a spaced hyphen', () => {
    expect(normaliseDashes('a — b – c')).toBe('a - b - c')
    expect(normaliseDashes('no dashes')).toBe('no dashes')
  })
})
