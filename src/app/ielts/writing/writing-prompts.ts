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

export const WRITING_PROMPTS: WritingPrompt[] = [
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
]
