import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Word Class Sorter: name the word class of the highlighted word in a sentence,
 * or, at tier 3, say what kind of phrase or clause a highlighted group of words
 * is and what it does in the sentence.
 *
 * Moved out of src/app/games/word-class-sorter/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts). Two
 * of the 64 questions were wrong then and were mended that day: "Itself a
 * mystery, the locked door fascinated them." asked about "themselves", which is
 * not in the sentence, so nothing was highlighted (the target is now "them");
 * and "A champion swimmer..." marked a close reader wrong for Noun, a fair
 * reading of "champion" before a noun (Noun is still not offered).
 *
 * REBUILT FOR DEPTH, 24 to 31 October 2026, after the founder found the games
 * "too obvious and easy". 64 questions became 200, in three tiers:
 *
 *   - tier 1 (39 old questions): a word with one class in its sentence;
 *   - tier 2 (25 old, 75 new): the sentence decides the class. "Since" is a
 *     preposition before a noun phrase, a conjunction before a clause and an
 *     adverb on its own; before, after, until, as, like, past, round and up
 *     change in the same way; "that", "only", "still" and "so" change class
 *     with their job; -ly words can be adjectives (friendly, lonely, kindly);
 *     -ing and past forms can be verbs, adjectives or nouns (burning, broken,
 *     swimming); and nouns, verbs and adjectives share spellings (iron,
 *     present, cold);
 *   - tier 3 (61 new): what kind of group the highlighted words are (noun
 *     phrase, prepositional phrase, or relative, subordinate or main clause),
 *     and what a clause does (when, where, how, why, what for, on what
 *     condition, with what result, against what). "So that" is asked both for
 *     a purpose and for a result, because telling them apart is the skill.
 *
 * 117 of the 136 new sentences are real lines from the public-domain texts in
 * src/data/full-texts/, copied exactly, each with its `source`
 * (a-game-real-line-is-the-held-text.test.ts holds them to the text). A
 * relative clause is a kind of subordinate clause, so no question whose answer
 * is "Relative clause" offers "Subordinate clause" as wrong.
 *
 * WHAT CHANGED IN THE OLD QUESTIONS. The page used to offer the right class and
 * three to five others drawn at random from all eight, so a question was often
 * shown with no near neighbour ("Conjunction" beside "fox") and every class had
 * to have its "why not". Each question now carries three wrong options of its
 * own (`wrong`), each a likely confusion, and `withhold` and `distractorsFor`
 * are gone. "Light", "fast", "champion", "haunting", "march", "shelter",
 * "exit" and "seasoned" are each asked in two or three classes; a round could
 * deal every question on one word together, and each explanation named the
 * other classes ("light" was asked three times in one round, each answering
 * the next). `facts` now keeps one word to one question a round, and 41 old
 * explanations were rewritten (src/data/games/explanations/word-class-sorter.ts
 * says how).
 *
 * WHAT IS KEPT APART. Besides the word itself, `shared` keeps to one a round
 * the tier 3 lines from one chapter (six from Animal Farm Chapter 1, six from
 * Stave 1 of A Christmas Carol, four each from Chapter 1 of Great Expectations
 * and of Pride and Prejudice, two from Chapter 5 of Frankenstein), so that no
 * round is crowded with one scene, and two lines that answer each other ("only
 * one candidate" asks "one"; "only one real ambition" asks "only").
 *
 * CHECKED (31 October 2026), by a second reader, every question against the
 * national curriculum glossary and its text: all 122 real lines (117 above,
 * and the five below) are the held text in the section `source` names. Fixed:
 *
 *   - "its" (its bone), "Our" (Our team): offered Pronoun as wrong. The
 *     glossary lists possessives among determiners but also calls "his" in
 *     "his obituary" a possessive pronoun, and this site's own Apostrophe Ace
 *     calls "its" one, so a child taught that label was marked wrong for it.
 *     Pronoun is no longer offered; Verb is, for "it's" and "are";
 *   - "her" (within her own heart): the same label question, and with Pronoun
 *     gone nothing near it was left. Now Miss Havisham's "If she wounds you,
 *     love her.", where "her" is an object, a pronoun under every label, and
 *     Determiner is the near neighbour;
 *   - "burning" (The burning logs): marked an adjective, but "a very burning
 *     log" fails the very test this game teaches for "haunting", so a close
 *     reader could answer Verb. Now "the most terrifying spectacle"
 *     (Animal Farm Chapter 4), where "most" settles it and "rearing" and
 *     "striking" beside it are the verb forms;
 *   - since (adverb), so (conjunction), still (adjective): invented sentences,
 *     now real lines that test the same thing (Great Expectations 59, Jane
 *     Eyre 11 and 12); the last is cut before "my road was lonely", because
 *     "lonely" is another question's word in the same pattern.
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
  /** The word, or the group of words, highlighted: its first match as whole words */
  targetWord: string
  /** A word question's class */
  wordClass?: WordClass
  /** A phrase or clause question's right option: a label, or a reading of what the words do */
  answer?: string
  /** The wrong options shown with the answer, each a likely confusion (24 October 2026) */
  wrong: readonly string[]
  /** The question asked, where it is not the page's own (a word's class, or a group of words) */
  prompt?: string
  /** What a phrase or clause question tests (the dealer's group), where there is no class */
  kind?: string
  /** 1 recall, 2 understanding, 3 the exam skill (24 October 2026) */
  tier: 1 | 2 | 3
  /** Where a real sentence comes from: the text and its chapter, act or stanza */
  source?: string
  /** The word asked about, where it is not the highlighted target (the dealer's fact) */
  word?: string
  /** Something two questions share that would give one away: they are never dealt together */
  shared?: string | readonly string[]
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

// The 64 old questions (tiers 1 and 2) first, then the new tier 2 words, then
// the tier 3 phrases and clauses and what each clause does.
export const QUESTION_BANK: Question[] = [
  {
    sentence: 'The fox slipped quietly past the sleeping hounds.',
    targetWord: 'fox',
    wordClass: 'noun',
    wrong: ['Verb', 'Adjective', 'Pronoun'],
    tier: 1,
  },
  {
    sentence: 'They watched the ship slowly sink beneath the waves.',
    targetWord: 'sink',
    wordClass: 'verb',
    wrong: ['Noun', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'A rusty old gate creaked in the bitter wind.',
    targetWord: 'rusty',
    wordClass: 'adjective',
    wrong: ['Noun', 'Verb', 'Adverb'],
    tier: 1,
  },
  {
    sentence: 'She answered the question remarkably calmly.',
    targetWord: 'calmly',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Verb', 'Noun'],
    tier: 1,
  },
  {
    sentence: 'Nobody believed the strange story he told.',
    targetWord: 'Nobody',
    wordClass: 'pronoun',
    wrong: ['Noun', 'Determiner', 'Adjective'],
    tier: 1,
  },
  {
    sentence: 'The cat hid underneath the wooden bench.',
    targetWord: 'underneath',
    wordClass: 'preposition',
    wrong: ['Adverb', 'Conjunction', 'Adjective'],
    tier: 1,
  },
  {
    sentence: 'He wanted to leave, but the storm trapped them inside.',
    targetWord: 'but',
    wordClass: 'conjunction',
    wrong: ['Preposition', 'Adverb', 'Determiner'],
    tier: 1,
  },
  {
    sentence: 'Every student must bring their own pencil tomorrow.',
    targetWord: 'Every',
    wordClass: 'determiner',
    wrong: ['Pronoun', 'Adjective', 'Adverb'],
    tier: 1,
  },
  {
    sentence: 'The light from the window faded as evening came.',
    targetWord: 'light',
    wordClass: 'noun',
    wrong: ['Verb', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'Please light the candle before the guests arrive.',
    targetWord: 'light',
    wordClass: 'verb',
    wrong: ['Noun', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'A light breeze carried the scent of rain.',
    targetWord: 'light',
    wordClass: 'adjective',
    wrong: ['Noun', 'Verb', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'We ran fast to catch the departing bus.',
    targetWord: 'fast',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Noun', 'Verb'],
    tier: 2,
  },
  {
    sentence: 'The horse set a fast pace across the moor.',
    targetWord: 'fast',
    wordClass: 'adjective',
    wrong: ['Adverb', 'Noun', 'Verb'],
    tier: 2,
  },
  {
    sentence: 'She painted the fence and then mowed the lawn.',
    targetWord: 'and',
    wordClass: 'conjunction',
    wrong: ['Preposition', 'Adverb', 'Determiner'],
    tier: 1,
  },
  {
    sentence: 'Although it was raining, the match continued.',
    targetWord: 'Although',
    wordClass: 'conjunction',
    wrong: ['Preposition', 'Adverb', 'Determiner'],
    tier: 1,
  },
  {
    sentence: 'The crowd cheered as the champion crossed the line.',
    targetWord: 'champion',
    wordClass: 'noun',
    wrong: ['Verb', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'A champion swimmer trains for many hours each day.',
    targetWord: 'champion',
    wordClass: 'adjective',
    wrong: ['Verb', 'Adverb', 'Determiner'],
    tier: 2,
  },
  {
    sentence: 'They will champion the rights of every worker.',
    targetWord: 'champion',
    wordClass: 'verb',
    wrong: ['Noun', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'He spoke to her quietly behind the curtain.',
    targetWord: 'behind',
    wordClass: 'preposition',
    wrong: ['Adverb', 'Conjunction', 'Adjective'],
    tier: 1,
  },
  {
    sentence: 'The runner who finished first collected the medal.',
    targetWord: 'who',
    wordClass: 'pronoun',
    wrong: ['Conjunction', 'Determiner', 'Noun'],
    tier: 2,
  },
  {
    sentence: 'Those mountains look impossibly tall from here.',
    targetWord: 'Those',
    wordClass: 'determiner',
    wrong: ['Pronoun', 'Adjective', 'Adverb'],
    tier: 1,
  },
  {
    sentence: 'The orchestra played a haunting melody at midnight.',
    targetWord: 'haunting',
    wordClass: 'adjective',
    wrong: ['Verb', 'Noun', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'Memories of that summer kept haunting him for years.',
    targetWord: 'haunting',
    wordClass: 'verb',
    wrong: ['Adjective', 'Noun', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'She carefully wrapped the fragile vase in newspaper.',
    targetWord: 'carefully',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Verb', 'Noun'],
    tier: 1,
  },
  {
    sentence: 'The dog buried its bone beneath the apple tree.',
    targetWord: 'its',
    wordClass: 'determiner',
    wrong: ['Verb', 'Adjective', 'Noun'],
    tier: 2,
  },
  {
    sentence: 'We waited until the rain finally stopped.',
    targetWord: 'until',
    wordClass: 'conjunction',
    wrong: ['Preposition', 'Adverb', 'Determiner'],
    tier: 2,
  },
  {
    sentence: 'The captain steered the boat through the narrow channel.',
    targetWord: 'through',
    wordClass: 'preposition',
    wrong: ['Adverb', 'Conjunction', 'Adjective'],
    tier: 1,
  },
  {
    sentence: 'Everyone in the village remembered the great flood.',
    targetWord: 'Everyone',
    wordClass: 'pronoun',
    wrong: ['Noun', 'Determiner', 'Adjective'],
    tier: 1,
  },
  {
    sentence: 'The chef seasoned the soup with fresh herbs.',
    targetWord: 'seasoned',
    wordClass: 'verb',
    wrong: ['Adjective', 'Noun', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'A seasoned traveller packs only what she needs.',
    targetWord: 'seasoned',
    wordClass: 'adjective',
    wrong: ['Verb', 'Noun', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'The children laughed loudly during the puppet show.',
    targetWord: 'loudly',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Verb', 'Noun'],
    tier: 1,
  },
  {
    sentence: 'He placed the letter on the kitchen table.',
    targetWord: 'on',
    wordClass: 'preposition',
    wrong: ['Adverb', 'Conjunction', 'Determiner'],
    tier: 1,
  },
  {
    sentence: 'She and I will present the project together.',
    targetWord: 'I',
    wordClass: 'pronoun',
    wrong: ['Noun', 'Determiner', 'Adjective'],
    tier: 1,
  },
  {
    sentence: 'The ancient bridge groaned under the heavy lorry.',
    targetWord: 'ancient',
    wordClass: 'adjective',
    wrong: ['Noun', 'Adverb', 'Verb'],
    tier: 1,
  },
  {
    sentence: 'They march bravely into the freezing storm.',
    targetWord: 'march',
    wordClass: 'verb',
    wrong: ['Noun', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'The protest march filled the entire high street.',
    targetWord: 'march',
    wordClass: 'noun',
    wrong: ['Verb', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'Neither answer was correct, so we tried again.',
    targetWord: 'Neither',
    wordClass: 'determiner',
    wrong: ['Pronoun', 'Conjunction', 'Adjective'],
    tier: 2,
  },
  {
    sentence: 'He whispered the secret, yet she heard every word.',
    targetWord: 'yet',
    wordClass: 'conjunction',
    wrong: ['Adverb', 'Preposition', 'Determiner'],
    tier: 2,
  },
  {
    sentence: 'The owl perched silently above the barn door.',
    targetWord: 'silently',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Verb', 'Noun'],
    tier: 1,
  },
  {
    sentence: 'Our team trained hard before the regional final.',
    targetWord: 'Our',
    wordClass: 'determiner',
    wrong: ['Verb', 'Adjective', 'Noun'],
    tier: 1,
  },
  {
    sentence: 'The detective examined each clue with great care.',
    targetWord: 'examined',
    wordClass: 'verb',
    wrong: ['Adjective', 'Noun', 'Adverb'],
    tier: 1,
  },
  {
    sentence: 'A single candle flickered against the darkness.',
    targetWord: 'against',
    wordClass: 'preposition',
    wrong: ['Adverb', 'Conjunction', 'Adjective'],
    tier: 1,
  },
  {
    sentence: 'She handed the keys to him without a word.',
    targetWord: 'him',
    wordClass: 'pronoun',
    wrong: ['Noun', 'Determiner', 'Adjective'],
    tier: 1,
  },
  {
    sentence: 'The garden looked beautiful after the spring rain.',
    targetWord: 'beautiful',
    wordClass: 'adjective',
    wrong: ['Adverb', 'Noun', 'Verb'],
    tier: 1,
  },
  {
    sentence: 'They built a sturdy shelter before nightfall.',
    targetWord: 'shelter',
    wordClass: 'noun',
    wrong: ['Verb', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'The trees can shelter you from the worst of the rain.',
    targetWord: 'shelter',
    wordClass: 'verb',
    wrong: ['Noun', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'He answered every question honestly and clearly.',
    targetWord: 'honestly',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Verb', 'Noun'],
    tier: 1,
  },
  {
    sentence: 'We sheltered beneath the bridge during the downpour.',
    targetWord: 'beneath',
    wordClass: 'preposition',
    wrong: ['Adverb', 'Conjunction', 'Adjective'],
    tier: 1,
  },
  {
    sentence: 'This map shows the safest route to the harbour.',
    targetWord: 'This',
    wordClass: 'determiner',
    wrong: ['Pronoun', 'Adjective', 'Adverb'],
    tier: 1,
  },
  {
    sentence: 'The wind howled while the campers slept soundly.',
    targetWord: 'while',
    wordClass: 'conjunction',
    wrong: ['Preposition', 'Noun', 'Adverb'],
    tier: 1,
  },
  {
    sentence: 'A brave knight defended the trembling villagers.',
    targetWord: 'brave',
    wordClass: 'adjective',
    wrong: ['Noun', 'Verb', 'Adverb'],
    tier: 1,
  },
  {
    sentence: 'She quickly realised that something was wrong.',
    targetWord: 'quickly',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Verb', 'Noun'],
    tier: 1,
  },
  {
    sentence: 'The river flows gently towards the distant sea.',
    targetWord: 'flows',
    wordClass: 'verb',
    wrong: ['Noun', 'Adjective', 'Adverb'],
    tier: 1,
  },
  {
    sentence: 'Itself a mystery, the locked door fascinated them.',
    targetWord: 'them',
    wordClass: 'pronoun',
    wrong: ['Noun', 'Determiner', 'Adjective'],
    tier: 1,
  },
  {
    sentence: 'The mountain trail wound steeply between the cliffs.',
    targetWord: 'between',
    wordClass: 'preposition',
    wrong: ['Adverb', 'Conjunction', 'Adjective'],
    tier: 1,
  },
  {
    sentence: 'Several pupils volunteered to tidy the library.',
    targetWord: 'Several',
    wordClass: 'determiner',
    wrong: ['Pronoun', 'Adjective', 'Noun'],
    tier: 1,
  },
  {
    sentence: 'The thunder rumbled because the storm was near.',
    targetWord: 'because',
    wordClass: 'conjunction',
    wrong: ['Preposition', 'Adverb', 'Determiner'],
    tier: 1,
  },
  {
    sentence: 'He polished the trophy until it gleamed brightly.',
    targetWord: 'brightly',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Verb', 'Noun'],
    tier: 1,
  },
  {
    sentence: 'A clever solution saved the entire experiment.',
    targetWord: 'clever',
    wordClass: 'adjective',
    wrong: ['Adverb', 'Noun', 'Verb'],
    tier: 1,
  },
  {
    sentence: 'The author signed each book for the eager readers.',
    targetWord: 'signed',
    wordClass: 'verb',
    wrong: ['Adjective', 'Noun', 'Adverb'],
    tier: 1,
  },
  {
    sentence: 'We could not find the exit anywhere in the maze.',
    targetWord: 'exit',
    wordClass: 'noun',
    wrong: ['Verb', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'Please exit the building calmly during the alarm.',
    targetWord: 'exit',
    wordClass: 'verb',
    wrong: ['Noun', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'If she wounds you, love her.',
    targetWord: 'her',
    wordClass: 'pronoun',
    wrong: ['Determiner', 'Noun', 'Adjective'],
    tier: 2,
    source: 'Great Expectations by Charles Dickens, Chapter 29 (Miss Havisham to Pip)',
  },
  {
    sentence: 'The explorers travelled far across the frozen plain.',
    targetWord: 'across',
    wordClass: 'preposition',
    wrong: ['Adverb', 'Conjunction', 'Adjective'],
    tier: 1,
  },
  {
    sentence: 'Old Benjamin, the donkey, seemed quite unchanged since the Rebellion.',
    targetWord: 'since',
    wordClass: 'preposition',
    wrong: ['Conjunction', 'Adverb', 'Determiner'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 3',
  },
  {
    sentence:
      'The birds at first objected, since it seemed to them that they also had two legs, but Snowball proved to them that this was not so.',
    targetWord: 'since',
    wordClass: 'conjunction',
    wrong: ['Preposition', 'Adverb', 'Pronoun'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 3',
  },
  {
    sentence: 'I have never been here since.',
    targetWord: 'since',
    wordClass: 'adverb',
    wrong: ['Preposition', 'Conjunction', 'Noun'],
    tier: 2,
    source: 'Great Expectations by Charles Dickens, Chapter 59 (Estella to Pip)',
  },
  {
    sentence:
      'But before he shut his heavy door, he walked through his rooms to see that all was right.',
    targetWord: 'before',
    wordClass: 'conjunction',
    wrong: ['Preposition', 'Adverb', 'Determiner'],
    tier: 2,
    source: 'A Christmas Carol by Charles Dickens, Stave 1',
  },
  {
    sentence: 'and sat down before the fire to take his gruel',
    targetWord: 'before',
    wordClass: 'preposition',
    wrong: ['Conjunction', 'Adverb', 'Adjective'],
    tier: 2,
    source: 'A Christmas Carol by Charles Dickens, Stave 1',
  },
  {
    sentence:
      'I shall satiate my ardent curiosity with the sight of a part of the world never before visited',
    targetWord: 'before',
    wordClass: 'adverb',
    wrong: ['Preposition', 'Conjunction', 'Adjective'],
    tier: 2,
    source: 'Frankenstein by Mary Shelley, Letter 1 (Walton writing)',
  },
  {
    sentence:
      'After he had been employed thus about an hour, the young woman joined him, and they entered the cottage together.',
    targetWord: 'After',
    wordClass: 'conjunction',
    wrong: ['Preposition', 'Adverb', 'Determiner'],
    tier: 2,
    source: 'Frankenstein by Mary Shelley, Chapter 11 (the creature speaking)',
  },
  {
    sentence:
      'It happened that Jessie and Bluebell had both whelped soon after the hay harvest, giving birth between them to nine sturdy puppies.',
    targetWord: 'after',
    wordClass: 'preposition',
    wrong: ['Conjunction', 'Adverb', 'Adjective'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 3',
  },
  {
    sentence:
      'We, however, lay to until the morning, fearing to encounter in the dark those large loose masses which float about after the breaking up of the ice.',
    targetWord: 'until',
    wordClass: 'preposition',
    wrong: ['Conjunction', 'Adverb', 'Determiner'],
    tier: 2,
    source: 'Frankenstein by Mary Shelley, Letter 4 (Walton writing)',
  },
  {
    sentence:
      'As a child, I had not been content with the results promised by the modern professors of natural science.',
    targetWord: 'As',
    wordClass: 'preposition',
    wrong: ['Conjunction', 'Adverb', 'Determiner'],
    tier: 2,
    source: 'Frankenstein by Mary Shelley, Chapter 3 (Victor speaking)',
  },
  {
    sentence:
      "He took the toasting-fork and sausage from me as he spoke, and set forth the Aged's breakfast neatly on a little tray.",
    targetWord: 'as',
    wordClass: 'conjunction',
    wrong: ['Preposition', 'Adverb', 'Pronoun'],
    tier: 2,
    source: 'Great Expectations by Charles Dickens, Chapter 45 (Wemmick)',
  },
  {
    sentence: 'I wept like a child.',
    targetWord: 'like',
    wordClass: 'preposition',
    wrong: ['Verb', 'Conjunction', 'Adjective'],
    tier: 2,
    source: 'Frankenstein by Mary Shelley, Chapter 7',
  },
  {
    sentence: 'Before the fire goes out, Joe, I should like to tell you something.',
    targetWord: 'like',
    wordClass: 'verb',
    wrong: ['Preposition', 'Conjunction', 'Noun'],
    tier: 2,
    source: 'Great Expectations by Charles Dickens, Chapter 9 (Pip)',
  },
  {
    sentence:
      "Napoleon was so gratified that he left his place and came round the table to clink his mug against Mr. Pilkington's before emptying it.",
    targetWord: 'round',
    wordClass: 'preposition',
    wrong: ['Adverb', 'Adjective', 'Noun'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 10',
  },
  {
    sentence:
      'When he came to the low church wall, he got over it, like a man whose legs were numbed and stiff, and then turned round to look for me.',
    targetWord: 'round',
    wordClass: 'adverb',
    wrong: ['Preposition', 'Adjective', 'Noun'],
    tier: 2,
    source: 'Great Expectations by Charles Dickens, Chapter 1 (Magwitch)',
  },
  {
    sentence: 'some workmen came past the door bound for his restaurant',
    targetWord: 'past',
    wordClass: 'preposition',
    wrong: ['Noun', 'Adjective', 'Adverb'],
    tier: 2,
    source: 'The Great Gatsby by F. Scott Fitzgerald, Chapter 7',
  },
  {
    sentence: 'Nowadays they did not sit all together as they had done in the past.',
    targetWord: 'past',
    wordClass: 'noun',
    wrong: ['Preposition', 'Adjective', 'Adverb'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 5',
  },
  {
    sentence:
      'The pigs now revealed that during the past three months they had taught themselves to read and write from an old spelling book',
    targetWord: 'past',
    wordClass: 'adjective',
    wrong: ['Noun', 'Preposition', 'Adverb'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 2',
  },
  {
    sentence:
      'Snowball climbed up and set to work, with Squealer a few rungs below him holding the paint-pot.',
    targetWord: 'up',
    wordClass: 'adverb',
    wrong: ['Preposition', 'Adjective', 'Verb'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 2',
  },
  {
    sentence:
      'I felt no fear, only a wild, trembling exultation, as I ran up the hill towards the motionless monster.',
    targetWord: 'up',
    wordClass: 'preposition',
    wrong: ['Adverb', 'Adjective', 'Conjunction'],
    tier: 2,
    source: 'The War of the Worlds by H. G. Wells, Book 2, Chapter 8',
  },
  {
    sentence:
      'Old Fezziwig laid down his pen, and looked up at the clock, which pointed to the hour of seven.',
    targetWord: 'down',
    wordClass: 'adverb',
    wrong: ['Preposition', 'Adjective', 'Noun'],
    tier: 2,
    source: 'A Christmas Carol by Charles Dickens, Stave 2',
  },
  {
    sentence: 'We hope to visit the castle again in the near future.',
    targetWord: 'near',
    wordClass: 'adjective',
    wrong: ['Preposition', 'Adverb', 'Verb'],
    tier: 2,
  },
  {
    sentence: 'Come inside quickly: it is starting to rain.',
    targetWord: 'inside',
    wordClass: 'adverb',
    wrong: ['Preposition', 'Noun', 'Adjective'],
    tier: 2,
  },
  {
    sentence: 'That night there came from the farmhouse the sound of loud singing',
    targetWord: 'That',
    wordClass: 'determiner',
    wrong: ['Pronoun', 'Conjunction', 'Adverb'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 8',
  },
  {
    sentence: 'That is hot ice and wondrous strange snow.',
    targetWord: 'That',
    wordClass: 'pronoun',
    wrong: ['Determiner', 'Conjunction', 'Adverb'],
    tier: 2,
    source: "A Midsummer Night's Dream by William Shakespeare, Act 5 Scene 1 (Theseus)",
  },
  {
    sentence:
      'Once again some of the animals heard this with a certain bewilderment, but Squealer was soon able to convince them that their memories had been at fault.',
    targetWord: 'that',
    wordClass: 'conjunction',
    wrong: ['Pronoun', 'Determiner', 'Adverb'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 8',
  },
  {
    sentence:
      'But of all their controversies, none was so bitter as the one that took place over the windmill.',
    targetWord: 'that',
    wordClass: 'pronoun',
    wrong: ['Conjunction', 'Determiner', 'Adverb'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 5',
  },
  {
    sentence: 'As she is mine I may dispose of her;',
    targetWord: 'mine',
    wordClass: 'pronoun',
    wrong: ['Determiner', 'Noun', 'Adjective'],
    tier: 2,
    source: "A Midsummer Night's Dream by William Shakespeare, Act 1 Scene 1 (Egeus on Hermia)",
  },
  {
    sentence:
      'A very different sort of mind was hers from that, for instance, of the sisters of St. John.',
    targetWord: 'hers',
    wordClass: 'pronoun',
    wrong: ['Determiner', 'Noun', 'Adjective'],
    tier: 2,
    source: 'Jane Eyre by Charlotte Brontë, Chapter 32 (Jane on Rosamond Oliver)',
  },
  {
    sentence: 'They now walked on in silence; each of them deep in thought.',
    targetWord: 'each',
    wordClass: 'pronoun',
    wrong: ['Determiner', 'Adverb', 'Adjective'],
    tier: 2,
    source: 'Pride and Prejudice by Jane Austen, Chapter 43 (Elizabeth and Darcy)',
  },
  {
    sentence: 'At this some of the other animals murmured, but it was no use.',
    targetWord: 'some',
    wordClass: 'pronoun',
    wrong: ['Determiner', 'Adverb', 'Adjective'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 3',
  },
  {
    sentence: 'An involuntary shudder passed over both of us.',
    targetWord: 'both',
    wordClass: 'pronoun',
    wrong: ['Determiner', 'Conjunction', 'Adverb'],
    tier: 2,
    source: 'Great Expectations by Charles Dickens, Chapter 41',
  },
  {
    sentence: "All of them came to look at Snowball's drawings at least once a day.",
    targetWord: 'All',
    wordClass: 'pronoun',
    wrong: ['Determiner', 'Adverb', 'Noun'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 5',
  },
  {
    sentence: 'What time does the last train leave?',
    targetWord: 'What',
    wordClass: 'determiner',
    wrong: ['Pronoun', 'Adverb', 'Conjunction'],
    tier: 2,
  },
  {
    sentence: 'Which road leads to the old mill?',
    targetWord: 'Which',
    wordClass: 'determiner',
    wrong: ['Pronoun', 'Conjunction', 'Adjective'],
    tier: 2,
  },
  {
    sentence:
      'Quite satisfied, he closed his door, and locked himself in; double-locked himself in, which was not his custom.',
    targetWord: 'himself',
    wordClass: 'pronoun',
    wrong: ['Determiner', 'Noun', 'Adverb'],
    tier: 2,
    source: 'A Christmas Carol by Charles Dickens, Stave 1',
  },
  {
    sentence: 'There was only one candidate, Napoleon, who was elected unanimously.',
    targetWord: 'one',
    wordClass: 'determiner',
    wrong: ['Pronoun', 'Noun', 'Adverb'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 9',
    shared: 'only one',
  },
  {
    sentence: 'Miss Havisham was an only child?',
    targetWord: 'only',
    wordClass: 'adjective',
    wrong: ['Adverb', 'Determiner', 'Noun'],
    tier: 2,
    source: 'Great Expectations by Charles Dickens, Chapter 22 (Pip asking Herbert)',
  },
  {
    sentence: 'He had, he said, only one real ambition left',
    targetWord: 'only',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Determiner', 'Conjunction'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 9 (Boxer)',
    shared: 'only one',
  },
  {
    sentence: 'Even the horses and the dogs have no better fate.',
    targetWord: 'Even',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Determiner', 'Conjunction'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 1 (old Major)',
  },
  {
    sentence: 'The soup was so hot that I burned my tongue.',
    targetWord: 'so',
    wordClass: 'adverb',
    wrong: ['Conjunction', 'Adjective', 'Pronoun'],
    tier: 2,
  },
  {
    sentence:
      'She had finished her breakfast, so I permitted her to give a specimen of her accomplishments.',
    targetWord: 'so',
    wordClass: 'conjunction',
    wrong: ['Adverb', 'Preposition', 'Pronoun'],
    tier: 2,
    source: 'Jane Eyre by Charlotte Brontë, Chapter 11 (Jane on Adèle)',
  },
  {
    sentence: '"To the office," said I, for he was tending in that direction.',
    targetWord: 'for',
    wordClass: 'conjunction',
    wrong: ['Preposition', 'Adverb', 'Determiner'],
    tier: 2,
    source: 'Great Expectations by Charles Dickens, Chapter 32',
  },
  {
    sentence: 'Is the bakery still open at this time?',
    targetWord: 'still',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Noun', 'Verb'],
    tier: 2,
  },
  {
    sentence: 'The ground was hard, the air was still',
    targetWord: 'still',
    wordClass: 'adjective',
    wrong: ['Adverb', 'Noun', 'Verb'],
    tier: 2,
    source: 'Jane Eyre by Charlotte Brontë, Chapter 12 (Jane walking to Hay)',
  },
  {
    sentence:
      'The relations between Napoleon and Pilkington, though they were only conducted through Whymper, were now almost friendly.',
    targetWord: 'friendly',
    wordClass: 'adjective',
    wrong: ['Adverb', 'Noun', 'Verb'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 8',
  },
  {
    sentence:
      'I doubt if a ghost could have been more terrible to me, up in those lonely rooms in the long evenings and long nights, with the wind and the rain always rushing by.',
    targetWord: 'lonely',
    wordClass: 'adjective',
    wrong: ['Adverb', 'Noun', 'Verb'],
    tier: 2,
    source: 'Great Expectations by Charles Dickens, Chapter 40',
  },
  {
    sentence: 'A lovely boy, stol’n from an Indian king;',
    targetWord: 'lovely',
    wordClass: 'adjective',
    wrong: ['Adverb', 'Noun', 'Verb'],
    tier: 2,
    source: "A Midsummer Night's Dream by William Shakespeare, Act 2 Scene 1 (Puck)",
  },
  {
    sentence:
      'That being the name I wanted, I knocked, and an elderly woman of a pleasant and thriving appearance responded.',
    targetWord: 'elderly',
    wordClass: 'adjective',
    wrong: ['Adverb', 'Noun', 'Pronoun'],
    tier: 2,
    source: 'Great Expectations by Charles Dickens, Chapter 46',
  },
  {
    sentence:
      'A ghastly grin wrinkled his lips as he gazed on me, where I sat fulfilling the task which he had allotted to me.',
    targetWord: 'ghastly',
    wordClass: 'adjective',
    wrong: ['Adverb', 'Noun', 'Verb'],
    tier: 2,
    source: 'Frankenstein by Mary Shelley, Chapter 20',
  },
  {
    sentence: 'Elizabeth read my anguish in my countenance, and kindly taking my hand, said',
    targetWord: 'kindly',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Verb', 'Noun'],
    tier: 2,
    source: 'Frankenstein by Mary Shelley, Chapter 9',
  },
  {
    sentence: 'Then again the kindly influence ceased to act',
    targetWord: 'kindly',
    wordClass: 'adjective',
    wrong: ['Adverb', 'Noun', 'Verb'],
    tier: 2,
    source: 'Frankenstein by Mary Shelley, Chapter 9',
  },
  {
    sentence:
      'The men had milked the cows in the early morning and then had gone out rabbiting, without bothering to feed the animals.',
    targetWord: 'early',
    wordClass: 'adjective',
    wrong: ['Adverb', 'Noun', 'Verb'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 2',
  },
  {
    sentence: 'No doubt they rose up early to observe',
    targetWord: 'early',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Noun', 'Preposition'],
    tier: 2,
    source: "A Midsummer Night's Dream by William Shakespeare, Act 4 Scene 1 (Theseus)",
  },
  {
    sentence:
      'He set his ears back, shook his forelock several times, and tried hard to marshal his thoughts',
    targetWord: 'hard',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Noun', 'Verb'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 5 (Boxer)',
  },
  {
    sentence: "We're all suitable to our calling, we're well matched.",
    targetWord: 'well',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Noun', 'Verb'],
    tier: 2,
    source: 'A Christmas Carol by Charles Dickens, Stave 4',
  },
  {
    sentence: 'I pray thee, tell me then that he is well.',
    targetWord: 'well',
    wordClass: 'adjective',
    wrong: ['Adverb', 'Noun', 'Verb'],
    tier: 2,
    source: "A Midsummer Night's Dream by William Shakespeare, Act 3 Scene 2 (Hermia)",
  },
  {
    sentence:
      'It swung so softly in the outset that it scarcely made a sound; but soon it rang out loudly, and so did every bell in the house.',
    targetWord: 'soon',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Conjunction', 'Noun'],
    tier: 2,
    source: 'A Christmas Carol by Charles Dickens, Stave 1',
  },
  {
    sentence: "She often cried out that it wasn't fair; and it really was not.",
    targetWord: 'often',
    wordClass: 'adverb',
    wrong: ['Adjective', 'Conjunction', 'Pronoun'],
    tier: 2,
    source: 'A Christmas Carol by Charles Dickens, Stave 3',
  },
  {
    sentence: 'Swimming is the best exercise for a sore back.',
    targetWord: 'Swimming',
    wordClass: 'noun',
    wrong: ['Verb', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence:
      'The reins, the halters, the blinkers, the degrading nosebags, were thrown on to the rubbish fire which was burning in the yard.',
    targetWord: 'burning',
    wordClass: 'verb',
    wrong: ['Adjective', 'Noun', 'Adverb'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 2',
  },
  {
    sentence:
      'But the most terrifying spectacle of all was Boxer, rearing up on his hind legs and striking out with his great iron-shod hoofs like a stallion.',
    targetWord: 'terrifying',
    wordClass: 'adjective',
    wrong: ['Verb', 'Noun', 'Adverb'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 4',
  },
  {
    sentence:
      'Pondicherry Lodge stood in its own grounds, and was girt round with a very high stone wall topped with broken glass.',
    targetWord: 'broken',
    wordClass: 'adjective',
    wrong: ['Verb', 'Noun', 'Adverb'],
    tier: 2,
    source: 'The Sign of Four by Arthur Conan Doyle, Chapter 5',
  },
  {
    sentence:
      'Yes, there it lay, the fruit of all their struggles, levelled to its foundations, the stones they had broken and carried so laboriously scattered all around.',
    targetWord: 'broken',
    wordClass: 'verb',
    wrong: ['Adjective', 'Noun', 'Adverb'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 6',
  },
  {
    sentence:
      'They went, the Ghost and Scrooge, across the hall, to a door at the back of the house.',
    targetWord: 'back',
    wordClass: 'noun',
    wrong: ['Adverb', 'Verb', 'Adjective'],
    tier: 2,
    source: 'A Christmas Carol by Charles Dickens, Stave 2',
  },
  {
    sentence:
      'So the animals trooped down to the hayfield to begin the harvest, and when they came back in the evening it was noticed that the milk had disappeared.',
    targetWord: 'back',
    wordClass: 'adverb',
    wrong: ['Noun', 'Preposition', 'Verb'],
    tier: 2,
    source: 'Animal Farm by George Orwell, Chapter 2',
  },
  {
    sentence: 'A fearful man, all in coarse grey, with a great iron on his leg.',
    targetWord: 'iron',
    wordClass: 'noun',
    wrong: ['Adjective', 'Verb', 'Adverb'],
    tier: 2,
    source: 'Great Expectations by Charles Dickens, Chapter 1',
  },
  {
    sentence: 'Please iron your school shirt before Monday.',
    targetWord: 'iron',
    wordClass: 'verb',
    wrong: ['Noun', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'Could you hand me the scissors, please?',
    targetWord: 'hand',
    wordClass: 'verb',
    wrong: ['Noun', 'Adjective', 'Preposition'],
    tier: 2,
  },
  {
    sentence: 'Sooner or later, we all have to face our fears.',
    targetWord: 'face',
    wordClass: 'verb',
    wrong: ['Noun', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'Everyone present agreed that the play had been a success.',
    targetWord: 'present',
    wordClass: 'adjective',
    wrong: ['Noun', 'Verb', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'The mayor will present the prizes at the end of the race.',
    targetWord: 'present',
    wordClass: 'verb',
    wrong: ['Noun', 'Adjective', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'The storm will not last much longer.',
    targetWord: 'last',
    wordClass: 'verb',
    wrong: ['Adjective', 'Noun', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'The rescuers worked all night to free the trapped miners.',
    targetWord: 'free',
    wordClass: 'verb',
    wrong: ['Adjective', 'Adverb', 'Noun'],
    tier: 2,
  },
  {
    sentence: 'She stayed at home with a bad cold.',
    targetWord: 'cold',
    wordClass: 'noun',
    wrong: ['Adjective', 'Verb', 'Adverb'],
    tier: 2,
  },
  {
    sentence: 'She was a woman of mean understanding, little information, and uncertain temper.',
    targetWord: 'a woman of mean understanding, little information, and uncertain temper',
    answer: 'Noun phrase',
    wrong: ['Prepositional phrase', 'Relative clause', 'Main clause'],
    kind: 'noun phrase',
    tier: 3,
    source: 'Pride and Prejudice by Jane Austen, Chapter 1 (on Mrs Bennet)',
    shared: 'pride-and-prejudice-chapter-1',
  },
  {
    sentence: 'The course of true love never did run smooth.',
    targetWord: 'The course of true love',
    answer: 'Noun phrase',
    wrong: ['Prepositional phrase', 'Main clause', 'Subordinate clause'],
    kind: 'noun phrase',
    tier: 3,
    source: "A Midsummer Night's Dream by William Shakespeare, Act 1 Scene 1 (Lysander)",
  },
  {
    sentence:
      'Boxer was an enormous beast, nearly eighteen hands high, and as strong as any two ordinary horses put together.',
    targetWord: 'an enormous beast',
    answer: 'Noun phrase',
    wrong: ['Prepositional phrase', 'Relative clause', 'Subordinate clause'],
    kind: 'noun phrase',
    tier: 3,
    source: 'Animal Farm by George Orwell, Chapter 1',
    shared: 'animal-farm-chapter-1',
  },
  {
    sentence:
      'The business of her life was to get her daughters married; its solace was visiting and news.',
    targetWord: 'The business of her life',
    answer: 'Noun phrase',
    wrong: ['Prepositional phrase', 'Main clause', 'Subordinate clause'],
    kind: 'noun phrase',
    tier: 3,
    source: 'Pride and Prejudice by Jane Austen, Chapter 1 (on Mrs Bennet)',
    shared: 'pride-and-prejudice-chapter-1',
  },
  {
    sentence: 'External heat and cold had little influence on Scrooge.',
    targetWord: 'External heat and cold',
    answer: 'Noun phrase',
    wrong: ['Prepositional phrase', 'Main clause', 'Relative clause'],
    kind: 'noun phrase',
    tier: 3,
    source: 'A Christmas Carol by Charles Dickens, Stave 1',
    shared: 'a-christmas-carol-stave-1',
  },
  {
    sentence: 'A man with no hat, and with broken shoes, and with an old rag tied round his head.',
    targetWord: 'A man with no hat',
    answer: 'Noun phrase',
    wrong: ['Prepositional phrase', 'Main clause', 'Subordinate clause'],
    kind: 'noun phrase',
    tier: 3,
    source: "Great Expectations by Charles Dickens, Chapter 1 (Pip's first sight of Magwitch)",
    shared: 'great-expectations-chapter-1',
  },
  {
    sentence: 'It was on a dreary night of November, that I beheld the accomplishment of my toils.',
    targetWord: 'on a dreary night of November',
    answer: 'Prepositional phrase',
    wrong: ['Noun phrase', 'Subordinate clause', 'Relative clause'],
    kind: 'prepositional phrase',
    tier: 3,
    source: 'Frankenstein by Mary Shelley, Chapter 5',
    shared: 'frankenstein-chapter-5',
  },
  {
    sentence: 'But I will wear my heart upon my sleeve',
    targetWord: 'upon my sleeve',
    answer: 'Prepositional phrase',
    wrong: ['Noun phrase', 'Relative clause', 'Main clause'],
    kind: 'prepositional phrase',
    tier: 3,
    source: 'Othello by William Shakespeare, Act 1 Scene 1 (Iago)',
  },
  {
    sentence: 'We had been wandering, indeed, in the leafless shrubbery an hour in the morning',
    targetWord: 'in the leafless shrubbery',
    answer: 'Prepositional phrase',
    wrong: ['Noun phrase', 'Subordinate clause', 'Main clause'],
    kind: 'prepositional phrase',
    tier: 3,
    source: 'Jane Eyre by Charlotte Brontë, Chapter 1',
  },
  {
    sentence: 'I met a lady in the meads',
    targetWord: 'in the meads',
    answer: 'Prepositional phrase',
    wrong: ['Noun phrase', 'Relative clause', 'Main clause'],
    kind: 'prepositional phrase',
    tier: 3,
    source: 'La Belle Dame sans Merci by John Keats',
  },
  {
    sentence: 'Softly, in the dusk, a woman is singing to me;',
    targetWord: 'in the dusk',
    answer: 'Prepositional phrase',
    wrong: ['Noun phrase', 'Subordinate clause', 'Relative clause'],
    kind: 'prepositional phrase',
    tier: 3,
    source: 'Piano by D. H. Lawrence',
  },
  {
    sentence: 'Once more unto the breach, dear friends, once more,',
    targetWord: 'unto the breach',
    answer: 'Prepositional phrase',
    wrong: ['Noun phrase', 'Main clause', 'Subordinate clause'],
    kind: 'prepositional phrase',
    tier: 3,
    source: 'Henry V by William Shakespeare, Act 3 Scene 1',
  },
  {
    sentence: 'Let me not to the marriage of true minds',
    targetWord: 'to the marriage of true minds',
    answer: 'Prepositional phrase',
    wrong: ['Noun phrase', 'Relative clause', 'Subordinate clause'],
    kind: 'prepositional phrase',
    tier: 3,
    source: 'Sonnet 116 by William Shakespeare',
  },
  {
    sentence: 'Nothing will come of nothing: speak again.',
    targetWord: 'of nothing',
    answer: 'Prepositional phrase',
    wrong: ['Noun phrase', 'Main clause', 'Subordinate clause'],
    kind: 'prepositional phrase',
    tier: 3,
    source: 'King Lear by William Shakespeare, Act 1 Scene 1 (Lear to Cordelia)',
  },
  {
    sentence:
      'Clover was a stout motherly mare approaching middle life, who had never quite got her figure back after her fourth foal.',
    targetWord: 'who had never quite got her figure back after her fourth foal',
    answer: 'Relative clause',
    wrong: ['Noun phrase', 'Prepositional phrase', 'Main clause'],
    kind: 'relative clause',
    tier: 3,
    source: 'Animal Farm by George Orwell, Chapter 1',
    shared: 'animal-farm-chapter-1',
  },
  {
    sentence: 'In fair Verona, where we lay our scene,',
    targetWord: 'where we lay our scene',
    answer: 'Relative clause',
    wrong: ['Noun phrase', 'Prepositional phrase', 'Main clause'],
    kind: 'relative clause',
    tier: 3,
    source: 'Romeo and Juliet by William Shakespeare, the Prologue',
  },
  {
    sentence:
      'There were only four dissentients, the three dogs and the cat, who was afterwards discovered to have voted on both sides.',
    targetWord: 'who was afterwards discovered to have voted on both sides',
    answer: 'Relative clause',
    wrong: ['Noun phrase', 'Prepositional phrase', 'Main clause'],
    kind: 'relative clause',
    tier: 3,
    source: 'Animal Farm by George Orwell, Chapter 1',
    shared: 'animal-farm-chapter-1',
  },
  {
    sentence:
      'The noisy little Cratchits were as still as statues in one corner, and sat looking up at Peter, who had a book before him.',
    targetWord: 'who had a book before him',
    answer: 'Relative clause',
    wrong: ['Noun phrase', 'Prepositional phrase', 'Main clause'],
    kind: 'relative clause',
    tier: 3,
    source: 'A Christmas Carol by Charles Dickens, Stave 4',
  },
  {
    sentence:
      'He had SEEMED to oppose the windmill, simply as a manoeuvre to get rid of Snowball, who was a dangerous character and a bad influence.',
    targetWord: 'who was a dangerous character and a bad influence',
    answer: 'Relative clause',
    wrong: ['Noun phrase', 'Prepositional phrase', 'Main clause'],
    kind: 'relative clause',
    tier: 3,
    source: "Animal Farm by George Orwell, Chapter 5 (Squealer's explanation)",
  },
  {
    sentence:
      'As soon as the light in the bedroom went out there was a stirring and a fluttering all through the farm buildings.',
    targetWord: 'As soon as the light in the bedroom went out',
    answer: 'Subordinate clause',
    wrong: ['Main clause', 'Relative clause', 'Prepositional phrase'],
    kind: 'subordinate clause',
    tier: 3,
    source: 'Animal Farm by George Orwell, Chapter 1',
    shared: 'animal-farm-chapter-1',
  },
  {
    sentence: 'When she was discontented she fancied herself nervous.',
    targetWord: 'When she was discontented',
    answer: 'Subordinate clause',
    wrong: ['Main clause', 'Relative clause', 'Noun phrase'],
    kind: 'subordinate clause',
    tier: 3,
    source: 'Pride and Prejudice by Jane Austen, Chapter 1 (on Mrs Bennet)',
    shared: 'pride-and-prejudice-chapter-1',
  },
  {
    sentence: 'If music be the food of love, play on,',
    targetWord: 'If music be the food of love',
    answer: 'Subordinate clause',
    wrong: ['Main clause', 'Relative clause', 'Prepositional phrase'],
    kind: 'subordinate clause',
    tier: 3,
    source: 'Twelfth Night by William Shakespeare, Act 1 Scene 1 (Orsino)',
  },
  {
    sentence: 'Though this be madness, yet there is method in’t.',
    targetWord: 'Though this be madness',
    answer: 'Subordinate clause',
    wrong: ['Main clause', 'Relative clause', 'Noun phrase'],
    kind: 'subordinate clause',
    tier: 3,
    source: 'Hamlet by William Shakespeare, Act 2 Scene 2 (Polonius)',
  },
  {
    sentence: 'If you can wait and not be tired by waiting,',
    targetWord: 'If you can wait and not be tired by waiting',
    answer: 'Subordinate clause',
    wrong: ['Main clause', 'Relative clause', 'Noun phrase'],
    kind: 'subordinate clause',
    tier: 3,
    source: 'If— by Rudyard Kipling',
  },
  {
    sentence:
      'Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the sea.',
    targetWord: 'as the river wound',
    answer: 'Subordinate clause',
    wrong: ['Main clause', 'Relative clause', 'Prepositional phrase'],
    kind: 'subordinate clause',
    tier: 3,
    source: 'Great Expectations by Charles Dickens, Chapter 1',
    shared: 'great-expectations-chapter-1',
  },
  {
    sentence: 'Although I hate her, I’ll not harm her so.',
    targetWord: 'Although I hate her',
    answer: 'Subordinate clause',
    wrong: ['Main clause', 'Relative clause', 'Noun phrase'],
    kind: 'subordinate clause',
    tier: 3,
    source: "A Midsummer Night's Dream by William Shakespeare, Act 3 Scene 2 (Lysander)",
  },
  {
    sentence: 'If you have tears, prepare to shed them now.',
    targetWord: 'prepare to shed them now',
    answer: 'Main clause',
    wrong: ['Subordinate clause', 'Relative clause', 'Noun phrase'],
    kind: 'main clause',
    tier: 3,
    source: 'Julius Caesar by William Shakespeare, Act 3 Scene 2 (Antony)',
  },
  {
    sentence: 'It is the east, and Juliet is the sun',
    targetWord: 'Juliet is the sun',
    answer: 'Main clause',
    wrong: ['Subordinate clause', 'Relative clause', 'Noun phrase'],
    kind: 'main clause',
    tier: 3,
    source: 'Romeo and Juliet by William Shakespeare, Act 2 Scene 2 (Romeo)',
  },
  {
    sentence: 'Darkness is cheap, and Scrooge liked it.',
    targetWord: 'Darkness is cheap',
    answer: 'Main clause',
    wrong: ['Subordinate clause', 'Relative clause', 'Noun phrase'],
    kind: 'main clause',
    tier: 3,
    source: 'A Christmas Carol by Charles Dickens, Stave 1',
    shared: 'a-christmas-carol-stave-1',
  },
  {
    sentence: 'There was no possibility of taking a walk that day.',
    targetWord: 'There was no possibility of taking a walk that day',
    answer: 'Main clause',
    wrong: ['Subordinate clause', 'Noun phrase', 'Prepositional phrase'],
    kind: 'main clause',
    tier: 3,
    source: 'Jane Eyre by Charlotte Brontë, Chapter 1',
  },
  {
    sentence: 'Fair is foul, and foul is fair:',
    targetWord: 'foul is fair',
    answer: 'Main clause',
    wrong: ['Subordinate clause', 'Relative clause', 'Noun phrase'],
    kind: 'main clause',
    tier: 3,
    source: 'Macbeth by William Shakespeare, Act 1 Scene 1 (the Witches)',
  },
  {
    sentence:
      'And above all, pass on this message of mine to those who come after you, so that future generations shall carry on the struggle until it is victorious.',
    targetWord: 'so that future generations shall carry on the struggle until it is victorious',
    answer: 'It tells us what an action is for.',
    wrong: [
      'It tells us what happens as a result.',
      'It tells us why something happens.',
      'It tells us when something happens.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of purpose',
    tier: 3,
    source: 'Animal Farm by George Orwell, Chapter 1 (Old Major)',
    shared: 'animal-farm-chapter-1',
  },
  {
    sentence:
      "The door of Scrooge's counting-house was open that he might keep his eye upon his clerk, who in a dismal little cell beyond, a sort of tank, was copying letters.",
    targetWord: 'that he might keep his eye upon his clerk',
    answer: 'It tells us what an action is for.',
    wrong: [
      'It tells us what happens as a result.',
      'It tells us why something happens.',
      'It describes the noun just before it.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of purpose',
    tier: 3,
    source: 'A Christmas Carol by Charles Dickens, Stave 1',
    shared: 'a-christmas-carol-stave-1',
  },
  {
    sentence:
      'We shut our outer door on these solemn occasions in order that we might not be interrupted.',
    targetWord: 'in order that we might not be interrupted',
    answer: 'It tells us what an action is for.',
    wrong: [
      'It tells us why something happens.',
      'It tells us what happens as a result.',
      'It tells us when something happens.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of purpose',
    tier: 3,
    source:
      'Great Expectations by Charles Dickens, Chapter 34 (Pip and Herbert doing their accounts)',
  },
  {
    sentence:
      'After each question he tilted me over a little more, so as to give me a greater sense of helplessness and danger.',
    targetWord: 'so as to give me a greater sense of helplessness and danger',
    answer: 'It tells us what an action is for.',
    wrong: [
      'It tells us what happens as a result.',
      'It tells us how something is done.',
      'It tells us when something happens.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of purpose',
    tier: 3,
    source: 'Great Expectations by Charles Dickens, Chapter 1 (Magwitch and Pip)',
    shared: 'great-expectations-chapter-1',
  },
  {
    sentence:
      'His body was transparent; so that Scrooge, observing him, and looking through his waistcoat, could see the two buttons on his coat behind.',
    targetWord:
      'so that Scrooge, observing him, and looking through his waistcoat, could see the two buttons on his coat behind',
    answer: 'It tells us what happens as a result.',
    wrong: [
      'It tells us what an action is for.',
      'It tells us why something happens.',
      'It tells us how something is done.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of result',
    tier: 3,
    source: "A Christmas Carol by Charles Dickens, Stave 1 (Marley's Ghost)",
    shared: 'a-christmas-carol-stave-1',
  },
  {
    sentence:
      'He gave me a most tremendous dip and roll, so that the church jumped over its own weather-cock.',
    targetWord: 'so that the church jumped over its own weather-cock',
    answer: 'It tells us what happens as a result.',
    wrong: [
      'It tells us what an action is for.',
      'It tells us how something is done.',
      'It tells us when something happens.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of result',
    tier: 3,
    source: 'Great Expectations by Charles Dickens, Chapter 1 (Magwitch and Pip)',
    shared: 'great-expectations-chapter-1',
  },
  {
    sentence:
      'The mist was heavier yet when I got out upon the marshes, so that instead of my running at everything, everything seemed to run at me.',
    targetWord: 'so that instead of my running at everything, everything seemed to run at me',
    answer: 'It tells us what happens as a result.',
    wrong: [
      'It tells us what an action is for.',
      'It tells us why something happens.',
      'It tells us when something happens.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of result',
    tier: 3,
    source: 'Great Expectations by Charles Dickens, Chapter 3',
  },
  {
    sentence:
      'Mr. Bennet was so odd a mixture of quick parts, sarcastic humour, reserve, and caprice, that the experience of three and twenty years had been insufficient to make his wife understand his character.',
    targetWord:
      'that the experience of three and twenty years had been insufficient to make his wife understand his character',
    answer: 'It tells us what happens as a result.',
    wrong: [
      'It tells us what an action is for.',
      'It tells us why something happens.',
      'It describes the noun just before it.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of result',
    tier: 3,
    source: 'Pride and Prejudice by Jane Austen, Chapter 1',
    shared: 'pride-and-prejudice-chapter-1',
  },
  {
    sentence: 'Building had to stop because it was now too wet to mix the cement.',
    targetWord: 'because it was now too wet to mix the cement',
    answer: 'It tells us why something happens.',
    wrong: [
      'It tells us what an action is for.',
      'It tells us what happens as a result.',
      'It tells us when something happens.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of reason',
    tier: 3,
    source: 'Animal Farm by George Orwell, Chapter 6',
  },
  {
    sentence: 'I cry because I am miserable.',
    targetWord: 'because I am miserable',
    answer: 'It tells us why something happens.',
    wrong: [
      'It tells us what an action is for.',
      'It sets a condition for the main idea.',
      'It tells us what happens as a result.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of reason',
    tier: 3,
    source: 'Jane Eyre by Charlotte Brontë, Chapter 3 (Jane to Mr Lloyd)',
  },
  {
    sentence:
      'The fact is, if I do not ask you the name of the other party, it is because I know it already.',
    targetWord: 'because I know it already',
    answer: 'It tells us why something happens.',
    wrong: [
      'It sets a condition for the main idea.',
      'It tells us what an action is for.',
      'It tells us when something happens.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of reason',
    tier: 3,
    source: 'Dr Jekyll and Mr Hyde by Robert Louis Stevenson, Story of the Door (Utterson)',
  },
  {
    sentence: 'If you prick us, do we not bleed?',
    targetWord: 'If you prick us',
    answer: 'It sets a condition for the main idea.',
    wrong: [
      'It tells us when something happens.',
      'It tells us why something happens.',
      'It gives a contrast with the main idea.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of condition',
    tier: 3,
    source: 'The Merchant of Venice by William Shakespeare, Act 3 Scene 1 (Shylock)',
  },
  {
    sentence: 'But she never was polite, unless there was company.',
    targetWord: 'unless there was company',
    answer: 'It sets a condition for the main idea.',
    wrong: [
      'It tells us when something happens.',
      'It gives a contrast with the main idea.',
      'It tells us why something happens.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of condition',
    tier: 3,
    source: 'Great Expectations by Charles Dickens, Chapter 2 (Pip on his sister)',
  },
  {
    sentence: 'If we shadows have offended,\nThink but this, and all is mended,',
    targetWord: 'If we shadows have offended',
    answer: 'It sets a condition for the main idea.',
    wrong: [
      'It tells us why something happens.',
      'It tells us when something happens.',
      'It tells us what happens as a result.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of condition',
    tier: 3,
    source: "A Midsummer Night's Dream by William Shakespeare, Act 5 Scene 1 (Puck's last speech)",
  },
  {
    sentence:
      'When he had in some measure recovered, I removed him to my own cabin, and attended on him as much as my duty would permit.',
    targetWord: 'When he had in some measure recovered',
    answer: 'It tells us when something happens.',
    wrong: [
      'It sets a condition for the main idea.',
      'It tells us why something happens.',
      'It tells us how something is done.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of time',
    tier: 3,
    source: 'Frankenstein by Mary Shelley, Letter 4 (Walton on Victor)',
  },
  {
    sentence: 'Whenever anything went wrong it became usual to attribute it to Snowball.',
    targetWord: 'Whenever anything went wrong',
    answer: 'It tells us when something happens.',
    wrong: [
      'It tells us why something happens.',
      'It tells us where something happens.',
      'It tells us what happens as a result.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of time',
    tier: 3,
    source: 'Animal Farm by George Orwell, Chapter 7',
  },
  {
    sentence: 'Before the time I did Lysander see,\nSeem’d Athens as a paradise to me.',
    targetWord: 'Before the time I did Lysander see',
    answer: 'It tells us when something happens.',
    wrong: [
      'It sets a condition for the main idea.',
      'It tells us why something happens.',
      'It tells us where something happens.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of time',
    tier: 3,
    source: "A Midsummer Night's Dream by William Shakespeare, Act 1 Scene 1 (Hermia)",
  },
  {
    sentence: 'Since you left us, but one change has taken place in our little household.',
    targetWord: 'Since you left us',
    answer: 'It tells us when something happens.',
    wrong: [
      'It tells us why something happens.',
      'It sets a condition for the main idea.',
      'It tells us what happens as a result.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of time',
    tier: 3,
    source: "Frankenstein by Mary Shelley, Chapter 6 (Elizabeth's letter to Victor)",
  },
  {
    sentence: 'Though not yet full-grown, they were huge dogs, and as fierce-looking as wolves.',
    targetWord: 'Though not yet full-grown',
    answer: 'It gives a contrast with the main idea.',
    wrong: [
      'It tells us why something happens.',
      'It tells us when something happens.',
      'It sets a condition for the main idea.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of contrast',
    tier: 3,
    source: 'Animal Farm by George Orwell, Chapter 5',
  },
  {
    sentence:
      'Although well used to ghostly company by this time, Scrooge feared the silent shape so much that his legs trembled beneath him, and he found that he could hardly stand when he prepared to follow it.',
    targetWord: 'Although well used to ghostly company by this time',
    answer: 'It gives a contrast with the main idea.',
    wrong: [
      'It tells us why something happens.',
      'It tells us what happens as a result.',
      'It tells us when something happens.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of contrast',
    tier: 3,
    source: 'A Christmas Carol by Charles Dickens, Stave 4',
  },
  {
    sentence:
      'The court was very cool and a little damp, and full of premature twilight, although the sky, high up overhead, was still bright with sunset.',
    targetWord: 'although the sky, high up overhead, was still bright with sunset',
    answer: 'It gives a contrast with the main idea.',
    wrong: [
      'It tells us where something happens.',
      'It tells us why something happens.',
      'It tells us when something happens.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of contrast',
    tier: 3,
    source: 'Dr Jekyll and Mr Hyde by Robert Louis Stevenson, Incident at the Window',
  },
  {
    sentence:
      'But the ghost sat down on the opposite side of the fireplace, as if he were quite used to it.',
    targetWord: 'as if he were quite used to it',
    answer: 'It tells us how something is done.',
    wrong: [
      'It sets a condition for the main idea.',
      'It tells us why something happens.',
      'It tells us where something happens.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of manner',
    tier: 3,
    source: "A Christmas Carol by Charles Dickens, Stave 1 (Marley's Ghost)",
    shared: 'a-christmas-carol-stave-1',
  },
  {
    sentence:
      "He was on his stool in a jiffy; driving away with his pen, as if he were trying to overtake nine o'clock.",
    targetWord: "as if he were trying to overtake nine o'clock",
    answer: 'It tells us how something is done.',
    wrong: [
      'It tells us what an action is for.',
      'It sets a condition for the main idea.',
      'It tells us when something happens.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of manner',
    tier: 3,
    source: 'A Christmas Carol by Charles Dickens, Stave 5 (Bob Cratchit, late for work)',
  },
  {
    sentence: 'Suddenly he halted as though his mind were made up.',
    targetWord: 'as though his mind were made up',
    answer: 'It tells us how something is done.',
    wrong: [
      'It tells us why something happens.',
      'It sets a condition for the main idea.',
      'It tells us what happens as a result.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of manner',
    tier: 3,
    source: 'Animal Farm by George Orwell, Chapter 6 (Napoleon, beside the ruined windmill)',
  },
  {
    sentence:
      'Where I have come, great clerks have purposed\nTo greet me with premeditated welcomes;',
    targetWord: 'Where I have come',
    answer: 'It tells us where something happens.',
    wrong: [
      'It tells us when something happens.',
      'It describes the noun just before it.',
      'It sets a condition for the main idea.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'clause of place',
    tier: 3,
    source: "A Midsummer Night's Dream by William Shakespeare, Act 5 Scene 1 (Theseus)",
  },
  {
    sentence:
      'With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet.',
    targetWord: 'that almost amounted to agony',
    answer: 'It describes the noun just before it.',
    wrong: [
      'It tells us how something is done.',
      'It tells us what an action is for.',
      'It could stand alone as a sentence.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'relative clause',
    tier: 3,
    source: 'Frankenstein by Mary Shelley, Chapter 5',
    shared: 'frankenstein-chapter-5',
  },
  {
    sentence:
      'At one end of the big barn, on a sort of raised platform, Major was already ensconced on his bed of straw, under a lantern which hung from a beam.',
    targetWord: 'which hung from a beam',
    answer: 'It describes the noun just before it.',
    wrong: [
      'It tells us where something happens.',
      'It tells us how something is done.',
      'It could stand alone as a sentence.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'relative clause',
    tier: 3,
    source: 'Animal Farm by George Orwell, Chapter 1',
    shared: 'animal-farm-chapter-1',
  },
  {
    sentence:
      '"Ay, he comes back," said the landlord, "to his great friends, now and again, and gives the cold shoulder to the man that made him."',
    targetWord: 'that made him',
    answer: 'It describes the noun just before it.',
    wrong: [
      'It tells us why something happens.',
      'It could stand alone as a sentence.',
      'It tells us when something happens.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'relative clause',
    tier: 3,
    source: 'Great Expectations by Charles Dickens, Chapter 52 (the landlord, to Pip)',
  },
  {
    sentence:
      'We choose this time, because it is a time, of all others, when Want is keenly felt, and Abundance rejoices.',
    targetWord: 'We choose this time',
    answer: 'It could stand alone as a sentence.',
    wrong: [
      'It tells us why something happens.',
      'It tells us when something happens.',
      'It describes the noun just before it.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'main clause',
    tier: 3,
    source: 'A Christmas Carol by Charles Dickens, Stave 1 (a gentleman collecting for the poor)',
    shared: 'a-christmas-carol-stave-1',
  },
  {
    sentence:
      'This room was chill, because it seldom had a fire; it was silent, because remote from the nursery and kitchen; solemn, because it was known to be so seldom entered.',
    targetWord: 'This room was chill',
    answer: 'It could stand alone as a sentence.',
    wrong: [
      'It tells us why something happens.',
      'It describes the noun just before it.',
      'It gives a contrast with the main idea.',
    ],
    prompt: 'What does the highlighted part of the sentence do?',
    kind: 'main clause',
    tier: 3,
    source: 'Jane Eyre by Charlotte Brontë, Chapter 2 (the red-room)',
  },
]

/** A question's shared facts as a list, whether it names one or several. */
const sharedOf = (q: Question): readonly string[] =>
  q.shared === undefined ? [] : typeof q.shared === 'string' ? [q.shared] : q.shared

export const BANK: GameBank<Question> = {
  slug: 'word-class-sorter',
  items: QUESTION_BANK,
  // No sentence appears twice, and the sentence is what the student reads.
  key: (q) => q.sentence,
  answer: (q) => q.answer ?? CLASS_LABEL[q.wordClass!],
  // The right option and the question's own wrong ones, shuffled by the page
  // (24 October 2026; until then three to five others were dealt at random
  // from all eight classes, so a question often had no near neighbour).
  options: (q) => [q.answer ?? CLASS_LABEL[q.wordClass!], ...q.wrong],
  tag: (q) => q.wordClass ?? q.kind,
  tier: (q) => q.tier,
  // One word once a round: "light" was asked three times in a round, as a
  // noun, a verb and an adjective, and each answered the next (24 October 2026).
  facts: (q) => [
    `word: ${(q.word ?? q.targetWord).toLowerCase()}`,
    ...sharedOf(q).map((x) => `shared: ${x}`),
  ],
  deepened: '2026-10-31',
}
