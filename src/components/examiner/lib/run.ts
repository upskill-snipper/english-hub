// ─── Examiner tool - the run: transcribe (twice) then mark ──────────────────
//
// Shared by the single-script panel and the bulk panel so both do exactly the
// same thing per candidate. The caller supplies page images (already
// processed) or a typed response, and receives progress callbacks it can paint
// however it likes.
// ────────────────────────────────────────────────────────────────────────────

import { transcriptStats } from '@/lib/marking/examiner/engine'
import type { ExtractedMark } from '@/lib/marking/examiner/types'
import { batchPages, renumberPages } from './images'
import { postJson, readSse } from './sse'

/** Keep well inside the route's 4.2 MB body ceiling. */
const BATCH_BYTES = 3_600_000
const BATCH_PAGES = 12

export interface TranscribeDone extends Record<string, unknown> {
  text: string
  notes: string
  truncated: boolean
  /** False when a checking pass did not run (the first pass stands). */
  verified: boolean
  stats: { doubtful: number; illegible: number; words: number }
  usage: { input: number; output: number; cacheRead: number; cacheWrite: number }
  model: string
}

export interface MarkDone extends Record<string, unknown> {
  commentary: string
  mark: ExtractedMark | null
  truncated: boolean
  usage: { input: number; output: number; cacheRead: number; cacheWrite: number }
  model: string
}

export interface Usage {
  calls: number
  input: number
  output: number
  cacheRead: number
  cacheWrite: number
}

export function emptyUsage(): Usage {
  return { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0 }
}

export function addUsage(u: Usage, more: TranscribeDone['usage']): void {
  u.calls++
  u.input += more.input
  u.output += more.output
  u.cacheRead += more.cacheRead
  u.cacheWrite += more.cacheWrite
}

export interface TranscribeOptions {
  packId: string
  /** Base64 JPEG per page, in order. */
  pages: readonly string[]
  /** Run the checking pass. */
  verify: boolean
  onProgress: (label: string, streamed: string) => void
  usage?: Usage
  signal?: AbortSignal
}

export interface TranscribeResult {
  text: string
  notes: string
  truncated: boolean
  model: string
  stats: ReturnType<typeof transcriptStats>
  changedInVerify: boolean
  /** True only if every requested checking pass actually ran. */
  verified: boolean
}

async function transcribeBatch(
  packId: string,
  pages: readonly string[],
  pass: 1 | 2,
  prior: { text: string; notes: string } | undefined,
  onDelta: (t: string) => void,
  signal?: AbortSignal,
): Promise<TranscribeDone> {
  const res = await postJson('/api/examiner/transcribe', { packId, pages, pass, prior }, signal)
  return readSse<TranscribeDone>(res, (acc) => onDelta(acc))
}

/**
 * Transcribe a script in as many batches as the body ceiling requires, then
 * optionally run the checking pass per batch. Page markers are renumbered so
 * the joined transcript counts continuously.
 */
export async function transcribeScript(opts: TranscribeOptions): Promise<TranscribeResult> {
  const batches = batchPages(opts.pages, BATCH_BYTES, BATCH_PAGES)
  const texts: string[] = []
  const notes: string[] = []
  let truncated = false
  let model = ''
  let changed = false
  let verified = true
  let offset = 0
  const many = batches.length > 1

  for (let b = 0; b < batches.length; b++) {
    const batch = batches[b]!
    const where = many ? ` (pages ${offset + 1}-${offset + batch.length})` : ''
    const first = await transcribeBatch(
      opts.packId,
      batch,
      1,
      undefined,
      (t) => opts.onProgress(`Reading the handwriting${where}`, t),
      opts.signal,
    )
    if (opts.usage) addUsage(opts.usage, first.usage)
    let result = first
    if (opts.verify) {
      const second = await transcribeBatch(
        opts.packId,
        batch,
        2,
        { text: first.text, notes: first.notes },
        (t) => opts.onProgress(`Checking the transcript against the pages${where}`, t),
        opts.signal,
      )
      if (opts.usage) addUsage(opts.usage, second.usage)
      if (second.text !== first.text) changed = true
      if (!second.verified) verified = false
      result = second
    }
    texts.push(renumberPages(result.text, offset))
    if (result.notes && !/^none\.?$/i.test(result.notes.trim())) {
      notes.push(many ? renumberPages(result.notes, offset) : result.notes)
    }
    truncated = truncated || result.truncated
    model = result.model
    offset += batch.length
  }

  const text = texts.join('\n\n')
  return {
    text,
    notes: notes.join('\n'),
    truncated,
    model,
    stats: transcriptStats(text),
    changedInVerify: changed,
    verified: opts.verify && verified,
  }
}

export interface MarkOptions {
  packId: string
  questionId: string
  schemeText: string
  response: string
  notes: string
  pageCount: number
  onProgress: (streamed: string) => void
  usage?: Usage
  signal?: AbortSignal
}

export async function markResponse(opts: MarkOptions): Promise<MarkDone> {
  const res = await postJson(
    '/api/examiner/mark',
    {
      packId: opts.packId,
      questionId: opts.questionId,
      schemeText: opts.schemeText,
      response: opts.response,
      notes: opts.notes,
      pageCount: opts.pageCount,
    },
    opts.signal,
  )
  const done = await readSse<MarkDone>(res, (acc) => opts.onProgress(acc))
  if (opts.usage) addUsage(opts.usage, done.usage)
  return done
}

/**
 * List prices in US dollars per million tokens, first match wins. Until
 * 23 October 2026 this priced every Opus as Opus 5 and everything that was not
 * Opus or Sonnet as Haiku 4.5, so moving the tool to Opus 5.5 and Haiku 5.5
 * would have shown teachers a cost a quarter too high for marking and ten times
 * too high for splitting. `cacheRead` is the cache-read multiple of the input
 * price (0.05 on Opus 5.5, 0.1 elsewhere); cache writes are 1.25 on all.
 */
const PRICES: ReadonlyArray<{ match: RegExp; input: number; output: number; cacheRead: number }> = [
  { match: /opus-5-5/i, input: 4, output: 20, cacheRead: 0.05 },
  { match: /opus/i, input: 5, output: 25, cacheRead: 0.1 },
  { match: /sonnet-[5-9]/i, input: 2, output: 10, cacheRead: 0.1 },
  { match: /sonnet/i, input: 3, output: 15, cacheRead: 0.1 },
  // Haiku 5.5's rate for prompts of up to 100,000 tokens, which a page is.
  { match: /haiku-5-5/i, input: 0.1, output: 0.5, cacheRead: 0.1 },
  { match: /haiku/i, input: 1, output: 5, cacheRead: 0.1 },
]

/**
 * Rough cost of a session in US dollars at list prices, for the usage line.
 * Deliberately approximate and labelled as such in the UI.
 */
export function estimateUsd(u: Usage, model: string): number {
  const p = PRICES.find((x) => x.match.test(model)) ?? PRICES[1]
  return (
    (u.input * p.input +
      u.cacheWrite * p.input * 1.25 +
      u.cacheRead * p.input * p.cacheRead +
      u.output * p.output) /
    1e6
  )
}
