// ─── OCR GCSE English Literature Mark Scheme ────────────────────────────────
// J352 - Component 01 and Component 02.
// Based on the OCR J352 specification (9-1 GCSE).
//
// Source: https://www.ocr.org.uk/qualifications/gcse/english-literature-j352/
//
// ── THE TOP FOUR MARKS WERE UNAWARDABLE (fixed 19 September 2026, EXAM-7) ───
// The 16-mark objectives were built as `{ ...ao1, maxMarks: 16 }`. That spread
// overrode the declared total and left the base ladder, which tops out at 12,
// completely untouched. So three sections told the marker the objective was
// worth 16 marks and then handed it a grid whose highest level read
// "11-12 marks": a candidate who deserved 16 could not be given more than 12.
//
// Nothing caught it because every total still added up - question and paper
// totals are computed from `maxMarks`, which was right. Only the grid the model
// actually marks against was short, and no test looked at the grid.
//
// The AOs now go through `scaleAO()`, which rescales the ladder with the
// tariff. This needed no board document: the target is the objective's own
// declared maxMarks, so what is being removed is an internal contradiction,
// not a claim about OCR's published scheme. The tariffs themselves are still
// UNVERIFIED - see ../examiner/verification.ts.
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from './types'
import { scaleAO } from './scale-ao'

// ─── Shared Assessment Objectives ─────────────────────────────────────────

const ao1: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Read, understand and respond',
  description:
    'Read, understand and respond to texts. Students should be able to maintain a critical style and develop an informed personal response; use textual references, including quotations, to support and illustrate interpretations.',
  maxMarks: 12,
  weighting: 0.35,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Limited',
      descriptor:
        'Limited personal response to the text with few references. Limited understanding of the task with largely descriptive or narrative comment.',
      indicators: [
        'Retells or paraphrases rather than responds',
        'References are sparse and mostly general',
        'Response may not address the question directly',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some',
      descriptor:
        'Some personal response to the text with some appropriate references. Some understanding of the text and task with some relevant comment.',
      indicators: [
        'Some awareness of meaning beyond surface level',
        'Some relevant references or quotations used',
        'Response addresses the question in places',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Sound',
      descriptor:
        'A sound personal response to the text with relevant references. Sound understanding of the text and task with focused comment.',
      indicators: [
        'Clear engagement with the text and question',
        'Relevant quotations support points made',
        'Paragraphs develop a coherent argument',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Sustained',
      descriptor:
        'A sustained personal response to the text with well-chosen references. Sustained and developed understanding of the text and task with confident comment.',
      indicators: [
        'Developed interpretation maintained throughout',
        'Well-chosen quotations integrated fluently',
        'Argument is well-structured and convincing',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Discriminating',
      descriptor:
        'A discriminating personal response to the text with precise references. Discriminating understanding of the text and task with perceptive and evaluative comment.',
      indicators: [
        'Alternative interpretations considered with nuance',
        'Precise, judiciously selected references',
        'Evaluative and analytical rather than descriptive',
      ],
    },
    {
      band: 'Level 6',
      minMarks: 11,
      maxMarks: 12,
      label: 'Assured, critical',
      descriptor:
        'An assured critical response to the text with assured, precise references. Assured, critical and exploratory understanding of the text and task.',
      indicators: [
        'Original, perceptive interpretations fully explored',
        'References are precise and integrated seamlessly',
        'Argument is cohesive, critical and illuminating',
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
  weighting: 0.35,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Limited awareness',
      descriptor:
        "Limited awareness of the writer's use of language, form and structure. Limited use of relevant subject terminology.",
      indicators: [
        'Identifies obvious devices without commenting on effect',
        'Subject terminology is absent or inaccurate',
        'Little awareness of the writer as a craftsperson',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some identification',
      descriptor:
        "Some identification of the writer's use of language, form and structure with some comment on effect. Some use of relevant subject terminology.",
      indicators: [
        'Names some methods and comments simply on effect',
        'Some accurate subject terminology',
        'Begins to recognise authorial intent',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Sound explanation',
      descriptor:
        "Sound explanation of the writer's use of language, form and structure. Sound use of relevant subject terminology to support explanation.",
      indicators: [
        'Explains how methods create meaning and effect',
        'Accurate and appropriate subject terminology',
        "Consistently addresses the writer's choices",
      ],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Sustained analysis',
      descriptor:
        "Sustained analysis of the writer's use of language, form and structure. Effective use of subject terminology to support analysis.",
      indicators: [
        'Considers layered effects of language, form and structure',
        'Subject terminology is embedded and purposeful',
        'Explores how form and structure contribute to meaning',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Discriminating analysis',
      descriptor:
        "Discriminating analysis of the writer's use of language, form and structure. Subject terminology used precisely and judiciously.",
      indicators: [
        'Analyses subtle and complex effects with precision',
        'Terminology is used as a precise analytical tool',
        'Considers why the writer made specific choices',
      ],
    },
    {
      band: 'Level 6',
      minMarks: 11,
      maxMarks: 12,
      label: 'Assured analysis',
      descriptor:
        "Assured, critical analysis of the writer's use of language, form and structure. Subject terminology used with confident precision throughout.",
      indicators: [
        "Perceptive analysis of the writer's craft and its effect on the reader",
        'Terminology is precise, assured and enhances the argument',
        'Text is considered as a whole crafted artefact',
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
  weighting: 0.2,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Limited awareness',
      descriptor:
        'Limited awareness of contextual factors. Context is stated as bolt-on facts with no link to the text.',
      indicators: [
        'Mentions biographical or historical details without purpose',
        'No integration of context with textual analysis',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some understanding',
      descriptor:
        'Some understanding of contextual factors shown by links between context and text. Context is beginning to inform interpretation.',
      indicators: [
        'Some relevant context linked to themes or characters',
        'Context is starting to shape the reading of the text',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Assured understanding',
      descriptor:
        'Assured understanding of contextual factors demonstrated through detailed, specific links between context, text and task.',
      indicators: [
        'Integrated, purposeful use of context throughout',
        'Context shapes interpretation and deepens analysis',
        'Engages with the ideas and values of the period',
      ],
    },
  ],
}

const ao4: AssessmentObjective = {
  id: 'AO4',
  // Was 'AO4 - Relate texts / compare' (fixed 19 September 2026, EXAM-7), with
  // a description that opened on relationships between texts and then gave the
  // real England GCSE Literature AO4 - technical accuracy - as its second
  // sentence. The label and the first sentence contradicted the second.
  //
  // Same reasoning as the matching fix in eduqas-lit.ts: comparison is not a
  // separate objective in GCSE Literature, and aqa-lit-paper1 and edexcel-lit
  // both name AO4 as accuracy. The relationships sentence is removed rather
  // than kept alongside, because the description is fed to the model verbatim.
  label: 'AO4 - Technical accuracy',
  description:
    'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
  maxMarks: 4,
  weighting: 0.1,
  // 9 October 2026: four single-mark levels of this site's own. OCR marks AO4 in
  // three performance levels, 1, 2-3 and 4 (J352/02 mark scheme, June 2018).
  bands: [
    {
      band: 'Threshold',
      minMarks: 1,
      maxMarks: 1,
      label: 'Threshold performance',
      descriptor:
        'Spelling and punctuation with reasonable accuracy, and a reasonable range of vocabulary and sentence structures; any errors do not hinder meaning.',
      indicators: ['Errors do not obscure meaning', 'Some variety in sentence structure'],
    },
    {
      band: 'Intermediate',
      minMarks: 2,
      maxMarks: 3,
      label: 'Intermediate performance',
      descriptor:
        'Spelling and punctuation with considerable accuracy, and a considerable range of vocabulary and sentence structures to achieve general control of meaning.',
      indicators: ['Errors are minor and infrequent', 'Writing is generally controlled'],
    },
    {
      band: 'High',
      minMarks: 4,
      maxMarks: 4,
      label: 'High performance',
      descriptor:
        'Spelling and punctuation with consistent accuracy, and a wide range of vocabulary and sentence structures used to achieve effective control of meaning.',
      indicators: [
        'Ambitious vocabulary used with precision',
        'Writing is fluent, precise and controlled',
      ],
    },
  ],
}

// ─── The components, as OCR marks them ──────────────────────────────────────
//
// REBUILT 9 October 2026 against OCR's mark schemes for J352/01 (June 2023) and
// J352/02 (June 2018) and the J352 specification (Version 3.0, page 16). Each
// mark scheme gives the intended weighting of each objective in each question
// as a share of the GCSE; on an 80-mark paper worth 50%, 1% is 1.6 marks.
//
// What was wrong: Section A of each component was one 40-mark question. OCR
// sets two 20-mark parts. Component 01 put 8 marks of AO4 in Section A and
// Component 02 put AO3 8 and AO4 8 in its poetry; OCR assesses AO4 in Section B
// of each component only, 4 marks, and Component 02 assesses context only in its
// Shakespeare section. Component 01 Section B was described as "literary
// heritage prose or drama" with Romeo and Juliet as an example: it is
// 19th-century prose, and Shakespeare is Component 02. Both Section B notes said
// AO4 was not assessed there, which is where it is.
//
// OCR marks each answer as a whole on a six-level grid (18-20 at the top of a
// 20-mark part; 31-36 for Section B's AO1 to AO3, with AO4 on its own grid);
// this corpus keeps a ladder per objective, scaled to each tariff. The tariffs
// below are OCR's; the ladders' wording is still the site's, so the schemes
// stay unverified (../examiner/verification.ts).

export const ocrLitComponent01: MarkScheme = {
  id: 'ocr-lit-component01',
  board: 'OCR',
  subject: 'English Literature',
  paper: 'Component 01',
  title: 'Exploring Modern and Literary Heritage Texts',
  totalMarks: 80,
  durationMinutes: 120,
  version: 'J352/01',
  sourceUrl: 'https://www.ocr.org.uk/qualifications/gcse/english-literature-j352/',
  questions: [
    {
      id: 'Section A (a)',
      questionType: 'Modern prose or drama: comparing the extract with an unseen extract',
      taskDescription:
        'Compare how an idea is presented in an extract from the studied modern prose or drama text and in an unseen extract from a modern text of the same genre.',
      totalMarks: 20,
      // J352/01 June 2023: AO1 5%, AO2 2.5%, AO3 5%.
      assessmentObjectives: [
        scaleAO(ao1, 8, 8 / 20),
        scaleAO(ao2, 4, 4 / 20),
        scaleAO(ao3, 8, 8 / 20),
      ],
      examinerNotes:
        'Comparison is required throughout. Context counts in this part. AO4 is not assessed in Section A.',
    },
    {
      id: 'Section A (b)',
      questionType: 'Modern prose or drama: elsewhere in the studied text',
      taskDescription:
        'Explore a related idea elsewhere in the studied modern prose or drama text.',
      totalMarks: 20,
      // AO1 6.25%, AO2 6.25%.
      assessmentObjectives: [scaleAO(ao1, 10, 10 / 20), scaleAO(ao2, 10, 10 / 20)],
      examinerNotes: 'AO1 and AO2 are equally weighted. AO3 and AO4 are not assessed in this part.',
    },
    {
      id: 'Section B',
      questionType: '19th-century prose (extract-based or discursive)',
      taskDescription:
        'Answer one question, from a choice of an extract-based question and a discursive question, on the studied 19th-century prose text (for example Great Expectations, Jekyll and Hyde or A Christmas Carol).',
      totalMarks: 40,
      // AO1 8.75%, AO2 8.75%, AO3 5%, AO4 2.5%.
      assessmentObjectives: [
        scaleAO(ao1, 14, 14 / 40),
        scaleAO(ao2, 14, 14 / 40),
        scaleAO(ao3, 8, 8 / 40),
        scaleAO(ao4, 4, 4 / 40),
      ],
      examinerNotes:
        'AO1 to AO3 are marked together out of 36 and AO4 separately out of 4. Context (AO3) should be integrated into the argument, not bolted on.',
    },
  ],
}

export const ocrLitComponent02: MarkScheme = {
  id: 'ocr-lit-component02',
  board: 'OCR',
  subject: 'English Literature',
  paper: 'Component 02',
  title: 'Exploring Poetry and Shakespeare',
  totalMarks: 80,
  durationMinutes: 120,
  version: 'J352/02',
  sourceUrl: 'https://www.ocr.org.uk/qualifications/gcse/english-literature-j352/',
  questions: [
    {
      id: 'Section A (a)',
      questionType: 'Poetry across time: comparing a named anthology poem with an unseen poem',
      taskDescription:
        'Compare how a named poem from the studied cluster of the OCR anthology and an unseen poem, both printed on the paper, present an idea or feeling.',
      totalMarks: 20,
      // J352/02 June 2018: AO1 5%, AO2 7.5%; AO2 is the dominant objective.
      assessmentObjectives: [scaleAO(ao1, 8, 8 / 20), scaleAO(ao2, 12, 12 / 20)],
      examinerNotes:
        'AO2 is dominant. Comparison of the two poems is required throughout. AO3 and AO4 are not assessed in Section A.',
    },
    {
      id: 'Section A (b)',
      questionType: 'Poetry across time: another poem from the cluster',
      taskDescription:
        "Explore how an idea is presented in one other poem of the student's choice from the same anthology cluster.",
      totalMarks: 20,
      // AO1 6.25%, AO2 6.25%.
      assessmentObjectives: [scaleAO(ao1, 10, 10 / 20), scaleAO(ao2, 10, 10 / 20)],
      examinerNotes: 'AO1 and AO2 are equally weighted. AO3 and AO4 are not assessed in Section A.',
    },
    {
      id: 'Section B',
      questionType: 'Shakespeare (extract-based or discursive)',
      taskDescription:
        'Answer one question, from a choice of an extract-based question and a discursive question, on the studied Shakespeare play.',
      totalMarks: 40,
      // AO1 8.75%, AO2 8.75%, AO3 5%, AO4 2.5%.
      assessmentObjectives: [
        scaleAO(ao1, 14, 14 / 40),
        scaleAO(ao2, 14, 14 / 40),
        scaleAO(ao3, 8, 8 / 40),
        scaleAO(ao4, 4, 4 / 40),
      ],
      examinerNotes:
        'AO1 and AO2 are equally dominant; AO1 to AO3 are marked together out of 36 and AO4 separately out of 4.',
    },
  ],
}
