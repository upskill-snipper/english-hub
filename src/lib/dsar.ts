import { prisma } from "@/lib/prisma";

// ─── Types ─────────────────────────────────────────────────────────────

export type DSARType = "ACCESS" | "PORTABILITY" | "ERASURE" | "RECTIFICATION";
export type DSARStatus = "PENDING" | "PROCESSING" | "COMPLETED" | "REFUSED";

export interface CompiledUserData {
  exportedAt: string;
  dataController: {
    name: string;
    contact: string;
  };
  legalBasis: string;
  profile: Record<string, unknown>;
  essays: Record<string, unknown>[];
  aiFeedback: Record<string, unknown>[];
  consents: Record<string, unknown>[];
  privacySettings: Record<string, unknown> | null;
  subscription: Record<string, unknown> | null;
  dataAccessRequests: Record<string, unknown>[];
  auditLog: Record<string, unknown>[];
}

// ─── Reference Number Generator ────────────────────────────────────────

export function generateDSARReference(): string {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, "");
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `DSAR-${dateStr}-${random}`;
}

// ─── Deadline Calculator ───────────────────────────────────────────────

/** UK GDPR requires response within one calendar month */
export function calculateDeadline(requestedAt: Date): Date {
  const deadline = new Date(requestedAt);
  deadline.setMonth(deadline.getMonth() + 1);
  return deadline;
}

/** Returns the number of calendar days remaining until the deadline */
export function daysUntilDeadline(requestedAt: Date): number {
  const deadline = calculateDeadline(requestedAt);
  const now = new Date();
  const diffMs = deadline.getTime() - now.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

// ─── Compile User Data (Article 15 / Article 20) ──────────────────────

/**
 * Gathers all personal data held about a user.
 * Used for both ACCESS (Art. 15) and PORTABILITY (Art. 20) requests.
 */
export async function compileUserData(
  userId: string
): Promise<CompiledUserData> {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    include: {
      consents: true,
      essays: {
        include: {
          aiFeedback: true,
        },
      },
      subscription: true,
      dataAccessRequests: true,
      auditLogs: {
        orderBy: { timestamp: "desc" },
        take: 500,
      },
      privacySettings: true,
    },
  });

  const aiFeedback = user.essays
    .filter((e) => e.aiFeedback)
    .map((e) => ({
      essayId: e.id,
      essayTitle: e.title,
      overallScore: e.aiFeedback!.overallScore,
      grammarScore: e.aiFeedback!.grammarScore,
      structureScore: e.aiFeedback!.structureScore,
      argumentScore: e.aiFeedback!.argumentScore,
      vocabularyScore: e.aiFeedback!.vocabularyScore,
      feedbackText: e.aiFeedback!.feedbackText,
      criteria: e.aiFeedback!.criteria,
      limitations: e.aiFeedback!.limitations,
      modelVersion: e.aiFeedback!.modelVersion,
      createdAt: e.aiFeedback!.createdAt.toISOString(),
    }));

  return {
    exportedAt: new Date().toISOString(),
    dataController: {
      name: "The English Hub",
      contact: "dpo@theenglishhub.app",
    },
    legalBasis:
      "This data is provided under UK GDPR Article 15 (Right of Access) and/or Article 20 (Right to Data Portability).",
    profile: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth.toISOString(),
      school: user.school,
      country: user.country,
      role: user.role,
      isMinor: user.isMinor,
      accountStatus: user.accountStatus,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    },
    essays: user.essays.map((e) => ({
      id: e.id,
      title: e.title,
      content: e.content,
      subject: e.subject,
      examBoard: e.examBoard,
      createdAt: e.createdAt.toISOString(),
    })),
    aiFeedback,
    consents: user.consents.map((c) => ({
      type: c.consentType,
      version: c.version,
      granted: c.granted,
      grantedAt: c.grantedAt.toISOString(),
      withdrawnAt: c.withdrawnAt?.toISOString() ?? null,
      method: c.method,
    })),
    privacySettings: user.privacySettings
      ? {
          analyticsEnabled: user.privacySettings.analyticsEnabled,
          marketingEnabled: user.privacySettings.marketingEnabled,
          aiTrainingOptIn: user.privacySettings.aiTrainingOptIn,
          schoolSharingEnabled: user.privacySettings.schoolSharingEnabled,
          researchDataEnabled: user.privacySettings.researchDataEnabled,
          profileVisibility: user.privacySettings.profileVisibility,
        }
      : null,
    subscription: user.subscription
      ? {
          plan: user.subscription.plan,
          status: user.subscription.status,
          currentPeriodStart:
            user.subscription.currentPeriodStart.toISOString(),
          currentPeriodEnd: user.subscription.currentPeriodEnd.toISOString(),
          cancelledAt: user.subscription.cancelledAt?.toISOString() ?? null,
          coolingOffWaived: user.subscription.coolingOffWaived,
        }
      : null,
    dataAccessRequests: user.dataAccessRequests.map((d) => ({
      id: d.id,
      type: d.type,
      status: d.status,
      requestedAt: d.requestedAt.toISOString(),
      completedAt: d.completedAt?.toISOString() ?? null,
    })),
    auditLog: user.auditLogs.map((a) => ({
      action: a.action,
      resource: a.resource,
      resourceId: a.resourceId,
      timestamp: a.timestamp.toISOString(),
    })),
  };
}

// ─── Anonymise User (Article 17 - Right to Erasure) ───────────────────

/**
 * Anonymises user data instead of hard-deleting, preserving referential
 * integrity and any records we are legally required to retain.
 *
 * Per UK GDPR Article 17(3), we may retain data where processing is
 * necessary for compliance with a legal obligation or for the
 * establishment, exercise, or defence of legal claims.
 */
export async function anonymiseUser(userId: string): Promise<void> {
  const anonymisedEmail = `deleted-${userId}@anonymised.invalid`;
  const anonymisedName = "Deleted User";

  await prisma.$transaction(async (tx) => {
    // 1. Anonymise profile data
    await tx.user.update({
      where: { id: userId },
      data: {
        email: anonymisedEmail,
        firstName: anonymisedName,
        lastName: "",
        passwordHash: "",
        school: null,
        accountStatus: "DELETED",
        deletedAt: new Date(),
      },
    });

    // 2. Remove essay content but keep metadata for audit
    await tx.essay.updateMany({
      where: { userId },
      data: {
        content: "[Content removed pursuant to erasure request]",
        title: "[Removed]",
        deletedAt: new Date(),
      },
    });

    // 3. Remove privacy settings
    await tx.privacySettings.deleteMany({
      where: { userId },
    });

    // 4. Cancel any active subscription
    const subscription = await tx.subscription.findUnique({
      where: { userId },
    });
    if (subscription && subscription.status === "ACTIVE") {
      await tx.subscription.update({
        where: { userId },
        data: {
          status: "CANCELLED",
          cancelledAt: new Date(),
        },
      });
    }

    // 5. Create audit log entry for the erasure
    await tx.auditLog.create({
      data: {
        userId: null, // Disassociate from user
        action: "USER_DATA_ERASED",
        resource: "User",
        resourceId: userId,
        details: {
          reason: "DSAR erasure request (UK GDPR Article 17)",
          anonymisedAt: new Date().toISOString(),
        },
        ipAddress: "system",
      },
    });
  });
}

// ─── Deadline Checker ──────────────────────────────────────────────────

/**
 * Returns all DSARs that are approaching or past their 30-day deadline.
 * Intended to be called by a scheduled job (e.g. cron).
 */
export async function checkDeadlines(): Promise<
  {
    id: string;
    userId: string;
    type: string;
    requestedAt: Date;
    deadline: Date;
    daysRemaining: number;
    isOverdue: boolean;
  }[]
> {
  const pendingRequests = await prisma.dataAccessRequest.findMany({
    where: {
      status: { in: ["PENDING", "PROCESSING"] },
    },
    include: {
      user: {
        select: { email: true, firstName: true },
      },
    },
    orderBy: { requestedAt: "asc" },
  });

  return pendingRequests.map((req) => {
    const deadline = calculateDeadline(req.requestedAt);
    const remaining = daysUntilDeadline(req.requestedAt);
    return {
      id: req.id,
      userId: req.userId,
      type: req.type,
      requestedAt: req.requestedAt,
      deadline,
      daysRemaining: remaining,
      isOverdue: remaining < 0,
    };
  });
}

// ─── DSAR Email Templates ──────────────────────────────────────────────

export function buildAcknowledgementEmail(
  firstName: string,
  referenceNumber: string,
  type: DSARType,
  deadline: Date
): { subject: string; html: string } {
  const typeLabels: Record<DSARType, string> = {
    ACCESS: "access your personal data (Article 15)",
    PORTABILITY: "receive your data in a portable format (Article 20)",
    ERASURE: "erase your personal data (Article 17)",
    RECTIFICATION: "rectify your personal data (Article 16)",
  };

  const subject = `Your data request has been received - ${referenceNumber}`;
  const html = `
    <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background-color: #1A5276; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">The English Hub</h1>
      </div>
      <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
        <p>Dear ${firstName},</p>
        <p>We have received your request to <strong>${typeLabels[type]}</strong>.</p>
        <div style="background-color: #f9fafb; border-radius: 8px; padding: 16px; margin: 16px 0;">
          <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">Your reference number</p>
          <p style="margin: 0; font-size: 18px; font-family: monospace; font-weight: 600; color: #1A5276;">${referenceNumber}</p>
        </div>
        <p>Under UK GDPR, we are required to respond to your request within <strong>one calendar month</strong>. We aim to complete your request by:</p>
        <p style="font-weight: 600; color: #1A5276;">${deadline.toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
        <p>You can track the status of your request at any time by visiting your <a href="https://theenglishhub.app/dashboard/data-requests" style="color: #2E86C1;">Data Requests</a> page.</p>
        <p>If you have any questions, contact our Data Protection Officer at <a href="mailto:dpo@theenglishhub.app" style="color: #2E86C1;">dpo@theenglishhub.app</a>.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p style="font-size: 12px; color: #9ca3af;">
          This email was sent in response to your data subject access request.
          The English Hub processes your data in accordance with the UK General Data Protection Regulation (UK GDPR)
          and the Data Protection Act 2018.
        </p>
      </div>
    </div>
  `;

  return { subject, html };
}
