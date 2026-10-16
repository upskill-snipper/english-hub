import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { EN_MESSAGES } from '@/lib/i18n/generated/en'

/**
 * Public copy must not promise parents an email the product does not send.
 *
 * As of 17 September 2026 no code path delivers a weekly parent report:
 *   - `/api/cron/weekly-parent-reports` returns
 *     `{ skipped: 'disabled - no unsubscribe mechanism yet' }` unless
 *     `WEEKLY_PARENT_REPORTS_ENABLED === 'true'`, a variable that is set
 *     nowhere;
 *   - `/api/cron/weekly-reports`, whose body iterated an empty array under a
 *     "Mock: No parents in database yet" comment, has been removed.
 *
 * The live FAQ nevertheless told parents "you'll receive weekly progress
 * reports", in the page body and in its FAQPage structured data, which
 * search engines and assistants quote back. This test keeps the copy tied to
 * the code: while the kill switch is in place, no public page may say a
 * parent receives one. When the feature genuinely ships, the switch goes and
 * this test stops asking.
 *
 * 16 October 2026: the test read only the two files below, so /help, whose
 * parents' answer (help.pa.q1.a) comes from the i18n dictionary, kept
 * telling parents they would get weekly progress reports by email while this
 * test passed. It now also checks every string in the resolved English
 * message map, which is what every page renders.
 */

function read(relative: string): string {
  return readFileSync(join(process.cwd(), relative), 'utf8')
}

const cronSource = read('src/app/api/cron/weekly-parent-reports/route.ts')
const sendsAreOff = cronSource.includes("process.env.WEEKLY_PARENT_REPORTS_ENABLED !== 'true'")

/** Phrases that assert a parent will actually get an email. */
const PROMISES = [
  /you'?ll receive weekly progress reports/i,
  /you will receive weekly progress reports/i,
  /receive a weekly (?:progress )?(?:report|email)/i,
  /parents get a weekly report/i,
  /link to their child's account to receive weekly/i,
]

const PUBLIC_COPY = ['src/app/faqs/faq-data.ts', 'src/app/for-parents/page.tsx']

describe('weekly parent report claims', () => {
  it('the send is still disabled by a kill switch, so the claim rules below apply', () => {
    expect(sendsAreOff).toBe(true)
  })

  for (const file of PUBLIC_COPY) {
    const source = read(file)

    it(`${file} does not promise a weekly report while none is sent`, () => {
      if (!sendsAreOff) return
      for (const promise of PROMISES) {
        expect(source, `${file} matches ${promise}`).not.toMatch(promise)
      }
    })
  }

  it('no translated string on any page promises a weekly report while none is sent', () => {
    if (!sendsAreOff) return
    for (const [key, text] of Object.entries(EN_MESSAGES)) {
      for (const promise of PROMISES) {
        expect(text, `${key} matches ${promise}`).not.toMatch(promise)
      }
    }
  })

  it('the FAQ says plainly that weekly summaries are not sent yet', () => {
    if (!sendsAreOff) return
    const faqs = read('src/app/faqs/faq-data.ts')
    expect(faqs).toMatch(/not (?:being )?(?:generated or emailed|sent) yet/i)
  })
})
