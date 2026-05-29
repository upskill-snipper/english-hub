/**
 * Seam D — the VALIDATOR, the engine's anti-hallucination / anti-bad-arithmetic
 * BACKSTOP (architecture §1.5; IELTS spec §5/§6; design doc 14).
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * The Marker (Seam C, `marker.ts`) returns an UN-validated, model-proposed mark:
 * quotes are unverified, the overall band is the model's own arithmetic, and
 * `needsHumanReview` is not yet code-owned. The single most dangerous failure of
 * an LLM marker is a confident, well-formatted, FABRICATED mark — an invented
 * evidence quote, an error that does not exist in the essay, or band arithmetic
 * done wrong while sounding authoritative. Showing that to a paying candidate
 * preparing for a real exam actively harms them.
 *
 * This module runs AFTER the Marker and BEFORE any mark is trusted. It assumes
 * the model is an unreliable narrator and re-derives in CODE everything that can
 * be re-derived, then verifies every claim the model makes against the source
 * essay. It is PURE and DETERMINISTIC — NO model call, no clock, no randomness,
 * no I/O — because the one component whose job is to catch hallucination must
 * never itself hallucinate.
 *
 * THE FOUR CHECKS (design doc 14 §4, run in this order):
 *   1. RANGE / COMPLETENESS — all four IELTS criteria (TR, CC, LR, GRA) present
 *      exactly once, each band a valid in-range half-band, confidences in [0,1].
 *      A missing/malformed criterion is SCHEMA-FATAL (we cannot recompute or
 *      verify meaningfully), so this runs first and short-circuits.
 *   2. THE BACKSTOP (verbatim evidence) — EVERY evidence quote AND every error
 *      quote must appear verbatim in the essay (whitespace / case / smart-punct
 *      normalised only — NO full stripping, which would let a fabrication slip
 *      through). Each {@link EvidenceSpanV2}/{@link MarkingError} is annotated
 *      `verified`. Any miss is a FABRICATION failure.
 *   3. OVERALL RECOMPUTE — the overall band is recomputed in code via
 *      `result/overall.ts:computeOverallBand` (NEVER trust the model's
 *      arithmetic). The recomputed value always wins and overwrites
 *      `overall.overallBand`; `overallDisagreement` is flagged when the model's
 *      proposed overall differs by more than 0.5.
 *   4. THE CONFIDENCE GATE — `result/confidence.ts:computeNeedsHumanReview`
 *      (0.7 overall / 0.6 criterion / any integrity flag / disagreement /
 *      self-consistency divergence) decides `needsHumanReview`.
 *
 * RETRY SEMANTICS (DECISIONS-log OQ-3, BINDING)
 * ---------------------------------------------
 * A schema-fatal OR fabricated-evidence output SHARES ONE retry budget that the
 * FACADE owns — not this module. So `validate` signals the budget decision via a
 * typed outcome ({@link ValidationOutcome}): `retry` asks the facade to spend its
 * one retry; if a retry has ALREADY happened and it still fails, the outcome is
 * `humanReview` with `needsHumanReview = true` — NEVER a guessed mark. A clean
 * mark is `ok` (still subject to the OQ-5 confidence gate before display).
 */

import type { Band } from '@/lib/ielts/types'
import { computeOverallBand, overallDisagreement } from './result/overall'
import { computeNeedsHumanReview } from './result/confidence'
import {
  IELTS_CRITERION_CODES,
  type BandCriterionScore,
  type CriterionScoreV2,
  type EvidenceSpanV2,
  type IeltsCriterionCode,
  type MarkingError,
  type MarkingResultV2,
} from './result-schema'

// ════════════════════════════════════════════════════════════════════════════════
// §1 — Options + the typed outcome
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Inputs the facade passes to drive the shared single-retry budget (OQ-3).
 */
export interface ValidateOptions {
  /**
   * Whether the facade has ALREADY spent its one retry on this essay. When false
   * and the mark fails schema/fabrication, the validator asks for the retry; when
   * true, the same failure routes to a human instead of looping (OQ-3, doc 14 R2).
   */
  readonly retryAlreadyHappened: boolean
}

/**
 * The result of validation, a discriminated union so a caller cannot forget a
 * case (OQ-3):
 *   • `ok`           — the mark is trustworthy (overall recomputed, every quote
 *                      verified, gate applied). Still subject to the OQ-5 display
 *                      gate elsewhere via `result.needsHumanReview`.
 *   • `retry`        — a schema-fatal or fabrication failure and the facade's one
 *                      retry has NOT been spent: re-call the Marker once.
 *   • `humanReview`  — the mark cannot be trusted and a human must look. Carries
 *                      the annotated result (with `needsHumanReview = true` and
 *                      any `verified: false` spans) so a reviewer sees WHY —
 *                      but it is NEVER a guessed mark to show a learner.
 */
export type ValidationOutcome =
  | { readonly kind: 'ok'; readonly result: MarkingResultV2 }
  | { readonly kind: 'retry'; readonly reasons: readonly string[] }
  | {
      readonly kind: 'humanReview'
      readonly result: MarkingResultV2
      readonly reasons: readonly string[]
    }

// ════════════════════════════════════════════════════════════════════════════════
// §2 — Verbatim-match primitives (the load-bearing backstop helpers)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Normalise text for verbatim quote matching (doc 14 §4.3).
 *
 * WHY ONLY THESE TRANSFORMS: we must tolerate the cosmetic differences a model
 * reliably introduces (casing, collapsed whitespace, smart punctuation) WITHOUT
 * loosening the check into something a fabrication could pass. We deliberately do
 * NOT strip punctuation, stem, remove stopwords, or strip diacritics — any of
 * those would let invented text whose words happen to appear scattered in the
 * essay match. Whitespace + case + smart-punctuation unification is the chosen
 * conservative middle (doc 14 R1).
 *
 * @param text Raw quote or essay text.
 * @returns The normalised form used for substring comparison.
 */
export function normaliseForMatch(text: string): string {
  return (
    text
      .normalize('NFKC')
      // Curly / prime single quotes -> straight apostrophe.
      .replace(/[‘’‛′]/g, "'")
      // Curly / prime double quotes -> straight double quote.
      .replace(/[“”″]/g, '"')
      // En / em dash, minus -> ASCII hyphen.
      .replace(/[–—−]/g, '-')
      // Collapse any run of whitespace to a single space.
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase()
  )
}

/**
 * Whether `quote` appears verbatim (under {@link normaliseForMatch}) inside
 * `essayText`. An empty / whitespace-only quote can never be evidence of
 * anything, so it is treated as absent (a fabrication) per doc 14 §4.3.
 *
 * @param quote     The model's claimed verbatim quote.
 * @param essayText The exact essay string that was sent to the Marker.
 * @returns `true` when the normalised quote is a substring of the normalised essay.
 */
export function quoteAppearsInEssay(quote: string, essayText: string): boolean {
  const needle = normaliseForMatch(quote)
  if (needle.length === 0) {
    return false
  }
  return normaliseForMatch(essayText).includes(needle)
}

// ════════════════════════════════════════════════════════════════════════════════
// §3 — Small pure range-check predicates
// ════════════════════════════════════════════════════════════════════════════════

/** Type guard: an IELTS band criterion (scale `'band'`), the only shape we mark. */
function isBandCriterion(c: CriterionScoreV2): c is BandCriterionScore {
  return c.scale === 'band'
}

/** A band is valid if it is a finite number in [0,9] landing on a half-step. */
function isValidBand(band: number): boolean {
  return Number.isFinite(band) && band >= 0 && band <= 9 && Number.isInteger(band * 2)
}

/** A confidence is valid if it is a finite number in [0,1]. */
function isValidConfidence(value: number): boolean {
  return Number.isFinite(value) && value >= 0 && value <= 1
}

// ════════════════════════════════════════════════════════════════════════════════
// §4 — The validator entry point
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Validate a model marking result against the source essay before it is trusted.
 *
 * Runs the four checks in the documented order and returns a typed
 * {@link ValidationOutcome} the facade acts on. Pure + deterministic: it makes no
 * model call, reads no clock, uses no randomness, and never mutates its input
 * (every annotated value is built on a fresh copy).
 *
 * @param result    The Marker's proposed result (un-validated).
 * @param essayText The EXACT essay string sent to the Marker (doc 14 R8: must be
 *                  the same string, not a re-loaded copy, or verification floods
 *                  false fabrications).
 * @param opts      The facade's single-retry-budget state (OQ-3).
 * @returns         `ok` | `retry` | `humanReview`.
 */
export function validate(
  result: MarkingResultV2,
  essayText: string,
  opts: ValidateOptions,
): ValidationOutcome {
  const schemaFatalReasons: string[] = []

  // ── Check 1 (run first): range / completeness. Build a code->criterion map and
  // assert all four IELTS criteria are present exactly once, are band-scale, and
  // carry valid half-bands + confidences. Anything broken here is schema-fatal:
  // we cannot honestly recompute the overall or verify quotes, so we stop.
  const byCode = new Map<IeltsCriterionCode, BandCriterionScore>()
  const knownCodes = new Set<string>(IELTS_CRITERION_CODES)
  for (const criterion of result.criteria) {
    if (!isBandCriterion(criterion)) {
      schemaFatalReasons.push(`non-band criterion on an IELTS mark: ${criterion.code}`)
      continue
    }
    if (!knownCodes.has(criterion.code)) {
      schemaFatalReasons.push(`unexpected criterion code: ${criterion.code}`)
      continue
    }
    const code = criterion.code as IeltsCriterionCode
    if (byCode.has(code)) {
      schemaFatalReasons.push(`duplicate criterion: ${code}`)
      continue
    }
    byCode.set(code, criterion)
  }
  for (const code of IELTS_CRITERION_CODES) {
    const criterion = byCode.get(code)
    if (criterion === undefined) {
      schemaFatalReasons.push(`missing criterion: ${code}`)
      continue
    }
    if (!isValidBand(criterion.band)) {
      schemaFatalReasons.push(
        `criterion ${code} band out of range or not a half-band: ${criterion.band}`,
      )
    }
    if (!isValidConfidence(criterion.confidence)) {
      schemaFatalReasons.push(`criterion ${code} confidence out of range: ${criterion.confidence}`)
    }
  }
  if (!isValidConfidence(result.overallConfidence)) {
    schemaFatalReasons.push(`overallConfidence out of range: ${result.overallConfidence}`)
  }
  if (result.overall.kind !== 'band') {
    schemaFatalReasons.push(`overall is not a band overall: kind=${result.overall.kind}`)
  }

  if (schemaFatalReasons.length > 0) {
    return decideFailure(schemaFatalReasons, result, opts)
  }
  // From here byCode is complete with all four band criteria and overall is band.
  const bandOverall = result.overall as Extract<MarkingResultV2['overall'], { kind: 'band' }>

  // ── Check 2 (THE BACKSTOP): verify every evidence quote verbatim, annotating a
  // fresh copy of each criterion. We mutate nothing on the input.
  const fabricationReasons: string[] = []
  let unverifiedEvidenceCount = 0

  const verifiedCriteria: BandCriterionScore[] = IELTS_CRITERION_CODES.map((code) => {
    const criterion = byCode.get(code) as BandCriterionScore
    const evidence: EvidenceSpanV2[] = criterion.evidence.map((span) => {
      const verified = quoteAppearsInEssay(span.quote, essayText)
      if (!verified) {
        unverifiedEvidenceCount += 1
        fabricationReasons.push(
          `fabricated evidence quote in ${code}: ${JSON.stringify(span.quote)}`,
        )
      }
      return { ...span, verified }
    })
    return { ...criterion, evidence }
  })

  // ── Check 2 (cont.): verify every ERROR quote verbatim (errors are top-level on
  // MarkingResultV2, not per-criterion). A fabricated error example is as harmful
  // as a fabricated band justification, so it shares the same fabrication path.
  const verifiedErrors: MarkingError[] = result.errors.map((err) => {
    const verified = quoteAppearsInEssay(err.quote, essayText)
    if (!verified) {
      unverifiedEvidenceCount += 1
      fabricationReasons.push(`fabricated error quote (${err.type}): ${JSON.stringify(err.quote)}`)
    }
    return { ...err, verified }
  })

  if (fabricationReasons.length > 0) {
    // A fabrication shares the single retry budget with schema-fatal (OQ-3). Hand
    // back the verified-annotated result so a reviewer sees which spans failed;
    // never present it as a trustworthy mark.
    const annotated: MarkingResultV2 = {
      ...result,
      criteria: verifiedCriteria,
      errors: verifiedErrors,
      validationFlags: { ...result.validationFlags, unverifiedEvidenceCount },
    }
    return decideFailure(fabricationReasons, annotated, opts)
  }

  // ── Check 3: recompute the overall band in CODE (never trust the model's
  // arithmetic). The recomputed value always wins and overwrites overallBand;
  // the model's proposal survives only on proposedOverallBand for the audit.
  // Check 1 already proved each band is a finite, in-range half-step, so it is a
  // valid `Band`; cast to satisfy computeOverallBand's nominal `Band` parameter
  // (the runtime value is unchanged — this is the one place the validated number
  // crosses into the IELTS Band union).
  const computedOverall = computeOverallBand(
    IELTS_CRITERION_CODES.map((code) => (byCode.get(code) as BandCriterionScore).band as Band),
  )
  // computeOverallBand returns null only when fewer than four bands are present;
  // Check 1 guarantees four valid bands, so a null here is itself schema-fatal.
  if (computedOverall === null) {
    return decideFailure(['overall band could not be recomputed from four criteria'], result, opts)
  }
  const disagreement = overallDisagreement(bandOverall.proposedOverallBand, computedOverall)

  // ── Check 4: the confidence gate (OQ-5 thresholds + disagreement + integrity +
  // self-consistency). The model never sets needsHumanReview; code does.
  const needsHumanReview = computeNeedsHumanReview({
    overallConfidence: result.overallConfidence,
    criteria: verifiedCriteria,
    integrityFlags: result.integrityFlags,
    validationFlags: {
      overallDisagreement: disagreement,
      selfConsistencyDiverged: result.validationFlags.selfConsistencyDiverged,
    },
  })

  const finalResult: MarkingResultV2 = {
    ...result,
    criteria: verifiedCriteria,
    errors: verifiedErrors,
    overall: { ...bandOverall, overallBand: computedOverall },
    validationFlags: {
      ...result.validationFlags,
      unverifiedEvidenceCount,
      overallDisagreement: disagreement,
    },
    needsHumanReview,
  }

  if (needsHumanReview) {
    const reasons: string[] = []
    if (result.overallConfidence < 0.7) {
      reasons.push('overallConfidence below 0.7')
    }
    if (verifiedCriteria.some((c) => c.confidence < 0.6)) {
      reasons.push('a criterion confidence below 0.6')
    }
    if (Object.values(result.integrityFlags).some(Boolean)) {
      reasons.push('an integrity flag is set')
    }
    if (disagreement) {
      reasons.push(
        `overall band disagreement: proposed ${bandOverall.proposedOverallBand} vs computed ${computedOverall}`,
      )
    }
    if (result.validationFlags.selfConsistencyDiverged) {
      reasons.push('self-consistency diverged across runs')
    }
    return { kind: 'humanReview', result: finalResult, reasons }
  }

  return { kind: 'ok', result: finalResult }
}

/**
 * Apply the OQ-3 single-retry budget to a schema-fatal or fabrication failure.
 * If the facade's one retry has not been spent, ask it to retry; otherwise route
 * to a human with `needsHumanReview = true`. NEVER returns a guessed mark.
 */
function decideFailure(
  reasons: readonly string[],
  result: MarkingResultV2,
  opts: ValidateOptions,
): ValidationOutcome {
  if (!opts.retryAlreadyHappened) {
    return { kind: 'retry', reasons }
  }
  return {
    kind: 'humanReview',
    result: { ...result, needsHumanReview: true },
    reasons,
  }
}
