// ─── Edexcel International GCSE English Literature (4ET1) Mark Scheme ────────
// Paper 1: Poetry and Modern Prose - 2h, 90 marks.
//   Section A - Unseen poetry            (20 marks: AO2, one grid)
//   Section B - Anthology poetry         (30 marks: AO2 and AO3 on one grid)
//   Section C - Modern prose             (40 marks: AO1 and AO4 on one grid)
//
// ONE GRID PER SECTION, AS PEARSON MARKS IT (24 October 2026). Until then
// Sections B and C each carried two objectives on ladders of this file's own,
// scored separately and added: Section B AO2 15 (1-3 to 13-15) and AO3 15
// (1-4 to 12-15), Section C AO1 20 (1-4 to 17-20) and AO4 20 (1-5 to 16-20).
// Pearson marks each section on one grid of five levels. Section B runs from
// Level 1 1-6 to Level 5 25-30, with analysis (AO2) and comparison (AO3)
// equally weighted inside it. Section C runs from Level 1 1-8 to Level 5
// 33-40, for knowledge of the novel (AO1) and context (AO4), and the June 2025
// examiners' report says the essay is marked as a whole, not split 20 and 20.
// With two ladders nothing in the data held an answer on only one poem to the
// 12 marks at the top of Pearson's Level 2: there was no 30-mark Level 2 to
// hold it to. Each section is now one objective entry, 'AO2+AO3' and
// 'AO1+AO4', whose bands are Pearson's levels, and the one-poem limit is in
// the Section B notes.
//
// 'AO1+AO4' names the two objectives Section C covers, joined by a plus
// because they are not a range: AO2 and AO3 are not assessed in Section C.
// (It was 'AO1-AO4' for an hour on 24 October 2026, which a student would
// read as "AO1 to AO4"; 'AO2+AO3' took the plus too, as Pearson's GCSE
// grids in ./edexcel-lit.ts do.) Both ids are upper case because
// feedback-generator.ts upper-cases the id the model returns before looking
// it up, and each label opens with its id because the label is what both
// prompt builders show the model.
//
// Also corrected that day:
//   - AO1 and AO2 were described in the wording of GCSE English Literature in
//     England, and every AO2 band graded subject terminology. On 4ET1, AO1 is
//     close knowledge of the text in a critical style with an informed,
//     personal engagement, and neither AO2 nor the Section A and B grids
//     mention terminology. The descriptions and bands now say so.
//   - The AO1 description and two of its bands asked for quotations. Section C
//     is closed book: Pearson's grid asks for relevant examples, and the June
//     2025 report says quotations are not required and references to episodes
//     count.
//   - Section B's task said, as a rule, that one question names both poems and
//     the other names one. That is what the sample paper and every recent
//     paper do, not a rule of the specification, and the task now says so.
//
// The figures come from the guide to this paper,
// src/data/mark-scheme-guides/edexcel-igcse-lit.ts, written and then checked
// by a second reader against Pearson's specification (Issue 3, August 2025),
// sample assessment materials (Issue 3, August 2024) and June 2025 question
// paper, mark scheme (4ET1_01_2506_MS) and examiners' report (4ET1_01_2506_ER).
// The founder approved changing the marker on 24 October 2026 (document 30).
// That is not a check of this file by a person, so the scheme is not in
// VERIFIED_SPECS (src/lib/marking/examiner/verification.ts). The level
// descriptors below are our own words: Pearson's are its copyright and are not
// copied. src/lib/marking/mark-schemes/__tests__/edexcel-igcse-structure.test.ts
// holds this file to the guide.
//
// AO3 IS COMPARISON AND AO4 IS CONTEXT, IN THEIR GUIDANCE AS WELL AS THEIR
// NAMES (10 October 2026). The 19 September correction swapped the two labels
// but left each objective's description and bands where they were, so AO3,
// named for connections between texts, still carried the context description
// and bands, and AO4 the comparison ones. The marker is prompted with the
// description and the bands, not the label: Section B, the comparison
// question, was still marked against context, and Section C, the context
// question, against comparison. The test checked the names and passed
// throughout. The grids below keep that correction: Section B's carries
// comparison and never context, Section C's context and never comparison,
// and src/__tests__/4et1-marking-matches-pearsons-mark-scheme.test.ts checks
// the guidance itself.
//
// CORRECTED 19 September 2026 (EXAM-5), against Pearson's own published mark
// scheme for June 2024, Paper 1R. Every number and every objective in the
// previous version was wrong, and two of them were wrong in the way that does
// the most damage.
//
// THE TOTALS. The paper was declared as 60 marks in 1h45 across three equal
// 20-mark sections. It is 90 marks in 2 hours, and the sections are 20, 30 and
// 40. So a student whose essay the tool marked out of 20 was reading a site
// page that told them Section C is worth 40, and the two disagreed by double.
//
// THE OBJECTIVES WERE SWAPPED, which is worse than a wrong total because the
// feedback text is built from the objective. In 4ET1:
//
//   AO3  Explore links and connections between texts
//   AO4  Show understanding of the relationships between texts and the
//        contexts in which they were written
//
// The code had AO3 labelled "Context" and AO4 labelled "Explore connections" -
// exactly the wrong way round. Section B, which is the comparison question,
// was marked for context; Section C, which is the context question, was marked
// for comparison. A student was told to compare texts on a question that does
// not ask them to, and told to add context on the question that does not
// credit it.
//
// Section A was also given an AO1 allocation it does not have. It is AO2 only.
//
// PAPER 2 IS STILL NOT HERE, deliberately. The backlog item proposed adding it
// (60 marks: modern drama 30, literary heritage 30) but the only primary
// document read was the Paper 1R mark scheme, which says nothing about Paper 2.
// Adding a second paper on an unverified tariff would put the same class of
// error back in, one paper along.
//
// Sources:
//   https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-english-literature-2016.html
//   Pearson Edexcel International GCSE English Literature (4ET1) specification,
//   Issue 3 (August 2025), and sample assessment materials, Issue 3 (August
//   2024), Component 1 question paper and mark scheme.
//   Question paper, mark scheme (4ET1_01_2506_MS) and examiners' report
//   (4ET1_01_2506_ER), June 2025, Paper 1. Read 24 October 2026.
//   Mark Scheme (Results) June 2024, Paper 1R. Read 19 September 2026.
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective, BandDescriptor } from './types'

// ─── Section A: unseen poetry, AO2 on one grid (20 marks) ──────────────────
// Pearson's levels: 1-4, 5-8, 9-12, 13-16, 17-20.

const SECTION_A_LEVELS: BandDescriptor[] = [
  {
    band: 'Level 1',
    minMarks: 1,
    maxMarks: 4,
    label: 'Basic',
    descriptor:
      'A simple response that notices very little about how the poem is written. Comments mostly retell or describe the poem, and few examples are used.',
    indicators: [
      'Retells or describes rather than analyses',
      'One or two obvious features noticed at most',
      'Few examples from the poem',
    ],
  },
  {
    band: 'Level 2',
    minMarks: 5,
    maxMarks: 8,
    label: 'Some',
    descriptor:
      "Mostly explains what the poem is about, with some comment on how the poet's choices of language, form or structure work, supported by some examples.",
    indicators: [
      "Some comment on the effect of the poet's choices",
      'Examples used but not always explained',
    ],
  },
  {
    band: 'Level 3',
    minMarks: 9,
    maxMarks: 12,
    label: 'Clear',
    descriptor:
      "Explains clearly how several of the poet's choices of language, form and structure work and what they do for the reader, with relevant examples.",
    indicators: [
      'Clear explanation of methods and their effects',
      'Relevant examples that support the points',
    ],
  },
  {
    band: 'Level 4',
    minMarks: 13,
    maxMarks: 16,
    label: 'Thorough',
    descriptor:
      "Stays on the question and analyses the poet's methods and their effects in depth all the way through, with well-chosen examples from across the poem.",
    indicators: [
      'Detailed analysis kept up across the whole poem',
      'Well-chosen examples that carry the points',
    ],
  },
  {
    band: 'Level 5',
    minMarks: 17,
    maxMarks: 20,
    label: 'Perceptive',
    descriptor:
      'Treats the poem as a whole, judging with insight how its language, form and structure work together to make meaning, with precisely chosen examples.',
    indicators: [
      'Perceptive analysis of how the methods work together',
      'Precisely chosen examples throughout',
    ],
  },
]

const SECTION_A_GRID: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Analyse language, form and structure',
  description:
    "Analyse how the poet's language, form and structure create meanings and effects. Pearson's grid for this section does not mention subject terminology: a term earns credit only through the analysis it supports.",
  maxMarks: 20,
  weighting: 20 / 20,
  bands: SECTION_A_LEVELS,
}

// ─── Section B: anthology poetry, AO2 and AO3 on one grid (30 marks) ───────
// Pearson's levels: 1-6, 7-12, 13-18, 19-24, 25-30. Analysis and comparison
// are equally weighted inside the grid; there are not two marks.

const SECTION_B_LEVELS: BandDescriptor[] = [
  {
    band: 'Level 1',
    minMarks: 1,
    maxMarks: 6,
    label: 'Basic',
    descriptor:
      'A simple response that notices very little about how the poems are written and makes few links between them. The poems are mostly taken one at a time, with few examples.',
    indicators: [
      'Little comment on language, form or structure',
      'Hardly any comparison between the poems',
      'Few examples from either poem',
    ],
  },
  {
    band: 'Level 2',
    minMarks: 7,
    maxMarks: 12,
    label: 'Some',
    descriptor:
      'Mostly describes the poems, with some comment on how they are written and a few obvious similarities or differences that are not developed. An answer on only one poem cannot go above this level.',
    indicators: [
      "Some comment on the poets' methods",
      'Obvious links between the poems, not developed',
      'An answer on one poem only stops here, at 12 at most',
    ],
  },
  {
    band: 'Level 3',
    minMarks: 13,
    maxMarks: 18,
    label: 'Clear',
    descriptor:
      "Explains clearly how several of each poet's methods work and what they do for the reader, and compares the poems on a number of points, with relevant examples from both.",
    indicators: [
      'Clear explanation of methods in both poems',
      'Comparison on several points',
      'Relevant examples from both poems',
    ],
  },
  {
    band: 'Level 4',
    minMarks: 19,
    maxMarks: 24,
    label: 'Thorough',
    descriptor:
      'Keeps up detailed analysis of both poems and their effects on the reader, and draws out many similarities and differences between the poems, with well-chosen examples from each.',
    indicators: [
      'Detailed analysis of both poems throughout',
      'Many developed points of comparison',
      'Well-chosen examples, fairly balanced between the poems',
    ],
  },
  {
    band: 'Level 5',
    minMarks: 25,
    maxMarks: 30,
    label: 'Perceptive',
    descriptor:
      "Judges with insight how each poet's language, form and structure work together, and compares the poems perceptively on many fronts, with precisely chosen examples from both.",
    indicators: [
      'Perceptive analysis of how the methods work together',
      'Comparison that drives the whole answer',
      'Precisely chosen examples from both poems',
    ],
  },
]

const SECTION_B_GRID: AssessmentObjective = {
  id: 'AO2+AO3',
  label: 'AO2+AO3 - Analysis (AO2) and connections between the poems (AO3), one grid',
  description:
    "Pearson marks the whole answer on one grid out of 30, in which analysing each poem's language, form and structure (AO2) and comparing the two poems, their ideas and how they are written (AO3) carry equal weight. There is one mark, not two, so thin comparison holds back the whole mark, and so does thin analysis.",
  maxMarks: 30,
  weighting: 30 / 30,
  bands: SECTION_B_LEVELS,
}

// ─── Section C: modern prose, AO1 and AO4 on one grid (40 marks) ───────────
// Pearson's levels: 1-8, 9-16, 17-24, 25-32, 33-40. Closed book, so the grid
// asks for relevant examples: a short quotation and a precise reference to an
// episode both count.

const SECTION_C_LEVELS: BandDescriptor[] = [
  {
    band: 'Level 1',
    minMarks: 1,
    maxMarks: 8,
    label: 'Basic',
    descriptor:
      'Knows only a little of the novel and says something simple about it, with little sense of a personal response, hardly any awareness of context and few examples.',
    indicators: [
      'Thin knowledge of the novel, mostly retold',
      'Little sense of a personal response',
      'Context barely mentioned',
    ],
  },
  {
    band: 'Level 2',
    minMarks: 9,
    maxMarks: 16,
    label: 'Some',
    descriptor:
      'Shows some knowledge of the novel but mostly retells the story, with occasional signs of a personal response, a little relevant context and some examples.',
    indicators: [
      'Some knowledge, largely narrative',
      'A personal response beginning to show',
      'Some context, loosely linked to the points',
    ],
  },
  {
    band: 'Level 3',
    minMarks: 17,
    maxMarks: 24,
    label: 'Sound',
    descriptor:
      'Knows the novel securely and answers with a sensible argument of its own in a suitable critical style. Context is brought in where it is relevant, and the examples support the points.',
    indicators: [
      'Secure knowledge used to answer the question',
      'A clear personal argument',
      'Relevant context linked to the novel',
    ],
  },
  {
    band: 'Level 4',
    minMarks: 25,
    maxMarks: 32,
    label: 'Sustained',
    descriptor:
      'Knows the novel in depth and keeps a thoughtful argument going all the way through. Context is understood in detail and supports the points, with well-chosen examples from across the novel.',
    indicators: [
      'Detailed knowledge across the whole novel',
      'A thoughtful argument kept up throughout',
      'Context understood in detail and used to support the points',
    ],
  },
  {
    band: 'Level 5',
    minMarks: 33,
    maxMarks: 40,
    label: 'Assured',
    descriptor:
      'Knows the whole novel thoroughly and argues with real insight. Context is part of the argument throughout rather than added on, and every example is chosen with precision.',
    indicators: [
      'An assured, perceptive argument',
      'Context woven into the argument',
      'Precise examples, whether short quotations or exact references to episodes',
    ],
  },
]

const SECTION_C_GRID: AssessmentObjective = {
  id: 'AO1+AO4',
  label: 'AO1+AO4 - Knowledge of the novel (AO1) and its context (AO4), one grid',
  description:
    'Pearson marks the whole essay on one grid out of 40: close knowledge and understanding of the novel, argued as an informed, personal response in a critical style (AO1), and understanding of how the novel relates to the times, places and society in which it was written and is set (AO4). The specification weights the two equally, but the mark is led by knowledge of the novel, and context should serve the argument rather than replace it.',
  maxMarks: 40,
  weighting: 40 / 40,
  bands: SECTION_C_LEVELS,
}

// ─── Paper: Poetry and Modern Prose (4ET1/01) ──────────────────────────────
// A 90-mark paper of three unequal sections, each marked on one grid. Each
// section examines a different objective or pair of objectives; no section
// carries all four.

export const edexcelIgcseLit: MarkScheme = {
  id: 'edexcel-igcse-lit',
  board: 'Edexcel IGCSE',
  subject: 'English Literature',
  paper: 'Paper 1',
  title: 'Poetry and Modern Prose',
  totalMarks: 90,
  durationMinutes: 120,
  version: '4ET1/01',
  // The old address, .../edexcel-international-gcses/english-literature-2016.html,
  // now lands on Pearson's 404 page (checked 10 October 2026).
  sourceUrl:
    'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-english-literature-2016.html',
  questions: [
    {
      id: 'Section A',
      questionType: 'Unseen poetry analysis',
      taskDescription:
        'Read one previously unseen poem and explore how the poet presents a theme, feeling or idea, considering the use of language, form and structure.',
      totalMarks: 20,
      assessmentObjectives: [SECTION_A_GRID],
      examinerNotes:
        'AO2 only, on one grid out of 20. Context is not assessed in this section and earns nothing; reward analysis of how the poem is written and the effects its language, form and structure create, with examples from across the poem. Spelling, punctuation and grammar are not marked on this paper. About 35 minutes.',
    },
    {
      id: 'Section B',
      questionType: 'Anthology poetry comparison',
      // Pearson's specification (Issue 3, August 2025), its sample paper and
      // the question papers since: a choice of two comparison questions. In
      // every paper checked one names both poems and the other names one,
      // which is the papers' practice rather than a rule of the
      // specification, so the task says so (24 October 2026).
      taskDescription:
        'Answer one of two questions, each asking you to compare how two poems from Part 3 of the Pearson Edexcel International GCSE English Anthology present the idea or experience it names, with reference to language, form and structure. In the sample paper and recent papers, one question names both poems and the other names one, leaving you to choose the second from the anthology.',
      totalMarks: 30,
      assessmentObjectives: [SECTION_B_GRID],
      examinerNotes:
        'All the Part 3 poems are printed in a separate Poetry Booklet that comes with the paper, so nothing is quoted from memory. Give one mark out of 30 from the one grid (AO2+AO3): analysis and comparison are weighed together, not marked separately. ONE-POEM LIMIT: an answer that writes about only one poem cannot go above the top of Level 2 (12 marks), however good its analysis. Context (AO4) is not assessed in this section. Spelling, punctuation and grammar are not marked on this paper. About 40 minutes.',
    },
    {
      id: 'Section C',
      questionType: 'Modern prose essay',
      taskDescription:
        'Answer one of the two questions on the modern prose text you studied (Questions 4 to 17), usually about a character, a theme, a relationship or a view to weigh up. Every question asks you to consider the context of the novel.',
      totalMarks: 40,
      assessmentObjectives: [SECTION_C_GRID],
      examinerNotes:
        'A closed-book, whole-novel essay and the largest question on the paper. Give one mark out of 40 from the one grid (AO1+AO4): knowledge of the novel and context are weighed together, not marked separately, and the mark is led by how well the novel is known and understood. Quotations are not required: short quotations and precise references to episodes both count as examples. Context should be linked to points about the novel, not set apart in a block. Language, form and structure (AO2) are not assessed in this section, and spelling, punctuation and grammar are not marked on this paper. About 45 minutes.',
    },
  ],
}

/**
 * Aggregated export of the Edexcel International GCSE English Literature (4ET1)
 * mark scheme(s).
 */
export const edexcelIgcseLitMarkSchemes: readonly MarkScheme[] = [edexcelIgcseLit]
