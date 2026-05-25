// ─── IELTS Speaking cues · Set 8 (Academic, Parts 1-3) ─────────────────────
// An eighth batch of original IELTS-preparation practice prompts for the async
// Speaking module. Same shape and conventions as SPEAKING_CUES, with fresh
// everyday topics so learners can rotate through more material without repeats:
//   • Part 1 - short interview questions on familiar, everyday topics.
//   • Part 2 - a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings.
//   • Part 3 - a two-way discussion: more abstract, opinion-led questions that
//     thematically extend a Part 2 topic (education & teachers, cities &
//     tourism, problem-solving, and possessions & value).
//
// Topics here are deliberately distinct from the base cues and Sets 2-7 (which
// already cover home/area, daily routine, food/cooking, weather, transport,
// hometown, music, weekends, technology, shopping, books/reading, sport, sleep,
// clothes, the internet, festivals, animals, neighbours, languages, mobile
// phones and the workspace, plus cue cards on a skill, journey, website/app,
// person admired, photograph, outdoor place, inspiring person, place to visit,
// talent, exciting event, important decision, hobby, helping someone, a book, a
// gift, a relaxing place, advice, an older person, a goal, a tradition, a useful
// object and a piece of news). Set 8 instead covers parks & gardens, films &
// cinema, money & saving and your favourite time of day, plus cue cards on a
// teacher who influenced you, a city you would recommend, a problem you solved
// and a possession you would want to keep.
//
// All prompts are original and written for this app - they do not reproduce any
// official or third-party IELTS question bank. ids use the `sp-008-` prefix so
// the coordinator can merge this set without colliding with the other cues.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_SET_8: SpeakingCue[] = [
  // ─── Part 1 - Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp-008-p1-parks-gardens',
    part: 'speaking-part-1',
    title: 'Part 1 · Parks and gardens',
    prompts: [
      'Is there a park or garden near where you live?',
      'How often do you spend time in green spaces like parks?',
      'What do people in your area usually do when they visit a park?',
      'Did you spend much time in parks when you were a child?',
      'Do you think your town or city has enough green spaces? Why or why not?',
    ],
  },
  {
    id: 'sp-008-p1-films-cinema',
    part: 'speaking-part-1',
    title: 'Part 1 · Films and cinema',
    prompts: [
      'What kinds of films do you enjoy watching the most?',
      'Do you prefer watching films at the cinema or at home? Why?',
      'How often do you actually go out to the cinema these days?',
      'Is there a film you have seen more than once? Tell me about it.',
      'Do you like watching films in their original language or with subtitles?',
    ],
  },
  {
    id: 'sp-008-p1-money-saving',
    part: 'speaking-part-1',
    title: 'Part 1 · Money and saving',
    prompts: [
      'Do you find it easy or difficult to save money?',
      'Did anyone teach you about managing money when you were younger?',
      'Would you rather save up for something or buy it straight away?',
      'Do you prefer paying with cash or with a card? Why?',
      'If you were given some extra money unexpectedly, what would you do with it?',
    ],
  },
  {
    id: 'sp-008-p1-favourite-time-of-day',
    part: 'speaking-part-1',
    title: 'Part 1 · Your favourite time of day',
    prompts: [
      'What is your favourite time of day, and why?',
      'Are you more productive in the morning or later in the day?',
      'How do you usually like to start your mornings?',
      'Is there a part of the day you find difficult or tiring?',
      'Has your favourite time of day changed as you have got older?',
    ],
  },

  // ─── Part 2 - Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp-008-p2-teacher-influenced-you',
    part: 'speaking-part-2',
    title: 'Part 2 · A teacher who influenced you',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a teacher who had a strong influence on you.',
      'You should say:',
      'who this teacher was and what they taught you',
      'when this was and how long they taught you for',
      'what this teacher was like as a person',
      'and explain how this teacher influenced you.',
    ],
  },
  {
    id: 'sp-008-p2-city-recommend-visiting',
    part: 'speaking-part-2',
    title: 'Part 2 · A city you would recommend visiting',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a city that you would recommend other people visit.',
      'You should say:',
      'which city it is and where it is located',
      'how you know about this city',
      'what there is to see and do there',
      'and explain why you would recommend it to others.',
    ],
  },
  {
    id: 'sp-008-p2-problem-you-solved',
    part: 'speaking-part-2',
    title: 'Part 2 · A problem you managed to solve',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a problem you faced that you managed to solve.',
      'You should say:',
      'what the problem was and when it happened',
      'why it was a problem for you',
      'what steps you took to deal with it',
      'and explain how you felt once you had solved it.',
    ],
  },
  {
    id: 'sp-008-p2-possession-want-to-keep',
    part: 'speaking-part-2',
    title: 'Part 2 · A possession you would want to keep',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a possession of yours that you would always want to keep.',
      'You should say:',
      'what it is and how you came to have it',
      'how long you have had it',
      'how often you use it or look at it',
      'and explain why you would never want to give it up.',
    ],
  },

  // ─── Part 3 - Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp-008-p3-education-teachers',
    part: 'speaking-part-3',
    title: 'Part 3 · Education and teachers',
    prompts: [
      'What qualities do you think make someone a really good teacher?',
      'Do you think a teacher’s influence can last a person’s whole life? Why?',
      'How has the role of teachers changed now that so much information is online?',
      'Some people say respect for teachers has declined. Do you agree?',
      'Do you think teaching should be a better-paid and more respected profession? Why?',
    ],
  },
  {
    id: 'sp-008-p3-cities-tourism',
    part: 'speaking-part-3',
    title: 'Part 3 · Cities and tourism',
    prompts: [
      'Why do you think some cities attract far more tourists than others?',
      'What are the benefits and drawbacks of tourism for a city and its residents?',
      'Do you think cities are changing the way they look in order to appeal to visitors?',
      'Is it better for tourists to explore independently or to join organised tours? Why?',
      'How do you think the way people travel to cities will change in the future?',
    ],
  },
  {
    id: 'sp-008-p3-solving-problems',
    part: 'speaking-part-3',
    title: 'Part 3 · Solving problems',
    prompts: [
      'Do you think some people are naturally better at solving problems than others?',
      'Is it better to solve a difficult problem on your own or to ask others for help? Why?',
      'How important is it for schools to teach children how to solve problems?',
      'Do you think technology makes solving everyday problems easier or harder?',
      'Why do some people give up quickly when they face a difficult problem?',
    ],
  },
  {
    id: 'sp-008-p3-possessions-value',
    part: 'speaking-part-3',
    title: 'Part 3 · Possessions and what we value',
    prompts: [
      'Why do you think people become attached to certain objects?',
      'Do you think people today own more things than they really need? Why?',
      'Is the sentimental value of an object more important than what it is worth in money?',
      'Do you think attitudes towards owning things differ between younger and older people?',
      'How might people’s relationship with their possessions change in the future?',
    ],
  },
]
