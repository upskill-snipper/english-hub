// @vitest-environment node
import { describe, it, expect } from 'vitest'

import { edexcelLitPapers } from '@/data/mock-exams/edexcel-lit-a'
import { macbethText } from '@/data/full-texts/macbeth'
import { passage } from '@/lib/study-guides/passage'

/**
 * The five Edexcel Literature mock papers in src/data/mock-exams/edexcel-lit-a.ts
 * print the held Macbeth, and every quotation in them is in what it claims to
 * quote, word for word, stop for stop and line break for line break.
 *
 * WHY IT EXISTS (27 September 2026). Those papers, all live, printed three
 * Macbeth extracts that were largely or wholly invented, and model answers
 * that analysed the inventions as Shakespeare's. The first fix cut genuine
 * passages from the held edition when the module loaded, which
 * scripts/check-mock-exam-extracts.mjs cannot see (it reads a bank's passages
 * from its source), so the checker called the file "ok" having read none of
 * the three. A review then found the rewritten answers still saying the
 * sleepwalking extract ends on "What's done cannot be undone" (it goes on to
 * "To bed, to bed, to bed"), still quoting "th' innocent flower", "supped",
 * "promised", "ripped" and "damned" where the edition prints "the", "supp'd",
 * "promis'd", "ripp'd" and "damn'd", and never showing the second unseen poem
 * that Question 3 of each Paper 2 asks the student to compare. The file's
 * docblock says what was found and changed.
 *
 * The extracts are now strings, written in by script. This test cuts each one
 * again and compares them word for word and mark for mark, ignoring only the
 * layout (speaker names, brackets round stage directions, the edition's
 * italic underscores, line breaks). It then holds every quotation of two
 * words or more, in double quotation marks, to its text:
 *   - part (a) of a Macbeth question to its extract alone, because the
 *     question asks for examples from the extract;
 *   - part (b), the whole-play essay, to the extract or one scene of the play;
 *   - the post-1914 and unseen-poetry answers to the passages their section
 *     prints, apart from the one quotation listed in ELSEWHERE.
 * Each check keeps words, stops and line breaks (" / "); it forgives a capital
 * at the start, a stop at either end, the shape of apostrophes and quotation
 * marks (an essay puts single marks round the edition's double), and "..."
 * joining parts that come in that order.
 *
 * WHAT IT DOES NOT CHECK. Whether a claim about a quotation is true: that the
 * extract "ends" somewhere, or that a figure is a simile, was read by hand.
 * The essay answers with no extract (Paper 1C Section B, the anthology and
 * nineteenth-century poetry questions of Paper 2) quote no set text.
 */

const papers = edexcelLitPapers
const allQuestions = papers.flatMap((p) =>
  p.sections.flatMap((s) =>
    s.questions.map((q, i) => ({
      paper: p.id,
      section: s,
      macbeth: /Macbeth/.test(s.title),
      partA: i === 0,
      q,
    })),
  ),
)
type Entry = (typeof allQuestions)[number]
const entry = (id: string) => {
  const e = allQuestions.find((x) => x.q.id === id)
  if (!e) throw new Error(`no question ${id}`)
  return e
}

/** A speaker's name, on its own line in the edition or before a colon here. */
const SPEAKER = /^[A-Z][A-Z’' .-]+$/
const SPEAKER_PREFIX = /^[A-Z][A-Z’' .-]+: /

/** Words and marks only: the layout is the page's, not the edition's. */
const flat = (s: string) =>
  s
    .replace(/^[A-Z][A-Z’' .-]+(?::[ \t]*|[ \t]*$)/gm, '')
    .replace(/[[\]_]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

/** First question id, label, section id, and the cut's first and last phrases. */
const CUTS: [string, string, string, string, string][] = [
  [
    'edexcel-lit-p1-a-q1a',
    'Act 3, Scene 2',
    'actiii-sceneii',
    'desire is got without content',
    'full of scorpions',
  ],
  ['edexcel-lit-p1-b-q1a', 'Act 5, Scene 1', 'actv-scenei', 'What is it she does now', '_Exit._'],
  [
    'edexcel-lit-p1-c-q1a',
    'Act 4, Scene 1',
    'activ-scenei',
    'By the pricking of my thumbs',
    'More potent than the first',
  ],
]

describe('the edexcel-lit-a Macbeth extracts are the held edition', () => {
  it('covers every Macbeth section', () => {
    const sections = papers.flatMap((p) => p.sections).filter((s) => /Macbeth/.test(s.title))
    expect(sections).toHaveLength(3)
    expect(CUTS.map(([id]) => id).sort()).toEqual(sections.map((s) => s.questions[0].id).sort())
  })

  it.each(CUTS)('%s prints %s, cut again', (id, where, sec, from, to) => {
    const { q, section } = entry(id)
    const printed = q.extract ?? ''
    expect(printed.length).toBeGreaterThan(1200)
    expect(flat(printed)).toBe(flat(passage(macbethText, sec, from, to)))
    expect(q.extractSource).toBe(
      `William Shakespeare, Macbeth, ${where}. Text: Project Gutenberg #1533.`,
    )
    // Part (b) prints no extract of its own: the page shows this one above it.
    expect(section.questions).toHaveLength(2)
    expect(section.questions[1].extract).toBeUndefined()
    expect(section.questions[1].questionText).toMatch(/^In this extract/)
  })
})

describe('every unseen poem a question asks about is on the page', () => {
  // The mock-exam page prints only a section's first extract, so the first
  // question must carry every poem the section's questions name.
  const unseen = papers.flatMap((p) => p.sections).filter((s) => /Unseen/.test(s.title))
  it.each(unseen.map((s) => [s.id, s] as [string, (typeof unseen)[number]]))('%s', (_id, s) => {
    expect(s.questions.length).toBeGreaterThan(1)
    const shown = s.questions[0].extract ?? ''
    for (const q of s.questions) {
      expect(shown).toContain(q.extract ?? 'no extract')
      for (const [, title] of q.questionText.matchAll(/read (?:the poem )?"([^"]+)"/gi)) {
        expect(shown.split('\n')).toContain(title)
      }
    }
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

/**
 * Lines joined by " / " (a stanza break too), speaker names and bracketed
 * directions dropped, quotation marks and apostrophes removed; words, stops
 * and line breaks kept.
 */
const lined = (s: string) =>
  s
    .split('\n')
    .map((l) => l.trim().replace(SPEAKER_PREFIX, ''))
    .filter((l) => l && !SPEAKER.test(l) && !/^\[.*\]$/.test(l))
    .join(' / ')
    .replace(/['‘’"“”_]/g, '')
    .replace(/[—–]/g, '-')
    .replace(/\s+/g, ' ')

const quotations = (t: string) =>
  [...t.matchAll(/"([^"]+)"/g)].map((m) => m[1].trim()).filter((q) => q.split(/\s+/).length >= 2)

/**
 * Whether `quote` is in `hay` as printed, with its line breaks as " / ". A
 * capital at the start of a part and a stop at either end are forgiven;
 * "..." may join parts that come in that order.
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

/**
 * The one quotation of a text this file does not hold, and where it is from.
 * William Golding, "Fable", in The Hot Gates (1965): "anyone who moved through
 * those years without understanding that man produces evil as a bee produces
 * honey, must have been blind or wrong in the head". Nine words, in UK
 * copyright, within fair dealing.
 */
const ELSEWHERE = ['man produces evil as a bee produces honey']

/** Every quotation in a question, its answers and its mark scheme. */
const printedBy = (q: Entry['q']) => [
  ...Object.values(q.modelAnswers ?? {}).flat(),
  ...(Array.isArray(q.markScheme) ? q.markScheme : [String(q.markScheme ?? '')]),
  q.questionText,
]

/** What a question's quotations may come from. */
function hayFor({ section, macbeth, partA }: Entry): string[] {
  const extracts = section.questions.map((x) => x.extract ?? '').filter(Boolean)
  if (macbeth) return partA ? extracts : [...extracts, ...SCENES]
  return extracts
}

const quoting = allQuestions.filter((x) => hayFor(x).length > 0)

describe('every edexcel-lit-a quotation keeps the words, stops and line breaks it quotes', () => {
  it('reads every question that prints or answers to an extract', () => {
    // 3 Macbeth sections of 2, 2 post-1914 sections of 1, 2 unseen of 2.
    expect(quoting).toHaveLength(12)
  })

  it.each(quoting.map((x) => [x.q.id, x] as [string, Entry]))('%s', (_id, x) => {
    const hay = hayFor(x).map(lined)
    const titles = x.section.questions.map((q) => (q.extract ?? '').split('\n')[0])
    const all = printedBy(x.q).flatMap(quotations)
    const missing = all.filter(
      (quote) =>
        !titles.includes(quote.replace(/[,.]$/, '')) &&
        !ELSEWHERE.includes(quote) &&
        !hay.some((h) => quotedExactly(quote, h)),
    )
    expect(missing).toEqual([])
    // A scanner that found nothing would pass everything.
    expect(all.length).toBeGreaterThan(4)
  })

  it('fails the misquotations this review found, and passes the real lines', () => {
    const scene = (id: string) => lined(SCENES[macbethText.sections.findIndex((s) => s.id === id)])
    expect(quotedExactly("look like th' innocent flower", scene('acti-scenev'))).toBe(false)
    expect(quotedExactly('look like the innocent flower', scene('acti-scenev'))).toBe(true)
    expect(quotedExactly('I have supped full with horrors', scene('actv-scenev'))).toBe(false)
    expect(quotedExactly("I have supp'd full with horrors", scene('actv-scenev'))).toBe(true)
    expect(quotedExactly('Lay on, Macduff, / And damned be him', scene('actv-sceneviii'))).toBe(
      false,
    )
    expect(quotedExactly("lay on, Macduff; / And damn'd be him", scene('actv-sceneviii'))).toBe(
      true,
    )
    expect(quotedExactly('fair is foul and foul is fair', scene('acti-scenei'))).toBe(false)
    expect(quotedExactly('fair is foul, and foul is fair', scene('acti-scenei'))).toBe(true)
    // Part (a) is held to its extract alone: a line from elsewhere in the play
    // fails there even though it is Shakespeare's.
    const a = lined(entry('edexcel-lit-p1-a-q1a').q.extract ?? '')
    expect(quotedExactly('Out, damned spot', a)).toBe(false)
    expect(quotedExactly('full of scorpions is my mind', a)).toBe(true)
  })
})

describe('what the papers say about the extracts they print', () => {
  it('does not say the sleepwalking extract ends on "What\'s done cannot be undone"', () => {
    const { q } = entry('edexcel-lit-p1-b-q1a')
    const extract = q.extract ?? ''
    // The extract goes on past that sentence to her exit.
    expect(extract.indexOf('To bed, to bed, to bed.')).toBeGreaterThan(
      extract.indexOf('What’s done cannot be undone.'),
    )
    for (const answer of Object.values(q.modelAnswers ?? {})) {
      expect(answer).not.toMatch(/extract ends with "What's done|last sentence, "What/)
    }
  })
})
