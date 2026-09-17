/**
 * The identity layer: one place that turns a Supabase auth uuid into the
 * Prisma `User.id` that every foreign key in the schema references.
 *
 * Import from here, not from the individual files, so the chokepoint stays
 * visible in the import graph.
 */
export {
  projectSupabaseUser,
  requirePrismaUserId,
  tryPrismaUserId,
  IdentityUnresolved,
  IdentityConflict,
  SUPABASE_MANAGED_SENTINEL,
  type ProjectedUser,
  type AuthUserInput,
} from './projection'

export {
  resolveAgeBand,
  requiresGuardianConsent,
  isMinorFromDob,
  bandFromDob,
  ageFromDob,
  parseDob,
  isPlaceholderDob,
  PARENTAL_CONSENT_AGE,
  MINOR_AGE,
  PLACEHOLDER_DOB_ISO,
  type AgeBand,
} from './age'

export { findExistingUser, type IdentityUserRow } from './lookup'
export { readIdentityProfile, type IdentityProfile } from './profiles'
