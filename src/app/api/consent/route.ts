import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { ConsentType, ConsentMethod } from "@prisma/client";
import {
  recordConsent,
  withdrawConsent,
  getConsents,
  CONSENT_TYPES,
  ESSENTIAL_CONSENT_TYPES,
} from "@/lib/consent";
import { createServerSupabaseClient } from "@/lib/supabase/server";

// ─── Validation schemas ─────────────────────────────────────────────────

const consentTypeValues = Object.values(CONSENT_TYPES) as [string, ...string[]];

const recordConsentSchema = z.object({
  consentType: z.enum(consentTypeValues as [ConsentType, ...ConsentType[]]),
  version: z.string().min(1, "Version is required"),
  granted: z.boolean(),
  method: z.enum(["ACTIVE_CHECKBOX", "EXPLICIT"] as [
    ConsentMethod,
    ...ConsentMethod[],
  ]),
});

const withdrawConsentSchema = z.object({
  consentType: z.enum(consentTypeValues as [ConsentType, ...ConsentType[]]),
});

// ─── Helpers ────────────────────────────────────────────────────────────

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

// ─── GET /api/consent ───────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    const userId = user.id;

    const consents = await getConsents(userId);

    return NextResponse.json({
      consents: consents.map((c) => ({
        id: c.id,
        consentType: c.consentType,
        version: c.version,
        granted: c.granted,
        grantedAt: c.grantedAt,
        withdrawnAt: c.withdrawnAt,
        method: c.method,
        isEssential: ESSENTIAL_CONSENT_TYPES.includes(c.consentType),
      })),
    });
  } catch (error) {
    console.error("GET /api/consent error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve consents" },
      { status: 500 }
    );
  }
}

// ─── POST /api/consent ──────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    const userId = user.id;

    const body = await request.json();
    const parsed = recordConsentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { consentType, version, granted, method } = parsed.data;
    const ipAddress = getClientIp(request);

    const record = await recordConsent(
      userId,
      consentType,
      version,
      granted,
      method,
      ipAddress
    );

    return NextResponse.json({ consent: record }, { status: 201 });
  } catch (error) {
    console.error("POST /api/consent error:", error);
    return NextResponse.json(
      { error: "Failed to record consent" },
      { status: 500 }
    );
  }
}

// ─── DELETE /api/consent ────────────────────────────────────────────────

export async function DELETE(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    const userId = user.id;

    const body = await request.json();
    const parsed = withdrawConsentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { consentType } = parsed.data;
    const ipAddress = getClientIp(request);

    const record = await withdrawConsent(userId, consentType, ipAddress);

    return NextResponse.json({
      message: `Consent "${consentType}" has been withdrawn`,
      consent: record,
    });
  } catch (error) {
    if (error instanceof Error && error.message.includes("Cannot withdraw essential consent")) {
      return NextResponse.json(
        { error: error.message },
        { status: 403 }
      );
    }

    console.error("DELETE /api/consent error:", error);
    return NextResponse.json(
      { error: "Failed to withdraw consent" },
      { status: 500 }
    );
  }
}
