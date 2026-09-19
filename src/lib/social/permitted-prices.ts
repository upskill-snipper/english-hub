/**
 * Every price the product is permitted to quote.
 *
 * Read from a generated, committed JSON list rather than from `PRICING`
 * directly, because the claim lint also runs under plain Node in the drafting
 * script and there is no TypeScript runner in this repository. Having each side
 * parse `pricing.ts` with its own regex was the first attempt; the two
 * disagreed by two values within minutes, which is exactly the failure the lint
 * exists to prevent.
 *
 * `scripts/generate-price-list.mjs` regenerates it and
 * `social-queue-of-record.test.ts` fails when it is stale.
 */

import PERMITTED from '@/constants/permitted-prices.json'

export function permittedPrices(): string[] {
  return PERMITTED as string[]
}
