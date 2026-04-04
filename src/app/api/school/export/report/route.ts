import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server";
import { verifySchoolMember } from "@/lib/school-auth";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function escapeCsvField(value: string | number | null | undefined): string {
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

// ---------------------------------------------------------------------------
// GET /api/school/export/report?type=csv&startDate=YYYY-MM-DD&endDate=YYYY-MM-DD
//
// Auth required: school admin.
// Returns a downloadable CSV analytics report for the school.
//
// Columns:
//   Student Name, Email, Year Group, Class, Teacher,
//   Assignments Completed, Average Score, Last Active, Status
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
    const rl = await rateLimit(`school-export-report:${ip}`, {
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

    // 4. Parse query params
    const { searchParams } = new URL(request.url);
    const type = (searchParams.get("type") ?? "csv").toLowerCase().trim();
    const startDate = searchParams.get("startDate") ?? null;
    const endDate = searchParams.get("endDate") ?? null;

    if (type !== "csv" && type !== "excel") {
      return NextResponse.json(
        { error: 'Invalid type parameter. Must be "csv" or "excel".' },
        { status: 422 }
      );
    }

    // Validate date params when provided
    if (startDate && isNaN(Date.parse(startDate))) {
      return NextResponse.json(
        { error: "Invalid startDate. Use YYYY-MM-DD format." },
        { status: 422 }
      );
    }
    if (endDate && isNaN(Date.parse(endDate))) {
      return NextResponse.json(
        { error: "Invalid endDate. Use YYYY-MM-DD format." },
        { status: 422 }
      );
    }

    const admin = createServiceRoleClient();

    // 5. Fetch all students in this school
    const { data: students, error: studentsError } = await admin
      .from("school_members")
      .select("id, user_id, full_name, email, year_group, invite_status, last_active_at")
      .eq("school_id", member.school_id)
      .eq("role", "student")
      .order("full_name", { ascending: true });

    if (studentsError) {
      console.error("[export/report] students fetch error:", studentsError);
      return NextResponse.json({ error: "Failed to fetch students" }, { status: 500 });
    }

    const studentRows = students ?? [];
    if (studentRows.length === 0) {
      // Return empty CSV with headers only
      const emptyHeader =
        "Student Name,Email,Year Group,Class,Teacher,Assignments Completed,Average Score,Last Active,Status\r\n";
      return new NextResponse(emptyHeader, {
        status: 200,
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": "attachment; filename=\"school-report.csv\"",
          "Cache-Control": "no-store",
        },
      });
    }

    // Collect user_ids for students who have platform accounts
    const userIds = studentRows
      .map((s: { user_id: string | null }) => s.user_id)
      .filter((id): id is string => id !== null);

    // 6. Fetch class enrollments for these students
    // class_students links student user_id -> class; classes has teacher_id and name
    let classMap = new Map<
      string,
      { className: string; teacherName: string }
    >();

    if (userIds.length > 0) {
      const { data: enrollments } = await admin
        .from("class_students")
        .select("student_id, class_id, classes(name, teacher_id, school_members(full_name))")
        .in("student_id", userIds)
        .eq("is_active", true);

      // Build map: student user_id -> most recent class info
      for (const row of enrollments ?? []) {
        const typedRow = row as unknown as {
          student_id: string;
          class_id: string;
          classes: {
            name: string;
            teacher_id: string | null;
            school_members: { full_name: string | null } | null;
          }[] | null;
        };
        const cls = typedRow.classes?.[0] ?? null;
        if (!cls) continue;
        classMap.set(typedRow.student_id, {
          className: cls.name ?? "",
          teacherName: cls.school_members?.full_name ?? "",
        });
      }
    }

    // 7. Fetch module progress (assignments completed + avg score) for date range
    let progressMap = new Map<
      string,
      { completed: number; scores: number[] }
    >();

    if (userIds.length > 0) {
      let progressQuery = admin
        .from("module_progress")
        .select("user_id, quiz_score, completed, completed_at")
        .in("user_id", userIds)
        .eq("completed", true);

      if (startDate) {
        progressQuery = progressQuery.gte("completed_at", `${startDate}T00:00:00.000Z`);
      }
      if (endDate) {
        progressQuery = progressQuery.lte("completed_at", `${endDate}T23:59:59.999Z`);
      }

      const { data: progressRows } = await progressQuery;

      for (const p of progressRows ?? []) {
        const typedP = p as {
          user_id: string;
          quiz_score: number | null;
          completed: boolean;
          completed_at: string | null;
        };
        if (!progressMap.has(typedP.user_id)) {
          progressMap.set(typedP.user_id, { completed: 0, scores: [] });
        }
        const entry = progressMap.get(typedP.user_id)!;
        entry.completed++;
        if (typedP.quiz_score !== null) {
          entry.scores.push(typedP.quiz_score);
        }
      }
    }

    // 8. Build CSV rows
    const CSV_HEADERS = [
      "Student Name",
      "Email",
      "Year Group",
      "Class",
      "Teacher",
      "Assignments Completed",
      "Average Score",
      "Last Active",
      "Status",
    ];

    const lines: string[] = [CSV_HEADERS.map(escapeCsvField).join(",")];

    for (const student of studentRows) {
      const s = student as {
        id: string;
        user_id: string | null;
        full_name: string | null;
        email: string | null;
        year_group: string | null;
        invite_status: string | null;
        last_active_at: string | null;
      };

      const classInfo = s.user_id ? classMap.get(s.user_id) : undefined;
      const progress = s.user_id ? progressMap.get(s.user_id) : undefined;

      const assignmentsCompleted = progress?.completed ?? 0;
      const avgScore =
        progress && progress.scores.length > 0
          ? Math.round(
              progress.scores.reduce((a, b) => a + b, 0) / progress.scores.length
            )
          : "";

      const status =
        s.invite_status === "accepted"
          ? "Active"
          : s.invite_status === "pending"
          ? "Pending"
          : s.invite_status ?? "Unknown";

      const row = [
        s.full_name ?? "",
        s.email ?? "",
        s.year_group ?? "",
        classInfo?.className ?? "",
        classInfo?.teacherName ?? "",
        assignmentsCompleted,
        avgScore,
        formatDate(s.last_active_at),
        status,
      ].map(escapeCsvField);

      lines.push(row.join(","));
    }

    const csvContent = lines.join("\r\n");
    const today = new Date().toISOString().split("T")[0];
    const fileName = `school-report-${today}.csv`;

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[export/report] error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
