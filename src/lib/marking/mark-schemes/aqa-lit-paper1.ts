// ─── AQA GCSE English Literature Paper 1 Mark Scheme ────────────────────────
// Shakespeare and the 19th-century novel - 1 hour 45 minutes, 64 marks.
// Based on the AQA 8702 specification. Descriptors are summarised from the
// publicly-available AQA mark schemes and generic mark scheme grids.
//
// Source: https://www.aqa.org.uk/subjects/english/gcse/english-8702
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from './types'

// ─── Assessment Objectives (shared between sections) ────────────────────────

const ao1: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Read, understand and respond',
  description:
    'Read, understand and respond to texts. Students should be able to: maintain a critical style and develop an informed personal response; use textual references, including quotations, to support and illustrate interpretations.',
  maxMarks: 12,
  weighting: 0.4,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Simple, explicit',
      descriptor: 'Simple comments relevant to task. Simple references or textual details.',
      indicators: [
        'Retells rather than analyses',
        'Uses a few, often general references',
        'Makes simple, mostly explicit comments',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Supported, relevant',
      descriptor: 'Supported response to task. References used to support a range of comments.',
      indicators: [
        'Makes some relevant comments',
        'Some quotations embedded to support points',
        'Begins to shape a response around the question',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Explained, clear',
      descriptor:
        'Explained, structured response to task. Effective use of references to support explanation.',
      indicators: [
        'Clear and relevant comments on character and theme',
        'Well-chosen quotations woven into argument',
        'Coherent paragraphs that develop an argument',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Thoughtful, developed',
      descriptor:
        'Thoughtful, developed response to task. Apt references integrated into interpretation(s).',
      indicators: [
        'Develops a sustained interpretation of the text',
        'Apt and varied references integrated fluently',
        'Begins to argue rather than describe',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Exploratory, critical',
      descriptor:
        'Exploratory, critical response to task. Judicious use of precise references to support interpretation(s).',
      indicators: [
        'Multiple interpretations explored with nuance',
        'Judiciously-chosen, precise quotations',
        'Confident, sustained critical argument',
      ],
    },
    {
      band: 'Level 6',
      minMarks: 11,
      maxMarks: 12,
      label: 'Convincing, critical',
      descriptor:
        'Convincing, critical analysis and exploration. A sustained critical response with precise, apt references.',
      indicators: [
        'Original, perceptive reading of the text',
        'Analysis deeply rooted in evidence',
        'Argument is cohesive and convincing throughout',
      ],
    },
  ],
}

const ao2: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Analyse language, form and structure',
  description:
    'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
  maxMarks: 12,
  weighting: 0.4,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Simple awareness',
      descriptor: "Simple awareness of writer's methods with reference to subject terminology.",
      indicators: [
        'Identifies obvious devices (simile, metaphor) without effect',
        'Limited subject terminology used inaccurately',
        'Little or no comment on the writer as craftsman',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Identification with comment',
      descriptor:
        "Identification of writer's methods with some comment on effect, using relevant subject terminology.",
      indicators: [
        'Names methods correctly and comments simply on effect',
        'Uses some accurate subject terminology',
        'Begins to recognise authorial choice',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Clear explanation',
      descriptor:
        "Clear explanation of writer's methods with appropriate use of relevant subject terminology.",
      indicators: [
        'Clearly explains how methods create effects',
        'Accurate, relevant subject terminology',
        "Consistently refers to 'the writer' and choices",
      ],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Examination',
      descriptor:
        "Examination of writer's methods with subject terminology used effectively to support consideration of methods.",
      indicators: [
        'Considers layered effects of language and structure',
        'Effective, embedded subject terminology',
        'Explores form and structure, not just language',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Examination and exploration',
      descriptor: "Analysis of writer's methods with subject terminology used judiciously.",
      indicators: [
        'Analyses subtle effects of form, structure and language',
        'Terminology is a precise tool, not decoration',
        'Considers why choices were made, not just what they are',
      ],
    },
    {
      band: 'Level 6',
      minMarks: 11,
      maxMarks: 12,
      label: 'Analysis',
      descriptor:
        "Analysis of writer's methods with subject terminology used judiciously. Exploration of effects of writer's methods on the reader.",
      indicators: [
        'Perceptive analysis of craft and its effect on readers',
        'Terminology used with judicious precision',
        'Considers the whole text as a crafted artefact',
      ],
    },
  ],
}

const ao3: AssessmentObjective = {
  id: 'AO3',
  label: 'AO3 - Context',
  description:
    'Show understanding of the relationships between texts and the contexts in which they were written.',
  maxMarks: 6,
  weighting: 0.15,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Simple awareness',
      descriptor: 'Simple comment on explicit ideas/contextual factors.',
      indicators: ['Mentions context as bolt-on facts', 'No integration with the text'],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some understanding',
      descriptor:
        'Some understanding of ideas/perspectives/contextual factors shown by specific links between context and text/task.',
      indicators: [
        'Some relevant context linked to theme or character',
        'Context begins to inform meaning',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Exploration',
      descriptor:
        'Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task.',
      indicators: [
        'Integrated, purposeful use of context',
        'Context shapes interpretation throughout',
        'Moves beyond biography into ideas and values of the period',
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
        { ...ao1, maxMarks: 12, weighting: 12 / 34 },
        { ...ao2, maxMarks: 12, weighting: 12 / 34 },
        { ...ao3, maxMarks: 6, weighting: 6 / 34 },
        { ...ao4, maxMarks: 4, weighting: 4 / 34 },
      ],
      examinerNotes:
        'Reward candidates who integrate extract analysis with whole-text knowledge. Context should illuminate meaning, not be tacked on.',
    },
    {
      id: 'Section B',
      questionType: '19th-century novel essay',
      taskDescription:
        'Write about a theme, character, or moment in a 19th-century novel (e.g. A Christmas Carol, Jekyll and Hyde, Great Expectations).',
      totalMarks: 30,
      assessmentObjectives: [
        { ...ao1, maxMarks: 12, weighting: 12 / 30 },
        { ...ao2, maxMarks: 12, weighting: 12 / 30 },
        { ...ao3, maxMarks: 6, weighting: 6 / 30 },
      ],
      examinerNotes:
        'AO4 is not assessed in Section B of Paper 1. Accept any valid reading supported by textual evidence.',
    },
  ],
}
