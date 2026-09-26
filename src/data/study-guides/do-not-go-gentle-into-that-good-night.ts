import { doNotGoGentleIntoThatGoodNightText } from '@/data/full-texts/do-not-go-gentle-into-that-good-night'
import { poemLines } from '@/lib/study-guides/passage'
import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Do not go gentle into that good night, Dylan Thomas (first published 1951).
 * A supplement: the page at
 * /resources/revision-notes/do-not-go-gentle-into-that-good-night keeps its
 * overview, themes, voice and key quotations, and this file holds everything
 * else, with the scene cards and character map.
 *
 * DEEPENED, 26 September 2026, once the poem was held as the anthology prints
 * it (src/data/full-texts/do-not-go-gentle-into-that-good-night.ts):
 * - The whole poem is printed, cut from the held edition by poemLines() rather
 *   than typed, with 29 annotations, at least one on every line, in line order.
 *   The three passage guides it replaces (lines 1-6, 7-15, 16-19, pointer and
 *   summary only) were written while the poem was treated as copyrighted;
 *   their notes are folded into the line-by-line ones.
 * - The lines are joined with " / ", the separator types.ts documents, not
 *   "\n", and the renderer turns each one into a line break. The reason is the
 *   highlighting: markedPassage() in study-guide-sections.tsx finds each
 *   annotated phrase in the extract text by exact search, and a refrain that
 *   returns is word for word the line it repeats, so it can only be marked
 *   where it returns by anchoring on the end of the line before it (“they / Do
 *   not go gentle”). That phrase is found only if the extract uses the same
 *   separator. Joined with "\n", the six notes on the returning refrains still
 *   pass the guide test but are never marked in the printed poem. (The guide
 *   test passes either way since the held-edition reader began decoding the
 *   source file's \n escapes on 26 September 2026; both joins were run.)
 * - context, languageAnalysis and structureForm are now written here, so
 *   `native` no longer claims them. The page above still has its own shorter
 *   Form & Structure, Language & Imagery and Context sections; see below.
 * - The timeline has seven moments, the last stanza split at the full stop
 *   that ends line 17. Vocabulary, exam practice, the model answer and
 *   compareWith were rebuilt on documents fetched that day (sources).
 *
 * THE EXAM, from Pearson only. The specification (Issue 3, August 2025): Paper
 * 1 Section B is one essay question from a choice of two, comparing two Part 3
 * poems; closed book, but the poems are provided. The November 2023 paper
 * (4ET1/01) set this poem with one other of the candidate's choice, on
 * emotions, and advised 40 minutes; its mark scheme names If-, Prayer Before
 * Birth, Piano, Poem at Thirty-Nine and War Photographer as suitable partners.
 * The January 2023 examiners' report (4ET1/01R) discusses a question on
 * feelings about fathers in Poem at Thirty-Nine and this poem. The June 2024
 * mark scheme (Paper 1R) lists this poem for a question on advice in If-. No
 * mark tariffs are stated: the validator keeps those to ExamPlacementCard.
 *
 * FACTS NEWLY SOURCED THAT DAY. The father's failing sight, which earlier
 * passes could not confirm, is recorded by the Dylan Thomas Centre's site
 * (City and County of Swansea) and by Poetry for Students (Gale), and Pearson's
 * November 2023 mark scheme reads line 13 that way; it is stated as a fact
 * about the father and as a reading of the line. The letter of 28 March 1951
 * to Marguerite Caetani comes from Amanda French's dissertation (University of
 * Virginia, 2004), which cites Thomas's Collected Letters, page 800, and is
 * confirmed by Gale. The date of composition is disputed (1945, 1947 and
 * 1949-50 are all proposed), so none is given.
 *
 * REVIEWED, 26 September 2026, by a second pass that re-fetched every source
 * above and re-counted the held edition. The form, rhyme, syllable, sentence,
 * pronoun and punctuation counts all held, and all 29 notes are still marked in
 * order. What it changed, and why:
 * - Readings stated as fact are now offered as readings: the "one place" rage
 *   and grief meet, frail as the good men's own word, the rhyme on right, and
 *   the claim that the imperatives end in asking (lines 18 and 19 command).
 * - Line 11's grieved has two senses (to mourn, to cause sorrow); the note and a
 *   new vocabulary entry give both rather than only the first.
 * - Context said the poem's "verbs are in the present tense"; lines 5, 8, 10
 *   and 11 are not. It also moved the listener from reading to fact, and dated
 *   Dylan's first term to October 1925 where the Birthplace has September.
 * - Villanelle history followed Wikipedia more loosely than it reads: the form
 *   began as a song, not a poem, and Gosse and Dobson popularised it.
 * - The January 2023 report says coverage of this poem was "more limited", not
 *   that it was less than of Walker's; the tips now say what it says.
 * - Stanza 5's timeline card said the grave men rage, against this file's own
 *   reading that its refrain can go either way. Rossetti's forget and smile is
 *   line 13, not 12. The model answer's quotations run to four words, not three.
 *
 * EARLIER PASSES, 25 and 26 September 2026: every phrase checked against the
 * anthology PDF (SHA-256 ec2bdca4...a9f3, the file Pearson served) and
 * poets.org; "back to back" for Rage, rage (the word the appears twice in that
 * refrain line); the pronoun reading of the refrains softened to a reading; the
 * spondee entry no longer calls the middle refrains imperatives; the June 2024
 * mark scheme named as Paper 1R.
 *
 * THE PAGE ABOVE, which this file does not edit, is right about the form, the
 * refrain lines and the quotations it prints, and wrong or unverified here:
 * - Its context says D. J. Thomas wanted to be a poet and read Shakespeare
 *   aloud to his son. Neither could be confirmed from a source reachable on 26
 *   September 2026, so this file relies on neither. (Wikipedia records only
 *   that he had ambitions to rise above teaching.) Its Form & Structure,
 *   Language & Imagery and Context sections now sit above this file's fuller
 *   ones and could be removed from page.tsx.
 * - Its card on line 17 says commas sit around the words me now. There is a
 *   comma before them and none after.
 * - It reads every refrain as a command. In stanzas 2 to 4 the pronouns they
 *   and their make each refrain the main verb of a sentence about one kind of
 *   men; stanza 5 has no pronoun and can be read either way. This file argues
 *   that reading and says it is one.
 * - Its card on line 11 says the wild men's revelry was hastening the sun. The
 *   line says only that they grieved it on its way.
 *
 * RIGHTS. Dylan Thomas died on 9 November 1953, so the poem has been in the
 * UK public domain since 1 January 2024. It is still in copyright in the USA;
 * the site works to UK law only (the founder's decision, 26 September 2026).
 * The anthology's permission line covers the edition, not a UK copyright in
 * the words. The fair-dealing quotation budget this file once kept no longer
 * applies.
 */
export const guide: StudyGuide = {
  slug: 'do-not-go-gentle-into-that-good-night',
  title: 'Do not go gentle into that good night',
  author: 'Dylan Thomas',
  form: 'poem',
  scope:
    'The whole poem, 19 lines in five three-line stanzas and a closing four-line stanza, as printed on page 69 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3. Set for Pearson Edexcel International GCSE English Literature (4ET1), Paper 1 Section B, where it is compared with another Part 3 poem. Line numbers in this guide follow the anthology, which prints 5, 10 and 15 in the margin.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'Dylan Thomas, first published in the journal Botteghe Oscure in 1951. Out of copyright in the UK since 1 January 2024. The text and line numbers follow the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), page 69.',
  },
  workLength: {
    words: 168,
    lines: 19,
    basis:
      'Counted on 25 September 2026 from page 69 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), in Pearson’s own PDF, and again on 26 September 2026 from the held edition: 19 lines, five tercets and a quatrain, title and author line excluded. 168 words, 98 of them different; the poem has no hyphenated words, so splitting on spaces gives the same figure.',
  },

  native: {
    overview: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
    themes: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
    characters: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
    keyQuotes: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
  },

  context: [
    {
      heading: 'Dylan Thomas, Swansea and a teacher of English',
      body: 'Dylan Thomas was born on 27 October 1914 at 5 Cwmdonkin Drive, in the Uplands area of Swansea. His father, David John Thomas (1876-1952), known as D. J. or Jack, had a first-class honours degree in English from University College, Aberystwyth, and was senior English master at Swansea Grammar School, where Dylan was a pupil from 1925. Both parents spoke English and Welsh, and Jack taught Welsh at evening classes. Dylan left school at sixteen to work as a reporter on the South Wales Daily Post, and his first book, 18 Poems, appeared in December 1934, when he was twenty. So if the poem is read, as it usually is, as Thomas speaking to his own father, its listener was a man who taught words for a living, and some readers hear that in stanza 2, where the wise men’s words “forked no lightning”. The poem does not say the wise men are like the father; that is a reading, and it should be offered as one.',
    },
    {
      heading: 'Written to a father who was still alive',
      body: 'In 1949 Thomas’s parents moved to the Pelican, a house in Laugharne across the road from Brown’s Hotel, which Thomas rented for them; he and his family had moved into the Boathouse in Laugharne that May. According to the Dylan Thomas Centre in Swansea, he called on his father every day to do the crossword, and by 1951 his father was ill and his sight was failing. On 28 March 1951 Thomas sent the poem to Marguerite Caetani, the editor who published it, and wrote that the one person he could not show it to was “my father, who doesn’t know he’s dying”. D. J. Thomas died of pneumonia on 16 December 1952. So the poem was written, and printed, while its listener was alive. It pleads with a man who can still act, which fits its urgent present-tense commands, and it is why this guide calls it a plea rather than an elegy.',
    },
    {
      heading: 'Publication, and a date of writing nobody agrees on',
      body: 'The poem first appeared in 1951 in Botteghe Oscure, a literary journal published in Rome from 1948 to 1960 and edited by Marguerite Caetani. In 1952 it was collected in In Country Sleep, and Other Poems (New Directions) and in Collected Poems 1934-1952, published by Dent on 10 November 1952, about five weeks before D. J. Thomas died. When it was written is disputed. Poetry for Students (Gale) says it was probably composed in 1945; Wikipedia says 1947, in Florence; Amanda French’s study of the villanelle argues that Thomas probably began it around 1949 or 1950. None of these is certain, so this guide gives no date of composition, and an essay should not give one either. Thomas himself died in New York on 9 November 1953, aged 39, less than a year after his father.',
    },
    {
      heading: 'An old French form in modern English',
      body: 'The villanelle takes its name from the Italian villanella, a rustic song, and began as a simple, ballad-like song with no fixed form. Its fixed shape of nineteen lines and two refrains is traced to a single poem by Jean Passerat, published in 1606, though how that one poem became a rule is debated. After Théodore de Banville’s treatise on French verse appeared in 1872, Edmund Gosse and Austin Dobson popularised the form in England, and despite its French origins most villanelles have been written in English. The rules fix the number of lines, the two rhyme sounds and the refrains, but not the metre: most nineteenth-century villanelles used lines of three or four beats, and most twentieth-century ones, like this, used pentameter. Thomas’s poem is perhaps the most famous villanelle of all; Elizabeth Bishop’s One Art (1976) is another well-known example.',
    },
    {
      heading: 'A poem for the voice',
      body: 'Thomas was a celebrated broadcaster and reader of poetry. In the three years from October 1945 he made more than a hundred broadcasts for the BBC, and from February 1950 he made four trips to the United States to give readings; he died during the fourth. One reading of this poem’s heavy repetition, its two rhyme sounds and its short, mostly one-syllable words is that it was made to be heard: a refrain is easy for a listener to catch and hold. That is a reading, not a fact about how Thomas wrote it, but it is a good reason to read the poem aloud when you revise it.',
    },
    {
      heading: 'Using context in the exam',
      body: 'In Pearson’s specification for International GCSE English Literature, Paper 1 Section B, where this poem is set, tests two things: analysis of language, form and structure, and the links you make between two poems. Context is assessed in Section C, on modern prose, not here. So biography earns its place in an anthology answer only when it sharpens a point about the words: that the father was alive when the poem was published explains its urgent present tense, for example. Pearson’s own mark scheme for the November 2023 paper suggests that the “blinding sight” of line 13 could refer to Thomas’s father. A clause like that, tied to a line, is the right amount.',
    },
  ],

  extracts: [
    {
      title: 'The whole poem, line by line',
      where: 'Lines 1-19, all six stanzas',
      pointer:
        'The whole poem as the anthology prints it on page 69 (Part 3). It is cut here from the held edition, not typed, and a blank line marks each stanza break. Line numbers follow the anthology, which prints 5, 10 and 15 in the margin. Each refrain is marked where it first appears; where one returns, the note is anchored on the end of the line before it.',
      text: poemLines(doNotGoGentleIntoThatGoodNightText).join(' / '),
      annotations: [
        {
          phrase: 'Do not go gentle',
          note: 'Line 1. A negative imperative: the poem opens with a command, not a description. Gentle is an adjective where the adverb gently might be expected, which lets the phrase be read two ways, as do not go gently and as do not become gentle, in the way people go quiet or go grey. On that reading the speaker forbids both a manner of dying and a change in the person dying.',
        },
        {
          phrase: 'that good night',
          note: 'Line 1. A metaphor and a euphemism: night stands for death, so the word itself is not needed. The demonstrative that points at it as if it were already in view. Good concedes, before the argument has begun, that death may be natural and even kind, and good night is also the ordinary farewell said at bedtime, so the phrase holds nightfall, goodbye and death at once.',
        },
        {
          phrase: 'Old age should burn and rave',
          note: 'Line 2. The thesis, stated as a general rule rather than a command: old age is the subject, not you, and the modal verb should makes it a principle. Burn begins the poem’s imagery of fire and light, making life a kind of combustion, and rave, to speak wildly as in fury or delirium, asks the old to lose their composure rather than keep it.',
        },
        {
          phrase: 'close of day',
          note: 'Line 2. The extended metaphor of a life as a single day, now at its evening. The phrase leaves out the article (not the close of the day), which gives it a formal, almost ceremonial sound. Day also introduces the poem’s second rhyme sound, which ends six of the nineteen lines.',
        },
        {
          phrase: 'Rage, rage',
          note: 'Line 3. Repetition and a spondee: the line opens with two stressed syllables where the iambic metre expects an unstressed one first, so the rhythm lurches forward like a shout, and the comma is a breath between two shouts. These are the only words in the poem repeated back to back. The verb is rage, not fight or win: the speaker never claims death can be beaten, only that it must be met with fury.',
        },
        {
          phrase: 'the dying of the light',
          note: 'Line 3. A metaphor that turns death into a process. Dying is a verb used as a noun, so the light is not switched off but fades, as daylight does at dusk. Light stands for life, and it is one of the seven words (night, light, right, bright, flight, sight, height) that share the poem’s main rhyme, which ends thirteen of the nineteen lines.',
        },
        {
          phrase: 'Though wise men at their end',
          note: 'Line 4. The first of four case studies opens with a concession. Though begins a subordinate clause, as a debater grants a point before overturning it, and at their end is another euphemism for dying. The pronoun their marks a shift: the speaker now talks about other people, where stanza 1 spoke to his listener.',
        },
        {
          phrase: 'dark is right',
          note: 'Line 4. Perhaps the poem’s most honest concession, in three blunt monosyllables: the wise know that death is natural and fitting. Right rhymes with night and light, so, on one reading, the rhyme scheme binds acceptance to the very thing being refused. The stanza’s argument is that knowing death is right does not oblige anyone to welcome it, the paradox the whole poem rests on.',
        },
        {
          phrase: 'Because their words had forked no lightning',
          note: 'Line 5. A causal conjunction and a metaphor. Because gives the reason for the wise men’s resistance, so stanza 2 is built like a piece of logic: though this, because that, therefore the refrain. Lightning forks as it splits across the sky; the wise wanted their words to illuminate and strike, and the past perfect had forked, with its negative no, admits they never did.',
        },
        {
          phrase: 'they / Do not go gentle',
          note: 'Lines 5 to 6. Enjambment: line 5 ends on its subject, they, with no punctuation, so the sentence must run into line 6 to find its verb, and the refrain becomes what the wise men do. On the reading this guide argues, the words that were a command in line 1 are now a statement. They is also the only pronoun among the poem’s rhyme words.',
        },
        {
          phrase: 'Good men, the last wave by',
          note: 'Line 7. An elliptical phrase, so compressed that its verb is missing: the last wave having gone by. A wave rises, breaks and is gone, which suggests the final moment of a life, and wave can also be read as a gesture of farewell. Either way the good men are placed at the very end, looking back.',
        },
        {
          phrase: 'crying how bright',
          note: 'Line 7. Crying can mean calling out or weeping, and both fit: the good men exclaim and grieve at once. Line 7 is one of only three lines that end without punctuation, so how bright hangs at the line end and the reader must cross into line 8 to learn what might have been bright.',
        },
        {
          phrase: 'Their frail deeds might have danced',
          note: 'Line 8. Personification and a modal verb. The deeds are imagined dancing, as light dances on water, but might have marks a possibility that never happened. Frail can be heard as the good men’s own verdict on their lives, modest to the point of pain: the stanza turns on the gap between what their goodness was and what it could have been.',
        },
        {
          phrase: 'green bay, / Rage, rage',
          note: 'Lines 8 to 9. Juxtaposition across a line break. One of the softest images in the poem, with its only colour word and a bay (a stretch of sea held by a curving shore, or the laurel whose leaves crowned victors), is followed at once by the refrain’s violent verb. The good men’s sentence has no main verb until the refrain supplies one, so, on this guide’s reading, it is they who rage.',
        },
        {
          phrase: 'caught and sang the sun in flight',
          note: 'Line 10. A metaphor built on two verbs. The wild men seized the passing day and celebrated it, as revellers or poets might, and the sun in flight is time moving across the sky. The sibilance of sang and sun gives the line a lightness to match its subject: this is a life lived at full intensity, which makes the regret in line 11 harder.',
        },
        {
          phrase: 'learn, too late',
          note: 'Line 11. Commas on either side of too late make the reader stop on it, as the wild men are stopped by their discovery. Learn is in the present tense: the discovery happens now, at the end, which is the pattern of all four middle stanzas: each kind of man understands something only at the end of his life.',
        },
        {
          phrase: 'they grieved it',
          note: 'Line 11. A shift from present to past tense, and a verb with two meanings. To grieve something can mean to mourn it or to cause it sorrow. On the first reading, what the wild men learn now is something they were doing all along: their celebration of the sun was also grief for it, because to sing a passing day is to watch it go. On the second, by trying to catch and hold the sun they troubled it as it went. The pronoun they, like their in stanzas 2 and 3, keeps these men at a distance from the speaker.',
        },
        {
          phrase: 'on its way, / Do not go gentle',
          note: 'Lines 11 to 12. On its way makes the sun’s departure gradual, the same slow going the refrain forbids, and the refrain then completes a third sentence about a third kind of men. By now the pattern is clear: whatever each group learns, the result is the same refusal, and the villanelle brings that refusal back on schedule.',
        },
        {
          phrase: 'Grave men, near death',
          note: 'Line 13. A pun on two unrelated words: the adjective grave, from Latin, means serious and solemn, and the noun grave, from Old English, is a burial place. Near death confirms the second sense, and it is the only time the poem uses the word death; everywhere else death is named through night, dark, the dying of the light or an end.',
        },
        {
          phrase: 'blinding sight',
          note: 'Line 13. An oxymoron: sight so intense that it blinds, as if at the edge of death the grave men see so clearly that the clarity dazzles. The line ends without punctuation, so blinding runs straight into Blind at the start of line 14, the same root in two forms (polyptoton). Pearson’s mark scheme for November 2023 suggests the line could refer directly to Thomas’s father, whose sight was failing.',
        },
        {
          phrase: 'Blind eyes could blaze',
          note: 'Line 14. Alliteration on b, continued in be later in the line, and a paradox: eyes that cannot see could still shine with light. Could, like might in line 8, is a modal verb of possibility, so this is a possibility the grave men see, perhaps still open to them at the very end, which is why they rage. The hard b sounds give the line the force it describes.',
        },
        {
          phrase: 'like meteors',
          note: 'Line 14. A simile. A meteor is a streak of light made as matter from space burns up in the atmosphere, brief, brilliant and brightest as it is destroyed. The comparison makes a last burst of life the most brilliant thing a dying person can do, and it completes a sequence of images of light: burning, lightning, the sun and now meteors.',
        },
        {
          phrase: 'gay, / Rage, rage',
          note: 'Lines 14 to 15. Juxtaposition again: gay, in its older sense of joyful and bright, is the last word before the refrain’s rage. Joy and fury stand side by side, which suggests the grave men’s resistance is a kind of delight in being alive, not bitterness. This stanza has no they or their, so its refrain can be heard as a statement about the grave men or as a command.',
        },
        {
          phrase: 'And you, my father',
          note: 'Line 16. The volta, or turn, and direct address: the speaker speaks to his listener and names him for the first time. You and my, and in line 17 your, I and me, each appear once and only here, so the poem’s first and second persons are packed into two lines. The conjunction And adds the father to the list, as if he were the fifth case the argument was building towards.',
        },
        {
          phrase: 'the sad height',
          note: 'Line 16. The father is set above the speaker, which can suggest a man at the summit of his life, a deathbed seen from below, or a high place of suffering. Sad is perhaps the plainest emotional word in the poem: after lightning, sun and meteors, grief is simply named, and the voice seems to drop. There, like that in line 1, points at something at a distance.',
        },
        {
          phrase: 'Curse, bless, me now',
          note: 'Line 17. Antithesis: two opposite imperatives, separated only by commas, and the next comma sets both apart from me. The speaker does not mind which he receives, anger or blessing, as long as the father feels something strongly, and now makes it urgent. One reading is that this is selfless, asking the father to show he is still alive; another is that the son needs a last response for his own sake.',
        },
        {
          phrase: 'your fierce tears',
          note: 'Line 17. An oxymoron that fuses the two feelings the poem has kept apart, rage and grief. Tears usually signal surrender, and fierce refuses that meaning, so even weeping becomes a form of resistance. Fierce belongs to the poem’s language of fire and fury, tears to its grief, and one reading is that this is where the two finally meet.',
        },
        {
          phrase: 'I pray. / Do not go gentle',
          note: 'Lines 17 to 18. I pray can be an old, formal way of saying please, as in I pray you, and it can also mean a prayer to God. Either way, after so much argument and command the speaker admits he has no power over death: he can only ask. Then the full stop after pray lets the refrain return as a sentence of its own, a command once more rather than a statement about other men.',
        },
        {
          phrase: 'good night. / Rage, rage',
          note: 'Lines 18 to 19. The closing couplet. For the only time the two refrains stand side by side, as the villanelle requires, and they rhyme with each other, night with light. Each is a sentence of eight words, the shortest in the poem, and the poem ends on light, so its last word is the thing it has been fighting for.',
        },
      ],
      question:
        'Close-reading practice, not an exam question (the exam always asks you to compare two poems). How does Thomas use the villanelle’s returning lines to present the speaker’s feelings about his father’s death? Write about at least four places where a refrain returns, and what the lines just before it have changed.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Extended metaphor: a life as a day',
      example:
        'Death is nightfall throughout: “close of day” (line 2), “the dying of the light” (line 3) and the refrain’s “that good night” (line 1).',
      effect:
        'Making death the end of a day makes it natural and inevitable, since every day ends, which is exactly the concession the speaker must argue against. It also gives the poem its two great opposites, light and dark, so every image of brightness later in the poem (lightning, the sun, meteors, blazing eyes) becomes an image of life resisting the dark.',
    },
    {
      technique: 'Euphemism, and the one plain word',
      example:
        'The word death appears once, in “Grave men, near death” (line 13). Elsewhere dying is night, dark, “their end” (line 4) or the close of day.',
      effect:
        'Speaking of death only through images keeps it at a distance, as people often do when someone they love is dying. Using the plain word once, beside the grave men, makes it land hard, and it comes just before the speaker turns to his own father.',
    },
    {
      technique: 'Imperatives and the negative imperative',
      example: '“Do not go gentle” (line 1), “Rage, rage” (line 3) and “Curse, bless” (line 17).',
      effect:
        'The poem is framed by commands: two in stanza 1 and four in stanza 6. Commands suggest power, but nobody can order death away, so, on one reading, the imperatives expose the speaker’s helplessness rather than hide it. Line 17 ends in “I pray”: the most commanding voice in the poem admits that it can only ask, before the two refrains command once more.',
    },
    {
      technique: 'An adjective where an adverb is expected',
      example: '“Do not go gentle” (line 1), not do not go gently.',
      effect:
        'Go gentle works like go quiet or go grey: it can describe the manner of going and what the person becomes. Gentle can also mean polite and mild, and an older sense, now archaic, is well-born, the sense kept in the word gentleman. One reading is that the speaker is asking his father to give up good manners at the end, to be the opposite of gentle, which is what rave in line 2 demands.',
    },
    {
      technique: 'Paradox',
      example: 'The wise men know that “dark is right” (line 4), and still they do not go gentle.',
      effect:
        'The poem never pretends death is wrong or unnatural. It accepts that death is right and demands that it be fought anyway, and that contradiction is its meaning: love refuses what reason accepts. The paradox also makes the speaker more persuasive, because he has granted the other side’s case before answering it.',
    },
    {
      technique: 'Pun',
      example:
        '“Grave men” (line 13), who are serious and near their graves, and “good night” (line 1), which is both nightfall and a farewell.',
      effect:
        'The puns let one word carry life and death at once. Grave men are solemn, living men and men whose graves are waiting; good night is what we say to someone we expect to see in the morning, and also the last goodbye. Wit survives in the middle of grief, which is its own small refusal to go gentle.',
    },
    {
      technique: 'Oxymoron',
      example: '“blinding sight” (line 13) and “fierce tears” (line 17).',
      effect:
        'Each oxymoron fuses two things that should cancel each other out. Blinding sight makes the clearest seeing come at the moment of losing sight; fierce tears make grief itself a form of resistance. They sum up the poem’s demand that the end of life be its most intense moment, not its weakest.',
    },
    {
      technique: 'Metaphors of light and fire',
      example:
        'Words that “forked no lightning” (line 5), wild men who “caught and sang the sun in flight” (line 10), and eyes that “could blaze” (line 14).',
      effect:
        'Each kind of man is given his own kind of light: lightning for the wise, the sun for the wild, meteors for the grave, and the good men’s deeds that might have shone. The catalogue of men is also a catalogue of fires, so resistance looks brilliant and surrender merely dim.',
    },
    {
      technique: 'Simile',
      example: 'Blind eyes that could blaze “like meteors” (line 14).',
      effect:
        'A meteor is brightest as it burns up, so the simile makes a final blaze of life seem not desperate but magnificent. It is the poem’s only simile, and it comes in the stanza closest to death.',
    },
    {
      technique: 'Modal verbs of what might have been',
      example:
        '“should burn” (line 2), “might have danced” (line 8) and “could blaze” (line 14), with the negative of “had forked no lightning” (line 5).',
      effect:
        'The middle stanzas are built from possibilities: deeds that might have shone but did not, words that never struck, and eyes that could still blaze. Regret, and a last chance, are written into the grammar. Should, in line 2, is different: it is the speaker’s rule for everyone, the one modal that states a duty rather than a possibility.',
    },
    {
      technique: 'Sound: assonance and alliteration',
      example:
        'The long i of night, light, right, bright, flight, sight and height, and the long a of rage, age, rave, wave, grave, blaze and day; alliteration in “Blind eyes could blaze” (line 14).',
      effect:
        'The two vowel sounds are the poem’s two rhymes, and they spread far beyond the line endings. The long a of rage echoes through the lines between the refrains, so the sound of fury is heard even where the word is not. Alliteration on b gives line 14 the force it describes.',
    },
    {
      technique: 'Monosyllables',
      example:
        '146 of the poem’s 168 words have one syllable. The only longer words are gentle, into, against, dying, because, lightning, crying, blinding, meteors and father, and the first four are in the refrains.',
      effect:
        'Short, plain words give the poem its blunt, spoken force, as in “dark is right” (line 4). Because the refrains hold most of the longer words, they sound more measured than the lines around them, and father, one of the last new words to appear, stands out.',
    },
    {
      technique: 'The language of prayer',
      example: '“Curse, bless” (line 17) and “I pray” (line 17), after “the sad height” (line 16).',
      effect:
        'Curse, bless and pray are words of religion, and they enter the poem only when the father is addressed. Nowhere does the poem mention God, heaven or an afterlife; one reading is that at the last the speaker reaches for the only language big enough for what he is asking, while admitting that he is asking rather than commanding.',
    },
  ],

  structureForm: [
    {
      heading: 'A villanelle, exactly',
      body: 'A villanelle has nineteen lines, five tercets and a closing quatrain, on only two rhyme sounds, with the first and third lines returning as refrains. Thomas follows the pattern to the letter. With A1 and A2 for the two refrains, the scheme is A1 b A2, a b A1, a b A2, a b A1, a b A2, a b A1 A2. Refrain 1 (line 1) returns as lines 6, 12 and 18; refrain 2 (line 3) returns as lines 9, 15 and 19. So each refrain is heard four times, they take turns to close stanzas 2 to 5, and they come together only at the end. Thomas keeps the refrains word for word; only the punctuation of refrain 1 changes, from a comma in line 1 to a full stop each time it returns.',
    },
    {
      heading: 'Two rhyme sounds',
      body: 'The main rhyme, the long i of night, ends thirteen of the nineteen lines on seven different words: night, light, right, bright, flight, sight and height. The second, the long a of day, ends the other six, all different: day, they, bay, way, gay and pray. Every rhyme is a masculine rhyme, a single stressed syllable, so each line lands hard on its last word. The rhymes make an argument of their own. Night and light, death and life, share one sound, and right joins them in line 4, as if the rhyme scheme had already accepted that death is right. The last rhyme word of all is light.',
    },
    {
      heading: 'Metre: iambic pentameter under pressure',
      body: 'Every line has ten syllables, except that line 14 has eleven if meteors is sounded with three, and most of them fall into iambic pentameter: five pairs of syllables, each unstressed then stressed, as in line 1. The beat is regular enough that departures from it are heard. Refrain 2 opens with two stresses together, a spondee, and several of the lines where feeling runs highest can be read the same way: the openings of lines 7, 10 and 13, where the good, wild and grave men are named, Blind eyes in line 14 and Curse, bless in line 17. The effect is of a controlled voice that keeps breaking into emphasis.',
    },
    {
      heading: 'An argument in eight sentences',
      body: 'The poem has eight sentences, and they are arranged like a case in a debate. Sentence 1, stanza 1, states the thesis. Sentences 2 to 5, one to a stanza, give four pieces of evidence, the wise, good, wild and grave men, each discovering at the end something unfinished and each refusing to go quietly. Stanza 2 sets out its logic in conjunctions, Though and Because. Then the case is applied to one man: sentence 6 (lines 16 to 17) turns to the father, and the last two sentences are the refrains themselves, eight words each. The general argument exists to make the personal plea harder to refuse.',
    },
    {
      heading: 'Imperative and address',
      body: 'The poem is framed by imperatives: two in stanza 1 and four in stanza 6 (curse, bless and the two refrains). In between, stanzas 2 to 5 speak about other people in the third person, and their grammar changes what the refrains do. In stanzas 2, 3 and 4 the pronouns they and their make each refrain the main verb of a sentence about the wise, good or wild men, so the words that were a command in stanza 1 now describe what those men do. Stanza 5 has no such pronoun and can be read either way. This guide argues that reading, and it is a reading: many readers hear every refrain as a command. Either way the whole poem is spoken to a father who never answers, which is why it can be read as an apostrophe, and he is not named until line 16.',
    },
    {
      heading: 'The closing quatrain',
      body: 'The last stanza is the only one with four lines, and its extra line is what lets both refrains end the poem as a couplet. Everything else changes here too. The listener is named, as my father. The first and second persons appear for the only time: I, me, my, you and your each once, all in lines 16 and 17. The commands of stanza 1 return, joined by curse and bless. And the full stop at the end of line 17 means the two refrains stand as sentences on their own, no longer the verbs of other men’s sentences.',
    },
    {
      heading: 'Line endings and enjambment',
      body: 'Sixteen of the nineteen lines end with a punctuation mark, which gives the poem its measured, deliberate movement. The three that do not are lines 5, 7 and 13, and each runs into something that matters: line 5 into the refrain that becomes the wise men’s verb, line 7 into the good men’s frail deeds, and line 13 into the Blind eyes of line 14. The run-on lines all come in the middle stanzas, where what a group of men has understood is being explained, as if the thought could not be held inside a line.',
    },
    {
      heading: 'How the form enacts the argument',
      body: 'A villanelle cannot move on: its refrains must come back whatever has happened in between, so it suits a speaker who will not be talked out of his position. Each new kind of man, each new regret, ends in the same words. The two refrains alternate like two voices, a refusal and a demand, until the last stanza joins them, as if the whole argument had been waiting to be said at once. The strict form also holds strong feeling under pressure: the rage is spoken through one of the most regular patterns in English verse, which makes it sound controlled, and the places where the metre breaks sound louder for it. Some readers hear the repetition as incantation, words said over and over as if they could hold death back; the speaker’s own “I pray” in line 17 supports that reading.',
    },
  ],

  vocabulary: [
    {
      term: 'Villanelle',
      definition:
        'A fixed form of nineteen lines: five tercets and a closing quatrain, on only two rhyme sounds, with the first and third lines returning as refrains. The name comes from the Italian villanella, a rustic song. The fixed form is traced to a villanelle by Jean Passerat published in 1606, and it was popularised in England after 1872 by Edmund Gosse and Austin Dobson. Thomas’s poem is perhaps the best known of all villanelles.',
    },
    {
      term: 'Refrain',
      definition:
        'A line that returns through a poem. There are two here: line 1 comes back at lines 6, 12 and 18, and line 3 at lines 9, 15 and 19, so each is heard four times and together they end the poem.',
    },
    {
      term: 'Tercet',
      definition:
        'A stanza of three lines. Stanzas 1 to 5 are tercets, and each of the middle four gives one kind of man a single stanza, which makes the argument look like evidence laid out in equal portions.',
    },
    {
      term: 'Quatrain',
      definition:
        'A stanza of four lines. The last stanza is the only one, and its extra line is what lets both refrains end the poem side by side.',
    },
    {
      term: 'Iambic pentameter',
      definition:
        'A line of ten syllables in five pairs, each an unstressed syllable followed by a stressed one. Every line here has ten syllables (line 14 has eleven if meteors is sounded with three), and most keep close to the iambic beat, which is why the moments that break it stand out.',
    },
    {
      term: 'Spondee',
      definition:
        'Two stressed syllables side by side. The doubled verb at the start of lines 3, 9, 15 and 19 opens with one, so those lines begin like a shout against the steady beat.',
    },
    {
      term: 'Masculine rhyme',
      definition:
        'A rhyme on a single stressed syllable, such as night and light. Every rhyme in the poem is masculine, so each line ends on a hard, stressed beat.',
    },
    {
      term: 'Assonance',
      definition:
        'The repetition of similar vowel sounds with different consonants. The long a of rage, age, rave, wave, grave and blaze repeats the vowel of the second rhyme sound (day, bay, way), so the sound of the refrain’s fury runs through the whole poem.',
    },
    {
      term: 'Caesura',
      definition:
        'A pause within a line of poetry. The comma in the middle of Rage, rage is one; line 17 has three commas before its last word, so it moves in short, broken phrases.',
    },
    {
      term: 'End-stopped line',
      definition:
        'A line whose phrase or sentence ends with the line, usually at a punctuation mark. Sixteen of the nineteen lines here are end-stopped, which makes the three that are not more noticeable.',
    },
    {
      term: 'Enjambment',
      definition:
        'A sentence running on past the end of a line without a pause. It happens three times: line 5 ends on its subject, they, so the sentence must run into the refrain at line 6 to find its verb, and lines 7 and 13 run on into lines 8 and 14.',
    },
    {
      term: 'Imperative',
      definition:
        'The form of a verb that gives a command. In stanzas 1 and 6 the refrains are imperatives aimed at the listener, and line 17 adds two more. In stanzas 2 to 4 the pronouns they and their suggest that the same refrain words have become statements about what the men do; in stanza 5, which has no pronoun, the refrain can be read as either.',
    },
    {
      term: 'Modal verb',
      definition:
        'A verb such as should, might or could that expresses duty, possibility or ability rather than plain fact. The poem uses one of each: should burn (line 2), might have danced (line 8) and could blaze (line 14).',
    },
    {
      term: 'Apostrophe',
      definition:
        'Speaking directly to someone who is absent or cannot reply. The poem never says whether the father can hear, but he is addressed in line 16 and never answers, so the poem can be read as one, and once he is named the whole poem can be reread as spoken to him.',
    },
    {
      term: 'Volta',
      definition:
        'A turn in the direction of a poem, a term most often used of sonnets. It is borrowed here for line 16, where the speaker stops generalising about kinds of men and speaks to his father.',
    },
    {
      term: 'Paradox',
      definition:
        'A statement that seems to contradict itself but holds a truth. The poem’s central paradox is that the speaker accepts death is right and still demands that it be fought.',
    },
    {
      term: 'Oxymoron',
      definition:
        'Two contradictory words placed side by side, such as “blinding sight” in line 13 and “fierce tears” in line 17.',
    },
    {
      term: 'Antithesis',
      definition:
        'Two contrasting ideas set side by side in the same pattern. “Curse, bless” in line 17 is one; the two refrains, a refusal and a demand, are another, and they are joined at the end.',
    },
    {
      term: 'Polyptoton',
      definition:
        'Using words from the same root in different forms close together. Line 13 ends on blinding and line 14 begins with Blind, so the paradox of seeing and not seeing is carried across the line break.',
    },
    {
      term: 'Pun',
      definition:
        'A play on a word with two meanings. “Grave men” in line 13 are both serious and near their graves, and the night of the first refrain is both evening and death.',
    },
    {
      term: 'Euphemism',
      definition:
        'A mild word used in place of a harsh one. Nightfall and the end of the day stand in for dying throughout, and the poem uses the word death only once, in line 13.',
    },
    {
      term: 'Elegy',
      definition:
        'A poem of mourning for someone who has died. By that definition this poem is not one: it was first published in 1951, and D. J. Thomas died on 16 December 1952. The poem speaks to him in the present tense and asks him to act now, so it is better described as a plea, or an elegy written in anticipation.',
    },
    {
      term: 'Gentle (line 1)',
      definition:
        'Mild, tender, soft; also polite. It comes through Old French gentil, high-born or noble, from Latin gentilis, of the same family or clan, and an older sense, now archaic, is well-born, the sense kept in gentleman (gentle and man). Here it is an adjective used where the adverb gently might be expected, so go gentle can mean go gently or become gentle.',
    },
    {
      term: 'Rave (line 2)',
      definition:
        'To speak or behave wildly, as someone delirious or furious does. It is not the modern sense of a dance party: the speaker wants old age to lose its composure rather than keep it.',
    },
    {
      term: 'Close (line 2)',
      definition:
        'As a noun, an end or conclusion, as in the close of play. Close of day is the end of the day, the evening, and in this poem the end of a life.',
    },
    {
      term: 'Forked (line 5)',
      definition: 'Split into branches, as lightning divides when it strikes across the sky.',
    },
    {
      term: 'Crying (line 7)',
      definition:
        'Two senses fit: calling out loudly, and weeping. The good men exclaim how bright their deeds might have been, and grieve as they do.',
    },
    {
      term: 'Bay (line 8)',
      definition:
        'Two words share the spelling. One is a stretch of sea held by a curving shore; the other is the laurel tree, whose leaves were woven into garlands for victors, and so came to mean fame. Both senses fit the good men, who imagine their deeds dancing in light or winning honour.',
    },
    {
      term: 'Grieved (line 11)',
      definition:
        'From grieve, which has two senses when it takes an object: to mourn something, and to cause it sorrow or distress. Both are open here: the wild men were mourning the sun as it went, or they troubled it by trying to catch it.',
    },
    {
      term: 'Gay (line 14)',
      definition:
        'Here in its older sense: joyful, lively and bright. The grave men see that even eyes without sight could blaze with light and be full of joy.',
    },
    {
      term: 'Meteor (line 14)',
      definition:
        'A fast-moving streak of light in the night sky, made when matter from space enters the Earth’s atmosphere and burns up. It is brief and brilliant and brightest as it is destroyed, which is why the simile suits a life ending in a blaze.',
    },
    {
      term: 'Pray (line 17)',
      definition:
        'To speak to God in worship or to ask for help; also to beg someone earnestly. In older, formal English, I pray you meant simply please. Both senses are open at the end of line 17: a prayer, and a plea to the father.',
    },
    {
      term: 'Botteghe Oscure',
      definition:
        'The literary journal, published in Rome from 1948 to 1960 and edited by Marguerite Caetani, in which the poem first appeared in 1951. Thomas sent the poem to its editor with a letter dated 28 March 1951.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Re-read Do not go gentle into that good night. Compare the ways the writers present emotions in Do not go gentle into that good night and one other poem from the anthology. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill:
          'Pearson’s own question from the November 2023 paper (4ET1/01, Section B): a comparison with a Part 3 poem of your choice',
        guidance: [
          'Choose your second poem for the contrast it gives. Pearson’s mark scheme for this question named If-, Prayer Before Birth, Piano, Poem at Thirty-Nine and War Photographer as suitable. War Photographer and If- give the sharpest contrast in how feeling is shown: controlled or held back, against Thomas’s open fury.',
          'Name the emotions precisely rather than writing strong emotions. In Thomas they include fear of loss, love, anger and grief, rising to something close to desperation by line 17. Then say how each is expressed, and where.',
          'Compare how each form holds or releases feeling: Thomas’s villanelle, with its returning refrains and only two rhyme sounds, against the form of your other poem. Ask whether strict form contains the feeling or intensifies it.',
          'Compare the turn. Thomas holds back his real listener until line 16 and then moves from argument to prayer. Find the moment where feeling breaks through in your other poem and compare how it is signalled.',
          'Analyse a few words closely in each poem, such as the oxymoron “fierce tears” (line 17), and link every point to its effect on the reader.',
          'Keep both poems in every paragraph. The mark scheme rewards points clearly based on comparison, and holds an answer that considers only one poem to the top of Level 2.',
        ],
      },
      {
        question:
          'Re-read Do not go gentle into that good night and Remember. Compare how the writers present attitudes to death in Do not go gentle into that good night and Remember. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill:
          'Practice question in the format of Pearson’s Section B question with two named poems',
        guidance: [
          'Open with a comparative overview that takes a position. Both poems are spoken across a deathbed, but from opposite sides: Rossetti’s speaker imagines her own death and moves towards letting go, while Thomas’s speaker faces his father’s death and refuses to let go at all.',
          'Compare the commands. Both poems are built on imperatives addressed to someone loved: Rossetti’s title is one, and after her turn she tells her beloved not to grieve; Thomas opens with a negative imperative and ends with two. One asks for less feeling, the other for more.',
          'Compare how each names death. Thomas uses nightfall and the end of the day, and the word death only once, in line 13. Rossetti never uses the word, speaking instead of going away into silence and darkness. Ask what each poet gains by not naming it directly.',
          'Compare the concessions. Thomas admits in line 4 that “dark is right” and still demands rage; Rossetti begins by asking to be remembered and then gives up even that, if remembering would make her beloved sad. Each speaker gives ground on one thing in order to hold firm on another.',
          'Compare form as meaning. Rossetti’s sonnet turns at line 9, and the turn lets her speaker change her mind; Thomas’s villanelle keeps bringing its refrains back, so his speaker cannot be moved.',
          'Conclude with a judgement: which poem you find more consoling, which more honest, and whether acceptance or defiance is presented as the greater form of love.',
        ],
      },
      {
        question:
          'Re-read Poem at Thirty-Nine and Do not go gentle into that good night. Compare how the writers present feelings about fathers in Poem at Thirty-Nine and Do not go gentle into that good night. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill:
          'A pairing Pearson has set: its examiners’ report on the January 2023 paper (4ET1/01R) discusses a question on feelings about fathers in these two poems',
        guidance: [
          'Start from timing. Walker’s speaker misses a father who has died and remembers him with affection and some regret; Thomas’s speaker speaks to a father who is dying and is still alive. One poem remembers, the other pleads, and the tense of each shows it.',
          'Compare what each father gave, or is asked to give. Walker’s father taught her practical things, handling money and telling the truth, and she finds him again in how she cooks. Thomas’s speaker asks his father for one last strong feeling, anger or blessing, it does not matter which.',
          'Compare form. Walker writes in free verse with very short lines and stanzas of uneven length, which suit memory and reflection; Thomas’s villanelle returns to the same two lines, which suits a speaker who will not accept what is happening.',
          'Compare structure. Walker names her father in her first line; Thomas holds his back until line 16, after four stanzas about other men. Explain what each choice does to the reader.',
          'Pearson’s examiners reported that answers on this pairing understood Thomas’s poem but often covered it in a more limited way, and that close analysis was often not sustained. Plan a point on each part of Do not go gentle: the opening, the four kinds of men, the turn at line 16 and the closing couplet.',
          'End with a judgement about which poem presents a more complicated relationship between parent and child, and why.',
        ],
      },
      {
        question:
          'Re-read If- and Do not go gentle into that good night. Compare how the writers present advice from one generation to another in If- and Do not go gentle into that good night. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill:
          'Practice question in Pearson’s Section B format. In June 2024 (Paper 1R) Pearson set a question on giving advice in If- and one other poem, and its mark scheme listed this poem as a suitable choice',
        guidance: [
          'Start from the reversal. If- is a father’s advice to his son; Thomas’s poem is a child’s instruction to a dying father. Consider what it means for the younger generation to tell the older how to behave.',
          'Compare the delayed relationship. Kipling names the son only in his last line, and Thomas names the father only at line 16. In both, general wisdom becomes personal at the end; explore why each poet holds the relationship back.',
          'Compare what is advised. Kipling praises composure, keeping calm while others panic and treating triumph and disaster alike. Thomas demands the opposite: that old age “burn and rave” (line 2). Decide whether the two poems disagree about how to live or speak to different moments of a life.',
          'Compare grammar. If- is one long sentence built from conditional clauses, deferring its conclusion; Thomas uses imperatives in stanzas 1 and 6 and, in between, mostly turns the same refrain words into statements about what other men do.',
          'Compare form. Kipling’s regular rhymed stanzas suit calm instruction; Thomas’s villanelle, with only two rhyme sounds, circles like an insistent voice that will not be refused.',
          'End with a judgement about whose advice is more loving, and whether Thomas’s advice is finally for his father or for himself.',
        ],
      },
      {
        question:
          'Re-read Do not go gentle into that good night and Piano. Compare how the writers use form and structure to present powerful feelings in Do not go gentle into that good night and Piano. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill:
          'Practice question in Pearson’s Section B format, weighted towards form and structure',
        guidance: [
          'Open with the shared situation: two speakers overwhelmed by feeling for a parent. Lawrence gives way to the feeling by the end, weeping like a child for the past; Thomas refuses to give way to death, and pours his feeling into repetition.',
          'Compare the forms. Piano is three quatrains of rhymed couplets with long, flowing lines; Do not go gentle is a nineteen-line villanelle on two rhyme sounds, in lines of ten syllables. Consider which form lets feeling flood and which holds it under pressure.',
          'Compare the direction of time. Piano moves backwards, as a woman singing in the dusk carries the adult speaker back to sitting beneath the piano at his mother’s feet. Thomas’s poem stays in the present of the deathbed, circling rather than travelling.',
          'Compare the turns. Lawrence’s last stanza sets the singer’s loud performance against the memory that has already overwhelmed him; Thomas’s last stanza turns from four kinds of men to one father.',
          'Compare endings. Lawrence ends in surrender to grief; Thomas ends with both refrains together, still commanding. Ask which ending you find more moving, and why.',
        ],
      },
    ],
    tips: [
      'Know the task. Section B of Paper 1 offers a choice of two questions, and you answer one, comparing two poems from Part 3 of the anthology. In the January 2023, November 2023 and June 2024 papers, one question named both poems and the other named one and let you choose the second. The paper is closed book, but the Part 3 poems are printed in a Poetry Booklet provided with it. The November 2023 paper advised 40 minutes on the chosen question.',
      'Track the grammar of the refrains. In stanzas 1 and 6 they are commands to the listener. In stanzas 2 to 5 each refrain completes a sentence about the wise, good, wild or grave men, and the pronouns they and their in stanzas 2 to 4 suggest those men are being described rather than addressed, so the same words now state what they do. Stanza 5 has no such pronoun, so its refrain can be heard either way. Argue for the move from command to statement and back again as a reading, and explain what it does: the men in the middle are the evidence that it can be done.',
      'Quote two or three words at a time and give the line number: the poem is in front of you, and credit comes from choosing precise words and analysing them, not from copying out lines.',
      'Do not call it an elegy for a dead father. It was first published in 1951 and D. J. Thomas died on 16 December 1952, so the poem pleads with a living man. That is what gives it its urgency.',
      'Keep the four kinds of men moving as an argument, not a list. Each stanza adds evidence to the case made in stanza 1, and each ends in a regret. Say what the four have in common, then show how the case becomes personal at line 16.',
      'Be precise about the speaker. The poem itself establishes only that the speaker is the father’s child. This guide, like most readers, calls the speaker he, because the poem is usually read as Thomas speaking to his own father; that is a biographical reading, a reasonable one, and in an essay you should say that it is one.',
      'Choose your partner poem for contrast. Pearson’s mark scheme for the November 2023 question on emotions named If-, Prayer Before Birth, Piano, Poem at Thirty-Nine and War Photographer; its June 2024 Paper 1R mark scheme listed this poem for a question on advice in If-. Remember makes a strong pairing on death.',
      'Cover the whole poem. Pearson’s examiners’ report on the January 2023 paper found that answers showed an understanding of this poem but often covered it in a more limited way. A point on the opening, one on the four kinds of men, one on the turn at line 16 and one on the closing couplet will stop that happening.',
      'Compare throughout. Pearson’s mark schemes for this section reward points clearly based on comparison, ask for a personal response, and warn that summarising the poems or listing devices is not enough. An answer that discusses only one poem is held to the lower levels, however good that discussion is.',
      'Keep context to a clause. Pearson’s specification assesses this section on language, form and structure and on the links you make between the poems; context is credited in the modern prose section, not here. A fact earns its place only when it helps you read a line, such as the father being alive when the poem was published, or his failing sight beside “blinding sight” in line 13.',
    ],
  },

  modelAnswer: {
    question:
      'Compare how the writers present attitudes to death in Do not go gentle into that good night and Remember.',
    paragraph:
      'Both poems are spoken across a deathbed, but from opposite sides of it, and both are built on commands. Rossetti’s title is an imperative, and her speaker, imagining her own death, moves from asking to be remembered to telling her beloved “do not grieve”: after the turn at line 9 she would rather he should “forget and smile” than remember and be sad. Thomas’s poem also opens with a negative imperative, “Do not go gentle”, but his speaker is the one who will be left behind, and his command runs the other way: where Rossetti asks for less feeling, Thomas demands more. What makes his refusal so forceful is that he grants Rossetti’s case before rejecting it. His wise men know that “dark is right”, and the refrain itself calls death a “good night”, at once a nightfall, an ordinary farewell and a gentle euphemism, much as Rossetti softens death into a journey to a “silent land”. Thomas admits that death is natural, even kind, and then answers with “Rage, rage”, whose two heavy stresses break the iambic beat as if the line itself were struggling. The forms carry the same contrast. Rossetti’s sonnet can turn, and its turn lets her speaker change her mind; Thomas’s villanelle cannot, because its refrains must return, so the poem enacts a speaker who will not be talked out of his fury. Rossetti finds love in letting the living go on without her; Thomas finds it in refusing to let the dying go.',
    commentary: [
      'It opens with a comparative idea, the two sides of a deathbed and the commands both speakers give, rather than a summary of either poem, so the whole paragraph has one line of argument.',
      'It sets the grammar of the two poems side by side: both use imperatives, but one asks for less feeling and the other for more. That is comparison at word level, not only at the level of theme.',
      'It makes a subtle point about Thomas rather than an obvious one: he concedes that death is right before refusing it, which explains why the refusal moves the reader.',
      'Every quotation is two to four words long, embedded in the sentence and analysed, including the three meanings held in the refrain’s description of death.',
      'It treats form as meaning, setting the sonnet’s turn against the villanelle’s returning refrains, so the comparison of structure explains the comparison of attitude, and it ends on a balanced personal judgement rather than a restatement.',
    ],
  },

  timeline: [
    {
      where: 'Stanza 1, lines 1-3',
      title: 'The command and the thesis',
      summary:
        'The speaker opens with both refrains, telling a listener who is not yet named not to go quietly into death but to rage against it. Between the two commands sits the thesis, stated as a general rule: old age should burn and rave at the end of its day.',
      setting: 'Nightfall, as a figure for the end of a life',
      who: ['The speaker'],
      quote: 'Do not go gentle into that good night',
      themes: ['Defiance in the Face of Death', 'Light and Darkness, Vitality and Decay'],
      tension: 3,
      significance:
        'The whole argument is stated before any evidence is given, and both refrains are set up to return: the poem’s ending is fixed in its first three lines.',
    },
    {
      where: 'Stanza 2, lines 4-6',
      title: 'The wise men',
      summary:
        'Wise men know at the end that death is right, yet because their words never struck with the force they wanted, they refuse to go quietly. The sentence runs over the end of line 5, so the refrain becomes their verb.',
      setting: 'The last days of thinkers and writers',
      who: ['The speaker', 'Wise men'],
      quote: 'Though wise men at their end know dark is right',
      themes: ['Regret and the Unfinished Life', 'Defiance in the Face of Death'],
      tension: 2,
      significance:
        'The first piece of evidence accepts that death is natural and still refuses it: the poem’s paradox in small.',
    },
    {
      where: 'Stanza 3, lines 7-9',
      title: 'The good men',
      summary:
        'Good men, as the last wave passes them, cry out that their small and fragile acts might have shone brightly. They too become the subject of the raging refrain.',
      setting: 'A shore, as the last wave breaks',
      who: ['The speaker', 'Good men'],
      quote: 'Their frail deeds might have danced in a green bay',
      themes: ['Regret and the Unfinished Life', 'Light and Darkness, Vitality and Decay'],
      tension: 3,
      significance:
        'Goodness, like wisdom, is not enough to make a life feel finished: the regret is for what might have been.',
    },
    {
      where: 'Stanza 4, lines 10-12',
      title: 'The wild men',
      summary:
        'Wild men, who seized and celebrated the sun as it crossed the sky, learn too late that they were grieving its passing all along. They do not go quietly either.',
      setting: 'Beneath a sun moving across the sky',
      who: ['The speaker', 'Wild men'],
      quote: 'And learn, too late, they grieved it on its way',
      themes: ['Regret and the Unfinished Life', 'Light and Darkness, Vitality and Decay'],
      tension: 3,
      significance:
        'Even a life lived at full intensity ends in regret, so no way of living escapes the argument.',
    },
    {
      where: 'Stanza 5, lines 13-15',
      title: 'The grave men',
      summary:
        'Grave men, close to death, see with a dazzling clarity that even eyes without sight could blaze with joy, like meteors. The refrain that follows can be heard as their rage against the coming dark, or as a command.',
      setting: 'The edge of the grave',
      who: ['The speaker', 'Grave men'],
      quote: 'Blind eyes could blaze like meteors and be gay',
      themes: ['Light and Darkness, Vitality and Decay', 'Regret and the Unfinished Life'],
      tension: 4,
      significance:
        'The last of the four is the closest to death, and the only stanza to use the word, which brings the argument to the father’s own situation.',
    },
    {
      where: 'Stanza 6, lines 16-17',
      title: 'My father',
      summary:
        'The speaker turns at last to his father, on a high and sorrowful place, and asks him to curse or bless him with fierce tears. For the first time the poem says I and you, and its commands give way to a prayer.',
      setting: 'The father’s last days, seen from below',
      who: ['The speaker', 'The father'],
      quote: 'Curse, bless, me now with your fierce tears, I pray',
      themes: ['Father, Son and Grief', 'Defiance in the Face of Death'],
      tension: 5,
      significance:
        'The general argument becomes a personal plea: the four kinds of men were evidence, and this is the case they were gathered for.',
    },
    {
      where: 'Stanza 6, lines 18-19',
      title: 'Both refrains together',
      summary:
        'The two refrains, which have taken turns to close each stanza, stand side by side for the only time, as two short sentences of eight words each. The poem ends on the word light.',
      setting: 'The father’s last days, seen from below',
      who: ['The speaker', 'The father'],
      quote: 'Rage, rage against the dying of the light',
      themes: ['Defiance in the Face of Death', 'Father, Son and Grief'],
      tension: 5,
      significance:
        'The refusal and the demand that alternated through the poem are finally said together, and after the prayer of line 17 they are commands again.',
    },
  ],

  relationships: [
    {
      from: 'The speaker',
      to: 'The father',
      kind: 'child and dying father',
      note: 'The father is not addressed until line 16 and never replies. All the speaker asks of him is strong feeling, anger or blessing, which suggests a bond in which intensity was the proof of love. The poem is usually read as Dylan Thomas speaking to his own father, D. J. Thomas, who was alive when it was published; the poem itself says only that the listener is the speaker’s father.',
    },
  ],

  compareWith: [
    {
      title: 'Remember (Christina Rossetti)',
      href: '/igcse/edexcel/poetry/remember',
      reason:
        'Both are built on commands to someone loved across a deathbed. Rossetti’s speaker imagines her own death and moves towards letting go, even of being remembered, while Thomas’s speaker faces his father’s death and refuses to let go at all.',
    },
    {
      title: 'Poem at Thirty-Nine (Alice Walker)',
      href: '/revision/texts/poem-at-thirty-nine',
      reason:
        'A daughter remembers a father who has died, fondly and in free verse; Thomas pleads with a father who is dying, in the strictest of forms. Pearson has set this pairing, on feelings about fathers.',
    },
    {
      title: 'If- (Rudyard Kipling)',
      href: '/igcse/edexcel/poetry/if',
      reason:
        'A father advises his son and names him only in the last line; here a child instructs a dying father, names him only at line 16, and demands the loss of composure that Kipling’s speaker warns against.',
    },
    {
      title: 'Piano (D H Lawrence)',
      href: '/igcse/edexcel/poetry/piano',
      reason:
        'Both speakers are overwhelmed by feeling for a parent, but Lawrence gives way and weeps for a past already lost, while Thomas fights to hold on to a father who is still alive.',
    },
    {
      title: 'Prayer Before Birth (Louis MacNeice)',
      href: '/revision/texts/prayer-before-birth',
      reason:
        'Two pleas from the two ends of life: an unborn child begs to be protected from the world, a son begs his father not to leave it. Both keep returning to the same words, and both turn to prayer: MacNeice’s title names it, and Thomas’s speaker says it in line 17.',
    },
    {
      title: 'War Photographer (Carol Ann Duffy)',
      href: '/igcse/edexcel/poetry/war-photographer',
      reason:
        'Both men watch suffering and death they cannot stop, but Duffy’s photographer holds his feelings in, in four regular stanzas, while Thomas’s speaker lets his out. Pearson’s mark scheme names it as a partner for this poem on emotions.',
    },
    {
      title: 'Sonnet 116 (William Shakespeare)',
      href: '/igcse/edexcel/poetry/sonnet-116',
      reason:
        'Both use a strict traditional form to argue against time and death: Shakespeare that true love outlasts Time and his sickle, Thomas that life must be fought for to its final moment.',
    },
  ],

  // A dying parent and a child's grief, handled without physical detail.
  contentGuidance: ['mortality'],

  quotesFromElsewhere: [
    // Thomas's letter to Marguerite Caetani, 28 March 1951, as quoted by Amanda
    // French (Refrain, Again, University of Virginia, 2004), citing the
    // Collected Letters, page 800; also quoted by Poetry for Students (Gale).
    'my father, who doesn’t know he’s dying',
    // Remember, Christina Rossetti, lines 10, 13 and 2, read from page 70
    // of the anthology PDF on 26 September 2026. Rossetti died in 1894.
    'do not grieve',
    'forget and smile',
    'silent land',
  ],

  sources: [
    {
      label:
        'The held edition, src/data/full-texts/do-not-go-gentle-into-that-good-night.ts: the anthology’s text, extracted from Pearson’s PDF. The printed poem is cut from it by poemLines(), and on 26 September 2026 its words, rhyme words, pronouns, punctuation and line endings were counted from it by script (168 words, 98 different; eight full stops; lines 5, 7 and 13 the only lines without closing punctuation; death, I, me, my, you and your once each).',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 3, page 69: the poem as prescribed, with line numbers 5, 10 and 15 in the margin; five tercets and a quatrain, measured from the line positions in the PDF. Page 73, acknowledgements: published in The Poems of Dylan Thomas and The Collected Poems of Dylan Thomas: The New Centenary Edition (Orion, 2014), reproduced by permission of David Higham Associates Limited and New Directions Publishing Corp. The copy re-downloaded on 26 September 2026 had SHA-256 ec2bdca4...a9f3, identical to the copy read on 25 September.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'The same anthology, pages 51, 52, 57, 59, 62, 63 and 70: If-, Prayer Before Birth, Piano, Sonnet 116, Poem at Thirty-Nine, War Photographer and Remember, read on 26 September 2026 for every fact this guide states about them. Only Remember (public domain) is quoted, in the model answer.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Academy of American Poets (poets.org), Do not go gentle into that good night: an independent full text, read on 25 and 26 September 2026, agreeing with the anthology on every phrase checked, on line 5 ending without punctuation and on the punctuation of lines 6 and 17.',
      url: 'https://poets.org/poem/do-not-go-gentle-good-night',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature specification, Issue 3 (August 2025), read on 26 September 2026: Paper 1 is a two-hour examination; Section B is one essay question from a choice of two, comparing two poems from Part 3 of the anthology, and assesses analysis of language, form and structure and links between texts; context is assessed in Section C, Modern Prose; closed book, but learners are provided with the anthology poems.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        'Pearson 4ET1/01 question paper, November 2023, read on 26 September 2026: Section B, answer one question, 40 minutes advised; question 3 is the exam practice question 1 here, word for word, and question 2 shows the two-named-poems format used for the others. The poems are provided in a Poetry Booklet.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-que-20231107.pdf',
    },
    {
      label:
        'Pearson mark scheme, November 2023, 4ET1/01, question 3, read on 26 September 2026: suitable second poems If-, Prayer Before Birth, Piano, Poem at Thirty-Nine and War Photographer; points clearly based on comparison rewarded; an answer on only one poem cannot go beyond the top of Level 2; indicative content says the reference to blinding sight could directly refer to the father, who was blind, notes the pun on grave men, and calls the villanelle obsessive and relentless in its treatment of its subject.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-rms-20240125.pdf',
    },
    {
      label:
        'Pearson examiners’ report, January 2023, 4ET1/01R, read on 26 September 2026: question 2 compared feelings about fathers in Poem at Thirty-Nine and Do not go gentle, the most popular anthology question; responses to Do not go gentle showed understanding but often more limited coverage, and close analysis was often not sustained. Question 3 named one poem, Search for my Tongue, and one other.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/exam-materials/4et1-01r-pef-20230302.pdf',
    },
    {
      label:
        'Pearson Edexcel, Mark Scheme (Results), June 2024, International GCSE English Literature (4ET1) Paper 1R, Section B, read on 26 September 2026: question 2 named both poems, Piano and Remember; question 3, on giving advice, names If- and lists Do not go gentle among suitable choices; examiners reward points clearly based on comparison, require a degree of personal response, and say summary, paraphrase or a list of devices is not enough.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01r-rms-20240822.pdf',
    },
    {
      label:
        'Wikipedia, Dylan Thomas, source text read on 26 September 2026: born 27 October 1914 at 5 Cwmdonkin Drive, Uplands, Swansea; father David John Thomas (1876-1952), first-class honours in English from University College, Aberystwyth, teaching English literature at the local grammar school; both parents bilingual in English and Welsh, Jack teaching Welsh at evening classes; Dylan at Swansea Grammar School from October 1925, leaving at 16 to report for the South Wales Daily Post; 18 Poems, December 1934; over a hundred BBC broadcasts in the three years from October 1945; the Boathouse, Laugharne, from May 1949, and Pelican House rented for his parents; the first American tour from February 1950, four trips in all; the father died of pneumonia just before Christmas 1952; Thomas died in New York on 9 November 1953.',
      url: 'https://en.wikipedia.org/wiki/Dylan_Thomas',
    },
    {
      label:
        'Dylan Thomas Centre website (dylanthomas.com, City and County of Swansea), Laugharne trail, read on 26 September 2026: his parents came to live at the Pelican in 1949; Dylan called on his father every day to do the crossword; in 1951 his father became sick and his sight began to fail; D. J. Thomas died in 1952.',
      url: 'https://www.dylanthomas.com/dylan-thomas-trails/west-wales/laugharne/',
    },
    {
      label:
        'Dylan Thomas Birthplace, 5 Cwmdonkin Drive, timeline, read on 26 September 2026: Dylan’s father died on 16 December 1952, aged 76; Dylan died at St Vincent’s Hospital, New York, on 9 November 1953, aged 39. It dates Dylan’s start at Swansea Grammar School, where his father taught English, to September 1925, where Wikipedia has October, so this guide gives only the year.',
      url: 'https://www.dylanthomasbirthplace.com/dylan-timeline/',
    },
    {
      label:
        'Amanda French, Refrain, Again: The Return of the Villanelle (doctoral dissertation, University of Virginia, 2004; the chapter on this poem, read on 26 September 2026): on 28 March 1951 Thomas sent the poem to Princess Marguerite Caetani, editor of Botteghe Oscure, with the sentence quoted in this guide, cited to his Collected Letters, page 800; argues he probably began the poem around 1949 or 1950; describes its iambic pentameter, perfect masculine rhymes and unvaried refrains. Wikipedia’s Villanelle article cites the same dissertation.',
      url: 'http://villanelle.amandafrench.net/?page_id=186',
    },
    {
      label:
        'Poetry for Students (Gale), Do Not Go Gentle into That Good Night, via Encyclopedia.com, read on 26 September 2026: D. J. Thomas died on 16 December 1952; Thomas sent the poem to Princess Caetani in spring 1951, saying his father did not know he was dying; refers to the father’s blindness; describes the metre as basically iambic pentameter, or decasyllabic. Its claims that the poem was probably composed in 1945 and not published until after the father’s death contradict the 1951 Botteghe Oscure publication, so neither is used except to show that the date of writing is disputed.',
      url: 'https://www.encyclopedia.com/arts/educational-magazines/do-not-go-gentle-good-night',
    },
    {
      label:
        'Wikipedia, Do not go gentle into that good night: first published in Botteghe Oscure in 1951; collected in In Country Sleep, and Other Poems (New Directions, 1952) and Collected Poems 1934-1952 (Dent, 1952); says the poem was written in Florence in 1947, which is reported here only as one of the disputed dates.',
      url: 'https://en.wikipedia.org/wiki/Do_not_go_gentle_into_that_good_night',
    },
    {
      label:
        'Wikipedia, Botteghe Oscure: a literary journal published in Rome from 1948 to 1960, founded and edited by Marguerite Caetani, which published the poem in 1951.',
      url: 'https://en.wikipedia.org/wiki/Botteghe_Oscure',
    },
    {
      label:
        'Wikipedia, Bishop Gore School: D. J. Thomas was senior English master at the school, then known as Swansea Grammar School.',
      url: 'https://en.wikipedia.org/wiki/Bishop_Gore_School',
    },
    {
      label:
        'The Marginalian, The Story Behind Dylan Thomas’s Do Not Go Gentle Into That Good Night (17 January 2024): first published in Botteghe Oscure in 1951 and soon included in In Country Sleep, And Other Poems (1952). A second source for the 1951 publication.',
      url: 'https://www.themarginalian.org/2024/01/17/dylan-thomas-do-not-go-gentle-into-that-good-night/',
    },
    {
      label:
        'Wikipedia, Villanelle, source text read on 26 September 2026: from the Italian villanella, a rustic song; began as a ballad-like song with no fixed form; Jean Passerat’s villanelle of 1606 established the modern form, though how it became fixed is debated; after Théodore de Banville’s Petit traité de poésie française (1872) the form was popularised in England through Edmund Gosse and Austin Dobson; most villanelles are in English; no established metre, most nineteenth-century examples in trimeter or tetrameter and most twentieth-century ones in pentameter; Thomas’s poem perhaps the most renowned villanelle; Elizabeth Bishop’s One Art, 1976.',
      url: 'https://en.wikipedia.org/wiki/Villanelle',
    },
    {
      label:
        'Wiktionary, read 25 and 26 September 2026: grieve (transitive, to cause sorrow or distress to; to feel very sad about, to mourn); gentle (from Old French gentil, high-born, noble, from Latin gentilis, of the same family or clan; senses tender, mild, polite; archaic, well-born); pray (to address a deity; to beg earnestly; archaic adverb, please, as in I pray you); cry (to weep; to call out loudly); close, noun (an end or conclusion); gay (dated: happy, joyful and lively; bright); rave (to talk or act wildly, as in delirium or fury); grave (the noun from Old English, the adjective from Latin gravis); meteor; bay (a body of water held by a concave shore; the laurel, hence fame); masculine rhyme (a rhyme on single stressed syllables); assonance; caesura; antithesis; polyptoton.',
      url: 'https://en.wiktionary.org/wiki/gentle',
    },
    {
      label:
        'Wikipedia, End-stopping: an end-stopped line is one whose phrase, clause or sentence ends with the line; its opposite is enjambment.',
      url: 'https://en.wikipedia.org/wiki/End-stopping',
    },
  ],
}
