import { NextRequest, NextResponse } from "next/server";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// CSV templates
// ---------------------------------------------------------------------------

const STUDENT_HEADERS = ["first_name", "last_name", "email", "year_group", "class_name"];

const STUDENT_EXAMPLE_ROWS = [
  ["John", "Smith", "john.smith@school.ac.uk", "Year 10", "10 English Set 1"],
  ["Jane", "Doe", "jane.doe@school.ac.uk", "Year 11", "11 English A"],
];

const TEACHER_HEADERS = ["first_name", "last_name", "email", "job_title", "classes"];

const TEACHER_EXAMPLE_ROWS = [
  ["Sarah", "Jones", "s.jones@school.ac.uk", "Head of English", "Year 10 Set 1,Year 11 A"],
  ["Michael", "Brown", "m.brown@school.ac.uk", "English Teacher", "Year 9 Set 2"],
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function escapeCsvField(value: string | null | undefined): string {
  if (value === null || value === undefined) return "";
  const str = String(value);
  if (str.includes(",") || str.includes('"') || str.includes("\n") || str.includes("\r")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function buildCsv(headers: string[], rows: string[][]): string {
  const lines: string[] = [headers.map(escapeCsvField).join(",")];
  for (const row of rows) {
    lines.push(row.map(escapeCsvField).join(","));
  }
  return lines.join("\r\n");
}

// ---------------------------------------------------------------------------
// GET /api/school/export/template?type=student|teacher
// No authentication required — templates contain no sensitive data.
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  // ── Rate limit: 30 per minute per IP ──────────────────────────────────
  const ip = getClientIp(request.headers);
  const rl = await rateLimit(`school-export-template:${ip}`, { limit: 30, windowSeconds: 60 });
  if (!rl.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
    );
  }

  const { searchParams } = new URL(request.url);
  const type = (searchParams.get("type") ?? "student").toLowerCase().trim();

  if (type !== "student" && type !== "teacher") {
    return NextResponse.json(
      { error: 'Invalid type parameter. Must be "student" or "teacher".' },
      { status: 422 }
    );
  }

  const isStudent = type === "student";
  const headers = isStudent ? STUDENT_HEADERS : TEACHER_HEADERS;
  const exampleRows = isStudent ? STUDENT_EXAMPLE_ROWS : TEACHER_EXAMPLE_ROWS;
  const fileName = isStudent
    ? "student-import-template.csv"
    : "teacher-import-template.csv";

  const csvContent = buildCsv(headers, exampleRows);

  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Cache-Control": "public, max-age=86400",
    },
  });
}
