// ─── AQA GCSE English Literature Paper 1 Mark Scheme ────────────────────────
// Shakespeare and the 19th-century novel - 1 hour 45 minutes, 64 marks.
// Based on the AQA 8702 specification.
//
// CORRECTED 24 October 2026, with the founder's approval (document 30). The
// mark-scheme guide for this paper (src/data/mark-scheme-guides/aqa-lit-paper1.ts),
// written and checked against AQA's 8702/1 mark scheme and question paper for
// June 2025 and the 8702 specification (version 1.3, 28 September 2022),
// found that this data did not mark the paper as AQA does. The paper's 64
// marks, both sections' marks and objectives (AO1 12, AO2 12, AO3 6, and AO4
// 4 in Section A only) and the AO4 bands already agreed and are unchanged.
// What changed:
//   - AQA marks each answer on ONE six-level grid for AO1, AO2 and AO3
//     together, 30 marks (Level 1 1-5 up to Level 6 26-30), and AO4 on its
//     own small grid. This data gave each objective its own ladder (AO1 and
//     AO2 six levels of 2 marks, AO3 three), so an essay was placed three
//     times and the marks added, which is not how an AQA examiner marks it.
//     The grid is now one objective, 'AO1-AO3'. feedback-generator.ts
//     upper-cases the id the model returns and looks it up exactly, and the
//     prompt shows the model the label, not the id, so the id is upper case
//     and the label opens with it. Its descriptors are our own words, adapted
//     from the guide.
//   - The cap was missing: an answer that leaves out the extract or the rest
//     of the text goes no higher than the top of Level 2, 10 of 30.
//   - Section B starts from a printed extract and moves out to the whole
//     novel, as Section A does with the play; it was described as a theme,
//     character or moment in the novel.
// No question id changed: saved essays name Section A and Section B.
//
// Source: https://www.aqa.org.uk/subjects/english/gcse/english-8702
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from './types'

// ─── The answer grid: AO1, AO2 and AO3 marked together ─────────────────────
//
// One mark out of 30 from one level, as AQA awards it. AQA weights the 30 as
// AO1 12, AO2 12 and AO3 6, which the description tells the model, but the
// three are never marked separately and added.
//
// The label names the objectives and no skill on purpose. Pages that pick a
// revision link for the weakest objective read its label for words such as
// "context" (src/app/marking/results/[id]/page.tsx), and a grid labelled
// "response, methods and context" would send a student whose whole essay is
// weak to the page on historical context.

const answerGrid: AssessmentObjective = {
  id: 'AO1-AO3',
  label: 'AO1-AO3 - AO1, AO2 and AO3, marked together on one grid',
  description:
    "One six-level grid for the whole answer, as AQA marks it: AO1, an informed personal response built as an argument and supported by references; AO2, analysis of how the writer's language, form and structure create meanings and effects, using subject terms; AO3, the relationship between the text and its contexts. Choose the level that best fits the answer as a whole, then the mark within it. Within the 30 marks AO1 and AO2 weigh 12 each and AO3 6.",
  maxMarks: 30,
  weighting: 1,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 5,
      label: 'Mostly retelling',
      descriptor:
        'Mostly retells or describes what happens, with simple comments that touch on the task. References are few and general, there is only a hint that the writer made choices, and any context is a simple stated fact.',
      indicators: [
        'Narrates events instead of answering the question',
        'A few general references, with little quotation',
        "Little sense of the writer's methods; subject terms rare or misused",
      ],
    },
    {
      band: 'Level 2',
      minMarks: 6,
      maxMarks: 10,
      label: 'Relevant and supported',
      descriptor:
        "Makes relevant points about the task and backs them with references. Picks out some of the writer's methods, sometimes naming them, and shows some awareness of ideas or context without yet explaining them.",
      indicators: [
        'Points answer the question and come with evidence',
        'Methods named, with little on their effect',
        'Context touched on rather than used',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 11,
      maxMarks: 15,
      label: 'Starting to explain',
      descriptor:
        "Starts to explain points rather than just stating them. References back the points up, the writer's methods get some comment with a few subject terms, and ideas or context are linked to the text in places.",
      indicators: [
        'Says what quotations show, not only what they say',
        "Some comment on the effects of the writer's choices",
        'Context linked to the text in places',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 16,
      maxMarks: 20,
      label: 'Clear and focused',
      descriptor:
        "Answers the whole task with a steady focus. Explains how the writer's methods create effects, with suitable subject terms, backs every point up, and shows a secure grasp of ideas and context tied to the task.",
      indicators: [
        'A clear line of argument across the text',
        'Effects of methods explained, with accurate terms',
        "Context used to explain the writer's choices",
      ],
    },
    {
      band: 'Level 5',
      minMarks: 21,
      maxMarks: 25,
      label: 'Developed and detailed',
      descriptor:
        "Builds a well-developed argument with references fitted smoothly into the writing. Looks closely at how the writer's methods create effects on the reader, and uses ideas and context to add depth or open up other readings.",
      indicators: [
        'Well-chosen references woven into the argument',
        'Close examination of methods and their effects',
        'Context deepens the interpretation',
      ],
    },
    {
      band: 'Level 6',
      minMarks: 26,
      maxMarks: 30,
      label: 'Confident and exploratory',
      descriptor:
        'Builds the whole answer around a confident overarching idea about the text and explores it critically: exact, well-chosen references, very close analysis of methods and their effects on the reader, and ideas, context and other readings handled with skill.',
      indicators: [
        'An argument shaped by one central idea about the text',
        'Precise references chosen for exactly what they show',
        'Methods, context and other readings explored, not only explained',
      ],
    },
  ],
}

const ao4: AssessmentObjective = {
  id: 'AO4',
  label: 'AO4 - Technical accuracy',
  description:
    'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
  maxMarks: 4,
  weighting: 0.05,
  bands: [
    {
      band: 'Threshold',
      minMarks: 1,
      maxMarks: 1,
      label: 'Threshold',
      descriptor:
        'Reasonable level of accuracy. Errors do not hinder meaning in the response. Students spell and punctuate with reasonable accuracy.',
      indicators: [
        'Generally clear writing',
        "Some minor technical errors that don't obscure meaning",
      ],
    },
    {
      band: 'Intermediate',
      minMarks: 2,
      maxMarks: 3,
      label: 'Intermediate',
      descriptor:
        'Considerable accuracy. Students spell and punctuate with considerable accuracy, and use a considerable range of vocabulary and sentence structures.',
      indicators: [
        'Mostly accurate technical writing',
        'Varied sentence structures and vocabulary',
      ],
    },
    {
      band: 'High',
      minMarks: 4,
      maxMarks: 4,
      label: 'High',
      descriptor:
        'Consistently high level of accuracy. Spelling and punctuation are consistently accurate, with a wide range of vocabulary and sentence structures used to achieve effective control of meaning.',
      indicators: [
        'Consistently accurate across complex structures',
        'Ambitious, precise vocabulary used with control',
      ],
    },
  ],
}

// AQA marks Paper 2's modern-text essay on the same grid, and AO4 the same
// way, so ./aqa-lit-paper2.ts uses these too.
export { answerGrid as aqaLitAnswerGrid, ao4 as aqaLitAO4 }

// ─── Paper ───────────────────────────────────────────────────────────────────

export const aqaLitPaper1: MarkScheme = {
  id: 'aqa-lit-paper1',
  board: 'AQA',
  subject: 'English Literature',
  paper: 'Paper 1',
  title: 'Shakespeare and the 19th-century novel',
  totalMarks: 64,
  durationMinutes: 105,
  version: '8702/1',
  sourceUrl: 'https://www.aqa.org.uk/subjects/english/gcse/english-8702/assessment-resources',
  questions: [
    {
      id: 'Section A',
      questionType: 'Shakespeare extract + whole text essay',
      taskDescription:
        'Starting with an extract from a studied Shakespeare play, write about how a theme or character is presented both in the extract and in the play as a whole.',
      totalMarks: 34,
      assessmentObjectives: [
        { ...answerGrid, weighting: 30 / 34 },
        { ...ao4, weighting: 4 / 34 },
      ],
      examinerNotes:
        'AO1, AO2 and AO3 are marked together on one six-level grid out of 30, scored as AO1-AO3, and AO4 separately out of 4. An answer that leaves out either the printed extract or the rest of the play cannot go above the top of Level 2 (10 of 30); if the question answered gives no extract, mark it on the whole play without that cap. Reward candidates who integrate extract analysis with whole-text knowledge. Context should illuminate meaning, not be tacked on.',
    },
    {
      id: 'Section B',
      questionType: '19th-century novel extract + whole text essay',
      taskDescription:
        'Starting with an extract from a studied 19th-century novel (e.g. A Christmas Carol, Jekyll and Hyde, Great Expectations), printed on the paper, write about how a character or idea is presented in the extract and then in the novel as a whole.',
      totalMarks: 30,
      assessmentObjectives: [answerGrid],
      examinerNotes:
        'AO1, AO2 and AO3 are marked together on one six-level grid out of 30, scored as AO1-AO3. AO4 is not assessed in Section B of Paper 1. An answer that leaves out either the printed extract or the rest of the novel cannot go above the top of Level 2 (10 of 30); if the question answered gives no extract, mark it on the whole novel without that cap. Accept any valid reading supported by textual evidence.',
    },
  ],
}
