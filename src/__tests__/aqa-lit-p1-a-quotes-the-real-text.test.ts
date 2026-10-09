// @vitest-environment node
import { describe, it, expect } from 'vitest'

import type { TextData } from '@/components/study/InteractiveTextViewer'
import { aqaLitP1Papers } from '@/data/mock-exams/aqa-lit-p1-a'
import { aChristmasCarolText } from '@/data/full-texts/a-christmas-carol'
import { jekyllAndHydeText } from '@/data/full-texts/jekyll-and-hyde'
import { macbethText } from '@/data/full-texts/macbeth'
import { passage } from '@/lib/study-guides/passage'

/**
 * The five AQA Literature Paper 1 mock papers in src/data/mock-exams/
 * aqa-lit-p1-a.ts print the held Macbeth, and their model answers quote only
 * what the paper prints or the site holds.
 *
 * WHY IT EXISTS (27 September 2026). Those papers, all live, printed five
 * Macbeth "extracts" that were written for the bank and labelled "Original
 * composition in the style of Shakespeare's Macbeth", under questions that
 * said "Read the following extract from Macbeth". The model answers analysed
 * the invented lines, and the essay answers misquoted Jekyll and Hyde and A
 * Christmas Carol. The file's docblock says what was found and changed.
 *
 * The extracts are strings, cut by script with passage() and written in, so
 * that the chunk the mock-exam loader downloads does not carry the whole play.
 * This test is what stops those strings drifting: it cuts each one again from
 * the held edition and compares them word for word and mark for mark, then
 * exactly as the bank sets out a play, speakers' names included (setOut).
 *
 * It then checks every quotation of two words or more, in double quotation
 * marks, in each question, model answer and mark scheme. A Section A
 * quotation must be in that paper's extract or the held Macbeth; a Section B
 * quotation in the held novel the question is on. First by words, forgiving
 * case, punctuation and the shape of apostrophes, then by words and marks
 * (unmarked); "..." or " / " may join parts that are each in the same text. Chapter titles count as the text, so
 * "Full Statement" is found in Jekyll's last chapter heading. The three quoted
 * phrases that are not a set text's words are listed below, each with its
 * reason.
 *
 * WIDENED 9 OCTOBER 2026, when Section B became AQA's question on a printed
 * extract (see the data file's docblock). It now also cuts each Section B
 * extract again from the held novel and compares it exactly, and holds every
 * Section B quotation to that extract or to one stave or chapter, where it had
 * accepted words found anywhere in the book. And a NOT_THE_TEXT entry that no
 * answer quotes any more fails, so the list cannot outlive its reasons.
 */

const questions = aqaLitP1Papers.flatMap((p) => p.sections.map((s) => s.questions[0]))
const question = (id: string) => {
  const q = questions.find((x) => x.id === id)
  if (!q) throw new Error(`no question ${id}`)
  return q
}

/** Words and marks only: the layout is the page's, not the edition's. */
const flat = (s: string) =>
  s
    .replace(/^[A-Z][A-Z’' .-]+(?::[ \t]*|[ \t]*$)/gm, '')
    .replace(/[[\]_]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const decode = (s: string) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")

/**
 * The cut as the bank sets out a play: the edition's paragraphs, each
 * speaker's name on its own line above the speech, stage directions in
 * brackets without the italic underscores. Built from the edition's own
 * markup, so the printed extract can be compared exactly.
 *
 * ADDED ON REVIEW (27 September 2026). The comparison above, `flat`, strips
 * every capitalised line, which removes the speakers' names, so an extract
 * that gave Lady Macbeth's line to Macbeth passed it. Speakers matter most in
 * the scenes these papers print: the Act 2 Scene 2 extract is twenty-two
 * short speeches, several of one word.
 */
function setOut(sectionId: string, from: string, to: string) {
  const content = macbethText.sections.find((s) => s.id === sectionId)?.content ?? ''
  const directions = new Set(
    content
      .split(/<\/p>\s*/)
      .filter((b) => /^<p class="italic/.test(b.trim()))
      .map((b) => decode(b.replace(/<[^>]+>/g, '').trim())),
  )
  return passage(macbethText, sectionId, from, to)
    .split('\n\n')
    .map((b) =>
      directions.has(b) ? `[${b.replace(/_/g, '').replace(/^\[|\]$/g, '')}]` : b.replace(/_/g, ''),
    )
    .join('\n\n')
}

const CUTS: [string, string, string, string, string][] = [
  [
    'aqa-lit-p1-a-q1',
    'Act 2, Scene 1',
    'actii-scenei',
    'Go bid thy mistress',
    'summons thee to heaven',
  ],
  ['aqa-lit-p1-b-q1', 'Act 1, Scene 7', 'acti-scenevii', 'I dare do all', 'false heart doth know'],
  [
    'aqa-lit-p1-c-q1',
    'Act 5, Scene 5',
    'actv-scenev',
    'Hang out our banners',
    'Signifying nothing',
  ],
  ['aqa-lit-p1-d-q1', 'Act 1, Scene 3', 'acti-sceneiii', 'So foul and fair', 'Speak, I charge you'],
  ['aqa-lit-p1-e-q1', 'Act 2, Scene 2', 'actii-sceneii', 'I have done the deed', 'dare not'],
]

describe('the aqa-lit-p1-a Macbeth extracts are the held edition', () => {
  it.each(CUTS)('%s prints %s, cut again', (id, where, sec, from, to) => {
    const q = question(id)
    const printed = q.extract ?? ''
    expect(printed.length).toBeGreaterThan(1000)
    expect(flat(printed)).toBe(flat(passage(macbethText, sec, from, to)))
    // And exactly, speakers' names included.
    expect(printed).toBe(setOut(sec, from, to))
    expect(q.extractSource).toBe(
      `William Shakespeare, Macbeth, ${where} (Project Gutenberg eBook #1533)`,
    )
    // The question names the same scene, as AQA's papers do.
    expect(q.questionText).toContain(`from ${where.replace(',', '')} of Macbeth`)
  })

  it('fails a speech given to the wrong speaker', () => {
    // The reverse test for setOut: the words-only comparison cannot see this.
    const printed = question('aqa-lit-p1-e-q1').extract ?? ''
    const swapped = printed.replace('LADY MACBETH\nAy.', 'MACBETH\nAy.')
    expect(swapped).not.toBe(printed)
    expect(flat(swapped)).toBe(flat(printed))
    expect(swapped).not.toBe(setOut('actii-sceneii', 'I have done the deed', 'dare not'))
  })

  it('labels no extract as a composition', () => {
    for (const q of questions)
      expect(q.extractSource ?? '').not.toMatch(/original|composition|in the style of/i)
  })
})

/** Paper, edition, section, cut, the extract's source line, and where the question says it is from. */
const NOVEL_CUTS: [string, TextData, string, string, string, string, string][] = [
  [
    'aqa-lit-p1-a-q2',
    aChristmasCarolText,
    'section-1',
    'Oh! But he was a tight-fisted hand',
    'nuts',
    'Charles Dickens, A Christmas Carol, Stave 1 (Project Gutenberg eBook #46)',
    'Chapter 1 of A Christmas Carol',
  ],
  [
    'aqa-lit-p1-b-q2',
    jekyllAndHydeText,
    'section-1',
    'It chanced on one of these rambles',
    'very odd story',
    'Robert Louis Stevenson, The Strange Case of Dr Jekyll and Mr Hyde, Chapter 1 (Project Gutenberg eBook #43)',
    'Chapter 1 (Story of the Door) of The Strange Case of Dr Jekyll and Mr Hyde',
  ],
  [
    'aqa-lit-p1-c-q2',
    aChristmasCarolText,
    'section-3',
    'Forgive me if I am not justified',
    'Are there no workhouses?',
    'Charles Dickens, A Christmas Carol, Stave 3 (Project Gutenberg eBook #46)',
    'Chapter 3 of A Christmas Carol',
  ],
  [
    'aqa-lit-p1-d-q2',
    jekyllAndHydeText,
    'section-1',
    'The pair walked on again for a while',
    'With all my heart',
    'Robert Louis Stevenson, The Strange Case of Dr Jekyll and Mr Hyde, Chapter 1 (Project Gutenberg eBook #43)',
    'Chapter 1 (Story of the Door) of The Strange Case of Dr Jekyll and Mr Hyde',
  ],
  [
    'aqa-lit-p1-e-q2',
    aChristmasCarolText,
    'section-3',
    'Such a bustle ensued',
    'a small pudding for a large family',
    'Charles Dickens, A Christmas Carol, Stave 3 (Project Gutenberg eBook #46)',
    'Chapter 3 of A Christmas Carol',
  ],
]

describe('the aqa-lit-p1-a novel extracts are the held editions', () => {
  it.each(NOVEL_CUTS)(
    '%s prints its extract, cut again',
    (id, text, sec, from, to, source, where) => {
      const q = question(id)
      // The edition marks italics with underscores, which the papers drop, as
      // they drop them from Macbeth; nothing else may differ.
      expect(q.extract).toBe(passage(text, sec, from, to).replace(/_/g, ''))
      expect(q.extractSource).toBe(source)
      expect(q.questionText).toContain(`from ${where} and then answer`)
    },
  )
})

/** Each section of an edition, as one string. */
const sectionsOf = (t: TextData) =>
  t.sections.map((s) =>
    `${s.title} ${s.content}`
      .replace(/<br\s*\/?>/g, ' ')
      .replace(/<\/p>/g, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&quot;/g, '"')
      .replace(/&#39;|&apos;/g, "'")
      .replace(/&amp;/g, '&'),
  )

const held = (t: TextData) =>
  t.sections
    .map((s) =>
      `${s.title} ${s.content}`
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

/** Quoted, but not a set text's words, and meant not to be. */
const NOT_THE_TEXT = new Set(
  [
    'turn into', // a gloss on Macbeth's "become", aqa-lit-p1-b-q1
  ].map(words),
)

const MACBETH = words(held(macbethText))
const CAROL = words(held(aChristmasCarolText))
const JEKYLL = words(held(jekyllAndHydeText))

/** The texts each question may quote from. */
const HAY: [string, () => string[]][] = [
  ...CUTS.map(([id]): [string, () => string[]] => [
    id,
    () => [words(question(id).extract ?? ''), MACBETH],
  ]),
  // A Section B quotation is in its extract or in one stave or chapter.
  ...NOVEL_CUTS.map(([id, text]): [string, () => string[]] => [
    id,
    () => [words(question(id).extract ?? ''), ...sectionsOf(text).map(words)],
  ]),
]

/** The quotations in `printed` that no text in `hay` contains, and those found. */
function audit(printed: string[], hay: string[]) {
  const found: string[] = []
  const missing: string[] = []
  for (const t of printed) {
    for (const quote of quotations(t)) {
      if (NOT_THE_TEXT.has(words(quote))) continue
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

/**
 * Marks as well as words. Forgiven: the shapes of apostrophes and quotation
 * marks (a quotation inside a quotation takes single marks, so Macbeth's
 * “Amen” is quoted as 'Amen'), the case of a quotation's first letter and
 * the punctuation that closes it.
 *
 * ADDED ON REVIEW (27 September 2026). `words` forgives all punctuation, so
 * the data file's claim that every quotation follows the held edition's
 * punctuation ("wither'd murder", "Tomorrow, and tomorrow, and tomorrow") was
 * checked by nothing. It holds; this keeps it holding.
 */
const marks = (s: string) =>
  s
    .replace(/[’‘“”"]/g, "'")
    .replace(/_/g, '')
    .replace(/\s+/g, ' ')
    .trim()
const bare = (p: string) => marks(p).replace(/^[\s'(]+|[\s.,;:!?')]+$/g, '')
const either = (p: string) => [p, p[0].toUpperCase() + p.slice(1), p[0].toLowerCase() + p.slice(1)]

/** The quotations in `printed` whose words and marks no text in `hay` holds. */
function unmarked(printed: string[], hay: string[]) {
  const missing: string[] = []
  for (const t of printed)
    for (const quote of quotations(t)) {
      if (NOT_THE_TEXT.has(words(quote))) continue
      const parts = quote
        .split(/\s*(?:\.\.\.|\s\/\s)\s*/)
        .map(bare)
        .filter(Boolean)
      if (!hay.some((h) => parts.every((p) => either(p).some((v) => h.includes(v)))))
        missing.push(quote)
    }
  return missing
}

const MACBETH_MARKS = marks(held(macbethText))
const marksHay = (id: string) => {
  if (CUTS.some(([cut]) => cut === id)) return [marks(question(id).extract ?? ''), MACBETH_MARKS]
  const text = NOVEL_CUTS.find(([cut]) => cut === id)![1]
  return [marks(question(id).extract ?? ''), ...sectionsOf(text).map(marks)]
}

describe('the aqa-lit-p1-a model answers quote only the texts they are about', () => {
  it('covers all ten questions', () => {
    expect(HAY.map(([id]) => id).sort()).toEqual(questions.map((q) => q.id).sort())
  })

  it.each(HAY)('%s', (id, texts) => {
    const q = question(id)
    const printed = [
      ...Object.values(q.modelAnswers ?? {}).flat(),
      ...(Array.isArray(q.markScheme) ? q.markScheme : []),
      q.questionText,
    ]
    const { found, missing } = audit(printed, texts())
    expect(missing).toEqual([])
    // A scanner that found nothing would pass everything.
    expect(found.length).toBeGreaterThan(8)
    // And the edition's punctuation, not only its words.
    expect(unmarked(printed, marksHay(id))).toEqual([])
  })

  it('lists no quotation in NOT_THE_TEXT that nothing quotes any more', () => {
    const quoted = questions
      .flatMap((q) => [
        ...Object.values(q.modelAnswers ?? {}).flat(),
        ...(Array.isArray(q.markScheme) ? q.markScheme : []),
        q.questionText,
      ])
      .flatMap(quotations)
      .map(words)
    expect([...NOT_THE_TEXT].filter((n) => !quoted.includes(n))).toEqual([])
  })

  it('fails an invented or altered line, and passes the real one', () => {
    // The reverse test. The old first extract opened with an invented line
    // where the dagger soliloquy should be, and an old answer changed
    // Macduff's "feel it as a man" into "feeling it as a man".
    expect(
      audit(['"The crown yet floating just beyond my reach"'], [MACBETH]).missing,
    ).toHaveLength(1)
    expect(audit(['"The handle toward my hand"'], [MACBETH]).missing).toHaveLength(0)
    expect(audit(['"feeling it as a man"'], [MACBETH]).missing).toHaveLength(1)
    expect(audit(['"I must also feel it as a man"'], [MACBETH]).missing).toHaveLength(0)
    // And a real line of one book quoted as another's.
    expect(audit(['"a vacant seat"'], [JEKYLL]).missing).toHaveLength(1)
    expect(audit(['"a vacant chair"'], [CAROL]).missing).toHaveLength(1)
    // The marks: a comma dropped fails, the edition's line passes, and a
    // quotation inside a quotation may take single marks.
    expect(unmarked(['"Tomorrow, and tomorrow and tomorrow"'], [MACBETH_MARKS])).toHaveLength(1)
    expect(unmarked(['"Tomorrow, and tomorrow, and tomorrow"'], [MACBETH_MARKS])).toHaveLength(0)
    expect(unmarked(['"could not I pronounce \'Amen\'?"'], [MACBETH_MARKS])).toHaveLength(0)
    expect(unmarked(['"their sense is shut"'], [MACBETH_MARKS])).toHaveLength(1)
  })
})
