// @vitest-environment node
import { describe, it, expect } from 'vitest'

import { wjecLitPapers } from '@/data/mock-exams/wjec-lit-a'
import { macbethText } from '@/data/full-texts/macbeth'
import { playPassage } from '@/lib/study-guides/passage'

/**
 * The five WJEC Literature mock papers in src/data/mock-exams/wjec-lit-a.ts
 * print the held Macbeth, and their model answers quote only what the paper
 * prints or the site holds.
 *
 * WHY IT EXISTS (27 September 2026). Papers wjec-lit-01 to 03, all live,
 * printed three Macbeth extracts typed in rather than cut from an edition
 * (33% to 55% of their sentences were the held edition's word for word, one
 * had Lady Macbeth say "hands" for "hand"), and their answers quoted words
 * that are not the play's ("healing touch", "rend the air", "if it were
 * right"). The file's docblock says what was found and changed. The first
 * fix was checked only by scripts/check-mock-exam-extracts.mjs, which counts
 * quotations of four words or more and forgives a changed stop or a dropped
 * line break, so a review then found the answers on the site's own poems
 * quoting "travel" for the poem's "travels" and running "a recipe and a
 * suitcase and a stubbornness" across a line break unmarked. Nothing else
 * reads this file.
 *
 * The extracts are strings, cut by script with playPassage() and written in,
 * so that the chunk the mock-exam loader downloads does not carry the whole
 * play. This test sets each one out again as playPassage() sets a cut and
 * compares it with a fresh cut, speaker names included, so only the
 * separators may differ.
 *
 * Unlike the OCR test it is modelled on, a quotation must match whole words:
 * finding "travel" inside "travels" is not finding it.
 *
 * WHAT IT DOES NOT CHECK. The poems and prose passages are labelled as
 * original compositions and attributed to no one, so there is no text to hold
 * them against; only the answers' quotations of them are checked. Nor can it
 * tell whether what an answer says about the words is true: a review has to
 * read that.
 */

const papers = wjecLitPapers
const allQuestions = papers.flatMap((p) =>
  p.sections.flatMap((s) =>
    s.questions.map((q) => ({ paper: p.id, macbeth: /Macbeth/.test(s.title), q })),
  ),
)
const questions = allQuestions.filter((x) => x.macbeth).map((x) => x.q)
const question = (id: string) => {
  const q = allQuestions.find((x) => x.q.id === id)?.q
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

/** Paper, scene as its label prints it, section id, and the cut's first and last phrases. */
const CUTS: [string, string, string, string, string][] = [
  ['wjec-lit-01', 'Act 1, Scene 7', 'acti-scenevii', 'If it were done when', 'And falls on th'],
  ['wjec-lit-02', 'Act 2, Scene 2', 'actii-sceneii', 'Methought I heard a voice', 'Look on'],
  [
    'wjec-lit-03',
    'Act 5, Scene 5',
    'actv-scenev',
    'I have almost forgot the taste',
    'Signifying nothing',
  ],
]

describe('the wjec-lit-a Macbeth extracts are the held edition', () => {
  it('covers every Macbeth question', () => {
    expect(questions).toHaveLength(6)
    expect(CUTS.map(([paper]) => paper).sort()).toEqual(
      [...new Set(allQuestions.filter((x) => x.macbeth).map((x) => x.paper))].sort(),
    )
  })

  it.each(CUTS)('%s prints %s, cut again', (paper, where, sec, from, to) => {
    for (const part of ['q1a', 'q1b']) {
      const q = question(`${paper}-${part}`)
      const printed = q.extract ?? ''
      expect(printed.length).toBeGreaterThan(600)
      expect(asCut(printed)).toBe(playPassage(macbethText, sec, from, to))
      expect(q.extractSource).toBe(
        `William Shakespeare, Macbeth, ${where}. Text: Project Gutenberg #1533.`,
      )
    }
  })

  it('fails a line given to the wrong speaker', () => {
    // The reverse test: Seyton's news moved into Macbeth's speech.
    const printed = question('wjec-lit-03-q1a').extract ?? ''
    const moved = printed.replace('cry?\n\nSEYTON\n', 'cry?\n')
    expect(moved).not.toBe(printed)
    expect(asCut(moved)).not.toBe(
      playPassage(
        macbethText,
        'actv-scenev',
        'I have almost forgot the taste',
        'Signifying nothing',
      ),
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

/**
 * The quotations in double marks, of at least `min` words. The words-only
 * audit skips single words, which a play contains somewhere; the exact check
 * below does not, since a single word ("travel" for the poem's "travels") is
 * how the first fix's misquotation of a poem got through.
 */
const quotations = (t: string, min = 2) =>
  [...t.matchAll(/"([^"]+)"/g)].map((m) => m[1].trim()).filter((q) => q.split(/\s+/).length >= min)

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
 * The sleepwalking scene is prose, and the edition wraps prose at a fixed
 * width, so those breaks are the printer's (playPassage's `prose` option says
 * the same): there a quotation is held to its words and stops, not to them.
 */
const PROSE_SCENES = SCENES.filter((_, i) => macbethText.sections[i].id === 'actv-scenei').map(
  (s) => lined(s).replace(/ \/ /g, ' '),
)

const isLetter = (c: string | undefined) => !!c && /\p{L}/u.test(c)

/**
 * Whether `quote` is in `hay` as printed, with its line breaks as " / ", as
 * whole words. A capital at the start of a part and a stop at either end are
 * forgiven, as any essay changes them; "..." may join parts that come in that
 * order.
 */
function quotedExactly(quote: string, hay: string) {
  const parts = lined(quote)
    .split(/\s*\.\.\.\s*/)
    .map((p) => p.replace(/^[\s,.;:!?]+|[\s,.;:!?]+$/g, ''))
    .filter(Boolean)
  let from = 0
  for (const p of parts) {
    let best = -1
    for (const v of [p, p[0].toLowerCase() + p.slice(1), p[0].toUpperCase() + p.slice(1)]) {
      for (let i = hay.indexOf(v, from); i >= 0; i = hay.indexOf(v, i + 1)) {
        if (isLetter(hay[i - 1]) || isLetter(hay[i + v.length])) continue
        if (best < 0 || i < best) best = i
        break
      }
    }
    if (best < 0) return false
    from = best + p.length
  }
  return true
}

/** Every quotation in a question, its answers and its mark scheme. */
const printedBy = (q: (typeof questions)[number]) => [
  ...Object.values(q.modelAnswers ?? {}).flat(),
  ...(Array.isArray(q.markScheme) ? q.markScheme : [String(q.markScheme ?? '')]),
  q.questionText,
]

describe('the wjec-lit-a Macbeth answers quote only the extract or the play', () => {
  it.each(questions.map((q) => [q.id]))('%s', (id) => {
    const q = question(id)
    const { found, missing } = audit(printedBy(q), [q.extract ?? '', ...SCENES])
    expect(missing).toEqual([])
    // A scanner that found nothing would pass everything.
    expect(found.length).toBeGreaterThan(4)
  })

  it('fails the altered lines the old answers printed, and passes the real ones', () => {
    const extract = question('wjec-lit-02-q1a').extract ?? ''
    expect(audit(['"wash this filthy witness from your hands"'], [extract]).missing).toHaveLength(1)
    expect(audit(['"wash this filthy witness from your hand"'], [extract]).missing).toHaveLength(0)
    expect(audit(['"healing touch"'], SCENES).missing).toHaveLength(1)
    expect(audit(['"The healing benediction"'], SCENES).missing).toHaveLength(0)
    // Act 5 Scene 1 and Act 2 Scene 2: each part is in the play, not in one scene.
    expect(audit(['"Out, damned spot ... wash this blood"'], SCENES).missing).toHaveLength(1)
  })
})

describe('every wjec-lit-a quotation keeps the words, stops and line breaks it quotes', () => {
  it.each(allQuestions.map((x) => [x.q.id, x] as [string, (typeof allQuestions)[number]]))(
    '%s',
    (_id, { paper, macbeth, q }) => {
      // A poetry answer may quote any poem on its paper (question 4 compares
      // the poem of question 3 with another); a prose answer, its paper's
      // passages; a Macbeth answer, its extract or one scene.
      const hay = macbeth
        ? [...[q.extract ?? '', ...SCENES].map(lined), ...PROSE_SCENES]
        : [
            (papers.find((p) => p.id === paper)?.sections ?? [])
              .flatMap((s) => s.questions.map((x) => x.extract ?? ''))
              .join('\n\n'),
          ].map(lined)
      const all = printedBy(q).flatMap((t) => quotations(t, 1))
      const missing = all.filter((quote) => !hay.some((h) => quotedExactly(quote, h)))
      expect(missing).toEqual([])
      // A scanner that found nothing would pass everything. (wjec-lit-04-q1b,
      // an essay on the whole text, quotes the passage only twice.)
      expect(all.length).toBeGreaterThan(1)
    },
  )

  it('fails a dropped line break, a changed word and a cut word, and passes the real ones', () => {
    const poems = lined(
      papers
        .flatMap((p) => p.sections.flatMap((s) => s.questions.map((q) => q.extract ?? '')))
        .join('\n\n'),
    )
    // The misquotations of the poems this review found, and their fixes.
    expect(quotedExactly('a recipe and a suitcase and a stubbornness', poems)).toBe(false)
    expect(quotedExactly('a recipe and a suitcase / and a stubbornness', poems)).toBe(true)
    expect(quotedExactly('travel', poems)).toBe(false)
    expect(quotedExactly('travels', poems)).toBe(true)
    const scene = lined(SCENES[macbethText.sections.findIndex((s) => s.id === 'actii-sceneii')])
    // The silent cut the first version of a guilt answer made.
    expect(quotedExactly('wash this blood clean from my hand', scene)).toBe(false)
    expect(quotedExactly('wash this blood / Clean from my hand?', scene)).toBe(true)
    // Prose may run across the printer's breaks; verse may not.
    expect(
      PROSE_SCENES.some((h) =>
        quotedExactly('all the perfumes of Arabia will not sweeten this little hand', h),
      ),
    ).toBe(true)
    expect(PROSE_SCENES.some((h) => quotedExactly('wash this blood clean from my hand', h))).toBe(
      false,
    )
  })
})
