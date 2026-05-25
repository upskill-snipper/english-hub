// ─── IELTS band utilities ──────────────────────────────────────────────────
// Academic raw-score → band conversion + band aggregation/rounding.
//
// NOTE: the Listening/Reading conversion tables are INDICATIVE. Official band
// boundaries vary slightly between live test versions; these are the widely
// published Academic approximations and are good enough for practice-time
// prediction. Always present predicted bands as estimates, never guarantees.
// ────────────────────────────────────────────────────────────────────────────

import type { Band, IeltsTrack } from './types'

// correct-out-of-40 → band. Read top-down; first threshold met wins.
const READING_ACADEMIC: [number, Band][] = [
  [39, 9],
  [37, 8.5],
  [35, 8],
  [33, 7.5],
  [30, 7],
  [27, 6.5],
  [23, 6],
  [19, 5.5],
  [15, 5],
  [13, 4.5],
  [10, 4],
  [8, 3.5],
  [6, 3],
  [4, 2.5],
  [3, 2],
  [1, 1],
  [0, 0],
]

const LISTENING: [number, Band][] = [
  [39, 9],
  [37, 8.5],
  [35, 8],
  [32, 7.5],
  [30, 7],
  [26, 6.5],
  [23, 6],
  [18, 5.5],
  [16, 5],
  [13, 4.5],
  [10, 4],
  [8, 3.5],
  [6, 3],
  [4, 2.5],
  [3, 2],
  [1, 1],
  [0, 0],
]

// General Training Reading boundaries (indicative). GT texts are easier, so more
// correct answers are needed for the same band than Academic. Listening is the
// same table for both tracks.
const READING_GENERAL: [number, Band][] = [
  [40, 9],
  [39, 8.5],
  [37, 8],
  [36, 7.5],
  [34, 7],
  [32, 6.5],
  [30, 6],
  [27, 5.5],
  [23, 5],
  [19, 4.5],
  [15, 4],
  [12, 3.5],
  [9, 3],
  [6, 2.5],
  [3, 2],
  [1, 1],
  [0, 0],
]

function lookup(table: [number, Band][], correctOutOf40: number): Band {
  for (const [threshold, band] of table) {
    if (correctOutOf40 >= threshold) return band
  }
  return 0
}

/**
 * Convert a Listening/Reading raw score to a band. Tests with a question count
 * other than 40 (e.g. a short practice set) are first scaled to a /40-equivalent
 * so the mapping still makes sense.
 */
export function objectiveToBand(
  skill: 'listening' | 'reading',
  correct: number,
  total: number,
  track: IeltsTrack = 'academic',
): Band {
  if (total <= 0) return 0
  const scaled = Math.round((Math.max(0, Math.min(correct, total)) / total) * 40)
  if (skill === 'listening') return lookup(LISTENING, scaled)
  return lookup(track === 'general' ? READING_GENERAL : READING_ACADEMIC, scaled)
}

const BAND_STEPS: Band[] = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,
]

/** Round any raw average to the nearest valid band (0.5 steps). */
export function roundToBand(value: number): Band {
  const clamped = Math.max(0, Math.min(9, value))
  let nearest: Band = 0
  let best = Infinity
  for (const b of BAND_STEPS) {
    const d = Math.abs(b - clamped)
    if (d < best) {
      best = d
      nearest = b
    }
  }
  return nearest
}

/**
 * Overall band = mean of the four skill bands, rounded by the official IELTS
 * rule: a fractional part of .25 rounds up to the next half band; .75 rounds
 * up to the next whole band. Returns null until all four bands are present.
 */
export function overallBand(bands: (Band | null)[]): Band | null {
  const valid = bands.filter((b): b is Band => typeof b === 'number')
  if (valid.length < 4) return null
  const mean = valid.reduce<number>((sum, b) => sum + b, 0) / valid.length
  const floor = Math.floor(mean)
  const frac = mean - floor
  let result: number
  if (frac < 0.25) result = floor
  else if (frac < 0.75) result = floor + 0.5
  else result = floor + 1
  return roundToBand(result)
}

/** Display a band as "7", "6.5", or "-" when not yet assessed. */
export function bandLabel(band: Band | null): string {
  if (band === null) return '-'
  return band % 1 === 0 ? String(band) : band.toFixed(1)
}

/** Plain-English / CEFR-ish tier for the "starter → exam-ready" framing. */
export function bandTier(band: Band | null): string {
  if (band === null) return 'Not yet assessed'
  if (band >= 8) return 'Very good to expert user (C1-C2)'
  if (band >= 7) return 'Good user (C1)'
  if (band >= 6) return 'Competent user (B2)'
  if (band >= 5) return 'Modest user (B1)'
  if (band >= 4) return 'Limited user (A2-B1)'
  return 'Foundation (A1-A2)'
}

/** Colour helpers for band chips (Tailwind classes), matching site palette. */
export function bandColour(band: Band | null): string {
  if (band === null) return 'text-muted-foreground'
  if (band >= 7.5) return 'text-amber-500'
  if (band >= 6.5) return 'text-emerald-500'
  if (band >= 5) return 'text-sky-500'
  return 'text-rose-500'
}

export function bandBgColour(band: Band | null): string {
  if (band === null) return 'bg-muted/30 border-border'
  if (band >= 7.5) return 'bg-amber-500/10 border-amber-500/25'
  if (band >= 6.5) return 'bg-emerald-500/10 border-emerald-500/25'
  if (band >= 5) return 'bg-sky-500/10 border-sky-500/25'
  return 'bg-rose-500/10 border-rose-500/25'
}
