import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Hide and Seek, Vernon Scannell (Walking Wounded, 1965). A supplement: the page
 * at /resources/revision-notes/hide-and-seek keeps its overview, context, themes,
 * voice, key quotations, language and form sections, and this file adds the four
 * it lacked (key passages, vocabulary, exam questions with guidance, and a model
 * answer), with the scene cards and the map of the poem's three presences.
 *
 * SELF-AUDIT of the page above, 26 September 2026, against the guide rubric:
 * - overview: two developed paragraphs and a summary list. Substantive.
 * - context: three developed entries (Scannell's life, the hider who hid, the
 *   childhood poem). Substantive. Its biography was checked against the sources
 *   below and is broadly right: two desertions (after a battle in Tunisia, and
 *   after VE Day), military prison in Egypt, wounded near Caen, about two years
 *   on the run, professional boxing bouts.
 * - themes: four themes of about 80 words each. Substantive.
 * - characters: for a single-voice poem its Voice and Speaker section weighs
 *   three readings of the voice and the reader's position. Substantive.
 * - keyQuotes: nine quotations with developed analysis. All nine were checked
 *   word for word against the anthology and the November 2023 exam booklet and
 *   are correct. Substantive.
 * - languageAnalysis: four named techniques with examples. Substantive.
 * - structureForm: four developed points. Substantive, but see the rhyme below.
 * - extracts: none. Written here.
 * - vocabulary: none. Written here.
 * - examPractice: five tips and no questions. Written here.
 * - modelAnswer: none. Written here.
 *
 * WORDING. Every quotation was checked against page 58 of the Pearson Edexcel
 * International GCSE English Anthology, Issue 8 (February 2026), Part 3, in
 * Pearson's PDF (a copy held in a scratch folder, whose Issue 8 footer and size,
 * 781,803 bytes, match the file qualifications.pearson.com served on 26 September
 * 2026), and against the Poetry Booklet issued with the 4ET1/01 question paper
 * of 6 November 2023, which prints the same 27 lines word for word with the same
 * line numbers.
 * The anthology prints the poem as one unbroken stanza with a number beside every
 * fifth line; line references here follow it.
 *
 * THE QUOTATION BUDGET. The poem is 233 words, so the site's 15 per cent share
 * (fair-dealing.ts) allows 34 distinct words on this page. This file uses 33, in
 * twelve short phrases, and reuses them rather than adding more. Single words of
 * the poem named in analysis (gone, sought, dumb) are mentioned, not quoted. Nine
 * of the twelve phrases already appear on the page above, so the combined page
 * gains five words (scuffle, caught, must be thinking). The page above on its own quotes about 60 distinct words, a
 * quarter of the poem, which is over the site's share before this file adds
 * anything; that is recorded here for the next editor, not changed. Those page
 * figures are history: on 26 September 2026, after this was written, the page was
 * cut to phrases this file also quotes (see its own comment), and
 * no-poem-quoted-beyond-fair-dealing.test.ts measures the page and this file
 * together as one route.
 *
 * THE PAGE ABOVE was wrong, or went beyond the text, in these places when this
 * file was written. Until 10 October 2026 this paragraph described them all as
 * current; each now says where it stands.
 * - It says the poem is set for English Language A and Literature. It is in Part
 *   3 of the anthology, which only English Literature (4ET1) studies. Corrected
 *   on the page on 26 September 2026.
 * - It names assessment objectives by number throughout, and its tip labelled
 *   AO3 treats that objective as context. In 4ET1 that number is comparison, and
 *   Paper 1 Section B does not assess context at all (specification: language,
 *   form and structure, and links between texts). Corrected on the page on 26
 *   September 2026.
 * - Its Buried Rhyme card says the rhyme never settles into a reliable scheme.
 *   The anthology text has four full rhyming couplets closing lines 5, 10, 15 and
 *   20 (out/shout, door/before, lane/again, coat/throat), a regular pattern that
 *   breaks after line 20. A tip below gives the pattern. Corrected on the page on
 *   10 October 2026.
 * - Its card on the seekers at the door says the only sounds left are wind, cold
 *   and silence; the poem mentions no wind. Its card on the cold lists numb feet;
 *   the poem says stiff legs. Corrected on the page on 26 September 2026.
 * - It says, as fact, that the child hides with eyes shut. The poem does not say
 *   so; the blindness of line 11 may equally be the dark of the shed. Corrected on
 *   the page on 26 September 2026.
 * - It calls the child a boy throughout, as Pearson's own Getting Started Guide
 *   does. The poem never says. This file says the child. Corrected on the page on
 *   10 October 2026, where a note keeps he for ease of reading.
 * - Its metadata describes it as a GCSE page; the poem is on International GCSE
 *   only. Corrected in the route's layout on 26 September 2026.
 * The set-text registry row gave the year as 1984 and the rights holder as Robson
 * Books; both were corrected on 26 September 2026. The sources below place the
 * poem in Walking Wounded (1965), and the anthology credits Collected Poems
 * 1950-1993 (Faber & Faber, 2011), by permission of the Estate of Vernon Scannell.
 *
 * FACT-CHECK, 26 September 2026, against a fresh download of the anthology and
 * the November 2023 booklet. Every quotation was confirmed; these were fixed:
 * - Two annotations and a scene card said the seekers at the door (lines 9 to 10)
 *   were as close as they ever came, but line 12 has them moving closer still.
 *   One also said the door stays shut, which the poem never says.
 * - The summaries had the child shout and then hide; the call of line 1 comes
 *   from a child already hidden. One also sat the child on the floor, and the
 *   toolshed entry put it near a house; the poem gives neither detail.
 * - Line 12 has the seekers moving closer and someone stumbling, not someone
 *   coming closer.
 * - The garden was called cold in the La Belle Dame comparisons; the cold in the
 *   poem is in the shed (lines 6 and 19), and the garden is dark and still.
 * - Readings stated as fact were hedged (the sand smell coming from the sacks,
 *   the hush as a sign, the game as lost, Fanthorpe's boy as rescued).
 * - The Wikipedia source said the first desertion came after the North African
 *   campaign; Wikipedia places it near Gabes in Tunisia, during the campaign.
 *
 * EXAM FORMAT, audited 10 October 2026 against the 4ET1 specification (Issue 3,
 * August 2025) and the Paper 1 question papers, mark schemes and examiners'
 * reports from the specimen to June 2025. Section B sets one question from a
 * choice of two, and both are comparisons: one names two Part 3 poems, the other
 * names one and the candidate chooses the second from Part 3. Every paper comes
 * with a separate Poetry Booklet of all the Part 3 poems, 40 minutes are advised,
 * and an answer on one poem cannot rise above Level 2. The three exam questions
 * below already had those shapes and are unchanged. The three extract questions
 * asked about a few lines under the label "The question", so they now say they
 * are close-reading practice. A first tip now says what the section sets, and a
 * tip after the past questions gives the examiners' report on November 2024, when
 * this was the named poem in Question 3. The wording note above, workLength and
 * the sources called the booklet that prints the poem the question booklet; it is
 * the separate Poetry Booklet, and they now say so. Do not tell a student the
 * named poem is printed in the question booklet itself. No mark tariffs: the
 * validator keeps those to ExamPlacementCard.
 *
 * VERIFIED 10 October 2026 against the same documents. The past-questions tip gave
 * only June 2018, when this was the one poem Question 3 named, so it read as if
 * the poem is only ever named alone. Pearson's summary for June 2019 to November
 * 2020 shows Question 2 naming it with Half-past Two (January 2020 R paper) and
 * with War Photographer (November 2020), so the tip now gives all three roles:
 * named alone, named in a pair, chosen as the second poem. Keep both shapes. The
 * line 20 tip said exam booklet and now says Poetry Booklet, and the model
 * answer's commentary credited the question with asking for a personal response;
 * it is the mark scheme that requires one.
 */
export const guide: StudyGuide = {
  slug: 'hide-and-seek',
  title: 'Hide and Seek',
  author: 'Vernon Scannell',
  form: 'poem',
  scope:
    'The whole poem, 27 lines in a single unbroken stanza, as printed on page 58 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3. Set for Pearson Edexcel International GCSE English Literature (4ET1), Paper 1 Section B, where it is compared with another Part 3 poem. Line numbers in this guide follow the anthology, which prints one beside every fifth line.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Vernon Scannell 1965 (collected in Walking Wounded); the rights are now held by the Estate of Vernon Scannell. As printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), which gives its source as Collected Poems 1950-1993 (Faber & Faber, 2011) and reproduces it by permission of the Estate of Vernon Scannell. Quoted here in short phrases for criticism and review.',
  },
  workLength: {
    words: 233,
    lines: 27,
    basis:
      'Counted on 26 September 2026 from page 58 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), in Pearson’s own PDF: 27 numbered lines in one stanza, title and poet’s name excluded. 233 words split on spaces; the poem has no hyphenated words, so the quotation counter’s rule gives the same figure. The Poetry Booklet issued with the 4ET1/01 question paper of 6 November 2023 prints the same 27 lines word for word.',
  },

  native: {
    overview: '/resources/revision-notes/hide-and-seek',
    context: '/resources/revision-notes/hide-and-seek',
    themes: '/resources/revision-notes/hide-and-seek',
    characters: '/resources/revision-notes/hide-and-seek',
    keyQuotes: '/resources/revision-notes/hide-and-seek',
    languageAnalysis: '/resources/revision-notes/hide-and-seek',
    structureForm: '/resources/revision-notes/hide-and-seek',
  },

  extracts: [
    {
      title: 'The call and the hiding place',
      where: 'Lines 1-8',
      pointer:
        'Anthology page 58, lines 1 to 8: from the opening call to the end of line 8, where the voice warns against sneezing when the seekers come in.',
      summary:
        'Already hidden among sacks in a garden toolshed that smell of the seaside, the child shouts that they are ready to be found. The voice is certain nobody will find this place, then turns cautious: keep your feet out of sight, and do not risk calling out again. It notes that the floor is cold, guesses where the seekers are looking and warns that a sneeze would give the hider away.',
      annotations: [
        {
          phrase: 'find me',
          note: 'The first thing the child asks for is to be found. In the game it is a dare, since a good hider wants the seekers to fail; in the poem it becomes a request that nobody answers. Keep it in mind at line 27, where no one is still looking.',
        },
        {
          phrase: 'salty dark',
          note: 'The adjective belongs to taste and smell, the noun to sight, so two senses fuse in one phrase. Carried over from the seaside simile of line 2, it makes the dark cosy and faintly holiday-like. A related smell, of damp sand, returns in line 20, this time moving in the throat, so the pleasant sensation can be read as turning oppressive.',
        },
        {
          phrase: 'prowling',
          note: 'The voice pictures the seekers as animals on the hunt, which makes the hider their prey. That is the thrill of the game: being hunted is exciting for as long as the hunt goes on. The irony is prepared here, because these prowlers will leave without their catch.',
        },
      ],
      question:
        'Close-reading practice, not an exam question (in the exam this poem is always compared with another Part 3 poem). How does Scannell use language and structure in lines 1 to 8 to present the child’s excitement and confidence at the start of the game?',
    },
    {
      title: 'The seekers at the door',
      where: 'Lines 9-17',
      pointer:
        'Anthology page 58, lines 9 to 17: from the seekers’ arrival at the shed door to the voice imagining them growing more puzzled as they search.',
      summary:
        'The seekers reach the door of the shed, quieter than the child has ever heard them. The voice orders complete stillness and silence. The seekers move closer, someone stumbles and mutters, and then their words and laughter blur together and they are gone. The voice tells the child to stay put, predicting that the seekers will try other places and come back, and imagining them baffled by such a clever hider.',
      annotations: [
        {
          phrase: 'whispering at the door',
          note: 'The seekers have arrived, and in line 12 they come closer still, but they are heard and never seen: every sign of them in lines 9 to 13 is a sound reaching a hider in the dark. The whisper can be read as the excitement of a hunt that is nearly over, or as the seekers conferring about whether to carry on.',
        },
        {
          phrase: 'Hide in your blindness',
          note: 'Line 11 packs four sentences into one line, and the full stops fall like held breaths. The last order is the strangest. In the shed the child really cannot see, but the phrase also names what the ending exposes: the hider has no idea what is happening outside, and makes that not-knowing into a hiding place.',
        },
        {
          phrase: 'scuffle',
          note: 'The seekers leave as one blurred sound. Scuffle can mean a brief tussle or a shuffling walk, and both senses fit, as words and laughter jostle and feet move off. The laughter is never explained. The same line ends with the word gone, which returns in line 26 for the sun.',
        },
        {
          phrase: 'must be thinking',
          note: 'A modal verb of deduction turns a guess into a certainty. With probably in line 6 and the predictions of lines 14 to 15, it shows how much of the middle of the poem is the voice imagining other people’s minds. None of these guesses is ever confirmed, and the ending suggests they were all wrong.',
        },
      ],
      question:
        'Close-reading practice, not an exam question (in the exam this poem is always compared with another Part 3 poem). Explore how Scannell presents the seekers in lines 9 to 17, even though the child never sees them.',
    },
    {
      title: 'Coming out',
      where: 'Lines 21-27',
      pointer:
        'Anthology page 58, lines 21 to 27: from the decision that it is time to claim the win to the question that ends the poem.',
      summary:
        'Sure of victory, the child throws off the sacks, stretches and walks out of the shed, shouting that they have won and telling the seekers to admit they have been caught. Nobody answers. The garden is growing dark and completely still, and the sun has set. The last line confirms that the child is there, then asks where the seekers have gone.',
      annotations: [
        {
          phrase: 'you’re the winner',
          note: 'The verdict comes from inside the shed, not from any sign outside: nothing in lines 18 to 20 suggests the seekers are near. Cold, stiffness and a long silence have been read as proof of skill rather than as warnings. A reader who noticed in line 18 that the seekers went away hears the dramatic irony the child cannot.',
        },
        {
          phrase: 'caught you',
          note: 'The hider uses the seeker’s word. Catching is what seekers do, so at the moment of triumph the child claims both roles and demands that the others own up to losing. The phrase also rhymes with the last two words of the poem, three lines later, so the boast and the question are bound together by sound.',
        },
        {
          phrase: 'The darkening garden watches',
          note: 'After the exclamations of lines 22 to 24 comes a short statement and a full stop in mid-line. The present participle darkening shows that time is still running on. The attention the child wanted from the seekers is given only by the garden, and a watcher that says nothing is cold company.',
        },
        {
          phrase: 'hold their breath',
          note: 'The bushes do what the child was told to do in line 11. The tactic the child trusted to win the game has passed to the setting, as though the garden were now hiding from the child, and the hider has become a seeker with nothing left to find.',
        },
        {
          phrase: 'they who sought you',
          note: 'The verb of the title returns in the past tense: the seeking is over. The phrasing is stiff and old-fashioned after lines full of chatty contractions, which lifts the question out of the game. It is the only question mark in the poem, and no one answers it.',
        },
      ],
      question:
        'Close-reading practice, not an exam question (in the exam this poem is always compared with another Part 3 poem). How does Scannell use language, form and structure in lines 21 to 27 to present the change from triumph to isolation?',
    },
  ],

  vocabulary: [
    {
      term: 'Toolshed',
      definition:
        'An outdoor shed for keeping garden tools and equipment. It is the hiding place, somewhere in the garden and out of sight: a small, dark, adult space the child has borrowed for a game, and the place the poem is spoken from until the child walks out in line 23.',
    },
    {
      term: 'Sack',
      definition:
        'A large bag of strong, coarse cloth used to store things such as potatoes or coal. The child hides under the sacks, which is why the voice says to push them off in line 22. They smell of the seaside (line 2), and the damp smell of sand in line 20 may well come from them too.',
    },
    {
      term: 'Prowling (line 8)',
      definition:
        'Moving about quietly and secretly, as an animal does when it hunts. The word casts the seekers as hunters and the hider as their prey.',
    },
    {
      term: 'Hushed (line 10)',
      definition:
        'Very quiet, spoken in soft, lowered voices. The seekers have never sounded so quiet before: the hush makes the moment tense, and it can be read as the first sign that their behaviour is changing.',
    },
    {
      term: 'Dumb (line 11)',
      definition:
        'Here it means silent, an older sense of the word, not stupid. The order to stay silent is the third of four short commands packed into one line.',
    },
    {
      term: 'Mutter (line 12)',
      definition:
        'To speak quietly and unclearly, under one’s breath, often in complaint. It is one of several sounds that stand in for the seekers, who are never seen.',
    },
    {
      term: 'Scuffle (line 13)',
      definition:
        'As a verb, to struggle confusedly at close quarters, or to walk with a shuffling step. Both senses fit the blurred sound of the seekers moving away.',
    },
    {
      term: 'Own up (line 24)',
      definition:
        'To admit or confess something, especially a fault. The child demands that the seekers confess they have lost; the irony is that what they might really have to admit is leaving.',
    },
    {
      term: 'Sought (line 27)',
      definition:
        'The past tense of seek, the second half of the game’s name. The title is completed only in the poem’s last line, in the past tense, when the seeking has already stopped.',
    },
    {
      term: 'Imperative',
      definition:
        'A verb in the form of a command: call, push, stretch, do not move. Much of the poem is instructions, and the command form keeps the child, and the reader, under orders until the child steps out of the shed.',
    },
    {
      term: 'Second-person address',
      definition:
        'Writing that speaks to you. The poem never says I except inside the child’s spoken calls (lines 1 and 23 to 24), so the reader is placed in the hiding place beside the child, or as the child.',
    },
    {
      term: 'Modal verb',
      definition:
        'A verb such as must, will, might or should that shows how certain, likely or necessary something is. In line 16, must is used to deduce what the seekers are thinking, a certainty the voice has no evidence for.',
    },
    {
      term: 'Caesura',
      definition:
        'A pause in the middle of a line, usually marked by punctuation. Line 11 has three, and lines 22, 25 and 27 each break at a full stop, so the most intense moments of the poem are also its most broken.',
    },
    {
      term: 'Enjambment',
      definition:
        'When a sentence runs on from one line into the next without a pause. Lines 6 to 8 run on twice as the voice’s thoughts hurry from the cold floor to the swing to the danger of a sneeze.',
    },
    {
      term: 'Rhyming couplet',
      definition:
        'Two lines in a row that rhyme. The poem has four full ones, ending on lines 5, 10, 15 and 20, so a regular pattern runs under its conversational surface until the child decides to come out.',
    },
    {
      term: 'Half-rhyme',
      definition:
        'A near rhyme, in which the sounds are similar but not the same, such as clever and over (lines 16 to 17) or winner and better (lines 21 to 22). They sit beside the full rhymes as a looser echo.',
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the reader understands something a character does not. From line 13 onward the reader suspects the seekers have gone for good, while the child reads every sign as success.',
    },
    {
      term: 'Synaesthesia',
      definition:
        'Describing one sense in terms of another, as in the salty dark of line 3, where darkness is given a taste.',
    },
    {
      term: 'Register',
      definition:
        'The level of formality in language. The poem is almost all everyday speech, full of contractions, until the stiff, old-fashioned phrasing of its final question.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Compare how the writers present personal experiences in Hide and Seek and one other poem from the anthology. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill:
          'Comparative essay with a second Part 3 poem of your own choice: language, form and structure',
        guidance: [
          'Choose a partner poem that lets you compare methods, not just subjects. Half-past Two (a child left alone in a classroom), Piano (an adult overwhelmed by a childhood memory) and La Belle Dame sans Merci (a knight left alone on a cold hillside) all give real contrasts.',
          'Open with a thesis that compares. For example: both poems present an experience from the inside, but Scannell keeps the reader in the moment, in the present tense and the second person, and gives no later perspective from which it can be understood.',
          'Compare voice. Weigh two readings of Scannell’s you, the child’s own inner voice (the reading in Pearson’s Getting Started Guide) or a separate, knowing voice, and set it against the voice of your partner poem.',
          'Compare structure. Scannell’s single block of 27 lines, with rhyming couplets closing lines 5, 10, 15 and 20 and the pattern breaking as the child comes out, against the stanzas and rhyme of your second poem.',
          'Compare endings. Line 27 is the poem’s only question, and no one answers it. Put it beside how your partner poem closes, and decide which leaves its speaker or subject worse off.',
          'Keep every paragraph comparative, with connectives that carry an argument (whereas, while, by contrast), and end with a judgement about what each poet suggests an experience like this does to a person.',
        ],
      },
      {
        question:
          'Compare how the writers use instructions and advice in If- and Hide and Seek. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparative essay on two named anthology poems',
        guidance: [
          'Start with address. Both poems speak to a you in the present tense: Kipling’s speaker to a young man addressed as his son only in the last line, through conditional clauses beginning If; Scannell’s voice to a hiding child, through imperatives.',
          'Compare the grammar of instruction. Kipling builds one long sentence, as Pearson’s own mark scheme notes, that delays its reward to the end; Scannell uses clipped commands, four of them in line 11 alone.',
          'Use waiting as a bridge. Line 5 of If- praises waiting without tiring of it. Scannell’s child does exactly that, holding out through cold and stiffness in lines 18 to 20, and loses.',
          'Compare what obedience earns. Kipling promises the earth and manhood in his last two lines; Scannell’s child follows every instruction perfectly and is rewarded with a dark, empty garden.',
          'Consider who gives the orders. Kipling’s speaker is a father with experience; Scannell’s voice may be the child’s own and cannot see outside the shed, so its advice is only as good as its guesses (lines 6 to 7 and 14 to 17).',
          'Conclude on attitude: one poem trusts that keeping to the rules leads to success, while the other suggests that playing a game perfectly guarantees nothing once the other players stop.',
        ],
      },
      {
        question:
          'Compare how the writers present being left alone in Hide and Seek and La Belle Dame sans Merci. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparative essay on two named anthology poems',
        guidance: [
          'Open with the shared ending. Both poems leave a lone figure in a still, silent outdoor place after the others have gone: Scannell’s child in a darkening garden where nothing stirs, Keats’s knight on a cold hillside where no birds sing (stanzas XI and XII).',
          'Compare how each poem is told. Keats uses two voices, a questioner in stanzas I to III and the knight’s reply from stanza IV; Scannell uses one voice, speaking to you, with the child heard only in two short calls.',
          'Compare cause. Keats gives a reason for the knight’s state, the lady and the pale kings’ warning in his dream; Scannell gives none for the seekers’ departure, and the unexplained laughter of line 13 is all the reader has.',
          'Compare nature. Keats’s withered sedge and silent birds, and Scannell’s watching garden and breath-holding bushes, both seem to reflect the abandoned figure. Ask whether the setting sympathises or simply does not care.',
          'Compare structure. Keats’s last stanza returns to the words of his first, closing the poem in a circle; Scannell ends on an open question. Say what each shape does to the reader.',
          'End with a judgement about which poem presents being left alone as the more complete loss, and why.',
        ],
      },
    ],
    tips: [
      'Know what the paper sets. Hide and Seek is examined in Section B of Paper 1 of English Literature (4ET1), where you answer one of two questions, with 40 minutes advised. Both questions are comparisons, and both ask about language, form and structure. One names two Part 3 poems; the other names one and asks you to choose the second, which must also come from Part 3 and be a poem in which the question’s focus is significant. Every Part 3 poem is printed for you in a separate Poetry Booklet that comes with the paper. An answer on one poem alone cannot rise above the second of the mark scheme’s five levels.',
      'The poem is printed for you in the exam (the November 2023 booklet numbers every fifth line, as the anthology does), so the credit goes to what you do with a quotation, not to remembering it. Quote a few words, give the line number and analyse them.',
      'Find the hidden pattern. Four rhyming couplets close lines 5, 10, 15 and 20 (out and shout, door and before, lane and again, coat and throat), a regular beat under the chatty surface. After line 20 it breaks, and the last rhyme ties the boast of line 24 to the question of line 27. Some revision guides say the rhyme has no pattern; check it in your own copy.',
      'Track the tenses. Almost every verb is in the present, which keeps the reader inside the game as it happens. The only two simple past verbs, in line 18 and in line 27, both belong to the seekers, and both say that they have stopped.',
      'Treat the middle of the poem as guesswork. Probably (line 6), the predictions of lines 14 to 15 and “must be thinking” (line 16) are the voice’s assumptions about people it cannot see. A strong answer might argue that the child’s mistake is not hiding too well but believing it knows what others are thinking.',
      'Context is not what this section of the paper rewards: it assesses how you analyse language, form and structure and how well you compare. Scannell’s war service and desertions are worth knowing, but if you use them at all, keep it to a clause and tie it to a technique.',
      'Say the child, or the hider. The poem never says whether the child is a boy or a girl, although many guides, Pearson’s own included, say boy. Precision like this is part of reading closely.',
      'Prepare it in all three roles the paper has given it. Pearson’s summaries of past questions show it as the one poem named in Question 3 in June 2018 (personal experiences, with a second poem of your choice), and as one of the two poems named in Question 2 twice: with Half-past Two on childhood in January 2020 (the R paper, sat by centres far from GMT) and with War Photographer on isolation in November 2020 (the paper titled June 2020). The June 2024 Paper 1R mark scheme lists Hide and Seek among the poems in which giving advice is significant, as a second poem for If-.',
      'Learn from November 2024. In that series Question 3 asked you to compare how the writers use vivid descriptions in Hide and Seek and one other poem. The examiners’ report says Half-past Two was the most popular second poem, and that Piano, Prayer Before Birth and War Photographer were also chosen, with some strong results. Comments on structure, the volta and rhyme did not always go on to explain their effect. Across the section, the stronger answers wove language, form and structure together rather than giving each its own paragraph, and gave both poems a fair share.',
      'Quote the anthology, not a revision guide. Line 20 has no comma between its two adjectives in the anthology or the exam’s Poetry Booklet, although Pearson’s Getting Started Guide adds one. Copy the wording in front of you.',
      'Make the register shift work for you. The last line drops the contractions that fill the rest of the poem for a stiff, formal question; say what that change of voice does at the moment the child realises the truth.',
    ],
  },

  modelAnswer: {
    question:
      'Compare how the writers present personal experiences in Hide and Seek and one other poem from the anthology.',
    paragraph:
      'Both poets present a child left alone by the people who should come back, but only Fanthorpe allows anyone to return. Scannell’s ending turns the game inside out. When the child emerges, the boast that the seekers have been “caught” (line 24) is the seeker’s word, not the hider’s, and the garden completes the reversal: “The darkening garden watches” and the bushes “hold their breath” (lines 25 to 26), copying the stillness the child was ordered into in line 11, as if the world were now hiding from the child. The present participle darkening shows time still running on, while the full stops in the middle of lines 25 and 27 leave silence where an answer should be. The last line then abandons the chatty contractions of the game for the stiff, old-fashioned “they who sought you” (line 27), and its past tense tells the reader that the seeking ended before the child knew. Rhyming sought with caught ties the boast to its refutation. Fanthorpe’s boy, by contrast, is fetched back: his teacher hurries back, admits she had forgotten him and sends him on his way, and he is home in time for tea (lines 25 to 29), so the poem closes on a memory he keeps rather than on a question. Scannell’s choice to stop at the question is what makes his poem the bleaker of the two: the child’s experience is not explained or consoled, only suffered.',
    commentary: [
      'It opens with a comparative argument, return against abandonment, rather than a summary of either poem, so the line of the whole answer is clear from the first sentence.',
      'Every quotation is a few words long, embedded in the sentence, given a line number and analysed, which suits a paper where the poems are printed in front of you.',
      'It analyses form and structure as well as words: the reversal of roles, the mid-line full stops, the shift of register and the rhyme of caught with sought, each used as evidence for the interpretation rather than as a label.',
      'It notices a small grammatical fact, the past tense of sought, and makes it carry meaning, which is the close reading that separates a strong answer from a competent one.',
      'It brings Half-past Two in on the same idea, the ending, and on method (who returns, how the poem closes), so the comparison is more than two parallel descriptions.',
      'It ends on a judgement that separates the poems, and justifies it, which is the personal response Pearson’s mark scheme says an answer must show.',
    ],
  },

  timeline: [
    {
      where: 'Lines 1-5',
      title: 'The call and the hiding place',
      summary:
        'Hidden among sacks in a garden toolshed that smell of the seaside, the child shouts that they are ready to be found. The voice is sure no one will find this spot, but warns the child to keep their feet out of sight and not to call again.',
      setting: 'A garden toolshed, among sacks',
      who: ['The hider', 'The voice'],
      quote: 'find me',
      themes: ['Pride Before a Fall', 'Appearance of a Game, Reality of a Test'],
      tension: 2,
      significance:
        'The poem opens with a request to be found and ends with no one looking, so everything that follows is measured against this first wish.',
    },
    {
      where: 'Lines 6-10',
      title: 'The seekers arrive',
      summary:
        'On the cold floor the voice guesses where the seekers are searching and warns against sneezing. Then they reach the shed door, whispering, quieter than the child has ever heard them.',
      setting: 'Inside the toolshed, with the seekers just outside the door',
      who: ['The hider', 'The voice', 'The seekers'],
      quote: 'whispering at the door',
      themes: ['Appearance of a Game, Reality of a Test'],
      tension: 3,
      significance:
        'The seekers are within earshot and about to come closer still, yet they are only ever heard; within three lines they are gone, and from then on they exist only in the voice’s guesses.',
    },
    {
      where: 'Lines 11-13',
      title: 'Stillness, and a departure',
      summary:
        'The voice orders total stillness and silence in four short sentences. The seekers move closer, someone stumbles and mutters, and their words and laughter blur together as they leave.',
      setting: 'The dark toolshed',
      who: ['The hider', 'The voice', 'The seekers'],
      quote: 'Hide in your blindness',
      themes: ['Isolation and Abandonment', 'Appearance of a Game, Reality of a Test'],
      tension: 4,
      significance:
        'The seekers leave while the child is working hardest not to be found, so the shared game may already be over at the moment it seems to be going best.',
    },
    {
      where: 'Lines 14-17',
      title: 'The voice’s guesses',
      summary:
        'The voice tells the child to stay hidden, predicting that the seekers will search the lane and the greenhouse and then come back, and imagines them puzzled by how clever the hider has been.',
      setting: 'The toolshed; the lane and the greenhouse exist only in the voice’s predictions',
      who: ['The hider', 'The voice', 'The seekers'],
      quote: 'must be thinking',
      themes: ['Pride Before a Fall'],
      tension: 2,
      significance:
        'Every statement about the seekers here is a guess and none is ever confirmed: the child’s confidence rests on thoughts it imagines in other people.',
    },
    {
      where: 'Lines 18-20',
      title: 'The long wait',
      summary:
        'Time passes. The voice notes how long the seekers have been gone without drawing the obvious conclusion. The child’s legs stiffen, the cold gets through the coat and the damp smell of sand gets into the throat.',
      setting: 'The toolshed, colder and darker',
      who: ['The hider', 'The voice'],
      themes: ['Isolation and Abandonment', 'Childhood and the Loss of Innocence'],
      tension: 3,
      significance:
        'The body registers what the mind will not: the verb in line 18 is the first simple past in the poem, and it says the seekers left.',
    },
    {
      where: 'Lines 21-24',
      title: 'Coming out to claim the win',
      summary:
        'Sure of victory, the child pushes off the sacks, stretches and walks out of the shed, calling that they have won and demanding that the seekers admit they have been caught.',
      setting: 'The shed doorway and the garden beyond it',
      who: ['The hider', 'The voice'],
      quote: 'you’re the winner',
      themes: ['Pride Before a Fall'],
      tension: 3,
      significance:
        'The verdict of winner is reached in the dark shed, on no evidence from outside, and the hider even claims the seeker’s word, caught, so the roles of the game are reversed at the moment of triumph.',
    },
    {
      where: 'Lines 25-27',
      title: 'The empty garden',
      summary:
        'No one answers. The garden is darkening and still, the bushes do not move and the sun has set. The voice confirms that the child is there, and asks where the seekers have gone.',
      setting: 'A garden at dusk',
      who: ['The hider', 'The voice'],
      quote: 'they who sought you',
      themes: ['Isolation and Abandonment', 'Childhood and the Loss of Innocence'],
      tension: 5,
      significance:
        'The poem’s only question closes it, and its past-tense verb confirms that the seeking is over, and suggests it ended some time before the child knew.',
    },
  ],

  relationships: [
    {
      from: 'The voice',
      to: 'The hider',
      kind: 'instructor and player, perhaps one mind',
      note: 'The voice gives every order the hider follows, from the first call to the last. It may be the child’s own inner voice, as Pearson’s guide reads it, or a separate, knowing one. Either way its confidence drives the child on, and its last words confirm, too late, that the child is alone.',
    },
    {
      from: 'The hider',
      to: 'The seekers',
      kind: 'playmates, then absentees',
      note: 'The game needs both sides to keep playing, and only one does. The seekers are heard but never seen: whispering, stumbling, laughing, then nothing. The child asks to be found in line 1 and claims to have caught them in line 24, and they answer neither.',
    },
    {
      from: 'The voice',
      to: 'The seekers',
      kind: 'guesser and guessed',
      note: 'The voice keeps predicting what the seekers are doing and thinking (lines 6 to 7 and 14 to 17), and none of its guesses is confirmed. In line 18 it notes, without seeing what it means, how long they have been away.',
    },
  ],

  compareWith: [
    {
      title: 'Half-past Two (U A Fanthorpe)',
      href: '/resources/revision-notes/half-past-two',
      reason:
        'Both leave a child alone while the people responsible are elsewhere, but Fanthorpe’s teacher hurries back and admits she forgot him, while Scannell’s seekers never return or explain.',
    },
    {
      title: 'If- (Rudyard Kipling)',
      href: '/igcse/edexcel/poetry/if',
      reason:
        'Both instruct a you and both treat patient waiting as a virtue (If-, line 5), but Kipling promises the earth as a reward, while Scannell’s obedient child is rewarded with an empty garden.',
    },
    {
      title: 'La Belle Dame sans Merci (John Keats)',
      href: '/igcse/edexcel/poetry/la-belle-dame-sans-merci',
      reason:
        'Both end with a lone figure in a still, silent outdoor place after the others have gone, but Keats closes in a circle that repeats his opening, while Scannell ends on an open question.',
    },
  ],

  contentGuidance: [],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 3, page 58: the wording, line numbers and single-stanza layout behind every quotation, the word count, and the acknowledgement (Collected Poems 1950-1993, Faber & Faber, 2011, by permission of the Estate of Vernon Scannell). Also Half-past Two (page 56), If- (page 51) and La Belle Dame sans Merci (pages 60-61), read for the comparisons.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Pearson 4ET1/01 question paper, 6 November 2023, with the Poetry Booklet of all the Part 3 poems issued with it: the booklet prints the poem as the anthology does, the same 27 lines word for word with the same line numbering. Used as the independent second text for every quotation, and the question paper for the wording of Section B questions.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-que-20231107.pdf',
    },
    {
      label:
        'Pearson 4ET1/01 question paper, 4 November 2024: Section B, answer one question, 40 minutes advised; Question 2 names two Part 3 poems, and Question 3 names Hide and Seek (vivid descriptions) and asks for one other poem from the anthology; the Poetry Booklet comes with the paper and numbers every fifth line of the poem.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-que-20241105.pdf',
    },
    {
      label:
        'Pearson 4ET1/01 mark scheme, November 2024: indicative content for Hide and Seek in Question 3; the second poem must be one with vivid descriptions (other mark schemes say one in which the focus is significant); one grid for both objectives in five levels, and an answer on only one poem cannot go above Level 2.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-rms-20250123.pdf',
    },
    {
      label:
        'Pearson 4ET1/01 examiners’ report, November 2024: Half-past Two the most popular second poem for Question 3, with Piano, Prayer Before Birth and War Photographer; comments on structure, volta and rhyme not always carried through to effect; the Section B summary of what stronger answers did.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-pef-20250123.pdf',
    },
    {
      label:
        'Pearson International GCSE English Literature (4ET1) specification: Paper 1 Section B compares two Part 3 poems and assesses language, form and structure and links between texts; the anthology poems are provided in the examination.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        'Pearson, Summary of questions set for 4ET1, SAMs to January 2019: the June 2018 Paper 1 question on personal experiences in Hide and Seek and one other poem (wording abbreviated by Pearson).',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/summary-of-questions-set-for-4et1-sams-to-january-2019.pdf',
    },
    {
      label:
        'Pearson, Summary of questions set for 4ET1, June 2019 to November 2020: Paper 1 Question 2 named Half-past Two and Hide and Seek (childhood) in the January 2020 R paper, and Hide and Seek and War Photographer (isolation) in November 2020, the series titled June 2020 (wording abbreviated by Pearson; R papers are sat by centres far from GMT).',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/summary-of-questions-set-for-4et1-june-2019-to-november-2020.pdf',
    },
    {
      label:
        'Pearson 4ET1 Paper 1R mark scheme, June 2024 (4ET1_01R_2406_MS): lists Hide and Seek among the poems in which giving advice is significant, as a second poem for If-, and notes that If- is one sentence.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01r-rms-20240822.pdf',
    },
    {
      label:
        'Pearson International GCSE English Literature Getting Started Guide, Issue 2 (November 2024), page 43: reads the voice as the hiding child’s own thoughts and calls the child a boy; prints line 20 with a comma that the anthology does not have.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/international-gcse-english-literature-getting-started-guide.pdf',
    },
    {
      label: 'LitCharts, Hide and Seek: the poem appears in Walking Wounded (1965).',
      url: 'https://www.litcharts.com/poetry/vernon-scannell/hide-and-seek',
    },
    {
      label:
        'Poem Analysis, Hide and Seek: the poem was published in the collection Walking Wounded.',
      url: 'https://poemanalysis.com/vernon-scannell/hide-and-seek/',
    },
    {
      label:
        'Poetry Foundation, Vernon Scannell: born John Vernon Bain; Walking Wounded dated 1965; war service in North Africa and France; desertion.',
      url: 'https://www.poetryfoundation.org/poets/vernon-scannell',
    },
    {
      label:
        'Wikipedia, Vernon Scannell: Gordon Highlanders; walked away after an assault near Gabes in Tunisia and was court-martialled for deserting a forward area; military prison in Alexandria; shot in both legs near Caen; deserted again after VE Day and spent two years on the run; Walking Wounded (1965).',
      url: 'https://en.wikipedia.org/wiki/Vernon_Scannell',
    },
    {
      label:
        'The War Poets Association, Vernon Scannell: enlisted 1940; wounded near Caen; deserted after VE Day; two years on the run, including professional boxing bouts; arrested in 1947.',
      url: 'https://warpoets.org/conflicts/world-war-ii/vernon-scannell/',
    },
    {
      label:
        'The Salamander Oasis Trust, obituary of Vernon Scannell: desertion after a battle in Tunisia, a three-year sentence in an army prison in Egypt, release in time for the Normandy landings. It gives a different birthplace from the Poetry Foundation and Wikipedia, so this guide names none.',
      url: 'https://salamanderoasis.org/news/obituary-scannell-vernon.html',
    },
    {
      label:
        'Wiktionary definitions checked for the vocabulary: dumb, scuffle, own up, prowl, hushed, mutter, toolshed, sack, sought, caesura, enjambment, dramatic irony, half rhyme, couplet.',
      url: 'https://en.wiktionary.org/wiki/scuffle',
    },
  ],
}
