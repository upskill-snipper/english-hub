// ─── Marking Engine V2 — persistence ADAPTER (Track A / Step 2, plan P5.2) ────
//
// WHY THIS FILE EXISTS
// --------------------
// The grounded Marking Engine produces a validated {@link MarkingResultV2}. Plan
// R-PERSIST is explicit that the engine does NOT get a parallel table — it writes
// onto the SAME `marking_submissions` spine the live GCSE path already uses (see
// prisma/schema.prisma `model MarkingSubmission`). This adapter is the single,
// pure mapping from a V2 result onto that row's columns. It is ADDITIVE: it only
// touches the columns Step 1 added for V2 (resultSchemaVersion, packVersion,
// needsHumanReview, proposedOverallBand, bandRange, markingErrors) plus the
// already-existing projections (aiResult, aiConfidence, the *_version_id columns).
// The legacy GCSE writer (src/lib/marking/persistence.ts) is untouched and keeps
// working byte-identically because it never sets the new columns.
//
// WHY THE FULL RESULT GOES TO `aiResult`
// --------------------------------------
// `aiResult` (Json) carries the ENTIRE MarkingResultV2 verbatim — it is the
// auditable source of truth (EU AI Act Art.12/15). The other columns are merely
// *queryable projections* of fields already inside that JSON; they exist so
// analytics/QA can filter without unpacking the blob. The V2 result excludes
// nothing sensitive beyond the essay itself, which lives in `essay_text` on the
// SAME row under the existing retention policy — so writing the whole object adds
// no new data-protection surface.
//
// WHY THE PRISMA CLIENT IS INJECTED
// ---------------------------------
// The client is a constructor-style parameter (a minimal structural interface,
// {@link EngineSubmissionWriter}) rather than a hard import of the app singleton.
// That keeps this module unit-testable OFFLINE: the test passes a mock writer and
// asserts the row SHAPE that WOULD be written, with no real database connection.
// The production caller passes the real `prisma` (its `markingSubmission`
// delegate satisfies the structural type).
// ──────────────────────────────────────────────────────────────────────────────

import type { MarkingResultV2 } from '../result-schema'

/**
 * The exact column set this adapter writes onto a `marking_submissions` row.
 *
 * WHY a dedicated shape (not Prisma's generated `MarkingSubmissionUpdateInput`):
 * pinning the written columns here makes the contract explicit and lets the
 * offline test assert the row SHAPE directly. Field names are the Prisma model
 * field names (camelCase) — Prisma maps them to the snake_case DB columns via the
 * `@map(...)` directives in schema.prisma, so callers never see snake_case.
 *
 * Every field is exactly what the corresponding column accepts:
 *   • `aiResult`            — the FULL MarkingResultV2 JSON (audit source of truth)
 *   • `aiConfidence`        — code-owned overall confidence (Float?)
 *   • `resultSchemaVersion` — the `schemaVersion` discriminator (Int?)
 *   • `packVersion`         — FK back to the exact Knowledge Pack (String?)
 *   • `needsHumanReview`    — §5.4 gate outcome (Boolean?)
 *   • `proposedOverallBand` — model's proposed band, audit-only (Float?)
 *   • `bandRange`           — self-consistency [min,max] tuple, or null (Json?)
 *   • `markingErrors`       — taxonomy-tagged errors projected for §4 analytics (Json)
 *   • `modelVersionId` / `promptVersionId` / `rubricVersionId` — provenance ids
 */
export interface EngineSubmissionRow {
  /** The entire validated MarkingResultV2, stored verbatim as the audit record. */
  readonly aiResult: MarkingResultV2
  /** Code-owned overall confidence in [0, 1]. */
  readonly aiConfidence: number
  /** The V2 schema discriminator (always 2 for this adapter). */
  readonly resultSchemaVersion: number
  /** FK back to the exact immutable Knowledge Pack, e.g. "ielts_writing_v2025.1". */
  readonly packVersion: string
  /** Code-owned §5.4 human-review gate outcome. */
  readonly needsHumanReview: boolean
  /**
   * The model's PROPOSED overall band, retained ONLY for the §5.1 disagreement
   * check + audit. Present only for band-scale (IELTS) overalls; null for
   * grade-scale (GCSE) overalls, which have no band figure.
   */
  readonly proposedOverallBand: number | null
  /**
   * The self-consistency range [min, max] when borderline marks diverge across
   * runs (OQ-4). Null when not borderline / single-run / grade-scale. Stored as a
   * plain 2-number array so the learner UI can render a range, not false precision.
   */
  readonly bandRange: readonly [number, number] | null
  /**
   * Taxonomy-tagged errors projected out of the result for §4 analytics. Stored as
   * an array so the column is always present; aggregation happens on the ENGINE
   * taxonomy (each error's `type` is a MarkingErrorType). Empty array when none.
   */
  readonly markingErrors: readonly MarkingResultV2['errors'][number][]
  /** Provenance: model version id, or null when not resolved. */
  readonly modelVersionId: string | null
  /** Provenance: prompt version id, or null when not resolved. */
  readonly promptVersionId: string | null
  /** Provenance: rubric/pack version id, or null when not resolved. */
  readonly rubricVersionId: string | null
}

/**
 * The minimal structural slice of the Prisma client this adapter needs.
 *
 * WHY structural, not the concrete `PrismaClient`: it is the injection seam that
 * lets the unit test run offline with a hand-written mock. The real
 * `prisma.markingSubmission` delegate satisfies this shape, so production callers
 * pass `prisma` directly. We model `update` (the normal path: the row was inserted
 * at submission time and is now being completed with a mark) — keeping the surface
 * tiny means the mock is trivial and the test asserts exactly the written `data`.
 *
 * `TResult` is left generic so the real Prisma return type (the updated row) flows
 * through unchanged; this module never inspects it.
 */
export interface EngineSubmissionWriter {
  readonly markingSubmission: {
    /**
     * Update an existing `marking_submissions` row, keyed by its `id`, with the
     * V2 mark columns. Mirrors Prisma's `update({ where, data })` signature for
     * just the fields this adapter sets.
     */
    update<TResult>(args: {
      readonly where: { readonly id: string }
      readonly data: EngineSubmissionRow
    }): Promise<TResult>
  }
}

/** Input identifying WHICH submission row to write the mark onto. */
export interface PersistEngineResultInput {
  /**
   * The `marking_submissions.id` of the row to update. The row is created at
   * submission time (status `'submitted'`) before marking runs; this adapter
   * fills in the AI mark, so it UPDATEs rather than inserts. Idempotent by nature:
   * re-running with the same id + result overwrites the same columns with the same
   * values (the one-retry policy OQ-3 therefore never duplicates rows).
   */
  readonly submissionId: string
}

/**
 * Map a validated {@link MarkingResultV2} onto the columns of its
 * `marking_submissions` row — the PURE half of the adapter.
 *
 * Exported separately from {@link persistEngineResult} so the offline unit test
 * can assert the produced row SHAPE without any client at all, and so other call
 * sites (e.g. a batch writer) can reuse the exact same mapping.
 *
 * Mapping rules (all derived from the result; nothing fabricated):
 *   • `aiResult`            ← the whole result (audit source of truth)
 *   • `aiConfidence`        ← result.overallConfidence
 *   • `resultSchemaVersion` ← result.schemaVersion
 *   • `packVersion`         ← result.packVersion
 *   • `needsHumanReview`    ← result.needsHumanReview
 *   • `markingErrors`       ← result.errors (projected for §4 analytics)
 *   • version ids           ← result.provenance.{model,prompt,rubric}VersionId
 *   • `proposedOverallBand` / `bandRange` ← only when overall.kind === 'band'
 *     (IELTS); both null for grade-scale (GCSE) overalls, which carry no band.
 */
export function mapEngineResultToRow(result: MarkingResultV2): EngineSubmissionRow {
  // Band-scale overalls (IELTS) carry the proposed band + optional divergence
  // range; grade-scale overalls (GCSE) do not, so these project to null there.
  const isBand = result.overall.kind === 'band'
  const proposedOverallBand = isBand ? result.overall.proposedOverallBand : null
  const bandRange =
    isBand && result.overall.bandRange !== undefined ? result.overall.bandRange : null

  return {
    aiResult: result,
    aiConfidence: result.overallConfidence,
    resultSchemaVersion: result.schemaVersion,
    packVersion: result.packVersion,
    needsHumanReview: result.needsHumanReview,
    proposedOverallBand,
    bandRange,
    // Spread into a fresh mutable array: the column is a Json array and we do not
    // want the readonly result.errors reference leaking into the write payload.
    markingErrors: [...result.errors],
    // Provenance ids are optional on the result; absent → null (the column is
    // nullable). The `?? null` makes "not resolved" explicit rather than undefined.
    modelVersionId: result.provenance.modelVersionId ?? null,
    promptVersionId: result.provenance.promptVersionId ?? null,
    rubricVersionId: result.provenance.rubricVersionId ?? null,
  }
}

/**
 * Persist a validated {@link MarkingResultV2} onto its `marking_submissions` row.
 *
 * Thin IO wrapper around {@link mapEngineResultToRow}: it builds the row and hands
 * it to the injected {@link EngineSubmissionWriter}. The client is injected so the
 * unit test runs OFFLINE against a mock and asserts the written row SHAPE — no real
 * DB. Production passes the app's `prisma` singleton, whose `markingSubmission`
 * delegate satisfies {@link EngineSubmissionWriter}.
 *
 * Idempotent where it matters: it UPDATEs an existing row keyed by `submissionId`
 * (the row was inserted at submission time). Re-running with the same id + result
 * writes the identical columns — safe under the OQ-3 one-retry policy.
 *
 * @returns whatever the writer's `update` resolves to (the updated row in prod).
 */
export async function persistEngineResult<TResult>(
  client: EngineSubmissionWriter,
  input: PersistEngineResultInput,
  result: MarkingResultV2,
): Promise<TResult> {
  const data = mapEngineResultToRow(result)
  return client.markingSubmission.update<TResult>({
    where: { id: input.submissionId },
    data,
  })
}
