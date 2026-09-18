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
// specification's own. The level descriptors are written in Pearson's ladder
// lexis and are NOT transcribed verbatim from the four published mark schemes,
// so this scheme is deliberately absent from
// src/lib/marking/examiner/verification.ts and derives as `unverified-grid`.
//
// Sources:
//   https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015.html
//   1ET0 specification Issue 2, "Breakdown of Assessment Objectives by
//   component".
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from './types'
import { scaleAO } from './scale-ao'

// ─── Assessment Objectives ─────────────────────────────────────────────────
// Edexcel Literature uses AO1-AO4. Band descriptors use 6 levels for the main
// essay-type AOs, mirroring Edexcel's published Level 1 (Simple) through
// Level 6 (Convincing) grids.

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
      maxMarks: 2,
      label: 'Simple',
      descriptor:
        'Simple comments that show basic awareness of the text. Limited textual reference with little relevance to the task.',
      indicators: [
        'Retells or paraphrases rather than responds to the question',
        'References are general or narrative-based',
        'Little sense of a personal response',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Supported',
      descriptor:
        'Supported comments with some relevant textual reference. Begins to shape a response around the task.',
      indicators: [
        'Makes some relevant points about the text',
        'Some quotations used to support ideas',
        'Response begins to address the question',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 7,
      label: 'Explained',
      descriptor:
        'Explained response with clear understanding. Effective use of textual references to support a structured argument.',
      indicators: [
        'Clear and relevant points developed with explanation',
        'Quotations are well-chosen and embedded',
        'A coherent line of argument is maintained',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 8,
      maxMarks: 10,
      label: 'Thoughtful',
      descriptor:
        'Thoughtful, developed response demonstrating a secure understanding. Apt textual references integrated into interpretation.',
      indicators: [
        'Sustained interpretation across the response',
        'References are precise and serve the argument',
        'Personal response is informed and engaged',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 11,
      maxMarks: 13,
      label: 'Exploratory',
      descriptor:
        'Exploratory, critical response with an assured personal interpretation. Judicious use of precise textual references.',
      indicators: [
        'Alternative interpretations explored with confidence',
        'Evidence is judiciously selected and precisely deployed',
        'Critical argument is sustained and compelling',
      ],
    },
    {
      band: 'Level 6',
      minMarks: 14,
      maxMarks: 16,
      label: 'Convincing',
      descriptor:
        'Convincing, critical analysis demonstrating independent thought. A sophisticated personal response supported throughout by precise, apt references.',
      indicators: [
        'Original and perceptive reading of the text',
        'Analysis is deeply rooted in textual evidence',
        'Response is cohesive, fluent and convincing throughout',
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
      maxMarks: 2,
      label: 'Simple awareness',
      descriptor:
        'Simple awareness of language, form or structure. Limited use of subject terminology, often inaccurate.',
      indicators: [
        'Identifies obvious features (e.g. simile) without discussing effect',
        'Subject terminology is limited or misapplied',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Identification with comment',
      descriptor:
        'Identifies language and/or structural features with some comment on their effect. Some relevant subject terminology.',
      indicators: [
        'Names methods and makes simple comments on effect',
        'Some accurate subject terminology used',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 7,
      label: 'Clear explanation',
      descriptor:
        'Clear explanation of how the writer uses language and/or structure to create effects. Appropriate and accurate subject terminology.',
      indicators: [
        'Explains how methods create meaning and effects',
        'Accurate subject terminology used consistently',
        'Considers the writer as a deliberate craftsperson',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 8,
      maxMarks: 10,
      label: 'Examination',
      descriptor:
        "Examination of the writer's methods with detailed consideration of their effects. Subject terminology used effectively to support analysis.",
      indicators: [
        'Considers layered effects of language and structure',
        'Terminology is embedded and supports the argument',
        'Explores form and structure alongside language',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 11,
      maxMarks: 13,
      label: 'Exploration',
      descriptor:
        'Exploration of how language, form and structure work together to create complex meanings. Subject terminology used judiciously.',
      indicators: [
        'Analyses subtle and implicit effects',
        'Terminology is a precise analytical tool',
        'Considers why choices were made, not just what they are',
      ],
    },
    {
      band: 'Level 6',
      minMarks: 14,
      maxMarks: 16,
      label: 'Analysis',
      descriptor:
        "Perceptive analysis of how the writer's methods combine to create sophisticated meanings and effects on the reader. Precise and judicious use of subject terminology.",
      indicators: [
        'Perceptive, layered analysis of craft and reader response',
        'Terminology enhances rather than decorates the argument',
        'Considers the whole text as a crafted artefact',
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
      maxMarks: 2,
      label: 'Simple awareness',
      descriptor:
        'Simple awareness of contextual factors. Context is mentioned as isolated facts with no link to the text.',
      indicators: [
        'Bolt-on contextual facts with no integration',
        'No link between context and meaning',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some understanding',
      descriptor:
        'Some understanding of context with some links made between context and the text/task.',
      indicators: [
        'Some relevant contextual points linked to the text',
        'Context begins to inform interpretation',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 7,
      label: 'Clear understanding',
      descriptor:
        'Clear understanding of contextual factors shown through specific links between context and the text/task.',
      indicators: [
        'Context is used to support points about theme or character',
        'Understanding of ideas and attitudes of the period',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 8,
      maxMarks: 10,
      label: 'Developed understanding',
      descriptor:
        'Developed understanding of context integrated into the interpretation. Specific and detailed links between context, text and task.',
      indicators: [
        'Context is woven into the argument throughout',
        "Understands how context shapes the writer's purpose and choices",
      ],
    },
    {
      band: 'Level 5',
      minMarks: 11,
      maxMarks: 13,
      label: 'Exploration',
      descriptor:
        'Exploration of contextual factors with detailed and specific links showing how context shapes meaning.',
      indicators: [
        'Context deepens interpretation throughout',
        'Considers multiple contextual perspectives',
        'Moves beyond biographical context to social and literary context',
      ],
    },
    {
      band: 'Level 6',
      minMarks: 14,
      maxMarks: 16,
      label: 'Convincing exploration',
      descriptor:
        "Convincing exploration of context fully integrated into a sophisticated interpretation. Context is used to illuminate the writer's intentions and the text's reception.",
      indicators: [
        'Context is seamlessly integrated as a critical lens',
        'Considers how context shapes meaning at multiple levels',
        'Sophisticated understanding of literary and social contexts',
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
      taskDescription:
        'Respond to one unseen poem, then compare it with a second unseen poem. 20 marks: AO1 8 and AO2 12.',
      totalMarks: 20,
      assessmentObjectives: [scaleAO(ao1Base, 8, 8 / 80), scaleAO(ao2Base, 12, 12 / 80)],
      examinerNotes:
        'Candidates have not studied these poems. Reward a defensible reading generously; do not require contextual knowledge, which is not assessed here.',
    },
  ],
}
