import { describe, it, expect } from 'vitest'
import { analyseRounds, RECENT_WINDOW } from '@/lib/game-results/analytics'
import { nextSteps, allowedLinks } from '@/lib/game-results/next-steps'
import type { RoundItem, StoredRound } from '@/lib/game-results/types'

/**
 * Game analytics (src/lib/game-results/analytics.ts) describe a student to
 * themselves and, later, to their teacher and an AI coach. What these hold:
 *
 *   - a skill is judged on its LAST 30 answers, and says nothing below 5;
 *   - a strength needs 10 recent answers, 80% right;
 *   - "to work on" names the most specific thing (a kind of question in one
 *     text or game) before a broad skill;
 *   - a round with no per-question detail counts as play, never as evidence
 *     about a skill;
 *   - and nothing anywhere in the output is, or names, a grade.
 */

const NOW = new Date('2026-10-13T12:00:00Z')
const DAY = 86_400_000

function round(over: Partial<StoredRound> & { items: RoundItem[]; daysAgo?: number }): StoredRound {
  const { daysAgo = 0, ...rest } = over
  return {
    source: 'quest',
    activity: 'macbeth',
    level: 'chapter-1',
    answered: over.items.length,
    correct: over.items.reduce((n, i) => n + i.c, 0),
    score: null,
    maxScore: null,
    durationSeconds: 60,
    finishedAt: new Date(NOW.getTime() - daysAgo * DAY).toISOString(),
    ...rest,
  }
}

/** n answers of one kind, `right` of them right, the right ones LAST unless said otherwise. */
function answers(kind: string, n: number, right: number, rightFirst = false): RoundItem[] {
  const out: RoundItem[] = []
  for (let k = 0; k < n; k++) {
    const isRight = rightFirst ? k < right : k >= n - right
    out.push({ i: `q${k}`, k: kind, c: isRight ? 1 : 0 })
  }
  return out
}

describe('a skill’s band', () => {
  it('comes from its last 30 answers, not from all of them', () => {
    // 40 wrong long ago, then 30 right: the band is secure, because that is where
    // the student is now, while the whole-window accuracy still shows the history.
    const a = analyseRounds(
      [
        round({ items: answers('method', 40, 0), daysAgo: 60 }),
        round({ items: answers('method', 30, 30), daysAgo: 1 }),
      ],
      NOW,
    )
    const methods = a.groups.find((g) => g.group === 'methods')!
    expect(methods.recentAnswered).toBe(RECENT_WINDOW)
    expect(methods.recentAccuracy).toBe(100)
    expect(methods.band).toBe('secure')
    expect(methods.accuracy).toBe(43)
  })

  it('says nothing about a skill with fewer than 5 answers', () => {
    const a = analyseRounds([round({ items: answers('theme', 4, 0) })], NOW)
    expect(a.groups.find((g) => g.group === 'themes')!.band).toBe('too-few')
    expect(a.workOn).toEqual([])
  })

  it('is developing from 60% and secure from 80%', () => {
    const dev = analyseRounds([round({ items: answers('method', 10, 6) })], NOW)
    expect(dev.groups[0].band).toBe('developing')
    const weak = analyseRounds([round({ items: answers('method', 10, 5) })], NOW)
    expect(weak.groups[0].band).toBe('needs-work')
    const secure = analyseRounds([round({ items: answers('method', 10, 8) })], NOW)
    expect(secure.groups[0].band).toBe('secure')
  })
})

describe('a skill’s trend', () => {
  it('compares the last 14 days with the 14 before, when each has 5 answers', () => {
    const a = analyseRounds(
      [
        round({ items: answers('finish', 10, 3), daysAgo: 20 }),
        round({ items: answers('finish', 10, 9), daysAgo: 3 }),
      ],
      NOW,
    )
    expect(a.groups.find((g) => g.group === 'quotations')!.trend).toBe('improving')
  })

  it('is not claimed from too little', () => {
    const a = analyseRounds([round({ items: answers('finish', 10, 9), daysAgo: 3 })], NOW)
    expect(a.groups[0].trend).toBeNull()
  })
})

describe('strengths and things to work on', () => {
  it('a strength needs 10 recent answers', () => {
    const nine = analyseRounds([round({ items: answers('order', 9, 9) })], NOW)
    expect(nine.strengths).toEqual([])
    const ten = analyseRounds([round({ items: answers('order', 10, 10) })], NOW)
    expect(ten.strengths.map((s) => s.group)).toEqual(['plot'])
  })

  it('names the kind of question in the text before the broad skill', () => {
    const a = analyseRounds(
      [
        round({ items: answers('method', 10, 3) }),
        round({ activity: 'jekyll-and-hyde', items: answers('order', 10, 10) }),
      ],
      NOW,
    )
    expect(a.workOn[0].key).toBe('quest:macbeth:method')
    expect(a.workOn[0].activity).toBe('macbeth')
    expect(a.strengths[0].group).toBe('plot')
  })

  it('files a skills game’s tag under the game', () => {
    const a = analyseRounds(
      [
        round({
          source: 'skills',
          activity: 'speed-analysis',
          level: null,
          items: answers('simile', 8, 2),
        }),
      ],
      NOW,
    )
    expect(a.workOn[0].key).toBe('skills:speed-analysis:simile')
    expect(a.workOn[0].group).toBe('methods')
  })
})

describe('what counts as evidence', () => {
  it('a round with no per-question detail is play, not evidence about a skill', () => {
    const a = analyseRounds(
      [
        round({
          source: 'skills',
          activity: 'theme-matcher',
          level: null,
          items: [],
          score: 180,
          maxScore: 240,
        }),
      ],
      NOW,
    )
    expect(a.hasData).toBe(true)
    expect(a.groups).toEqual([])
    expect(a.activities[0].rounds).toBe(1)
    expect(a.activities[0].accuracy).toBeNull()
    expect(a.activities[0].bestPercent).toBe(75)
  })

  it('a quest kind this build does not know is left out, not filed somewhere wrong', () => {
    const a = analyseRounds([round({ items: answers('some-future-kind', 10, 2) })], NOW)
    expect(a.groups).toEqual([])
    expect(a.totals.answered).toBe(10)
  })

  it('a mix-up is a wrong label chosen at least twice', () => {
    const items: RoundItem[] = [
      { i: 'a', k: 'metaphor', c: 0, w: 'Simile' },
      { i: 'b', k: 'metaphor', c: 0, w: 'Simile' },
      { i: 'c', k: 'irony', c: 0, w: 'Sarcasm' },
    ]
    const a = analyseRounds(
      [round({ source: 'skills', activity: 'speed-analysis', level: null, items })],
      NOW,
    )
    expect(a.confusions).toEqual([
      { activity: 'speed-analysis', kind: 'metaphor', chose: 'Simile', times: 2 },
    ])
  })

  it('shows twelve weeks, oldest first, the current one last, empty weeks included', () => {
    const a = analyseRounds([round({ items: answers('order', 5, 4), daysAgo: 0 })], NOW)
    expect(a.weeks).toHaveLength(12)
    expect(a.weeks[11].answered).toBe(5)
    expect(a.weeks.slice(0, 11).every((w) => w.answered === 0)).toBe(true)
    expect(a.weeks[11].start).toBe('2026-10-12') // the Monday
  })

  it('ignores a round dated in the future', () => {
    const a = analyseRounds([round({ items: answers('order', 5, 5), daysAgo: -3 })], NOW)
    expect(a.hasData).toBe(false)
  })
})

describe('no grades, anywhere', () => {
  it('no field or value in the analytics or the next steps names a grade', () => {
    const a = analyseRounds(
      [
        round({ items: answers('method', 30, 9) }),
        round({ items: answers('order', 20, 20) }),
        round({
          source: 'skills',
          activity: 'grade-climber',
          level: null,
          items: answers('analysis', 10, 3),
        }),
      ],
      NOW,
    )
    const out = JSON.stringify({ a, steps: nextSteps(a) })
    // 'grade-climber' is a game's name; nothing else may say grade.
    expect(out.replace(/grade-climber/g, '')).not.toMatch(/grade/i)
  })
})

describe('next steps', () => {
  it('point only at the site’s own pages, all of them on the allowed list', () => {
    const a = analyseRounds(
      [
        round({ items: answers('method', 10, 2) }),
        round({
          source: 'skills',
          activity: 'apostrophe-ace',
          level: null,
          items: answers('possession', 10, 2),
        }),
      ],
      NOW,
    )
    const steps = nextSteps(a)
    expect(steps.length).toBeGreaterThan(0)
    const allowed = new Set(allowedLinks(a))
    for (const s of steps) {
      expect(allowed.has(s.href), s.href).toBe(true)
      if (s.learnHref) expect(allowed.has(s.learnHref), s.learnHref).toBe(true)
      expect(s.href.startsWith('/')).toBe(true)
    }
  })

  it('send a weak Craft question to the Craft level, and a game to the game', () => {
    const a = analyseRounds([round({ items: answers('method', 10, 2) })], NOW)
    expect(nextSteps(a)[0]).toMatchObject({
      messageKey: 'ga.next.quest.craft',
      href: '/games/texts/macbeth',
    })
  })
})
