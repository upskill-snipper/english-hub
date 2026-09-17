import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { authoriseCronRequest, secretsMatch, readPresentedSecret } from '@/lib/cron/auth'

/**
 * Shared cron authentication.
 *
 * Two defects from the 17 September 2026 audit are pinned here:
 *
 *   - `/api/cron/trustpilot-followup-7d` and `/api/cron/trustpilot-retention-90d`
 *     exported only POST and read only `x-cron-secret`. Vercel Cron issues a
 *     GET with `Authorization: Bearer $CRON_SECRET`, so every scheduled run
 *     since 19 April 2026 was answered 405 and no invite was ever sent.
 *   - Three routes called `timingSafeEqual` without a length guard. It
 *     THROWS on unequal lengths, so a wrong-length secret produced a 500
 *     instead of an honest 401.
 */

const ORIGINAL = process.env.CRON_SECRET

function headers(init: Record<string, string>): Headers {
  return new Headers(init)
}

beforeEach(() => {
  process.env.CRON_SECRET = 'correct-horse-battery-staple'
})

afterEach(() => {
  if (ORIGINAL === undefined) delete process.env.CRON_SECRET
  else process.env.CRON_SECRET = ORIGINAL
  vi.restoreAllMocks()
})

describe('secretsMatch', () => {
  it('accepts an exact match', () => {
    expect(secretsMatch('abc123', 'abc123')).toBe(true)
  })

  it('rejects a different secret of the same length without throwing', () => {
    expect(secretsMatch('abc123', 'abc124')).toBe(false)
  })

  it('rejects a shorter secret without throwing - this used to be a 500', () => {
    expect(() => secretsMatch('abc', 'abc123')).not.toThrow()
    expect(secretsMatch('abc', 'abc123')).toBe(false)
  })

  it('rejects a longer secret without throwing', () => {
    expect(secretsMatch('abc123456789', 'abc123')).toBe(false)
  })

  it('rejects the empty string', () => {
    expect(secretsMatch('', 'abc123')).toBe(false)
  })
})

describe('readPresentedSecret', () => {
  it('reads the Bearer token Vercel Cron sends', () => {
    expect(readPresentedSecret(headers({ authorization: 'Bearer s3cret' }))).toBe('s3cret')
  })

  it('reads the legacy x-cron-secret header', () => {
    expect(readPresentedSecret(headers({ 'x-cron-secret': 's3cret' }))).toBe('s3cret')
  })

  it('returns null when neither header is present', () => {
    expect(readPresentedSecret(headers({}))).toBeNull()
  })

  it('ignores a non-Bearer Authorization scheme', () => {
    expect(readPresentedSecret(headers({ authorization: 'Basic abc' }))).toBeNull()
  })

  it('treats an empty Bearer token as absent', () => {
    expect(readPresentedSecret(headers({ authorization: 'Bearer ' }))).toBeNull()
  })
})

describe('authoriseCronRequest', () => {
  it('authorises the Bearer form Vercel Cron actually sends', () => {
    const result = authoriseCronRequest(
      { headers: headers({ authorization: 'Bearer correct-horse-battery-staple' }) },
      'test',
    )
    expect(result.ok).toBe(true)
  })

  it('authorises the legacy x-cron-secret form', () => {
    const result = authoriseCronRequest(
      { headers: headers({ 'x-cron-secret': 'correct-horse-battery-staple' }) },
      'test',
    )
    expect(result.ok).toBe(true)
  })

  it('answers 401, not 500, to a wrong-length secret', () => {
    const result = authoriseCronRequest({ headers: headers({ 'x-cron-secret': 'no' }) }, 'test')
    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.reason).toBe('unauthorised')
      expect(result.response.status).toBe(401)
    }
  })

  it('answers 401 when no secret is presented at all', () => {
    const result = authoriseCronRequest({ headers: headers({}) }, 'test')
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.response.status).toBe(401)
  })

  it('refuses with 500 when CRON_SECRET is unset, rather than running unauthenticated', () => {
    delete process.env.CRON_SECRET
    vi.spyOn(console, 'error').mockImplementation(() => {})
    const result = authoriseCronRequest(
      { headers: headers({ authorization: 'Bearer anything' }) },
      'test',
    )
    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.reason).toBe('not-configured')
      expect(result.response.status).toBe(500)
    }
  })
})

describe('the two Trustpilot crons Vercel could never call', () => {
  const routes = [
    'src/app/api/cron/trustpilot-followup-7d/route.ts',
    'src/app/api/cron/trustpilot-retention-90d/route.ts',
  ]

  for (const route of routes) {
    const source = readFileSync(join(process.cwd(), route), 'utf8')

    it(`${route} exports GET, which is the method Vercel Cron uses`, () => {
      expect(source).toMatch(/export async function GET/)
    })

    it(`${route} authenticates through the shared helper`, () => {
      expect(source).toContain('authoriseCronRequest')
      // No hand-rolled comparison: the unguarded call is what turned a
      // wrong-length secret into a 500. (Matching on the call, not the
      // word, so the explanatory comments above may still name it.)
      expect(source).not.toMatch(/timingSafeEqual\s*\(/)
    })
  }
})

describe('every scheduled path in vercel.json still exists', () => {
  /**
   * `/api/cron/weekly-reports` was scheduled every Monday while its GET
   * handler could only answer 401 and its POST body iterated an empty array
   * under a "Mock: No parents in database yet" comment. A scheduled path
   * that cannot do anything is a failure nobody sees, so the route and its
   * schedule were both removed. This test stops a schedule being added back
   * for a route that is not there.
   */
  it('has a route file for each cron entry', () => {
    const vercelConfig = JSON.parse(readFileSync(join(process.cwd(), 'vercel.json'), 'utf8')) as {
      crons?: { path: string }[]
    }

    const crons = vercelConfig.crons ?? []
    expect(crons.length).toBeGreaterThan(0)

    for (const cron of crons) {
      const routeFile = join(process.cwd(), 'src/app', `${cron.path}/route.ts`)
      expect(() => readFileSync(routeFile, 'utf8'), `${cron.path} has no route file`).not.toThrow()
    }
  })

  it('no longer schedules the removed weekly-reports stub', () => {
    const vercelConfig = JSON.parse(readFileSync(join(process.cwd(), 'vercel.json'), 'utf8')) as {
      crons?: { path: string }[]
    }
    const paths = (vercelConfig.crons ?? []).map((c) => c.path)
    expect(paths).not.toContain('/api/cron/weekly-reports')
  })
})
