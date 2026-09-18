import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { getCourseName } from '@/lib/utils'
import COURSE_NAMES from '@/data/generated/course-names.json'

/**
 * Keep the course corpus out of every page's bundle.
 *
 * `getCourseName()` in src/lib/utils.ts carried the comment "lazy-loads course
 * data to avoid pulling ~900KB into every import" and then called
 * `require('@/data/courses')`. webpack resolves a `require` with a static
 * string at build time, so nothing was lazy. courses.ts aggregates 27
 * curriculum modules, about 7.6 MB of TypeScript.
 *
 * Because header.tsx, language-toggle.tsx and BoardGate.tsx all import `cn()`
 * from @/lib/utils, that corpus was in the root layout's client graph on all
 * 1,049 pages - roughly 3.6 MB raw / 1.1 MB gzip of shared chunks carrying
 * lesson titles and IGCSE poetry prose - and the matching 6.8 MB server chunk
 * was required by every one of the 1,045 page bundles.
 *
 * Tomorrow's social traffic lands on marketing pages on phones, where that is
 * the single biggest drag on first interaction and on the Core Web Vitals used
 * for search ranking.
 *
 * This is the same defect family as the mock-exam loader: a lazy loader
 * defeated by one eager import. So the guard is structural, not a comment.
 */

/** Files that end up in the bundle of every page, via the root layout. */
const SHARED = ['src/lib/utils.ts']
const SHARED_DIRS = ['src/components/layout', 'src/components/board']

function filesUnder(dir: string): string[] {
  const abs = join(process.cwd(), dir)
  const out: string[] = []
  const walk = (d: string) => {
    for (const name of readdirSync(d)) {
      const full = join(d, name)
      if (statSync(full).isDirectory()) {
        walk(full)
        continue
      }
      if (/\.(ts|tsx)$/.test(name)) out.push(full)
    }
  }
  try {
    walk(abs)
  } catch {
    // directory may not exist in a trimmed checkout
  }
  return out
}

/**
 * Strip comments before matching. The guard describes the defect it prevents,
 * and those descriptions quote the old `require('@/data/courses')` call - a
 * scanner that matched prose would flag its own documentation.
 */
function stripComments(source: string): string {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
}

/** Any static import or require of the course corpus, excluding the tiny map. */
function corpusReferences(raw: string): string[] {
  const source = stripComments(raw)
  const hits: string[] = []
  const patterns = [
    /import\s[^'"]*from\s+['"]@\/data\/(?!generated\/)[^'"]+['"]/g,
    /require\(\s*['"]@\/data\/(?!generated\/)[^'"]+['"]\s*\)/g,
    /from\s+['"]\.\.?\/[^'"]*\/data\/(?!generated\/)[^'"]+['"]/g,
  ]
  for (const re of patterns) {
    for (const m of source.matchAll(re)) hits.push(m[0])
  }
  return hits
}

// ─── The guard ──────────────────────────────────────────────────────────

describe('code that ships in every page', () => {
  const targets = [...SHARED.map((f) => join(process.cwd(), f)), ...SHARED_DIRS.flatMap(filesUnder)]

  it('covers the files the defect actually travelled through', () => {
    // If someone moves the header, this test should start failing rather than
    // silently guarding nothing.
    expect(targets.length).toBeGreaterThan(3)
    expect(targets.some((t) => t.endsWith('utils.ts'))).toBe(true)
    expect(targets.some((t) => t.includes('header'))).toBe(true)
  })

  it.each([...SHARED, ...SHARED_DIRS])('%s pulls in no course data', (target) => {
    const files = target.endsWith('.ts') ? [join(process.cwd(), target)] : filesUnder(target)
    for (const file of files) {
      const hits = corpusReferences(readFileSync(file, 'utf8'))
      expect(hits, `${file} imports the course corpus:\n  ${hits.join('\n  ')}`).toEqual([])
    }
  })

  it('specifically never requires @/data/courses again', () => {
    const utils = stripComments(readFileSync(join(process.cwd(), 'src/lib/utils.ts'), 'utf8'))
    expect(utils).not.toMatch(/require\(\s*['"]@\/data\/courses['"]/)
    expect(utils).not.toMatch(/from\s+['"]@\/data\/courses['"]/)
  })
})

// ─── The replacement has to actually work ───────────────────────────────

describe('the generated course-name map', () => {
  it('holds every course, not a sample', () => {
    // 87 at the time of writing. A map that silently shrank to a handful would
    // pass every other assertion here.
    expect(Object.keys(COURSE_NAMES).length).toBeGreaterThanOrEqual(80)
  })

  it('is small enough to ship everywhere', () => {
    const bytes = JSON.stringify(COURSE_NAMES).length
    expect(bytes).toBeLessThan(32 * 1024)
  })

  it('maps ids to non-empty titles', () => {
    for (const [id, title] of Object.entries(COURSE_NAMES)) {
      expect(typeof title, id).toBe('string')
      expect(title.length, id).toBeGreaterThan(0)
    }
  })

  it('resolves a known course', () => {
    const [id, title] = Object.entries(COURSE_NAMES)[0]!
    expect(getCourseName(id)).toBe(title)
  })

  it('falls back to the id for an unknown course, as before', () => {
    expect(getCourseName('no-such-course')).toBe('no-such-course')
  })

  it('carries titles only - no lessons, no prose', () => {
    // The point of the map. If a title field ever grows into lesson content,
    // the corpus is back in the bundle by another route.
    for (const [id, title] of Object.entries(COURSE_NAMES)) {
      expect(title.length, `${id} title is suspiciously long`).toBeLessThan(200)
    }
  })
})

// ─── The generator stays wired ──────────────────────────────────────────

describe('the generator', () => {
  it('runs in prebuild, so the map cannot drift from the corpus', () => {
    const pkg = readFileSync(join(process.cwd(), 'package.json'), 'utf8')
    expect(pkg).toContain('scripts/generate-course-names.mjs')
    const prebuild = JSON.parse(pkg).scripts.prebuild as string
    expect(prebuild).toContain('generate-course-names.mjs')
  })
})
