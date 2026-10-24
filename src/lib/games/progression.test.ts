import { beforeEach, describe, expect, it } from 'vitest'

import {
  LEVEL_MIX,
  LEVEL_PASSES,
  TOP_LEVEL,
  XP_BY_TIER,
  XP_LEVEL_UP,
  XP_PERFECT,
  XP_RUN,
  beginTally,
  emptyProgress,
  endRound,
  finishRound,
  gameRecord,
  levelCounts,
  mayShowStreak,
  noteAnswer,
  noteDealt,
  readProgress,
  streakOf,
  xpForAnswers,
  type Answer,
} from './progression'
import { emptyPlayer, readPlayer } from './quest/progress'

/**
 * The skills games' XP, levels, achievements and run of days
 * (./progression.ts, 24 October 2026). The rules a student meets: XP for
 * right answers, more for harder ones; a level that rises after two strong
 * rounds and never falls; each achievement once; and a run of days that only
 * a student whose own setting allows it ever sees.
 */

/** This browser's storage, without a DOM: the code reads window.localStorage. */
class MemoryStorage {
  private m = new Map<string, string>()
  getItem(k: string) {
    return this.m.has(k) ? this.m.get(k)! : null
  }
  setItem(k: string, v: string) {
    this.m.set(k, v)
  }
  removeItem(k: string) {
    this.m.delete(k)
  }
  clear() {
    this.m.clear()
  }
}
const g = globalThis as unknown as { window?: { localStorage: MemoryStorage } }
const storage = () => g.window!.localStorage

const right = (tier = 1, wasDue = false): Answer => ({ tier, correct: true, wasDue })
const wrong = (tier = 1): Answer => ({ tier, correct: false, wasDue: false })
const NOW = new Date('2026-10-24T12:00:00').getTime()

beforeEach(() => {
  g.window = { localStorage: new MemoryStorage() }
})

describe('a level deals a mix of tiers', () => {
  it.each([1, 2, 3])('deals exactly the round asked for at level %i', (level) => {
    for (const size of [5, 8, 10, 12, 15, 20]) {
      const counts = levelCounts(level, size)
      expect(Object.values(counts).reduce((a, b) => a + b, 0)).toBe(size)
      // Mostly the level's own tier.
      expect(counts[String(level)]).toBeGreaterThanOrEqual(Math.floor(size / 2))
    }
  })

  it('stretches each level with harder questions below the top', () => {
    expect(LEVEL_MIX[1]['2']).toBeGreaterThan(0)
    expect(LEVEL_MIX[2]['3']).toBeGreaterThan(0)
    expect(levelCounts(1, 10)).toEqual({ '1': 8, '2': 2 })
    expect(levelCounts(3, 10)).toEqual({ '1': 1, '2': 3, '3': 6 })
  })
})

describe('XP', () => {
  it('pays more for harder questions, and nothing for a wrong answer', () => {
    expect(xpForAnswers([right(1)])).toBe(XP_BY_TIER[1])
    expect(xpForAnswers([right(3)])).toBe(XP_BY_TIER[3])
    expect(xpForAnswers([wrong(3)])).toBe(0)
  })

  it('adds a bonus from the third right answer in a run, and a wrong answer ends the run', () => {
    expect(xpForAnswers([right(), right(), right()])).toBe(3 * XP_BY_TIER[1] + XP_RUN)
    expect(xpForAnswers([right(), right(), wrong(), right()])).toBe(3 * XP_BY_TIER[1])
  })

  it('adds the perfect-round bonus for a long enough round with every answer right', () => {
    const answers = Array.from({ length: 10 }, () => right())
    const { outcome } = finishRound('g', answers, false, emptyProgress(), emptyPlayer(), NOW)
    expect(outcome.perfect).toBe(true)
    expect(outcome.xp).toBe(xpForAnswers(answers) + XP_PERFECT)
  })
})

describe('a game level', () => {
  const strong = Array.from({ length: 8 }, () => right(1))

  it(`rises after ${LEVEL_PASSES} strong rounds on it, with a bonus`, () => {
    let progress = emptyProgress()
    let player = emptyPlayer()
    const first = finishRound('g', strong, true, progress, player, NOW)
    expect(first.outcome.levelUp).toBeNull()
    expect(first.outcome.passes).toBe(1)
    progress = first.progress
    player = first.player
    const second = finishRound('g', strong, true, progress, player, NOW)
    expect(second.outcome.levelUp).toBe(2)
    expect(second.progress.games.g.level).toBe(2)
    // Eight of eight is also a perfect round.
    expect(second.outcome.xp).toBe(xpForAnswers(strong) + XP_PERFECT + XP_LEVEL_UP)
  })

  it('never falls, however a round goes', () => {
    const atTwo = {
      ...emptyProgress(),
      games: { g: { level: 2, passes: 1, rounds: 4, right: 30, bestRun: 6 } },
    }
    const bad = Array.from({ length: 8 }, () => wrong(2))
    const { progress } = finishRound('g', bad, true, atTwo, emptyPlayer(), NOW)
    expect(progress.games.g.level).toBe(2)
    expect(progress.games.g.passes).toBe(1)
  })

  it('counts only the questions at the level, and needs enough of them', () => {
    // Eight right, but all below level 2: not a strong round on level 2.
    const atTwo = {
      ...emptyProgress(),
      games: { g: { level: 2, passes: 0, rounds: 1, right: 8, bestRun: 8 } },
    }
    const easy = Array.from({ length: 8 }, () => right(1))
    expect(finishRound('g', easy, true, atTwo, emptyPlayer(), NOW).outcome.passes).toBe(0)
  })

  it('stops at the top level', () => {
    const top = {
      ...emptyProgress(),
      games: { g: { level: TOP_LEVEL, passes: 0, rounds: 9, right: 80, bestRun: 9 } },
    }
    const hard = Array.from({ length: 8 }, () => right(TOP_LEVEL))
    const { outcome, progress } = finishRound('g', hard, true, top, emptyPlayer(), NOW)
    expect(outcome.levelUp).toBeNull()
    expect(progress.games.g.level).toBe(TOP_LEVEL)
  })

  it('does not move for a game that is not dealt by level', () => {
    const { outcome } = finishRound('g', strong, false, emptyProgress(), emptyPlayer(), NOW)
    expect(outcome.level).toBeNull()
    expect(outcome.passes).toBe(0)
  })
})

describe('achievements', () => {
  it('are each earned once', () => {
    const first = finishRound('g', [right()], false, emptyProgress(), emptyPlayer(), NOW)
    expect(first.outcome.earned).toContain('games-first-round')
    const again = finishRound('g', [right()], false, first.progress, first.player, NOW)
    expect(again.outcome.earned).not.toContain('games-first-round')
  })

  it('reward getting right a question missed in an earlier round', () => {
    const { outcome } = finishRound(
      'g',
      [right(1, true)],
      false,
      emptyProgress(),
      emptyPlayer(),
      NOW,
    )
    expect(outcome.earned).toContain('games-comeback')
  })
})

describe('the run of days', () => {
  it('counts days in a row ending today or yesterday', () => {
    expect(streakOf(['2026-10-24', '2026-10-23', '2026-10-22'], '2026-10-24')).toBe(3)
    expect(streakOf(['2026-10-23', '2026-10-22'], '2026-10-24')).toBe(2)
    expect(streakOf(['2026-10-24', '2026-10-21'], '2026-10-24')).toBe(1)
    expect(streakOf([], '2026-10-24')).toBe(0)
  })

  it('is shown only where the student chose it', () => {
    // A guest has no profile.
    expect(mayShowStreak(null)).toBe(false)
    // A child, by default.
    expect(
      mayShowStreak({ streaks_enabled: false, is_minor: true, date_of_birth: '2012-01-01' }),
    ).toBe(false)
    // A child who, or whose parent, turned it on (the default for a child is off).
    expect(
      mayShowStreak({ streaks_enabled: true, is_minor: true, date_of_birth: '2012-01-01' }),
    ).toBe(true)
    // An adult with it on.
    expect(
      mayShowStreak({ streaks_enabled: true, is_minor: false, date_of_birth: '1990-01-01' }),
    ).toBe(true)
    // An adult who turned it off.
    expect(
      mayShowStreak({ streaks_enabled: false, is_minor: false, date_of_birth: '1990-01-01' }),
    ).toBe(false)
    // An unknown age: the column's default true was nobody's choice.
    expect(mayShowStreak({ streaks_enabled: true, is_minor: false, date_of_birth: null })).toBe(
      false,
    )
    expect(mayShowStreak({ streaks_enabled: true })).toBe(false)
  })
})

describe('the round in play, in this browser', () => {
  it('adds up what was dealt and answered, keeps it, and closes the round', () => {
    beginTally('g')
    noteDealt(
      'g',
      [
        { key: 'a', tier: 1, due: false },
        { key: 'b', tier: 3, due: true },
      ],
      true,
    )
    noteAnswer('g', 'a', true)
    noteAnswer('g', 'b', true)
    const outcome = endRound('g', NOW)
    expect(outcome?.xp).toBe(XP_BY_TIER[1] + XP_BY_TIER[3])
    expect(outcome?.earned).toContain('games-comeback')
    expect(readProgress().games.g.rounds).toBe(1)
    expect(gameRecord('g').levelled).toBe(true)
    expect(readPlayer().xp).toBe(outcome?.xp)
    // Closed: a second end adds nothing.
    expect(endRound('g', NOW)).toBeNull()
  })

  it('forgets a round abandoned by Restart', () => {
    noteDealt('g', [{ key: 'a', tier: 1, due: false }], false)
    noteAnswer('g', 'a', true)
    beginTally('g')
    expect(endRound('g', NOW)).toBeNull()
    expect(readProgress().games.g).toBeUndefined()
  })

  it('counts nothing for a round with no answers', () => {
    beginTally('g')
    noteDealt('g', [{ key: 'a', tier: 1, due: false }], true)
    expect(endRound('g', NOW)).toBeNull()
  })

  it('gives nothing for a game the student marks themselves', () => {
    beginTally('everyday-vocab-flashcards')
    noteDealt('everyday-vocab-flashcards', [{ key: 'a', tier: 1, due: false }], false)
    noteAnswer('everyday-vocab-flashcards', 'a', true)
    expect(endRound('everyday-vocab-flashcards', NOW)).toBeNull()
    expect(readPlayer().xp).toBe(0)
  })

  it('keeps every game apart', () => {
    beginTally('g')
    beginTally('h')
    noteDealt('g', [{ key: 'a', tier: 3, due: false }], false)
    noteAnswer('g', 'a', true)
    noteAnswer('h', 'a', true)
    expect(endRound('g', NOW)?.xp).toBe(XP_BY_TIER[3])
    // h never dealt 'a', so it counts as tier 1.
    expect(endRound('h', NOW)?.xp).toBe(XP_BY_TIER[1])
  })
})
