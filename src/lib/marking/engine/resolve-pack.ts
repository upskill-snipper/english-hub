// ─── Seam A: the fail-closed pack resolver (doc 10 §1.2/§2.2 Step 3; doc 11 §2.4) ─
//
// WHY THIS FILE EXISTS — THE CORE FAIL-CLOSED GUARANTEE
// The knowledge-pack LOADER (`knowledge-pack/loader.ts`) is "verified-or-null": it
// returns `null` on every miss (unknown ref, unpublished/unverified pack, dirty
// sourcing). That soft-null is exactly the `getMarkScheme(...) ?? null` posture the
// grounded engine was built to REPLACE (doc 10 G3, §1.2; doc 11 §2.4 / Step 2). A
// bare null reaching the marker means NPE / skipped grounding / a mark with no
// rubric — strictly worse than a hard error (doc 10 §5 R1; doc 11 §5).
//
// `resolvePack` is the SEAM that converts that soft-null into a fail-CLOSED throw.
// It is the single pack entry point the engine façade calls (doc 10 §2.1 step 2);
// the façade must NEVER receive a bare null pack. The contract (doc 10 §2.2 → seam
// A; doc 11 §2.4):
//   • resolve by (area, taskType, level) → the HIGHEST PUBLISHED + VERIFIED version;
//   • `packPin` overrides version resolution (re-marks / reproducibility);
//   • a miss FAILS CLOSED: throws a typed {@link RoutingError} — NEVER returns null,
//     NEVER returns a marked result against a guessed/absent rubric.
//
// ERROR DISCIPLINE (doc 10 §4 Step 3 acceptance):
//   • no published pack matches (a, t, l)        → throw `NO_PACK`.
//   • `packPin` supplied but does not load/parse → throw `INVALID_METADATA`
//     (the caller asserted an exact pin that is wrong — distinct from "nothing
//     published for this route yet", which is NO_PACK).
//   • legacy GCSE `resolverKey` that getMarkScheme misses → throw `NO_PACK`
//     (converting the legacy soft-null to fail-closed at the engine boundary).
//
// PUBLISHED + VERIFIED GATE (doc 11 §2.4): a pack is only resolvable for the
// version-resolution path when `status === 'published'` AND `verified === true`.
// The in-repo IELTS WT2 stub is intentionally `status:'draft', verified:false`
// (doc 11 §3) — so it RESOLVES BY PIN (reproducibility / exact audit) but FAILS
// CLOSED on the (a,t,l) path until a human publishes it. This is the design intent
// at this build stage and proves the fail-closed seam works (doc 10 §4 Step 3/9).
//
// NO SDK / NO `server-only`: this module touches only the pure loader and the
// extracted `RoutingError`. It is safe in offline unit tests and never calls a model.
// ──────────────────────────────────────────────────────────────────────────────

import { getMarkScheme } from '../mark-schemes'
import { loadKnowledgePack, isPackUsable } from './knowledge-pack/loader'
import { RoutingError } from './routing-error'
import type {
  Area,
  KnowledgePack,
  KnowledgePackRef,
  PackResolveRequest,
  PackResolveResult,
  ResolvePackFn,
  TaskType,
} from './types'

// ════════════════════════════════════════════════════════════════════════════════
// §1 — (area, taskType) → candidate pack ref (the published-version catalogue)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * The known new-style ("pack", not legacy-GCSE) routes, mapping a normalised
 * (area, taskType) to the candidate pack `fullId` the loader is asked for.
 *
 * WHY a tiny catalogue and not a directory scan: the loader is the closed,
 * in-repo registry today (doc 11 §2.1 scaffold). When a route is present here the
 * resolver asks the loader for that exact `fullId`; the loader's own publish +
 * sourcing gates then decide whether it RESOLVES or fails closed. A route ABSENT
 * here is unknown → NO_PACK. Adding an area "plugs in" by adding an entry, not by
 * editing the resolve logic (doc 10 §2.3).
 *
 * The catalogue intentionally points at the CANONICAL fullId; "highest published
 * version" selection (doc 11 §2.4) is a single-version no-op while exactly one
 * version exists in-repo, and the published+verified gate below is what actually
 * admits or refuses it.
 */
const PACK_ROUTE_CATALOGUE: ReadonlyArray<{
  readonly area: Area
  readonly taskTypeAliases: ReadonlySet<string>
  readonly fullId: string
}> = [
  {
    area: 'ielts',
    // Accept the Router's canonical 'IELTS_Writing_Task2' plus tolerant spellings
    // (mirrors the Router's IELTS_TASK2_ALIASES) so a classified/explicit IELTS
    // decision resolves to the one IELTS Writing Task 2 pack.
    taskTypeAliases: new Set([
      'ielts_writing_task2',
      'ielts writing task 2',
      'writing_task2',
      'task2',
      'task 2',
    ]),
    fullId: 'ielts_writing_v2025.1',
  },
]

/** Normalise a free-text task type for tolerant matching (case/space-insensitive). */
function normaliseTaskType(taskType: TaskType): string {
  return taskType.trim().toLowerCase()
}

/**
 * Find the candidate pack `fullId` for an (area, taskType), or `null` when no
 * new-style route is registered. `null` here means "not a known pack route" — the
 * caller then either tries the legacy GCSE branch or fails closed with NO_PACK.
 */
function catalogueFullId(area: Area, taskType: TaskType): string | null {
  const tt = normaliseTaskType(taskType)
  for (const entry of PACK_ROUTE_CATALOGUE) {
    if (entry.area === area && entry.taskTypeAliases.has(tt)) return entry.fullId
  }
  return null
}

// ════════════════════════════════════════════════════════════════════════════════
// §2 — Ref derivation + publish/verified gate
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Build the provenance {@link KnowledgePackRef} from a resolved pack. `fullId` is
 * the single FK back to the immutable pack directory (doc 11 §2.3, §2.5).
 */
function refOf(pack: KnowledgePack): KnowledgePackRef {
  return {
    packId: pack.manifest.packId,
    version: pack.manifest.version,
    fullId: pack.manifest.fullId,
    board: pack.manifest.board,
  }
}

/**
 * Whether a loaded pack is admissible on the VERSION-RESOLUTION (non-pin) path:
 * it must be `status: 'published'` AND `verified: true` (doc 11 §2.4). A pin path
 * deliberately bypasses this gate (exact reproducibility — doc 11 §2.4), but it
 * still requires the pack to LOAD (sourcing-clean, parseable).
 */
function isPublishedAndVerified(pack: KnowledgePack): boolean {
  return pack.manifest.status === 'published' && pack.manifest.verified === true
}

// ════════════════════════════════════════════════════════════════════════════════
// §3 — The three resolve paths (pin · pack-route · legacy GCSE)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Pin path (doc 10 §2.2 mode 3; doc 11 §2.4): a `packPin` names an EXACT version.
 * It bypasses highest-version selection AND the published+verified gate (re-marks /
 * audit must resolve historical drafts), but the pin MUST still load — a pin that
 * does not parse/exist or whose sourcing is dirty is the caller asserting a wrong
 * exact key → `INVALID_METADATA` (doc 10 §4 Step 3 acceptance), never a silent null.
 */
function resolvePin(packPin: string): PackResolveResult {
  const trimmed = packPin.trim()
  if (trimmed === '') {
    throw new RoutingError(
      'INVALID_METADATA',
      'packPin was supplied but is empty/blank; supply a real pack version or omit it.',
      packPin,
    )
  }
  const pack = loadKnowledgePack(trimmed)
  if (pack === null || !isPackUsable(pack)) {
    throw new RoutingError(
      'INVALID_METADATA',
      `packPin "${trimmed}" does not resolve to a loadable knowledge pack.`,
      trimmed,
    )
  }
  return { kind: 'pack', ref: refOf(pack), pack }
}

/**
 * Legacy GCSE path (doc 10 §1.2): the GCSE schemes still resolve through the old
 * `getMarkScheme` lookup during migration — the SAME lookup the Router already
 * imports, so this introduces no new dependency. A miss converts the legacy
 * SOFT-NULL into a fail-CLOSED `NO_PACK` at the engine boundary (doc 10 G3 / §1.2 —
 * the single biggest behavioural change).
 */
function resolveLegacyGcse(resolverKey: string, questionId: string | undefined): PackResolveResult {
  const scheme = getMarkScheme(resolverKey)
  if (!scheme) {
    throw new RoutingError(
      'NO_PACK',
      `No GCSE mark scheme resolves for key "${resolverKey}"; refusing to mark ` +
        'against a missing rubric (fail-closed).',
      resolverKey,
    )
  }
  const ref: KnowledgePackRef = {
    packId: scheme.id,
    version: scheme.version ?? 'live',
    fullId: `${scheme.id}@${scheme.version ?? 'live'}`,
    board: 'gcse',
  }
  return { kind: 'legacy', ref, scheme, questionId }
}

// ════════════════════════════════════════════════════════════════════════════════
// §4 — The public resolver (the seam the façade wires in)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Resolve a {@link PackResolveRequest} to a {@link PackResolveResult}, FAILING
 * CLOSED on every miss (doc 10 §1.2/§2.2 Step 3; doc 11 §2.4). This is the single
 * pack entry point the façade calls after the Router (doc 10 §2.1 step 2); it NEVER
 * returns a bare null and NEVER yields a result against an absent/guessed rubric.
 *
 * Resolution order:
 *   1. `packPin`        → exact version, bypasses the publish gate (must load) or
 *                         `INVALID_METADATA`.
 *   2. legacy GCSE      → `resolverKey` via `getMarkScheme`, or `NO_PACK`.
 *   3. new-style route  → (area, taskType) → candidate `fullId` → load → must be
 *                         published+verified, else `NO_PACK`.
 *   4. anything else    → `NO_PACK` (no route / nothing published).
 *
 * @param req The resolve request built from the Router's {@link RoutingDecision}.
 * @returns The resolved pack (or legacy scheme) with a provenance ref.
 * @throws {RoutingError} `'NO_PACK'` (nothing published matches) or
 *   `'INVALID_METADATA'` (a supplied `packPin` is malformed / does not load).
 */
export async function resolvePack(req: PackResolveRequest): Promise<PackResolveResult> {
  // 1 — pin override (highest priority; exact reproducibility).
  if (req.packPin !== undefined) {
    return resolvePin(req.packPin)
  }

  // 2 — legacy GCSE explicit branch (un-migrated schemes).
  if (req.area === 'gcse' && req.resolverKey !== undefined) {
    return resolveLegacyGcse(req.resolverKey, undefined)
  }

  // 3 — new-style pack route: (area, taskType) → candidate fullId.
  const fullId = catalogueFullId(req.area, req.taskType)
  if (fullId !== null) {
    const pack = loadKnowledgePack(fullId)
    // Fail closed if it does not load (unknown/dirty) OR is not yet published+
    // verified. A draft/unverified pack (the in-repo IELTS stub) is refused on the
    // (a,t,l) path until a human publishes it — but remains pinnable for audit.
    if (pack === null || !isPackUsable(pack) || !isPublishedAndVerified(pack)) {
      throw new RoutingError(
        'NO_PACK',
        `No published, verified knowledge pack matches area "${req.area}", ` +
          `taskType "${req.taskType}" (candidate "${fullId}"); refusing to mark ` +
          'against an unpublished or absent rubric (fail-closed).',
        fullId,
      )
    }
    return { kind: 'pack', ref: refOf(pack), pack }
  }

  // 4 — no known route at all: cannot guess a rubric.
  throw new RoutingError(
    'NO_PACK',
    `No knowledge pack is registered for area "${req.area}", taskType ` +
      `"${req.taskType}"; refusing to mark against a guessed rubric (fail-closed).`,
    `${req.area}:${req.taskType}`,
  )
}

/**
 * The resolver as the seam contract type (doc 11 §2.4 `ResolvePackFn`). The façade
 * wires THIS in. A type-level assignment so a contract drift fails `tsc`, not at
 * runtime.
 */
export const resolvePackFn: ResolvePackFn = (req) => resolvePack(req)
