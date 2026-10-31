import type { GameBank } from '@/lib/games/explanations/types'

/**
 * What Do You Say?: an everyday situation, what the other person says (at the
 * top tier, a short exchange), and four replies. The student chooses the one
 * that fits the moment and the person. The page shuffles the four replies for
 * each attempt and marks the reply itself.
 *
 * Moved out of src/app/games/greetings-dialogue/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 * That day two prompts were found to print their own answer and one used a
 * dash as punctuation; all three were mended (git keeps the details).
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "too
 * obvious and easy". Measured that day (.tmp-games-audit/REPORT-eal.md): 46
 * exchanges, one turn each, with no choice of register; the wrong replies were
 * so far from the situation that a student could reject them without knowing
 * the custom ("Good morning, pen." beside "Could I borrow a pen, please?"), so
 * the audit's guesser scored 74 per cent; the right reply was the longest in
 * 72 per cent; and a round of 15 from 46 repeated 80 per cent of itself by the
 * fifth play. Now:
 *
 *   - 240 exchanges, 80 a tier. Tier 1 (A1): the set phrases, told apart by
 *     what they do (a greeting from a goodbye, thanks from the answer to
 *     thanks, "How are you?" from "How old are you?"), short answers, and the
 *     question words. Tier 2 (A2): the phrase that fits the context: register
 *     (a friend's parent, a teacher, a stranger), near neighbours (borrow and
 *     lend, me too and you too, so am I and so do I, nice to meet you and nice
 *     to see you again), British set phrases that mean something else word by
 *     word (Alright?, Cheers, Mind your head, I'm afraid, Help yourself, Fancy
 *     a...?, I'm fine meaning no), either-or questions, "Do you mind...?", and
 *     the tense a reply needs. Tier 3 (B1): a short exchange, its earlier turns
 *     in `before` and shown above the prompt, where the person and the place
 *     decide: interviews, phone calls, shops, cafés and restaurants, teachers,
 *     friends, strangers, a host family and neighbours;
 *   - every wrong reply is a real reply: one that does another job (a goodbye
 *     where a greeting is due, an answer to a different question, the other
 *     person's line), one in the wrong register (too casual for an interview,
 *     too formal for a friend), or one that reads a set phrase word by word.
 *     Each was chosen so that a fluent British speaker would not say it here;
 *     where two replies could both be natural, the exchange was changed. The
 *     audit's guesser now scores 37 per cent; the answer is the unique longest
 *     reply in 4 per cent and the unique shortest in 11;
 *   - no exclamation marks in what the student reads (house style; the
 *     records' chosen-option field cannot hold one either), and no situation
 *     that names the answer or the rule that decides it;
 *   - `teaches` names the custom each exchange turns on, and two exchanges
 *     that teach the same one are never dealt in one round (`facts`); `kind`
 *     is the dealer's group, so a round mixes greetings, thanks, phone calls
 *     and the rest. `kind` is deliberately not a `tag`, so what each answer
 *     records is unchanged;
 *   - the key is the situation, any earlier turns and the prompt, so the
 *     dealer reads the earlier turns for give-aways too. For an exchange with
 *     no earlier turns the key is the situation and the prompt, as before.
 *
 * THE 46 EARLIER EXCHANGES. 45 are kept as the same exchanges, and every one
 * has new wrong replies of the kinds above. Their wording changed where it
 * gave the answer away or did not fit the players (most are 11 to 16):
 *
 *   - three time-of-day greetings printed the answer as the prompt ("Good
 *     afternoon!" for "Good afternoon!") and named the time in words. They
 *     give a clock time instead (8.30 am, 2 pm, 7 pm) and ask you to greet;
 *   - seven prompts or situations named the reply or its rule: "You want to
 *     thank them", "You say goodbye", "You want to reply politely when someone
 *     thanks you", "Someone asks where you are from", "You did not hear the
 *     page number", "Does everyone understand?" (answered "Sorry, I don't
 *     understand") and "You want to know how to spell a word". Each now
 *     describes the moment instead;
 *   - "Hello, I'm Sara. Nice to meet you." asked only for the same words with
 *     "too"; it is now "Hello. I'm Sara.", a first meeting;
 *   - "See you tomorrow!" had the same words as its answer; the answer is now
 *     a goodbye in other words;
 *   - two asked the student to speak the other person's line (the shop
 *     assistant's reply to thanks, the teacher agreeing to repeat). The
 *     student now answers: a man thanks you for holding a door, and a
 *     classmate asks you to repeat the homework;
 *   - two colleagues and a workplace became an old family friend, a teacher
 *     on a Friday and a football club; a friend introducing his sister became
 *     his mum, so the exchange tests register;
 *   - the rest gained a sharper situation (a clock time, who is speaking, what
 *     you want) and lost their exclamation marks.
 *
 * Removed: "How do you do?", whose only right reply repeated the prompt word
 * for word, and whose other natural replies today ("Pleased to meet you")
 * could not be offered as wrong. A formal first meeting is tested instead by
 * the interview exchanges at tier 3.
 *
 * The one-line notes the page showed before 16 October (`note`) are dropped:
 * nothing has read them since the explanation panel replaced them, and git
 * keeps them.
 *
 * CHECKED (31 October 2026) by a second reader, as the founder decided. Fixed:
 *
 *   - "Mind your head": a friend's dad leading you alone into a cellar is not
 *     a place to put a child; it is a castle guide on a school trip;
 *   - "That's very kind of you": helping a stranger carry shopping to his car
 *     is what children are taught not to do; you pick up his dropped apples;
 *   - "Is that Sam?": you confirmed your name to an unknown caller, against
 *     the bank's own "never give your name to a caller you do not know"; the
 *     call is now one you expect, from a shop about a Saturday job;
 *   - "When will she be back?": you told an unknown man your mum was out and
 *     when she would return, against the exchange's own tip; the caller is
 *     her friend, Mrs Evans;
 *   - Mr Shah on the last day: "Have a nice day, Sir" was polite enough to be
 *     right; the wrong reply is now "See you tomorrow", untrue on a last day;
 *   - the bike: "No. Go away." was a reply nobody would choose; it is "No,
 *     you can't have it.", a cold no without a reason;
 *   - "Sorry?": the answer "I said, it's Wiktoria." can sound impatient to a
 *     teacher; it is "Sorry, it's Wiktoria.";
 *   - the cinema: "I accept your apology. You may enter." was a joke; the
 *     wrong reply is "Yes, it started ten minutes ago.", which misreads "in
 *     ten minutes";
 *   - Jess's mum: "Who's Jess?" was absurd; the wrong reply is now "Yes, I'm
 *     Jess.", which misreads "here for Jess";
 *   - the hotel welcome teaches "welcome" too, since its explanation gives
 *     the reply to "Welcome to Park Lane School", so the two are never dealt
 *     together.
 *
 * "Yes, I wasn't, Miss" stays as a wrong reply: it is the error the exchange
 * tests (yes with a negative verb, as several languages answer), not a slip.
 * Explanations were corrected where they contradicted themselves (Christmas
 * "for everyone"), named a woman the train exchange never shows, repeated
 * their own "why", said "mate" is only for people of the same age, told a
 * child to keep a friend's secret with no word about telling an adult when
 * they are worried, or to ask the neighbours "where the key is" with no word
 * about asking a parent first.
 */

/** What a reply does: the dealer spreads these, at most two of one in a round. */
export type ReplyKind =
  | 'greeting'
  | 'how-are-you'
  | 'introduction'
  | 'thanks'
  | 'apology'
  | 'request'
  | 'offer'
  | 'goodbye'
  | 'news'
  | 'wishes'
  | 'classroom'
  | 'shop'
  | 'phone'
  | 'agreeing'
  | 'answers'
  | 'directions'
  | 'interview'
  | 'checking'

/** One earlier turn of a short exchange: who says it, and what they say. */
export interface Turn {
  who: string
  says: string
}

export interface Exchange {
  situation: string
  /** The turns before the prompt, in order (a short exchange, mostly tier 3). */
  before?: readonly Turn[]
  /** What the other person says last, or what you have to do. */
  prompt: string
  options: [string, string, string, string]
  answerIndex: number
  /** 1 A1 (the set phrases), 2 A2 (the phrase that fits the context), 3 B1 (a short exchange). */
  tier: 1 | 2 | 3
  kind: ReplyKind
  /**
   * The custom the exchange teaches. Two exchanges that teach the same one
   * are never dealt in one round, so one cannot give the other away.
   */
  teaches: readonly string[]
}

export const EXCHANGE_BANK: Exchange[] = [
  // ── Tier 1 (A1): the set phrases ──────────────────────────────────────────
  {
    situation:
      'It is 8.30 am. You arrive at school. Your teacher, Ms Patel, is at the classroom door.',
    prompt: 'You greet her.',
    options: [
      'Good morning, Ms Patel.',
      'Good evening, Ms Patel.',
      'Good night, Ms Patel.',
      'Goodbye, Ms Patel.',
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'greeting',
    teaches: ['greeting by the time of day'],
  },
  {
    situation: 'A classmate you know well walks past you in the corridor.',
    prompt: '"Hi. How are you?"',
    options: [
      "I'm fourteen. And you?",
      'Good, thanks. And you?',
      "I'm from Poland. And you?",
      "I'm in Year 9. And you?",
    ],
    answerIndex: 1,
    tier: 1,
    kind: 'how-are-you',
    teaches: ['how are you'],
  },
  {
    situation: 'It is 2 pm. You see your neighbour, Mr Jones, in the street.',
    prompt: 'You greet him.',
    options: [
      'Good morning, Mr Jones.',
      'Good night, Mr Jones.',
      'Good afternoon, Mr Jones.',
      'Goodbye, Mr Jones.',
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'greeting',
    teaches: ['greeting by the time of day'],
  },
  {
    situation: 'It is 7 pm. You get home. Your neighbour, Mrs Ali, is in her front garden.',
    prompt: 'You greet her.',
    options: [
      'Good afternoon, Mrs Ali.',
      'Good night, Mrs Ali.',
      'Good morning, Mrs Ali.',
      'Good evening, Mrs Ali.',
    ],
    answerIndex: 3,
    tier: 1,
    kind: 'greeting',
    teaches: ['greeting by the time of day'],
  },
  {
    situation:
      'It is your first day at a new school. A girl sits next to you. You have never met her.',
    prompt: '"Hello. I\'m Sara."',
    options: [
      'Hi, Sara. Nice to meet you.',
      'Hi, Sara. Nice to see you again.',
      "Hi, Sara. I'm fine, thank you.",
      "Hi, Sara. You're welcome.",
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'introduction',
    teaches: ['nice to meet you'],
  },
  {
    situation: 'A girl at your new youth club starts talking to you.',
    prompt: '"Where are you from?"',
    options: ["My name's Ola.", "I'm from Poland.", "I'm thirteen.", 'Very well, thanks.'],
    answerIndex: 1,
    tier: 1,
    kind: 'introduction',
    teaches: ['personal questions'],
  },
  {
    situation: 'A friend helps you carry a heavy bag up the stairs.',
    prompt: 'You speak to her.',
    options: [
      "You're welcome, any time.",
      'No problem, happy to help.',
      'Thanks so much for helping.',
      "Sorry, I'm really late.",
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'thanks',
    teaches: ['thanking someone'],
  },
  {
    situation: 'You hold the door open for a man with a pushchair.',
    prompt: '"Oh, thank you very much."',
    options: ['Sorry about that.', 'Here you are.', 'Yes, please.', "You're welcome."],
    answerIndex: 3,
    tier: 1,
    kind: 'thanks',
    teaches: ['answering thanks'],
  },
  {
    situation: 'Someone gives you a small gift for your birthday.',
    prompt: '"Here\'s a little present for you."',
    options: [
      "Thank you. That's very kind.",
      "Oh, you're welcome. Any time.",
      'Here you are. Enjoy it.',
      "Oh, I'm so sorry. My fault.",
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'thanks',
    teaches: ['thanking for a present'],
  },
  {
    situation: 'You have forgotten your pen. A classmate gives you one.',
    prompt: 'She hands you the pen.',
    options: ["You're welcome.", 'Thanks a lot.', 'Here you are.', 'Yes, please.'],
    answerIndex: 1,
    tier: 1,
    kind: 'thanks',
    teaches: ['thanking someone'],
  },
  {
    situation: 'You helped a classmate with her homework.',
    prompt: '"Thanks for your help."',
    options: [
      "Never mind, it's OK.",
      'Thank you for your help.',
      'No problem, any time.',
      'Yes, of course I will.',
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'thanks',
    teaches: ['answering thanks'],
  },
  {
    situation: "You step on someone's foot by accident on the bus.",
    prompt: 'You speak to them.',
    options: ['Oh, never mind.', "Oh, you're welcome.", 'Oh, well done.', "Oh, I'm so sorry."],
    answerIndex: 3,
    tier: 1,
    kind: 'apology',
    teaches: ['apologising for an accident'],
  },
  {
    situation: 'You are waiting for a friend at the cinema. She arrives five minutes late.',
    prompt: '"Sorry I\'m late."',
    options: [
      "That's OK. Don't worry.",
      "Oh, you're very welcome.",
      'Excuse me, can I get past?',
      'Same to you, thanks.',
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'apology',
    teaches: ['accepting an apology'],
  },
  {
    situation: 'You bump into a stranger in a busy shop.',
    prompt: 'You speak to them.',
    options: [
      'Oh, never mind about that.',
      'Oh, sorry about that.',
      'Oh, thanks for that.',
      "Oh, you're welcome.",
    ],
    answerIndex: 1,
    tier: 1,
    kind: 'apology',
    teaches: ['apologising for an accident'],
  },
  {
    situation: 'Your friend promised to phone you last night, but she forgot.',
    prompt: '"I\'m really sorry I forgot to call."',
    options: [
      "I'm sorry to hear that.",
      "You're welcome, any time.",
      "Don't worry. It's fine.",
      'Well done. Good for you.',
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'apology',
    teaches: ['accepting an apology'],
  },
  {
    situation: 'Someone is standing in a doorway. You need to get past.',
    prompt: 'You speak to them.',
    options: ['Yes, please. Thanks.', 'Oh, here you are.', 'Oh, bless you.', 'Excuse me, please.'],
    answerIndex: 3,
    tier: 1,
    kind: 'apology',
    teaches: ['excuse me to get past'],
  },
  {
    situation: 'You are stuck on a maths question. Your teacher is walking past.',
    prompt: 'You speak to your teacher.',
    options: [
      'Sorry, could you help me with this?',
      'Help me with this question right now.',
      'Can I help you with this one, Miss?',
      'Would you like some help with that?',
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'request',
    teaches: ['asking for help'],
  },
  {
    situation: 'Someone asks you to pass the salt at dinner.',
    prompt: '"Could you pass the salt, please?"',
    options: ['Yes, I could.', 'Yes, here you are.', 'Yes, help yourself.', "Yes, you're welcome."],
    answerIndex: 1,
    tier: 1,
    kind: 'request',
    teaches: ['handing something over', 'could you as a request'],
  },
  {
    situation: "It is 10 pm. You are leaving a friend's house after a film night.",
    prompt: 'You speak to your friend at the door.',
    options: [
      'Good evening. See you soon.',
      'Good afternoon. See you soon.',
      'Good night. See you soon.',
      'Good morning. See you soon.',
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'goodbye',
    teaches: ['greeting by the time of day'],
  },
  {
    situation: 'School has finished. Your friend is walking home the other way.',
    prompt: '"See you tomorrow."',
    options: [
      'Hi, nice to meet you.',
      'Hello, how are you?',
      "Sorry, I'm late.",
      'Yeah, bye. See you.',
    ],
    answerIndex: 3,
    tier: 1,
    kind: 'goodbye',
    teaches: ['answering a goodbye'],
  },
  {
    situation: 'You have bought a drink in a shop. The shop assistant gives you your change.',
    prompt: '"Thank you. Bye now."',
    options: [
      'Thanks. Have a nice day.',
      'Thanks. Nice to meet you.',
      'Thanks. How are you?',
      'Thanks. Help yourself.',
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'goodbye',
    teaches: ['leaving a shop'],
  },
  {
    situation:
      'It is Friday afternoon. You are leaving school. You see your teacher, Miss Roberts.',
    prompt: 'You speak to her.',
    options: [
      'Bye, Miss. Happy New Year.',
      'Bye, Miss. Have a good weekend.',
      'Bye, Miss. Good luck in the race.',
      'Bye, Miss. I hope you feel better.',
    ],
    answerIndex: 1,
    tier: 1,
    kind: 'wishes',
    teaches: ['a weekend wish'],
  },
  {
    situation: 'Your teacher says, "The castle was enormous." You do not understand the last word.',
    prompt: 'You put up your hand.',
    options: [
      "How do you spell 'enormous', please?",
      "How do you say 'enormous', please?",
      "What does 'enormous' mean, please?",
      "Can you write 'enormous', please?",
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'classroom',
    teaches: ['classroom questions about a word'],
  },
  {
    situation: 'Your teacher is speaking very fast. You cannot follow.',
    prompt: 'You ask politely.',
    options: [
      'Could you speak more loudly, please?',
      'Could you speak more quickly, please?',
      'Could you speak more quietly, please?',
      'Could you speak more slowly, please?',
    ],
    answerIndex: 3,
    tier: 1,
    kind: 'classroom',
    teaches: ['speak more slowly'],
  },
  {
    situation: 'Your teacher tells the class where to look in the book, but you do not hear.',
    prompt: 'You ask the teacher.',
    options: [
      'Sorry, which page are we on?',
      'Sorry, how many pages are there?',
      'Sorry, whose book is this?',
      'Sorry, what time does it end?',
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'classroom',
    teaches: ['which page'],
  },
  {
    situation: 'Your teacher has explained a new task. You are confused.',
    prompt: '"Is that all clear?"',
    options: [
      "Sorry, I don't agree with you.",
      "Sorry, I don't understand.",
      "Sorry, I don't remember.",
      "Sorry, I don't like it.",
    ],
    answerIndex: 1,
    tier: 1,
    kind: 'classroom',
    teaches: ['saying you do not understand'],
  },
  {
    situation:
      'Your teacher says a new word. You want to write it down, but you do not know the letters.',
    prompt: 'You ask the teacher.',
    options: [
      'What does that mean, please?',
      'How do you say that, please?',
      'How do you spell that, please?',
      'Where does that word come from?',
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'classroom',
    teaches: ['classroom questions about a word'],
  },
  {
    situation: "You are at a friend's house. You are thirsty. Her mum is making some tea.",
    prompt: '"Would you like a cup of tea?"',
    options: [
      'Yes, I like tea very much.',
      'Yes, here you are.',
      "Yes, you're welcome.",
      'Yes, please. With milk.',
    ],
    answerIndex: 3,
    tier: 1,
    kind: 'offer',
    teaches: ['accepting an offer'],
  },
  {
    situation:
      "You are having dinner at a friend's house. You have eaten a lot and cannot eat any more.",
    prompt: '"Would you like some more?"',
    options: [
      "No, thank you. I'm full.",
      "Yes, please. I'm full.",
      "No, I don't like it at all.",
      "No, you're welcome.",
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'offer',
    teaches: ['refusing an offer'],
  },
  {
    situation: 'Your friend runs up to you, smiling.',
    prompt: '"I passed my piano exam."',
    options: [
      "Oh no. I'm sorry to hear that.",
      "Well done. That's great news.",
      'Never mind. Maybe next time.',
      'Oh dear. Get well soon.',
    ],
    answerIndex: 1,
    tier: 1,
    kind: 'news',
    teaches: ['good news'],
  },
  {
    situation: 'You meet your friend at the school gate. He looks pale.',
    prompt: '"I don\'t feel very well today."',
    options: [
      'Oh, great. Well done, you.',
      'Never mind. Better luck next time.',
      'Oh no. I hope you feel better.',
      "Oh good. That's nice to hear.",
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'news',
    teaches: ['someone is ill'],
  },
  {
    situation: 'You are on the bus. The woman next to you sneezes.',
    prompt: 'You speak to her.',
    options: ['Excuse me.', 'Cheers.', 'Sorry.', 'Bless you.'],
    answerIndex: 3,
    tier: 1,
    kind: 'wishes',
    teaches: ['bless you'],
  },
  {
    situation: 'You have an important test today. Your friend speaks to you before it starts.',
    prompt: '"Good luck with your test."',
    options: [
      "Thanks. I'll need it.",
      'Thanks. Well done.',
      'Thanks. Get well soon.',
      'Thanks. Congratulations.',
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'wishes',
    teaches: ['answering good luck'],
  },
  {
    situation: 'A new friend at your swimming club is chatting to you.',
    prompt: '"How old are you?"',
    options: ["I'm from Syria.", "I'm thirteen.", "I'm very well.", "My name's Amir."],
    answerIndex: 1,
    tier: 1,
    kind: 'introduction',
    teaches: ['personal questions'],
  },
  {
    situation: 'You have a bad cold. Your aunt phones you.',
    prompt: '"Hello, love. How are you?"',
    options: [
      'Really good, thanks. And you?',
      "I'm sorry to hear that.",
      "Not great. I've got a cold.",
      'I hope you feel better.',
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'how-are-you',
    teaches: ['how are you'],
  },
  {
    situation: 'You are in a sports shop. You want some trainers, but you cannot find them.',
    prompt: '"Hello. Can I help you?"',
    options: [
      'Yes, I can help you. What do you need?',
      "No, thanks. I'm just looking.",
      'Yes, here you are. Thank you.',
      'Yes, please. Where are the trainers?',
    ],
    answerIndex: 3,
    tier: 1,
    kind: 'shop',
    teaches: ['can I help you'],
  },
  {
    situation:
      'You are in a clothes shop. You do not need help. You want to see what the shop has first.',
    prompt: '"Hi there. Can I help you?"',
    options: [
      "No, thanks. I'm just looking.",
      "No, thanks. I'm just leaving.",
      "Yes, please. I'm a student.",
      "No, sorry. I can't help you.",
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'shop',
    teaches: ['can I help you'],
  },
  {
    situation: 'You are on a bus. The seat next to you is free. A woman points at it.',
    prompt: '"Can I sit here?"',
    options: ['No, thank you.', 'Yes, of course.', 'Yes, I can.', "You're welcome."],
    answerIndex: 1,
    tier: 1,
    kind: 'request',
    teaches: ['giving permission'],
  },
  {
    situation: 'You have one younger sister. A new friend asks about your family.',
    prompt: '"Have you got any brothers or sisters?"',
    options: [
      "No, I'm an only child.",
      "Yes, I've got two cats.",
      "Yes, I've got a sister.",
      "Yes, I'm fine, thanks.",
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'introduction',
    teaches: ['family questions'],
  },
  {
    situation: 'You are at the pool with a new friend. You are a good swimmer.',
    prompt: '"Can you swim?"',
    options: ['Yes, I do.', 'Yes, I am.', 'Yes, I have.', 'Yes, I can.'],
    answerIndex: 3,
    tier: 1,
    kind: 'answers',
    teaches: ['short answers'],
  },
  {
    situation: "You get home from school. You have not eaten since lunch, and it is six o'clock.",
    prompt: '"Are you hungry?"',
    options: ['Yes, I am.', 'Yes, I do.', 'Yes, I can.', 'Yes, I have.'],
    answerIndex: 0,
    tier: 1,
    kind: 'answers',
    teaches: ['short answers'],
  },
  {
    situation: 'You play football every weekend. You love it.',
    prompt: '"Do you like football?"',
    options: ['Yes, I am.', 'Yes, I do.', 'Yes, I can.', 'Yes, I have.'],
    answerIndex: 1,
    tier: 1,
    kind: 'answers',
    teaches: ['short answers'],
  },
  {
    situation: 'You are waiting for the school bus with a friend. You look at your watch.',
    prompt: '"What time is it?"',
    options: [
      "It's Tuesday today.",
      "It's sunny and cold.",
      "It's half past eight.",
      "It's the tenth of May.",
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'answers',
    teaches: ['time, day and weather questions'],
  },
  {
    situation: 'It is the school holidays. Your friend has forgotten what day it is.',
    prompt: '"What day is it today?"',
    options: ["It's ten o'clock.", "It's very windy.", "It's in March.", "It's Thursday."],
    answerIndex: 3,
    tier: 1,
    kind: 'answers',
    teaches: ['time, day and weather questions'],
  },
  {
    situation: 'Your friend is getting ready to walk to your house. She phones you first.',
    prompt: '"What\'s the weather like?"',
    options: [
      "It's cold and windy.",
      'I like sunny days.',
      "It's half past two.",
      "It's on Thursday.",
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'answers',
    teaches: ['time, day and weather questions'],
  },
  {
    situation: 'You left your homework at home. Your teacher is collecting it.',
    prompt: '"Have you got your homework?"',
    options: [
      'Yes, here you are, Miss.',
      'Sorry, I left it at home.',
      "Sorry, I don't understand.",
      'No, thank you, Miss.',
    ],
    answerIndex: 1,
    tier: 1,
    kind: 'classroom',
    teaches: ['explaining a problem to a teacher'],
  },
  {
    situation: 'Your teacher, Mr Shah, reads your story.',
    prompt: '"Well done. This is excellent work."',
    options: ['Sorry, Sir.', "You're welcome, Sir.", 'Thank you, Sir.', 'Well done, Sir.'],
    answerIndex: 2,
    tier: 1,
    kind: 'classroom',
    teaches: ['answering praise'],
  },
  {
    situation: 'It is the last day of school before Christmas. A classmate waves goodbye.',
    prompt: '"Merry Christmas."',
    options: [
      'Thanks. Happy birthday.',
      "Thanks. You're welcome.",
      'Thanks. Get well soon.',
      'Thanks. Same to you.',
    ],
    answerIndex: 3,
    tier: 1,
    kind: 'wishes',
    teaches: ['returning a wish'],
  },
  {
    situation: 'You were ill last week. Today you are back at school, and you feel fine.',
    prompt: '"Hi. Are you feeling better now?"',
    options: [
      'Yes, much better, thanks.',
      'Yes, I hope you feel better.',
      'Yes, same to you, thanks.',
      "Yes, you're very welcome.",
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'how-are-you',
    teaches: ['feeling better'],
  },
  {
    situation: 'You left your bag on a chair in the library. A boy runs after you with it.',
    prompt: '"Excuse me. Is this your bag?"',
    options: [
      "Oh, yes, it's yours. Thanks.",
      "Oh, yes, it's mine. Thanks.",
      "Oh, yes, it's his. Thanks.",
      'Oh, yes, here you are.',
    ],
    answerIndex: 1,
    tier: 1,
    kind: 'answers',
    teaches: ['mine and yours'],
  },
  {
    situation:
      'It is your first day at a new school. The head teacher, Mr Grant, meets you at the door.',
    prompt: '"Hello. Welcome to Park Lane School."',
    options: [
      "You're welcome. It's nice to be here.",
      'Thank you. Nice to see you again.',
      "Thank you. It's nice to be here.",
      'Thanks. Same to you, Sir.',
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'greeting',
    teaches: ['welcome'],
  },
  {
    situation: 'You gave your cousin a book for her birthday. She has just opened it.',
    prompt: '"Thank you so much. I love it."',
    options: [
      'Thank you, I love it too.',
      "Oh dear, I'm so sorry.",
      'Well done. Good for you.',
      "I'm so glad you like it.",
    ],
    answerIndex: 3,
    tier: 1,
    kind: 'thanks',
    teaches: ['answering thanks for a present'],
  },
  {
    situation: 'You are standing in the doorway of a shop. A woman wants to come in.',
    prompt: '"Excuse me."',
    options: ['Oh, sorry.', 'Oh, bless you.', 'Oh, thank you.', 'Oh, well done.'],
    answerIndex: 0,
    tier: 1,
    kind: 'apology',
    teaches: ['excuse me to get past'],
  },
  {
    situation: 'A visitor at your school is looking for a teacher. You do not know where he is.',
    prompt: '"Excuse me, where\'s Mr Davies?"',
    options: [
      "Sorry, I don't understand.",
      "Sorry, I don't know.",
      "Sorry, I'm late.",
      'Sorry to hear that.',
    ],
    answerIndex: 1,
    tier: 1,
    kind: 'answers',
    teaches: ['saying you do not know', 'saying you do not understand'],
  },
  {
    situation: 'You are lost in a new town. You need to find the train station.',
    prompt: 'You stop a woman in the street.',
    options: [
      'Excuse me, what time is the next train?',
      'Excuse me, how are you today?',
      "Excuse me, where's the station, please?",
      'Excuse me, where are you from?',
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'directions',
    teaches: ['asking the way'],
  },
  {
    situation:
      "You are at a friend's house. You are very thirsty. Your friend's dad is in the kitchen.",
    prompt: 'You ask him.',
    options: [
      'Give me a glass of water, quickly.',
      'I want a glass of water now.',
      'Would you like a glass of water?',
      'Could I have some water, please?',
    ],
    answerIndex: 3,
    tier: 1,
    kind: 'request',
    teaches: ['asking for something politely'],
  },
  {
    situation: 'Your friend picks up your phone from the floor and gives it to you.',
    prompt: '"Here you are. You dropped this."',
    options: [
      "Oh, thanks. I didn't notice.",
      'Oh, no problem. Any time.',
      "Oh, never mind. It doesn't matter.",
      'Oh, same to you, thanks.',
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'thanks',
    teaches: ['thanking someone'],
  },
  {
    situation: 'Your friend shows you a photo on her phone.',
    prompt: '"Look. We\'ve got a new puppy."',
    options: [
      "Oh no. I'm sorry to hear that.",
      "Oh, how lovely. What's its name?",
      'Never mind. Maybe next time.',
      'Oh dear. I hope it gets better.',
    ],
    answerIndex: 1,
    tier: 1,
    kind: 'news',
    teaches: ['good news'],
  },
  {
    situation: 'Your friend looks upset at break time.',
    prompt: '"I think I\'ve lost my phone."',
    options: [
      'Oh good. Well done.',
      'Thanks. Same to you.',
      "Oh no. That's awful.",
      'Oh, how lovely.',
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'news',
    teaches: ['bad news'],
  },
  {
    situation: 'The doorbell rings. It is a neighbour you know. Your mum is at work.',
    prompt: '"Hello. Is your mum at home?"',
    options: [
      "No, thanks. She's at work.",
      "Yes, she's at work.",
      "No, you're welcome.",
      "No, sorry. She's at work.",
    ],
    answerIndex: 3,
    tier: 1,
    kind: 'answers',
    teaches: ['saying someone is out'],
  },
  {
    situation: 'You are wearing new shoes. A classmate looks at them.',
    prompt: '"I really like your shoes."',
    options: [
      "Thanks. They're new.",
      "Oh, you're welcome.",
      'Oh, sorry about that.',
      'Oh, same to you.',
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'thanks',
    teaches: ['answering a compliment'],
  },
  {
    situation: 'In class, the girl next to you has made a mistake in pencil. You have a rubber.',
    prompt: '"Can I borrow your rubber?"',
    options: [
      "Sorry, I haven't got one.",
      'Sure, here you go.',
      "Yes, I'd like to borrow it.",
      "Yes, you're welcome.",
    ],
    answerIndex: 1,
    tier: 1,
    kind: 'request',
    teaches: ['lending something'],
  },
  {
    situation: 'You are in a café with your family. The waiter is ready to take your order.',
    prompt: '"What would you like to drink?"',
    options: [
      'A cheese sandwich, please.',
      'I like orange juice.',
      'An orange juice, please.',
      "Yes, I'm very thirsty.",
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'shop',
    teaches: ['ordering'],
  },
  {
    situation: 'It is your first day at a new school. A boy speaks to you in the lunch queue.',
    prompt: '"Are you new here?"',
    options: [
      'No, I started today.',
      "Yes, I'm very well.",
      "Yes, I'm in the queue.",
      'Yes, I started today.',
    ],
    answerIndex: 3,
    tier: 1,
    kind: 'answers',
    teaches: ['are you new here'],
  },
  {
    situation: 'A new friend is asking you about school.',
    prompt: '"What\'s your favourite subject?"',
    options: ['I really like art.', "It's in room 12.", "It's on Mondays.", 'Mr Lee teaches it.'],
    answerIndex: 0,
    tier: 1,
    kind: 'answers',
    teaches: ['question words'],
  },
  {
    situation: 'You and a classmate are talking about birthdays.',
    prompt: '"When\'s your birthday?"',
    options: [
      "I'm going to be fourteen.",
      "It's on 4 June.",
      "It's at my house.",
      "We're having a party.",
    ],
    answerIndex: 1,
    tier: 1,
    kind: 'answers',
    teaches: ['question words'],
  },
  {
    situation: 'Your friend is looking at a photo on your wall. It shows your older brother.',
    prompt: '"Who\'s that?"',
    options: [
      "He's fifteen next month.",
      "He's in the kitchen.",
      "That's my big brother.",
      "He's very well, thanks.",
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'answers',
    teaches: ['question words'],
  },
  {
    situation: 'A new friend is asking about your day.',
    prompt: '"How do you get to school?"',
    options: [
      "At eight o'clock.",
      "It's Park Lane School.",
      'I like it a lot.',
      'By bus, usually.',
    ],
    answerIndex: 3,
    tier: 1,
    kind: 'answers',
    teaches: ['question words'],
  },
  {
    situation: 'You fall over in the playground and hurt your knee. A teacher runs over.',
    prompt: '"Oh dear. Are you OK?"',
    options: [
      "Not really. I've hurt my knee.",
      "Yes, please. I've hurt my knee.",
      'Thanks. Same to you.',
      "No problem. You're welcome.",
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'how-are-you',
    teaches: ['saying what is wrong'],
  },
  {
    situation: 'You are on a bus to the town centre. A woman getting on looks unsure.',
    prompt: '"Excuse me, is this the bus to the town centre?"',
    options: ['Yes, it does.', 'Yes, it is.', 'Yes, I am.', 'Yes, there is.'],
    answerIndex: 1,
    tier: 1,
    kind: 'answers',
    teaches: ['short answers'],
  },
  {
    situation:
      'You are on a crowded train with a heavy bag. A man stands up and points to his seat.',
    prompt: '"Would you like to sit down?"',
    options: [
      'No problem. Any time at all.',
      'Yes, of course you can sit here.',
      'Oh, yes please. Thank you.',
      "Sorry, I'm a bit late.",
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'offer',
    teaches: ['accepting an offer'],
  },
  {
    situation:
      'You are doing a puzzle in the library, and it is going well. The librarian walks past.',
    prompt: '"Do you need any help?"',
    options: [
      "No, you're welcome.",
      "Yes, I'm fine, thanks.",
      "No, sorry, I can't.",
      "No, I'm fine, thanks.",
    ],
    answerIndex: 3,
    tier: 1,
    kind: 'offer',
    teaches: ['refusing an offer'],
  },
  {
    situation: 'It is the last day of term. Your friend is excited.',
    prompt: '"We\'re going to Spain tomorrow."',
    options: [
      'Oh, have a great time.',
      'Oh no, get well soon.',
      'Oh, happy birthday to you.',
      'Oh, well done, you.',
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'wishes',
    teaches: ['wishing someone a good trip'],
  },
  {
    situation:
      'You meet a friend on the way to school. She is wearing a badge with a big 13 on it.',
    prompt: '"It\'s my birthday today."',
    options: [
      'Oh, Merry Christmas.',
      'Oh, happy birthday.',
      'Oh, get well soon.',
      'Oh, good luck.',
    ],
    answerIndex: 1,
    tier: 1,
    kind: 'wishes',
    teaches: ['birthday wishes'],
  },
  {
    situation:
      'You are staying with a British family. You leave the house for school in the morning.',
    prompt: '"Bye. Have a good day."',
    options: [
      'Thanks. Good night.',
      'Thanks. Nice to meet you.',
      'Thanks. See you later.',
      'Thanks. Welcome back.',
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'goodbye',
    teaches: ['answering a goodbye'],
  },
  {
    situation: 'You phone your grandma. She answers.',
    prompt: '"Hello?"',
    options: [
      'Hi, Grandma. Who is it, please?',
      'Hi, Grandma. Can I take a message?',
      'Hi, Grandma. Bye for now.',
      "Hi, Grandma. It's me, Leo.",
    ],
    answerIndex: 3,
    tier: 1,
    kind: 'phone',
    teaches: ['saying who you are on the phone'],
  },
  {
    situation:
      'You are in a supermarket. You need milk, but you cannot find it. An assistant is filling the shelves.',
    prompt: 'You speak to the assistant.',
    options: [
      "Excuse me, where's the milk, please?",
      'Excuse me, how much is the milk?',
      'Excuse me, is the milk fresh today?',
      'Excuse me, do you like milk?',
    ],
    answerIndex: 0,
    tier: 1,
    kind: 'shop',
    teaches: ['asking where something is'],
  },
  {
    situation: 'Your bus arrives at your stop. You walk to the front door to get off.',
    prompt: 'You speak to the driver.',
    options: [
      'Hello. A single, please.',
      'Thanks very much. Bye.',
      "Sorry I'm late. Bye.",
      "You're welcome. Bye.",
    ],
    answerIndex: 1,
    tier: 1,
    kind: 'goodbye',
    teaches: ['thanking the driver'],
  },
  {
    situation: 'You feel ill in class, so you go to the school nurse.',
    prompt: '"Hello. What\'s the matter?"',
    options: [
      "I'm thirteen years old.",
      "I'm in Year 8.",
      "I've got a headache.",
      "It's half past ten.",
    ],
    answerIndex: 2,
    tier: 1,
    kind: 'how-are-you',
    teaches: ['saying what is wrong'],
  },
  {
    situation: 'Some children are playing football in the park. One of them waves at you.',
    prompt: '"Do you want to play with us?"',
    options: [
      'Yes, I play every Sunday.',
      "No, thanks. I'm full.",
      'Yes, here you are.',
      "Yes, I'd love to. Thanks.",
    ],
    answerIndex: 3,
    tier: 1,
    kind: 'offer',
    teaches: ['accepting an invitation'],
  },
  // @@TIER1_END

  // ── Tier 2 (A2): the phrase that fits the person and the moment ───────────
  {
    situation: 'Your friend Jay sends you a text message.',
    prompt: '"Hey. How\'s it going?"',
    options: [
      'Not bad, thanks. You?',
      "I'm going to the park.",
      "By bus, it's quicker.",
      'Bye. See you soon.',
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'how-are-you',
    teaches: ['how is it going'],
  },
  {
    situation: 'You meet an old friend of your family. You have not seen her for two years.',
    prompt: '"Long time no see. How have you been?"',
    options: [
      'Nice to meet you too.',
      'Really well, thanks. You?',
      "I've been to Spain.",
      'Since last summer, I think.',
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'how-are-you',
    teaches: ['how have you been'],
  },
  {
    situation: 'Your name is Tom. You join a new football club and want to talk to another player.',
    prompt: 'You speak first.',
    options: [
      "Hi, I'm Tom. Who are you?",
      "Hi, I'm Tom. What do you want?",
      "Hi, I'm Tom. What's your name?",
      "Hi, I'm Tom. Nice to see you again.",
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'introduction',
    teaches: ['introducing yourself'],
  },
  {
    situation:
      "You are at your friend Ben's house. His mum comes into the kitchen. You have not met her before.",
    prompt: '"Mum, this is my friend from school."',
    options: [
      'Hiya, mate. You alright?',
      'Hello. Nice to see you again.',
      'Oh, hello. Thanks a lot.',
      "Hello. It's nice to meet you.",
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'introduction',
    teaches: ['nice to meet you'],
  },
  {
    situation: 'You have no pen. Your classmate has two.',
    prompt: 'You ask her.',
    options: [
      'Could I borrow a pen, please?',
      'Could I lend you a pen, please?',
      'Would you like to borrow a pen?',
      'Do you want one of my pens?',
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'request',
    teaches: ['borrow and lend'],
  },
  {
    situation: 'Your classmate did not hear the homework. She asks you.',
    prompt: '"Could you say that again, please?"',
    options: ['Yes, I could.', 'Yes, of course.', 'No, thank you.', "You're welcome."],
    answerIndex: 1,
    tier: 2,
    kind: 'request',
    teaches: ['could you as a request'],
  },
  {
    situation: 'It is very hot in the classroom. You would like to open the window yourself.',
    prompt: 'You ask the teacher.',
    options: [
      'Must I open the window, please?',
      'Do you open the window, please?',
      'Is it OK if I open the window?',
      'Did you open the window, please?',
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'request',
    teaches: ['asking permission'],
  },
  {
    situation: 'You are at the bus stop. Your phone is dead, so you do not know the time.',
    prompt: 'You speak to a woman next to you.',
    options: [
      'Excuse me, have you got some time?',
      "Excuse me, what's the date today?",
      'Excuse me, do you know the way?',
      'Excuse me, have you got the time?',
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'request',
    teaches: ['have you got the time'],
  },
  {
    situation:
      'You are on the phone with a friend. You have talked for a long time, and now you need to go.',
    prompt: 'You end the call.',
    options: [
      'OK, bye for now. Take care.',
      "Hello? Who's calling, please?",
      'OK, nice to meet you. Bye.',
      'Can I take a message, please?',
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'phone',
    teaches: ['ending a call'],
  },
  {
    situation: 'You need to go to the toilet during a lesson.',
    prompt: 'You ask the teacher.',
    options: [
      'Must I go to the toilet, please?',
      'May I go to the toilet, please?',
      'Shall I go to the toilet, please?',
      'Should I go to the toilet, please?',
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'classroom',
    teaches: ['asking permission'],
  },
  {
    situation:
      'You are walking your dog early on a sunny day. A man you do not know walks past and smiles.',
    prompt: 'You speak to him.',
    options: [
      'Good night. Lovely day.',
      'Nice to meet you.',
      'Morning. Lovely day.',
      'How do you do?',
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'greeting',
    teaches: ['greeting a stranger', 'greeting by the time of day'],
  },
  {
    situation: 'It is your birthday. A friend sends you a message.',
    prompt: '"Happy birthday. Have a great day."',
    options: [
      'Happy birthday to you too.',
      'Thank you. Same to you.',
      "Oh, you're welcome.",
      "Thank you. That's so kind.",
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'wishes',
    teaches: ['returning a wish', 'birthday wishes'],
  },
  {
    situation: 'You live in Manchester. A friend from your football team sees you in town.',
    prompt: '"Alright?"',
    options: [
      'Yeah, not bad. You?',
      "Yes, that's fine with me.",
      "Yes, you're right.",
      'Bye, see you soon.',
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'greeting',
    teaches: ['alright as a greeting'],
  },
  {
    situation:
      'You meet a friend from your old primary school in town. You have not seen him for two years.',
    prompt: 'You speak first.',
    options: [
      "Hi. It's so nice to meet you.",
      'Hi. Great to see you again.',
      'Hi. It was nice meeting you.',
      'Hi. Have a lovely day, then.',
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'greeting',
    teaches: ['seeing someone again', 'nice to meet you'],
  },
  {
    situation:
      'It is 9 pm. You arrive at a hotel with your family. The receptionist looks up and smiles.',
    prompt: 'You greet her.',
    options: ['Good night.', 'Good afternoon.', 'Good evening.', 'Goodbye.'],
    answerIndex: 2,
    tier: 2,
    kind: 'greeting',
    teaches: ['greeting by the time of day'],
  },
  {
    situation: 'At a family party, an uncle you have not met before is chatting to you.',
    prompt: '"So, what do you do?"',
    options: [
      "I'm doing my homework.",
      "I'm doing fine, thanks.",
      'I live near Leeds.',
      "I'm still at school.",
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'introduction',
    teaches: ['what do you do'],
  },
  {
    situation: 'You moved from Iran to Leeds last year. A new classmate is getting to know you.',
    prompt: '"Where do you live?"',
    options: [
      'In Leeds, near the park.',
      "I'm from Iran.",
      'With my mum and my sister.',
      "I'm fourteen.",
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'introduction',
    teaches: ['where from and where live', 'personal questions'],
  },
  {
    situation:
      'You are walking with your friend Kasia. Your teacher, Mr Brown, stops to say hello. He has not met Kasia.',
    prompt: 'You introduce Kasia to him.',
    options: [
      'Mr Brown, she is my friend Kasia.',
      'Mr Brown, this is my friend Kasia.',
      'Mr Brown, it is my friend Kasia.',
      'Mr Brown, I present my friend Kasia.',
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'introduction',
    teaches: ['introducing someone'],
  },
  {
    situation: "You are leaving your friend's house after a sleepover. You say goodbye to her mum.",
    prompt: 'You speak to her mum.',
    options: [
      'Thank you for coming.',
      "You're very welcome. Bye.",
      'Thank you for having me.',
      'Thanks. Same to you.',
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'thanks',
    teaches: ['thanks for having me'],
  },
  {
    situation: 'It is your birthday party at home. Your friends are leaving.',
    prompt: '"Thanks for having us. It was great."',
    options: [
      'Thanks for having me. See you soon.',
      'Thanks for inviting me. See you soon.',
      'Same to you. See you soon.',
      'Thanks for coming. See you soon.',
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'thanks',
    teaches: ['thanks for having me'],
  },
  {
    situation:
      'You are on a train. The seat next to you is empty, and you are happy for someone to sit there.',
    prompt: '"Excuse me, do you mind if I sit here?"',
    options: [
      'No, not at all.',
      'Yes, I do mind, sorry.',
      'No, thank you, I am fine.',
      "Sorry, I can't help you.",
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'request',
    teaches: ['do you mind'],
  },
  {
    situation:
      'You are next to the window on a hot bus. The window is easy to open. The woman behind you speaks.',
    prompt: '"Would you mind opening the window a little?"',
    options: [
      'Yes, I would mind.',
      'No, of course not.',
      'Yes, please, thanks.',
      'No, thanks. I am fine.',
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'request',
    teaches: ['do you mind'],
  },
  {
    situation: 'You need your bike today to get to football. A friend asks to borrow it.',
    prompt: '"Can I borrow your bike this afternoon?"',
    options: [
      "No, you can't have it.",
      'Yes, of course you can.',
      'Sorry, I need it today.',
      "Yes, you're welcome to it.",
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'request',
    teaches: ['saying no politely'],
  },
  {
    situation:
      "Your friend's family invites you to dinner on Friday. You already have a swimming lesson then.",
    prompt: '"Would you like to come for dinner on Friday?"',
    options: [
      "No, I don't want to come to dinner.",
      "Yes, I'd love to come on Friday.",
      "No, thank you. I'm already full.",
      "I'd love to, but I've got swimming.",
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'offer',
    teaches: ['refusing an invitation'],
  },
  {
    situation: 'A classmate is having a party on Saturday. You are free, and you would like to go.',
    prompt: '"Do you want to come to my party on Saturday?"',
    options: [
      "Thanks. I'd love to come.",
      'Thanks. I love parties.',
      'Thanks. You can come too.',
      'Thanks. I came last year.',
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'offer',
    teaches: ['accepting an invitation'],
  },
  {
    situation:
      "You are at your friend's house on a cold day. Her dad is making hot drinks. You would love one.",
    prompt: '"Fancy a hot chocolate?"',
    options: [
      "I'm fine, thanks.",
      'Ooh, yes please.',
      'Here you are, thanks.',
      "No, thanks. I'm full.",
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'offer',
    teaches: ['fancy a', 'refusing an offer'],
  },
  {
    situation: 'You are carrying three heavy boxes into school. A teacher sees you.',
    prompt: '"Shall I carry one of those for you?"',
    options: [
      'Yes, you shall, Sir.',
      'Yes, I can carry one for you.',
      'That would be great, thanks.',
      'No problem, Sir. Any time.',
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'offer',
    teaches: ['shall I offers'],
  },
  {
    situation: 'It is a sunny Saturday. You and your friend are bored at home.',
    prompt: '"Shall we go to the park?"',
    options: [
      'Yes, we shall.',
      'Yes, I go to the park.',
      "No, thanks. I'm full.",
      "Good idea. Let's go.",
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'offer',
    teaches: ['suggestions'],
  },
  {
    situation: 'Your friend is quiet today. You ask what is wrong.',
    prompt: '"My grandad is in hospital."',
    options: [
      "Oh, I'm sorry to hear that.",
      "Oh, I'm sorry. It's my fault.",
      'Oh, never mind.',
      'Oh, get well soon.',
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'news',
    teaches: ['bad news'],
  },
  {
    situation: 'Your friend arrives at school smiling.',
    prompt: '"My aunt has just had a baby girl."',
    options: [
      "Oh, I'm so sorry to hear that news.",
      "Oh, how lovely. What's she called?",
      "Well done, you. That's brilliant.",
      'Oh dear. I hope she gets well soon.',
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'news',
    teaches: ['good news'],
  },
  {
    situation: 'Your friend tried to join the school netball team.',
    prompt: '"I didn\'t get into the team."',
    options: [
      'Oh, congratulations.',
      "Oh, sorry. It's my fault.",
      'Oh, what a shame.',
      'Oh, lucky you.',
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'news',
    teaches: ['bad news'],
  },
  {
    situation: 'You are visiting a new town for the day. A man stops you in the street.',
    prompt: '"Excuse me, do you know where Elm Street is?"',
    options: [
      "Sorry, I don't know you at all.",
      "Yes, it's a really nice street.",
      "Sorry, I'm not very well.",
      "Sorry, I'm not from round here.",
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'directions',
    teaches: ['cannot give directions'],
  },
  {
    situation: 'On your first day, the teacher asks your name. You say it very quietly.',
    prompt: '"Sorry?"',
    options: [
      "Sorry, it's Wiktoria.",
      "That's OK, don't worry.",
      "Oh, I'm sorry too.",
      "You're welcome, Miss.",
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'checking',
    teaches: ['asking someone to repeat'],
  },
  {
    situation:
      'You are paying in a noisy shop. The assistant asks you something, but you do not hear it.',
    prompt: 'You did not hear the question.',
    options: [
      'What? Say it again.',
      'Sorry, what was that?',
      'Sorry about that. My fault.',
      "Yes, please. That's fine.",
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'checking',
    teaches: ['asking someone to repeat'],
  },
  {
    situation:
      'You are in a café with a friend. You are ready to order, and the waiter is walking past.',
    prompt: 'You speak to the waiter.',
    options: [
      'Hey, you. We want to order.',
      'Pardon. Could we order, please?',
      'Excuse me. Can we order, please?',
      'Come here. We want to order now.',
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'shop',
    teaches: ['getting attention politely'],
  },
  {
    situation:
      'You and an older man reach a door at the same time. He opens it and steps back for you.',
    prompt: '"After you."',
    options: [
      "Oh, you're very welcome.",
      'Oh, never mind, then.',
      "Oh, I'm sorry to hear that.",
      'Oh, thanks very much.',
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'thanks',
    teaches: ['after you'],
  },
  {
    situation:
      'On a school trip to a castle, a guide leads your class down some old stone stairs into a cellar.',
    prompt: '"Mind your head."',
    options: [
      "Thanks. It's very low.",
      "Oh, I don't mind at all.",
      "Oh, you're very welcome.",
      'Oh, bless you.',
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'thanks',
    teaches: ['warnings'],
  },
  {
    situation:
      "You are visiting your friend's house. Her dad puts a plate of biscuits on the table.",
    prompt: '"Help yourself to a biscuit."',
    options: [
      "Sorry, I can't help you.",
      'Thanks. They look nice.',
      "OK, I'll help you now.",
      "You're welcome. Enjoy them.",
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'offer',
    teaches: ['help yourself'],
  },
  {
    situation: 'You are in a restaurant. The waiter puts your pizza on the table.',
    prompt: '"Here you are. Enjoy your meal."',
    options: [
      'Thanks. Enjoy your meal too.',
      "You're welcome. Enjoy it.",
      'Thank you. It looks great.',
      "Yes, please. I'd love one.",
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'shop',
    teaches: ['enjoy your meal', 'returning a wish'],
  },
  {
    situation: 'It is Friday. Your friend is leaving school. You will both be at home all weekend.',
    prompt: '"Have a good weekend."',
    options: [
      'Thanks. Me too.',
      'Thanks. Me neither.',
      "Thanks. You're welcome.",
      'Thanks. You too.',
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'wishes',
    teaches: ['returning a wish', 'me too and you too'],
  },
  {
    situation: 'You are at a party with a friend. A song you both love starts to play.',
    prompt: '"Oh, I love this song."',
    options: [
      "Me too. It's great.",
      "You too. It's great.",
      "Me neither. It's great.",
      "So am I. It's great.",
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'agreeing',
    teaches: ['me too and you too', 'agreeing'],
  },
  {
    situation:
      'It is Sunday evening. You are texting a friend. Neither of you is looking forward to school.',
    prompt: '"I don\'t like Mondays."',
    options: [
      "So do I. They're the worst.",
      "Me neither. They're the worst.",
      "Neither am I. They're the worst.",
      "You too. They're the worst.",
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'agreeing',
    teaches: ['agreeing'],
  },
  {
    situation:
      'You and your friend have just finished a long cross-country run. You are both exhausted.',
    prompt: '"I\'m so tired."',
    options: [
      'So do I. That was hard.',
      'Me neither. That was hard.',
      'So am I. That was hard.',
      'Neither am I. That was hard.',
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'agreeing',
    teaches: ['agreeing'],
  },
  {
    situation:
      'You are waiting at a bus stop on a warm, sunny morning. An older woman smiles at you.',
    prompt: '"Lovely day, isn\'t it?"',
    options: [
      'Thanks. Same to you.',
      "Yes, it's Tuesday.",
      "No, it isn't, thanks.",
      "Yes, it's beautiful.",
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'greeting',
    teaches: ['small talk about the weather'],
  },
  {
    situation: 'You hold the shop door open for a man carrying boxes.',
    prompt: '"Cheers, mate."',
    options: [
      'Oh, no problem.',
      'Oh, cheers to you too.',
      'Oh, excuse me, please.',
      "Oh, I'm sorry, mate.",
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'thanks',
    teaches: ['answering thanks'],
  },
  {
    situation: 'You are buying a sandwich in a café. You want to eat it on the train.',
    prompt: '"Is that to eat in or take away?"',
    options: [
      'Yes, please. Thank you.',
      'To take away, please.',
      "No, thank you. I'm full.",
      "I'd like it very much.",
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'shop',
    teaches: ['either-or questions'],
  },
  {
    situation: "Your friend's mum is making drinks. You would like tea.",
    prompt: '"Would you like tea or coffee?"',
    options: ['Yes, please.', 'Yes, I would.', 'Tea, please.', 'No, thank you.'],
    answerIndex: 2,
    tier: 2,
    kind: 'offer',
    teaches: ['either-or questions'],
  },
  {
    situation: 'You are in a busy café. The chair next to you is empty. A woman points at it.',
    prompt: '"Excuse me, is anyone sitting here?"',
    options: ['Yes, go ahead.', 'No, thank you.', 'Yes, I am.', 'No, go ahead.'],
    answerIndex: 3,
    tier: 2,
    kind: 'request',
    teaches: ['giving permission'],
  },
  {
    situation:
      'You are waiting at the counter in a busy bakery. An assistant is already putting your cakes in a box.',
    prompt: 'Another assistant: "Are you being served?"',
    options: [
      "Yes, thanks. She's helping me.",
      "Yes, please. I'd like two cakes.",
      "No, thanks. I'm just looking.",
      "Yes, I'm serving myself.",
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'shop',
    teaches: ['are you being served'],
  },
  {
    situation: 'You are paying at a supermarket checkout. You have brought your own shopping bag.',
    prompt: '"Do you need a bag?"',
    options: [
      "Yes, please. I've brought one.",
      "No, thanks. I've brought one.",
      "No, thanks. I'm just looking.",
      'Yes, I need it, thank you.',
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'shop',
    teaches: ['refusing an offer'],
  },
  {
    situation:
      'You arrive to stay with a British family for a week. The mum shows you the living room.',
    prompt: '"Make yourself at home."',
    options: [
      "Sorry, I can't make it today.",
      'Thanks. Same to you.',
      "Thanks. That's very kind.",
      "No, thanks. I'm full.",
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'thanks',
    teaches: ['make yourself at home'],
  },
  {
    situation:
      "You arrive at your friend's house. You are thirsty after the walk. Her mum speaks to you.",
    prompt: '"Can I get you anything?"',
    options: [
      'Yes, you can get it.',
      "No, I can't get anything.",
      'Get me some water.',
      'Just some water, please.',
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'offer',
    teaches: ['accepting an offer'],
  },
  {
    situation:
      'A visitor to your town stops you outside the station. There is a bank next to the station.',
    prompt: '"Excuse me, is there a bank near here?"',
    options: [
      'Yes, next to the station.',
      "Yes, I'm going to the bank.",
      'Yes, it opens at nine.',
      "Yes, I've got a bank card.",
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'directions',
    teaches: ['giving directions'],
  },
  {
    situation: 'In the supermarket, an old man dropped some apples. You helped him pick them up.',
    prompt: '"That\'s very kind of you. Thank you."',
    options: [
      'Never mind. Happy to help.',
      'Not at all. Happy to help.',
      'Yes, I am very kind.',
      'Thank you. You too.',
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'thanks',
    teaches: ['answering thanks'],
  },
  {
    situation: 'A new classmate told you her name this morning, but you have forgotten it.',
    prompt: 'You speak to her at lunch.',
    options: [
      'Sorry, who are you again?',
      'Sorry, can you tell me who you are?',
      "Sorry, what's your name again?",
      'Sorry, do you have a name?',
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'introduction',
    teaches: ['forgetting a name'],
  },
  {
    situation: "It is very hot in your friend's car. Her mum is driving.",
    prompt: '"Shall I open a window for you?"',
    options: [
      'Yes, you shall open it.',
      "Yes, I'd like to open it.",
      "No, thanks. It's really hot.",
      "Yes, please. It's really hot.",
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'offer',
    teaches: ['shall I offers'],
  },
  {
    situation: 'You have no plans this Saturday. A friend calls you.',
    prompt: '"Are you free on Saturday?"',
    options: [
      'Yes, I think so. Why?',
      "Yes, it doesn't cost anything.",
      'No, it costs five pounds.',
      "Yes, it's on Saturday.",
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'offer',
    teaches: ['are you free'],
  },
  {
    situation: 'Your neighbour waves at you over the garden fence.',
    prompt: '"Hi. Could you do me a favour?"',
    options: [
      'Yes, please. Thank you.',
      'Sure. What do you need?',
      "No, I'm fine, thanks.",
      "You're welcome, any time.",
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'request',
    teaches: ['do me a favour'],
  },
  {
    situation: "You have just won the school poetry prize. Your friend's mum speaks to you.",
    prompt: '"Congratulations. That\'s wonderful news."',
    options: [
      'Same to you. Thank you.',
      "Thank you. You're welcome.",
      "Thanks. I'm really pleased.",
      'Well done to you too.',
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'wishes',
    teaches: ['answering congratulations'],
  },
  {
    situation: 'You and a friend have just come out of the cinema. You loved the film.',
    prompt: '"What did you think of it?"',
    options: [
      'I think it starts at seven.',
      'I saw it with my sister.',
      'Yes, I think so too.',
      'I thought it was brilliant.',
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'agreeing',
    teaches: ['giving an opinion'],
  },
  {
    situation: 'A new teacher comes into your class for the first time.',
    prompt: '"Good morning, everyone. I\'m Mr Okafor."',
    options: [
      'Good morning, Mr Okafor.',
      'Good morning, Okafor.',
      'Good morning, teacher.',
      'Good morning, my teacher.',
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'greeting',
    teaches: ['names and titles'],
  },
  {
    situation:
      'You are waiting for a train. A woman next to you has no watch. Your phone says 4.10.',
    prompt: '"Sorry, have you got the time?"',
    options: [
      "Yes, I've got lots of time.",
      "Yes, it's ten past four.",
      "No, sorry, I'm very busy.",
      "Yes, I've got a phone.",
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'answers',
    teaches: ['have you got the time'],
  },
  {
    situation:
      'You have waited a few minutes at the counter of a busy chemist. The assistant comes over.',
    prompt: '"Sorry to keep you waiting."',
    options: [
      "Yes, you're very slow.",
      "You're welcome. Bye.",
      "That's OK. No problem.",
      "I'm sorry too.",
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'apology',
    teaches: ['accepting an apology'],
  },
  {
    situation: 'You arrive at the library at 5.05 pm. A member of staff is locking the door.',
    prompt: '"Sorry, I\'m afraid we\'re closed."',
    options: [
      "Don't be afraid. I'm very friendly.",
      'Yes, please. Thank you very much.',
      'Oh, OK. Thanks for coming.',
      'Oh, OK. When do you open tomorrow?',
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'shop',
    teaches: ["I'm afraid"],
  },
  {
    situation: 'You are buying a bottle of water at a kiosk. That is all you want.',
    prompt: '"Would you like anything else?"',
    options: [
      "No, thanks. That's all.",
      "Yes, please. That's all.",
      "No, I'm just looking.",
      'Yes, everything, thanks.',
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'shop',
    teaches: ['anything else'],
  },
  {
    situation: 'You are paying for a T-shirt in a clothes shop. You want to use your bank card.',
    prompt: '"How would you like to pay?"',
    options: [
      "I'd like it very much.",
      'By card, please.',
      'With pleasure, thanks.',
      'Yes, I would like to.',
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'shop',
    teaches: ['paying'],
  },
  {
    situation: 'Your friend is leaving your house to go home. She says goodbye at the door.',
    prompt: '"Bye. Take care."',
    options: ['Me too. Bye.', "I'll take it. Bye.", 'You too. Bye.', 'Thanks. Get well soon.'],
    answerIndex: 2,
    tier: 2,
    kind: 'goodbye',
    teaches: ['returning a wish', 'me too and you too'],
  },
  {
    situation:
      'Your friend is at your house. She knocks over a glass of water by accident. It is only water.',
    prompt: '"Oh no, I\'m so sorry."',
    options: [
      "Well done. I'll get a cloth.",
      "You're welcome. I'll get a cloth.",
      "Bless you. I'll get a cloth.",
      "Never mind. I'll get a cloth.",
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'apology',
    teaches: ['accepting an apology'],
  },
  {
    situation:
      'Your name is Sam. A shop said it would phone you today about a Saturday job. Your phone rings, and you do not know the number.',
    prompt: '"Hello, is that Sam?"',
    options: [
      'Yes, speaking.',
      'Yes, I am speaking.',
      'Yes, that is Sam.',
      "Yes, it's Sam's phone.",
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'phone',
    teaches: ['speaking on the phone'],
  },
  {
    situation:
      "You are at home. The phone rings. The caller wants a pizza shop, but this is your family's number.",
    prompt: '"Hello, is that Pizza Palace?"',
    options: [
      'Yes, it is. What pizza would you like?',
      "Sorry, I think it's the wrong number.",
      "Sorry, I'm not hungry right now.",
      'Sorry, she is not here right now.',
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'phone',
    teaches: ['wrong number'],
  },
  {
    situation: 'You phone your friend Ella. Her dad answers.',
    prompt: '"Hello? Who\'s calling, please?"',
    options: [
      "Here is Maria, Ella's friend.",
      "I'm calling Maria, Ella's friend.",
      "It's Maria, Ella's friend.",
      "You're calling Maria, Ella's friend.",
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'phone',
    teaches: ['saying who you are on the phone'],
  },
  {
    situation: 'Your bus did not come, so you arrive ten minutes late for your English lesson.',
    prompt: 'You go into the classroom.',
    options: [
      'Hi, Miss. Did I miss anything good today?',
      "Excuse me, Miss. I'm here now, OK?",
      'Sorry to hear that, Miss.',
      "Sorry I'm late. The bus didn't come.",
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'classroom',
    teaches: ['apologising for being late'],
  },
  {
    situation:
      'It is Monday morning. You went swimming on Saturday. A classmate asks about your weekend.',
    prompt: '"How was your weekend?"',
    options: [
      'Great, thanks. I went swimming.',
      "Great, thanks. I'll go swimming.",
      'Great, thanks. I go swimming.',
      "Great, thanks. I'm going swimming.",
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'answers',
    teaches: ['tense in a reply'],
  },
  {
    situation:
      'It is Thursday. You have plans to visit your cousins on Saturday. A friend asks about your plans.',
    prompt: '"What are you doing at the weekend?"',
    options: [
      'I visited my cousins.',
      "I'm visiting my cousins.",
      "I've visited my cousins.",
      'I was visiting my cousins.',
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'answers',
    teaches: ['tense in a reply'],
  },
  {
    situation: 'You are walking down the street. A woman calls after you.',
    prompt: '"Excuse me. You\'ve dropped your glove."',
    options: [
      "Oh, you're very welcome.",
      'Oh, same to you.',
      'Oh, thank you so much.',
      "Oh, I'm sorry to hear that.",
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'thanks',
    teaches: ['thanking someone', 'dropped something'],
  },
  {
    situation: 'Your friend is nervous. She has an interview for a Saturday job tomorrow.',
    prompt: '"I\'ve got my interview tomorrow."',
    options: [
      'Congratulations. Well done.',
      'Never mind. Next time.',
      'Bless you. Get well soon.',
      "Good luck. You'll be great.",
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'wishes',
    teaches: ['wishing good luck'],
  },
  {
    situation: 'You have been ill at home for a week. A classmate brings you a card.',
    prompt: '"Here. Get well soon."',
    options: [
      "Aw, thank you. That's kind.",
      'Thanks. I hope you get well too.',
      'Thanks. Same to you.',
      'Thanks. Well done.',
    ],
    answerIndex: 0,
    tier: 2,
    kind: 'wishes',
    teaches: ['returning a wish'],
  },
  {
    situation: 'It is a cold day on the train. You are already cold. The man next to you speaks.',
    prompt: '"Do you mind if I open the window?"',
    options: [
      'No, not at all. Please go ahead.',
      "Sorry, I'm a bit cold, actually.",
      'Yes, please open it.',
      "Oh, I'm sorry to hear that.",
    ],
    answerIndex: 1,
    tier: 2,
    kind: 'request',
    teaches: ['do you mind'],
  },
  {
    situation:
      "You arrive at a friend's birthday dinner. Her dad opens the door and holds out his hand.",
    prompt: '"Come in. Can I take your coat?"',
    options: [
      "Sorry, it's my coat.",
      'Yes, you can have it.',
      'Thanks. Here you are.',
      'No problem. Any time.',
    ],
    answerIndex: 2,
    tier: 2,
    kind: 'offer',
    teaches: ['host phrases'],
  },
  {
    situation: 'You stayed after the lesson to help your teacher tidy the classroom.',
    prompt: '"Thank you for helping me tidy up."',
    options: [
      'Thank you too, Miss.',
      'Never mind, Miss.',
      'Same to you, Miss.',
      'No problem, Miss.',
    ],
    answerIndex: 3,
    tier: 2,
    kind: 'thanks',
    teaches: ['answering thanks'],
  },
  // @@TIER2_END

  // ── Tier 3 (B1): a short exchange, where the person and the place decide ──
  {
    situation:
      'You have an interview for a Saturday job at a café. You arrive and go to the counter.',
    prompt: 'Assistant: "Hi there. What can I get you?"',
    options: [
      "Hello. I'm here for an interview at ten.",
      'Hiya. Just a large hot chocolate, please.',
      "Hi. I'm here. Where's the boss, then?",
      'Hello. What can I get for you today?',
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'interview',
    teaches: ['arriving for an interview'],
  },
  {
    situation: 'You are at an interview for a Saturday job. The manager comes over to meet you.',
    prompt: 'Manager: "Hello. You must be Ana. I\'m Ruth Clarke."',
    options: [
      "Yeah, that's me. Alright, Ruth?",
      'Yes, hello. Nice to meet you.',
      'Yes, I must be. Who are you?',
      'Hello. Nice to see you again.',
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'interview',
    teaches: ['meeting an interviewer', 'nice to meet you'],
  },
  {
    situation: 'You are at an interview for a job at a sports shop.',
    before: [
      { who: 'Manager', says: '"Come in and take a seat."' },
      { who: 'You', says: '"Thank you."' },
    ],
    prompt: 'Manager: "Did you find us all right?"',
    options: [
      "Yes, I'm all right, thank you.",
      'Yeah, no worries, mate.',
      'Yes, thanks. It was easy.',
      "No, I didn't look for you.",
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'interview',
    teaches: ['interview small talk'],
  },
  {
    situation: 'You are waiting for an interview at an office.',
    before: [{ who: 'Receptionist', says: '"Mrs Hill will be with you in a few minutes."' }],
    prompt: 'Receptionist: "Can I get you a drink while you wait?"',
    options: [
      'Yeah, get me a cola.',
      'Yes, you can get me one.',
      "No. I don't want anything from you.",
      'Water would be lovely, thanks.',
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'interview',
    teaches: ['accepting an offer'],
  },
  {
    situation: 'You are at an interview for a weekend job at a garden centre.',
    before: [{ who: 'Interviewer', says: '"Thanks for coming in today."' }],
    prompt: 'Interviewer: "So, tell me a bit about yourself."',
    options: [
      "I'm sixteen, and I love being outdoors.",
      "I'm fine, thanks. And how are you today?",
      'What do you want to know about me, mate?',
      "Nothing much, really. I'm just me.",
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'interview',
    teaches: ['interview answers'],
  },
  {
    situation: 'Your interview for a job at a bookshop is nearly over.',
    before: [{ who: 'Manager', says: '"I think that\'s everything from me."' }],
    prompt: 'Manager: "Do you have any questions for us?"',
    options: [
      'No, not really. Can I go home now?',
      'Yes. What hours would I work?',
      'Yes. How old are you?',
      'Yes. How much money do you earn here?',
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'interview',
    teaches: ['questions at the end of an interview'],
  },
  {
    situation: 'Your interview for a job at a cinema has finished. The manager stands up.',
    before: [{ who: 'Manager', says: '"Well, thank you for coming."' }],
    prompt: 'Manager: "We\'ll be in touch next week."',
    options: [
      'Cheers, mate. See you around, then.',
      "You're welcome. Come again any time.",
      'Thank you for seeing me today.',
      'Thank you. Same to you, then.',
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'interview',
    teaches: ['ending an interview'],
  },
  {
    situation: 'You have an interview to join a sixth-form college.',
    before: [{ who: 'Teacher', says: '"So, you want to study here next year."' }],
    prompt: 'Teacher: "Which subjects are you interested in?"',
    options: [
      "I'm a very interesting person, I think.",
      "Yes, I'm very interested, thank you.",
      "Science, I suppose. Whatever's easiest.",
      "I'd like to study biology and chemistry.",
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'interview',
    teaches: ['interested and interesting'],
  },
  {
    situation: 'You have waited ten minutes for an interview. The manager comes to meet you.',
    prompt: 'Manager: "I\'m so sorry to keep you waiting."',
    options: [
      "That's quite all right.",
      "Yes, you're very late.",
      'No worries, mate. Happens.',
      "You're welcome. Thank you.",
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'interview',
    teaches: ['accepting an apology'],
  },
  {
    situation:
      'It is your first day of work experience at a newspaper office. You go to reception.',
    prompt: 'Receptionist: "Good morning. Can I help you?"',
    options: [
      "Morning. Where's Mr Hall, then?",
      "Hello. I'm here to see Mr Hall.",
      'Yes, please. How can I help you?',
      "Hi. I'm the new boy. I work here now.",
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'interview',
    teaches: ['arriving for an interview'],
  },
  {
    situation: 'You are at an interview for a Saturday job at a bakery.',
    before: [{ who: 'Owner', says: '"I think you\'d be great here."' }],
    prompt: 'Owner: "When could you start?"',
    options: [
      "Whenever. I'm not bothered, to be honest.",
      'I started there last year, I think.',
      "Next Saturday, if that's OK.",
      'Yes, I could start it.',
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'interview',
    teaches: ['interview answers'],
  },
  {
    situation: "You have an interview to help at a children's reading club at the library.",
    prompt: 'Librarian: "Why would you like to help at the club?"',
    options: [
      'Because my mum told me I had to, really.',
      'Yes, I would like to help very much, thank you.',
      "I wouldn't, really. It's only for my CV.",
      'I love reading, and I like helping children.',
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'interview',
    teaches: ['interview answers'],
  },
  {
    situation: 'You need to see a doctor. You phone your local surgery.',
    prompt: 'Receptionist: "Good morning, Park Road Surgery. How can I help?"',
    options: [
      'Hello. Could I make an appointment?',
      'Hiya. I want to see a doctor, yeah?',
      'Good morning. How can I help you?',
      'Hello. Is that you, Doctor?',
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'phone',
    teaches: ['making an appointment'],
  },
  {
    situation: 'You are phoning your local surgery.',
    before: [
      { who: 'Receptionist', says: '"Good morning, Park Road Surgery."' },
      { who: 'You', says: '"Hello. Could I make an appointment, please?"' },
    ],
    prompt: 'Receptionist: "Of course. Can I take your name?"',
    options: [
      'Yes, of course you can take it.',
      "Yes, it's Daniel Kowalski.",
      'Why do you need my name?',
      "Daniel. What's yours, mate?",
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'phone',
    teaches: ['making an appointment'],
  },
  {
    situation: 'You are booking an appointment on the phone.',
    before: [
      { who: 'Receptionist', says: '"Can I take your name?"' },
      { who: 'You', says: '"Yes, it\'s Daniel Kowalski."' },
    ],
    prompt: 'Receptionist: "Could you spell your surname for me?"',
    options: [
      'Yes, I could.',
      "Kowalski. It's a Polish name.",
      "Yes, it's K-O-W-A-L-S-K-I.",
      "Sure. It's Daniel, D-A-N-I-E-L.",
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'phone',
    teaches: ['making an appointment'],
  },
  {
    situation:
      'You answer the phone at home. Your mum is at the shops. The caller is her friend, Mrs Evans.',
    before: [
      { who: 'Mrs Evans', says: '"Hello, love. Is your mum there, please?"' },
      { who: 'You', says: '"Sorry, she\'s out at the moment."' },
    ],
    prompt: 'Mrs Evans: "Oh, I see. When will she be back?"',
    options: [
      "She came back at six o'clock.",
      'She is very well, thank you for asking.',
      'Yesterday, I think. Can I help?',
      'About six. Can I take a message?',
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'phone',
    teaches: ['taking a message'],
  },
  {
    situation: 'You answer the phone at home. Your brother Leo is upstairs.',
    prompt: 'Caller: "Hi. Can I speak to Leo, please?"',
    options: [
      "Hold on. I'll get him.",
      'Speaking. How can I help?',
      'Yes, you can speak now.',
      "No. He's busy. Bye.",
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'phone',
    teaches: ['speaking on the phone', 'hold on'],
  },
  {
    situation:
      'You are on the phone to a friend. She is on a train, and you can hear only some of her words.',
    before: [{ who: 'Friend', says: '"So shall we meet at... the... at six?"' }],
    prompt: 'Friend: "Hello? Are you still there?"',
    options: [
      'Yes, great. See you there, then.',
      "Sorry, you're breaking up.",
      "No, I'm not there yet.",
      'Yes. Where are you going?',
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'phone',
    teaches: ['bad line'],
  },
  {
    situation: 'You phone a local college to ask about English courses.',
    prompt: 'Receptionist: "Riverside College, good afternoon."',
    options: [
      'Hiya. Tell me about your English courses.',
      'Good afternoon. Is that Riverside College?',
      "Hello. I'm calling about English courses.",
      "Hello. Who's speaking, please?",
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'phone',
    teaches: ['saying why you are calling'],
  },
  {
    situation: 'You have phoned the cinema to ask about tickets.',
    before: [{ who: 'Assistant', says: '"Let me check that for you."' }],
    prompt: 'Assistant: "Can you hold for a moment, please?"',
    options: [
      'Hold what, sorry?',
      "No, I'm fine, thanks.",
      "You're welcome. Bye.",
      'Sure, no problem.',
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'phone',
    teaches: ['hold on'],
  },
  {
    situation: 'You have booked a dentist appointment on the phone.',
    before: [{ who: 'Receptionist', says: '"So that\'s Tuesday at ten."' }],
    prompt: 'Receptionist: "Is there anything else I can help you with?"',
    options: [
      "No, that's all. Thanks for your help.",
      "Yes, please. You're welcome, any time.",
      "No, I'm fine. It was nice to meet you.",
      'Yes. Can I take a message for you?',
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'phone',
    teaches: ['ending a call'],
  },
  {
    situation:
      "You phone your friend Ella's mum to say Ella left her coat at your house. Nobody answers.",
    before: [{ who: 'Recorded voice', says: '"Please leave a message after the tone."' }],
    prompt: '(Beep.)',
    options: [
      "Hi. Who's this, please? Hello? Hello?",
      "Hi, it's Maya. Ella left her coat here.",
      'Hello? Can you hear me? Are you there?',
      'Hi. Please leave a message after the tone.',
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'phone',
    teaches: ['leaving a message'],
  },
  {
    situation: 'You phone your friend Jo. Her sister answers. Jo is in the shower.',
    before: [
      { who: 'Sister', says: '"Hello?"' },
      { who: 'You', says: '"Hi. Is Jo there, please?"' },
    ],
    prompt: 'Sister: "She\'s in the shower. Can I take a message?"',
    options: [
      'Yes, you can take it. Thanks.',
      "Oh, I'm sorry to hear that.",
      'Could you ask her to call me back?',
      "Yes, please. Hold on, I'll get her.",
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'phone',
    teaches: ['taking a message'],
  },
  {
    situation: 'You phone a bike shop to ask when it opens on Sunday.',
    before: [{ who: 'Assistant', says: '"Hello, Wheels Bike Shop. Sam speaking."' }],
    prompt: 'Assistant: "How can I help?"',
    options: [
      'Hi, Sam. Is that you speaking?',
      'Hi. Speaking. How can I help you?',
      'Hi. When did you open on Sunday?',
      'Hi. When do you open on Sunday?',
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'phone',
    teaches: ['saying why you are calling'],
  },
  {
    situation: 'You are in a restaurant with your sister. You have not chosen your food yet.',
    before: [
      { who: 'Waiter', says: '"Are you ready to order?"' },
      { who: 'You', says: '"Not quite. Could we have a few more minutes?"' },
    ],
    prompt: 'Waiter: "Of course. Can I get you any drinks while you wait?"',
    options: [
      'Two orange juices, please.',
      "No, we're ready to order now.",
      'Yes, you can get some.',
      'A few more minutes, please.',
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'shop',
    teaches: ['ordering'],
  },
  {
    situation: 'You are buying a hot chocolate in a café.',
    before: [
      { who: 'Assistant', says: '"What can I get you?"' },
      { who: 'You', says: '"A hot chocolate, please."' },
    ],
    prompt: 'Assistant: "Regular or large?"',
    options: [
      'Yes, please.',
      'Regular, please.',
      'A hot chocolate, please.',
      'Thank you very much.',
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'shop',
    teaches: ['either-or questions'],
  },
  {
    situation: 'You have finished a meal in a restaurant with your family.',
    before: [
      { who: 'Waiter', says: '"Was everything all right with your meal?"' },
      { who: 'You', says: '"Yes, it was lovely, thank you."' },
    ],
    prompt: 'Waiter: "Can I get you anything else?"',
    options: [
      "Yes, please. That's all, thanks.",
      "No, thanks. I'm just looking.",
      'Just the bill, please.',
      'Yes. Bring the bill now.',
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'shop',
    teaches: ['asking for the bill', 'anything else'],
  },
  {
    situation: 'You are eating in a café. Your soup is cold.',
    prompt: 'Waitress: "Is everything all right with your food?"',
    options: [
      'This soup is disgusting. Take it away.',
      'Yes, everything is lovely, thanks.',
      "Excuse me. I'm sorry about the soup.",
      'Sorry, but my soup is a bit cold.',
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'shop',
    teaches: ['complaining politely'],
  },
  {
    situation:
      'You paid for a £3.50 sandwich with a £10 note. The assistant gives you £1.50 change.',
    prompt: 'Assistant: "There you go. Here\'s your change."',
    options: [
      'Sorry, I gave you a ten, not a five.',
      "You've stolen my money. Give it back.",
      'Thanks. Keep the change, then.',
      'Thanks. Have a nice day.',
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'shop',
    teaches: ['complaining politely'],
  },
  {
    situation:
      'You bought a jumper yesterday, but it is too small. You go back to the shop with the receipt.',
    prompt: 'Assistant: "Hello. How can I help?"',
    options: [
      'I want my money back. Now.',
      "Could I return this? It's too small.",
      "Hi. I'd like to buy this jumper, please.",
      'Hello. How can I help you today?',
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'shop',
    teaches: ['returning something'],
  },
  {
    situation: 'You are in a clothes shop. You want a hoodie in a medium.',
    before: [
      { who: 'You', says: '"Excuse me, have you got this in a medium?"' },
      { who: 'Assistant', says: '"I\'m afraid we\'ve only got large left."' },
    ],
    prompt: 'Assistant: "Would you like to try the large?"',
    options: [
      "No, I'm not afraid, thanks.",
      'Yes, please. A medium would be great.',
      "No, thanks. It'll be too big.",
      "Yes, please. I'm afraid so.",
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'shop',
    teaches: ["I'm afraid"],
  },
  {
    situation:
      'You are in a queue at a busy bakery. The person in front of you has just been served.',
    prompt: 'Assistant: "Who\'s next, please?"',
    options: [
      "I'm next to you.",
      'Next week, I think.',
      "Yes, please. Who's next?",
      "I think it's me.",
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'shop',
    teaches: ['queues'],
  },
  {
    situation: 'You get on a bus and want a ticket to the town centre.',
    prompt: 'Driver: "Where to?"',
    options: [
      'Town centre, please.',
      'Town centre, mate. Quick.',
      "At ten o'clock, please.",
      'Yes, please. Where to?',
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'directions',
    teaches: ['buying a ticket'],
  },
  {
    situation: 'You are buying a train ticket to York. You will come home in the evening.',
    before: [
      { who: 'Clerk', says: '"Next, please."' },
      { who: 'You', says: '"A return to York, please."' },
    ],
    prompt: 'Clerk: "Coming back today?"',
    options: [
      'Yes, a return, please.',
      'Yes, this evening.',
      'No, I came yesterday.',
      "Yes, I'm coming now.",
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'directions',
    teaches: ['buying a ticket'],
  },
  {
    situation: 'You are at the hairdresser. You only want a little cut off the ends.',
    before: [{ who: 'Hairdresser', says: '"Hi. Take a seat."' }],
    prompt: 'Hairdresser: "So, how would you like it?"',
    options: [
      "I'd like it very much.",
      "Yes, please. I'd love it.",
      'Just a trim, please.',
      'Very short, please. All off.',
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'shop',
    teaches: ['how would you like it'],
  },
  {
    situation: 'You are paying at a coffee shop. You do not have their card.',
    prompt: 'Assistant: "Have you got a loyalty card?"',
    options: [
      "Yes, I'm very loyal.",
      "No, I'm just looking.",
      "Yes, I've got a bank card.",
      "No, I haven't, thanks.",
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'shop',
    teaches: ['shop questions'],
  },
  {
    situation: 'You are buying cough medicine at a chemist. You have never taken it before.',
    prompt: 'Pharmacist: "Have you taken this medicine before?"',
    options: [
      "No, it's the first time.",
      'Yes, I take it now.',
      'No, I take it tomorrow.',
      "Yes, I'll take it, thanks.",
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'shop',
    teaches: ['tense in a reply'],
  },
  {
    situation: 'You want to keep your library book for two more weeks.',
    prompt: 'Librarian: "Hello. Can I help?"',
    options: [
      'Yes. Could I buy this book, please?',
      'Yes. Can I renew this book, please?',
      'Yes. Could I lend this book, please?',
      'Yes. Give me two more weeks with it.',
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'request',
    teaches: ['borrow and lend'],
  },
  {
    situation: 'You did not finish your essay. Your teacher, Mr Ellis, is collecting the essays.',
    before: [{ who: 'Mr Ellis', says: '"Right, essays on my desk, please."' }],
    prompt: 'Mr Ellis: "Where\'s yours? It was due today."',
    options: [
      "Chill out, Sir. I'll do it later, OK?",
      "Sorry, mate. It's at home somewhere.",
      'Sorry, Sir. Can I bring it tomorrow?',
      "No problem, Sir. It doesn't matter.",
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'classroom',
    teaches: ['explaining a problem to a teacher'],
  },
  {
    situation: 'You were ill on Monday. Your teacher speaks to you on Tuesday.',
    prompt: 'Teacher: "You weren\'t here on Monday."',
    options: [
      'Yes, I was, Miss. I was ill.',
      "Yes, I wasn't, Miss. I was ill.",
      'No, I was here, Miss. I was ill.',
      "No, I wasn't, Miss. I was ill.",
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'classroom',
    teaches: ['answering a negative'],
  },
  {
    situation:
      'You won a writing competition. The head teacher, Mrs Hughes, stops you in the corridor.',
    prompt: 'Mrs Hughes: "Congratulations on winning the competition."',
    options: [
      'Thank you, Mrs Hughes.',
      'Cheers, Mrs Hughes. Nice one.',
      "Yes, I know. I'm the best.",
      'Same to you, Mrs Hughes.',
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'classroom',
    teaches: ['answering congratulations'],
  },
  {
    situation: 'You have lost your bus pass. You go to the school office at break.',
    prompt: 'Receptionist: "Hello. What can I do for you?"',
    options: [
      'Give me a new bus pass.',
      'Has anyone handed in a bus pass?',
      'Hi. What can I do for you?',
      'Hi. Can I lend your bus pass?',
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'request',
    teaches: ['lost property'],
  },
  {
    situation: 'Your teacher is setting homework at the end of the lesson.',
    before: [{ who: 'Teacher', says: '"For homework, write 200 words about your weekend."' }],
    prompt: 'Teacher: "Any questions?"',
    options: [
      "Why? That's so boring.",
      'Yes, I wrote it at the weekend.',
      'Sorry, Miss. When is it due?',
      "No, but I don't agree, Miss.",
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'classroom',
    teaches: ['asking about homework'],
  },
  {
    situation: 'The lesson has just ended. Your teacher calls your name.',
    prompt: 'Teacher: "Could you stay behind for a minute?"',
    options: [
      'Yes, I can stand behind you.',
      "No. I'm busy, mate.",
      'Yes, please. Thank you, Sir.',
      'Yes, Sir. Is everything OK?',
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'classroom',
    teaches: ['stay behind'],
  },
  {
    situation:
      'You have a note from the office for your teacher. She is talking to another teacher.',
    prompt: 'You need to give her the note now.',
    options: [
      'Sorry to interrupt, Miss. A note for you.',
      "Oi, Miss. This note's for you, here.",
      'Excuse me, Miss. Could you stop talking now?',
      'Miss, Miss, Miss. Note from the office.',
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'classroom',
    teaches: ['interrupting politely'],
  },
  {
    situation: 'You and a classmate are making a poster together.',
    prompt: 'Classmate: "Shall I do the drawing, and you do the writing?"',
    options: [
      'I would be delighted to agree to that.',
      "Yeah, good idea. Your drawing's great.",
      'Yes, you shall do the drawing.',
      "No, I'll do the drawing and the writing.",
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'agreeing',
    teaches: ['suggestions'],
  },
  {
    situation:
      "It is the last day of the school year. You are leaving your teacher's class for good.",
    prompt: 'You speak to your teacher, Mr Shah.',
    options: [
      'Cheers for everything, mate. Laters.',
      "You're welcome for this year, Sir.",
      'Thanks for all your help, Sir.',
      'See you tomorrow, Sir. Bye.',
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'thanks',
    teaches: ['thanking a teacher'],
  },
  {
    situation: 'You want to read a book from the classroom shelf at home this weekend.',
    prompt: 'You ask your teacher.',
    options: [
      'Can you lend me this book, mate?',
      "I'm taking this book home, OK?",
      'Would you like to borrow this book?',
      'Could I borrow this book, please?',
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'classroom',
    teaches: ['borrow and lend'],
  },
  {
    situation: 'You are packing your bag after a lesson. A teacher you know comes over.',
    prompt: 'Teacher: "Have you got a minute?"',
    options: [
      'Sure, Miss. What is it?',
      "Yes, it's ten past three.",
      "No, thanks. I'm fine.",
      "No, I haven't got a watch.",
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'classroom',
    teaches: ['have you got a minute'],
  },
  {
    situation: 'You have been ill, and you are behind with your project.',
    prompt: 'Teacher: "How is your project going?"',
    options: [
      'Terrible. I need way more time, yeah?',
      "I'm behind. Could I have more time?",
      'Very well, thank you, Miss. And you?',
      'It went really well, thanks, Miss.',
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'classroom',
    teaches: ['asking for more time'],
  },
  {
    situation: 'In a history lesson, your teacher asks you a question. You do not know the answer.',
    before: [{ who: 'Teacher', says: '"Can you tell us when the Second World War ended?"' }],
    prompt: 'Teacher: "Any idea?"',
    options: [
      "Sorry, Sir. I don't understand.",
      'No idea, mate. Ask someone else.',
      "Sorry, Sir. I'm not sure.",
      'Yes, I have an idea, Sir.',
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'classroom',
    teaches: ['saying you do not know'],
  },
  {
    situation: 'You were chatting to your friend while the teacher was explaining something.',
    prompt: 'Teacher: "Can you two stop talking, please?"',
    options: [
      "We weren't talking, Miss.",
      'Yes, we can, Miss.',
      'OK, chill out, Miss.',
      'Sorry, Miss.',
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'classroom',
    teaches: ['apologising to a teacher'],
  },
  {
    situation: 'Your friend sends you a message on a Thursday.',
    before: [{ who: 'Friend', says: '"A few of us are going bowling on Saturday."' }],
    prompt: 'Friend: "Do you want to come?"',
    options: [
      "Yeah, I'd love to. What time?",
      'I would be delighted to accept your kind invitation.',
      'Yes, I go bowling.',
      "No, thank you. I'm full.",
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'offer',
    teaches: ['accepting an invitation'],
  },
  {
    situation:
      'A friend asks you to come round to her house tonight. You have to look after your little brother.',
    prompt: 'Friend: "Fancy coming round to mine later?"',
    options: [
      'I regret that I am unable to attend.',
      "Sorry, I can't tonight. Tomorrow?",
      "No. I don't want to.",
      "Yes, I can't tonight.",
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'offer',
    teaches: ['refusing an invitation'],
  },
  {
    situation:
      'You are waiting for your friend outside the cinema. The film starts in ten minutes.',
    before: [{ who: 'Friend', says: '"Sorry, sorry. The bus was really late."' }],
    prompt: 'Friend: "Have I missed it?"',
    options: [
      'Yes, it started ten minutes ago.',
      'Yes, you missed the bus.',
      "No, it hasn't started yet.",
      'No, I missed you too.',
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'apology',
    teaches: ['meanings of miss'],
  },
  {
    situation: 'Your friend has just heard her piano exam result. She did not pass.',
    before: [{ who: 'Friend', says: '"I failed my piano exam."' }],
    prompt: 'Friend: "I\'m so annoyed with myself."',
    options: [
      "Congratulations. That's great news.",
      "I'm so annoyed with you too.",
      "Well, it's your own fault, isn't it?",
      'Oh no. You can take it again.',
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'news',
    teaches: ['bad news'],
  },
  {
    situation: 'You and a friend are planning to see a film.',
    before: [
      { who: 'Friend', says: '"Shall we meet outside the cinema?"' },
      { who: 'You', says: '"Good idea. What time?"' },
    ],
    prompt: 'Friend: "How about half six?"',
    options: [
      'Perfect. See you then.',
      'Fine, thanks. And you?',
      'Outside the cinema.',
      'It was great, thanks.',
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'agreeing',
    teaches: ['making plans'],
  },
  {
    situation: 'You are in an art lesson. Your friend looks at your drawing.',
    prompt: 'Friend: "Your drawing is amazing."',
    options: [
      "I know. I'm the best in the class.",
      'Aw, thanks. It took ages.',
      'Thank you. I am grateful for your compliment.',
      "You're welcome. Any time.",
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'thanks',
    teaches: ['answering a compliment'],
  },
  {
    situation: 'You are waiting for a friend at the shopping centre. Your phone buzzes.',
    prompt: 'Text from friend: "Running 10 mins late, sorry."',
    options: [
      'Dear Sam, thank you for informing me.',
      'Why are you running? Be careful.',
      "No worries. I'll wait by the door.",
      "I'm sorry to hear that. Get well soon.",
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'apology',
    teaches: ['running late'],
  },
  {
    situation:
      'Your friend was upset, and you listened to her for a long time. Now she feels better.',
    prompt: 'Friend: "Thanks for listening. I feel much better now."',
    options: [
      "You're very welcome, madam.",
      'Thank you for talking to me too.',
      "Oh no. I'm sorry to hear that.",
      "Any time. I'm glad you're OK.",
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'thanks',
    teaches: ['answering thanks'],
  },
  {
    situation:
      "You go to your friend Jess's house to walk to school together. Her mum opens the door.",
    prompt: 'Mum: "Hello. Are you here for Jess?"',
    options: [
      'Hello. Yes, is she ready?',
      "Yeah. Where's Jess, mate?",
      "Hello. Yes, I'm Jess.",
      "No, I'm here for school.",
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'greeting',
    teaches: ["talking to a friend's parent"],
  },
  {
    situation: 'Your friend runs over to you at lunch.',
    before: [
      { who: 'Friend', says: '"Guess what?"' },
      { who: 'You', says: '"What?"' },
    ],
    prompt: 'Friend: "I got into the football team."',
    options: [
      'I would like to offer my congratulations.',
      "No way. That's brilliant.",
      'Oh no. Never mind.',
      'I know. I guessed.',
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'news',
    teaches: ['good news'],
  },
  {
    situation: 'Your friend forgot her money for the tuck shop. You have some coins.',
    prompt: 'Friend: "Could you lend me a pound? I\'ll pay you back tomorrow."',
    options: [
      'Sure. Could you lend me one?',
      'Sure. Pay me back right now.',
      'Sure. Here you go.',
      "Sure. I'll borrow you one.",
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'request',
    teaches: ['lending something', 'borrow and lend'],
  },
  {
    situation: 'Your friend has a new haircut. You think it looks great.',
    prompt: 'Friend: "Do you like my new haircut?"',
    options: [
      'Yes, it really fits you.',
      'Yes, it really matches you.',
      'Yes, I like my haircut too.',
      'Yes, it really suits you.',
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'agreeing',
    teaches: ['suits, fits and matches'],
  },
  {
    situation: 'You are lost in a town centre. You ask a woman how to get to the library.',
    before: [{ who: 'You', says: '"Excuse me, how do I get to the library?"' }],
    prompt: 'Woman: "Go straight on, then take the second left. It\'s opposite the bank."',
    options: [
      'Second left. Great, thanks.',
      'Thanks. So I turn right at the bank?',
      "You're welcome. Have a nice day.",
      "Sorry, I'm not from round here.",
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'directions',
    teaches: ['asking the way'],
  },
  {
    situation: 'You and your family arrive at a hotel in the evening. You have a room booked.',
    prompt: 'Receptionist: "Good evening. Welcome to the Grand Hotel."',
    options: [
      'Hi. Give us a room, please.',
      "Thank you. We've booked a room.",
      'Good night. We have a room booked.',
      "Thank you. You're welcome too.",
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'greeting',
    teaches: ['checking in', 'greeting by the time of day', 'welcome'],
  },
  {
    situation:
      'You left your rucksack on a train. You go to the lost property office at the station.',
    prompt: 'Officer: "Lost property. How can I help?"',
    options: [
      'Where is my bag? I want it back right now.',
      "I've lost my train. It was the 8.15.",
      'I left my rucksack on the 8.15 train.',
      "Hello. I'm here. How can I help you?",
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'request',
    teaches: ['lost property'],
  },
  {
    situation: 'A man in front of you in the street drops a glove and walks on. You pick it up.',
    prompt: 'You call after him.',
    options: [
      'Hey, you. Your glove. Catch.',
      'Sorry, is this my glove?',
      'Excuse me. Have you got the time?',
      "Excuse me. You've dropped this.",
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'directions',
    teaches: ['dropped something'],
  },
  {
    situation:
      'You are sitting on a busy bus. An old lady with a walking stick gets on. There are no free seats.',
    prompt: 'You stand up.',
    options: [
      'Would you like to sit here?',
      'Sit down, old lady.',
      'Can I sit here, please?',
      'Excuse me, is this seat free?',
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'offer',
    teaches: ['offering a seat'],
  },
  {
    situation:
      'You live in a town with a castle. A tourist stops you on the main street, which leads to it.',
    prompt: 'Tourist: "Excuse me, is this the way to the castle?"',
    options: [
      'No idea at all, mate. Sorry about that.',
      'Yes, it is. Keep going straight on.',
      "Yes, it's a lovely old castle.",
      'Yes, I went there last year.',
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'directions',
    teaches: ['giving directions'],
  },
  {
    situation:
      'You have waited in a long queue at the post office. A man walks in and stands in front of you.',
    prompt: 'You speak to him politely.',
    options: [
      'Oi. Get to the back of the queue.',
      'Sorry, can I go in front of you?',
      "Sorry, I think there's a queue.",
      "Excuse me, I'm sorry I'm late.",
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'request',
    teaches: ['complaining politely'],
  },
  {
    situation: 'You and your friends are at the seaside. You want a photo of all of you together.',
    prompt: 'You speak to a woman walking past.',
    options: [
      'Take our photo. Quick.',
      'Excuse me, can I take a photo of you?',
      'Excuse me, would you like a photo?',
      'Sorry, could you take a photo of us?',
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'request',
    teaches: ['asking a stranger for help'],
  },
  {
    situation: 'You have just arrived to stay with a British host family.',
    before: [{ who: 'Host', says: '"And this is the kitchen."' }],
    prompt: 'Host: "Help yourself to anything in the fridge."',
    options: [
      "Thanks. That's kind of you.",
      "No, I'm fine. Help yourself.",
      "You're welcome. Enjoy it.",
      "Sorry, I can't help you with that.",
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'offer',
    teaches: ['help yourself'],
  },
  {
    situation: 'It is your first morning with your host family.',
    before: [
      { who: 'Host', says: '"Morning."' },
      { who: 'You', says: '"Good morning."' },
    ],
    prompt: 'Host: "Did you sleep well?"',
    options: [
      'Yes, I sleep well.',
      'Yes, really well, thanks.',
      "Yes, I'm sleeping now.",
      "Yes, I'll sleep well, thanks.",
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'how-are-you',
    teaches: ['tense in a reply'],
  },
  {
    situation:
      'You are going out with friends from your language school. Your host speaks to you at the door.',
    before: [{ who: 'Host', says: '"Have a nice time."' }],
    prompt: 'Host: "What time will you be back?"',
    options: [
      'I came back at six.',
      "I'll be back, thanks.",
      'About six, I think.',
      "Yes, I'll be back.",
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'answers',
    teaches: ['tense in a reply'],
  },
  {
    situation: 'Your neighbours are going away for the weekend. They knock on your door.',
    before: [{ who: 'Neighbour', says: '"We\'re away this weekend."' }],
    prompt: 'Neighbour: "Could you keep an eye on our cat?"',
    options: [
      "Sorry, I haven't got a cat.",
      'Yes, please. Thank you very much.',
      'No, thanks. I have my own cat.',
      'Of course. Does she need feeding?',
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'request',
    teaches: ['keep an eye on'],
  },
  {
    situation: 'You are playing music in your room. Your neighbour knocks on the door.',
    before: [{ who: 'Neighbour', says: '"Sorry to bother you."' }],
    prompt: 'Neighbour: "Your music is quite loud. My baby is trying to sleep."',
    options: [
      "Oh, sorry. I'll turn it down.",
      "So what? It's my house.",
      'Thanks. I love this song too.',
      "Don't worry about it.",
    ],
    answerIndex: 0,
    tier: 3,
    kind: 'apology',
    teaches: ['apologising for a problem'],
  },
  {
    situation: 'Your host mum is planning dinner. You do not eat meat.',
    prompt: 'Host: "Is there anything you don\'t eat?"',
    options: [
      'No, I eat everything.',
      "Yes, I don't eat meat.",
      "No, thanks. I'm full.",
      'Yes, I love meat.',
    ],
    answerIndex: 1,
    tier: 3,
    kind: 'answers',
    teaches: ['food you do not eat'],
  },
  {
    situation: 'You are taking the rubbish out. Your elderly neighbour is in her garden.',
    prompt: 'Neighbour: "Hello, dear. How\'s school going?"',
    options: [
      'It starts at half past eight.',
      'By bus, usually.',
      'Good, thanks. How are you?',
      "Yes, I'm going to school.",
    ],
    answerIndex: 2,
    tier: 3,
    kind: 'how-are-you',
    teaches: ['how is it going'],
  },
  {
    situation: "Dinner is nearly ready at your host family's house.",
    before: [{ who: 'Host', says: '"Dinner in five minutes."' }],
    prompt: 'Host: "Could you lay the table, please?"',
    options: [
      'Yes, I could.',
      'Yes, please. I am hungry.',
      "No, thanks. I'm fine.",
      'Sure. How many places?',
    ],
    answerIndex: 3,
    tier: 3,
    kind: 'request',
    teaches: ['could you as a request', 'lay the table'],
  },
  // @@TIER3_END
]

export const BANK: GameBank<Exchange> = {
  slug: 'greetings-dialogue',
  items: EXCHANGE_BANK,
  // What the student reads, in order: the situation, any earlier turns, and the
  // prompt. The situation alone differs in every exchange, but the earlier
  // turns are part of the question, so the dealer reads them for give-aways.
  key: (e) =>
    [e.situation, ...(e.before ?? []).map((t) => `${t.who}: ${t.says}`), e.prompt].join(' | '),
  answer: (e) => e.options[e.answerIndex],
  options: (e) => e.options,
  tier: (e) => e.tier,
  group: (e) => e.kind,
  facts: (e) => e.teaches.map((t) => `teaches:${t}`),
  deepened: '2026-10-24',
}
