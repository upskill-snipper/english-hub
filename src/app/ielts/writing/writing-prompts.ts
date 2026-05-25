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
      'The bar chart below shows the average monthly amount (in US dollars) spent on online grocery shopping per household in four cities in 2015, 2019 and 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: 'US$',
      yAxisLabel: 'US$ per month',
      caption: 'Average monthly online grocery spend per household (US$).',
      categories: ['Lakeford', 'Brackton', 'Vellmore', 'Northhaven'],
      series: [
        { name: '2015', values: [18, 22, 9, 31] },
        { name: '2019', values: [45, 40, 30, 35] },
        { name: '2023', values: [96, 61, 88, 42] },
      ],
    },
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
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'process',
      caption: 'How waste paper is recycled into new paper products.',
      steps: [
        {
          label: 'Collection',
          detail: 'Used paper is collected from homes and offices and taken to a recycling plant.',
        },
        {
          label: 'Sorting',
          detail:
            'Paper is sorted by hand and machine to remove unsuitable material such as plastic.',
        },
        {
          label: 'Pulping',
          detail:
            'Sorted paper is mixed with warm water and chemicals in a tank to form a soft pulp.',
        },
        {
          label: 'De-inking',
          detail:
            'The pulp passes through screens and a de-inking stage; ink and glue are filtered out.',
        },
        {
          label: 'Pressing & drying',
          detail: 'Cleaned pulp is pressed and dried on heated rollers into long sheets of paper.',
        },
        {
          label: 'Finishing',
          detail:
            'New paper is cut, rolled and sent to manufacturers; cleaning waste goes to landfill.',
        },
      ],
    },
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
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: 'thousands',
      yAxisLabel: 'Visitors (000s)',
      caption: 'Visitor numbers (thousands) to a national museum, by quarter.',
      categories: ['Q1 (Jan–Mar)', 'Q2 (Apr–Jun)', 'Q3 (Jul–Sep)', 'Q4 (Oct–Dec)'],
      series: [
        { name: '2018', values: [120, 180, 260, 150] },
        { name: '2023', values: [95, 210, 340, 170] },
      ],
    },
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
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'pie',
      unit: '%',
      caption: 'Share of total household energy use (%), 1990 vs 2020.',
      datasets: [
        {
          name: '1990',
          slices: [
            { label: 'Heating', value: 62 },
            { label: 'Water heating', value: 17 },
            { label: 'Lighting', value: 9 },
            { label: 'Appliances & electronics', value: 8 },
            { label: 'Cooking', value: 4 },
          ],
        },
        {
          name: '2020',
          slices: [
            { label: 'Heating', value: 48 },
            { label: 'Water heating', value: 15 },
            { label: 'Lighting', value: 5 },
            { label: 'Appliances & electronics', value: 26 },
            { label: 'Cooking', value: 6 },
          ],
        },
      ],
    },
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
