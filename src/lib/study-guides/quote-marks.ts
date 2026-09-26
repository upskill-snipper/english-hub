/**
 * A quotation without its own outer quotation marks, for a component that
 * prints its own.
 *
 * WHY (26 September 2026). The flashcard drill on every /revision/texts
 * overview wraps each card in curly marks, and most pages store their
 * quotations with marks already, so A Christmas Carol's first card read
 * ""Oh! But he was a tight-fisted hand..."" on the live site. The quiz on the
 * same pages already stripped them; the drill did not.
 *
 * Only a matching outer pair is removed (double with double, single with
 * single, straight or curly), and only one layer. A line that opens with an
 * elision ("'Tis") keeps its apostrophe unless it also ends on a single mark.
 */
const PAIRS: readonly (readonly [RegExp, RegExp])[] = [
  [/^["“]/, /["”]$/],
  [/^['‘]/, /['’]$/],
]

export function withoutOuterQuotes(text: string): string {
  const t = text.trim()
  if (t.length < 2) return t
  for (const [open, close] of PAIRS) {
    if (open.test(t) && close.test(t)) return t.slice(1, -1).trim()
  }
  return t
}
