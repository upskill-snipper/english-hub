// @vitest-environment node
import { describe, it, expect } from 'vitest'

import type { TextData } from '@/components/study/InteractiveTextViewer'
import { aqaLitMockExams } from '@/data/mock-exams-aqa-lit'
import { aChristmasCarolText } from '@/data/full-texts/a-christmas-carol'
import { macbethText } from '@/data/full-texts/macbeth'
import { passage } from '@/lib/study-guides/passage'

/**
 * The AQA Literature mock papers print the held editions' words, and their
 * rewritten model answers quote only what the paper prints or the site holds.
 *
 * WHY IT EXISTS (27 September 2026). src/data/mock-exams-aqa-lit.ts, six live
 * papers, printed Macbeth and A Christmas Carol "extracts" that mixed real and
 * invented lines under questions asking for "this extract and elsewhere in the
 * play", three poems presented as Power and Conflict poems that are not in the
 * anthology, and one set of model answers shared by three papers, so that two
 * papers in three quoted a passage they did not print. The docblock of that
 * file says what was found and changed.
 *
 * The extracts there are strings, cut by script with passage() and written
 * in, so that the chunk the mock-exam loader downloads does not carry two
 * whole books. This test is what stops those strings drifting. It cuts each
 * one again from the held edition and compares them word for word and mark
 * for mark, ignoring only the page's layout: speaker names set as "NAME:",
 * brackets round stage directions, and line breaks.
 *
 * It then checks every quotation of two words or more, in double quotation
 * marks, in the rewritten model answers, mark schemes and questions. A
 * quotation on Macbeth must be in the paper's extract or the held Macbeth, one
 * on A Christmas Carol in the extract or the held Carol, a Section C answer on
 * both texts in either held text, a poetry answer in its own paper's poem, and
 * a poetry comparison in the poems this file prints. Case, punctuation and
 * the shape of quotation marks are forgiven; words are not; "..." or " / " may
 * join parts that are each in the same text.
 *
 * The An Inspector Calls section printed "practice compositions in the style
 * of" Priestley under the same "this extract and elsewhere in the play"
 * question until 27 September 2026. The play is in UK copyright and not held,
 * so the section now sets an essay on the whole play with no extract, as the
 * real AQA paper does. The last block below keeps it that way: no extract, no
 * quotation that nothing here could check, and no label anywhere on these
 * papers that calls its own passage fabricated.
 *
 * THE PAPER 2s WERE RETIRED ON 9 OCTOBER 2026. The bank's three Paper 2s
 * shadowed AQA-shaped papers with the same ids in
 * src/data/mock-exams/aqa-lit-p2-a.ts and were removed (see the docblock of
 * src/data/mock-exams-aqa-lit.ts), so the checks below now cover its three
 * Paper 1s; src/__tests__/aqa-lit-p2-a-is-set-as-aqa-sets-it.test.ts guards the
 * Paper 2s students are given.
 *
 * WHAT IT CANNOT SEE. "Ozymandias" and "London" are not held on this site,
 * so nothing here cuts them again: they were cut by script from Project
 * Gutenberg #4800 and #79363 and compared with those files when cut. Nor can
 * it tell whether an answer's claim that a quotation comes from a given act,
 * scene or stave is true; that was checked by hand when the answers were
 * written.
 */

const paper = (id: string) => {
  const p = aqaLitMockExams.find((x) => x.id === id)
  if (!p) throw new Error(`no paper ${id}`)
  return p
}
const question = (paperId: string, section: number) => paper(paperId).sections[section].questions[0]

/** Words and marks only: the layout is the page's, not the edition's. */
const flat = (s: string) =>
  s
    .replace(/^[A-Z][A-Z’' .-]+(?::[ \t]*|[ \t]*$)/gm, '')
    .replace(/[[\]_]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const CUTS: [string, number, TextData, string, string, string][] = [
  [
    'aqa-lit-p1-01',
    0,
    macbethText,
    'actv-scenei',
    'Yet here’s a spot',
    'What’s done cannot be undone',
  ],
  ['aqa-lit-p1-02', 0, macbethText, 'actv-scenev', 'Hang out our banners', 'Signifying nothing'],
  ['aqa-lit-p1-03', 0, macbethText, 'actiii-sceneiv', 'It will have blood', 'young in deed'],
  ['aqa-lit-p1-01', 1, aChristmasCarolText, 'section-5', 'A merry Christmas, Bob', 'Every One'],
  [
    'aqa-lit-p1-02',
    1,
    aChristmasCarolText,
    'section-1',
    'At this festive season',
    'Good afternoon, gentlemen',
  ],
  [
    'aqa-lit-p1-03',
    1,
    aChristmasCarolText,
    'section-2',
    'It matters little',
    'and can release you',
  ],
]

describe('the AQA Literature mock extracts are the held editions', () => {
  it.each(CUTS)(
    '%s section %i prints the held text, cut again',
    (id, section, text, sec, from, to) => {
      const printed = question(id, section).extract ?? ''
      expect(printed.length).toBeGreaterThan(500)
      expect(flat(printed)).toBe(flat(passage(text, sec, from, to)))
    },
  )

  it('names the edition each Paper 1 extract was cut from', () => {
    for (const id of ['aqa-lit-p1-01', 'aqa-lit-p1-02', 'aqa-lit-p1-03']) {
      expect(question(id, 0).extractSource).toContain('Project Gutenberg eBook #1533')
      expect(question(id, 1).extractSource).toContain('Project Gutenberg eBook #46')
    }
  })
})

const held = (t: TextData) =>
  t.sections
    .map((s) =>
      s.content
        .replace(/<br\s*\/?>/g, ' ')
        .replace(/<\/p>/g, ' ')
        .replace(/<[^>]+>/g, ' '),
    )
    .join(' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, '&')

/** Case, punctuation, hyphens and apostrophe shapes forgiven; words not. */
const words = (s: string) =>
  ` ${s
    .toLowerCase()
    .replace(/(\p{L})-(?=\p{L})/gu, '$1')
    .replace(/['‘’]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()} `

const quotations = (t: string) =>
  [...t.matchAll(/"([^"]+)"/g)].map((m) => m[1].trim()).filter((q) => q.split(/\s+/).length >= 2)
const TITLES = new Set(['Ozymandias', 'London', 'My Last Duchess'].map(words))

const MACBETH = words(held(macbethText))
const CAROL = words(held(aChristmasCarolText))

/** The texts each rewritten question may quote from. */
const QUESTIONS: [string, number, () => string[]][] = []
for (const n of ['01', '02', '03']) {
  const p1 = `aqa-lit-p1-${n}`
  QUESTIONS.push(
    [p1, 0, () => [words(question(p1, 0).extract ?? ''), MACBETH]],
    [p1, 1, () => [words(question(p1, 1).extract ?? ''), CAROL]],
    [p1, 2, () => [MACBETH, CAROL]],
  )
}

/** The quotations in `printed` that no text in `hay` contains, and those found. */
function audit(printed: string[], hay: string[]) {
  const found: string[] = []
  const missing: string[] = []
  for (const t of printed) {
    for (const quote of quotations(t)) {
      if (TITLES.has(words(quote))) continue
      const parts = quote
        .split(/\s*(?:\.\.\.|\s\/\s)\s*/)
        .map(words)
        .filter((p) => p.trim())
      if (hay.some((h) => parts.every((p) => h.includes(p)))) found.push(quote)
      else missing.push(quote)
    }
  }
  return { found, missing }
}

describe('the rewritten model answers quote only the texts they are about', () => {
  it.each(QUESTIONS)('%s section %i', (id, section, texts) => {
    const q = question(id, section)
    const { found, missing } = audit(
      [
        ...Object.values(q.modelAnswers ?? {}).flat(),
        ...(Array.isArray(q.markScheme) ? q.markScheme : []),
        q.questionText,
      ],
      texts(),
    )
    expect(missing).toEqual([])
    // A scanner that found nothing would pass everything.
    expect(found.length).toBeGreaterThan(8)
  })

  it('keys each rewritten answer by a grade band the mock-exam page shows', () => {
    // The page asks for these three; the old keys ("Grade 5", "Grade 7",
    // "Grade 9") were never shown to anyone.
    const shown = ['Grade 4-5', 'Grade 6-7', 'Grade 8-9']
    for (const [id, section] of QUESTIONS) {
      expect(Object.keys(question(id, section).modelAnswers ?? {})).toEqual(shown)
    }
  })

  it('fails an invented or altered line, and passes the real one', () => {
    // The reverse test. The old third Macbeth extract finished a line of 1.7
    // that Shakespeare leaves broken off, "falls on the other side"; the play
    // stops at "th' other".
    const altered = audit(
      ['"Vaulting ambition, which o’erleaps itself / And falls on th’ other side"'],
      [MACBETH],
    )
    expect(altered.missing).toHaveLength(1)
    const real = audit(
      ['"Vaulting ambition, which o’erleaps itself / And falls on th’ other"'],
      [MACBETH],
    )
    expect(real.missing).toHaveLength(0)
    // And a real line quoted on the wrong paper: a Carol line is not Macbeth.
    const elsewhere = audit(['"decrease the surplus population"'], [MACBETH])
    expect(elsewhere.missing).toHaveLength(1)
  })
})

describe('nothing on these papers is invented and passed off as a real text', () => {
  const papers = aqaLitMockExams.filter((p) => /^aqa-lit-p1-0[123]$/.test(p.id))

  it('covers the three Paper 1s, and builds no Paper 2', () => {
    expect(papers).toHaveLength(3)
    expect(aqaLitMockExams.filter((p) => p.paperNumber === 2)).toEqual([])
  })

  it('labels every printed passage with the edition it was cut from', () => {
    for (const p of papers)
      for (const s of p.sections)
        for (const q of s.questions) {
          if (!q.extract) continue
          expect(q.extractSource).toMatch(/Project Gutenberg eBook #\d+/)
          expect(q.extractSource).not.toMatch(/fabricated|not verbatim|practice composition/i)
        }
  })
})
