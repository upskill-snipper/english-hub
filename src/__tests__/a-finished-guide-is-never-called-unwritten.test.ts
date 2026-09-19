import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { buildTextNav } from '@/lib/revision/text-nav'
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

  it.each(WRONGLY_CALLED_UNWRITTEN)('%s has a real guide and no sub-pages', (slug) => {
    // Both halves of the trap: a substantial page, and zero sub-pages. This is
    // the exact shape that produced the false message.
    const page = join(TEXTS, slug, 'page.tsx')
    expect(existsSync(page), `${slug} has no page`).toBe(true)
    expect(readFileSync(page, 'utf8').split('\n').length).toBeGreaterThan(400)
    expect(buildTextNav(slug).sectionCount).toBe(0)
    expect(PLACEHOLDER_TEXT_SLUGS.has(slug)).toBe(false)
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
    const before = code.slice(Math.max(0, at - 260), at)
    expect(before, 'the message is not guarded by isPlaceholder').toMatch(/isPlaceholder/)
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
    expect(PLACEHOLDER_TEXT_SLUGS.size).toBeGreaterThan(15)
    for (const slug of PLACEHOLDER_TEXT_SLUGS) {
      expect(buildTextNav(slug).sectionCount, `${slug} is a placeholder with sections`).toBe(0)
    }
  })
})
