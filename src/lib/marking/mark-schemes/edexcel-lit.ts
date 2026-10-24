// ─── Edexcel GCSE English Literature (1ET0) ─────────────────────────────────
//
// CORRECTED TO PEARSON'S ONE-GRID MARKING, 24 October 2026
//
// That day a guide was written for each paper and checked twice, by a writer
// and an independent checker, against Pearson's own documents:
// src/data/mark-scheme-guides/edexcel-lit-paper1.ts and edexcel-lit-paper2.ts,
// which cite the 1ET0/01 and 1ET0/02 mark schemes for Summer 2025
// (1ET0_01_2506_MS, 1ET0_02_2506_MS), the June 2024 mark schemes and the
// specification, Issue 2. The questions, marks, totals, durations and the
// split of marks between objectives below already agreed with them. The way
// the marks were awarded did not, and is corrected here to the guides and the
// mark schemes they cite. Changing it changes how essays are scored, so it went
// to the founder, who approved it on 24 October 2026 (document 30: "correct ai
// markers").
//
// ONE GRID, NOT ONE LADDER PER OBJECTIVE. Pearson marks each answer on ONE grid
// whose levels describe every objective the answer is assessed on, and labels
// which bullets of each level belong to which objective ("AO1 (15 marks)",
// "AO3 (5 marks)"). This file gave each objective a ladder of its own, so the
// model placed context, for instance, in a level of its own out of 5 and added
// it to a separate mark out of 15, where Pearson's examiner places the whole
// answer in one level. Each such grid is now one AssessmentObjective:
//
//   P1 Section A (b)     was AO1 /15 (1-3, 4-6, 7-9, 10-12, 13-15) + AO3 /5
//                        (one mark a level)
//                        now AO1+AO3 /20: 1-4, 5-8, 9-12, 13-16, 17-20
//   P1 Section B         was AO1 /16 + AO3 /16 (each 1-3, 4-6, 7-10, 11-13,
//                        14-16) + AO4 /8
//                        now AO1+AO3 /32: 1-6, 7-12, 13-19, 20-26, 27-32,
//                        plus AO4 /8 on its own grid, as Pearson has it
//   P2 Section B Part 1  was AO2 /15 (1-3 ... 13-15) + AO3 /5
//                        now AO2+AO3 /20: 1-4, 5-8, 9-12, 13-16, 17-20
//   P2 Section B Part 2  was AO1 /8 (1-2, 3, 4-5, 6, 7-8) + AO2 /12 (1-2,
//                        3-5, 6-7, 8-10, 11-12)
//                        now AO1+AO2 /20: 1-4, 5-8, 9-12, 13-16, 17-20
//
// Section A (a) on both papers (AO2 /20) and Paper 2 Section A (b) (AO1 /20)
// were already one objective on one grid, with Pearson's ranges.
//
// THE IDS. A combined grid's id lists the objectives it covers joined by '+'.
// Not 'AO1-AO3': that reads as AO1 to AO3, and AO2 is not assessed on either
// AO1-and-AO3 grid. The engine upper-cases the id the model returns and looks
// it up exactly (feedback-generator.ts, essay-feedback.ts), and both prompts
// show an objective's label rather than its id, so every label begins with its
// id and each question's examinerNotes say to give one mark for the grid.
//
// ALSO CORRECTED:
//   AO4's levels keep their ranges (1-2, 3-5, 6-8) and take Pearson's names,
//   Level 1 to Level 3; they were "Threshold", "Intermediate" and "High", the
//   words Pearson uses to describe them.
//   Rules the marker was not told: on both parts of Paper 2 Section B an answer
//   on only one poem cannot go above Level 2, and a considerably unbalanced one
//   cannot reach Level 3.
//   Task wording: part (b) asks about the theme elsewhere in the play or novel,
//   outside the printed extract (the June 2024 and June 2025 papers, whose mark
//   schemes reward references from elsewhere), not "the play as a whole" or
//   "the novel as a whole"; Part 1's second poem comes from the same anthology
//   collection, not "one other of your choice".
//   The level descriptors are rewritten in our own words. The old ones
//   followed Pearson's level wording closely: a check of five-word runs against
//   the 2025 mark schemes found dozens shared.
//   `weighting` is each objective's share of its QUESTION, as types.ts defines
//   it; it was the share of the paper.
//
// THE QUALIFICATION TOTALS still reconcile with the specification's breakdown
// by component, which is the check that the structure is right. Each combined
// grid's description states its split, and the structure test holds it to the
// guides:
//
//   Paper 1 (80)  Section A (a) AO2 20; (b) AO1 15 + AO3 5
//                 Section B AO1 16 + AO3 16 + AO4 8
//   Paper 2 (80)  Section A (a) AO2 20; (b) AO1 20
//                 Section B Part 1 AO2 15 + AO3 5; Part 2 AO1 8 + AO2 12
//   AO1 59 = 15 + 16 + 20 + 8      AO2 67 = 20 + 20 + 15 + 12
//   AO3 26 =  5 + 16 +  5          AO4  8 (Paper 1 Section B only)
//
// STILL NOT VERIFIED BY A PERSON. The figures come from guides checked by two
// agents, not from a person reading the mark schemes line by line, so this
// scheme stays out of src/lib/marking/examiner/verification.ts and derives as
// `unverified-grid`.
//
// HISTORY, kept so that the next reader does not bring any of it back:
//   19 September 2026: the file had an invented "AO4 - Comparison" worth 16 on
//   Paper 2 Section B, beside a correct AO4 (spelling, punctuation and grammar,
//   8 marks, Paper 1 Section B only); comparison is never an objective of its
//   own here. Part (a) on Paper 1 carried AO1, AO2 and AO3 where it is AO2
//   alone, and Paper 2 Section A carried AO3, which it does not assess.
//   9 October 2026: every ladder had six levels written for this site, topping
//   out at 16 and scaled to each question, so a 20-mark question had a "Level
//   6" of 17-20 that Pearson does not have; rebuilt to Pearson's five levels.
//   2 October 2026: the unseen task read as AQA's two-step question; Pearson
//   sets one question comparing two unseen poems.
//
// Sources:
//   https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015.html
//   1ET0 specification Issue 2, "Breakdown of Assessment Objectives by
//   component"; 1ET0/01 and 1ET0/02 mark schemes, Summer 2025.
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
 * A level ladder from the tops of Pearson's levels. Each level starts one mark
 * above the previous level's top, so the ladder is contiguous by construction
 * and starts at 1; the last top is the grid's maximum.
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
 * One of Pearson's grids as one objective. Its marks are the top of its last
 * level, so the grid always reaches the marks it claims; `weighting` is its
 * share of the question.
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

// ─── The objectives' statements (the specification's) ──────────────────────

const AO1_STATEMENT =
  'Read, understand and respond to texts: maintain a critical style and develop an informed personal response, using textual references, including quotations, to support and illustrate interpretations.'
const AO2_STATEMENT =
  'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.'
const AO4_STATEMENT =
  'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.'

/** Said of every combined grid, so the model returns one mark for it. */
const ONE_MARK = 'Give one mark for the grid, not a separate mark for each objective.'

// ─── Section A (a), both papers: AO2 alone, out of 20 ───────────────────────

function extractLevels(who: 'audience' | 'reader'): readonly Level[] {
  return [
    [
      4,
      {
        label: 'Minimal',
        descriptor:
          'Says very little about how the extract is written: a feature or two may be identified, with almost no explanation and little subject terminology.',
        indicators: ['Features are named without their effect', 'Little or no subject terminology'],
      },
    ],
    [
      8,
      {
        label: 'Mostly descriptive',
        descriptor:
          'Mostly describes what happens in the extract, with some comment on how it is written and a few subject terms.',
        indicators: ['Some comment on the methods used', 'Retelling outweighs analysis'],
      },
    ],
    [
      12,
      {
        label: 'Explained',
        descriptor: `Explains how several of the writer's methods work and the effect of each on the ${who}, with relevant subject terminology.`,
        indicators: ['Methods are linked to their effects', 'Terminology is accurate and relevant'],
      },
    ],
    [
      16,
      {
        label: 'Detailed',
        descriptor: `Analyses closely, throughout, how the extract's language, form and structure work and what they do to the ${who}, with subject terms used accurately to take ideas further.`,
        indicators: [
          'Form and structure are explored alongside language',
          'Terminology supports the argument',
        ],
      },
    ],
    [
      20,
      {
        label: 'Evaluative',
        descriptor: `Weighs up how the extract's language, form and structure combine to shape the ${who}'s response, with precise subject terminology built naturally into the argument.`,
        indicators: [
          'Considers how methods work together, not only what they are',
          'Terminology is a tool of analysis, not a label',
        ],
      },
    ],
  ]
}

const AO2_LABEL = 'AO2 - Analyse language, form and structure'

// ─── Paper 1 Section A (b): AO1 and AO3 on one grid, out of 20 ──────────────

const P1_B_LEVELS: readonly Level[] = [
  [
    4,
    {
      label: 'Simple',
      descriptor:
        'A simple answer with little personal view, only brief reference to the play and little awareness of context.',
      indicators: ['Mostly retells events', 'Context is barely mentioned'],
    },
  ],
  [
    8,
    {
      label: 'Partly narrative',
      descriptor:
        'Retells a fair amount of the plot, but some personal view comes through, with some relevant points, some sense of context and a focus on the question that comes and goes.',
      indicators: ['Some points answer the question', 'Context is mentioned but loosely linked'],
    },
  ],
  [
    12,
    {
      label: 'Sound',
      descriptor:
        'Stays relevant and answers the question with a sound personal reading of the play, points supported by references, and sensible links to context.',
      indicators: ['A clear line of argument', 'Context is linked to points about the play'],
    },
  ],
  [
    16,
    {
      label: 'Sustained',
      descriptor:
        'A well-structured argument that stays close to the play throughout, with references that fit each point closely and context discussed in detail.',
      indicators: ['The argument holds across the answer', 'Context informs the reading'],
    },
  ],
  [
    20,
    {
      label: 'Assured',
      descriptor:
        'A confident argument with fresh, thoughtful readings; every reference does real work, and context is built into the points rather than added on.',
      indicators: ['An independent, perceptive reading', 'Context is part of the argument'],
    },
  ],
]

// ─── Paper 1 Section B: AO1 and AO3 on one grid, out of 32, then AO4 ────────

const P1_SECTION_B_LEVELS: readonly Level[] = [
  [
    6,
    {
      label: 'Simple',
      descriptor:
        'A simple answer with little personal view, little support from the text and little awareness of context.',
      indicators: ['Mostly retells the story', 'Context is barely mentioned'],
    },
  ],
  [
    12,
    {
      label: 'Partly narrative',
      descriptor:
        'Retells a fair amount of the story, but some personal view comes through, with some references and some sense of context, though the focus wanders.',
      indicators: ['Some points answer the question', 'Context is mentioned but loosely linked'],
    },
  ],
  [
    19,
    {
      label: 'Sound',
      descriptor:
        'A relevant answer with a sound reading of the text, focused references, and sensible comment on context and how it connects with the text.',
      indicators: ['A clear line of argument', 'Context is used to explain the text'],
    },
  ],
  [
    26,
    {
      label: 'Sustained',
      descriptor:
        'A well-structured argument that stays close to the text throughout, with references that fit each point closely and context discussed in detail.',
      indicators: ['References range across the whole text', 'Context informs the reading'],
    },
  ],
  [
    32,
    {
      label: 'Assured',
      descriptor:
        'A confident argument with fresh, thoughtful readings, carefully chosen references, and context built into the whole answer rather than added on.',
      indicators: ['An independent, perceptive reading', 'Context is part of the argument'],
    },
  ],
]

/**
 * AO4: spelling, punctuation and grammar. Pearson assesses it once in the whole
 * qualification, Paper 1 Section B, on its own grid of three levels.
 */
const AO4_LEVELS: readonly Level[] = [
  [
    2,
    {
      label: 'Threshold',
      descriptor:
        'Spelling and punctuation are accurate often enough for the meaning always to come through, with a fair variety of words and sentence forms.',
      indicators: ['Errors do not obscure the meaning'],
    },
  ],
  [
    5,
    {
      label: 'Intermediate',
      descriptor:
        'Spelling and punctuation are accurate nearly all the time, and a good spread of vocabulary and sentence types keeps the meaning clear.',
      indicators: ['Mostly accurate, with varied sentences'],
    },
  ],
  [
    8,
    {
      label: 'High',
      descriptor:
        'Spelling and punctuation are accurate throughout, and vocabulary and sentences are chosen so that the meaning is exactly what the writer intends.',
      indicators: ['Consistently accurate and well controlled', 'Vocabulary is precise'],
    },
  ],
]

// ─── Paper 2 Section A (b): AO1 alone, out of 20 ────────────────────────────

const P2_B_LEVELS: readonly Level[] = [
  [
    4,
    {
      label: 'Simple',
      descriptor:
        'A simple answer with little personal view, little sense of an essay written to argue a case, and only brief reference to the novel.',
      indicators: ['Mostly retells events', 'References are general'],
    },
  ],
  [
    8,
    {
      label: 'Partly narrative',
      descriptor:
        'Retells a fair amount of the story, but some personal view comes through, with a few relevant points and a focus that comes and goes.',
      indicators: ['Some points answer the question', 'Focus on the question is not secure'],
    },
  ],
  [
    12,
    {
      label: 'Sound',
      descriptor:
        'Stays relevant, with a sound personal reading of the novel and focused points supported by references.',
      indicators: ['A clear line of argument', 'References support each point'],
    },
  ],
  [
    16,
    {
      label: 'Sustained',
      descriptor:
        'A well-structured argument that stays close to the novel in a steady critical style, with references that fit each of several points closely.',
      indicators: ['The argument holds across the answer', 'References are precise'],
    },
  ],
  [
    20,
    {
      label: 'Assured',
      descriptor:
        'A confident argument with fresh, thoughtful readings, in which each carefully chosen reference does real work.',
      indicators: ['An independent, perceptive reading', 'Evidence is integral to the argument'],
    },
  ],
]

// ─── Paper 2 Section B Part 1: comparison, AO2 and AO3 on one grid ──────────

const ANTHOLOGY_LEVELS: readonly Level[] = [
  [
    4,
    {
      label: 'Little comparison',
      descriptor:
        'Hardly compares the poems, says little about how they are written, and shows little awareness of context.',
      indicators: ['The poems are dealt with separately', 'Methods are barely discussed'],
    },
  ],
  [
    8,
    {
      label: 'Obvious comparisons',
      descriptor:
        'Identifies the more obvious similarities or differences without developing them, with some comment on how the poems are written and a little context. An answer on only one poem goes no higher than this level.',
      indicators: ['Some links between the poems', 'Context is mentioned rather than used'],
    },
  ],
  [
    12,
    {
      label: 'Clear comparison',
      descriptor:
        'Makes a range of clear comparisons and explains how language, form and structure shape each poem, with relevant terminology and sensible comment on context.',
      indicators: [
        'Comparison runs through the answer',
        'Both poems are given substantial treatment',
      ],
    },
  ],
  [
    16,
    {
      label: 'Developed comparison',
      descriptor:
        'Compares the poems well on many points, with detailed analysis supported by evidence from both and context discussed throughout.',
      indicators: [
        'Methods are compared, not only ideas',
        'Context explains the differences and likenesses',
      ],
    },
  ],
  [
    20,
    {
      label: 'Perceptive comparison',
      descriptor:
        "Compares the poems with real insight on many fronts, shows exactly how each poet's methods work, uses precise terminology, and makes context part of the argument.",
      indicators: ['The comparison drives the whole answer', 'Evidence from both poems is precise'],
    },
  ],
]

// ─── Paper 2 Section B Part 2: comparison, AO1 and AO2 on one grid ──────────

const UNSEEN_LEVELS: readonly Level[] = [
  [
    4,
    {
      label: 'Little comparison',
      descriptor:
        'Hardly compares the poems, gives a simple response with little evidence, and says little about how they are written.',
      indicators: ['The poems are dealt with separately', 'Paraphrase rather than response'],
    },
  ],
  [
    8,
    {
      label: 'Obvious comparisons',
      descriptor:
        'Identifies obvious similarities or differences without developing them, partly retells the poems, and comments a little on how they are written. An answer on only one poem goes no higher than this level.',
      indicators: ['Some links between the poems', 'Methods are named more than explained'],
    },
  ],
  [
    12,
    {
      label: 'Clear comparison',
      descriptor:
        'Makes a range of clear comparisons, with a relevant personal response, a sensible reading of both poems and a clear sense of how language, form and structure work.',
      indicators: [
        'Comparison runs through the answer',
        'Both poems are given substantial treatment',
      ],
    },
  ],
  [
    16,
    {
      label: 'Developed comparison',
      descriptor:
        'Compares the poems well on many points, with a well-supported personal response and detailed analysis of how both poets write.',
      indicators: ['Ideas and methods are both compared', 'Evidence supports each comparison'],
    },
  ],
  [
    20,
    {
      label: 'Perceptive comparison',
      descriptor:
        "Compares the poems with real insight on many fronts, with a confident personal response, carefully chosen evidence and precise analysis of both poets' methods.",
      indicators: [
        'An independent reading of both poems',
        'The comparison drives the whole answer',
      ],
    },
  ],
]

const AO4_LABEL = 'AO4 - Spelling, punctuation and grammar'

// ─── Paper 1: Shakespeare and Post-1914 Literature (80 marks) ───────────────

export const edexcelLitPaper1: MarkScheme = {
  id: 'edexcel-lit-paper1',
  board: 'Edexcel',
  subject: 'English Literature',
  paper: 'Paper 1',
  title: 'Shakespeare and Post-1914 Literature',
  totalMarks: 80,
  durationMinutes: 105,
  version: '1ET0/01',
  sourceUrl:
    'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015.html',
  questions: [
    {
      id: 'Section A (a)',
      questionType: 'Shakespeare extract',
      taskDescription:
        'Analyse how Shakespeare presents a character, a relationship or an idea in the printed extract of about 30 lines, through its language, form and structure. 20 marks, AO2 only.',
      totalMarks: 20,
      assessmentObjectives: [grid('AO2', AO2_LABEL, AO2_STATEMENT, 20, extractLevels('audience'))],
      examinerNotes:
        'AO2 alone, on one grid of five levels. Reward analysis of the language, form and structure of the extract and their effect on the audience. Context and the rest of the play earn nothing in part (a): they belong to part (b).',
    },
    {
      id: 'Section A (b)',
      questionType: 'Shakespeare whole text',
      taskDescription:
        "Explain the importance of a theme from the extract, such as power or loyalty, elsewhere in the play, outside the printed extract. The question lists points to cover and asks for reference to the play's context. 20 marks: AO1 and AO3 on one grid.",
      totalMarks: 20,
      assessmentObjectives: [
        grid(
          'AO1+AO3',
          'AO1+AO3 - Response and context, on one grid',
          `One grid for two objectives, as Pearson marks this answer: AO1 (15 marks), a critical, informed personal response supported by references to the play; and AO3 (5 marks), the relationship between the play and the contexts in which it was written. ${ONE_MARK}`,
          20,
          P1_B_LEVELS,
        ),
      ],
      examinerNotes:
        'Pearson marks this answer on one grid covering AO1 and AO3 together, out of 20: place it in one of the five levels by weighing the argument, the references and the use of context together, and give one mark under AO1+AO3; context is not scored on its own. The question is about the theme elsewhere in the play: reward relevant references, short quotations and close paraphrase from outside the printed extract. Analysis of language, form and structure (AO2) is assessed in part (a), not here.',
    },
    {
      id: 'Section B',
      questionType: 'Post-1914 literature essay',
      taskDescription:
        'Answer one of the two essay questions on the studied post-1914 British play or novel, about a character, theme, setting or event. The quotation printed with the question is a starting point; the answer ranges across the whole text and refers to its context. 40 marks: AO1 and AO3 on one grid out of 32, and AO4 out of 8.',
      totalMarks: 40,
      assessmentObjectives: [
        grid(
          'AO1+AO3',
          'AO1+AO3 - Response and context, on one grid',
          `One grid for two objectives, as Pearson marks this answer: AO1 (16 marks), a critical, informed personal response supported by references to the text; and AO3 (16 marks), the relationship between the text and the contexts in which it was written. ${ONE_MARK} AO4 is marked separately.`,
          40,
          P1_SECTION_B_LEVELS,
        ),
        grid('AO4', AO4_LABEL, AO4_STATEMENT, 40, AO4_LEVELS),
      ],
      examinerNotes:
        'Two marks, added together: one out of 32 under AO1+AO3, from a single grid that weighs the argument, the references and the use of context together (context is not scored on its own), and one out of 8 for AO4 on its own grid. This is the only question in the qualification where AO4 (spelling, punctuation and grammar) is assessed. AO2 is not assessed in this section.',
    },
  ],
}

// ─── Paper 2: 19th-Century Novel and Poetry (80 marks) ──────────────────────

export const edexcelLitPaper2: MarkScheme = {
  id: 'edexcel-lit-paper2',
  board: 'Edexcel',
  subject: 'English Literature',
  paper: 'Paper 2',
  title: '19th-Century Novel and Poetry since 1789',
  totalMarks: 80,
  durationMinutes: 135,
  version: '1ET0/02',
  sourceUrl:
    'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015.html',
  questions: [
    {
      id: 'Section A (a)',
      questionType: '19th-century novel extract',
      taskDescription:
        'Analyse how the writer presents a character, a setting or an event in the printed extract of about 400 words, through its language, form and structure. 20 marks, AO2 only.',
      totalMarks: 20,
      assessmentObjectives: [grid('AO2', AO2_LABEL, AO2_STATEMENT, 20, extractLevels('reader'))],
      examinerNotes:
        'AO2 alone, on one grid of five levels. Part (a) is about the printed extract, and context (AO3) is not assessed anywhere in Section A of this paper.',
    },
    {
      id: 'Section A (b)',
      questionType: '19th-century novel whole text',
      taskDescription:
        'Explain how an idea from the extract, such as friendship, fear or ambition, is shown elsewhere in the novel, outside the printed extract. The question lists points to consider. 20 marks, AO1 only.',
      totalMarks: 20,
      assessmentObjectives: [
        grid('AO1', 'AO1 - Read, understand and respond', AO1_STATEMENT, 20, P2_B_LEVELS),
      ],
      examinerNotes:
        'AO1 alone, on one grid of five levels: the personal response, the critical style and the references. The question is about the idea elsewhere in the novel: reward references from beyond the printed extract. Context is not credited in this part.',
    },
    {
      id: 'Section B Part 1',
      questionType: 'Poetry anthology comparison',
      taskDescription:
        "Compare how a theme is presented in the named anthology poem, which is printed, and one other poem chosen from the same anthology collection, considering the poets' use of language, form and structure and the influence of the contexts in which the poems were written. 20 marks: AO2 and AO3 on one grid.",
      totalMarks: 20,
      assessmentObjectives: [
        grid(
          'AO2+AO3',
          'AO2+AO3 - Comparison of methods and contexts, on one grid',
          `One grid, as Pearson marks this answer, covering comparison together with AO2 (15 marks), how each poet uses language, form and structure to create meanings and effects; and AO3 (5 marks), the contexts in which the poems were written. Comparison is not an objective of its own: it runs through every level. ${ONE_MARK}`,
          20,
          ANTHOLOGY_LEVELS,
        ),
      ],
      examinerNotes:
        'Pearson marks this answer on one grid covering comparison, AO2 and AO3 together, out of 20: give one mark under AO2+AO3. An answer on only one poem cannot go above the top of Level 2 (8 marks), and one that is considerably unbalanced between the poems cannot reach Level 3: the two need not be covered equally, but the second poem needs substantial treatment. The second poem must come from the same collection as the named one. AO1 is not assessed in this part.',
    },
    {
      id: 'Section B Part 2',
      questionType: 'Unseen poetry',
      taskDescription:
        "Compare how two contemporary poems the candidate has not studied, printed on the paper and linked by a theme, present it: the ideas in the poems and the poets' use of language, form and structure, supported by evidence from both. 20 marks: AO1 and AO2 on one grid.",
      totalMarks: 20,
      assessmentObjectives: [
        grid(
          'AO1+AO2',
          'AO1+AO2 - Comparison of response and methods, on one grid',
          `One grid, as Pearson marks this answer, covering comparison together with AO1 (8 marks), an informed personal response to the ideas in both poems, supported by evidence; and AO2 (12 marks), how each poet uses language, form and structure to create meanings and effects. Comparison is not an objective of its own: it runs through every level. ${ONE_MARK}`,
          20,
          UNSEEN_LEVELS,
        ),
      ],
      examinerNotes:
        'Pearson marks this answer on one grid covering comparison, AO1 and AO2 together, out of 20: give one mark under AO1+AO2. An answer on only one poem cannot go above the top of Level 2 (8 marks), and one that is considerably unbalanced between the poems cannot reach Level 3. The poems are unseen: reward any reasonable reading the poems support, and do not credit contextual knowledge, which is not assessed here.',
    },
  ],
}
