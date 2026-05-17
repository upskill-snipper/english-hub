// ─── EU AI Act Art. 15 — Marking Accuracy/Robustness Eval: Shared Types ──────
// Shared, dependency-free type definitions for the marking-accuracy evaluation
// harness. These types describe the gold-standard dataset schema, the pluggable
// marker contract, and the metrics the harness computes. They are intentionally
// decoupled from the production `MarkingResult`/`GradePrediction` types so the
// dataset format can stay stable even if internal types evolve.
//
// Nothing in this file imports from `@/...` so it stays trivially testable and
// cannot drag production code (or its transitive deps) into the harness.
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

/** The four grade bands used in production (`grade-predictor.ts`). */
export const GRADE_BANDS: readonly string[] = [
  'Grade 1-3',
  'Grade 4-5',
  'Grade 6-7',
  'Grade 8-9',
] as const

/** A per-Assessment-Objective examiner mark within a gold-standard case. */
export interface ExaminerAOMark {
  /** AO code, e.g. "AO1" / "R1" / "W3". */
  id: string
  /** Marks the human examiner awarded for this AO. */
  marks: number
  /** Maximum marks available for this AO on this question. */
  maxMarks: number
}

/**
 * Optional cohort / disparate-impact attributes for sub-group slicing.
 *
 * EU AI Act Art. 15 + doc 05 §5.1 require accuracy to be reported per
 * protected/relevant sub-group, not just in aggregate. These attributes are
 * deliberately coarse, non-identifying flags — they are NOT personal data and
 * MUST never be reverse-engineerable to a candidate (see REAL-DATA-PROTOCOL.md).
 *
 * Every field is optional: synthetic cases tag what they intend to exercise;
 * real cases attach adjudicated cohort metadata stored separately from identity.
 */
export interface CohortAttributes {
  /** English as an Additional Language. */
  eal?: boolean
  /** Special Educational Needs / Disability (proxy flag, not a diagnosis). */
  send?: boolean
  /** Non-standard English dialect / sociolect present in the response. */
  dialect?: boolean
  /** Candidate's declared first language (free-text bucket, e.g. "Arabic"). */
  firstLanguage?: string
  /** Candidate is a minor (under 18) at time of sitting. */
  isMinor?: boolean
}

/** Keys of {@link CohortAttributes} that are sliced as boolean sub-groups. */
export const COHORT_BOOLEAN_KEYS = [
  'eal',
  'send',
  'dialect',
  'isMinor',
] as const satisfies readonly (keyof CohortAttributes)[]

/**
 * One gold-standard, examiner-marked case.
 *
 * IMPORTANT: every case shipped in this repo is SYNTHETIC. `studentAnswer`
 * contains placeholder/illustrative text only — never real student work (GDPR /
 * child-data safety; see /evals/README.md + REAL-DATA-PROTOCOL.md). The
 * `synthetic` flag is load-bearing: the CI gate refuses to certify a numeric
 * accuracy figure for any board whose cases are all synthetic.
 */
export interface GoldStandardCase {
  /** Stable unique id, e.g. "aqa-lit-p1-synthetic-01". */
  id: string
  /** Exam board id/name, e.g. "AQA", "Edexcel", "OCR", "WJEC Eduqas", "Cambridge". */
  board: string
  /** Paper label, e.g. "Paper 1" / "Component 01". */
  paper: string
  /** Question label/id within the paper, e.g. "Section A" / "Q3". */
  question: string
  /** Mark scheme id this case is marked against (see MARK_SCHEMES). */
  markSchemeId: string
  /**
   * Student answer. SYNTHETIC placeholder/illustrative text for shipped cases.
   * Used as the essay body when the LLM adapter is exercised; ignored by the
   * deterministic examiner-replay adapter.
   */
  studentAnswer: string
  /** Per-AO marks awarded by the human examiner (the gold input). */
  examinerMarks: readonly ExaminerAOMark[]
  /** The grade the human examiner / awarding body assigned (the gold label). */
  examinerGrade: string
  /** Optional override for the denominator (question total marks). */
  questionMaxMarks?: number
  /**
   * TRUE for synthetic/illustrative cases (all shipped data). Real
   * examiner-verified cases set this false (or omit it — absence is treated as
   * synthetic, the safe default). The accuracy gate keys off this.
   */
  synthetic?: boolean
  /** Provenance string: where this case came from / how it was constructed. */
  provenance?: string
  /** Question text presented to the model (LLM adapter only). Optional. */
  questionText?: string
  /** Studied text hint (e.g. "Macbeth"), LLM adapter only. Optional. */
  studiedText?: string
  /** Optional sub-group attributes for disparate-impact slicing. */
  cohort?: CohortAttributes
  /** Optional free-text notes for the case. */
  notes?: string
}

/**
 * The result of marking a single case via a {@link MarkerAdapter}.
 *
 * Adapters return both the predicted grade AND the predicted per-AO marks so
 * the harness can compute AO-level mean absolute error, not just grade
 * agreement. `boundarySource` is surfaced for the cross-board validity caveat.
 */
export interface MarkOutcome {
  /** Predicted GCSE grade string (must be in GRADE_ORDER, else penalised). */
  grade: string
  /** Predicted per-AO marks (id → marks). Empty if the adapter cannot supply. */
  aoMarks: readonly ExaminerAOMark[]
  /** Boundary-model provenance tag emitted by the predictor. */
  boundarySource: string
}

/**
 * Pluggable marker. The default offline adapter replays the examiner's AO
 * marks through the deterministic grade-predictor. The LLM adapter runs the
 * real production prompt path against Anthropic (opt-in) or a recorded fixture
 * cache (default/CI). The metrics/reporting code is adapter-agnostic.
 *
 * Adapters MUST NOT perform network I/O in CI. The LLM adapter enforces this
 * itself: it only touches the network when `EVAL_LLM_LIVE=1`.
 */
export interface MarkerAdapter {
  readonly name: string
  /** TRUE if this adapter's output reflects the real LLM marking path. */
  readonly evaluatesLlm: boolean
  /** Return the prediction for a single case. */
  predict(input: GoldStandardCase): Promise<MarkOutcome> | MarkOutcome
}

/** A single evaluated row: examiner (gold) vs predicted. */
export interface EvalRow {
  id: string
  board: string
  markSchemeId: string
  synthetic: boolean
  cohort?: CohortAttributes
  examinerGrade: string
  predictedGrade: string
  /** Absolute distance in grade steps (using GRADE_ORDER indices). */
  gradeDistance: number
  exact: boolean
  /** Within ±1 grade step. */
  adjacent: boolean
  /** Provenance tag emitted by the predictor for this case. */
  boundarySource: string
  /** Per-AO |predicted − examiner| absolute errors, by AO id. */
  aoAbsErrors: Readonly<Record<string, number>>
}

/** 95% confidence interval (percentile bootstrap). */
export interface ConfidenceInterval {
  lo: number
  hi: number
}

/** Aggregated metrics for a slice (a board, "overall", or a cohort slice). */
export interface SliceMetrics {
  slice: string
  n: number
  /** Number of cases in this slice that are real (non-synthetic, verified). */
  nReal: number
  exactAgreement: number
  adjacentAgreement: number
  /** Quadratic Weighted Kappa vs examiner grades (−1..1; 1 = perfect). */
  qwk: number
  /** Bootstrap 95% CI for QWK (null when n too small to resample). */
  qwkCI: ConfidenceInterval | null
  /** Per-AO mean absolute error across the slice (AO id → MAE). */
  aoMae: Readonly<Record<string, number>>
  /** Mean absolute grade-step error across the slice. */
  meanGradeError: number
}

/** One disparate-impact comparison: a cohort slice vs the overall figure. */
export interface DisparityRow {
  /** Human-readable slice label, e.g. "eal=true". */
  slice: string
  n: number
  nReal: number
  /** Slice exact agreement. */
  exactAgreement: number
  /** Overall exact agreement (reference). */
  overallExactAgreement: number
  /** slice − overall (negative = slice does worse). */
  exactDelta: number
  /** Slice QWK. */
  qwk: number
  /** Overall QWK (reference). */
  overallQwk: number
  /** slice − overall QWK. */
  qwkDelta: number
  /** TRUE if |delta| exceeds the configured fairness threshold. */
  flagged: boolean
}

/** Grade-band confusion matrix (examiner band → predicted band → count). */
export interface BandConfusion {
  bands: readonly string[]
  /** matrix[i][j] = count where examiner band i, predicted band j. */
  matrix: readonly (readonly number[])[]
}

/** Test–retest (model stability) summary for N≥2 re-runs of the same cases. */
export interface StabilityMetrics {
  /** Number of independent runs aggregated. */
  runs: number
  /** Number of distinct cases evaluated. */
  cases: number
  /**
   * Fraction of cases whose predicted grade was NOT identical across all runs
   * (0 = perfectly stable; the deterministic adapter is always 0).
   */
  gradeInstabilityRate: number
  /** Mean (over cases) of the max grade-step spread across runs. */
  meanGradeSpread: number
  /** Worst single-case grade-step spread observed. */
  maxGradeSpread: number
}

/** Pass/fail thresholds for the harness. See thresholds.json + README. */
export interface EvalThresholds {
  minExactAgreement: number
  minAdjacentAgreement: number
  minQwk: number
  /**
   * Max tolerated |cohort − overall| gap (on exact agreement AND QWK) before a
   * disparate-impact flag is raised. Documented fairness threshold.
   */
  maxDisparityDelta: number
  /** Max tolerated test–retest grade instability rate (LLM adapter only). */
  maxGradeInstabilityRate: number
}

/** The on-disk thresholds file shape (ratchet-only; see thresholds.json). */
export interface ThresholdsFile extends EvalThresholds {
  /** Monotonic version; bump only when raising a bar. */
  version: number
  /** Free-text justification for the current values. */
  rationale: string
}

/** Full harness report. */
export interface EvalReport {
  adapterName: string
  evaluatesLlm: boolean
  thresholds: EvalThresholds
  rows: readonly EvalRow[]
  overall: SliceMetrics
  byBoard: readonly SliceMetrics[]
  byCohort: readonly SliceMetrics[]
  disparities: readonly DisparityRow[]
  bandConfusion: BandConfusion
  stability: StabilityMetrics | null
  /**
   * Boards present in the dataset that have ZERO real (verified, non-synthetic)
   * cases. A numeric accuracy verdict for these boards is HARD-SUPPRESSED — the
   * harness can validate mechanics on synthetic data but must not certify
   * accuracy from it.
   */
  syntheticOnlyBoards: readonly string[]
  /** TRUE only if every gating metric passed AND the run is certifiable. */
  passed: boolean
  /**
   * TRUE if the run can certify a numeric accuracy figure (i.e. real data
   * present + LLM adapter). FALSE for synthetic-only / boundary-only runs:
   * the run can still PASS as a mechanics check but is NOT an accuracy claim.
   */
  certifiable: boolean
  /** Human-readable failure reasons (empty when passed). */
  failures: readonly string[]
  /** Non-fatal warnings (e.g. synthetic-only, small n, wide CI). */
  warnings: readonly string[]
}

// ─── Back-compat re-exports ──────────────────────────────────────────────────
// The original harness exported these symbols from this module. Keep the names
// stable for any external importer; the canonical metric impls now live in
// ./stats.ts and are re-exported there too.
export type { GoldStandardCase as GoldCase }
