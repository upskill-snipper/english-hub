// ─── AQA GCSE English Literature Paper 2 Mark Scheme ────────────────────────
// Modern texts and poetry - 2 hours 15 minutes, 96 marks.
//
// ADDED 9 October 2026. Until then the corpus had no Paper 2, so essay feedback
// gave every 8702/2 answer general feedback with no marks, and the marking
// tool could not mark an AQA modern-text, anthology or unseen-poetry answer.
// Its tariffs were checked against AQA's June 2023 mark scheme for 8702/2.
//
// CORRECTED 24 October 2026, with the founder's approval (document 30). The
// mark-scheme guide for this paper (src/data/mark-scheme-guides/aqa-lit-paper2.ts),
// written and checked against AQA's 8702/2 mark scheme and question paper for
// June 2025 and the 8702 specification (version 1.3, 28 September 2022),
// found that this data did not mark the paper as AQA does. The paper's 96
// marks in 2 hours 15 minutes and every question's marks and objectives
// already agreed and are unchanged:
//   Section A, modern prose or drama (Questions 1 to 24, two on each text,
//     answer one): 30 marks (AO1 12, AO2 12, AO3 6) and 4 for AO4, the only
//     AO4 marks on the paper;
//   Section B, the anthology (Questions 25 to 27, one on each cluster): a
//     named poem, printed, compared with one other from the same cluster, 30
//     marks (AO1 12, AO2 12, AO3 6), with comparison credited under AO1;
//   Section C, unseen poetry: 28.1 on one poem, 24 marks (AO1 12, AO2 12),
//     and 28.2 comparing the poets' methods across it and a second poem, 8
//     marks, AO2 alone, in four levels (1-2, 3-4, 5-6, 7-8).
// What changed:
//   - AQA marks each answer as a whole on ONE six-level grid: AO1, AO2 and
//     AO3 together out of 30 in Sections A and B (Level 1 1-5 up to Level 6
//     26-30), AO1 and AO2 together out of 24 in 28.1 (Level 1 1-4 up to
//     Level 6 21-24), and AO4 on its own small grid in Section A. This data
//     gave each objective its own ladder, shared with Paper 1. Each grid is
//     now one objective, 'AO1-AO3' or 'AO1-AO2' (./aqa-lit-paper1.ts says why
//     the ids are written so), with descriptors in our own words.
//   - The unseen questions are 28.1 and 28.2, as they have been since June
//     2025, when the third anthology cluster (Worlds and lives) was first
//     examined and the anthology questions became 25 to 27. This data still
//     numbered them 27.1 and 27.2, as the June 2023 paper did.
//   - The Section B cap was missing: an answer that leaves out the named
//     poem, writes about one poem only, or takes its second poem from another
//     cluster goes no higher than the top of Level 2, 10 of 30.
//   - Telling Tales, the short-story collection, is answered on the story
//     the question names and one other, which together are the whole text,
//     and comparison is not assessed; Section A treated every text alike.
// The correction is not a check by a person, so the scheme is still not in
// ../examiner/verification.ts and says that it is unverified.
//
// Section C's questions are "Section C (a)" and "(b)", AQA's 28.1 and 28.2, so
// that a mock's two unseen questions resolve by their order in the section
// (../essay-feedback-targets.ts). No question id changed: saved essays name
// Section A.
//
// Source: https://www.aqa.org.uk/subjects/english/gcse/english-8702
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from './types'
import { aqaLitAnswerGrid, aqaLitAO4 } from './aqa-lit-paper1'

/** Section B: the anthology comparison, AO1 to AO3 on one grid of 30. */
const comparisonGrid: AssessmentObjective = {
  id: 'AO1-AO3',
  // The same label as Paper 1's grid, which says why it names no skill.
  label: 'AO1-AO3 - AO1, AO2 and AO3, marked together on one grid',
  description:
    "One six-level grid for the whole answer, as AQA marks it: AO1, an informed response that compares the two poems, supported by references, which is where the comparison is credited; AO2, analysis of how each poet's language, form and structure create meanings and effects, using subject terms; AO3, the relationship between the poems and their contexts. Choose the level that best fits the answer as a whole, then the mark within it. Within the 30 marks AO1 and AO2 weigh 12 each and AO3 6.",
  maxMarks: 30,
  weighting: 1,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 5,
      label: 'Basic links',
      descriptor:
        "Notices basic links between the two poems, mostly by describing them, with a few relevant details and only a hint of the poets' choices.",
      indicators: [
        'Writes about each poem in turn, with little linking',
        'A few general references',
        'Methods rarely noticed',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 6,
      maxMarks: 10,
      label: 'Supported comparisons',
      descriptor:
        'Makes relevant comparisons backed by references, picks out some of the methods in each poem, and touches on ideas and context.',
      indicators: [
        'Comparisons made, with evidence from both poems',
        'Methods named, with little on their effect',
        'Context touched on rather than used',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 11,
      maxMarks: 15,
      label: 'Comparison explained',
      descriptor:
        'Explains some points of comparison with relevant references, comments on methods in both poems with a few subject terms, and links ideas or context to the poems in places.',
      indicators: [
        'Says how the poems are alike or different, and why',
        "Some comment on the effects of each poet's choices",
        'Context linked to the poems in places',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 16,
      maxMarks: 20,
      label: 'Clear, steady comparison',
      descriptor:
        "Keeps a steady comparison going, explaining how each poet's methods create effects with suitable subject terms, with a secure grasp of ideas and context in both poems.",
      indicators: [
        'Comparison runs through the whole answer',
        'Effects of methods in both poems explained, with accurate terms',
        "Context used to explain both poets' choices",
      ],
    },
    {
      band: 'Level 5',
      minMarks: 21,
      maxMarks: 25,
      label: 'Developed comparison',
      descriptor:
        'Builds a well-developed comparison with references fitted smoothly into the writing, looks closely at methods in both poems, and uses ideas and context to add depth.',
      indicators: [
        'Well-chosen references from both poems woven together',
        'Close examination of methods and their effects in each poem',
        'Context deepens the comparison',
      ],
    },
    {
      band: 'Level 6',
      minMarks: 26,
      maxMarks: 30,
      label: 'Confident, exploratory comparison',
      descriptor:
        'Builds the whole comparison around a confident overarching idea and explores it critically: exact, well-chosen references, very close analysis of both poems, and ideas, context and other readings handled with skill.',
      indicators: [
        'A comparison shaped by one central idea',
        'Precise references from both poems',
        'Methods, context and other readings explored, not only explained',
      ],
    },
  ],
}

/** Question 28.1: AO1 and AO2 on one grid of 24. */
const unseenGrid: AssessmentObjective = {
  id: 'AO1-AO2',
  label: 'AO1-AO2 - AO1 and AO2, marked together on one grid',
  description:
    "One six-level grid for the whole answer, as AQA marks it: AO1, an informed response to the poem and the question, supported by quotations; AO2, analysis of how the poet's language, form and structure create meanings and effects, using subject terms. Choose the level that best fits the answer as a whole, then the mark within it. AO1 and AO2 weigh 12 marks each.",
  maxMarks: 24,
  weighting: 1,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Basic comments',
      descriptor:
        'Says some basic things about the poem, with a little relevant detail and a hint that the poet made choices.',
      indicators: [
        'Describes the poem rather than answering the question',
        'Methods rarely noticed',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Relevant and supported',
      descriptor:
        "Backs up relevant comments with quotations and picks out some of the poet's methods, with little yet on their effect.",
      indicators: [
        'Comments answer the question and come with quotations',
        'Methods named, with little on their effect',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Starting to explain',
      descriptor:
        'Starts to explain what parts of the poem show about the idea in the question, with relevant quotations and some comment on methods using subject terms.',
      indicators: [
        'Says what quotations show, not only what they say',
        "Some comment on the effects of the poet's choices",
      ],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Clear and secure',
      descriptor:
        'Reads the poem securely and explains how its methods create effects, with suitable subject terms and well-chosen quotations.',
      indicators: [
        'A clear reading that moves across the poem',
        'Effects of methods explained, with accurate terms',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 17,
      maxMarks: 20,
      label: 'Developed and detailed',
      descriptor:
        "Builds a detailed interpretation, with quotations fitted smoothly into the writing and close examination of the poet's methods.",
      indicators: [
        'Quotations woven into the interpretation',
        'Close examination of methods and their effects',
      ],
    },
    {
      band: 'Level 6',
      minMarks: 21,
      maxMarks: 24,
      label: 'Confident and exploratory',
      descriptor:
        "Builds a confident reading of the whole poem around an overarching idea, with exact quotations and very close analysis of how the poet's methods shape meaning.",
      indicators: [
        'A reading shaped by one central idea about the poem',
        'Precise quotations chosen for exactly what they show',
      ],
    },
  ],
}

/** Question 28.2: AO2 alone, on comparing the two poets' methods. */
const ao2Comparison: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Analyse language, form and structure',
  description:
    "Compare the effects of the two poets' methods: how each uses language, form and structure to create meanings, using relevant subject terminology.",
  maxMarks: 8,
  weighting: 1,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Simple',
      descriptor:
        'Simple comment on one or both poems, or a simple connection between them. Identification of a method.',
      indicators: [
        'Writes about one poem more than the other',
        'Names a method without its effect',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Relevant comparison',
      descriptor:
        'Relevant comparison of the poems, with comments on similarities or differences between the effects of the methods used to create meanings.',
      indicators: [
        'Sets the two poems side by side',
        'Comments on the effect of at least one method in each',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Thoughtful comparison',
      descriptor:
        "Thoughtful comparison of the poems, with clear comparison of the effects of the poets' methods.",
      indicators: [
        'Compares the effects of methods, not only the methods',
        'Uses subject terminology accurately',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Critical, insightful comparison',
      descriptor:
        "Critical, insightful comparison of the poems, with analytical comparison of the effects of the poets' methods.",
      indicators: [
        'Explains why the poets make different choices',
        'Precise, analytical comparison throughout',
      ],
    },
  ],
}

// ─── Paper ───────────────────────────────────────────────────────────────────

export const aqaLitPaper2: MarkScheme = {
  id: 'aqa-lit-paper2',
  board: 'AQA',
  subject: 'English Literature',
  paper: 'Paper 2',
  title: 'Modern texts and poetry',
  totalMarks: 96,
  durationMinutes: 135,
  version: '8702/2',
  sourceUrl: 'https://www.aqa.org.uk/subjects/english/gcse/english-8702/assessment-resources',
  questions: [
    {
      id: 'Section A',
      questionType: 'Modern prose or drama essay',
      taskDescription:
        "Write an essay, from a choice of two questions, on a character, theme or idea in a studied modern prose or drama text (for example An Inspector Calls, Blood Brothers, Animal Farm or Lord of the Flies). No extract is printed. For Telling Tales, the short-story collection, each question names one story and asks about it and one other story of the student's choice from the collection.",
      totalMarks: 34,
      assessmentObjectives: [
        { ...aqaLitAnswerGrid, weighting: 30 / 34 },
        { ...aqaLitAO4, weighting: 4 / 34 },
      ],
      examinerNotes:
        'AO1, AO2 and AO3 are marked together on one six-level grid out of 30, scored as AO1-AO3, and AO4 separately out of 4. Section A is the only part of this paper where AO4 is assessed. Telling Tales: the whole text means the named story and the one other the student chose. A comparative structure is allowed there, but comparison is not assessed and earns no credit.',
    },
    {
      id: 'Section B',
      questionType: 'Poetry anthology comparison',
      taskDescription:
        "Compare how a named poem from the studied cluster of the AQA anthology, printed on the paper, and one other poem of the student's choice from the same cluster present an idea or theme.",
      totalMarks: 30,
      assessmentObjectives: [comparisonGrid],
      examinerNotes:
        'AO1, AO2 and AO3 are marked together on one six-level grid out of 30, scored as AO1-AO3, and comparison is credited under AO1 within it. AO4 is not assessed in Section B, and the second poem is a studied anthology poem, not an unseen one. An answer that leaves out the named poem, writes about only one poem, or takes its second poem from another cluster cannot go above the top of Level 2 (10 of 30).',
    },
    {
      id: 'Section C (a)',
      questionType: 'Unseen poetry: one poem',
      taskDescription:
        'Question 28.1: write about how the poet presents an idea or feeling in an unseen poem printed on the paper.',
      totalMarks: 24,
      assessmentObjectives: [unseenGrid],
      examinerNotes:
        'AO1 and AO2 are marked together on one six-level grid out of 24, scored as AO1-AO2. AO3 and AO4 are not assessed on the unseen poems.',
    },
    {
      id: 'Section C (b)',
      questionType: 'Unseen poetry: comparing two poems',
      taskDescription:
        'Question 28.2: compare the methods the two poets use to present the same idea or feeling in the first unseen poem and a second one printed on the paper.',
      totalMarks: 8,
      assessmentObjectives: [ao2Comparison],
      examinerNotes:
        "AO2 alone: this question rewards comparison of the poets' methods and their effects, not a second essay on the ideas.",
    },
  ],
}
