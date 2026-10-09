// @vitest-environment node
import { describe, it, expect } from 'vitest'

import { ocrLitPapers } from '@/data/mock-exams/ocr-lit-a'
import { macbethText } from '@/data/full-texts/macbeth'
import { playPassage } from '@/lib/study-guides/passage'
import { OCR_CLUSTERS, type OcrClusterSlug } from '@/lib/board/ocr-anthology'

/**
 * The five OCR Literature mock papers in src/data/mock-exams/ocr-lit-a.ts are
 * set as OCR sets J352/02, print the held Macbeth and OCR's own text of the
 * anthology poems, and quote only what they print, what the site holds, or
 * the anthology poem a part (b) answer chooses.
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
 * darkness held the truest grace" with a line missing between; every
 * quotation is now held to the words, stops and line breaks of the text it
 * quotes.
 *
 * REBUILT 9 OCTOBER 2026 as J352/02 (see the docblock of ocr-lit-a.ts). The
 * papers had carried the other component's code, run to 120 marks and set
 * poems the site had written as if they were the anthology's. Each is now 80
 * marks: in Section A, a named poem from OCR's anthology compared with an
 * unseen poem (20) and one other poem from the same cluster, chosen by the
 * student (20); in Section B, one extract-based Macbeth question (40). This
 * file now also:
 *   - pins that shape, and the tariffs in every mark scheme;
 *   - holds each named poem, and each poem a part (b) answer chooses, to
 *     OCR's current cluster lists (src/lib/board/ocr-anthology.ts, the 2022
 *     revision) and to a poet who died before 1956;
 *   - holds part (a) answers to the two poems the paper prints, and part (b)
 *     answers to those and to the chosen poem as OCR prints it, in
 *     CHOSEN_POEMS below, which must agree with any paper that prints the same
 *     poem;
 *   - requires each part (a) answer to quote both poems, and each part (b)
 *     answer to name its poem and quote it.
 *
 * WHAT IT DOES NOT CHECK. Whether a claim about a quotation is true: that a
 * sonnet turns at line 9, or that a sentence crosses a stanza break, was read
 * by hand against the text. The unseen poems were written for these papers
 * and are attributed to no one, so only quotations of them are checked.
 */

const papers = ocrLitPapers
const allQuestions = papers.flatMap((p) =>
  p.sections.flatMap((s) =>
    s.questions.map((q, i) => ({
      paper: p.id,
      section: s,
      macbeth: /^Section B: Shakespeare/.test(s.title),
      partA: i === 0,
      q,
    })),
  ),
)
type Entry = (typeof allQuestions)[number]
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
    // One extract-based question a paper since 9 October 2026; there were two.
    expect(questions).toHaveLength(5)
    expect(CUTS.map(([paper]) => paper).sort()).toEqual(papers.map((p) => p.id).sort())
  })

  it.each(CUTS)('%s prints %s, cut again', (paper, where, sec, from, to) => {
    const q = question(`${paper}-q2`)
    const printed = q.extract ?? ''
    expect(printed.length).toBeGreaterThan(600)
    expect(asCut(printed)).toBe(playPassage(macbethText, sec, from, to))
    expect(q.extractSource).toBe(
      `William Shakespeare, Macbeth, ${where} (text: Project Gutenberg #1533)`,
    )
    // The question names the scene the extract is cut from.
    expect(q.questionText).toContain(
      `Refer to this extract from ${where} and elsewhere in the play.`,
    )
  })

  it('fails a line given to the wrong speaker', () => {
    // The reverse test: Seyton's reply moved into Macbeth's speech.
    const printed = question('ocr-lit-04-q2').extract ?? ''
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
 * Lines joined by " / " (a stanza break too), speaker names, bracketed
 * directions and A Song's stanza numerals dropped, quotation marks and
 * apostrophes removed (an essay puts single marks round the edition's double,
 * and straight for curly); words, stops and line breaks kept.
 */
const lined = (s: string) =>
  s
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !SPEAKER.test(l) && !/^\[.*\]$/.test(l) && !/^[IVX]+$/.test(l))
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
const printedBy = (q: Entry['q']) => [
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

// ── J352/02 ──────────────────────────────────────────────────────────────────

/**
 * What each paper sets: its cluster, the named poem of part (a) with its poet
 * and the year the poet died, the unseen poem, and the poem the part (b)
 * answers choose. The years are those OCR prints under each poem.
 */
const SET: [string, OcrClusterSlug, string, string, number, string, string][] = [
  ['ocr-lit-01', 'love-and-relationships', 'Bright Star', 'John Keats', 1821, 'Snow Globe', 'Now'],
  [
    'ocr-lit-02',
    'conflict',
    'The Destruction of Sennacherib',
    'Lord Byron',
    1824,
    'The Demolition',
    'Envy',
  ],
  [
    'ocr-lit-03',
    'youth-and-age',
    'Midnight on the Great Western',
    'Thomas Hardy',
    1928,
    'Kitchen at Five AM',
    'Holy Thursday',
  ],
  [
    'ocr-lit-04',
    'love-and-relationships',
    'A Song',
    'Helen Maria Williams',
    1827,
    'Tidal',
    'Bright Star',
  ],
  [
    'ocr-lit-05',
    'conflict',
    'Envy',
    'Mary Lamb',
    1847,
    'February, Walking the Dog',
    'The Destruction of Sennacherib',
  ],
]

/**
 * The poem each paper's part (b) answers choose, as OCR prints it in Towards a
 * World Unknown (updated edition, September 2020; PDF pages 10, 21, 34, 10 and
 * 23), checked line by line against the PDF's text layer and page images on 9
 * October 2026, with the year the poet died. Bright Star, Envy and The
 * Destruction of Sennacherib are also named poems on other papers, and must
 * match those papers' copies exactly. Now and Holy Thursday are printed by no
 * paper: these are the only copies, compared with Project Gutenberg #50954 and
 * #1934 (OCR has no comma after "ignore" in Now, and three commas fewer than
 * Gutenberg in line 2 of Holy Thursday). All five poets died before 1956, so
 * the poems are out of UK copyright.
 */
const CHOSEN_POEMS: Record<string, { poet: string; died: number; text: string }> = {
  Now: {
    poet: 'Robert Browning',
    died: 1889,
    text: `Now
by Robert Browning

Out of your whole life give but a moment!
All of your life that has gone before,
All to come after it, – so you ignore
So you make perfect the present, – condense,
In a rapture of rage, for perfection’s endowment,
Thought and feeling and soul and sense –
Merged in a moment which gives me at last
You around me for once, you beneath me, above me –
Me – sure that despite of time future, time past, –
This tick of our life-time’s one moment you love me!
How long such suspension may linger? Ah, Sweet –
The moment eternal – just that and no more –
When ecstasy’s utmost we clutch at the core
While cheeks burn, arms open, eyes shut and lips meet!`,
  },
  Envy: {
    poet: 'Mary Lamb',
    died: 1847,
    text: `Envy
by Mary Lamb

This rose-tree is not made to bear
The violet blue, nor lily fair,
Nor the sweet mignionet:
And if this tree were discontent,
Or wished to change its natural bent,
It all in vain would fret.

And should it fret, you would suppose
It ne’er had seen its own red rose,
Nor after gentle shower
Had ever smelled its rose’s scent,
Or it could ne’er be discontent
With its own pretty flower.

Like such a blind and senseless tree
As I’ve imagined this to be,
All envious persons are:
With care and culture all may find
Some pretty flower in their own mind,
Some talent that is rare.`,
  },
  'Holy Thursday': {
    poet: 'William Blake',
    died: 1827,
    text: `Holy Thursday
by William Blake

‘Twas on a holy Thursday, their innocent faces clean,
The children walking two and two in red and blue and green:
Grey-headed beadles walked before, with wands as white as snow,
Till into the high dome of Paul’s they like Thames waters flow.

O what a multitude they seemed, these flowers of London town!
Seated in companies they sit, with radiance all their own.
The hum of multitudes was there, but multitudes of lambs,
Thousands of little boys and girls raising their innocent hands.

Now like a mighty wind they raise to heaven the voice of song,
Or like harmonious thunderings the seats of heaven among:
Beneath them sit the aged men, wise guardians of the poor.
Then cherish pity, lest you drive an angel from your door.`,
  },
  'Bright Star': {
    poet: 'John Keats',
    died: 1821,
    text: `Bright Star
by John Keats

Bright star, would I were stedfast as thou art–
Not in lone splendour hung aloft the night
And watching, with eternal lids apart,
Like nature’s patient, sleepless Eremite,
The moving waters at their priestlike task
Of pure ablution round earth’s human shores,
Or gazing on the new soft-fallen mask
Of snow upon the mountains and the moors–
No – yet still stedfast, still unchangeable,
Pillow’d upon my fair love’s ripening breast,
To feel for ever its soft fall and swell,
Awake for ever in a sweet unrest,
Still, still to hear her tender-taken breath,
And so live ever – or else swoon to death.`,
  },
  'The Destruction of Sennacherib': {
    poet: 'Lord Byron',
    died: 1824,
    text: `The Destruction of Sennacherib
by Lord Byron

The Assyrian came down like the wolf on the fold,
And his cohorts were gleaming in purple and gold;
And the sheen of their spears was like stars on the sea,
When the blue wave rolls nightly on deep Galilee.

Like the leaves of the forest when Summer is green,
That host with their banners at sunset were seen:
Like the leaves of the forest when Autumn hath blown,
That host on the morrow lay withered and strown.

For the Angel of Death spread his wings on the blast,
And breathed in the face of the foe as he passed;
And the eyes of the sleepers waxed deadly and chill,
And their hearts but once heaved, and for ever grew still!

And there lay the steed with his nostril all wide,
But through it there rolled not the breath of his pride;
And the foam of his gasping lay white on the turf,
And cold as the spray of the rock-beating surf.

And there lay the rider distorted and pale,
With the dew on his brow, and the rust on his mail:
And the tents were all silent, the banners alone,
The lances unlifted, the trumpet unblown.

And the widows of Ashur are loud in their wail,
And the idols are broke in the temple of Baal;
And the might of the Gentile, unsmote by the sword,
Hath melted like snow in the glance of the Lord!`,
  },
}

/** UK copyright in these poems ended seventy years after their poets died. */
const outOfCopyright = (died: number) => died < 1956

const inCluster = (slug: OcrClusterSlug, title: string, poet: string) =>
  OCR_CLUSTERS.find((c) => c.slug === slug)!.poems.some((p) => p.title === title && p.poet === poet)

/** A part (a) extract: the named poem, a rule, the unseen poem. */
const printedPoems = (p: (typeof papers)[number]) => {
  const [named, unseen] = (p.sections[0].questions[0].extract ?? '').split('\n\n---\n\n')
  return { named, unseen }
}

const tariffs = (lines: string[]) =>
  lines
    .map((l) => /^AO(\d) \((\d+) marks/.exec(l))
    .filter((m): m is RegExpExecArray => m !== null)
    .map((m) => `AO${m[1]} ${m[2]}`)

describe('each paper is set as OCR sets J352/02', () => {
  it('covers every paper, each with a different named poem and unseen poem', () => {
    expect(SET.map(([id]) => id)).toEqual(papers.map((p) => p.id))
    expect(new Set(SET.map((s) => s[2])).size).toBe(SET.length)
    expect(new Set(SET.map((s) => s[5])).size).toBe(SET.length)
    // All three clusters are set.
    expect(new Set(SET.map((s) => s[1])).size).toBe(3)
  })

  it.each(papers.map((p) => [p.id, p] as [string, (typeof papers)[number]]))('%s', (_id, p) => {
    expect(p.code).toBe('J352/02')
    expect(p.subtitle).toBe('English Literature J352/02')
    expect(p.title).toBe('Exploring poetry and Shakespeare')
    expect(p.paperNumber).toBe(2)
    expect(p.totalTimeMinutes).toBe(120)
    expect(p.totalMarks).toBe(80)
    expect(p.sections.map((s) => s.totalMarks)).toEqual([40, 40])
    expect(p.sections.flatMap((s) => s.questions.map((q) => q.marks))).toEqual([20, 20, 40])
    for (const s of p.sections) {
      expect(s.questions.reduce((n, q) => n + q.marks, 0)).toBe(s.totalMarks)
    }
    expect(p.sections.reduce((n, s) => n + s.suggestedTimeMinutes, 0)).toBe(120)
    expect(p.sections[0].title).toMatch(/^Section A: Poetry across time - /)
    expect(p.sections[1].title).toBe('Section B: Shakespeare - Macbeth')
    expect(p.sections[1].questions[0].questionText).toMatch(
      /\[40 marks, including 4 marks for spelling, punctuation and grammar\]$/,
    )
    // The old papers carried the other component's code and a Section C.
    expect(JSON.stringify(p)).not.toMatch(/J352\/01|Section C/)
  })

  it("gives every mark scheme OCR's objectives and tariffs", () => {
    for (const p of papers) {
      const [a, b] = p.sections[0].questions
      const c = p.sections[1].questions[0]
      const scheme = (q: typeof a) => (Array.isArray(q.markScheme) ? q.markScheme : [])
      expect(tariffs(scheme(a)), p.id).toEqual(['AO2 12', 'AO1 8'])
      expect(tariffs(scheme(b)), p.id).toEqual(['AO1 10', 'AO2 10'])
      expect(tariffs(scheme(c)), p.id).toEqual(['AO1 14', 'AO2 14', 'AO3 8', 'AO4 4'])
      expect(scheme(a).filter((l) => l.startsWith('Top band (18-20)'))).toHaveLength(1)
      expect(scheme(b).filter((l) => l.startsWith('Top band (18-20)'))).toHaveLength(1)
      expect(scheme(c).filter((l) => l.startsWith('Top band (31-36)'))).toHaveLength(1)
      // Section A assesses no context and no SPaG, and says so.
      for (const q of [a, b]) expect(scheme(q).join(' ')).toMatch(/neither context \(AO3\)/)
    }
  })
})

describe('the poems each paper names are OCR’s, as OCR prints them', () => {
  it.each(SET)('%s sets %s: %s by %s', (id, slug, named, poet, died, unseen, chosen) => {
    const p = papers.find((x) => x.id === id)!
    const cluster = OCR_CLUSTERS.find((c) => c.slug === slug)!
    expect(p.sections[0].title).toBe(`Section A: Poetry across time - ${cluster.title}`)
    // In the cluster as OCR revised it for 2022, and not among the poems it took out.
    expect(inCluster(slug, named, poet)).toBe(true)
    expect(cluster.removedIn2022.map((r) => r.title)).not.toContain(named)
    expect(outOfCopyright(died)).toBe(true)

    const [a, b] = p.sections[0].questions
    const { named: namedText, unseen: unseenText } = printedPoems(p)
    expect(namedText.split('\n').slice(0, 2)).toEqual([named, `by ${poet}`])
    expect(unseenText.split('\n')[0]).toBe(unseen)
    expect(a.extractSource).toContain(`${poet} (`)
    expect(a.extractSource).toContain(
      `-${died}), "${named}", as printed in Towards a World Unknown`,
    )
    expect(a.extractSource).toContain(
      `"${unseen}": an original composition written for these practice papers`,
    )
    expect(a.questionText).toContain(`Read "${named}" by ${poet} and "${unseen}", printed above.`)
    // Part (b) prints nothing: the student chooses the poem and quotes it from memory.
    expect(b.extract).toBeUndefined()
    expect(b.questionText).toContain(`from the ${cluster.title} cluster and must not be "${named}"`)

    // The poem the answers choose is another poem from the same cluster, out of copyright.
    expect(chosen).not.toBe(named)
    const c = CHOSEN_POEMS[chosen]
    expect(c, chosen).toBeDefined()
    expect(inCluster(slug, chosen, c.poet)).toBe(true)
    expect(outOfCopyright(c.died)).toBe(true)
    expect(c.text.split('\n').slice(0, 2)).toEqual([chosen, `by ${c.poet}`])
  })

  it('holds each chosen poem to the copy of any paper that prints it', () => {
    let compared = 0
    for (const [title, { text }] of Object.entries(CHOSEN_POEMS)) {
      const printer = papers.find((p) => printedPoems(p).named.split('\n')[0] === title)
      if (!printer) continue
      expect(printedPoems(printer).named, title).toBe(text)
      compared++
    }
    // Bright Star, Envy and The Destruction of Sennacherib.
    expect(compared).toBe(3)
  })

  it('rejects a poem OCR removed, a poem from another cluster, and a poet in copyright', () => {
    // The reverse tests for the checks above.
    expect(inCluster('love-and-relationships', 'A Broken Appointment', 'Thomas Hardy')).toBe(false)
    expect(inCluster('conflict', 'Bright Star', 'John Keats')).toBe(false)
    // Robert Frost, "Out, Out-" in Youth and Age, died in 1963.
    expect(inCluster('youth-and-age', 'Out, Out-', 'Robert Frost')).toBe(true)
    expect(outOfCopyright(1963)).toBe(false)
  })
})

/** What a question's quotations may come from. */
function hayFor(x: Entry): string[] {
  if (x.macbeth) return [x.q.extract ?? '', ...SCENES]
  const printed = x.section.questions[0].extract ?? ''
  if (x.partA) return [printed]
  const chosen = SET.find(([id]) => id === x.paper)![6]
  return [printed, CHOSEN_POEMS[chosen].text]
}

describe('every ocr-lit-a quotation keeps the words, stops and line breaks it quotes', () => {
  it('reads every question', () => expect(allQuestions).toHaveLength(15))

  it.each(allQuestions.map((x) => [x.q.id, x] as [string, Entry]))('%s', (_id, x) => {
    const hay = hayFor(x).map(lined)
    const all = printedBy(x.q).flatMap(quotations)
    const missing = all.filter((quote) => !hay.some((h) => quotedExactly(quote, h)))
    expect(missing).toEqual([])
    // A scanner that found nothing would pass everything.
    expect(all.length).toBeGreaterThan(4)
  })

  it.each(SET)('%s: each part (a) answer quotes both poems', (id) => {
    const p = papers.find((x) => x.id === id)!
    const named = lined(printedPoems(p).named)
    const unseen = lined(printedPoems(p).unseen)
    for (const answer of Object.values(p.sections[0].questions[0].modelAnswers ?? {}).flat()) {
      const qs = quotations(answer)
      expect(
        qs.filter((q) => quotedExactly(q, named) && !quotedExactly(q, unseen)).length,
      ).toBeGreaterThan(1)
      expect(
        qs.filter((q) => quotedExactly(q, unseen) && !quotedExactly(q, named)).length,
      ).toBeGreaterThan(1)
    }
  })

  it.each(SET)(
    '%s: each part (b) answer names its poem and quotes it',
    (id, ...[, , , , , chosen]) => {
      const p = papers.find((x) => x.id === id)!
      const printed = lined(p.sections[0].questions[0].extract ?? '')
      const own = lined(CHOSEN_POEMS[chosen].text)
      const answers = Object.values(p.sections[0].questions[1].modelAnswers ?? {}).flat()
      expect(answers).toHaveLength(3)
      for (const answer of answers) {
        expect(answer).toContain(`"${chosen}"`)
        // Quotations that are the chosen poem's and not the printed poems'.
        const mine = quotations(answer).filter(
          (q) => quotedExactly(q, own) && !quotedExactly(q, printed),
        )
        expect(mine.length).toBeGreaterThan(3)
      }
    },
  )

  it("fails other editions' readings and dropped breaks, and passes OCR's", () => {
    const printed = (id: string) =>
      lined(papers.find((p) => p.id === id)!.sections[0].questions[0].extract ?? '')
    // Readings of other editions, where OCR prints otherwise: the Oxford Book of
    // English Verse's "steadfast", Pearson's "wither'd", Gutenberg's "dang'rous".
    expect(quotedExactly('would I were steadfast as thou art', printed('ocr-lit-01'))).toBe(false)
    expect(quotedExactly('would I were stedfast as thou art', printed('ocr-lit-01'))).toBe(true)
    expect(
      quotedExactly('That host on the morrow lay wither’d and strown', printed('ocr-lit-02')),
    ).toBe(false)
    expect(
      quotedExactly('That host on the morrow lay withered and strown', printed('ocr-lit-02')),
    ).toBe(true)
    expect(quotedExactly('While he the dang’rous ocean braves', printed('ocr-lit-04'))).toBe(false)
    expect(quotedExactly('While he the dangerous ocean braves', printed('ocr-lit-04'))).toBe(true)
    // A line break dropped, and the misquotation the old answers made of this poem.
    expect(
      quotedExactly(
        'Of pure ablution round earth’s human shores, Or gazing',
        printed('ocr-lit-01'),
      ),
    ).toBe(false)
    expect(
      quotedExactly(
        'Of pure ablution round earth’s human shores, / Or gazing',
        printed('ocr-lit-01'),
      ),
    ).toBe(true)
    expect(quotedExactly('reads the lack', printed('ocr-lit-05'))).toBe(false)
    expect(quotedExactly('I read the lack', printed('ocr-lit-05'))).toBe(true)
    // Gutenberg's comma after "ignore" in Now, which OCR does not print.
    expect(quotedExactly('so you ignore, / So you make', lined(CHOSEN_POEMS.Now.text))).toBe(false)
    expect(quotedExactly('so you ignore / So you make', lined(CHOSEN_POEMS.Now.text))).toBe(true)
    // A quotation of the chosen poem is not in the printed poems.
    expect(quotedExactly('The moment eternal', printed('ocr-lit-01'))).toBe(false)
  })
})
