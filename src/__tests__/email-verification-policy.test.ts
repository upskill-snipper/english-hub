import { describe, it, expect } from 'vitest'
import {
  PolicyError,
  assertEmailVerifiedFor,
  emailVerificationRequiredResponse,
  requiresVerifiedEmail,
} from '@/lib/auth/email-verification-policy'

describe('requiresVerifiedEmail', () => {
  it('returns true for stripe_checkout', () => {
    expect(requiresVerifiedEmail('stripe_checkout')).toBe(true)
  })

  it('returns true for change_email and delete_account', () => {
    expect(requiresVerifiedEmail('change_email')).toBe(true)
    expect(requiresVerifiedEmail('delete_account')).toBe(true)
  })

  it('returns false for invite_collaborator', () => {
    expect(requiresVerifiedEmail('invite_collaborator')).toBe(false)
  })

  it('returns false for send_school_invite', () => {
    expect(requiresVerifiedEmail('send_school_invite')).toBe(false)
  })
})

describe('assertEmailVerifiedFor', () => {
  it('throws PolicyError when stripe_checkout user has no email_confirmed_at', () => {
    expect(() => assertEmailVerifiedFor('stripe_checkout', { email_confirmed_at: null })).toThrow(
      PolicyError,
    )
  })

  it('throws PolicyError when stripe_checkout user is null', () => {
    expect(() => assertEmailVerifiedFor('stripe_checkout', null)).toThrow(PolicyError)
  })

  it('throws PolicyError when email_confirmed_at is undefined', () => {
    expect(() => assertEmailVerifiedFor('stripe_checkout', {})).toThrow(PolicyError)
  })

  it('does not throw when stripe_checkout user has a confirmation timestamp', () => {
    expect(() =>
      assertEmailVerifiedFor('stripe_checkout', {
        email_confirmed_at: '2026-04-28T00:00:00Z',
      }),
    ).not.toThrow()
  })

  it('does not throw for invite_collaborator even when unverified', () => {
    expect(() =>
      assertEmailVerifiedFor('invite_collaborator', { email_confirmed_at: null }),
    ).not.toThrow()
  })

  it('does not throw for send_school_invite when user is null', () => {
    expect(() => assertEmailVerifiedFor('send_school_invite', null)).not.toThrow()
  })

  it('attaches code and action to the thrown error', () => {
    try {
      assertEmailVerifiedFor('change_email', { email_confirmed_at: null })
      expect.unreachable('expected PolicyError')
    } catch (err) {
      expect(err).toBeInstanceOf(PolicyError)
      const policyErr = err as PolicyError
      expect(policyErr.code).toBe('email-not-verified')
      expect(policyErr.action).toBe('change_email')
    }
  })
})

describe('emailVerificationRequiredResponse', () => {
  it('returns the stable 403 body shape', () => {
    const body = emailVerificationRequiredResponse('stripe_checkout')
    expect(body.error).toBe('email_verification_required')
    expect(body.action).toBe('stripe_checkout')
    expect(body.resolveUrl).toBe('/auth/resend-verification')
    expect(typeof body.message).toBe('string')
    expect(body.message.length).toBeGreaterThan(0)
  })

  it('echoes the action verbatim for client-side discrimination', () => {
    expect(emailVerificationRequiredResponse('delete_account').action).toBe('delete_account')
    expect(emailVerificationRequiredResponse('change_email').action).toBe('change_email')
  })
})
