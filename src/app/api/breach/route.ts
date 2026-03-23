import { NextRequest, NextResponse } from "next/server";
import {
  createBreachRecord,
  getAllBreaches,
  type CreateBreachParams,
  type BreachNature,
  type RiskLevel,
} from "@/lib/breach";

// ─── Validation helpers ─────────────────────────────────────────────────

const VALID_NATURES: BreachNature[] = [
  "confidentiality",
  "integrity",
  "availability",
];
const VALID_RISK_LEVELS: RiskLevel[] = ["low", "medium", "high"];

function validateBreachPayload(
  body: Record<string, unknown>
): string | null {
  if (!body.discoveryDateTime || typeof body.discoveryDateTime !== "string") {
    return "discoveryDateTime is required (ISO 8601 string).";
  }

  const discovery = new Date(body.discoveryDateTime);
  if (isNaN(discovery.getTime())) {
    return "discoveryDateTime must be a valid date.";
  }

  if (!body.reportedBy || typeof body.reportedBy !== "string") {
    return "reportedBy is required.";
  }

  if (
    !Array.isArray(body.nature) ||
    body.nature.length === 0 ||
    !body.nature.every((n: unknown) =>
      VALID_NATURES.includes(n as BreachNature)
    )
  ) {
    return `nature must be a non-empty array of: ${VALID_NATURES.join(", ")}.`;
  }

  if (!body.description || typeof body.description !== "string") {
    return "description is required.";
  }

  if (
    !Array.isArray(body.dataTypesAffected) ||
    body.dataTypesAffected.length === 0
  ) {
    return "dataTypesAffected must be a non-empty array.";
  }

  if (typeof body.involvesChildrensData !== "boolean") {
    return "involvesChildrensData is required (boolean).";
  }

  if (
    !Array.isArray(body.categoriesOfIndividuals) ||
    body.categoriesOfIndividuals.length === 0
  ) {
    return "categoriesOfIndividuals must be a non-empty array.";
  }

  if (
    !body.likelyConsequences ||
    typeof body.likelyConsequences !== "string"
  ) {
    return "likelyConsequences is required.";
  }

  if (!body.measuresTaken || typeof body.measuresTaken !== "string") {
    return "measuresTaken is required.";
  }

  if (
    !body.riskLevel ||
    !VALID_RISK_LEVELS.includes(body.riskLevel as RiskLevel)
  ) {
    return `riskLevel must be one of: ${VALID_RISK_LEVELS.join(", ")}.`;
  }

  return null;
}

// ─── POST /api/breach — create a new breach record ─────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validationError = validateBreachPayload(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    // Children's data breaches are auto-classified as HIGH
    const effectiveRiskLevel: RiskLevel = body.involvesChildrensData
      ? "high"
      : body.riskLevel;

    const params: CreateBreachParams = {
      discoveryDateTime: body.discoveryDateTime,
      reportedBy: body.reportedBy,
      nature: body.nature,
      description: body.description,
      dataTypesAffected: body.dataTypesAffected,
      recordsAffected:
        typeof body.recordsAffected === "number"
          ? body.recordsAffected
          : null,
      involvesChildrensData: body.involvesChildrensData,
      categoriesOfIndividuals: body.categoriesOfIndividuals,
      likelyConsequences: body.likelyConsequences,
      measuresTaken: body.measuresTaken,
      riskLevel: effectiveRiskLevel,
      ncgaaNotificationRequired: body.ncgaaNotificationRequired === true,
    };

    const record = createBreachRecord(params);

    return NextResponse.json(
      {
        id: record.id,
        referenceNumber: record.referenceNumber,
        deadlineICO: record.deadlineICO,
        riskLevel: record.riskLevel,
        icoNotificationRequired: record.icoNotificationRequired,
        individualNotificationRequired: record.individualNotificationRequired,
        ncgaaNotificationRequired: record.ncgaaNotificationRequired,
        escalated: body.involvesChildrensData && body.riskLevel !== "high",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}

// ─── GET /api/breach — list all breach records ──────────────────────────

export async function GET() {
  const breaches = getAllBreaches();

  return NextResponse.json({
    breaches: breaches.map((b) => ({
      id: b.id,
      referenceNumber: b.referenceNumber,
      discoveryDateTime: b.discoveryDateTime,
      deadlineICO: b.deadlineICO,
      nature: b.nature,
      riskLevel: b.riskLevel,
      involvesChildrensData: b.involvesChildrensData,
      status: b.status,
      icoNotificationRequired: b.icoNotificationRequired,
      individualNotificationRequired: b.individualNotificationRequired,
      ncgaaNotificationRequired: b.ncgaaNotificationRequired,
      icoNotifiedAt: b.icoNotifiedAt,
      ncgaaNotifiedAt: b.ncgaaNotifiedAt,
      individualsNotifiedAt: b.individualsNotifiedAt,
      recordsAffected: b.recordsAffected,
      createdAt: b.createdAt,
    })),
    total: breaches.length,
  });
}
