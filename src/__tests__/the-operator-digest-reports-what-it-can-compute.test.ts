import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import {
  needsAttention,
  renderDigestText,
  type DigestFigures,
} from '@/app/api/cron/operator-digest/route'

/**
 * REL-4. The failure signals nobody read.
 *
 * `prisma.auditLog` is written by nineteen different actions and read in two
 * places, neither of which aggregates: a DSAR export of one user's own rows,
 * and a retention timestamp. So `USER_ERASURE_FAILED` - a GDPR erasure that did
 * not happen - was a row in a table nobody queries, and the operator guide's
 * daily loop asked a human to check these by hand before 07:00, which means
 * they were checked when somebody remembered.
 *
 * WHAT THESE TESTS GUARD. Not the numbers, which change daily and come from the
 * database. The two things that would make the digest worse than nothing:
 *
 *   1. A quiet digest that is quiet because it asked the wrong question. The
 *      `type` filter was written as 'DELETION' first and the enum has no such
 *      member - ACCESS, PORTABILITY, ERASURE, RECTIFICATION - so it would have
 *      reported zero outstanding erasure requests for ever, and the report
 *      would have been reassuring and wrong.
 *
 *   2. A digest read as broader than it is. It does not check Stripe, AI health
 *      or webhook freshness, and it says so in its own body, because "nothing
 *      outstanding" from a report covering five things reads exactly like
 *      "nothing outstanding" from one covering everything.
 */

const ROOT = process.cwd()
const ROUTE = readFileSync(join(ROOT, 'src/app/api/cron/operator-digest/route.ts'), 'utf8')

/** Every .ts/.tsx under src, for the "does anything write this?" checks. */
function walkSrc(dir = join(ROOT, 'src'), out: string[] = []): string[] {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, e.name)
    if (e.isDirectory()) walkSrc(full, out)
    else if (/\.tsx?$/.test(e.name)) out.push(full)
  }
  return out
}

const QUIET: DigestFigures = {
  openSafeguarding: 0,
  oldestSafeguardingDays: null,
  deliveryFailures24h: 0,
  erasureFailures24h: 0,
  pendingDsar: 0,
  oldestDsarDays: null,
  erasureRequestsOpen: 0,
}

describe('the subject line changes when something needs a human', () => {
  it('a quiet day needs nobody', () => {
    expect(needsAttention(QUIET)).toBe(false)
  })

  it.each([
    ['a safeguarding alert that reached nobody', { deliveryFailures24h: 1 }],
    ['an erasure that failed', { erasureFailures24h: 1 }],
    ['a safeguarding report still open', { openSafeguarding: 1 }],
    ['a data request three weeks old', { oldestDsarDays: 21 }],
  ])('%s does', (_label, patch) => {
    expect(needsAttention({ ...QUIET, ...patch })).toBe(true)
  })

  it('and a recent data request does not, because the clock is a month', () => {
    // The counterweight. Raising the alarm on day one would make every digest
    // urgent, and a digest that is always urgent is one nobody opens.
    expect(needsAttention({ ...QUIET, pendingDsar: 1, oldestDsarDays: 3 })).toBe(false)
  })
})

describe('the digest says what it does not cover', () => {
  const text = renderDigestText(QUIET, '2026-09-20')

  it.each([
    ['Stripe reconciliation', 'Stripe reconciliation'],
    ['the health crons', 'AI, marking and schema health'],
    ['webhook freshness', 'Webhook freshness'],
  ])('names %s as out of scope', (_label, phrase) => {
    expect(text).toContain(phrase)
  })

  it('and does not let a quiet report imply all is well', () => {
    // The sentence that stops this becoming a green tick.
    expect(text).toContain('particular numbers are quiet, not that everything is well')
  })

  it('while still reporting the figures it does have', () => {
    const busy = renderDigestText(
      {
        ...QUIET,
        openSafeguarding: 2,
        oldestSafeguardingDays: 9,
        pendingDsar: 1,
        oldestDsarDays: 4,
      },
      '2026-09-20',
    )
    expect(busy).toContain('Open reports: 2')
    expect(busy).toContain('oldest 9 days')
    expect(busy).toContain('Access requests pending: 1')
  })
})

describe('it asks the questions the schema can answer', () => {
  it('filters data requests on ERASURE, which is a real enum member', () => {
    // The bug that would have been silent. DataRequestType has no 'DELETION'.
    expect(ROUTE).toContain("r.type === 'ERASURE'")
    expect(ROUTE).not.toContain("r.type === 'DELETION'")
  })

  it('and the enum really has that member and not the other', () => {
    // Asserted against the schema rather than trusted, because the whole point
    // is that the first version of this compiled a constant zero.
    const schema = readFileSync(join(ROOT, 'prisma/schema.prisma'), 'utf8')
    const block = schema.slice(schema.indexOf('enum DataRequestType'))
    const members = block.slice(0, block.indexOf('}'))
    expect(members).toContain('ERASURE')
    expect(members).not.toContain('DELETION')
  })

  it.each(['SAFEGUARDING_ALERT_DELIVERY_FAILED', 'USER_ERASURE_FAILED'])(
    'counts %s, an action something actually writes',
    (action) => {
      // The same class of silence as the enum above. An audit action counted by
      // a name nothing writes returns zero for ever and reads as good news.
      // Searched across src for the literal, excluding this file and the digest
      // that reads it, so a match means a writer exists.
      const writers = walkSrc().filter((f) => {
        if (f.includes('operator-digest') || f.includes('__tests__')) return false
        return readFileSync(f, 'utf8').includes(action)
      })
      expect(writers.length, `nothing writes ${action}`).toBeGreaterThan(0)
    },
  )
})

describe('the email is opt-in, like the safeguarding cron before it', () => {
  it('sends only when a recipient is configured', () => {
    expect(ROUTE).toContain('process.env.OPERATOR_DIGEST_EMAIL')
    expect(ROUTE).toMatch(/if \(to\) \{/)
  })

  it('and logs the figures whether or not one is', () => {
    // An unset variable must mean the numbers still exist somewhere, rather
    // than the cron doing nothing at all.
    expect(ROUTE).toContain('console.log(`[operator-digest]')
  })

  it('and reports whether it managed to send', () => {
    expect(ROUTE).toContain('recipientConfigured')
    expect(ROUTE).toContain('emailed')
  })

  it('with no fallback address anywhere in the file', () => {
    // A mutation test caught this gap: asserting only that the env var is READ
    // still passes when somebody adds `?? 'someone@example.com'`, and the cron
    // would then start emailing a real person that nobody chose to notify.
    // Unset must mean silence, so the file may contain no address at all.
    const code = ROUTE.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')
    expect(code).not.toMatch(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/)
  })

  it('and no default applied to the recipient', () => {
    const code = ROUTE.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')
    expect(code).toContain('const to = process.env.OPERATOR_DIGEST_EMAIL')
    expect(code).not.toMatch(/OPERATOR_DIGEST_EMAIL\s*(\?\?|\|\|)/)
  })
})

describe('it is authorised and scheduled like every other cron', () => {
  it('refuses an unauthenticated request', () => {
    expect(ROUTE).toContain("authoriseCronRequest(request, 'operator-digest')")
    expect(ROUTE).toContain('if (!auth.ok) return auth.response')
  })

  it('runs through runCron, so a fault reaches Sentry', () => {
    expect(ROUTE).toContain("runCron('operator-digest'")
  })

  it('and is registered at 07:00, after the health crons it defers to', () => {
    const vercel = JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf8')) as {
      crons: { path: string; schedule: string }[]
    }
    const entry = vercel.crons.find((c) => c.path === '/api/cron/operator-digest')
    expect(entry, 'the digest is not registered as a cron').toBeDefined()
    expect(entry!.schedule).toBe('0 7 * * *')
    // The three it says it does not duplicate.
    for (const path of ['/api/health/ai', '/api/health/marking', '/api/health/schema']) {
      expect(
        vercel.crons.some((c) => c.path === path),
        `${path} is missing`,
      ).toBe(true)
    }
  })
})
