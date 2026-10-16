import { describe, it, expect } from 'vitest'
import { analyseRounds } from './analytics'
import { summariseClass, CLASS_CONFUSIONS_SHOWN } from './class-view'
import type { StoredRound } from './types'

/**
 * The class view adds up pupils' own analytics (16 October 2026). These
 * checks hold it to the rules in its docblock: pooled shares, pupils counted
 * per band and never a band averaged, a mix-up counted once per pupil, and
 * every pupil listed, players or not.
 */

const NOW = new Date('2026-10-16T12:00:00Z')

function round(
  activity: string,
  answers: [kind: string, right: 0 | 1, chose?: string][],
  finishedAt = '2026-10-15T10:00:00Z',
): StoredRound {
  return {
    source: 'skills',
    activity,
    level: null,
    answered: answers.length,
    correct: answers.reduce((n, a) => n + a[1], 0),
    score: null,
    maxScore: null,
    durationSeconds: 60,
    items: answers.map(([k, c, w], i) => ({
      i: `q${String(i).padStart(6, '0')}`,
      k,
      c,
      ...(w ? { w } : {}),
    })),
    finishedAt,
  }
}

const times = <T>(n: number, x: T): T[] => Array.from({ length: n }, () => x)

const strong = analyseRounds(
  [round('speed-analysis', [...times(10, ['metaphor', 1] as [string, 1])])],
  NOW,
)
const weak = analyseRounds(
  [
    round('speed-analysis', [
      ...times(3, ['metaphor', 1] as [string, 1]),
      ...times(7, ['metaphor', 0, 'Simile'] as [string, 0, string]),
    ]),
  ],
  NOW,
)
const idle = analyseRounds([], NOW)

describe('summariseClass', () => {
  const s = summariseClass(
    [
      { id: 'p2', name: 'Zara', joinedAt: '2026-09-01T00:00:00Z', analytics: strong },
      { id: 'p1', name: 'Adam', joinedAt: '2026-09-01T00:00:00Z', analytics: weak },
      { id: 'p3', name: null, joinedAt: null, analytics: idle },
    ],
    NOW,
  )

  it('lists every pupil, players or not, by name with the unnamed last', () => {
    expect(s.pupils).toBe(3)
    expect(s.pupilsWithData).toBe(2)
    expect(s.rows.map((r) => r.id)).toEqual(['p1', 'p2', 'p3'])
    expect(s.rows[2]).toMatchObject({ answered: 0, accuracy: null, lastPlayed: null })
  })

  it('pools the class share over answers, so it is never an average of averages', () => {
    expect(s.answered).toBe(20)
    expect(s.correct).toBe(13)
    expect(s.accuracy).toBe(65)
  })

  it('counts pupils per band in a skill, and never averages a band', () => {
    const methods = s.groups.find((g) => g.group === 'methods')
    expect(methods).toBeDefined()
    expect(methods!.pupils).toEqual({ secure: 1, developing: 0, needsWork: 1, tooFew: 0 })
    expect(methods!.accuracy).toBe(65)
  })

  it('counts a mix-up once per pupil, however often they made it', () => {
    expect(s.confusions).toHaveLength(1)
    expect(s.confusions[0]).toMatchObject({
      activity: 'speed-analysis',
      chose: 'Simile',
      times: 7,
      pupils: 1,
    })
    expect(s.confusions.length).toBeLessThanOrEqual(CLASS_CONFUSIONS_SHOWN)
  })

  it('gives each pupil their own "to work on", most specific first', () => {
    const adam = s.rows.find((r) => r.id === 'p1')!
    expect(adam.workOn.length).toBeGreaterThan(0)
    expect(adam.workOn.every((w) => w.band === 'needs-work' || w.band === 'developing')).toBe(true)
    expect(s.rows.find((r) => r.id === 'p2')!.workOn).toEqual([])
  })

  it('says nothing about a class with no pupils', () => {
    const empty = summariseClass([], NOW)
    expect(empty).toMatchObject({ pupils: 0, pupilsWithData: 0, accuracy: null, groups: [] })
  })

  it('never mentions a grade', () => {
    expect(JSON.stringify(s)).not.toMatch(/grade/i)
  })
})
