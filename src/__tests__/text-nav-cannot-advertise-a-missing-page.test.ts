import { describe, it, expect } from 'vitest'
import { buildTextNav, textSlugFromPath, textSubpageExists } from '@/lib/revision/text-nav'
import { TEXT_SUBPAGE_ROUTES } from '@/lib/revision/text-subpages.generated'
import { SET_TEXTS } from '@/lib/board/set-texts'

/**
 * The text-scoped sidebar, and the one property that matters about it.
 *
 * THE DEFECT IT REPLACES. `TextStudyHub` was fed a hand-written array of tiles
 * at each of its twenty-eight call sites. Those arrays declared 172 sub-page
 * tiles against 93 routes that exist on disk, so 79 of them pointed at nothing.
 * The component filtered the dead ones out at render time, which meant the
 * breakage never surfaced as an error: it surfaced as twelve texts rendering a
 * "Study this text" heading above an empty grid, and as a maintenance job
 * nobody knew existed.
 *
 * That is the shape this repository exists to stop - a thing that fails and
 * reports success. The fix is not a better hand-written list. It is to derive
 * the navigation from TEXT_SUBPAGE_ROUTES, the register that
 * `scripts/generate-text-subpage-map.mjs` rebuilds from the filesystem on every
 * prebuild, so a link cannot be offered unless the page is really there.
 *
 * The first test below is the whole point: it walks every set text on the
 * platform and asserts that not one href the model produces is missing. It
 * would have caught all 79.
 */

describe('the invariant', () => {
  it('never returns an href that is not a real page, for any text', () => {
    // The assertion the old hand-written tile arrays failed 79 times.
    const offenders: string[] = []
    for (const text of SET_TEXTS) {
      const nav = buildTextNav(text.slug)
      for (const group of nav.groups) {
        for (const item of group.items) {
          if (!TEXT_SUBPAGE_ROUTES.has(item.href)) {
            offenders.push(`${text.slug}: ${item.href}`)
          }
        }
      }
    }
    expect(offenders, `nav offered ${offenders.length} routes that do not exist`).toEqual([])
  })

  it('checks enough texts for that to mean something', () => {
    // Guards the test above against a shrinking corpus: if SET_TEXTS were
    // emptied, the loop would pass vacuously and prove nothing.
    expect(SET_TEXTS.length).toBeGreaterThan(60)
    expect(TEXT_SUBPAGE_ROUTES.size).toBeGreaterThan(80)
  })

  it('offers something for a real text, so the invariant is not satisfied by silence', () => {
    // A model that returned nothing for everything would satisfy the first
    // test perfectly. This is the counterweight.
    const withSections = SET_TEXTS.filter((t) => buildTextNav(t.slug).sectionCount > 0)
    expect(withSections.length).toBeGreaterThanOrEqual(15)
  })
})

describe('a text with a full guide', () => {
  const nav = buildTextNav('macbeth')

  it('groups Macbeth by study object, not by route name', () => {
    expect(nav.groups.map((g) => g.key)).toEqual([
      'text',
      'characters',
      'ideas',
      'quotations',
      'exam',
    ])
  })

  it('puts the full text first and the act index straight after it', () => {
    const textGroup = nav.groups.find((g) => g.key === 'text')
    expect(textGroup?.items.map((i) => i.href)).toEqual([
      '/revision/texts/macbeth/read',
      '/revision/texts/macbeth/acts',
    ])
  })

  it('offers the act index rather than three separate acts', () => {
    // macbeth carries act-1, act-2 and act-3 as well as the acts index. Four
    // sidebar entries for one section would crowd out everything else, and the
    // index links onward to each act anyway.
    const hrefs = nav.groups.flatMap((g) => g.items.map((i) => i.href))
    expect(hrefs).toContain('/revision/texts/macbeth/acts')
    expect(hrefs).not.toContain('/revision/texts/macbeth/act-1')
  })
})

describe('the three spellings of the same section', () => {
  // A play has acts, a novel has chapters, and A Christmas Carol has staves.
  // One structure entry, whichever exists, never more than one.
  it.each([
    ['an-inspector-calls', '/revision/texts/an-inspector-calls/acts', 'textnav.structure.acts'],
    ['jekyll-and-hyde', '/revision/texts/jekyll-and-hyde/chapters', 'textnav.structure.chapters'],
    ['a-christmas-carol', '/revision/texts/a-christmas-carol/staves', 'textnav.structure.staves'],
  ])('resolves %s to %s', (slug, href, labelKey) => {
    const items = buildTextNav(slug).groups.flatMap((g) => g.items)
    const structure = items.filter((i) => i.icon === 'structure')
    expect(structure).toHaveLength(1)
    expect(structure[0]!.href).toBe(href)
    expect(structure[0]!.labelKey).toBe(labelKey)
  })

  it('gives the structure entry to a text that has no readable full text', () => {
    // Only macbeth and frankenstein have a `read` route. The other fifty-one
    // must not lose their chapter navigation because of that.
    const nav = buildTextNav('jekyll-and-hyde')
    const textGroup = nav.groups.find((g) => g.key === 'text')
    expect(textGroup?.items.map((i) => i.href)).toEqual([
      '/revision/texts/jekyll-and-hyde/chapters',
    ])
  })
})

describe('a text whose guide is not written', () => {
  it('returns no sections at all rather than a rail of dead links', () => {
    // Twenty texts render a placeholder. The honest thing is an empty nav the
    // caller can choose not to render, not a sidebar full of promises.
    const nav = buildTextNav('explorers-or-boys-messing-about')
    expect(nav.sectionCount).toBe(0)
    expect(nav.groups).toEqual([])
  })

  it('still names the hub, so the breadcrumb works', () => {
    expect(buildTextNav('explorers-or-boys-messing-about').hubHref).toBe(
      '/revision/texts/explorers-or-boys-messing-about',
    )
  })

  it('returns nothing for a slug that is not a text at all', () => {
    expect(buildTextNav('not-a-real-text').sectionCount).toBe(0)
  })
})

describe('textSubpageExists', () => {
  it('agrees with the generated register', () => {
    expect(textSubpageExists('macbeth', 'characters')).toBe(true)
    expect(textSubpageExists('macbeth', 'staves')).toBe(false)
    expect(textSubpageExists('explorers-or-boys-messing-about', 'themes')).toBe(false)
  })
})

describe('textSlugFromPath', () => {
  it.each([
    ['/revision/texts/macbeth', 'macbeth'],
    ['/revision/texts/macbeth/characters', 'macbeth'],
    ['/revision/texts/a-christmas-carol/staves', 'a-christmas-carol'],
  ])('reads %s as %s', (path, slug) => {
    expect(textSlugFromPath(path)).toBe(slug)
  })

  it.each([
    ['/revision/texts', 'the shelf is not a text'],
    ['/revision/poetry/macbeth', 'a different tree'],
    ['/revision', 'the hub'],
    [null, 'no path at all'],
    [undefined, 'undefined'],
  ])('returns null for %s (%s)', (path: string | null | undefined, _why: string) => {
    expect(textSlugFromPath(path)).toBeNull()
  })
})
