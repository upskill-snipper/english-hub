import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { buildTextNav, textSubpageExists } from '@/lib/revision/text-nav'
import { PLACEHOLDER_TEXT_SLUGS } from '@/lib/revision/placeholder-texts.generated'

/**
 * Telling a student their finished guide does not exist.
 *
 * THE REGRESSION, shipped this morning and live for several hours. The
 * text-scoped rail printed "This guide is still being written" whenever a text
 * had no SUB-PAGES. Only 16 of the 53 texts have any, so it said that on 37
 * hubs - and seventeen of those are complete guides of 700 to 750 lines.
 *
 * Hamlet (714 lines), King Lear (749), The Great Gatsby (749), The Sign of Four
 * (750), The Tempest (734), Othello (701), Twelfth Night (707), Julius Caesar
 * (737), Henry V (727), Much Ado About Nothing (725), Silas Marner (710) and
 * A Streetcar Named Desire (718) each told the reader their guide was unwritten
 * while displaying it.
 *
 * It was worse than a wrong sentence. The shell collapsed the site-wide register
 * into a closed group at the same time, on the reasoning that the text's own
 * sections had replaced it - but those texts have no sections, so the page ended
 * up with a rail of one link and the way out folded away. Less navigation than
 * before the feature existed.
 *
 * THE CONFUSION WAS MINE AND IT IS WORTH NAMING: "has no sub-pages" is not
 * "is not written". A single-page guide of 750 words is a guide. The generated
 * placeholder register is the only thing that actually knows which texts are
 * unwritten, so it decides now.
 */

const ROOT = process.cwd()
const TEXTS = join(ROOT, 'src/app/revision/texts')
const NAV = readFileSync(join(ROOT, 'src/app/revision/_components/text-scoped-nav.tsx'), 'utf8')
const SHELL = readFileSync(join(ROOT, 'src/app/revision/_components/revision-shell.tsx'), 'utf8')

/** Texts with a real page of their own that is not a placeholder. */
const REAL_GUIDES = SET_TEXTS.filter(
  (t) => existsSync(join(TEXTS, t.slug, 'page.tsx')) && !PLACEHOLDER_TEXT_SLUGS.has(t.slug),
).map((t) => t.slug)

describe('the texts that were being libelled', () => {
  // Named individually. A set-difference failure would not make the point.
  const WRONGLY_CALLED_UNWRITTEN = [
    'hamlet',
    'king-lear',
    'the-great-gatsby',
    'othello',
    'twelfth-night',
    'julius-caesar',
    'henry-v',
    'much-ado-about-nothing',
    'silas-marner',
  ]

  it.each(WRONGLY_CALLED_UNWRITTEN)('%s has a real guide and is never called unwritten', (slug) => {
    // A substantial page that is not a placeholder. That is the invariant.
    const page = join(TEXTS, slug, 'page.tsx')
    expect(existsSync(page), `${slug} has no page`).toBe(true)
    expect(readFileSync(page, 'utf8').split('\n').length).toBeGreaterThan(400)
    expect(PLACEHOLDER_TEXT_SLUGS.has(slug)).toBe(false)
  })

  it('several of them now have a sub-page, which is why the shape changed', () => {
    // THIS BLOCK USED TO REQUIRE sectionCount === 0 on every one of them,
    // because zero sub-pages plus a real page was the exact shape that produced
    // the false message. On 19 September 2026 seven of these plays gained a
    // full-text `read` page, so the precondition stopped being true for them.
    //
    // The precondition changing is not the invariant weakening. The rule was
    // never "these have no sub-pages", it was "a finished guide is never called
    // unwritten" - asserted above, and generalised at the bottom of this file.
    // Requiring zero here would leave a test actively resisting content.
    const gained = WRONGLY_CALLED_UNWRITTEN.filter((s) => buildTextNav(s).sectionCount > 0)
    expect(gained.length).toBeGreaterThanOrEqual(6)
    for (const slug of gained) {
      expect(textSubpageExists(slug, 'read'), `${slug} gained something other than read`).toBe(true)
    }
  })

  it('and the ones that gained nothing are still the trap shape', () => {
    // The original case has to survive somewhere, or the regression could come
    // back unnoticed on the texts that still look like that.
    const unchanged = WRONGLY_CALLED_UNWRITTEN.filter((s) => buildTextNav(s).sectionCount === 0)
    expect(unchanged.length).toBeGreaterThan(0)
    for (const slug of unchanged) {
      expect(PLACEHOLDER_TEXT_SLUGS.has(slug)).toBe(false)
    }
  })
})

describe('the rail', () => {
  const code = NAV.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

  it('decides from the placeholder register, not from the section count', () => {
    // The whole fix. Section count says how much navigation exists; it says
    // nothing about whether the guide is written.
    expect(code).toContain('PLACEHOLDER_TEXT_SLUGS')
    expect(code).toMatch(/isPlaceholder/)
  })

  it('shows the unwritten message only when it is a placeholder', () => {
    const at = code.indexOf("t('textnav.no_sections')")
    expect(at, 'the message has gone entirely').toBeGreaterThan(-1)
    // The guard must sit between the section-count branch and the message.
    // The window runs from that branch rather than a fixed character count:
    // on 26 September 2026 a second branch (a placeholder whose guide is on
    // another route links to it) went in between, and a 260-character window
    // measured the new branch instead of the guard.
    const branch = code.lastIndexOf('nav.sectionCount === 0', at)
    expect(branch, 'the section-count branch has gone').toBeGreaterThan(-1)
    const before = code.slice(branch, at)
    expect(before, 'the message is not guarded by isPlaceholder').toMatch(/isPlaceholder \?/)
    // And not shown when the guide is written somewhere else.
    expect(before, 'the message ignores a guide on another route').toMatch(/elsewhere \?/)
  })
})

describe('the shell', () => {
  const code = SHELL.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

  it('folds the site menu away only when the text has sections to replace it', () => {
    // A rail of one link plus a hidden site menu is less navigation than none.
    expect(code).toMatch(/hasScopedSections/)
    expect(code).toMatch(/collapsed=\{hasScopedSections\}/)
    expect(code).not.toMatch(/collapsed=\{Boolean\(textSlug\)\}/)
  })

  it('computes it from the real section count', () => {
    expect(code).toMatch(/buildTextNav\(textSlug\)\.sectionCount > 0/)
  })
})

describe('the invariant, across every text', () => {
  it('no text with a real guide is capable of showing the unwritten message', () => {
    // The generalised form. If a future text lands with a real page and no
    // sub-pages, it must not be libelled either.
    const liable = REAL_GUIDES.filter((slug) => PLACEHOLDER_TEXT_SLUGS.has(slug))
    expect(liable).toEqual([])
  })

  it('there are enough real guides for that to mean something', () => {
    expect(REAL_GUIDES.length).toBeGreaterThan(25)
  })

  it('and the placeholders are still identified, so the message still has a use', () => {
    // Falls as guides are written: above 15 until 26 September 2026, when six
    // anthology texts got real pages. Lower it in the change that writes more.
    expect(PLACEHOLDER_TEXT_SLUGS.size).toBeGreaterThanOrEqual(10)
    for (const slug of PLACEHOLDER_TEXT_SLUGS) {
      expect(buildTextNav(slug).sectionCount, `${slug} is a placeholder with sections`).toBe(0)
    }
  })
})
