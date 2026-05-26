// ─── Cambridge IGCSE First Language English - Grade Boundaries ───────────────
// Syllabuses: 0500 (First Language English, A*-G) and 0990 (First Language
// English (9-1)). Literature in English is 0475 / 0992 (not yet marked by
// this tool - see TODO at the foot of this file).
//
// ⚠ PROVISIONAL - DO NOT TREAT AS USABLE BOUNDARIES.
//
// Cambridge does NOT publish a single subject-level raw→grade table. The
// official June 2024 grade-threshold PDFs give:
//   (a) per-COMPONENT notional thresholds (Components 03/11/12/21/22, max 80
//       each), and
//   (b) per-OPTION-COMBINATION overall thresholds (e.g. option "AR" = 03+11,
//       option "BS" = 12+22, …) on a 160 max - and these differ materially
//       between options (0990 grade 9 ranges 115-125 depending on the
//       combination; 0500 grade A ranges 100-106).
//
// The marking tool marks a single paper with an arbitrary max and has no
// signal for which Cambridge option/component combination a candidate sits,
// so there is no defensible single normalised curve to derive automatically.
// Per project policy we DO NOT guess: the predictor-facing thresholds are
// left `null` (Cambridge therefore stays gated and falls back to the clearly
// labelled AQA proxy with `indicativeOnly: true`).
//
// The official figures ARE transcribed below (audit + the human verifier's
// starting point). To make Cambridge live, a human must (1) decide the
// representative component/option combination to model, (2) populate the
// thresholds from the official PDF for that choice, and (3) flip `verified`.
//
// ── Official June 2024 figures (transcribed from sourceUrl PDFs) ─────────────
// 0990 (9-1) per-component, max 80, min raw for grade 9..1:
//   Comp 03: 69 64 59 54 49 44 34 25 16
//   Comp 11: 56 51 47 42 37 33 27 20 13
//   Comp 12: 52 48 45 41 38 35 28 20 12
//   Comp 21: 63 59 55 51 47 43 34 25 16
//   Comp 22: 63 59 55 51 47 43 34 25 16
//   0990 overall (max 160) varies by option, e.g.
//     AR(03,11): 125 115 106 96 86 77 61 45 29
//     BS(12,22): 115 107 100 92 85 78 61 44 28
// 0500 (A*-G) per-component, max 80, min raw for grade A..G:
//   Comp 03: 59 51 44 37 30 23 16
//   Comp 11: 47 40 33 28 23 18 13
//   Comp 12: 45 40 35 30 24 18 12
//   0500 overall (max 160) varies by option, e.g.
//     AR(03,11): A*=121 A=106 B=91 C=77 D=65 E=53 F=41 G=29
//     BS(12,22): A*=111 A=100 B=89 C=78 D=66 E=54 F=41 G=28
// ────────────────────────────────────────────────────────────────────────────

import type { BoardBoundaryTable, GradeThreshold, NumericGrade } from './types'
import { NUMERIC_GRADES } from './types'

const CAMBRIDGE_0990_SOURCE_URL =
  'https://www.cambridgeinternational.org/Images/716171-first-language-english-9-1-0990-june-2024-grade-threshold-table.pdf'

const CAMBRIDGE_0500_SOURCE_URL =
  'https://www.cambridgeinternational.org/Images/716122-first-language-english-oral-endorsement-0500-june-2024-grade-threshold-table.pdf'

/**
 * All-null thresholds: every grade is "unsourced for the predictor" so the
 * board stays gated. The official raw figures live in the file header /
 * exported audit records below - they are intentionally NOT auto-normalised
 * into these because the option-combination choice is a human decision.
 */
function provisionalNullThresholds(): GradeThreshold[] {
  return NUMERIC_GRADES.map((grade) => ({
    grade,
    pct: null,
    rawMark: null,
    rawMax: null,
  }))
}

/**
 * Official Cambridge 0990 (9-1) per-component min raw marks (max 80 each).
 * Audit record for the human verifier - not consumed at runtime.
 * TODO: verify against the official PDF and decide a representative
 * component before wiring into the predictor:
 *   https://www.cambridgeinternational.org/Images/716171-first-language-english-9-1-0990-june-2024-grade-threshold-table.pdf
 */
export const CAMBRIDGE_0990_COMPONENTS: Readonly<Record<string, Record<NumericGrade, number>>> = {
  'Component 03': {
    '9': 69,
    '8': 64,
    '7': 59,
    '6': 54,
    '5': 49,
    '4': 44,
    '3': 34,
    '2': 25,
    '1': 16,
  },
  'Component 11': {
    '9': 56,
    '8': 51,
    '7': 47,
    '6': 42,
    '5': 37,
    '4': 33,
    '3': 27,
    '2': 20,
    '1': 13,
  },
  'Component 12': {
    '9': 52,
    '8': 48,
    '7': 45,
    '6': 41,
    '5': 38,
    '4': 35,
    '3': 28,
    '2': 20,
    '1': 12,
  },
  'Component 21': {
    '9': 63,
    '8': 59,
    '7': 55,
    '6': 51,
    '5': 47,
    '4': 43,
    '3': 34,
    '2': 25,
    '1': 16,
  },
  'Component 22': {
    '9': 63,
    '8': 59,
    '7': 55,
    '6': 51,
    '5': 47,
    '4': 43,
    '3': 34,
    '2': 25,
    '1': 16,
  },
}

/**
 * Official Cambridge 0500 (A*-G) per-component min raw marks (max 80 each).
 * Audit record for the human verifier - not consumed at runtime. A*-G is not
 * directly comparable to the 9-1 scale the predictor emits, which is a second
 * reason 0500 stays gated.
 * TODO: verify against the official PDF and decide the A*-G → 9-1 mapping
 * before wiring into the predictor:
 *   https://www.cambridgeinternational.org/Images/716122-first-language-english-oral-endorsement-0500-june-2024-grade-threshold-table.pdf
 */
export const CAMBRIDGE_0500_COMPONENTS: Readonly<
  Record<string, Record<'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G', number>>
> = {
  'Component 03': { A: 59, B: 51, C: 44, D: 37, E: 30, F: 23, G: 16 },
  'Component 11': { A: 47, B: 40, C: 33, D: 28, E: 23, F: 18, G: 13 },
  'Component 12': { A: 45, B: 40, C: 35, D: 30, E: 24, F: 18, G: 12 },
  'Component 13': { A: 45, B: 39, C: 32, D: 27, E: 22, F: 17, G: 12 },
  'Component 21': { A: 55, B: 49, C: 43, D: 36, E: 30, F: 23, G: 16 },
  'Component 22': { A: 55, B: 49, C: 43, D: 36, E: 30, F: 23, G: 16 },
  'Component 23': { A: 55, B: 49, C: 43, D: 36, E: 30, F: 23, G: 16 },
}

/**
 * Cambridge IGCSE 0990 (9-1) - PROVISIONAL. Gated (all thresholds null) until
 * a human picks a representative component/option combination and verifies.
 */
export const cambridge0990Boundaries: BoardBoundaryTable = {
  board: 'cambridge-0990',
  qualification: 'Cambridge IGCSE First Language English 0990 (9-1)',
  series: 'June 2024',
  sourceUrl: CAMBRIDGE_0990_SOURCE_URL,
  retrievedAt: '2026-05-17',
  verified: false,
  note:
    'PROVISIONAL - option/component-combination dependent; no single ' +
    'normalised curve derivable automatically. Official per-component figures ' +
    'recorded in CAMBRIDGE_0990_COMPONENTS. Predictor stays gated (AQA proxy, ' +
    'indicativeOnly) until a human picks a representative combination, ' +
    'populates thresholds and flips verified.',
  thresholds: provisionalNullThresholds(),
}

/**
 * Cambridge IGCSE 0500 (A*-G) - PROVISIONAL. Gated (all thresholds null).
 * Also requires an A*-G → 9-1 mapping decision before it can feed the
 * 9-1 predictor.
 */
export const cambridge0500Boundaries: BoardBoundaryTable = {
  board: 'cambridge-0500',
  qualification: 'Cambridge IGCSE First Language English 0500 (A*-G)',
  series: 'June 2024',
  sourceUrl: CAMBRIDGE_0500_SOURCE_URL,
  retrievedAt: '2026-05-17',
  verified: false,
  note:
    'PROVISIONAL - A*-G scale (not directly comparable to the 9-1 grades the ' +
    'predictor emits) AND option/component-combination dependent. Official ' +
    'per-component figures recorded in CAMBRIDGE_0500_COMPONENTS. Predictor ' +
    'stays gated until a human decides the A*-G→9-1 mapping, populates ' +
    'thresholds and flips verified.',
  thresholds: provisionalNullThresholds(),
}

// TODO: Cambridge IGCSE Literature in English 0475 (A*-G) / 0992 (9-1) is not
// yet marked by this tool. When Literature mark schemes target Cambridge, add
// a verified table here from the official June 2024 (or later) threshold PDF:
//   https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/grade-threshold-tables/june-2024/
