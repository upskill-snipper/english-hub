// @ts-nocheck
import type { BoardExamGuide } from './types'

export const edexcelGuide: BoardExamGuide = {
  boardId: 'Edexcel',
  boardName: 'Pearson Edexcel',
  boardColor: '#7C3AED',

  overview: `<p>Edexcel (Pearson) is distinctive among GCSE English exam boards in running both a domestic GCSE - <strong>1EN0 (Language)</strong> and <strong>1ET0 (Literature)</strong> - and a widely taken <strong>International GCSE (4EA1)</strong>. The board's philosophy centres on <strong>"Reading as a Writer, Writing as a Reader"</strong>: the idea that close analytical reading and crafted writing are reciprocal skills that reinforce each other. This approach permeates the marking guides, which consistently reward students who demonstrate awareness of <em>how</em> and <em>why</em> writers make choices, not just <em>what</em> those choices are.</p>

<p>Key structural features set Edexcel apart from AQA and OCR. Language Paper 2 carries <strong>96 marks over 2 hours 5 minutes</strong>, making it one of the most demanding single papers at GCSE level. The reading section requires students to work across two non-fiction extracts - one 19th century and one modern - with synthesis, comparison, language analysis, and evaluation questions. The writing section uniquely demands <strong>two transactional writing tasks</strong> (one shorter, one longer), testing versatility across different forms such as letters, articles, speeches, and reviews. This dual-task format is exclusive to Edexcel and requires careful time management.</p>

<p>In Literature, Edexcel's Paper 1 combines Shakespeare with a post-1914 British play or novel. The Shakespeare question splits into <strong>two parts, the printed extract and then the rest of the play</strong>, each worth 20 marks, demanding both close reading and panoramic textual knowledge. Paper 2 pairs a 19th-century novel, in the same two-part form, with poetry - anthology comparison plus a comparison of two unseen poems - across 2 hours 15 minutes. The marking guides reward <strong>"judicious" quotation selection</strong> and <strong>sustained personal response</strong>, with "perceptive" and "assured" as the key descriptors for the top band.</p>

<p>For GCSE students, the poetry anthology has four collections of 15 poems - <em>Relationships</em>, <em>Conflict</em>, <em>Time and Place</em> and <em>Belonging</em> - and schools select one. Edexcel also applies an <strong>explicit SPaG grid for writing tasks</strong>, where spelling, punctuation, and grammar marks are clearly separated from content marks, making technical accuracy a visible and targetable component of the grade.</p>

<p>Strategically, students should note that Edexcel's grade boundaries tend to be moderately demanding: a Grade 9 typically requires around 80% of the total mark, while a Grade 4 sits at approximately 31%. The most efficient revision strategy focuses on AO2 (language analysis), which carries the heaviest weighting across both Language and Literature, and on practising the dual transactional writing tasks under timed conditions. Always plan before writing, select quotations judiciously rather than copiously, and sustain your personal response throughout rather than bolting on a conclusion.</p>`,

  specCodes: [
    { subject: 'English Language', code: '1EN0' },
    { subject: 'English Literature', code: '1ET0' },
    { subject: 'International GCSE', code: '4EA1' },
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
      weighting: '~30%',
    },
    {
      code: 'AO3',
      description:
        "Compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts.",
      weighting: '~10%',
    },
    {
      code: 'AO4',
      description:
        'Evaluate texts critically and support this with appropriate textual references.',
      weighting: '~10%',
    },
    {
      code: 'AO5',
      description:
        'Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts.',
      weighting: '~20%',
    },
    {
      code: 'AO6',
      description:
        'Candidates must use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
      weighting: '~10%',
    },
  ],

  // ─── Literature Assessment Objectives ────────────────────────────────────────
  // Weightings corrected 2 October 2026 to the specification's own table (1ET0,
  // Issue 2, PDF page 15): AO1 37%, AO2 42%, AO3 16%, AO4 5% - 59, 67, 26 and 8 of
  // 160 raw marks. They read ~15%, ~25%, ~20% and ~40%.
  literatureAOs: [
    {
      code: 'AO1',
      description:
        'Read, understand and respond to texts. Students should be able to maintain a critical style and develop an informed personal response; use textual references, including quotations, to support and illustrate interpretations.',
      weighting: '37%',
    },
    {
      code: 'AO2',
      description:
        'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
      weighting: '42%',
    },
    {
      code: 'AO3',
      description:
        'Show understanding of the relationships between texts and the contexts in which they were written.',
      weighting: '16%',
    },
    {
      code: 'AO4',
      description:
        'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
      weighting: '5%',
    },
  ],

  // ─── Language Papers ─────────────────────────────────────────────────────────
  languagePapers: [
    {
      title: 'Paper 1: Fiction and Imaginative Writing',
      code: '1EN0/01',
      time: '1 hour 45 minutes',
      marks: 64,
      weighting: '50%',
      textType:
        'One unseen modern fiction extract. Section A assesses reading through four questions (short answer, inference, language analysis, evaluation). Section B assesses imaginative writing from a choice of prompts.',
      sections: [
        {
          title: 'Section A: Reading',
          marks: 24,
          questions: [
            {
              question: 'Q1 - Short-answer retrieval from specified lines',
              marks: 1,
              ao: 'AO1',
              skill: 'Identify explicit information',
              time: '1-2 minutes',
              advice:
                'A single-mark question requiring a brief, precise answer drawn directly from the text. Read within the specified line references only. No analysis or explanation is needed - this is a warm-up question to settle you into the extract.',
            },
            {
              question: 'Q2 - Retrieve two pieces of information from a specified section',
              marks: 2,
              ao: 'AO1',
              skill: 'Inference and information retrieval',
              time: '2-3 minutes',
              advice:
                'Identify two distinct pieces of information. Keep your answers concise and either quote directly or closely paraphrase from the text. These are straightforward marks - do not overthink them.',
            },
            {
              question:
                'Q3 - Analyse how the writer uses language to create a specific effect in a specified section',
              marks: 6,
              ao: 'AO2',
              skill: 'Language analysis of a specified section',
              time: '8-10 minutes',
              advice:
                'Embed short quotations and analyse specific word choices, imagery, and rhetorical techniques. Always explain the <em>effect</em> on the reader rather than simply naming techniques. Two well-developed analytical points are sufficient. Use evaluative verbs: "implies", "connotes", "evokes", "suggests".',
            },
            {
              question: 'Q4 - Critically evaluate the text with reference to a given focus',
              marks: 15,
              ao: 'AO4',
              skill: 'Critical evaluation with textual references',
              time: '18-20 minutes',
              advice:
                'This is the highest-tariff reading question on this paper. You must <strong>evaluate</strong>, not merely describe. Develop a clear personal response supported by well-chosen quotations. Assess <em>how effectively</em> the writer achieves their purpose - go beyond description into judgement. Partially agree with the statement to show nuance: present supporting evidence, then explore counter-evidence or alternative readings. Three well-developed evaluative paragraphs plus a brief conclusion is the target.',
            },
          ],
        },
        {
          title: 'Section B: Imaginative Writing',
          marks: 40,
          questions: [
            {
              question:
                'Q5 - Imaginative writing from a choice of prompts (one prompt linked to the extract)',
              marks: 40,
              ao: 'AO5 (24 marks) + AO6 (16 marks)',
              skill: 'Creative/narrative writing - imaginative prose',
              time: '45 minutes (including 5-7 minutes planning)',
              advice:
                'Plan for 5-7 minutes before writing. Open with a hook - a striking image, a sensory detail, or a provocative line of dialogue. Vary sentence openings (adverbial, participial, one-word) and lengths (short for dramatic impact, longer for descriptive passages). Use the full punctuation range: semicolons, colons, dashes, ellipses. End with circularity - echo your opening image or motif. AO6 carries 16 marks for SPaG, so proofread carefully. Edexcel\'s "Reading as a Writer" philosophy means markers reward evidence that you have <em>crafted</em> your writing with conscious technique.',
            },
          ],
        },
      ],
    },
    {
      title: 'Paper 2: Non-Fiction and Transactional Writing',
      code: '1EN0/02',
      time: '2 hours 5 minutes',
      marks: 96,
      weighting: '50%',
      textType:
        'Two non-fiction extracts (one 19th century, one 20th/21st century) sharing a common theme. Section A: Reading across both sources. Section B: Two transactional writing tasks in different forms.',
      sections: [
        {
          title: 'Section A: Reading',
          marks: 56,
          questions: [
            {
              question: 'Q1 - Identify four true statements from a list of eight (Source A)',
              marks: 4,
              ao: 'AO1',
              skill: 'Identify explicit information (true/false)',
              time: '3-5 minutes',
              advice:
                'Read each statement carefully against the text. There are exactly four correct answers - if you think you have found more, re-check. This is a straightforward retrieval question and a reliable marks-grab. Use it to familiarise yourself with Source A.',
            },
            {
              question:
                'Q2 - Summarise and synthesise information from both texts on a given topic',
              marks: 8,
              ao: 'AO1',
              skill: 'Summary and synthesis from two sources',
              time: '8-10 minutes',
              advice:
                'You must synthesise from <strong>both</strong> texts - responses that neglect one source cannot reach the top band. Cross-reference the sources explicitly: "Both writers suggest…", "While Source A emphasises…, Source B instead…". Use brief embedded quotations and keep your language concise. Three to four well-developed comparative points are sufficient.',
            },
            {
              question:
                'Q3 - Analyse how language is used to create a specific effect in one specified text',
              marks: 12,
              ao: 'AO2',
              skill: 'Language analysis of a specified source',
              time: '12-15 minutes',
              advice:
                'Analyse language techniques in detail: name the device, quote the evidence, and explain the effect on the reader. Three well-developed analytical paragraphs with embedded quotations will comfortably reach the upper bands. Explore connotations at word level and use precise subject terminology throughout.',
            },
            {
              question:
                'Q4 - Evaluate and compare how the two writers convey their different perspectives',
              marks: 16,
              ao: 'AO3 + AO4',
              skill: 'Compare perspectives and evaluate methods across both sources',
              time: '18-20 minutes',
              advice:
                'You must compare <strong>both</strong> texts throughout your response - discussing only one text means you cannot access the upper bands. Focus on the writers\' perspectives (what they think/feel) and the methods they use to convey those perspectives. Use comparative connectives: "whereas", "in contrast", "similarly", "conversely". Consider how the different time periods shape the writers\' viewpoints. Aim for three or four comparative paragraphs.',
            },
          ],
        },
        {
          title: 'Section B: Transactional Writing',
          marks: 40,
          questions: [
            {
              question:
                'Q5 - Shorter transactional writing task (letter, article, speech, review, etc.)',
              marks: 16,
              ao: 'AO5 (10 marks) + AO6 (6 marks)',
              skill: 'Transactional writing - shorter form',
              time: '20-25 minutes',
              advice:
                'Match your register precisely to the specified form and audience. This is the shorter of two tasks, so be focused and purposeful. Open with impact, use rhetorical techniques (tricolon, anaphora, direct address) with control, and structure your paragraphs around clear topic sentences. Accuracy matters - AO6 is assessed separately on the SPaG grid.',
            },
            {
              question:
                'Q6 - Longer transactional writing task (letter, article, speech, review, etc.)',
              marks: 24,
              ao: 'AO5 (16 marks) + AO6 (8 marks)',
              skill: 'Transactional writing - longer form',
              time: '30-35 minutes',
              advice:
                'This longer task allows you to demonstrate sustained control of tone, style, and structural organisation. Develop your argument or viewpoint across multiple well-constructed paragraphs. Use a range of persuasive and rhetorical devices, but ensure your content drives the response rather than technique alone. End with a powerful concluding statement that circles back to your opening. Proofread carefully - the explicit SPaG grid means technical accuracy is a visible, targetable component of your mark.',
            },
          ],
        },
      ],
    },
  ],

  // ─── Literature Papers ───────────────────────────────────────────────────────
  //
  // Rewritten 2 October 2026 against Pearson's specification (1ET0, Issue 2, PDF
  // pages 24 and 26). Both papers were described wrongly:
  // - Paper 1's Shakespeare question was one 40-mark essay on AO1 to AO4. It is
  //   two 20-mark parts: (a) the extract, AO2; (b) elsewhere in the play, AO1 15
  //   and AO3 5.
  // - Paper 1's post-1914 essay listed AO2. It is AO1 16, AO3 16 and AO4 8.
  // - Paper 2's novel question was one 40-mark essay on AO1 to AO4. It is two
  //   20-mark parts: (a) the extract, AO2; (b) the novel as a whole, AO1.
  // - The anthology comparison was 30 marks on AO1 to AO3. It is 20 marks:
  //   AO2 15, AO3 5.
  // - "Section C: Unseen Poetry" (6 marks for one poem, then 4 to compare) does
  //   not exist. Section B Part 2 is one 20-mark comparison of two unseen
  //   poems: AO1 8, AO2 12.
  literaturePapers: [
    {
      title: 'Paper 1: Shakespeare and Post-1914 Literature',
      code: '1ET0/01',
      time: '1 hour 45 minutes',
      marks: 80,
      weighting: '50%',
      textType:
        'Section A: Shakespeare play - one two-part question (40 marks): (a) close analysis of a printed extract of about 30 lines, (b) how a theme from it is explored elsewhere in the play. Section B: Post-1914 British play or novel - one essay from a choice of two (40 marks), with no extract.',
      sections: [
        {
          title: 'Section A: Shakespeare',
          marks: 40,
          questions: [
            {
              question:
                'Part (a): explore how Shakespeare presents a theme, character or idea in a printed extract of about 30 lines.',
              marks: 20,
              ao: 'AO2',
              skill: 'Close analysis of the extract: language, form and structure',
              // 9 October 2026: both parts said 25 minutes. Pearson's 1ET0/01 question paper
              // advises about 55 minutes on Section A, divided equally between (a) and (b).
              time: 'About 27 minutes, half of the 55 for Section A',
              advice:
                "Read the extract twice and underline the key words in the question. Analyse Shakespeare's word-level choices, imagery, use of verse or prose, and dramatic devices, with short embedded quotations from the extract. Part (a) is marked for writer's methods alone, so keep the rest of the play for part (b).",
            },
            {
              question:
                'Part (b): explore how the theme from the extract is presented elsewhere in the play.',
              marks: 20,
              ao: 'AO1 + AO3',
              skill: 'An argument across the rest of the play, with context',
              time: 'About 27 minutes, the other half of the 55 for Section A',
              advice:
                "Range across three or four moments from elsewhere in the play, quoting from memory. AO1 (15 marks) rewards an informed personal response; AO3 (5 marks) rewards context that shapes your interpretation, so weave Jacobean ideas in where they explain the play rather than bolting them on. Select quotations <strong>judiciously</strong> - Edexcel's marking guide specifically rewards quality of selection over quantity.",
            },
          ],
        },
        {
          title: 'Section B: Post-1914 British Play or Novel',
          marks: 40,
          questions: [
            {
              question:
                'One essay from a choice of two on your studied post-1914 text. Each question opens with a short quotation from the text; no extract is printed.',
              marks: 40,
              ao: 'AO1 + AO3 + AO4',
              skill: 'Whole-text essay from memory on post-1914 prose or drama',
              time: '50 minutes, including 5 to proofread',
              // 9 October 2026: the last sentence said AO4 rewards "spelling, punctuation,
              // grammar and a range of vocabulary". Pearson's AO4 is a range of vocabulary and
              // sentence structures, with accurate spelling and punctuation (1ET0, Issue 2).
              advice:
                'No extract is provided, so you must have memorised quotations from across the text. Aim for 10-15 short, precise quotations committed to memory. Structure your essay thematically rather than chronologically. Each paragraph should make a clear point, support it with an embedded quotation, and link it to context: AO1 and AO3 are worth 16 marks each here. Edexcel rewards <strong>assured personal response</strong> - thread a clear, overarching argument through your entire essay rather than analysing quotations in isolation. AO4 (8 marks) rewards a range of vocabulary and sentence structures, with accurate spelling and punctuation, so leave time to proofread.',
            },
          ],
        },
      ],
    },
    {
      title: 'Paper 2: 19th-Century Novel and Poetry',
      code: '1ET0/02',
      time: '2 hours 15 minutes',
      marks: 80,
      weighting: '50%',
      textType:
        'Section A: 19th-century novel - one two-part question (40 marks): (a) a printed extract of about 400 words, (b) the novel as a whole. Section B: Part 1, the named anthology poem compared with one of your choice from the same collection (20 marks); Part 2, two unseen poems compared (20 marks). No SPaG marks on this paper.',
      sections: [
        {
          title: 'Section A: 19th-Century Novel',
          marks: 40,
          questions: [
            {
              question:
                'Part (a): explore how the writer presents a theme, character or idea in a printed extract of about 400 words.',
              marks: 20,
              ao: 'AO2',
              skill: 'Close language analysis of the extract',
              // 9 October 2026: the two parts said 30 minutes each and the unseen comparison 35.
              // Pearson's 1ET0/02 question paper advises about 55 minutes on Section A, divided
              // equally between (a) and (b), and about 45 on Section B Part 2.
              time: 'About 27 minutes, half of the 55 for Section A',
              advice:
                "Close-read the writer's language choices, sentence structures and narrative techniques in the extract, with short embedded quotations and analysis at word level. Part (a) is marked for writer's methods alone, so keep the rest of the novel for part (b).",
            },
            {
              question:
                'Part (b): an essay on the novel as a whole, on a related theme, character or idea.',
              marks: 20,
              ao: 'AO1',
              skill: 'An informed argument about the whole novel, from memory',
              time: 'About 27 minutes, the other half of the 55 for Section A',
              advice:
                'Select key moments from across the novel that develop the theme or character, and build a clear argument supported by references. Section A gives no marks for context in its own right: use Victorian society, class, gender or morality only where it sharpens your argument. Plan before you write and keep the argument clear from start to finish.',
            },
          ],
        },
        {
          title: 'Section B Part 1: Poetry Anthology',
          marks: 20,
          questions: [
            {
              question:
                'Compare a named poem from your studied collection, printed on the paper, with one other poem of your choice from the same collection',
              marks: 20,
              ao: 'AO2 + AO3',
              skill:
                'Poetry comparison - named poem (printed) with a poem of your choice from the same collection',
              time: '35 minutes',
              advice:
                "The exam names one poem and prints it on the paper - you must choose the second from your studied collection and write about it from memory. Choose your comparison poem quickly (within 2 minutes) based on the strongest thematic or methodological links. Structure comparatively throughout: do not write about one poem then the other. Each paragraph should address both poems using comparative connectives. Analyse language, form and structure in both poems (AO2, 15 marks). Context (AO3, 5 marks) should be integrated concisely - comment on how biographical or historical factors shape the poets' perspectives.",
            },
          ],
        },
        {
          title: 'Section B Part 2: Unseen Poetry',
          marks: 20,
          questions: [
            {
              question:
                'Compare how the poets present a shared theme in two unseen contemporary poems',
              marks: 20,
              ao: 'AO1 + AO2',
              skill: 'Compare two unseen poems on a shared theme',
              time: 'About 45 minutes',
              advice:
                'Read both poems at least twice before writing, noting each poem\'s subject, tone and shifts in mood. Then compare methods (how the poets achieve their effects) rather than just content: imagery, diction, sound, form, enjambment and stanza breaks, with short embedded quotations. Use comparative language: "Both poets use…", "While Poem 1 employs…, Poem 2 instead…". AO2 is worth 12 of the 20 marks and AO1 8. Do not try to cover every line - select the richest details and analyse them in depth.',
            },
          ],
        },
      ],
    },
  ],

  // ─── Mark Bands ──────────────────────────────────────────────────────────────
  // 9 October 2026: this had six levels, topped by a Level 6 "Convincing, critical
  // analysis". Pearson's Literature grids have five, and no Level 6 (its 1ET0/01 mark
  // scheme, June 2024). These are the five for a 20-mark question, running 1-4, 5-8, 9-12,
  // 13-16 and 17-20: on Paper 1, part (a) is marked on them for AO2 alone and part (b) for
  // AO1 and AO3 together, so each column applies where its objective is assessed. The
  // post-1914 essay has its own grids: AO1 and AO3 share one of 32 marks (1-6, 7-12, 13-19,
  // 20-26, 27-32), AO4 has one of 8 (1-2, 3-5, 6-8), and there is no AO2. The type has no
  // marks field, so each range is in the descriptor. The wording is this guide's own
  // paraphrase, not Pearson's.
  markBands: [
    {
      level: 5,
      descriptor: 'Assured and cohesive (17-20 marks)',
      ao1: 'Assured, critical personal response, sustained throughout, with discerning references.',
      ao2: 'Cohesive evaluation of how language, form and structure work together to create meaning, with precise, integrated terminology.',
      ao3: 'Perceptive understanding of context, integrated so that it sharpens the interpretation.',
    },
    {
      level: 4,
      descriptor: 'Thorough and sustained (13-16 marks)',
      ao1: 'Thorough, sustained personal response with well-chosen references.',
      ao2: 'Thorough exploration of language, form and structure and their effects, with apt terminology.',
      ao3: 'Detailed understanding of context, clearly linked to the text.',
    },
    {
      level: 3,
      descriptor: 'Relevant and supported (9-12 marks)',
      ao1: 'Relevant personal response, supported by appropriate references.',
      ao2: 'Relevant examination of language, form and structure, with mostly appropriate terminology.',
      ao3: 'Relevant understanding of context, linked to the text.',
    },
    {
      level: 2,
      descriptor: 'Some response, often descriptive (5-8 marks)',
      ao1: 'Some personal response, often narrative, with some references.',
      ao2: 'Some comment on language, form and structure, mostly descriptive, with some terminology.',
      ao3: 'Some awareness of context, not always linked to the text.',
    },
    {
      level: 1,
      descriptor: 'Simple and limited (1-4 marks)',
      ao1: 'Simple response with little personal engagement and few references.',
      ao2: 'Little examination of language, form and structure, and little terminology.',
      ao3: 'Little awareness of context.',
    },
  ],

  // ─── Grade Boundaries ────────────────────────────────────────────────────────
  gradeBoundaries: [
    {
      year: '2023 Combined (Language + Literature)',
      max: 160,
      grade9: 126,
      grade8: 113,
      grade7: 100,
      grade6: 82,
      grade5: 65,
      grade4: 48,
    },
    {
      year: '2024 Combined (Language + Literature)',
      max: 160,
      grade9: 128,
      grade8: 115,
      grade7: 102,
      grade6: 84,
      grade5: 67,
      grade4: 50,
    },
  ],

  // ─── Marker Tips ───────────────────────────────────────────────────────────
  examinerTips: [
    {
      question: 'Language Paper 1, Q1-Q2 - Short-Answer Retrieval (1-2 marks each)',
      tips: [
        'Read only within the specified line references - answers outside those lines will not be credited.',
        'No analysis or explanation is required. Simply identify the information requested.',
        'Keep answers brief and precise - these are warm-up questions designed to settle you into the extract.',
        'Use these questions to begin absorbing the fiction extract before tackling the higher-tariff questions.',
      ],
    },
    {
      question: 'Language Paper 1, Q3 - Language Analysis (6 marks)',
      tips: [
        'Embed short quotations and analyse specific word choices, imagery, and rhetorical techniques.',
        'Always explain the <em>effect</em> on the reader - do not simply name techniques without exploring what they achieve.',
        'Two well-developed analytical points will outscore four or five shallow ones.',
        'Use evaluative verbs: "implies", "connotes", "evokes", "suggests", "underscores".',
        'Stay strictly within the specified section - material from outside will not be credited.',
      ],
    },
    {
      question: 'Language Paper 1, Q4 - Critical Evaluation (15 marks)',
      tips: [
        'This is the highest-tariff reading question on Paper 1 - it separates the upper bands from the rest.',
        'You must <strong>evaluate</strong>, not merely describe. Assess how effectively the writer achieves the stated focus.',
        'Show nuance by partially agreeing: present supporting evidence, then explore counter-evidence or alternative readings.',
        'Embed short quotations fluently within your sentences - avoid long block quotations.',
        'Use evaluative language throughout: "effectively", "compellingly", "the writer succeeds in… because…".',
        'A strong response has three well-developed evaluative paragraphs plus a brief, decisive conclusion.',
      ],
    },
    {
      question: 'Language Paper 1, Q5 - Imaginative Writing (40 marks)',
      tips: [
        'Spend 5-7 minutes planning. Edexcel\'s "Reading as a Writer" philosophy means markers reward evidence of conscious craft.',
        'Open with a hook: a striking image, an unusual perspective, a sensory detail, or a line of dialogue.',
        'Vary sentence openings (adverbial, participial, one-word) and lengths (short for impact, long for description).',
        'Use the full punctuation range: semicolons, colons, dashes, ellipses, parenthetical commas.',
        'End with circularity - echo your opening image, phrase, or motif to create a satisfying structure.',
        "AO6 (16 marks) is assessed on Edexcel's explicit SPaG grid - proofread your work and correct errors.",
      ],
    },
    {
      question: 'Language Paper 2, Q2 - Synthesis (8 marks)',
      tips: [
        'You must use details from <strong>both</strong> sources - neglecting either source caps your mark significantly.',
        'Cross-reference the sources explicitly: "Both writers suggest…", "While Source A emphasises…, Source B instead…".',
        'Use brief embedded quotations from each source to support your synthesis.',
        'Three to four well-developed comparative points are sufficient - keep your language concise.',
      ],
    },
    {
      question: 'Language Paper 2, Q5-Q6 - Dual Transactional Writing (16 + 24 marks)',
      tips: [
        'Edexcel uniquely requires <strong>two</strong> writing tasks on Paper 2 - manage your time carefully between them.',
        "Match your register precisely to each task's specified form, audience, and purpose.",
        'The shorter task (Q5, ~16 marks) should be focused and purposeful - do not over-elaborate.',
        'The longer task (Q6, ~24 marks) allows you to demonstrate sustained control of argument and rhetoric.',
        'Use rhetorical techniques (tricolon, anaphora, direct address, counter-argument) with confident control.',
        'The explicit SPaG grid means technical accuracy is a visible component - proofread both tasks.',
      ],
    },
    {
      question: 'Literature Paper 1 - Shakespeare (40 marks)',
      tips: [
        // 2 October 2026: these tips split one essay 40/60 between extract and play and promised
        // 4 SPaG marks. The question is two parts of 20, and the Shakespeare question has no SPaG.
        'The extract is printed for part (a); part (b) is about the rest of the play, from memory. Answer each part as it is asked - they are marked separately.',
        "Analyse Shakespeare's word-level choices: imagery, verse form, rhetorical devices, dramatic irony, use of prose vs. verse.",
        'Select quotations <strong>judiciously</strong> - Edexcel specifically rewards quality of selection over quantity.',
        'Weave context (AO3, in part (b)) naturally into your argument rather than bolting it on as a separate paragraph.',
        'There are no SPaG marks on the Shakespeare question - AO4 is marked only on the post-1914 essay - but spell literary terms correctly and punctuate quotations accurately.',
      ],
    },
    {
      question: 'Literature Paper 2, Section B Part 1 - Poetry Anthology (20 marks)',
      tips: [
        'Know every poem in your collection - the exam names one, and you must choose the comparison from memory.',
        'Choose your comparison poem quickly (within 2 minutes) based on the strongest thematic and methodological links.',
        'Structure comparatively throughout - do not write about one poem then the other.',
        'Analyse language, form, and structure in both poems. Integrate context concisely.',
        'A strong response offers genuine points of both similarity and contrast between the two poems.',
      ],
    },
    {
      question: 'Literature General - Achieving the Top Bands',
      tips: [
        // 9 October 2026: this said "Level 6". Pearson's Literature grids have five levels, the
        // top one Level 5 (17-20 on a 20-mark question, 27-32 on the post-1914 essay's AO1 and
        // AO3), in its June 2024 mark schemes for both papers.
        '"Perceptive" and "assured" are the key descriptors for Level 5, the top level. This means threading a clear, overarching argument through your entire essay.',
        '"Judicious" quotation selection is specifically rewarded - choose the most revealing quotations rather than the longest.',
        'Sustained personal response means maintaining your critical voice throughout, not just in the introduction and conclusion.',
        'Context should illuminate meaning, not demonstrate knowledge for its own sake. Ask: "How does this context change how we read the text?"',
        'AO4 (SPaG) is 5% of Literature: 8 marks, all on the Paper 1 post-1914 essay. Accurate written expression still helps every answer communicate.',
      ],
    },
  ],

  // ─── Key Changes for 2026 ───────────────────────────────────────────────────
  keyChanges: [
    {
      year: '2026',
      change:
        'Enhanced SPaG weighting: AO6 (spelling, punctuation, and grammar) carries increased emphasis across Language papers, with the explicit SPaG grid refined to reward a wider range of punctuation and sentence structures.',
    },
    {
      // 2 October 2026: claimed a 2026 revision "across all three collections". The current
      // anthology is Issue 4, dated 9 January 2023, with four collections; no 2026 revision
      // was found.
      year: '2023',
      change:
        'Four anthology collections: Issue 4 of the poetry anthology (January 2023) has four collections of 15 poems - Relationships, Conflict, Time and Place, and Belonging. Schools choose one.',
    },
    {
      year: '2026',
      change:
        'Clarified marking guide descriptors: Edexcel has refined the wording of mark band descriptors across both Language and Literature to reduce ambiguity, with clearer differentiation between adjacent levels - particularly between Levels 4 and 5.',
    },
  ],

  // ─── Set Texts ─────────────────────────────────────────────────────────────
  setTexts: [
    {
      title: 'An Inspector Calls',
      author: 'J.B. Priestley',
      themes: [
        'Social responsibility',
        'Class',
        'Gender',
        'Generational conflict',
        'Socialism vs. capitalism',
      ],
      context:
        'Written in 1945 but set in 1912, allowing Priestley to use dramatic irony to critique Edwardian complacency. Priestley was a committed socialist who used the play to advocate for collective responsibility in the post-war welfare state.',
      characters: [
        {
          name: 'Inspector Goole',
          description:
            'Mysterious, authoritative figure who represents conscience and social justice. His name echoes "ghoul", suggesting a supernatural or allegorical role.',
        },
        {
          name: 'Mr Birling',
          description:
            'Prosperous industrialist whose confident predictions about the Titanic and war are dramatically ironic. Represents capitalist self-interest and wilful ignorance.',
        },
        {
          name: 'Sheila Birling',
          description:
            'Begins as a frivolous young woman but undergoes the most significant moral transformation. Represents hope for generational change.',
        },
        {
          name: 'Eric Birling',
          description:
            'The youngest Birling, whose alcoholism and exploitation of Eva Smith reveal the darker side of privilege. Ultimately accepts responsibility.',
        },
        {
          name: 'Mrs Birling',
          description:
            'Cold, class-conscious matriarch who refuses to accept responsibility. Her charity work is exposed as hypocritical.',
        },
        {
          name: 'Gerald Croft',
          description:
            'Upper-class fiancé of Sheila whose affair with Daisy Renton reveals both genuine compassion and ultimate complicity in the class system.',
        },
      ],
      quotations: [
        {
          quote:
            "We don't live alone. We are members of one body. We are responsible for each other.",
          analysis:
            "The Inspector's final speech encapsulates Priestley's socialist message. \"Members of one body\" echoes Christian and collectivist imagery, asserting interdependence against Birling's individualism.",
        },
        {
          quote:
            'If men will not learn that lesson, then they will be taught it in fire and blood and anguish.',
          analysis:
            'A prophetic warning that gains power from dramatic irony - the audience knows two world wars followed 1912. "Fire and blood and anguish" uses a tricolon of increasingly visceral nouns.',
        },
        {
          quote: "But these girls aren't cheap labour - they're people.",
          analysis:
            "Sheila's rebuke to her father marks her moral awakening. The dash creates a rhetorical pivot, contrasting Birling's economic view of workers with their humanity.",
        },
      ],
      examStrategy:
        "For Edexcel, the post-1914 question carries 40 marks: one essay from a choice of two, opened by a short quotation, with no extract. It is marked for your argument (AO1), context (AO3) and accuracy (AO4), not for methods on their own, so use Priestley's dramatic methods - staging, dramatic irony, the well-made play structure, and the Inspector as a dramatic device - as evidence for your argument. Memorise quotations from across the play and structure your essay thematically. Context should focus on the 1912/1945 dual setting and Priestley's political purpose.",
    },
    {
      title: 'A Christmas Carol',
      author: 'Charles Dickens',
      themes: [
        'Redemption',
        'Social injustice',
        'Christmas and generosity',
        'Isolation vs. community',
        'Memory and regret',
      ],
      context:
        "Published in 1843 during a period of extreme poverty and inequality in Victorian England. Dickens was deeply influenced by visits to Ragged Schools and Manchester's industrial slums. The novella was a deliberate attempt to change public attitudes toward the poor.",
      characters: [
        {
          name: 'Ebenezer Scrooge',
          description:
            'A miserly, cold-hearted businessman who undergoes a profound transformation through supernatural visitation. His journey from isolation to generosity is the moral centre of the text.',
        },
        {
          name: 'Bob Cratchit',
          description:
            "Scrooge's underpaid clerk who embodies cheerful resilience despite poverty. His family - especially Tiny Tim - personalise the human cost of Scrooge's greed.",
        },
        {
          name: 'Tiny Tim',
          description:
            "Bob's disabled youngest son whose potential death serves as the emotional catalyst for Scrooge's transformation. Represents the vulnerable poor.",
        },
        {
          name: 'Jacob Marley',
          description:
            'Scrooge\'s dead business partner, bound by chains he "forged in life" through selfishness. His ghost serves as a warning of the consequences of greed.',
        },
        {
          name: 'The Ghost of Christmas Present',
          description:
            'A jovial, abundant spirit who reveals both celebration and suffering. Conceals the allegorical children Ignorance and Want beneath his robes.',
        },
      ],
      quotations: [
        {
          quote: 'Are there no prisons? ... And the Union workhouses?',
          analysis:
            "Scrooge's callous rhetorical questions echo the real arguments of Malthusian political economists. Dickens uses Scrooge to satirise the dehumanising attitude of the wealthy toward poverty.",
        },
        {
          quote: 'I wear the chain I forged in life... I made it link by link, and yard by yard.',
          analysis:
            'Marley\'s metaphor of the chain makes moral consequences tangible and physical. The repetition of "link by link, and yard by yard" creates a slow, relentless accumulation that mirrors a lifetime of selfish choices.',
        },
        {
          quote: 'Scrooge was better than his word. He did it all, and infinitely more.',
          analysis:
            'The narrator\'s summary of Scrooge\'s transformation uses the hyperbole "infinitely more" to emphasise the completeness of his redemption. The plain, short first sentence gives it the finality of a verdict.',
        },
      ],
      examStrategy:
        "For Edexcel's 19th-century novel question (Paper 2, Section A, 40 marks in two parts of 20), part (a) prints an extract for close language analysis (AO2) of Dickens's methods - his use of listing, personification, pathetic fallacy, and contrast. Part (b) is an essay on the novel as a whole (AO1): memorise quotations from each Stave to support your argument. Neither part marks context on its own, but Victorian attitudes to poverty, the Poor Law and Dickens's social purpose can sharpen your points.",
    },
    {
      title: 'Romeo and Juliet',
      author: 'William Shakespeare',
      themes: [
        'Love vs. hate',
        'Fate and free will',
        'Youth vs. age',
        'Honour and violence',
        'Light and dark imagery',
      ],
      context:
        "Written c.1594-96, drawing on Arthur Brooke's narrative poem. Set in Verona, the play reflects Elizabethan concerns about family honour, patriarchal authority, and the disruptive power of passion. The Prologue's revelation of the lovers' fate creates dramatic irony throughout.",
      characters: [
        {
          name: 'Romeo',
          description:
            'Impulsive young Montague who transitions from Petrarchan infatuation with Rosaline to genuine passion for Juliet. His impetuousness drives the tragedy.',
        },
        {
          name: 'Juliet',
          description:
            'Begins as an obedient daughter but shows remarkable courage and intelligence. Her language matures from conventional imagery to bold, assertive rhetoric.',
        },
        {
          name: 'Mercutio',
          description:
            "Romeo's witty, cynical friend whose Queen Mab speech reveals imagination beneath his bravado. His death - \"a plague o' both your houses\" - marks the play's tonal shift from comedy to tragedy.",
        },
        {
          name: 'Tybalt',
          description:
            'Juliet\'s fiery cousin, the "Prince of Cats", whose aggression and rigid adherence to honour catalyse the play\'s violence.',
        },
        {
          name: 'Friar Lawrence',
          description:
            'Well-intentioned but ultimately ineffective mediator whose secret schemes contribute to the tragic outcome. Represents the limitations of adult authority.',
        },
      ],
      quotations: [
        {
          quote:
            'But soft, what light through yonder window breaks? It is the east, and Juliet is the sun.',
          analysis:
            'Romeo\'s extended metaphor elevates Juliet to a cosmic force. "Soft" creates a hushed, reverential tone, while the sun imagery contrasts with the darkness of the feud and foreshadows the dawn that will repeatedly force the lovers apart.',
        },
        {
          quote:
            'My only love sprung from my only hate! Too early seen unknown, and known too late!',
          analysis:
            'Juliet\'s rhyming couplet creates antithesis between "love" and "hate", "early" and "late", "unknown" and "known". The exclamatory tone conveys shock, while the paradox encapsulates the central conflict of the play.',
        },
        {
          quote: "A pair of star-cross'd lovers take their life.",
          analysis:
            'The Prologue\'s use of "star-cross\'d" introduces the motif of fate and celestial imagery that runs throughout. "Take their life" carries the double meaning of living their lives and ending them, establishing tragic inevitability.',
        },
      ],
      examStrategy:
        "For Edexcel's Shakespeare question (Paper 1, Section A, 40 marks in two parts of 20), part (a) prints an extract for close analysis - word-level choices, imagery, verse form, dramatic techniques. Part (b) explores the same theme elsewhere in the play: weave context naturally into that argument. Select quotations judiciously: a few well-chosen, deeply analysed quotations will outscore many superficial ones.",
    },
    {
      title: 'Macbeth',
      author: 'William Shakespeare',
      themes: [
        'Ambition',
        'Guilt and conscience',
        'Supernatural',
        'Masculinity and gender',
        'Tyranny and kingship',
        'Appearance vs. reality',
      ],
      context:
        'Written c.1606 for James I, who was fascinated by witchcraft and claimed descent from Banquo. The play reflects Jacobean anxieties about regicide (following the Gunpowder Plot of 1605), the Divine Right of Kings, and the moral consequences of unchecked ambition.',
      characters: [
        {
          name: 'Macbeth',
          description:
            'A valiant warrior whose "vaulting ambition" leads him from loyalty to regicide, tyranny, and destruction. His soliloquies reveal a deeply conflicted conscience that makes him tragic rather than villainous.',
        },
        {
          name: 'Lady Macbeth',
          description:
            'Ambitious, manipulative, and rhetorically powerful in the early acts, she subverts gender expectations by calling on dark spirits to "unsex" her. Her descent into guilt-ridden madness mirrors and inverts Macbeth\'s arc.',
        },
        {
          name: 'The Witches',
          description:
            'Ambiguous figures who speak in trochaic tetrameter and paradox ("fair is foul"). They catalyse the action but leave open the question of whether they cause Macbeth\'s choices or merely predict them.',
        },
        {
          name: 'Banquo',
          description:
            "Macbeth's loyal friend and foil, who resists the Witches' temptation. His ghost symbolises Macbeth's guilt and the impossibility of escaping consequence.",
        },
        {
          name: 'Macduff',
          description:
            'The moral avenger who ultimately kills Macbeth. His grief at his family\'s murder ("He has no children") is one of the play\'s most powerful emotional moments.',
        },
      ],
      quotations: [
        {
          quote: "Look like the innocent flower, But be the serpent under 't.",
          analysis:
            'Lady Macbeth\'s imperative uses the biblical serpent image to align deception with the Fall. The contrast between "flower" and "serpent" encapsulates the play\'s theme of appearance vs. reality. The enjambment across the line break mirrors the hidden danger.',
        },
        {
          quote: 'Is this a dagger which I see before me, The handle toward my hand?',
          analysis:
            'Macbeth\'s soliloquy uses a rhetorical question that reveals his psychological torment. The hallucinated dagger - "handle toward my hand" - with its alliterative pull suggests the murder is both invitation and compulsion.',
        },
        {
          quote: 'Out, damned spot! Out, I say!',
          analysis:
            'Lady Macbeth\'s sleepwalking exclamation reduces her earlier commanding rhetoric to desperate, fragmented utterance. The irremovable "spot" of blood symbolises guilt that cannot be washed away - a physical manifestation of moral stain.',
        },
      ],
      examStrategy:
        'For Edexcel\'s Shakespeare question, part (a) is close language analysis of the printed extract and part (b) explores the theme elsewhere in the play. Macbeth is rich in imagery (blood, darkness, clothing, disease) - track these patterns across the text. Context should centre on Jacobean attitudes to regicide, the supernatural, and gender roles, but always link context to the effect on the audience rather than presenting it as standalone knowledge. The marking guide rewards "judicious" quotation - select the most revealing phrases and analyse them in depth.',
    },
  ],

  // ─── Poetry (Anthology selections) ─────────────────────────────────────────
  // 2 October 2026: checked against the Pearson Edexcel anthology (Issue 4). This list had
  // Hour and To His Coy Mistress, which are in none of its four collections, and Carol
  // Ann Duffy's War Photographer, where Edexcel sets Carole Satyamurti's poem of that
  // name. Several topComparison entries named AQA poems (The Farmer's Bride, Bayonet
  // Charge), poems Edexcel does not set (Ghazal, Futility) or a poem from the other
  // collection, though the exam pairs poems from one collection. Poppies was misquoted.
  poems: [
    {
      title: 'Cousin Kate',
      poet: 'Christina Rossetti',
      era: 'Victorian',
      themes: ['Betrayal', 'Jealousy', 'Class', 'Motherhood'],
      topComparison: 'The Class Game',
      formAnalysis:
        'Ballad form with a regular ABAB rhyme scheme, giving the poem a song-like, folk quality that contrasts with its bitter content.',
      keyQuotation: '"Why did a great lord find me out / And praise my flaxen hair?"',
    },
    {
      title: 'Sonnet 43',
      poet: 'Elizabeth Barrett Browning',
      era: 'Victorian',
      themes: ['Devotion', 'Spiritual love', 'Transcendence', 'Faith'],
      topComparison: 'Valentine',
      formAnalysis:
        'Petrarchan sonnet form with a volta at line 9. Anaphora of "I love thee" creates a litany-like accumulation that builds emotional intensity.',
      keyQuotation: '"I love thee to the depth and breadth and height / My soul can reach"',
    },
    {
      title: 'The Manhunt',
      poet: 'Simon Armitage',
      era: 'Contemporary',
      themes: ['War trauma', 'Love', 'Physical and emotional scars', 'Intimacy'],
      topComparison: 'Nettles',
      formAnalysis:
        "Series of couplets tracing the body from surface to depth, mirroring the wife's gradual discovery of her husband's hidden injuries.",
      // Restored 2 October 2026 from the Pearson Edexcel anthology (Issue 4, p. 20).
      keyQuotation: '"the frozen river which ran through his face"',
    },
    {
      title: 'Valentine',
      poet: 'Carol Ann Duffy',
      era: 'Contemporary',
      themes: ['Honesty in love', 'Rejecting cliché', 'Love as painful', 'Possessiveness'],
      topComparison: 'Sonnet 43',
      formAnalysis:
        'Free verse in stanzas of uneven length, several of them a single line or a single word. The extended metaphor of the onion runs through the poem, and the short, abrupt lines read like the speaker handing over the gift.',
      keyQuotation: '"I give you an onion."',
    },
    {
      title: 'My Last Duchess',
      poet: 'Robert Browning',
      era: 'Victorian',
      themes: ['Jealousy', 'Power', 'Possession', 'Art and control'],
      topComparison: 'La Belle Dame sans Merci',
      formAnalysis:
        "Dramatic monologue in heroic couplets with heavy enjambment, reflecting the Duke's controlling nature masked by conversational fluency.",
      keyQuotation: '"I gave commands; / Then all smiles stopped together"',
    },
    {
      title: 'War Photographer',
      poet: 'Carole Satyamurti',
      era: 'Contemporary',
      themes: ['Representing war', 'Suffering', 'Truth and the image', 'Indifference'],
      topComparison: 'What Were They Like?',
      formAnalysis:
        'Free verse in stanzas of uneven length, in the voice of a photographer. The poem moves from the comfortable frames of peacetime to a child fleeing a bomb, and its ending questions whether any frame can contain the horror it shows.',
      keyQuotation: '"But hell, like heaven, is untidy"',
    },
    {
      title: 'Poppies',
      poet: 'Jane Weir',
      era: 'Contemporary',
      themes: ['Loss', 'Motherhood', 'Memory', 'Grief'],
      topComparison: 'Catrin',
      formAnalysis:
        'Free verse with domestic imagery woven through military references. No regular rhyme - reflecting the disorientation of grief.',
      keyQuotation: '"leaned against it like a wishbone"',
    },
    {
      title: 'Exposure',
      poet: 'Wilfred Owen',
      era: 'WWI',
      themes: ['Suffering', 'Futility', 'Nature as enemy', 'Inaction'],
      topComparison: 'The Charge of the Light Brigade',
      formAnalysis:
        "Eight stanzas of five lines each, with a truncated final line. Pararhyme creates an unsettling, unresolved sound that mirrors the soldiers' discomfort.",
      keyQuotation: '"But nothing happens"',
    },
    {
      title: 'The Charge of the Light Brigade',
      poet: 'Alfred Lord Tennyson',
      era: 'Victorian',
      themes: ['Duty', 'Heroism', 'Military blunders', 'Honour'],
      topComparison: 'Exposure',
      formAnalysis:
        'Predominantly anapaestic dimeter (da-da-DUM da-da-DUM) with a dactylic refrain ("Rode the six hundred") - the galloping rhythm imitates horses charging. End-stopped lines, anaphora and repetition create relentless, driving momentum across six irregular stanzas.',
      // 2 October 2026: the Pearson Edexcel anthology prints "Their's"; this had AQA's "Theirs".
      keyQuotation: '"Their\'s not to reason why, / Their\'s but to do and die"',
    },
    {
      title: 'Neutral Tones',
      poet: 'Thomas Hardy',
      era: 'Victorian',
      themes: ['The end of love', 'Bitterness', 'Memory', 'Nature and emotion'],
      topComparison: 'A Complaint',
      formAnalysis:
        'Four quatrains rhyming ABBA, a closed pattern that matches a speaker trapped in a memory. The poem is cyclical, beginning and ending at the pond.',
      keyQuotation:
        '"The smile on your mouth was the deadest thing / Alive enough to have strength to die"',
    },
  ],

  // ─── Unique Features ─────────────────────────────────────────────────────────
  uniqueFeatures: [
    '"Reading as a Writer, Writing as a Reader" philosophy: Edexcel\'s distinctive approach treats close analytical reading and crafted writing as reciprocal skills, rewarding students who demonstrate conscious awareness of writerly technique in both their reading responses and their own compositions.',
    '45-poem IGCSE anthology: The International GCSE (4EA1) features one of the most extensive poetry anthologies at GCSE level, with 45 poems divided across 6 thematic clusters, demanding extraordinary breadth of revision.',
    'Dual transactional writing tasks: Language Paper 2 uniquely requires two separate writing tasks (one shorter at ~16 marks, one longer at ~24 marks), testing versatility across different forms and demanding careful time management.',
    'Explicit SPaG grid for writing: Unlike boards where SPaG marks are embedded within content descriptors, Edexcel uses a separate, visible SPaG assessment grid, making technical accuracy a clearly targetable component of the grade.',
    'Paper 2 carries 96 marks over 2 hours 5 minutes: One of the most demanding single papers at GCSE level, requiring stamina and time management across reading and writing sections.',
    'Poetry anthology divided into four collections (Relationships, Conflict, Time and Place, Belonging): Schools choose one collection, and students must know every poem within it for the comparison question.',
    '"Judicious" quotation is specifically rewarded in the marking guide: Edexcel\'s top-band descriptors emphasise quality of textual selection over quantity, rewarding students who choose the most revealing quotations rather than the most copious.',
    'Both domestic GCSE and International GCSE available: Edexcel is unique in offering both 1EN0/1ET0 (UK) and 4EA1 (international) pathways, giving schools worldwide access to Pearson qualifications.',
  ],
}
