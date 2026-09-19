import { describe, it, expect } from 'vitest'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { buildShelf, resolveGuide } from '@/lib/revision/shelf'
import { GUIDE_LOCATIONS } from '@/lib/revision/guide-locations.generated'
import { PLACEHOLDER_TEXT_SLUGS } from '@/lib/revision/placeholder-texts.generated'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { BOARDS } from '@/lib/board/board-config'

/**
 * The shelf sent students past the guide to the apology.
 *
 * THE DEFECT. Every card on a board shelf linked to `/revision/texts/<slug>`,
 * because that is where a set text's guide is supposed to live. For twenty-eight
 * of the seventy-three it does not. Their guides sit in four other trees - the
 * Edexcel anthology and poetry sets, the AQA Power and Conflict cluster and the
 * revision-notes library - 344 to 1,491 lines each, while their /revision/texts
 * page is a placeholder or absent entirely.
 *
 * So a student who chose Edexcel IGCSE and clicked Disabled was routed away
 * from an 856-line guide to a page that does not exist, and the card told them
 * "no guide yet" on the way past. Written, paid for, unreachable.
 *
 * WHAT THIS FILE GUARDS, which is more than the fix. Two invariants matter more
 * than the twenty-eight:
 *
 *   - every href the shelf emits resolves to a page that is actually on disk,
 *     so the register can never advertise a route that 404s
 *   - a text with a real page of its own keeps its canonical URL, so the fix
 *     cannot quietly relocate the 33 guides that already worked
 *
 * The second is the one that would hurt. Redirecting Macbeth to a longer URL to
 * fix Disabled would trade twenty-eight broken links for thirty-three.
 */

const ROOT = process.cwd()

/** Does a route have a page.tsx behind it? The register's whole promise. */
function pageExistsFor(href: string): boolean {
  return existsSync(join(ROOT, 'src/app', href.replace(/^\//, ''), 'page.tsx'))
}

describe('the twenty-eight texts that were routed past their own guide', () => {
  // Named individually and split by tree. A set-difference assertion would pass
  // just as happily with the wrong twenty-eight.
  const ANTHOLOGY = [
    'a-game-of-polo-with-a-headless-goat',
    'a-passage-to-africa',
    'beyond-the-sky-and-the-earth',
    'chinese-cinderella',
    'explorers-or-boys-messing-about',
    'h-is-for-hawk',
    'the-danger-of-a-single-story',
    'the-explorers-daughter',
    'young-and-dyslexic',
  ]
  const REVISION_NOTES = [
    'a-dolls-house',
    'antony-and-cleopatra',
    'do-not-go-gentle-into-that-good-night',
    'half-past-two',
    'hide-and-seek',
    'the-door',
    'the-handmaids-tale',
    'the-yellow-wallpaper',
    'when-greek-meets-greek',
  ]
  const POWER_AND_CONFLICT = ['my-last-duchess']
  const POETRY = [
    'an-unknown-girl',
    'disabled',
    'if',
    'out-out',
    'piano',
    'sonnet-116',
    'still-i-rise',
    'the-bright-lights-of-sarajevo',
    'war-photographer',
  ]

  it.each(ANTHOLOGY)('%s resolves to its anthology guide', (slug) => {
    const { href, readiness } = resolveGuide(slug)
    expect(href).toBe(`/igcse/edexcel-lang/anthology/${slug}`)
    // It is a real guide, so it must not still be labelled as absent.
    expect(readiness).not.toBe('none')
  })

  it.each(POETRY)('%s resolves to its poetry guide', (slug) => {
    const { href, readiness } = resolveGuide(slug)
    expect(href).toBe(`/igcse/edexcel/poetry/${slug}`)
    expect(readiness).not.toBe('none')
  })

  it.each(REVISION_NOTES)('%s resolves to its revision-notes guide', (slug) => {
    const { href, readiness } = resolveGuide(slug)
    expect(href).toBe(`/resources/revision-notes/${slug}`)
    expect(readiness).not.toBe('none')
  })

  it.each(POWER_AND_CONFLICT)('%s resolves to its Power and Conflict guide', (slug) => {
    const { href, readiness } = resolveGuide(slug, 'aqa')
    expect(href).toBe(`/revision/poetry/power-and-conflict/${slug}`)
    expect(readiness).not.toBe('none')
  })

  it('is twenty-eight texts in total', () => {
    // The first version of this fix found eighteen, because it scanned two
    // trees. The number is asserted so a future edit that drops a tree fails
    // here rather than quietly stranding nine guides again.
    expect(new Set([...ANTHOLOGY, ...POETRY, ...REVISION_NOTES, ...POWER_AND_CONFLICT]).size).toBe(
      28,
    )
  })

  it('and every one of them was hollow at the canonical URL', () => {
    // Without this the test above could pass by accident on a text that has a
    // perfectly good /revision/texts page, which would mean the fix had moved
    // something it should have left alone.
    for (const slug of [...ANTHOLOGY, ...POETRY, ...REVISION_NOTES, ...POWER_AND_CONFLICT]) {
      const hollow =
        PLACEHOLDER_TEXT_SLUGS.has(slug) ||
        !existsSync(join(ROOT, 'src/app/revision/texts', slug, 'page.tsx'))
      expect(hollow, `${slug} has a real canonical page, so it should not be redirected`).toBe(true)
    }
  })
})

describe('the guides that already worked', () => {
  const CANONICAL = SET_TEXTS.map((t) => t.slug).filter(
    (slug) =>
      existsSync(join(ROOT, 'src/app/revision/texts', slug, 'page.tsx')) &&
      !PLACEHOLDER_TEXT_SLUGS.has(slug),
  )

  it('there are enough of them for this to mean something', () => {
    expect(CANONICAL.length).toBeGreaterThan(25)
  })

  it.each(CANONICAL)('%s keeps its canonical URL', (slug) => {
    expect(resolveGuide(slug).href).toBe(`/revision/texts/${slug}`)
  })

  it.each(CANONICAL)('%s is still recognised as a guide', (slug) => {
    // ADDED AFTER A SURVIVING MUTANT. Asserting the href alone was not enough:
    // treating every text as hollow leaves the canonical href intact (the
    // register has no entry for Macbeth, so it falls through) while relabelling
    // all thirty-three working guides `none`. The URL would be right and the
    // card would say the guide does not exist - the same libel the text rail
    // shipped last week, on a different surface.
    expect(resolveGuide(slug).readiness).not.toBe('none')
  })
})

describe('the register cannot advertise a route that is not there', () => {
  it.each([...GUIDE_LOCATIONS].flatMap(([slug, gs]) => gs.map((g) => [slug, g.href])))(
    '%s -> %s exists on disk',
    (_slug, href) => {
      expect(pageExistsFor(href)).toBe(true)
    },
  )

  it('found the guides it was written to find', () => {
    // A generator pointed at a directory that no longer exists emits an empty
    // map and reports success. That is the failure shape this codebase is full
    // of, so the count is asserted rather than assumed.
    expect(GUIDE_LOCATIONS.size).toBeGreaterThanOrEqual(80)
  })

  it('covers all four trees, not just the two that were found first', () => {
    // The first version of this register scanned only the anthology and poetry
    // directories and rescued eighteen texts. Walking the whole app tree found
    // twenty-eight, including the three longest guides on the site. A register
    // that silently loses a tree would still pass every test above.
    const prefixes = new Set(
      [...GUIDE_LOCATIONS.values()].flat().map((g) => g.href.split('/').slice(0, -1).join('/')),
    )
    for (const tree of [
      '/igcse/edexcel-lang/anthology',
      '/igcse/edexcel/poetry',
      '/revision/poetry/power-and-conflict',
      '/resources/revision-notes',
    ]) {
      expect(prefixes.has(tree), `no guide registered under ${tree}`).toBe(true)
    }
  })

  it('picks the board-specific guide when a text has more than one', () => {
    // War Photographer has an Edexcel IGCSE guide and an AQA Power and Conflict
    // guide. Picking by list order would send every AQA student to the Edexcel
    // page, which reads the poem against the wrong anthology.
    expect(GUIDE_LOCATIONS.get('war-photographer')?.length).toBeGreaterThan(1)
    expect(resolveGuide('war-photographer', 'aqa').href).toBe(
      '/revision/poetry/power-and-conflict/war-photographer',
    )
    expect(resolveGuide('war-photographer', 'edexcel-igcse').href).toBe(
      '/igcse/edexcel/poetry/war-photographer',
    )
  })
})

describe('every href on every shelf', () => {
  it('resolves to a page that exists, or is honestly labelled as absent', () => {
    const broken: string[] = []
    for (const board of BOARDS) {
      for (const entry of buildShelf(board.id)) {
        // 'none' is allowed to point at a URL with no page: the catch-all route
        // serves those, and the card says so. Anything else must be real.
        if (entry.readiness === 'none') continue
        if (!pageExistsFor(entry.href))
          broken.push(`${board.id}: ${entry.text.slug} -> ${entry.href}`)
      }
    }
    expect(broken).toEqual([])
  })

  it('checks every board', () => {
    expect(BOARDS.length).toBe(15)
  })
})
