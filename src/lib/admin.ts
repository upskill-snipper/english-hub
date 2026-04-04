import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { isSiteAdmin } from "@/lib/site-admin";

// ─── Types ──────────────────────────────────────────────────────────────

export interface AdminUserSummary {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  country: string;
  role: string;
  isMinor: boolean;
  accountStatus: string;
  school: string | null;
  createdAt: string;
  subscriptionStatus: string | null;
  essayCount: number;
}

export interface AdminUserDetail {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  country: string;
  role: string;
  isMinor: boolean;
  accountStatus: string;
  school: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  age: number;
  subscription: {
    plan: string;
    status: string;
    currentPeriodStart: string;
    currentPeriodEnd: string;
    cancelledAt: string | null;
    coolingOffWaived: boolean;
    paymentCount: number;
  } | null;
  privacySettings: {
    analyticsEnabled: boolean;
    marketingEnabled: boolean;
    aiTrainingOptIn: boolean;
    schoolSharingEnabled: boolean;
    researchDataEnabled: boolean;
    profileVisibility: string;
  } | null;
  consents: {
    id: string;
    consentType: string;
    version: string;
    granted: boolean;
    grantedAt: string;
    withdrawnAt: string | null;
    method: string;
  }[];
  essayCount: number;
  humanReviewRequests: {
    id: string;
    referenceNumber: string;
    reason: string;
    status: string;
    submittedAt: string;
    reviewedAt: string | null;
  }[];
  dataAccessRequests: {
    id: string;
    type: string;
    status: string;
    requestedAt: string;
    completedAt: string | null;
  }[];
  auditLogs: {
    id: string;
    action: string;
    resource: string;
    resourceId: string;
    timestamp: string;
    details: unknown;
  }[];
}

// ─── Admin Role Check ───────────────────────────────────────────────────

/**
 * Validates the current session has ADMIN role.
 * Returns the admin user record or throws an error.
 */
export async function requireAdmin(): Promise<{
  id: string;
  email: string;
  role: string;
}> {
  const session = await getServerSession();

  if (!session?.user?.email) {
    throw new AdminAuthError("Authentication required", 401);
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true, email: true, role: true },
  });

  if (!user) {
    throw new AdminAuthError("User not found", 404);
  }

  if (user.role !== "ADMIN" && !isSiteAdmin(user.email)) {
    throw new AdminAuthError("Admin access required", 403);
  }

  return user;
}

export class AdminAuthError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "AdminAuthError";
    this.statusCode = statusCode;
  }
}

// ─── Get User Details ───────────────────────────────────────────────────

/**
 * Compiles a full user profile for admin viewing.
 */
export async function getUserDetails(
  userId: string
): Promise<AdminUserDetail> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      subscription: true,
      privacySettings: true,
      consents: {
        orderBy: { grantedAt: "desc" },
      },
      humanReviewRequests: {
        orderBy: { submittedAt: "desc" },
        select: {
          id: true,
          referenceNumber: true,
          reason: true,
          status: true,
          submittedAt: true,
          reviewedAt: true,
        },
      },
      dataAccessRequests: {
        orderBy: { requestedAt: "desc" },
      },
      auditLogs: {
        orderBy: { timestamp: "desc" },
        take: 100,
      },
      _count: {
        select: {
          essays: { where: { deletedAt: null } },
        },
      },
    },
  });

  if (!user) {
    throw new AdminAuthError("User not found", 404);
  }

  // Calculate age
  const today = new Date();
  const dob = new Date(user.dateOfBirth);
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    dateOfBirth: user.dateOfBirth.toISOString(),
    country: user.country,
    role: user.role,
    isMinor: user.isMinor,
    accountStatus: user.accountStatus,
    school: user.school,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
    deletedAt: user.deletedAt?.toISOString() ?? null,
    age,
    subscription: user.subscription
      ? {
          plan: user.subscription.plan,
          status: user.subscription.status,
          currentPeriodStart:
            user.subscription.currentPeriodStart.toISOString(),
          currentPeriodEnd:
            user.subscription.currentPeriodEnd.toISOString(),
          cancelledAt:
            user.subscription.cancelledAt?.toISOString() ?? null,
          coolingOffWaived: user.subscription.coolingOffWaived,
          paymentCount: user.subscription.paymentCount,
        }
      : null,
    privacySettings: user.privacySettings
      ? {
          analyticsEnabled: user.privacySettings.analyticsEnabled,
          marketingEnabled: user.privacySettings.marketingEnabled,
          aiTrainingOptIn: user.privacySettings.aiTrainingOptIn,
          schoolSharingEnabled:
            user.privacySettings.schoolSharingEnabled,
          researchDataEnabled:
            user.privacySettings.researchDataEnabled,
          profileVisibility: user.privacySettings.profileVisibility,
        }
      : null,
    consents: user.consents.map((c) => ({
      id: c.id,
      consentType: c.consentType,
      version: c.version,
      granted: c.granted,
      grantedAt: c.grantedAt.toISOString(),
      withdrawnAt: c.withdrawnAt?.toISOString() ?? null,
      method: c.method,
    })),
    essayCount: user._count.essays,
    humanReviewRequests: user.humanReviewRequests.map((r) => ({
      id: r.id,
      referenceNumber: r.referenceNumber,
      reason: r.reason,
      status: r.status,
      submittedAt: r.submittedAt.toISOString(),
      reviewedAt: r.reviewedAt?.toISOString() ?? null,
    })),
    dataAccessRequests: user.dataAccessRequests.map((d) => ({
      id: d.id,
      type: d.type,
      status: d.status,
      requestedAt: d.requestedAt.toISOString(),
      completedAt: d.completedAt?.toISOString() ?? null,
    })),
    auditLogs: user.auditLogs.map((a) => ({
      id: a.id,
      action: a.action,
      resource: a.resource,
      resourceId: a.resourceId,
      timestamp: a.timestamp.toISOString(),
      details: a.details,
    })),
  };
}

// ─── Suspend User ───────────────────────────────────────────────────────

/**
 * Suspends a user account and logs the action to the audit trail.
 */
export async function suspendUser(
  userId: string,
  reason: string,
  adminId: string,
  ipAddress: string = "system"
): Promise<void> {
  await prisma.$transaction(async (tx) => {
    const user = await tx.user.findUnique({
      where: { id: userId },
      select: { accountStatus: true },
    });

    if (!user) {
      throw new AdminAuthError("User not found", 404);
    }

    if (user.accountStatus === "DELETED") {
      throw new Error("Cannot suspend a deleted account");
    }

    if (user.accountStatus === "SUSPENDED") {
      throw new Error("Account is already suspended");
    }

    await tx.user.update({
      where: { id: userId },
      data: { accountStatus: "SUSPENDED" },
    });

    await tx.auditLog.create({
      data: {
        userId: adminId,
        action: "ADMIN_USER_SUSPENDED",
        resource: "User",
        resourceId: userId,
        details: {
          reason,
          targetUserId: userId,
          performedBy: adminId,
        },
        ipAddress,
      },
    });
  });
}

// ─── Unsuspend User ─────────────────────────────────────────────────────

/**
 * Reactivates a suspended user account.
 */
export async function unsuspendUser(
  userId: string,
  adminId: string,
  ipAddress: string = "system"
): Promise<void> {
  await prisma.$transaction(async (tx) => {
    const user = await tx.user.findUnique({
      where: { id: userId },
      select: { accountStatus: true },
    });

    if (!user) {
      throw new AdminAuthError("User not found", 404);
    }

    if (user.accountStatus !== "SUSPENDED") {
      throw new Error("Account is not suspended");
    }

    await tx.user.update({
      where: { id: userId },
      data: { accountStatus: "ACTIVE" },
    });

    await tx.auditLog.create({
      data: {
        userId: adminId,
        action: "ADMIN_USER_UNSUSPENDED",
        resource: "User",
        resourceId: userId,
        details: {
          targetUserId: userId,
          performedBy: adminId,
        },
        ipAddress,
      },
    });
  });
}

// ─── Process Account Deletion ───────────────────────────────────────────

/**
 * Performs an immediate soft deletion of a user account.
 * Anonymises personal data but retains audit records per UK GDPR Art. 17(3).
 */
export async function processAccountDeletion(
  userId: string,
  adminId: string,
  ipAddress: string = "system"
): Promise<void> {
  const anonymisedEmail = `deleted-${userId}@anonymised.invalid`;

  await prisma.$transaction(async (tx) => {
    const user = await tx.user.findUnique({
      where: { id: userId },
      select: { accountStatus: true },
    });

    if (!user) {
      throw new AdminAuthError("User not found", 404);
    }

    if (user.accountStatus === "DELETED") {
      throw new Error("Account is already deleted");
    }

    // 1. Anonymise profile data
    await tx.user.update({
      where: { id: userId },
      data: {
        email: anonymisedEmail,
        firstName: "Deleted User",
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
        content: "[Content removed pursuant to account deletion]",
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

    // 5. Create audit log entry
    await tx.auditLog.create({
      data: {
        userId: adminId,
        action: "ADMIN_ACCOUNT_DELETED",
        resource: "User",
        resourceId: userId,
        details: {
          reason: "Admin-initiated account deletion",
          targetUserId: userId,
          performedBy: adminId,
          anonymisedAt: new Date().toISOString(),
        },
        ipAddress,
      },
    });
  });
}
