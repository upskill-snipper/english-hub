import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Everyday Vocabulary Flashcards: see an everyday English word with an example
 * sentence, turn the card to check its meaning, then say whether you knew it.
 * Six topics: People, Places, Time, Actions, Feelings and Objects.
 *
 * Moved out of src/app/games/everyday-vocab-flashcards/page.tsx on 16 October
 * 2026, when every answer gained an explanation
 * (src/lib/games/explanations/types.ts).
 *
 * A card is one word. The student turns it over and marks it themselves, so no
 * card has options (options is null, and an explanation has no "not"), the
 * "right answer" is the meaning on the back, and a mark of "I knew it" is
 * recorded as correct. The explanation is shown with the back of the card.
 *
 * WHAT WAS WRONG WITH THE CARDS (found writing those explanations). Five of the
 * 64 had a fault; the other 59 are unchanged.
 *   - home is a noun on the card, but its example was "I go home after work.",
 *     where home is an adverb. It is now "Our home is near the park."
 *   - early is an adjective on the card, but its example was "I woke up early to
 *     catch the bus.", where early is an adverb. It is now "I caught the early
 *     bus to school."
 *   - sleep was defined as resting "at night", and its own example is about babies
 *     sleeping "during the day". It is now "To rest with your eyes closed,
 *     usually at night."
 *   - angry was defined as "Feeling strong displeasure." Displeasure is a far
 *     harder word than the A1 word it explains. It is now "Feeling that you want
 *     to shout, because something is wrong or unfair."
 *   - bored was defined as "Feeling tired because something is not interesting."
 *     Being bored is not being tired, and tired is a card of its own. It is now
 *     "Feeling unhappy because something is not interesting."
 */

export type Topic = 'People' | 'Places' | 'Time' | 'Actions' | 'Feelings' | 'Objects'

export interface VocabCard {
  word: string
  partOfSpeech: string
  simpleDefinition: string
  exampleSentence: string
  topic: Topic
}

export const VOCAB_BANK: VocabCard[] = [
  // People
  {
    word: 'family',
    partOfSpeech: 'noun',
    simpleDefinition: 'The group of people you are related to, such as parents and children.',
    exampleSentence: 'My family eats dinner together every evening.',
    topic: 'People',
  },
  {
    word: 'friend',
    partOfSpeech: 'noun',
    simpleDefinition: 'A person you like and enjoy spending time with.',
    exampleSentence: 'My best friend lives next door.',
    topic: 'People',
  },
  {
    word: 'neighbour',
    partOfSpeech: 'noun',
    simpleDefinition: 'A person who lives near you.',
    exampleSentence: 'Our neighbour helps us look after the garden.',
    topic: 'People',
  },
  {
    word: 'teacher',
    partOfSpeech: 'noun',
    simpleDefinition: 'A person whose job is to help others learn.',
    exampleSentence: 'The teacher explained the lesson slowly.',
    topic: 'People',
  },
  {
    word: 'doctor',
    partOfSpeech: 'noun',
    simpleDefinition: 'A person whose job is to help sick people get better.',
    exampleSentence: 'The doctor gave me some medicine.',
    topic: 'People',
  },
  {
    word: 'child',
    partOfSpeech: 'noun',
    simpleDefinition: 'A young person who is not yet an adult.',
    exampleSentence: 'The child played happily in the park.',
    topic: 'People',
  },
  {
    word: 'parent',
    partOfSpeech: 'noun',
    simpleDefinition: 'A mother or a father.',
    exampleSentence: 'Each parent signed the school form.',
    topic: 'People',
  },
  {
    word: 'colleague',
    partOfSpeech: 'noun',
    simpleDefinition: 'A person you work with.',
    exampleSentence: 'My colleague helped me finish the report.',
    topic: 'People',
  },
  {
    word: 'stranger',
    partOfSpeech: 'noun',
    simpleDefinition: 'A person you do not know.',
    exampleSentence: 'A stranger asked me for directions.',
    topic: 'People',
  },
  {
    word: 'customer',
    partOfSpeech: 'noun',
    simpleDefinition: 'A person who buys something from a shop.',
    exampleSentence: 'The shop was full of customers today.',
    topic: 'People',
  },

  // Places
  {
    word: 'home',
    partOfSpeech: 'noun',
    simpleDefinition: 'The place where you live.',
    exampleSentence: 'Our home is near the park.',
    topic: 'Places',
  },
  {
    word: 'school',
    partOfSpeech: 'noun',
    simpleDefinition: 'A place where children go to learn.',
    exampleSentence: 'The school is near the bus stop.',
    topic: 'Places',
  },
  {
    word: 'shop',
    partOfSpeech: 'noun',
    simpleDefinition: 'A place where you buy things.',
    exampleSentence: 'I bought bread at the shop.',
    topic: 'Places',
  },
  {
    word: 'street',
    partOfSpeech: 'noun',
    simpleDefinition: 'A road in a town with houses and buildings.',
    exampleSentence: 'They live on a quiet street.',
    topic: 'Places',
  },
  {
    word: 'hospital',
    partOfSpeech: 'noun',
    simpleDefinition: 'A place where sick people are looked after.',
    exampleSentence: 'She works at the hospital in town.',
    topic: 'Places',
  },
  {
    word: 'station',
    partOfSpeech: 'noun',
    simpleDefinition: 'A place where trains or buses stop.',
    exampleSentence: 'We waited at the station for the train.',
    topic: 'Places',
  },
  {
    word: 'office',
    partOfSpeech: 'noun',
    simpleDefinition: 'A place where people work at desks.',
    exampleSentence: 'My office is on the second floor.',
    topic: 'Places',
  },
  {
    word: 'kitchen',
    partOfSpeech: 'noun',
    simpleDefinition: 'The room where you cook food.',
    exampleSentence: 'The kitchen smells of fresh bread.',
    topic: 'Places',
  },
  {
    word: 'garden',
    partOfSpeech: 'noun',
    simpleDefinition: 'An area of ground near a house for plants.',
    exampleSentence: 'We grow vegetables in the garden.',
    topic: 'Places',
  },
  {
    word: 'market',
    partOfSpeech: 'noun',
    simpleDefinition: 'A place, often outdoors, where people sell food and goods.',
    exampleSentence: 'The market is busy on Saturday mornings.',
    topic: 'Places',
  },

  // Time
  {
    word: 'today',
    partOfSpeech: 'adverb',
    simpleDefinition: 'On this day.',
    exampleSentence: 'I have an exam today.',
    topic: 'Time',
  },
  {
    word: 'tomorrow',
    partOfSpeech: 'adverb',
    simpleDefinition: 'On the day after today.',
    exampleSentence: 'We will meet tomorrow.',
    topic: 'Time',
  },
  {
    word: 'yesterday',
    partOfSpeech: 'adverb',
    simpleDefinition: 'On the day before today.',
    exampleSentence: 'It rained a lot yesterday.',
    topic: 'Time',
  },
  {
    word: 'morning',
    partOfSpeech: 'noun',
    simpleDefinition: 'The early part of the day, before noon.',
    exampleSentence: 'I drink tea every morning.',
    topic: 'Time',
  },
  {
    word: 'evening',
    partOfSpeech: 'noun',
    simpleDefinition: 'The end of the day, before night.',
    exampleSentence: 'We watch television in the evening.',
    topic: 'Time',
  },
  {
    word: 'week',
    partOfSpeech: 'noun',
    simpleDefinition: 'A period of seven days.',
    exampleSentence: 'I work five days a week.',
    topic: 'Time',
  },
  {
    word: 'month',
    partOfSpeech: 'noun',
    simpleDefinition: 'One of the twelve parts of a year.',
    exampleSentence: 'My birthday is next month.',
    topic: 'Time',
  },
  {
    word: 'year',
    partOfSpeech: 'noun',
    simpleDefinition: 'A period of twelve months.',
    exampleSentence: 'She has lived here for one year.',
    topic: 'Time',
  },
  {
    word: 'hour',
    partOfSpeech: 'noun',
    simpleDefinition: 'A period of sixty minutes.',
    exampleSentence: 'The film lasts about two hours.',
    topic: 'Time',
  },
  {
    word: 'early',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Before the usual or expected time.',
    exampleSentence: 'I caught the early bus to school.',
    topic: 'Time',
  },

  // Actions
  {
    word: 'eat',
    partOfSpeech: 'verb',
    simpleDefinition: 'To put food in your mouth and swallow it.',
    exampleSentence: 'We eat lunch at one o’clock.',
    topic: 'Actions',
  },
  {
    word: 'drink',
    partOfSpeech: 'verb',
    simpleDefinition: 'To take liquid into your mouth and swallow it.',
    exampleSentence: 'Please drink some water.',
    topic: 'Actions',
  },
  {
    word: 'walk',
    partOfSpeech: 'verb',
    simpleDefinition: 'To move forward on your feet.',
    exampleSentence: 'I walk to school every day.',
    topic: 'Actions',
  },
  {
    word: 'speak',
    partOfSpeech: 'verb',
    simpleDefinition: 'To say words and use your voice.',
    exampleSentence: 'Can you speak more slowly, please?',
    topic: 'Actions',
  },
  {
    word: 'listen',
    partOfSpeech: 'verb',
    simpleDefinition: 'To pay attention to a sound.',
    exampleSentence: 'I listen to music on the train.',
    topic: 'Actions',
  },
  {
    word: 'read',
    partOfSpeech: 'verb',
    simpleDefinition: 'To look at words and understand them.',
    exampleSentence: 'She likes to read before bed.',
    topic: 'Actions',
  },
  {
    word: 'write',
    partOfSpeech: 'verb',
    simpleDefinition: 'To make words on paper or a screen.',
    exampleSentence: 'Please write your name here.',
    topic: 'Actions',
  },
  {
    word: 'buy',
    partOfSpeech: 'verb',
    simpleDefinition: 'To get something by paying money for it.',
    exampleSentence: 'I want to buy a new coat.',
    topic: 'Actions',
  },
  {
    word: 'help',
    partOfSpeech: 'verb',
    simpleDefinition: 'To do something useful for someone.',
    exampleSentence: 'Can you help me carry this bag?',
    topic: 'Actions',
  },
  {
    word: 'learn',
    partOfSpeech: 'verb',
    simpleDefinition: 'To get new knowledge or a new skill.',
    exampleSentence: 'I want to learn English well.',
    topic: 'Actions',
  },
  {
    word: 'work',
    partOfSpeech: 'verb',
    simpleDefinition: 'To do a job to earn money.',
    exampleSentence: 'My parents work in a hospital.',
    topic: 'Actions',
  },
  {
    word: 'sleep',
    partOfSpeech: 'verb',
    simpleDefinition: 'To rest with your eyes closed, usually at night.',
    exampleSentence: 'Babies sleep a lot during the day.',
    topic: 'Actions',
  },

  // Feelings
  {
    word: 'happy',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling good and pleased.',
    exampleSentence: 'She was happy to see her friends.',
    topic: 'Feelings',
  },
  {
    word: 'sad',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling unhappy.',
    exampleSentence: 'He felt sad when the holiday ended.',
    topic: 'Feelings',
  },
  {
    word: 'tired',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling that you need to rest or sleep.',
    exampleSentence: 'I am tired after the long walk.',
    topic: 'Feelings',
  },
  {
    word: 'angry',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling that you want to shout, because something is wrong or unfair.',
    exampleSentence: 'He was angry about the late train.',
    topic: 'Feelings',
  },
  {
    word: 'afraid',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling fear or worry.',
    exampleSentence: 'She is afraid of large dogs.',
    topic: 'Feelings',
  },
  {
    word: 'excited',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling very happy about something that will happen.',
    exampleSentence: 'The children were excited about the trip.',
    topic: 'Feelings',
  },
  {
    word: 'worried',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling unhappy because you think something bad might happen.',
    exampleSentence: 'I am worried about the test tomorrow.',
    topic: 'Feelings',
  },
  {
    word: 'bored',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling unhappy because something is not interesting.',
    exampleSentence: 'He felt bored during the long meeting.',
    topic: 'Feelings',
  },
  {
    word: 'proud',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling pleased about something good you did.',
    exampleSentence: 'She was proud of her exam result.',
    topic: 'Feelings',
  },
  {
    word: 'calm',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling relaxed and not worried.',
    exampleSentence: 'Take a deep breath and stay calm.',
    topic: 'Feelings',
  },

  // Objects
  {
    word: 'book',
    partOfSpeech: 'noun',
    simpleDefinition: 'A set of printed pages that you read.',
    exampleSentence: 'I am reading an interesting book.',
    topic: 'Objects',
  },
  {
    word: 'phone',
    partOfSpeech: 'noun',
    simpleDefinition: 'A device used to call and message people.',
    exampleSentence: 'My phone is on the table.',
    topic: 'Objects',
  },
  {
    word: 'key',
    partOfSpeech: 'noun',
    simpleDefinition: 'A small metal object used to open a lock.',
    exampleSentence: 'I cannot find my house key.',
    topic: 'Objects',
  },
  {
    word: 'bag',
    partOfSpeech: 'noun',
    simpleDefinition: 'A container you carry things in.',
    exampleSentence: 'She put the shopping in her bag.',
    topic: 'Objects',
  },
  {
    word: 'chair',
    partOfSpeech: 'noun',
    simpleDefinition: 'A seat for one person.',
    exampleSentence: 'Please sit on this chair.',
    topic: 'Objects',
  },
  {
    word: 'table',
    partOfSpeech: 'noun',
    simpleDefinition: 'A piece of furniture with a flat top and legs.',
    exampleSentence: 'Dinner is on the table.',
    topic: 'Objects',
  },
  {
    word: 'water',
    partOfSpeech: 'noun',
    simpleDefinition: 'The clear liquid that we drink.',
    exampleSentence: 'Please give me a glass of water.',
    topic: 'Objects',
  },
  {
    word: 'money',
    partOfSpeech: 'noun',
    simpleDefinition: 'Coins and notes used to buy things.',
    exampleSentence: 'I keep my money in a safe place.',
    topic: 'Objects',
  },
  {
    word: 'clock',
    partOfSpeech: 'noun',
    simpleDefinition: 'A device that shows the time.',
    exampleSentence: 'The clock on the wall is slow.',
    topic: 'Objects',
  },
  {
    word: 'door',
    partOfSpeech: 'noun',
    simpleDefinition: 'The part of a building you open to go in or out.',
    exampleSentence: 'Please close the door quietly.',
    topic: 'Objects',
  },
  {
    word: 'window',
    partOfSpeech: 'noun',
    simpleDefinition: 'A glass opening in a wall that lets in light.',
    exampleSentence: 'Open the window for some fresh air.',
    topic: 'Objects',
  },
  {
    word: 'letter',
    partOfSpeech: 'noun',
    simpleDefinition: 'A written message you send to someone.',
    exampleSentence: 'I posted a letter to my friend.',
    topic: 'Objects',
  },
]

export const BANK: GameBank<VocabCard> = {
  slug: 'everyday-vocab-flashcards',
  items: VOCAB_BANK,
  // Each card is one word, and the word is what the student sees first.
  key: (c) => c.word,
  // The back of the card: what the student turns it over to check.
  answer: (c) => c.simpleDefinition,
  // The student flips the card and marks it themselves; nothing is chosen.
  options: () => null,
  tag: (c) => c.topic,
}
