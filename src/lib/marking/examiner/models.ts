// ─── Examiner Marking Tool - model tiers ────────────────────────────────────
//
// Three jobs, three swap points, all env-overridable so a retired model id can
// be recovered from Vercel settings without a deploy (the lesson of the two
// 2026 model-retirement outages recorded in src/lib/anthropic-client.ts).
//
//   transcribe - reads photographed handwriting. A misread word changes the
//                candidate's AO5 (spelling and punctuation) mark, so this
//                defaults to the most capable tier. It runs twice per script:
//                a first pass and a checking pass over the same pages, which
//                the prompt cache turns into one full-price image read.
//   mark       - awards the mark and writes the commentary. A misjudged level
//                changes the grade, so the same tier.
//   split      - looks at one page of a bulk scan and says whether it starts a
//                new candidate's script. A mistake is visible and one click to
//                fix, so this is the one job where the cheapest tier is right.
//
// Cost note for the owner: at the defaults a typical four-page handwritten
// script costs roughly 15 to 20 US cents to transcribe twice and mark; a class
// of thirty is roughly five to six dollars. The per-teacher monthly ceiling in
// src/lib/usage/limits.ts (examinerScriptsMonthly) is what bounds it, and it
// is changeable live in AppConfigSetting. Set EXAMINER_TRANSCRIBE_MODEL and
// EXAMINER_MARK_MODEL to claude-sonnet-5 to run at roughly 40% of that cost.
// ────────────────────────────────────────────────────────────────────────────

import { MARKING_MODELS } from '@/lib/marking/engine/models'

function assertNotHaiku(id: string, which: string): string {
  if (/haiku/i.test(id)) {
    throw new Error(
      `[examiner/models] ${which} must not be a Haiku-class model (${id}). Transcription and marking need the accuracy tier.`,
    )
  }
  return id
}

export const EXAMINER_MODELS = {
  transcribe: assertNotHaiku(
    process.env.EXAMINER_TRANSCRIBE_MODEL || 'claude-opus-5',
    'EXAMINER_TRANSCRIBE_MODEL',
  ),
  mark: assertNotHaiku(process.env.EXAMINER_MARK_MODEL || 'claude-opus-5', 'EXAMINER_MARK_MODEL'),
  split: process.env.EXAMINER_SPLIT_MODEL || MARKING_MODELS.classifier,
} as const

/** Output ceilings. Streaming, so these are room rather than a target. */
export const EXAMINER_MAX_TOKENS = {
  transcribe: 32_000,
  mark: 16_000,
  split: 1_000,
} as const

/** Hard input bounds enforced by the routes. */
export const EXAMINER_BOUNDS = {
  /** Pages per transcription call. Vercel's request body ceiling is the real limit. */
  maxPagesPerCall: 12,
  /** Base64 JPEG bytes per page after the client has resized it. */
  maxPageBytes: 1_500_000,
  /** Whole request body, comfortably inside the 4.5 MB serverless limit. */
  maxBodyBytes: 4_200_000,
  maxSchemeChars: 60_000,
  maxResponseChars: 60_000,
  maxNotesChars: 8_000,
} as const
