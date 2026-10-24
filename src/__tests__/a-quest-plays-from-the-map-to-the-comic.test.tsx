// @vitest-environment jsdom
//
// Renders the real quest map over a real text's quest and plays it through
// the screens a student uses, because what is asserted (a level finishing,
// stars and panels landing on the map, a miss coming back in Review) exists
// only once the components run and their effects have read the browser's
// storage.
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen, within } from '@testing-library/react'

import {
  answerOf,
  dealLevel,
  dealReview,
  placedIsRight,
  type DealtChallenge,
} from '@/lib/games/quest/deal'
import {
  dueForReview,
  MISS_WAIT_MS,
  readPlayer,
  readQuestProgress,
  XP_PERFECT,
  xpForAnswer,
} from '@/lib/games/quest/progress'
import type { Level, Quest } from '@/lib/games/quest/types'

/**
 * A quest plays from the map, through a level, to the comic.
 *
 * WHY A RENDER. The quest's rules are unit-tested in the node environment
 * (a-quest-scores-and-remembers-what-it-says.test.ts, a-text-quest-is-built-
 * from-checked-material.test.ts). This file holds the screens to them: that
 * the right answer, chosen on screen, is marked right; that a finished level
 * writes its stars and inks its panels; that the map, read again, shows them;
 * that a miss is offered in Review; that the finale stays shut until every
 * part has a star; and that a student can play with the keyboard alone.
 *
 * The words are dictionary keys here (useT is mocked to return the key), so
 * the assertions name what each screen says without depending on its English.
 */

// Keys come back as themselves, except the one whose number is asserted.
vi.mock('@/lib/i18n/use-t', () => ({
  useT: () => (key: string) => (key === 'quest.progress.stars' ? 'Stars: {n}' : key),
}))

const { loadQuest } = await import('@/lib/games/quest/load')
const { QuestMap } = await import('@/components/games/quest/QuestMap')
const { TextGameProgressNote } = await import('@/components/games/text/TextGameProgressNote')

/** A public-domain text with comic panels, portraits and every kind of challenge. */
const SLUG = 'macbeth'
let quest: Quest

class NoObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

beforeAll(async () => {
  quest = (await loadQuest(SLUG))!
  expect(quest, `${SLUG} has no quest`).toBeTruthy()
  expect(quest.hasComic).toBe(true)
})

beforeEach(() => {
  localStorage.clear()
  // The drawings are fetched as they near the screen: never, here.
  vi.stubGlobal('IntersectionObserver', NoObserver)
  vi.stubGlobal('fetch', () => Promise.reject(new Error('no network in tests')))
  vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) =>
    setTimeout(() => cb(performance.now()), 0),
  )
  vi.stubGlobal('cancelAnimationFrame', (id: number) => clearTimeout(id))
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

const level = (id: string) => quest.levels.find((l) => l.id === id)!

/** The text of an option button, without its letter or spoken state. */
function optionText(button: HTMLElement): string {
  return (
    button.querySelector('span.min-w-0')?.textContent?.trim() ?? button.textContent?.trim() ?? ''
  )
}

function optionsGroup(): HTMLElement {
  return document.querySelector<HTMLElement>('[data-quest-options]')!
}

function chooseOption(value: string) {
  const buttons = within(optionsGroup()).getAllByRole('button')
  const match = buttons.filter((b) => optionText(b) === value)
  expect(match, `exactly one option reads "${value}"`).toHaveLength(1)
  fireEvent.click(match[0])
}

/** Tap cards or tiles in the order given, by their position in the source. */
function placeInOrder(d: DealtChallenge, order: number[]) {
  const c = d.challenge
  if (c.type === 'rebuild') {
    const tiles = within(screen.getByRole('group', { name: 'quest.rebuild.words' })).getAllByRole(
      'button',
    )
    for (const k of order) fireEvent.click(tiles[d.deck.indexOf(k)])
  } else {
    const cards = within(screen.getByRole('group', { name: 'quest.order.cards' })).getAllByRole(
      'button',
    )
    for (const k of order) fireEvent.click(cards[d.deck.indexOf(k)])
  }
  fireEvent.click(document.querySelector<HTMLButtonElement>('[data-quest-check]')!)
}

/** Answer the challenge on screen, right or wrong, as a student would. */
function answer(d: DealtChallenge, right: boolean) {
  const c = d.challenge
  const truth = answerOf(c)
  if (Array.isArray(truth)) {
    let order = right ? truth : [...truth].reverse()
    if (!right && placedIsRight(c, order)) order = [truth[1], truth[0], ...truth.slice(2)]
    placeInOrder(d, order)
    return
  }
  if (c.type === 'theme-check') {
    const yes = right ? c.answer : !c.answer
    fireEvent.click(screen.getByRole('button', { name: yes ? 'quest.yes' : 'quest.no' }))
    return
  }
  if (c.type === 'marker') {
    const n = right ? c.answer : c.answer === 1 ? 2 : 1
    const numbers = within(optionsGroup()).getAllByRole('button')
    fireEvent.click(numbers[n - 1])
    return
  }
  const value = String(truth)
  chooseOption(right ? value : d.options.find((o) => o !== value)!)
}

function next() {
  fireEvent.click(document.querySelector<HTMLButtonElement>('[data-quest-continue]')!)
}

/** Play a whole level from the map: `pattern(i)` says whether answer i is right. */
async function playLevel(l: Level, pattern: (i: number) => boolean, play = 0) {
  const dealt = dealLevel(quest, l, play)
  for (let i = 0; i < dealt.length; i++) {
    expect(
      screen.getByText(
        `${l.kind === 'chapter' ? 'quest.level.chapter' : `quest.level.${l.kind}`} · quest.count`,
      ),
    ).toBeTruthy()
    answer(dealt[i], pattern(i))
    // The sheet says which it was before anything moves on.
    const sheet = document.querySelector('[data-quest-continue]')!.closest('section')!
    expect(sheet.getAttribute('aria-label')).toMatch(
      pattern(i) ? /^quest\.fb\.right\.\d$/ : /^text_games\.fb\.wrong$/,
    )
    next()
  }
  await act(async () => {})
  return dealt
}

function rowFor(l: Level): HTMLElement {
  const rows = within(
    document.querySelector<HTMLElement>('section[aria-labelledby="quest-levels"]')!,
  ).getAllByRole('button')
  return rows[quest.levels.indexOf(l)]
}

describe('a level, from the map and back', () => {
  it('marks every right answer right, earns three stars, and inks the part’s panels', async () => {
    render(<QuestMap quest={quest} />)
    await act(async () => {})
    const first = quest.levels[0]
    expect(first.kind).toBe('chapter')
    expect(first.panels.length).toBeGreaterThan(0)

    fireEvent.click(screen.getByRole('button', { name: 'quest.map.start' }))
    expect(screen.getByRole('dialog', { name: 'quest.level.chapter' })).toBeTruthy()
    const dealt = await playLevel(first, () => true)

    // The end of the level. The map is still underneath, with its own
    // achievements cabinet, so these are looked for in the level's dialog.
    const done = screen.getByRole('dialog')
    expect(within(done).getByText('quest.done.heading')).toBeTruthy()
    expect(within(done).getByText('quest.done.inked')).toBeTruthy()
    expect(
      within(done)
        .getAllByText(/^quest\.ach\..*\.name$/)
        .map((e) => e.textContent),
    ).toEqual(
      ['first_level', 'three_stars', 'perfect', 'chapter_inked'].map(
        (id) => `quest.ach.${id}.name`,
      ),
    )

    // What it wrote.
    const qp = readQuestProgress(SLUG)
    expect(qp.levels[first.id]).toEqual({ stars: 3, best: 1, plays: 1 })
    expect(qp.inked).toEqual(
      quest.moments.filter((m) => first.panels.includes(m.title)).map((m) => m.title),
    )
    let xp = 0
    dealt.forEach((_, i) => (xp += xpForAnswer(true, i)))
    expect(readPlayer().xp).toBe(xp + XP_PERFECT)
    // Every answer is in the review schedule, none due today: all were right.
    expect(Object.keys(qp.items).sort()).toEqual(dealt.map((d) => d.challenge.id).sort())
    expect(dueForReview(qp, Date.now(), new Set(Object.keys(qp.items)))).toEqual([])

    // Back to the map, which now shows it.
    fireEvent.click(screen.getByRole('button', { name: 'quest.done.map' }))
    await act(async () => {})
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(screen.getByRole('button', { name: 'quest.map.continue' })).toBeTruthy()
    expect(rowFor(first).querySelectorAll('svg.fill-amber-400')).toHaveLength(3)
    expect(rowFor(quest.levels[1]).querySelectorAll('svg.fill-amber-400')).toHaveLength(0)
    expect(within(rowFor(first)).getByText('quest.map.panels_inked')).toBeTruthy()
    expect(screen.getByText('quest.map.review_none')).toBeTruthy()
  })

  it('brings every miss back in Review, and Review asks exactly those', async () => {
    render(<QuestMap quest={quest} />)
    await act(async () => {})
    const first = quest.levels[0]
    fireEvent.click(screen.getByRole('button', { name: 'quest.map.start' }))
    const dealt = await playLevel(first, () => false)

    const qp = readQuestProgress(SLUG)
    expect(qp.levels[first.id].stars).toBe(1)
    expect(readPlayer().xp).toBe(0)
    // Nothing is due straight away: a miss waits MISS_WAIT_MS (24 October 2026).
    expect(
      dueForReview(readQuestProgress(SLUG), Date.now(), new Set(quest.challenges.map((c) => c.id))),
    ).toEqual([])
    const later = Date.now() + MISS_WAIT_MS + 1000
    vi.spyOn(Date, 'now').mockReturnValue(later)
    expect(within(screen.getByRole('dialog')).queryByText('quest.ach.perfect.name')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'quest.done.map' }))
    await act(async () => {})
    expect(screen.getByText('quest.map.review_ready')).toBeTruthy()

    fireEvent.click(screen.getByRole('button', { name: 'quest.map.review_start' }))
    expect(screen.getByRole('dialog', { name: 'quest.review.title' })).toBeTruthy()
    const missed = dueForReview(
      readQuestProgress(SLUG),
      Date.now(),
      new Set(quest.challenges.map((c) => c.id)),
    )
    expect(missed.sort()).toEqual(dealt.map((d) => d.challenge.id).sort())
    const review = dealReview(
      quest,
      dueForReview(readQuestProgress(SLUG), Date.now(), new Set(quest.challenges.map((c) => c.id))),
      0,
    )
    for (const d of review) {
      answer(d, true)
      next()
    }
    await act(async () => {})
    const done = screen.getByRole('dialog')
    expect(within(done).getByText('quest.done.review')).toBeTruthy()
    expect(within(done).getByText('quest.ach.review.name')).toBeTruthy()
    // Answered right, they are no longer due.
    expect(
      dueForReview(readQuestProgress(SLUG), Date.now(), new Set(quest.challenges.map((c) => c.id))),
    ).toEqual([])
  })

  it('leaves a level part-way without stars, keeping what was answered', async () => {
    render(<QuestMap quest={quest} />)
    await act(async () => {})
    const first = quest.levels[0]
    fireEvent.click(screen.getByRole('button', { name: 'quest.map.start' }))
    const dealt = dealLevel(quest, first, 0)
    answer(dealt[0], false)
    fireEvent.keyDown(window, { key: 'Escape' })
    await act(async () => {})
    expect(screen.queryByRole('dialog')).toBeNull()
    const qp = readQuestProgress(SLUG)
    expect(qp.levels[first.id]).toBeUndefined()
    expect(Object.keys(qp.items)).toEqual([dealt[0].challenge.id])
    // Focus goes back to the button that opened the level.
    await act(async () => {
      await new Promise((r) => setTimeout(r, 5))
    })
    expect(document.activeElement?.textContent).toContain('quest.map.start')
  })

  it('plays with the keyboard alone: a number chooses, Enter moves on', async () => {
    render(<QuestMap quest={quest} />)
    await act(async () => {})
    const first = quest.levels[0]
    const dealt = dealLevel(quest, first, 0)
    // The first challenge with lettered options.
    const at = dealt.findIndex((d) => d.options.length > 0)
    expect(at).toBeGreaterThanOrEqual(0)
    fireEvent.click(screen.getByRole('button', { name: 'quest.map.start' }))
    for (let i = 0; i < at; i++) {
      answer(dealt[i], true)
      fireEvent.keyDown(window, { key: 'Enter' })
    }
    const d = dealt[at]
    const right = d.options.indexOf(String(answerOf(d.challenge)))
    fireEvent.keyDown(window, { key: String(right + 1) })
    const chosen = within(optionsGroup()).getAllByRole('button')[right]
    expect(chosen.getAttribute('data-state')).toBe('right')
    fireEvent.keyDown(window, { key: 'Enter' })
    expect(screen.getByText(`quest.level.chapter · quest.count`)).toBeTruthy()
    expect(readQuestProgress(SLUG).items[d.challenge.id]?.missed).toBe(false)
  })
})

describe('the full-screen views keep the keyboard inside them', () => {
  it('sends Tab from the last control to the first, Shift+Tab back, and Tab from outside in', async () => {
    render(<QuestMap quest={quest} />)
    await act(async () => {})
    fireEvent.click(screen.getByRole('button', { name: 'quest.map.start' }))
    const dialog = screen.getByRole('dialog')
    const controls = within(dialog)
      .getAllByRole('button')
      .filter((b) => !b.hasAttribute('disabled'))
    const first = controls[0]
    const last = controls[controls.length - 1]
    expect(first.getAttribute('aria-label')).toBe('quest.leave')

    last.focus()
    fireEvent.keyDown(document.activeElement!, { key: 'Tab' })
    expect(document.activeElement).toBe(first)

    fireEvent.keyDown(document.activeElement!, { key: 'Tab', shiftKey: true })
    expect(document.activeElement).toBe(last)

    // Focus somewhere behind the view: Tab brings it back in.
    ;(document.activeElement as HTMLElement).blur()
    fireEvent.keyDown(document.body, { key: 'Tab' })
    expect(dialog.contains(document.activeElement)).toBe(true)
  })
})

describe('the index of text games', () => {
  it('shows the stars a student has earned in a text, and nothing for one not played', async () => {
    // The note on each card of /games/texts. Until 12 October 2026 it counted
    // the guided path's rounds; it reads the quest's store now, and had no
    // test of its own until the path's code was retired.
    localStorage.setItem(
      `teh-quest:v1:${SLUG}`,
      JSON.stringify({
        v: 1,
        levels: {
          'chapter-1': { stars: 2, best: 0.8, plays: 1 },
          cast: { stars: 3, best: 1, plays: 2 },
        },
        items: {},
        inked: [],
        reviews: 0,
      }),
    )
    const played = render(<TextGameProgressNote slug={SLUG} />)
    const fresh = render(<TextGameProgressNote slug="hamlet" />)
    await act(async () => {})
    expect(played.container.textContent).toBe('Stars: 5')
    expect(fresh.container.textContent).toBe('')
  })
})

describe('the finale, and the comic', () => {
  it('keeps the finale shut until every part has a star', async () => {
    render(<QuestMap quest={quest} />)
    await act(async () => {})
    const finale = level('finale')
    const row = rowFor(finale)
    expect(row.getAttribute('aria-disabled')).toBe('true')
    expect(within(row).getByText('quest.map.finale_locked')).toBeTruthy()
    fireEvent.click(row)
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('opens it once every part has a star', async () => {
    const levels: Record<string, { stars: number; best: number; plays: number }> = {}
    for (const l of quest.levels)
      if (l.kind === 'chapter') levels[l.id] = { stars: 1, best: 0.5, plays: 1 }
    localStorage.setItem(
      `teh-quest:v1:${SLUG}`,
      JSON.stringify({ v: 1, levels, items: {}, inked: [], reviews: 0 }),
    )
    render(<QuestMap quest={quest} />)
    await act(async () => {})
    const row = rowFor(level('finale'))
    expect(row.getAttribute('aria-disabled')).toBe('false')
    expect(within(row).getByText('quest.map.finale_about')).toBeTruthy()
    fireEvent.click(row)
    expect(screen.getByRole('dialog', { name: 'quest.level.finale' })).toBeTruthy()
  })

  it('shows inked panels in the comic, and says which part inks the rest', async () => {
    const first = quest.levels[0]
    const inked = quest.moments.filter((m) => first.panels.includes(m.title)).map((m) => m.title)
    localStorage.setItem(
      `teh-quest:v1:${SLUG}`,
      JSON.stringify({
        v: 1,
        levels: { [first.id]: { stars: 2, best: 0.8, plays: 1 } },
        items: {},
        inked,
        reviews: 0,
      }),
    )
    render(<QuestMap quest={quest} />)
    await act(async () => {})
    fireEvent.click(screen.getByRole('button', { name: 'quest.comic.open' }))
    const book = screen.getByRole('dialog', { name: 'quest.comic.title' })
    const all = quest.moments.filter((m) => m.panel && quest.art.panels[m.panel]).length
    expect(inked.length).toBeGreaterThan(0)
    expect(all).toBeGreaterThan(inked.length)
    // An inked panel is the comic's own frame; the rest are blank pages that
    // name the part that inks them.
    expect(book.querySelectorAll('figure.lc-panel')).toHaveLength(inked.length)
    expect(within(book).getAllByText('quest.comic.locked')).toHaveLength(all - inked.length)
    fireEvent.keyDown(window, { key: 'Escape' })
    await act(async () => {})
    expect(screen.queryByRole('dialog')).toBeNull()
  })
})

/*
 * MUTATIONS RUN on 12 October 2026, each checked to have changed the file,
 * then the file restored. Each was caught here, and where named, in
 * a-quest-scores-and-remembers-what-it-says.test.ts too:
 *
 *   - no perfect bonus (progress.ts): the first case, and "adds the perfect
 *     bonus only when every answer was right".
 *   - misses not offered first in Review (progress.ts): "offers the latest
 *     misses first".
 *   - the old storage fallback, which read memory whenever storage held
 *     nothing: four cases here, and "does not bring back progress the browser
 *     no longer holds". It was found by this file, before release.
 *   - the map not re-reading progress after a level (QuestMap.tsx).
 *   - the finale never locked (QuestMap.tsx).
 *   - number keys choosing nothing (LevelPlayer.tsx).
 *   - a text option marked the wrong way round (challenges/shared.tsx).
 *   - an answer not written to the review schedule (LevelPlayer.tsx).
 *   - every panel shown inked in the comic (ComicBook.tsx).
 *   - no focus trap in the player (LevelPlayer.tsx): "sends Tab from the
 *     last control to the first".
 *   - the index note counting levels played instead of stars
 *     (TextGameProgressNote.tsx): "shows the stars a student has earned".
 *   - in a-quest-scores-and-remembers-what-it-says.test.ts, a refused write
 *     not kept in memory (progress.ts): "plays on when storage throws".
 */
