/**
 * Which rights line a held text's reader prints under its title.
 *
 * WHAT BROKE (found 26 September 2026, in a review of the readers). Every
 * reader FullTextReader mounts printed one line: the work is out of UK
 * copyright and "the text is a copy of a published modern-spelling edition".
 * That was true of the thirteen plays and of nothing else. The novels are
 * copied as their editions print them ("to-day", "connexion"), The Tyger keeps
 * Blake's "Tyger", and Disabled and Do not go gentle are the Pearson anthology's
 * text, not a copy of any Project Gutenberg edition. Frankenstein's reader
 * already had a line of its own for the 1831 text (rev.texts.fr.read.rights).
 *
 * So the line is chosen by what the held file says it was copied from, and
 * src/__tests__/every-reader-says-where-its-text-is-from.test.ts reads each
 * file's own header to hold every text to the line it gets.
 */

/** The poems held as the Pearson Edexcel International GCSE anthology prints them. */
export const FROM_THE_ANTHOLOGY: ReadonlySet<string> = new Set([
  'disabled',
  'do-not-go-gentle-into-that-good-night',
])

export type RightsLineKey =
  | 'fulltext.rights.play'
  | 'fulltext.rights.edition'
  | 'fulltext.rights.anthology'

/**
 * The key of the line for one held text: a play is a modern-spelling edition;
 * an anthology poem is the anthology's text; anything else is a published
 * edition, spelt as that edition prints it.
 */
export function rightsLineKey(slug: string, type: string): RightsLineKey {
  if (FROM_THE_ANTHOLOGY.has(slug)) return 'fulltext.rights.anthology'
  if (type === 'play') return 'fulltext.rights.play'
  return 'fulltext.rights.edition'
}
