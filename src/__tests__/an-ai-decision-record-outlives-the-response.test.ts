// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

/**
 * An AI-decision record is written even when the route has already answered.
 *
 * WHY (10 October 2026). Most AI routes call `void logAiDecision(...)` so the
 * audit write adds no latency, and logAiDecision's own docblock said that was
 * safe. On Vercel it was not: once a route returns, the function can be frozen
 * with the write still pending, to resume only when the instance serves another
 * request, or never. In production one OFF_TOPIC record for /api/marking/run
 * was written 193 s after its run, at the moment the next essay arrived, and 2
 * of the 8 essays left unmarked to 10 October have no record at all. The log
 * that exists to make failures traceable was losing failures.
 *
 * THE FIX, held here. logAiDecision hands its own write to Next's `after()`,
 * which on Vercel passes it to `waitUntil`, so every caller is covered without
 * changing one of them. Outside a request `after()` throws E468 and the write
 * simply runs. Any other refusal is printed, because a record that may be
 * frozen must not pass silently.
 */

const { afterMock, auditCreate } = vi.hoisted(() => ({
  afterMock: vi.fn(),
  auditCreate: vi.fn(),
}))

vi.mock('next/server', async (importOriginal) => ({
  ...(await importOriginal<typeof import('next/server')>()),
  after: (task: unknown) => afterMock(task),
}))
vi.mock('@/lib/prisma', () => ({
  prisma: { auditLog: { create: (...args: unknown[]) => auditCreate(...args) } },
}))
vi.mock('@/lib/identity', () => ({ tryPrismaUserId: async () => null }))

import { logAiDecision, logAiDecisionError, type LogAiDecisionInput } from '@/lib/ai-audit-log'

const INPUT: LogAiDecisionInput = {
  feature: 'marking/run',
  userId: null,
  inputText: 'An essay',
  requestStartedAt: new Date('2026-10-10T09:00:00Z'),
  responseFinishedAt: new Date('2026-10-10T09:00:40Z'),
  success: false,
  errorClass: 'OFF_TOPIC',
}

/** The errors Next throws, with the codes it gives them (pinned below against Next itself). */
const nextError = (code: string, message: string) =>
  Object.defineProperty(new Error(message), '__NEXT_ERROR_CODE', { value: code })
const OUTSIDE_A_REQUEST = () => nextError('E468', '`after` was called outside a request scope.')
const NO_WAIT_UNTIL = () =>
  nextError('E91', '`after()` will not work correctly, because `waitUntil` is not available.')

/** Resolve the pending write. */
let finishWrite: () => void = () => {}

beforeEach(() => {
  afterMock.mockReset()
  auditCreate.mockReset()
  auditCreate.mockImplementation(
    () =>
      new Promise<void>((resolve) => {
        finishWrite = resolve
      }),
  )
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('an AI decision record outlives the response', () => {
  it('hands its own write to after(), and that write is the row being saved', async () => {
    const returned = logAiDecision(INPUT)
    expect(afterMock).toHaveBeenCalledOnce()
    expect(afterMock.mock.calls[0][0], 'after() was given something else').toBe(returned)

    // The promise the platform waits on is still pending while the row is.
    let settled = false
    void returned.then(() => {
      settled = true
    })
    await vi.waitFor(() => expect(auditCreate).toHaveBeenCalledOnce())
    expect(settled).toBe(false)
    finishWrite()
    await returned
    expect(settled).toBe(true)
    expect(auditCreate.mock.calls[0][0]).toMatchObject({ data: { action: 'ai_decision' } })
  })

  it('so a route that does not await it is covered too', async () => {
    void logAiDecision(INPUT)
    expect(afterMock).toHaveBeenCalledOnce()
    await vi.waitFor(() => expect(auditCreate).toHaveBeenCalledOnce())
    finishWrite()
  })

  it('and the handled-error helper registers the same way', async () => {
    const done = logAiDecisionError(
      {
        feature: 'mark',
        userId: null,
        requestStartedAt: new Date(),
        responseFinishedAt: new Date(),
      },
      new Error('overloaded'),
    )
    expect(afterMock).toHaveBeenCalledOnce()
    await vi.waitFor(() => expect(auditCreate).toHaveBeenCalledOnce())
    finishWrite()
    await done
  })

  it('never gives after() a promise that rejects, even when the write fails', async () => {
    const printed = vi.spyOn(console, 'error').mockImplementation(() => {})
    auditCreate.mockRejectedValue(new Error('connection refused'))
    void logAiDecision(INPUT)
    await expect(afterMock.mock.calls[0][0]).resolves.toBeUndefined()
    // The failure is still reported, as the reliability contract requires.
    expect(printed.mock.calls.flat().join(' ')).toContain('record-not-persisted')
  })
})

describe('when after() cannot help', () => {
  it('outside a request it still writes the row, and prints nothing', async () => {
    const printed = vi.spyOn(console, 'error').mockImplementation(() => {})
    afterMock.mockImplementation(() => {
      throw OUTSIDE_A_REQUEST()
    })
    const returned = logAiDecision(INPUT)
    await vi.waitFor(() => expect(auditCreate).toHaveBeenCalledOnce())
    finishWrite()
    await returned
    expect(printed).not.toHaveBeenCalled()
  })

  it('in a request the platform will not wait for, it still writes the row and says so', async () => {
    const printed = vi.spyOn(console, 'error').mockImplementation(() => {})
    afterMock.mockImplementation(() => {
      throw NO_WAIT_UNTIL()
    })
    const returned = logAiDecision(INPUT)
    expect(printed).toHaveBeenCalledOnce()
    expect(String(printed.mock.calls[0][0])).toMatch(
      /^\[ai-audit-log\] record may not outlive the response: .*waitUntil/,
    )
    await vi.waitFor(() => expect(auditCreate).toHaveBeenCalledOnce())
    finishWrite()
    await returned
  })

  it('Next really does throw E468 outside a request, which is what keeps tests and scripts quiet', async () => {
    const real = await vi.importActual<typeof import('next/server')>('next/server')
    let thrown: unknown = null
    try {
      real.after(Promise.resolve())
    } catch (err) {
      thrown = err
    }
    expect(thrown, 'after() no longer throws outside a request').not.toBeNull()
    expect((thrown as { __NEXT_ERROR_CODE?: unknown }).__NEXT_ERROR_CODE).toBe('E468')
  })
})

describe('nothing writes an ai_decision row except logAiDecision', () => {
  it('so no route can bypass the keep-alive', () => {
    const ROOT = join(process.cwd(), 'src')
    const LOGGER = join(ROOT, 'lib', 'ai-audit-log.ts')
    let scanned = 0
    const offenders: string[] = []
    const walk = (dir: string) => {
      for (const name of readdirSync(dir)) {
        const path = join(dir, name)
        if (statSync(path).isDirectory()) {
          if (name !== '__tests__' && name !== 'node_modules') walk(path)
        } else if (/\.tsx?$/.test(name) && !/\.test\.tsx?$/.test(name)) {
          scanned += 1
          const source = readFileSync(path, 'utf8')
          if (path === LOGGER) {
            // The one writer: proves the pattern below would see a write.
            expect(source).toMatch(/action:\s*AI_DECISION_ACTION/)
          } else if (/action:\s*(['"]ai_decision['"]|AI_DECISION_ACTION)/.test(source)) {
            offenders.push(path)
          }
        }
      }
    }
    walk(ROOT)
    // Without this, a scan of nothing would pass.
    expect(scanned).toBeGreaterThan(500)
    expect(offenders).toEqual([])
  })
})
