// ─── What a marking status means to a teacher ──────────────────────────────
//
// marking_submissions.status is the AI-marking spine's lifecycle
// (src/lib/marking/persistence.ts). A teacher needs to know one thing from
// it: is this essay waiting for me? So each status maps to the sentence a
// teacher reads and to one of three queue buckets.
//
// 'ai_marked' reads "AI-marked, awaiting your review" (12 October 2026):
// pupils see the AI's feedback straight away and teachers review it
// afterwards, so an essay at this status has been marked and returned to the
// pupil by the AI and is waiting for its teacher, not for the AI.
// ────────────────────────────────────────────────────────────────────────────

export type QueueBucket = 'awaiting' | 'done' | 'not_marked'

export type StatusTone = 'attention' | 'progress' | 'good' | 'returned' | 'bad' | 'neutral'

export interface StatusInfo {
  labelKey: string
  /** Null for a status this page does not recognise; it then shows only under "All". */
  bucket: QueueBucket | null
  tone: StatusTone
}

const STATUS: Record<string, StatusInfo> = {
  submitted: { labelKey: 'school.queue.status.not_marked', bucket: 'not_marked', tone: 'neutral' },
  pending: { labelKey: 'school.queue.status.not_marked', bucket: 'not_marked', tone: 'neutral' },
  ai_marked: { labelKey: 'school.queue.status.ai_marked', bucket: 'awaiting', tone: 'attention' },
  teacher_review_required: {
    labelKey: 'school.queue.status.in_review',
    bucket: 'awaiting',
    tone: 'progress',
  },
  teacher_reviewed: { labelKey: 'school.queue.status.reviewed', bucket: 'done', tone: 'good' },
  approved: { labelKey: 'school.queue.status.approved', bucket: 'done', tone: 'good' },
  training_ready: { labelKey: 'school.queue.status.approved', bucket: 'done', tone: 'good' },
  excluded_from_training: {
    labelKey: 'school.queue.status.approved',
    bucket: 'done',
    tone: 'good',
  },
  returned: { labelKey: 'school.queue.status.returned', bucket: 'done', tone: 'returned' },
  rejected: { labelKey: 'school.queue.status.rejected', bucket: 'done', tone: 'bad' },
}

export function statusInfo(status: string): StatusInfo {
  return (
    STATUS[status] ?? { labelKey: 'school.queue.status.unknown', bucket: null, tone: 'neutral' }
  )
}

/** teacher_moderations.decision as a teacher reads it. */
export function decisionLabelKey(decision: string): string {
  switch (decision) {
    case 'approved':
      return 'school.queue.decision.approved'
    case 'rejected':
      return 'school.queue.decision.rejected'
    case 'corrected':
      return 'school.queue.decision.corrected'
    case 'sent_back':
      return 'school.queue.decision.sent_back'
    default:
      return 'school.queue.decision.other'
  }
}
