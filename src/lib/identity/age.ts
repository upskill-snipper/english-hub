import { findExistingUser } from './lookup'
import { readIdentityProfile } from './profiles'

/**
 * The age signal every gate in the product must use.
 *
 * WHY A BAND AND NOT A BOOLEAN
 *
 * `User.isMinor` is a single boolean that three different code paths write
 * with three different meanings (under 18 at /api/auth/register, under 16 at
 * /api/profile/dob, under 16 in the 2026-04-20 backfill script). Worse, a
 * `false` in that column - or in `profiles.is_minor`, which is NOT NULL
 * DEFAULT false and whose only writer, applyChildDefaults(), writes `true`
 * and never `false` - carries no information at all. Treating it as "adult"
 * is how a 14 year-old with no recorded date of birth was waved through the
 * parental gate.
 *
 * So:
 *   UNDER_16            we know the age and it is under 16 -> guardian consent
 *   SIXTEEN_OR_OVER     we know the age and it is 16 or over -> self consent
 *   UNDER_18_IMPRECISE  we know they are a child but not whether 13-15 or
 *                       16-17 -> fail closed, guardian consent
 *   UNKNOWN             we do not hold a date of birth. NOT an adult. The
 *                       gate blocks and asks for the date of birth.
 *
 * 16 is the parental-consent threshold because that is what the published
 * privacy policy says ("users aged 13-15 require" parental consent), what
 * the signup form collects a guardian email for, and what UK GDPR supports
 * (the digital consent age is 13, so a 16-17 year-old consents for
 * themselves). Under-18 status still drives the Children's Code design
 * protections; that is `isMinor` and a separate concern.
 */
export type AgeBand = 'UNDER_16' | 'SIXTEEN_OR_OVER' | 'UNDER_18_IMPRECISE' | 'UNKNOWN'

/** Guardian consent is required below this age. See the note above. */
export const PARENTAL_CONSENT_AGE = 16

/** Children's Code "child" threshold. This is what `User.isMinor` means. */
export const MINOR_AGE = 18

/**
 * The invented date of birth written by scripts/backfill-prisma-users.mjs on
 * 2026-04-20 for every account whose `user_metadata` held no date (the script
 * never looked at `profiles.date_of_birth`, where the real value lives). It
 * computes to an adult age, so it silently opened the parental gate.
 *
 * It is a placeholder, not a fact, so this module refuses to read an age from
 * it: such a row resolves to UNKNOWN and the learner is asked to confirm.
 * A genuine 2000-01-01 learner re-confirms once through the existing date of
 * birth form, which is a no-op update.
 */
export const PLACEHOLDER_DOB_ISO = '2000-01-01'

/** Parses a YYYY-MM-DD string, returning null for anything unusable. */
export function parseDob(value: string | null | undefined): Date | null {
  if (!value) return null
  const iso = value.slice(0, 10)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null
  const dob = new Date(`${iso}T00:00:00Z`)
  if (Number.isNaN(dob.getTime())) return null
  return dob
}

/** True when the date is the 2026-04-20 backfill placeholder. */
export function isPlaceholderDob(dob: Date | null | undefined): boolean {
  if (!dob) return false
  return dob.toISOString().slice(0, 10) === PLACEHOLDER_DOB_ISO
}

/** Whole years between the date of birth and now, UTC. */
export function ageFromDob(dob: Date, now: Date = new Date()): number {
  let age = now.getUTCFullYear() - dob.getUTCFullYear()
  const monthDiff = now.getUTCMonth() - dob.getUTCMonth()
  if (monthDiff < 0 || (monthDiff === 0 && now.getUTCDate() < dob.getUTCDate())) {
    age--
  }
  return age
}

/**
 * The single definition of `User.isMinor`: under 18 at the time of the check,
 * matching the schema comment and /api/auth/register. Never call this with a
 * guessed date - when the date of birth is unknown the projection writes the
 * protective `true`, it does not compute one.
 */
export function isMinorFromDob(dob: Date, now: Date = new Date()): boolean {
  return ageFromDob(dob, now) < MINOR_AGE
}

/** Band for an age we actually know. */
export function bandFromDob(dob: Date, now: Date = new Date()): AgeBand {
  return ageFromDob(dob, now) < PARENTAL_CONSENT_AGE ? 'UNDER_16' : 'SIXTEEN_OR_OVER'
}

/** True for the two bands that require a parent or guardian's permission. */
export function requiresGuardianConsent(band: AgeBand): boolean {
  return band === 'UNDER_16' || band === 'UNDER_18_IMPRECISE'
}

/**
 * Resolves the age band for a Supabase auth user, most factual source first:
 *
 *   1. `profiles.date_of_birth`        exact, and the value the learner gave
 *   2. `User.dateOfBirth`              exact, unless it is the placeholder
 *   3. `profiles.is_minor === true`    a child, precision unknown
 *   4. anything else                   UNKNOWN
 *
 * Step 4 deliberately covers `profiles.is_minor === false` and "no profiles
 * row at all". Neither is evidence of adulthood.
 *
 * Never throws: a database or network failure resolves to UNKNOWN, which
 * blocks rather than opens the gate.
 */
export async function resolveAgeBand(
  supabaseUserId: string,
  now: Date = new Date(),
): Promise<AgeBand> {
  const profile = await readIdentityProfile(supabaseUserId)

  const profileDob = parseDob(profile?.date_of_birth)
  if (profileDob && !isPlaceholderDob(profileDob)) {
    return bandFromDob(profileDob, now)
  }

  try {
    const row = await findExistingUser(supabaseUserId)
    if (row?.dateOfBirth && !isPlaceholderDob(row.dateOfBirth)) {
      return bandFromDob(row.dateOfBirth, now)
    }
  } catch {
    // Fall through. A failed read is not a fact about anyone's age.
  }

  if (profile?.is_minor === true) return 'UNDER_18_IMPRECISE'

  return 'UNKNOWN'
}
