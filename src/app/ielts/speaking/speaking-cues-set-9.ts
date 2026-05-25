// ─── IELTS Speaking cues · Set 9 (Academic, Parts 1-3) ─────────────────────
// A ninth batch of original IELTS-preparation practice prompts for the async
// Speaking module. Same shape and conventions as SPEAKING_CUES, with fresh
// everyday topics so learners can keep rotating through material without
// repeats:
//   • Part 1 - short interview questions on familiar, everyday topics.
//   • Part 2 - a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings.
//   • Part 3 - a two-way discussion: more abstract, opinion-led questions that
//     thematically extend a Part 2 topic (traditions & taking part, technology &
//     everyday life, wildlife & the natural world, achievement & success).
//
// Topics here are deliberately distinct from the base cues and Sets 2-7 (which
// already cover home/area, daily routine, food, weather, transport, hometown,
// music, weekends, technology, shopping, books/reading, sport, sleep, clothes,
// the internet, festivals, animals/pets, neighbours, languages, phones and
// workspaces, plus cue cards on a skill, journey, useful website/app, person
// admired, photograph, outdoor place, inspiring person, place to visit, talent,
// exciting event, important decision, hobby, helping someone, a book, a gift, a
// relaxing place, advice, an older person, a goal, a national tradition, a
// useful object, a piece of news, a building and a memorable meal). Set 9
// instead covers childhood, the sea & water, indoor hobbies and special days &
// personal celebrations (distinct from public festivals), plus cue cards on a
// tradition you personally enjoy joining in with, a piece of technology you find
// useful, a wild animal you find interesting and an achievement you are proud of.
//
// All prompts are original and written for this app - they do not reproduce any
// official or third-party IELTS question bank. ids use the `sp-009-` prefix so
// the coordinator can merge this set without colliding with the other cues.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_SET_9: SpeakingCue[] = [
  // ─── Part 1 - Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp-009-p1-childhood',
    part: 'speaking-part-1',
    title: 'Part 1 · Childhood',
    prompts: [
      'What sort of games did you enjoy playing when you were a child?',
      'Did you grow up in a city, a town or somewhere more rural?',
      'Who did you spend the most time with when you were little?',
      'Is there a place from your childhood that you still remember fondly?',
      'Do you think children today have a very different childhood from the one you had?',
      'What is one thing from your childhood that you wish you could do again?',
    ],
  },
  {
    id: 'sp-009-p1-sea-and-water',
    part: 'speaking-part-1',
    title: 'Part 1 · The sea and water',
    prompts: [
      'Do you live anywhere near the sea or a large lake?',
      'How do you feel when you are close to the ocean or a river?',
      'Did you go swimming much when you were younger?',
      'Do you enjoy activities on the water, such as boating or paddling?',
      'How often do you visit the coast or a beach these days?',
      'Would you like to live by the sea one day? Why or why not?',
    ],
  },
  {
    id: 'sp-009-p1-indoor-hobbies',
    part: 'speaking-part-1',
    title: 'Part 1 · Indoor hobbies',
    prompts: [
      'What do you like to do indoors when you have some spare time?',
      'Do you have an indoor hobby that you do on your own?',
      'Are there any indoor activities you tend to do with other people?',
      'Do you prefer hobbies you can do at home or ones that get you out of the house?',
      'Has the weather ever pushed you to take up something you can do indoors?',
    ],
  },
  {
    id: 'sp-009-p1-special-days',
    part: 'speaking-part-1',
    title: 'Part 1 · Special days and personal celebrations',
    prompts: [
      'How do you usually celebrate your own birthday?',
      'Is there a particular day in the year that is special just for you or your family?',
      'Do you prefer a big gathering or a quiet day when you have something to celebrate?',
      'How did your family mark special occasions when you were growing up?',
      'Do you think people make enough of a fuss over personal milestones these days?',
      'What would your ideal way of marking a special day be?',
    ],
  },

  // ─── Part 2 - Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp-009-p2-tradition-you-enjoy',
    part: 'speaking-part-2',
    title: 'Part 2 · A tradition you enjoy taking part in',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a tradition that you personally enjoy taking part in.',
      'You should say:',
      'what the tradition is and how often it happens',
      'who you usually take part in it with',
      'what exactly you do when you join in',
      'and explain why you enjoy being part of this tradition.',
    ],
  },
  {
    id: 'sp-009-p2-useful-technology',
    part: 'speaking-part-2',
    title: 'Part 2 · A piece of technology you find useful',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a piece of technology that you find especially useful.',
      'You should say:',
      'what the piece of technology is and when you started using it',
      'how you learned to use it',
      'what tasks it helps you with day to day',
      'and explain why you find this piece of technology so useful.',
    ],
  },
  {
    id: 'sp-009-p2-wild-animal',
    part: 'speaking-part-2',
    title: 'Part 2 · A wild animal you find interesting',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a wild animal that you find interesting.',
      'You should say:',
      'what the animal is and where it lives',
      'how you first learned about it',
      'what it looks like and how it behaves',
      'and explain why you find this animal so interesting.',
    ],
  },
  {
    id: 'sp-009-p2-proud-achievement',
    part: 'speaking-part-2',
    title: 'Part 2 · An achievement you are proud of',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe an achievement of yours that you feel proud of.',
      'You should say:',
      'what you achieved and when it happened',
      'how much effort it took you',
      'who helped or supported you along the way',
      'and explain why you feel so proud of this achievement.',
    ],
  },

  // ─── Part 3 - Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp-009-p3-taking-part-traditions',
    part: 'speaking-part-3',
    title: 'Part 3 · Taking part in traditions',
    prompts: [
      'Why do you think people enjoy joining in with shared traditions?',
      'Do you think it is important for families to keep their own little traditions going?',
      'Are people today more or less likely to take part in traditional activities than in the past?',
      'How do traditions help to bring a community closer together?',
      'Do you think new traditions can be created, or do they have to be very old to matter?',
      'What might be lost if people stopped taking part in traditions altogether?',
    ],
  },
  {
    id: 'sp-009-p3-technology-everyday-life',
    part: 'speaking-part-3',
    title: 'Part 3 · Technology and everyday life',
    prompts: [
      'Why do you think some pieces of technology become part of daily life so quickly?',
      'Do you think it is harder for older people to keep up with new technology? Why?',
      'In what ways can technology actually save people time at home?',
      'Are there any everyday tasks that you think should not be handed over to machines?',
      'Do you think people would cope well if a common piece of technology suddenly stopped working?',
      'How do you think the technology we use at home will change in the coming years?',
    ],
  },
  {
    id: 'sp-009-p3-wildlife-natural-world',
    part: 'speaking-part-3',
    title: 'Part 3 · Wildlife and the natural world',
    prompts: [
      'Why do you think so many people are fascinated by wild animals?',
      'How important is it to protect animals that are in danger of dying out?',
      'Do you think zoos and wildlife parks do more good than harm?',
      'In what ways can ordinary people help to look after wildlife where they live?',
      'Should children learn more about wild animals at school? Why or why not?',
      'Do you think humans and wild animals can share the same spaces successfully?',
    ],
  },
  {
    id: 'sp-009-p3-achievement-success',
    part: 'speaking-part-3',
    title: 'Part 3 · Achievement and success',
    prompts: [
      'How do you think most people define success in life?',
      'Do you think success is mainly down to hard work or to luck? Why?',
      'Is it healthy for people to compare their achievements with those of others?',
      'Should children be praised for trying hard even when they do not succeed?',
      'Do you think society values the right kinds of achievement? Why or why not?',
      'How do you think people’s idea of success changes as they get older?',
    ],
  },
]

/** Find a Set 9 cue by id (used when restoring a chosen prompt from this set). */
export function findSet9Cue(id: string): SpeakingCue | undefined {
  return SPEAKING_SET_9.find((cue) => cue.id === id)
}
