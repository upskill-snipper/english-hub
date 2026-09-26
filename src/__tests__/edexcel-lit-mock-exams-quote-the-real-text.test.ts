// @vitest-environment node
import { describe, it, expect } from 'vitest'

import type { TextData } from '@/components/study/InteractiveTextViewer'
import { edexcelLitMockExams } from '@/data/mock-exams-edexcel-lit'
import { aChristmasCarolText } from '@/data/full-texts/a-christmas-carol'
import { jekyllAndHydeText } from '@/data/full-texts/jekyll-and-hyde'
import { macbethText } from '@/data/full-texts/macbeth'
import { romeoAndJulietText } from '@/data/full-texts/romeo-and-juliet'

/**
 * The six Edexcel Literature mock papers in src/data/mock-exams-edexcel-lit.ts
 * print the held editions' words, and their model answers quote only what the
 * paper prints or the site holds.
 *
 * WHY IT EXISTS (27 September 2026). Those papers printed extracts typed from
 * no edition. Four put invented lines under Shakespeare's, Dickens's and
 * Stevenson's names (Marley's "Every man must justify his existence", Jekyll's
 * "violence of imitation", Magwitch's "Show me the way up", "O, I am fortune's
 * fool" printed twice), a fifth printed 147 words believed not to be
 * Priestley's from a play in UK copyright, and the model answers analysed the
 * invented lines as the authors'. The file's docblock says what was found and
 * changed.
 *
 * The held passages there are cut by passage() and playPassage() when the
 * module loads, so comparing them with a second cut would prove nothing. This
 * test finds each one, word for word and mark for mark, in the text of the
 * section its label names, without passage(): only the page's layout is
 * ignored (speaker names, brackets round stage directions, the edition's
 * italic underscores, line breaks). scripts/check-mock-exam-extracts.mjs
 * reads extracts as string literals and cannot see these cuts at all.
 *
 * It then checks every quotation of two words or more, in double quotation
 * marks, in each question, model answer and mark scheme on a held text: an
 * extract question's must be in its extract, an essay's in the held work.
 * Only quotation-mark shapes and whitespace are forgiven, not punctuation,
 * because two of the old extracts had the right words in another edition's
 * punctuation; "..." or " / " may join parts that are each in the text.
 *
 * WHAT IT CANNOT SEE. Great Expectations is not held: its extract was cut by
 * script from Project Gutenberg #1400, which the extract scanner compares it
 * with when that text is cached, and the Great Expectations essay answer is
 * not checked. An Inspector Calls is in UK copyright and not held; the test
 * only makes sure the paper prints none of it.
 */

const all = edexcelLitMockExams.flatMap((p) =>
  p.sections.flatMap((s) => s.questions.map((q) => ({ paper: p.id, ...q }))),
)
const question = (paper: string, id: string) => {
  const q = all.find((x) => x.paper === paper && x.id === id)
  if (!q) throw new Error(`no question ${paper}/${id}`)
  return q
}

/** A section as plain text, a paragraph or verse line to a line. */
const sectionText = (t: TextData, id: string) => {
  const s = t.sections.find((x) => x.id === id)
  if (!s) throw new Error(`no section ${id} in ${t.title}`)
  return s.content
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<\/p>/g, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, '&')
}

/** Words and marks only: the layout is the page's, not the edition's. */
const flat = (s: string) =>
  s
    .replace(/^[A-Z][A-Z’' .-]+(?::[ \t]*|[ \t]*$)/gm, '')
    .replace(/[[\]_]/g, '')
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim()

/** Paper, question, held text, section id, and the label the paper prints. */
const CUTS: [string, string, TextData, string, string][] = [
  [
    'edexcel-lit-001',
    'q1',
    romeoAndJulietText,
    'actiii-scenei',
    'William Shakespeare, Romeo and Juliet, Act 3, Scene 1. Text: Project Gutenberg #1513.',
  ],
  [
    'edexcel-lit-001',
    'q3',
    romeoAndJulietText,
    'actii-sceneii',
    'William Shakespeare, Romeo and Juliet, Act 2, Scene 2. Text: Project Gutenberg #1513.',
  ],
  [
    'edexcel-lit-002',
    'q1',
    macbethText,
    'actv-scenev',
    'William Shakespeare, Macbeth, Act 5, Scene 5. Text: Project Gutenberg #1533.',
  ],
  [
    'edexcel-lit-003',
    'q1',
    aChristmasCarolText,
    'section-1',
    'Charles Dickens, A Christmas Carol (1843), Stave 1. Text: Project Gutenberg #46.',
  ],
  [
    'edexcel-lit-004',
    'q1',
    jekyllAndHydeText,
    'section-10',
    'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886), Chapter 10. Text: Project Gutenberg #43.',
  ],
]

describe('the Edexcel Literature extracts are the held editions', () => {
  it('covers every extract the papers print', () => {
    const printed = all.filter((q) => q.extract).map((q) => `${q.paper}/${q.id}`)
    expect(printed.sort()).toEqual(
      [...CUTS.map(([p, q]) => `${p}/${q}`), 'edexcel-lit-006/q1'].sort(),
    )
  })

  it.each(CUTS)('%s %s is in the section its label names', (paper, id, text, sec, label) => {
    const q = question(paper, id)
    expect((q.extract ?? '').split(/\s+/).length).toBeGreaterThan(150)
    expect(flat(sectionText(text, sec))).toContain(flat(q.extract ?? ''))
    expect(q.extractSource).toBe(label)
  })

  it('prints Great Expectations from the marsh paragraph to the bread, and no invented ending', () => {
    const ge = question('edexcel-lit-006', 'q1').extract ?? ''
    expect(ge.startsWith('Ours was the marsh country')).toBe(true)
    expect(ge.trim().endsWith('ate the bread ravenously.')).toBe(true)
    expect(ge).not.toMatch(/Show me the way up|low church down|moon/)
  })

  it('prints none of An Inspector Calls, and none of the invented lines', () => {
    expect(all.filter((q) => q.paper === 'edexcel-lit-005' && q.extract)).toEqual([])
    const everything = JSON.stringify(edexcelLitMockExams)
    for (const invented of [
      'justify his existence',
      'bound up in some such chain',
      'violence of imitation',
      'as a chemist accepts',
      'Show me the way up',
      'the watch approaches',
      'smirked at me',
    ])
      expect(everything).not.toContain(invented)
    expect(question('edexcel-lit-001', 'q1').extract?.match(/fortune’s fool/g)).toHaveLength(1)
  })
})

const whole = (t: TextData) => flat(t.sections.map((s) => sectionText(t, s.id)).join('\n\n'))
const WORKS: [RegExp, string][] = [
  [/Romeo and Juliet/, whole(romeoAndJulietText)],
  [/Macbeth/, whole(macbethText)],
  [/A Christmas Carol/, whole(aChristmasCarolText)],
  [/Jekyll/, whole(jekyllAndHydeText)],
]

/** A title in quotation marks names the book; it does not quote it. */
const BOOK_TITLES = new Set(['Dr Jekyll and Mr Hyde'])

const quotations = (t: string) =>
  [...t.matchAll(/"([^"]+)"/g)]
    .map((m) => m[1].trim())
    .filter((q) => q.split(/\s+/).length >= 2 && !BOOK_TITLES.has(q))

/** The quotations in `printed` that `hay` does not contain, and those it does. */
function audit(printed: string[], hay: string) {
  const found: string[] = []
  const missing: string[] = []
  for (const t of printed)
    for (const quote of quotations(t)) {
      const parts = quote
        .split(/\s*(?:\.\.\.|\s\/\s)\s*/)
        .map(flat)
        .filter(Boolean)
      if (parts.every((p) => hay.includes(p))) found.push(quote)
      else missing.push(quote)
    }
  return { found, missing }
}

const TITLES = Object.fromEntries(edexcelLitMockExams.map((p) => [p.id, p.title]))
const checked = all.filter(
  (q) => q.modelAnswer && WORKS.some(([re]) => re.test(TITLES[q.paper] + q.questionText)),
)

describe('the Edexcel Literature answers quote only the extract or the work', () => {
  it('checks the answers on every held text', () => {
    // 001 q1, q2, q3; 002 q1, q2; 003 q1, q2; 004 q1, q2.
    expect(checked.map((q) => `${q.paper}/${q.id}`)).toHaveLength(9)
  })

  it.each(checked.map((q) => [q.paper, q.id]))('%s %s', (paper, id) => {
    const q = question(paper, id)
    const work = WORKS.find(([re]) => re.test(TITLES[paper] + q.questionText))![1]
    const { found, missing } = audit(
      [q.modelAnswer ?? '', q.markScheme ?? '', q.questionText],
      q.extract ? flat(q.extract) : work,
    )
    expect(missing).toEqual([])
    // A scanner that found nothing would pass everything.
    expect(found.length).toBeGreaterThan(q.extract ? 8 : 0)
  })

  it('fails an altered line, and passes the real one', () => {
    // The reverse test, with forms the old papers printed.
    const mac = WORKS[1][1]
    expect(audit(['"To-morrow, and to-morrow, and to-morrow"'], mac).missing).toHaveLength(1)
    expect(audit(['"Tomorrow, and tomorrow, and tomorrow"'], mac).missing).toHaveLength(0)
    const carol = WORKS[2][1]
    expect(audit(['"Every man must justify his existence"'], carol).missing).toHaveLength(1)
    expect(audit(['"I wear the chain I forged in life"'], carol).missing).toHaveLength(0)
  })
})
