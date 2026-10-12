/**
 * Reading a consent refusal off an AI response, in the browser.
 *
 * Every AI route answers 403 for at least four different states: not a
 * subscriber, no AI-processing consent, no guardian consent for a child, and
 * the Children's Code AI opt-out. The inline consent panel must appear for
 * the consent states and for NOTHING else, so this helper switches on the
 * machine-readable `code` the routes now send (src/lib/consent-codes.ts) and
 * returns null for everything it does not recognise.
 *
 * It never guesses from the sentence. A 403 with no code is not a consent
 * refusal as far as the client is concerned, and the caller falls back to
 * showing the server's message as an ordinary error.
 */

import { isAiOptOutCode, isConsentRefusalCode, type ConsentRefusalCode } from '@/lib/consent-codes'

/**
 * True when a refusal is the Children's Code AI opt-out (code 'ai_opted_out').
 *
 * Callers ask this before offering a plan for a 403 with no consent code: the
 * learner, or a parent or guardian, switched AI off, and showing "See plans"
 * beside "AI features are currently disabled" would sell a child something
 * they have been opted out of (12 October 2026). It is not a consent refusal
 * either, so readConsentRefusal returns null for it and the consent panel
 * never appears. Show the server's sentence and nothing more.
 */
export function isAiOptOutRefusal(status: number, body: unknown): boolean {
  if (status !== 403 || !body || typeof body !== 'object') return false
  return isAiOptOutCode((body as { code?: unknown }).code)
}

export interface AIConsentRefusal {
  code: ConsentRefusalCode
  /** The server's own sentence. Displayed as written; never rewritten here. */
  message: string
}

/**
 * Returns the refusal when this response is a consent block, otherwise null.
 *
 * @param status HTTP status of the response
 * @param body   the already-parsed JSON body, or anything at all
 */
export function readConsentRefusal(status: number, body: unknown): AIConsentRefusal | null {
  if (status !== 403) return null
  if (!body || typeof body !== 'object') return null

  const code = (body as { code?: unknown }).code
  if (!isConsentRefusalCode(code)) return null

  const rawMessage = (body as { error?: unknown }).error
  const message = typeof rawMessage === 'string' && rawMessage.trim() !== '' ? rawMessage : ''

  return { code, message }
}

/**
 * Convenience for call sites that hold the Response and have not parsed it.
 * Returns null on a non-JSON body rather than throwing, because a refusal we
 * cannot read is simply not a refusal we can act on.
 */
export async function readConsentRefusalFromResponse(
  res: Response,
): Promise<{ refusal: AIConsentRefusal | null; body: unknown }> {
  let body: unknown = null
  try {
    body = await res.json()
  } catch {
    body = null
  }
  return { refusal: readConsentRefusal(res.status, body), body }
}
