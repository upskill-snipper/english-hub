// ─── Audit Actions ──────────────────────────────────────────────────────

export enum AuditAction {
  USER_REGISTERED = "USER_REGISTERED",
  USER_LOGIN = "USER_LOGIN",
  USER_LOGOUT = "USER_LOGOUT",
  CONSENT_GRANTED = "CONSENT_GRANTED",
  CONSENT_WITHDRAWN = "CONSENT_WITHDRAWN",
  ESSAY_SUBMITTED = "ESSAY_SUBMITTED",
  ESSAY_DELETED = "ESSAY_DELETED",
  FEEDBACK_GENERATED = "FEEDBACK_GENERATED",
  FEEDBACK_FILTERED = "FEEDBACK_FILTERED",
  HUMAN_REVIEW_REQUESTED = "HUMAN_REVIEW_REQUESTED",
  HUMAN_REVIEW_COMPLETED = "HUMAN_REVIEW_COMPLETED",
  SUBSCRIPTION_CREATED = "SUBSCRIPTION_CREATED",
  SUBSCRIPTION_CANCELLED = "SUBSCRIPTION_CANCELLED",
  PAYMENT_RECEIVED = "PAYMENT_RECEIVED",
  PAYMENT_FAILED = "PAYMENT_FAILED",
  PRIVACY_SETTINGS_CHANGED = "PRIVACY_SETTINGS_CHANGED",
  DATA_EXPORT_REQUESTED = "DATA_EXPORT_REQUESTED",
  DATA_DELETION_REQUESTED = "DATA_DELETION_REQUESTED",
  ACCOUNT_DELETED = "ACCOUNT_DELETED",
  DSAR_SUBMITTED = "DSAR_SUBMITTED",
  DSAR_COMPLETED = "DSAR_COMPLETED",
  SAFEGUARDING_REPORT = "SAFEGUARDING_REPORT",
  COOKIE_CONSENT_GIVEN = "COOKIE_CONSENT_GIVEN",
  COOKIE_CONSENT_WITHDRAWN = "COOKIE_CONSENT_WITHDRAWN",
  ADMIN_ACTION = "ADMIN_ACTION",
  INACTIVE_ACCOUNT_WARNING_SENT = "INACTIVE_ACCOUNT_WARNING_SENT",
  INACTIVE_ACCOUNT_SOFT_DELETED = "INACTIVE_ACCOUNT_SOFT_DELETED",
  USER_DATA_ANONYMISED = "USER_DATA_ANONYMISED",
  USER_HARD_DELETED = "USER_HARD_DELETED",
  USAGE_DATA_ANONYMISED = "USAGE_DATA_ANONYMISED",
  SUPPORT_TICKETS_ARCHIVED = "SUPPORT_TICKETS_ARCHIVED",
  MARKETING_CONSENT_RECORDS_PURGED = "MARKETING_CONSENT_RECORDS_PURGED",
  DATA_RETENTION_CLEANUP_COMPLETED = "DATA_RETENTION_CLEANUP_COMPLETED",
  PARENT_INITIATED_CHILD_DATA_DELETION = "PARENT_INITIATED_CHILD_DATA_DELETION",
}

// ─── Audit Entry ────────────────────────────────────────────────────────

export interface AuditEntry {
  id: string;
  timestamp: string;
  userId: string | null;
  action: AuditAction;
  resource: string;
  resourceId: string | null;
  details: Record<string, unknown> | null;
  ipAddress: string | null;
}

export interface LogActionParams {
  userId?: string;
  action: AuditAction;
  resource: string;
  resourceId?: string;
  details?: Record<string, unknown>;
  ipAddress?: string;
}

// ─── In-memory append-only log (replace with DB in production) ──────────

const auditLog: AuditEntry[] = [];

let idCounter = 1;

function generateId(): string {
  return `audit_${Date.now()}_${idCounter++}`;
}

// ─── Core logging function ──────────────────────────────────────────────

export async function logAction(params: LogActionParams): Promise<AuditEntry> {
  const entry: AuditEntry = Object.freeze({
    id: generateId(),
    timestamp: new Date().toISOString(),
    userId: params.userId ?? null,
    action: params.action,
    resource: params.resource,
    resourceId: params.resourceId ?? null,
    details: params.details ? Object.freeze({ ...params.details }) : null,
    ipAddress: params.ipAddress ?? null,
  });

  // Append-only: entries are never modified or removed
  auditLog.push(entry);

  return entry;
}

// ─── Query helpers ──────────────────────────────────────────────────────

export interface AuditQueryParams {
  action?: AuditAction;
  userId?: string;
  resource?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  pageSize?: number;
}

export interface AuditQueryResult {
  entries: AuditEntry[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export async function queryAuditLog(
  params: AuditQueryParams = {}
): Promise<AuditQueryResult> {
  const { page = 1, pageSize = 25 } = params;

  let filtered = [...auditLog];

  if (params.action) {
    filtered = filtered.filter((e) => e.action === params.action);
  }
  if (params.userId) {
    filtered = filtered.filter((e) => e.userId === params.userId);
  }
  if (params.resource) {
    filtered = filtered.filter((e) =>
      e.resource.toLowerCase().includes(params.resource!.toLowerCase())
    );
  }
  if (params.startDate) {
    filtered = filtered.filter((e) => e.timestamp >= params.startDate!);
  }
  if (params.endDate) {
    filtered = filtered.filter((e) => e.timestamp <= params.endDate!);
  }

  // Newest first
  filtered.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const start = (page - 1) * pageSize;
  const entries = filtered.slice(start, start + pageSize);

  return { entries, total, page, pageSize, totalPages };
}

export async function getFullAuditLog(): Promise<AuditEntry[]> {
  return [...auditLog].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
}

// ─── CSV export ─────────────────────────────────────────────────────────

export function auditEntriesToCsv(entries: AuditEntry[]): string {
  const headers = [
    "ID",
    "Timestamp",
    "User ID",
    "Action",
    "Resource",
    "Resource ID",
    "Details",
    "IP Address",
  ];

  const rows = entries.map((e) => [
    e.id,
    e.timestamp,
    e.userId ?? "",
    e.action,
    e.resource,
    e.resourceId ?? "",
    e.details ? JSON.stringify(e.details) : "",
    e.ipAddress ?? "",
  ]);

  const escape = (val: string) => {
    if (val.includes(",") || val.includes('"') || val.includes("\n")) {
      return `"${val.replace(/"/g, '""')}"`;
    }
    return val;
  };

  return [
    headers.join(","),
    ...rows.map((row) => row.map(escape).join(",")),
  ].join("\n");
}

// ─── Audit action label mapping ─────────────────────────────────────────

export const AUDIT_ACTION_LABELS: Record<AuditAction, string> = {
  [AuditAction.USER_REGISTERED]: "User Registered",
  [AuditAction.USER_LOGIN]: "User Login",
  [AuditAction.USER_LOGOUT]: "User Logout",
  [AuditAction.CONSENT_GRANTED]: "Consent Granted",
  [AuditAction.CONSENT_WITHDRAWN]: "Consent Withdrawn",
  [AuditAction.ESSAY_SUBMITTED]: "Essay Submitted",
  [AuditAction.ESSAY_DELETED]: "Essay Deleted",
  [AuditAction.FEEDBACK_GENERATED]: "Feedback Generated",
  [AuditAction.FEEDBACK_FILTERED]: "Feedback Filtered",
  [AuditAction.HUMAN_REVIEW_REQUESTED]: "Human Review Requested",
  [AuditAction.HUMAN_REVIEW_COMPLETED]: "Human Review Completed",
  [AuditAction.SUBSCRIPTION_CREATED]: "Subscription Created",
  [AuditAction.SUBSCRIPTION_CANCELLED]: "Subscription Cancelled",
  [AuditAction.PAYMENT_RECEIVED]: "Payment Received",
  [AuditAction.PAYMENT_FAILED]: "Payment Failed",
  [AuditAction.PRIVACY_SETTINGS_CHANGED]: "Privacy Settings Changed",
  [AuditAction.DATA_EXPORT_REQUESTED]: "Data Export Requested",
  [AuditAction.DATA_DELETION_REQUESTED]: "Data Deletion Requested",
  [AuditAction.ACCOUNT_DELETED]: "Account Deleted",
  [AuditAction.DSAR_SUBMITTED]: "DSAR Submitted",
  [AuditAction.DSAR_COMPLETED]: "DSAR Completed",
  [AuditAction.SAFEGUARDING_REPORT]: "Safeguarding Report",
  [AuditAction.COOKIE_CONSENT_GIVEN]: "Cookie Consent Given",
  [AuditAction.COOKIE_CONSENT_WITHDRAWN]: "Cookie Consent Withdrawn",
  [AuditAction.ADMIN_ACTION]: "Admin Action",
  [AuditAction.INACTIVE_ACCOUNT_WARNING_SENT]: "Inactive Account Warning Sent",
  [AuditAction.INACTIVE_ACCOUNT_SOFT_DELETED]: "Inactive Account Soft Deleted",
  [AuditAction.USER_DATA_ANONYMISED]: "User Data Anonymised",
  [AuditAction.USER_HARD_DELETED]: "User Hard Deleted",
  [AuditAction.USAGE_DATA_ANONYMISED]: "Usage Data Anonymised",
  [AuditAction.SUPPORT_TICKETS_ARCHIVED]: "Support Tickets Archived",
  [AuditAction.MARKETING_CONSENT_RECORDS_PURGED]: "Marketing Consent Records Purged",
  [AuditAction.DATA_RETENTION_CLEANUP_COMPLETED]: "Data Retention Cleanup Completed",
  [AuditAction.PARENT_INITIATED_CHILD_DATA_DELETION]: "Parent Initiated Child Data Deletion",
};
