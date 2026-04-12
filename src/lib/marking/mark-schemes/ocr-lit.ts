// ─── OCR GCSE English Literature Mark Scheme ────────────────────────────────
// J352 — Component 01 and Component 02.
// Based on the OCR J352 specification (9-1 GCSE).
//
// Source: https://www.ocr.org.uk/qualifications/gcse/english-literature-j352-from-2015/
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from "./types"

// ─── Shared Assessment Objectives ─────────────────────────────────────────

const ao1: AssessmentObjective = {
  id: "AO1",
  label: "AO1 — Read, understand and respond",
  description:
    "Read, understand and respond to texts. Students should be able to maintain a critical style and develop an informed personal response; use textual references, including quotations, to support and illustrate interpretations.",
  maxMarks: 12,
  weighting: 0.35,
  bands: [
    {
      band: "Level 1",
      minMarks: 1,
      maxMarks: 2,
      label: "Limited",
      descriptor:
        "Limited personal response to the text with few references. Limited understanding of the task with largely descriptive or narrative comment.",
      indicators: [
        "Retells or paraphrases rather than responds",
        "References are sparse and mostly general",
        "Response may not address the question directly",
      ],
    },
    {
      band: "Level 2",
      minMarks: 3,
      maxMarks: 4,
      label: "Some",
      descriptor:
        "Some personal response to the text with some appropriate references. Some understanding of the text and task with some relevant comment.",
      indicators: [
        "Some awareness of meaning beyond surface level",
        "Some relevant references or quotations used",
        "Response addresses the question in places",
      ],
    },
    {
      band: "Level 3",
      minMarks: 5,
      maxMarks: 6,
      label: "Sound",
      descriptor:
        "A sound personal response to the text with relevant references. Sound understanding of the text and task with focused comment.",
      indicators: [
        "Clear engagement with the text and question",
        "Relevant quotations support points made",
        "Paragraphs develop a coherent argument",
      ],
    },
    {
      band: "Level 4",
      minMarks: 7,
      maxMarks: 8,
      label: "Sustained",
      descriptor:
        "A sustained personal response to the text with well-chosen references. Sustained and developed understanding of the text and task with confident comment.",
      indicators: [
        "Developed interpretation maintained throughout",
        "Well-chosen quotations integrated fluently",
        "Argument is well-structured and convincing",
      ],
    },
    {
      band: "Level 5",
      minMarks: 9,
      maxMarks: 10,
      label: "Discriminating",
      descriptor:
        "A discriminating personal response to the text with precise references. Discriminating understanding of the text and task with perceptive and evaluative comment.",
      indicators: [
        "Alternative interpretations considered with nuance",
        "Precise, judiciously selected references",
        "Evaluative and analytical rather than descriptive",
      ],
    },
    {
      band: "Level 6",
      minMarks: 11,
      maxMarks: 12,
      label: "Assured, critical",
      descriptor:
        "An assured critical response to the text with assured, precise references. Assured, critical and exploratory understanding of the text and task.",
      indicators: [
        "Original, perceptive interpretations fully explored",
        "References are precise and integrated seamlessly",
        "Argument is cohesive, critical and illuminating",
      ],
    },
  ],
}

const ao2: AssessmentObjective = {
  id: "AO2",
  label: "AO2 — Analyse language, form and structure",
  description:
    "Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.",
  maxMarks: 12,
  weighting: 0.35,
  bands: [
    {
      band: "Level 1",
      minMarks: 1,
      maxMarks: 2,
      label: "Limited awareness",
      descriptor:
        "Limited awareness of the writer's use of language, form and structure. Limited use of relevant subject terminology.",
      indicators: [
        "Identifies obvious devices without commenting on effect",
        "Subject terminology is absent or inaccurate",
        "Little awareness of the writer as a craftsperson",
      ],
    },
    {
      band: "Level 2",
      minMarks: 3,
      maxMarks: 4,
      label: "Some identification",
      descriptor:
        "Some identification of the writer's use of language, form and structure with some comment on effect. Some use of relevant subject terminology.",
      indicators: [
        "Names some methods and comments simply on effect",
        "Some accurate subject terminology",
        "Begins to recognise authorial intent",
      ],
    },
    {
      band: "Level 3",
      minMarks: 5,
      maxMarks: 6,
      label: "Sound explanation",
      descriptor:
        "Sound explanation of the writer's use of language, form and structure. Sound use of relevant subject terminology to support explanation.",
      indicators: [
        "Explains how methods create meaning and effect",
        "Accurate and appropriate subject terminology",
        "Consistently addresses the writer's choices",
      ],
    },
    {
      band: "Level 4",
      minMarks: 7,
      maxMarks: 8,
      label: "Sustained analysis",
      descriptor:
        "Sustained analysis of the writer's use of language, form and structure. Effective use of subject terminology to support analysis.",
      indicators: [
        "Considers layered effects of language, form and structure",
        "Subject terminology is embedded and purposeful",
        "Explores how form and structure contribute to meaning",
      ],
    },
    {
      band: "Level 5",
      minMarks: 9,
      maxMarks: 10,
      label: "Discriminating analysis",
      descriptor:
        "Discriminating analysis of the writer's use of language, form and structure. Subject terminology used precisely and judiciously.",
      indicators: [
        "Analyses subtle and complex effects with precision",
        "Terminology is used as a precise analytical tool",
        "Considers why the writer made specific choices",
      ],
    },
    {
      band: "Level 6",
      minMarks: 11,
      maxMarks: 12,
      label: "Assured analysis",
      descriptor:
        "Assured, critical analysis of the writer's use of language, form and structure. Subject terminology used with confident precision throughout.",
      indicators: [
        "Perceptive analysis of the writer's craft and its effect on the reader",
        "Terminology is precise, assured and enhances the argument",
        "Text is considered as a whole crafted artefact",
      ],
    },
  ],
}

const ao3: AssessmentObjective = {
  id: "AO3",
  label: "AO3 — Context",
  description:
    "Show understanding of the relationships between texts and the contexts in which they were written.",
  maxMarks: 6,
  weighting: 0.2,
  bands: [
    {
      band: "Level 1",
      minMarks: 1,
      maxMarks: 2,
      label: "Limited awareness",
      descriptor:
        "Limited awareness of contextual factors. Context is stated as bolt-on facts with no link to the text.",
      indicators: [
        "Mentions biographical or historical details without purpose",
        "No integration of context with textual analysis",
      ],
    },
    {
      band: "Level 2",
      minMarks: 3,
      maxMarks: 4,
      label: "Some understanding",
      descriptor:
        "Some understanding of contextual factors shown by links between context and text. Context is beginning to inform interpretation.",
      indicators: [
        "Some relevant context linked to themes or characters",
        "Context is starting to shape the reading of the text",
      ],
    },
    {
      band: "Level 3",
      minMarks: 5,
      maxMarks: 6,
      label: "Assured understanding",
      descriptor:
        "Assured understanding of contextual factors demonstrated through detailed, specific links between context, text and task.",
      indicators: [
        "Integrated, purposeful use of context throughout",
        "Context shapes interpretation and deepens analysis",
        "Engages with the ideas and values of the period",
      ],
    },
  ],
}

const ao4: AssessmentObjective = {
  id: "AO4",
  label: "AO4 — Relate texts / compare",
  description:
    "Show understanding of the relationships between texts and make connections between them. Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.",
  maxMarks: 4,
  weighting: 0.1,
  bands: [
    {
      band: "Level 1",
      minMarks: 1,
      maxMarks: 1,
      label: "Limited",
      descriptor:
        "Limited ability to relate texts or make connections. Writing may hinder meaning with frequent technical errors.",
      indicators: [
        "Simple or no connections between texts",
        "Technical accuracy is weak",
      ],
    },
    {
      band: "Level 2",
      minMarks: 2,
      maxMarks: 2,
      label: "Some",
      descriptor:
        "Some ability to relate texts and make connections. Writing communicates with reasonable accuracy.",
      indicators: [
        "Some relevant connections identified",
        "Writing is mostly clear with some errors",
      ],
    },
    {
      band: "Level 3",
      minMarks: 3,
      maxMarks: 3,
      label: "Sound",
      descriptor:
        "Sound ability to relate texts and make connections. Writing is clear and accurate.",
      indicators: [
        "Meaningful connections between texts explored",
        "Writing is controlled and accurate",
      ],
    },
    {
      band: "Level 4",
      minMarks: 4,
      maxMarks: 4,
      label: "Assured",
      descriptor:
        "Assured ability to relate texts with well-developed connections. Writing is precise and consistently accurate.",
      indicators: [
        "Sophisticated connections enhance the argument",
        "Writing is fluent, precise and ambitious",
      ],
    },
  ],
}

// ─── Component 01 ───────────────────────────────────────────────────────────

export const ocrLitComponent01: MarkScheme = {
  id: "ocr-lit-component01",
  board: "OCR",
  subject: "English Literature",
  paper: "Component 01",
  title: "Exploring Modern and Literary Heritage Texts",
  totalMarks: 80,
  durationMinutes: 120,
  version: "J352/01",
  sourceUrl:
    "https://www.ocr.org.uk/qualifications/gcse/english-literature-j352-from-2015/",
  questions: [
    {
      id: "Section A",
      questionType: "Modern prose or drama (extract + essay)",
      taskDescription:
        "Answer one question on a studied modern prose or drama text. Use the extract as a starting point and refer to the text as a whole.",
      totalMarks: 40,
      assessmentObjectives: [
        { ...ao1, maxMarks: 16, weighting: 16 / 40 },
        { ...ao2, maxMarks: 16, weighting: 16 / 40 },
        { ...ao4, maxMarks: 8, weighting: 8 / 40, bands: ao4.bands.map(b => ({ ...b, minMarks: b.minMarks * 2, maxMarks: b.maxMarks * 2 })) },
      ],
      examinerNotes:
        "AO3 is not assessed in Section A. Reward sustained analysis that moves between the extract and the wider text. AO4 assesses comparative/relational skills and written accuracy.",
    },
    {
      id: "Section B",
      questionType: "Literary heritage prose or drama (essay)",
      taskDescription:
        "Answer one question on a studied literary heritage text (e.g. Great Expectations, Pride and Prejudice, Romeo and Juliet). Refer to the text as a whole.",
      totalMarks: 40,
      assessmentObjectives: [
        { ...ao1, maxMarks: 16, weighting: 16 / 40 },
        { ...ao2, maxMarks: 16, weighting: 16 / 40 },
        { ...ao3, maxMarks: 8, weighting: 8 / 40, bands: ao3.bands.map(b => ({ ...b, minMarks: Math.ceil(b.minMarks * (8 / 6)), maxMarks: Math.ceil(b.maxMarks * (8 / 6)) })) },
      ],
      examinerNotes:
        "AO4 is not assessed in Section B. Context (AO3) should be integrated into the argument, not bolted on. Accept any valid interpretation supported by textual evidence.",
    },
  ],
}

// ─── Component 02 ───────────────────────────────────────────────────────────

export const ocrLitComponent02: MarkScheme = {
  id: "ocr-lit-component02",
  board: "OCR",
  subject: "English Literature",
  paper: "Component 02",
  title: "Exploring Poetry and Shakespeare",
  totalMarks: 80,
  durationMinutes: 120,
  version: "J352/02",
  sourceUrl:
    "https://www.ocr.org.uk/qualifications/gcse/english-literature-j352-from-2015/",
  questions: [
    {
      id: "Section A",
      questionType: "Poetry across time (comparative)",
      taskDescription:
        "Compare how poets present a theme in one named poem and one other poem from the anthology. You must compare the two poems.",
      totalMarks: 40,
      assessmentObjectives: [
        { ...ao1, maxMarks: 12, weighting: 12 / 40 },
        { ...ao2, maxMarks: 12, weighting: 12 / 40 },
        { ...ao3, maxMarks: 8, weighting: 8 / 40, bands: ao3.bands.map(b => ({ ...b, minMarks: Math.ceil(b.minMarks * (8 / 6)), maxMarks: Math.ceil(b.maxMarks * (8 / 6)) })) },
        { ...ao4, maxMarks: 8, weighting: 8 / 40, bands: ao4.bands.map(b => ({ ...b, minMarks: b.minMarks * 2, maxMarks: b.maxMarks * 2 })) },
      ],
      examinerNotes:
        "Reward genuine comparison, not sequential treatment of two poems. Context should illuminate the comparison. The named poem must be discussed.",
    },
    {
      id: "Section B",
      questionType: "Shakespeare (extract + whole text)",
      taskDescription:
        "Starting with an extract from a studied Shakespeare play, explore how a theme, character or relationship is presented in the extract and in the play as a whole.",
      totalMarks: 40,
      assessmentObjectives: [
        { ...ao1, maxMarks: 16, weighting: 16 / 40 },
        { ...ao2, maxMarks: 16, weighting: 16 / 40 },
        { ...ao3, maxMarks: 8, weighting: 8 / 40, bands: ao3.bands.map(b => ({ ...b, minMarks: Math.ceil(b.minMarks * (8 / 6)), maxMarks: Math.ceil(b.maxMarks * (8 / 6)) })) },
      ],
      examinerNotes:
        "AO4 is not assessed in Section B. Reward candidates who move fluently between the extract and the rest of the play. Context should deepen interpretation.",
    },
  ],
}
