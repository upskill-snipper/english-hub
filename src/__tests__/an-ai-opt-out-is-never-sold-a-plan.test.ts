import { describe, expect, it } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { AI_OPT_OUT_CODE, CONSENT_REFUSAL_CODES, isConsentRefusalCode } from '@/lib/consent-codes'
import { isAiOptOutRefusal, readConsentRefusal } from '@/components/consent/ai-consent-refusal'

/**
 * The AI opt-out refusal says what it is, so no page offers it a plan.
 *
 * THE DEFECT (12 October 2026). Every AI route answered an opted-out learner
 * with a 403 carrying no `code`, and the AI pages had just been changed to
 * read a 403 with no code as "not a subscriber". So a learner opted out on
 * another device (the browser's own flag unset) was shown "See plans" beside
 * "AI features are currently disabled". The opt-out now carries
 * 'ai_opted_out', which is deliberately NOT a consent code: the consent panel
 * must not open for it either.
 *
 * MUTATIONS RUN, each verified to have altered the file first: dropping the
 * code from /api/submissions fails the first case; adding 'ai_opted_out' to
 * CONSENT_REFUSAL_CODES fails the second.
 */

const root = process.cwd()

/** Source with comments removed, so a mention in a docblock does not count. */
function code(rel: string): string {
  return readFileSync(join(root, rel), 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
}

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) return name === '__tests__' ? [] : sourceFiles(full)
    return /\.tsx?$/.test(name) && !name.includes('.test.')
      ? [relative(root, full).replace(/\\/g, '/')]
      : []
  })
}

describe('every AI opt-out refusal', () => {
  const callers = sourceFiles(join(root, 'src'))
    .filter((f) => f !== 'src/lib/ai-preferences.ts')
    .filter((f) => /isAiOptedOutServer\(/.test(code(f)))

  it('carries the ai_opted_out code, at every call site', () => {
    expect(callers.length, 'expected the AI routes and the examiner gate').toBeGreaterThanOrEqual(
      14,
    )
    for (const file of callers) {
      const src = code(file)
      const calls = (src.match(/isAiOptedOutServer\(/g) ?? []).length
      const coded = (src.match(/code: AI_OPT_OUT_CODE/g) ?? []).length
      expect(coded, `${file}: ${calls} opt-out check(s), ${coded} coded refusal(s)`).toBe(calls)
    }
  })

  it('is not a consent code, so the consent panel never opens for it', () => {
    expect(Object.values(CONSENT_REFUSAL_CODES)).not.toContain(AI_OPT_OUT_CODE)
    expect(isConsentRefusalCode(AI_OPT_OUT_CODE)).toBe(false)
    const body = {
      error: 'AI features are currently disabled for your account.',
      code: AI_OPT_OUT_CODE,
    }
    expect(readConsentRefusal(403, body)).toBeNull()
    expect(isAiOptOutRefusal(403, body)).toBe(true)
  })

  it('is told apart from the plan paywall and from everything else', () => {
    expect(isAiOptOutRefusal(403, { error: 'AI marking is a Premium feature.' })).toBe(false)
    expect(isAiOptOutRefusal(403, { code: 'date_of_birth_required' })).toBe(false)
    expect(isAiOptOutRefusal(401, { code: AI_OPT_OUT_CODE })).toBe(false)
    expect(isAiOptOutRefusal(403, null)).toBe(false)
  })
})
