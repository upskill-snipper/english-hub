/**
 * IELTS Academic Writing Task 2 — forced-tool-use assessment schema.
 *
 * WHY THIS MODULE EXISTS
 * The grounded Marker calls Claude with
 * `tool_choice: { type: "tool", name: "submit_ielts_writing_assessment" }` so the
 * model is *forced* to return its assessment as one schema-validated tool-use
 * block instead of free-form prose (spec §4; doc 13 §3.1). Defining the tool
 * here keeps the wire contract — exactly what the model must return — in a
 * single place, reconciled with the engine's shared error taxonomy and its
 * canonical result type.
 *
 * SOURCES OF TRUTH (read before editing — change all together or not at all):
 *   • business-docs/architecture/marking-engine/01-ielts-writing-task2-spec.md §4
 *     — the authoritative tool JSON: property names, the top-level `required`
 *       set, the full criterion-name enum, integer band 0-9, the error-type
 *       enum, severity enum, integrity_flags as an OBJECT of booleans, and
 *       borderline_flags as a string array.
 *   • business-docs/architecture/marking-engine/13-design-result-schema-and-taxonomy.md
 *     §2.1 / §2.5 / §3.1 / §3.2 — the TS const + `IeltsToolPayload` this file
 *       realises, and the rule that `errors[].type` is sourced from the shared
 *       taxonomy constant rather than re-listed inline.
 *
 * ANTI-DRIFT GUARANTEE
 * The `errors[].type` enum is **generated from** `MARKING_ERROR_TYPES`
 * (`../error-taxonomy`) — never re-listed inline. If the taxonomy changes, the
 * tool schema follows automatically, so the forced-tool enum and the
 * `MarkingErrorType` union (and therefore the §4 analytics key space) can never
 * silently diverge (doc 13 R1). The `errors[].severity` enum is likewise spread
 * from `MARKING_ERROR_SEVERITIES`.
 *
 * NOT ENFORCEABLE AT THE SCHEMA LAYER (the Validator closes both — doc 13 §3.1):
 *   1. `minItems`/`maxItems: 4` caps the criterion *count* but cannot force the
 *      four to be distinct or ordered [TR, CC, LR, GRA]. The validator asserts
 *      and reorders.
 *   2. JSON Schema cannot verify an evidence/error `quote` is verbatim in the
 *      essay. The validator does the whitespace-normalised substring check
 *      (spec §5.2) and sets the canonical `verified` flag.
 *
 * MODEL RESOLUTION
 * This module contains NO model id. The callable model string is resolved at
 * call time from the engine's single source of truth,
 * `src/lib/marking/engine/models.ts` (`MARKING_MODELS.marker`), which in turn
 * defaults to `ANTHROPIC_MODEL` in `src/lib/anthropic-client.ts`. Never hardcode
 * a model id here.
 *
 * NOTE ON IMPORT NAMES
 * Per doc 13 §2.1/§2.8 the sibling Phase-1 files export the shared taxonomy as
 * `MARKING_ERROR_TYPES` / `MarkingErrorType` and the canonical result type. This
 * file imports those canonical names; if the result type is exported under a
 * different alias (e.g. `GroundedMarkingResult` vs `MarkingResultV2`), reconcile
 * the single import line below rather than redefining the type here.
 */
import type Anthropic from '@anthropic-ai/sdk'
import {
  MARKING_ERROR_TYPES,
  MARKING_ERROR_SEVERITIES,
  type MarkingErrorType,
  type MarkingErrorSeverity,
} from '../error-taxonomy'
import type { GroundedMarkingResult, IntegrityFlags } from '../result-schema'

/**
 * The four IELTS Writing Task 2 criterion names, EXACTLY as the model returns
 * them (spec §4 `criteria[].name` enum). Downstream code canonicalises these to
 * the short codes TR/CC/LR/GRA via the validator/mapper (doc 13 §3.2); the wire
 * contract keeps the full names because that is what the spec defines.
 */
export const IELTS_CRITERION_NAMES = [
  'Task Response',
  'Coherence and Cohesion',
  'Lexical Resource',
  'Grammatical Range and Accuracy',
] as const

/** A criterion name exactly as it appears in the forced-tool payload. */
export type IeltsCriterionName = (typeof IELTS_CRITERION_NAMES)[number]

/** Tool name the engine forces via `tool_choice`. Exported for the caller. */
export const IELTS_ASSESSMENT_TOOL_NAME = 'submit_ielts_writing_assessment' as const

/**
 * The IELTS Writing Task 2 forced-tool-use definition, typed as an Anthropic SDK
 * `Tool` and ready to pass directly in the `tools` array of a Messages request.
 *
 * This is the spec §4 tool JSON reproduced as a TS const: same property names,
 * same top-level `required` set, `minItems`/`maxItems: 4` on `criteria`, 1-3
 * `evidence` items, the full criterion-name enum, integer `band` 0-9,
 * `integrity_flags` as an object of required booleans, `borderline_flags` as a
 * string array, and a required `holistic_note`. The one deliberate hardening
 * (doc 13 §3.1): `errors[].type`/`.severity` enums are spread from the shared
 * taxonomy constants rather than re-listed inline.
 *
 * `as const satisfies Anthropic.Tool` keeps the literal shape (so the spread
 * enum arrays stay precisely typed) while asserting SDK compatibility.
 */
export const ieltsAssessmentTool = {
  name: IELTS_ASSESSMENT_TOOL_NAME,
  description: 'Submit the structured IELTS Writing Task 2 assessment.',
  input_schema: {
    type: 'object',
    properties: {
      criteria: {
        type: 'array',
        minItems: 4,
        maxItems: 4,
        description:
          'Exactly four criteria in order: Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy.',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              // Spec §4 uses the full criterion names verbatim.
              enum: [...IELTS_CRITERION_NAMES],
            },
            band: {
              type: 'integer',
              minimum: 0,
              maximum: 9,
              description: 'Whole-band score 0-9 for this criterion.',
            },
            descriptor_matched: {
              type: 'string',
              description: 'The specific descriptor language for the awarded band.',
            },
            evidence: {
              type: 'array',
              minItems: 1,
              maxItems: 3,
              items: {
                type: 'object',
                properties: {
                  quote: {
                    type: 'string',
                    description: 'Exact verbatim span from the essay.',
                  },
                  explanation: { type: 'string' },
                },
                required: ['quote', 'explanation'],
              },
            },
            confidence: { type: 'number', minimum: 0, maximum: 1 },
          },
          required: ['name', 'band', 'descriptor_matched', 'evidence', 'confidence'],
        },
      },
      errors: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              // Generated from the single-source-of-truth taxonomy so the tool
              // enum and the MarkingErrorType union can never drift (doc 13 R1).
              enum: [...MARKING_ERROR_TYPES],
            },
            quote: {
              type: 'string',
              description: 'Exact verbatim span containing the error.',
            },
            correction: { type: 'string' },
            explanation: { type: 'string' },
            severity: {
              type: 'string',
              // Generated from the shared severity constant.
              enum: [...MARKING_ERROR_SEVERITIES],
            },
          },
          required: ['type', 'quote', 'correction', 'explanation'],
        },
      },
      integrity_flags: {
        type: 'object',
        properties: {
          under_length: { type: 'boolean' },
          off_topic: { type: 'boolean' },
          likely_memorised: { type: 'boolean' },
          copied_from_prompt: { type: 'boolean' },
        },
        required: ['under_length', 'off_topic', 'likely_memorised', 'copied_from_prompt'],
      },
      borderline_flags: {
        type: 'array',
        items: {
          type: 'string',
          description: "e.g. 'TR borderline 6/7: addresses all parts but development thin'",
        },
      },
      proposed_overall_band: {
        type: 'number',
        description:
          "Model's own overall (cross-check only). The authoritative overall band is recomputed in code (spec §5).",
      },
      overall_confidence: { type: 'number', minimum: 0, maximum: 1 },
      holistic_note: {
        type: 'string',
        description: "2-4 sentences, examiner's overall impression.",
      },
    },
    // Matches spec §4 required set verbatim.
    required: [
      'criteria',
      'errors',
      'integrity_flags',
      'proposed_overall_band',
      'overall_confidence',
      'holistic_note',
    ],
  },
} as const satisfies Anthropic.Tool

// ─── Parsed payload type (pre-validation) ────────────────────────────────────
// The exact object the model returns inside the forced tool-use block (doc 13
// §3.2 `IeltsToolPayload`). This is the UNTRUSTED wire shape: model arithmetic,
// unverified quotes, snake_case keys. The validator/mapper turns it into the
// canonical `GroundedMarkingResult` (recomputing the overall band in code,
// verifying every quote, setting confidence + needs-human-review). It is
// intentionally a field-for-field match for `ieltsAssessmentTool.input_schema`.

/** One evidence span as the model returns it (spec §4 `criteria[].evidence`). */
export interface IeltsToolEvidence {
  quote: string
  explanation: string
}

/** One criterion assessment as the model returns it (spec §4 `criteria[]`). */
export interface IeltsToolCriterion {
  name: IeltsCriterionName
  band: number
  descriptor_matched: string
  evidence: readonly IeltsToolEvidence[]
  confidence: number
}

/** One tagged language error as the model returns it (spec §4 `errors[]`). */
export interface IeltsToolError {
  type: MarkingErrorType
  quote: string
  correction: string
  explanation?: string
  severity?: MarkingErrorSeverity
}

/**
 * The full forced-tool payload (spec §4 / doc 13 §3.2 `IeltsToolPayload`).
 *
 * `integrity_flags` reuses the canonical {@link IntegrityFlags} object from
 * `../result-schema` (the four required booleans are identical on the wire and
 * in the result), so the shape is reconciled, not duplicated.
 */
export interface IeltsAssessmentToolInput {
  criteria: readonly IeltsToolCriterion[]
  errors: readonly IeltsToolError[]
  integrity_flags: IntegrityFlags
  borderline_flags?: readonly string[]
  /** Cross-check only — the engine recomputes the authoritative overall band. */
  proposed_overall_band: number
  overall_confidence: number
  holistic_note: string
}

/**
 * Alias matching the name used in doc 13 §3.2. Prefer
 * {@link IeltsAssessmentToolInput} in new code.
 */
export type IeltsToolPayload = IeltsAssessmentToolInput

/**
 * Reconciliation anchor with the canonical result (`GroundedMarkingResult`).
 *
 * The forced-tool payload is the model's UNTRUSTED input; `GroundedMarkingResult`
 * is the canonical, validator-produced output. They are deliberately NOT the
 * same shape — the result adds code-owned fields (a recomputed overall band,
 * verified evidence, validation flags, needs-human-review) and demotes the
 * model's advisory `proposed_overall_band` to an audit-only slot. The
 * validator/mapper (doc 13 §3.3) performs the transform; this module owns only
 * the wire shape.
 *
 * Field flow (payload → canonical), for the mapper to implement:
 *   criteria[].name            → criteria[].code   (TR/CC/LR/GRA, via mapper)
 *   criteria[].band            → criteria[].band   (assert integer 0-9)
 *   criteria[].descriptor_matched → criteria[].descriptorMatched
 *   criteria[].evidence[]      → criteria[].evidence[] (verify verbatim)
 *   criteria[].confidence      → criteria[].confidence
 *   errors[]                   → errors[]          (verify quote; drop unverified)
 *   integrity_flags            → integrityFlags    (unchanged)
 *   borderline_flags           → borderlineFlags
 *   proposed_overall_band      → overall.proposedOverallBand (audit only)
 *   overall_confidence         → overallConfidence (gate input)
 *   holistic_note              → holisticNote
 *
 * Re-exporting the canonical type here is a deliberate compile-time anchor: this
 * file fails to build if `GroundedMarkingResult` is removed or renamed, forcing
 * the wire↔result reconciliation to be revisited as part of that change.
 */
export type ReconciledResult = GroundedMarkingResult
