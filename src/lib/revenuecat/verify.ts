/**
 * RevenueCat webhook signature verification.
 *
 * RevenueCat authenticates outbound webhook deliveries by echoing a
 * caller-configured shared secret back in the `Authorization` header as a
 * Bearer token. We verify the incoming header matches our stored secret
 * using a constant-time comparison to blunt timing-oracle attacks against
 * the shared secret.
 *
 * ASSUMPTION(W4): the authentication header shape is `Authorization:
 * Bearer <REVENUECAT_WEBHOOK_SECRET>`. This is the shape configured in
 * the RevenueCat dashboard's "Authorization header value" field under
 * Integrations → Webhooks, and matches the mobile spec at
 * `D:\Coding\english-hub-mobile\docs\SUBSCRIPTION_AND_ENTITLEMENTS.md` § 6
 * step 7. If RevenueCat later moves to an HMAC body-signature scheme
 * (e.g. `X-RevenueCat-Signature: sha256=<hex>`), this function will need
 * to be rewritten to hash `rawBody` and `timingSafeEqual` the digest.
 */

import { createHash, timingSafeEqual } from 'crypto'

/**
 * Verify the webhook authenticity.
 *
 * Returns `true` if the request is authentic, `false` otherwise. Never
 * throws - callers translate `false` into a 401 response.
 *
 * @param rawBody - The verbatim request body as a UTF-8 string. Retained
 *                  in the signature (rather than used) so that this
 *                  function can be swapped for an HMAC-over-body scheme
 *                  without changing the call site.
 * @param headers - The request headers (Fetch-API `Headers`).
 */
export function verifyWebhookSignature(rawBody: string, headers: Headers): boolean {
  // Silence the lint about `rawBody` being unused. The parameter is part
  // of the public contract - see the ASSUMPTION note at the top of this
  // file. Referencing it here is cheap and future-proof.
  void rawBody

  const secret = process.env.REVENUECAT_WEBHOOK_SECRET
  if (!secret) {
    // Missing config is a server-side bug, not a caller error. We fail
    // closed and let the handler log a 500 rather than letting a mute
    // misconfiguration silently accept any payload.
    return false
  }

  const authHeader = headers.get('authorization')
  if (!authHeader) return false

  // The header format is `Bearer <token>`. Case-insensitive on the
  // scheme per RFC 7235, but RevenueCat's dashboard stores the exact
  // literal the caller typed, so we accept common casings.
  const match = /^Bearer\s+(.+)$/i.exec(authHeader.trim())
  if (!match) return false

  const presented = match[1]

  // Constant-time compare. `timingSafeEqual` requires equal-length
  // buffers, so we hash both sides to a fixed-length SHA-256 digest
  // first. This also means a malicious caller cannot learn the secret
  // length by probing response timing.
  const expectedDigest = createHash('sha256').update(secret, 'utf8').digest()
  const presentedDigest = createHash('sha256').update(presented, 'utf8').digest()

  try {
    return timingSafeEqual(expectedDigest, presentedDigest)
  } catch {
    // `timingSafeEqual` throws if the buffers are different lengths.
    // Both are SHA-256 digests (32 bytes), so this should never happen;
    // defensive catch in case a future Node version changes behaviour.
    return false
  }
}
