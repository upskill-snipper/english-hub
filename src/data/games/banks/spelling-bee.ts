import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Spelling Bee: hear a word read aloud, read its definition, and type the
 * spelling. A round is five Foundation words, then eight Crossover and seven
 * Higher.
 *
 * Moved out of src/app/games/spelling-bee/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * The questions are unchanged.
 *
 * The student types the answer, so no question has options, and what they type
 * is never recorded or sent: only whether the spelling was right. Two words
 * have a second spelling dictionaries accept, enjambement and dénouement (with
 * the accent). Until 23 October 2026 the game marked only the usual English
 * form right, because accepting the other is a scoring decision; the founder
 * then decided it, and each is listed in `alsoAccepted`, which the page accepts
 * (src/lib/games/scoring.ts). The explanations for those two words say so.
 */

export interface SpellingWord {
  word: string
  definition: string
  difficulty: 1 | 2 | 3
  /** Other spellings dictionaries accept, marked right too (see the docblock). */
  alsoAccepted?: string[]
}

export const SPELLING_BANK: SpellingWord[] = [
  // Difficulty 1 - Foundation
  { word: 'definitely', definition: 'Without doubt; certainly', difficulty: 1 },
  { word: 'separate', definition: 'To divide or keep apart', difficulty: 1 },
  { word: 'necessary', definition: 'Required; essential', difficulty: 1 },
  {
    word: 'environment',
    definition: 'The surroundings or conditions in which something exists',
    difficulty: 1,
  },
  { word: 'beginning', definition: 'The start or first part of something', difficulty: 1 },
  { word: 'occurred', definition: 'Happened or took place', difficulty: 1 },
  { word: 'disappoint', definition: 'To fail to meet expectations', difficulty: 1 },
  {
    word: 'argument',
    definition: 'A reason or set of reasons given in support of an idea',
    difficulty: 1,
  },
  { word: 'receive', definition: 'To be given or presented with something', difficulty: 1 },
  { word: 'achieve', definition: 'To successfully reach a goal', difficulty: 1 },
  { word: 'conscience', definition: 'An inner feeling of right and wrong', difficulty: 1 },
  { word: 'privilege', definition: 'A special right or advantage', difficulty: 1 },
  { word: 'accommodate', definition: 'To provide space or lodging for', difficulty: 1 },
  { word: 'embarrass', definition: 'To cause someone to feel awkward or ashamed', difficulty: 1 },
  // Difficulty 2 - Crossover
  {
    word: 'metaphor',
    definition: 'A figure of speech comparing two unlike things directly',
    difficulty: 2,
  },
  { word: 'simile', definition: 'A comparison using "like" or "as"', difficulty: 2 },
  {
    word: 'allegory',
    definition: 'A story with a hidden moral or political meaning',
    difficulty: 2,
  },
  {
    word: 'soliloquy',
    definition: 'A speech where a character speaks thoughts aloud alone',
    difficulty: 2,
  },
  {
    word: 'juxtaposition',
    definition: 'Placing two things side by side for contrast',
    difficulty: 2,
  },
  { word: 'onomatopoeia', definition: 'Words that imitate the sound they describe', difficulty: 2 },
  { word: 'alliteration', definition: 'Repetition of initial consonant sounds', difficulty: 2 },
  {
    word: 'personification',
    definition: 'Giving human qualities to non-human things',
    difficulty: 2,
  },
  {
    word: 'denouement',
    definition: 'The final resolution of a story',
    difficulty: 2,
    alsoAccepted: ['dénouement'],
  },
  { word: 'protagonist', definition: 'The leading character in a story', difficulty: 2 },
  { word: 'antagonist', definition: 'The character who opposes the protagonist', difficulty: 2 },
  {
    word: 'foreshadowing',
    definition: 'Hints at what will happen later in the story',
    difficulty: 2,
  },
  { word: 'verisimilitude', definition: 'The appearance of being true or real', difficulty: 2 },
  {
    word: 'enjambment',
    definition: 'A sentence running over a line break in poetry',
    difficulty: 2,
    alsoAccepted: ['enjambement'],
  },
  // Difficulty 3 - Higher
  { word: 'sycophantic', definition: 'Behaving in a servile way to gain advantage', difficulty: 3 },
  {
    word: 'anachronism',
    definition: 'Something placed in the wrong historical period',
    difficulty: 3,
  },
  {
    word: 'didacticism',
    definition: 'The practice of conveying moral instruction in literature',
    difficulty: 3,
  },
  {
    word: 'catharsis',
    definition: 'The release of strong emotions through art or drama',
    difficulty: 3,
  },
  { word: 'polysyllabic', definition: 'Having many syllables', difficulty: 3 },
  { word: 'ephemeral', definition: 'Lasting for only a short time', difficulty: 3 },
  {
    word: 'magnanimous',
    definition: 'Generous or forgiving, especially towards a rival',
    difficulty: 3,
  },
  { word: 'melancholic', definition: 'Feeling or expressing pensive sadness', difficulty: 3 },
  {
    word: 'idiosyncratic',
    definition: 'Peculiar or individual in behaviour or style',
    difficulty: 3,
  },
  { word: 'perfunctory', definition: 'Carried out without real interest or care', difficulty: 3 },
  {
    word: 'acquiesce',
    definition: 'To accept something reluctantly without protest',
    difficulty: 3,
  },
  {
    word: 'bourgeoisie',
    definition: 'The middle class, especially regarded as materialistic',
    difficulty: 3,
  },
  { word: 'dichotomy', definition: 'A division into two contrasting things', difficulty: 3 },
  {
    word: 'quintessential',
    definition: 'Representing the most perfect example of something',
    difficulty: 3,
  },
]

export const BANK: GameBank<SpellingWord> = {
  slug: 'spelling-bee',
  items: SPELLING_BANK,
  // No two words are the same, and the word is what the student spells.
  key: (w) => w.word,
  answer: (w) => w.word,
  // Typed: there are no options, and nothing typed is ever recorded or sent.
  options: () => null,
}
