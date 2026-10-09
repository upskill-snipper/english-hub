// @vitest-environment node
import { describe, it, expect } from 'vitest'

import { edexcelLitPapers } from '@/data/mock-exams/edexcel-lit-a'
import { aChristmasCarolText } from '@/data/full-texts/a-christmas-carol'
import { jekyllAndHydeText } from '@/data/full-texts/jekyll-and-hyde'
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
 * The essay answers with no extract (Paper 1C Section B) quote no set text.
 *
 * PAPER 2, REBUILT 9 OCTOBER 2026 in the shape of Pearson's 1ET0/02 (see the
 * docblock of edexcel-lit-a.ts). Its novel extracts are cut again from the
 * held editions and compared exactly. Part (a) of each novel question is held
 * to its extract and part (b) to the extract or the novel. The anthology
 * question prints its named poem; the student chooses the second, so each
 * answer is held to the named poem and to the chosen poem as Pearson's
 * anthology prints it, in CHOSEN_POEMS below. The paper's shape is pinned
 * too: 80 marks in four answers of 20, and no AO4 and no Section C, which is
 * what the old papers had.
 */

const papers = edexcelLitPapers
const allQuestions = papers.flatMap((p) =>
  p.sections.flatMap((s) =>
    s.questions.map((q, i) => ({
      paper: p.id,
      section: s,
      macbeth: /Macbeth/.test(s.title),
      novel: /19th-century Novel/.test(s.title),
      anthology: /Poetry Anthology/.test(s.title),
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

/** First question id, held text, section, label, and the cut's first and last phrases. */
const NOVEL_CUTS = [
  [
    'edexcel-lit-p2-a-q1a',
    aChristmasCarolText,
    'section-2',
    'Charles Dickens, A Christmas Carol, Stave 2. Text: Project Gutenberg #46.',
    'He was not alone, but sat by the side of a fair young girl',
    'Ah, no!',
  ],
  [
    'edexcel-lit-p2-b-q1a',
    jekyllAndHydeText,
    'section-4',
    'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde, Chapter 4. Text: Project Gutenberg #43.',
    'Nearly a year later, in the month of October',
    'the maid fainted',
  ],
] as const

describe('the edexcel-lit-a novel extracts are the held editions', () => {
  it('covers every novel section', () => {
    const sections = papers
      .flatMap((p) => p.sections)
      .filter((s) => /19th-century Novel/.test(s.title))
    expect(sections).toHaveLength(2)
    expect(NOVEL_CUTS.map(([id]) => id).sort()).toEqual(
      sections.map((s) => s.questions[0].id).sort(),
    )
  })

  it.each(NOVEL_CUTS)('%s, cut again', (id, text, sec, source, from, to) => {
    const { q, section } = entry(id)
    // Pearson prints about 400 words.
    const words = (q.extract ?? '').split(/\s+/).length
    expect(words).toBeGreaterThan(350)
    expect(words).toBeLessThan(500)
    expect(q.extract).toBe(passage(text, sec, from, to))
    expect(q.extractSource).toBe(source)
    // Part (b) prints no extract of its own: the page shows this one above it.
    expect(section.questions).toHaveLength(2)
    expect(section.questions[1].extract).toBeUndefined()
    expect(section.questions[1].questionText).toMatch(/^\(b\) In this extract/)
  })
})

describe('every unseen poem a question asks about is on the page', () => {
  // The mock-exam page prints only a section's first extract, so the first
  // question must carry every poem the section's questions name. Since 9
  // October 2026 each section is one comparison of two poems, as Pearson sets
  // it, and the question names both.
  const unseen = papers.flatMap((p) => p.sections).filter((s) => /Unseen/.test(s.title))
  it('finds both unseen sections', () => expect(unseen).toHaveLength(2))
  it.each(unseen.map((s) => [s.id, s] as [string, (typeof unseen)[number]]))('%s', (_id, s) => {
    const shown = s.questions[0].extract ?? ''
    for (const q of s.questions) {
      expect(shown).toContain(q.extract ?? 'no extract')
      const titles = [...q.questionText.matchAll(/"([^"]+)"/g)].map((m) => m[1])
      expect(titles.length).toBeGreaterThanOrEqual(2)
      for (const title of titles) expect(shown.split('\n')).toContain(title)
    }
  })
})

describe('each Paper 2 is set as Pearson sets 1ET0/02', () => {
  const paper2s = papers.filter((p) => p.paperNumber === 2)
  it('finds both Paper 2s', () => expect(paper2s).toHaveLength(2))
  it.each(paper2s.map((p) => [p.id, p] as [string, (typeof paper2s)[number]]))('%s', (_id, p) => {
    expect(p.totalMarks).toBe(80)
    expect(p.totalTimeMinutes).toBe(135)
    expect(p.sections.map((s) => s.totalMarks)).toEqual([40, 20, 20])
    expect(p.sections.flatMap((s) => s.questions.map((q) => q.marks))).toEqual([20, 20, 20, 20])
    expect(p.sections[0].title).toMatch(/^Section A: 19th-century Novel - /)
    expect(p.sections[1].title).toMatch(/^Section B, Part 1: Poetry Anthology - /)
    expect(p.sections[2].title).toMatch(/^Section B, Part 2: Unseen Poetry$/)
    // The old papers marked SPaG in a "Section C"; Paper 2 has neither.
    expect(JSON.stringify(p)).not.toMatch(/AO4|SPaG|Section C/)
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

/** Each Paper 2 novel, by the name its section gives it, one chapter or stave a string. */
const NOVELS: Record<string, string[]> = {
  'A Christmas Carol': aChristmasCarolText.sections.map((s) => sceneText(s.content)),
  'Jekyll and Hyde': jekyllAndHydeText.sections.map((s) => sceneText(s.content)),
}

/**
 * The poem each anthology answer chooses to compare with the named one, as
 * Pearson's anthology prints it (Issue 4, January 2023: The Charge of the Light
 * Brigade on PDF pages 33 and 34, La Belle Dame Sans Merci on PDF page 7),
 * compared line by line with the PDF's text on 9 October 2026. Keyed by the
 * named poem's title, the first line of its extract. Both poets died in the
 * nineteenth century. The site's own held copy of Keats's poem is Colvin's
 * text, which reads "The sedge is withered" at line 3, where the anthology
 * prints "has withered": the student is examined on the anthology's.
 */
const CHOSEN_POEMS: Record<string, string> = {
  Exposure: `The Charge of the Light Brigade
by Alfred, Lord Tennyson

Half a league, half a league,
Half a league onward,
All in the valley of Death
Rode the six hundred.
‘Forward, the Light Brigade!
Charge for the guns!’ he said:
Into the valley of Death
Rode the six hundred.

‘Forward, the Light Brigade!’
Was there a man dismay’d?
Not tho’ the soldier knew
Some one had blunder’d:
Their’s not to make reply,
Their’s not to reason why,
Their’s but to do and die:
Into the valley of Death
Rode the six hundred.

Cannon to right of them,
Cannon to left of them,
Cannon in front of them
Volley’d and thunder’d;
Storm’d at with shot and shell,
Boldly they rode and well,
Into the jaws of Death,
Into the mouth of Hell
Rode the six hundred.

Flash’d all their sabres bare,
Flash’d as they turn’d in air
Sabring the gunners there,
Charging an army, while
All the world wonder’d:
Plunged in the battery smoke
Right thro’ the line they broke;
Cossack and Russian
Reel’d from the sabre-stroke
Shatter’d and sunder’d
Then they rode back, but not
Not the six hundred.

Cannon to right of them,
Cannon to left of them,
Cannon behind them
Volley’d and thunder’d;
Storm’d at with shot and shell,
While horse and hero fell,
They that had fought so well
Came thro’ the jaws of Death,
Back from the mouth of Hell,
All that was left of them,
Left of six hundred.

When can their glory fade?
O the wild charge they made!
All the world wonder’d.
Honour the charge they made!
Honour the Light Brigade,
Noble six hundred!`,
  'Neutral Tones': `La Belle Dame sans Merci
by John Keats

O what can ail thee, knight-at-arms,
Alone and palely loitering?
The sedge has withered from the lake,
And no birds sing.

O what can ail thee, knight-at-arms,
So haggard and so woe-begone?
The squirrel’s granary is full,
And the harvest’s done.

I see a lily on thy brow,
With anguish moist and fever-dew,
And on thy cheek a fading rose
Fast withereth too.

I met a lady in the meads,
Full beautiful – a faery’s child,
Her hair was long, her foot was light,
And her eyes were wild.

I made a garland for her head,
And bracelets too, and fragrant zone;
She looked at me as she did love,
And made sweet moan.

I set her on my pacing steed,
And nothing else saw all day long,
For sidelong would she bend, and sing
A faery’s song.

She found me roots of relish sweet,
And honey wild, and manna-dew,
And sure in language strange she said –
‘I love thee true’.

She took me to her elfin grot,
And there she wept and sighed full sore,
And there I shut her wild wild eyes
With kisses four.

And there she lulled me asleep
And there I dreamed – Ah! woe betide! –
The latest dream I ever dreamt
On the cold hill side.

I saw pale kings, and princes too,
Pale warriors, death-pale were they all;
They cried – ‘La Belle Dame sans Merci
Thee hath in thrall!’

I saw their starved lips in the gloam,
With horrid warning gapèd wide,
And I awoke and found me here,
On the cold hill’s side.

And this is why I sojourn here
Alone and palely loitering,
Though the sedge is withered from the lake,
And no birds sing.`,
}

/** The chosen poem an anthology section's answers compare with its named poem. */
const chosenFor = (section: Entry['section']) => {
  const named = (section.questions[0].extract ?? '').split('\n')[0]
  const chosen = CHOSEN_POEMS[named]
  if (!chosen) throw new Error(`no chosen poem recorded for "${named}"`)
  return chosen
}

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
function hayFor({ section, macbeth, novel, anthology, partA }: Entry): string[] {
  const extracts = section.questions.map((x) => x.extract ?? '').filter(Boolean)
  if (macbeth) return partA ? extracts : [...extracts, ...SCENES]
  if (novel) {
    const name = section.title.replace(/^.* - /, '')
    const chapters = NOVELS[name]
    if (!chapters) throw new Error(`no held novel for "${name}"`)
    return partA ? extracts : [...extracts, ...chapters]
  }
  if (anthology) return [...extracts, chosenFor(section)]
  return extracts
}

const quoting = allQuestions.filter((x) => hayFor(x).length > 0)

describe('every edexcel-lit-a quotation keeps the words, stops and line breaks it quotes', () => {
  it('reads every question that prints or answers to an extract', () => {
    // Paper 1: 3 Macbeth sections of 2, 2 post-1914 sections of 1. Paper 2
    // (since 9 October 2026): 2 novel sections of 2, 2 anthology sections of 1
    // and 2 unseen sections of 1.
    expect(quoting).toHaveLength(16)
  })

  it('compares each anthology poem with a chosen poem it names and quotes', () => {
    const anthology = allQuestions.filter((x) => x.anthology)
    expect(anthology).toHaveLength(2)
    for (const x of anthology) {
      const chosen = chosenFor(x.section)
      const title = chosen.split('\n')[0]
      const named = lined(x.q.extract ?? '')
      for (const answer of Object.values(x.q.modelAnswers ?? {}).flat()) {
        expect(answer).toContain(title)
        // At least one quotation is the chosen poem's and not the named one's.
        const own = quotations(answer).filter(
          (quote) => quotedExactly(quote, lined(chosen)) && !quotedExactly(quote, named),
        )
        expect(own.length).toBeGreaterThan(0)
      }
    }
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
