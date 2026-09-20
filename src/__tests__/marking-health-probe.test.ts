import { describe, it, expect, vi, beforeAll, beforeEach, afterEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * A health check that could not see any failure marking has actually had
 * (REL-9).
 *
 * THE DEFECT (19 September 2026). `/api/health/ai` asks seven model ids to
 * reply with the word "ok" inside 8 tokens. That proves an id is callable on
 * this key and nothing else. It stays green through:
 *
 *   - the safety layer refusing to mark benign exam prose (which happened on
 *     18 September during the live examiner smoke test),
 *   - `generateFeedback` failing to parse the response, which breaks marking
 *     for every learner while the provider is perfectly healthy,
 *   - a mark that parses but is outside the range the paper can award.
 *
 * And the unit suite cannot catch any of them either - it "passes in ten
 * seconds and mocks every database call", which is why it passed throughout
 * both model-retirement outages.
 *
 * THE PROBE GOES DOWN THE PATH LEARNERS USE, WHICH IS NOT THE OBVIOUS ONE. The
 * backlog asked for a probe of the marking engine's forced tool-use call. The
 * learner-facing routes do not use that engine - they use
 * buildMarkingPrompt -> messages.create -> generateFeedback, a TEXT parser. The
 * engine's only caller sits behind a feature flag and a calibration gate that
 * returns 503, so a probe built against it would have failed every run for
 * reasons unrelated to whether marking works.
 */

const ROOT = process.cwd()
const PROBE_SRC = readFileSync(join(ROOT, 'src/lib/marking/health-probe.ts'), 'utf8')
const ROUTE_SRC = readFileSync(join(ROOT, 'src/app/api/health/marking/route.ts'), 'utf8')

// ─── The probe exercises the real path ──────────────────────────────────────

describe('what the probe calls', () => {
  it('uses the learner-facing prompt builder and parser', () => {
    expect(PROBE_SRC).toContain("from './prompt-builder'")
    expect(PROBE_SRC).toContain("from './feedback-generator'")
    expect(PROBE_SRC).toContain('generateFeedback(')
  })

  it('does NOT use the forced-tool engine', () => {
    // Its only caller is behind a feature flag and a 503 gate. A probe of it
    // would go red every night for a reason that is not a marking failure.
    expect(PROBE_SRC).not.toMatch(/from '\.\/engine\//)
    expect(PROBE_SRC).not.toMatch(/markSubmission|runMarker/)
  })

  it('matches the production timeout', () => {
    // /api/mark passes 50_000 under maxDuration 60, so a 45-second mark is a
    // SUCCESS for a paying learner. A tighter probe timeout would report red on
    // a run the product treats as fine.
    expect(PROBE_SRC).toMatch(/PROBE_TIMEOUT_MS = 50_000/)
    const route = readFileSync(join(ROOT, 'src/app/api/mark/route.ts'), 'utf8')
    expect(route).toMatch(/timeout: 50_000/)
  })

  it('marks something essay-shaped, not a liveness ping', () => {
    // The failure it exists to catch is a safety layer refusing benign exam
    // writing. A probe that does not look like the thing that gets refused
    // cannot see that happen.
    const essay = PROBE_SRC.slice(PROBE_SRC.indexOf('PROBE_ESSAY'))
    expect(essay.length).toBeGreaterThan(200)
    expect(PROBE_SRC).not.toMatch(/Reply with the single word/)
    expect(PROBE_SRC).not.toMatch(/max_tokens: 8\b/)
  })
})

// ─── Behaviour, with the provider mocked ────────────────────────────────────

const createMock = vi.fn()
vi.mock('@/lib/anthropic-client', async (orig) => ({
  ...(await orig<Record<string, unknown>>()),
  getAnthropicClient: () => ({ messages: { create: createMock } }),
}))

function reply(text: string) {
  return { content: [{ type: 'text', text }], usage: { input_tokens: 1, output_tokens: 1 } }
}

/**
 * A well-formed marking response.
 *
 * The inflated per-AO `maxMarks` is LOAD-BEARING and must not be "tidied" back
 * to the real tariff. generateFeedback clamps `marks` into [0, maxMarks] for
 * every entry, so the per-AO relation can never fail - but predictGrade sums
 * the AO marks for `totalMarks` while taking the ceiling from the QUESTION.
 * Inflating the AO maximum is the only way to produce a total that exceeds the
 * paper, which is the one range assertion that is actually falsifiable.
 */
function overMaxResponse() {
  return JSON.stringify({
    aoScores: [
      {
        id: 'AO1',
        label: 'AO1',
        marks: 900,
        maxMarks: 900,
        band: 'Level 4',
        justification: 'x',
        evidence: ['y'],
      },
    ],
    strengths: [{ point: 'a', quote: 'b' }],
    improvements: [{ point: 'c', suggestion: 'd' }],
    nextStepsToNextGrade: ['e'],
    summary: 'f',
  })
}

beforeEach(() => {
  createMock.mockReset()
})

/**
 * Load the module chain ONCE, before the clock starts on any test.
 *
 * THE FLAKE THIS FIXES. `reports ok when a real mark comes back` is the first
 * test to `await import('@/lib/marking/health-probe')`, so it paid the cost of
 * resolving that whole chain - the probe, the feedback generator and the
 * seventeen mark-scheme modules, 6,315 lines - inside its own five-second
 * budget. The four tests after it hit a warm cache and run in milliseconds.
 *
 * Alone the file takes about a second and passes. Under the full suite, with
 * every worker competing, it measured 5,238ms against a 5,000ms limit and the
 * push was rejected. It failed roughly one run in four, which is the worst
 * frequency to have: often enough to block work, rarely enough to look like
 * someone else's problem.
 *
 * Warming the import here moves that cost out of a test's timeout rather than
 * raising the limit, so the assertion still fails if the probe genuinely hangs.
 */
beforeAll(async () => {
  await import('@/lib/marking/health-probe')
  await import('@/lib/marking/mark-schemes')
}, 60_000)

describe('the probe result', () => {
  it('reports ok when a real mark comes back', async () => {
    const { runMarkingProbe, PROBE_SCHEME_ID } = await import('@/lib/marking/health-probe')
    const { getMarkScheme } = await import('@/lib/marking/mark-schemes')
    const scheme = getMarkScheme(PROBE_SCHEME_ID)!
    const q = scheme.questions[0]!
    const ao = q.assessmentObjectives[0]!

    createMock.mockResolvedValue(
      reply(
        JSON.stringify({
          aoScores: [
            {
              id: ao.id,
              label: ao.label,
              marks: 1,
              maxMarks: ao.maxMarks,
              band: 'Level 1',
              justification: 'x',
              evidence: ['y'],
            },
          ],
          strengths: [{ point: 'a', quote: 'b' }],
          improvements: [{ point: 'c', suggestion: 'd' }],
          nextStepsToNextGrade: ['e'],
          summary: 'f',
        }),
      ),
    )

    const r = await runMarkingProbe()
    expect(r.stage).toBe('ok')
    expect(r.ok).toBe(true)
    expect(r.totalMarks).toBeGreaterThanOrEqual(0)
  })

  it('reports stage=provider when the call throws', async () => {
    const { runMarkingProbe } = await import('@/lib/marking/health-probe')
    createMock.mockRejectedValue(new Error('overloaded_error'))
    const r = await runMarkingProbe()
    expect(r.ok).toBe(false)
    expect(r.stage).toBe('provider')
    expect(r.detail).toContain('overloaded')
  })

  it('reports stage=parse when the model refuses', async () => {
    // A refusal is a SUCCESSFUL response containing prose, which is precisely
    // why the 8-token liveness ping cannot see one.
    const { runMarkingProbe } = await import('@/lib/marking/health-probe')
    createMock.mockResolvedValue(reply("I can't help with marking this piece of student writing."))
    const r = await runMarkingProbe()
    expect(r.ok).toBe(false)
    expect(r.stage).toBe('parse')
  })

  it('reports stage=range when the total exceeds the paper', async () => {
    const { runMarkingProbe } = await import('@/lib/marking/health-probe')
    createMock.mockResolvedValue(reply(overMaxResponse()))
    const r = await runMarkingProbe()
    expect(r.ok).toBe(false)
    expect(r.stage).toBe('range')
  })

  it('never throws, whatever comes back', async () => {
    const { runMarkingProbe } = await import('@/lib/marking/health-probe')
    createMock.mockResolvedValue({ content: [] })
    await expect(runMarkingProbe()).resolves.toBeTruthy()
  })
})

// ─── The route ──────────────────────────────────────────────────────────────

describe('the route', () => {
  const ORIGINAL = process.env.CRON_SECRET

  beforeEach(() => {
    // Without this the auth block returns 500 'Server misconfiguration', not
    // 401 - vitest sets no CRON_SECRET, so a "no header -> 401" assertion
    // would fail against a correct route for a reason unrelated to auth.
    process.env.CRON_SECRET = 'probe-test-secret'
  })

  afterEach(() => {
    if (ORIGINAL === undefined) delete process.env.CRON_SECRET
    else process.env.CRON_SECRET = ORIGINAL
  })

  it('refuses an unauthenticated request without running the probe', async () => {
    const { GET } = await import('@/app/api/health/marking/route')
    const { NextRequest } = await import('next/server')
    createMock.mockReset()

    const res = await GET(new NextRequest('http://localhost/api/health/marking'))
    expect(res.status).toBe(401)
    // The valuable half: an unauthenticated caller must not be able to make us
    // spend on a model call.
    expect(createMock).not.toHaveBeenCalled()
  })

  it('answers 200 with ok:false rather than 500 on a failed probe', () => {
    // A health endpoint that 500s when the thing it monitors is broken is
    // indistinguishable from one that is itself broken, and the two want
    // different responses from whoever is woken up.
    const body = ROUTE_SRC.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '')
    const afterProbe = body.slice(body.indexOf('await runMarkingProbe()'))
    expect(afterProbe).not.toMatch(/status: 500/)
  })
})

// ─── It is actually scheduled ───────────────────────────────────────────────

describe('the schedule', () => {
  it('is registered as a cron', () => {
    const vercel = JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf8')) as {
      crons: { path: string; schedule: string }[]
    }
    const entry = vercel.crons.find((c) => c.path === '/api/health/marking')
    expect(entry, 'a probe nothing runs is not a probe').toBeTruthy()
  })

  it('runs after the liveness probe, not at the same minute', () => {
    // So a provider-wide outage shows in both and a marking-only failure shows
    // in one. Same minute would make the two indistinguishable in a log.
    const vercel = JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf8')) as {
      crons: { path: string; schedule: string }[]
    }
    const ai = vercel.crons.find((c) => c.path === '/api/health/ai')!
    const marking = vercel.crons.find((c) => c.path === '/api/health/marking')!
    expect(marking.schedule).not.toBe(ai.schedule)
  })
})

// ─── The streaming route reports its failures ───────────────────────────────

describe('/api/mark/stream', () => {
  it('reports a parse failure rather than only telling the learner', () => {
    // It refunded the trial use, wrote an audit row and said "try again" - all
    // correct, and all invisible to us. A parse failure means the model stopped
    // emitting the expected shape, which breaks marking for everyone at once.
    const src = readFileSync(join(ROOT, 'src/app/api/mark/stream/route.ts'), 'utf8')
    expect(src).toMatch(/captureException/)
    expect(src).toMatch(/could not parse the model response/)
  })
})
