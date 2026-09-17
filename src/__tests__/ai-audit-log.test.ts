// ─── AI-decision audit log: the record must actually be written ─────────────
//
// `src/lib/ai-audit-log.ts` could never persist a row. Routes passed the
// Supabase auth uuid into `AuditLog.userId`, which is a foreign key to
// `User.id` (a cuid), and ~96% of real accounts had no `User` row at all, so
// the insert failed and the catch swallowed it. For 11 of the 13 AI routes
// that record is the only place the provider's error class is captured, which
// is why two model outages ran undiagnosed.
//
// These tests hold the fix to four properties:
//   1. a resolvable caller is written under the PRISMA id, not the auth uuid;
//   2. a non-subject sentinel - the literal 'anonymous' the free IELTS
//      diagnostic passes for signed-out visitors - never reaches the FK column;
//   3. an unresolvable caller still gets a record, unlinked, because the model
//      id and error class are worth more than the link;
//   4. when the row cannot be written at all, the diagnostic it carried is
//      printed rather than lost - and nothing is thrown into the route.
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { ANTHROPIC_MODEL } from '@/lib/anthropic-client'
import {
  logAiDecision,
  logAiDecisionError,
  normaliseSubjectId,
  formatAuditPersistenceFailure,
  NON_SUBJECT_USER_IDS,
  AI_AUDIT_MODEL,
  AI_DECISION_ACTION,
  type LogAiDecisionInput,
} from '@/lib/ai-audit-log'

// ─── Mocks ──────────────────────────────────────────────────────────────────

const auditCreate = vi.fn()
const consentCreate = vi.fn()
const userCreate = vi.fn()
const userUpdate = vi.fn()

vi.mock('@/lib/prisma', () => ({
  prisma: {
    auditLog: {
      get create() {
        return auditCreate
      },
    },
    consent: {
      get create() {
        return consentCreate
      },
    },
    user: {
      get create() {
        return userCreate
      },
      get update() {
        return userUpdate
      },
    },
  },
}))

const tryPrismaUserId = vi.fn()

vi.mock('@/lib/identity', () => ({
  tryPrismaUserId: (id: string) => tryPrismaUserId(id),
}))

const SUPABASE_UUID = '6b1a1f0e-9d3a-4f7a-9d2f-0f0a1b2c3d4e'
const PRISMA_CUID = 'clx0000000000000000000000'

function baseInput(overrides: Partial<LogAiDecisionInput> = {}): LogAiDecisionInput {
  return {
    feature: 'mark',
    userId: SUPABASE_UUID,
    isMinor: true,
    locale: 'en',
    inputText: 'The writer uses a metaphor to unsettle the reader.',
    markSchemeId: 'aqa-lang-p1',
    questionId: 'q2',
    requestStartedAt: new Date('2026-09-17T10:00:00.000Z'),
    responseFinishedAt: new Date('2026-09-17T10:00:04.000Z'),
    success: true,
    outputSummary: { predictedGrade: '6' },
    ...overrides,
  }
}

/** The single `prisma.auditLog.create` argument of call `n`. */
function createdRow(n = 0): { userId: string | null; details: Record<string, unknown> } {
  const arg = auditCreate.mock.calls[n]?.[0] as
    | { data: { userId: string | null; details: Record<string, unknown> } }
    | undefined
  if (!arg) throw new Error(`No auditLog.create call at index ${n}`)
  return { userId: arg.data.userId, details: arg.data.details }
}

function subjectOf(n = 0): Record<string, unknown> {
  return createdRow(n).details.subject as Record<string, unknown>
}

let errorSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  auditCreate.mockReset().mockResolvedValue({ id: 'audit_1' })
  consentCreate.mockReset()
  userCreate.mockReset()
  userUpdate.mockReset()
  tryPrismaUserId.mockReset().mockResolvedValue(PRISMA_CUID)
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  errorSpy.mockRestore()
})

// ─── 1. The record is written, under the id the foreign key references ──────

describe('the AI decision record reaches the database', () => {
  it('writes the Prisma user id, not the Supabase auth uuid', async () => {
    await logAiDecision(baseInput())

    expect(auditCreate).toHaveBeenCalledTimes(1)
    const row = createdRow()
    expect(row.userId).toBe(PRISMA_CUID)
    expect(row.userId).not.toBe(SUPABASE_UUID)
    expect(tryPrismaUserId).toHaveBeenCalledWith(SUPABASE_UUID)
    expect(subjectOf().identity).toBe('linked')
  })

  it('files the row as an ai_decision carrying the model actually called', async () => {
    await logAiDecision(baseInput())

    const arg = auditCreate.mock.calls[0][0] as { data: Record<string, unknown> }
    expect(arg.data.action).toBe(AI_DECISION_ACTION)
    expect(arg.data.resourceId).toBe('mark')
    expect(createdRow().details.model).toBe(ANTHROPIC_MODEL)
    expect(AI_AUDIT_MODEL).toBe(ANTHROPIC_MODEL)
  })

  it('captures the provider error class and status on the failure path', async () => {
    await logAiDecision(
      baseInput({
        success: false,
        outputSummary: undefined,
        errorClass: 'BadRequestError',
        errorMessage: 'model: claude-sonnet-4-6 is not supported',
        errorStatus: 400,
      }),
    )

    const details = createdRow().details
    expect(details.success).toBe(false)
    expect(details.errorClass).toBe('BadRequestError')
    expect(details.errorStatus).toBe(400)
  })

  it('derives class, message and status from a thrown provider error', async () => {
    const err = Object.assign(new Error('model not found'), {
      name: 'NotFoundError',
      status: 404,
    })

    await logAiDecisionError(
      {
        feature: 'ielts/writing-feedback',
        userId: SUPABASE_UUID,
        requestStartedAt: new Date('2026-09-17T10:00:00.000Z'),
        responseFinishedAt: new Date('2026-09-17T10:00:01.000Z'),
      },
      err,
    )

    const details = createdRow().details
    expect(details.errorClass).toBe('NotFoundError')
    expect(details.errorStatus).toBe(404)
    expect(details.success).toBe(false)
  })
})

// ─── 2.'anonymous' is not a person ──────────────────────────────────────────

describe("the literal 'anonymous' never reaches the foreign-key column", () => {
  it("writes NULL, not 'anonymous', for a signed-out diagnostic visitor", async () => {
    // Exactly what src/app/api/ielts/diagnostic-assess/route.ts passes.
    await logAiDecision(baseInput({ feature: 'ielts/diagnostic-assess', userId: 'anonymous' }))

    const row = createdRow()
    expect(row.userId).toBeNull()
    expect(subjectOf().identity).toBe('anonymous')
    // Nothing was projected: there is no account to project.
    expect(tryPrismaUserId).not.toHaveBeenCalled()
  })

  it('rejects every non-subject sentinel, in any case, with any padding', () => {
    for (const sentinel of NON_SUBJECT_USER_IDS) {
      expect(normaliseSubjectId(sentinel)).toBeNull()
      expect(normaliseSubjectId(sentinel.toUpperCase())).toBeNull()
      expect(normaliseSubjectId(`  ${sentinel}  `)).toBeNull()
    }
    expect(normaliseSubjectId('')).toBeNull()
    expect(normaliseSubjectId('   ')).toBeNull()
    expect(normaliseSubjectId(null)).toBeNull()
    expect(normaliseSubjectId(undefined)).toBeNull()
  })

  it('does not case-fold a real id, because cuids and uuids are case-sensitive', () => {
    const mixed = 'Clx0000000000000000000ABC'
    expect(normaliseSubjectId(` ${mixed} `)).toBe(mixed)
  })

  it('records no subject hash when there was no subject', async () => {
    await logAiDecision(baseInput({ userId: 'anonymous' }))
    expect(subjectOf().supabaseUserSha256).toBeNull()
  })
})

// ─── 3. An unresolvable caller still gets a record ──────────────────────────

describe('an unlinkable record is still a record', () => {
  it('persists with a NULL link when identity cannot be resolved', async () => {
    tryPrismaUserId.mockResolvedValue(null)

    await logAiDecision(
      baseInput({
        success: false,
        errorClass: 'BadRequestError',
        errorStatus: 400,
      }),
    )

    expect(auditCreate).toHaveBeenCalledTimes(1)
    const row = createdRow()
    expect(row.userId).toBeNull()
    expect(subjectOf().identity).toBe('unresolved')
    // The point of writing it anyway: the outage evidence survives.
    expect(row.details.model).toBe(ANTHROPIC_MODEL)
    expect(row.details.errorClass).toBe('BadRequestError')
    expect(row.details.errorStatus).toBe(400)
  })

  it('records why resolution failed when the identity layer throws', async () => {
    tryPrismaUserId.mockRejectedValue(
      Object.assign(new Error('operator review required'), { name: 'IdentityConflict' }),
    )

    await logAiDecision(baseInput())

    expect(createdRow().userId).toBeNull()
    expect(subjectOf().unresolvedReason).toBe('IdentityConflict')
  })

  it('drops the link rather than the row when the write rejects on it', async () => {
    auditCreate
      .mockRejectedValueOnce(
        Object.assign(new Error('Foreign key constraint failed'), {
          name: 'PrismaClientKnownRequestError',
        }),
      )
      .mockResolvedValueOnce({ id: 'audit_2' })

    await logAiDecision(
      baseInput({ success: false, errorClass: 'APIConnectionTimeoutError', errorStatus: null }),
    )

    expect(auditCreate).toHaveBeenCalledTimes(2)
    const retried = createdRow(1)
    expect(retried.userId).toBeNull()
    expect(subjectOf(1).userLinkDropped).toBe(true)
    expect(retried.details.errorClass).toBe('APIConnectionTimeoutError')

    const printed = errorSpy.mock.calls.flat().join(' ')
    expect(printed).toContain('persisted-without-user-link')
    expect(printed).toContain(ANTHROPIC_MODEL)
  })
})

// ─── 4. A lost row must not take the diagnostic with it ─────────────────────

describe('the diagnostic survives a failed write', () => {
  it('prints the model id and the provider error class when nothing can be written', async () => {
    auditCreate.mockRejectedValue(new Error('database is unreachable'))

    await logAiDecision(
      baseInput({
        success: false,
        errorClass: 'BadRequestError',
        errorMessage: 'model: claude-sonnet-4-6 is not supported',
        errorStatus: 400,
      }),
    )

    const printed = errorSpy.mock.calls.flat().join(' ')
    expect(printed).toContain('record-not-persisted')
    expect(printed).toContain(`model=${ANTHROPIC_MODEL}`)
    expect(printed).toContain('aiErrorClass=BadRequestError')
    expect(printed).toContain('aiErrorStatus=400')
    expect(printed).toContain('feature=mark')
  })

  it('never throws into the route, whatever fails', async () => {
    auditCreate.mockRejectedValue(new Error('database is unreachable'))
    tryPrismaUserId.mockRejectedValue(new Error('supabase unreachable'))

    await expect(logAiDecision(baseInput())).resolves.toBeUndefined()
    await expect(
      logAiDecisionError(
        {
          feature: 'cefr-assess',
          userId: SUPABASE_UUID,
          requestStartedAt: new Date(),
          responseFinishedAt: new Date(),
        },
        new Error('boom'),
      ),
    ).resolves.toBeUndefined()
  })

  it('names the model even when the caller reported no AI error', () => {
    const line = formatAuditPersistenceFailure({
      input: baseInput(),
      outcome: 'record-not-persisted',
      persistErrorClass: 'PrismaClientInitializationError',
      persistErrorMessage: 'no connection',
    })

    expect(line).toContain(`model=${ANTHROPIC_MODEL}`)
    expect(line).toContain('aiErrorClass=n/a')
    expect(line).toContain('persistErrorClass=PrismaClientInitializationError')
  })
})

// ─── 5. The logger stays a logger ───────────────────────────────────────────

describe('logging a decision changes nothing else about the account', () => {
  it('grants no consent and writes no user row of its own', async () => {
    await logAiDecision(baseInput())

    expect(consentCreate).not.toHaveBeenCalled()
    expect(userCreate).not.toHaveBeenCalled()
    expect(userUpdate).not.toHaveBeenCalled()
    // Projection happens in exactly one place, and it is not this module.
    expect(tryPrismaUserId).toHaveBeenCalledTimes(1)
  })

  it('delegates identity resolution instead of looking users up itself', () => {
    const source = readFileSync(join(process.cwd(), 'src', 'lib', 'ai-audit-log.ts'), 'utf8')
    expect(source).toMatch(/@\/lib\/identity/)
    expect(source).not.toMatch(/prisma\s*\.\s*user\s*\./)
  })

  it('keeps the learner text out of the record and the raw uuid out of details', async () => {
    const essay = 'The writer uses a metaphor to unsettle the reader.'
    await logAiDecision(baseInput({ inputText: essay }))

    const details = createdRow().details
    const serialised = JSON.stringify(details)

    expect(details.rawInput).toBeUndefined()
    expect(details.rawInputStored).toBe(false)
    expect(details.inputSha256).toMatch(/^[0-9a-f]{64}$/)
    expect(details.inputLength).toBe(essay.length)
    expect(serialised).not.toContain(essay)

    // Erasure nullifies AuditLog.userId (data-retention.ts step 9). A raw auth
    // uuid left in `details` would outlive that erasure as a pointer to the
    // erased person, so only a hash of it is kept.
    expect(serialised).not.toContain(SUPABASE_UUID)
    expect(subjectOf().supabaseUserSha256).toMatch(/^[0-9a-f]{64}$/)
  })
})
