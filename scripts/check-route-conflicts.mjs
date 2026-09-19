#!/usr/bin/env node
/**
 * Route-conflict gate for the App Router tree.
 *
 * WHY THIS EXISTS
 *
 * `business-docs/CONTENT_BUILD_SAFETY_MODEL.md` was written after the Wave 1
 * incident of 14 May 2026: `/ks3/[year]/[unit]` and `/ks3/[year]/[term]` are
 * two different slug names under one parent, Next.js cannot choose between
 * them, and 257 of 871 production routes went dark. That document specifies
 * six Python gates. None of the six files exists in this repository. This is
 * the first of them, rewritten in Node to sit alongside the rest of scripts/.
 *
 * It models the rules Next.js itself enforces, not a convenient approximation
 * of them, because a gate that reports a conflict Next.js tolerates gets
 * switched off within a week:
 *
 *   Rule A  two different slug names of the same kind under one URL parent
 *           ("You cannot use different slug names for the same dynamic path")
 *   Rule B  a required and an optional catch-all at the same level
 *           ("You cannot use both an optional and required catch-all route")
 *   Rule C  two page files resolving to one URL after route groups collapse
 *           ("You cannot have two parallel pages that resolve to the same path")
 *   Rule D  page.tsx and route.ts claiming the same URL
 *   Rule E  the same slug name repeating within one dynamic path
 *
 * WHAT IT DELIBERATELY DOES NOT DO. It does not open a single file. A route
 * conflict is a property of the directory tree, so this is a filesystem walk
 * and nothing else - about a quarter of a second over 1,044 pages. It reads,
 * never writes, and never touches the network or the database.
 *
 * THE FOUR THINGS AN ANALYSER LIKE THIS GETS WRONG, all covered by
 * src/__tests__/route-conflicts-are-caught.test.ts:
 *
 *   - `(group)` contributes no URL segment, so `(a)/about` and `(b)/about`
 *     are the SAME url and DO collide. Treating groups as ordinary folders
 *     is the mistake that makes this gate vacuous.
 *   - `_folder` is not a route at all. Its whole subtree must vanish,
 *     including `__tests__` directories, which this repository has.
 *   - `@slot` is a parallel route. It contributes no URL segment either, but
 *     a page inside it does NOT collide with the page outside it - that is
 *     the entire point of slots. Collapsing slots like groups turns every
 *     parallel route into a false positive.
 *   - `(.)`, `(..)`, `(..)(..)` and `(...)` are intercepting routes. They
 *     start with an open bracket and so are easily mistaken for route
 *     groups; they claim an intercepted path, not their literal one, and are
 *     excluded here rather than guessed at. The summary counts them so an
 *     excluded subtree is visible rather than silent.
 *
 * Run:  npm run routes:check          (or: node scripts/check-route-conflicts.mjs)
 *       node scripts/check-route-conflicts.mjs some/other/app/dir
 *
 * Exit 0 with a one-line summary when clean, non-zero with a list otherwise.
 */

import { readdirSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

/** page/route files Next.js treats as claiming a URL. */
const ROUTE_FILE = /^(page|route)\.(?:js|jsx|ts|tsx)$/

// ─── Segment classification ─────────────────────────────────────────────
//
// Order matters in the walker below: `%5F` beats `_`, and intercepting beats
// route group, because `(..)photo` opens with the same bracket a group does.

/** `(.)x`, `(..)x`, `(...)x`, `(..)(..)x` - an intercepting route. */
export function isIntercepting(segment) {
  return /^\(\.{1,3}\)/.test(segment) || /^\(\.\.\)\(\.\.\)/.test(segment)
}

/** `(marketing)` - organisational only, contributes NO URL segment. */
export function isRouteGroup(segment) {
  return segment.startsWith('(') && segment.endsWith(')') && !isIntercepting(segment)
}

/** `@modal` - a parallel route slot. Contributes no URL segment. */
export function isSlot(segment) {
  return segment.startsWith('@')
}

/** `_components` - private, not routable, subtree excluded entirely. */
export function isPrivate(segment) {
  return segment.startsWith('_')
}

/**
 * `%5Fnext` is the documented escape for a literal leading underscore in a
 * URL. Checked before isPrivate, or an escaped folder is silently deleted
 * from the route tree.
 */
export function literalUnderscoreSegment(segment) {
  return /^%5f/i.test(segment) ? '_' + segment.slice(3) : null
}

/**
 * Classify a dynamic segment the way Next.js does in sorted-routes: three
 * separate buckets, because a plain dynamic segment and a catch-all can
 * legally sit side by side while two of the same kind cannot.
 */
export function classifyDynamic(segment) {
  let m = /^\[\[\.\.\.(.+)\]\]$/.exec(segment)
  if (m) return { kind: 'optional-catch-all', name: m[1] }
  m = /^\[\.\.\.(.+)\]$/.exec(segment)
  if (m) return { kind: 'catch-all', name: m[1] }
  m = /^\[(.+)\]$/.exec(segment)
  if (m && !m[1].includes('[') && !m[1].includes(']')) return { kind: 'dynamic', name: m[1] }
  return null
}

const KIND_LABEL = {
  dynamic: 'dynamic segment',
  'catch-all': 'catch-all',
  'optional-catch-all': 'optional catch-all',
}

const toUrl = (segments) => (segments.length ? '/' + segments.join('/') : '/')
const toPosix = (p) => p.replaceAll('\\', '/')

/**
 * The first route file anywhere beneath a directory, so a conflict between
 * two DIRECTORIES can still name a file the reader can open. Only called for
 * directories already known to be in a conflict, so the cost does not matter.
 */
function firstRouteFileBelow(dir) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return null
  }
  for (const e of entries) {
    if (e.isFile() && ROUTE_FILE.test(e.name)) return toPosix(path.join(dir, e.name))
  }
  for (const e of entries) {
    if (!e.isDirectory()) continue
    const found = firstRouteFileBelow(path.join(dir, e.name))
    if (found) return found
  }
  return null
}

/**
 * @typedef {object} ConflictEntry
 * @property {string} file the file (or directory) a reader should open
 * @property {string} detail what it claims
 *
 * @typedef {object} RouteConflict
 * @property {'duplicate-page'|'duplicate-route'|'page-and-route'|'dynamic-siblings'|'catch-all-mix'|'repeated-slug'} rule
 * @property {string} url the URL both claimants resolve to
 * @property {string} summary
 * @property {ConflictEntry[]} entries
 * @property {string} fix
 *
 * @typedef {object} RouteStats
 * @property {number} pages
 * @property {number} routeHandlers
 * @property {number} urls
 * @property {number} routeGroups
 * @property {number} slots
 * @property {number} privateSkipped
 * @property {number} interceptingSkipped
 */

/**
 * Walk an App Router directory and report every collision.
 *
 * @param {string} appDir directory to analyse, e.g. `src/app`
 * @returns {{conflicts: RouteConflict[], stats: RouteStats}}
 */
export function analyseAppDir(appDir) {
  /** URL-and-slot -> the route files claiming it. Rules C and D. */
  const claims = new Map()
  /** URL parent -> its dynamic children, bucketed by kind. Rules A and B. */
  const dynamicChildren = new Map()
  /** Rule E, and the raw counts for the summary line. */
  const conflicts = []
  const stats = {
    pages: 0,
    routeHandlers: 0,
    urls: 0,
    routeGroups: 0,
    slots: 0,
    privateSkipped: 0,
    interceptingSkipped: 0,
  }

  // JSON rather than a delimiter character. An earlier draft joined the two
  // with a NUL, which made this source file itself register as binary to
  // grep, file(1) and esbuild. A key that breaks the tooling reading it is
  // not a clever key.
  function claimKey(slot, url) {
    return JSON.stringify([slot, url])
  }

  function walk(dir, ctx) {
    let entries
    try {
      entries = readdirSync(dir, { withFileTypes: true })
    } catch {
      return
    }

    const url = toUrl(ctx.url)

    for (const e of entries) {
      if (!e.isFile() || !ROUTE_FILE.test(e.name)) continue
      const kind = e.name.startsWith('page') ? 'page' : 'route'
      if (kind === 'page') stats.pages += 1
      else stats.routeHandlers += 1
      const key = claimKey(ctx.slot, url)
      if (!claims.has(key)) claims.set(key, { url, slot: [...ctx.slot], files: [] })
      claims.get(key).files.push({ file: toPosix(path.join(dir, e.name)), kind })
    }

    for (const e of entries) {
      if (!e.isDirectory()) continue
      const segment = e.name
      const child = path.join(dir, segment)

      // `%5F` first: an escaped underscore is a real segment, not a private
      // folder, and testing isPrivate first would delete it from the tree.
      const escaped = literalUnderscoreSegment(segment)
      if (escaped === null) {
        if (isPrivate(segment)) {
          stats.privateSkipped += 1
          continue
        }
        // Intercepting before route group: `(..)photo` opens with a bracket.
        if (isIntercepting(segment)) {
          stats.interceptingSkipped += 1
          continue
        }
        if (isRouteGroup(segment)) {
          stats.routeGroups += 1
          walk(child, ctx) // no URL segment, no slot change
          continue
        }
        if (isSlot(segment)) {
          stats.slots += 1
          // No URL segment either, but the slot name scopes the claim: a page
          // in @modal and a page outside it are meant to coexist.
          walk(child, { ...ctx, slot: [...ctx.slot, segment] })
          continue
        }
      }

      const urlSegment = escaped ?? segment
      const dyn = classifyDynamic(urlSegment)
      const slugs = ctx.slugs

      if (dyn) {
        // Rule A and B bookkeeping is keyed on the URL parent, not the
        // directory. Route groups collapse, so `(a)/[slug]` and `(b)/[id]`
        // are siblings in the URL tree even though they are not on disk.
        if (!dynamicChildren.has(url)) dynamicChildren.set(url, new Map())
        const buckets = dynamicChildren.get(url)
        if (!buckets.has(dyn.kind)) buckets.set(dyn.kind, new Map())
        const byName = buckets.get(dyn.kind)
        if (!byName.has(dyn.name)) byName.set(dyn.name, [])
        byName.get(dyn.name).push({ dir: toPosix(child), segment: urlSegment })

        // Rule E: Next.js refuses the same slug name twice in one path,
        // because both would write the same key into params.
        if (slugs.includes(dyn.name)) {
          conflicts.push({
            rule: 'repeated-slug',
            url: toUrl([...ctx.url, urlSegment]),
            summary: `The slug name "${dyn.name}" repeats within one dynamic path`,
            entries: [{ file: toPosix(child), detail: 'this segment' }],
            fix: `Rename one of the two "[${dyn.name}]" segments. Both would write params.${dyn.name}.`,
          })
        }
      }

      walk(child, {
        url: [...ctx.url, urlSegment],
        slot: ctx.slot,
        slugs: dyn ? [...slugs, dyn.name] : slugs,
      })
    }
  }

  if (!existsSync(appDir)) {
    throw new Error(`route conflicts: no such directory: ${appDir}`)
  }
  walk(appDir, { url: [], slot: [], slugs: [] })
  stats.urls = claims.size

  // ─── Rules C and D: one URL, two claimants ────────────────────────────
  for (const { url, slot, files } of claims.values()) {
    if (files.length < 2) continue
    const pages = files.filter((f) => f.kind === 'page')
    const handlers = files.filter((f) => f.kind === 'route')
    const where = slot.length ? ` in parallel slot ${slot.join('/')}` : ''

    if (pages.length > 1) {
      conflicts.push({
        rule: 'duplicate-page',
        url,
        summary: `${pages.length} page files resolve to ${url}${where}`,
        entries: pages.map((p) => ({ file: p.file, detail: `claims ${url}` })),
        fix: 'Route groups and parallel slots do not appear in the URL. Move or delete all but one.',
      })
    }
    if (handlers.length > 1) {
      conflicts.push({
        rule: 'duplicate-route',
        url,
        summary: `${handlers.length} route handlers resolve to ${url}${where}`,
        entries: handlers.map((h) => ({ file: h.file, detail: `claims ${url}` })),
        fix: 'Two handlers cannot serve one URL. Move or delete all but one.',
      })
    }
    if (pages.length && handlers.length) {
      conflicts.push({
        rule: 'page-and-route',
        url,
        summary: `A page and a route handler both resolve to ${url}${where}`,
        entries: [
          ...pages.map((p) => ({ file: p.file, detail: `renders ${url}` })),
          ...handlers.map((h) => ({ file: h.file, detail: `serves ${url}` })),
        ],
        fix: 'Next.js refuses page.tsx and route.ts in one segment. Move the handler under /api.',
      })
    }
  }

  // ─── Rules A and B: dynamic siblings ──────────────────────────────────
  for (const [parentUrl, buckets] of dynamicChildren) {
    for (const [kind, byName] of buckets) {
      if (byName.size < 2) continue
      const entries = []
      for (const [name, dirs] of byName) {
        for (const d of dirs) {
          const file = firstRouteFileBelow(d.dir)
          entries.push({
            file: file ?? d.dir,
            detail: `[${name}] -> ${parentUrl === '/' ? '' : parentUrl}/${d.segment}`,
          })
        }
      }
      conflicts.push({
        rule: 'dynamic-siblings',
        url: `${parentUrl === '/' ? '' : parentUrl}/<${KIND_LABEL[kind]}>`,
        summary: `${byName.size} different slug names share one parent at ${parentUrl}`,
        entries,
        fix:
          'Next.js cannot choose between them - this is the Wave 1 failure. Give both ' +
          'the same slug name and branch inside the page, or push one a level deeper.',
      })
    }

    const required = buckets.get('catch-all')
    const optional = buckets.get('optional-catch-all')
    if (required && optional) {
      const entries = []
      for (const [name, dirs] of required) {
        for (const d of dirs)
          entries.push({
            file: firstRouteFileBelow(d.dir) ?? d.dir,
            detail: `required catch-all [...${name}]`,
          })
      }
      for (const [name, dirs] of optional) {
        for (const d of dirs)
          entries.push({
            file: firstRouteFileBelow(d.dir) ?? d.dir,
            detail: `optional catch-all [[...${name}]]`,
          })
      }
      conflicts.push({
        rule: 'catch-all-mix',
        url: `${parentUrl === '/' ? '' : parentUrl}/<catch-all>`,
        summary: `A required and an optional catch-all sit at the same level under ${parentUrl}`,
        entries,
        fix: 'Keep one. The optional form already matches the parent URL itself.',
      })
    }
  }

  conflicts.sort((a, b) => a.url.localeCompare(b.url) || a.rule.localeCompare(b.rule))
  return { conflicts, stats }
}

/**
 * Human-readable report. Every conflict names the URL and every file that
 * claims it, because the only useful version of this message is one an
 * operator can act on without re-deriving the analysis.
 */
/**
 * @param {{conflicts: RouteConflict[], stats: RouteStats}} result
 * @param {string} appDir
 * @param {number} elapsedMs
 * @returns {string}
 */
export function formatReport({ conflicts, stats }, appDir, elapsedMs) {
  if (conflicts.length === 0) {
    return (
      `route conflicts: none. ${stats.pages} pages, ${stats.routeHandlers} route handlers, ` +
      `${stats.urls} URLs, ${stats.routeGroups} route groups, ${stats.slots} slots, ` +
      `${stats.privateSkipped} private and ${stats.interceptingSkipped} intercepting subtrees ` +
      `skipped (${appDir}, ${elapsedMs}ms).`
    )
  }

  const lines = [
    '',
    `route conflicts: ${conflicts.length} problem${conflicts.length === 1 ? '' : 's'} in ${appDir}`,
    '',
  ]
  conflicts.forEach((c, i) => {
    lines.push(`[${i + 1}] ${c.summary}`)
    lines.push(`    URL: ${c.url}`)
    for (const e of c.entries) lines.push(`      ${e.file}   (${e.detail})`)
    lines.push(`    Fix: ${c.fix}`)
    lines.push('')
  })
  lines.push(
    `Checked ${stats.pages} pages and ${stats.routeHandlers} route handlers in ${elapsedMs}ms.`,
  )
  lines.push('Next.js fails the build on every one of these. Nothing here is advisory.')
  return lines.join('\n')
}

function main() {
  const appDir = process.argv[2] ?? path.join('src', 'app')
  const started = Date.now()
  let result
  try {
    result = analyseAppDir(appDir)
  } catch (err) {
    console.error(err instanceof Error ? err.message : String(err))
    process.exit(2)
  }
  const elapsed = Date.now() - started
  const report = formatReport(result, toPosix(appDir), elapsed)
  if (result.conflicts.length) {
    console.error(report)
    process.exit(1)
  }
  console.log(report)
}

const invokedDirectly =
  process.argv[1] &&
  path.resolve(process.argv[1]).toLowerCase() ===
    path.resolve(fileURLToPath(import.meta.url)).toLowerCase()
if (invokedDirectly) main()
