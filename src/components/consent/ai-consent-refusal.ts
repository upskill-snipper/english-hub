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

import { isConsentRefusalCode, type ConsentRefusalCode } from '@/lib/consent-codes'

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
