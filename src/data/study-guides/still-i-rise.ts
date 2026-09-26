import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Still I Rise, Maya Angelou (1978). A supplement: the page at
 * /igcse/edexcel/poetry/still-i-rise keeps its overview, context and form
 * sections, and this file adds the eight it lacked.
 *
 * WORDING. Every quotation was checked against the poem as printed on page 29
 * of the Pearson Edexcel International GCSE English Anthology, Issue 8
 * (February 2026), read from Pearson's own PDF, and cross-checked against the
 * Academy of American Poets' text. Line numbers are the anthology's, which
 * prints one beside every fifth line. The January 2019 question paper printed
 * the poem without line numbers and ended line 16 with a question mark where
 * Issue 8 has a full stop, so nothing here counts the poem's questions.
 *
 * THE QUOTATION BUDGET. The poem is 240 words, so the site's limit of 15 per
 * cent (fair-dealing.ts) allows 36 distinct words on this page, and this file
 * uses all 36. Deciding which 36 words carry the most analysis was the design
 * problem; everything else is located by line number and paraphrased.
 *
 * THE BUDGET IS THIS FILE'S, NOT THE MOUNTED PAGE'S. The page above also
 * quotes the line 12 refrain, the gold mines, air and the tide, which this file
 * does not. Measured together the two come to 43 distinct words, 18 per cent,
 * so the share holds for the combined page only once the page above drops
 * those four quotations, which are also the ones carrying its factual errors.
 *
 * THE PAGE ABOVE, checked while this was written, is right about the stanza
 * shape and wrong in places: it tags the poem to English Literature (4ET1),
 * which does not set it; it says the refrain ends every stanza (only stanzas
 * 1, 3 and 6 end on it before stanza 8); it calls air and the tide the closing
 * image (they are lines 24 and 34); its comparison poems Half-Caste and If-
 * are Part 3 texts that 4EA1 does not examine; and its Mandela claim is
 * unverified.
 */
export const guide: StudyGuide = {
  slug: 'still-i-rise',
  title: 'Still I Rise',
  author: 'Maya Angelou',
  form: 'poem',
  scope:
    'The whole poem, as printed on page 29 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 2: nine stanzas, 43 lines. Line numbers in this guide follow the anthology, which prints one beside every fifth line. Set for Pearson Edexcel International GCSE English Language A (4EA1): Paper 2 Section A, and the non-examined assessment.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Maya Angelou 1978. From And Still I Rise (Random House, 1978; Virago Press, 1986), as printed in the Pearson Edexcel International GCSE English Anthology. Quoted briefly for criticism and review.',
  },
  workLength: {
    words: 240,
    lines: 43,
    basis:
      "Counted on 25 September 2026 from page 29 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), in Pearson's own PDF: 43 lines in nine stanzas (seven quatrains, then stanzas of six and nine lines), 240 words by the validator's word count, title and author line excluded. The line count matches the anthology's own line numbering, which reaches 40 at the line beginning I am.",
  },

  native: {
    overview: '/igcse/edexcel/poetry/still-i-rise',
    context: '/igcse/edexcel/poetry/still-i-rise',
    structureForm: '/igcse/edexcel/poetry/still-i-rise',
  },

  themes: [
    {
      title: 'Resilience and defiance',
      body: 'The title and the refrain carry the central idea: whatever is done to her, the speaker will rise. What lifts the poem above a plain statement of endurance is its tone. This is not quiet, patient survival but defiance with a smile. The seven quatrains move between provocation and promise: stanzas 2, 4, 5 and 7 needle the addressee with questions, while stanzas 1, 3 and 6 end with the vow that she will rise. The similes tie that rising to things nobody can stop, from dust under a foot in line 4 to the “certainty of tides” in line 10. One reading calls this resilience, the ability to recover from harm. A more convincing reading, given how much of the poem mocks its listener, calls it resistance: a refusal to accept that the harm was deserved, or that it could ever work. The difference is worth making in an exam. Resilience describes only the speaker; resistance describes a relationship, and for seven stanzas this poem is spoken to someone.',
    },
    {
      title: 'History, slavery and memory',
      body: "The poem begins with history and ends with it. Lines 1 and 2 accuse the addressee of writing the speaker into history with lies, and the last two stanzas answer with a history of her own, reaching back to the “huts of history’s shame” and forward to the moment she becomes “the dream and the hope of the slave”. Angelou was born in 1928, sixty-three years after the Thirteenth Amendment abolished slavery in the United States, and after her parents divorced she spent much of her childhood in Stamps, Arkansas, where her grandmother kept a store in the town's Black district. The poem does not narrate that history. It compresses it into a journey out of a painful past, through nights of fear, into dawn. Its argument is that history cannot be undone but can be risen out of, and that her confidence is her ancestors' hope made real. Is the speaker one woman or a whole people? The poem's answer seems to be both, which is why a single voice carries so much weight by the end.",
    },
    {
      title: 'Pride, joy and the body',
      body: "Stanzas 2, 5 and 7 share a shape: a question about whether one of her qualities offends, then a simile of wealth. The qualities grow bolder, from “sassiness” to “haughtiness” to “sexiness”, and so do the actions that go with them, from walking to laughing to dancing. The speaker is proud of her body and of her pleasure in it, and she presents that pride as the thing the addressee finds hardest to bear. Read against the history the poem turns to in stanza 8, this matters: enslaved people, women included, were treated in law as property, so a Black woman celebrating her own body in public can be read as reclaiming it. The examiners' report on the January 2019 paper, which set this poem, noted that stronger answers linked it to race and to feminism. A lighter reading is also available, in which this is simply joyful, comic self-confidence, and the playfulness of the similes supports it. The best answers hold both readings at once rather than choosing.",
    },
    {
      title: 'Words, looks and power',
      body: "The addressee's one physical attack, trampling her into the dirt in line 3, is over in a single line. Their other weapons are writing and lies (lines 1 and 2), a watching eye that wants to see her defeated (lines 13 to 16), and speech, looks and hatred (lines 21 to 23). The poem is therefore mostly about the power of language and of the gaze: the power to describe a person, to expect them to look beaten, to make them feel watched. Angelou fights on the same ground. The poem is itself a piece of writing that answers a false history, and its questions turn the gaze round, so that it is the addressee who is examined and found gloomy, upset and surprised. Then, after stanza 7, the addressee is not spoken to at all. One reading, and a persuasive one, is that this silence is the final victory: the person who tried to write her story has been written out of hers.",
    },
  ],

  characters: [
    {
      name: 'The speaker',
      role: 'The poem’s voice: a proud Black woman speaking straight to the person who has tried to diminish her.',
      body: "Most readers hear Angelou herself, and the poem invites that, but in an answer it is safer to write about the speaker; the January 2019 exam question called her the narrator. She changes tone constantly: mocking in the questions, comic in the similes of wealth, sensual in stanza 7, solemn in stanzas 8 and 9. What stays constant is control. She never pleads, never describes her suffering in detail and never asks for anything, and even when she lists the violence the addressee may do her in lines 21 to 23, the stanza ends with her rising. By the last two stanzas she is speaking for more than herself: she carries her ancestors' gifts and becomes their hope. It is worth knowing that Angelou stopped speaking for several years after a traumatic experience at the age of eight. A poem made entirely of voice, by a writer who once fell silent, is a link some readers find moving, though the poem itself does not mention it.",
    },
    {
      name: 'The addressee',
      role: 'The unnamed “you” of the first seven stanzas: whoever has tried to write the speaker down.',
      body: "The addressee is never named, described or allowed to reply. We know them only by what they do: they record lies, trample, stare, wound with words, and are upset, gloomy and surprised by her. They can be read as white racist America, as one particular bigot, as a man who resents a confident woman, or as anyone who has tried to make another person feel small. The vagueness is deliberate and useful: it lets any reader who has been belittled stand in the speaker's place, and any oppressor recognise themselves. Structurally the addressee fades out. Stanza 3 is the only quatrain without them, and after stanza 7 they vanish, so that by the end the poem is no longer an argument with them but a celebration without them.",
    },
    {
      name: 'The ancestors',
      role: 'The enslaved people the speaker descends from, present only in the last two stanzas.',
      body: "They never speak and are named only in lines 39 and 40, yet they change the meaning of the whole poem. Up to stanza 7, her rising could be one woman's self-respect; once the ancestors appear, it becomes the fulfilment of a people's history. She describes herself as bringing what they gave her, so her confidence is an inheritance rather than an accident, and she herself is “the dream and the hope of the slave”. The movement of stanzas 8 and 9, from the huts to the dawn, places her at the exact point where their past becomes her future.",
    },
  ],

  keyQuotes: [
    {
      text: 'You may write me down in history',
      where: 'Stanza 1, line 1',
      analysis:
        'The poem opens with direct address and a verb of recording. The addressee’s first weapon is not a whip or a law but a pen: to write someone down is to set down their story, and the phrase can also suggest belittling them in writing. The modal verb “may” sounds like a concession, but it reads as a grant of permission from someone who does not fear the result. Line 2 reveals that this history is made of lies, so the first battle in the poem is over who tells the story, and the poem itself becomes the counter-record.',
    },
    {
      text: 'like dust, I’ll rise',
      where: 'Stanza 1, line 4',
      analysis:
        'The first simile chooses the humblest material imaginable. Dust is what gets trodden on, which is exactly what line 3 has just described, but dust also lifts when it is stamped on: the harder the foot comes down, the more of it rises. The image turns the oppressor’s violence into the cause of her rising. Some readers also hear a biblical echo, dust as what humans are made of and return to, so that rising from it suggests resurrection. That reading is possible, but the physical picture of dust kicked up by a trampling foot is stronger, because it grows directly out of the line before.',
    },
    {
      text: 'sassiness',
      where: 'Stanza 2, line 5',
      analysis:
        'The question in line 5 asks whether her “sassiness” upsets the addressee, and it is not really a question: she knows it does, and enjoys it. Sassiness is cheeky, lively confidence, and the word is often used to tell someone off rather than to praise them. By naming it herself, proudly, she takes a word used to criticise her and wears it as a compliment. She repeats the move with “haughtiness” in line 17 and “sexiness” in line 25, so the three nouns become a pattern an answer can trace across the poem.',
    },
    {
      text: 'oil wells',
      where: 'Stanza 2, line 7',
      analysis:
        'The first of three similes of private wealth: she walks as though oil were being pumped up inside her own home, and later she laughs as though gold were being mined behind her house (lines 19 to 20) and dances as though she possessed precious stones (lines 27 to 28). The hyperbole is comic and knowingly over the top, which is part of the provocation. But the three similes place the riches in her own space, first her home, then her garden, finally her own body, so her worth is presented as natural and hers, not something granted by anyone else.',
    },
    {
      text: 'certainty of tides',
      where: 'Stanza 3, line 10',
      analysis:
        'Stanza 3 is the only quatrain with no second person in it, and it is all nature: the moon, the sun, the tides and hope itself, each rising. The abstract noun “certainty” carries the point. Tides do not try to come in; they come in because the moon pulls them. So her rising is presented as a law of nature rather than an act of will, something the addressee can no more stop than the sea. Setting a feeling such as hope in the same list as the sun and moon makes it sound as reliable as astronomy.',
    },
    {
      text: 'huts of history’s shame',
      where: 'Stanza 8, line 29',
      analysis:
        'This is the turn of the poem. The quatrains end, the addressee disappears, and the speaker places herself inside a much longer story. The huts suggest the cabins where enslaved people were made to live, and the alliteration binds the huts to history. Crucially the shame belongs to history, not to her: she rises out of it. The line is followed by a two-word line of its own, so the structure makes the rising visible on the page, a short line lifted clear of a long, heavy one.',
    },
    {
      text: 'the dream and the hope of the slave',
      where: 'Stanza 9, line 40',
      analysis:
        'At ten words this is the poem’s longest line by word count, and one of only two, with the ocean metaphor of line 33, in which she says what she is rather than what she does. She becomes the answer to her ancestors’ longing: what the enslaved could only dream of and hope for, she now is. Her rising is therefore collective as well as personal. For a reader in 1978, fifteen years after Martin Luther King Jr.’s I Have a Dream speech at the March on Washington, the word “dream” may also recall that speech. The poem does not say so, but the echo fits its movement from past suffering to future promise.',
    },
    {
      text: 'I rise',
      where: 'Stanza 9, lines 41-43 (first at line 30)',
      analysis:
        'The refrain in its final form. Three times earlier the speaker promised, in the future tense, that she would rise; from line 30 she says it in the present tense, seven times, and the last three stand alone as the poem’s final lines. The promise has become a fact, happening as we read. The repetition works like the close of a chant, and only the very last carries a full stop: nothing the addressee could say can follow it. The January 2019 examiners’ report praised an answer that offered several interpretations of this one phrase, so be ready to say what the rising means, not only that it happens.',
    },
  ],

  extracts: [
    {
      title: 'The opening challenge',
      where: 'Stanza 1, lines 1-4',
      pointer:
        'The first stanza, from “You may write me down in history” to “like dust, I’ll rise”: anthology page 29, lines 1 to 4.',
      summary:
        'The speaker turns on an unnamed opponent. She concedes that they can set her down in history with spiteful lies and can trample her into the ground, then answers both attacks in the last line: despite everything, she will rise, as dust does when it is trodden on. The stanza sets the pattern of the whole poem, attack answered by recovery.',
      annotations: [
        {
          phrase: 'You may',
          note: 'The modal verb grants permission rather than asking for it, so the speaker is the one deciding what the addressee is allowed to do, and she fears none of it.',
        },
        {
          phrase: 'write me down in history',
          note: 'The addressee’s first weapon is writing: the power to record a person and to belittle them. The poem answers that written account with a written account of its own.',
        },
        {
          phrase: 'still',
          note: 'The first word of the title enters the poem here. It means nevertheless, in spite of this, and also even now, as it always has been, so her rising is both a defiance and a habit.',
        },
        {
          phrase: 'like dust, I’ll rise',
          note: 'After three lines of attack, one line of recovery. The humblest thing, trodden into the ground in line 3, is exactly what lifts when stamped on.',
        },
      ],
      question:
        'How does Angelou use the first stanza to establish the relationship between the speaker and the person she addresses?',
    },
    {
      title: 'Provocation, then certainty',
      where: 'Stanzas 2-3, lines 5-12',
      pointer:
        'From the question about her “sassiness” in line 5 to the refrain at the end of line 12: anthology page 29.',
      summary:
        'Stanza 2 asks the addressee why her confidence upsets them and leaves them so gloomy, and explains with a comic simile: she walks as if oil were being pumped up inside her home. Stanza 3 then leaves the addressee out entirely and compares her rising to the moon, the sun, the tides and hope, ending on the promise that she will rise.',
      annotations: [
        {
          phrase: 'sassiness',
          note: 'An abstract noun for cheeky confidence, usually a criticism. Naming it herself, and asking whether it upsets them, turns a telling-off into a boast.',
        },
        {
          phrase: 'beset',
          note: 'A formal, rather grand word for being surrounded by trouble. Using it for the addressee’s sulk makes their gloom sound faintly ridiculous, which is the point of the taunt.',
        },
        {
          phrase: 'oil wells',
          note: 'Hyperbole: her walk is compared to owning a fortune gushing up out of the ground in her own home, so her pride is wealth that nobody gave her and nobody can take.',
        },
        {
          phrase: 'certainty of tides',
          note: 'The noun certainty is the key. Like the tides pulled by the moon, her rising is presented as a law of nature, not a hope that might fail.',
        },
      ],
      question:
        'How does the writer use the contrast between stanzas 2 and 3 to present the speaker’s confidence?',
    },
    {
      title: 'Rising out of history',
      where: 'Stanzas 8-9, lines 29-43',
      pointer:
        'From “huts of history’s shame” in line 29 to the final “I rise” in line 43: anthology page 29, the last two stanzas.',
      summary:
        'The quatrains give way to two longer stanzas in which long lines mostly alternate with the short refrain, and the addressee is no longer spoken to. The speaker rises out of a shameful and painful past, declares herself an ocean, puts nights of fear behind her for a clear dawn, brings the gifts of her ancestors and names herself their dream, before the refrain repeats three times on its own.',
      annotations: [
        {
          phrase: 'huts of history’s shame',
          note: 'The huts suggest the quarters where enslaved people lived. The shame is placed on history rather than on her, and she rises out of it.',
        },
        {
          phrase: 'I rise',
          note: 'Now in the present tense and set on its own line after a long one, the short refrain looks like what it says: a line lifting clear of the weight above it.',
        },
        {
          phrase: 'the dream and the hope of the slave',
          note: 'Her success becomes the answer to her ancestors’ longing, so a personal rising turns collective and historical in the line with more words than any other.',
        },
      ],
      question:
        'How does the change of structure in the last two stanzas help to present the speaker’s feelings about the past and the future?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Direct address and anaphora',
      example: '“You may” begins lines 1, 3, 21, 22 and 23.',
      effect:
        'The repeated opening sounds like a list of charges read out in court, but the modal verb grants rather than obeys: the speaker gives the addressee permission to do their worst, because none of it will work. The anaphora also builds pressure towards the turn that follows each run, the conjunction of contrast that opens lines 4 and 24 and leads into the promise to rise.',
    },
    {
      technique: 'Similes of natural force',
      example:
        '“like dust, I’ll rise” (line 4); the moon, the sun and the “certainty of tides” (lines 9 to 10); the comparison with air (line 24).',
      effect:
        'Each simile compares her rising to something that happens whether anyone wants it to or not. Dust lifts when trodden on, tides turn because the moon pulls them, air cannot be held down. Her survival becomes a law of nature rather than a stroke of luck, which quietly tells the addressee that resisting her is as pointless as resisting the sea.',
    },
    {
      technique: 'Rhetorical questions',
      example:
        'The questions of stanzas 2, 4, 5 and 7, beginning with whether her “sassiness” upsets the addressee (line 5).',
      effect:
        'None of them expects an answer. They are taunts that make the addressee own feelings they would rather hide, while the speaker stays cool. In stanza 4 they are sharper: they expose what the addressee secretly hoped to see, a defeated woman with her head down and her eyes on the ground. The examiners reported in 2019 that many answers named rhetorical questions without explaining them; the explanation is that the questions reverse the power, putting the addressee under examination.',
    },
    {
      technique: 'Hyperbole in similes of wealth',
      example:
        'Her walk is compared to owning “oil wells” (lines 7 to 8), her laugh to owning a gold mine (lines 19 to 20), her dancing to owning precious stones (lines 27 to 28).',
      effect:
        'The exaggeration is comic and deliberately over the top, part of the fun of annoying the addressee. The three similes share a pattern: each places the riches in her own space, moving from her home to her garden and finally to her own body, so her worth is natural and private, not awarded by anyone. One reading adds a historical irony, that people once treated as property now carry themselves as though they owned a fortune.',
    },
    {
      technique: 'Abstract nouns with a shared suffix',
      example:
        '“sassiness” (line 5), “haughtiness” (line 17) and “sexiness” (line 25), set against the addressee’s “hatefulness” (line 23).',
      effect:
        'Each of her nouns names a quality that others might hold against a confident woman, and each time she names it herself, proudly, as if taking a weapon out of the addressee’s hand. The matching suffix makes them a set, three faces of one confidence. The addressee is given only one such noun, and the ugliest: her qualities are forms of pleasure in herself, theirs is a feeling aimed at someone else.',
    },
    {
      technique: 'Violent verbs in a tricolon',
      example:
        'Lines 21 to 23: three verbs of violence, ending in killing, each carried out with something that is not a weapon (speech, a look, hatred).',
      effect:
        'The rule of three builds to the worst possible attack, and the metaphors show how prejudice harms: through language, looks and feeling rather than fists. Line 24 answers all three at once with a simile of air, which cannot be shot, cut or killed. Three blows and one recovery make the stanza a small model of the whole poem.',
    },
    {
      technique: 'Refrain and change of tense',
      example:
        '“I’ll rise” at lines 4, 12 and 24; then “I rise” seven times, from line 30 to the end.',
      effect:
        'While the addressee is still being spoken to, rising is a promise in the future tense. Once the poem turns to history it becomes a present-tense fact, happening as the poem is read. The last three repetitions stand alone as the closing lines, like the end of a chant, and only the final one carries a full stop. Rising has stopped being something she will do and become what she is.',
    },
    {
      technique: 'From simile to metaphor',
      example:
        'The comparisons with “like” run from line 4 to line 27 and then stop; stanzas 8 and 9 say what she is, an ocean in line 33 and “the dream and the hope of the slave” in line 40.',
      effect:
        'The shift from simile to metaphor is a shift from resemblance to identity. In the quatrains she is compared to dust, to air, to a woman with “oil wells”; in the last two stanzas she simply is something vast. The addressee disappears at the same moment, which suggests that she no longer needs comparisons that answer someone else’s view of her. She can define herself directly.',
    },
    {
      technique: 'Colloquial, spoken language',
      example: 'The dropped letters of lines 7, 19 and 20, and the casual phrasing of line 18.',
      effect:
        'The speaker talks rather than recites. The contractions and clipped endings echo informal spoken English, which many readers hear as African American speech in particular, so the poem sounds like a voice in a room, cheeky and at ease, rather than a formal complaint. One reading goes further: declining the polished register of the people who wrote her down is part of the defiance. The spoken voice also makes the poem easy to perform aloud, which suits its closing chant.',
    },
    {
      technique: 'Rhyme on the sound of the key word',
      example: 'In five of the seven quatrains, lines 2 and 4 rhyme on the vowel sound of “rise”.',
      effect:
        'Even where the refrain is absent, its sound keeps returning at the ends of lines, so the idea of rising is heard throughout the poem before it takes over the last two stanzas. This is rhyme with a job to do, and saying what the job is matters: the 2019 examiners reported that weaker answers noted rhyme without saying what it was for.',
    },
    {
      technique: 'Imagery of darkness and dawn',
      example: 'The move from night-time fear in line 35 to a clear dawn in line 37.',
      effect:
        'The last stanza turns centuries of history into nights that end in a single dawn. Darkness stands for the fear of the past and daybreak for the future, and the speaker is placed at the moment the light arrives. Coming straight after the huts and the pain of stanza 8, the dawn gives the poem its note of hope and prepares for the ancestors’ dream three lines later.',
    },
  ],

  vocabulary: [
    {
      term: 'Sassiness (line 5)',
      definition:
        'Lively, cheeky confidence, especially in answering back. Often used to tell someone off rather than to praise them, which is why the speaker’s pride in it is defiant.',
    },
    {
      term: 'Beset (line 6)',
      definition:
        'Surrounded or troubled by something, usually difficulties. A formal, slightly grand word; using it for the addressee’s sulk makes their gloom sound faintly absurd.',
    },
    {
      term: 'Haughtiness (line 17)',
      definition:
        'A proud, superior manner, as if looking down on others. Normally an insult; the speaker claims it as a virtue.',
    },
    {
      term: 'Hatefulness (line 23)',
      definition:
        'Being full of hate. The only noun of this kind in the poem that belongs to the addressee rather than to the speaker.',
    },
    {
      term: 'Speaker (or persona)',
      definition:
        'The voice of a poem, which may or may not be the poet. The January 2019 exam question called her the narrator; either word works, but do not assume every line is autobiography.',
    },
    {
      term: 'Addressee',
      definition:
        'The person a poem speaks to. Here an unnamed you, never described and never allowed to reply, who disappears after stanza 7.',
    },
    {
      term: 'Anaphora',
      definition:
        'Repeating the same word or words at the start of successive lines, as with “You may” in lines 1, 3 and 21 to 23. It builds rhythm and pressure, like a list of charges.',
    },
    {
      term: 'Refrain',
      definition:
        'A line or phrase repeated through a poem or song. This poem’s refrain changes tense, from a promise about the future to a fact about the present.',
    },
    {
      term: 'Rhetorical question',
      definition:
        'A question asked for effect rather than for an answer. The speaker’s questions are taunts that expose the addressee’s feelings.',
    },
    {
      term: 'Simile',
      definition:
        'A comparison using like or as. The poem’s similes compare her rising to dust, the tides and air, and her confidence to great wealth.',
    },
    {
      term: 'Metaphor',
      definition:
        'A comparison that says one thing is another. In the last two stanzas the similes give way to metaphors, as she declares what she is.',
    },
    {
      term: 'Hyperbole',
      definition:
        'Deliberate exaggeration for effect, as in the similes of oil, gold and precious stones in stanzas 2, 5 and 7.',
    },
    {
      term: 'Tricolon (rule of three)',
      definition:
        'A group of three parallel words, phrases or clauses. Lines 21 to 23 use one to build three attacks towards the most extreme.',
    },
    {
      term: 'Quatrain',
      definition:
        'A stanza of four lines. The first seven stanzas are quatrains; the last two, of six and nine lines, break the pattern.',
    },
    {
      term: 'Oppression',
      definition:
        'The unjust, cruel use of power over a group of people, usually over a long time. The poem never uses the word, but it is the usual name for what the addressee does.',
    },
    {
      term: 'Thirteenth Amendment',
      definition:
        'The change to the United States Constitution that abolished slavery, passed by Congress on 31 January 1865 and ratified on 6 December 1865.',
    },
    {
      term: 'Southern Christian Leadership Conference',
      definition:
        'The civil-rights organisation led by Martin Luther King Jr., for which Angelou worked as its northern coordinator.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Past paper, January 2019. How does the writer try to present strong emotions in Still I Rise? In your answer, you should write about: how the narrator of the poem feels about herself; how the narrator of the poem feels about others; the use of language and structure. You should support your answer with close reference to the poem, including brief quotations.',
        skill:
          'Language and structure analysis across the whole poem, with understanding of its ideas and perspectives',
        guidance: [
          'Open with a short overview that names the emotions and where they point: pride and joy about herself; scorn, amusement and defiance towards the addressee; a solemn, shared hope by the end. Skip a general introduction about Angelou.',
          'How she feels about herself: the three nouns “sassiness”, “haughtiness” and “sexiness”, the similes of wealth, and the metaphors of the last two stanzas, where she says what she is.',
          'How she feels about others: the addressee (the taunting questions, the defeated figure they hoped to see in stanza 4, the violence of stanza 6), then the ancestors, towards whom the emotion becomes gratitude and pride in an inheritance.',
          'Language: the similes of natural force and what “certainty” implies; the hyperbole of the wealth similes; the violent verbs of lines 21 to 23; the spoken voice.',
          'Structure: provocation stanzas and rising stanzas; the change from quatrains to longer stanzas; the addressee disappearing after stanza 7; the refrain changing from future to present; the three final lines standing alone.',
          'Weave in context briefly, where it explains an effect: the history of slavery behind stanzas 8 and 9, and the race and gender behind the pride in stanza 7. Never a paragraph of biography.',
          'Choose references that support different points rather than several that prove the same one, and embed them in your sentences.',
          'End with a judgement: which emotion wins by the end, and how the structure makes it win.',
        ],
      },
      {
        question:
          'How does the writer present the speaker’s relationship with the past in Still I Rise? In your answer, you should write about: how the speaker presents what has been done to her and to her people; how she presents her ancestors and her own future; the use of language and structure. You should support your answer with close reference to the poem, including brief quotations.',
        skill: 'Language and structure analysis, following one idea through the whole poem',
        guidance: [
          'Argue from the first sentence: the past in this poem is something others have tried to write for her, and something she rewrites as her own.',
          'Start with line 1: history as an account written by the addressee, and made of lies. Explain why the fight over who writes history matters.',
          'Show what has been done to her in the quatrains, mostly in metaphors of trampling, staring and wounding, and how each attack is answered by rising.',
          'Analyse the turn at stanza 8: the huts, the pain, the disappearance of the addressee, and the long lines followed by the short refrain.',
          'Analyse the ancestors in lines 39 and 40: inheritance, gifts and “the dream and the hope of the slave”. Consider whether the speaker is now one woman or a people.',
          'Trace the movement through time: future-tense promises, then present-tense rising, then the night-to-dawn imagery of stanza 9. Explain what it suggests about how the past can be survived.',
          'Conclude by evaluating: does the poem free her from the past, or make her its heir? The most convincing answer is probably both, and saying why is what lifts an answer.',
        ],
      },
      {
        question:
          'An example task for the non-examined assessment, where tasks are devised by teachers or students. Explore how writers present people who refuse to accept the limits others place on them, in Still I Rise and two other texts from Part 2 of the anthology, at least one of them prose.',
        skill:
          'Non-examined assessment: an essay on three Part 2 texts, with at least one poem and one prose text',
        guidance: [
          'Choose texts that contrast. The Story of an Hour works well beside this poem: Louise Mallard feels her freedom alone, in private, and loses it within the hour, while Angelou’s speaker declares hers to her opponent and keeps it.',
          'Build a thesis that covers all three texts, for example that the texts differ less in whether their people resist than in whether anyone hears them.',
          'For Still I Rise, focus on voice: direct address, the taunting questions, the refrain, and the addressee written out after stanza 7.',
          'For the prose text, analyse narrative method (point of view, setting, the ending) rather than retelling the plot.',
          'Keep the texts in conversation: compare methods in the same paragraph where you can, not three separate essays.',
          'Use context lightly and precisely: slavery and its legacy for Angelou, and whatever limits shape the people in your other two texts.',
        ],
      },
    ],
    tips: [
      'Go beyond confidence. The examiners’ report on the January 2019 paper found that answers at the lower and middle grades often went no further than broad ideas such as her pride, her confidence or her strength. The stronger answers covered the whole poem and saw the contrast between how she speaks of herself and how she speaks of others.',
      'Do not work stanza by stanza. The same report named a rigid stanza-by-stanza approach as a weakness. Organise by idea (pride, history, power) and move freely across the poem.',
      'Explain every device you name. Rule of three, repetition, rhetorical questions and rhyme were spotted in many 2019 answers, often without their effect being explained. One precise sentence on effect is worth more than three labels.',
      'Offer more than one reading of the refrain. The top answer in 2019 gave several interpretations of the same phrase, and the refrain is where this poem rewards it most: rising as survival, as defiance, as a people’s history, as a future.',
      'Use the structural points few students notice: the addressee vanishes after stanza 7; the refrain changes from future to present tense; similes give way to metaphors in the last two stanzas.',
      'Line numbers in this guide follow the anthology. The January 2019 exam paper printed the poem without them, so in the exam locate references by stanza and quote briefly.',
      'Link context to effect. Race and feminism were the contexts the 2019 report credited, and in the stronger answers they were tied to the language and structure being analysed. Use context that way, not as a paragraph about Angelou’s life.',
      'Write about the speaker, not simply Angelou. The 2019 question used the word narrator; either is fine, but treating the poem as a performed voice lets you discuss tone and persona.',
    ],
  },

  modelAnswer: {
    question:
      'How does the writer try to present strong emotions in Still I Rise? (January 2019: how the narrator feels about herself and about others, and the use of language and structure.)',
    paragraph:
      'Angelou presents the speaker’s feelings about the addressee as a mixture of contempt and amusement, and she does it chiefly through questions that are not really questions. When the speaker asks whether her “sassiness” upsets them, she already knows the answer, so the question works as a taunt: it forces the addressee to own a feeling they would rather hide while she stays perfectly calm. The pattern returns with “haughtiness” and “sexiness”, three abstract nouns with the same suffix, each more daring than the last, set against the single “hatefulness” of the addressee in line 23. The contrast is telling, because her qualities are all forms of pleasure in herself, while theirs is a feeling aimed at someone else. Yet the strongest emotion in the poem is not scorn but certainty. The similes attach her rising to forces nobody controls, from dust kicked up under a foot to the “certainty of tides”, so her confidence becomes a law of nature rather than a mood that might pass. That is why the refrain changes tense: the future “I’ll rise” of the quatrains becomes the present “I rise” once she turns to her people’s history, as if the emotion has hardened from a promise into a fact. By the time she calls herself “the dream and the hope of the slave”, pride has grown larger than personal feeling. It has become the emotion of a whole history, carried by one voice.',
    commentary: [
      'It answers the question in its first sentence with an argument about which emotions are presented and how, rather than a list of techniques.',
      'It treats the questions as taunts and explains their effect on the addressee, which the 2019 report found many answers did not do when they named rhetorical questions.',
      'It links three words from three different stanzas into one pattern, the opposite of the stanza-by-stanza approach the report criticised.',
      'It covers the question’s first two bullet points: feelings about herself (pride, certainty) and about others (contempt for the addressee, then kinship with the ancestors).',
      'It makes a structural point, the change of tense in the refrain, and ties it to meaning instead of leaving it as an observation.',
      'Its quotations are short, embedded and each one is analysed, and its context (slavery, the ancestors) arrives through the poem’s own words rather than as biography.',
    ],
  },

  timeline: [
    {
      where: 'Stanza 1, lines 1-4',
      title: 'The challenge',
      summary:
        'The speaker turns on an unnamed opponent who has written lies about her and trampled her, and answers both attacks in a single line: like dust under a foot, she will rise.',
      setting: 'A direct confrontation with the person who has written her into history',
      who: ['The speaker', 'The addressee'],
      quote: 'like dust, I’ll rise',
      themes: ['Resilience and defiance', 'Words, looks and power'],
      tension: 3,
      significance:
        'Sets the pattern of the whole poem, attack answered by rising, and makes the fight a fight over who tells her story.',
    },
    {
      where: 'Stanzas 2-3, lines 5-12',
      title: 'Taunts and tides',
      summary:
        'She teases the addressee about why her confidence makes them so gloomy, explains it with a comic simile of oil pumped up inside her home, then turns away from them to compare her rising with the moon, the sun and the tides.',
      setting: 'The speaker at ease in her own home, then the open sky and sea',
      who: ['The speaker', 'The addressee'],
      quote: 'certainty of tides',
      themes: ['Pride, joy and the body', 'Resilience and defiance'],
      tension: 2,
      significance:
        'Introduces the two families of image the poem relies on: comic wealth for her pride, unstoppable nature for her rising.',
    },
    {
      where: 'Stanzas 4-5, lines 13-20',
      title: 'The picture she refuses',
      summary:
        'She asks whether the addressee wanted to see her defeated, head down and shoulders drooping like falling tears, then answers with haughty pride and a laugh as though gold were being mined behind her house.',
      setting: 'The addressee’s imagination, where she is beaten',
      who: ['The speaker', 'The addressee'],
      quote: 'haughtiness',
      themes: ['Words, looks and power', 'Pride, joy and the body'],
      tension: 3,
      significance:
        'Shows what the oppressor wants, a broken woman, and has the speaker refuse to perform it.',
    },
    {
      where: 'Stanza 6, lines 21-24',
      title: 'Words as weapons',
      summary:
        'The attacks turn violent: in three lines she allows that the addressee may shoot, cut and even kill her, but with speech, looks and hatred rather than weapons. The stanza still ends with her rising, this time as air does.',
      setting: 'An assault carried out with language and looks',
      who: ['The speaker', 'The addressee'],
      quote: 'hatefulness',
      themes: ['Words, looks and power', 'Resilience and defiance'],
      tension: 4,
      significance:
        'The height of the addressee’s hostility, and the last time the refrain is a promise in the future tense.',
    },
    {
      where: 'Stanza 7, lines 25-28',
      title: 'Pride in her body',
      summary:
        'The last quatrain asks whether her “sexiness” upsets or surprises the addressee, and answers with a daring simile of precious stones, celebrating her body and her pleasure in it without apology.',
      setting: 'The speaker dancing',
      who: ['The speaker', 'The addressee'],
      themes: ['Pride, joy and the body'],
      tension: 3,
      significance:
        'The boldest of the three boasts, and the addressee’s last appearance in the poem.',
    },
    {
      where: 'Stanza 8, lines 29-34',
      title: 'Out of history',
      summary:
        'The form changes: long lines alternate with the short refrain, until two long lines of ocean imagery close the stanza. She rises from the huts and pain of the past, then declares herself an ocean, vast and surging. The addressee is no longer spoken to.',
      setting: 'The history of slavery, then an open ocean',
      who: ['The speaker', 'The ancestors'],
      quote: 'huts of history’s shame',
      themes: ['History, slavery and memory', 'Resilience and defiance'],
      tension: 5,
      significance:
        'The turn of the poem: an argument with one opponent becomes the story of a people.',
    },
    {
      where: 'Stanza 9, lines 35-43',
      title: 'Dream and daybreak',
      summary:
        'She puts nights of fear behind her for a clear dawn, brings the gifts of her ancestors, names herself what the enslaved longed for, and ends with the refrain three times on its own.',
      setting: 'Dawn, after nights of fear',
      who: ['The speaker', 'The ancestors'],
      quote: 'the dream and the hope of the slave',
      themes: ['History, slavery and memory', 'Resilience and defiance'],
      tension: 5,
      significance:
        'Completes the movement from past to future and turns the promise of rising into a present-tense fact.',
    },
  ],

  relationships: [
    {
      from: 'The speaker',
      to: 'The addressee',
      kind: 'the oppressed and the oppressor, reversed',
      note: 'The addressee begins with the power to write her story and ends unaddressed. She questions them, mocks them and finally leaves them out, so power passes from them to her across the poem.',
    },
    {
      from: 'The speaker',
      to: 'The ancestors',
      kind: 'descendant and heir',
      note: 'She inherits their gifts and fulfils their hope. Her rising is theirs too, which is why the last two stanzas turn from argument to celebration.',
    },
    {
      from: 'The addressee',
      to: 'The ancestors',
      kind: 'present hostility and past oppression',
      note: 'One reading draws a line from those who enslaved her ancestors to those who now write lies about her: the huts in stanza 8 connect the addressee’s hatred to “history’s shame”.',
    },
  ],

  compareWith: [
    {
      title: 'The Story of an Hour (Kate Chopin)',
      href: '/revision/texts/the-story-of-an-hour',
      reason:
        'Both centre a woman’s sense of her own freedom, but Louise Mallard feels hers alone and loses it within the hour while Angelou’s speaker declares hers to her opponent and keeps it, a strong pairing for the prose text the assignment requires.',
    },
    {
      title: 'Disabled (Wilfred Owen)',
      href: '/igcse/edexcel/poetry/disabled',
      reason:
        'Owen’s wounded soldier is the broken figure Angelou’s addressee hopes to see, so the pair show other people’s looks crushing one life and failing to touch another.',
    },
    {
      title: 'An Unknown Girl (Moniza Alvi)',
      href: '/igcse/edexcel/poetry/an-unknown-girl',
      reason:
        'Both explore identity and heritage through the body, but Alvi’s speaker is tentative and caught between cultures, while Angelou’s claims her ancestors’ history loudly and without doubt.',
    },
    {
      title: 'The Bright Lights of Sarajevo (Tony Harrison)',
      href: '/igcse/edexcel/poetry/the-bright-lights-of-sarajevo',
      reason:
        'Both find pride and hope persisting in people under attack: Harrison in young people meeting after dark in a besieged city, Angelou in a voice rising out of centuries of oppression.',
    },
  ],

  contentGuidance: ['discrimination', 'crime_injustice', 'violence', 'intimate_relationships'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 2, page 29: the poem as prescribed, stanza layout and line numbering; acknowledgements on page 72 (© Maya Angelou 1978; And Still I Rise, Virago Press, 1986; Little, Brown Book Group and Random House). Every quotation checked against this text.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Academy of American Poets, Still I Rise: independent check of every quoted phrase, and the copyright line (And Still I Rise, © 1978, Random House).',
      url: 'https://poets.org/poem/still-i-rise',
    },
    {
      label:
        'Academy of American Poets, Maya Angelou biography: born 4 April 1928 in St Louis; And Still I Rise (1978) after collections of 1971 and 1975; northern coordinator of the SCLC at King’s request; died 28 May 2014 in Winston-Salem.',
      url: 'https://poets.org/poet/maya-angelou',
    },
    {
      label:
        'Encyclopedia of Arkansas, Maya Angelou (1928-2014): sent to Stamps after her parents’ 1931 divorce; grandmother Annie Henderson’s store in the Black section of the town; mute for several years after a traumatic incident at eight; SCLC role; Ghana and Malcolm X.',
      url: 'https://encyclopediaofarkansas.net/entries/maya-angelou-1085/',
    },
    {
      label:
        'National Women’s History Museum, Maya Angelou: birth, Stamps, SCLC role, death date (cross-check).',
      url: 'https://www.womenshistory.org/education-resources/biographies/maya-angelou',
    },
    {
      label:
        'National Archives (US), 13th Amendment: passed by Congress 31 January 1865, ratified 6 December 1865.',
      url: 'https://www.archives.gov/milestone-documents/13th-amendment',
    },
    {
      label:
        'Martin Luther King, Jr. Research and Education Institute, Stanford: the I Have a Dream speech, 28 August 1963, March on Washington for Jobs and Freedom.',
      url: 'https://kinginstitute.stanford.edu/i-have-dream',
    },
    {
      label:
        'Pearson, 4EA1/02 question paper, 22 January 2019: Section A set Still I Rise; question wording reproduced in exam practice.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/exam-materials/4EA1_02_que_20190123.pdf',
    },
    {
      label:
        'Pearson, Examiners’ report January 2019, 4EA1 02: what separated weaker and stronger answers on Still I Rise, paraphrased in the tips and commentary.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/exam-materials/4EA1_02_pef_20190307.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Language A specification, Issue 7 (August 2025): Part 2 text list; Component 2 Section A; Component 3 Assignment A requires three Part 2 texts including at least one poem and one prose text.',
    },
  ],
}
