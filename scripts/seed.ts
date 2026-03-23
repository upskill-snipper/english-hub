/**
 * Database seed script for The English Hub
 *
 * Usage:
 *   npx ts-node scripts/seed.ts
 *   -- or --
 *   npx tsx scripts/seed.ts
 */

import { PrismaClient, Role, Subject, ExamBoard, ConsentType, ConsentMethod, ProfileVisibility } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...\n");

  // ── 1. Admin user ──────────────────────────────────────────
  const adminPassword = await hash("Admin123!Secure", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@theenglishhub.co.uk" },
    update: {},
    create: {
      email: "admin@theenglishhub.co.uk",
      passwordHash: adminPassword,
      firstName: "Admin",
      lastName: "User",
      dateOfBirth: new Date("1990-01-15"),
      role: Role.ADMIN,
      isMinor: false,
      country: "GB",
    },
  });
  console.log(`  Admin user: ${admin.email} (${admin.id})`);

  // ── 2. Test student (age 16, minor) ────────────────────────
  const studentPassword = await hash("Student123!Test", 12);
  const studentDob = new Date();
  studentDob.setFullYear(studentDob.getFullYear() - 16);

  const student = await prisma.user.upsert({
    where: { email: "student@example.com" },
    update: {},
    create: {
      email: "student@example.com",
      passwordHash: studentPassword,
      firstName: "Alex",
      lastName: "Thompson",
      dateOfBirth: studentDob,
      school: "Riverside Academy",
      role: Role.STUDENT,
      isMinor: true,
      country: "GB",
    },
  });
  console.log(`  Student user: ${student.email} (${student.id})`);

  // ── 3. Consents for both users ─────────────────────────────
  const requiredConsents: ConsentType[] = [
    ConsentType.TERMS,
    ConsentType.PRIVACY,
    ConsentType.AI_PROCESSING,
  ];

  for (const user of [admin, student]) {
    for (const consentType of requiredConsents) {
      await prisma.consent.upsert({
        where: {
          id: `seed-${user.id}-${consentType}`,
        },
        update: {},
        create: {
          id: `seed-${user.id}-${consentType}`,
          userId: user.id,
          consentType,
          version: "1.0",
          granted: true,
          method: ConsentMethod.ACTIVE_CHECKBOX,
          ipAddress: "127.0.0.1",
        },
      });
    }
  }

  // Marketing consent -- denied for minor, granted for admin
  await prisma.consent.upsert({
    where: { id: `seed-${student.id}-MARKETING` },
    update: {},
    create: {
      id: `seed-${student.id}-MARKETING`,
      userId: student.id,
      consentType: ConsentType.MARKETING,
      version: "1.0",
      granted: false,
      method: ConsentMethod.ACTIVE_CHECKBOX,
      ipAddress: "127.0.0.1",
    },
  });

  await prisma.consent.upsert({
    where: { id: `seed-${admin.id}-MARKETING` },
    update: {},
    create: {
      id: `seed-${admin.id}-MARKETING`,
      userId: admin.id,
      consentType: ConsentType.MARKETING,
      version: "1.0",
      granted: true,
      method: ConsentMethod.ACTIVE_CHECKBOX,
      ipAddress: "127.0.0.1",
    },
  });

  console.log("  Consent records created");

  // ── 4. Privacy settings (high privacy defaults) ────────────
  await prisma.privacySettings.upsert({
    where: { userId: student.id },
    update: {},
    create: {
      userId: student.id,
      analyticsEnabled: false,
      marketingEnabled: false,
      aiTrainingOptIn: false,
      schoolSharingEnabled: false,
      researchDataEnabled: false,
      profileVisibility: ProfileVisibility.PRIVATE,
    },
  });

  await prisma.privacySettings.upsert({
    where: { userId: admin.id },
    update: {},
    create: {
      userId: admin.id,
      analyticsEnabled: false,
      marketingEnabled: false,
      aiTrainingOptIn: false,
      schoolSharingEnabled: false,
      researchDataEnabled: false,
      profileVisibility: ProfileVisibility.PRIVATE,
    },
  });

  console.log("  Privacy settings created (all defaults HIGH)");

  // ── 5. Sample essay with AI feedback ───────────────────────
  const essay = await prisma.essay.upsert({
    where: { id: "seed-essay-001" },
    update: {},
    create: {
      id: "seed-essay-001",
      userId: student.id,
      title: "The Role of Lady Macbeth in Shakespeare's Macbeth",
      content: `Lady Macbeth is one of Shakespeare's most compelling characters. From the moment she reads Macbeth's letter in Act 1 Scene 5, she demonstrates a ruthless ambition that drives much of the play's action.

Her famous "unsex me here" soliloquy reveals her desire to shed her femininity in order to carry out the murder of King Duncan. This challenges the Jacobean audience's expectations of women and makes her a deeply transgressive figure.

However, Shakespeare also shows Lady Macbeth's psychological deterioration. By Act 5, her sleepwalking scene — "Out, damned spot!" — reveals the guilt that has consumed her. This dramatic contrast between her earlier strength and later fragility makes her a tragic figure in her own right.

The relationship between Macbeth and Lady Macbeth also shifts throughout the play. Initially she is the dominant partner, but as Macbeth gains confidence in his tyranny, she becomes increasingly isolated. Their relationship mirrors the play's broader themes of ambition, guilt, and the corrupting nature of power.`,
      subject: Subject.LITERATURE,
      examBoard: ExamBoard.AQA,
    },
  });

  await prisma.aIFeedback.upsert({
    where: { essayId: essay.id },
    update: {},
    create: {
      essayId: essay.id,
      overallScore: 7.5,
      grammarScore: 8.0,
      structureScore: 7.0,
      argumentScore: 7.5,
      vocabularyScore: 7.5,
      feedbackText: `This is a well-structured essay that demonstrates good understanding of Lady Macbeth's character arc. Your analysis of the "unsex me here" soliloquy shows strong engagement with the text.

To improve: consider embedding more short quotations throughout your paragraphs, and link your points more explicitly to the assessment objectives (AO1: response to text, AO2: language/structure analysis, AO3: context).

Your final paragraph on the relationship shift is promising but could be developed further with specific textual evidence.`,
      criteria: "AQA GCSE English Literature: Shakespeare (Macbeth). Assessment Objectives: AO1, AO2, AO3, AO4.",
      limitations: "This feedback is generated by AI and should be treated as a guide, not a definitive assessment. Scores are indicative and may not reflect actual exam grades. A human reviewer can provide additional perspective via the review request feature.",
      modelVersion: "gpt-4o-2024-08-06",
    },
  });

  console.log(`  Sample essay created: "${essay.title}"`);
  console.log("  AI feedback attached");

  // ── 6. Audit log entries ───────────────────────────────────
  await prisma.auditLog.create({
    data: {
      userId: admin.id,
      action: "SEED_DATABASE",
      resource: "System",
      resourceId: "seed",
      details: { seededAt: new Date().toISOString(), version: "1.0" },
      ipAddress: "127.0.0.1",
    },
  });

  console.log("  Audit log entry created");
  console.log("\nSeed completed successfully.");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
