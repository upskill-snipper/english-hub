import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { lookup } from '@/lib/i18n/dictionary'

/**
 * The public AI-governance page must name the model provider we really call.
 *
 * /legal/ai-governance section 9 read "third-party large language models
 * (currently OpenAI and Anthropic APIs)". There is no OpenAI code path
 * anywhere in src/: no OpenAI SDK dependency, no api.openai.com request and
 * no GPT model string. The only provider called is Anthropic, through
 * src/lib/anthropic-client.ts and the toolkit route's direct fetch to
 * api.anthropic.com. Naming a processor that does not process is a false
 * disclosure on a page that schools and parents read as a commitment.
 *
 * These tests pin the corrected wording in all three shipped locales and
 * make the underlying fact - one provider, Anthropic - checkable from the
 * code rather than from memory.
 */

const ROOT = process.cwd()
const KEY = 'legal_long.ai_gov.s9.p1'

describe('AI provider disclosure', () => {
  it('names Anthropic, and no provider we do not call, in every locale', () => {
    for (const locale of ['en', 'ar', 'es'] as const) {
      const value = lookup(KEY, locale)
      expect(value).toContain('Anthropic')
      expect(value).not.toMatch(/OpenAI/i)
      expect(value).not.toMatch(/\bGPT\b/i)
    }
  })

  it('the English wording still describes it as a current, changeable choice', () => {
    const en = lookup(KEY, 'en')
    expect(en).toContain('currently')
    expect(en).toContain('subject to change')
  })

  it('the shipped client locale maps carry no reference to an unused provider', () => {
    // The pages render from these generated maps, not from the dictionary
    // shards, so this is the file a learner's browser actually receives.
    const dir = join(ROOT, 'src/lib/i18n/generated')
    const maps = readdirSync(dir).filter((f) => f.endsWith('.ts'))
    expect(maps.length).toBeGreaterThan(0)
    for (const file of maps) {
      expect(readFileSync(join(dir, file), 'utf8')).not.toMatch(/OpenAI/i)
    }
  })

  it('no OpenAI client exists in the product, which is why the claim was wrong', () => {
    const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')) as {
      dependencies?: Record<string, string>
      devDependencies?: Record<string, string>
    }
    const deps = { ...pkg.dependencies, ...pkg.devDependencies }
    expect(Object.keys(deps)).not.toContain('openai')
    expect(Object.keys(deps)).toContain('@anthropic-ai/sdk')
  })
})
