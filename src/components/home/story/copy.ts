import { tMany } from '@/lib/i18n/t'

/**
 * Resolve a map of names to dictionary keys in one batched lookup, so a
 * component reads `c.heading` rather than awaiting t() a line at a time.
 */
export async function resolveCopy<K extends string>(
  keys: Record<K, string>,
): Promise<Record<K, string>> {
  const names = Object.keys(keys) as K[]
  const values = await tMany(names.map((n) => keys[n]))
  const out = {} as Record<K, string>
  names.forEach((n, i) => {
    out[n] = values[i] ?? ''
  })
  return out
}

/** "{board} does not set Macbeth" with {board} filled; every occurrence. */
export function fill(template: string, vars: Record<string, string>): string {
  return Object.entries(vars).reduce(
    (s, [name, value]) => s.split(`{${name}}`).join(value),
    template,
  )
}

/**
 * "AQA, OCR and Eduqas": a list joined with the locale's separator and its
 * word for "and", so the Arabic reads with its own comma and conjunction.
 */
export function joinList(items: string[], sep: string, and: string): string {
  if (items.length <= 1) return items.join('')
  const head = items.slice(0, -1).join(sep)
  const last = items[items.length - 1]
  // Arabic attaches the conjunction to the word; English and Spanish space it.
  const glue = and === 'و' ? ` ${and}` : ` ${and} `
  return `${head}${glue}${last}`
}
