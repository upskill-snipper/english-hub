// ─── Synthetic-essay generator (Track C — design doc 23 §4) ───────────────────
//
// WHY THIS FILE EXISTS
// --------------------
// The paid-marker calibration drive (doc 23) is gated on a *supply* of essays to
// mark. Real student IELTS essays carry consent, copyright and child-data weight
// (doc 23 §6, doc 19), so the *bootstrap* calibration corpus is built from
// SYNTHETIC essays instead: generated text with no data subject, copyright-clean
// by construction, that can be produced fast and cleanly and then blended with
// consented real essays over time (doc 23 §4 "Blend plan").
//
// THE ONE INVARIANT THIS MODULE PROTECTS (doc 23 §4 "Critical guardrail")
// ----------------------------------------------------------------------
// A synthetic essay's *intended* band is a GENERATION TARGET, never a human
// reference mark. The generator produces *essays only*; humans produce *marks*
// through the drive. We must NEVER calibrate the AI marker against another AI's
// opinion — that would be circular and would bake the generating model's bias
// into the marker's "ground truth". So:
//   • the target band is recorded ONLY inside {@link SyntheticSpec.targetBand};
//   • the {@link SyntheticEssay} carries NO band/score/criterion field at all —
//     there is structurally no place to smuggle the AI's opinion as a mark;
//   • everything is tagged `dataSource: 'synthetic'` end-to-end so analytics,
//     calibration reports and any published statistic can always separate
//     synthetic-bootstrap from real-learner evidence (doc 23 §8 honesty rule).
//
// OTHER GUARDRAILS
// ----------------
//   • The model call is INJECTABLE ({@link SyntheticEssayDeps.generate}) so the
//     unit tests run fully offline with a stub — the live path wires in a real
//     {@link MARKING_MODELS.escalation} (strongest Opus tier) call via
//     `getAnthropicClient`, but this module never imports the SDK itself.
//   • Diversity controls (topic / length / L1-transfer / error mix) are threaded
//     through the spec so a batch can deliberately span the band range and the
//     20-value error taxonomy (doc 23 §4 "Diversity controls").
//   • Error-profile keys are constrained to the canonical {@link MarkingErrorType}
//     taxonomy — the generator can never fork it (it imports the single source).
//   • NO student PII is involved: synthetic = no data subject (doc 23 §6), so
//     there is no anonymisation step and `consentRef` is intentionally absent.
//
// This module owns ONLY the *essay* side; turning marker output into reference
// truth is the separate promotion step (doc 23 §2/§5 step 8) and is out of scope.

import { MARKING_MODELS, assertNotHaiku, type MarkingModelTier } from '../../models'
import {
  MARKING_ERROR_TYPES,
  isMarkingErrorType,
  type MarkingErrorType,
} from '../../error-taxonomy'

// ─── Data-source tagging (doc 23 §3/§4/§8) ────────────────────────────────────

/**
 * Provenance flag carried end-to-end through the calibration pipeline. Synthetic
 * essays are bootstrap supply; real essays are consented + anonymised learner
 * work. The flag is what makes the "synthetic vs real" honesty rule (doc 23 §8)
 * impossible to get wrong: every metric, dashboard and published statistic must
 * state which it derives from.
 */
export const DATA_SOURCES = ['synthetic', 'real'] as const

/** One of the two provenance values. See {@link DATA_SOURCES}. */
export type DataSource = (typeof DATA_SOURCES)[number]

// ─── L1-transfer profiles (doc 23 §4 diversity; EAL audience incl. Gulf Arabic)─

/**
 * First-language background whose transfer errors the synthetic essay should
 * exhibit. `gulf-arabic` is called out explicitly in doc 23 §4 because it
 * matches the EAL audience the engine targets; `none` produces an essay without
 * a deliberately modelled L1 fingerprint (e.g. a native-like control essay).
 *
 * This is a GENERATION hint only — it shapes the prompt, never the (absent) mark.
 */
export const L1_TRANSFER_PROFILES = [
  'none',
  'gulf-arabic',
  'mandarin',
  'hindi-urdu',
  'spanish',
  'french',
] as const

/** One of the modelled L1-transfer fingerprints. See {@link L1_TRANSFER_PROFILES}. */
export type L1TransferProfile = (typeof L1_TRANSFER_PROFILES)[number]

// ─── Length bands (doc 23 §4 diversity) ───────────────────────────────────────
//
// IELTS WT2 has a 250-word minimum; varying length is a diversity lever because
// under-length and padded essays sit differently on the band scale. These are
// generation targets for the prompt, not assessed word counts.

/** Approximate length target for the generated essay (a prompt hint, not a mark). */
export const SYNTHETIC_LENGTHS = ['short', 'medium', 'long'] as const

/** One of the coarse length targets. See {@link SYNTHETIC_LENGTHS}. */
export type SyntheticLength = (typeof SYNTHETIC_LENGTHS)[number]

// ─── Target band (IELTS scale) ────────────────────────────────────────────────

/**
 * The IELTS overall band the essay is *written toward*. Doc 23 §3 wants the
 * baseline to span bands 4–9; 4.5 etc. half-bands are valid IELTS reporting
 * values, so we allow the standard half-band grid. This is the GENERATION TARGET
 * only (doc 23 §4) — it is recorded on the spec and NOWHERE on the essay output.
 */
export type TargetBand = 4 | 4.5 | 5 | 5.5 | 6 | 6.5 | 7 | 7.5 | 8 | 8.5 | 9

/** The valid half-band grid, for runtime validation of {@link TargetBand}. */
export const TARGET_BANDS: readonly TargetBand[] = [
  4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,
] as const

const TARGET_BAND_SET: ReadonlySet<number> = new Set<number>(TARGET_BANDS)

// ─── The spec: how a single synthetic essay should be generated ───────────────

/**
 * A deliberate error profile: how many errors of each taxonomy type the essay
 * should exhibit, keyed STRICTLY on the canonical {@link MarkingErrorType}. A
 * partial map — only the types the spec wants present need appear. Counts are a
 * *generation intent* (e.g. "3–4 article errors", doc 23 §4); they are NOT a
 * marker's tally and never become part of the human reference.
 *
 * Typed as a partial record so the taxonomy cannot be forked here — every key
 * must be one of the 20 canonical strings.
 */
export type ErrorProfile = Partial<Record<MarkingErrorType, number>>

/**
 * The full instruction set for generating ONE synthetic IELTS WT2 essay. This is
 * exactly what gets persisted as `CalibrationScript.syntheticSpec` (doc 23 §3) —
 * a record of HOW the essay was generated, so a reviewer can later see the
 * intended band + error mix without ever treating it as a mark.
 */
export interface SyntheticSpec {
  /**
   * The IELTS overall band the essay is written toward. GENERATION TARGET ONLY
   * (doc 23 §4) — never a human reference mark.
   */
  readonly targetBand: TargetBand
  /** The deliberate per-taxonomy error mix to exhibit. See {@link ErrorProfile}. */
  readonly errorProfile: ErrorProfile
  /** Essay topic / prompt theme (a diversity axis, doc 23 §4). */
  readonly topic: string
  /** Approximate length target (a diversity axis). See {@link SyntheticLength}. */
  readonly length: SyntheticLength
  /** Modelled L1-transfer fingerprint (a diversity axis). See {@link L1TransferProfile}. */
  readonly l1Transfer: L1TransferProfile
  /**
   * The fixed task type this essay is for. Defaults to IELTS WT2 — the only task
   * doc 23 §3 scopes the synthetic bootstrap to — but kept explicit so the spec
   * is self-describing in persistence.
   */
  readonly taskType: string
}

/** The task type the doc-23 synthetic bootstrap is scoped to (doc 23 §3/§5). */
export const DEFAULT_SYNTHETIC_TASK_TYPE = 'IELTS_Writing_Task2'

// ─── The output: a tagged synthetic essay, ready for doc-23 ingestion ─────────

/**
 * A generated synthetic IELTS WT2 essay, shaped to drop straight into the doc-23
 * ingestion as a `CalibrationScript` (`dataSource:'synthetic'`, `syntheticSpec`,
 * `essayText`, `taskPrompt`; `humanReference` stays null until paid markers fill
 * it via the drive — doc 23 §3).
 *
 * DELIBERATELY HAS NO BAND/SCORE FIELD. The only place the intended band lives is
 * `syntheticSpec.targetBand`. There is structurally nowhere to record the
 * generating model's opinion as a mark — enforcing doc 23 §4's central guardrail
 * at the type level.
 */
export interface SyntheticEssay {
  /** The generated essay body. */
  readonly essayText: string
  /** The WT2 task prompt the essay responds to. */
  readonly taskPrompt: string
  /** How this essay was generated (the intended band + error mix live here only). */
  readonly syntheticSpec: SyntheticSpec
  /**
   * Provenance tag, ALWAYS `'synthetic'`. A literal type — the value cannot be
   * widened to `'real'`, so a synthetic essay can never be mislabelled as
   * learner evidence (doc 23 §8).
   */
  readonly dataSource: 'synthetic'
  /**
   * The model tier used to generate the essay, recorded for provenance/audit.
   * Always the strongest {@link MARKING_MODELS.escalation} tier (doc 23 §4
   * "strongest model"). This is the *generator's* model id — it has no bearing on
   * the (human) reference mark.
   */
  readonly generatorModel: string
}

// ─── Injectable model call (offline-testable guardrail, doc 23 §4) ────────────

/**
 * The single inference the generator makes: given a fully-rendered prompt and the
 * resolved (escalation-tier) model id, return the raw essay text. Kept as a
 * narrow injectable function so:
 *   • tests stub it and run fully offline (no SDK, no network, no key);
 *   • the live wiring routes through `getAnthropicClient()` (plan DP-7 — the
 *     no-training / data-minimisation posture is inherited) WITHOUT this module
 *     ever importing the SDK.
 *
 * @param args.prompt The fully-rendered generation prompt.
 * @param args.model  The resolved model id (the escalation tier id).
 * @returns The generated essay text.
 */
export type GenerateFn = (args: {
  readonly prompt: string
  readonly model: string
}) => Promise<string>

/** Injected dependencies for {@link generateSyntheticEssay}. */
export interface SyntheticEssayDeps {
  /** The injectable model call (stubbed in tests, real SDK call in prod). */
  readonly generate: GenerateFn
  /**
   * Optional override of the model tier. Defaults to `'escalation'` (the
   * strongest tier, doc 23 §4). Exposed mainly so a test can assert the default
   * without reaching into module internals; production should leave it unset.
   */
  readonly modelTier?: MarkingModelTier
}

// ─── Validation ───────────────────────────────────────────────────────────────

/** Thrown when a {@link SyntheticSpec} is malformed (fail fast, before any call). */
export class SyntheticSpecError extends Error {
  public constructor(message: string) {
    super(message)
    this.name = 'SyntheticSpecError'
  }
}

/**
 * Validate a spec at the trust boundary: target band on the half-band grid, every
 * error-profile key a canonical taxonomy string with a non-negative integer
 * count, and a non-empty topic. Pure; no I/O. Keeps an invalid generation request
 * from ever reaching the (paid) model call.
 *
 * @throws {SyntheticSpecError} on any violation.
 */
export function validateSyntheticSpec(spec: SyntheticSpec): void {
  if (!TARGET_BAND_SET.has(spec.targetBand)) {
    throw new SyntheticSpecError(
      `targetBand ${String(spec.targetBand)} is not on the IELTS half-band grid (4–9).`,
    )
  }
  if (typeof spec.topic !== 'string' || spec.topic.trim() === '') {
    throw new SyntheticSpecError('topic must be a non-empty string.')
  }
  for (const [type, count] of Object.entries(spec.errorProfile)) {
    if (!isMarkingErrorType(type)) {
      throw new SyntheticSpecError(
        `errorProfile key "${type}" is not a canonical MarkingErrorType (do not fork the taxonomy).`,
      )
    }
    if (typeof count !== 'number' || !Number.isInteger(count) || count < 0) {
      throw new SyntheticSpecError(
        `errorProfile["${type}"] must be a non-negative integer count, got ${String(count)}.`,
      )
    }
  }
}

// ─── Prompt construction (pure, deterministic) ────────────────────────────────

/**
 * Render the generation prompt for the strongest model from a validated spec.
 * Pure and exported so a test can assert the diversity params (band, error mix,
 * topic, length, L1) are all threaded into the instruction the model receives —
 * the doc-23 §4 "diversity params threaded" requirement.
 *
 * The prompt is explicit that the model is producing an ESSAY ONLY and that its
 * intended band is a generation target, not a self-assessed mark (doc 23 §4) —
 * reinforcing the guardrail at the instruction level as well as the type level.
 */
export function buildSyntheticPrompt(spec: SyntheticSpec): string {
  const errorLines = Object.entries(spec.errorProfile)
    .filter(([type]) => isMarkingErrorType(type))
    .map(([type, count]) => `  - ${type}: approximately ${String(count)} instance(s)`)
  const errorBlock =
    errorLines.length > 0
      ? errorLines.join('\n')
      : '  - (no deliberately seeded errors; write at the natural quality for the target band)'

  const l1Line =
    spec.l1Transfer === 'none'
      ? 'Do not model any specific first-language transfer fingerprint.'
      : `Exhibit error patterns typical of an ${spec.l1Transfer} first-language writer (L1 transfer).`

  return [
    'You are generating a SYNTHETIC IELTS Writing Task 2 essay for an offline',
    'calibration corpus. You are producing an ESSAY ONLY. Do NOT output any band',
    'score, mark, or self-assessment: the target band below is a GENERATION TARGET',
    'that controls the quality you write to, NOT a mark. The essay will be marked',
    'independently by trained human examiners.',
    '',
    `Task type: ${spec.taskType}`,
    `Topic / theme: ${spec.topic}`,
    `Target overall IELTS band to write toward: ${String(spec.targetBand)}`,
    `Approximate length: ${spec.length}`,
    l1Line,
    '',
    'Deliberately exhibit the following error mix (so the corpus spans the error',
    'taxonomy). Make the errors natural for the band, not mechanical:',
    errorBlock,
    '',
    'First write a realistic Task 2 prompt for the topic, then the essay. Separate',
    'them with a line containing only "---ESSAY---". Output nothing else.',
  ].join('\n')
}

/**
 * Split the model's raw output into `{ taskPrompt, essayText }` on the
 * `---ESSAY---` delimiter the prompt requests. If the model omits the delimiter
 * we keep the whole text as the essay and leave the prompt empty for the caller
 * to backfill, rather than throwing — a missing delimiter is a quality issue for
 * the drive's QA step, not a hard generation failure.
 */
function splitGeneratedOutput(raw: string): { taskPrompt: string; essayText: string } {
  const marker = '---ESSAY---'
  const idx = raw.indexOf(marker)
  if (idx === -1) {
    return { taskPrompt: '', essayText: raw.trim() }
  }
  return {
    taskPrompt: raw.slice(0, idx).trim(),
    essayText: raw.slice(idx + marker.length).trim(),
  }
}

// ─── The generator ────────────────────────────────────────────────────────────

/**
 * Generate ONE synthetic IELTS WT2 essay to a target band + error profile, tagged
 * `dataSource:'synthetic'` and ready for doc-23 ingestion as a `CalibrationScript`.
 *
 * Resolves the model id from {@link MARKING_MODELS} (default `escalation`, the
 * strongest Opus tier — doc 23 §4) and guards it with {@link assertNotHaiku}
 * (IELTS §1: never use a Haiku-class model for accuracy-critical work). The
 * actual inference is delegated to the injected {@link SyntheticEssayDeps.generate}
 * so this module never touches the SDK and the tests run offline.
 *
 * CENTRAL GUARDRAIL (doc 23 §4): `spec.targetBand` is the ONLY place the intended
 * band is recorded; the returned {@link SyntheticEssay} has no mark field. The
 * generating model's opinion is never promoted to a reference mark — humans mark
 * synthetic essays through the drive.
 *
 * @param spec The validated generation instruction (see {@link SyntheticSpec}).
 * @param deps Injected model call (+ optional tier override).
 * @returns A tagged {@link SyntheticEssay}.
 * @throws {SyntheticSpecError} if the spec is malformed.
 * @throws {Error} if the resolved model id is empty or Haiku-class.
 */
export async function generateSyntheticEssay(
  spec: SyntheticSpec,
  deps: SyntheticEssayDeps,
): Promise<SyntheticEssay> {
  validateSyntheticSpec(spec)

  const tier: MarkingModelTier = deps.modelTier ?? 'escalation'
  const model = MARKING_MODELS[tier]
  // Accuracy-critical generation must not run on a Haiku-class id (IELTS §1).
  assertNotHaiku(model)

  const prompt = buildSyntheticPrompt(spec)
  const raw = await deps.generate({ prompt, model })
  const { taskPrompt, essayText } = splitGeneratedOutput(raw)

  return {
    essayText,
    taskPrompt,
    syntheticSpec: spec,
    dataSource: 'synthetic',
    generatorModel: model,
  }
}

// ─── Diversity helper (doc 23 §4 "Diversity controls across topic/length/L1") ─

/**
 * The full diversity surface a batch can vary across, surfaced as one object so a
 * batch planner (and the tests) can see every axis in one place. The error
 * taxonomy is referenced (not copied) so the diversity surface can never list a
 * non-canonical type.
 */
export const SYNTHETIC_DIVERSITY_AXES = {
  bands: TARGET_BANDS,
  lengths: SYNTHETIC_LENGTHS,
  l1Transfers: L1_TRANSFER_PROFILES,
  /** The canonical 20 taxonomy types an error profile may draw from. */
  errorTypes: MARKING_ERROR_TYPES,
} as const
