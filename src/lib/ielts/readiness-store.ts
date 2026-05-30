// ─── Readiness report input persistence (IELTS-8) ───────────────────────────
// The Candidate Readiness Report's SELF-REPORT answers (target band + the visa/
// finance + academic-transition + application questionnaire) are persisted to
// localStorage so a returning user keeps their report. The English-readiness
// half is NOT persisted here - it is recomputed on every load from the latest
// diagnostic + practice profile (the live, authoritative data).
//
// This mirrors the store.ts abstraction: every caller goes through
// get/saveReadinessInputs, so swapping localStorage for a server table later is
// a one-file change.
// ────────────────────────────────────────────────────────────────────────────

import { lsGet, lsSet } from '@/components/toolkit/toolkit-types'
import {
  defaultReadinessInputs,
  type AcademicTransitionReadinessInput,
  type ApplicationReadinessInput,
  type ReadinessInputs,
  type VisaFinanceReadinessInput,
} from './readiness'

const READINESS_INPUTS_KEY = 'english-hub-ielts-readiness-inputs'

/**
 * Load the saved report inputs, merged over defaults so a partially-saved or
 * older-shaped object never produces `undefined` fields (which would crash the
 * scoring). Returns sensible defaults when nothing is stored yet.
 */
export function getReadinessInputs(): ReadinessInputs {
  const stored = lsGet<Partial<ReadinessInputs> | null>(READINESS_INPUTS_KEY, null)
  const base = defaultReadinessInputs()
  if (!stored) return base
  return {
    target: stored.target ?? base.target,
    application: { ...base.application, ...(stored.application ?? {}) },
    visa: { ...base.visa, ...(stored.visa ?? {}) },
    academic: { ...base.academic, ...(stored.academic ?? {}) },
  }
}

export function saveReadinessInputs(inputs: ReadinessInputs): void {
  lsSet(READINESS_INPUTS_KEY, inputs)
}

/**
 * Additive helper: persist ONLY the visa & finance slice, leaving every other
 * saved answer (target, application, academic) untouched. This is what the
 * IELTS-10 Visa & Finance checklist tool calls so the Readiness Report's Visa &
 * Finance domain becomes tool-driven. Back-compatible: it loads the full saved
 * inputs (merged over defaults), swaps in the new visa slice, and re-saves.
 * Returns the merged inputs so the caller can recompute / reflect immediately.
 */
export function setVisaSlice(visa: VisaFinanceReadinessInput): ReadinessInputs {
  const current = getReadinessInputs()
  const next: ReadinessInputs = { ...current, visa }
  saveReadinessInputs(next)
  return next
}

/**
 * Additive helper: persist ONLY the academic-transition slice. This is what the
 * IELTS-11 Academic-transition modules tool calls so the Readiness Report's
 * Transition domain becomes tool-driven. Same back-compatible pattern as
 * `setVisaSlice`.
 */
export function setTransitionSlice(academic: AcademicTransitionReadinessInput): ReadinessInputs {
  const current = getReadinessInputs()
  const next: ReadinessInputs = { ...current, academic }
  saveReadinessInputs(next)
  return next
}

/**
 * Additive helper: merge the UCAS coach's per-question scores (0-5 each) into
 * the saved Application slice's `psScores`, leaving every other application
 * answer (course clarity, shortlist, referee, transcript, drafted flags) and
 * the other domains untouched. This is what the UCAS Personal-Statement Coach
 * calls after feedback returns so the Readiness Report's Application domain
 * becomes coach-driven (readiness.scoreApplication PREFERS psScores when
 * present, falling back to the self-report otherwise). Same back-compatible
 * load-merge-save pattern as setVisaSlice / setTransitionSlice.
 */
export function setApplicationPsScores(psScores: {
  q1?: number
  q2?: number
  q3?: number
}): ReadinessInputs {
  const current = getReadinessInputs()
  const application: ApplicationReadinessInput = {
    ...current.application,
    psScores: { ...current.application.psScores, ...psScores },
  }
  const next: ReadinessInputs = { ...current, application }
  saveReadinessInputs(next)
  return next
}
