import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { validateRedirect } from '@/lib/utils'

/**
 * Sign-in and sign-up disagreed on what the destination parameter is called.
 *
 * `/auth/login` reads `redirect`. `/auth/register` read `next`. Two live links
 * send people to REGISTER with `redirect`:
 *
 *   src/app/school/invite/[token]/page.tsx   a teacher accepting a school invite
 *   src/components/affiliates/AffiliatePublicPage.tsx   an affiliate applying
 *
 * Both were dropped on arrival. The page worked, the account was created, and
 * the person landed on the default destination instead of the one the link
 * asked for - back to the invite they had just accepted, or the application
 * form they were halfway through.
 *
 * Found by listing every internal link in the product that carries a query
 * string and checking whether the destination route reads that parameter at
 * all. That sweep also turned up the toolkit builders, fixed separately.
 *
 * BOTH NAMES ARE NOW ACCEPTED ON BOTH PAGES, rather than one being renamed.
 * `next` is what the middleware and the checkout flow already emit; `redirect`
 * is what login has always taken. Renaming either would fix the two links
 * found and break whichever callers were not.
 */

const ROOT = process.cwd()
const REGISTER = readFileSync(join(ROOT, 'src/app/auth/register/page.tsx'), 'utf8')
const LOGIN = readFileSync(join(ROOT, 'src/app/auth/login/page.tsx'), 'utf8')

describe('both auth pages take both names', () => {
  it('register reads next, and falls back to redirect', () => {
    expect(REGISTER).toContain("searchParams.get('next') ?? searchParams.get('redirect')")
  })

  it('login reads redirect, and falls back to next', () => {
    expect(LOGIN).toContain("searchParams.get('redirect') ?? searchParams.get('next')")
  })
})

describe('the links that were being dropped', () => {
  const CALLERS = [
    'src/app/school/invite/[token]/page.tsx',
    'src/components/affiliates/AffiliatePublicPage.tsx',
  ]

  it.each(CALLERS)('%s still sends a destination', (rel) => {
    // If a caller stops sending one, this test is guarding nothing. Better to
    // fail here than to keep asserting a fix for a link that no longer exists.
    const src = readFileSync(join(ROOT, rel), 'utf8')
    expect(src).toMatch(/auth\/register\?redirect=/)
  })
})

describe('accepting a second name did not loosen the check', () => {
  // The security half. Register sanitises inline and login uses
  // validateRedirect; both must still refuse anything that leaves the site,
  // whichever parameter carried it.

  it('register still requires a local path', () => {
    expect(REGISTER).toContain("rawNext.startsWith('/')")
    expect(REGISTER).toContain("!rawNext.startsWith('//')")
    expect(REGISTER).toContain("!rawNext.includes(':')")
  })

  it('and login still runs the shared validator', () => {
    expect(LOGIN).toContain('validateRedirect(')
  })

  it.each([
    ['//evil.example', 'protocol-relative'],
    ['https://evil.example', 'absolute'],
    ['/path\\with\\backslash', 'backslash'],
    ['/user@evil.example', 'userinfo'],
    ['/a%2f%2fevil', 'percent-encoded'],
    ['/a\nb', 'control character'],
  ])('the shared validator refuses %s (%s)', (input) => {
    expect(validateRedirect(input)).toBe('/dashboard')
  })

  it('but still allows an ordinary local path', () => {
    // The counterweight. A validator that refused everything would pass every
    // assertion above and break the flows this change exists to fix.
    expect(validateRedirect('/affiliates')).toBe('/affiliates')
    expect(validateRedirect('/school/invite/accepted')).toBe('/school/invite/accepted')
  })
})

describe('register still distinguishes having no destination from having one', () => {
  it('because the fallback differs by account type', () => {
    // validateRedirect returns '/dashboard' when it refuses, which is why it is
    // NOT used here: a parent must land on /dashboard/parent and a new student
    // on /dashboard?welcome=true, and both of those need "no destination given"
    // to stay distinguishable from "destination is /dashboard".
    expect(REGISTER).toContain('/dashboard/parent')
    expect(REGISTER).toContain('/dashboard?welcome=true')
    expect(REGISTER).toMatch(/safeNext \?\?/)
  })
})
