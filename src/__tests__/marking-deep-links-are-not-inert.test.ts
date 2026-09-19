import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { resolvePrefill, markingLink } from '@/lib/marking/submit-prefill'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'

/**
 * Deep links into the marking form, which until now went nowhere.
 *
 * THE DEFECT. /marking/submit read no URL parameters at all - `useSearchParams`
 * and `searchParams` appear nowhere in the page. Any link carrying a board, a
 * paper, a question or a text arrived, was ignored, and left the student on an
 * empty form with no sign that anything had been dropped. Three such links
 * already exist in the product.
 *
 * THE SECOND DEFECT, WHICH IS THE MORE VALUABLE ONE. `studiedText` is accepted
 * by POST /api/submissions, validated, persisted to a real column, and injected
 * into the marking prompt by marker.ts as "STUDIED TEXT / EXTRACT (context
 * only)". The form never sent it. The whole path existed and carried nothing,
 * so every mark was given without knowing which text the answer was about -
 * on an anthology paper where one question id covers thirty different texts.
 *
 * The resolver is pure so this can be tested without a browser, which also
 * matters because this project caps how many test files may use jsdom.
 */

const SCHEMES = Object.values(MARK_SCHEMES)

/** A minimal board registry shaped like the page's own. */
const BOARDS = [
  {
    value: 'Edexcel',
    schemes: SCHEMES.filter((s) => s.id.includes('edexcel')),
  },
  {
    value: 'AQA',
    schemes: SCHEMES.filter((s) => s.id.includes('aqa')),
  },
]

const LANG_A = 'edexcel-igcse-lang-paper1'

describe('a good link fills the form', () => {
  it('resolves board, paper and question together', () => {
    const out = resolvePrefill(new URLSearchParams(`paper=${LANG_A}&question=Q4`), BOARDS, SCHEMES)
    expect(out.board).toBe('Edexcel')
    expect(out.paper).toBe(LANG_A)
    expect(out.question).toBe('Q4')
  })

  it('accepts `scheme` as an alias for `paper`', () => {
    // The rest of the product calls this a scheme. A link written the natural
    // way should not silently fail.
    const out = resolvePrefill(new URLSearchParams(`scheme=${LANG_A}`), BOARDS, SCHEMES)
    expect(out.paper).toBe(LANG_A)
  })

  it('carries the studied text through, which is the point', () => {
    const out = resolvePrefill(
      new URLSearchParams(`paper=${LANG_A}&question=Q5&text=${encodeURIComponent('127 Hours')}`),
      BOARDS,
      SCHEMES,
    )
    expect(out.studiedText).toBe('127 Hours')
  })
})

describe('a bad link fills nothing rather than something wrong', () => {
  it('drops a scheme that does not exist', () => {
    const out = resolvePrefill(new URLSearchParams('paper=not-a-scheme'), BOARDS, SCHEMES)
    expect(out.paper).toBeUndefined()
    expect(out.board).toBeUndefined()
  })

  it('drops a question that belongs to a different paper', () => {
    // The trap: Q4 exists on several schemes. Accepting it because the string
    // matches somewhere would put a question from another paper on this one.
    const lang = MARK_SCHEMES[LANG_A]!
    const foreign = SCHEMES.find(
      (s) => s.id !== LANG_A && s.questions.some((q) => !lang.questions.some((l) => l.id === q.id)),
    )
    const alien = foreign?.questions.find((q) => !lang.questions.some((l) => l.id === q.id))
    expect(alien, 'no question exists that is unique to another scheme').toBeTruthy()
    const out = resolvePrefill(
      new URLSearchParams(`paper=${LANG_A}&question=${alien!.id}`),
      BOARDS,
      SCHEMES,
    )
    expect(out.paper).toBe(LANG_A)
    expect(out.question).toBeUndefined()
  })

  it('drops a paper whose board is not in the picker', () => {
    // Setting a paper whose board is unselected leaves the paper dropdown empty
    // and the form unsubmittable, which is worse than ignoring the link.
    const out = resolvePrefill(
      new URLSearchParams(`paper=${LANG_A}`),
      [{ value: 'OCR', schemes: SCHEMES.filter((s) => s.id.includes('ocr')) }],
      SCHEMES,
    )
    expect(out.paper).toBeUndefined()
  })

  it('returns nothing at all for an empty query', () => {
    expect(resolvePrefill(new URLSearchParams(''), BOARDS, SCHEMES)).toEqual({})
  })

  it('truncates rather than trusting length', () => {
    const long = 'x'.repeat(5000)
    const out = resolvePrefill(new URLSearchParams(`title=${long}&text=${long}`), BOARDS, SCHEMES)
    expect(out.title!.length).toBe(200)
    expect(out.studiedText!.length).toBe(500)
  })
})

describe('markingLink', () => {
  it('round-trips through the resolver, so a link cannot go stale silently', () => {
    // The two halves are written together and tested together. A parameter
    // rename that breaks one breaks this.
    const href = markingLink({ schemeId: LANG_A, questionId: 'Q5', text: 'A Passage to Africa' })
    const query = href.slice(href.indexOf('?') + 1)
    const out = resolvePrefill(new URLSearchParams(query), BOARDS, SCHEMES)
    expect(out.paper).toBe(LANG_A)
    expect(out.question).toBe('Q5')
    expect(out.studiedText).toBe('A Passage to Africa')
  })

  it('points at the marking form', () => {
    expect(markingLink({ schemeId: LANG_A })).toMatch(/^\/marking\/submit\?/)
  })
})

describe('the page actually consumes this', () => {
  // A resolver nothing calls would pass every test above and change nothing.
  const PAGE = readFileSync(join(process.cwd(), 'src/app/marking/submit/page.tsx'), 'utf8')
  const code = PAGE.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

  it('calls resolvePrefill', () => {
    expect(code).toContain('resolvePrefill(')
  })

  it('sends studiedText to the submission spine', () => {
    // The whole reason the second defect was worth fixing.
    expect(code).toMatch(/studiedText:\s*args\.studiedText/)
    expect(code).toMatch(/studiedText:\s*studiedText\.trim\(\)/)
  })

  it('does not overwrite something the student has already typed', () => {
    expect(code).toMatch(/setStudiedText\(\(current\) => current \|\|/)
    expect(code).toMatch(/setPaper\(\(current\) => current \|\|/)
  })
})
