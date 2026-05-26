// ─── WJEC Eduqas GCSE English - Grade Boundaries ─────────────────────────────
// Source: Eduqas official "Eduqas GCSE Grade Points - June 2024"
// (qualification-level "QS" boundaries), specifications C700QS (English
// Language) and C720QS (English Literature). Maximum qualification mark = 200
// (Eduqas uses a 200-mark aggregate, NOT 160 - percentage normalisation in
// ./types.ts handles this transparently).
//
// Transcribed from the official Eduqas PDF (see sourceUrl). English Language
// (C700) curve is the board default; the Literature (C720) figures are
// recorded alongside for the human verifier. Numbers are NOT yet
// human-verified - `verified` stays false until a person checks them against
// the PDF and flips it (see ./types.ts header).
//
// Official June 2024 raw qualification boundaries (max 200):
//   C700QS English Language : 9=150 8=138 7=126 6=112 5=98 4=84 3=64 2=44 1=24
//   C720QS English Literature: 9=148 8=136 7=124 6=110 5=96 4=82 3=60 2=38 1=17
// ────────────────────────────────────────────────────────────────────────────

import type { BoardBoundaryTable, NumericGrade } from './types'
import { thresholdsFromRaw } from './types'

const EDUQAS_SOURCE_URL =
  'https://www.eduqas.co.uk/media/giydmniq/eduqas-gcse-grade-points-june-2024.pdf'

const EDUQAS_MAX = 200

/** Official Eduqas June 2024 raw boundaries, English Language C700QS (max 200). */
const EDUQAS_C700_RAW: Record<NumericGrade, number | null> = {
  '9': 150,
  '8': 138,
  '7': 126,
  '6': 112,
  '5': 98,
  '4': 84,
  '3': 64,
  '2': 44,
  '1': 24,
}

/**
 * Official Eduqas June 2024 raw boundaries, English Literature C720QS
 * (max 200). Recorded for the human verifier; not wired into the
 * single-table predictor (English uses the C700 curve as the board default).
 */
export const EDUQAS_C720_LITERATURE_RAW: Record<NumericGrade, number | null> = {
  '9': 148,
  '8': 136,
  '7': 124,
  '6': 110,
  '5': 96,
  '4': 82,
  '3': 60,
  '2': 38,
  '1': 17,
}

export const eduqasBoundaries: BoardBoundaryTable = {
  board: 'eduqas',
  qualification: 'WJEC Eduqas GCSE English Language (C700) / Literature (C720)',
  series: 'June 2024',
  sourceUrl: EDUQAS_SOURCE_URL,
  retrievedAt: '2026-05-17',
  verified: false,
  note:
    'Qualification-level "QS" raw boundaries out of 200 (Eduqas aggregate ' +
    'max), normalised to percentage so the curve generalises across the ' +
    "tool's per-paper totals. English Language C700 curve used as the board " +
    'default; Literature C720 figures recorded in EDUQAS_C720_LITERATURE_RAW.',
  thresholds: thresholdsFromRaw(EDUQAS_MAX, EDUQAS_C700_RAW),
}
