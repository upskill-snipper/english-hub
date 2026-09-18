import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import ROUTE_LASTMOD from '@/lib/seo/route-lastmod.json'
import STATIC_ROUTES from '@/lib/seo/static-routes.json'

/**
 * The sitemap claimed every page changed on every deploy.
 *
 * THE DEFECT (19 September 2026). src/app/sitemap.ts had a single `add()`
 * helper through which every entry passes, and it set `lastModified: now`.
 * All 1,049 URLs therefore carried the identical build timestamp. That is
 * worthless as a crawl signal and actively misleading on a site that is mostly
 * stable reference content: the handful of pages that genuinely did change are
 * buried among hundreds that did not.
 *
 * THE TRAP THESE TESTS EXIST FOR. The obvious implementation is a silent
 * no-op in production. The deploy workflow used actions/checkout@v4 with no
 * `fetch-depth`, which is a ONE-COMMIT clone, and Vercel's own clone is
 * shallow too. `git log` then returns only the head commit - non-empty, so a
 * naive "did git fail" check never fires - and the generator would overwrite
 * the committed map with the few paths that commit touched, restoring the
 * defect at deploy time.
 *
 * Crucially, a test suite cannot catch that by reading the committed file: the
 * quality gate never runs a build. So the guard has to live in the generator,
 * and these tests assert the guard exists rather than only asserting the data
 * looks right today.
 */

const sitemap = readFileSync(join(process.cwd(), 'src/app/sitemap.ts'), 'utf8')
const generator = readFileSync(join(process.cwd(), 'scripts/lib/route-lastmod.mjs'), 'utf8')
const workflow = readFileSync(join(process.cwd(), '.github/workflows/deploy.yml'), 'utf8')

const dates = Object.values(ROUTE_LASTMOD as Record<string, string>)

// ─── The data ───────────────────────────────────────────────────────────

describe('the committed lastmod map', () => {
  it('covers effectively all the static routes', () => {
    const routes = STATIC_ROUTES as string[]
    const covered = routes.filter((r) => r in (ROUTE_LASTMOD as Record<string, string>))
    expect(covered.length / routes.length).toBeGreaterThan(0.9)
  })

  it('carries genuinely different dates, not one repeated', () => {
    // The whole point. Two distinct values would technically pass a naive
    // "more than one date" check, so assert on spread instead.
    const distinct = new Set(dates)
    expect(distinct.size).toBeGreaterThan(20)
  })

  it('holds only parseable ISO dates', () => {
    for (const [route, iso] of Object.entries(ROUTE_LASTMOD as Record<string, string>)) {
      expect(Number.isNaN(new Date(iso).getTime()), `${route} has ${iso}`).toBe(false)
    }
  })

  it('claims no route was modified in the future', () => {
    const now = Date.now()
    for (const [route, iso] of Object.entries(ROUTE_LASTMOD as Record<string, string>)) {
      expect(new Date(iso).getTime(), `${route}`).toBeLessThanOrEqual(now + 60_000)
    }
  })
})

// ─── The sitemap uses it ────────────────────────────────────────────────

describe('src/app/sitemap.ts', () => {
  it('no longer stamps the build time on every entry', () => {
    expect(sitemap).not.toContain('lastModified: now,')
  })

  it('reads the per-route map', () => {
    expect(sitemap).toContain('lastmodFor(route, now)')
    expect(sitemap).toContain("from '@/lib/seo/route-lastmod.json'")
  })

  it('still falls back to now for a route the map does not cover', () => {
    // Dynamic entries and pages added since the last generator run. A missing
    // date is worse than an imprecise one.
    expect(sitemap).toContain('if (!iso) return fallback')
  })

  it('falls back rather than emitting an unparseable date', () => {
    expect(sitemap).toContain('Number.isNaN(d.getTime()) ? fallback : d')
  })
})

// ─── The guard that makes it survive a deploy ───────────────────────────

describe('the generator refuses to write a worse map', () => {
  it('detects a shallow clone, and actually calls that check', () => {
    // Asserting only that the string 'shallow' appears would pass even if the
    // guard were disabled - the branch would still be in the file, just never
    // reached. Assert the CALL SITE.
    expect(generator).toContain('--is-shallow-repository')
    expect(generator).toContain('if (isShallowRepo()) {')
    expect(generator).toContain("reason: 'shallow'")
  })

  it('checks coverage at the call site too, not just in a dead branch', () => {
    expect(generator).toContain('if (coverage < MIN_COVERAGE) {')
  })

  it('treats a missing git as unusable rather than as a deep history', () => {
    // `return true` in the catch. The opposite default would let a
    // git-less environment overwrite the map with nothing.
    const fn = generator.slice(generator.indexOf('export function isShallowRepo'))
    expect(fn.slice(0, fn.indexOf('}\n\n'))).toContain('return true')
  })

  it('refuses when coverage collapses, which is what a shallow clone looks like', () => {
    expect(generator).toContain('MIN_COVERAGE')
    expect(generator).toContain("reason: 'low-coverage'")
  })

  it('makes one git call, not one per route', () => {
    // 855 process spawns per build would be its own defect.
    const calls = generator.match(/execFileSync\(/g) ?? []
    expect(calls.length).toBe(2) // rev-parse, and the single log
  })

  it('leaves the committed file untouched on every refusal path', () => {
    const writes = generator.match(/writeFileSync\(/g) ?? []
    expect(writes.length).toBe(1)
  })
})

describe('the deploy workflow', () => {
  /**
   * OUTSTANDING, AND IT IS ONE LINE.
   *
   * .github/workflows/deploy.yml checks out with actions/checkout@v4 and no
   * `fetch-depth`, which is a one-commit clone. The generator therefore
   * correctly refuses to write on every deploy, and the committed dates never
   * refresh - they age from the day they were generated instead of tracking
   * the repository.
   *
   * The sitemap is still strictly better than before either way: it ships real
   * per-route dates rather than one build timestamp repeated 1,049 times. But
   * they go stale until the checkout is deepened:
   *
   *     - uses: actions/checkout@v4
   *       with:
   *         fetch-depth: 0
   *
   * I could not make that change myself: the token this repository is pushed
   * with has no `workflow` scope, so GitHub rejects any push that touches
   * .github/workflows. That is a sensible protection and not one to work
   * around, so it is recorded here and in the owner's action list.
   *
   * This test is written to FAIL once the line is added, so that the note
   * above cannot quietly outlive the problem it describes.
   */
  it('still needs fetch-depth: 0 - delete this test when it is added', () => {
    expect(
      workflow.includes('fetch-depth: 0'),
      'fetch-depth: 0 is now set - remove this test and the note above it',
    ).toBe(false)
  })
})
