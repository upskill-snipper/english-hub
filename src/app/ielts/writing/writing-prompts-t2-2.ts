// ─── IELTS Academic Writing prompts · Task 2 set T2-2 ───────────────────────
// A second dedicated bank of EIGHT Academic Writing Task 2 questions (argument /
// opinion essays). As with every Task 2 prompt, none carries a visual, so no
// prompt defines a `chart`, `imageSrc` or `imageAlt` field — the writing page
// renders the question text from `prompt` alone.
//
// The eight cover the full range of Task 2 question formats (at least one of
// each): opinion (agree/disagree), discussion (both views + opinion), problem
// & solution / causes & solutions, two-part / direct question, and advantages
// & disadvantages. Topics are deliberately fresh and distinct from set T2-1 and
// the Wave 1–3 banks — advertising to children, arts subjects in school, ageing
// populations, free speech vs online regulation, public vs private transport,
// the role of zoos, mass tourism, and the value of studying history — so this
// set complements rather than duplicates the existing item bank.
//
// Each prompt follows the house style of `writing-prompts.ts`: a statement or
// scenario, the task instruction, the standard "Give reasons…" line, then
// "Write at least 250 words.", assembled with `[...lines].join('\n')` using
// blank-line separators.
//
// All content is original, English only, and written for IELTS preparation
// (Academic track). Stable ids are namespaced 'wt2s2-…'.
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_T2_2: WritingPrompt[] = [
  // ── 1 · Opinion (agree/disagree) · media / society ───────────────────────
  {
    id: 'wt2s2-advertising-children',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Advertising aimed at children',
    prompt: [
      'Companies spend large amounts of money on advertisements that are designed to appeal directly to children. Some people believe that this kind of advertising should be banned completely.',
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

  // ── 2 · Discussion (both views + opinion) · education ────────────────────
  {
    id: 'wt2s2-arts-subjects',
    task: 'writing-task-2',
    track: 'academic',
    title: 'The place of arts subjects in school',
    prompt: [
      'As schools come under pressure to prepare students for the job market, some people argue that subjects such as music, art and drama should be given less time, while others believe these subjects are as important as science and mathematics.',
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

  // ── 3 · Problem: causes & solutions · society / demographics ─────────────
  {
    id: 'wt2s2-ageing-population',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Populations that are growing older',
    prompt: [
      'In many countries the proportion of older people is steadily increasing, placing growing pressure on healthcare systems and pension schemes.',
      '',
      'What problems does an ageing population cause, and what measures could be taken to address them?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 4 · Two-part / direct question · technology / society ────────────────
  {
    id: 'wt2s2-free-speech-online',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Free speech and online content',
    prompt: [
      'Governments and technology companies are increasingly expected to remove harmful or offensive material from the internet, yet many people worry that this threatens freedom of expression.',
      '',
      'Why is regulating online content so difficult? How can the right balance between safety and free speech be achieved?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 5 · Opinion (agree/disagree) · transport / public spending ───────────
  {
    id: 'wt2s2-public-transport-investment',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Investing in public versus private transport',
    prompt: [
      'Some people argue that governments should spend money on improving public transport such as buses and trains, rather than on building and maintaining roads for private cars.',
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

  // ── 6 · Discussion (both views + opinion) · environment / ethics ─────────
  {
    id: 'wt2s2-role-of-zoos',
    task: 'writing-task-2',
    track: 'academic',
    title: 'The role of zoos in modern society',
    prompt: [
      'Some people believe that zoos play an essential role in protecting endangered animals and educating the public, while others feel that keeping wild animals in captivity is cruel and unnecessary.',
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

  // ── 7 · Advantages & disadvantages · globalisation / economy ─────────────
  {
    id: 'wt2s2-mass-tourism',
    task: 'writing-task-2',
    track: 'academic',
    title: 'The growth of mass tourism',
    prompt: [
      'Every year, more and more popular destinations attract very large numbers of tourists, transforming local economies and communities.',
      '',
      'Do the advantages of mass tourism for these destinations outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 8 · Opinion (agree/disagree) · education / culture ───────────────────
  {
    id: 'wt2s2-studying-history',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Why studying history matters',
    prompt: [
      'In an age focused on technology and future progress, some people argue that studying history is a waste of time and that schools should concentrate on more practical subjects.',
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
