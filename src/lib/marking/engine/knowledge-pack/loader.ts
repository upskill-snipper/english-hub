/**
 * Knowledge-pack loader: verified-or-null resolution (design doc 11).
 *
 * WHY this mirrors `grade-boundaries/getUsableBoundaryTable`: marking standards,
 * like grade boundaries, must NEVER be guessed. A hallucinated rubric or band
 * descriptor silently corrupts every mark derived from it. So resolution is
 * "verified-or-null": we return a pack only when it exists in the closed
 * registry of known-good packs AND its sourcing manifest is clean; otherwise we
 * return `null` (doc 11 §1.3 fail-to-proxy posture) rather than inventing
 * standards.
 *
 * SCOPE: this is the P3.1 scaffold — an in-repo IELTS WT2 STUB pack so the path
 * is exercisable. The full on-disk file-tree loader (doc 11 §2.1/§2.4) and its
 * checksum/specVersion machinery come later; the contract this returns is the
 * settled {@link KnowledgePack} seam from `engine/types.ts` so the rest of the
 * engine composes against it unchanged.
 *
 * Reproducibility (doc 11 §2.3): every returned pack is deeply frozen so no
 * consumer can mutate shared state mid-run, and the pinned `fullId` makes a mark
 * re-derivable months later.
 */

import { WRITING_TASK2_CRITERIA, BAND_SUMMARY } from '@/lib/ielts/band-descriptors'
import type {
  KnowledgePack,
  PackCriterion,
  PackBandDescriptor,
  PackSourcing,
  ParsedPackRef,
  PackUsability,
} from './types'

// ---------------------------------------------------------------------------
// Ref parsing
// ---------------------------------------------------------------------------

/**
 * Parse a pack ref (`fullId`) of the form `<idStem>_v<YYYY.N>` into its parts,
 * or `null` if malformed (doc 11 §2.3). The version token is the LAST
 * `_v…`-prefixed segment, since the id stem itself may contain underscores
 * (e.g. `ielts_writing`).
 *
 * WHY total/strict: a half-parsed ref (empty stem or no version token) must
 * never resolve to a real pack — same discipline as the grade-boundaries
 * `verified`-or-`null` gate.
 */
export function parsePackRef(ref: string): ParsedPackRef | null {
  if (typeof ref !== 'string' || ref.length === 0) return null
  // The version token is `_v` followed by year.minor, anchored to the end.
  const match = /^(.+)_(v\d{4}\.\d+)$/.exec(ref)
  if (!match) return null
  const idStem = match[1]
  const version = match[2]
  if (idStem.length === 0 || version.length === 0) return null
  return { idStem, version }
}

// ---------------------------------------------------------------------------
// Sourcing guard (hard invariant: no board-secure material — doc 11 §6)
// ---------------------------------------------------------------------------

/**
 * The hard invariant: a pack is only loadable if it declares it contains NO
 * board-secure material. Exam boards aggressively protect secure marking
 * material; the engine must be buildable from own-paraphrased descriptors and
 * own-authored exemplars only. A pack with `containsBoardSecureMaterial: true`
 * is REFUSED (the loader returns null — doc 11 §2.4, §6).
 */
function isSourcingClean(sourcing: PackSourcing): boolean {
  return sourcing.containsBoardSecureMaterial === false
}

// ---------------------------------------------------------------------------
// Deep freeze (immutable return — doc 11 §2.3)
// ---------------------------------------------------------------------------

/**
 * Recursively freeze a value so the returned pack cannot be mutated by any
 * consumer. WHY recursive: `Object.freeze` is shallow; nested arrays/objects
 * (criteria, band descriptors, sourcing) must also be frozen for the
 * reproducibility/immutability guarantee to hold.
 */
function deepFreeze<T>(value: T): T {
  if (value !== null && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.freeze(value)
    for (const key of Object.keys(value as Record<string, unknown>)) {
      deepFreeze((value as Record<string, unknown>)[key])
    }
  }
  return value
}

// ---------------------------------------------------------------------------
// IELTS WT2 stub pack content (doc 11 §3, own-paraphrase IP only)
// ---------------------------------------------------------------------------

/**
 * Map the four public IELTS WT2 criteria (own-paraphrased in
 * `@/lib/ielts/band-descriptors`) onto stable TR/CC/LR/GRA codes the engine
 * expects (doc 11 §3 acceptance: criteria are exactly TR/CC/LR/GRA). The
 * mapping is positional and matches the fixed order of `WRITING_TASK2_CRITERIA`.
 *
 * WHY derive rather than re-type: the criteria already exist as the single
 * public source of truth. Re-keying them here keeps the pack in lockstep with
 * that source and avoids a second place to maintain (and accidentally diverge).
 */
const WT2_CRITERION_CODES = ['TR', 'CC', 'LR', 'GRA'] as const

/**
 * Build the per-band descriptor table from the public whole-band summaries.
 *
 * WHY whole-band summaries: at scaffold time the only own-IP per-band prose in
 * the repo is `BAND_SUMMARY` (bands 3–9). The full per-criterion descriptor
 * grid is authored later when the pack moves on-disk (doc 11 §3). Using the
 * shared summary keeps the stub honestly own-IP and exercisable now.
 */
function buildBandDescriptors(): readonly PackBandDescriptor[] {
  return Object.keys(BAND_SUMMARY)
    .map((k) => Number(k))
    .sort((a, b) => b - a) // highest band first
    .map(
      (band): PackBandDescriptor => ({
        band,
        descriptor: BAND_SUMMARY[band],
      }),
    )
}

/**
 * The four IELTS WT2 criteria, each carrying the (shared, scaffold) per-band
 * descriptor table. Codes are TR/CC/LR/GRA (doc 11 §3, matching the spec §4
 * enum).
 */
function buildCriteria(): readonly PackCriterion[] {
  const bands = buildBandDescriptors()
  return WRITING_TASK2_CRITERIA.map(
    (c, i): PackCriterion => ({
      code: WT2_CRITERION_CODES[i],
      label: c.label,
      bands,
    }),
  )
}

/**
 * Sourcing manifest for the stub: own-paraphrase descriptors, own-expert-marked
 * exemplars (none yet), and the hard `containsBoardSecureMaterial: false`
 * guardrail (doc 11 §2.2, §6).
 */
const IELTS_WT2_SOURCING: PackSourcing = {
  descriptorSource: 'own_paraphrase',
  exemplarSource: 'own_expert_marked',
  containsBoardSecureMaterial: false,
  licenceNote:
    'Descriptors paraphrased in our own words from publicly published IELTS WT2 criteria (original IP, not verbatim board material). The exemplar bank is intentionally empty at scaffold time and is populated later via the marker-drive (doc 23).',
}

const IELTS_WT2_FULL_ID = 'ielts_writing_v2025.1'

/**
 * The IELTS Writing Task 2 STUB pack. Zero exemplars by design — its purpose is
 * to exercise the loader path end-to-end and prove a zero-exemplar pack loads
 * and is flagged "uncalibrated" (doc 11 §1.5; bank filled later via doc 23).
 *
 * `status: 'draft'`, `verified: false` until a human flips them (doc 11 §3) —
 * the stub is loadable (sourcing is clean) but not yet a published, calibrated
 * pack.
 */
const IELTS_WT2_STUB_PACK: KnowledgePack = {
  version: IELTS_WT2_FULL_ID,
  manifest: {
    packId: 'ielts_writing_task2_academic',
    version: 'v2025.1',
    fullId: IELTS_WT2_FULL_ID,
    board: 'ielts',
    subjectOrExam: 'writing',
    qualification: 'academic',
    taskType: 'task2',
    criteriaModel: 'ielts_4criteria',
    status: 'draft',
    specVersion: '1.0',
    verified: false,
    checksums: {},
    sourcing: IELTS_WT2_SOURCING,
  },
  criteria: buildCriteria(),
  // EMPTY by design (doc 11 §1.5) — the bank is filled later via the
  // marker-drive (doc 23). The loader must handle this gracefully and the
  // engine must still function, just flagged "uncalibrated".
  exemplars: [],
  conventions: {
    notes: [
      'Award the band that best fits the response as a whole for each criterion; do not average mechanically.',
      'Off-topic or memorised responses cannot score highly on Task Response regardless of language quality.',
      'Responses under the word count are penalised on Task Response.',
    ],
  },
  promptTemplate:
    'You are an experienced IELTS Writing Task 2 examiner.\n\n' +
    'Rubric (band descriptors):\n{{BAND_DESCRIPTORS}}\n\n' +
    'Reference exemplars:\n{{EXEMPLARS}}\n\n' +
    'Mark the candidate response against the four criteria (TR/CC/LR/GRA), ' +
    'quoting only verbatim evidence from the response.',
  estimator: {
    minBand: 4,
    maxBand: 8,
    thresholds: {},
  },
}

// ---------------------------------------------------------------------------
// Registry (verified-or-null — mirrors grade-boundaries GRADE_BOUNDARY_REGISTRY)
// ---------------------------------------------------------------------------

/**
 * The closed registry of in-repo packs, keyed by canonical `fullId`. Anything
 * not present here resolves to `null` — never guessed. Frozen at module load so
 * the registry itself is immutable.
 */
const PACK_REGISTRY: Readonly<Record<string, KnowledgePack>> = deepFreeze({
  [IELTS_WT2_FULL_ID]: IELTS_WT2_STUB_PACK,
})

// ---------------------------------------------------------------------------
// Public loader API (doc 11 §2.4)
// ---------------------------------------------------------------------------

/**
 * Resolve a knowledge pack by ref (`fullId`). Verified-or-null: returns `null`
 * for an unparseable ref, an unknown id/version, or a pack whose sourcing
 * manifest declares board-secure material. NEVER fabricates a pack.
 *
 * NOTE: this scaffold returns `null` on miss (the grade-boundaries fail-to-proxy
 * pattern) rather than throwing the doc 11 §2.4 fail-CLOSED `NO_PACK` error; the
 * throwing resolver seam (`PackResolveRequest` → `RoutingErrorShape`) is wired
 * later. The returned pack is deeply frozen for reproducibility (doc 11 §2.3).
 */
export function loadKnowledgePack(ref: string): KnowledgePack | null {
  const parsed = parsePackRef(ref)
  if (!parsed) return null

  const pack = PACK_REGISTRY[`${parsed.idStem}_${parsed.version}`]
  if (!pack) return null

  // Hard reject board-secure material at the resolution boundary, not just at
  // authoring time — the invariant is enforced where packs enter the system.
  if (!isSourcingClean(pack.manifest.sourcing)) return null

  return deepFreeze(pack)
}

/**
 * Compute the loader's usability view of a pack: whether it is safe to use and
 * whether it is calibrated (has exemplars). Derived, never stored — see
 * {@link PackUsability} for WHY.
 */
export function getPackUsability(pack: KnowledgePack): PackUsability {
  return {
    usable: isSourcingClean(pack.manifest.sourcing),
    calibrated: pack.exemplars.length > 0,
  }
}

/**
 * Whether a pack is usable at all (sourcing is clean). Convenience predicate.
 */
export function isPackUsable(pack: KnowledgePack): boolean {
  return getPackUsability(pack).usable
}

/**
 * Whether a pack is calibrated (carries at least one exemplar). A zero-exemplar
 * pack is usable but NOT calibrated; the engine flags such runs "uncalibrated"
 * and lowers confidence (doc 11 §1.5).
 */
export function isPackCalibrated(pack: KnowledgePack): boolean {
  return getPackUsability(pack).calibrated
}
