// ─── Compliance Check Types ─────────────────────────────────────────────

export interface ComplianceAlert {
  id: string;
  type: "OVERDUE_DSAR" | "OLD_CONSENT_VERSION" | "DATA_RETENTION" | "SUBSCRIPTION_REMINDER";
  severity: "critical" | "warning" | "info";
  title: string;
  description: string;
  resourceId: string;
  detectedAt: string;
}

// ─── Constants ──────────────────────────────────────────────────────────

const DSAR_DEADLINE_DAYS = 30;
const CURRENT_POLICY_VERSION = "1.0";
const DATA_RETENTION_DAYS = 365 * 3; // 3 years default retention
const RENEWAL_REMINDER_DAYS = 14; // Remind 14 days before renewal

// ─── Stub data interfaces (replace with DB queries in production) ───────

export interface DSARRecord {
  id: string;
  userId: string;
  type: "ACCESS" | "DELETION" | "RECTIFICATION" | "PORTABILITY";
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "OVERDUE";
  submittedAt: string;
  completedAt: string | null;
  deadline: string;
}

export interface UserConsentRecord {
  userId: string;
  email: string;
  consentType: string;
  version: string;
  grantedAt: string;
}

export interface DataRetentionRecord {
  userId: string;
  email: string;
  resourceType: string;
  resourceId: string;
  createdAt: string;
  lastAccessedAt: string;
}

export interface SubscriptionRecord {
  userId: string;
  email: string;
  plan: "MONTHLY" | "ANNUAL";
  currentPeriodEnd: string;
  paymentCount: number;
}

// ─── Check: Overdue DSARs ───────────────────────────────────────────────

export async function checkOverdueDSARs(
  dsars: DSARRecord[]
): Promise<ComplianceAlert[]> {
  const now = new Date();
  const alerts: ComplianceAlert[] = [];

  for (const dsar of dsars) {
    if (dsar.status === "COMPLETED") continue;

    const deadline = new Date(dsar.deadline);
    const daysRemaining = Math.ceil(
      (deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysRemaining < 0) {
      alerts.push({
        id: `overdue_dsar_${dsar.id}`,
        type: "OVERDUE_DSAR",
        severity: "critical",
        title: `DSAR overdue by ${Math.abs(daysRemaining)} day(s)`,
        description: `${dsar.type} request from user ${dsar.userId} was due on ${dsar.deadline}. Immediate action required to avoid regulatory penalties.`,
        resourceId: dsar.id,
        detectedAt: now.toISOString(),
      });
    } else if (daysRemaining <= 7) {
      alerts.push({
        id: `expiring_dsar_${dsar.id}`,
        type: "OVERDUE_DSAR",
        severity: "warning",
        title: `DSAR due in ${daysRemaining} day(s)`,
        description: `${dsar.type} request from user ${dsar.userId} is due on ${dsar.deadline}. Please prioritise completion.`,
        resourceId: dsar.id,
        detectedAt: now.toISOString(),
      });
    }
  }

  return alerts;
}

// ─── Check: Consent versions ────────────────────────────────────────────

export async function checkConsentVersions(
  consents: UserConsentRecord[]
): Promise<ComplianceAlert[]> {
  const alerts: ComplianceAlert[] = [];

  for (const consent of consents) {
    if (consent.version !== CURRENT_POLICY_VERSION) {
      alerts.push({
        id: `old_consent_${consent.userId}_${consent.consentType}`,
        type: "OLD_CONSENT_VERSION",
        severity: "warning",
        title: `Outdated consent: ${consent.consentType}`,
        description: `User ${consent.email} has ${consent.consentType} consent on version ${consent.version} (current: ${CURRENT_POLICY_VERSION}). Re-consent may be needed.`,
        resourceId: consent.userId,
        detectedAt: new Date().toISOString(),
      });
    }
  }

  return alerts;
}

// ─── Check: Data retention ──────────────────────────────────────────────

export async function checkDataRetention(
  records: DataRetentionRecord[]
): Promise<ComplianceAlert[]> {
  const now = new Date();
  const alerts: ComplianceAlert[] = [];

  for (const record of records) {
    const createdAt = new Date(record.createdAt);
    const ageInDays = Math.floor(
      (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (ageInDays > DATA_RETENTION_DAYS) {
      alerts.push({
        id: `retention_${record.resourceType}_${record.resourceId}`,
        type: "DATA_RETENTION",
        severity: "warning",
        title: `Data past retention period`,
        description: `${record.resourceType} (${record.resourceId}) for user ${record.email} is ${ageInDays} days old, exceeding the ${DATA_RETENTION_DAYS}-day retention period. Review for deletion.`,
        resourceId: record.resourceId,
        detectedAt: now.toISOString(),
      });
    }
  }

  return alerts;
}

// ─── Check: Subscription renewal reminders ──────────────────────────────

export async function checkSubscriptionReminders(
  subscriptions: SubscriptionRecord[]
): Promise<ComplianceAlert[]> {
  const now = new Date();
  const alerts: ComplianceAlert[] = [];

  for (const sub of subscriptions) {
    const periodEnd = new Date(sub.currentPeriodEnd);
    const daysUntilRenewal = Math.ceil(
      (periodEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysUntilRenewal > 0 && daysUntilRenewal <= RENEWAL_REMINDER_DAYS) {
      alerts.push({
        id: `renewal_${sub.userId}`,
        type: "SUBSCRIPTION_REMINDER",
        severity: "info",
        title: `${sub.plan} renewal in ${daysUntilRenewal} day(s)`,
        description: `User ${sub.email} (${sub.plan} plan) renews on ${sub.currentPeriodEnd}. Payment count: ${sub.paymentCount}.`,
        resourceId: sub.userId,
        detectedAt: now.toISOString(),
      });
    }
  }

  return alerts;
}

// ─── Run all checks ─────────────────────────────────────────────────────

export interface ComplianceCheckInput {
  dsars: DSARRecord[];
  consents: UserConsentRecord[];
  retentionRecords: DataRetentionRecord[];
  subscriptions: SubscriptionRecord[];
}

export async function runAllComplianceChecks(
  input: ComplianceCheckInput
): Promise<ComplianceAlert[]> {
  const [dsarAlerts, consentAlerts, retentionAlerts, subscriptionAlerts] =
    await Promise.all([
      checkOverdueDSARs(input.dsars),
      checkConsentVersions(input.consents),
      checkDataRetention(input.retentionRecords),
      checkSubscriptionReminders(input.subscriptions),
    ]);

  const all = [
    ...dsarAlerts,
    ...consentAlerts,
    ...retentionAlerts,
    ...subscriptionAlerts,
  ];

  // Sort by severity: critical first, then warning, then info
  const severityOrder = { critical: 0, warning: 1, info: 2 };
  all.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

  return all;
}

// ─── DSAR deadline calculator ───────────────────────────────────────────

export function calculateDSARDeadline(submittedAt: string): string {
  const date = new Date(submittedAt);
  date.setDate(date.getDate() + DSAR_DEADLINE_DAYS);
  return date.toISOString();
}

export function getDaysUntilDeadline(deadline: string): number {
  const now = new Date();
  const deadlineDate = new Date(deadline);
  return Math.ceil(
    (deadlineDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );
}
