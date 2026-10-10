import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { EN_MESSAGES as en } from '@/lib/i18n/generated/en'
import { AR_MESSAGES as ar } from '@/lib/i18n/generated/ar'
import { ES_MESSAGES as es } from '@/lib/i18n/generated/es'
import { textGamesOrHubHref } from '@/lib/recommendations/hrefs'

/**
 * Games are a headline part of the product, and can be found from anywhere.
 *
 * WHY (10 October 2026). The founder asked for games to be a prominent part of
 * the site for guided learning. At the time nothing in the header and nothing
 * on the homepage led to /games; in the revision area it was one entry inside a
 * closed sidebar group and one tile inside a closed panel; and three finished
 * games were listed nowhere at all. Each of those is fixed in a different file,
 * and each could be undone by a tidy-up that did not know why it was there, so
 * the placements are pinned here.
 *
 * Source-level on purpose: these are placements, and the files are read the
 * way a reviewer would read them. The behaviour behind them is tested where it
 * lives: text-games-are-offered-only-where-they-exist.test.ts for which texts
 * have games, only-a-gcse-game-gives-a-gcse-grade.test.tsx for the shell.
 */

const read = (rel: string) => readFileSync(join(process.cwd(), rel), 'utf8')

describe('the main navigation', () => {
  const HEADER = read('src/components/layout/header.tsx')

  it('lists Games for a learner with a board and for a visitor without one', () => {
    const entries = HEADER.match(/\{ href: '\/games', labelKey: 'header\.nav\.games' \}/g) ?? []
    expect(entries).toHaveLength(2)
  })

  it('renders the same list in the desktop nav and the phone menu', () => {
    expect(HEADER.match(/visibleNavLinks\.map\(/g) ?? []).toHaveLength(2)
  })

  it('has a label for it in every locale', () => {
    // header.tsx resolves labels at runtime, t(link.labelKey), which the
    // missing-key checker cannot follow, so the key is checked here.
    expect(en['header.nav.games']).toBe('Games')
    expect(ar['header.nav.games']).toBeTruthy()
    expect(es['header.nav.games']).toBeTruthy()
  })
})

describe('the homepage', () => {
  const HOME = read('src/app/page.tsx')

  it('puts Learn by playing straight after the hero', () => {
    const hero = HOME.indexOf('{await HomeHero()}')
    const play = HOME.indexOf('{await LearnByPlayingSection()}')
    const next = HOME.indexOf('{await SchoolPlatformSection()}')
    expect(hero).toBeGreaterThan(-1)
    expect(play).toBeGreaterThan(hero)
    expect(next).toBeGreaterThan(play)
  })

  it('leads to the guided games and four exam games', () => {
    for (const href of [
      '/games/theme-matcher',
      '/games/speed-analysis',
      '/games/quote-detective',
      '/games/grade-climber',
    ]) {
      expect(HOME).toContain(`href: '${href}'`)
    }
    expect(HOME).toContain('href={TEXT_GAMES_INDEX}')
  })
})

describe('the games hub', () => {
  const HUB = read('src/app/games/page.tsx')

  it('opens with Play your set texts, above the score panels', () => {
    const texts = HUB.indexOf('<PlayYourSetTexts />')
    const scores = HUB.indexOf('<WeeklyLeaderboard />')
    expect(texts).toBeGreaterThan(-1)
    expect(scores).toBeGreaterThan(texts)
  })

  it('is reached from a recommendation by the text page itself, not a parameter', () => {
    // 10 October 2026: this test once checked that the hub's source read
    // ?text= and passed, while the client-side redirect it found never ran
    // in a browser. So it now checks where the links go.
    expect(textGamesOrHubHref('macbeth')).toBe('/games/texts/macbeth')
    expect(textGamesOrHubHref(' Macbeth ')).toBe('/games/texts/macbeth')
    // A text in copyright has guided games too (from 10 October 2026); the
    // excluded poem and a slug that is no text have none.
    expect(textGamesOrHubHref('an-inspector-calls')).toBe('/games/texts/an-inspector-calls')
    expect(textGamesOrHubHref('do-not-go-gentle-into-that-good-night')).toBe('/games')
    expect(textGamesOrHubHref('not-a-set-text')).toBe('/games')
    expect(textGamesOrHubHref(null)).toBe('/games')
    expect(textGamesOrHubHref('../etc')).toBe('/games')
    const FOCUS = read('src/lib/recommendations/focus-on.ts')
    expect(FOCUS).toContain('textGamesOrHubHref(weakestText)')
    expect(FOCUS).not.toContain('/games?text=')
    expect(HUB).not.toContain("get('text')")
  })
})

describe('the revision area', () => {
  it('keeps Games in the always-visible top of the sidebar', () => {
    const SHELL = read('src/app/revision/_components/revision-shell.tsx')
    const line = SHELL.split('\n').find((l) => l.includes("'revision.shell.nav.games'"))
    expect(line, 'Games has left the sidebar').toBeTruthy()
    expect(line).toMatch(/group: 'top'/)
  })

  it('gives the revision hub its own Learn by playing panel', () => {
    const HUB = read('src/app/revision/page.tsx')
    expect(HUB).toContain('aria-labelledby="learn-by-playing-heading"')
    // The tile stays in "Browse all sections" as well.
    expect(HUB).toContain("titleKey: 'revision_page.section.games.title'")
  })
})

describe('the copy added for all of this', () => {
  const PREFIXES = [
    'header.nav.games',
    'home.play.',
    'games_page.texts.',
    'games_page.list.',
    'games_page.badge_free_games',
    'revision_page.play.',
    'textnav.play_text',
  ]
  const keys = Object.keys(en).filter((k) => PREFIXES.some((p) => k.startsWith(p)))

  it('exists, so this is not vacuous', () => {
    expect(keys.length).toBeGreaterThanOrEqual(40)
  })

  it.each([
    ['en', en],
    ['ar', ar],
    ['es', es],
  ] as const)('has no exclamation mark and no em dash in %s', (_locale, map) => {
    const offenders = keys.filter((k) => /[!¡—]/.test((map as Record<string, string>)[k] ?? ''))
    expect(offenders).toEqual([])
  })

  it('is translated: no Arabic or Spanish value is missing', () => {
    const missing = keys.filter(
      (k) => !(ar as Record<string, string>)[k] || !(es as Record<string, string>)[k],
    )
    expect(missing).toEqual([])
  })
})
