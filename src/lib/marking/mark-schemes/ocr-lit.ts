// ─── OCR GCSE English Literature Mark Scheme ────────────────────────────────
// J352 - Component 01 and Component 02, as OCR marks them.
//
// ── ONE GRID PER ANSWER (24 October 2026) ───────────────────────────────────
// OCR marks each answer as a whole, on one six-level grid covering every
// objective the question assesses, and marks spelling, punctuation and grammar
// (AO4) on its own small grid, in Section B only. Until 24 October this file
// gave each objective its own ladder, scaled from a twelve-mark base, so the
// marker placed a Section B essay on three ladders where OCR uses one, at
// ranges OCR does not use: Component 01's part (a) gave AO2 four one-mark
// levels named 1, 3, 4 and 6, because the rescale squeezed two out. Each
// answer is now one objective for its grid, at OCR's ranges:
//
//   Section A, parts (a) and (b)   one grid of 20: 1-3, 4-6, 7-10, 11-14,
//                                  15-17, 18-20
//   Section B                      AO1 to AO3 on one grid of 36: 1-6, 7-12,
//                                  13-18, 19-24, 25-30, 31-36; AO4 on its own
//                                  grid of 4: 1, 2-3, 4; the two are added
//
// A grid's id names the objectives it covers ('AO1-AO3', 'AO1-AO2'), in upper
// case because feedback-generator.ts upper-cases the id the model returns
// before matching it. Each grid's description gives OCR's intended weighting
// of the objectives inside it, which is what this file's tariffs already had
// right (part (a) AO1 8, AO2 4, AO3 8 in Component 01 and AO1 8, AO2 12 in
// Component 02; part (b) AO1 10, AO2 10; Section B AO1 14, AO2 14, AO3 8,
// AO4 4). The caps OCR applies are in each question's examiner notes: one
// extract or one moment only, one poem only, a poem from another cluster, the
// part (a) extract reused in part (b).
//
// The figures come from the guides src/data/mark-scheme-guides/
// ocr-lit-component01.ts and ocr-lit-component02.ts, checked twice on
// 24 October 2026 against OCR's J352/01 and J352/02 mark schemes for June 2024
// (with June 2023 for Component 01's caps and June 2018 for Component 02's
// weightings) and the J352 specification, Version 3.0, November 2025. Changing
// how essays are scored was put to the founder (document 30), who approved it
// on 24 October 2026. No person has checked these figures against OCR's
// papers, so neither component is in VERIFIED_SPECS
// (../examiner/verification.ts). The level descriptors are this site's own
// words, adapted from the guides; OCR's descriptors are its copyright.
//
// ── EARLIER DEFECTS, kept so they are not reintroduced ──────────────────────
// 19 September 2026 (EXAM-7): the 16-mark objectives were built as
// `{ ...ao1, maxMarks: 16 }`. The spread overrode the declared total and left
// a ladder that topped out at 12, so a candidate who deserved 16 could not be
// given more than 12, and nothing caught it because every total still added
// up (./scale-ao.ts has the account). The grids below are written at their own
// tariffs and are not rescaled.
//
// 9 October 2026: rebuilt to OCR's sections. Section A of each component had
// been one 40-mark question, where OCR sets two 20-mark parts. AO4 had been put
// in Section A of both components and AO3 in Component 02's poetry; OCR
// assesses AO4 in Section B of each component only, and context in Component
// 02 only in its Shakespeare section. Component 01 Section B had been called
// "literary heritage prose or drama", with Romeo and Juliet as an example: it
// is 19th-century prose, and Shakespeare is Component 02.
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective, BandDescriptor } from './types'

/** One level's wording: this site's own, never OCR's. */
type LevelText = Pick<BandDescriptor, 'label' | 'descriptor' | 'indicators'>

/** OCR's six levels for a 20-mark part of Section A. */
const PART_RANGES = [
  [1, 3],
  [4, 6],
  [7, 10],
  [11, 14],
  [15, 17],
  [18, 20],
] as const

/** OCR's six levels for Section B's AO1 to AO3 grid, out of 36. */
const ESSAY_RANGES = [
  [1, 6],
  [7, 12],
  [13, 18],
  [19, 24],
  [25, 30],
  [31, 36],
] as const

/** Levels named as OCR names them, "Level 1" up, at the ranges given. */
function levels(
  ranges: readonly (readonly [number, number])[],
  text: readonly LevelText[],
): BandDescriptor[] {
  if (ranges.length !== text.length) throw new Error('ocr-lit: a level without its wording')
  return ranges.map(([minMarks, maxMarks], i) => ({
    band: `Level ${i + 1}`,
    minMarks,
    maxMarks,
    ...text[i]!,
  }))
}

// ─── Section B, both components: AO1 to AO3 together, and AO4 on its own ───

/** The essay grid, for the novel (Component 01) or the play (Component 02). */
function essayGrid(work: 'novel' | 'play', writer: string, context: string): AssessmentObjective {
  return {
    id: 'AO1-AO3',
    label: 'AO1-AO3 - Response, analysis and context, on one grid',
    description: `OCR marks AO1, AO2 and AO3 together on one grid out of 36, with an intended weighting of AO1 14, AO2 14 and AO3 8. AO1: an informed personal argument that answers the exact question about the ${work}, supported by references and quotations. AO2: analysis of ${writer} language, form and structure, with subject terms. AO3: ${context}, linked to the points made. Spelling, punctuation and grammar are AO4, on their own grid.`,
    maxMarks: 36,
    weighting: 36 / 40,
    bands: levels(ESSAY_RANGES, [
      {
        label: 'A few relevant comments',
        descriptor: `A few relevant comments with little reference to the ${work}, very little sense of how it is written, and context only hinted at.`,
        indicators: ['Little reference to the text', 'Retelling more than comment'],
      },
      {
        label: 'Simple',
        descriptor: `A simple answer that begins to address the question, with some support from the ${work}, simple comments on the writing and some awareness of context.`,
        indicators: ['Begins to answer the question', 'Some awareness of context'],
      },
      {
        label: 'Fuller, showing understanding',
        descriptor: `A fuller answer that shows understanding, with some relevant quotations, a reasonable explanation of ${writer} methods and some relevant comments on context.`,
        indicators: ['Some relevant quotations', 'Methods explained reasonably'],
      },
      {
        label: 'Detailed, developing argument',
        descriptor:
          'A detailed answer with a developing argument, relevant quotations, some real analysis of language, form and structure, and a clear grasp of context that shapes the points.',
        indicators: ['Argument developing through the essay', 'Context shapes the points'],
      },
      {
        label: 'Well built and persuasive',
        descriptor:
          'A well-built, persuasive argument with well-suited quotations built in, careful analysis that uses subject terms well, and context that informs the interpretation.',
        indicators: ['Quotations built into the sentences', 'Context informs the interpretation'],
      },
      {
        label: 'Insightful, tightly argued',
        descriptor:
          'An insightful essay argued tightly from start to finish, with exact quotations, close and detailed analysis of language, form and structure, and a subtle understanding of how context shapes meaning.',
        indicators: [
          'Tightly argued from start to finish',
          'A subtle understanding of how context shapes meaning',
        ],
      },
    ]),
  }
}

/** Spelling, punctuation and grammar, in OCR's three performance levels. */
const ao4Accuracy: AssessmentObjective = {
  id: 'AO4',
  // Was 'AO4 - Relate texts / compare' until 19 September 2026 (EXAM-7). In
  // England's GCSE Literature AO4 is technical accuracy; comparison is not a
  // separate objective.
  label: 'AO4 - Technical accuracy: spelling, punctuation and grammar',
  description:
    'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. Marked on its own grid, in Section B only.',
  maxMarks: 4,
  weighting: 4 / 40,
  bands: [
    {
      band: 'Threshold',
      minMarks: 1,
      maxMarks: 1,
      label: 'Threshold performance',
      descriptor:
        'Mostly accurate spelling and punctuation and some variety in words and sentences. Errors do not get in the way of the meaning.',
      indicators: ['Errors do not obscure the meaning', 'Some variety in sentences'],
    },
    {
      band: 'Intermediate',
      minMarks: 2,
      maxMarks: 3,
      label: 'Intermediate performance',
      descriptor:
        'Spelling and punctuation are largely accurate, and the vocabulary and sentences are varied enough to keep the meaning generally clear and controlled.',
      indicators: ['Errors minor and infrequent', 'Meaning generally controlled'],
    },
    {
      band: 'High',
      minMarks: 4,
      maxMarks: 4,
      label: 'High performance',
      descriptor:
        'Spelling and punctuation are accurate throughout, and well-chosen vocabulary and varied sentences keep the meaning precise and fully under control.',
      indicators: ['Accurate throughout', 'Precise, well-chosen vocabulary'],
    },
  ],
}

// ─── Component 01: Exploring modern and literary heritage texts ─────────────

export const ocrLitComponent01: MarkScheme = {
  id: 'ocr-lit-component01',
  board: 'OCR',
  subject: 'English Literature',
  paper: 'Component 01',
  title: 'Exploring Modern and Literary Heritage Texts',
  totalMarks: 80,
  durationMinutes: 120,
  version: 'J352/01',
  sourceUrl:
    'https://www.ocr.org.uk/qualifications/gcse/english-literature-j352-from-2015/assessment/',
  questions: [
    {
      id: 'Section A (a)',
      questionType: 'Modern prose or drama: comparing the extract with an unseen extract',
      taskDescription:
        'Compare how an idea is presented in an extract from the studied modern prose or drama text and in an unseen extract from a modern text of the same genre, keeping to the two printed extracts.',
      totalMarks: 20,
      assessmentObjectives: [
        {
          id: 'AO1-AO3',
          label: 'AO1-AO3 - Response, analysis and context, on one grid',
          description:
            'OCR marks the answer as a whole on one grid covering three objectives, with an intended weighting of AO1 8, AO2 4 and AO3 8 of the 20 marks. AO1: an informed personal response to both extracts, argued and supported by quotations. AO2: analysis of how language, form and structure create meaning, with subject terms where they help. AO3: the social, family, age, class or cultural situations each extract suggests, worked into the comparison.',
          maxMarks: 20,
          weighting: 1,
          bands: levels(PART_RANGES, [
            {
              label: 'A few relevant remarks',
              descriptor:
                'A few relevant remarks about the extracts, with little reference to them, very little on how they are written, hardly any links between the two and context only hinted at.',
              indicators: ['Little reference to either extract', 'Hardly any links between them'],
            },
            {
              label: 'Simple',
              descriptor:
                'A simple answer with some support from the extracts, simple comments on the writing, a few basic links between the extracts and some awareness of context.',
              indicators: ['A few basic links', 'Some awareness of context'],
            },
            {
              label: 'Fuller, with some comparison',
              descriptor:
                "A fuller answer that shows understanding, makes some direct comparisons, uses some relevant quotations, explains some of the writers' choices and comments on context in places.",
              indicators: ['Some direct comparisons', "Some of the writers' choices explained"],
            },
            {
              label: 'Detailed, developing argument',
              descriptor:
                'A detailed answer with a developing argument: key points of comparison are developed, quotations are relevant, there is some real analysis of the writing, and context clearly shapes the reading.',
              indicators: ['Key points of comparison developed', 'Context shapes the reading'],
            },
            {
              label: 'Well built and persuasive',
              descriptor:
                'A well-built, persuasive argument that compares the extracts throughout, with well-suited quotations built into the sentences, careful analysis, and context that informs the interpretation.',
              indicators: ['Compares the extracts throughout', 'Quotations built into sentences'],
            },
            {
              label: 'Insightful, tightly argued',
              descriptor:
                'An insightful, tightly argued answer that compares the extracts in every paragraph, with exact quotations built into the argument, close analysis of the writing and a subtle grasp of how context shapes each extract.',
              indicators: [
                'Compares the extracts in every paragraph',
                'A subtle grasp of how context shapes each extract',
              ],
            },
          ]),
        },
      ],
      examinerNotes:
        'OCR marks this answer as a whole on one six-level grid out of 20 (one mark for the grid, id AO1-AO3), weighted AO1 8, AO2 4 and AO3 8: personal response and context count for most, analysis of the writing for less. Comparison of the two extracts is needed throughout. The paper tells candidates to keep to the two printed extracts, so reward comparison of the extracts, not discussion of the rest of the studied text. Context means the situations each extract suggests (social, family, age, class, culture), worked into the comparison rather than added as facts. AO4 is not assessed in Section A.',
    },
    {
      id: 'Section A (b)',
      questionType: 'Modern prose or drama: elsewhere in the studied text',
      taskDescription:
        'Explore another moment in the studied modern prose or drama text that fits the idea the question names: a different moment from the part (a) extract, written about from memory.',
      totalMarks: 20,
      assessmentObjectives: [
        {
          id: 'AO1-AO2',
          label: 'AO1-AO2 - Response and analysis, on one grid',
          description:
            'OCR marks the answer as a whole on one grid covering two objectives, weighted equally, AO1 10 and AO2 10 of the 20 marks. AO1: an informed personal response to the moment chosen, argued and supported by references or quotations from memory. AO2: analysis of how the writer uses language, form and structure at that moment, with subject terms.',
          maxMarks: 20,
          weighting: 1,
          bands: levels(PART_RANGES, [
            {
              label: 'A few relevant remarks',
              descriptor:
                'A few relevant remarks with little reference to the text and little awareness of how it is written.',
              indicators: ['Little reference to the text'],
            },
            {
              label: 'Simple',
              descriptor:
                'A simple answer that begins to address the question, with some support from the text and simple comments on the writing.',
              indicators: ['Begins to answer the question', 'Simple comments on the writing'],
            },
            {
              label: 'Fuller, showing understanding',
              descriptor:
                "A fuller answer that shows understanding, with some relevant references or quotations and a reasonable explanation of the writer's choices, using some subject terms.",
              indicators: ['Some relevant references', "The writer's choices explained"],
            },
            {
              label: 'Detailed and focused',
              descriptor:
                'A detailed, focused answer with a developing argument, relevant references and some real analysis of language, form and structure.',
              indicators: ['A developing argument', 'Some real analysis of the writing'],
            },
            {
              label: 'Well built and persuasive',
              descriptor:
                'A well-built, persuasive argument with well-suited quotations built in, and careful, detailed analysis that uses subject terms well.',
              indicators: ['Quotations built in', 'Careful, detailed analysis'],
            },
            {
              label: 'Insightful, tightly argued',
              descriptor:
                'An insightful, tightly argued answer throughout, with exact quotations from memory and close, detailed analysis of how the writer creates meaning.',
              indicators: ['Exact quotations from memory', 'Close analysis of how meaning is made'],
            },
          ]),
        },
      ],
      examinerNotes:
        'OCR marks this answer as a whole on one six-level grid out of 20 (one mark for the grid, id AO1-AO2), with response (AO1) and analysis of language, form and structure (AO2) weighted equally, 10 each. The candidate writes from memory about a different moment in the same studied text: an answer that discusses only the part (a) extract scores 0. Reward a well-chosen moment that fits the question, explored in detail. AO3 and AO4 are not assessed in this part.',
    },
    {
      id: 'Section B',
      questionType: '19th-century prose (extract-based or discursive)',
      taskDescription:
        'Answer one question, from a choice of an extract-based question and a discursive question, on the studied 19th-century prose text (for example Great Expectations, Jekyll and Hyde or A Christmas Carol).',
      totalMarks: 40,
      assessmentObjectives: [
        essayGrid(
          'novel',
          "the writer's",
          "context that bears on the question, such as the period's social or historical ideas or the conventions of a genre like the Gothic",
        ),
        ao4Accuracy,
      ],
      examinerNotes:
        "Two grids, added: AO1, AO2 and AO3 together on one six-level grid out of 36 (one mark for the grid, id AO1-AO3; weighted AO1 14, AO2 14, AO3 8), and spelling, punctuation and grammar on their own grid out of 4 (id AO4). The candidate answers one of two questions on the novel: an extract-based question, which must also go beyond the extract, or a discursive question, which must range across two or more moments. An extract-based answer that stays inside the extract, or a discursive answer on one moment only, cannot go above Level 3; OCR's June 2023 mark scheme also held an answer to Level 4 where the rest of the novel, or a second moment, got only a passing mention. Context earns credit only where it bears on the question and is linked to the points made.",
    },
  ],
}

// ─── Component 02: Exploring poetry and Shakespeare ─────────────────────────

export const ocrLitComponent02: MarkScheme = {
  id: 'ocr-lit-component02',
  board: 'OCR',
  subject: 'English Literature',
  paper: 'Component 02',
  title: 'Exploring Poetry and Shakespeare',
  totalMarks: 80,
  durationMinutes: 120,
  version: 'J352/02',
  sourceUrl:
    'https://www.ocr.org.uk/qualifications/gcse/english-literature-j352-from-2015/assessment/',
  questions: [
    {
      id: 'Section A (a)',
      questionType: 'Poetry across time: comparing a named anthology poem with an unseen poem',
      taskDescription:
        'Compare how a named poem from the studied cluster of the OCR anthology and an unseen poem, both printed on the paper, present an idea or feeling.',
      totalMarks: 20,
      assessmentObjectives: [
        {
          id: 'AO1-AO2',
          label: 'AO1-AO2 - Response and analysis, on one grid',
          description:
            'OCR marks the answer as a whole on one grid covering two objectives, with an intended weighting of AO1 8 and AO2 12 of the 20 marks, so analysis is the dominant objective. AO1: an informed personal response to both poems, supported by quotations and comparing them throughout. AO2: close analysis of how language, form and structure create meaning in both poems, with subject terms.',
          maxMarks: 20,
          weighting: 1,
          bands: levels(PART_RANGES, [
            {
              label: 'A few relevant remarks',
              descriptor:
                'A few relevant remarks about the poems, with little reference to them, very little sense of how they are written and little or no linking of the two.',
              indicators: ['Little reference to either poem', 'Little or no linking'],
            },
            {
              label: 'Simple',
              descriptor:
                'A simple response with some support from the poems, simple comments on language, form or structure, and a few basic links between them.',
              indicators: ['Simple comments on the writing', 'A few basic links'],
            },
            {
              label: 'Fuller, with some comparison',
              descriptor:
                "A fuller response that explains some of the poets' choices, uses some subject terms and relevant quotations, and makes some direct comparisons.",
              indicators: ["Some of the poets' choices explained", 'Some direct comparisons'],
            },
            {
              label: 'Detailed, some real analysis',
              descriptor:
                'A detailed response with some real analysis of language, form and structure, terms used correctly, relevant quotations and some developed points of comparison.',
              indicators: ['Some real analysis of both poems', 'Developed points of comparison'],
            },
            {
              label: 'Well built and persuasive',
              descriptor:
                'A well-built, persuasive response with careful analysis of both poems, well-suited quotations built into the sentences, good use of terms and comparison kept up throughout.',
              indicators: ['Careful analysis of both poems', 'Comparison kept up throughout'],
            },
            {
              label: 'Close, insightful analysis',
              descriptor:
                'Close, insightful analysis of how both poems work, with exact quotations built into a tightly argued response that compares the poems in every paragraph.',
              indicators: ['Compares the poems in every paragraph', 'Exact quotations built in'],
            },
          ]),
        },
      ],
      examinerNotes:
        'OCR marks this answer as a whole on one six-level grid out of 20 (one mark for the grid, id AO1-AO2), weighted AO1 8 and AO2 12: analysis of language, form and structure is the dominant objective. Comparison of the two poems is needed throughout. An answer on only one poem is unlikely to rise above Level 2 and cannot go above Level 3. Context is not assessed in Section A, and nor is AO4.',
    },
    {
      id: 'Section A (b)',
      questionType: 'Poetry across time: another poem from the cluster',
      taskDescription:
        "Explore how an idea is presented in one other poem of the student's choice from the same anthology cluster, not the named poem from part (a), written about from memory.",
      totalMarks: 20,
      assessmentObjectives: [
        {
          id: 'AO1-AO2',
          label: 'AO1-AO2 - Response and analysis, on one grid',
          description:
            "OCR marks the answer as a whole on one grid covering two objectives, weighted equally, AO1 10 and AO2 10 of the 20 marks. AO1: an informed personal response to the poem chosen, supported by quotations from memory. AO2: analysis of the poet's language, form and structure, with subject terms.",
          maxMarks: 20,
          weighting: 1,
          bands: levels(PART_RANGES, [
            {
              label: 'A few relevant remarks',
              descriptor:
                'A few relevant remarks with little reference to the poem and little awareness of how it is written.',
              indicators: ['Little reference to the poem'],
            },
            {
              label: 'Simple',
              descriptor:
                'A simple answer that begins to address the question, with some support from the poem and simple comments on the writing.',
              indicators: ['Begins to answer the question', 'Simple comments on the writing'],
            },
            {
              label: 'Fuller, showing understanding',
              descriptor:
                "A fuller answer that shows understanding, with some relevant references or quotations and a reasonable explanation of the poet's choices, using some subject terms.",
              indicators: ['Some relevant references', "The poet's choices explained"],
            },
            {
              label: 'Detailed and focused',
              descriptor:
                'A detailed, focused answer with a developing argument, relevant references and some real analysis of language, form and structure.',
              indicators: ['A developing argument', 'Some real analysis of the writing'],
            },
            {
              label: 'Well built and persuasive',
              descriptor:
                'A well-built, persuasive argument with well-suited quotations built in, and careful, detailed analysis that uses subject terms well.',
              indicators: ['Quotations built in', 'Careful, detailed analysis'],
            },
            {
              label: 'Insightful, tightly argued',
              descriptor:
                'An insightful, tightly argued answer throughout, with exact quotations from memory and close, detailed analysis of how the poet creates meaning.',
              indicators: ['Exact quotations from memory', 'Close analysis of how meaning is made'],
            },
          ]),
        },
      ],
      examinerNotes:
        "OCR marks this answer as a whole on one six-level grid out of 20 (one mark for the grid, id AO1-AO2), with response (AO1) and analysis (AO2) weighted equally, 10 each. The poem must come from the candidate's own cluster and must not be the named poem from part (a); a poem from another cluster scores 0. It is written about from memory. AO3 and AO4 are not assessed in Section A.",
    },
    {
      id: 'Section B',
      questionType: 'Shakespeare (extract-based or discursive)',
      taskDescription:
        'Answer one question, from a choice of an extract-based question and a discursive question, on the studied Shakespeare play.',
      totalMarks: 40,
      assessmentObjectives: [
        essayGrid(
          'play',
          "Shakespeare's",
          'the social, historical or cultural ideas the play shows, where they bear on the question',
        ),
        ao4Accuracy,
      ],
      examinerNotes:
        "Two grids, added: AO1, AO2 and AO3 together on one six-level grid out of 36 (one mark for the grid, id AO1-AO3; weighted AO1 14, AO2 14, AO3 8), and spelling, punctuation and grammar on their own grid out of 4 (id AO4). The candidate answers one of two questions on the play: an extract-based question, which must also go beyond the extract, or a discursive question, which must range across two or more moments. An extract-based answer that stays inside the extract, or a discursive answer on one moment only, cannot go above Level 3, and one where the rest of the play, or a second moment, gets only a brief mention cannot go above Level 4. Context earns credit only where it bears on the question as the play shows it, not as general facts about Shakespeare's life or theatre.",
    },
  ],
}
