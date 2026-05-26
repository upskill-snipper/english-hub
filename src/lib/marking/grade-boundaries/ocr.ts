// ─── OCR GCSE English - Grade Boundaries ─────────────────────────────────────
// Source: OCR official "GCSE (9-1) grade boundaries - June 2024"
// (qualification "Overall" raw boundaries), specifications J351 (English
// Language) and J352 (English Literature). Maximum qualification mark = 160
// (Spoken Language components do not count towards the overall mark).
//
// Transcribed from the official OCR PDF (see sourceUrl). English Language
// (J351) "Overall" curve is the board default; the Literature (J352)
// "Overall" figures are recorded alongside for the human verifier. Numbers
// are NOT yet human-verified - `verified` stays false until a person checks
// them against the PDF and flips it (see ./types.ts header).
//
// Official June 2024 raw "Overall" boundaries (max 160):
//   J351 English Language : 9=130 8=119 7=109 6=97 5=85 4=73 3=57 2=41 1=26
//   J352 English Literature: 9=133 8=118 7=103 6=84 5=66 4=48 3=36 2=24 1=13
// ────────────────────────────────────────────────────────────────────────────

import type { BoardBoundaryTable, NumericGrade } from './types'
import { thresholdsFromRaw } from './types'

const OCR_SOURCE_URL = 'https://www.ocr.org.uk/Images/714692-gcse-grade-boundaries-june-2024.pdf'

/** Official OCR June 2024 "Overall" raw boundaries, English Language J351 (max 160). */
const OCR_J351_RAW: Record<NumericGrade, number | null> = {
  '9': 130,
  '8': 119,
  '7': 109,
  '6': 97,
  '5': 85,
  '4': 73,
  '3': 57,
  '2': 41,
  '1': 26,
}

/**
 * Official OCR June 2024 "Overall" raw boundaries, English Literature J352
 * (max 160). Recorded for the human verifier; not wired into the
 * single-table predictor (English uses the J351 curve as the board default).
 */
export const OCR_J352_LITERATURE_RAW: Record<NumericGrade, number | null> = {
  '9': 133,
  '8': 118,
  '7': 103,
  '6': 84,
  '5': 66,
  '4': 48,
  '3': 36,
  '2': 24,
  '1': 13,
}

export const ocrBoundaries: BoardBoundaryTable = {
  board: 'ocr',
  qualification: 'OCR GCSE English Language (J351) / Literature (J352)',
  series: 'June 2024',
  sourceUrl: OCR_SOURCE_URL,
  retrievedAt: '2026-05-17',
  verified: false,
  note:
    'Qualification "Overall" raw boundaries out of 160, normalised to ' +
    'percentage (Spoken Language components excluded, per OCR). English ' +
    'Language J351 curve used as the board default; Literature J352 figures ' +
    'recorded in OCR_J352_LITERATURE_RAW.',
  thresholds: thresholdsFromRaw(160, OCR_J351_RAW),
}
