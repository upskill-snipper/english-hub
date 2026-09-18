import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { NextRequest } from 'next/server'
import {
  cachedSystemBlocks,
  cachedSystemBlock,
  renderSystemBlocks,
  MIN_CACHEABLE_PROMPT_CHARS,
  CACHEABLE_PREFIX_MIN_TOKENS,
} from '@/lib/ai/cached-system'
import { withArabicDirective } from '@/lib/i18n/ai-language-directive'
import { aiAuditTokenUsage } from '@/lib/ai-audit-log'
import { buildMarkingPrompt } from '@/lib/marking/prompt-builder'
import { getMarkScheme, listMarkSchemeIds } from '@/lib/marking/mark-schemes'

/**
 * Prompt caching on the marking spine (COST-5).
 *
 * THE DEFECT (19 September 2026). Four routes - /api/mark, /api/mark/stream,
 * /api/marking/run and the admin batch-draft route - sent the mark scheme as a
 * plain `system` string with no `cache_control` breakpoint. Between 1,247 and
 * 3,430 tokens of band descriptors, examiner persona, safety rules and JSON
 * contract were re-read and re-billed on every submission, including when a
 * whole batch was marked against one scheme back to back.
 *
 * The prompt was already split correctly for caching - stable half in `system`,
 * the student's essay in the user message - and nobody had placed the marker.
 *
 * WHAT THESE TESTS ARE FOR. Two of them are load-bearing in a way that is easy
 * to lose:
 *
 *   1. Byte-identity. Moving from a string to content blocks MUST NOT change
 *      what the model receives, or this stops being a billing change and
 *      becomes an unevaluated prompt change on a live children's marking path.
 *      The old concatenation put "\n\n" before the Arabic directive; the block
 *      form has to carry that separator itself, and nothing in the type system
 *      says so.
 *
 *   2. The cacheable floor. Below Sonnet 5's 1,024-token minimum the API does
 *      not error - it silently declines to cache and reports success. A future
 *      trim of the band descriptors would quietly turn the whole optimisation
 *      into a no-op. The smallest real prompt clears the floor by only ~200
 *      tokens, so the margin is asserted rather than assumed.
 */

function req(lang?: 'en' | 'ar'): NextRequest {
  return new NextRequest('http://localhost/api/mark', {
    headers: lang ? { 'x-lang': lang } : {},
  })
}

const SAMPLE = 'You are an experienced AQA examiner. Mark against the scheme below.'

// ─── 1. It is a billing change, not a prompt change ─────────────────────────

describe('what the model actually receives', () => {
  it.each([['en'], ['ar']] as const)('renders byte-identically to the old string in %s', (lang) => {
    const blocks = cachedSystemBlocks(SAMPLE, req(lang))
    expect(renderSystemBlocks(blocks)).toBe(withArabicDirective(SAMPLE, req(lang)))
  })

  it('keeps the blank-line separator the concatenation produced', () => {
    // Drop it and the directive fuses onto the last line of the JSON contract.
    // Byte-identity above would catch that too; this names the failure.
    const ar = renderSystemBlocks(cachedSystemBlocks(SAMPLE, req('ar')))
    expect(ar.startsWith(SAMPLE)).toBe(true)
    expect(ar.slice(SAMPLE.length).startsWith('\n\n')).toBe(true)
  })

  it('adds nothing at all for English', () => {
    expect(renderSystemBlocks(cachedSystemBlocks(SAMPLE, req('en')))).toBe(SAMPLE)
  })
})

// ─── 2. The breakpoint is where the saving is ───────────────────────────────

describe('the breakpoint', () => {
  it('sits on the stable prefix, not on the last block', () => {
    const blocks = cachedSystemBlocks(SAMPLE, req('ar'))
    expect(blocks).toHaveLength(2)
    expect(blocks[0].cache_control).toEqual({ type: 'ephemeral' })
    // If this moved to the directive block, AR and EN would write two separate
    // entries for the same question and the hit rate would halve for the one
    // audience the directive exists to serve.
    expect(blocks[1].cache_control).toBeUndefined()
  })

  it('gives Arabic and English the SAME cached prefix', () => {
    const en = cachedSystemBlocks(SAMPLE, req('en'))
    const ar = cachedSystemBlocks(SAMPLE, req('ar'))
    const prefixOf = (bs: ReturnType<typeof cachedSystemBlocks>) => {
      const cut = bs.findIndex((b) => b.cache_control)
      return bs
        .slice(0, cut + 1)
        .map((b) => b.text)
        .join('')
    }
    expect(prefixOf(ar)).toBe(prefixOf(en))
  })

  it('marks the English-only batch path too', () => {
    const blocks = cachedSystemBlock(SAMPLE)
    expect(blocks).toHaveLength(1)
    expect(blocks[0].cache_control).toEqual({ type: 'ephemeral' })
  })
})

// ─── 3. The floor, which fails silently when crossed ────────────────────────

describe('every real mark-scheme prompt', () => {
  const prompts: { key: string; chars: number }[] = []
  for (const id of listMarkSchemeIds()) {
    const scheme = getMarkScheme(id)
    if (!scheme) continue
    for (const q of scheme.questions) {
      try {
        const p = buildMarkingPrompt({
          scheme,
          questionId: q.id,
          questionText: 'q',
          essay: 'e',
        })
        prompts.push({ key: `${id}/${q.id}`, chars: p.systemPrompt.length })
      } catch {
        // Schemes whose question ids don't round-trip are a separate defect.
      }
    }
  }

  it('is long enough to be cacheable at all', () => {
    expect(prompts.length).toBeGreaterThan(50)
    const tooShort = prompts.filter((p) => p.chars < MIN_CACHEABLE_PROMPT_CHARS)
    expect(
      tooShort.map((p) => `${p.key} (${p.chars} chars)`),
      `these fall under Sonnet 5's ${CACHEABLE_PREFIX_MIN_TOKENS}-token floor, where the ` +
        'API silently declines to cache and still reports success',
    ).toEqual([])
  })
})

// ─── 4. The routes actually use it ──────────────────────────────────────────

describe('the marking routes', () => {
  const ROUTES = [
    'src/app/api/mark/route.ts',
    'src/app/api/mark/stream/route.ts',
    'src/app/api/marking/run/route.ts',
    'src/app/api/admin/marker-batches/[batchId]/draft/route.ts',
  ]

  /** Strip comments so a test never matches its own explanation. */
  function code(path: string): string {
    return readFileSync(join(process.cwd(), path), 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .split(/\r?\n/)
      .map((l) => l.replace(/\/\/.*$/, ''))
      .join('\n')
  }

  it.each(ROUTES)('%s sends cache-aware system blocks', (path) => {
    const src = code(path)
    expect(src).toMatch(/system: cachedSystemBlocks?\(/)
  })

  it.each(ROUTES)('%s no longer sends a bare system string', (path) => {
    const src = code(path)
    expect(src).not.toMatch(/system: withArabicDirective\(/)
    expect(src).not.toMatch(/system: prompt\.systemPrompt\b/)
  })

  it.each(ROUTES)('%s records the cache counters it is now billed on', (path) => {
    const src = code(path)
    expect(src).toContain('aiAuditTokenUsage(')
  })
})

// ─── 5. The telemetry that decides whether any of this pays ─────────────────

describe('cache accounting', () => {
  it('carries both cache counters through to the audit record', () => {
    expect(
      aiAuditTokenUsage({
        input_tokens: 120,
        output_tokens: 300,
        cache_read_input_tokens: 1_400,
        cache_creation_input_tokens: 0,
      }),
    ).toEqual({
      inputTokens: 120,
      outputTokens: 300,
      cacheReadTokens: 1_400,
      cacheCreationTokens: 0,
    })
  })

  it('distinguishes a zero hit from an absent one', () => {
    // 0 means "asked and got nothing from cache"; undefined means "the provider
    // told us nothing". Collapsing them would make a 0% hit rate unreadable.
    const absent = aiAuditTokenUsage({ input_tokens: 10, output_tokens: 20 })
    expect(absent.cacheReadTokens).toBeUndefined()
    expect(aiAuditTokenUsage({ cache_read_input_tokens: 0 }).cacheReadTokens).toBe(0)
  })

  it('treats an explicit null from the provider as absent', () => {
    const u = aiAuditTokenUsage({ cache_read_input_tokens: null })
    expect(u.cacheReadTokens).toBeUndefined()
  })
})
