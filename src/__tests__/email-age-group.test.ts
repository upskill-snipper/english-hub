import { describe, it, expect } from 'vitest'
import { emailAgeGroup, isAdultForEmail, PLACEHOLDER_DOB_ISO } from '@/lib/identity'
import { ROLE_ALONE_COUNTS_AS_ADULT } from '@/lib/identity/age'

/**
 * Who a lifecycle email may be written for (23 October 2026).
 *
 * A price, a plan link, a nudge or marketing may go to an adult only; a child
 * gets service copy. The senders before this read age two different wrong ways:
 * the trial-ending cron sent everything when no date of birth was held, and the
 * weekly digest read the 2000-01-01 backfill placeholder as a 26 year-old. These
 * cases pin the rule that replaces both: a real date decides (the younger of
 * two), a child flag makes a child, a role alone is not an age, and what
 * cannot be established is a child.
 */

const NOW = new Date('2026-10-23T09:00:00.000Z')

describe('emailAgeGroup', () => {
  it('reads a real date of birth from profiles first', () => {
    expect(emailAgeGroup({ profileDob: '2000-06-01' }, NOW)).toBe('ADULT')
    expect(emailAgeGroup({ profileDob: '2009-06-01' }, NOW)).toBe('MINOR_16_17')
    expect(emailAgeGroup({ profileDob: '2012-06-01' }, NOW)).toBe('MINOR_UNDER_16')
    expect(emailAgeGroup({ profileDob: '2015-06-01' }, NOW)).toBe('UNDER_13')
  })

  it('counts the eighteenth birthday exactly', () => {
    expect(emailAgeGroup({ profileDob: '2008-10-23' }, NOW)).toBe('ADULT')
    expect(emailAgeGroup({ profileDob: '2008-10-24' }, NOW)).toBe('MINOR_16_17')
  })

  it('treats unknown age as a child, never as an adult', () => {
    const group = emailAgeGroup({}, NOW)
    expect(group).toBe('UNKNOWN')
    expect(isAdultForEmail(group)).toBe(false)
  })

  it('never reads an age from the 2000-01-01 backfill placeholder', () => {
    const placeholder = new Date(`${PLACEHOLDER_DOB_ISO}T00:00:00Z`)
    expect(emailAgeGroup({ prismaDob: placeholder }, NOW)).toBe('UNKNOWN')
    expect(emailAgeGroup({ profileDob: PLACEHOLDER_DOB_ISO }, NOW)).toBe('UNKNOWN')
    expect(isAdultForEmail(emailAgeGroup({ prismaDob: placeholder }, NOW))).toBe(false)
  })

  it('falls back to a real Prisma date when the profile holds none', () => {
    expect(emailAgeGroup({ prismaDob: new Date('2011-01-01T00:00:00Z') }, NOW)).toBe(
      'MINOR_UNDER_16',
    )
  })

  it('makes a child of a child flag with no date, whatever the role', () => {
    expect(emailAgeGroup({ profileIsMinor: true, roles: ['teacher'] }, NOW)).toBe('MINOR_UNDER_16')
    expect(emailAgeGroup({ prismaIsMinor: true }, NOW)).toBe('MINOR_UNDER_16')
  })

  it('ignores a false child flag: it carries no information', () => {
    expect(emailAgeGroup({ profileIsMinor: false, prismaIsMinor: false }, NOW)).toBe('UNKNOWN')
  })

  // 24 October 2026. Registration asks a teacher for no date of birth, so a
  // 14-year-old who picked "Teacher" read as an adult and could be sent the
  // price. Until the founder decides document 08's A1 rule should hold, a
  // role with no real date is UNKNOWN, as in the welcome-back script.
  it('does not make an adult of a teacher or parent role alone', () => {
    expect(ROLE_ALONE_COUNTS_AS_ADULT).toBe(false)
    expect(emailAgeGroup({ roles: ['teacher'] }, NOW)).toBe('UNKNOWN')
    expect(emailAgeGroup({ roles: [null, 'PARENT'] }, NOW)).toBe('UNKNOWN')
    expect(emailAgeGroup({ roles: ['student'] }, NOW)).toBe('UNKNOWN')
    expect(isAdultForEmail(emailAgeGroup({ roles: ['teacher'] }, NOW))).toBe(false)
  })

  it('makes an adult of a teacher whose real date of birth says so', () => {
    expect(emailAgeGroup({ profileDob: '1985-03-03', roles: ['teacher'] }, NOW)).toBe('ADULT')
  })

  it('lets a real date overrule the role, failing closed', () => {
    expect(emailAgeGroup({ profileDob: '2012-01-01', roles: ['teacher'] }, NOW)).toBe(
      'MINOR_UNDER_16',
    )
  })

  // 24 October 2026. The profile's date used to win outright, so a profile
  // saying 1990 beside a Prisma date of 2011 read as an adult.
  it('takes the younger of two real dates that disagree, whichever store holds it', () => {
    const child = new Date('2011-05-01T00:00:00Z')
    expect(emailAgeGroup({ profileDob: '1990-05-01', prismaDob: child }, NOW)).toBe(
      'MINOR_UNDER_16',
    )
    expect(
      emailAgeGroup({ profileDob: '2011-05-01', prismaDob: new Date('1990-05-01T00:00:00Z') }, NOW),
    ).toBe('MINOR_UNDER_16')
    // The placeholder is still not a date, so it cannot outvote a real one.
    expect(
      emailAgeGroup(
        { profileDob: '1990-05-01', prismaDob: new Date(`${PLACEHOLDER_DOB_ISO}T00:00:00Z`) },
        NOW,
      ),
    ).toBe('ADULT')
  })
})
