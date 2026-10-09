// @vitest-environment node
import { describe, it, expect } from 'vitest'

import { wjecLitPapers } from '@/data/mock-exams/wjec-lit-a'
import { macbethText } from '@/data/full-texts/macbeth'
import { aChristmasCarolText } from '@/data/full-texts/a-christmas-carol'
import { jekyllAndHydeText } from '@/data/full-texts/jekyll-and-hyde'
import { passage, playPassage } from '@/lib/study-guides/passage'
import { FAIR_DEALING } from '@/lib/study-guides/fair-dealing'
import { wordCount } from '@/lib/study-guides/validate'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { EDUQAS_ANTHOLOGY_2027 } from '@/lib/board/eduqas-anthology'
import { inCopyright } from './helpers/poets'

/**
 * The five Eduqas Literature mock papers in src/data/mock-exams/wjec-lit-a.ts
 * are set as Eduqas sets C720, print the held editions and Eduqas's own text
 * of its anthology, and quote only what they print, what the site holds, or
 * what has been checked by hand.
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
 * suitcase and a stubbornness" across a line break unmarked.
 *
 * The extracts are strings, cut by script with playPassage() and passage()
 * and written in, so that the chunk the mock-exam loader downloads does not
 * carry whole books. This test sets each one out again as the cut sets it and
 * compares it with a fresh cut, speaker names included, so only the
 * separators may differ.
 *
 * Unlike the OCR test it is modelled on, a quotation must match whole words:
 * finding "travel" inside "travels" is not finding it.
 *
 * REBUILT 9 OCTOBER 2026 as Eduqas sets C720 (see the docblock of
 * wjec-lit-a.ts). Every section had been two 20-mark questions; Component 2
 * was 80 marks in two sections and set passages the site had written, not set
 * texts; Component 1's poetry was the site's own poems in place of the
 * anthology. This file now also:
 *   - pins Eduqas's shape: Component 1, 80 marks in 2 hours, Shakespeare 15
 *     and 25 (5 of them AO4), poetry 15 and 25; Component 2, 120 marks in 2
 *     hours 30, a post-1914 text 40 (5 of them AO4), a 19th-century novel 40,
 *     unseen poetry 15 and 25; Eduqas's wording; each mark scheme's weighting
 *     and band ranges;
 *   - holds each set text to SET_TEXTS's Eduqas entries, and each anthology
 *     poem to the 2027 anthology (src/lib/board/eduqas-anthology.ts) and to a
 *     poet who died before 1956;
 *   - holds each printed anthology poem, and each poem a part (b) answer
 *     chooses, to Eduqas's 2027 printing in EDUQAS_2027 below, and every
 *     quotation of them to it;
 *   - cuts the two novel extracts again and holds every quotation of a novel
 *     to the extract or one stave or chapter of the held edition;
 *   - holds every quotation of An Inspector Calls, which is in copyright and
 *     not held, to AIC_CHECKED, checked by hand against a published script,
 *     and to FAIR_DEALING's limits.
 *
 * WHAT IT DOES NOT CHECK. The unseen poems are the site's own, attributed to
 * no one, so there is no text to hold them against; only the answers'
 * quotations of them are checked. Whether an An Inspector Calls quotation is
 * the play's, or spoken by the character an answer names, was checked by hand
 * on 9 October 2026; this file can only keep the list closed. Nor can it tell
 * whether what an answer says about the words is true: a review has to read
 * that.
 */

const papers = wjecLitPapers
type Question = (typeof papers)[number]['sections'][number]['questions'][number]
const allQuestions = papers.flatMap((p) =>
  p.sections.flatMap((s) => s.questions.map((q) => ({ paper: p.id, section: s.title, q }))),
)
const isMacbeth = (x: { section: string }) => /Macbeth/.test(x.section)
const questions = allQuestions.filter(isMacbeth).map((x) => x.q)
const question = (id: string) => {
  const q = allQuestions.find((x) => x.q.id === id)?.q
  if (!q) throw new Error(`no question ${id}`)
  return q
}
const COMPONENT_1 = ['wjec-lit-01', 'wjec-lit-02', 'wjec-lit-03']
const COMPONENT_2 = ['wjec-lit-04', 'wjec-lit-05']

// ─── The shape Eduqas sets ──────────────────────────────────────────────────

const schemeOf = (q: Question) => (Array.isArray(q.markScheme) ? q.markScheme : [])

/** Eduqas's band ranges, Summer 2024 mark schemes (C720U10-1, C720U20-1). */
const RANGES: Record<number, string[]> = {
  15: ['13-15', '10-12', '7-9', '4-6', '1-3'],
  20: ['17-20', '13-16', '9-12', '5-8', '1-4'],
  25: ['21-25', '16-20', '11-15', '6-10', '1-5'],
  35: ['29-35', '22-28', '15-21', '8-14', '1-7'],
  40: ['33-40', '25-32', '17-24', '9-16', '1-8'],
}

/** Each question's tariff, its marks for AO1 to AO3, whether AO3 and AO4 count, and its time. */
const SHAPE_1 = [
  {
    marks: 15,
    bands: 15,
    ao3: false,
    ao4: false,
    minutes: 20,
    says: /How do you think an audience might respond to this part of the play\?/,
  },
  {
    marks: 25,
    bands: 20,
    ao3: false,
    ao4: true,
    minutes: 40,
    says: /and how it is presented at different points in the play\./,
  },
  {
    marks: 15,
    bands: 15,
    ao3: true,
    ao4: false,
    minutes: 20,
    says: /Refer to the contexts of the poem in your answer\./,
  },
  {
    marks: 25,
    bands: 25,
    ao3: true,
    ao4: false,
    minutes: 40,
    says: /^Choose one other poem from the anthology in which the poet also writes about /,
  },
]
const SHAPE_2 = [
  {
    marks: 40,
    bands: 35,
    ao3: false,
    ao4: true,
    minutes: 45,
    says: /refer to the extract and the play as a whole/,
  },
  {
    marks: 40,
    bands: 40,
    ao3: true,
    ao4: false,
    minutes: 45,
    says: /refer to the contexts of the novel\./,
  },
  { marks: 15, bands: 15, ao3: false, ao4: false, minutes: 20, says: /, and its effect on you\./ },
  { marks: 25, bands: 25, ao3: false, ao4: false, minutes: 40, says: /^Now compare / },
]

describe('the wjec-lit-a papers are set as Eduqas sets C720', () => {
  it('has three Component 1 papers and two Component 2 papers', () => {
    expect(papers.map((p) => [p.id, p.code])).toEqual([
      ...COMPONENT_1.map((id) => [id, 'C720/01']),
      ...COMPONENT_2.map((id) => [id, 'C720/02']),
    ])
  })

  it.each(papers.map((p) => [p.id, p] as const))(
    '%s has Eduqas’s marks, times and wording',
    (id, p) => {
      const one = COMPONENT_1.includes(id)
      expect([p.totalMarks, p.totalTimeMinutes]).toEqual(one ? [80, 120] : [120, 150])
      expect(p.sections.map((s) => s.totalMarks)).toEqual(one ? [40, 40] : [40, 40, 40])
      expect(p.sections.map((s) => s.suggestedTimeMinutes)).toEqual(one ? [60, 60] : [45, 45, 60])
      const qs = p.sections.flatMap((s) => s.questions)
      const shape = one ? SHAPE_1 : SHAPE_2
      expect(qs).toHaveLength(shape.length)
      qs.forEach((q, i) => {
        const s = shape[i]
        expect([q.marks, q.suggestedTimeMinutes], q.id).toEqual([s.marks, s.minutes])
        expect(q.questionText, q.id).toMatch(s.says)
        expect(q.questionText.includes('[' + s.marks + ']'), q.id).toBe(true)
        expect(q.questionText.includes('allocated for accuracy in spelling'), q.id).toBe(s.ao4)
        const ms = schemeOf(q)
        expect(ms[0], q.id).toBe(
          s.ao4
            ? `AO1 and AO2 are equally weighted (${s.bands} marks); AO4, accuracy in spelling, punctuation and the use of vocabulary and sentence structures, is marked on a grid of its own (5 marks). Context (AO3) is not assessed on this question.`
            : s.ao3
              ? 'AO1, AO2 and AO3 are equally weighted in this question.'
              : 'AO1 and AO2 are equally weighted in this question.',
        )
        const bandLines = ms.filter((l) => /^Band \d/.test(l))
        expect(
          bandLines.map((l) => /^Band (\d) \(([\d-]+)\)/.exec(l)?.slice(1).join(' ')),
          q.id,
        ).toEqual(RANGES[s.bands].map((r, b) => `${5 - b} ${r}`))
        expect(
          bandLines.every((l) => /contexts/.test(l) === s.ao3),
          q.id,
        ).toBe(true)
        expect(
          ms.includes(
            'AO4 (5 marks): high performance 4-5 marks, intermediate performance 2-3, threshold performance 1.',
          ),
          q.id,
        ).toBe(s.ao4)
        expect(Object.keys(q.modelAnswers ?? {}), q.id).toEqual([
          'Grade 4-5',
          'Grade 6-7',
          'Grade 8-9',
        ])
      })
    },
  )

  it('sets only Eduqas set texts', () => {
    const eduqas = (slug: string) =>
      SET_TEXTS.find((t) => t.slug === slug)?.boards.includes('eduqas')
    const titles = papers.flatMap((p) => p.sections.map((s) => s.title))
    expect(titles.filter((t) => / - /.test(t)).sort()).toEqual(
      [
        ...Array(3).fill('Section A: Shakespeare - Macbeth'),
        ...Array(2).fill('Section A: Post-1914 Prose/Drama - An Inspector Calls'),
        'Section B: 19th Century Prose - A Christmas Carol',
        'Section B: 19th Century Prose - The Strange Case of Dr Jekyll and Mr Hyde',
      ].sort(),
    )
    for (const slug of ['macbeth', 'an-inspector-calls', 'a-christmas-carol', 'jekyll-and-hyde'])
      expect(eduqas(slug), slug).toBe(true)
    // The Sign of Four is set by AQA, not Eduqas: a guard that let any held
    // novel through would have accepted it.
    expect(eduqas('the-sign-of-four')).toBe(false)
  })
})

// ─── Macbeth ────────────────────────────────────────────────────────────────

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
      [...new Set(allQuestions.filter(isMacbeth).map((x) => x.paper))].sort(),
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

/** One section of an edition as plain text, its verse lines kept on lines of their own. */
const sectionText = (content: string) =>
  decode(
    content
      .replace(/<br\s*\/?>/g, '\n')
      .replace(/<\/p>/g, '\n\n')
      .replace(/<[^>]+>/g, ''),
  )

const SCENES = macbethText.sections.map((s) => `${s.title}\n\n${sectionText(s.content)}`)

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
const printedBy = (q: Question) => [
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

// ─── The anthology, as Eduqas prints it for 2027 ────────────────────────────

/**
 * Eduqas's text of the six anthology poems these papers print or choose, from
 * the WJEC Eduqas GCSE (9-1) English Literature Poetry Anthology (C720), for
 * first assessment in 2027 (ISBN 978-1-86085-774-4): read from the PDF's text
 * layer on 9 October 2026, line breaks and stanza breaks from images of each
 * page, and the narrow spaces Sonnet 29 sets after some words made plain. All
 * six poets died before 1956, so each poem may be held whole. Disabled runs
 * across a page turn after "a god in kilts.", where the anthology's layout
 * does not settle whether a stanza ends; it is held with a break there, and
 * no answer counts its stanzas.
 */
const EDUQAS_2027: Record<string, { poet: string; text: string }> = {
  'Drummer Hodge': {
    poet: 'Thomas Hardy',
    text: `Drummer Hodge

They throw in Drummer Hodge, to rest
Uncoffined — just as found:
His landmark is a kopje-crest
That breaks the veldt around:
And foreign constellations west
Each night above his mound.

Young Hodge the drummer never knew —
Fresh from his Wessex home —
The meaning of the broad Karoo,
The Bush, the dusty loam,
And why uprose to nightly view
Strange stars amid the gloam.

Yet portion of that unknown plain
Will Hodge for ever be;
His homely Northern breast and brain
Grow up some Southern tree,
And strange-eyed constellations reign
His stars eternally.`,
  },
  Disabled: {
    poet: 'Wilfred Owen',
    text: `Disabled

He sat in a wheeled chair, waiting for dark,
And shivered in his ghastly suit of grey,
Legless, sewn short at elbow. Through the park
Voices of boys rang saddening like a hymn,
Voices of play and pleasure after day,
Till gathering sleep had mothered them from him.

About this time Town used to swing so gay
When glow-lamps budded in the light-blue trees
And girls glanced lovelier as the air grew dim,
—In the old times, before he threw away his knees.
Now he will never feel again how slim
Girls’ waists are, or how warm their subtle hands,
All of them touch him like some queer disease.

There was an artist silly for his face,
For it was younger than his youth, last year.
Now he is old; his back will never brace;
He’s lost his colour very far from here,
Poured it down shell-holes till the veins ran dry,
And half his lifetime lapsed in the hot race,
And leap of purple spurted from his thigh.
One time he liked a bloodsmear down his leg,
After the matches carried shoulder-high.
It was after football, when he’d drunk a peg,
He thought he’d better join. He wonders why ...
Someone had said he’d look a god in kilts.

That’s why; and maybe, too, to please his Meg,
Aye, that was it, to please the giddy jilts,
He asked to join. He didn’t have to beg;
Smiling they wrote his lie; aged nineteen years.
Germans he scarcely thought of; and no fears
Of Fear came yet. He thought of jewelled hilts
For daggers in plaid socks; of smart salutes;
And care of arms; and leave; and pay arrears;
Esprit de corps; and hints for young recruits.
And soon, he was drafted out with drums and cheers.
Some cheered him home, but not as crowds cheer Goal.
Only a solemn man who brought him fruits
Thanked him; and then inquired about his soul.

Now, he will spend a few sick years in Institutes,
And do what things the rules consider wise,
And take whatever pity they may dole.
To-night he noticed how the women’s eyes
Passed from him to the strong men that were whole.
How cold and late it is! Why don’t they come
And put him into bed? Why don’t they come?`,
  },
  'Cousin Kate': {
    poet: 'Christina Rossetti',
    text: `Cousin Kate

I was a cottage maiden
Hardened by sun and air,
Contented with my cottage mates,
Not mindful I was fair.
Why did a great lord find me out,
And praise my flaxen hair?
Why did a great lord find me out
To fill my heart with care?

He lured me to his palace home—
Woe’s me for joy thereof—
To lead a shameless shameful life,
His plaything and his love.
He wore me like a silken knot,
He changed me like a glove;
So now I moan, an unclean thing,
Who might have been a dove.

O Lady Kate, my cousin Kate,
You grew more fair than I:
He saw you at your father’s gate,
Chose you, and cast me by.
He watched your steps along the lane,
Your work among the rye;
He lifted you from mean estate
To sit with him on high.

Because you were so good and pure
He bound you with his ring:
The neighbours call you good and pure,
Call me an outcast thing.
Even so I sit and howl in dust,
You sit in gold and sing:
Now which of us has tenderer heart?
You had the stronger wing.

O cousin Kate, my love was true,
Your love was writ in sand:
If he had fooled not me but you,
If you stood where I stand,
He’d not have won me with his love
Nor bought me with his land;
I would have spit into his face
And not have taken his hand.

Yet I’ve a gift you have not got,
And seem not like to get:
For all your clothes and wedding-ring
I’ve little doubt you fret.
My fair-haired son, my shame, my pride,
Cling closer, closer yet:
Your father would give lands for one
To wear his coronet.`,
  },
  'Sonnet 29': {
    poet: 'Elizabeth Barrett Browning',
    text: `Sonnet 29

I think of thee!—my thoughts do twine and bud
About thee, as wild vines, about a tree,
Put out broad leaves, and soon there’s nought to see
Except the straggling green which hides the wood.
Yet, O my palm-tree, be it understood
I will not have my thoughts instead of thee
Who art dearer, better! Rather, instantly
Renew thy presence; as a strong tree should,
Rustle thy boughs and set thy trunk all bare,
And let these bands of greenery which insphere thee
Drop heavily down,—burst, shattered, everywhere!
Because, in this deep joy to see and hear thee
And breathe within thy shadow a new air,
I do not think of thee—I am too near thee.`,
  },
  'I Wandered Lonely as a Cloud': {
    poet: 'William Wordsworth',
    text: `I Wandered Lonely as a Cloud

I wandered lonely as a cloud
That floats on high o’er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.

Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.

The waves beside them danced; but they
Out-did the sparkling waves in glee:
A poet could not but be gay,
In such a jocund company:
I gazed—and gazed—but little thought
What wealth the show to me had brought:

For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude;
And then my heart with pleasure fills,
And dances with the daffodils.`,
  },
  'I Shall Return': {
    poet: 'Claude McKay',
    text: `I Shall Return

I shall return again; I shall return
To laugh and love and watch with wonder-eyes
At golden noon the forest fires burn,
Wafting their blue-black smoke to sapphire skies.
I shall return to loiter by the streams
That bathe the brown blades of the bending grasses,
And realize once more my thousand dreams
Of waters rushing down the mountain passes.
I shall return to hear the fiddle and fife
Of village dances, dear delicious tunes
That stir the hidden depths of native life,
Stray melodies of dim remembered runes.
I shall return, I shall return again,
To ease my mind of long, long years of pain.`,
  },
}

/** Paper, the poem it prints, the poem its part (b) answers choose. */
const ANTHOLOGY_PAPERS: [string, string, string][] = [
  ['wjec-lit-01', 'Drummer Hodge', 'Disabled'],
  ['wjec-lit-02', 'Cousin Kate', 'Sonnet 29'],
  ['wjec-lit-03', 'I Wandered Lonely as a Cloud', 'I Shall Return'],
]

describe('the anthology poems are Eduqas’s 2027 anthology, as it prints them', () => {
  it.each(ANTHOLOGY_PAPERS)('%s prints %s and its answers choose %s', (paper, named, chosen) => {
    for (const title of [named, chosen]) {
      const entry = EDUQAS_ANTHOLOGY_2027.poems.find((p) => p.title === title)
      expect(entry, title).toBeDefined()
      expect(EDUQAS_2027[title]?.poet).toBe(entry!.poet)
      expect(inCopyright(entry!.poet), title).toBe(false)
    }
    const qa = question(`${paper}-q2a`)
    expect(qa.extract).toBe(EDUQAS_2027[named].text)
    const page = EDUQAS_ANTHOLOGY_2027.poems.find((p) => p.title === named)!.page
    expect(qa.extractSource).toContain(
      `as printed in the Eduqas GCSE English Literature Poetry Anthology, for first assessment in 2027, page ${page}`,
    )
    expect(
      qa.questionText.startsWith(`Read the poem below, ${named}, by ${EDUQAS_2027[named].poet}.`),
    ).toBe(true)
    // Part (b) prints nothing: the student chooses and quotes from memory.
    expect(question(`${paper}-q2b`).extract).toBeUndefined()
    expect(question(`${paper}-q2b`).questionText).toContain(`in ${named}.`)
    expect(schemeOf(question(`${paper}-q2b`))).toContainEqual(
      expect.stringMatching(
        new RegExp(`^These model answers choose ${chosen} by ${EDUQAS_2027[chosen].poet};`),
      ),
    )
  })

  it.each(ANTHOLOGY_PAPERS)('%s quotes %s and %s as Eduqas prints them', (paper, named, chosen) => {
    for (const part of ['q2a', 'q2b']) {
      const q = question(`${paper}-${part}`)
      const hay = (part === 'q2a' ? [named] : [named, chosen]).map((t) =>
        lined(EDUQAS_2027[t].text),
      )
      const all = printedBy(q).flatMap((t) => quotations(t, 1))
      expect(
        all.filter((quote) => !hay.some((h) => quotedExactly(quote, h))),
        q.id,
      ).toEqual([])
      for (const answer of Object.values(q.modelAnswers ?? {}).flat()) {
        // Each answer quotes its poems, and a part (b) answer names its choice
        // and quotes it. A title in quotation marks is a name, not a quotation,
        // and would otherwise pass for one.
        const quoted = quotations(answer, 1).filter(
          (x) => !Object.keys(EDUQAS_2027).includes(x.replace(/[,.]$/, '')),
        )
        expect(
          quoted.some((x) => quotedExactly(x, hay[0])),
          q.id,
        ).toBe(true)
        if (part === 'q2b') {
          expect(answer, q.id).toContain(chosen)
          expect(
            quoted.some((x) => quotedExactly(x, hay[1]) && !quotedExactly(x, hay[0])),
            q.id,
          ).toBe(true)
        }
      }
    }
  })

  it('fails the other boards’ wording and a dropped line break, and passes Eduqas’s', () => {
    const hodge = lined(EDUQAS_2027['Drummer Hodge'].text)
    // Hardy wrote "Grow to some Southern tree"; Eduqas prints "Grow up".
    expect(quotedExactly('Grow to some Southern tree', hodge)).toBe(false)
    expect(quotedExactly('Grow up some Southern tree', hodge)).toBe(true)
    const kate = lined(EDUQAS_2027['Cousin Kate'].text)
    // Pearson prints "golden knot" and "Your sire would give broad lands".
    expect(quotedExactly('He wore me like a golden knot', kate)).toBe(false)
    expect(quotedExactly('He wore me like a silken knot', kate)).toBe(true)
    expect(quotedExactly('Your father would give lands for one / To wear his coronet', kate)).toBe(
      true,
    )
    expect(quotedExactly('Your father would give lands for one to wear his coronet', kate)).toBe(
      false,
    )
  })
})

// ─── The novels ─────────────────────────────────────────────────────────────

/** Paper, edition, section id, cut, and the extract's source line. */
const NOVEL_CUTS: [string, typeof aChristmasCarolText, string, string, string][] = [
  [
    'wjec-lit-04',
    aChristmasCarolText,
    'section-3',
    'At last the dinner was all done',
    'hungry brothers in the dust',
  ],
  [
    'wjec-lit-05',
    jekyllAndHydeText,
    'section-2',
    'Will you let me see your face?',
    'your new friend',
  ],
]

/** A novel's sections as single lines: the edition wraps prose, so its breaks are the printer's. */
const prose = (s: string) => lined(s).replace(/ \/ /g, ' ')
const CHAPTERS = new Map(
  [aChristmasCarolText, jekyllAndHydeText].map((t) => [
    t,
    t.sections.map((s) => prose(`${s.title}\n\n${sectionText(s.content)}`)),
  ]),
)

describe('the wjec-lit-a novel extracts are the held editions, and the answers quote them', () => {
  it('cuts both Section B extracts', () => {
    expect(NOVEL_CUTS.map(([paper]) => paper)).toEqual(COMPONENT_2)
  })

  it.each(NOVEL_CUTS)('%s prints its extract, cut again', (paper, text, sec, from, to) => {
    const q = question(`${paper}-q2`)
    // The edition marks italics with underscores, which the papers drop, as
    // the other banks do; nothing else may differ.
    expect(q.extract).toBe(passage(text, sec, from, to).replace(/_/g, ''))
    expect(wordCount(q.extract ?? '')).toBeGreaterThan(300)
  })

  it.each(NOVEL_CUTS)('%s quotes only the extract or one section of the novel', (paper, text) => {
    const q = question(`${paper}-q2`)
    const hay = [prose(q.extract ?? ''), ...CHAPTERS.get(text)!]
    const all = printedBy(q).flatMap((t) => quotations(t, 1))
    expect(all.filter((quote) => !hay.some((h) => quotedExactly(prose(quote), h)))).toEqual([])
    expect(all.length).toBeGreaterThan(20)
  })

  it('fails a changed word and passes the edition’s', () => {
    const carol = CHAPTERS.get(aChristmasCarolText)!
    expect(carol.some((h) => quotedExactly('God bless us every one', h))).toBe(true)
    expect(carol.some((h) => quotedExactly('God bless us everyone', h))).toBe(false)
  })
})

// ─── An Inspector Calls ─────────────────────────────────────────────────────

/**
 * Every quotation of An Inspector Calls the Component 2 answers make. The
 * play is in copyright and the site holds no text of it, so each was checked
 * by hand on 9 October 2026, with its speaker and act, against a published
 * script used for checking only. A new quotation fails here until someone has
 * done the same. The two titles are names, not quotations.
 */
const AIC_CHECKED: Record<string, string[]> = {
  'wjec-lit-04': [
    'But what did Sheila do?',
    "It's too late. She's dead.",
    'very pleased with life and rather excited',
    'mummy',
    'in a furious temper',
    'It was my own fault',
    "I couldn't be sorry for her",
    'she almost breaks down, but just controls herself',
    'you used the power you had',
    "It's too late. She's dead",
    'a kind of wall between us and that girl',
    'Everything we said had happened really had happened',
    "I suppose we're all nice people now",
    'Fire and blood and anguish',
    "I don't believe I will",
    'just as I was the wrong type',
    'How could I know what would happen afterwards?',
    'more impressionable',
    'giving us the rope',
    "you didn't come into this",
    "I'm not a child, don't forget",
    "It's too soon. I must think",
    'gaily',
    "What's this about streets?",
    'some miserable plain little creature',
    'if I could help her now',
    'almost in triumph',
    'very impertinent',
    'impertinent is such a silly word',
    'an hysterical child',
    "it's you two who are being childish",
    'he inspected us all right',
    'I see what you mean now',
    "Well, why shouldn't we?",
    'guiltily and dumbfounded',
  ],
  'wjec-lit-05': [
    'was going to have a child',
    "a rather cold woman and her husband's social superior",
    "you're not supposed to say such things",
    'a piece of gross impertinence',
    'prejudiced against her case',
    'Yes',
    'she had only herself to blame',
    "I didn't like her manner",
    "Unlike the other three, I did nothing I'm ashamed of",
    'I consider I did my duty',
    'terribly wrong',
    'some drunken young idler',
    'He should be made an example of',
    "You don't understand anything",
    'Mrs Birling has collapsed into a chair',
    "Well, why shouldn't we?",
    "her husband's social superior",
    'just as I had',
    'briskly and self-confidently',
    'Girls of that class',
    'was it or was it not your influence?',
    'possibly',
    'stung',
    'duty',
    "You've had children",
    'should be made an example of',
    'compelled to confess in public',
    'I shall do my duty',
    'your own grandchild',
    'You turned her away',
    "He certainly didn't make me confess",
    'a kind of wall',
    'not a good case',
    'wanted',
    'needed',
    'understanding now',
    "I don't believe it. I won't believe it",
    'pitiable little bit',
    'coming to life',
    'like a fool',
    'as amused as we are',
    'guiltily and dumbfounded',
  ],
}
const AIC_NAMES = ['An Inspector Calls']

describe('the wjec-lit-a answers on An Inspector Calls quote only what was checked, within fair dealing', () => {
  it.each(COMPONENT_2)('%s', (paper) => {
    const q = question(`${paper}-q1`)
    expect(q.extract).toBeUndefined()
    const all = printedBy(q).flatMap((t) => quotations(t, 1))
    const key = (s: string) => s.replace(/[\s,.;:]+$/, '')
    const checked = new Set(AIC_CHECKED[paper].map(key))
    expect(all.filter((x) => !checked.has(key(x)) && !AIC_NAMES.includes(x))).toEqual([])
    // A listed quotation no answer makes any more is a stale entry.
    expect(AIC_CHECKED[paper].filter((x) => !all.some((y) => key(y) === key(x)))).toEqual([])
    for (const x of AIC_CHECKED[paper])
      expect(wordCount(x), x).toBeLessThanOrEqual(FAIR_DEALING.quoteWords)
    // Counted once: a quotation inside a longer one adds nothing.
    const flat = (s: string) => ` ${words(s).trim()} `
    const kept: string[] = []
    for (const x of [...AIC_CHECKED[paper]].sort((a, b) => wordCount(b) - wordCount(a)))
      if (!kept.some((k) => flat(k).includes(flat(x)))) kept.push(x)
    expect(kept.reduce((t, x) => t + wordCount(x), 0)).toBeLessThanOrEqual(FAIR_DEALING.totalWords)
  })
})

// ─── The unseen poems ───────────────────────────────────────────────────────

describe('the wjec-lit-a unseen answers keep the words, stops and line breaks they quote', () => {
  const unseen = allQuestions.filter((x) => /Unseen/.test(x.section))
  it('covers both papers', () => {
    expect(unseen.map((x) => x.q.id)).toEqual(COMPONENT_2.flatMap((p) => [`${p}-q3a`, `${p}-q3b`]))
  })

  it.each(unseen.map((x) => [x.q.id, x] as [string, (typeof unseen)[number]]))(
    '%s',
    (_id, { q }) => {
      const hay = lined(q.extract ?? '')
      const all = printedBy(q).flatMap((t) => quotations(t, 1))
      expect(all.filter((quote) => !quotedExactly(quote, hay))).toEqual([])
      expect(all.length).toBeGreaterThan(4)
    },
  )

  it('fails a dropped line break, a changed word and a cut word, and passes the real ones', () => {
    const poems = lined(question('wjec-lit-04-q3a').extract ?? '')
    // The misquotations of the poems a review found on 27 September 2026, and their fixes.
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

// ─── Macbeth's whole-play answers keep the play's words and breaks ──────────

describe('every wjec-lit-a Macbeth quotation keeps the words, stops and line breaks it quotes', () => {
  it.each(questions.map((q) => [q.id]))('%s', (id) => {
    const q = question(id)
    const hay = [...[q.extract ?? '', ...SCENES].map(lined), ...PROSE_SCENES]
    const all = printedBy(q).flatMap((t) => quotations(t, 1))
    expect(all.filter((quote) => !hay.some((h) => quotedExactly(quote, h)))).toEqual([])
    expect(all.length).toBeGreaterThan(1)
  })
})
