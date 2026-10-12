// @vitest-environment node
/**
 * The setup page's steps, rendered on the server as the suite prefers.
 *
 * Step 1 must show the school's statement word for word: it is what the
 * operator affirms, and what the AuditLog records against the school. The
 * wording is asserted here as a literal, not through the constant, so that
 * rewording the constant fails a test instead of quietly changing what is
 * affirmed.
 */

import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'

import type { OperatorSchoolSummary } from '@/lib/school/setup-result'

import { AiAuthorisationStep, SheetStep } from './setup-steps'

const THE_WORDING =
  'The school, as data controller, has confirmed in writing that its privacy notice covers AI marking and that parents have been told'

const SCHOOL: OperatorSchoolSummary = {
  id: '5c400000-0000-4000-8000-000000000001',
  name: 'Sample Academy',
  access_type: 'paid',
  access_until: '2027-07-31',
  ai_authorised_at: null,
  ai_authorised_by: null,
  ai_authorisation_note: null,
  counts: { members: 0, pendingInvites: 0, classes: 0, pupils: 0 },
  problems: [],
}

const noop = async () => {}

describe('step 1, AI authorisation', () => {
  it('shows the statement exactly, a note field, and a confirm button that waits for both', () => {
    const html = renderToStaticMarkup(<AiAuthorisationStep school={SCHOOL} onRecorded={noop} />)
    expect(html).toContain(THE_WORDING)
    expect(html).toContain('type="checkbox"')
    expect(html).toContain('<textarea id="ai-note"')
    expect(html).toMatch(/<button[^>]*disabled[^>]*>.*Record the school(&#x27;|')s authorisation/)
    expect(html).toContain('Not recorded for this school yet.')
  })

  it('shows an authorisation already recorded, with where the confirmation is held', () => {
    const html = renderToStaticMarkup(
      <AiAuthorisationStep
        school={{
          ...SCHOOL,
          ai_authorised_at: '2026-11-10T09:00:00.000Z',
          ai_authorisation_note: "Head's email, school folder",
        }}
        onRecorded={noop}
      />,
    )
    expect(html).toContain('Recorded on 10 Nov')
    expect(html).toContain('Confirmation held:')
    expect(html).toContain('Record it again')
  })
})

describe('steps 2 to 4', () => {
  it('show the header row the sheet must have, and wait for a sheet', () => {
    const html = renderToStaticMarkup(
      <SheetStep
        number={3}
        title="Classes"
        endpoint="/api/admin/schools/x/classes"
        headers={['Class code', 'Year group', "Teacher's school email address", 'Exam board']}
        description="Each class is created."
        note="Exam board is AQA, Edexcel, OCR or Eduqas."
        buttonLabel="Create or update the classes"
        onDone={noop}
      />,
    )
    expect(html).toContain('Class code')
    expect(html).toContain('Teacher&#x27;s school email address')
    expect(html).toContain('or choose a .csv file')
    expect(html).toMatch(/<button[^>]*disabled[^>]*>.*Create or update the classes/)
  })
})
