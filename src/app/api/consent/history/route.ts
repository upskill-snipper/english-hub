import { NextRequest, NextResponse } from "next/server";
import { getConsentHistory } from "@/lib/consent";

// ─── GET /api/consent/history ───────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

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
