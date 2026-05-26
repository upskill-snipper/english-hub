// ─── Edexcel International GCSE English Literature (4ET1) Mark Scheme ────────
// Paper 1: Poetry and Prose - 1h45, 60 marks.
//   Section A - Unseen poetry            (20 marks: AO1 10 + AO2 10)
//   Section B - Anthology comparison     (20 marks: AO1  6 + AO2  6 + AO4  8)
//   Section C - Modern prose (context)   (20 marks: AO1 10 + AO3 10)
// Covers all four Edexcel IGCSE Literature assessment objectives (AO1-AO4)
// within a single paper. Based on the Pearson Edexcel International GCSE
// English Literature (4ET1) specification (first teaching 2016). Band
// descriptors are summarised in our own words from the publicly available
// Edexcel generic level grids.
//
// Sources:
//   https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/english-literature-2016.html
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective, BandDescriptor } from './types'

// ─── Reusable band builders ────────────────────────────────────────────────
// Edexcel IGCSE uses graded performance levels. To keep each question's AO
// totals exact, every AO's bands are sized so the TOP band maxMarks equals the
// AO maxMarks for that question. This guarantees the coverage audit's
// "sum of top-band marks <= paper total" check is met with equality, and that
// each question's AO maxMarks sum to the question total.

/**
 * Build a five-level reading/response band set (AO1) scaled to `max`.
 * Boundaries are distributed across the available range, with the top band
 * finishing exactly on `max` and each band starting one mark above the last.
 */
function responseBands(max: number): BandDescriptor[] {
  const cut = (n: number) => Math.max(n, Math.round((n / 5) * max))
  return [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: cut(1),
      label: 'Basic',
      descriptor:
        'Basic understanding of the text with simple, undeveloped comments. Textual reference is limited and often only narrative or descriptive.',
      indicators: [
        'Retells the text rather than answering the question',
        'Few references, generally unselective',
        'Little sense of an individual response',
      ],
    },
    {
      band: 'Level 2',
      minMarks: cut(1) + 1,
      maxMarks: cut(2),
      label: 'Some',
      descriptor:
        'Some understanding shown through generally relevant comments. A few supporting references are used, though not always integrated into the response.',
      indicators: [
        'Makes some relevant points about the task',
        'Uses a few quotations to support ideas',
        'Begins to shape a response to the question',
      ],
    },
    {
      band: 'Level 3',
      minMarks: cut(2) + 1,
      maxMarks: cut(3),
      label: 'Sound',
      descriptor:
        'Sound, clear understanding developed through a coherent line of argument. References are relevant and reasonably well chosen to support points.',
      indicators: [
        'A clear, relevant argument is maintained',
        'Quotations are appropriate and embedded',
        'A coherent personal response begins to emerge',
      ],
    },
    {
      band: 'Level 4',
      minMarks: cut(3) + 1,
      maxMarks: cut(4),
      label: 'Thorough',
      descriptor:
        'Thorough, sustained understanding with a well-developed personal response. Apt references are integrated to support a thoughtful interpretation.',
      indicators: [
        'Interpretation is sustained across the answer',
        'References are precise and serve the argument',
        'A considered personal response is evident throughout',
      ],
    },
    {
      band: 'Level 5',
      minMarks: cut(4) + 1,
      maxMarks: max,
      label: 'Assured',
      descriptor:
        'Assured, perceptive understanding with a convincing and individual interpretation. Precise references are judiciously selected to drive a critical argument.',
      indicators: [
        'Perceptive, original reading of the text',
        'Evidence is precise and judiciously deployed',
        'A convincing, critical personal response is sustained',
      ],
    },
  ]
}

/**
 * Build a five-level methods/analysis band set (AO2) scaled to `max`.
 */
function analysisBands(max: number): BandDescriptor[] {
  const cut = (n: number) => Math.max(n, Math.round((n / 5) * max))
  return [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: cut(1),
      label: 'Basic',
      descriptor:
        'Basic awareness that the writer has made language or structural choices. Subject terminology is limited or used inaccurately and effects are not explained.',
      indicators: [
        'Identifies an obvious feature without discussing effect',
        'Subject terminology is sparse or misapplied',
      ],
    },
    {
      band: 'Level 2',
      minMarks: cut(1) + 1,
      maxMarks: cut(2),
      label: 'Some',
      descriptor:
        'Some comment on how language, form or structure shape meaning, with simple explanation of effect. Some relevant subject terminology is used.',
      indicators: [
        'Names methods and comments simply on their effect',
        'Some accurate subject terminology is used',
      ],
    },
    {
      band: 'Level 3',
      minMarks: cut(2) + 1,
      maxMarks: cut(3),
      label: 'Sound',
      descriptor:
        'Sound explanation of how the writer uses language, form and structure to create effects. Subject terminology is used appropriately and accurately.',
      indicators: [
        'Explains how methods create meaning and effect',
        'Treats the writer as a deliberate craftsperson',
        'Accurate terminology supports the points made',
      ],
    },
    {
      band: 'Level 4',
      minMarks: cut(3) + 1,
      maxMarks: cut(4),
      label: 'Thorough',
      descriptor:
        "Thorough examination of the writer's methods with detailed consideration of their effects on the reader. Subject terminology is integrated to support analysis.",
      indicators: [
        'Considers layered effects of language and structure',
        'Terminology is embedded and purposeful',
        'Explores form and structure alongside language',
      ],
    },
    {
      band: 'Level 5',
      minMarks: cut(4) + 1,
      maxMarks: max,
      label: 'Perceptive',
      descriptor:
        "Perceptive analysis of how the writer's methods combine to create sophisticated meanings and effects. Precise subject terminology enhances the argument throughout.",
      indicators: [
        'Perceptive, layered analysis of craft and reader response',
        'Terminology sharpens rather than decorates the argument',
        'Reads the text as a fully crafted whole',
      ],
    },
  ]
}

/**
 * Build a four-level context band set (AO3) scaled to `max`.
 */
function contextBands(max: number): BandDescriptor[] {
  const cut = (n: number) => Math.max(n, Math.round((n / 4) * max))
  return [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: cut(1),
      label: 'Basic',
      descriptor:
        'Basic awareness of context offered as isolated facts. There is little or no link between the contextual information and the meaning of the text.',
      indicators: [
        'Context is bolted on with no integration',
        'No clear link between context and interpretation',
      ],
    },
    {
      band: 'Level 2',
      minMarks: cut(1) + 1,
      maxMarks: cut(2),
      label: 'Some',
      descriptor:
        'Some understanding of context with a few relevant links between the context and the text or task. Context begins to inform the interpretation.',
      indicators: [
        'Some relevant contextual points are linked to the text',
        'Context starts to support the response',
      ],
    },
    {
      band: 'Level 3',
      minMarks: cut(2) + 1,
      maxMarks: cut(3),
      label: 'Sound',
      descriptor:
        "Sound understanding of context shown through specific links that support points about theme, character or the writer's purpose.",
      indicators: [
        'Context supports points about theme or character',
        'Shows awareness of the ideas and attitudes of the period',
      ],
    },
    {
      band: 'Level 4',
      minMarks: cut(3) + 1,
      maxMarks: max,
      label: 'Assured',
      descriptor:
        "Assured understanding of context fully integrated into the interpretation, illuminating the writer's intentions and the reception of the text.",
      indicators: [
        'Context is woven into the argument as a critical lens',
        'Shows how context shapes meaning at more than one level',
      ],
    },
  ]
}

/**
 * Build a four-level comparison/connections band set (AO4) scaled to `max`.
 */
function comparisonBands(max: number): BandDescriptor[] {
  const cut = (n: number) => Math.max(n, Math.round((n / 4) * max))
  return [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: cut(1),
      label: 'Basic',
      descriptor:
        'Basic, undeveloped comparison. The poems are largely treated separately with little or no explicit linking between them.',
      indicators: ['Discusses each poem in isolation', 'Little comparative language is used'],
    },
    {
      band: 'Level 2',
      minMarks: cut(1) + 1,
      maxMarks: cut(2),
      label: 'Some',
      descriptor:
        'Some comparison is attempted, with a few relevant cross-references that begin to identify similarities or differences between the poems.',
      indicators: [
        'Uses some comparative connectives',
        'Begins to identify similarities and differences',
      ],
    },
    {
      band: 'Level 3',
      minMarks: cut(2) + 1,
      maxMarks: cut(3),
      label: 'Sound',
      descriptor:
        'Sound, structured comparison with relevant cross-references that address both ideas and methods across the two poems with reasonable balance.',
      indicators: [
        'A sustained comparative structure is maintained',
        'Both poems receive reasonably balanced attention',
      ],
    },
    {
      band: 'Level 4',
      minMarks: cut(3) + 1,
      maxMarks: max,
      label: 'Assured',
      descriptor:
        "Assured, analytical comparison fully integrated into the response, discriminating precisely between the writers' ideas, themes and methods.",
      indicators: [
        'Comparison drives the argument rather than being added on',
        'Considers why the writers make different choices',
      ],
    },
  ]
}

// ─── Assessment Objective factory helpers ──────────────────────────────────

function ao1(max: number, total: number): AssessmentObjective {
  return {
    id: 'AO1',
    label: 'AO1 - Read, understand and respond',
    description:
      'Read and understand a range of texts and maintain a critical, informed personal response, using textual references including quotations to support and illustrate interpretations.',
    maxMarks: max,
    weighting: max / total,
    bands: responseBands(max),
  }
}

function ao2(max: number, total: number): AssessmentObjective {
  return {
    id: 'AO2',
    label: 'AO2 - Analyse language, form and structure',
    description:
      'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
    maxMarks: max,
    weighting: max / total,
    bands: analysisBands(max),
  }
}

function ao3(max: number, total: number): AssessmentObjective {
  return {
    id: 'AO3',
    label: 'AO3 - Context',
    description:
      'Show understanding of the relationships between texts and the contexts in which they were written, and how those contexts shape meaning.',
    maxMarks: max,
    weighting: max / total,
    bands: contextBands(max),
  }
}

function ao4(max: number, total: number): AssessmentObjective {
  return {
    id: 'AO4',
    label: 'AO4 - Explore connections',
    description:
      'Explore connections across texts, comparing the ideas, themes and methods used by different writers and the effects these create for the reader.',
    maxMarks: max,
    weighting: max / total,
    bands: comparisonBands(max),
  }
}

// ─── Paper: Poetry and Prose (4ET1/01) ─────────────────────────────────────
// A single 60-mark paper that exercises all four IGCSE Literature assessment
// objectives across three 20-mark sections.

export const edexcelIgcseLit: MarkScheme = {
  id: 'edexcel-igcse-lit',
  board: 'Edexcel IGCSE',
  subject: 'English Literature',
  paper: 'Paper 1',
  title: 'Poetry and Prose',
  totalMarks: 60,
  durationMinutes: 105,
  version: '4ET1/01',
  sourceUrl:
    'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/english-literature-2016.html',
  questions: [
    {
      id: 'Section A',
      questionType: 'Unseen poetry analysis',
      taskDescription:
        'Read one previously unseen poem and explore how the poet presents a theme, feeling or idea, considering the use of language, form and structure.',
      totalMarks: 20,
      assessmentObjectives: [ao1(10, 20), ao2(10, 20)],
      examinerNotes:
        'No context is required for the unseen poem. Reward a personal response (AO1) and analysis of method and effect (AO2) in equal measure.',
    },
    {
      id: 'Section B',
      questionType: 'Anthology poetry comparison',
      taskDescription:
        'Compare how a theme or idea is presented in one named poem from the Pearson Edexcel anthology and one other poem of your choice from the same collection.',
      totalMarks: 20,
      assessmentObjectives: [ao1(6, 20), ao2(6, 20), ao4(8, 20)],
      examinerNotes:
        'The named poem is printed on the paper; the second poem is chosen by the student. AO4 (connections) carries the largest single allocation, so reward sustained, balanced comparison of ideas and methods.',
    },
    {
      id: 'Section C',
      questionType: 'Modern prose essay',
      taskDescription:
        'Answer one essay question on a studied modern prose text, exploring how a theme, character or idea is presented and how it relates to the context of the text.',
      totalMarks: 20,
      assessmentObjectives: [ao1(10, 20), ao3(10, 20)],
      examinerNotes:
        'This is a closed-book, whole-text question. Balance the informed personal response (AO1) with secure, integrated use of context (AO3).',
    },
  ],
}

/**
 * Aggregated export of the Edexcel International GCSE English Literature (4ET1)
 * mark scheme(s).
 */
export const edexcelIgcseLitMarkSchemes: readonly MarkScheme[] = [edexcelIgcseLit]
