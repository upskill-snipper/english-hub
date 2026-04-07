import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ContactBody {
  schoolName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  role?: string;
  studentCount?: string;
  examBoard?: string;
  message?: string;
}

const VALID_ROLES = [
  "Head of Department",
  "Head of English",
  "Deputy Head",
  "Headteacher",
  "MAT Lead",
  "Other",
];

const VALID_STUDENT_COUNTS = [
  "Under 100",
  "100-300",
  "300-500",
  "500-1000",
  "1000+",
];

const VALID_EXAM_BOARDS = ["AQA", "Edexcel", "OCR", "WJEC", "IGCSE/CAIE"];

// ---------------------------------------------------------------------------
// POST /api/school/contact
// ---------------------------------------------------------------------------

export async function POST(req: NextRequest) {
  // Rate limit
  const ip = getClientIp(req.headers);
  const rl = await rateLimit(ip, { limit: 5, windowSeconds: 3600 });
  if (!rl.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // Parse body
  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Validate required fields
  const { schoolName, contactName, email, phone, role, studentCount, examBoard, message } = body;

  if (!schoolName?.trim()) {
    return NextResponse.json({ error: "School name is required." }, { status: 400 });
  }
  if (!contactName?.trim()) {
    return NextResponse.json({ error: "Your name is required." }, { status: 400 });
  }
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }
  if (!role || !VALID_ROLES.includes(role)) {
    return NextResponse.json({ error: "Please select a valid role." }, { status: 400 });
  }
  if (!studentCount || !VALID_STUDENT_COUNTS.includes(studentCount)) {
    return NextResponse.json({ error: "Please select a valid student count." }, { status: 400 });
  }
  if (!examBoard || !VALID_EXAM_BOARDS.includes(examBoard)) {
    return NextResponse.json({ error: "Please select a valid exam board." }, { status: 400 });
  }

  // Store in Supabase
  try {
    const supabase = createServiceRoleClient();

    const { error: insertError } = await supabase
      .from("school_contact_requests")
      .insert({
        school_name: schoolName.trim(),
        contact_name: contactName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        role,
        student_count: studentCount,
        exam_board: examBoard,
        message: message?.trim() || null,
        status: "new",
      });

    if (insertError) {
      console.error("[school/contact] Insert error:", insertError);
      return NextResponse.json(
        { error: "Could not save your request. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[school/contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
