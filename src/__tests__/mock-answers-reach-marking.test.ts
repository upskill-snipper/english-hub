import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { resolveHandoffTarget, resolveMarkingBoard } from '@/lib/marking/mock-handoff'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'

/**
 * A finished mock had nowhere to go (SF-4).
 *
 * THE DEFECT. The 178 mock papers are the biggest free surface in the product.
 * A written answer on one is never scored - the results view calls it
 * "self-marked against the mark scheme", the submit handler keeps the answers
 * in component state and writes them nowhere, and every link on the results
 * view goes back to /mock-exams. A student finishes a paper at the exact moment
 * they most want a mark, and the product shows them the way out.
 *
 * THE MECHANISM ALREADY EXISTED. `draft-store.ts` carries an essay through a
 * sign-in round trip in sessionStorage - tab-scoped, consumed on read, because
 * it is a child's schoolwork on a possibly shared machine. Reusing it means one
 * way of moving an essay about, not two.
 *
 * WHAT THE RESOLVER IS CAREFUL ABOUT, and why the care is the point. The mock
 * papers and the mark schemes are separate corpora with different board
 * spellings: `AQA`, `WJEC`, `Pearson Edexcel`, `AQA / Edexcel IGCSE`, `All`,
 * `IAL`. Marking a Literature answer against a Language grid scores it on the
 * wrong objectives and hands a student a number they may act on. So:
 *
 *   - a subject mismatch offers NO scheme, rather than the nearest one
 *   - a paper-number mismatch offers the nearest and SAYS so
 *   - a paper naming two boards is never reported as an exact match
 *   - an unrecognised spelling pre-selects nothing
 */

const ROOT = process.cwd()
const PAGE = readFileSync(join(ROOT, 'src/app/mock-exams/[id]/page.tsx'), 'utf8')
const code = PAGE.replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
  .replace(/\/\/.*/g, '')

describe('board spellings', () => {
  it.each([
    ['AQA', 'AQA'],
    ['Edexcel', 'Edexcel'],
    ['Pearson Edexcel', 'Edexcel'],
    ['OCR', 'OCR'],
    ['WJEC', 'Eduqas'],
    ['Eduqas', 'Eduqas'],
  ])('maps %s to %s', (spelling, expected) => {
    expect(resolveMarkingBoard(spelling)).toBe(expected)
  })

  it.each(['All', 'IAL', 'General (cross-board)'])(
    'refuses to guess a board from "%s"',
    (spelling) => {
      // These name no single board. Pre-selecting one would mark the answer
      // against a grid the student does not sit.
      expect(resolveMarkingBoard(spelling)).toBeNull()
    },
  )
})

describe('choosing a mark scheme', () => {
  it('finds the exact paper when there is one', () => {
    const target = resolveHandoffTarget({
      examBoard: 'AQA',
      paperType: 'language',
      paperNumber: 1,
    })
    expect(target.exact).toBe(true)
    expect(target.note).toBeNull()
    expect(MARK_SCHEMES[target.schemeId!]).toBeTruthy()
  })

  it('never crosses subjects, even to offer something', () => {
    // AO2 in Literature and AO2 in Language are different objectives. A mark
    // from the wrong one is not a rough guide, it is wrong. Cambridge has four
    // LANGUAGE schemes and no Literature one, so a Literature answer gets no
    // scheme rather than a Language grid.
    const target = resolveHandoffTarget({
      examBoard: '0500',
      paperType: 'literature',
      paperNumber: 1,
    })
    expect(target.schemeId).toBeNull()
    expect(target.note).toMatch(/literature/i)
  })

  it('finds the Cambridge schemes, which the marking page could not', () => {
    // THE LIVE DEFECT THIS UNCOVERED. The four Cambridge schemes carry
    // `board: 'Cambridge'` and `'Cambridge (9-1)'`. Neither contains 0500 or
    // 0990 - the only tokens that tell the syllabuses apart - so the marking
    // page's board picker matched zero schemes for both, rendered them
    // `disabled`, and told the reader they were "coming soon". They have
    // existed all along, and Cambridge IGCSE is the Gulf wedge.
    for (const [spelling, expectedId] of [
      ['0500', 'cambridge-0500-paper1'],
      ['0990', 'cambridge-0990-paper1'],
    ] as const) {
      const target = resolveHandoffTarget({
        examBoard: spelling,
        paperType: 'language',
        paperNumber: 1,
      })
      expect(target.schemeId, `${spelling} resolved to nothing`).toBe(expectedId)
      expect(MARK_SCHEMES[target.schemeId!]).toBeTruthy()
    }
  })

  it('says so when it has fallen back to the nearest paper', () => {
    const target = resolveHandoffTarget({
      examBoard: 'AQA',
      paperType: 'literature',
      paperNumber: 2,
    })
    // There is no AQA Literature Paper 2 scheme. Offering Paper 1 silently
    // would put a Paper 2 answer against a Paper 1 grid.
    expect(target.exact).toBe(false)
    expect(target.note).toBeTruthy()
    expect(target.note).toMatch(/Check it fits/)
  })

  it('never calls a two-board paper an exact match', () => {
    // "AQA / Edexcel IGCSE" matches an AQA scheme, but the paper is not
    // necessarily AQA's.
    const target = resolveHandoffTarget({
      examBoard: 'AQA / Edexcel IGCSE',
      paperType: 'language',
      paperNumber: 1,
    })
    expect(target.exact).toBe(false)
    expect(target.note).toMatch(/Change it if that is not yours/)
  })

  it('pre-selects nothing at all for an unrecognised board', () => {
    const target = resolveHandoffTarget({
      examBoard: 'All',
      paperType: 'language',
      paperNumber: 1,
    })
    expect(target.board).toBeNull()
    expect(target.schemeId).toBeNull()
    expect(target.note).toMatch(/Choose the board and paper yourself/)
  })
})

describe('the results view', () => {
  it('offers the button, which it did not', () => {
    expect(code).toContain('onGetMarked')
    expect(code).toContain("t('mock.get_this_marked')")
  })

  it('offers it only on written answers', () => {
    // A multiple-choice question is already marked on the same screen, and
    // sending one to an essay marker would spend a trial use on a question
    // that has an objective answer.
    expect(code).toMatch(/!q\.isMultipleChoice && hasAnswer/)
  })

  it('reuses the existing draft store rather than inventing a second one', () => {
    expect(code).toContain('saveMarkingDraft')
    expect(code).not.toMatch(/localStorage\.setItem/)
  })

  it('carries the inexact-match note where the reader will see it', () => {
    // The note goes into the title field, which /marking/submit renders back.
    // A silent pre-selection of the wrong paper is the failure this avoids.
    expect(code).toMatch(/handoff\.note \? ` \(\$\{handoff\.note\}\)` : ''/)
  })

  it('sends the question prompt, not just its label', () => {
    // "Q3" tells the marker nothing. The prompt is what the answer responds to.
    expect(code).toContain('question.prompt || question.label')
  })
})

describe('the label', () => {
  it('exists in all three languages', () => {
    const dict = readFileSync(join(ROOT, 'src/lib/i18n/dictionary.ts'), 'utf8')
    const at = dict.indexOf("'mock.get_this_marked'")
    expect(at).toBeGreaterThan(-1)
    const entry = dict.slice(at, at + 220)
    for (const locale of ['en:', 'ar:', 'es:']) expect(entry).toContain(locale)
  })
})

describe('the marking page’s own board picker', () => {
  const SUBMIT = readFileSync(join(ROOT, 'src/app/marking/submit/page.tsx'), 'utf8')

  it('matches on the scheme ID as well as the board name', () => {
    // Without this, both Cambridge boards render disabled and say "coming
    // soon" while four Cambridge schemes sit in the code.
    const fn = SUBMIT.slice(SUBMIT.indexOf('function buildBoardOptions'))
    expect(fn.slice(0, 1600)).toMatch(/scheme\.id\.toLowerCase\(\)/)
  })

  it('would still mark every board unavailable if the schemes went', () => {
    // The guard must not be satisfiable by an empty catalogue: if MARK_SCHEMES
    // were empty the picker would disable everything and this file should say
    // so rather than pass.
    expect(Object.keys(MARK_SCHEMES).length).toBeGreaterThan(15)
  })
})
