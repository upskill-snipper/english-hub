// ─── IELTS Speaking cues · Set 5 (Academic, Parts 1–3) ─────────────────────
// A fifth batch of original IELTS-preparation practice prompts for the async
// Speaking module. Same shape and conventions as SPEAKING_CUES, with fresh
// everyday topics so learners can rotate through more material without repeats:
//   • Part 1 — short interview questions on familiar, everyday topics.
//   • Part 2 — a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings.
//   • Part 3 — a two-way discussion: more abstract, opinion-led questions that
//     thematically extend a Part 2 topic (generosity & gift-giving, relaxation
//     & wellbeing, advice & guidance, older generations & ageing).
//
// Topics here are deliberately distinct from the base cues and Sets 2–4 (which
// already cover home/area, daily routine, food, weather, transport, hometown,
// music, weekends, technology, shopping, books/reading, sport, sleep, and the
// cue cards for skill, journey, useful website/app, person admired, photograph,
// outdoor place, inspiring person, place to visit, talent, exciting event,
// important decision, hobby, helping someone and a book/story). Set 5 instead
// covers clothes & fashion, the internet, festivals & celebrations, animals &
// pets, plus cue cards on a gift, a relaxing place, a piece of advice and an
// older person.
//
// All prompts are original and written for this app — they do not reproduce any
// official or third-party IELTS question bank. ids use the `sp-005-` prefix so
// the coordinator can merge this set without colliding with the other cues.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_SET_5: SpeakingCue[] = [
  // ─── Part 1 — Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp-005-p1-clothes-fashion',
    part: 'speaking-part-1',
    title: 'Part 1 · Clothes and fashion',
    prompts: [
      'What sort of clothes do you feel most comfortable wearing day to day?',
      'Do you tend to dress differently at home compared with when you go out?',
      'How much attention do you pay to the latest fashions?',
      'Do you prefer to shop for clothes yourself, or would you rather someone chose them for you?',
      'Have the kinds of clothes you like changed since you were a teenager?',
      'Is there an outfit you own that you are particularly fond of?',
    ],
  },
  {
    id: 'sp-005-p1-the-internet',
    part: 'speaking-part-1',
    title: 'Part 1 · The internet',
    prompts: [
      'What do you mainly use the internet for in your everyday life?',
      'At what point during the day do you tend to go online the most?',
      'Do you remember the first time you ever used the internet?',
      'Would you find it difficult to manage for a week without going online? Why?',
      'Do you think you spend a sensible amount of time on the internet?',
      'Is there anything about the internet that you find frustrating?',
    ],
  },
  {
    id: 'sp-005-p1-festivals-celebrations',
    part: 'speaking-part-1',
    title: 'Part 1 · Festivals and celebrations',
    prompts: [
      'Which festival or celebration do you most look forward to during the year?',
      'How do people where you live usually mark special occasions?',
      'Do you prefer big celebrations with lots of people or quieter ones with family?',
      'Is there a special food or dish you associate with a particular celebration?',
      'Have the ways people celebrate changed since you were a child?',
    ],
  },
  {
    id: 'sp-005-p1-animals-pets',
    part: 'speaking-part-1',
    title: 'Part 1 · Animals and pets',
    prompts: [
      'Do you have a pet, or did you ever have one when you were growing up?',
      'What is your favourite kind of animal, and why?',
      'Do you think keeping a pet is a good idea for children? Why or why not?',
      'Are there many places near you where people can see animals, such as parks or zoos?',
      'Would you say people in your country are generally fond of animals?',
    ],
  },

  // ─── Part 2 — Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp-005-p2-gift-you-gave',
    part: 'speaking-part-2',
    title: 'Part 2 · A gift you gave to someone',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a gift that you once gave to someone.',
      'You should say:',
      'what the gift was and who you gave it to',
      'why you chose that particular gift',
      'how the person reacted when they received it',
      'and explain how you felt about giving this gift.',
    ],
  },
  {
    id: 'sp-005-p2-relaxing-place',
    part: 'speaking-part-2',
    title: 'Part 2 · A place where you feel relaxed',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a place where you go to feel calm and relaxed.',
      'You should say:',
      'where this place is and what it is like',
      'how often you go there and who, if anyone, you go with',
      'what you usually do while you are there',
      'and explain why this place helps you to feel relaxed.',
    ],
  },
  {
    id: 'sp-005-p2-advice-you-received',
    part: 'speaking-part-2',
    title: 'Part 2 · A piece of advice someone gave you',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a useful piece of advice that someone once gave you.',
      'You should say:',
      'what the advice was and who gave it to you',
      'when and why they gave you this advice',
      'whether or not you followed it',
      'and explain why this advice was so valuable to you.',
    ],
  },
  {
    id: 'sp-005-p2-interesting-older-person',
    part: 'speaking-part-2',
    title: 'Part 2 · An older person you find interesting',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe an older person you know who you find interesting.',
      'You should say:',
      'who this person is and how you know them',
      'what they are like and how they spend their time',
      'what sorts of things they have told you about their life',
      'and explain why you find this person so interesting.',
    ],
  },

  // ─── Part 3 — Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp-005-p3-giving-generosity',
    part: 'speaking-part-3',
    title: 'Part 3 · Gifts and generosity',
    prompts: [
      'Why do you think people give one another gifts on special occasions?',
      'Is it the thought behind a gift that matters most, or how much it costs? Why?',
      'Do you think people sometimes feel pressured into giving expensive presents?',
      'How have the kinds of gifts people give changed over the years?',
      'Are people in general becoming more or less generous than they used to be?',
      'Do you think it is better to give people gifts or to give them experiences?',
    ],
  },
  {
    id: 'sp-005-p3-relaxation-wellbeing',
    part: 'speaking-part-3',
    title: 'Part 3 · Relaxation and wellbeing',
    prompts: [
      'Why do you think it is so important for people to find time to relax?',
      'Do you think people today find it harder to switch off than in the past? Why?',
      'What sorts of activities do people in your country do to unwind?',
      'Is it possible for someone to relax too much? Why or why not?',
      'How does the place where people live affect how relaxed they feel?',
      'Should employers do more to help their staff avoid stress? In what ways?',
    ],
  },
  {
    id: 'sp-005-p3-advice-guidance',
    part: 'speaking-part-3',
    title: 'Part 3 · Advice and guidance',
    prompts: [
      'Why do you think people often turn to others for advice before making a decision?',
      'Whose advice do people tend to trust the most, and why?',
      'Is it always wise to follow the advice you are given? Why or why not?',
      'Do you think young people are generally willing to listen to advice from older people?',
      'How has the way people seek advice changed now that so much is available online?',
      'Is giving good advice a skill that can be learned, or does it come naturally?',
    ],
  },
  {
    id: 'sp-005-p3-older-generations-ageing',
    part: 'speaking-part-3',
    title: 'Part 3 · Older generations and ageing',
    prompts: [
      'What can younger people learn from those who are much older than them?',
      'Do you think older people are respected as much as they should be in society?',
      'How has the role of older people in families changed over recent decades?',
      'Should younger and older generations spend more time together? Why or why not?',
      'What can be done to help older people stay active and involved in their communities?',
      'Do you think people’s attitudes towards growing old are changing? In what ways?',
    ],
  },
]

/** Find a Set 5 cue by id (used when restoring a chosen prompt from this set). */
export function findSet5Cue(id: string): SpeakingCue | undefined {
  return SPEAKING_SET_5.find((cue) => cue.id === id)
}
