// ─── Marking Calibration Anchors ─────────────────────────────────────────────
// Senior-examiner standardisation, distilled into compact "anchors" that are
// injected into the marking system prompt so the model calibrates its severity
// against how real examiners applied a given mark scheme to real scripts.
//
// This is in-context calibration (grounded marking), NOT model training. Each
// anchor is a one-line judgement: the mark/level awarded plus a short, original
// paraphrase of WHY. Anchors are derived from official standardisation packs;
// they never reproduce candidate scripts or verbatim board text.
//
// Generic by design: any board+paper can register a pack keyed by mark-scheme
// id. The prompt builder calls getCalibrationAnchor(schemeId, questionId).
// ────────────────────────────────────────────────────────────────────────────

import { EDEXCEL_IGCSE_LANG_PAPER1_CALIBRATION } from './edexcel-igcse-lang-paper1'

/** A single standardised judgement used to anchor marking severity. */
export interface CalibrationExemplar {
  /** Internal reference, e.g. "Q4·P3" (script 3 of 5). Not shown to students. */
  ref: string
  /** One-line summary: the mark/level awarded and a short paraphrased rationale. */
  summary: string
}

/** Calibration data for one question of a paper. */
export interface QuestionCalibration {
  /** Question id, matching the QuestionScheme id in the mark scheme. */
  questionId: string
  /** Operational marking rules surfaced during standardisation for this question. */
  rules?: readonly string[]
  /** Standardised exemplars spanning the mark range (low → high). */
  exemplars: readonly CalibrationExemplar[]
}

/** A full calibration pack for a mark scheme, keyed by question id. */
export type CalibrationPack = Readonly<Record<string, QuestionCalibration>>

/**
 * Registry of calibration packs, keyed by mark-scheme id. Add new packs here.
 */
const CALIBRATION_PACKS: Readonly<Record<string, CalibrationPack>> = {
  'edexcel-igcse-lang-paper1': EDEXCEL_IGCSE_LANG_PAPER1_CALIBRATION,
}

/**
 * Return the calibration block for a scheme+question, or null if none exists.
 * The block is compact, plain text, ready to drop into the system prompt.
 */
export function getCalibrationAnchor(schemeId: string, questionId: string): string | null {
  const pack = CALIBRATION_PACKS[schemeId]
  if (!pack) return null
  const q = pack[questionId.trim()] ?? pack[questionId.trim().toUpperCase()]
  if (!q || q.exemplars.length === 0) return null

  const lines: string[] = [
    `STANDARDISATION ANCHORS - how senior examiners marked real scripts for this question. Use these to calibrate the severity and placement of your own mark. They are reference judgements only: do NOT copy their wording or treat them as content the student wrote.`,
  ]
  for (const ex of q.exemplars) lines.push(`- ${ex.summary}`)
  if (q.rules && q.rules.length > 0) {
    lines.push(`Standardisation rules for this question:`)
    for (const r of q.rules) lines.push(`- ${r}`)
  }
  return lines.join('\n')
}

/** True when a calibration pack is registered for the given mark-scheme id. */
export function hasCalibrationPack(schemeId: string): boolean {
  return schemeId in CALIBRATION_PACKS
}

export { EDEXCEL_IGCSE_LANG_PAPER1_CALIBRATION }
