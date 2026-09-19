// @vitest-environment jsdom
//
// This file needs a DOM. The suite's default is `node` (MAINT-9): running
// jsdom for all 187 files cost 148 seconds of environment setup against an
// 11-second wall clock, for the 13 files that actually use one.
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { markingBoardFor, readSiteBoardCookie } from '@/lib/board/marking-board-map'
import { saveMarkingDraft, takeMarkingDraft, clearMarkingDraft } from '@/lib/marking/draft-store'

/**
 * /marking/submit, the screen where a trialist decides the product works.
 *
 * Production `marking_submissions` has 0 rows, ever. Three things on this page
 * made that likely:
 *
 *   1. The board select started empty and never read the site board cookie, so
 *      a student who had already been forced through /board-select chose their
 *      board a second time, from a six-option list.
 *   2. A 403 rendered the server's sentence ("AI marking is a Premium
 *      feature...") in a plain text div with NO LINK. The one screen that
 *      converts, refusing without offering a way to pay.
 *   3. /marking is not a protected route, so a signed-out visitor could type a
 *      600-word essay and be told "You need to sign in" as text, with nothing
 *      carrying the essay through login.
 */

const page = readFileSync(join(process.cwd(), 'src/app/marking/submit/page.tsx'), 'utf8')

// ─── 1. The board the site already knows ────────────────────────────────

describe('mapping the site board cookie to the marking catalogue', () => {
  it.each([
    ['aqa', 'AQA'],
    ['edexcel', 'Edexcel'],
    ['ocr', 'OCR'],
    ['eduqas', 'Eduqas'],
    ['cambridge-0500', 'Cambridge-0500'],
    ['cambridge-0990', 'Cambridge-0990'],
  ])('%s becomes %s', (cookie, expected) => {
    expect(markingBoardFor(cookie)).toBe(expected)
  })

  it.each(['edexcel-igcse', 'edexcel-igcse-lang', 'edexcel-igcse-lit-poetry'])(
    'collapses %s onto Edexcel, which is how the catalogue groups it',
    (cookie) => {
      expect(markingBoardFor(cookie)).toBe('Edexcel')
    },
  )

  it.each(['ks3', 'eal-beginner', 'eal', 'something-else', '', null, undefined])(
    'returns null for %s rather than guessing',
    (cookie) => {
      // Pre-selecting the wrong board would have a student mark an Edexcel
      // essay against an AQA grid without noticing the field was filled in.
      expect(markingBoardFor(cookie)).toBeNull()
    },
  )

  it('is case and whitespace insensitive', () => {
    expect(markingBoardFor('  AQA  ')).toBe('AQA')
    expect(markingBoardFor('Edexcel-IGCSE')).toBe('Edexcel')
  })

  it('never maps Cambridge 0500 and 0990 onto each other', () => {
    // They are different qualifications with different papers.
    expect(markingBoardFor('cambridge-0500')).not.toBe(markingBoardFor('cambridge-0990'))
  })
})

describe('reading the cookie', () => {
  const original = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie')
  const set = (v: string) =>
    Object.defineProperty(document, 'cookie', { get: () => v, configurable: true })

  afterEach(() => {
    if (original) Object.defineProperty(Document.prototype, 'cookie', original)
  })

  it('finds the board among other cookies', () => {
    set('_ga=1; english-hub-board=edexcel-igcse; other=2')
    expect(readSiteBoardCookie()).toBe('edexcel-igcse')
  })

  it('returns null when it is absent', () => {
    set('_ga=1')
    expect(readSiteBoardCookie()).toBeNull()
  })

  it('decodes a percent-encoded value', () => {
    set('english-hub-board=cambridge%2D0500')
    expect(markingBoardFor(readSiteBoardCookie())).toBe('Cambridge-0500')
  })
})

describe('the page uses it without clobbering a choice', () => {
  it('pre-selects from the cookie', () => {
    expect(page).toContain('markingBoardFor(readSiteBoardCookie())')
  })

  it('never overwrites a board the user has already picked here', () => {
    expect(page).toContain('setBoard((current) => current || mapped)')
  })

  it('does it in an effect, so the server and first client render agree', () => {
    // Reading the cookie in useState's initialiser would be a hydration
    // mismatch: the server has no cookie.
    const idx = page.indexOf('markingBoardFor(readSiteBoardCookie())')
    expect(page.slice(Math.max(0, idx - 200), idx)).toContain('useEffect')
  })
})

// ─── 2. A refusal a person can act on ───────────────────────────────────

describe('the refusal', () => {
  it('offers a way to pay when access is refused', () => {
    expect(page).toContain("refusalKind === 'upgrade'")
    expect(page).toContain('/pricing?plan=student_monthly')
  })

  it('quotes the real prices from the constants, not a markdown file', () => {
    expect(page).toContain('PRICING.STUDENT_MONTHLY')
    expect(page).toContain('PRICING.STUDENT_ANNUAL')
  })

  it('offers a sign-in that returns to this page', () => {
    expect(page).toContain("refusalKind === 'signin'")
    expect(page).toContain('/auth/login?redirect=%2Fmarking%2Fsubmit')
  })

  it('still carries the server sentence rather than replacing it', () => {
    expect(page).toContain('<p>{error}</p>')
  })

  it('leaves a genuine error looking like an error', () => {
    // A 500 must not be dressed up as a friendly upsell.
    expect(page).toContain('border-destructive/30 bg-destructive/10 text-destructive')
  })

  it('clears the refusal kind when a new submit starts', () => {
    expect(page).toContain('setRefusalKind(null)')
  })
})

// ─── 3. The essay survives the login round trip ─────────────────────────

describe('the draft store', () => {
  beforeEach(() => {
    clearMarkingDraft()
  })

  const draft = {
    board: 'Edexcel',
    paper: 'edexcel-lang-paper1',
    question: 'Q4',
    title: 'My essay',
    essay: 'The writer presents the setting as hostile from the opening line.',
  }

  it('round-trips everything the form needs', () => {
    saveMarkingDraft(draft)
    expect(takeMarkingDraft()).toEqual(draft)
  })

  it('is consumed exactly once', () => {
    // A draft that survived a second visit would silently overwrite whatever
    // the person had started typing.
    saveMarkingDraft(draft)
    expect(takeMarkingDraft()).not.toBeNull()
    expect(takeMarkingDraft()).toBeNull()
  })

  it('stores nothing when there is no essay to carry', () => {
    saveMarkingDraft({ ...draft, essay: '   ' })
    expect(takeMarkingDraft()).toBeNull()
  })

  it("uses sessionStorage, so a shared machine does not keep a child's work", () => {
    saveMarkingDraft(draft)
    expect(window.sessionStorage.getItem('eh-marking-draft')).toBeTruthy()
    expect(window.localStorage.getItem('eh-marking-draft')).toBeNull()
  })

  it('discards a stale draft rather than resurrecting old work', () => {
    window.sessionStorage.setItem(
      'eh-marking-draft',
      JSON.stringify({ ...draft, savedAt: Date.now() - 2 * 60 * 60 * 1000 }),
    )
    expect(takeMarkingDraft()).toBeNull()
  })

  it('discards a corrupt value, and removes it', () => {
    window.sessionStorage.setItem('eh-marking-draft', 'not json')
    expect(takeMarkingDraft()).toBeNull()
    expect(window.sessionStorage.getItem('eh-marking-draft')).toBeNull()
  })

  it('discards a value with no savedAt, which is not ours', () => {
    window.sessionStorage.setItem('eh-marking-draft', JSON.stringify({ essay: 'hello' }))
    expect(takeMarkingDraft()).toBeNull()
  })

  it('never throws when storage is unavailable', () => {
    // Private windows and blocked site data both throw on access.
    const spy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError')
    })
    expect(() => saveMarkingDraft(draft)).not.toThrow()
    spy.mockRestore()

    const getSpy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('SecurityError')
    })
    expect(takeMarkingDraft()).toBeNull()
    getSpy.mockRestore()
  })

  it('is stashed by the page when the API answers 401', () => {
    expect(page).toContain('saveMarkingDraft({ board, paper, question, title, essay })')
  })

  it('is restored by the page on mount', () => {
    expect(page).toContain('takeMarkingDraft()')
  })
})

// ─── Question labels ────────────────────────────────────────────────────

describe('question labels', () => {
  it('no longer reads like a database row', () => {
    // Was `${q.id} - ${q.questionType}` rendering "Q2 - language-analysis".
    expect(page).toContain('humanQuestionType(q.questionType)')
    expect(page).toContain('marks)`')
  })
})
