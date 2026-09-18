import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Nine documents asserting things the code does not do (MAINT-5).
 *
 * THE DEFECT (19 September 2026). CLAUDE.md names this as one of four recurring
 * shapes - "a document or comment asserting what the code does not do" - and
 * the repository was full of it. Nine contradictions, several of them the kind
 * a reader acts on:
 *
 *   - DEPLOYMENT.md listed FOUR migrations out of 89 and told the reader to run
 *     `supabase db push`, which is not how this project applies them at all.
 *   - MONITORING.md said PostHog was "Not installed. No PostHog dependency",
 *     while posthog-js is a dependency initialised from the root layout. It
 *     described four crons and a fifth that was "not registered"; there are 17
 *     entries and that fifth has been registered for months.
 *   - src/lib/supabase/middleware.ts said the /ar locale rewrite returns BEFORE
 *     updateSession, "so nothing in this function runs on the Arabic URL
 *     surface". src/middleware.ts:632 calls it inside the /ar branch.
 *   - src/lib/marking/README.md scoped the whole engine to "real AQA mark
 *     schemes" and listed three files. There are 14, across six boards.
 *
 * WHY THIS TEST EXISTS RATHER THAN JUST THE EDITS. Every one of these was true
 * when written. Documentation rots silently and nothing fails, which is exactly
 * why it is worth binding the load-bearing numbers to the artefacts they
 * describe: the count comes from vercel.json, the migration count from the
 * directory, the framework version from package.json.
 */

const ROOT = process.cwd()
const read = (rel: string) => readFileSync(join(ROOT, rel), 'utf8')

describe('numbers that came from somewhere real', () => {
  it('the scheduled-work chapter counts the crons that exist', () => {
    const vercel = JSON.parse(read('vercel.json')) as { crons: { path: string }[] }
    const doc = read('docs/system/09-scheduled-work.md')
    const cronRoutes = vercel.crons.filter((c) => c.path.startsWith('/api/cron/')).length

    expect(vercel.crons.length).toBe(18)
    expect(cronRoutes).toBe(16)
    // The words have to match the file, not a number from six months ago.
    expect(doc).toMatch(/Eighteen Vercel Cron entries/)
    expect(doc).not.toMatch(/Fifteen Vercel Cron entries/)
    expect(doc).not.toMatch(/Seventeen Vercel Cron entries/)
  })

  it('the deployment guide does not hand out a four-migration list', () => {
    const migrations = readdirSync(join(ROOT, 'supabase/migrations')).filter((f) =>
      f.endsWith('.sql'),
    )
    expect(migrations.length).toBeGreaterThan(80)

    const doc = read('DEPLOYMENT.md')
    // The dangerous instruction: `supabase db push` against 89 migrations and a
    // tracker that records intentions rather than reality.
    expect(doc).not.toMatch(/^\s*supabase db push\s*$/m)
    expect(doc).toContain('scripts/apply-migrations.mjs')
    expect(doc).toContain('check-schema-drift.mjs')
    expect(doc).toMatch(/89/)
  })

  it('the README names the major version actually installed', () => {
    const pkg = JSON.parse(read('package.json')) as { dependencies: Record<string, string> }
    const major = (pkg.dependencies.next ?? '').replace(/[^\d.]/g, '').split('.')[0]
    expect(major).toBe('15')
    expect(read('README.md')).toContain(`Next.js ${major}`)
    expect(read('README.md')).not.toContain('Next.js 14')
  })

  it('the marking README is not scoped to one board', () => {
    const schemeFiles = readdirSync(join(ROOT, 'src/lib/marking/mark-schemes')).filter(
      (f) => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts',
    )
    expect(schemeFiles.length).toBeGreaterThan(10)

    const doc = read('src/lib/marking/README.md')
    expect(doc).not.toMatch(/against real AQA mark schemes/)
    for (const board of ['AQA', 'Cambridge', 'Edexcel', 'Eduqas', 'OCR']) {
      expect(doc, `${board} is unmentioned in a doc covering six boards`).toContain(board)
    }
  })
})

describe('MONITORING.md', () => {
  const doc = read('MONITORING.md')

  it('no longer says PostHog is not installed', () => {
    const pkg = JSON.parse(read('package.json')) as {
      dependencies: Record<string, string>
    }
    expect(pkg.dependencies['posthog-js']).toBeTruthy()
    expect(doc).not.toMatch(/Not installed\. No PostHog dependency/)
  })

  it('no longer claims the Sentry config files do not exist', () => {
    expect(existsSync(join(ROOT, 'sentry.server.config.ts'))).toBe(true)

    // The rewritten document QUOTES its old false claims in a "what it used to
    // say / what is true" table, which is the most useful part of it - each of
    // those was believable and some were acted on. So the assertion is not
    // "this string is absent" (my first version, which matched my own
    // quotation) but "it only appears as a historical table row".
    const NEWLINE = String.fromCharCode(10)
    const asserting = doc
      .split(NEWLINE)
      .filter((line) =>
        /sentry\.(client|server|edge)\.config\.ts` .{0,40}do(es)? not exist/.test(line),
      )
      .filter((line) => !line.trim().startsWith('|'))
    expect(asserting, 'the false claim is being stated, not quoted').toEqual([])

    // And the correction is present.
    expect(doc).toMatch(/`sentry\.server\.config\.ts` exists/)
  })

  it('survives as a file, because four documents link to it', () => {
    // Deleting it would break a live relative link in
    // docs/system/10-integrations-and-comms.md. It is a pointer now, not a
    // third competing description.
    expect(doc.length).toBeGreaterThan(200)
    expect(doc).toContain('docs/system/09-scheduled-work.md')
    expect(doc).toContain('docs/system/10-integrations-and-comms.md')
  })
})

describe('the middleware comment', () => {
  const src = read('src/lib/supabase/middleware.ts')
  const middleware = read('src/middleware.ts')

  it('no longer claims the Arabic surface skips session handling', () => {
    // A reader who believed this would assume every auth rule has an
    // Arabic-shaped hole in it, and either write guards that are not needed or
    // treat /ar as unprotected when it is not.
    expect(src).not.toMatch(
      /returns the `\/ar\/\.\.\.` locale rewrite BEFORE\n\s*\/\/\s*calling\n?\s*updateSession\(\), so nothing in this function - this gate/,
    )
  })

  it('is contradicted by the code it describes, which is the point', () => {
    // The fact that makes the old comment false. If this ever stops being
    // true, the comment needs revisiting again rather than silently inverting.
    expect(middleware).toMatch(/await updateSession\(request, strippedPath\)/)
  })
})

describe('TEST_PLAN.md', () => {
  const doc = read('src/__tests__/TEST_PLAN.md')

  it('says plainly that it is stale rather than being re-dated', () => {
    // Re-dating it without re-reading it would be worse than leaving it: the
    // date is the only honest signal that its contents predate almost
    // everything in this directory.
    expect(doc).toContain('2026-03-22')
    expect(doc).toMatch(/stale/i)
  })

  it('points at the tests rather than pretending to describe them', () => {
    const testFiles = readdirSync(join(ROOT, 'src/__tests__')).filter((f) =>
      /\.test\.tsx?$/.test(f),
    )
    expect(testFiles.length).toBeGreaterThan(50)
    expect(doc).toMatch(/read the test files/i)
  })
})
