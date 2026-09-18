import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The 1.5 MB trilingual dictionary must not be in the server graph.
 *
 * THE DEFECT (19 September 2026). `src/lib/i18n/t.ts` imported `lookup` from
 * `./dictionary` - 1,507,637 bytes across 76 statically-imported shards. The
 * root layout calls `t()`, so EVERY server render pulled the whole trilingual
 * dictionary in: all three languages, every one of 16,833 keys, to render one
 * string. Two other files imported `lookup` directly.
 *
 * The generated maps in ./generated/ are the same data with the shard
 * precedence chain and the English fallback already resolved -
 * scripts/verify-i18n-locales.mjs asserts they are identical to `lookup()`
 * across all 16,833 keys x 3 locales - so this is not an approximation.
 *
 * THE TRAP THESE TESTS EXIST FOR. English is imported statically; Arabic and
 * Spanish load on demand, because importing all three would be WORSE than the
 * dictionary (1.37 + 1.73 + 1.52 MB). That creates a failure mode with no
 * symptom: a caller who looks up before the locale has loaded gets the English
 * fallback. The page renders. Nothing errors. An Arabic reader is simply
 * served English, and no test fails.
 *
 * `t()` and `tMany()` are async and await the load themselves, so they cannot
 * be got wrong. `tSync()` is called from synchronous components and cannot -
 * so the last test here fails the build if any file imports `tSync` without
 * also calling `preloadLocale`.
 */

const ROOTS = ['src/app', 'src/components', 'src/lib']

function walk(dir: string, out: string[] = []): string[] {
  let entries: string[]
  try {
    entries = readdirSync(dir)
  } catch {
    return out
  }
  for (const name of entries) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) {
      walk(full, out)
      continue
    }
    if (/\.(ts|tsx)$/.test(name)) out.push(full)
  }
  return out
}

/** Comments quote the old import, so strip them before matching. */
function stripComments(source: string): string {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
}

const FILES = ROOTS.flatMap((r) => walk(join(process.cwd(), r))).filter(
  (f) =>
    !f.includes('__tests__') &&
    !/src[\\/]lib[\\/]i18n[\\/]dictionary/.test(f) &&
    !/src[\\/]lib[\\/]i18n[\\/]generated/.test(f),
)

/** A VALUE import of the dictionary. `import type` is erased at compile time. */
function valueImportsDictionary(source: string): boolean {
  const code = stripComments(source)
  return /import\s+(?!type\s)[^'"]*from\s+['"][^'"]*i18n\/dictionary['"]/.test(code)
}

describe('the server graph', () => {
  it('scans a meaningful number of files, or this guards nothing', () => {
    expect(FILES.length).toBeGreaterThan(500)
  })

  it('holds no value import of the dictionary', () => {
    const offenders = FILES.filter((f) => valueImportsDictionary(readFileSync(f, 'utf8'))).map(
      (f) => f.replace(process.cwd(), '').replace(/\\/g, '/'),
    )
    expect(
      offenders,
      `these pull the 1.5 MB dictionary into the server graph:\n  ${offenders.join('\n  ')}\n` +
        'Use serverLookup/preloadLocale from @/lib/i18n/server-messages instead.',
    ).toEqual([])
  })

  it('still allows `import type`, which costs nothing at runtime', () => {
    // Several files legitimately do this for the Locale type alias.
    const typeOnly = FILES.filter((f) =>
      /import\s+type\s+[^'"]*from\s+['"][^'"]*i18n\/dictionary['"]/.test(readFileSync(f, 'utf8')),
    )
    expect(typeOnly.length).toBeGreaterThan(0)
  })
})

describe('t.ts', () => {
  const t = readFileSync(join(process.cwd(), 'src/lib/i18n/t.ts'), 'utf8')

  it('reads the generated maps, not the dictionary', () => {
    expect(t).toContain("from './server-messages'")
    expect(stripComments(t)).not.toContain("from './dictionary'")
  })

  it('awaits the locale load inside t(), so no call site can forget', () => {
    const fn = t.slice(t.indexOf('export async function t('))
    expect(fn.slice(0, fn.indexOf('\n}'))).toContain('await preloadLocale(locale)')
  })

  it('awaits it inside tMany() too', () => {
    const fn = t.slice(t.indexOf('export async function tMany('))
    expect(fn.slice(0, fn.indexOf('\n}'))).toContain('await preloadLocale(locale)')
  })
})

// ─── The trap ───────────────────────────────────────────────────────────

describe('every synchronous caller loads its own locale', () => {
  it('fails if a tSync file forgets preloadLocale', () => {
    // Forgetting has no symptom: the page renders, in English, for a reader
    // who asked for Arabic. Nothing throws and nothing else would catch it.
    const offenders: string[] = []
    for (const file of FILES) {
      const source = readFileSync(file, 'utf8')
      const code = stripComments(source)
      if (!/\btSync\s*\(/.test(code)) continue
      if (file.replace(/\\/g, '/').endsWith('src/lib/i18n/t.ts')) continue
      if (!/\bpreloadLocale\s*\(/.test(code)) {
        offenders.push(file.replace(process.cwd(), '').replace(/\\/g, '/'))
      }
    }
    expect(
      offenders,
      `these call tSync without loading the locale first:\n  ${offenders.join('\n  ')}`,
    ).toEqual([])
  })

  it('finds the tSync callers it is meant to be guarding', () => {
    // If tSync is renamed or removed, the test above starts passing for the
    // wrong reason. Pin that it still has something to check.
    const callers = FILES.filter(
      (f) =>
        /\btSync\s*\(/.test(stripComments(readFileSync(f, 'utf8'))) &&
        !f.replace(/\\/g, '/').endsWith('src/lib/i18n/t.ts'),
    )
    expect(callers.length).toBeGreaterThanOrEqual(3)
  })
})
