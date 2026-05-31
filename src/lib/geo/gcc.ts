// GCC + wider Muslim-majority country awareness.
//
// 2026-05-20 — cultural-sensitivity audit. Vercel forwards the resolved
// country in the `x-vercel-ip-country` header on every edge request.
// We use it to:
//   • surface Cambridge IGCSE 0500 / 0990 (English Language only, no
//     literature) as the recommended starting point for GCC-region
//     school visitors on /board-select, and
//   • suppress non-curriculum mature content on locale-aware surfaces.
//
// The list below covers the six Gulf Cooperation Council states + the
// wider Arab + Muslim-majority markets where the same cultural review
// applies. Region detection is best-effort: a missing or non-matching
// header simply means we render the default (UK-first) experience —
// nothing breaks, no exam-required content is ever hidden from any
// student.

import { headers } from 'next/headers'

// Strict GCC list — the six Gulf Cooperation Council states.
export const GCC_COUNTRIES = ['QA', 'SA', 'AE', 'KW', 'BH', 'OM'] as const
export type GccCountry = (typeof GCC_COUNTRIES)[number]

// Wider Arab League / Muslim-majority markets where the same cultural
// review applies. Includes the GCC plus other commonly-targeted markets
// for international schools sitting Cambridge / Edexcel IGCSE specs.
export const MUSLIM_MAJORITY_COUNTRIES = [
  ...GCC_COUNTRIES,
  // North Africa
  'EG', // Egypt
  'MA', // Morocco
  'TN', // Tunisia
  'DZ', // Algeria
  'LY', // Libya
  'SD', // Sudan
  // Levant
  'JO', // Jordan
  'LB', // Lebanon
  'SY', // Syria
  'IQ', // Iraq
  'PS', // Palestine
  'YE', // Yemen
  // South / South-East Asia (significant international-school market)
  'PK', // Pakistan
  'MY', // Malaysia
  'ID', // Indonesia
  'BD', // Bangladesh
  // Central Asia + Turkey
  'TR', // Turkey
  'KZ', // Kazakhstan
  'UZ', // Uzbekistan
  // Africa
  'NG', // Nigeria (significant Muslim cohort)
  'SN', // Senegal
] as const
export type MuslimMajorityCountry = (typeof MUSLIM_MAJORITY_COUNTRIES)[number]

/**
 * Read the resolved country code from the Vercel edge header.
 * Returns an upper-case ISO 3166-1 alpha-2 code, or null when not
 * available (e.g. local dev, non-Vercel host, header stripped).
 */
export async function getCountryCode(): Promise<string | null> {
  try {
    const h = await headers()
    const raw = h.get('x-vercel-ip-country')
    if (!raw) return null
    const trimmed = raw.trim().toUpperCase()
    return trimmed.length === 2 ? trimmed : null
  } catch {
    // Outside a request scope (e.g. fully static page at build time) —
    // fall back to the UK-first default experience.
    return null
  }
}

/** True when the resolved country is one of the six GCC states. */
export async function isGccVisitor(): Promise<boolean> {
  const cc = await getCountryCode()
  if (!cc) return false
  return (GCC_COUNTRIES as readonly string[]).includes(cc)
}

/**
 * True when the resolved country is any Muslim-majority market in
 * MUSLIM_MAJORITY_COUNTRIES. Use this for the wider cultural-review
 * audience (e.g. defaulting board picker recommendations) where the
 * same considerations as GCC apply.
 */
export async function isMuslimMajorityVisitor(): Promise<boolean> {
  const cc = await getCountryCode()
  if (!cc) return false
  return (MUSLIM_MAJORITY_COUNTRIES as readonly string[]).includes(cc)
}

/**
 * Cambridge IGCSE 0500 = English Language only (no literature) — the
 * board most commonly sat by international schools wanting to avoid
 * UK GCSE Literature set-text content. Surfaced as the recommended
 * starting point on /board-select for visitors from the regions above.
 *
 * 0990 is the same syllabus as 0500 with a different grading scale and
 * is equally suitable; we keep 0500 as the canonical recommendation
 * because it is the more widely sat of the two.
 */
export const GCC_RECOMMENDED_BOARD_ID = 'cambridge-0500' as const
