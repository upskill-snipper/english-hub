import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { edexcelLangPaper1, edexcelLangPaper2 } from '@/lib/marking/mark-schemes/edexcel-lang'
import type { MarkScheme } from '@/lib/marking/mark-schemes/types'

/**
 * EXAM-3, the half that lived on the public pages.
 *
 * The mark schemes for Edexcel GCSE English Language were rebuilt to the 1EN0
 * specification on 19 September 2026. The revision pages that teach the same
 * paper were not, and they had drifted a long way:
 *
 *   - the grade-boundaries page listed Paper 1 as 4/8/8/20/24 and Paper 2 as
 *     six 4-mark questions, an 8 and a 12. That is AQA's shape. Its Paper 2
 *     rows summed to 68 under a total row saying 64, while a paragraph higher
 *     up the same page correctly said 96.
 *   - the Paper 1 page invented a fifth reading question, a second 6-mark
 *     language analysis, so its own tariffs summed to 70 on a paper it said was
 *     64. The specification's AO2 total of 21 leaves no room for it: 6 on Paper
 *     1 plus 15 on Paper 2.
 *   - the Paper 2 page was headed "64 marks" for a 96-mark paper and split it
 *     24 reading and 40 writing. It is 56 and 40.
 *
 * Nobody was checking, which is the actual defect. A student revising from
 * these pages was told the wrong tariff for every question on both papers,
 * while the marking engine behind the same site used the right ones.
 *
 * WHAT THIS TEST USES AS ITS DENOMINATOR. The scheme, not the pages. A page
 * checked against itself is the shape of coverage measurement this repository
 * has been unpicking: it cannot fail. Here the question list and every tariff
 * come from `edexcel-lang.ts`, so correcting the scheme without correcting the
 * pages fails this, and so does the reverse.
 *
 * WHAT IT DOES NOT CLAIM. That the scheme itself is right. That is what
 * `src/lib/marking/examiner/verification.ts` is for, and these two papers are
 * deliberately not in it: the structure and tariffs reconcile exactly against
 * the specification's own AO breakdown, but the level descriptors are not
 * transcribed from the published mark schemes. This test only enforces that
 * the site and the engine tell a student the same thing.
 */

const ROOT = process.cwd()
const DIR = 'src/app/resources/english-language/edexcel'
const read = (rel: string) => readFileSync(join(ROOT, DIR, rel), 'utf8')

const GRADE_BOUNDARIES = read('grade-boundaries/page.tsx')
const PAPER1 = read('paper-1/page.tsx')
const PAPER2 = read('paper-2/page.tsx')
const INDEX = read('page.tsx')

const P1_HEADING = 'Paper 1: Fiction and Imaginative Writing (1h 45m)'
const P2_HEADING = 'Paper 2: Non-Fiction and Writing for Real Purposes (2h 05m)'

/** "1 mark" / "15 marks" to 1 / 15. */
function marksIn(cell: string): number | null {
  const m = cell.match(/([0-9]+)\s+marks?/)
  return m ? Number(m[1]) : null
}

/**
 * The tariff column of one table on the grade-boundaries page, in row order,
 * with the Total row separated out.
 */
function tableTariffs(heading: string): { rows: number[]; total: number } {
  const from = GRADE_BOUNDARIES.indexOf(heading)
  expect(from, `heading not found: ${heading}`).toBeGreaterThan(-1)
  const open = GRADE_BOUNDARIES.indexOf('<tbody', from)
  const body = GRADE_BOUNDARIES.slice(open, GRADE_BOUNDARIES.indexOf('</tbody>', open))

  const rows: number[] = []
  let total = -1
  for (const row of body.split('<tr').slice(1)) {
    const isTotal = row.includes('>Total</td>')
    const value = row
      .split('<td')
      .slice(1)
      .map(marksIn)
      .find((n): n is number => n !== null)
    if (value === undefined) continue
    if (isTotal) total = value
    else rows.push(value)
  }
  return { rows, total }
}

/** Every question whose objectives are all AO5 or AO6 is the writing task. */
function writingMarks(scheme: MarkScheme): number {
  return scheme.questions
    .filter((q) => q.assessmentObjectives.every((ao) => ao.id === 'AO5' || ao.id === 'AO6'))
    .reduce((a, q) => a + q.totalMarks, 0)
}

const PAPERS: [string, string, MarkScheme][] = [
  ['Paper 1', P1_HEADING, edexcelLangPaper1],
  ['Paper 2', P2_HEADING, edexcelLangPaper2],
]

describe('the grade-boundaries tables are the mark scheme', () => {
  it.each(PAPERS)('%s lists exactly the scheme tariffs, in order', (_label, heading, scheme) => {
    const { rows } = tableTariffs(heading)
    expect(rows).toEqual(scheme.questions.map((q) => q.totalMarks))
  })

  it.each(PAPERS)('%s adds up to its own total row, and to the scheme', (_l, heading, scheme) => {
    // The check that would have caught the original defect on its own terms,
    // without knowing anything about Pearson: the rows summed to 68 beneath a
    // total row that said 64.
    const { rows, total } = tableTariffs(heading)
    expect(rows.reduce((a, b) => a + b, 0)).toBe(total)
    expect(total).toBe(scheme.totalMarks)
  })

  it('and the tables were actually found, not silently empty', () => {
    // Without this the two assertions above pass on a parser that matched
    // nothing, which is how a checker goes quiet rather than red.
    expect(tableTariffs(P1_HEADING).rows.length).toBe(5)
    expect(tableTariffs(P2_HEADING).rows.length).toBe(9)
  })
})

describe('the paper pages state the right totals', () => {
  it('Paper 1 is 64 marks and 40% of the GCSE', () => {
    expect(edexcelLangPaper1.totalMarks).toBe(64)
    expect(PAPER1).toContain('64 marks &bull; 40% of your GCSE')
  })

  it('Paper 2 is 96 marks and 60% of the GCSE', () => {
    expect(edexcelLangPaper2.totalMarks).toBe(96)
    expect(PAPER2).toContain('96 marks &bull; 60% of your GCSE')
  })

  it('and the two together are the 160-mark qualification', () => {
    expect(edexcelLangPaper1.totalMarks + edexcelLangPaper2.totalMarks).toBe(160)
  })

  it('the index page agrees with both', () => {
    expect(INDEX).toContain('1 hour 45 minutes, 64 marks.')
    expect(INDEX).toContain('2 hours 5 minutes, 96 marks.')
  })
})

describe('the reading and writing split', () => {
  it('Paper 2 reading is 56 and writing 40, which the page now says', () => {
    // It said 24 and 40, the inversion the backlog entry called out.
    const writing = writingMarks(edexcelLangPaper2)
    expect(writing).toBe(40)
    expect(edexcelLangPaper2.totalMarks - writing).toBe(56)
    expect(PAPER2).toContain('56 marks &bull; ~1 hr 15 min')
    expect(PAPER2).toContain('40 marks &bull; ~50 min')
  })

  it('Paper 1 reading is 24 and writing 40', () => {
    const writing = writingMarks(edexcelLangPaper1)
    expect(writing).toBe(40)
    expect(edexcelLangPaper1.totalMarks - writing).toBe(24)
    expect(PAPER1).toContain('24 marks &bull; ~1 hour')
  })

  it('so writing is exactly half the qualification, as the takeaways say', () => {
    const writing = writingMarks(edexcelLangPaper1) + writingMarks(edexcelLangPaper2)
    expect(writing).toBe(80)
    expect(GRADE_BOUNDARIES).toContain('<strong>80 marks</strong>, exactly half')
  })
})

describe('the AQA shape is gone from the pages', () => {
  // The specific wrong claims these pages carried. Named individually rather
  // than as a blanket ban on numbers, so a failure says which one came back.
  it.each([
    ['a 20-mark Paper 1 Q4', /Q4 \(20 marks\)|worth 20 marks/],
    ['four-mark short responses', /short-response questions worth 4 marks/],
    ['a 12-mark Paper 2 Q8', /Q8 \(12 marks\)/],
  ])('%s is not on the grade-boundaries page', (_label, pattern) => {
    expect(GRADE_BOUNDARIES).not.toMatch(pattern)
  })

  it('and Paper 1 no longer invents a second language-analysis question', () => {
    // AO2 across the qualification is 21 marks: 6 on Paper 1 and 15 on Paper 2.
    // A second 6-mark AO2 question on Paper 1 cannot exist.
    const ao2 = [edexcelLangPaper1, edexcelLangPaper2]
      .flatMap((s) => s.questions)
      .flatMap((q) => q.assessmentObjectives)
      .filter((ao) => ao.id === 'AO2')
      .reduce((a, ao) => a + ao.maxMarks, 0)
    expect(ao2).toBe(21)
    expect(PAPER1).not.toContain('Structural / Language Analysis (6 marks)')
  })
})

describe('the six assessment objectives reconcile, which is why the structure is trusted', () => {
  it('to the specification totals, and to 160', () => {
    // This is the evidence the rebuild rested on: a wrong question structure
    // does not reconcile to six independent published AO totals at once.
    const totals: Record<string, number> = {}
    for (const scheme of [edexcelLangPaper1, edexcelLangPaper2]) {
      for (const q of scheme.questions) {
        for (const ao of q.assessmentObjectives) {
          totals[ao.id] = (totals[ao.id] ?? 0) + ao.maxMarks
        }
      }
    }
    expect(totals).toEqual({ AO1: 15, AO2: 21, AO3: 14, AO4: 30, AO5: 48, AO6: 32 })
    expect(Object.values(totals).reduce((a, b) => a + b, 0)).toBe(160)
  })
})
