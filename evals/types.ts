// ─── EU AI Act Art. 15 — Marking Accuracy/Robustness Eval: Shared Types ──────
// Shared, dependency-free type definitions for the offline marking-accuracy
// evaluation harness. These types describe the gold-standard dataset schema and
// the metrics the harness computes. They are intentionally decoupled from the
// production `MarkingResult`/`GradePrediction` types so the dataset format can
// stay stable even if internal types evolve.
// ────────────────────────────────────────────────────────────────────────────

/** GCSE grades the predictor can emit, ordered low → high for QWK distance. */
export const GRADE_ORDER: readonly string[] = [
  'U',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
] as const

/** A per-Assessment-Objective examiner mark within a gold-standard case. */
export interface ExaminerAOMark {
  /** AO code, e.g. "AO1". */
  id: string
  /** Marks the human examiner awarded for this AO. */
  marks: number
  /** Maximum marks available for this AO on this question. */
  maxMarks: number
}

/**
 * One gold-standard, examiner-marked case.
 *
 * IMPORTANT: every shipped case in this repo is SYNTHETIC. `studentAnswer`
 * contains placeholder text only — never real student work (GDPR / child-data
 * safety; see /evals/README.md).
 */
export interface GoldStandardCase {
  /** Stable unique id, e.g. "aqa-lit-p1-q1-synthetic-01". */
  id: string
  /** Exam board id/name, e.g. "AQA", "Edexcel", "OCR", "Cambridge". */
  board: string
  /** Paper label, e.g. "Paper 1". */
  paper: string
  /** Question label/id within the paper, e.g. "Q1". */
  question: string
  /** Mark scheme id this case is marked against (see MARK_SCHEMES). */
  markSchemeId: string
  /** Synthetic placeholder student answer (not used for offline scoring). */
  studentAnswer: string
  /** Per-AO marks awarded by the human examiner (the gold input). */
  examinerMarks: readonly ExaminerAOMark[]
  /** The grade the human examiner / awarding body assigned (the gold label). */
  examinerGrade: string
  /** Optional override for the denominator (question total marks). */
  questionMaxMarks?: number
  /** Optional free-text provenance / notes for the case. */
  notes?: string
}

/** A single evaluated row: examiner (gold) vs predicted. */
export interface EvalRow {
  id: string
  board: string
  examinerGrade: string
  predictedGrade: string
  /** Absolute distance in grade steps (using GRADE_ORDER indices). */
  gradeDistance: number
  exact: boolean
  /** Within ±1 grade step. */
  adjacent: boolean
  /** Provenance tag emitted by the predictor for this case. */
  boundarySource: string
}

/** Aggregated metrics for a slice (a board, or "overall"). */
export interface SliceMetrics {
  slice: string
  n: number
  exactAgreement: number
  adjacentAgreement: number
  /** Quadratic Weighted Kappa vs examiner grades (−1..1; 1 = perfect). */
  qwk: number
}

/** Pass/fail thresholds for the harness. See README for rationale. */
export interface EvalThresholds {
  minExactAgreement: number
  minAdjacentAgreement: number
  minQwk: number
}

/** Full harness report. */
export interface EvalReport {
  thresholds: EvalThresholds
  rows: readonly EvalRow[]
  overall: SliceMetrics
  byBoard: readonly SliceMetrics[]
  passed: boolean
  /** Human-readable failure reasons (empty when passed). */
  failures: readonly string[]
}

/**
 * Pluggable marker interface. The default (offline) adapter simply replays the
 * examiner's AO marks through the deterministic grade-predictor. A future
 * LLM-marking adapter can implement this same interface so the harness can
 * grade real model output WITHOUT changing the metrics/reporting code.
 *
 * Adapters MUST be synchronous-or-Promise and MUST NOT be invoked with network
 * access in CI; the default adapter is pure and offline.
 */
export interface MarkerAdapter {
  readonly name: string
  /** Return the predicted grade string for a single case. */
  predict(input: GoldStandardCase): Promise<string> | string
}
