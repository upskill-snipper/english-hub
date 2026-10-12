/**
 * A school provisioned through /api/school/register must be able to open its
 * own portal.
 *
 * Until 12 October 2026 the portal gate recognised only founder, trialing,
 * active and standard. Provisioning writes access_type 'trial' (also the
 * column default) and the CHECK constraint allows 'paid', so both fell through
 * to 'expired' and every provisioned school was locked out. Production held no
 * schools, so it was never seen. These cases pin the one shared rule that the
 * gate and pupil entitlement both use.
 */
import { describe, expect, it } from 'vitest'

import { isSchoolAccessActive, resolveSchoolAccessType } from '@/lib/school-access'

const NOW = new Date('2026-10-12T12:00:00Z')
const row = (
  access_type: string | null,
  access_until: string | null = null,
  subscription_status: string | null = null,
) => ({ access_type, access_until, subscription_status })

describe('the school access rule', () => {
  it('opens a school provisioned as a trial, the value provisioning writes', () => {
    expect(resolveSchoolAccessType(row('trial', null, 'trialing'), NOW)).toBe('trial')
    expect(isSchoolAccessActive(row('trial', null, 'trialing'), NOW)).toBe(true)
  })

  it('opens a paid pilot until its end date, then closes it', () => {
    const pilot = row('paid', '2027-02-26T23:59:59Z', 'active')
    expect(resolveSchoolAccessType(pilot, NOW)).toBe('paid')
    expect(isSchoolAccessActive(pilot, new Date('2027-02-26T23:00:00Z'))).toBe(true)
    expect(isSchoolAccessActive(pilot, new Date('2027-02-27T00:00:01Z'))).toBe(false)
  })

  it('keeps founder access open with no end date and closes it after one', () => {
    expect(resolveSchoolAccessType(row('founder'), NOW)).toBe('founder')
    // The FOUNDER promo code writes 2026-08-31, which has passed.
    expect(resolveSchoolAccessType(row('founder', '2026-08-31'), NOW)).toBe('expired')
  })

  it('honours an end date on every access type, not only founder', () => {
    expect(isSchoolAccessActive(row('trial', '2026-10-01T00:00:00Z'), NOW)).toBe(false)
    expect(isSchoolAccessActive(row(null, '2026-10-01T00:00:00Z', 'active'), NOW)).toBe(false)
  })

  it('falls back to subscription_status when access_type is empty', () => {
    expect(resolveSchoolAccessType(row(null, null, 'trialing'), NOW)).toBe('trial')
    expect(resolveSchoolAccessType(row(null, null, 'active'), NOW)).toBe('paid')
    expect(resolveSchoolAccessType(row(null, null, 'cancelled'), NOW)).toBe('expired')
  })

  it('fails closed on expired, unknown values and an end date it cannot read', () => {
    expect(isSchoolAccessActive(row('expired'), NOW)).toBe(false)
    expect(isSchoolAccessActive(row('cancelled'), NOW)).toBe(false)
    expect(isSchoolAccessActive(row('something-new'), NOW)).toBe(false)
    expect(isSchoolAccessActive(row('paid', 'not a date'), NOW)).toBe(false)
  })
})
