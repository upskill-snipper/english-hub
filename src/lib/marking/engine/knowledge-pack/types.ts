/**
 * Knowledge-pack loader types (design doc 11).
 *
 * WHY this file exists separately from `engine/types.ts`: the engine-wide
 * `KnowledgePack` *contract* (and its parts: `PackManifest`, `PackSourcing`,
 * `PackCriterion`, `PackBandDescriptor`, `PackExemplar`, `PackEstimator`) is the
 * settled SEAM, owned by `engine/types.ts` and shared by every marking-engine
 * component. This module MUST NOT fork that contract (doc 10 §5 R6) — it only
 * adds loader-LOCAL concerns: the parsed ref shape and the usability/calibration
 * view the loader derives. It re-exports the contract so callers of the loader
 * can import everything they need from one module.
 */

import type { PackSourcing } from '@/lib/marking/engine/types'

// Re-export the settled engine contract so loader consumers import from ONE
// module. These are RE-EXPORTS, not redefinitions — `engine/types.ts` remains
// the sole source of truth (doc 10 §5 R6).
export type {
  KnowledgePack,
  KnowledgePackRef,
  PackManifest,
  PackSourcing,
  PackCriterion,
  PackBandDescriptor,
  PackExemplar,
  PackEstimator,
  PackStatus,
  CriteriaModel,
  Area,
  TaskType,
} from '@/lib/marking/engine/types'

/**
 * A parsed pack ref. The on-the-wire form is the manifest `fullId`,
 * `<idStem>_<version>` (doc 11 §2.3), e.g. `ielts_writing_v2025.1`. Parsing is
 * total: malformed input yields `null` from `parsePackRef`, never a
 * partially-populated object.
 */
export interface ParsedPackRef {
  /** The id stem before the version token, e.g. `ielts_writing`. */
  readonly idStem: string
  /** The version token, e.g. `v2025.1` (doc 11 §2.3 vYYYY.N). */
  readonly version: string
}

/**
 * The loader's usability view of a pack.
 *
 * WHY a derived view rather than booleans on the pack: usability is a *function*
 * of the manifest (sourcing guardrail + verified gate) and the exemplar bank,
 * not stored state. Computing it on demand keeps the immutable pack data the
 * single source of truth and prevents the flags drifting out of sync.
 */
export interface PackUsability {
  /**
   * Whether the pack is safe to use at all. False when the sourcing manifest
   * declares board-secure material (a hard reject — doc 11 §6).
   */
  readonly usable: boolean
  /**
   * Whether the pack carries calibrated exemplars. A zero-exemplar pack is
   * still `usable` but NOT `calibrated`; the engine flags such runs
   * "uncalibrated" and lowers confidence (doc 11 §1.5; the bank is filled later
   * via the marker-drive, doc 23).
   */
  readonly calibrated: boolean
}

/**
 * A predicate that asserts a sourcing manifest is legally clean. Extracted to a
 * named type so the hard invariant (no board-secure material, doc 11 §6) is a
 * first-class, testable concept rather than an inline boolean check.
 */
export type SourcingGuard = (sourcing: PackSourcing) => boolean
