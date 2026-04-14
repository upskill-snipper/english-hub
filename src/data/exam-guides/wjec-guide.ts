// @ts-nocheck
// ─── WJEC Eduqas Exam Guide ─────────────────────────────────────────────────

import type { BoardExamGuide } from './types';

export const wjecGuide: BoardExamGuide = {
  boardId: 'WJEC',
  boardName: 'WJEC Eduqas',
  boardColor: '#DC2626',

  overview: `<p>WJEC Eduqas is the England-facing specification from WJEC, the Welsh exam board, and it brings several distinctive features that set it apart from AQA, Edexcel, and OCR. The Language qualification (C700QS) is built around two components weighted 40%/60%, while the Literature qualification (C720QS) mirrors this split. What makes Eduqas genuinely unique among all GCSE English boards is its <strong>proofreading and editing task</strong> in Language Component 1 — no other board assesses this skill in a formal exam context. Students must identify and correct errors in spelling, punctuation, and grammar within a given passage, rewarding precise editing skills alongside analytical ability.</p>

<p>The Literature specification organises its poetry anthology into <strong>three thematic clusters of 18 poems</strong>, a structure that encourages students to think comparatively within and across clusters rather than treating each poem in isolation. This "three-cluster" approach is unique to Eduqas and shapes how students prepare for the poetry comparison question: they must select a poem of their own choice from the same cluster as the named poem, making strategic poem selection a key exam skill. The board also places significant emphasis on <strong>oracy</strong>, with continuous assessment of spoken language skills feeding into the overall qualification profile.</p>

<p>Eduqas marking guides are widely regarded as among the clearest and most structured of any board, with six precisely defined levels and transparent descriptors that make self-assessment and targeted improvement straightforward. The top band rewards "sophisticated, assured analysis" with "perceptive, conceptualised" responses — students who thread an overarching interpretation through their entire answer rather than analysing quotations in isolation. Grade boundaries have remained relatively stable, with a Grade 4 requiring approximately 29% and a Grade 9 requiring around 76% across both qualifications combined. Strategic preparation should focus on mastering the proofreading component (free marks that many students leave on the table), developing confident comparative skills for the poetry anthology, and practising the two distinct writing modes required in Component 2.</p>`,

  specCodes: [
    { subject: 'English Language', code: 'C700QS' },
    { subject: 'English Literature', code: 'C720QS' },
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
        'Compare writers\' ideas and perspectives, as well as how these are conveyed, across two or more texts.',
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
  languagePapers: [
    {
      title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
      code: 'C700QS/1',
      time: '1 hour 45 minutes',
      marks: 80,
      weighting: '40%',
      textType:
        'One extract from a 20th-century literary fiction text. Section A focuses on reading comprehension and analysis. Section B includes a proofreading/editing task (unique to WJEC Eduqas) and a creative prose writing task from a stimulus.',
      sections: [
        {
          title: 'Section A: Reading (20th-Century Literary Fiction)',
          marks: 40,
          questions: [
            {
              question:
                'Q1 — Retrieval: select and retrieve key information from a specified section of the extract.',
              marks: 5,
              ao: 'AO1',
              skill: 'Identify explicit information',
              time: '5 minutes',
              advice:
                'Read only within the specified line references. Use short, embedded quotations to support each point. This is a straightforward retrieval question — no analysis or inference is required. Aim for five concise points to secure full marks.',
            },
            {
              question:
                'Q2 — Inference: what impressions do you get of [character/setting/atmosphere] from lines X–Y?',
              marks: 5,
              ao: 'AO1',
              skill: 'Inference and interpretation',
              time: '7–8 minutes',
              advice:
                'Go beyond the literal meaning of the text. Each point should be supported by a brief quotation and an explanation of what it implies or suggests. Use phrases such as "this implies", "this suggests", "the reader infers" to signal that you are reading between the lines.',
            },
            {
              question:
                'Q3 — Language analysis: how does the writer use language to [create a specific effect]? You should comment on specific words, phrases, and language features.',
              marks: 10,
              ao: 'AO2',
              skill: 'Language analysis with specific focus',
              time: '12–15 minutes',
              advice:
                'This question carries the most marks in Section A and requires detailed language analysis. Use the PETAL+ framework: Point, Evidence, Technique, Analysis, Link. Do not merely name a technique — explain its connotations and its effect on the reader. Explore individual word choices and their semantic fields. Two or three deeply developed analytical points will outscore five or six superficial ones. Stay within the specified lines.',
            },
            {
              question:
                'Q4 — Extended critical evaluation: to what extent do you agree with [a given statement about the extract]? Give reasons for your answer, referring to the whole extract.',
              marks: 10,
              ao: 'AO4',
              skill: 'Critical evaluation across the whole extract',
              time: '12–15 minutes',
              advice:
                'This is the most discriminating reading question on Component 1. You must evaluate, not merely describe. Take a clear stance — agree, disagree, or partially agree — and support your position with specific textual references from across the entire extract. Partially agreeing often produces the most nuanced responses: present evidence that supports the statement, then use a "however" turn to explore counter-evidence. Embed short quotations fluently and use evaluative language throughout: "effectively", "convincingly", "less successfully".',
            },
          ],
        },
        {
          title: 'Section B: Proofreading/Editing and Creative Prose Writing',
          marks: 40,
          questions: [
            {
              question:
                'Q5 — Proofreading and editing task (UNIQUE TO WJEC EDUQAS): identify and correct errors in a given passage. Errors may include spelling, punctuation, grammar, and sentence construction.',
              marks: 10,
              ao: 'AO6',
              skill: 'Proofreading, editing, and technical accuracy',
              time: '10 minutes',
              advice:
                'This task is unique among all GCSE English boards and offers accessible marks that many students undervalue. Read the passage carefully and systematically — do not rush. Common error types include: homophones (their/there/they\'re, affect/effect), comma splices, missing apostrophes, subject-verb agreement, and sentence fragments. Correct each error clearly. Practise proofreading regularly in the run-up to the exam; these are among the most straightforward marks available on the entire paper.',
            },
            {
              question:
                'Q6 — Creative prose writing from a given stimulus (visual or written prompt). Write either a narrative or a descriptive piece.',
              marks: 30,
              ao: 'AO5 (18 marks) + AO6 (12 marks)',
              skill: 'Creative writing — narrative or descriptive',
              time: '40 minutes (including 5–7 minutes planning)',
              advice:
                'Spend 5–7 minutes planning before you write. Open with a hook — a striking image, a sensory detail, or a provocative line of dialogue. Vary your sentence openings (adverbial, participial, one-word) and lengths (short for impact, long for description). Demonstrate the full punctuation range: semicolons, colons, dashes, ellipses. Paragraphs should be varied in length. End with circularity — echo or mirror your opening image or idea. AO6 carries 12 marks, so technical accuracy is essential: proofread your work carefully before time is called.',
            },
          ],
        },
      ],
    },
    {
      title: 'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
      code: 'C700QS/2',
      time: '2 hours',
      marks: 80,
      weighting: '60%',
      textType:
        'Two non-fiction extracts — one from the 19th century and one from the 21st century — linked by a common theme or topic. Section B requires two transactional writing tasks of different lengths and forms.',
      sections: [
        {
          title: 'Section A: Reading (19th and 21st Century Non-Fiction)',
          marks: 40,
          questions: [
            {
              question:
                'Q1 — Synthesis: using evidence from both texts, identify the key similarities and/or differences in the writers\' ideas about [the shared topic].',
              marks: 10,
              ao: 'AO1',
              skill: 'Synthesis across two non-fiction texts',
              time: '12 minutes',
              advice:
                'You MUST draw on BOTH texts — responses that neglect one source cannot access the top band. Structure your answer around clear points of comparison or contrast, embedding quotations from each text. Use comparative connectives throughout: "similarly", "in contrast", "whereas", "both writers suggest". Aim for four to five well-developed comparative points rather than a long list of surface observations.',
            },
            {
              question:
                'Q2 — Language analysis: how does the writer of Text [A/B] use language to [achieve a specific effect]?',
              marks: 10,
              ao: 'AO2',
              skill: 'Language analysis of one non-fiction text',
              time: '12 minutes',
              advice:
                'Focus on the specified text only. Analyse language techniques in detail: name the device, quote the evidence, and explain the effect on the reader. Consider how the period of the text shapes its language choices — 19th-century texts may use formal register, rhetorical patterning, and archaic vocabulary, while 21st-century texts may employ colloquialisms, informal address, and modern rhetorical strategies. Three well-developed analytical points will comfortably reach the top band.',
            },
            {
              question:
                'Q3 — Comparison: compare how the two writers convey their different attitudes and perspectives on [the shared topic]. You should consider language, tone, and rhetorical techniques.',
              marks: 10,
              ao: 'AO3',
              skill: 'Comparing perspectives across both texts',
              time: '15 minutes',
              advice:
                'Structure your response around points of comparison rather than writing about each text in turn. For every perspective you identify, analyse HOW the writer conveys it through specific language and structural choices. Top-band responses move beyond surface-level comparison to explore WHY the writers\' perspectives differ — consider the influence of historical period, audience, purpose, and genre.',
            },
            {
              question:
                'Q4 — Evaluation: to what extent do you agree that [a given statement about one or both texts]? Support your response with detailed reference to the text(s).',
              marks: 10,
              ao: 'AO4',
              skill: 'Critical evaluation of non-fiction',
              time: '12 minutes',
              advice:
                'Take a clear evaluative stance and sustain it throughout your response. Every evaluative point must be anchored in a specific textual reference. Show that you can weigh the writer\'s choices critically rather than simply describing them. Use evaluative language: "the writer effectively conveys", "this is less convincing because", "the most compelling aspect of the argument is".',
            },
          ],
        },
        {
          title: 'Section B: Transactional/Persuasive Writing',
          marks: 40,
          questions: [
            {
              question:
                'Q5 — Shorter transactional writing task: write in a specified form (letter, article, speech, review, etc.) for a given audience and purpose.',
              marks: 15,
              ao: 'AO5 (9 marks) + AO6 (6 marks)',
              skill: 'Shorter transactional writing — form, audience, purpose',
              time: '20 minutes (including planning)',
              advice:
                'Match your register precisely to the specified form and audience. A formal letter requires different conventions from an opinion article or a speech. Open with a clear sense of purpose, develop your argument with two or three well-structured paragraphs, and close with a strong final statement. Despite being the shorter task, this question still rewards sophistication in language, varied sentence structures, and accurate technical skills.',
            },
            {
              question:
                'Q6 — Longer transactional writing task: write in a specified form (letter, article, speech, review, etc.) for a given audience and purpose. This task requires a more developed and sustained response.',
              marks: 25,
              ao: 'AO5 (15 marks) + AO6 (10 marks)',
              skill: 'Longer transactional writing — sustained, developed response',
              time: '30 minutes (including planning)',
              advice:
                'This is the highest-weighted writing question on Component 2. Spend 3–5 minutes planning your structure. Demonstrate clear command of the specified form: if writing a speech, use direct address, rhetorical questions, and tricolon; if writing an article, use a headline, subheadings where appropriate, and an engaging opening. Build your argument through well-developed paragraphs with topic sentences and discourse markers. Vary your sentence structures purposefully and proofread for accuracy — AO6 accounts for 10 of the 25 marks.',
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
                'Part (a) — Extract-based analysis: read the extract from your studied Shakespeare play and analyse how Shakespeare presents [a character, theme, or relationship] in this passage.',
              marks: 20,
              ao: 'AO1 + AO2 + AO3',
              skill: 'Close analysis of a Shakespeare extract',
              time: '25 minutes',
              advice:
                'Ground your response in close analysis of the specific extract. Analyse Shakespeare\'s language choices at word level — explore imagery, verse form, rhetorical patterning, and dramatic irony. Integrate contextual understanding (AO3) naturally: reference Elizabethan/Jacobean social norms, theatrical conventions, and audience expectations. Do not paraphrase the extract; select key quotations and analyse their effects in depth.',
            },
            {
              question:
                'Part (b) — Whole-text essay: write about [a character, theme, or relationship] in the play as a whole. You must refer to the context in which the play was written.',
              marks: 20,
              ao: 'AO1 + AO2 + AO3 + AO4 (SPaG)',
              skill: 'Extended essay on Shakespeare — whole text',
              time: '25 minutes',
              advice:
                'Range across the entire play — do not repeat material from Part (a). Structure your essay around a clear argument that tracks how the character or theme develops. Each paragraph should blend interpretation (AO1), analysis of methods (AO2), and contextual understanding (AO3). Top-band responses reference the patriarchal society, the Great Chain of Being, divine right, Machiavellian villainy, or genre conventions as appropriate. Plan three to four substantial paragraphs rather than writing six superficial ones.',
            },
          ],
        },
        {
          title: 'Section B: Poetry (40 marks)',
          marks: 40,
          questions: [
            {
              question:
                'Analyse the named poem from the anthology, then compare it with one other poem of your choice from the same thematic cluster. Explore how both poets present [a shared theme or idea].',
              marks: 40,
              ao: 'AO1 + AO2 + AO3',
              skill: 'Analysis of named poem + comparison with chosen poem from same cluster',
              time: '50 minutes',
              advice:
                'The named poem is printed on the paper, but your comparison poem is not — you must know your second poem from memory. Choose your comparison poem quickly (within 2 minutes) based on the strongest thematic or methodological links. The three-cluster structure means you must select from the same cluster as the named poem. Structure comparatively throughout: do not write about one poem then the other. Each paragraph should address both poems, using comparative connectives. Analyse language, form, and structure in both poems, and comment on how context shapes meaning. Top-band responses treat both poems as crafted artefacts, exploring how meaning is constructed rather than simply what the poems are "about".',
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
        'Section A: post-1914 prose or drama (extract-based + essay). Section B: 19th-century prose (extract-based). Section C: unseen poetry — one analysis and one comparison.',
      sections: [
        {
          title: 'Section A: Post-1914 Prose or Drama (40 marks)',
          marks: 40,
          questions: [
            {
              question:
                'Part (a) — Extract-based analysis: read the extract from your studied post-1914 text and analyse how the writer presents [a character, theme, or idea] in this passage.',
              marks: 20,
              ao: 'AO1 + AO2',
              skill: 'Close analysis of a post-1914 prose/drama extract',
              time: '25 minutes',
              advice:
                'Focus on close textual analysis of the specific extract. Identify and analyse the writer\'s language choices, structural decisions, and narrative techniques. Embed short quotations and explore their connotations in detail. For drama texts, comment on stage directions, dialogue, dramatic irony, and how the scene functions within the broader play. For prose, address narrative voice, imagery, and the writer\'s control of pace and tension.',
            },
            {
              question:
                'Part (b) — Extended essay: write about [a character, theme, or relationship] in the text as a whole. You must consider the writer\'s methods and the context in which the text was written.',
              marks: 20,
              ao: 'AO1 + AO2 + AO3 + AO4 (SPaG)',
              skill: 'Extended essay on post-1914 prose/drama — whole text',
              time: '25 minutes',
              advice:
                'Range across the whole text, tracking how your chosen character or theme develops. Embed contextual understanding (AO3) naturally — for texts like Blood Brothers, reference Thatcherism, class division, nature versus nurture, and the social context of 1980s Liverpool. Structure a sustained argument with three to four well-developed paragraphs. Top-band responses thread a clear, overarching interpretation throughout.',
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
                'Ground your response in the specific extract, but demonstrate wider knowledge of the text where relevant. Analyse the writer\'s language choices in detail — for a text like A Christmas Carol, explore Dickens\'s use of imagery, symbolism, allegory, and narrative voice. Integrate contextual understanding naturally: reference Victorian social conditions, the Poor Law, Christian morality, and the industrial revolution as appropriate. The marking guide rewards responses that show how context shapes the writer\'s choices rather than bolting on historical facts.',
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
                'Read the poem at least twice before writing. On first reading, identify subject, tone, and shifts in mood. On second reading, annotate language, form, and structural choices. Analyse language devices (imagery, diction, sound) and structural features (form, enjambment, stanza breaks, volta). Use short embedded quotations and explore multiple layers of meaning. Do not try to cover every line — select the richest details and analyse them in depth. This is purely AO1 and AO2, so do not worry about context.',
            },
            {
              question:
                'Part 2: Compare how the poets present [a shared theme] in both unseen poems.',
              marks: 8,
              ao: 'AO2',
              skill: 'Compare two unseen poems',
              time: '10 minutes',
              advice:
                'This question carries 8 marks and should take roughly 10 minutes. Focus on two or three sharp comparative points. Compare methods (how the poets achieve their effects) rather than just content (what the poems are about). Use comparative language throughout: "Both poets use...", "While Poem 1 employs..., Poem 2 instead...". Keep quotations very short — single words or phrases.',
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
      question: 'Component 1, Section A — Reading Questions',
      tips: [
        'Read the extract at least twice before answering any questions. On first reading, absorb the overall content and tone. On second reading, annotate key language features and structural choices.',
        'Stay within the specified line references for each question — material from outside those lines will not be credited.',
        'For the language analysis question (Q3, 10 marks), depth always outscores breadth. Two or three deeply developed analytical points will outscore five or six superficial ones.',
        'The critical evaluation question (Q4, 10 marks) is the most discriminating reading question on Component 1. You must evaluate, not merely describe. Use evaluative language throughout.',
      ],
    },
    {
      question: 'Component 1, Section B — Proofreading/Editing Task',
      tips: [
        'This task is unique to WJEC Eduqas and offers some of the most accessible marks on the entire paper. Do not rush through it.',
        'Read the passage systematically, sentence by sentence. Common error types include: homophones (their/there/they\'re, affect/effect, its/it\'s), comma splices, missing or misplaced apostrophes, subject-verb agreement errors, and sentence fragments.',
        'Practise proofreading regularly in the weeks before the exam. Familiarity with common error patterns will significantly improve your speed and accuracy.',
        'Do not second-guess correct passages — only mark genuine errors. Changing correct text to incorrect text will cost you marks.',
      ],
    },
    {
      question: 'Component 1, Section B — Creative Writing',
      tips: [
        'Spend 5–7 minutes planning before you write. A clear plan prevents the rambling, unfocused responses that markers consistently flag.',
        'Open with a hook: a striking image, an unusual perspective, a sensory detail, or a provocative line of dialogue.',
        'Vary your sentence openings and lengths purposefully. Short sentences create impact; longer sentences build atmosphere and description.',
        'End with circularity — echo your opening image, phrase, or motif to create a satisfying, crafted structure.',
        'AO6 carries significant marks for technical accuracy. Proofread your creative writing carefully — you have just practised proofreading in the editing task, so apply those same skills to your own work.',
      ],
    },
    {
      question: 'Component 2, Section A — Non-Fiction Reading',
      tips: [
        'The synthesis question requires evidence from BOTH texts — responses that neglect one source cannot access the top band.',
        'For the comparison question, structure around points of comparison rather than writing about each text in turn. Each paragraph should reference both texts.',
        'Consider how historical period, audience, purpose, and genre influence each writer\'s perspective and language choices.',
        'The evaluation question rewards critical judgement, not description. Take a clear stance and sustain it with specific textual evidence.',
      ],
    },
    {
      question: 'Component 2, Section B — Transactional Writing',
      tips: [
        'You must complete both writing tasks. Budget your time carefully: approximately 20 minutes for the shorter task and 30 minutes for the longer task.',
        'Match your register precisely to the specified form and audience. A formal letter requires different conventions from an opinion article or a speech transcript.',
        'The shorter task still rewards sophistication — do not treat it as a lesser task. Clear structure, varied sentence types, and accurate technical skills are all assessed.',
        'For the longer task, build your argument through well-developed paragraphs with topic sentences and discourse markers. End with a powerful closing statement that echoes or develops your opening.',
      ],
    },
    {
      question: 'Literature Component 1 — Shakespeare',
      tips: [
        'The extract-based question and the whole-text essay are each worth 20 marks. Divide your time evenly between them.',
        'Do not repeat material from Part (a) in Part (b). The extract may relate to Part (b)\'s theme, but your whole-play essay must demonstrate wider knowledge.',
        'AO3 context is essential in both parts. Reference Elizabethan/Jacobean social norms, dramatic conventions, and audience expectations where they genuinely illuminate the text.',
        'Memorise 10–15 short, precise quotations for your Shakespeare play. Single-word or short-phrase quotations embedded in your sentences are more effective than long block quotes.',
      ],
    },
    {
      question: 'Literature Component 1 — Poetry Anthology',
      tips: [
        'The three-cluster structure means you must select your comparison poem from the same cluster as the named poem. Know which poems belong to which cluster.',
        'Choose your comparison poem quickly (within 2 minutes) based on the strongest thematic or methodological links. Do not waste time deliberating.',
        'Structure your response comparatively throughout — do not write about one poem and then the other. Each paragraph should address both poems.',
        'For each poem, comment on language, form, and structure. Analyse how these formal choices reinforce or complicate meaning.',
        'Prepare at least three potential comparison poems for each cluster so you have flexibility regardless of which poem is named.',
      ],
    },
    {
      question: 'Literature Component 2 — Unseen Poetry',
      tips: [
        'Read each unseen poem at least twice before writing. On first reading, identify subject and tone. On second reading, annotate language, form, and structural choices.',
        'There is no AO3 requirement for unseen poetry — focus entirely on interpretation (AO1) and analysis of methods (AO2).',
        'For the comparison question (Part 2), focus on methods rather than content. Compare HOW the poets achieve their effects, not just WHAT the poems are about.',
        'Keep your Part 2 response focused — two or three sharp comparative points with short embedded quotations are sufficient for the available marks.',
      ],
    },
  ],

  // ─── Key Changes for 2026 ───────────────────────────────────────────────────
  keyChanges: [
    {
      year: '2026',
      change:
        'Updated anthology selections: the poetry anthology has been refreshed with new poem choices across all three thematic clusters, while retaining the distinctive three-cluster structure.',
    },
    {
      year: '2026',
      change:
        'Enhanced proofreading component: the proofreading/editing task in Language Component 1 has been expanded with a wider range of error types and a clearer marking guide to better assess students\' editing precision.',
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
      themes: ['Class division', 'Nature versus nurture', 'Fate and superstition', 'Friendship and betrayal', 'Motherhood'],
      context:
        'Set in Liverpool during the 1960s–1980s, Blood Brothers explores the devastating impact of class inequality through the story of twins separated at birth. Russell draws on the social upheaval of Thatcherite Britain, mass unemployment, and the widening gap between rich and poor. The play\'s musical form and use of a narrator as a Greek chorus figure give it a distinctive theatrical quality.',
      characters: [
        { name: 'Mickey Johnstone', description: 'One of the separated twins, raised in poverty. Mickey\'s decline from energetic child to depressed, pill-dependent adult embodies Russell\'s critique of how class determines life outcomes.' },
        { name: 'Eddie Lyons', description: 'Mickey\'s twin, raised in wealth by Mrs Lyons. Eddie\'s privileges — education, confidence, opportunity — contrast sharply with Mickey\'s trajectory, illustrating the nature-versus-nurture debate.' },
        { name: 'Mrs Johnstone', description: 'The biological mother of the twins. A warm, superstitious, working-class woman whose impossible choice drives the tragedy. She represents the powerlessness of the poor.' },
        { name: 'Mrs Lyons', description: 'Eddie\'s adoptive mother. Manipulative and increasingly paranoid, she exploits Mrs Johnstone\'s superstition and economic vulnerability.' },
        { name: 'The Narrator', description: 'Functions as a chorus figure, foreshadowing the tragic ending and providing moral commentary. His presence creates dramatic irony throughout.' },
      ],
      quotations: [
        { quote: 'The devil\'s got your number', analysis: 'The Narrator\'s repeated refrain establishes fate as an inescapable force. The imperative "got" suggests predetermination, while "the devil" invokes superstition and moral judgement — key thematic concerns.' },
        { quote: 'I could have been him', analysis: 'Mickey\'s devastating final line crystallises the nature-versus-nurture theme. The modal verb "could have" expresses unrealised potential, and the simple monosyllabic diction underscores the tragedy of wasted life.' },
        { quote: 'We\'re blood brothers', analysis: 'The childhood pact takes on tragic irony given the audience\'s knowledge of their biological connection. "Blood" functions literally and metaphorically, linking innocence with the violence of the ending.' },
      ],
      examStrategy:
        'Focus on how Russell uses the parallel structure of the twins\' lives to critique class inequality. Track the deterioration of Mickey\'s circumstances against Eddie\'s growing privilege, and analyse how the Narrator\'s interventions create dramatic irony. Always link character analysis to the broader social context of 1980s Britain.',
    },
    {
      title: 'A Christmas Carol',
      author: 'Charles Dickens',
      themes: ['Redemption and transformation', 'Social responsibility', 'Poverty and inequality', 'Christmas and generosity', 'Isolation and community'],
      context:
        'Published in 1843 during a period of severe poverty and social unrest in Victorian England. Dickens was deeply influenced by the conditions he witnessed in industrial cities and by government reports on child labour. The novella functions as a social polemic, using the supernatural framework of ghost stories to deliver a powerful critique of Victorian attitudes to the poor, particularly the utilitarian philosophy embodied in the New Poor Law of 1834.',
      characters: [
        { name: 'Ebenezer Scrooge', description: 'A miserly, cold-hearted businessman whose transformation from selfish isolation to generous community member drives the novella\'s moral argument. His journey represents Dickens\'s belief in the possibility of personal and social redemption.' },
        { name: 'Bob Cratchit', description: 'Scrooge\'s underpaid clerk, representing the virtuous working poor. His warmth, loyalty, and family devotion contrast sharply with Scrooge\'s isolation, embodying the Christian charity Dickens advocates.' },
        { name: 'Tiny Tim', description: 'Bob Cratchit\'s disabled youngest son. His potential death serves as the emotional catalyst for Scrooge\'s transformation and symbolises the vulnerable members of society whom the wealthy have a moral duty to protect.' },
        { name: 'Jacob Marley', description: 'Scrooge\'s dead business partner, condemned to wander in chains forged from his own greed. His ghostly warning establishes the novella\'s moral framework: neglect of social duty brings eternal punishment.' },
      ],
      quotations: [
        { quote: 'Are there no prisons? Are there no workhouses?', analysis: 'Scrooge\'s rhetorical questions echo the utilitarian philosophy Dickens despised. The repetition of "Are there no" reveals Scrooge\'s dismissive contempt for the poor, and Dickens positions the reader to reject this callous attitude.' },
        { quote: 'Mankind was my business', analysis: 'Marley\'s ghost redefines "business" from commerce to compassion. The past tense "was" carries the weight of irreversible regret, serving as a warning to Scrooge and, by extension, to Dickens\'s wealthy readers.' },
        { quote: 'I will honour Christmas in my heart, and try to keep it all the year', analysis: 'Scrooge\'s pledge marks his completed transformation. The future tense "will" signals determined commitment, while "all the year" extends the spirit of generosity beyond a single day — embodying Dickens\'s central message.' },
      ],
      examStrategy:
        'Structure your essay around Scrooge\'s transformation, tracking how Dickens uses the three-ghost structure to systematically dismantle Scrooge\'s selfishness. Link every point to Victorian social context: the Poor Law, workhouses, Malthusian economics, and Dickens\'s personal crusade against poverty. Analyse the novella as a piece of social commentary disguised as a Christmas ghost story.',
    },
    {
      title: 'Macbeth',
      author: 'William Shakespeare',
      themes: ['Ambition and its consequences', 'Guilt and conscience', 'Masculinity and power', 'The supernatural', 'Order and disorder', 'Appearance versus reality'],
      context:
        'Written around 1606, shortly after the Gunpowder Plot, Macbeth explores the catastrophic consequences of regicide and unchecked ambition. Shakespeare wrote the play partly to flatter King James I, who was fascinated by witchcraft and believed in the divine right of kings. The play engages with Jacobean anxieties about political instability, the legitimacy of royal succession, and the dangerous allure of supernatural power.',
      characters: [
        { name: 'Macbeth', description: 'A Scottish nobleman whose "vaulting ambition" leads him from loyal warrior to tyrannical king to haunted, isolated figure. His tragic arc illustrates the destructive power of unchecked ambition and the psychological toll of guilt.' },
        { name: 'Lady Macbeth', description: 'Macbeth\'s wife, who initially drives the plot to murder Duncan through manipulation of Macbeth\'s masculinity. Her subsequent descent into guilt-ridden madness and suicide mirrors Macbeth\'s own psychological deterioration.' },
        { name: 'The Witches', description: 'The "weird sisters" whose prophecies ignite Macbeth\'s ambition. They embody the supernatural forces that Jacobean audiences feared, and their equivocal language ("fair is foul") establishes the play\'s thematic concern with deception and moral inversion.' },
        { name: 'Banquo', description: 'Macbeth\'s fellow general, who resists the temptation of the witches\' prophecies. He functions as a moral foil to Macbeth, demonstrating that ambition can be resisted through conscience and loyalty.' },
      ],
      quotations: [
        { quote: 'Look like th\' innocent flower, / But be the serpent under \'t', analysis: 'Lady Macbeth\'s imperative to Macbeth encapsulates the theme of appearance versus reality. The biblical allusion to the serpent in Eden positions the Macbeths as agents of original sin, while the juxtaposition of "flower" and "serpent" mirrors the play\'s pervasive moral inversions.' },
        { quote: 'Will all great Neptune\'s ocean wash this blood clean from my hand?', analysis: 'Macbeth\'s rhetorical question reveals the overwhelming guilt that follows Duncan\'s murder. The hyperbolic reference to "Neptune\'s ocean" suggests that no natural force can cleanse his conscience, foreshadowing his psychological disintegration.' },
        { quote: 'Out, damned spot! Out, I say!', analysis: 'Lady Macbeth\'s fragmented, imperative exclamations during the sleepwalking scene reveal her psychological collapse. The "spot" of blood she cannot remove symbolises indelible guilt — ironic given her earlier dismissal that "a little water clears us of this deed".' },
      ],
      examStrategy:
        'Focus on the trajectory of ambition and guilt across the play. Track how Macbeth and Lady Macbeth\'s relationship inverts — she begins as the driving force and he as the reluctant follower, but by Act 5 their positions are reversed. Always connect character analysis to Jacobean context: the divine right of kings, the Great Chain of Being, and James I\'s fascination with witchcraft.',
    },
    {
      title: 'Romeo and Juliet',
      author: 'William Shakespeare',
      themes: ['Love and passion', 'Fate and free will', 'Family honour and feuding', 'Youth versus age', 'Violence and conflict', 'Light and darkness'],
      context:
        'Written around 1595, Romeo and Juliet draws on Italian source material to explore the destructive consequences of an ancient family feud. The play engages with Elizabethan attitudes to love, marriage, patriarchal authority, and honour. Shakespeare subverts the conventions of Petrarchan love poetry, presenting Romeo\'s initial infatuation with Rosaline as shallow and his love for Juliet as transformative. The play also reflects the instability of Elizabethan society, where public violence and private passion could equally threaten social order.',
      characters: [
        { name: 'Romeo', description: 'A Montague who evolves from a lovesick Petrarchan poet to a passionate, impulsive young man willing to defy his family for love. His rapid emotional shifts — from melancholy to ecstasy to despair — embody the play\'s exploration of youthful intensity.' },
        { name: 'Juliet', description: 'A Capulet who matures from an obedient daughter into a decisive young woman who defies patriarchal authority. Her pragmatic intelligence contrasts with Romeo\'s impulsiveness, and her agency in pursuing the relationship challenges Elizabethan gender norms.' },
        { name: 'Tybalt', description: 'Juliet\'s hot-headed cousin, whose obsession with family honour drives the play\'s central act of violence. He embodies the destructive pride of the feud and functions as a catalyst for the tragic turning point.' },
        { name: 'Friar Lawrence', description: 'A well-meaning Franciscan friar whose secret marriage of the lovers and ill-fated sleeping potion plan ultimately contribute to the tragedy. He represents the failure of adult wisdom to contain youthful passion.' },
      ],
      quotations: [
        { quote: 'A pair of star-cross\'d lovers take their life', analysis: 'The Prologue\'s metaphor establishes fate as an inescapable force governing the play. "Star-cross\'d" draws on Elizabethan belief in astrology, while "take their life" carries a double meaning — both living and dying — that encapsulates the play\'s intertwining of love and death.' },
        { quote: 'My only love sprung from my only hate', analysis: 'Juliet\'s oxymoronic exclamation captures the central paradox of the play: love born from enmity. The parallelism of "only love" and "only hate" emphasises the impossibility of reconciling private desire with public allegiance.' },
        { quote: 'A plague o\' both your houses!', analysis: 'Mercutio\'s dying curse indicts both families for the senseless violence of their feud. The repetition across his death scene intensifies its force, and the word "plague" — devastating to Elizabethan audiences — elevates personal tragedy to communal catastrophe.' },
      ],
      examStrategy:
        'Analyse how Shakespeare interweaves love and violence throughout the play. Track the acceleration of events — the entire tragedy unfolds in less than a week, creating a breathless pace that mirrors the intensity of young love. Always connect character analysis to Elizabethan context: patriarchal authority, arranged marriage, honour culture, and the role of fate in a religious society.',
    },
  ],

  // ─── Poetry Anthology ──────────────────────────────────────────────────────
  poems: [
    {
      title: 'Sonnet 43 (How Do I Love Thee?)',
      poet: 'Elizabeth Barrett Browning',
      era: 'Victorian (1850)',
      themes: ['Eternal love', 'Devotion', 'Spiritual connection'],
      topComparison: 'She Walks in Beauty — both explore idealised love through formal poetic structures',
      formAnalysis: 'Petrarchan sonnet form with iambic pentameter. The structured form contains and channels the overwhelming emotion of the speaker\'s declaration. Anaphora of "I love thee" creates rhythmic intensity.',
      keyQuotation: 'I love thee to the depth and breadth and height / My soul can reach',
    },
    {
      title: 'She Walks in Beauty',
      poet: 'Lord Byron',
      era: 'Romantic (1814)',
      themes: ['Beauty', 'Harmony of appearance and character', 'Admiration'],
      topComparison: 'Sonnet 43 — both present idealised figures through structured poetic forms',
      formAnalysis: 'Three regular sestets with ababab rhyme scheme and iambic tetrameter. The regularity of form mirrors the balanced harmony the speaker perceives in the woman. Juxtaposition of light and dark imagery throughout.',
      keyQuotation: 'She walks in beauty, like the night / Of cloudless climes and starry skies',
    },
    {
      title: 'Cozy Apologia',
      poet: 'Rita Dove',
      era: 'Contemporary (2004)',
      themes: ['Mature love', 'Domesticity', 'Contrast with romantic idealism'],
      topComparison: 'Sonnet 43 — contrasting approaches to expressing love: Dove\'s colloquial humour versus Browning\'s elevated devotion',
      formAnalysis: 'Three ten-line stanzas with loose iambic pentameter. The conversational tone and modern references (Hurricane Floyd) ground romantic love in everyday reality. The title itself is ironic — an "apologia" for finding contentment rather than drama.',
      keyQuotation: 'I could pick anything and think of you',
    },
    {
      title: 'Valentine',
      poet: 'Carol Ann Duffy',
      era: 'Contemporary (1993)',
      themes: ['Unconventional love', 'Honesty', 'Possessiveness'],
      topComparison: 'Cozy Apologia — both reject conventional romantic imagery in favour of honest, modern expressions of love',
      formAnalysis: 'Free verse with irregular stanza lengths. The absence of traditional form mirrors the rejection of cliched romance. Short, one-line stanzas ("Not a cute card or a kissogram") create emphatic negation. The onion becomes an extended metaphor for love\'s complexity.',
      keyQuotation: 'Its fierce kiss will stay on your lips, / possessive and faithful as we are',
    },
    {
      title: 'A Wife in London',
      poet: 'Thomas Hardy',
      era: 'Victorian (1899)',
      themes: ['Loss and grief', 'War', 'Irony of fate'],
      topComparison: 'The Manhunt — both explore the devastating impact of war on intimate relationships',
      formAnalysis: 'Two contrasting sections: "The Tragedy" and "The Irony". Hardy uses pathetic fallacy and a tight ABAB rhyme scheme to create a sense of cruel inevitability. The two-part structure mirrors the two communications the wife receives.',
      keyQuotation: 'She sits in the tawny vapour / That the Thames-side lanes have uprolled',
    },
    {
      title: 'The Manhunt',
      poet: 'Simon Armitage',
      era: 'Contemporary (2007)',
      themes: ['Physical and emotional trauma', 'Intimacy', 'The aftermath of war'],
      topComparison: 'A Wife in London — both explore love tested by the brutality of war',
      formAnalysis: 'Thirteen rhyming couplets with half-rhymes that suggest incompleteness and damage. The sequential journey through the soldier\'s body mirrors the wife\'s careful, patient attempt to understand his trauma. The couplet form suggests intimacy.',
      keyQuotation: 'and handle and hold / the damaged, porcelain collar-bone',
    },
    {
      title: 'Death of a Naturalist',
      poet: 'Seamus Heaney',
      era: 'Modern (1966)',
      themes: ['Loss of innocence', 'Nature\'s beauty and threat', 'Growing up'],
      topComparison: 'Afternoons — both explore the loss of youthful innocence, though through very different settings and perspectives',
      formAnalysis: 'Two contrasting stanzas: the first is long and sensuous, the second shorter and threatening. The shift in tone mirrors the child\'s sudden loss of innocence. Rich, visceral imagery and onomatopoeia throughout.',
      keyQuotation: 'the great slime kings / Were gathered there for vengeance',
    },
    {
      title: 'Afternoons',
      poet: 'Philip Larkin',
      era: 'Modern (1959)',
      themes: ['Loss of identity', 'Domesticity', 'The passage of time'],
      topComparison: 'Death of a Naturalist — both explore how time erodes earlier states of being',
      formAnalysis: 'Three eight-line stanzas with subtle rhyme. The regularity suggests the monotony of routine. Enjambment across stanzas creates a sense of life flowing past without pause. The detached, observational tone is characteristically Larkin.',
      keyQuotation: 'Something is pushing them / To the side of their own lives',
    },
    {
      title: 'Living Space',
      poet: 'Imtiaz Dharker',
      era: 'Contemporary (1997)',
      themes: ['Resilience', 'Faith', 'Precariousness of life'],
      topComparison: 'As Imperceptibly as Grief — both explore how fragile structures (physical and emotional) can contain profound meaning',
      formAnalysis: 'Free verse with enjambment that mirrors the precarious, unplanned structures described. The poem\'s own form — lines jutting out at angles — visually represents the "living space" of the title. The final image of eggs balances vulnerability and hope.',
      keyQuotation: 'The whole structure hangs / by a prayer',
    },
    {
      title: 'As Imperceptibly as Grief',
      poet: 'Emily Dickinson',
      era: 'Victorian (c.1865)',
      themes: ['Grief and loss', 'The passage of time', 'Nature and the seasons'],
      topComparison: 'Afternoons — both explore how change occurs gradually, almost without notice',
      formAnalysis: 'Common metre (alternating iambic tetrameter and trimeter) typical of hymns. The regularity of rhythm contrasts with the poem\'s subject of imperceptible change. Dickinson\'s characteristic dashes create pauses that force the reader to dwell on each image.',
      keyQuotation: 'As imperceptibly as Grief / The Summer lapsed away',
    },
    {
      title: 'Ozymandias',
      poet: 'Percy Bysshe Shelley',
      era: 'Romantic (1818)',
      themes: ['Transience of power', 'Pride and arrogance', 'Art outlasting empires'],
      topComparison: 'The Prelude (extract) — both explore the relationship between human ambition and the indifference of nature/time',
      formAnalysis: 'Irregular sonnet with an unconventional rhyme scheme that mirrors the fragmentation of the statue itself. The multiple narrative frames (poet, traveller, sculptor, Ozymandias) create layers of distance. The volta turns on the irony of the inscription.',
      keyQuotation: 'Look on my Works, ye Mighty, and despair!',
    },
    {
      title: 'The Prelude (extract: Stealing the Boat)',
      poet: 'William Wordsworth',
      era: 'Romantic (1850)',
      themes: ['Power of nature', 'Guilt and conscience', 'Sublime experience'],
      topComparison: 'Ozymandias — both explore the overwhelming power of nature/time over human ambition',
      formAnalysis: 'Blank verse (unrhymed iambic pentameter) in a single continuous verse paragraph. The flowing, unbroken form mirrors the boy\'s journey across the lake and the continuous movement of his consciousness. Enjambment builds momentum.',
      keyQuotation: 'a huge peak, black and huge, / As if with voluntary power instinct, / Upreared its head',
    },
    {
      title: 'Hawk Roosting',
      poet: 'Ted Hughes',
      era: 'Modern (1960)',
      themes: ['Power and dominance', 'Nature\'s brutality', 'Tyranny'],
      topComparison: 'Ozymandias — both explore absolute power and its relationship to arrogance',
      formAnalysis: 'Four-line stanzas with no rhyme scheme, reflecting the hawk\'s uncompromising directness. The dramatic monologue form gives the hawk an unsettling human-like consciousness. Short, declarative sentences convey absolute certainty and control.',
      keyQuotation: 'I sit in the top of the wood, my eyes closed. / Inaction, no falsifying dream',
    },
    {
      title: 'To Autumn',
      poet: 'John Keats',
      era: 'Romantic (1819)',
      themes: ['Beauty in transience', 'The cycle of seasons', 'Acceptance of mortality'],
      topComparison: 'As Imperceptibly as Grief — both explore the subtle passage from abundance to loss through seasonal imagery',
      formAnalysis: 'Three eleven-line stanzas, each a modified ode. The progression from ripeness (stanza 1) through stillness (stanza 2) to departure (stanza 3) mirrors autumn\'s own trajectory. Rich sensory imagery appeals to sight, touch, taste, and sound.',
      keyQuotation: 'Season of mists and mellow fruitfulness, / Close bosom-friend of the maturing sun',
    },
    {
      title: 'Mametz Wood',
      poet: 'Owen Sheers',
      era: 'Contemporary (2005)',
      themes: ['War and remembrance', 'The earth as witness', 'Fragility of life'],
      topComparison: 'The Manhunt — both address the physical reality of war\'s damage to human bodies',
      formAnalysis: 'Three-line stanzas (tercets) with no rhyme, creating a sense of restrained solemnity. The present tense gives immediacy to the discovery of the soldiers\' remains. Extended metaphor of the earth "giving back" the dead.',
      keyQuotation: 'the earth stands sentinel, / reaching back into itself for reminders of what happened',
    },
    {
      title: 'Invictus',
      poet: 'William Ernest Henley',
      era: 'Victorian (1875)',
      themes: ['Resilience', 'Self-determination', 'Defiance in suffering'],
      topComparison: 'Living Space — both explore human resilience in the face of overwhelming adversity',
      formAnalysis: 'Four quatrains with ABAB rhyme scheme and iambic tetrameter. The tight, controlled form embodies the speaker\'s determination to maintain mastery over their fate. The declarative final couplet is among the most famous in English poetry.',
      keyQuotation: 'I am the master of my fate, / I am the captain of my soul',
    },
    {
      title: 'Excerpt from The Prelude (Ice-Skating)',
      poet: 'William Wordsworth',
      era: 'Romantic (1850)',
      themes: ['Joy in nature', 'Childhood experience', 'The sublime'],
      topComparison: 'Death of a Naturalist — both present childhood encounters with nature that carry deeper significance',
      formAnalysis: 'Blank verse continuing the autobiographical mode of The Prelude. The breathless enjambment and long sentences mimic the physical exhilaration of skating. The shift from communal play to solitary stillness at the end reveals Wordsworth\'s characteristic movement from action to reflection.',
      keyQuotation: 'All shod with steel, / We hiss\'d along the polish\'d ice',
    },
    {
      title: 'Dulce et Decorum Est',
      poet: 'Wilfred Owen',
      era: 'Modern (1920)',
      themes: ['The horror of war', 'Propaganda and truth', 'Suffering'],
      topComparison: 'Mametz Wood — both confront the physical reality of war, though Owen writes from direct experience while Sheers writes from historical distance',
      formAnalysis: 'Modified sonnet structure broken into irregular stanzas. The disruption of form mirrors the chaos of the gas attack. Vivid, visceral imagery and the direct address to the reader ("My friend") create an accusatory, confrontational tone. The Latin title is used with savage irony.',
      keyQuotation: 'the white eyes writhing in his face, / His hanging face, like a devil\'s sick of sin',
    },
  ],

  // ─── Unique Features ─────────────────────────────────────────────────────────
  uniqueFeatures: [
    'Proofreading and editing task in Language Component 1 — the only GCSE English board to formally assess students\' ability to identify and correct errors in spelling, punctuation, and grammar within a given passage.',
    'Three-cluster poetry anthology of 18 poems — poems are organised into three thematic clusters, and students must choose their comparison poem from the same cluster as the named poem. This unique structure requires strategic preparation across all clusters.',
    'Oracy assessment: WJEC Eduqas includes continuous assessment of spoken language skills (oracy) as part of the overall qualification profile, placing greater emphasis on oral communication than other boards.',
    'Structured marking guides with six clearly defined levels — widely regarded as among the clearest and most transparent of any board, making self-assessment and targeted improvement straightforward for students and teachers.',
    'Component 2 requires two transactional writing tasks of different lengths (one shorter, one longer), testing a range of forms including letters, articles, speeches, and reviews within a single exam sitting.',
    'The proofreading task offers some of the most accessible marks on the entire Language paper — students who practise editing skills regularly can secure these marks with confidence, giving them a strategic advantage.',
    'Literature Component 2 covers three distinct sections (post-1914 prose/drama, 19th-century prose, and unseen poetry) in a single 2-hour-30-minute paper, requiring exceptional time management and versatility.',
    'Grade boundaries have remained relatively stable year-on-year, providing predictability for students and teachers planning their revision strategies.',
  ],
};
