// ─── Marking Engine Types ────────────────────────────────────────────────────
// TypeScript interfaces for the LLM-powered GCSE marking engine.
// These types describe the shape of mark schemes used to train prompts and
// score student responses against real AQA-style Assessment Objectives.
// ────────────────────────────────────────────────────────────────────────────

/**
 * A single band descriptor within an Assessment Objective.
 * Mark schemes define 4-6 bands per AO, with a range of marks and qualitative
 * descriptors of what student work in that band looks like.
 */
export interface BandDescriptor {
  /** Human-readable band name, e.g. "Level 4" or "Band 5". */
  band: string
  /** Minimum mark for this band (inclusive). */
  minMarks: number
  /** Maximum mark for this band (inclusive). */
  maxMarks: number
  /** Short label summarising the quality, e.g. "Convincing, critical". */
  label: string
  /** Full qualitative descriptor used by examiners to judge work. */
  descriptor: string
  /** Illustrative bullet-point indicators that typify work at this band. */
  indicators: readonly string[]
}

/**
 * A single Assessment Objective (AO1, AO2, etc.) with its bands.
 * GCSE English Literature uses AO1-AO4; GCSE English Language uses AO1-AO6.
 */
export interface AssessmentObjective {
  /** Canonical AO code, e.g. "AO1". */
  id: string
  /** Short label, e.g. "AO1 — Read, understand and respond". */
  label: string
  /** Long description of what this AO measures. */
  description: string
  /** Total marks available for this AO on this question. */
  maxMarks: number
  /** Relative weighting (0-1) of this AO in the overall question mark. */
  weighting: number
  /** Ordered bands from lowest to highest. */
  bands: readonly BandDescriptor[]
}

/**
 * A question-level mark scheme. A paper may contain several of these
 * (one per question type).
 */
export interface QuestionScheme {
  /** Question number or identifier, e.g. "Q2", "Section B Q5". */
  id: string
  /** Human-readable question type, e.g. "Language Analysis". */
  questionType: string
  /** Short prompt describing the task for the student. */
  taskDescription: string
  /** Total marks available for this question. */
  totalMarks: number
  /** Assessment objectives assessed by this question. */
  assessmentObjectives: readonly AssessmentObjective[]
  /** Optional guidance for examiners (e.g. "Reward any valid interpretation"). */
  examinerNotes?: string
}

/**
 * A full paper mark scheme — e.g. "AQA English Literature Paper 1".
 */
export interface MarkScheme {
  /** Canonical identifier, e.g. "aqa-lit-paper1". */
  id: string
  /** Exam board, e.g. "AQA". */
  board: string
  /** Subject, e.g. "English Literature". */
  subject: 'English Literature' | 'English Language'
  /** Paper name, e.g. "Paper 1" or "Paper 2". */
  paper: string
  /** Paper title, e.g. "Shakespeare and the 19th-century novel". */
  title: string
  /** Total marks on the paper. */
  totalMarks: number
  /** Exam duration in minutes. */
  durationMinutes: number
  /** Questions in this paper. */
  questions: readonly QuestionScheme[]
  /** Optional version / specification year. */
  version?: string
  /** Optional source URL for provenance. */
  sourceUrl?: string
}

// ─── Scoring Result Types ────────────────────────────────────────────────────

/**
 * Score awarded for a single Assessment Objective on a student response.
 */
export interface AOScore {
  /** AO code, e.g. "AO1". */
  id: string
  /** Short label. */
  label: string
  /** Mark awarded. */
  marks: number
  /** Maximum possible marks for this AO. */
  maxMarks: number
  /** Band the response falls into, e.g. "Level 4". */
  band: string
  /** Brief explanation of why this mark was given. */
  justification: string
  /** Optional quotes from the student's work supporting the judgement. */
  evidence?: readonly string[]
}

/**
 * Structured feedback item with a point and an actionable suggestion.
 */
export interface FeedbackItem {
  point: string
  suggestion?: string
  quote?: string
}

/**
 * The full output of marking a student response.
 * This is what the /api/mark route returns.
 */
export interface MarkingResult {
  /** Mark scheme identifier used. */
  markSchemeId: string
  /** Question identifier within the scheme. */
  questionId: string
  /** Total marks awarded across all AOs. */
  totalMarks: number
  /** Maximum marks available for the question. */
  maxMarks: number
  /** Predicted GCSE grade 1-9 (with possible +/- indicator). */
  predictedGrade: string
  /** Grade band category ("Grade 4-5", "Grade 6-7", "Grade 8-9"). */
  gradeBand: string
  /** Per-AO breakdown. */
  aoScores: readonly AOScore[]
  /** What the student did well. */
  strengths: readonly FeedbackItem[]
  /** Targeted improvements — must be guidance, not rewrites. */
  improvements: readonly FeedbackItem[]
  /** 2-3 concrete next-step actions to move up a grade. */
  nextStepsToNextGrade: readonly string[]
  /** Holistic summary paragraph. */
  summary: string
  /**
   * Provenance of the grade-boundary model behind {@link predictedGrade}.
   * Additive/optional — existing consumers may ignore it. Mirrors
   * `GradePrediction.boundarySource` from the grade predictor.
   */
  boundarySource?: string
  /**
   * `true` when {@link predictedGrade} was derived from the AQA proxy curve
   * as a fallback (the student's board has no human-verified boundary table
   * yet) and is therefore an INDICATIVE estimate, not a board-specific grade.
   * The UI SHOULD label the grade as approximate when this is true. Additive
   * and optional; absent/false ⇒ verified board boundaries were used.
   */
  gradeIsIndicativeOnly?: boolean
  /** Human-readable boundary provenance for traceability (EU AI Act Art. 12/15). */
  boundaryDetail?: string
}
