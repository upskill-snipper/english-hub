import { NextRequest, NextResponse } from "next/server";
import { reviews } from "../store";

// ---------------------------------------------------------------------------
// GET /api/review/[id] — get a specific review request by reference number
// ---------------------------------------------------------------------------

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // TODO: also verify that the review belongs to the authenticated user
  const review = reviews.find((r) => r.referenceNumber === id);

  if (!review) {
    return NextResponse.json(
      { error: "Review request not found." },
      { status: 404 }
    );
  }

  return NextResponse.json(review);
}
