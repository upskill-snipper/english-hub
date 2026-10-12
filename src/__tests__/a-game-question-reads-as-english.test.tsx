import { describe, it, expect } from 'vitest'
import { createRef } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { ItemView } from '@/components/games/quest/challenges/ItemView'
import type { DealtChallenge } from '@/lib/games/quest/deal'
import type { Quest } from '@/lib/games/quest/types'
import { midSentence } from '@/lib/games/text-games/text'
import type { WhoRelationItem } from '@/lib/games/text-games/types'

/**
 * A game's question reads as English when it names people by role.
 *
 * WHY (10 October 2026). Many guides name people by role, capitalised as a
 * cast list should be: "The speaker", "The wife", "The Inspector". The
 * character-map question put those names straight into "What is {from} to
 * {to}?", and the live War Photographer game asked "What is The photographer
 * to The wife?".
 *
 * WHERE IT IS ASKED NOW. Since 12 October 2026 the text quests ask it, in
 * src/components/games/quest/challenges/ItemView.tsx, and the guided path's
 * WhoQuestion that this file first rendered is retired. So the quest's view
 * is what is rendered here: if it stopped lowering the "The", this fails.
 *
 * The real component is rendered, because the defect is in what the student
 * reads, not in a returned string. It is rendered to HTML in the node
 * environment, not under jsdom, because the question is plain render output
 * that needs no effect or event to appear (the-gates-actually-run.test.ts
 * counts the files that need a DOM).
 */

const t = (key: string) => (key === 'text_games.q.who_relation' ? 'What is {from} to {to}?' : key)

/** A quest with nothing in it but what this one question needs. */
const QUEST: Quest = {
  slug: 'a-test-text',
  title: 'A Test Text',
  author: 'Nobody',
  levels: [],
  challenges: [],
  moments: [],
  art: { panels: {}, portraits: {}, markers: {} },
  hasComic: false,
}

function ask(from: string, to: string): string {
  const item: WhoRelationItem = {
    kind: 'who',
    mode: 'relation',
    id: 'who:test',
    from,
    to,
    portraits: [],
    options: ['husband and wife', 'father and son', 'rivals'],
    answer: 'husband and wife',
    explanation: 'An explanation long enough to stand for the guide entry.',
  }
  const dealt: DealtChallenge = {
    challenge: { type: 'item', id: 'item:who:test', item },
    options: item.options,
    deck: [],
  }
  const html = renderToStaticMarkup(
    <ItemView
      dealt={dealt}
      quest={QUEST}
      answered={null}
      onAnswer={() => {}}
      onTap={() => {}}
      headingRef={createRef<HTMLHeadingElement>()}
      t={t}
    />,
  )
  const heading = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)
  if (!heading) throw new Error('the question rendered no heading')
  return heading[1].replace(/<[^>]+>/g, '')
}

describe('the character-map question', () => {
  it('lowers a leading "The" inside the sentence', () => {
    expect(ask('The photographer', 'The wife')).toBe('What is the photographer to the wife?')
    expect(ask('The Inspector', 'Sheila Birling')).toBe('What is the Inspector to Sheila Birling?')
  })

  it('leaves every other name as the guide gives it', () => {
    expect(ask('Arthur Birling', 'Eric Birling')).toBe('What is Arthur Birling to Eric Birling?')
  })
})

describe('midSentence', () => {
  it('touches only a leading "The" followed by a word', () => {
    expect(midSentence('The speaker')).toBe('the speaker')
    expect(midSentence('Theo')).toBe('Theo')
    expect(midSentence('Thea Morgan')).toBe('Thea Morgan')
    expect(midSentence('Mr The')).toBe('Mr The')
    expect(midSentence('The')).toBe('The')
  })
})
