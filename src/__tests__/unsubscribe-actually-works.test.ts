import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import {
  createUnsubscribeToken,
  verifyUnsubscribeToken,
  UNSUBSCRIBE_TOKEN_TTL_MS,
} from '@/lib/email/unsubscribe-token'
import { isCsrfExempt } from '@/lib/security/csrf-origin'

/**
 * The unsubscribe link went nowhere (RET-7).
 *
 * THE DEFECT (19 September 2026). Four email templates built links to
 * `/unsubscribe?token=...`. No such route existed anywhere in `src/app`. The
 * one lifecycle cron that is actually switched on pointed its "unsubscribe" at
 * `/dashboard/settings`, whose communication tab has no toggle and instead
 * links to the consent centre - a third store that no sending code reads.
 *
 * So a recipient who wanted to stop hearing from us had, in practice, no way
 * to, and a user who withdrew marketing consent in the place the product told
 * them to go kept receiving marketing email, correctly, forever. For a product
 * that emails children and their parents that is a PECR reg. 22 problem.
 *
 * THE TWO ASSERTIONS THAT MATTER MOST ARE NOT THE OBVIOUS ONES:
 *
 *   - The CSRF exemption. Gmail and Apple Mail issue the RFC 8058 one-click
 *     POST server-to-server with no `Origin` header, and the same-origin gate
 *     refuses those by design. Without the exemption the header would be
 *     advertised on every email and then 403'd before the handler ran - the
 *     dead unsubscribe link again, wearing a new costume and harder to see.
 *
 *   - Write-on-POST, not on GET. Mail-security scanners fetch every URL in a
 *     delivered message, so unsubscribing on page load would opt out people
 *     who never clicked and never tell them.
 */

const ORIGINAL_SECRET = process.env.CRON_SECRET

beforeEach(() => {
  vi.stubEnv('CRON_SECRET', 'test-cron-secret-value')
})

afterEach(() => {
  vi.unstubAllEnvs()
  if (ORIGINAL_SECRET === undefined) delete process.env.CRON_SECRET
})

const NOW = 1_758_000_000_000
const UID = '11111111-2222-3333-4444-555555555555'

// ─── The token ──────────────────────────────────────────────────────────────

describe('the unsubscribe token', () => {
  it('round-trips the user it acts on', () => {
    const token = createUnsubscribeToken(UID, NOW)!
    expect(token).toBeTruthy()
    const result = verifyUnsubscribeToken(token, NOW + 1000)
    expect(result).toEqual({ valid: true, supabaseUserId: UID })
  })

  it('rejects a forged signature', () => {
    const token = createUnsubscribeToken(UID, NOW)!
    const [body] = token.split('.')
    const forged = `${body}.${Buffer.from('nonsense').toString('base64url')}`
    expect(verifyUnsubscribeToken(forged, NOW).valid).toBe(false)
  })

  it('rejects a token whose payload was edited to name someone else', () => {
    // The whole point of signing it. Without this an unsubscribe link is an
    // "unsubscribe anybody you like" link.
    const token = createUnsubscribeToken(UID, NOW)!
    const sig = token.split('.')[1]
    const swapped = Buffer.from(JSON.stringify({ uid: 'someone-elses-uuid', iat: NOW })).toString(
      'base64url',
    )
    expect(verifyUnsubscribeToken(`${swapped}.${sig}`, NOW).valid).toBe(false)
  })

  it.each([[''], ['garbage'], ['a.b.c'], ['....'], ['%%%.%%%']])(
    'rejects the malformed token %s without throwing',
    (bad) => {
      expect(() => verifyUnsubscribeToken(bad, NOW)).not.toThrow()
      expect(verifyUnsubscribeToken(bad, NOW).valid).toBe(false)
    },
  )

  it('expires, but not before mail is realistically read', () => {
    const token = createUnsubscribeToken(UID, NOW)!
    expect(verifyUnsubscribeToken(token, NOW + UNSUBSCRIBE_TOKEN_TTL_MS - 1000).valid).toBe(true)
    expect(verifyUnsubscribeToken(token, NOW + UNSUBSCRIBE_TOKEN_TTL_MS + 1000).valid).toBe(false)
    // A month must not be enough to break a link in a newsletter.
    expect(UNSUBSCRIBE_TOKEN_TTL_MS).toBeGreaterThan(90 * 24 * 60 * 60 * 1000)
  })

  it('mints nothing when there is no signing key', () => {
    vi.stubEnv('CRON_SECRET', '')
    expect(createUnsubscribeToken(UID, NOW)).toBeNull()
  })

  it('mints nothing for an account with no Supabase id', () => {
    // supabaseUserId is nullable in the schema. A token signed over an empty
    // subject would unsubscribe "" and report success.
    expect(createUnsubscribeToken('', NOW)).toBeNull()
  })
})

// ─── The route that must not be blocked by the CSRF gate ────────────────────

describe('RFC 8058 one-click delivery', () => {
  it('is exempt from the same-origin gate', () => {
    // Gmail POSTs here server-to-server with no Origin. Without this the
    // List-Unsubscribe-Post header is advertised and then 403'd.
    expect(isCsrfExempt('/api/unsubscribe')).toBe(true)
  })

  it('has not exempted anything else by accident', () => {
    // The exemption list is the one place where a typo silently removes CSRF
    // protection from a cookie-authenticated route.
    for (const path of [
      '/api/profile/dob',
      '/api/submissions',
      '/api/privacy/settings',
      '/api/unsubscribe-everything',
    ]) {
      expect(isCsrfExempt(path), `${path} must stay gated`).toBe(false)
    }
  })
})

// ─── The surfaces, asserted structurally ────────────────────────────────────

function code(rel: string): string {
  return readFileSync(join(process.cwd(), rel), 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .split(/\r?\n/)
    .map((l) => l.replace(/\/\/.*$/, ''))
    .join('\n')
}

describe('the route that four templates have linked to for months', () => {
  it('exists at all', () => {
    expect(existsSync(join(process.cwd(), 'src/app/unsubscribe/page.tsx'))).toBe(true)
    expect(existsSync(join(process.cwd(), 'src/app/api/unsubscribe/route.ts'))).toBe(true)
  })

  it('writes on POST, never on GET', () => {
    // Outlook Safe Links and Proofpoint fetch every URL in delivered mail. A
    // write on GET would record the scanning habits of mail providers rather
    // than the choices of readers.
    const api = code('src/app/api/unsubscribe/route.ts')
    expect(api).toContain('export async function POST')
    expect(api).not.toContain('export async function GET')

    const page = code('src/app/unsubscribe/page.tsx')
    expect(page).not.toContain('optOutOfMarketing')
  })

  it('refuses to report success when no store was written', () => {
    // The dominant failure pattern in this codebase is reporting success for
    // work that did not happen. On an opt-out, that is the one place a
    // regulator would look.
    expect(code('src/app/api/unsubscribe/route.ts')).toMatch(/if \(!outcome\.changed\)/)
  })
})

describe('the live weekly student digest', () => {
  const cron = code('src/app/api/cron/weekly-student-reports/route.ts')

  it('no longer points unsubscribe at a page with no toggle', () => {
    expect(cron).not.toContain('/dashboard/settings`')
    expect(cron).toContain('/unsubscribe?token=')
  })

  it('selects the id it needs to sign a token', () => {
    // Without this in the Prisma select the token silently mints null for
    // every recipient and every link falls back to the tokenless page.
    expect(cron).toMatch(/supabaseUserId: true/)
  })

  it('sends the one-click headers', () => {
    expect(cron).toContain("'List-Unsubscribe'")
    expect(cron).toContain("'List-Unsubscribe-Post'")
  })
})

describe('the transport', () => {
  it('can carry custom headers at all', () => {
    // sendViaResend previously dropped anything it was not told about, so the
    // headers above would have been silently discarded at the boundary.
    const resend = code('src/lib/email/resend.ts')
    expect(resend).toMatch(/headers\?: Record<string, string>/)
    expect(resend).toMatch(/opts\.headers/)
  })
})

// ─── The trap the plan walked into, recorded so nobody repeats it ───────────

describe('the source of truth', () => {
  it('still reads the legacy store, which is the only populated one', () => {
    // profiles.marketing_opt_in is NOT NULL DEFAULT FALSE, the signup trigger
    // writes a hardcoded FALSE, nothing in the product ever writes true, and
    // there has been no backfill - so it is FALSE on 100% of rows. Making it
    // the single source of truth would have taken the one lifecycle cron that
    // is switched on to a ZERO-SEND audience, and thrown away the consent of
    // everyone who opted in through the privacy centre.
    const pref = code('src/lib/email/marketing-preference.ts')
    expect(pref).toContain('marketingEnabled')
    expect(pref).toContain('marketing_opt_in')
  })

  it('writes the opt-out to BOTH stores', () => {
    // An opt-out that only updated the unread store would be the original
    // defect with extra steps.
    const pref = code('src/lib/email/marketing-preference.ts')
    const optOut = pref.slice(pref.indexOf('export async function optOutOfMarketing'))
    expect(optOut).toContain("from('profiles')")
    expect(optOut).toContain('privacySettings.upsert')
  })

  it('never turns marketing back ON from a link', () => {
    // Many of these accounts belong to children. A token that could subscribe
    // somebody is a different and much worse object than one that can only
    // silence email.
    //
    // Asserted against the WRITE path only: `marketingEnabled: true` also
    // appears as a Prisma select projection in the read path, so a whole-file
    // scan would match the module reading a value it never sets.
    const pref = code('src/lib/email/marketing-preference.ts')
    const writePath = pref.slice(pref.indexOf('export async function optOutOfMarketing'))
    expect(writePath).not.toMatch(/marketingEnabled:\s*true/)
    expect(writePath).not.toMatch(/marketing_opt_in:\s*true/)
    expect(writePath).toMatch(/marketingEnabled:\s*false/)
    expect(writePath).toMatch(/marketing_opt_in:\s*false/)
    // And there is no opt-IN export for a token to reach.
    expect(pref).not.toMatch(/export\s+(async\s+)?function\s+optInToMarketing/)
  })
})
