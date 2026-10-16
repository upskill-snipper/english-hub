import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Plural Builder: read a singular noun and TYPE its plural. Nothing is chosen
 * from a list, so no question has options and no wrong option can be explained.
 *
 * Moved out of src/app/games/plural-builder/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The
 * page marks a typed answer right only when it is exactly the plural in the
 * bank. Two words have a second plural that every dictionary lists beside it:
 * "cactus" (cacti or cactuses) and "fungus" (fungi or funguses). A student who
 * had just met the rule "nouns ending in -s add -es" and typed "cactuses" was
 * told "Not quite" for a correct word. Marking is not ours to widen, so the
 * two words were swapped for the same pattern (a Latin -us noun with -i):
 * "nucleus" (nuclei) and "stimulus" (stimuli). Oxford Learner's Dictionaries
 * lists no other plural for "nucleus" ("nucleuses" is a rare variant in some
 * American dictionaries), and no dictionary checked lists "stimuluses".
 *
 * "fish" stays. "Fishes" is listed too, but dictionaries keep it for
 * different kinds of fish, and the game asks for the everyday plural; the
 * explanation says so. The second reader (16 October 2026) found two more
 * words of that kind and kept them for the same reason: "person" (Oxford
 * Learner's Dictionaries gives "persons" as the formal plural and "people"
 * for ordinary use; the explanation says so) and "mouse" ("mouses" is listed
 * only for the computer device, and "mice" is usual there too; the
 * explanation says "mice" for both).
 *
 * The other 57 words are unchanged. Each keeps the one-line rule it was
 * written with; the page no longer shows it, because the explanation says
 * more. The rule also names the question's kind when an answer is recorded.
 */

export interface PluralWord {
  singular: string
  plural: string
  rule: string // the earlier one-line rule; the explanation replaced it on the page
}

export const PLURAL_BANK: PluralWord[] = [
  // Regular: add -s
  { singular: 'book', plural: 'books', rule: 'Most nouns just add -s.' },
  { singular: 'car', plural: 'cars', rule: 'Most nouns just add -s.' },
  { singular: 'dog', plural: 'dogs', rule: 'Most nouns just add -s.' },
  { singular: 'table', plural: 'tables', rule: 'Most nouns just add -s.' },
  { singular: 'apple', plural: 'apples', rule: 'Most nouns just add -s.' },
  { singular: 'window', plural: 'windows', rule: 'Most nouns just add -s.' },
  { singular: 'phone', plural: 'phones', rule: 'Most nouns just add -s.' },
  { singular: 'chair', plural: 'chairs', rule: 'Most nouns just add -s.' },
  // Add -es after s, x, z, ch, sh
  { singular: 'bus', plural: 'buses', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'box', plural: 'boxes', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'watch', plural: 'watches', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'dish', plural: 'dishes', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'glass', plural: 'glasses', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'brush', plural: 'brushes', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'fox', plural: 'foxes', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'beach', plural: 'beaches', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  { singular: 'class', plural: 'classes', rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.' },
  // Consonant + y → -ies
  { singular: 'baby', plural: 'babies', rule: 'A consonant before -y: change -y to -ies.' },
  { singular: 'city', plural: 'cities', rule: 'A consonant before -y: change -y to -ies.' },
  { singular: 'story', plural: 'stories', rule: 'A consonant before -y: change -y to -ies.' },
  { singular: 'party', plural: 'parties', rule: 'A consonant before -y: change -y to -ies.' },
  { singular: 'country', plural: 'countries', rule: 'A consonant before -y: change -y to -ies.' },
  { singular: 'family', plural: 'families', rule: 'A consonant before -y: change -y to -ies.' },
  { singular: 'lady', plural: 'ladies', rule: 'A consonant before -y: change -y to -ies.' },
  // Vowel + y → just add -s
  { singular: 'boy', plural: 'boys', rule: 'A vowel before -y: just add -s.' },
  { singular: 'key', plural: 'keys', rule: 'A vowel before -y: just add -s.' },
  { singular: 'day', plural: 'days', rule: 'A vowel before -y: just add -s.' },
  { singular: 'toy', plural: 'toys', rule: 'A vowel before -y: just add -s.' },
  { singular: 'monkey', plural: 'monkeys', rule: 'A vowel before -y: just add -s.' },
  // -f / -fe → -ves
  { singular: 'leaf', plural: 'leaves', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  { singular: 'knife', plural: 'knives', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  { singular: 'wife', plural: 'wives', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  { singular: 'wolf', plural: 'wolves', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  { singular: 'shelf', plural: 'shelves', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  { singular: 'thief', plural: 'thieves', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  { singular: 'half', plural: 'halves', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  { singular: 'life', plural: 'lives', rule: 'Many nouns ending in -f or -fe change to -ves.' },
  // -o → -es
  { singular: 'tomato', plural: 'tomatoes', rule: 'Some nouns ending in -o add -es.' },
  { singular: 'potato', plural: 'potatoes', rule: 'Some nouns ending in -o add -es.' },
  { singular: 'hero', plural: 'heroes', rule: 'Some nouns ending in -o add -es.' },
  // Irregular
  { singular: 'child', plural: 'children', rule: 'Irregular plural - you must learn this one.' },
  { singular: 'foot', plural: 'feet', rule: 'Irregular plural - you must learn this one.' },
  { singular: 'mouse', plural: 'mice', rule: 'Irregular plural - you must learn this one.' },
  { singular: 'person', plural: 'people', rule: 'Irregular plural - you must learn this one.' },
  { singular: 'tooth', plural: 'teeth', rule: 'Irregular plural - you must learn this one.' },
  { singular: 'man', plural: 'men', rule: 'Irregular plural - you must learn this one.' },
  { singular: 'woman', plural: 'women', rule: 'Irregular plural - you must learn this one.' },
  { singular: 'goose', plural: 'geese', rule: 'Irregular plural - you must learn this one.' },
  // Unchanged
  {
    singular: 'sheep',
    plural: 'sheep',
    rule: 'No change - the plural is the same as the singular.',
  },
  { singular: 'fish', plural: 'fish', rule: 'No change - the plural is the same as the singular.' },
  { singular: 'deer', plural: 'deer', rule: 'No change - the plural is the same as the singular.' },
  {
    singular: 'aircraft',
    plural: 'aircraft',
    rule: 'No change - the plural is the same as the singular.',
  },
  {
    singular: 'series',
    plural: 'series',
    rule: 'No change - the plural is the same as the singular.',
  },
  // Latin / Greek
  { singular: 'nucleus', plural: 'nuclei', rule: 'Latin origin - change -us to -i.' },
  { singular: 'stimulus', plural: 'stimuli', rule: 'Latin origin - change -us to -i.' },
  { singular: 'analysis', plural: 'analyses', rule: 'Greek origin - change -is to -es.' },
  { singular: 'crisis', plural: 'crises', rule: 'Greek origin - change -is to -es.' },
  { singular: 'criterion', plural: 'criteria', rule: 'Greek origin - change -on to -a.' },
  { singular: 'phenomenon', plural: 'phenomena', rule: 'Greek origin - change -on to -a.' },
]

/** What each rule is called when an answer is recorded: short, and under the 40 characters a kind may have. */
const KIND: Record<string, string> = {
  'Most nouns just add -s.': 'add s',
  'Nouns ending in -s, -x, -z, -ch or -sh add -es.': 'add es after s x z ch sh',
  'A consonant before -y: change -y to -ies.': 'consonant plus y to ies',
  'A vowel before -y: just add -s.': 'vowel plus y add s',
  'Many nouns ending in -f or -fe change to -ves.': 'f or fe to ves',
  'Some nouns ending in -o add -es.': 'o add es',
  'Irregular plural - you must learn this one.': 'irregular plural',
  'No change - the plural is the same as the singular.': 'unchanged plural',
  'Latin origin - change -us to -i.': 'latin us to i',
  'Greek origin - change -is to -es.': 'greek is to es',
  'Greek origin - change -on to -a.': 'greek on to a',
}

export const BANK: GameBank<PluralWord> = {
  slug: 'plural-builder',
  items: PLURAL_BANK,
  // No two words are the same, and the singular is what the student sees.
  key: (w) => w.singular,
  answer: (w) => w.plural,
  // The student types the plural: there are no options.
  options: () => null,
  tag: (w) => KIND[w.rule] ?? w.rule,
}
