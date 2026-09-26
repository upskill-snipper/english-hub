'use client'

import { useState } from 'react'
import {
  InteractivePoemViewer,
  type LanguageDevice,
  type PoemAnnotation,
  type PoemData,
} from '@/components/study/InteractivePoemViewer'
import { doNotGoGentleIntoThatGoodNightText } from '@/data/full-texts/do-not-go-gentle-into-that-good-night'
import { poemLines } from '@/lib/study-guides/passage'

/**
 * Dylan Thomas's villanelle: the revision-notes page.
 *
 * THE POEM IS PRINTED WHOLE, from 26 September 2026. Until then the page
 * treated it as copyrighted: the quotation cards printed only the phrase each
 * one analysed, and the footer sent students to the anthology or Collected
 * Poems for the text. Thomas died on 9 November 1953, so the poem has been out
 * of UK copyright since 1 January 2024, and the site works to UK law only (the
 * founder's decision that day).
 *
 * THE LINES ARE NEVER TYPED. They are cut at runtime from the held edition,
 * src/data/full-texts/do-not-go-gentle-into-that-good-night.ts, which was
 * extracted from page 69 of the anthology PDF and re-compared with it line by
 * line on 26 September 2026 (identical, margin numbers aside). A quotation card
 * that prints a whole line takes it from the same array, so it cannot drift,
 * and so do the refrain device card, the overview's two refrains and every
 * printing of the title (TITLE, from the same file).
 *
 * REVIEWED THE SAME DAY, adversarially, with every quotation checked against
 * the held edition by script. What that found and changed:
 * - Typed poem text survived the move to runtime lines: the refrain device
 *   card and the overview printed whole lines, the enjambment card seven of
 *   line 5's eight words, the Paradox and Pun section seven words of line 3,
 *   and the title was typed four times. All now come from the held edition or
 *   were reworded. Outside file paths and URLs, which carry the title as a
 *   slug, a check of this file finds no run of more than six of the poem's
 *   words in a row.
 * - The father's failing sight was treated as unconfirmed ("the biographies
 *   consulted for this page do not mention it"). The Dylan Thomas Centre's
 *   own site (City and County of Swansea) records that in 1951 he became ill
 *   and his sight began to fail, and Pearson's November 2023 mark scheme says
 *   the blinding sight of line 13 could refer to him. That is now stated as a
 *   fact about the father, and the link to lines 13 and 14 as a reading, as
 *   the study guide does.
 * - The note on line 15 said stanza 5 has no pronoun. It has who; what it
 *   lacks is they or their.
 * - The volta note said fifteen lines about kinds of men precede line 16. The
 *   men fill twelve (lines 4 to 15); the listener goes unnamed for fifteen.
 * - Curse, bless was labelled a paradox. The guide, rightly, calls it
 *   antithesis: two opposites set side by side in one pattern.
 * - Stated as fact, now given as readings: that the poem was written to be
 *   performed at full pitch (the guide calls that a reading), that the enjambed
 *   refrain at line 6 is a statement, the psychology of the delayed address,
 *   and what the reticence says about the relationship.
 * - Quotations in the key-quote cards drawn from a neighbouring line now say
 *   which line; each refrain is heard four times, not repeated four times.
 *
 * CORRECTED THE SAME DAY, because no source reached confirmed them:
 * - D. J. Thomas "was losing his sight", stated as fact in five places.
 *   Wikipedia and the Dictionary of Welsh Biography do not say so. Gale's
 *   Poetry for Students does, but the same entry misdates the poem's first
 *   publication, so the link between the father and the blind eyes of line 14
 *   is now attributed and offered as a reading. (Partly superseded by the
 *   review above: the failing sight itself is sourced after all.)
 * - That he "had wanted to be a poet himself" and "read Shakespeare aloud to
 *   his son": unconfirmed, removed. What the sources do say replaces them.
 * - "The most famous villanelle in English" and "a French fixed form":
 *   Wikipedia says perhaps the most renowned, and traces the name to the
 *   Italian villanella and the fixed form to Jean Passerat (1606).
 * - Every refrain read as a command. In stanzas 2 to 4 the pronouns make them
 *   statements about the men; that reading, argued in the study guide this
 *   page's layout mounts, is now given here and called a reading.
 * - Quotations that were not the poem's words as printed: "Close of day",
 *   "The sad height", lower-case "blind", "good men" and "wild men".
 * - The MacNeice card said both poems end in a conditional prayer. Thomas's
 *   does not; it ends on the two refrains.
 *
 * SOURCES, each read on 26 September 2026:
 * - Pearson Edexcel International GCSE English Anthology, Issue 8 (February
 *   2026), SHA-256 beginning ec2bdca4: page 69 for the poem; the contents for
 *   the Part 3 poems named under Comparisons; the introduction for Part 3
 *   being studied for English Literature Unit 1 Section B, two poems compared
 *   with a choice of two questions, and a Poetry Booklet of all Part 3 poems
 *   provided with the question paper.
 *   https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf
 * - Wikipedia, Dylan Thomas: the father taught English literature at the
 *   local grammar school and died of pneumonia just before Christmas 1952;
 *   over a hundred BBC broadcasts in the three years from October 1945; a
 *   tour of American arts centres and campuses from February 1950; the poem
 *   published in 1951; Thomas died in New York on 9 November 1953, aged 39.
 *   https://en.wikipedia.org/wiki/Dylan_Thomas
 * - Wikipedia, the poem's own article: first published in
 *   Botteghe Oscure in 1951, collected in In Country Sleep, and Other Poems
 *   and Collected Poems 1934-1952 (both 1952).
 *   https://en.wikipedia.org/wiki/Do_not_go_gentle_into_that_good_night
 * - The Marginalian (17 January 2024): Botteghe Oscure is an Italian literary
 *   journal, and the 1951 first publication.
 *   https://www.themarginalian.org/2024/01/17/dylan-thomas-do-not-go-gentle-into-that-good-night/
 * - Dictionary of Welsh Biography, Thomas, Dylan Marlais (1914-1953): D. J.
 *   Thomas (1876-1952), senior English master at Swansea Grammar School and a
 *   First Class Honours English graduate of Aberystwyth, a positive influence
 *   on his son's widening interest in English poetry; radio made Thomas a
 *   household name. It says nothing of the father's eyesight.
 *   https://biography.wales/article/s10-THOM-MAR-1914
 * - Wikipedia, Villanelle: nineteen lines, five tercets and a quatrain, two
 *   refrains and two rhymes; from the Italian villanella, a rustic song;
 *   Passerat's poem of 1606 set the fixed form; popularised in England in
 *   the late nineteenth century; Thomas's poem perhaps the most renowned.
 *   https://en.wikipedia.org/wiki/Villanelle
 * - Gale, Poetry for Students, via Encyclopedia.com: says D. J. Thomas was
 *   blind in his last years. Used only as attributed.
 *   https://www.encyclopedia.com/arts/educational-magazines/do-not-go-gentle-good-night
 * - Dylan Thomas Centre (dylanthomas.com, City and County of Swansea),
 *   Laugharne trail, fetched 26 September 2026: his parents came to the
 *   Pelican in 1949; Dylan called on his father every day to do the
 *   crossword; in 1951 the father became sick and his sight began to fail.
 *   https://www.dylanthomas.com/dylan-thomas-trails/west-wales/laugharne/
 * - Pearson mark scheme, November 2023, 4ET1/01, fetched 26 September 2026:
 *   its indicative content says the blinding sight of line 13 could directly
 *   refer to the poet's father, who was blind.
 *   https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-rms-20240125.pdf
 * Readings of the poem, the grammar of the refrains among them, follow
 * src/data/study-guides/do-not-go-gentle-into-that-good-night.ts, verified the
 * same day against the anthology and Pearson's June 2024 mark scheme.
 */

/* ─── The poem, from the held edition ──────────────────────── */

/** The poem as the anthology prints it: 19 lines, with '' between stanzas. */
const ROWS = poemLines(doNotGoGentleIntoThatGoodNightText)
/** The row each line sits on, so LINE_ROW[0] is line 1. */
const LINE_ROW = ROWS.flatMap((text, row) => (text ? [row] : []))
/** Line n (1 to 19, as the anthology numbers them) exactly as printed. */
const line = (n: number) => ROWS[LINE_ROW[n - 1]]
/** Line n as a quotation: its closing comma, semicolon or full stop dropped. */
const quoteLine = (n: number) => line(n).replace(/[,;.]$/, '')
/** The viewer's lineRef is a ROW index, stanza breaks included. */
const row = (n: number) => LINE_ROW[n - 1]
/** The title as the anthology prints it: the words of line 1, without its comma. */
const TITLE = doNotGoGentleIntoThatGoodNightText.title

const TINT = {
  form: '#a855f7',
  language: '#10b981',
  quote: '#f59e0b',
  context: '#3b82f6',
  theme: '#ef4444',
}

/** Notes on each line, by anthology line number. */
const LINE_NOTES: Record<number, PoemAnnotation[]> = {
  1: [
    {
      type: 'Refrain',
      note: 'The first refrain, heard four times: here and at lines 6, 12 and 18. The villanelle’s rules make the poem keep coming back to it, so the form itself refuses to let go.',
      color: TINT.form,
    },
    {
      type: 'Word choice',
      note: 'Gentle is an adjective where the grammar expects the adverb gently: the listener is not to become a gentle, meek thing. The phrase "that good night" means nightfall, the bedtime farewell and death at once, and calling it good concedes that death may be natural, even kind.',
      color: TINT.language,
    },
  ],
  2: [
    {
      type: 'Thesis',
      note: 'The argument, stated before any evidence: old age should "burn and rave". To rave is to behave wildly, as someone delirious or furious does. The speaker wants old age to lose its composure, not keep it.',
      color: TINT.context,
    },
    {
      type: 'Extended metaphor',
      note: 'The phrase "close of day" begins the metaphor the whole poem runs on: a life is a single day, and dying is evening coming on.',
      color: TINT.language,
    },
  ],
  3: [
    {
      type: 'Refrain',
      note: 'The second refrain, heard at lines 3, 9, 15 and 19. Lines 1 and 3 rhyme and frame the first stanza; they will not stand side by side until the last two lines.',
      color: TINT.form,
    },
    {
      type: 'Spondee',
      note: '"Rage, rage" opens with two stressed syllables where the pentameter expects an unstressed one first, so the line lurches forward like a shout. The verb is rage, not fight or win: the poem never pretends death can be beaten.',
      color: TINT.quote,
    },
  ],
  4: [
    {
      type: 'Concession',
      note: 'The wise men know that "dark is right": death is natural, not wrong. Right is a rhyme word, chiming with night and light, so the rhyme binds acceptance to the very thing being refused. Knowing death is right does not oblige anyone to welcome it.',
      color: TINT.quote,
    },
  ],
  5: [
    {
      type: 'Metaphor',
      note: 'The phrase "forked no lightning" pictures words that never struck. Lightning forks as it splits the sky, and the wise men wanted their words to illuminate and shock. For a poet the fear is pointed: a lifetime of language that changed nothing.',
      color: TINT.language,
    },
    {
      type: 'Enjambment',
      note: 'The line ends on its subject, "they", with no punctuation, so the sentence has to run on into line 6 to find its verb.',
      color: TINT.form,
    },
  ],
  6: [
    {
      type: 'Refrain as statement',
      note: 'The refrain returns as the wise men’s verb. With "they", the last word of line 5, as its subject it reads less as a command than as a statement of what they do: the first piece of evidence for the argument. That is a reading, but a strong one.',
      color: TINT.form,
    },
  ],
  7: [
    {
      type: 'Image',
      note: 'The good men stand on the shore as "the last wave" passes. A wave’s whole existence is its brief breaking, so the image makes any human life short.',
      color: TINT.language,
    },
  ],
  8: [
    {
      type: 'Regret',
      note: 'The phrase "frail deeds" is modest to the point of pain, and "danced" gives those small acts a lost joy. Green is the poem’s only colour word. A bay can be water curved round by the shore or the laurel whose leaves crowned victors, so the deeds can be pictured dancing like light on water, or winning an honour they never received.',
      color: TINT.theme,
    },
  ],
  9: [
    {
      type: 'Refrain',
      note: 'The raging refrain completes the good men’s sentence. After their regret it sounds like a conclusion drawn from evidence rather than an order.',
      color: TINT.form,
    },
  ],
  10: [
    {
      type: 'Image',
      note: 'The wild men lived without restraint, catching and singing the sun as it crossed the sky. Their energy, like everything the poem values, is a kind of light.',
      color: TINT.language,
    },
  ],
  11: [
    {
      type: 'Regret',
      note: 'Commas on both sides of "too late" make the reader stop, as the wild men are stopped by what they learn: their delight in the passing sun was also grief for it. On one reading their revelry hastened the day they celebrated; the line itself says only that they "grieved it on its way".',
      color: TINT.theme,
    },
  ],
  12: [
    {
      type: 'Refrain',
      note: 'The first refrain again finishes a sentence about the men. Even those who lived most intensely do not go quietly.',
      color: TINT.form,
    },
  ],
  13: [
    {
      type: 'Pun',
      note: '"Grave men" are serious, solemn men and men near the grave, and "near death" confirms the second sense. It is the only time the poem uses the word death.',
      color: TINT.language,
    },
    {
      type: 'Oxymoron',
      note: 'The phrase "blinding sight" describes sight so intense that it blinds. At the edge of death the grave men see with a dazzling clarity.',
      color: TINT.language,
    },
  ],
  14: [
    {
      type: 'Simile',
      note: 'A meteor burns brightest as it is destroyed, so eyes that "could blaze like meteors" make a last burst of life the most brilliant thing a dying person can do. Gay is used in its older sense: joyful and bright.',
      color: TINT.quote,
    },
    {
      type: 'A reading',
      note: 'By 1951, the Dylan Thomas Centre in Swansea records, D. J. Thomas was ill and his sight was failing, and Pearson’s November 2023 mark scheme says the blinding sight of line 13 could refer to him. Many readers hear him in these blind eyes too. The poem does not name the father until line 16, so offer the link as a reading.',
      color: TINT.context,
    },
  ],
  15: [
    {
      type: 'Refrain',
      note: 'Stanza 5 has no they or their, so this refrain can be heard either as what the grave men do or as a command. It is the last one before the father is named.',
      color: TINT.form,
    },
  ],
  16: [
    {
      type: 'Volta',
      note: 'The turn. For fifteen lines the listener has gone unnamed, and for twelve of them the poem has talked about kinds of men; now the speaker names him, "you, my father". The general argument becomes a personal plea, and every earlier stanza can be reread as spoken to him.',
      color: TINT.quote,
    },
    {
      type: 'Setting',
      note: 'The phrase "the sad height" sets the father above the speaker: a summit at the end of life’s climb, a deathbed seen from below, or a place of suffering. Sad is the plainest feeling-word in the poem; after lightning, sun and meteors, grief is simply named.',
      color: TINT.language,
    },
  ],
  17: [
    {
      type: 'Antithesis',
      note: '"Curse, bless": two opposite imperatives separated only by a comma, and the next comma sets both apart from "me", so either can take it as its object. Any strong feeling will do, anger or blessing, so long as it proves the father still burns.',
      color: TINT.quote,
    },
    {
      type: 'Oxymoron',
      note: 'The phrase "fierce tears" fuses rage and grief. Tears usually mean surrender, and fierce refuses that meaning.',
      color: TINT.language,
    },
    {
      type: 'Tone',
      note: 'The line ends "I pray". After the commands, a prayer: the speaker admits that nothing he says can hold death back.',
      color: TINT.theme,
    },
  ],
  18: [
    {
      type: 'Refrain',
      note: 'Addressed to the father now, the first refrain is a command again, and sounds more like a desperate prayer than an argument.',
      color: TINT.form,
    },
  ],
  19: [
    {
      type: 'Closing couplet',
      note: 'The two refrains, which have taken turns to close the stanzas, stand side by side for the only time, as a rhyming couplet. The poem ends on its fury and offers no consolation.',
      color: TINT.form,
    },
  ],
}

/**
 * The key quotations, shared by the viewer's Quotes tab and the Key Quotations
 * section below. Each prints its whole line from the held edition; until 26
 * September 2026 all but the refrains printed only the phrase analysed.
 */
const KEY_QUOTES: { line: number; label: string; analysis: string; themes: string[] }[] = [
  {
    line: 1,
    label: 'Refrain 1: lines 1, 6, 12 and 18',
    analysis:
      'The title line and first refrain. The word gentle is an adjective where we expect the adverb gently: the listener is not just to avoid acting gently, but not to be gentle, not to become a meek thing. The phrase "that good night" is a triple pun: nightfall, the bedtime farewell, and death itself. Calling the night "good" quietly concedes that death may be natural and even kind, which makes the command to resist it more moving, not less. The gentle long vowels of the line contrast with the harsh energy of the second refrain.',
    themes: ['Defiance', 'Death'],
  },
  {
    line: 3,
    label: 'Refrain 2: lines 3, 9, 15 and 19',
    analysis:
      'The counter-refrain. The repeated monosyllable "Rage" opens with a double stress that breaks the iambic flow: the line performs the fury it demands. The phrase "the dying of the light" makes death a slow extinguishing rather than a sudden event. Note the verb is "rage", not fight or win: the poem asks for passion, not victory. The two refrains finally stand side by side as a couplet in the last stanza, command and exhortation fused.',
    themes: ['Defiance', 'Light and dark'],
  },
  {
    line: 2,
    label: 'Line 2',
    analysis:
      'The thesis of the whole argument. The verb "burn" begins the poem’s fire imagery (lightning, sun and meteors all follow), making vitality a kind of combustion. The word "rave" is startling: it means to behave wildly, as someone delirious or furious does, and the poem embraces that loss of self-control. Dignified acceptance is exactly what the speaker rejects. The phrase "close of day" establishes the governing metaphor of life as a single day now reaching evening.',
    themes: ['Defiance', 'Light and dark'],
  },
  {
    line: 5,
    label: 'Line 5, the wise men',
    analysis:
      'Why do even the wise resist a death they know is "right" (line 4)? Because their words never struck home: "forked no lightning" imagines language as a natural force that should split the sky, and theirs did not. For a poet, one reading goes, this is the nightmare of words without power. The line ends on "they" with no punctuation, so the sentence runs on into the refrain at line 6, which becomes the wise men’s own verb. Their intellectual acceptance of death is overruled by a sense of unfinished work: a good example of the poem’s logic of regret.',
    themes: ['Regret', 'Defiance'],
  },
  {
    line: 8,
    label: 'Line 8, the good men',
    analysis:
      'The good men, "the last wave by" (line 7), cry that their modest moral actions could have shone more brightly in a kinder setting. The phrase "frail deeds" is a poignant admission of smallness; "danced" gives those deeds a lost gaiety; "green bay" holds the poem’s only colour word, and bay can mean a curve of shore or the laurel that crowned victors. The wave metaphor matters too: a wave’s whole existence is its brief breaking, so on one reading the good men are also mourning the shortness of any human life.',
    themes: ['Regret', 'Light and dark'],
  },
  {
    line: 11,
    label: 'Line 11, the wild men',
    analysis:
      'The wild men "sang the sun in flight" (line 10), living so intensely that they seemed to celebrate time itself, and learn that they "grieved it on its way": their delight in the passing sun was also mourning for it. On one reading their revelry even hastened the day they celebrated. The phrase "too late", held between commas, is the bleakest in the poem: some knowledge arrives only when it is useless. Yet even these men do not go gentle; regret converts itself into resistance.',
    themes: ['Regret', 'Light and dark'],
  },
  {
    line: 14,
    label: 'Line 14, the grave men',
    analysis:
      '"Grave men" (line 13) is the poem’s sharpest pun: serious men, and men at the edge of the grave. The paradox of "blinding sight" in the previous line and blazing "Blind eyes" here insists that loss of sight can coexist with visionary intensity. The simile "like meteors" is exact: a meteor burns brightest precisely as it is destroyed. The word gay is used in its older sense, joyful and bright. Many readers find the line almost unbearably personal, hearing the poet’s father in it. His sight was failing by 1951, but the poem does not say these eyes are his: the Context section explains why the link is a reading rather than a fact.',
    themes: ['Light and dark', 'Defiance'],
  },
  {
    line: 16,
    label: 'Line 16',
    analysis:
      'The volta. After fifteen lines in which the listener goes unnamed, twelve of them a generalised argument about kinds of men, the poem turns to its real subject, and the change of pronoun ("you") lands like a confession. The phrase "the sad height" suggests a summit at the end of life’s climb, a place of lonely eminence; some readers see a deathbed raised above the watching son, or a place of suffering. Its quiet sorrow contrasts with the fire imagery everywhere else: here, finally, is plain grief.',
    themes: ['Father and son', 'Grief'],
  },
  {
    line: 17,
    label: 'Line 17',
    analysis:
      'A line of compressed contradictions. The antithesis "Curse, bless" asks for opposite things at once because any passionate response, fury or love, would prove the father still burns. The phrase "fierce tears" fuses rage and grief into a single image. The commas after "Curse" and "bless" break the line into a series of sobs, the second cutting the verbs off from "me". And "I pray", after the commands of the first stanza, admits the truth: the son has no power here at all. The poem ends by repeating both refrains, a son chanting against the dark.',
    themes: ['Father and son', 'Grief'],
  },
]

/** Each example is a phrase of the line its lineRef points to, verbatim. */
const LANGUAGE_DEVICES: LanguageDevice[] = [
  {
    device: 'Refrain',
    example: quoteLine(1),
    effect:
      'Heard four times, at lines 1, 6, 12 and 18, alternating with the second refrain. Each return lands in a new context: a command in stanza 1, part of the evidence in the middle stanzas, something close to a prayer at the end.',
    lineRef: row(1),
  },
  {
    device: 'Pun',
    example: 'that good night',
    effect:
      'Nightfall, the bedtime farewell and death at once. Calling death good concedes that it may be natural and kind, which makes the refusal an act of love rather than ignorance.',
    lineRef: row(1),
  },
  {
    device: 'Extended metaphor',
    example: 'close of day',
    effect:
      'Life is a single day and dying is its evening. Every image of light that follows, lightning, sun, meteors, belongs to this metaphor, so resistance looks luminous and surrender merely dim.',
    lineRef: row(2),
  },
  {
    device: 'Spondee',
    example: 'Rage, rage',
    effect:
      'Two stressed syllables open the line where the iambic beat expects an unstressed one first, so the rhythm itself rages against its frame. The comma between them is the breath between two shouts.',
    lineRef: row(3),
  },
  {
    device: 'Metaphor',
    example: 'forked no lightning',
    effect:
      'Words imagined as lightning that should split the sky. The negative admits the wise men’s words never struck, which is why they cannot accept an ending.',
    lineRef: row(5),
  },
  {
    device: 'Enjambment',
    example: 'no lightning they',
    effect:
      'The line ends on its subject with no punctuation, so the sentence runs into the refrain at line 6 to find its verb. On one reading the refrain then becomes a statement of what the wise men do, not a command.',
    lineRef: row(5),
  },
  {
    device: 'Pun',
    example: 'Grave men',
    effect:
      'Serious men and men near the grave. The same line confirms the second sense with the poem’s only use of the word death.',
    lineRef: row(13),
  },
  {
    device: 'Oxymoron',
    example: 'blinding sight',
    effect:
      'Sight so intense it blinds. At the edge of death the grave men see most clearly, and what they see is that life could still blaze.',
    lineRef: row(13),
  },
  {
    device: 'Simile and alliteration',
    example: 'Blind eyes could blaze like meteors',
    effect:
      'A meteor burns brightest as it is destroyed, so a dying person’s last burst of life becomes the most brilliant thing about them. The plosive b sounds give the line its force.',
    lineRef: row(14),
  },
  {
    device: 'Apostrophe and volta',
    example: 'And you, my father',
    effect:
      'Direct address to someone who never replies. After fifteen lines in which he goes unnamed, twelve of them about kinds of men, the listener is named, and the argument becomes a personal plea.',
    lineRef: row(16),
  },
  {
    device: 'Antithesis',
    example: 'Curse, bless',
    effect:
      'Opposite requests separated only by a comma. The speaker does not mind which he receives, so long as the father feels something strongly.',
    lineRef: row(17),
  },
  {
    device: 'Oxymoron',
    example: 'fierce tears',
    effect:
      'Rage and grief fused. Tears usually signal surrender; fierce turns even weeping into resistance.',
    lineRef: row(17),
  },
]

const POEM: PoemData = {
  title: TITLE,
  poet: 'Dylan Thomas',
  lines: ROWS.map((text, r) => {
    const notes = LINE_NOTES[LINE_ROW.indexOf(r) + 1]
    return text && notes ? { text, annotations: notes } : { text }
  }),
  context: `
    <h3>Dylan Thomas (1914-1953)</h3>
    <p>Born in Swansea, Wales. His father, D. J. Thomas, a First Class Honours graduate in English, was senior English master at Swansea Grammar School. Thomas was famous for his voice as well as his poems: he made over a hundred BBC broadcasts in the three years from October 1945, and from 1950 toured American arts centres and campuses. He died in New York on 9 November 1953, aged 39.</p>
    <h3>Publication</h3>
    <p>First published in 1951 in the Italian literary journal <em>Botteghe Oscure</em>, then collected in 1952 in <em>In Country Sleep, and Other Poems</em> and <em>Collected Poems 1934-1952</em>.</p>
    <h3>The father</h3>
    <p>The poem is usually read as Thomas speaking to his own father, who died of pneumonia just before Christmas 1952, the year after it was published. So it is not an elegy for a dead man: it pleads with a living one.</p>
    <h3>In the exam</h3>
    <p>The poem is in Part 3 of the Pearson Edexcel International GCSE English Anthology, studied for English Literature. In Paper 1 Section B you compare two anthology poems, with a choice of two questions, and a Poetry Booklet containing all the Part 3 poems comes with the question paper.</p>
  `,
  summary: `Stanza 1 (lines 1-3): The speaker opens with both refrains, telling a listener not yet named not to go quietly into death but to rage against it. Between them sits the thesis: old age should burn with energy and fury at the end of its day.

Stanza 2 (lines 4-6): The wise men. They know at the end that death is right, yet because their words never struck with the force they hoped for, they refuse to go quietly. The sentence runs over line 5, so the refrain becomes their verb.

Stanza 3 (lines 7-9): The good men. As the last wave passes them, they cry out that their small, fragile acts might have shone brightly. They too become the subject of the raging refrain.

Stanza 4 (lines 10-12): The wild men. They lived without restraint and celebrated the sun as it crossed the sky, and learn too late that they were mourning its passing all along. They do not go quietly either.

Stanza 5 (lines 13-15): The grave men. Close to death, they see with a dazzling clarity that even eyes without sight could blaze with joy, like meteors. They too rage against the coming dark.

Stanza 6 (lines 16-19): The turn. The speaker names his listener at last: his father, on a high and sorrowful place. He asks the father to curse him or bless him with fierce tears, the commands give way to a prayer, and the two refrains close the poem side by side.

Overall: a universal argument, laid out as evidence, that collapses into a personal plea. The poem admits death is right and demands rage anyway: love refusing what reason accepts.`,
  formAndStructure: `Form: a villanelle, 19 lines in five tercets and a closing quatrain, on only two rhyme sounds (the night rhymes and the day rhymes). Lines 1 and 3 are refrains: they take turns to close the tercets and stand together as the final couplet.

Why the form matters: the refrains keep returning, so the poem circles rather than progresses, enacting a speaker who will not let go. One of the strictest forms in English holds enormous feeling under pressure.

Argument: stanza 1 states the thesis; stanzas 2 to 5 give one kind of men a stanza each (wise, good, wild, grave), each discovering something unfinished; stanza 6 turns to the father.

The grammar of the refrains, a reading: in stanzas 1 and 6 they are commands. In stanzas 2 to 4 the pronouns they and their make each refrain complete a sentence about the men, so the same words state what those men do. Stanza 5 has no such pronoun and can be heard either way.

Metre: largely iambic pentameter, roughened where feeling demands. The doubled verb that opens lines 3, 9, 15 and 19 begins with two stresses.

Enjambment: line 5 ends on its subject with no punctuation, so the sentence runs into the refrain at line 6.

Volta: line 16, where general argument becomes direct address to the father.`,
  keyQuotes: KEY_QUOTES.map((q) => ({
    quote: quoteLine(q.line),
    analysis: q.analysis,
    themes: q.themes,
  })),
  languageDevices: LANGUAGE_DEVICES,
}

/* ─── Expandable Section Component ─────────────────────────── */

function Section({
  title,
  icon,
  defaultOpen = false,
  children,
}: {
  title: string
  icon: string
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="mb-4 rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-start hover:bg-muted transition-colors"
      >
        <span className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="text-lg font-bold text-foreground">{title}</span>
        </span>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && <div className="border-t border-border px-5 py-5">{children}</div>}
    </div>
  )
}

function QuoteCard({
  quote,
  speaker,
  analysis,
}: {
  quote: string
  speaker?: string
  analysis: string
}) {
  return (
    <div className="rounded-lg border-s-4 border-violet-400 bg-violet-500/5 p-4 mb-3">
      <p className="text-sm font-semibold text-violet-800 dark:text-violet-200 italic">
        &ldquo;{quote}&rdquo;
      </p>
      {speaker && <p className="mt-1 text-xs font-medium text-violet-600">{speaker}</p>}
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  )
}

function ThemeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-violet-500/30 bg-violet-500/10/30 p-4 mb-3">
      <h4 className="font-bold text-violet-700 dark:text-violet-300">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

/* ─── Main Page ────────────────────────────────────────────── */

export default function DoNotGoGentlePage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            Poetry
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel IGCSE Anthology
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Villanelle
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {TITLE}: Revision Notes
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">Dylan Thomas, published 1951</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          A complete International GCSE guide to Dylan Thomas&apos;s famous villanelle: the whole
          poem with line-by-line notes, the strict 19-line form and its two refrains, the four kinds
          of men who face death, the turn to the speaker&apos;s dying father, key quotations with
          analysis, context, comparison ideas and exam tips.
        </p>
      </div>

      {/* The poem, cut from the held edition at runtime (see the docblock). */}
      <div id="the-poem" className="mb-8">
        <InteractivePoemViewer poem={POEM} />
        <p className="mt-2 text-xs text-muted-foreground">
          Tap an underlined line for notes, or use the buttons above the poem to highlight
          quotations and techniques. Line numbers follow the anthology.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'The Poem', id: 'the-poem' },
            { label: 'Overview', id: 'overview' },
            { label: 'Form & Structure', id: 'form-structure' },
            { label: 'Voice & Speaker', id: 'voice-speaker' },
            { label: 'Themes', id: 'themes' },
            { label: 'Key Quotations', id: 'key-quotations' },
            { label: 'Language & Imagery', id: 'language-imagery' },
            { label: 'Context', id: 'context' },
            { label: 'Comparisons', id: 'comparisons' },
          ].map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {/* ────────────────────────────────── OVERVIEW */}
        <div id="overview">
          <Section title="Overview" icon="📖" defaultOpen>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>{TITLE}</strong> is a 19-line villanelle in which a son urges his dying
                father to resist death rather than accept it quietly. The whole poem is built around
                two repeating lines (refrains): &ldquo;{quoteLine(1)}&rdquo; and &ldquo;
                {quoteLine(3)}&rdquo;. It is usually read as Thomas&apos;s plea to his own father,
                D. J. Thomas, a Swansea schoolmaster, and it was first published in 1951 in the
                Italian literary journal <em>Botteghe Oscure</em>, the year before his father died.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The argument unfolds with almost legal precision. Stanza 1 states the thesis: old
                age should &ldquo;burn and rave&rdquo; rather than fade. Stanzas 2 to 5 then present
                four kinds of men, wise men, good men, wild men and grave men, each of whom
                discovers at the end of life that something is unfinished, and each of whom
                therefore refuses to surrender meekly. Only in the final quatrain does the poem
                reveal its true addressee: &ldquo;And you, my father&rdquo;. The universal argument
                collapses into a single, intensely personal plea.
              </p>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  At a Glance
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Form: villanelle (19 lines, five tercets plus a quatrain)</li>
                  <li>&bull; Two alternating refrains, each heard four times</li>
                  <li>&bull; Metre: largely iambic pentameter</li>
                  <li>&bull; Voice: a son addressing his dying father</li>
                  <li>&bull; Core tension: acceptance of death versus furious resistance</li>
                  {/* 26 September 2026: this said English Language A as well. The poem is in
                      Part 3 of the anthology, set for English Literature (4ET1) only. */}
                  <li>
                    &bull; In Part 3 of the Pearson Edexcel International GCSE English Anthology:
                    set for English Literature (4ET1) only, not English Language A
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── FORM & STRUCTURE */}
        <div id="form-structure">
          <Section title="Form & Structure" icon="🏗️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Villanelle</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  A villanelle is a fixed form: 19 lines arranged as five three-line stanzas
                  (tercets) and a closing four-line stanza (quatrain), using only two rhyme sounds
                  throughout (here, the &ldquo;night&rdquo; rhymes and the &ldquo;day&rdquo; rhymes,
                  an ABA pattern). Line 1 and line 3 of the first stanza become refrains: they take
                  turns ending the following tercets, and then appear together as the final couplet.
                  Choosing one of the strictest forms in English for a poem about rage is
                  deliberate: the discipline of the form holds enormous emotion under pressure, like
                  a fist clenched around grief.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Refrains Do the Arguing</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Because the two refrains keep returning, the poem circles rather than progresses,
                  enacting the son&apos;s refusal to let go. Each repetition lands in a new context:
                  after the wise men the refrain sounds like a conclusion drawn from evidence; after
                  &ldquo;you, my father&rdquo; it sounds like a desperate prayer. Repetition also
                  mimics incantation, as if the words themselves could hold death back.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Look closely at the grammar too. In stanzas 1 and 6 the refrains are commands:
                  &ldquo;Do not go gentle&rdquo; forbids and &ldquo;Rage, rage&rdquo; exhorts, so
                  the son both forbids and begs. In stanzas 2 to 4, though, each refrain completes a
                  sentence about the men, and the pronouns <em>they</em> and <em>their</em> suggest
                  the same words now state what those men do; stanza 5 has no such pronoun and can
                  be heard either way. That is a reading, but a strong one: the men of the middle
                  stanzas are the proof that raging can be done.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">A Structured Argument</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The middle stanzas form a catalogue: wise men (thinkers), good men (moral doers),
                  wild men (hedonists and poets), grave men (the solemn, and those near the grave).
                  Each category is given one tercet, each discovers a regret, and each resists
                  death. The parallel grammar (&ldquo;Though wise men...&rdquo;, &ldquo;Good
                  men...&rdquo;, &ldquo;Wild men...&rdquo;, &ldquo;Grave men...&rdquo;) builds a
                  rhetorical case so that the final, personal stanza arrives with the full weight of
                  the preceding evidence behind it. The shift from third person to second person
                  (&ldquo;And you, my father&rdquo;) is the structural climax of the poem.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Metre and Sound</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The underlying metre is iambic pentameter, but Thomas roughs it up where emotion
                  demands. &ldquo;Rage, rage&rdquo; opens with two heavy stresses (a spondee), so
                  the line itself rages against its metrical frame. The long open vowels of
                  &ldquo;night&rdquo;, &ldquo;light&rdquo;, &ldquo;day&rdquo; and &ldquo;they&rdquo;
                  give the poem its tolling, elegiac music, while plosive consonants
                  (&ldquo;burn&rdquo;, &ldquo;blaze&rdquo;, &ldquo;Blind&rdquo;) supply the energy
                  of protest.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── VOICE & SPEAKER */}
        <div id="voice-speaker">
          <Section title="Voice & Speaker" icon="🗣️">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The speaker is usually read as a son at his father&apos;s deathbed, and the poem is
                an apostrophe, a direct address. Yet for five stanzas the father is hidden behind
                generalisation: the speaker talks about wise men, good men, wild men and grave men
                as if delivering a lecture on how humanity should die. Only in line 16 does the mask
                slip: &ldquo;And you, my father&rdquo;. One reading is that the delay is
                psychologically revealing: the son hides his personal terror inside a universal
                argument, because speaking directly about his father&apos;s death is almost
                unbearable.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                In the first and last stanzas the voice is commanding, even bullying: imperatives
                (&ldquo;Do not go&rdquo;, &ldquo;Rage, rage&rdquo;, &ldquo;Curse, bless, me
                now&rdquo;) dominate. But the final &ldquo;I pray&rdquo; exposes the powerlessness
                underneath the commands. A son cannot order death away; he can only plead. Many
                readers also hear guilt and need in the extraordinary request that the father
                &ldquo;Curse, bless, me now&rdquo;: any response, even anger, would prove the father
                is still fiercely alive. The speaker wants the father&apos;s fire for the
                father&apos;s sake, but also for his own.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strictly, the poem establishes only that the speaker is the father&apos;s child.
                Calling the speaker a son follows the usual reading of the poem as Thomas speaking
                to his own father: a reasonable reading, and in an essay you can say that it is one.
              </p>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Discussion Point
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Is the poem selfless or selfish? It asks a dying, exhausted man to fight on
                  because his son cannot face losing him. Top answers weigh the love in the poem
                  against its refusal to allow the father a peaceful death.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title="Key Themes" icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title="Defiance in the Face of Death"
                description="The poem's central paradox is that it accepts death is coming ('dark is right') while insisting it must be fought anyway. Resistance is not about winning; it is about the manner of dying. To 'burn and rave' is to assert the value of life right up to its final second. Thomas turns dying into a last act of living, and passivity into the only real defeat. The villanelle's circling refrains enact this: the poem literally will not stop saying no."
              />
              <ThemeCard
                title="Father, Son and Grief"
                description="Beneath the public rhetoric is a private crisis: a child watching a father fade. The poem is usually read as Thomas speaking to his own father, D. J. Thomas, senior English master at Swansea Grammar School, who died just before Christmas 1952, the year after the poem was published. It is anticipatory grief, mourning a man not yet dead, and its commands are really pleas: stay yourself, stay angry, stay alive. One reading is that the reticence of five stanzas of generalisation before 'you, my father' is itself a portrait of a relationship in which love was real but hard to speak."
              />
              <ThemeCard
                title="Regret and the Unfinished Life"
                description="Each of the four types of men resists death because of something incomplete. The wise know their words 'had forked no lightning'; the good see their 'frail deeds' might have shone brighter; the wild learn 'too late' that they grieved the sun they sang; the grave men realise even failing eyes 'could blaze like meteors'. Death clarifies what was missed, and that clarity fuels rage. The poem suggests no life ever feels finished, which is precisely why none should be surrendered quietly."
              />
              <ThemeCard
                title="Light and Darkness, Vitality and Decay"
                description="The poem's whole symbolic system opposes light (life, energy, sight, meaning) to darkness (death, blindness, ending). The phrases 'close of day', 'the dying of the light' and 'that good night' make death a nightfall; lightning, meteors, the sun and blazing eyes make life a brightness worth burning for. Read biographically, the pattern sharpens: many readers hear the poet's father in the 'Blind eyes' of line 14 (see Context), and if they are his, the metaphor carries a painful literal charge."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title="Key Quotations with Analysis" icon="📝">
            {/* 26 September 2026: this said to learn the refrains and a few more
                lines. The anthology's introduction says a Poetry Booklet of every
                Part 3 poem comes with the paper, so the skill is choosing words. */}
            <p className="text-sm text-muted-foreground mb-4 italic">
              In the exam you will have the poem in front of you: a Poetry Booklet containing all
              the Part 3 poems comes with the question paper. So the skill is not memorising lines
              but choosing two or three precise words and analysing them, and linking them to the
              villanelle form: repetition is the poem&apos;s main method.
            </p>
            <div className="space-y-1">
              {/* Until 26 September 2026 all but the two refrain cards printed only
                  the phrase analysed, because the poem was treated as copyrighted.
                  Each card now prints its whole line, taken from the held edition
                  (KEY_QUOTES above), which is what their analysis was written for. */}
              {KEY_QUOTES.map((q) => (
                <QuoteCard
                  key={q.line}
                  quote={quoteLine(q.line)}
                  speaker={q.label}
                  analysis={q.analysis}
                />
              ))}
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── LANGUAGE & IMAGERY */}
        <div id="language-imagery">
          <Section title="Language & Imagery" icon="🎨">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Light, Fire and the Dying Day</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The poem runs on one extended metaphor: life is light, death is darkness, and
                  dying is nightfall (&ldquo;close of day&rdquo;, &ldquo;the dying of the
                  light&rdquo;). Against the encroaching dark, Thomas sets escalating images of
                  fierce light: burning, forked lightning, the sun in flight, blazing meteors. Each
                  type of man is associated with his own form of light, so the catalogue of stanzas
                  is also a catalogue of fires. The effect is to make resistance luminous and
                  surrender merely dim.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Paradox and Pun</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Thomas compresses contradiction into tiny spaces: &ldquo;good night&rdquo; (a
                  kindly death and a farewell), &ldquo;Grave men&rdquo; (solemn and dying),
                  &ldquo;blinding sight&rdquo; (insight at the cost of sight), &ldquo;Curse,
                  bless&rdquo;. These paradoxes are the poem&apos;s honesty: it knows death is
                  natural and right, and demands fury anyway. The puns also show wit surviving in
                  the middle of grief, itself a small refusal to go gentle.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Sound Patterning</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Only two rhyme sounds run through all nineteen lines, an echo chamber in which
                  &ldquo;night&rdquo;, &ldquo;light&rdquo;, &ldquo;right&rdquo;,
                  &ldquo;bright&rdquo;, &ldquo;flight&rdquo;, &ldquo;sight&rdquo;,
                  &ldquo;height&rdquo; toll like a bell. Alliteration binds opposites together
                  (&ldquo;go gentle... good night&rdquo;, &ldquo;Blind... blaze... be gay&rdquo;),
                  and the heavy repetition of &ldquo;rage&rdquo; turns the poem into something close
                  to chant or spell. One reading, not a fact about how he wrote it, is that Thomas,
                  famous for his broadcasts, built the poem for the voice, to be performed at full
                  pitch: a good reason to read it aloud when you revise.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title="Context" icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Dylan Thomas and His Father</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Dylan Thomas (1914-1953) was born in Swansea, Wales. His father, D. J. Thomas, a
                  First Class Honours graduate in English from the University College of Wales,
                  Aberystwyth, was senior English master at Swansea Grammar School; the Dictionary
                  of Welsh Biography credits him with a positive influence on his son&apos;s
                  widening interest in English poetry. The poem was first published in 1951 in the
                  journal <em>Botteghe Oscure</em> and then in the collection{' '}
                  <em>In Country Sleep</em>; D. J. Thomas died of pneumonia just before Christmas
                  1952, and Dylan himself died in New York less than a year later, on 9 November
                  1953, aged 39.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {/* 26 September 2026: this said the biographies consulted did not mention
                      the father's eyesight. The Dylan Thomas Centre's site does; see the
                      docblock. The failing sight is a fact; its link to the lines is a
                      reading. */}
                  According to the Dylan Thomas Centre in Swansea, D. J. Thomas became ill in 1951
                  and his sight began to fail. Pearson&apos;s own mark scheme for November 2023
                  suggests that the &ldquo;blinding sight&rdquo; of line 13 could refer to him, and
                  many readers hear him in the &ldquo;Blind eyes&rdquo; of line 14. The poem does
                  not name the father until line 16, so offer that link as a reading, tied to the
                  line, not as a fact about the poem.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">A Modern Master of an Old Form</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The villanelle takes its name from the Italian <em>villanella</em>, a rustic song.
                  Its fixed pattern of two refrains goes back to a French poem by Jean Passerat
                  published in 1606, and it became popular in English in the late nineteenth
                  century. Thomas&apos;s poem is perhaps the best known of all villanelles. The
                  choice connects him to a tradition of technically intricate, musical poetry, and
                  suits a poet famous for his voice: he made over a hundred BBC broadcasts in the
                  three years from October 1945, and from 1950 toured American arts centres and
                  campuses. Knowing the form&apos;s rules lets you show how meaning is made by the
                  form itself, not just decorated by it.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Attitudes to Death</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Much consolatory writing, religious and secular, encourages calm acceptance of
                  death. Thomas&apos;s poem pushes against that whole tradition: it offers no
                  afterlife, no comfort, only the demand that life be gripped to the last. Some
                  readers find this heroic and humanist; others find it a refusal of the peace a
                  dying person might need. Strong comparison answers can set the poem against more
                  accepting treatments of death elsewhere in the anthology.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── COMPARISONS */}
        <div id="comparisons">
          <Section title="Comparison Suggestions" icon="🔗">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Useful pairings with other poems in Part 3 of the Edexcel IGCSE anthology:
              </p>
              <div className="rounded-lg border border-border bg-muted p-4">
                <h4 className="font-bold text-primary">Piano (D. H. Lawrence)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Both are poems about a parent, written from the child&apos;s perspective, and both
                  struggle with overwhelming feeling. Lawrence is dragged backwards into memory and
                  weeps for what is already lost; Thomas fights forwards, trying to prevent a loss
                  that has not yet happened. Compare the surrender at the end of Piano with the
                  refusal to surrender in the refrains.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <h4 className="font-bold text-primary">Remember (Christina Rossetti)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Both poems are spoken across a deathbed, from opposite sides. Rossetti&apos;s
                  speaker imagines her own death and moves towards letting go, even of being
                  remembered if remembering would make her beloved sad; Thomas&apos;s speaker faces
                  his father&apos;s death and refuses to let go at all. Contrast tone (incantatory
                  fury against quiet resignation) and form: her sonnet turns at line 9 and lets her
                  change her mind, while his villanelle&apos;s refrains keep returning, so his
                  speaker cannot be moved.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <h4 className="font-bold text-primary">Prayer Before Birth (Louis MacNeice)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Two dramatic addresses at the two ends of life: an unborn child pleading before
                  birth, a son pleading at a deathbed. Both use insistent repetition and
                  incantation, and both are framed as prayer: MacNeice&apos;s from its title,
                  Thomas&apos;s when the commands give way to &ldquo;I pray&rdquo;. Compare how
                  repetition creates urgency in each, and how each poem treats the individual facing
                  forces too large to control.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <h4 className="font-bold text-primary">Sonnet 116 (Shakespeare)</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Both poems use a strict traditional form to make a defiant universal claim, and
                  both argue against time and death. Shakespeare claims love outlasts time; Thomas
                  demands that vitality defy it. Compare how each poet uses the discipline of form
                  (sonnet, villanelle) to give an emotional argument the force of logic.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">
          Exam Tips for <em>{TITLE}</em>
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Lead with the villanelle.</strong> Name the form precisely (19 lines, five
              tercets and a quatrain, two refrains, two rhyme sounds) and, crucially, explain its
              effect: the circling repetition enacts refusal to let go.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Track the structure of the argument.</strong> Thesis, four categories of men,
              then the personal turn at &ldquo;And you, my father&rdquo;. Essays organised around
              this turn almost write themselves.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Zoom in on small grammatical choices.</strong> The adjective <em>gentle</em>{' '}
              where you expect <em>gently</em>, the spondee of &ldquo;Rage, rage&rdquo;, the
              antithesis of &ldquo;Curse, bless&rdquo;. Examiners reward word-level analysis tied to
              effect.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              {/* 26 September 2026: this and the context heading named an assessment
                  objective for biography. That objective, in 4ET1, is links between
                  texts, and Pearson's June 2024 mark scheme credits the anthology
                  poetry section for language, form and structure and comparison only,
                  so context earns no marks there. */}
              <strong>Use the biography sparingly.</strong> The anthology poetry question rewards
              analysis and comparison, not context. Read biographically, the dying father behind the
              poem gives &ldquo;Blind eyes&rdquo; and &ldquo;sad height&rdquo; a painful literal
              charge, but keep it to a clause tied to specific lines, and call it a reading, rather
              than bolting it on.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Hold the central paradox.</strong> The poem admits &ldquo;dark is right&rdquo;
              yet demands rage. Top answers argue that the contradiction is the meaning: love
              refuses what reason accepts.
            </span>
          </li>
        </ul>
      </div>

      {/* Rights line. Until 26 September 2026 this footer said the page quoted
          short extracts for criticism and review and sent students elsewhere
          for the full text. The poem is out of UK copyright and is printed in
          full above, from the held edition; see the docblock at the top. */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>{TITLE}</em> is out of UK copyright (Dylan Thomas died in 1953) and is printed here as
          the Pearson Edexcel International GCSE English Anthology prints it.
        </p>
      </footer>
    </>
  )
}
