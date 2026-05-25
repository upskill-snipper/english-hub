// ─── IELTS Speaking cues · Set 6 (Academic, Parts 1-3) ─────────────────────
// A sixth batch of original IELTS-preparation practice prompts for the async
// Speaking module. Same shape and conventions as SPEAKING_CUES, with fresh
// everyday topics so learners can rotate through more material without repeats:
//   • Part 1 - short interview questions on familiar, everyday topics.
//   • Part 2 - a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings.
//   • Part 3 - a two-way discussion: more abstract, opinion-led questions that
//     thematically extend a Part 2 topic (skills & expertise, architecture &
//     public spaces, food & shared meals, role models in everyday life).
//
// Topics here are deliberately distinct from the base cues and Sets 2-5 (which
// already cover home/area, daily routine, food/cooking, weather, transport,
// hometown, music, weekends, technology, shopping, books/reading, sport, sleep,
// clothes, the internet, festivals, animals/pets, plus cue cards for a skill,
// a journey, a useful website/app, a person admired, a photograph, an outdoor
// place, an inspiring person, a place to visit, a talent, an exciting event, an
// important decision, a hobby, helping someone, a book/story, a gift, a relaxing
// place, a piece of advice and an older person). Set 6 instead covers cooking &
// meals, public transport (from a commuting angle), holidays & time off, and
// news & current events, plus cue cards on a skill to master, an impressive
// building, a memorable meal and a non-famous person you admire.
//
// All prompts are original and written for this app - they do not reproduce any
// official or third-party IELTS question bank. ids use the `sp-006-` prefix so
// the coordinator can merge this set without colliding with the other cues.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_SET_6: SpeakingCue[] = [
  // ─── Part 1 - Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp-006-p1-cooking-meals',
    part: 'speaking-part-1',
    title: 'Part 1 · Cooking and meals',
    prompts: [
      'Do you cook much at home, or do you usually rely on ready-made food?',
      'What is one dish you can make really well?',
      'Do you prefer to eat your main meal at lunchtime or in the evening? Why?',
      'Did anyone teach you to cook when you were growing up?',
      'Would you like to learn to cook a wider range of dishes in the future?',
      'How important is it for you to sit down and eat with other people?',
    ],
  },
  {
    id: 'sp-006-p1-public-transport',
    part: 'speaking-part-1',
    title: 'Part 1 · Public transport',
    prompts: [
      'How do you usually get to work or your place of study?',
      'Do you use buses or trains very often? Why or why not?',
      'What do you tend to do to pass the time on a long journey?',
      'Is public transport where you live reliable and affordable?',
      'Would you say people in your country use public transport more than they used to?',
    ],
  },
  {
    id: 'sp-006-p1-holidays-time-off',
    part: 'speaking-part-1',
    title: 'Part 1 · Holidays and time off',
    prompts: [
      'What do you most like to do when you have a few days off?',
      'Do you prefer holidays where you stay busy, or ones where you simply relax?',
      'Where did you go on your last proper holiday?',
      'Do you usually plan your time off in advance, or decide at the last minute?',
      'Is there a place in your own country you would recommend to a visitor?',
      'How do you feel when a holiday comes to an end?',
    ],
  },
  {
    id: 'sp-006-p1-news-current-events',
    part: 'speaking-part-1',
    title: 'Part 1 · News and current events',
    prompts: [
      'How do you usually keep up with the news - online, on television, or some other way?',
      'What kinds of news stories tend to interest you the most?',
      'Do you check the news at a particular time of day?',
      'Has the way you follow the news changed over the last few years?',
      'Do you think it is important for young people to take an interest in current events?',
    ],
  },

  // ─── Part 2 - Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp-006-p2-skill-to-master',
    part: 'speaking-part-2',
    title: 'Part 2 · A skill you would like to master',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a skill you would like to master one day.',
      'You should say:',
      'what the skill is and how you first became interested in it',
      'how you would go about learning it properly',
      'how much time and effort you think it would take',
      'and explain why mastering this skill matters to you.',
    ],
  },
  {
    id: 'sp-006-p2-impressive-building',
    part: 'speaking-part-2',
    title: 'Part 2 · A building you find impressive',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a building that you find particularly impressive.',
      'You should say:',
      'what the building is and where it is located',
      'what it looks like and what it is used for',
      'when and how you first saw it',
      'and explain why you find this building so impressive.',
    ],
  },
  {
    id: 'sp-006-p2-memorable-meal',
    part: 'speaking-part-2',
    title: 'Part 2 · A memorable meal you had',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a meal that you remember particularly well.',
      'You should say:',
      'what the meal was and where you ate it',
      'who you shared it with',
      'what made the food or the occasion special',
      'and explain why this meal has stayed in your memory.',
    ],
  },
  {
    id: 'sp-006-p2-admired-non-famous-person',
    part: 'speaking-part-2',
    title: 'Part 2 · A person you admire who is not famous',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe someone you admire who is not famous or well known.',
      'You should say:',
      'who the person is and how you know them',
      'what they do in their everyday life',
      'what they have said or done that impressed you',
      'and explain why you admire this person so much.',
    ],
  },

  // ─── Part 3 - Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp-006-p3-skills-expertise',
    part: 'speaking-part-3',
    title: 'Part 3 · Skills and expertise',
    prompts: [
      'Why do you think some people are willing to spend years mastering a single skill?',
      'Do you believe natural talent matters more than hard work when learning something difficult? Why?',
      'How has the internet changed the way people develop new skills?',
      'Should schools spend more time helping students discover what they are good at? Why or why not?',
      'Do you think certain traditional skills are at risk of being lost? What could be done about it?',
      'In the future, which kinds of skills do you think will be the most valuable?',
    ],
  },
  {
    id: 'sp-006-p3-architecture-public-spaces',
    part: 'speaking-part-3',
    title: 'Part 3 · Architecture and public spaces',
    prompts: [
      'What makes a building beautiful or impressive, in your opinion?',
      'Do you think modern buildings are better designed than older ones? Why?',
      'How important is it for a city to preserve its historic buildings?',
      'Should governments spend public money on striking architecture, or focus on practical needs?',
      'How do the buildings and public spaces around us affect the way people feel?',
      'Do you think the design of cities will change a great deal in the coming decades?',
    ],
  },
  {
    id: 'sp-006-p3-food-shared-meals',
    part: 'speaking-part-3',
    title: 'Part 3 · Food and shared meals',
    prompts: [
      'Why do you think sharing a meal is such an important part of many cultures?',
      'Do you think families eat together as often as they used to? Why or why not?',
      'How have eating habits in your country changed over the last generation?',
      'What are the advantages and disadvantages of eating out so frequently?',
      'Do you think people pay enough attention to where their food comes from?',
      'How might the way we eat change in the future?',
    ],
  },
  {
    id: 'sp-006-p3-everyday-role-models',
    part: 'speaking-part-3',
    title: 'Part 3 · Everyday role models',
    prompts: [
      'Who do you think makes a better role model - a famous person or someone in our daily lives?',
      'Why do some people look up to celebrities rather than the people around them?',
      'How do the people we admire when we are young shape who we become?',
      'Do you think public figures have a responsibility to set a good example? Why?',
      'In what ways can ordinary people have a positive influence on their communities?',
      'Has the kind of person society admires changed over time, in your view?',
    ],
  },
]
