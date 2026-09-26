import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Remember, Christina Rossetti (written 1849, published 1862). A supplement:
 * the page at /igcse/edexcel/poetry/remember keeps its overview, context, key
 * quotations, language analysis and form and structure, and this file adds
 * themes, the poem's two figures, passages for close reading, vocabulary, exam
 * practice and a model answer, mounted below it.
 *
 * THE TEXT. The anthology (Issue 8, February 2026, page 70, read from Pearson's
 * PDF on 25 September 2026) prints the fourteen lines as one block, numbering
 * lines 5 and 10, with no footnotes. Its wording and punctuation match the first
 * edition, Goblin Market and Other Poems (Macmillan, 1862), page 58, headed
 * "Remember. Sonnet.", as transcribed on Wikisource. The edition held in
 * src/data/full-texts/remember.ts is Project Gutenberg #19188 (the 1876
 * author's edition in a 1906 Boston printing), which has the same words but adds
 * two commas to line 5 ("when no more, day by day,"). The guide test
 * normalises punctuation, so every quotation here is printed in the
 * anthology's punctuation and still checked word for word against the held
 * edition.
 *
 * RE-VERIFIED 26 September 2026, against the same sources re-read that day: the
 * anthology PDF (page 70, and pages 57, 59, 62 and 69 for the comparison poems),
 * the 1862 first edition on Wikisource, the 1904 Poetical Works on the Internet
 * Archive, and Pearson's June 2024 mark scheme and summary of questions set.
 * Every line number in the prose was checked against the anthology's lineation.
 *
 * WHAT THE PAGE ABOVE GETS WRONG, and this file does not repeat:
 * - its context says the poem was written when Rossetti was "just 19". William
 *   Michael Rossetti's 1904 Poetical Works dates the poem 25 July 1849; she was
 *   born on 5 December 1830, so she was eighteen.
 * - it says she was engaged twice and that the engagement to Charles Cayley
 *   "ended". Her brother's memoir says she declined Cayley's proposal, and
 *   records no engagement to him. It also offers the broken engagements as what
 *   the poem reflects, when the poem was written before the Collinson
 *   engagement ended (in 1850, or possibly late in 1849, by the memoir) and more
 *   than a decade before the Cayley proposal. Biographies differ on whether the
 *   Collinson engagement itself began in 1848 or 1849, so this file says only
 *   that the poem predates its end.
 * - its note on line 2 mentions a capital L in "earlier versions" of "the
 *   silent land". The 1862 first edition, the 1904 edition, the held edition and
 *   the anthology all print it in lower case; no source for a capital was found.
 * - its anaphora note says "Remember me" begins lines 1, 5 and 7. Line 7 begins
 *   "Only"; the phrase opens lines 1 and 5 only.
 * - it calls lines 13 and 14 "the final couplet". They do not rhyme with each
 *   other: smile rhymes with while (line 9) and sad with had (line 12).
 * - its euphemism entry calls "darkness and corruption" metaphorical rather than
 *   literal, while its own line 11 note calls them literal images of the grave.
 * - two of its three comparison links (Do not go gentle, Poem at Thirty-Nine) go
 *   to the anthology index, not to the poems.
 */
export const guide: StudyGuide = {
  slug: 'remember',
  title: 'Remember',
  author: 'Christina Rossetti',
  form: 'poem',
  scope:
    'The whole poem, a sonnet of 14 lines, as printed on page 70 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3, for English Literature (4ET1), Paper 1 Section B, where it is compared with another Part 3 poem. Line numbers follow the anthology, which numbers lines 5 and 10.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'Christina Rossetti (1830-1894); out of copyright. First published in Goblin Market and Other Poems (Macmillan, 1862). Wording, punctuation and line numbers follow the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), page 70; quotations are also checked against Poems, Project Gutenberg eBook #19188.',
  },
  workLength: {
    words: 111,
    lines: 14,
    basis:
      "Counted from the anthology printing on page 70 (Issue 8, February 2026), read from Pearson's PDF on 25 September 2026: 14 lines, title and poet's name excluded, 111 words by the validator's count.",
  },

  native: {
    overview: '/igcse/edexcel/poetry/remember',
    context: '/igcse/edexcel/poetry/remember',
    keyQuotes: '/igcse/edexcel/poetry/remember',
    languageAnalysis: '/igcse/edexcel/poetry/remember',
    structureForm: '/igcse/edexcel/poetry/remember',
  },

  themes: [
    {
      title: 'Memory and forgetting',
      body: "The title is a command, and the poem's first word repeats it. Remember appears five times, in lines 1, 5, 7, 10 and 14, and forget twice, in lines 9 and 13, so a reader might expect a poem that insists on being remembered. Its shape says something more complicated. In the octave, remembering is something the speaker asks for, three times, and each time the object is attached: “Remember me” opens lines 1 and 5, and line 7 narrows it to “Only remember me”. In the sestet the verb loses its object. Line 10 imagines the beloved remembering again after a spell of forgetting, and by line 14 “remember and be sad” has become the outcome the speaker hopes to spare him. The word me, used six times in the first nine lines, never appears after line 9. One reading is that the speaker changes her mind as she speaks, and the volta records a thought happening in real time. Another is that the octave's request was never as simple as it looked: “Only” already asks for nothing else, no rituals of mourning and no prayers, which prepares the ground for the release that follows. The second is the more convincing, because the octave's own reason, that after death “It will be late to counsel then or pray” (line 8), already points to the sestet's conclusion that memory is for the living, not for the dead. Pearson's examiners have called the ending a paradox, a poem titled Remember that recommends forgetting. It is better understood as the poem's argument: memory is worth keeping only if it does not wound the one who keeps it.",
    },
    {
      title: 'Death and the silent land',
      body: "Rossetti never uses the words death, dead or die in the poem. Death is first a journey: “gone away” in line 1, which line 2 picks up and stretches into “Gone far away”, so that the distance grows as we read. Its destination is “the silent land” (line 2), and silence is the loss the octave keeps returning to. After death there will be no hand to hold (line 3), no lingering goodbyes (line 4), no daily talk of plans (lines 5 and 6), no counsel or prayer (line 8). Death, in other words, is imagined as the end of conversation. Then the sestet names what the gentle phrases have been covering: “the darkness and corruption” (line 11). Corruption here means bodily decay in the grave, and it is the bluntest word in the poem. A Victorian churchgoer would also have known it from the Prayer Book burial service, which reads from 1 Corinthians 15, “It is sown in corruption; it is raised in incorruption”. For a believer, then, the word carries both the horror of decay and the promise that decay is not the end. Yet the poem itself says nothing about resurrection. It allows only that the grave might leave “A vestige of the thoughts that once I had” (line 12), and the if in line 11 makes even that a possibility rather than a promise. (Whose trace it would be is itself open: something of the speaker's own mind surviving death, or the beloved's memory of what she once thought.) One reading takes this as the reticence of a devout poet who did not need to spell out her hope; her sonnet ‘Rest’, dated May of the same year, imagines a dead woman sleeping in the earth “Until the morning of Eternity”. Another reading hears real uncertainty. On the words of this poem alone the second is stronger, because the speaker offers the beloved no heaven and no reunion, only the chance that he might smile.",
    },
    {
      title: 'Love as letting go',
      body: "Love in this poem is measured by what the speaker is prepared to give up. The octave shows love as touch and talk: holding hands (line 3), the lovers' reluctant partings, in which one half turns to go and then stays (line 4), and the beloved's daily talk of “our future that you planned” (line 6). The sestet shows love as sacrifice. The speaker gives up the one thing she asked for, a place in his memory, rather than let that memory make him “sad” (line 14). The permission grows as the sestet goes on. Line 9 allows forgetting only “for a while”, followed by remembering; line 13 allows forgetting outright. “Better by far” (line 13) is a weighed judgement, and the stress falls on its first syllable, breaking the iambic pattern at the start of the line, so the decision sounds firm. One reading praises the speaker as wholly selfless: she places his happiness above her own survival in his mind. A more critical reading notices how much control she keeps. The poem is a series of instructions, from “Remember me” to “do not grieve” (line 10), and even the permission to forget is granted by her, on her terms. The strongest answers hold both views at once: the speaker lets go, but she is still the one deciding how she will be let go of. That does not reduce the tenderness of the ending. It makes it more human, because giving up a claim on someone is harder, and more loving, for a person who plainly wants to keep it.",
    },
    {
      title: 'Time and the lost future',
      body: "The poem works across three times at once. It is spoken in the present, it looks ahead to the speaker's death, “when I am gone away” (line 1), and from that imagined future it looks back at the present as already over. The beloved's plans are described in the past tense, “our future that you planned” (line 6), so the future itself has become something that belonged to before. “It will be late” (line 8) is a sentence about timing: once she has gone, the chance to counsel or pray will have passed. In the sestet the speaker even pictures her own mind in the past tense from beyond the grave, “the thoughts that once I had” (line 12). The ordinary rhythm of a shared life, “day by day” (line 5), is exactly what death will interrupt. Biographical readers link the lost future to Rossetti's engagement to the painter James Collinson, which she broke off when he returned to the Roman Catholic Church. The dates make that link harder to sustain than it looks. Her brother William Michael Rossetti dated the poem 25 July 1849 and placed the end of the engagement in 1850, or possibly late in 1849, so the poem was written before the engagement ended. Her later attachment to the scholar Charles Cayley, whose proposal she declined, came more than a decade after. It is safer to say that an eighteen-year-old poet imagined the loss of a planned future, and that her later life has given the poem, for many readers, a sadness it could not yet have held when she wrote it.",
    },
    {
      title: 'Faith and its limits',
      body: "Rossetti belonged to the High Church, or Anglo-Catholic, wing of the Church of England, and religious devotion played a major part in her life and her poetry. In this poem, though, it appears only once, in a line about limits: “It will be late to counsel then or pray” (line 8). To counsel is to advise, and the noun counsel also means consultation or a plan, so the word gathers up the talk and planning of lines 5 and 6; pray can mean praying to God, or pleading with a person. One reading is that it will be too late to pray for her recovery; another is that it will be too late to beg her to stay, which would recall the half-turn of line 4. The poem does not settle it, and either way the line says that once she has gone, words will be useless. What is striking, given the poet's faith, is how little comfort religion is allowed to offer. There is no heaven, no angel and no promise of meeting again, only a silent land, darkness, decay and the possibility of a vestige. The title and first line may also recall one of the two criminals crucified beside Jesus in Luke's Gospel, who asks, “remember me when thou comest into thy kingdom” (Luke 23:42, in the King James Bible). If that echo is heard, the speaker asks a human being for what the dying man asked of Christ, and then releases him from it. It is a possible echo, not a proven allusion, and in an exam it should be offered as a reading. The more secure point is the restraint itself: a devout poet writing about death chooses to talk about the living person's happiness rather than her own salvation.",
    },
  ],

  characters: [
    {
      name: 'The speaker',
      role: 'The only voice in the poem, imagining their own death and speaking to the one they love',
      body: "Nothing in the poem says whether the speaker is a woman or a man. Most readers assume a woman addressing a male lover, because Rossetti wrote it, and Pearson's own mark scheme simply calls the speaker Rossetti; in an exam it is safer to write the speaker, and if you use she, to know that it is an assumption. What the poem does make clear is the speaker's situation: someone who expects to die before the person they love and is thinking, calmly and practically, about what that will mean for the one left behind. No illness is named and there is no deathbed. The voice changes as the poem goes on. In the octave it gives orders, three requests to be remembered, and it is the speaker who fills the lines: me six times in the first nine lines. In the sestet it moves from command to permission, from when to if, and me disappears altogether, so that the speaker seems to step back out of the poem. The last time the speaker refers to herself, it is in the past tense, “the thoughts that once I had” (line 12). The tone throughout is controlled rather than anguished: two orderly sentences in the octave, one long reasoned sentence in the sestet. Some readers find that composure moving; others find it slightly unsettling, as though the speaker were managing her own mourning in advance. Either response can be argued, but the calm itself is the poem's most distinctive feature.",
    },
    {
      name: 'The beloved',
      role: 'The silent listener, addressed as you and left to live on',
      body: "The beloved is addressed as you seven times but never speaks, and everything we learn comes through the speaker. This is someone who holds the speaker's hand (line 3), who talks to the speaker “day by day” (line 5) about the future, and who has planned that future (line 6). The pronouns in line 6 are worth a close look: the future is “our” future, shared, but it is the one “that you planned”, not we. One reading is simply tender, the beloved as the hopeful one making plans; Pearson's June 2024 mark scheme suggests the pronoun could also hint that the speaker knew she was ill before her partner did, or that he was the controlling one. The poem itself names no illness, so treat that as one possible reading. The poem also imagines the beloved's inner life after the speaker's death with unusual care: forgetting for a while, remembering later, and then perhaps feeling guilty at having forgotten, which is why “do not grieve” (line 10) is so kind. In the Petrarchan sonnet tradition, the speaker is usually a man and the beloved a silent woman, like Petrarch's Laura, who died in 1348. Rossetti was alert to that silence: in the preface to her later sonnet sequence Monna Innominata, she wrote of the unnamed ladies of that tradition and suggested that a more tender portrait might have come down to us “Had such a lady spoken for herself”. Remember can be read as an early reversal of the tradition, in which the speaker, usually read as a woman, holds the voice and the lover is the one who is silent.",
    },
  ],

  extracts: [
    {
      title: 'Going away',
      where: 'Octave, lines 1-4',
      pointer:
        'The first four lines, from “Remember me when I am gone away” to “yet turning stay.”, anthology page 70. The first sentence of the poem ends here.',
      text: 'Remember me when I am gone away, / Gone far away into the silent land; / When you can no more hold me by the hand, / Nor I half turn to go yet turning stay.',
      annotations: [
        {
          phrase: 'Remember me when I am gone away',
          note: 'The poem opens with its title turned into a command. Gone away is a gentle euphemism: death is described as a departure, as if the speaker were setting out on a journey.',
        },
        {
          phrase: 'Gone far away',
          note: 'Line 2 picks up the end of line 1 and extends it with far, a kind of anadiplosis. The distance between the lovers grows as the reader moves down the page.',
        },
        {
          phrase: 'the silent land',
          note: 'A metaphor for death as a country, and silence is its defining feature. The octave goes on to list everything that silence will end: touch, parting words, plans and prayer.',
        },
        {
          phrase: 'hold me by the hand',
          note: 'An ordinary, physical sign of affection. Grounding the loss in touch makes it concrete: the lovers will not simply miss each other, they will no longer be able to reach each other.',
        },
        {
          phrase: 'half turn to go yet turning stay',
          note: 'The line enacts a reluctant goodbye: turn becomes turning, and the speaker who begins to leave stays. The small word yet here anticipates the Yet that turns the whole poem in line 9.',
        },
      ],
      question:
        'Explore how Rossetti presents death and parting in lines 1 to 4. Write about the language, the sound and the structure of these lines.',
    },
    {
      title: 'The planned future',
      where: 'Octave, lines 5-8',
      pointer:
        'Lines 5 to 8, from “Remember me when no more day by day” to “counsel then or pray.”, anthology page 70. The anthology prints line 5 without commas; some editions add them after more and after day by day.',
      text: 'Remember me when no more day by day / You tell me of our future that you planned: / Only remember me; you understand / It will be late to counsel then or pray.',
      annotations: [
        {
          phrase: 'Remember me when no more day by day',
          note: 'The opening command returns at the start of line 5, anaphora that makes the request sound insistent. Day by day stands for the ordinary, repeated rhythm of a shared life, which death will stop.',
        },
        {
          phrase: 'our future that you planned',
          note: 'The future is described in the past tense, so it is already over as it is spoken. Our makes it shared, but you planned it, which invites a question about who held the hopes.',
        },
        {
          phrase: 'Only remember me',
          note: 'Only falls where the stress lands at the start of the line, so the word is emphasised. It narrows the request: the speaker asks for nothing else, not grief, not ritual, just memory.',
        },
        {
          phrase: 'you understand',
          note: 'The phrase runs on into line 8. It can be read as a statement, you know this already, or as a gentle plea, please understand, and the ambiguity softens the hard fact that follows.',
        },
        {
          phrase: 'It will be late to counsel then or pray',
          note: 'The line says late, not too late, and the quietness is part of its force. Counsel and pray are both kinds of speech, so the octave ends where it began, with death as silence.',
        },
      ],
      question:
        'How does Rossetti use repetition and the idea of the future to present the relationship in lines 5 to 8?',
    },
    {
      title: 'The turn',
      where: 'Sestet, lines 9-14',
      pointer:
        'The whole sestet, from “Yet if you should forget me for a while” (line 9) to the end of the poem, anthology page 70. These six lines are a single sentence.',
      text: 'Yet if you should forget me for a while / And afterwards remember, do not grieve: / For if the darkness and corruption leave / A vestige of the thoughts that once I had, / Better by far you should forget and smile / Than that you should remember and be sad.',
      annotations: [
        {
          phrase: 'Yet if you should forget me for a while',
          note: 'The volta. Yet turns the argument, and if replaces the when of lines 1, 3 and 5: the certainty of death gives way to a possibility. This is the last line in which the word me appears.',
        },
        {
          phrase: 'do not grieve',
          note: 'Another imperative, but now a command that frees. The speaker has imagined the guilt the beloved might feel at having forgotten her, and forbids it in advance.',
        },
        {
          phrase: 'the darkness and corruption',
          note: 'The only direct image of the grave. Corruption means bodily decay, and it is also the word used in the Prayer Book burial service, which promises that the corrupted body will be raised.',
        },
        {
          phrase: 'A vestige of the thoughts that once I had',
          note: 'A vestige is a trace, from the Latin for a footprint, and the thoughts are spoken of in the past tense. Whose trace it is stays open: something of the speaker surviving death, or the memory of her thoughts that the beloved keeps.',
        },
        {
          phrase: 'Better by far you should forget and smile',
          note: 'The line opens on a stressed syllable, so the verdict lands firmly. Far echoes the far away of line 2: the distance of death returns as the measure of how much better forgetting would be.',
        },
        {
          phrase: 'remember and be sad',
          note: 'Set against forget and smile in the line before, this is antithesis: two paired choices, weighed. The poem that began by asking to be remembered ends by naming remembering as the worse outcome.',
        },
      ],
      question:
        "Explore how Rossetti changes the speaker's request in lines 9 to 14. Write about the volta, the language of the grave and the effect of the final two lines.",
    },
  ],

  vocabulary: [
    {
      term: 'gone away (line 1)',
      definition:
        'Left, departed. Here a euphemism for dying: the poem never uses the words death, dead or die, and this is the first of its gentler substitutes.',
    },
    {
      term: 'the silent land (line 2)',
      definition:
        "The country of the dead, imagined as a place where no one speaks. It was not Rossetti's phrase alone: Longfellow's translation of a German poem by the Swiss poet Johann Gaudenz von Salis-Seewis is titled ‘Song of the Silent Land’.",
    },
    {
      term: 'half turn (line 4)',
      definition:
        'To begin to turn away without completing the movement. The gesture of someone who is leaving but does not want to go.',
    },
    {
      term: 'day by day (line 5)',
      definition:
        'Every day, one day after another. It stands for the routine of a shared life, which the speaker knows death will end.',
    },
    {
      term: 'counsel (line 8)',
      definition:
        'As a verb, to advise or recommend; as a noun, advice, consultation, or a plan or purpose. The line uses the verb, but the noun senses fit a poem about the talk and planning that death will end.',
    },
    {
      term: 'pray (line 8)',
      definition:
        'To speak to God in prayer, and also to beg or plead with a person. The line leaves open whether it means praying for the speaker or pleading with her.',
    },
    {
      term: 'grieve (line 10)',
      definition:
        'To feel deep sorrow, especially at a death; to mourn. The speaker forbids the beloved to grieve at having forgotten her.',
    },
    {
      term: 'corruption (line 11)',
      definition:
        'Decay; the rotting of a body after death. It can also mean moral decay. In the Prayer Book burial service the body is sown in corruption and raised in incorruption.',
    },
    {
      term: 'vestige (line 12)',
      definition:
        'A trace or faint mark left by something that has gone. It comes from the Latin vestigium, a footprint, which suits a poem that imagines death as going away.',
    },
    {
      term: 'better by far (line 13)',
      definition:
        'Much better. A phrase of comparison and judgement: the speaker weighs two outcomes and decides clearly between them.',
    },
    {
      term: 'sonnet',
      definition:
        'A poem of fourteen lines with a fixed rhyme scheme, traditionally a form for love poetry. The 1862 first edition printed Remember with the subtitle Sonnet.',
    },
    {
      term: 'Petrarchan sonnet',
      definition:
        'The Italian form named after the poet Petrarch: an octave rhyming ABBAABBA followed by a sestet, whose rhymes vary more. Remember follows the octave pattern exactly; its sestet rhymes CDDECE, one of the less common patterns.',
    },
    {
      term: 'octave',
      definition:
        'The first eight lines of a Petrarchan sonnet. In Remember it is two four-line sentences, both asking to be remembered.',
    },
    {
      term: 'sestet',
      definition:
        'The last six lines of a Petrarchan sonnet. In Remember it is a single sentence that turns the request into permission to forget.',
    },
    {
      term: 'volta',
      definition:
        'The turn in a sonnet, where the argument or feeling changes direction. Here it falls at the start of line 9, on the word Yet.',
    },
    {
      term: 'iambic pentameter',
      definition:
        'A line of ten syllables in five pairs, each an unstressed syllable followed by a stressed one. Every line of Remember has ten syllables; lines 7 and 13 most clearly open instead on a stressed syllable, Only and Better.',
    },
    {
      term: 'imperative',
      definition:
        'A verb form that gives a command, such as Remember me and do not grieve. The poem moves from imperatives that ask to one that frees.',
    },
    {
      term: 'euphemism',
      definition:
        'A mild or indirect word used in place of a harsh one. Gone away and the silent land soften death until the sestet names the darkness and corruption of the grave.',
    },
    {
      term: 'antithesis',
      definition:
        'Setting opposed ideas side by side in balanced phrases, as in forget and smile against remember and be sad in the last two lines.',
    },
    {
      term: 'paradox',
      definition:
        'A statement that seems to contradict itself but makes sense on reflection. A poem called Remember that ends by recommending forgetting is often described as one.',
    },
    {
      term: 'direct address',
      definition:
        'Speaking straight to someone, here the beloved, as you. The beloved never answers, so the poem is a one-sided conversation.',
    },
  ],

  examPractice: {
    questions: [
      {
        question: 'Compare the ways the writers present remembering in ‘Piano’ and ‘Remember’.',
        skill:
          "Comparison essay on two named anthology poems: language, form and structure. Pearson set these two poems together in June 2024 (the Paper 1R variant); this wording is ours, built from that mark scheme's focus on remembering.",
        guidance: [
          "Open with a comparative argument, not a summary. For example: Lawrence presents remembering as something that happens to his speaker against his will, carrying him back into the past, while Rossetti presents it as something her speaker asks for, and then gives up, on behalf of someone else's future.",
          "Set up the difference in time. Lawrence's speaker is remembering his own childhood and his mother; Rossetti's speaker is imagining how she will be remembered after her death. One poem looks back, the other looks forward.",
          'In ‘Remember’, trace the verbs: remember five times, forget twice. Show how the command “Remember me” (lines 1 and 5) becomes permission after the volta, and how me disappears after line 9.',
          "In ‘Piano’, show memory overpowering the speaker: “In spite of myself”, “Betrays me back”, and the “flood of remembrance” that ends in “I weep like a child for the past”. Contrast that helplessness with the control of Rossetti's speaker.",
          'Compare sound and silence. Rossetti imagines death as “the silent land”; Lawrence fills his poem with singing, the boom and tingling of the strings and the tinkling piano. Explain what each soundscape does to the feeling.',
          "Compare form: Rossetti's Petrarchan sonnet, with its octave of asking and sestet of release, against Lawrence's three quatrains of long lines in rhyming couplets. Both are regular forms carrying strong emotion.",
          "Compare the endings: Lawrence's speaker is left weeping for the past, while Rossetti's would rather her lover “forget and smile”. End with a judgement on which poem presents remembering as the greater burden, and why.",
        ],
      },
      {
        question:
          'Compare the ways the writers convey feelings about love in ‘Sonnet 116’ and ‘Remember’.',
        skill:
          "Comparison essay on two named anthology poems: language, form and structure. Pearson used this pairing in its specimen paper; the wording is the abbreviated form in Pearson's summary of questions set.",
        guidance: [
          "Start from the form they share and how differently they use it. Shakespeare's is an English sonnet, three quatrains and a rhyming couplet; Rossetti's is Petrarchan, an octave and a sestet with no final couplet.",
          "Compare what love does over time. Shakespeare defines love by what it refuses to do: it does not alter, and “Love's not Time's fool”. Rossetti's love accepts change, and even allows itself to be forgotten.",
          "Compare attitudes to death. Shakespeare's love lasts “even to the edge of doom”; Rossetti's speaker accepts that after death “It will be late to counsel then or pray”.",
          'Compare the voices. Shakespeare argues in general terms about what love is and addresses no one directly; Rossetti speaks directly to one person, as you, about their own shared life.',
          "Compare the turns. Rossetti's volta at line 9 changes the request itself; Shakespeare's couplet stakes his whole argument on being right. Explain how each turn expresses a kind of certainty.",
          "Conclude with a judgement: which poem presents love as stronger? A strong answer might argue that Rossetti's love, which is willing to let go, asks more of the lover than Shakespeare's, which is sure it will never have to.",
        ],
      },
      {
        question:
          'Compare how the writers present attitudes to death in ‘Remember’ and one other poem from the anthology.',
        skill:
          'Comparison essay on two anthology poems, one chosen by you: language, form and structure',
        guidance: [
          'Choose a second poem that lets you argue about difference. ‘Do not go gentle into that good night’ is the clearest contrast: calm acceptance against fierce resistance.',
          "Open with the contrast in attitude. Rossetti's speaker accepts her own death and thinks about the survivor; Thomas's speaker cannot accept his father's, and urges him to “Rage, rage against the dying of the light”.",
          "Compare euphemism. Rossetti never uses the word death, and Thomas mostly avoids it: Rossetti's “the silent land” and Thomas's “that good night” are both gentle phrases, though Thomas does use the word once, in “Grave men, near death” (line 13). Show how Rossetti's poem eventually turns to the grave itself in “the darkness and corruption”.",
          "Compare imperatives. Both poems are built on commands about how to respond to death. Rossetti's move from “Remember me” to “do not grieve”, releasing the listener; Thomas's grow more urgent with each refrain.",
          'Compare form: two strict forms. The sonnet turns once, at line 9; the villanelle returns again and again to its two refrains. Explain how each structure fits the attitude it carries.',
          'End with a judgement on which poem offers more comfort to the person addressed, and why.',
        ],
      },
      {
        question:
          'Compare how the writers present the relationship between the living and the dead in ‘Remember’ and ‘Poem at Thirty-Nine’.',
        skill: 'Comparison essay on two named anthology poems: language, form and structure',
        guidance: [
          "Establish the two viewpoints. Walker's speaker is alive, remembering her father after his death; Rossetti's speaker imagines being the one who has died and is remembered.",
          'Compare the everyday details. Rossetti grounds love in holding hands and daily talk (lines 3 to 6); Walker remembers her father through practical things he taught her, such as writing deposit slips and cheques, and through the way he cooked.',
          "Compare how the dead live on. Walker's speaker finds her father in herself, cooking just as he did; Rossetti's speaker hopes for no more than a vestige and allows herself to be forgotten.",
          "Compare form: Walker's free verse in very short lines, like thoughts arriving one at a time, against Rossetti's regular sonnet. Consider what each form suggests about the speaker's feelings.",
          'Compare tone: warm, regretful and proud in Walker; tender and controlled in Rossetti. Quote briefly and analyse single words.',
          'Conclude on which poem presents memory as the stronger bond between the living and the dead.',
        ],
      },
    ],
    tips: [
      "Learn the anthology's punctuation. The anthology, like the 1862 first edition, prints line 5 as “Remember me when no more day by day” without commas; some editions, including the Project Gutenberg text, add two. If you comment on punctuation, use the anthology's.",
      'Quote line 8 exactly: “It will be late to counsel then or pray”. Do not add too: the line says late, and the quieter word is part of its effect.',
      '“Remember me” opens lines 1 and 5, not line 7. Line 7 opens with Only, and the phrase comes after it. Say anaphora for lines 1 and 5, and repetition for all three.',
      'Do not call lines 13 and 14 a rhyming couplet. The sestet rhymes CDDECE: smile rhymes with while in line 9 and sad with had in line 12. A Petrarchan sonnet has no closing couplet, which is one reason the ending feels like the end of an argument rather than a neat summary.',
      "Write the speaker, not Rossetti, and remember that the poem never states either person's gender. If you write she and he, as most readers do, make sure your point does not depend on it.",
      'Count what the poem avoids. It never uses the words death, dead or die. Building an argument around its substitutes, gone away, the silent land, the darkness and corruption, is more precise than simply naming euphemism.',
      'Track the small words: when (lines 1, 3 and 5) becomes if (lines 9 and 11), and me, six times in the first nine lines, never appears again. Small changes like these are what separate a strong answer from a competent one.',
      'Use biographical context accurately or not at all. The poem is dated 25 July 1849, when Rossetti was eighteen, before her engagement to James Collinson ended; it cannot be about the end of an engagement that had not yet ended.',
      'Explain the paradox rather than just naming it. A poem called Remember ends by preferring forgetting because the speaker decides that memory which brings sadness is not worth having.',
      'Keep the comparison running through every paragraph. Pearson has paired this poem with ‘Sonnet 116’ and with ‘Piano’, so be ready to write about love and about memory.',
    ],
  },

  modelAnswer: {
    question: 'Compare the ways the writers present remembering in ‘Piano’ and ‘Remember’.',
    paragraph:
      "Both poets present remembering as powerful and painful, but they approach it from opposite ends of time. Lawrence's speaker is carried backwards against his will: the song is “Taking me back down the vista of years”, and the admission “In spite of myself” shows memory overpowering the adult man until, in the “flood of remembrance”, he can only “weep like a child for the past”. Rossetti's speaker tries instead to direct memory forwards, into a future she will not see. The imperative “Remember me” opens lines 1 and 5 and returns in “Only remember me” (line 7), as though repetition could fix her in her lover's mind. Yet the volta turns command into permission. “Yet if you should forget me for a while” replaces the certainty of when with the possibility of if, and the word me, used six times in the first nine lines, never appears again, so the speaker quietly removes herself from her own request. By the final line, “remember and be sad” has become the outcome to avoid. Where Lawrence shows memory as a flood that sweeps away his manhood, Rossetti imagines it as a burden she can lift from someone else, and that makes her poem, for all its darkness and corruption, the more consoling of the two.",
    commentary: [
      "It opens with a comparative argument that distinguishes the two poems' ways of remembering, backwards and forwards in time, rather than summarising either poem.",
      'Its quotations are short, exact and embedded, and it analyses small choices: the repeated imperative, the change from when to if, and the disappearance of the word me after line 9.',
      'It treats structure as meaning, linking the volta at line 9 to the change from asking to be remembered to permitting forgetting.',
      'The comparison is integrated rather than bolted on: the second poem arrives with a clear pivot, instead, and each point about Rossetti is set against one about Lawrence, helplessness against control.',
      "It is careful about what the poem says, writing about the speaker and her lover rather than claiming the poem is about Rossetti's own life.",
      'It ends with a judgement that answers the question, which is what separates a strong answer from a competent survey of both poems.',
    ],
  },

  timeline: [
    {
      where: 'Octave, lines 1-4',
      title: 'Into the silent land',
      summary:
        'The speaker asks the beloved to remember them after death, which is imagined as going far away into a silent land where the lovers can no longer hold hands or linger over goodbyes.',
      setting: 'The present, looking ahead to the silent land',
      who: ['The speaker', 'The beloved'],
      quote: 'Gone far away into the silent land',
      themes: ['Death and the silent land', 'Memory and forgetting'],
      tension: 3,
      significance:
        'Death is introduced as a journey and as silence, the loss of touch and talk, without once being named.',
    },
    {
      where: 'Octave, lines 5-8',
      title: 'The future that was planned',
      summary:
        'The request is repeated. The speaker pictures the end of the daily talk about the future the beloved has planned, asks only to be remembered, and says that after death it will be late to counsel or pray.',
      setting: 'Everyday life together, seen as already ending',
      who: ['The speaker', 'The beloved'],
      quote: 'It will be late to counsel then or pray.',
      themes: ['Time and the lost future', 'Faith and its limits', 'Memory and forgetting'],
      tension: 4,
      significance:
        'The octave ends on the limits of what words and prayer can do, which prepares the ground for the turn.',
    },
    {
      where: 'Sestet, lines 9-12',
      title: 'The turn',
      summary:
        "At the volta the speaker changes direction: if the beloved forgets for a while and then remembers, they must not grieve. Lines 11 and 12 begin the reason, supposing that the darkness and decay of the grave might leave a trace of the speaker's thoughts.",
      setting: 'The grave, imagined from beyond it',
      who: ['The speaker', 'The beloved'],
      quote: 'Yet if you should forget me for a while',
      themes: ['Memory and forgetting', 'Death and the silent land', 'Love as letting go'],
      tension: 5,
      significance:
        'The poem turns to the physical reality of the grave for the first time, at the same moment as the speaker begins to release the beloved.',
    },
    {
      where: 'Sestet, lines 13-14',
      title: 'Forget and smile',
      summary:
        'The speaker concludes that it is far better for the beloved to forget and be happy than to remember and be sad, reversing the request with which the poem began.',
      setting: "The beloved's life after the speaker has gone",
      who: ['The speaker', 'The beloved'],
      quote: 'Better by far you should forget and smile',
      themes: ['Love as letting go', 'Memory and forgetting'],
      tension: 2,
      significance:
        "The title's command is overturned: love is finally measured by the survivor's happiness, not by the speaker's place in memory.",
    },
  ],

  relationships: [
    {
      from: 'The speaker',
      to: 'The beloved',
      kind: 'lovers who have planned a future',
      note: 'The speaker begins by asking to be remembered and ends by releasing the beloved from memory altogether. The relationship moves from a claim to a gift.',
    },
    {
      from: 'The beloved',
      to: 'The speaker',
      kind: 'the one who will be left behind',
      note: 'The beloved holds hands, talks day by day and plans their future, but never speaks in the poem. Everything we know of them is filtered through the speaker.',
    },
  ],

  compareWith: [
    {
      title: '‘Piano’ by D H Lawrence',
      href: '/igcse/edexcel/poetry/piano',
      reason:
        'Pearson paired the two in June 2024: both are about remembering, but Lawrence is overwhelmed by memories of his past while Rossetti imagines how she will be remembered in the future.',
    },
    {
      title: '‘Sonnet 116’ by William Shakespeare',
      href: '/igcse/edexcel/poetry/sonnet-116',
      reason:
        "Pearson's specimen paper paired them on feelings about love: two sonnets, one insisting love never alters, the other allowing itself to be forgotten.",
    },
    {
      title: '‘Do not go gentle into that good night’ by Dylan Thomas',
      href: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
      reason:
        'Opposite attitudes to death in strict forms: calm acceptance and release in a sonnet, furious resistance in a villanelle.',
    },
    {
      title: '‘Poem at Thirty-Nine’ by Alice Walker',
      href: '/revision/texts/poem-at-thirty-nine',
      reason:
        'The same bond seen from the other side: Walker remembers a dead parent through everyday details, while Rossetti imagines being the one remembered.',
    },
  ],

  contentGuidance: ['mortality', 'intimate_relationships', 'mythological_religious'],

  quotesFromElsewhere: [
    'It is sown in corruption; it is raised in incorruption',
    'Until the morning of Eternity',
    'remember me when thou comest into thy kingdom',
    'Had such a lady spoken for herself',
    'Taking me back down the vista of years',
    'In spite of myself',
    'Betrays me back',
    'flood of remembrance',
    'I weep like a child for the past',
    'weep like a child for the past',
    "Love's not Time's fool",
    'even to the edge of doom',
    'Rage, rage against the dying of the light',
    'that good night',
    'Grave men, near death',
  ],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 3, page 70: the poem as prescribed, its punctuation (line 5 without commas), its single-block layout, and line numbers at 5 and 10; no footnotes. Every quotation checked against this text. Pages 57, 59, 62 and 69 (Piano, Sonnet 116, Poem at Thirty-Nine, Do not go gentle into that good night) read for the comparison questions and the model answer.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        "Poems, Christina Rossetti, Project Gutenberg eBook #19188 (the 1876 author's edition, revised and enlarged, in a Boston printing by Little, Brown and Company, 1906): the held edition (src/data/full-texts/remember.ts), headed Remember. Sonnet., same words as the anthology with two extra commas in line 5.",
      url: 'https://www.gutenberg.org/ebooks/19188',
    },
    {
      label:
        'Goblin Market and Other Poems (1862, first edition), page 58, proofread transcription on Wikisource: headed Remember with the subtitle Sonnet; wording and punctuation identical to the anthology, line 5 without commas. Pages 57 and 59 confirm it sits between A Birthday and After Death.',
      url: 'https://en.wikisource.org/wiki/Page:Goblin_Market_and_Other_Poems_-_C_G_Rossetti_(1862,_1st_ed).djvu/74',
    },
    {
      label:
        "The Poetical Works of Christina Georgina Rossetti, with memoir and notes by William Michael Rossetti (Macmillan, 1904), Internet Archive text: Remember dated 25 July 1849; Rest dated 15 May 1849; Song (When I am dead, my dearest) dated 12 December 1848; the memoir on James Collinson (the attachment first began in 1848 and ended in 1850, or possibly late in 1849, when she cancelled the engagement after he returned to Roman Catholicism) and on Charles Cayley (she declined his proposal); her place in the Tractarian or High Church party; the editor's list placing Remember among her poems on death; the prefatory note to Monna Innominata.",
      url: 'https://archive.org/details/poeticalworksofc00ross',
    },
    {
      label:
        "Goblin Market, The Prince's Progress, and Other Poems (World's Classics, Oxford University Press, 1913), Project Gutenberg eBook #16950: born 5 December 1830 at 38 Charlotte Street, London, died 29 December 1894; Goblin Market and Other Poems first published 1862; its contents order; the texts of Rest and After Death.",
      url: 'https://www.gutenberg.org/ebooks/16950',
    },
    {
      label:
        'Wikipedia, Christina Rossetti: birth and death dates; the family absorbed in the Anglo-Catholic movement; engaged in her late teens to James Collinson, ended 1850 when he reverted to Catholicism; declined to marry Charles Cayley, involved with him 1864 to 1866, because he was agnostic; Goblin Market and Other Poems published by Macmillan in 1862.',
      url: 'https://en.wikipedia.org/wiki/Christina_Rossetti',
    },
    {
      label:
        'Academy of American Poets, Remember: a further text printing line 5 without commas, as the anthology does.',
      url: 'https://poets.org/poem/remember',
    },
    {
      label:
        'Poems (Rossetti, 1901), page 105, proofread transcription on Wikisource: headed Remember. Sonnet.; line 5 without commas, as the anthology prints it.',
      url: 'https://en.wikisource.org/wiki/Page:Poems_Rossetti.djvu/133',
    },
    {
      label:
        'The Victorian Web, Christina Rossetti, additional biographical information: dates the Collinson engagement to the autumn of 1848. Other biographies place it in 1849, so the guide says only that the poem was written before the engagement ended.',
      url: 'https://victorianweb.org/authors/crossetti/rossettibio1.html',
    },
    {
      label:
        "Pearson, Summary of questions set for 4ET1, SAMs to January 2019 (Issue 1, February 2021): the specimen paper's Section B question compared the ways the writers convey feelings about love in Sonnet 116 and Remember; the section heading describes it as assessing language, form and structure. The table abbreviates questions.",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/summary-of-questions-set-for-4et1-sams-to-january-2019.pdf',
    },
    {
      label:
        "Pearson, Mark Scheme (Results) June 2024, International GCSE English Literature 4ET1, Paper 1R: Poetry and Modern Prose (publications code 4ET1_01R_2406_MS): Section B question 2 on Piano and Remember, with indicative content centred on remembering, including the reading that you planned may suggest the speaker knew something first or that the partner was controlling, and the description of the title against the ending as a paradox. The question's exact wording was not available, so the guide's version is marked as its own. Re-read on 26 September 2026: the indicative content calls the speaker Rossetti, says the pronoun you could suggest she knew she was ill before he did or that he was controlling, and calls the title against the final lines a paradox.",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01r-rms-20240822.pdf',
    },
    {
      label:
        'King James Bible at Bible Gateway: Luke 23:42 (remember me when thou comest into thy kingdom) and 1 Corinthians 15:42 (It is sown in corruption; it is raised in incorruption).',
      url: 'https://www.biblegateway.com/passage/?search=Luke%2023%3A42%3B1%20Corinthians%2015%3A42&version=KJV',
    },
    {
      label:
        'The Book of Common Prayer (1662), The Order for the Burial of the Dead: the Lesson taken from the fifteenth chapter of 1 Corinthians, including the verse on corruption and incorruption.',
      url: 'https://www.eskimo.com/~lhowell/bcp1662/occasion/burial.html',
    },
    {
      label:
        'The Complete Poetical Works of Henry Wadsworth Longfellow, Project Gutenberg eBook #1365: Song of the Silent Land, translated from Johann Gaudenz von Salis-Seewis. Undated in this edition, so the guide does not claim it preceded Rossetti.',
      url: 'https://www.gutenberg.org/ebooks/1365',
    },
    {
      label: 'Wikipedia, Johann Gaudenz von Salis-Seewis: Swiss poet, 1762 to 1834.',
      url: 'https://en.wikipedia.org/wiki/Johann_Gaudenz_von_Salis-Seewis',
    },
    {
      label:
        'Wikipedia, Petrarch and Petrarchan sonnet: the octave rhyming ABBAABBA followed by a sestet; the volta at the start of the sestet; Laura as the central figure of his love poetry, died 1348.',
      url: 'https://en.wikipedia.org/wiki/Petrarchan_sonnet',
    },
    {
      label:
        'Wiktionary, counsel, pray, grieve, corruption and vestige: the senses used in the vocabulary, including counsel as consultation or a plan, pray as to beg a person, corruption as putrefaction, and vestige from Latin vestigium, a footprint.',
      url: 'https://en.wiktionary.org/wiki/vestige',
    },
  ],
}
