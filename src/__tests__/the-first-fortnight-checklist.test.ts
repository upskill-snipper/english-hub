// @vitest-environment jsdom
//
// This file needs a DOM. The suite's default is `node` (MAINT-9): running jsdom
// for all files cost 148 seconds of environment setup against an 11-second wall
// clock, for the handful that actually use one.
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  FIRST_WEEK_DAYS,
  RESULT_OPENED_KEY,
  firstWeekSteps,
  hasMarkedEssay,
  isFirstWeek,
  markResultOpened,
  nextStep,
  readFirstWeekSignals,
} from '@/lib/dashboard/first-week'

/**
 * UX-4: the first fortnight on a new account.
 *
 * A new account met a stats row reading "0 courses, 0 modules, 0 certificates"
 * - three zeroes and no instruction, on the screen where somebody decides
 * whether this product is worth paying for. The flagship paid feature, AI
 * marking, was one chip among nine.
 *
 * WHAT THESE GUARD. Not the layout. The two ways a checklist like this goes
 * wrong: claiming progress that did not happen, and throwing on a browser that
 * will not hand over its storage.
 */

const originalCookie = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie')

function setCookie(value: string) {
  Object.defineProperty(document, 'cookie', { get: () => value, configurable: true })
}

beforeEach(() => {
  setCookie('')
  window.localStorage.clear()
})

afterEach(() => {
  if (originalCookie) Object.defineProperty(Document.prototype, 'cookie', originalCookie)
  window.localStorage.clear()
})

const NOW = Date.parse('2026-09-19T12:00:00Z')
const daysAgo = (n: number) => new Date(NOW - n * 24 * 60 * 60 * 1000).toISOString()

describe('who sees it', () => {
  it('a brand-new account', () => {
    expect(isFirstWeek(daysAgo(0), NOW)).toBe(true)
  })

  it('and one still inside the fortnight', () => {
    expect(isFirstWeek(daysAgo(FIRST_WEEK_DAYS - 1), NOW)).toBe(true)
  })

  it('but not one past it', () => {
    expect(isFirstWeek(daysAgo(FIRST_WEEK_DAYS + 1), NOW)).toBe(false)
  })

  it('and not an account of unknown age', () => {
    // THE ONE THAT MATTERS. Treating "no date" as new would show a
    // first-fortnight checklist to somebody who has been here a year, which is
    // worse than showing nothing.
    expect(isFirstWeek(null, NOW)).toBe(false)
    expect(isFirstWeek(undefined, NOW)).toBe(false)
    expect(isFirstWeek('not a date', NOW)).toBe(false)
  })

  it('and not one created in the future, which is a clock problem not a new user', () => {
    expect(isFirstWeek(new Date(NOW + 60_000).toISOString(), NOW)).toBe(false)
  })
})

describe('it never claims a step that did not happen', () => {
  it('nothing done on a fresh device', () => {
    const steps = firstWeekSteps(readFirstWeekSignals())
    expect(steps.every((s) => !s.done)).toBe(true)
    expect(nextStep(steps)?.id).toBe('board')
  })

  it('a chosen board ticks only the first step', () => {
    setCookie('english-hub-board=aqa')
    const steps = firstWeekSteps(readFirstWeekSignals())
    expect(steps.map((s) => s.done)).toEqual([true, false, false])
  })

  it('an opened result does not backfill the steps before it', () => {
    // The signals are independent. Inferring backwards would let the card say
    // a student chose a board when the cookie says they did not.
    window.localStorage.setItem(RESULT_OPENED_KEY, '1')
    const steps = firstWeekSteps(readFirstWeekSignals())
    expect(steps.map((s) => s.done)).toEqual([false, false, true])
  })

  it('an empty marking history is not a marked essay', () => {
    expect(hasMarkedEssay('[]')).toBe(false)
  })

  it('and neither is a corrupt one', () => {
    expect(hasMarkedEssay('{not json')).toBe(false)
    expect(hasMarkedEssay('"a string"')).toBe(false)
    expect(hasMarkedEssay(null)).toBe(false)
  })

  it('but one entry is', () => {
    expect(hasMarkedEssay(JSON.stringify([{ id: 'x' }]))).toBe(true)
  })

  it('is not fooled by a cookie whose name merely ends in the board key', () => {
    setCookie('not-english-hub-board=aqa')
    expect(readFirstWeekSignals().boardChosen).toBe(false)
  })

  it('and finds the board cookie among others', () => {
    setCookie('_ga=GA1.1.x; english-hub-board=edexcel; eh-lang=en')
    expect(readFirstWeekSignals().boardChosen).toBe(true)
  })
})

describe('the marking call to action is step two', () => {
  it('in the order the item asked for', () => {
    // The whole point of the card: the flagship paid feature was one chip
    // among nine, and a trialist never found it.
    const steps = firstWeekSteps({ boardChosen: false, essayMarked: false, resultOpened: false })
    expect(steps.map((s) => s.id)).toEqual(['board', 'marking', 'result'])
    expect(steps[1].href).toBe('/marking/submit')
  })

  it('and the next step is the first one outstanding', () => {
    const steps = firstWeekSteps({ boardChosen: true, essayMarked: false, resultOpened: true })
    expect(nextStep(steps)?.id).toBe('marking')
  })

  it('with nothing left to point at once all three are done', () => {
    const steps = firstWeekSteps({ boardChosen: true, essayMarked: true, resultOpened: true })
    expect(nextStep(steps)).toBeNull()
  })
})

describe('a browser that will not hand over its storage', () => {
  it('reading signals does not throw', () => {
    const original = Object.getOwnPropertyDescriptor(window, 'localStorage')
    Object.defineProperty(window, 'localStorage', {
      get() {
        throw new Error('blocked')
      },
      configurable: true,
    })
    try {
      expect(() => readFirstWeekSignals()).not.toThrow()
      expect(readFirstWeekSignals().essayMarked).toBe(false)
    } finally {
      if (original) Object.defineProperty(window, 'localStorage', original)
    }
  })

  it('and recording a result does not either', () => {
    // A private window cannot record it; the checklist simply stays on step
    // three. Nothing else depends on it, and the results page must not break.
    const original = Object.getOwnPropertyDescriptor(window, 'localStorage')
    Object.defineProperty(window, 'localStorage', {
      get() {
        throw new Error('blocked')
      },
      configurable: true,
    })
    try {
      expect(() => markResultOpened()).not.toThrow()
    } finally {
      if (original) Object.defineProperty(window, 'localStorage', original)
    }
  })

  it('and it really does record when it can', () => {
    // The counterweight: a markResultOpened() that silently did nothing would
    // satisfy both assertions above.
    markResultOpened()
    expect(window.localStorage.getItem(RESULT_OPENED_KEY)).toBe('1')
    expect(readFirstWeekSignals().resultOpened).toBe(true)
  })
})

describe('the pages are wired to it', () => {
  const ROOT = process.cwd()
  const dashboard = readFileSync(join(ROOT, 'src/app/dashboard/page.tsx'), 'utf8')
  const results = readFileSync(join(ROOT, 'src/app/marking/results/[id]/page.tsx'), 'utf8')
  const card = readFileSync(join(ROOT, 'src/components/dashboard/FirstWeekCard.tsx'), 'utf8')

  it('the dashboard shows the card only inside the fortnight', () => {
    expect(dashboard).toContain('isFirstWeek(user?.created_at, Date.now())')
    expect(dashboard).toContain('{showFirstWeek ? (')
  })

  it('and keeps the stats row for everyone else', () => {
    // The counterweight. Replacing the row outright would leave established
    // accounts with no stats at all.
    expect(dashboard).toContain('{/* ── Stats Row ──')
    expect(dashboard).toContain("t('dash.your_stats')")
  })

  it('the results page records an opened result once, not per render path', () => {
    expect(results).toContain('if (result) markResultOpened()')
  })

  it('the card reads the plan fields the web gates actually read', () => {
    // Not the Prisma row: most accounts have none, so keying off it would tell
    // almost everyone they have nothing. Structural fact 1.
    expect(dashboard).toContain('subscriptionStatus={profile?.subscription_status}')
    expect(dashboard).toContain('subscriptionEndDate={profile?.subscription_end_date}')
  })

  it('and states no counts or grade promises, which the claim sheet forbids', () => {
    const copy = card.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')
    expect(copy).not.toMatch(/\bgrade up\b|\bguarantee/i)
  })
})
