#!/usr/bin/env node
/**
 * Smoke crawl - does the running server actually serve these pages?
 *
 * TWO COMMANDS. That is the whole operator interface. This script starts
 * nothing and builds nothing, deliberately (see SAFETY below):
 *
 *   1) in one terminal, build and start the server yourself:
 *        export NODE_OPTIONS=--max-old-space-size=14336 && npx next build && npx next start
 *      (`npm run build` fails on Windows - POSIX inline env syntax - which is
 *      why the export is separate. Do not "fix" the npm script; Vercel is Linux.)
 *
 *   2) in a second terminal, crawl it:
 *        npm run smoke:crawl -- --sample=120
 *      or, for the full list:
 *        npm run smoke:crawl -- --all
 *
 * ── SAFETY: THIS SCRIPT IS READ-ONLY ────────────────────────────────────
 *
 * `.env.local` in this repository points at the PRODUCTION Supabase project
 * and carries the service-role key, and `next build` / `next start` load it
 * automatically. So:
 *
 *   - Every request is a GET. There are exactly two fetch() calls in this
 *     file - one preflight, one per route - and both are hard-coded to GET
 *     with no method parameter anywhere. Nothing here can POST, PUT or DELETE.
 *   - It never opens a database client, never reads an env file, and never
 *     imports anything from src/.
 *   - It never starts or stops a server, and never runs a build. Those are
 *     expensive and destructive-adjacent; the operator drives them.
 *   - It sends no cookies and no authorisation header, so it sees exactly
 *     what an anonymous visitor sees. Gated routes are excluded from the
 *     route list upstream (see robots policy in generate-sitemap-routes.mjs).
 *
 * ── WHY IT EXISTS ───────────────────────────────────────────────────────
 *
 * `business-docs/CONTENT_BUILD_SAFETY_MODEL.md` gate 5, which does not exist
 * in this repository. The Wave 1 incident took 257 of 871 routes offline and
 * the gates that were green throughout were the ones proving CONFIGURATION:
 * the tracker said the migration ran, the tests said the code compiled. The
 * test suite here runs in ten seconds because almost every assertion reads
 * source text with readFileSync rather than rendering anything, so a 404
 * cannot fail it. This makes one HTTP request per route and reads the status.
 * That is the only thing it proves, and it is the thing nothing else proves.
 *
 * ── WHY 3xx IS A FINDING RATHER THAN A PASS ─────────────────────────────
 *
 * The default route list is src/lib/seo/static-routes.json, which is the
 * sitemap. A sitemap that advertises a redirect is an SEO defect - Google
 * treats the listed URL as the canonical claim and then finds it is not. So
 * a 3xx is counted, listed with its Location header, and reported. It does
 * not fail the run by default, because a redirect still serves the visitor;
 * pass --fail-on-redirect when you are auditing the sitemap specifically.
 *
 * ── WHY THE SAMPLE IS SEEDED ────────────────────────────────────────────
 *
 * An unseeded Math.random sample makes a failing run impossible to repeat:
 * the one run that found the broken route cannot be re-run to confirm the
 * fix. Sampling here is a seeded shuffle over a sorted list, so a given
 * --seed and --sample always select the same routes on any machine. The seed
 * is printed on every run, failing or not.
 *
 * Options:
 *   --base=URL            default http://localhost:3000
 *   --sample=N            check a deterministic random N routes
 *   --all                 check every route (the default if no --sample)
 *   --seed=N              default 20260514, the Wave 1 incident date
 *   --concurrency=N       default 8
 *   --timeout=MS          per request, default 15000
 *   --fail-on-redirect    treat any 3xx as a failure
 *   --routes=FILE         a JSON array of paths, instead of the default list
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  isRouteGroup,
  isPrivate,
  isSlot,
  isIntercepting,
  literalUnderscoreSegment,
  classifyDynamic,
} from './check-route-conflicts.mjs'

const STATIC_ROUTES = path.join('src', 'lib', 'seo', 'static-routes.json')
const APP_DIR = path.join('src', 'app')

// ─── Arguments ──────────────────────────────────────────────────────────

function parseArgs(argv) {
  const opts = {
    base: 'http://localhost:3000',
    sample: null,
    all: false,
    seed: 20260514, // the Wave 1 incident date, so the default is not arbitrary
    concurrency: 8,
    timeout: 15000,
    failOnRedirect: false,
    routesFile: null,
  }
  for (const arg of argv) {
    const [key, rawValue] = arg.includes('=') ? arg.split(/=(.*)/s) : [arg, null]
    switch (key) {
      case '--base':
        opts.base = rawValue ?? opts.base
        break
      case '--sample':
        opts.sample = Number(rawValue)
        break
      case '--all':
        opts.all = true
        break
      case '--seed':
        opts.seed = Number(rawValue)
        break
      case '--concurrency':
        opts.concurrency = Number(rawValue)
        break
      case '--timeout':
        opts.timeout = Number(rawValue)
        break
      case '--fail-on-redirect':
        opts.failOnRedirect = true
        break
      case '--routes':
        opts.routesFile = rawValue
        break
      default:
        throw new Error(`smoke-crawl: unknown option ${key}`)
    }
  }
  if (opts.sample !== null && (!Number.isInteger(opts.sample) || opts.sample < 1)) {
    throw new Error('smoke-crawl: --sample must be a positive integer')
  }
  if (!Number.isInteger(opts.seed)) throw new Error('smoke-crawl: --seed must be an integer')
  if (!Number.isInteger(opts.concurrency) || opts.concurrency < 1 || opts.concurrency > 32) {
    throw new Error('smoke-crawl: --concurrency must be between 1 and 32')
  }
  const base = new URL(opts.base) // throws on nonsense
  if (base.protocol !== 'http:' && base.protocol !== 'https:') {
    throw new Error(`smoke-crawl: --base must be http or https, got ${base.protocol}`)
  }
  opts.base = opts.base.replace(/\/+$/, '')
  opts.host = base.host
  return opts
}

// ─── The route list ─────────────────────────────────────────────────────

/**
 * Fallback enumeration when static-routes.json is absent. It imports the
 * segment rules from check-route-conflicts.mjs rather than restating them,
 * because two copies of "what is a route group" drift apart and only one of
 * them is under test.
 */
export function walkAppRoutes(appDir) {
  const routes = new Set()
  const walk = (dir, segments) => {
    let entries
    try {
      entries = readdirSync(dir, { withFileTypes: true })
    } catch {
      return
    }
    if (entries.some((e) => e.isFile() && /^page\.(?:js|jsx|ts|tsx)$/.test(e.name))) {
      routes.add(segments.length ? '/' + segments.join('/') : '/')
    }
    for (const e of entries) {
      if (!e.isDirectory()) continue
      const escaped = literalUnderscoreSegment(e.name)
      if (escaped === null) {
        if (isPrivate(e.name) || isIntercepting(e.name)) continue
        if (isRouteGroup(e.name) || isSlot(e.name)) {
          walk(path.join(dir, e.name), segments)
          continue
        }
      }
      walk(path.join(dir, e.name), [...segments, escaped ?? e.name])
    }
  }
  walk(appDir, [])
  // A dynamic segment has no literal URL to request, so it cannot be crawled
  // from the filesystem alone. classifyDynamic is the same test the conflict
  // gate uses.
  return [...routes]
    .filter((r) => !r.split('/').some((s) => s && classifyDynamic(s)))
    .filter((r) => !r.startsWith('/api'))
    .sort()
}

export function loadRoutes(routesFile) {
  const file = routesFile ?? STATIC_ROUTES
  if (existsSync(file)) {
    const parsed = JSON.parse(readFileSync(file, 'utf8'))
    if (!Array.isArray(parsed)) throw new Error(`smoke-crawl: ${file} is not a JSON array`)
    return { source: file, routes: [...new Set(parsed)].sort() }
  }
  if (routesFile) throw new Error(`smoke-crawl: no such route list: ${routesFile}`)
  return { source: `${APP_DIR} (walked; ${STATIC_ROUTES} absent)`, routes: walkAppRoutes(APP_DIR) }
}

// ─── Deterministic sampling ─────────────────────────────────────────────

/** mulberry32: small, seeded, and identical on every machine. */
export function makeRng(seed) {
  let a = seed >>> 0
  return function next() {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Seeded Fisher-Yates over a sorted input, then take the first n. */
export function sampleRoutes(routes, n, seed) {
  const pool = [...routes].sort()
  const rng = makeRng(seed)
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, Math.min(n, pool.length)).sort()
}

// ─── Classification ─────────────────────────────────────────────────────

/**
 * 404 and 5xx are the failures the brief names. Any other non-2xx, non-3xx
 * is also a failure: a route the sitemap advertises that answers 403 or 410
 * is broken whatever the number says.
 */
export function classify(status) {
  if (status >= 200 && status < 300) return 'ok'
  if (status >= 300 && status < 400) return 'redirect'
  return 'fail'
}

// ─── The crawl ──────────────────────────────────────────────────────────

async function checkOne(base, route, timeout) {
  const url = base + route
  const started = Date.now()
  try {
    // One of this file's two fetch() calls; preflight() below is the other.
    // Both are literal GETs, so no argument and no route can change the
    // method.
    //
    // `connection: close` is not a style choice. Node's fetch pools keep-alive
    // sockets, and on Windows exiting with pooled sockets still open trips a
    // libuv assertion - "!(handle->flags & UV_HANDLE_CLOSING)" - which kills
    // the process with code 127 AFTER the report has printed. A gate that
    // exits 127 on a clean run is worse than no gate. Closing each socket
    // lets the event loop drain so the real exit code survives.
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'manual',
      headers: { 'user-agent': 'english-hub-smoke-crawl (read-only)', connection: 'close' },
      signal: AbortSignal.timeout(timeout),
    })
    return {
      route,
      status: res.status,
      outcome: classify(res.status),
      location: res.headers.get('location'),
      ms: Date.now() - started,
    }
  } catch (err) {
    return {
      route,
      status: 0,
      outcome: 'fail',
      reason: describeError(err, timeout),
      ms: Date.now() - started,
    }
  }
}

/**
 * Node's fetch reports every transport problem as the bare string "fetch
 * failed" and hides the useful part in err.cause. A gate that prints "fetch
 * failed" 855 times has told the operator nothing.
 */
export function describeError(err, timeout) {
  if (!(err instanceof Error)) return String(err)
  if (err.name === 'TimeoutError' || err.name === 'AbortError') return `timeout after ${timeout}ms`
  const code =
    err.cause && typeof err.cause === 'object' && 'code' in err.cause
      ? String(err.cause.code)
      : null
  return code ? `${err.message} (${code})` : err.message
}

/**
 * One request before the crawl, so "you did not start the server" cannot be
 * mistaken for "every route is broken". Exit 2 means the gate did not run;
 * exit 1 means it ran and something is genuinely serving badly.
 */
async function preflight(opts) {
  try {
    await fetch(opts.base + '/', {
      method: 'GET',
      redirect: 'manual',
      headers: { 'user-agent': 'english-hub-smoke-crawl (read-only)', connection: 'close' },
      signal: AbortSignal.timeout(opts.timeout),
    })
    return null
  } catch (err) {
    return describeError(err, opts.timeout)
  }
}

async function crawl(routes, opts) {
  const results = []
  let next = 0
  let done = 0
  const tty = Boolean(process.stdout.isTTY)
  const total = routes.length

  const progress = () => {
    done += 1
    if (tty) {
      process.stdout.write(`\r  ${done}/${total} checked...`)
    } else if (done % 50 === 0 || done === total) {
      console.log(`  ${done}/${total} checked...`)
    }
  }

  const worker = async () => {
    for (;;) {
      const i = next
      next += 1
      if (i >= routes.length) return
      results.push(await checkOne(opts.base, routes[i], opts.timeout))
      progress()
    }
  }

  await Promise.all(Array.from({ length: Math.min(opts.concurrency, total) }, worker))
  if (tty) process.stdout.write('\n')
  results.sort((a, b) => a.route.localeCompare(b.route))
  return results
}

// ─── Reporting ──────────────────────────────────────────────────────────

export function summarise(results, opts) {
  const ok = results.filter((r) => r.outcome === 'ok')
  const redirected = results.filter((r) => r.outcome === 'redirect')
  const failed = results.filter((r) => r.outcome === 'fail')
  const failing = opts.failOnRedirect ? [...failed, ...redirected] : failed
  return { ok, redirected, failed, failing, total: results.length }
}

function report(results, opts, elapsedMs) {
  const { ok, redirected, failed, failing, total } = summarise(results, opts)

  console.log('')
  console.log(
    `smoke crawl: ${total} checked, ${ok.length} OK, ${redirected.length} redirected, ${failed.length} failed  (${(elapsedMs / 1000).toFixed(1)}s)`,
  )

  if (redirected.length) {
    console.log('')
    console.log(
      `  ${redirected.length} redirect${redirected.length === 1 ? '' : 's'} - a sitemap must not advertise these:`,
    )
    for (const r of redirected) {
      console.log(
        `    ${String(r.status).padEnd(3)} ${r.route}  ->  ${r.location ?? '(no Location header)'}`,
      )
    }
  }

  if (failed.length) {
    console.log('')
    console.log(`  ${failed.length} failure${failed.length === 1 ? '' : 's'}:`)
    for (const r of failed) {
      const why = r.reason ? `request failed: ${r.reason}` : `HTTP ${r.status}`
      console.log(`    ${why.padEnd(28)} ${opts.base}${r.route}`)
    }
  }

  console.log('')
  if (failing.length) {
    console.log(`smoke crawl FAILED: ${failing.length} of ${total} routes did not serve.`)
    console.log(
      `Reproduce this exact selection: npm run smoke:crawl -- --seed=${opts.seed}${opts.sample ? ` --sample=${opts.sample}` : ' --all'}`,
    )
  } else {
    console.log('smoke crawl passed.')
  }
  return failing.length
}

// ─── Entry point ────────────────────────────────────────────────────────

/** Refuse rather than proceed, and say why. Exit 2 means "did not run". */
function abort(message) {
  console.error(message)
  process.exitCode = 2
  return null
}

async function main() {
  let opts
  try {
    opts = parseArgs(process.argv.slice(2))
  } catch (err) {
    return abort(err instanceof Error ? err.message : String(err))
  }

  let source, routes
  try {
    ;({ source, routes } = loadRoutes(opts.routesFile))
  } catch (err) {
    return abort(err instanceof Error ? err.message : String(err))
  }

  // An empty list would otherwise "pass" with nothing checked, which is the
  // exact failure shape CLAUDE.md warns about: a green result proving nothing.
  if (routes.length === 0) {
    return abort('smoke crawl: the route list is empty. Nothing was checked, so nothing is proven.')
  }

  const bad = routes.filter((r) => typeof r !== 'string' || !r.startsWith('/'))
  if (bad.length) {
    return abort(
      `smoke crawl: ${bad.length} entries in the route list are not absolute paths, e.g. ${JSON.stringify(bad[0])}`,
    )
  }

  const selected = opts.sample && !opts.all ? sampleRoutes(routes, opts.sample, opts.seed) : routes

  console.log(`smoke crawl: GET only, read-only, no database, no server management.`)
  console.log(`  base        ${opts.base}`)
  console.log(
    `  routes      ${selected.length} of ${routes.length} from ${source.replaceAll('\\', '/')}`,
  )
  console.log(
    `  selection   ${opts.sample && !opts.all ? `seeded sample, seed=${opts.seed}` : 'all'}`,
  )
  console.log(
    `  concurrency ${opts.concurrency}, timeout ${opts.timeout}ms, redirects not followed`,
  )
  if (!/^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/.test(opts.host)) {
    console.log(
      `  NOTE        ${opts.host} is not localhost. This will send ${selected.length} GETs to a remote host.`,
    )
  }
  console.log('')

  const unreachable = await preflight(opts)
  if (unreachable) {
    return abort(
      `smoke crawl: ${opts.base} is not answering (${unreachable}).\n` +
        '  This script does not start servers. In another terminal run:\n' +
        '    export NODE_OPTIONS=--max-old-space-size=14336 && npx next build && npx next start',
    )
  }

  const started = Date.now()
  const results = await crawl(selected, opts)
  const failures = report(results, opts, Date.now() - started)
  // exitCode rather than process.exit(): see the note on `connection: close`
  // above. Letting the loop drain is what makes the exit code trustworthy.
  process.exitCode = failures ? 1 : 0
}

const invokedDirectly =
  process.argv[1] &&
  path.resolve(process.argv[1]).toLowerCase() ===
    path.resolve(fileURLToPath(import.meta.url)).toLowerCase()
if (invokedDirectly) main()
