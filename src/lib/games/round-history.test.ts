import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import {
  DUE_AFTER,
  beginRound,
  currentRound,
  dueKeys,
  rememberDealt,
  rememberMissed,
  rememberSeen,
  seenKeys,
} from './round-history'

/**
 * What a student has met and missed in a skills game, kept in this browser
 * (24 October 2026): newest first, a miss due again two rounds later, and
 * nothing thrown where storage is blocked.
 */

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

const g = globalThis as unknown as { window?: { localStorage: unknown } }

describe('round history', () => {
  beforeEach(() => {
    g.window = { localStorage: new MemoryStorage() }
  })
  afterEach(() => {
    delete g.window
  })

  it('keeps what was dealt, newest first, once each', () => {
    rememberDealt('game', ['a', 'b'])
    rememberDealt('game', ['c', 'a'])
    expect(seenKeys('game')).toEqual(['c', 'a', 'b'])
  })

  it(`brings a missed question back ${DUE_AFTER} rounds later, not straight away`, () => {
    rememberDealt('game', ['a', 'b']) // round 1, where "a" is missed
    rememberMissed('game', 'a')
    expect(dueKeys('game'), 'round 2 is too soon').toEqual([])
    rememberDealt('game', ['c']) // round 2
    expect(dueKeys('game'), 'round 3').toEqual(['a'])
  })

  it('takes a missed question off the list once it is dealt again', () => {
    rememberDealt('game', ['a'])
    rememberMissed('game', 'a')
    rememberDealt('game', ['b'])
    rememberDealt('game', ['c'])
    expect(dueKeys('game')).toEqual(['a'])
    rememberDealt('game', ['a'])
    expect(dueKeys('game')).toEqual([])
  })

  it('counts one round for a game that deals one question at a time', () => {
    beginRound('ladder') // session 1, where "a" is missed
    rememberSeen('ladder', ['a'])
    rememberMissed('ladder', 'a')
    rememberSeen('ladder', ['b'])
    beginRound('ladder') // session 2: picks ask about the round under way
    expect(dueKeys('ladder', currentRound('ladder')), 'session 2 is too soon').toEqual([])
    beginRound('ladder') // session 3
    expect(dueKeys('ladder', currentRound('ladder'))).toEqual(['a'])
  })

  it('keeps each game apart', () => {
    rememberDealt('one', ['a'])
    expect(seenKeys('two')).toEqual([])
  })

  it('deals without history, and throws nothing, where storage is blocked', () => {
    g.window = {
      localStorage: {
        getItem: () => {
          throw new Error('blocked')
        },
        setItem: () => {
          throw new Error('blocked')
        },
      },
    }
    expect(() => rememberDealt('game', ['a'])).not.toThrow()
    expect(() => rememberMissed('game', 'a')).not.toThrow()
    expect(seenKeys('game')).toEqual([])
    expect(dueKeys('game')).toEqual([])
  })

  it('ignores a stored value that is not what it wrote', () => {
    ;(g.window!.localStorage as MemoryStorage).setItem('eh_game_seen_game', '{"not":"a list"}')
    ;(g.window!.localStorage as MemoryStorage).setItem('eh_game_missed_game', '[1, {"k": 2}]')
    expect(seenKeys('game')).toEqual([])
    expect(dueKeys('game')).toEqual([])
  })
})
