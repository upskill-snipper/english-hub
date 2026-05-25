// ─── IELTS Academic Writing prompts ─────────────────────────────────────────
// Wave 1 prompt bank for the AI-marked Writing module: two Task 1 questions
// (Academic — describe/summarise a visual) and two Task 2 questions
// (argument / opinion essays).
//
// Because no chart/graph image assets exist yet, each Task 1 prompt embeds the
// underlying data as a clearly-laid-out textual description INSIDE `prompt`, so
// the candidate has everything needed to write 150 words without an image.
// `imageSrc` is therefore left undefined; the writing page renders the textual
// data block from `prompt`. When real chart assets land, add `imageSrc` /
// `imageAlt` here without touching any other file.
//
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'
// Additional Academic writing prompts (item-bank scaling, 2026-05-25).
import { WRITING_SET_2 } from './writing-prompts-set-2'
import { WRITING_SET_3 } from './writing-prompts-set-3'
// General Training writing prompts (track: 'general') — Task 1 are letters.
// Filtered by the writing page via the TrackToggle so the bank is one array.
import { GT_WRITING_SET } from './gt-writing-prompts'

export const WRITING_PROMPTS: WritingPrompt[] = [
  ...WRITING_SET_2,
  ...WRITING_SET_3,
  // ── Task 1 · A — table of data (comparison + trend) ──────────────────────
  {
    id: 'wt1-online-grocery',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Online grocery spending in four cities',
    prompt: [
      'The table below shows the average monthly amount (in US dollars) spent on online grocery shopping per household in four cities in 2015, 2019 and 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Data (average monthly online grocery spend per household, US$):',
      '• Lakeford — 2015: 18; 2019: 45; 2023: 96',
      '• Brackton — 2015: 22; 2019: 40; 2023: 61',
      '• Vellmore — 2015: 9; 2019: 30; 2023: 88',
      '• Northhaven — 2015: 31; 2019: 35; 2023: 42',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · B — process diagram (described in words) ────────────────────
  {
    id: 'wt1-paper-recycling',
    task: 'writing-task-1',
    track: 'academic',
    title: 'The process of recycling waste paper',
    prompt: [
      'The diagram below illustrates how waste paper is recycled into new paper products.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Process stages (described in sequence, as shown on the diagram):',
      '1. Used paper is collected from homes and offices and taken to a recycling plant.',
      '2. The collected paper is sorted by hand and machine to remove unsuitable material such as plastic.',
      '3. The sorted paper is mixed with warm water and chemicals in a large tank to break it down into a soft pulp.',
      '4. The pulp is passed through screens and a de-inking stage, where ink and glue are filtered out.',
      '5. The cleaned pulp is pressed and dried on heated rollers to form long sheets of new paper.',
      '6. The new paper is cut, rolled and sent to manufacturers, while waste removed during cleaning is sent to landfill.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 2 · A — opinion (agree/disagree) ────────────────────────────────
  {
    id: 'wt2-remote-work',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Working from home',
    prompt: [
      'Some people believe that allowing employees to work from home is better for both businesses and workers, while others think it does more harm than good.',
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

  // ── Task 2 · B — problem / solution + opinion ────────────────────────────
  {
    id: 'wt2-single-use-plastic',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Reducing single-use plastic',
    prompt: [
      'Despite growing awareness of environmental damage, the amount of single-use plastic that people throw away each year continues to rise.',
      '',
      'What are the main causes of this problem, and what measures could governments and individuals take to address it?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 1 · C — line graph (trend over time, described in words) ─────────
  {
    id: 'wt1-museum-visitors',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Visitor numbers at a national museum',
    prompt: [
      'The line graph below shows the number of visitors (in thousands) to a national museum across four quarters of the year, comparing 2018 with 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Data (visitor numbers in thousands, by quarter):',
      '• Quarter 1 (Jan–Mar) — 2018: 120; 2023: 95',
      '• Quarter 2 (Apr–Jun) — 2018: 180; 2023: 210',
      '• Quarter 3 (Jul–Sep) — 2018: 260; 2023: 340',
      '• Quarter 4 (Oct–Dec) — 2018: 150; 2023: 170',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · D — two pie charts (proportions, compared) ──────────────────
  {
    id: 'wt1-household-energy',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How households use energy',
    prompt: [
      'The two pie charts below show how an average household in one country used its energy in 1990 and in 2020.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Data (percentage of total household energy use):',
      '1990 — Heating: 62%; Water heating: 17%; Lighting: 9%; Appliances and electronics: 8%; Cooking: 4%',
      '2020 — Heating: 48%; Water heating: 15%; Lighting: 5%; Appliances and electronics: 26%; Cooking: 6%',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 2 · C — discuss both views + opinion ────────────────────────────
  {
    id: 'wt2-university-free',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Free university education',
    prompt: [
      'Some people think that university education should be free for all students, while others argue that students should pay at least part of the cost themselves.',
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

  // ── Task 2 · D — advantages / disadvantages ──────────────────────────────
  {
    id: 'wt2-living-abroad',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Living and working in another country',
    prompt: [
      'An increasing number of people choose to live and work in a country that is not their own.',
      '',
      'Do the advantages of moving to another country outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── General Training prompts (track: 'general'; Task 1 = letters) ─────────
  ...GT_WRITING_SET,
]
