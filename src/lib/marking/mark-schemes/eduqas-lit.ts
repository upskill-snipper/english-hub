// ─── WJEC Eduqas GCSE English Literature (C720QS) ──────────────────────────
//
// REBUILT 9 October 2026. WHAT WAS WRONG
//
// Until then this file set each component as two 40-mark questions:
//
//   Component 1 (80)  Section A Shakespeare  AO1 15 + AO2 15 + AO3 10
//                     Section B poetry       AO1 10 + AO2 20 + AO4 10
//   Component 2 (80)  Section A post-1914    AO1 15 + AO2 15 + AO3 10
//                     Section B 19th c.      AO1 15 + AO2 15 + AO3 10
//
// It put AO3 and AO4 on the wrong sections of Component 1, put AO3 where
// Component 2 assesses AO4, gave Component 2 80 marks and two sections where
// Eduqas sets 120 and three, and so had no unseen poetry at all. It described
// the poetry question as an anthology poem against an unseen one (both are
// anthology poems) and the 19th-century question as having no extract (it is
// set on one). Every Eduqas Literature answer was marked against objectives
// its question does not assess.
//
// WHAT EDUQAS SETS. Its specification (C720QS, pages 7 to 10) and its June
// 2024 mark schemes for both components (C720U10-1 and C720U20-1):
//
//   Component 1, 2 hours, 80 marks
//     Section A Shakespeare: (a) an extract question, 15 marks, AO1 and AO2
//       "equally weighted"; (b) an essay on the play, 20 marks for AO1 and AO2,
//       equally weighted, plus 5 for AO4 on its own grid.
//     Section B poetry, the anthology: (a) a named poem, 15 marks; (b) a second
//       anthology poem of the candidate's choice compared with it, 25 marks.
//       Both assess AO1, AO2 and AO3, "equally weighted".
//   Component 2, 2 hours 30 minutes, 120 marks
//     Section A post-1914 prose or drama: one question on an extract and the
//       text as a whole, 35 marks for AO1 and AO2, equally weighted, plus 5
//       for AO4.
//     Section B 19th-century prose: one question on an extract and the novel
//       as a whole, 40 marks, AO1, AO2 and AO3 equally weighted.
//     Section C unseen poetry: (a) one poem, 15 marks; (b) a second poem
//       compared with it, 25 marks; AO1 and AO2, equally weighted.
//
// Eduqas's examiners' report for Summer 2025 says the same: in Component 1,
// "extract questions assess AO1 and AO2 and essay questions assess AO1, AO2
// and AO4", and Section B assesses AO1, AO2 and AO3; in Component 2, AO3 is
// assessed in Section B only and AO4 in Section A only.
//
// HOW THE MARKS ARE SPLIT. Eduqas marks each question on one grid, with the
// objectives "equally weighted". This file gives each objective its own
// ladder, so each question's marks are split equally between its objectives
// and, where they do not divide, AO1 takes the odd mark: 15 as 8 and 7, 25 as
// 9, 8 and 8, 35 as 18 and 17, 40 as 14, 13 and 13. The specification's own
// weightings (Component 1: AO1 15%, AO2 15%, AO3 7.5%, AO4 2.5%; Component 2:
// 25%, 25%, 7.5%, 2.5%) give AO3 15 marks in each component; the mark
// schemes' equal weighting gives it 13. The mark schemes are followed,
// because they are what examiners mark with.
//
// Every band range is Eduqas's: five bands on every grid (for 15 marks, 1-3
// to 13-15; for 20, 1-4 to 17-20; for 25, 1-5 to 21-25; for 35, 1-7 to
// 29-35; for 40, 1-8 to 33-40) and AO4 on three levels, 1, 2-3 and 4-5. The
// ladders below are 20-mark ladders of Eduqas's five bands, fitted to each
// objective's share by scaleAO. The descriptors paraphrase Eduqas's band
// wording and are not transcribed, so this scheme is not in
// src/lib/marking/examiner/verification.ts and derives as `unverified-grid`.
// src/lib/marking/mark-schemes/__tests__/eduqas-lit-structure.test.ts pins
// the structure.
//
// Sources:
//   https://www.eduqas.co.uk/qualifications/english-literature-gcse/
//   WJEC Eduqas GCSE English Literature specification (C720QS), pages 7-10
//   GCSE marking schemes, Summer 2024: C720U10-1 and C720U20-1
//   GCSE English Literature examiners' report, Summer 2025
//   C720U20-1 question paper, June 2017 (question wording, advised times)
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from './types'
import { scaleAO } from './scale-ao'

// ─── Assessment Objectives ─────────────────────────────────────────────────
// Each ladder is Eduqas's five bands on a 20-mark question (1-4, 5-8, 9-12,
// 13-16, 17-20), worded after Eduqas's band descriptors. Mark 0 is Eduqas's
// "nothing worthy of credit" and has no band.

const ao1Lit: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Read, understand and respond',
  description:
    'Read, understand and respond to texts. Students should be able to: maintain a critical style and develop an informed personal response; use textual references, including quotations, to support and illustrate interpretations.',
  maxMarks: 20,
  weighting: 0.5,
  bands: [
    {
      band: 'Band 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Simple approach',
      descriptor:
        'Limited focus on the task and a simple approach. A basic understanding of some key aspects of the text, with general reference to it.',
      indicators: [
        'Ideas only occasionally coherent',
        'General references, perhaps with some quotation',
        'Retells more than it responds',
      ],
    },
    {
      band: 'Band 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Limited approach',
      descriptor:
        'Some focus on the task and a limited approach. Some understanding of key aspects of the text, supported by some direct reference.',
      indicators: [
        'Some relevant comments about the text',
        'Some direct references and quotations',
        'Some engagement with the text',
      ],
    },
    {
      band: 'Band 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Straightforward approach',
      descriptor:
        'Focus on the task and a straightforward approach. An understanding of key aspects of the text, supported by appropriate direct reference.',
      indicators: [
        'Ideas generally coherent',
        'Appropriate references, including quotation',
        'Engaged personal response',
      ],
    },
    {
      band: 'Band 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Thoughtful approach',
      descriptor:
        'Sustained focus and a thoughtful approach. A secure understanding of key aspects of the text, supported by well-chosen direct reference.',
      indicators: [
        'Ideas conveyed with coherence in an appropriate register',
        'Well-chosen references, including quotation',
        'Considerable engagement with the text',
      ],
    },
    {
      band: 'Band 5',
      minMarks: 17,
      maxMarks: 20,
      label: 'Sensitive, evaluative approach',
      descriptor:
        'Sustained focus with an overview, and a sensitive, evaluative approach that analyses the text critically. A perceptive understanding, perhaps with some originality, supported by pertinent references from across the text.',
      indicators: [
        'Consistent coherence and an appropriate register',
        'Pertinent, direct references from across the text',
        'Full engagement, perhaps with some originality',
      ],
    },
  ],
}

const ao2Lit: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Analyse language, form and structure',
  description:
    'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
  maxMarks: 20,
  weighting: 0.5,
  bands: [
    {
      band: 'Band 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Generalised comment',
      descriptor:
        "Generalised comments on the writer's use of language, form and structure, with basic reference to meanings and effects. Some terminology, not always accurate.",
      indicators: ['Methods mentioned without their effect', 'Terminology sparse or inaccurate'],
    },
    {
      band: 'Band 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Simple comment',
      descriptor:
        "Recognises and comments simply on the writer's use of language, form and structure, with limited reference to meanings and effects. Some relevant terminology.",
      indicators: [
        'Identifies methods with a simple comment on effect',
        'Some relevant terminology',
      ],
    },
    {
      band: 'Band 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Beginning to analyse',
      descriptor:
        "Comments on and begins to analyse the writer's use of language, form and structure, with some reference to meanings and effects. Relevant terminology.",
      indicators: [
        'Explains how some methods create meaning',
        'Relevant terminology used accurately',
      ],
    },
    {
      band: 'Band 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Increasingly analytical',
      descriptor:
        "Discusses and increasingly analyses the writer's use of language, form and structure, with thoughtful reference to meanings and effects. Apt terminology.",
      indicators: [
        'Thoughtful reference to the effects of stylistic features',
        'Apt terminology that serves the argument',
      ],
    },
    {
      band: 'Band 5',
      minMarks: 17,
      maxMarks: 20,
      label: 'Analyses and appreciates',
      descriptor:
        "Analyses and appreciates the writer's use of language, form and structure, exploring and evaluating how meanings and ideas are conveyed. Precise terminology.",
      indicators: [
        'Assured reference to meanings and effects',
        'Evaluates how language, form and structure work together',
        'Precise terminology used in context',
      ],
    },
  ],
}

const ao3Lit: AssessmentObjective = {
  id: 'AO3',
  label: 'AO3 - Context',
  description:
    'Show understanding of the relationships between texts and the contexts in which they were written.',
  maxMarks: 20,
  weighting: 1 / 3,
  bands: [
    {
      band: 'Band 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Limited understanding',
      descriptor:
        'A limited understanding of the relationship between the text and the contexts in which it was written.',
      indicators: ['Context mentioned as separate facts', 'No link between context and meaning'],
    },
    {
      band: 'Band 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some understanding',
      descriptor:
        'Some understanding of the relationship between the text and its contexts, with some links made.',
      indicators: [
        'Some relevant context linked to the text',
        'Context beginning to inform meaning',
      ],
    },
    {
      band: 'Band 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Understanding',
      descriptor:
        'An understanding of the relationship between the text and its contexts, including where relevant period, place, social structures and literary context such as genre.',
      indicators: [
        'Context used to support points about theme or character',
        'Clear links between context and meaning',
      ],
    },
    {
      band: 'Band 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Secure understanding',
      descriptor:
        'A secure understanding of the relationship between the text and its contexts, including the contexts in which different audiences have read it.',
      indicators: [
        'Context integrated into the argument',
        "Shows how context shapes the writer's choices",
      ],
    },
    {
      band: 'Band 5',
      minMarks: 17,
      maxMarks: 20,
      label: 'Assured understanding',
      descriptor:
        'An assured understanding of the relationship between the text and its contexts, woven into the interpretation throughout.',
      indicators: [
        'Context integral to the argument, never bolted on',
        'Considers how different contexts shape different readings',
      ],
    },
  ],
}

/**
 * AO4, technical accuracy: 5 marks, on the Component 1 Shakespeare essay and
 * the Component 2 post-1914 question only, on Eduqas's three performance
 * levels (threshold 1, intermediate 2-3, high 4-5).
 *
 * Until 19 September 2026 its label read "AO4 - Compare and contrast", which
 * contradicted the description beneath it; told the objective was comparison,
 * the model awarded these marks for comparing texts and never looked at
 * accuracy. Until 9 October 2026 it was a 10-mark ladder of five bands on the
 * poetry question, which Eduqas does not assess for AO4 at all.
 */
const ao4Lit: AssessmentObjective = {
  id: 'AO4',
  label: 'AO4 - Technical accuracy',
  description:
    'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
  maxMarks: 5,
  weighting: 0.2,
  bands: [
    {
      band: 'Threshold',
      minMarks: 1,
      maxMarks: 1,
      label: 'Threshold performance',
      descriptor:
        'Spelling and punctuation with reasonable accuracy, and a reasonable range of vocabulary and sentence structures. Any errors do not hinder meaning.',
      indicators: ['Errors present but meaning clear', 'Some variety in sentence structure'],
    },
    {
      band: 'Intermediate',
      minMarks: 2,
      maxMarks: 3,
      label: 'Intermediate performance',
      descriptor:
        'Spelling and punctuation with considerable accuracy, and a considerable range of vocabulary and sentence structures giving general control of meaning.',
      indicators: ['Errors minor and infrequent', 'Vocabulary chosen with some precision'],
    },
    {
      band: 'High',
      minMarks: 4,
      maxMarks: 5,
      label: 'High performance',
      descriptor:
        'Spelling and punctuation consistently accurate, with vocabulary and sentence structures used consistently to achieve effective control of meaning.',
      indicators: [
        'Consistently accurate across complex structures',
        'Precise, ambitious vocabulary used with control',
      ],
    },
  ],
}

// ─── Component 1: Shakespeare and Poetry (80 marks) ──────────────────────────

export const eduqasLitComp1: MarkScheme = {
  id: 'eduqas-lit-comp1',
  board: 'WJEC Eduqas',
  subject: 'English Literature',
  paper: 'Component 1',
  title: 'Shakespeare and Poetry',
  totalMarks: 80,
  durationMinutes: 120,
  version: 'C720U10-1',
  sourceUrl: 'https://www.eduqas.co.uk/qualifications/english-literature-gcse/',
  questions: [
    {
      id: 'Section A (a)',
      questionType: 'Shakespeare extract',
      taskDescription:
        'Answer the question on a printed extract from the studied Shakespeare play, referring closely to details from the extract. 15 marks: AO1 and AO2.',
      totalMarks: 15,
      assessmentObjectives: [scaleAO(ao1Lit, 8, 8 / 15), scaleAO(ao2Lit, 7, 7 / 15)],
      examinerNotes:
        'AO1 and AO2 are equally weighted. Reward close reference to the extract and analysis of its language, form and structure. Context earns no AO3 marks here; a brief contextual point counts only where it illuminates the extract.',
    },
    {
      id: 'Section A (b)',
      questionType: 'Shakespeare essay',
      taskDescription:
        'Write an essay on the play as a whole, on a character, theme or idea. 25 marks: 20 for AO1 and AO2, and 5 for AO4.',
      totalMarks: 25,
      assessmentObjectives: [
        scaleAO(ao1Lit, 10, 10 / 25),
        scaleAO(ao2Lit, 10, 10 / 25),
        scaleAO(ao4Lit, 5, 5 / 25),
      ],
      examinerNotes:
        'AO1 and AO2 are equally weighted across 20 marks. AO4 (5 marks) assesses spelling, punctuation, vocabulary and sentence structures on its own grid. AO3 is not assessed in Section A.',
    },
    {
      id: 'Section B (a)',
      questionType: 'Poetry anthology, one named poem',
      taskDescription:
        'Write about a named poem from the Eduqas Poetry Anthology, printed on the paper. 15 marks: AO1, AO2 and AO3.',
      totalMarks: 15,
      assessmentObjectives: [
        scaleAO(ao1Lit, 5, 5 / 15),
        scaleAO(ao2Lit, 5, 5 / 15),
        scaleAO(ao3Lit, 5, 5 / 15),
      ],
      examinerNotes:
        "AO1, AO2 and AO3 are equally weighted. Reward the poem's ideas, its methods and the contexts in which it was written.",
    },
    {
      id: 'Section B (b)',
      questionType: 'Poetry anthology comparison',
      taskDescription:
        'Choose one other poem from the anthology on the same theme and compare it with the named poem. 25 marks: AO1, AO2 and AO3.',
      totalMarks: 25,
      assessmentObjectives: [
        scaleAO(ao1Lit, 9, 9 / 25),
        scaleAO(ao2Lit, 8, 8 / 25),
        scaleAO(ao3Lit, 8, 8 / 25),
      ],
      examinerNotes:
        'AO1, AO2 and AO3 are equally weighted. Comparison is credited within them, not as an objective of its own: the higher bands need a comparison that is sustained across content, methods and contexts. The second poem must come from the anthology.',
    },
  ],
}

// ─── Component 2: Post-1914 Prose/Drama, 19th Century Prose and Unseen Poetry (120 marks)

export const eduqasLitComp2: MarkScheme = {
  id: 'eduqas-lit-comp2',
  board: 'WJEC Eduqas',
  subject: 'English Literature',
  paper: 'Component 2',
  title: 'Post-1914 Prose/Drama, 19th Century Prose and Unseen Poetry',
  totalMarks: 120,
  durationMinutes: 150,
  version: 'C720U20-1',
  sourceUrl: 'https://www.eduqas.co.uk/qualifications/english-literature-gcse/',
  questions: [
    {
      id: 'Section A',
      questionType: 'Post-1914 prose/drama',
      taskDescription:
        'Answer one question on the studied post-1914 prose or drama text, referring to the printed extract and the text as a whole. 40 marks: 35 for AO1 and AO2, and 5 for AO4.',
      totalMarks: 40,
      assessmentObjectives: [
        scaleAO(ao1Lit, 18, 18 / 40),
        scaleAO(ao2Lit, 17, 17 / 40),
        scaleAO(ao4Lit, 5, 5 / 40),
      ],
      examinerNotes:
        'AO1 and AO2 are equally weighted across 35 marks; AO4 (5 marks) is on its own grid. AO3 is not assessed in Section A. The answer should move from the extract to the text as a whole.',
    },
    {
      id: 'Section B',
      questionType: '19th century prose',
      taskDescription:
        'Answer one question on the studied 19th-century novel, referring to the printed extract, the novel as a whole and its contexts. 40 marks: AO1, AO2 and AO3.',
      totalMarks: 40,
      assessmentObjectives: [
        scaleAO(ao1Lit, 14, 14 / 40),
        scaleAO(ao2Lit, 13, 13 / 40),
        scaleAO(ao3Lit, 13, 13 / 40),
      ],
      examinerNotes:
        'AO1, AO2 and AO3 are equally weighted. Context should inform the interpretation rather than sit beside it; it does not need to take up a third of the essay.',
    },
    {
      id: 'Section C (a)',
      questionType: 'Unseen poetry',
      taskDescription:
        'Write about a previously unseen poem from the 20th or 21st century and its effect on you. 15 marks: AO1 and AO2.',
      totalMarks: 15,
      assessmentObjectives: [scaleAO(ao1Lit, 8, 8 / 15), scaleAO(ao2Lit, 7, 7 / 15)],
      examinerNotes:
        'AO1 and AO2 are equally weighted. The candidate has not studied the poem: reward any defensible reading supported from the text. Context is not assessed.',
    },
    {
      id: 'Section C (b)',
      questionType: 'Unseen poetry comparison',
      taskDescription: 'Compare a second unseen poem with the first. 25 marks: AO1 and AO2.',
      totalMarks: 25,
      assessmentObjectives: [scaleAO(ao1Lit, 13, 13 / 25), scaleAO(ao2Lit, 12, 12 / 25)],
      examinerNotes:
        'AO1 and AO2 are equally weighted, and comparison is credited within them: the higher bands need a comparison sustained across content and methods. Context is not assessed.',
    },
  ],
}
