import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The published mobile contract (MAINT-9).
 *
 * Nineteen routes under `src/app/api` are written to `docs/API_SPEC.md` in
 * `D:/Coding/english-hub-mobile` and their headers cite its section numbers.
 * Nothing in this repository asserted that they still exist, so a rename or a
 * deletion during a refactor here would break the app with no signal on this
 * side at all.
 *
 * THE HARD PART OF THIS FILE IS WHAT IT REFUSES TO IMPLY. A test that only
 * asserted "these nineteen route files exist" would be green today, and the
 * mobile app cannot successfully call a single one of them:
 *
 *   - Every one authenticates through `createServerSupabaseClient()`, which
 *     reads cookies only. No non-cron route passes a JWT to `auth.getUser()`.
 *     The app sends `Authorization: Bearer <supabase access token>`, so on the
 *     code as written it is anonymous and gets 401.
 *   - The CSRF gate requires an `Origin` header on every mutation outside five
 *     exempt prefixes, none of which is a mobile path. React Native's `fetch`
 *     is not a browser and is not obliged to send one.
 *
 * So the last two describes below pin those two facts deliberately. They fail
 * when somebody FIXES them, which is the point: the fix has to be accompanied
 * by a change to chapter 03 and to this file, rather than quietly changing what
 * the contract means. A guard that proves configuration rather than function is
 * the failure this codebase keeps finding, and a green existence check over a
 * contract nothing can call would be exactly that.
 */

const ROOT = process.cwd()
const API = join(ROOT, 'src/app/api')

/**
 * Routes written to the mobile contract, from chapter 03 section 4.
 *
 * Treat this list as published. Removing an entry is a decision about the
 * shipped app, not a tidy-up.
 */
const CONTRACT_ROUTES = [
  'me',
  'me/entitlements',
  'me/usage',
  'flags',
  'mark',
  'mark/stream',
  'progress',
  'auth/register',
  'mobile/devices',
  'mobile/devices/[id]',
  'revenuecat/webhook',
  'revenuecat/reconcile-self',
  'school/classes',
  'school/assignments',
  'school/students/[studentId]',
  'school/analytics/class-performance',
  'school/analytics/hardest-questions',
  'school/analytics/student-insights',
  'school/bulk-upload/latest-status',
] as const

/**
 * Paths the app calls that have never existed here (chapter 03 section 4).
 *
 * Recorded so the list cannot grow silently, and so that building one of them
 * is a visible event rather than something noticed by a user.
 */
const KNOWN_ABSENT = [
  'consent/accept',
  'essays',
  'essays/[id]',
  'mark-schemes',
  'mark-schemes/[id]',
  'human-reviews',
  'me/activity',
  'me/saved',
  'me/parent-links',
  'parent-links/[id]/revoke',
  'parent/linked-children',
  'parent/invites/validate',
  'parent/invites/redeem',
  'progress/history',
  'school/analytics/ao-breakdown',
  'school/analytics/class-trend',
  'school/analytics/essay-volume',
  'school/students/[id]/notes',
  'trustpilot/invite/check',
  'trustpilot/invite/schedule',
] as const

function routeExists(path: string): boolean {
  return existsSync(join(API, path, 'route.ts'))
}

describe('the routes the mobile app depends on', () => {
  it('covers a contract worth guarding', () => {
    expect(CONTRACT_ROUTES.length).toBe(19)
  })

  it.each(CONTRACT_ROUTES)('/api/%s still exists', (path) => {
    expect(
      routeExists(path),
      `/api/${path} is a published mobile interface and its route file has gone`,
    ).toBe(true)
  })

  it.each(CONTRACT_ROUTES)('/api/%s answers a request rather than only being a file', (path) => {
    // An empty route.ts satisfies existsSync. A route that exports no handler
    // answers 405 to everything, which is how two crons ran dead for five
    // months.
    const source = readFileSync(join(API, path, 'route.ts'), 'utf8')
    expect(source, `/api/${path} exports no handler`).toMatch(
      /export (async function|const) (GET|POST|PUT|PATCH|DELETE)/,
    )
  })
})

describe('the paths the app calls that do not exist', () => {
  it('is still exactly the recorded list', () => {
    // Growing means somebody added a call in the mobile repo against a route
    // that was never built. Shrinking means one got built, which is good news
    // that should reach chapter 03 rather than stay in a diff.
    const nowPresent = KNOWN_ABSENT.filter(routeExists)
    expect(
      nowPresent,
      'these were listed as missing and now exist - update chapter 03 section 4 and this list',
    ).toEqual([])
    expect(KNOWN_ABSENT.length).toBe(20)
  })
})

// ─── The two faults that make the contract unusable ─────────────────────────

describe('the Bearer token the app sends', () => {
  it('is still read by nothing, which is why this contract does not work yet', () => {
    // WHEN THIS TEST FAILS, THAT IS PROGRESS. It means somebody has taught the
    // server client to accept a token. Update chapter 03 section 4, delete
    // this assertion, and replace it with one that asserts the token IS read.
    const server = readFileSync(join(ROOT, 'src/lib/supabase/server.ts'), 'utf8')
    const mw = readFileSync(join(ROOT, 'src/lib/supabase/middleware.ts'), 'utf8')
    const readsToken = /getUser\(\s*(jwt|token|accessToken|bearer)/i
    expect(readsToken.test(server) || readsToken.test(mw)).toBe(false)
    expect(server).not.toMatch(/global:\s*\{\s*headers/)
  })
})

describe('the CSRF gate', () => {
  const CSRF = readFileSync(join(ROOT, 'src/lib/security/csrf-origin.ts'), 'utf8')

  it('exempts five prefixes, none of them a mobile path', () => {
    // Same rule as above: a mobile exemption appearing here is a deliberate
    // security decision and must not arrive as a side effect of another change.
    // Bounded at the array's own closing bracket. A fixed character window
    // ran on into `SAFE_METHODS` and picked up 'GET' and 'HEAD'.
    const from = CSRF.indexOf('const CSRF_EXEMPT_PREFIXES')
    const block = CSRF.slice(from, CSRF.indexOf(']', from))
    const listed = [...block.matchAll(/'([^']+)'/g)].map((m) => m[1])
    expect(listed).toEqual([
      '/api/stripe/webhook',
      '/api/revenuecat/webhook',
      '/api/cron/',
      '/api/push/send',
      '/api/unsubscribe',
    ])
  })

  it('matches a prefix on a segment boundary, not a string prefix', () => {
    // `/api/stripe/webhook-debug` and `/api/push/sendAll` would otherwise be
    // exempt by accident.
    expect(CSRF).toMatch(/pathname === prefix \|\| pathname\.startsWith\(`\$\{prefix\}\/`\)/)
  })

  it('still gates the mutating methods', () => {
    const safe = CSRF.slice(CSRF.indexOf('const SAFE_METHODS'))
    expect(safe.slice(0, 120)).toContain("'GET'")
    expect(safe.slice(0, 120)).toContain("'HEAD'")
    expect(safe.slice(0, 120)).not.toContain("'POST'")
  })
})
