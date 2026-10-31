import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Collocations Challenge: choose the word that goes with its partner (a verb
 * with a noun, an adjective with a noun), or spot the pair that is not
 * natural English.
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
 * In each, the verb the game wanted was kept as the answer and the other natural
 * verb replaced by "go".
 *
 * REBUILT FOR DEPTH (24 October 2026; the audit is
 * .tmp-games-audit/REPORT-eal.md). The audit found that "go" was offered in
 * 24 of the 57 verb questions and was never right, so it could be struck out
 * at sight; that "make a difficult ___" offered decision, homework and shower,
 * nouns no one would put there; that 14 of the 15 noun questions only asked
 * a verb question's partnership the other way round; and that the bank knew
 * four verbs.
 *
 *   - The "go" questions: where one natural verb could be made the only one by
 *     the sentence, it was (make a plan, an appointment, a list, a
 *     reservation; do business), with "take" back among the options and each
 *     question's sentence, so its key, new. The other 19 were removed, as both
 *     verbs are natural English and no sentence can make one wrong: a
 *     decision, exercise, a course (twice), something useful, a shower,
 *     breakfast, a rest, a look, a cup of tea, a break (twice), a holiday, a
 *     taxi, notes, medicine, responsibility, a walk and a seat. "Go" is now
 *     offered only where it is wrong for a reason a student can learn (go
 *     football: we play it) or the answer (go swimming, go for a walk).
 *   - The 14 mirrored noun questions were removed. The one that asked
 *     something new, "make an important ___", keeps its sentence and now offers
 *     announcement among news, advice and information: things you tell
 *     people, of which only one can follow "an".
 *   - The other 33 questions are kept as they were, each now with a tier.
 *   - Added, to 240 questions, 80 at each tier: 36 more verbs (pay, catch,
 *     keep, give, get, say, tell, play, ride, drive, win, lose, miss, break,
 *     spend, hold, fall and others); noun questions that fix the verb and ask
 *     for its partner, none of them a verb question turned round; adjective
 *     and adverb partners (heavy rain, fast asleep); 27 odd-one-out
 *     questions, whose one wrong pair is a mistake learners make ("make
 *     homework", "lose the bus"); and at tier 3, 21 short dialogues and 39
 *     real lines from twelve held texts. Where a second option was also
 *     natural British English ("have a seat", "take the train"), it was left
 *     out of the options.
 *   - `facts` keeps apart questions that test the same partnership or show it
 *     (an odd-one-out question shows three natural pairs), so no round
 *     answers one question in another.
 *
 * `collocationGroup` names the answer for the verb questions (make, pay, ...). It
 * must stay out of anything shown before the answer is given
 * (a-collocation-hides-its-answer-until-it-is-given.test.tsx).
 *
 * CHECKED (31 October 2026) by a second reader, every question, real line and
 * explanation, each wrong option tried in its sentence. Six changed:
 *   - "Let's ___ a picnic": "give a picnic" (to host one) is good if
 *     old-fashioned English, and "do a picnic" is said; they are now "go" and
 *     "spend", which no one could defend.
 *   - "We ___ our summer holidays in Wales": "pass the summer" is recorded
 *     English for spending time; "pass" is now "go".
 *   - "Let me ___ a suggestion before we finish the meeting": a chair can
 *     "take a suggestion", and "Let me have a suggestion" asks for one. The
 *     sentence is now "Can I ___ a suggestion? Why don't we meet on Monday
 *     instead?", where the speaker is plainly offering one.
 *   - "I will ___ no promise of the kind": out of its scene, "I will have no
 *     promise" and "take no promise" (I will accept none) can be argued; the
 *     options are now make, do, say and tell.
 *   - "and ___ asleep" (Frankenstein): "dropped asleep" is good, if dated,
 *     British English; "dropped" is now "became".
 *   - "Rochester lay stretched motionless" left out the "Mr." that Jane Eyre
 *     prints; the line now begins "Mr. Rochester".
 * The other 38 real lines were found whole, the gap filled, in the chapter,
 * stave or scene their source names. Informal "do" (do a party, do a selfie,
 * do a list) stays a wrong option, as the writer had it, and its explanation
 * says that it is only informal.
 */

export type CollocationGroup =
  | 'make'
  | 'do'
  | 'have'
  | 'take'
  | 'pay'
  | 'catch'
  | 'keep'
  | 'give'
  | 'get'
  | 'say'
  | 'tell'
  | 'speak'
  | 'sing'
  | 'play'
  | 'go'
  | 'ride'
  | 'drive'
  | 'watch'
  | 'look'
  | 'hear'
  | 'win'
  | 'lose'
  | 'miss'
  | 'break'
  | 'fall'
  | 'spend'
  | 'ask'
  | 'let'
  | 'shake'
  | 'hold'
  | 'set'
  | 'run'
  | 'reach'
  | 'cost'
  | 'pass'
  | 'waste'
  | 'save'
  | 'score'
  | 'change'
  | 'reserve'
  | 'noun'
  | 'adjective'
  | 'adverb'
  | 'odd'

export interface Collocation {
  /** Sentence containing a "___" gap; for an odd-one-out question, its prompt */
  sentence: string
  /** Four answer choices */
  options: string[]
  /** The correct choice */
  answer: string
  /** Which collocation family this item belongs to */
  collocationGroup: CollocationGroup
  /** 1 an A1 partnership; 2 A2, and telling near neighbours apart; 3 B1, in a short text, a dialogue or a real line. */
  tier: 1 | 2 | 3
  /**
   * 'odd': the student picks the one pair that is not natural English, and the
   * options are whole pairs ("make a decision"). Otherwise the student fills the gap.
   */
  kind?: 'odd'
  /**
   * The partnerships the question tests or names, as 'verb:noun' (or
   * 'adjective:noun'), with any word they share with another question; no
   * round holds two that share one (BANK.facts).
   */
  facts: readonly string[]
  /** Where a real line comes from, shown under it. Absent where the sentence is the site's own. */
  source?: string
}

const VERBS = ['make', 'do', 'have', 'take']

/** A make, do, have or take question: the four verbs, in this order. */
function v(
  sentence: string,
  answer: string,
  tier: 1 | 2 | 3,
  facts: readonly string[],
): Collocation {
  return {
    sentence,
    options: [...VERBS],
    answer,
    collocationGroup: answer as CollocationGroup,
    tier,
    facts,
  }
}

/** Any other gap question: its own four options, and a source where the line is real. */
function q(
  sentence: string,
  options: string[],
  answer: string,
  collocationGroup: CollocationGroup,
  tier: 1 | 2 | 3,
  facts: readonly string[],
  source?: string,
): Collocation {
  return { sentence, options, answer, collocationGroup, tier, facts, ...(source ? { source } : {}) }
}

/** The prompt every odd-one-out question shows. */
export const ODD_PROMPT = 'Which of these is not natural English?'

/** An odd-one-out question: four pairs, one of them not natural English. */
function odd(
  options: string[],
  answer: string,
  tier: 1 | 2 | 3,
  facts: readonly string[],
): Collocation {
  return {
    sentence: ODD_PROMPT,
    options,
    answer,
    collocationGroup: 'odd',
    tier,
    kind: 'odd',
    facts,
  }
}

export const COLLOCATION_BANK: Collocation[] = [
  // ── Tier 1: A1 partnerships ──────────────────────────────────────────────
  v("Don't ___ a noise: the baby is sleeping.", 'make', 1, ['make:noise', 'noise']),
  v('Can you ___ a phone call to the office for me?', 'make', 1, ['make:call', 'call']),
  v('She tried to ___ friends on her first day at school.', 'make', 1, ['make:friend']),
  v('I have to ___ my homework before I can watch television.', 'do', 1, [
    'do:homework',
    'homework',
    'watch:television',
  ]),
  v('She needs to ___ the washing-up after dinner.', 'do', 1, ['do:washing-up']),
  v("It's my turn to ___ the housework this week.", 'do', 1, ['do:housework']),
  v('Please ___ your best in the exam tomorrow.', 'do', 1, ['do:best']),
  v('I need to ___ the shopping on my way home.', 'do', 1, ['do:shopping', 'shopping']),
  v('Can you ___ the cooking while I clean the kitchen?', 'do', 1, ['do:cooking']),
  v("Let's ___ the dishes together so it's quicker.", 'do', 1, ['do:dish']),
  v('They are going to ___ a party for his birthday.', 'have', 1, ['have:party']),
  v('Did you ___ a good time at the concert last night?', 'have', 1, ['have:time', 'time']),
  v('She is going to ___ a baby in the spring.', 'have', 1, ['have:baby']),
  v("Don't forget to ___ a photo of the sunset.", 'take', 1, ['take:photo']),
  v('Please ___ care when you cross the busy road.', 'take', 1, ['take:care']),

  v('Don’t ___ a mess in the kitchen.', 'make', 1, ['make:mess']),
  v('Close your eyes and ___ a wish.', 'make', 1, ['make:wish']),
  v('She can ___ a paper plane in one minute.', 'make', 1, ['make:plane']),
  v('Let’s go outside and ___ a snowman.', 'make', 1, ['make:snowman']),
  v('Funny films always ___ me laugh.', 'make', 1, ['make:laugh', 'laugh']),
  v('I ___ the ironing on Sundays.', 'do', 1, ['do:ironing']),
  q('My sisters ___ judo after school.', ['do', 'play', 'make', 'go'], 'do', 'do', 1, ['do:judo']),
  v('Please ___ exercise 4 on page 20.', 'do', 1, ['do:exercise']),
  v('I can’t ___ this puzzle. It is too hard.', 'do', 1, ['do:puzzle']),
  v('I need to ___ my hair before the party.', 'do', 1, ['do:hair']),
  v('Can you ___ the gardening this weekend?', 'do', 1, ['do:gardening']),
  v('Did you ___ well in the test?', 'do', 1, ['do:well']),
  v('I ___ a lot of sport to stay fit.', 'do', 1, ['do:sport']),
  q('We ___ fun at the beach.', ['had', 'made', 'did', 'took'], 'had', 'have', 1, [
    'have:fun',
    'fun',
  ]),
  q('I ___ a strange dream last night.', ['had', 'made', 'did', 'took'], 'had', 'have', 1, [
    'have:dream',
  ]),
  q('She ___ a headache, so she lay down.', ['had', 'made', 'did', 'took'], 'had', 'have', 1, [
    'have:headache',
  ]),
  v('Did you ___ a good weekend?', 'have', 1, ['have:weekend']),
  q('Let’s ___ a picnic in the park.', ['have', 'make', 'go', 'spend'], 'have', 'have', 1, [
    'have:picnic',
  ]),
  q('Our cat ___ four kittens last night.', ['had', 'made', 'did', 'took'], 'had', 'have', 1, [
    'have:kitten',
  ]),
  q('I ___ a cold, so I am staying in bed.', ['have', 'catch', 'make', 'take'], 'have', 'have', 1, [
    'have:cold',
    'cold',
  ]),
  v('You ___ a lovely smile.', 'have', 1, ['have:smile']),
  v('Can I ___ a go on your bike?', 'have', 1, ['have:go']),
  q('We ___ a good laugh at the funny film.', ['had', 'made', 'did', 'took'], 'had', 'have', 1, [
    'have:laugh',
    'laugh',
  ]),
  v('I ___ a good idea. Why don’t we paint the fence?', 'have', 1, ['have:idea']),
  v('Can you ___ the dog for a walk?', 'take', 1, ['take:dog']),

  v('It will ___ ten minutes to walk to the shop.', 'take', 1, ['take:minutes', 'take time']),
  q('I ___ the lift to the fifth floor.', ['took', 'made', 'did', 'had'], 'took', 'take', 1, [
    'take:lift',
    'lift',
  ]),
  v('You can ___ your time. There is no rush.', 'take', 1, ['take:time', 'take time']),
  q('Let’s ___ a selfie by the lake.', ['take', 'make', 'do', 'give'], 'take', 'take', 1, [
    'take:selfie',
  ]),
  q('Can you ___ me the time, please?', ['tell', 'say', 'speak', 'talk'], 'tell', 'tell', 1, [
    'tell:time',
  ]),
  q('Can you ___ me your name?', ['tell', 'say', 'speak', 'talk'], 'tell', 'tell', 1, [
    'tell:name',
  ]),
  q('Please ___ sorry to your sister.', ['say', 'tell', 'speak', 'talk'], 'say', 'say', 1, [
    'say:sorry',
  ]),
  q('I have to ___ goodbye now.', ['say', 'tell', 'speak', 'talk'], 'say', 'say', 1, [
    'say:goodbye',
  ]),
  q('Can you ___ English?', ['speak', 'talk', 'say', 'tell'], 'speak', 'speak', 1, [
    'speak:english',
  ]),
  q('Grandma, can you ___ me a story?', ['tell', 'say', 'speak', 'talk'], 'tell', 'tell', 1, [
    'tell:story',
  ]),
  q('Please ___ hello to your mum for me.', ['say', 'tell', 'speak', 'talk'], 'say', 'say', 1, [
    'say:hello',
  ]),
  q('Let’s ___ a song together.', ['sing', 'say', 'tell', 'speak'], 'sing', 'sing', 1, [
    'sing:song',
  ]),
  q('We ___ football in the park.', ['play', 'do', 'make', 'go'], 'play', 'play', 1, [
    'play:football',
  ]),
  q('I ___ swimming every Saturday.', ['go', 'play', 'make', 'take'], 'go', 'go', 1, [
    'go:swimming',
  ]),
  q('Can you ___ the piano?', ['play', 'go', 'make', 'do'], 'play', 'play', 1, ['play:piano']),
  q('Let’s ___ a game of cards.', ['play', 'make', 'do', 'go'], 'play', 'play', 1, ['play:game']),
  q('Can your sister ___ a car yet?', ['drive', 'ride', 'conduct', 'lead'], 'drive', 'drive', 1, [
    'drive:car',
  ]),
  q('I ___ my bike to school.', ['ride', 'drive', 'go', 'conduct'], 'ride', 'ride', 1, [
    'ride:bike',
  ]),
  q('We ___ shopping on Saturday.', ['go', 'do', 'make', 'take'], 'go', 'go', 1, [
    'go:shopping',
    'shopping',
  ]),
  q('I ___ to bed at ten o’clock.', ['go', 'make', 'do', 'take'], 'go', 'go', 1, ['go:bed']),
  q('I ___ television every evening.', ['watch', 'see', 'look', 'read'], 'watch', 'watch', 1, [
    'watch:television',
  ]),
  q('Please ___ at the board.', ['look', 'see', 'watch', 'view'], 'look', 'look', 1, [
    'look:board',
    'look',
  ]),
  q('Did you ___ that noise outside?', ['hear', 'listen', 'sound', 'feel'], 'hear', 'hear', 1, [
    'hear:noise',
    'noise',
  ]),
  q('Did you ___ the match?', ['win', 'gain', 'earn', 'beat'], 'win', 'win', 1, ['win:match']),
  q('Don’t ___ your keys again.', ['lose', 'miss', 'fail', 'waste'], 'lose', 'lose', 1, [
    'lose:key',
  ]),
  q(
    'Hurry up or we will ___ the start of the film.',
    ['miss', 'lose', 'fail', 'drop'],
    'miss',
    'miss',
    1,
    ['miss:start'],
  ),
  q('Can I ___ by card?', ['pay', 'make', 'do', 'give'], 'pay', 'pay', 1, ['pay:card']),
  q('Can you ___ me a hand with this box?', ['give', 'make', 'do', 'take'], 'give', 'give', 1, [
    'give:hand',
  ]),
  q('Let’s ___ in touch after the holidays.', ['keep', 'make', 'do', 'take'], 'keep', 'keep', 1, [
    'keep:touch',
  ]),
  q('Please ___ quiet in the library.', ['keep', 'make', 'do', 'take'], 'keep', 'keep', 1, [
    'keep:quiet',
  ]),
  q('Can I ___ a question?', ['ask', 'make', 'do', 'say'], 'ask', 'ask', 1, ['ask:question']),
  q('Please ___ me your phone number.', ['give', 'make', 'do', 'take'], 'give', 'give', 1, [
    'give:number',
  ]),
  q('Come here and ___ me a hug.', ['give', 'make', 'do', 'take'], 'give', 'give', 1, ['give:hug']),
  q('Can you ___ me a lift to the station?', ['give', 'make', 'do', 'take'], 'give', 'give', 1, [
    'give:lift',
    'lift',
  ]),
  q('Please ___ me know when you arrive.', ['let', 'make', 'do', 'give'], 'let', 'let', 1, [
    'let:know',
  ]),
  q(
    'I’ll throw the ball to you. Try to ___ it.',
    ['catch', 'take', 'keep', 'win'],
    'catch',
    'catch',
    1,
    ['catch:ball'],
  ),
  q('Hurry up and ___ dressed. We are late.', ['get', 'make', 'do', 'take'], 'get', 'get', 1, [
    'get:dressed',
  ]),
  q(
    'Stay close, or you will ___ lost in the big city.',
    ['get', 'make', 'do', 'take'],
    'get',
    'get',
    1,
    ['get:lost'],
  ),
  q('We ___ our summer holidays in Wales.', ['spend', 'go', 'make', 'do'], 'spend', 'spend', 1, [
    'spend:holiday',
    'spend',
  ]),
  q(
    'At least ___ hands.',
    ['shake', 'give', 'make', 'do'],
    'shake',
    'shake',
    1,
    ['shake:hand'],
    'Charlotte Brontë, Jane Eyre, Chapter 15',
  ),

  // ── Tier 2: A2 partnerships, and near neighbours ─────────────────────────
  v('Please try not to ___ a mistake on the application form.', 'make', 2, ['make:mistake']),
  v('Could you ___ an effort to arrive on time tomorrow?', 'make', 2, ['make:effort']),
  v("Let's sit down and ___ a plan for the trip.", 'make', 2, ['make:plan']),
  v('Phone the surgery and ___ an appointment for Monday.', 'make', 2, ['make:appointment']),
  v('Before I go to the shops, I sit down and ___ a list.', 'make', 2, ['make:list']),
  v('Phone the restaurant and ___ a reservation for eight o’clock.', 'make', 2, [
    'make:reservation',
  ]),
  v('Could you ___ me a favour and post this letter?', 'do', 2, ['do:favour', 'favour']),
  v('We must ___ some research before writing the report.', 'do', 2, ['do:research']),
  v('They had to ___ the laundry at the weekend.', 'do', 2, ['do:laundry']),
  v("Let's ___ a chat about the holiday plans later.", 'have', 2, ['have:chat']),
  v('He needs to ___ a word with his manager about the rota.', 'have', 2, ['have:word']),
  v('We should ___ a meeting to discuss the budget.', 'have', 2, ['have:meeting']),
  v('Could we ___ a conversation about this in private?', 'have', 2, ['have:conversation']),
  v('They decided to ___ a risk and start a business.', 'take', 2, ['take:risk']),
  v('Can you ___ a message if she rings while I’m out?', 'take', 2, ['take:message']),

  q(
    'Please make your ___ before you go to school.',
    ['bed', 'homework', 'ironing', 'shopping'],
    'bed',
    'noun',
    2,
    ['make:bed', 'do:homework', 'do:ironing'],
  ),
  q(
    'Can you do the ___ before the guests arrive?',
    ['vacuuming', 'mistake', 'noise', 'mess'],
    'vacuuming',
    'noun',
    2,
    ['do:vacuuming'],
  ),
  q(
    'Let’s have a ___ in the garden on Saturday.',
    ['barbecue', 'homework', 'mess', 'noise'],
    'barbecue',
    'noun',
    2,
    ['have:barbecue'],
  ),
  q(
    'We have to catch the ___ at nine, so be quick.',
    ['train', 'car', 'bike', 'van'],
    'train',
    'noun',
    2,
    ['catch:train', 'train'],
  ),
  q(
    'You pay ___ for your flat every month.',
    ['rent', 'cost', 'value', 'worth'],
    'rent',
    'noun',
    2,
    ['pay:rent'],
  ),
  q(
    'Did you catch a ___ in the rain?',
    ['cold', 'headache', 'pain', 'temperature'],
    'cold',
    'noun',
    2,
    ['catch:cold', 'have:cold', 'cold'],
  ),
  q(
    'My grandad loves to tell ___ that make us laugh.',
    ['jokes', 'sorry', 'hello', 'thanks'],
    'jokes',
    'noun',
    2,
    ['tell:joke', 'make:laugh'],
  ),
  q(
    'Please don’t break the ___. You will be in trouble.',
    ['rules', 'truth', 'secret', 'mistake'],
    'rules',
    'noun',
    2,
    ['break:rule'],
  ),
  q('Can you ride a ___?', ['horse', 'car', 'lorry', 'plane'], 'horse', 'noun', 2, [
    'ride:horse',
    'lorry',
    'ride:bike',
  ]),
  q('My uncle drives a ___ for his job.', ['lorry', 'plane', 'bike', 'ship'], 'lorry', 'noun', 2, [
    'drive:lorry',
    'lorry',
    'drive:car',
  ]),
  q('Hurry, or we will miss the ___.', ['bus', 'keys', 'wallet', 'glasses'], 'bus', 'noun', 2, [
    'miss:bus',
    'bus',
    'miss:start',
  ]),
  q(
    'Don’t lose your ___ on the train.',
    ['ticket', 'bus', 'lesson', 'flight'],
    'ticket',
    'noun',
    2,
    ['lose:ticket', 'bus', 'train', 'lose:key'],
  ),
  q('She won a ___ for her painting.', ['prize', 'salary', 'wage', 'living'], 'prize', 'noun', 2, [
    'win:prize',
    'salary',
    'win:match',
  ]),
  q('He earns a good ___ as a nurse.', ['salary', 'prize', 'match', 'race'], 'salary', 'noun', 2, [
    'earn:salary',
    'salary',
  ]),
  q(
    'I keep a ___ and write in it every night.',
    ['diary', 'story', 'novel', 'poem'],
    'diary',
    'noun',
    2,
    ['keep:diary'],
  ),
  q(
    'You have been working all morning. Why not take a ___?',
    ['break', 'mistake', 'noise', 'mess'],
    'break',
    'noun',
    2,
    ['take:break'],
  ),
  q(
    'Take an umbrella. There is ___ rain outside.',
    ['heavy', 'strong', 'big', 'thick'],
    'heavy',
    'adjective',
    2,
    ['heavy:rain'],
  ),
  q(
    'This coffee is too ___. Can I have some more milk in it?',
    ['strong', 'heavy', 'hard', 'powerful'],
    'strong',
    'adjective',
    2,
    ['strong:coffee'],
  ),
  q(
    'Sara is my ___ friend. We share everything.',
    ['close', 'near', 'next', 'deep'],
    'close',
    'adjective',
    2,
    ['close:friend'],
  ),
  q(
    'There was a ___ noise in the night, and I woke up.',
    ['loud', 'strong', 'high', 'hard'],
    'loud',
    'adjective',
    2,
    ['loud:noise'],
  ),
  q(
    'My mum never stops working. She is a ___ worker.',
    ['hard', 'heavy', 'big', 'high'],
    'hard',
    'adjective',
    2,
    ['hard:worker'],
  ),
  q(
    'The baby is ___ asleep in her cot.',
    ['fast', 'quick', 'heavy', 'strong'],
    'fast',
    'adverb',
    2,
    ['fast:asleep'],
  ),
  q('It’s midnight, but I am ___ awake.', ['wide', 'big', 'full', 'high'], 'wide', 'adverb', 2, [
    'wide:awake',
  ]),
  q('Please ___ attention to the instructions.', ['pay', 'make', 'take', 'do'], 'pay', 'pay', 2, [
    'pay:attention',
  ]),
  q('My aunt is going to ___ married in June.', ['get', 'make', 'do', 'take'], 'get', 'get', 2, [
    'get:married',
  ]),
  q(
    'Can you ___ me some advice about my essay?',
    ['give', 'make', 'do', 'take'],
    'give',
    'give',
    2,
    ['give:advice', 'advice'],
  ),
  q(
    'Can you ___ an eye on my bag for a minute?',
    ['keep', 'have', 'take', 'hold'],
    'keep',
    'keep',
    2,
    ['keep:eye', 'eye'],
  ),
  q(
    'I can’t ___ the difference between these two colours.',
    ['tell', 'say', 'speak', 'do'],
    'tell',
    'tell',
    2,
    ['tell:difference'],
  ),
  q(
    'Our team wants to ___ the school record for the relay race.',
    ['break', 'do', 'make', 'win'],
    'break',
    'break',
    2,
    ['break:record'],
  ),
  q('Please ___ me a call this evening.', ['give', 'make', 'do', 'take'], 'give', 'give', 2, [
    'give:call',
  ]),
  q(
    'Can you ___ your breath for a minute under the water?',
    ['hold', 'keep', 'take', 'make'],
    'hold',
    'hold',
    2,
    ['hold:breath', 'breath'],
  ),
  q(
    'I want to ___ some weight before the summer.',
    ['lose', 'miss', 'leave', 'fail'],
    'lose',
    'lose',
    2,
    ['lose:weight'],
  ),
  v('Grandad likes to ___ the crossword in his newspaper.', 'do', 2, ['do:crossword']),
  v('A walk in the fresh air will ___ you good.', 'do', 2, ['do:you good']),

  q('Can you ___ chess?', ['play', 'do', 'make', 'go'], 'play', 'play', 2, ['play:chess']),
  q('Put your coat on, or you will ___ wet.', ['get', 'make', 'do', 'take'], 'get', 'get', 2, [
    'get:wet',
  ]),
  q('Shall we ___ for a walk after lunch?', ['go', 'make', 'do', 'take'], 'go', 'go', 2, [
    'go:walk',
    'take:dog',
  ]),
  q('Who is going to ___ the bill for dinner?', ['pay', 'make', 'do', 'give'], 'pay', 'pay', 2, [
    'pay:bill',
  ]),
  q(
    'We went to the river to ___ some fish.',
    ['catch', 'hold', 'keep', 'win'],
    'catch',
    'catch',
    2,
    ['catch:fish'],
  ),
  v('Don’t ___ excuses. You are late again.', 'make', 2, ['make:excuse']),
  v('Please ___ room for Grandma on the sofa.', 'make', 2, ['make:room']),
  v('Please ___ sure the door is locked.', 'make', 2, ['make:sure']),
  v('Twenty schools will ___ part in the quiz.', 'take', 2, ['take:part']),
  v('Please ___ a step back from the edge.', 'take', 2, ['take:step']),
  q(
    'She ___ an accident on her bike, but she is fine.',
    ['had', 'made', 'did', 'took'],
    'had',
    'have',
    2,
    ['have:accident'],
  ),
  v('I ___ a problem with my laptop. It won’t turn on.', 'have', 2, ['have:problem']),
  q('Don’t ___ all your money on sweets.', ['spend', 'pass', 'pay', 'give'], 'spend', 'spend', 2, [
    'spend:money',
    'spend',
  ]),
  q(
    'The children ___ hands as they cross the road.',
    ['hold', 'keep', 'have', 'carry'],
    'hold',
    'hold',
    2,
    ['hold:hand', 'shake:hand'],
  ),
  q(
    'Don’t forget to ___ your alarm for six o’clock.',
    ['set', 'make', 'take', 'give'],
    'set',
    'set',
    2,
    ['set:alarm'],
  ),
  q('Try not to ___ any lessons this term.', ['miss', 'lose', 'fail', 'break'], 'miss', 'miss', 2, [
    'miss:lesson',
  ]),
  odd(['make a mistake', 'make a decision', 'make homework', 'make a noise'], 'make homework', 2, [
    'make:mistake',
    'make:noise',
    'do:homework',
  ]),
  odd(['do yoga', 'do karate', 'do a law degree', 'do an effort'], 'do an effort', 2, [
    'make:effort',
  ]),
  odd(['take a taxi', 'take a seat', 'take a deep breath', 'take a mistake'], 'take a mistake', 2, [
    'make:mistake',
    'breath',
  ]),
  odd(['tell a joke', 'tell a secret', 'tell a lie', 'tell sorry'], 'tell sorry', 2, [
    'tell:lie',
    'say:sorry',
    'tell:joke',
  ]),
  odd(['say yes', 'say no', 'say thank you', 'say a story'], 'say a story', 2, ['tell:story']),
  odd(['strong coffee', 'a strong wind', 'strong tea', 'strong rain'], 'strong rain', 2, [
    'strong:coffee',
    'heavy:rain',
  ]),
  odd(['fast asleep', 'sound asleep', 'wide awake', 'wide asleep'], 'wide asleep', 2, [
    'fast:asleep',
    'wide:awake',
  ]),
  odd(['lose a game', 'lose your way', 'lose your voice', 'lose the bus'], 'lose the bus', 2, [
    'miss:bus',
    'bus',
    'lose:key',
    'lose:temper',
  ]),
  odd(['earn a living', 'earn money', 'earn respect', 'earn a race'], 'earn a race', 2, [
    'earn:salary',
    'salary',
    'win:prize',
    'win:match',
    'earn:living',
  ]),
  odd(['play tennis', 'play the guitar', 'play golf', 'play judo'], 'play judo', 2, ['do:judo']),
  odd(['go sightseeing', 'go fishing', 'go camping', 'go football'], 'go football', 2, [
    'play:football',
  ]),
  odd(['drive a taxi', 'drive a van', 'drive a tractor', 'drive a bike'], 'drive a bike', 2, [
    'ride:bike',
    'drive:car',
    'lorry',
  ]),
  odd(
    ['catch a cold', 'catch the flu', 'catch chickenpox', 'catch a headache'],
    'catch a headache',
    2,
    ['catch:cold', 'cold', 'have:headache'],
  ),
  odd(['make a cake', 'make a speech', 'make a joke', 'make a walk'], 'make a walk', 2, [
    'go:walk',
  ]),
  odd(
    ['make breakfast', 'make a cup of tea', 'make a sandwich', 'make the cooking'],
    'make the cooking',
    2,
    ['do:cooking'],
  ),

  // ── Tier 3: B1 partnerships, in context ──────────────────────────────────
  v('She wants to ___ a good impression at the interview.', 'make', 3, ['make:impression']),
  v('They are going to ___ a complaint about the noisy neighbours.', 'make', 3, ['make:complaint']),
  v('Can I ___ a suggestion? Why don’t we meet on Monday instead?', 'make', 3, ['make:suggestion']),
  v('They want to ___ progress on the project this month.', 'make', 3, ['make:progress']),
  v('He promised to ___ an exception just this once.', 'make', 3, ['make:exception']),
  v('It was a pleasure to ___ business with you.', 'do', 3, ['do:business', 'business']),
  v('We need to ___ action before the problem gets worse.', 'take', 3, [
    'take:action',
    'get:better',
  ]),
  v('You should ___ advantage of the free training offer.', 'take', 3, ['take:advantage']),
  {
    sentence: 'The manager will make an important ___ at the meeting tomorrow.',
    options: ['announcement', 'news', 'advice', 'information'],
    answer: 'announcement',
    collocationGroup: 'noun',
    tier: 3,
    facts: ['make:announcement'],
  },
  q(
    'To ___ you the truth, I had been looking forward to my retirement.',
    ['tell', 'say', 'speak', 'talk'],
    'tell',
    'tell',
    3,
    ['tell:truth'],
    'George Orwell, Animal Farm, Chapter 9',
  ),
  q(
    'One ___ a secret better than two.',
    ['keeps', 'takes', 'makes', 'does'],
    'keeps',
    'keep',
    3,
    ['keep:secret'],
    'Charles Dickens, Great Expectations, Chapter 53',
  ),
  q(
    'I ___ my word.',
    ['kept', 'made', 'took', 'did'],
    'kept',
    'keep',
    3,
    ['keep:word'],
    'Charlotte Brontë, Jane Eyre, Chapter 16',
  ),
  q(
    'What awful event has ___ place?',
    ['taken', 'had', 'made', 'got'],
    'taken',
    'take',
    3,
    ['take:place'],
    'Charlotte Brontë, Jane Eyre, Chapter 20',
  ),
  q(
    "Don't ___ your temper.",
    ['lose', 'miss', 'break', 'drop'],
    'lose',
    'lose',
    3,
    ['lose:temper'],
    'Charles Dickens, Great Expectations, Chapter 9',
  ),
  q(
    '"But it ___ no difference to you, you know," said Biddy, calmly.',
    ['makes', 'does', 'has', 'gives'],
    'makes',
    'make',
    3,
    ['make:difference'],
    'Charles Dickens, Great Expectations, Chapter 17',
  ),
  q(
    'Hats and dresses ___ fire.',
    ['caught', 'made', 'set', 'got'],
    'caught',
    'catch',
    3,
    ['catch:fire'],
    'H. G. Wells, The War of the Worlds, Book One, Chapter 6',
  ),
  q(
    'Because I ___ in love.',
    ['fell', 'went', 'got', 'dropped'],
    'fell',
    'fall',
    3,
    ['fall:love', 'fall'],
    'Charles Dickens, A Christmas Carol, Stave 1',
  ),
  q(
    'You can ___ his heart.',
    ['break', 'smash', 'tear', 'burn'],
    'break',
    'break',
    3,
    ['break:heart'],
    'Charles Dickens, Great Expectations, Chapter 8',
  ),
  q(
    'I ___ that train, and then another, before I could get myself away.',
    ['missed', 'lost', 'failed', 'dropped'],
    'missed',
    'miss',
    3,
    ['miss:train', 'train'],
    'F. Scott Fitzgerald, The Great Gatsby, Chapter 8',
  ),
  q(
    'It ___ him no reply.',
    ['gave', 'told', 'said', 'spoke'],
    'gave',
    'give',
    3,
    ['give:reply'],
    'Charles Dickens, A Christmas Carol, Stave 4',
  ),
  q(
    "Napoleon ___ no interest in Snowball's committees.",
    ['took', 'made', 'did', 'gave'],
    'took',
    'take',
    3,
    ['take:interest', 'interest'],
    'George Orwell, Animal Farm, Chapter 3',
  ),
  q(
    'I must ___ a visit to the second storey.',
    ['pay', 'take', 'give', 'keep'],
    'pay',
    'pay',
    3,
    ['pay:visit'],
    'Charlotte Brontë, Jane Eyre, Chapter 15',
  ),
  q(
    "Ask no questions, and you'll be ___ no lies.",
    ['told', 'said', 'spoken', 'talked'],
    'told',
    'tell',
    3,
    ['tell:lie', 'ask:question'],
    'Charles Dickens, Great Expectations, Chapter 2',
  ),
  q(
    "I couldn't ___ my eyes off him.",
    ['keep', 'hold', 'put', 'have'],
    'keep',
    'keep',
    3,
    ['keep:eyes', 'eye'],
    'Charles Dickens, Great Expectations, Chapter 4',
  ),
  q(
    '"I ___ no patience with him," observed Scrooge\'s niece.',
    ['have', 'make', 'take', 'keep'],
    'have',
    'have',
    3,
    ['have:patience'],
    'Charles Dickens, A Christmas Carol, Stave 3',
  ),
  q(
    'I want to ___ my duty.',
    ['do', 'make', 'have', 'take'],
    'do',
    'do',
    3,
    ['do:duty'],
    'George Eliot, Silas Marner, Chapter 19',
  ),
  q(
    'I have ___ no harm.',
    ['done', 'made', 'given', 'taken'],
    'done',
    'do',
    3,
    ['do:harm'],
    'William Shakespeare, Macbeth, Act 4, Scene 2',
  ),
  q(
    'I will ___ no promise of the kind.',
    ['make', 'do', 'say', 'tell'],
    'make',
    'make',
    3,
    ['make:promise', 'promise'],
    'Jane Austen, Pride and Prejudice, Chapter 56',
  ),
  q(
    'Mr. Pocket and I ___ a long talk together.',
    ['had', 'made', 'did', 'took'],
    'had',
    'have',
    3,
    ['have:talk'],
    'Charles Dickens, Great Expectations, Chapter 24',
  ),
  q(
    'Would you like to ___ a look at Newgate?',
    ['have', 'make', 'do', 'give'],
    'have',
    'have',
    3,
    ['have:look', 'look'],
    'Charles Dickens, Great Expectations, Chapter 32',
  ),
  q(
    'The men ___ a shout of triumph.',
    ['gave', 'made', 'did', 'took'],
    'gave',
    'give',
    3,
    ['give:shout'],
    'George Orwell, Animal Farm, Chapter 4',
  ),
  q(
    'I ___ the advice.',
    ['took', 'made', 'did', 'had'],
    'took',
    'take',
    3,
    ['take:advice', 'advice'],
    'Charles Dickens, Great Expectations, Chapter 2',
  ),
  q(
    'A: What did the teacher ___ about the test? B: It is on Friday, in Room 4.',
    ['say', 'tell', 'speak', 'talk'],
    'say',
    'say',
    3,
    ['say:about the test'],
  ),
  q(
    'Do you dare to ___ your promise?',
    ['break', 'lose', 'miss', 'drop'],
    'break',
    'break',
    3,
    ['break:promise'],
    'Mary Shelley, Frankenstein, Chapter 20',
  ),
  q(
    'Let us ___ good use of it.',
    ['make', 'do', 'have', 'take'],
    'make',
    'make',
    3,
    ['make:use', 'let:know'],
    'Arthur Conan Doyle, The Sign of Four, Chapter 6',
  ),
  q(
    'You were born to ___ your fortune.',
    ['make', 'do', 'have', 'take'],
    'make',
    'make',
    3,
    ['make:fortune', 'fortune'],
    'Charles Dickens, A Christmas Carol, Stave 4',
  ),
  q(
    'I ___ no remark, however, but sat nursing my wounded leg.',
    ['made', 'did', 'had', 'took'],
    'made',
    'make',
    3,
    ['make:remark'],
    'Arthur Conan Doyle, The Sign of Four, Chapter 1',
  ),
  q(
    'I knew right away I ___ a mistake.',
    ['made', 'did', 'had', 'took'],
    'made',
    'make',
    3,
    ['make:mistake'],
    'F. Scott Fitzgerald, The Great Gatsby, Chapter 2',
  ),
  q(
    'Michaelis ___ a clumsy attempt to distract him.',
    ['made', 'did', 'took', 'gave'],
    'made',
    'make',
    3,
    ['make:attempt'],
    'F. Scott Fitzgerald, The Great Gatsby, Chapter 8',
  ),
  q(
    'Of course I ___ no further effort to refer to it.',
    ['made', 'did', 'had', 'took'],
    'made',
    'make',
    3,
    ['make:effort'],
    'Charles Dickens, Great Expectations, Chapter 11',
  ),
  q(
    'As he stood there, waiting his arrival, the knocker ___ his eye.',
    ['caught', 'took', 'made', 'got'],
    'caught',
    'catch',
    3,
    ['catch:eye', 'eye'],
    'Charles Dickens, A Christmas Carol, Stave 5',
  ),
  q(
    'The nurse ___ a step forward and held out her hand.',
    ['took', 'did', 'had', 'gave'],
    'took',
    'take',
    3,
    ['take:step', 'hold:hand'],
    'F. Scott Fitzgerald, The Great Gatsby, Chapter 7',
  ),
  q(
    'And the lawyer set out homeward with a very ___ heart.',
    ['heavy', 'wide', 'thick', 'deep'],
    'heavy',
    'adjective',
    3,
    ['heavy:heart'],
    'Robert Louis Stevenson, The Strange Case of Dr Jekyll and Mr Hyde, Search for Mr. Hyde',
  ),
  q(
    'Mr. Rochester lay stretched motionless, in ___ sleep.',
    ['deep', 'fast', 'hard', 'strong'],
    'deep',
    'adjective',
    3,
    ['deep:sleep'],
    'Charlotte Brontë, Jane Eyre, Chapter 15',
  ),
  q(
    'Then, overcome by fatigue, I lay down among some straw, and ___ asleep.',
    ['fell', 'went', 'got', 'became'],
    'fell',
    'fall',
    3,
    ['fall:asleep', 'fall'],
    'Mary Shelley, Frankenstein, Chapter 11',
  ),
  q(
    'They were unnecessary, he said, and ___ time.',
    ['wasted', 'spent', 'made', 'gave'],
    'wasted',
    'waste',
    3,
    ['waste:time'],
    'George Orwell, Animal Farm, Chapter 5',
  ),
  q(
    'Did Rivers ___ much time with the ladies of his family?',
    ['spend', 'keep', 'make', 'give'],
    'spend',
    'spend',
    3,
    ['spend:time', 'spend'],
    'Charlotte Brontë, Jane Eyre, Chapter 37',
  ),
  q(
    'Estella was the next to ___ the silence that ensued between us.',
    ['break', 'crack', 'smash', 'tear'],
    'break',
    'break',
    3,
    ['break:silence'],
    'Charles Dickens, Great Expectations, Chapter 59',
  ),
  odd(
    ['make an offer', 'make a comment', 'make arrangements', 'make research'],
    'make research',
    3,
    ['do:research'],
  ),
  odd(['do damage', 'do a course', 'do the accounts', 'do progress'], 'do progress', 3, [
    'make:progress',
  ]),
  odd(
    ['take control', 'take charge', 'take responsibility', 'take a conclusion'],
    'take a conclusion',
    3,
    ['draw:conclusion'],
  ),
  odd(
    ['reach an agreement', 'come to an agreement', 'make an agreement', 'do an agreement'],
    'do an agreement',
    3,
    ['reach:agreement'],
  ),
  odd(['a heavy heart', 'heavy traffic', 'heavy rain', 'heavy coffee'], 'heavy coffee', 3, [
    'heavy:heart',
    'heavy:rain',
    'strong:coffee',
  ]),
  odd(
    ['a sense of humour', 'a sense of direction', 'a feeling of fear', 'a feeling of humour'],
    'a feeling of humour',
    3,
    ['sense:humour'],
  ),
  odd(['do a favour', 'ask a favour', 'return a favour', 'make a favour'], 'make a favour', 3, [
    'do:favour',
  ]),
  odd(['score a goal', 'win a match', 'beat a team', 'win a team'], 'win a team', 3, [
    'score:goal',
    'win:match',
    'win:prize',
  ]),
  odd(['pass an exam', 'fail an exam', 'sit an exam', 'win an exam'], 'win an exam', 3, [
    'pass:test',
  ]),
  odd(
    ['draw a conclusion', 'draw a picture', 'draw attention', 'draw a decision'],
    'draw a decision',
    3,
    ['draw:conclusion'],
  ),
  odd(['fall asleep', 'fall ill', 'fall in love', 'fall tired'], 'fall tired', 3, [
    'fall:asleep',
    'fall:ill',
    'fall:love',
    'fall',
  ]),
  odd(
    ['highly recommended', 'highly unlikely', 'highly successful', 'highly tired'],
    'highly tired',
    3,
    ['highly:recommended'],
  ),
  q(
    'A: Did the two companies agree in the end? B: Yes. They ___ an agreement last night.',
    ['reached', 'did', 'took', 'arrived'],
    'reached',
    'reach',
    3,
    ['reach:agreement'],
  ),
  q(
    'A: Is your mum still working at the bakery? B: No. She ___ her own business now.',
    ['runs', 'makes', 'does', 'plays'],
    'runs',
    'run',
    3,
    ['run:business'],
  ),
  q(
    'A: That new phone looks great. B: It is, but it ___ a fortune.',
    ['costs', 'pays', 'spends', 'takes'],
    'costs',
    'cost',
    3,
    ['cost:fortune', 'fortune'],
  ),
  q(
    'A: I failed my driving test again. B: Never mind. You will ___ it next time.',
    ['pass', 'win', 'succeed', 'gain'],
    'pass',
    'pass',
    3,
    ['pass:test'],
  ),
  q(
    'A: Why are you so quiet today? B: Sorry. I didn’t ___ much sleep last night.',
    ['get', 'make', 'do', 'take'],
    'get',
    'get',
    3,
    ['get:sleep'],
  ),
  q(
    'A: I can’t choose a course. B: Take your time. You don’t have to ___ up your mind today.',
    ['make', 'take', 'do', 'have'],
    'make',
    'make',
    3,
    ['make:mind', 'mind', 'take:time'],
  ),
  q(
    'A: Is there any news about Sam’s sister? B: Yes. She ___ birth to twins last night.',
    ['gave', 'had', 'made', 'took'],
    'gave',
    'give',
    3,
    ['give:birth'],
  ),
  q(
    'A: Shall we take a taxi? B: No, let’s walk. It will ___ us some money.',
    ['save', 'keep', 'spend', 'pay'],
    'save',
    'save',
    3,
    ['save:money'],
  ),
  q(
    'A: How was your holiday? B: Great. We ___ lots of photos.',
    ['took', 'made', 'did', 'had'],
    'took',
    'take',
    3,
    ['take:photo'],
  ),
  q(
    'A: What do you want to do after school? B: I want to ___ a living as an artist.',
    ['make', 'do', 'have', 'take'],
    'make',
    'make',
    3,
    ['make:living', 'earn:living'],
  ),
  q(
    'A: My grandad is in hospital. B: I’m sorry. I hope he ___ better soon.',
    ['gets', 'makes', 'goes', 'takes'],
    'gets',
    'get',
    3,
    ['get:better'],
  ),
  q(
    'A: Why did you phone the doctor? B: My little sister has a high ___ and a cough.',
    ['temperature', 'heat', 'warmth', 'degree'],
    'temperature',
    'noun',
    3,
    ['high:temperature'],
  ),
  q(
    'A: Have you ___ your mind about the trip? B: Yes. I want to go after all.',
    ['changed', 'made', 'moved', 'turned'],
    'changed',
    'change',
    3,
    ['change:mind', 'mind'],
  ),
  q(
    'A: Is your brother good at football? B: Yes. He ___ a goal in almost every match.',
    ['scores', 'makes', 'wins', 'takes'],
    'scores',
    'score',
    3,
    ['score:goal'],
  ),
  q(
    'A: Can you keep a secret? B: Of course. I won’t ___ a word to anyone.',
    ['say', 'tell', 'talk', 'make'],
    'say',
    'say',
    3,
    ['say:a word to', 'keep:secret'],
  ),
  q(
    'A: Why wasn’t Sara at school? B: She ___ ill on Monday, but she is better now.',
    ['fell', 'went', 'dropped', 'made'],
    'fell',
    'fall',
    3,
    ['fall:ill', 'fall'],
  ),
  q(
    'A: Why are you smiling? B: My aunt just ___ me a compliment about my cooking.',
    ['paid', 'made', 'did', 'took'],
    'paid',
    'pay',
    3,
    ['pay:compliment'],
  ),
  q(
    'A: We’d like a table for two, please. B: Of course. Did you ___ a table?',
    ['reserve', 'keep', 'hold', 'make'],
    'reserve',
    'reserve',
    3,
    ['reserve:table'],
  ),
  q(
    'A: Do you like your new teacher? B: Yes. She has a great ___ of humour.',
    ['sense', 'feeling', 'idea', 'mind'],
    'sense',
    'noun',
    3,
    ['sense:humour'],
  ),
  q(
    'A: Can you speak Spanish? B: Only a little, but my brother speaks it ___.',
    ['fluently', 'strongly', 'heavily', 'deeply'],
    'fluently',
    'adverb',
    3,
    ['speak:fluently', 'speak:english'],
  ),
]

export const BANK: GameBank<Collocation> = {
  slug: 'collocations-challenge',
  items: COLLOCATION_BANK,
  // A gap question's sentence is what the student sees, and no two are the
  // same. Every odd-one-out question shows the same prompt, so its four pairs,
  // in the order written, name it.
  key: (q) => (q.kind === 'odd' ? q.options.join(' / ') : q.sentence),
  answer: (q) => q.answer,
  options: (q) => q.options,
  tag: (q) =>
    q.collocationGroup === 'noun'
      ? 'noun-partner'
      : q.collocationGroup === 'odd'
        ? 'odd-one-out'
        : q.collocationGroup,
  tier: (q) => q.tier,
  facts: (q) => q.facts,
  deepened: '2026-10-24',
}
