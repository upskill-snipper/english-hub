// ─── IELTS Academic Writing Task 1 · Chart set 15 ───────────────────────────
// A fifteenth bank of Academic Task 1 prompts, each paired with a REAL chart
// spec (a `WritingChartSpec`, see src/lib/ielts/types.ts) rendered by
// src/app/ielts/writing/_components/WritingChart.tsx - so the candidate sees an
// actual bar / line / pie / table / process visual, the way the exam presents
// it, rather than a textual data dump.
//
// Authoring rules followed throughout (mirroring earlier chart sets and the
// committed worked examples in writing-prompts.ts):
//   • `prompt` is INSTRUCTION ONLY - it names the years, categories and units
//     but never quotes the measured numbers, because the data lives entirely in
//     `chart` (one source of truth).
//   • bar / line - every series.values length === categories.length, and each
//     carries `unit` + `yAxisLabel`;
//   • pie '%' slices sum to ~100 (parts of one whole);
//   • table - every row.cells length === columns.length - 1;
//   • every spec sets a `caption`;
//   • numbers are realistic, internally consistent and tell a clear story
//     (a trend, a comparison, a dominant category) so a 150-word report is
//     achievable.
//
// Five fresh, original topics, deliberately distinct from every existing prompt
// across the whole chart bank:
//   1 average weekly hours spent on hobbies by age group, two years (bar)
//   2 number of museum visitors in three cities over several years (line)
//   3 percentage of adults using selected payment methods, four countries (table)
//   4 how a typical household uses its water, in two countries (two pies)
//   5 how table salt is produced from seawater (linear process)
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_CHARTS_15: WritingPrompt[] = [
  // ── 1 · bar (hours on hobbies by age group, two years - comparison) ───────
  {
    id: 'wt1-c15-hobbies',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average weekly hours spent on hobbies by age group',
    prompt: [
      'The bar chart below shows the average number of hours per week that people in four age groups spent on hobbies in one country in 2010 and in 2020.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: 'hours',
      yAxisLabel: 'Hours per week',
      caption: 'Average weekly hours spent on hobbies by age group, 2010 vs 2020.',
      categories: ['15 to 24', '25 to 44', '45 to 64', '65 and over'],
      series: [
        { name: '2010', values: [9.5, 6.2, 7.8, 12.4] },
        { name: '2020', values: [11.8, 5.4, 8.6, 15.1] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 2 · multi-series line (museum visitors in three cities over time) ─────
  {
    id: 'wt1-c15-museum-visitors',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Number of museum visitors in three cities',
    prompt: [
      'The line graph below shows the number of visitors, in millions, to the main museum in each of three cities between 2000 and 2020.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: 'millions',
      yAxisLabel: 'Visitors (millions)',
      caption: 'Annual museum visitors by city (millions), 2000-2020.',
      categories: ['2000', '2005', '2010', '2015', '2020'],
      series: [
        { name: 'Paris', values: [4.8, 5.6, 6.9, 7.4, 5.1] },
        { name: 'London', values: [3.9, 4.5, 5.8, 6.7, 4.6] },
        { name: 'Berlin', values: [1.7, 2.3, 3.1, 3.8, 2.9] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 3 · table (country × share of adults using each payment method) ───────
  {
    id: 'wt1-c15-payment-methods',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Adults using selected payment methods in four countries',
    prompt: [
      'The table below shows the percentage of adults who used each of four payment methods at least once a week in four countries in 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'table',
      unit: '%',
      caption: 'Share of adults using each payment method at least weekly (%), by country, 2023.',
      columns: ['Country', 'Cash', 'Debit or credit card', 'Mobile app', 'Bank transfer'],
      rows: [
        { label: 'Sweden', cells: [12, 78, 64, 41] },
        { label: 'Germany', cells: [55, 61, 33, 38] },
        { label: 'India', cells: [68, 29, 57, 22] },
        { label: 'Brazil', cells: [49, 52, 46, 27] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 4 · two pie charts (household water use; each totals 100%) ────────────
  {
    id: 'wt1-c15-water-use',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How a typical household uses its water in two countries',
    prompt: [
      'The two pie charts below show how the water used by a typical household was divided between five uses in Australia and in Brazil in 2022.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'pie',
      unit: '%',
      caption: 'Share of household water use by activity (%), Australia vs Brazil, 2022.',
      datasets: [
        {
          name: 'Australia',
          slices: [
            { label: 'Garden', value: 35 },
            { label: 'Bathroom', value: 26 },
            { label: 'Toilet', value: 16 },
            { label: 'Laundry', value: 15 },
            { label: 'Kitchen', value: 8 },
          ],
        },
        {
          name: 'Brazil',
          slices: [
            { label: 'Garden', value: 14 },
            { label: 'Bathroom', value: 34 },
            { label: 'Toilet', value: 21 },
            { label: 'Laundry', value: 19 },
            { label: 'Kitchen', value: 12 },
          ],
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 5 · process · LINEAR (how table salt is produced from seawater) ───────
  {
    id: 'wt1-c15-salt-production',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How table salt is produced from seawater',
    prompt: [
      'The diagram below shows the stages involved in producing table salt from seawater.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'process',
      caption: 'The stages by which seawater is turned into packaged table salt.',
      steps: [
        {
          label: 'Intake',
          detail:
            'Seawater is drawn from the coast along channels and pumped into a series of large, shallow ponds.',
        },
        {
          label: 'Evaporation',
          detail:
            'The water sits in the ponds under the sun and wind for several weeks, during which much of it evaporates and the brine grows steadily saltier.',
        },
        {
          label: 'Crystallisation',
          detail:
            'The concentrated brine is moved into smaller crystallising beds, where the remaining water evaporates and the salt forms a thick crust of crystals.',
        },
        {
          label: 'Harvesting',
          detail:
            'The crust of crystals is scraped up by machine and gathered into heaps at the edge of the beds.',
        },
        {
          label: 'Washing & drying',
          detail:
            'The harvested salt is washed with clean brine to remove impurities, then dried in hot air until no moisture remains.',
        },
        {
          label: 'Grinding & packing',
          detail:
            'The dry salt is ground into fine grains, then weighed and sealed into boxes and bags ready for sale.',
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },
]
