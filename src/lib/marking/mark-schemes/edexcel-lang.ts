// ─── Edexcel GCSE English Language (1EN0) ────────────────────────────────────
//
// REBUILT 19 September 2026. THE DEFECT THIS REPLACES
//
// This file was AQA's paper with Edexcel's totals written on it. Its own header
// said so:
//
//   Paper 1: Q1 AO1 4 + Q2 AO2 8 + Q3 AO2 8 + Q4 AO4 20 + Q5 AO5 16 + AO6 8
//   Paper 2: Q1 4 + Q2 8 + Q3 12 + Q4 16 + Q5 (16+12) + Q6 (16+12)
//
// That is the AQA 8700 shape. Pearson's 1EN0 specification gives:
//
//   Paper 1 (Fiction and Imaginative Writing, 64 marks)
//     Q1   1  AO1      Q2   2  AO1      Q3   6  AO2      Q4  15  AO4
//     Q5 or Q6 (choice of one): 24 AO5 + 16 AO6 = 40
//
//   Paper 2 (Non-fiction and Transactional Writing, 96 marks)
//     Q1   2  AO1      Q2   2  AO1      Q3  15  AO2      Q4   1  AO1
//     Q5   1  AO1      Q6  15  AO4      Q7a  6  AO1      Q7b 14  AO3
//     Q8 or Q9 (choice of one): 24 AO5 + 16 AO6 = 40
//
// Reading is 56 marks and writing 40 on Paper 2, not the other way round.
//
// The six qualification AO totals reconcile exactly against the specification's
// own breakdown table, which is the check that this structure is right:
//
//   AO1 15 = 1 + 2 (P1) + 2 + 2 + 1 + 1 + 6 (P2)
//   AO2 21 = 6 (P1 Q3) + 15 (P2 Q3)
//   AO3 14 = 14 (P2 Q7b)
//   AO4 30 = 15 (P1 Q4) + 15 (P2 Q6)
//   AO5 48 = 24 + 24        AO6 32 = 16 + 16      TOTAL 160
//
// WHY IT MATTERED: Edexcel is the second GCSE cohort in England and the board
// most often chosen by the academies a solo teacher works in. Until today the
// product marked their students against 8-mark language questions that are 6
// marks on their paper, and a 20-mark Q4 that is 15. The product's own public
// pages already stated the correct Paper 1 tariffs (1, 2, 6, 15), so the site
// contradicted its own marking engine.
//
// WHAT IS AND IS NOT SOURCED
//
// The question structure, tariffs and AO allocations above are the
// specification's own and reconcile exactly. The level DESCRIPTORS below are
// written in Pearson's ladder lexis but are not transcribed verbatim from the
// published mark schemes, and the band widths follow Pearson's generic shapes
// (Q3 three levels of two, the 15-mark questions five levels of three, AO5 and
// AO6 five levels each) rather than a document checked line by line.
//
// So this scheme is deliberately NOT in src/lib/marking/examiner/verification.ts
// and derives as `unverified-grid`: the examiner tool badges it red, the prompt
// tells the model to disclose it, and the student picker warns before use.
// Promoting it is EXAM-2's job and needs the four published mark schemes
// (1EN0/01 and 1EN0/02) checked line by line by a person.
//
// Sources for the structure:
//   https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-language-2015.html
//   1EN0 specification Issue 6 (August 2024), "Breakdown of Assessment
//   Objectives by component".
// ────────────────────────────────────────────────────────────────────────────

import type { AssessmentObjective, BandDescriptor, MarkScheme } from './types'

/**
 * Build a contiguous level ladder over `max` marks.
 *
 * Pearson's generic grids divide the mark range into equal levels, so the
 * ranges are computed rather than typed: a hand-typed ladder is how the
 * corpus acquired overlapping and gapped bands elsewhere. The last level
 * always ends on `max`, so the top mark is always awardable.
 */
function ladder(
  max: number,
  levels: readonly { label: string; descriptor: string; indicators: readonly string[] }[],
): BandDescriptor[] {
  const n = levels.length
  const out: BandDescriptor[] = []
  let lo = 1
  for (let i = 0; i < n; i++) {
    // Spread any remainder across the lower levels, which is how Pearson's
    // uneven grids (14 marks over five levels) actually sit.
    const hi = i === n - 1 ? max : Math.round(((i + 1) * max) / n)
    const l = levels[i]!
    out.push({
      band: `Level ${i + 1}`,
      minMarks: lo,
      maxMarks: hi,
      label: l.label,
      descriptor: l.descriptor,
      indicators: l.indicators,
    })
    lo = hi + 1
  }
  return out
}

// ─── Reading objectives ─────────────────────────────────────────────────────

const AO1_DESC =
  'Identify and interpret explicit and implicit information and ideas; select and synthesise evidence from different texts.'
const AO2_DESC =
  'Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views.'
const AO3_DESC =
  "Compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts."
const AO4_DESC = 'Evaluate texts critically and support this with appropriate textual references.'
const AO5_DESC =
  'Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences; organise information and ideas, using structural and grammatical features to support coherence and cohesion.'
const AO6_DESC =
  'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.'

/** AO1 short-answer retrieval. One object per question, because the tariffs differ. */
function ao1Retrieval(max: number, paperMax: number): AssessmentObjective {
  return {
    id: 'AO1',
    label: 'AO1 - Identify and interpret',
    description: AO1_DESC,
    maxMarks: max,
    weighting: max / paperMax,
    // One mark per acceptable point, so no levelled grid. Two bands keep the
    // shape the type requires without implying a ladder that does not exist.
    bands: [
      {
        band: 'Level 1',
        minMarks: 1,
        maxMarks: max,
        label: 'Points credited',
        descriptor: `One mark for each acceptable point drawn from the specified lines, to a maximum of ${max}.`,
        indicators: [
          'The point comes from the lines named in the question',
          'The point is distinct from one already credited',
        ],
      },
    ],
  }
}

/** AO2 language analysis. Paper 1 Q3 is 6 marks; Paper 2 Q3 is 15. */
function ao2Language(max: number, paperMax: number, levels: 3 | 5): AssessmentObjective {
  const three = [
    {
      label: 'Basic',
      descriptor:
        'Basic identification of language features with little or no comment on effect. Little or no use of subject terminology.',
      indicators: ['Names a device without explaining its effect', 'Textual reference is thin'],
    },
    {
      label: 'Some understanding',
      descriptor:
        'Some understanding of how language is used to achieve effects. Some accurate use of subject terminology.',
      indicators: ['Comments briefly on the effect of a choice', 'Uses relevant quotation'],
    },
    {
      label: 'Clear analysis',
      descriptor:
        'Clear analysis of how language is used to achieve effects, supported by well-chosen references. Accurate and relevant subject terminology.',
      indicators: [
        'Explains how the choice works on the reader',
        'Terminology is embedded and purposeful',
      ],
    },
  ]
  const five = [
    ...three.slice(0, 3),
    {
      label: 'Thorough analysis',
      descriptor:
        'Thorough analysis of language and structure, exploring how choices shape meaning across the text. Terminology is precise.',
      indicators: [
        'Connects choices across the whole text',
        'Discriminates between similar techniques',
      ],
    },
    {
      label: 'Perceptive analysis',
      descriptor:
        'Perceptive, detailed analysis of layered meanings and the cumulative effect of the writer&#39;s choices. Terminology is used with precision throughout.',
      indicators: [
        'Analyses connotation and implication, not only device',
        'References are exact and integrated',
      ],
    },
  ]
  return {
    id: 'AO2',
    label: 'AO2 - Analyse language and structure',
    description: AO2_DESC,
    maxMarks: max,
    weighting: max / paperMax,
    bands: ladder(max, levels === 3 ? three : five),
  }
}

/** AO3 comparison of ideas and perspectives across two texts. Paper 2 Q7b, 14 marks. */
function ao3Comparison(max: number, paperMax: number): AssessmentObjective {
  return {
    id: 'AO3',
    label: "AO3 - Compare writers' ideas and perspectives",
    description: AO3_DESC,
    maxMarks: max,
    weighting: max / paperMax,
    bands: ladder(max, [
      {
        label: 'Basic',
        descriptor:
          'Basic comparison of ideas or perspectives. Points are largely about one text at a time.',
        indicators: ['Describes each text in turn', 'Little comparative language'],
      },
      {
        label: 'Some comparison',
        descriptor:
          'Some comparison of ideas and perspectives, with some comment on how they are conveyed.',
        indicators: ['Some linking of the two texts', 'Some supporting reference'],
      },
      {
        label: 'Clear comparison',
        descriptor:
          'Clear comparison of ideas and perspectives and of the methods used to convey them, supported by relevant references from both texts.',
        indicators: ['Sustains comparison across the response', 'Both texts are evidenced'],
      },
      {
        label: 'Thorough comparison',
        descriptor:
          'Thorough comparison, examining similarity and difference in perspective and in the means of conveying it.',
        indicators: ['Weighs the two perspectives against each other', 'References are apt'],
      },
      {
        label: 'Perceptive comparison',
        descriptor:
          'Perceptive comparison that discriminates between the writers&#39; positions and the effects of their methods.',
        indicators: ['Comparison drives the argument', 'Evidence is precise and integrated'],
      },
    ]),
  }
}

/** AO4 critical evaluation. Paper 1 Q4 and Paper 2 Q6 are 15 marks each. */
function ao4Evaluation(max: number, paperMax: number): AssessmentObjective {
  return {
    id: 'AO4',
    label: 'AO4 - Evaluate critically',
    description: AO4_DESC,
    maxMarks: max,
    weighting: max / paperMax,
    bands: ladder(max, [
      {
        label: 'Basic',
        descriptor:
          'Basic evaluation of the text, with assertion rather than judgement. Textual reference is limited.',
        indicators: ['Agrees or disagrees without reasons', 'Retells rather than evaluates'],
      },
      {
        label: 'Some evaluation',
        descriptor:
          'Some evaluation supported by textual reference, with some awareness of the writer at work.',
        indicators: ['Offers a view and part-supports it', 'Some relevant quotation'],
      },
      {
        label: 'Clear evaluation',
        descriptor:
          'Clear and relevant evaluation of the text, supported by appropriate references, showing understanding of the writer&#39;s methods.',
        indicators: [
          'Responds to the statement in the question',
          'References chosen to support judgement',
        ],
      },
      {
        label: 'Thorough evaluation',
        descriptor:
          'Thorough evaluation, sustained across the section named in the question, with well-selected references.',
        indicators: ['Evaluates method as well as content', 'Judgement is consistent'],
      },
      {
        label: 'Perceptive evaluation',
        descriptor:
          'Perceptive, critical evaluation of how the writer achieves effects, with precisely chosen references.',
        indicators: [
          'Discriminating judgement on the writer&#39;s choices',
          'Argument is cumulative',
        ],
      },
    ]),
  }
}

// ─── Writing objectives ─────────────────────────────────────────────────────

/** AO5 communication and organisation. 24 marks on both papers. */
function ao5Writing(max: number, paperMax: number): AssessmentObjective {
  return {
    id: 'AO5',
    label: 'AO5 - Communicate and organise',
    description: AO5_DESC,
    maxMarks: max,
    weighting: max / paperMax,
    bands: ladder(max, [
      {
        label: 'Basic',
        descriptor:
          'Basic communication with limited awareness of purpose, form or audience. Little structural control.',
        indicators: ['Register is not adapted', 'Ideas are listed rather than organised'],
      },
      {
        label: 'Some control',
        descriptor:
          'Some communication of ideas with some awareness of purpose, form and audience. Some structural features used.',
        indicators: ['Attempts the form asked for', 'Paragraphs are present but uneven'],
      },
      {
        label: 'Clear control',
        descriptor:
          'Clear, effective communication, with tone, style and register adapted to purpose, form and audience. Coherent organisation.',
        indicators: ['Form and register sustained', 'Paragraphing supports the argument'],
      },
      {
        label: 'Thorough control',
        descriptor:
          'Thoroughly effective communication, with well-judged adaptation of tone and style and a clear structural design.',
        indicators: ['Openings and endings are deliberate', 'Cohesive devices are varied'],
      },
      {
        label: 'Perceptive control',
        descriptor:
          'Communication is convincing and consistently controlled; structure is shaped for effect throughout.',
        indicators: ['Structure serves meaning', 'Voice is assured and sustained'],
      },
    ]),
  }
}

/** AO6 vocabulary, sentence structures and technical accuracy. 16 marks. */
function ao6Technical(max: number, paperMax: number): AssessmentObjective {
  return {
    id: 'AO6',
    label: 'AO6 - Vocabulary, sentences and accuracy',
    description: AO6_DESC,
    maxMarks: max,
    weighting: max / paperMax,
    bands: ladder(max, [
      {
        label: 'Basic',
        descriptor:
          'Simple vocabulary and sentence structures. Frequent errors in spelling and punctuation that impede meaning.',
        indicators: ['Sentence demarcation is unreliable', 'Vocabulary is repetitive'],
      },
      {
        label: 'Some range',
        descriptor:
          'Some range of vocabulary and sentence structures. Errors are noticeable but meaning is usually clear.',
        indicators: ['Some variety of sentence opening', 'Common words mostly spelt correctly'],
      },
      {
        label: 'Clear range',
        descriptor:
          'A clear range of vocabulary and sentence structures used for effect. Spelling and punctuation are generally accurate.',
        indicators: ['Sentence forms are varied purposefully', 'Punctuation is mostly secure'],
      },
      {
        label: 'Wide range',
        descriptor:
          'A wide range of vocabulary and sentence structures chosen for clarity, purpose and effect. Accuracy is secure.',
        indicators: ['Ambitious vocabulary used precisely', 'A range of punctuation used well'],
      },
      {
        label: 'Extensive range',
        descriptor:
          'Extensive and ambitious vocabulary and a full range of sentence structures, with consistently accurate spelling and punctuation.',
        indicators: ['Errors are rare and do not impede', 'Choices are consistently deliberate'],
      },
    ]),
  }
}

// ─── Paper 1: Fiction and Imaginative Writing (64 marks) ─────────────────────

const P1 = 64

export const edexcelLangPaper1: MarkScheme = {
  id: 'edexcel-lang-paper1',
  board: 'Edexcel',
  subject: 'English Language',
  paper: 'Paper 1',
  title: 'Fiction and Imaginative Writing',
  totalMarks: P1,
  durationMinutes: 105,
  version: '1EN0/01',
  sourceUrl:
    'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-language-2015.html',
  questions: [
    {
      id: 'Q1',
      questionType: 'Information retrieval',
      taskDescription:
        'From lines named in the question, identify one piece of explicit information. 1 mark.',
      totalMarks: 1,
      assessmentObjectives: [ao1Retrieval(1, P1)],
      examinerNotes:
        'One mark for one acceptable point. Nothing is deducted for additional wrong material offered alongside a correct answer.',
    },
    {
      id: 'Q2',
      questionType: 'Information retrieval',
      taskDescription: 'From the lines named in the question, give two pieces of information.',
      totalMarks: 2,
      assessmentObjectives: [ao1Retrieval(2, P1)],
      examinerNotes: 'One mark per acceptable point. Points must be distinct from one another.',
    },
    {
      id: 'Q3',
      questionType: 'Language and structure analysis',
      taskDescription:
        'Analyse how the writer uses language and structure in the named lines to achieve effects.',
      totalMarks: 6,
      assessmentObjectives: [ao2Language(6, P1, 3)],
      examinerNotes:
        'Three levels of two marks. Reward analysis of effect rather than identification of device.',
    },
    {
      id: 'Q4',
      questionType: 'Critical evaluation',
      taskDescription:
        'Evaluate how successfully the writer achieves a stated effect in a named section of the text, supporting your views with detailed reference.',
      totalMarks: 15,
      assessmentObjectives: [ao4Evaluation(15, P1)],
      examinerNotes:
        'Five levels of three marks. The question names a section; material from outside it is not rewarded.',
    },
    {
      id: 'Q5/Q6',
      questionType: 'Imaginative writing (choice of one)',
      taskDescription:
        'Answer ONE of the two imaginative writing tasks. AO5 is marked out of 24 and AO6 out of 16, levelled separately and summed.',
      totalMarks: 40,
      assessmentObjectives: [ao5Writing(24, P1), ao6Technical(16, P1)],
      examinerNotes:
        'The candidate answers one task, not both. Mark the one attempted; where both are attempted, mark the better and say so.',
    },
  ],
}

// ─── Paper 2: Non-fiction and Transactional Writing (96 marks) ───────────────

const P2 = 96

export const edexcelLangPaper2: MarkScheme = {
  id: 'edexcel-lang-paper2',
  board: 'Edexcel',
  subject: 'English Language',
  paper: 'Paper 2',
  title: 'Non-fiction and Transactional Writing',
  totalMarks: P2,
  durationMinutes: 125,
  version: '1EN0/02',
  sourceUrl:
    'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-language-2015.html',
  questions: [
    {
      id: 'Q1',
      questionType: 'Information retrieval (Text 1)',
      taskDescription: 'From the named lines of Text 1, give two pieces of information.',
      totalMarks: 2,
      assessmentObjectives: [ao1Retrieval(2, P2)],
      examinerNotes: 'One mark per acceptable point.',
    },
    {
      id: 'Q2',
      questionType: 'Information retrieval (Text 1)',
      taskDescription: 'From the named lines of Text 1, give two further pieces of information.',
      totalMarks: 2,
      assessmentObjectives: [ao1Retrieval(2, P2)],
      examinerNotes: 'One mark per acceptable point.',
    },
    {
      id: 'Q3',
      questionType: 'Language and structure analysis (Text 1)',
      taskDescription:
        'Analyse how the writer of Text 1 uses language and structure to achieve effects.',
      totalMarks: 15,
      assessmentObjectives: [ao2Language(15, P2, 5)],
      examinerNotes: 'Five levels of three marks.',
    },
    {
      id: 'Q4',
      questionType: 'Information retrieval (Text 2)',
      taskDescription: 'From the named lines of Text 2, give one piece of information.',
      totalMarks: 1,
      assessmentObjectives: [ao1Retrieval(1, P2)],
      examinerNotes: 'One mark for one acceptable point.',
    },
    {
      id: 'Q5',
      questionType: 'Information retrieval (Text 2)',
      taskDescription: 'From the named lines of Text 2, give one further piece of information.',
      totalMarks: 1,
      assessmentObjectives: [ao1Retrieval(1, P2)],
      examinerNotes: 'One mark for one acceptable point.',
    },
    {
      id: 'Q6',
      questionType: 'Critical evaluation (Text 2)',
      taskDescription:
        'Evaluate how successfully the writer of Text 2 achieves a stated effect, supporting your views with detailed reference.',
      totalMarks: 15,
      assessmentObjectives: [ao4Evaluation(15, P2)],
      examinerNotes: 'Five levels of three marks.',
    },
    {
      id: 'Q7a',
      questionType: 'Synthesis across both texts',
      taskDescription:
        'Using both texts, identify and synthesise the similarities or differences the question names.',
      totalMarks: 6,
      assessmentObjectives: [ao1Retrieval(6, P2)],
      examinerNotes:
        'Reward points drawn from both texts. A point supported from one text only is still creditable where the question allows.',
    },
    {
      id: 'Q7b',
      questionType: "Comparison of writers' ideas and perspectives",
      taskDescription:
        'Compare how the writers of Text 1 and Text 2 present their ideas and perspectives, and how these are conveyed.',
      totalMarks: 14,
      assessmentObjectives: [ao3Comparison(14, P2)],
      examinerNotes:
        'Both texts must be addressed. A response on one text alone is capped in the lowest level that its quality allows.',
    },
    {
      id: 'Q8/Q9',
      questionType: 'Transactional writing (choice of one)',
      taskDescription:
        'Answer ONE of the two transactional writing tasks. AO5 is marked out of 24 and AO6 out of 16, levelled separately and summed.',
      totalMarks: 40,
      assessmentObjectives: [ao5Writing(24, P2), ao6Technical(16, P2)],
      examinerNotes:
        'The candidate answers one task, not both. A response in the wrong form is not over-penalised: it loses the form marks within AO5 and nothing further.',
    },
  ],
}
