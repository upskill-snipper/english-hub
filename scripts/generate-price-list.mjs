#!/usr/bin/env node
/**
 * Freeze the prices the copy may quote into JSON (AUTO-3).
 *
 * WHY. The claim lint runs under plain Node in the drafting script AND inside
 * the app, and there is no TypeScript runner here, so `src/constants/pricing.ts`
 * cannot be imported by both. The first attempt had each side read the
 * constants with its own regex; they disagreed by two values within minutes,
 * which is precisely the failure the lint exists to prevent - a post quoting a
 * price checkout does not charge.
 *
 * So the list is generated once, committed, and read by both. A test
 * regenerates it and fails when it is stale.
 *
 *   node scripts/generate-price-list.mjs
 *   node scripts/generate-price-list.mjs --check
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'src/constants/permitted-prices.json')

export function buildPriceList() {
  const src = readFileSync(join(ROOT, 'src/constants/pricing.ts'), 'utf8')
  const start = src.indexOf('export const PRICING = {')
  // Bounded at the closing brace of the object, so a later constant cannot leak
  // a number into the list.
  const end = src.indexOf('\n}', start)
  const block = src.slice(start, end)

  const out = new Set()
  // Only fields whose NAME reads as money. `TRIAL_DAYS: 7` is a duration, and
  // admitting it would let a post quote "£7" as a real price.
  for (const m of block.matchAll(/^\s*([A-Z0-9_]+):\s*([\d.]+),/gm)) {
    const [, name, value] = m
    if (/DAYS|COUNT|LIMIT|PLACES|MONTHS|YEARS|PERCENT/.test(name)) continue
    out.add(Number(value).toFixed(2))
  }
  return [...out].sort()
}

const json = JSON.stringify(buildPriceList(), null, 2) + '\n'

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.argv.includes('--check')) {
    const current = existsSync(OUT) ? readFileSync(OUT, 'utf8') : ''
    if (current !== json) {
      console.error('src/constants/permitted-prices.json is out of date.')
      console.error('Run: node scripts/generate-price-list.mjs')
      process.exit(1)
    }
    console.log('Price list is current.')
    process.exit(0)
  }
  writeFileSync(OUT, json, 'utf8')
  console.log(`Wrote ${OUT.replace(ROOT, '.')} (${buildPriceList().length} prices)`)
}
