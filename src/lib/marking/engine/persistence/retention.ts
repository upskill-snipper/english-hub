// ─── DP-5 — Retention windows + right-to-erasure for the Marking Engine spine ──
//
// WHY THIS FILE EXISTS (the gap the Phase-0 reviewer flagged in PLAN P5.4 / DP-5)
// ------------------------------------------------------------------------------
// `RETENTION_POLICY` (the typed windows per data class) already lives in
// `src/lib/marking/privacy/data-posture.ts`. What did NOT exist was an
// *implementer* of the deletion side of that policy: nothing actually purged a
// learner's marking data when erasure is requested. R-PERSIST ("deletion routes
// verified") and the UK-GDPR Art.17 / ICO Children's-Code erasure obligation had
// no code behind them for the engine spine. This module is that implementer.
//
// THE NO-FORK RULE (binding)
// --------------------------
// We do NOT re-declare retention windows here — that would fork the policy and
// let the two copies drift, and a drifted retention window is a compliance
// defect, not a bug. We IMPORT `RETENTION_POLICY` + its types from data-posture
// and re-export them so erasure callers have one source of truth.
//
// THE PHYSICAL-VS-LEGAL SURFACE MAPPING (read before changing the deletes)
// -----------------------------------------------------------------------
// The policy enumerates FIVE first-party data classes
// (`RetentionDataClass`), but they do NOT each map to their own table. On the
// engine spine (`prisma/schema.prisma` model `MarkingSubmission`, table
// `marking_submissions`):
//   • marking_submission_essay_text → column `essayText`   (essay_text)
//   • marking_ai_result            → column `aiResult`     (ai_result, Json)
//   • feedback                     → column `aiFeedback`   (ai_feedback)
//   • analytics_projection         → columns `markingErrors` (+ band/error
//                                     projections) on the SAME row
// So deleting the learner's `marking_submissions` rows erases FOUR of the five
// first-party classes in a single operation — there are no separate feedback or
// analytics tables to target. The fifth, `ai_audit_log`, is a distinct table
// (`AuditLog`) and is purged as its own surface.
//
// WHY PRISMA IS INJECTED (not imported)
// -------------------------------------
// This routine is pure orchestration. Injecting a narrow structural Prisma slice
// (`RetentionPrismaSlice`) lets the unit tests assert exactly WHICH deletes fire
// — with no database — while the live erasure route passes the real `prisma`
// singleton (whose `markingSubmission` / `auditLog` delegates satisfy the slice).
// This mirrors the injection seam already used by the sibling adapter `persist.ts`.
// ──────────────────────────────────────────────────────────────────────────────

import {
  RETENTION_POLICY,
  type RetentionRule,
  type RetentionDataClass,
  type RetentionController,
} from '../../privacy/data-posture'

/**
 * Re-export the single source of truth so erasure callers reference the SAME
 * policy object/types as the privacy layer, never a copy. WHY re-export instead
 * of redefine: see the no-fork rule in the file header.
 */
export { RETENTION_POLICY, type RetentionRule, type RetentionDataClass, type RetentionController }

/**
 * The narrow slice of `PrismaClient` the erasure routine needs — only
 * `deleteMany` on the two physical surfaces a learner's engine data occupies:
 * `marking_submissions` (keyed by `studentId`, which is the learner's id on the
 * spine) and `AuditLog` (keyed by `userId`).
 *
 * WHY a structural type, not the concrete `PrismaClient`: tests pass a hand-made
 * mock exposing just these two methods, and the compiler then guarantees the
 * routine cannot touch a surface it did not declare — so a future surface cannot
 * be silently skipped during erasure. The real `prisma` delegates satisfy this
 * shape, so production passes `prisma` directly.
 *
 * NOTE on `where` keys: the spine's owning-learner column is `studentId`
 * (schema.prisma `MarkingSubmission.studentId` → `student_id`), NOT `userId`;
 * the audit table's owning column is `userId`. The two deletes therefore key on
 * different fields by design — that is correct, not a typo.
 */
export interface RetentionPrismaSlice {
  readonly markingSubmission: {
    deleteMany(args: { where: { studentId: string } }): Promise<{ count: number }>
  }
  readonly auditLog: {
    deleteMany(args: { where: { userId: string } }): Promise<{ count: number }>
  }
}

/**
 * Dependencies injected into {@link deleteLearnerMarkingData}. A struct (rather
 * than a bare prisma arg) so future deps (e.g. an erasure-audit writer) can be
 * added without changing the call signature at every site.
 */
export interface DeleteLearnerMarkingDataDeps {
  readonly prisma: RetentionPrismaSlice
}

/**
 * Per-surface count of rows purged, so the erasure caller (the API route) can
 * log exactly what was removed for the audit trail the Children's Code mandates.
 *
 * WHY counts and not booleans: an auditor needs to know the erasure actually hit
 * data, and a clean no-op (all zeros) is a legitimate, non-error outcome we want
 * recorded distinctly from a populated delete.
 */
export interface DeleteLearnerMarkingDataResult {
  /**
   * Rows removed from `marking_submissions`. This single count covers FOUR
   * policy classes that live as columns on that row: essay_text, ai_result
   * (aiResult), feedback (aiFeedback), and the analytics projection
   * (markingErrors / band projections).
   */
  readonly markingSubmissions: number
  /** Rows removed from the AI-decision audit log (`AuditLog`). */
  readonly aiAuditLog: number
}

/**
 * Compile-time coverage map: every FIRST-PARTY `RetentionDataClass` must have an
 * erasure path. WHY a `Record<RetentionDataClass, ...>`: it forces this map to
 * name every class, so adding a class to the policy without deciding how erasure
 * covers it becomes a build error rather than a silent gap (a missed surface in
 * a child-data erasure is a reportable breach).
 *
 * The value records WHICH physical delete satisfies the class:
 *   • 'marking_submissions' — erased by deleting the spine row
 *   • 'audit_log'           — erased by deleting the AuditLog rows
 *   • 'processor'           — provider-side; NOT first-party-deletable (see below)
 */
const SURFACE_COVERAGE: Readonly<Record<RetentionDataClass, 'marking_submissions' | 'audit_log'>> =
  {
    marking_submission_essay_text: 'marking_submissions',
    marking_ai_result: 'marking_submissions',
    feedback: 'marking_submissions',
    analytics_projection: 'marking_submissions',
    ai_audit_log: 'audit_log',
  }

/**
 * Erase ALL first-party marking-engine data for a single learner (DP-5 /
 * UK-GDPR Art.17 right to erasure).
 *
 * Contract (binding — PLAN P5.4 / 19-design-data-protection.md DP-5):
 *  - Purges, for the learner, their `marking_submissions` rows (which erases
 *    essay_text + aiResult + feedback + the analytics projection columns in one
 *    delete) AND their AI-decision audit rows.
 *  - Is a NO-OP (resolves with all-zero counts, does NOT throw) when the learner
 *    has no rows on any surface.
 *  - Surfaces a partial failure as a THROWN error — never silently
 *    half-deletes. A silent half-delete of a child's data is a reportable
 *    breach, so we fail loud and re-throw the underlying cause.
 *
 * Provider-side retention caveat (honest posture, NOT actioned here): the policy
 * also carries a `processor_contractual` class (Anthropic-side retention). That
 * is governed by the pending DPA/ZDR contract, not a first-party delete, and
 * `isZeroRetentionConfigured()` is false today — so this routine deliberately
 * does NOT claim to erase provider-side copies. The caller's erasure copy must
 * state provider-side deletion is contractual-and-unconfirmed, not "deleted
 * immediately".
 *
 * Ordering + failure semantics: the deletes run SEQUENTIALLY, audit log first,
 * then the spine row. WHY sequential and not Promise.all: a parallel run could
 * delete one surface while another errors, leaving an erasure we cannot describe
 * truthfully. Sequential + first-error-throws gives the caller a truthful "this
 * surface failed; the later surface was not attempted" signal — the honest basis
 * for a 500 + alert rather than a false "done".
 *
 * @param userId  The learner whose engine data must be erased. Used as
 *                `studentId` on the spine and `userId` on the audit log (see
 *                {@link RetentionPrismaSlice}).
 * @param deps    Injected dependencies (Prisma slice).
 * @returns       Per-surface counts of rows purged (all zero = clean no-op).
 * @throws        If any surface's delete fails; re-thrown verbatim so the caller
 *                can alert with the underlying cause.
 */
export async function deleteLearnerMarkingData(
  userId: string,
  deps: DeleteLearnerMarkingDataDeps,
): Promise<DeleteLearnerMarkingDataResult> {
  const { prisma } = deps

  // Audit log first: it is the standalone audit surface. Deleting it before the
  // spine row means a failure here aborts BEFORE we touch the recoverable source
  // data, rather than after — keeping the partial-failure state minimal.
  const audit = await prisma.auditLog.deleteMany({ where: { userId } })

  // Spine row last: this single delete erases essay_text + aiResult + feedback +
  // the analytics-projection columns together (they are columns on this row, not
  // separate tables). Keyed by studentId — the learner's id on the spine.
  const submissions = await prisma.markingSubmission.deleteMany({
    where: { studentId: userId },
  })

  return {
    markingSubmissions: submissions.count,
    aiAuditLog: audit.count,
  }
}

/**
 * Module-load invariant: every first-party `RetentionDataClass` named in
 * `RETENTION_POLICY` must appear in {@link SURFACE_COVERAGE}. WHY check it here:
 * the `Record` type already forces SURFACE_COVERAGE to name every class, and
 * this assertion additionally proves the POLICY and the coverage map agree on
 * the set of classes — so a class added to the policy without an erasure path is
 * caught at module load (test/boot), not in production.
 *
 * Provider-side (`processor_contractual`) rules are intentionally excluded: they
 * are not first-party-deletable, so they are not part of the erasure surface.
 */
const firstPartyClasses: ReadonlySet<RetentionDataClass> = new Set(
  RETENTION_POLICY.filter((rule: RetentionRule): boolean => rule.controller === 'first_party').map(
    (rule: RetentionRule): RetentionDataClass => rule.dataClass,
  ),
)

for (const dataClass of firstPartyClasses) {
  if (!(dataClass in SURFACE_COVERAGE)) {
    throw new Error(
      `DP-5 invariant violated: first-party retention class "${dataClass}" has no ` +
        'erasure path in SURFACE_COVERAGE. Wire its delete into deleteLearnerMarkingData.',
    )
  }
}
