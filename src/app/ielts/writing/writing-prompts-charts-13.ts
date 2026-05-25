// ─── IELTS Academic Writing Task 1 · Chart set 13 ───────────────────────────
// A thirteenth bank of five Academic Task 1 prompts, each paired with a REAL
// chart spec (a `WritingChartSpec`, see src/lib/ielts/types.ts) rendered by
// src/app/ielts/writing/_components/WritingChart.tsx - so the candidate sees an
// actual bar / line / pie / table / process visual, the way the exam presents
// it, rather than a textual data dump.
//
// Authoring rules followed throughout (mirroring chart sets 1-9 and the
// committed worked examples in writing-prompts.ts):
//   • `prompt` is INSTRUCTION ONLY - it never quotes the numbers, because the
//     data lives entirely in `chart` (one source of truth). The text may name
//     years, categories and units, but never a measured value.
//   • bar / line - every series.values length === categories.length, and each
//     carries `unit` + `yAxisLabel`;
//   • pie '%' slices sum to ~100 (parts of one whole);
//   • table - every row.cells length === columns.length − 1 (first column is the
//     row header);
//   • every spec sets a `caption`;
//   • numbers are realistic, internally consistent and tell a clear story
//     (a trend, a comparison, a dominant category) so a 150-word report is
//     achievable.
//
// Five fresh, original topics, deliberately distinct from every existing prompt
// across the whole chart bank (sets 1-9 + the worked examples):
//   1 amount of household waste recycled per person in four towns, two years
//     (multi-series bar)
//   2 average daily temperature in two cities across the twelve months
//     (multi-series line)
//   3 doctors and nurses per 1,000 people in five countries (table)
//   4 household spending by category in two different years (two pies)
//   5 how a hydroelectric dam generates electricity (linear process)
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_CHARTS_13: WritingPrompt[] = [
  // ── 1 · bar (recycled waste per person, four towns, two years) ────────────
  {
    id: 'wt1-c13-recycling-towns',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Household waste recycled per person in four towns',
    prompt: [
      'The bar chart below shows the amount of household waste recycled per person, in kilograms, in four towns in 2010 and in 2020.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: 'kg',
      yAxisLabel: 'Recycled waste (kg per person)',
      caption: 'Household waste recycled per person (kg), by town, 2010 vs 2020.',
      categories: ['Ashford', 'Brindle', 'Caxton', 'Dalehead'],
      series: [
        { name: '2010', values: [62, 48, 90, 35] },
        { name: '2020', values: [118, 74, 132, 88] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 2 · multi-series line (daily temperature, two cities, 12 months) ──────
  {
    id: 'wt1-c13-temperatures',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average daily temperature in two cities',
    prompt: [
      'The line graph below shows the average daily temperature, in degrees Celsius, in two cities across the twelve months of a single year.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: '°C',
      yAxisLabel: 'Average daily temperature (°C)',
      caption: 'Average daily temperature by city (°C), January to December.',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      series: [
        { name: 'Marlow', values: [4, 5, 8, 11, 15, 18, 21, 20, 17, 12, 7, 5] },
        { name: 'Pinegrove', values: [22, 23, 21, 18, 14, 11, 10, 11, 14, 17, 19, 21] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 3 · table (doctors & nurses per 1,000 people, five countries) ─────────
  {
    id: 'wt1-c13-doctors-nurses',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Doctors and nurses per 1,000 people in five countries',
    prompt: [
      'The table below shows the number of doctors and the number of nurses per 1,000 people in five countries in 2022.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'table',
      unit: 'per 1,000 people',
      caption: 'Doctors and nurses per 1,000 people, by country, 2022.',
      columns: ['Country', 'Doctors', 'Nurses'],
      rows: [
        { label: 'Norway', cells: [5.1, 17.9] },
        { label: 'Japan', cells: [2.6, 12.2] },
        { label: 'Brazil', cells: [2.3, 7.4] },
        { label: 'India', cells: [0.9, 2.4] },
        { label: 'Kenya', cells: [0.2, 1.2] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 4 · two pie charts (household spending by category, two years) ────────
  {
    id: 'wt1-c13-household-spending',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Household spending by category in two years',
    prompt: [
      'The two pie charts below show how an average household in one country divided its monthly spending between different categories in 2000 and in 2020.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'pie',
      unit: '%',
      caption: 'Share of average monthly household spending by category (%), 2000 vs 2020.',
      datasets: [
        {
          name: '2000',
          slices: [
            { label: 'Housing', value: 28 },
            { label: 'Food', value: 24 },
            { label: 'Transport', value: 16 },
            { label: 'Leisure', value: 12 },
            { label: 'Healthcare', value: 8 },
            { label: 'Other', value: 12 },
          ],
        },
        {
          name: '2020',
          slices: [
            { label: 'Housing', value: 34 },
            { label: 'Food', value: 19 },
            { label: 'Transport', value: 13 },
            { label: 'Leisure', value: 15 },
            { label: 'Healthcare', value: 11 },
            { label: 'Other', value: 8 },
          ],
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 5 · process · LINEAR (how a hydroelectric dam generates electricity) ──
  {
    id: 'wt1-c13-hydro-dam',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How a hydroelectric dam generates electricity',
    prompt: [
      'The diagram below shows how a hydroelectric dam uses moving water to generate electricity.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'process',
      caption:
        'The stages by which a hydroelectric dam converts stored water into electricity for homes.',
      steps: [
        {
          label: 'Reservoir storage',
          detail:
            'A large dam blocks a river valley, holding back a deep reservoir of water at a high level behind the wall.',
        },
        {
          label: 'Intake & penstock',
          detail:
            'When power is needed, gates open and water rushes from the reservoir down a steep enclosed pipe called a penstock.',
        },
        {
          label: 'Turbine spins',
          detail:
            'The fast-moving water strikes the blades of a turbine at the base of the dam, forcing the turbine to spin rapidly.',
        },
        {
          label: 'Generator',
          detail:
            'The spinning turbine drives a generator above it, where the rotation is converted into electrical energy.',
        },
        {
          label: 'Transformer & grid',
          detail:
            'A transformer raises the voltage of the electricity so that it can travel efficiently along power lines to the national grid.',
        },
        {
          label: 'Outflow',
          detail:
            'The used water leaves the turbine and flows out through the tailrace, rejoining the river downstream of the dam.',
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },
]
