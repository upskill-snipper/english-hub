import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Half-past Two, U A Fanthorpe (1992). A supplement: the page at
 * /resources/revision-notes/half-past-two keeps its overview, context, themes,
 * voice, key quotations, language and form sections, and this file adds the
 * four it lacked (key passages, vocabulary, exam practice and a model answer),
 * with the scene cards and character map.
 *
 * WORDING. Every quotation was checked word for word against the poem as the
 * student studies it: page 56 of the Pearson Edexcel International GCSE English
 * Anthology, Issue 8 (February 2026), Part 3. Pearson's PDF was fetched from
 * qualifications.pearson.com on 25 September 2026 and its SHA-256 matched a copy
 * already held in a scratch folder, so the two are the same file. Line numbers
 * are the anthology's, which prints one beside every fifth line. The stanza
 * breaks were measured from the page layout (line positions in the PDF), not
 * assumed: eleven tercets, 33 lines. A teacher's one-sheet revision handout
 * (engteacherabroad.com) was used as an independent second text and agrees on
 * every phrase quoted here.
 *
 * ITALICS. The anthology sets the teacher's words in lines 25 to 27 (My
 * goodness, I forgot all about you, and Run along or you'll be late) in
 * italic, with no speech marks: read from the font of each span in Pearson's
 * PDF. The first draft of this file said her words were "folded into the
 * narration", which the italics contradict.
 *
 * THE QUOTATION BUDGET. The poem is 199 words, so the site's limit of 15 per
 * cent (fair-dealing.ts) allows 29 distinct words on this page. This file uses
 * 27, in thirteen short phrases, and reuses them rather than adding more. Every
 * other reference is by line number and paraphrase, and single words of the
 * poem named in analysis (the verb hides, the word schooltime) are mentioned
 * rather than quoted, as in the other guides.
 *
 * THE PAGE ABOVE, checked while this was written, is right about the eleven
 * tercets and most of its short quotations, and wrong in these places:
 * - It quotes line 32 as the clockless land "of ever", four times (the Escape
 *   theme, two key-quotation cards and an exam tip). The anthology reads
 *   "clockless land for ever". The "ever" it is thinking of is
 *   line 24, "into ever". This guide quotes the line correctly and a tip warns
 *   students about the slip.
 * - Its card on Something Very Wrong says the boy "must never forget" it. The
 *   poem contains no such words: lines 5-6 say he must stay in the school-room.
 * - It prints "timeformykisstime" and "into the smell..." in lower case; the
 *   anthology capitalises both (lines 13 and 22).
 * - It says the boy is kept behind "after school", and calls kiss time a
 *   goodnight kiss. The poem says neither.
 * - It says the poem is set for English Language A and Literature. The
 *   anthology puts it in Part 3, which only English Literature (4ET1) studies.
 * - It names assessment objectives by number throughout, which the house rule
 *   now forbids.
 */
export const guide: StudyGuide = {
  slug: 'half-past-two',
  title: 'Half-past Two',
  author: 'U A Fanthorpe',
  form: 'poem',
  scope:
    'The whole poem, 33 lines in eleven three-line stanzas, as printed on page 56 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3. Set for Pearson Edexcel International GCSE English Literature (4ET1), Paper 1 Section B, where it is compared with another Part 3 poem. Line numbers in this guide follow the anthology, which prints one beside every fifth line.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© U A Fanthorpe 1992. As printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), which gives its source as New and Collected Poems (Enitharmon Press, 2010) and reproduces it by permission of Dr R V Bailey. Quoted here in short phrases for criticism and review.',
  },
  workLength: {
    words: 199,
    lines: 33,
    basis:
      'Counted on 25 September 2026 from page 56 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), in Pearson’s own PDF: 33 lines in eleven tercets, title and author line excluded. 199 words split on spaces; counting each part of a hyphenated word separately (school-room, half-past twice, tick-less), as the quotation counter does, gives 203. The lower figure is recorded so the limit errs tight.',
  },

  native: {
    overview: '/resources/revision-notes/half-past-two',
    context: '/resources/revision-notes/half-past-two',
    themes: '/resources/revision-notes/half-past-two',
    characters: '/resources/revision-notes/half-past-two',
    keyQuotes: '/resources/revision-notes/half-past-two',
    languageAnalysis: '/resources/revision-notes/half-past-two',
    structureForm: '/resources/revision-notes/half-past-two',
  },

  extracts: [
    {
      title: 'The crime, the sentence and the oversight',
      where: 'Stanzas 1-3, lines 1-9',
      pointer:
        'From the opening line to the close of the bracketed third stanza: anthology page 56, lines 1 to 9.',
      summary:
        'A boy does something at school that the adults treat as very serious, although the narrator breaks in with a bracketed aside to admit having forgotten what it was. His teacher tells him he is to stay behind in the classroom until half past two. A second aside, which fills the whole of stanza 3, reveals the flaw in the punishment: in her anger she has forgotten that she never taught him to tell the time, and he is too scared about being naughty to remind her.',
      annotations: [
        {
          phrase: 'Something Very Wrong',
          note: 'The capital letters turn a vague telling-off into a title, the way the words must have sounded to a small child: not a description of what he did but an official category of badness. The phrase returns in line 5 as the teacher’s verdict and grows heavier, yet line 3 has already told us the narrator cannot remember the crime. The label outlives the offence it names.',
        },
        {
          phrase: 'She hadn’t taught him Time',
          note: 'The hinge of the whole poem, in five plain words. As a word on its own, Time has a capital only here, as if it were a school subject, owned and taught by adults. The teacher has set a punishment measured in a system she never gave the child, so her authority rests on a code he has not been shown.',
        },
        {
          phrase: 'wicked',
          note: 'The word belongs to fairy tales and sermons rather than school rules, and it seems to be the boy’s own verdict on himself. The line can be read two ways: he is frightened because he has been wicked, or frightened that reminding her would be more wickedness. Either way he has absorbed the adults’ judgement, and the one person who could correct the mistake says nothing.',
        },
      ],
      question:
        'How does Fanthorpe use the first three stanzas to present the relationship between the boy and his teacher?',
    },
    {
      title: 'The clock he cannot read, and the escape',
      where: 'Stanzas 6-8, lines 16-24',
      pointer:
        'From line 16, where the boy’s knowledge of the clockface is described, to the end of stanza 8 at line 24: anthology page 56.',
      summary:
        'The boy knows the clock’s face well and sees in it a creature with eyes and legs rather than an instrument, but he cannot understand what it is saying. So he waits, and in waiting passes beyond stories and schedules altogether. The sentence runs over the break between stanzas 7 and 8, and three lines that begin with the same word carry him into the smell of old flowers on the teacher’s desk, the tiny sound of his own hangnail, and the air outside the window.',
      annotations: [
        {
          phrase: 'click its language',
          note: 'The clock is personified as a speaker of a foreign tongue, and click works two ways. It is the sound a clock makes, and it is the informal verb for sudden understanding, as when an idea clicks. The boy can hear the clock but its meaning never clicks, so one word holds the gap between seeing a code and reading it.',
        },
        {
          phrase: 'onceupona',
          note: 'The fairy-tale formula that opened the poem returns chopped short and fused into one word, and it is now something he has waited beyond. One reading is that he has left stories behind, including the adults’ story about his crime, and is no longer in a tale being told about him but simply living the moment.',
        },
        {
          phrase: 'timefors',
          note: 'The word grows out of line 13, where his kiss was a time for something. The boy turns the adult habit of saying it is time for this or that into a plural noun, and to be out of reach of the timefors is to be free of being told what every moment is for. It may be the poem’s most compressed image of escape.',
        },
        {
          phrase: 'silent noise',
          note: 'An oxymoron that records how still the room has become: so quiet that the boy hears, or imagines he hears, his own hangnail. Attention this close is what the clock-watching world has no room for, and the contradiction suggests an experience that ordinary language, built for measured time, cannot quite hold.',
        },
        {
          phrase: 'into ever',
          note: 'After three lines beginning with Into, line 24 adds a fourth, and its destination is not a place. Ever, normally an adverb, becomes a noun, somewhere a person can go into, as if eternity were the room next door. The escape stanza closes by turning timelessness into a country, which the last stanza will name again.',
        },
      ],
      question:
        'How does Fanthorpe use language and structure in lines 16 to 24 to present the boy’s experience of being outside time?',
    },
    {
      title: 'The teacher returns, and what he kept',
      where: 'Stanzas 9-11, lines 25-33',
      pointer:
        'From the teacher’s hurried return at line 25 to the last line of the poem, line 33: anthology page 56.',
      summary:
        'The teacher hurries back in, exclaims, admits she had forgotten him entirely and tells him to hurry off before he is late. Her words are printed in italics, with no speech marks. She fits him back into the school day, he gets home in time for tea, and the ordinary chain of named times starts again. The final stanza steps back to sum up: because he could not tell the time, he once escaped, and the memory of the timeless place he found has stayed with him.',
      annotations: [
        {
          phrase: 'Scuttling',
          note: 'A small, undignified verb for the figure who entered the poem in line 4 as a capital-letter She. To scuttle is to move hastily with short steps, as a crab or beetle does, so authority comes back flustered and slightly comic. In line 25 she is lower-case she, as she was in the narrator’s bracketed aside at line 7; one reading is that, in the boy’s eyes, the capital has gone.',
        },
        {
          phrase: 'slotted',
          note: 'A mechanical verb, the language of coins in machines and lessons in timetables. After the open space of lines 22 to 24 the boy is fitted back into a place already prepared for him. The teacher means no harm, but the verb shows what the school day does with children: it files them into time.',
        },
        {
          phrase: 'clockless land for ever',
          note: 'The final stanza replays line 21, where he knew his escape was permanent, and now names the place: a land without clocks. The words “for ever” work twice over, for how long the memory has lasted and for the timeless country it records. Learn the wording exactly, because the line is often misremembered.',
        },
        {
          phrase: 'tick-less',
          note: 'The last image defines timelessness by an absence, the missing tick of the clock, then personifies time as something hidden and not yet born. The verb hides is in the present tense, which outside the teacher’s speech the poem uses only here and in the narrator’s forget in line 3. So the ending claims the timeless place still exists now.',
        },
      ],
      question:
        'How does Fanthorpe present the contrast between school time and the boy’s own experience of time in the last three stanzas?',
    },
  ],

  vocabulary: [
    {
      term: 'Tercet',
      definition:
        'A stanza of three lines. Half-past Two is built from eleven of them, 33 lines in all. The neat, identical boxes can be read as the ordered school timetable that holds the boy’s far less orderly experience.',
    },
    {
      term: 'Free verse',
      definition:
        'Poetry without a regular rhyme scheme or metre. Fanthorpe’s lines vary in length and rhyme only now and then, as in lines 14 and 15, so the rhythm follows a speaking voice and a child’s train of thought rather than a beat.',
    },
    {
      term: 'Neologism (coinage)',
      definition:
        'A newly invented word. The boy’s day is made of them, from Gettinguptime in line 11 to the last of the run-together times in line 30: adult phrases he has heard so often that they have fused into single names. The tick-less of the final line is a coinage of a different kind, made by adding a suffix.',
    },
    {
      term: 'Compound or run-together word',
      definition:
        'A word made by joining whole words, here with the spaces removed. This is the accurate name for “Timeformykisstime”, and a safer term in an exam than portmanteau.',
    },
    {
      term: 'Portmanteau',
      definition:
        'A word that blends parts of two words, as brunch blends breakfast and lunch. Most of the boy’s words are not strictly portmanteaus, because they keep every word whole, so name them as compounds or coinages instead.',
    },
    {
      term: 'Focalisation',
      definition:
        'Telling a story through one character’s perceptions, even in the third person. The poem calls the boy he, but sees the teacher, the clock and the room as he does, which is why the teacher can become a capital-letter She.',
    },
    {
      term: 'Retrospective narration',
      definition:
        'A story told by someone looking back from later. The narrator’s I in line 3 and the final stanza’s claim that the memory lasted show the events are recalled from long afterwards, so the poem can be inside the child’s confusion and above it at once.',
    },
    {
      term: 'Parenthesis',
      definition:
        'A word, phrase or sentence inserted into a passage, here in brackets. Fanthorpe uses brackets in line 3, around the whole of stanza 3 and in line 13, and they carry a second voice: the adult narrator’s asides and explanations beside the child’s experience.',
    },
    {
      term: 'Personification',
      definition:
        'Giving human or animal qualities to something that has neither. The boy sees the clock as a creature with eyes and legs that speaks a language he cannot follow, and the last line makes time itself a hidden being that has not yet been born.',
    },
    {
      term: 'Oxymoron',
      definition:
        'Two contradictory words placed side by side. The “silent noise” of line 23 is a sound so small it is hardly a sound, and the contradiction captures how intensely the boy is paying attention.',
    },
    {
      term: 'Anaphora',
      definition:
        'Repeating the same word at the start of successive lines or clauses. Lines 22, 23 and 24 all begin with Into, so stanza 8 moves deeper and deeper, from the desk to his own finger to the air outside and at last “into ever”.',
    },
    {
      term: 'Enjambment',
      definition:
        'A sentence running on past the end of a line or stanza. Line 21 is the only stanza ending in the poem with no punctuation at all, so as the boy escapes, the sentence breaks out of its three-line box and into stanza 8.',
    },
    {
      term: 'Hangnail',
      definition:
        'A small loose strip of skin or nail at the side of a fingernail. That the boy notices the sound it makes shows how still the room, and his attention, have become.',
    },
    {
      term: 'Chrysanthemum',
      definition:
        'A flowering plant that blooms in autumn, often kept as cut flowers. The ones on the teacher’s desk in line 22 are old, so probably wilting: a hint of time passing even inside the timeless moment. In several European countries chrysanthemums are flowers for graves, a reading some students bring from their own culture, but the poem does not press it.',
    },
    {
      term: 'Scuttle',
      definition:
        'To move hastily with short, quick steps. Used of the teacher in line 26, it makes her return hurried and a little comic.',
    },
    {
      term: 'Click (informal)',
      definition:
        'To become suddenly clear or understood. The boy cannot “click its language” in line 18: the clock’s meaning never clicks for him, and the verb also echoes the ticking of the clock.',
    },
  ],

  examPractice: {
    questions: [
      {
        question: 'Compare how childhood is presented in Half-past Two and Hide and Seek.',
        skill:
          'Comparative essay on two named anthology poems: language, form and structure, with a personal response',
        guidance: [
          'Open with a comparative overview that takes a position. Both poems leave a child alone and waiting in an enclosed place, a classroom or a toolshed, while the people who should come back are elsewhere, but Fanthorpe turns the isolation into a gift and Scannell into a desolation.',
          'Compare voice. Fanthorpe tells the story in the past tense and the third person, seen through the boy’s eyes and framed by a narrator who says I in line 3. Scannell speaks to the child as you, in the present tense, which traps the reader inside the hiding place with the child.',
          'Compare what each child understands. Fanthorpe’s boy knows the times that matter to him, in his run-together words of lines 11 to 13, but cannot read the clock; Scannell’s child reads the seekers’ long absence as proof of the child’s own cleverness. Both misread the adult or outside world, with very different results.',
          'Compare the senses. Set the chrysanthemums, the “silent noise” and the air of lines 22 to 24 against the salty, damp smells and the cold of Scannell’s toolshed. Ask what the sensory detail is for: to open Fanthorpe’s boy out into timelessness, or to close Scannell’s child in.',
          'Compare endings. Fanthorpe’s last stanza keeps the experience in memory for good and closes on a present-tense verb; Scannell ends on an unanswered question in an empty, darkening garden. Decide which child each poem leaves better off, and say why.',
          'Keep every paragraph comparative, with connectives that carry an argument (whereas, similarly, while), and end with a judgement about what each poet believes a child can know that adults do not.',
        ],
      },
      {
        question:
          'Compare the ways in which time is presented in Half-past Two and one other poem from the anthology.',
        skill: 'Comparative essay with a second poem of your own choice from Part 3',
        guidance: [
          'Choose a partner that gives you a real contrast. Sonnet 116 personifies Time as a destroyer that true love outlasts; If- tells its listener to fill every minute with effort; Piano shows time collapsing when a song carries an adult back to childhood.',
          'Establish Fanthorpe’s two kinds of time: the capital-T Time of school and the classroom clock, which the boy cannot read (lines 8 and 16-18), and the lived, named times of his own day (lines 10-15), measured in routines and people.',
          'Analyse the escape in lines 19 to 24 as a third state, outside both, and show how the structure enacts it: the only unpunctuated stanza ending at line 21, the repeated Into, and the final “into ever”.',
          'Bring your second poem in point by point beside Fanthorpe’s, comparing methods (personification, form, tense), not in a separate half of the essay.',
          'Analyse the ending: “tick-less” time hiding, not yet born, in the present tense. Compare it with how your second poem ends its argument about time.',
          'Conclude with a judgement: which poet treats time as an enemy, which as a master to be served, and which as something that can, for a moment, be escaped.',
        ],
      },
      {
        question: 'Compare how memory is presented in Half-past Two and Piano.',
        skill: 'Comparative essay on two named anthology poems',
        guidance: [
          'Start from the difference in viewpoint. Piano is spoken in the first person, in the present tense, by the adult who remembers; Half-past Two is told about a boy in the third person, with the narrator’s I surfacing only in line 3.',
          'Trace forgetting through Half-past Two. The narrator forgets the crime (line 3), the teacher forgets that she never taught him Time (lines 7-8) and then forgets the boy (line 26), but the boy never forgets the escape (line 31). Memory is the one thing in the poem that lasts.',
          'Compare how the memory arrives. A woman singing in the dusk carries Lawrence’s speaker back against his will, while Fanthorpe’s memory is not triggered by anything: it has simply been kept.',
          'Compare feeling. Lawrence’s speaker is overwhelmed and weeps for the past; Fanthorpe’s narrator is calm and wry, yet the present tense of the last line claims the timeless place still exists.',
          'Compare form. Lawrence writes three rhymed quatrains in couplets; Fanthorpe eleven mostly unrhymed tercets. Consider how each suits a memory that floods back, or one that is quietly held.',
          'End with a judgement about which poem presents memory as a loss and which as a possession.',
        ],
      },
      {
        question:
          'Compare how the relationship between adults and children is presented in Half-past Two and one other poem from the anthology.',
        skill: 'Comparative essay with a second poem of your own choice from Part 3',
        guidance: [
          'If- works well: an adult speaker instructs a son in how to become a man, while Half-past Two shows an adult who never taught a child the one thing her punishment depends on, and has forgotten that she never did.',
          'Analyse Fanthorpe’s power imbalance: the capital She of line 4 and Her of line 22, the child who is too scared about having been “wicked” to speak, and the lower-case she who returns in line 25.',
          'Consider whose knowledge the poem values. The teacher can read a clock; the boy can live completely inside a moment. Argue which the poem treats as the deeper knowledge, and compare how your second poem ranks adult wisdom.',
          'Compare tone. Fanthorpe is gentle and comic about the teacher, and sharper about the system of timetables; decide whether your second poem is instructing, warning or celebrating.',
          'Conclude on what each poem suggests adults owe children, or take from them.',
        ],
      },
    ],
    tips: [
      'You will have the poem in front of you. The anthology says a Poetry Booklet containing all the Part 3 poems is provided with the question paper, so the credit comes from choosing precise details and analysing them, not from memorising. Quote a word or two and give the line.',
      'Quote the last stanza exactly. The anthology reads “clockless land for ever”. It is easy to misremember it as land of ever, which blurs it with “into ever” in line 24; the page above makes that slip, so check your own copy.',
      'Track the capital letters, and their absence. She is capitalised in line 4, when she passes sentence, and Her in line 22, when only her desk is present; she is lower-case in lines 7, 25 and 28, when she forgets, returns flustered and fits him back into the day. The She that opens line 8 proves nothing, because every line of the poem begins with a capital. Time has a capital only in line 8. Noticing when the capitals disappear is the detail that lifts an answer.',
      'Be careful about calling the teacher cruel. She is cross, forgetful and hurried. The poem’s criticism falls on a system of labels and timetables rather than on one woman, and strong answers hold its comedy and its seriousness together.',
      'Name the invented words precisely, as coinages or run-together compounds, then say what they are made of: routines, comforts and people, such as the kiss that was Gran’s time in line 13. The point is that the boy measures time in relationships, not numbers.',
      'Use structure as evidence. Stanza 7 is the only stanza that ends with no punctuation, so at the moment of escape the sentence spills over into stanza 8. The three lines of stanza 10 all end on words ending in time, as if the clock has taken over the poem again.',
      'Use context in a sentence, not a paragraph. Fanthorpe taught English at Cheltenham Ladies’ College for sixteen years before leaving to work in Bristol as a secretary, receptionist and hospital clerk. She knew the classroom from the teacher’s side of the desk, which may explain why the poem is so fair to her.',
      'Compare throughout. Pearson’s mark scheme for this section rewards points clearly based on comparison, asks for evidence of a personal response, and warns that summarising the poems or simply listing devices is not enough. Say what you think each poem argues, and whether it convinces you.',
    ],
  },

  modelAnswer: {
    question: 'Compare how memory is presented in Half-past Two and Piano.',
    paragraph:
      'Where Lawrence’s speaker cannot stop remembering, Fanthorpe builds her poem out of forgetting, and that is what gives its one lasting memory such force. Almost everyone in Half-past Two forgets something. The narrator breaks in at line 3 to admit that the crime itself has gone, although the adults’ label for it, “Something Very Wrong”, survives in capital letters. The teacher, in her anger, has forgotten that “She hadn’t taught him Time”, and when she comes “Scuttling” back in line 26 she confesses that she had forgotten the boy altogether. Against this pattern the last stanza sets the one thing that lasts: the boy never loses the memory of the “clockless land for ever”. The words “for ever” do double work, describing both how long the memory has lasted and the timeless place it records, and because the final line is in the present tense, with time still hiding “tick-less”, the poem suggests that place exists even now. Lawrence’s memory, by contrast, arrives uninvited. A woman’s song drags the adult back, against his will, to sitting under the piano at his mother’s feet, and the rhymed couplets carry him on until he weeps. For Lawrence, remembering is a loss that has to be suffered again; for Fanthorpe it is a possession, and the calm, wry voice of her narrator suggests it is one that nobody, not even a flustered teacher, can take away.',
    commentary: [
      'It opens with a comparative argument, forgetting against remembering, rather than a summary of either poem, so the reader knows the line of the whole answer from the first sentence.',
      'It follows one idea across the whole of Half-past Two, from line 3 to line 33, so the quotations build a pattern instead of illustrating separate points.',
      'Every quotation is a few words long, embedded in the sentence and analysed, including a close point about the double meaning of for ever.',
      'It uses a structural detail, the present tense of the final line, as evidence for an interpretation rather than as a label.',
      'It brings Piano in on the same idea, and on method as well as meaning (the uninvited song, the rhymed couplets), which is what makes the comparison more than two parallel descriptions.',
      'It ends on a judgement that separates the two poems, loss against possession, which is the personal response the mark scheme asks for.',
    ],
  },

  timeline: [
    {
      where: 'Stanzas 1-2, lines 1-6',
      title: 'The crime and the sentence',
      summary:
        'At school, a boy does something the adults treat as very serious, although the narrator admits in brackets to having forgotten what it was. The teacher tells him to stay behind in the classroom until half past two.',
      setting: 'A school classroom',
      who: ['The boy', 'The teacher', 'The narrator'],
      quote: 'Something Very Wrong',
      themes: ['Childhood Innocence and Adult Power'],
      tension: 2,
      significance:
        'The label outlives the crime, so from the start school justice seems more concerned with categories than with what a child actually did.',
    },
    {
      where: 'Stanza 3, lines 7-9',
      title: 'The flaw in the punishment',
      summary:
        'A stanza entirely in brackets explains the joke at the heart of the poem: in her anger the teacher has forgotten that she never taught the boy to tell the time, and he is too scared about being naughty to remind her.',
      setting: 'The classroom, seen through the narrator’s knowing aside',
      who: ['The boy', 'The teacher', 'The narrator'],
      quote: 'She hadn’t taught him Time',
      themes: ['Childhood Innocence and Adult Power', 'Two Kinds of Time'],
      tension: 3,
      significance:
        'The whole story rests on an adult oversight and a child’s fear, so power and silence set the plot moving.',
    },
    {
      where: 'Stanzas 4-5, lines 10-15',
      title: 'The times he does know',
      summary:
        'The boy knows plenty of times, the poem insists, and lists them in his own run-together words: getting up, going home, television, and the time for his kiss, which was Gran’s time. He knows every time that matters to him except half past two.',
      setting: 'The boy’s daily life, remembered from the classroom',
      who: ['The boy', 'Gran'],
      quote: 'Timeformykisstime',
      themes: ['Two Kinds of Time', 'Language and Understanding'],
      tension: 2,
      significance:
        'His time is measured in routines, comforts and people, which makes the clock’s abstract half past two meaningless to him.',
    },
    {
      where: 'Stanza 6, lines 16-18',
      title: 'The clock he cannot read',
      summary:
        'He knows the clock’s face well and sees a creature with eyes and legs rather than an instrument. He knows exactly what it looks like, but he cannot understand what it is telling him.',
      setting: 'The classroom, where he waits',
      who: ['The boy'],
      quote: 'click its language',
      themes: ['Language and Understanding', 'Two Kinds of Time'],
      tension: 3,
      significance:
        'Knowledge is shown as a code: seeing the clock is not the same as reading it, and nobody has given him the key.',
    },
    {
      where: 'Stanzas 7-8, lines 19-24',
      title: 'The escape',
      summary:
        'So he simply waits, and in waiting slips beyond stories and schedules. The sentence runs over the stanza break as he is absorbed by the smell of old flowers on the teacher’s desk, the tiny sound of his hangnail and the air outside the window.',
      setting: 'The empty classroom, as the boy experiences it',
      who: ['The boy'],
      quote: 'silent noise',
      themes: ['Escape and Transcendence', 'Two Kinds of Time'],
      tension: 5,
      significance:
        'The punishment becomes a gift: outside measured time, the boy reaches the most intense attention anywhere in the poem.',
    },
    {
      where: 'Stanza 9, lines 25-27',
      title: 'The teacher remembers him',
      summary:
        'The teacher hurries back in, exclaims, admits she had forgotten him entirely and sends him off so that he will not be late. Her words are printed in italics, with no speech marks around them.',
      setting: 'The classroom, as the teacher rushes back in',
      who: ['The teacher', 'The boy'],
      quote: 'Scuttling',
      themes: ['Childhood Innocence and Adult Power'],
      tension: 4,
      significance:
        'The all-powerful She of stanza 2 returns flustered and in lower case: adult authority turns out to be forgetful and human.',
    },
    {
      where: 'Stanza 10, lines 28-30',
      title: 'Back into schooltime',
      summary:
        'She fits him back into the school day. He gets home in time for tea, and the familiar chain of adult times closes round him again, down to the time when grown-ups say they are too busy.',
      setting: 'The school day and home, back on schedule',
      who: ['The teacher', 'The boy'],
      quote: 'slotted',
      themes: ['Two Kinds of Time', 'Childhood Innocence and Adult Power'],
      tension: 2,
      significance:
        'The mechanical verb shows the system reclaiming him, and all three lines end on words ending in time, as if the clock has retaken the poem.',
    },
    {
      where: 'Stanza 11, lines 31-33',
      title: 'The land he kept',
      summary:
        'The narrator steps back to sum up. Because he could not tell the time, the boy once escaped, and the memory of that timeless place, where time still lies hidden and not yet begun, has stayed with him.',
      setting: 'Long afterwards, in memory',
      who: ['The narrator', 'The boy'],
      quote: 'clockless land for ever',
      themes: ['Escape and Transcendence', 'Two Kinds of Time'],
      tension: 3,
      significance:
        'The present tense of the last line claims the timeless place still exists, so the poem ends by valuing what the boy found over what school taught.',
    },
  ],

  relationships: [
    {
      from: 'The boy',
      to: 'The teacher',
      kind: 'pupil and teacher; the punished and the punisher',
      note: 'In his eyes she holds complete power, a capital-letter She, yet she forgets both that she never taught him Time and that he is there at all. Too scared about having been “wicked” to correct her, he says nothing, so her authority and his silence together make the punishment absurd.',
    },
    {
      from: 'The narrator',
      to: 'The boy',
      kind: 'the adult remembering and the child remembered',
      note: 'The narrator says I only once, in line 3, and otherwise tells the story from the boy’s point of view. One reading is that the narrator is the boy grown up, which would explain why the crime is forgotten while the escape is not; the poem never says so.',
    },
    {
      from: 'The boy',
      to: 'Gran',
      kind: 'grandchild and grandmother',
      note: 'Gran appears only in the bracket of line 13, where the time for his kiss is her time. It is the warmest entry in his list, and it suggests that his sense of time is made of people who care for him rather than of numbers on a clock.',
    },
  ],

  compareWith: [
    {
      title: 'Hide and Seek (Vernon Scannell)',
      href: '/resources/revision-notes/hide-and-seek',
      reason:
        'Both leave a child alone and waiting in an enclosed place while the people who should come back are elsewhere, but Fanthorpe’s boy gains a lasting memory while Scannell’s child comes out to an empty, darkening garden.',
    },
    {
      title: 'Piano (D H Lawrence)',
      href: '/igcse/edexcel/poetry/piano',
      reason:
        'Both value a childhood moment held in adult memory, but Lawrence’s speaker is overwhelmed and weeps, while Fanthorpe’s narrator stays calm and wry.',
    },
    {
      title: 'If- (Rudyard Kipling)',
      href: '/igcse/edexcel/poetry/if',
      reason:
        'Kipling’s speaker tells his son to fill every minute with effort; Fanthorpe’s boy finds his most important minutes by doing nothing measurable at all.',
    },
    {
      title: 'Sonnet 116 (William Shakespeare)',
      href: '/igcse/edexcel/poetry/sonnet-116',
      reason:
        'Shakespeare personifies Time as a reaper that true love outlasts, while Fanthorpe imagines a place where time has not yet been born, so both poems picture something beyond the reach of time.',
    },
  ],

  // Nothing in the poem needs a warning: a mild punishment, no violence, no
  // death. The funeral association of chrysanthemums is a reading some students
  // bring, not something the poem states, so it does not earn a mortality tag.
  contentGuidance: [],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 3, page 56: the poem as prescribed. Every quotation, line number and the eleven-tercet layout checked against this page; the stanza breaks measured from the line positions in the PDF, and the italic setting of the teacher’s words in lines 25 to 27 read from the span fonts. Fetched from Pearson on 25 September 2026 (SHA-256 ec2bdca4...a9f3). Page 73, acknowledgements: published in New and Collected Poems, Enitharmon Press, 2010, reproduced by permission of Dr R V Bailey. The anthology introduction: Part 3 poems are studied for English Literature Unit 1 Section B, students compare two poems with a choice of two questions, and a Poetry Booklet of all Part 3 poems is provided with the paper.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'One Sheet Revision, Half-Past Two by UA Fanthorpe (teacher’s handout, 2020): an independent full text. It agrees with the anthology on every phrase quoted in this guide; it differs only in typography this guide does not quote (TV time as two words, half-past-two hyphenated, a lower-case my goodness, a typing slip in line 11, and no full stop after the last line).',
      url: 'https://engteacherabroad.com/wp-content/uploads/2020/07/half-past-two-one-sheet-revision.pdf',
    },
    {
      label:
        'Poem Analysis, Half-Past Two by U. A. Fanthorpe: states that the poem first appeared in the collection Neck-Verse, 1992. Read through search-result text only, because the page refused a direct fetch (HTTP 403); the year agrees with the set-text registry and the page above.',
      url: 'https://poemanalysis.com/u-a-fanthorpe/half-past-two/',
    },
    {
      label:
        'LitCharts, Half-Past Two: states that the poem was first published in the 1992 collection Neck Verse and that it is a free verse poem of 11 tercets. Fetched on 26 September 2026 as an independent confirmation of the year and the form.',
      url: 'https://www.litcharts.com/poetry/u-a-fanthorpe/half-past-two',
    },
    {
      label:
        'AbeBooks listing, Neck-Verse by U. A. Fanthorpe: first edition, Peterloo Poets, 1992.',
      url: 'https://www.abebooks.com/first-edition/Neck-Verse-U-A-Fanthorpe-Peterloo-Poets/30264312330/bd',
    },
    {
      label:
        'Wikipedia, U. A. Fanthorpe: born 22 July 1929 in London, died 28 April 2009 in Wotton-under-Edge; taught English at Cheltenham Ladies’ College for 16 years, then worked in Bristol as a secretary, receptionist and hospital clerk; first collection Side Effects (1978); Neck-verse listed under 1992.',
      url: 'https://en.wikipedia.org/wiki/U._A._Fanthorpe',
    },
    {
      label:
        'Pearson Edexcel, Mark Scheme (Results), June 2024, International GCSE English Literature (4ET1) Paper 1R, Section B: questions compare two anthology poems (question 2 names both, question 3 names one and lets the candidate choose the other); examiners reward points clearly based on comparison, require a degree of personal response, and say summary, paraphrase or a list of devices is not enough. Read from a local copy of the mark scheme.',
    },
    {
      label:
        'The same anthology, pages 57, 58, 59 and 51: Piano, Hide and Seek, Sonnet 116 and If-, read for every fact this guide states about the comparison poems (none of them is quoted here).',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Wiktionary, hangnail, scuttle and click (the informal sense, to make sense suddenly).',
      url: 'https://en.wiktionary.org/wiki/scuttle',
    },
    {
      label:
        'Wikipedia, Chrysanthemum: autumn-flowering; in some European countries (France, Belgium, Italy, Spain, Poland, Hungary, Croatia among them) used for funerals and graves.',
      url: 'https://en.wikipedia.org/wiki/Chrysanthemum',
    },
  ],
}
