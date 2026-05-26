// ─── Teacher Review · Approve (thin wrapper) ───────────────────────────────
// POST /api/marking/[submissionId]/approve
//
// Convenience endpoint equivalent to POST /api/marking/[submissionId]/review
// with { decision: 'approve' }. All logic (auth, authz, validation, the
// teacher_moderations insert and the marking_submissions status transition
// to 'approved' + approved_by/approved_at) lives in the shared `handleReview`
// exported from ../review/route.ts - this file MUST NOT duplicate it. Any
// extra body fields (teacherGrade, teacherFeedback, aoCorrections,
// adjustmentReason, moderationNotes, trainingEligible) are still honoured.

import { NextRequest } from 'next/server'
import { handleReview } from '../review/route'

export const dynamic = 'force-dynamic'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ submissionId: string }> },
) {
  const { submissionId } = await params
  return handleReview(request, submissionId, 'approve')
}
