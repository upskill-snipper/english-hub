import { NextRequest, NextResponse } from "next/server";
import { getConsentHistory } from "@/lib/consent";
import { createServerSupabaseClient } from "@/lib/supabase/server";

// ─── GET /api/consent/history ───────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const userId = user.id;

    const history = await getConsentHistory(userId);

    return NextResponse.json({
      history: history.map((record) => ({
        id: record.id,
        consentType: record.consentType,
        version: record.version,
        granted: record.granted,
        grantedAt: record.grantedAt,
        withdrawnAt: record.withdrawnAt,
        method: record.method,
      })),
      totalRecords: history.length,
    });
  } catch (error) {
    console.error("GET /api/consent/history error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve consent history" },
      { status: 500 }
    );
  }
}
