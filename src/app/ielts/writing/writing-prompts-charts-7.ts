// ─── IELTS Academic Writing Task 1 · Chart set 7 ────────────────────────────
// A seventh bank of six Academic Task 1 prompts, each paired with a REAL chart
// spec (a `WritingChartSpec`, see src/lib/ielts/types.ts) rendered by
// src/app/ielts/writing/_components/WritingChart.tsx — so the candidate sees an
// actual bar / line / pie / table / process visual, the way the exam presents
// it, rather than a textual data dump.
//
// Authoring rules followed throughout (mirroring chart sets 1–5 and the
// committed worked examples in writing-prompts.ts):
//   • `prompt` is INSTRUCTION ONLY — it never quotes the numbers, because the
//     data lives entirely in `chart` (one source of truth).
//   • bar / line — every series.values length === categories.length, and each
//     carries `unit` + `yAxisLabel`;
//   • pie '%' slices sum to ~100 (parts of one whole);
//   • every spec sets a `caption`;
//   • numbers are realistic, internally consistent and tell a clear story
//     (a trend, a comparison, a dominant category) so a 150-word report is
//     achievable.
//
// Six fresh, original topics, deliberately distinct from every existing prompt
// across the whole chart bank (renewable mix, tourist arrivals, freshwater,
// internet-by-age, water cycle, enrolment, household spending, electricity
// sources, recycled materials, butterfly/coffee/chocolate/water-treatment/
// bread cycles, car ownership, CO2 by sector, world population, climate table,
// cinema/streaming, phone features, screen time, waste disposal, life
// expectancy, leisure spending, commute time, gym membership, news sources,
// device shipments, renewable share, online grocery, paper recycling, museum
// visitors, household energy):
//   1 bottled-water consumption per person by country (single-series bar)
//   2 national unemployment rate over time, two countries (multi-series line)
//   3 government spending on healthcare per person by country (table)
//   4 how a hydroelectric dam produces electricity (linear process)
//   5 sources of household income in one country, two years (two pies)
//   6 share of time on smartphone app categories by age group (STACKED bar)
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_CHARTS_7: WritingPrompt[] = [
  // ── 1 · bar (single series across six countries — comparison) ─────────────
  {
    id: 'wt1c7-bottled-water',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Bottled water consumption per person by country',
    prompt: [
      'The bar chart below shows the average amount of bottled water consumed per person, in litres, in six countries in 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: 'litres',
      yAxisLabel: 'Litres per person per year',
      caption: 'Average bottled water consumed per person (litres), by country, 2023.',
      categories: ['Mexico', 'Italy', 'Germany', 'France', 'USA', 'UK'],
      series: [{ name: 'Bottled water per person', values: [274, 220, 168, 137, 121, 44] }],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 2 · multi-series line (two countries' rates over two decades) ─────────
  {
    id: 'wt1c7-unemployment-rate',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Unemployment rate in two countries over time',
    prompt: [
      'The line graph below shows the annual unemployment rate, as a percentage of the workforce, in two countries between 2000 and 2025.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: '%',
      yAxisLabel: 'Unemployment rate (%)',
      caption: 'Annual unemployment rate as a share of the workforce (%), 2000–2025.',
      categories: ['2000', '2005', '2010', '2015', '2020', '2025'],
      series: [
        { name: 'Country X', values: [4.2, 5.1, 9.6, 6.3, 8.1, 4.5] },
        { name: 'Country Y', values: [11.4, 9.0, 12.8, 10.5, 7.2, 6.8] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 3 · table (country × healthcare spend per person across three years) ──
  {
    id: 'wt1c7-healthcare-spending',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Government spending on healthcare per person by country',
    prompt: [
      'The table below shows government spending on healthcare per person, in US dollars, in five countries in 2005, 2015 and 2025.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'table',
      unit: 'US$',
      caption: 'Government healthcare spending per person (US$), 2005, 2015 and 2025.',
      columns: ['Country', '2005', '2015', '2025'],
      rows: [
        { label: 'Norway', cells: [4100, 6200, 8400] },
        { label: 'Germany', cells: [3200, 4500, 6100] },
        { label: 'Japan', cells: [2400, 3600, 4900] },
        { label: 'Brazil', cells: [560, 980, 1450] },
        { label: 'India', cells: [70, 180, 410] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 4 · process · LINEAR (how a hydroelectric dam generates electricity) ──
  {
    id: 'wt1c7-hydroelectric-dam',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How a hydroelectric dam produces electricity',
    prompt: [
      'The diagram below shows how a hydroelectric dam is used to generate electricity from flowing water.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'process',
      caption: 'The stages by which a hydroelectric dam generates electricity from a river.',
      steps: [
        {
          label: 'River dammed',
          detail:
            'A large dam is built across a river valley, holding back the water to form a deep reservoir behind it.',
        },
        {
          label: 'Water stored',
          detail:
            'Water collects in the reservoir at a high level, storing energy because of the height difference across the dam.',
        },
        {
          label: 'Intake & penstock',
          detail:
            'Gates open and water rushes down a large steel pipe, the penstock, towards the power station at the base.',
        },
        {
          label: 'Turbine spins',
          detail:
            'The fast-flowing water strikes the blades of a turbine, making it rotate at high speed.',
        },
        {
          label: 'Generator',
          detail:
            'The spinning turbine drives a generator, which converts the movement into electrical energy.',
        },
        {
          label: 'Power distributed',
          detail:
            'Transformers raise the voltage and the electricity is carried along power lines to homes and factories.',
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 5 · two pie charts (sources of household income; each totals 100%) ────
  {
    id: 'wt1c7-household-income-sources',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Sources of household income in one country',
    prompt: [
      'The two pie charts below show the sources of total household income in one country in 2000 and in 2025.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'pie',
      unit: '%',
      caption: 'Share of total household income by source (%), 2000 vs 2025.',
      datasets: [
        {
          name: '2000',
          slices: [
            { label: 'Wages & salaries', value: 64 },
            { label: 'Self-employment', value: 13 },
            { label: 'State pensions & benefits', value: 14 },
            { label: 'Investments & savings', value: 7 },
            { label: 'Other income', value: 2 },
          ],
        },
        {
          name: '2025',
          slices: [
            { label: 'Wages & salaries', value: 55 },
            { label: 'Self-employment', value: 19 },
            { label: 'State pensions & benefits', value: 16 },
            { label: 'Investments & savings', value: 6 },
            { label: 'Other income', value: 4 },
          ],
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 6 · STACKED bar (app categories make up each age group's daily total) ─
  {
    id: 'wt1c7-app-categories',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Time spent on smartphone app categories by age group',
    prompt: [
      'The chart below shows the average number of hours per day that people in four age groups spent using five categories of smartphone app in one country in 2024, with the bars showing how each age group’s daily total is made up.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      stacked: true,
      unit: 'hours/day',
      yAxisLabel: 'Hours per day',
      caption: 'Average daily time on smartphone app categories by age group (hours), 2024.',
      categories: ['13–17', '18–34', '35–54', '55+'],
      series: [
        { name: 'Social media', values: [3.4, 2.8, 1.5, 0.7] },
        { name: 'Games', values: [2.1, 1.2, 0.6, 0.4] },
        { name: 'Video & streaming', values: [1.8, 1.6, 1.1, 0.9] },
        { name: 'Messaging', values: [1.2, 1.4, 1.0, 0.8] },
        { name: 'News & productivity', values: [0.4, 1.0, 1.3, 1.1] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },
]
