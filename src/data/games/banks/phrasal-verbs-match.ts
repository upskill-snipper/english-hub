import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Phrasal Verb Match: read a phrasal verb in its example sentence, then choose
 * its meaning from four.
 *
 * Moved out of src/app/games/phrasal-verbs-match/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * The questions are unchanged except for one wrong option. Each was checked for
 * a second right answer, and there is none: the example sentence decides every
 * one, even where a wrong option is another real meaning of the same phrasal
 * verb (turn down also means to reduce the volume, look up to raise your head,
 * work out to exercise at a gym). Those are the questions that teach reading the
 * sentence, and each explanation says which meaning the sentence has.
 *
 * The option that changed is a wrong one in question 20, grow up: "to become
 * taller plants" did not read as English, and is now "to get taller, like a
 * plant".
 */

export interface PhrasalVerb {
  phrasal: string
  exampleSentence: string
  meaning: string
  distractors: [string, string, string]
}

export const PHRASAL_BANK: PhrasalVerb[] = [
  {
    phrasal: 'get up',
    exampleSentence: 'I usually get up at seven o’clock on weekdays.',
    meaning: 'to leave your bed after sleeping',
    distractors: ['to feel very tired', 'to make a mistake', 'to clean a room'],
  },
  {
    phrasal: 'give up',
    exampleSentence: 'She decided to give up smoking after twenty years.',
    meaning: 'to stop doing something, often a habit',
    distractors: ['to start a new hobby', 'to win a prize', 'to ask for help'],
  },
  {
    phrasal: 'look after',
    exampleSentence: 'Could you look after my dog while I’m away?',
    meaning: 'to take care of someone or something',
    distractors: ['to search for something', 'to ignore a problem', 'to follow behind'],
  },
  {
    phrasal: 'run out of',
    exampleSentence: 'We’ve run out of milk, so I’ll buy some more.',
    meaning: 'to have no more of something left',
    distractors: ['to leave a building quickly', 'to buy a large amount', 'to win a race'],
  },
  {
    phrasal: 'put off',
    exampleSentence: 'They had to put off the meeting until next Monday.',
    meaning: 'to delay or postpone something',
    distractors: ['to switch off a light', 'to remove your coat', 'to make someone angry'],
  },
  {
    phrasal: 'find out',
    exampleSentence: 'I need to find out what time the train leaves.',
    meaning: 'to discover information',
    distractors: ['to go outside', 'to lose something', 'to invite a friend'],
  },
  {
    phrasal: 'turn down',
    exampleSentence: 'He turned down the job offer because the pay was low.',
    meaning: 'to refuse an offer or request',
    distractors: ['to accept gladly', 'to turn around', 'to reduce the volume'],
  },
  {
    phrasal: 'carry on',
    exampleSentence: 'Please carry on with your work; I’ll wait here.',
    meaning: 'to continue doing something',
    distractors: ['to lift something heavy', 'to stop suddenly', 'to take a break'],
  },
  {
    phrasal: 'take off',
    exampleSentence: 'The plane will take off in ten minutes.',
    meaning: 'to leave the ground and begin to fly',
    distractors: ['to land safely', 'to slow down', 'to remove a label'],
  },
  {
    phrasal: 'look forward to',
    exampleSentence: 'We’re really looking forward to the summer holiday.',
    meaning: 'to feel excited about something that will happen',
    distractors: ['to remember the past', 'to look in front of you', 'to worry about something'],
  },
  {
    phrasal: 'come across',
    exampleSentence: 'I came across an old photo while tidying the attic.',
    meaning: 'to find something by chance',
    distractors: ['to walk towards someone', 'to agree with a plan', 'to hide something'],
  },
  {
    phrasal: 'bring up',
    exampleSentence: 'She didn’t want to bring up the subject of money.',
    meaning: 'to mention or start talking about a topic',
    distractors: ['to carry upstairs', 'to end a conversation', 'to raise a child'],
  },
  {
    phrasal: 'call off',
    exampleSentence: 'The match was called off because of heavy rain.',
    meaning: 'to cancel a planned event',
    distractors: ['to telephone someone', 'to shout loudly', 'to begin a game'],
  },
  {
    phrasal: 'check in',
    exampleSentence: 'We need to check in at the hotel before six.',
    meaning: 'to register your arrival at a hotel or airport',
    distractors: ['to look inside a bag', 'to pay a bill', 'to leave a building'],
  },
  {
    phrasal: 'check out',
    exampleSentence: 'Guests must check out of the room by eleven.',
    meaning: 'to pay and leave a hotel',
    distractors: ['to look at a price', 'to arrive somewhere', 'to fill in a form'],
  },
  {
    phrasal: 'fill in',
    exampleSentence: 'Please fill in this form with your details.',
    meaning: 'to complete a document by writing information',
    distractors: ['to empty a container', 'to dig a hole', 'to colour a picture'],
  },
  {
    phrasal: 'get on with',
    exampleSentence: 'I get on well with my new colleagues.',
    meaning: 'to have a good relationship with someone',
    distractors: ['to climb onto a bus', 'to argue constantly', 'to leave quickly'],
  },
  {
    phrasal: 'give back',
    exampleSentence: 'Could you give back the book I lent you?',
    meaning: 'to return something to its owner',
    distractors: ['to keep something', 'to step backwards', 'to lend money'],
  },
  {
    phrasal: 'go on',
    exampleSentence: 'What’s going on in the street outside?',
    meaning: 'to happen',
    distractors: ['to switch off', 'to go away', 'to slow down'],
  },
  {
    phrasal: 'grow up',
    exampleSentence: 'He grew up in a small village in Wales.',
    meaning: 'to develop from a child into an adult',
    distractors: ['to get taller, like a plant', 'to move house often', 'to learn a language'],
  },
  {
    phrasal: 'hold on',
    exampleSentence: 'Hold on a moment while I check the diary.',
    meaning: 'to wait for a short time',
    distractors: ['to let go', 'to hurry up', 'to hang something up'],
  },
  {
    phrasal: 'look up',
    exampleSentence: 'If you don’t know the word, look it up in a dictionary.',
    meaning: 'to search for information in a reference source',
    distractors: ['to raise your head', 'to admire someone', 'to clean a shelf'],
  },
  {
    phrasal: 'pick up',
    exampleSentence: 'I’ll pick you up from the station at noon.',
    meaning: 'to collect someone or something',
    distractors: ['to drop something', 'to choose carefully', 'to lift weights'],
  },
  {
    phrasal: 'put on',
    exampleSentence: 'Put on your coat; it’s cold outside.',
    meaning: 'to dress yourself in clothing',
    distractors: ['to take off clothes', 'to switch off a device', 'to place on a table'],
  },
  {
    phrasal: 'set up',
    exampleSentence: 'They set up a small business last year.',
    meaning: 'to start or establish something',
    distractors: ['to sit down', 'to close a company', 'to tidy a desk'],
  },
  {
    phrasal: 'take up',
    exampleSentence: 'She took up painting after she retired.',
    meaning: 'to start a new activity or hobby',
    distractors: ['to lift upwards', 'to give up a hobby', 'to use space'],
  },
  {
    phrasal: 'turn up',
    exampleSentence: 'He turned up late for the interview.',
    meaning: 'to arrive, often unexpectedly or late',
    distractors: ['to leave early', 'to increase the heat', 'to fold a sleeve'],
  },
  {
    phrasal: 'work out',
    exampleSentence: 'I couldn’t work out the answer to the puzzle.',
    meaning: 'to solve or understand something',
    distractors: ['to exercise at a gym', 'to leave a job', 'to go outside'],
  },
  {
    phrasal: 'break down',
    exampleSentence: 'Our car broke down on the motorway.',
    meaning: 'to stop working (of a machine or vehicle)',
    distractors: ['to fall to the ground', 'to start easily', 'to drive fast'],
  },
  {
    phrasal: 'cut down on',
    exampleSentence: 'The doctor told him to cut down on sugar.',
    meaning: 'to reduce the amount of something',
    distractors: ['to chop a tree', 'to add more of something', 'to throw away'],
  },
  {
    phrasal: 'deal with',
    exampleSentence: 'The manager will deal with the complaint today.',
    meaning: 'to take action to solve a problem',
    distractors: ['to play cards', 'to ignore an issue', 'to make a deal'],
  },
  {
    phrasal: 'end up',
    exampleSentence: 'We got lost and ended up in the wrong town.',
    meaning: 'to reach a final situation or place',
    distractors: ['to finish on time', 'to stand up', 'to begin a journey'],
  },
  {
    phrasal: 'figure out',
    exampleSentence: 'I can’t figure out how this machine works.',
    meaning: 'to understand something after thinking about it',
    distractors: ['to draw a shape', 'to count numbers', 'to leave a place'],
  },
  {
    phrasal: 'get along with',
    exampleSentence: 'Do you get along with your neighbours?',
    meaning: 'to have a friendly relationship with someone',
    distractors: ['to walk slowly', 'to dislike someone', 'to follow a path'],
  },
  {
    phrasal: 'get back',
    exampleSentence: 'What time did you get back from the trip?',
    meaning: 'to return to a place',
    distractors: ['to move backwards', 'to recover money', 'to take revenge'],
  },
  {
    phrasal: 'give in',
    exampleSentence: 'After a long argument, he finally gave in.',
    meaning: 'to stop resisting and agree',
    distractors: ['to hand in homework', 'to enter a room', 'to donate money'],
  },
  {
    phrasal: 'go off',
    exampleSentence: 'The milk has gone off; it smells terrible.',
    meaning: 'to become bad or no longer fresh',
    distractors: ['to leave a party', 'to switch on', 'to explode loudly'],
  },
  {
    phrasal: 'hang on',
    exampleSentence: 'Hang on while I find my keys.',
    meaning: 'to wait for a moment',
    distractors: ['to let go of something', 'to hang up clothes', 'to hold tightly'],
  },
  {
    phrasal: 'hang up',
    exampleSentence: 'She hung up the phone before I could reply.',
    meaning: 'to end a telephone call',
    distractors: ['to wait patiently', 'to hang a picture', 'to call someone'],
  },
  {
    phrasal: 'keep up with',
    exampleSentence: 'It’s hard to keep up with the latest news.',
    meaning: 'to stay at the same level or pace as something',
    distractors: ['to fall behind', 'to lift something', 'to store food'],
  },
  {
    phrasal: 'let down',
    exampleSentence: 'I promised to help, and I won’t let you down.',
    meaning: 'to disappoint someone',
    distractors: ['to lower a rope', 'to support a friend', 'to relax fully'],
  },
  {
    phrasal: 'log in',
    exampleSentence: 'You need a password to log in to the website.',
    meaning: 'to enter a computer system using your details',
    distractors: ['to write in a diary', 'to leave a website', 'to record a video'],
  },
  {
    phrasal: 'make up',
    exampleSentence: 'The children made up a story about a dragon.',
    meaning: 'to invent something, such as a story',
    distractors: ['to apply cosmetics', 'to tell the truth', 'to wake up early'],
  },
  {
    phrasal: 'pass away',
    exampleSentence: 'Her grandfather passed away peacefully last spring.',
    meaning: 'to die (a polite expression)',
    distractors: ['to walk past', 'to fall asleep', 'to move house'],
  },
  {
    phrasal: 'point out',
    exampleSentence: 'She pointed out a mistake in my essay.',
    meaning: 'to tell someone about something they had not noticed',
    distractors: ['to leave a room', 'to draw an arrow', 'to choose an option'],
  },
  {
    phrasal: 'put up with',
    exampleSentence: 'I can’t put up with this noise any longer.',
    meaning: 'to tolerate something unpleasant',
    distractors: ['to build a tent', 'to enjoy something', 'to raise an arm'],
  },
  {
    phrasal: 'run into',
    exampleSentence: 'I ran into an old friend at the supermarket.',
    meaning: 'to meet someone unexpectedly',
    distractors: ['to crash a car', 'to enter a building', 'to avoid someone'],
  },
  {
    phrasal: 'set off',
    exampleSentence: 'We set off early to avoid the traffic.',
    meaning: 'to begin a journey',
    distractors: ['to arrive home', 'to switch off an alarm', 'to put down luggage'],
  },
  {
    phrasal: 'show up',
    exampleSentence: 'Only half the team showed up for practice.',
    meaning: 'to arrive or appear',
    distractors: ['to leave early', 'to display proudly', 'to climb up'],
  },
  {
    phrasal: 'sort out',
    exampleSentence: 'I need to sort out my files before the deadline.',
    meaning: 'to organise or resolve something',
    distractors: ['to throw away', 'to make a mess', 'to leave the office'],
  },
  {
    phrasal: 'stay up',
    exampleSentence: 'The children stayed up late to watch the film.',
    meaning: 'to remain awake instead of going to bed',
    distractors: ['to stand still', 'to wake up early', 'to remain standing'],
  },
  {
    phrasal: 'take after',
    exampleSentence: 'She takes after her mother in many ways.',
    meaning: 'to resemble an older family member',
    distractors: ['to follow someone', 'to look behind you', 'to chase a person'],
  },
  {
    phrasal: 'throw away',
    exampleSentence: 'Don’t throw away those bottles; we can recycle them.',
    meaning: 'to get rid of something you no longer want',
    distractors: ['to keep safely', 'to toss a ball', 'to give as a gift'],
  },
  {
    phrasal: 'try on',
    exampleSentence: 'Can I try on these shoes before I buy them?',
    meaning: 'to put on clothing to see if it fits',
    distractors: ['to attempt a task', 'to take off clothes', 'to test a machine'],
  },
  {
    phrasal: 'turn off',
    exampleSentence: 'Remember to turn off the lights when you leave.',
    meaning: 'to stop a device or appliance working',
    distractors: ['to start an engine', 'to leave a road', 'to refuse politely'],
  },
  {
    phrasal: 'turn on',
    exampleSentence: 'Could you turn on the heating, please?',
    meaning: 'to start a device or appliance working',
    distractors: ['to switch off a light', 'to face someone', 'to rotate slowly'],
  },
  {
    phrasal: 'wake up',
    exampleSentence: 'I woke up early to catch the first bus.',
    meaning: 'to stop sleeping',
    distractors: ['to get out of bed', 'to fall asleep', 'to feel sleepy'],
  },
  {
    phrasal: 'warm up',
    exampleSentence: 'Athletes warm up before a race to avoid injury.',
    meaning: 'to prepare the body with gentle exercise',
    distractors: ['to heat a meal', 'to cool down', 'to put on a jumper'],
  },
]

export const BANK: GameBank<PhrasalVerb> = {
  slug: 'phrasal-verbs-match',
  items: PHRASAL_BANK,
  // No two phrasal verbs are the same, and the phrasal verb is what the student is asked about.
  key: (q) => q.phrasal,
  answer: (q) => q.meaning,
  // The same four every time; the page only shuffles their order.
  options: (q) => [q.meaning, ...q.distractors],
}
