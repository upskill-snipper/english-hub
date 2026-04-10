/**
 * Attribution resolver for the NEW affiliate programme under /api/affiliate/*.
 *
 * NOTE: The legacy Rewardful-backed attribution lives in `./attribution.ts`
 * and is still wired into the Stripe webhook. This file lives alongside it
 * so the two systems can coexist while the new programme is rolled out.
 *
 * Default behaviour: 30-day last-touch attribution.
 *   - "Last-touch" means the most recent click within the window wins.
 *   - "First-touch" means the earliest click within the window wins.
 *
 * The window is configurable per-call; the cookie itself has a matching
 * 30-day expiry so it falls out of scope automatically when stale.
 */

import type { AffiliateCookiePayload } from './tracking-cookie'

export type AttributionModel = 'first-touch' | 'last-touch'

export interface AttributionConfig {
  model: AttributionModel
  windowDays: number
}

export const DEFAULT_ATTRIBUTION: AttributionConfig = {
  model: 'last-touch',
  windowDays: 30,
}

export interface AttributionResult {
  attributed: boolean
  ref: string | null
  linkId: string | null
  touchAt: string | null
  model: AttributionModel
  reason?: string
}

/**
 * Resolve a conversion against an affiliate cookie payload using the given
 * attribution config. Returns whether the conversion is attributable and to
 * which ref/link.
 */
export function resolveAttribution(
  cookie: AffiliateCookiePayload | null,
  config: AttributionConfig = DEFAULT_ATTRIBUTION,
  now: Date = new Date()
): AttributionResult {
  if (!cookie) {
    return {
      attributed: false,
      ref: null,
      linkId: null,
      touchAt: null,
      model: config.model,
      reason: 'no_cookie',
    }
  }

  const touchIso =
    config.model === 'first-touch' ? cookie.firstTouchAt : cookie.lastTouchAt

  const touchAt = new Date(touchIso)
  if (Number.isNaN(touchAt.getTime())) {
    return {
      attributed: false,
      ref: null,
      linkId: null,
      touchAt: null,
      model: config.model,
      reason: 'invalid_timestamp',
    }
  }

  const ageMs = now.getTime() - touchAt.getTime()
  const windowMs = config.windowDays * 24 * 60 * 60 * 1000

  if (ageMs < 0) {
    return {
      attributed: false,
      ref: null,
      linkId: null,
      touchAt: touchIso,
      model: config.model,
      reason: 'future_timestamp',
    }
  }

  if (ageMs > windowMs) {
    return {
      attributed: false,
      ref: null,
      linkId: null,
      touchAt: touchIso,
      model: config.model,
      reason: 'outside_window',
    }
  }

  return {
    attributed: true,
    ref: cookie.ref,
    linkId: cookie.linkId ?? null,
    touchAt: touchIso,
    model: config.model,
  }
}

/**
 * Update a cookie payload when a new click comes in. Behaviour:
 *   - firstTouchAt is preserved
 *   - lastTouchAt is bumped to now
 *   - clickCount increments
 *   - If the ref has changed, the new ref wins for last-touch but the
 *     firstTouchAt remains anchored to the very first click for first-touch.
 */
export function applyNewClick(
  existing: AffiliateCookiePayload | null,
  newRef: string,
  newLinkId: string | undefined,
  now: Date = new Date()
): AffiliateCookiePayload {
  const nowIso = now.toISOString()

  if (!existing) {
    return {
      ref: newRef,
      linkId: newLinkId,
      firstTouchAt: nowIso,
      lastTouchAt: nowIso,
      clickCount: 1,
    }
  }

  return {
    ref: newRef,
    linkId: newLinkId ?? existing.linkId,
    firstTouchAt: existing.firstTouchAt,
    lastTouchAt: nowIso,
    clickCount: (existing.clickCount ?? 0) + 1,
  }
}
