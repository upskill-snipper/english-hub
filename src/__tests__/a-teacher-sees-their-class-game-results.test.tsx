// @vitest-environment jsdom
//
// The school's view of game results (16 October 2026): the Games tab of a
// class and the Games panel of a pupil, rendered from what their routes
// return. What is asserted exists only once the components run: each pupil
// listed and linked, the class's mix-ups, the teacher wording of the pupil's
// analytics (about the pupil, never "your"), none of the pupil's own next
// steps or switches, a failed load said out loud, and no grade anywhere.
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { analyseRounds } from '@/lib/game-results/analytics'
import { summariseClass } from '@/lib/game-results/class-view'
import type { StoredRound } from '@/lib/game-results/types'

// Keys come back as themselves, so the test can see which wording was chosen.
vi.mock('@/lib/i18n/use-t', () => ({ useT: () => (key: string) => key }))
vi.mock('@/lib/i18n/use-format-date', () => ({ useFormatDate: () => () => '1 Oct 2026' }))

const { ClassGamesTab } = await import('@/components/school/games/ClassGamesTab')
const { PupilGamesPanel } = await import('@/components/school/games/PupilGamesPanel')

const NOW = new Date('2026-10-16T12:00:00Z')

function round(right: number, wrong: number): StoredRound {
  const items = [
    ...Array.from({ length: right }, (_, i) => ({
      i: `r${String(i).padStart(6, '0')}`,
      k: 'metaphor',
      c: 1 as const,
    })),
    ...Array.from({ length: wrong }, (_, i) => ({
      i: `w${String(i).padStart(6, '0')}`,
      k: 'metaphor',
      c: 0 as const,
      w: 'Simile',
    })),
  ]
  return {
    source: 'skills',
    activity: 'speed-analysis',
    level: null,
    answered: items.length,
    correct: right,
    score: null,
    maxScore: null,
    durationSeconds: 90,
    items,
    finishedAt: '2026-10-15T10:00:00Z',
  }
}

const amira = analyseRounds([round(3, 7)], NOW)
const ben = analyseRounds([round(10, 0)], NOW)

function respond(status: number, body: unknown) {
  globalThis.fetch = vi.fn(
    async () => new Response(JSON.stringify(body), { status }),
  ) as typeof fetch
}

beforeEach(() => {
  respond(200, {})
})
afterEach(() => cleanup())

describe('the class Games tab', () => {
  it('lists each pupil with a link to their page, and the class mix-ups', async () => {
    respond(200, {
      class: { id: 'c1', name: '10A' },
      summary: summariseClass(
        [
          { id: 'p1', name: 'Amira Khan', joinedAt: '2026-10-01T00:00:00Z', analytics: amira },
          { id: 'p2', name: 'Ben Ode', joinedAt: '2026-10-01T00:00:00Z', analytics: ben },
          { id: 'p3', name: 'Cara Lin', joinedAt: null, analytics: analyseRounds([], NOW) },
        ],
        NOW,
      ),
      names: { 'skills:speed-analysis': 'Speed Analysis' },
    })
    const { container } = render(<ClassGamesTab classId="c1" />)
    const link = await screen.findByRole('link', { name: 'Amira Khan' })
    expect(link.getAttribute('href')).toBe('/school/students/p1')
    expect(screen.getByRole('link', { name: 'Ben Ode' })).toBeTruthy()
    expect(screen.getByText('school.games.no_date')).toBeTruthy()
    // One pupil made the mix-up, so the singular wording is used (not "by 1 pupils").
    expect(container.textContent).toContain('school.games.mixups.line_one')
    expect(container.textContent).not.toMatch(/grade/i)
  })

  it('says when nobody has played since joining', async () => {
    respond(200, {
      class: { id: 'c1', name: '10A' },
      summary: summariseClass(
        [{ id: 'p1', name: 'Amira Khan', joinedAt: null, analytics: analyseRounds([], NOW) }],
        NOW,
      ),
      names: {},
    })
    render(<ClassGamesTab classId="c1" />)
    expect(await screen.findByText('school.games.empty')).toBeTruthy()
  })

  it('says the results could not be loaded, and offers to try again', async () => {
    respond(503, { error: 'x' })
    render(<ClassGamesTab classId="c1" />)
    expect(await screen.findByText('school.games.error')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'school.queue.retry' })).toBeTruthy()
  })
})

describe('the pupil Games panel', () => {
  it('speaks about the pupil, and shows none of the pupil’s own steps or switches', async () => {
    respond(200, {
      analytics: amira,
      names: { 'skills:speed-analysis': 'Speed Analysis' },
      since: '2026-10-01T00:00:00Z',
    })
    const { container } = render(<PupilGamesPanel studentId="p1" />)
    expect(await screen.findByText('ga.skills.title.teacher')).toBeTruthy()
    const text = container.textContent ?? ''
    expect(text).not.toContain('ga.skills.title"')
    for (const studentOnly of ['ga.next.title', 'ga.teachers_see', 'ga.suggest', 'ga.coach']) {
      expect(text).not.toContain(studentOnly)
    }
    expect(text).not.toMatch(/grade/i)
  })

  it('shows nothing when it is not known when the pupil joined', async () => {
    respond(200, { analytics: analyseRounds([], NOW), names: {}, since: null })
    render(<PupilGamesPanel studentId="p1" />)
    expect(await screen.findByText('school.games.pupil.no_date')).toBeTruthy()
  })
})
