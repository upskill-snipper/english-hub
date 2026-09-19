import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The Content-Security-Policy that stopped the development server working.
 *
 * THE DEFECT (19 September 2026). `buildCsp` is applied to every response,
 * including under `next dev`, and its `script-src` had no `'unsafe-eval'`. The
 * Next development client evaluates its hot-reload payload with eval, so the
 * browser refused it and REACT NEVER HYDRATED. Pages rendered server-side and
 * then sat inert: no mount effect ran, no state updated, no handler fired.
 *
 * That is 1,172 client components and 447 client page routes - the marking
 * form, the toolkit, forty games, the dashboards, the whole school suite - none
 * of which could be exercised locally by anybody. It is the most likely reason
 * client-side defects keep reaching production here, because they cannot be
 * found by clicking when clicking does nothing.
 *
 * It surfaced while checking a deep link into /marking/submit: the form came up
 * empty, the console carried CSP EvalErrors from main-app.js, and none of that
 * page's three mount effects had run - two of which predate the change being
 * tested at the time.
 *
 * WHAT THIS FILE IS REALLY GUARDING. Not that development works, which is
 * cheap, but that the relaxation CANNOT reach production. `'unsafe-eval'` in a
 * live CSP would undo a large part of what the policy is for, on a site used by
 * children, and it would do so silently.
 *
 * Every assertion reads the SOURCE rather than executing buildCsp. That is
 * deliberate: a test that reads what is written cannot be fooled by a copy of
 * the policy drifting away from the real one.
 */

const SOURCE = readFileSync(join(process.cwd(), 'src/middleware.ts'), 'utf8')
const LINES = SOURCE.split('\n')

/** The sources inside the script-src template literal, as separate tokens. */
function scriptSrcSources(): string[] {
  const line = LINES.find((l) => l.includes('`script-src'))
  if (!line) throw new Error('script-src has gone from the middleware')
  return line
    .replace(/^[^`]*`/, '')
    .replace(/`.*$/, '')
    .split(/\s+/)
    .filter(Boolean)
}

describe('the production policy', () => {
  it('is gated on NODE_ENV, not on anything a request can influence', () => {
    // A header, query parameter or cookie deciding this would be a way to ask
    // the site to relax its own CSP.
    const line = LINES.find((l) => l.includes('const devEval'))
    expect(line, 'devEval has gone').toBeTruthy()
    expect(line).toContain("process.env.NODE_ENV === 'production'")
    expect(line).not.toMatch(/req|request|header|cookie|searchParams/i)
  })

  it('yields the empty string in production, so script-src is unchanged', () => {
    // Read the ternary from the source and check both arms, so this asserts on
    // what is written rather than on a restatement of it.
    const line = LINES.find((l) => l.includes('const devEval'))!
    const arms = /\?\s*(.+?)\s*:\s*(.+)$/.exec(line.trim())
    expect(arms, `could not read the ternary from: ${line}`).toBeTruthy()
    expect(arms![1]!.trim()).toBe("''")
    expect(arms![2]!.trim()).toContain('unsafe-eval')
  })

  it('has exactly one unsafe-eval, in the dev-only arm', () => {
    // A second occurrence added later would almost certainly be unconditional.
    const code = LINES.filter((l) => !l.trim().startsWith('//')).join('\n')
    const hits = code.match(/unsafe-eval/g) ?? []
    expect(hits.length).toBe(1)
  })

  it('still forbids the things that were never allowed', () => {
    const sources = scriptSrcSources()
    expect(sources).toContain("'self'")
    expect(sources).not.toContain("'unsafe-hashes'")
    expect(sources).not.toContain('data:')
    // A BARE wildcard, not any asterisk: https://*.i.posthog.com is a real host
    // pattern that was already allow-listed. The first version of this
    // assertion rejected the whole line for containing one.
    expect(sources).not.toContain('*')
    expect(sources).not.toContain('https:')
  })
})

describe('the development policy', () => {
  it('interpolates devEval into script-src, not somewhere harmless', () => {
    // The constant existing is not the same as it being used. A dead variable
    // would satisfy every assertion above and change nothing.
    const line = LINES.find((l) => l.includes('`script-src'))!
    expect(line).toContain('${devEval}')
  })

  it('does not relax any other directive', () => {
    // The fix is one directive. Widening others would be a security change
    // wearing a developer-experience fix's clothes.
    for (const directive of ['style-src', 'img-src', 'connect-src', 'font-src', 'default-src']) {
      const line = LINES.find((l) => l.includes('`' + directive))
      if (!line) continue
      expect(line, `${directive} references devEval`).not.toContain('devEval')
    }
  })
})
