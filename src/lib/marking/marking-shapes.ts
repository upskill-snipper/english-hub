// ─── Board-aware Marking Shapes ────────────────────────────────────────────
//
// WHY THIS MODULE EXISTS
// The paid-marker workbench (/marker) and the human-review API
// (/api/marking/[id]/review) were built around the GCSE model: a 9-1 grade +
// optional per-AO marks. But the platform markets marking across more than one
// scoring model:
//
//   • GCSE / IGCSE English  → a 9-1 letter grade (+ "U"), with per-AO marks
//   • IELTS                 → four analytic criterion BANDS (TR/CC/LR/GRA),
//                             each 0-9 in 0.5 steps, plus an overall band
//   • KS3                   → a working-level / criteria judgement (no 9-1)
//   • EAL                   → a proficiency-stage judgement (CEFR-like)
//
// A marker must see the FORM that matches the qualification they're marking,
// and the review API must accept the marks that form produces. This module is
// the single source of truth that maps a (board, qualification) to its marking
// "shape" — a small, declarative descriptor both the UI and the API read so
// they never disagree about what a valid mark looks like for a given area.
//
// SCOPE: this is pure data + pure functions. No DB, no React, no network — so
// it is trivially unit-testable and safe to import from both a client page and
// a server route. It deliberately does NOT encode the full mark scheme (that
// lives in src/lib/marking/mark-schemes); it only encodes the SHAPE of the
// human mark we collect, which is what the form and the validator need.
// ───────────────────────────────────────────────────────────────────────────

/**
 * The kind of overall mark a qualification uses. Drives which form control the
 * workbench renders and which validator the review API applies.
 *
 *  • 'gcse_grade'  — a single value from a fixed grade set (9-1 + U).
 *  • 'band'        — a numeric band on a continuous half-step scale (IELTS 0-9),
 *                    typically with named sub-criteria each scored on the same
 *                    scale and an overall band.
 *  • 'level'       — a named working level / stage from an ordered list
 *                    (KS3 working levels, EAL proficiency stages). Ordinal, not
 *                    numeric-with-arithmetic.
 */
export type MarkingScaleKind = 'gcse_grade' | 'band' | 'level'

/**
 * A single analytic sub-criterion that is marked in its own right (e.g. the
 * four IELTS criteria). Only used by 'band' shapes today.
 */
export interface MarkingCriterion {
  /** Short stable code stored on the mark (e.g. 'TR'). */
  readonly code: string
  /** Human-readable label shown in the form (e.g. 'Task Response'). */
  readonly label: string
}

/**
 * A declarative description of HOW a given qualification is marked by a human —
 * the shape of the mark we collect, render and validate. One per marking area.
 */
export interface MarkingShape {
  /** Stable id for this shape (used in logs / tests). */
  readonly id: string
  /** Which scale family this area uses. */
  readonly kind: MarkingScaleKind
  /** Short label for the area (e.g. 'GCSE English', 'IELTS Writing'). */
  readonly label: string

  // ── For kind === 'gcse_grade' ──────────────────────────────────────────────
  /**
   * The allowed grade values, best-first. Present only for 'gcse_grade'.
   * Mirrors the review API's ALLOWED_GRADES so the two never drift.
   */
  readonly grades?: readonly string[]

  // ── For kind === 'band' ────────────────────────────────────────────────────
  /** Minimum band (inclusive). Present only for 'band'. */
  readonly bandMin?: number
  /** Maximum band (inclusive). Present only for 'band'. */
  readonly bandMax?: number
  /** Band step (e.g. 0.5 for IELTS). Present only for 'band'. */
  readonly bandStep?: number
  /**
   * The analytic sub-criteria each scored on the band scale. Present only for
   * 'band'. The overall band is collected separately (the headline number).
   */
  readonly criteria?: readonly MarkingCriterion[]

  // ── For kind === 'level' ───────────────────────────────────────────────────
  /**
   * The ordered list of named levels/stages, lowest-first. Present only for
   * 'level'. The marker picks one as the overall judgement.
   */
  readonly levels?: readonly string[]
}

// ─── The canonical shapes ────────────────────────────────────────────────────

/** GCSE 9-1 grades plus "U" — must match the review API's ALLOWED_GRADES. */
export const GCSE_GRADES = ['9', '8', '7', '6', '5', '4', '3', '2', '1', 'U'] as const

/** The four IELTS analytic writing criteria (matches calibration/metrics.ts). */
export const IELTS_WRITING_CRITERIA: readonly MarkingCriterion[] = [
  { code: 'TR', label: 'Task Response' },
  { code: 'CC', label: 'Coherence & Cohesion' },
  { code: 'LR', label: 'Lexical Resource' },
  { code: 'GRA', label: 'Grammatical Range & Accuracy' },
]

/** GCSE / IGCSE English: 9-1 grade + per-AO marks (the original workbench shape). */
export const GCSE_SHAPE: MarkingShape = {
  id: 'gcse-grade',
  kind: 'gcse_grade',
  label: 'GCSE / IGCSE English',
  grades: GCSE_GRADES,
}

/** IELTS Writing: four criterion bands + overall band, 0-9 in 0.5 steps. */
export const IELTS_WRITING_SHAPE: MarkingShape = {
  id: 'ielts-writing',
  kind: 'band',
  label: 'IELTS Writing',
  bandMin: 0,
  bandMax: 9,
  bandStep: 0.5,
  criteria: IELTS_WRITING_CRITERIA,
}

/**
 * KS3 English working levels (ordered lowest-first). These are the platform's
 * KS3 progression bands; they are ORDINAL — "Secure" is above "Developing", but
 * we do not do band arithmetic on them.
 */
export const KS3_LEVELS = ['Emerging', 'Developing', 'Securing', 'Secure', 'Mastery'] as const

/** KS3 English: pick one working level. */
export const KS3_SHAPE: MarkingShape = {
  id: 'ks3-level',
  kind: 'level',
  label: 'KS3 English',
  levels: KS3_LEVELS,
}

/**
 * EAL proficiency stages (CEFR-aligned, ordered lowest-first). A marker assigns
 * the stage the writing demonstrates.
 */
export const EAL_STAGES = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const

/** EAL: pick one proficiency stage. */
export const EAL_SHAPE: MarkingShape = {
  id: 'eal-stage',
  kind: 'level',
  label: 'EAL',
  levels: EAL_STAGES,
}

// ─── Resolution: (board, qualification) → shape ──────────────────────────────

/**
 * The GCSE/IGCSE exam boards (the ExamBoard prisma enum values, normalised to
 * lower-case). All of these use the 9-1 grade shape.
 */
const GCSE_BOARDS = new Set([
  'aqa',
  'edexcel',
  'ocr',
  'eduqas',
  'edexcel_igcse',
  'cambridge_0500',
  'cambridge_0990',
])

/**
 * Normalise a free-text board/qualification token for matching: lower-case,
 * trimmed, spaces and hyphens collapsed to a single underscore. So 'Cambridge
 * 0500', 'cambridge-0500' and 'CAMBRIDGE_0500' all match.
 */
function norm(value: string | null | undefined): string {
  if (!value) return ''
  return value
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, '_')
}

/**
 * Resolve the marking shape for a script from its exam_board and qualification
 * fields (either may be null on legacy rows). Resolution order:
 *
 *   1. Explicit IELTS (board or qualification mentions 'ielts')  → IELTS_WRITING
 *   2. Explicit EAL    (board or qualification mentions 'eal')   → EAL
 *   3. Explicit KS3    (qualification mentions 'ks3'/'key stage 3') → KS3
 *   4. A known GCSE/IGCSE board                                  → GCSE
 *   5. Fallback                                                  → GCSE
 *
 * WHY GCSE is the fallback: it is the original, already-live shape, so an
 * unclassifiable legacy row behaves exactly as it does today (no regression).
 * New IELTS/KS3/EAL rows are tagged on ingest and resolve to their own shape.
 *
 * @param board the script's exam_board (ExamBoard enum value, or 'IELTS'/'EAL'/'KS3')
 * @param qualification the script's qualification label, if any
 * @returns the MarkingShape the form + validator should use
 */
export function resolveMarkingShape(
  board: string | null | undefined,
  qualification?: string | null | undefined,
): MarkingShape {
  const b = norm(board)
  const q = norm(qualification)
  const both = `${b} ${q}`

  if (both.includes('ielts')) return IELTS_WRITING_SHAPE
  if (both.includes('eal')) return EAL_SHAPE
  if (q.includes('ks3') || both.includes('key_stage_3')) return KS3_SHAPE
  if (GCSE_BOARDS.has(b)) return GCSE_SHAPE

  // Unknown / legacy: behave exactly as the original GCSE workbench did.
  return GCSE_SHAPE
}

/**
 * Validate a human overall mark against a shape. Returns null when valid, or a
 * short error message when not. Shared by the review API so the same rule that
 * the form enforces is also enforced server-side (never trust the client).
 *
 *  • 'gcse_grade' → must be one of the shape's grades.
 *  • 'band'       → must be a number in [bandMin, bandMax] on the bandStep grid.
 *  • 'level'      → must be one of the shape's levels.
 *
 * @param shape the resolved marking shape
 * @param overall the human overall mark (grade string, band number, or level string)
 */
export function validateOverallMark(shape: MarkingShape, overall: unknown): string | null {
  switch (shape.kind) {
    case 'gcse_grade': {
      if (typeof overall !== 'string' || !(shape.grades ?? []).includes(overall)) {
        return `mark must be one of: ${(shape.grades ?? []).join(', ')}`
      }
      return null
    }
    case 'band': {
      const n = typeof overall === 'number' ? overall : Number(overall)
      if (!Number.isFinite(n)) return 'band must be a number'
      const min = shape.bandMin ?? 0
      const max = shape.bandMax ?? 9
      const step = shape.bandStep ?? 0.5
      if (n < min || n > max) return `band must be between ${min} and ${max}`
      // On the half-step grid (guard float error): n/step should be ~integer.
      const ratio = n / step
      if (Math.abs(ratio - Math.round(ratio)) > 1e-9) {
        return `band must be in steps of ${step}`
      }
      return null
    }
    case 'level': {
      if (typeof overall !== 'string' || !(shape.levels ?? []).includes(overall)) {
        return `level must be one of: ${(shape.levels ?? []).join(', ')}`
      }
      return null
    }
    default:
      return 'unknown marking scale'
  }
}

/**
 * Validate a single criterion band (for 'band' shapes). Returns null when valid
 * or an error message. Criterion bands use the same scale as the overall band.
 */
export function validateCriterionBand(shape: MarkingShape, value: unknown): string | null {
  if (shape.kind !== 'band') return 'criteria are only used by band-scale marking'
  return validateOverallMark(shape, value)
}
