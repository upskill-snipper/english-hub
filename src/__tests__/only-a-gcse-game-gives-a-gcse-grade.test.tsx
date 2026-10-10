// @vitest-environment jsdom
//
// Renders the real shell: the defect was what a student saw on the results
// screen, so that is what is asserted.
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

import { saveGameScore } from '@/lib/game-scores'

/**
 * A GCSE grade is shown only for a game written for GCSE students.
 *
 * THE DEFECT (found 10 October 2026). GameShell, which all 37 standalone games
 * are built on, turned every score into a GCSE grade from 1 to 9: live during
 * play, on the results screen, and in the best-score line before a game
 * starts. Eighteen of those games are for learners new to English and twelve
 * are KS3 literacy. A beginner who got 7 of 20 articles right was told they
 * were at grade 3, above advice about structuring essays with PEEL. A GCSE
 * grade says something about a GCSE student's exam, and nothing about either.
 *
 * THE RULE. Each game page states its audience. Only 'gcse' shows a grade, and
 * a page that states none gets no grade: the shell fails closed. The second half
 * of this file holds every page's stated audience to two things it does not
 * control: its own metadata title, and the section of the /games hub it is
 * listed in. It also requires every game to be listed somewhere, because three
 * were in no hub list at all until the same day.
 */

vi.mock('@/lib/i18n/use-t', () => ({ useT: () => (key: string) => key }))

const { default: GameShell } = await import('@/components/games/GameShell')

type Audience = 'gcse' | 'ks3' | 'eal' | undefined

function finished(audience: Audience, score = 7, maxScore = 20) {
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
    >
      <p>body</p>
    </GameShell>,
  )
}

// 7 of 20 is 35%, which percentageToGCSEGrade calls grade 3, whose advice opens
// with PEEL. Both are what a beginner was shown.
const GRADE_THREE_ADVICE = /PEEL/

beforeEach(() => localStorage.clear())

describe('the results screen', () => {
  it('gives a GCSE game its grade, and the advice that goes with it', () => {
    finished('gcse')
    expect(screen.getAllByText('games.shell.grade_label').length).toBeGreaterThan(0)
    expect(screen.getByText('3')).toBeTruthy()
    expect(screen.getByText(GRADE_THREE_ADVICE)).toBeTruthy()
  })

  it.each(['eal', 'ks3'] as const)(
    'gives a %s game its score and percentage, and no grade',
    (a) => {
      finished(a)
      expect(screen.queryByText('games.shell.grade_label')).toBeNull()
      expect(screen.queryByText(GRADE_THREE_ADVICE)).toBeNull()
      expect(screen.getAllByText('7/20').length).toBeGreaterThan(0)
      expect(screen.getAllByText('35%').length).toBeGreaterThan(0)
    },
  )

  it('gives no grade to a game that does not say who it is for', () => {
    finished(undefined)
    expect(screen.queryByText('games.shell.grade_label')).toBeNull()
    expect(screen.getAllByText('7/20').length).toBeGreaterThan(0)
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

  it('is a grade for a GCSE game', () => {
    saveGameScore('best-gcse', 7, 20)
    const { container } = idle('gcse', 'best-gcse')
    expect(container.textContent).toContain('games.shell.grade_label 3')
  })

  it('is a score for any other game', () => {
    saveGameScore('best-eal', 7, 20)
    const { container } = idle('eal', 'best-eal')
    expect(container.textContent).not.toContain('games.shell.grade_label')
    expect(container.textContent).toContain('7/20 (35%)')
  })
})

// ── Every game page says who it is for, and says it consistently ───────────

const GAMES_DIR = join(process.cwd(), 'src/app/games')
const HUB = readFileSync(join(GAMES_DIR, 'page.tsx'), 'utf8')

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
