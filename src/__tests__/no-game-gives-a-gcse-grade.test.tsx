// @vitest-environment jsdom
//
// Renders the real shell: the defect was what a student saw on the results
// screen, so that is what is asserted.
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

import { saveGameScore } from '@/lib/game-scores'
import { lookup } from '@/lib/i18n/dictionary'

/**
 * No game shows a GCSE grade.
 *
 * THE DEFECT (found 10 October 2026). GameShell, which all 37 standalone games
 * are built on, turned every score into a GCSE grade from 1 to 9: live during
 * play, on the results screen, and in the best-score line before a game
 * starts. Eighteen of those games are for learners new to English and twelve
 * are KS3 literacy. A beginner who got 7 of 20 articles right was told they
 * were at grade 3, above advice about structuring essays with PEEL. A GCSE
 * grade says something about a GCSE student's exam, and nothing about either.
 * From 10 October only the seven GCSE games showed one.
 *
 * THE RULE (23 October 2026, the founder's decision). None does. The grade was
 * only ever a conversion of the percentage, a share of questions right in a
 * revision game is not an exam result, and random play on Theme Matcher
 * averaged "grade 7". Every game shows its score and percentage; a game may add
 * one line of its own (Grade Climber names the rung reached), and that is all.
 * Until 23 October this file was only-a-gcse-game-gives-a-gcse-grade.test.tsx.
 *
 * The second half of this file holds every page's stated audience to two
 * things it does not control: its own metadata title, and the section of the
 * /games hub it is listed in. It also requires every game to be listed
 * somewhere, because three were in no hub list at all until 10 October. The
 * last part holds each card on the /games hub to what its game now does.
 */

vi.mock('@/lib/i18n/use-t', () => ({ useT: () => (key: string) => key }))

const { default: GameShell } = await import('@/components/games/GameShell')

type Audience = 'gcse' | 'ks3' | 'eal' | undefined
const AUDIENCES: Audience[] = ['gcse', 'ks3', 'eal', undefined]

function finished(audience: Audience, note?: string, score = 7, maxScore = 20) {
  return render(
    <GameShell
      gameId={`test-${audience ?? 'none'}`}
      audience={audience}
      title="A game"
      score={score}
      maxScore={maxScore}
      onStart={() => {}}
      onFinish={() => {}}
      gameState="finished"
      resultsNote={note}
    >
      <p>body</p>
    </GameShell>,
  )
}

// 7 of 20 is 35%, which the old conversion called grade 3, whose advice opened
// with PEEL. Both are what a beginner was shown.
const GRADE_THREE_ADVICE = /PEEL/

beforeEach(() => localStorage.clear())

describe('the results screen', () => {
  it.each(AUDIENCES)('gives a %s game its score and percentage, and no grade', (a) => {
    const { container } = finished(a)
    expect(screen.queryByText('games.shell.grade_label')).toBeNull()
    expect(screen.queryByText(GRADE_THREE_ADVICE)).toBeNull()
    expect(container.textContent).not.toMatch(/\bgrade\b/i)
    expect(screen.getAllByText('7/20').length).toBeGreaterThan(0)
    expect(screen.getAllByText('35%').length).toBeGreaterThan(0)
  })

  it("shows the game's own line about the round when it gives one", () => {
    finished('gcse', 'You climbed to rung 6 of the ladder.')
    expect(screen.getByText('You climbed to rung 6 of the ladder.')).toBeTruthy()
  })
})

describe('the best score shown before a game starts', () => {
  function idle(audience: Audience, gameId: string) {
    return render(
      <GameShell
        gameId={gameId}
        audience={audience}
        title="A game"
        score={0}
        maxScore={20}
        onStart={() => {}}
        onFinish={() => {}}
        gameState="idle"
      >
        <p>body</p>
      </GameShell>,
    )
  }

  it.each(['gcse', 'eal'] as const)('is a score for a %s game, never a grade', (a) => {
    saveGameScore(`best-${a}`, 7, 20)
    const { container } = idle(a, `best-${a}`)
    expect(container.textContent).not.toContain('games.shell.grade_label')
    expect(container.textContent).toContain('7/20 (35%)')
  })
})

// ── Every game page says who it is for, and says it consistently ───────────

const GAMES_DIR = join(process.cwd(), 'src/app/games')
// Line endings normalised: in a checkout with CRLF endings the list's closing
// "\n]\n" was never found, so each list ran on into the next and every KS3
// game also read as EAL (found in a fresh worktree, 10 October 2026).
const HUB = readFileSync(join(GAMES_DIR, 'page.tsx'), 'utf8').replace(/\r\n/g, '\n')

/** The standalone games: every directory whose page renders the shell. */
const GAME_IDS = readdirSync(GAMES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((id) => {
    const page = join(GAMES_DIR, id, 'page.tsx')
    return existsSync(page) && /<GameShell[\s>]/.test(readFileSync(page, 'utf8'))
  })
  .sort()

function statedAudience(id: string): string | null {
  const page = readFileSync(join(GAMES_DIR, id, 'page.tsx'), 'utf8')
  return /<GameShell[\s\S]*?\saudience="(gcse|ks3|eal)"/.exec(page)?.[1] ?? null
}

/** The audience the game's own metadata title names: "Grade Climber | GCSE ...". */
function titledAudience(id: string): string | null {
  const layout = readFileSync(join(GAMES_DIR, id, 'layout.tsx'), 'utf8')
  const title = /title:\s*'([^']+)'/.exec(layout)?.[1] ?? ''
  // GCSE first: Spelling Bee is "GCSE & KS3" and sits with the GCSE games.
  // EAL next: Capital Letter Quest is "EAL & KS3" and sits with the EAL games.
  if (/\bGCSE\b/.test(title)) return 'gcse'
  if (/\bEAL\b/.test(title)) return 'eal'
  if (/\bKS3\b/.test(title)) return 'ks3'
  return null
}

/** The slice of the hub source holding one list, from its declaration to `]`. */
function hubList(name: string): string {
  const start = HUB.indexOf(`const ${name}: GameDef[] = [`)
  expect(start, `${name} is not in the hub`).toBeGreaterThan(-1)
  const end = HUB.indexOf('\n]\n', start)
  expect(end, `${name} has no closing bracket`).toBeGreaterThan(start)
  return HUB.slice(start, end)
}

/** The audience implied by the hub section a game is listed in. */
function listedAudience(id: string): string[] {
  const found: string[] = []
  if (hubList('GAMES').includes(`href: '/games/${id}'`)) found.push('gcse')
  if (hubList('EAL_GAMES').includes(`'${id}',`)) found.push('eal')
  if (hubList('KS3_GAMES').includes(`'${id}',`)) found.push('ks3')
  return found
}

describe('every game page', () => {
  it('there are games to check, so this is not vacuous', () => {
    expect(GAME_IDS.length).toBeGreaterThanOrEqual(37)
  })

  it.each(GAME_IDS)('%s states its audience', (id) => {
    expect(statedAudience(id), `${id} passes no audience to GameShell`).not.toBeNull()
  })

  it.each(GAME_IDS)('%s states the audience its own metadata names', (id) => {
    expect(statedAudience(id)).toBe(titledAudience(id))
  })

  it.each(GAME_IDS)('%s is listed in exactly one hub section, the one for its audience', (id) => {
    expect(listedAudience(id), `${id} is in no hub list, or in more than one`).toEqual([
      statedAudience(id),
    ])
  })

  it('the three that were in no list are now in the GCSE one', () => {
    for (const id of ['grade-climber', 'quote-detective', 'comprehension-challenge']) {
      expect(listedAudience(id), id).toEqual(['gcse'])
    }
  })
})

// ── Every hub card says what its game now does ──────────────────────────────

/**
 * THE DEFECT (31 October 2026). A hub card shows its dictionary text when it
 * has a descriptionKey, and its GAMES description only when it has none. When
 * Grade Climber stopped showing a grade in play (1c7996409), its description
 * was changed and its dictionary text was not, so the live hub still offered
 * "three right to climb a grade". A keyed card's English is now held to its
 * description, so a change to one cannot stop short of the page, and no card
 * names a grade.
 */
type HubCard = { id: string; description: string; descriptionKey?: string }

/** Each GCSE hub entry's id, description and descriptionKey, read from the source. */
function hubCards(): HubCard[] {
  const quoted = String.raw`'((?:[^'\\]|\\.)*)'`
  return hubList('GAMES')
    .split('\n  {\n')
    .slice(1)
    .map((entry) => {
      const field = (name: string) =>
        new RegExp(String.raw`\n {4}${name}:\s*` + quoted)
          .exec('\n' + entry)?.[1]
          ?.replace(/\\'/g, "'")
      return {
        id: field('id') ?? '',
        description: field('description') ?? '',
        descriptionKey: field('descriptionKey'),
      }
    })
}

describe('the /games hub cards', () => {
  const cards = hubCards()
  const keyed = cards.filter((c) => c.descriptionKey)

  it('reads the GCSE list and its keyed cards, so this is not vacuous', () => {
    expect(cards.length).toBeGreaterThanOrEqual(10)
    expect(cards.every((c) => c.id && c.description)).toBe(true)
    expect(keyed.map((c) => c.id)).toContain('grade-climber')
  })

  it.each(keyed.map((c) => [c.id, c] as const))(
    "%s: the card's English is its description",
    (_id, card) => {
      expect(lookup(card.descriptionKey!, 'en')).toBe(card.description)
    },
  )

  it.each(cards.map((c) => [c.id, c] as const))('%s: the card names no grade', (_id, card) => {
    const shown = card.descriptionKey ? lookup(card.descriptionKey, 'en') : card.description
    expect(shown).not.toMatch(/\bgrades?\b/i)
  })
})
