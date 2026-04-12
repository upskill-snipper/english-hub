import { ConsentType, ConsentMethod } from "@prisma/client";
import { prisma } from "@/lib/prisma";

// ─── Constants ──────────────────────────────────────────────────────────

export const CONSENT_TYPES = {
  TERMS: "TERMS" as ConsentType,
  PRIVACY: "PRIVACY" as ConsentType,
  AI_PROCESSING: "AI_PROCESSING" as ConsentType,
  DATA_TRANSFER: "DATA_TRANSFER" as ConsentType,
  MARKETING: "MARKETING" as ConsentType,
  COOLING_OFF_WAIVER: "COOLING_OFF_WAIVER" as ConsentType,
  COOKIE_ANALYTICS: "COOKIE_ANALYTICS" as ConsentType,
  COOKIE_MARKETING: "COOKIE_MARKETING" as ConsentType,
} as const;

export const POLICY_VERSIONS = {
  TERMS: "1.0",
  PRIVACY: "1.0",
  COOKIES: "1.0",
} as const;

/**
 * Consent types that cannot be withdrawn without deleting the account.
 * These are required for the service to function.
 */
export const ESSENTIAL_CONSENT_TYPES: ConsentType[] = [
  CONSENT_TYPES.TERMS,
  CONSENT_TYPES.PRIVACY,
  CONSENT_TYPES.AI_PROCESSING,
];

/**
 * Consent types that can be freely withdrawn by the user.
 */
export const OPTIONAL_CONSENT_TYPES: ConsentType[] = [
  CONSENT_TYPES.MARKETING,
  CONSENT_TYPES.COOKIE_ANALYTICS,
  CONSENT_TYPES.COOKIE_MARKETING,
  CONSENT_TYPES.DATA_TRANSFER,
  CONSENT_TYPES.COOLING_OFF_WAIVER,
];

// ─── Consent record type ────────────────────────────────────────────────

export interface ConsentRecordResult {
  id: string;
  userId: string;
  consentType: ConsentType;
  version: string;
  granted: boolean;
  grantedAt: Date;
  withdrawnAt: Date | null;
  method: ConsentMethod;
  ipAddress: string;
}

// ─── Record consent (append-only) ───────────────────────────────────────

/**
 * Records a new consent entry. All consent records are immutable and
 * append-only — this always creates a new row, never updates existing ones.
 */
export async function recordConsent(
  userId: string,
  consentType: ConsentType,
  version: string,
  granted: boolean,
  method: ConsentMethod,
  ipAddress: string
): Promise<ConsentRecordResult> {
  const record = await prisma.consent.create({
    data: {
      userId,
      consentType,
      version,
      granted,
      method,
      ipAddress,
    },
  });

  // Write audit log
  await prisma.auditLog.create({
    data: {
      userId,
      action: granted ? "CONSENT_GRANTED" : "CONSENT_RECORDED_NOT_GRANTED",
      resource: "consent",
      resourceId: record.id,
      details: { consentType, version, granted, method },
      ipAddress,
    },
  });

  return record;
}

// ─── Withdraw consent (append-only) ─────────────────────────────────────

/**
 * Withdraws a specific consent by creating a new record with granted=false.
 * The original record is never mutated — this is append-only.
 * Essential consents cannot be withdrawn (use account deletion instead).
 */
export async function withdrawConsent(
  userId: string,
  consentType: ConsentType,
  ipAddress: string = "unknown"
): Promise<ConsentRecordResult> {
  if (ESSENTIAL_CONSENT_TYPES.includes(consentType)) {
    throw new Error(
      `Cannot withdraw essential consent "${consentType}". To withdraw this consent, you must delete your account.`
    );
  }

  // Create a new withdrawal record (append-only, never update)
  const record = await prisma.consent.create({
    data: {
      userId,
      consentType,
      version: POLICY_VERSIONS.TERMS, // version at time of withdrawal
      granted: false,
      method: "EXPLICIT",
      ipAddress,
      withdrawnAt: new Date(),
    },
  });

  // Write audit log
  await prisma.auditLog.create({
    data: {
      userId,
      action: "CONSENT_WITHDRAWN",
      resource: "consent",
      resourceId: record.id,
      details: { consentType },
      ipAddress,
    },
  });

  return record;
}

// ─── Get active consents ────────────────────────────────────────────────

/**
 * Returns the most recent consent record for each consent type for a user.
 * This represents the user's current consent state.
 */
export async function getConsents(
  userId: string
): Promise<ConsentRecordResult[]> {
  // Get all consent records, ordered by date descending
  const allRecords = await prisma.consent.findMany({
    where: { userId },
    orderBy: { grantedAt: "desc" },
  });

  // Deduplicate: keep only the most recent record per consent type
  const latestByType = new Map<ConsentType, ConsentRecordResult>();
  for (const record of allRecords) {
    if (!latestByType.has(record.consentType)) {
      latestByType.set(record.consentType, record);
    }
  }

  // Return only those where granted is true (active consents)
  return Array.from(latestByType.values()).filter((r) => r.granted);
}

// ─── Check specific consent ─────────────────────────────────────────────

/**
 * Checks whether a user currently has an active (granted) consent
 * of the given type. Looks at the most recent record for that type.
 */
export async function hasConsent(
  userId: string,
  consentType: ConsentType
): Promise<boolean> {
  const latestRecord = await prisma.consent.findFirst({
    where: { userId, consentType },
    orderBy: { grantedAt: "desc" },
  });

  return latestRecord?.granted === true;
}

// ─── Full consent history ───────────────────────────────────────────────

/**
 * Returns the complete, unfiltered consent history for a user,
 * ordered chronologically (oldest first). This is the full audit trail.
 */
export async function getConsentHistory(
  userId: string
): Promise<ConsentRecordResult[]> {
  return prisma.consent.findMany({
    where: { userId },
    orderBy: { grantedAt: "asc" },
  });
}
