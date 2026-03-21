import type { BoardExamGuide } from './types';

export const aqaGuide: BoardExamGuide = {
  boardId: 'AQA',
  boardName: 'AQA',
  boardColor: '#4F46E5',

  overview: `<p>AQA is the most widely entered exam board for GCSE English Language in England, and its specifications are renowned for their clear structure, predictable question formats, and transparent mark schemes. The Language qualification (8700) splits evenly into two papers — one focused on fiction reading and creative writing, the other on non-fiction reading and persuasive writing — giving students a balanced assessment across all text types. The Literature qualification (8702) covers Shakespeare, the 19th-century novel, modern prose or drama, and poetry, demanding both close textual analysis and broader contextual understanding.</p>

<p>What makes AQA distinctive is its emphasis on <strong>evaluation</strong> and <strong>conceptualised response</strong>. The word "conceptualised" is the single most important descriptor separating top-band responses from competent ones: it means threading an overarching argument or interpretation through your entire answer rather than analysing quotations in isolation. AQA's mark schemes use six clearly defined levels, and examiners consistently reward depth over breadth — two or three deeply developed analytical paragraphs will outscore six superficial ones every time. The 2026 specification introduces several refinements, including multiple-choice for Paper 1 Question 1 and named structural effects for Question 3, making the exam more focused and accessible.</p>

<p>Strategically, students should note that AQA's grade boundaries are remarkably forgiving: a Grade 4 in Language requires only around 46% and even a Grade 9 needs just 74-76%. This means that mastering a handful of key skills — particularly AO2 language analysis and AO4 critical evaluation — can have an outsized impact on your final grade. In Literature, AO1 and AO2 together account for roughly 70% of all marks, so precise subject terminology and embedded quotation analysis are non-negotiable. Focus your revision on quality of analysis, practise under timed conditions, and always plan before you write.</p>`,

  specCodes: [
    { subject: 'English Language', code: '8700' },
    { subject: 'English Literature', code: '8702' },
  ],

  // ─── Language Assessment Objectives ──────────────────────────────────────────
  languageAOs: [
    {
      code: 'AO1',
      description:
        'Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.',
      weighting: '~20%',
    },
    {
      code: 'AO2',
      description:
        'Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views.',
      weighting: '~35%',
    },
    {
      code: 'AO3',
      description:
        'Compare writers\' ideas and perspectives, as well as how these are conveyed, across two or more texts.',
      weighting: '~20%',
    },
    {
      code: 'AO4',
      description:
        'Evaluate texts critically and support this with appropriate textual references.',
      weighting: '~25%',
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
    {
      code: 'AO7-9',
      description:
        'Spoken Language endorsement: demonstrate presentation skills, respond to questions and feedback, use Standard English appropriately. Reported separately on the certificate — does not contribute to the overall Language grade.',
      weighting: 'Reported separately',
    },
  ],

  // ─── Literature Assessment Objectives ────────────────────────────────────────
  literatureAOs: [
    {
      code: 'AO1',
      description:
        'Read, understand and respond to texts. Students should be able to maintain a critical style and develop an informed personal response. Use textual references, including quotations, to support and illustrate interpretations.',
      weighting: '~35%',
    },
    {
      code: 'AO2',
      description:
        'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
      weighting: '~35%',
    },
    {
      code: 'AO3',
      description:
        'Show understanding of the relationships between texts and the contexts in which they were written.',
      weighting: '~20%',
    },
    {
      code: 'AO4',
      description:
        'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
      weighting: '~10%',
    },
  ],

  // ─── Language Papers ─────────────────────────────────────────────────────────
  languagePapers: [
    {
      title: 'Paper 1: Explorations in Creative Reading and Writing',
      code: '8700/1',
      time: '1 hour 45 minutes',
      marks: 80,
      weighting: '50%',
      textType:
        'One unseen literary fiction extract (20th or 21st century). Section B offers a creative writing task with an optional picture stimulus.',
      sections: [
        {
          title: 'Section A: Reading',
          marks: 40,
          questions: [
            {
              question:
                'Q1 — Multiple choice (NEW 2026: replaces "list four things")',
              marks: 4,
              ao: 'AO1',
              skill: 'Identify explicit information',
              time: '5 minutes',
              advice:
                'Read within the specified line references only. Each correct answer is worth 1 mark. No analysis or explanation is needed — simply select the four correct options. This is a warm-up question; do not overthink it.',
            },
            {
              question:
                'Q2 — How does the writer use language to describe/present [focus]?',
              marks: 8,
              ao: 'AO2',
              skill: 'Language analysis of a specified section',
              time: '10–12 minutes',
              advice:
                'Use a PETAL+ structure (Point, Evidence, Technique, Analysis, Link). Two or three deeply developed points will outscore six shallow ones. Name both denotation and connotation of key words. Use evaluative verbs such as "implies", "connotes", "evokes" and "underscores". Always stay within the specified lines.',
            },
            {
              question:
                'Q3 — How does the writer structure the text to [named effect]? (NEW 2026: names a specific structural effect)',
              marks: 8,
              ao: 'AO2',
              skill: 'Structural analysis with named effect',
              time: '10–12 minutes',
              advice:
                'Focus on text-level structural features: how the opening establishes setting or character, how the middle develops tension or shifts focus, and how the ending resolves or subverts expectations. Comment on perspective shifts, flashback, foreshadowing, cyclical structure, and narrowing or widening of focus. Also address sentence-level structural choices such as short sentences for impact or listing for accumulation.',
            },
            {
              question:
                'Q4 — "To what extent do you agree?" Critical evaluation (NEW 2026: direct statement replaces "A student said…")',
              marks: 20,
              ao: 'AO4',
              skill: 'Critical evaluation with textual references',
              time: '20–22 minutes',
              advice:
                'This is the most discriminating question on the paper — it separates Grade 7+ from the rest. You must <strong>evaluate</strong>, not merely describe. Partially agree with the statement to show nuance: present evidence that supports it, then use a "however" turn to explore counter-evidence or alternative readings. Embed short quotations fluently within your sentences. A strong response typically has three well-developed paragraphs plus a brief conclusion.',
            },
          ],
        },
        {
          title: 'Section B: Writing',
          marks: 40,
          questions: [
            {
              question:
                'Q5 — Creative/descriptive writing (picture prompt option available). NEW 2026: option to write just the opening of a narrative.',
              marks: 40,
              ao: 'AO5 (24 marks) + AO6 (16 marks)',
              skill: 'Creative writing — narrative or descriptive',
              time: '45 minutes (including 5–7 minutes planning)',
              advice:
                'Spend 5–7 minutes planning before you write. Open with a hook — a striking image, a sensory detail, or a provocative line of dialogue. Vary your sentence openings (adverbial, participial, one-word) and lengths (short for impact, long for description). Demonstrate the full punctuation range: semicolons, colons, dashes, ellipses, and exclamation marks used sparingly. Paragraphs should be varied in length too. End with circularity — echo or mirror your opening image or idea. If choosing the "opening of a narrative" option, focus on establishing atmosphere, character voice, and a sense of intrigue.',
            },
          ],
        },
      ],
    },
    {
      title: "Paper 2: Writers' Viewpoints and Perspectives",
      code: '8700/2',
      time: '1 hour 45 minutes',
      marks: 80,
      weighting: '50%',
      textType:
        'Two linked non-fiction/literary non-fiction sources. Source A is a 20th or 21st century text; Source B is a 19th century text. Both share a common theme or topic.',
      sections: [
        {
          title: 'Section A: Reading',
          marks: 40,
          questions: [
            {
              question: 'Q1 — True/False selection from Source A',
              marks: 4,
              ao: 'AO1',
              skill: 'Identify explicit information (true/false)',
              time: '5 minutes',
              advice:
                'Read carefully within the specified lines. Select only the number of true statements asked for. This is a retrieval question — no analysis or inference required. Use it as a way to familiarise yourself with Source A before tackling later questions.',
            },
            {
              question:
                'Q2 — Summary/synthesis: use details from BOTH sources to write a summary of [topic]',
              marks: 8,
              ao: 'AO1',
              skill: 'Summary and synthesis from two sources',
              time: '10 minutes',
              advice:
                'You must synthesise from <strong>both</strong> texts — responses that neglect one source cannot reach the top band. Cross-reference the sources by drawing explicit connections: "Both writers suggest…", "While Source A emphasises…, Source B instead…". Use brief embedded quotations and keep your language concise. Three to four well-developed comparative points are sufficient.',
            },
            {
              question:
                'Q3 — How does the writer use language to [focus]? (Source A only)',
              marks: 12,
              ao: 'AO2',
              skill: 'Language analysis of Source A',
              time: '15 minutes',
              advice:
                'Analyse language techniques in detail, naming specific devices and exploring their effects on the reader. Use subject terminology precisely — do not just label a metaphor, but explain what it connotes and why the writer chose it. Three well-developed analytical points with embedded quotations will comfortably reach Level 4+.',
            },
            {
              question:
                'Q4 — Compare how the two writers convey their different perspectives on [topic]',
              marks: 16,
              ao: 'AO3',
              skill:
                'Compare perspectives and methods across both sources',
              time: '20 minutes',
              advice:
                'You must compare <strong>both</strong> texts throughout your response — discussing only one text means you cannot access Level 3 or above. Focus on the writers\' perspectives (what they think/feel) and the methods they use to convey those perspectives. Use comparative connectives: "whereas", "in contrast", "similarly", "conversely". Aim for three or four comparative paragraphs, each addressing a different aspect of the topic.',
            },
          ],
        },
        {
          title: 'Section B: Writing',
          marks: 40,
          questions: [
            {
              question:
                'Q5 — Write a persuasive/argumentative piece (e.g., article, letter, speech, essay)',
              marks: 40,
              ao: 'AO5 (24 marks) + AO6 (16 marks)',
              skill: 'Persuasive or argumentative non-fiction writing',
              time: '45 minutes (including 5–7 minutes planning)',
              advice:
                'Match your register to the specified form and audience. Open with a rhetorical question, bold claim, or striking statistic to hook the reader. Structure your argument clearly with topic sentences and discourse markers. Use rhetorical devices — tricolon, anaphora, direct address, counter-argument — but do not let devices overwhelm your content. Ensure your paragraphs vary in length and that your conclusion circles back to your opening or delivers a powerful final statement. Accuracy in spelling, punctuation and grammar accounts for 16 of the 40 marks, so proofread carefully.',
            },
          ],
        },
      ],
    },
  ],

  // ─── Literature Papers ───────────────────────────────────────────────────────
  literaturePapers: [
    {
      title: 'Paper 1: Shakespeare and the 19th-Century Novel',
      code: '8702/1',
      time: '1 hour 45 minutes',
      marks: 64,
      weighting: '40%',
      textType:
        'Closed-book examination. Section A provides a printed extract from the set Shakespeare play. Section B is a whole-text essay on the 19th-century novel with no extract provided.',
      sections: [
        {
          title: 'Section A: Shakespeare',
          marks: 30,
          questions: [
            {
              question:
                'Starting with this extract, explore how Shakespeare presents [character/theme]. Write about the extract and then the play as a whole.',
              marks: 30,
              ao: 'AO1 + AO2 (dominant), AO3 (secondary), +4 marks AO4 SPaG',
              skill:
                'Extract-to-whole analysis of Shakespeare play. 4 additional marks for SPaG.',
              time: '50–55 minutes',
              advice:
                'Divide your response roughly 40/60 between the extract and the wider play. Analyse the extract in close detail first — word-level analysis of Shakespeare\'s language choices, dramatic techniques, and use of verse or prose. Then broaden to the whole play, exploring how the theme or character develops across the text. Weave in contextual points (AO3) naturally — do not bolt them on. The 4 SPaG marks reward accurate spelling of literary terms, clear expression, and correct use of apostrophes and quotation marks.',
            },
          ],
        },
        {
          title: 'Section B: 19th-Century Novel',
          marks: 34,
          questions: [
            {
              question:
                'Explore how [author] presents [character/theme] in [novel]. Write about the whole text.',
              marks: 34,
              ao: 'AO1 + AO2 (dominant), AO3 (secondary), +4 marks AO4 SPaG',
              skill:
                'Whole-text essay from memory — no extract provided. 4 additional marks for SPaG.',
              time: '45–50 minutes',
              advice:
                'This is a closed-book question with no extract, so you must have memorised quotations from across the novel. Aim for 10–15 short, precise quotations committed to memory for each text. Structure your essay thematically rather than chronologically. Each paragraph should make a clear point, support it with an embedded quotation, analyse language in detail, and link to relevant context. "Conceptualised" responses — those that thread a clear argument throughout — will reach Level 5 and above.',
            },
          ],
        },
      ],
    },
    {
      title: 'Paper 2: Modern Texts and Poetry',
      code: '8702/2',
      time: '2 hours 15 minutes',
      marks: 96,
      weighting: '60%',
      textType:
        'Section A is a closed-book essay on modern prose or drama (no extract). Section B provides one named poem from the anthology and requires comparison with a free-choice poem. Section C provides two unseen poems.',
      sections: [
        {
          title: 'Section A: Modern Prose/Drama',
          marks: 30,
          questions: [
            {
              question:
                'How does [author/playwright] present [character/theme] in [text]?',
              marks: 30,
              ao: 'AO1 + AO2 (dominant), AO3 (secondary)',
              skill: 'Whole-text essay from memory — no extract provided',
              time: '40–45 minutes',
              advice:
                'No extract is provided, so revision of quotations is essential. Structure your essay around three or four thematic paragraphs. Begin each paragraph with a conceptualised topic sentence that advances your argument. Analyse writers\' methods in detail — not just what is said, but how and why. Link to context only where it genuinely illuminates meaning. A strong conclusion should synthesise your argument, not just repeat it.',
            },
          ],
        },
        {
          title: 'Section B: Poetry Anthology',
          marks: 30,
          questions: [
            {
              question:
                'Compare how poets present [theme] in [named poem] and one other poem from your anthology cluster.',
              marks: 30,
              ao: 'AO1 + AO2 (dominant), AO3 (secondary)',
              skill:
                'Comparison of named poem (printed) with one free-choice poem from the same cluster',
              time: '35–40 minutes',
              advice:
                'The named poem is printed on the paper, but your comparison poem is not — so you must know your second poem from memory. Choose your comparison poem quickly (within 2 minutes) based on the strongest thematic or methodological links. Structure comparatively throughout: do not write about one poem then the other. Each paragraph should address both poems, using comparative connectives. Analyse language, form, and structure in both poems, and comment on how context shapes meaning.',
            },
          ],
        },
        {
          title: 'Section C: Unseen Poetry',
          marks: 36,
          questions: [
            {
              question:
                'Part 1: In [poem title], how does the poet present [theme/idea]?',
              marks: 24,
              ao: 'AO1 + AO2',
              skill: 'Analyse one unseen poem independently',
              time: '25–30 minutes',
              advice:
                'Read the poem at least twice before writing. Identify the poem\'s subject, tone, and shifts in mood. Analyse language devices (imagery, diction, sound) and structural features (form, enjambment, stanza breaks, volta). Use short embedded quotations and explore multiple layers of meaning. Do not try to cover every line — select the richest details and analyse them in depth. This is purely AO1 and AO2, so do not worry about context.',
            },
            {
              question:
                'Part 2: Compare how the poets present [shared theme] in both poems.',
              marks: 12,
              ao: 'AO2',
              skill: 'Compare the first unseen poem with a second unseen poem',
              time: '10–12 minutes',
              advice:
                'This question carries 12 marks and should take roughly 10–12 minutes. You do not need lengthy analysis — focus on two or three sharp comparative points. Compare methods (how the poets achieve their effects) rather than just content (what the poems are about). Use comparative language throughout: "Both poets use…", "While Poem 1 employs…, Poem 2 instead…". Keep quotations very short — single words or phrases.',
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
      descriptor: 'Convincing, critical analysis',
      ao1: 'Perceptive, detailed understanding. Conceptualised response with a critical style maintained throughout. Judicious use of precise references.',
      ao2: 'Perceptive, detailed analysis of language, form and structure. Convincing and critical exploration of effects. Sophisticated and accurate use of subject terminology.',
      ao3: 'Convincing, perceptive understanding of contextual factors. Context is seamlessly integrated into the argument.',
    },
    {
      level: 5,
      descriptor: 'Thoughtful, developed',
      ao1: 'Thoughtful, developed response to the text. Well-chosen references integrated into interpretations. Secure, sustained critical style.',
      ao2: 'Thoughtful, developed analysis of language, form and structure. Thorough exploration of effects. Accurate and effective use of subject terminology.',
      ao3: 'Thoughtful, developed understanding of contextual factors shown through detailed links between context and text.',
    },
    {
      level: 4,
      descriptor: 'Clear, explained',
      ao1: 'Clear understanding with appropriate references. Clearly explained points with relevant textual support.',
      ao2: 'Clear analysis of language, form and structure. Clear explanation of effects using relevant subject terminology.',
      ao3: 'Clear understanding of context with relevant links to the text.',
    },
    {
      level: 3,
      descriptor: 'Some understanding',
      ao1: 'Some understanding of the text. Some relevant references used to support points.',
      ao2: 'Some comment on language, form and structure. Some relevant use of subject terminology.',
      ao3: 'Some understanding of context with some links to the text.',
    },
    {
      level: 2,
      descriptor: 'Simple, limited',
      ao1: 'Simple, limited response. General references to the text with limited textual support.',
      ao2: 'Simple identification of language, form and structure. Limited use of subject terminology.',
      ao3: 'Simple awareness of context with limited connection to the text.',
    },
    {
      level: 1,
      descriptor: 'Basic',
      ao1: 'Basic, minimal response. Little reference to the text.',
      ao2: 'Basic identification of language, form and structure. Minimal or no subject terminology.',
      ao3: 'Basic, minimal awareness of context.',
    },
  ],

  // ─── Grade Boundaries ────────────────────────────────────────────────────────
  gradeBoundaries: [
    {
      year: '2023 Language',
      max: 160,
      grade9: 121,
      grade8: 111,
      grade7: 102,
      grade6: 91,
      grade5: 81,
      grade4: 71,
    },
    {
      year: '2024 Language',
      max: 160,
      grade9: 121,
      grade8: 111,
      grade7: 102,
      grade6: 92,
      grade5: 82,
      grade4: 73,
    },
    {
      year: '2025 Language',
      max: 160,
      grade9: 119,
      grade8: 109,
      grade7: 100,
      grade6: 91,
      grade5: 82,
      grade4: 73,
    },
    {
      year: '2023 Literature',
      max: 160,
      grade9: 135,
      grade8: 119,
      grade7: 104,
      grade6: 88,
      grade5: 72,
      grade4: 57,
    },
    {
      year: '2024 Literature',
      max: 160,
      grade9: 137,
      grade8: 121,
      grade7: 106,
      grade6: 90,
      grade5: 74,
      grade4: 58,
    },
    {
      year: '2025 Literature',
      max: 160,
      grade9: 136,
      grade8: 122,
      grade7: 108,
      grade6: 92,
      grade5: 77,
      grade4: 62,
    },
  ],

  // ─── Examiner Tips ───────────────────────────────────────────────────────────
  examinerTips: [
    {
      question: 'Paper 1, Q1 — Multiple Choice (4 marks)',
      tips: [
        'Read only within the specified line references — answers outside those lines will not be credited.',
        'No analysis or explanation is required. Simply select the four correct options.',
        'Each correct answer earns 1 mark. There is no penalty for incorrect selections beyond the four.',
        'Use this question to settle into the exam and begin absorbing the source text.',
      ],
    },
    {
      question: 'Paper 1, Q2 — Language Analysis (8 marks)',
      tips: [
        'Use the PETAL+ framework: Point, Evidence, Technique, Analysis, Link. Depth is rewarded over breadth.',
        'Two or three deeply developed analytical points will outscore six shallow ones.',
        'Name both the denotation (literal meaning) and connotation (associated meaning) of key words.',
        'Use evaluative verbs: "implies", "connotes", "evokes", "suggests", "underscores".',
        'Stay strictly within the specified line range — material from outside will not be credited.',
        'Do not simply identify techniques — explain the effect on the reader in precise terms.',
      ],
    },
    {
      question: 'Paper 1, Q3 — Structure Analysis (8 marks)',
      tips: [
        'Focus on text-level structural features: how the beginning, middle, and end function differently.',
        'Comment on shifts in perspective, focus, pace, or tone as the extract progresses.',
        'Address structural devices: flashback, foreshadowing, cyclical structure, in medias res, cliffhanger.',
        'Also analyse sentence-level structural choices: short sentences for impact, listing for accumulation, paragraph length for pacing.',
        'The 2026 format names a specific structural effect — make sure your analysis directly addresses that named effect throughout.',
      ],
    },
    {
      question: 'Paper 1, Q4 — Critical Evaluation (20 marks)',
      tips: [
        'This is the most discriminating question on the paper — it separates Grade 7+ responses from the rest.',
        'You must evaluate, not just describe. Engage with the statement and make a judgement about how successfully the writer achieves the stated effect.',
        'Partially agree: present evidence that supports the statement, then use a "however" turn to explore counter-evidence or alternative interpretations.',
        'Embed short quotations fluently within your own sentences — avoid long block quotations.',
        'A strong response has three well-developed evaluative paragraphs plus a brief, decisive conclusion.',
        'Use evaluative language throughout: "effectively", "compellingly", "less convincingly", "the writer succeeds in… because…".',
      ],
    },
    {
      question: 'Paper 1, Q5 — Creative Writing (40 marks)',
      tips: [
        'Spend 5–7 minutes planning. A brief plan dramatically improves structure and coherence.',
        'Open with a hook: a striking image, an unusual perspective, a sensory detail, or a line of dialogue.',
        'Vary sentence openings: adverbial ("Silently,…"), participial ("Running through…"), one-word ("Darkness.").',
        'Vary sentence lengths: short sentences for dramatic impact, longer sentences for descriptive passages.',
        'Use the full punctuation range: semicolons, colons, dashes, ellipses, parenthetical commas.',
        'End with circularity — echo your opening image, phrase, or motif to create a satisfying structure.',
        'If choosing the 2026 "opening of a narrative" option, focus on establishing atmosphere, character voice, and intrigue rather than trying to tell a complete story.',
        'AO6 (16 marks) rewards technical accuracy — proofread your work and correct errors.',
      ],
    },
    {
      question: 'Paper 2, Q1 — True/False (4 marks)',
      tips: [
        'Read carefully within the specified lines of Source A only.',
        'Select exactly the number of true statements requested — no more, no fewer.',
        'This is pure retrieval — no inference or analysis needed.',
        'Use the question as an opportunity to read Source A closely before tackling Q2 and Q3.',
      ],
    },
    {
      question: 'Paper 2, Q2 — Summary/Synthesis (8 marks)',
      tips: [
        'You must use details from BOTH sources — neglecting either source caps your mark at Level 2.',
        'Cross-reference the sources explicitly: "Both writers suggest…", "While Source A emphasises…, Source B instead…".',
        'Use brief embedded quotations from each source to support your synthesis.',
        'Aim for three to four well-developed comparative points rather than a long list of separate details.',
        'Keep your language concise and focused — this is a summary, not an analysis question.',
      ],
    },
    {
      question: 'Paper 2, Q3 — Language Analysis (12 marks)',
      tips: [
        'This question focuses on Source A only — do not discuss Source B here.',
        'Analyse language techniques in detail: name the device, quote the evidence, and explain the effect.',
        'Three well-developed analytical paragraphs with embedded quotations will comfortably reach Level 4+.',
        'Use precise subject terminology and explore connotations at word level.',
      ],
    },
    {
      question: 'Paper 2, Q4 — Compare Perspectives (16 marks)',
      tips: [
        'You must compare BOTH texts throughout your response. Discussing only one text means you cannot access Level 3 or above.',
        'Focus on perspectives (what the writers think and feel) and methods (how they convey those perspectives).',
        'Use comparative connectives: "whereas", "in contrast", "similarly", "conversely", "on the other hand".',
        'Aim for three or four comparative paragraphs, each addressing a different aspect of the shared topic.',
        'Consider how the different time periods (modern vs 19th century) shape the writers\' perspectives.',
      ],
    },
    {
      question: 'Literature General — Achieving Top Bands',
      tips: [
        '"Conceptualised" is the keyword that separates Grade 9 from Grade 7. It means threading a clear, overarching argument or interpretation through your entire essay.',
        'AO1 and AO2 together account for approximately 70% of all Literature marks — prioritise close textual analysis.',
        'Memorise 10–15 short, precise quotations for each set text. Single-word or short-phrase quotations embedded in your sentences are more effective than long block quotes.',
        'Context (AO3) should be woven into your analysis naturally, not bolted on as a separate paragraph.',
        'SPaG marks (AO4) in Literature are only available on Paper 1 — spell literary terms correctly and punctuate quotations accurately.',
      ],
    },
  ],

  // ─── Key Changes for 2026 ───────────────────────────────────────────────────
  keyChanges: [
    {
      year: '2026',
      change:
        'Paper 1 Q1: Multiple choice replaces the previous "list four things" format, making the opening question more accessible and efficient.',
    },
    {
      year: '2026',
      change:
        'Paper 1 Q3: The question now names a specific structural effect (e.g., "How does the writer structure the text to build tension?") instead of the vague "How has the writer structured the text to interest you as a reader?".',
    },
    {
      year: '2026',
      change:
        'Paper 1 Q4: The evaluation statement is now presented directly (e.g., "The writer successfully creates a sense of fear. To what extent do you agree?") rather than using the previous "A student said…" framing.',
    },
    {
      year: '2026',
      change:
        'Paper 1 Q5: Students now have the option to write just the opening of a narrative, rather than being required to produce a complete piece of creative writing.',
    },
  ],

  // ─── Unique Features ─────────────────────────────────────────────────────────
  uniqueFeatures: [
    'Most-entered GCSE English Language specification in England, taken by the largest number of candidates each year.',
    'Grade 4 in Language requires only approximately 45.6% (73/160), making the standard pass highly achievable with focused preparation.',
    'Grade 9 in Language requires only approximately 74.4% (119/160) — significantly lower than many students expect for the top grade.',
    'Literature Grade 4 requires only approximately 38.8% (62/160), one of the most accessible pass thresholds of any GCSE subject.',
    'The word "conceptualised" is the single most important descriptor in AQA\'s mark scheme — it is the quality that separates Grade 9 responses from Grade 7 responses.',
    'AO1 and AO2 together account for roughly 70% of all Literature marks, meaning close textual analysis is overwhelmingly the most important skill.',
    'Paper 1 Q4 (20 marks) is the most discriminating question across both Language papers — performance on this question correlates most strongly with final grade.',
    'AQA provides detailed specimen materials, past papers, and examiner reports freely on their website, making independent revision highly accessible.',
  ],
};
