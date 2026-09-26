import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Poem at Thirty-Nine, Alice Walker (1984). A complete guide: the text had no
 * guide anywhere, so this file is its whole page.
 *
 * WORDING. Every quotation was checked on 26 September 2026 against the poem as
 * printed on page 62 of the Pearson Edexcel International GCSE English
 * Anthology, Issue 8 (February 2026), read from Pearson's own PDF, and again
 * against the reprint in the question booklet of the 4ET1/01 paper of 17 May
 * 2023. The two agree word for word and in their line numbering. Line numbers
 * here are the anthology's, which prints one beside every fifth line. The stanza
 * breaks were measured from the line spacing in the PDF, not read from a text
 * extraction: a plain extraction shows false breaks after lines 24 and 35, where
 * the printed line numbers sit. The poem has six stanzas, of 5, 14, 7, 7, 7 and
 * 5 lines.
 *
 * THE QUOTATION BUDGET. The poem is 168 words, so the site's limit of 15 per
 * cent (fair-dealing.ts) allows 25 distinct words on this page, and this file
 * uses all 25, in eight phrases: lines 1, 3, 13, 23, 31, 38, 41 and 43. A word
 * quoted anywhere in the prose adds to that total unless it sits inside one of
 * the eight, so nothing new can be quoted without something being taken out.
 * The validator cannot tell one poem's words from another's, so Piano, If- and
 * Do not go gentle are described here rather than quoted: each has its own
 * guide on the site, where its phrases are.
 *
 * WHAT WAS WRONG ELSEWHERE, found while this was written. The course module for
 * this poem in src/data/edexcel-igcse-lit-poetry-courses-2.ts gives students
 * "key quotations" that page 62 does not contain: a version of line 38 about
 * meals where the anthology has life, a line about paying attention, and a line
 * about laughing. None is repeated here, and that module needs checking against
 * the anthology before anyone relies on it.
 *
 * SECOND CHECK, 26 September 2026. Every phrase was re-read against page 62
 * and the 17 May 2023 reprint, and the stanza breaks re-measured: all held.
 * What did not hold: the Gale guide was said to give "several years" for
 * Walker's forgiveness of her father, and it gives no length of time (it says
 * he died before a reconciliation, which she told an interviewer came after
 * his death); the Sarah Lawrence year was given as 1965, which Wolff, following
 * White, dates January 1966, so no year is given; "adult truths" was stated as
 * fact where the poem says only "many of my truths"; and twelve runs of four to
 * six words from the poem sat unmarked in the prose, where they escaped the
 * quotation budget. They are paraphrased now.
 */
export const guide: StudyGuide = {
  slug: 'poem-at-thirty-nine',
  title: 'Poem at Thirty-Nine',
  author: 'Alice Walker',
  form: 'poem',
  scope:
    'The whole poem, as printed on page 62 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3: six stanzas, 45 lines. Line numbers in this guide follow the anthology, which prints one beside every fifth line. Set for Pearson Edexcel International GCSE English Literature (4ET1), Paper 1 Section B, where it is compared with another Part 3 poem in an essay. The Part 3 poems are printed for you in the examination.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Alice Walker 1984. First collected in Horses Make a Landscape Look More Beautiful (Harcourt Brace Jovanovich, 1984). Quoted briefly for criticism and review as printed in the Pearson Edexcel International GCSE English Anthology, which reproduces it from Collected Poems: Her Blue Body Everything We Know: Earthling Poems 1965-1990 (Orion) by permission of David Higham Associates Limited.',
  },
  workLength: {
    words: 168,
    lines: 45,
    basis:
      'Counted on 26 September 2026 from page 62 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), in Pearson’s own PDF: 45 lines in six stanzas (5, 14, 7, 7, 7 and 5 lines, the breaks measured from the PDF’s line spacing), 168 words by the validator’s word count, title and author line excluded. The line count matches the anthology’s own numbering, which reaches 45 at the last line, and the reprint in the question booklet of 17 May 2023, which is numbered the same way.',
  },

  overview: {
    summary: [
      'Poem at Thirty-Nine is Alice Walker’s poem about her father, written after his death and, as the title suggests, at the age of thirty-nine. In 45 short lines of free verse the speaker remembers what he taught her: how to fill in bank forms, which taught her to see money as a way out of the life he had known, and that being honest would not always be punished. She remembers, too, the joy he took in cooking and sharing food, finds that she has become like him, and ends by imagining the admiration he did not live to feel for the woman she is now.',
      'It is not a simple tribute. The first stanza is a regret as much as a lament: she wishes her father had not been “so tired” when she was born, which suggests a father too worn down to give her all she wanted. Stanza 3 implies that honesty was sometimes punished, and supposes that many of her own truths caused him grief before he died. The poem’s achievement is to hold love, regret and gratitude together without letting any one of them win, and that honesty is what makes its love believable.',
      'Its shape follows the shape of grief. It opens in the present with “How I miss my father.”, goes back into memory, returns to the same words at line 27, now with an exclamation mark, then comes forward into the present, where she finds she has become like him, and ends in the conditional, imagining what might have been had he lived. Pearson’s own mark scheme describes the poem as divided into two sections, past and present.',
      'For the exam: this is one of the sixteen Part 3 poems for Pearson Edexcel International GCSE English Literature, Paper 1 Section B, where you compare two poems in an essay. The poems are printed for you in the examination, so credit goes to precise analysis of language, form and structure and to sustained comparison, not to memorised quotations. The poem has been set at least three times: beside Piano on feelings about parents (June 2018, R paper), beside Do not go gentle into that good night on feelings about fathers (January 2023, R paper), and with a poem of your choice on family relationships (May 2023).',
    ],
  },

  context: [
    {
      heading: 'Alice Walker: a sharecropper’s daughter',
      body: 'Alice Walker was born on 9 February 1944 in Putnam County, Georgia, in a small community outside the town of Eatonton, the eighth and youngest child of Willie Lee Walker and Minnie Tallulah Grant Walker, who were sharecroppers. Sally Wolff’s biographical essay, drawing on Evelyn C. White’s 2004 biography, records that her father had helped to establish the local school, East Putnam Consolidated, in 1948, and that she started there at the age of four, a year early. She graduated from Butler-Baker High School as valedictorian in 1961 and went to Spelman College in Atlanta on a scholarship, helped by seventy-five dollars from members of the community in Eatonton, before transferring to Sarah Lawrence College in New York, where she completed her degree. Read against that life, the savings account of stanza 2 looks less like a small detail and more like a plan: education and careful money were how the youngest child of a sharecropping family left the fields.',
    },
    {
      heading: 'Sharecropping and the world of the poem',
      body: 'Sharecropping was the labour system that grew up in Georgia and across the South after Reconstruction and lasted until the mid-twentieth century. Families without land worked plots owned by someone else and were paid, at the end of the season, with a share of the crop, in many cases only a third of it. Through the year they bought supplies on credit, and after the harvest they tried to pay that debt from the sale of their share. The New Georgia Encyclopedia notes that a sharecropper, often unable to read, rarely had the chance to check the books and add up the debt, and that when the crop did not cover what was owed, the family was bound to the landlord for another season. That is the context for stanza 2. One reading, and a persuasive one, is that a father who teaches his daughter to fill in bank forms correctly is teaching her to control the kind of paperwork that controlled people like him, and the poem presents that learning as her way out.',
    },
    {
      heading: 'Walker and her father',
      body: 'Willie Lee Walker died on 26 January 1973, after a long illness, ten years before his daughter turned thirty-nine. The reference works agree that the relationship was difficult. One records that his own schooling had been limited and that he feared education would put barriers between him and his children, and says that their relationship ended after she left home for college in Atlanta. Sally Wolff calls it a troubled relationship and writes that his death forced Walker to come to terms with it. A Gale study guide adds that he died before the two were reconciled, reports Walker telling an interviewer that the reconciliation came only after his death, and calls finding ways to forgive him a continuing concern of hers. She returned to him in her writing more than once. Her 1979 collection is called Good Night, Willie Lee, I’ll See You in the Morning, words that, according to Evelyn C. White’s biography, her mother spoke over her husband’s coffin at his funeral, and her 1988 prose collection Living by the Word includes a piece called Father. Poem at Thirty-Nine belongs to that long reckoning. It does not pretend the relationship was easy; it records what survived the difficulty.',
    },
    {
      heading: 'The poem and its moment',
      body: 'Walker turned thirty-nine in February 1983, and the poem was collected in Horses Make a Landscape Look More Beautiful, published by Harcourt Brace Jovanovich in 1984. Pearson’s mark scheme for the May 2023 paper calls the poem autobiographical and says the title refers to Walker’s age when she wrote it. The year she turned thirty-nine was also the year of her greatest public success: her novel ‘The Color Purple’ (1982) won the Pulitzer Prize for Fiction in April 1983, and The Nation records her as the first woman of colour to win it. A poem named after an age invites a reading as a stocktaking. In middle life, and in a year of public success, she measures herself against the man she came from, and the measure she chooses is not fame but cooking, writing, work and thought.',
    },
    {
      heading: 'Civil rights and a changing South',
      body: 'Walker was a student during the civil rights movement. The New Georgia Encyclopedia records that she became active in it during her two years at Spelman, that she registered Black voters in Liberty County, Georgia, and that in 1967 she married Melvyn Rosenman Leventhal, a white civil rights lawyer, with whom she lived in Jackson, Mississippi; Sally Wolff records that they left Mississippi in 1974. The poem mentions none of this, but it may help to explain the distance between father and daughter. He belonged to a generation of Southern farm workers whose lives were bounded by the land and by heavy physical work; she belonged to one that went to college, wrote and argued in public. One reading of stanza 3 is that the adult truths which grieved him were the beliefs and choices of a new generation, hard for an older man to share. The poem does not say so, so present it as a reading.',
    },
    {
      heading: 'Womanism and the woman she became',
      body: 'In her 1983 essay collection In Search of Our Mothers’ Gardens: Womanist Prose, Walker defined her own word for her outlook, womanist, which the New Georgia Encyclopedia glosses as describing Black feminists who cherish women’s creativity, emotional flexibility and strength. The idea is useful for the last stanza. The woman she has become does work that tradition divided between the sexes, preparing food as well as splitting logs, alongside writing and quiet thought. One reading is that the closing list claims wholeness: she has inherited a man’s skills as well as a father’s habits, and needs nobody to divide her life for her. The poem never uses the word, so offer this as a reading of the list, not as Walker’s stated intention.',
    },
  ],

  themes: [
    {
      title: 'Grief and regret',
      body: 'The poem begins, and later turns, on the same five words, “How I miss my father.”, and its grief is never dramatic. There is no deathbed and no funeral; the absence is felt in ordinary moments, filling in a bank form or cooking a meal. What gives the grief its edge is regret. The first stanza regrets that he was “so tired” when she was born, a regret about the past that can never be put right and that hints at a childhood in which he was present but worn out. The last stanza’s conditional, “would have grown”, looks towards an admiration that death prevented. So the poem mourns two losses: the father who died, and the closer relationship they never quite had. It can be called an elegy, though it might be more precise to call it an elegy with an apology folded into it, because stanza 3 admits that the pain ran both ways.',
    },
    {
      title: 'What a parent passes on',
      body: 'Most of the poem is a record of lessons, and they come in three kinds. There is practical knowledge, how to manage money and paperwork (stanza 2); moral knowledge, about honesty and its cost (stanza 3); and a way of living, learned by watching him cook and share food (stanza 4). Only the first is given in his own words, and even those she has to reconstruct, since line 10 admits that she is guessing. The deepest inheritance was never taught at all but absorbed: by stanza 5 she has come to resemble him, in how she looks and in how she cooks. Walker’s point seems to be that a parent’s legacy is not property, which a sharecropping family had little of, but habits, attitudes and pleasures, and that these outlive the parent. One small word shows the shift: in line 28 like introduces a simile for him, and in line 34 the same word makes her his likeness.',
    },
    {
      title: 'Money, education and escape',
      body: 'Stanza 2 is the longest in the poem, fourteen lines, and it is about money. Her father taught her to fill in deposit slips and cheques, and she learned to see those “bits of paper” as a way out of the life he had known, keeping a savings account while still at school. The word “bits” is modest, even dismissive, yet the scraps carry great weight. For the child of sharecroppers, whose families were often unable to check the accounts that kept them in debt, a bank account of her own was a quiet revolution. One reading hears a second meaning in the “paper”: the pages of school, scholarship and writing that took Walker from rural Georgia to college and a writing life. One irony, which the poem leaves unspoken, is that the escape he taught her also carried her away from him, and a reference work records that their relationship ended after she left for college.',
    },
    {
      title: 'Truth and conflict',
      body: 'Stanza 3 is where the poem refuses to idealise him. He taught her that being honest would not always earn her “a beating”, and the qualifying adverb in line 22 concedes that sometimes it did. Pearson’s mark scheme reads the lines that way, as saying that he would sometimes beat her for the truth, and the June 2023 examiners’ report describes an answer, placed in level 4, the second-highest, that commented on how proud Walker is of her father even though the relationship was possibly abusive. A gentler reading stresses the lesson itself: honesty was usually safe with him. Then, after a semicolon, the stanza turns to many of her own truths, which she supposes caused him grief before he died. One reading is that the harm has changed direction: as a child she risked his anger for honesty; later, her honesty brought him sorrow. The most convincing reading is that the poem itself is one more of those truths, told about him after his death, and that its candour about their difficulties is what makes its love credible rather than sentimental.',
    },
    {
      title: 'Identity and independence',
      body: 'The poem ends with her, not him. Stanza 5 shows a woman at ease: her mind unburdened, improvising at the stove, and glad to feed anyone who wanders her way. Line 38 turns the cooking into a metaphor for living: with “seasoning none of my life”, and the qualification that follows in line 39, she says that no part of her life is ever flavoured in a way she has used before. One reading sees a quiet departure from her father, whose imagined instruction in stanza 2 insists on one proper way of doing things. She has kept his pleasure in food and his generosity, but not his rules. The last stanza’s list joins the kitchen, the desk, the woodpile and the fireside, so “the woman I’ve become” is practical, creative, physical and thoughtful at once. The ending suggests that identity is inheritance transformed: she is most like him precisely when she is most herself.',
    },
  ],

  characters: [
    {
      name: 'The speaker',
      role: 'The poem’s voice: a woman of thirty-nine remembering her dead father. Pearson’s mark scheme treats her as Walker herself.',
      body: 'She speaks plainly, in short lines and ordinary words, and she is honest about mixed feelings. She misses him, regrets that he was worn out when she arrived, admits that she probably caused him grief, and takes delight in finding him in herself. It is safest in an exam to write about the speaker, though the mark scheme calls the poem autobiographical and refers to Walker and to the poet. Across the poem she grows from child to adult: the pupil of stanzas 2 and 3, learning forms and honesty, becomes by stanza 5 a confident cook who feeds others and lives by her own recipe. Her final self-portrait is not boastful. In the year she turned thirty-nine Walker won the Pulitzer Prize, yet the poem lists only what she does, and it leads with cooking, the activity that connects her most plainly to him. The modesty is part of the tribute.',
    },
    {
      name: 'The father',
      role: 'The dead father she misses: a tired, hard-working man who taught her about money and honesty, and who loved to cook and share food.',
      body: 'He is seen only through her memories, and she is careful to show where memory turns into guesswork: twice she uses a modal verb of deduction (lines 10 and 25), guessing at what he said and what he felt. What she is sure of is his exhaustion at her birth, his practical lessons and his joy in the kitchen, where the simile of lines 28 to 30 makes him a dancer lost in meditation and the adjective “voluptuous” gives his appetite for shared food a rich, almost luxurious pleasure. He is never named. In life he was Willie Lee Walker, a Georgia sharecropper who died in 1973, but the poem calls him only “my father”, which makes him both particular and universal: any parent whose child grows up to see them whole. The last picture of him is conditional, the admiration he “would have grown” into had he lived.',
    },
  ],

  keyQuotes: [
    {
      text: 'How I miss my father.',
      where: 'Stanza 1, line 1',
      analysis:
        'The poem opens on its emotional centre, in five plain words. The opening word works as an exclamation of degree, meaning how much, yet the line ends with a full stop rather than an exclamation mark, so the feeling sounds settled and lived with rather than raw. The present tense matters: this is not grief remembered but grief still going on at thirty-nine. Calling him “my father” rather than using his name makes the relationship, not the man’s public identity, the subject of the poem.',
    },
    {
      text: 'so tired',
      where: 'Stanza 1, line 3',
      analysis:
        'The wish in lines 2 to 5 is a wish about the past, which can never be granted. Given a line of its own, the phrase hangs, and the enjambment makes the reader wait through line 4 before the single word of line 5, her birth. The tiredness is never explained. Read with the context of a sharecropping family in which she was the eighth child, it suggests a man worn down by work and a large family, and a daughter who felt she arrived too late to have the best of him. The tone is regret, not blame, and Pearson’s mark scheme takes the line as a sign that the relationship was not as close as she would have liked.',
    },
    {
      text: 'bits of paper',
      where: 'Stanza 2, line 13',
      analysis:
        'The paperwork of banking becomes, in lines 12 to 16, her means of escaping the life her father had known. The word “bits” makes the papers small and slight, which sharpens the irony that scraps are what free her. For a sharecropper’s child, in a system where debts were decided by accounts that sharecroppers were rarely able to check, learning to manage financial paperwork was a real kind of power. One reading hears a second meaning, since paper is also what a writer works on, so the escape is through words as well as money. That double sense suits a poet who left rural Georgia by way of education.',
    },
    {
      text: 'a beating',
      where: 'Stanza 3, line 23',
      analysis:
        'The lesson of stanza 3 is that honesty would not always bring “a beating”, and the blunt two-word line lands hard after three lines of build-up. The qualifying adverb in line 22 matters, because it concedes that sometimes honesty was punished. Pearson’s mark scheme reads the lines that way, as meaning he would sometimes beat her for the truth. A gentler reading is that he taught her honesty was usually safe with him. Either way the poem refuses to make him a saint, and a semicolon moves at once to the grief she supposes her later truths caused him.',
    },
    {
      text: 'How I miss my father!',
      where: 'Stanza 4, line 27',
      analysis:
        'The opening line returns word for word, but the full stop has become an exclamation mark. Coming straight after the admission in stanza 3 that she grieved him, the feeling breaks through the calm of the opening, as if remembering their difficulties has made her miss him more, not less. Structurally, the repetition divides the poem into two movements: what he taught her, in lines 1 to 26, and what she shares with him, in lines 27 to 45. A line repeated only once becomes the poem’s hinge.',
    },
    {
      text: 'voluptuous',
      where: 'Stanza 4, line 31',
      analysis:
        'A surprising, sensuous word for a hard-working man’s appetite. It suggests rich, bodily pleasure, and it attaches not to food itself but to sharing it: what he craved was the pleasure of eating together and feeding others. Coming after the simile of lines 28 to 30, where his cooking is compared to a dancer absorbed in meditation, it shows a man capable of joy and grace, a side the exhausted father of stanza 1 did not show her. The next line isolates the act of sharing in a single word, so the layout stresses his generosity.',
    },
    {
      text: 'seasoning none of my life',
      where: 'Stanza 5, line 38',
      analysis:
        'The cooking of stanza 4 becomes a metaphor for living, and the thought runs on into line 39: she never flavours her life identically from one time to the next. So the inheritance is not a recipe copied but an instinct for improvising. The phrase also answers stanza 2, where her father’s imagined instruction insisted on one proper way of doing things: she keeps his pleasure but drops his rule. Check your wording against the anthology, because the object of the verb is her life, not her food, and that is the whole point of the metaphor.',
    },
    {
      text: 'would have grown',
      where: 'Stanza 6, line 41',
      analysis:
        'The conditional perfect imagines something that can never happen now: his admiration for the woman she has become. The verb of growth suggests that his admiration would have taken time, and so, quietly, that he did not feel it while he lived. The line is hopeful and sad at once. It lets her grant herself the approval he did not live to give, without pretending that he gave it. Pearson’s mark scheme reads the stanza as the poet seeking her father’s approval and knowing he would be proud of her.',
    },
    {
      text: 'the woman I’ve become',
      where: 'Stanza 6, line 43',
      analysis:
        'The present perfect joins past to present: becoming is a process that began with him and is complete now. The phrase names her as a woman, not as a daughter, so the poem’s last movement is towards independence; yet the admiration she imagines is his, so even her independence is measured against him. The colon that ends the line opens onto the list of what she does, which serves as her evidence. Set beside the opening, it shows the whole journey of the poem, from “my father” to “the woman”, from his absence to her presence.',
    },
  ],

  extracts: [
    {
      title: 'What he taught her',
      where: 'Stanzas 1-3, lines 1-26',
      pointer:
        'From the opening line, “How I miss my father.”, to the end of stanza 3 at line 26: anthology page 62, the first three stanzas.',
      summary:
        'The speaker says how much she misses her father and wishes he had had more energy when she was born. Filling in bank forms makes her think of him, because he showed her how; she imagines his instructions, and says she came to regard money as her escape from the life he had known, saving even at high school. He also taught her that honesty would not always be punished, though she supposes that many of her own truths caused him grief before he died.',
      annotations: [
        {
          phrase: 'How I miss my father.',
          note: 'Present tense and a full stop: the grief is current but controlled, stated as a fact she lives with rather than cried out.',
        },
        {
          phrase: 'so tired',
          note: 'Held on its own line by enjambment, the phrase makes the reader wait for the single word of line 5, so the regret about her birth arrives slowly and quietly.',
        },
        {
          phrase: 'bits of paper',
          note: 'Deliberately slight words for something life-changing: cheques and deposit slips, and perhaps pages of writing too, become her way out of poverty.',
        },
        {
          phrase: 'a beating',
          note: 'A blunt two-word line after a long build-up. The adverb before it admits that honesty was sometimes punished, so the lesson is double-edged.',
        },
      ],
      question:
        'How does Walker use the first three stanzas to present the speaker’s feelings about what her father taught her?',
    },
    {
      title: 'What she shares with him',
      where: 'Stanzas 4-6, lines 27-45',
      pointer:
        'From the repeated line, “How I miss my father!”, at line 27 to the end of the poem at line 45: anthology page 62, the last three stanzas.',
      summary:
        'The opening cry returns, now exclaimed. She remembers her father cooking as gracefully as a dancer in meditation and craving the pleasure of sharing good food. In the present she finds she resembles him in how she looks and how she cooks: unburdened, improvising, flavouring her life differently every time and feeding anyone who comes by. She ends by imagining that, given time, he would have admired the person she now is, and lists the things she does.',
      annotations: [
        {
          phrase: 'How I miss my father!',
          note: 'The same words as line 1, now exclaimed. After the admission of stanza 3, remembering his joy makes the loss sharper, and the repetition opens the poem’s second half.',
        },
        {
          phrase: 'voluptuous',
          note: 'A rich, sensuous adjective for the pleasure of sharing food, revealing a father capable of a joy that the exhausted man of stanza 1 did not show.',
        },
        {
          phrase: 'seasoning none of my life',
          note: 'Cooking becomes a metaphor for living. She inherits his pleasure in food but not his insistence on one right way, and never repeats herself.',
        },
        {
          phrase: 'would have grown',
          note: 'The conditional perfect grants an approval he did not live to give, and the verb of growth implies that his admiration would have taken time.',
        },
        {
          phrase: 'the woman I’ve become',
          note: 'The present perfect marks a process now complete, and the colon after it presents the closing list of her activities as the proof.',
        },
      ],
      question:
        'How does Walker present the speaker’s sense of who she has become in the last three stanzas of the poem?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Repetition with a change of punctuation',
      example: '“How I miss my father.” (line 1) and “How I miss my father!” (line 27).',
      effect:
        'The only repeated line in the poem works like a refrain used just twice. The change from full stop to exclamation mark shows the feeling growing rather than fading as she remembers, and because the two lines open stanza 1 and stanza 4 they divide the poem into two halves: lessons, then likeness. In an answer, the punctuation is worth a sentence of its own.',
    },
    {
      technique: 'Enjambment and very short lines',
      example:
        'Lines 2 to 5, where “so tired” is held on a line of its own and the sentence ends on a one-word line; lines 18 to 19, which end the long second stanza on a single word.',
      effect:
        'Many lines hold two or three words, and four hold only one. The line breaks slow the reading and give the voice a hesitant, spoken quality, as though she is finding the words as she goes. They also isolate words for emphasis: her birth, the account, his dancing, the act of sharing.',
    },
    {
      technique: 'Modal verbs of deduction',
      example:
        'The same modal construction appears twice: in line 10, for what he said to her, and in line 25, for how her truths made him feel.',
      effect:
        'Twice she admits that she is guessing. She cannot remember his exact words of instruction, and she can only infer how her own honesty affected him. The modal verbs make the poem truthful about memory: it reconstructs a father rather than simply recording one, and it concedes that parts of him were closed to her.',
    },
    {
      technique: 'Imagined direct speech',
      example:
        'Lines 9 to 11: his remembered, or imagined, instruction about the correct form is split in two by the reporting clause of line 10, which ends in a colon.',
      effect:
        'For a moment the father speaks, and his voice is practical, patient and exact, the voice of a man who wanted his daughter to get the paperwork right. Because her guess about his words sits in the middle of them, his voice and her uncertainty are woven together. His insistence on one correct way is worth remembering, because stanza 5 answers it: his daughter never flavours her life to one recipe.',
    },
    {
      technique: 'Simile',
      example:
        'Lines 28 to 30 compare the way he cooked to the movement of someone who dances while deep in yoga meditation.',
      effect:
        'The comparison joins opposites, movement and stillness, energy and calm, and presents cooking as something close to an art or a devotion, done with the whole body and a quiet mind. One reading notices that the image belongs to the speaker’s adult vocabulary rather than to his world: she translates his kitchen into her own terms, as the whole poem translates him.',
    },
    {
      technique: 'Sensuous diction',
      example: '“voluptuous” (line 31), followed by a line that holds a single word, for sharing.',
      effect:
        'A word of rich physical pleasure is attached to a working man’s love of feeding others, which is unexpected and moving. It shows a side of the father that stanza 1 did not, and the isolated line after it makes generosity, not appetite, the thing he craved. It prepares for her own generosity at the end of stanza 5.',
    },
    {
      technique: 'Extended metaphor of cooking',
      example:
        'From his cooking in stanza 4 to her own in stanza 5, where improvised cooking and “seasoning none of my life” describe how she lives.',
      effect:
        'Cooking stops being an activity and becomes a way of living: improvised, generous and never repeated. Because the metaphor grows out of his kitchen, it shows exactly how inheritance works in this poem: she takes his practice and turns it into her philosophy.',
    },
    {
      technique: 'Internal rhyme and a shift in likeness',
      example:
        'Line 34 rhymes two verbs within the line; the word like, used in line 28 for a simile about him, returns in line 34 for her resemblance to him.',
      effect:
        'In a poem with no rhyme scheme, the internal rhyme of line 34 stands out, binding how she looks to what she does, as if resemblance were both physical and practical. The move of like from simile to likeness is subtle but telling: in stanza 4 he is compared to something else, and in stanza 5 she is compared to him.',
    },
    {
      technique: 'Conditional perfect and present perfect',
      example: '“would have grown” (line 41), set against “the woman I’ve become” (line 43).',
      effect:
        'Two tenses meet in the last stanza. The conditional perfect describes what never happened, his admiration; the present perfect describes what has, her becoming. The gap between the two is the gap his death made, and the poem closes by placing her achievement where his approval should have been.',
    },
    {
      technique: 'A list without conjunctions',
      example:
        'Lines 44 to 45: four activities in present participles, separated by commas with no and, moving from the kitchen and the desk to the woodpile and the fireside.',
      effect:
        'The -ing forms make the activities ongoing, her life as it is lived now, and the missing conjunctions make the list feel open, as if it could go on. It crosses the lines tradition drew between women’s and men’s work, and between doing and thinking, so it presents a whole person. It ends in stillness, gazing at a fire, a contemplative close for a poem that has been remembering all along.',
    },
  ],

  structureForm: [
    {
      heading: 'Free verse in six stanzas',
      body: 'The poem has no regular rhyme scheme or metre. It runs to 45 lines in six stanzas of 5, 14, 7, 7, 7 and 5 lines, so the first and last stanzas match and frame the poem, and stanzas 3, 4 and 5 are seven lines each. Free verse suits the subject: this is a daughter thinking aloud, and the form follows the rhythm of memory rather than a pattern imposed from outside. Pearson’s mark scheme links the first person and the free verse to the poem’s personal, nostalgic reflection. One reading goes further. Stanza 2 honours the correct way to fill in a form; the poem itself declines any fixed form, just as she declines to repeat a recipe.',
    },
    {
      heading: 'Two halves and a hinge',
      body: 'The line that opens the poem returns to open stanza 4, so the poem falls into two movements. Lines 1 to 26 are about what he taught her, money and honesty; lines 27 to 45 are about what she shares with him, food, generosity and a way of being. Pearson’s mark scheme describes the division as past and present, and both descriptions work: the first half is lessons remembered, the second is likeness discovered.',
    },
    {
      heading: 'Past, present and conditional',
      body: 'Follow the tenses and you follow the argument. The poem starts in the present, with her missing him; moves into the past for his lessons and his cooking; returns to the present in stanza 5, where she is like him now; and ends in the conditional, with what he would have felt, and the present perfect, with who she has become. The movement is from memory to identity: the father is recovered in the past only to be found again in the present, in her.',
    },
    {
      heading: 'The longest stanza',
      body: 'Stanza 2, at fourteen lines, is twice the length of the next longest. Money and escape get the most space, and the very short lines stretch the lesson out one small step at a time, like instructions for filling in a form. The stanza ends on a one-word line, the account she kept at high school, a small word standing for a whole future.',
    },
    {
      heading: 'Line breaks that isolate',
      body: 'Some of the poem’s most important words stand alone. The one-word lines at 5, 19, 29 and 32 hold her birth, the account, his dancing and the act of sharing, and isolation gives each one weight. The effect is quiet emphasis rather than drama, which matches the plain, controlled voice of the whole poem.',
    },
    {
      heading: 'Punctuation as structure',
      body: 'Full stops close the plain statements of the first half. Semicolons in stanzas 3 and 5 chain clauses together, as though one memory leads straight to the next, and the mid-line semicolon in line 39 makes a pause inside the line. Colons at the ends of lines 10, 34 and 43 open onto speech, explanation and a list. The last colon matters most: it presents the list of what she does as proof of who she has become.',
    },
    {
      heading: 'Title and ending',
      body: 'The title is plain and factual, a milestone rather than a subject, and it frames the poem as a stocktaking at a particular age. The first line is about him; the last lines are about her. That movement, from “my father” to “the woman I’ve become”, is the poem’s argument about inheritance in miniature, and it ends not on grief but on a picture of calm, a woman gazing at a fire. There is even a rare rhyme to close on: the last word of the poem chimes with the last word of line 42, so the final sound echoes the admiration she imagines.',
    },
  ],

  vocabulary: [
    {
      term: 'Deposit slip (line 6)',
      definition:
        'A form filled in when paying money into a bank account. Here it is the everyday task that brings her father back to mind.',
    },
    {
      term: 'Checks (line 6)',
      definition:
        'The American spelling of cheques: written orders telling a bank to pay money from an account. Walker is American; in your own writing use the British spelling, cheques.',
    },
    {
      term: 'High school (line 17)',
      definition:
        'In the United States, the school students attend from about fourteen to eighteen, the age of GCSE and A level students in England.',
    },
    {
      term: 'Savings account (lines 18 to 19)',
      definition:
        'A bank account for keeping and building up money rather than spending it. Holding one at high school shows unusual care with money for a child from a poor family.',
    },
    {
      term: 'Yoga meditation (line 30)',
      definition:
        'Yoga is a discipline of posture, breathing and meditation; meditation is calm, focused attention. Joined to dancing, it suggests movement that is also stillness.',
    },
    {
      term: 'Voluptuous (line 31)',
      definition:
        'Full of, or giving, rich sensual pleasure. An unexpected word for the sharing of food, which is why it stands out.',
    },
    {
      term: 'Seasoning (line 38)',
      definition:
        'Adding salt, herbs or spices to food for flavour. Here, a metaphor for how she gives her life its flavour.',
    },
    {
      term: 'Sharecropper',
      definition:
        'A farmer who works land owned by someone else in return for a share of the crop, often ending the year in debt to the landowner. Walker’s parents were sharecroppers in Georgia.',
    },
    {
      term: 'Elegy',
      definition:
        'A poem of mourning for someone who has died. This one mourns and celebrates at once, and admits regret as well.',
    },
    {
      term: 'Free verse',
      definition:
        'Poetry without a regular rhyme scheme or metre, shaped by the rhythms of speech and thought.',
    },
    {
      term: 'Enjambment',
      definition:
        'When a sentence runs on from one line to the next without a pause, as in lines 2 to 5.',
    },
    {
      term: 'Caesura',
      definition:
        'A pause within a line, often marked by punctuation, as at the semicolon in line 39.',
    },
    {
      term: 'Modal verb',
      definition:
        'A verb such as must, would, could or might, expressing certainty, possibility or obligation. In lines 10 and 25 it signals that she is guessing.',
    },
    {
      term: 'Conditional perfect',
      definition:
        'A verb form (would have plus a past participle) for something that could have happened but did not, as in “would have grown” in line 41.',
    },
    {
      term: 'Present perfect',
      definition:
        'A verb form (have plus a past participle) linking the past to now, as in “the woman I’ve become” in line 43.',
    },
    {
      term: 'Asyndeton',
      definition:
        'Listing without joining words such as and, as in the last two lines of the poem.',
    },
    {
      term: 'Speaker',
      definition:
        'The voice of a poem. Pearson’s mark scheme treats this poem as autobiographical, but writing about the speaker keeps your analysis on what the words do.',
    },
    {
      term: 'Womanist',
      definition:
        'Walker’s term for a Black feminist outlook that values women’s creativity, emotional flexibility and strength.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Past paper, May 2023 (Paper 1, Section B, Question 3). Re-read Poem at Thirty-Nine. Compare the ways the writers present family relationships in Poem at Thirty-Nine and one other poem from the anthology. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill:
          'Comparison of two poems: analysis of language, form and structure, and of the links between the poems',
        guidance: [
          'Choose the second poem for contrast as well as likeness. Pearson’s mark scheme asks for a poem in which family relationships are a significant theme and names If-, Piano, My Last Duchess and Do not go gentle into that good night. In the examiners’ report on this paper, the pairing with If- gave the most consistently sound answers, and one examiner judged Piano the most effective partner.',
          'Open with a comparative argument, not a summary. With Piano, for example: both speakers are adults looking back at a parent, but Lawrence’s memory overwhelms him, while Walker’s memories lead her to recognise herself.',
          'The relationship as regret: “so tired” in stanza 1, and the admission in stanza 3 that her truths grieved him. Show that Walker presents a relationship with real difficulties, not an idealised one.',
          'The relationship as inheritance: the lessons of stanzas 2 and 3, then the likeness of stanza 5 and the metaphor of “seasoning none of my life”.',
          'Form and structure: free verse and very short lines; the opening line repeated at line 27, dividing lessons from likeness; the movement from past to present to conditional. Set each against the form of your second poem.',
          'Language: the modal verbs of deduction in lines 10 and 25, the simile of lines 28 to 30, “voluptuous”, and the conditional “would have grown”. Explain the effect of each, not just its name.',
          'Keep both poems in every paragraph, joined by comparative connectives (whereas, similarly, by contrast). The report found that weaker answers dealt with each poem separately, while the ablest wove language and structure analysis of both together. End with a judgement: which relationship is presented as more resolved, and by what means.',
        ],
      },
      {
        question:
          'June 2018 R paper (Paper 1, Section B, Question 2), as Pearson’s summary of questions set abbreviates it: Compare the ways the writers convey feelings about parents in Piano and Poem at Thirty-Nine. Section B questions ask you to refer to language, form and structure and to support your answer with examples from the poems.',
        skill: 'Comparison of two named poems on one theme',
        guidance: [
          'Name the feelings in each poem before you plan. Walker: longing, regret, gratitude, recognition and imagined approval. Lawrence: longing too, but also resistance, helplessness and grief for his own lost childhood.',
          'Compare what sets the memory off. In Piano a woman singing at dusk carries the speaker back in spite of himself; in Walker’s poem the ordinary task of filling in bank forms prompts a lesson. Music floods one speaker; paperwork steadies the other.',
          'Compare the parents. Lawrence’s mother is glimpsed once, smiling at the piano, in a warm, idealised scene. Walker’s father is shown whole: tired, sometimes harsh, generous and joyful in the kitchen.',
          'Compare form: three rhymed quatrains of long lines in couplets against free verse in short lines. Ask which form lets feeling flood and which holds it at a measured, halting pace.',
          'Compare endings. Lawrence’s last line leaves the grown man in tears, a child again; Walker ends in the present with “the woman I’ve become”. One speaker is pulled back into childhood; the other grows into her inheritance.',
          'Conclude with a judgement: which speaker’s feelings are more resolved, and how do form and ending make them so?',
        ],
      },
      {
        question:
          'January 2023 R paper (Paper 1R, Section B, Question 2), as its examiners’ report summarises it: Compare how the writers present feelings about fathers in Poem at Thirty-Nine and Do not go gentle into that good night. Section B questions ask you to refer to language, form and structure and to support your answer with examples from the poems.',
        skill: 'Comparison of two named poems on one theme',
        guidance: [
          'Name the feelings precisely before you start. Walker: longing, regret, gratitude, pride and an imagined approval. Thomas: fear, anger, urgency, and love expressed as a command.',
          'Compare the situations. Thomas’s speaker addresses a father close to death, in the present, and speaks to him directly in the final stanza. Walker’s father has been dead for years, and she speaks about him, not to him. That difference shapes every feeling in both poems.',
          'Compare form. Thomas writes a villanelle, nineteen lines built on two refrains that keep returning; Walker writes free verse in which one line returns only once. Ask what each form does to the feeling: insistence and control against hesitation and honesty.',
          'Compare endings. Thomas’s final quatrain closes on both refrains, still urging resistance; Walker ends with an imagined admiration (“would have grown”) and a calm portrait of herself. Which poem finds peace, and how does its structure get there?',
          'Cover the whole of Thomas’s poem. The examiners reported that close analysis was often not sustained and that coverage of Do not go gentle was often more limited; the June 2023 report found comparisons with it very selective.',
          'Mention the autobiographical link only where it sharpens a point about the words. The report noted that it was often mentioned; it does not replace analysis.',
        ],
      },
      {
        question:
          'Practice question in the style of Section B. Compare how the writers present what a parent passes on to a child in Poem at Thirty-Nine and If-. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparison of two poems on inheritance and advice',
        guidance: [
          'Start from the direction of the lessons. Kipling’s speaker gives advice to a son before the son has lived it; Walker’s speaker has received lessons and looks back, after her father’s death, to see which ones lasted.',
          'Compare what is taught. If- teaches self-control, endurance and modesty in success and failure; Walker’s father teaches money and honesty in words, and generosity and pleasure by example.',
          'Compare form. If- is one long sentence of conditional clauses across four rhymed eight-line stanzas, and its main clause does not arrive until line 31, so the reward waits until every condition is met. Walker’s free verse moves by memory, not by argument.',
          'Compare voice. Kipling’s speaker is confident and never doubts his rules; Walker’s admits guesswork twice, with the modal verbs of lines 10 and 25, and admits that the lessons had a cost.',
          'Push past the obvious link. One examiner in the June 2023 report commented that If- offered little to compare beyond being addressed to a son, so compare methods and attitudes, for instance Kipling’s single model of manhood against the mixed, self-made identity of Walker’s last stanza.',
          'Finish with a judgement about whose lessons are shown to last, and why.',
        ],
      },
    ],
    tips: [
      'The Part 3 poems are printed for you in the examination, so you do not need to memorise long quotations. Know where things are instead: stanza 2 for money, stanza 3 for honesty, stanza 4 for food, and the last two stanzas for who she has become.',
      'Section B assesses two skills: analysis of language, form and structure, and comparison between the poems. Context is not one of the skills this section assesses, so use Walker’s life only in a clause, where it sharpens a point about the words.',
      'Compare all the way through. In the June 2023 examiners’ report, weaker answers dealt with each poem separately, with minimal links, while the ablest wove structural and language analysis of both poems together.',
      'Choose your partner poem with care when the choice is yours. On the May 2023 paper most candidates chose Piano, If- or Do not go gentle into that good night, and the examiners’ report says all worked well; Prayer Before Birth, Remember and Sonnet 116 generally produced less positive answers, because they are less closely tied to family, though one examiner found Remember often ably compared. If you choose Do not go gentle, cover the whole poem, not just its refrains.',
      'Sustain the close analysis. On the January 2023 paper, the examiners found that some answers gave a good range of examples without exploring them in enough detail, and that techniques needed linking to their effect on the reader.',
      'Do not flatten the relationship into a simple loving tribute: that misses stanzas 1 and 3. One examiner described the poem as offering celebration, regret, grief and reminiscence. The strongest overall point is that these sit side by side, and that the poem’s honesty about his faults is what makes its love convincing.',
      'Use the structural details few students notice: the one repeated line and its change of punctuation; the two modal verbs of deduction in lines 10 and 25; and the noun way in lines 11, 14, 39 and 40, which moves from his one right way to her refusal to repeat herself.',
      'Check your wording against the anthology. Line 38 is about seasoning her life, not her food, and misremembering it as a line about meals throws away the metaphor.',
      'Offer alternatives on the hard lines, then choose. On stanza 3, for instance, give the mark scheme’s reading (he sometimes punished her honesty) and a gentler one (he taught her honesty was usually safe), and say which you find more convincing and why.',
      'Manage your time. The May 2023 paper advised 40 minutes for Section B, and the June 2023 report recommends practising past questions within that time.',
      'Write about the speaker. Pearson’s mark scheme treats the poem as autobiographical, but analysing a speaker keeps you on what the words and the form are doing.',
    ],
  },

  modelAnswer: {
    question:
      'Compare the ways the writers convey feelings about parents in Piano and Poem at Thirty-Nine. (June 2018 R paper, as Pearson’s summary of questions set abbreviates it.)',
    paragraph:
      'Both speakers are adults remembering a parent, but where Lawrence’s memory overwhelms him, Walker’s steadies her. Walker’s opening line, “How I miss my father.”, states her grief in five plain words and closes it with a full stop, as though longing has become a settled part of her life; when the line returns at line 27 with an exclamation mark, the feeling breaks through, and the repetition divides her poem into what he taught her and what she has become. Lawrence’s memory moves only backwards. The song carries him into childhood against his will, and by the final couplet the grown man has been reduced to a child in tears, his adulthood swept away. The forms reinforce the difference. Lawrence’s long lines and rhyming couplets have the swell of the music that undoes him, while Walker builds her poem from very short lines, such as “so tired”, held alone by enjambment, so that she sounds as if she is choosing each word with care. Her feelings are also more mixed than his. Lawrence’s mother is glimpsed only as a smiling figure in a warm family scene, whereas Walker admits regret, and even that honesty was sometimes met with “a beating”. Yet it is Walker who ends at peace. The conditional “would have grown” imagines an admiration that death prevented, and the present perfect of “the woman I’ve become” shows the father living on in the daughter. Lawrence loses his adult self to the past; Walker finds hers there.',
    commentary: [
      'It opens with a comparative argument that answers the question directly: both poems remember a parent, and the difference lies in what memory does to each speaker.',
      'It analyses punctuation, the full stop and the exclamation mark, which is the kind of precise language point examiners want developed rather than simply named.',
      'It compares form head to head, rhyming couplets against short free-verse lines, and says what each form does to the feeling, so structure is tied to meaning in both poems.',
      'It shows range in the feelings: Walker’s regret and the hint of punishment set against Lawrence’s idealised scene, so neither poem is flattened into simple nostalgia.',
      'Each quotation from Walker is short, embedded and followed by analysis. Piano is discussed through precise reference to its couplets, its mother and its final line; in your own answer, quote a phrase or two from Lawrence as well, which the Piano guide on this site sets out.',
      'It ends on a balanced judgement in a single sentence, and it uses no biography, because Section B assesses analysis and comparison, not context.',
    ],
  },

  timeline: [
    {
      where: 'Stanza 1, lines 1-5',
      title: 'Missing him',
      summary:
        'The speaker states simply how much she misses her father, then wishes he had had more energy when she was born, a regret that the relationship began with a man already worn out.',
      setting: 'The present, looking back to her birth',
      who: ['The speaker', 'The father'],
      quote: 'How I miss my father.',
      themes: ['Grief and regret'],
      tension: 3,
      significance:
        'Sets the tone of the whole poem: grief that is controlled, and mixed with regret from the first stanza.',
    },
    {
      where: 'Stanza 2, lines 6-19',
      title: 'The lesson of the cheque book',
      summary:
        'Filling in bank forms reminds her that he showed her how. She imagines his instructions, and remembers coming to regard money as a way out of the life he had known, saving even at high school.',
      setting: 'Bank forms in the present; her childhood and schooldays in the past',
      who: ['The speaker', 'The father'],
      quote: 'bits of paper',
      themes: ['What a parent passes on', 'Money, education and escape'],
      tension: 2,
      significance:
        'The longest stanza, and the first lesson: money and paperwork as the route out of the life he lived.',
    },
    {
      where: 'Stanza 3, lines 20-26',
      title: 'Truth and its cost',
      summary:
        'He taught her that honesty would not always be punished, though she supposes that many of her own truths, told in the years that followed, caused him grief before he died.',
      setting: 'Her childhood, then the years before his death',
      who: ['The speaker', 'The father'],
      quote: 'a beating',
      themes: ['Truth and conflict', 'What a parent passes on'],
      tension: 4,
      significance:
        'The poem’s most honest moment: it refuses to idealise him or her, and admits that the hurt ran both ways.',
    },
    {
      where: 'Stanza 4, lines 27-33',
      title: 'His kitchen',
      summary:
        'The opening line returns, now exclaimed. She remembers him cooking as gracefully as a dancer in meditation, and craving the pleasure of sharing good food with others.',
      setting: 'Her father’s kitchen, remembered',
      who: ['The speaker', 'The father'],
      quote: 'voluptuous',
      themes: ['Grief and regret', 'What a parent passes on'],
      tension: 4,
      significance:
        'The hinge of the poem: the grief breaks through, and the lessons give way to a joy he lived rather than taught.',
    },
    {
      where: 'Stanza 5, lines 34-40',
      title: 'Just like him',
      summary:
        'In the present she finds she resembles him in how she looks and cooks: unburdened, improvising at the stove, flavouring her life differently every time, and glad to feed anyone who comes her way.',
      setting: 'Her own kitchen, now',
      who: ['The speaker'],
      quote: 'seasoning none of my life',
      themes: ['Identity and independence', 'What a parent passes on'],
      tension: 2,
      significance:
        'Inheritance becomes identity: his habits have become hers, changed into a philosophy of her own.',
    },
    {
      where: 'Stanza 6, lines 41-45',
      title: 'The woman she has become',
      summary:
        'She imagines that, given time, he would have admired the person she is now, and ends on a list of what she does, from the kitchen and the desk to the woodpile and the fireside.',
      setting: 'An imagined future that his death prevented; the present, by a fire',
      who: ['The speaker', 'The father'],
      quote: 'the woman I’ve become',
      themes: ['Identity and independence', 'Grief and regret'],
      tension: 3,
      significance:
        'Ends the movement from past to present by granting her the approval he did not live to give.',
    },
  ],

  relationships: [
    {
      from: 'The speaker',
      to: 'The father',
      kind: 'daughter and father',
      note: 'Loving but uneven: he was worn out when she was born, and she supposes that her own truths later grieved him. Grief lets her see him whole, and the poem ends on the admiration she imagines he would have felt.',
    },
    {
      from: 'The father',
      to: 'The speaker',
      kind: 'teacher and pupil',
      note: 'He teaches in words, about money and honesty, and by example, in the kitchen. By stanza 5 the pupil has become his likeness, and by stanza 6 someone he would have learned to admire.',
    },
  ],

  compareWith: [
    {
      title: 'Piano (D H Lawrence)',
      href: '/igcse/edexcel/poetry/piano',
      reason:
        'Paired with this poem on the June 2018 R paper, on feelings about parents, and judged the most effective partner by one examiner in the June 2023 report: both adults are carried back to a parent, but Lawrence ends overwhelmed in rhymed couplets, while Walker ends at peace in free verse.',
    },
    {
      title: 'Do not go gentle into that good night (Dylan Thomas)',
      href: '/revision/texts/do-not-go-gentle-into-that-good-night',
      reason:
        'Set beside this poem on the January 2023 R paper: Thomas urges a dying father to fight in a strict villanelle, while Walker, years after the death, finds her father living on in her. Examiners found comparisons with it often selective, so cover the whole poem.',
    },
    {
      title: 'If- (Rudyard Kipling)',
      href: '/igcse/edexcel/poetry/if',
      reason:
        'The June 2023 examiners found this pairing gave the most consistently sound answers, on education and role models: Kipling’s speaker sets out rules for a son, while Walker, on the receiving side, shows which lessons survived and how she changed them.',
    },
    {
      title: 'Search For My Tongue (Sujata Bhatt)',
      href: '/revision/texts/search-for-my-tongue',
      reason:
        'A popular partner for Bhatt’s poem on the January 2023 R paper’s question about loss: both present an inheritance that seems lost and then lives on inside the speaker, Bhatt’s mother tongue growing back and Walker’s father resurfacing in her cooking and habits.',
    },
  ],

  contentGuidance: ['mortality', 'violence'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 3, page 62: the poem as prescribed, read on 26 September 2026 from Pearson’s PDF; its stanza layout (measured from the PDF line spacing), line numbering and 168-word count; the contents list of sixteen Part 3 poems; acknowledgements on page 73 (Collected Poems: Her Blue Body Everything We Know: Earthling Poems 1965-1990, Orion; by permission of David Higham Associates). Every quotation checked against this text.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Pearson, 4ET1/01 question booklet, 17 May 2023: Section B Question 3 on family relationships, wording reproduced in exam practice; Section B advised at 40 minutes; the poems included with the paper; the reprint of the poem, identical in wording and line numbering to the anthology, used as a second check of every quoted phrase; its acknowledgement names Horses Make a Landscape Look More Beautiful.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-que-20230518.pdf',
    },
    {
      label:
        'Pearson, Mark scheme (Results) Summer 2023, 4ET1/01, Question 3: the poem as autobiographical and the title as Walker’s age when she wrote it; the relationship not as close as she would have liked; the father sometimes beating her for the truth; the poet seeking his approval; free verse and the first person; the division into past and present; the suggested comparison poems; the section assessing language, form and structure and links between texts.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-rms-20230824.pdf',
    },
    {
      label:
        'Pearson, Examiners’ report June 2023, 4ET1 01, Question 3: the partner poems most chosen; If- as the most consistently sound pairing, on education and role models; comparisons with Do not go gentle very selective; weaker answers treating the poems separately; one examiner on celebration, regret, grief and reminiscence and on Piano as the most effective partner; the level 4 exemplar on pride despite a possibly abusive relationship; 40 minutes.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-pef-20230824.pdf',
    },
    {
      label:
        'Pearson, Examiners’ report January 2023, 4ET1 Paper 1R: Question 2 on feelings about fathers in Poem at Thirty-Nine and Do not go gentle, the most popular anthology question; close analysis often not sustained; coverage of Do not go gentle often more limited; the autobiographical link often mentioned; Poem at Thirty-Nine a popular partner for Question 3 on loss in Search For My Tongue.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/exam-materials/4et1-01r-pef-20230302.pdf',
    },
    {
      label:
        'Pearson, Question style for 4ET1 SAMs to January 2019 (Issue 1, February 2021): the June 2018 R paper, Section B Question 2, on feelings about parents in Piano and Poem at Thirty-Nine (abbreviated); R papers are sat in countries with major time differences to GMT; Section B assesses language, form and structure.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/summary-of-questions-set-for-4et1-sams-to-january-2019.pdf',
    },
    {
      label:
        'New Georgia Encyclopedia, Alice Walker (b. 1944): birth in Eatonton on 9 February 1944, parents as sharecroppers, eighth and youngest child, two years at Spelman and civil rights activity there, Sarah Lawrence BA 1965 (Wolff, following White, dates the graduation January 1966, so the guide gives no year), voter registration in Liberty County, marriage to Melvyn Rosenman Leventhal and life in Jackson, Mississippi, The Color Purple (1982) and the 1983 Pulitzer Prize, Horses Make a Landscape Look More Beautiful (1984), In Search of Our Mothers’ Gardens (1983) and the term womanist.',
      url: 'https://www.georgiaencyclopedia.org/articles/arts-culture/alice-walker-b-1944/',
    },
    {
      label:
        'New Georgia Encyclopedia, Sharecropping: developed after Reconstruction and lasted until the mid-twentieth century; in many cases a third of the crop; supplies on credit; sharecroppers, often illiterate, rarely able to check the books; bound to the landlord for another season when the crop did not cover the debt.',
      url: 'https://www.georgiaencyclopedia.org/articles/history-archaeology/sharecropping/',
    },
    {
      label:
        'Sally Wolff, Biography of Alice Walker, in Critical Insights: Alice Walker (Salem Press), citing Evelyn C. White, Alice Walker: A Life (Norton, 2004): birth in Wards Chapel outside Eatonton, Putnam County; last of eight children; East Putnam Consolidated, established with her father’s help in 1948, starting at four; Butler-Baker High School valedictorian 1961; Spelman scholarship and seventy-five dollars from the community; graduation from Sarah Lawrence with honours in January 1966; Willie Lee Walker’s death on 26 January 1973 after a long fight with emphysema, diabetes and pneumonia, and his death forcing her to come to terms with their troubled relationship; leaving Mississippi in 1974.',
      url: 'https://salempress.com/Media/SalemPress/samples/walker_pgs.pdf',
    },
    {
      label:
        'EBSCO Research Starters, Alice Walker: her father’s limited educational opportunities, his fear that education would place barriers between him and his children, and the relationship ending after she left for college in Atlanta.',
      url: 'https://www.ebsco.com/research-starters/biography/alice-walker',
    },
    {
      label:
        'Encyclopedia.com (Gale, Poetry for Students), Good Night, Willie Lee, I’ll See You in the Morning: the collection of 1979; White’s claim that Walker’s mother spoke the title phrase over her husband’s casket at his funeral; her father’s death in 1973 before a reconciliation had been effected; Walker telling David Bradley that the reconciliation came after his death; forgiving her father as a continuing concern of hers.',
      url: 'https://www.encyclopedia.com/arts/educational-magazines/good-night-willie-lee-ill-see-you-morning',
    },
    {
      label:
        'Encyclopedia.com (Gale), Alice Walker: Horses Make a Landscape Look More Beautiful, Harcourt, 1984 (London, Women’s Press, 1985); Living by the Word: Selected Writings, 1973-1987, Harcourt, 1988.',
      url: 'https://www.encyclopedia.com/people/literature-and-arts/american-literature-biographies/alice-walker',
    },
    {
      label:
        'Internet Archive record of Horses Make a Landscape Look More Beautiful: Poems, first edition, Harcourt Brace Jovanovich, San Diego, 1984.',
      url: 'https://archive.org/details/horsesmakelandsc00walk',
    },
    {
      label:
        'Internet Archive record of Living by the Word: Selected Writings, 1973-1987 (Harcourt Brace Jovanovich, 1988): its contents include the piece Father.',
      url: 'https://archive.org/details/livingbywordsele00walk',
    },
    {
      label:
        'The Nation, April 18, 1983: Alice Walker becomes the first woman of colour to win the Pulitzer Prize for Fiction, for The Color Purple.',
      url: 'https://www.thenation.com/article/archive/april-18-1983-alice-walker-becomes-first-woman-color-win-pulitzer-prize-fiction/',
    },
    {
      label:
        'Comparison facts checked in the same anthology PDF: Piano (page 57) is three quatrains in rhymed couplets, with a woman singing at dusk, a smiling mother and a speaker who weeps for the past in the last line; Do not go gentle into that good night (page 69) is 19 lines in five tercets and a quatrain, addressed to the speaker’s father in the last stanza; If- (page 51) is four eight-line stanzas and one sentence, thirteen lines opening with If, its main clause in line 31 and its last words addressed to a son; Search For My Tongue (page 54) has the mother tongue growing back.',
    },
  ],
}
