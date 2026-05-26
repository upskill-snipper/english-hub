// ─── Training-Record Preparation ─────────────────────────────────────────────
//
// `prepareTrainingRecord(submissionId)` promotes ONE teacher-approved marking
// submission into the anonymised, consent-gated `public.training_data` corpus.
//
// Hard gates (ALL must pass - otherwise the function returns { ok:false } and
// writes NOTHING to training_data):
//   1. The submission exists.
//   2. status === 'approved' AND training_eligible === true   (teacher sign-off
//      is mandatory before any row can ever enter the corpus).
//   3. SOURCE-AWARE consent. The consent gate applies ONLY to real-pupil
//      sources (a living, identifiable data subject):
//        • source 'b2c_self'  → PrivacySettings.aiTrainingOptIn      === true
//        • source 'b2b_class' → PrivacySettings.schoolSharingEnabled === true
//      AND `checkMinorAIConsent(studentUserId)` allowed (AI_PROCESSING consent
//      + parental consent for minors).
//      For source 'commissioned' / 'specimen' there is NO pupil data subject
//      (commissioned answers are paid-marker / author work; specimen is exam-
//      board material). The student-resolution + privacy-flag + minor checks
//      are SKIPPED entirely; the record is still anonymised (incidental PII
//      stripped by the existing anonymiser), inserted, status-advanced to
//      'training_ready', and audit-logged. Pupil-source behaviour is unchanged.
//
// Idempotent: keyed on `anon_submission_id = hashAuditInput(submissionId)`. If a
// training_data row already exists for this submission it is treated as success
// (no duplicate, status still advanced to 'training_ready').
//
// DB ACCESS RULES (house style):
//   • The NEW Smart-IP tables (marking_submissions read/update, training_data
//     insert) are touched via the Supabase SERVICE-ROLE client only - NEVER
//     Prisma (client not regenerated on this Windows box; training_data has no
//     authenticated RLS policy by design).
//   • `prisma.privacySettings` / `prisma.user` ARE existing generated models -
//     OK to use Prisma for the consent lookup.
//   • The audit row uses the existing `prisma.auditLog` model.
//
// Never throws raw PII into logs or the returned reason string.
// ────────────────────────────────────────────────────────────────────────────

import { createServiceRoleClient } from '@/lib/supabase/server'
import { hashAuditInput } from '@/lib/ai-audit-log'
import { checkMinorAIConsent } from '@/lib/consent-check'
import { anonymiseRecord, type RawSubmissionBundle } from '@/lib/training/anonymise'

export type PrepareTrainingResult = { ok: true; trainingId: string } | { ok: false; reason: string }

// ─── Internal: shapes we read from Supabase (cast - generated types don't yet
//     know the extended marking_submissions columns; same pattern as the
//     /api/school/marking/override route). ─────────────────────────────────────

interface SubmissionRow {
  id: string
  student_id: string | null
  school_id: string | null
  class_id: string | null
  source: string | null
  status: string | null
  training_eligible: boolean | null
  exam_board: string | null
  qualification: string | null
  paper: string | null
  question_text: string | null
  question_type: string | null
  rubric_ref: string | null
  essay_text: string | null
  ai_score: number | null
  ai_feedback: string | null
  ai_grade_band: string | null
  ai_ao_breakdown: unknown
  ai_confidence: number | null
  final_teacher_mark: string | null
  final_teacher_feedback: string | null
  teacher_adjustment_reason: string | null
  approved_at: string | null
}

interface ModerationRow {
  decision: string | null
  teacher_score: number | null
  teacher_grade: string | null
  ao_corrections: unknown
  feedback_after: string | null
  adjustment_reason: string | null
  created_at: string | null
}

interface ModelVersionRow {
  provider: string | null
  model_name: string | null
  model_version: string | null
}

interface PromptVersionRow {
  prompt_key: string | null
  content_hash: string | null
}

const SUBMISSION_SELECT =
  'id, student_id, school_id, class_id, source, status, training_eligible,' +
  ' exam_board, qualification, paper, question_text, question_type, rubric_ref,' +
  ' essay_text, ai_score, ai_feedback, ai_grade_band, ai_ao_breakdown,' +
  ' ai_confidence, final_teacher_mark, final_teacher_feedback,' +
  ' teacher_adjustment_reason, approved_at, model_version_id, prompt_version_id'

/** Parse a teacher mark that may be stored as a string ("17") or null. */
function parseMark(v: string | number | null | undefined): number | null {
  if (v === null || v === undefined) return null
  if (typeof v === 'number') return Number.isFinite(v) ? Math.round(v) : null
  const n = Number(String(v).trim())
  return Number.isFinite(n) ? Math.round(n) : null
}

/**
 * Best-effort audit write. Mirrors the ai-audit-log reliability contract:
 * never throws into the caller, never logs PII (only the submissionId, which
 * is an opaque UUID, and a coarse outcome).
 */
async function writeAudit(
  submissionId: string,
  outcome: 'prepared' | 'skipped_exists' | 'rejected',
  detail: Record<string, unknown>,
): Promise<void> {
  try {
    const { prisma } = await import('@/lib/prisma')
    await prisma.auditLog.create({
      data: {
        userId: null,
        action: 'training_prepare',
        resource: 'training_data',
        resourceId: submissionId,
        details: { schemaVersion: 1, outcome, ...detail },
        ipAddress: 'unknown',
      },
    })
  } catch (err) {
    console.error('[training/prepare] audit write failed', err)
  }
}

export async function prepareTrainingRecord(submissionId: string): Promise<PrepareTrainingResult> {
  const id = typeof submissionId === 'string' ? submissionId.trim() : ''
  if (!id) {
    return { ok: false, reason: 'submissionId is required' }
  }

  const admin = createServiceRoleClient()

  // ── 1. Load the submission (service role) ─────────────────────────────────
  const { data: subData, error: subErr } = await admin
    .from('marking_submissions')
    .select(SUBMISSION_SELECT)
    .eq('id', id)
    .maybeSingle()

  if (subErr) {
    console.error('[training/prepare] submission lookup failed', subErr.message)
    return { ok: false, reason: 'Failed to load submission.' }
  }
  if (!subData) {
    return { ok: false, reason: 'Submission not found.' }
  }

  const sub = subData as unknown as SubmissionRow & {
    model_version_id: string | null
    prompt_version_id: string | null
  }

  // ── 2. Teacher-approval gate (MANDATORY) ──────────────────────────────────
  if (sub.status !== 'approved') {
    await writeAudit(id, 'rejected', { reason: 'not_approved', status: sub.status })
    return {
      ok: false,
      reason: `Submission is not approved (status: ${sub.status ?? 'unknown'}). Teacher approval is required before training.`,
    }
  }
  if (sub.training_eligible !== true) {
    await writeAudit(id, 'rejected', { reason: 'not_training_eligible' })
    return {
      ok: false,
      reason: 'Submission is not marked training-eligible by the reviewing teacher.',
    }
  }
  if (!sub.essay_text || sub.essay_text.trim().length === 0) {
    await writeAudit(id, 'rejected', { reason: 'empty_answer' })
    return { ok: false, reason: 'Submission has no student answer to train on.' }
  }

  // Source discriminator. Unknown / null is treated conservatively as the
  // strictest pupil source ('b2b_class') so an unrecognised value can never
  // silently bypass the consent gate.
  const source = sub.source ?? 'b2b_class'

  // Real-pupil sources have a living, identifiable data subject and MUST pass
  // the consent gate. 'commissioned' (paid-marker / author work) and
  // 'specimen' (exam-board material) have NO pupil data subject - the consent,
  // student-resolution and minor checks are skipped for them (the record is
  // still anonymised + inserted + audited below).
  const PUPIL_SOURCES = ['b2c_self', 'b2b_class'] as const
  const isPupilSource = (PUPIL_SOURCES as readonly string[]).includes(source)

  // ── 3. Consent gate (PUPIL SOURCES ONLY) ──────────────────────────────────
  if (isPupilSource) {
    const studentSupabaseId = sub.student_id
    if (!studentSupabaseId) {
      await writeAudit(id, 'rejected', { reason: 'no_student', source })
      return { ok: false, reason: 'Submission has no associated student.' }
    }

    // marking_submissions.student_id is the Supabase auth user id; the Prisma
    // User row links via `supabaseUserId` (see schema.prisma MarkingSubmission
    // relation). Resolve the Prisma user to read PrivacySettings + run the
    // minor/AI consent check (which keys off the Prisma User id).
    const { prisma } = await import('@/lib/prisma')

    const studentUser = await prisma.user.findUnique({
      where: { supabaseUserId: studentSupabaseId },
      select: {
        id: true,
        accountStatus: true,
        privacySettings: {
          select: {
            aiTrainingOptIn: true,
            schoolSharingEnabled: true,
          },
        },
      },
    })

    if (!studentUser) {
      await writeAudit(id, 'rejected', { reason: 'student_user_not_found', source })
      return {
        ok: false,
        reason: 'Could not resolve the student account for consent verification.',
      }
    }
    if (studentUser.accountStatus !== 'ACTIVE') {
      await writeAudit(id, 'rejected', { reason: 'student_inactive', source })
      return { ok: false, reason: 'Student account is not active; cannot use for training.' }
    }

    const privacy = studentUser.privacySettings

    if (source === 'b2c_self') {
      if (privacy?.aiTrainingOptIn !== true) {
        await writeAudit(id, 'rejected', { reason: 'no_ai_training_opt_in', source })
        return {
          ok: false,
          reason: 'Student has not opted in to AI training (aiTrainingOptIn).',
        }
      }
    } else {
      // b2b_class (the only other pupil source).
      if (privacy?.schoolSharingEnabled !== true) {
        await writeAudit(id, 'rejected', { reason: 'no_school_sharing', source })
        return {
          ok: false,
          reason: 'School data sharing is not enabled for this student (schoolSharingEnabled).',
        }
      }
    }

    const minorConsent = await checkMinorAIConsent(studentUser.id)
    if (!minorConsent.allowed) {
      await writeAudit(id, 'rejected', { reason: 'minor_ai_consent_failed', source })
      return {
        ok: false,
        reason: minorConsent.reason ?? 'AI processing / parental consent not satisfied.',
      }
    }
  }

  // ── 4. Idempotency check ──────────────────────────────────────────────────
  const anonSubmissionId = hashAuditInput(id)
  const { data: existing, error: existErr } = await admin
    .from('training_data')
    .select('id')
    .eq('anon_submission_id', anonSubmissionId)
    .maybeSingle()

  if (existErr) {
    console.error('[training/prepare] dedupe lookup failed', existErr.message)
    return { ok: false, reason: 'Failed to check existing training data.' }
  }

  if (existing) {
    // Already prepared - make the status transition idempotent too, then
    // report success with the existing id.
    const existingId = (existing as { id: string }).id
    await admin
      .from('marking_submissions')
      .update({ status: 'training_ready' })
      .eq('id', id)
      .eq('status', 'approved')
    await writeAudit(id, 'skipped_exists', { trainingId: existingId, source })
    return { ok: true, trainingId: existingId }
  }

  // ── 5. Pull the latest moderation (correction reason / deltas) ────────────
  const { data: modData } = await admin
    .from('teacher_moderations')
    .select(
      'decision, teacher_score, teacher_grade, ao_corrections, feedback_after,' +
        ' adjustment_reason, created_at',
    )
    .eq('submission_id', id)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  const mod = (modData as unknown as ModerationRow | null) ?? null

  // ── 6. Resolve provenance version strings (best-effort) ───────────────────
  let modelVersion: string | null = null
  let promptVersion: string | null = null

  if (sub.model_version_id) {
    const { data: mv } = await admin
      .from('model_versions')
      .select('provider, model_name, model_version')
      .eq('id', sub.model_version_id)
      .maybeSingle()
    const m = mv as unknown as ModelVersionRow | null
    if (m) {
      modelVersion = [m.provider, m.model_name, m.model_version].filter(Boolean).join('/') || null
    }
  }
  if (sub.prompt_version_id) {
    const { data: pv } = await admin
      .from('prompt_versions')
      .select('prompt_key, content_hash')
      .eq('id', sub.prompt_version_id)
      .maybeSingle()
    const p = pv as unknown as PromptVersionRow | null
    if (p) {
      promptVersion = [p.prompt_key, p.content_hash].filter(Boolean).join('@') || null
    }
  }

  // ── 7. Build the raw bundle + anonymise ───────────────────────────────────
  // teacher_final_mark/feedback live on the submission as the inline final
  // decision; the latest moderation row is the richer label source - prefer
  // moderation values, fall back to the inline submission columns.
  const teacherFinalMark = parseMark(mod?.teacher_score) ?? parseMark(sub.final_teacher_mark)
  const teacherFinalFeedback = mod?.feedback_after ?? sub.final_teacher_feedback ?? null
  const teacherCorrectionReason = mod?.adjustment_reason ?? sub.teacher_adjustment_reason ?? null

  const bundle: RawSubmissionBundle = {
    submissionId: sub.id,
    schoolId: sub.school_id,
    classId: sub.class_id,
    source,
    examBoard: sub.exam_board,
    qualification: sub.qualification,
    paper: sub.paper,
    questionText: sub.question_text,
    questionType: sub.question_type,
    rubricVersion: sub.rubric_ref,
    studentAnswer: sub.essay_text,
    aiPredictedMark: sub.ai_score,
    aiFeedback: sub.ai_feedback,
    aiGradeBand: sub.ai_grade_band,
    aiAoBreakdown: sub.ai_ao_breakdown ?? null,
    aiConfidence: sub.ai_confidence,
    teacherFinalMark,
    teacherFinalFeedback,
    teacherCorrectionReason,
    aoCorrections: mod?.ao_corrections ?? null,
    approvedAt: sub.approved_at,
    modelVersion,
    promptVersion,
  }

  const row = anonymiseRecord(bundle, hashAuditInput)

  // ── 8. Insert into training_data (service role) ───────────────────────────
  const { data: inserted, error: insErr } = await admin
    .from('training_data')
    .insert(row as unknown as Record<string, unknown>)
    .select('id')
    .single()

  if (insErr || !inserted) {
    // Unique-violation race: another caller inserted between step 4 and here.
    // Re-read and treat as success (idempotent).
    const { data: raced } = await admin
      .from('training_data')
      .select('id')
      .eq('anon_submission_id', anonSubmissionId)
      .maybeSingle()
    if (raced) {
      await admin
        .from('marking_submissions')
        .update({ status: 'training_ready' })
        .eq('id', id)
        .eq('status', 'approved')
      const racedId = (raced as { id: string }).id
      await writeAudit(id, 'skipped_exists', { trainingId: racedId, source })
      return { ok: true, trainingId: racedId }
    }
    console.error('[training/prepare] insert failed', insErr?.message)
    return { ok: false, reason: 'Failed to write training record.' }
  }

  const trainingId = (inserted as { id: string }).id

  // ── 9. Advance submission status → training_ready ─────────────────────────
  const { error: statusErr } = await admin
    .from('marking_submissions')
    .update({ status: 'training_ready' })
    .eq('id', id)
    .eq('status', 'approved')

  if (statusErr) {
    // The training row exists & is valid; a status-bump failure must not lose
    // it. Log loudly; the row is still correct and idempotent on re-run.
    console.error('[training/prepare] status update failed', statusErr.message)
  }

  // ── 10. Audit ─────────────────────────────────────────────────────────────
  await writeAudit(id, 'prepared', {
    trainingId,
    source,
    consentExempt: !isPupilSource,
    markDelta: row.mark_delta,
    statusAdvanced: !statusErr,
  })

  return { ok: true, trainingId }
}
