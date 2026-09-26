import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Do not go gentle into that good night, Dylan Thomas (first published 1951).
 * A supplement: the page at
 * /resources/revision-notes/do-not-go-gentle-into-that-good-night keeps its
 * overview, context, themes, voice, key quotations, language and form
 * sections, and this file adds the four it lacked (key passages, vocabulary,
 * exam practice and a model answer), with the scene cards and character map.
 *
 * RE-VERIFIED 26 September 2026: every quoted phrase re-checked by script
 * against a fresh download of the anthology (same SHA-256) and against
 * poets.org, the stanza layout against both, and every fact against the
 * sources below, including the June 2024 mark scheme fetched from Pearson.
 * Changed then: "back to back" for the claim that Rage, rage is the poem's
 * only doubled word (the word the appears twice in that refrain line), the
 * refrains described as side by side rather than together for the first time
 * (lines 1 and 3 already frame stanza 1), the pronoun reading of the refrains
 * softened to a reading, and the context tip rewritten from the mark scheme,
 * whose grid for this section does not credit context at all.
 *
 * FACT CHECK, 26 September 2026: dates, publication, the father, the
 * villanelle rules, the stanza layout (measured again from the PDF geometry)
 * and the exam claims re-confirmed. Changed then: the spondee entry called the
 * doubled verb of lines 9 and 15 an imperative, which contradicts this file's
 * own reading that the middle refrains are statements; and the two tips citing
 * the June 2024 mark scheme now name it as Paper 1R, the version it is.
 *
 * SELF-AUDIT OF THE PAGE ABOVE, 25 September 2026, against the rubric:
 * - Substantive, so native: overview (two paragraphs and a summary box),
 *   context (three developed entries), themes (four), voice and speaker (two
 *   paragraphs and a discussion point), key quotations (nine, each checked
 *   word for word and by line against the anthology and correct), language
 *   and imagery (extended metaphor, paradox, pun, rhyme, alliteration and
 *   repetition, each with examples), form and structure (four entries).
 * - Missing: key passages, vocabulary and a model answer. Exam practice has
 *   five tips but no questions, so it is written here.
 *
 * WORDING. Every quotation was checked against the poem as the student
 * studies it: page 69 of the Pearson Edexcel International GCSE English
 * Anthology, Issue 8 (February 2026), Part 3. The copy read was byte-identical
 * (SHA-256 ec2bdca4...a9f3) to the PDF qualifications.pearson.com served on 25
 * September 2026. The anthology prints 5, 10 and 15 in the margin, and the
 * stanza breaks were measured from the line positions on the page: five
 * tercets and a quatrain. poets.org was used as an independent second text
 * and agrees on every phrase quoted here.
 *
 * THE QUOTATION BUDGET. The poem is 168 words, so the site's limit of 15 per
 * cent (fair-dealing.ts) allows 25 distinct words on this page. This file uses
 * 24, in eleven short phrases, and reuses them rather than adding more. The
 * refrains are referred to by line number, and single words of the poem named
 * in analysis (the adjective gentle, the verb pray) are mentioned rather than
 * quoted, as in the other guides.
 *
 * THE PAGE ABOVE is right about the form, the refrain lines and the nine
 * quotations it prints, and wrong or unverified in these places:
 * - It says the poem is set for English Language A and Literature. The
 *   anthology puts it in Part 3, which only English Literature (4ET1) studies.
 * - Its card on line 17 says commas sit around the words me now. There is a
 *   comma before them and none after.
 * - It says D. J. Thomas was losing his sight, wanted to be a poet and read
 *   Shakespeare aloud to his son. None of the three could be confirmed from a
 *   source reachable while this was written, so this file relies on none of
 *   them. His post as senior English master at Swansea Grammar School, and
 *   the dates of both deaths, were confirmed.
 * - It reads every refrain as a command. In stanzas 2 to 5 each refrain
 *   completes a sentence about one kind of men, and the pronouns they and
 *   their in stanzas 2 to 4 make those refrains statements. Stanza 5 has no
 *   pronoun and can be read either way. This file argues that reading and
 *   says it is one.
 * - Its exam tips tell students to use biography for the context objective in
 *   this poem's answer. The June 2024 mark scheme's grid for Section B credits
 *   language, form and structure and comparison only; context is assessed in
 *   Section C. The number it gives that objective is also the one 4ET1 uses
 *   for comparison.
 * - Its card on line 11 says the wild men's revelry was hastening the sun.
 *   The line says only that they grieved it on its way; hastening is a
 *   reading, stated there as fact.
 * - It names assessment objectives by number throughout, which the house rule
 *   now forbids, and it quotes a far larger share of the poem than this
 *   file's limit allowed at the time.
 *
 * RIGHTS. Dylan Thomas died on 9 November 1953, so the poem has been in the
 * UK public domain since 1 January 2024. Until 26 September 2026 this guide
 * was treated as copyrighted because the poem is still in copyright in the
 * USA; the site works to UK law only (the founder's decision that day). The
 * anthology still prints its permission line, which covers the edition, not a
 * UK copyright in the words.
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
      'Dylan Thomas, first published in the journal Botteghe Oscure in 1951. Out of copyright in the UK since 1 January 2024. Line numbers follow the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026).',
  },
  workLength: {
    words: 168,
    lines: 19,
    basis:
      'Counted on 25 September 2026 from page 69 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), in Pearson’s own PDF: 19 lines, five tercets and a quatrain, title and author line excluded. 168 words by the validator’s word count; the poem has no hyphenated words, so splitting on spaces gives the same figure.',
  },

  native: {
    overview: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
    context: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
    themes: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
    characters: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
    keyQuotes: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
    languageAnalysis: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
    structureForm: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
  },

  extracts: [
    {
      title: 'The command, the thesis and the wise men',
      where: 'Stanzas 1-2, lines 1-6',
      pointer:
        'From the first line of the poem to the first return of the opening refrain at line 6: the first two tercets on anthology page 69.',
      summary:
        'The speaker opens with both refrains, telling a listener who is not yet named not to go quietly into death and to rage against it, and between them states the argument: old age should burn with energy and fury at the end of its day. The second stanza offers the first piece of evidence. Wise men know that death is right, yet because their words never struck with the force they hoped for, they refuse to go quietly too. Line 5 ends on its subject with no punctuation, so the refrain at line 6 becomes the wise men’s own verb.',
      annotations: [
        {
          phrase: 'good night',
          note: 'The word before this phrase, that, points at death as something visible and approaching, over there rather than here. Calling it good concedes before the argument has begun that dying may be natural and even kind, and good night is also what people say at bedtime. So the speaker is asking his listener to refuse something he admits is good, and that concession is what turns the refusal into love rather than ignorance.',
        },
        {
          phrase: 'Rage, rage',
          note: 'The only place the poem repeats a word back to back. The line opens with two stressed syllables where the pentameter expects an unstressed one first, so the rhythm lurches forward like a shout, and the comma between them is the breath between two shouts. The verb is rage, not fight or win: the speaker never pretends death can be beaten, only that it must be met with fury.',
        },
        {
          phrase: 'dark is right',
          note: 'The wise men’s knowledge is set down in three blunt monosyllables, and it is the poem’s most honest concession: death is not wrong or unnatural. Right is also a rhyme word, chiming with night and light, so the rhyme scheme binds acceptance to the very thing being refused. The stanza’s argument is that knowing something is right does not oblige anyone to welcome it.',
        },
        {
          phrase: 'forked no lightning',
          note: 'A metaphor for words that failed to strike. Lightning forks as it splits across the sky, so the wise men wanted their words to illuminate and shock, and the negative admits they never did. For a poet the fear is pointed: a lifetime of language that changed nothing. Because line 5 then ends on they, the next line completes the sentence, and the refrain describes what the wise men do.',
        },
      ],
      question:
        'How does Thomas use the first two stanzas to set out the argument of the poem? Refer closely to language, form and structure.',
    },
    {
      title: 'Good men, wild men, grave men',
      where: 'Stanzas 3-5, lines 7-15',
      pointer:
        'From the good men at the start of line 7 to the second refrain closing stanza 5 at line 15: anthology page 69.',
      summary:
        'Three more kinds of men follow the wise, one to a stanza, and each discovers at the end of life something that makes it refuse to go quietly: a regret or, for the grave men, a last possibility. The good men, as the last wave passes them, cry out that their small acts might have shone. The wild men, who celebrated the sun as it crossed the sky, realise too late that they were mourning it as it went. The grave men, close to death, see with a dazzling clarity that eyes without sight could still blaze with joy. Each stanza is a single sentence about its group, completed by the refrain.',
      annotations: [
        {
          phrase: 'frail deeds',
          note: 'The good men’s verdict on their own lives is modest to the point of pain: their deeds were fragile and easily broken. The rest of line 8 imagines those deeds dancing, and green there is the poem’s only colour word. Bay can mean a stretch of sea curved round by the shore or the laurel whose leaves crowned victors, so goodness is pictured either as joy or as honour that never had room to show itself.',
        },
        {
          phrase: 'too late',
          note: 'Commas on either side of this phrase in line 11 make the reader stop on it, as the wild men are stopped by their discovery. They learn in the present tense what they did in the past: that their delight in the passing sun was also grief for it. The phrase names the regret running through all four middle stanzas, knowledge that arrives only when it can no longer be used.',
        },
        {
          phrase: 'Grave men',
          note: 'A pun on two unrelated words. The adjective grave, from Latin, means serious and solemn; the noun grave, from Old English, is a burial place. These men are both, and the words that follow in line 13 confirm the second sense by placing them close to death, the only time the poem uses that word. Their stanza is the last before the father is addressed.',
        },
        {
          phrase: 'blinding sight',
          note: 'An oxymoron: sight so intense that it blinds. At the edge of death the grave men see so clearly that the clarity dazzles, and what they see, in line 14, is that eyes which have lost their sight could still blaze. A meteor burns brightest in the moment it is destroyed, so the simile there makes a last burst of life the most brilliant thing a dying person can do.',
        },
      ],
      question:
        'How does Thomas present regret in stanzas 3 to 5, and how does it support the poem’s argument about death?',
    },
    {
      title: 'The turn to the father',
      where: 'Stanza 6, lines 16-19',
      pointer:
        'The closing quatrain, lines 16 to 19: the last four lines on anthology page 69, from the direct address to the father to the final refrain.',
      summary:
        'For the first time the speaker names his listener: his father, placed on a high and sorrowful place. He asks the father to curse him and to bless him with fierce tears, and the commands of the first stanza give way to a prayer. Then the two refrains, which have taken turns to close the stanzas, stand side by side for the first and only time, as a closing couplet.',
      annotations: [
        {
          phrase: 'sad height',
          note: 'The father is set above the speaker, which can suggest a man at the summit of his life, a deathbed seen from below, or a place of suffering. The adjective is the plainest emotional word in the poem: after four stanzas of lightning, sun and meteors, grief is simply named, and the effect is of a voice dropping to speak directly.',
        },
        {
          phrase: 'Curse, bless',
          note: 'Two opposite verbs joined only by a comma, and the next comma makes me the object of both. The speaker does not mind which he receives, anger or blessing, so long as the father feels something strongly. One reading is that this is selfless, asking the father to prove he is still alive; another is that the speaker needs a last response for his own sake. The line holds both.',
        },
        {
          phrase: 'fierce tears',
          note: 'An oxymoron that fuses the two feelings the poem has kept apart, rage and grief. Tears usually signal surrender, and fierce refuses that meaning, so even weeping becomes a form of resistance. The line ends with the speaker saying that he prays, and the move from command to prayer admits that nothing he says can hold death back.',
        },
      ],
      question:
        'How does Thomas use the final stanza to bring the poem to its climax? Consider how it changes what has come before.',
    },
  ],

  vocabulary: [
    {
      term: 'Villanelle',
      definition:
        'A fixed form of nineteen lines: five tercets and a closing quatrain, on only two rhyme sounds, with the first and third lines returning as refrains. The name comes from the Italian villanella, a rustic song, and the fixed form is traced to a villanelle by Jean Passerat published in 1606. Thomas’s poem is perhaps the best known of all villanelles.',
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
        'A line of ten syllables in five pairs, each an unstressed syllable followed by a stressed one. Most lines here keep close to it, which is why the moments that break it stand out.',
    },
    {
      term: 'Spondee',
      definition:
        'Two stressed syllables side by side. The doubled verb at the start of lines 3, 9, 15 and 19 opens with one, so those lines begin like a shout against the steady beat.',
    },
    {
      term: 'Imperative',
      definition:
        'The form of a verb that gives a command. In stanzas 1 and 6 the refrains are imperatives aimed at the listener, and line 17 adds two more. In stanzas 2 to 4 the pronouns they and their suggest that the same refrain words have become statements about what the men do; in stanza 5, which has no pronoun, the refrain can be read as either.',
    },
    {
      term: 'Enjambment',
      definition:
        'A sentence running on past the end of a line without a pause. Line 5 ends on its subject, they, with no punctuation, so the sentence must run into the refrain at line 6 to find its verb.',
    },
    {
      term: 'Apostrophe',
      definition:
        'Speaking directly to someone who is absent or cannot reply. The father is addressed in line 16 but never answers, and once he is named the whole poem can be reread as spoken to him.',
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
        'A poem of mourning for someone who has died. Strictly this poem is not one: it was first published in 1951, and D. J. Thomas died just before Christmas 1952. The poem itself speaks to him in the present tense and asks him to act now: it pleads with a man who is still alive, so it is better described as a plea, or an elegy written in anticipation.',
    },
    {
      term: 'Rave (line 2)',
      definition:
        'To speak or behave wildly, as someone delirious or furious does. It is not the modern sense of a dance party: the speaker wants old age to lose its composure rather than keep it.',
    },
    {
      term: 'Gay (line 14)',
      definition:
        'Here in its older sense: joyful, lively and bright. The grave men see that even eyes without sight could have been full of light and happiness.',
    },
    {
      term: 'Meteor (line 14)',
      definition:
        'A fast-moving streak of light in the night sky, made when matter from space enters the Earth’s atmosphere and burns up. It is brief and brilliant and brightest as it is destroyed, which is why the simile suits a life ending in a blaze.',
    },
    {
      term: 'Bay (line 8)',
      definition:
        'Two words share the spelling. One is a stretch of sea held by a curving shore; the other is the laurel tree, whose leaves were woven into garlands for victors, and so came to mean fame. Both senses fit the good men, who imagine their deeds dancing in light or winning honour.',
    },
    {
      term: 'Forked (line 5)',
      definition: 'Split into branches, as lightning divides when it strikes across the sky.',
    },
    {
      term: 'Botteghe Oscure',
      definition:
        'The literary journal, published in Rome from 1948 to 1960 and edited by Marguerite Caetani, in which the poem first appeared in 1951.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Compare how the poets present attitudes to death in Do not go gentle into that good night and Remember.',
        skill:
          'Comparative essay on two named anthology poems: language, form and structure, with a personal response',
        guidance: [
          'Open with a comparative overview that takes a position. Both poems are spoken across a deathbed, but from opposite sides: Rossetti’s speaker imagines her own death and moves towards letting go, while Thomas’s speaker faces his father’s death and refuses to let go at all.',
          'Compare how each names death. Thomas uses nightfall and the end of the day, and the word death only once, in line 13. Rossetti never uses the word, speaking instead of going away into silence and darkness. Ask what each poet gains by not naming it directly.',
          'Compare the concessions. Thomas admits in line 4 that “dark is right” and still demands rage; Rossetti begins by asking to be remembered and then gives up even that, if remembering would make her beloved sad. Each speaker gives ground on one thing in order to hold firm on another.',
          'Compare form as meaning. Rossetti’s sonnet turns at line 9, and the turn lets her speaker change her mind; Thomas’s villanelle keeps bringing its refrains back, so his speaker cannot be moved. Link each form to the attitude it carries.',
          'Compare voice and address. Rossetti speaks to her beloved from the first line; Thomas holds back his real listener until line 16, then turns from argument to prayer.',
          'Conclude with a judgement: which poem you find more consoling, which more honest, and whether acceptance or defiance is presented as the greater form of love.',
        ],
      },
      {
        question:
          'Compare how the poets present advice from one generation to another in Do not go gentle into that good night and If-.',
        skill: 'Comparative essay on two named anthology poems',
        guidance: [
          'Start from the reversal. If- is a father’s advice to his son; Thomas’s poem is a child’s instruction to a dying father. Consider what it means for the younger generation to tell the older how to behave.',
          'Compare the delayed relationship. Kipling names the son only in his last line, and Thomas names the father only at line 16. In both, general wisdom becomes personal at the end; explore why each poet holds the relationship back.',
          'Compare what is advised. Kipling praises composure, keeping calm while others panic and treating triumph and disaster alike. Thomas demands the opposite: that old age rave and rage. Decide whether the two poems disagree about how to live or simply speak to different moments of a life.',
          'Compare grammar. If- is one long sentence built from conditional clauses, deferring its conclusion; Thomas uses imperatives in stanzas 1 and 6 and, in between, mostly turns the same refrain words into statements about what other men do.',
          'Compare form. Kipling’s regular rhymed stanzas suit calm instruction; Thomas’s villanelle, with only two rhyme sounds, circles like an insistent voice that will not be refused.',
          'End with a judgement about whose advice is more loving, and whether Thomas’s advice is finally for his father or for himself.',
        ],
      },
      {
        question:
          'Compare the ways in which the poets use form and structure to present powerful feelings in Do not go gentle into that good night and Piano.',
        skill:
          'Comparative essay on two named anthology poems, weighted towards form and structure',
        guidance: [
          'Open with the shared situation: two speakers overwhelmed by feeling for a parent. Lawrence gives way to the feeling by the end, weeping like a child for the past; Thomas refuses to give way to death, and pours his feeling into repetition.',
          'Compare the forms. Piano is three quatrains of rhymed couplets with long, flowing lines; Do not go gentle is a nineteen-line villanelle on two rhyme sounds. Consider which form lets feeling flood and which holds it under pressure.',
          'Compare the direction of time. Piano moves backwards, as a woman singing in the dusk carries the adult speaker back to sitting beneath the piano at his mother’s feet. Thomas’s poem stays in the present of the deathbed, circling rather than travelling.',
          'Compare the turns. Lawrence’s last stanza sets the singer’s loud performance against the memory that has already overwhelmed him; Thomas’s last stanza turns from four kinds of men to one father.',
          'Compare endings. Lawrence ends in surrender to grief; Thomas ends with both refrains together, still commanding. Ask which ending you find more moving, and why.',
          'Keep every paragraph comparative, and tie each point about form to the feeling it expresses rather than naming features for their own sake.',
        ],
      },
      {
        question:
          'Compare how the poets present a relationship between a parent and a child in Do not go gentle into that good night and one other poem from the anthology.',
        skill: 'Comparative essay with a second poem of your own choice from Part 3',
        guidance: [
          'Choose a partner that gives a real contrast. If- reverses the direction of advice; Piano looks back at a mother from adulthood; Poem at Thirty-Nine has a speaker who misses her dead father and finds him in the woman she has become.',
          'Establish Thomas’s relationship: a speaker who withholds his father until line 16, then asks for any strong feeling at all, anger or blessing. Argue what this suggests about how love was expressed between them.',
          'Compare timing. Thomas writes to a father who is still alive; Walker writes after her father’s death, and Lawrence long after the childhood he mourns. Consider how that changes the tone, from urgent plea to reflective memory.',
          'Compare voice and form: Thomas’s strict villanelle against Walker’s short free-verse lines or Lawrence’s rhymed couplets, and what each suggests about control over grief.',
          'Conclude on what each poem suggests a child owes a parent, or a parent a child.',
        ],
      },
    ],
    tips: [
      'Track the grammar of the refrains. In stanzas 1 and 6 they are commands to the listener. In stanzas 2 to 5 each refrain completes a sentence about the wise, good, wild or grave men, and the pronouns they and their in stanzas 2 to 4 suggest those men are being described rather than addressed, so the same words now state what they do. Stanza 5 has no such pronoun, so its refrain can be heard either way. Argue for the move from command to statement and back again as a reading, and explain what it does: the men in the middle are the evidence that it can be done.',
      'You will have the poem in front of you: the anthology says a Poetry Booklet containing all the Part 3 poems is provided with the question paper. Credit comes from choosing precise words and analysing them, so quote two or three words at a time and give the line number.',
      'Do not call it an elegy for a dead father. It was first published in 1951 and D. J. Thomas died just before Christmas 1952, so the poem pleads with a living man. That is what gives it its urgency.',
      'Keep the four kinds of men moving as an argument, not a list. Each stanza adds evidence to the case made in stanza 1, and each ends in a regret. Say what the four have in common, then show how the case collapses into something personal at line 16.',
      'Be precise about the speaker. The poem itself establishes only that the speaker is the father’s child. This guide, like most readers, calls the speaker he, because the poem is usually read as Thomas speaking to his own father; that is a biographical reading, a reasonable one, and in an essay you should say that it is one.',
      'Choose your partner poem for contrast. In Pearson’s mark scheme for the June 2024 Paper 1R, the question on giving advice in If- and one other poem lists this poem among the suitable choices. Remember makes a strong pairing on death, and Piano and Poem at Thirty-Nine on a parent.',
      'Compare throughout. Pearson’s mark scheme for this section rewards points clearly based on comparison, asks for evidence of a personal response, and warns that summarising the poems or simply listing devices is not enough. It also holds an answer that discusses only one poem to the lower levels, however good that discussion is.',
      'Keep context to a sentence. In Pearson’s mark scheme for the June 2024 Paper 1R, the grid for this section rewards two things, analysis of language, form and structure and the links you draw between the two poems; context is credited in the modern prose section of the paper, not in this one. So a fact earns its place only when it helps you read a line. D. J. Thomas was senior English master at Swansea Grammar School; the poem appeared in the Rome journal Botteghe Oscure in 1951; Thomas himself died in New York in November 1953, aged 39.',
    ],
  },

  modelAnswer: {
    question:
      'Compare how the poets present attitudes to death in Do not go gentle into that good night and Remember.',
    paragraph:
      'Both poems are spoken across a deathbed, but from opposite sides of it, and that difference shapes their attitudes to death. Rossetti’s speaker imagines her own death and moves towards acceptance: the octave asks her beloved to remember her, but after the turn at line 9 she decides she would rather he forgot her and was happy than remembered her and grieved. Thomas’s speaker is the one who will be left behind, and he refuses acceptance altogether. What makes his refusal so forceful is that he grants Rossetti’s case before rejecting it. His wise men know that “dark is right”, and the refrain itself calls death a “good night”, at once a nightfall, an ordinary farewell and a gentle euphemism. Thomas admits that death is natural, even kind, and then answers with the doubled imperative “Rage, rage”, whose two heavy stresses break the iambic beat as if the line itself were struggling. The forms carry the same contrast. Rossetti’s sonnet can turn, and its turn lets her speaker change her mind; Thomas’s villanelle cannot change its mind, because its refrains must return, so the poem enacts a speaker who will not be talked out of his fury. Even his last request, that his father “Curse, bless” him, shows that any feeling will do as long as it is strong. Rossetti finds peace in letting go of the living; Thomas finds love in refusing to let the dying go.',
    commentary: [
      'It opens with a comparative idea, the two sides of a deathbed, rather than a summary of either poem, so the whole paragraph has a single line of argument.',
      'It makes a subtle point about Thomas rather than an obvious one: he concedes that death is right before refusing it, which explains why the refusal moves the reader.',
      'Every quotation is two or three words long, embedded in the sentence and analysed, including the three meanings held in the refrain’s description of death.',
      'It treats form as meaning, setting the sonnet’s turn against the villanelle’s returning refrains, so the comparison of structure explains the comparison of attitude.',
      'It keeps both poems in play throughout instead of writing about one and then the other, and ends on a balanced judgement that is a personal response rather than a restatement.',
    ],
  },

  timeline: [
    {
      where: 'Stanza 1, lines 1-3',
      title: 'The command',
      summary:
        'The speaker opens with both refrains, telling a listener not yet named not to go quietly into death but to rage against it. Between them sits the thesis: old age should burn with energy at the end of its day.',
      setting: 'Nightfall, as a figure for the end of a life',
      who: ['The speaker'],
      quote: 'Rage, rage',
      themes: ['Defiance in the Face of Death', 'Light and Darkness, Vitality and Decay'],
      tension: 3,
      significance:
        'The whole argument is stated before any evidence is given, and both refrains are set up to return.',
    },
    {
      where: 'Stanza 2, lines 4-6',
      title: 'The wise men',
      summary:
        'Wise men know at the end that death is right, yet because their words never struck with the force they wanted, they refuse to go quietly. The sentence runs over line 5, so the refrain becomes their verb.',
      setting: 'The last days of thinkers and writers',
      who: ['The speaker', 'Wise men'],
      quote: 'forked no lightning',
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
      quote: 'frail deeds',
      themes: ['Regret and the Unfinished Life', 'Light and Darkness, Vitality and Decay'],
      tension: 3,
      significance: 'Goodness, like wisdom, is not enough to make a life feel finished.',
    },
    {
      where: 'Stanza 4, lines 10-12',
      title: 'The wild men',
      summary:
        'Wild men, who lived without restraint and celebrated the sun as it crossed the sky, realise too late that they were mourning its passing all along. They do not go quietly either.',
      setting: 'Beneath a sun moving across the sky',
      who: ['The speaker', 'Wild men'],
      quote: 'too late',
      themes: ['Regret and the Unfinished Life', 'Light and Darkness, Vitality and Decay'],
      tension: 3,
      significance:
        'Even a life lived at full intensity ends in regret, so no way of living escapes the argument.',
    },
    {
      where: 'Stanza 5, lines 13-15',
      title: 'The grave men',
      summary:
        'Grave men, close to death, see with a dazzling clarity that even eyes without sight could still blaze with joy, like meteors. They too rage against the coming dark.',
      setting: 'The edge of the grave',
      who: ['The speaker', 'Grave men'],
      quote: 'blinding sight',
      themes: ['Light and Darkness, Vitality and Decay', 'Regret and the Unfinished Life'],
      tension: 4,
      significance:
        'The last of the four is the closest to death, which brings the argument to the father’s own situation.',
    },
    {
      where: 'Stanza 6, lines 16-19',
      title: 'My father',
      summary:
        'The speaker turns at last to his father, on a high and sorrowful place, and asks him to curse or bless him with fierce tears. Commands become a prayer, and the two refrains close the poem together.',
      setting: 'The father’s last days, seen from below',
      who: ['The speaker', 'The father'],
      quote: 'fierce tears',
      themes: ['Father, Son and Grief', 'Defiance in the Face of Death'],
      tension: 5,
      significance:
        'The general argument becomes a personal plea, and the refrains that alternated through the poem stand side by side for the only time.',
    },
  ],

  relationships: [
    {
      from: 'The speaker',
      to: 'The father',
      kind: 'child and dying father',
      note: 'The father is not addressed by name until line 16 and never replies. All the speaker asks of him is strong feeling, anger or blessing, which suggests a bond in which intensity was the proof of love. The poem is usually read as Dylan Thomas speaking to his own father, D. J. Thomas, but the poem itself says only that the listener is the speaker’s father.',
    },
  ],

  compareWith: [
    {
      title: 'Remember (Christina Rossetti)',
      href: '/igcse/edexcel/poetry/remember',
      reason:
        'Rossetti’s speaker imagines her own death and moves towards letting go, even of being remembered, while Thomas’s speaker faces his father’s death and refuses to let go at all.',
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
      title: 'Sonnet 116 (William Shakespeare)',
      href: '/igcse/edexcel/poetry/sonnet-116',
      reason:
        'Both use a strict traditional form to argue against time and death: Shakespeare that true love outlasts Time and his sickle, Thomas that life must be fought for to its final moment.',
    },
  ],

  // A dying parent and a child's grief, handled without physical detail.
  contentGuidance: ['mortality'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 3, page 69: the poem as prescribed. Every quotation and line number checked against this page, and the five tercets and quatrain measured from the line positions in the PDF; the anthology prints line numbers 5, 10 and 15. Page 73, acknowledgements: published in The Poems of Dylan Thomas and The Collected Poems of Dylan Thomas: The New Centenary Edition (Orion, 2014), copyright Dylan Thomas 1952 and The Trustees for the copyright of Dylan Thomas, reproduced by permission of David Higham Associates Limited and New Directions Publishing Corp. The introduction: Part 3 poems are studied for English Literature Unit 1 Section B, students compare two poems with a choice of two questions, and a Poetry Booklet of all Part 3 poems is provided with the paper. The copy read had SHA-256 ec2bdca4...a9f3, identical to the file qualifications.pearson.com served on 25 September 2026.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Academy of American Poets (poets.org), Do not go gentle into that good night: an independent full text. It agrees with the anthology on every phrase quoted in this guide, on line 5 ending without punctuation, and on the punctuation of lines 6 and 17; its markup, re-read on 26 September 2026, sets the 19 lines as five tercets and a quatrain. It gives its source as The Poems of Dylan Thomas (New Directions).',
      url: 'https://poets.org/poem/do-not-go-gentle-good-night',
    },
    {
      label:
        'Wikipedia, Do not go gentle into that good night: first published in Botteghe Oscure in 1951; collected in In Country Sleep, and Other Poems (New Directions, 1952) and Collected Poems 1934-1952 (Dent, 1952); the villanelle’s refrain pattern. It also says the poem was written in Florence in 1947; that single-source claim is not used here, and this guide states no date of composition.',
      url: 'https://en.wikipedia.org/wiki/Do_not_go_gentle_into_that_good_night',
    },
    {
      label:
        'Wikipedia, Botteghe Oscure: a literary journal published in Rome from 1948 to 1960, founded and edited by Marguerite Caetani, which published the poem in 1951.',
      url: 'https://en.wikipedia.org/wiki/Botteghe_Oscure',
    },
    {
      label:
        'Wikipedia, Dylan Thomas: born 27 October 1914 in Swansea; his father David John Thomas (1876-1952) taught English literature at the local grammar school and died of pneumonia just before Christmas 1952; Collected Poems 1934-1952 published by Dent on 10 November 1952; Thomas died in New York on 9 November 1953, aged 39. It gives no account of the father’s eyesight.',
      url: 'https://en.wikipedia.org/wiki/Dylan_Thomas',
    },
    {
      label:
        'Wikipedia, Bishop Gore School: D. J. Thomas was senior English master at the school, then known as Swansea Grammar School.',
      url: 'https://en.wikipedia.org/wiki/Bishop_Gore_School',
    },
    {
      label:
        'Academy of American Poets, Dylan Thomas biography: born 27 October 1914 in Swansea; the poem included in In Country Sleep, and Other Poems (1952); died 9 November 1953 at St Vincent’s Hospital, New York.',
      url: 'https://poets.org/poet/dylan-thomas',
    },
    {
      label:
        'Pearson Edexcel, Mark Scheme (Results), June 2024, International GCSE English Literature (4ET1) Paper 1R, Section B, read on 26 September 2026: question 2 names two poems (Piano and Remember), question 3 names If- and lets the candidate choose the other, and for question 3, on giving advice, lists Do not go gentle among suitable choices. Examiners reward points clearly based on comparison, require a degree of personal response, say summary, paraphrase or a list of devices is not enough, and hold an answer that considers only one poem to the top of Level 2. The Section B grid assesses language, form and structure and links between texts only; the text-and-context descriptor appears only in Section C, Modern Prose.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01r-rms-20240822.pdf',
    },
    {
      label:
        'Poetry for Students (Gale), Do Not Go Gentle into That Good Night, via Encyclopedia.com: dates D. J. Thomas’s death to 16 December 1952, consistent with Wikipedia’s just before Christmas 1952. It also says the poem was probably composed in 1945 and was not published until after the father’s death, which contradicts the 1951 Botteghe Oscure publication recorded by Wikipedia (twice) and The Marginalian, and the book publications of 1952. Neither claim is used here, and this guide states no date of composition. It reads the poem’s mentions of blindness as references to the father; no primary biographical source for the father’s eyesight could be reached, so this guide does not state it.',
      url: 'https://www.encyclopedia.com/arts/educational-magazines/do-not-go-gentle-good-night',
    },
    {
      label:
        'The Marginalian, The Story Behind Dylan Thomas’s Do Not Go Gentle Into That Good Night (17 January 2024): first published in Botteghe Oscure in 1951 and soon included in In Country Sleep, And Other Poems (1952). A second source for the 1951 publication.',
      url: 'https://www.themarginalian.org/2024/01/17/dylan-thomas-do-not-go-gentle-into-that-good-night/',
    },
    {
      label:
        'The same anthology, pages 51, 57, 59, 62 and 70: If-, Piano, Sonnet 116, Poem at Thirty-Nine and Remember, read for every fact this guide states about the comparison poems (none of them is quoted here).',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Wikipedia, Villanelle: from the Italian villanella, a rustic song; Jean Passerat’s villanelle, published in 1606, became the model for the fixed form; the article calls Thomas’s poem perhaps the most renowned villanelle.',
      url: 'https://en.wikipedia.org/wiki/Villanelle',
    },
    {
      label:
        'Wiktionary, gay (dated sense: happy, joyful and lively; bright), rave (to talk or act wildly, as in delirium or fury), grave (the noun from Old English, the adjective from Latin gravis), meteor (a streak of light caused by matter entering the atmosphere) and bay (a body of water held by a concave shore; the laurel, whose leaves were woven into a garland for a victor, hence fame).',
      url: 'https://en.wiktionary.org/wiki/rave',
    },
  ],
}
