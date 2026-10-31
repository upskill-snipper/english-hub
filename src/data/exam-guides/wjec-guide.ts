// @ts-nocheck
// ─── WJEC Eduqas Exam Guide ─────────────────────────────────────────────────

import type { BoardExamGuide } from './types'

export const wjecGuide: BoardExamGuide = {
  boardId: 'WJEC',
  boardName: 'WJEC Eduqas',
  boardColor: '#DC2626',

  // The poetry paragraph below said, until 2 October 2026, that the anthology
  // was "three thematic clusters of 18 poems" and that the second poem must come
  // from the named poem's cluster. Eduqas sets one anthology with no clusters;
  // see src/lib/board/eduqas-anthology.ts.
  // The Language sentences said, until 31 October 2026, that Component 1 sets a
  // proofreading and editing task found on no other board. It sets none: Section
  // A is five reading questions and carries no AO6 marks
  // (src/data/mark-scheme-guides/eduqas-lang-comp1.ts). That task came from the
  // old AI marker's invented A5, not from Eduqas.
  // Second reading, same day: "five bands for each Language question" is now
  // "most": Questions 01, 1.1 and 1.3 earn a mark per point, and 1.5 has four.
  overview: `<p>WJEC Eduqas is the England-facing specification from WJEC, the Welsh exam board, and it brings several distinctive features that set it apart from AQA, Edexcel, and OCR. The Language qualification (C700QS) is built around two components weighted 40%/60%, while the Literature qualification (C720QS) mirrors this split. What sets Eduqas Language apart is the shape of its papers. Component 1 asks <strong>five reading questions on one 20th-century literary extract</strong>, then one story from a choice of four titles. Component 2, the larger component, asks six questions on two non-fiction texts, one from the 19th century and one from the 21st, then sets <strong>two compulsory writing tasks of 20 marks each</strong>, where AQA, Edexcel and OCR set one writing task on each paper.</p>

<p>The Literature specification sets <strong>one poetry anthology, with no clusters</strong>, and students study every poem in it: fifteen in the anthology examined from summer 2027, which replaced an eighteen-poem anthology examined for the last time in summer 2026. The exam asks about one named poem, then asks students to choose a second poem from the anthology and compare it with the first, so knowing every poem well enough to quote from memory is a key exam skill. The board also places significant emphasis on <strong>oracy</strong>, with continuous assessment of spoken language skills feeding into the overall qualification profile.</p>

<p>Eduqas marking guides are widely regarded as among the clearest and most structured of any board, with precisely defined bands (five on most English Language questions) and transparent descriptors that make self-assessment and targeted improvement straightforward. The top band rewards "sophisticated, assured analysis" with "perceptive, conceptualised" responses - students who thread an overarching interpretation through their entire answer rather than analysing quotations in isolation. Grade boundaries have remained relatively stable, with a Grade 4 requiring approximately 29% and a Grade 9 requiring around 76% across both qualifications combined. Strategic preparation should focus on pacing the five reading questions of Component 1, developing confident comparative skills for the poetry anthology, and practising the two compulsory writing tasks of Component 2, each in its own form and for its own reader.</p>`,

  specCodes: [
    { subject: 'English Language', code: 'C700QS' },
    { subject: 'English Literature', code: 'C720QS' },
  ],

  // ─── Language Assessment Objectives ──────────────────────────────────────────
  // Weightings corrected 31 October 2026. The C700 guides in
  // src/data/mark-scheme-guides/eduqas-lang-comp1.ts and -comp2.ts give each
  // objective its marks: Component 1 (40%) AO1 5, AO2 25, AO4 10, AO5 24, AO6 16;
  // Component 2 (60%) AO1 10, AO2 10, AO3 10, AO4 10, AO5 24, AO6 16. Weighted
  // 40/60 that is AO1 10%, AO2 20%, AO3 7.5%, AO4 12.5%, AO5 30% and AO6 20%.
  // They read ~20%, ~30%, ~10%, ~10%, ~20% and ~10%.
  languageAOs: [
    {
      code: 'AO1',
      description:
        'Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.',
      weighting: '10%',
    },
    {
      code: 'AO2',
      description:
        'Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views.',
      weighting: '20%',
    },
    {
      code: 'AO3',
      description:
        "Compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts.",
      weighting: '7.5%',
    },
    {
      code: 'AO4',
      description:
        'Evaluate texts critically and support this with appropriate textual references.',
      weighting: '12.5%',
    },
    {
      code: 'AO5',
      description:
        'Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts.',
      weighting: '30%',
    },
    {
      code: 'AO6',
      description:
        'Candidates must use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
      weighting: '20%',
    },
  ],

  // ─── Literature Assessment Objectives ────────────────────────────────────────
  literatureAOs: [
    {
      code: 'AO1',
      description:
        'Read, understand and respond to texts. Students should be able to maintain a critical style and develop an informed personal response. Use textual references, including quotations, to support and illustrate interpretations.',
      weighting: '~15%',
    },
    {
      code: 'AO2',
      description:
        'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
      weighting: '~25%',
    },
    {
      code: 'AO3',
      description:
        'Show understanding of the relationships between texts and the contexts in which they were written.',
      weighting: '~25%',
    },
    {
      code: 'AO4',
      description:
        'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
      weighting: '~35%',
    },
  ],

  // ─── Language Papers ─────────────────────────────────────────────────────────
  // Corrected 31 October 2026 to the C700 guides in src/data/mark-scheme-guides/
  // eduqas-lang-comp1.ts and eduqas-lang-comp2.ts. Component 1 had four reading
  // questions (Q2 an AO1 inference question, Q4 the evaluation), a 10-mark
  // proofreading task Eduqas does not set and a 30-mark story. Component 2 had
  // four 10-mark reading questions and two writing tasks of 15 and 25 marks.
  // Component 1 is Q01 5, Q02 5, Q03 10, Q04 10 (language and structure) and Q05
  // 10 (evaluation), then one story or recount from four titles for 40 (AO5 24 +
  // AO6 16). Component 2 is 1.1 3, 1.2 10, 1.3 3, 1.4 10, 1.5 4 and 1.6 10, then
  // two compulsory tasks, 2.1 and 2.2, of 20 marks each (AO5 12 + AO6 8). The
  // section times are the board's advice; the question times are the guides'
  // suggestion from the marks.
  languagePapers: [
    {
      title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
      code: 'C700QS/1',
      time: '1 hour 45 minutes',
      marks: 80,
      weighting: '40%',
      textType:
        'One unseen extract of 20th-century literary prose, about 60 to 100 lines long. Section A asks five questions on it; Section B sets one piece of creative prose writing, from a choice of four titles.',
      sections: [
        {
          title: 'Section A: Reading (20th-Century Literary Prose)',
          marks: 40,
          questions: [
            {
              question:
                'Q01 - Retrieval: list five things you learn from the opening lines the question names.',
              marks: 5,
              ao: 'AO1',
              skill: 'Identify explicit and implicit information',
              time: 'About 5 minutes',
              advice:
                'Read only within the specified line references. Write five short points, one clear point each: a sentence copied out without picking out the point earns nothing. Things the lines suggest count as well as things they state, as long as the lines support them.',
            },
            {
              question:
                'Q02 - Language: what does the writer show you about a character or situation in the next few lines, and how does the language do it?',
              marks: 5,
              ao: 'AO2',
              skill: 'Impressions and the language that creates them',
              time: 'About 6 minutes',
              advice:
                'Aim for three or four impressions, each backed by a short quotation and a sentence on what the words suggest, not only what they say. Use subject terms where they help. It is worth 5 marks, so keep it short and focused.',
            },
            {
              question:
                "Q03 - Language analysis: how does the writer show a character's thoughts and feelings, or your impressions of a person, place or situation, in a longer section?",
              marks: 10,
              ao: 'AO2',
              skill: 'Language analysis across a section',
              time: 'About 13 minutes',
              advice:
                'This is one of three 10-mark questions in Section A, and it assesses language. Do not merely name a technique: explain its connotations and its effect on the reader. Work through the section in order so you cover all of it, from its first line to its last. Two or three deeply developed analytical points will outscore five or six superficial ones. Stay within the specified lines.',
            },
            {
              question:
                'Q04 - Language and structure: how does the writer create an effect, such as tension or an impression of a character, in a later section?',
              marks: 10,
              ao: 'AO2',
              skill: 'Language and structure analysis',
              time: 'About 13 minutes',
              advice:
                'Write about the order of events as well as the words: for each part of the section, ask why the writer tells us this here, and which words make it work. Use subject terms for both, such as short sentence, repetition or a change of pace, and cover the whole section, not just its opening.',
            },
            {
              question:
                'Q05 - Evaluation: you are given a view about a character or the story. How far do you agree? Use the final lines and the passage as a whole.',
              marks: 10,
              ao: 'AO4',
              skill: 'Critical evaluation across the whole extract',
              time: 'About 13 minutes',
              advice:
                'You must evaluate, not merely describe. Take a clear stance (agree, disagree, or partially agree) and hold to it, supporting your position with specific references from the final lines and from across the passage. Explain how the writer\'s choices create your thoughts and feelings. Partially agreeing often produces the most nuanced responses: present evidence that supports the view, then use a "however" turn to explore counter-evidence.',
            },
          ],
        },
        {
          title: 'Section B: Creative Prose Writing',
          marks: 40,
          questions: [
            {
              question:
                'Q11 (a), (b), (c) or (d) - Creative prose writing: choose one of four titles and write a story, or an account of an experience, real or imagined.',
              marks: 40,
              ao: 'AO5 (24 marks) + AO6 (16 marks)',
              skill: 'Creative prose writing: a narrative or a recount',
              time: 'About 45 minutes: 10 planning and 35 writing',
              advice:
                'Aim for about 450 to 600 words, as the paper suggests. A title may be a phrase, a time you did something, an opening line or a closing line. Use the 10 planning minutes to decide where the story starts, its turning point and how it ends. Open with a hook: a striking image, a sensory detail, or a line of dialogue. Vary your sentence openings and lengths. Description brings a story to life, but a piece that only describes cannot reach the top of the mark range. AO6 carries 16 marks, so technical accuracy is essential: check full stops and spellings before time is called.',
            },
          ],
        },
      ],
    },
    {
      title:
        'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
      code: 'C700QS/2',
      time: '2 hours',
      marks: 80,
      weighting: '60%',
      textType:
        'Two unseen non-fiction texts on a shared topic, one from the 19th century and one from the 21st, about 900 to 1,200 words in all. Section A asks six questions; Section B sets two compulsory transactional or persuasive writing tasks of 20 marks each.',
      sections: [
        {
          title: 'Section A: Reading (19th and 21st Century Non-Fiction)',
          marks: 40,
          questions: [
            {
              question: 'Q1.1 - Retrieval: short questions on the 21st-century text.',
              marks: 3,
              ao: 'AO1',
              skill: 'Find information',
              time: 'About 4 minutes',
              advice:
                'Read the whole text first: an answer can sit anywhere in it, including near the end. Short, exact answers are enough, and make sure each comes from the right text.',
            },
            {
              question:
                'Q1.2 - How does the writer of the 21st-century text try to achieve a purpose, such as persuading you or showing what a person or event is like?',
              marks: 10,
              ao: 'AO2',
              skill: 'What is said, language, tone and structure',
              time: 'About 12 minutes',
              advice:
                "Track the text paragraph by paragraph so you use all of it, and keep the question's key word in your explanations. Analyse what is said, the language, tone and structure (for example facts and figures, quotations from experts, the order of ideas), with quotations long enough to make sense, each followed by a comment.",
            },
            {
              question:
                'Q1.3 - Understanding: short questions on what the 19th-century text says or means.',
              marks: 3,
              ao: 'AO1',
              skill: 'Understand older language',
              time: 'About 4 minutes',
              advice:
                'Put each answer simply. If a word is unfamiliar, read the sentences around it: the meaning is usually clear from them. 19th-century texts may use a formal register, long sentences and archaic vocabulary.',
            },
            {
              question:
                'Q1.4 - Evaluation: your judgement on the 19th-century text, often on a statement about it, thinking about what is said and how.',
              marks: 10,
              ao: 'AO4',
              skill: 'Critical evaluation of non-fiction',
              time: 'About 12 minutes',
              advice:
                'Decide your answer first, then track the text from beginning to end, noting how far each part supports the statement: a writer\'s view can change or build through the text. Anchor every evaluative point in a specific reference, and show how the writer\'s language reveals their feelings or attitudes. Use evaluative language: "the writer effectively conveys", "this is less convincing because".',
            },
            {
              question:
                'Q1.5 - Synthesis: using both texts, explain briefly what they tell you about one shared topic.',
              marks: 4,
              ao: 'AO1',
              skill: 'Bringing details together from both texts',
              time: 'About 5 minutes',
              advice:
                'You MUST draw on BOTH texts: an answer on one text stays in the lowest band. Write two or three sentences, one for each text, naming the text and giving the exact details. This question wants the details, not how they are written.',
            },
            {
              question:
                'Q1.6 - Comparison: compare what the two writers say about a shared topic, and how they get it across to readers.',
              marks: 10,
              ao: 'AO3',
              skill: 'Comparing ideas and methods across both texts',
              time: 'About 13 minutes',
              advice:
                'Structure your response around points of comparison rather than writing about each text in turn, always making clear which text you mean. For every idea you identify, analyse HOW each writer conveys it through language, tone and structure. Consider the influence of historical period, audience and purpose. This is the last reading question, so leave enough time for it.',
            },
          ],
        },
        {
          title: 'Section B: Transactional/Persuasive Writing',
          marks: 40,
          questions: [
            {
              question:
                'Q2.1 - First compulsory writing task: write the piece the task sets (letter, article, report, review, speech, etc.) for its purpose and reader.',
              marks: 20,
              ao: 'AO5 (12 marks) + AO6 (8 marks)',
              skill: 'Transactional writing: form, audience, purpose',
              time: '30 minutes: about 5 planning and 25 writing',
              advice:
                'Aim for about 300 to 400 words, as the paper suggests. Match your register precisely to the form and reader: a formal letter requires different conventions from an opinion article or a speech. Plan three or four main points in a sensible order, an opening that suits the form and an ending that rounds it off. Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words, are 8 of the 20 marks.',
            },
            {
              question:
                'Q2.2 - Second compulsory writing task: the piece the paper sets, for its own purpose and reader.',
              marks: 20,
              ao: 'AO5 (12 marks) + AO6 (8 marks)',
              skill: 'Transactional writing: adapting to a second form and reader',
              time: '30 minutes: about 5 planning and 25 writing',
              advice:
                "The two tasks carry equal marks, so keep a full 30 minutes for this one and check it with the same care as the first. Its form or reader may differ from the first task's, so adapt your tone and register: if writing a speech, use direct address, rhetorical questions and tricolon; if writing an article, use a headline and an engaging opening. Build a clear viewpoint through well-developed paragraphs with topic sentences and discourse markers.",
            },
          ],
        },
      ],
    },
  ],

  // ─── Literature Papers ───────────────────────────────────────────────────────
  literaturePapers: [
    {
      title: 'Component 1: Shakespeare and Poetry',
      code: 'C720QS/1',
      time: '2 hours',
      marks: 80,
      weighting: '40%',
      textType:
        'Section A: one Shakespeare play with an extract provided plus a whole-text essay. Section B: one named poem from the anthology with a comparison poem chosen by the student.',
      sections: [
        {
          title: 'Section A: Shakespeare (40 marks)',
          marks: 40,
          questions: [
            {
              question:
                'Part (a) - Extract-based analysis: read the extract from your studied Shakespeare play and analyse how Shakespeare presents [a character, theme, or relationship] in this passage.',
              marks: 20,
              ao: 'AO1 + AO2 + AO3',
              skill: 'Close analysis of a Shakespeare extract',
              time: '25 minutes',
              advice:
                "Ground your response in close analysis of the specific extract. Analyse Shakespeare's language choices at word level - explore imagery, verse form, rhetorical patterning, and dramatic irony. Integrate contextual understanding (AO3) naturally: reference Elizabethan/Jacobean social norms, theatrical conventions, and audience expectations. Do not paraphrase the extract; select key quotations and analyse their effects in depth.",
            },
            {
              question:
                'Part (b) - Whole-text essay: write about [a character, theme, or relationship] in the play as a whole. You must refer to the context in which the play was written.',
              marks: 20,
              ao: 'AO1 + AO2 + AO3 + AO4 (SPaG)',
              skill: 'Extended essay on Shakespeare - whole text',
              time: '25 minutes',
              advice:
                'Range across the entire play - do not repeat material from Part (a). Structure your essay around a clear argument that tracks how the character or theme develops. Each paragraph should blend interpretation (AO1), analysis of methods (AO2), and contextual understanding (AO3). Top-band responses reference the patriarchal society, the Great Chain of Being, divine right, Machiavellian villainy, or genre conventions as appropriate. Plan three to four substantial paragraphs rather than writing six superficial ones.',
            },
          ],
        },
        {
          title: 'Section B: Poetry (40 marks)',
          marks: 40,
          questions: [
            {
              question:
                'Analyse the named poem from the anthology, then compare it with one other poem of your choice from the anthology. Explore how both poets present [a shared theme or idea].',
              marks: 40,
              ao: 'AO1 + AO2 + AO3',
              skill: 'Analysis of named poem + comparison with a chosen poem from the anthology',
              time: '50 minutes',
              advice:
                'The named poem is printed on the paper, but your comparison poem is not - you must know your second poem from memory. Choose your comparison poem quickly (within 2 minutes) based on the strongest thematic or methodological links. Any other poem in the anthology can be your second poem: there are no clusters. Structure comparatively throughout: do not write about one poem then the other. Each paragraph should address both poems, using comparative connectives. Analyse language, form, and structure in both poems, and comment on how context shapes meaning. Top-band responses treat both poems as crafted artefacts, exploring how meaning is constructed rather than simply what the poems are "about".',
            },
          ],
        },
      ],
    },
    {
      title: 'Component 2: Post-1914 Prose/Drama and Unseen Poetry',
      code: 'C720QS/2',
      time: '2 hours 30 minutes',
      marks: 80,
      weighting: '60%',
      textType:
        'Section A: post-1914 prose or drama (extract-based + essay). Section B: 19th-century prose (extract-based). Section C: unseen poetry - one analysis and one comparison.',
      sections: [
        {
          title: 'Section A: Post-1914 Prose or Drama (40 marks)',
          marks: 40,
          questions: [
            {
              question:
                'Part (a) - Extract-based analysis: read the extract from your studied post-1914 text and analyse how the writer presents [a character, theme, or idea] in this passage.',
              marks: 20,
              ao: 'AO1 + AO2',
              skill: 'Close analysis of a post-1914 prose/drama extract',
              time: '25 minutes',
              advice:
                "Focus on close textual analysis of the specific extract. Identify and analyse the writer's language choices, structural decisions, and narrative techniques. Embed short quotations and explore their connotations in detail. For drama texts, comment on stage directions, dialogue, dramatic irony, and how the scene functions within the broader play. For prose, address narrative voice, imagery, and the writer's control of pace and tension.",
            },
            {
              question:
                "Part (b) - Extended essay: write about [a character, theme, or relationship] in the text as a whole. You must consider the writer's methods and the context in which the text was written.",
              marks: 20,
              ao: 'AO1 + AO2 + AO3 + AO4 (SPaG)',
              skill: 'Extended essay on post-1914 prose/drama - whole text',
              time: '25 minutes',
              advice:
                'Range across the whole text, tracking how your chosen character or theme develops. Embed contextual understanding (AO3) naturally - for texts like Blood Brothers, reference Thatcherism, class division, nature versus nurture, and the social context of 1980s Liverpool. Structure a sustained argument with three to four well-developed paragraphs. Top-band responses thread a clear, overarching interpretation throughout.',
            },
          ],
        },
        {
          title: 'Section B: 19th-Century Prose (20 marks)',
          marks: 20,
          questions: [
            {
              question:
                'Extract-based analysis: read the extract from your studied 19th-century prose text and analyse how the writer presents [a character, theme, or idea]. You should consider the context in which the text was written.',
              marks: 20,
              ao: 'AO1 + AO2 + AO3',
              skill: 'Extract-based analysis of 19th-century prose',
              time: '25 minutes',
              advice:
                "Ground your response in the specific extract, but demonstrate wider knowledge of the text where relevant. Analyse the writer's language choices in detail - for a text like A Christmas Carol, explore Dickens's use of imagery, symbolism, allegory, and narrative voice. Integrate contextual understanding naturally: reference Victorian social conditions, the Poor Law, Christian morality, and the industrial revolution as appropriate. The marking guide rewards responses that show how context shapes the writer's choices rather than bolting on historical facts.",
            },
          ],
        },
        {
          title: 'Section C: Unseen Poetry (20 marks)',
          marks: 20,
          questions: [
            {
              question:
                'Part 1: Analyse one unseen poem. How does the poet present [a theme, feeling, or experience]?',
              marks: 12,
              ao: 'AO1 + AO2',
              skill: 'Analyse one unseen poem independently',
              time: '15 minutes',
              advice:
                'Read the poem at least twice before writing. On first reading, identify subject, tone, and shifts in mood. On second reading, annotate language, form, and structural choices. Analyse language devices (imagery, diction, sound) and structural features (form, enjambment, stanza breaks, volta). Use short embedded quotations and explore multiple layers of meaning. Do not try to cover every line - select the richest details and analyse them in depth. This is purely AO1 and AO2, so do not worry about context.',
            },
            {
              question:
                'Part 2: Compare how the poets present [a shared theme] in both unseen poems.',
              marks: 8,
              ao: 'AO2',
              skill: 'Compare two unseen poems',
              time: '10 minutes',
              advice:
                'This question carries 8 marks and should take roughly 10 minutes. Focus on two or three sharp comparative points. Compare methods (how the poets achieve their effects) rather than just content (what the poems are about). Use comparative language throughout: "Both poets use...", "While Poem 1 employs..., Poem 2 instead...". Keep quotations very short - single words or phrases.',
            },
          ],
        },
      ],
    },
  ],

  // ─── Mark Bands ──────────────────────────────────────────────────────────────
  markBands: [
    {
      level: 6,
      descriptor: 'Sophisticated, assured analysis with perceptive, conceptualised response',
      ao1: 'Perceptive, assured understanding of texts. Conceptualised response maintained throughout with sophisticated personal interpretation. Judiciously selected textual references seamlessly integrated into analysis.',
      ao2: 'Sophisticated, detailed analysis of how language, form, and structure create nuanced meanings and effects. Precise and discriminating use of subject terminology. Responses move beyond identifying techniques to exploring their cumulative and layered impact.',
      ao3: 'Perceptive, convincing understanding of contextual factors and their influence on the text. Context is seamlessly woven into analytical paragraphs rather than treated as a separate concern.',
    },
    {
      level: 5,
      descriptor: 'Convincing, developed interpretation with judicious references',
      ao1: 'Convincing, developed interpretation of texts with well-chosen, judicious references. Sustained critical style throughout the response. Clear evidence of informed personal engagement.',
      ao2: 'Convincing, developed analysis of language, form, and structure with thorough exploration of effects. Accurate and effective use of subject terminology that enhances the analysis.',
      ao3: 'Convincing understanding of contextual factors demonstrated through developed links between context and text. Context genuinely illuminates interpretation.',
    },
    {
      level: 4,
      descriptor: 'Thoughtful, clear understanding with well-chosen evidence',
      ao1: 'Thoughtful, clear understanding of texts with well-chosen evidence to support interpretations. Developing critical style with relevant textual references.',
      ao2: 'Thoughtful, clear analysis of language, form, and structure. Clear explanation of effects using relevant subject terminology.',
      ao3: 'Clear understanding of contextual factors with relevant links to the text, though not always fully integrated into analysis.',
    },
    {
      level: 3,
      descriptor: 'Some valid explanation with relevant references',
      ao1: 'Some valid explanation of texts with relevant references. Attempts at a critical style, though not always sustained. Points supported by appropriate textual evidence.',
      ao2: 'Some valid analysis of language, form, and structure. Some relevant use of subject terminology, though analysis may not always be fully developed.',
      ao3: 'Some understanding of contextual factors with some links to the text, though context may be bolted on rather than integrated.',
    },
    {
      level: 2,
      descriptor: 'Supported awareness with general references',
      ao1: 'Supported awareness of texts with general references. Limited engagement with implicit meaning. Reliance on narrative retelling or paraphrase.',
      ao2: 'Some comment on language and/or structure, but analysis may be superficial or descriptive. Limited or inaccurate use of subject terminology.',
      ao3: 'Limited awareness of context with little connection to the text.',
    },
    {
      level: 1,
      descriptor: 'Simple identification or paraphrase',
      ao1: 'Simple identification of basic features or paraphrase of content. Little or no supporting evidence from the text.',
      ao2: 'Simple identification of basic language or structural features. Little or no analysis of effects. Minimal or no subject terminology.',
      ao3: 'Minimal or no awareness of contextual factors.',
    },
  ],

  // ─── Grade Boundaries ────────────────────────────────────────────────────────
  gradeBoundaries: [
    {
      year: '2023',
      max: 160,
      grade9: 120,
      grade8: 108,
      grade7: 96,
      grade6: 78,
      grade5: 62,
      grade4: 46,
    },
    {
      year: '2024',
      max: 160,
      grade9: 122,
      grade8: 110,
      grade7: 98,
      grade6: 80,
      grade5: 64,
      grade4: 48,
    },
  ],

  // ─── Marker Tips ───────────────────────────────────────────────────────────
  examinerTips: [
    {
      question: 'Component 1, Section A - Reading Questions',
      tips: [
        'Read the extract at least twice before answering any questions. On first reading, absorb the overall content and tone. On second reading, annotate key language features and structural choices.',
        'Stay within the specified line references for each question: material from outside those lines will not be credited. Question 05 is the exception, using the final lines and the passage as a whole.',
        'For the language analysis question (Q03, 10 marks), depth always outscores breadth. Two or three deeply developed analytical points will outscore five or six superficial ones.',
        'Q04 (10 marks) adds structure: write about the order of events as well as the words.',
        'The evaluation question (Q05, 10 marks) asks you to judge a view. You must evaluate, not merely describe. Use evaluative language throughout.',
      ],
    },
    {
      question: 'Both Components, Section B - Checking Your Own Writing',
      tips: [
        'Eduqas sets no separate proofreading task, but technical accuracy (AO6) is 16 of the 40 writing marks in each component, so leave time to check your own work.',
        "Read your writing systematically, sentence by sentence. Common error types include: homophones (their/there/they're, affect/effect, its/it's), comma splices, missing or misplaced apostrophes, subject-verb agreement errors, and sentence fragments.",
        'Practise checking your own writing under timed conditions in the weeks before the exam. Knowing the errors you tend to make will improve your speed and accuracy.',
        'Correct only genuine errors: a hurried change can turn a correct sentence into an incorrect one.',
      ],
    },
    {
      question: 'Component 1, Section B - Creative Writing',
      tips: [
        'Choose one of four titles, and use the 10 minutes the paper advises for planning. A clear plan prevents the rambling, unfocused responses that markers consistently flag.',
        'Open with a hook: a striking image, an unusual perspective, a sensory detail, or a provocative line of dialogue.',
        'Vary your sentence openings and lengths purposefully. Short sentences create impact; longer sentences build atmosphere and description.',
        'End with circularity: echo your opening image, phrase, or motif to create a satisfying, crafted structure.',
        'AO6 carries 16 of the 40 marks for technical accuracy. Proofread your writing carefully, especially the full stops between sentences.',
      ],
    },
    {
      question: 'Component 2, Section A - Non-Fiction Reading',
      tips: [
        'The synthesis question (1.5) requires evidence from BOTH texts: an answer on one text stays in the lowest band.',
        'For the comparison question (1.6), structure around points of comparison rather than writing about each text in turn. Each paragraph should refer to both texts.',
        "Consider how historical period, audience, purpose, and genre influence each writer's perspective and language choices.",
        'The evaluation question (1.4, on the 19th-century text) rewards critical judgement, not description. Take a clear stance and sustain it with specific textual evidence.',
      ],
    },
    {
      question: 'Component 2, Section B - Transactional Writing',
      tips: [
        'You must complete both writing tasks, 2.1 and 2.2, worth 20 marks each. Give each about 30 minutes, as the paper advises.',
        'Match your register precisely to the specified form and audience. A formal letter requires different conventions from an opinion article or a speech transcript.',
        'Neither task is a lesser task: clear structure, varied sentence types, and accurate technical skills are assessed in both.',
        'Build your argument through well-developed paragraphs with topic sentences and discourse markers. End with a powerful closing statement that echoes or develops your opening.',
      ],
    },
    {
      question: 'Literature Component 1 - Shakespeare',
      tips: [
        'The extract-based question and the whole-text essay are each worth 20 marks. Divide your time evenly between them.',
        "Do not repeat material from Part (a) in Part (b). The extract may relate to Part (b)'s theme, but your whole-play essay must demonstrate wider knowledge.",
        'AO3 context is essential in both parts. Reference Elizabethan/Jacobean social norms, dramatic conventions, and audience expectations where they genuinely illuminate the text.',
        'Memorise 10-15 short, precise quotations for your Shakespeare play. Single-word or short-phrase quotations embedded in your sentences are more effective than long block quotes.',
      ],
    },
    {
      question: 'Literature Component 1 - Poetry Anthology',
      tips: [
        'There are no clusters: your comparison poem can be any other poem in the anthology, so know every poem well enough to quote it from memory.',
        'Choose your comparison poem quickly (within 2 minutes) based on the strongest thematic or methodological links. Do not waste time deliberating.',
        'Structure your response comparatively throughout - do not write about one poem and then the other. Each paragraph should address both poems.',
        'For each poem, comment on language, form, and structure. Analyse how these formal choices reinforce or complicate meaning.',
        'Prepare at least three potential comparison poems for each main theme, so you have flexibility whichever poem is named.',
      ],
    },
    {
      question: 'Literature Component 2 - Unseen Poetry',
      tips: [
        'Read each unseen poem at least twice before writing. On first reading, identify subject and tone. On second reading, annotate language, form, and structural choices.',
        'There is no AO3 requirement for unseen poetry - focus entirely on interpretation (AO1) and analysis of methods (AO2).',
        'For the comparison question (Part 2), focus on methods rather than content. Compare HOW the poets achieve their effects, not just WHAT the poems are about.',
        'Keep your Part 2 response focused - two or three sharp comparative points with short embedded quotations are sufficient for the available marks.',
      ],
    },
  ],

  // ─── Key Changes for 2026 ───────────────────────────────────────────────────
  // 31 October 2026: an entry here said the Language Component 1 proofreading
  // task had been expanded. There is no such task (see the overview note), so
  // the entry was removed rather than reworded.
  keyChanges: [
    {
      year: '2026',
      change:
        'New anthology: from summer 2027 Eduqas examines a new fifteen-poem anthology, with no poem in common with the one examined until summer 2026.',
    },
    {
      year: '2026',
      change:
        'Clarified contextual assessment in Literature: marking guide descriptors for AO3 now provide more explicit guidance on what constitutes integrated contextual understanding versus bolted-on context, helping students target the top bands more effectively.',
    },
  ],

  // ─── Set Texts ─────────────────────────────────────────────────────────────
  setTexts: [
    {
      title: 'Blood Brothers',
      author: 'Willy Russell',
      themes: [
        'Class division',
        'Nature versus nurture',
        'Fate and superstition',
        'Friendship and betrayal',
        'Motherhood',
      ],
      context:
        "Set in Liverpool during the 1960s-1980s, Blood Brothers explores the devastating impact of class inequality through the story of twins separated at birth. Russell draws on the social upheaval of Thatcherite Britain, mass unemployment, and the widening gap between rich and poor. The play's musical form and use of a narrator as a Greek chorus figure give it a distinctive theatrical quality.",
      characters: [
        {
          name: 'Mickey Johnstone',
          description:
            "One of the separated twins, raised in poverty. Mickey's decline from energetic child to depressed, pill-dependent adult embodies Russell's critique of how class determines life outcomes.",
        },
        {
          name: 'Eddie Lyons',
          description:
            "Mickey's twin, raised in wealth by Mrs Lyons. Eddie's privileges - education, confidence, opportunity - contrast sharply with Mickey's trajectory, illustrating the nature-versus-nurture debate.",
        },
        {
          name: 'Mrs Johnstone',
          description:
            'The biological mother of the twins. A warm, superstitious, working-class woman whose impossible choice drives the tragedy. She represents the powerlessness of the poor.',
        },
        {
          name: 'Mrs Lyons',
          description:
            "Eddie's adoptive mother. Manipulative and increasingly paranoid, she exploits Mrs Johnstone's superstition and economic vulnerability.",
        },
        {
          name: 'The Narrator',
          description:
            'Functions as a chorus figure, foreshadowing the tragic ending and providing moral commentary. His presence creates dramatic irony throughout.',
        },
      ],
      quotations: [
        {
          quote:
            "[The Narrator's refrain warning that the devil has come to collect: the lyric is not reproduced here]",
          analysis:
            'The Narrator\'s repeated refrain establishes fate as an inescapable force. The imperative "got" suggests predetermination, while "the devil" invokes superstition and moral judgement - key thematic concerns.',
        },
        {
          quote: 'I could have been him',
          analysis:
            'Mickey\'s devastating final line crystallises the nature-versus-nurture theme. The modal verb "could have" expresses unrealised potential, and the simple monosyllabic diction underscores the tragedy of wasted life.',
        },
        {
          quote: "We're blood brothers",
          analysis:
            'The childhood pact takes on tragic irony given the audience\'s knowledge of their biological connection. "Blood" functions literally and metaphorically, linking innocence with the violence of the ending.',
        },
      ],
      examStrategy:
        "Focus on how Russell uses the parallel structure of the twins' lives to critique class inequality. Track the deterioration of Mickey's circumstances against Eddie's growing privilege, and analyse how the Narrator's interventions create dramatic irony. Always link character analysis to the broader social context of 1980s Britain.",
    },
    {
      title: 'A Christmas Carol',
      author: 'Charles Dickens',
      themes: [
        'Redemption and transformation',
        'Social responsibility',
        'Poverty and inequality',
        'Christmas and generosity',
        'Isolation and community',
      ],
      context:
        'Published in 1843 during a period of severe poverty and social unrest in Victorian England. Dickens was deeply influenced by the conditions he witnessed in industrial cities and by government reports on child labour. The novella functions as a social polemic, using the supernatural framework of ghost stories to deliver a powerful critique of Victorian attitudes to the poor, particularly the utilitarian philosophy embodied in the New Poor Law of 1834.',
      characters: [
        {
          name: 'Ebenezer Scrooge',
          description:
            "A miserly, cold-hearted businessman whose transformation from selfish isolation to generous community member drives the novella's moral argument. His journey represents Dickens's belief in the possibility of personal and social redemption.",
        },
        {
          name: 'Bob Cratchit',
          description:
            "Scrooge's underpaid clerk, representing the virtuous working poor. His warmth, loyalty, and family devotion contrast sharply with Scrooge's isolation, embodying the Christian charity Dickens advocates.",
        },
        {
          name: 'Tiny Tim',
          description:
            "Bob Cratchit's disabled youngest son. His potential death serves as the emotional catalyst for Scrooge's transformation and symbolises the vulnerable members of society whom the wealthy have a moral duty to protect.",
        },
        {
          name: 'Jacob Marley',
          description:
            "Scrooge's dead business partner, condemned to wander in chains forged from his own greed. His ghostly warning establishes the novella's moral framework: neglect of social duty brings eternal punishment.",
        },
      ],
      quotations: [
        {
          // Corrected 2 October 2026 against the held edition (Project Gutenberg #46,
          // src/data/full-texts/a-christmas-carol.ts): Scrooge's Stave One questions are "Are
          // there no prisons?" and "And the Union workhouses?", with the gentleman's answer
          // between. "Are there no workhouses?" is the Spirit's, turning his words on him in
          // Stave Three. His own questions do not repeat "Are there no", so the analysis no
          // longer says they do.
          quote: 'Are there no prisons? ... And the Union workhouses?',
          analysis:
            "Scrooge's rhetorical questions echo the utilitarian philosophy Dickens despised. The bare, clipped questions reveal Scrooge's dismissive contempt for the poor, and Dickens positions the reader to reject this callous attitude.",
        },
        {
          quote: 'Mankind was my business',
          analysis:
            'Marley\'s ghost redefines "business" from commerce to compassion. The past tense "was" carries the weight of irreversible regret, serving as a warning to Scrooge and, by extension, to Dickens\'s wealthy readers.',
        },
        {
          quote: 'I will honour Christmas in my heart, and try to keep it all the year',
          analysis:
            'Scrooge\'s pledge marks his completed transformation. The future tense "will" signals determined commitment, while "all the year" extends the spirit of generosity beyond a single day - embodying Dickens\'s central message.',
        },
      ],
      examStrategy:
        "Structure your essay around Scrooge's transformation, tracking how Dickens uses the three-ghost structure to systematically dismantle Scrooge's selfishness. Link every point to Victorian social context: the Poor Law, workhouses, Malthusian economics, and Dickens's personal crusade against poverty. Analyse the novella as a piece of social commentary disguised as a Christmas ghost story.",
    },
    {
      title: 'Macbeth',
      author: 'William Shakespeare',
      themes: [
        'Ambition and its consequences',
        'Guilt and conscience',
        'Masculinity and power',
        'The supernatural',
        'Order and disorder',
        'Appearance versus reality',
      ],
      context:
        'Written around 1606, shortly after the Gunpowder Plot, Macbeth explores the catastrophic consequences of regicide and unchecked ambition. Shakespeare wrote the play partly to flatter King James I, who was fascinated by witchcraft and believed in the divine right of kings. The play engages with Jacobean anxieties about political instability, the legitimacy of royal succession, and the dangerous allure of supernatural power.',
      characters: [
        {
          name: 'Macbeth',
          description:
            'A Scottish nobleman whose "vaulting ambition" leads him from loyal warrior to tyrannical king to haunted, isolated figure. His tragic arc illustrates the destructive power of unchecked ambition and the psychological toll of guilt.',
        },
        {
          name: 'Lady Macbeth',
          description:
            "Macbeth's wife, who initially drives the plot to murder Duncan through manipulation of Macbeth's masculinity. Her subsequent descent into guilt-ridden madness and suicide mirrors Macbeth's own psychological deterioration.",
        },
        {
          name: 'The Witches',
          description:
            'The "weird sisters" whose prophecies ignite Macbeth\'s ambition. They embody the supernatural forces that Jacobean audiences feared, and their equivocal language ("fair is foul") establishes the play\'s thematic concern with deception and moral inversion.',
        },
        {
          name: 'Banquo',
          description:
            "Macbeth's fellow general, who resists the temptation of the witches' prophecies. He functions as a moral foil to Macbeth, demonstrating that ambition can be resisted through conscience and loyalty.",
        },
      ],
      quotations: [
        {
          quote: "Look like the innocent flower, / But be the serpent under 't",
          analysis:
            'Lady Macbeth\'s imperative to Macbeth encapsulates the theme of appearance versus reality. The biblical allusion to the serpent in Eden positions the Macbeths as agents of original sin, while the juxtaposition of "flower" and "serpent" mirrors the play\'s pervasive moral inversions.',
        },
        {
          quote: "Will all great Neptune's ocean wash this blood clean from my hand?",
          analysis:
            "Macbeth's rhetorical question reveals the overwhelming guilt that follows Duncan's murder. The hyperbolic reference to \"Neptune's ocean\" suggests that no natural force can cleanse his conscience, foreshadowing his psychological disintegration.",
        },
        {
          quote: 'Out, damned spot! Out, I say!',
          analysis:
            'Lady Macbeth\'s fragmented, imperative exclamations during the sleepwalking scene reveal her psychological collapse. The "spot" of blood she cannot remove symbolises indelible guilt - ironic given her earlier dismissal that "a little water clears us of this deed".',
        },
      ],
      examStrategy:
        "Focus on the trajectory of ambition and guilt across the play. Track how Macbeth and Lady Macbeth's relationship inverts - she begins as the driving force and he as the reluctant follower, but by Act 5 their positions are reversed. Always connect character analysis to Jacobean context: the divine right of kings, the Great Chain of Being, and James I's fascination with witchcraft.",
    },
    {
      title: 'Romeo and Juliet',
      author: 'William Shakespeare',
      themes: [
        'Love and passion',
        'Fate and free will',
        'Family honour and feuding',
        'Youth versus age',
        'Violence and conflict',
        'Light and darkness',
      ],
      context:
        "Written around 1595, Romeo and Juliet draws on Italian source material to explore the destructive consequences of an ancient family feud. The play engages with Elizabethan attitudes to love, marriage, patriarchal authority, and honour. Shakespeare subverts the conventions of Petrarchan love poetry, presenting Romeo's initial infatuation with Rosaline as shallow and his love for Juliet as transformative. The play also reflects the instability of Elizabethan society, where public violence and private passion could equally threaten social order.",
      characters: [
        {
          name: 'Romeo',
          description:
            "A Montague who evolves from a lovesick Petrarchan poet to a passionate, impulsive young man willing to defy his family for love. His rapid emotional shifts - from melancholy to ecstasy to despair - embody the play's exploration of youthful intensity.",
        },
        {
          name: 'Juliet',
          description:
            "A Capulet who matures from an obedient daughter into a decisive young woman who defies patriarchal authority. Her pragmatic intelligence contrasts with Romeo's impulsiveness, and her agency in pursuing the relationship challenges Elizabethan gender norms.",
        },
        {
          name: 'Tybalt',
          description:
            "Juliet's hot-headed cousin, whose obsession with family honour drives the play's central act of violence. He embodies the destructive pride of the feud and functions as a catalyst for the tragic turning point.",
        },
        {
          name: 'Friar Lawrence',
          description:
            'A well-meaning Franciscan friar whose secret marriage of the lovers and ill-fated sleeping potion plan ultimately contribute to the tragedy. He represents the failure of adult wisdom to contain youthful passion.',
        },
      ],
      quotations: [
        {
          quote: "A pair of star-cross'd lovers take their life",
          analysis:
            'The Prologue\'s metaphor establishes fate as an inescapable force governing the play. "Star-cross\'d" draws on Elizabethan belief in astrology, while "take their life" carries a double meaning - both living and dying - that encapsulates the play\'s intertwining of love and death.',
        },
        {
          quote: 'My only love sprung from my only hate',
          analysis:
            'Juliet\'s oxymoronic exclamation captures the central paradox of the play: love born from enmity. The parallelism of "only love" and "only hate" emphasises the impossibility of reconciling private desire with public allegiance.',
        },
        {
          quote: "A plague o' both your houses!",
          analysis:
            'Mercutio\'s dying curse indicts both families for the senseless violence of their feud. The repetition across his death scene intensifies its force, and the word "plague" - devastating to Elizabethan audiences - elevates personal tragedy to communal catastrophe.',
        },
      ],
      examStrategy:
        'Analyse how Shakespeare interweaves love and violence throughout the play. Track the acceleration of events - the entire tragedy unfolds in less than a week, creating a breathless pace that mirrors the intensity of young love. Always connect character analysis to Elizabethan context: patriarchal authority, arranged marriage, honour culture, and the role of fate in a religious society.',
    },
  ],

  // ─── Poetry Anthology ──────────────────────────────────────────────────────
  poems: [
    {
      title: 'Sonnet 43 (How Do I Love Thee?)',
      poet: 'Elizabeth Barrett Browning',
      era: 'Victorian (1850)',
      themes: ['Eternal love', 'Devotion', 'Spiritual connection'],
      topComparison:
        'She Walks in Beauty - both explore idealised love through formal poetic structures',
      formAnalysis:
        'Petrarchan sonnet form with iambic pentameter. The structured form contains and channels the overwhelming emotion of the speaker\'s declaration. Anaphora of "I love thee" creates rhythmic intensity.',
      keyQuotation: 'I love thee to the depth and breadth and height / My soul can reach',
    },
    {
      title: 'She Walks in Beauty',
      poet: 'Lord Byron',
      era: 'Romantic (1814)',
      themes: ['Beauty', 'Harmony of appearance and character', 'Admiration'],
      topComparison: 'Sonnet 43 - both present idealised figures through structured poetic forms',
      formAnalysis:
        'Three regular sestets with ababab rhyme scheme and iambic tetrameter. The regularity of form mirrors the balanced harmony the speaker perceives in the woman. Juxtaposition of light and dark imagery throughout.',
      keyQuotation: 'She walks in beauty, like the night / Of cloudless climes and starry skies',
    },
    {
      title: 'Cozy Apologia',
      poet: 'Rita Dove',
      era: 'Contemporary (2004)',
      themes: ['Mature love', 'Domesticity', 'Contrast with romantic idealism'],
      topComparison:
        "Sonnet 43 - contrasting approaches to expressing love: Dove's colloquial humour versus Browning's elevated devotion",
      formAnalysis:
        'Three ten-line stanzas with loose iambic pentameter. The conversational tone and modern references (Hurricane Floyd) ground romantic love in everyday reality. The title itself is ironic - an "apologia" for finding contentment rather than drama.',
      keyQuotation: 'I could pick anything and think of you',
    },
    {
      title: 'Valentine',
      poet: 'Carol Ann Duffy',
      era: 'Contemporary (1993)',
      themes: ['Unconventional love', 'Honesty', 'Possessiveness'],
      topComparison:
        'Cozy Apologia - both reject conventional romantic imagery in favour of honest, modern expressions of love',
      formAnalysis:
        'Free verse with irregular stanza lengths. The absence of traditional form mirrors the rejection of cliched romance. Short, one-line stanzas ("Not a cute card or a kissogram") create emphatic negation. The onion becomes an extended metaphor for love\'s complexity.',
      keyQuotation: 'Its fierce kiss will stay on your lips, / possessive and faithful as we are',
    },
    {
      title: 'A Wife in London',
      poet: 'Thomas Hardy',
      era: 'Victorian (1899)',
      themes: ['Loss and grief', 'War', 'Irony of fate'],
      topComparison:
        'The Manhunt - both explore the devastating impact of war on intimate relationships',
      formAnalysis:
        'Two contrasting sections: "The Tragedy" and "The Irony". Hardy uses pathetic fallacy and a tight ABAB rhyme scheme to create a sense of cruel inevitability. The two-part structure mirrors the two communications the wife receives.',
      keyQuotation: 'She sits in the tawny vapour / That the Thames-side lanes have uprolled',
    },
    {
      title: 'The Manhunt',
      poet: 'Simon Armitage',
      era: 'Contemporary (2007)',
      themes: ['Physical and emotional trauma', 'Intimacy', 'The aftermath of war'],
      topComparison: 'A Wife in London - both explore love tested by the brutality of war',
      formAnalysis:
        "Thirteen rhyming couplets with half-rhymes that suggest incompleteness and damage. The sequential journey through the soldier's body mirrors the wife's careful, patient attempt to understand his trauma. The couplet form suggests intimacy.",
      keyQuotation: 'and handle and hold / the damaged, porcelain collar-bone',
    },
    {
      title: 'Death of a Naturalist',
      poet: 'Seamus Heaney',
      era: 'Modern (1966)',
      themes: ['Loss of innocence', "Nature's beauty and threat", 'Growing up'],
      topComparison:
        'Afternoons - both explore the loss of youthful innocence, though through very different settings and perspectives',
      formAnalysis:
        "Two contrasting stanzas: the first is long and sensuous, the second shorter and threatening. The shift in tone mirrors the child's sudden loss of innocence. Rich, visceral imagery and onomatopoeia throughout.",
      keyQuotation: 'the great slime kings / Were gathered there for vengeance',
    },
    {
      title: 'Afternoons',
      poet: 'Philip Larkin',
      era: 'Modern (1959)',
      themes: ['Loss of identity', 'Domesticity', 'The passage of time'],
      topComparison: 'Death of a Naturalist - both explore how time erodes earlier states of being',
      formAnalysis:
        'Three eight-line stanzas with subtle rhyme. The regularity suggests the monotony of routine. Enjambment across stanzas creates a sense of life flowing past without pause. The detached, observational tone is characteristically Larkin.',
      keyQuotation: 'Something is pushing them / To the side of their own lives',
    },
    {
      title: 'Living Space',
      poet: 'Imtiaz Dharker',
      era: 'Contemporary (1997)',
      themes: ['Resilience', 'Faith', 'Precariousness of life'],
      topComparison:
        'As Imperceptibly as Grief - both explore how fragile structures (physical and emotional) can contain profound meaning',
      formAnalysis:
        'Free verse with enjambment that mirrors the precarious, unplanned structures described. The poem\'s own form - lines jutting out at angles - visually represents the "living space" of the title. The final image of eggs balances vulnerability and hope.',
      keyQuotation: 'The whole structure hangs / by a prayer',
    },
    {
      title: 'As Imperceptibly as Grief',
      poet: 'Emily Dickinson',
      era: 'Victorian (c.1865)',
      themes: ['Grief and loss', 'The passage of time', 'Nature and the seasons'],
      topComparison: 'Afternoons - both explore how change occurs gradually, almost without notice',
      formAnalysis:
        "Common metre (alternating iambic tetrameter and trimeter) typical of hymns. The regularity of rhythm contrasts with the poem's subject of imperceptible change. Dickinson's characteristic dashes create pauses that force the reader to dwell on each image.",
      keyQuotation: 'As imperceptibly as Grief / The Summer lapsed away',
    },
    {
      title: 'Ozymandias',
      poet: 'Percy Bysshe Shelley',
      era: 'Romantic (1818)',
      themes: ['Transience of power', 'Pride and arrogance', 'Art outlasting empires'],
      topComparison:
        'The Prelude (extract) - both explore the relationship between human ambition and the indifference of nature/time',
      formAnalysis:
        'Irregular sonnet with an unconventional rhyme scheme that mirrors the fragmentation of the statue itself. The multiple narrative frames (poet, traveller, sculptor, Ozymandias) create layers of distance. The volta turns on the irony of the inscription.',
      keyQuotation: 'Look on my Works, ye Mighty, and despair!',
    },
    {
      title: 'The Prelude (extract: Stealing the Boat)',
      poet: 'William Wordsworth',
      era: 'Romantic (1850)',
      themes: ['Power of nature', 'Guilt and conscience', 'Sublime experience'],
      topComparison:
        'Ozymandias - both explore the overwhelming power of nature/time over human ambition',
      formAnalysis:
        "Blank verse (unrhymed iambic pentameter) in a single continuous verse paragraph. The flowing, unbroken form mirrors the boy's journey across the lake and the continuous movement of his consciousness. Enjambment builds momentum.",
      keyQuotation:
        'a huge peak, black and huge, / As if with voluntary power instinct, / Upreared its head',
    },
    {
      title: 'Hawk Roosting',
      poet: 'Ted Hughes',
      era: 'Modern (1960)',
      themes: ['Power and dominance', "Nature's brutality", 'Tyranny'],
      topComparison: 'Ozymandias - both explore absolute power and its relationship to arrogance',
      formAnalysis:
        "Four-line stanzas with no rhyme scheme, reflecting the hawk's uncompromising directness. The dramatic monologue form gives the hawk an unsettling human-like consciousness. Short, declarative sentences convey absolute certainty and control.",
      keyQuotation: 'I sit in the top of the wood, my eyes closed. / Inaction, no falsifying dream',
    },
    {
      title: 'To Autumn',
      poet: 'John Keats',
      era: 'Romantic (1819)',
      themes: ['Beauty in transience', 'The cycle of seasons', 'Acceptance of mortality'],
      topComparison:
        'As Imperceptibly as Grief - both explore the subtle passage from abundance to loss through seasonal imagery',
      formAnalysis:
        "Three eleven-line stanzas, each a modified ode. The progression from ripeness (stanza 1) through stillness (stanza 2) to departure (stanza 3) mirrors autumn's own trajectory. Rich sensory imagery appeals to sight, touch, taste, and sound.",
      keyQuotation:
        'Season of mists and mellow fruitfulness, / Close bosom-friend of the maturing sun',
    },
    {
      title: 'Mametz Wood',
      poet: 'Owen Sheers',
      era: 'Contemporary (2005)',
      themes: ['War and remembrance', 'The earth as witness', 'Fragility of life'],
      topComparison:
        "The Manhunt - both address the physical reality of war's damage to human bodies",
      formAnalysis:
        'Three-line stanzas (tercets) with no rhyme, creating a sense of restrained solemnity. The present tense gives immediacy to the discovery of the soldiers\' remains. Extended metaphor of the earth "giving back" the dead.',
      keyQuotation:
        'the earth stands sentinel, / reaching back into itself for reminders of what happened',
    },
    {
      title: 'Invictus',
      poet: 'William Ernest Henley',
      era: 'Victorian (1875)',
      themes: ['Resilience', 'Self-determination', 'Defiance in suffering'],
      topComparison:
        'Living Space - both explore human resilience in the face of overwhelming adversity',
      formAnalysis:
        "Four quatrains with ABAB rhyme scheme and iambic tetrameter. The tight, controlled form embodies the speaker's determination to maintain mastery over their fate. The declarative final couplet is among the most famous in English poetry.",
      keyQuotation: 'I am the master of my fate, / I am the captain of my soul',
    },
    {
      title: 'Excerpt from The Prelude (Ice-Skating)',
      poet: 'William Wordsworth',
      era: 'Romantic (1850)',
      themes: ['Joy in nature', 'Childhood experience', 'The sublime'],
      topComparison:
        'Death of a Naturalist - both present childhood encounters with nature that carry deeper significance',
      formAnalysis:
        "Blank verse continuing the autobiographical mode of The Prelude. The breathless enjambment and long sentences mimic the physical exhilaration of skating. The shift from communal play to solitary stillness at the end reveals Wordsworth's characteristic movement from action to reflection.",
      keyQuotation: "All shod with steel, / We hiss'd along the polish'd ice",
    },
    {
      title: 'Dulce et Decorum Est',
      poet: 'Wilfred Owen',
      era: 'Modern (1920)',
      themes: ['The horror of war', 'Propaganda and truth', 'Suffering'],
      topComparison:
        'Mametz Wood - both confront the physical reality of war, though Owen writes from direct experience while Sheers writes from historical distance',
      formAnalysis:
        'Modified sonnet structure broken into irregular stanzas. The disruption of form mirrors the chaos of the gas attack. Vivid, visceral imagery and the direct address to the reader ("My friend") create an accusatory, confrontational tone. The Latin title is used with savage irony.',
      keyQuotation:
        "the white eyes writhing in his face, / His hanging face, like a devil's sick of sin",
    },
  ],

  // ─── Unique Features ─────────────────────────────────────────────────────────
  uniqueFeatures: [
    'Language Component 1 is built on one unseen 20th-century literary extract: five reading questions on it, three of them worth 10 marks each, then one story or account from a choice of four titles.',
    'One poetry anthology, with no clusters - students study every poem, and in the exam choose any second poem from the anthology to compare with the named one. This requires secure knowledge of the whole anthology.',
    'Oracy assessment: WJEC Eduqas includes continuous assessment of spoken language skills (oracy) as part of the overall qualification profile, placing greater emphasis on oral communication than other boards.',
    'Structured marking guides with clearly defined bands (five on most English Language questions), widely regarded as among the clearest and most transparent of any board, making self-assessment and targeted improvement straightforward for students and teachers.',
    'Component 2 requires two compulsory transactional writing tasks of 20 marks each, testing a range of forms including letters, articles, speeches, and reviews within a single exam sitting.',
    'The two Language components are not weighted equally: Component 2 carries 60% of the grade and Component 1 40%, so the non-fiction paper deserves the larger share of practice.',
    'Literature Component 2 covers three distinct sections (post-1914 prose/drama, 19th-century prose, and unseen poetry) in a single 2-hour-30-minute paper, requiring exceptional time management and versatility.',
    'Grade boundaries have remained relatively stable year-on-year, providing predictability for students and teachers planning their revision strategies.',
  ],
}
