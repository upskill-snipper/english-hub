// ─── A failed mark does not save the essay twice ────────────────────────────
//
// THE DEFECT (12 to 21 October 2026). While the Anthropic account was out of
// credit, every essay was saved and then failed to mark. The learner was told
// to try again, and the only way to try again was to press Submit on the same
// form, which saved the essay again before asking for a mark. 12 learners
// left 37 saved rows for 13 essays; one essay was saved 11 times in an hour
// and a half. The saved essay's own page then said "submit it again from Mark
// an essay", which did the same.
//
// Fixed on both pages, and held here by reading their source, because both
// are client components whose behaviour needs a signed-in browser:
//   • the submit page marks the copy already saved when the form is exactly
//     what was saved, and links to it;
//   • the saved essay's page has a button that marks it where it is.
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const read = (rel: string) => readFileSync(join(ROOT, rel), 'utf8')

/** The source of one top-level function, up to the next top-level declaration. */
function functionSource(src: string, signature: string): string {
  const start = src.indexOf(signature)
  expect(start, `${signature} is missing`).toBeGreaterThanOrEqual(0)
  const rest = src.slice(start + signature.length)
  const end = rest.search(/\n(?:async function |function |export default |const [A-Z_]+ =|type )/)
  return signature + (end === -1 ? rest : rest.slice(0, end))
}

describe('the submit page', () => {
  const src = read('src/app/marking/submit/page.tsx')

  it('marks the saved copy when the same essay is sent again', () => {
    expect(src).toMatch(
      /saved\s*&&\s*saved\.fingerprint === fingerprint\s*\?\s*await runSavedSubmission\(saved\.submissionId\)\s*:\s*await trySubmissionSpine\(spineArgs\)/,
    )
    // The fingerprint is everything the saved copy was saved from, so a
    // changed essay, question or paper is saved afresh.
    expect(src).toMatch(/const fingerprint = JSON\.stringify\(spineArgs\)/)
  })

  it('hands back the saved copy from every failure after the essay was saved', () => {
    const run = functionSource(src, 'async function runSavedSubmission(')
    const failures = run.match(/failed:/g) ?? []
    const consent = run.match(/consentRefusal: refusal/g) ?? []
    const handedBack = run.match(/savedSubmissionId: submissionId/g) ?? []
    expect(failures.length).toBeGreaterThan(0)
    expect(handedBack.length).toBe(failures.length + consent.length)
  })

  it('links to the saved essay under the error', () => {
    expect(src).toMatch(/href=\{`\/marking\/results\/\$\{savedSubmissionId\}`\}/)
    expect(src).toContain("tx('marking.submit.open_saved')")
  })
})

describe("the saved essay's own page", () => {
  const src = read('src/app/marking/results/[id]/page.tsx')

  it('marks the essay where it is, by its id', () => {
    const button = functionSource(src, 'function MarkSavedEssay(')
    expect(button).toContain("fetch('/api/marking/run'")
    expect(button).toContain('JSON.stringify({ submissionId })')
    expect(src).toMatch(/state === 'unmarked' && \(\s*<MarkSavedEssay/)
  })

  it('no longer sends the learner to paste the essay in again', () => {
    expect(src).not.toMatch(/submit it again from Mark an essay',/)
    expect(src).not.toMatch(
      /state === 'unmarked' && \(\s*<Button render=\{<Link href="\/marking\/submit"/,
    )
  })
})

describe('the words, in every language', () => {
  const dictionary = read('src/lib/i18n/dictionary-ai-act.ts')
  const entry = dictionary.slice(dictionary.indexOf("'marking.results.unmarked_body'"))
  const body = entry.slice(0, entry.indexOf('},') + 2)

  it('do not ask for the essay to be submitted again', () => {
    expect(body).not.toMatch(/submit it again/i)
    expect(body).not.toMatch(/vuelve a enviarla/i)
    expect(body).not.toContain('سلّمها مرة ثانية')
  })

  it('name the button the page shows', () => {
    expect(body).toContain('Mark this essay now')
    expect(dictionary).toContain("'marking.results.mark_now'")
  })
})
