import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Where Is It?: choose the preposition that fills the gap in a short scene,
 * from three or four: of place, of time, after a word ("interested in"), or
 * in a fixed phrase ("by heart"). 240 questions, 80 at each level: A1, A2
 * and B1 (`tier`).
 *
 * Moved out of src/app/games/prepositions-of-place/page.tsx on 16 October
 * 2026, when every answer gained an explanation
 * (src/lib/games/explanations/types.ts).
 *
 * 16 OCTOBER 2026: SECOND RIGHT ANSWERS. A gap such as "The book is _____ the
 * table" comes with no picture, so any option that makes a natural sentence
 * is a second right answer, and a student who chose it was marked wrong. In
 * 21 of the 56 one was plainly there: the milk 'on' the fridge, B 'next to'
 * A and C, "stayed ___ a small hotel" with 'at', the high street with 'in',
 * the weekend with the American 'on', "read ___ night" with 'by night'. Each
 * such option was replaced by one that cannot fit, and where a scene could
 * not be decided without help, a clue was added to it ("higher up", "in the
 * valley"). 'At' in "The shop is ___ the high street" was replaced and then
 * put back: "at the high street" is not natural English, so it was never a
 * second answer.
 *
 * 24 OCTOBER 2026: REBUILT FOR DEPTH. The founder, that day: the games are
 * "weak in depth and content ... too obvious and easy". Measured that day
 * (.tmp-games-audit/REPORT-eal.md): 56 questions, a student could expect 53
 * per cent from what the screen showed alone, and 19 of the 56 scenes forced
 * the answer with a phrase that meant it ("tucked inside", "just beside
 * it"). Now:
 *
 *   - A1, 80: in, on and at for places and times, the commonest place words
 *     (under, between, next to), and to and from. A2, 80: British set phrases (in hospital, at university, on
 *     TV, at 24 Park Road), transport (on the bus, in the car, by train),
 *     movement (through, over, into, off, up), for, since and during, and
 *     place words decided by knowing the world, not by a clue (on a clock
 *     the 6 is opposite the 12). B1, 80: 46 prepositions after an adjective,
 *     a verb or a noun ("afraid of", "depend on", "the reason for"), seven
 *     fixed phrases ("on purpose"), eleven time questions in context (by and
 *     until, since, during), one on getting into a taxi, and 15 two-line
 *     dialogues in which a speaker says where someone is. A dialogue's scene holds a line break, and the page
 *     shows it.
 *   - No scene states its answer or a phrase that means it: every clue went,
 *     the 19 above and those added on 16 October. A scene that could not
 *     stand without its clue was replaced by one decided by a fact or a
 *     convention.
 *   - Wrong options are real mistakes ('in the bus', 'interested on', 'afraid
 *     from', 'married with'), and none a scene could defend: so no 'in' with
 *     "Dad is ___ work" ("in work" is said in parts of Britain), no 'by' with
 *     "School starts ___ September", and no 'on' with "The village lies ___
 *     two hills" (a village can lie on hills).
 *   - Every answer of three letters or more ('behind', 'from', 'since') is
 *     the answer to at least four questions, except 'until' (two), so the
 *     dealer counts it as the game's subject and spreads it by `group`
 *     (src/lib/games/give-aways.ts tracks an answer fewer questions share).
 *     Measured as the dealer measures it, nothing a student sees with one
 *     question shows another's answer, except between the two 'until'
 *     questions, which share it and so never meet. Measured more strictly,
 *     by the phrase an answer makes with the next word ("on the bus"), four
 *     explanations or scenes show another's, and `facts` keeps each pair
 *     apart.
 *
 * The 56 questions of 16 October (numbered from the top of that list), as
 * changed on 24 October. Each also has an explanation rewritten to match.
 *   - A clue removed: 3 (the cat "hiding completely"), 18 ("so nobody can see
 *     him"), 20 ("higher up"), 23 ("in the valley"; its 'on' and 'above'
 *     went too, since a village can lie on hills).
 *   - Replaced, because without its clue more than one option fitted: 6 (the
 *     dog's bed: now tree roots under the ground), 9 (shoes: the cupboard
 *     under the stairs), 11 (a car "out of sight": the sun behind a cloud),
 *     12 (a bus stop "by the main gate": a tall boy in front of me), 13
 *     ("side by side": sharing a desk), 14 ("just beside it": the Q key next
 *     to the W key), 15 ("at the back": the second person in a queue), 16
 *     ("blocking the view": standing in front of the TV), 17 ("right beside
 *     it": houses that share a wall), 21 (a dotted line: below zero), 22 (a
 *     café with "the street between them": chess players opposite each
 *     other), 24 (birds and clouds: nests above the ground), 25 (a car park
 *     "underground": an iceberg below the water), 27 (two cushions: the
 *     centre spot between the goals), 28 (a shelf "higher on the wall": a
 *     roof above the top floor), 53 (an umbrella "tucked inside": ice cream
 *     in the freezer), 54 (a clock "fixed higher up": eyebrows above the
 *     eyes).
 *   - Removed: 26, "My house is ___ the park; I can see it from my front
 *     door": without its clue, 'opposite', 'next to' and 'near' all fit.
 *   - Options only: an option no learner would choose ('under' or 'above'
 *     with a time, 'between' with one thing) replaced by a real mistake
 *     ('at', 'to', 'by', 'into') or dropped to leave three: 1, 4, 5, 10, 29
 *     to 38, 40, 42 to 44, 47, 48 and 50; an option the scene could defend
 *     replaced: 'above' the fridge (1), 'under' the ceiling (8), and 'above'
 *     and 'behind' the stairs in the new 9.
 *   - Unchanged, apart from their explanations: 2, 7, 19, 39, 41, 45, 46,
 *     49, 51, 52, 55 and 56.
 *
 * The one-line `why` each question carried went on 16 October: its
 * explanation replaced it.
 *
 * CHECKED (31 October 2026, by a second reader, as the founder decided). Every
 * question and explanation read, for a second right answer above all where
 * British English allows two: none is offered beside its rival ('to' with
 * "different", 'on' with "the weekend", 'at' with "a small hotel" or "the
 * museum", 'in' with "a taxi", "the lesson" or "the night"), and each
 * explanation names the rival only as accepted. Changed:
 *
 *   - "A small mat lies _____ the front door." held its answer's own word
 *     ("front", for 'in front of'). It is now "... the door of our flat.".
 *   - Facts added where one question's why, more or tip states another's
 *     answer in other words, which the give-away finder cannot see because
 *     'at', 'in' and 'on' answer too many questions to count as particular:
 *     "on 5 July" beside "My birthday is _____ 5 March" (rule:a month or a
 *     date, which only that question carried); "at a wedding" beside "They
 *     met _____ a friend's wedding" (word:wedding); "in a village" (word:
 *     village); "'In' counts time from now" beside "start _____ two weeks"
 *     (rule:in from now); "I'll meet you at the main gate" beside "I will
 *     meet you _____ the bus stop" (rule:meeting point); "Turn left at the
 *     next corner" beside "Turn left _____ the traffic lights" (rule:turn at,
 *     word:corner); "I'm on the bus now" beside "I'm _____ the train"
 *     (word:train); "I was at the library" beside "I was _____ my
 *     grandmother's house" (phrase:i was at); "I was born in Kabul" beside
 *     "born _____ 2009" (phrase:born in); "by accident" beside "_____
 *     mistake" (rule:by accident); "at the edge" beside "at the end of this
 *     street" (rule:at an edge); the named holidays, the faces, and the
 *     clock, dice and compass, each of whose explanations answers the others.
 *   - Explanations: "Nothing can be in front of both goals at once, because
 *     they face each other" (two goals that face each other both face the
 *     centre spot); "'In the bus' and 'in the train' are common mistakes",
 *     now that 'in' is for the space inside and a passenger is 'on'; and
 *     "'In the list' is a common mistake", now why a name is 'on' a list.
 */

export type Topic = 'place' | 'time' | 'after a word' | 'fixed phrase'

/**
 * What a question turns on. A round deals at most two questions on one rule,
 * and not two in a row (BANK.group, src/lib/games/deal-round.ts).
 */
export type PrepositionRule =
  | 'in: inside'
  | 'on: a surface'
  | 'at: a point'
  | 'under and below'
  | 'above'
  | 'next to'
  | 'behind'
  | 'in front of'
  | 'between'
  | 'opposite'
  | 'cities and countries'
  | 'rooms and buildings'
  | 'streets and floors'
  | 'events and meetings'
  | 'home, school and work'
  | 'transport'
  | 'pages, pictures and screens'
  | 'clock times'
  | 'days and dates'
  | 'months, seasons and years'
  | 'parts of the day'
  | 'holidays and festivals'
  | 'for, since and during'
  | 'points in time'
  | 'to and from'
  | 'through and over'
  | 'up, into and off'
  | 'fixed phrases'
  | 'after adjectives'
  | 'after verbs'
  | 'after nouns'
  | 'places in a dialogue'

export interface Question {
  scene: string
  /** Three or four, the answer among them; the page shuffles them for each round. */
  options: readonly string[]
  answer: string
  /**
   * Place, time, or after a word ("interested in"), recorded with each answer
   * so a student's results can say which they find hard.
   */
  topic: Topic
  /** 1 A1, 2 A2, 3 B1. */
  tier: 1 | 2 | 3
  rule: PrepositionRule
  /**
   * Words this question shares with another's scene or explanation, beyond
   * the word it turns on (BANK.facts): no two questions sharing one are dealt
   * in one round, so neither can show the other's answer.
   */
  facts?: readonly string[]
}

// Written, with their explanations, in a scratch folder
// (.tmp-games-deepen/prepositions-of-place/src) and copied here by a build
// script that checked them (24 October 2026). Edit them here now; the
// explanations are in src/data/games/explanations/prepositions-of-place.ts.
export const QUESTION_BANK: Question[] = [
  {
    scene: 'The milk is _____ the fridge.',
    options: ['in', 'at', 'under', 'into'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'in: inside',
  },
  {
    scene: 'The book is _____ the table.',
    options: ['on', 'in', 'at', 'between'],
    answer: 'on',
    topic: 'place',
    tier: 1,
    rule: 'on: a surface',
  },
  {
    scene: 'The cat is hiding _____ the box.',
    options: ['under', 'on', 'above', 'opposite'],
    answer: 'under',
    topic: 'place',
    tier: 1,
    rule: 'under and below',
  },
  {
    scene: 'There is a lovely picture _____ the wall.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 1,
    rule: 'on: a surface',
  },
  {
    scene: 'The keys are _____ my pocket.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'in: inside',
  },
  {
    scene: 'The roots of a tree grow _____ the ground.',
    options: ['under', 'above', 'on', 'over'],
    answer: 'under',
    topic: 'place',
    tier: 1,
    rule: 'under and below',
  },
  {
    scene: 'Write your name _____ the top of the page.',
    options: ['at', 'in', 'under', 'behind'],
    answer: 'at',
    topic: 'place',
    tier: 1,
    rule: 'at: a point',
    facts: ['word:top', 'rule:at an edge'],
  },
  {
    scene: 'The spider is _____ the ceiling.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 1,
    rule: 'on: a surface',
  },
  {
    scene: 'Many British houses have a small cupboard _____ the stairs.',
    options: ['under', 'on', 'at'],
    answer: 'under',
    topic: 'place',
    tier: 1,
    rule: 'under and below',
  },
  {
    scene: 'There is some money _____ my wallet.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'in: inside',
  },
  {
    scene: 'The sun went _____ a cloud.',
    options: ['behind', 'in front of', 'under', 'on'],
    answer: 'behind',
    topic: 'place',
    tier: 2,
    rule: 'behind',
  },
  {
    scene: 'I could not see the board, because a tall boy was sitting _____ me.',
    options: ['in front of', 'behind', 'next to'],
    answer: 'in front of',
    topic: 'place',
    tier: 2,
    rule: 'in front of',
  },
  {
    scene: 'Sara and I share a desk, so she sits _____ me.',
    options: ['next to', 'behind', 'in front of', 'between'],
    answer: 'next to',
    topic: 'place',
    tier: 1,
    rule: 'next to',
  },
  {
    scene: 'On a computer keyboard, the Q key is _____ the W key.',
    options: ['next to', 'under', 'above', 'opposite'],
    answer: 'next to',
    topic: 'place',
    tier: 2,
    rule: 'next to',
  },
  {
    scene: 'In a queue, the second person stands _____ the first person.',
    options: ['behind', 'in front of', 'next to', 'opposite'],
    answer: 'behind',
    topic: 'place',
    tier: 2,
    rule: 'behind',
  },
  {
    scene: 'Please do not stand _____ the TV. I cannot see the screen.',
    options: ['in front of', 'behind', 'next to'],
    answer: 'in front of',
    topic: 'place',
    tier: 1,
    rule: 'in front of',
  },
  {
    scene: 'Two houses that share a wall are _____ each other.',
    options: ['next to', 'opposite', 'between'],
    answer: 'next to',
    topic: 'place',
    tier: 2,
    rule: 'next to',
  },
  {
    scene: 'He is hiding _____ the curtain.',
    options: ['behind', 'in front of', 'on', 'next to'],
    answer: 'behind',
    topic: 'place',
    tier: 1,
    rule: 'behind',
  },
  {
    scene: 'The letter B comes _____ A and C.',
    options: ['between', 'in', 'behind', 'above'],
    answer: 'between',
    topic: 'place',
    tier: 1,
    rule: 'between',
  },
  {
    scene: 'The lamp hangs _____ the table.',
    options: ['above', 'under', 'in', 'between'],
    answer: 'above',
    topic: 'place',
    tier: 1,
    rule: 'above',
  },
  {
    scene: 'Last night the temperature fell _____ zero.',
    options: ['below', 'above', 'at', 'in'],
    answer: 'below',
    topic: 'place',
    tier: 2,
    rule: 'under and below',
  },
  {
    scene: 'In a game of chess, the two players sit _____ each other.',
    options: ['opposite', 'next to', 'behind', 'between'],
    answer: 'opposite',
    topic: 'place',
    tier: 2,
    rule: 'opposite',
  },
  {
    scene: 'The village lies _____ two hills.',
    options: ['between', 'at', 'in'],
    answer: 'between',
    topic: 'place',
    tier: 1,
    rule: 'between',
  },
  {
    scene: 'Birds often build their nests high _____ the ground.',
    options: ['above', 'below', 'under'],
    answer: 'above',
    topic: 'place',
    tier: 2,
    rule: 'above',
  },
  {
    scene: 'Most of an iceberg is _____ the water.',
    options: ['below', 'above', 'on'],
    answer: 'below',
    topic: 'place',
    tier: 2,
    rule: 'under and below',
  },
  {
    scene: 'On a football pitch, the centre spot is _____ the two goals.',
    options: ['between', 'behind', 'in front of'],
    answer: 'between',
    topic: 'place',
    tier: 2,
    rule: 'between',
  },
  {
    scene: 'The roof of a house is _____ the top floor.',
    options: ['above', 'below', 'under'],
    answer: 'above',
    topic: 'place',
    tier: 1,
    rule: 'above',
  },
  {
    scene: 'I will meet you _____ the bus stop.',
    options: ['at', 'in', 'on', 'to'],
    answer: 'at',
    topic: 'place',
    tier: 1,
    rule: 'at: a point',
    facts: ['rule:meeting point'],
  },
  {
    scene: 'She lives _____ Manchester.',
    options: ['in', 'at', 'on', 'to'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'cities and countries',
    facts: ['word:village'],
  },
  {
    scene: 'My flat is _____ the third floor.',
    options: ['on', 'in', 'at', 'to'],
    answer: 'on',
    topic: 'place',
    tier: 1,
    rule: 'streets and floors',
  },
  {
    scene: 'The children are _____ home this evening.',
    options: ['at', 'in', 'on', 'to'],
    answer: 'at',
    topic: 'place',
    tier: 1,
    rule: 'home, school and work',
  },
  {
    scene: 'We stayed _____ a small hotel near the sea.',
    options: ['in', 'on', 'to'],
    answer: 'in',
    topic: 'place',
    tier: 2,
    rule: 'rooms and buildings',
  },
  {
    scene: 'There is a famous painting _____ the museum.',
    options: ['in', 'on', 'to'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'rooms and buildings',
  },
  {
    scene: 'He is waiting _____ the corner of the street.',
    options: ['at', 'in', 'to'],
    answer: 'at',
    topic: 'place',
    tier: 2,
    rule: 'at: a point',
  },
  {
    scene: 'The shop is _____ the high street.',
    options: ['on', 'at', 'to'],
    answer: 'on',
    topic: 'place',
    tier: 2,
    rule: 'streets and floors',
  },
  {
    scene: 'The students are _____ the classroom now.',
    options: ['in', 'at', 'on', 'to'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'rooms and buildings',
  },
  {
    scene: 'I saw her _____ the party last night.',
    options: ['at', 'in', 'on', 'to'],
    answer: 'at',
    topic: 'place',
    tier: 1,
    rule: 'events and meetings',
    facts: ['word:wedding'],
  },
  {
    scene: "The lesson starts _____ nine o'clock.",
    options: ['at', 'in', 'on', 'by'],
    answer: 'at',
    topic: 'time',
    tier: 1,
    rule: 'clock times',
  },
  {
    scene: 'My birthday is _____ July.',
    options: ['in', 'at', 'on', 'by'],
    answer: 'in',
    topic: 'time',
    tier: 1,
    rule: 'months, seasons and years',
    facts: ['rule:a month or a date'],
  },
  {
    scene: 'We have a meeting _____ Monday.',
    options: ['on', 'at', 'in', 'by'],
    answer: 'on',
    topic: 'time',
    tier: 1,
    rule: 'days and dates',
    facts: ['rule:a month or a date'],
  },
  {
    scene: 'It often snows _____ winter.',
    options: ['in', 'at', 'on', 'by'],
    answer: 'in',
    topic: 'time',
    tier: 1,
    rule: 'months, seasons and years',
  },
  {
    scene: 'I usually read _____ night before sleeping.',
    options: ['at', 'in', 'on'],
    answer: 'at',
    topic: 'time',
    tier: 1,
    rule: 'parts of the day',
  },
  {
    scene: 'The shop opens _____ the morning.',
    options: ['in', 'at', 'on', 'by'],
    answer: 'in',
    topic: 'time',
    tier: 1,
    rule: 'parts of the day',
    facts: ['rule:a named day and a part of it'],
  },
  {
    scene: "We always celebrate _____ New Year's Day.",
    options: ['on', 'at', 'in', 'by'],
    answer: 'on',
    topic: 'time',
    tier: 2,
    rule: 'holidays and festivals',
    facts: ['rule:named holidays'],
  },
  {
    scene: 'She was born _____ 2009.',
    options: ['in', 'at', 'on', 'by'],
    answer: 'in',
    topic: 'time',
    tier: 1,
    rule: 'months, seasons and years',
    facts: ['rule:a month or a date', 'phrase:born in'],
  },
  {
    scene: 'The train leaves _____ half past six.',
    options: ['at', 'in', 'on'],
    answer: 'at',
    topic: 'time',
    tier: 1,
    rule: 'clock times',
    facts: ['rule:in from now'],
  },
  {
    scene: 'Many people relax _____ the weekend.',
    options: ['at', 'in', 'by'],
    answer: 'at',
    topic: 'time',
    tier: 2,
    rule: 'days and dates',
  },
  {
    scene: 'The film begins _____ midnight.',
    options: ['at', 'in', 'on', 'by'],
    answer: 'at',
    topic: 'time',
    tier: 1,
    rule: 'clock times',
  },
  {
    scene: 'We are going on holiday _____ August.',
    options: ['in', 'at', 'on', 'by'],
    answer: 'in',
    topic: 'time',
    tier: 1,
    rule: 'months, seasons and years',
    facts: ['word:holiday', 'rule:a month or a date'],
  },
  {
    scene: 'My appointment is _____ Friday afternoon.',
    options: ['on', 'at', 'in', 'by'],
    answer: 'on',
    topic: 'time',
    tier: 2,
    rule: 'days and dates',
    facts: ['rule:a named day and a part of it'],
  },
  {
    scene: 'The library closes early _____ Christmas Eve.',
    options: ['on', 'at', 'in', 'by'],
    answer: 'on',
    topic: 'time',
    tier: 2,
    rule: 'holidays and festivals',
    facts: ['rule:named holidays'],
  },
  {
    scene: 'Put the ice cream _____ the freezer before it melts.',
    options: ['in', 'on', 'under', 'next to'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'in: inside',
  },
  {
    scene: 'Your eyebrows are _____ your eyes.',
    options: ['above', 'below', 'next to'],
    answer: 'above',
    topic: 'place',
    tier: 1,
    rule: 'above',
    facts: ['topic:face'],
  },
  {
    scene: 'The post office is _____ the bank and the chemist.',
    options: ['between', 'on', 'under', 'in'],
    answer: 'between',
    topic: 'place',
    tier: 1,
    rule: 'between',
  },
  {
    scene: 'A small mat lies _____ the door of our flat.',
    options: ['in front of', 'between', 'in', 'above'],
    answer: 'in front of',
    topic: 'place',
    tier: 1,
    rule: 'in front of',
  },
  {
    scene: 'The children are playing _____ the garden.',
    options: ['in', 'on', 'at', 'to'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'in: inside',
  },
  {
    scene: 'There is a goldfish _____ the bowl.',
    options: ['in', 'on', 'under', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'in: inside',
  },
  {
    scene: 'Paris is _____ France.',
    options: ['in', 'at', 'on', 'to'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'cities and countries',
  },
  {
    scene: 'Mum is _____ the bathroom.',
    options: ['in', 'at', 'on', 'to'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'rooms and buildings',
  },
  {
    scene: 'There are six eggs _____ the box.',
    options: ['in', 'on', 'at', 'under'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'in: inside',
  },
  {
    scene: 'I am holding a pen _____ my hand.',
    options: ['in', 'on', 'at', 'by'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'in: inside',
  },
  {
    scene: 'There is a sticker _____ my laptop.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 1,
    rule: 'on: a surface',
  },
  {
    scene: 'She wears a ring _____ her finger.',
    options: ['on', 'in', 'at', 'by'],
    answer: 'on',
    topic: 'place',
    tier: 1,
    rule: 'on: a surface',
  },
  {
    scene: 'Please write the date _____ the board.',
    options: ['on', 'in', 'at', 'to'],
    answer: 'on',
    topic: 'place',
    tier: 1,
    rule: 'on: a surface',
  },
  {
    scene: 'There is snow _____ the roof.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 1,
    rule: 'on: a surface',
  },
  {
    scene: 'Hang your coat _____ the hook.',
    options: ['on', 'in', 'at', 'under'],
    answer: 'on',
    topic: 'place',
    tier: 1,
    rule: 'on: a surface',
  },
  {
    scene: 'Wait for me _____ the door.',
    options: ['at', 'on', 'to'],
    answer: 'at',
    topic: 'place',
    tier: 1,
    rule: 'at: a point',
    facts: ['rule:meeting point'],
  },
  {
    scene: 'Turn left _____ the traffic lights.',
    options: ['at', 'in', 'on', 'to'],
    answer: 'at',
    topic: 'place',
    tier: 1,
    rule: 'at: a point',
    facts: ['rule:turn at'],
  },
  {
    scene: 'Sit _____ the table. Dinner is ready.',
    options: ['at', 'on', 'in', 'to'],
    answer: 'at',
    topic: 'place',
    tier: 1,
    rule: 'at: a point',
  },
  {
    scene: 'My brother is _____ school today.',
    options: ['at', 'on', 'to', 'by'],
    answer: 'at',
    topic: 'place',
    tier: 1,
    rule: 'home, school and work',
  },
  {
    scene: 'Dad is _____ work today.',
    options: ['at', 'on', 'to'],
    answer: 'at',
    topic: 'place',
    tier: 1,
    rule: 'home, school and work',
  },
  {
    scene: "Let's have a picnic _____ that big tree.",
    options: ['under', 'on', 'in'],
    answer: 'under',
    topic: 'place',
    tier: 1,
    rule: 'under and below',
  },
  {
    scene: 'Wednesday comes _____ Tuesday and Thursday.',
    options: ['between', 'after', 'before', 'on'],
    answer: 'between',
    topic: 'time',
    tier: 1,
    rule: 'between',
  },
  {
    scene: 'I go _____ school with my sister.',
    options: ['to', 'at', 'in', 'on'],
    answer: 'to',
    topic: 'place',
    tier: 1,
    rule: 'to and from',
  },
  {
    scene: 'It is late, so please go _____ bed now.',
    options: ['to', 'at', 'in', 'on'],
    answer: 'to',
    topic: 'place',
    tier: 1,
    rule: 'to and from',
  },
  {
    scene: 'Come _____ my house after school.',
    options: ['to', 'at', 'in', 'on'],
    answer: 'to',
    topic: 'place',
    tier: 1,
    rule: 'to and from',
  },
  {
    scene: 'My family comes _____ Poland.',
    options: ['from', 'in', 'at', 'of'],
    answer: 'from',
    topic: 'place',
    tier: 1,
    rule: 'to and from',
  },
  {
    scene: 'He lives _____ a small village near York.',
    options: ['in', 'at', 'on', 'to'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'cities and countries',
    facts: ['word:village'],
  },
  {
    scene: 'There is a hole _____ my sock.',
    options: ['in', 'on', 'at', 'under'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'in: inside',
  },
  {
    scene: 'The bus comes _____ 8.15 every morning.',
    options: ['at', 'in', 'on'],
    answer: 'at',
    topic: 'time',
    tier: 1,
    rule: 'clock times',
  },
  {
    scene: 'We have English _____ Tuesdays.',
    options: ['on', 'in', 'at', 'by'],
    answer: 'on',
    topic: 'time',
    tier: 1,
    rule: 'days and dates',
  },
  {
    scene: 'School starts _____ September.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'time',
    tier: 1,
    rule: 'months, seasons and years',
  },
  {
    scene: 'Leaves fall from the trees _____ autumn.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'time',
    tier: 1,
    rule: 'months, seasons and years',
  },
  {
    scene: "Let's meet _____ lunchtime.",
    options: ['at', 'in', 'on'],
    answer: 'at',
    topic: 'time',
    tier: 1,
    rule: 'parts of the day',
  },
  {
    scene: 'We have a maths test _____ the afternoon.',
    options: ['in', 'at', 'on', 'by'],
    answer: 'in',
    topic: 'time',
    tier: 1,
    rule: 'parts of the day',
  },
  {
    scene: 'My birthday is _____ 5 March.',
    options: ['on', 'in', 'at', 'by'],
    answer: 'on',
    topic: 'time',
    tier: 1,
    rule: 'days and dates',
    facts: ['rule:a month or a date'],
  },
  {
    scene: 'The cat is asleep _____ the sofa.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 1,
    rule: 'on: a surface',
  },
  {
    scene: 'Put the dirty plates _____ the sink.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'in: inside',
  },
  {
    scene: 'The baby is asleep _____ her cot.',
    options: ['in', 'on', 'at', 'under'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'in: inside',
  },
  {
    scene: 'There is a lot of traffic _____ the road today.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 1,
    rule: 'streets and floors',
  },
  {
    scene: 'The children are swimming _____ the pool.',
    options: ['in', 'on', 'to'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'in: inside',
  },
  {
    scene: 'There are lots of books _____ the shelf.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 1,
    rule: 'on: a surface',
  },
  {
    scene: 'Rome is the capital city _____ Italy.',
    options: ['of', 'in', 'at', 'from'],
    answer: 'of',
    topic: 'place',
    tier: 1,
    rule: 'cities and countries',
  },
  {
    scene: 'There are clouds _____ the sky.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 1,
    rule: 'in: inside',
  },
  {
    scene: 'A bird is sitting _____ the branch.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 1,
    rule: 'on: a surface',
  },
  {
    scene: 'I put my bag _____ the floor.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 1,
    rule: 'on: a surface',
  },
  {
    scene: 'We are flying _____ Spain tomorrow.',
    options: ['to', 'in', 'at', 'on'],
    answer: 'to',
    topic: 'place',
    tier: 1,
    rule: 'to and from',
  },
  {
    scene: 'My grandad is _____ hospital with a broken leg.',
    options: ['in', 'at', 'on'],
    answer: 'in',
    topic: 'place',
    tier: 2,
    rule: 'home, school and work',
  },
  {
    scene: 'My sister is _____ university in Leeds.',
    options: ['at', 'on', 'to'],
    answer: 'at',
    topic: 'place',
    tier: 2,
    rule: 'home, school and work',
  },
  {
    scene: 'I read about the match _____ the newspaper.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 2,
    rule: 'pages, pictures and screens',
  },
  {
    scene: 'There is a good film _____ TV tonight.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 2,
    rule: 'pages, pictures and screens',
  },
  {
    scene: 'I heard the news _____ the radio.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 2,
    rule: 'pages, pictures and screens',
  },
  {
    scene: 'The answers are _____ page 20.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 2,
    rule: 'pages, pictures and screens',
  },
  {
    scene: 'Who is the girl _____ this photo?',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 2,
    rule: 'pages, pictures and screens',
  },
  {
    scene: 'She lives _____ 24 Park Road.',
    options: ['at', 'in', 'on'],
    answer: 'at',
    topic: 'place',
    tier: 2,
    rule: 'streets and floors',
  },
  {
    scene: 'There were no seats _____ the bus, so I stood.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 2,
    rule: 'transport',
    facts: ['word:train'],
  },
  {
    scene: 'Get _____ the car, please. We are late.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 2,
    rule: 'transport',
  },
  {
    scene: 'We travelled to Glasgow _____ train.',
    options: ['by', 'on', 'in', 'with'],
    answer: 'by',
    topic: 'place',
    tier: 2,
    rule: 'transport',
  },
  {
    scene: 'We waited _____ a long queue outside the cinema.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 2,
    rule: 'in: inside',
  },
  {
    scene: "It is too hot. Let's sit _____ the shade.",
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 2,
    rule: 'in: inside',
  },
  {
    scene: 'In Britain, people drive _____ the left.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 2,
    rule: 'streets and floors',
  },
  {
    scene: 'We spent a sunny day _____ the seaside.',
    options: ['at', 'in', 'on'],
    answer: 'at',
    topic: 'place',
    tier: 2,
    rule: 'at: a point',
  },
  {
    scene: 'My grandparents live _____ a farm in Wales.',
    options: ['on', 'in', 'to'],
    answer: 'on',
    topic: 'place',
    tier: 2,
    rule: 'on: a surface',
  },
  {
    scene: 'The children built a sandcastle _____ the beach.',
    options: ['on', 'in', 'to'],
    answer: 'on',
    topic: 'place',
    tier: 2,
    rule: 'on: a surface',
  },
  {
    scene: "It is ten o'clock and the children are already _____ bed.",
    options: ['in', 'on', 'at', 'to'],
    answer: 'in',
    topic: 'place',
    tier: 2,
    rule: 'fixed phrases',
  },
  {
    scene: 'We walked home _____ the rain.',
    options: ['in', 'on', 'under'],
    answer: 'in',
    topic: 'place',
    tier: 2,
    rule: 'in: inside',
  },
  {
    scene: 'I found the answer _____ the internet.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 2,
    rule: 'pages, pictures and screens',
  },
  {
    scene: 'There is a big table _____ the middle of the room.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 2,
    rule: 'in: inside',
  },
  {
    scene: 'There is a shed _____ the bottom of the garden.',
    options: ['at', 'in', 'on'],
    answer: 'at',
    topic: 'place',
    tier: 2,
    rule: 'at: a point',
    facts: ['rule:at an edge'],
  },
  {
    scene: 'Can you find Cardiff _____ the map?',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 2,
    rule: 'pages, pictures and screens',
  },
  {
    scene: 'My face looks strange _____ this old mirror.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 2,
    rule: 'pages, pictures and screens',
  },
  {
    scene: 'Is my name _____ the list?',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 2,
    rule: 'pages, pictures and screens',
  },
  {
    scene: 'She goes to work _____ her bike.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 2,
    rule: 'transport',
  },
  {
    scene: 'Mount Everest is the highest mountain _____ the world.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 2,
    rule: 'cities and countries',
  },
  {
    scene: 'We carried the heavy boxes _____ the stairs to the top floor.',
    options: ['up', 'down', 'on'],
    answer: 'up',
    topic: 'place',
    tier: 2,
    rule: 'up, into and off',
  },
  {
    scene: 'The train went _____ a long tunnel under the hills.',
    options: ['through', 'across', 'over'],
    answer: 'through',
    topic: 'place',
    tier: 2,
    rule: 'through and over',
  },
  {
    scene: 'Go _____ the door and turn left.',
    options: ['through', 'across', 'over'],
    answer: 'through',
    topic: 'place',
    tier: 2,
    rule: 'through and over',
  },
  {
    scene: 'Sunlight came in _____ a gap in the curtains.',
    options: ['through', 'across', 'over'],
    answer: 'through',
    topic: 'place',
    tier: 2,
    rule: 'through and over',
  },
  {
    scene: 'Push the thread _____ the eye of the needle.',
    options: ['through', 'across', 'over'],
    answer: 'through',
    topic: 'place',
    tier: 2,
    rule: 'through and over',
  },
  {
    scene: 'There is an old stone bridge _____ the river.',
    options: ['over', 'under', 'in'],
    answer: 'over',
    topic: 'place',
    tier: 2,
    rule: 'above',
  },
  {
    scene: 'The horse jumped _____ the fence.',
    options: ['over', 'across', 'through'],
    answer: 'over',
    topic: 'place',
    tier: 2,
    rule: 'through and over',
  },
  {
    scene: 'A plane flew low _____ our house.',
    options: ['over', 'across', 'through'],
    answer: 'over',
    topic: 'place',
    tier: 2,
    rule: 'through and over',
  },
  {
    scene: "The ball flew _____ the goalkeeper's head and into the net.",
    options: ['over', 'across', 'through'],
    answer: 'over',
    topic: 'place',
    tier: 2,
    rule: 'through and over',
  },
  {
    scene: 'She jumped _____ the swimming pool with a big splash.',
    options: ['into', 'onto', 'on'],
    answer: 'into',
    topic: 'place',
    tier: 2,
    rule: 'up, into and off',
  },
  {
    scene: 'We got _____ the train at York.',
    options: ['off', 'out', 'down'],
    answer: 'off',
    topic: 'place',
    tier: 2,
    rule: 'up, into and off',
  },
  {
    scene: 'Please keep _____ the grass.',
    options: ['off', 'out', 'from'],
    answer: 'off',
    topic: 'place',
    tier: 2,
    rule: 'up, into and off',
  },
  {
    scene: 'He fell _____ his bike and hurt his knee.',
    options: ['off', 'out', 'down'],
    answer: 'off',
    topic: 'place',
    tier: 2,
    rule: 'up, into and off',
  },
  {
    scene: 'A button came _____ my coat.',
    options: ['off', 'out', 'down'],
    answer: 'off',
    topic: 'place',
    tier: 2,
    rule: 'up, into and off',
  },
  {
    scene: 'We have lunch _____ midday.',
    options: ['at', 'in', 'on'],
    answer: 'at',
    topic: 'time',
    tier: 2,
    rule: 'clock times',
  },
  {
    scene: 'My parents met _____ the 1990s.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'time',
    tier: 2,
    rule: 'months, seasons and years',
  },
  {
    scene: 'The holidays start _____ two weeks.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'time',
    tier: 2,
    rule: 'for, since and during',
    facts: ['rule:in from now'],
  },
  {
    scene: 'We waited _____ two hours, but the bus never came.',
    options: ['for', 'since', 'during', 'in'],
    answer: 'for',
    topic: 'time',
    tier: 2,
    rule: 'for, since and during',
  },
  {
    scene: 'I have lived here _____ 2015.',
    options: ['since', 'for', 'in', 'at'],
    answer: 'since',
    topic: 'time',
    tier: 2,
    rule: 'for, since and during',
  },
  {
    scene: 'My phone rang _____ the film.',
    options: ['during', 'for', 'since', 'while'],
    answer: 'during',
    topic: 'time',
    tier: 2,
    rule: 'for, since and during',
  },
  {
    scene: 'There is a party _____ Saturday night.',
    options: ['on', 'at', 'in'],
    answer: 'on',
    topic: 'time',
    tier: 2,
    rule: 'days and dates',
    facts: ['rule:a named day and a part of it'],
  },
  {
    scene: 'She is busy _____ the moment.',
    options: ['at', 'in', 'on'],
    answer: 'at',
    topic: 'time',
    tier: 2,
    rule: 'points in time',
  },
  {
    scene: 'The train arrived exactly _____ time.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'time',
    tier: 2,
    rule: 'fixed phrases',
  },
  {
    scene: 'We have a test _____ the start of every term.',
    options: ['at', 'in', 'on'],
    answer: 'at',
    topic: 'time',
    tier: 2,
    rule: 'points in time',
  },
  {
    scene: 'She learnt to swim _____ the age of five.',
    options: ['at', 'in', 'on', 'with'],
    answer: 'at',
    topic: 'time',
    tier: 2,
    rule: 'points in time',
  },
  {
    scene: 'The shop is open from nine _____ half past five.',
    options: ['to', 'at', 'in'],
    answer: 'to',
    topic: 'time',
    tier: 2,
    rule: 'to and from',
  },
  {
    scene: 'My little brother hides _____ me when he sees a big dog.',
    options: ['behind', 'in front of', 'next to'],
    answer: 'behind',
    topic: 'place',
    tier: 2,
    rule: 'behind',
  },
  {
    scene: 'In a race, the runner in second place finishes just _____ the winner.',
    options: ['behind', 'in front of', 'next to'],
    answer: 'behind',
    topic: 'place',
    tier: 2,
    rule: 'behind',
  },
  {
    scene: 'When you walk in a line, you follow the person _____ you.',
    options: ['in front of', 'behind', 'next to'],
    answer: 'in front of',
    topic: 'place',
    tier: 2,
    rule: 'in front of',
  },
  {
    scene: 'In a car, the driver sits _____ the passengers in the back seat.',
    options: ['in front of', 'behind', 'next to'],
    answer: 'in front of',
    topic: 'place',
    tier: 2,
    rule: 'in front of',
  },
  {
    scene: 'On your hand, the thumb is _____ the first finger.',
    options: ['next to', 'between', 'behind'],
    answer: 'next to',
    topic: 'place',
    tier: 2,
    rule: 'next to',
  },
  {
    scene: 'The basement is _____ the ground floor.',
    options: ['below', 'above', 'on'],
    answer: 'below',
    topic: 'place',
    tier: 2,
    rule: 'under and below',
  },
  {
    scene: 'Your chin is _____ your mouth.',
    options: ['below', 'above', 'behind'],
    answer: 'below',
    topic: 'place',
    tier: 2,
    rule: 'under and below',
    facts: ['topic:face'],
  },
  {
    scene: 'On a clock, the 6 is _____ the 12.',
    options: ['opposite', 'next to', 'between'],
    answer: 'opposite',
    topic: 'place',
    tier: 2,
    rule: 'opposite',
    facts: ['rule:opposite on a face'],
  },
  {
    scene: 'On a dice, the 1 is always _____ the 6.',
    options: ['opposite', 'next to', 'between'],
    answer: 'opposite',
    topic: 'place',
    tier: 2,
    rule: 'opposite',
    facts: ['rule:opposite on a face'],
  },
  {
    scene: 'On a compass, north is _____ south.',
    options: ['opposite', 'next to', 'between'],
    answer: 'opposite',
    topic: 'place',
    tier: 2,
    rule: 'opposite',
    facts: ['rule:opposite on a face'],
  },
  {
    scene: 'My brother is very interested _____ old cars.',
    options: ['in', 'on', 'about', 'for'],
    answer: 'in',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'Maya is very good _____ maths and science.',
    options: ['at', 'on', 'for', 'to'],
    answer: 'at',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'My little sister is afraid _____ the dark.',
    options: ['of', 'from', 'for', 'with'],
    answer: 'of',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'My grandmother is very proud _____ her garden.',
    options: ['of', 'with', 'from'],
    answer: 'of',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'Cornwall is famous _____ its beaches.',
    options: ['for', 'of', 'with', 'about'],
    answer: 'for',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'My new school is very different _____ my old one.',
    options: ['from', 'of', 'with', 'at'],
    answer: 'from',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'The bus was full _____ noisy children.',
    options: ['of', 'with', 'from', 'in'],
    answer: 'of',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'Be kind _____ the new boy in our class.',
    options: ['to', 'with', 'for', 'at'],
    answer: 'to',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'Dad was angry _____ me for breaking the window.',
    options: ['with', 'on', 'to', 'from'],
    answer: 'with',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'I am worried _____ my maths test tomorrow.',
    options: ['about', 'of', 'on', 'with'],
    answer: 'about',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'Your bag is very similar _____ mine.',
    options: ['to', 'with', 'as', 'from'],
    answer: 'to',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'My aunt is married _____ a doctor.',
    options: ['to', 'with', 'at', 'for'],
    answer: 'to',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'Tom is very keen _____ football.',
    options: ['on', 'in', 'of', 'at'],
    answer: 'on',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'The children are excited _____ the school trip.',
    options: ['about', 'of', 'on', 'with'],
    answer: 'about',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'Who is responsible _____ feeding the class pet?',
    options: ['for', 'of', 'about', 'with'],
    answer: 'for',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'Hurry up, or we will be late _____ school.',
    options: ['for', 'at', 'in', 'on'],
    answer: 'for',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'My friend is allergic _____ nuts.',
    options: ['to', 'of', 'with', 'from'],
    answer: 'to',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'The teacher was pleased _____ our work.',
    options: ['with', 'of', 'on', 'to'],
    answer: 'with',
    topic: 'after a word',
    tier: 3,
    rule: 'after adjectives',
  },
  {
    scene: 'Please listen _____ your teacher.',
    options: ['to', 'at', 'on', 'with'],
    answer: 'to',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'We arrived _____ the station ten minutes late.',
    options: ['at', 'to', 'on'],
    answer: 'at',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'We arrived _____ London late last night.',
    options: ['in', 'at', 'to'],
    answer: 'in',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'We are waiting _____ the bus.',
    options: ['for', 'to', 'at', 'with'],
    answer: 'for',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'I am looking _____ my keys. Have you seen them?',
    options: ['for', 'at', 'after', 'to'],
    answer: 'for',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'Our trip depends _____ the weather.',
    options: ['on', 'of', 'from', 'in'],
    answer: 'on',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'Does this pencil case belong _____ Sam?',
    options: ['to', 'at', 'of', 'for'],
    answer: 'to',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'I agree _____ you completely.',
    options: ['with', 'to', 'on', 'about'],
    answer: 'with',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'Who will pay _____ the tickets?',
    options: ['for', 'to', 'on', 'with'],
    answer: 'for',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'Please do not laugh _____ my drawing.',
    options: ['at', 'on', 'to', 'with'],
    answer: 'at',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'Do you believe _____ ghosts?',
    options: ['in', 'on', 'to', 'at'],
    answer: 'in',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'My grandad suffers _____ hay fever every summer.',
    options: ['from', 'of', 'by', 'on'],
    answer: 'from',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'I spent all my pocket money _____ sweets.',
    options: ['on', 'for', 'in', 'with'],
    answer: 'on',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'Divide the class _____ four groups.',
    options: ['into', 'on', 'to', 'at'],
    answer: 'into',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'Thank you _____ the lovely present.',
    options: ['for', 'about', 'of', 'to'],
    answer: 'for',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'Can I borrow a pen _____ you?',
    options: ['from', 'of', 'to', 'with'],
    answer: 'from',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'Please reply _____ my email.',
    options: ['to', 'on', 'at', 'for'],
    answer: 'to',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'He complained _____ the cold food.',
    options: ['about', 'on', 'for', 'at'],
    answer: 'about',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'Can you explain the rule _____ my little brother?',
    options: ['to', 'at', 'with', 'on'],
    answer: 'to',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'I bumped _____ my teacher at the shops.',
    options: ['into', 'with', 'to', 'on'],
    answer: 'into',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'She got _____ a taxi and went to the airport.',
    options: ['into', 'on', 'at'],
    answer: 'into',
    topic: 'place',
    tier: 3,
    rule: 'transport',
  },
  {
    scene: 'Can you help me _____ my homework?',
    options: ['with', 'in', 'for', 'at'],
    answer: 'with',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'Please share your sweets _____ your brother.',
    options: ['with', 'to', 'for', 'between'],
    answer: 'with',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: "Don't worry _____ me. I will be fine.",
    options: ['about', 'on', 'of', 'with'],
    answer: 'about',
    topic: 'after a word',
    tier: 3,
    rule: 'after verbs',
  },
  {
    scene: 'What is the reason _____ the delay?',
    options: ['for', 'of', 'to', 'about'],
    answer: 'for',
    topic: 'after a word',
    tier: 3,
    rule: 'after nouns',
  },
  {
    scene: 'This is a photo _____ my family.',
    options: ['of', 'about', 'at', 'on'],
    answer: 'of',
    topic: 'after a word',
    tier: 3,
    rule: 'after nouns',
  },
  {
    scene: 'Do you know the answer _____ this question?',
    options: ['to', 'of', 'on', 'at'],
    answer: 'to',
    topic: 'after a word',
    tier: 3,
    rule: 'after nouns',
  },
  {
    scene: 'We are going on a school trip _____ the zoo.',
    options: ['to', 'at', 'in', 'for'],
    answer: 'to',
    topic: 'after a word',
    tier: 3,
    rule: 'after nouns',
  },
  {
    scene: 'My dad is a big fan _____ Liverpool.',
    options: ['of', 'for', 'to', 'with'],
    answer: 'of',
    topic: 'after a word',
    tier: 3,
    rule: 'after nouns',
  },
  {
    scene: 'Sorry, I did not break it _____ purpose.',
    options: ['on', 'by', 'for', 'with'],
    answer: 'on',
    topic: 'fixed phrase',
    tier: 3,
    rule: 'fixed phrases',
    facts: ['rule:by accident'],
  },
  {
    scene: 'I took your coat _____ mistake.',
    options: ['by', 'on', 'with', 'in'],
    answer: 'by',
    topic: 'fixed phrase',
    tier: 3,
    rule: 'fixed phrases',
    facts: ['rule:by accident'],
  },
  {
    scene: 'I learnt the poem _____ heart.',
    options: ['by', 'with', 'in', 'from'],
    answer: 'by',
    topic: 'fixed phrase',
    tier: 3,
    rule: 'fixed phrases',
  },
  {
    scene: 'We met Ali _____ our way to the park.',
    options: ['on', 'in', 'at', 'by'],
    answer: 'on',
    topic: 'fixed phrase',
    tier: 3,
    rule: 'fixed phrases',
  },
  {
    scene: 'Call 999 _____ an emergency.',
    options: ['in', 'on', 'at', 'by'],
    answer: 'in',
    topic: 'fixed phrase',
    tier: 3,
    rule: 'fixed phrases',
  },
  {
    scene: "Sorry, I can't stop. I am _____ a hurry.",
    options: ['in', 'on', 'at', 'with'],
    answer: 'in',
    topic: 'fixed phrase',
    tier: 3,
    rule: 'fixed phrases',
  },
  {
    scene: 'We got to the station just _____ time to catch the train.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'fixed phrase',
    tier: 3,
    rule: 'fixed phrases',
  },
  {
    scene: 'Please finish your homework _____ Friday.',
    options: ['by', 'until', 'in'],
    answer: 'by',
    topic: 'time',
    tier: 3,
    rule: 'for, since and during',
    facts: ['word:friday'],
  },
  {
    scene: 'You can keep my book _____ Friday.',
    options: ['until', 'by', 'since'],
    answer: 'until',
    topic: 'time',
    tier: 3,
    rule: 'for, since and during',
  },
  {
    scene: 'We stayed up _____ midnight to watch the fireworks.',
    options: ['until', 'by', 'since'],
    answer: 'until',
    topic: 'time',
    tier: 3,
    rule: 'for, since and during',
  },
  {
    scene: 'I was born _____ the morning of 3 May.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'time',
    tier: 3,
    rule: 'days and dates',
    facts: ['rule:a named day and a part of it', 'rule:a month or a date'],
  },
  {
    scene: 'I have known Ali _____ six years.',
    options: ['for', 'since', 'during', 'in'],
    answer: 'for',
    topic: 'time',
    tier: 3,
    rule: 'for, since and during',
  },
  {
    scene: 'It has rained every day _____ Monday.',
    options: ['since', 'for', 'on', 'in'],
    answer: 'since',
    topic: 'time',
    tier: 3,
    rule: 'for, since and during',
  },
  {
    scene: "I have been waiting here _____ ten o'clock.",
    options: ['since', 'for', 'at', 'by'],
    answer: 'since',
    topic: 'time',
    tier: 3,
    rule: 'for, since and during',
  },
  {
    scene: 'She has worked here _____ last summer.',
    options: ['since', 'for', 'in', 'at'],
    answer: 'since',
    topic: 'time',
    tier: 3,
    rule: 'for, since and during',
  },
  {
    scene: 'He fell asleep _____ the lesson.',
    options: ['during', 'for', 'since', 'while'],
    answer: 'during',
    topic: 'time',
    tier: 3,
    rule: 'for, since and during',
  },
  {
    scene: 'The lights went out _____ the storm.',
    options: ['during', 'for', 'since', 'while'],
    answer: 'during',
    topic: 'time',
    tier: 3,
    rule: 'for, since and during',
  },
  {
    scene: 'It snowed _____ the night.',
    options: ['during', 'for', 'since', 'while'],
    answer: 'during',
    topic: 'time',
    tier: 3,
    rule: 'for, since and during',
  },
  {
    scene: "Sam: Where are you?\nMia: I'm _____ the train. I'll be home soon.",
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
  },
  {
    scene: "Leo: How old is your sister?\nZara: She's thirteen. She's _____ Year 9.",
    options: ['in', 'at', 'on'],
    answer: 'in',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
  },
  {
    scene: "Tom: What's wrong?\nAmara: I've got something _____ my eye.",
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
  },
  {
    scene: "Ali: Where did your parents meet?\nPriya: They met _____ a friend's wedding.",
    options: ['at', 'in', 'on'],
    answer: 'at',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
    facts: ['word:wedding'],
  },
  {
    scene: "Sam: Where is your dad from?\nLeo: He was born _____ Lagos. It's a huge city.",
    options: ['in', 'at', 'on'],
    answer: 'in',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
    facts: ['phrase:born in'],
  },
  {
    scene: "Mia: Where are my glasses?\nTom: They're _____ your head.",
    options: ['on', 'in', 'at'],
    answer: 'on',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
  },
  {
    scene: "Zara: Where were you yesterday?\nAli: I was _____ my grandmother's house.",
    options: ['at', 'to', 'on'],
    answer: 'at',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
    facts: ['phrase:i was at'],
  },
  {
    scene: "Leo: Where's Jack?\nPriya: He's _____ the dentist's. He has a bad tooth.",
    options: ['at', 'to', 'on'],
    answer: 'at',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
  },
  {
    scene: "Amara: Where shall we meet?\nSam: Let's meet _____ the entrance to the bus station.",
    options: ['at', 'on', 'to'],
    answer: 'at',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
    facts: ['rule:meeting point'],
  },
  {
    scene: 'Tom: Do you live near here?\nMia: Yes, I live _____ the end of this street.',
    options: ['at', 'in', 'on'],
    answer: 'at',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
    facts: ['rule:at an edge'],
  },
  {
    scene: "Priya: Where's the bathroom?\nAli: It's _____ the top of the stairs, on the right.",
    options: ['at', 'in', 'to'],
    answer: 'at',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
    facts: ['word:top', 'rule:at an edge'],
  },
  {
    scene:
      "Leo: Are you coming to my party?\nMia: Sorry, I can't. We'll be _____ holiday in Spain.",
    options: ['on', 'in', 'at', 'for'],
    answer: 'on',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
  },
  {
    scene: 'Amara: Did you get my message?\nPriya: Sorry, no. I was _____ the cinema.',
    options: ['at', 'to', 'on'],
    answer: 'at',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
    facts: ['phrase:i was at'],
  },
  {
    scene: 'Leo: Where do you live?\nZara: I live _____ a flat above a shop.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
  },
  {
    scene:
      "Amara: Where's the nearest bank?\nTom: Turn right _____ the roundabout. It's next to the café.",
    options: ['at', 'in', 'on'],
    answer: 'at',
    topic: 'place',
    tier: 3,
    rule: 'places in a dialogue',
    facts: ['rule:turn at', 'word:corner'],
  },
]

const GAP = '_____'
const DETERMINERS = new Set([
  'the',
  'a',
  'an',
  'my',
  'your',
  'his',
  'her',
  'our',
  'their',
  'its',
  'this',
  'that',
  'these',
  'those',
  'some',
  'two',
  'every',
  'each',
])
const bare = (w: string | undefined) => (w ?? '').toLowerCase().replace(/[^a-z0-9'-]/g, '')

/**
 * The word a question turns on: the word before the gap after a word
 * ("interested"), else the noun after the gap ("fridge", "Monday").
 */
export function wordOf(q: Question): string {
  const [before, after = ''] = q.scene.split(GAP)
  if (q.topic === 'after a word') return bare(before.trim().split(/\s+/).pop())
  const ws = after.trim().split(/\s+/).map(bare).filter(Boolean)
  let i = 0
  while (i < ws.length - 1 && DETERMINERS.has(ws[i])) i++
  return ws[i] ?? ''
}

export const BANK: GameBank<Question> = {
  slug: 'prepositions-of-place',
  items: QUESTION_BANK,
  // No two scenes are the same, and the scene is what the student sees.
  key: (q) => q.scene,
  answer: (q) => q.answer,
  // The page only shuffles their order.
  options: (q) => q.options,
  tag: (q) => q.topic,
  tier: (q) => q.tier,
  // The word a question turns on: two questions on one word (three on
  // Friday, two on the stairs) never share a round. And the links the build
  // script found.
  facts: (q) => [...new Set([`word:${wordOf(q)}`, ...(q.facts ?? [])])],
  // The rule a question turns on, so a round is not five of one rule.
  group: (q) => q.rule,
  deepened: '2026-10-24',
}
