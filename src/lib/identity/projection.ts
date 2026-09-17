import { Prisma, type ExamBoard, type Role } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { isMinorFromDob, parseDob, isPlaceholderDob } from './age'
import { findExistingUser, IDENTITY_SELECT, type IdentityUserRow } from './lookup'
import { readIdentityProfile } from './profiles'

/**
 * ─── Identity projection ────────────────────────────────────────────────
 *
 * THE DEFECT THIS EXISTS FOR
 *
 * There are 200 Supabase auth users and 200 `profiles` rows, but only 8 rows
 * in the Prisma `User` table. Three subsystems key on `User.id` (a cuid)
 * while every caller passes the Supabase auth uuid, so for ~96% of real
 * accounts the consent ledger could not be written, erasure matched nothing,
 * and the AI decision log silently dropped its rows.
 *
 * A projection is a `User` row that makes a Supabase-native account
 * ADDRESSABLE in Prisma. It is never PERMISSIVE:
 *
 *   - it writes no Consent row of any type, and certainly not AI_PROCESSING,
 *     which is the row the AI gate turns on. Manufacturing one would be
 *     manufacturing evidence of an act by a person at a time;
 *   - it writes no `parentId`, because `checkParentalConsent` treats a linked
 *     parent as consent given, so writing that column IS granting parental
 *     consent;
 *   - it writes no `parental_consents` row and never touches `profiles`;
 *   - it creates no Subscription, so no account gains a retroactive trial;
 *   - it invents no date of birth. The prepared backfill script wrote
 *     2000-01-01 when it could not find one, which computes to age 26 and
 *     switched the parental gate OFF for children. Unknown is written as
 *     NULL, and `isMinor` is set to the protective `true`.
 *
 * Adoption of an existing row writes exactly one column, `supabaseUserId`.
 * Nothing else about an existing row is ever updated here.
 */

/**
 * Sentinel for the NOT NULL `passwordHash` column. It is a statement that no
 * credential is held in Prisma for this account - Supabase Auth owns it. It
 * cannot parse as bcrypt, so any comparison against it fails closed. The same
 * literal is used by /api/auth/register, /api/auth/teacher-signup and
 * /api/admin/verify-user.
 */
export const SUPABASE_MANAGED_SENTINEL = 'SUPABASE_MANAGED'

/** No Prisma row exists and one could not be created. Gates fail closed. */
export class IdentityUnresolved extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'IdentityUnresolved'
  }
}

/**
 * The email already belongs to a Prisma row linked to a DIFFERENT Supabase
 * user. Adopting it would merge two people, and creating is impossible
 * because `email` is unique. Operator review only.
 */
export class IdentityConflict extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'IdentityConflict'
  }
}

export interface ProjectedUser {
  /** Prisma User.id (a cuid, or a synthetic id for seeded rows). */
  prismaUserId: string
  /** Supabase auth uuid. */
  supabaseUserId: string
  /**
   * The value written to `User.isMinor`. When the date of birth is unknown
   * this is `true` as a PROTECTIVE POSTURE, not an assertion that the person
   * is a child. Anywhere it is surfaced to a human it must be labelled as
   * such, and it must never be reported as the subject's age in a DSAR.
   */
  isMinorPosture: boolean
  /** True when this call created the row. */
  created: boolean
  /** True when this call linked an existing row to the Supabase account. */
  adopted: boolean
  /** True when the account has no usable date of birth on record anywhere. */
  dateOfBirthUnknown: boolean
}

export interface AuthUserInput {
  id: string
  email?: string | null
  created_at?: string | null
  user_metadata?: Record<string, unknown> | null
}

// ─── Field derivation ───────────────────────────────────────────────────

/**
 * Splits `profiles.full_name` on the first whitespace. When there is no name
 * on record both parts are the empty string: "we hold no name" is honest and
 * consumers already handle it (`firstName || 'there'` in the delete route).
 * A name is NEVER derived from the email local part.
 */
function splitName(fullName: string | null | undefined): { firstName: string; lastName: string } {
  const trimmed = (fullName ?? '').trim()
  if (!trimmed) return { firstName: '', lastName: '' }
  const gap = trimmed.search(/\s/)
  if (gap === -1) return { firstName: trimmed, lastName: '' }
  return { firstName: trimmed.slice(0, gap), lastName: trimmed.slice(gap + 1).trim() }
}

/** `profiles.role` mapped to the Prisma enum. ADMIN and REVIEWER are never assignable. */
function mapRole(role: string | null | undefined): Role {
  switch ((role ?? '').toLowerCase()) {
    case 'teacher':
      return 'TEACHER'
    case 'parent':
      return 'PARENT'
    default:
      return 'STUDENT'
  }
}

/**
 * `profiles.exam_board` mapped only on exact matches. The profiles CHECK
 * constraint also allows 'WJEC' and 'Other', which have no clean target in
 * the Prisma enum, so those stay null rather than being guessed at.
 */
function mapExamBoard(board: string | null | undefined): ExamBoard | null {
  switch (board) {
    case 'AQA':
      return 'AQA'
    case 'Edexcel':
      return 'EDEXCEL'
    case 'OCR':
      return 'OCR'
    default:
      return null
  }
}

/** A non-empty string from user_metadata, or null. Never a default value. */
function metadataString(
  metadata: Record<string, unknown> | null | undefined,
  key: string,
): string | null {
  const value = metadata?.[key]
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
}

function parseTimestamp(value: string | null | undefined): Date | null {
  if (!value) return null
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? null : d
}

// ─── Projection ─────────────────────────────────────────────────────────

function toProjected(row: IdentityUserRow, flags: Partial<ProjectedUser> = {}): ProjectedUser {
  return {
    prismaUserId: row.id,
    supabaseUserId: row.supabaseUserId ?? row.id,
    isMinorPosture: row.isMinor,
    created: false,
    adopted: false,
    dateOfBirthUnknown: row.dateOfBirth === null || isPlaceholderDob(row.dateOfBirth),
    ...flags,
  }
}

/**
 * Makes a Supabase account addressable in Prisma, creating the projection row
 * if it is missing. The ONLY function in the repository that may create or
 * adopt a `User` row for a Supabase account.
 *
 * @throws IdentityConflict when the email belongs to a different Supabase user
 * @throws IdentityUnresolved when the account cannot be projected at all
 */
export async function projectSupabaseUser(authUser: AuthUserInput): Promise<ProjectedUser> {
  const supabaseUserId = authUser.id
  if (!supabaseUserId) {
    throw new IdentityUnresolved('Cannot project an account with no Supabase user id.')
  }

  // 1 + 2. Already addressable.
  const existing = await findExistingUser(supabaseUserId)
  if (existing) return toProjected(existing)

  const email = (authUser.email ?? '').trim().toLowerCase()
  if (!email) {
    // `User.email` is NOT NULL and unique, and auth.users is its only
    // authoritative source. Refuse rather than invent one.
    throw new IdentityUnresolved(
      `Cannot project Supabase user ${supabaseUserId}: no email on the auth record.`,
    )
  }

  // 3. Converge an existing row that predates supabaseUserId, by email.
  const adopted = await adoptByEmail(supabaseUserId, email)
  if (adopted) return adopted

  // 4. Create.
  const profile = await readIdentityProfile(supabaseUserId)
  const { firstName, lastName } = splitName(profile?.full_name)

  // Date of birth: the learner's own declaration first, then the value the
  // signup form put in user_metadata. No fallback, no placeholder.
  const dob =
    parseDob(profile?.date_of_birth) ??
    parseDob(metadataString(authUser.user_metadata, 'dateOfBirth'))
  const knownDob = dob && !isPlaceholderDob(dob) ? dob : null

  // Unknown age takes the protective value. `false` is permissive and must
  // never be written on a guess - that is exactly what opened the parental
  // gate for children in the 2026-04-20 backfill.
  const isMinor = knownDob ? isMinorFromDob(knownDob) : true

  // Do not let @default(now()) fire: it would reset the 730-day dormancy
  // clock in data-retention.ts and misdate the account in the DSAR export.
  const createdAt =
    parseTimestamp(profile?.created_at) ?? parseTimestamp(authUser.created_at) ?? new Date()

  try {
    const created = await prisma.user.create({
      data: {
        supabaseUserId,
        email,
        passwordHash: SUPABASE_MANAGED_SENTINEL,
        firstName,
        lastName,
        dateOfBirth: knownDob,
        country: metadataString(authUser.user_metadata, 'country'),
        school: profile?.school_name ?? null,
        role: mapRole(profile?.role),
        selectedExamBoard: mapExamBoard(profile?.exam_board),
        isMinor,
        accountStatus: 'ACTIVE',
        createdAt,
        // parentId and linkedTeacherId are left NULL on purpose: writing
        // parentId grants parental consent. lastLoginAt is left NULL because
        // a projection is not a login.
      },
      select: IDENTITY_SELECT,
    })

    return toProjected(created as IdentityUserRow, {
      created: true,
      dateOfBirthUnknown: knownDob === null,
    })
  } catch (err) {
    // P2002 = unique constraint. Two AI routes projecting the same account in
    // parallel is expected, not exceptional: re-read and return the winner.
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
      const winner = await findExistingUser(supabaseUserId)
      if (winner) return toProjected(winner)

      const byEmail = await adoptByEmail(supabaseUserId, email)
      if (byEmail) return byEmail
    }
    throw err
  }
}

/**
 * Links an existing Prisma row to this Supabase account when, and only when,
 * the row carries no Supabase id yet. This is how the 8 pre-existing rows
 * converge. A row already linked to a different uuid is left untouched.
 */
async function adoptByEmail(supabaseUserId: string, email: string): Promise<ProjectedUser | null> {
  const byEmail = await prisma.user.findUnique({ where: { email }, select: IDENTITY_SELECT })
  if (!byEmail) return null

  const row = byEmail as IdentityUserRow

  if (row.supabaseUserId && row.supabaseUserId !== supabaseUserId) {
    throw new IdentityConflict(
      `Prisma user ${row.id} (${email}) is already linked to a different Supabase user. ` +
        `Refusing to re-link it to ${supabaseUserId}; this needs operator review.`,
    )
  }

  if (row.supabaseUserId === supabaseUserId) return toProjected(row)

  const updated = await prisma.user.update({
    where: { id: row.id },
    // Exactly one column. Adoption never touches isMinor, dateOfBirth, role,
    // parentId or accountStatus.
    data: { supabaseUserId },
    select: IDENTITY_SELECT,
  })
  return toProjected(updated as IdentityUserRow, { adopted: true })
}

// ─── Chokepoints the rest of the codebase calls ─────────────────────────

/**
 * Fetches the auth record so a projection can be created from a bare uuid.
 * Returns null when the service role client is unavailable or the user has
 * been deleted from Supabase Auth.
 */
async function fetchAuthUser(supabaseUserId: string): Promise<AuthUserInput | null> {
  try {
    const admin = createServiceRoleClient()
    const { data, error } = await admin.auth.admin.getUserById(supabaseUserId)
    if (error || !data?.user) return null
    const user = data.user
    return {
      id: user.id,
      email: user.email ?? null,
      created_at: user.created_at ?? null,
      user_metadata: (user.user_metadata ?? null) as Record<string, unknown> | null,
    }
  } catch {
    return null
  }
}

/**
 * Resolves a Supabase auth uuid to the Prisma `User.id` that every FK in the
 * schema actually references, projecting the account if it has no row yet.
 *
 * Routes keep passing the Supabase uuid and never see a cuid, which is the
 * point: there is nothing left for a route to get wrong.
 *
 * @throws IdentityUnresolved / IdentityConflict - callers that gate access
 *         must let these fail CLOSED, and callers that erase data must fail
 *         LOUD rather than report success.
 */
export async function requirePrismaUserId(supabaseUserId: string): Promise<string> {
  const existing = await findExistingUser(supabaseUserId)
  if (existing) return existing.id

  const authUser = await fetchAuthUser(supabaseUserId)
  if (!authUser) {
    throw new IdentityUnresolved(
      `No Prisma user and no Supabase auth record for id "${supabaseUserId}".`,
    )
  }

  const projected = await projectSupabaseUser(authUser)
  return projected.prismaUserId
}

/**
 * Best-effort form of requirePrismaUserId for read paths. Returns null
 * instead of throwing, so a caller can render "nothing on record" rather
 * than a 500. Never use it where a failure must block or must be reported.
 */
export async function tryPrismaUserId(supabaseUserId: string): Promise<string | null> {
  try {
    return await requirePrismaUserId(supabaseUserId)
  } catch (err) {
    if (err instanceof IdentityConflict) {
      console.error('[identity] conflict resolving Supabase user:', err.message)
    }
    return null
  }
}
