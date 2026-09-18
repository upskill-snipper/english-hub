import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The examiner tool had no camera control, and two tables that pushed the page
 * sideways on a phone (UX-8).
 *
 * THE DEFECT (19 September 2026). Both upload surfaces - ScriptPanel's "Add
 * pages" and BulkPanel's "Add the scan" - fired a single hidden file input with
 * no `capture` attribute, and a repo-wide search for `capture=` returned
 * nothing. So on a phone both buttons opened the generic file chooser. The
 * chooser does offer the camera among its options, so this cost a tap rather
 * than blocking the flow - but the acceptance test in the operator report is
 * photograph-driven, and the product had no camera route at all.
 *
 * WHY A SECOND INPUT RATHER THAN `capture` ON THE FIRST. `capture` sends the
 * browser straight to the camera and, on most mobile browsers, removes the
 * file-picker option entirely. Putting it on the only input would have traded
 * one missing route for another: a teacher with a scan already on the phone
 * could no longer choose it. Two controls, two inputs, both still accepting
 * multiple files.
 *
 * AND THE OVERFLOW THE BACKLOG LOOKED FOR IN THE WRONG PLACE. It predicted the
 * question chips and three `min-w-` fields would overflow at 375px. They do
 * not - the chips wrap and the fields sit inside flex-wrap rows. The real
 * offenders were two tables it never mentioned: BulkPanel's six columns and
 * RecordsPanel's seven, both `w-full` with nothing to scroll in.
 */

const ROOT = process.cwd()

function source(rel: string): string {
  return readFileSync(join(ROOT, rel), 'utf8')
}

const SCRIPT_PANEL = source('src/components/examiner/ScriptPanel.tsx')
const BULK_PANEL = source('src/components/examiner/BulkPanel.tsx')
const RECORDS_PANEL = source('src/components/examiner/RecordsPanel.tsx')

// ─── The camera route ───────────────────────────────────────────────────────

describe.each([
  ['ScriptPanel', SCRIPT_PANEL],
  ['BulkPanel', BULK_PANEL],
])('%s', (_name, src) => {
  it('offers a camera control', () => {
    expect(src).toMatch(/capture="environment"/)
    expect(src).toMatch(/Take a photo/)
  })

  it('keeps the plain file chooser as a separate input', () => {
    // The whole reason for two inputs. If these ever collapse into one, a
    // teacher with a scan already on the phone loses the ability to pick it.
    const inputs = src.match(/<input\s+ref=\{(?:file|camera)Ref\}/g) ?? []
    expect(inputs.length).toBe(2)
  })

  it('does not put capture on the file-chooser input', () => {
    // Find the fileRef input and assert capture is not inside it.
    const at = src.indexOf('ref={fileRef}')
    expect(at).toBeGreaterThan(-1)
    const block = src.slice(at, src.indexOf('/>', at))
    expect(block, 'capture on the chooser input removes the picker on mobile').not.toMatch(
      /capture=/,
    )
  })

  it('wires the camera button to the camera input, not the chooser', () => {
    // A "Take a photo" button wired to fileRef would satisfy every assertion
    // above and open the wrong picker.
    const at = src.indexOf('Take a photo')
    expect(at).toBeGreaterThan(-1)
    // Walk back to the enclosing Button and check its onClick.
    const buttonStart = src.lastIndexOf('<Button', at)
    const block = src.slice(buttonStart, at)
    expect(block).toMatch(/cameraRef\.current\?\.click\(\)/)
    expect(block).not.toMatch(/fileRef\.current\?\.click\(\)/)
  })

  it('still accepts multiple pages from the camera', () => {
    const at = src.indexOf('ref={cameraRef}')
    const block = src.slice(at, src.indexOf('/>', at))
    expect(block).toMatch(/multiple/)
    expect(block).toMatch(/accept="image\/\*"/)
  })
})

// ─── The tables that pushed the page sideways ───────────────────────────────

describe('wide tables on a narrow screen', () => {
  /**
   * JSX comments removed before any proximity check.
   *
   * The first version of the assertion below looked 400 characters back from
   * `<table` for the wrapper. It failed on RecordsPanel - not because the
   * wrapper was missing, but because the comment explaining WHY it is there is
   * long enough to push it out of the window. A test defeated by its own
   * subject's documentation is measuring the wrong thing.
   */
  function withoutJsxComments(src: string): string {
    return src.replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
  }

  it.each([
    ['BulkPanel', BULK_PANEL],
    ['RecordsPanel', RECORDS_PANEL],
  ])('%s scrolls its table rather than the page', (_name, raw) => {
    const src = withoutJsxComments(raw)
    const at = src.indexOf('<table')
    expect(at).toBeGreaterThan(-1)
    // The wrapper must be the table's immediate ancestor.
    const before = src.slice(Math.max(0, at - 160), at)
    expect(before, 'the table has no horizontal scroll container').toMatch(/overflow-x-auto/)
  })

  it.each([
    ['BulkPanel', BULK_PANEL],
    ['RecordsPanel', RECORDS_PANEL],
  ])('%s bleeds the wrapper to the panel edge', (_name, raw) => {
    // Panel's body is p-4, so the negative margin has to match it or the table
    // starts 4px inside the edge and loses width it could have used.
    const src = withoutJsxComments(raw)
    const at = src.indexOf('overflow-x-auto')
    const block = src.slice(Math.max(0, at - 60), at + 60)
    expect(block).toMatch(/-mx-4/)
    expect(block).toMatch(/px-4/)
  })

  it('gives RecordsPanel a width floor, because its detail view is outside', () => {
    // Seven columns crushed into 375px are unreadable. Safe here: the expanded
    // record renders in a separate Panel after the table.
    expect(RECORDS_PANEL).toMatch(/min-w-\[620px\]/)
  })

  it('gives BulkPanel NO width floor, because its detail view is inside', () => {
    // BulkPanel's expanded result is a colSpan cell holding the examiner
    // commentary in a pre-wrap block. A floor on this table would force the
    // commentary - the thing teachers actually read - to scroll sideways at
    // 375px, which is worse than the crushed columns it would fix.
    const clean = withoutJsxComments(BULK_PANEL)
    const at = clean.indexOf('<table')
    const tableTag = clean.slice(at, clean.indexOf('>', at))
    expect(tableTag).not.toMatch(/min-w-/)
  })

  it('still holds the commentary inside the BulkPanel table', () => {
    // If the expanded row is ever moved out, the reasoning above changes and a
    // width floor becomes safe. Pin the premise so it has to be re-read.
    expect(BULK_PANEL).toMatch(/colSpan=\{6\}/)
    expect(BULK_PANEL).toMatch(/whitespace-pre-wrap/)
  })
})
