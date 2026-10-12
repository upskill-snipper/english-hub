// @vitest-environment node
/**
 * A setup step's answer is shown in full: failures first, and never a "done"
 * that hides them. Rendered on the server, as the suite prefers.
 */

import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'

import { SetupResultView } from './setup-result-view'

describe('a setup step result', () => {
  it('lists every row, failures first, and does not call a partial run clean', () => {
    const html = renderToStaticMarkup(
      <SetupResultView
        answer={{
          totalRows: 3,
          created: [{ row: 2, subject: 'nia@x.sch.uk', detail: 'Invited as teacher.' }],
          updated: [],
          skipped: [{ row: 3, subject: 'moved@x.sch.uk', detail: 'Already at another school.' }],
          failed: [
            { row: 4, subject: 'email', detail: '"not-an-email" is not a valid email address.' },
          ],
        }}
      />,
    )
    expect(html).toContain('some rows failed')
    expect(html).not.toContain('nothing failed')
    for (const shown of ['nia@x.sch.uk', 'moved@x.sch.uk', 'not-an-email', 'Invited as teacher.']) {
      expect(html).toContain(shown)
    }
    expect(html.indexOf('Failed: needs attention')).toBeLessThan(html.indexOf('Created ('))
    expect(html).toContain('3 rows read: 1 created, 0 updated, 1 skipped, 1 failed.')
  })

  it('says a clean run is clean', () => {
    const html = renderToStaticMarkup(
      <SetupResultView
        answer={{
          totalRows: 1,
          created: [{ row: 2, subject: '10A', detail: 'Created.' }],
          updated: [],
          skipped: [],
          failed: [],
        }}
      />,
    )
    expect(html).toContain('Done, with nothing failed.')
  })

  it('shows a refusal and its detail', () => {
    const html = renderToStaticMarkup(
      <SetupResultView answer={{ error: 'School not found', detail: 'no such id' }} />,
    )
    expect(html).toContain('School not found')
    expect(html).toContain('no such id')
    expect(html).not.toContain('nothing failed')
  })
})
