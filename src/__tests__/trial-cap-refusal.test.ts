import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { refusalKindFor } from '@/lib/marking/refusal-kind'
import { allowanceExhaustedResponse } from '@/lib/api-response'

/**
 * When a trialist uses up the trial's AI checks.
 *
 * THE DEFECTS (found 10 November 2026).
 *  1. The essay page offered no way out of a 402: refusalKindFor knew 401 and
 *     403 only, so the one moment a learner has proved they want the paid
 *     feature showed a sentence and nothing to press.
 *  2. The sentence said the checks "renew on" a date. For the whole-trial
 *     bucket that date is the trial END, when nothing renews: the trial stops.
 */

const resetsAt = new Date('2026-11-14T00:00:00Z')

async function body(res: Response) {
  return (await res.json()) as Record<string, unknown>
}

describe('refusalKindFor', () => {
  it('offers plans when the trial allowance is spent', () => {
    expect(refusalKindFor(402, { code: 'free_allowance_exhausted' })).toBe('upgrade')
  })

  it('switches on the code, never on a bare 402', () => {
    expect(refusalKindFor(402, {})).toBeNull()
    expect(refusalKindFor(402, null)).toBeNull()
    expect(refusalKindFor(402, 'free_allowance_exhausted')).toBeNull()
  })

  it('keeps what it did before for 401, 403 and the AI opt-out', () => {
    expect(refusalKindFor(401, {})).toBe('signin')
    expect(refusalKindFor(403, {})).toBe('upgrade')
    expect(refusalKindFor(403, { code: 'ai_opted_out' })).toBeNull()
    expect(refusalKindFor(500, {})).toBeNull()
  })
})

describe('allowanceExhaustedResponse', () => {
  it('does not say the whole trial renews', async () => {
    const res = allowanceExhaustedResponse({ used: 40, limit: 40, resetsAt, scope: 'trial' })
    const b = await body(res)
    expect(res.status).toBe(402)
    expect(String(b.error)).toContain('free trial')
    expect(String(b.error)).not.toMatch(/renew/i)
  })

  it('says the daily trial cap renews, because it does', async () => {
    const b = await body(
      allowanceExhaustedResponse({ used: 15, limit: 15, resetsAt, scope: 'trial-daily' }),
    )
    expect(String(b.error)).toContain("today's 15 AI checks")
    expect(String(b.error)).toMatch(/renew/)
  })

  it('keeps the code clients switch on, and only adds scope', async () => {
    const b = await body(
      allowanceExhaustedResponse({ used: 40, limit: 40, resetsAt, scope: 'trial' }),
    )
    expect(b.code).toBe('free_allowance_exhausted')
    expect(b.scope).toBe('trial')
    expect(b.upgradeUrl).toBe('/pricing')
  })

  it('leaves the free allowance sentence as it was', async () => {
    const b = await body(allowanceExhaustedResponse({ used: 3, limit: 3, resetsAt }))
    expect(String(b.error)).toContain('They renew on')
    expect(b.scope).toBeUndefined()
  })
})

describe('the trial meter names its bucket', () => {
  const src = readFileSync(join(process.cwd(), 'src/lib/usage/trial-allowance.ts'), 'utf8')

  it('marks the daily cap and the whole-trial cap separately', () => {
    expect(src).toContain("allowanceExhaustedResponse({ ...daily, scope: 'trial-daily' })")
    expect(src).toContain("allowanceExhaustedResponse({ ...whole, scope: 'trial' })")
  })
})

describe('the essay page', () => {
  const src = readFileSync(join(process.cwd(), 'src/app/marking/submit/page.tsx'), 'utf8')

  it('uses the shared refusalKindFor rather than a private copy', () => {
    expect(src).toContain("from '@/lib/marking/refusal-kind'")
    expect(src).not.toMatch(/function refusalKindFor/)
  })
})
