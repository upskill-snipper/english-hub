import { describe, it, expect } from 'vitest'
import { redactPII } from '@/lib/gtag'

describe('redactPII', () => {
  it('strips email keys', () => {
    const out = redactPII({ email: 'a@b.com', score: 5 })
    expect(out).not.toHaveProperty('email')
    expect(out).toEqual({ score: 5 })
  })

  it('strips password keys', () => {
    const out = redactPII({ password: 'hunter2', board: 'AQA' })
    expect(out).not.toHaveProperty('password')
    expect(out).toEqual({ board: 'AQA' })
  })

  it('strips token keys', () => {
    const out = redactPII({ auth_token: 'xyz', text_slug: 'macbeth' })
    expect(out).not.toHaveProperty('auth_token')
    expect(out).toEqual({ text_slug: 'macbeth' })
  })

  it('strips dob and date_of_birth keys', () => {
    const out = redactPII({ dob: '2010-01-01', date_of_birth: '2010-01-01', duration: 30 })
    expect(out).not.toHaveProperty('dob')
    expect(out).not.toHaveProperty('date_of_birth')
    expect(out).toEqual({ duration: 30 })
  })

  it('strips firstName and lastName keys', () => {
    const out = redactPII({ firstName: 'Ada', lastName: 'Lovelace', board: 'OCR' })
    expect(out).not.toHaveProperty('firstName')
    expect(out).not.toHaveProperty('lastName')
    expect(out).toEqual({ board: 'OCR' })
  })

  it('strips snake_case first_name and last_name keys', () => {
    const out = redactPII({ first_name: 'Ada', last_name: 'Lovelace', score: 8 })
    expect(out).not.toHaveProperty('first_name')
    expect(out).not.toHaveProperty('last_name')
    expect(out).toEqual({ score: 8 })
  })

  it('strips address keys', () => {
    const out = redactPII({ address: '10 Downing St', homeAddress: 'x', board: 'AQA' })
    expect(out).not.toHaveProperty('address')
    expect(out).not.toHaveProperty('homeAddress')
    expect(out).toEqual({ board: 'AQA' })
  })

  it('matches case-insensitively', () => {
    const out = redactPII({ EMAIL: 'a@b.com', Password: 'p', DOB: '2010', score: 1 })
    expect(out).toEqual({ score: 1 })
  })

  it('matches substrings (parent_email, userEmail, auth_token)', () => {
    const out = redactPII({
      parent_email: 'p@x.com',
      userEmail: 'u@x.com',
      authToken: 'abc',
      board: 'AQA',
    })
    expect(out).toEqual({ board: 'AQA' })
  })

  it('keeps allowed keys: board, text/poem slug, score, duration, user_pseudo_id', () => {
    const input = {
      board: 'AQA',
      text_slug: 'macbeth',
      poem_slug: 'ozymandias',
      score: 7,
      duration: 120,
      user_pseudo_id: 'anon-abc-123',
    }
    expect(redactPII(input)).toEqual(input)
  })

  it('returns a new object (does not mutate input)', () => {
    const input = { email: 'a@b.com', score: 5 }
    const out = redactPII(input)
    expect(input).toHaveProperty('email')
    expect(out).not.toBe(input)
  })

  it('handles undefined payload', () => {
    expect(redactPII(undefined)).toBeUndefined()
  })

  it('handles empty object', () => {
    expect(redactPII({})).toEqual({})
  })
})
