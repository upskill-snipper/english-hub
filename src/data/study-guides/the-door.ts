import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Door, Miroslav Holub, in Ian Milner's English translation. A supplement:
 * the page at /resources/revision-notes/the-door keeps its stanza-by-stanza
 * overview, context, themes, voice and images, key phrases, form and
 * techniques, and exam questions with planning notes, and this file adds the
 * three sections it lacked (key passages, vocabulary and a model answer), with
 * the scene cards.
 *
 * WHICH TEXT. Until 26 September 2026 the set-text registry row for this slug
 * described an E.M. Forster story called The Door, which does not exist; the
 * row has since been corrected to Holub's poem, which is what the page above
 * has always taught. No specification this site covers prescribes the poem,
 * so it is written up as unseen-poetry practice for GCSE and A-level English
 * Literature, and nothing here names a board.
 *
 * WORDING. Every quoted phrase was checked on 26 September 2026 against the
 * Scottish Poetry Library's text, which reproduces the Bloodaxe translation by
 * the publisher's permission, and against three further copies that agree
 * with it word for word: Silver Birch Press (2013), A Year of Being Here
 * (2015) and a Samaritans schools resource, which credits the translation to
 * Ian Milner with Bloodaxe's permission. The lineation was measured from the
 * Scottish Poetry Library's markup: five stanzas of 5, 6, 3, 9 and 3 lines,
 * 26 lines and 89 words. The poem is printed without line numbers; the
 * numbers here count its lines from the top, ignoring stanza breaks.
 *
 * THE QUOTATION BUDGET. At 89 words, the site's 15 per cent share
 * (fair-dealing.ts) allows 13 distinct words on this page. This file uses all
 * 13, in five phrases, and every one of them is also quoted by the page above,
 * so mounting the file adds nothing to what the route quotes from the poem:
 * the refrain (5 words), the two repeated openers (1 and 2), the ticking
 * darkness (3) and the last two words (2). The magic city, the hollow wind and
 * the picture of a picture are described in this file's own words, and single
 * words of the poem named in analysis (nothing, only, hollow) are mentioned
 * rather than quoted, as in the other guides.
 *
 * FACT-CHECKED 26 September 2026 by a second reader, against the Scottish
 * Poetry Library markup and the Samaritans PDF, both re-fetched: every quoted
 * phrase, line number and stanza length above held. Corrected then: the note
 * on the door's definite article credited Holub with a word Czech does not
 * have (Czech has no articles, so it is Milner's); stanza 3's card called fog
 * the poem's one image of not seeing, when stanza 4's darkness is another;
 * three places said the refrain closes stanza 4 instead of opening it, when
 * it does both; and If- is addressed to the speaker's son, not the reader.
 *
 * THE PAGE ABOVE, read in full while this was written, agrees with the poem on
 * its lineation and on every phrase it quotes, and is wrong or unverified in
 * these places, which are reported rather than fixed here:
 * - Its paraphrase card calls the stanza 4 wind empty and analyses the wind
 *   being described as empty. The poem's adjective is hollow.
 * - It still names assessment objectives by number (seven times) and uses
 *   em dashes in its heading and quotation cards, against the house rules.
 * - Its remark that Holub wanted poems ordinary people could read without
 *   feeling tricked has no source, and none was found.
 * - Its footer says the translation first appeared in the Penguin Selected
 *   Poems of 1967. That book (Penguin Modern European Poets, translated by
 *   Ian Milner and George Theiner) is confirmed; that The Door first appeared
 *   in English there is not. Wikipedia says Holub first appeared in English in
 *   the Observer in 1962.
 * - Its account of Holub's position after 1968 could not be checked against a
 *   source reached while this was written, so this file relies on none of it.
 * - Its layout metadata title ends in GCSE, which reads as a placement the
 *   page's own badges were changed to deny.
 */
export const guide: StudyGuide = {
  slug: 'the-door',
  title: 'The Door',
  author: 'Miroslav Holub (translated by Ian Milner)',
  form: 'poem',
  scope:
    'The whole poem, 26 lines in five stanzas of 5, 6, 3, 9 and 3 lines, in Ian Milner’s English translation of Miroslav Holub’s Czech original. No exam specification this site covers sets the poem, so it is studied here as practice for unseen poetry at GCSE and A-level. It is printed without line numbers: the line numbers in this guide count from the top of the poem and ignore the gaps between stanzas.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Miroslav Holub 1961 (the Czech original, Dveře, the opening poem of Jdi a otevři dveře, Mladá fronta, Prague). English translation by Ian Milner, published in the UK by Bloodaxe Books in Poems Before & After: Collected English Translations (2006). Quoted here in short phrases for criticism and review.',
  },
  workLength: {
    words: 89,
    lines: 26,
    basis:
      'Counted on 26 September 2026 from the Scottish Poetry Library’s page for the poem, which reproduces the Bloodaxe translation by permission: five stanzas of 5, 6, 3, 9 and 3 lines, 26 lines, 89 words by the validator’s word count, title and poet excluded. The poem has no hyphenated words, so splitting hyphens changes nothing. Silver Birch Press, A Year of Being Here and a Samaritans schools resource print the same words.',
  },

  native: {
    overview: '/resources/revision-notes/the-door',
    context: '/resources/revision-notes/the-door',
    themes: '/resources/revision-notes/the-door',
    characters: '/resources/revision-notes/the-door',
    keyQuotes: '/resources/revision-notes/the-door',
    languageAnalysis: '/resources/revision-notes/the-door',
    structureForm: '/resources/revision-notes/the-door',
    examPractice: '/resources/revision-notes/the-door',
  },

  extracts: [
    {
      title: 'The command and the list of possibilities',
      where: 'Stanzas 1-2, lines 1-11',
      pointer:
        'Lines 1 to 11, counting from the top of the poem: from the opening command to the end of stanza 2, where the list closes on an image of an image.',
      summary:
        'The poem begins with its command and then speculates about what might be outside. In stanza 1 the possibilities grow, from a single tree to larger natural and cultivated spaces, and finally to an enchanted city. Stanza 2 repeats the command, but its possibilities are stranger and smaller: an animal searching about, a face, a lone eye, and last of all an image of an image. Nothing is promised; every possibility is hedged.',
      annotations: [
        {
          phrase: 'Go and open the door',
          note: 'The first line is an order, and it arrives before any scene, speaker or reason. It has two verbs, and go comes first: the reader must move before discovering anything, so the act of will comes before the reward. There is no stated subject and no softening please, which makes it urgent without being hostile. In Milner’s English every word except open is a single syllable, so the line is plain enough for anyone to say to anyone, and because it returns unchanged it becomes the fixed point against which everything else in the poem varies.',
        },
        {
          phrase: 'Maybe',
          note: 'The word opens line 2 and then lines 7 and 8, a short anaphora of speculation. It keeps everything beyond the door hypothetical: the speaker never claims to know what is there, only what might be. One reading links this to Holub’s working life as an immunologist, since the first two stanzas list possible results the way an experiment does before it is run. Either way the hedging is honest, and that honesty is what allows the later command to be trusted.',
        },
        {
          phrase: 'the door',
          note: 'The definite article matters in English. Milner’s translation says the door, not a door, as though speaker and reader already know which one is meant; Czech has no articles, so this is the translator’s choice, but it fits the poem, which never describes the door or says where it is. That gap lets the door stand for any threshold a reader is hesitating at: a new experience, an unfamiliar idea, a conversation that has been avoided. The symbol works because Holub leaves it empty for the reader to fill.',
        },
      ],
      question:
        'How does the poet use the first two stanzas to make the world beyond the door seem both inviting and uncertain?',
    },
    {
      title: 'The worst case and the draught',
      where: 'Stanzas 4-5, lines 15-26',
      pointer:
        'Lines 15 to 26, counting from the top of the poem: from the fourth return of the command to the last line.',
      summary:
        'The fourth and longest stanza gives the command again and then imagines the worst: that outside there may be only a darkness that ticks, or a wind described as hollow, or nothing at all. Each of these begins with the same conceding phrase, and the lines thin as the possibilities empty, until one line holds a single word. Everything after the stanza’s opening command is one sentence, and its main clause, the command again, is held back until the last line of the stanza. Set apart below it, three lines of two words each give the one result the speaker can guarantee: the air will move.',
      annotations: [
        {
          phrase: 'even if',
          note: 'The phrase opens lines 16, 18 and 20, taking over from the speculative opener of the first two stanzas. That word opened possibilities up; this one concedes them away, one objection at a time, like a debater who grants every point to the other side and still wins the argument. By line 20 the phrase has a line to itself, and the next line is the single word nothing: the concession has become total, and the stanza has thinned on the page to match.',
        },
        {
          phrase: 'the darkness ticking',
          note: 'Darkness is given a sound, so two senses are mixed (synaesthesia). Ticking suggests a clock, and so time running on whether or not the reader acts; some readers also hear something more threatening in it. The present participle makes the darkness active rather than empty. Even the bleakest outcome the poem imagines is not still, which quietly supports the case for opening the door rather than waiting.',
        },
        {
          phrase: 'go and open the door',
          note: 'The refrain returns at line 23 in lower case, as the end of a sentence, and for the first time it closes a stanza as well as opening it. Its position has moved from premise to conclusion: after conceding the darkness, the wind and nothing at all, the speaker arrives back at exactly the same instruction. Nothing in the argument has been able to change it, and that is the argument.',
        },
        {
          phrase: 'a draught',
          note: 'The poem’s last words, and a deliberate anticlimax after the enchanted city of stanza 1. A draught is usually something people shut doors to keep out, so the one guaranteed reward is the very thing a closed door exists to stop. Yet a draught is also moving air, evidence that inside and outside are now connected. The most convincing reading holds both at once: the ending is wry, and it is also the poem’s proof that opening the door changes something.',
        },
      ],
      question:
        'How does the poet use the last two stanzas to persuade the reader to act, even after admitting that there may be nothing outside?',
    },
  ],

  vocabulary: [
    {
      term: 'Imperative',
      definition:
        'The form of a verb that gives an order, such as go or open. The poem’s refrain is an imperative, and it appears five times (lines 1, 6, 12, 15 and 23). An imperative addresses someone directly, so the reader is placed on the near side of the door, as the person being told what to do.',
    },
    {
      term: 'Refrain',
      definition:
        'A line or phrase that returns through a poem. Here the command opens each of the first four stanzas and then closes the fourth, so it frames every list of possibilities. A refrain builds insistence; in this poem it also acts as a constant against which the changing possibilities are measured.',
    },
    {
      term: 'Anaphora',
      definition:
        'Repeating the same word or phrase at the start of successive lines or clauses. The poem uses two: the speculative “Maybe” (lines 2, 7 and 8) and the concessive “even if” (lines 16, 18 and 20). The switch from the first to the second is the poem’s turning point, from what might be gained to what might not.',
    },
    {
      term: 'Concession (concessive clause)',
      definition:
        'A clause that admits something which seems to count against the main point, usually introduced by although or even if. Stanza 4 is built from three of them: the speaker grants that outside there may be only darkness, only a hollow wind or nothing at all, and still gives the command. An argument that concedes the worst is harder to dismiss.',
    },
    {
      term: 'Periodic sentence',
      definition:
        'A sentence that holds back its main clause until the end. After its opening command, stanza 4 is a single sentence of eight lines: three concessive clauses come first, and the main clause, the command itself, arrives only at line 23. The grammar makes the reader wait through every objection before the instruction is given again.',
    },
    {
      term: 'Free verse',
      definition:
        'Poetry without a regular rhyme scheme or metre. The five stanzas are unequal (5, 6, 3, 9 and 3 lines) and the lines vary from five words to one. A poem urging its reader out of a closed room does not lock itself into a fixed form.',
    },
    {
      term: 'Enjambment',
      definition:
        'Running a sentence on past the end of a line without a pause. Lines 16 and 18 both end on the word only, so the reader has to cross the line break to find out what the only thing outside is. The last stanza spreads one short sentence over three lines of two words each, slowing the reader so that the last two words arrive on a line of their own.',
    },
    {
      term: 'Bathos (anticlimax)',
      definition:
        'A sudden drop from the grand to the ordinary, often for comic effect. The possibilities in stanza 1 rise to an enchanted city, and the only guarantee at the end is a draught. The effect here is double: the drop is wry, and it is also the poem’s point, that a small, certain change is worth more than a grand, imagined one.',
    },
    {
      term: 'Synaesthesia',
      definition:
        'Describing one sense in terms of another. In “the darkness ticking” something that should be seen, or rather not seen, is given a sound, which makes the darkness seem alive and makes the passing of time audible.',
    },
    {
      term: 'Draught',
      definition:
        'A current of air, usually cool, moving through a room from a gap such as a door or window. This is the British spelling; the American spelling is draft. It is the poem’s last word, and its effect depends on the ordinary fact that people close doors to stop draughts.',
    },
    {
      term: 'Rummaging',
      definition:
        'Searching untidily through a heap of things. It is what the dog is doing in line 7, one of the more ordinary and less inviting possibilities of stanza 2, and a sign that what lies outside will not all be magical.',
    },
    {
      term: 'Symbol',
      definition:
        'An object that stands for an idea beyond itself. The door is the poem’s controlling symbol, a boundary between the known and the unknown. Because Holub never says what it leads to, readers can take it personally (a new experience), intellectually (an open mind) or politically (an open society).',
    },
    {
      term: 'Threshold',
      definition:
        'Literally the strip of floor across a doorway; figuratively the moment just before a change or a new beginning. The whole poem takes place on a threshold: it gives the order five times but never shows the door being opened, so the decision is left with the reader.',
    },
    {
      term: 'Direct address',
      definition:
        'Speaking straight to a listener as you. The commands address the reader throughout, although the pronoun itself appears only once, in line 8. Because the person addressed is never described, every reader becomes that person.',
    },
    {
      term: 'Hypothesis',
      definition:
        'A proposed explanation that has to be tested before it can be trusted. Holub was an immunologist as well as a poet, and one reading sees the poem as an experiment: it lists possible results, good and bad, and concludes that the only way to find out is to run the test by opening the door.',
    },
    {
      term: 'Translation',
      definition:
        'Holub wrote in Czech, and the poem is read in English in Ian Milner’s translation. The plain, spoken English is the translator’s choice of words as well as the poet’s design, so a careful essay mentions the translation when it builds a point on a single English word, such as draught.',
    },
  ],

  modelAnswer: {
    question:
      'How does Holub persuade the reader that opening the door is worthwhile, even when there may be nothing outside?',
    paragraph:
      'Holub persuades not by promising a reward but by removing every excuse for staying inside. The first two stanzas rest on the speculative “Maybe”, and the possibilities of stanza 1 climb from a single tree to an enchanted city; stanza 4 replaces that opener with the concessive “even if”, and the direction reverses, each clause taking something away, from “the darkness ticking” to a wind described as hollow and finally to a line that holds one word. The grammar makes the reader wait through all of it: after its opening command, the stanza is a single sentence of eight lines whose main clause is held back until line 23, where “go and open the door” returns. For the first time the refrain closes a stanza as well as opening it, so an order that began without any reason now arrives as the conclusion of an argument: the speaker has granted the worst case and reached the same instruction. The final stanza offers, as a bare minimum, “a draught”. One reading hears a joke at the reader’s expense, since a draught is what people shut doors to keep out. The more convincing reading is that the anticlimax is the point, because a draught is air moving between inside and outside, proof that opening the door has changed something. Having admitted that there may be nothing out there, Holub cannot be accused of wishful thinking, and the modesty of his ending is what makes its hope believable.',
    commentary: [
      'It opens with an argument that answers the question, how Holub persuades, rather than a description of what the poem is about, and every later sentence serves that argument.',
      'It tracks a pattern across the whole poem, the switch from one repeated opener to another, instead of analysing images one at a time. On a poem this short, whole-poem structure is where an answer can easily stay thin.',
      'It analyses grammar as well as imagery: the periodic sentence of stanza 4, which delays the command, is a precise point about how the poem makes the reader wait, and an easy one to miss.',
      'It uses a line reference to make a structural point about position, not just repetition: the refrain, which opens each of the first four stanzas, also becomes the last line of stanza 4, moving from premise to conclusion.',
      'Its quotations are short, embedded in its own sentences and followed each time by what they do. Brief quotations are easier to remember in an exam and leave more room for analysis.',
      'It weighs two readings of the ending, says which is more convincing and gives the reason, which is what separates a critical answer from a descriptive one.',
      'It leaves context out, because the question asks about method. If a question invites context, one clause is enough, tied to a specific line: the poem was first published in Czech in Prague in 1961, and Holub worked as an immunologist.',
    ],
  },

  timeline: [
    {
      where: 'Stanza 1, lines 1-5',
      title: 'The command and the first possibilities',
      summary:
        'The poem opens with its command, before any scene or reason is given. It then imagines what may be waiting outside, in a list that widens from a single tree to larger and more cultivated spaces, and ends in fantasy with an enchanted city.',
      setting: 'Indoors, facing a closed door; the outside is only imagined',
      who: ['The speaker', 'The reader'],
      quote: 'Go and open the door',
      themes: ['Curiosity and openness to experience'],
      tension: 2,
      significance:
        'The command comes before any reason for it, and it will not change for the rest of the poem.',
    },
    {
      where: 'Stanza 2, lines 6-11',
      title: 'Stranger possibilities',
      summary:
        'The command is repeated, and the possibilities become odder and smaller: a dog, a face, a single eye, and finally an image of an image. Two of the lines begin with the same hedging word, so nothing outside is promised.',
      setting: 'The same closed door; stranger glimpses of what is outside',
      who: ['The speaker', 'The reader'],
      themes: ['Uncertainty and perception', 'Curiosity and openness to experience'],
      tension: 3,
      significance:
        'Openness is not promised to be pleasant: what lies outside may be strange, partial or impossible to read.',
    },
    {
      where: 'Stanza 3, lines 12-14',
      title: 'The fog will clear',
      summary:
        'The shortest of the four command stanzas. After the refrain comes the speaker’s first real promise: if there is fog outside, it will not last. Fog, an image of being unable to see ahead, is the only obstacle in the poem that the speaker promises will pass.',
      setting: 'The door, with fog imagined beyond it',
      who: ['The speaker', 'The reader'],
      themes: ['Hope without illusion', 'Risk, fear, and the closed life'],
      tension: 2,
      significance:
        'A pause between the strange second stanza and the bleak fourth, and the first time the speaker promises anything.',
    },
    {
      where: 'Stanza 4, lines 15-23',
      title: 'The worst case',
      summary:
        'The longest stanza imagines that outside there is only a ticking darkness, or a hollow wind, or nothing at all. Three times a clause begins by conceding the worst, the lines thin until one holds a single word, and the command, which opened the stanza, returns to close it as well.',
      setting: 'The door, with darkness, wind or nothing imagined beyond it',
      who: ['The speaker', 'The reader'],
      quote: 'the darkness ticking',
      themes: ['Risk, fear, and the closed life', 'Hope without illusion'],
      tension: 5,
      significance:
        'By admitting that there may be nothing outside, the speaker makes the command impossible to dismiss as wishful thinking.',
    },
    {
      where: 'Stanza 5, lines 24-26',
      title: 'The smallest guarantee',
      summary:
        'Set apart in three lines of two words each, the ending names the one result the speaker can promise: air will move through the open door. After the enchanted city of stanza 1 it is a deliberate anticlimax, and also the poem’s proof that something changes.',
      setting: 'The threshold, with the door imagined open and air moving through',
      who: ['The speaker', 'The reader'],
      quote: 'a draught',
      themes: ['Hope without illusion', 'The ordinary made significant'],
      tension: 3,
      significance:
        'The poem ends on its smallest image and its only certainty: opening the door connects inside and outside.',
    },
  ],

  // A single voice speaking to an unnamed reader: no cast to map.
  relationships: [],

  compareWith: [
    {
      title: 'Hide and Seek (Vernon Scannell)',
      href: '/resources/revision-notes/hide-and-seek',
      reason:
        'Also spoken to its listener in commands, and also ending on darkness and emptiness outside: Scannell’s child follows the voice that says stay hidden and comes out to find everyone gone, while Holub’s voice says open the door whatever may, or may not, be waiting.',
    },
    {
      title: 'Do not go gentle into that good night (Dylan Thomas)',
      href: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
      reason:
        'A second poem built on a returning imperative line and set against darkness. Thomas repeats his commands inside the villanelle, one of the strictest forms in English, while Holub repeats one command in free verse, so the pair tests how form shapes persuasion.',
    },
    {
      title: 'If- (Rudyard Kipling)',
      href: '/igcse/edexcel/poetry/if',
      reason:
        'Advice addressed directly to a listener as you (the last line reveals him as the speaker’s son), built on a repeated conditional opening as Holub’s fourth stanza is built on a repeated concession. Kipling promises the whole Earth as the reward for meeting his conditions; Holub promises only moving air, and the difference in scale is worth arguing about.',
    },
  ],

  contentGuidance: [],

  sources: [
    {
      label:
        'Scottish Poetry Library, The Door by Miroslav Holub: the text, from Poems Before & After: Collected English Translations (Bloodaxe Books, 2006), reproduced by permission of the publisher. Used for every quoted phrase, the lineation (5, 6, 3, 9 and 3 lines) and the word count (89). Fetched 26 September 2026.',
      url: 'https://www.scottishpoetrylibrary.org.uk/poem/door/',
    },
    {
      label:
        'Silver Birch Press, The Door, poem by Miroslav Holub (20 September 2013): an independent copy of the poem, matching the Scottish Poetry Library text word for word. Also gives Holub’s dates (1923-1998) and describes him as a Czech poet and immunologist.',
      url: 'https://silverbirchpress.wordpress.com/2013/09/20/the-door-poem-by-miroslav-holub-2/',
    },
    {
      label:
        'Samaritans, The Door (a PDF in its DEAL schools resources): a third copy, agreeing on every phrase quoted here, credited as translated from the Czech by Ian Milner, from Poems Before & After, with permission granted by the publisher on behalf of the author’s estate.',
      url: 'https://media.samaritans.org/documents/DEAL_The_Door_poem.pdf',
    },
    {
      label:
        'A Year of Being Here, Miroslav Holub: The Door (January 2015): credits the source as Poems Before & After, translated by Ian Milner et al. (Bloodaxe Books, 2006); a fourth copy, matching the Scottish Poetry Library text word for word.',
      url: 'https://www.ayearofbeinghere.com/2015/01/miroslav-holub-door.html',
    },
    {
      label:
        'Wikipedia, Miroslav Holub: born 13 September 1923 in Plzeň, died 14 July 1998 in Prague; immunologist; first published in English in the Observer in 1962, and a Penguin Modern European Poets Selected Poems in 1967, translated by Ian Milner and George Theiner with an introduction by A. Alvarez.',
      url: 'https://en.wikipedia.org/wiki/Miroslav_Holub',
    },
    {
      label:
        'Antikavion (Czech antiquarian bookseller), listing for Jdi a otevři dveře: Mladá fronta, Prague, 1961, described as Holub’s fourth collection of poems.',
      url: 'https://www.antikavion.cz/kniha/jdi-a-otevri-dvere-miroslav-holub-1961',
    },
    {
      label:
        'Knihovnicka.net, Jdi a otevři dveře (1961): describes the poem as the collection’s opening poem, sharing its title, and reads it as inviting in the critical current that loosened in the early 1960s.',
      url: 'https://www.knihovnicka.net/kniha/181-jdi-a-otevri-dvere-holub-miroslav/obsah-dila/',
    },
    {
      label:
        'Český-jazyk.cz, Čítanka: prints the Czech poem under the title Dveře, from Jdi a otevři dveře. Used for the Czech title only. Checked 26 September 2026.',
      url: 'https://www.cesky-jazyk.cz/citanka/miroslav-holub/dvere-jdi-a-otevri-dvere.html',
    },
    {
      label:
        'The set-text registry row for this slug (src/lib/board/set-texts.ts), corrected 26 September 2026, which records the specifications checked for the poem (none prescribes it) and the Bloodaxe 1990 printing that tags the translation as Ian Milner’s. The 1990 page reference was not re-checked for this file.',
    },
  ],
}
