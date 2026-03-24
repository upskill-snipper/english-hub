// ─── Data Breach Notification Utilities ──────────────────────────────────
// Implements UK ICO 72-hour notification requirement and Qatar NCGAA obligations.

// ─── Types ──────────────────────────────────────────────────────────────

export type BreachNature = "confidentiality" | "integrity" | "availability";

export type RiskLevel = "low" | "medium" | "high";

export type BreachStatus =
  | "recorded"
  | "assessing"
  | "ico-notified"
  | "ncgaa-notified"
  | "individuals-notified"
  | "closed";

export interface TimelineEntry {
  timestamp: string;
  action: string;
  performedBy: string;
  notes?: string;
}

export interface BreachRecord {
  id: string;
  referenceNumber: string;

  // Discovery & timing
  discoveryDateTime: string;
  reportedBy: string;
  deadlineICO: string; // 72 hours from discovery

  // Nature of breach
  nature: BreachNature[];
  description: string;

  // Data affected
  dataTypesAffected: string[];
  recordsAffected: number | null;
  involvesChildrensData: boolean;
  categoriesOfIndividuals: string[];

  // Assessment
  likelyConsequences: string;
  measuresTaken: string;
  riskLevel: RiskLevel;

  // Notification requirements (auto-calculated)
  icoNotificationRequired: boolean;
  individualNotificationRequired: boolean;
  ncgaaNotificationRequired: boolean;

  // Status tracking
  status: BreachStatus;
  icoNotifiedAt: string | null;
  ncgaaNotifiedAt: string | null;
  individualsNotifiedAt: string | null;

  // Audit trail
  timeline: TimelineEntry[];
  notes: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateBreachParams {
  discoveryDateTime: string;
  reportedBy: string;
  nature: BreachNature[];
  description: string;
  dataTypesAffected: string[];
  recordsAffected: number | null;
  involvesChildrensData: boolean;
  categoriesOfIndividuals: string[];
  likelyConsequences: string;
  measuresTaken: string;
  riskLevel: RiskLevel;
  ncgaaNotificationRequired: boolean;
}

// ─── In-memory store (replace with database in production) ──────────────

const breachLog: BreachRecord[] = [];

let idCounter = 1;

function generateId(): string {
  return `breach_${Date.now()}_${idCounter++}`;
}

function generateReferenceNumber(): string {
  const now = new Date();
  const datePart = now.toISOString().slice(0, 10).replace(/-/g, "");
  const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `BN-${datePart}-${randomPart}`;
}

// ─── Core functions ─────────────────────────────────────────────────────

/**
 * Calculate the 72-hour ICO notification deadline from discovery time.
 */
export function calculateDeadline(discoveryTime: string): string {
  const discovery = new Date(discoveryTime);
  const deadline = new Date(discovery.getTime() + 72 * 60 * 60 * 1000);
  return deadline.toISOString();
}

/**
 * Determine if ICO notification is required based on risk level.
 * ICO must be notified unless the breach is unlikely to result in a risk
 * to the rights and freedoms of individuals.
 */
export function isICONotificationRequired(riskLevel: RiskLevel): boolean {
  // Low risk = unlikely to result in risk to individuals, no notification needed
  // Medium/High = notification required
  return riskLevel !== "low";
}

/**
 * Determine if individual notification is required.
 * Required when the breach is likely to result in HIGH risk to individuals.
 */
export function isIndividualNotificationRequired(riskLevel: RiskLevel): boolean {
  return riskLevel === "high";
}

/**
 * Create a new breach record with auto-calculated fields.
 * Children's data breaches are automatically classified as HIGH risk.
 */
export function createBreachRecord(params: CreateBreachParams): BreachRecord {
  const now = new Date().toISOString();

  // Auto-escalate risk if children's data is involved
  const effectiveRiskLevel: RiskLevel = params.involvesChildrensData
    ? "high"
    : params.riskLevel;

  const record: BreachRecord = {
    id: generateId(),
    referenceNumber: generateReferenceNumber(),

    discoveryDateTime: params.discoveryDateTime,
    reportedBy: params.reportedBy,
    deadlineICO: calculateDeadline(params.discoveryDateTime),

    nature: params.nature,
    description: params.description,

    dataTypesAffected: params.dataTypesAffected,
    recordsAffected: params.recordsAffected,
    involvesChildrensData: params.involvesChildrensData,
    categoriesOfIndividuals: params.categoriesOfIndividuals,

    likelyConsequences: params.likelyConsequences,
    measuresTaken: params.measuresTaken,
    riskLevel: effectiveRiskLevel,

    icoNotificationRequired: isICONotificationRequired(effectiveRiskLevel),
    individualNotificationRequired:
      isIndividualNotificationRequired(effectiveRiskLevel),
    ncgaaNotificationRequired: params.ncgaaNotificationRequired,

    status: "recorded",
    icoNotifiedAt: null,
    ncgaaNotifiedAt: null,
    individualsNotifiedAt: null,

    timeline: [
      {
        timestamp: now,
        action: "Breach recorded",
        performedBy: params.reportedBy,
        notes: params.involvesChildrensData
          ? "Children's data involved - automatically escalated to HIGH risk."
          : undefined,
      },
    ],
    notes: [],
    createdAt: now,
    updatedAt: now,
  };

  breachLog.push(record);

  return record;
}

// ─── Query helpers ──────────────────────────────────────────────────────

export function getAllBreaches(): BreachRecord[] {
  return [...breachLog].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getBreachById(id: string): BreachRecord | undefined {
  return breachLog.find((b) => b.id === id);
}

export function updateBreach(
  id: string,
  updates: Partial<
    Pick<BreachRecord, "status" | "icoNotifiedAt" | "ncgaaNotifiedAt" | "individualsNotifiedAt">
  > & { timelineEntry?: TimelineEntry; note?: string }
): BreachRecord | undefined {
  const breach = breachLog.find((b) => b.id === id);
  if (!breach) return undefined;

  if (updates.status) breach.status = updates.status;
  if (updates.icoNotifiedAt) breach.icoNotifiedAt = updates.icoNotifiedAt;
  if (updates.ncgaaNotifiedAt) breach.ncgaaNotifiedAt = updates.ncgaaNotifiedAt;
  if (updates.individualsNotifiedAt)
    breach.individualsNotifiedAt = updates.individualsNotifiedAt;
  if (updates.timelineEntry) breach.timeline.push(updates.timelineEntry);
  if (updates.note) breach.notes.push(updates.note);

  breach.updatedAt = new Date().toISOString();
  return breach;
}

// ─── Notification generators ────────────────────────────────────────────

/**
 * Generate pre-filled ICO notification content for a breach.
 * Based on the ICO's standard breach notification form fields.
 */
export function generateICONotification(breachId: string): string | null {
  const breach = getBreachById(breachId);
  if (!breach) return null;

  const natureLabels: Record<BreachNature, string> = {
    confidentiality:
      "Confidentiality breach (unauthorised or accidental disclosure/access)",
    integrity:
      "Integrity breach (unauthorised or accidental alteration of data)",
    availability:
      "Availability breach (unauthorised or accidental loss of access/destruction)",
  };

  return `
ICO DATA BREACH NOTIFICATION
=============================
Reference: ${breach.referenceNumber}
Organisation: The English Hub
Data Protection Officer Contact: dpo@theenglishhub.app

1. DESCRIPTION OF THE BREACH
-----------------------------
Date and time breach discovered: ${new Date(breach.discoveryDateTime).toLocaleString("en-GB")}
Date and time this report submitted: ${new Date().toLocaleString("en-GB")}

Nature of breach:
${breach.nature.map((n) => `  - ${natureLabels[n]}`).join("\n")}

Description:
${breach.description}

2. DATA AND INDIVIDUALS AFFECTED
---------------------------------
Types of personal data affected:
${breach.dataTypesAffected.map((d) => `  - ${d}`).join("\n")}

Approximate number of records affected: ${breach.recordsAffected ?? "Unknown"}

Involves children's data: ${breach.involvesChildrensData ? "YES" : "No"}

Categories of individuals affected:
${breach.categoriesOfIndividuals.map((c) => `  - ${c}`).join("\n")}

3. LIKELY CONSEQUENCES
-----------------------
${breach.likelyConsequences}

4. MEASURES TAKEN
------------------
${breach.measuresTaken}

5. RISK ASSESSMENT
-------------------
Risk level: ${breach.riskLevel.toUpperCase()}
ICO notification required: ${breach.icoNotificationRequired ? "YES" : "No"}
Individual notification required: ${breach.individualNotificationRequired ? "YES" : "No"}

6. DPO DETAILS
---------------
Name: Data Protection Officer
Email: dpo@theenglishhub.app
Phone: [Contact number]
`.trim();
}

/**
 * Generate NCGAA (Qatar National Cyber Governance & Assurance Authority) notification.
 */
export function generateNCGAANotification(breachId: string): string | null {
  const breach = getBreachById(breachId);
  if (!breach) return null;

  return `
NCGAA DATA BREACH NOTIFICATION
================================
Reference: ${breach.referenceNumber}
Organisation: The English Hub (Qatar Operations)
Date of Report: ${new Date().toLocaleString("en-GB")}

BREACH SUMMARY
--------------
Discovery Date: ${new Date(breach.discoveryDateTime).toLocaleString("en-GB")}
Nature: ${breach.nature.join(", ")}
Description: ${breach.description}

DATA AFFECTED
-------------
Types: ${breach.dataTypesAffected.join(", ")}
Records affected: ${breach.recordsAffected ?? "Unknown"}
Children's data involved: ${breach.involvesChildrensData ? "YES" : "No"}
Categories of individuals: ${breach.categoriesOfIndividuals.join(", ")}

IMPACT ASSESSMENT
-----------------
Likely consequences: ${breach.likelyConsequences}
Risk level: ${breach.riskLevel.toUpperCase()}

REMEDIAL ACTIONS
----------------
${breach.measuresTaken}

CONTACT
-------
Data Protection Officer
The English Hub
Email: dpo@theenglishhub.app
`.trim();
}

/**
 * Generate notification text for affected individuals.
 */
export function generateIndividualNotification(breachId: string): string | null {
  const breach = getBreachById(breachId);
  if (!breach) return null;

  return `
Dear [Name],

We are writing to inform you of a personal data breach that may affect your information.

WHAT HAPPENED
${breach.description}

WHAT DATA WAS AFFECTED
The following types of personal data were involved:
${breach.dataTypesAffected.map((d) => `  - ${d}`).join("\n")}

WHAT THIS MEANS FOR YOU
${breach.likelyConsequences}

WHAT WE ARE DOING
${breach.measuresTaken}

WHAT YOU CAN DO
- Change your password for The English Hub immediately
- Be alert to any suspicious communications
- Monitor your accounts for unusual activity
${breach.involvesChildrensData ? "- If you are a parent or guardian, please discuss online safety with your child" : ""}

CONTACT US
If you have any questions or concerns, please contact our Data Protection Officer:
Email: dpo@theenglishhub.app

You also have the right to lodge a complaint with the Information Commissioner's Office (ICO):
Website: https://ico.org.uk/make-a-complaint/
Phone: 0303 123 1113

Yours sincerely,
The English Hub Data Protection Team
`.trim();
}

// ─── Deadline helpers ───────────────────────────────────────────────────

export interface DeadlineInfo {
  deadline: string;
  totalMs: number;
  remainingMs: number;
  hoursRemaining: number;
  isOverdue: boolean;
  urgency: "ok" | "warning" | "critical" | "overdue";
}

export function getDeadlineInfo(discoveryTime: string): DeadlineInfo {
  const deadline = calculateDeadline(discoveryTime);
  const now = new Date().getTime();
  const deadlineMs = new Date(deadline).getTime();
  const discoveryMs = new Date(discoveryTime).getTime();
  const totalMs = deadlineMs - discoveryMs;
  const remainingMs = deadlineMs - now;
  const hoursRemaining = remainingMs / (1000 * 60 * 60);
  const isOverdue = remainingMs <= 0;

  let urgency: DeadlineInfo["urgency"];
  if (isOverdue) {
    urgency = "overdue";
  } else if (hoursRemaining <= 12) {
    urgency = "critical";
  } else if (hoursRemaining <= 36) {
    urgency = "warning";
  } else {
    urgency = "ok";
  }

  return { deadline, totalMs, remainingMs, hoursRemaining, isOverdue, urgency };
}
