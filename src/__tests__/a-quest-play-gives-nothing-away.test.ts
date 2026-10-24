import { describe, expect, it } from 'vitest'

import { challengeFacts, dealLevel, PLAY_SIZE } from '@/lib/games/quest/deal'
import { loadQuest } from '@/lib/games/quest/load'
import { emptyQuest, recordDeal, seenInLevel } from '@/lib/games/quest/progress'
import type { Quest } from '@/lib/games/quest/types'
import { textGameSlugs } from '@/lib/games/text-games/load'

/**
 * Every quest, every level, dealt five plays deep with the history a
 * student's browser keeps (24 October 2026; src/lib/games/quest/deal.ts says
 * why).
 *
 * THE DEFECT. Measured that day over all 107 quests, 3,115 plays: 92 per cent
 * of a part's plays held a challenge an earlier one had settled, half of a
 * second play was the first again, and a level left and started again dealt
 * the identical play.
 *
 * WHAT IS HELD, for every level:
 *
 *   - no challenge twice in a play;
 *   - a play holds two challenges sharing a subject (challengeFacts) only
 *     when no challenge left out of it shares nothing with it, which is when
 *     the level is too small to do better: the deal tops up with a clashing
 *     challenge only after every clash-free one has gone;
 *   - a level started again, its first play recorded as dealt, deals a
 *     different play whenever the level has more than one play's worth.
 *
 * And, as measured on 24 October 2026 with the pools as built that day, so a
 * change that makes them worse shows: at most 25 per cent of plays share a
 * subject (22.8 measured; the rest are levels too small to do better), and a
 * second play repeats at most 20 per cent of the first where the level holds
 * two plays' worth (17.8 measured).
 */

const quests: Quest[] = []

describe('every quest play', () => {
  it('loads every quest', async () => {
    for (const slug of textGameSlugs()) {
      const q = await loadQuest(slug)
      if (q) quests.push(q)
    }
    expect(quests.length).toBeGreaterThan(100)
  }, 600_000)

  it('repeats nothing, shares a subject only when the level leaves no choice, and deals afresh when started again', () => {
    const problems: string[] = []
    let plays = 0
    let shared = 0
    let repeat = 0
    let repeatOf = 0
    for (const quest of quests) {
      for (const level of quest.levels) {
        const pool = level.pool
          .map((id) => quest.challenges.find((c) => c.id === id))
          .filter((c): c is NonNullable<typeof c> => !!c)
        let p = emptyQuest()
        let previous: string[] = []
        for (let play = 0; play < 5; play++) {
          const dealt = dealLevel(quest, level, play, seenInLevel(p, level.id))
          const ids = dealt.map((d) => d.challenge.id)
          const where = `${quest.slug} ${level.id} play ${play + 1}`
          if (new Set(ids).size !== ids.length) problems.push(`${where}: a challenge twice`)
          const facts = dealt.flatMap((d) => challengeFacts(d.challenge))
          plays++
          if (new Set(facts).size !== facts.length) {
            shared++
            const inPlay = new Set(facts)
            const free = pool.find(
              (c) => !ids.includes(c.id) && challengeFacts(c).every((f) => !inPlay.has(f)),
            )
            if (free) problems.push(`${where}: shares a subject though ${free.id} shared none`)
          }
          if (play === 1 && pool.length >= 2 * PLAY_SIZE[level.kind]) {
            repeatOf++
            repeat += ids.filter((id) => previous.includes(id)).length / ids.length
          }
          if (play === 0 && pool.length > PLAY_SIZE[level.kind]) {
            const again = dealLevel(quest, level, 1, ids).map((d) => d.challenge.id)
            if (again.join() === ids.join()) problems.push(`${where}: started again, the same play`)
          }
          p = recordDeal(p, level.id, ids)
          previous = ids
        }
      }
    }
    expect(problems.slice(0, 5), `${problems.length} problems`).toEqual([])
    expect(shared / plays, 'plays that share a subject').toBeLessThanOrEqual(0.25)
    expect(repeat / repeatOf, 'second plays repeating the first').toBeLessThanOrEqual(0.2)
  })
})
