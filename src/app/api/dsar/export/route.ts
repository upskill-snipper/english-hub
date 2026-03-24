import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { compileUserData } from "@/lib/dsar";
import { createServerSupabaseClient } from "@/lib/supabase/server";

const prisma = new PrismaClient();

// ─── GET /api/dsar/export — Export all user data ───────────────────────

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient();
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
    if (authError || !authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const sessionUserId = authUser.id;

    const format = request.nextUrl.searchParams.get("format") ?? "json";
    const dsarId = request.nextUrl.searchParams.get("dsarId");

    // Verify user exists
    const user = await prisma.user.findUnique({
      where: { id: sessionUserId },
      select: { id: true, firstName: true, lastName: true },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Compile all user data
    const userData = await compileUserData(sessionUserId);

    // If a DSAR ID was provided, mark it as completed
    if (dsarId) {
      const dsar = await prisma.dataAccessRequest.findFirst({
        where: {
          id: dsarId,
          userId: sessionUserId,
          type: { in: ["ACCESS", "PORTABILITY"] },
          status: { in: ["PENDING", "PROCESSING"] },
        },
      });

      if (dsar) {
        await prisma.dataAccessRequest.update({
          where: { id: dsarId },
          data: {
            status: "COMPLETED",
            completedAt: new Date(),
            responseDetails: "Data export downloaded by user",
          },
        });

        // Audit log
        await prisma.auditLog.create({
          data: {
            userId: sessionUserId,
            action: "DSAR_DATA_EXPORTED",
            resource: "DataAccessRequest",
            resourceId: dsarId,
            details: { format },
            ipAddress:
              request.headers.get("x-forwarded-for") ??
              request.headers.get("x-real-ip") ??
              "unknown",
          },
        });
      }
    }

    // Return JSON format
    if (format === "json") {
      const jsonStr = JSON.stringify(userData, null, 2);
      const filename = `the-english-hub-data-export-${new Date().toISOString().slice(0, 10)}.json`;

      return new NextResponse(jsonStr, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Content-Disposition": `attachment; filename="${filename}"`,
        },
      });
    }

    // Return structured text (PDF generation would require a library like puppeteer/pdfkit)
    if (format === "text") {
      const lines: string[] = [
        "THE ENGLISH HUB - PERSONAL DATA EXPORT",
        "=" .repeat(50),
        "",
        `Exported: ${userData.exportedAt}`,
        `Data Controller: ${userData.dataController.name}`,
        `Contact: ${userData.dataController.contact}`,
        "",
        userData.legalBasis,
        "",
        "─── PROFILE ───",
        ...Object.entries(userData.profile).map(
          ([k, v]) => `  ${k}: ${v}`
        ),
        "",
        `─── ESSAYS (${userData.essays.length}) ───`,
        ...userData.essays.map(
          (e) =>
            `  [${e.id}] ${e.title} (${e.subject}, ${e.examBoard}) - ${e.createdAt}`
        ),
        "",
        `─── AI FEEDBACK (${userData.aiFeedback.length}) ───`,
        ...userData.aiFeedback.map(
          (f) =>
            `  Essay: ${f.essayTitle} | Score: ${f.overallScore} | Model: ${f.modelVersion}`
        ),
        "",
        `─── CONSENTS (${userData.consents.length}) ───`,
        ...userData.consents.map(
          (c) =>
            `  ${c.type}: ${c.granted ? "Granted" : "Withdrawn"} (v${c.version}) - ${c.grantedAt}`
        ),
        "",
        "─── PRIVACY SETTINGS ───",
        ...(userData.privacySettings
          ? Object.entries(userData.privacySettings).map(
              ([k, v]) => `  ${k}: ${v}`
            )
          : ["  No privacy settings configured"]),
        "",
        "─── SUBSCRIPTION ───",
        ...(userData.subscription
          ? Object.entries(userData.subscription).map(
              ([k, v]) => `  ${k}: ${v}`
            )
          : ["  No active subscription"]),
        "",
        `─── AUDIT LOG (${userData.auditLog.length} entries) ───`,
        ...userData.auditLog.slice(0, 50).map(
          (a) => `  [${a.timestamp}] ${a.action} on ${a.resource}/${a.resourceId}`
        ),
        ...(userData.auditLog.length > 50
          ? [`  ... and ${userData.auditLog.length - 50} more entries (see JSON export for full log)`]
          : []),
      ];

      const textContent = lines.join("\n");
      const filename = `the-english-hub-data-export-${new Date().toISOString().slice(0, 10)}.txt`;

      return new NextResponse(textContent, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Content-Disposition": `attachment; filename="${filename}"`,
        },
      });
    }

    return NextResponse.json(
      { error: 'Invalid format. Use "json" or "text".' },
      { status: 400 }
    );
  } catch (err) {
    console.error("[DSAR Export] Failed to export data:", err);
    return NextResponse.json(
      { error: "Failed to export data. Please try again." },
      { status: 500 }
    );
  }
}
