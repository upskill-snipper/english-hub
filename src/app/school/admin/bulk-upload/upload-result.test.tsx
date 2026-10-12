// @vitest-environment node
/**
 * The bulk upload's last screen shows every way the upload fell short.
 *
 * Until 12 October 2026 it showed Created, Updated and Skipped under a green
 * "Import complete", and nothing else: `memberLinkFailures` had been returned
 * since 19 September and never displayed. Rendered here on the server, as the
 * suite prefers (the-gates-actually-run caps the files that need a DOM).
 */

import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'

import { UploadResultSummary, problemsToCsv, type UploadResult } from './upload-result'

const CLEAN: UploadResult = {
  jobId: 'job-1',
  created: 2,
  updated: 1,
  skipped: 0,
  errors: [],
  outcomes: [],
  memberLinkFailures: [],
  unmatchedClassCodes: [],
  placementFailures: [],
  classCountFailures: [],
}

const EVERY_PROBLEM: UploadResult = {
  ...CLEAN,
  skipped: 1,
  errors: [
    {
      row: 4,
      field: 'email',
      code: 'DUPLICATE_EMAIL_IN_FILE',
      message: 'twin@x.sch.uk appears earlier in this file.',
    },
  ],
  memberLinkFailures: [{ row: 2, email: 'unlinked@x.sch.uk', reason: 'refused by the database' }],
  unmatchedClassCodes: [{ row: 3, email: 'lost@x.sch.uk', classCode: 'ZZ9' }],
  placementFailures: [
    {
      row: 5,
      email: 'unplaced@x.sch.uk',
      classCode: '10A',
      reason: 'not placed in the class: timeout',
    },
  ],
  classCountFailures: [{ classCode: '10A', reason: 'statement timeout' }],
  failuresNotLogged: true,
}

describe('the done screen', () => {
  it('says "Import complete" only when nothing failed', () => {
    const html = renderToStaticMarkup(<UploadResultSummary result={CLEAN} />)
    expect(html).toContain('Import complete')
    expect(html).not.toContain('problems to fix')
  })

  it('lists every failure category the API returns, row by row', () => {
    const html = renderToStaticMarkup(<UploadResultSummary result={EVERY_PROBLEM} />)
    expect(html).toContain('Import finished, with problems to fix')
    expect(html).not.toContain('Import complete')
    for (const shown of [
      'twin@x.sch.uk appears earlier in this file.',
      'unlinked@x.sch.uk',
      'refused by the database',
      'lost@x.sch.uk',
      'ZZ9',
      'unplaced@x.sch.uk',
      'not placed in the class: timeout',
      'statement timeout',
      'could not be saved to your upload log',
    ]) {
      expect(html, `missing: ${shown}`).toContain(shown)
    }
    expect(html).toContain('Row 2')
  })

  it('shows a replay as one, with the problems the first run stored', () => {
    const html = renderToStaticMarkup(
      <UploadResultSummary
        result={{
          jobId: 'job-1',
          created: 2,
          updated: 0,
          skipped: 0,
          errors: [
            { row: 3, field: 'email', code: 'MEMBER_LINK_FAILED', message: 'x was not linked' },
          ],
          outcomes: [],
          idempotent: true,
        }}
      />,
    )
    expect(html).toContain('matched a previous submission')
    expect(html).toContain('x was not linked')
  })

  it('and the problems download has a line for each', () => {
    const csv = problemsToCsv(EVERY_PROBLEM).trim().split('\n')
    expect(csv[0]).toBe('row,problem,who,details')
    expect(csv).toHaveLength(6)
  })
})
