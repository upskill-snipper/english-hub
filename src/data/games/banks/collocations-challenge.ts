import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Collocations Challenge: choose the verb that goes with the noun (make, do, have
 * and take), or the noun that goes with the verb.
 *
 * Moved out of src/app/games/collocations-challenge/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The game
 * marks one verb right, so no other option may be natural English. In 24 of the
 * 57 verb questions a second verb was, and a student who knew the language well
 * was marked wrong for it:
 *
 *   - two verbs as common as each other in British English: "make a decision" and
 *     "take a decision"; "do exercise" and "take exercise"; "have a holiday" and
 *     "take a holiday"; "have" and "take" a shower, a rest, a look, a break (it
 *     is asked twice), a walk and a seat; "do a course" and "take a course" (twice);
 *     "take notes" and "make notes"; "make a plan, a list, an appointment, a
 *     reservation" and "have" them ("We should have a plan" is as natural as
 *     "We should make a plan");
 *   - a second sense of the same noun: "make breakfast" and "make a cup of tea"
 *     (to prepare it) as well as "have" them (to eat or drink it), and "make
 *     something useful" (to build it) as well as "do" something useful;
 *   - a second phrase that is less common but still natural: "have medicine" for
 *     "take medicine", "have responsibility" for "take responsibility", "have
 *     business" for "do business", "have a taxi" for "take a taxi".
 *
 * In each, the verb the game wanted is still the answer, and the other natural
 * verb is replaced by "go" (the v() helper's fourth argument names the verb
 * that was replaced). In standard English "go" never takes a noun like these
 * straight after it, so it cannot be a second right answer ("go a walk" is
 * heard in Scotland, but it is dialect, and a mistake learners really make).
 * The explanations say which other verb is also possible, so the student is
 * told the truth without being marked wrong for it. The 15 noun questions,
 * which give the verb, and the other 33 verb questions are unchanged.
 *
 * ONE MORE, found by the second reader (16 October 2026). "I need to ___ a
 * decision about the job offer by Friday." still offered "have" once "take"
 * became "go", and "I need to have a decision by Friday" (to have decided by
 * then) is ordinary English. It is now "I can't ___ a decision about the job
 * offer.", where only "make" and "take" fit, and "take" is still "go".
 *
 * Eight wrong options, in six questions, stay although a phrase with them
 * exists, because that phrase is not neutral English: "take breakfast" and
 * "take a cup of tea" are formal or old-fashioned, and "do breakfast", "do a
 * cup of tea", "do a party", "do a meeting", "do a phone call" and "do a walk"
 * are informal. They are what learners write by mistake, and their
 * explanations name the register rather than call the phrase impossible.
 *
 * `collocationGroup` names the answer for the 57 verb questions. It must stay
 * out of anything shown before the answer is given
 * (a-collocation-hides-its-answer-until-it-is-given.test.tsx).
 */

export type CollocationGroup = 'make' | 'do' | 'have' | 'take' | 'noun'

export interface Collocation {
  /** Sentence containing a "___" gap */
  sentence: string
  /** Four answer choices */
  options: string[]
  /** The correct choice */
  answer: string
  /** Which collocation family this item belongs to */
  collocationGroup: CollocationGroup
}

const VERBS = ['make', 'do', 'have', 'take']

/**
 * Helper to build a standard make/do/have/take verb question.
 *
 * `alsoRight` names another of the four verbs that is natural English with this
 * noun (see the list at the top of this file). It is swapped for "go", which in
 * standard English never takes a noun like these straight after it ("go for a
 * walk", not "go a walk"), so exactly one option is right.
 */
function v(
  sentence: string,
  answer: string,
  group: CollocationGroup,
  alsoRight?: string,
): Collocation {
  return {
    sentence,
    options: VERBS.map((verb) => (verb === alsoRight ? 'go' : verb)),
    answer,
    collocationGroup: group,
  }
}

export const COLLOCATION_BANK: Collocation[] = [
  // ── MAKE ──────────────────────────────────────────────────────────────────
  v("I can't ___ a decision about the job offer.", 'make', 'make', 'take'),
  v('Please try not to ___ a mistake on the application form.', 'make', 'make'),
  v('Could you ___ an effort to arrive on time tomorrow?', 'make', 'make'),
  v('She wants to ___ a good impression at the interview.', 'make', 'make'),
  v('They are going to ___ a complaint about the noisy neighbours.', 'make', 'make'),
  v('Let me ___ a suggestion before we finish the meeting.', 'make', 'make'),
  v('We should ___ a plan for the weekend trip.', 'make', 'make', 'have'),
  v("Don't ___ a noise: the baby is sleeping.", 'make', 'make'),
  v('He had to ___ an appointment to see the dentist.', 'make', 'make', 'have'),
  v('I always ___ a list before I go food shopping.', 'make', 'make', 'have'),
  v('They want to ___ progress on the project this month.', 'make', 'make'),
  v('Can you ___ a phone call to the office for me?', 'make', 'make'),
  v('She tried to ___ friends on her first day at school.', 'make', 'make'),
  v('We need to ___ a reservation at the restaurant tonight.', 'make', 'make', 'have'),
  v('He promised to ___ an exception just this once.', 'make', 'make'),

  // ── DO ────────────────────────────────────────────────────────────────────
  v('I have to ___ my homework before I can watch television.', 'do', 'do'),
  v('Could you ___ me a favour and post this letter?', 'do', 'do'),
  v('She needs to ___ the washing-up after dinner.', 'do', 'do'),
  v('They ___ business with several companies in Europe.', 'do', 'do', 'have'),
  v('He tries to ___ exercise every morning before work.', 'do', 'do', 'take'),
  v('We must ___ some research before writing the report.', 'do', 'do'),
  v("It's my turn to ___ the housework this week.", 'do', 'do'),
  v('Please ___ your best in the exam tomorrow.', 'do', 'do'),
  v('I need to ___ the shopping on my way home.', 'do', 'do'),
  v("She's going to ___ a course in graphic design.", 'do', 'do', 'take'),
  v('Can you ___ the cooking while I clean the kitchen?', 'do', 'do'),
  v('They had to ___ the laundry at the weekend.', 'do', 'do'),
  v('He wants to ___ something useful with his free time.', 'do', 'do', 'make'),
  v("Let's ___ the dishes together so it's quicker.", 'do', 'do'),

  // ── HAVE ──────────────────────────────────────────────────────────────────
  v("I'd like to ___ a shower before we go out.", 'have', 'have', 'take'),
  v('We usually ___ breakfast at about eight o’clock.', 'have', 'have', 'make'),
  v('She wants to ___ a rest after the long journey.', 'have', 'have', 'take'),
  v("Let's ___ a chat about the holiday plans later.", 'have', 'have'),
  v('They are going to ___ a party for his birthday.', 'have', 'have'),
  v('Can I ___ a look at your photographs from the trip?', 'have', 'have', 'take'),
  v('He needs to ___ a word with his manager about the rota.', 'have', 'have'),
  v("I think I'll ___ a cup of tea before bed.", 'have', 'have', 'make'),
  v('We should ___ a meeting to discuss the budget.', 'have', 'have'),
  v('Did you ___ a good time at the concert last night?', 'have', 'have'),
  v('She is going to ___ a baby in the spring.', 'have', 'have'),
  v("Let's ___ a break: we've been working for hours.", 'have', 'have', 'take'),
  v('I need to ___ a holiday; I feel exhausted.', 'have', 'have', 'take'),
  v('Could we ___ a conversation about this in private?', 'have', 'have'),

  // ── TAKE ──────────────────────────────────────────────────────────────────
  v("Don't forget to ___ a photo of the sunset.", 'take', 'take'),
  v('She had to ___ a taxi because she missed the bus.', 'take', 'take', 'have'),
  v('I always ___ notes during important lectures.', 'take', 'take', 'make'),
  v('We should ___ a break and have some coffee.', 'take', 'take', 'have'),
  v('He needs to ___ his medicine twice a day.', 'take', 'take', 'have'),
  v('Please ___ care when you cross the busy road.', 'take', 'take'),
  v('They decided to ___ a risk and start a business.', 'take', 'take'),
  v('Can you ___ a message if she rings while I’m out?', 'take', 'take'),
  v("I'll ___ responsibility for organising the event.", 'take', 'take', 'have'),
  v('She wants to ___ a course in photography next term.', 'take', 'take', 'do'),
  v('We need to ___ action before the problem gets worse.', 'take', 'take'),
  v('He likes to ___ a walk in the park after lunch.', 'take', 'take', 'have'),
  v('Let me ___ a seat and I’ll explain everything.', 'take', 'take', 'have'),
  v('You should ___ advantage of the free training offer.', 'take', 'take'),

  // ── NOUN PARTNER (choose the noun that collocates) ─────────────────────────
  {
    sentence: 'After the accident he had to make a difficult ___ about his career.',
    options: ['decision', 'homework', 'shower', 'photo'],
    answer: 'decision',
    collocationGroup: 'noun',
  },
  {
    sentence: 'Every evening the children do their ___ at the kitchen table.',
    options: ['homework', 'decision', 'mistake', 'walk'],
    answer: 'homework',
    collocationGroup: 'noun',
  },
  {
    sentence: 'I always take a ___ of the whiteboard before the lesson ends.',
    options: ['photo', 'decision', 'favour', 'breakfast'],
    answer: 'photo',
    collocationGroup: 'noun',
  },
  {
    sentence: 'She likes to have a hot ___ as soon as she gets home from the gym.',
    options: ['shower', 'mistake', 'photo', 'research'],
    answer: 'shower',
    collocationGroup: 'noun',
  },
  {
    sentence: 'Could you do me a ___ and lock the door on your way out?',
    options: ['favour', 'decision', 'photo', 'rest'],
    answer: 'favour',
    collocationGroup: 'noun',
  },
  {
    sentence: 'He made a silly ___ in his essay and lost several marks.',
    options: ['mistake', 'shower', 'walk', 'favour'],
    answer: 'mistake',
    collocationGroup: 'noun',
  },
  {
    sentence: 'They take a long ___ along the beach every Sunday morning.',
    options: ['walk', 'decision', 'homework', 'mistake'],
    answer: 'walk',
    collocationGroup: 'noun',
  },
  {
    sentence: 'We need to do some ___ before we choose a new supplier.',
    options: ['research', 'shower', 'photo', 'party'],
    answer: 'research',
    collocationGroup: 'noun',
  },
  {
    sentence: 'After such a tiring week she just wants to have a quiet ___.',
    options: ['rest', 'mistake', 'favour', 'research'],
    answer: 'rest',
    collocationGroup: 'noun',
  },
  {
    sentence: 'The manager will make an important ___ at the meeting tomorrow.',
    options: ['announcement', 'homework', 'taxi', 'shower'],
    answer: 'announcement',
    collocationGroup: 'noun',
  },
  {
    sentence: 'They are going to have a big ___ to celebrate their anniversary.',
    options: ['party', 'mistake', 'research', 'photo'],
    answer: 'party',
    collocationGroup: 'noun',
  },
  {
    sentence: 'You should take more ___ when you handle the fragile glasses.',
    options: ['care', 'homework', 'favour', 'party'],
    answer: 'care',
    collocationGroup: 'noun',
  },
  {
    sentence: 'I always make a shopping ___ so I don’t forget anything.',
    options: ['list', 'shower', 'walk', 'rest'],
    answer: 'list',
    collocationGroup: 'noun',
  },
  {
    sentence: 'He had to take a ___ to the airport because the train was cancelled.',
    options: ['taxi', 'decision', 'homework', 'favour'],
    answer: 'taxi',
    collocationGroup: 'noun',
  },
  {
    sentence: "Let's have a short ___ about the report before lunch.",
    options: ['chat', 'mistake', 'photo', 'taxi'],
    answer: 'chat',
    collocationGroup: 'noun',
  },
]

export const BANK: GameBank<Collocation> = {
  slug: 'collocations-challenge',
  items: COLLOCATION_BANK,
  // No two sentences are the same, and the sentence is what the student sees.
  key: (q) => q.sentence,
  answer: (q) => q.answer,
  options: (q) => q.options,
  tag: (q) => (q.collocationGroup === 'noun' ? 'noun-partner' : q.collocationGroup),
}
