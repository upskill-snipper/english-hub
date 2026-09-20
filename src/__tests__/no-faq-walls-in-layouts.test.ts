import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

/**
 * A generic FAQ block may never be mounted from a layout again.
 *
 * THE DEFECT (19 September 2026). `src/components/seo/GeoFaq.tsx` was mounted
 * from eight `layout.tsx` files - /revision, /resources, /igcse, /a-level,
 * /courses, /practice, /mock-exams and /games - plus `src/app/page.tsx`. A
 * layout wraps every descendant route, so one identical wall of eight generic
 * questions rendered on roughly 663 of 855 indexable URLs, on pages it had
 * nothing to do with.
 *
 * IT ALSO EMITTED INVALID STRUCTURED DATA. GeoFaq renders the visible prose
 * AND the `FAQPage` JSON-LD from the same array, and its own docblock forbids
 * putting two FAQPage blocks on one URL. The five per-text pages under
 * `src/app/revision/texts/` mount their own on-topic GeoFaq, and they sit
 * inside `/revision` - so the layout mount and the page mount both fired and
 * each of those five URLs rendered two FAQ sections, emitted two FAQPage
 * entities, and carried the id `geo-faq-heading` twice. Removing the layout
 * mounts is what fixed that; the five page mounts were left alone.
 *
 * WHY THIS TEST IS A WALK AND NOT A LIST OF EIGHT FILES. Nothing about the
 * old arrangement failed. The pages rendered, the build passed and the tests
 * were green throughout. A guard naming the eight known layouts would stay
 * green while a NINTH layout re-introduced the wall, which is exactly the
 * regression it claims to catch. So every `layout.tsx` under `src/app` is
 * read from disk, and the set of pages allowed to mount GeoFaq is pinned -
 * an addition anywhere else fails loudly.
 */

/** Comments here quote the removed mounts, so strip them before matching. */
function stripComments(source: string): string {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
}

/**
 * The only pages allowed to mount GeoFaq: the five set texts whose FAQ copy
 * is genuinely about the text it sits on. Paths are repo-relative and
 * forward-slashed so the assertion reads the same on Windows and Linux.
 */
const ALLOWED_GEOFAQ_PAGES = [
  'src/app/revision/texts/a-christmas-carol/page.tsx',
  'src/app/revision/texts/an-inspector-calls/page.tsx',
  'src/app/revision/texts/jekyll-and-hyde/page.tsx',
  'src/app/revision/texts/macbeth/page.tsx',
  'src/app/revision/texts/romeo-and-juliet/page.tsx',
]

const ROOT = process.cwd()
const APP_DIR = join(ROOT, 'src', 'app')

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
    if (/\.tsx$/.test(name) && !/\.test\.tsx$/.test(name)) out.push(full)
  }
  return out
}

const rel = (file: string) => relative(ROOT, file).replace(/\\/g, '/')

const APP_FILES = walk(APP_DIR)
const LAYOUTS = APP_FILES.filter((f) => /[\\/]layout\.tsx$/.test(f))
const PAGES = APP_FILES.filter((f) => /[\\/]page\.tsx$/.test(f))

/** `import { GeoFaq } ...`, `import GeoFaq from ...`, or a bare side-effect import. */
const IMPORTS_GEOFAQ = /^\s*import\s[^\n]*\bGeoFaq\b/m

/** `<GeoFaq ... />` in JSX. The type-only `GeoFaqItem` must not match. */
const RENDERS_GEOFAQ = /<GeoFaq[\s/>]/

function sourceOf(file: string): string {
  return stripComments(readFileSync(file, 'utf8'))
}

describe('no tree-wide FAQ walls', () => {
  it('no layout.tsx under src/app imports GeoFaq', () => {
    const offenders = LAYOUTS.filter((f) => IMPORTS_GEOFAQ.test(sourceOf(f))).map(rel)

    expect(
      offenders,
      'A layout wraps every descendant route, so a GeoFaq mounted here puts ' +
        'one generic FAQ (and one FAQPage entity) on hundreds of unrelated ' +
        'URLs, and duplicates the schema on the five text pages that mount ' +
        'their own. Mount it from the page whose topic it is about.',
    ).toEqual([])
  })

  it('no layout.tsx under src/app renders <GeoFaq>', () => {
    const offenders = LAYOUTS.filter((f) => RENDERS_GEOFAQ.test(sourceOf(f))).map(rel)

    expect(offenders).toEqual([])
  })

  it('the homepage does not render GeoFaq', () => {
    const homepage = join(APP_DIR, 'page.tsx')
    const source = sourceOf(homepage)

    expect(IMPORTS_GEOFAQ.test(source)).toBe(false)
    expect(RENDERS_GEOFAQ.test(source)).toBe(false)
  })

  it('and carries no question block of ANY kind', () => {
    // WIDENED 20 September 2026. This file guarded one component by name, and
    // a different one walked straight past it: the homepage carried
    // <SchoolFAQ />, twelve school-procurement questions opening with "How
    // long is a school pilot?", on a page whose visitors are students and
    // parents. A crawl found the same twelve byte-for-byte on /teachers,
    // /schools and /school-pilot - four URLs, one identical FAQPage entity.
    //
    // The founder's instruction is about the SHAPE, not the component: "I do
    // not want the ten questions dumper at the bottom of each page again, it
    // is often irrelevant and overwhelming for users." So this asserts no FAQ
    // component at all on the homepage, by any name.
    //
    // The three B2B pages keep it. Procurement questions are the subject
    // there, which is the distinction that matters.
    const source = sourceOf(join(APP_DIR, 'page.tsx'))
    expect(source, 'the homepage mounts a FAQ component again').not.toMatch(
      /<(SchoolFAQ|GeoFaq|FaqSection|FAQSection)\b/,
    )
    expect(source, 'the homepage emits FAQPage structured data again').not.toMatch(/FAQPageJsonLd/)
  })

  it('but the pages where procurement IS the subject still have it', () => {
    // The counterweight. Deleting SchoolFAQ everywhere would satisfy the
    // assertion above and throw away a real B2B conversion surface.
    for (const page of ['teachers/page.tsx', 'schools/page.tsx', 'school-pilot/page.tsx']) {
      expect(sourceOf(join(APP_DIR, page)), `${page} lost its FAQ`).toMatch(/<SchoolFAQ\b/)
    }
  })

  it('exactly the five on-topic set-text pages mount GeoFaq', () => {
    const mounts = PAGES.filter((f) => RENDERS_GEOFAQ.test(sourceOf(f)))
      .map(rel)
      .sort()

    // Equality, not containment: a sixth mount anywhere has to be argued for
    // here rather than appearing silently.
    expect(
      mounts,
      'The FAQ copy on a GeoFaq must be about the page it sits on. If a new ' +
        'page has earned one, add it to ALLOWED_GEOFAQ_PAGES; if a mount has ' +
        'gone, remove it from the list.',
    ).toEqual([...ALLOWED_GEOFAQ_PAGES].sort())
  })

  it('reads a real tree, not an empty glob', () => {
    // Without this the four assertions above pass vacuously if the walk ever
    // returns nothing, and the guard is worth less than no guard at all.
    expect(LAYOUTS.length).toBeGreaterThan(300)
    expect(PAGES.length).toBeGreaterThan(300)
    expect(LAYOUTS.map(rel)).toContain('src/app/revision/layout.tsx')
    expect(LAYOUTS.map(rel)).toContain('src/app/resources/layout.tsx')
  })

  it('the regexes actually match a mount and a plain import', () => {
    // A guard built on a regex that matches nothing is the failure mode this
    // repository keeps shipping, so prove both patterns bite.
    expect(IMPORTS_GEOFAQ.test("import { GeoFaq } from '@/components/seo/GeoFaq'")).toBe(true)
    expect(RENDERS_GEOFAQ.test('<GeoFaq faqs={FAQS} heading="x" />')).toBe(true)
    // A type-only import of GeoFaqItem is fine and must not trip the render check.
    expect(RENDERS_GEOFAQ.test("import { type GeoFaqItem } from '@/components/seo/GeoFaq'")).toBe(
      false,
    )
  })
})
