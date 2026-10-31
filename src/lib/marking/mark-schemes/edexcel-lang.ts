// ─── Edexcel GCSE English Language (1EN0) ────────────────────────────────────
//
// CORRECTED TO PEARSON'S MARK SCHEMES, 24 October 2026
//
// That day a guide was written for each paper and checked twice, by a writer
// and an independent checker, against Pearson's own documents:
// src/data/mark-scheme-guides/edexcel-lang-paper1.ts and edexcel-lang-paper2.ts,
// which cite the 1EN0/01 and 1EN0/02 mark schemes for Summer 2025
// (1EN0_01_2506_MS, 1EN0_02_2506_MS), the earlier series back to June 2023 and
// the specification, Issue 6 (August 2024). Every question, mark, objective,
// total and duration below already agreed with them. What follows did not, and
// is corrected here to the guides and the mark schemes they cite. Changing it
// changes how essays are scored, so it went to the founder, who approved it on
// 24 October 2026 (document 30: "correct ai markers").
//
// LEVEL RANGES. ladder() used to cut every grid into equal levels, on the
// belief that "Pearson's generic grids divide the mark range into equal
// levels". Three of Pearson's grids do not:
//
//   AO5 (Q5/Q6, Q8/Q9)  was 1-5, 6-10, 11-14, 15-19, 20-24
//                       now 1-4, 5-9, 10-14, 15-19, 20-24
//   AO6 (Q5/Q6, Q8/Q9)  was 1-3, 4-6, 7-10, 11-13, 14-16
//                       now 1-4, 5-7, 8-10, 11-13, 14-16
//   AO3 (Paper 2 Q7b)   was 1-3, 4-6, 7-8, 9-11, 12-14
//                       now 1-2, 3-5, 6-8, 9-11, 12-14
//
// Pearson moved AO6's spare mark from Level 5 to Level 1 from the June 2024
// series (before it: 1-3, 4-6, 7-9, 10-12, 13-16); the computed ladder matched
// neither grid. ladder() now takes the top of each of Pearson's levels, so the
// boundaries are the board's and the ladder is still contiguous by construction.
//
// PAPER 2 QUESTION 7(a) was one band of 1-6 marked a point at a time, its task
// asked for "similarities or differences" and its note said a point from one
// text was "still creditable". Pearson marks it on three levels (1-2, 3-4, 5-6)
// that describe the understanding of SIMILARITIES and how the two texts are
// brought together, and an answer must draw on both texts to earn any mark.
//
// RULES THE MARKER WAS NOT TOLD, now in each question's examinerNotes:
//   Paper 1 Q3   language only, structure only, or unbalanced: no higher than
//                Level 1
//   Paper 2 Q3   language only or structure only: no higher than Level 2; an
//                unbalanced answer cannot reach Level 3
//   P1 Q4, P2 Q6 from Level 2, references to the writer's techniques count only
//                where they support the judgement
//   Paper 2 Q7b  one text considered in detail: no higher than Level 2 (the
//                note said "capped in the lowest level that its quality
//                allows"); an unbalanced answer cannot reach Level 3
//
// PAPER 1 QUESTION 4 told the marker that the question names a section and that
// nothing outside it is rewarded. The June 2023, November 2023, June 2024,
// November 2024 and June 2025 papers all asked about the extract as a whole.
//
// TAKEN OUT, because no board document checked contains them (the guides mark
// each NOT CONFIRMED) and a rule nobody can source should not decide a mark:
//   Paper 1 Q1     "nothing is deducted for wrong material offered alongside a
//                  correct answer"
//   Paper 1 Q5/Q6  "where both are attempted, mark the better and say so"
//   Paper 2 Q8/Q9  "a response in the wrong form ... loses the form marks
//                  within AO5 and nothing further"
//
// ALSO: the level descriptors are rewritten, in our own words, to follow what
// each of Pearson's levels asks for (adapted from the guides' level
// descriptions, which are ours); `weighting` is now each objective's share of
// its QUESTION, as types.ts defines it (it was the share of the paper, so the
// prompt called AO5 "38%" of a writing task where it carries 24 of the 40);
// and a point-marked question's single band is named "Points", because those
// questions have no levels.
//
// STILL NOT VERIFIED BY A PERSON. The figures come from guides checked by two
// agents, not from a person reading the mark schemes line by line, so this
// scheme stays out of src/lib/marking/examiner/verification.ts and derives as
// `unverified-grid`: the examiner tool badges it, the prompt tells the model to
// disclose it, and the student picker warns before use.
//
// THE QUESTIONS (unchanged since 19 September 2026, and confirmed by the guides)
//
//   Paper 1 (Fiction and Imaginative Writing, 64 marks, 1 hour 45 minutes)
//     Q1   1  AO1      Q2   2  AO1      Q3   6  AO2      Q4  15  AO4
//     Q5 or Q6 (choice of one): 24 AO5 + 16 AO6 = 40
//
//   Paper 2 (Non-fiction and Transactional Writing, 96 marks, 2 hours 5 minutes)
//     Q1   2  AO1      Q2   2  AO1      Q3  15  AO2      Q4   1  AO1
//     Q5   1  AO1      Q6  15  AO4      Q7a  6  AO1      Q7b 14  AO3
//     Q8 or Q9 (choice of one): 24 AO5 + 16 AO6 = 40
//
// The six qualification totals reconcile with the specification's breakdown
// table, which is the check that the structure is right:
//
//   AO1 15 = 1 + 2 (P1) + 2 + 2 + 1 + 1 + 6 (P2)
//   AO2 21 = 6 (P1 Q3) + 15 (P2 Q3)
//   AO3 14 = 14 (P2 Q7b)
//   AO4 30 = 15 (P1 Q4) + 15 (P2 Q6)
//   AO5 48 = 24 + 24        AO6 32 = 16 + 16      TOTAL 160
//
// REBUILT 19 September 2026, AND WHY. This file used to be AQA's paper with
// Edexcel's totals written on it (Paper 1: 4, 8, 8, 20 and 24 + 8; Paper 2: 4,
// 8, 12, 16 and two 28-mark writing tasks). Edexcel students were marked
// against 8-mark language questions that are 6 marks on their paper and a
// 20-mark Q4 that is 15, while the product's own public pages already stated
// the correct tariffs. Question ids saved essays use ('Q5/Q6', 'Q8/Q9') have
// not changed since.
//
// Sources:
//   https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-language-2015.html
//   1EN0 specification Issue 6 (August 2024), "Breakdown of Assessment
//   Objectives by component"; 1EN0/01 and 1EN0/02 mark schemes, Summer 2025.
// ────────────────────────────────────────────────────────────────────────────

import type { AssessmentObjective, BandDescriptor, MarkScheme } from './types'

/** What a level says, in our own words. */
interface LevelText {
  label: string
  descriptor: string
  indicators: readonly string[]
}

/** One of Pearson's levels: the top mark of its range, then what it says. */
type Level = readonly [top: number, text: LevelText]

/**
 * A level ladder from the tops of Pearson's levels.
 *
 * Each level starts one mark above the previous level's top, so the ladder is
 * contiguous by construction and starts at 1, and the last top is the grid's
 * maximum. The tops are the board's, typed from its grid: computing them by
 * dividing the marks equally is the defect described at the head of this file.
 */
function ladder(levels: readonly Level[]): BandDescriptor[] {
  const out: BandDescriptor[] = []
  let lo = 1
  levels.forEach(([top, text], i) => {
    out.push({ band: `Level ${i + 1}`, minMarks: lo, maxMarks: top, ...text })
    lo = top + 1
  })
  return out
}

/**
 * A levelled objective. Its marks are the top of its last level, so the grid
 * always reaches the marks it claims; `weighting` is its share of the question.
 */
function grid(
  id: string,
  label: string,
  description: string,
  questionMarks: number,
  levels: readonly Level[],
): AssessmentObjective {
  const bands = ladder(levels)
  const maxMarks = bands[bands.length - 1]!.maxMarks
  return { id, label, description, maxMarks, weighting: maxMarks / questionMarks, bands }
}

// ─── Reading objectives ─────────────────────────────────────────────────────
// The objectives' statements are the specification's; everything else is ours.

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

/**
 * AO1 short-answer retrieval: a mark for each acceptable answer, no levels.
 * The single band is the shape the type requires; it is named "Points", not
 * "Level 1", because these questions have no levels.
 */
function ao1Retrieval(max: number): AssessmentObjective {
  return {
    id: 'AO1',
    label: 'AO1 - Identify and interpret',
    description: AO1_DESC,
    maxMarks: max,
    weighting: 1,
    bands: [
      {
        band: 'Points',
        minMarks: 1,
        maxMarks: max,
        label: 'One mark per acceptable answer',
        descriptor: `One mark for each acceptable answer drawn from the lines the question names, to a maximum of ${max}.`,
        indicators:
          max > 1
            ? [
                'Each answer comes from the named lines',
                'Each answer is different from one already credited',
              ]
            : ['The answer comes from the named lines'],
      },
    ],
  }
}

/** Paper 1 Question 3: three levels of two marks, both language and structure from Level 2. */
const P1_Q3_LEVELS: readonly Level[] = [
  [
    2,
    {
      label: 'Comment',
      descriptor:
        'Comments on the language or the structure of the section, with relevant references that are not developed; points are explained only briefly.',
      indicators: [
        'A few points on the writing, each briefly explained',
        'Quotations are relevant but not explored',
        'An answer on language only, or structure only, stays in this level',
      ],
    },
  ],
  [
    4,
    {
      label: 'Explanation',
      descriptor:
        'Explains how both the language and the structure of the section create effects on the reader, with references that fit the points being made.',
      indicators: [
        'Covers both language and structure',
        'Each reference is followed by its effect',
        'Subject terms used accurately where they help',
      ],
    },
  ],
  [
    6,
    {
      label: 'Analysis',
      descriptor:
        'Analyses closely how both the language and the structure work on the reader, with detailed, well-chosen references that sharpen every point.',
      indicators: [
        'Close analysis of word choices and of structural choices',
        'References are precise and back every point',
      ],
    },
  ],
]

/** Paper 2 Question 3: five levels of three marks, both language and structure from Level 3. */
const P2_Q3_LEVELS: readonly Level[] = [
  [
    3,
    {
      label: 'Limited comment',
      descriptor:
        'Says a little about the text and identifies some features, with few references and little sense of their effect.',
      indicators: ['Features are named rather than explained', 'References are thin'],
    },
  ],
  [
    6,
    {
      label: 'Comment',
      descriptor:
        'Comments on how the writing works, with references that fit but are not explored. An answer on language only, or structure only, goes no higher than this level.',
      indicators: ['Some comment on effect', 'Quotations are relevant but undeveloped'],
    },
  ],
  [
    9,
    {
      label: 'Explanation',
      descriptor:
        'Explains how both the language and the structure create effects on the reader, with well-matched references and relevant subject terms.',
      indicators: [
        'Both language and structure are covered',
        'Effects are explained, not only named',
      ],
    },
  ],
  [
    12,
    {
      label: 'Exploration',
      descriptor:
        'Explores both the language and the structure in detail, with plenty of well-chosen references supporting each point.',
      indicators: [
        "Connects the writer's choices across the text",
        'Terminology is accurate and purposeful',
      ],
    },
  ],
  [
    15,
    {
      label: 'Insightful analysis',
      descriptor:
        'Analyses both the language and the structure with insight, using carefully selected references that sharpen every point.',
      indicators: [
        "Layered readings of the writer's choices",
        'References are exact and integrated',
      ],
    },
  ],
]

/**
 * Paper 1 Question 4 and Paper 2 Question 6: five levels of three marks. From
 * Level 2, a technique counts only where it supports the judgement.
 */
const EVALUATION_LEVELS: readonly Level[] = [
  [
    3,
    {
      label: 'Description',
      descriptor:
        'Mostly describes the content of the text. Views are given without reasons, and references are few.',
      indicators: ['Retells rather than evaluates', 'Opinions are asserted, not supported'],
    },
  ],
  [
    6,
    {
      label: 'Simple judgement',
      descriptor:
        'Comments on the content and offers simple judgements, supported by references that fit but are not explored.',
      indicators: [
        'A view is given and partly supported',
        'A technique counts only where it supports the judgement',
      ],
    },
  ],
  [
    9,
    {
      label: 'Reasoned judgement',
      descriptor:
        'Explains how the writing creates the effect the question names and gives a reasoned view of how well it works, with suitable references.',
      indicators: [
        'Responds to the effect the question names',
        'References are chosen to back the judgement',
      ],
    },
  ],
  [
    12,
    {
      label: 'Developed judgement',
      descriptor:
        'Analyses the text and develops a well-argued judgement of how successful it is, with detailed references supporting every point.',
      indicators: [
        'The judgement is sustained across the answer',
        "The writer's methods are discussed as evidence for the judgement",
      ],
    },
  ],
  [
    15,
    {
      label: 'Critical judgement',
      descriptor:
        'Evaluates the text as a whole with a consistent, thoughtful judgement, and every reference is chosen to make the argument convincing.',
      indicators: [
        'A discriminating view of how far the writer succeeds',
        'The argument builds from point to point',
      ],
    },
  ],
]

/** Paper 2 Question 7(a): three levels of two marks, on similarities drawn from both texts. */
const Q7A_LEVELS: readonly Level[] = [
  [
    2,
    {
      label: 'Limited synthesis',
      descriptor:
        'Identifies one or two similarities between the texts but links them only loosely, with little evidence from either.',
      indicators: [
        'Similarities are stated in general terms',
        'Evidence is thin, or comes mostly from one text',
      ],
    },
  ],
  [
    4,
    {
      label: 'Sound synthesis',
      descriptor:
        'Identifies sensible similarities and brings the two texts together clearly, with suitable evidence, though one text may receive more attention than the other.',
      indicators: [
        'Each point names something the texts share',
        'Evidence is given from both texts',
      ],
    },
  ],
  [
    6,
    {
      label: 'Detailed synthesis',
      descriptor:
        'Identifies well-observed similarities and combines the two texts throughout, with well-chosen evidence from both.',
      indicators: [
        'Every point draws on both texts',
        'The evidence is apt and brought together, not listed text by text',
      ],
    },
  ],
]

/** Paper 2 Question 7(b): Pearson's five levels, 1-2, 3-5, 6-8, 9-11, 12-14. */
const Q7B_LEVELS: readonly Level[] = [
  [
    2,
    {
      label: 'Little comparison',
      descriptor:
        "Describes what each text is about with little real comparison of the writers' ideas, and few references.",
      indicators: ['Each text is dealt with separately', 'Little comparative language'],
    },
  ],
  [
    5,
    {
      label: 'Obvious comparisons',
      descriptor:
        "Makes the more obvious comparisons and comments on the writers' views, with references that fit but are not explored. An answer that considers only one text in detail goes no higher than this level.",
      indicators: ['Some links between the texts', 'Views are identified rather than explained'],
    },
  ],
  [
    8,
    {
      label: 'Clear comparison',
      descriptor:
        "Makes a range of comparisons and explains each writer's ideas and perspectives and how they are conveyed, with well-matched references from both texts.",
      indicators: ['Comparison is sustained across the answer', 'Both texts are evidenced'],
    },
  ],
  [
    11,
    {
      label: 'Developed comparison',
      descriptor:
        'Compares the texts on many points and explores how each writer conveys their perspective, with references drawn evenly from both.',
      indicators: [
        'Weighs the two perspectives against each other',
        'Methods are compared as well as ideas',
      ],
    },
  ],
  [
    14,
    {
      label: 'Perceptive comparison',
      descriptor:
        'Compares the texts in depth and from many angles, analysing how each writer conveys their perspective, with precisely chosen evidence from both.',
      indicators: ['Comparison drives the whole argument', 'Evidence is precise and balanced'],
    },
  ],
]

// ─── Writing objectives ─────────────────────────────────────────────────────

/** AO5 on both papers: Pearson's five levels, 1-4, 5-9, 10-14, 15-19, 20-24. */
const AO5_LEVELS: readonly Level[] = [
  [
    4,
    {
      label: 'Limited',
      descriptor:
        'Some ideas are communicated, but with little sense of the audience or the purpose, and the writing is loosely organised.',
      indicators: ['The register does not suit the task', 'Ideas are listed rather than shaped'],
    },
  ],
  [
    9,
    {
      label: 'Some awareness',
      descriptor:
        'Shows awareness of the purpose and the audience in a simple, consistent tone; ideas follow in order, in paragraphs, with some linking.',
      indicators: ['Attempts the form asked for', 'Paragraphs are present, links are basic'],
    },
  ],
  [
    14,
    {
      label: 'Clear',
      descriptor:
        'Ideas and techniques are chosen to suit the purpose, audience and form, the tone fits, and paragraphs build one idea on another so the writing is easy to follow.',
      indicators: [
        'Form and register are sustained',
        'Paragraphing supports the development of ideas',
      ],
    },
  ],
  [
    19,
    {
      label: 'Deliberate',
      descriptor:
        'The writing is shaped deliberately to affect the reader, tone and style are well judged, and the structure is controlled from start to finish.',
      indicators: ['Openings and endings are deliberate', 'Structural choices are made for effect'],
    },
  ],
  [
    24,
    {
      label: 'Assured',
      descriptor:
        "The writing steers the reader's response in subtle ways, the voice is confident throughout, and complex ideas are organised so the whole piece holds together.",
      indicators: ['Structure serves meaning throughout', 'The voice is assured and sustained'],
    },
  ],
]

/**
 * AO6 on both papers: Pearson's five levels from the June 2024 series, 1-4,
 * 5-7, 8-10, 11-13, 14-16.
 */
const AO6_LEVELS: readonly Level[] = [
  [
    4,
    {
      label: 'Basic',
      descriptor:
        'Simple, everyday vocabulary with frequent spelling errors; punctuation is insecure, and sentences are short or repeat the same pattern.',
      indicators: ['Sentence boundaries are often missed', 'Vocabulary is limited and repetitive'],
    },
  ],
  [
    7,
    {
      label: 'Some control',
      descriptor:
        'Everyday words are mostly spelt correctly, punctuation is mostly accurate, and sentences vary, including some joined with words such as because or although.',
      indicators: ['Some variety of sentence forms', 'Common words are spelt correctly'],
    },
  ],
  [
    10,
    {
      label: 'Clear control',
      descriptor:
        'Vocabulary is well chosen, more complex words are mostly spelt correctly, a mix of punctuation is used accurately, and sentences are shaped to suit the purpose.',
      indicators: ['Sentence forms are varied on purpose', 'Punctuation is mostly secure'],
    },
  ],
  [
    13,
    {
      label: 'Secure range',
      descriptor:
        'Vocabulary is selected with care from a wide range, with only occasional spelling slips; punctuation makes meaning clear, and sentences are built with a purpose in mind.',
      indicators: ['Ambitious words are used precisely', 'A range of punctuation is used well'],
    },
  ],
  [
    16,
    {
      label: 'Extensive range',
      descriptor:
        'Ambitious vocabulary is used with purpose, errors are so rare that they never get in the way, and punctuation is precise, with a full range of sentence forms each chosen for its effect.',
      indicators: ['Errors are rare and minor', 'Choices are consistently deliberate'],
    },
  ],
]

const AO2_LABEL = 'AO2 - Analyse language and structure'
const AO4_LABEL = 'AO4 - Evaluate critically'
const AO5_LABEL = 'AO5 - Communicate and organise'
const AO6_LABEL = 'AO6 - Vocabulary, sentences and accuracy'

/** The two writing objectives of a 40-mark writing task, each on its own grid. */
function writingObjectives(): AssessmentObjective[] {
  return [
    grid('AO5', AO5_LABEL, AO5_DESC, 40, AO5_LEVELS),
    grid('AO6', AO6_LABEL, AO6_DESC, 40, AO6_LEVELS),
  ]
}

// ─── Paper 1: Fiction and Imaginative Writing (64 marks) ─────────────────────

export const edexcelLangPaper1: MarkScheme = {
  id: 'edexcel-lang-paper1',
  board: 'Edexcel',
  subject: 'English Language',
  paper: 'Paper 1',
  title: 'Fiction and Imaginative Writing',
  totalMarks: 64,
  durationMinutes: 105,
  version: '1EN0/01',
  sourceUrl:
    'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-language-2015.html',
  questions: [
    {
      id: 'Q1',
      questionType: 'Information retrieval',
      taskDescription:
        'From the few lines of the extract that the question names, give one detail, usually a word or short phrase showing something about a character, a place or a moment. 1 mark.',
      totalMarks: 1,
      assessmentObjectives: [ao1Retrieval(1)],
      examinerNotes:
        'One mark for one acceptable answer taken from the lines the question names. A single word or a short quotation is enough, and no explanation is needed.',
    },
    {
      id: 'Q2',
      questionType: 'Information retrieval',
      taskDescription:
        "From a short section of the extract, which the question names by line number or prints, give two pieces of information, in quotation or in the candidate's own words. 2 marks.",
      totalMarks: 2,
      assessmentObjectives: [ao1Retrieval(2)],
      examinerNotes:
        "One mark for each acceptable answer from the named lines, up to 2. Quotations and the candidate's own words are both acceptable. The two answers must be different: a second that repeats the first in other words earns nothing.",
    },
    {
      id: 'Q3',
      questionType: 'Language and structure analysis',
      taskDescription:
        "Analyse the writer's use of language and structure in a short section of the extract, named by line number or printed with the question, to show what the question asks about, such as what a character feels or experiences. 6 marks.",
      totalMarks: 6,
      assessmentObjectives: [grid('AO2', AO2_LABEL, AO2_DESC, 6, P1_Q3_LEVELS)],
      examinerNotes:
        'Pearson marks this on three levels of two marks. Level 2 and above need analysis of both language and structure: an answer that considers only language, or only structure, cannot go above the top of Level 1 (2 marks), and nor can one that is unbalanced between them. Naming a feature without its effect earns little.',
    },
    {
      id: 'Q4',
      questionType: 'Critical evaluation',
      taskDescription:
        'The question names an effect the writer attempts in the extract, such as mystery, tension or sympathy for a character, and asks how successfully it is achieved. Give a judgement, supported by detailed references to the text. The June 2023 to June 2025 papers all asked about the extract as a whole. 15 marks.',
      totalMarks: 15,
      assessmentObjectives: [grid('AO4', AO4_LABEL, AO4_DESC, 15, EVALUATION_LEVELS)],
      examinerNotes:
        "Pearson marks this on five levels of three marks. From Level 2 upwards, references to the writer's techniques earn credit only where they support the judgement of how successfully the effect is achieved: analysis of technique for its own sake does not raise the mark.",
    },
    {
      id: 'Q5/Q6',
      questionType: 'Imaginative writing (choice of one)',
      taskDescription:
        'Answer ONE of the two imaginative writing tasks: a narrative, a description or a monologue, real or imagined. One task offers two pictures, which may be used as a stimulus or not. AO5 is marked out of 24 and AO6 out of 16, each on its own five levels, and the two marks are added. 40 marks.',
      totalMarks: 40,
      assessmentObjectives: writingObjectives(),
      examinerNotes:
        'The paper asks for one of the two tasks. Pearson marks AO5 (24 marks) and AO6 (16 marks) separately, each on its own grid of five levels, and adds the two marks.',
    },
  ],
}

// ─── Paper 2: Non-fiction and Transactional Writing (96 marks) ───────────────

export const edexcelLangPaper2: MarkScheme = {
  id: 'edexcel-lang-paper2',
  board: 'Edexcel',
  subject: 'English Language',
  paper: 'Paper 2',
  title: 'Non-fiction and Transactional Writing',
  totalMarks: 96,
  durationMinutes: 125,
  version: '1EN0/02',
  sourceUrl:
    'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-language-2015.html',
  questions: [
    {
      id: 'Q1',
      questionType: 'Information retrieval (Text 1)',
      taskDescription:
        'From the lines of Text 1 that the question names, give two pieces of information, for example two places or two activities the writer mentions. 2 marks.',
      totalMarks: 2,
      assessmentObjectives: [ao1Retrieval(2)],
      examinerNotes:
        'One mark for each acceptable answer from the named lines of Text 1, up to 2. A word or a short phrase is enough; explanation earns nothing extra.',
    },
    {
      id: 'Q2',
      questionType: 'Information retrieval (Text 1)',
      taskDescription:
        "From a short section of Text 1, which the question names by line number or prints, give two pieces of information, in quotation or in the candidate's own words. 2 marks.",
      totalMarks: 2,
      assessmentObjectives: [ao1Retrieval(2)],
      examinerNotes:
        "One mark for each acceptable answer from the named lines, up to 2. Quotations and the candidate's own words are both acceptable. The two answers must be different.",
    },
    {
      id: 'Q3',
      questionType: 'Language and structure analysis (Text 1)',
      taskDescription:
        "Analyse the language and the structure of Text 1 and how the writer uses them to hold the reader's interest. Recent papers have set the whole of Text 1. 15 marks.",
      totalMarks: 15,
      assessmentObjectives: [grid('AO2', AO2_LABEL, AO2_DESC, 15, P2_Q3_LEVELS)],
      examinerNotes:
        'Pearson marks this on five levels of three marks. An answer that considers only language, or only structure, cannot go above the top of Level 2 (6 marks), and an answer that is unbalanced between language and structure cannot reach Level 3.',
    },
    {
      id: 'Q4',
      questionType: 'Information retrieval (Text 2)',
      taskDescription:
        'From the lines of Text 2 that the question names, give one piece of information. 1 mark.',
      totalMarks: 1,
      assessmentObjectives: [ao1Retrieval(1)],
      examinerNotes:
        "One mark for one acceptable answer from the named lines of Text 2. A quotation or the candidate's own words are both acceptable.",
    },
    {
      id: 'Q5',
      questionType: 'Information retrieval (Text 2)',
      taskDescription:
        'From a different set of lines in Text 2, named in the question, give one piece of information. 1 mark.',
      totalMarks: 1,
      assessmentObjectives: [ao1Retrieval(1)],
      examinerNotes:
        "One mark for one acceptable answer from the named lines of Text 2. A quotation or the candidate's own words are both acceptable.",
    },
    {
      id: 'Q6',
      questionType: 'Critical evaluation (Text 2)',
      taskDescription:
        'The question names something the writer of Text 2 sets out to do, such as building a sense of danger or making the reader sympathise, and asks how successfully it is done. Give a judgement, supported by detailed references to Text 2. 15 marks.',
      totalMarks: 15,
      assessmentObjectives: [grid('AO4', AO4_LABEL, AO4_DESC, 15, EVALUATION_LEVELS)],
      examinerNotes:
        "Pearson marks this on five levels of three marks. From Level 2 upwards, references to the writer's techniques earn credit only where they support the judgement of how successfully the writer achieves the aim: analysis of technique for its own sake does not raise the mark. The question is about Text 2 alone.",
    },
    {
      id: 'Q7a',
      questionType: 'Synthesis across both texts',
      taskDescription:
        'Using evidence from both texts, set out the similarities the question asks about, for example between the people, places or experiences the two writers describe, bringing the evidence from the two texts together in each point. 6 marks.',
      totalMarks: 6,
      assessmentObjectives: [
        grid('AO1', 'AO1 - Select and synthesise evidence', AO1_DESC, 6, Q7A_LEVELS),
      ],
      examinerNotes:
        'Both texts must be drawn on for any mark: an answer that uses one text only scores 0. Credit similarities, which is what the question asks for and what every level describes. Pearson marks this on three levels of two marks, judged on the understanding of the similarities and how well the evidence from the two texts is brought together, not a mark per point. It is AO1 alone: analysis of language is not assessed here.',
    },
    {
      id: 'Q7b',
      questionType: "Comparison of writers' ideas and perspectives",
      taskDescription:
        "Compare the two writers' ideas and perspectives on the topic they share, and the methods each uses to convey them, with references from both texts. 14 marks.",
      totalMarks: 14,
      assessmentObjectives: [
        grid('AO3', "AO3 - Compare writers' ideas and perspectives", AO3_DESC, 14, Q7B_LEVELS),
      ],
      examinerNotes:
        'Both texts must be compared. An answer that considers only one text in detail cannot go above the top of Level 2 (5 marks), and an answer that is unbalanced between the two texts cannot reach Level 3. Reward comparison of the ideas and perspectives and of the methods that convey them.',
    },
    {
      id: 'Q8/Q9',
      questionType: 'Transactional writing (choice of one)',
      taskDescription:
        'Answer ONE of the two transactional writing tasks, in the form and for the audience and purpose the task sets: for example an article, a letter, a review, a speech or a section of a guide that informs, advises or persuades. AO5 is marked out of 24 and AO6 out of 16, each on its own five levels, and the two marks are added. 40 marks.',
      totalMarks: 40,
      assessmentObjectives: writingObjectives(),
      examinerNotes:
        'The paper asks for one of the two tasks. Pearson marks AO5 (24 marks) and AO6 (16 marks) separately, each on its own grid of five levels, and adds the two marks.',
    },
  ],
}
