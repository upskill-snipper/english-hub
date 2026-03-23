/**
 * Compliance check script for The English Hub
 *
 * Verifies that the application data meets UK GDPR,
 * Age-Appropriate Design Code, and Consumer Rights Act requirements.
 *
 * Usage:
 *   npx ts-node scripts/check-compliance.ts
 *   -- or --
 *   npx tsx scripts/check-compliance.ts
 */

import { PrismaClient, ConsentType } from "@prisma/client";

const prisma = new PrismaClient();

interface CheckResult {
  name: string;
  passed: boolean;
  details: string;
}

const results: CheckResult[] = [];

function check(name: string, passed: boolean, details: string) {
  results.push({ name, passed, details });
}

async function main() {
  console.log("=".repeat(60));
  console.log("  THE ENGLISH HUB — COMPLIANCE REPORT");
  console.log("  Generated:", new Date().toISOString());
  console.log("=".repeat(60));
  console.log();

  // ── 1. Privacy defaults are HIGH ──────────────────────────
  const allPrivacySettings = await prisma.privacySettings.findMany();
  const nonHighDefaults = allPrivacySettings.filter(
    (ps) =>
      ps.analyticsEnabled ||
      ps.marketingEnabled ||
      ps.aiTrainingOptIn ||
      ps.researchDataEnabled ||
      ps.profileVisibility !== "PRIVATE"
  );

  check(
    "Privacy defaults are HIGH for all users",
    nonHighDefaults.length === 0,
    nonHighDefaults.length === 0
      ? `All ${allPrivacySettings.length} user(s) have high-privacy defaults`
      : `${nonHighDefaults.length} user(s) have non-default privacy settings`
  );

  // ── 2. Users without privacy settings ─────────────────────
  const usersWithoutPrivacy = await prisma.user.findMany({
    where: { privacySettings: null, accountStatus: "ACTIVE" },
    select: { id: true, email: true },
  });

  check(
    "All active users have privacy settings",
    usersWithoutPrivacy.length === 0,
    usersWithoutPrivacy.length === 0
      ? "All active users have privacy settings records"
      : `${usersWithoutPrivacy.length} user(s) missing privacy settings: ${usersWithoutPrivacy.map((u) => u.email).join(", ")}`
  );

  // ── 3. Consent records exist for all users ────────────────
  const requiredConsents: ConsentType[] = [
    ConsentType.TERMS,
    ConsentType.PRIVACY,
    ConsentType.AI_PROCESSING,
  ];

  const activeUsers = await prisma.user.findMany({
    where: { accountStatus: "ACTIVE" },
    include: { consents: true },
  });

  const usersMissingConsent: string[] = [];
  for (const user of activeUsers) {
    const grantedTypes = user.consents
      .filter((c) => c.granted && !c.withdrawnAt)
      .map((c) => c.consentType);
    const missing = requiredConsents.filter((rt) => !grantedTypes.includes(rt));
    if (missing.length > 0) {
      usersMissingConsent.push(`${user.email} (missing: ${missing.join(", ")})`);
    }
  }

  check(
    "Required consents recorded for all users",
    usersMissingConsent.length === 0,
    usersMissingConsent.length === 0
      ? `All ${activeUsers.length} active user(s) have required consents`
      : `Users missing consent: ${usersMissingConsent.join("; ")}`
  );

  // ── 4. No marketing for minors ────────────────────────────
  const minorsWithMarketing = await prisma.user.findMany({
    where: {
      isMinor: true,
      accountStatus: "ACTIVE",
      OR: [
        { privacySettings: { marketingEnabled: true } },
        {
          consents: {
            some: {
              consentType: ConsentType.MARKETING,
              granted: true,
              withdrawnAt: null,
            },
          },
        },
      ],
    },
    select: { id: true, email: true },
  });

  check(
    "No marketing enabled for minors",
    minorsWithMarketing.length === 0,
    minorsWithMarketing.length === 0
      ? "No minors have marketing enabled"
      : `${minorsWithMarketing.length} minor(s) have marketing enabled: ${minorsWithMarketing.map((u) => u.email).join(", ")}`
  );

  // ── 5. Data retention — soft-deleted users ────────────────
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const overdueDeleted = await prisma.user.findMany({
    where: {
      accountStatus: "DELETED",
      deletedAt: { lt: thirtyDaysAgo },
    },
    select: { id: true, email: true, deletedAt: true },
  });

  check(
    "Data retention: no overdue soft-deleted records (>30 days)",
    overdueDeleted.length === 0,
    overdueDeleted.length === 0
      ? "No soft-deleted users are overdue for permanent erasure"
      : `${overdueDeleted.length} user(s) deleted >30 days ago still in database — schedule permanent erasure`
  );

  // ── 6. AI feedback includes limitations disclosure ────────
  const feedbackWithoutLimitations = await prisma.aIFeedback.findMany({
    where: {
      OR: [{ limitations: "" }, { limitations: null as any }],
    },
  });

  check(
    "AI feedback includes limitations disclosure",
    feedbackWithoutLimitations.length === 0,
    feedbackWithoutLimitations.length === 0
      ? "All AI feedback records include limitations text"
      : `${feedbackWithoutLimitations.length} feedback record(s) missing limitations disclosure`
  );

  // ── 7. Safeguarding reports — no unassigned HIGH/CRITICAL ─
  const unassignedCritical = await prisma.safeguardingReport.findMany({
    where: {
      severity: { in: ["HIGH", "CRITICAL"] },
      assignedTo: null,
      status: "OPEN",
    },
  });

  check(
    "No unassigned HIGH/CRITICAL safeguarding reports",
    unassignedCritical.length === 0,
    unassignedCritical.length === 0
      ? "All high-severity safeguarding reports are assigned"
      : `${unassignedCritical.length} unassigned HIGH/CRITICAL report(s) require immediate attention`
  );

  // ── 8. Pending data access requests within SLA ────────────
  const thirtyDaysAgoDate = new Date();
  thirtyDaysAgoDate.setDate(thirtyDaysAgoDate.getDate() - 30);

  const overdueRequests = await prisma.dataAccessRequest.findMany({
    where: {
      status: { in: ["PENDING", "PROCESSING"] },
      requestedAt: { lt: thirtyDaysAgoDate },
    },
  });

  check(
    "Data access requests within 30-day SLA",
    overdueRequests.length === 0,
    overdueRequests.length === 0
      ? "All data access requests are within the 30-day response window"
      : `${overdueRequests.length} request(s) exceed the 30-day UK GDPR response deadline`
  );

  // ── Print report ──────────────────────────────────────────
  console.log("CHECK RESULTS:");
  console.log("-".repeat(60));

  let passed = 0;
  let failed = 0;

  for (const r of results) {
    const status = r.passed ? "PASS" : "FAIL";
    const icon = r.passed ? "[OK]" : "[!!]";
    console.log(`\n${icon} ${status}: ${r.name}`);
    console.log(`    ${r.details}`);
    if (r.passed) passed++;
    else failed++;
  }

  console.log("\n" + "=".repeat(60));
  console.log(`  TOTAL: ${results.length} checks | ${passed} passed | ${failed} failed`);
  console.log("=".repeat(60));

  if (failed > 0) {
    console.log("\nCompliance issues detected. Review the failures above.");
    process.exit(1);
  } else {
    console.log("\nAll compliance checks passed.");
    process.exit(0);
  }
}

main()
  .catch((e) => {
    console.error("Compliance check failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
