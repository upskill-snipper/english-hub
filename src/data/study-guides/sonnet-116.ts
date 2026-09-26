import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Sonnet 116, William Shakespeare. A supplement: the page at
 * /igcse/edexcel/poetry/sonnet-116 keeps its overview, context, key quotations,
 * language analysis and form and structure, and this file adds themes, the
 * poem's figures, passages for close reading, vocabulary, exam practice and a
 * model answer, mounted below it.
 *
 * TWO TEXTS OF THE POEM. The anthology (Issue 8, February 2026, page 59) and the
 * edition held in src/data/full-texts/sonnet-116.ts (Project Gutenberg #1041)
 * have the same words in all but three places: the anthology prints
 * "ever-fixèd" in line 5, "proved" in line 13 and "loved" in line 14, where the
 * held edition prints "ever-fixed", "prov'd" and "lov'd". The punctuation
 * differs too: the anthology's line 5 opens "O no, it is", with no exclamation
 * mark, where the held edition has "O, no! it is". Quotations here follow the
 * anthology's punctuation, because that is the copy a student has in the exam
 * (the November 2023 paper printed the same text, accent and all, on page 8 of
 * its Poetry Booklet), and were chosen from the words the two texts share, so the
 * held-edition test checks each one. The anthology's own "ever-fixèd" and line
 * 13 are quoted in prose and listed in quotesFromElsewhere; both were read from
 * the Pearson PDF. Extract B keeps the held edition's unaccented "ever-fixed",
 * because the test checks passages against the held edition, and its pointer
 * tells the student so.
 *
 * THE PAGE ABOVE differs from the anthology in several places: it prints line 2
 * as "Admit impediments. Love", ends line 4 with a colon, prints line 5 as
 * "O no! it is an ever-fixed mark" and builds a note on that being the poem's
 * only exclamation, and prints "wand'ring" in line 7. The anthology prints none
 * of these. This file repeats none of them, and tells the student what the
 * anthology prints. The page also calls Time's blade a scythe in its summary
 * (the poem says sickle, and so does everything here), and quotes the 1662
 * banns wording "cause or just impediment" for a poem published in 1609; this
 * file quotes the 1559 service instead.
 *
 * RE-VERIFIED 26 September 2026, from fresh downloads rather than the first
 * draft's notes: the anthology page 59 wording and layout, the four comparison
 * poems' quoted lines, the November 2023 question paper, mark scheme and
 * examiners' report, the 4ET1 specification, Pooler's 1918 Arden notes, the 1559
 * and 1662 marriage services, and the Wikipedia wikitext for the critics. Three
 * fixes came out of it. Time was called the only figure "given a gender", but
 * this file also tells the student that "his" in line 8 means "its", so the
 * pronoun alone cannot gender Time; the Time entry now says so. Rosy lips and
 * cheeks were called the poem's only physical detail, when the sickle, the star
 * and the ship are physical too; they are the only detail of a human body. And
 * the mark scheme's word for the Duke's tone is vindictive, not resentful.
 *
 * FACT-CHECKED again the same day, against fresh downloads of the same
 * sources. Every quotation held. The fixes were to claims. The Love entry said
 * love is always "it", unlike Time's "his", but the star that stands for love
 * has "his height" in line 8. A note said line 12 keeps "ten beats"; a
 * pentameter line has ten syllables and five beats. Murphy's stress on "me" was
 * given without Combellack's reply. The last line was said to count the speaker
 * among the men who have loved, which it does not state. Two examiners'-report
 * tips said more than the report does. And the glossary said Death carries a
 * sickle, where the usual image is a scythe.
 */
export const guide: StudyGuide = {
  slug: 'sonnet-116',
  title: 'Sonnet 116: Let me not to the marriage of true minds',
  author: 'William Shakespeare',
  form: 'poem',
  scope:
    'The whole sonnet, as printed on page 59 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3, for English Literature Paper 1 Section B. Line references follow that printing: fourteen lines, numbered at 5 and 10, printed as a single block with no stanza breaks, so the quatrains are marked by rhyme rather than by spacing.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      "Quotations follow the text printed in the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), page 59, and are checked against Shakespeare's Sonnets, Project Gutenberg eBook #1041. The sonnet was first published in 1609.",
  },
  workLength: {
    words: 110,
    lines: 14,
    basis:
      'Counted from the anthology printing on page 59, with ever-fixèd counted as two words, as the site word counter splits hyphenated words.',
  },

  native: {
    overview: '/igcse/edexcel/poetry/sonnet-116',
    context: '/igcse/edexcel/poetry/sonnet-116',
    keyQuotes: '/igcse/edexcel/poetry/sonnet-116',
    languageAnalysis: '/igcse/edexcel/poetry/sonnet-116',
    structureForm: '/igcse/edexcel/poetry/sonnet-116',
  },

  themes: [
    {
      title: 'Constancy',
      body: "Constancy, love that does not change, is the poem's central claim, and Shakespeare makes it first by negation. Love “is not love / Which alters when it alteration finds” (lines 2-3), and the paired roots of alters and alteration, remover and remove, make false love sound like an echo, answering every change with a change of its own. True love is the opposite: a mark that is “never shaken” (line 6), a love that “alters not” (line 11). The usual reading takes this as a calm definition of an ideal, and the Folger Shakespeare Library's synopsis describes the union as one that cannot change and will not end. Another reading, argued by the critic Garry Murphy, hears an agitated protest from someone afraid of losing love. The poem's insistence supports him: a speaker at ease would hardly need to deny change so many times in fourteen lines. On that evidence the protest reading is the more convincing, but it does not cancel the definition. The poem can be a definition and a defence at once, offered by someone who knows how rare the thing he defines is.",
    },
    {
      title: 'Time and mortality',
      body: "Time is the poem's antagonist. In the third quatrain he is personified as a reaper with a “bending sickle” (line 10), and youthful beauty, “rosy lips and cheeks” (line 9), falls within its “compass”, the sweep of the blade. Shakespeare does not pretend that the body lasts. What he denies is that love belongs to the body: love is not “Time's fool”, not his plaything. Time's own units are small and hurried, “his brief hours and weeks” (line 11), while love “bears it out even to the edge of doom” (line 12), enduring to the end of time itself. The contrast of scale is the argument: hours and weeks against Doomsday. The word bending also looks back to line 4, where false love “bends with the remover to remove”, so false love and Time can be read as making the same movement. It is tempting to write that the poem says love defeats death. It says something narrower and more interesting: that love keeps its shape while the face of the person loved does not.",
    },
    {
      title: 'Marriage, vows and judgement',
      body: 'The first two lines borrow the language of a church wedding. In the marriage service of the 1559 Book of Common Prayer, the priest charges the couple, “as you will answer at the dreadful Day of Judgment”, to confess “any impediment” to their marriage. Sonnet 116 opens with the impediment (line 2) and ends its third quatrain with the judgement: love lasts “even to the edge of doom” (line 12), and doom is Doomsday. Read this way, the whole argument sits inside the frame of the service, and the sonnet becomes a vow. Yet the marriage it describes is a “marriage of true minds” (line 1), not of bodies, and the poem never says whose minds they are: there is no bride, no groom and no name. In the 1609 collection the sonnet sits among the poems usually read as addressed to a young man, so one reading is that marriage is a metaphor for a bond of friendship or love that was not a marriage at all. Either way, the speaker borrows one of the most solemn promises of his time and claims its seriousness for the love he defines. The critic Lukas Erne adds that alters, in the line after the wedding language, may carry a pun on altar, keeping the church in view.',
    },
    {
      title: 'Love as a guide',
      body: "In the second quatrain Shakespeare changes method: after saying what love is not, he says what it is, in images from the sea. Love is a mark (line 5), a sea-mark, the beacon or tower on a coast that sailors steer by, which “looks on tempests and is never shaken” (line 6). Then it is “the star to every wandering bark” (line 7), the guiding star of every lost ship. The images place love outside the lover, fixed while everything around it moves, and they make it available to anyone: every bark, not one. The last line of the quatrain adds a qualification that is easy to miss. Sailors can measure the star's height, its altitude above the horizon, to find their position, yet its “worth's unknown” (line 8). Love can be steered by without being understood. One reading is that this is humility, a limit on the speaker's confident definitions. A sharper reading is that it names the mistake the rest of the poem attacks: people who judge love by what can be seen and measured, such as lips and cheeks, are measuring the wrong thing.",
    },
    {
      title: 'Certainty and proof',
      body: "The couplet stakes everything on the argument. “If this be error and upon me proved” (line 13), the speaker says, then “I never writ”, and no man has ever loved. The language is legal: upon me proved means proved against me, as a charge is proved in a trial (the 1918 Arden editor compares the old idea of proving a charge on someone's body in single combat), and error is the word for a false belief. The wager looks unlosable, since the poem in front of us shows that he has written, so the argument must stand. The critics Jeffrey Nelson and Andrew Cling point out the flaw: the poem proves that he wrote, but not that anyone has loved. That gap matters. The couplet is conditional, and its If lets doubt into a poem that has so far admitted none, while the doubled negative, never followed by nor no, piles denial on denial. It can be read as the confidence of someone certain or the overstatement of someone who needs to be. The more convincing reading holds both: the logic is a clever trick, and the feeling behind it is real. That tension between certainty and need is what lifts the sonnet above a simple definition of love.",
    },
  ],

  characters: [
    {
      name: 'The speaker',
      role: 'The first-person voice: a writer arguing a case about love',
      body: "The speaker appears only at the edges of the poem. He says “Let me not” in the first line, then disappears behind general statements (“Love is”, “It is”) until the couplet, where he returns as me and I to stake his reputation on the argument. What we learn in between is how he thinks: like a lawyer or a preacher, defining his terms, rejecting an objection with “O no”, and arguing through images. He presents himself as a writer (“I never writ”), and the last line ties the claim that any man has ever loved to his own argument being right. Whether the voice is Shakespeare's own is not known; nobody knows whether the sonnets are autobiographical or fictional. The poem also speaks to no one. There is no second person, no you or thou, and no named beloved. The Pearson mark scheme for November 2023 makes this a point of contrast: Sonnet 116 does not refer to a specific partner, while My Last Duchess is about the Duke's wife. One reading, argued by the critic Helen Vendler, is that he is answering a loved one whose attachment has faded; another treats him as an impersonal voice defining love for everyone. The first-person frame, and his need to insist, make the personal reading hard to dismiss.",
    },
    {
      name: 'Love',
      role: 'The subject of the poem: defined, then pictured as a sea-mark and a star',
      body: "Love is the subject of most of the poem's main clauses, and Shakespeare treats it half as an idea and half as a figure. In the first quatrain it is defined by what it will not do. In the second it becomes it, a sea-mark that “looks on tempests”, the verb giving it eyes and a steady, unafraid gaze, and then a star that guides every lost ship. In the third it is set against Time, refusing to be his fool, and in line 12 it “bears it out”, enduring to the end of the world. Time holds a sickle; love carries no weapon at all. Do not build a point on pronouns here: the star that stands for love has “his height” in line 8, where his simply means its. One reading is that this keeps love abstract and ideal, something no single relationship could match. Another is that love is described as the one thing in the poem that does not need a body, because bodies are what Time cuts down. The second reading makes better sense of the contrast with “rosy lips and cheeks” in line 9, the only detail of a human body the poem allows.",
    },
    {
      name: 'Time',
      role: 'Personified as a reaper with a sickle: the force love resists',
      body: "Time is the only figure in the poem that carries a weapon, the curved sickle of a harvester, and youthful beauty, “rosy lips and cheeks”, falls within its compass, its sweep. He is his throughout (“his bending sickle”, “his brief hours and weeks”), but be careful with that pronoun. In Shakespeare's English his was still the ordinary word for its, which is why the star in line 8 has “his height”. What turns Time into a person is not the pronoun but the capital letter, the sickle and the idea that he keeps fools. The image draws on the familiar picture of Time as a reaper; the Pearson mark scheme for November 2023 calls it the Grim Reaper. The key phrase is “Love's not Time's fool”: a fool is a jester or plaything, and the editor Dowden, quoted in the 1918 Arden edition, glossed the phrase as the sport or mockery of time. Time can make fools of faces, but not of love. Notice what Shakespeare concedes. Time is not defeated in this poem; it wins everything except love, and its small, hurried units of “hours and weeks” are measured against the vast scale of Doomsday. Helen Vendler goes further and identifies Time with the remover of line 4, a reading explained below.",
    },
    {
      name: 'The remover',
      role: 'The one who removes: a person, or a force, that changes or goes away',
      body: "The remover appears once, in line 4, and who it is depends on how you read the line. False love, the speaker says, “bends with the remover to remove”: it changes course when the other does. The 1918 Arden editor, C. Knox Pooler, reads the remover as whichever of the pair proves unfaithful, so that false love is love that alters at the moment the other person's love alters. That is the natural first reading, and it makes the poem about fidelity between two people. Helen Vendler offers a second: in the third quatrain the remover turns out to be Time, whose “bending sickle” picks up the verb bends. On that reading the poem's real enemy is not an inconstant lover but ageing and death. The two readings are less rivals than stages. Line 4 invites the first; the third quatrain, looking back, makes the second possible, and a strong answer can show the poem changing its own meaning as it goes.",
    },
  ],

  extracts: [
    {
      title: 'The argument begins',
      where: 'Lines 1-4, the first quatrain',
      pointer:
        'From “Let me not to the marriage of true minds” (line 1) to “bends with the remover to remove” (line 4), anthology page 59. The anthology prints the sonnet as one block, so the quatrain is marked by its rhyme (minds and finds, love and remove), not by a gap.',
      text: 'Let me not to the marriage of true minds / Admit impediments; love is not love / Which alters when it alteration finds, / Or bends with the remover to remove.',
      annotations: [
        {
          phrase: 'Let me not',
          note: 'The sonnet opens with a negative and a request, as if the speaker were declining to object at a wedding. The critic Garry Murphy argues that the stress belongs on me, which would set this speaker against others; C. R. B. Combellack replies that nobody else is addressed or mentioned in the poem, so there is no one to set him against. Where the stress falls is a reading, not a fact.',
        },
        {
          phrase: 'the marriage of true minds',
          note: "Marriage is the poem's first image, and it is a union of minds, not bodies. True can mean faithful as well as genuine, so what is being married is two people's loyalty. No names, genders or wedding details follow.",
        },
        {
          phrase: 'Admit impediments',
          note: 'Impediments are the legal or moral obstacles the marriage service asks a couple to confess before they marry. Admit can mean allow in or acknowledge, and the speaker refuses both: nothing may block this union, and he will not accept that anything could.',
        },
        {
          phrase: 'love is not love',
          note: 'The phrase seems to contradict itself, which makes the reader stop. The sense is that a love which changes does not deserve the name, so the word love is being defined and guarded in the same breath.',
        },
        {
          phrase: 'alters when it alteration finds',
          note: 'The same root appears twice, as alters and alteration, a device called polyptoton. False love only reflects what it meets: when it finds change in the other person, it changes too. Lukas Erne hears a possible pun on altar, which keeps the church wedding in view.',
        },
        {
          phrase: 'bends with the remover to remove',
          note: 'Bends makes false love physical, like something that gives under pressure. The remover is whoever goes away; the 1918 Arden edition reads it as the partner who proves unfaithful. The verb returns in the bending sickle of Time in line 10.',
        },
      ],
      question:
        'Explore how Shakespeare uses the first four lines of Sonnet 116 to set out his argument about love. You should write about the marriage imagery, the way love is defined, and the use of language and structure.',
    },
    {
      title: 'The fixed mark and the star',
      where: 'Lines 5-8, the second quatrain',
      pointer:
        'From “O no, it is” (line 5) to “although his height be taken” (line 8), anthology page 59. Your anthology prints line 5 with “ever-fixèd”, the accent telling you to sound the -ed; the passage below prints “ever-fixed” without it, as in the edition this site checks against. Every other word and punctuation mark is as your anthology prints it.',
      text: "O no, it is an ever-fixed mark / That looks on tempests and is never shaken; / It is the star to every wandering bark, / Whose worth's unknown, although his height be taken.",
      annotations: [
        {
          phrase: 'O no',
          note: 'The interjection rejects the idea of changeable love outright, and it is the most spoken moment in the poem. Your anthology prints a comma after no, where some editions print an exclamation mark, and critics disagree whether the tone is agitated or calm, so write about the interruption, not the punctuation.',
        },
        {
          phrase: 'an ever-fixed mark',
          note: 'A mark here is a sea-mark: a beacon or tower on the coast that sailors steer by, as the 1918 Arden edition glosses it. Sounded as your anthology marks it, ev-er-fix-èd, the word makes the line a full ten syllables, so the fixed rhythm matches the fixed image.',
        },
        {
          phrase: 'looks on tempests and is never shaken',
          note: 'Personification gives the mark eyes: it watches the storms rather than suffering them. Shaken ends the line with an extra unstressed syllable, a feminine ending, and taken does the same in line 8, a softer close to lines that claim perfect steadiness.',
        },
        {
          phrase: 'the star to every wandering bark',
          note: 'The star is the guiding star sailors steered by, usually taken to be the Pole Star, and a bark is a small ship. Every makes love a guide for all lost travellers, not for one couple. Some editions print wand’ring, showing that the word is said as two syllables.',
        },
        {
          phrase: "Whose worth's unknown, although his height be taken",
          note: "His means its, the star's. Sailors measured a star's height above the horizon to fix their position, but its worth, its true value or power, stays unknown. Love can be used as a guide without being fully understood.",
        },
      ],
      question:
        'How does Shakespeare use images of the sea and the stars in lines 5 to 8 to present love? You should write about the sea-mark and the star, the personification, and the effect of the last line of the quatrain.',
    },
    {
      title: 'Love against Time',
      where: 'Lines 9-12, the third quatrain',
      pointer:
        "From “Love's not Time's fool” (line 9) to “the edge of doom” (line 12), anthology page 59. These four lines are the third quatrain, and the full stop at the end of line 12 closes the poem's definition before the couplet begins.",
      text: "Love's not Time's fool, though rosy lips and cheeks / Within his bending sickle's compass come; / Love alters not with his brief hours and weeks, / But bears it out even to the edge of doom.",
      annotations: [
        {
          phrase: "Love's not Time's fool",
          note: 'A fool is a jester or plaything, so Time is imagined as a master who can make fools of people. The editor Dowden, quoted in the 1918 Arden edition, glossed the phrase as the sport or mockery of time. Love, the speaker insists, is not at the mercy of Time.',
        },
        {
          phrase: 'rosy lips and cheeks',
          note: 'The only detail of a human body in the poem, and it belongs to youth. Shakespeare concedes that beauty falls within the reach of Time; the argument is that love does not depend on it.',
        },
        {
          phrase: "his bending sickle's compass",
          note: 'Time carries a curved sickle, the harvester’s blade, and its compass is its range or sweep. Lips and cheeks come within that sweep as a crop comes within reach of a reaper. Bending recalls the bending of false love in line 4.',
        },
        {
          phrase: 'his brief hours and weeks',
          note: 'The units of Time are short and ordinary. Setting them beside Doomsday in the next line makes Time seem small, and that contrast of scale carries the argument of the quatrain.',
        },
        {
          phrase: 'bears it out even to the edge of doom',
          note: 'Bears it out means endures or holds out, and doom is Doomsday, the Day of Judgement at the end of the world. The metre asks for even to be said as one syllable, so the line keeps its ten syllables as it reaches the furthest point in time.',
        },
      ],
      question:
        'How does Shakespeare present the relationship between love and time in lines 9 to 12? You should write about the personification of Time, the contrast between beauty and love, and the use of language and structure.',
    },
  ],

  vocabulary: [
    {
      term: 'impediments',
      definition:
        'Obstacles (line 2). In the marriage service, an impediment is a reason why a couple may not lawfully marry, which the priest asks them to confess before the wedding.',
    },
    {
      term: 'admit',
      definition:
        'To allow in, or to acknowledge as true (line 2). Both senses work: the speaker will neither let obstacles into a true marriage nor accept that they exist.',
    },
    {
      term: 'alters, alteration',
      definition: 'Changes, and a change (line 3; alters comes back in line 11).',
    },
    {
      term: 'remover',
      definition:
        'One who removes: who goes away or changes their affections (line 4). The 1918 Arden edition reads it as the partner who proves unfaithful; Helen Vendler reads it as Time.',
    },
    {
      term: 'remove',
      definition: 'To move away or depart (line 4).',
    },
    {
      term: 'mark',
      definition:
        'Here a sea-mark: a beacon, tower or other fixed object on a coast that sailors steer by (line 5).',
    },
    {
      term: 'ever-fixèd',
      definition:
        'Always fixed, permanently in place (line 5). The accent, as your anthology prints it, tells you to sound the -ed as a separate syllable.',
    },
    {
      term: 'tempests',
      definition: 'Violent storms (line 6).',
    },
    {
      term: 'bark',
      definition:
        'A ship, especially a small sailing ship (line 7). Wandering here means lost or off course.',
    },
    {
      term: 'worth',
      definition:
        "Value (line 8). The star's worth is unknown: what it is worth cannot be calculated.",
    },
    {
      term: 'his height be taken',
      definition:
        "The star's altitude is measured, as sailors measured a star's height above the horizon to work out their position (line 8). His here means its.",
    },
    {
      term: "Time's fool",
      definition:
        'The plaything or dupe of Time (line 9). A fool was a jester, someone others laughed at or made sport of.',
    },
    {
      term: 'sickle',
      definition:
        'A curved blade on a short handle, used for cutting corn (line 10). Here Time is pictured as a reaper carrying one, an image close to the familiar figure of Death as the Grim Reaper, who is usually shown with a scythe.',
    },
    {
      term: 'compass',
      definition: 'Range or reach: the sweep of the sickle’s blade (line 10).',
    },
    {
      term: 'bears it out',
      definition: 'Endures, holds out, survives (line 12).',
    },
    {
      term: 'doom',
      definition: 'Doomsday, the Day of Judgement at the end of the world (line 12).',
    },
    {
      term: 'error',
      definition: 'A mistake; in the language of religion, a false belief (line 13).',
    },
    {
      term: 'upon me proved',
      definition:
        'Proved against me, as a charge is proved against someone in a trial (line 13, as your anthology prints it).',
    },
    {
      term: 'writ',
      definition: 'Wrote (line 14).',
    },
    {
      term: 'quatrain',
      definition:
        'A group of four lines. The anthology prints no gaps, so the three quatrains of this sonnet (lines 1-4, 5-8 and 9-12) are marked by their rhymes.',
    },
    {
      term: 'rhyming couplet',
      definition:
        'Two consecutive lines that rhyme. In a Shakespearean sonnet the couplet (here lines 13 and 14) closes the argument.',
    },
    {
      term: 'feminine ending',
      definition:
        'An extra unstressed syllable at the end of a line of iambic verse, as in shaken and taken (lines 6 and 8).',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Re-read Sonnet 116 and My Last Duchess. Compare how the writers present their thoughts about relationships in Sonnet 116 and My Last Duchess. You should make reference to language, form and structure. Support your answer with examples from the poems. (This question was set on Paper 1 in November 2023.)',
        skill:
          'Comparison of two named anthology poems: language, form and structure, and the links between them',
        guidance: [
          "Open with a comparative argument, not a summary: both poems present a relationship through what a man refuses to accept, but Shakespeare's speaker defines a love that will not change, while Browning's Duke reveals a marriage in which he could not bear his wife's warmth to others.",
          'Compare the voices. Sonnet 116 names no partner and speaks to no one; the Duke talks about his dead wife to the envoy of the Count whose daughter he means to marry. Say what each choice does: a general definition against a monologue that gives the speaker away.',
          "Compare fixing. Shakespeare's love is an unmoving mark and a guiding star; the Duke keeps his wife fixed in a painting behind a curtain only he draws. The November 2023 examiners' report noted that some very able candidates saw love transcending time in the sonnet while Browning tries to fix time through the portrait.",
          "Compare faces. Shakespeare's “rosy lips and cheeks” fall within the reach of Time; the Duke resents the “spot / Of joy” in the Duchess's cheek. The mark scheme suggests this contrast: a face described with affection in one poem, and with vindictiveness in the other.",
          'Compare refusals to bend. False love bends with the remover, and the Duke will not stoop. Explore how the same idea means constancy in one poem and pride in the other.',
          "Form and structure: a sonnet of three quatrains and a couplet that turns the argument into a wager, against a dramatic monologue in rhyming couplets whose enjambment and caesura make the Duke's speech sound casual while it reveals something sinister. Both are in iambic pentameter.",
          "End with a judgement. Which poem is more honest about love? The sonnet's conditional If admits the possibility of error; the Duke never doubts himself.",
        ],
      },
      {
        question:
          'Re-read Sonnet 116. Compare the ways the writers present the power of time in Sonnet 116 and one other poem from the anthology. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill:
          'Comparison with a poem of your choice: language, form and structure, and the links between them',
        guidance: [
          "Choose a partner poem with a clear attitude to time or death. Remember and Do not go gentle into that good night both work well: Rossetti's speaker imagines being forgotten after death, and the speaker of Thomas's poem urges his father to fight against dying.",
          'State the contrast early. Shakespeare concedes that Time takes beauty but denies that it can touch love; say whether your second poem resists time, accepts it or fears it.',
          'Sonnet 116: analyse the personification of Time as a reaper with “his bending sickle”, the scale of “brief hours and weeks” against “the edge of doom”, and the claim that love is not the fool of Time.',
          "Form: a sonnet whose third quatrain is given entirely to Time, and whose couplet tries to make the argument final. Compare the form of your second poem, for example the returning refrains of Thomas's villanelle, or Rossetti's sonnet, which turns at Yet in line 9.",
          'Language: compare how each poet makes time visible, a sickle in Shakespeare, “the dying of the light” in Thomas, “the silent land” in Rossetti, and what each image suggests about the end it describes.',
          "End by weighing the attitudes: is Shakespeare's confidence more or less convincing than the resistance or acceptance of your second poem?",
        ],
      },
      {
        question:
          'Re-read Sonnet 116 and Remember. Compare how the writers present love in Sonnet 116 and Remember. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparison of two sonnets: form as well as language',
        guidance: [
          "Start from form, because it is the clearest link. Both are fourteen-line sonnets, but Shakespeare's has three quatrains and a couplet, rhyming abab cdcd efef gg, while Rossetti's is Petrarchan, an octave and a sestet rhyming abbaabba cddece.",
          'Compare where each poem turns. Rossetti turns at Yet in line 9, from asking to be remembered to releasing the beloved; Shakespeare builds through three quatrains to a couplet that stakes everything.',
          "Compare the voices. Rossetti's speaker addresses you, a particular beloved, and imagines dying; Shakespeare speaks to no one and deals in general statements about love.",
          "Compare ideas of constancy. Shakespeare says true love does not alter; Rossetti's speaker would rather be forgotten than cause grief: “Better by far you should forget and smile”. One reading is that this is the less selfish love, because it lets go.",
          'Compare time and death: the sickle of Time and Doomsday in Sonnet 116, “the silent land” and the darkness of the grave in Remember.',
          'Conclude with a judgement on which poem presents love as stronger, and whether strength means refusing change or accepting it.',
        ],
      },
      {
        question:
          'Re-read Sonnet 116 and La Belle Dame sans Merci. Compare how the writers present true and false love in Sonnet 116 and La Belle Dame sans Merci. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill:
          'Comparison of two named anthology poems: language, form and structure, and the links between them',
        guidance: [
          "Open with the contrast. Shakespeare defines true love as the thing that never alters; Keats tells the story of a knight enchanted by a lady who says she loves him, and who is gone when he wakes, alone “On the cold hill's side” (stanza XI).",
          "Compare claims of truth. The knight reports that the lady said, “in language strange”, “I love thee true” (stanza VII), so her words reach us only through him; Shakespeare's speaker stakes his own writing on his definition. Which claim does each poem invite us to trust, and why?",
          "Compare faces. The questioner in stanza III sees “a fading rose” on the knight's cheeks; Shakespeare puts “rosy lips and cheeks” within the reach of the sickle of Time. In both, beauty in the face is what fades.",
          'Compare bending. The lady would bend sidelong and sing (stanza VI); in Sonnet 116 false love bends with the remover. Consider what the shared verb suggests about each kind of love.',
          'Form and structure: a ballad of short stanzas, with questions answered by the knight and an ending that circles back to the withered sedge and silent birds, against a sonnet that drives forward to its couplet. One poem moves in a circle; the other presses to a conclusion.',
          "Conclude: is Keats's poem a portrait of exactly the love Shakespeare says is not love?",
        ],
      },
    ],
    tips: [
      'Quote the anthology. Your booklet prints line 5 as “O no, it is an ever-fixèd mark”, with a comma after no where some editions print an exclamation mark, and prints wandering in full in line 7 where some print wand’ring. An answer built on an exclamation mark your booklet does not show will puzzle an examiner.',
      'Sound the accent. The è in fixèd tells you to pronounce the -ed as a separate syllable, which gives line 5 its ten syllables. The anthology marks La Belle Dame sans Merci the same way (“lullèd”, “gapèd”), a small point of form if you pair the two.',
      'Give Sonnet 116 equal weight. Two examiners quoted in the November 2023 report said that answers pairing it with My Last Duchess tended to be better on the Browning, with fewer points on the sonnet, and that the sonnet form was an easy point about structure that was not always grasped.',
      'Make the form do work: three quatrains, three ways of defining love (what it is not, what it is, what Time cannot do to it), then a couplet that turns the argument into a wager. Say why that shape suits a poem that argues.',
      'Do not invent a partner. The poem names no beloved and speaks to no one, and the mark scheme for the November 2023 paper treats that as a point of comparison in itself. If you mention the young man of the 1609 sequence, present it as a reading, not a fact.',
      'Keep context to a clause. This section of the paper tests analysis of language, form and structure and the links between poems; context is not among the skills listed for it. The marriage service is worth a sentence because it explains impediments, not a paragraph.',
      "Compare what the poems do, not what they both lack. The November 2023 examiners' report noted an occasional tendency to compare what the poems did not do, such as neither using alliteration, and found such comparisons often vague.",
      'Write about both poems throughout. The mark scheme holds an answer that considers only one poem to the lower levels, however good it is.',
      'Use short quotations and read them closely. Bends, fool, compass and doom each repay a sentence of analysis, and a single word explained well is worth more than a line copied out.',
      'Argue about the couplet. The wager is clever, but it proves only that he wrote, not that anyone loved. Saying whether you find it convincing is the personal response the mark scheme asks for.',
    ],
  },

  modelAnswer: {
    question:
      'Compare how the writers present their thoughts about relationships in Sonnet 116 and My Last Duchess.',
    paragraph:
      "Both poems present a relationship through a refusal to bend, but the refusals mean opposite things. Shakespeare defines false love as love that “bends with the remover to remove”: it moves whenever the other person moves, and the polyptoton of remover and remove makes the line echo itself, as if inconstant love could only repeat what it meets. True love is its opposite, a mark that “looks on tempests and is never shaken”, personified with eyes but not with fear. Browning's Duke refuses to bend as well: “I choose / Never to stoop.” The enjambment carries Never to stoop to the start of line 43, so his pride lands like a verdict, and two lines later “I gave commands; / Then all smiles stopped together” shows what that rigidity costs. Where Shakespeare's steadiness is offered to the person loved, the Duke's is turned against his wife. In Sonnet 116 it is Time, with his “bending sickle”, that reaches “rosy lips and cheeks”, and love outlasts him; in My Last Duchess it is the husband's commands that end the smiles, and only a painted face survives. One reading is that both men claim power over change, Shakespeare's speaker by definition and the Duke by force. Yet the sonnet's couplet begins “If this be error”, admitting that it could be wrong, which is exactly what the Duke, who never questions himself, cannot do.",
    commentary: [
      'It opens with a comparative argument, the shared idea of refusing to bend, so both poems are in play from the first sentence rather than one after the other.',
      'Every quotation is short and embedded, and each is followed by analysis of a specific choice: the polyptoton of remover and remove, the personification of the mark, the enjambment before Never to stoop.',
      'It analyses structure as well as language, using a line break in My Last Duchess and the couplet of the sonnet to make points about meaning.',
      'It develops a contrast the mark scheme suggests, faces and beauty, and pushes it further: in one poem Time ends beauty, in the other a husband does.',
      "It offers a reading tentatively, then tests it against the couplet's If, and ends on a judgement rather than a summary.",
      'It spends no words on biography or history. This section of the paper rewards analysis and comparison, and every sentence does one or the other.',
    ],
  },

  timeline: [
    {
      where: 'Quatrain 1, lines 1-2',
      title: 'No impediment admitted',
      summary:
        'The speaker opens with a refusal: he will not admit any obstacle to the marriage of two faithful minds. The words echo the church marriage service, in which the priest asks a couple to confess any impediment before they are married.',
      setting: 'A church wedding, its words turned into a private vow',
      who: ['The speaker'],
      quote: 'Let me not to the marriage of true minds',
      themes: ['Marriage, vows and judgement', 'Constancy'],
      tension: 2,
      significance:
        'It frames the whole sonnet as a vow and an argument about love in general, not a portrait of one lover.',
    },
    {
      where: 'Quatrain 1, lines 2-4',
      title: 'What love is not',
      summary:
        'Love that changes when it finds change in the other person, or that moves away when the other moves away, is not love at all. Repeated root words make false love sound like an echo of whatever it meets.',
      setting: "An argument conducted in the abstract, like a definition in a lawyer's brief",
      who: ['The speaker', 'Love', 'The remover'],
      quote: 'love is not love / Which alters when it alteration finds',
      themes: ['Constancy'],
      tension: 3,
      significance:
        'Defining love by what it is not lets the rest of the poem build its positive definition against it.',
    },
    {
      where: 'Quatrain 2, lines 5-8',
      title: 'The fixed mark and the star',
      summary:
        'The speaker rejects that idea outright and says what love is: a sea-mark that watches storms without being moved, and the star by which every lost ship steers, whose height can be measured though its worth cannot.',
      setting: 'A stormy sea, with a beacon on the shore and a guiding star overhead',
      who: ['The speaker', 'Love'],
      quote: 'It is the star to every wandering bark',
      themes: ['Love as a guide', 'Constancy'],
      tension: 3,
      significance:
        'The central images make love fixed, outside the lover and a guide for everyone, while admitting that it cannot be fully understood.',
    },
    {
      where: 'Quatrain 3, lines 9-12',
      title: 'Love against Time',
      summary:
        "Time appears as a reaper whose curved sickle sweeps up youthful beauty. Love, the speaker insists, is not Time's plaything: it does not change with his brief hours and weeks but lasts until Doomsday.",
      setting: "A harvest field under Time's sickle, stretching to the end of the world",
      who: ['Love', 'Time'],
      quote: "Love's not Time's fool",
      themes: ['Time and mortality', 'Constancy', 'Marriage, vows and judgement'],
      tension: 4,
      significance:
        "The poem concedes that beauty fades and rests love's claim on outlasting the body.",
    },
    {
      where: 'Couplet, lines 13-14',
      title: 'The wager',
      summary:
        'The speaker stakes everything on his argument: if it can be proved wrong, then he never wrote a word and no man has ever loved. Since the poem exists, the argument seems to prove itself.',
      setting: "The speaker's own challenge to the reader, in the language of a trial",
      who: ['The speaker'],
      quote: 'If this be error',
      themes: ['Certainty and proof'],
      tension: 5,
      significance:
        'The rhyming couplet turns a definition into a personal risk, and its If is the first time the speaker allows that he could be wrong.',
    },
  ],

  relationships: [
    {
      from: 'Love',
      to: 'Time',
      kind: 'opponents',
      note: 'The third quatrain is their contest. Time takes the beauty of lips and cheeks within the sweep of his sickle, but love refuses to be his fool and outlasts him to Doomsday.',
    },
    {
      from: 'The speaker',
      to: 'Love',
      kind: 'advocate and subject',
      note: 'The speaker defends love like counsel in a trial, defining it, rejecting objections, and in the couplet staking his own writing on its truth.',
    },
    {
      from: 'The remover',
      to: 'Love',
      kind: 'the test love must pass',
      note: 'False love bends with the remover; true love does not. Whether the remover is an unfaithful partner or Time itself, love is defined by refusing to follow.',
    },
  ],

  compareWith: [
    {
      title: 'My Last Duchess by Robert Browning',
      href: '/revision/poetry/power-and-conflict/my-last-duchess',
      reason:
        'Paired with Sonnet 116 on the November 2023 paper: a love that refuses to alter against a husband who could not bear his wife’s warmth to others, both in iambic pentameter.',
    },
    {
      title: 'Remember by Christina Rossetti',
      href: '/igcse/edexcel/poetry/remember',
      reason:
        'The other sonnet about love and time in Part 3, in the Petrarchan form, whose speaker would rather be forgotten than grieved for, where Shakespeare will not allow love to change.',
    },
    {
      title: 'La Belle Dame sans Merci by John Keats',
      href: '/igcse/edexcel/poetry/la-belle-dame-sans-merci',
      reason:
        'A lady who says she loves the knight and is gone when he wakes, pale and alone: the kind of love Sonnet 116 says is not love.',
    },
    {
      title: 'Do not go gentle into that good night by Dylan Thomas',
      href: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
      reason:
        'Another tightly patterned form set against death, in which the speaker urges his father to fight the end that Shakespeare says love outlasts.',
    },
  ],

  contentGuidance: ['intimate_relationships', 'mortality', 'mythological_religious'],

  quotesFromElsewhere: [
    // The anthology's own wording (page 59, read from the Pearson PDF). The held
    // Gutenberg edition prints "ever-fixed" and "prov'd", so the held-edition
    // check cannot confirm these; the Pearson source below does.
    'ever-fixèd',
    'O no, it is an ever-fixèd mark',
    'If this be error and upon me proved',
    // The marriage service of the 1559 Book of Common Prayer, as printed by the
    // Internet Shakespeare Editions (modernised spelling).
    'as you will answer at the dreadful Day of Judgment',
    'any impediment',
    // My Last Duchess, anthology pages 65-66, lines 14-15, 42-43 and 45-46;
    // checked against the anthology and src/data/full-texts/my-last-duchess.ts.
    'spot / Of joy',
    'I choose / Never to stoop',
    'I gave commands; / Then all smiles stopped together',
    // La Belle Dame sans Merci, anthology pages 60-61, stanzas III, VII, IX and XI.
    'a fading rose',
    'I love thee true',
    'in language strange',
    "On the cold hill's side",
    'lullèd',
    'gapèd',
    // Remember, anthology page 70, lines 2 and 13.
    'the silent land',
    'Better by far you should forget and smile',
    // Do not go gentle into that good night, anthology page 69, the refrain.
    'the dying of the light',
  ],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, page 59 (PDF page 65): the prescribed printing. Read on 25 September 2026 and again, from a fresh download, on 26 September 2026, as extracted text and as a rendered page image, for all fourteen lines and their numbering (5 and 10), the single-block layout, the semicolon and lower-case love in line 2, the full stop ending line 4, “O no, it is an ever-fixèd mark” in line 5, wandering in line 7, and proved and loved in lines 13 and 14. No footnotes or glosses are printed with the poem. Also read for My Last Duchess (pages 65-66), La Belle Dame sans Merci (60-61, including lullèd and gapèd), Remember (70) and Do not go gentle into that good night (69), and for the introduction saying a Poetry Booklet of all Part 3 poems is provided as an insert with the question paper',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        "Shakespeare's Sonnets, Project Gutenberg eBook #1041: the edition held as a byte copy in src/data/full-texts/sonnet-116.ts, against which every quotation and passage was checked. It differs from the anthology in ever-fixed, prov'd and lov'd, and punctuates line 5 “O, no! it is”",
      url: 'https://www.gutenberg.org/ebooks/1041',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature (4ET1) specification, Issue 3, August 2025: Paper 1 Section B is one essay question from a choice of two, comparing two poems from Part 3 of the anthology, and the section is assessed on analysis of language, form and structure and on links and connections between texts',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        'Pearson 4ET1/01 question paper, November 2023: Question 2, “Compare how the writers present their thoughts about relationships in Sonnet 116 and My Last Duchess”, with the instruction to refer to language, form and structure; the poems were printed in the Poetry Booklet issued with the paper (Part 3 of the Edexcel Anthology), Sonnet 116 on its page 8 in the same wording and punctuation as the anthology, ever-fixèd included; 40 minutes advised for Section B',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-que-20231107.pdf',
    },
    {
      label:
        'Pearson 4ET1/01 mark scheme, November 2023: indicative content for Question 2 (the marriage vows and impediments, the tempests metaphor, the Grim Reaper, the couplet as a challenge to readers; Sonnet 116 does not refer to a specific partner; the rosy lips and cheeks against the spot of joy in the Duchess’s cheek; both in iambic pentameter), the requirement of personal response, and the rule that an answer considering only one poem cannot rise beyond the lower levels',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-rms-20240125.pdf',
    },
    {
      label:
        "Pearson 4ET1/01 examiners' report (Principal Examiner Feedback), November 2023: on Question 2, very able candidates saw Shakespeare's love transcending time and Browning trying to fix time through the portrait; responses tended to be better on My Last Duchess, with fewer points on Sonnet 116; the sonnet form was an easy structure point not always grasped; some compared what neither poem did, such as alliteration",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-pef-20240125.pdf',
    },
    {
      label:
        'The Works of Shakespeare: Sonnets, ed. C. Knox Pooler, Arden Shakespeare (first series), Methuen, 1918, pages 111-112, notes on Sonnet 116: Dowden on the Prayer Book and impediments; bends with the remover means changing when one of the pair is unfaithful; mark is a sea-mark or beacon; height is altitude and the unknown worth is incalculable; Time’s fool is the sport or mockery of time (Dowden); bears it out means survives; upon me proved means proved against me, compared with proving a charge on one’s body by single combat',
      url: 'https://archive.org/details/sonnetseditedbyc00shakuoft',
    },
    {
      label:
        'Internet Shakespeare Editions (University of Victoria), The Marriage Service: The Form of Solemnization of Matrimony from the Book of Common Prayer, 1559 version, modernised spelling. The charge to the couple, “as you will answer at the dreadful Day of Judgment”, to confess “any impediment”, is quoted from it',
      url: 'https://internetshakespeare.uvic.ca/m/doc/matrimony_M/index.html',
    },
    {
      label:
        'Church of England, The Form of Solemnization of Matrimony (Book of Common Prayer, 1662): the banns formula with the words cause, or just impediment, which is the wording Dowden cites and the page above quotes. Not quoted in this file, which uses the 1559 text instead',
      url: 'https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/book-common-prayer/form-solemnization-matrimony',
    },
    {
      label:
        'Wikipedia, Sonnet 116 (wikitext read 25 September 2026), for critical readings, each paraphrased and attributed rather than quoted: Helen Vendler (1997) on the sonnet usually read as a definition of true love, on the remover as Time with his bending sickle, and on the young man’s waning attachment; Garry Murphy (1982) on an agitated protest and the stress on me, and C. R. B. Combellack (1982) in reply; Lukas Erne (2000) on alter and altar and on the mark as a sea-mark; Jeffrey Nelson and Andrew Cling (2000) on the couplet proving that he wrote but not that men have loved; also the feminine endings in lines 6 and 8 and even as one syllable in line 12 (Booth)',
      url: 'https://en.wikipedia.org/wiki/Sonnet_116',
    },
    {
      label:
        "Wikipedia, Shakespeare's sonnets: 154 sonnets first published together in a 1609 quarto by Thomas Thorpe; the Fair Youth is the unnamed young man addressed in Sonnets 1 to 126; it is not known whether the poems and their characters are fictional or autobiographical",
      url: 'https://en.wikipedia.org/wiki/Shakespeare%27s_sonnets',
    },
    {
      label:
        'Folger Shakespeare Library, Sonnet 116: the Folger text (which prints “O, no,” without an exclamation mark, and wand’ring) and its synopsis, that the poet defines the union of minds as unalterable and eternal',
      url: 'https://www.folger.edu/explore/shakespeares-works/shakespeares-sonnets/read/116/',
    },
    {
      label:
        'Wiktionary entries for bark (poetic: a sailing vessel; the entry cites Sonnet 116), compass (a space within limits, a range), remove (archaic: to depart, to change one’s place), writ (simple past of write) and his (obsolete: its, 11th to 17th century), read 26 September 2026, for the glossary and for the note that his in line 8 means its',
      url: 'https://en.wiktionary.org/wiki/his',
    },
    {
      label:
        'Shakespeare Online, Sonnet 116 with notes, ed. Amanda Mabillard: glosses of compass as range, edge of doom as Doomsday, the star as the guiding north star and bark as a ship, and the comparison of Time to the Grim Reaper; Tucker Brooke’s count of one hundred and ten words, which matches the count here',
      url: 'http://www.shakespeare-online.com/sonnets/116detail.html',
    },
  ],
}
