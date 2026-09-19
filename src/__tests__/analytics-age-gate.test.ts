// @vitest-environment jsdom
//
// This file needs a DOM. The suite's default is `node` (MAINT-9): running
// jsdom for all 187 files cost 148 seconds of environment setup against an
// 11-second wall clock, for the 13 files that actually use one.
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The analytics gate treated "we do not know how old this person is" as
 * "adult".
 *
 * THE DEFECT (19 September 2026, counted against production). `isMinorFlagged`
 * asked whether the flag was literally the string 'true'. `profiles.is_minor`
 * is NOT NULL DEFAULT false, and the provider passed `profile.is_minor ===
 * true`. Production held 209 profiles of which 209 had a NULL date_of_birth
 * and is_minor false.
 *
 * So on a product whose users are children, EVERY signed-in account was
 * reported to the gate as an adult, and any of them who accepted analytics
 * cookies was captured and identified to PostHog.
 *
 * Worse, the two failure paths disagreed: the server-side branch returned true
 * (do not capture) while the catch returned false (capture). A private window,
 * where localStorage throws, therefore tracked a child.
 *
 * CLAUDE.md: "If a change touches identity, consent, analytics or retention,
 * assume a regulator could read it." These tests are written to be read that
 * way.
 */

const originalStorage = globalThis.localStorage

function setFlag(value: string | null) {
  const store = new Map<string, string>()
  if (value !== null) store.set('eh-is-minor', value)
  store.set('cookie-consent', 'all') // consented, so age is the only gate left
  Object.defineProperty(globalThis, 'localStorage', {
    value: {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => void store.set(k, v),
      removeItem: (k: string) => void store.delete(k),
    },
    configurable: true,
  })
  return store
}

afterEach(() => {
  Object.defineProperty(globalThis, 'localStorage', {
    value: originalStorage,
    configurable: true,
  })
  vi.resetModules()
})

async function canCapture(): Promise<boolean> {
  const mod = await import('@/lib/posthog')
  return mod.canCaptureAnalytics()
}

// ─── The defect ─────────────────────────────────────────────────────────

describe('a signed-in account with no date of birth on record', () => {
  it('is NOT captured, because an unverified age is not an adult age', async () => {
    setFlag('unknown')
    expect(await canCapture()).toBe(false)
  })
})

describe('a confirmed minor', () => {
  it('is not captured', async () => {
    setFlag('true')
    expect(await canCapture()).toBe(false)
  })
})

describe('a confirmed adult', () => {
  it('is captured, so the gate is not simply off', async () => {
    // If this passed while everything else failed closed, the gate would be
    // indistinguishable from disabling analytics entirely.
    setFlag('adult')
    expect(await canCapture()).toBe(true)
  })
})

// ─── Both failure paths ─────────────────────────────────────────────────

describe('when storage cannot be read', () => {
  it('fails closed rather than capturing', async () => {
    // A private window throws here. The old catch returned false, i.e.
    // "not a minor", i.e. capture - so a child in a private window was tracked.
    Object.defineProperty(globalThis, 'localStorage', {
      value: {
        getItem: () => {
          throw new Error('SecurityError')
        },
        setItem: () => {},
        removeItem: () => {},
      },
      configurable: true,
    })
    expect(await canCapture()).toBe(false)
  })
})

// ─── Writing the flag ───────────────────────────────────────────────────

describe('setAgeAssurance', () => {
  beforeEach(() => setFlag(null))

  it.each([
    ['minor', 'true'],
    ['unknown', 'unknown'],
    ['adult', 'adult'],
  ] as const)('records %s', async (state, stored) => {
    const store = setFlag(null)
    const mod = await import('@/lib/posthog')
    mod.setAgeAssurance(state)
    expect(store.get('eh-is-minor')).toBe(stored)
  })

  it('writes adult rather than removing the key', async () => {
    // An absent key means "logged out". A signed-in adult is a different
    // state and has to be distinguishable from it.
    const store = setFlag(null)
    const mod = await import('@/lib/posthog')
    mod.setAgeAssurance('adult')
    expect(store.has('eh-is-minor')).toBe(true)
  })

  it('is cleared entirely on sign-out', async () => {
    const store = setFlag('true')
    const mod = await import('@/lib/posthog')
    mod.clearAgeAssurance()
    expect(store.has('eh-is-minor')).toBe(false)
  })
})

// ─── The call sites ─────────────────────────────────────────────────────

const provider = readFileSync(
  join(process.cwd(), 'src/components/providers/supabase-provider.tsx'),
  'utf8',
)
const dobRoute = readFileSync(join(process.cwd(), 'src/app/api/profile/dob/route.ts'), 'utf8')

/** Comments here describe the defect and use its vocabulary, so strip them. */
function code(src: string): string {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
}

describe('the session provider', () => {
  it('reports unknown when the profile has no date of birth', () => {
    expect(provider).toContain("profile.date_of_birth ? 'adult' : 'unknown'")
  })

  it('no longer passes a bare boolean', () => {
    expect(provider).not.toContain('setMinorFlag(')
  })

  it('clears the flag on sign-out rather than asserting adulthood', () => {
    expect(provider).toContain('clearAgeAssurance()')
  })
})

describe('the date-of-birth correction route', () => {
  it('writes the profile, not only the Prisma row', () => {
    // profiles.date_of_birth and profiles.is_minor are what the analytics
    // gate, the entitlement checks and the child defaults all read. This
    // route touched none of them, so a child could correct their age and
    // remain an adult everywhere that matters.
    expect(dobRoute).toContain("from('profiles')")
    expect(dobRoute).toContain('is_minor: isMinor')
  })

  it('keys the profile write on the Supabase uuid, not the Prisma cuid', () => {
    // CLAUDE.md structural fact 1. A cuid matches nothing in this table, and
    // the update would silently affect zero rows.
    expect(dobRoute).toContain(".eq('id', user.id)")
  })

  it('finally calls applyChildDefaults, which nothing called before', () => {
    expect(dobRoute).toContain('applyChildDefaults(user.id)')
  })

  it('applies the defaults only for a minor, and never loosens them back', () => {
    // A mistyped year must not be able to strip a child's privacy defaults.
    expect(dobRoute).toContain('if (isMinor) {')
    expect(code(dobRoute)).not.toMatch(/applyAdultDefaults/i)
  })

  it('never fails the correction itself on a defaults error', () => {
    const block = dobRoute.slice(dobRoute.indexOf("from('profiles')"))
    expect(block).toContain('catch')
  })
})
