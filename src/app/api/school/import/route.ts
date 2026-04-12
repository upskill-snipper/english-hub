import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server";
import { verifySchoolMember } from "@/lib/school-auth";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

import type { ImportedUser, ImportJob } from "@/lib/import-job-cache";
import { setJobInCache } from "@/lib/import-job-cache";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const PASSWORD_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";

function generatePassword(length = 8): string {
  let password = "";
  // Use crypto.getRandomValues for cryptographically secure generation
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  for (let i = 0; i < length; i++) {
    password += PASSWORD_CHARS[array[i] % PASSWORD_CHARS.length];
  }
  return password;
}

interface CsvRow {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  year_group: string;
  class_name: string;
  job_title: string;
  classes: string;
}

/**
 * Very simple CSV parser — handles quoted fields with embedded commas/newlines.
 * Does NOT require any external library.
 */
function parseCsv(text: string): CsvRow[] {
  // Normalise line endings
  const normalised = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
  if (!normalised) return [];

  const lines: string[] = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < normalised.length; i++) {
    const ch = normalised[i];
    if (ch === '"') {
      if (insideQuotes && normalised[i + 1] === '"') {
        // Escaped double-quote
        current += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (ch === "\n" && !insideQuotes) {
      lines.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  if (current.length > 0) lines.push(current);

  if (lines.length < 2) return [];

  // Parse header row
  const headers = splitCsvLine(lines[0]).map((h) => h.trim().toLowerCase().replace(/\s+/g, "_"));

  const rows: CsvRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const values = splitCsvLine(line);
    const row: Record<string, string> = {};
    headers.forEach((header, idx) => {
      row[header] = (values[idx] ?? "").trim();
    });
    rows.push(row as unknown as CsvRow);
  }
  return rows;
}

function splitCsvLine(line: string): string[] {
  const fields: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        field += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      fields.push(field);
      field = "";
    } else {
      field += ch;
    }
  }
  fields.push(field);
  return fields;
}

function escapeCsvField(value: string | null | undefined): string {
  if (value === null || value === undefined) return "";
  const str = String(value);
  if (str.includes(",") || str.includes('"') || str.includes("\n") || str.includes("\r")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

// ---------------------------------------------------------------------------
// POST /api/school/import
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
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

    const schoolId: string = member.school_id;

    // 3. Rate limiting — max 5 imports per hour per school
    const ip = getClientIp(request.headers);
    const rlIp = await rateLimit(`school-import-ip:${ip}`, {
      limit: 10,
      windowSeconds: 3600,
    });
    const rlSchool = await rateLimit(`school-import-school:${schoolId}`, {
      limit: 5,
      windowSeconds: 3600,
    });

    if (!rlIp.success || !rlSchool.success) {
      const resetAt = Math.min(
        rlIp.success ? Infinity : rlIp.resetAt,
        rlSchool.success ? Infinity : rlSchool.resetAt
      );
      return NextResponse.json(
        { error: "Rate limit exceeded. Maximum 5 imports per hour per school." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)),
          },
        }
      );
    }

    // 4. Parse multipart form
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json(
        { error: "Invalid multipart form data" },
        { status: 400 }
      );
    }

    const file = formData.get("file");
    if (!file || typeof file === "string") {
      return NextResponse.json(
        { error: "Missing file field in form data" },
        { status: 422 }
      );
    }

    const blob = file as File;
    const fileName = blob.name ?? "";
    const isCSV =
      fileName.toLowerCase().endsWith(".csv") ||
      blob.type === "text/csv" ||
      blob.type === "application/csv";

    if (!isCSV) {
      return NextResponse.json(
        { error: "Only CSV files are supported. Please use the template to create your import file." },
        { status: 422 }
      );
    }

    // 5. Read file text
    let csvText: string;
    try {
      csvText = await blob.text();
    } catch {
      return NextResponse.json(
        { error: "Failed to read uploaded file" },
        { status: 400 }
      );
    }

    // 6. Parse rows
    const rows = parseCsv(csvText);

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "The file is empty or has no data rows" },
        { status: 422 }
      );
    }

    // 7. Enforce max 500 users per import
    if (rows.length > 500) {
      return NextResponse.json(
        { error: `Too many rows: ${rows.length}. Maximum 500 users per import.` },
        { status: 422 }
      );
    }

    // 8. Process each row
    const admin = createServiceRoleClient();
    const jobId = crypto.randomUUID();
    const successUsers: ImportedUser[] = [];
    const errors: Array<{ row: number; email: string; error: string }> = [];

    for (let i = 0; i < rows.length; i++) {
      const rowNumber = i + 2; // 1-based, accounting for header row
      const row = rows[i];

      // Validate required fields
      const email = (row.email ?? "").trim().toLowerCase();
      const firstName = (row.first_name ?? "").trim();
      const lastName = (row.last_name ?? "").trim();
      const role = (row.role ?? "student").trim().toLowerCase() as "student" | "teacher";
      const yearGroup = (row.year_group ?? "").trim();
      const className = (row.class_name ?? "").trim();
      const jobTitle = (row.job_title ?? "").trim();

      if (!email || !email.includes("@")) {
        errors.push({ row: rowNumber, email, error: "Invalid or missing email address" });
        continue;
      }
      if (!firstName) {
        errors.push({ row: rowNumber, email, error: "Missing first_name" });
        continue;
      }
      if (!lastName) {
        errors.push({ row: rowNumber, email, error: "Missing last_name" });
        continue;
      }
      if (role !== "student" && role !== "teacher") {
        errors.push({ row: rowNumber, email, error: `Invalid role "${role}". Must be "student" or "teacher".` });
        continue;
      }

      const fullName = `${firstName} ${lastName}`;
      const temporaryPassword = generatePassword(8);

      try {
        // Create auth user via admin API
        const { data: authData, error: createError } =
          await admin.auth.admin.createUser({
            email,
            password: temporaryPassword,
            email_confirm: true,
            user_metadata: {
              full_name: fullName,
              role,
              school_id: schoolId,
              year_group: yearGroup || null,
              class_name: className || null,
            },
          });

        if (createError) {
          errors.push({
            row: rowNumber,
            email,
            error: "Failed to create user account",
          });
          continue;
        }

        const userId = authData.user.id;

        // Insert profile
        const { error: profileError } = await admin.from("profiles").upsert({
          id: userId,
          email,
          full_name: fullName,
          role,
          year_group: role === "student" ? (yearGroup || null) : null,
          school_name: role === "teacher" ? (member.schools?.name ?? null) : null,
        });

        if (profileError) {
          // Non-fatal — user was created; log but continue
          console.error(`Profile upsert error for ${email}:`, profileError);
        }

        // Link to school via school_members
        const { error: memberError } = await admin
          .from("school_members")
          .upsert(
            {
              school_id: schoolId,
              user_id: userId,
              role: role === "teacher" ? "teacher" : "student",
              full_name: fullName,
              email,
              department: role === "teacher" ? (jobTitle || "English") : null,
              invite_status: "accepted",
            },
            { onConflict: "school_id,user_id" }
          );

        if (memberError) {
          console.error(`School member insert error for ${email}:`, memberError);
          // Still count as success — auth user and profile exist
        }

        successUsers.push({
          email,
          temporaryPassword,
          firstName,
          lastName,
          role,
          yearGroup,
          className,
        });
      } catch (err) {
        errors.push({ row: rowNumber, email, error: "Failed to process row" });
      }
    }

    // 9. Build job record
    const job: ImportJob = {
      jobId,
      schoolId,
      createdAt: Date.now(),
      total: rows.length,
      success: successUsers.length,
      errors,
      users: successUsers,
    };

    // Store in module-level cache (fast path for export endpoint in same instance)
    setJobInCache(jobId, job);

    // Persist to DB so the export endpoint can retrieve it from any instance.
    // We use a JSONB column for simplicity — create the table if it does not exist
    // by using upsert with ignoreDuplicates=false.
    try {
      await admin.from("import_jobs").upsert(
        {
          id: jobId,
          school_id: schoolId,
          created_by: user.id,
          total: job.total,
          success: job.success,
          errors: errors,
          users: successUsers.map(({ temporaryPassword: _pw, ...rest }) => rest),
          created_at: new Date(job.createdAt).toISOString(),
        },
        { onConflict: "id" }
      );
    } catch (dbErr) {
      // Non-fatal — in-memory cache will serve the export for this instance
      console.warn("Failed to persist import job to DB:", dbErr);
    }

    // 10. Return summary
    return NextResponse.json(
      {
        job_id: jobId,
        total: job.total,
        success: job.success,
        errors: job.errors,
        users: successUsers.map((u) => ({
          email: u.email,
          temporaryPassword: u.temporaryPassword,
          firstName: u.firstName,
          lastName: u.lastName,
          role: u.role,
        })),
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Bulk import error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
