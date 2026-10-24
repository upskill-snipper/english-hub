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

// ─── Who an email may be written for ────────────────────────────────────────
//
// ADDED 23 October 2026 for the trial lifecycle emails. Those emails need a
// different question answered from the consent gate's: not "who consents to AI
// feedback" (16) but "who is an adult" (18), because a price, a plan link or a
// nudge may go only to an adult, and a child gets the service copy alone.
//
// The two senders that existed before this disagreed with the consent gate in
// exactly the way the band above was written to stop. The trial-ending cron
// treated a missing date of birth as "not under 13" and sent everything, and
// weekly-student-reports computed an age straight from `User.dateOfBirth`, so
// the 2000-01-01 backfill placeholder read as a 26 year-old. So this reads the
// same sources as resolveAgeBand, refuses the placeholder the same way, takes
// the younger of two real dates that disagree, and treats what it cannot
// establish as a child.
//
// A ROLE ALONE IS NOT AN AGE (changed 24 October 2026). Document 08's A1 rule
// counts `profiles.role` teacher or parent as adult, and the first version did
// the same. But registration sends no date of birth for a teacher and checks
// no age (src/app/auth/register/page.tsx), and accounts made before
// 18 September 2026 stored no date for anyone, so a 14-year-old who picked
// "Teacher" read as an adult here and could be sent the price, the plan link,
// the day-3 nudge and, with marketing switched on, the day-14 and day-30
// emails. A role with no real date of birth now reads UNKNOWN, a child for
// every email purpose, as the welcome-back script also decided. Whether the
// role should count is the founder's decision (raised beside document 08's
// question 4); ROLE_ALONE_COUNTS_AS_ADULT is the one line that applies A1 as
// written once he says so.

/**
 * The age group an email is written for.
 *
 *   ADULT           a real date of birth 18 or over (or, only while
 *                   ROLE_ALONE_COUNTS_AS_ADULT is true, a teacher or parent
 *                   account with nothing on file saying otherwise)
 *   MINOR_16_17     a real date of birth, 16 or 17: consents for themselves
 *   MINOR_UNDER_16  a real date of birth under 16, or a child flag with no
 *                   date: a parent's or school's approval is needed for AI
 *   UNDER_13        a real date of birth under 13. Registration refuses these,
 *                   so it is bad data, and nothing is emailed to it
 *   UNKNOWN         nothing held. A child for every email purpose
 */
export type EmailAgeGroup = 'ADULT' | 'MINOR_16_17' | 'MINOR_UNDER_16' | 'UNDER_13' | 'UNKNOWN'

/** The facts the email age group is read from. Every field may be missing. */
export interface EmailAgeFacts {
  /** `profiles.date_of_birth`, as stored (YYYY-MM-DD). */
  profileDob?: string | null
  /** Prisma `User.dateOfBirth`. The 2000-01-01 placeholder is ignored. */
  prismaDob?: Date | null
  /** `profiles.is_minor`. Only `true` carries information. */
  profileIsMinor?: boolean | null
  /** Prisma `User.isMinor`. Only `true` carries information. */
  prismaIsMinor?: boolean | null
  /** `profiles.role` and Prisma `User.role`, in any case. */
  roles?: ReadonlyArray<string | null | undefined>
}

/** Below this age an account is bad data: registration enforces 13 and over. */
export const MIN_ACCOUNT_AGE = 13

const ADULT_ROLES = new Set(['teacher', 'parent'])

/**
 * Document 08's A1 reading of a teacher or parent role with no date of birth
 * as an adult. False until the founder decides it should hold: see the note
 * above. A child flag or a real date of birth outranks the role either way.
 */
export const ROLE_ALONE_COUNTS_AS_ADULT = false

/**
 * The email age group, from facts already read. Pure, so a cron can batch the
 * reads and a test can state the rule.
 *
 * Order, most factual first, and fail closed throughout:
 *   1. a real date of birth decides, whatever the role says; when the
 *      profile and the Prisma row hold two different real dates, the
 *      younger one decides;
 *   2. a child flag with no date makes a child;
 *   3. a teacher or parent role makes an adult only while
 *      ROLE_ALONE_COUNTS_AS_ADULT is true (it is not);
 *   4. anything else is UNKNOWN, which every caller treats as a child.
 *
 * The younger date (changed 24 October 2026). The first version took the
 * profile's date whenever it had one, so a profile saying 1990 beside a
 * Prisma date of 2011 read as an adult and got the price. Two real dates that
 * disagree are a fact we cannot settle, and the email that is safe for both is
 * the one for the younger person. The welcome-back script takes the younger
 * date for the same reason.
 */
export function emailAgeGroup(facts: EmailAgeFacts, now: Date = new Date()): EmailAgeGroup {
  const profileDob = parseDob(facts.profileDob)
  const prismaDob = facts.prismaDob ?? null
  const realDates = [
    profileDob && !isPlaceholderDob(profileDob) ? profileDob : null,
    prismaDob && !Number.isNaN(prismaDob.getTime()) && !isPlaceholderDob(prismaDob)
      ? prismaDob
      : null,
  ].filter((d): d is Date => d !== null)
  // The later birth date is the younger person.
  const dob =
    realDates.length === 0
      ? null
      : realDates.reduce((younger, d) => (d.getTime() > younger.getTime() ? d : younger))

  if (dob) {
    const age = ageFromDob(dob, now)
    if (age < MIN_ACCOUNT_AGE) return 'UNDER_13'
    if (age < PARENTAL_CONSENT_AGE) return 'MINOR_UNDER_16'
    if (age < MINOR_AGE) return 'MINOR_16_17'
    return 'ADULT'
  }

  if (facts.profileIsMinor === true || facts.prismaIsMinor === true) return 'MINOR_UNDER_16'

  if (ROLE_ALONE_COUNTS_AS_ADULT) {
    const isAdultRole = (facts.roles ?? []).some((r) => ADULT_ROLES.has((r ?? '').toLowerCase()))
    if (isAdultRole) return 'ADULT'
  }

  return 'UNKNOWN'
}

/** Only ADULT may be sent a price, a plan link, a nudge or marketing. */
export function isAdultForEmail(group: EmailAgeGroup): boolean {
  return group === 'ADULT'
}

/**
 * The email age group for one Supabase auth user, read the way resolveAgeBand
 * reads it. Never throws: a failed read is not a fact about anyone's age, so it
 * resolves to UNKNOWN, which is a child.
 */
export async function resolveEmailAgeGroup(
  supabaseUserId: string,
  now: Date = new Date(),
): Promise<EmailAgeGroup> {
  const profile = await readIdentityProfile(supabaseUserId)
  let row: Awaited<ReturnType<typeof findExistingUser>> = null
  try {
    row = await findExistingUser(supabaseUserId)
  } catch {
    row = null
  }
  return emailAgeGroup(
    {
      profileDob: profile?.date_of_birth ?? null,
      prismaDob: row?.dateOfBirth ?? null,
      profileIsMinor: profile?.is_minor ?? null,
      prismaIsMinor: row?.isMinor ?? null,
      roles: [profile?.role ?? null],
    },
    now,
  )
}
