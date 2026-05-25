// ─── IELTS Speaking cues · Set 12 (Academic, Parts 1-3) ────────────────────
// A twelfth batch of original IELTS-preparation practice prompts for the async
// Speaking module. Same shape and conventions as SPEAKING_CUES, with fresh
// everyday topics so learners can keep rotating through material without
// repeats:
//   • Part 1 - short interview questions on familiar, everyday topics.
//   • Part 2 - a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings.
//   • Part 3 - a two-way discussion: more abstract, opinion-led questions that
//     thematically extend a Part 2 topic (arts & culture, travel & tourism).
//
// Set 12 covers music and public transport in Part 1, cue cards on a book or
// story you enjoyed and a place you would like to visit, and Part 3 discussions
// that broaden those themes into arts & culture and travel & tourism.
//
// All prompts are original and written for this app - they do not reproduce any
// official or third-party IELTS question bank. ids carry an `s12` marker so the
// coordinator can merge this set without colliding with the other cues.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_SET_12: SpeakingCue[] = [
  // ─── Part 1 - Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp1-s12-music',
    part: 'speaking-part-1',
    title: 'Part 1 · Music',
    prompts: [
      'What kind of music do you tend to listen to most often?',
      'When during the day do you usually find time to listen to music?',
      'Did you ever learn to play a musical instrument when you were younger?',
      'Do you prefer listening to music on your own or sharing it with others?',
      'Has the type of music you enjoy changed much over the years?',
    ],
  },
  {
    id: 'sp1-s12-transport',
    part: 'speaking-part-1',
    title: 'Part 1 · Public transport',
    prompts: [
      'How do you usually get around your town or city?',
      'Do you use buses or trains very often? Why or why not?',
      'What do you like or dislike about using public transport?',
      'Is the public transport where you live easy for visitors to understand?',
      'Would you use public transport more if the services were improved?',
    ],
  },

  // ─── Part 2 - Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp2-s12-book',
    part: 'speaking-part-2',
    title: 'Part 2 · A book or story you enjoyed',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a book or story that you really enjoyed.',
      'You should say:',
      'what the book or story was and what it was about',
      'when and how you came to read it',
      'which part of it you liked the most',
      'and explain why you enjoyed this book or story so much.',
    ],
  },
  {
    id: 'sp2-s12-place-to-visit',
    part: 'speaking-part-2',
    title: 'Part 2 · A place you would like to visit',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a place that you would really like to visit one day.',
      'You should say:',
      'where this place is and what it is like',
      'how you first heard about it',
      'what you would most like to do or see there',
      'and explain why you would like to visit this place.',
    ],
  },

  // ─── Part 3 - Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp3-s12-arts-culture',
    part: 'speaking-part-3',
    title: 'Part 3 · Arts and culture',
    prompts: [
      'Why do you think reading and storytelling matter so much to people?',
      'Do you think the arts receive enough support in your country?',
      'How important is it for children to be introduced to books and the arts early on?',
      'In what ways can the culture of a place be reflected in its art and literature?',
      'Do you think digital media is changing the way people enjoy the arts? How?',
    ],
  },
  {
    id: 'sp3-s12-travel-tourism',
    part: 'speaking-part-3',
    title: 'Part 3 · Travel and tourism',
    prompts: [
      'Why do you think so many people are keen to travel to other countries?',
      'What benefits can tourism bring to a local area?',
      'Do you think tourism can ever cause harm to the places people visit?',
      'How has the way people plan and book their travel changed in recent years?',
      'Do you think people learn more from travelling than they do from books or films?',
    ],
  },
]

/** Find a Set 12 cue by id (used when restoring a chosen prompt from this set). */
export function findSet12Cue(id: string): SpeakingCue | undefined {
  return SPEAKING_SET_12.find((cue) => cue.id === id)
}
