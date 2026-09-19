import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * SF-2's last quarter: a mark that left no trace.
 *
 * Three of the four parts had landed - `GET /api/submissions` exists,
 * /marking/history and /marking read it, and the localStorage merge is only a
 * fallback. The fourth had not: `/api/mark` authenticated, metered, marked, and
 * persisted NOTHING.
 *
 * It is the mobile contract and the web's legacy path, so a mark made there
 * existed only in the caller's own localStorage. It never reached
 * `marking_submissions`, so it never appeared in the history page once that
 * page started reading the server, and it was invisible to every operator
 * report that counts marked work. On mobile there is no localStorage to fall
 * back to at all: the mark simply vanished.
 *
 * WHAT THESE GUARD. Not the marking. The three ways this write could be wrong:
 * writing a row the reader cannot use, writing it under the wrong status so a
 * student sees unreviewed class work, and failing silently.
 */

const ROOT = process.cwd()
const ROUTE = readFileSync(join(ROOT, 'src/app/api/mark/route.ts'), 'utf8')
const RUN = readFileSync(join(ROOT, 'src/app/api/marking/run/route.ts'), 'utf8')
const HISTORY = readFileSync(join(ROOT, 'src/app/marking/history/page.tsx'), 'utf8')

describe('the mark is written down', () => {
  it('inserts a submission row', () => {
    expect(ROUTE).toContain('await insertSubmission(svc, {')
  })

  it('and attaches the AI result to it', () => {
    // A row with no result is a row the history renders as "awaiting a
    // teacher", which for a self-study student is a screen that never resolves.
    expect(ROUTE).toContain('await applyAiResult(svc, created.id, {')
    expect(ROUTE).toContain('result: feedback.result')
  })

  it('using the same pair the submission spine uses', () => {
    // Two writers of one table is how the shapes drift. Both call the same two
    // helpers, so a change to the row shape lands on both.
    for (const helper of ['insertSubmission', 'applyAiResult', 'deriveUncertaintyFlags']) {
      expect(ROUTE, `${helper} is not used here`).toContain(helper)
    }
    for (const helper of ['applyAiResult', 'deriveUncertaintyFlags']) {
      expect(RUN, `${helper} is not used by the spine`).toContain(helper)
    }
  })
})

describe('the status it writes is the one a self-study student may see', () => {
  it("'ai_marked', not 'approved'", () => {
    // 'approved' would mean a teacher had signed it off. Nobody has.
    expect(ROUTE).toContain("status: 'ai_marked'")
    expect(ROUTE).not.toContain("status: 'approved'")
  })

  it('and the route is self-study only, so it never writes class work', () => {
    // The spine routes b2b_class to 'teacher_review_required'. This path has no
    // class context at all, which is why it can use the simpler status - and
    // why it must declare its source explicitly rather than inherit one.
    expect(ROUTE).toContain("source: 'b2c_self'")
    expect(ROUTE).not.toContain("source: 'b2b_class'")
  })
})

describe('a failed write does not cost the student their mark, and does not hide', () => {
  it('the mark is still returned', () => {
    // They have already spent an allowance. Losing the marked essay because a
    // write failed would be the worse outcome of the two.
    const block = ROUTE.slice(ROUTE.indexOf('} catch (dbErr) {'))
    expect(block.slice(0, 200)).toContain('submissionId = null')
    expect(ROUTE).toContain('result: feedback.result,\n        remaining: rl.remaining,')
  })

  it('but the failure is logged at error level', () => {
    expect(ROUTE).toContain("console.error('[api/mark] could not persist the submission'")
  })

  it('and reported to the caller, not just to a log nobody tails', () => {
    // THE ASSERTION THAT MATTERS. This whole item exists because a write that
    // never happened looked exactly like one that did.
    expect(ROUTE).toContain('persisted: submissionId !== null')
  })

  it('and the id comes back so the caller can link to the saved copy', () => {
    expect(ROUTE).toContain('submissionId,')
  })
})

describe('the reader this feeds still reads the server', () => {
  it('/marking/history calls the list endpoint', () => {
    // If the history stopped reading the server, these rows would be written
    // and never shown, which is a different flavour of the same defect.
    expect(HISTORY).toContain("fetch('/api/submissions?limit=50')")
  })
})
