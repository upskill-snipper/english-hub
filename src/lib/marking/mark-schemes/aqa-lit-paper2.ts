// ─── AQA GCSE English Literature Paper 2 Mark Scheme ────────────────────────
// Modern texts and poetry - 2 hours 15 minutes, 96 marks.
//
// ADDED 9 October 2026. Until then the corpus had no Paper 2, so essay feedback
// gave every 8702/2 answer general feedback with no marks, and the marking
// tool could not mark an AQA modern-text, anthology or unseen-poetry answer.
//
// The structure and tariffs are AQA's, checked against its June 2023 mark
// scheme for 8702/2:
//   Section A, modern prose or drama: one essay from a choice of two, 30 marks
//     (AO1 12, AO2 12, AO3 6) and 4 for AO4, which "will be assessed on
//     Section A only";
//   Section B, the anthology: a named poem, printed, compared with one other
//     poem of the student's choice from the same cluster, 30 marks (AO1 12,
//     AO2 12, AO3 6), with comparison credited under AO1;
//   Section C, unseen poetry: question 27.1 on one poem, 24 marks (AO1 12,
//     AO2 12), and 27.2 comparing the poets' methods across it and a second
//     poem, 8 marks, AO2 alone, in four levels.
// The paper is 96 marks in 2 hours 15 minutes (AQA's specification at a
// glance). AQA marks each answer as a whole on a six-level grid; as for Paper 1,
// this corpus gives each objective its own ladder, and those ladders are
// shared with ./aqa-lit-paper1.ts. 27.2's ladder follows AQA's four levels.
// The descriptors are paraphrases, not AQA's wording, so the scheme is not in
// ../examiner/verification.ts and says that it is unverified.
//
// Section C's questions are "Section C (a)" and "(b)", AQA's 27.1 and 27.2, so
// that a mock's two unseen questions resolve by their order in the section
// (../essay-feedback-targets.ts).
//
// Source: https://www.aqa.org.uk/subjects/english/gcse/english-8702
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from './types'
import { aqaLitAO1, aqaLitAO2, aqaLitAO3, aqaLitAO4 } from './aqa-lit-paper1'

/** Question 27.2: AO2 alone, on comparing the two poets' methods. */
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
        'Write an essay, from a choice of two questions, on a character, theme or idea in a studied modern prose or drama text (for example An Inspector Calls, Blood Brothers, Animal Farm or Lord of the Flies). No extract is printed.',
      totalMarks: 34,
      assessmentObjectives: [
        { ...aqaLitAO1, maxMarks: 12, weighting: 12 / 34 },
        { ...aqaLitAO2, maxMarks: 12, weighting: 12 / 34 },
        { ...aqaLitAO3, maxMarks: 6, weighting: 6 / 34 },
        { ...aqaLitAO4, maxMarks: 4, weighting: 4 / 34 },
      ],
      examinerNotes:
        'AO1, AO2 and AO3 are marked together out of 30 and AO4 separately out of 4. Section A is the only part of this paper where AO4 is assessed.',
    },
    {
      id: 'Section B',
      questionType: 'Poetry anthology comparison',
      taskDescription:
        "Compare how a named poem from the studied cluster of the AQA anthology, printed on the paper, and one other poem of the student's choice from the same cluster present an idea or theme.",
      totalMarks: 30,
      assessmentObjectives: [
        { ...aqaLitAO1, maxMarks: 12, weighting: 12 / 30 },
        { ...aqaLitAO2, maxMarks: 12, weighting: 12 / 30 },
        { ...aqaLitAO3, maxMarks: 6, weighting: 6 / 30 },
      ],
      examinerNotes:
        'Comparison is credited under AO1. AO4 is not assessed in Section B, and the second poem is a studied anthology poem, not an unseen one.',
    },
    {
      id: 'Section C (a)',
      questionType: 'Unseen poetry: one poem',
      taskDescription:
        'Question 27.1: write about how the poet presents an idea or feeling in an unseen poem printed on the paper.',
      totalMarks: 24,
      assessmentObjectives: [
        { ...aqaLitAO1, maxMarks: 12, weighting: 12 / 24 },
        { ...aqaLitAO2, maxMarks: 12, weighting: 12 / 24 },
      ],
      examinerNotes: 'AO3 and AO4 are not assessed on the unseen poems.',
    },
    {
      id: 'Section C (b)',
      questionType: 'Unseen poetry: comparing two poems',
      taskDescription:
        'Question 27.2: compare the methods the two poets use to present the same idea or feeling in the first unseen poem and a second one printed on the paper.',
      totalMarks: 8,
      assessmentObjectives: [ao2Comparison],
      examinerNotes:
        "AO2 alone: this question rewards comparison of the poets' methods and their effects, not a second essay on the ideas.",
    },
  ],
}
