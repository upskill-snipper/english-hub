// ─── RoutingError — the engine's concrete, throwable typed error ──────────────
//
// WHY THIS FILE EXISTS (extracted from router.ts)
// The Router (`router.ts`) and the fail-closed pack resolver (`resolve-pack.ts`)
// BOTH throw the same typed `RoutingError`. The Router additionally depends on the
// Anthropic SDK (its default classifier calls `getAnthropicClient`, which pulls in
// the `server-only` `anthropic-client` module). The resolver — and its offline unit
// tests — must NOT inherit that `server-only`/SDK dependency just to throw an error.
//
// So the runtime carrier lives HERE, in a dependency-free module both can import:
//   • `router.ts`       re-exports it (its public API + the router unit-test import
//                       `from '@/lib/marking/engine/router'` stay byte-identical).
//   • `resolve-pack.ts` imports it directly (no SDK, no `server-only` taint).
//
// The SHAPE is declared type-only in `types.ts` ({@link RoutingErrorShape}) so the
// seam module stays runtime-free (doc 10 build Step 1); this is its single concrete
// realisation.
// ──────────────────────────────────────────────────────────────────────────────

import type { RoutingErrorCode, RoutingErrorShape } from './types'

/**
 * Concrete, throwable routing/resolution error (doc 10 §2.2). The seam declares only
 * the SHAPE ({@link RoutingErrorShape}, type-only so `types.ts` stays runtime-free);
 * this class is the runtime carrier the HTTP adapters catch and map to a status
 * (NO_PACK→422, AMBIGUOUS_SUBMISSION→409, INVALID_METADATA→400 — doc 10 Step 8).
 *
 * WHY a class and not a sentinel string: callers need `instanceof` + a typed
 * `code` discriminant to branch deterministically, and a real `Error` preserves
 * the stack for observability. `code` is the stable contract; `offendingKey`
 * surfaces the bad value for a clear 4xx body.
 */
export class RoutingError extends Error implements RoutingErrorShape {
  public readonly code: RoutingErrorCode
  public readonly offendingKey?: string

  constructor(code: RoutingErrorCode, message: string, offendingKey?: string) {
    super(message)
    this.name = 'RoutingError'
    this.code = code
    this.offendingKey = offendingKey
    // Restore the prototype chain so `instanceof RoutingError` holds after the
    // TS `extends Error` down-level transpile (a well-known TS/ES5 footgun).
    Object.setPrototypeOf(this, RoutingError.prototype)
  }
}
