// ─── IELTS Speaking cues · Set 4 (Academic, Parts 1-3) ─────────────────────
// A fourth batch of original IELTS-preparation practice prompts for the async
// Speaking module. Same shape and conventions as SPEAKING_CUES, with fresh
// everyday topics so learners can rotate through more material without repeats:
//   • Part 1 - short interview questions on familiar, everyday topics.
//   • Part 2 - a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings.
//   • Part 3 - a two-way discussion: more abstract, opinion-led questions that
//     thematically extend a Part 2 topic (decisions & choices, leisure &
//     hobbies, helping & community, reading & books).
//
// Topics here are deliberately distinct from the base cues and Sets 2-3
// (which already cover hometown, music, weekends, technology, food, weather,
// transport, inspiring person, place to visit, talent to develop, exciting
// event, photograph, outdoor place, useful website/app, journey, skill).
//
// All prompts are original and written for this app - they do not reproduce any
// official or third-party IELTS question bank. ids use the `sp-004-` prefix so
// the coordinator can merge this set without colliding with the other cues.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_SET_4: SpeakingCue[] = [
  // ─── Part 1 - Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp-004-p1-shopping',
    part: 'speaking-part-1',
    title: 'Part 1 · Shopping',
    prompts: [
      'Do you enjoy going shopping, or is it something you try to get done quickly?',
      'Do you prefer shopping in physical stores or buying things online? Why?',
      'What sort of things do you most enjoy spending your money on?',
      'Are there any shops or markets near you that you visit regularly?',
      'Has the way you do your shopping changed much in recent years?',
      'Do you usually plan your purchases, or do you sometimes buy things on impulse?',
    ],
  },
  {
    id: 'sp-004-p1-books-reading',
    part: 'speaking-part-1',
    title: 'Part 1 · Books and reading',
    prompts: [
      'Do you enjoy reading in your free time?',
      'What kind of books or stories do you like to read the most?',
      'Do you prefer reading printed books or reading on a screen? Why?',
      'When and where do you usually find time to read?',
      'Was there a particular book you loved when you were younger?',
      'Would you like to read more than you do at the moment?',
    ],
  },
  {
    id: 'sp-004-p1-sport-exercise',
    part: 'speaking-part-1',
    title: 'Part 1 · Sport and exercise',
    prompts: [
      'Do you do any kind of sport or exercise on a regular basis?',
      'How did you first get interested in it?',
      'Do you prefer exercising on your own or with other people? Why?',
      'Do you enjoy watching sport as much as taking part in it?',
      'Is there a new sport or activity you would like to try one day?',
    ],
  },
  {
    id: 'sp-004-p1-sleep-relaxation',
    part: 'speaking-part-1',
    title: 'Part 1 · Sleep and relaxing',
    prompts: [
      'Do you usually get enough sleep during the week?',
      'What helps you to relax after a long or stressful day?',
      'Do you ever take a short nap during the day?',
      'Has the amount you sleep changed since you were younger?',
      'Do you find it easy to switch off and unwind, or does it take you a while?',
    ],
  },

  // ─── Part 2 - Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp-004-p2-important-decision',
    part: 'speaking-part-2',
    title: 'Part 2 · An important decision you made',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe an important decision that you once made.',
      'You should say:',
      'what the decision was and when you made it',
      'what choices or options you were considering at the time',
      'who, if anyone, helped you to decide',
      'and explain why this decision was an important one for you.',
    ],
  },
  {
    id: 'sp-004-p2-hobby-you-enjoy',
    part: 'speaking-part-2',
    title: 'Part 2 · A hobby you really enjoy',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a hobby or pastime that you really enjoy.',
      'You should say:',
      'what the hobby is and how you got into it',
      'how often you do it and who you do it with',
      'what you need in order to do it',
      'and explain why you enjoy this hobby so much.',
    ],
  },
  {
    id: 'sp-004-p2-time-you-helped-someone',
    part: 'speaking-part-2',
    title: 'Part 2 · A time you helped someone',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a time when you helped someone who needed it.',
      'You should say:',
      'who you helped and what the situation was',
      'why this person needed your help',
      'what you actually did to help them',
      'and explain how you felt about helping this person.',
    ],
  },
  {
    id: 'sp-004-p2-book-you-enjoyed',
    part: 'speaking-part-2',
    title: 'Part 2 · A book or story you enjoyed reading',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a book or a story that you really enjoyed reading.',
      'You should say:',
      'what the book or story was about',
      'when you read it and how you came across it',
      'what you liked most about it',
      'and explain why you enjoyed reading it so much.',
    ],
  },

  // ─── Part 3 - Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp-004-p3-decisions-choices',
    part: 'speaking-part-3',
    title: 'Part 3 · Making decisions and choices',
    prompts: [
      'Why do you think some people find it so difficult to make decisions?',
      'Is it better to make important decisions quickly or to take plenty of time over them? Why?',
      'How much should people rely on the advice of others when deciding something important?',
      'Do you think having too many choices can sometimes make life harder?',
      'Should young people be given the freedom to make their own decisions, even big ones?',
      'How do you think the way people make decisions has changed in the modern world?',
    ],
  },
  {
    id: 'sp-004-p3-leisure-hobbies',
    part: 'speaking-part-3',
    title: 'Part 3 · Leisure time and hobbies',
    prompts: [
      'Why do you think hobbies are important in people’s lives?',
      'Do you think people today have more or less free time than in the past? Why?',
      'Are some hobbies seen as more worthwhile than others? Why might that be?',
      'How do the kinds of hobbies people enjoy tend to change as they get older?',
      'Should schools do more to encourage children to take up hobbies? Why or why not?',
      'Do you think people will have different sorts of hobbies in the future?',
    ],
  },
  {
    id: 'sp-004-p3-helping-community',
    part: 'speaking-part-3',
    title: 'Part 3 · Helping others and community',
    prompts: [
      'Why do you think some people are more willing to help others than others are?',
      'What kinds of help do people in your community need the most?',
      'Do you think it is the responsibility of individuals or governments to help those in need? Why?',
      'How can schools encourage young people to help others in their community?',
      'Do you think people are as willing to help strangers as they used to be?',
      'What are the benefits, for the person who helps, of helping others?',
    ],
  },
  {
    id: 'sp-004-p3-reading-books',
    part: 'speaking-part-3',
    title: 'Part 3 · Reading and books in society',
    prompts: [
      'Why do you think some people read far more than others?',
      'What are the benefits of encouraging children to read from a young age?',
      'Do you think printed books will eventually be replaced by digital ones? Why or why not?',
      'How can libraries stay relevant in a world full of digital media?',
      'Is reading for pleasure becoming less common these days? Why might that be?',
      'What role should schools play in encouraging a love of reading?',
    ],
  },
]

/** Find a Set 4 cue by id (used when restoring a chosen prompt from this set). */
export function findSet4Cue(id: string): SpeakingCue | undefined {
  return SPEAKING_SET_4.find((cue) => cue.id === id)
}
