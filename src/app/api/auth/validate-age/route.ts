import { NextRequest, NextResponse } from "next/server";
import { calculateAge } from "@/lib/auth";
import { z } from "zod";

// ─── Rate limiting (in-memory, per IP) ─────────────────────────────────
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 10;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return true;
  }

  return false;
}

// ─── Schema ────────────────────────────────────────────────────────────
const validateAgeSchema = z.object({
  dobDay: z.number().int().min(1).max(31),
  dobMonth: z.number().int().min(1).max(12),
  dobYear: z.number().int().min(1900).max(new Date().getFullYear()),
  parentGuardianEmail: z.string().email().optional(),
});

// ─── Handler ───────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  // Rate limit by IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const data = validateAgeSchema.parse(body);

    const age = calculateAge(data.dobYear, data.dobMonth, data.dobDay);

    // Under 13: blocked entirely (UK GDPR digital consent age)
    if (age < 13) {
      return NextResponse.json(
        { error: "You must be at least 13 years old" },
        { status: 403 }
      );
    }

    // 13-15: requires parent/guardian email
    if (age < 16 && !data.parentGuardianEmail) {
      return NextResponse.json(
        { error: "Parent/Guardian email required for users under 16" },
        { status: 400 }
      );
    }

    // Valid
    return NextResponse.json({ valid: true, age });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid date of birth." },
        { status: 400 }
      );
    }

    console.error("[ValidateAge] Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
