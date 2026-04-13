import { describe, it, expect } from 'vitest'

// ---------------------------------------------------------------------------
// Unit-test the pure `isAllowlisted` logic from BoardGate.tsx.
//
// The BoardGate component itself is a client component that relies heavily on
// React hooks (usePathname, useEffect, useState) and zustand hydration, so we
// extract and mirror the pure logic here rather than trying to render it.
// ---------------------------------------------------------------------------

/** Paths where the board gate is *not* enforced (mirrors BoardGate.tsx). */
const ALLOWLISTED_PATHS = [
  '/',
  '/board-select',
  '/auth/*',
  '/pricing',
  '/about',
  '/terms',
  '/privacy',
  '/school/*',
  '/api/*',
] as const

/** Re-implementation of the isAllowlisted function from BoardGate.tsx. */
function isAllowlisted(pathname: string | null): boolean {
  if (!pathname) return true
  for (const entry of ALLOWLISTED_PATHS) {
    if (entry.endsWith('/*')) {
      const prefix = entry.slice(0, -2)
      if (pathname === prefix || pathname.startsWith(`${prefix}/`)) return true
    } else if (pathname === entry) {
      return true
    }
  }
  return false
}

describe('BoardGate — isAllowlisted logic', () => {
  // ── Null / empty ──────────────────────────────────────────────────────

  it('treats null pathname as allowlisted (pre-hydration safety)', () => {
    expect(isAllowlisted(null)).toBe(true)
  })

  // ── Exact-match paths ─────────────────────────────────────────────────

  it.each([
    '/',
    '/board-select',
    '/pricing',
    '/about',
    '/terms',
    '/privacy',
  ])('allowlists exact path "%s"', (path) => {
    expect(isAllowlisted(path)).toBe(true)
  })

  // ── Wildcard paths ────────────────────────────────────────────────────

  it.each([
    '/auth/login',
    '/auth/signup',
    '/auth/reset-password',
    '/school/dashboard',
    '/school/settings/members',
    '/api/cron/data-retention',
    '/api/mark',
  ])('allowlists wildcard-matched path "%s"', (path) => {
    expect(isAllowlisted(path)).toBe(true)
  })

  it('allowlists the wildcard prefix itself (e.g. /auth)', () => {
    expect(isAllowlisted('/auth')).toBe(true)
    expect(isAllowlisted('/school')).toBe(true)
    expect(isAllowlisted('/api')).toBe(true)
  })

  // ── Gated paths (should NOT be allowlisted) ───────────────────────────

  it.each([
    '/dashboard',
    '/analysis/macbeth',
    '/resources/revision-notes',
    '/games',
    '/settings',
    '/essay-feedback',
  ])('gates non-allowlisted path "%s"', (path) => {
    expect(isAllowlisted(path)).toBe(false)
  })

  // ── Edge cases ────────────────────────────────────────────────────────

  it('does not allowlist a path that merely starts with an exact-match entry', () => {
    // "/pricing-faq" should NOT match the exact "/pricing" entry
    expect(isAllowlisted('/pricing-faq')).toBe(false)
    expect(isAllowlisted('/aboutus')).toBe(false)
  })

  it('does not allowlist partial prefix overlaps', () => {
    // "/school-info" should NOT match "/school/*"
    expect(isAllowlisted('/school-info')).toBe(false)
  })
})

describe('BoardGate — gate condition', () => {
  /**
   * The gate shows when:
   *   !resolvedBoard && !onAllowlist && isHydrated && !dismissed
   *
   * We test the simplified condition: needsGate = !resolvedBoard && !onAllowlist
   */
  function needsGate(board: string | null, pathname: string): boolean {
    return !board && !isAllowlisted(pathname)
  }

  it('needs gate when no board is set and path is gated', () => {
    expect(needsGate(null, '/dashboard')).toBe(true)
    expect(needsGate(null, '/analysis/macbeth')).toBe(true)
  })

  it('does not gate when a board is set', () => {
    expect(needsGate('aqa', '/dashboard')).toBe(false)
    expect(needsGate('edexcel', '/analysis/macbeth')).toBe(false)
  })

  it('does not gate allowlisted paths even without a board', () => {
    expect(needsGate(null, '/')).toBe(false)
    expect(needsGate(null, '/pricing')).toBe(false)
    expect(needsGate(null, '/auth/login')).toBe(false)
  })
})
