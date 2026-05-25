// ─── IELTS Academic Writing prompts · Task 2 set T2-6 ───────────────────────
// A sixth dedicated bank of SIX Academic Writing Task 2 questions (argument /
// opinion essays). As with every Task 2 prompt, none carries a visual, so no
// prompt defines a `chart`, `imageSrc` or `imageAlt` field — the writing page
// renders the question text from `prompt` alone.
//
// The six deliberately vary the question format across the set rather than
// repeating one type: discussion (both views + opinion) for crime and for
// work–life balance and for television; problem & solution for an ageing
// population; opinion (agree/disagree) for advertising; and advantages &
// disadvantages for space exploration. Topics — prison versus rehabilitation,
// the challenges of an ageing population, the influence of advertising, whether
// long hours signal dedication or poor planning, public spending on space, and
// whether television educates or entertains — are kept distinct from the other
// Task 2 banks so this set complements rather than duplicates them.
//
// Each prompt follows the house style of `writing-prompts.ts`: a statement or
// scenario, the task instruction, the standard "Give reasons…" line, then
// "Write at least 250 words.", assembled with `[...lines].join('\n')` using
// blank-line separators.
//
// All content is original, English only, and written for IELTS preparation
// (Academic track). Stable ids are namespaced 'wt2-t6-…'.
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_T2_6: WritingPrompt[] = [
  // ── 1 · Discussion (both views + opinion) · crime / justice ──────────────
  {
    id: 'wt2-t6-crime-rehab',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Prison or rehabilitation to reduce crime',
    prompt: [
      'Some people believe that sending offenders to prison is the most effective way to reduce crime, while others argue that education and rehabilitation programmes do more to prevent people from offending again.',
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

  // ── 2 · Problem & solution · society / demographics ──────────────────────
  {
    id: 'wt2-t6-ageing-population',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Responding to an ageing population',
    prompt: [
      'In many countries the proportion of older people is rising steadily, while the number of younger working-age people is falling.',
      '',
      'What problems does an ageing population create, and how could society respond to them?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 3 · Opinion (agree/disagree) · advertising / consumerism ─────────────
  {
    id: 'wt2-t6-advertising-influence',
    task: 'writing-task-2',
    track: 'academic',
    title: 'The influence of advertising on buying',
    prompt: [
      'Advertising now appears almost everywhere, and some people feel it has too much influence over what ordinary consumers choose to buy.',
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

  // ── 4 · Discussion (both views + opinion) · work / lifestyle ─────────────
  {
    id: 'wt2-t6-work-hours',
    task: 'writing-task-2',
    track: 'academic',
    title: 'What long working hours really show',
    prompt: [
      'When employees regularly work very long hours, some people see this as a sign of strong dedication, while others believe it simply reflects poor planning and inefficient working.',
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

  // ── 5 · Advantages & disadvantages · science / public spending ───────────
  {
    id: 'wt2-t6-space-exploration',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Spending public money on space exploration',
    prompt: [
      'Governments spend large sums of money on exploring space, even though many serious problems, such as poverty and disease, remain unsolved here on Earth.',
      '',
      'Do the advantages of government spending on space exploration outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 6 · Discussion (both views + opinion) · media / television ───────────
  {
    id: 'wt2-t6-tv-educate-entertain',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Does television educate or entertain',
    prompt: [
      'Some people argue that the main purpose of television is to educate its viewers, while others believe that it exists mainly to entertain them.',
      '',
      'Discuss both views, give your own opinion, and say whether the difference matters.',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
