import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import {
  linkParentToStudent,
  unlinkParentFromStudent,
  validateInviteCode,
  getLinkedStudents,
  getLinkedParents,
  verifyStudentHasActiveSubscription,
} from "@/lib/parent-linking";
import { sendEmail } from "@/lib/email";
import { parentLinkedEmail, studentLinkedNotificationEmail } from "@/lib/email-templates";
import { rateLimit } from "@/lib/rate-limit";

// ─── Validation ─────────────────────────────────────────────────────────

const linkByCodeSchema = z.object({
  inviteCode: z.string().min(1, "Invite code is required").max(20),
});

const unlinkSchema = z.object({
  studentId: z.string().min(1, "Student ID is required"),
});

// ─── POST: Link a parent to a student by invite code ────────────────────

export async function POST(request: NextRequest) {
  try {
    // ── Authenticate ───────────────────────────────────────────────────
    const supabase = createServerSupabaseClient();
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
    if (authError || !authUser) {
      return NextResponse.json(
        { error: "Authentication required." },
        { status: 401 }
      );
    }

    const dbUser = await prisma.user.findUnique({
      where: { email: authUser.email! },
      select: {
        id: true,
        role: true,
        accountStatus: true,
        firstName: true,
        email: true,
      },
    });

    if (!dbUser || dbUser.accountStatus !== "ACTIVE") {
      return NextResponse.json(
        { error: "Session expired. Please log in again." },
        { status: 401 }
      );
    }

    const user = dbUser;

    // Only parents can link to students
    if (user.role !== "PARENT") {
      return NextResponse.json(
        { error: "Only parent accounts can link to students." },
        { status: 403 }
      );
    }

    // ── Rate limit ─────────────────────────────────────────────────────
    const rl = await rateLimit(`parent-link:${user.id}`, { limit: 10, windowSeconds: 3600 }); // 10 per hour
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      );
    }

    // ── Parse body ─────────────────────────────────────────────────────
    const body = await request.json();
    const parsed = linkByCodeSchema.safeParse(body);

    if (!parsed.success) {
      const errors: Record<string, string[]> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path.join(".");
        if (!errors[key]) errors[key] = [];
        errors[key].push(issue.message);
      }
      return NextResponse.json(
        { error: "Validation failed.", errors },
        { status: 400 }
      );
    }

    const { inviteCode } = parsed.data;

    // ── Validate invite code ───────────────────────────────────────────
    const result = await validateInviteCode(inviteCode);

    if (!result) {
      return NextResponse.json(
        {
          error:
            "Invalid or expired invite code. Please ask your child to generate a new one.",
        },
        { status: 400 }
      );
    }

    const { student } = result;

    // ── Check student has active subscription ──────────────────────────
    const hasSubscription = await verifyStudentHasActiveSubscription(
      student.id
    );

    if (!hasSubscription) {
      return NextResponse.json(
        {
          error:
            "This student does not currently have an active subscription. Parent linking requires an active student subscription.",
        },
        { status: 400 }
      );
    }

    // ── Create the link ────────────────────────────────────────────────
    try {
      await linkParentToStudent(user.id, student.id, inviteCode);
    } catch (err) {
      const message = err instanceof Error ? err.message : "";

      if (message === "ALREADY_LINKED") {
        return NextResponse.json(
          { error: "You are already linked to this student." },
          { status: 409 }
        );
      }
      if (message === "STUDENT_HAS_PARENT") {
        return NextResponse.json(
          {
            error:
              "This student is already linked to another parent account. Only one parent can be linked at a time.",
          },
          { status: 409 }
        );
      }
      throw err;
    }

    // ── Send confirmation emails (non-blocking) ────────────────────────
    const studentUser = await prisma.user.findUnique({
      where: { id: student.id },
      select: { email: true, firstName: true },
    });

    if (studentUser) {
      // Email to parent
      sendEmail(
        user.email,
        "You are now linked to your child's account",
        parentLinkedEmail(user.firstName, studentUser.firstName)
      ).catch((err) => {
        console.error("[parent/link] Failed to send parent email:", err);
      });

      // Email to student
      sendEmail(
        studentUser.email,
        "A parent has been linked to your account",
        studentLinkedNotificationEmail(
          studentUser.firstName,
          user.firstName
        )
      ).catch((err) => {
        console.error("[parent/link] Failed to send student email:", err);
      });
    }

    return NextResponse.json(
      {
        message: "Successfully linked to student account.",
        student: {
          firstName: student.firstName,
          school: student.school,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[parent/link] Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// ─── DELETE: Unlink parent from student ─────────────────────────────────

export async function DELETE(request: NextRequest) {
  try {
    // ── Authenticate ───────────────────────────────────────────────────
    const supabaseDel = createServerSupabaseClient();
    const { data: { user: authUserDel }, error: authErrorDel } = await supabaseDel.auth.getUser();
    if (authErrorDel || !authUserDel) {
      return NextResponse.json(
        { error: "Authentication required." },
        { status: 401 }
      );
    }

    const dbUserDel = await prisma.user.findUnique({
      where: { email: authUserDel.email! },
      select: {
        id: true,
        role: true,
        accountStatus: true,
      },
    });

    if (!dbUserDel || dbUserDel.accountStatus !== "ACTIVE") {
      return NextResponse.json(
        { error: "Session expired. Please log in again." },
        { status: 401 }
      );
    }

    const user = dbUserDel;

    // ── Parse body ─────────────────────────────────────────────────────
    const body = await request.json();
    const parsed = unlinkSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Student ID is required." },
        { status: 400 }
      );
    }

    const { studentId } = parsed.data;

    // ── Determine parentId based on role ───────────────────────────────
    let parentId: string;

    if (user.role === "PARENT") {
      parentId = user.id;
    } else if (user.role === "STUDENT") {
      // Student is unlinking their own parent
      const student = await prisma.user.findUnique({
        where: { id: user.id },
        select: { parentId: true },
      });
      if (!student?.parentId) {
        return NextResponse.json(
          { error: "No parent is linked to your account." },
          { status: 400 }
        );
      }
      parentId = student.parentId;
      // Override studentId to be the current user (prevent unlinking others)
      parsed.data.studentId = user.id;
    } else {
      return NextResponse.json(
        { error: "Only parents and students can manage parent links." },
        { status: 403 }
      );
    }

    // ── Unlink ─────────────────────────────────────────────────────────
    try {
      await unlinkParentFromStudent(parentId, parsed.data.studentId);
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      if (message === "NOT_LINKED") {
        return NextResponse.json(
          { error: "This parent-student link does not exist." },
          { status: 400 }
        );
      }
      throw err;
    }

    return NextResponse.json({
      message: "Parent-student link removed successfully.",
    });
  } catch (err) {
    console.error("[parent/link] DELETE Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// ─── GET: Get linked parents (for student) or students (for parent) ────

export async function GET(request: NextRequest) {
  try {
    // ── Authenticate ───────────────────────────────────────────────────
    const supabaseGet = createServerSupabaseClient();
    const { data: { user: authUserGet }, error: authErrorGet } = await supabaseGet.auth.getUser();
    if (authErrorGet || !authUserGet) {
      return NextResponse.json(
        { error: "Authentication required." },
        { status: 401 }
      );
    }

    const dbUserGet = await prisma.user.findUnique({
      where: { email: authUserGet.email! },
      select: {
        id: true,
        role: true,
        accountStatus: true,
      },
    });

    if (!dbUserGet || dbUserGet.accountStatus !== "ACTIVE") {
      return NextResponse.json(
        { error: "Session expired. Please log in again." },
        { status: 401 }
      );
    }

    const user = dbUserGet;

    if (user.role === "STUDENT") {
      const parents = await getLinkedParents(user.id);
      return NextResponse.json({ parents });
    }

    if (user.role === "PARENT") {
      const students = await getLinkedStudents(user.id);
      return NextResponse.json({ students });
    }

    return NextResponse.json(
      { error: "Only parents and students can view parent links." },
      { status: 403 }
    );
  } catch (err) {
    console.error("[parent/link] GET Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
