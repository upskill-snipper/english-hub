/**
 * Machine-readable reasons an AI action can be refused by the consent gate.
 *
 * WHY THIS FILE EXISTS
 *
 * Until now the only thing a refused AI call carried was an English sentence
 * in `error`. A client that wanted to help the learner out of the block had
 * to match on prose, and 403 is also returned for "not a subscriber" and for
 * the Children's Code AI opt-out, so there was no safe way to tell those
 * apart. The inline consent prompt must appear for a missing AI-processing
 * consent and for nothing else, so the reason is now a stable code.
 *
 * This module has NO imports on purpose: it is read by the server gate
 * (src/lib/consent-check.ts) and by client components, and a single source
 * of truth is only worth having if both sides can actually import it.
 *
 * The values are part of the API contract. Add codes; do not rename them.
 */

export const CONSENT_REFUSAL_CODES = {
  /** No active AI_PROCESSING consent on the ledger. The learner can fix this themselves. */
  AI_PROCESSING_REQUIRED: 'ai_processing_consent_required',
  /** A child whose guardian has not approved. The learner must NOT be offered a self-grant. */
  PARENTAL_CONSENT_REQUIRED: 'parental_consent_required',
  /** We hold no usable date of birth, so age is unknown and unknown age blocks. */
  DATE_OF_BIRTH_REQUIRED: 'date_of_birth_required',
} as const

export type ConsentRefusalCode = (typeof CONSENT_REFUSAL_CODES)[keyof typeof CONSENT_REFUSAL_CODES]

const ALL_CODES: readonly string[] = Object.values(CONSENT_REFUSAL_CODES)

/** True only for a code this build knows about. Anything else is not a consent refusal. */
export function isConsentRefusalCode(value: unknown): value is ConsentRefusalCode {
  return typeof value === 'string' && ALL_CODES.includes(value)
}
