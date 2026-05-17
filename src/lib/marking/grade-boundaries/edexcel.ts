// ─── Pearson Edexcel GCSE English — Grade Boundaries ─────────────────────────
// Source: Pearson official "Grade Boundaries — Edexcel GCSE (9-1) — June 2024"
// (subject-level raw boundaries), specifications 1EN0 (English Language) and
// 1ET0 (English Literature). Maximum subject mark = 160.
//
// Transcribed from the official Pearson qualifications PDF (see sourceUrl).
// English Language (1EN0) curve is exposed as the board default; the
// Literature (1ET0) figures are recorded alongside for the human verifier.
// Numbers are NOT yet human-verified — `verified` stays false until a person
// checks them against the PDF and flips it (see ./types.ts header).
//
// Official June 2024 raw boundaries (max 160):
//   1EN0 English Language : 9=132 8=123 7=114 6=104 5=94 4=84 3=64 2=45 1=26
//   1ET0 English Literature: 9=133 8=122 7=112 6=98 5=84 4=70 3=51 2=33 1=15
// (Note: the legacy 1EN0 spec figures are used here; the newer "English
// Language 2.0" 1EN2 spec has different boundaries and is out of scope until
// the marking schemes target it.)
// ────────────────────────────────────────────────────────────────────────────

import type { BoardBoundaryTable, NumericGrade } from './types'
import { thresholdsFromRaw } from './types'

const EDEXCEL_SOURCE_URL =
  'https://qualifications.pearson.com/content/dam/pdf/Support/Grade-boundaries/GCSE/grade-boundaries-june-2024-gcse.pdf'

/** Official Pearson June 2024 raw boundaries, English Language 1EN0 (max 160). */
const EDEXCEL_1EN0_RAW: Record<NumericGrade, number | null> = {
  '9': 132,
  '8': 123,
  '7': 114,
  '6': 104,
  '5': 94,
  '4': 84,
  '3': 64,
  '2': 45,
  '1': 26,
}

/**
 * Official Pearson June 2024 raw boundaries, English Literature 1ET0 (max 160).
 * Recorded for the human verifier; not wired into the single-table predictor
 * (English uses the 1EN0 curve as the board default — see file header).
 */
export const EDEXCEL_1ET0_LITERATURE_RAW: Record<NumericGrade, number | null> = {
  '9': 133,
  '8': 122,
  '7': 112,
  '6': 98,
  '5': 84,
  '4': 70,
  '3': 51,
  '2': 33,
  '1': 15,
}

export const edexcelBoundaries: BoardBoundaryTable = {
  board: 'edexcel',
  qualification: 'Pearson Edexcel GCSE English Language (1EN0) / Literature (1ET0)',
  series: 'June 2024',
  sourceUrl: EDEXCEL_SOURCE_URL,
  retrievedAt: '2026-05-17',
  verified: false,
  note:
    'Subject-level raw boundaries out of 160, normalised to percentage. ' +
    'Legacy 1EN0 Language curve used as the board default; Literature 1ET0 ' +
    'figures recorded in EDEXCEL_1ET0_LITERATURE_RAW. Newer 1EN2 ("English ' +
    'Language 2.0") spec NOT modelled.',
  thresholds: thresholdsFromRaw(160, EDEXCEL_1EN0_RAW),
}
