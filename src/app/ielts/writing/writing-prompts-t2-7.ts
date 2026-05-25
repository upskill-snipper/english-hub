// ─── IELTS Academic Writing prompts · Task 2 set T2-7 ───────────────────────
// A seventh dedicated bank of SIX Academic Writing Task 2 questions (argument /
// opinion essays). As with every Task 2 prompt, none carries a visual, so no
// prompt defines a `chart`, `imageSrc` or `imageAlt` field — the writing page
// renders the question text from `prompt` alone.
//
// The six deliberately mix the Task 2 question formats rather than repeating
// one: discussion (both views + opinion) for arts funding and a fixed
// retirement age, advantages & disadvantages for keeping animals in zoos,
// opinion (to what extent agree/disagree) for final exams as assessment and
// for teaching money management in schools, and problem & solution for limiting
// visitor numbers to fragile historic sites. Topics are fresh and distinct from
// sets T2-1, T2-2 and T2-3 and the Wave 1–3 banks — arts versus public-service
// spending, zoos and animal welfare, exam-based assessment, retirement age,
// heritage tourism, and financial education — so this set complements rather
// than duplicates the existing item bank.
//
// Each prompt follows the house style of `writing-prompts.ts`: a statement or
// scenario, the task instruction, the standard "Give reasons…" line, then
// "Write at least 250 words.", assembled with `[...lines].join('\n')` using
// blank-line separators.
//
// All content is original, English only, and written for IELTS preparation
// (Academic track). Stable ids carry a 't7' marker: 'wt2-t7-…'.
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_T2_7: WritingPrompt[] = [
  // ── 1 · Discussion (both views + opinion) · arts / public spending ───────
  {
    id: 'wt2-t7-arts-funding',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Government funding for the arts',
    prompt: [
      'Some people believe that governments should spend public money on supporting the arts, such as music, theatre and painting, while others argue that this money would be better spent on essential public services like healthcare and transport.',
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

  // ── 2 · Advantages & disadvantages · animals / society ───────────────────
  {
    id: 'wt2-t7-zoos',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Keeping animals in zoos',
    prompt: [
      'Many towns and cities have zoos where wild animals are kept for the public to see, although some people question whether confining animals in this way can be justified.',
      '',
      'Do the advantages of keeping animals in zoos outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 3 · Opinion (agree/disagree) · education / assessment ────────────────
  {
    id: 'wt2-t7-exams-assessment',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Final exams as a measure of ability',
    prompt: [
      'In many education systems, a student’s overall performance is judged mainly by how well they do in final examinations.',
      '',
      'To what extent do you agree or disagree that final exams are the best way to measure a student’s ability?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 4 · Discussion (both views + opinion) · work / society ───────────────
  {
    id: 'wt2-t7-retirement-age',
    task: 'writing-task-2',
    track: 'academic',
    title: 'A fixed retirement age for everyone',
    prompt: [
      'Some people think there should be a fixed age at which everyone must retire from work, while others believe individuals should be allowed to decide for themselves when to stop working.',
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

  // ── 5 · Problem & solution · heritage / tourism ──────────────────────────
  {
    id: 'wt2-t7-heritage-tourism',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Protecting fragile historic sites from tourism',
    prompt: [
      'Many famous historic sites are being damaged by the very large numbers of tourists who visit them each year.',
      '',
      'What problems does this cause, and what measures could be taken to limit visitor numbers and protect these sites?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 6 · Opinion (agree/disagree) · education / personal finance ──────────
  {
    id: 'wt2-t7-financial-education',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Teaching money management in schools',
    prompt: [
      'Some people argue that schools should teach students how to manage their personal finances, including saving, budgeting and avoiding debt, as a regular part of the curriculum.',
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
]
