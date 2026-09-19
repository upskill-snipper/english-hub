// ─── Edexcel International GCSE English Literature (4ET1) Mark Scheme ────────
// Paper 1: Poetry and Modern Prose - 2h, 90 marks.
//   Section A - Unseen poetry            (20 marks: AO2 20)
//   Section B - Anthology poetry         (30 marks: AO2 15 + AO3 15)
//   Section C - Modern prose             (40 marks: AO1 20 + AO4 20)
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
// Band descriptors remain summarised in our own words from the publicly
// available Edexcel generic level grids. Only the structure, the tariffs and
// the objective labels changed here; no descriptor wording was copied.
//
// PAPER 2 IS STILL NOT HERE, deliberately. The backlog item proposed adding it
// (60 marks: modern drama 30, literary heritage 30) but the only primary
// document read was the Paper 1R mark scheme, which says nothing about Paper 2.
// Adding a second paper on an unverified tariff would put the same class of
// error back in, one paper along.
//
// Sources:
//   Mark Scheme (Results) June 2024, Pearson Edexcel International GCSE in
//   English Literature (4ET1) Paper 1R: Poetry and Modern Prose. Read
//   19 September 2026.
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
    label: 'AO3 - Explore links and connections between texts',
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
    label: 'AO4 - Relationships between texts and their contexts',
    description:
      'Explore connections across texts, comparing the ideas, themes and methods used by different writers and the effects these create for the reader.',
    maxMarks: max,
    weighting: max / total,
    bands: comparisonBands(max),
  }
}

// ─── Paper: Poetry and Modern Prose (4ET1/01) ──────────────────────────────
// A 90-mark paper of three unequal sections. Each section examines a different
// pair of objectives; no section carries all four.

export const edexcelIgcseLit: MarkScheme = {
  id: 'edexcel-igcse-lit',
  board: 'Edexcel IGCSE',
  subject: 'English Literature',
  paper: 'Paper 1',
  title: 'Poetry and Modern Prose',
  totalMarks: 90,
  durationMinutes: 120,
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
      assessmentObjectives: [ao2(20, 20)],
      examinerNotes:
        'AO2 only. No context is required and none is credited; reward analysis of language, form and structure and the effects they create.',
    },
    {
      id: 'Section B',
      questionType: 'Anthology poetry comparison',
      taskDescription:
        'Compare how a theme or idea is presented in one named poem from the Pearson Edexcel anthology and one other poem of your choice from the same collection.',
      totalMarks: 30,
      assessmentObjectives: [ao2(15, 30), ao3(15, 30)],
      examinerNotes:
        'The named poem is printed on the paper; the second poem is chosen by the student. AO2 and AO3 carry fifteen marks each, so analysis of method and sustained comparison are equally weighted. This is the comparison question, and AO3 is the comparison objective - it was previously marked for context, which is AO4 and is not assessed here.',
    },
    {
      id: 'Section C',
      questionType: 'Modern prose essay',
      taskDescription:
        'Answer one essay question on a studied modern prose text, exploring how a theme, character or idea is presented and how it relates to the context of the text.',
      totalMarks: 40,
      assessmentObjectives: [ao1(20, 40), ao4(20, 40)],
      examinerNotes:
        'A closed-book, whole-text question and the largest on the paper. Balance the informed personal response (AO1) with secure, integrated understanding of the relationships between the text and its contexts (AO4).',
    },
  ],
}

/**
 * Aggregated export of the Edexcel International GCSE English Literature (4ET1)
 * mark scheme(s).
 */
export const edexcelIgcseLitMarkSchemes: readonly MarkScheme[] = [edexcelIgcseLit]
