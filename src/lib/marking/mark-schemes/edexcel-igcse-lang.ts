// ─── Edexcel International GCSE English Language A (4EA1) Mark Scheme ─────────
// Paper 1 (4EA1/01): Non-fiction Texts and Transactional Writing - 2h15, 90 marks.
//   Section A - Reading (45 marks)
//     Q1  AO1  2   - retrieval from Text One (point-marked)
//     Q2  AO1  4   - explain in own words, Text One (point-marked)
//     Q3  AO1  5   - select and explain, Text Two (point-marked)
//     Q4  AO2  12  - language & structure analysis, Text Two (5-level grid)
//     Q5  AO3  22  - comparison of both texts (5-level grid)
//   Section B - Transactional Writing (45 marks) - answer ONE of Q6/Q7
//     AO4 27 + AO5 18 (both 5-level grids; identical for Q6 and Q7)
//
// Assessment-objective definitions are the official 4EA1 AOs. Band/level
// descriptors are summarised IN OUR OWN WORDS from the publicly available
// Edexcel generic level grids and the official 4EA1/01 mark scheme; the mark
// boundaries are exact. examinerNotes encode the operational marking rules
// (point marking for Q1-Q3; the Q3 selection-only cap; the Q5 single-text cap;
// best-fit for the level grids) drawn from the Pearson standardisation guidance.
//
// Sources:
//   https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-english-language-a-2016.coursematerials.html
//   4EA1/01 mark scheme (Pearson Edexcel International GCSE English Language A)
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective, BandDescriptor } from './types'

// ─── Official 4EA1 Assessment Objectives ────────────────────────────────────
const AO_TEXT = {
  AO1: 'Read and understand a variety of texts, selecting and interpreting information, ideas and perspectives.',
  AO2: 'Understand and analyse how writers use linguistic and structural devices to achieve their effects.',
  AO3: 'Explore links and connections between writers’ ideas and perspectives, as well as how these are conveyed.',
  AO4: 'Communicate effectively and imaginatively, adapting form, tone and register of writing for specific purposes and audiences.',
  AO5: 'Write clearly, using a range of vocabulary and sentence structures, with appropriate paragraphing and accurate spelling, grammar and punctuation.',
} as const

// ─── Point-marked reading bands (Q1-Q3) ─────────────────────────────────────
// AO1 short-answer questions are point-marked (one mark per valid point up to
// the maximum) rather than level-marked. We model two descriptive bands whose
// top band finishes exactly on `max`; the operational rule lives in
// examinerNotes for the question.
function pointBands(max: number): BandDescriptor[] {
  const half = Math.max(1, Math.floor(max / 2))
  return [
    {
      band: 'Partial',
      minMarks: 1,
      maxMarks: half,
      label: 'Some valid points',
      descriptor:
        'A partial response that identifies some of the valid, relevant points available within the directed lines but omits others. One mark is awarded for each creditable point.',
      indicators: [
        'Some relevant points retrieved from the correct lines',
        'Other available points are missed',
      ],
    },
    {
      band: 'Secure',
      minMarks: half + 1,
      maxMarks: max,
      label: 'Most or all valid points',
      descriptor:
        'A focused response that identifies most or all of the valid, relevant points available within the directed lines, expressed clearly and (where the question requires) in the candidate’s own words.',
      indicators: [
        'Most/all available points retrieved accurately',
        'Points are clearly expressed and stay within the directed lines',
      ],
    },
  ]
}

// ─── AO2 language & structure grid (Q4, max 12) ─────────────────────────────
const ao2Bands: BandDescriptor[] = [
  {
    band: 'Level 1',
    minMarks: 1,
    maxMarks: 2,
    label: 'Basic',
    descriptor:
      'Basic identification of a few language or structural features, with little or no understanding of how the writer uses them to achieve effects. Supporting references are minimal.',
    indicators: ['Spots an obvious feature without explaining its effect', 'Few or no references'],
  },
  {
    band: 'Level 2',
    minMarks: 3,
    maxMarks: 4,
    label: 'Limited',
    descriptor:
      'Some awareness of the writer’s use of language and structure, with simple comments on effect. The selection of references is limited and not developed.',
    indicators: ['Simple comment on the effect of a named feature', 'References are limited'],
  },
  {
    band: 'Level 3',
    minMarks: 5,
    maxMarks: 7,
    label: 'Sound',
    descriptor:
      'Sound understanding of, and comment on, how language and structure (including vocabulary) are used to achieve effects. The selection of references is valid and relevant, if not fully developed.',
    indicators: ['Explains how features create effects', 'Valid, relevant references used'],
  },
  {
    band: 'Level 4',
    minMarks: 8,
    maxMarks: 10,
    label: 'Clear',
    descriptor:
      'Clear understanding and explanation of how language and structure (including vocabulary and sentence structure) achieve effects. References are appropriate, relevant and well chosen.',
    indicators: [
      'Clear explanation of language and structure together',
      'Appropriate, well-chosen references',
    ],
  },
  {
    band: 'Level 5',
    minMarks: 11,
    maxMarks: 12,
    label: 'Thorough',
    descriptor:
      'Thorough, sustained analysis of how language and structure achieve effects, with accurate, purposeful use of subject terminology. Discriminating references are integrated to support the analysis.',
    indicators: [
      'Sustained analysis of method and effect',
      'Discriminating, fully integrated references',
    ],
  },
]

// ─── AO3 comparison grid (Q5, max 22) ───────────────────────────────────────
const ao3Bands: BandDescriptor[] = [
  {
    band: 'Level 1',
    minMarks: 1,
    maxMarks: 4,
    label: 'Basic',
    descriptor:
      'Largely describes the writers’ ideas and perspectives with little genuine comparison between the texts. The use of references is limited.',
    indicators: ['Describes rather than compares', 'Limited references'],
  },
  {
    band: 'Level 2',
    minMarks: 5,
    maxMarks: 8,
    label: 'Limited',
    descriptor:
      'Attempts some obvious comparisons of the writers’ ideas and perspectives across the two texts. Comments are simple and the use of references is limited.',
    indicators: ['Obvious, simple comparisons', 'Some basic cross-text reference'],
  },
  {
    band: 'Level 3',
    minMarks: 9,
    maxMarks: 13,
    label: 'Sound',
    descriptor:
      'Considers a range of comparisons, commenting on the writers’ ideas and perspectives (theme, language and/or structure). The selection of references is valid and relevant to the points made.',
    indicators: ['A range of relevant comparisons', 'Valid references for both texts'],
  },
  {
    band: 'Level 4',
    minMarks: 14,
    maxMarks: 18,
    label: 'Wide-ranging',
    descriptor:
      'Explores a wide range of comparisons, examining how the writers’ ideas and perspectives are conveyed across both texts. References are balanced across the texts and fully support the points.',
    indicators: ['Explores how ideas are conveyed', 'Balanced references across both texts'],
  },
  {
    band: 'Level 5',
    minMarks: 19,
    maxMarks: 22,
    label: 'Comprehensive',
    descriptor:
      'Analyses a varied and comprehensive range of comparisons of the writers’ ideas and perspectives and how they are conveyed. Balanced, discriminating references fully support the points made.',
    indicators: [
      'Comprehensive, analytical comparison',
      'Discriminating, balanced references throughout',
    ],
  },
]

// ─── AO4 writing communication grid (Q6/Q7, max 27) ─────────────────────────
const ao4Bands: BandDescriptor[] = [
  {
    band: 'Level 1',
    minMarks: 1,
    maxMarks: 5,
    label: 'Basic',
    descriptor:
      'Communication is at a basic level and limited in clarity. Little awareness is shown of the purpose of the writing, the intended reader, or of form, tone and register.',
    indicators: ['Basic, unclear communication', 'Little sense of purpose or audience'],
  },
  {
    band: 'Level 2',
    minMarks: 6,
    maxMarks: 11,
    label: 'Broadly appropriate',
    descriptor:
      'Communicates in a broadly appropriate way, showing some grasp of the purpose and of the reader’s expectations. Straightforward use of form, tone and register.',
    indicators: ['Broadly appropriate communication', 'Straightforward form, tone and register'],
  },
  {
    band: 'Level 3',
    minMarks: 12,
    maxMarks: 17,
    label: 'Clear',
    descriptor:
      'Communicates clearly, with a clear sense of purpose and an understanding of the expectations of the intended reader. Appropriate use of form, tone and register.',
    indicators: ['Clear sense of purpose and reader', 'Appropriate form, tone and register'],
  },
  {
    band: 'Level 4',
    minMarks: 18,
    maxMarks: 22,
    label: 'Successful',
    descriptor:
      'Communicates successfully, with a secure realisation of purpose and of the reader’s expectations. Effective use of form, tone and register.',
    indicators: ['Successful, secure communication', 'Effective form, tone and register'],
  },
  {
    band: 'Level 5',
    minMarks: 23,
    maxMarks: 27,
    label: 'Sophisticated',
    descriptor:
      'Communication is perceptive and subtle, sharply focused on the purpose and the expectations of the intended reader. Sophisticated use of form, tone and register.',
    indicators: [
      'Perceptive, subtle, sharply focused writing',
      'Sophisticated form, tone and register',
    ],
  },
]

// ─── AO5 writing technical-accuracy grid (Q6/Q7, max 18) ────────────────────
const ao5Bands: BandDescriptor[] = [
  {
    band: 'Level 1',
    minMarks: 1,
    maxMarks: 3,
    label: 'Basic',
    descriptor:
      'Expresses information and ideas with limited structural and grammatical range. Basic vocabulary, often misspelt. Punctuation used with basic control, creating undeveloped, often repetitive sentences.',
    indicators: ['Basic, often misspelt vocabulary', 'Undeveloped, repetitive sentences'],
  },
  {
    band: 'Level 2',
    minMarks: 4,
    maxMarks: 7,
    label: 'Some control',
    descriptor:
      'Expresses and orders information and ideas using paragraphs and a range of structural and grammatical features. Some correctly spelt vocabulary; some control of punctuation, with coordination and subordination.',
    indicators: [
      'Some accurate spelling and paragraphing',
      'Coordination and subordination present',
    ],
  },
  {
    band: 'Level 3',
    minMarks: 8,
    maxMarks: 11,
    label: 'Clear control',
    descriptor:
      'Develops and connects information and ideas, with paragraphing that makes meaning clear. Varied vocabulary with mostly accurate spelling, including irregular patterns. Accurate, varied punctuation and sentence structures.',
    indicators: ['Varied vocabulary, mostly accurate spelling', 'Accurate, varied punctuation'],
  },
  {
    band: 'Level 4',
    minMarks: 12,
    maxMarks: 15,
    label: 'Assured',
    descriptor:
      'Manages information and ideas cohesively, with structural and grammatical features used deliberately. Wide, precise vocabulary with secure spelling. A varied range of punctuation and sentence structures used for effect.',
    indicators: ['Cohesive, deliberate structure', 'Wide vocabulary, secure spelling'],
  },
  {
    band: 'Level 5',
    minMarks: 16,
    maxMarks: 18,
    label: 'Sophisticated',
    descriptor:
      'Sophisticated, controlled handling of information and ideas with cohesive, deliberate structure. Extensive, precise vocabulary and consistently accurate spelling. Consciously crafted sentences and punctuation for deliberate effect.',
    indicators: [
      'Consistently accurate, extensive vocabulary',
      'Consciously crafted sentences for effect',
    ],
  },
]

// ─── AO factory ─────────────────────────────────────────────────────────────
function ao(
  id: 'AO1' | 'AO2' | 'AO3' | 'AO4' | 'AO5',
  label: string,
  max: number,
  questionTotal: number,
  bands: readonly BandDescriptor[],
): AssessmentObjective {
  return {
    id,
    label,
    description: AO_TEXT[id],
    maxMarks: max,
    weighting: max / questionTotal,
    bands,
  }
}

// ─── Paper 1: Non-fiction Texts and Transactional Writing (4EA1/01) ─────────
export const edexcelIgcseLangPaper1: MarkScheme = {
  id: 'edexcel-igcse-lang-paper1',
  board: 'Edexcel IGCSE',
  subject: 'English Language',
  paper: 'Paper 1',
  title: 'Non-fiction Texts and Transactional Writing',
  totalMarks: 90,
  durationMinutes: 135,
  version: '4EA1/01',
  sourceUrl:
    'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-english-language-a-2016.coursematerials.html',
  questions: [
    {
      id: 'Q1',
      questionType: 'Reading: retrieval (AO1)',
      taskDescription:
        'From the specified lines of Text One, identify/retrieve the words or phrases the question asks for.',
      totalMarks: 2,
      assessmentObjectives: [ao('AO1', 'AO1 - Read and understand', 2, 2, pointBands(2))],
      examinerNotes:
        'Point-marked: award one mark per valid word/phrase from the directed lines, up to a maximum of 2. Do not credit material drawn from outside the specified lines.',
    },
    {
      id: 'Q2',
      questionType: 'Reading: explain in own words (AO1)',
      taskDescription:
        'Explain, in your own words where possible, what you learn about the given subject from the specified lines of Text One.',
      totalMarks: 4,
      assessmentObjectives: [ao('AO1', 'AO1 - Read and understand', 4, 4, pointBands(4))],
      examinerNotes:
        'Point-marked: award one mark per valid point, up to a maximum of 4. Reward only points drawn from the directed lines; own words are preferred over lifted quotation.',
    },
    {
      id: 'Q3',
      questionType: 'Reading: select and explain (AO1)',
      taskDescription:
        'From the specified lines of Text Two, select relevant evidence and explain what the writer tells the reader, as the question directs.',
      totalMarks: 5,
      assessmentObjectives: [ao('AO1', 'AO1 - Read and understand', 5, 5, pointBands(5))],
      examinerNotes:
        'Point-marked: award one mark per valid point, up to a maximum of 5. IMPORTANT CAP: where there is evidence of selection only (quotations given with no attempt to use or explain them) award a maximum of 1 mark. Points from outside the directed lines are not credited.',
    },
    {
      id: 'Q4',
      questionType: 'Language and structure analysis (AO2)',
      taskDescription:
        'Analyse how the writer uses language and structure to convey ideas, thoughts and feelings in the specified lines of Text Two. Support your views with examples.',
      totalMarks: 12,
      assessmentObjectives: [ao('AO2', 'AO2 - Analyse language and structure', 12, 12, ao2Bands)],
      examinerNotes:
        'Level-marked (best fit) against the AO2 grid. Reward analysis of BOTH language and structure (including vocabulary and sentence structure) and the effects created. Material analysed from outside the directed lines is not credited.',
    },
    {
      id: 'Q5',
      questionType: 'Comparison of two texts (AO3)',
      taskDescription:
        'Compare how the two texts present their ideas and perspectives on the given topic. Support your answer with examples from both texts.',
      totalMarks: 22,
      assessmentObjectives: [ao('AO3', 'AO3 - Explore links and connections', 22, 22, ao3Bands)],
      examinerNotes:
        'Level-marked (best fit) against the AO3 grid. SINGLE-TEXT CAP: a response that addresses only ONE of the two texts can achieve no higher than the top of Level 2 (8 marks). Reward balanced, well-referenced comparison of the writers’ ideas and perspectives and how they are conveyed.',
    },
    {
      // Section B: candidates answer ONE of Question 6 or Question 7. Both are
      // marked on the same AO4 (27) + AO5 (18) grids, so a single question
      // scheme covers either choice.
      id: 'Q6',
      questionType: 'Transactional writing (AO4 + AO5)',
      taskDescription:
        'Answer ONE transactional writing task (Question 6 OR Question 7), writing for the specified form, purpose and audience (e.g. article, letter, speech, report, review).',
      totalMarks: 45,
      assessmentObjectives: [
        ao('AO4', 'AO4 - Communicate and adapt', 27, 45, ao4Bands),
        ao('AO5', 'AO5 - Technical accuracy', 18, 45, ao5Bands),
      ],
      examinerNotes:
        'Mark the ONE task the candidate attempted. Assess communication and adaptation to form/audience/purpose (AO4, max 27) and technical accuracy — vocabulary, sentence structure, paragraphing, spelling, grammar, punctuation (AO5, max 18) — separately, each best-fit against its grid, then add the two for the Section B total.',
    },
  ],
}

/**
 * Aggregated export of the Edexcel International GCSE English Language A (4EA1)
 * mark scheme(s).
 */
export const edexcelIgcseLangMarkSchemes: readonly MarkScheme[] = [edexcelIgcseLangPaper1]
