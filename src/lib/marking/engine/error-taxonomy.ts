/**
 * Canonical, closed error taxonomy for the grounded Marking Engine.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * This is the ONE source every other engine module imports for the fixed set of
 * error categories. It is deliberately a single file so the forced-tool enum
 * (`engine/ielts/assessment-tool-schema.ts`), the marker prompt's ERROR TAGGING
 * list, the canonical result type (`engine/result-schema.ts`), and the §4
 * learner-model analytics keys all reference the SAME 20 strings and can never
 * silently drift apart.
 *
 * The 20 strings below are VERBATIM from the spec and design docs and must match
 * byte-for-byte:
 *   • business-docs/architecture/marking-engine/01-ielts-writing-task2-spec.md
 *     §2 (the marker prompt ERROR TAGGING list, lines 73-79) and §4 (the
 *     `submit_ielts_writing_assessment` tool's `errors[].type` enum, lines
 *     159-165).
 *   • business-docs/architecture/marking-engine/13-design-result-schema-and-taxonomy.md
 *     §2.1 (lines 87-131) — the TS const this file realises.
 *   • business-docs/architecture/marking-engine/00-architecture-source.md §2.
 *
 * It is the taxonomy OF THE ENGINE, not of IELTS: GCSE/EAL/Cambridge modules tag
 * against the SAME 20 values so the learner model is cross-module. Module-specific
 * mapping is allowed (an IELTS `task.position` maps to TR; a GCSE module may never
 * emit `task.position`) — modules emit a SUBSET; none invent values outside the
 * set. Do not rename or reorder without updating the spec, the marker prompt, the
 * tool schema, and the guard test together.
 *
 * NAMING / RECONCILIATION
 * -----------------------
 * Design doc 13 §2.1 specifies the canonical names `MARKING_ERROR_TYPES` /
 * `MarkingErrorType` / `isMarkingErrorType` / `errorCategory` plus the severity
 * constants `MARKING_ERROR_SEVERITIES` / `MarkingErrorSeverity`. Those are the
 * PRIMARY exports here. The sibling `result-schema.ts` was authored against the
 * shorter alias `ErrorType`; to keep both Phase-1 consumers compiling without
 * touching them, this file ALSO re-exports the doc-13-canonical members under the
 * shorter `ERROR_*` / `ErrorType` / `isErrorType` / `categoryOf` aliases. The two
 * name sets are the same values — the aliases are thin re-exports, not duplicate
 * definitions, so there is no second source of truth.
 *
 * Phase 1 is ADDITIVE: this module is a closed set of `as const` tuples plus
 * pure, dependency-free helpers (a runtime guard backed by a `Set` for O(1)
 * trust-boundary checks). No SDK calls, no I/O.
 */

// ─── The fixed 20-value error taxonomy (single source of truth) ──────────────
//
// These 20 strings are VERBATIM from spec §2/§4 and doc 13 §2.1, in spec order:
// grammar.* (7), lexical.* (5), discourse.* (4), task.* (4).
export const MARKING_ERROR_TYPES = [
  // grammar.* (7)
  'grammar.subject_verb_agreement',
  'grammar.article',
  'grammar.tense',
  'grammar.preposition',
  'grammar.word_order',
  'grammar.sentence_structure',
  'grammar.punctuation',
  // lexical.* (5)
  'lexical.word_choice',
  'lexical.collocation',
  'lexical.register',
  'lexical.spelling',
  'lexical.word_formation',
  // discourse.* (4)
  'discourse.cohesion',
  'discourse.referencing',
  'discourse.paragraphing',
  'discourse.coherence',
  // task.* (4)
  'task.relevance',
  'task.completeness',
  'task.position',
  'task.development',
] as const

/** A single error category, e.g. `'grammar.tense'`. The closed taxonomy union. */
export type MarkingErrorType = (typeof MARKING_ERROR_TYPES)[number]

/**
 * Top-level taxonomy families — the axis cohort analytics roll up to (doc 13
 * §2.1). Each `MarkingErrorType` is `${MarkingErrorCategory}.${subtype}`.
 */
export const MARKING_ERROR_CATEGORIES = ['grammar', 'lexical', 'discourse', 'task'] as const

/** One of the four top-level taxonomy families. */
export type MarkingErrorCategory = (typeof MARKING_ERROR_CATEGORIES)[number]

/**
 * Severity of a tagged error (spec §4 tool `severity` enum). Optional on a
 * `MarkedError`; present only when the engine differentiates severity.
 */
export const MARKING_ERROR_SEVERITIES = ['minor', 'moderate', 'major'] as const

/** Relative seriousness of a tagged error. */
export type MarkingErrorSeverity = (typeof MARKING_ERROR_SEVERITIES)[number]

// ─── Runtime guards & helpers (pure) ─────────────────────────────────────────

/**
 * O(1) membership set for the trust-boundary guard below. Built once at module
 * load from the canonical tuple so it can never drift from `MARKING_ERROR_TYPES`.
 */
const MARKING_ERROR_TYPE_SET: ReadonlySet<string> = new Set(MARKING_ERROR_TYPES)

const MARKING_ERROR_CATEGORY_SET: ReadonlySet<string> = new Set(MARKING_ERROR_CATEGORIES)

/**
 * Runtime type guard: is `s` one of the 20 canonical error types? Use this at
 * every trust boundary (parsing the model's forced-tool output, deserialising a
 * persisted result) before narrowing a raw string to {@link MarkingErrorType}.
 */
export function isMarkingErrorType(s: string): s is MarkingErrorType {
  return MARKING_ERROR_TYPE_SET.has(s)
}

/** Runtime type guard for the four top-level categories. */
export function isMarkingErrorCategory(s: string): s is MarkingErrorCategory {
  return MARKING_ERROR_CATEGORY_SET.has(s)
}

/**
 * The top-level family of an error type, e.g. `errorCategory('grammar.tense')`
 * → `'grammar'`. Derived from the `category.subtype` shape — no second mapping
 * table to keep in sync.
 */
export function errorCategory(t: MarkingErrorType): MarkingErrorCategory {
  return t.split('.')[0] as MarkingErrorCategory
}

// ─── Aliases for `result-schema.ts` (same values, no duplication) ────────────
//
// `result-schema.ts` imports `ErrorType` from this module. These aliases keep
// that consumer compiling while preserving doc 13's canonical names above as the
// primary exports. Same underlying tuple/union — pure re-exports.

/** Alias of {@link MARKING_ERROR_TYPES}. Prefer the canonical name in new code. */
export const ERROR_TYPES = MARKING_ERROR_TYPES

/** Alias of {@link MarkingErrorType}. Prefer the canonical name in new code. */
export type ErrorType = MarkingErrorType

/** Alias of {@link MARKING_ERROR_CATEGORIES}. */
export const ERROR_CATEGORIES = MARKING_ERROR_CATEGORIES

/** Alias of {@link MarkingErrorCategory}. */
export type ErrorCategory = MarkingErrorCategory

/** Alias of {@link isMarkingErrorType}. */
export const isErrorType = isMarkingErrorType

/** Alias of {@link isMarkingErrorCategory}. */
export const isErrorCategory = isMarkingErrorCategory

/** Alias of {@link errorCategory}. */
export const categoryOf = errorCategory

// ─── Analytics grouping (doc 13 §2.1 / spec §4 aggregation) ──────────────────

/**
 * One taxonomy family with its human-readable analytics label and the exhaustive
 * list of error types it owns. The basis for §4 learner-model cohort rollups.
 */
export interface ErrorCategoryGroup {
  /** The top-level family key. */
  readonly category: MarkingErrorCategory
  /** Human-readable label used in analytics surfaces. */
  readonly label: string
  /** The exhaustive list of error types in this family. */
  readonly types: readonly MarkingErrorType[]
}

/**
 * The taxonomy grouped by family, each with its IELTS-criterion analytics label.
 * Keyed by the four categories; `types` lists are exhaustive and in spec order.
 */
export const ERROR_TAXONOMY_BY_CATEGORY: {
  readonly [C in MarkingErrorCategory]: ErrorCategoryGroup
} = {
  grammar: {
    category: 'grammar',
    label: 'Grammatical Range & Accuracy',
    types: [
      'grammar.subject_verb_agreement',
      'grammar.article',
      'grammar.tense',
      'grammar.preposition',
      'grammar.word_order',
      'grammar.sentence_structure',
      'grammar.punctuation',
    ],
  },
  lexical: {
    category: 'lexical',
    label: 'Lexical Resource',
    types: [
      'lexical.word_choice',
      'lexical.collocation',
      'lexical.register',
      'lexical.spelling',
      'lexical.word_formation',
    ],
  },
  discourse: {
    category: 'discourse',
    label: 'Coherence & Cohesion',
    types: [
      'discourse.cohesion',
      'discourse.referencing',
      'discourse.paragraphing',
      'discourse.coherence',
    ],
  },
  task: {
    category: 'task',
    label: 'Task Response',
    types: ['task.relevance', 'task.completeness', 'task.position', 'task.development'],
  },
} as const
