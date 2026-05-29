// ─── G-LIVE release gate for the IELTS Writing Task 2 route ───────────────────
//
// WHY THIS MODULE IS SEPARATE FROM route.ts
// Next.js App Router forbids a `route.ts` from exporting anything other than the
// HTTP method handlers (GET/POST/…) and the known segment-config keys (dynamic,
// runtime, maxDuration, revalidate, …). The build's generated route type-checker
// (`.next/types/.../route.ts`) FAILS THE WHOLE BUILD on ANY other export — e.g.
// "loadCurrentCalibrationBaseline is not a valid Route export field". These G-LIVE
// helpers must be importable by the offline gate test, so they live HERE (a plain
// module, not a route convention file) and the route imports `assertGLive` from it.
//
// THE TWO-LOCK G-LIVE GATE (both must open before a learner is ever marked)
//   (a) A feature flag (env `IELTS_WRITING_TASK2_MARKING_ENABLED`, default OFF) —
//       an ops kill-switch; the route is dark even if a green baseline exists.
//   (b) A runtime calibration assertion: `assertCalibrationGreen(baseline)`
//       (src/lib/marking/engine/calibration/gate.ts). FAIL-CLOSED — with no
//       promoted green baseline it THROWS, so the route answers 503 "not yet
//       calibrated". This is the G-LIVE enforcement living IN the request path:
//       the engine cannot reach a learner until a green baseline is promoted
//       (DECISIONS-log OQ-8: launch on an honest, calibrated posture).
// ──────────────────────────────────────────────────────────────────────────────

import {
  assertCalibrationGreen,
  CalibrationGateError,
  type CalibrationBaseline,
} from '@/lib/marking/engine/calibration/gate'

// ─── Feature flag (env, default OFF) ──────────────────────────────────────────

/**
 * Env name of the G-LIVE feature flag. Lives in one place so the route and its
 * test agree on the exact key. OFF unless the value is the literal string `'true'`
 * — any other value (unset, `'1'`, `'false'`, typo) keeps the route dark, which is
 * the safe default for a route that must not reach learners pre-launch.
 */
export const IELTS_WT2_FLAG_ENV = 'IELTS_WRITING_TASK2_MARKING_ENABLED'

/**
 * Whether the G-LIVE feature flag is ON. Strict equality to `'true'` so the flag
 * fails CLOSED for every other value — flipping it on is a deliberate, exact act,
 * never an accident of a truthy-ish env value.
 */
function isFeatureFlagEnabled(): boolean {
  return process.env[IELTS_WT2_FLAG_ENV] === 'true'
}

// ─── Calibration baseline lookup (the G-LIVE gate's input) ────────────────────

/**
 * Load the currently-promoted green calibration baseline, or `null` when none has
 * been promoted yet.
 *
 * WHY this returns `null` today: baseline storage (`calibration_runs`) is a later
 * migration-lane concern (doc 17 §schema) — no baseline has been promoted, so this
 * is the honest pre-G-LIVE state. A `null` baseline means {@link assertGLive}
 * cannot prove the build is safe, so the route answers 503. When the calibration
 * pipeline promotes a baseline, this function is the single seam that begins
 * returning it; the request-path gate logic here does not change.
 */
export async function loadCurrentCalibrationBaseline(): Promise<CalibrationBaseline | null> {
  // No promoted baseline exists pre-G-LIVE (doc 17 §schema). Fail-closed: the
  // absence of a baseline is treated as "not calibrated", not as "allow".
  return null
}

/**
 * The baseline loader the handler actually calls. Held in a module-level variable
 * (defaulting to the real {@link loadCurrentCalibrationBaseline}) so a test can
 * swap in a stub that returns a promoted green baseline, exercising the green path
 * WITHOUT relying on spying an internal call site. Production never reassigns it.
 */
let activeCalibrationBaselineLoader: () => Promise<CalibrationBaseline | null> =
  loadCurrentCalibrationBaseline

/**
 * TEST-ONLY seam: override the baseline loader the handler uses. Pass `null` to
 * restore the production default. Exported so the offline test can simulate a
 * promoted green baseline; never called by production code.
 */
export function __setCalibrationBaselineLoader(
  loader: (() => Promise<CalibrationBaseline | null>) | null,
): void {
  activeCalibrationBaselineLoader = loader ?? loadCurrentCalibrationBaseline
}

/**
 * Result of the two-lock G-LIVE check, surfaced to the handler so it can answer
 * with the right status without re-deriving the rule.
 *
 *   • `'allowed'`        — flag ON AND a promoted baseline passed the gate.
 *   • `'feature_off'`    — flag OFF (route is dark) → 503.
 *   • `'not_calibrated'` — flag ON but no green baseline (gate threw / null) → 503.
 */
export type GLiveStatus = 'allowed' | 'feature_off' | 'not_calibrated'

/**
 * Enforce the G-LIVE release gate in the request path (BOTH locks):
 *   (a) the env feature flag is ON, AND
 *   (b) a promoted calibration baseline passes {@link assertCalibrationGreen}.
 *
 * Fail-closed throughout: a missing flag, a missing baseline, or a thrown
 * {@link CalibrationGateError} all deny the request. The gate's throw is its
 * negative answer (doc 17 §5) — we catch it and translate to `'not_calibrated'`
 * so the route returns a clean 503 rather than a 500.
 *
 * Exported for the route's offline test (it can stub the baseline loader and the
 * flag to assert each branch without a model call).
 */
export async function assertGLive(
  loadBaseline: () => Promise<CalibrationBaseline | null> = activeCalibrationBaselineLoader,
): Promise<GLiveStatus> {
  // Lock (a): the ops kill-switch. OFF ⇒ the route is dark regardless of data.
  if (!isFeatureFlagEnabled()) {
    return 'feature_off'
  }

  // Lock (b): the calibration gate. No baseline ⇒ cannot prove safety ⇒ deny.
  const baseline = await loadBaseline()
  if (baseline === null) {
    return 'not_calibrated'
  }

  try {
    // FAIL-CLOSED: assertCalibrationGreen returns void on a green baseline and
    // THROWS CalibrationGateError otherwise. Either way no learner-facing mark
    // happens unless this returns cleanly.
    assertCalibrationGreen(baseline)
    return 'allowed'
  } catch (err) {
    if (err instanceof CalibrationGateError) {
      // A measured-but-not-green baseline: the gate's negative answer. Treat as
      // "not yet calibrated" (503), never as a 500 — this is an expected outcome.
      return 'not_calibrated'
    }
    // Any other error is genuinely unexpected; let the handler map it to a 500.
    throw err
  }
}
