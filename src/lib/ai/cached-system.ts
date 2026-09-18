// ─── Cached system prompts for the marking spine ─────────────────────────────
//
// WHY THIS EXISTS
// Every marking route sent its system prompt as a plain string with no
// `cache_control` breakpoint, so the mark scheme - 1,247 to 3,430 tokens of
// band descriptors, examiner persona, safety rules and the JSON contract - was
// re-read and re-billed at full price on every single submission, even when
// thirty students in the same lesson marked the same question against the same
// scheme within seconds of each other.
//
// The prompt was already split correctly for caching and nobody had used it:
// `buildMarkingPrompt` puts the STABLE half (scheme + bands + contract) in
// `system` and the VOLATILE half (question + the student's essay) in the user
// message. All that was missing was the breakpoint.
//
// ── THE MEASUREMENTS THIS RESTS ON (19 September 2026) ──────────────────────
// Counted with the real `POST /v1/messages/count_tokens` against
// `claude-sonnet-5`, over all 83 question-prompts the 21 schemes produce:
//
//     smallest   aqa-lang-paper2 Q1          3,229 chars   1,247 tokens
//     largest    ocr-lit-component02 Sec A   9,919 chars   3,430 tokens
//
// Sonnet 5's minimum cacheable prefix is 1,024 tokens. The SMALLEST prompt
// clears it by roughly 200 tokens - a real margin, but a thin one. Below the
// floor the API does not error: it silently declines to cache and reports
// success, so a future trim of the band descriptors would turn this whole
// module into a no-op with nothing to show for it. `prompt-cache.test.ts`
// asserts the margin in characters so that trim fails a test instead.
//
// ── WHY THE ARABIC DIRECTIVE IS A SEPARATE, UNCACHED BLOCK ──────────────────
// `withArabicDirective()` appends the Khaleeji directive to the END of the
// system prompt for AR users. Had we cached the concatenated string, AR and EN
// traffic for the same question would write and read two SEPARATE cache
// entries, halving the hit rate for the one audience the directive exists to
// serve.
//
// Instead the breakpoint goes on the base prompt and the directive follows it
// as an uncached suffix. The cached prefix is then byte-identical for both
// locales, so an Arabic submission can read an entry an English one wrote.
//
// The directive block carries the `\n\n` separator that the old string
// concatenation produced, so what the model actually receives is unchanged to
// the byte. That is not a detail to take on trust - `prompt-cache.test.ts`
// reconstructs the string from the blocks and asserts equality against
// `withArabicDirective()` itself.
//
// ── THE ECONOMICS, HONESTLY ─────────────────────────────────────────────────
// A cache WRITE costs 1.25x the base input price; a READ costs 0.1x. So this
// is not free money: it pays only above roughly a 22% hit rate, and below that
// it costs slightly more than doing nothing. On ~1,500 system tokens the
// amounts are sub-cent either way (a wasted write is about $0.0008), but the
// direction matters and it is traffic-dependent, so it must not be assumed.
//
// Where it certainly pays: `admin/marker-batches/[batchId]/draft`, which marks
// a whole batch against ONE scheme and question back to back - every response
// after the first is a hit. Where it may not: a lone learner marking one essay
// against a scheme nobody else touches for five minutes.
//
// Rather than guess, the routes now record `cache_read_input_tokens` and
// `cache_creation_input_tokens` into the AI-decision audit log (see
// `AiAuditTokenUsage`). The hit rate is therefore a number that can be queried,
// not a claim in a comment. If it settles below ~22%, delete the breakpoint.
// ────────────────────────────────────────────────────────────────────────────

import type Anthropic from '@anthropic-ai/sdk'
import type { NextRequest } from 'next/server'
import {
  KHALEEJI_LANGUAGE_DIRECTIVE,
  resolveLocaleFromRequest,
} from '@/lib/i18n/ai-language-directive'

/** The 5-minute ephemeral breakpoint. */
export const EPHEMERAL = { type: 'ephemeral' } as const

/**
 * Claude Sonnet 5's minimum cacheable prefix. A shorter prefix is NOT an
 * error - the API silently declines to cache it - which is why the guard in
 * the tests is a hard assertion rather than a runtime warning.
 */
export const CACHEABLE_PREFIX_MIN_TOKENS = 1_024

/**
 * Worst (densest) chars-per-token ratio measured across the 83 marking system
 * prompts on 19 September 2026: 9,919 chars / 3,430 tokens = 2.89. Mark-scheme
 * text tokenises far denser than ordinary prose because of the bullet and band
 * structure, so this is deliberately the pessimistic end of the observed range.
 */
export const MEASURED_CHARS_PER_TOKEN = 2.9

/**
 * The character length below which a system prompt can no longer be assumed to
 * clear {@link CACHEABLE_PREFIX_MIN_TOKENS}. 1,024 x 2.9 = 2,969, rounded up.
 */
export const MIN_CACHEABLE_PROMPT_CHARS = 2_970

/** The separator the old string concatenation put before the AR directive. */
export const DIRECTIVE_SEPARATOR = '\n\n'

/**
 * Build the `system` field for a marking request as cache-aware content blocks.
 *
 * Renders byte-identically to `withArabicDirective(systemPrompt, request)`, so
 * this is a billing change and not a prompt change. The only difference on the
 * wire is the `cache_control` breakpoint at the end of the stable prefix.
 *
 * @param systemPrompt The stable prompt - scheme, bands, rules, JSON contract.
 *                     Must NOT contain the learner's essay; that belongs in the
 *                     user message, both for caching and for the outbound
 *                     data-minimisation guard.
 * @param request Used only to resolve the locale for the directive suffix.
 */
export function cachedSystemBlocks(
  systemPrompt: string,
  request: NextRequest,
): Anthropic.TextBlockParam[] {
  const blocks: Anthropic.TextBlockParam[] = [
    { type: 'text', text: systemPrompt, cache_control: EPHEMERAL },
  ]

  // The directive sits AFTER the breakpoint on purpose: see the header. An AR
  // request then shares the cached prefix with every EN request for the same
  // question instead of maintaining a second entry of its own.
  if (resolveLocaleFromRequest(request) === 'ar') {
    blocks.push({ type: 'text', text: `${DIRECTIVE_SEPARATOR}${KHALEEJI_LANGUAGE_DIRECTIVE}` })
  }

  return blocks
}

/**
 * The same thing for paths with no request in hand (the admin batch-draft
 * route, which is English-only and marks a whole batch against one scheme -
 * the single highest-value caching case in the codebase).
 */
export function cachedSystemBlock(systemPrompt: string): Anthropic.TextBlockParam[] {
  return [{ type: 'text', text: systemPrompt, cache_control: EPHEMERAL }]
}

/**
 * Reconstruct what the model actually receives from a block list.
 *
 * Exists so tests can assert byte-identity against the old string-concatenation
 * behaviour rather than eyeballing it, and so a future editor can check the
 * rendering without reasoning about how the API joins blocks.
 */
export function renderSystemBlocks(blocks: readonly Anthropic.TextBlockParam[]): string {
  return blocks.map((b) => b.text).join('')
}
