// @vitest-environment jsdom
//
// Renders the real shell through a round, because what is held here is what a
// student sees on the results screen.
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { TEXT_GAMES_DICTIONARY } from '@/lib/i18n/dictionary-text-games'
import { beginTally, noteAnswer, noteDealt } from '@/lib/games/progression'
import { useAuthStore } from '@/store/auth-store'
import type { Profile } from '@/lib/types'

/**
 * A skills game shows a run of days practised only where the student chose it.
 *
 * WHY (24 October 2026). The founder asked for "rewards, streaks etc" in the
 * games. Most of the site's users are children, and the ICO Children's Code
 * (standard 6, high privacy by default; standard 13, no nudges) is why
 * profiles.streaks_enabled is false for every account known to be under 18
 * (src/lib/privacy/child-defaults.ts; measured on 24 October 2026: all 107
 * minors false). The column defaults to true, so an account with no date of
 * birth carries true that nobody chose. So the streak shows for a signed-in
 * student whose setting is on and is a choice, and for nobody else: not a
 * guest, not a child by default, not an account of unknown age
 * (src/lib/games/progression.ts, mayShowStreak).
 *
 * And nothing in the games' progress words asks anyone to come back: no
 * "don't lose your streak", no "see you tomorrow".
 */

vi.mock('@/lib/i18n/use-t', () => ({ useT: () => (key: string) => key }))

const { default: GameShell } = await import('@/components/games/GameShell')

function shell(state: 'playing' | 'finished') {
  return (
    <GameShell
      gameId="streak-test"
      title="A game"
      score={3}
      maxScore={3}
      onStart={() => {}}
      onFinish={() => {}}
      gameState={state}
    >
      <p>body</p>
    </GameShell>
  )
}

/** Play a round of three right answers, then finish it. */
function playAndFinish() {
  const view = render(shell('playing'))
  beginTally('streak-test')
  noteDealt(
    'streak-test',
    ['a', 'b', 'c'].map((key) => ({ key, tier: 1, due: false })),
    false,
  )
  for (const key of ['a', 'b', 'c']) noteAnswer('streak-test', key, true)
  view.rerender(shell('finished'))
  return view
}

const profile = (p: Partial<Profile>) => p as Profile

beforeEach(() => {
  localStorage.clear()
  useAuthStore.setState({ user: null, profile: null, isLoading: false })
})

describe('the results screen of a skills game', () => {
  it('shows what the round earned', () => {
    playAndFinish()
    expect(screen.getByText('quest.xp_gain')).toBeTruthy()
    expect(screen.getByText('games.ach.first_round.name')).toBeTruthy()
  })

  it.each([
    ['a guest', null],
    [
      'a child by default',
      profile({ is_minor: true, streaks_enabled: false, date_of_birth: '2012-03-01' }),
    ],
    [
      'an account of unknown age',
      profile({ is_minor: false, streaks_enabled: true, date_of_birth: null }),
    ],
    [
      'an adult who turned it off',
      profile({ is_minor: false, streaks_enabled: false, date_of_birth: '1990-03-01' }),
    ],
  ])('shows no run of days to %s', (_who, p) => {
    useAuthStore.setState({ profile: p })
    playAndFinish()
    expect(screen.getByText('quest.xp_gain')).toBeTruthy()
    expect(screen.queryByText('games.progress.streak')).toBeNull()
  })

  it.each([
    [
      'an adult with it on',
      profile({ is_minor: false, streaks_enabled: true, date_of_birth: '1990-03-01' }),
    ],
    [
      'a child who turned it on',
      profile({ is_minor: true, streaks_enabled: true, date_of_birth: '2012-03-01' }),
    ],
  ])('shows the run of days to %s', (_who, p) => {
    useAuthStore.setState({ profile: p })
    playAndFinish()
    expect(screen.getByText('games.progress.streak')).toBeTruthy()
  })
})

describe("the games' progress words", () => {
  const entries = Object.entries(TEXT_GAMES_DICTIONARY).filter(
    ([k]) => k.startsWith('games.progress.') || k.startsWith('games.ach.'),
  )

  it('exist', () => {
    expect(entries.length).toBeGreaterThan(20)
  })

  it.each(entries)('%s asks nobody to come back', (_k, v) => {
    expect(v.en).not.toMatch(
      /\b(lose|losing|lost|come back|tomorrow|miss out|don.t break|keep your)\b/i,
    )
    expect(v.ar).toBeTruthy()
    expect(v.es).toBeTruthy()
  })
})
