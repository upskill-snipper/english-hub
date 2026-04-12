import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server";
import { verifySchoolMember } from "@/lib/school-auth";
import { getJobFromCache } from "@/lib/import-job-cache";
import { rateLimit } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// GET /api/school/import/[jobId]
// Returns status and results for a specific import job.
// Auth: school admin only.
// ---------------------------------------------------------------------------

export async function GET(
  request: NextRequest,
  { params }: { params: { jobId: string } }
) {
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

    // ── Rate limit: 60 per minute per user ────────────────────────────
    const rl = await rateLimit(`school-import-job:${user.id}`, { limit: 60, windowSeconds: 60 });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      );
    }

    // 2. School admin check
    const member = await verifySchoolMember(user.id, ["admin"]);
    if (!member) {
      return NextResponse.json(
        { error: "Forbidden: school admin role required" },
        { status: 403 }
      );
    }

    // 3. Validate jobId format
    const { jobId } = params;
    if (!jobId || !/^[0-9a-f-]{36}$/i.test(jobId)) {
      return NextResponse.json(
        { error: "Invalid job ID format" },
        { status: 422 }
      );
    }

    // 4. Try in-memory cache first (fast path — same serverless instance)
    const cached = getJobFromCache(jobId);

    if (cached) {
      // Verify ownership
      if (cached.schoolId !== member.school_id) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }

      return NextResponse.json(
        {
          job_id: cached.jobId,
          status: "complete",
          import_type: detectImportType(cached.users),
          total: cached.total,
          success: cached.success,
          duplicates: 0,
          error_count: cached.errors.length,
          completed_at: new Date(cached.createdAt).toISOString(),
          errors: cached.errors,
          users: cached.users.map((u) => ({
            name: `${u.firstName} ${u.lastName}`.trim(),
            email: u.email,
            role: u.role,
            year_group: u.yearGroup ?? "",
            class_name: u.className ?? "",
            status: "created",
          })),
        },
        { status: 200 }
      );
    }

    // 5. Fall back to DB
    const admin = createServiceRoleClient();
    const { data: dbJob, error: dbError } = await admin
      .from("import_jobs")
      .select("id, school_id, total, success, errors, users, created_at")
      .eq("id", jobId)
      .single();

    if (dbError || !dbJob) {
      return NextResponse.json(
        { error: "Import job not found. Jobs may expire after 24 hours." },
        { status: 404 }
      );
    }

    // 6. Verify ownership
    if (dbJob.school_id !== member.school_id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const dbErrors: Array<{ row: number; email: string; error: string }> =
      Array.isArray(dbJob.errors) ? dbJob.errors : [];

    const dbUsers: Array<{
      email: string;
      temporaryPassword: string;
      firstName: string;
      lastName: string;
      role: string;
      yearGroup?: string;
      year_group?: string;
      className?: string;
      class_name?: string;
    }> = Array.isArray(dbJob.users) ? dbJob.users : [];

    // Count duplicates — errors whose message contains "already" or "duplicate"
    const duplicates = dbErrors.filter(
      (e) =>
        e.error.toLowerCase().includes("already") ||
        e.error.toLowerCase().includes("duplicate") ||
        e.error.toLowerCase().includes("unique")
    ).length;

    return NextResponse.json(
      {
        job_id: dbJob.id,
        status: "complete",
        import_type: detectImportType(dbUsers),
        total: dbJob.total,
        success: dbJob.success,
        duplicates,
        error_count: dbErrors.length,
        completed_at: dbJob.created_at,
        errors: dbErrors.map((e) => ({
          row: e.row,
          email: e.email,
          error: e.error,
        })),
        users: dbUsers.map((u) => ({
          name: `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim(),
          email: u.email,
          role: u.role,
          year_group: u.yearGroup ?? u.year_group ?? "",
          class_name: u.className ?? u.class_name ?? "",
          status: "created",
        })),
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Import job GET error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function detectImportType(
  users: Array<{ role?: string }>
): "students" | "teachers" | "mixed" {
  if (!users || users.length === 0) return "students";
  const roles = new Set(users.map((u) => u.role ?? "student"));
  if (roles.has("teacher") && roles.has("student")) return "mixed";
  if (roles.has("teacher")) return "teachers";
  return "students";
}
