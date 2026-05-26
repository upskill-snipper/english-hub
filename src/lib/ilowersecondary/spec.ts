/**
 * CANONICAL SPECIFICATION DATA - Pearson Edexcel International Award in
 * Lower Secondary English (LEH11).
 *
 * SINGLE SOURCE OF TRUTH. Every fact in this file is transcribed
 * verbatim or faithfully summarised from the official Pearson documents:
 *
 *   1. iLowerSecondary English Specification - Issue 2, November 2024
 *      (ISBN 978 1 446 95667 0) © Pearson Education Limited 2024
 *   2. Pearson Edexcel International Lower Secondary Curriculum in English
 *      Year 9 (LEH11) Paper 01 - Mark Scheme (Results) October 2025
 *      (Publication Code LEH11_01_2510_MS) © Pearson Education Ltd
 *   3. LEH11/01 Achievement test, October 2025 (P79975A) - structure only
 *   4. iLowerSecondary English Teacher's Guide (SAMPLE) © Pearson
 *   5. Text: Building Skills in English Mapping, Year 9 (SAMPLE) © Pearson
 *
 * ⚠️ DO NOT reproduce the copyrighted source-booklet texts from any past
 * paper (e.g. the smallpox/Jenner, Leprosy Mission, or "The Island at the
 * End of Everything" extracts). Only the qualification facts, assessment
 * objectives, mark grids and question-type structures below are
 * reproduced - these are published openly by Pearson for centres and are
 * used here for educational guidance (criticism / instruction).
 *
 * All consumer pages MUST import from this module rather than restating
 * any figure, so a single correction propagates everywhere.
 */

// ─── Qualification facts ──────────────────────────────────────────────

export const QUALIFICATION = {
  title: 'Pearson Edexcel International Award in Lower Secondary English',
  subjectCode: 'LEH11',
  paperCode: 'LEH11/01',
  assessment: 'One externally-set achievement test (externally assessed)',
  durationMinutes: 105, // 1 hour 45 minutes
  durationLabel: '1 hour 45 minutes',
  totalMarks: 70,
  availability: ['June', 'October'] as const,
  firstTeaching: 'September 2018',
  firstAssessment: 'June 2019',
  specIssue: 'Issue 2 - November 2024',
  dictionariesAllowed: false,
  /** Four-level scale; S4 highest, S1 lowest; U = unclassified. */
  grades: ['S1', 'S2', 'S3', 'S4'] as const,
  gradeNote:
    'Graded on a four-level scale from S1 to S4, of which S4 is the highest and S1 the lowest. Achievement below the minimum standard receives an unclassified (U) result.',
  contentSource:
    'Skills are drawn from Year 9 of the Pearson Edexcel iLowerSecondary English Curriculum. The content amplification also includes aspects of learning from Years 7, 8 and 9.',
  priorLearning: 'There are no prior learning or other requirements for this qualification.',
  progression: [
    'Pearson Edexcel International GCSE in English Language (Specification A) (9-1)',
    'Pearson Edexcel International GCSE in English Language (Specification B) (9-1)',
  ],
} as const

// ─── Sections ─────────────────────────────────────────────────────────

export const SECTIONS = {
  A: {
    id: 'A' as const,
    name: 'Section A: Reading',
    marks: 40,
    assessmentObjectives: ['RAO1', 'RAO2', 'RAO3', 'RAO4', 'RAO5'],
    recommendedMinutes: 70, // 1 hour 10 minutes
    recommendedLabel: '1 hour 10 minutes',
    description:
      'Students answer questions on three unseen texts - two non-fiction and one fiction - linked by a common theme. Texts are provided in a separate Source Booklet. Students must complete all questions. This section consists of closed and short open-response questions.',
  },
  B: {
    id: 'B' as const,
    name: 'Section B: Writing',
    marks: 30,
    assessmentObjectives: ['WAO1', 'WAO2'],
    recommendedMinutes: 35,
    recommendedLabel: '35 minutes',
    description:
      'Students complete a single writing task that requires extended writing and is related to the theme in Section A.',
  },
} as const

// ─── Assessment objectives (with iLowerSecondary % weightings) ────────

export type AOKey = 'RAO1' | 'RAO2' | 'RAO3' | 'RAO4' | 'RAO5' | 'WAO1' | 'WAO2'

export const ASSESSMENT_OBJECTIVES: Record<
  AOKey,
  { code: AOKey; strand: 'reading' | 'writing'; descriptor: string; weightPct: number }
> = {
  RAO1: {
    code: 'RAO1',
    strand: 'reading',
    descriptor: 'Identify and retrieve ideas and information from a range of texts.',
    weightPct: 4.3,
  },
  RAO2: {
    code: 'RAO2',
    strand: 'reading',
    descriptor: 'Deduce, infer or interpret information, events or ideas from texts.',
    weightPct: 10,
  },
  RAO3: {
    code: 'RAO3',
    strand: 'reading',
    descriptor: 'Identify and comment on the structure and organisation of texts.',
    weightPct: 8.6,
  },
  RAO4: {
    code: 'RAO4',
    strand: 'reading',
    descriptor:
      "Explore writers' use of grammatical and literary language at word and sentence level.",
    weightPct: 18.6,
  },
  RAO5: {
    code: 'RAO5',
    strand: 'reading',
    descriptor:
      "Consider writers' purposes and viewpoints, and the overall effect of the text on the reader.",
    weightPct: 15.7,
  },
  WAO1: {
    code: 'WAO1',
    strand: 'writing',
    descriptor:
      'Communicate appropriately according to form, audience and purpose; organise writing, sequencing and structuring information appropriately and coherently.',
    weightPct: 25.7,
  },
  WAO2: {
    code: 'WAO2',
    strand: 'writing',
    descriptor:
      'Communicate meaning in writing through the use of accurate grammar, punctuation and spelling.',
    weightPct: 17.1,
  },
}

// ─── Reading content skills (1.1-1.5) ─────────────────────────────────

export const READING_SKILLS = [
  {
    code: '1.1',
    title: 'Reading accurately with understanding',
    bullets: [
      'Identifying and retrieving key ideas and information from texts.',
      'Deducing and inferring meaning - reading beyond literal and explicit meaning.',
    ],
  },
  {
    code: '1.2a',
    title: 'Developing a critical response to texts',
    bullets: [
      'Interpreting a range of information from texts.',
      'Selecting relevant textual evidence to support a critical response.',
    ],
  },
  {
    code: '1.2b',
    title: 'Exploring the construction of a text',
    bullets: [
      "Identify and explain the writer's selection of ideas.",
      'Exploring structural or organisational choices made by the writer.',
      'Evaluating how these choices impact on the reader.',
    ],
  },
  {
    code: '1.3',
    title: "Exploring the writer's use of language",
    bullets: [
      'Demonstrating understanding of the use of sentence structures.',
      'Demonstrating understanding of vocabulary choices and linguistic features.',
      'Evaluating the use of language in relation to the impact on the reader.',
    ],
  },
  {
    code: '1.4',
    title: "Identifying and exploring the writer's intention and viewpoint",
    bullets: [
      'Demonstrating understanding of overall intention in a text.',
      'Demonstrating understanding of viewpoint throughout a text.',
      "Evaluating the writer's intention and the overall effect on the reader.",
    ],
  },
  {
    code: '1.5',
    title: 'Comparing non-fiction texts',
    bullets: [
      'Linking key ideas and viewpoints across two texts.',
      'Understanding and explaining similarities and differences between two texts.',
    ],
  },
] as const

// ─── Reading application (text types, purposes, genres, perspectives) ─

export const NON_FICTION_TEXT_TYPES = [
  'autobiography/biography',
  'blogs',
  'journals',
  'leaflets, brochures, guides',
  'newspaper and magazine articles',
  'instructions',
  'recount',
  'reports',
] as const

export const NON_FICTION_PURPOSES = ['argue', 'describe', 'explain', 'inform', 'persuade'] as const

export const FICTION_GENRES = [
  'adventure',
  'fantasy',
  'historical',
  'mystery',
  'science fiction',
] as const

export const NARRATIVE_PERSPECTIVES = ['first person', 'third person', 'omniscient'] as const

// ─── Writing content skills (2.1-2.3) ─────────────────────────────────

export const WRITING_SKILLS = [
  {
    code: '2.1',
    title: 'Write appropriate to task',
    bullets: [
      'Communicate appropriately following the prescribed form, audience and purpose.',
      'Select and use appropriate conventions for a range of forms, audiences and purposes.',
    ],
  },
  {
    code: '2.2',
    title: 'Structure and organise writing appropriately',
    bullets: [
      'Organise texts to achieve intention and purpose.',
      'Structure paragraphs to organise content effectively.',
      'Link paragraphs using a range of methods.',
    ],
  },
  {
    code: '2.3',
    title:
      'Convey meaning in writing through the use of accurate grammar, punctuation and spelling',
    bullets: [
      'Use a range of sentences and sentence openings for effect and impact.',
      'Use synonyms to achieve cohesion and clarity in writing.',
      'Select a range of vocabulary for clarity and specific impact.',
      'Use capital letters, end punctuation, commas, speech marks and apostrophes correctly, with accuracy and confidence, for effect and impact.',
      'Spell largely accurately with only occasional errors in less common words.',
    ],
  },
] as const

export const WRITING_FORMS = [
  'autobiographical',
  'biographical',
  'descriptive',
  'diary',
  'letter',
  'narrative',
  'newsletter',
  'recount',
] as const

export const WRITING_PURPOSES = [
  'argue',
  'describe',
  'entertain',
  'explain',
  'express an opinion',
  'inform',
  'persuade',
] as const

export const WRITING_AUDIENCES =
  'Specific or generic adults (such as a newspaper readership or a manufacturer), older children, and children of their own age.'

// ─── Section B writing mark grids ─────────────────────────────────────

export type WritingLevel = 'S1' | 'S2' | 'S3' | 'S4'

/** WAO1 - Form, communication and purpose (out of 18 marks). */
export const WAO1_GRID: { level: WritingLevel; marks: string; descriptors: string[] }[] = [
  {
    level: 'S1',
    marks: '1-4',
    descriptors: [
      'Some content linked to task with an awareness of audience. Form is sometimes maintained.',
      'Some paragraphs or sections logically sequenced, although transitions may be awkward.',
      'Some stylistic features are used to support purpose.',
    ],
  },
  {
    level: 'S2',
    marks: '5-9',
    descriptors: [
      'Mostly appropriate to task with clear awareness of audience. Form mostly established and maintained.',
      'Organised with clear control of paragraphs or sections that supports coherence.',
      'Stylistic features used add emphasis and interest which mostly supports purpose.',
    ],
  },
  {
    level: 'S3',
    marks: '10-14',
    descriptors: [
      'Appropriate to task with secure awareness of audience. Form established and maintained throughout.',
      'Organised with clear control of paragraphs or sections that supports coherence throughout.',
      'Stylistic features used add emphasis and interest which supports purpose.',
    ],
  },
  {
    level: 'S4',
    marks: '15-18',
    descriptors: [
      'Sophisticated awareness of audience. Form adapted and controlled for purpose.',
      'Organised with complete control of paragraphs or sections with coherence throughout.',
      'Stylistic features used confidently fully supporting purpose.',
    ],
  },
]

/** WAO2 - Grammar, punctuation and spelling (out of 12 marks). */
export const WAO2_GRID: { level: WritingLevel; marks: string; descriptors: string[] }[] = [
  {
    level: 'S1',
    marks: '1-3',
    descriptors: [
      'Some sentences grammatically sound with some complex connectives used.',
      'Some sentences correctly demarcated, with mostly correct use of internal punctuation.',
      'Spelling of common functional words is accurate with some lapses.',
    ],
  },
  {
    level: 'S2',
    marks: '4-6',
    descriptors: [
      'Sentences mostly grammatically sound with an emerging range of complex connectives used to develop sentences.',
      'Most sentences correctly demarcated, with mostly correct use of internal punctuation.',
      'Spelling is mostly accurate including evidence of more ambitious vocabulary.',
    ],
  },
  {
    level: 'S3',
    marks: '7-9',
    descriptors: [
      'Sentences are grammatically secure with complex connectives used to develop sentences.',
      'Sentences are correctly demarcated with appropriate use of punctuation.',
      'Spelling is accurate with more ambitious choices used appropriately.',
    ],
  },
  {
    level: 'S4',
    marks: '10-12',
    descriptors: [
      'Sentences are grammatically assured and used effectively throughout.',
      'Sentences are demarcated correctly and with sophisticated use of punctuation.',
      'Spelling is accurate with ambitious choices used appropriately and confidently.',
    ],
  },
]

/**
 * Levelled grid used for the extended comparison reading question
 * (a 6-mark item assessing RAO2 + RAO4 + RAO5 together).
 */
export const COMPARISON_LEVELS = [
  {
    level: 'Level 1',
    marks: '1-2',
    descriptor:
      'Response is a simple comment with implicit contrast, referring to either one or two of: deducing, inferring or interpreting information, events or ideas; the use of language at word level; writers’ purpose and viewpoint / overall effect on the reader.',
  },
  {
    level: 'Level 2',
    marks: '3-4',
    descriptor:
      'Response is an explanation with explicit reference to the contrast, focused on two of: deducing, inferring or interpreting information, events or ideas; the use of language at word level; writers’ purpose and viewpoint / overall effect on the reader.',
  },
  {
    level: 'Level 3',
    marks: '5-6',
    descriptor:
      'Response is a clear explanation of the contrast, focusing on: deducing, inferring or interpreting information, events or ideas; the use of language at word level; writers’ purpose and viewpoint / overall effect on the reader.',
  },
] as const

// ─── Question-type structures (from real LEH11/01 papers) ─────────────
//
// Structure only - NO copyrighted source-text content is reproduced.

export const QUESTION_TYPES = [
  {
    id: 'synonym-select',
    name: 'Circle / select the synonym',
    ao: 'RAO4',
    typicalMarks: 1,
    format: 'Closed - circle one word from four options.',
    howToAnswer:
      'Read the word in context. Choose the option that could replace it without changing the meaning. Only one answer; do not circle more than one.',
  },
  {
    id: 'short-retrieval',
    name: 'Short retrieval / "Why…?"',
    ao: 'RAO1',
    typicalMarks: 1,
    format: 'Short open response - one or two lines.',
    howToAnswer:
      'Locate the exact place in the text. Answer in your own words or with a precise short quotation. Mark schemes reward a clear, specific reference, not a vague gist.',
  },
  {
    id: 'multiple-choice',
    name: 'Multiple choice (A/B/C/D)',
    ao: 'RAO2/RAO4',
    typicalMarks: 1,
    format: 'Closed - cross one box.',
    howToAnswer:
      'Re-read the quoted phrase, then test each option against the meaning in context. If you change your mind, put a line through the box and mark the new answer with a cross.',
  },
  {
    id: 'punctuation-effect',
    name: 'Effect of a punctuation mark',
    ao: 'RAO3',
    typicalMarks: 2,
    format: 'Short open response.',
    howToAnswer:
      'One mark for naming the effect of the mark (e.g. an exclamation mark adds emphasis / surprise / excitement). One mark for an explanation linked to the text content.',
  },
  {
    id: 'meaning-impact',
    name: '"What did the writer mean…?" / explain the impact',
    ao: 'RAO5',
    typicalMarks: 2,
    format: 'Short open response.',
    howToAnswer:
      'Explain the deeper meaning and the effect on the reader. Avoid lifting the words directly from the text without explanation - the mark scheme does not credit unexplained lifts.',
  },
  {
    id: 'underline-word-class',
    name: 'Underline the word / verb class',
    ao: 'RAO3/RAO4',
    typicalMarks: 1,
    format: 'Closed - underline one option.',
    howToAnswer:
      'Apply grammatical terminology precisely (e.g. imperative, modal, auxiliary, irregular). Any clear positive indication is accepted.',
  },
  {
    id: 'feature-tick-table',
    name: 'Tick which text uses a feature',
    ao: 'RAO3',
    typicalMarks: 2,
    format: 'Closed - tick Text 1 / Text 2 / Both texts.',
    howToAnswer:
      'Scan each text for the named features (e.g. question marks, apostrophes for possession, dashes, brackets). Partial credit is usually available for most rows correct.',
  },
  {
    id: 'comparison-6-mark',
    name: 'Compare how two quotations reflect each writer’s purpose',
    ao: 'RAO2 + RAO4 + RAO5',
    typicalMarks: 6,
    format: 'Extended open response - levelled (see COMPARISON_LEVELS).',
    howToAnswer:
      'Make an explicit, developed comparison. Move beyond an implicit comment: explain the contrast, comment on language at word level, and state each writer’s purpose and the effect on the reader.',
  },
  {
    id: 'which-text-appealing',
    name: 'Which text is more appealing - with evidence',
    ao: 'RAO4 + RAO5',
    typicalMarks: 2,
    format: 'Short open response.',
    howToAnswer:
      'One mark for a reasonable explanation of preference and one mark for appropriate textual evidence that supports it.',
  },
  {
    id: 'inference',
    name: 'Inference ("Why…?")',
    ao: 'RAO2',
    typicalMarks: 1,
    format: 'Short open response.',
    howToAnswer:
      'Read beyond the literal. State the implied reason clearly; a single accurate inference earns the mark.',
  },
  {
    id: 'language-structure-analysis',
    name: 'How does the writer show…? (language / structure)',
    ao: 'RAO4 + RAO5',
    typicalMarks: 4,
    format: 'Open response - points + evidence.',
    howToAnswer:
      'Make two developed points, each with appropriate evidence from the text and an explanation of the effect. Two marks per developed point with evidence.',
  },
  {
    id: 'writing-task',
    name: 'Section B extended writing task',
    ao: 'WAO1 + WAO2',
    typicalMarks: 30,
    format:
      'Single extended writing task in a given form, for a given audience and purpose, related to the Section A theme.',
    howToAnswer:
      'Plan briefly. Match form, audience and purpose. Organise with controlled paragraphs and linked sections. Vary sentences and openings; use accurate grammar, punctuation and spelling. Marked on WAO1 (18) + WAO2 (12).',
  },
] as const

// ─── Year 9 iLowerSecondary objective codes (Building Skills mapping) ─

export const YEAR9_CODES = [
  {
    code: 'R9.1B',
    descriptor:
      'Identify and retrieve a range of key and supporting information in a text or in spoken language.',
  },
  {
    code: 'R9.1E',
    descriptor:
      'Make inferences from a range of evidence found in two or more texts or instances of spoken language.',
  },
  {
    code: 'R9.2A',
    descriptor: "Respond to a writer's or speaker's intention and viewpoint.",
  },
  {
    code: 'R9.2B',
    descriptor:
      "Develop a critical response to a text through writing, discussion or presentation, by considering the text's features and their effects.",
  },
  {
    code: 'R9.3A',
    descriptor:
      "Respond to a writer's or speaker's key structural or organisational choices for effect and impact.",
  },
  {
    code: 'R9.4B',
    descriptor:
      "Respond to a writer's or speaker's vocabulary choices for effect and impact, including intonation, tone, volume and expression in spoken language.",
  },
  {
    code: 'W9.1A',
    descriptor: 'Gather and shape a range of relevant ideas before writing.',
  },
  {
    code: 'W9.1B',
    descriptor:
      'Develop a reliable proofreading strategy based on an evaluation of strengths and weaknesses in written accuracy.',
  },
  {
    code: 'W9.1C',
    descriptor:
      'Review and revise sentence and text structure and vocabulary choice after writing.',
  },
  {
    code: 'W9.2C',
    descriptor:
      "Organise texts and spoken presentations or debates to achieve intention and purpose, selecting and using the form's organisational conventions correctly.",
  },
  {
    code: 'W9.3C',
    descriptor:
      'Develop variety, clarity and precision in single-clause sentences and subordinate structures in text and spoken language.',
  },
  {
    code: 'W9.3G',
    descriptor: 'Select vocabulary in text and spoken language for effect and impact.',
  },
  {
    code: 'W9.3J',
    descriptor: 'Use a wide range of grammatical terminology correctly and with confidence.',
  },
] as const

// ─── Teacher's Guide guided-reading prompts (pedagogy reference) ──────

export const GUIDED_READING_PROMPTS = {
  fiction: {
    Characters: [
      'Which words describe their appearance?',
      'What do we learn about them from what they do?',
      'Does their speech tell us what they are thinking or are likely to do?',
      'What do other characters think (say) about them?',
    ],
    'Plot and structure': [
      'Where is the story set?',
      'Is there a narrator?',
      'Is the story mostly in the past or present tense?',
      'What is the problem facing the main character(s)?',
      'Are there clues early on about what will happen later?',
      'Is the ending a surprise?',
      'Is there a moral or a message?',
    ],
    'Style and language': [
      'Find examples of formal and informal English.',
      'Find a short sentence. Why has the writer chosen it?',
      'Find a long sentence. Why has the writer chosen it?',
      'Are there any particular descriptions that help us imagine the scene?',
      "What is the impact of some of the writer's vocabulary choices?",
      'Has the writer used a range of stylistic and rhetorical devices (repetition, alliteration, onomatopoeia, metaphors or similes)?',
    ],
  },
  nonFiction: {
    Genre: [
      'What type of text is this? How can you tell?',
      'Point at language features that indicate this text type (imperative verbs, impersonal pronouns, time conjunctions, persuasive language).',
    ],
    'Text structure': [
      'What non-fiction text features has the writer used (sub-headings, captions, labels, diagrams, charts, photographs)?',
      'Explain how these features support the text.',
    ],
    Paragraphs: [
      'What is the topic sentence in each paragraph?',
      'How are other sentences linked to the topic sentence?',
    ],
  },
} as const

// ─── Source attribution (for footers) ────────────────────────────────

export const SPEC_ATTRIBUTION =
  'Qualification facts, assessment objectives and mark grids reproduced for educational guidance from the Pearson Edexcel International Award in Lower Secondary English Specification (Issue 2, November 2024, ISBN 978 1 446 95667 0) and the LEH11/01 October 2025 mark scheme. © Pearson Education Limited. The English Hub is not affiliated with or endorsed by Pearson. All practice texts on these pages are original works written by The English Hub and are not reproduced from any past paper.'
