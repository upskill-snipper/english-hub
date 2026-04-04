import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server";
import { verifySchoolMember } from "@/lib/school-auth";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// GET /api/school/overview
//
// Returns a lightweight dashboard summary for a school admin or teacher.
// Auth: any accepted school_member (admin, head_of_department, teacher).
//
// Response shape:
// {
//   school: { id, name, accessType, accessUntil },
//   totalStudents: number,
//   totalTeachers: number,
//   totalClasses: number,
//   activeThisWeek: number,   -- students who logged in / completed work last 7 days
//   assignmentsThisWeek: number,
// }
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  try {
    // ── Rate limit ──────────────────────────────────────────────────────────
    const ip = getClientIp(request.headers);
    const rl = await rateLimit(`school-overview:${ip}`, { limit: 30, windowSeconds: 60 });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        }
      );
    }

    // ── Auth ────────────────────────────────────────────────────────────────
    const supabase = createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Only school admins, heads of department, and teachers may access this.
    const member = await verifySchoolMember(user.id, ["admin", "head_of_department", "teacher"]);
    if (!member) {
      return NextResponse.json({ error: "Forbidden: school admin or teacher access required" }, { status: 403 });
    }

    const admin = createServiceRoleClient();
    const schoolId = member.school_id as string;

    // ── Fetch school info, members, and active classes in parallel ──────────
    const [schoolResult, membersResult, classesResult] = await Promise.all([
      admin
        .from("schools")
        .select("id, name, access_type, access_until")
        .eq("id", schoolId)
        .single(),
      admin
        .from("school_members")
        .select("id, role")
        .eq("school_id", schoolId)
        .eq("invite_status", "accepted"),
      admin
        .from("classes")
        .select("id")
        .eq("school_id", schoolId)
        .eq("is_active", true),
    ]);

    if (schoolResult.error || !schoolResult.data) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    const school = schoolResult.data as {
      id: string;
      name: string;
      access_type: string | null;
      access_until: string | null;
    };

    const members = (membersResult.data ?? []) as Array<{ id: string; role: string }>;
    const classes = (classesResult.data ?? []) as Array<{ id: string }>;
    const classIds = classes.map((c) => c.id);

    // ── Count teachers (teacher + head_of_department roles) ─────────────────
    const totalTeachers = members.filter(
      (m) => m.role === "teacher" || m.role === "head_of_department"
    ).length;

    // ── Count unique students across all active classes ──────────────────────
    let totalStudents = 0;
    let studentIds: string[] = [];

    if (classIds.length > 0) {
      const { data: studentRows } = await admin
        .from("class_students")
        .select("student_id")
        .in("class_id", classIds)
        .eq("is_active", true);

      studentIds = Array.from(
        new Set((studentRows ?? []).map((r: { student_id: string }) => r.student_id))
      );
      totalStudents = studentIds.length;
    }

    // ── Active this week: students with module_progress completed in last 7 days ──
    let activeThisWeek = 0;

    if (studentIds.length > 0) {
      const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
      const { data: activeRows } = await admin
        .from("module_progress")
        .select("user_id")
        .in("user_id", studentIds)
        .gte("completed_at", oneWeekAgo)
        .not("completed_at", "is", null);

      activeThisWeek = new Set(
        (activeRows ?? []).map((r: { user_id: string }) => r.user_id)
      ).size;
    }

    // ── Assignments created this week ────────────────────────────────────────
    let assignmentsThisWeek = 0;

    if (classIds.length > 0) {
      const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
      const { count } = await admin
        .from("assignments")
        .select("id", { count: "exact", head: true })
        .in("class_id", classIds)
        .gte("created_at", oneWeekAgo);

      assignmentsThisWeek = count ?? 0;
    }

    // ── Build response ───────────────────────────────────────────────────────
    return NextResponse.json({
      school: {
        id: school.id,
        name: school.name,
        accessType: school.access_type ?? null,
        accessUntil: school.access_until ?? null,
      },
      totalStudents,
      totalTeachers,
      totalClasses: classIds.length,
      activeThisWeek,
      assignmentsThisWeek,
    });
  } catch (error) {
    console.error("[school/overview] GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
