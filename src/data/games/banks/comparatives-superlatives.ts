import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Bigger, Biggest: fill the gap in a sentence with the comparative or the
 * superlative of the adjective shown (smaller, smallest; more expensive, most
 * expensive; better, best).
 *
 * Moved out of src/app/games/comparatives-superlatives/page.tsx on 16 October
 * 2026, when every answer gained an explanation
 * (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations):
 *
 *   - "Please could you give me a ___ piece of cake?" (far, "further") is not a
 *     comparison: it has no "than", and "a further piece" means "another piece",
 *     not "a piece that is more far". The game asks for the comparative of
 *     "far", so it was testing a different word. It is now "My new school is
 *     ___ from home than my old one.", which is a comparison of distance;
 *   - "Today is ___ than yesterday." is asked twice, for "cool" and for "sunny".
 *     Both stay, and the key of every question now includes its adjective, so
 *     the two can be told apart in a student's saved results;
 *   - "That was the ___ joke of the night." (sad, "saddest") asked learners to
 *     call a joke sad, which makes sense only as slang for a weak joke. The
 *     answer was right, but the sentence it models did not mean what a learner
 *     reads in it. It is now "That was the ___ song of the night." (Found by
 *     the second reader, 16 October 2026.)
 *
 * The other 62 questions are unchanged. `family` is new: it is the section
 * heading each question sat under on the page, so a student's saved results can
 * say which spelling rule they miss. `rule` is the one-line rule the page used
 * to show after an answer; the explanation panel replaces it, and it is kept
 * here as the record of what the page said.
 *
 * THE OPTIONS. The page shows the right form and three wrong ones. The wrong
 * ones come from distractorCandidates() below, moved here from the page
 * unchanged: the other form of the same adjective, "more" or "most" put in
 * front of a short adjective, the plain adjective, and the spelling a
 * student would write if they forgot the rule (bigest, largeer, happyest). Where
 * that gives three candidates the page always shows all three; where it gives
 * four it draws three of the four. `options` here is the right form and every
 * candidate, so each wrong form a student can pick has its own "why not".
 */

export type Form = 'comparative' | 'superlative'

/** Which spelling rule the question tests, from the page's section headings. */
export type Family =
  | 'short-adjectives'
  | 'double-consonant'
  | 'ends-in-e'
  | 'ends-in-y'
  | 'long-adjectives'
  | 'irregular'

export interface CompItem {
  sentence: string // contains ___ for the gap
  adjective: string
  answer: string
  form: Form
  rule: string
  family: Family
}

function group(family: Family, items: Omit<CompItem, 'family'>[]): CompItem[] {
  return items.map((item) => ({ ...item, family }))
}

export const COMP_BANK: CompItem[] = [
  // ── One-syllable: add -er / -est ──
  ...group('short-adjectives', [
    {
      sentence: 'My new phone is ___ than my old one.',
      adjective: 'small',
      answer: 'smaller',
      form: 'comparative',
      rule: 'Short adjective: add -er.',
    },
    {
      sentence: 'This is the ___ box in the whole shop.',
      adjective: 'small',
      answer: 'smallest',
      form: 'superlative',
      rule: 'Short adjective: add -est.',
    },
    {
      sentence: 'An elephant is ___ than a dog.',
      adjective: 'tall',
      answer: 'taller',
      form: 'comparative',
      rule: 'Short adjective: add -er.',
    },
    {
      sentence: 'Ben is the ___ player in the team.',
      adjective: 'tall',
      answer: 'tallest',
      form: 'superlative',
      rule: 'Short adjective: add -est.',
    },
    {
      sentence: 'A lorry is ___ than a bicycle.',
      adjective: 'slow',
      answer: 'slower',
      form: 'comparative',
      rule: 'Short adjective: add -er.',
    },
    {
      sentence: 'This is the ___ lift in the building.',
      adjective: 'slow',
      answer: 'slowest',
      form: 'superlative',
      rule: 'Short adjective: add -est.',
    },
    {
      sentence: 'My bag is ___ than yours today.',
      adjective: 'light',
      answer: 'lighter',
      form: 'comparative',
      rule: 'Short adjective: add -er.',
    },
    {
      sentence: 'A feather is the ___ thing in the bag.',
      adjective: 'light',
      answer: 'lightest',
      form: 'superlative',
      rule: 'Short adjective: add -est.',
    },
    {
      sentence: 'Winter is ___ than summer here.',
      adjective: 'cold',
      answer: 'colder',
      form: 'comparative',
      rule: 'Short adjective: add -er.',
    },
    {
      sentence: 'January is the ___ month of the year.',
      adjective: 'cold',
      answer: 'coldest',
      form: 'superlative',
      rule: 'Short adjective: add -est.',
    },
    {
      sentence: 'This road is ___ than that one.',
      adjective: 'long',
      answer: 'longer',
      form: 'comparative',
      rule: 'Short adjective: add -er.',
    },
    {
      sentence: 'The Nile is one of the ___ rivers on Earth.',
      adjective: 'long',
      answer: 'longest',
      form: 'superlative',
      rule: 'Short adjective: add -est.',
    },
    {
      sentence: 'A jumper is ___ than a T-shirt in winter.',
      adjective: 'warm',
      answer: 'warmer',
      form: 'comparative',
      rule: 'Short adjective: add -er.',
    },
    {
      sentence: 'This is the ___ coat in the shop.',
      adjective: 'warm',
      answer: 'warmest',
      form: 'superlative',
      rule: 'Short adjective: add -est.',
    },
    {
      sentence: 'Maths feels ___ than English to me.',
      adjective: 'hard',
      answer: 'harder',
      form: 'comparative',
      rule: 'Short adjective: add -er.',
    },
    {
      sentence: 'That was the ___ test of the term.',
      adjective: 'hard',
      answer: 'hardest',
      form: 'superlative',
      rule: 'Short adjective: add -est.',
    },
    {
      sentence: 'Trains are usually ___ than buses.',
      adjective: 'fast',
      answer: 'faster',
      form: 'comparative',
      rule: 'Short adjective: add -er.',
    },
    {
      sentence: 'A cheetah is the ___ land animal.',
      adjective: 'fast',
      answer: 'fastest',
      form: 'superlative',
      rule: 'Short adjective: add -est.',
    },
    {
      sentence: 'Today is ___ than yesterday.',
      adjective: 'cool',
      answer: 'cooler',
      form: 'comparative',
      rule: 'Short adjective: add -er.',
    },
  ]),

  // ── One-syllable ending consonant-vowel-consonant: double the consonant ──
  ...group('double-consonant', [
    {
      sentence: 'An elephant is ___ than a mouse.',
      adjective: 'big',
      answer: 'bigger',
      form: 'comparative',
      rule: 'One short vowel + consonant: double the last letter, add -er.',
    },
    {
      sentence: 'A whale is the ___ animal in the ocean.',
      adjective: 'big',
      answer: 'biggest',
      form: 'superlative',
      rule: 'One short vowel + consonant: double the last letter, add -est.',
    },
    {
      sentence: 'A summer day is ___ than a winter day.',
      adjective: 'hot',
      answer: 'hotter',
      form: 'comparative',
      rule: 'One short vowel + consonant: double the last letter, add -er.',
    },
    {
      sentence: 'July is the ___ month here.',
      adjective: 'hot',
      answer: 'hottest',
      form: 'superlative',
      rule: 'One short vowel + consonant: double the last letter, add -est.',
    },
    {
      sentence: 'This pillow is ___ than that one.',
      adjective: 'thin',
      answer: 'thinner',
      form: 'comparative',
      rule: 'One short vowel + consonant: double the last letter, add -er.',
    },
    {
      sentence: 'My grandfather is the ___ runner I know.',
      adjective: 'fit',
      answer: 'fittest',
      form: 'superlative',
      rule: 'One short vowel + consonant: double the last letter, add -est.',
    },
    {
      sentence: 'My garden is ___ than the park.',
      adjective: 'wet',
      answer: 'wetter',
      form: 'comparative',
      rule: 'One short vowel + consonant: double the last letter, add -er.',
    },
    {
      sentence: 'That was the ___ song of the night.',
      adjective: 'sad',
      answer: 'saddest',
      form: 'superlative',
      rule: 'One short vowel + consonant: double the last letter, add -est.',
    },
  ]),

  // ── Ending in -e: add -r / -st ──
  ...group('ends-in-e', [
    {
      sentence: 'A lion is ___ than a kitten.',
      adjective: 'large',
      answer: 'larger',
      form: 'comparative',
      rule: 'Adjective ending in -e: just add -r.',
    },
    {
      sentence: 'This is the ___ room in the house.',
      adjective: 'large',
      answer: 'largest',
      form: 'superlative',
      rule: 'Adjective ending in -e: just add -st.',
    },
    {
      sentence: 'My route to school is ___ than yours.',
      adjective: 'safe',
      answer: 'safer',
      form: 'comparative',
      rule: 'Adjective ending in -e: just add -r.',
    },
    {
      sentence: 'This is the ___ seat on the bus.',
      adjective: 'safe',
      answer: 'safest',
      form: 'superlative',
      rule: 'Adjective ending in -e: just add -st.',
    },
    {
      sentence: 'Spring days are ___ than winter days.',
      adjective: 'nice',
      answer: 'nicer',
      form: 'comparative',
      rule: 'Adjective ending in -e: just add -r.',
    },
    {
      sentence: 'That was the ___ meal of the holiday.',
      adjective: 'nice',
      answer: 'nicest',
      form: 'superlative',
      rule: 'Adjective ending in -e: just add -st.',
    },
    {
      sentence: 'Her bedroom is ___ than mine.',
      adjective: 'wide',
      answer: 'wider',
      form: 'comparative',
      rule: 'Adjective ending in -e: just add -r.',
    },
  ]),

  // ── Two-syllable ending in -y: change y to i, add -er / -est ──
  ...group('ends-in-y', [
    {
      sentence: 'I feel ___ today than yesterday.',
      adjective: 'happy',
      answer: 'happier',
      form: 'comparative',
      rule: 'Adjective ending in -y: change y to i, add -er.',
    },
    {
      sentence: 'This is the ___ day of my life.',
      adjective: 'happy',
      answer: 'happiest',
      form: 'superlative',
      rule: 'Adjective ending in -y: change y to i, add -est.',
    },
    {
      sentence: 'My bedroom is ___ than the kitchen.',
      adjective: 'tidy',
      answer: 'tidier',
      form: 'comparative',
      rule: 'Adjective ending in -y: change y to i, add -er.',
    },
    {
      sentence: 'She is the ___ student in our class.',
      adjective: 'busy',
      answer: 'busiest',
      form: 'superlative',
      rule: 'Adjective ending in -y: change y to i, add -est.',
    },
    {
      sentence: 'This puzzle is ___ than the last one.',
      adjective: 'easy',
      answer: 'easier',
      form: 'comparative',
      rule: 'Adjective ending in -y: change y to i, add -er.',
    },
    {
      sentence: 'That is the ___ question on the paper.',
      adjective: 'easy',
      answer: 'easiest',
      form: 'superlative',
      rule: 'Adjective ending in -y: change y to i, add -est.',
    },
    {
      sentence: 'My dog is ___ than the cat.',
      adjective: 'noisy',
      answer: 'noisier',
      form: 'comparative',
      rule: 'Adjective ending in -y: change y to i, add -er.',
    },
    {
      sentence: 'It was the ___ road in the whole town.',
      adjective: 'dirty',
      answer: 'dirtiest',
      form: 'superlative',
      rule: 'Adjective ending in -y: change y to i, add -est.',
    },
    {
      sentence: 'The film was ___ than the book.',
      adjective: 'funny',
      answer: 'funnier',
      form: 'comparative',
      rule: 'Adjective ending in -y: change y to i, add -er.',
    },
    {
      sentence: 'He told the ___ story at the party.',
      adjective: 'funny',
      answer: 'funniest',
      form: 'superlative',
      rule: 'Adjective ending in -y: change y to i, add -est.',
    },
    {
      sentence: 'Today is ___ than yesterday.',
      adjective: 'sunny',
      answer: 'sunnier',
      form: 'comparative',
      rule: 'Adjective ending in -y: change y to i, add -er.',
    },
  ]),

  // ── Long adjectives: more / most ──
  ...group('long-adjectives', [
    {
      sentence: 'A diamond ring is ___ than a silver one.',
      adjective: 'expensive',
      answer: 'more expensive',
      form: 'comparative',
      rule: 'Long adjective: use "more" before it.',
    },
    {
      sentence: 'This is the ___ phone in the shop.',
      adjective: 'expensive',
      answer: 'most expensive',
      form: 'superlative',
      rule: 'Long adjective: use "most" before it.',
    },
    {
      sentence: 'A plane journey is ___ than a car journey.',
      adjective: 'comfortable',
      answer: 'more comfortable',
      form: 'comparative',
      rule: 'Long adjective: use "more" before it.',
    },
    {
      sentence: 'This is the ___ chair in the room.',
      adjective: 'comfortable',
      answer: 'most comfortable',
      form: 'superlative',
      rule: 'Long adjective: use "most" before it.',
    },
    {
      sentence: 'Science is ___ than history for me.',
      adjective: 'interesting',
      answer: 'more interesting',
      form: 'comparative',
      rule: 'Long adjective: use "more" before it.',
    },
    {
      sentence: 'That was the ___ lesson all week.',
      adjective: 'interesting',
      answer: 'most interesting',
      form: 'superlative',
      rule: 'Long adjective: use "most" before it.',
    },
    {
      sentence: 'Walking at night is ___ than in the day.',
      adjective: 'dangerous',
      answer: 'more dangerous',
      form: 'comparative',
      rule: 'Long adjective: use "more" before it.',
    },
    {
      sentence: 'That is the ___ road in the city.',
      adjective: 'dangerous',
      answer: 'most dangerous',
      form: 'superlative',
      rule: 'Long adjective: use "most" before it.',
    },
    {
      sentence: 'This task is ___ than the first one.',
      adjective: 'difficult',
      answer: 'more difficult',
      form: 'comparative',
      rule: 'Long adjective: use "more" before it.',
    },
    {
      sentence: 'It was the ___ exam of the year.',
      adjective: 'difficult',
      answer: 'most difficult',
      form: 'superlative',
      rule: 'Long adjective: use "most" before it.',
    },
    {
      sentence: 'Her new car is ___ than her old one.',
      adjective: 'beautiful',
      answer: 'more beautiful',
      form: 'comparative',
      rule: 'Long adjective: use "more" before it.',
    },
    {
      sentence: 'It was the ___ sunset I had ever seen.',
      adjective: 'beautiful',
      answer: 'most beautiful',
      form: 'superlative',
      rule: 'Long adjective: use "most" before it.',
    },
    {
      sentence: 'A library is ___ than a playground.',
      adjective: 'peaceful',
      answer: 'more peaceful',
      form: 'comparative',
      rule: 'Long adjective: use "more" before it.',
    },
  ]),

  // ── Irregular adjectives ──
  ...group('irregular', [
    {
      sentence: 'This restaurant is ___ than that one.',
      adjective: 'good',
      answer: 'better',
      form: 'comparative',
      rule: 'Irregular: good → better → best.',
    },
    {
      sentence: 'She is the ___ singer in the school.',
      adjective: 'good',
      answer: 'best',
      form: 'superlative',
      rule: 'Irregular: good → better → best.',
    },
    {
      sentence: 'My result was ___ than I expected.',
      adjective: 'bad',
      answer: 'worse',
      form: 'comparative',
      rule: 'Irregular: bad → worse → worst.',
    },
    {
      sentence: 'That was the ___ film of the year.',
      adjective: 'bad',
      answer: 'worst',
      form: 'superlative',
      rule: 'Irregular: bad → worse → worst.',
    },
    {
      sentence: 'My new school is ___ from home than my old one.',
      adjective: 'far',
      answer: 'further',
      form: 'comparative',
      rule: 'Irregular: far → further → furthest.',
    },
    {
      sentence: 'That shop is the ___ one from here.',
      adjective: 'far',
      answer: 'furthest',
      form: 'superlative',
      rule: 'Irregular: far → further → furthest.',
    },
  ]),
]

// The "other" form of the same adjective is a strong distractor.
const OTHER_FORM: Record<string, string> = {
  smaller: 'smallest',
  smallest: 'smaller',
  taller: 'tallest',
  tallest: 'taller',
  slower: 'slowest',
  slowest: 'slower',
  lighter: 'lightest',
  lightest: 'lighter',
  colder: 'coldest',
  coldest: 'colder',
  longer: 'longest',
  longest: 'longer',
  warmer: 'warmest',
  warmest: 'warmer',
  harder: 'hardest',
  hardest: 'harder',
  faster: 'fastest',
  fastest: 'faster',
  cooler: 'coolest',
  bigger: 'biggest',
  biggest: 'bigger',
  hotter: 'hottest',
  hottest: 'hotter',
  thinner: 'thinnest',
  fittest: 'fitter',
  wetter: 'wettest',
  saddest: 'sadder',
  larger: 'largest',
  largest: 'larger',
  safer: 'safest',
  safest: 'safer',
  nicer: 'nicest',
  nicest: 'nicer',
  wider: 'widest',
  happier: 'happiest',
  happiest: 'happier',
  tidier: 'tidiest',
  busiest: 'busier',
  easier: 'easiest',
  easiest: 'easier',
  noisier: 'noisiest',
  dirtiest: 'dirtier',
  funnier: 'funniest',
  funniest: 'funnier',
  sunnier: 'sunniest',
  'more expensive': 'most expensive',
  'most expensive': 'more expensive',
  'more comfortable': 'most comfortable',
  'most comfortable': 'more comfortable',
  'more interesting': 'most interesting',
  'most interesting': 'more interesting',
  'more dangerous': 'most dangerous',
  'most dangerous': 'more dangerous',
  'more difficult': 'most difficult',
  'most difficult': 'more difficult',
  'more beautiful': 'most beautiful',
  'most beautiful': 'more beautiful',
  'more peaceful': 'most peaceful',
  better: 'best',
  best: 'better',
  worse: 'worst',
  worst: 'worse',
  further: 'furthest',
  furthest: 'further',
}

/**
 * The wrong forms the game can offer for an item, in no particular order. The
 * page draws three of them. (Moved from buildOptions in the page unchanged.)
 */
export function distractorCandidates(item: CompItem): string[] {
  const { adjective, answer, form } = item
  const distractors = new Set<string>()
  const base = adjective

  if (OTHER_FORM[answer]) distractors.add(OTHER_FORM[answer])

  if (answer.includes(' ')) {
    // Long adjective - common learner errors.
    distractors.add(form === 'comparative' ? `${base}er` : `${base}est`)
    distractors.add(form === 'comparative' ? `more ${base}er` : `most ${base}est`)
  } else if (answer === 'better' || answer === 'best') {
    distractors.add('gooder').add('goodest').add('more good')
  } else if (answer === 'worse' || answer === 'worst') {
    distractors.add('badder').add('baddest').add('more bad')
  } else if (answer === 'further' || answer === 'furthest') {
    distractors.add('farer').add('farest').add('more far')
  } else {
    // Regular short adjective - over-applied "more/most" and raw form.
    distractors.add(form === 'comparative' ? `more ${base}` : `most ${base}`)
    distractors.add(base)
    distractors.add(form === 'comparative' ? `${base}est` : `${base}er`)
  }

  distractors.delete(answer)
  return [...distractors]
}

export const BANK: GameBank<CompItem> = {
  slug: 'comparatives-superlatives',
  items: COMP_BANK,
  // "Today is ___ than yesterday." appears for two adjectives, so the adjective
  // is part of the key. It is what the student sees beside the sentence.
  key: (q) => `${q.sentence} (${q.adjective})`,
  answer: (q) => q.answer,
  // The right form and every wrong form the page can draw from.
  options: (q) => [q.answer, ...distractorCandidates(q)],
  tag: (q) => q.family,
}
