import type { GameBank } from '@/lib/games/explanations/types'

/**
 * A, An, The or Nothing?: read a sentence and choose the article that fits the
 * gap. The four buttons are the same for every sentence: a, an, the, and no
 * article (shown as "- (no article)"). At the top tier (since 24 October 2026)
 * a short text has two or three gaps instead, and four sets of articles.
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
 * The other 49 sentences are unchanged. Many sentences could take a second
 * article if the reader imagined a situation the sentence does not mention
 * ("the cat" for "I saw ___ cat in the street earlier"); those stay, because a
 * sentence read cold is read as new information, and the explanation says what
 * the other article would mean.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "too
 * obvious and easy". Measured that day (.tmp-games-audit/REPORT-eal.md): 57
 * sentences, a round of 15 that repeated two thirds of itself by the fifth
 * play, and a vowel-letter rule ("an" before a vowel letter, "a" before any
 * other) that answered 17 of the 27 a and an questions, 30 per cent of the
 * bank, without the reason. Now:
 *
 *   - 240 questions: 80 at tier 1, 88 at tier 2 and 72 at tier 3 (80 a tier
 *     until the check below moved eight). Tier 1 (A1): a and an by sound,
 *     "the" for what both people know, no article for names, places,
 *     languages, meals and general things. Tier 2 (A2): the sound against the
 *     letter (an hourly bus, a one-day trip, a UK passport, an NHS doctor, an
 *     11-year-old), a describing word before the noun, set phrases, jobs, "a"
 *     meaning "in each", second mentions, the only one, place names with and
 *     without "the", and nouns English does not count ("good advice"). Tier 3
 *     (B1): sentences where the
 *     reason decides in context ("What lovely weather", "such helpful advice",
 *     a wedding and then "the bride", "the next year" in a story), and 58
 *     short texts with two or three gaps, answered with a set of articles;
 *   - the vowel-letter rule now answers 44 of the 240 (18 per cent), and the
 *     answer is the unique longest option in 23 per cent and the unique
 *     shortest in 17;
 *   - a text's three wrong sets each get two gaps wrong (in a two-gap text,
 *     one gap in two of the sets and both in the third), with one wrong
 *     article for each gap, so each gap's right article is in two of the four
 *     sets, no set sits in the middle of the others and no gap's majority
 *     gives the answer away. Where a wrong set holds a gap a careful reader
 *     could defend, its other gap is plainly wrong, and its "why not" names
 *     only that one;
 *   - nine texts are real lines from novels out of UK copyright (Jane Eyre,
 *     Animal Farm three times, A Christmas Carol, The Sign of Four, Great
 *     Expectations, Frankenstein, Jekyll and Hyde), checked word for word
 *     against src/data/full-texts/ with their gaps filled; `source` names the
 *     book and chapter, and the page shows it;
 *   - `rule` is what a question turns on, so a round spreads them
 *     (BANK.group); `facts` adds, beyond the words after the gaps, the links
 *     the build script found where one question's sentence shows another's
 *     answer ("a one-way ticket to London" and "I live in ___ London");
 *   - the 16 October explanations were rewritten wherever they named another
 *     question's answer ("a house, a horse, a hotel" beside "There is ___
 *     horse"; "I play tennis on Saturdays" beside "I play ___ tennis on
 *     Saturdays").
 *
 * ONE EXISTING SENTENCE CHANGED. "It took ___ honest answer to solve the
 * problem." is grammatical but is not what anyone says. It is now "My
 * grandfather is ___ honest man.", the same point (an before a silent h). A
 * first replacement, "Thank you for ___ honest answer.", was dropped: "Thank
 * you for the honest answer" is as natural, for an answer just given. No
 * question was removed. The one-line rule each question carried (`why`) was
 * dropped: nothing has read it since the explanation replaced it, and git
 * keeps it.
 *
 * CHECKED (31 October 2026, by a second reader, as the founder decided). Every
 * question and explanation read; the nine real lines filled with their right
 * sets and found word for word in src/data/full-texts/, and no wrong set is
 * the book's wording. Changed:
 *
 *   - "This lamp has ___ LED bulb." British speakers say LED as letters or as
 *     one word ("led"), so "a LED bulb" is heard too. It is now "Our school
 *     has ___ L-shaped playground.", the same point: L is said "el".
 *   - Eight tier 3 sentences were recall of a set phrase or a name, with
 *     nothing in the sentence deciding ("a wonderful time", "a high
 *     temperature", "the 1990s", "In the end", "At the moment", "in the middle
 *     of", "the Lake District", "the BBC"): now tier 2.
 *   - Facts added where one question's why, more or tip states another's
 *     answer in other words, which the give-away finder cannot see because an
 *     article is never a "particular" answer (src/lib/games/give-aways.ts):
 *     "Use 'Look at the ...'" beside "Look at ___ sky" (phrase:look at the);
 *     "Where is the ...?" beside "Where is ___ cat?" (phrase:where is the);
 *     "go to the cinema" beside "I go to ___ gym" (phrase:go to the); "the
 *     with words like last and next" beside "___ next year" (word:next);
 *     "'The' also goes with 'only' and 'same'" (word:only, word:same);
 *     "single mountains take no article" beside "Ben Nevis" (rule:mountain
 *     names); "weather never takes 'a'" beside "What ___ lovely weather"
 *     (word:weather); "after 'such', 'a' only with a thing we count" beside
 *     both "such" questions (word:such); "'Advice' is not counted" beside the
 *     advice questions (word:advice); "the dogs next door" beside "___ cats
 *     next door" (phrase:next door); and "three times a year" beside "three
 *     times ___ day" (rule:a for each).
 *   - Explanations: "the sky, the sun and the sea, because there is only one
 *     of each" (there are many seas); "for furniture ... in the hall" (a hall
 *     is a room); "If 'Lake' comes first in a name, use no article", untrue
 *     of the Lake District; "The royal family has its main home" at
 *     Buckingham Palace, which is the monarch's official home.
 */

export type Article = 'a' | 'an' | 'the' | '-'

/**
 * What a question turns on. A round deals at most two questions on one rule,
 * and not two in a row (BANK.group, src/lib/games/deal-round.ts).
 */
export type ArticleRule =
  | 'consonant sound'
  | 'vowel sound'
  | 'silent h'
  | 'you sound'
  | 'one'
  | 'letters and numbers'
  | 'describing word first'
  | 'jobs'
  | 'first mention'
  | 'second mention'
  | 'known to both'
  | 'only one'
  | 'which one'
  | 'most, first and only'
  | 'place names with the'
  | 'place names without the'
  | 'general plural'
  | 'general uncountable'
  | 'uncountable nouns'
  | 'names and titles'
  | 'meals, languages, subjects and games'
  | 'set phrases without the'
  | 'set phrases with the'
  | 'how often and how much'
  | 'linked by the situation'
  | 'text: new and known'
  | 'text: general and particular'
  | 'text: sounds'
  | 'text: places and names'
  | 'text: set phrases'
  | 'text: a real line'

interface Common {
  /** What the student reads: ___ for the gap, one for each gap of a short text. */
  sentence: string
  /** 1 A1, 2 A2, 3 B1. */
  tier: 1 | 2 | 3
  rule: ArticleRule
  /**
   * Words this question shares with another's sentence or explanation, beyond
   * the words after its own gaps (BANK.facts): no two questions sharing one
   * are dealt in one round, so neither can show the other's answer.
   */
  facts?: readonly string[]
  /** A real line: the book, its author and where it comes, as the page shows it. */
  source?: string
}

/** One sentence and one gap, with the four buttons a, an, the and no article. */
export interface GapItem extends Common {
  kind?: undefined
  answer: Article
}

/**
 * A short text with two or three gaps (tier 3, added 24 October 2026). The
 * student chooses the set of articles that fills every gap, from four.
 */
export interface TextItem extends Common {
  kind: 'text'
  /** The article each gap needs, in order. */
  gaps: readonly Article[]
  /** Three wrong sets, an article for every gap. */
  wrong: readonly (readonly Article[])[]
}

export type ArticleItem = GapItem | TextItem

// Written, with their explanations, in a scratch folder
// (.tmp-games-deepen/article-a-an-the/src) and copied here by a build script
// that checked them (24 October 2026). Edit them here now; the explanations
// are in src/data/games/explanations/article-a-an-the.ts.
export const ARTICLE_BANK: ArticleItem[] = [
  {
    sentence: 'She works as ___ nurse at the local clinic.',
    answer: 'a',
    tier: 1,
    rule: 'jobs',
  },
  {
    sentence: 'My brother wants to be ___ engineer one day.',
    answer: 'an',
    tier: 1,
    rule: 'jobs',
    facts: ['word:engineer'],
  },
  {
    sentence: 'We waited for ___ hour before the train arrived.',
    answer: 'an',
    tier: 1,
    rule: 'silent h',
    facts: ['word:hour'],
  },
  {
    sentence: 'He is ___ university student in Manchester.',
    answer: 'a',
    tier: 1,
    rule: 'you sound',
    facts: ['word:university'],
  },
  {
    sentence: 'There is ___ apple on the kitchen table.',
    answer: 'an',
    tier: 1,
    rule: 'vowel sound',
    facts: ['word:kitchen', 'word:apple'],
  },
  {
    sentence: 'Could I have ___ glass of water, please?',
    answer: 'a',
    tier: 1,
    rule: 'consonant sound',
    facts: ['word:water', 'word:glass'],
  },
  {
    sentence: 'My grandfather is ___ honest man.',
    answer: 'an',
    tier: 2,
    rule: 'silent h',
  },
  {
    sentence: 'My cousin owns ___ umbrella shop in the city.',
    answer: 'an',
    tier: 1,
    rule: 'vowel sound',
    facts: ['word:city'],
  },
  {
    sentence: 'That was ___ useful tip for my homework.',
    answer: 'a',
    tier: 2,
    rule: 'you sound',
  },
  {
    sentence: 'She gave me ___ orange from her bag.',
    answer: 'an',
    tier: 1,
    rule: 'vowel sound',
  },
  {
    sentence: 'He drew ___ X on the map to mark the spot.',
    answer: 'an',
    tier: 2,
    rule: 'letters and numbers',
    facts: ['letter:x'],
  },
  {
    sentence: 'We need ___ one-way ticket to London.',
    answer: 'a',
    tier: 2,
    rule: 'one',
    facts: ['word:one', 'word:london'],
  },
  {
    sentence: 'The teacher asked ___ easy question.',
    answer: 'an',
    tier: 1,
    rule: 'describing word first',
    facts: ['word:teacher'],
  },
  {
    sentence: 'I bought ___ new phone yesterday.',
    answer: 'a',
    tier: 1,
    rule: 'describing word first',
    facts: ['word:new'],
  },
  {
    sentence: 'My aunt is ___ MP.',
    answer: 'an',
    tier: 2,
    rule: 'letters and numbers',
  },
  {
    sentence: 'It is ___ honour to meet you.',
    answer: 'an',
    tier: 2,
    rule: 'silent h',
  },
  {
    sentence: 'He told ___ funny story at dinner.',
    answer: 'a',
    tier: 1,
    rule: 'describing word first',
  },
  {
    sentence: 'There was ___ ice cube in my drink.',
    answer: 'an',
    tier: 1,
    rule: 'vowel sound',
  },
  {
    sentence: 'My father is ___ European citizen.',
    answer: 'a',
    tier: 2,
    rule: 'you sound',
    facts: ['sound:eu'],
  },
  {
    sentence: 'We saw ___ elephant at the zoo.',
    answer: 'an',
    tier: 1,
    rule: 'vowel sound',
  },
  {
    sentence: 'She needs ___ uniform for her new job.',
    answer: 'a',
    tier: 1,
    rule: 'you sound',
  },
  {
    sentence: 'I had ___ egg for breakfast this morning.',
    answer: 'an',
    tier: 1,
    rule: 'vowel sound',
    facts: ['word:breakfast'],
  },
  {
    sentence: 'Please close ___ door when you leave.',
    answer: 'the',
    tier: 1,
    rule: 'known to both',
  },
  {
    sentence: '___ sun rises in the east every morning.',
    answer: 'the',
    tier: 1,
    rule: 'only one',
    facts: ['word:sun'],
  },
  {
    sentence: 'I read ___ book you lent me last week.',
    answer: 'the',
    tier: 2,
    rule: 'which one',
  },
  {
    sentence: 'She is ___ tallest student in the class.',
    answer: 'the',
    tier: 1,
    rule: 'most, first and only',
    facts: ['word:tallest'],
  },
  {
    sentence: 'We watched ___ moon from the garden last night.',
    answer: 'the',
    tier: 1,
    rule: 'only one',
    facts: ['word:moon'],
  },
  {
    sentence: 'Can you pass me ___ salt, please?',
    answer: 'the',
    tier: 1,
    rule: 'known to both',
  },
  {
    sentence: 'He sailed across ___ Atlantic Ocean last year.',
    answer: 'the',
    tier: 2,
    rule: 'place names with the',
    facts: ['word:atlantic'],
  },
  {
    sentence: 'They live near ___ River Thames.',
    answer: 'the',
    tier: 2,
    rule: 'place names with the',
  },
  {
    sentence: 'I want to visit ___ United Kingdom next year.',
    answer: 'the',
    tier: 2,
    rule: 'place names with the',
    facts: ['word:united'],
  },
  {
    sentence: 'She is ___ first person to finish the race.',
    answer: 'the',
    tier: 2,
    rule: 'most, first and only',
    facts: ['word:first', 'word:only', 'word:same'],
  },
  {
    sentence: 'Look at ___ sky. It is full of stars tonight.',
    answer: 'the',
    tier: 1,
    rule: 'only one',
    facts: ['word:sky', 'phrase:look at the'],
  },
  {
    sentence: 'We went to ___ cinema on Saturday evening.',
    answer: 'the',
    tier: 2,
    rule: 'set phrases with the',
    facts: ['word:cinema', 'phrase:go to the'],
  },
  {
    sentence: '___ children love playing in parks.',
    answer: '-',
    tier: 1,
    rule: 'general plural',
  },
  {
    sentence: 'I really enjoy ___ music, especially jazz.',
    answer: '-',
    tier: 1,
    rule: 'general uncountable',
  },
  {
    sentence: '___ Sara is coming to the party tonight.',
    answer: '-',
    tier: 1,
    rule: 'names and titles',
  },
  {
    sentence: 'We had ___ breakfast at seven o’clock.',
    answer: '-',
    tier: 1,
    rule: 'meals, languages, subjects and games',
  },
  {
    sentence: 'She speaks ___ Arabic and English fluently.',
    answer: '-',
    tier: 1,
    rule: 'meals, languages, subjects and games',
    facts: ['word:english'],
  },
  {
    sentence: '___ water is essential for life.',
    answer: '-',
    tier: 2,
    rule: 'general uncountable',
    facts: ['word:water'],
  },
  {
    sentence: 'I live in ___ London with my family.',
    answer: '-',
    tier: 1,
    rule: 'place names without the',
  },
  {
    sentence: '___ dogs are very loyal animals.',
    answer: '-',
    tier: 1,
    rule: 'general plural',
    facts: ['phrase:next door'],
  },
  {
    sentence: 'He travels to ___ France every summer.',
    answer: '-',
    tier: 1,
    rule: 'place names without the',
  },
  {
    sentence: 'They study ___ mathematics at school.',
    answer: '-',
    tier: 1,
    rule: 'meals, languages, subjects and games',
    facts: ['word:school'],
  },
  {
    sentence: 'We play ___ football after class.',
    answer: '-',
    tier: 1,
    rule: 'meals, languages, subjects and games',
  },
  {
    sentence: '___ honey is sweeter than sugar.',
    answer: '-',
    tier: 2,
    rule: 'general uncountable',
    facts: ['word:sugar'],
  },
  {
    sentence: 'My sister teaches ___ history at the college.',
    answer: '-',
    tier: 1,
    rule: 'meals, languages, subjects and games',
  },
  {
    sentence: 'I usually go to ___ bed before midnight.',
    answer: '-',
    tier: 1,
    rule: 'set phrases without the',
  },
  {
    sentence: '___ Mr Khan is our new teacher.',
    answer: '-',
    tier: 1,
    rule: 'names and titles',
  },
  {
    sentence: '___ rice is grown in many warm countries.',
    answer: '-',
    tier: 2,
    rule: 'general uncountable',
  },
  {
    sentence: 'She loves ___ flowers, especially roses.',
    answer: '-',
    tier: 1,
    rule: 'general plural',
    facts: ['phrase:next door'],
  },
  {
    sentence: 'We learn ___ English on Mondays.',
    answer: '-',
    tier: 1,
    rule: 'meals, languages, subjects and games',
  },
  {
    sentence: 'I saw ___ cat in the street earlier.',
    answer: 'a',
    tier: 1,
    rule: 'first mention',
    facts: ['word:street', 'word:cat'],
  },
  {
    sentence: 'There is ___ school at the end of our road.',
    answer: 'a',
    tier: 1,
    rule: 'first mention',
    facts: ['word:end'],
  },
  {
    sentence: 'He bought ___ car. The car is bright red.',
    answer: 'a',
    tier: 2,
    rule: 'first mention',
    facts: ['word:car'],
  },
  {
    sentence: 'Would you like ___ cup of tea?',
    answer: 'a',
    tier: 1,
    rule: 'consonant sound',
    facts: ['word:tea'],
  },
  {
    sentence: 'She is ___ doctor at the hospital.',
    answer: 'a',
    tier: 1,
    rule: 'jobs',
    facts: ['word:mr'],
  },
  {
    sentence: "There is ___ unicorn on my sister's bag.",
    answer: 'a',
    tier: 1,
    rule: 'you sound',
  },
  {
    sentence: 'There is ___ horse in the field behind our school.',
    answer: 'a',
    tier: 1,
    rule: 'consonant sound',
    facts: ['word:most'],
  },
  {
    sentence: 'I eat ___ banana every morning.',
    answer: 'a',
    tier: 1,
    rule: 'consonant sound',
  },
  {
    sentence: 'My grandparents have got ___ yellow car.',
    answer: 'a',
    tier: 1,
    rule: 'consonant sound',
  },
  {
    sentence: 'I have ___ dog and two cats.',
    answer: 'a',
    tier: 1,
    rule: 'consonant sound',
    facts: ['word:cats', 'word:dog'],
  },
  {
    sentence: 'There is ___ big apple tree in our garden.',
    answer: 'a',
    tier: 1,
    rule: 'describing word first',
  },
  {
    sentence: 'There is ___ ant on your arm.',
    answer: 'an',
    tier: 1,
    rule: 'vowel sound',
  },
  {
    sentence: "I have ___ idea. Let's play a game outside.",
    answer: 'an',
    tier: 1,
    rule: 'vowel sound',
  },
  {
    sentence: 'My aunt lives on ___ island in Scotland.',
    answer: 'an',
    tier: 1,
    rule: 'vowel sound',
    facts: ['word:scotland'],
  },
  {
    sentence: 'I have ___ uncle in Canada.',
    answer: 'an',
    tier: 1,
    rule: 'vowel sound',
  },
  {
    sentence: 'There is ___ old castle on the hill.',
    answer: 'an',
    tier: 1,
    rule: 'describing word first',
    facts: ['word:old'],
  },
  {
    sentence: 'My sister is ___ artist. She paints every day.',
    answer: 'an',
    tier: 1,
    rule: 'jobs',
  },
  {
    sentence: 'Put the butter in ___ fridge, please.',
    answer: 'the',
    tier: 1,
    rule: 'known to both',
  },
  {
    sentence: 'Please turn off ___ light when you go to sleep.',
    answer: 'the',
    tier: 1,
    rule: 'known to both',
  },
  {
    sentence: 'What is ___ name of your school?',
    answer: 'the',
    tier: 1,
    rule: 'which one',
  },
  {
    sentence: 'December is ___ last month of the year.',
    answer: 'the',
    tier: 1,
    rule: 'most, first and only',
    facts: ['word:next'],
  },
  {
    sentence: 'Mount Everest is ___ highest mountain in the world.',
    answer: 'the',
    tier: 1,
    rule: 'most, first and only',
    facts: ['rule:mountain names'],
  },
  {
    sentence: 'We swim in ___ sea every summer.',
    answer: 'the',
    tier: 1,
    rule: 'set phrases with the',
    facts: ['word:sea'],
  },
  {
    sentence: 'Who is ___ girl in the red coat?',
    answer: 'the',
    tier: 1,
    rule: 'which one',
  },
  {
    sentence: 'The teacher is writing on ___ board.',
    answer: 'the',
    tier: 1,
    rule: 'known to both',
    facts: ['word:teacher', 'phrase:look at the'],
  },
  {
    sentence: 'My bedroom is at ___ top of the house.',
    answer: 'the',
    tier: 1,
    rule: 'set phrases with the',
    facts: ['word:top'],
  },
  {
    sentence: 'Mum is in ___ kitchen. She is making a cake.',
    answer: 'the',
    tier: 1,
    rule: 'known to both',
  },
  {
    sentence: 'Can you close ___ curtains, please?',
    answer: 'the',
    tier: 1,
    rule: 'known to both',
  },
  {
    sentence: 'Look at ___ clock. We are late.',
    answer: 'the',
    tier: 1,
    rule: 'known to both',
    facts: ['phrase:look at the'],
  },
  {
    sentence: 'May I use ___ toilet, please?',
    answer: 'the',
    tier: 1,
    rule: 'known to both',
  },
  {
    sentence: 'Our cat is asleep on ___ sofa.',
    answer: 'the',
    tier: 1,
    rule: 'known to both',
  },
  {
    sentence: 'I like ___ apples, but I do not like pears.',
    answer: '-',
    tier: 1,
    rule: 'general plural',
  },
  {
    sentence: 'My grandfather drinks ___ milk every day.',
    answer: '-',
    tier: 1,
    rule: 'general uncountable',
  },
  {
    sentence: '___ Ali is my best friend.',
    answer: '-',
    tier: 1,
    rule: 'names and titles',
  },
  {
    sentence: 'We are going to ___ Spain on holiday.',
    answer: '-',
    tier: 1,
    rule: 'place names without the',
  },
  {
    sentence: 'My mother is from ___ Egypt.',
    answer: '-',
    tier: 1,
    rule: 'place names without the',
  },
  {
    sentence: 'Do you speak ___ French?',
    answer: '-',
    tier: 1,
    rule: 'meals, languages, subjects and games',
  },
  {
    sentence: 'I play ___ tennis on Saturdays.',
    answer: '-',
    tier: 1,
    rule: 'meals, languages, subjects and games',
  },
  {
    sentence: "We have ___ lunch at one o'clock.",
    answer: '-',
    tier: 1,
    rule: 'meals, languages, subjects and games',
  },
  {
    sentence: 'My little brother walks to ___ school every day.',
    answer: '-',
    tier: 1,
    rule: 'set phrases without the',
  },
  {
    sentence: 'She is at ___ home today because she is ill.',
    answer: '-',
    tier: 1,
    rule: 'set phrases without the',
  },
  {
    sentence: 'I cannot sleep at ___ night when it is hot.',
    answer: '-',
    tier: 1,
    rule: 'set phrases without the',
  },
  {
    sentence: 'I never drink ___ coffee. It keeps me awake.',
    answer: '-',
    tier: 1,
    rule: 'general uncountable',
  },
  {
    sentence: '___ chocolate is my favourite food.',
    answer: '-',
    tier: 1,
    rule: 'general uncountable',
  },
  {
    sentence: 'We are going to see ___ Grandma on Sunday.',
    answer: '-',
    tier: 1,
    rule: 'names and titles',
  },
  {
    sentence: 'There is ___ hourly bus from here to the airport.',
    answer: 'an',
    tier: 2,
    rule: 'silent h',
    facts: ['word:hour'],
  },
  {
    sentence: 'The speed limit on this road is 30 miles ___ hour.',
    answer: 'an',
    tier: 2,
    rule: 'how often and how much',
    facts: ['rule:a for each'],
  },
  {
    sentence: 'I found ___ euro coin in my pocket.',
    answer: 'a',
    tier: 2,
    rule: 'you sound',
    facts: ['sound:eu'],
  },
  {
    sentence: 'It was ___ unique chance to see a whale.',
    answer: 'a',
    tier: 2,
    rule: 'you sound',
  },
  {
    sentence: 'The driver made ___ U-turn in the middle of the road.',
    answer: 'a',
    tier: 2,
    rule: 'letters and numbers',
    facts: ['letter:u', 'word:driver', 'word:middle'],
  },
  {
    sentence: 'This is ___ UK passport, not an Irish one.',
    answer: 'a',
    tier: 2,
    rule: 'letters and numbers',
    facts: ['letter:u'],
  },
  {
    sentence: 'We went on ___ one-day trip to York.',
    answer: 'a',
    tier: 2,
    rule: 'one',
    facts: ['word:one'],
  },
  {
    sentence: 'Have you got ___ one-pound coin for the trolley?',
    answer: 'a',
    tier: 2,
    rule: 'one',
    facts: ['word:one'],
  },
  {
    sentence: 'You need ___ username and a password to log in.',
    answer: 'a',
    tier: 2,
    rule: 'you sound',
  },
  {
    sentence: 'My little brother thinks he saw ___ UFO.',
    answer: 'a',
    tier: 2,
    rule: 'letters and numbers',
    facts: ['letter:u'],
  },
  {
    sentence: 'There is ___ huge elephant at the safari park.',
    answer: 'a',
    tier: 2,
    rule: 'describing word first',
  },
  {
    sentence: 'We go swimming twice ___ week.',
    answer: 'a',
    tier: 2,
    rule: 'how often and how much',
    facts: ['word:week', 'rule:a for each'],
  },
  {
    sentence: 'Take this medicine three times ___ day.',
    answer: 'a',
    tier: 2,
    rule: 'how often and how much',
    facts: ['rule:a for each'],
  },
  {
    sentence: 'I visit my grandparents once ___ month.',
    answer: 'a',
    tier: 2,
    rule: 'how often and how much',
    facts: ['rule:a for each'],
  },
  {
    sentence: 'There were ___ lot of people at the concert.',
    answer: 'a',
    tier: 2,
    rule: 'how often and how much',
  },
  {
    sentence: 'She has ___ unusual name.',
    answer: 'an',
    tier: 2,
    rule: 'vowel sound',
  },
  {
    sentence: 'Her mother is ___ NHS doctor.',
    answer: 'an',
    tier: 2,
    rule: 'letters and numbers',
  },
  {
    sentence: 'Her uncle works as ___ RSPCA inspector.',
    answer: 'an',
    tier: 2,
    rule: 'letters and numbers',
  },
  {
    sentence: 'The sailors sent ___ SOS message.',
    answer: 'an',
    tier: 2,
    rule: 'letters and numbers',
  },
  {
    sentence: 'Our school has ___ L-shaped playground.',
    answer: 'an',
    tier: 2,
    rule: 'letters and numbers',
  },
  {
    sentence: 'My cousin has ___ 11-year-old son.',
    answer: 'an',
    tier: 2,
    rule: 'letters and numbers',
    facts: ['sound:number'],
  },
  {
    sentence: 'My aunt owns ___ 18th-century cottage.',
    answer: 'an',
    tier: 2,
    rule: 'letters and numbers',
    facts: ['sound:number'],
  },
  {
    sentence: 'There will be ___ 80th birthday party for my grandmother on Saturday.',
    answer: 'an',
    tier: 2,
    rule: 'letters and numbers',
    facts: ['sound:number'],
  },
  {
    sentence: 'My cousin dreams of being ___ F1 driver.',
    answer: 'an',
    tier: 2,
    rule: 'letters and numbers',
  },
  {
    sentence: 'She has ___ expensive watch.',
    answer: 'an',
    tier: 2,
    rule: 'describing word first',
  },
  {
    sentence: 'There is ___ empty seat next to me.',
    answer: 'an',
    tier: 2,
    rule: 'describing word first',
  },
  {
    sentence: 'She has ___ amazing voice.',
    answer: 'an',
    tier: 2,
    rule: 'describing word first',
  },
  {
    sentence: 'My uncle is ___ electrician.',
    answer: 'an',
    tier: 2,
    rule: 'jobs',
  },
  {
    sentence: 'He wants to be ___ actor when he is older.',
    answer: 'an',
    tier: 2,
    rule: 'jobs',
  },
  {
    sentence: 'I ordered a pizza and a salad. ___ pizza was cold.',
    answer: 'the',
    tier: 2,
    rule: 'second mention',
  },
  {
    sentence: 'Tom has a cat and a parrot. ___ parrot can say hello.',
    answer: 'the',
    tier: 2,
    rule: 'second mention',
    facts: ['word:cat'],
  },
  {
    sentence: 'Where is ___ remote control? I want to watch a film.',
    answer: 'the',
    tier: 2,
    rule: 'known to both',
    facts: ['phrase:where is the'],
  },
  {
    sentence: 'Can you feed ___ dog before you go out?',
    answer: 'the',
    tier: 2,
    rule: 'known to both',
    facts: ['word:dog'],
  },
  {
    sentence: "I'll meet you outside ___ library at four o'clock.",
    answer: 'the',
    tier: 2,
    rule: 'known to both',
    facts: ['word:library'],
  },
  {
    sentence: 'Did you lock ___ front door?',
    answer: 'the',
    tier: 2,
    rule: 'known to both',
  },
  {
    sentence: 'I found the answer on ___ internet.',
    answer: 'the',
    tier: 2,
    rule: 'only one',
    facts: ['word:internet'],
  },
  {
    sentence: 'What is ___ weather like in Leeds today?',
    answer: 'the',
    tier: 2,
    rule: 'only one',
  },
  {
    sentence: 'Someone took my bike, so I called ___ police.',
    answer: 'the',
    tier: 2,
    rule: 'only one',
  },
  {
    sentence: 'Did you watch ___ news last night?',
    answer: 'the',
    tier: 2,
    rule: 'set phrases with the',
  },
  {
    sentence: 'My grandparents live in ___ countryside.',
    answer: 'the',
    tier: 2,
    rule: 'set phrases with the',
  },
  {
    sentence: '___ water in this bottle is very cold.',
    answer: 'the',
    tier: 2,
    rule: 'which one',
  },
  {
    sentence: 'This is ___ best day of my life.',
    answer: 'the',
    tier: 2,
    rule: 'most, first and only',
  },
  {
    sentence: 'She is ___ only person who knows the answer.',
    answer: 'the',
    tier: 2,
    rule: 'most, first and only',
    facts: ['word:only'],
  },
  {
    sentence: '___ Nile is the longest river in Africa.',
    answer: 'the',
    tier: 2,
    rule: 'place names with the',
  },
  {
    sentence: 'We went skiing in ___ Alps last winter.',
    answer: 'the',
    tier: 2,
    rule: 'place names with the',
    facts: ['rule:mountain names'],
  },
  {
    sentence: 'My cousin lives in ___ Netherlands.',
    answer: 'the',
    tier: 2,
    rule: 'place names with the',
  },
  {
    sentence: 'We took photos of ___ Eiffel Tower.',
    answer: 'the',
    tier: 2,
    rule: 'place names with the',
  },
  {
    sentence: 'We must all help to protect ___ environment.',
    answer: 'the',
    tier: 2,
    rule: 'only one',
    facts: ['word:environment'],
  },
  {
    sentence: 'We sailed on ___ Lake Windermere.',
    answer: '-',
    tier: 2,
    rule: 'place names without the',
  },
  {
    sentence: 'We had a picnic in ___ Hyde Park.',
    answer: '-',
    tier: 2,
    rule: 'place names without the',
  },
  {
    sentence: 'She went shopping on ___ Oxford Street.',
    answer: '-',
    tier: 2,
    rule: 'place names without the',
  },
  {
    sentence: 'Our plane lands at ___ Heathrow at six.',
    answer: '-',
    tier: 2,
    rule: 'place names without the',
  },
  {
    sentence: 'Cardiff is the capital of ___ Wales.',
    answer: '-',
    tier: 2,
    rule: 'place names without the',
  },
  {
    sentence: 'Thousands of tourists visit ___ Buckingham Palace every year.',
    answer: '-',
    tier: 2,
    rule: 'place names without the',
  },
  {
    sentence: '___ vegetables are good for you.',
    answer: '-',
    tier: 2,
    rule: 'general plural',
  },
  {
    sentence: '___ sugar is bad for your teeth.',
    answer: '-',
    tier: 2,
    rule: 'general uncountable',
  },
  {
    sentence: '___ honesty is very important in a friendship.',
    answer: '-',
    tier: 2,
    rule: 'general uncountable',
  },
  {
    sentence: '___ tea is very popular in Britain.',
    answer: '-',
    tier: 2,
    rule: 'general uncountable',
  },
  {
    sentence: 'My teacher gave me ___ good advice.',
    answer: '-',
    tier: 2,
    rule: 'uncountable nouns',
    facts: ['word:advice'],
  },
  {
    sentence: 'Our teacher gives us ___ homework on Fridays.',
    answer: '-',
    tier: 2,
    rule: 'uncountable nouns',
  },
  {
    sentence: 'My sister has ___ long hair.',
    answer: '-',
    tier: 2,
    rule: 'uncountable nouns',
  },
  {
    sentence: 'We bought ___ new furniture for the living room.',
    answer: '-',
    tier: 2,
    rule: 'uncountable nouns',
  },
  {
    sentence: 'There was ___ heavy traffic in the city centre.',
    answer: '-',
    tier: 2,
    rule: 'uncountable nouns',
    facts: ['word:city'],
  },
  {
    sentence: 'What ___ lovely weather we are having today.',
    answer: '-',
    tier: 3,
    rule: 'uncountable nouns',
    facts: ['word:weather'],
  },
  {
    sentence: 'Thank you. That is such ___ helpful advice.',
    answer: '-',
    tier: 3,
    rule: 'uncountable nouns',
    facts: ['word:such', 'word:advice'],
  },
  {
    sentence: '___ hard work is the secret of success.',
    answer: '-',
    tier: 3,
    rule: 'general uncountable',
  },
  {
    sentence: 'She speaks ___ excellent English.',
    answer: '-',
    tier: 3,
    rule: 'meals, languages, subjects and games',
    facts: ['word:english'],
  },
  {
    sentence: '___ unemployment is a big problem in some towns.',
    answer: '-',
    tier: 3,
    rule: 'general uncountable',
    facts: ['word:big'],
  },
  {
    sentence: 'I have never seen such ___ beautiful sunset.',
    answer: 'a',
    tier: 3,
    rule: 'describing word first',
    facts: ['word:such'],
  },
  {
    sentence: 'We had ___ wonderful time at the party.',
    answer: 'a',
    tier: 2,
    rule: 'uncountable nouns',
  },
  {
    sentence: 'My little brother has ___ high temperature, so we called the doctor.',
    answer: 'a',
    tier: 2,
    rule: 'uncountable nouns',
    facts: ['word:doctor'],
  },
  {
    sentence: 'My parents met in ___ 1990s.',
    answer: 'the',
    tier: 2,
    rule: 'set phrases with the',
  },
  {
    sentence: 'We went to a wedding on Saturday. ___ bride wore a red dress.',
    answer: 'the',
    tier: 3,
    rule: 'linked by the situation',
  },
  {
    sentence: 'I took a taxi to the station, but ___ driver got lost.',
    answer: 'the',
    tier: 3,
    rule: 'linked by the situation',
  },
  {
    sentence: 'I bought a new laptop, but ___ screen is already broken.',
    answer: 'the',
    tier: 3,
    rule: 'linked by the situation',
    facts: ['word:new'],
  },
  {
    sentence: '___ life of a firefighter can be dangerous.',
    answer: 'the',
    tier: 3,
    rule: 'which one',
  },
  {
    sentence: 'She is reading about ___ history of Japan.',
    answer: 'the',
    tier: 3,
    rule: 'which one',
  },
  {
    sentence: '___ coffee that you made for me this morning was delicious.',
    answer: 'the',
    tier: 3,
    rule: 'which one',
  },
  {
    sentence: 'In ___ end, we decided to walk.',
    answer: 'the',
    tier: 2,
    rule: 'set phrases with the',
  },
  {
    sentence: 'At ___ moment, I am studying for my exams.',
    answer: 'the',
    tier: 2,
    rule: 'set phrases with the',
  },
  {
    sentence: 'They arrived in ___ middle of the night.',
    answer: 'the',
    tier: 2,
    rule: 'set phrases with the',
  },
  {
    sentence: 'We moved to Leeds in 2019, and ___ next year we moved to York.',
    answer: 'the',
    tier: 3,
    rule: 'which one',
    facts: ['word:next'],
  },
  {
    sentence: '___ people who live next door are very friendly.',
    answer: 'the',
    tier: 3,
    rule: 'which one',
    facts: ['phrase:next door'],
  },
  {
    sentence: 'We are going to ___ Lake District for the weekend.',
    answer: 'the',
    tier: 2,
    rule: 'place names with the',
  },
  {
    sentence: 'My cousin works for ___ BBC.',
    answer: 'the',
    tier: 2,
    rule: 'place names with the',
  },
  {
    sentence:
      'I went to the shops and bought ___ bike and ___ helmet. ___ bike was cheap, but the helmet was not.',
    kind: 'text',
    gaps: ['a', 'a', 'the'],
    wrong: [
      ['-', 'the', 'the'],
      ['-', 'a', 'a'],
      ['a', 'the', 'a'],
    ],
    tier: 3,
    rule: 'text: new and known',
  },
  {
    sentence:
      'Our neighbours have ___ old car and ___ new van. ___ car is red, and the van is white.',
    kind: 'text',
    gaps: ['an', 'a', 'the'],
    wrong: [
      ['a', 'the', 'the'],
      ['a', 'a', 'a'],
      ['an', 'the', 'a'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['word:new', 'word:old', 'word:car'],
  },
  {
    sentence:
      'A: Is there ___ bank near here? B: Yes. Go straight on, and ___ bank is on ___ left.',
    kind: 'text',
    gaps: ['a', 'the', 'the'],
    wrong: [
      ['the', '-', 'the'],
      ['the', 'the', 'a'],
      ['a', '-', 'a'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['word:bank'],
  },
  {
    sentence:
      'There is ___ cinema in our town, but ___ cinema is very small. It shows ___ old films on Sundays.',
    kind: 'text',
    gaps: ['a', 'the', '-'],
    wrong: [
      ['the', 'a', '-'],
      ['the', 'the', 'an'],
      ['a', 'a', 'an'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['word:cinema'],
  },
  {
    sentence:
      '___ dogs need exercise every day. ___ dog next door goes for ___ long walk every morning.',
    kind: 'text',
    gaps: ['-', 'the', 'a'],
    wrong: [
      ['a', '-', 'a'],
      ['a', 'the', 'an'],
      ['-', '-', 'an'],
    ],
    tier: 3,
    rule: 'text: general and particular',
    facts: ['word:dog', 'word:long', 'phrase:next door'],
  },
  {
    sentence:
      "___ honey is good for a sore throat. ___ honey in this jar comes from my grandad's bees.",
    kind: 'text',
    gaps: ['-', 'the'],
    wrong: [
      ['a', 'the'],
      ['-', '-'],
      ['a', '-'],
    ],
    tier: 3,
    rule: 'text: general and particular',
  },
  {
    sentence:
      'We waited ___ hour for the bus. Then ___ old man told us there was ___ one-hour delay.',
    kind: 'text',
    gaps: ['an', 'an', 'a'],
    wrong: [
      ['a', 'a', 'a'],
      ['a', 'an', 'an'],
      ['an', 'a', 'an'],
    ],
    tier: 3,
    rule: 'text: sounds',
    facts: ['word:one', 'word:hour', 'word:old'],
  },
  {
    sentence:
      'Last summer we visited ___ Scotland. We climbed ___ Ben Nevis and swam in ___ sea near Oban.',
    kind: 'text',
    gaps: ['-', '-', 'the'],
    wrong: [
      ['the', 'the', 'the'],
      ['the', '-', '-'],
      ['-', 'the', '-'],
    ],
    tier: 3,
    rule: 'text: places and names',
    facts: ['word:sea', 'rule:mountain names'],
  },
  {
    sentence:
      'My mum gets up at six. She has ___ shower, eats ___ breakfast and goes to ___ work by train.',
    kind: 'text',
    gaps: ['a', '-', '-'],
    wrong: [
      ['-', 'a', '-'],
      ['-', '-', 'the'],
      ['a', 'a', 'the'],
    ],
    tier: 3,
    rule: 'text: set phrases',
  },
  {
    sentence:
      'There was no possibility of taking ___ walk that day. We had been wandering, indeed, in the leafless shrubbery ___ hour in ___ morning...',
    kind: 'text',
    gaps: ['a', 'an', 'the'],
    wrong: [
      ['the', 'a', 'the'],
      ['the', 'an', '-'],
      ['a', 'a', '-'],
    ],
    tier: 3,
    rule: 'text: a real line',
    facts: ['word:hour'],
    source: 'Jane Eyre by Charlotte Brontë (1847), Chapter 1',
  },
  {
    sentence:
      'Word had gone round during the day that old Major, the prize Middle White boar, had had ___ strange dream on ___ previous night and wished to communicate it to ___ other animals.',
    kind: 'text',
    gaps: ['a', 'the', 'the'],
    wrong: [
      ['the', 'a', 'the'],
      ['the', 'the', 'an'],
      ['a', 'a', 'an'],
    ],
    tier: 3,
    rule: 'text: a real line',
    source: 'Animal Farm by George Orwell (1945), Chapter 1',
  },
  {
    sentence:
      'Clover was ___ stout motherly mare approaching ___ middle life, who had never quite got her figure back after her fourth foal. Boxer was ___ enormous beast, nearly eighteen hands high, and as strong as any two ordinary horses put together.',
    kind: 'text',
    gaps: ['a', '-', 'an'],
    wrong: [
      ['an', 'the', 'an'],
      ['an', '-', 'a'],
      ['a', 'the', 'a'],
    ],
    tier: 3,
    rule: 'text: a real line',
    source: 'Animal Farm by George Orwell (1945), Chapter 1',
  },
  {
    sentence: 'Benjamin was ___ oldest animal on ___ farm, and ___ worst tempered.',
    kind: 'text',
    gaps: ['the', 'the', 'the'],
    wrong: [
      ['an', '-', 'the'],
      ['an', 'the', 'a'],
      ['the', '-', 'a'],
    ],
    tier: 3,
    rule: 'text: a real line',
    source: 'Animal Farm by George Orwell (1945), Chapter 1',
  },
  {
    sentence:
      "The door of Scrooge's counting-house was open that he might keep his eye upon his clerk, who in ___ dismal little cell beyond, a sort of tank, was copying letters. Scrooge had ___ very small fire, but ___ clerk's fire was so very much smaller that it looked like one coal.",
    kind: 'text',
    gaps: ['a', 'a', 'the'],
    wrong: [
      ['an', 'the', 'the'],
      ['an', 'a', '-'],
      ['a', 'the', '-'],
    ],
    tier: 3,
    rule: 'text: a real line',
    facts: ['word:door', 'word:very'],
    source: 'A Christmas Carol by Charles Dickens (1843), Stave 1',
  },
  {
    sentence:
      'Miss Morstan entered the room with ___ firm step and ___ outward composure of manner. She was ___ blonde young lady, small, dainty, well gloved, and dressed in the most perfect taste.',
    kind: 'text',
    gaps: ['a', 'an', 'a'],
    wrong: [
      ['an', 'a', 'a'],
      ['an', 'an', 'an'],
      ['a', 'a', 'an'],
    ],
    tier: 3,
    rule: 'text: a real line',
    facts: ['word:most'],
    source: 'The Sign of Four by Arthur Conan Doyle (1890), Chapter 2',
  },
  {
    sentence:
      '___ fearful man, all in coarse grey, with ___ great iron on his leg. A man with no hat, and with broken shoes, and with ___ old rag tied round his head.',
    kind: 'text',
    gaps: ['a', 'a', 'an'],
    wrong: [
      ['an', 'the', 'an'],
      ['an', 'a', 'a'],
      ['a', 'the', 'a'],
    ],
    tier: 3,
    rule: 'text: a real line',
    facts: ['word:old'],
    source: 'Great Expectations by Charles Dickens (1861), Chapter 1',
  },
  {
    sentence:
      'It was on ___ dreary night of November, that I beheld ___ accomplishment of my toils. With ___ anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet.',
    kind: 'text',
    gaps: ['a', 'the', 'an'],
    wrong: [
      ['the', '-', 'an'],
      ['the', 'the', 'a'],
      ['a', '-', 'a'],
    ],
    tier: 3,
    rule: 'text: a real line',
    source: 'Frankenstein by Mary Shelley (1831 edition), Chapter 5',
  },
  {
    sentence:
      'It chanced on one of these rambles that their way led them down ___ by-street in ___ busy quarter of London. ___ street was small and what is called quiet, but it drove a thriving trade on the weekdays.',
    kind: 'text',
    gaps: ['a', 'a', 'the'],
    wrong: [
      ['the', '-', 'the'],
      ['the', 'a', 'a'],
      ['a', '-', 'a'],
    ],
    tier: 3,
    rule: 'text: a real line',
    facts: ['word:london', 'word:mr', 'word:busy'],
    source: 'The Strange Case of Dr Jekyll and Mr Hyde by Robert Louis Stevenson (1886), Chapter 1',
  },
  {
    sentence: 'Our school has ___ library and ___ gym. ___ library is open every lunchtime.',
    kind: 'text',
    gaps: ['a', 'a', 'the'],
    wrong: [
      ['the', 'an', 'the'],
      ['the', 'a', 'a'],
      ['a', 'an', 'a'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['word:library'],
  },
  {
    sentence: 'I need ___ bread and ___ eggs. Can you also buy ___ bottle of milk?',
    kind: 'text',
    gaps: ['-', '-', 'a'],
    wrong: [
      ['a', 'an', 'a'],
      ['a', '-', '-'],
      ['-', 'an', '-'],
    ],
    tier: 3,
    rule: 'text: general and particular',
    facts: ['word:milk'],
  },
  {
    sentence: '___ sun was shining, and there was not ___ cloud in ___ sky.',
    kind: 'text',
    gaps: ['the', 'a', 'the'],
    wrong: [
      ['a', '-', 'the'],
      ['a', 'a', '-'],
      ['the', '-', '-'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['word:sun', 'word:sky'],
  },
  {
    sentence:
      'We had dinner at ___ new restaurant last night. ___ food was delicious, but ___ waiter was very slow.',
    kind: 'text',
    gaps: ['a', 'the', 'the'],
    wrong: [
      ['the', 'a', 'the'],
      ['the', 'the', '-'],
      ['a', 'a', '-'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['word:new'],
  },
  {
    sentence: 'My brother is ___ vegetarian. He does not eat ___ meat, but he loves ___ cheese.',
    kind: 'text',
    gaps: ['a', '-', '-'],
    wrong: [
      ['an', 'a', '-'],
      ['an', '-', 'the'],
      ['a', 'a', 'the'],
    ],
    tier: 3,
    rule: 'text: general and particular',
  },
  {
    sentence:
      'My cousin is ___ engineer, and her husband is ___ university lecturer. They both work at ___ same university.',
    kind: 'text',
    gaps: ['an', 'a', 'the'],
    wrong: [
      ['a', 'an', 'the'],
      ['a', 'a', 'a'],
      ['an', 'an', 'a'],
    ],
    tier: 3,
    rule: 'text: sounds',
    facts: ['word:engineer', 'word:university'],
  },
  {
    sentence: 'Sam has ___ older brother and ___ younger sister. ___ younger one is called Ana.',
    kind: 'text',
    gaps: ['an', 'a', 'the'],
    wrong: [
      ['a', 'an', 'the'],
      ['a', 'a', 'a'],
      ['an', 'an', 'a'],
    ],
    tier: 3,
    rule: 'text: new and known',
  },
  {
    sentence: '___ sunlight is important for plants, so put ___ plant near ___ window.',
    kind: 'text',
    gaps: ['-', 'the', 'the'],
    wrong: [
      ['the', 'an', 'the'],
      ['the', 'the', '-'],
      ['-', 'an', '-'],
    ],
    tier: 3,
    rule: 'text: general and particular',
  },
  {
    sentence:
      'My cousin lives in ___ United States. She works in ___ New York, near ___ Hudson River.',
    kind: 'text',
    gaps: ['the', '-', 'the'],
    wrong: [
      ['-', 'the', 'the'],
      ['-', '-', '-'],
      ['the', 'the', '-'],
    ],
    tier: 3,
    rule: 'text: places and names',
    facts: ['word:united'],
  },
  {
    sentence: 'A: Where is ___ cat? B: She is asleep in ___ box under ___ table.',
    kind: 'text',
    gaps: ['the', 'a', 'the'],
    wrong: [
      ['a', 'the', 'the'],
      ['a', 'a', '-'],
      ['the', 'the', '-'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['phrase:where is the'],
  },
  {
    sentence: 'I go to ___ gym three times ___ week. Each class lasts ___ hour.',
    kind: 'text',
    gaps: ['the', 'a', 'an'],
    wrong: [
      ['-', 'the', 'an'],
      ['-', 'a', 'a'],
      ['the', 'the', 'a'],
    ],
    tier: 3,
    rule: 'text: set phrases',
    facts: ['word:hour', 'word:week', 'phrase:go to the', 'rule:a for each'],
  },
  {
    sentence:
      'This is ___ first time I have been to ___ Wales. It is ___ most beautiful place I know.',
    kind: 'text',
    gaps: ['the', '-', 'the'],
    wrong: [
      ['a', 'the', 'the'],
      ['a', '-', 'a'],
      ['the', 'the', 'a'],
    ],
    tier: 3,
    rule: 'text: places and names',
    facts: ['word:first'],
  },
  {
    sentence: '___ cats are popular pets in Britain. ___ cats next door often sleep in our garden.',
    kind: 'text',
    gaps: ['-', 'the'],
    wrong: [
      ['a', 'the'],
      ['-', '-'],
      ['a', '-'],
    ],
    tier: 3,
    rule: 'text: general and particular',
    facts: ['word:cats', 'phrase:next door'],
  },
  {
    sentence: 'Can I give you ___ piece of advice? Never leave ___ money in ___ car.',
    kind: 'text',
    gaps: ['a', '-', 'the'],
    wrong: [
      ['an', 'a', 'the'],
      ['an', '-', 'a'],
      ['a', 'a', 'a'],
    ],
    tier: 3,
    rule: 'text: general and particular',
    facts: ['word:car', 'word:advice'],
  },
  {
    sentence:
      'I feel ill today. I have ___ cold and ___ headache, and ___ doctor says I need to rest.',
    kind: 'text',
    gaps: ['a', 'a', 'the'],
    wrong: [
      ['-', 'the', 'the'],
      ['-', 'a', 'a'],
      ['a', 'the', 'a'],
    ],
    tier: 3,
    rule: 'text: set phrases',
    facts: ['word:cold'],
  },
  {
    sentence:
      'Last year we stayed in ___ small hotel by ___ sea. Every morning, we sat on ___ balcony and watched the boats.',
    kind: 'text',
    gaps: ['a', 'the', 'the'],
    wrong: [
      ['the', 'a', 'the'],
      ['the', 'the', '-'],
      ['a', 'a', '-'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['word:sea'],
  },
  {
    sentence:
      'I found ___ wallet in the park. There was ___ ID card in it, so I took ___ wallet to the police station.',
    kind: 'text',
    gaps: ['a', 'an', 'the'],
    wrong: [
      ['the', 'a', 'the'],
      ['the', 'an', 'a'],
      ['a', 'a', 'a'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['word:police'],
  },
  {
    sentence:
      '___ chocolate is made from cocoa beans. ___ chocolate that you gave me was delicious.',
    kind: 'text',
    gaps: ['-', 'the'],
    wrong: [
      ['an', 'the'],
      ['-', '-'],
      ['an', '-'],
    ],
    tier: 3,
    rule: 'text: general and particular',
  },
  {
    sentence:
      'We have ___ English lesson every morning. ___ teacher is very kind, and she gives us ___ homework every day.',
    kind: 'text',
    gaps: ['an', 'the', '-'],
    wrong: [
      ['a', 'a', '-'],
      ['a', 'the', 'the'],
      ['an', 'a', 'the'],
    ],
    tier: 3,
    rule: 'text: general and particular',
    facts: ['word:teacher'],
  },
  {
    sentence: 'My brother plays ___ football for ___ local team. He is ___ excellent player.',
    kind: 'text',
    gaps: ['-', 'a', 'an'],
    wrong: [
      ['the', 'the', 'an'],
      ['the', 'a', 'a'],
      ['-', 'the', 'a'],
    ],
    tier: 3,
    rule: 'text: general and particular',
  },
  {
    sentence: 'The doctor sent me for ___ X-ray. Then I waited ___ hour in ___ long queue.',
    kind: 'text',
    gaps: ['an', 'an', 'a'],
    wrong: [
      ['a', 'a', 'a'],
      ['a', 'an', 'the'],
      ['an', 'a', 'the'],
    ],
    tier: 3,
    rule: 'text: sounds',
    facts: ['letter:x', 'word:hour', 'word:x', 'word:long', 'word:doctor'],
  },
  {
    sentence: 'My new friend is ___ Ugandan student. She lives in ___ old flat near ___ busy road.',
    kind: 'text',
    gaps: ['a', 'an', 'a'],
    wrong: [
      ['an', 'a', 'a'],
      ['an', 'an', 'an'],
      ['a', 'a', 'an'],
    ],
    tier: 3,
    rule: 'text: sounds',
    facts: ['word:old', 'word:busy'],
  },
  {
    sentence:
      'We flew from London to ___ Canary Islands. Our hotel was next to ___ beach, and we swam in ___ Atlantic every day.',
    kind: 'text',
    gaps: ['the', 'a', 'the'],
    wrong: [
      ['-', 'the', 'the'],
      ['-', 'a', '-'],
      ['the', 'the', '-'],
    ],
    tier: 3,
    rule: 'text: places and names',
    facts: ['word:london', 'word:atlantic'],
  },
  {
    sentence: 'It was ___ Sunday morning. Dad was still in ___ bed, and Mum was at ___ work.',
    kind: 'text',
    gaps: ['a', '-', '-'],
    wrong: [
      ['the', 'the', '-'],
      ['the', '-', 'the'],
      ['a', 'the', 'the'],
    ],
    tier: 3,
    rule: 'text: set phrases',
  },
  {
    sentence:
      '___ tigers are bigger than ___ leopards, but ___ cheetah is the fastest land animal.',
    kind: 'text',
    gaps: ['-', '-', 'the'],
    wrong: [
      ['the', 'a', 'the'],
      ['the', '-', '-'],
      ['-', 'a', '-'],
    ],
    tier: 3,
    rule: 'text: general and particular',
  },
  {
    sentence: 'My mum is ___ chef, and my dad works for ___ bank in ___ city centre.',
    kind: 'text',
    gaps: ['a', 'a', 'the'],
    wrong: [
      ['an', 'the', 'the'],
      ['an', 'a', '-'],
      ['a', 'the', '-'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['word:bank'],
  },
  {
    sentence: 'We arrived in Rome on ___ Friday. ___ next day, we visited ___ Colosseum.',
    kind: 'text',
    gaps: ['-', 'the', 'the'],
    wrong: [
      ['the', 'a', 'the'],
      ['the', 'the', '-'],
      ['-', 'a', '-'],
    ],
    tier: 3,
    rule: 'text: places and names',
    facts: ['word:next'],
  },
  {
    sentence: 'I read ___ article on ___ internet about ___ new film.',
    kind: 'text',
    gaps: ['an', 'the', 'a'],
    wrong: [
      ['a', '-', 'a'],
      ['a', 'the', 'the'],
      ['an', '-', 'the'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['word:new', 'word:internet'],
  },
  {
    sentence:
      'For the picnic, we need ___ loaf of bread, ___ cheese and ___ apple for each person.',
    kind: 'text',
    gaps: ['a', '-', 'an'],
    wrong: [
      ['the', 'an', 'an'],
      ['the', '-', 'a'],
      ['a', 'an', 'a'],
    ],
    tier: 3,
    rule: 'text: general and particular',
    facts: ['word:bread', 'word:apple'],
  },
  {
    sentence:
      'Leo is ___ tallest boy in our class. He is also ___ only one who can speak ___ Japanese.',
    kind: 'text',
    gaps: ['the', 'the', '-'],
    wrong: [
      ['a', 'an', '-'],
      ['a', 'the', 'the'],
      ['the', 'an', 'the'],
    ],
    tier: 3,
    rule: 'text: general and particular',
    facts: ['word:tallest', 'word:only'],
  },
  {
    sentence:
      'A: Can I have ___ glass of orange juice, please? B: Of course. Would you like ___ ice in it? A: No, thanks. And ___ sandwich, please.',
    kind: 'text',
    gaps: ['a', '-', 'a'],
    wrong: [
      ['the', 'an', 'a'],
      ['the', '-', 'an'],
      ['a', 'an', 'an'],
    ],
    tier: 3,
    rule: 'text: general and particular',
    facts: ['word:glass'],
  },
  {
    sentence: 'We have two cats and ___ dog. ___ cats sleep all day, but ___ dog likes to play.',
    kind: 'text',
    gaps: ['a', 'the', 'the'],
    wrong: [
      ['the', '-', 'the'],
      ['the', 'the', 'a'],
      ['a', '-', 'a'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['word:dog', 'word:cats'],
  },
  {
    sentence: 'We had ___ lunch at one. It was ___ very good lunch, and ___ dessert was amazing.',
    kind: 'text',
    gaps: ['-', 'a', 'the'],
    wrong: [
      ['a', 'the', 'the'],
      ['a', 'a', '-'],
      ['-', 'the', '-'],
    ],
    tier: 3,
    rule: 'text: set phrases',
    facts: ['word:very'],
  },
  {
    sentence: 'We must look after ___ environment. ___ plastic in ___ sea kills many animals.',
    kind: 'text',
    gaps: ['the', '-', 'the'],
    wrong: [
      ['an', 'the', 'the'],
      ['an', '-', 'a'],
      ['the', 'the', 'a'],
    ],
    tier: 3,
    rule: 'text: general and particular',
    facts: ['word:sea', 'word:environment'],
  },
  {
    sentence: 'They live in ___ flat on ___ fourth floor, but ___ lift is often broken.',
    kind: 'text',
    gaps: ['a', 'the', 'the'],
    wrong: [
      ['the', 'a', 'the'],
      ['the', 'the', '-'],
      ['a', 'a', '-'],
    ],
    tier: 3,
    rule: 'text: new and known',
  },
  {
    sentence: '___ teachers work very hard. ___ teacher I like best is Mrs Shah.',
    kind: 'text',
    gaps: ['-', 'the'],
    wrong: [
      ['a', 'the'],
      ['-', 'a'],
      ['a', 'a'],
    ],
    tier: 3,
    rule: 'text: general and particular',
    facts: ['word:teacher'],
  },
  {
    sentence:
      'There was ___ full moon last night. ___ moon was so bright that I could read ___ book by its light.',
    kind: 'text',
    gaps: ['a', 'the', 'a'],
    wrong: [
      ['the', 'a', 'a'],
      ['the', 'the', 'the'],
      ['a', 'a', 'the'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['word:moon'],
  },
  {
    sentence: 'It was ___ cold, wet day. ___ rain did not stop, and ___ wind was very strong.',
    kind: 'text',
    gaps: ['a', 'the', 'the'],
    wrong: [
      ['the', '-', 'the'],
      ['the', 'the', 'a'],
      ['a', '-', 'a'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['word:cold'],
  },
  {
    sentence: 'Our class went on ___ trip to ___ British Museum. We saw ___ Egyptian mummy.',
    kind: 'text',
    gaps: ['a', 'the', 'an'],
    wrong: [
      ['the', '-', 'an'],
      ['the', 'the', 'a'],
      ['a', '-', 'a'],
    ],
    tier: 3,
    rule: 'text: places and names',
  },
  {
    sentence:
      'A: Have you got ___ pen I can borrow? B: Yes, there is one in ___ top drawer of my desk.',
    kind: 'text',
    gaps: ['a', 'the'],
    wrong: [
      ['-', 'the'],
      ['a', 'a'],
      ['-', 'a'],
    ],
    tier: 3,
    rule: 'text: new and known',
    facts: ['word:top'],
  },
]

export const OPTIONS: Article[] = ['a', 'an', 'the', '-']
export const OPTION_LABELS: Record<Article, string> = {
  a: 'a',
  an: 'an',
  the: 'the',
  '-': '- (no article)',
}

/** A set of articles as its button shows it: "a / a / the", with "-" for no article. */
export const setLabel = (set: readonly Article[]): string => set.join(' / ')

/** The buttons a question shows, in the bank's order: the page shuffles a text's sets. */
export function labelsFor(item: ArticleItem): string[] {
  if (item.kind === 'text') return [item.gaps, ...item.wrong].map(setLabel)
  return OPTIONS.map((o) => OPTION_LABELS[o])
}

/** What each gap shows once a button has been chosen. */
export function fillsFor(item: ArticleItem, label: string): string[] {
  if (item.kind === 'text') return label.split(' / ')
  return [OPTIONS.find((o) => OPTION_LABELS[o] === label) ?? label]
}

/** The word right after each gap, which decides the sound and names the noun. */
function wordsAfterGaps(sentence: string): string[] {
  return sentence
    .split('___')
    .slice(1)
    .map((part) => (part.trim().split(/\s+/)[0] ?? '').toLowerCase().replace(/[^a-z0-9'-]/g, ''))
    .filter(Boolean)
}

export const BANK: GameBank<ArticleItem> = {
  slug: 'article-a-an-the',
  items: ARTICLE_BANK,
  // No two sentences are the same, and the sentence is what the student sees.
  key: (i) => i.sentence,
  // The right answer and the options are the labels on the buttons.
  answer: (i) => (i.kind === 'text' ? setLabel(i.gaps) : OPTION_LABELS[i.answer]),
  options: labelsFor,
  // Which article the sentence needs, as recorded since 16 October 2026 ("chose
  // an when the answer was a"); a short text needs several.
  tag: (i) => (i.kind === 'text' ? 'short text' : i.answer === '-' ? 'no article' : i.answer),
  tier: (i) => i.tier,
  // The words after the gaps: two questions on one word ("an hour", "half an
  // hour") never share a round. And the links the build script found.
  facts: (i) => [
    ...new Set([...wordsAfterGaps(i.sentence).map((w) => `word:${w}`), ...(i.facts ?? [])]),
  ],
  // The rule a question turns on, so a round is not five of one rule.
  group: (i) => i.rule,
  // Rebuilt for depth (see the docblock); held to it by
  // src/__tests__/a-game-question-takes-knowing.test.ts.
  deepened: '2026-10-24',
}
