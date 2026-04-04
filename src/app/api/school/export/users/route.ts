import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server";
import { verifySchoolMember } from "@/lib/school-auth";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function escapeCsvField(value: string | null | undefined): string {
  if (value === null || value === undefined) return "";
  let str = String(value);
  // Prevent CSV formula injection
  if (/^[=+\-@]/.test(str)) {
    str = `'${str}`;
  }
  if (str.includes(",") || str.includes('"') || str.includes("\n") || str.includes("\r")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function formatDate(iso: string | null | undefined): string {
  if (!iso) return "";
  try {
    return new Date(iso).toISOString().split("T")[0];
  } catch {
    return "";
  }
}

function formatRole(role: string | null | undefined): string {
  if (!role) return "";
  switch (role) {
    case "admin":
      return "Admin";
    case "head_of_department":
      return "Head of Department";
    case "teacher":
      return "Teacher";
    case "student":
      return "Student";
    default:
      return role;
  }
}

function formatStatus(inviteStatus: string | null | undefined): string {
  if (!inviteStatus) return "Unknown";
  switch (inviteStatus) {
    case "accepted":
      return "Active";
    case "pending":
      return "Pending";
    case "declined":
      return "Declined";
    default:
      return inviteStatus;
  }
}

// ---------------------------------------------------------------------------
// GET /api/school/export/users
//
// Auth required: school admin (verified via verifySchoolMember).
// Returns all school users (students + teachers/staff) as a downloadable CSV.
//
// Columns: Name, Email, Role, Year Group, Class, Status, Joined Date
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  try {
    // 1. Auth
    const supabase = createServerSupabaseClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. School admin check
    const member = await verifySchoolMember(user.id, ["admin"]);
    if (!member) {
      return NextResponse.json(
        { error: "Forbidden: school admin role required" },
        { status: 403 }
      );
    }

    // 3. Rate limit
    const ip = getClientIp(request.headers);
    const rl = await rateLimit(`school-export-users:${ip}`, {
      limit: 10,
      windowSeconds: 60,
    });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
          },
        }
      );
    }

    const admin = createServiceRoleClient();

    // 4. Fetch all school members (all roles)
    const { data: members, error: membersError } = await admin
      .from("school_members")
      .select(
        "id, user_id, full_name, email, role, year_group, invite_status, created_at"
      )
      .eq("school_id", member.school_id)
      .order("role", { ascending: true })
      .order("full_name", { ascending: true });

    if (membersError) {
      console.error("[export/users] members fetch error:", membersError);
      return NextResponse.json({ error: "Failed to fetch school users" }, { status: 500 });
    }

    const allMembers = members ?? [];

    // 5. Fetch class enrollments for students to populate the Class column
    const studentUserIds = allMembers
      .filter((m: { role: string; user_id: string | null }) => m.role === "student" && m.user_id)
      .map((m: { user_id: string | null }) => m.user_id as string);

    // Map: student user_id -> comma-separated class names
    const studentClassMap = new Map<string, string>();

    if (studentUserIds.length > 0) {
      const { data: enrollments } = await admin
        .from("class_students")
        .select("student_id, classes(name)")
        .in("student_id", studentUserIds)
        .eq("is_active", true);

      // Group class names per student
      const classNamesByStudent = new Map<string, string[]>();
      for (const row of enrollments ?? []) {
        const typedRow = row as unknown as {
          student_id: string;
          classes: { name: string }[] | null;
        };
        const cls = typedRow.classes?.[0] ?? null;
        if (!cls?.name) continue;
        if (!classNamesByStudent.has(typedRow.student_id)) {
          classNamesByStudent.set(typedRow.student_id, []);
        }
        classNamesByStudent.get(typedRow.student_id)!.push(cls.name);
      }

      for (const [studentId, classNames] of classNamesByStudent) {
        studentClassMap.set(studentId, classNames.join("; "));
      }
    }

    // 6. Fetch classes taught by staff members for the Class column
    const staffUserIds = allMembers
      .filter(
        (m: { role: string; user_id: string | null }) =>
          m.role !== "student" && m.user_id !== null
      )
      .map((m: { user_id: string | null }) => m.user_id as string);

    const staffClassMap = new Map<string, string>();

    if (staffUserIds.length > 0) {
      const { data: taughtClasses } = await admin
        .from("classes")
        .select("teacher_id, name")
        .eq("school_id", member.school_id)
        .in("teacher_id", staffUserIds)
        .eq("is_active", true);

      const classesByTeacher = new Map<string, string[]>();
      for (const cls of taughtClasses ?? []) {
        const typedCls = cls as { teacher_id: string; name: string };
        if (!classesByTeacher.has(typedCls.teacher_id)) {
          classesByTeacher.set(typedCls.teacher_id, []);
        }
        classesByTeacher.get(typedCls.teacher_id)!.push(typedCls.name);
      }

      for (const [teacherId, classNames] of classesByTeacher) {
        staffClassMap.set(teacherId, classNames.join("; "));
      }
    }

    // 7. Build CSV
    const CSV_HEADERS = [
      "Name",
      "Email",
      "Role",
      "Year Group",
      "Class",
      "Status",
      "Joined Date",
    ];

    const lines: string[] = [CSV_HEADERS.map(escapeCsvField).join(",")];

    for (const m of allMembers) {
      const typedM = m as {
        id: string;
        user_id: string | null;
        full_name: string | null;
        email: string | null;
        role: string | null;
        year_group: string | null;
        invite_status: string | null;
        created_at: string | null;
      };

      const isStudent = typedM.role === "student";
      const classValue = typedM.user_id
        ? isStudent
          ? studentClassMap.get(typedM.user_id) ?? ""
          : staffClassMap.get(typedM.user_id) ?? ""
        : "";

      const row = [
        typedM.full_name ?? "",
        typedM.email ?? "",
        formatRole(typedM.role),
        typedM.year_group ?? "",
        classValue,
        formatStatus(typedM.invite_status),
        formatDate(typedM.created_at),
      ].map(escapeCsvField);

      lines.push(row.join(","));
    }

    const csvContent = lines.join("\r\n");
    const today = new Date().toISOString().split("T")[0];
    const fileName = `school-users-${today}.csv`;

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[export/users] error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
