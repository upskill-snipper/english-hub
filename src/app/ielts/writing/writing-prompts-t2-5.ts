// ─── IELTS Academic Writing prompts · Task 2 set T2-5 ───────────────────────
// A fifth dedicated bank of SIX Academic Writing Task 2 questions (argument /
// opinion essays). As with every Task 2 prompt, none carries a visual, so no
// prompt defines a `chart`, `imageSrc` or `imageAlt` field - the writing page
// renders the question text from `prompt` alone.
//
// The six deliberately vary the task instruction across the common Task 2
// formats: discussion (both views + opinion), opinion (agree/disagree),
// problem & solution / causes & solutions, and advantages & disadvantages.
// Topics are fresh and distinct from sets T2-1…T2-4 and the Wave 1-3 banks -
// learning a second language at primary school, responsibility for tackling
// climate change, whether social media connects or isolates people, taxing
// unhealthy food, salary versus job satisfaction when choosing a career, and
// the impact of international tourism on local cultures - so this set
// complements rather than duplicates the existing item bank.
//
// Each prompt follows the house style of `writing-prompts.ts`: a statement or
// scenario, the task instruction, the standard "Give reasons…" line, then
// "Write at least 250 words.", assembled with `[...lines].join('\n')` using
// blank-line separators.
//
// All content is original, English only, and written for IELTS preparation
// (Academic track). Stable ids are namespaced 'wt2-t5-…'.
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_T2_5: WritingPrompt[] = [
  // ── 1 · Discussion (both views + opinion) · education ────────────────────
  {
    id: 'wt2-t5-second-language',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Learning a second language at primary school',
    prompt: [
      'In some countries, children begin studying a foreign language in their first years of primary school, while others believe that languages should only be introduced once pupils are older.',
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

  // ── 2 · Opinion (agree/disagree) · environment ───────────────────────────
  {
    id: 'wt2-t5-climate-responsibility',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Who should tackle climate change',
    prompt: [
      'Some people argue that responsibility for tackling climate change lies mainly with individuals changing their daily habits, while others insist that only governments have the power to make a real difference.',
      '',
      'To what extent do you agree or disagree that ordinary individuals, rather than governments, are mainly responsible for addressing climate change?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 3 · Discussion (both views + opinion) · technology / society ─────────
  {
    id: 'wt2-t5-social-media',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Does social media connect or isolate us',
    prompt: [
      'Some people believe that social media brings people closer together by helping them stay in touch, while others feel that it actually leaves individuals more isolated than before.',
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

  // ── 4 · Problem: causes & solution · health / society ────────────────────
  {
    id: 'wt2-t5-junk-food-tax',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Taxing unhealthy food',
    prompt: [
      'As rates of obesity and diet-related illness rise, some governments have introduced, or are considering, higher taxes on unhealthy food and sugary drinks in order to improve public health.',
      '',
      'What are the causes of poor diets, and would taxing unhealthy food be an effective solution to this problem?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 5 · Discussion (both views + opinion) · work / careers ───────────────
  {
    id: 'wt2-t5-salary-satisfaction',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Salary or job satisfaction',
    prompt: [
      'When choosing a career, some people consider a high salary to be the most important factor, whereas others believe that enjoying the work and finding it satisfying matters far more.',
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

  // ── 6 · Advantages & disadvantages · culture / globalisation ─────────────
  {
    id: 'wt2-t5-tourism-culture',
    task: 'writing-task-2',
    track: 'academic',
    title: 'International tourism and local cultures',
    prompt: [
      'The number of people travelling abroad as tourists has grown rapidly in recent decades, bringing large numbers of visitors to towns and regions that were once rarely visited.',
      '',
      'Do the advantages of this growth in international tourism for local cultures outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
