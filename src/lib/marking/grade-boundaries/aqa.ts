// ─── AQA GCSE English - Grade Boundaries ─────────────────────────────────────
// Source: AQA official "Grade boundaries GCSE - June 2024 exams" (raw mark
// subject-level boundaries), specifications 8700 (English Language) and
// 8702 (English Literature). Maximum subject mark = 160.
//
// Transcribed from the official AQA filestore PDF (see sourceUrl). The
// predictor uses ONE table per board; AQA Language and Literature boundaries
// are close enough that we expose the Language (8700) curve as the board
// default and record the Literature (8702) figures alongside for the human
// verifier. Numbers are NOT yet human-verified - `verified` is false until a
// person checks them against the PDF and flips it (see ./types.ts header).
//
// Official June 2024 raw boundaries (max 160):
//   8700 English Language : 9=121 8=111 7=102 6=92 5=82 4=73 3=54 2=35 1=16
//   8702 English Literature: 9=137 8=121 7=106 6=90 5=74 4=58 3=42 2=27 1=12
// ────────────────────────────────────────────────────────────────────────────

import type { BoardBoundaryTable, NumericGrade } from './types'
import { thresholdsFromRaw } from './types'

const AQA_SOURCE_URL = 'https://filestore.aqa.org.uk/over/stat_pdf/AQA-GCSE-GDE-BDY-JUN-2024.PDF'

/** Official AQA June 2024 raw boundaries, English Language 8700 (max 160). */
const AQA_8700_RAW: Record<NumericGrade, number | null> = {
  '9': 121,
  '8': 111,
  '7': 102,
  '6': 92,
  '5': 82,
  '4': 73,
  '3': 54,
  '2': 35,
  '1': 16,
}

/**
 * Official AQA June 2024 raw boundaries, English Literature 8702 (max 160).
 * Recorded for the human verifier / future per-subject split. Not wired into
 * the single-table predictor yet (English uses the 8700 curve as the board
 * default - see file header).
 */
export const AQA_8702_LITERATURE_RAW: Record<NumericGrade, number | null> = {
  '9': 137,
  '8': 121,
  '7': 106,
  '6': 90,
  '5': 74,
  '4': 58,
  '3': 42,
  '2': 27,
  '1': 12,
}

export const aqaBoundaries: BoardBoundaryTable = {
  board: 'aqa',
  qualification: 'AQA GCSE English Language (8700) / Literature (8702)',
  series: 'June 2024',
  sourceUrl: AQA_SOURCE_URL,
  retrievedAt: '2026-05-17',
  // Figures transcribed from the official AQA PDF but NOT yet human-verified.
  // A human verifies the numbers against sourceUrl and flips this to true.
  verified: false,
  note:
    'Subject-level (overall qualification) raw boundaries out of 160, ' +
    'normalised to percentage. English Language 8700 curve used as the ' +
    'board default; Literature 8702 figures recorded in AQA_8702_LITERATURE_RAW.',
  thresholds: thresholdsFromRaw(160, AQA_8700_RAW),
}
