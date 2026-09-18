// ─── Unsubscribe tokens ──────────────────────────────────────────────────────
//
// WHY THIS EXISTS (19 September 2026, RET-7)
// Four email templates built links to `/unsubscribe?token=...`. That route did
// not exist. Every marketing email we have ever sent advertised an opt-out that
// returned a 404, and the one lifecycle cron that is actually switched on
// pointed its "unsubscribe" at `/dashboard/settings`, a page whose
// communication tab has no toggle on it and instead links to the consent
// centre - which no sending code reads.
//
// A recipient who wanted to stop hearing from us had, in practice, no way to.
// That is a PECR reg. 22 / UK GDPR art. 21 problem, and for a product whose
// recipients include children and their parents it is not a small one.
//
// ── WHY THE TOKEN IS HMAC'D RATHER THAN A DATABASE ROW ──────────────────────
// An unsubscribe link must work for someone who is not signed in, on a device
// that has never seen the site, possibly years later. A signed token carries
// its own authority and needs no session and no lookup table.
//
// It is scoped to ONE user id and does exactly one thing - turn marketing off.
// It grants no read, no sign-in and no other write, so a leaked token discloses
// nothing and can do nothing except an action the holder of the mailbox was
// entitled to take anyway.
//
// ── THE CRON_SECRET COUPLING, WHICH IS A REAL TRADE-OFF ─────────────────────
// The key is derived from `CRON_SECRET` so that shipping this needs no new
// production environment variable (those are the owner's to set, and an
// unsubscribe route that waits on one is an unsubscribe route that does not
// exist yet).
//
// The cost: CRON_SECRET is the rotatable credential for every cron. **Rotating
// it silently invalidates every unsubscribe link in already-delivered mail.**
// That is the original defect returning, invisibly, at exactly the moment
// somebody is responding to an incident.
//
// It is acceptable only because an unverifiable token does NOT error - it
// renders the neutral "manage your preferences" page, which still lets a
// signed-in user opt out by hand. If you rotate CRON_SECRET, know that you have
// just downgraded every outstanding unsubscribe link to that fallback. This is
// recorded in docs/system/09-scheduled-work.md as well, for whoever rotates it.
// ────────────────────────────────────────────────────────────────────────────

import crypto from 'crypto'

/** How long a link stays valid. Long, because mail is read late. */
export const UNSUBSCRIBE_TOKEN_TTL_MS = 400 * 24 * 60 * 60 * 1000 // ~13 months

function secret(): string | null {
  return process.env.CRON_SECRET || null
}

interface TokenPayload {
  /** Supabase user id (uuid) the token acts on. */
  uid: string
  /** Issued-at, epoch ms. */
  iat: number
}

/**
 * Mint a token authorising exactly one action: turn marketing email off for
 * this user. Returns null when no signing key is configured, so callers render
 * the tokenless fallback rather than a broken link.
 */
export function createUnsubscribeToken(supabaseUserId: string, issuedAt: number): string | null {
  const key = secret()
  if (!key || !supabaseUserId) return null

  const payload: TokenPayload = { uid: supabaseUserId, iat: issuedAt }
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url')
  const sig = crypto.createHmac('sha256', key).update(body).digest('base64url')
  return `${body}.${sig}`
}

export type UnsubscribeTokenResult =
  | { valid: true; supabaseUserId: string }
  | { valid: false; reason: 'no-key' | 'malformed' | 'bad-signature' | 'expired' }

/**
 * Verify a token and recover the user id it acts on.
 *
 * Every failure mode is distinguished for logging, but the CALLER must treat
 * them identically in what it shows: telling a visitor "that signature is
 * invalid" versus "that link expired" leaks whether a token was ever genuine.
 */
export function verifyUnsubscribeToken(token: string, now: number): UnsubscribeTokenResult {
  const key = secret()
  if (!key) return { valid: false, reason: 'no-key' }
  if (!token || typeof token !== 'string') return { valid: false, reason: 'malformed' }

  const parts = token.split('.')
  if (parts.length !== 2) return { valid: false, reason: 'malformed' }

  const [body, providedSig] = parts
  const expectedSig = crypto.createHmac('sha256', key).update(body).digest('base64url')

  const provided = Buffer.from(providedSig, 'base64url')
  const expected = Buffer.from(expectedSig, 'base64url')
  if (provided.length !== expected.length || !crypto.timingSafeEqual(provided, expected)) {
    return { valid: false, reason: 'bad-signature' }
  }

  let payload: TokenPayload
  try {
    payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8')) as TokenPayload
  } catch {
    return { valid: false, reason: 'malformed' }
  }

  if (typeof payload?.uid !== 'string' || !payload.uid) {
    return { valid: false, reason: 'malformed' }
  }
  if (typeof payload.iat !== 'number' || !Number.isFinite(payload.iat)) {
    return { valid: false, reason: 'malformed' }
  }
  if (now - payload.iat > UNSUBSCRIBE_TOKEN_TTL_MS) {
    return { valid: false, reason: 'expired' }
  }

  return { valid: true, supabaseUserId: payload.uid }
}
