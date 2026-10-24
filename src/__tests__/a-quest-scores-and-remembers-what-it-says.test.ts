import { afterEach, describe, expect, it, vi } from 'vitest'

import {
  ACHIEVEMENTS,
  dueForReview,
  emptyPlayer,
  emptyQuest,
  finaleOpen,
  finishLevel,
  finishReview,
  MISS_WAIT_MS,
  nextLevel,
  playerLevel,
  questStars,
  QUOTE_SMITH,
  readPlayer,
  readQuestProgress,
  recordAnswer,
  starsFor,
  writePlayer,
  writeQuestProgress,
  XP_COMBO,
  XP_PERFECT,
  XP_RIGHT,
  xpForAnswer,
  type QuestProgress,
} from '@/lib/games/quest/progress'
import type { Level, Quest } from '@/lib/games/quest/types'

/**
 * What a quest promises a student about their progress, held to it.
 *
 * The map and the end of each level tell a student how many stars they have,
 * what a level was worth, which panels are now theirs and what is due for
 * review (src/lib/games/quest/progress.ts). Each of those is a claim, and
 * each is computed here, in pure functions, so each is tested here, against
 * a small quest written for the purpose: four moments, three of them with
 * panels, two chapters, a cast level and a finale.
 *
 * Storage is tested last, including the browser that refuses it (a private
 * window), where progress must last for the page rather than throw.
 */

const DAY = 24 * 60 * 60 * 1000
const NOW = Date.UTC(2026, 9, 12, 12)

const moment = (index: number, title: string, panel = true) => ({
  index,
  title,
  where: `Where ${index}`,
  significance: `Why ${index} matters`,
  ...(panel ? { panel: title } : {}),
})

const ch1: Level = { id: 'chapter-1', kind: 'chapter', chapter: 1, pool: [], panels: ['A', 'B'] }
const ch2: Level = { id: 'chapter-2', kind: 'chapter', chapter: 2, pool: [], panels: ['C'] }
const cast: Level = { id: 'cast', kind: 'cast', pool: [], panels: [] }
const finale: Level = { id: 'finale', kind: 'finale', pool: [], panels: [] }

const QUEST: Quest = {
  slug: 'a-test-text',
  title: 'A Test Text',
  author: 'Nobody',
  levels: [ch1, cast, ch2, finale],
  challenges: [],
  moments: [moment(0, 'A'), moment(1, 'B'), moment(2, 'C'), moment(3, 'D', false)],
  art: { panels: {}, portraits: {}, markers: {} },
  hasComic: true,
}

const finish = (
  qp: QuestProgress,
  level: Level,
  right: number,
  total: number,
  opts: {
    xp?: number
    rebuilt?: number
    player?: ReturnType<typeof emptyPlayer>
    quest?: Quest
  } = {},
) =>
  finishLevel(
    opts.quest ?? QUEST,
    qp,
    opts.player ?? emptyPlayer(),
    { level, right, total, xp: opts.xp ?? right * XP_RIGHT },
    NOW,
    { rebuilt: opts.rebuilt ?? 0 },
  )

describe('stars and XP', () => {
  it('gives three stars from 90%, two from 70%, and one for finishing', () => {
    expect(starsFor(10, 10)).toBe(3)
    expect(starsFor(9, 10)).toBe(3)
    expect(starsFor(8, 10)).toBe(2)
    expect(starsFor(7, 10)).toBe(2)
    expect(starsFor(6, 10)).toBe(1)
    expect(starsFor(0, 10)).toBe(1)
    // A level with nothing in it cannot divide by zero into three stars.
    expect(starsFor(0, 0)).toBe(1)
  })

  it('pays for a right answer, more inside a run of three, and nothing for a wrong one', () => {
    expect(xpForAnswer(false, 5)).toBe(0)
    expect(xpForAnswer(true, 0)).toBe(XP_RIGHT)
    expect(xpForAnswer(true, 1)).toBe(XP_RIGHT)
    expect(xpForAnswer(true, 2)).toBe(XP_RIGHT + XP_COMBO)
    expect(xpForAnswer(true, 9)).toBe(XP_RIGHT + XP_COMBO)
  })

  it('needs 100 XP more for each rank than the last', () => {
    expect(playerLevel(0)).toEqual({ level: 1, into: 0, needed: 100 })
    expect(playerLevel(99)).toEqual({ level: 1, into: 99, needed: 100 })
    expect(playerLevel(100)).toEqual({ level: 2, into: 0, needed: 200 })
    expect(playerLevel(299)).toEqual({ level: 2, into: 199, needed: 200 })
    expect(playerLevel(300)).toEqual({ level: 3, into: 0, needed: 300 })
    expect(playerLevel(600)).toEqual({ level: 4, into: 0, needed: 400 })
  })
})

describe('spaced review', () => {
  it('brings a miss back after a short break and a right answer back later, further apart each time', () => {
    let p = recordAnswer(emptyQuest(), 'q1', false, NOW)
    expect(p.items.q1).toEqual({ box: 1, due: NOW + MISS_WAIT_MS, missed: true })

    p = recordAnswer(emptyQuest(), 'q1', true, NOW)
    expect(p.items.q1).toEqual({ box: 1, due: NOW + 1 * DAY, missed: false })

    const gaps: number[] = []
    for (let i = 0; i < 6; i++) {
      p = recordAnswer(p, 'q1', true, NOW)
      gaps.push(p.items.q1.due - NOW)
    }
    // Boxes 2 to 5, and then it stays in the last box.
    expect(gaps).toEqual([3 * DAY, 7 * DAY, 14 * DAY, 30 * DAY, 30 * DAY, 30 * DAY])
    expect(p.items.q1.box).toBe(5)

    // A miss sends it back to the first box, however far it had climbed, and
    // waits a short break before Review asks it (24 October 2026: straight
    // after a level, Review was 89 per cent the questions just missed).
    p = recordAnswer(p, 'q1', false, NOW)
    expect(p.items.q1).toEqual({ box: 1, due: NOW + MISS_WAIT_MS, missed: true })
  })

  it('offers the latest misses first, then the longest overdue, and nothing not yet due', () => {
    let p = emptyQuest()
    p = recordAnswer(p, 'right-long-ago', true, NOW - 10 * DAY) // due NOW - 9 days
    p = recordAnswer(p, 'right-yesterday', true, NOW - 1 * DAY) // due NOW
    p = recordAnswer(p, 'missed', false, NOW - 1 * DAY) // due NOW - 1 day, missed
    p = recordAnswer(p, 'right-today', true, NOW) // due tomorrow
    const known = new Set(['right-long-ago', 'right-yesterday', 'missed', 'right-today'])
    expect(dueForReview(p, NOW, known)).toEqual(['missed', 'right-long-ago', 'right-yesterday'])
  })

  it('never offers a challenge the quest no longer has', () => {
    // A rebuilt quest can drop a challenge; its record stays in the browser.
    const p = recordAnswer(emptyQuest(), 'gone', false, NOW)
    expect(dueForReview(p, NOW, new Set())).toEqual([])
  })
})

describe('finishing a level', () => {
  it('keeps the best stars and best share, and counts every play', () => {
    const first = finish(emptyQuest(), ch1, 10, 10)
    expect(first.stars).toBe(3)
    const worse = finish(first.quest, ch1, 5, 10)
    expect(worse.stars).toBe(1)
    expect(worse.quest.levels['chapter-1']).toEqual({ stars: 3, best: 1, plays: 2 })
  })

  it('inks a chapter’s panels once, and keeps the comic in the text’s order', () => {
    const second = finish(emptyQuest(), ch2, 8, 8)
    expect(second.newlyInked).toEqual(['C'])
    const first = finish(second.quest, ch1, 8, 8)
    expect(first.newlyInked).toEqual(['A', 'B'])
    expect(first.quest.inked).toEqual(['A', 'B', 'C'])
    const again = finish(first.quest, ch1, 8, 8)
    expect(again.newlyInked).toEqual([])
  })

  it('adds the perfect bonus only when every answer was right', () => {
    const perfect = finish(emptyQuest(), cast, 8, 8, { xp: 120 })
    expect(perfect.player.xp).toBe(120 + XP_PERFECT)
    const nearly = finish(emptyQuest(), cast, 7, 8, { xp: 100 })
    expect(nearly.player.xp).toBe(100)
  })

  it('opens the finale once every chapter has a star, and not before', () => {
    let qp = emptyQuest()
    expect(finaleOpen(QUEST, qp)).toBe(false)
    qp = finish(qp, ch1, 1, 8).quest
    qp = finish(qp, cast, 8, 8).quest
    expect(finaleOpen(QUEST, qp)).toBe(false)
    qp = finish(qp, ch2, 1, 8).quest
    expect(finaleOpen(QUEST, qp)).toBe(true)
  })

  it('suggests the first level not yet played, then the first short of three stars, then nothing', () => {
    let qp = emptyQuest()
    expect(nextLevel(QUEST, qp)?.id).toBe('chapter-1')
    qp = finish(qp, ch1, 5, 8).quest
    expect(nextLevel(QUEST, qp)?.id).toBe('cast')
    qp = finish(qp, cast, 8, 8).quest
    qp = finish(qp, ch2, 8, 8).quest
    // Every level played; the finale has just opened and has not been.
    expect(nextLevel(QUEST, qp)?.id).toBe('finale')
    qp = finish(qp, finale, 10, 10).quest
    expect(nextLevel(QUEST, qp)?.id).toBe('chapter-1') // one star, not three
    qp = finish(qp, ch1, 8, 8).quest
    expect(nextLevel(QUEST, qp)).toBeNull()
    expect(questStars(QUEST, qp)).toEqual({ earned: 12, max: 12 })
  })

  it('puts a part not yet played before the finale', () => {
    let qp = emptyQuest()
    for (const l of [ch1, cast]) qp = finish(qp, l, 8, 8).quest
    // chapter-2 unplayed: it is next, and the finale is not offered after it.
    expect(nextLevel(QUEST, qp)?.id).toBe('chapter-2')
    qp = { ...qp, levels: { ...qp.levels, 'chapter-2': { stars: 3, best: 1, plays: 1 } } }
    expect(nextLevel(QUEST, qp)?.id).toBe('finale')
  })
})

describe('achievements', () => {
  it('earns each one when its condition is met, and never twice', () => {
    let player = emptyPlayer()
    let qp = emptyQuest()

    const a = finish(qp, ch1, 6, 8, { player })
    expect(a.earned).toEqual(['first-level', 'chapter-inked'])
    ;({ player } = a)
    qp = a.quest

    const b = finish(qp, cast, 8, 8, { player })
    expect(b.earned).toEqual(['three-stars', 'perfect', 'full-cast'])
    ;({ player } = b)
    qp = b.quest

    // The last panel inked completes the comic.
    const c = finish(qp, ch2, 6, 8, { player })
    expect(c.earned).toEqual(['comic-complete'])
    ;({ player } = c)
    qp = c.quest

    const d = finish(qp, finale, 6, 10, { player })
    expect(d.earned).toEqual(['whole-story'])
    ;({ player } = d)

    // Nothing is earned twice.
    const e = finish(d.quest, cast, 8, 8, { player })
    expect(e.earned).toEqual([])
    expect(Object.keys(e.player.achievements).sort()).toEqual(
      [
        'chapter-inked',
        'comic-complete',
        'first-level',
        'full-cast',
        'perfect',
        'three-stars',
        'whole-story',
      ].sort(),
    )
  })

  it('counts quotations rebuilt across texts, and texts finished', () => {
    let player = emptyPlayer()
    const r1 = finish(emptyQuest(), ch1, 1, 8, { player, rebuilt: QUOTE_SMITH - 1 })
    expect(r1.earned).not.toContain('quote-smith')
    player = r1.player
    const r2 = finish(emptyQuest(), ch1, 1, 8, { player, rebuilt: 1 })
    expect(r2.earned).toContain('quote-smith')
    player = r2.player

    for (const slug of ['second-text', 'third-text']) {
      const f = finish(emptyQuest(), ch1, 1, 8, { player, quest: { ...QUEST, slug } })
      player = f.player
      if (slug === 'third-text') expect(f.earned).toContain('three-texts')
      else expect(f.earned).not.toContain('three-texts')
    }
    expect(player.texts).toEqual(['a-test-text', 'second-text', 'third-text'])
  })

  it('earns the review achievement once, and pays the review’s XP every time', () => {
    const first = finishReview(emptyPlayer(), 40, NOW)
    expect(first.earned).toEqual(['review'])
    expect(first.player.xp).toBe(40)
    const second = finishReview(first.player, 30, NOW + DAY)
    expect(second.earned).toEqual([])
    expect(second.player.xp).toBe(70)
    expect(second.player.achievements.review).toBe(NOW)
  })

  it('covers every achievement there is', () => {
    // Each one is shown being earned above. An achievement added without a
    // case here fails this, because one nothing awards would sit locked in
    // every student's cabinet for ever.
    const awarded = new Set<string>([
      'first-level',
      'chapter-inked',
      'three-stars',
      'perfect',
      'full-cast',
    ])
    awarded
      .add('comic-complete')
      .add('whole-story')
      .add('quote-smith')
      .add('three-texts')
      .add('review')
    expect([...ACHIEVEMENTS].sort()).toEqual([...awarded].sort())
  })
})

describe('storage', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('keeps progress for the page when the browser refuses storage', () => {
    // No window at all here (the node environment), which is the harshest
    // refusal: every access throws.
    expect(readQuestProgress('kept-in-memory')).toEqual(emptyQuest())
    const p = recordAnswer(emptyQuest(), 'q1', false, NOW)
    writeQuestProgress('kept-in-memory', p)
    expect(readQuestProgress('kept-in-memory')).toEqual(p)
    const player = { ...emptyPlayer(), xp: 55 }
    writePlayer(player)
    expect(readPlayer()).toEqual(player)
  })

  it('reads back what it wrote to the browser, under a versioned key', () => {
    const store = new Map<string, string>()
    vi.stubGlobal('window', {
      localStorage: {
        getItem: (k: string) => store.get(k) ?? null,
        setItem: (k: string, v: string) => void store.set(k, v),
      },
    })
    const p = recordAnswer(emptyQuest(), 'q2', true, NOW)
    writeQuestProgress('stored', p)
    expect([...store.keys()]).toContain('teh-quest:v1:stored')
    expect(readQuestProgress('stored')).toEqual(p)
  })

  it('does not bring back progress the browser no longer holds', () => {
    // Found 12 October 2026, before release: every write was also kept in
    // memory, and a read fell back to memory whenever storage held nothing, so
    // progress cleared from the browser came back while the page was open.
    const store = new Map<string, string>()
    vi.stubGlobal('window', {
      localStorage: {
        getItem: (k: string) => store.get(k) ?? null,
        setItem: (k: string, v: string) => void store.set(k, v),
      },
    })
    writeQuestProgress('cleared', recordAnswer(emptyQuest(), 'q3', false, NOW))
    store.clear()
    expect(readQuestProgress('cleared')).toEqual(emptyQuest())
  })

  it('plays on when storage throws, as in a private window, and keeps the page’s progress', () => {
    // Carried over from the guided path's score store when it was retired
    // (text-games-are-built-from-the-guides.test.ts, 12 October 2026). A
    // window whose storage refuses every read and write, unlike the case
    // above, where there is no window at all.
    vi.stubGlobal('window', {
      localStorage: {
        getItem: () => {
          throw new Error('denied')
        },
        setItem: () => {
          throw new Error('denied')
        },
      },
    })
    const p = recordAnswer(emptyQuest(), 'q4', true, NOW)
    expect(() => writeQuestProgress('private-window', p)).not.toThrow()
    expect(readQuestProgress('private-window')).toEqual(p)
    expect(() => readPlayer()).not.toThrow()
  })

  it('starts afresh rather than trusting a store it cannot read', () => {
    const store = new Map<string, string>([
      ['teh-quest:v1:broken', '{not json'],
      ['teh-quest:v1:old', JSON.stringify({ v: 0, levels: { 'chapter-1': { stars: 3 } } })],
    ])
    vi.stubGlobal('window', {
      localStorage: {
        getItem: (k: string) => store.get(k) ?? null,
        setItem: (k: string, v: string) => void store.set(k, v),
      },
    })
    expect(readQuestProgress('broken')).toEqual(emptyQuest())
    expect(readQuestProgress('old')).toEqual(emptyQuest())
  })
})
