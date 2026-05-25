// ─── IELTS Academic Writing prompts · Task 2 set T2-8 ───────────────────────
// An eighth dedicated bank of SIX Academic Writing Task 2 questions (argument /
// opinion essays). As with every Task 2 prompt, none carries a visual, so no
// prompt defines a `chart`, `imageSrc` or `imageAlt` field - the writing page
// renders the question text from `prompt` alone.
//
// The six deliberately mix Task 2 question formats rather than repeating one:
// discussion (both views + opinion) for transport, traditional crafts and
// childhood competition versus cooperation; opinion (agree/disagree) for news
// regulation and compulsory life skills; and advantages & disadvantages for
// developing remote natural areas. Topics - investment in public transport
// versus new roads, stricter regulation of news reporting, preserving
// traditional crafts in a modern economy, whether children gain more from
// competition or cooperation, tourism in wilderness areas, and teaching first
// aid and other practical life skills in school - are chosen to stay distinct
// from earlier sets so this bank complements rather than duplicates them.
//
// Each prompt follows the house style of `writing-prompts.ts`: a statement or
// scenario, the task instruction, the standard "Give reasons…" line, then
// "Write at least 250 words.", assembled with `[...lines].join('\n')` using
// blank-line separators.
//
// All content is original, English only, and written for IELTS preparation
// (Academic track). Stable ids are namespaced 'wt2-t8-…'.
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_T2_8: WritingPrompt[] = [
  // ── 1 · Discussion (both views + opinion) · transport / public spending ──
  {
    id: 'wt2-t8-public-transport',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Public transport versus new roads',
    prompt: [
      'Some people believe that governments should spend more money improving public transport, such as buses and trains, while others argue that building new roads is a better way to ease traffic problems.',
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

  // ── 2 · Opinion (agree/disagree) · media / society ───────────────────────
  {
    id: 'wt2-t8-media-regulation',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Regulating news reporting',
    prompt: [
      'Some people think that the way news organisations report events should be controlled by much stricter rules in order to prevent inaccurate or harmful information from spreading.',
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

  // ── 3 · Discussion (both views + opinion) · heritage / economy ───────────
  {
    id: 'wt2-t8-traditional-crafts',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Preserving traditional crafts and skills',
    prompt: [
      'As economies become more modern and automated, some people argue that traditional crafts and handmade skills are no longer worth preserving, while others believe these skills remain valuable and should be protected.',
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

  // ── 4 · Discussion (both views + opinion) · childhood / education ────────
  {
    id: 'wt2-t8-competition-cooperation',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Competition or cooperation for children',
    prompt: [
      'Some people believe that children learn and develop best through competition with others, while others think that children benefit more from working together cooperatively.',
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

  // ── 5 · Advantages & disadvantages · development / environment ───────────
  {
    id: 'wt2-t8-wilderness-tourism',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Developing remote natural areas for tourism',
    prompt: [
      'In some countries, remote natural areas such as forests, mountains and coastlines are being developed to attract tourists, while others argue that these places should be left untouched.',
      '',
      'Do the advantages of developing such areas for tourism outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 6 · Opinion (agree/disagree) · education / life skills ───────────────
  {
    id: 'wt2-t8-life-skills',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Compulsory practical life skills in school',
    prompt: [
      'Some people argue that practical life skills, such as first aid, should be a compulsory part of the school curriculum for all students.',
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
