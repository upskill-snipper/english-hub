/**
 * Sourcing / provenance manifest for the IELTS Writing Task 2 knowledge pack
 * (knowledge-pack design doc 11 §2.2, §6 — the copyright/sourcing guardrail).
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * Doc 11 §6 makes copyright the headline risk: reproducing the British Council /
 * IDP / Cambridge Assessment English *secure* or *official* band-descriptor text
 * (or their secure exemplar scripts) is both a legal exposure and undermines the
 * "packs are our defensible asset" thesis. So every pack carries a machine-checked
 * sourcing block asserting `containsBoardSecureMaterial === false`; the loader
 * (`../../loader.ts` → `isSourcingClean`) REFUSES to load any pack that fails it.
 *
 * This module is DATA (provenance metadata) for the IELTS WT2 pack. The four
 * assessment criteria (Task Response, Coherence & Cohesion, Lexical Resource,
 * Grammatical Range & Accuracy) and the whole-band 0–9 scale this pack scores are
 * authored as OWN-PARAPHRASE descriptor language that faithfully captures the
 * public IELTS band-descriptor framework and its CEFR alignment — it does NOT
 * reproduce any board's secure/official descriptor wording verbatim.
 *
 * CONTRACT CONFORMANCE (doc 10 §5 R6 — compose the settled seam, never fork it)
 * ----------------------------------------------------------------------------
 * The canonical sourcing contract is {@link PackSourcing} in
 * `@/lib/marking/engine/types`. The loader and the pack-coverage test read THAT
 * shape (`descriptorSource` / `exemplarSource` / `containsBoardSecureMaterial` /
 * `licenceNote` / `expertMarker`). We therefore export, as the primary artefact,
 * a `PackSourcing` value annotated `satisfies PackSourcing` so it is type-checked
 * against the real seam and can be dropped straight into the pack's
 * `manifest.sourcing` slot. The richer provenance fields the authoring process
 * tracks (pack id, version string, authorities, exemplar-bank state, dated note)
 * are carried in a SUPERSET wrapper {@link Ielts WritingTask2 SourcingManifest}
 * whose `.sourcing` member is exactly that `PackSourcing` value — no second source
 * of truth, no forked descriptor-source enum.
 *
 * EXEMPLARS (doc 11 §1.5, doc 23 — OQ-7)
 * --------------------------------------
 * `exemplarsPresent: false` at authoring time. The expert-marked exemplar bank
 * (the single biggest accuracy lever, doc 11 §1.5) is filled LATER via the human
 * marker drive (doc 23). The empty slot + TODO below records that deferral; the
 * pack is loadable but "uncalibrated" until the bank is populated.
 */

import type { PackSourcing } from '@/lib/marking/engine/types'

// ---------------------------------------------------------------------------
// The canonical PackSourcing block (doc 11 §2.2, §6) — type-checked against the
// settled engine seam so the loader and the coverage test accept it unchanged.
// ---------------------------------------------------------------------------

/**
 * The IELTS WT2 pack's sourcing block, in the canonical {@link PackSourcing}
 * shape. `containsBoardSecureMaterial: false` is the hard publish/load guardrail
 * (doc 11 §2.4, §6). Descriptors are own-paraphrase; the exemplar bank is
 * own-expert-marked (and empty until the doc 23 marker drive fills it — OQ-7).
 */
export const IELTS_WRITING_TASK2_PACK_SOURCING = {
  descriptorSource: 'own_paraphrase',
  exemplarSource: 'own_expert_marked',
  containsBoardSecureMaterial: false,
  licenceNote:
    'Band descriptors for the four IELTS Writing Task 2 criteria (Task Response, ' +
    'Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy) and the ' +
    'whole-band 0–9 scale are authored in our own words as a faithful paraphrase of ' +
    'the publicly documented IELTS band-descriptor framework, aligned to the CEFR. ' +
    'They are original IP and reproduce NO British Council / IDP / Cambridge ' +
    'secure or official descriptor text verbatim (doc 11 §6, plan R-COPY). ' +
    'Crucially, this is NOT a verbatim or near-verbatim copy of the PUBLIC IELTS ' +
    'band descriptors either: the public descriptors published by the British ' +
    'Council, IDP IELTS and Cambridge Assessment English remain the copyright of ' +
    'their owners, and public availability confers no right to reproduce their ' +
    'wording. No distinctive multi-word run of the public descriptors is copied; ' +
    'only generic, non-protectable assessment terms (e.g. "Task Response", ' +
    '"coherence", "cohesion", "lexical resource") are shared. The exemplar bank ' +
    'is intentionally empty at authoring time and is populated later via the ' +
    'in-house expert marker drive (doc 23, OQ-7) — never with board-secure scripts.',
} satisfies PackSourcing

// ---------------------------------------------------------------------------
// Provenance superset — the authoring-time manifest for this pack.
// ---------------------------------------------------------------------------

/**
 * Provenance descriptor for one PUBLIC, non-secure authority whose published
 * framework the pack's criteria derive from. Recorded for audit; the criteria
 * themselves are own-paraphrase (see {@link IELTS_WRITING_TASK2_PACK_SOURCING}).
 */
export interface SourcingAuthority {
  /** Stable identifier for the authority/framework. */
  readonly id: string
  /** Human-readable name of the public authority or framework. */
  readonly name: string
  /**
   * What was used — ONLY publicly available, non-secure material (the published
   * band-descriptor framework, the public CEFR can-do scales). Never secure text.
   */
  readonly basis: string
  /** How the source material was transformed into pack content. */
  readonly usage: 'own-paraphrase'
}

/**
 * The exemplar-bank slot. Empty at authoring time (doc 11 §1.5); the bank is
 * filled later by the marker drive (doc 23). The `present: false` literal mirrors
 * the loader's "usable-but-uncalibrated" posture for a zero-exemplar pack.
 */
export interface ExemplarsSlot {
  /** Whether any exemplars are present in this pack version. */
  readonly present: false
  /** Empty placeholder list, filled later by the marker drive. */
  readonly items: readonly never[]
  /** Tracking note for the deferred work (OQ-7). */
  readonly todo: string
}

/**
 * The authoring-time sourcing/provenance manifest for the IELTS WT2 pack.
 *
 * SUPERSET of the canonical {@link PackSourcing} (carried verbatim in `.sourcing`)
 * plus the pack-identity + authority + exemplar-state metadata the authoring and
 * publish-gate processes track (doc 11 §2.2, §8).
 */
export interface IeltsWritingTask2SourcingManifest {
  /** Stable pack id, WITHOUT version (matches the manifest `packId`, doc 11 §2.2). */
  readonly packId: 'ielts_writing_task2'
  /** Starting version string for this pack revision. */
  readonly version: 'ielts_writing_task2_v2026.1'
  /** The assessment domain this pack scores (human-facing label). */
  readonly domain: string
  /** Public, non-secure authorities the criteria derive from. */
  readonly authorities: readonly SourcingAuthority[]
  /**
   * The four IELTS Writing Task 2 criteria this pack characterises, by stable key.
   * Listed for provenance auditing; per-band descriptor prose lives in the pack's
   * band-descriptor data module.
   */
  readonly criteria: readonly string[]
  /** Inclusive whole-band scale covered by the pack (IELTS 0–9, step 1). */
  readonly bandScale: { readonly min: number; readonly max: number; readonly step: number }
  /**
   * The canonical sourcing block (doc 11 §2.2, §6). This is the EXACT
   * {@link PackSourcing} value the pack manifest carries and the loader checks;
   * `containsBoardSecureMaterial` is false. own_paraphrase_confirmed === true.
   */
  readonly sourcing: PackSourcing
  /** Convenience mirror of `sourcing.containsBoardSecureMaterial` (always false). */
  readonly containsBoardSecureMaterial: false
  /** Whether the exemplar bank is populated (false until the doc 23 marker drive). */
  readonly exemplarsPresent: false
  /** The (empty) exemplar slot + deferral TODO (OQ-7). */
  readonly exemplars: ExemplarsSlot
  /** Free-text, dated authoring note. */
  readonly authoringNote: string
  /** ISO date (YYYY-MM-DD) the manifest was authored. */
  readonly authoredOn: string
}

/**
 * The sourcing manifest for the IELTS Writing Task 2 knowledge pack.
 */
export const ieltsWritingTask2SourcingManifest: IeltsWritingTask2SourcingManifest = {
  packId: 'ielts_writing_task2',
  version: 'ielts_writing_task2_v2026.1',
  domain: 'IELTS Academic & General Training Writing Task 2 (essay)',
  authorities: [
    {
      id: 'ielts_public_band_descriptor_framework',
      name: 'IELTS public band-descriptor framework (British Council / IDP / Cambridge Assessment English)',
      basis:
        'Publicly documented IELTS Writing Task 2 assessment criteria and the ' +
        'whole-band 0–9 scale. Used only as the conceptual framework for the four ' +
        'criteria (Task Response, Coherence & Cohesion, Lexical Resource, ' +
        'Grammatical Range & Accuracy); none of the boards’ secure or official ' +
        'descriptor wording has been copied. Note that the PUBLIC band ' +
        'descriptors are themselves the copyright of the British Council, IDP ' +
        'IELTS and Cambridge Assessment English — public availability is not a ' +
        'licence to reproduce their wording — so no distinctive multi-word run of ' +
        'them is reproduced here either; only generic, non-protectable assessment ' +
        'terminology is shared.',
      usage: 'own-paraphrase',
    },
    {
      id: 'cefr_alignment',
      name: 'Common European Framework of Reference for Languages (CEFR)',
      basis:
        'Public CEFR proficiency scales and can-do descriptors, used to align the ' +
        'paraphrased band characterisations with recognised proficiency levels.',
      usage: 'own-paraphrase',
    },
  ],
  criteria: [
    'task_response',
    'coherence_and_cohesion',
    'lexical_resource',
    'grammatical_range_and_accuracy',
  ],
  bandScale: { min: 0, max: 9, step: 1 },
  sourcing: IELTS_WRITING_TASK2_PACK_SOURCING,
  containsBoardSecureMaterial: false,
  exemplarsPresent: false,
  exemplars: {
    present: false,
    items: [],
    todo:
      'OQ-7: exemplar bank intentionally empty at authoring time. Expert-marked ' +
      'sample responses with per-band rationale are populated later via the human ' +
      'marker drive (knowledge-pack design doc 23). Do not synthesise exemplars ' +
      'here; the pack loads but is flagged "uncalibrated" until the bank is filled ' +
      '(doc 11 §1.5).',
  },
  authoringNote:
    'Authored 2026-05-29 as the initial provenance manifest for the IELTS Writing ' +
    'Task 2 knowledge pack. All band-descriptor content in this pack is original ' +
    'own-paraphrase language faithful to the public IELTS band-descriptor framework ' +
    'and CEFR alignment; no British Council / IDP / Cambridge secure or official ' +
    'descriptor text is reproduced verbatim (doc 11 §6, plan R-COPY). It is also ' +
    'not a verbatim or near-verbatim copy of the PUBLIC IELTS band descriptors — ' +
    'those public descriptors are themselves copyright (public availability is not ' +
    'a licence to copy their wording), and no distinctive multi-word run of them ' +
    'is reproduced here; only generic assessment terminology is shared. The ' +
    '`sourcing` member is the canonical PackSourcing block the pack manifest ' +
    'carries and the loader’s sourcing guard checks ' +
    '(containsBoardSecureMaterial === false).',
  authoredOn: '2026-05-29',
}

export default ieltsWritingTask2SourcingManifest
