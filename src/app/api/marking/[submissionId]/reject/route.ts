// ─── Teacher Review · Reject (thin wrapper) ────────────────────────────────
// POST /api/marking/[submissionId]/reject
//
// Convenience endpoint equivalent to POST /api/marking/[submissionId]/review
// with { decision: 'reject' }. All logic (auth, authz, validation, the
// teacher_moderations insert and the marking_submissions status transition
// to 'rejected') lives in the shared `handleReview` exported from
// ../review/route.ts — this file MUST NOT duplicate it. Any extra body
// fields (teacherFeedback, moderationNotes, adjustmentReason, etc.) are
// still honoured for the audit trail.

import { NextRequest } from 'next/server'
import { handleReview } from '../review/route'

export const dynamic = 'force-dynamic'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ submissionId: string }> },
) {
  const { submissionId } = await params
  return handleReview(request, submissionId, 'reject')
}
