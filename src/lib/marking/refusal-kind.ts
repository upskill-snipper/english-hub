/**
 * Which way out of an AI marking refusal the essay page offers.
 *
 * Asked only after readConsentRefusal has had its turn, so a 403 carrying a
 * consent code never reaches here and 'upgrade' is left for the 403 with no
 * code ("AI marking is a Premium feature"). The AI opt-out gets no way out
 * offered at all: its sentence says what is true, and a plan is the one thing
 * it must not be sold.
 *
 * THE DEFECT FIXED ON 10 NOVEMBER 2026. A 402 fell through to null, so when a
 * trialist used up the trial's AI checks the page showed the server's sentence
 * and nothing else: no "See plans" button at the one moment someone has just
 * proved they want the paid feature. A 402 here only ever carries code
 * 'free_allowance_exhausted' (see allowanceExhaustedResponse), and clients
 * switch on the code, never on the status alone.
 *
 * Moved out of src/app/marking/submit/page.tsx so it can be tested: an App
 * Router page may not export helpers.
 */

import { isAiOptOutRefusal } from '@/components/consent/ai-consent-refusal'

export type RefusalKind = 'upgrade' | 'signin' | null

export function refusalKindFor(status: number, body: unknown): RefusalKind {
  if (status === 401) return 'signin'
  if (isAiOptOutRefusal(status, body)) return null
  if (status === 403) return 'upgrade'
  if (
    status === 402 &&
    body !== null &&
    typeof body === 'object' &&
    (body as { code?: unknown }).code === 'free_allowance_exhausted'
  ) {
    return 'upgrade'
  }
  return null
}
