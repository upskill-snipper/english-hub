import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, dirname, relative, sep } from 'node:path'

/**
 * A schema node saying "this page is <url>" was stamped onto 700 other pages.
 *
 * THE DEFECT (20 September 2026, found by parsing the JSON-LD of 218 live
 * URLs). Nine layouts each mounted an identity node with a hard-coded `url`:
 *
 *     src/app/revision/layout.tsx                 LearningResource     277 URLs
 *     src/app/resources/layout.tsx                LearningResource     214
 *     src/app/igcse/layout.tsx                    LearningResource     153
 *     src/app/courses/layout.tsx                  Course                88
 *     src/app/demo/school/layout.tsx              SoftwareApplication   15
 *     src/app/demo/teacher/layout.tsx             SoftwareApplication   11
 *     src/app/revision/poetry/edexcel/layout.tsx  Course                10
 *     src/app/a-level/layout.tsx                  LearningResource       5
 *     src/app/demo/student/layout.tsx             SoftwareApplication    5
 *
 * A layout wraps every descendant route, so each of those URLs carried a node
 * naming a DIFFERENT page. Verified on the live site: /revision/texts/macbeth
 * emitted two LearningResource nodes, the guide's own and "English Revision
 * Hub" pointing at /revision. These are the deep long-tail pages that should
 * win answer-engine citations, and an engine reading "what is this page about"
 * from structured data was told the wrong thing on every one of them.
 *
 * IT IS THE SAME DEFECT AS THE FAQ WALLS, a day apart and in four of the same
 * files. `no-faq-walls-in-layouts.test.ts` guards GeoFaq and SchoolFAQ by
 * name, and could not see this because it is a different component doing the
 * same thing.
 *
 * WHY THE RULE IS "LAYOUT WITH DESCENDANTS" AND NOT "ANY LAYOUT". Twelve
 * further layouts mount an identity node and wrap exactly one page - the
 * six Power and Conflict poems, the five english-language technique pages,
 * /faqs. A layout over a single route reaches only that route, so the node is
 * on the URL it names and nothing is wrong. Naming those as offenders would
 * have meant twelve edits that change no byte of output, and would have
 * stated a rule the defect does not support. The rule here is the harm
 * itself: an identity node may not reach a URL other than the one it names.
 * A leaf layout that later gains a sub-route fails this the moment it does.
 *
 * BREADCRUMBS ARE DELIBERATELY NOT IN THIS SET, and the first draft of this
 * file had that wrong. A layout breadcrumb does give descendants a trail that
 * stops at the section - live, /games/apostrophe-ace declares Home > Revision
 * games and never names itself - but a shortened trail is a weaker claim, not
 * a false one: it does not assert that the page IS another URL. Six layouts
 * do this over 84 URLs. Worth revisiting, not worth conflating with a defect
 * of a different kind.
 *
 * WebsiteJsonLd and ReviewedBylineJsonLd in the root layout are correct and
 * must stay: a WebSite node describes the site, so it is true on all 1,071
 * pages. That is the distinction the set below encodes - node describes the
 * PAGE, or node describes the SITE.
 *
 * MUTATION RUN, each verified to have altered the file first:
 *   - LearningResourceJsonLd back into src/app/revision/layout.tsx  -> fails
 *   - CourseJsonLd back into src/app/revision/poetry/edexcel/layout -> fails
 *   - deleting the node from src/app/courses/page.tsx               -> fails
 *   - a stray sub-route under a leaf layout that mounts one         -> fails
 */

const ROOT = process.cwd()
const APP = join(ROOT, 'src/app')

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) walk(full, out)
    else out.push(full)
  }
  return out
}

const ALL = walk(APP)
const LAYOUTS = ALL.filter((f) => /[\\/]layout\.tsx$/.test(f))
const PAGES = ALL.filter((f) => /[\\/]page\.tsx$/.test(f))

const rel = (f: string) => relative(ROOT, f).replace(/\\/g, '/')

/** Comments below quote the removed mounts, so strip them before matching. */
const strip = (s: string) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')

/**
 * Nodes that answer "what IS this page". Each carries a hard-coded `url`, so
 * one of them reaching a second URL makes that URL lie about itself.
 * BreadcrumbJsonLd, WebsiteJsonLd and ReviewedBylineJsonLd are absent by the
 * reasoning in the docblock.
 */
const IDENTITY_NODES = [
  'LearningResourceJsonLd',
  'CourseJsonLd',
  'SoftwareApplicationJsonLd',
  'FAQPageJsonLd',
  'ArticleJsonLd',
  'QuizJsonLd',
  'HowToJsonLd',
]

/** How many routes a layout wraps: its own page plus everything beneath it. */
function descendantPageCount(layout: string): number {
  const dir = dirname(layout)
  return PAGES.filter((p) => p === join(dir, 'page.tsx') || p.startsWith(dir + sep)).length
}

const MOUNTED = (source: string, component: string) =>
  new RegExp(`<${component}[\\s/>]`).test(source)

describe('an identity node never reaches a page it does not name', () => {
  it('reads a real tree', () => {
    // Vacuity guard: an empty walk passes everything below it.
    expect(LAYOUTS.length).toBeGreaterThan(300)
    expect(PAGES.length).toBeGreaterThan(300)
    expect(LAYOUTS.map(rel)).toContain('src/app/revision/layout.tsx')
    expect(PAGES.map(rel)).toContain('src/app/revision/texts/macbeth/page.tsx')
  })

  it('and the descendant count is really counting', () => {
    // The whole rule hangs on this number. If it silently returned 1 for
    // everything, every assertion below would pass while the defect stood.
    expect(descendantPageCount(join(APP, 'revision/layout.tsx'))).toBeGreaterThan(200)
    expect(
      descendantPageCount(join(APP, 'revision/poetry/power-and-conflict/london/layout.tsx')),
    ).toBe(1)
  })

  it('no layout wrapping other routes mounts one', () => {
    const offenders: string[] = []
    for (const layout of LAYOUTS) {
      if (descendantPageCount(layout) <= 1) continue
      const source = strip(readFileSync(layout, 'utf8'))
      for (const node of IDENTITY_NODES) {
        if (MOUNTED(source, node)) offenders.push(`${rel(layout)} mounts ${node}`)
      }
    }
    expect(
      offenders.sort(),
      'These nodes hard-code a url. A layout wraps every route beneath it, so ' +
        'each descendant carries a node naming a different page. Move it into ' +
        "that path's own page.tsx - add a small server page.tsx wrapper if the " +
        'page itself is a client component.',
    ).toEqual([])
  })

  it('and the nine pages that lost one still emit it, on their own url', () => {
    // The counterweight. Deleting all nine would satisfy the assertion above
    // and throw away nine legitimate entities - the wrong fix, and the one a
    // hurried reading of this file would reach for.
    const expected: [string, string, string][] = [
      ['revision', 'LearningResourceJsonLd', '/revision'],
      ['resources', 'LearningResourceJsonLd', '/resources'],
      ['igcse', 'LearningResourceJsonLd', '/igcse'],
      ['courses', 'CourseJsonLd', '/courses'],
      ['a-level', 'LearningResourceJsonLd', '/a-level'],
      ['demo/school', 'SoftwareApplicationJsonLd', '/demo/school'],
      ['demo/teacher', 'SoftwareApplicationJsonLd', '/demo/teacher'],
      ['demo/student', 'SoftwareApplicationJsonLd', '/demo/student'],
      ['revision/poetry/edexcel', 'CourseJsonLd', '/revision/poetry/edexcel'],
    ]
    for (const [route, node, path] of expected) {
      const source = readFileSync(join(APP, route, 'page.tsx'), 'utf8')
      expect(MOUNTED(strip(source), node), `/${route} lost its ${node} entirely`).toBe(true)
      expect(source, `/${route} emits a node naming some other url`).toContain(
        `url="https://theenglishhub.app${path}"`,
      )
    }
  })

  it('the site-wide nodes are still site-wide', () => {
    // Stated as an assertion so the exception is deliberate rather than an
    // oversight somebody later "tidies" into the list above.
    const rootLayout = strip(readFileSync(join(APP, 'layout.tsx'), 'utf8'))
    expect(MOUNTED(rootLayout, 'WebsiteJsonLd')).toBe(true)
    for (const node of IDENTITY_NODES) expect(MOUNTED(rootLayout, node)).toBe(false)
  })

  it('the mount regex matches a mount and not an import', () => {
    // A guard built on a regex that matches nothing is the failure mode this
    // repository keeps shipping, so prove the pattern bites both ways.
    expect(MOUNTED('<CourseJsonLd\n  name="x"\n/>', 'CourseJsonLd')).toBe(true)
    expect(MOUNTED('<CourseJsonLd url="x" />', 'CourseJsonLd')).toBe(true)
    expect(MOUNTED("import { CourseJsonLd } from '@/components/seo/json-ld'", 'CourseJsonLd')).toBe(
      false,
    )
  })
})
