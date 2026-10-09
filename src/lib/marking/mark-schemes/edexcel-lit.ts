// ─── Edexcel GCSE English Literature (1ET0) ─────────────────────────────────
//
// REBUILT 19 September 2026. THE DEFECT THIS REPLACES
//
// The assessment-objective allocations were wrong in kind, not just in
// quantity, and one objective did not exist. The file defined an
// "AO4 - Comparison" worth 16 marks on Paper 2 Section B while, forty lines
// away, defining AO4 correctly as spelling, punctuation and grammar. Pearson's
// AO4 is "Use a range of vocabulary and sentence structures for clarity,
// purpose and effect, with accurate spelling and punctuation", it is worth 8
// marks in the whole qualification, and it appears on Paper 1 Section B only.
// Comparison is AO3 and is never worth 16 marks in one place.
//
// The specification's breakdown by component:
//
//   Paper 1 (80)  Section A Shakespeare  (a) 20 AO2
//                                        (b) 15 AO1 + 5 AO3
//                 Section B Post-1914    16 AO1 + 16 AO3 + 8 AO4
//   Paper 2 (80)  Section A 19c novel    (a) 20 AO2
//                                        (b) 20 AO1
//                 Section B Part 1       anthology: 15 AO2 + 5 AO3
//                           Part 2       unseen poetry: 8 AO1 + 12 AO2
//
// Qualification totals, which reconcile exactly and are the check that this is
// right: AO1 59, AO2 67, AO3 26, AO4 8 = 160.
//
//   AO1 59 = 15 + 16 + 20 + 8        AO2 67 = 20 + 20 + 15 + 12
//   AO3 26 =  5 + 16 +  5            AO4  8 =  8 (Paper 1 Section B only)
//
// Note what this corrects beyond the invented objective: Paper 1 Section A had
// AO1, AO2 and AO3 all assessed on both parts; in fact part (a) is AO2 alone
// and part (b) is AO1 with AO3. Paper 2 Section A carried AO3, which is not
// assessed there at all.
//
// WHAT IS AND IS NOT SOURCED: the structure and AO allocations are the
// specification's own, and since 9 October 2026 so are the five levels and
// their mark ranges (Pearson's June 2024 1ET0/01 mark scheme; see the note on
// the ladders below). The level descriptors are written in Pearson's ladder
// lexis and are NOT transcribed verbatim from the four published mark schemes,
// so this scheme is deliberately absent from
// src/lib/marking/examiner/verification.ts and derives as `unverified-grid`.
//
// Sources:
//   https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015.html
//   1ET0 specification Issue 2, "Breakdown of Assessment Objectives by
//   component".
//   1ET0/01 mark scheme, June 2024, the level grids for Sections A and B.
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from './types'
import { scaleAO } from './scale-ao'

// ─── Assessment Objectives ─────────────────────────────────────────────────
// Edexcel Literature uses AO1-AO4. AO1, AO2 and AO3 below each carry a ladder
// of Pearson's five levels at 20 marks, which scaleAO fits to each question.
//
// REBUILT TO PEARSON'S FIVE LEVELS, 9 October 2026. Until then each ladder had
// six levels, written for this site, topping out at 16: scaled to a 20-mark
// question they ran 1-3, 4-5, 6-9, 10-13, 14-16 and a "Level 6" of 17-20.
// Pearson's grids have five levels and no Level 6 (its 1ET0/01 mark scheme,
// June 2024): a 20-mark question runs 1-4, 5-8, 9-12, 13-16, 17-20. So the
// marker was asked to place answers in a level Pearson does not have, its
// written justifications, which students see, could name it, and the
// boundaries below the top differed from Pearson's by up to three marks. The
// founder approved the rebuild the same day.
//
// What the rebuild changes, question by question, for each objective's ladder:
//
//   20 marks (P1 A(a) AO2, P2 A(a) AO2, P2 A(b) AO1)
//     was 1-3, 4-5, 6-9, 10-13, 14-16, 17-20   now 1-4, 5-8, 9-12, 13-16, 17-20
//   16 marks (P1 Section B AO1 and AO3)
//     was 1-2, 3-4, 5-7, 8-10, 11-13, 14-16    now 1-3, 4-6, 7-10, 11-13, 14-16
//   15 marks (P1 A(b) AO1, P2 B Part 1 AO2)
//     was 1-2, 3-4, 5-7, 8-9, 10-12, 13-15     now 1-3, 4-6, 7-9, 10-12, 13-15
//   12 marks (P2 B Part 2 AO2)
//     was 1-2, 3, 4-5, 6-8, 9-10, 11-12        now 1-2, 3-5, 6-7, 8-10, 11-12
//    8 marks (P2 B Part 2 AO1)
//     was 1, 2, 3-4, 5, 6-7, 8                 now 1-2, 3, 4-5, 6, 7-8
//    5 marks (P1 A(b) AO3, P2 B Part 1 AO3)
//     was 1, 2, 3, 4, 5 under Levels 1, 3, 4, 5 and 6   now one mark a level, Levels 1-5
//
// Pearson marks each question on ONE grid: Paper 1 part (b) on a 20-mark grid
// whose bullets are AO1 (15) and AO3 (5), the post-1914 essay's AO1 and AO3 on
// one 32-mark grid (1-6, 7-12, 13-19, 20-26, 27-32). This file keeps one ladder
// per objective, so each objective's share of a level is that grid's range in
// proportion: half the 32-mark grid is 1-3, 4-6, 7-10 (9.5 rounds up), 11-13,
// 14-16. AO4 keeps the three levels it already had, which are Pearson's
// (1-2, 3-5, 6-8). The descriptors paraphrase Pearson's level wording; they
// are not transcribed, so the scheme still derives as `unverified-grid`.

// AO1 - used across multiple questions with different mark allocations
const ao1Base: Omit<AssessmentObjective, 'maxMarks' | 'weighting'> = {
  id: 'AO1',
  label: 'AO1 - Read, understand and respond',
  description:
    'Read, understand and respond to texts. Students should be able to: maintain a critical style and develop an informed personal response; use textual references, including quotations, to support and illustrate interpretations.',
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Simple',
      descriptor:
        'A simple response with little personal response and little sign of a critical style. Few references to the text, with little relevance to the task.',
      indicators: [
        'Retells or paraphrases rather than responds to the question',
        'References are general or narrative-based',
        'Little sense of a personal response',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some response',
      descriptor:
        'A response that may be largely narrative but has some personal response and some critical style, not always applied securely. Some valid points, without consistent focus.',
      indicators: [
        'Makes some relevant points about the text',
        'Some references support the ideas',
        'Focus on the question is not always secure',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Sound',
      descriptor:
        'A relevant personal response, soundly related to the text, in an appropriate critical style. Focused points supported from the text show a sound interpretation.',
      indicators: [
        'Clear and relevant points developed with explanation',
        'Quotations are well-chosen and embedded',
        'A coherent line of argument is maintained',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Developed',
      descriptor:
        'A developed personal response with thorough engagement, fully related to the text. A sustained critical style and well-developed interpretation, with well-chosen references supporting a range of points.',
      indicators: [
        'Sustained interpretation across the response',
        'References are precise and serve the argument',
        'Personal response is informed and engaged',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 17,
      maxMarks: 20,
      label: 'Assured',
      descriptor:
        'An assured personal response showing a high level of engagement. A mature critical style with perceptive interpretation, in which discerning references are integral to the argument.',
      indicators: [
        'Perceptive, independent reading of the text',
        'Evidence is judiciously selected and integral to the argument',
        'Critical argument is sustained, mature and convincing',
      ],
    },
  ],
}

const ao2Base: Omit<AssessmentObjective, 'maxMarks' | 'weighting'> = {
  id: 'AO2',
  label: 'AO2 - Analyse language, form and structure',
  description:
    'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Simple identification',
      descriptor:
        'A simple response with minimal identification of language, form and structure, and little relevant subject terminology.',
      indicators: [
        'Identifies obvious features (e.g. simile) without discussing effect',
        'Subject terminology is limited or misapplied',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Largely descriptive',
      descriptor:
        'Largely descriptive, with some comment on language, form and structure. Limited subject terminology in support of the examples given.',
      indicators: [
        'Names methods and makes simple comments on effect',
        'Some accurate subject terminology used',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Understanding',
      descriptor:
        'Understanding of a range of language, form and structure features, linked to their effect on the reader. Relevant subject terminology supports the examples.',
      indicators: [
        'Explains how methods create meaning and effects',
        'Accurate subject terminology used consistently',
        'Considers the writer as a deliberate craftsperson',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Sustained analysis',
      descriptor:
        'A focused, detailed response that sustains analysis of language, form and structure and their effect on the reader. Subject terminology is used accurately to develop ideas.',
      indicators: [
        'Considers layered effects of language and structure',
        'Terminology is embedded and supports the argument',
        'Explores form and structure alongside language',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 17,
      maxMarks: 20,
      label: 'Cohesive evaluation',
      descriptor:
        'A cohesive evaluation of how language, form and structure work together and affect the reader. Subject terminology is precise and integrated.',
      indicators: [
        'Perceptive, layered analysis of craft and reader response',
        'Terminology is a precise analytical tool, not decoration',
        'Considers how methods combine, not just what they are',
      ],
    },
  ],
}

const ao3Base: Omit<AssessmentObjective, 'maxMarks' | 'weighting'> = {
  id: 'AO3',
  label: 'AO3 - Context',
  description:
    'Show understanding of the relationships between texts and the contexts in which they were written.',
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Little awareness',
      descriptor:
        'Little awareness of relevant context, and little comment on how the text and its context relate.',
      indicators: [
        'Bolt-on contextual facts with no integration',
        'No link between context and meaning',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some awareness',
      descriptor:
        'Some awareness of relevant context, with some comment on the relationship between text and context.',
      indicators: [
        'Some relevant contextual points linked to the text',
        'Context begins to inform interpretation',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Sound comment',
      descriptor:
        'Sound comment on relevant context, and on how it relates to the text and the task.',
      indicators: [
        'Context is used to support points about theme or character',
        'Understanding of ideas and attitudes of the period',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Sustained comment',
      descriptor:
        'Sustained comment on relevant context, with detailed awareness of the relationship between text and context.',
      indicators: [
        'Context is woven into the argument throughout',
        "Understands how context shapes the writer's purpose and choices",
      ],
    },
    {
      band: 'Level 5',
      minMarks: 17,
      maxMarks: 20,
      label: 'Convincing integration',
      descriptor:
        'An excellent grasp of relevant context, with the relationship between text and context integrated convincingly into the argument.',
      indicators: [
        'Context is seamlessly integrated as a critical lens',
        'Considers how context shapes meaning at more than one level',
      ],
    },
  ],
}

// ─── Paper 1: Shakespeare and Post-1914 Literature ─────────────────────────

/**
 * AO4: spelling, punctuation and grammar. Pearson assesses it once in the whole
 * qualification - Paper 1 Section B - and it is worth 8 marks. The file used to
 * ALSO define an "AO4 - Comparison" worth 16 marks on Paper 2 Section B, which
 * does not exist: comparison is AO3.
 */
const ao4Spag: Omit<AssessmentObjective, 'maxMarks' | 'weighting'> = {
  id: 'AO4',
  label: 'AO4 - Spelling, punctuation and grammar',
  description:
    'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
  bands: [
    {
      band: 'Threshold',
      minMarks: 1,
      maxMarks: 2,
      label: 'Threshold',
      descriptor:
        'Reasonable accuracy in spelling, punctuation and grammar. Errors do not hinder meaning.',
      indicators: ['Generally clear writing with some minor errors'],
    },
    {
      band: 'Intermediate',
      minMarks: 3,
      maxMarks: 5,
      label: 'Intermediate',
      descriptor:
        'Considerable accuracy in spelling, punctuation and grammar. Good range of vocabulary and sentence structures.',
      indicators: ['Mostly accurate with varied sentence structures'],
    },
    {
      band: 'High',
      minMarks: 6,
      maxMarks: 8,
      label: 'High',
      descriptor:
        'Consistently accurate spelling, punctuation and grammar. A wide range of vocabulary and sentence structures used to achieve effective control of meaning.',
      indicators: [
        'Consistently accurate and ambitious in expression',
        'Precise vocabulary used with control',
      ],
    },
  ],
}

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
        'Explore how Shakespeare presents a theme, character or idea in the printed extract. 20 marks, AO2 only.',
      totalMarks: 20,
      assessmentObjectives: [scaleAO(ao2Base, 20, 20 / 80)],
      examinerNotes:
        'AO2 alone. Reward analysis of language, form and structure in the extract. Context and whole-text knowledge earn nothing here - they belong in part (b).',
    },
    {
      id: 'Section A (b)',
      questionType: 'Shakespeare whole text',
      taskDescription:
        'Explore how Shakespeare presents the same theme, character or idea in the play as a whole. 20 marks: AO1 15 and AO3 5.',
      totalMarks: 20,
      assessmentObjectives: [scaleAO(ao1Base, 15, 15 / 80), scaleAO(ao3Base, 5, 5 / 80)],
      examinerNotes:
        'AO1 carries the weight; AO3 context is worth 5 and is rewarded where it illuminates the text, not where it is bolted on.',
    },
    {
      id: 'Section B',
      questionType: 'Post-1914 literature essay',
      taskDescription:
        'Answer one essay question on the studied post-1914 text. 40 marks: AO1 16, AO3 16 and AO4 8.',
      totalMarks: 40,
      assessmentObjectives: [
        scaleAO(ao1Base, 16, 16 / 80),
        scaleAO(ao3Base, 16, 16 / 80),
        scaleAO(ao4Spag, 8, 8 / 80),
      ],
      examinerNotes:
        'This is the only place in the qualification where AO4 (spelling, punctuation and grammar) is assessed, and it is worth 8 marks. AO2 is NOT assessed in this section.',
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
        'Explore how the writer presents a theme, character or idea in the printed extract. 20 marks, AO2 only.',
      totalMarks: 20,
      assessmentObjectives: [scaleAO(ao2Base, 20, 20 / 80)],
      examinerNotes: 'AO2 alone. AO3 is not assessed anywhere in Section A of this paper.',
    },
    {
      id: 'Section A (b)',
      questionType: '19th-century novel whole text',
      taskDescription:
        'Explore how the writer presents the same theme, character or idea in the novel as a whole. 20 marks, AO1 only.',
      totalMarks: 20,
      assessmentObjectives: [scaleAO(ao1Base, 20, 20 / 80)],
      examinerNotes:
        'AO1 alone: response to the text supported by reference. Do not credit context here.',
    },
    {
      id: 'Section B Part 1',
      questionType: 'Poetry anthology comparison',
      taskDescription:
        'Compare the presentation of a theme or idea in one named anthology poem and one other of your choice. 20 marks: AO2 15 and AO3 5.',
      totalMarks: 20,
      assessmentObjectives: [scaleAO(ao2Base, 15, 15 / 80), scaleAO(ao3Base, 5, 5 / 80)],
      examinerNotes:
        'Comparison is rewarded under AO2 and AO3 here, not under a separate comparison objective. AO1 is not assessed in this part.',
    },
    {
      id: 'Section B Part 2',
      questionType: 'Unseen poetry',
      // Until 2 October 2026 this read "Respond to one unseen poem, then compare it with a
      // second", the two-step shape of AQA's unseen section. Pearson sets ONE question comparing
      // two unseen contemporary poems linked by a theme (1ET0 specification, Issue 2).
      taskDescription:
        'Compare two unseen contemporary poems, linked by a theme, in one response. 20 marks: AO1 8 and AO2 12.',
      totalMarks: 20,
      assessmentObjectives: [scaleAO(ao1Base, 8, 8 / 80), scaleAO(ao2Base, 12, 12 / 80)],
      examinerNotes:
        'Candidates have not studied these poems. Reward a defensible reading generously; do not require contextual knowledge, which is not assessed here.',
    },
  ],
}
