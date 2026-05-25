// ─── IELTS Speaking cues · Set 7 (Academic, Parts 1-3) ─────────────────────
// A seventh batch of original IELTS-preparation practice prompts for the async
// Speaking module. Same shape and conventions as SPEAKING_CUES, with fresh
// everyday topics so learners can rotate through more material without repeats:
//   • Part 1 - short interview questions on familiar, everyday topics.
//   • Part 2 - a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings.
//   • Part 3 - a two-way discussion: more abstract, opinion-led questions that
//     thematically extend a Part 2 topic (goals & ambition, traditions &
//     cultural change, possessions & consumerism, news & the media).
//
// Topics here are deliberately distinct from the base cues and Sets 2-5 (which
// already cover home/area, daily routine, food, weather, transport, hometown,
// music, weekends, technology, shopping, books/reading, sport, sleep, clothes,
// the internet, festivals, animals, plus cue cards on a skill, journey, useful
// website/app, person admired, photograph, outdoor place, inspiring person,
// place to visit, talent, exciting event, important decision, hobby, helping
// someone, a book, a gift, a relaxing place, advice and an older person). Set 7
// instead covers neighbours, learning languages, mobile phones & messaging and
// your workspace, plus cue cards on a goal, a tradition, a useful object and a
// piece of news.
//
// All prompts are original and written for this app - they do not reproduce any
// official or third-party IELTS question bank. ids use the `sp-007-` prefix so
// the coordinator can merge this set without colliding with the other cues.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_SET_7: SpeakingCue[] = [
  // ─── Part 1 - Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp-007-p1-neighbours',
    part: 'speaking-part-1',
    title: 'Part 1 · Neighbours',
    prompts: [
      'Do you know the people who live next door to you very well?',
      'How often do you chat with your neighbours?',
      'What do you think makes someone a good neighbour?',
      'Have you ever had to ask a neighbour for help with something?',
      'Do you think people are as friendly with their neighbours as they used to be?',
      'Would you say it is important to get on well with the people who live near you?',
    ],
  },
  {
    id: 'sp-007-p1-learning-languages',
    part: 'speaking-part-1',
    title: 'Part 1 · Learning languages',
    prompts: [
      'How many languages can you speak, even a little?',
      'When did you first start learning a foreign language?',
      'Do you find learning a new language easy or quite a challenge?',
      'Which part of learning a language do you enjoy the most - speaking, listening or something else?',
      'Is there another language you would love to be able to speak one day?',
      'Do you think it is better to learn a language in a classroom or by living abroad?',
    ],
  },
  {
    id: 'sp-007-p1-phones-messaging',
    part: 'speaking-part-1',
    title: 'Part 1 · Mobile phones and messaging',
    prompts: [
      'How often do you send text or voice messages during the day?',
      'Do you prefer to message people or to call them? Why?',
      'What is the first thing you usually check on your phone in the morning?',
      'Are there times when you deliberately put your phone away? When?',
      'Has the way you keep in touch with friends changed in the last few years?',
    ],
  },
  {
    id: 'sp-007-p1-your-workspace',
    part: 'speaking-part-1',
    title: 'Part 1 · The place where you work or study',
    prompts: [
      'Where do you usually go to get your work or studying done?',
      'Do you prefer a quiet space or somewhere with a bit of background noise? Why?',
      'Is your desk or workspace usually tidy or rather messy?',
      'What sort of surroundings help you to concentrate best?',
      'Would you change anything about the place where you currently work or study?',
    ],
  },

  // ─── Part 2 - Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp-007-p2-goal-working-towards',
    part: 'speaking-part-2',
    title: 'Part 2 · A goal you are working towards',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a goal that you are currently working towards.',
      'You should say:',
      'what the goal is and when you set it for yourself',
      'what steps you are taking to achieve it',
      'how difficult it has been so far',
      'and explain why reaching this goal matters to you.',
    ],
  },
  {
    id: 'sp-007-p2-tradition-in-your-country',
    part: 'speaking-part-2',
    title: 'Part 2 · A tradition in your country',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a tradition or custom that is important in your country.',
      'You should say:',
      'what the tradition is and when it takes place',
      'how people usually take part in it',
      'how you first learned about it or got involved',
      'and explain why this tradition matters to people in your country.',
    ],
  },
  {
    id: 'sp-007-p2-useful-object-you-own',
    part: 'speaking-part-2',
    title: 'Part 2 · A useful object you own',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe an object you own that you find really useful in everyday life.',
      'You should say:',
      'what the object is and how long you have had it',
      'how you got it or where it came from',
      'what you use it for and how often',
      'and explain why you would find it hard to manage without it.',
    ],
  },
  {
    id: 'sp-007-p2-piece-of-news',
    part: 'speaking-part-2',
    title: 'Part 2 · A piece of news that interested you',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a piece of news you heard or read recently that interested you.',
      'You should say:',
      'what the news was about',
      'where and when you came across it',
      'who you discussed it with afterwards',
      'and explain why this piece of news caught your attention.',
    ],
  },

  // ─── Part 3 - Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp-007-p3-goals-ambition',
    part: 'speaking-part-3',
    title: 'Part 3 · Goals and ambition',
    prompts: [
      'Why do you think it helps some people to set themselves clear goals?',
      'Are people more likely to achieve goals they write down or share with others? Why?',
      'Do you think schools do enough to teach young people how to set realistic goals?',
      'Is it always a good thing to be highly ambitious? Why or why not?',
      'How do people usually cope when they fail to reach a goal they cared about?',
      'Do you think the goals people set for themselves have changed over the generations?',
    ],
  },
  {
    id: 'sp-007-p3-traditions-change',
    part: 'speaking-part-3',
    title: 'Part 3 · Traditions and cultural change',
    prompts: [
      'Why do you think some traditions survive for hundreds of years while others fade away?',
      'How important is it for a country to hold on to its old customs?',
      'Do you think younger people value traditions as much as their grandparents did?',
      'In what ways can modern life make it harder to keep traditions alive?',
      'Should traditions be allowed to change over time, or kept exactly as they were?',
      'How can countries make sure their traditions are passed on to the next generation?',
    ],
  },
  {
    id: 'sp-007-p3-possessions-consumerism',
    part: 'speaking-part-3',
    title: 'Part 3 · Possessions and consumerism',
    prompts: [
      'Why do you think some people place so much value on owning things?',
      'Do you think people today buy more than they really need? Why might that be?',
      'Is it better to own a few high-quality items or many cheaper ones? Why?',
      'How does advertising influence the things that people choose to buy?',
      'Do you think people would be happier if they owned fewer possessions?',
      'How might attitudes towards owning things change in the future?',
    ],
  },
  {
    id: 'sp-007-p3-news-media',
    part: 'speaking-part-3',
    title: 'Part 3 · News and the media',
    prompts: [
      'Why do you think it is important for people to keep up with the news?',
      'How has the way people get their news changed over the last twenty years?',
      'Do you think people can always trust what they read in the news? Why or why not?',
      'Is it possible for people to follow too much news? What might the effects be?',
      'Should young people be taught how to tell reliable news from unreliable sources?',
      'Do you think local news is as important to people as national or world news?',
    ],
  },
]

/** Find a Set 7 cue by id (used when restoring a chosen prompt from this set). */
export function findSet7Cue(id: string): SpeakingCue | undefined {
  return SPEAKING_SET_7.find((cue) => cue.id === id)
}
