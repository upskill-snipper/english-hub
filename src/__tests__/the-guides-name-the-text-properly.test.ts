import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Forty-five guides, and eleven of them got the book's name wrong.
 *
 * Each guide under /resources/revision-notes/<dir>/ carries a hand-written
 * layout.tsx whose metadata was produced by TITLE-CASING THE DIRECTORY NAME.
 * The directory is a slug, so the result printed, in the page title, the meta
 * description, the Open Graph title and the Open Graph description - four times
 * per page, on indexable pages:
 *
 *     "Merchant Of Venice Revision Notes"      not The Merchant of Venice
 *     "Christmas Carol Revision Notes"         not A Christmas Carol
 *     "Inspector Calls Revision Notes"         not An Inspector Calls
 *     "Romeo And Juliet Revision Notes"        not Romeo and Juliet
 *     "Sign Of Four Revision Notes"            not The Sign of Four
 *     "View From The Bridge Revision Notes"    not A View from the Bridge
 *     "Woman In Black Revision Notes"          not The Woman in Black
 *     "Lord Of The Flies", "Pride And Prejudice", "Jekyll And Hyde", "Much Ado"
 *
 * This is the same root cause as two other defects found the same day: the
 * directory name is not the text's name, and code kept treating it as though it
 * were. Here it reached the one string a student sees in a search result.
 *
 * It matters twice over. A title is the strongest on-page ranking signal and
 * the line a student reads before clicking, and people search "a christmas
 * carol revision", article included. It also simply looks careless on a product
 * sold to schools.
 *
 * WHAT THIS TEST DOES NOT DO, deliberately. It does not require the full
 * canonical title, because several pages shorten one on purpose and are right
 * to: "Jekyll and Hyde" is what students search, not "Strange Case of Dr Jekyll
 * and Mr Hyde", and "The Curious Incident" is a reasonable trim of a title that
 * would otherwise eat the whole SERP line. What it forbids is the MACHINE
 * artefact - a joining word capitalised mid-title, which no human writes - and
 * it pins the eleven corrections by name so a regression says which book broke.
 */

const BASE = join(process.cwd(), 'src/app/resources/revision-notes')

const guideDirs = readdirSync(BASE, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name !== '[slug]')
  .map((d) => d.name)
  .filter((name) => existsSync(join(BASE, name, 'layout.tsx')))

const metadataOf = (dir: string): string => readFileSync(join(BASE, dir, 'layout.tsx'), 'utf8')

describe('the guides are a real corpus', () => {
  it('there are enough of them for this to mean something', () => {
    // Vacuity guard: an empty directory listing would pass every assertion.
    expect(guideDirs.length).toBeGreaterThan(40)
  })

  it('and every one carries a title', () => {
    for (const dir of guideDirs) {
      expect(metadataOf(dir), `${dir} has no title`).toMatch(/title:\s*['"]/)
    }
  })
})

describe('no title capitalises a joining word mid-sentence', () => {
  // The signature of title-casing a slug. " Of ", " And ", " The " and friends
  // are written lower case by every style guide and every human.
  const MACHINE_CASED = / (Of|And|The|In|From|To|For|With) [A-Z]/

  /**
   * Just the book's name, before any suffix.
   *
   * Scoping this correctly is the whole difficulty. A first version tested the
   * WHOLE title and failed 25 of 45 guides on "- The English Hub" and on
   * "Revision Notes for GCSE" - the brand and the descriptor, neither of which
   * is a title-cased slug. A check that fires on two thirds of a healthy corpus
   * is one somebody switches off.
   */
  const namePart = (title: string): string =>
    title.split(/\s*[|]|\s+-\s+|\s+Revision Notes|\s+Study Guide|\s+Notes\b/)[0]

  it.each(guideDirs)('%s', (dir) => {
    const src = metadataOf(dir)
    const titles = [...src.matchAll(/title:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
    expect(titles.length, `${dir} exposes no title`).toBeGreaterThan(0)
    for (const title of titles) {
      expect(namePart(title), `${dir}: "${title}" reads as a title-cased slug`).not.toMatch(
        MACHINE_CASED,
      )
    }
  })

  it('and the check is not vacuous - it still catches the original defect', () => {
    // The scoping above could easily have been loosened until nothing fails.
    // These are the exact strings that were live this morning.
    for (const wrong of [
      'Merchant Of Venice Revision Notes',
      'Romeo And Juliet Revision Notes',
      'Lord Of The Flies Revision Notes',
      'View From The Bridge Revision Notes',
    ]) {
      expect(namePart(wrong), `"${wrong}" would now pass`).toMatch(MACHINE_CASED)
    }
  })
})

describe('the eleven that were wrong, named individually', () => {
  // So a regression reports the book rather than a set difference.
  const fixed: [string, string][] = [
    ['christmas-carol', 'A Christmas Carol'],
    ['inspector-calls', 'An Inspector Calls'],
    ['jekyll-and-hyde', 'Jekyll and Hyde'],
    ['lord-of-the-flies', 'Lord of the Flies'],
    ['merchant-of-venice', 'The Merchant of Venice'],
    ['much-ado', 'Much Ado About Nothing'],
    ['pride-and-prejudice', 'Pride and Prejudice'],
    ['romeo-and-juliet', 'Romeo and Juliet'],
    ['sign-of-four', 'The Sign of Four'],
    ['view-from-the-bridge', 'A View from the Bridge'],
    ['woman-in-black', 'The Woman in Black'],
  ]

  it.each(fixed)('%s names the text "%s"', (dir, name) => {
    const src = metadataOf(dir)
    const title = (src.match(/title:\s*['"]([^'"]+)['"]/) ?? [])[1] ?? ''
    expect(title, `${dir} no longer names the text correctly`).toContain(name)
  })

  it('and the description leads with the name rather than "Free The ..."', () => {
    // Correcting the name made six descriptions read "Free The Merchant of
    // Venice revision notes", which is not English. Front-loading the name is
    // better prose and puts the term a student searched at the start.
    for (const [dir] of fixed) {
      expect(metadataOf(dir), `${dir} reads "Free The ..."`).not.toMatch(/Free (A|An|The) /)
    }
  })
})

describe('the canonical URLs were not touched', () => {
  it('every guide still canonicalises to its own directory', () => {
    // The fix was a string replacement across each file. A replacement that
    // reached the canonical would have pointed 11 pages at URLs that do not
    // exist, which is a far worse defect than the one being fixed.
    //
    // The PATH is asserted, not the exact string: 24 of these guides write an
    // absolute canonical and 21 write a relative one. Both resolve correctly
    // against metadataBase, so that is untidiness rather than a defect, and a
    // test that demanded one form would fail 21 healthy pages.
    for (const dir of guideDirs) {
      const src = metadataOf(dir)
      if (!src.includes('canonical')) continue
      expect(src, `${dir} canonical was rewritten`).toContain(`/resources/revision-notes/${dir}'`)
    }
  })
})
