// @ts-nocheck
import type { BoardExamGuide } from './types'

/**
 * Pearson Edexcel International GCSE English Language A (4EA1), with the
 * International GCSE English Literature (4ET1) objectives and poems it touches.
 *
 * WHO SEES IT. Only `examinerTips` is rendered anywhere: /practice
 * (src/app/practice/page.tsx) loads this guide through loadGuideByBoard and
 * shows one tip beside the question. board-guide-map.ts sends five boards here:
 * edexcel-igcse-lang (4EA1), edexcel-igcse (4ET1) and the three Cambridge
 * boards (0500, 0990, 0475). So each paper's tip heading names 4EA1, and the
 * two general headings name the anthology and timing. No other field is read
 * by any page today.
 *
 * REWRITTEN 10 October 2026. It described a different qualification:
 * - "a 45-poem anthology in six clusters" (Culture and Identity, Belonging and
 *   so on). The Pearson Edexcel International GCSE English Anthology has three
 *   parts: ten non-fiction texts (Part 1), five poems and five prose texts
 *   (Part 2), and sixteen poems for 4ET1 only (Part 3). Its poem list held
 *   eight poems the anthology does not print, among them Ozymandias, Exposure
 *   and Storm on the Island.
 * - a Paper 2 question comparing an unseen poem with a named anthology poem,
 *   quoted "from memory". Paper 2 sets one essay on one named Part 2 poem or
 *   prose text, printed in the exam, with no unseen poem and no comparison.
 * - Paper 1 as four reading questions of 10, 10, 15 and 10 marks and two
 *   writing tasks of 20 and 25. It is five reading questions of 2, 4, 5, 12
 *   and 22 marks and one 45-mark writing task from a choice of two.
 * - "no spoken language endorsement". There is an optional one, 4EA1/E.
 * - objective weightings of about 25, 25, 10, 25 and 15 per cent. They are 15,
 *   20, 15, 30 and 20. The Literature objectives left out AO3 (comparison) and
 *   described AO4 as personal response, which is part of 4ET1's AO1; its AO4 is
 *   context.
 * - grade boundaries out of 150 for 2023 to 2025 and three "key changes"
 *   (2017, 2019, 2024) that no Pearson document supports.
 *
 * SOURCES, all read locally on 10 October 2026:
 * - 4EA1 specification, Issue 7, August 2025 (ISBN 978 1 446 95437 9): cover
 *   (first teaching 2016, first examination June 2018); PDF pp9-11 (the
 *   components and the endorsement); p12 (the anthology texts); p13 (the
 *   transactional forms); p15 and p17 (Sections A and B, their timings and
 *   objectives); pp23-24 (the AO1 and AO2 grids for Assignment A); p32 (the
 *   objectives and weightings); p33 (raw marks by question).
 * - 4ET1 specification, Issue 3, August 2025: PDF p29 (objectives and
 *   weightings).
 * - Pearson Edexcel International GCSE English Anthology, Issue 8, February
 *   2026: the contents, the introduction on how each part is examined, and the
 *   summary of Issue 8 changes. src/lib/board/edexcel-igcse-anthology.ts lists
 *   the same contents.
 * - 4EA1/01 mark scheme, Summer 2026 (publication code 4EA1_01_2606_MS): the
 *   Question 4 and 5 grids, the one-text cap and the Section B letter note.
 * - 4EA1/02 question papers, June 2020 and June 2023: the Question 1 form and
 *   the three Section B prompts. A research note of 26 September 2026 read the
 *   same three-bullet form on the November 2023, June 2024 and November 2024
 *   papers, and every 4EA1/01 paper from the 2016 samples to June 2026.
 * - Pearson, Notional Component Grade Boundaries, June 2025, page 9.
 */
export const igcseGuide: BoardExamGuide = {
  boardId: 'IGCSE',
  boardName: 'Edexcel IGCSE',
  boardColor: '#8B5CF6',

  overview: `
    <p>
      Pearson Edexcel International GCSE English Language A (<strong>4EA1</strong>) is graded
      <strong>9 to 1</strong>. First taught in September 2016 and first examined in June 2018, it has
      a compulsory <strong>Paper 1</strong>, Non-fiction Texts and Transactional Writing (2 hours 15
      minutes, 90 marks, 60%), and then either <strong>Paper 2</strong>, Poetry and Prose Texts and
      Imaginative Writing (1 hour 30 minutes, 60 marks, 40%), or a coursework option of two
      assignments, an essay on the Part 2 texts and a piece of imaginative writing (60 marks, 40%).
    </p>
    <p>
      Its set texts are in the <strong>Pearson Edexcel International GCSE English Anthology</strong>
      (Issue 8, February 2026), which has three parts. <strong>Part 1</strong> holds ten non-fiction
      texts for Paper 1, and <strong>Part 2</strong> holds five poems and five prose texts for Paper
      2 and the coursework. <strong>Part 3</strong>, sixteen poems, is examined only in International
      GCSE English Literature (<strong>4ET1</strong>), whose Paper 1 asks you to compare two of them.
      Every anthology text a question is on is printed for you in the exam, and copies of the
      anthology may not be taken in.
    </p>
    <p>
      Assessment is by written examination, apart from the coursework option. There is also an
      optional <strong>spoken language endorsement</strong> (4EA1/E): a prepared presentation of up
      to 10 minutes, reported separately as Pass, Merit, Distinction or Not Classified. It does not
      count towards the 9 to 1 grade.
    </p>
    <p>
      Strategy for 4EA1 students centres on three priorities. First, Paper 1 carries 60% of the
      grade, and in its reading section the comparison (Question 5) is worth 22 of the 45 marks: it
      always sets the anthology text beside an unseen extract, so practise comparing each Part 1
      text with unseen non-fiction. Second, for Paper 2, know all ten Part 2 texts, since any one of
      them may be named; the question is on that text alone. Third, in all writing, prioritise
      <strong>accuracy</strong> and range: AO5, which covers vocabulary, sentence structures,
      paragraphing, spelling, grammar and punctuation, is 20% of the qualification.
    </p>
  `,

  // 4EB1 (English Language B) was listed here, though nothing in this guide
  // describes it. 4ET1's objectives and four of its anthology poems are below.
  specCodes: [
    { subject: 'English Language A', code: '4EA1' },
    { subject: 'English Literature', code: '4ET1' },
  ],

  // ─── Language Assessment Objectives ──────────────────────────────────────────
  // The specification's own wording and weightings (4EA1 Issue 7, PDF p32).
  // AO6 is the optional spoken language endorsement, reported separately and
  // not weighted.
  languageAOs: [
    {
      code: 'AO1',
      description:
        'Read and understand a variety of texts, selecting and interpreting information, ideas and perspectives.',
      weighting: '15%',
    },
    {
      code: 'AO2',
      description:
        'Understand and analyse how writers use linguistic and structural devices to achieve their effects.',
      weighting: '20%',
    },
    {
      code: 'AO3',
      description:
        "Explore links and connections between writers' ideas and perspectives, as well as how these are conveyed.",
      weighting: '15%',
    },
    {
      code: 'AO4',
      description:
        'Communicate effectively and imaginatively, adapting form, tone and register of writing for specific purposes and audiences.',
      weighting: '30%',
    },
    {
      code: 'AO5',
      description:
        'Write clearly, using a range of vocabulary and sentence structures, with appropriate paragraphing and accurate spelling, grammar and punctuation.',
      weighting: '20%',
    },
  ],

  // ─── Literature Assessment Objectives ────────────────────────────────────────
  // 4ET1, specification Issue 3, PDF p29: the four objectives and their
  // weightings. AO3 is comparison and AO4 is context.
  literatureAOs: [
    {
      code: 'AO1',
      description:
        'Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement.',
      weighting: '30%',
    },
    {
      code: 'AO2',
      description:
        'Analyse the language, form and structure used by a writer to create meanings and effects.',
      weighting: '40%',
    },
    {
      code: 'AO3',
      description: 'Explore links and connections between texts.',
      weighting: '10%',
    },
    {
      code: 'AO4',
      description:
        'Show understanding of the relationships between texts and the contexts in which they were written.',
      weighting: '20%',
    },
  ],

  // ─── Language Papers ─────────────────────────────────────────────────────────
  languagePapers: [
    // ── Paper 1: Non-fiction Texts & Transactional Writing ──
    // Pearson advises 1 hour 30 minutes for Section A, including reading time,
    // and gives no time per question, so none is invented here.
    {
      title: 'Paper 1: Non-fiction Texts and Transactional Writing',
      code: '4EA1/01',
      time: '2 hours 15 minutes',
      marks: 90,
      weighting: '60%',
      textType:
        'One Part 1 anthology text (Text Two) and one unseen non-fiction extract (Text One), both printed in a source booklet',
      sections: [
        {
          title: 'Section A: Reading',
          marks: 45,
          questions: [
            {
              question: 'Q1 - Short-answer question on Text One, the unseen extract',
              marks: 2,
              ao: 'AO1',
              skill: 'Selecting information from given lines',
              time: "Part of Section A's 1 hour 30 minutes",
              advice:
                'Questions 1 to 3 are all on Text One and are point-marked. Answer from the lines the question gives, briefly and precisely.',
            },
            {
              question: 'Q2 - Short-answer question on Text One, in your own words',
              marks: 4,
              ao: 'AO1',
              skill: 'Explaining information from given lines',
              time: "Part of Section A's 1 hour 30 minutes",
              advice:
                'Use your own words where the question asks for them, and make each point clearly and separately.',
            },
            {
              question: 'Q3 - Question on Text One, from given lines',
              marks: 5,
              ao: 'AO1',
              skill: 'Explaining or describing from the text',
              time: "Part of Section A's 1 hour 30 minutes",
              advice:
                'Brief quotations are optional here: precise, relevant points from the given lines earn the marks.',
            },
            {
              question:
                'Q4 - How does the writer use language and structure? (Text Two, the anthology text)',
              marks: 12,
              ao: 'AO2',
              skill: 'Language and structure analysis',
              time: "Part of Section A's 1 hour 30 minutes",
              advice:
                'The only question on the anthology extract. It covers the whole extract, with no line range, and one grid marks language and structure together: its upper levels look for vocabulary, sentence structure and other language features, explained and then explored for their effect. Name the effect of each choice, not only the technique.',
            },
            {
              question:
                'Q5 - Compare how the writers of Text One and Text Two present their ideas and perspectives',
              marks: 22,
              ao: 'AO3',
              skill: 'Comparison',
              time: "Part of Section A's 1 hour 30 minutes",
              advice:
                'Always the unseen extract against the anthology text. Compare throughout rather than writing about one text and then the other. An answer on one text only cannot go beyond the top of Level 2 (8 marks), and Levels 4 and 5 need references balanced across both texts.',
            },
          ],
        },
        {
          title: 'Section B: Transactional Writing',
          marks: 45,
          questions: [
            {
              question: 'Q6 or Q7 - One transactional writing task, from a choice of two',
              marks: 45,
              ao: 'AO4 (27) + AO5 (18)',
              skill: 'Transactional writing',
              time: '45 minutes',
              advice:
                'The task names an audience, form or purpose. The forms set are an article for a magazine or newspaper, a speech, a letter, a guide, a review or the text of a leaflet. Match your register to the reader, organise the response for its form, and leave time to proofread for AO5.',
            },
          ],
        },
      ],
    },

    // ── Paper 2: Poetry & Prose Texts & Imaginative Writing ──
    {
      title: 'Paper 2: Poetry and Prose Texts and Imaginative Writing',
      code: '4EA1/02',
      time: '1 hour 30 minutes',
      marks: 60,
      weighting: '40%',
      textType:
        'One Part 2 anthology poem or prose text, printed for you (Part 2 has five of each), and your own imaginative writing',
      sections: [
        {
          title: 'Section A: Poetry and Prose Texts',
          marks: 30,
          questions: [
            {
              question: 'Q1 - Essay on one named Part 2 poem or prose text',
              marks: 30,
              ao: 'AO1 (12) + AO2 (18)',
              skill: 'Analysis of a poem or prose text',
              time: '45 minutes',
              advice:
                'One compulsory question, with no choice of text, no comparison and no unseen poem. The text is printed in the paper or an enclosed booklet, so analyse it closely rather than quoting from memory. The question asks how the writer presents something and lists three things to write about, the last the use of language and structure. Support your points with close reference and brief quotations.',
            },
          ],
        },
        {
          title: 'Section B: Imaginative Writing',
          marks: 30,
          questions: [
            {
              question: 'Q2, Q3 or Q4 - One imaginative writing task, from a choice of three',
              marks: 30,
              ao: 'AO4 (18) + AO5 (12)',
              skill: 'Imaginative writing',
              time: '45 minutes',
              advice:
                'On the June 2020 and June 2023 papers the three prompts were: write about a time when you, or someone you know, did something; a story with a given title; and a story that begins with a given sentence, with images you may use. Each said the response could be real or imagined, and that it would be marked for vocabulary, spelling, punctuation and grammar. Plan briefly, shape the writing for the reader, and proofread.',
            },
          ],
        },
      ],
    },
  ],

  // ─── Literature Papers ─────────────────────────────────────────────────────
  // Left empty. This said "IGCSE is Language-only", but 4ET1 is International
  // GCSE English Literature, and its students are sent to this guide. Its papers
  // are set out in src/data/paper-structures.ts, from the specification, and its
  // set texts in src/lib/board/edexcel-igcse-literature.ts.
  literaturePapers: [],

  // ─── Mark Bands ──────────────────────────────────────────────────────────────
  // These had five generic levels ("Exceptional, Conceptualised") that are no
  // Pearson grid's. Now: ao1 and ao2 are the grids the 4EA1 specification
  // prints for Assignment A (Issue 7, PDF pp23-24), which has the same split as
  // Paper 2 Question 1, AO1 12 on four levels and AO2 18 on five; the research
  // note found the same level boundaries in the June 2024 and Summer 2025
  // Paper 2 mark schemes. ao3 is Paper 1 Question 5 (Summer 2026 mark scheme).
  // Each objective's text opens with its mark range, since the type has no
  // marks field. The wording is this guide's paraphrase, keeping Pearson's key
  // words.
  markBands: [
    {
      level: 5,
      descriptor: 'Discriminating, perceptive, analytical',
      ao1: 'There is no Level 5 for AO1: its grid has four levels.',
      ao2: 'AO2, 15-18 of 18: subtle and discriminating selection of language and structural devices, discriminating and assured use of references, and a perceptive analysis of their effects.',
      ao3: "AO3, Paper 1 Question 5, 19-22 of 22: a varied and comprehensive range of comparisons, analysis of the writers' ideas and perspectives, and references balanced across both texts and discriminating.",
    },
    {
      level: 4,
      descriptor: 'Detailed, perceptive (AO1); thorough, confident, exploratory (AO2)',
      ao1: 'AO1, 10-12 of 12: detailed and persuasive selection of information, ideas and perspectives, discriminating use of quotations and references, and perceptive interpretation.',
      ao2: 'AO2, 11-14: thorough and confident selection of devices, confident and detailed use of references, and a detailed exploration of their effects.',
      ao3: "AO3, 14-18: a wide range of comparisons, exploration of the writers' ideas and perspectives across the texts, and references balanced across both.",
    },
    {
      level: 3,
      descriptor: 'Clear, relevant, explanatory',
      ao1: 'AO1, 7-9: clear and relevant selection of information and ideas, clear and relevant supporting references, and relevant interpretation showing clear understanding.',
      ao2: 'AO2, 7-10: clear and relevant selection of devices, relevant use of references, and clear explanations of the effects of language and structure.',
      ao3: "AO3, 9-13: a range of comparisons, explanation of the writers' ideas and perspectives, and appropriate, relevant references.",
    },
    {
      level: 2,
      descriptor: 'Some, developing',
      ao1: 'AO1, 4-6: some selection of valid information and ideas, some valid references, and some valid interpretation.',
      ao2: 'AO2, 4-6: some identification of devices, some accurate references, and some developing comment on their effects.',
      ao3: 'AO3, 5-8: obvious comparisons, comment on ideas and perspectives, and valid but undeveloped references. An answer on one text only cannot go higher.',
    },
    {
      level: 1,
      descriptor: 'Limited, basic',
      ao1: 'AO1, 1-3: basic selection of information and ideas, limited use of references, and limited understanding, likely shown through retelling or paraphrase.',
      ao2: 'AO2, 1-3: limited identification of devices, limited references, and basic comment on their effects.',
      ao3: 'AO3, 1-4: no comparison of the texts, description of ideas and perspectives, and limited references.',
    },
  ],

  // ─── Grade Boundaries ────────────────────────────────────────────────────────
  // These gave qualification boundaries out of 150 for 2023 to 2025 that no
  // local Pearson document supports. Pearson's Notional Component Grade
  // Boundaries for June 2025 (page 9) give each paper's instead. They are
  // notional: the grade is awarded on the qualification as a whole, and the
  // boundaries move each series.
  gradeBoundaries: [
    {
      year: 'June 2025, Paper 1 (4EA1/01), notional',
      max: 90,
      grade9: 70,
      grade8: 66,
      grade7: 63,
      grade6: 58,
      grade5: 53,
      grade4: 48,
    },
    {
      year: 'June 2025, Paper 2 (4EA1/02), notional',
      max: 60,
      grade9: 43,
      grade8: 39,
      grade7: 36,
      grade6: 32,
      grade5: 28,
      grade4: 25,
    },
  ],

  // ─── Examiner Tips ───────────────────────────────────────────────────────────
  // /practice picks a group by matching its heading: /language|ao2/ for
  // language and analysis questions, /creative|writing|ao5|ao6/ for writing,
  // /evaluat|ao4/ for evaluation, and the first group otherwise. Keep those
  // words where they are, or a different group starts showing.
  examinerTips: [
    {
      question: '4EA1 Paper 1, Section A (Non-fiction Reading)',
      tips: [
        "Section A is 45 of the paper's 90 marks. Pearson advises 1 hour 30 minutes for it, including reading time, and every question must be answered.",
        'Questions 1 to 3 are on Text One, the unseen extract: short answers worth 2, 4 and 5 marks, each on the lines it gives. They are point-marked, so keep each answer precise.',
        'Question 4 (12 marks) is the only question on Text Two, the anthology text. It asks how the writer uses language and structure across the whole extract, and one grid marks both: explain the effect of each choice, not only the technique.',
        'Question 5 (22 marks) compares the two texts. An answer on one text only cannot go beyond the top of Level 2 (8 marks), and Levels 4 and 5 need references balanced across both texts.',
      ],
    },
    {
      question: '4EA1 Paper 1, Section B (Transactional Writing)',
      tips: [
        'You write one task from a choice of two (Question 6 or 7), for 45 marks: 27 for AO4 (communication, form, tone and register) and 18 for AO5 (vocabulary, sentences, paragraphing and accuracy). Pearson advises 45 minutes.',
        'The specification lists the forms you can be asked to write: an article for a magazine or newspaper, a speech, a letter, a guide, a review or the text of a leaflet.',
        "Set the response out in its form. For a letter, Pearson's Summer 2026 mark scheme expects a fitting salutation and ending, though not postal addresses.",
        'Plan before you write, and leave time to proofread: AO5 is 18 of the 45 marks.',
      ],
    },
    {
      question: '4EA1 Paper 2, Section A (Poetry and Prose Texts)',
      tips: [
        'There is one compulsory question, worth 30 marks, on one named text from Part 2 of the anthology: one of its five poems or five prose texts. There is no choice of text, no comparison and no unseen poem.',
        'The text is printed for you, in the paper or an enclosed booklet, and copies of the anthology may not be taken in. Know all ten texts well, but you will not need to quote from memory.',
        'The question lists three things to write about, the last the use of language and structure. Support your points with close reference and brief quotations.',
        'It is marked for AO1 (12 marks: selecting and interpreting ideas) and AO2 (18 marks: how the writer uses language and structure). Pearson advises about 45 minutes.',
      ],
    },
    {
      question: '4EA1 Paper 2, Section B (Imaginative Writing)',
      tips: [
        'You write one response from a choice of three prompts (Questions 2 to 4), for 30 marks: 18 for AO4 and 12 for AO5. Pearson advises about 45 minutes.',
        'On the June 2020 and June 2023 papers the prompts were: write about a time when you, or someone you know, did something; a story with a given title; and a story that begins with a given sentence, with images you may use.',
        "The specification asks you to use what you learn about the writer's craft from reading fiction in your own imaginative writing.",
        'Each prompt says it will be marked for the accurate and appropriate use of vocabulary, spelling, punctuation and grammar, so leave time to proofread.',
      ],
    },
    {
      question: 'General - The Anthology',
      tips: [
        'The Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026) has three parts. Part 1, ten non-fiction texts, is for Paper 1; Part 2, five poems and five prose texts, is for Paper 2 or the coursework; Part 3, sixteen poems, is for English Literature (4ET1) only.',
        'Study all ten Part 1 texts. Paper 1 prints one as Text Two, asks one question on it, and compares it with an unseen extract: practise comparing each with unseen non-fiction, not with the other anthology texts.',
        'Study all ten Part 2 texts too: Paper 2 names one, and the coursework asks for an essay on any three, including both poetry and prose.',
        'For each text, know its ideas and perspectives, how it is structured from opening to ending, and where its key moments are, so that you can find your evidence quickly in the printed copy.',
      ],
    },
    {
      question: 'General - Time Management',
      tips: [
        'Paper 1 is 2 hours 15 minutes for 90 marks: Pearson advises 1 hour 30 minutes for Section A, including reading time, and 45 minutes for Section B.',
        'Paper 2 is 1 hour 30 minutes for 60 marks: about 45 minutes for each section.',
        'Pace yourself so that every question gets a complete answer.',
      ],
    },
  ],

  // ─── Key Changes ─────────────────────────────────────────────────────────────
  // The three entries here (2017, 2019 and 2024) matched no Pearson document:
  // the specification was first taught in 2016 and first examined in 2018, and
  // the anthology never had a 45-poem structure. These are from the
  // specification's cover and its Issue 7 change list, Pearson's news item of 31
  // July 2025, and the anthology's Issue 8 change list.
  keyChanges: [
    {
      year: '2018',
      change:
        'First examination of the 4EA1 specification (first taught from September 2016), graded 9 to 1.',
    },
    {
      year: '2025',
      change:
        'Specification Issue 7 (August 2025) lists the transactional forms Paper 1 Section B sets: an article for a magazine or newspaper, a speech, a letter, a guide, a review and the text of a leaflet. Pearson applied the list from the November 2025 papers.',
    },
    {
      year: '2026',
      change:
        'Anthology Issue 8 (February 2026) made minor corrections to spelling, punctuation and grammar in several texts.',
    },
  ],

  // ─── Anthology poems ───────────────────────────────────────────────────────
  // Four of the sixteen Part 3 poems, which 4ET1 sets and 4EA1 does not. The
  // list was headed "45 poems across 6 clusters" and held eight poems the
  // anthology does not print. Corrected 10 October 2026 against Issue 8 and
  // the site's checked guides to each poem: Search For My Tongue's quotation
  // joined lines 15 and 16 to line 31 with no ellipsis, Half-caste's ran to
  // three lines, and War Photographer's to seventeen words; War Photographer
  // rhymes ABBCDD, not in near-rhyme; and each top comparison is now a Part 3
  // poem Pearson has set with it as Question 2 (June 2023, June 2024 Paper
  // 1R, June 2025), where Piano's and War Photographer's were poems the
  // anthology does not print.
  poems: [
    {
      title: 'Search For My Tongue',
      poet: 'Sujata Bhatt',
      era: 'Contemporary',
      themes: ['Cultural identity', 'Language', 'Belonging', 'Displacement'],
      topComparison: 'Half-caste',
      formAnalysis:
        'A bilingual poem: lines 17 to 30 are Gujarati, printed in Gujarati script with a transliteration under each line, between two sections of English. The extended metaphor of the tongue as a plant, dying and then growing back from a stump, enacts the argument that the mother tongue survives.',
      keyQuotation: '"it grows back, a stump of a shoot"',
    },
    {
      title: 'Half-caste',
      poet: 'John Agard',
      era: 'Contemporary',
      themes: ['Racial identity', 'Prejudice', 'Language and labelling', 'Humour as resistance'],
      topComparison: 'Search For My Tongue',
      formAnalysis:
        'Caribbean dialect and phonetic spelling challenge Standard English conventions. The poem\'s structure - a series of absurd hypotheticals - dismantles the logic of the term "half-caste" through reductio ad absurdum.',
      keyQuotation: '"Explain yuself / wha yu mean"',
    },
    {
      title: 'Piano',
      poet: 'D H Lawrence',
      era: '20th Century',
      themes: ['Nostalgia', 'Childhood', 'Memory', 'Loss of innocence'],
      topComparison: 'Remember',
      formAnalysis:
        "Three quatrains rhyming AABB. The musical imagery (piano, singing) mirrors the poem's exploration of how sound triggers involuntary memory.",
      keyQuotation: '"In spite of myself, the insidious mastery of song / Betrays me back"',
    },
    {
      title: 'War Photographer',
      poet: 'Carol Ann Duffy',
      era: 'Contemporary',
      themes: ['Conflict', 'Guilt', 'Apathy', 'Suffering vs. comfort'],
      topComparison: 'Blessing',
      formAnalysis:
        "Four regular sestets, each rhyming ABBCDD and closing on a rhyming couplet. The controlled form mirrors the photographer's professional detachment, while the content reveals his inner turmoil.",
      keyQuotation: '"A hundred agonies in black and white"',
    },
  ],

  // ─── Unique Features ─────────────────────────────────────────────────────────
  uniqueFeatures: [
    'One anthology serves two qualifications: Parts 1 and 2 are for English Language A (4EA1), and Part 3, sixteen poems, is for English Literature (4ET1) only.',
    'Every anthology text a question is on is printed for you in the exam: on Paper 1 in a source booklet beside an unseen extract, on Paper 2 in the paper or an enclosed booklet. Copies of the anthology may not be taken in.',
    'Paper 1 compares the anthology text with an unseen extract (Question 5, 22 marks), never with another anthology text.',
    'Paper 2 sets one essay on one named Part 2 poem or prose text, with no comparison.',
    'A coursework option can replace Paper 2: an essay on any three Part 2 texts, including poetry and prose, and an imaginative writing task, 60 marks in all.',
    'An optional spoken language endorsement (4EA1/E), a prepared presentation of up to 10 minutes, is reported separately and does not count towards the grade.',
    'Graded 9 to 1. Paper 1 carries 60% and Paper 2, or the coursework, 40%.',
    'Reading and writing carry half each: AO1, AO2 and AO3 make 50%, and AO4 and AO5 the other 50%.',
  ],
}
