import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Plural Builder: read a noun and TYPE its plural, on its own or in a
 * sentence. Nothing is chosen from a list, so no question has options and no
 * wrong option can be explained.
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
 * Each word keeps the one-line rule it was written with; the page no longer
 * shows it, because the explanation says more. The rule also names the
 * question's kind when an answer is recorded.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "weak in
 * depth and content"; the audit (.tmp-games-audit/REPORT-eal.md) found that
 * nuclei, criteria or phenomena came up in 84 per cent of rounds, beside
 * book and books, that every question asked for one word on its own, and
 * that explanations gave later answers away ("three woman" explained child
 * and children). It now holds 240 questions, 80 a tier:
 *
 *   - tier 1 (A1): everyday nouns on their own (40 of the old words and 19
 *     more), and 21 short sentences where a number, "these" or "how many"
 *     decides, among them "Two ___ (child) were playing.";
 *   - tier 2 (A2): the harder spellings (-f words that keep their f, -o words
 *     with -s or -es, -ey words), more irregulars, and 40 sentences, among
 *     them uncountable nouns that never take an s ("some useful ___
 *     (advice)") and "each", "every" and "one", after which the noun stays
 *     singular;
 *   - tier 3 (B1): thirteen real lines from texts out of UK copyright (A
 *     Christmas Carol, Animal Farm, Great Expectations, Pride and Prejudice,
 *     Julius Caesar, The Tempest), each copied word for word from
 *     src/data/full-texts with its place in `source`; short texts and
 *     dialogues in which the context decides between a plural, a singular
 *     and no plural at all ("One of my ___ (classmate)", "Every ___
 *     (student)", "a pair of ___ (glove)", "very little ___ (electricity)");
 *     words that only look as if a rule applies (stomach, human, Roman,
 *     German, house, chief, belief); compounds (passers-by, runners-up,
 *     grown-ups); and the Latin and Greek plurals, which no longer appear
 *     below tier 3.
 *
 * A sentence question shows its `sentence`, with the noun in brackets after
 * the gap, and the student types the form the sentence needs, which is
 * sometimes the singular, or an uncountable noun unchanged. The page says
 * so; it used to say "Now write the plural" for every word.
 *
 * WORDS LEFT OUT. The page accepts one answer, and accepting a second is a
 * scoring decision, so no word was added whose plural British dictionaries
 * give two ways: scarf, hoof, dwarf, wharf, zero, volcano, mosquito, tornado,
 * mango, buffalo, cargo, motto, halo, octopus, radius, syllabus, focus,
 * index, appendix, formula, antenna, curriculum, stadium, millennium, and
 * euro (used as its own plural in Ireland). "Louse" is asked only in a
 * sentence about head lice, because "louse" as an insult has the plural
 * "louses". "Means" was left out because the verb "means" is in nearly every
 * explanation, which would read as a give-away to the dealer.
 *
 * Existing words: none of the 59 was changed or removed. Each now has a tier;
 * the six Latin and Greek words and "series" are tier 3. Every explanation
 * was rewritten so that none names another question's answer (the old "dog"
 * explanation listed mice, sheep and fish, and "tomato" listed photos, pianos
 * and zoos) unless the two share a fact.
 *
 * FACTS AND GROUPS. Each question names its `family`, the rule it tests
 * (silent e, -es after ch, consonant and y, -f to -ves, oo to ee, the three
 * kinds of uncountable noun, singular after each, plural after one of), and
 * no two of a family share a round (BANK.facts), nor two questions about one
 * noun. So a round tours the rules, and one question cannot teach the next.
 * `tag` stays the broad kind recorded with each answer (KIND below), and the
 * dealer spreads those kinds through the round.
 *
 * CHECKED BY A SECOND READER (31 October 2026), every question and its
 * explanation. One question fixed:
 *   - "We booked our ___ (accommodation) online." had a second right answer
 *     that the page would mark wrong: Oxford Learner's Dictionaries gives
 *     "accommodations" as the plural in North American English, and booking
 *     sites use it, so a learner taught that English would type it. It is
 *     now "Our school bought new ___ (software) for the computer room.",
 *     uncountable in every variety ("softwares" is a learner's mistake).
 * The 39 sentences whose answer is the noun unchanged (uncountable nouns,
 * the singular after "each", "every", "neither", "one" and "a", and nouns
 * such as "sheep" that do not change) were each read for a plural that
 * would also fit, and none has one now. They are fair because the page
 * says so: the round's description warns that some sentences need no
 * plural, a sentence card asks for "the form the sentence needs", and a
 * wrong answer is told "The word that fits is", not "The plural is".
 */

/** The rule a question tests. No two questions of one family share a round (BANK.facts). */
export type Family =
  | 'add-s'
  | 'silent-e-add-s'
  | 'es-after-s'
  | 'es-after-x'
  | 'es-after-ch'
  | 'es-after-sh'
  | 'es-after-z'
  | 'ch-said-k'
  | 'y-to-ies'
  | 'vowel-y-add-s'
  | 'f-to-ves'
  | 'f-add-s'
  | 'o-add-es'
  | 'o-add-s'
  | 'man-to-men'
  | 'man-add-s'
  | 'oo-to-ee'
  | 'ouse-to-ice'
  | 'ouse-add-s'
  | 'add-en'
  | 'person-people'
  | 'same-animal'
  | 'same-other'
  | 'latin-greek'
  | 'compound'
  | 'uncountable-things'
  | 'uncountable-ideas'
  | 'uncountable-stuff'
  | 'singular-in-context'
  | 'plural-in-context'

export interface PluralWord {
  /** The noun the student sees: on its own, or in brackets after the gap. */
  singular: string
  /**
   * The answer the student types: the plural, or in a sentence the form the
   * gap needs, which may be the singular or an uncountable noun unchanged.
   */
  plural: string
  rule: string // the one-line rule; the explanation replaced it on the page
  /** A sentence with ___ for the gap and the noun in brackets after it. */
  sentence?: string
  /** Where a real line comes from, as the held text titles it, shown under it. */
  source?: string
  family: Family
  /** 1 for A1, 2 for A2, 3 for B1. */
  tier: 1 | 2 | 3
}

export const PLURAL_BANK: PluralWord[] = [
  // ── Tier 1 (A1): everyday nouns, and the first sentences with a number ──
  { singular: 'book', plural: 'books', rule: 'Most nouns just add -s.', family: 'add-s', tier: 1 },
  { singular: 'car', plural: 'cars', rule: 'Most nouns just add -s.', family: 'add-s', tier: 1 },
  { singular: 'dog', plural: 'dogs', rule: 'Most nouns just add -s.', family: 'add-s', tier: 1 },
  {
    singular: 'table',
    plural: 'tables',
    rule: 'Most nouns just add -s.',
    family: 'silent-e-add-s',
    tier: 1,
  },
  {
    singular: 'apple',
    plural: 'apples',
    rule: 'Most nouns just add -s.',
    family: 'silent-e-add-s',
    tier: 1,
  },
  {
    singular: 'window',
    plural: 'windows',
    rule: 'Most nouns just add -s.',
    family: 'add-s',
    tier: 1,
  },
  {
    singular: 'phone',
    plural: 'phones',
    rule: 'Most nouns just add -s.',
    family: 'silent-e-add-s',
    tier: 1,
  },
  {
    singular: 'chair',
    plural: 'chairs',
    rule: 'Most nouns just add -s.',
    family: 'add-s',
    tier: 1,
  },
  {
    singular: 'bus',
    plural: 'buses',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-s',
    tier: 1,
  },
  {
    singular: 'box',
    plural: 'boxes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-x',
    tier: 1,
  },
  {
    singular: 'watch',
    plural: 'watches',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-ch',
    tier: 1,
  },
  {
    singular: 'dish',
    plural: 'dishes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-sh',
    tier: 1,
  },
  {
    singular: 'glass',
    plural: 'glasses',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-s',
    tier: 1,
  },
  {
    singular: 'brush',
    plural: 'brushes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-sh',
    tier: 1,
  },
  {
    singular: 'fox',
    plural: 'foxes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-x',
    tier: 1,
  },
  {
    singular: 'beach',
    plural: 'beaches',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-ch',
    tier: 1,
  },
  {
    singular: 'class',
    plural: 'classes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-s',
    tier: 1,
  },
  {
    singular: 'baby',
    plural: 'babies',
    rule: 'A consonant before -y: change -y to -ies.',
    family: 'y-to-ies',
    tier: 1,
  },
  {
    singular: 'city',
    plural: 'cities',
    rule: 'A consonant before -y: change -y to -ies.',
    family: 'y-to-ies',
    tier: 1,
  },
  {
    singular: 'story',
    plural: 'stories',
    rule: 'A consonant before -y: change -y to -ies.',
    family: 'y-to-ies',
    tier: 1,
  },
  {
    singular: 'party',
    plural: 'parties',
    rule: 'A consonant before -y: change -y to -ies.',
    family: 'y-to-ies',
    tier: 1,
  },
  {
    singular: 'family',
    plural: 'families',
    rule: 'A consonant before -y: change -y to -ies.',
    family: 'y-to-ies',
    tier: 1,
  },
  {
    singular: 'boy',
    plural: 'boys',
    rule: 'A vowel before -y: just add -s.',
    family: 'vowel-y-add-s',
    tier: 1,
  },
  {
    singular: 'key',
    plural: 'keys',
    rule: 'A vowel before -y: just add -s.',
    family: 'vowel-y-add-s',
    tier: 1,
  },
  {
    singular: 'day',
    plural: 'days',
    rule: 'A vowel before -y: just add -s.',
    family: 'vowel-y-add-s',
    tier: 1,
  },
  {
    singular: 'toy',
    plural: 'toys',
    rule: 'A vowel before -y: just add -s.',
    family: 'vowel-y-add-s',
    tier: 1,
  },
  {
    singular: 'tomato',
    plural: 'tomatoes',
    rule: 'Some nouns ending in -o add -es.',
    family: 'o-add-es',
    tier: 1,
  },
  {
    singular: 'potato',
    plural: 'potatoes',
    rule: 'Some nouns ending in -o add -es.',
    family: 'o-add-es',
    tier: 1,
  },
  {
    singular: 'child',
    plural: 'children',
    rule: 'Irregular plural - you must learn this one.',
    family: 'add-en',
    tier: 1,
  },
  {
    singular: 'foot',
    plural: 'feet',
    rule: 'Irregular plural - you must learn this one.',
    family: 'oo-to-ee',
    tier: 1,
  },
  {
    singular: 'mouse',
    plural: 'mice',
    rule: 'Irregular plural - you must learn this one.',
    family: 'ouse-to-ice',
    tier: 1,
  },
  {
    singular: 'person',
    plural: 'people',
    rule: 'Irregular plural - you must learn this one.',
    family: 'person-people',
    tier: 1,
  },
  {
    singular: 'tooth',
    plural: 'teeth',
    rule: 'Irregular plural - you must learn this one.',
    family: 'oo-to-ee',
    tier: 1,
  },
  {
    singular: 'man',
    plural: 'men',
    rule: 'Irregular plural - you must learn this one.',
    family: 'man-to-men',
    tier: 1,
  },
  {
    singular: 'woman',
    plural: 'women',
    rule: 'Irregular plural - you must learn this one.',
    family: 'man-to-men',
    tier: 1,
  },
  {
    singular: 'sheep',
    plural: 'sheep',
    rule: 'No change - the plural is the same as the singular.',
    family: 'same-animal',
    tier: 1,
  },
  {
    singular: 'fish',
    plural: 'fish',
    rule: 'No change - the plural is the same as the singular.',
    family: 'same-animal',
    tier: 1,
  },
  {
    singular: 'knife',
    plural: 'knives',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    family: 'f-to-ves',
    tier: 1,
  },
  {
    singular: 'wife',
    plural: 'wives',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    family: 'f-to-ves',
    tier: 1,
  },
  {
    singular: 'leaf',
    plural: 'leaves',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    family: 'f-to-ves',
    tier: 1,
  },
  { singular: 'pen', plural: 'pens', rule: 'Most nouns just add -s.', family: 'add-s', tier: 1 },
  { singular: 'egg', plural: 'eggs', rule: 'Most nouns just add -s.', family: 'add-s', tier: 1 },
  { singular: 'cup', plural: 'cups', rule: 'Most nouns just add -s.', family: 'add-s', tier: 1 },
  { singular: 'bird', plural: 'birds', rule: 'Most nouns just add -s.', family: 'add-s', tier: 1 },
  {
    singular: 'orange',
    plural: 'oranges',
    rule: 'Most nouns just add -s.',
    family: 'silent-e-add-s',
    tier: 1,
  },
  {
    singular: 'nose',
    plural: 'noses',
    rule: 'Most nouns just add -s.',
    family: 'silent-e-add-s',
    tier: 1,
  },
  {
    singular: 'horse',
    plural: 'horses',
    rule: 'Most nouns just add -s.',
    family: 'silent-e-add-s',
    tier: 1,
  },
  {
    singular: 'dress',
    plural: 'dresses',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-s',
    tier: 1,
  },
  {
    singular: 'lunch',
    plural: 'lunches',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-ch',
    tier: 1,
  },
  {
    singular: 'sandwich',
    plural: 'sandwiches',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-ch',
    tier: 1,
  },
  {
    singular: 'peach',
    plural: 'peaches',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-ch',
    tier: 1,
  },
  {
    singular: 'wish',
    plural: 'wishes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-sh',
    tier: 1,
  },
  {
    singular: 'bush',
    plural: 'bushes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-sh',
    tier: 1,
  },
  {
    singular: 'cherry',
    plural: 'cherries',
    rule: 'A consonant before -y: change -y to -ies.',
    family: 'y-to-ies',
    tier: 1,
  },
  {
    singular: 'donkey',
    plural: 'donkeys',
    rule: 'A vowel before -y: just add -s.',
    family: 'vowel-y-add-s',
    tier: 1,
  },
  {
    singular: 'photo',
    plural: 'photos',
    rule: 'Most nouns ending in -o just add -s.',
    family: 'o-add-s',
    tier: 1,
  },
  {
    singular: 'radio',
    plural: 'radios',
    rule: 'Most nouns ending in -o just add -s.',
    family: 'o-add-s',
    tier: 1,
  },
  {
    singular: 'zoo',
    plural: 'zoos',
    rule: 'Most nouns ending in -o just add -s.',
    family: 'o-add-s',
    tier: 1,
  },
  {
    singular: 'video',
    plural: 'videos',
    rule: 'Most nouns ending in -o just add -s.',
    family: 'o-add-s',
    tier: 1,
  },
  {
    singular: 'cat',
    plural: 'cats',
    rule: 'Most nouns just add -s.',
    sentence: 'I have two ___ (cat).',
    family: 'add-s',
    tier: 1,
  },
  {
    singular: 'cake',
    plural: 'cakes',
    rule: 'Most nouns just add -s.',
    sentence: 'There are five ___ (cake) on the plate.',
    family: 'silent-e-add-s',
    tier: 1,
  },
  {
    singular: 'kiss',
    plural: 'kisses',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    sentence: 'Give Grandma two ___ (kiss).',
    family: 'es-after-s',
    tier: 1,
  },
  {
    singular: 'lunchbox',
    plural: 'lunchboxes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    sentence: 'All the ___ (lunchbox) are on the shelf.',
    family: 'es-after-x',
    tier: 1,
  },
  {
    singular: 'church',
    plural: 'churches',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    sentence: 'There are two ___ (church) in our village.',
    family: 'es-after-ch',
    tier: 1,
  },
  {
    singular: 'toothbrush',
    plural: 'toothbrushes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    sentence: 'There are four ___ (toothbrush) by the sink.',
    family: 'es-after-sh',
    tier: 1,
  },
  {
    singular: 'puppy',
    plural: 'puppies',
    rule: 'A consonant before -y: change -y to -ies.',
    sentence: 'Our dog had three ___ (puppy).',
    family: 'y-to-ies',
    tier: 1,
  },
  {
    singular: 'holiday',
    plural: 'holidays',
    rule: 'A vowel before -y: just add -s.',
    sentence: 'We go on two ___ (holiday) a year.',
    family: 'vowel-y-add-s',
    tier: 1,
  },
  {
    singular: 'half',
    plural: 'halves',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    sentence: 'Cut the cake into two ___ (half).',
    family: 'f-to-ves',
    tier: 1,
  },
  {
    singular: 'piano',
    plural: 'pianos',
    rule: 'Most nouns ending in -o just add -s.',
    sentence: 'Our school has two ___ (piano).',
    family: 'o-add-s',
    tier: 1,
  },
  {
    singular: 'snowman',
    plural: 'snowmen',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'We built two ___ (snowman) in the park.',
    family: 'man-to-men',
    tier: 1,
  },
  {
    singular: 'child',
    plural: 'children',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'Two ___ (child) were playing.',
    family: 'add-en',
    tier: 1,
  },
  {
    singular: 'person',
    plural: 'people',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'There are four ___ (person) in my family.',
    family: 'person-people',
    tier: 1,
  },
  {
    singular: 'shoe',
    plural: 'shoes',
    rule: 'After both, many, one of or a number above one, the noun is plural.',
    sentence: 'These ___ (shoe) are too small.',
    family: 'plural-in-context',
    tier: 1,
  },
  {
    singular: 'brother',
    plural: 'brothers',
    rule: 'After both, many, one of or a number above one, the noun is plural.',
    sentence: 'How many ___ (brother) have you got?',
    family: 'plural-in-context',
    tier: 1,
  },
  {
    singular: 'sister',
    plural: 'sisters',
    rule: 'After both, many, one of or a number above one, the noun is plural.',
    sentence: 'My two ___ (sister) are at school.',
    family: 'plural-in-context',
    tier: 1,
  },
  {
    singular: 'water',
    plural: 'water',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'We need ___ (water) to live.',
    family: 'uncountable-stuff',
    tier: 1,
  },
  {
    singular: 'milk',
    plural: 'milk',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'I drink a lot of ___ (milk).',
    family: 'uncountable-stuff',
    tier: 1,
  },
  {
    singular: 'music',
    plural: 'music',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'We listen to ___ (music) in the car.',
    family: 'uncountable-stuff',
    tier: 1,
  },
  {
    singular: 'brother',
    plural: 'brother',
    rule: 'After a, one, each, every or neither, the noun stays singular.',
    sentence: 'I have one ___ (brother) and one sister.',
    family: 'singular-in-context',
    tier: 1,
  },
  {
    singular: 'cousin',
    plural: 'cousins',
    rule: 'Most nouns just add -s.',
    sentence: 'I have three ___ (cousin) in Wales.',
    family: 'add-s',
    tier: 1,
  },

  // ── Tier 2 (A2): harder spellings, irregulars, uncountables in sentences ──
  {
    singular: 'country',
    plural: 'countries',
    rule: 'A consonant before -y: change -y to -ies.',
    family: 'y-to-ies',
    tier: 2,
  },
  {
    singular: 'lady',
    plural: 'ladies',
    rule: 'A consonant before -y: change -y to -ies.',
    family: 'y-to-ies',
    tier: 2,
  },
  {
    singular: 'monkey',
    plural: 'monkeys',
    rule: 'A vowel before -y: just add -s.',
    family: 'vowel-y-add-s',
    tier: 2,
  },
  {
    singular: 'wolf',
    plural: 'wolves',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    family: 'f-to-ves',
    tier: 2,
  },
  {
    singular: 'shelf',
    plural: 'shelves',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    family: 'f-to-ves',
    tier: 2,
  },
  {
    singular: 'thief',
    plural: 'thieves',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    family: 'f-to-ves',
    tier: 2,
  },
  {
    singular: 'half',
    plural: 'halves',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    family: 'f-to-ves',
    tier: 2,
  },
  {
    singular: 'life',
    plural: 'lives',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    family: 'f-to-ves',
    tier: 2,
  },
  {
    singular: 'hero',
    plural: 'heroes',
    rule: 'Some nouns ending in -o add -es.',
    family: 'o-add-es',
    tier: 2,
  },
  {
    singular: 'goose',
    plural: 'geese',
    rule: 'Irregular plural - you must learn this one.',
    family: 'oo-to-ee',
    tier: 2,
  },
  {
    singular: 'deer',
    plural: 'deer',
    rule: 'No change - the plural is the same as the singular.',
    family: 'same-animal',
    tier: 2,
  },
  {
    singular: 'aircraft',
    plural: 'aircraft',
    rule: 'No change - the plural is the same as the singular.',
    family: 'same-other',
    tier: 2,
  },
  {
    singular: 'address',
    plural: 'addresses',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-s',
    tier: 2,
  },
  {
    singular: 'princess',
    plural: 'princesses',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-s',
    tier: 2,
  },
  {
    singular: 'circus',
    plural: 'circuses',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-s',
    tier: 2,
  },
  {
    singular: 'prefix',
    plural: 'prefixes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-x',
    tier: 2,
  },
  {
    singular: 'suffix',
    plural: 'suffixes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-x',
    tier: 2,
  },
  {
    singular: 'torch',
    plural: 'torches',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-ch',
    tier: 2,
  },
  {
    singular: 'coach',
    plural: 'coaches',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-ch',
    tier: 2,
  },
  {
    singular: 'match',
    plural: 'matches',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-ch',
    tier: 2,
  },
  {
    singular: 'eyelash',
    plural: 'eyelashes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-sh',
    tier: 2,
  },
  {
    singular: 'dictionary',
    plural: 'dictionaries',
    rule: 'A consonant before -y: change -y to -ies.',
    family: 'y-to-ies',
    tier: 2,
  },
  {
    singular: 'library',
    plural: 'libraries',
    rule: 'A consonant before -y: change -y to -ies.',
    family: 'y-to-ies',
    tier: 2,
  },
  {
    singular: 'butterfly',
    plural: 'butterflies',
    rule: 'A consonant before -y: change -y to -ies.',
    family: 'y-to-ies',
    tier: 2,
  },
  {
    singular: 'lorry',
    plural: 'lorries',
    rule: 'A consonant before -y: change -y to -ies.',
    family: 'y-to-ies',
    tier: 2,
  },
  {
    singular: 'diary',
    plural: 'diaries',
    rule: 'A consonant before -y: change -y to -ies.',
    family: 'y-to-ies',
    tier: 2,
  },
  {
    singular: 'valley',
    plural: 'valleys',
    rule: 'A vowel before -y: just add -s.',
    family: 'vowel-y-add-s',
    tier: 2,
  },
  {
    singular: 'chimney',
    plural: 'chimneys',
    rule: 'A vowel before -y: just add -s.',
    family: 'vowel-y-add-s',
    tier: 2,
  },
  {
    singular: 'journey',
    plural: 'journeys',
    rule: 'A vowel before -y: just add -s.',
    family: 'vowel-y-add-s',
    tier: 2,
  },
  {
    singular: 'loaf',
    plural: 'loaves',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    family: 'f-to-ves',
    tier: 2,
  },
  {
    singular: 'elf',
    plural: 'elves',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    family: 'f-to-ves',
    tier: 2,
  },
  {
    singular: 'chief',
    plural: 'chiefs',
    rule: 'Some nouns ending in -f or -ff just add -s.',
    family: 'f-add-s',
    tier: 2,
  },
  {
    singular: 'cliff',
    plural: 'cliffs',
    rule: 'Some nouns ending in -f or -ff just add -s.',
    family: 'f-add-s',
    tier: 2,
  },
  {
    singular: 'giraffe',
    plural: 'giraffes',
    rule: 'Some nouns ending in -f or -ff just add -s.',
    family: 'f-add-s',
    tier: 2,
  },
  {
    singular: 'echo',
    plural: 'echoes',
    rule: 'Some nouns ending in -o add -es.',
    family: 'o-add-es',
    tier: 2,
  },
  {
    singular: 'kangaroo',
    plural: 'kangaroos',
    rule: 'Most nouns ending in -o just add -s.',
    family: 'o-add-s',
    tier: 2,
  },
  {
    singular: 'hippo',
    plural: 'hippos',
    rule: 'Most nouns ending in -o just add -s.',
    family: 'o-add-s',
    tier: 2,
  },
  {
    singular: 'igloo',
    plural: 'igloos',
    rule: 'Most nouns ending in -o just add -s.',
    family: 'o-add-s',
    tier: 2,
  },
  {
    singular: 'postman',
    plural: 'postmen',
    rule: 'Irregular plural: learn it as a pair.',
    family: 'man-to-men',
    tier: 2,
  },
  {
    singular: 'house',
    plural: 'houses',
    rule: 'Most nouns just add -s.',
    family: 'ouse-add-s',
    tier: 2,
  },
  {
    singular: 'atlas',
    plural: 'atlases',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    sentence: 'The library has two ___ (atlas) of the world.',
    family: 'es-after-s',
    tier: 2,
  },
  {
    singular: 'toolbox',
    plural: 'toolboxes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    sentence: 'Dad keeps two ___ (toolbox) in the garage.',
    family: 'es-after-x',
    tier: 2,
  },
  {
    singular: 'bench',
    plural: 'benches',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    sentence: 'There are three ___ (bench) in the park.',
    family: 'es-after-ch',
    tier: 2,
  },
  {
    singular: 'paintbrush',
    plural: 'paintbrushes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    sentence: 'We need clean ___ (paintbrush) for the art lesson.',
    family: 'es-after-sh',
    tier: 2,
  },
  {
    singular: 'strawberry',
    plural: 'strawberries',
    rule: 'A consonant before -y: change -y to -ies.',
    sentence: 'The ___ (strawberry) in our garden are ripe now.',
    family: 'y-to-ies',
    tier: 2,
  },
  {
    singular: 'hobby',
    plural: 'hobbies',
    rule: 'A consonant before -y: change -y to -ies.',
    sentence: 'I have two ___ (hobby): reading and football.',
    family: 'y-to-ies',
    tier: 2,
  },
  {
    singular: 'turkey',
    plural: 'turkeys',
    rule: 'A vowel before -y: just add -s.',
    sentence: 'The farm has fifty ___ (turkey).',
    family: 'vowel-y-add-s',
    tier: 2,
  },
  {
    singular: 'calf',
    plural: 'calves',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    sentence: 'The farmer has two ___ (calf).',
    family: 'f-to-ves',
    tier: 2,
  },
  {
    singular: 'chef',
    plural: 'chefs',
    rule: 'Some nouns ending in -f or -ff just add -s.',
    sentence: 'Two ___ (chef) were cooking in the kitchen.',
    family: 'f-add-s',
    tier: 2,
  },
  {
    singular: 'domino',
    plural: 'dominoes',
    rule: 'Some nouns ending in -o add -es.',
    sentence: 'We played ___ (domino) after dinner.',
    family: 'o-add-es',
    tier: 2,
  },
  {
    singular: 'studio',
    plural: 'studios',
    rule: 'Most nouns ending in -o just add -s.',
    sentence: 'The town has two film ___ (studio).',
    family: 'o-add-s',
    tier: 2,
  },
  {
    singular: 'kilo',
    plural: 'kilos',
    rule: 'Most nouns ending in -o just add -s.',
    sentence: 'We need two ___ (kilo) of flour.',
    family: 'o-add-s',
    tier: 2,
  },
  {
    singular: 'fisherman',
    plural: 'fishermen',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'The ___ (fisherman) were mending their nets on the beach.',
    family: 'man-to-men',
    tier: 2,
  },
  {
    singular: 'policewoman',
    plural: 'policewomen',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'Two ___ (policewoman) helped us find the way.',
    family: 'man-to-men',
    tier: 2,
  },
  {
    singular: 'blouse',
    plural: 'blouses',
    rule: 'Most nouns just add -s.',
    sentence: 'She has three new ___ (blouse).',
    family: 'ouse-add-s',
    tier: 2,
  },
  {
    singular: 'grandchild',
    plural: 'grandchildren',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'Granny has six ___ (grandchild).',
    family: 'add-en',
    tier: 2,
  },
  {
    singular: 'person',
    plural: 'people',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'There were 200 ___ (person) at the concert.',
    family: 'person-people',
    tier: 2,
  },
  {
    singular: 'ostrich',
    plural: 'ostriches',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    sentence: 'We saw three ___ (ostrich) at the zoo.',
    family: 'es-after-ch',
    tier: 2,
  },
  {
    singular: 'fly',
    plural: 'flies',
    rule: 'A consonant before -y: change -y to -ies.',
    sentence: 'There are lots of ___ (fly) in the kitchen.',
    family: 'y-to-ies',
    tier: 2,
  },
  {
    singular: 'birthday',
    plural: 'birthdays',
    rule: 'A vowel before -y: just add -s.',
    sentence: 'We had two ___ (birthday) in one week.',
    family: 'vowel-y-add-s',
    tier: 2,
  },
  {
    singular: 'plate',
    plural: 'plates',
    rule: 'Most nouns just add -s.',
    sentence: 'We need ten ___ (plate) for the party.',
    family: 'silent-e-add-s',
    tier: 2,
  },
  {
    singular: 'toast',
    plural: 'toast',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: "I'd like two slices of ___ (toast), please.",
    family: 'uncountable-stuff',
    tier: 2,
  },
  {
    singular: 'rubbish',
    plural: 'rubbish',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'There is too much ___ (rubbish) in the street.',
    family: 'uncountable-things',
    tier: 2,
  },
  {
    singular: 'insect',
    plural: 'insects',
    rule: 'After both, many, one of or a number above one, the noun is plural.',
    sentence: 'Many ___ (insect) live in the soil.',
    family: 'plural-in-context',
    tier: 2,
  },
  {
    singular: 'bathroom',
    plural: 'bathroom',
    rule: 'After a, one, each, every or neither, the noun stays singular.',
    sentence: 'There is only one ___ (bathroom) in our flat.',
    family: 'singular-in-context',
    tier: 2,
  },
  {
    singular: 'team',
    plural: 'teams',
    rule: 'After both, many, one of or a number above one, the noun is plural.',
    sentence: 'Both ___ (team) played well.',
    family: 'plural-in-context',
    tier: 2,
  },
  {
    singular: 'minute',
    plural: 'minutes',
    rule: 'After both, many, one of or a number above one, the noun is plural.',
    sentence: 'I waited for a few ___ (minute).',
    family: 'plural-in-context',
    tier: 2,
  },
  {
    singular: 'shop',
    plural: 'shops',
    rule: 'After both, many, one of or a number above one, the noun is plural.',
    sentence: 'Many ___ (shop) close early on Sundays.',
    family: 'plural-in-context',
    tier: 2,
  },
  {
    singular: 'player',
    plural: 'player',
    rule: 'After a, one, each, every or neither, the noun stays singular.',
    sentence: 'Each ___ (player) gets a medal.',
    family: 'singular-in-context',
    tier: 2,
  },
  {
    singular: 'bedroom',
    plural: 'bedroom',
    rule: 'After a, one, each, every or neither, the noun stays singular.',
    sentence: 'Every ___ (bedroom) in the hotel has a shower.',
    family: 'singular-in-context',
    tier: 2,
  },
  {
    singular: 'advice',
    plural: 'advice',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'My teacher gave me some useful ___ (advice).',
    family: 'uncountable-ideas',
    tier: 2,
  },
  {
    singular: 'information',
    plural: 'information',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'I need some ___ (information) about the trip.',
    family: 'uncountable-ideas',
    tier: 2,
  },
  {
    singular: 'homework',
    plural: 'homework',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'We have a lot of ___ (homework) tonight.',
    family: 'uncountable-ideas',
    tier: 2,
  },
  {
    singular: 'furniture',
    plural: 'furniture',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'We bought some new ___ (furniture) for the flat.',
    family: 'uncountable-things',
    tier: 2,
  },
  {
    singular: 'luggage',
    plural: 'luggage',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'How much ___ (luggage) have you got?',
    family: 'uncountable-things',
    tier: 2,
  },
  {
    singular: 'traffic',
    plural: 'traffic',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'There was a lot of ___ (traffic) on the way to school.',
    family: 'uncountable-things',
    tier: 2,
  },
  {
    singular: 'money',
    plural: 'money',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'Mum gave me some ___ (money) for lunch.',
    family: 'uncountable-stuff',
    tier: 2,
  },
  {
    singular: 'weather',
    plural: 'weather',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'The ___ (weather) was lovely on Saturday.',
    family: 'uncountable-stuff',
    tier: 2,
  },
  {
    singular: 'rice',
    plural: 'rice',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'We had ___ (rice) and curry for dinner.',
    family: 'uncountable-stuff',
    tier: 2,
  },
  {
    singular: 'spacecraft',
    plural: 'spacecraft',
    rule: 'No change: the plural is the same as the singular.',
    sentence: 'Two ___ (spacecraft) landed on Mars in 2021.',
    family: 'same-other',
    tier: 2,
  },

  // ── Tier 3 (B1): real lines, context that decides, Latin and Greek plurals ──
  {
    singular: 'series',
    plural: 'series',
    rule: 'No change - the plural is the same as the singular.',
    family: 'same-other',
    tier: 3,
  },
  {
    singular: 'nucleus',
    plural: 'nuclei',
    rule: 'Latin origin - change -us to -i.',
    family: 'latin-greek',
    tier: 3,
  },
  {
    singular: 'stimulus',
    plural: 'stimuli',
    rule: 'Latin origin - change -us to -i.',
    family: 'latin-greek',
    tier: 3,
  },
  {
    singular: 'analysis',
    plural: 'analyses',
    rule: 'Greek origin - change -is to -es.',
    family: 'latin-greek',
    tier: 3,
  },
  {
    singular: 'crisis',
    plural: 'crises',
    rule: 'Greek origin - change -is to -es.',
    family: 'latin-greek',
    tier: 3,
  },
  {
    singular: 'criterion',
    plural: 'criteria',
    rule: 'Greek origin - change -on to -a.',
    family: 'latin-greek',
    tier: 3,
  },
  {
    singular: 'phenomenon',
    plural: 'phenomena',
    rule: 'Greek origin - change -on to -a.',
    family: 'latin-greek',
    tier: 3,
  },
  {
    singular: 'prison',
    plural: 'prisons',
    rule: 'Most nouns just add -s.',
    sentence: '"Are there no ___ (prison)?" asked Scrooge.',
    source: 'A Christmas Carol, Stave I',
    family: 'add-s',
    tier: 3,
  },
  {
    singular: 'animal',
    plural: 'animals',
    rule: 'Most nouns just add -s.',
    sentence: 'All ___ (animal) are equal.',
    source: 'Animal Farm, Chapter I',
    family: 'add-s',
    tier: 3,
  },
  {
    singular: 'child',
    plural: 'children',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'I am twelve years old and have had over four hundred ___ (child).',
    source: 'Animal Farm, Chapter I',
    family: 'add-en',
    tier: 3,
  },
  {
    singular: 'story',
    plural: 'stories',
    rule: 'A consonant before -y: change -y to -ies.',
    sentence: 'However, these ___ (story) were never fully believed.',
    source: 'Animal Farm, Chapter IV',
    family: 'y-to-ies',
    tier: 3,
  },
  {
    singular: 'lady',
    plural: 'ladies',
    rule: 'A consonant before -y: change -y to -ies.',
    sentence: 'There were three ___ (lady) in the room and one gentleman.',
    source: 'Great Expectations, Chapter 11',
    family: 'y-to-ies',
    tier: 3,
  },
  {
    singular: 'woman',
    plural: 'women',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'In came all the young men and ___ (woman) employed in the business.',
    source: 'A Christmas Carol, Stave II',
    family: 'man-to-men',
    tier: 3,
  },
  {
    singular: 'life',
    plural: 'lives',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    sentence: 'Let us face it: our ___ (life) are miserable, laborious, and short.',
    source: 'Animal Farm, Chapter I',
    family: 'f-to-ves',
    tier: 3,
  },
  {
    singular: 'Roman',
    plural: 'Romans',
    rule: 'Most nouns just add -s.',
    sentence: 'Friends, ___ (Roman), countrymen, lend me your ears;',
    source: 'Julius Caesar, Act III, Scene II',
    family: 'man-add-s',
    tier: 3,
  },
  {
    singular: 'stuff',
    plural: 'stuff',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence:
      'We are such ___ (stuff) / As dreams are made on, and our little life / Is rounded with a sleep.',
    source: 'The Tempest, Act IV, Scene I',
    family: 'uncountable-stuff',
    tier: 3,
  },
  {
    singular: 'wife',
    plural: 'wife',
    rule: 'After a, one, each, every or neither, the noun stays singular.',
    sentence:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a ___ (wife).',
    source: 'Pride and Prejudice, Chapter 1',
    family: 'singular-in-context',
    tier: 3,
  },
  {
    singular: 'food',
    plural: 'food',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'The winter was as cold as the last one had been, and ___ (food) was even shorter.',
    source: 'Animal Farm, Chapter IX',
    family: 'uncountable-stuff',
    tier: 3,
  },
  {
    singular: 'sheep',
    plural: 'sheep',
    rule: 'No change: the plural is the same as the singular.',
    sentence: 'He was especially successful with the ___ (sheep).',
    source: 'Animal Farm, Chapter V',
    family: 'same-animal',
    tier: 3,
  },
  {
    singular: 'potato',
    plural: 'potatoes',
    rule: 'Some nouns ending in -o add -es.',
    sentence: 'The ___ (potato) had become soft and discoloured, and only a few were edible.',
    source: 'Animal Farm, Chapter VII',
    family: 'o-add-es',
    tier: 3,
  },
  {
    singular: 'bacterium',
    plural: 'bacteria',
    rule: 'Latin origin: change -um to -a.',
    family: 'latin-greek',
    tier: 3,
  },
  {
    singular: 'hypothesis',
    plural: 'hypotheses',
    rule: 'Greek origin: change -is to -es.',
    family: 'latin-greek',
    tier: 3,
  },
  {
    singular: 'passer-by',
    plural: 'passers-by',
    rule: 'In a compound noun, the main noun takes the plural.',
    family: 'compound',
    tier: 3,
  },
  {
    singular: 'runner-up',
    plural: 'runners-up',
    rule: 'In a compound noun, the main noun takes the plural.',
    family: 'compound',
    tier: 3,
  },
  {
    singular: 'grown-up',
    plural: 'grown-ups',
    rule: 'A compound with no noun inside takes -s at the end.',
    family: 'compound',
    tier: 3,
  },
  {
    singular: 'stomach',
    plural: 'stomachs',
    rule: 'A -ch that sounds like k just adds -s.',
    family: 'ch-said-k',
    tier: 3,
  },
  {
    singular: 'monarch',
    plural: 'monarchs',
    rule: 'A -ch that sounds like k just adds -s.',
    family: 'ch-said-k',
    tier: 3,
  },
  {
    singular: 'human',
    plural: 'humans',
    rule: 'Most nouns just add -s.',
    sentence: 'Bats can hear sounds that ___ (human) cannot hear.',
    family: 'man-add-s',
    tier: 3,
  },
  {
    singular: 'German',
    plural: 'Germans',
    rule: 'Most nouns just add -s.',
    sentence: 'Many ___ (German) visit Britain on holiday.',
    family: 'man-add-s',
    tier: 3,
  },
  {
    singular: 'louse',
    plural: 'lice',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'The school nurse checked our hair for head ___ (louse).',
    family: 'ouse-to-ice',
    tier: 3,
  },
  {
    singular: 'mouse',
    plural: 'mice',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'Our cat caught two ___ (mouse) last night.',
    family: 'ouse-to-ice',
    tier: 3,
  },
  {
    singular: 'belief',
    plural: 'beliefs',
    rule: 'Some nouns ending in -f or -ff just add -s.',
    family: 'f-add-s',
    tier: 3,
  },
  {
    singular: 'reef',
    plural: 'reefs',
    rule: 'Some nouns ending in -f or -ff just add -s.',
    family: 'f-add-s',
    tier: 3,
  },
  {
    singular: 'avocado',
    plural: 'avocados',
    rule: 'Most nouns ending in -o just add -s.',
    family: 'o-add-s',
    tier: 3,
  },
  {
    singular: 'logo',
    plural: 'logos',
    rule: 'Most nouns ending in -o just add -s.',
    sentence: 'The two clubs have similar ___ (logo).',
    family: 'o-add-s',
    tier: 3,
  },
  {
    singular: 'quiz',
    plural: 'quizzes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    sentence: 'We had two ___ (quiz) this week.',
    family: 'es-after-z',
    tier: 3,
  },
  {
    singular: 'tax',
    plural: 'taxes',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    sentence: 'The government raised several ___ (tax).',
    family: 'es-after-x',
    tier: 3,
  },
  {
    singular: 'business',
    plural: 'businesses',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-s',
    tier: 3,
  },
  {
    singular: 'virus',
    plural: 'viruses',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    family: 'es-after-s',
    tier: 3,
  },
  {
    singular: 'bus',
    plural: 'buses',
    rule: 'Nouns ending in -s, -x, -z, -ch or -sh add -es.',
    sentence: 'You wait ages for a bus, and then two ___ (bus) come at once.',
    family: 'es-after-s',
    tier: 3,
  },
  {
    singular: 'activity',
    plural: 'activities',
    rule: 'A consonant before -y: change -y to -ies.',
    sentence: 'Our youth club has lots of ___ (activity) for teenagers.',
    family: 'y-to-ies',
    tier: 3,
  },
  {
    singular: 'university',
    plural: 'universities',
    rule: 'A consonant before -y: change -y to -ies.',
    sentence: 'Britain has more than a hundred ___ (university).',
    family: 'y-to-ies',
    tier: 3,
  },
  {
    singular: 'battery',
    plural: 'batteries',
    rule: 'A consonant before -y: change -y to -ies.',
    sentence: 'This remote control needs two ___ (battery).',
    family: 'y-to-ies',
    tier: 3,
  },
  {
    singular: 'balcony',
    plural: 'balconies',
    rule: 'A consonant before -y: change -y to -ies.',
    sentence: 'Our hotel was lovely. Both ___ (balcony) had a view of the sea.',
    family: 'y-to-ies',
    tier: 3,
  },
  {
    singular: 'bakery',
    plural: 'bakeries',
    rule: 'A consonant before -y: change -y to -ies.',
    sentence: 'Our town has two ___ (bakery), and both sell fresh bread.',
    family: 'y-to-ies',
    tier: 3,
  },
  {
    singular: 'essay',
    plural: 'essays',
    rule: 'A vowel before -y: just add -s.',
    sentence: 'We wrote three ___ (essay) this term.',
    family: 'vowel-y-add-s',
    tier: 3,
  },
  {
    singular: 'survey',
    plural: 'surveys',
    rule: 'A vowel before -y: just add -s.',
    sentence: 'Our class did two ___ (survey) about sport.',
    family: 'vowel-y-add-s',
    tier: 3,
  },
  {
    singular: 'life',
    plural: 'lives',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    sentence: 'A cat has nine ___ (life), as the saying goes.',
    family: 'f-to-ves',
    tier: 3,
  },
  {
    singular: 'loaf',
    plural: 'loaves',
    rule: 'Many nouns ending in -f or -fe change to -ves.',
    sentence: 'Shopping list: cheese, two ___ (loaf) of bread, jam.',
    family: 'f-to-ves',
    tier: 3,
  },
  {
    singular: 'schoolchild',
    plural: 'schoolchildren',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'Thirty ___ (schoolchild) visited the castle.',
    family: 'add-en',
    tier: 3,
  },
  {
    singular: 'tooth',
    plural: 'teeth',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'The dentist checked all my ___ (tooth).',
    family: 'oo-to-ee',
    tier: 3,
  },
  {
    singular: 'foot',
    plural: 'feet',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'A spider has eight legs, but a bird has only two ___ (foot).',
    family: 'oo-to-ee',
    tier: 3,
  },
  {
    singular: 'goose',
    plural: 'geese',
    rule: 'Irregular plural: learn it as a pair.',
    sentence: 'Two ___ (goose) were swimming on the lake.',
    family: 'oo-to-ee',
    tier: 3,
  },
  {
    singular: 'species',
    plural: 'species',
    rule: 'No change: the plural is the same as the singular.',
    sentence: 'Scientists find new ___ (species) of insect every year.',
    family: 'same-other',
    tier: 3,
  },
  {
    singular: 'crossroads',
    plural: 'crossroads',
    rule: 'No change: the plural is the same as the singular.',
    sentence: 'There are two ___ (crossroads) on the way to school.',
    family: 'same-other',
    tier: 3,
  },
  {
    singular: 'equipment',
    plural: 'equipment',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'The school has new sports ___ (equipment).',
    family: 'uncountable-things',
    tier: 3,
  },
  {
    singular: 'software',
    plural: 'software',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'Our school bought new ___ (software) for the computer room.',
    family: 'uncountable-things',
    tier: 3,
  },
  {
    singular: 'jewellery',
    plural: 'jewellery',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'She keeps her ___ (jewellery) in a small box.',
    family: 'uncountable-things',
    tier: 3,
  },
  {
    singular: 'cutlery',
    plural: 'cutlery',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'Please put the ___ (cutlery) in the drawer.',
    family: 'uncountable-things',
    tier: 3,
  },
  {
    singular: 'knowledge',
    plural: 'knowledge',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'She has a lot of ___ (knowledge) about plants.',
    family: 'uncountable-ideas',
    tier: 3,
  },
  {
    singular: 'progress',
    plural: 'progress',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'You have made good ___ (progress) this term.',
    family: 'uncountable-ideas',
    tier: 3,
  },
  {
    singular: 'evidence',
    plural: 'evidence',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'The police found new ___ (evidence).',
    family: 'uncountable-ideas',
    tier: 3,
  },
  {
    singular: 'permission',
    plural: 'permission',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'You need ___ (permission) to leave early.',
    family: 'uncountable-ideas',
    tier: 3,
  },
  {
    singular: 'news',
    plural: 'news',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'A: Have you heard the ___ (news)? B: Yes, our team won.',
    family: 'uncountable-ideas',
    tier: 3,
  },
  {
    singular: 'scenery',
    plural: 'scenery',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'We saw beautiful ___ (scenery) in the Lake District.',
    family: 'uncountable-stuff',
    tier: 3,
  },
  {
    singular: 'electricity',
    plural: 'electricity',
    rule: 'Uncountable: no plural, even after some or a lot of.',
    sentence: 'This fridge uses very little ___ (electricity).',
    family: 'uncountable-stuff',
    tier: 3,
  },
  {
    singular: 'student',
    plural: 'student',
    rule: 'After a, one, each, every or neither, the noun stays singular.',
    sentence: 'Every ___ (student) in the class has a laptop.',
    family: 'singular-in-context',
    tier: 3,
  },
  {
    singular: 'twin',
    plural: 'twin',
    rule: 'After a, one, each, every or neither, the noun stays singular.',
    sentence: 'Neither ___ (twin) was at home when I called.',
    family: 'singular-in-context',
    tier: 3,
  },
  {
    singular: 'passenger',
    plural: 'passenger',
    rule: 'After a, one, each, every or neither, the noun stays singular.',
    sentence: 'Each ___ (passenger) must show a ticket.',
    family: 'singular-in-context',
    tier: 3,
  },
  {
    singular: 'classmate',
    plural: 'classmates',
    rule: 'After both, many, one of or a number above one, the noun is plural.',
    sentence: 'One of my ___ (classmate) is from Leeds.',
    family: 'plural-in-context',
    tier: 3,
  },
  {
    singular: 'parent',
    plural: 'parents',
    rule: 'After both, many, one of or a number above one, the noun is plural.',
    sentence: 'Neither of my ___ (parent) speaks French.',
    family: 'plural-in-context',
    tier: 3,
  },
  {
    singular: 'swimmer',
    plural: 'swimmers',
    rule: 'After both, many, one of or a number above one, the noun is plural.',
    sentence: 'Each of the ___ (swimmer) got a medal.',
    family: 'plural-in-context',
    tier: 3,
  },
  {
    singular: 'uncle',
    plural: 'uncles',
    rule: 'After both, many, one of or a number above one, the noun is plural.',
    sentence: 'Both of my ___ (uncle) are teachers.',
    family: 'plural-in-context',
    tier: 3,
  },
  {
    singular: 'glove',
    plural: 'gloves',
    rule: 'After both, many, one of or a number above one, the noun is plural.',
    sentence: 'I need a new pair of ___ (glove) for winter.',
    family: 'plural-in-context',
    tier: 3,
  },
  {
    singular: 'tourist',
    plural: 'tourists',
    rule: 'After both, many, one of or a number above one, the noun is plural.',
    sentence: 'York is full of ___ (tourist) in summer.',
    family: 'plural-in-context',
    tier: 3,
  },
  {
    singular: 'tree',
    plural: 'trees',
    rule: 'After both, many, one of or a number above one, the noun is plural.',
    sentence: 'Several ___ (tree) fell down in the storm.',
    family: 'plural-in-context',
    tier: 3,
  },
  {
    singular: 'kitten',
    plural: 'kittens',
    rule: 'Most nouns just add -s.',
    sentence:
      'Lost in the park: two black ___ (kitten). Please tell the school office if you see them.',
    family: 'add-s',
    tier: 3,
  },
  {
    singular: 'banana',
    plural: 'bananas',
    rule: 'Most nouns just add -s.',
    sentence: 'Recipe: mix the flour with two ripe ___ (banana).',
    family: 'add-s',
    tier: 3,
  },
  {
    singular: 'pet',
    plural: 'pets',
    rule: 'Most nouns just add -s.',
    sentence: 'A: How many ___ (pet) do you have? B: Three: a dog, a cat and a rabbit.',
    family: 'add-s',
    tier: 3,
  },
  {
    singular: 'playground',
    plural: 'playgrounds',
    rule: 'Most nouns just add -s.',
    sentence: 'Our park has two ___ (playground) and a café.',
    family: 'add-s',
    tier: 3,
  },
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
  // Added with the rebuild for depth, 24 October 2026.
  'A -ch that sounds like k just adds -s.': 'ch said k add s',
  'Some nouns ending in -f or -ff just add -s.': 'f add s',
  'Most nouns ending in -o just add -s.': 'o add s',
  'Irregular plural: learn it as a pair.': 'irregular plural',
  'No change: the plural is the same as the singular.': 'unchanged plural',
  'Latin origin: change -um to -a.': 'latin um to a',
  'Greek origin: change -is to -es.': 'greek is to es',
  'In a compound noun, the main noun takes the plural.': 'compound noun',
  'A compound with no noun inside takes -s at the end.': 'compound noun',
  'Uncountable: no plural, even after some or a lot of.': 'uncountable noun',
  'After a, one, each, every or neither, the noun stays singular.': 'singular after each or every',
  'After both, many, one of or a number above one, the noun is plural.':
    'plural after both many or one of',
}

export const BANK: GameBank<PluralWord> = {
  slug: 'plural-builder',
  items: PLURAL_BANK,
  // A word on its own is named by the word, as before; a sentence by the
  // sentence, which holds the word in brackets, so one noun can be asked both
  // ways.
  key: (w) => w.sentence ?? w.singular,
  answer: (w) => w.plural,
  // The student types the answer: there are no options.
  options: () => null,
  tag: (w) => KIND[w.rule] ?? w.rule,
  tier: (w) => w.tier,
  // One question a round from each rule family, and one about each noun.
  facts: (w) => [`rule:${w.family}`, `word:${w.singular.toLowerCase()}`],
  deepened: '2026-10-24',
}
