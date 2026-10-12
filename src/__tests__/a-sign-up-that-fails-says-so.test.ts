import { describe, expect, it, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { signUpErrorMessageKey } from '@/lib/auth/signup-errors'
import { examBoardLabelForBoardId, examBoardLabelForPrismaBoard } from '@/lib/auth/signup-metadata'
import { BOARDS } from '@/lib/board/board-config'
import { allDictionaryKeys, lookup } from '@/lib/i18n/dictionary'

/**
 * The sign-up forms tell people the truth about what just happened.
 *
 * DEFECTS (12 October 2026, from a read-only trace of every sign-up journey):
 *
 *   1. Every refused sign-up showed "we have sent a verification link". A
 *      rejected password, an email rate limit, a mistyped address or an
 *      outage all sent people to wait for an email that was never coming, and
 *      since no account exists afterwards they appeared in no count.
 *   2. The "check your inbox" card said "Your free trial is ready" and "you
 *      can keep exploring while you wait. The link will let you log back in
 *      next time", before any session or trial existed.
 *   3. Both forms sent exam-board values the sign-up trigger does not accept,
 *      so it stored them as 'Other'.
 *   4. The register page's Google and Apple buttons were hard-coded to
 *      /dashboard, losing the destination and the account type.
 *   5. The age check allowed 10 calls per IP in 15 minutes, so the eleventh
 *      pupil in a class sharing the school's IP was refused.
 *
 * MUTATIONS RUN, each verified to have altered the file first: returning the
 * neutral key for every code fails the first two cases; dropping the Edexcel
 * mapping fails the board case; restoring limit: 10 fails the
 * classroom case.
 */

const TRIGGER_LABELS = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'Other']

describe('a refused sign-up', () => {
  it('keeps the neutral wording only for an address that already has an account', () => {
    expect(signUpErrorMessageKey({ code: 'user_already_exists' })).toBe(
      'auth.register.neutral_signup_response',
    )
    expect(signUpErrorMessageKey({ code: 'email_exists' })).toBe(
      'auth.register.neutral_signup_response',
    )
    for (const err of [
      { code: 'weak_password' },
      { code: 'over_email_send_rate_limit', status: 429 },
      { code: 'email_address_invalid' },
      { code: 'unexpected_failure', status: 500 },
      { status: 0, message: 'Failed to fetch' },
    ]) {
      expect(signUpErrorMessageKey(err)).not.toBe('auth.register.neutral_signup_response')
    }
  })

  it('names the actual problem', () => {
    expect(signUpErrorMessageKey({ code: 'weak_password' })).toBe(
      'auth.register.error.weak_password',
    )
    expect(signUpErrorMessageKey({ code: 'over_request_rate_limit' })).toBe(
      'auth.register.error.rate_limited',
    )
    expect(signUpErrorMessageKey({ status: 429 })).toBe('auth.register.error.rate_limited')
    expect(
      signUpErrorMessageKey({
        code: 'validation_failed',
        message: 'Unable to validate email address: invalid format',
      }),
    ).toBe('auth.register.error.invalid_email')
    expect(signUpErrorMessageKey({ code: 'validation_failed', message: 'something else' })).toBe(
      'auth.register.error.unavailable',
    )
  })

  it('has every message in English, Arabic and Spanish', () => {
    const keys = new Set(allDictionaryKeys())
    for (const key of [
      'auth.register.error.weak_password',
      'auth.register.error.rate_limited',
      'auth.register.error.invalid_email',
      'auth.register.error.unavailable',
      'auth.register.card_existing_account',
      'auth.register.card_guardian_after_confirm',
    ]) {
      expect(keys.has(key), key).toBe(true)
      for (const locale of ['en', 'ar', 'es'] as const) {
        expect(lookup(key, locale), `${key} ${locale}`).not.toBe(key)
      }
    }
  })
})

describe('the check-your-inbox card', () => {
  it('no longer claims a trial or a session that do not exist yet', () => {
    expect(lookup('auth.register.trial_ready_lead', 'en')).not.toMatch(/is ready/i)
    expect(lookup('auth.register.welcome_suffix', 'en')).not.toMatch(/keep exploring|log back in/i)
  })
})

describe('the exam board a sign-up records', () => {
  it('maps every site board id to a label the trigger keeps', () => {
    for (const board of BOARDS) {
      expect(TRIGGER_LABELS).toContain(examBoardLabelForBoardId(board.id))
    }
    expect(examBoardLabelForBoardId('aqa')).toBe('AQA')
    expect(examBoardLabelForBoardId('edexcel-igcse')).toBe('Edexcel')
    expect(examBoardLabelForBoardId('eduqas')).toBe('WJEC')
  })

  it("maps the teacher form's enum values the same way", () => {
    expect(examBoardLabelForPrismaBoard('EDEXCEL')).toBe('Edexcel')
    expect(examBoardLabelForPrismaBoard('EDEXCEL_IGCSE')).toBe('Edexcel')
    expect(examBoardLabelForPrismaBoard('CAMBRIDGE_0500')).toBe('Other')
    expect(examBoardLabelForPrismaBoard('')).toBeNull()
  })
})

describe('the register page', () => {
  const page = readFileSync(join(process.cwd(), 'src/app/auth/register/page.tsx'), 'utf8')

  it('sends Google and Apple sign-ups where they were going, not always to /dashboard', () => {
    expect(page).not.toMatch(/SignInButton redirectTo="\/dashboard"/)
    expect(page).toMatch(/GoogleSignInButton redirectTo=\{oauthNext\}/)
    expect(page).toMatch(/AppleSignInButton redirectTo=\{oauthNext\}/)
  })
})

describe('the age check', () => {
  it('lets a class sharing one school IP sign up together', async () => {
    const seen: Array<{ limit: number; windowSeconds: number }> = []
    vi.doMock('@/lib/rate-limit', () => ({
      rateLimit: async (_key: string, opts: { limit: number; windowSeconds: number }) => {
        seen.push(opts)
        return { success: true }
      },
      getClientIp: () => '198.51.100.20',
    }))
    const { POST } = await import('@/app/api/auth/validate-age/route')
    const { NextRequest } = await import('next/server')
    await POST(
      new NextRequest('https://theenglishhub.app/api/auth/validate-age', {
        method: 'POST',
        body: JSON.stringify({ dobDay: 1, dobMonth: 1, dobYear: 2010 }),
      }),
    )
    expect(seen).toHaveLength(1)
    // Thirty pupils in fifteen minutes is an ordinary lesson.
    expect(seen[0].limit / (seen[0].windowSeconds / 60)).toBeGreaterThanOrEqual(30 / 15)
    vi.doUnmock('@/lib/rate-limit')
  })
})
