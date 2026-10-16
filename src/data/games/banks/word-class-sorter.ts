import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Word Class Sorter: name the word class of the highlighted word in a sentence.
 *
 * Moved out of src/app/games/word-class-sorter/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). Two of
 * the 64:
 *
 *   - "Itself a mystery, the locked door fascinated them." asked about
 *     "themselves", which is not in the sentence. The page highlights the first
 *     match of the target, found none, and showed the sentence with nothing
 *     highlighted under "What word class is the highlighted word?". The target is
 *     now "them", the pronoun the question's own note had always described, and
 *     the note no longer mentions "themselves". The sentence is unchanged: the
 *     writer had also cut "Itself a mystery,", but that opening is correct
 *     English, and only "them" is highlighted, so the second reader put it back
 *     (the smallest fix is the target alone).
 *   - "A champion swimmer trains for many hours each day." is marked Adjective,
 *     and a dictionary agrees, but "champion" before a noun can also be read as a
 *     noun used to describe another noun, so a close reader who chose Noun was
 *     marked wrong. Noun is now withheld from that question's options (`withhold`).
 *
 * The other 62 sentences were checked against all eight classes: each has one
 * class a KS3 grammar glossary gives it. Words such as "its", "Every" and
 * "Several" are determiners here, as on the site's grammar pages; older books
 * call some of them adjectives or pronouns, and the explanations say so.
 *
 * HOW THE OPTIONS WORK. The page does not keep a fixed list per question. Each
 * time a question is shown it offers the right class and three to five others,
 * drawn at random from `distractorsFor(question)`, which is every other class
 * except those the question withholds. BANK.options lists the right class and
 * that whole pool, because any of them can be shown, so every wrong class has
 * its own "why not". The panel shows only the one the student chose, which was
 * necessarily on screen.
 */

export type WordClass =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'pronoun'
  | 'preposition'
  | 'conjunction'
  | 'determiner'

export interface Question {
  sentence: string
  targetWord: string
  wordClass: WordClass
  why: string
  /** Classes the page must not offer with this question (see the docblock). */
  withhold?: WordClass[]
}

export const ALL_CLASSES: WordClass[] = [
  'noun',
  'verb',
  'adjective',
  'adverb',
  'pronoun',
  'preposition',
  'conjunction',
  'determiner',
]

export const CLASS_LABEL: Record<WordClass, string> = {
  noun: 'Noun',
  verb: 'Verb',
  adjective: 'Adjective',
  adverb: 'Adverb',
  pronoun: 'Pronoun',
  preposition: 'Preposition',
  conjunction: 'Conjunction',
  determiner: 'Determiner',
}

// 64 original sentences - context decides the class (many words shift class with use)
export const QUESTION_BANK: Question[] = [
  {
    sentence: 'The fox slipped quietly past the sleeping hounds.',
    targetWord: 'fox',
    wordClass: 'noun',
    why: '"Fox" names an animal - it is the subject of the sentence, so it is a noun.',
  },
  {
    sentence: 'They watched the ship slowly sink beneath the waves.',
    targetWord: 'sink',
    wordClass: 'verb',
    why: 'Here "sink" describes an action the ship does, so it is a verb (not the kitchen object).',
  },
  {
    sentence: 'A rusty old gate creaked in the bitter wind.',
    targetWord: 'rusty',
    wordClass: 'adjective',
    why: '"Rusty" describes the noun "gate", so it is an adjective.',
  },
  {
    sentence: 'She answered the question remarkably calmly.',
    targetWord: 'calmly',
    wordClass: 'adverb',
    why: '"Calmly" tells us how she answered - it modifies the verb, so it is an adverb.',
  },
  {
    sentence: 'Nobody believed the strange story he told.',
    targetWord: 'Nobody',
    wordClass: 'pronoun',
    why: '"Nobody" stands in place of a noun (no person), so it is an indefinite pronoun.',
  },
  {
    sentence: 'The cat hid underneath the wooden bench.',
    targetWord: 'underneath',
    wordClass: 'preposition',
    why: '"Underneath" shows the position of the cat relative to the bench, so it is a preposition.',
  },
  {
    sentence: 'He wanted to leave, but the storm trapped them inside.',
    targetWord: 'but',
    wordClass: 'conjunction',
    why: '"But" joins two contrasting clauses, so it is a coordinating conjunction.',
  },
  {
    sentence: 'Every student must bring their own pencil tomorrow.',
    targetWord: 'Every',
    wordClass: 'determiner',
    why: '"Every" comes before the noun "student" and specifies it, so it is a determiner.',
  },
  {
    sentence: 'The light from the window faded as evening came.',
    targetWord: 'light',
    wordClass: 'noun',
    why: 'Here "light" names a thing (the subject of the sentence), so it is a noun.',
  },
  {
    sentence: 'Please light the candle before the guests arrive.',
    targetWord: 'light',
    wordClass: 'verb',
    why: 'In this sentence "light" is an action you perform on the candle, so it is a verb.',
  },
  {
    sentence: 'A light breeze carried the scent of rain.',
    targetWord: 'light',
    wordClass: 'adjective',
    why: 'Here "light" describes the noun "breeze" (gentle), so it is an adjective.',
  },
  {
    sentence: 'We ran fast to catch the departing bus.',
    targetWord: 'fast',
    wordClass: 'adverb',
    why: '"Fast" tells us how we ran - it modifies the verb, so it is an adverb here.',
  },
  {
    sentence: 'The horse set a fast pace across the moor.',
    targetWord: 'fast',
    wordClass: 'adjective',
    why: 'Here "fast" describes the noun "pace", so it is an adjective.',
  },
  {
    sentence: 'She painted the fence and then mowed the lawn.',
    targetWord: 'and',
    wordClass: 'conjunction',
    why: '"And" joins two actions of equal weight, so it is a coordinating conjunction.',
  },
  {
    sentence: 'Although it was raining, the match continued.',
    targetWord: 'Although',
    wordClass: 'conjunction',
    why: '"Although" introduces a subordinate clause, so it is a subordinating conjunction.',
  },
  {
    sentence: 'The crowd cheered as the champion crossed the line.',
    targetWord: 'champion',
    wordClass: 'noun',
    why: '"Champion" names a person here, so it is a noun.',
  },
  {
    sentence: 'A champion swimmer trains for many hours each day.',
    targetWord: 'champion',
    wordClass: 'adjective',
    why: 'Here "champion" describes the noun "swimmer" (excellent), so it is an adjective.',
    withhold: ['noun'],
  },
  {
    sentence: 'They will champion the rights of every worker.',
    targetWord: 'champion',
    wordClass: 'verb',
    why: 'Here "champion" means to support strongly - an action, so it is a verb.',
  },
  {
    sentence: 'He spoke to her quietly behind the curtain.',
    targetWord: 'behind',
    wordClass: 'preposition',
    why: '"Behind" shows position relative to the curtain, so it is a preposition.',
  },
  {
    sentence: 'The runner who finished first collected the medal.',
    targetWord: 'who',
    wordClass: 'pronoun',
    why: '"Who" refers back to "the runner", so it is a relative pronoun.',
  },
  {
    sentence: 'Those mountains look impossibly tall from here.',
    targetWord: 'Those',
    wordClass: 'determiner',
    why: '"Those" points to which mountains and sits before the noun, so it is a determiner.',
  },
  {
    sentence: 'The orchestra played a haunting melody at midnight.',
    targetWord: 'haunting',
    wordClass: 'adjective',
    why: 'Here "haunting" describes the noun "melody", so it is an adjective.',
  },
  {
    sentence: 'Memories of that summer kept haunting him for years.',
    targetWord: 'haunting',
    wordClass: 'verb',
    why: 'Here "haunting" is part of the verb (kept haunting) - an ongoing action.',
  },
  {
    sentence: 'She carefully wrapped the fragile vase in newspaper.',
    targetWord: 'carefully',
    wordClass: 'adverb',
    why: '"Carefully" tells us how she wrapped it, so it is an adverb.',
  },
  {
    sentence: 'The dog buried its bone beneath the apple tree.',
    targetWord: 'its',
    wordClass: 'determiner',
    why: '"Its" is a possessive determiner showing the bone belongs to the dog.',
  },
  {
    sentence: 'We waited until the rain finally stopped.',
    targetWord: 'until',
    wordClass: 'conjunction',
    why: '"Until" introduces a subordinate clause of time, so it is a subordinating conjunction.',
  },
  {
    sentence: 'The captain steered the boat through the narrow channel.',
    targetWord: 'through',
    wordClass: 'preposition',
    why: '"Through" shows movement in relation to the channel, so it is a preposition.',
  },
  {
    sentence: 'Everyone in the village remembered the great flood.',
    targetWord: 'Everyone',
    wordClass: 'pronoun',
    why: '"Everyone" stands in place of all the people, so it is an indefinite pronoun.',
  },
  {
    sentence: 'The chef seasoned the soup with fresh herbs.',
    targetWord: 'seasoned',
    wordClass: 'verb',
    why: 'Here "seasoned" is the past-tense action the chef performed, so it is a verb.',
  },
  {
    sentence: 'A seasoned traveller packs only what she needs.',
    targetWord: 'seasoned',
    wordClass: 'adjective',
    why: 'Here "seasoned" describes the noun "traveller" (experienced), so it is an adjective.',
  },
  {
    sentence: 'The children laughed loudly during the puppet show.',
    targetWord: 'loudly',
    wordClass: 'adverb',
    why: '"Loudly" describes how the children laughed, so it is an adverb.',
  },
  {
    sentence: 'He placed the letter on the kitchen table.',
    targetWord: 'on',
    wordClass: 'preposition',
    why: '"On" shows where the letter is in relation to the table, so it is a preposition.',
  },
  {
    sentence: 'She and I will present the project together.',
    targetWord: 'I',
    wordClass: 'pronoun',
    why: '"I" replaces the speaker as the subject, so it is a personal pronoun.',
  },
  {
    sentence: 'The ancient bridge groaned under the heavy lorry.',
    targetWord: 'ancient',
    wordClass: 'adjective',
    why: '"Ancient" describes the noun "bridge", so it is an adjective.',
  },
  {
    sentence: 'They march bravely into the freezing storm.',
    targetWord: 'march',
    wordClass: 'verb',
    why: 'Here "march" is the action they perform, so it is a verb (not the month).',
  },
  {
    sentence: 'The protest march filled the entire high street.',
    targetWord: 'march',
    wordClass: 'noun',
    why: 'Here "march" names an event (the subject), so it is a noun.',
  },
  {
    sentence: 'Neither answer was correct, so we tried again.',
    targetWord: 'Neither',
    wordClass: 'determiner',
    why: '"Neither" comes before the noun "answer" and specifies it, so it is a determiner.',
  },
  {
    sentence: 'He whispered the secret, yet she heard every word.',
    targetWord: 'yet',
    wordClass: 'conjunction',
    why: '"Yet" joins two contrasting clauses here, so it is a coordinating conjunction.',
  },
  {
    sentence: 'The owl perched silently above the barn door.',
    targetWord: 'silently',
    wordClass: 'adverb',
    why: '"Silently" tells us how the owl perched, so it is an adverb.',
  },
  {
    sentence: 'Our team trained hard before the regional final.',
    targetWord: 'Our',
    wordClass: 'determiner',
    why: '"Our" is a possessive determiner before the noun "team".',
  },
  {
    sentence: 'The detective examined each clue with great care.',
    targetWord: 'examined',
    wordClass: 'verb',
    why: 'Here "examined" is the past-tense action of the detective, so it is a verb.',
  },
  {
    sentence: 'A single candle flickered against the darkness.',
    targetWord: 'against',
    wordClass: 'preposition',
    why: '"Against" shows the candle\'s position relative to the darkness, so it is a preposition.',
  },
  {
    sentence: 'She handed the keys to him without a word.',
    targetWord: 'him',
    wordClass: 'pronoun',
    why: '"Him" replaces a person and is the object here, so it is a personal pronoun.',
  },
  {
    sentence: 'The garden looked beautiful after the spring rain.',
    targetWord: 'beautiful',
    wordClass: 'adjective',
    why: '"Beautiful" describes the noun "garden", so it is an adjective.',
  },
  {
    sentence: 'They built a sturdy shelter before nightfall.',
    targetWord: 'shelter',
    wordClass: 'noun',
    why: 'Here "shelter" names a thing they built, so it is a noun.',
  },
  {
    sentence: 'The trees can shelter you from the worst of the rain.',
    targetWord: 'shelter',
    wordClass: 'verb',
    why: 'Here "shelter" is an action the trees do, so it is a verb.',
  },
  {
    sentence: 'He answered every question honestly and clearly.',
    targetWord: 'honestly',
    wordClass: 'adverb',
    why: '"Honestly" tells us how he answered, so it is an adverb.',
  },
  {
    sentence: 'We sheltered beneath the bridge during the downpour.',
    targetWord: 'beneath',
    wordClass: 'preposition',
    why: '"Beneath" shows position in relation to the bridge, so it is a preposition.',
  },
  {
    sentence: 'This map shows the safest route to the harbour.',
    targetWord: 'This',
    wordClass: 'determiner',
    why: '"This" points to which map and sits before the noun, so it is a determiner.',
  },
  {
    sentence: 'The wind howled while the campers slept soundly.',
    targetWord: 'while',
    wordClass: 'conjunction',
    why: '"While" introduces a subordinate clause of time, so it is a subordinating conjunction.',
  },
  {
    sentence: 'A brave knight defended the trembling villagers.',
    targetWord: 'brave',
    wordClass: 'adjective',
    why: '"Brave" describes the noun "knight", so it is an adjective.',
  },
  {
    sentence: 'She quickly realised that something was wrong.',
    targetWord: 'quickly',
    wordClass: 'adverb',
    why: '"Quickly" tells us how she realised it, so it is an adverb.',
  },
  {
    sentence: 'The river flows gently towards the distant sea.',
    targetWord: 'flows',
    wordClass: 'verb',
    why: '"Flows" is the action the river performs, so it is a verb.',
  },
  {
    sentence: 'Itself a mystery, the locked door fascinated them.',
    targetWord: 'them',
    wordClass: 'pronoun',
    why: '"Them" replaces the people who were fascinated; it is the object here, so it is a personal pronoun.',
  },
  {
    sentence: 'The mountain trail wound steeply between the cliffs.',
    targetWord: 'between',
    wordClass: 'preposition',
    why: '"Between" shows position relative to the cliffs, so it is a preposition.',
  },
  {
    sentence: 'Several pupils volunteered to tidy the library.',
    targetWord: 'Several',
    wordClass: 'determiner',
    why: '"Several" specifies the quantity before the noun "pupils", so it is a determiner.',
  },
  {
    sentence: 'The thunder rumbled because the storm was near.',
    targetWord: 'because',
    wordClass: 'conjunction',
    why: '"Because" introduces a subordinate clause of reason, so it is a subordinating conjunction.',
  },
  {
    sentence: 'He polished the trophy until it gleamed brightly.',
    targetWord: 'brightly',
    wordClass: 'adverb',
    why: '"Brightly" describes how it gleamed, so it is an adverb.',
  },
  {
    sentence: 'A clever solution saved the entire experiment.',
    targetWord: 'clever',
    wordClass: 'adjective',
    why: '"Clever" describes the noun "solution", so it is an adjective.',
  },
  {
    sentence: 'The author signed each book for the eager readers.',
    targetWord: 'signed',
    wordClass: 'verb',
    why: 'Here "signed" is the past-tense action the author performed, so it is a verb.',
  },
  {
    sentence: 'We could not find the exit anywhere in the maze.',
    targetWord: 'exit',
    wordClass: 'noun',
    why: 'Here "exit" names a thing (the way out), so it is a noun.',
  },
  {
    sentence: 'Please exit the building calmly during the alarm.',
    targetWord: 'exit',
    wordClass: 'verb',
    why: 'Here "exit" is an action you are told to do, so it is a verb.',
  },
  {
    sentence: 'She kept the secret safe within her own heart.',
    targetWord: 'her',
    wordClass: 'determiner',
    why: '"Her" is a possessive determiner before the noun "heart".',
  },
  {
    sentence: 'The explorers travelled far across the frozen plain.',
    targetWord: 'across',
    wordClass: 'preposition',
    why: '"Across" shows movement in relation to the plain, so it is a preposition.',
  },
]

/**
 * The classes the page may offer beside the right one for this question: every
 * other class, less any the question withholds.
 */
export function distractorsFor(q: Question): WordClass[] {
  return ALL_CLASSES.filter((c) => c !== q.wordClass && !q.withhold?.includes(c))
}

export const BANK: GameBank<Question> = {
  slug: 'word-class-sorter',
  items: QUESTION_BANK,
  // No sentence appears twice, and the sentence is what the student reads.
  key: (q) => q.sentence,
  answer: (q) => CLASS_LABEL[q.wordClass],
  // Every class the page can show with this question (see HOW THE OPTIONS WORK).
  options: (q) =>
    ALL_CLASSES.filter((c) => c === q.wordClass || !q.withhold?.includes(c)).map(
      (c) => CLASS_LABEL[c],
    ),
  tag: (q) => q.wordClass,
}
