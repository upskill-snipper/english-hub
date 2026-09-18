import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { markSchemes, formatMarkSchemeForPrompt } from '@/data/mark-schemes'

/**
 * The SECOND mark-scheme corpus.
 *
 * THE DEFECT (19 September 2026). This repository has two. The other is
 * src/lib/marking/mark-schemes/, used by the examiner tool and the GCSE
 * marker, and it now carries a verification registry recording which papers
 * have been checked against a board's published specification.
 *
 * Nothing connects them. Earlier tonight that corpus was audited and two
 * defects fixed: AQA Paper 1 coding structure as AO3 (AQA assesses it under
 * AO2, and AO3 is not on Paper 1 at all), and Edexcel being AQA's paper with
 * Edexcel's totals written on it.
 *
 * THIS file carried the identical AQA defect and was missed, because grepping
 * the corpus under audit does not reach a second copy under src/data. It also
 * had Question 4 at 4 marks - it is 20, the largest reading question on the
 * paper - and `// @ts-nocheck` on line 1, so it was opted out of type checking
 * entirely.
 *
 * It feeds /api/essay-feedback, which is a live AI marking route.
 *
 * These tests pin what has actually been verified and, more importantly, keep
 * the unverified remainder honest to the model rather than silently corrected.
 */

const FILE = readFileSync(join(process.cwd(), 'src/data/mark-schemes.ts'), 'utf8')

function aqaPaper1() {
  const board = markSchemes.find((b) => b.board === 'AQA')!
  return board.papers.find((p) => p.paper === 'Paper 1')!
}

// ─── What was actually wrong ────────────────────────────────────────────

describe('AQA Paper 1, the one paper here that has been verified', () => {
  it('assesses structure under AO2, not AO3', () => {
    const ids = aqaPaper1().assessmentObjectives.map((a) => a.id)
    expect(ids).not.toContain('AO3')
  })

  it('has two AO2 objectives - language and structure', () => {
    const ao2 = aqaPaper1().assessmentObjectives.filter((a) => a.id === 'AO2')
    expect(ao2).toHaveLength(2)
    expect(ao2.map((a) => a.maxMarks)).toEqual([8, 8])
  })

  it('gives Question 4 its real 20 marks', () => {
    // Recorded as 4. A model told the question is worth 4 cannot place a
    // response on the 20-mark grid at all.
    const ao4 = aqaPaper1().assessmentObjectives.find((a) => a.id === 'AO4')!
    expect(ao4.maxMarks).toBe(20)
  })

  it('sums to the 80 marks the paper carries', () => {
    const total = aqaPaper1().assessmentObjectives.reduce((a, o) => a + o.maxMarks, 0)
    expect(total).toBe(80)
  })
})

describe('the file itself', () => {
  it('is type-checked, rather than opted out', () => {
    // Asserted on the FIRST LINE, not on the whole file: the directive only
    // takes effect at the top, and the header below it describes the removal,
    // so a whole-file search matches its own documentation.
    expect(FILE.split(/\r?\n/)[0]).not.toContain('@ts-nocheck')
  })

  it('says in its own header that a second corpus exists', () => {
    // The two were audited independently and only one was fixed. Whoever
    // audits next should find out from the file, not from a production bug.
    expect(FILE).toContain('SECOND MARK-SCHEME CORPUS')
    expect(FILE).toContain('src/lib/marking/mark-schemes/')
  })
})

// ─── The unverified remainder ───────────────────────────────────────────

describe('what the model is told', () => {
  it('states that a verified paper was verified', () => {
    const prompt = formatMarkSchemeForPrompt('AQA', 'Paper 1')
    expect(prompt).toContain('VERIFICATION:')
    expect(prompt).not.toContain('NOT VERIFIED')
  })

  it.each([
    ['AQA', 'Paper 2'],
    ['Edexcel', 'Paper 1'],
    ['Edexcel', 'Literature'],
    ['OCR', 'Paper 1'],
    ['WJEC', 'Paper 1'],
  ])('warns that %s %s is unverified', (board, paper) => {
    const prompt = formatMarkSchemeForPrompt(board, paper)
    expect(prompt).toContain('NOT VERIFIED')
  })

  it('tells the model to disclose it rather than quietly hedging', () => {
    const prompt = formatMarkSchemeForPrompt('OCR', 'Paper 1')
    expect(prompt).toMatch(/say in one short sentence/i)
    expect(prompt).toMatch(/do not report a grade/i)
  })

  it('keeps the verified set to exactly one paper', () => {
    // Widening it is a claim about the real world. It should require deleting
    // this assertion on purpose.
    expect(FILE).toContain("new Set(['AQA|Paper 1'])")
  })
})

// ─── The known-wrong entry, left rather than guessed ────────────────────

describe('Edexcel Literature, which is visibly wrong', () => {
  it('still carries the four-times-twenty shape, unpatched', () => {
    // 1ET0's published breakdown is 59 / 67 / 26 / 8 across the qualification,
    // and its AO4 is spelling, punctuation and grammar worth 8 - not the
    // "Comparison" named here. Inventing a correction is exactly the failure
    // the verification work exists to prevent, so it is flagged to the model
    // instead. This test exists so that when it IS corrected, someone has to
    // come back here and update the record.
    const lit = markSchemes
      .find((b) => b.board === 'Edexcel')!
      .papers.find((p) => p.paper === 'Literature')!
    expect(lit.assessmentObjectives.map((a) => a.maxMarks)).toEqual([20, 20, 20, 20])
    expect(formatMarkSchemeForPrompt('Edexcel', 'Literature')).toContain('NOT VERIFIED')
  })
})
