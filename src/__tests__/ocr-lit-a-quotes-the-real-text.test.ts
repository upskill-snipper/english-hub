// @vitest-environment node
import { describe, it, expect } from 'vitest'

import type { TextData } from '@/components/study/InteractiveTextViewer'
import { ocrLitPapers } from '@/data/mock-exams/ocr-lit-a'
import { macbethText } from '@/data/full-texts/macbeth'
import { playPassage } from '@/lib/study-guides/passage'

/**
 * The five OCR Literature mock papers in src/data/mock-exams/ocr-lit-a.ts
 * print the held Macbeth, and their model answers quote only what the paper
 * prints or the site holds.
 *
 * WHY IT EXISTS (27 September 2026). Those papers, all live, printed five
 * Macbeth extracts typed from another edition, with no edition named: 20% to
 * 60% of their sentences were the held edition's word for word, one read
 * "What is" for Seyton's "What's", and one hid a cut in Macbeth's Act 5
 * Scene 3 speech. The model answers quoted those forms, misquoted the rest of
 * the play ("unseamed ... th' chops", "they placed a fruitless crown") and
 * gave Lady Macbeth's "A little water clears us of this deed" to Macbeth. The
 * file's docblock says what was found and changed.
 *
 * The extracts are strings, cut by script with playPassage() and written in,
 * so that the chunk the mock-exam loader downloads does not carry the whole
 * play. This test is what stops those strings drifting: it sets each one out
 * again as playPassage() sets a cut and compares it with a fresh cut, speaker
 * names included, so only the separators may differ.
 *
 * WHAT A REVIEW ADDED (27 September 2026). The first version of this test
 * removed the speaker names from both sides before comparing, so a line
 * moved from one speaker to the next would have passed; it now compares them.
 * It accepted a quotation whose parts were anywhere in the play, so two lines
 * from different scenes joined by "..." would have passed; the parts must now
 * be in one scene. And it forgave punctuation and line breaks, which is how
 * the poetry answers came to quote "shadows wore the brighter face / and
 * darkness held the truest grace" with a line missing between, and "A
 * syllable. / A colour." as "a syllable, / a colour"; the second check below
 * holds every quotation in all 25 questions to the words, stops and line
 * breaks of the text it quotes.
 *
 * WHAT IT DOES NOT CHECK. The poems are labelled as original compositions and
 * attributed to no one, so there is no text to hold them against; only the
 * answers' quotations of them are checked.
 */

const papers = ocrLitPapers
const allQuestions = papers.flatMap((p) =>
  p.sections.flatMap((s) =>
    s.questions.map((q) => ({ paper: p.id, macbeth: /Macbeth/.test(s.title), q })),
  ),
)
const questions = allQuestions.filter((x) => x.macbeth).map((x) => x.q)
const question = (id: string) => {
  const q = questions.find((x) => x.id === id)
  if (!q) throw new Error(`no question ${id}`)
  return q
}

/** A speaker's name on a line of its own, as this file and the edition print it. */
const SPEAKER = /^[A-Z][A-Z’' .-]+$/

/**
 * The printed extract set out as playPassage() sets a cut: a speech as
 * "SPEAKER: line / line", every block joined by " / ". Only separators change.
 */
const asCut = (printed: string) =>
  printed
    .split('\n\n')
    .map((block) => {
      const [first, ...rest] = block.split('\n')
      return SPEAKER.test(first) && rest.length > 0
        ? `${first}: ${rest.join(' / ')}`
        : block.split('\n').join(' / ')
    })
    .join(' / ')

/** Paper, scene on the label, section id, and the cut's first and last phrases. */
const CUTS: [string, string, string, string, string][] = [
  ['ocr-lit-01', 'Act 2 Scene 1', 'actii-scenei', 'Go bid thy mistress', 'heaven or to hell'],
  ['ocr-lit-02', 'Act 1 Scene 5', 'acti-scenev', 'Give him tending', 'Hold, hold'],
  ['ocr-lit-03', 'Act 5 Scene 5', 'actv-scenev', 'The Queen, my lord, is dead', 'a moving grove'],
  ['ocr-lit-04', 'Act 5 Scene 3', 'actv-sceneiii', 'Take thy face hence', 'How does your patient'],
  [
    'ocr-lit-05',
    'Act 1 Scene 7',
    'acti-scenevii',
    'We will proceed no further',
    'Have done to this',
  ],
]

describe('the ocr-lit-a Macbeth extracts are the held edition', () => {
  it('covers every Macbeth question', () => {
    expect(questions).toHaveLength(10)
    expect(CUTS.map(([paper]) => paper).sort()).toEqual(papers.map((p) => p.id).sort())
  })

  it.each(CUTS)('%s prints %s, cut again', (paper, where, sec, from, to) => {
    for (const part of ['q1a', 'q1b']) {
      const q = question(`${paper}-${part}`)
      const printed = q.extract ?? ''
      expect(printed.length).toBeGreaterThan(600)
      expect(asCut(printed)).toBe(playPassage(macbethText, sec, from, to))
      expect(q.extractSource).toBe(
        `William Shakespeare, Macbeth, ${where} (text: Project Gutenberg #1533)`,
      )
    }
  })

  it('fails a line given to the wrong speaker', () => {
    // The reverse test: Seyton's reply moved into Macbeth's speech.
    const printed = question('ocr-lit-04-q1a').extract ?? ''
    const moved = printed.replace(
      'Seyton!—\n\n[Enter Seyton.]\n\nSEYTON\n',
      'Seyton!—\n\n[Enter Seyton.]\n\n',
    )
    expect(moved).not.toBe(printed)
    expect(asCut(moved)).not.toBe(
      playPassage(macbethText, 'actv-sceneiii', 'Take thy face hence', 'How does your patient'),
    )
  })
})

const decode = (s: string) =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, '&')

/** One scene as plain text, its verse lines kept on lines of their own. */
const sceneText = (content: string) =>
  decode(
    content
      .replace(/<br\s*\/?>/g, '\n')
      .replace(/<\/p>/g, '\n\n')
      .replace(/<[^>]+>/g, ''),
  )

const SCENES = macbethText.sections.map((s) => `${s.title}\n\n${sceneText(s.content)}`)

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

/** The quotations in `printed` whose words no single text in `hay` contains, and those found. */
function audit(printed: string[], hay: string[]) {
  const found: string[] = []
  const missing: string[] = []
  const texts = hay.map(words)
  for (const t of printed) {
    for (const quote of quotations(t)) {
      const parts = quote
        .split(/\s*(?:\.\.\.|\s\/\s)\s*/)
        .map(words)
        .filter((p) => p.trim())
      if (texts.some((h) => parts.every((p) => h.includes(p)))) found.push(quote)
      else missing.push(quote)
    }
  }
  return { found, missing }
}

/**
 * Lines joined by " / " (a stanza break too), speaker names and bracketed
 * directions dropped, quotation marks and apostrophes removed (an essay puts
 * single marks round the edition's double, and straight for curly); words,
 * stops and line breaks kept.
 */
const lined = (s: string) =>
  s
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !SPEAKER.test(l) && !/^\[.*\]$/.test(l))
    .join(' / ')
    .replace(/['‘’"“”_]/g, '')
    .replace(/[—–]/g, '-')
    .replace(/\s+/g, ' ')

/**
 * Whether `quote` is in `hay` as printed, with its line breaks as " / ". A
 * capital at the start of a part and a stop at either end are forgiven, as
 * any essay changes them; "..." may join parts that come in that order.
 */
function quotedExactly(quote: string, hay: string) {
  const parts = lined(quote)
    .split(/\s*\.\.\.\s*/)
    .map((p) => p.replace(/^[\s,.;:!?]+|[\s,.;:!?]+$/g, ''))
    .filter(Boolean)
  let from = 0
  for (const p of parts) {
    const at = [p, p[0].toLowerCase() + p.slice(1), p[0].toUpperCase() + p.slice(1)]
      .map((v) => hay.indexOf(v, from))
      .filter((i) => i >= 0)
    if (!at.length) return false
    from = Math.min(...at) + p.length
  }
  return true
}

/** Every quotation in a question, its answers and its mark scheme. */
const printedBy = (q: (typeof questions)[number]) => [
  ...Object.values(q.modelAnswers ?? {}).flat(),
  ...(Array.isArray(q.markScheme) ? q.markScheme : [String(q.markScheme ?? '')]),
  q.questionText,
]

describe('the ocr-lit-a Macbeth answers quote only the extract or the play', () => {
  it.each(questions.map((q) => [q.id]))('%s', (id) => {
    const q = question(id)
    const { found, missing } = audit(printedBy(q), [q.extract ?? '', ...SCENES])
    expect(missing).toEqual([])
    // A scanner that found nothing would pass everything.
    expect(found.length).toBeGreaterThan(4)
  })

  it('fails an altered line, and one stitched from two scenes, and passes the real one', () => {
    // The reverse test, with two misquotations the old answers printed.
    expect(audit(['"upon my head they placed a fruitless crown"'], SCENES).missing).toHaveLength(1)
    expect(audit(['"Upon my head they plac’d a fruitless crown"'], SCENES).missing).toHaveLength(0)
    expect(audit(['"unseamed him from the nave to th\' chops"'], SCENES).missing).toHaveLength(1)
    expect(audit(['"unseam’d him from the nave to the chops"'], SCENES).missing).toHaveLength(0)
    // Act 5 Scene 1 and Act 2 Scene 2: each part is in the play, not in one scene.
    expect(audit(['"Out, damned spot ... wash this blood"'], SCENES).missing).toHaveLength(1)
  })
})

describe('every ocr-lit-a quotation keeps the words, stops and line breaks it quotes', () => {
  it.each(allQuestions.map((x) => [x.q.id, x] as [string, (typeof allQuestions)[number]]))(
    '%s',
    (_id, { paper, macbeth, q }) => {
      // A poetry answer may quote either poem on its paper (question 3b compares
      // the unseen poem of 3a); a Macbeth answer, its extract or one scene.
      const hay = macbeth
        ? [q.extract ?? '', ...SCENES].map(lined)
        : [
            (papers.find((p) => p.id === paper)?.sections ?? [])
              .flatMap((s) => s.questions.map((x) => x.extract ?? ''))
              .join('\n\n'),
          ].map(lined)
      const all = printedBy(q).flatMap(quotations)
      const missing = all.filter((quote) => !hay.some((h) => quotedExactly(quote, h)))
      expect(missing).toEqual([])
      expect(all.length).toBeGreaterThan(2)
    },
  )

  it('fails a dropped line, a changed stop and a changed word, and passes the real ones', () => {
    const poems = lined(
      papers
        .flatMap((p) => p.sections.flatMap((s) => s.questions.map((q) => q.extract ?? '')))
        .join('\n\n'),
    )
    // The two misquotations of the poems this review found, and their fixes.
    expect(
      quotedExactly('shadows wore the brighter face / and darkness held the truest grace', poems),
    ).toBe(false)
    expect(
      quotedExactly(
        'shadows wore the brighter face / and all the light was rendered dark / and darkness held the truest grace',
        poems,
      ),
    ).toBe(true)
    expect(quotedExactly('a syllable, / a colour', poems)).toBe(false)
    expect(quotedExactly('A syllable. / A colour.', poems)).toBe(true)
    const scene = lined(SCENES[macbethText.sections.findIndex((s) => s.id === 'actv-scenev')])
    expect(quotedExactly('Liar and slave!', scene)).toBe(false)
    expect(quotedExactly('Liar, and slave!', scene)).toBe(true)
    expect(quotedExactly('a poor player / That struts', scene)).toBe(false)
    expect(quotedExactly('a poor player, / That struts', scene)).toBe(true)
  })
})
