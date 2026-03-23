import { prisma } from "@/lib/prisma";

// ─── Constants ──────────────────────────────────────────────────────────

const INVITE_CODE_LENGTH = 8;
const INVITE_EXPIRY_DAYS = 7;
const INVITE_CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I to avoid confusion

// ─── Types ──────────────────────────────────────────────────────────────

export interface ParentInvite {
  id: string;
  code: string;
  studentId: string;
  expiresAt: Date;
  usedAt: Date | null;
  usedByParentId: string | null;
  createdAt: Date;
}

export interface LinkedParent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedAt: Date;
}

export interface LinkedStudent {
  id: string;
  firstName: string;
  lastName: string;
  school: string | null;
  linkedAt: Date;
  hasActiveSubscription: boolean;
}

// ─── generateInviteCode ─────────────────────────────────────────────────

/**
 * Generates a cryptographically random 8-character invite code.
 * Uses characters that are unambiguous (no 0/O/1/I).
 */
export function generateInviteCode(): string {
  const array = new Uint8Array(INVITE_CODE_LENGTH);
  crypto.getRandomValues(array);

  let code = "";
  for (let i = 0; i < INVITE_CODE_LENGTH; i++) {
    code += INVITE_CODE_CHARS[array[i] % INVITE_CODE_CHARS.length];
  }
  return code;
}

// ─── getInviteExpiry ────────────────────────────────────────────────────

/**
 * Returns the expiry date for a new invite (7 days from now).
 */
export function getInviteExpiry(): Date {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + INVITE_EXPIRY_DAYS);
  return expiry;
}

// ─── createInvite ───────────────────────────────────────────────────────

/**
 * Creates a new parent invite for a student. Invalidates any existing
 * unused invites for that student before creating a new one.
 */
export async function createInvite(studentId: string): Promise<ParentInvite> {
  // Invalidate existing unused invites for this student
  await prisma.parentInvite.updateMany({
    where: {
      studentId,
      usedAt: null,
    },
    data: {
      expiresAt: new Date(), // expire immediately
    },
  });

  const code = generateInviteCode();
  const expiresAt = getInviteExpiry();

  const invite = await prisma.parentInvite.create({
    data: {
      code,
      studentId,
      expiresAt,
    },
  });

  return invite as ParentInvite;
}

// ─── validateInviteCode ─────────────────────────────────────────────────

/**
 * Validates an invite code and returns the invite with student details
 * if valid. Returns null if the code is invalid, expired, or already used.
 */
export async function validateInviteCode(code: string): Promise<{
  invite: ParentInvite;
  student: {
    id: string;
    firstName: string;
    school: string | null;
  };
} | null> {
  const invite = await prisma.parentInvite.findUnique({
    where: { code: code.toUpperCase() },
    include: {
      student: {
        select: {
          id: true,
          firstName: true,
          school: true,
          accountStatus: true,
        },
      },
    },
  });

  if (!invite) return null;
  if (invite.usedAt) return null;
  if (invite.expiresAt < new Date()) return null;
  if (invite.student.accountStatus !== "ACTIVE") return null;

  return {
    invite: invite as unknown as ParentInvite,
    student: {
      id: invite.student.id,
      firstName: invite.student.firstName,
      school: invite.student.school,
    },
  };
}

// ─── linkParentToStudent ────────────────────────────────────────────────

/**
 * Creates a parent-student link. Updates the student's parentId field
 * and marks the invite as used.
 *
 * Throws if the parent is already linked to this student.
 */
export async function linkParentToStudent(
  parentId: string,
  studentId: string,
  inviteCode?: string
): Promise<void> {
  // Verify parent exists and is a PARENT role
  const parent = await prisma.user.findUnique({
    where: { id: parentId },
    select: { id: true, role: true, accountStatus: true },
  });

  if (!parent || parent.role !== "PARENT" || parent.accountStatus !== "ACTIVE") {
    throw new Error("INVALID_PARENT");
  }

  // Verify student exists and is a STUDENT role
  const student = await prisma.user.findUnique({
    where: { id: studentId },
    select: { id: true, role: true, parentId: true, accountStatus: true },
  });

  if (!student || student.role !== "STUDENT" || student.accountStatus !== "ACTIVE") {
    throw new Error("INVALID_STUDENT");
  }

  // Check if already linked
  if (student.parentId === parentId) {
    throw new Error("ALREADY_LINKED");
  }

  // Check if student already has a different parent linked
  if (student.parentId && student.parentId !== parentId) {
    throw new Error("STUDENT_HAS_PARENT");
  }

  await prisma.$transaction(async (tx) => {
    // Link the parent to the student
    await tx.user.update({
      where: { id: studentId },
      data: { parentId },
    });

    // Mark invite as used if provided
    if (inviteCode) {
      await tx.parentInvite.updateMany({
        where: {
          code: inviteCode.toUpperCase(),
          usedAt: null,
        },
        data: {
          usedAt: new Date(),
          usedByParentId: parentId,
        },
      });
    }
  });
}

// ─── unlinkParentFromStudent ────────────────────────────────────────────

/**
 * Removes the parent-student link. Can be initiated by either the
 * parent or the student.
 */
export async function unlinkParentFromStudent(
  parentId: string,
  studentId: string
): Promise<void> {
  const student = await prisma.user.findUnique({
    where: { id: studentId },
    select: { parentId: true },
  });

  if (!student || student.parentId !== parentId) {
    throw new Error("NOT_LINKED");
  }

  await prisma.user.update({
    where: { id: studentId },
    data: { parentId: null },
  });
}

// ─── getLinkedStudents ──────────────────────────────────────────────────

/**
 * Returns all students linked to a parent, with subscription status.
 */
export async function getLinkedStudents(
  parentId: string
): Promise<LinkedStudent[]> {
  const students = await prisma.user.findMany({
    where: {
      parentId,
      role: "STUDENT",
      accountStatus: "ACTIVE",
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      school: true,
      updatedAt: true,
      subscription: {
        select: { status: true },
      },
    },
    orderBy: { firstName: "asc" },
  });

  return students.map((s) => ({
    id: s.id,
    firstName: s.firstName,
    lastName: s.lastName,
    school: s.school,
    linkedAt: s.updatedAt,
    hasActiveSubscription:
      s.subscription?.status === "ACTIVE" ||
      s.subscription?.status === "TRIALING",
  }));
}

// ─── getLinkedParents ───────────────────────────────────────────────────

/**
 * Returns all parents linked to a student.
 * (Currently the schema supports one parent per student via parentId,
 * but this function returns an array for future extensibility.)
 */
export async function getLinkedParents(
  studentId: string
): Promise<LinkedParent[]> {
  const student = await prisma.user.findUnique({
    where: { id: studentId },
    select: {
      parentId: true,
      parent: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          updatedAt: true,
        },
      },
    },
  });

  if (!student?.parent) return [];

  return [
    {
      id: student.parent.id,
      firstName: student.parent.firstName,
      lastName: student.parent.lastName,
      email: student.parent.email,
      linkedAt: student.parent.updatedAt,
    },
  ];
}

// ─── verifyStudentHasActiveSubscription ─────────────────────────────────

/**
 * Checks whether a student has an active (or trialing) subscription.
 * Parent access to progress data requires the student to have an
 * active subscription.
 */
export async function verifyStudentHasActiveSubscription(
  studentId: string
): Promise<boolean> {
  const subscription = await prisma.subscription.findUnique({
    where: { userId: studentId },
    select: { status: true },
  });

  if (!subscription) return false;

  return (
    subscription.status === "ACTIVE" || subscription.status === "TRIALING"
  );
}

// ─── getActiveInvite ────────────────────────────────────────────────────

/**
 * Returns the current active (unused, non-expired) invite for a student,
 * if one exists.
 */
export async function getActiveInvite(
  studentId: string
): Promise<ParentInvite | null> {
  const invite = await prisma.parentInvite.findFirst({
    where: {
      studentId,
      usedAt: null,
      expiresAt: { gt: new Date() },
    },
    orderBy: { createdAt: "desc" },
  });

  return invite as ParentInvite | null;
}

// ─── getPendingInvitesForParent ─────────────────────────────────────────

/**
 * Returns pending invites that could be associated with a parent's email.
 * Used on the parent side to show any invites they might have received.
 */
export async function getPendingInvitesForParentEmail(
  parentEmail: string
): Promise<
  Array<{
    code: string;
    studentFirstName: string;
    school: string | null;
    expiresAt: Date;
  }>
> {
  // In the current schema, invites are code-based and not email-based.
  // This is a placeholder for future email-based invite lookups.
  // Parents should use the invite code directly.
  void parentEmail;
  return [];
}
