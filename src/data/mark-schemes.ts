// @ts-nocheck
/**
 * GCSE English mark scheme criteria by exam board.
 * Each board defines Assessment Objectives (AOs) with descriptors per grade band.
 */

export interface GradeBandDescriptor {
  'Grade 4-5': string
  'Grade 6-7': string
  'Grade 8-9': string
}

export interface AssessmentObjective {
  id: string
  label: string
  description: string
  maxMarks: number
  gradeBands: GradeBandDescriptor
}

export interface PaperScheme {
  paper: string
  label: string
  questionTypes: string[]
  assessmentObjectives: AssessmentObjective[]
}

export interface BoardMarkScheme {
  board: string
  label: string
  papers: PaperScheme[]
}

// ── AQA ────────────────────────────────────────────────────────────────────────

const aqaLanguage: PaperScheme[] = [
  {
    paper: 'Paper 1',
    label: 'Explorations in Creative Reading and Writing',
    questionTypes: [
      'Language Analysis',
      'Structure Analysis',
      'Evaluation',
      'Creative Writing (Descriptive)',
      'Creative Writing (Narrative)',
    ],
    assessmentObjectives: [
      {
        id: 'AO1',
        label: 'AO1 — Identify & Interpret',
        description: 'Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.',
        maxMarks: 4,
        gradeBands: {
          'Grade 4-5': 'Identifies some relevant explicit information. Makes straightforward inferences with some textual support.',
          'Grade 6-7': 'Identifies clear and relevant information. Makes secure inferences supported by well-chosen evidence.',
          'Grade 8-9': 'Identifies and interprets complex, subtle information. Makes perceptive inferences with judiciously selected evidence.',
        },
      },
      {
        id: 'AO2',
        label: 'AO2 — Language, Form & Structure',
        description: 'Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology.',
        maxMarks: 8,
        gradeBands: {
          'Grade 4-5': 'Attempts to comment on the effect of language with some accurate use of subject terminology. Identifies obvious language features with some explanation of effects.',
          'Grade 6-7': 'Clearly explains the effects of language choices with accurate and relevant use of subject terminology. Analyses how specific words and phrases create meaning.',
          'Grade 8-9': 'Analyses the effects of language with sophistication, using a wide range of precise subject terminology. Explores layers of meaning with perceptive, detailed analysis.',
        },
      },
      {
        id: 'AO3',
        label: 'AO3 — Structure',
        description: 'Analyse how writers use structural features to achieve effects and influence readers.',
        maxMarks: 8,
        gradeBands: {
          'Grade 4-5': 'Identifies some structural features (e.g. beginning/ending, shift in focus). Makes simple comments about how structure affects meaning.',
          'Grade 6-7': 'Explains clearly how structural choices create effects. Analyses how shifts in focus, perspective, and pace shape the reader\'s response.',
          'Grade 8-9': 'Analyses structural features with sophistication. Explores how the writer manipulates the reader through deliberate structural choices at whole-text and sentence level.',
        },
      },
      {
        id: 'AO4',
        label: 'AO4 — Evaluation',
        description: 'Evaluate texts critically and support this with appropriate textual references.',
        maxMarks: 4,
        gradeBands: {
          'Grade 4-5': 'Makes a clear personal response with some evaluation. Uses some relevant textual references to support opinions.',
          'Grade 6-7': 'Gives a clear, sustained evaluation of the text. Supports points with well-chosen textual references and explains their effect.',
          'Grade 8-9': 'Gives a convincing, critical evaluation with a sophisticated personal response. Integrates perceptive textual references that deepen the argument.',
        },
      },
      {
        id: 'AO5',
        label: 'AO5 — Content & Organisation',
        description: 'Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas using structural and grammatical features.',
        maxMarks: 24,
        gradeBands: {
          'Grade 4-5': 'Writing is clear and mostly organised with some conscious crafting. Uses paragraphs and some discourse markers. Content is relevant and attempts to engage the reader.',
          'Grade 6-7': 'Writing is engaging and well-organised with effective use of structural devices. Uses a range of sentence structures for effect. Sustains the reader\'s interest throughout.',
          'Grade 8-9': 'Writing is compelling and convincingly crafted with sophisticated structural control. Employs a range of ambitious techniques to create a powerful effect. Achieves a distinctive and original voice.',
        },
      },
      {
        id: 'AO6',
        label: 'AO6 — Technical Accuracy',
        description: 'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
        maxMarks: 16,
        gradeBands: {
          'Grade 4-5': 'Sentences are generally accurate with some variety. Spelling of common words is mostly correct. Uses a range of punctuation, mostly accurately.',
          'Grade 6-7': 'Uses a wide range of sentence structures accurately and for effect. Spelling is mostly accurate, including complex words. Uses a range of punctuation confidently.',
          'Grade 8-9': 'Achieves a high level of accuracy across a wide range of sentence structures. Spelling is consistently accurate. Uses the full range of punctuation to create precise effects.',
        },
      },
    ],
  },
  {
    paper: 'Paper 2',
    label: 'Writers\' Viewpoints and Perspectives',
    questionTypes: [
      'Information Retrieval',
      'Summary & Synthesis',
      'Language Analysis',
      'Comparison of Writers\' Viewpoints',
      'Persuasive Writing',
      'Argumentative Writing',
      'Letter Writing',
      'Article Writing',
      'Speech Writing',
    ],
    assessmentObjectives: [
      {
        id: 'AO1',
        label: 'AO1 — Identify & Interpret',
        description: 'Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.',
        maxMarks: 4,
        gradeBands: {
          'Grade 4-5': 'Identifies some clear differences/similarities between texts. Makes some valid inferences from both sources.',
          'Grade 6-7': 'Identifies clear and relevant points of comparison. Synthesises evidence from both texts to show clear understanding.',
          'Grade 8-9': 'Synthesises perceptive interpretations from both texts. Draws together subtle and complex comparisons with judicious evidence.',
        },
      },
      {
        id: 'AO2',
        label: 'AO2 — Language Analysis',
        description: 'Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers.',
        maxMarks: 12,
        gradeBands: {
          'Grade 4-5': 'Comments on some relevant language features with some appropriate terminology. Explains straightforward effects of language choices.',
          'Grade 6-7': 'Analyses language clearly with well-chosen examples and accurate terminology. Explains convincingly how writers use language for specific effects.',
          'Grade 8-9': 'Analyses language with sophistication and precision. Explores subtle layers of meaning and the impact of individual word choices with perceptive insight.',
        },
      },
      {
        id: 'AO3',
        label: 'AO3 — Compare Writers\' Perspectives',
        description: 'Compare writers\' ideas and perspectives, as well as how these are conveyed, across two or more texts.',
        maxMarks: 16,
        gradeBands: {
          'Grade 4-5': 'Makes some clear comparisons of the writers\' ideas. Identifies obvious similarities/differences in perspective with some supporting evidence.',
          'Grade 6-7': 'Compares ideas and perspectives clearly with well-selected evidence from both texts. Analyses how different methods convey different viewpoints.',
          'Grade 8-9': 'Compares ideas and perspectives with sophistication and insight. Explores how contexts shape the writers\' methods and the subtleties of their positions.',
        },
      },
      {
        id: 'AO5',
        label: 'AO5 — Content & Organisation',
        description: 'Communicate clearly, effectively and imaginatively. Organise information and ideas using structural and grammatical features.',
        maxMarks: 24,
        gradeBands: {
          'Grade 4-5': 'Writing communicates clearly with some awareness of purpose and audience. Ideas are organised into paragraphs with some use of discourse markers.',
          'Grade 6-7': 'Writing is well-organised, engaging and adapts tone and register effectively. Sustains the reader\'s interest through a range of techniques.',
          'Grade 8-9': 'Writing is compelling with a commanding grasp of purpose, audience and form. Achieves a sophisticated, sustained style with original ideas.',
        },
      },
      {
        id: 'AO6',
        label: 'AO6 — Technical Accuracy',
        description: 'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
        maxMarks: 16,
        gradeBands: {
          'Grade 4-5': 'Sentences are generally accurate with some variety. Spelling is mostly correct. Uses a range of punctuation, mostly accurately.',
          'Grade 6-7': 'Uses a wide range of sentence structures accurately. Spelling is mostly accurate. Punctuation is used confidently for effect.',
          'Grade 8-9': 'Achieves a high level of accuracy with sophisticated sentence structures. Spelling is consistently accurate. Punctuation is precise and enhances meaning.',
        },
      },
    ],
  },
]

const aqaLiterature: PaperScheme[] = [
  {
    paper: 'Literature',
    label: 'English Literature',
    questionTypes: [
      'Extract-Based Analysis',
      'Essay Response',
      'Character Analysis',
      'Theme Analysis',
      'Poetry Comparison',
      'Unseen Poetry',
    ],
    assessmentObjectives: [
      {
        id: 'AO1',
        label: 'AO1 — Response & Quotation',
        description: 'Read, understand and respond to texts. Use textual references, including quotations, to support and illustrate interpretations.',
        maxMarks: 12,
        gradeBands: {
          'Grade 4-5': 'Shows clear understanding of the text with relevant textual references. Responds to the task with some development of ideas.',
          'Grade 6-7': 'Shows a detailed understanding with well-chosen, integrated quotations. Responds critically to the task with developed, sustained ideas.',
          'Grade 8-9': 'Shows a perceptive, sophisticated understanding with precise, judiciously selected quotations. Responds with a convincing, original critical interpretation.',
        },
      },
      {
        id: 'AO2',
        label: 'AO2 — Language, Form & Structure',
        description: 'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.',
        maxMarks: 12,
        gradeBands: {
          'Grade 4-5': 'Identifies relevant methods with some explanation of effects. Uses subject terminology, sometimes accurately.',
          'Grade 6-7': 'Analyses a range of methods with clear explanation of effects. Uses accurate subject terminology to support detailed analysis.',
          'Grade 8-9': 'Analyses methods with sophistication, exploring layers of meaning. Uses precise and varied subject terminology to enhance a perceptive analysis.',
        },
      },
      {
        id: 'AO3',
        label: 'AO3 — Context',
        description: 'Show understanding of the relationships between texts and the contexts in which they were written.',
        maxMarks: 6,
        gradeBands: {
          'Grade 4-5': 'Shows some awareness of relevant contextual factors. Links context to the text in a straightforward way.',
          'Grade 6-7': 'Shows clear understanding of context and how it influences the text. Integrates contextual knowledge effectively into the response.',
          'Grade 8-9': 'Shows sophisticated understanding of context that deepens the analysis. Explores how contextual factors shape meaning in nuanced and original ways.',
        },
      },
      {
        id: 'AO4',
        label: 'AO4 — Comparative Skills',
        description: 'Use a range of vocabulary and sentence structures for clarity, purpose and effect with accurate spelling and punctuation. (Applied in poetry comparison)',
        maxMarks: 4,
        gradeBands: {
          'Grade 4-5': 'Makes some relevant comparisons with supporting evidence. Identifies straightforward similarities and differences.',
          'Grade 6-7': 'Makes clear, sustained comparisons with well-chosen evidence. Analyses how poets use different methods to explore similar themes.',
          'Grade 8-9': 'Makes perceptive, exploratory comparisons. Evaluates how different writers achieve effects and explores the significance of similarities and differences.',
        },
      },
    ],
  },
]

// ── Edexcel ────────────────────────────────────────────────────────────────────

const edexcelLanguage: PaperScheme[] = [
  {
    paper: 'Paper 1',
    label: 'Fiction and Imaginative Writing',
    questionTypes: [
      'Language Analysis',
      'Whole Text Analysis',
      'Imaginative Writing',
      'Creative Writing',
    ],
    assessmentObjectives: [
      {
        id: 'AO1',
        label: 'AO1 — Reading & Understanding',
        description: 'Identify and interpret themes, ideas and information in texts. Use evidence to support a personal response.',
        maxMarks: 12,
        gradeBands: {
          'Grade 4-5': 'Shows clear understanding of themes and ideas. Selects relevant evidence to support points.',
          'Grade 6-7': 'Shows detailed understanding with well-integrated evidence. Interprets implicit meanings clearly.',
          'Grade 8-9': 'Shows perceptive, sophisticated understanding. Selects precise evidence that deepens and extends the interpretation.',
        },
      },
      {
        id: 'AO2',
        label: 'AO2 — Analyse Language & Structure',
        description: 'Analyse and evaluate how language and structure are used to achieve effects and influence the reader.',
        maxMarks: 12,
        gradeBands: {
          'Grade 4-5': 'Identifies language and structural features with some comment on effects. Uses some accurate subject terminology.',
          'Grade 6-7': 'Analyses language and structural choices clearly. Explains effects on the reader with well-chosen examples.',
          'Grade 8-9': 'Analyses language and structure with sophistication. Explores subtle effects and evaluates the writer\'s craft with precision.',
        },
      },
      {
        id: 'AO5',
        label: 'AO5 — Writing: Content & Organisation',
        description: 'Write clearly, using tone, style and register appropriate to purpose and audience. Organise information using structural features.',
        maxMarks: 24,
        gradeBands: {
          'Grade 4-5': 'Content is clear and relevant. Uses paragraphs and some structural devices. Maintains awareness of purpose and audience.',
          'Grade 6-7': 'Content is engaging and well-crafted. Uses a range of structural and linguistic devices effectively. Sustains tone and register.',
          'Grade 8-9': 'Content is compelling and convincingly crafted. Uses sophisticated structural control and original techniques. Achieves a distinctive voice.',
        },
      },
      {
        id: 'AO6',
        label: 'AO6 — Writing: Technical Accuracy',
        description: 'Use a range of vocabulary and sentence structures with accurate spelling and punctuation.',
        maxMarks: 16,
        gradeBands: {
          'Grade 4-5': 'Generally accurate with some variety in sentence structures. Spelling of common and some complex words is correct.',
          'Grade 6-7': 'Wide range of sentence structures used accurately and for effect. Spelling and punctuation are secure.',
          'Grade 8-9': 'Consistently accurate with sophisticated sentence structures. Full range of punctuation used precisely to create effects.',
        },
      },
    ],
  },
  {
    paper: 'Paper 2',
    label: 'Non-Fiction and Transactional Writing',
    questionTypes: [
      'Information Retrieval',
      'Summary',
      'Language Analysis',
      'Comparison',
      'Persuasive Writing',
      'Argumentative Writing',
      'Review Writing',
      'Letter Writing',
    ],
    assessmentObjectives: [
      {
        id: 'AO1',
        label: 'AO1 — Reading & Understanding',
        description: 'Identify and interpret explicit and implicit information. Synthesise evidence from different texts.',
        maxMarks: 12,
        gradeBands: {
          'Grade 4-5': 'Identifies clear information from both texts. Makes some valid inferences with supporting evidence.',
          'Grade 6-7': 'Synthesises evidence clearly from both texts. Makes detailed inferences with well-chosen references.',
          'Grade 8-9': 'Synthesises complex information perceptively. Makes sophisticated inferences with precisely selected evidence.',
        },
      },
      {
        id: 'AO2',
        label: 'AO2 — Analyse Language & Structure',
        description: 'Analyse how language and structure create effects and influence readers.',
        maxMarks: 12,
        gradeBands: {
          'Grade 4-5': 'Comments on language features with some explanation of effects. Uses some subject terminology.',
          'Grade 6-7': 'Analyses language choices clearly with accurate terminology. Explains how writers achieve specific effects.',
          'Grade 8-9': 'Analyses language with sophistication and precision. Explores subtle effects and evaluates craft with insight.',
        },
      },
      {
        id: 'AO3',
        label: 'AO3 — Compare Texts',
        description: 'Compare writers\' ideas and perspectives and how they are conveyed.',
        maxMarks: 12,
        gradeBands: {
          'Grade 4-5': 'Makes some clear comparisons. Identifies obvious similarities and differences with some evidence.',
          'Grade 6-7': 'Makes detailed comparisons with well-selected evidence. Analyses how different methods convey viewpoints.',
          'Grade 8-9': 'Makes perceptive comparisons with sophisticated insight. Evaluates how contexts and methods shape different perspectives.',
        },
      },
      {
        id: 'AO5',
        label: 'AO5 — Writing: Content & Organisation',
        description: 'Communicate effectively for purpose and audience. Organise ideas using structural features.',
        maxMarks: 24,
        gradeBands: {
          'Grade 4-5': 'Communicates clearly with awareness of purpose. Ideas are organised into paragraphs with some discourse markers.',
          'Grade 6-7': 'Communicates effectively with sustained awareness of form and audience. Well-organised with a range of techniques.',
          'Grade 8-9': 'Communicates compellingly with sophisticated control of purpose, form and audience. Original and commanding style.',
        },
      },
      {
        id: 'AO6',
        label: 'AO6 — Writing: Technical Accuracy',
        description: 'Use a range of vocabulary and sentence structures with accurate spelling and punctuation.',
        maxMarks: 16,
        gradeBands: {
          'Grade 4-5': 'Generally accurate spelling and punctuation. Some variety in sentence structures.',
          'Grade 6-7': 'Accurate with a wide range of sentence types. Confident use of punctuation.',
          'Grade 8-9': 'Consistently accurate and sophisticated. Punctuation enhances meaning precisely.',
        },
      },
    ],
  },
]

const edexcelLiterature: PaperScheme[] = [
  {
    paper: 'Literature',
    label: 'English Literature',
    questionTypes: [
      'Extract-Based Analysis',
      'Essay Response',
      'Character Analysis',
      'Theme Analysis',
      'Poetry Comparison',
      'Unseen Poetry',
    ],
    assessmentObjectives: [
      {
        id: 'AO1',
        label: 'AO1 — Response & Evidence',
        description: 'Read, understand and respond to texts, using textual references to support interpretations.',
        maxMarks: 20,
        gradeBands: {
          'Grade 4-5': 'Shows clear understanding with relevant textual references. Responds to the task with some development.',
          'Grade 6-7': 'Shows detailed, critical understanding with well-integrated evidence. Sustains a developed response.',
          'Grade 8-9': 'Shows perceptive, original understanding with precisely selected evidence. Constructs a convincing critical argument.',
        },
      },
      {
        id: 'AO2',
        label: 'AO2 — Writer\'s Methods',
        description: 'Analyse the language, form and structure used by the writer to create meanings and effects.',
        maxMarks: 20,
        gradeBands: {
          'Grade 4-5': 'Identifies relevant methods with some comment on effects. Uses some subject terminology accurately.',
          'Grade 6-7': 'Analyses methods clearly with detailed exploration of effects. Uses accurate, relevant terminology.',
          'Grade 8-9': 'Analyses methods with sophistication, exploring layered meanings. Uses precise terminology to enhance analysis.',
        },
      },
      {
        id: 'AO3',
        label: 'AO3 — Context',
        description: 'Show understanding of the relationship between texts and the contexts in which they were written.',
        maxMarks: 20,
        gradeBands: {
          'Grade 4-5': 'Shows awareness of relevant context. Makes some links between context and text.',
          'Grade 6-7': 'Shows clear understanding of how context influences meaning. Integrates context effectively.',
          'Grade 8-9': 'Shows sophisticated contextual understanding that deepens analysis. Explores context with nuance and originality.',
        },
      },
      {
        id: 'AO4',
        label: 'AO4 — Comparison',
        description: 'Use a range of vocabulary and sentence structures for clarity and effect with accurate spelling and punctuation.',
        maxMarks: 20,
        gradeBands: {
          'Grade 4-5': 'Makes some relevant comparisons with supporting references.',
          'Grade 6-7': 'Makes clear, sustained comparisons analysing different methods and effects.',
          'Grade 8-9': 'Makes perceptive comparisons evaluating how different writers achieve effects.',
        },
      },
    ],
  },
]

// ── OCR ────────────────────────────────────────────────────────────────────────

const ocrLanguage: PaperScheme[] = [
  {
    paper: 'Paper 1',
    label: 'Communicating Information and Ideas',
    questionTypes: [
      'Information Retrieval',
      'Language Analysis',
      'Comparison',
      'Writing to Persuade',
      'Writing to Argue',
      'Writing to Advise',
    ],
    assessmentObjectives: [
      {
        id: 'AO1',
        label: 'AO1 — Reading & Understanding',
        description: 'Identify and interpret explicit and implicit information and ideas.',
        maxMarks: 10,
        gradeBands: {
          'Grade 4-5': 'Identifies relevant information. Makes some clear inferences with textual support.',
          'Grade 6-7': 'Interprets information clearly with well-selected evidence. Makes secure inferences.',
          'Grade 8-9': 'Interprets complex information perceptively. Makes sophisticated inferences with precise evidence.',
        },
      },
      {
        id: 'AO2',
        label: 'AO2 — Language & Structure',
        description: 'Explain, comment on and analyse how writers use language and structure to achieve effects.',
        maxMarks: 10,
        gradeBands: {
          'Grade 4-5': 'Comments on language features with some explanation. Uses some subject terminology.',
          'Grade 6-7': 'Analyses language and structural choices clearly with accurate terminology.',
          'Grade 8-9': 'Analyses language and structure with sophistication, exploring layers of meaning.',
        },
      },
      {
        id: 'AO3',
        label: 'AO3 — Comparison',
        description: 'Compare writers\' ideas and perspectives, as well as how they are conveyed.',
        maxMarks: 10,
        gradeBands: {
          'Grade 4-5': 'Makes some clear comparisons. Identifies similarities and differences with evidence.',
          'Grade 6-7': 'Compares effectively with well-selected evidence from both texts.',
          'Grade 8-9': 'Compares with sophistication, evaluating how methods and contexts shape perspectives.',
        },
      },
      {
        id: 'AO5',
        label: 'AO5 — Writing: Content & Organisation',
        description: 'Communicate clearly and effectively. Organise ideas using structural and grammatical features.',
        maxMarks: 24,
        gradeBands: {
          'Grade 4-5': 'Communicates clearly with awareness of audience and purpose. Uses paragraphs and discourse markers.',
          'Grade 6-7': 'Communicates effectively with sustained register. Well-organised with a range of devices.',
          'Grade 8-9': 'Communicates compellingly with sophisticated control. Distinctive voice with original ideas.',
        },
      },
      {
        id: 'AO6',
        label: 'AO6 — Technical Accuracy',
        description: 'Use a range of vocabulary and sentence structures with accurate spelling and punctuation.',
        maxMarks: 16,
        gradeBands: {
          'Grade 4-5': 'Generally accurate. Some variety in vocabulary and sentence structures.',
          'Grade 6-7': 'Accurate with a wide range of sentence types and vocabulary. Punctuation used for effect.',
          'Grade 8-9': 'Consistently accurate with sophisticated control. Punctuation enhances meaning precisely.',
        },
      },
    ],
  },
  {
    paper: 'Paper 2',
    label: 'Exploring Effects and Impact',
    questionTypes: [
      'Language Analysis',
      'Structure Analysis',
      'Evaluation',
      'Creative Writing',
      'Descriptive Writing',
      'Narrative Writing',
    ],
    assessmentObjectives: [
      {
        id: 'AO1',
        label: 'AO1 — Reading & Understanding',
        description: 'Identify and interpret information and ideas from the text.',
        maxMarks: 10,
        gradeBands: {
          'Grade 4-5': 'Shows clear understanding with relevant evidence. Makes straightforward inferences.',
          'Grade 6-7': 'Shows detailed understanding with well-chosen evidence. Makes secure inferences.',
          'Grade 8-9': 'Shows perceptive understanding with judiciously chosen evidence. Makes sophisticated inferences.',
        },
      },
      {
        id: 'AO2',
        label: 'AO2 — Language & Structure',
        description: 'Analyse how writers use language and structure to achieve effects and influence readers.',
        maxMarks: 10,
        gradeBands: {
          'Grade 4-5': 'Identifies language and structural features with some comment on effects.',
          'Grade 6-7': 'Analyses language and structural choices clearly, explaining effects on readers.',
          'Grade 8-9': 'Analyses with sophistication, exploring how language and structure work together to shape meaning.',
        },
      },
      {
        id: 'AO4',
        label: 'AO4 — Evaluation',
        description: 'Evaluate texts critically, supporting with textual references.',
        maxMarks: 10,
        gradeBands: {
          'Grade 4-5': 'Makes clear personal response with some evaluation and textual support.',
          'Grade 6-7': 'Evaluates clearly with sustained personal response and well-chosen references.',
          'Grade 8-9': 'Evaluates critically with sophisticated personal response and precise references.',
        },
      },
      {
        id: 'AO5',
        label: 'AO5 — Writing: Content & Organisation',
        description: 'Communicate effectively using appropriate tone, style and register. Organise ideas using structural features.',
        maxMarks: 24,
        gradeBands: {
          'Grade 4-5': 'Clear communication with some conscious crafting. Uses paragraphs and discourse markers.',
          'Grade 6-7': 'Engaging and well-organised writing. Effective use of techniques to sustain interest.',
          'Grade 8-9': 'Compelling, convincingly crafted writing. Sophisticated structural control with distinctive voice.',
        },
      },
      {
        id: 'AO6',
        label: 'AO6 — Technical Accuracy',
        description: 'Use a range of vocabulary and sentence structures with accurate spelling and punctuation.',
        maxMarks: 16,
        gradeBands: {
          'Grade 4-5': 'Generally accurate with some variety. Correct spelling of common words.',
          'Grade 6-7': 'Accurate with wide range of sentence structures. Spelling and punctuation are secure.',
          'Grade 8-9': 'Consistently accurate with sophisticated sentence structures. Full punctuation range used precisely.',
        },
      },
    ],
  },
]

const ocrLiterature: PaperScheme[] = [
  {
    paper: 'Literature',
    label: 'English Literature',
    questionTypes: [
      'Extract-Based Analysis',
      'Essay Response',
      'Character Analysis',
      'Theme Analysis',
      'Poetry Comparison',
      'Unseen Poetry',
    ],
    assessmentObjectives: [
      {
        id: 'AO1',
        label: 'AO1 — Response & Evidence',
        description: 'Read, understand and respond to texts with textual references to support interpretations.',
        maxMarks: 16,
        gradeBands: {
          'Grade 4-5': 'Shows clear understanding with relevant textual references and some development.',
          'Grade 6-7': 'Shows detailed understanding with well-integrated evidence and sustained response.',
          'Grade 8-9': 'Shows perceptive, original understanding with precisely selected evidence and critical insight.',
        },
      },
      {
        id: 'AO2',
        label: 'AO2 — Writer\'s Methods',
        description: 'Analyse the language, form and structure used by a writer to create meanings and effects.',
        maxMarks: 16,
        gradeBands: {
          'Grade 4-5': 'Identifies relevant methods with some explanation of effects and subject terminology.',
          'Grade 6-7': 'Analyses methods clearly with detailed explanation and accurate terminology.',
          'Grade 8-9': 'Analyses methods with sophistication, exploring layered meanings with precise terminology.',
        },
      },
      {
        id: 'AO3',
        label: 'AO3 — Context',
        description: 'Show understanding of the relationships between texts and the contexts in which they were written.',
        maxMarks: 8,
        gradeBands: {
          'Grade 4-5': 'Shows awareness of context with some links to the text.',
          'Grade 6-7': 'Shows clear contextual understanding integrated effectively into the response.',
          'Grade 8-9': 'Shows sophisticated contextual understanding that enriches and deepens the analysis.',
        },
      },
      {
        id: 'AO4',
        label: 'AO4 — Comparison',
        description: 'Compare texts including the ways in which writers present ideas and perspectives.',
        maxMarks: 8,
        gradeBands: {
          'Grade 4-5': 'Makes some relevant comparisons with supporting evidence.',
          'Grade 6-7': 'Makes clear, developed comparisons with well-selected evidence.',
          'Grade 8-9': 'Makes perceptive, evaluative comparisons with insight into writers\' methods.',
        },
      },
    ],
  },
]

// ── WJEC ───────────────────────────────────────────────────────────────────────

const wjecLanguage: PaperScheme[] = [
  {
    paper: 'Paper 1',
    label: '20th Century Literature Reading and Creative Prose Writing',
    questionTypes: [
      'Information Retrieval',
      'Language Analysis',
      'Evaluation / Comparison',
      'Descriptive Writing',
      'Narrative Writing',
    ],
    assessmentObjectives: [
      {
        id: 'AO1',
        label: 'AO1 — Reading',
        description: 'Identify and interpret explicit and implicit information and ideas.',
        maxMarks: 10,
        gradeBands: {
          'Grade 4-5': 'Identifies relevant information with some clear inferences. Selects appropriate evidence.',
          'Grade 6-7': 'Interprets information clearly with well-chosen evidence. Makes secure inferences.',
          'Grade 8-9': 'Interprets complex information perceptively with judiciously selected evidence.',
        },
      },
      {
        id: 'AO2',
        label: 'AO2 — Language Analysis',
        description: 'Explain, comment on and analyse how writers use language and structure to achieve effects.',
        maxMarks: 10,
        gradeBands: {
          'Grade 4-5': 'Comments on language features with some explanation. Some accurate subject terminology.',
          'Grade 6-7': 'Analyses language choices clearly with accurate terminology and detailed effects.',
          'Grade 8-9': 'Analyses language with sophistication, exploring layers of meaning with precise terminology.',
        },
      },
      {
        id: 'AO4',
        label: 'AO4 — Evaluation',
        description: 'Evaluate texts critically, supporting with appropriate textual references.',
        maxMarks: 10,
        gradeBands: {
          'Grade 4-5': 'Makes clear personal response with some evaluation and supporting references.',
          'Grade 6-7': 'Evaluates clearly with sustained personal response and well-chosen evidence.',
          'Grade 8-9': 'Evaluates critically with a sophisticated personal response and perceptive references.',
        },
      },
      {
        id: 'AO5',
        label: 'AO5 — Writing: Content & Organisation',
        description: 'Communicate clearly, effectively and imaginatively. Organise information and ideas.',
        maxMarks: 24,
        gradeBands: {
          'Grade 4-5': 'Communicates clearly with some awareness of purpose. Uses paragraphs and some devices.',
          'Grade 6-7': 'Communicates effectively and engagingly. Well-organised with a range of techniques.',
          'Grade 8-9': 'Communicates compellingly with sophisticated control and a distinctive, original voice.',
        },
      },
      {
        id: 'AO6',
        label: 'AO6 — Technical Accuracy',
        description: 'Use a range of vocabulary and sentence structures with accurate spelling and punctuation.',
        maxMarks: 16,
        gradeBands: {
          'Grade 4-5': 'Generally accurate with some variety. Correct spelling of common words.',
          'Grade 6-7': 'Accurate with wide variety. Spelling and punctuation are confident.',
          'Grade 8-9': 'Consistently accurate with sophisticated structures. Punctuation used precisely for effect.',
        },
      },
    ],
  },
  {
    paper: 'Paper 2',
    label: '19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    questionTypes: [
      'Information Retrieval',
      'Summary',
      'Language Analysis',
      'Comparison of Perspectives',
      'Persuasive Writing',
      'Argumentative Writing',
      'Letter Writing',
      'Article Writing',
      'Speech Writing',
      'Review Writing',
    ],
    assessmentObjectives: [
      {
        id: 'AO1',
        label: 'AO1 — Reading',
        description: 'Identify and interpret explicit and implicit information. Synthesise from different texts.',
        maxMarks: 10,
        gradeBands: {
          'Grade 4-5': 'Identifies information from both texts. Makes some valid inferences.',
          'Grade 6-7': 'Synthesises clearly from both texts with well-chosen evidence.',
          'Grade 8-9': 'Synthesises perceptively with precise, judiciously selected evidence.',
        },
      },
      {
        id: 'AO2',
        label: 'AO2 — Language Analysis',
        description: 'Analyse how writers use language and structure to achieve effects.',
        maxMarks: 10,
        gradeBands: {
          'Grade 4-5': 'Comments on language with some explanation and terminology.',
          'Grade 6-7': 'Analyses language clearly with accurate terminology and detailed effects.',
          'Grade 8-9': 'Analyses language with sophistication, exploring subtle effects and layers of meaning.',
        },
      },
      {
        id: 'AO3',
        label: 'AO3 — Compare Perspectives',
        description: 'Compare writers\' ideas and perspectives and how these are conveyed.',
        maxMarks: 10,
        gradeBands: {
          'Grade 4-5': 'Makes some clear comparisons with supporting evidence.',
          'Grade 6-7': 'Compares effectively, analysing how methods convey different viewpoints.',
          'Grade 8-9': 'Compares with sophistication, evaluating how contexts shape perspectives.',
        },
      },
      {
        id: 'AO5',
        label: 'AO5 — Writing: Content & Organisation',
        description: 'Communicate clearly and effectively. Organise ideas using structural features.',
        maxMarks: 24,
        gradeBands: {
          'Grade 4-5': 'Communicates clearly with awareness of audience. Uses paragraphs and discourse markers.',
          'Grade 6-7': 'Communicates effectively with sustained register and a range of techniques.',
          'Grade 8-9': 'Communicates compellingly with sophisticated control and original style.',
        },
      },
      {
        id: 'AO6',
        label: 'AO6 — Technical Accuracy',
        description: 'Use a range of vocabulary and sentence structures with accurate spelling and punctuation.',
        maxMarks: 16,
        gradeBands: {
          'Grade 4-5': 'Generally accurate with some variety in sentence structures.',
          'Grade 6-7': 'Accurate with a wide range of sentence types. Punctuation is confident.',
          'Grade 8-9': 'Consistently accurate with sophisticated structures. Punctuation enhances meaning.',
        },
      },
    ],
  },
]

const wjecLiterature: PaperScheme[] = [
  {
    paper: 'Literature',
    label: 'English Literature',
    questionTypes: [
      'Extract-Based Analysis',
      'Essay Response',
      'Character Analysis',
      'Theme Analysis',
      'Poetry Comparison',
      'Unseen Poetry',
    ],
    assessmentObjectives: [
      {
        id: 'AO1',
        label: 'AO1 — Response & Evidence',
        description: 'Read, understand and respond to texts, using textual references to support interpretations.',
        maxMarks: 15,
        gradeBands: {
          'Grade 4-5': 'Shows clear understanding with relevant textual references. Responds to the task with some development.',
          'Grade 6-7': 'Shows detailed understanding with well-integrated evidence. Constructs a developed response.',
          'Grade 8-9': 'Shows perceptive, original understanding with precisely selected evidence. Convincing critical interpretation.',
        },
      },
      {
        id: 'AO2',
        label: 'AO2 — Writer\'s Methods',
        description: 'Analyse the language, form and structure used by a writer to create meanings and effects.',
        maxMarks: 15,
        gradeBands: {
          'Grade 4-5': 'Identifies relevant methods with some comment on effects. Uses some subject terminology.',
          'Grade 6-7': 'Analyses methods clearly with detailed effects and accurate terminology.',
          'Grade 8-9': 'Analyses methods with sophistication, exploring layered meanings with precise terminology.',
        },
      },
      {
        id: 'AO3',
        label: 'AO3 — Context',
        description: 'Show understanding of the relationships between texts and the contexts in which they were written.',
        maxMarks: 10,
        gradeBands: {
          'Grade 4-5': 'Shows awareness of relevant context with some links to the text.',
          'Grade 6-7': 'Shows clear contextual understanding, integrated effectively.',
          'Grade 8-9': 'Shows sophisticated contextual understanding that deepens and enriches the analysis.',
        },
      },
      {
        id: 'AO4',
        label: 'AO4 — Comparison',
        description: 'Compare ideas and perspectives across two or more texts.',
        maxMarks: 10,
        gradeBands: {
          'Grade 4-5': 'Makes some relevant comparisons with supporting evidence.',
          'Grade 6-7': 'Makes clear, developed comparisons analysing different methods and effects.',
          'Grade 8-9': 'Makes perceptive, evaluative comparisons with sophisticated insight.',
        },
      },
    ],
  },
]

// ── Exported registry ──────────────────────────────────────────────────────────

export const markSchemes: BoardMarkScheme[] = [
  {
    board: 'AQA',
    label: 'AQA',
    papers: [...aqaLanguage, ...aqaLiterature],
  },
  {
    board: 'Edexcel',
    label: 'Edexcel',
    papers: [...edexcelLanguage, ...edexcelLiterature],
  },
  {
    board: 'OCR',
    label: 'OCR',
    papers: [...ocrLanguage, ...ocrLiterature],
  },
  {
    board: 'WJEC',
    label: 'WJEC / Eduqas',
    papers: [...wjecLanguage, ...wjecLiterature],
  },
]

/** Lookup helper: find scheme for a given board + paper combo */
export function getMarkScheme(board: string, paper: string): PaperScheme | undefined {
  const boardScheme = markSchemes.find((b) => b.board === board)
  if (!boardScheme) return undefined
  return boardScheme.papers.find((p) => p.paper === paper)
}

/** Get all papers for a given board */
export function getPapersForBoard(board: string): PaperScheme[] {
  return markSchemes.find((b) => b.board === board)?.papers ?? []
}

/** Get question types for a specific board + paper */
export function getQuestionTypes(board: string, paper: string): string[] {
  return getMarkScheme(board, paper)?.questionTypes ?? []
}

/** Format mark scheme criteria as a string for use in AI prompts */
export function formatMarkSchemeForPrompt(board: string, paper: string): string {
  const scheme = getMarkScheme(board, paper)
  if (!scheme) return 'No specific mark scheme found. Use general GCSE English assessment criteria.'

  let output = `${board} ${scheme.paper} — ${scheme.label}\n\n`
  output += 'Assessment Objectives:\n\n'

  for (const ao of scheme.assessmentObjectives) {
    output += `${ao.id}: ${ao.description} (Max ${ao.maxMarks} marks)\n`
    output += `  Grade 4-5: ${ao.gradeBands['Grade 4-5']}\n`
    output += `  Grade 6-7: ${ao.gradeBands['Grade 6-7']}\n`
    output += `  Grade 8-9: ${ao.gradeBands['Grade 8-9']}\n\n`
  }

  return output
}
