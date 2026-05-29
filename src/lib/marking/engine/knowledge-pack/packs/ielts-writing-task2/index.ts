/**
 * IELTS Writing Task 2 — composed Knowledge Pack (knowledge-pack design doc 11 §3)
 * ===============================================================================
 *
 * WHAT THIS FILE IS
 * -----------------
 * The single ASSEMBLY point that composes the separately-authored content
 * modules of the IELTS Writing Task 2 pack into ONE value shaped to the settled
 * engine contract {@link KnowledgePack} (owned by `engine/types.ts`, re-exported
 * from `../../types.ts`). The loader (`../../loader.ts`) imports this composed
 * pack; the rest of the engine (retrieval → marker → validator → feedback)
 * composes against the {@link KnowledgePack} seam unchanged (doc 10 §5 R6 — we
 * COMPOSE the settled contract, we never fork it).
 *
 * WHAT IT COMPOSES (each is its own DATA module in this directory)
 * ---------------------------------------------------------------
 *   • The four criterion descriptor modules — Task Response, Coherence &
 *     Cohesion, Lexical Resource, Grammatical Range & Accuracy — each authored
 *     as own-paraphrase per-band language (bands 4–9) and each exposing a
 *     contract-ready {@link PackCriterion} projection. TR/CC/LR expose a
 *     `toPackCriterion()` factory; GRA exposes the ready-made
 *     `ieltsWritingTask2GraCriterion` const. Both forms yield a
 *     {@link PackCriterion}; this module normalises them into the fixed
 *     TR → CC → LR → GRA order the spec §4 enum and the loader test expect.
 *   • The conventions & common pitfalls module — board/genre conventions,
 *     generic + Arabic-L1 transfer pitfalls, integrity considerations, and the
 *     cross-cutting marking philosophy. Carried in the pack's free-form
 *     {@link KnowledgePack.conventions} slot (a `Record<string, unknown>` by
 *     contract) so the marker prompt can surface anti-drift guidance.
 *   • The sourcing manifest — the canonical {@link PackSourcing} block
 *     (`containsBoardSecureMaterial: false`, the hard publish/load guardrail,
 *     doc 11 §6) plus authoring provenance.
 *
 * COPYRIGHT (plan R-COPY — the cardinal rule)
 * -------------------------------------------
 * Every descriptor and every piece of guidance composed here is OWN-PARAPHRASE
 * language characterising the PUBLIC IELTS band-descriptor framework (British
 * Council / IDP / Cambridge Assessment English), aligned to the CEFR. NO board
 * secure or official descriptor wording is reproduced verbatim. Equally, this is
 * NOT a verbatim or near-verbatim copy of the PUBLIC band descriptors: those
 * public descriptors are themselves copyright (their public availability is not a
 * licence to reproduce their wording), and no distinctive multi-word run of them
 * is copied — only generic assessment terms are shared. The composed
 * `manifest.sourcing.containsBoardSecureMaterial` is `false`.
 *
 * CALIBRATION (doc 11 §1.5, doc 23 — OQ-7)
 * ----------------------------------------
 * The exemplar bank is intentionally EMPTY at authoring time — the single
 * biggest accuracy lever is filled later via the in-house expert marker drive
 * (doc 23), never with board-secure scripts. A zero-exemplar pack is loadable
 * but "uncalibrated": the loader's derived {@link getPackUsability} reports
 * `{ usable: true, calibrated: false }`, and {@link IELTS_WT2_UNCALIBRATED}
 * records that posture explicitly for any consumer that wants the flag without
 * re-deriving it from `exemplars.length`.
 *
 * STATUS
 * ------
 * `status: 'draft'`, `verified: false` until a human flips them (doc 11 §3, §8
 * publish gate). The pack is loadable (sourcing is clean) but is NOT yet a
 * published, calibrated pack.
 */

import type { KnowledgePack, PackCriterion, PackManifest, PackEstimator } from '../../types'

import { toPackCriterion as taskResponseCriterion } from './descriptors-task-response'
import { toPackCriterion as coherenceCohesionCriterion } from './descriptors-coherence-cohesion'
import { toPackCriterion as lexicalResourceCriterion } from './descriptors-lexical-resource'
import { ieltsWritingTask2GraCriterion } from './descriptors-grammatical-range'
import { IELTS_WRITING_TASK2_PACK_SOURCING } from './sourcing-manifest'
import { CONVENTIONS_AND_PITFALLS } from './conventions-and-pitfalls'

/**
 * The persisted `pack_version` (== manifest.fullId, doc 11 §2.3). This is the
 * exact string a historical mark stores so it re-resolves to this immutable
 * pack. It MUST match the key the loader registers this pack under.
 */
export const IELTS_WT2_FULL_ID = 'ielts_writing_v2025.1'

/**
 * The four criteria in their fixed canonical order TR → CC → LR → GRA (spec §4
 * enum; loader test asserts `criteria.map(c => c.code) === ['TR','CC','LR','GRA']`).
 *
 * WHY built here rather than re-exported from one module: the four criteria are
 * authored independently (each in its own file), so the pack is the one place
 * that knows the canonical ordering and assembles them together. Each entry is
 * already a contract-shaped {@link PackCriterion}; this module performs no
 * remapping of the descriptor prose.
 */
export const IELTS_WT2_CRITERIA: readonly PackCriterion[] = [
  taskResponseCriterion(),
  coherenceCohesionCriterion(),
  lexicalResourceCriterion(),
  ieltsWritingTask2GraCriterion,
]

/**
 * The cheap first-pass band-estimator clamp range (doc 12 §2.4). The threshold
 * table is owned/tuned by the Retrieval implementation; the pack only declares
 * the clamp range (IELTS MVP: bands 4–8) and an empty, tunable threshold table.
 */
const IELTS_WT2_ESTIMATOR: PackEstimator = {
  minBand: 4,
  maxBand: 8,
  thresholds: {},
}

/**
 * The system-prompt template WITH the `{{BAND_DESCRIPTORS}}` / `{{EXEMPLARS}}`
 * placeholders Retrieval fills (doc 11 §2.1, doc 12 §2, spec §2). Prompt-in-pack
 * means a board/rubric change is a data change, not a code edit.
 */
const IELTS_WT2_PROMPT_TEMPLATE =
  'You are an experienced IELTS Writing Task 2 examiner.\n\n' +
  'Rubric (band descriptors for Task Response, Coherence & Cohesion, Lexical ' +
  'Resource, and Grammatical Range & Accuracy):\n{{BAND_DESCRIPTORS}}\n\n' +
  'Reference exemplars:\n{{EXEMPLARS}}\n\n' +
  'Mark the candidate response against the four criteria (TR/CC/LR/GRA) on the ' +
  'whole-band 0–9 scale, awarding the band that best fits the response as a ' +
  'whole for each criterion. Quote only verbatim evidence from the response, ' +
  'and apply the board conventions, common pitfalls, and integrity ' +
  'considerations supplied with this pack.'

/**
 * The pack manifest (doc 11 §2.2). Identity + integrity + the sourcing
 * guardrail. `criteriaModel: 'ielts_4criteria'`; `status: 'draft'`,
 * `verified: false` until human-gated (doc 11 §3); `checksums: {}` because this
 * pack is composed in-repo from typed modules rather than loaded from a
 * checksummed on-disk file tree (the on-disk loader + checksums come later,
 * doc 11 §2.1/§2.4). The sourcing block is the canonical {@link PackSourcing}
 * value from the sourcing module — `containsBoardSecureMaterial: false`.
 */
const IELTS_WT2_MANIFEST: PackManifest = {
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
  sourcing: IELTS_WRITING_TASK2_PACK_SOURCING,
}

/**
 * The composed IELTS Writing Task 2 Knowledge Pack.
 *
 * Zero exemplars by design (doc 11 §1.5): the pack is usable but uncalibrated
 * until the marker drive (doc 23) fills the bank. The conventions slot carries
 * the full conventions/pitfalls/integrity/philosophy guidance authored in
 * `conventions-and-pitfalls.ts`, plus an explicit `uncalibrated` marker so a
 * consumer can read the calibration posture without re-deriving it.
 */
export const ieltsWritingTask2Pack: KnowledgePack = {
  version: IELTS_WT2_FULL_ID,
  manifest: IELTS_WT2_MANIFEST,
  criteria: IELTS_WT2_CRITERIA,
  // EMPTY by design (doc 11 §1.5) — populated later via the marker drive
  // (doc 23). A zero-exemplar pack loads and is flagged "uncalibrated".
  exemplars: [],
  conventions: {
    // The authored anti-drift guidance, carried whole in the free-form slot.
    conventions: CONVENTIONS_AND_PITFALLS.conventions,
    pitfalls: CONVENTIONS_AND_PITFALLS.pitfalls,
    integrity: CONVENTIONS_AND_PITFALLS.integrity,
    markingPhilosophy: CONVENTIONS_AND_PITFALLS.markingPhilosophy,
    // Explicit calibration posture (doc 11 §1.5): exemplar bank is empty, so
    // the pack is uncalibrated. The loader also derives this via
    // getPackUsability(pack).calibrated === false.
    uncalibrated: true,
  },
  promptTemplate: IELTS_WT2_PROMPT_TEMPLATE,
  estimator: IELTS_WT2_ESTIMATOR,
}

/**
 * Convenience calibration flag mirroring the pack's zero-exemplar posture
 * (doc 11 §1.5). `true` while the exemplar bank is empty; flips to `false` once
 * the marker drive (doc 23) populates exemplars. Kept in lockstep with the
 * actual bank so it cannot drift: it is literally derived from
 * `exemplars.length`.
 */
export const IELTS_WT2_UNCALIBRATED: boolean = ieltsWritingTask2Pack.exemplars.length === 0

export default ieltsWritingTask2Pack
