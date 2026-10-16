import type { GameBank } from '@/lib/games/explanations/types'

/**
 * A, An, The or Nothing?: read a sentence and choose the article that fits the
 * gap. The four buttons are the same for every sentence: a, an, the, and no
 * article (shown as "- (no article)").
 *
 * Moved out of src/app/games/article-a-an-the/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The
 * four buttons never change, so a question is only fair when the sentence on
 * its own leaves one article natural. Seven did not:
 *
 *   - "He bought ___ car. ___ car is bright red." has two gaps and the page
 *     draws only the first, so a student saw "He bought ? car." and never the
 *     second sentence the explanation depends on. It is now "He bought ___ car.
 *     The car is bright red.": one gap, and the same point (the second mention
 *     takes "the").
 *   - "She is ___ MP for our town." answered "an", but "for our town" names
 *     the MP who represents it, so "She is the MP for our town" is at least as
 *     natural. It is now "My aunt is ___ MP."
 *   - "He plays ___ guitar very well." answered "the", but "He plays guitar"
 *     means the same and is just as common, so a student who chose no article
 *     was marked wrong for good English. It is now "He sailed across ___
 *     Atlantic Ocean last year.", where only "the" fits (the names of oceans).
 *   - "He is studying at ___ university in Manchester." answered "a", but
 *     British English also says "studying at university" with no article (as
 *     in "in hospital"), and "the university in Manchester" is natural too.
 *     It is now "He is ___ university student in Manchester."
 *   - Three sentences could mean particular children, music or flowers as
 *     easily as the general kind they were written for ("The children love
 *     playing in the park"). Each now carries a word that makes the general
 *     meaning plain: "___ children love playing in parks.", "I really enjoy
 *     ___ music, especially jazz." and "She loves ___ flowers, especially
 *     roses."
 *
 * ONE SENTENCE REPUNCTUATED (16 October 2026, by the second reader). "Look at
 * ___ sky - it is full of stars tonight." used a dash as punctuation, which
 * the house style does not use, in a sentence the student reads. It is now
 * "Look at ___ sky. It is full of stars tonight."; the words and the answer are
 * the same.
 *
 * The other 49 sentences are unchanged. Each keeps the one-line rule it was
 * written with; the page no longer shows it, because the explanation says more.
 * Many sentences could take a second article if the reader imagined a
 * situation the sentence does not mention ("the cat" for "I saw ___ cat in the
 * street earlier"); those stay, because a sentence read cold is read as new
 * information, and the explanation says what the other article would mean.
 */

export type Article = 'a' | 'an' | 'the' | '-'

export interface ArticleItem {
  sentence: string // contains ___ for the gap
  answer: Article
  why: string // the earlier one-line rule; the explanation replaced it on the page
}

// Original sentence bank - UK English grammar, CEFR A1-B1.
// '-' means no article (zero article).
export const ARTICLE_BANK: ArticleItem[] = [
  // ── a vs an: consonant vs vowel SOUND ──
  {
    sentence: 'She works as ___ nurse at the local clinic.',
    answer: 'a',
    why: '"a" before a consonant sound: "nurse" starts with /n/.',
  },
  {
    sentence: 'My brother wants to be ___ engineer one day.',
    answer: 'an',
    why: '"an" before a vowel sound: "engineer" starts with /e/.',
  },
  {
    sentence: 'We waited for ___ hour before the train arrived.',
    answer: 'an',
    why: '"an" before a vowel sound: the "h" in "hour" is silent.',
  },
  {
    sentence: 'He is ___ university student in Manchester.',
    answer: 'a',
    why: '"a" because "university" starts with a /y/ sound, not a vowel sound.',
  },
  {
    sentence: 'There is ___ apple on the kitchen table.',
    answer: 'an',
    why: '"an" before a vowel sound: "apple" starts with /æ/.',
  },
  {
    sentence: 'Could I have ___ glass of water, please?',
    answer: 'a',
    why: '"a" before a consonant sound: "glass" starts with /g/.',
  },
  {
    sentence: 'It took ___ honest answer to solve the problem.',
    answer: 'an',
    why: '"an" because the "h" in "honest" is silent.',
  },
  {
    sentence: 'My cousin owns ___ umbrella shop in the city.',
    answer: 'an',
    why: '"an" before a vowel sound: "umbrella" starts with /ʌ/.',
  },
  {
    sentence: 'That was ___ useful tip for my homework.',
    answer: 'a',
    why: '"a" because "useful" starts with a /y/ sound.',
  },
  {
    sentence: 'She gave me ___ orange from her bag.',
    answer: 'an',
    why: '"an" before a vowel sound: "orange" starts with /ɒ/.',
  },
  {
    sentence: 'He drew ___ X on the map to mark the spot.',
    answer: 'an',
    why: '"an" because the letter "X" is said "ex", a vowel sound.',
  },
  {
    sentence: 'We need ___ one-way ticket to London.',
    answer: 'a',
    why: '"a" because "one" starts with a /w/ sound.',
  },
  {
    sentence: 'The teacher asked ___ easy question.',
    answer: 'an',
    why: '"an" before a vowel sound: "easy" starts with /iː/.',
  },
  {
    sentence: 'I bought ___ new phone yesterday.',
    answer: 'a',
    why: '"a" before a consonant sound: "new" starts with /n/.',
  },
  {
    sentence: 'My aunt is ___ MP.',
    answer: 'an',
    why: '"an" because "MP" is said "em-pee", starting with a vowel sound.',
  },
  {
    sentence: 'It is ___ honour to meet you.',
    answer: 'an',
    why: '"an" because the "h" in "honour" is silent.',
  },
  {
    sentence: 'He told ___ funny story at dinner.',
    answer: 'a',
    why: '"a" before a consonant sound: "funny" starts with /f/.',
  },
  {
    sentence: 'There was ___ ice cube in my drink.',
    answer: 'an',
    why: '"an" before a vowel sound: "ice" starts with /aɪ/.',
  },
  {
    sentence: 'My father is ___ European citizen.',
    answer: 'a',
    why: '"a" because "European" starts with a /y/ sound.',
  },
  {
    sentence: 'We saw ___ elephant at the zoo.',
    answer: 'an',
    why: '"an" before a vowel sound: "elephant" starts with /e/.',
  },
  {
    sentence: 'She needs ___ uniform for her new job.',
    answer: 'a',
    why: '"a" because "uniform" starts with a /y/ sound.',
  },
  {
    sentence: 'I had ___ egg for breakfast this morning.',
    answer: 'an',
    why: '"an" before a vowel sound: "egg" starts with /e/.',
  },

  // ── definite article "the": unique / already known / specific ──
  {
    sentence: 'Please close ___ door when you leave.',
    answer: 'the',
    why: '"the" for a specific thing both speakers know about.',
  },
  {
    sentence: '___ sun rises in the east every morning.',
    answer: 'the',
    why: '"the" for something unique - there is only one sun.',
  },
  {
    sentence: 'I read ___ book you lent me last week.',
    answer: 'the',
    why: '"the" because the book is already known to the listener.',
  },
  {
    sentence: 'She is ___ tallest student in the class.',
    answer: 'the',
    why: '"the" is used before superlatives like "tallest".',
  },
  {
    sentence: 'We watched ___ moon from the garden last night.',
    answer: 'the',
    why: '"the" for something unique - there is only one moon.',
  },
  {
    sentence: 'Can you pass me ___ salt, please?',
    answer: 'the',
    why: '"the" for a specific item present and known to both people.',
  },
  {
    sentence: 'He sailed across ___ Atlantic Ocean last year.',
    answer: 'the',
    why: '"the" with the names of oceans and seas.',
  },
  {
    sentence: 'They live near ___ River Thames.',
    answer: 'the',
    why: '"the" is used with the names of rivers.',
  },
  {
    sentence: 'I want to visit ___ United Kingdom next year.',
    answer: 'the',
    why: '"the" with country names that include "Kingdom", "States" or "Republic".',
  },
  {
    sentence: 'She is ___ first person to finish the race.',
    answer: 'the',
    why: '"the" before ordinal numbers like "first".',
  },
  {
    sentence: 'Look at ___ sky. It is full of stars tonight.',
    answer: 'the',
    why: '"the" for something unique and shared by both speakers.',
  },
  {
    sentence: 'We went to ___ cinema on Saturday evening.',
    answer: 'the',
    why: '"the" with familiar public places like "cinema".',
  },

  // ── zero article "-": plurals (general), uncountables, names, meals, languages ──
  {
    sentence: '___ children love playing in parks.',
    answer: '-',
    why: 'No article with plural nouns when speaking generally.',
  },
  {
    sentence: 'I really enjoy ___ music, especially jazz.',
    answer: '-',
    why: 'No article with uncountable nouns used in a general sense.',
  },
  {
    sentence: '___ Sara is coming to the party tonight.',
    answer: '-',
    why: 'No article before people’s names.',
  },
  {
    sentence: 'We had ___ breakfast at seven o’clock.',
    answer: '-',
    why: 'No article before meals like breakfast, lunch and dinner.',
  },
  {
    sentence: 'She speaks ___ Arabic and English fluently.',
    answer: '-',
    why: 'No article before the names of languages.',
  },
  {
    sentence: '___ water is essential for life.',
    answer: '-',
    why: 'No article with uncountable nouns used generally.',
  },
  {
    sentence: 'I live in ___ London with my family.',
    answer: '-',
    why: 'No article before most city and town names.',
  },
  {
    sentence: '___ dogs are very loyal animals.',
    answer: '-',
    why: 'No article with plural nouns when speaking in general.',
  },
  {
    sentence: 'He travels to ___ France every summer.',
    answer: '-',
    why: 'No article before most country names.',
  },
  {
    sentence: 'They study ___ mathematics at school.',
    answer: '-',
    why: 'No article before school subjects.',
  },
  {
    sentence: 'We play ___ football after class.',
    answer: '-',
    why: 'No article before the names of sports and games.',
  },
  {
    sentence: '___ honey is sweeter than sugar.',
    answer: '-',
    why: 'No article with uncountable nouns used generally.',
  },
  {
    sentence: 'My sister teaches ___ history at the college.',
    answer: '-',
    why: 'No article before academic subjects.',
  },
  {
    sentence: 'I usually go to ___ bed before midnight.',
    answer: '-',
    why: 'No article in fixed phrases like "go to bed".',
  },
  {
    sentence: '___ Mr Khan is our new teacher.',
    answer: '-',
    why: 'No article before a title with a person’s name.',
  },
  {
    sentence: '___ rice is grown in many warm countries.',
    answer: '-',
    why: 'No article with uncountable nouns used generally.',
  },
  {
    sentence: 'She loves ___ flowers, especially roses.',
    answer: '-',
    why: 'No article with plural nouns when speaking generally.',
  },
  {
    sentence: 'We learn ___ English on Mondays.',
    answer: '-',
    why: 'No article before the names of languages.',
  },

  // ── mixed: a/an introducing something new, the for second mention ──
  {
    sentence: 'I saw ___ cat in the street earlier.',
    answer: 'a',
    why: '"a" when a singular countable noun is mentioned for the first time.',
  },
  {
    sentence: 'There is ___ school at the end of our road.',
    answer: 'a',
    why: '"a" for one of many - introducing a new singular noun.',
  },
  {
    sentence: 'He bought ___ car. The car is bright red.',
    answer: 'a',
    why: 'Use "a" to introduce the car; "the" would be used for the second mention.',
  },
  {
    sentence: 'Would you like ___ cup of tea?',
    answer: 'a',
    why: '"a" before a single, countable, non-specific noun.',
  },
  {
    sentence: 'She is ___ doctor at the hospital.',
    answer: 'a',
    why: '"a" before jobs and professions with a consonant sound.',
  },
]

export const OPTIONS: Article[] = ['a', 'an', 'the', '-']
export const OPTION_LABELS: Record<Article, string> = {
  a: 'a',
  an: 'an',
  the: 'the',
  '-': '- (no article)',
}

export const BANK: GameBank<ArticleItem> = {
  slug: 'article-a-an-the',
  items: ARTICLE_BANK,
  // No two sentences are the same, and the sentence is what the student sees.
  key: (i) => i.sentence,
  // The right answer and the options are the labels on the buttons.
  answer: (i) => OPTION_LABELS[i.answer],
  options: () => OPTIONS.map((o) => OPTION_LABELS[o]),
  // Which article the sentence needs: "chose an when the answer was a".
  tag: (i) => (i.answer === '-' ? 'no article' : i.answer),
}
