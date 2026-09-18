import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

/**
 * Heavy third-party SDKs must not be statically imported into the client graph.
 *
 * THE DEFECT (19 September 2026, PERF-7 phase A). `@sentry/nextjs` was imported
 * at the top of eight client modules. Two of them - `src/app/error.tsx` and
 * `src/app/global-error.tsx` - sit in EVERY route's client graph, so a 460 KB
 * chunk (~128 KB gzip) was downloaded, parsed and executed by every visitor on
 * all 2,637 page entries, to run an SDK that production has disabled because it
 * has no DSN.
 *
 * WHY THIS TEST IS A GLOB AND NOT A LIST OF EIGHT FILES. The first draft of it
 * named the eight known importers. That version passes forever while a NEW
 * client module adds `import * as Sentry from '@sentry/nextjs'` and quietly
 * restores the entire 460 KB - which is precisely the regression it claims to
 * guard. There is no visible symptom: the page still works, it is just heavy
 * again. So the rule is inverted - every file is checked, and anything allowed
 * to keep a static import has to be named here with a reason.
 *
 * Type-only imports and `import()` are both fine and are not matched: the first
 * is erased at compile time, the second lands in a separate async chunk that is
 * fetched only if it is ever needed.
 */

/** Packages that must never be statically imported outside the allowlist. */
const HEAVY_CLIENT_PACKAGES = ['@sentry/nextjs', 'posthog-js']

/**
 * Files permitted to keep a static import, each for a stated reason.
 *
 * `src/app/api/**` is excluded wholesale below rather than listed here: App
 * Router route handlers are server-only by construction and cost the browser
 * nothing.
 */
const ALLOWLIST: Record<string, string> = {
  // Server-only modules. Reached from route handlers and cron, never bundled
  // for the browser.
  'src/lib/billing/provision-signup-trial.ts': 'server-only: trial provisioning',
  'src/lib/billing/subscription-sync.ts': 'server-only: Stripe reconciliation',
  'src/lib/cron/observability.ts': 'server-only: cron failure reporting',
  'src/lib/identity/profiles.ts': 'server-only: identity resolution',

  // PERF-7 phase B closed the PostHog hole that used to be listed here:
  // src/lib/posthog.ts now imports posthog-js dynamically, behind the consent
  // check. Nothing should be added back without a reason as good.
}

function walk(dir: string, out: string[] = []): string[] {
  let entries: string[]
  try {
    entries = readdirSync(dir)
  } catch {
    return out
  }
  for (const entry of entries) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      if (entry === '__tests__' || entry === 'node_modules') continue
      walk(full, out)
    } else if (/\.tsx?$/.test(entry) && !/\.test\.tsx?$/.test(entry)) {
      out.push(full)
    }
  }
  return out
}

/** Strip comments so the guard never matches a file's own explanation of it. */
function code(source: string): string {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .split(/\r?\n/)
    .map((line) => line.replace(/\/\/.*$/, ''))
    .join('\n')
}

const ROOT = process.cwd()

const CANDIDATES = [
  ...walk(join(ROOT, 'src')).filter((f) => {
    const rel = relative(ROOT, f).replace(/\\/g, '/')
    // Route handlers never reach the browser.
    return !rel.startsWith('src/app/api/')
  }),
  join(ROOT, 'instrumentation-client.ts'),
]

describe('heavy SDKs stay out of the initial client bundle', () => {
  it.each(HEAVY_CLIENT_PACKAGES)('nothing statically imports %s', (pkg) => {
    // Matches `import ... from 'pkg'` and bare `import 'pkg'`, but NOT
    // `import type ... from 'pkg'` and NOT `import('pkg')`.
    const staticImport = new RegExp(
      String.raw`^\s*import\s+(?!type\s)[^\n]*from\s+['"]${pkg.replace('/', '\\/')}['"]|^\s*import\s+['"]${pkg.replace('/', '\\/')}['"]`,
      'm',
    )

    const offenders = CANDIDATES.filter((file) => {
      const rel = relative(ROOT, file).replace(/\\/g, '/')
      if (rel in ALLOWLIST) return false
      let source: string
      try {
        source = readFileSync(file, 'utf8')
      } catch {
        return false
      }
      return staticImport.test(code(source))
    }).map((f) => relative(ROOT, f).replace(/\\/g, '/'))

    expect(
      offenders,
      `${pkg} would be pulled into the initial bundle by these files. Use the ` +
        'lazy wrapper (@/lib/sentry-client) or a dynamic import(), or add the ' +
        'file to ALLOWLIST with a reason if it is genuinely server-only.',
    ).toEqual([])
  })

  it('checks a meaningful number of files, not an empty glob', () => {
    // If the walk silently returned nothing the assertions above would pass
    // vacuously and the guard would be worthless.
    expect(CANDIDATES.length).toBeGreaterThan(300)
  })

  it('still reaches the two root error boundaries', () => {
    // These are the files that made the chunk universal. If a refactor moves
    // or renames them, the guard must not quietly stop covering them.
    const rels = CANDIDATES.map((f) => relative(ROOT, f).replace(/\\/g, '/'))
    expect(rels).toContain('src/app/error.tsx')
    expect(rels).toContain('src/app/global-error.tsx')
    expect(rels).toContain('instrumentation-client.ts')
  })
})

describe('the lazy Sentry wrapper', () => {
  const wrapper = readFileSync(join(ROOT, 'src/lib/sentry-client.ts'), 'utf8')

  it('loads the SDK only behind the DSN check', () => {
    const body = code(wrapper)
    expect(body).toMatch(/if \(!process\.env\.NEXT_PUBLIC_SENTRY_DSN\) return/)
    expect(body).toContain("import('@sentry/nextjs')")
  })

  it('forwards the caller context unchanged', () => {
    // An earlier draft wrapped it as `{ extra: context }`, which turned
    // useProgressSync's `{ tags: { feature } }` into `extra.tags.feature` and
    // lost the per-route filter documented in OBSERVABILITY_SETUP.md.
    const body = code(wrapper)
    expect(body).toMatch(/captureException\(error, context\)/)
    expect(body).not.toMatch(/\{\s*extra:\s*context\s*\}/)
  })
})

describe('the error boundaries that made the chunk universal', () => {
  const BOUNDARIES = [
    'src/app/error.tsx',
    'src/app/global-error.tsx',
    'src/app/courses/error.tsx',
    'src/app/dashboard/error.tsx',
    'src/app/mock-exams/error.tsx',
    'src/app/school/error.tsx',
    'src/hooks/useProgressSync.ts',
  ]

  it.each(BOUNDARIES)('%s still reports through the wrapper', (rel) => {
    // Removing the import is only half the fix - the other half is that errors
    // are still reported when a DSN exists. A boundary that silently stopped
    // calling Sentry at all would also pass the import guard above.
    const body = code(readFileSync(join(ROOT, rel), 'utf8'))
    expect(body).toContain('captureClientException(')
    expect(body).toContain("from '@/lib/sentry-client'")
  })

  it('keeps the progress-sync tag that survives the refactor', () => {
    const body = code(readFileSync(join(ROOT, 'src/hooks/useProgressSync.ts'), 'utf8'))
    expect(body).toMatch(/tags:\s*\{\s*feature:\s*'progress-sync'\s*\}/)
  })
})
