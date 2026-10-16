import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Where Is It?: choose the preposition that fills the gap in a short scene,
 * from four. Fourteen of the 56 are about time (at nine o'clock, in July).
 *
 * Moved out of src/app/games/prepositions-of-place/page.tsx on 16 October
 * 2026, when every answer gained an explanation
 * (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations, and
 * again when a second reader checked them). A gap such as "The book is _____
 * the table" comes with no picture, so any option that makes a natural
 * sentence is a second right answer, and a student who chose it was marked
 * wrong. In 21 of the 56 one was plainly there:
 *
 *   - the milk could be 'on' the fridge, the book 'under' the table, the dog
 *     'in' the bed (or 'opposite' it), the mat 'behind' the front door, the
 *     post office 'opposite' the bank and the chemist, the painting 'at' the
 *     museum, and the village 'behind' the hills;
 *   - B does come 'next to' A and C, as well as between them;
 *   - "We stayed ___ a small hotel" is as good with 'at' as with 'in', and "He
 *     is waiting ___ the corner of the street" with 'on';
 *   - "The shop is ___ the high street" is as British with 'in' as with 'on'
 *     (the old one-line explanation said British English says 'on', which is
 *     not so); "relax ___ the weekend" is fine with the American 'on'; "read
 *     ___ night" is fine with the idiom 'by night';
 *   - birds fly below clouds at least as often as above them, and the cat
 *     could sit on two cushions: those two scenes now carry a clue, as the
 *     bank's other scenes already did ("higher up", "one on each side"), and
 *     so does the village ("in the valley");
 *   - "higher up" never says higher than WHAT, so a shelf could be 'next to'
 *     the desk and a clock 'next to' the door, high on the wall, and birds
 *     could fly 'in' clouds that are high themselves: 'next to' is now
 *     'between' in those two questions, and the birds' scene says the clouds
 *     are lower than the birds;
 *   - ", just across the street" could describe where the library is, so the
 *     café could be 'next to' it or 'in' it: the scene now says the street is
 *     between them;
 *   - ", lower on the form" could describe the dotted line, so 'above' fitted:
 *     the scene now says "in the space under it";
 *   - a car park at ground level can lie under the upper floors of a shop, so
 *     'on' fitted "underneath the shop": the scene now says it is underground;
 *   - a school can have a back gate, so 'behind' fitted: it is now "the main
 *     gate".
 *
 * Where an option was the fault it is replaced by one that cannot fit the
 * scene (usually 'between' with a single thing, or 'under' and 'at' with time
 * words). Twenty-one questions changed (numbered from the top of the list):
 * 1, 2, 6, 12, 19, 21, 22, 23, 24, 25, 27, 28, 33, 34, 35, 36, 43, 48, 54, 55
 * and 56. The other 35 are unchanged.
 *
 * In question 36 'at' had also become 'above', with no reason given. A second
 * reader put 'at' back (16 October 2026): "The shop is at the high street" is
 * not natural English, so it was never a second right answer.
 *
 * The one-line `why` each question carried is gone: its explanation replaces
 * it, and nothing else read it. Each question now carries its topic, from the
 * section it sat in (place, or time), so a student's results can say which
 * they find hard.
 */

export interface Question {
  scene: string
  options: [string, string, string, string]
  answer: string
  /** From the section the question sat in: fourteen are time, the rest place. */
  topic: 'place' | 'time'
}

export const QUESTION_BANK: Question[] = [
  // Place: in / on / under
  {
    scene: 'The milk is _____ the fridge.',
    options: ['in', 'between', 'under', 'above'],
    answer: 'in',
    topic: 'place',
  },
  {
    scene: 'The book is _____ the table.',
    options: ['on', 'in', 'at', 'between'],
    answer: 'on',
    topic: 'place',
  },
  {
    scene: 'The cat is _____ the box, hiding completely.',
    options: ['under', 'on', 'above', 'opposite'],
    answer: 'under',
    topic: 'place',
  },
  {
    scene: 'There is a lovely picture _____ the wall.',
    options: ['on', 'in', 'at', 'under'],
    answer: 'on',
    topic: 'place',
  },
  {
    scene: 'The keys are _____ my pocket.',
    options: ['in', 'on', 'above', 'between'],
    answer: 'in',
    topic: 'place',
  },
  {
    scene: 'The dog is sleeping _____ the bed.',
    options: ['under', 'between', 'at', 'above'],
    answer: 'under',
    topic: 'place',
  },
  {
    scene: 'Write your name _____ the top of the page.',
    options: ['at', 'in', 'under', 'behind'],
    answer: 'at',
    topic: 'place',
  },
  {
    scene: 'The spider is _____ the ceiling.',
    options: ['on', 'in', 'under', 'next to'],
    answer: 'on',
    topic: 'place',
  },
  {
    scene: 'My shoes are _____ the stairs.',
    options: ['under', 'in', 'above', 'between'],
    answer: 'under',
    topic: 'place',
  },
  {
    scene: 'There is some money _____ my wallet.',
    options: ['in', 'on', 'at', 'above'],
    answer: 'in',
    topic: 'place',
  },

  // behind / in front of / next to
  {
    scene: 'The car is parked _____ the house, out of sight.',
    options: ['behind', 'in front of', 'on', 'above'],
    answer: 'behind',
    topic: 'place',
  },
  {
    scene: 'The bus stop is right _____ the school, by the main gate.',
    options: ['in front of', 'behind', 'under', 'in'],
    answer: 'in front of',
    topic: 'place',
  },
  {
    scene: 'Sara sits _____ me; our desks are side by side.',
    options: ['next to', 'behind', 'under', 'above'],
    answer: 'next to',
    topic: 'place',
  },
  {
    scene: 'The bin is _____ the door, just beside it.',
    options: ['next to', 'in', 'above', 'opposite'],
    answer: 'next to',
    topic: 'place',
  },
  {
    scene: 'The garden is _____ the house, at the back.',
    options: ['behind', 'in front of', 'on', 'at'],
    answer: 'behind',
    topic: 'place',
  },
  {
    scene: 'A tall tree stands _____ the window, blocking the view outwards.',
    options: ['in front of', 'behind', 'under', 'in'],
    answer: 'in front of',
    topic: 'place',
  },
  {
    scene: 'The chemist is _____ the bakery, right beside it.',
    options: ['next to', 'above', 'under', 'opposite'],
    answer: 'next to',
    topic: 'place',
  },
  {
    scene: 'He is hiding _____ the curtain so nobody can see him.',
    options: ['behind', 'in front of', 'on', 'next to'],
    answer: 'behind',
    topic: 'place',
  },

  // between / above / below / opposite
  {
    scene: 'The letter B comes _____ A and C.',
    options: ['between', 'in', 'behind', 'above'],
    answer: 'between',
    topic: 'place',
  },
  {
    scene: 'The lamp hangs _____ the table, higher up.',
    options: ['above', 'under', 'in', 'between'],
    answer: 'above',
    topic: 'place',
  },
  {
    scene: 'Sign your name _____ the dotted line, in the space under it.',
    options: ['below', 'above', 'in', 'behind'],
    answer: 'below',
    topic: 'place',
  },
  {
    scene: 'The café is _____ the library; the street is between them.',
    options: ['opposite', 'next to', 'under', 'in'],
    answer: 'opposite',
    topic: 'place',
  },
  {
    scene: 'The village lies _____ the two hills, in the valley.',
    options: ['between', 'above', 'on', 'at'],
    answer: 'between',
    topic: 'place',
  },
  {
    scene: 'Birds are flying _____ the clouds; the clouds are lower than the birds.',
    options: ['above', 'below', 'in', 'next to'],
    answer: 'above',
    topic: 'place',
  },
  {
    scene: 'The car park is _____ ground level; it is underground, under the shop.',
    options: ['below', 'above', 'on', 'opposite'],
    answer: 'below',
    topic: 'place',
  },
  {
    scene: 'My house is _____ the park; I can see it from my front door.',
    options: ['opposite', 'between', 'in', 'under'],
    answer: 'opposite',
    topic: 'place',
  },
  {
    scene: 'The cat is sitting _____ the two cushions, one on each side.',
    options: ['between', 'above', 'on', 'behind'],
    answer: 'between',
    topic: 'place',
  },
  {
    scene: 'The shelf is _____ the desk, fixed higher on the wall.',
    options: ['above', 'under', 'in', 'between'],
    answer: 'above',
    topic: 'place',
  },

  // Place: at / in / on (location contrast)
  {
    scene: 'I will meet you _____ the bus stop.',
    options: ['at', 'in', 'on', 'under'],
    answer: 'at',
    topic: 'place',
  },
  {
    scene: 'She lives _____ Manchester.',
    options: ['in', 'at', 'on', 'above'],
    answer: 'in',
    topic: 'place',
  },
  {
    scene: 'My flat is _____ the third floor.',
    options: ['on', 'in', 'at', 'under'],
    answer: 'on',
    topic: 'place',
  },
  {
    scene: 'The children are _____ home this evening.',
    options: ['at', 'in', 'on', 'behind'],
    answer: 'at',
    topic: 'place',
  },
  {
    scene: 'We stayed _____ a small hotel near the sea.',
    options: ['in', 'on', 'behind', 'above'],
    answer: 'in',
    topic: 'place',
  },
  {
    scene: 'There is a famous painting _____ the museum.',
    options: ['in', 'between', 'on', 'under'],
    answer: 'in',
    topic: 'place',
  },
  {
    scene: 'He is waiting _____ the corner of the street.',
    options: ['at', 'in', 'under', 'between'],
    answer: 'at',
    topic: 'place',
  },
  {
    scene: 'The shop is _____ the high street.',
    options: ['on', 'between', 'at', 'under'],
    answer: 'on',
    topic: 'place',
  },
  {
    scene: 'The students are _____ the classroom now.',
    options: ['in', 'at', 'on', 'above'],
    answer: 'in',
    topic: 'place',
  },
  {
    scene: 'I saw her _____ the party last night.',
    options: ['at', 'in', 'on', 'behind'],
    answer: 'at',
    topic: 'place',
  },

  // Time: at / in / on
  {
    scene: "The lesson starts _____ nine o'clock.",
    options: ['at', 'in', 'on', 'by'],
    answer: 'at',
    topic: 'time',
  },
  {
    scene: 'My birthday is _____ July.',
    options: ['in', 'at', 'on', 'under'],
    answer: 'in',
    topic: 'time',
  },
  {
    scene: 'We have a meeting _____ Monday.',
    options: ['on', 'at', 'in', 'by'],
    answer: 'on',
    topic: 'time',
  },
  {
    scene: 'It often snows _____ winter.',
    options: ['in', 'at', 'on', 'above'],
    answer: 'in',
    topic: 'time',
  },
  {
    scene: 'I usually read _____ night before sleeping.',
    options: ['at', 'in', 'on', 'under'],
    answer: 'at',
    topic: 'time',
  },
  {
    scene: 'The shop opens _____ the morning.',
    options: ['in', 'at', 'on', 'under'],
    answer: 'in',
    topic: 'time',
  },
  {
    scene: "We always celebrate _____ New Year's Day.",
    options: ['on', 'at', 'in', 'by'],
    answer: 'on',
    topic: 'time',
  },
  {
    scene: 'She was born _____ 2009.',
    options: ['in', 'at', 'on', 'by'],
    answer: 'in',
    topic: 'time',
  },
  {
    scene: 'The train leaves _____ half past six.',
    options: ['at', 'in', 'on', 'under'],
    answer: 'at',
    topic: 'time',
  },
  {
    scene: 'Many people relax _____ the weekend.',
    options: ['at', 'in', 'under', 'by'],
    answer: 'at',
    topic: 'time',
  },
  {
    scene: 'The film begins _____ midnight.',
    options: ['at', 'in', 'on', 'by'],
    answer: 'at',
    topic: 'time',
  },
  {
    scene: 'We are going on holiday _____ August.',
    options: ['in', 'at', 'on', 'under'],
    answer: 'in',
    topic: 'time',
  },
  {
    scene: 'My appointment is _____ Friday afternoon.',
    options: ['on', 'at', 'in', 'by'],
    answer: 'on',
    topic: 'time',
  },
  {
    scene: 'The library closes early _____ Christmas Eve.',
    options: ['on', 'at', 'in', 'by'],
    answer: 'on',
    topic: 'time',
  },

  // Mixed place review
  {
    scene: 'The umbrella is _____ the bag, tucked inside.',
    options: ['in', 'on', 'above', 'opposite'],
    answer: 'in',
    topic: 'place',
  },
  {
    scene: 'The clock is _____ the door, fixed higher up.',
    options: ['above', 'under', 'in', 'between'],
    answer: 'above',
    topic: 'place',
  },
  {
    scene: 'The post office is _____ the bank and the chemist.',
    options: ['between', 'on', 'under', 'in'],
    answer: 'between',
    topic: 'place',
  },
  {
    scene: 'A small mat lies _____ the front door.',
    options: ['in front of', 'between', 'in', 'above'],
    answer: 'in front of',
    topic: 'place',
  },
]

export const BANK: GameBank<Question> = {
  slug: 'prepositions-of-place',
  items: QUESTION_BANK,
  // No two scenes are the same, and the scene is what the student sees.
  key: (q) => q.scene,
  answer: (q) => q.answer,
  // The same four every time; the page only shuffles their order.
  options: (q) => q.options,
  tag: (q) => q.topic,
}
