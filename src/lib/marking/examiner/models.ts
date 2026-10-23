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
// EXAMINER_MARK_MODEL to claude-sonnet-5-5 to run at roughly half that cost.
//
// 2026-10-23, at Calum's request: transcribe and mark moved from
// `claude-opus-5` to `claude-opus-5-5` (20% cheaper per token, so the figures
// above are now an upper bound), and split from the marking engine's
// classifier (`claude-haiku-4-5`) to `claude-haiku-5-5`. Split no longer
// borrows the engine's classifier constant: the engine (the gated IELTS Task 2
// route) was left on its own models, and the two have no reason to move
// together. Opus 5.5 always thinks and defaults to `medium` effort, one level
// below Opus 5's default; Anthropic's guidance is that Opus 5.5 at `medium`
// matches or beats Opus 5 at `high`. The routes already read replies by block
// type and the streaming helper already handles a refusal with the
// server-side fallback (src/lib/marking/examiner/stream.ts).
// ────────────────────────────────────────────────────────────────────────────

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
    process.env.EXAMINER_TRANSCRIBE_MODEL || 'claude-opus-5-5',
    'EXAMINER_TRANSCRIBE_MODEL',
  ),
  mark: assertNotHaiku(process.env.EXAMINER_MARK_MODEL || 'claude-opus-5-5', 'EXAMINER_MARK_MODEL'),
  split: process.env.EXAMINER_SPLIT_MODEL || 'claude-haiku-5-5',
} as const

/**
 * Output ceilings. Streaming, so these are room rather than a target.
 *
 * `split` was 1,000, sized for Haiku 4.5, which only thinks when asked. Haiku
 * 5.5 thinks by default and its thinking counts against this ceiling. The split
 * route now asks for low effort (through effortFor, which sends nothing to a
 * model that cannot take it), so it writes about 100 tokens, but 4,000 keeps
 * room should a page make it think.
 */
export const EXAMINER_MAX_TOKENS = {
  transcribe: 32_000,
  mark: 16_000,
  split: 4_000,
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
