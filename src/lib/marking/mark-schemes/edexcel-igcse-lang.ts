// ─── Edexcel International GCSE English Language A (4EA1) Mark Scheme ─────────
// Paper 1 (4EA1/01): Non-fiction Texts and Transactional Writing - 2h15, 90 marks.
//   Section A - Reading (45 marks)
//     Q1  AO1  2   - retrieval from Text One (point-marked, no levels)
//     Q2  AO1  4   - explain in own words, Text One (point-marked, no levels)
//     Q3  AO1  5   - explain or describe, Text One (point-marked, no levels)
//     Q4  AO2  12  - language & structure analysis, Text Two (5-level grid)
//
//   Text One is always the unseen extract and Text Two always the Part 1
//   anthology text: Q1-Q3 are on Text One, Q4 on Text Two, Q5 compares them.
//   CORRECTED 26 September 2026 against every 4EA1/01 paper, mark scheme and
//   examiners' report Pearson publishes from the 2016 SAMs to Summer 2026 (the
//   June 2019 report: Q4 "will always be on Text Two, the Anthology text").
//   Until then this file put Q3 on Text Two, restricted Q4 to "the specified
//   lines" (Q4 has no line range; the whole extract is in scope, and answers
//   were being told material from elsewhere was not credited), and its Q4 grid
//   sat one level out: its Level 4 described Pearson's Level 3, so a clear but
//   not thorough answer was marked 8-10 where Pearson marks it 5-7.
//     Q5  AO3  22  - comparison of both texts (5-level grid)
//   Section B - Transactional Writing (45 marks) - answer ONE of Q6/Q7
//     AO4 27 + AO5 18 (both 5-level grids; identical for Q6 and Q7)
//
// Assessment-objective definitions are the official 4EA1 AOs. Band/level
// descriptors are summarised IN OUR OWN WORDS from the publicly available
// Edexcel generic level grids and the official 4EA1/01 mark scheme; the mark
// boundaries are exact. examinerNotes encode the operational marking rules
// (point marking for Q1-Q3; the Q5 single-text cap; best-fit for the level
// grids).
//
// CORRECTED 24 October 2026, three smaller differences from Pearson, which the
// guide to this paper found. Every tariff, objective split and level range
// already agreed and is unchanged.
//   - Q1 to Q3 were scored on two bands of this file's own, 'Partial' and
//     'Secure' (Q1 1 and 2, Q2 1-2 and 3-4, Q3 1-2 and 3-5), describing "some"
//     and "most or all" of the available points. Pearson marks them one mark
//     per valid point, with no levels: the rule is a count. Each is now one
//     band covering the whole tariff, named for what it is, and the notes say
//     exactly how the marks are given.
//   - Q3 capped an answer that only selected quotations at 1 mark. Pearson's
//     sample assessment materials (Issue 4) and the June 2024, November 2024
//     and June 2025 mark schemes have no such cap; the June 2025 examiners'
//     report says only that quotations without explanation are not enough.
//     This header said the cap came from standardisation guidance, which is
//     not public. The notes now say what that report and Pearson's exemplar
//     commentaries describe: a quotation with no explanation earns
//     nothing for that point, and every valid point still earns its mark
//     (the examiner tool's pack, src/lib/marking/examiner/packs/
//     pearson-igcse-english-a-paper1.ts, applies the same rule). The
//     calibration anchors for this paper
//     (src/lib/marking/calibration/edexcel-igcse-lang-paper1.ts) still state
//     the cap, citing the June 2026 standardisation pack; this change does not
//     touch them, and they need reconciling with that pack.
//   - The Q6 task gave "report" among its example forms. Since the November
//     2025 series Pearson sets only the six forms of specification Issue 7,
//     and a report is not one of them; the task now lists the six.
// The figures come from the guide, src/data/mark-scheme-guides/
// edexcel-igcse-lang-paper1.ts, written and then checked by a second reader
// against Pearson's specification (Issue 7, August 2025), sample assessment
// materials (Issue 4, July 2025) and June 2025 question paper, mark scheme
// (4EA1_01_2506_MS) and examiners' report (4EA1_01_2506_ER). The founder
// approved changing the marker on 24 October 2026 (document 30).
// src/lib/marking/mark-schemes/__tests__/edexcel-igcse-structure.test.ts
// holds this file to the guide.
//
// Sources:
//   https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-english-language-a-2016.coursematerials.html
//   4EA1/01 mark scheme (Pearson Edexcel International GCSE English Language A)
//   4EA1 specification, Issue 7 (August 2025); sample assessment materials,
//   Issue 4 (July 2025); June 2025 Paper 1 mark scheme and examiners' report.
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

// ─── Point-marked reading questions (Q1-Q3) ─────────────────────────────────
// Pearson marks Q1 to Q3 one mark per valid point, up to the question's
// maximum, with no levels. Each has ONE band covering the whole tariff, so
// there is no level to place an answer in, only points to count; the
// question's examinerNotes say exactly what earns a mark. One band also keeps
// the examiner tool's derived pack treating these as points-counted questions
// (src/lib/marking/examiner/packs/derive.ts: fewer than three bands).
//
// Until 24 October 2026 these were two bands of this file's own, 'Partial'
// and 'Secure', which described "some" and "most or all" of the available
// points where Pearson's rule is a count.
function pointMarked(max: number, point: string, indicators: string[]): BandDescriptor[] {
  return [
    {
      band: 'Point-marked',
      minMarks: 1,
      maxMarks: max,
      label: `One mark per ${point}, up to ${max}`,
      descriptor: `No levels: one mark for each ${point}, up to ${max}. Nothing is deducted, and anything beyond ${max} earns nothing more.`,
      indicators,
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
    // The level words below (some, clear, thorough, perceptive) are Pearson's
    // own; everything around them is ours. See the header for what was wrong.
    band: 'Level 2',
    minMarks: 3,
    maxMarks: 4,
    label: 'Some',
    descriptor:
      'Some understanding of, and comment on, how the writer uses language and structure (including vocabulary) to achieve effects. References are valid but not developed.',
    indicators: ['Comments on the effect of named features', 'Valid references, not developed'],
  },
  {
    band: 'Level 3',
    minMarks: 5,
    maxMarks: 7,
    label: 'Clear',
    descriptor:
      'Clear understanding and explanation of how language and structure (including vocabulary and sentence structure) achieve effects. References are appropriate and relevant.',
    indicators: [
      'Explains how language and structure create effects',
      'Appropriate, relevant references',
    ],
  },
  {
    band: 'Level 4',
    minMarks: 8,
    maxMarks: 10,
    label: 'Thorough',
    descriptor:
      'Thorough understanding and exploration of how language and structure (including vocabulary, sentence structure and other language features) achieve effects. References are detailed and fully support the points made.',
    indicators: [
      'Explores method and effect across the extract',
      'Detailed references that fully support each point',
    ],
  },
  {
    band: 'Level 5',
    minMarks: 11,
    maxMarks: 12,
    label: 'Perceptive',
    descriptor:
      'Perceptive understanding and analysis of how language and structure (including vocabulary, sentence structure and other language features) achieve effects. References are discriminating and sharpen the points made.',
    indicators: [
      'Perceptive analysis of method and effect',
      'Discriminating references that clarify each point',
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
        'From the lines of Text One the question gives, pick out the two words or short phrases it asks for.',
      totalMarks: 2,
      assessmentObjectives: [
        ao(
          'AO1',
          'AO1 - Read and understand',
          2,
          2,
          pointMarked(2, 'correct word or phrase', [
            'Each word or phrase comes from inside the given lines of Text One',
            'Each fits exactly what the question asks for',
            'Explanation is not needed and earns nothing extra',
          ]),
        ),
      ],
      examinerNotes:
        'Point-marked, no levels: one mark for each correct word or short phrase taken from inside the given lines of Text One, up to 2. Nothing from outside the given lines is credited. The question asks for words from the text, so explanation or comment is not needed and earns nothing extra.',
    },
    {
      id: 'Q2',
      questionType: 'Reading: explain in own words (AO1)',
      taskDescription:
        'Explain, in your own words where possible, what you learn about the given subject from the specified lines of Text One.',
      totalMarks: 4,
      assessmentObjectives: [
        ao(
          'AO1',
          'AO1 - Read and understand',
          4,
          4,
          pointMarked(4, 'separate, valid point', [
            'Each point comes from inside the given lines of Text One',
            'Each point is about the subject the question names',
            'A point made twice is counted once',
          ]),
        ),
      ],
      examinerNotes:
        'Point-marked, no levels: one mark for each separate, valid point about the subject the question names, drawn from the given lines of Text One, up to 4. The question asks for own words, which show understanding; credit a valid point where the understanding is clear. A point made twice counts once, and points from outside the given lines earn nothing.',
    },
    {
      id: 'Q3',
      questionType: 'Reading: select and explain (AO1)',
      // The papers ask the candidate to explain or to describe (the sample
      // assessment materials' Question 3 asks for a description). The notes
      // carried a cap of 1 mark for an answer that only selects quotations
      // until 24 October 2026; Pearson's sample assessment materials and its
      // 2024 and 2025 mark schemes have none (see the header).
      taskDescription:
        'From the lines of Text One the question gives, explain or describe what it asks about, such as what you learn about a person or what happens to them. You may support your points with brief quotations.',
      totalMarks: 5,
      assessmentObjectives: [
        ao(
          'AO1',
          'AO1 - Read and understand',
          5,
          5,
          pointMarked(5, 'separate, valid point', [
            'Each point comes from inside the given lines of Text One',
            'Each point explains or describes, not only quotes',
            'A point made twice is counted once',
          ]),
        ),
      ],
      examinerNotes:
        'Point-marked, no levels: one mark for each separate, valid point that explains or describes what the question asks about, drawn from the given lines of Text One, up to 5. Brief quotations may support the points but are not required. A quotation given with no explanation earns nothing for that point; every other valid point in the answer still earns its mark. A point made twice counts once, and points from outside the given lines earn nothing.',
    },
    {
      id: 'Q4',
      questionType: 'Language and structure analysis (AO2)',
      taskDescription:
        'Analyse how the writer of Text Two, the anthology text, uses language and structure to achieve the effect the question names. The whole extract is in scope. Support your views with close reference to the text, including brief quotations.',
      totalMarks: 12,
      assessmentObjectives: [ao('AO2', 'AO2 - Analyse language and structure', 12, 12, ao2Bands)],
      examinerNotes:
        'Level-marked (best fit) against the AO2 grid. Reward analysis of BOTH language and structure (including vocabulary and sentence structure) and the effects created. Q4 has no line range: credit relevant analysis from anywhere in Text Two. No comparison with Text One is needed.',
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
      // scheme covers either choice. The forms are the six of specification
      // Issue 7, the only ones set since the November 2025 series; until
      // 24 October 2026 the task offered "report", which is not one of them.
      id: 'Q6',
      questionType: 'Transactional writing (AO4 + AO5)',
      taskDescription:
        'Answer ONE of the two transactional writing tasks (Question 6 or Question 7), writing in the form the task names, for its purpose and reader. Since the November 2025 series Pearson sets only six forms: an article for a magazine or newspaper, a speech, a letter, a guide, a review, or the text of a leaflet.',
      totalMarks: 45,
      assessmentObjectives: [
        ao('AO4', 'AO4 - Communicate and adapt', 27, 45, ao4Bands),
        ao('AO5', 'AO5 - Technical accuracy', 18, 45, ao5Bands),
      ],
      examinerNotes:
        'Mark the ONE task the candidate attempted. AO4 (27 marks: communication, and how well form, tone and register suit the purpose and reader) and AO5 (18 marks: vocabulary, sentence structures, paragraphing, spelling, punctuation and grammar) are two separate grids: place the writing on each by best fit, then add the two marks for the Section B total.',
    },
  ],
}

/**
 * Aggregated export of the Edexcel International GCSE English Language A (4EA1)
 * mark scheme(s).
 */
export const edexcelIgcseLangMarkSchemes: readonly MarkScheme[] = [edexcelIgcseLangPaper1]
