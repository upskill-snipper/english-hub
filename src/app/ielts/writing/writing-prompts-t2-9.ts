// ─── IELTS Academic Writing prompts · Task 2 set T2-9 ───────────────────────
// A further dedicated bank of SIX Academic Writing Task 2 questions (argument /
// opinion essays). As with every Task 2 prompt, none carries a visual, so no
// prompt defines a `chart`, `imageSrc` or `imageAlt` field - the writing page
// renders the question text from `prompt` alone.
//
// The six deliberately vary the instruction type across the common Task 2
// formats: discussion (both views + opinion), opinion (to what extent agree or
// disagree), and advantages & disadvantages. Topics are fresh and distinct from
// the earlier banks - mixed-ability versus streamed classes, whether recycling
// alone can solve waste, smartphone use by young children, volunteering counting
// towards a school qualification, walking- and cycling-first city design, and
// job security versus career variety - so this set complements rather than
// duplicates the existing item bank.
//
// Each prompt follows the house style of `writing-prompts-t2-3.ts`: a statement
// or scenario, the task instruction, the standard "Give reasons..." line, then
// "Write at least 250 words.", assembled with `[...lines].join('\n')` using
// blank-line separators.
//
// All content is original, English only, and written for IELTS preparation
// (Academic track). Stable ids are namespaced 'wt2-t9-...'.
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_T2_9: WritingPrompt[] = [
  // ── 1 · Discussion (both views + opinion) · education ────────────────────
  {
    id: 'wt2-t9-mixed-ability',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Mixed-ability or streamed classes',
    prompt: [
      'Some people believe that students learn best in mixed-ability classes, where pupils of different levels study together, while others argue that students should be streamed into separate classes according to their ability.',
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

  // ── 2 · Opinion (to what extent agree or disagree) · environment ─────────
  {
    id: 'wt2-t9-recycling',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Recycling and the waste problem',
    prompt: [
      'Many people argue that recycling household rubbish is enough to solve the problem of waste, while others believe that the way goods are produced and packaged must change instead.',
      '',
      'To what extent do you agree or disagree that recycling alone can solve the problem of waste?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 3 · Discussion (both views + opinion) · technology ───────────────────
  {
    id: 'wt2-t9-smartphones-age',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Smartphones and young children',
    prompt: [
      'Some people think that children should not be allowed to own a smartphone until they reach a certain age, while others believe that there should be no such restriction.',
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

  // ── 4 · Advantages & disadvantages · society ─────────────────────────────
  {
    id: 'wt2-t9-volunteering-qualification',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Volunteering as part of a qualification',
    prompt: [
      "In some countries, schools are considering making a period of volunteering, such as helping in the local community, count towards a student's final qualification.",
      '',
      'What are the advantages and disadvantages of requiring volunteering as part of a school qualification?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── 5 · Opinion (to what extent agree or disagree) · health ──────────────
  {
    id: 'wt2-t9-walking-cycling',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Designing cities for walking and cycling',
    prompt: [
      'Some people believe that towns and cities should be designed to prioritise walking and cycling rather than to make travel by car as easy as possible.',
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

  // ── 6 · Discussion (both views + opinion) · work ─────────────────────────
  {
    id: 'wt2-t9-job-security',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Job security or career variety',
    prompt: [
      'Some people feel that having a secure, long-term job is the most important thing in modern working life, while others believe that variety and the chance to change careers matter more.',
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
]
