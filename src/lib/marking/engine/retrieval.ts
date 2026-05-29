/**
 * Retrieval layer (Grounded Marking Engine §1.3, design doc 12) — Seam B.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * Architecture §1.3 defines Retrieval narrowly: for each submission, pull ONLY the
 * relevant descriptors (the criteria for that task) and the nearest exemplars (graded
 * sample answers around where the essay seems to land) into context. Doc 12 §2 stresses
 * exemplar anchoring is "one of the single biggest levers on marking accuracy and
 * consistency" ("anchor, don't free-float"). This module performs exactly two selections
 * over a resolved {@link KnowledgePack}:
 *
 *   1. Descriptor selection — emit the WHOLE rubric (doc 12 §2.1: the WT2 rubric is tiny;
 *      narrowing it would add anchoring bias and defeat caching, for ~zero token saving).
 *   2. Exemplar selection — nearest-band anchoring driven by a CHEAP, no-model first-pass
 *      band estimate (doc 12 §2.3/§2.4). This is the only part that needs real logic.
 *
 * WHY IT IS PURE / STATELESS / NO MODEL CALL
 * ------------------------------------------
 * Doc 12 §0: Retrieval is `(KnowledgePack, submission, opts?) -> RetrievalResult`. It does
 * NOT call persistence, does NOT call the model to mark, and does NOT decide the final
 * band — it only pre-positions grounding/anchors. The first-pass estimate is computed from
 * code-only signals (word/paragraph counts, lexical diversity, sentence length, discourse
 * markers) mapped through the pack's own threshold table (doc 12 §2.4 option 1, the chosen
 * MVP). It is NEVER shown to the user, persisted as a mark, or passed to the marker as a
 * "suggested band" — it exists solely to pick anchors (doc 12 §2.4, §6 anchoring-bias).
 *
 * WHY LOOKUP, NOT VECTOR SEARCH
 * -----------------------------
 * Doc 12 §2.6: the selection key is `band` over a bank of <20 exemplars. An in-memory
 * `Map<band, PackExemplar[]>` answers every query in O(1). Embeddings would add a model
 * dependency, a vector store, index maintenance and NON-DETERMINISM (hurting consistency
 * §0 and drift reproducibility §8) for zero MVP benefit. The {@link selectExemplars}
 * boundary is kept stable so a vector-backed implementation can be swapped in later behind
 * the same interface, once the documented trigger conditions hold.
 *
 * CACHE-BOUNDARY REQUIREMENT (doc 12 §2.5 R-CACHE, §6)
 * ---------------------------------------------------
 * The cacheable prefix = persona + instructions + tool schema + the FULL rubric (all
 * stable per pack version). The exemplar block is submission-specific (it depends on the
 * first-pass estimate) and must therefore sit AFTER the Anthropic `cache_control`
 * breakpoint. So this module returns `rubricBlock` and `exemplarBlock` as TWO SEPARATE
 * strings, and stamps `cacheableBoundary: 'after-rubric'`, precisely so the prompt
 * assembler can place the breakpoint between them and never invalidate the cached rubric
 * prefix when the exemplars change.
 *
 * SEAM
 * ----
 * Implements the {@link RetrieveFn} contract from `./types` (the single seam module). All
 * shapes — {@link KnowledgePack}, {@link PackExemplar}, {@link RetrievalResult} etc. — are
 * IMPORTED from there and never re-declared (doc 10 §5 R6: compose, don't fork). The pack
 * loader (doc 11) is built in parallel; this module codes against the seam interface only.
 */

import type {
  KnowledgePack,
  PackCriterion,
  PackEstimator,
  PackExemplar,
  RawSubmission,
  RetrievalOptions,
  RetrievalRequest,
  RetrievalResult,
  FirstPassEstimate,
  BudgetReport,
  RetrieveFn,
} from './types'
import { roundToBand } from '../../ielts/bands'

// ════════════════════════════════════════════════════════════════════════════════
// Constants (doc 12 §2.5 budget; §2.3 exemplar caps)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Default hard cap on the exemplar block, in approximate tokens (doc 12 §2.5).
 * Pack/caller can override via {@link RetrievalOptions.exemplarTokenCap}. Beyond this the
 * block is trimmed (drop to the single nearest exemplar, then truncate essay bodies while
 * keeping each band tag + rationale intact).
 */
export const DEFAULT_EXEMPLAR_TOKEN_CAP = 1200

/**
 * Maximum exemplar scripts ever injected (doc 12 §2.3: "Cap at the 1–2 nearest bands →
 * at most 2–3 scripts. Never inject the whole bank.").
 */
export const MAX_EXEMPLARS = 3

/**
 * The chars/token divisor for the MVP budget approximation (doc 12 §2.5). Cheap `chars/4`
 * estimate; exact SDK token counting can be swapped in if calibration shows it drifting.
 */
const CHARS_PER_TOKEN = 4

/**
 * Expected WT2 length, in words. Under-length essays are strongly capped (doc 12 §2.4 /
 * §3.1) because brevity mirrors the spec's integrity check and caps the achievable band.
 */
const WT2_EXPECTED_WORDS = 250

// ════════════════════════════════════════════════════════════════════════════════
// Token approximation (doc 12 §2.5: chars/4)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Approximate token count for a string via the doc-12 `chars/4` heuristic.
 * Exported so the prompt assembler and tests share the SAME approximation (the budget
 * report and the cache-stability invariant both depend on it being identical everywhere).
 */
export function approxTokens(text: string): number {
  return Math.ceil(text.length / CHARS_PER_TOKEN)
}

// ════════════════════════════════════════════════════════════════════════════════
// Cheap, NO-MODEL first-pass band estimate (doc 12 §2.4 option 1 — chosen MVP)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * The code-only signals the heuristic estimator derives from the essay (doc 12 §3.1).
 * Pure string analysis — no model, no network.
 */
interface EssaySignals {
  /** Whitespace-delimited word count. */
  readonly wordCount: number
  /** Blank-line-delimited paragraph count (min 1 for any non-empty text). */
  readonly paragraphCount: number
  /** Type/token ratio (unique words / total words) — a coarse lexical-diversity proxy. */
  readonly typeTokenRatio: number
  /** Mean sentence length in words — a coarse GRA/complexity proxy. */
  readonly meanSentenceLength: number
  /** Count of discourse-marker hits — a coarse cohesion (CC) proxy. */
  readonly discourseMarkerHits: number
}

/**
 * A small, fixed set of common English discourse markers used as a coarse cohesion proxy.
 * WHY a fixed list and not pack-tunable: the markers themselves are language-level, not
 * board-level; only the THRESHOLDS that interpret their count are pack-tunable
 * (doc 12 §2.4 — thresholds carried by `pack.estimator`).
 */
const DISCOURSE_MARKERS: readonly string[] = [
  'however',
  'therefore',
  'moreover',
  'furthermore',
  'in addition',
  'for example',
  'for instance',
  'on the other hand',
  'in conclusion',
  'as a result',
  'consequently',
  'nevertheless',
  'firstly',
  'secondly',
  'finally',
  'in contrast',
  'although',
  'whereas',
  'because',
  'despite',
]

/**
 * Derive the cheap code-only signals from the candidate answer (doc 12 §3.1).
 * Defensive against empty / whitespace-only input (returns zeroed signals, never throws),
 * so a malformed submission degrades to the lowest band rather than crashing Retrieval.
 */
function computeSignals(answer: string): EssaySignals {
  const trimmed = answer.trim()
  if (trimmed.length === 0) {
    return {
      wordCount: 0,
      paragraphCount: 0,
      typeTokenRatio: 0,
      meanSentenceLength: 0,
      discourseMarkerHits: 0,
    }
  }

  const words = trimmed.split(/\s+/u).filter((w) => w.length > 0)
  const wordCount = words.length

  // Paragraphs: runs of text separated by one or more blank lines.
  const paragraphCount = trimmed.split(/\n\s*\n/u).filter((p) => p.trim().length > 0).length || 1

  // Type/token ratio: unique normalised tokens over total tokens.
  const normalised = words.map((w) => w.toLowerCase().replace(/[^\p{L}\p{N}']/gu, ''))
  const nonEmpty = normalised.filter((w) => w.length > 0)
  const uniqueCount = new Set(nonEmpty).size
  const typeTokenRatio = nonEmpty.length > 0 ? uniqueCount / nonEmpty.length : 0

  // Sentences: split on sentence-final punctuation; mean words per sentence.
  const sentences = trimmed.split(/[.!?]+/u).filter((s) => s.trim().length > 0)
  const meanSentenceLength = sentences.length > 0 ? wordCount / sentences.length : wordCount

  // Discourse markers: substring hits over the lowercased text (coarse cohesion proxy).
  const lower = trimmed.toLowerCase()
  let discourseMarkerHits = 0
  for (const marker of DISCOURSE_MARKERS) {
    // Word-boundary-ish match: count non-overlapping occurrences.
    let idx = lower.indexOf(marker)
    while (idx !== -1) {
      discourseMarkerHits += 1
      idx = lower.indexOf(marker, idx + marker.length)
    }
  }

  return { wordCount, paragraphCount, typeTokenRatio, meanSentenceLength, discourseMarkerHits }
}

/**
 * Read a numeric threshold from the pack's estimator table, falling back to a default
 * when the pack does not carry it. The threshold KEYS are an implementation detail owned
 * by this module (doc 12 §2.4: "The exact field set is owned by the Retrieval
 * implementation"); the seam only guarantees a (de)serialisable record is present.
 */
function threshold(estimator: PackEstimator, key: string, fallback: number): number {
  const v = estimator.thresholds[key]
  return typeof v === 'number' && Number.isFinite(v) ? v : fallback
}

/**
 * Clamp an integer band into the pack's estimator range (doc 12 §2.4: IELTS MVP 4–8).
 * The estimate only needs to land within ±1 band to pick useful anchors; the marker
 * re-decides from scratch.
 */
function clampBand(band: number, estimator: PackEstimator): number {
  const lo = estimator.minBand
  const hi = estimator.maxBand
  return Math.max(lo, Math.min(hi, Math.round(band)))
}

/**
 * Compute the cheap first-pass band estimate from code-only signals (doc 12 §2.4, MVP
 * heuristic). PURE and NO MODEL CALL. The pack's `estimator.thresholds` tune the band
 * cut-offs; the result is `roundToBand`-snapped (reusing the IELTS band lattice) then
 * clamped to the pack's range, with `source: 'heuristic'`.
 *
 * Approach: start from a neutral mid-band and adjust by each signal against pack
 * thresholds, then apply the dominant under-length CAP (an under-length WT2 essay cannot
 * reach the upper bands regardless of other signals — doc 12 §2.4/§3.1).
 *
 * Exported for direct unit testing (doc 12 Step 2 acceptance) and so calibration tooling
 * can compare it against final marks (doc 12 Step 7) without going through the full
 * orchestration.
 */
export function estimateFirstPassBand(
  submission: RawSubmission,
  estimator: PackEstimator,
  opts?: RetrievalOptions,
): FirstPassEstimate {
  // The cheap-model path is a documented future fallback (doc 12 §2.4 option 2); MVP ships
  // heuristic-only. `forceEstimateSource` only stamps provenance for testing/calibration —
  // it never changes the (model-free) computation here.
  const source = opts?.forceEstimateSource ?? 'heuristic'

  const s = computeSignals(submission.answerText)

  // Empty / trivially short answers floor at the bottom of the range.
  if (s.wordCount === 0) {
    return { band: estimator.minBand, source }
  }

  // Neutral starting point: midpoint of the estimator range.
  let band = (estimator.minBand + estimator.maxBand) / 2

  // Lexical diversity (TTR): high diversity nudges up, low nudges down.
  const ttrHigh = threshold(estimator, 'ttrHigh', 0.5)
  const ttrLow = threshold(estimator, 'ttrLow', 0.35)
  if (s.typeTokenRatio >= ttrHigh) band += 1
  else if (s.typeTokenRatio < ttrLow) band -= 1

  // Sentence complexity (mean length): longer mean sentences suggest more complex GRA.
  const sentHigh = threshold(estimator, 'meanSentenceLenHigh', 18)
  const sentLow = threshold(estimator, 'meanSentenceLenLow', 10)
  if (s.meanSentenceLength >= sentHigh) band += 0.5
  else if (s.meanSentenceLength < sentLow) band -= 0.5

  // Cohesion (paragraphs + discourse markers): well-structured essays nudge up.
  const paraGood = threshold(estimator, 'paragraphCountGood', 4)
  const markersGood = threshold(estimator, 'discourseMarkerHitsGood', 4)
  if (s.paragraphCount >= paraGood && s.discourseMarkerHits >= markersGood) band += 1
  else if (s.paragraphCount <= 1 || s.discourseMarkerHits === 0) band -= 0.5

  // DOMINANT under-length cap (doc 12 §2.4/§3.1): an under-length essay is capped low,
  // overriding the upward nudges above. Mirrors the spec's length/integrity check.
  const minWords = threshold(estimator, 'minWordCount', WT2_EXPECTED_WORDS)
  const underLengthCapBand = threshold(estimator, 'underLengthCapBand', estimator.minBand + 1)
  if (s.wordCount < minWords) {
    band = Math.min(band, underLengthCapBand)
  }

  // Severely under-length (well below half the expectation) floors at the minimum.
  if (s.wordCount < minWords / 2) {
    band = estimator.minBand
  }

  // Snap to the legal IELTS band lattice, then clamp to the pack's estimator range and
  // coerce to an integer band (the selection key is an integer band — doc 12 §2.3).
  return { band: clampBand(roundToBand(band), estimator), source }
}

// ════════════════════════════════════════════════════════════════════════════════
// Nearest-band exemplar selection (doc 12 §2.3 — the core of this layer)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Index a pack's exemplar bank by integer band for O(1) nearest-band lookup
 * (doc 12 §2.6: `Map<band, PackExemplar[]>`, built once per selection). Exemplars whose
 * `overallBand` is a half-band are bucketed by their `roundToBand`→`Math.round` integer
 * band so they participate in integer-keyed selection.
 *
 * Exported so a future vector-backed implementation can be swapped in behind the same
 * boundary (doc 12 §2.6) and so tests can assert the bucketing directly.
 */
export function buildExemplarBank(
  exemplars: readonly PackExemplar[],
): ReadonlyMap<number, readonly PackExemplar[]> {
  const bank = new Map<number, PackExemplar[]>()
  for (const ex of exemplars) {
    const key = Math.round(ex.overallBand)
    const bucket = bank.get(key)
    if (bucket) bucket.push(ex)
    else bank.set(key, [ex])
  }
  return bank
}

/**
 * Select the nearest-band exemplars for a first-pass estimate `bHat` (doc 12 §2.3).
 *
 * Strategy (mirrors the spec's "band 6 vs band 7" framing):
 *   • Primary: exemplars at `round(bHat)` AND at `round(bHat)+1` — the band the marker is
 *     most likely deciding between, plus a concrete "what the next band up looks like"
 *     anchor (which also feeds Feedback §7 "show a better version").
 *   • Top-of-range fallback: if `round(bHat)+1` has no exemplars (e.g. estimate 8 with no
 *     band-9 script), select `round(bHat)-1` and `round(bHat)` so two anchors still
 *     bracket the decision.
 *   • Empty bank / no exemplars for the needed bands: return `[]` (no throw) — the caller
 *     emits no exemplar block and flags `exemplarsOmitted` (doc 12 §2.3 fallback).
 *   • Hard cap at {@link MAX_EXEMPLARS}, preferring the two nearest bands.
 *
 * Exported so it can be unit-tested in isolation (doc 12 Step 3 acceptance) and swapped
 * out later behind a stable boundary (doc 12 §2.6).
 */
export function selectExemplars(
  bank: ReadonlyMap<number, readonly PackExemplar[]>,
  bHat: number,
): readonly PackExemplar[] {
  if (bank.size === 0) return []

  const base = Math.round(bHat)
  const at = (b: number): readonly PackExemplar[] => bank.get(b) ?? []

  // Primary pairing: the estimated band and the band above it.
  let lower = base
  let upper = base + 1

  // Top-of-range fallback: if the band-above is empty but the band-below has anchors,
  // bracket the decision with (base-1, base) instead (doc 12 §2.3).
  if (at(upper).length === 0 && at(base - 1).length > 0) {
    lower = base - 1
    upper = base
  }

  // Gather in nearest-first order: the estimated band first (most relevant), then the
  // partner band. De-duplicate when lower === upper would coincide (cannot here, but
  // guard anyway).
  const ordered: PackExemplar[] = []
  const seen = new Set<string>()
  const pushFrom = (b: number): void => {
    for (const ex of at(b)) {
      if (!seen.has(ex.id)) {
        seen.add(ex.id)
        ordered.push(ex)
      }
    }
  }
  // `base` (the estimate) is always the most relevant anchor; emit it first regardless of
  // whether the fallback re-pointed `lower`/`upper`.
  pushFrom(base)
  pushFrom(upper === base ? lower : upper)
  pushFrom(lower === base ? upper : lower)

  // Cap at the two nearest bands → ≤3 scripts (doc 12 §2.3).
  return ordered.slice(0, MAX_EXEMPLARS)
}

// ════════════════════════════════════════════════════════════════════════════════
// Block formatting + cache-boundary separation (doc 12 §2.5 / Step 4)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Format the WHOLE rubric block — all criteria, every band (doc 12 §2.1). This is the
 * CACHEABLE prefix's variable part: it is byte-stable for a given pack version (the
 * cache-stability invariant), so it must be a pure function of `pack.criteria` only.
 *
 * Exported so the prompt assembler reuses the exact same rendering (and so the
 * cache-stability test can assert identical output across submissions sharing a pack).
 */
export function formatRubricBlock(criteria: readonly PackCriterion[]): string {
  const blocks = criteria.map((c) => {
    // Bands rendered low→high for a stable, readable table.
    const bands = [...c.bands]
      .sort((a, b) => a.band - b.band)
      .map((b) => `- Band ${b.band}: ${b.descriptor}`)
      .join('\n')
    return `## ${c.code} — ${c.label}\n${bands}`
  })
  return blocks.join('\n\n')
}

/** Render a single exemplar's full (untrimmed) text form (band tag + rationale + essay). */
function renderExemplar(ex: PackExemplar): string {
  return `### Exemplar (Band ${ex.overallBand}) [${ex.sourceTag}]\nExaminer note: ${ex.rationale}\n\n${ex.essay}`
}

/**
 * Render an exemplar with its essay body truncated to fit a per-exemplar token budget,
 * KEEPING the band tag + rationale intact (doc 12 §2.5 trim rule). Used only when the
 * untrimmed block exceeds the cap.
 */
function renderExemplarTruncated(ex: PackExemplar, essayTokenBudget: number): string {
  const header = `### Exemplar (Band ${ex.overallBand}) [${ex.sourceTag}]\nExaminer note: ${ex.rationale}\n\n`
  const maxEssayChars = Math.max(0, essayTokenBudget * CHARS_PER_TOKEN)
  const essay =
    ex.essay.length > maxEssayChars
      ? `${ex.essay.slice(0, maxEssayChars).trimEnd()}…[truncated]`
      : ex.essay
  return `${header}${essay}`
}

/** The result of formatting the exemplar block: the rendered string plus trim/omit flags. */
interface ExemplarBlockResult {
  readonly block: string
  readonly tokens: number
  readonly trimmed: boolean
  readonly omitted: boolean
}

/**
 * Format the exemplar block from the selected exemplars under a hard token cap
 * (doc 12 §2.5). Trim ladder when over cap:
 *   1. Drop to the single nearest-band exemplar (the first selected — most relevant).
 *   2. If still over, truncate each exemplar's essay body (band tag + rationale kept) to
 *      share the remaining budget; set `trimmed`.
 * Empty selection → empty block with `omitted: true` (marker stays descriptor-grounded).
 *
 * Exported so the assembler/tests share the exact same rendering + budgeting.
 */
export function formatExemplarBlock(
  selected: readonly PackExemplar[],
  tokenCap: number,
): ExemplarBlockResult {
  if (selected.length === 0) {
    return { block: '', tokens: 0, trimmed: false, omitted: true }
  }

  // Step 0: try the full set, untrimmed.
  const fullBlock = selected.map(renderExemplar).join('\n\n')
  const fullTokens = approxTokens(fullBlock)
  if (fullTokens <= tokenCap) {
    return { block: fullBlock, tokens: fullTokens, trimmed: false, omitted: false }
  }

  // Step 1: drop to the single nearest exemplar, untrimmed, if that fits.
  const nearest = selected[0]
  const singleBlock = renderExemplar(nearest)
  const singleTokens = approxTokens(singleBlock)
  if (singleTokens <= tokenCap) {
    return { block: singleBlock, tokens: singleTokens, trimmed: true, omitted: false }
  }

  // Step 2: still over — truncate the single exemplar's essay body to fit the cap while
  // preserving its band tag + rationale (doc 12 §2.5: keep band/rationale on trim).
  const headerTokens = approxTokens(
    `### Exemplar (Band ${nearest.overallBand}) [${nearest.sourceTag}]\nExaminer note: ${nearest.rationale}\n\n…[truncated]`,
  )
  const essayBudget = Math.max(0, tokenCap - headerTokens)
  const truncated = renderExemplarTruncated(nearest, essayBudget)
  return { block: truncated, tokens: approxTokens(truncated), trimmed: true, omitted: false }
}

// ════════════════════════════════════════════════════════════════════════════════
// Public orchestration: selectMarkingContext / retrieve (doc 12 Step 5, Seam B)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Select the marker context for one submission against a resolved pack (doc 12 §2, Step 5).
 *
 * Composes: cheap first-pass estimate → nearest-band exemplar selection → block formatting
 * with the cache boundary made explicit. PURE — no I/O, no model call, no persistence
 * (doc 12 §0). Returns the {@link RetrievalResult} the marker/assembler consumes, with
 * `rubricBlock` and `exemplarBlock` SEPARATE and `cacheableBoundary: 'after-rubric'` so the
 * assembler can place the `cache_control` breakpoint between them (R-CACHE, doc 12 §2.5).
 *
 * For self-consistency (doc 12 §3.2) the SAME result is reused across the marker's runs so
 * the anchors are identical and the runs are comparable.
 */
export function selectMarkingContext(
  pack: KnowledgePack,
  submission: RawSubmission,
  opts?: RetrievalOptions,
): RetrievalResult {
  // 1. Cheap first-pass estimate (no model call) to choose anchors.
  const firstPassEstimate = estimateFirstPassBand(submission, pack.estimator, opts)

  // 2. Nearest-band exemplar selection over an in-memory bank (lookup, not vector search).
  const bank = buildExemplarBank(pack.exemplars)
  const selectedExemplars = selectExemplars(bank, firstPassEstimate.band)

  // 3. Format the two SEPARATE blocks (cache-boundary discipline).
  const rubricBlock = formatRubricBlock(pack.criteria)
  const tokenCap = opts?.exemplarTokenCap ?? DEFAULT_EXEMPLAR_TOKEN_CAP
  const exemplar = formatExemplarBlock(selectedExemplars, tokenCap)

  // 4. Budget report (chars/4 approximation). `cacheableTokens` approximates the stable
  //    prefix; the marker's persona/instructions/tool-schema are added by the assembler,
  //    so here it reflects the rubric portion Retrieval owns.
  const cacheableTokens = approxTokens(rubricBlock)
  const budget: BudgetReport = {
    estTokens:
      cacheableTokens +
      exemplar.tokens +
      approxTokens(submission.questionText) +
      approxTokens(submission.answerText),
    exemplarTokens: exemplar.tokens,
    exemplarTrimmed: exemplar.trimmed,
    exemplarsOmitted: exemplar.omitted,
    cacheableTokens,
  }

  return {
    rubricBlock,
    exemplarBlock: exemplar.block,
    selectedExemplars,
    cacheableBoundary: 'after-rubric',
    firstPassEstimate,
    packVersion: pack.version,
    budget,
  }
}

/**
 * Seam B adapter (doc 10 §2.1 step 3). Wraps {@link selectMarkingContext} into the
 * request-shaped {@link RetrieveFn} the façade composes. Pure/sync per doc 12 §0; the
 * façade may `await` it uniformly (the contract is Promise-tolerant).
 */
export const retrieve: RetrieveFn = (req: RetrievalRequest): RetrievalResult =>
  selectMarkingContext(req.pack, req.submission, req.opts)
