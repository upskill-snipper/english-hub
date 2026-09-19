import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The Sentry SDK on the edge, with nowhere to send anything (PERF-3).
 *
 * THE DEFECT. `src/instrumentation.ts` imported `sentry.server.config`
 * unconditionally on the edge runtime. That config calls
 * `Sentry.init({ dsn: process.env.SENTRY_DSN })`, and SENTRY_DSN is not set in
 * this project at all - it is absent from `.env.local`, which is production.
 * So every middleware invocation, on every request that is not a static asset,
 * pulled in a 254 KB edge bundle in order to initialise an error reporter that
 * has no address to report to.
 *
 * Middleware runs on essentially every request, so this is not a cold-start
 * cost paid occasionally. It is paid on the JSON and asset requests a page
 * makes after load too, which is why the measured floor for any request was
 * above 350 ms before any real work started.
 *
 * WHY THE GUARD READS THE VARIABLE AT RUNTIME rather than at build time. If
 * Calum adds SENTRY_DSN in Vercel, error reporting must start working without
 * anybody editing this file. A build-time gate would bake the absence in and
 * silently keep Sentry dead after the variable was set, which is a worse bug
 * than the one being fixed and would be invisible.
 *
 * The behavioural tests below are the ones that bite: they assert that
 * `Sentry.init` is not called when there is no DSN, and IS called when there
 * is. The structural test underneath only guards the shape.
 */

const ORIGINAL_DSN = process.env.SENTRY_DSN
const ORIGINAL_RUNTIME = process.env.NEXT_RUNTIME

const initSpy = vi.fn()

vi.mock('@sentry/nextjs', () => ({
  init: (...args: unknown[]) => initSpy(...args),
  captureException: vi.fn(),
  captureRequestError: vi.fn(),
}))

// env-validation reaches for real environment variables and is not what this
// file is about; the nodejs branch is exercised only to prove the guard is
// symmetrical.
vi.mock('@/lib/env-validation', () => ({ validateEnv: () => undefined }))

beforeEach(() => {
  initSpy.mockClear()
  vi.resetModules()
})

afterEach(() => {
  if (ORIGINAL_DSN === undefined) delete process.env.SENTRY_DSN
  else process.env.SENTRY_DSN = ORIGINAL_DSN
  if (ORIGINAL_RUNTIME === undefined) delete process.env.NEXT_RUNTIME
  else process.env.NEXT_RUNTIME = ORIGINAL_RUNTIME
})

describe('the edge runtime, which is where middleware lives', () => {
  it('does not initialise Sentry when there is no DSN', async () => {
    // The whole point. Production has no SENTRY_DSN, so this is the live case.
    delete process.env.SENTRY_DSN
    process.env.NEXT_RUNTIME = 'edge'
    const { register } = await import('@/instrumentation')
    await register()
    expect(initSpy).not.toHaveBeenCalled()
  })

  it('does initialise Sentry when a DSN is present', async () => {
    // The counterweight. A guard that never lets Sentry load would satisfy the
    // test above perfectly and would quietly disable error reporting for good.
    process.env.SENTRY_DSN = 'https://examplePublicKey@o0.ingest.sentry.io/0'
    process.env.NEXT_RUNTIME = 'edge'
    const { register } = await import('@/instrumentation')
    await register()
    expect(initSpy).toHaveBeenCalledTimes(1)
  })

  it('treats an empty string as no DSN', async () => {
    // Vercel writes an empty value for a variable that exists but is blank, and
    // Sentry.init('') is the same no-op as Sentry.init(undefined).
    process.env.SENTRY_DSN = ''
    process.env.NEXT_RUNTIME = 'edge'
    const { register } = await import('@/instrumentation')
    await register()
    expect(initSpy).not.toHaveBeenCalled()
  })
})

describe('the node runtime', () => {
  it('applies the same rule, so the two runtimes cannot drift', async () => {
    delete process.env.SENTRY_DSN
    process.env.NEXT_RUNTIME = 'nodejs'
    const { register } = await import('@/instrumentation')
    await register()
    expect(initSpy).not.toHaveBeenCalled()
  })

  it('still validates the environment, which is not Sentry-dependent', async () => {
    // validateEnv() exists because a deploy missing STRIPE_WEBHOOK_SECRET booted
    // clean and failed later. Gating Sentry must not gate that as well.
    const validateEnv = vi.fn()
    vi.doMock('@/lib/env-validation', () => ({ validateEnv }))
    vi.resetModules()
    delete process.env.SENTRY_DSN
    process.env.NEXT_RUNTIME = 'nodejs'
    const { register } = await import('@/instrumentation')
    await register()
    expect(validateEnv).toHaveBeenCalledTimes(1)
    vi.doUnmock('@/lib/env-validation')
  })
})

describe('the shape of the file', () => {
  const SOURCE = readFileSync(join(process.cwd(), 'src/instrumentation.ts'), 'utf8')
  const code = SOURCE.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

  it('has no unguarded import of the Sentry config left', () => {
    // Both runtime branches must go through the guard. A third branch added
    // later without it would reintroduce the cost on that runtime only, which
    // is exactly the kind of half-fix that survives review.
    const imports = code.match(/import\(['"]\.\.\/sentry\.server\.config['"]\)/g) ?? []
    expect(imports.length).toBeGreaterThan(0)
    for (const line of code.split('\n')) {
      if (!line.includes('sentry.server.config')) continue
      expect(line, `unguarded Sentry import: ${line.trim()}`).toMatch(/hasDsn|SENTRY_DSN/)
    }
  })

  it('reads the DSN at request time, not at module scope', () => {
    // A module-scope constant would be evaluated once per isolate and, worse,
    // could be inlined by the bundler, baking today's absence in permanently.
    const moduleScope = code.slice(0, code.indexOf('export async function register'))
    expect(moduleScope).not.toContain('SENTRY_DSN')
  })
})
