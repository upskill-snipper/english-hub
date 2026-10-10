// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import ts from 'typescript'

/**
 * Work a route starts and does not wait for is still finished after the
 * response has gone.
 *
 * WHY (10 October 2026). Server code started work it did not wait for, with
 * `void promise` or a bare `promise.catch(...)`. That covered the emails sent
 * when a parent links to a child, both account-deletion confirmations, a new
 * pupil's login details, an affiliate's welcome, a Trustpilot invite and its
 * record, a training-corpus row, a rate-limit sweep and two Sentry reports.
 * On Vercel a function can be frozen once it has answered, with that work
 * still pending: it resumes when the instance serves another request, or
 * never. The AI audit log showed this in production, with a record written
 * 193 s after its run, at the moment the next request arrived.
 *
 * THE FIX, held here. Every such piece of work goes through keepAlive
 * (src/lib/keep-alive.ts), which hands the promise to Next's `after()` and so
 * to Vercel's `waitUntil`. The guard below fails if server code goes back to
 * the two fire-and-forget idioms. Its own self-test proves it can see them.
 */

const { afterMock } = vi.hoisted(() => ({ afterMock: vi.fn() }))

vi.mock('next/server', async (importOriginal) => ({
  ...(await importOriginal<typeof import('next/server')>()),
  after: (task: unknown) => afterMock(task),
}))

import { keepAlive } from '@/lib/keep-alive'

const nextError = (code: string, message: string) =>
  Object.defineProperty(new Error(message), '__NEXT_ERROR_CODE', { value: code })

beforeEach(() => {
  afterMock.mockReset()
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('keepAlive', () => {
  it('hands the very promise it was given to after(), so the work keeps its timing', () => {
    const work = new Promise<void>(() => {})
    keepAlive(work, '[test] work')
    expect(afterMock).toHaveBeenCalledOnce()
    expect(afterMock.mock.calls[0][0]).toBe(work)
  })

  it('outside a request (E468) lets the work run on and prints nothing', () => {
    const printed = vi.spyOn(console, 'error').mockImplementation(() => {})
    afterMock.mockImplementation(() => {
      throw nextError('E468', '`after` was called outside a request scope.')
    })
    expect(() => keepAlive(Promise.resolve(), '[test] work')).not.toThrow()
    expect(printed).not.toHaveBeenCalled()
  })

  it('in a request the platform will not wait for, says so under the caller label', () => {
    const printed = vi.spyOn(console, 'error').mockImplementation(() => {})
    afterMock.mockImplementation(() => {
      throw nextError(
        'E91',
        '`after()` will not work correctly, because `waitUntil` is not available.',
      )
    })
    expect(() => keepAlive(Promise.resolve(), '[parent/link] student email')).not.toThrow()
    expect(printed).toHaveBeenCalledOnce()
    expect(String(printed.mock.calls[0][0])).toMatch(
      /^\[parent\/link\] student email may not outlive the response: .*waitUntil/,
    )
  })

  it('and says so if after() is missing altogether', () => {
    const printed = vi.spyOn(console, 'error').mockImplementation(() => {})
    afterMock.mockImplementation(() => {
      throw new TypeError('after is not a function')
    })
    expect(() => keepAlive(Promise.resolve(), '[test] work')).not.toThrow()
    expect(String(printed.mock.calls[0][0])).toContain('[test] work may not outlive the response')
  })
})

// ─── The guard ──────────────────────────────────────────────────────────────

/** Calls that keep themselves alive (they call keepAlive inside), so `void` is safe. */
const KEEPS_ITSELF_ALIVE = new Set(['logAiDecision', 'logAiDecisionError'])

/**
 * Modules under src/lib that run in the browser, where there is no function to
 * freeze. Each was checked on 10 October 2026. A new browser module that needs
 * fire-and-forget belongs here, with its reason.
 */
const BROWSER_ONLY = new Map([
  ['src/lib/gtag.ts', 'GA4 beacon: fetch to a relative URL, from the page'],
  ['src/lib/ielts/store.ts', 'browser store: fetch to a relative URL'],
  ['src/lib/posthog.ts', 'posthog-js, which only runs in the browser'],
  ['src/lib/save-failure-report.ts', "the report a student's browser sends"],
  ['src/lib/sentry-client.ts', 'client-side Sentry for the error boundaries'],
])

const PROMISE_METHODS = new Set(['then', 'catch', 'finally'])

/** The function a call chain starts with: `sendEmail` in `sendEmail(x).catch(f)`. */
function startOf(node: ts.Expression): string {
  let e: ts.Expression = node
  for (;;) {
    if (ts.isCallExpression(e)) {
      const callee = e.expression
      if (ts.isPropertyAccessExpression(callee) && PROMISE_METHODS.has(callee.name.text)) {
        e = callee.expression
        continue
      }
      if (callee.kind === ts.SyntaxKind.ImportKeyword) return 'import'
      if (ts.isPropertyAccessExpression(callee)) return callee.name.text
      return callee.getText()
    }
    if (ts.isTaggedTemplateExpression(e)) {
      return ts.isPropertyAccessExpression(e.tag) ? e.tag.name.text : e.tag.getText()
    }
    if (ts.isParenthesizedExpression(e)) {
      e = e.expression
      continue
    }
    return e.getText()
  }
}

/** Every statement in `source` that starts work and lets it go. */
function unkeptWork(source: string, fileName = 'snippet.ts'): string[] {
  const sf = ts.createSourceFile(fileName, source, ts.ScriptTarget.Latest, true)
  const found: string[] = []
  const at = (node: ts.Node) => sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1
  const visit = (node: ts.Node) => {
    if (ts.isExpressionStatement(node)) {
      const e = node.expression
      if (
        ts.isVoidExpression(e) &&
        (ts.isCallExpression(e.expression) || ts.isTaggedTemplateExpression(e.expression))
      ) {
        const name = startOf(e.expression)
        if (!KEEPS_ITSELF_ALIVE.has(name)) found.push(`line ${at(node)}: void ${name}(...)`)
      } else if (
        ts.isCallExpression(e) &&
        ts.isPropertyAccessExpression(e.expression) &&
        PROMISE_METHODS.has(e.expression.name.text)
      ) {
        found.push(`line ${at(node)}: ${startOf(e)}(...).${e.expression.name.text}(...)`)
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
  return found
}

/** A file whose directive prologue says 'use client' never runs on the server. */
function isClientModule(source: string): boolean {
  const sf = ts.createSourceFile('m.ts', source, ts.ScriptTarget.Latest, false)
  for (const statement of sf.statements) {
    if (!ts.isExpressionStatement(statement) || !ts.isStringLiteral(statement.expression)) break
    if (statement.expression.text === 'use client') return true
  }
  return false
}

describe('the guard can see what it guards against', () => {
  it('finds both fire-and-forget idioms, through any chain', () => {
    expect(
      unkeptWork(
        [
          'void sendEmail(a, b, c)',
          'sendEmail(a, b, c).catch(() => {})',
          "void import('@sentry/nextjs').then((S) => S.flush()).catch(() => {})",
          'void client.$executeRaw`DELETE FROM t`.catch(() => {})',
          'function f() { prepareTrainingRecord(id).then(() => {}) }',
        ].join('\n'),
      ),
    ).toEqual([
      'line 1: void sendEmail(...)',
      'line 2: sendEmail(...).catch(...)',
      'line 3: void import(...)',
      'line 4: void $executeRaw(...)',
      'line 5: prepareTrainingRecord(...).then(...)',
    ])
  })

  it('and passes work that is awaited, returned, kept alive or self-keeping', () => {
    expect(
      unkeptWork(
        [
          'async function f() { await sendEmail(a) }',
          'function g() { return sendEmail(a).catch(() => {}) }',
          "keepAlive(sendEmail(a).catch(() => {}), 'label')",
          'const sent = sendEmail(a).catch(() => {})',
          'void logAiDecision({})',
        ].join('\n'),
      ),
    ).toEqual([])
  })

  it('and recognises a client module by its directive, after a header comment', () => {
    expect(isClientModule("// header\n/* more */\n'use client'\nvoid fetch('/x')")).toBe(true)
    expect(isClientModule("import x from 'y'\n'use client'")).toBe(false)
  })
})

describe('server code lets no work go unkept', () => {
  it('in src/app/api and src/lib', () => {
    const ROOT = process.cwd()
    let scanned = 0
    const offenders: string[] = []
    const walk = (dir: string) => {
      for (const name of readdirSync(dir)) {
        const path = join(dir, name)
        if (statSync(path).isDirectory()) {
          if (name !== '__tests__' && name !== 'node_modules') walk(path)
          continue
        }
        if (!/\.tsx?$/.test(name) || /\.(test|spec)\.tsx?$|\.d\.ts$/.test(name)) continue
        const rel = relative(ROOT, path).split(sep).join('/')
        if (BROWSER_ONLY.has(rel)) continue
        const source = readFileSync(path, 'utf8')
        if (isClientModule(source)) continue
        scanned += 1
        for (const hit of unkeptWork(source, path)) offenders.push(`${rel} ${hit}`)
      }
    }
    walk(join(ROOT, 'src', 'app', 'api'))
    walk(join(ROOT, 'src', 'lib'))
    // A scan of nothing would pass, so prove it read the server code.
    expect(scanned).toBeGreaterThan(600)
    expect(
      offenders,
      'wrap the promise in keepAlive(promise, label) from @/lib/keep-alive, or await it',
    ).toEqual([])
  })

  it('and every browser-only exception still exists, so the list cannot rot', () => {
    for (const path of BROWSER_ONLY.keys()) {
      expect(statSync(join(process.cwd(), path)).isFile(), path).toBe(true)
    }
  })
})
