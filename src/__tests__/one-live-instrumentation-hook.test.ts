import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Two instrumentation files, one of which never ran (REL-6).
 *
 * THE DEFECT (19 September 2026). The repository had both `instrumentation.ts`
 * at the root and `src/instrumentation.ts`. Only one of them ever executed.
 * Next resolves the hook relative to `path.join(pagesDir || appDir, '..')`;
 * with no `pages/` directory and an appDir of `src/app`, that is `src/` - so
 * the src file won and the root one was dead code.
 *
 * The dead one was the more complete of the two. It carried the PII scrubbers
 * and, crucially, `export const onRequestError = Sentry.captureRequestError` -
 * the ONLY occurrence of that export anywhere in the repository. So React
 * Server Component render errors were captured by nothing, and would have gone
 * on being captured by nothing the moment a DSN was set.
 *
 * The SDK had been saying so on every build - "Could not find `onRequestError`
 * hook in instrumentation file" - and the warning scrolled past in build output
 * nobody read. I saw it myself in three separate builds tonight before reading
 * this item.
 *
 * WHY THE `pages/` ASSERTION BELOW IS NOT PEDANTRY. "The root file is absent"
 * is only a proxy for "the src hook is the live one". Creating a `pages/` or
 * `src/pages/` directory moves the resolution root back to the repo root and
 * silently kills `src/instrumentation.ts` - environment validation, Sentry
 * init and the error hook all stop running, with every other assertion here
 * still passing.
 */

const ROOT = process.cwd()

describe('the instrumentation hook', () => {
  it('exists exactly once', () => {
    expect(existsSync(join(ROOT, 'src/instrumentation.ts'))).toBe(true)
    expect(
      existsSync(join(ROOT, 'instrumentation.ts')),
      'a root instrumentation.ts is dead code - Next resolves the hook under src/',
    ).toBe(false)
  })

  it('is still the one Next will resolve', () => {
    // The resolution root is path.join(pagesDir || appDir, '..'). Introduce a
    // pages directory and it becomes the repo root, and src/instrumentation.ts
    // stops being loaded at all.
    expect(existsSync(join(ROOT, 'pages')), 'a pages/ dir moves the hook root').toBe(false)
    expect(existsSync(join(ROOT, 'src/pages')), 'a src/pages/ dir moves the hook root').toBe(false)
    expect(existsSync(join(ROOT, 'src/app'))).toBe(true)
  })

  it('exports the server error hook', () => {
    // The whole point. Without this, server-component render errors reach
    // nothing - error.tsx and global-error.tsx are CLIENT boundaries and catch
    // what the browser sees, not what failed on the server.
    const src = readFileSync(join(ROOT, 'src/instrumentation.ts'), 'utf8')
    expect(src).toMatch(/export async function onRequestError/)
    expect(src).toContain('captureRequestError')
  })

  it('still validates the environment at boot', () => {
    const src = readFileSync(join(ROOT, 'src/instrumentation.ts'), 'utf8')
    expect(src).toContain('validateEnv')
  })
})

describe('the Sentry config files', () => {
  it('has no edge config that nothing imports', () => {
    // sentry.edge.config.ts duplicated the scrubbers and was imported by
    // nothing - src/instrumentation.ts loads ../sentry.server.config in BOTH
    // the nodejs and edge branches. Since PERF-3 both of those imports are
    // guarded on a DSN being present, so with no SENTRY_DSN neither runs; the
    // point stands that there is one server config file, not two.
    expect(existsSync(join(ROOT, 'sentry.edge.config.ts'))).toBe(false)
    expect(existsSync(join(ROOT, 'sentry.server.config.ts'))).toBe(true)
  })

  it('carries no Sentry build options that the installed SDK ignores', () => {
    // hideSourceMaps, disableServerWebpackPlugin and disableClientWebpackPlugin
    // were dropped at @sentry/nextjs v8; this project is on v10 and they are
    // absent even from the SDK's deprecated-option shim. They read as a safety
    // mechanism for the documented build hang and were not one - they were
    // silently ignored unknown keys.
    const config = readFileSync(join(ROOT, 'next.config.js'), 'utf8')
    const code = config
      .split(/\r?\n/)
      .filter((l) => !l.trim().startsWith('//'))
      .join('\n')
    for (const dead of [
      'hideSourceMaps',
      'disableServerWebpackPlugin',
      'disableClientWebpackPlugin',
    ]) {
      expect(code, `${dead} does nothing on this SDK version`).not.toContain(dead)
    }
  })
})

// ─── Comments that asserted the opposite of reality ─────────────────────────

describe('the cron failure comments', () => {
  const CRON_FILES = [
    'src/lib/cron/observability.ts',
    'src/app/api/cron/blog-generate/route.ts',
    'src/app/api/cron/weekly-student-reports/route.ts',
    'src/app/api/cron/affiliate-confirm/route.ts',
    'src/app/api/cron/trial-ending/route.ts',
  ]

  it.each(CRON_FILES)('%s does not claim Vercel retries a failed run', (rel) => {
    // Vercel cron jobs are not retried. Ten comments across six files said they
    // were, and idempotency work was justified by that retry. The protection is
    // still worth having - a manual curl or an overlapping schedule can
    // re-invoke - but a reader who believed the comment would conclude a failed
    // run recovers by itself. It does not: the next attempt is the next
    // scheduled firing, which for a nightly job is 24 hours later.
    const src = readFileSync(join(ROOT, rel), 'utf8')
    const claims = src.match(/Vercel(?:'s)? (?:cron )?retr\w*/gi) ?? []
    const falseClaims = claims.filter((c) => {
      const at = src.indexOf(c)
      const around = src.slice(Math.max(0, at - 90), at + 40)
      return !/does not retry|NOT retr|not retried/i.test(around)
    })
    expect(falseClaims).toEqual([])
  })

  it('checks files that really exist', () => {
    for (const rel of CRON_FILES) expect(existsSync(join(ROOT, rel))).toBe(true)
  })

  it('still has crons to guard', () => {
    const dir = join(ROOT, 'src/app/api/cron')
    expect(readdirSync(dir).length).toBeGreaterThan(10)
  })
})
