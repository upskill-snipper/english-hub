/**
 * Regression guard for the board gate.
 *
 * 2026-08-18: BoardGate held an ALLOW-list of ~60 paths where the "pick your
 * exam board" modal must NOT appear, so any route the author forgot was
 * gated by default. /blog (the main organic entry point, ~42 posts) and
 * /ielts (a top-level nav item) were both missing. Visitors landing from
 * Google met a full-screen modal with no close button - Escape and
 * backdrop-click were disabled on exactly the paths where it was blocking -
 * and an IELTS learner had no correct answer to give, because IELTS is not
 * an exam board.
 *
 * The list is now inverted: `isBoardSpecificPath` names only the trees whose
 * content genuinely differs by board, so a forgotten route fails OPEN. These
 * tests pin both halves of that contract.
 */
import { describe, it, expect } from 'vitest'

import { BOARD_SPECIFIC_PREFIXES, isBoardSpecificPath } from './gated-paths'

describe('isBoardSpecificPath - routes that must never gate', () => {
  const mustNotGate = [
    '/',
    // The regression that took the blog down as an acquisition surface.
    '/blog',
    '/blog/ao5-gcse-english-literature',
    '/ar/blog/how-to-peel-a-paragraph',
    // IELTS and EAL have no exam board, so the picker has no valid answer.
    '/ielts',
    '/ielts/learn/writing/task-2-structure',
    '/eal',
    '/eal/diagnostic',
    // KS3 sits before a student picks a GCSE board.
    '/ks3',
    '/ks3/year-7/autumn/week-1',
    // Marketing and conversion surfaces.
    '/pricing',
    '/about',
    '/schools',
    '/school-pilot',
    '/teachers',
    '/students',
    '/contact',
    '/help',
    '/faqs',
    '/press',
    '/examiners',
    '/exam-boards',
    '/free-resources',
    '/sitemap-html',
    // Legal and compliance - school DPOs and regulators read these.
    '/legal/privacy',
    '/safeguarding',
    '/terms',
    // Auth and account.
    '/auth/login',
    '/auth/register',
    '/account/billing',
    '/settings',
    // Demo and school portal.
    '/demo/student',
    '/school/dashboard',
    // Board-agnostic long-tail content.
    '/analysis/macbeth/ambition',
    '/resources/revision-notes/hamlet',
  ]

  for (const path of mustNotGate) {
    it(`does not gate ${path}`, () => {
      expect(isBoardSpecificPath(path)).toBe(false)
    })
  }
})

describe('isBoardSpecificPath - routes whose content is board-filtered', () => {
  const mustGate = [
    '/revision',
    '/revision/texts/macbeth',
    '/practice',
    '/mock-exams',
    '/mock-exams/aqa-lang-p1-01',
    '/games',
    '/assessment/reading',
    '/courses',
    '/igcse/cambridge/0500',
    '/a-level/aqa',
    '/learn/gcse-lit/module-1',
    '/marking',
    '/marking/submit',
    '/toolkit',
    '/dashboard',
    '/dashboard/analytics',
  ]

  for (const path of mustGate) {
    it(`gates ${path}`, () => {
      expect(isBoardSpecificPath(path)).toBe(true)
    })
  }
})

describe('isBoardSpecificPath - edge cases', () => {
  it('treats null and undefined as not gated (fail open)', () => {
    expect(isBoardSpecificPath(null)).toBe(false)
    expect(isBoardSpecificPath(undefined)).toBe(false)
    expect(isBoardSpecificPath('')).toBe(false)
  })

  it('matches on a path segment boundary, not a bare string prefix', () => {
    // `/revisionist-history` must not be swallowed by the `/revision` entry.
    expect(isBoardSpecificPath('/revisionist-history')).toBe(false)
    expect(isBoardSpecificPath('/games-night')).toBe(false)
    expect(isBoardSpecificPath('/marking-scheme-explained')).toBe(false)
  })

  it('every registered prefix is absolute and has no trailing slash', () => {
    for (const prefix of BOARD_SPECIFIC_PREFIXES) {
      expect(prefix.startsWith('/')).toBe(true)
      expect(prefix.endsWith('/')).toBe(false)
    }
  })
})
