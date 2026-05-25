// ─── IELTS Academic Writing Task 1 · Chart set 11 ───────────────────────────
// An eleventh bank of five Academic Task 1 prompts, each paired with a REAL
// chart spec (a `WritingChartSpec`, see src/lib/ielts/types.ts) rendered by
// src/app/ielts/writing/_components/WritingChart.tsx - so the candidate sees an
// actual bar / line / pie / table / process visual, the way the exam presents
// it, rather than a textual data dump.
//
// Authoring rules followed throughout (mirroring chart sets 1-9 and the
// committed worked examples in writing-prompts.ts):
//   • `prompt` is INSTRUCTION ONLY - it never quotes the measured numbers,
//     because the data lives entirely in `chart` (one source of truth);
//   • bar / line - every series.values length === categories.length, and each
//     carries `unit` + `yAxisLabel`;
//   • pie '%' slices sum to ~100 (parts of one whole);
//   • table - every row.cells length === columns.length − 1 (first column is
//     the row header);
//   • every spec sets a `caption`;
//   • numbers are realistic, internally consistent and tell a clear story
//     (a trend, a comparison, a dominant category) so a 150-word report is
//     achievable.
//
// Five fresh, original topics, deliberately distinct from every existing prompt
// across the whole chart bank:
//   1 average daily screen time by age group across three years (multi-series
//     bar)
//   2 passenger numbers on three public-transport modes over a decade
//     (multi-series line)
//   3 percentage of households owning selected appliances in four countries
//     (table)
//   4 how a city disposed of its waste in two years (two pies, each ~100%)
//   5 how rainwater is collected, filtered and reused in a building (cyclical
//     process)
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_CHARTS_11: WritingPrompt[] = [
  // ── 1 · multi-series bar (screen time by age group across three years) ─────
  {
    id: 'wt1-c11-screen-time',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average daily screen time by age group',
    prompt: [
      'The bar chart below shows the average number of hours per day that people in four age groups spent looking at screens in one country in 2013, 2018 and 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: 'hours/day',
      yAxisLabel: 'Average screen time (hours per day)',
      caption: 'Average daily screen time by age group (hours), 2013, 2018 and 2023.',
      categories: ['Under 18', '18-34', '35-54', '55 and over'],
      series: [
        { name: '2013', values: [3.1, 4.2, 3.4, 1.8] },
        { name: '2018', values: [4.6, 5.5, 4.1, 2.6] },
        { name: '2023', values: [6.2, 6.8, 5.0, 3.5] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 2 · multi-series line (three transport modes over a decade) ────────────
  {
    id: 'wt1-c11-transport',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Passenger numbers on three public-transport modes',
    prompt: [
      'The line graph below shows the number of passengers, in millions, carried each year by three modes of public transport in one city between 2014 and 2024.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: 'millions',
      yAxisLabel: 'Passengers per year (millions)',
      caption: 'Annual passenger numbers by mode of public transport (millions), 2014-2024.',
      categories: ['2014', '2016', '2018', '2020', '2022', '2024'],
      series: [
        { name: 'Metro', values: [120, 138, 155, 92, 160, 185] },
        { name: 'Bus', values: [210, 205, 198, 150, 178, 182] },
        { name: 'Tram', values: [45, 52, 60, 38, 66, 80] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 3 · table (country × % of households owning each appliance) ────────────
  {
    id: 'wt1-c11-appliances',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Household ownership of selected appliances',
    prompt: [
      'The table below shows the percentage of households that owned four selected appliances in four countries in 2022.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'table',
      unit: '%',
      caption: 'Percentage of households owning selected appliances, by country, 2022.',
      columns: ['Country', 'Refrigerator', 'Washing machine', 'Dishwasher', 'Air conditioner'],
      rows: [
        { label: 'Japan', cells: [99, 96, 28, 91] },
        { label: 'Germany', cells: [99, 95, 71, 19] },
        { label: 'Brazil', cells: [97, 64, 8, 23] },
        { label: 'India', cells: [38, 12, 2, 7] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 4 · two pie charts (waste disposal methods; each totals 100%) ──────────
  {
    id: 'wt1-c11-waste',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How a city disposed of its waste',
    prompt: [
      'The two pie charts below show the methods by which one city disposed of its household waste in 2004 and in 2024.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'pie',
      unit: '%',
      caption: 'Methods of household waste disposal (%), 2004 vs 2024.',
      datasets: [
        {
          name: '2004',
          slices: [
            { label: 'Landfill', value: 58 },
            { label: 'Incineration', value: 20 },
            { label: 'Recycling', value: 15 },
            { label: 'Composting', value: 7 },
          ],
        },
        {
          name: '2024',
          slices: [
            { label: 'Landfill', value: 24 },
            { label: 'Incineration', value: 18 },
            { label: 'Recycling', value: 39 },
            { label: 'Composting', value: 19 },
          ],
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 5 · process · CYCLICAL (rainwater collected, filtered and reused) ──────
  {
    id: 'wt1-c11-rainwater',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How rainwater is collected and reused in a building',
    prompt: [
      'The diagram below shows how rainwater is collected, treated and reused inside a large building before any surplus is returned to the environment.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'process',
      cyclical: true,
      caption:
        'The cycle by which rainwater is harvested from a building’s roof, filtered, used indoors and partly recovered.',
      steps: [
        {
          label: 'Roof collection',
          detail:
            'Rain falling on the building’s roof runs into gutters and down pipes, which channel it towards the system below.',
        },
        {
          label: 'First-flush filter',
          detail:
            'The water passes through a coarse screen and a first-flush device that diverts the dirtiest early run-off, removing leaves and grit.',
        },
        {
          label: 'Storage tank',
          detail:
            'The screened water is held in a large underground tank, where heavier particles settle to the bottom over time.',
        },
        {
          label: 'Treatment unit',
          detail:
            'When needed, stored water is pumped through fine filters and an ultraviolet unit that disinfects it for indoor use.',
        },
        {
          label: 'Indoor use',
          detail:
            'The treated water is piped to toilets, washing machines and garden taps throughout the building, reducing demand on the mains supply.',
        },
        {
          label: 'Greywater recovery',
          detail:
            'Waste water from these uses is collected and cleaned again, then fed back to the storage tank so the cycle can repeat; any excess overflows to a soakaway in the ground.',
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },
]
