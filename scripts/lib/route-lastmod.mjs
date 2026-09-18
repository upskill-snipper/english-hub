// ─── lastmod: when each route's source last actually changed ────────────────
//
// THE DEFECT THIS FIXES (19 September 2026)
//
// src/app/sitemap.ts stamped `new Date()` on every entry, so all 1,049 URLs
// carried the identical build timestamp. Every deploy told Google the entire
// site had just changed, which is worthless as a crawl signal and actively
// misleading on a site that is mostly stable reference content.
//
// THE TRAP, AND WHY THE GUARD BELOW IS NOT OPTIONAL
//
// The obvious implementation is a silent no-op in production. The deploy
// workflow checks out with actions/checkout@v4 and no `fetch-depth`, which
// defaults to a ONE-COMMIT clone, and Vercel's own clone is shallow too.
// `git log` then returns just the head commit: non-empty, so a naive "did git
// fail" guard never fires, and this generator would overwrite the committed
// map with the handful of paths that one commit touched. sitemap.ts would fall
// back to `now` for the other ~840 routes, restoring the exact defect at
// deploy time - with every test still green, because the suite reads the
// committed file and never runs a build.
//
// So: refuse to overwrite unless the history is deep AND the new map covers
// most of the routes. The committed JSON is the source of truth and this pass
// can only ever improve it. `fetch-depth: 0` is set on the deploy checkout as
// well, but this guard is what survives a rebuild outside that workflow.
// ────────────────────────────────────────────────────────────────────────────

import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'

export const LASTMOD_PATH = 'src/lib/seo/route-lastmod.json'

/** Below this share of routes we assume a shallow clone and keep what we have. */
export const MIN_COVERAGE = 0.9

/** The NUL byte git writes before each commit date, via --format=%x00%cI. */
const NUL = String.fromCharCode(0)

export function isShallowRepo() {
  try {
    const out = execFileSync('git', ['rev-parse', '--is-shallow-repository'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    })
    return out.trim() === 'true'
  } catch {
    return true // no git at all: treat as unusable rather than as "deep"
  }
}

/**
 * path -> ISO date of the commit that last touched it, from ONE git pass.
 * One `git log` for the whole tree, not one per file: the per-file form would
 * be ~855 process spawns on every build.
 */
export function lastCommitByPath() {
  const out = execFileSync(
    'git',
    [
      'log',
      '--no-merges',
      '--name-only',
      '--format=%x00%cI',
      '--',
      'src/app',
      'content',
      'src/data',
    ],
    { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] },
  )
  const seen = new Map()
  let current = null
  for (const line of out.split('\n')) {
    if (line.startsWith(NUL)) {
      current = line.slice(1).trim()
      continue
    }
    const f = line.trim()
    // git log is newest-first, so the first sighting of a path is its latest.
    if (f && current && !seen.has(f)) seen.set(f, current)
  }
  return seen
}

/**
 * Build and write the route -> ISO-date map, or explain why it was left alone.
 *
 * @param included   the routes that will appear in the sitemap
 * @param routeFile  route -> the page.tsx that produces it
 */
export function writeRouteLastmod(included, routeFile) {
  const existing = existsSync(LASTMOD_PATH) ? readFileSync(LASTMOD_PATH, 'utf8') : null
  const existingCount = existing ? Object.keys(JSON.parse(existing)).length : 0

  if (isShallowRepo()) {
    console.log(
      `route-lastmod.json: shallow clone - keeping the committed map (${existingCount} routes)`,
    )
    return { written: false, reason: 'shallow' }
  }

  let byPath
  try {
    byPath = lastCommitByPath()
  } catch (err) {
    console.log(`route-lastmod.json: git log failed (${err.message}) - keeping the committed map`)
    return { written: false, reason: 'git-failed' }
  }

  const map = {}
  for (const r of included) {
    const f = routeFile.get(r)
    const d = f ? byPath.get(f) : null
    if (d) map[r] = d
  }

  const coverage = included.length ? Object.keys(map).length / included.length : 0
  if (coverage < MIN_COVERAGE) {
    console.log(
      `route-lastmod.json: only ${(coverage * 100).toFixed(1)}% of routes resolved ` +
        `(need ${MIN_COVERAGE * 100}%) - keeping the committed map (${existingCount} routes)`,
    )
    return { written: false, reason: 'low-coverage', coverage }
  }

  const json = JSON.stringify(map, null, 2) + '\n'
  if (existing === json) {
    console.log(`route-lastmod.json: ${Object.keys(map).length} routes, unchanged`)
    return { written: false, reason: 'unchanged', coverage }
  }
  writeFileSync(LASTMOD_PATH, json)
  console.log(
    `route-lastmod.json: ${Object.keys(map).length} routes (${(coverage * 100).toFixed(1)}% coverage)`,
  )
  return { written: true, coverage }
}
