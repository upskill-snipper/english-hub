import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { boardLandingHref } from '@/lib/board/board-landing'
import { boardSelectCardHref } from '@/lib/board/board-select-href'
import { validateRedirect } from '@/lib/utils'

/**
 * Where a newly confirmed account actually lands.
 *
 * THE DEFECT (19 September 2026). Both signup branches of the auth callback
 * redirected to /dashboard?welcome=true. /dashboard is board-gated, so the
 * middleware bounced any request with no board cookie - which every brand new
 * account is - to /board-select?next=/dashboard. /board-select never read
 * `next`, and every card linked to `/revision?setBoard=<id>`.
 *
 * So the chain was: confirm email, get sent to your dashboard, get bounced to
 * the board picker, pick a board, and arrive on the student revision hub with
 * the welcome state gone - whatever your role. A teacher who signed up because
 * of the examiner tool never saw the teacher hub on their first visit, and
 * teachers are the higher-value segment.
 *
 * Three fixes, one per surface, and this file pins each of them. Most are
 * source-level assertions because the alternative is booting Next's middleware
 * and a server component, which these tests would then be about. The picker's
 * links are the exception: a source assertion passed while the page rendered
 * the wrong href (26 September 2026), so they are checked through the function
 * that decides them.
 */

function read(rel: string): string {
  return readFileSync(join(process.cwd(), rel), 'utf8')
}

const callback = read('src/app/auth/callback/route.ts')
const middleware = read('src/middleware.ts')
const boardSelect = read('src/app/board-select/page.tsx')

// ─── 1. The callback routes by role ─────────────────────────────────────

describe('the auth callback', () => {
  it('sends a teacher to the teacher hub', () => {
    expect(callback).toContain("return '/dashboard/teacher'")
  })

  it('sends a parent to the parent hub', () => {
    expect(callback).toContain("return '/dashboard/parent'")
  })

  it('reads the role from the profile rather than guessing', () => {
    // The 18 September trigger is what makes `role` trustworthy here. Before
    // it, every profile in production read 'student' including the teachers.
    expect(callback).toMatch(/\.select\(\s*'role, exam_board'\s*\)/)
  })

  it('seeds the board cookie when the signup captured one', () => {
    // If the board is already known, the board gate never fires and the
    // detour through /board-select does not happen at all.
    expect(callback).toContain("response.cookies.set('english-hub-board'")
  })

  it('uses the same cookie attributes as every other writer', () => {
    // A cookie written with a different path or max-age is a cookie that
    // silently stops matching the one the middleware reads.
    const block = callback.slice(callback.indexOf("set('english-hub-board'"))
    expect(block).toContain("path: '/'")
    expect(block).toContain('maxAge: 60 * 60 * 24 * 365')
    expect(block).toContain("sameSite: 'lax'")
  })

  it('still honours an explicit next, which the link author asked for', () => {
    expect(callback).toContain("rawNext === '/dashboard' || !searchParams.get('next')")
  })

  it('keeps the welcome flag on whatever target it chooses', () => {
    // The flag was being dropped along with the destination.
    const matches = callback.match(/welcome=true/g) ?? []
    expect(matches.length).toBeGreaterThanOrEqual(2)
    expect(callback).toContain('${target}${separator}welcome=true')
  })

  it('never lets a profile read cost someone their sign-in', () => {
    const helper = callback.slice(callback.indexOf('const landingFor'))
    expect(helper).toContain('catch')
    expect(helper).toContain("return '/dashboard'")
  })
})

// ─── 2. The middleware stops bouncing signed-in users ───────────────────

describe('the board gate in middleware', () => {
  it('lets a signed-in visitor reach their own dashboard', () => {
    expect(middleware).toContain('dashboardForSignedIn')
    expect(middleware).toMatch(/!hasBoardCookie\s*&&\s*!dashboardForSignedIn/)
  })

  it('detects the Supabase auth cookie, including its chunked form', () => {
    // Supabase splits a large session across sb-<ref>-auth-token.0, .1, ...
    // Matching only the unchunked name would miss exactly the accounts with
    // the most claims.
    const re = /\/\^sb-\.\*-auth-token\(\\\.\\d\+\)\?\$\//
    expect(middleware).toMatch(re)
  })

  it('still gates the other board-specific trees', () => {
    // The carve-out is /dashboard only. /revision, /mock-exams and the rest
    // genuinely need a board before they can render anything.
    const gate = middleware.slice(middleware.indexOf('dashboardForSignedIn'))
    expect(gate).toContain('isBoardRequired(pathname)')
    expect(gate).toContain('isBoardAllowlisted(pathname)')
  })

  it('keeps the loop guard on /board-select itself', () => {
    expect(middleware).toContain("!pathname.startsWith('/board-select')")
  })
})

// ─── 3. /board-select honours where you were going ──────────────────────
//
// 26 September 2026. These used to pin source text: the '/revision' fallback
// and the `${destination}?setBoard=` template. The fallback was the defect - it
// overrode every card's own landing link, so a student who chose a board with
// no `next` never reached their set texts - and a source assertion cannot tell
// a rule from a mistake. They now call the function the page calls. The full
// rule is tested in src/lib/board/board-select-href.test.ts.

describe('the board picker', () => {
  it('passes the next parameter it is given to boardSelectCardHref', () => {
    expect(boardSelect).toContain('searchParams')
    expect(boardSelect).toContain('const rawNext = params.next')
  })

  it('decides every board group through that one function, not just the first', () => {
    const hits = boardSelect.match(/href: boardSelectCardHref\(b\.href, rawNext\)/g) ?? []
    expect(hits.length).toBe(4) // KS3, GCSE, IGCSE, EAL
    // And nothing else on the page rewrites a card's href.
    expect(boardSelect).not.toMatch(/`\$\{[a-zA-Z]+\}\?setBoard=/)
  })

  it('puts setBoard on the destination when there is a next', () => {
    // The middleware strips ?setBoard= and redirects to the clean URL, so the
    // parameter has to sit on the path the visitor should end up at.
    expect(boardSelectCardHref(boardLandingHref('aqa'), '/dashboard')).toBe(
      '/dashboard?setBoard=aqa',
    )
    expect(boardSelectCardHref(boardLandingHref('aqa'), '/dashboard/teacher')).toBe(
      '/dashboard/teacher?setBoard=aqa',
    )
  })

  it('sends a visitor with no next to the board they chose, not the revision hub', () => {
    // Anyone who reaches the picker by choice rather than by redirect lands
    // where every other board picker sends them.
    expect(boardSelectCardHref(boardLandingHref('aqa'), undefined)).toBe(
      '/set-texts/aqa?setBoard=aqa',
    )
    expect(boardSelectCardHref(boardLandingHref('ks3'), undefined)).toBe('/ks3?setBoard=ks3')
  })

  it('treats an unsafe next as no next, rather than falling back to /dashboard', () => {
    expect(boardSelectCardHref(boardLandingHref('aqa'), '//evil.example')).toBe(
      '/set-texts/aqa?setBoard=aqa',
    )
  })
})

// ─── The sanitiser the picker leans on ──────────────────────────────────

describe('next is sanitised before it becomes a link', () => {
  it.each([
    'https://evil.example/steal',
    '//evil.example',
    '/dashboard\\..\\..',
    '/path%2e%2e',
    'javascript:alert(1)',
    'user@evil.example',
  ])('rejects %s', (bad) => {
    expect(validateRedirect(bad)).toBe('/dashboard')
  })

  it.each(['/dashboard/teacher', '/dashboard/parent', '/marking', '/dashboard'])(
    'accepts %s',
    (good) => {
      expect(validateRedirect(good)).toBe(good)
    },
  )

  it('rejects a control character', () => {
    expect(validateRedirect('/dashboard\n/evil')).toBe('/dashboard')
  })
})
