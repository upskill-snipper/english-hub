// ─── Signup metadata: the one place profile fields enter the system ─────────
//
// WHY THIS EXISTS
// Until 18 September 2026 both signup pages created the auth user and then
// upserted the profile from the browser. That write could never succeed: no
// session exists at that moment when email confirmation is on, and
// public.profiles has no INSERT policy for users anyway, so PostgREST refused
// it for every account, the pages logged it as non-blocking, and every one of
// the 206 profiles held only what the auth trigger inserted. Teachers were
// recorded as students, no child's date of birth was stored, and attribution
// was lost.
//
// The fix moves the fields into `signUp({ options: { data } })`, which Supabase
// stores in auth.users.raw_user_meta_data, where the SECURITY DEFINER trigger
// `handle_new_user()` (supabase/migrations/20260918_handle_new_user_reads_
// signup_metadata.sql) validates them and writes the profile row. This module
// is the single builder for that object, and PROFILE_COLUMNS_WRITTEN_BY_TRIGGER
// is the contract that src/__tests__/profiles-signup-columns.test.ts checks
// against the migrations, so a column can never again be written that does
// not exist.
//
// Never put a password, a card number or anything a user did not type into
// this object: user metadata is readable by the user and by admin tooling.
// ────────────────────────────────────────────────────────────────────────────

export type SignupRole = 'student' | 'teacher' | 'parent'

export interface UtmParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

export interface SignupProfileInput {
  fullName: string
  role: SignupRole
  /** ISO date, YYYY-MM-DD. Students and parents supply one; teachers do not. */
  dateOfBirth?: string | null
  yearGroup?: string | null
  examBoard?: string | null
  schoolName?: string | null
  parentGuardianEmail?: string | null
  /** ISO 3166-1 alpha-2. */
  country?: string | null
  /** Qatar Article 17 cross-border consent; only meaningful when country is QA. */
  dataTransferConsentQa?: boolean | null
  utm?: UtmParams | null
}

/**
 * Columns of public.profiles that handle_new_user() writes from the metadata.
 * Keep in step with the INSERT column list in the trigger migration; the
 * contract test asserts every one of these is declared by a migration.
 */
export const PROFILE_COLUMNS_WRITTEN_BY_TRIGGER = [
  'id',
  'email',
  'full_name',
  'role',
  'year_group',
  'exam_board',
  'school_name',
  'date_of_birth',
  'is_minor',
  'parent_guardian_email',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'country',
  'data_transfer_consent_qa',
  'data_transfer_consent_qa_at',
  'streaks_enabled',
  'personalised_recommendations',
  'streak_notifications',
  'nudge_notifications',
  'analytics_opt_in',
  'marketing_opt_in',
  'social_share_nudge',
] as const

/** Metadata keys the trigger reads. Anything else in the object is ignored by it. */
export const SIGNUP_METADATA_KEYS = [
  'full_name',
  'role',
  'date_of_birth',
  'year_group',
  'exam_board',
  'school_name',
  'parent_guardian_email',
  'country',
  'data_transfer_consent_qa',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const

export type SignupMetadata = Partial<
  Record<(typeof SIGNUP_METADATA_KEYS)[number], string | boolean>
>

function clean(value: string | null | undefined): string | undefined {
  const v = value?.trim()
  return v ? v : undefined
}

/**
 * Build the `options.data` object for supabase.auth.signUp(). Empty values are
 * omitted so the trigger sees absence, not empty strings. The trigger
 * re-validates everything; this function only shapes.
 */
export function buildSignupMetadata(input: SignupProfileInput): SignupMetadata {
  const out: SignupMetadata = {
    full_name: input.fullName.trim(),
    role: input.role,
  }
  const dob = clean(input.dateOfBirth)
  if (dob && /^\d{4}-\d{2}-\d{2}$/.test(dob)) out.date_of_birth = dob
  const year = clean(input.yearGroup)
  if (year) out.year_group = year
  const board = clean(input.examBoard)
  if (board) out.exam_board = board
  const school = clean(input.schoolName)
  if (school) out.school_name = school
  const guardian = clean(input.parentGuardianEmail)
  if (guardian) out.parent_guardian_email = guardian
  const country = clean(input.country)
  if (country) out.country = country.toUpperCase()
  if (typeof input.dataTransferConsentQa === 'boolean' && country?.toUpperCase() === 'QA') {
    out.data_transfer_consent_qa = input.dataTransferConsentQa
  }
  const utm = input.utm ?? undefined
  if (utm) {
    for (const key of [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
    ] as const) {
      const v = clean(utm[key])
      if (v) out[key] = v.slice(0, 200)
    }
  }
  return out
}
