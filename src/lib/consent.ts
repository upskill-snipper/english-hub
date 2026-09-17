import { ConsentType, ConsentMethod } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { requirePrismaUserId, tryPrismaUserId, IdentityUnresolved } from '@/lib/identity'

// ─── Identity resolution ────────────────────────────────────────────────

/**
 * `Consent.userId` is a foreign key to `User.id` (a cuid), but every caller -
 * /api/consent, the signup flows, the AI gate - passes the SUPABASE AUTH
 * UUID. Only 8 of 200 real accounts had a `User` row at all, so for ~96% of
 * people the ledger could not be written (the row resolved to nothing and
 * recordConsent threw) and could not be read back. Production held ZERO
 * AI_PROCESSING rows as a result, and because checkMinorAIConsent requires
 * one, every signed-in learner was refused every AI feature and told to
 * change a setting that did not exist.
 *
 * Both helpers below delegate to src/lib/identity, which creates the missing
 * `User` row just in time. That projection is ADDITIVE ONLY: it makes the
 * ledger addressable, it never writes a consent row, a parent link or a
 * subscription. Consent is still, and only, an act by a person recorded here.
 *
 * Writes use requirePrismaUserId (throws, so we never silently drop a
 * consent record). Reads use tryPrismaUserId and fail closed on null.
 */
async function resolveForWrite(supabaseUserId: string): Promise<string> {
  return requirePrismaUserId(supabaseUserId)
}

async function resolveForRead(supabaseUserId: string): Promise<string | null> {
  return tryPrismaUserId(supabaseUserId)
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
  // The AI-processing and marketing consents are described in the privacy
  // notice, so they track its version. A consent record is only meaningful
  // against the wording the person was shown.
  AI_PROCESSING: '1.0',
  MARKETING: '1.0',
} as const

/**
 * Consent types that cannot be withdrawn without deleting the account.
 * These are required for the service to exist at all: there is no version of
 * the product you can use without accepting the terms and the privacy notice.
 */
export const ESSENTIAL_CONSENT_TYPES: ConsentType[] = [CONSENT_TYPES.TERMS, CONSENT_TYPES.PRIVACY]

/**
 * Consent types that can be freely withdrawn by the user.
 *
 * AI_PROCESSING moved here on 2026-09-17. It was listed as essential, so
 * withdrawConsent refused it outright and the consent page offered no way to
 * turn it off short of deleting the account. UK GDPR Art.7(3) requires that
 * withdrawing consent be as easy as giving it, and the product plainly works
 * without AI: revision content, past papers and the dashboard are all
 * unaffected. Withdrawing it closes the AI gate, which then tells the learner
 * exactly where to turn it back on.
 */
export const OPTIONAL_CONSENT_TYPES: ConsentType[] = [
  CONSENT_TYPES.AI_PROCESSING,
  CONSENT_TYPES.MARKETING,
  CONSENT_TYPES.COOKIE_ANALYTICS,
  CONSENT_TYPES.COOKIE_MARKETING,
  CONSENT_TYPES.DATA_TRANSFER,
  CONSENT_TYPES.COOLING_OFF_WAIVER,
]

/**
 * The consents a learner can switch on and off for themselves from
 * /dashboard/consent, with the policy version each grant is recorded
 * against. The page reads this through GET /api/consent, so the version is
 * never hard-coded in the browser.
 *
 * Cookie consents are deliberately absent: they are owned by the cookie
 * banner and /api/consent/cookie, and offering two controls for one decision
 * is how ledgers start disagreeing with each other.
 */
export const GRANTABLE_CONSENT_TYPES: { consentType: ConsentType; version: string }[] = [
  { consentType: CONSENT_TYPES.AI_PROCESSING, version: POLICY_VERSIONS.AI_PROCESSING },
  { consentType: CONSENT_TYPES.MARKETING, version: POLICY_VERSIONS.MARKETING },
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
  let resolvedUserId: string
  try {
    resolvedUserId = await resolveForWrite(userId)
  } catch (err) {
    // Fail loudly. Silently dropping a consent record would leave the user
    // believing they had granted consent while the ledger held nothing -
    // the exact failure mode that blocked every learner from AI marking.
    const detail = err instanceof IdentityUnresolved ? ` ${err.message}` : ''
    throw new Error(`Cannot record consent: no user matches id "${userId}".${detail}`)
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

  let resolvedUserId: string
  try {
    resolvedUserId = await resolveForWrite(userId)
  } catch (err) {
    const detail = err instanceof IdentityUnresolved ? ` ${err.message}` : ''
    throw new Error(`Cannot withdraw consent: no user matches id "${userId}".${detail}`)
  }

  // Create a new withdrawal record (append-only, never update)
  const record = await prisma.consent.create({
    data: {
      userId: resolvedUserId,
      consentType,
      // The version of the wording being withdrawn from, not the terms
      // version: a withdrawal that cites the wrong document is not an audit
      // trail. Falls back to the terms version for types with no entry.
      version:
        GRANTABLE_CONSENT_TYPES.find((g) => g.consentType === consentType)?.version ??
        POLICY_VERSIONS.TERMS,
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
  // Resolve to the id the Consent FK actually uses. Reading under the raw
  // Supabase uuid silently returned an empty list.
  const resolvedUserId = await resolveForRead(userId)
  if (!resolvedUserId) return []

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
  // An unresolvable account has no consent on record, so fail closed.
  const resolvedUserId = await resolveForRead(userId)
  if (!resolvedUserId) return false

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
  const resolvedUserId = await resolveForRead(userId)
  if (!resolvedUserId) return []
  return prisma.consent.findMany({
    where: { userId: resolvedUserId },
    orderBy: { grantedAt: 'asc' },
  })
}
