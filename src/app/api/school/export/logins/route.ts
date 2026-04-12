import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server";
import { verifySchoolMember } from "@/lib/school-auth";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

// Import the in-memory cache so the export works on the same serverless
// instance without a DB round-trip. When instances differ the DB fallback is used.
import { getJobFromCache } from "@/lib/import-job-cache";

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

// ---------------------------------------------------------------------------
// GET /api/school/export/logins?job_id=<uuid>
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
    const rl = await rateLimit(`school-export-logins:${ip}`, {
      limit: 30,
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

    // 4. Extract job_id
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get("job_id");

    if (!jobId || !jobId.match(/^[0-9a-f-]{36}$/i)) {
      return NextResponse.json(
        { error: "Missing or invalid job_id query parameter" },
        { status: 422 }
      );
    }

    // 5. Look up job — try in-memory cache first, then DB
    let job: {
      schoolId?: string;
      school_id?: string;
      users: Array<{
        email: string;
        temporaryPassword: string;
        firstName: string;
        lastName: string;
        role: string;
        yearGroup?: string;
        year_group?: string;
        className?: string;
        class_name?: string;
      }>;
    } | null = null;

    const cached = getJobFromCache(jobId);
    if (cached) {
      job = cached;
    } else {
      // Fall back to DB
      const admin = createServiceRoleClient();
      const { data: dbJob, error: dbError } = await admin
        .from("import_jobs")
        .select("id, school_id, users")
        .eq("id", jobId)
        .single();

      if (dbError || !dbJob) {
        return NextResponse.json(
          { error: "Import job not found. Jobs expire after 24 hours." },
          { status: 404 }
        );
      }

      job = dbJob;
    }

    // 6. Verify the job belongs to this admin's school
    const jobSchoolId = (job as { schoolId?: string; school_id?: string }).schoolId
      ?? (job as { schoolId?: string; school_id?: string }).school_id;

    if (jobSchoolId !== member.school_id) {
      return NextResponse.json({ error: "Forbidden: job does not belong to your school" }, { status: 403 });
    }

    // 7. Build CSV
    const loginUrl = process.env.NEXT_PUBLIC_APP_URL
      ? `${process.env.NEXT_PUBLIC_APP_URL}/auth/login`
      : "https://app.example.com/auth/login";

    const headers = ["Full Name", "Email", "Temporary Password", "Role", "Year Group", "Login URL"];
    const csvLines: string[] = [headers.map(escapeCsvField).join(",")];

    const users = job.users ?? [];
    for (const u of users) {
      const fullName = `${u.firstName} ${u.lastName}`.trim();
      const yearGroup = u.yearGroup ?? u.year_group ?? "";
      const row = [
        fullName,
        u.email,
        u.temporaryPassword,
        u.role,
        yearGroup,
        loginUrl,
      ].map(escapeCsvField);
      csvLines.push(row.join(","));
    }

    const csvContent = csvLines.join("\r\n");

    // 8. Return downloadable CSV
    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="login-details.csv"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Export logins error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
