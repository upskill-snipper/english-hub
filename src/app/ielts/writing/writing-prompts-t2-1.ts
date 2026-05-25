// ─── IELTS Academic Writing prompts · Task 2 set T2-1 ───────────────────────
// A dedicated bank of EIGHT Academic Writing Task 2 questions (argument /
// opinion essays). Task 2 carries no visual, so none of these prompts define a
// `chart`, `imageSrc` or `imageAlt` field - the writing page renders the
// question text from `prompt` alone.
//
// The eight cover the full range of Task 2 question formats (at least one of
// each): opinion (agree/disagree), discussion (both views + opinion), problem
// & solution / causes & solutions, two-part / direct question, and advantages
// & disadvantages. Topics are deliberately spread across education, the
// environment, technology, work, health, society, globalisation and
// media/culture, and are distinct from the Wave 1-3 banks so this set
// complements rather than duplicates them.
//
// Each prompt follows the house style of `writing-prompts.ts`: a statement or
// scenario, the task instruction, the standard "Give reasons…" line, then
// "Write at least 250 words.", assembled with `[...lines].join('\n')` using
// blank-line separators.
//
// All content is original, English only, and written for IELTS preparation
// (Academic track). Stable ids are namespaced 'wt2s1-…'.
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_T2_1: WritingPrompt[] = [
  // ── 1 · Opinion (agree/disagree) · work / technology ─────────────────────
  {
    id: 'wt2s1-workplace-automation',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Automation and the future of jobs',
    prompt: [
      'As machines and computer programs become capable of performing more tasks, some people argue that workers should be retrained for new kinds of jobs rather than protected from losing their existing ones.',
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

  // ── 2 · Discussion (both views + opinion) · globalisation / culture ──────
  {
    id: 'wt2s1-global-culture',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Global brands and local cultures',
    prompt: [
      'Some people believe that the spread of international companies and products around the world enriches local cultures, while others feel that it makes different countries increasingly similar to one another.',
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

  // ── 3 · Problem & solution (causes & solutions) · health ─────────────────
  {
    id: 'wt2s1-sedentary-lifestyle',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Increasingly inactive lifestyles',
    prompt: [
      'In many countries, people now spend far less time being physically active than they did in the past, and rates of related health problems are rising.',
      '',
      'What are the main causes of this trend, and what could be done to encourage people to be more active?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 4 · Two-part / direct question · media / culture ─────────────────────
  {
    id: 'wt2s1-reading-decline',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Reading books for pleasure',
    prompt: [
      'Although more written material is available than ever before, many people, particularly young adults, now read fewer books for pleasure than in the past.',
      '',
      'Why might this be happening? What can be done to encourage people to read more books for enjoyment?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 5 · Advantages & disadvantages · education ───────────────────────────
  {
    id: 'wt2s1-online-degrees',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Studying for a degree online',
    prompt: [
      'A growing number of universities now allow students to complete entire degree courses online, without ever attending a campus in person.',
      '',
      'Do the advantages of studying for a degree online outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 6 · Opinion (agree/disagree) · environment ───────────────────────────
  {
    id: 'wt2s1-climate-responsibility',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Who should tackle climate change',
    prompt: [
      'Some people claim that protecting the environment is mainly the responsibility of large companies and governments, and that the choices made by ordinary individuals make little difference.',
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

  // ── 7 · Discussion (both views + opinion) · society / science ────────────
  {
    id: 'wt2s1-space-spending',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Spending money on space exploration',
    prompt: [
      'Some people think that governments should invest large sums of money in exploring outer space, while others argue that this money would be better spent solving problems here on Earth.',
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

  // ── 8 · Problem & solution (causes & solutions) · society / globalisation ─
  {
    id: 'wt2s1-rural-decline',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Young people leaving rural areas',
    prompt: [
      'In many parts of the world, large numbers of young people are leaving the countryside to live and work in big cities, and some rural communities are shrinking as a result.',
      '',
      'What are the reasons for this movement, and what measures could be taken to keep rural areas attractive to young people?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
