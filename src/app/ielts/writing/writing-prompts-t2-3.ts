// ─── IELTS Academic Writing prompts · Task 2 set T2-3 ───────────────────────
// A third dedicated bank of EIGHT Academic Writing Task 2 questions (argument /
// opinion essays). As with every Task 2 prompt, none carries a visual, so no
// prompt defines a `chart`, `imageSrc` or `imageAlt` field - the writing page
// renders the question text from `prompt` alone.
//
// The eight cover the full range of Task 2 question formats (at least one of
// each): opinion (agree/disagree), discussion (both views + opinion), problem
// & solution / causes & solutions, two-part / direct question, and advantages
// & disadvantages. Topics are deliberately fresh and distinct from sets T2-1
// and T2-2 and the Wave 1-3 banks - the influence of social media on
// relationships, taxpayer-funded university tuition, the role of government in
// promoting healthy eating, protecting endangered languages, how remote working
// reshapes city centres, teaching practical skills in school, city versus
// countryside living, and the pay of professional sports stars - so this set
// complements rather than duplicates the existing item bank.
//
// Each prompt follows the house style of `writing-prompts.ts`: a statement or
// scenario, the task instruction, the standard "Give reasons…" line, then
// "Write at least 250 words.", assembled with `[...lines].join('\n')` using
// blank-line separators.
//
// All content is original, English only, and written for IELTS preparation
// (Academic track). Stable ids are namespaced 'wt2s3-…'.
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_T2_3: WritingPrompt[] = [
  // ── 1 · Opinion (agree/disagree) · technology / relationships ────────────
  {
    id: 'wt2s3-social-media-relationships',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Social media and personal relationships',
    prompt: [
      'Some people believe that social media platforms have weakened genuine friendships, because people now spend more time interacting online than meeting face to face.',
      '',
      'To what extent do you agree or disagree?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 2 · Discussion (both views + opinion) · education / public spending ──
  {
    id: 'wt2s3-taxpayer-funded-tuition',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Who should pay for university tuition',
    prompt: [
      'Some people think that university tuition should be funded entirely by the government through taxes, while others argue that those who benefit from a degree should pay for it themselves.',
      '',
      'Discuss both views and give your own opinion.',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 3 · Problem: causes & solutions · health / society ───────────────────
  {
    id: 'wt2s3-government-healthy-eating',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Encouraging people to eat healthily',
    prompt: [
      'In many countries, people are eating increasing amounts of processed and unhealthy food, and diet-related illnesses are becoming more common.',
      '',
      'What are the main causes of this trend, and what could governments do to encourage healthier eating?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 4 · Two-part / direct question · language / culture ──────────────────
  {
    id: 'wt2s3-endangered-languages',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Saving endangered languages',
    prompt: [
      'Across the world, many minority languages are spoken by fewer and fewer people, and some are disappearing completely.',
      '',
      'Why are so many languages dying out? Is it worth spending time and money trying to preserve them?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 5 · Advantages & disadvantages · work / urban life ───────────────────
  {
    id: 'wt2s3-remote-work-cities',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Remote working and city centres',
    prompt: [
      'As more employees work remotely instead of travelling to an office, fewer people spend their days in city centres, and this is changing the businesses and services found there.',
      '',
      'Do the advantages of this shift for cities outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 6 · Opinion (agree/disagree) · education ─────────────────────────────
  {
    id: 'wt2s3-practical-skills-school',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Teaching practical life skills in school',
    prompt: [
      'Some people argue that schools should spend less time on traditional academic subjects and teach more practical skills, such as managing money, cooking and basic repairs, to prepare students for everyday life.',
      '',
      'To what extent do you agree or disagree?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 7 · Discussion (both views + opinion) · society / lifestyle ──────────
  {
    id: 'wt2s3-city-versus-countryside',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Living in a city or in the countryside',
    prompt: [
      'Some people believe that living in a large city offers the best quality of life, while others think that life in the countryside is healthier and more rewarding.',
      '',
      'Discuss both views and give your own opinion.',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 8 · Two-part / direct question · sport / economy ─────────────────────
  {
    id: 'wt2s3-sports-stars-pay',
    task: 'writing-task-2',
    track: 'academic',
    title: 'How much top sports stars are paid',
    prompt: [
      'Professional athletes in popular sports are often paid far more than people in essential jobs such as nursing or teaching.',
      '',
      'Why are top sports stars paid such high salaries? Do you think this situation is fair?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
