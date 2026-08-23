import { ConsentType, ConsentMethod } from '@prisma/client'
import { prisma } from '@/lib/prisma'

// ─── Identity resolution ────────────────────────────────────────────────

/**
 * Resolve a caller-supplied id to the Prisma `User.id` the Consent table
 * actually references.
 *
 * DEFECT this fixes (2026-08-23): `Consent.userId` is a foreign key to
 * `User.id`, but every caller - /api/consent and the signup flows - passes
 * the SUPABASE AUTH UUID. For a Supabase-native account those are different
 * values, so consent rows could not be written (FK violation) or read back.
 * The practical consequence was severe: a 13-15 year-old whose guardian had
 * approved parental consent was STILL denied AI marking, because
 * checkMinorAIConsent also requires an AI_PROCESSING row that the ledger
 * could never hold. checkMinorAIConsent already compensated on the READ side
 * by trying both ids; this makes the ledger genuinely writable so the
 * compensation is no longer load-bearing.
 *
 * Returns null when no ACTIVE user matches either id, so callers can fail
 * loudly rather than writing an orphaned row.
 */
async function resolveUserId(userIdOrSupabaseUuid: string): Promise<string | null> {
  // Correct column first: the Supabase uuid lives on User.supabaseUserId.
  // findFirst (not findUnique) because that column is nullable-unique and
  // findUnique throws when handed null/undefined.
  try {
    const byUuid = await prisma.user.findFirst({
      where: { supabaseUserId: userIdOrSupabaseUuid },
      select: { id: true },
    })
    if (byUuid) return byUuid.id
  } catch {
    // Fall through to the legacy lookup.
  }

  // Legacy/seeded rows whose primary key IS the value we were handed
  // (e.g. the synthetic App Review account 'usr_apple_reviewer').
  const byId = await prisma.user.findUnique({
    where: { id: userIdOrSupabaseUuid },
    select: { id: true },
  })
  return byId?.id ?? null
}

// ─── Constants ──────────────────────────────────────────────────────────

export const CONSENT_TYPES = {
  TERMS: 'TERMS' as ConsentType,
  PRIVACY: 'PRIVACY' as ConsentType,
  AI_PROCESSING: 'AI_PROCESSING' as ConsentType,
  DATA_TRANSFER: 'DATA_TRANSFER' as ConsentType,
  MARKETING: 'MARKETING' as ConsentType,
  COOLING_OFF_WAIVER: 'COOLING_OFF_WAIVER' as ConsentType,
  COOKIE_ANALYTICS: 'COOKIE_ANALYTICS' as ConsentType,
  COOKIE_MARKETING: 'COOKIE_MARKETING' as ConsentType,
} as const

export const POLICY_VERSIONS = {
  TERMS: '1.0',
  PRIVACY: '1.0',
  COOKIES: '1.0',
} as const

/**
 * Consent types that cannot be withdrawn without deleting the account.
 * These are required for the service to function.
 */
export const ESSENTIAL_CONSENT_TYPES: ConsentType[] = [
  CONSENT_TYPES.TERMS,
  CONSENT_TYPES.PRIVACY,
  CONSENT_TYPES.AI_PROCESSING,
]

/**
 * Consent types that can be freely withdrawn by the user.
 */
export const OPTIONAL_CONSENT_TYPES: ConsentType[] = [
  CONSENT_TYPES.MARKETING,
  CONSENT_TYPES.COOKIE_ANALYTICS,
  CONSENT_TYPES.COOKIE_MARKETING,
  CONSENT_TYPES.DATA_TRANSFER,
  CONSENT_TYPES.COOLING_OFF_WAIVER,
]

// ─── Consent record type ────────────────────────────────────────────────

export interface ConsentRecordResult {
  id: string
  userId: string
  consentType: ConsentType
  version: string
  granted: boolean
  grantedAt: Date
  withdrawnAt: Date | null
  method: ConsentMethod
  ipAddress: string
}

// ─── Record consent (append-only) ───────────────────────────────────────

/**
 * Records a new consent entry. All consent records are immutable and
 * append-only - this always creates a new row, never updates existing ones.
 */
export async function recordConsent(
  userId: string,
  consentType: ConsentType,
  version: string,
  granted: boolean,
  method: ConsentMethod,
  ipAddress: string,
): Promise<ConsentRecordResult> {
  const resolvedUserId = await resolveUserId(userId)
  if (!resolvedUserId) {
    // Fail loudly. Silently dropping a consent record would leave the user
    // believing they had granted consent while the ledger held nothing -
    // the exact failure mode that blocked minors from AI marking.
    throw new Error(`Cannot record consent: no user matches id "${userId}".`)
  }

  const record = await prisma.consent.create({
    data: {
      userId: resolvedUserId,
      consentType,
      version,
      granted,
      method,
      ipAddress,
    },
  })

  // Write audit log
  await prisma.auditLog.create({
    data: {
      userId: resolvedUserId,
      action: granted ? 'CONSENT_GRANTED' : 'CONSENT_RECORDED_NOT_GRANTED',
      resource: 'consent',
      resourceId: record.id,
      details: { consentType, version, granted, method },
      ipAddress,
    },
  })

  return record
}

// ─── Withdraw consent (append-only) ─────────────────────────────────────

/**
 * Withdraws a specific consent by creating a new record with granted=false.
 * The original record is never mutated - this is append-only.
 * Essential consents cannot be withdrawn (use account deletion instead).
 */
export async function withdrawConsent(
  userId: string,
  consentType: ConsentType,
  ipAddress: string = 'unknown',
): Promise<ConsentRecordResult> {
  if (ESSENTIAL_CONSENT_TYPES.includes(consentType)) {
    throw new Error(
      `Cannot withdraw essential consent "${consentType}". To withdraw this consent, you must delete your account.`,
    )
  }

  const resolvedUserId = await resolveUserId(userId)
  if (!resolvedUserId) {
    throw new Error(`Cannot withdraw consent: no user matches id "${userId}".`)
  }

  // Create a new withdrawal record (append-only, never update)
  const record = await prisma.consent.create({
    data: {
      userId: resolvedUserId,
      consentType,
      version: POLICY_VERSIONS.TERMS, // version at time of withdrawal
      granted: false,
      method: 'EXPLICIT',
      ipAddress,
      withdrawnAt: new Date(),
    },
  })

  // Write audit log
  await prisma.auditLog.create({
    data: {
      userId: resolvedUserId,
      action: 'CONSENT_WITHDRAWN',
      resource: 'consent',
      resourceId: record.id,
      details: { consentType },
      ipAddress,
    },
  })

  return record
}

// ─── Get active consents ────────────────────────────────────────────────

/**
 * Returns the most recent consent record for each consent type for a user.
 * This represents the user's current consent state.
 */
export async function getConsents(userId: string): Promise<ConsentRecordResult[]> {
  // Resolve to the id the Consent FK actually uses (see resolveUserId).
  // Reading under the raw Supabase uuid silently returned an empty list.
  const resolvedUserId = (await resolveUserId(userId)) ?? userId

  // Get all consent records, ordered by date descending
  const allRecords = await prisma.consent.findMany({
    where: { userId: resolvedUserId },
    orderBy: { grantedAt: 'desc' },
  })

  // Deduplicate: keep only the most recent record per consent type
  const latestByType = new Map<ConsentType, ConsentRecordResult>()
  for (const record of allRecords) {
    if (!latestByType.has(record.consentType)) {
      latestByType.set(record.consentType, record)
    }
  }

  // Return only those where granted is true (active consents)
  return Array.from(latestByType.values()).filter((r) => r.granted)
}

// ─── Check specific consent ─────────────────────────────────────────────

/**
 * Checks whether a user currently has an active (granted) consent
 * of the given type. Looks at the most recent record for that type.
 */
export async function hasConsent(userId: string, consentType: ConsentType): Promise<boolean> {
  // Resolve first: callers pass the Supabase auth uuid, but Consent.userId
  // is a FK to User.id. Without this, an existing consent read as absent.
  const resolvedUserId = (await resolveUserId(userId)) ?? userId

  const latestRecord = await prisma.consent.findFirst({
    where: { userId: resolvedUserId, consentType },
    orderBy: { grantedAt: 'desc' },
  })

  return latestRecord?.granted === true
}

// ─── Full consent history ───────────────────────────────────────────────

/**
 * Returns the complete, unfiltered consent history for a user,
 * ordered chronologically (oldest first). This is the full audit trail.
 */
export async function getConsentHistory(userId: string): Promise<ConsentRecordResult[]> {
  const resolvedUserId = (await resolveUserId(userId)) ?? userId
  return prisma.consent.findMany({
    where: { userId: resolvedUserId },
    orderBy: { grantedAt: 'asc' },
  })
}
