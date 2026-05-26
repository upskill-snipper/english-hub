// ─── WJEC Eduqas GCSE English Language Mark Scheme ──────────────────────────
// Component 1: 20th Century Literature Reading and Creative Prose Writing
//   (1 hour 45 minutes, 80 marks - Reading 40 + Writing 40)
// Component 2: 19th and 21st Century Non-fiction Reading and Transactional/
//   Persuasive Writing (2 hours, 80 marks - Reading 40 + Writing 40)
// Based on the WJEC Eduqas C700QS specification.
//
// Sources:
//   https://www.eduqas.co.uk/qualifications/english-language-gcse/
//   https://www.eduqas.co.uk/media/awzlcjyl/eduqas-gcse-english-language-spec-from-2015-e-01-04-21.pdf
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective, BandDescriptor } from './types'

/**
 * Scale an AO's full-range bands proportionally to a per-question maxMarks.
 *
 * The shared AO definitions below carry their full bands (e.g. AO1 0-10, AO6
 * 0-16). When the AO is reused on a question worth fewer marks (e.g. A1's AO1
 * is only 5 marks, A5's AO6 is only 5 marks), the band ranges must be scaled
 * to match, otherwise the mark-scheme coverage test sums the original
 * (unscaled) top-band marks across questions and over-counts the paper total.
 */
function scaleAO(
  ao: AssessmentObjective,
  maxMarks: number,
  weighting: number,
): AssessmentObjective {
  const originalMax = Math.max(...ao.bands.map((b) => b.maxMarks))
  if (originalMax === maxMarks) return { ...ao, maxMarks, weighting }
  const ratio = maxMarks / originalMax
  const scaledBands: BandDescriptor[] = ao.bands.map((b, i, arr) => ({
    ...b,
    minMarks:
      i === 0 ? Math.max(0, Math.round(b.minMarks * ratio)) : Math.round(b.minMarks * ratio),
    maxMarks: i === arr.length - 1 ? maxMarks : Math.round(b.maxMarks * ratio),
  }))
  return { ...ao, maxMarks, weighting, bands: scaledBands }
}

// ─── Reading Assessment Objectives ──────────────────────────────────────────

const ao1Reading: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Identify and interpret',
  description:
    'Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.',
  maxMarks: 10,
  weighting: 0.125,
  bands: [
    {
      band: 'Band 1',
      minMarks: 0,
      maxMarks: 2,
      label: 'Basic',
      descriptor: 'Basic awareness of explicit meaning. Limited selection of textual detail.',
      indicators: [
        'Simple, surface-level identification of information',
        'Limited or irrelevant references',
      ],
    },
    {
      band: 'Band 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some understanding',
      descriptor:
        'Some understanding of explicit and implied meanings. Some appropriate references selected.',
      indicators: ['Some relevant selection of textual detail', 'Begins to make inferences'],
    },
    {
      band: 'Band 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Sound understanding',
      descriptor:
        'Sound understanding of explicit and implied meanings with appropriate tracking of ideas. Well-chosen references.',
      indicators: [
        'Clear and relevant selection of textual evidence',
        'Sound inferences drawn from the text',
      ],
    },
    {
      band: 'Band 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Thorough understanding',
      descriptor:
        'Thorough understanding of explicit and implied meanings. Effective synthesis of evidence where required.',
      indicators: [
        'Apt, well-integrated references',
        'Thorough engagement with both explicit and implicit meanings',
      ],
    },
    {
      band: 'Band 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Perceptive understanding',
      descriptor:
        'Perceptive understanding and interpretation. Judicious selection and synthesis of evidence.',
      indicators: [
        'Judicious, precise selection of evidence',
        'Perceptive interpretation of implicit meanings',
      ],
    },
  ],
}

const ao2Language: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Analyse language',
  description:
    'Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views.',
  maxMarks: 10,
  weighting: 0.125,
  bands: [
    {
      band: 'Band 1',
      minMarks: 0,
      maxMarks: 2,
      label: 'Basic',
      descriptor:
        'Basic awareness of language and/or structural choices. Basic use of subject terminology.',
      indicators: [
        'Identifies obvious techniques without exploring effect',
        'Limited or inaccurate terminology',
      ],
    },
    {
      band: 'Band 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some understanding',
      descriptor:
        'Some understanding of language and/or structural choices. Some appropriate use of subject terminology.',
      indicators: [
        'Names some methods with simple comment on effect',
        'Some accurate subject terminology',
      ],
    },
    {
      band: 'Band 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Sound analysis',
      descriptor:
        'Sound analysis of language and/or structural choices. Accurate use of relevant subject terminology.',
      indicators: [
        'Explains how methods create effects on the reader',
        'Accurate, relevant terminology used consistently',
      ],
    },
    {
      band: 'Band 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Thorough analysis',
      descriptor:
        'Thorough, detailed analysis of language and/or structural choices. Effective use of well-integrated subject terminology.',
      indicators: [
        'Detailed analysis of how language and structure work together',
        'Terminology embedded purposefully in the argument',
      ],
    },
    {
      band: 'Band 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Perceptive analysis',
      descriptor:
        'Perceptive, assured analysis of language and structural choices. Judicious use of precise subject terminology.',
      indicators: [
        'Perceptive exploration of layered meanings and subtle effects',
        'Terminology used with judicious precision',
      ],
    },
  ],
}

const ao3LangReading: AssessmentObjective = {
  id: 'AO3',
  label: "AO3 - Compare writers' ideas and perspectives",
  description:
    "Compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts.",
  maxMarks: 10,
  weighting: 0.125,
  bands: [
    {
      band: 'Band 1',
      minMarks: 0,
      maxMarks: 2,
      label: 'Basic',
      descriptor:
        'Basic cross-reference of ideas or perspectives. Simple identification of differences or similarities.',
      indicators: [
        'Writes about texts separately with minimal comparison',
        'Simple awareness of different viewpoints',
      ],
    },
    {
      band: 'Band 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some comparison',
      descriptor:
        'Some comparison of ideas and perspectives. Some comparative points made with reference to methods.',
      indicators: [
        'Begins to compare with some use of connectives',
        'Some relevant comparative comment',
      ],
    },
    {
      band: 'Band 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Sound comparison',
      descriptor:
        "Sound comparison of writers' ideas and perspectives. Clear connections made with reference to methods used.",
      indicators: [
        'Sustained comparison with appropriate connective language',
        'Clear links between ideas and methods across texts',
      ],
    },
    {
      band: 'Band 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Thorough comparison',
      descriptor:
        "Thorough comparison of writers' ideas and perspectives. Developed analysis of how methods convey different viewpoints.",
      indicators: [
        'Detailed, integrated comparison of ideas and methods',
        'Comparative argument is well-structured and sustained',
      ],
    },
    {
      band: 'Band 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Perceptive comparison',
      descriptor:
        "Perceptive, evaluative comparison of writers' ideas and perspectives. Sophisticated analysis of how methods shape viewpoints.",
      indicators: [
        'Insightful, evaluative comparison illuminating both texts',
        'Sophisticated understanding of how context shapes perspective',
      ],
    },
  ],
}

const ao4Evaluation: AssessmentObjective = {
  id: 'AO4',
  label: 'AO4 - Evaluate critically',
  description: 'Evaluate texts critically and support this with appropriate textual references.',
  maxMarks: 10,
  weighting: 0.125,
  bands: [
    {
      band: 'Band 1',
      minMarks: 0,
      maxMarks: 2,
      label: 'Basic',
      descriptor: 'Basic evaluative comment. Basic reference to the text.',
      indicators: [
        'Expresses a simple opinion with limited support',
        "Little engagement with the writer's methods",
      ],
    },
    {
      band: 'Band 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some evaluation',
      descriptor:
        "Some evaluative comment supported by some textual reference. Some awareness of writer's methods.",
      indicators: [
        'Begins to justify an opinion with reference to the text',
        "Some comment on the effect of the writer's choices",
      ],
    },
    {
      band: 'Band 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Sound evaluation',
      descriptor:
        "Sound evaluative comment supported by appropriate textual references. Clear awareness of the writer's methods and their effects.",
      indicators: [
        "Clear, considered personal response linked to writer's methods",
        'Evaluation is supported by well-chosen evidence',
      ],
    },
    {
      band: 'Band 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Thorough evaluation',
      descriptor:
        "Thorough evaluative comment supported by well-selected textual references. Thorough analysis of writer's methods and their effects.",
      indicators: [
        'Sustained evaluative argument rooted in analysis of craft',
        "Confident engagement with the writer's choices",
      ],
    },
    {
      band: 'Band 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Perceptive evaluation',
      descriptor:
        "Perceptive, assured evaluation fully supported by judicious textual references. Perceptive analysis of writer's methods.",
      indicators: [
        'Convincing, critical evaluation with sophisticated analysis of craft',
        'Personal response is original and fully evidenced',
      ],
    },
  ],
}

// ─── Writing Assessment Objectives ──────────────────────────────────────────

const ao5Writing: AssessmentObjective = {
  id: 'AO5',
  label: 'AO5 - Content and organisation',
  description:
    'Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts.',
  maxMarks: 24,
  weighting: 0.3,
  bands: [
    {
      band: 'Band 1',
      minMarks: 0,
      maxMarks: 6,
      label: 'Basic',
      descriptor:
        'Basic communication with limited awareness of purpose and audience. Basic organisation with simple linking of ideas.',
      indicators: [
        'Limited range of vocabulary and sentence forms',
        'Basic, often inconsistent tone',
        'Simple paragraphing, if present',
      ],
    },
    {
      band: 'Band 2',
      minMarks: 7,
      maxMarks: 10,
      label: 'Some awareness',
      descriptor:
        'Some communication with some awareness of purpose and audience. Some organisation with some linking of ideas.',
      indicators: [
        'Some conscious vocabulary choices',
        'Tone begins to match task',
        'Some paragraphing with basic discourse markers',
      ],
    },
    {
      band: 'Band 3',
      minMarks: 11,
      maxMarks: 16,
      label: 'Sound, consistent',
      descriptor:
        'Sound, consistent communication. Clear matching of tone, style and register to purpose and audience. Effective organisation with clear coherence.',
      indicators: [
        'Writing is engaging and well-sequenced',
        'Clear sense of purpose and audience awareness',
        'Coherent paragraphs with effective discourse markers',
      ],
    },
    {
      band: 'Band 4',
      minMarks: 17,
      maxMarks: 20,
      label: 'Assured, convincing',
      descriptor:
        'Assured, convincing communication. Sophisticated matching of tone, style and register. Skilful organisation with purposeful structural choices.',
      indicators: [
        'Distinctive voice appropriate to purpose and audience',
        'Sophisticated structural choices that enhance meaning',
        'Varied and inventive use of discourse features',
      ],
    },
    {
      band: 'Band 5',
      minMarks: 21,
      maxMarks: 24,
      label: 'Compelling, accomplished',
      descriptor:
        'Compelling, accomplished communication with total control of purpose, audience and form. Sophisticated, purposeful organisation throughout.',
      indicators: [
        'Compelling voice with total command of register',
        'Ambitious and inventive structural control',
        'Writing is polished and accomplished throughout',
      ],
    },
  ],
}

const ao6TechnicalAccuracy: AssessmentObjective = {
  id: 'AO6',
  label: 'AO6 - Technical accuracy',
  description:
    'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
  maxMarks: 16,
  weighting: 0.2,
  bands: [
    {
      band: 'Band 1',
      minMarks: 0,
      maxMarks: 4,
      label: 'Basic',
      descriptor:
        'Basic range of vocabulary. Simple sentence structures. Some basic punctuation. Occasional accurate spelling of simple words.',
      indicators: [
        'Simple sentences dominate',
        'Frequent technical errors that may hinder meaning',
      ],
    },
    {
      band: 'Band 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some accuracy',
      descriptor:
        'Some range of vocabulary with some ambition. Some variety of sentence forms. Some accurate punctuation. Some accurate spelling including some ambitious words.',
      indicators: [
        'Some variety of sentence structures attempted',
        'Errors present but meaning generally clear',
      ],
    },
    {
      band: 'Band 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Considerable accuracy',
      descriptor:
        'Considerable range of vocabulary used effectively. Varied sentence forms used for effect. Accurate punctuation. Mostly accurate spelling including ambitious vocabulary.',
      indicators: [
        'Controlled variety of sentence types for effect',
        'Punctuation is accurate and sometimes used for effect',
      ],
    },
    {
      band: 'Band 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Consistent accuracy',
      descriptor:
        'Extensive, ambitious vocabulary used with precision. Full range of sentence forms deployed for effect. Consistently accurate punctuation. Accurate spelling throughout including ambitious words.',
      indicators: [
        'Consistently accurate across ambitious constructions',
        'Punctuation used to create precise effects',
        'Spelling is consistently secure',
      ],
    },
  ],
}

// ─── Component 1: 20th Century Literature Reading + Creative Prose Writing ──

export const eduqasLangComp1: MarkScheme = {
  id: 'eduqas-lang-comp1',
  board: 'WJEC Eduqas',
  subject: 'English Language',
  paper: 'Component 1',
  title: '20th Century Literature Reading and Creative Prose Writing',
  totalMarks: 80,
  durationMinutes: 105,
  version: 'C700U10-1',
  sourceUrl: 'https://www.eduqas.co.uk/qualifications/english-language-gcse/',
  questions: [
    {
      id: 'A1',
      questionType: 'Information retrieval',
      taskDescription:
        'Read lines x-y. List five things you learn about [topic] from this part of the text.',
      totalMarks: 5,
      assessmentObjectives: [scaleAO(ao1Reading, 5, 1.0)],
      examinerNotes:
        'One mark per valid point. Accept explicit information from the specified lines only. Do not reward lifting of irrelevant material.',
    },
    {
      id: 'A2',
      questionType: 'Inference and deduction',
      taskDescription:
        'How does the writer suggest or imply [topic/feeling/atmosphere]? Refer to evidence from the text in your answer.',
      totalMarks: 5,
      assessmentObjectives: [scaleAO(ao1Reading, 3, 0.5), scaleAO(ao2Language, 2, 0.5)],
      examinerNotes:
        'Reward inference supported by textual evidence. Quotation is expected at the higher bands.',
    },
    {
      id: 'A3',
      questionType: 'Language and structure analysis',
      taskDescription:
        'Analyse how the writer uses language and structure to [create effect / present character / build tension]. You should use relevant subject terminology.',
      totalMarks: 10,
      assessmentObjectives: [scaleAO(ao2Language, 10, 1.0)],
      examinerNotes:
        'Reward analysis of effect, not device-spotting. Both language and structure should be addressed for the highest bands.',
    },
    {
      id: 'A4',
      questionType: 'Evaluation',
      taskDescription:
        'To what extent do you agree with the statement? You should refer to the text to support your answer.',
      totalMarks: 10,
      assessmentObjectives: [scaleAO(ao4Evaluation, 10, 1.0)],
      examinerNotes:
        'Reward critical personal engagement supported by analysis of methods. Candidates may agree, disagree or present a balanced view.',
    },
    {
      id: 'A5',
      questionType: 'Proofreading',
      taskDescription:
        'Read the passage below and identify the five errors. Write out the corrections.',
      totalMarks: 5,
      assessmentObjectives: [scaleAO(ao6TechnicalAccuracy, 5, 1.0)],
      examinerNotes:
        'One mark per correctly identified and corrected error. Accept reasonable alternative corrections.',
    },
    {
      id: 'B1',
      questionType: 'Creative Prose Writing',
      taskDescription:
        'Choose one of the following titles and write approximately 450-600 words of creative prose. You may choose to write a narrative or descriptive piece.',
      totalMarks: 40,
      assessmentObjectives: [
        scaleAO(ao5Writing, 24, 24 / 40),
        scaleAO(ao6TechnicalAccuracy, 16, 16 / 40),
      ],
      examinerNotes:
        'AO5 is marked out of 24, AO6 out of 16. Reward deliberate crafting, distinctive voice, structural control and imaginative engagement with the task. Award marks holistically within each AO.',
    },
  ],
}

// ─── Component 2: 19th/21st Century Non-fiction + Transactional Writing ─────

export const eduqasLangComp2: MarkScheme = {
  id: 'eduqas-lang-comp2',
  board: 'WJEC Eduqas',
  subject: 'English Language',
  paper: 'Component 2',
  title: '19th and 21st Century Non-fiction Reading and Transactional/Persuasive Writing',
  totalMarks: 80,
  durationMinutes: 120,
  version: 'C700U20-1',
  sourceUrl: 'https://www.eduqas.co.uk/qualifications/english-language-gcse/',
  questions: [
    {
      id: 'A1',
      questionType: 'Information retrieval from 21st century text',
      taskDescription:
        'Read the 21st century non-fiction text. List five things you learn about [topic].',
      totalMarks: 5,
      assessmentObjectives: [scaleAO(ao1Reading, 5, 1.0)],
      examinerNotes: 'One mark per valid point. Accept explicit information only.',
    },
    {
      id: 'A2',
      questionType: 'Inference from 19th century text',
      taskDescription:
        'How does the writer show [topic/viewpoint/attitude] in the 19th century text? Refer to evidence from the text.',
      totalMarks: 5,
      assessmentObjectives: [scaleAO(ao1Reading, 3, 0.5), scaleAO(ao2Language, 2, 0.5)],
      examinerNotes:
        'Reward inference and deduction supported by textual references. Higher bands require embedded quotation.',
    },
    {
      id: 'A3',
      questionType: 'Language analysis of 19th century text',
      taskDescription:
        'Analyse how the writer uses language to [achieve effect / convey viewpoint]. Use relevant subject terminology.',
      totalMarks: 10,
      assessmentObjectives: [scaleAO(ao2Language, 10, 1.0)],
      examinerNotes:
        'Reward analysis of effect. Subject terminology should support analysis, not replace it.',
    },
    {
      id: 'A4',
      questionType: 'Comparison of viewpoints and perspectives',
      taskDescription:
        "Compare and contrast the writers' attitudes and perspectives on [topic] in both texts. You should consider the methods used by each writer.",
      totalMarks: 10,
      assessmentObjectives: [scaleAO(ao3LangReading, 10, 1.0)],
      examinerNotes:
        'Both texts must be discussed. Sustained comparison is required for the higher bands. Reward analysis of both ideas and methods.',
    },
    {
      id: 'A5',
      questionType: 'Proofreading',
      taskDescription:
        'Read the passage below and identify the five errors. Write out the corrections.',
      totalMarks: 5,
      assessmentObjectives: [scaleAO(ao6TechnicalAccuracy, 5, 1.0)],
      examinerNotes: 'One mark per correctly identified and corrected error.',
    },
    {
      id: 'B1',
      questionType: 'Transactional / Persuasive Writing',
      taskDescription:
        'Choose one of the following tasks. Write approximately 300-400 words. Possible forms include: letter, article, speech, review, report, or essay.',
      totalMarks: 20,
      assessmentObjectives: [
        scaleAO(ao5Writing, 12, 12 / 20),
        scaleAO(ao6TechnicalAccuracy, 8, 8 / 20),
      ],
      examinerNotes:
        'AO5 is marked out of 12, AO6 out of 8. Reward awareness of form conventions, rhetorical skill and clear sense of purpose and audience.',
    },
    {
      id: 'B2',
      questionType: 'Transactional / Persuasive Writing',
      taskDescription:
        'Choose one of the following tasks. Write approximately 300-400 words. A different form from B1 is required.',
      totalMarks: 20,
      assessmentObjectives: [
        scaleAO(ao5Writing, 12, 12 / 20),
        scaleAO(ao6TechnicalAccuracy, 8, 8 / 20),
      ],
      examinerNotes:
        'AO5 is marked out of 12, AO6 out of 8. Candidates must use a different form from B1. Reward appropriate register and structural control.',
    },
  ],
}
