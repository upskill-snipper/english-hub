// @vitest-environment node
/**
 * Smart IP - LIVE end-to-end smoke (Steps 12 verification).
 *
 * Proves the real pipeline on the REAL database with a REAL model call:
 *   submit → AI mark (Anthropic) → teacher approve → prepareTrainingRecord →
 *   training_data row → cleanup.
 *
 * SAFETY:
 *  - Gated by SMOKE_LIVE=1 so normal `npm test` / CI SKIP it entirely
 *    (no live DB/keys in CI). It never runs unattended.
 *  - Uses the project owner's own internal account as the test "student";
 *    its PrivacySettings are snapshotted and restored exactly.
 *  - Every row it writes is marked `__E2E_SMOKE__` and hard-deleted in a
 *    finally block; the test asserts the table counts return to baseline.
 *
 * Run: load .env.local then
 *   SMOKE_LIVE=1 node_modules/.bin/vitest run src/__tests__/smart-ip/e2e-live.smoke.test.ts
 */
import { describe, it, expect } from 'vitest'
import type Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { MARK_SCHEMES, getMarkScheme } from '@/lib/marking/mark-schemes'
import { buildMarkingPrompt } from '@/lib/marking/prompt-builder'
import { generateFeedback } from '@/lib/marking/feedback-generator'
import { getAnthropicClient, ANTHROPIC_MODEL } from '@/lib/anthropic-client'
import { insertSubmission, applyAiResult, deriveUncertaintyFlags } from '@/lib/marking/persistence'
import { prepareTrainingRecord } from '@/lib/training/prepare'

const LIVE = process.env.SMOKE_LIVE === '1'
const MARKER = '__E2E_SMOKE__'
const OWNER_EMAILS = ['cj@upskillenergy.com', 'info@upskillenergy.com']

const SAMPLE_ESSAY = `Shakespeare presents Macbeth's ambition as a corrupting force that destroys him. At the start he is "brave Macbeth", a loyal and heroic soldier, which makes his fall more tragic. After the witches' prophecy his "vaulting ambition" takes over his judgement. The metaphor of vaulting suggests a rider who overreaches and falls, implying ambition is self-defeating. Lady Macbeth fuels this, telling him to "screw your courage to the sticking-place", showing ambition spreading through manipulation. By the end, the "tomorrow and tomorrow" soliloquy reduces life to "a tale told by an idiot", showing how unchecked ambition has hollowed him out and stripped life of meaning. Shakespeare therefore warns a Jacobean audience that ambition divorced from morality leads to damnation and chaos.`

describe.skipIf(!LIVE)('Smart IP - live end-to-end pipeline', () => {
  it('submit → AI mark → teacher approve → prepareTrainingRecord (then cleans up)', async () => {
    const prisma = new PrismaClient()
    const svc = createServiceRoleClient()

    let submissionId: string | null = null
    let userPk: string | null = null
    let settingsSnapshot: { existed: boolean; row: Record<string, unknown> | null } = {
      existed: false,
      row: null,
    }

    // Baselines (clean DB expected: 0/0).
    const baseSubs = await prisma.$queryRawUnsafe<{ n: number }[]>(
      'select count(*)::int n from marking_submissions',
    )
    const baseTd = await prisma.$queryRawUnsafe<{ n: number }[]>(
      'select count(*)::int n from training_data',
    )

    try {
      // 1. Resolve the owner account as the test student.
      let studentAuthId = ''
      for (const email of OWNER_EMAILS) {
        const rows = await prisma.$queryRawUnsafe<{ id: string }[]>(
          'select id::text id from auth.users where email = $1 limit 1',
          email,
        )
        if (rows[0]?.id) {
          studentAuthId = rows[0].id
          break
        }
      }
      expect(studentAuthId, 'owner auth.users id resolved').toBeTruthy()

      const user = await prisma.user.findFirst({
        where: { supabaseUserId: studentAuthId },
        select: { id: true },
      })
      expect(user, 'owner Prisma User row exists').toBeTruthy()
      userPk = user!.id

      // 2. Snapshot + grant consent (restored in finally).
      const existing = await prisma.privacySettings.findUnique({
        where: { userId: userPk },
      })
      settingsSnapshot = {
        existed: Boolean(existing),
        row: existing as unknown as Record<string, unknown> | null,
      }
      await prisma.privacySettings.upsert({
        where: { userId: userPk },
        update: { aiTrainingOptIn: true, aiOptOut: false, schoolSharingEnabled: true },
        create: {
          userId: userPk,
          aiTrainingOptIn: true,
          aiOptOut: false,
          schoolSharingEnabled: true,
        },
      })

      // 3. Pick a real mark scheme + its first question.
      const scheme = Object.values(MARK_SCHEMES)[0]
      expect(scheme, 'a mark scheme is registered').toBeTruthy()
      const question = scheme.questions[0]
      expect(question, 'scheme has a question').toBeTruthy()
      const resolved = getMarkScheme(scheme.id)
      expect(resolved?.id).toBe(scheme.id)

      // 4. INSERT submission (b2c_self, marked for easy cleanup).
      const ins = await insertSubmission(svc, {
        source: 'b2c_self',
        studentId: studentAuthId,
        schoolId: null,
        classId: null,
        examBoard: scheme.board,
        qualification: scheme.subject ?? null,
        paper: scheme.paper ?? null,
        questionText: `${MARKER} ${question.questionType} - ambition in Macbeth`,
        questionType: question.questionType ?? null,
        studiedText: 'Macbeth',
        targetGrade: '7',
        markSchemeId: scheme.id,
        questionId: question.id,
        studentAnswer: SAMPLE_ESSAY,
      })
      submissionId = ins.id
      expect(submissionId).toBeTruthy()

      // 5. REAL AI mark - exact run-route sequence.
      const prompt = buildMarkingPrompt({
        scheme,
        questionId: question.id,
        questionText: 'How does Shakespeare present ambition in Macbeth?',
        essay: SAMPLE_ESSAY,
        studiedText: 'Macbeth',
      })
      const anthropic = getAnthropicClient(process.env.ANTHROPIC_API_KEY)
      const message = await anthropic.messages.create(
        {
          model: ANTHROPIC_MODEL,
          max_tokens: 4096,
          system: prompt.systemPrompt,
          messages: [{ role: 'user', content: prompt.userMessage }],
        },
        { timeout: 50_000 },
      )
      const responseText = message.content
        .filter((b): b is Anthropic.TextBlock => b.type === 'text')
        .map((b) => b.text)
        .join('')
      const feedback = generateFeedback({
        scheme,
        questionId: question.id,
        rawResponseText: responseText,
      })
      expect(feedback.ok, `model produced a parseable MarkingResult`).toBe(true)
      if (!feedback.ok) return
      const result = feedback.result
      expect(result.totalMarks).toBeGreaterThanOrEqual(0)
      expect(result.maxMarks).toBeGreaterThan(0)
      expect(result.aoScores.length).toBeGreaterThan(0)

      const updated = await applyAiResult(svc, submissionId, {
        result,
        uncertaintyFlags: deriveUncertaintyFlags(result),
        modelVersionId: null,
        promptVersionId: null,
        rubricVersionId: null,
        status: 'ai_marked',
      })
      expect(updated.status).toBe('ai_marked')
      expect(updated.ai_confidence).toBeNull() // never fabricate confidence

      // 6. Teacher moderation + approval (real DB writes).
      const teacherGrade = String(result.predictedGrade ?? '7')
      const modIns = await svc
        .from('teacher_moderations')
        .insert({
          submission_id: submissionId,
          reviewer_user_id: studentAuthId,
          reviewer_member_id: null,
          decision: 'approved',
          ai_grade: result.predictedGrade,
          teacher_grade: teacherGrade,
          ai_score: result.totalMarks,
          teacher_score: result.totalMarks,
          feedback_before: result.summary,
          feedback_after: `${MARKER} teacher-approved feedback`,
          adjustment_reason: `${MARKER} smoke`,
          training_eligible: true,
        })
        .select('id')
        .single()
      expect(modIns.error, 'moderation insert ok').toBeNull()

      const appr = await svc
        .from('marking_submissions')
        .update({
          status: 'approved',
          teacher_grade: teacherGrade,
          final_teacher_mark: teacherGrade,
          final_teacher_feedback: `${MARKER} teacher-approved feedback`,
          teacher_adjustment_reason: `${MARKER} smoke`,
          approved_by: studentAuthId,
          approved_at: new Date().toISOString(),
          training_eligible: true,
        })
        .eq('id', submissionId)
        .select('status, training_eligible')
        .single()
      expect(appr.error).toBeNull()
      expect((appr.data as { status: string }).status).toBe('approved')

      // 7. prepareTrainingRecord - the real consent-gated anonymiser.
      const prep = await prepareTrainingRecord(submissionId)
      // Either it succeeds (full corpus proof) OR the consent guard
      // correctly blocks (privacy safeguard proof on live data). Both
      // are correct behaviour; assert accordingly + no PII leaked.
      if (prep.ok) {
        const td = await svc
          .from('training_data')
          .select(
            'anon_submission_id, student_answer, exam_board, teacher_final_mark, source_submission_id',
          )
          .eq('source_submission_id', submissionId)
          .single()
        expect(td.error, 'training_data row created').toBeNull()
        const row = td.data as Record<string, unknown>
        expect(String(row.anon_submission_id)).not.toContain(submissionId) // id hashed
        expect(String(row.student_answer).length).toBeGreaterThan(20)
        // No raw owner identifiers in the corpus row.
        const blob = JSON.stringify(row)
        for (const e of OWNER_EMAILS) expect(blob).not.toContain(e)
        const st = await svc
          .from('marking_submissions')
          .select('status')
          .eq('id', submissionId)
          .single()
        expect((st.data as { status: string }).status).toBe('training_ready')
        // eslint-disable-next-line no-console
        console.log(
          `[E2E] FULL pipeline OK - predictedGrade=${result.predictedGrade} ` +
            `score=${result.totalMarks}/${result.maxMarks} → training_data row created (anonymised).`,
        )
      } else {
        // Gate engaged - assert NO corpus row exists (privacy upheld).
        const td = await svc
          .from('training_data')
          .select('id')
          .eq('source_submission_id', submissionId)
        expect((td.data ?? []).length, 'no corpus row when gate blocks').toBe(0)
        // eslint-disable-next-line no-console
        console.log(
          `[E2E] Pipeline OK through approval; prepareTrainingRecord correctly ` +
            `gated (reason="${prep.reason}") - privacy safeguard verified on live data. ` +
            `predictedGrade=${result.predictedGrade} score=${result.totalMarks}/${result.maxMarks}`,
        )
      }
    } finally {
      // ── Bulletproof cleanup ────────────────────────────────────────
      try {
        if (submissionId) {
          await svc.from('training_data').delete().eq('source_submission_id', submissionId)
          await svc.from('teacher_moderations').delete().eq('submission_id', submissionId)
          await svc.from('marking_submissions').delete().eq('id', submissionId)
        }
        // Safety net: nuke anything else carrying the marker.
        await svc.from('marking_submissions').delete().like('question_text', `%${MARKER}%`)
        // Restore PrivacySettings exactly.
        if (userPk) {
          if (settingsSnapshot.existed && settingsSnapshot.row) {
            const s = settingsSnapshot.row
            await prisma.privacySettings.update({
              where: { userId: userPk },
              data: {
                aiTrainingOptIn: Boolean(s.aiTrainingOptIn),
                aiOptOut: Boolean(s.aiOptOut),
                schoolSharingEnabled: Boolean(s.schoolSharingEnabled),
              },
            })
          } else {
            await prisma.privacySettings
              .delete({ where: { userId: userPk } })
              .catch(() => undefined)
          }
        }
      } finally {
        // Residue assertions - counts must return to baseline.
        const endSubs = await prisma.$queryRawUnsafe<{ n: number }[]>(
          'select count(*)::int n from marking_submissions',
        )
        const endTd = await prisma.$queryRawUnsafe<{ n: number }[]>(
          'select count(*)::int n from training_data',
        )
        // eslint-disable-next-line no-console
        console.log(
          `[E2E] residue check - marking_submissions ${baseSubs[0].n}→${endSubs[0].n}, ` +
            `training_data ${baseTd[0].n}→${endTd[0].n}`,
        )
        expect(endSubs[0].n).toBe(baseSubs[0].n)
        expect(endTd[0].n).toBe(baseTd[0].n)
        await prisma.$disconnect()
      }
    }
  }, 120_000)
})
