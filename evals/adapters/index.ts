// ─── Marker adapters ─────────────────────────────────────────────────────────
// Pluggable markers for the Art. 15 harness. The metrics/reporting code is
// adapter-agnostic; selecting an adapter selects WHAT is being measured:
//
//   • examinerReplayAdapter — deterministic boundary-model baseline (offline,
//     always CI-safe; does NOT measure the LLM).
//   • llmMarkerAdapter      — the real production marking path; offline fixture
//     replay by default, opt-in live Anthropic via env. The only adapter that
//     can produce a defensible LLM-accuracy figure (and only on real data —
//     enforced by the run.ts gate).
// ────────────────────────────────────────────────────────────────────────────

export type { MarkerAdapter, MarkOutcome } from '../types'
export { examinerReplayAdapter } from './examiner-replay'
export { llmMarkerAdapter, fixtureKey, EVAL_MODEL } from './llm-marker'

import { examinerReplayAdapter } from './examiner-replay'
import { llmMarkerAdapter } from './llm-marker'
import type { MarkerAdapter } from '../types'

/**
 * Resolve the adapter selected by `EVAL_ADAPTER`:
 *   - "examiner-replay" (default) → deterministic boundary baseline
 *   - "llm"                        → production LLM path (fixture/live)
 */
export function resolveAdapter(name: string | undefined = process.env.EVAL_ADAPTER): MarkerAdapter {
  switch ((name ?? 'examiner-replay').trim().toLowerCase()) {
    case 'llm':
    case 'llm-marker':
      return llmMarkerAdapter
    case 'examiner-replay':
    case '':
    case undefined:
      return examinerReplayAdapter
    default:
      throw new Error(`Unknown EVAL_ADAPTER "${name}". Use "examiner-replay" or "llm".`)
  }
}
