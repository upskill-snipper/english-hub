import { beforeAll, describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'

import { showsArt } from '@/components/games/quest/challenges/shared'
import { LevelPlayer } from '@/components/games/quest/LevelPlayer'
import type { useSfx } from '@/components/games/quest/sfx'
import { dealChallenge } from '@/lib/games/quest/deal'
import { loadQuest } from '@/lib/games/quest/load'
import type { Challenge, Quest } from '@/lib/games/quest/types'

/**
 * A quest gives its comics the screen.
 *
 * WHY (31 October 2026). Every challenge was played in one 36rem column, so on
 * a desktop a panel showed 368 pixels wide and a story-order card 153, when
 * the drawings are 860, and the founder found them too small to see. A
 * challenge with a panel or a portrait is now played on a wider stage with
 * its art beside what it asks (src/components/games/quest/challenges/
 * shared.tsx, ART_STAGE), and a challenge of words keeps the short measure.
 *
 * The player chooses the stage with showsArt(), which repeats each view's own
 * test for its art. Were the two to drift apart, a challenge with art would
 * be set side by side in the narrow column, or words would run the width of
 * the screen. So every challenge of two quests is rendered in the real
 * player, and the stage it is given is held to whether a drawing is in it.
 *
 * Rendered to HTML in the node environment, not under jsdom: the stage and
 * the drawings' frames are plain render output, there before any effect or
 * click (the-gates-actually-run.test.ts counts the files that need a DOM).
 * How each stage looks at a width was checked in a browser.
 */

/** A public-domain text with every kind of challenge, and the text the founder looked at. */
const SLUGS = ['macbeth', 'a-christmas-carol']
const quests = new Map<string, Quest>()

beforeAll(async () => {
  for (const slug of SLUGS) {
    const quest = await loadQuest(slug)
    expect(quest, `${slug} has no quest`).toBeTruthy()
    quests.set(slug, quest!)
  }
})

const sfx: ReturnType<typeof useSfx> = { on: false, toggle: () => {}, play: () => {} }

const kindOf = (c: Challenge) => (c.type === 'item' ? `item:${c.item.kind}` : c.type)

/** A panel's frame and a portrait's are both a printed sheet. */
const SHEET = /<figure[^>]*\bclass="[^"]*\blc-sheet\b/

describe('the stage a challenge is played on', () => {
  it.each(SLUGS)(
    '%s: a challenge with a drawing in it has the art stage, and only such a one',
    (slug) => {
      const quest = quests.get(slug)!
      const seen = { art: new Set<string>(), text: new Set<string>() }
      for (const c of quest.challenges) {
        const dealt = dealChallenge(c, 0)
        const html = renderToStaticMarkup(
          <LevelPlayer
            quest={quest}
            run={{ mode: 'level', level: quest.levels[0] }}
            play={0}
            dealt={[dealt]}
            sfx={sfx}
            t={(key) => key}
            onClose={() => {}}
            onPlayLevel={() => {}}
          />,
        )
        const stage = /data-stage="(art|text)"/.exec(html)?.[1]
        expect(stage, `${c.id} was not shown`).toBeTruthy()
        const drawn = SHEET.test(html)
        expect(stage, `${c.id}, ${drawn ? 'with' : 'without'} a drawing`).toBe(
          drawn ? 'art' : 'text',
        )
        expect(showsArt(dealt, quest), c.id).toBe(drawn)
        seen[drawn ? 'art' : 'text'].add(kindOf(c))
      }
      // Not vacuous: every view that can show art was rendered showing it,
      // and the views of words were rendered too.
      expect([...seen.art]).toEqual(
        expect.arrayContaining([
          'item:order',
          'item:theme',
          'item:who',
          'line-panel',
          'marker',
          'panel-line',
          'theme-check',
          'whose',
        ]),
      )
      expect([...seen.text]).toEqual(
        expect.arrayContaining(['evidence', 'item:finish', 'item:where', 'rebuild']),
      )
    },
  )
})
