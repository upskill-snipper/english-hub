/**
 * An assessment objective's label without the code it starts with, so a page
 * that prints the code can print the label beside it without saying it twice:
 * "AO2" and "Analyse language, form and structure".
 *
 * WHY IT TAKES THE CODE (24 October 2026). Since the AI marker was corrected
 * to mark each paper as its board does, a grid that covers several
 * objectives has one combined code ("AO1+AO3", "AO2-AO3", Cambridge's
 * "R1/R2/R5"), and its label begins with that whole code. The results page
 * stripped a single "AOn - " prefix, so "AO2-AO3 - Comparison and context"
 * showed as "AO2-AO3 (AO3 - Comparison and context)". The code the row
 * carries is stripped first; a label that does not begin with it (model
 * output, which often writes its own) falls back to the single-code prefix.
 */

/** A separator after a code: a hyphen, colon, en or em dash. Escaped, for the repo's dash sweep. */
const SEPARATOR = new RegExp('^\\s*[-:\\u2013\\u2014]\\s*')
/** One leading "AOn - " where the label starts with a code other than the row's. */
const SINGLE_CODE = new RegExp('^AO\\s*\\d+\\s*[-:\\u2013\\u2014]\\s*', 'i')

export function labelWithoutCode(code: string | undefined, label: string | undefined): string {
  const l = (label ?? '').trim()
  const c = (code ?? '').trim()
  if (c && l.toLowerCase().startsWith(c.toLowerCase())) {
    const rest = l.slice(c.length)
    // Only where the code ends there: "AO1" must not strip the start of "AO12".
    if (rest === '' || SEPARATOR.test(rest)) return rest.replace(SEPARATOR, '').trim()
  }
  return l.replace(SINGLE_CODE, '').trim()
}
