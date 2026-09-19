import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { ANALYSIS_PAGES } from '@/data/analysis'

/**
 * SEO-6. Twenty-one analysis pages shipped a raw escape sequence to Google.
 *
 * `src/data/analysis/index.ts` is the meta description and the Article JSON-LD
 * for 192 pages. Forty-two of its strings contained a literal backslash, the
 * letter u, and four hex digits where a character should be, so a search result
 * read "Grade 9 comparison of Andrew Waterhouse’s Climbing My
 * Grandfather" - the escape printed rather than the apostrophe it stands for.
 *
 * THE CAUSE WAS IN THE GENERATOR. `scripts/generate-analysis-data.js` scrapes
 * page sources with a regex and unescaped the quote pair and nothing else, so
 * unicode escapes in the source passed through as their own characters.
 *
 * ── AND THEN THE FIX NEARLY DID SOMETHING WORSE ─────────────────────────────
 *
 * Having fixed the decoder, the obvious next step was to re-run the generator.
 * That would have been a mistake, and the diff is how it showed: the
 * regenerated file said "Written by GCSE EXAMINERS" where the committed one
 * says "markers".
 *
 * The backup tree that script reads predates the sitewide language cleanup of
 * 14 April 2026, which replaced "Examiner" with "Marker" and "mark scheme"
 * with "marking guide" across 273 files. Regenerating would have silently
 * undone that across 192 descriptions, and it would have looked like a routine
 * regeneration in review.
 *
 * So the data file was corrected in place - the forty-two sequences and
 * nothing else, proven by transform - and the generator now REFUSES to write
 * while its source carries the old wording. A warning on a script somebody
 * runs once a year is a warning nobody reads.
 */

const ROOT = process.cwd()
const DATA = readFileSync(join(ROOT, 'src/data/analysis/index.ts'), 'utf8')
const GENERATOR = readFileSync(join(ROOT, 'scripts/generate-analysis-data.js'), 'utf8')

describe('what ships to Google', () => {
  it('there are pages to check', () => {
    expect(ANALYSIS_PAGES.length).toBeGreaterThan(150)
  })

  it('no description contains a raw escape sequence', () => {
    // The defect, asserted against the parsed values rather than the file, so
    // it is the string a crawler receives that is being checked.
    const bad = ANALYSIS_PAGES.filter((p) => /\\u[0-9a-fA-F]{4}/.test(p.description)).map((p) =>
      p.slug.join('/'),
    )
    expect(bad).toEqual([])
  })

  it('nor does any title', () => {
    const bad = ANALYSIS_PAGES.filter((p) => /\\u[0-9a-fA-F]{4}/.test(p.title)).map((p) =>
      p.slug.join('/'),
    )
    expect(bad).toEqual([])
  })

  it('and the apostrophes are real characters', () => {
    // The counterweight to the two above: deleting the apostrophes entirely
    // would satisfy them. These are possessives in poets' names and they have
    // to still be there.
    // Forty apostrophes, but across eighteen pages - several descriptions
    // compare two poets and carry two possessives each.
    const withApostrophe = ANALYSIS_PAGES.filter((p) => p.description.includes('’'))
    expect(withApostrophe.length).toBeGreaterThanOrEqual(18)
  })

  it('and no stray backslash was left behind by the repair', () => {
    // The first attempt at this replaced six of the seven characters and left
    // the backslash, which reads no better than the escape did.
    const bad = ANALYSIS_PAGES.filter((p) => /\\’|\\–/.test(p.description)).map((p) =>
      p.slug.join('/'),
    )
    expect(bad).toEqual([])
  })
})

describe('the April language cleanup is still in force', () => {
  // This is the half that nearly got undone. These assertions are about the
  // DATA file, so they fail if anybody regenerates it from the stale backup,
  // whatever the generator's guard says.

  it.each([
    ['examiner', /examiner/i],
    ['mark scheme', /mark scheme/i],
    ['assessment objective', /assessment objective/i],
  ])('no description says "%s"', (_label, pattern) => {
    const bad = ANALYSIS_PAGES.filter(
      (p) => pattern.test(p.description) || pattern.test(p.title),
    ).map((p) => p.slug.join('/'))
    expect(bad).toEqual([])
  })

  it('and the wording that replaced it is present', () => {
    // Otherwise the assertions above would pass on an empty file.
    const markers = ANALYSIS_PAGES.filter((p) => /marker/i.test(p.description))
    expect(markers.length).toBeGreaterThan(50)
  })

  it('and there are no em dashes, per the house style', () => {
    expect(DATA).not.toContain('—')
  })
})

describe('the generator cannot undo it again', () => {
  it('refuses rather than warns', () => {
    expect(GENERATOR).toContain('REFUSING TO WRITE')
    expect(GENERATOR).toContain('process.exit(1)')
  })

  it('and checks for each piece of removed wording', () => {
    expect(GENERATOR).toContain('REMOVED_WORDING')
    for (const word of ['examiner', 'mark scheme', 'assessment objective']) {
      expect(GENERATOR.toLowerCase()).toContain(word)
    }
  })

  it('with an escape hatch for whoever refreshes the backup', () => {
    // A guard with no way past it gets deleted rather than satisfied.
    expect(GENERATOR).toContain("process.argv.includes('--force')")
  })

  it('and the refusal happens before anything is written', () => {
    const guard = GENERATOR.indexOf('REFUSING TO WRITE')
    const write = GENERATOR.indexOf('fs.writeFileSync(outputFile')
    expect(guard).toBeGreaterThan(-1)
    expect(write).toBeGreaterThan(guard)
  })
})

describe('the decoder the generator now uses', () => {
  it('every captured string goes through it', () => {
    // Six capture sites. Leaving one on the old ad-hoc unescape is how half the
    // file would come back wrong on the next refresh.
    expect((GENERATOR.match(/decodeJsString\(/g) ?? []).length).toBeGreaterThanOrEqual(7)
  })

  it('and the ad-hoc quote unescaping is gone', () => {
    const code = GENERATOR.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')
    expect(code).not.toMatch(/\.replace\(\/\\\\'\/g/)
    expect(code).not.toMatch(/\.replace\(\/\\\\"\/g/)
  })

  it('and it handles the four-hex-digit form', () => {
    expect(GENERATOR).toContain("if (next === 'u')")
    expect(GENERATOR).toContain('String.fromCharCode(parseInt(hex, 16))')
  })
})

describe('the hreflang comment now matches the sitemap', () => {
  // SEO-6's third part. The root layout justified emitting no `ar` alternate by
  // saying there are "no /ar URLs in the sitemap". There are forty. The
  // conclusion was right and the reason had stopped being true, which is worse
  // than no reason: the next person to add an Arabic page would have read it
  // and believed the surface did not exist.
  const LAYOUT = readFileSync(join(ROOT, 'src/app/layout.tsx'), 'utf8')
  const SITEMAP = readFileSync(join(ROOT, 'src/app/sitemap.ts'), 'utf8')

  it('the sitemap really does emit Arabic URLs', () => {
    expect(SITEMAP).toContain('/ar/blog/')
  })

  it('so the layout no longer claims it does not', () => {
    // Matched on the ORIGINAL sentence, not the phrase. The correction quotes
    // the old claim in order to say it was wrong, so a search for the phrase
    // finds the explanation - the fourth assertion tonight to trip over that.
    expect(LAYOUT).not.toContain('route directory and no /ar URLs')
  })

  it('and still gives a reason for the root having no ar alternate', () => {
    // Deleting the comment would satisfy the assertion above and lose the
    // decision, which is the part worth keeping.
    expect(LAYOUT).toContain('has no Arabic equivalent')
  })

  it('and points at where per-page alternates are set', () => {
    expect(LAYOUT).toContain('src/app/blog/[slug]')
  })
})
