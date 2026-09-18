import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { readClientLocale } from '@/lib/i18n/read-client-locale'

/**
 * The Arabic surface, for a visitor who arrives from search.
 *
 * Probed live on https://theenglishhub.app/ar and /ar/ielts on 18 September
 * 2026: `document.cookie` carried no `eh-lang`, `<html data-lang>` was "ar",
 * and the header still read "Your Hub, Mark an essay, Mock exams, IELTS,
 * Pricing" while the cookie banner read "Accept All, Reject All, Manage
 * Preferences". Every `'use client'` component read the cookie and nothing
 * else, so it fell through to English on an Arabic page.
 *
 * /ar is the only indexed Arabic entry point and IELTS at GBP 39/month is the
 * highest-priced plan, so this met every Gulf search visitor. It was also a
 * consent problem: PECR consent has to be informed, and the banner was in a
 * language the reader had not chosen and might not read.
 */

const originalCookie = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie')

function setCookie(value: string) {
  Object.defineProperty(document, 'cookie', {
    get: () => value,
    configurable: true,
  })
}

beforeEach(() => {
  setCookie('')
  delete document.documentElement.dataset.lang
})

afterEach(() => {
  if (originalCookie) Object.defineProperty(Document.prototype, 'cookie', originalCookie)
  delete document.documentElement.dataset.lang
})

// ─── The defect ─────────────────────────────────────────────────────────

describe('a visitor arriving at /ar from search, with no cookie', () => {
  it('gets Arabic, not English', () => {
    document.documentElement.dataset.lang = 'ar'
    expect(readClientLocale()).toBe('ar')
  })

  it('gets Spanish on a Spanish-stamped page', () => {
    document.documentElement.dataset.lang = 'es'
    expect(readClientLocale()).toBe('es')
  })

  it('still gets English where nothing says otherwise', () => {
    expect(readClientLocale()).toBe('en')
  })
})

// ─── An explicit choice still wins ──────────────────────────────────────

describe('a reader who has chosen a language', () => {
  it('keeps English on an Arabic-stamped page', () => {
    // Otherwise the language toggle would appear to do nothing on /ar: the
    // reader picks English, the cookie says en, and the URL prefix would drag
    // it back to Arabic on the next render.
    setCookie('eh-lang=en')
    document.documentElement.dataset.lang = 'ar'
    expect(readClientLocale()).toBe('en')
  })

  it('keeps Arabic on an unprefixed page', () => {
    setCookie('eh-lang=ar')
    expect(readClientLocale()).toBe('ar')
  })

  it('prefers the cookie over the stamp when they disagree', () => {
    setCookie('eh-lang=es')
    document.documentElement.dataset.lang = 'ar'
    expect(readClientLocale()).toBe('es')
  })
})

// ─── Things that must not break ─────────────────────────────────────────

describe('robustness', () => {
  it('folds the legacy bilingual cookie to English', () => {
    setCookie('eh-lang=bi')
    document.documentElement.dataset.lang = 'ar'
    expect(readClientLocale()).toBe('en')
  })

  it('ignores an unknown cookie value and falls through to the stamp', () => {
    setCookie('eh-lang=fr')
    document.documentElement.dataset.lang = 'ar'
    expect(readClientLocale()).toBe('ar')
  })

  it('ignores an unknown stamp', () => {
    document.documentElement.dataset.lang = 'fr'
    expect(readClientLocale()).toBe('en')
  })

  it('finds the cookie among others', () => {
    setCookie('_ga=GA1.1.x; eh-lang=ar; other=1')
    expect(readClientLocale()).toBe('ar')
  })

  it('is not confused by a cookie whose name merely ends in eh-lang', () => {
    setCookie('not-eh-lang=ar')
    expect(readClientLocale()).toBe('en')
  })
})

// ─── Hydration ──────────────────────────────────────────────────────────

describe('hydration safety', () => {
  it('returns English when there is no document, as on the server', () => {
    // The hooks call this from an effect, never for the first render: the
    // server rendered the client component's initial HTML in English, so a
    // different first client render would be a hydration mismatch. This
    // guard is what makes the module safe to import from a server path.
    const doc = globalThis.document
    // @ts-expect-error - deliberately removing document to simulate the server
    delete globalThis.document
    try {
      expect(readClientLocale()).toBe('en')
    } finally {
      globalThis.document = doc
    }
  })
})
