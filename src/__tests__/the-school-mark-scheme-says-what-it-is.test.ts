import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { VERIFIED_SPECS } from '@/lib/marking/examiner/verification'

/**
 * EXAM-9, first part. The school portal showed teachers a mark scheme that is
 * not one.
 *
 * This repository has two mark-scheme corpora. `src/lib/marking/mark-schemes/`
 * is what the AI marker and the examiner tool read, and it carries a
 * verification registry whose rule is explicit:
 *
 *   "A scheme appears in VERIFIED_SPECS only when someone has put the pack side
 *    by side with the board's own published material... Everything else is
 *    unverified and says so, loudly, on every surface a teacher can reach."
 *
 * `src/data/mark-scheme-questions.ts` is the other one. It has never been
 * checked against any specification, it is opted out of type checking with
 * `@ts-nocheck`, and the September audit found entries filed under papers they
 * do not appear on - a "Q3 - Language analysis in detail" and a "Section C -
 * Unseen poetry" on AQA Paper 1 among them.
 *
 * `MarkSchemeViewer` renders it to teachers, with a Print button, and said
 * nothing. A teacher could print it and award marks from it.
 *
 * WHAT THIS CHANGE IS AND IS NOT. It does not correct the data: deciding what
 * AQA Paper 1 Question 3 really is worth is a claim about the real world, and
 * the registry above exists precisely because guessing at those is how this
 * started. It makes the surface honest about what it is showing, which is the
 * part that can be done tonight without inventing anything.
 */

const ROOT = process.cwd()
const VIEWER = readFileSync(join(ROOT, 'src/components/school/MarkSchemeViewer.tsx'), 'utf8')
const DATA = readFileSync(join(ROOT, 'src/data/mark-scheme-questions.ts'), 'utf8')

describe('the corpus really is the unverified one', () => {
  it('none of its papers appears in the verification registry', () => {
    // The registry is keyed by the OTHER corpus's scheme ids. If one of these
    // boards ever gets verified entries, this file's premise changes and this
    // test is where that should be noticed.
    const verified = Object.keys(VERIFIED_SPECS)
    expect(verified.length).toBeGreaterThan(0)
    for (const id of verified) {
      expect(id).toMatch(/^[a-z]+-/)
    }
  })

  it('and it is still opted out of type checking, which is part of why', () => {
    expect(DATA.startsWith('// @ts-nocheck')).toBe(true)
  })

  it('and it still contains the entries the audit flagged', () => {
    // Not corrected here, deliberately. Asserted so that if somebody does
    // correct them, they come back to this file and reconsider the notice.
    expect(DATA).toContain('Q3 - Language analysis in detail')
    expect(DATA).toContain('Section C - Unseen poetry')
  })
})

describe('the viewer says so', () => {
  it('states that the criteria are unchecked', () => {
    expect(VIEWER).toContain('not been checked against the boards')
  })

  it('tells the teacher what to do instead', () => {
    // A caveat with no instruction is a disclaimer. This one has to send them
    // to the board's own documents before a mark is awarded.
    expect(VIEWER).toContain('check the board')
    expect(VIEWER).toContain('own documents before awarding a mark')
  })

  it('and says the AI marker does not use it', () => {
    // The two corpora disagree. A teacher comparing their own mark with the
    // AI's needs to know they are not reading the same source.
    expect(VIEWER).toContain('AI marking does not use this reference')
  })

  it('and calls it a teaching aid rather than a mark scheme', () => {
    expect(VIEWER).toContain('teaching aid, not as a mark scheme')
  })
})

describe('the notice survives printing', () => {
  it('is not hidden from print', () => {
    // THE ASSERTION THAT MATTERS. The viewer has a Print button, and a printed
    // sheet is what a teacher marks from at a desk with no screen in front of
    // them. A caveat that vanishes at exactly that moment is worse than none,
    // because the printed page then looks like an official document.
    const block = VIEWER.slice(
      VIEWER.indexOf('These criteria have not been checked') - 1200,
      VIEWER.indexOf('These criteria have not been checked'),
    )
    expect(block).not.toContain('print:hidden')
  })

  it('while the controls around it are', () => {
    // The counterweight: removing print:hidden everywhere would satisfy the
    // assertion above by printing the filter dropdowns too.
    expect(VIEWER).toContain('print:hidden')
  })
})

describe('the data file records its own status', () => {
  it('at the top, where a reader starts', () => {
    expect(DATA).toContain('UNVERIFIED. NOT A MARK SCHEME.')
  })

  it('and names the corpus that is authoritative', () => {
    expect(DATA).toContain('src/lib/marking/mark-schemes/')
  })

  it('and ties itself to the notice, so neither is removed alone', () => {
    expect(DATA).toContain('if you remove it, remove this too')
  })
})
