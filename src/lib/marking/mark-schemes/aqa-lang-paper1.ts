// ─── AQA GCSE English Language Paper 1 Mark Scheme ──────────────────────────
// Explorations in Creative Reading and Writing — 1 hour 45 minutes, 80 marks.
// Based on the AQA 8700 specification.
//
// Source: https://www.aqa.org.uk/subjects/english/gcse/english-8700
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from "./types"

// ─── Reading Assessment Objectives ──────────────────────────────────────────

const ao1Reading: AssessmentObjective = {
  id: "AO1",
  label: "AO1 — Identify and interpret",
  description:
    "Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.",
  maxMarks: 4,
  weighting: 0.05,
  bands: [
    {
      band: "Level 1",
      minMarks: 1,
      maxMarks: 1,
      label: "Simple",
      descriptor:
        "Attempts to identify relevant information from the text. Answer lacks focus.",
      indicators: ["Lists simple facts", "Limited relevance"],
    },
    {
      band: "Level 2",
      minMarks: 2,
      maxMarks: 2,
      label: "Some",
      descriptor:
        "Identifies some relevant information from the text, with some focus on the question.",
      indicators: ["Selects some relevant explicit detail"],
    },
    {
      band: "Level 3",
      minMarks: 3,
      maxMarks: 3,
      label: "Clear",
      descriptor:
        "Identifies relevant information from the text clearly, with clear focus on the question.",
      indicators: ["Clear, relevant, focused selection of information"],
    },
    {
      band: "Level 4",
      minMarks: 4,
      maxMarks: 4,
      label: "Perceptive",
      descriptor:
        "Identifies perceptive, relevant information from the text, with perceptive focus on the question.",
      indicators: ["Judicious, precise, perceptive selection"],
    },
  ],
}

const ao2Language: AssessmentObjective = {
  id: "AO2",
  label: "AO2 — Analyse language",
  description:
    "Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views.",
  maxMarks: 8,
  weighting: 0.1,
  bands: [
    {
      band: "Level 1",
      minMarks: 1,
      maxMarks: 2,
      label: "Simple",
      descriptor:
        "Simple comment on the effect of language. Simple mention of method. Simple references. Simple use of subject terminology.",
      indicators: [
        "Identifies devices but not their effect",
        "Limited or inaccurate terminology",
      ],
    },
    {
      band: "Level 2",
      minMarks: 3,
      maxMarks: 4,
      label: "Some",
      descriptor:
        "Some understanding of effects of language. Identifies some methods. Some appropriate references. Some use of terminology.",
      indicators: [
        "Names methods correctly and comments briefly on effect",
      ],
    },
    {
      band: "Level 3",
      minMarks: 5,
      maxMarks: 6,
      label: "Clear",
      descriptor:
        "Clear, relevant explanation of the effects of the writer's choice of language. Range of relevant quotations. Accurate subject terminology.",
      indicators: [
        "Explains effect with clear reference",
        "Accurate terminology",
      ],
    },
    {
      band: "Level 4",
      minMarks: 7,
      maxMarks: 8,
      label: "Perceptive",
      descriptor:
        "Analysis of the effects of the writer's choice of language. Judicious range of quotations. Sophisticated use of terminology.",
      indicators: [
        "Perceptive, detailed analysis of layered meanings",
        "Precise, embedded terminology",
      ],
    },
  ],
}

const ao2Structure: AssessmentObjective = {
  id: "AO3",
  label: "AO2 — Analyse structure",
  description:
    "Explain, comment on and analyse how writers use structure to achieve effects and influence readers.",
  maxMarks: 8,
  weighting: 0.1,
  bands: [
    {
      band: "Level 1",
      minMarks: 1,
      maxMarks: 2,
      label: "Simple",
      descriptor:
        "Simple awareness of structural features. Simple references or textual details.",
      indicators: [
        "Notes beginning/middle/end",
        "Lists features without effect",
      ],
    },
    {
      band: "Level 2",
      minMarks: 3,
      maxMarks: 4,
      label: "Some",
      descriptor:
        "Some understanding of effects of structural features. Identifies some structural features.",
      indicators: [
        "Comments briefly on how shifts in focus affect reader",
      ],
    },
    {
      band: "Level 3",
      minMarks: 5,
      maxMarks: 6,
      label: "Clear",
      descriptor:
        "Clear, relevant explanation of effects of writer's choice of structure. Range of relevant examples.",
      indicators: [
        "Explains how pacing, perspective shifts, openings and endings shape meaning",
      ],
    },
    {
      band: "Level 4",
      minMarks: 7,
      maxMarks: 8,
      label: "Perceptive",
      descriptor:
        "Analysis of effects of writer's choice of structural features. Judicious selection of examples.",
      indicators: [
        "Perceptive analysis of whole-text structure and its cumulative effect on readers",
      ],
    },
  ],
}

const ao4Evaluation: AssessmentObjective = {
  id: "AO4",
  label: "AO4 — Evaluate critically",
  description:
    "Evaluate texts critically and support this with appropriate textual references.",
  maxMarks: 20,
  weighting: 0.25,
  bands: [
    {
      band: "Level 1",
      minMarks: 1,
      maxMarks: 5,
      label: "Simple",
      descriptor:
        "Simple evaluative comment(s). Simple reference(s) to writer's methods.",
      indicators: [
        "Expresses basic opinion with limited support",
      ],
    },
    {
      band: "Level 2",
      minMarks: 6,
      maxMarks: 10,
      label: "Some",
      descriptor:
        "Some evaluative comment(s). Some reference to writer's methods with some effect.",
      indicators: ["Begins to justify an opinion with reference"],
    },
    {
      band: "Level 3",
      minMarks: 11,
      maxMarks: 15,
      label: "Clear",
      descriptor:
        "Clear evaluation of the text. Clear reference to writer's methods and their effect.",
      indicators: [
        "Clear, considered personal response tied to method",
      ],
    },
    {
      band: "Level 4",
      minMarks: 16,
      maxMarks: 20,
      label: "Perceptive",
      descriptor:
        "Perceptive and detailed evaluation of the text. Judicious reference to writer's methods.",
      indicators: [
        "Convincing, critical evaluation fully rooted in analysis of writer's craft",
      ],
    },
  ],
}

// ─── Writing Assessment Objectives (Q5) ─────────────────────────────────────

const ao5Writing: AssessmentObjective = {
  id: "AO5",
  label: "AO5 — Content and organisation",
  description:
    "Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts.",
  maxMarks: 24,
  weighting: 0.3,
  bands: [
    {
      band: "Level 1",
      minMarks: 1,
      maxMarks: 6,
      label: "Simple, limited",
      descriptor:
        "Simple communication. Simple awareness of the reader. Simple linking of ideas. Paragraphs may be used.",
      indicators: [
        "Limited range of vocabulary and sentence forms",
        "Basic, often inconsistent tone",
      ],
    },
    {
      band: "Level 2",
      minMarks: 7,
      maxMarks: 12,
      label: "Some, attempting",
      descriptor:
        "Some clear communication. Some attempt to adapt for purpose, audience and form. Some linking of ideas. Attempts paragraphs with some discourse markers.",
      indicators: [
        "Tone starts to match form",
        "Some conscious vocabulary choices",
      ],
    },
    {
      band: "Level 3",
      minMarks: 13,
      maxMarks: 18,
      label: "Clear and consistent",
      descriptor:
        "Clear and consistent communication. Matching of tone, style and register to purpose, audience and form. Usually coherent paragraphs with clear discourse markers.",
      indicators: [
        "Writing is engaging and well-sequenced",
        "Clear sense of purpose and audience",
      ],
    },
    {
      band: "Level 4",
      minMarks: 19,
      maxMarks: 24,
      label: "Convincing, compelling",
      descriptor:
        "Convincing and compelling communication. Sophisticated matching of tone, style and register. Varied and inventive use of structural features.",
      indicators: [
        "Distinctive voice and compelling narrative",
        "Sophisticated structural choices (motifs, circularity, shifts)",
      ],
    },
  ],
}

const ao6TechnicalAccuracy: AssessmentObjective = {
  id: "AO6",
  label: "AO6 — Technical accuracy",
  description:
    "Candidates must use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.",
  maxMarks: 16,
  weighting: 0.2,
  bands: [
    {
      band: "Level 1",
      minMarks: 1,
      maxMarks: 4,
      label: "Simple",
      descriptor:
        "Simple range of vocabulary, occasionally ambitious. Occasional use of sentence variety. Some accurate basic punctuation. Occasional accurate spelling of simple words.",
      indicators: ["Simple sentences dominate", "Frequent technical errors"],
    },
    {
      band: "Level 2",
      minMarks: 5,
      maxMarks: 8,
      label: "Some",
      descriptor:
        "Some range of vocabulary with some ambition. Some variety of sentence forms for effect. Some accurate punctuation. Some accurate spelling including more ambitious words.",
      indicators: ["Some variety of sentence structures"],
    },
    {
      band: "Level 3",
      minMarks: 9,
      maxMarks: 12,
      label: "Considerable",
      descriptor:
        "Considerable range of vocabulary used effectively. Varied use of sentence forms. Accurate punctuation. Mostly accurate spelling including ambitious vocabulary.",
      indicators: ["Controlled variety of sentence types for effect"],
    },
    {
      band: "Level 4",
      minMarks: 13,
      maxMarks: 16,
      label: "Extensive",
      descriptor:
        "Extensive and ambitious vocabulary. Full range of appropriate sentence forms for effect. Wide range of accurate punctuation. Accurate spelling including ambitious words.",
      indicators: [
        "Consistently accurate across ambitious constructions",
        "Punctuation used to create precise effects",
      ],
    },
  ],
}

// ─── Paper ───────────────────────────────────────────────────────────────────

export const aqaLangPaper1: MarkScheme = {
  id: "aqa-lang-paper1",
  board: "AQA",
  subject: "English Language",
  paper: "Paper 1",
  title: "Explorations in Creative Reading and Writing",
  totalMarks: 80,
  durationMinutes: 105,
  version: "8700/1",
  sourceUrl:
    "https://www.aqa.org.uk/subjects/english/gcse/english-8700/assessment-resources",
  questions: [
    {
      id: "Q1",
      questionType: "Information retrieval (List four things)",
      taskDescription:
        "List four things from this part of the source about [topic].",
      totalMarks: 4,
      assessmentObjectives: [ao1Reading],
      examinerNotes:
        "Reward any four valid explicit details from the specified lines. Do not penalise repetition of the stem.",
    },
    {
      id: "Q2",
      questionType: "Language Analysis",
      taskDescription:
        "Analyse how the writer uses language to describe [topic]. Focus on words, phrases, language features, and techniques.",
      totalMarks: 8,
      assessmentObjectives: [ao2Language],
      examinerNotes:
        "Reward analysis of effect, not device-spotting. Precise quotation is essential at Level 3+.",
    },
    {
      id: "Q3",
      questionType: "Structure Analysis",
      taskDescription:
        "Analyse how the writer has structured the whole source to interest the reader — beginnings and endings, shifts of focus, perspective changes.",
      totalMarks: 8,
      assessmentObjectives: [ao2Structure],
      examinerNotes:
        "Students must consider the whole text. Reward whole-text structural awareness, not just language within paragraphs.",
    },
    {
      id: "Q4",
      questionType: "Evaluation",
      taskDescription:
        "To what extent do you agree with a given statement about the text? Evaluate the writer's methods and your own response.",
      totalMarks: 20,
      assessmentObjectives: [ao4Evaluation],
      examinerNotes:
        "Reward critical personal engagement supported by analysis of methods. Level 4 requires convincing, perceptive evaluation.",
    },
    {
      id: "Q5",
      questionType: "Creative Writing (Descriptive or Narrative)",
      taskDescription:
        "Either describe a scene suggested by a picture, or write the opening of a story suggested by a title. Approximately 45 minutes.",
      totalMarks: 40,
      assessmentObjectives: [ao5Writing, ao6TechnicalAccuracy],
      examinerNotes:
        "AO5 is marked out of 24, AO6 out of 16. Reward deliberate crafting, distinctive voice and structural control.",
    },
  ],
}
