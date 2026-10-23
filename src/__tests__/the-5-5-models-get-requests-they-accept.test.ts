// ─── The 5.5 models get requests they accept ───────────────────────────────
//
// 23 October 2026: the shared model moved to `claude-sonnet-5-5` and the
// examiner tool to `claude-opus-5-5` and `claude-haiku-5-5`. Three things
// about those models turn ordinary-looking requests into failures, and each
// was found with real calls before the switch:
//
//   1. They reject, with HTTP 400, a non-default temperature, disabled
//      thinking, a thinking budget and a forced tool choice. One such request
//      on the shared model would take every AI feature down again. (The gated
//      IELTS Task 2 engine sends two of them on its own models and is excluded
//      until it is rebuilt; its marker already fails on `claude-sonnet-5`.)
//   2. They think before replying by default, and the thinking counts against
//      `max_tokens`. Sonnet 5.5 spent all 2,000 of revision notes' tokens
//      thinking and wrote nothing, and hit 2,048 mid-answer on a feedback
//      route, so the small ceilings were raised and must stay raised.
//   3. An effort setting fixes (2) on the 5.5 models but is itself a 400 on
//      Haiku 4.5, Sonnet 4.5 and older, and every model id is env-overridable.
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi, afterEach } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

import { supportsEffort, effortFor } from '@/lib/anthropic-client'
import { estimateUsd } from '@/components/examiner/lib/run'

const ROOT = process.cwd()

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) return name === '__tests__' ? [] : walk(full)
    return /\.tsx?$/.test(name) && !/\.test\.tsx?$/.test(name) ? [full] : []
  })
}

/** Source without comments, so a docblock naming a parameter is not a hit. */
function code(file: string): string {
  return readFileSync(file, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:'"`])\/\/.*$/gm, '$1')
}

/** Every file that can reach the model outside the gated IELTS engine. */
const CALLERS = [...walk(join(ROOT, 'src/app/api')), ...walk(join(ROOT, 'src/lib'))].filter(
  (f) => !relative(ROOT, f).replace(/\\/g, '/').startsWith('src/lib/marking/engine/'),
)

describe('no request sends what the 5.5 models reject with a 400', () => {
  const REJECTED: Array<[string, RegExp]> = [
    ['a temperature', /\btemperature\s*:/],
    ['top_p or top_k', /\btop_[pk]\s*:/],
    ['a thinking budget', /\bbudget_tokens\b/],
    ['disabled thinking', /thinking\s*:\s*\{\s*type\s*:\s*['"]disabled['"]/],
    ['a forced tool choice', /tool_choice\s*:\s*\{\s*type\s*:\s*['"](tool|any)['"]/],
  ]

  // Only files that call the model: a record type with a `temperature` field
  // (src/lib/versioning/admin.ts) is not a request.
  const CALLING = CALLERS.filter((f) => /messages\.(create|stream)\(|v1\/messages/.test(code(f)))

  it('has callers to check, so the scan is not vacuous', () => {
    expect(CALLING.length).toBeGreaterThan(10)
  })

  it.each(REJECTED)('nothing outside the gated engine sends %s', (_what, pattern) => {
    const hits = CALLING.filter((f) => pattern.test(code(f))).map((f) => relative(ROOT, f))
    expect(hits).toEqual([])
  })
})

describe('a ceiling leaves room for thinking as well as the reply', () => {
  it('no inline max_tokens in an API route is below 2,000', () => {
    const small: string[] = []
    for (const f of walk(join(ROOT, 'src/app/api'))) {
      for (const m of code(f).matchAll(/max_tokens\s*:\s*([\d_]+)/g)) {
        const n = Number(m[1].replace(/_/g, ''))
        if (n < 2_000) small.push(`${relative(ROOT, f)}: ${n}`)
      }
    }
    expect(small).toEqual([])
  })
})

describe('an effort setting goes only to a model that accepts one', () => {
  it.each([
    'claude-sonnet-5-5',
    'claude-opus-5-5',
    'claude-haiku-5-5',
    'claude-sonnet-5',
    'claude-opus-5',
    'claude-sonnet-4-6',
    'claude-opus-4-5',
  ])('%s takes one', (model) => {
    expect(supportsEffort(model)).toBe(true)
    expect(effortFor(model, 'low')).toEqual({ output_config: { effort: 'low' } })
  })

  it.each([
    'claude-haiku-4-5-20251001',
    'claude-haiku-4-5',
    'claude-sonnet-4-5',
    'claude-sonnet-4-20250514',
    'claude-opus-4-1',
    'claude-3-5-sonnet-latest',
    'something-else',
  ])('%s gets nothing, because it would answer 400', (model) => {
    expect(supportsEffort(model)).toBe(false)
    expect(effortFor(model, 'low')).toEqual({})
  })
})

describe('the defaults are the 5.5 models', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  it('the shared model, when Vercel does not override it', async () => {
    vi.stubEnv('ANTHROPIC_MODEL', '')
    vi.resetModules()
    const { ANTHROPIC_MODEL } = await import('@/lib/anthropic-client')
    expect(ANTHROPIC_MODEL).toBe('claude-sonnet-5-5')
  })

  it('the examiner tool, with splitting decoupled from the gated engine', async () => {
    for (const k of ['EXAMINER_TRANSCRIBE_MODEL', 'EXAMINER_MARK_MODEL', 'EXAMINER_SPLIT_MODEL']) {
      vi.stubEnv(k, '')
    }
    vi.stubEnv('MARKING_CLASSIFIER_MODEL', 'claude-haiku-4-5-20251001')
    vi.resetModules()
    const { EXAMINER_MODELS, EXAMINER_MAX_TOKENS } = await import('@/lib/marking/examiner/models')
    expect(EXAMINER_MODELS).toEqual({
      transcribe: 'claude-opus-5-5',
      mark: 'claude-opus-5-5',
      split: 'claude-haiku-5-5',
    })
    expect(EXAMINER_MAX_TOKENS.split).toBeGreaterThanOrEqual(4_000)
  })

  it('transcription and marking still refuse a Haiku model', async () => {
    vi.stubEnv('EXAMINER_MARK_MODEL', 'claude-haiku-5-5')
    vi.resetModules()
    await expect(import('@/lib/marking/examiner/models')).rejects.toThrow(/must not be a Haiku/)
  })

  it('the page splitter asks for low effort', () => {
    const src = code(join(ROOT, 'src/app/api/examiner/split/route.ts'))
    expect(src).toMatch(/\.\.\.effortFor\(model, 'low'\)/)
  })

  it('revision notes ask for low effort', () => {
    const src = code(join(ROOT, 'src/app/api/toolkit/generate-notes/route.ts'))
    expect(src).toMatch(/\.\.\.effortFor\(ANTHROPIC_MODEL, 'low'\)/)
  })
})

describe('the examiner cost line prices the model it ran on', () => {
  const usage = { calls: 1, input: 1_000_000, output: 1_000_000, cacheRead: 0, cacheWrite: 0 }

  it.each([
    ['claude-opus-5-5', 24],
    ['claude-opus-5', 30],
    ['claude-sonnet-5-5', 12],
    ['claude-sonnet-4-6', 18],
    ['claude-haiku-5-5', 0.6],
    ['claude-haiku-4-5-20251001', 6],
  ])('%s: a million in and a million out is $%s', (model, dollars) => {
    expect(estimateUsd(usage, model as string)).toBeCloseTo(dollars as number, 5)
  })

  it('reads Opus 5.5 cache at 0.05 of input, its own discount', () => {
    const cached = { calls: 1, input: 0, output: 0, cacheRead: 1_000_000, cacheWrite: 0 }
    expect(estimateUsd(cached, 'claude-opus-5-5')).toBeCloseTo(0.2, 5)
    expect(estimateUsd(cached, 'claude-opus-5')).toBeCloseTo(0.5, 5)
  })
})
