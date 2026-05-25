// ─── IELTS Academic Writing prompts · Task 2 set T2-4 ───────────────────────
// A fourth dedicated bank of EIGHT Academic Writing Task 2 questions (argument /
// opinion essays). As with every Task 2 prompt, none carries a visual, so no
// prompt defines a `chart`, `imageSrc` or `imageAlt` field - the writing page
// renders the question text from `prompt` alone.
//
// The eight cover the full range of Task 2 question formats (at least one of
// each): opinion (agree/disagree), discussion (both views + opinion), problem
// & solution / causes & solutions, two-part / direct question, and advantages
// & disadvantages. Topics are deliberately fresh and distinct from sets T2-1,
// T2-2 and T2-3 and the Wave 1-3 banks - funding space versus ocean research,
// children owning smartphones, the decline of local shops, museums charging
// entry fees, competitive versus non-competitive school sport, public funding
// of the arts, the effect of tourism on local cultures, and the four-day
// working week - so this set complements rather than duplicates the existing
// item bank.
//
// Each prompt follows the house style of `writing-prompts.ts`: a statement or
// scenario, the task instruction, the standard "Give reasons…" line, then
// "Write at least 250 words.", assembled with `[...lines].join('\n')` using
// blank-line separators.
//
// All content is original, English only, and written for IELTS preparation
// (Academic track). Stable ids are namespaced 'wt2s4-…'.
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_T2_4: WritingPrompt[] = [
  // ── 1 · Discussion (both views + opinion) · science / public spending ─────
  {
    id: 'wt2s4-space-versus-ocean',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Funding space research or ocean research',
    prompt: [
      'When deciding how to spend limited research budgets, some people believe that exploring outer space should be the priority, while others argue that studying the largely unknown depths of the oceans would bring greater benefits.',
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

  // ── 2 · Opinion (agree/disagree) · technology / childhood ────────────────
  {
    id: 'wt2s4-children-smartphones',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Should children own smartphones',
    prompt: [
      'These days many children own a smartphone from a young age. Some people argue that children should not be allowed to have their own smartphone until they reach their teenage years.',
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

  // ── 3 · Problem: causes & solutions · economy / community ────────────────
  {
    id: 'wt2s4-local-shops-decline',
    task: 'writing-task-2',
    track: 'academic',
    title: 'The disappearance of local shops',
    prompt: [
      'In many towns, small independent shops are closing down as people increasingly buy goods from large supermarkets and online retailers.',
      '',
      'What are the main causes of this trend, and what could be done to help local shops survive?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 4 · Opinion (agree/disagree) · culture / public access ───────────────
  {
    id: 'wt2s4-museum-entry-fees',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Charging visitors to enter museums',
    prompt: [
      'Some people believe that museums and art galleries should charge an entry fee in order to fund themselves, while others think that admission should always be free to everyone.',
      '',
      'To what extent do you agree or disagree that museums should be free to enter?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 5 · Discussion (both views + opinion) · education / sport ────────────
  {
    id: 'wt2s4-competitive-school-sport',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Competitive sport in schools',
    prompt: [
      'In school physical education, some people think that competitive sports, in which there are clear winners and losers, are the most valuable, while others believe that non-competitive activities focused on participation and fitness are better for children.',
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

  // ── 6 · Two-part / direct question · arts / public spending ──────────────
  {
    id: 'wt2s4-funding-the-arts',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Government funding for the arts',
    prompt: [
      'In times of tight budgets, governments often have to decide whether to use public money to support activities such as music, theatre and painting.',
      '',
      'Why might a government choose to fund the arts? Do you think this is a good use of public money?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 7 · Advantages & disadvantages · tourism / culture ───────────────────
  {
    id: 'wt2s4-tourism-local-cultures',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Tourism and local cultures',
    prompt: [
      'As travel becomes cheaper and easier, growing numbers of tourists are visiting traditional communities and once-remote places around the world.',
      '',
      'Do the advantages of tourism for local cultures outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 8 · Two-part / direct question · work / society ──────────────────────
  {
    id: 'wt2s4-four-day-week',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Moving to a four-day working week',
    prompt: [
      'Some companies and governments are considering reducing the standard working week from five days to four, without cutting workers’ pay.',
      '',
      'What might be the reasons for introducing a four-day working week? Do you think it would be a positive development?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
