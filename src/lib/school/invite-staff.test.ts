/**
 * inviteStaff: the staff invitation the school portal and the operator share.
 *
 * THE GUARD (12 October 2026). The portal's lookups (getSchoolAccess,
 * getSchoolForUser, verifySchoolMember) read school_members by user_id and
 * accepted status with `.single()`. A person accepted at two schools returns
 * two rows: locked out of the portal, and every /api/school call throws. The
 * invite inserted an accepted row for any existing account without looking,
 * so inviting a teacher who already worked at another client school broke
 * both accounts. Now an email, or an account, already ACCEPTED at a different
 * school is skipped and reported, with nothing written and no email sent.
 *
 * Against FakeSupabase (./__tests__/fake-supabase.ts), which holds the live
 * school_members columns and unique keys.
 *
 * MUTATIONS RUN on 12 October 2026, each seen to fail here and then restored:
 *   - the email check disabled (`if (false && elsewhere.schoolId)`): the
 *     first test fails, the teacher is invited into a second school;
 *   - the account check disabled (`if (false && byAccount.schoolId)`): the
 *     second test fails, the account is added straight in as accepted.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { SupabaseClient } from '@supabase/supabase-js'

import { FakeSupabase } from './__tests__/fake-supabase'

vi.mock('@/lib/email', () => ({
  sendEmail: vi.fn(async () => ({ success: true, messageId: 'm-1' })),
  sendEmailBatch: vi.fn(),
}))

import { inviteStaff, INVITE_TTL_MS } from './invite-staff'
import { sendEmail } from '@/lib/email'

const HERE = '11111111-1111-4111-8111-111111111111'
const ELSEWHERE = '22222222-2222-4222-8222-222222222222'
const SCHOOL = { id: HERE, name: 'Sample Academy' }

let fake: FakeSupabase

function invite(
  email: string,
  role: 'teacher' | 'head_of_department' = 'teacher',
  fullName?: string,
) {
  return inviteStaff({
    admin: fake as unknown as SupabaseClient,
    school: SCHOOL,
    invitees: [{ email, role, fullName }],
    appUrl: 'https://theenglishhub.app',
  })
}

const membersHere = () => fake.rows('school_members').filter((m) => m.school_id === HERE)

beforeEach(() => {
  fake = new FakeSupabase()
  vi.mocked(sendEmail).mockClear()
  vi.mocked(sendEmail).mockImplementation(async () => ({ success: true, messageId: 'm-1' }))
  fake.seed('schools', [
    { id: HERE, name: 'Sample Academy' },
    { id: ELSEWHERE, name: 'Another School' },
  ])
})

describe('the cross-school guard', () => {
  it('skips an email already ACCEPTED at another school, writing nothing and sending nothing', async () => {
    fake.seed('school_members', [
      {
        school_id: ELSEWHERE,
        user_id: 'aaaaaaaa-0000-4000-8000-000000000001',
        role: 'teacher',
        email: 'moved@example.school.uk',
        invite_status: 'accepted',
      },
    ])
    const [result] = await invite('moved@example.school.uk')

    expect(result.outcome).toBe('other_school')
    expect(result.otherSchoolId).toBe(ELSEWHERE)
    expect(result.reason).toMatch(/another school/i)
    expect(membersHere()).toHaveLength(0)
    expect(sendEmail).not.toHaveBeenCalled()
  })

  it('skips someone with an account, even when the existing membership is under another email', async () => {
    // The portal's lookups key on the account id, so that is what must not
    // be accepted twice.
    const account = 'aaaaaaaa-0000-4000-8000-000000000002'
    fake.seed('profiles', [
      { id: account, email: 'new.address@example.school.uk', full_name: 'Sam Teacher' },
    ])
    fake.seed('school_members', [
      {
        school_id: ELSEWHERE,
        user_id: account,
        role: 'teacher',
        email: 'old.address@elsewhere.sch.uk',
        invite_status: 'accepted',
      },
    ])
    const [result] = await invite('new.address@example.school.uk')

    expect(result.outcome).toBe('other_school')
    expect(membersHere()).toHaveLength(0)
    expect(sendEmail).not.toHaveBeenCalled()
  })

  it('does not count a pending invitation elsewhere: that is not a membership', async () => {
    fake.seed('school_members', [
      {
        school_id: ELSEWHERE,
        role: 'teacher',
        email: 'maybe@example.school.uk',
        invite_status: 'pending',
        invite_token: 'tok-elsewhere',
      },
    ])
    const [result] = await invite('maybe@example.school.uk')
    expect(result.outcome).toBe('invited')
    expect(membersHere()).toHaveLength(1)
  })

  it('fails closed: if other schools cannot be checked, nobody is invited', async () => {
    fake.failOn('school_members', 'select', { code: '08006', message: 'connection failure' })
    const [result] = await invite('anyone@example.school.uk')
    expect(result.outcome).toBe('failed')
    expect(result.detail).toBe('connection failure')
    expect(membersHere()).toHaveLength(0)
    expect(sendEmail).not.toHaveBeenCalled()
  })
})

describe('the invitation itself, as the school route has always sent it', () => {
  it('creates a pending row with a 7-day token and emails its link', async () => {
    const before = Date.now()
    const [result] = await invite(
      'new.teacher@example.school.uk',
      'head_of_department',
      'Nia Jones',
    )

    expect(result).toMatchObject({
      outcome: 'invited',
      emailSent: true,
      role: 'head_of_department',
    })
    const [row] = membersHere()
    expect(row).toMatchObject({
      email: 'new.teacher@example.school.uk',
      role: 'head_of_department',
      invite_status: 'pending',
      user_id: null,
      full_name: 'Nia Jones',
    })
    const expires = new Date(row.invite_expires_at as string).getTime()
    expect(expires - before).toBeGreaterThanOrEqual(INVITE_TTL_MS - 1000)
    expect(expires - before).toBeLessThanOrEqual(INVITE_TTL_MS + 5000)

    const [to, subject, html] = vi.mocked(sendEmail).mock.calls[0]
    expect(to).toBe('new.teacher@example.school.uk')
    expect(subject).toContain('Sample Academy')
    expect(html).toContain(`https://theenglishhub.app/school/invite/${row.invite_token}`)
  })

  it('derives the name from the email when none is given, as before', async () => {
    await invite('j.smith@example.school.uk')
    expect(membersHere()[0].full_name).toBe('J Smith')
  })

  it('says so when the email did not go, instead of counting it as sent', async () => {
    vi.mocked(sendEmail).mockImplementation(async () => ({ success: false, error: 'Resend 429' }))
    const [result] = await invite('new.teacher@example.school.uk')
    expect(result).toMatchObject({ outcome: 'invited', emailSent: false, detail: 'Resend 429' })
    expect(membersHere()).toHaveLength(1)
  })

  it('re-issues a pending invitation here with a new token', async () => {
    fake.seed('school_members', [
      {
        school_id: HERE,
        role: 'teacher',
        email: 'slow@example.school.uk',
        invite_status: 'expired',
        invite_token: 'old-token',
      },
    ])
    const [result] = await invite('slow@example.school.uk')
    expect(result.outcome).toBe('reinvited')
    const [row] = membersHere()
    expect(row.invite_status).toBe('pending')
    expect(row.invite_token).not.toBe('old-token')
  })

  it('leaves an accepted member of this school alone', async () => {
    fake.seed('school_members', [
      {
        school_id: HERE,
        role: 'teacher',
        email: 'here@example.school.uk',
        invite_status: 'accepted',
      },
    ])
    const [result] = await invite('here@example.school.uk')
    expect(result.outcome).toBe('already_member')
    expect(sendEmail).not.toHaveBeenCalled()
  })

  it('adds an existing account straight in, keyed on its Supabase id', async () => {
    const account = 'aaaaaaaa-0000-4000-8000-000000000003'
    fake.seed('profiles', [
      { id: account, email: 'has.account@example.school.uk', full_name: 'Ana Account' },
    ])
    const [result] = await invite('has.account@example.school.uk')
    expect(result.outcome).toBe('added_existing')
    expect(membersHere()[0]).toMatchObject({
      user_id: account,
      invite_status: 'accepted',
      full_name: 'Ana Account',
    })
  })

  it('refuses a role the portal does not invite', async () => {
    const results = await inviteStaff({
      admin: fake as unknown as SupabaseClient,
      school: SCHOOL,
      invitees: [{ email: 'x@example.school.uk', role: 'admin' as unknown as 'teacher' }],
    })
    expect(results[0].outcome).toBe('failed')
    expect(membersHere()).toHaveLength(0)
  })
})
