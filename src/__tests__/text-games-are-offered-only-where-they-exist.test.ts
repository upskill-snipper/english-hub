import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'

import { STUDY_GUIDE_LOADERS } from '@/data/study-guides'
import { PUBLIC_DOMAIN_GUIDE_SLUGS } from '@/lib/study-guides/public-domain.generated'
import { TEXT_GAMES_INDEX, textGamesHref } from '@/lib/revision/text-games-href'
import { LEFT_OUT_OF_TEXT_GAMES, textGameSlugs } from '@/lib/games/text-games/slugs'
import { buildTextNav } from '@/lib/revision/text-nav'
import { SET_TEXTS } from '@/lib/board/set-texts'

/**
 * Guided text games are offered only for the texts that have them.
 *
 * WHAT IS BEING PROTECTED (10 October 2026). Guided games now sit at
 * /games/texts/<slug>, one path per text, and five places link to them: the
 * text-scoped rail ("Play this text"), its phone rail, the revision hub, the
 * games hub and the homepage. Only texts whose study guide is public domain
 * have games, because a game quotes and rearranges a text far more freely than
 * the fair-dealing limits allow for one in copyright, and one public-domain
 * text, Do not go gentle into that good night, is left out of them.
 *
 * So the ways this goes wrong are all the house shape, a link that renders and
 * goes nowhere: a copyrighted text offered a game, the left-out poem offered
 * one, or one surface deciding for itself and drifting from the games. The
 * games decide which texts they cover (src/lib/games/text-games/slugs.ts, read
 * by their route, their index and the sitemap); every link asks them through
 * src/lib/revision/text-games-href.ts; and this file holds both to the guides
 * the register is generated from.
 *
 * The rail rendering the link is asserted in the-rail-knows-which-text-it-is-in
 * .test.tsx, which already renders it. Nothing here prints a guide's content;
 * failures name slugs only.
 */

describe('the public-domain register says what the guides say', () => {
  it('in both directions, guide by guide', async () => {
    // Every guide is loaded and asked. A register derived by reading source
    // files is only as good as the reading, so it is checked against the data.
    const publicDomain: string[] = []
    for (const [slug, load] of Object.entries(STUDY_GUIDE_LOADERS)) {
      const guide = await load()
      if (guide.rights.status === 'public-domain') publicDomain.push(slug)
    }
    const register = [...PUBLIC_DOMAIN_GUIDE_SLUGS].sort()
    expect(register, 'stale register: run node scripts/generate-public-domain-guides.mjs').toEqual(
      publicDomain.sort(),
    )
  }, 60_000)

  it('has enough in it for that to mean something', () => {
    // Vacuity guard: an empty register agrees with nothing and offers nothing,
    // which would pass every assertion below.
    expect(PUBLIC_DOMAIN_GUIDE_SLUGS.size).toBeGreaterThan(30)
    expect(Object.keys(STUDY_GUIDE_LOADERS).length).toBeGreaterThan(PUBLIC_DOMAIN_GUIDE_SLUGS.size)
  })
})

describe('which texts have games', () => {
  it('is the public-domain register less the texts left out', () => {
    const expected = [...PUBLIC_DOMAIN_GUIDE_SLUGS].filter((s) => !LEFT_OUT_OF_TEXT_GAMES.has(s))
    expect(textGameSlugs()).toEqual(expected.sort())
  })

  it('is linked to for exactly the texts the games cover, no more and no fewer', () => {
    // The two halves cannot disagree: a link to a text with no page is a 404,
    // and a page that no link reaches is a game nobody finds.
    const linked = SET_TEXTS.map((t) => t.slug).filter((s) => textGamesHref(s) !== null)
    expect(linked.sort()).toEqual(textGameSlugs())
  })

  it('leaves out only texts the register holds, or the exclusion excludes nothing', () => {
    for (const slug of LEFT_OUT_OF_TEXT_GAMES) {
      expect(PUBLIC_DOMAIN_GUIDE_SLUGS.has(slug), `${slug} is not in the register`).toBe(true)
    }
  })

  it('offers nothing for Do not go gentle into that good night', () => {
    const slug = 'do-not-go-gentle-into-that-good-night'
    expect(textGamesHref(slug)).toBeNull()
    expect(textGameSlugs()).not.toContain(slug)
    expect(buildTextNav(slug).playHref).toBeNull()
  })

  it('offers nothing for a text in copyright', () => {
    // An Inspector Calls is the standing example: in copyright, and studied by
    // more students on this site than almost anything else.
    expect(textGamesHref('an-inspector-calls')).toBeNull()
    const copyright = SET_TEXTS.filter((t) => t.copyrightStatus === 'copyright')
    expect(copyright.length).toBeGreaterThan(30)
    for (const text of copyright) {
      expect(textGamesHref(text.slug), text.slug).toBeNull()
    }
  })

  it('offers the path for a public-domain text', () => {
    expect(textGamesHref('macbeth')).toBe(`${TEXT_GAMES_INDEX}/macbeth`)
    expect(TEXT_GAMES_INDEX).toBe('/games/texts')
  })

  it('looks nothing up that is not a slug, because a query string is user input', () => {
    for (const junk of [
      '',
      'Macbeth',
      '../macbeth',
      'macbeth/x',
      'macbeth?x=1',
      '<b>',
      'constructor',
    ]) {
      expect(textGamesHref(junk), JSON.stringify(junk)).toBeNull()
    }
    expect(textGamesHref(null)).toBeNull()
    expect(textGamesHref(undefined)).toBeNull()
  })
})

describe('the text navigation model', () => {
  it('offers "Play this text" exactly where the rule does, for every set text', () => {
    for (const text of SET_TEXTS) {
      expect(buildTextNav(text.slug).playHref, text.slug).toBe(textGamesHref(text.slug))
    }
  })

  it('and keeps it out of the sections, which are the guide pages proven on disk', () => {
    // If the game link counted as a section, a guide with no sub-pages would
    // have the site-wide menu folded away for one link, and a placeholder
    // guide would stop saying it is unwritten. Hamlet stands for any text.
    const nav = buildTextNav('hamlet')
    expect(nav.playHref).toBe('/games/texts/hamlet')
    expect(nav.sectionCount).toBe(nav.groups.flatMap((g) => g.items).length)
    expect(nav.groups.flatMap((g) => g.items).some((i) => i.href.startsWith('/games/'))).toBe(false)
  })
})

describe('the pages it links to', () => {
  it('exist: the index and the per-text route', () => {
    // The links are only as good as the pages behind them. The routes are built
    // in src/app/games/texts; if they are not there, every link above is dead.
    const APP = join(process.cwd(), 'src/app/games/texts')
    expect(existsSync(join(APP, 'page.tsx')), '/games/texts has no page').toBe(true)
    expect(existsSync(join(APP, '[slug]', 'page.tsx')), '/games/texts/[slug] has no page').toBe(
      true,
    )
  })
})

describe('every surface asks the games which texts they cover', () => {
  // The games' own code builds its own pages' URLs. Anything else that builds
  // one must take its slugs from the games' list, as the sitemap does.
  const OWNERS = ['src/lib/games/text-games', 'src/app/games/texts', 'src/components/games/text']
  const HELPER = 'src/lib/revision/text-games-href.ts'
  const ASKS = /\btextGameSlugs\(|\bhasTextGame\(|\btextGamesHref\(/

  function walk(dir: string, out: string[] = []): string[] {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, e.name)
      if (e.isDirectory()) {
        if (e.name === '__tests__' || e.name === 'generated') continue
        walk(full, out)
      } else if (/\.tsx?$/.test(e.name)) out.push(full)
    }
    return out
  }

  const files = walk(join(process.cwd(), 'src')).map((f) =>
    relative(process.cwd(), f).replace(/\\/g, '/'),
  )

  it('nobody builds a /games/texts/<slug> URL from a slug the games did not give', () => {
    const builders = files
      .filter((f) => f !== HELPER && !OWNERS.some((o) => f.startsWith(o + '/')))
      .filter((f) => /\/games\/texts\/\$\{/.test(readFileSync(f, 'utf8')))
    // Vacuity guard: the sitemap does build them, from textGameSlugs().
    expect(builders).toContain('src/app/sitemap.ts')
    const unasked = builders.filter((f) => !ASKS.test(readFileSync(f, 'utf8')))
    expect(unasked).toEqual([])
  })

  it.each([
    'src/app/revision/_components/text-scoped-nav.tsx',
    'src/app/revision/_components/revision-shell.tsx',
    'src/app/revision/page.tsx',
    'src/app/games/page.tsx',
    'src/app/page.tsx',
  ])('%s offers the games through the model or the helper', (file) => {
    const source = readFileSync(join(process.cwd(), file), 'utf8')
    expect(source).toMatch(/textGamesHref\(|\.playHref\b/)
  })
})
