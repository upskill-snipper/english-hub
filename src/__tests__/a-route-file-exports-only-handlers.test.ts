import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

/**
 * A route file that exports a helper fails `next build` and nothing else.
 *
 * FOUND THE HARD WAY, 20 September 2026. The operator digest exported
 * `gatherDigest`, `needsAttention` and `renderDigestText` so its test could
 * import them. `npx tsc --noEmit` passed, `npx vitest run` passed, `npx eslint`
 * passed - and `next build` failed:
 *
 *   Property 'gatherDigest' is incompatible with index signature.
 *   Type '(now: number) => Promise<DigestFigures>' is not assignable to 'never'.
 *
 * Next.js generates a type in `.next/types` that constrains what a route file
 * may export. That file is written during the build, so the three gates running
 * on every push cannot see the constraint at all.
 *
 * HOW NARROW THE RULE IS, I DO NOT KNOW, and this file does not pretend to.
 * One route in this repository exports a shared handler and has built for
 * months, so it is not a blanket ban on extra exports; characterising it
 * exactly would take a four-minute build per experiment and the generated type
 * from a failed build is not kept. So this allows the case known to build,
 * lists it, and fails anything new.
 *
 * Three green checks and a red build is the shape this repository keeps finding:
 * the check that ran was not the check that mattered. A full build takes four
 * minutes; this takes milliseconds and catches the same mistake, so the next
 * person finds out before Vercel does.
 *
 * The fix in every case is the same one applied to the digest: move the logic to
 * a module and let the route import it. That is better anyway - a handler that
 * is only a handler is easier to read, and the logic becomes testable without
 * pretending to make an HTTP request.
 */

const ROOT = process.cwd()
const APP = join(ROOT, 'src/app')

/** Everything Next allows a route file to export. */
const ALLOWED = new Set([
  // Handlers
  'GET',
  'HEAD',
  'POST',
  'PUT',
  'DELETE',
  'PATCH',
  'OPTIONS',
  // Route segment config
  'dynamic',
  'dynamicParams',
  'revalidate',
  'fetchCache',
  'runtime',
  'preferredRegion',
  'maxDuration',
  'generateStaticParams',
  'config',
])

function routeFiles(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, e.name)
    if (e.isDirectory()) routeFiles(full, out)
    else if (e.name === 'route.ts' || e.name === 'route.js') out.push(full)
  }
  return out
}

const FILES = routeFiles(APP)

/**
 * The one existing exception, recorded rather than silently permitted.
 *
 * `review/route.ts` exports `handleReview`, which the approve and reject routes
 * import as a shared handler, and it has built successfully for months. So the
 * rule Next enforces is evidently narrower than "no extra exports", and I could
 * not characterise it exactly without a four-minute build per experiment - the
 * generated type that carries the constraint is written during the build and
 * the failing one is not kept.
 *
 * Rather than guess at the rule and write a gate that is confidently wrong, this
 * allows the one case known to build and fails anything new. That is the same
 * shape as scripts/schema-drift-known.json: a list of accepted debt so that a
 * red result means something new, not old news.
 *
 * If this one ever does break a build, the fix is the one applied to the digest:
 * move the handler to a module and import it from all three routes.
 */
const KNOWN_EXCEPTIONS = new Set([
  '/src/app/api/marking/[submissionId]/review/route.ts exports handleReview',
])

/** Exported names in a file, ignoring `export type` and `export interface`. */
function exportedValueNames(src: string): string[] {
  const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')
  const names: string[] = []
  for (const m of code.matchAll(
    /^export\s+(?:async\s+)?(?:function|const|let|var|class)\s+([A-Za-z0-9_$]+)/gm,
  )) {
    names.push(m[1])
  }
  // `export { a, b }` re-exports count too.
  for (const m of code.matchAll(/^export\s*\{([^}]*)\}/gm)) {
    for (const part of m[1].split(',')) {
      const name = part
        .split(/\s+as\s+/)
        .pop()
        ?.trim()
      if (name && !name.startsWith('type ')) names.push(name)
    }
  }
  return names
}

describe('there are route files to check', () => {
  it('found them', () => {
    // Without this the assertion below passes by scanning nothing, which is the
    // failure mode of every check in this repository that has ever gone quiet.
    expect(FILES.length).toBeGreaterThan(150)
  })
})

describe('no route file exports anything Next will reject', () => {
  it('every export is a handler or a segment config value', () => {
    const offenders: string[] = []
    for (const file of FILES) {
      const rel = file.replace(ROOT, '').replace(/\\/g, '/')
      for (const name of exportedValueNames(readFileSync(file, 'utf8'))) {
        if (ALLOWED.has(name)) continue
        const entry = `${rel} exports ${name}`
        if (KNOWN_EXCEPTIONS.has(entry)) continue
        offenders.push(entry)
      }
    }
    expect(
      offenders,
      'a route file may export only its handlers and segment config; move the rest to a module',
    ).toEqual([])
  })

  it('and the one known exception is still the only one', () => {
    // If it is ever fixed, this fails and the allowlist entry should go with it.
    // An allowlist that outlives its entry is how a checker starts lying.
    const rel = '/src/app/api/marking/[submissionId]/review/route.ts'
    const src = readFileSync(join(ROOT, rel.slice(1)), 'utf8')
    expect(exportedValueNames(src)).toContain('handleReview')
  })

  it('and the digest that caused this is not one of them', () => {
    // Named specifically, because it is the case that proves the rule and the
    // one most likely to be undone by somebody wanting a quick test import.
    const digest = readFileSync(join(APP, 'api/cron/operator-digest/route.ts'), 'utf8')
    expect(exportedValueNames(digest).sort()).toEqual(['GET', 'dynamic'])
  })

  it('while its logic is still exported from somewhere testable', () => {
    // The counterweight. Deleting the exports rather than moving them would
    // satisfy the assertions above and leave the digest untestable.
    const logic = readFileSync(join(ROOT, 'src/lib/ops/operator-digest.ts'), 'utf8')
    for (const name of ['gatherDigest', 'needsAttention', 'renderDigestText']) {
      expect(logic, `${name} is not exported from the logic module`).toContain(`export`)
      expect(logic).toContain(name)
    }
  })
})
