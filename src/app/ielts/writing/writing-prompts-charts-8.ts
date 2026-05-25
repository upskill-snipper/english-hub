// ─── IELTS Academic Writing Task 1 · Chart set 8 ────────────────────────────
// An eighth bank of six Academic Task 1 prompts, each paired with a REAL chart
// spec (a `WritingChartSpec`, see src/lib/ielts/types.ts) rendered by
// src/app/ielts/writing/_components/WritingChart.tsx — so the candidate sees an
// actual bar / line / pie / table / process visual, the way the exam presents
// it, rather than a textual data dump.
//
// Authoring rules followed throughout (mirroring chart sets 1–7 and the
// committed worked examples in writing-prompts.ts):
//   • `prompt` is INSTRUCTION ONLY — it never quotes the numbers, because the
//     data lives entirely in `chart` (one source of truth).
//   • bar / line — every series.values length === categories.length, and each
//     carries `unit` + `yAxisLabel`;
//   • pie '%' slices sum to ~100 (parts of one whole);
//   • table — every row.cells length === columns.length − 1 (first column is
//     the row header);
//   • every spec sets a `caption`;
//   • numbers are realistic, internally consistent and tell a clear story
//     (a trend, a comparison, a dominant category) so a 150-word report is
//     achievable.
//
// Six fresh, original topics, deliberately distinct from every existing prompt
// across the whole chart bank (sets 1–7 + the worked examples): renewable mix,
// tourist arrivals, freshwater, internet-by-age, water cycle, enrolment,
// household spending, electricity sources, recycled materials, butterfly /
// coffee / chocolate / water-treatment / bread / hydroelectric / solar cycles,
// car ownership, CO2 by sector, world population, climate (temp+rainfall)
// table, cinema/streaming, phone features, screen time, waste disposal, life
// expectancy, leisure spending, commute time, gym membership, news sources,
// device shipments, renewable share, online grocery, paper recycling, museum
// visitors, household energy, bottled water, unemployment, healthcare spend,
// household income, app categories, rail vs air, home internet, museum funding,
// city populations, meat consumption:
//   1 average working hours per week by country (single-series bar)
//   2 air passenger numbers at an airport over a year (single-series line)
//   3 how people travel to work, two years (two pies; each totals 100%)
//   4 average monthly temperature across four cities (table)
//   5 how a plastic bottle is recycled (linear process)
//   6 adult literacy rate over six decades, two regions (multi-series line)
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_CHARTS_8: WritingPrompt[] = [
  // ── 1 · bar (single series across six countries — comparison) ─────────────
  {
    id: 'wt1c8-working-hours',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average working hours per week by country',
    prompt: [
      'The bar chart below shows the average number of hours worked per week by full-time employees in six countries in 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: 'hours',
      yAxisLabel: 'Hours per week',
      caption: 'Average weekly hours worked by full-time employees, by country, 2023.',
      categories: ['Mexico', 'South Korea', 'Greece', 'USA', 'Germany', 'Netherlands'],
      series: [{ name: 'Hours worked per week', values: [45, 42, 41, 38, 35, 31] }],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 2 · single-series line (monthly passenger numbers across one year) ─────
  {
    id: 'wt1c8-airport-passengers',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Air passenger numbers at an airport over a year',
    prompt: [
      'The line graph below shows the number of air passengers, in millions, passing through one international airport each month during a single year.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: 'millions',
      yAxisLabel: 'Passengers (millions)',
      caption: 'Monthly air passenger numbers at one international airport (millions), one year.',
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
        {
          name: 'Air passengers',
          values: [3.1, 2.8, 3.6, 4.2, 4.9, 6.3, 7.8, 7.5, 5.4, 4.6, 3.9, 5.1],
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 3 · two pie charts (modes of travel to work; each totals 100%) ────────
  {
    id: 'wt1c8-travel-to-work',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How people travel to work in one city',
    prompt: [
      'The two pie charts below show the main means of transport that people in one city used to travel to work in 2005 and in 2025.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'pie',
      unit: '%',
      caption: 'Share of commuters by main means of transport to work (%), 2005 vs 2025.',
      datasets: [
        {
          name: '2005',
          slices: [
            { label: 'Private car', value: 58 },
            { label: 'Bus', value: 16 },
            { label: 'Train', value: 12 },
            { label: 'Cycling', value: 6 },
            { label: 'Walking', value: 8 },
          ],
        },
        {
          name: '2025',
          slices: [
            { label: 'Private car', value: 39 },
            { label: 'Bus', value: 18 },
            { label: 'Train', value: 17 },
            { label: 'Cycling', value: 16 },
            { label: 'Walking', value: 10 },
          ],
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 4 · table (city × average monthly temperature across the year) ────────
  {
    id: 'wt1c8-city-temperatures',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average monthly temperature in four cities',
    prompt: [
      'The table below shows the average temperature, in degrees Celsius, in four cities at three points during the year.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'table',
      unit: '°C',
      caption: 'Average temperature (°C) in four cities in January, April and July.',
      columns: ['City', 'January', 'April', 'July'],
      rows: [
        { label: 'Oslo', cells: [-4, 6, 18] },
        { label: 'London', cells: [5, 11, 23] },
        { label: 'Cairo', cells: [14, 25, 35] },
        { label: 'Singapore', cells: [27, 28, 28] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 5 · process · LINEAR (how a plastic bottle is recycled) ───────────────
  {
    id: 'wt1c8-plastic-bottle-recycling',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How a plastic bottle is recycled',
    prompt: [
      'The diagram below illustrates the process by which used plastic bottles are recycled into new products.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'process',
      caption: 'The stages by which used plastic bottles are recycled into new products.',
      steps: [
        {
          label: 'Collection',
          detail:
            'Empty plastic bottles are placed in recycling bins and collected by lorry, then taken to a recycling facility.',
        },
        {
          label: 'Sorting',
          detail:
            'At the facility the bottles are separated from other waste by type and colour, by both machines and workers.',
        },
        {
          label: 'Washing',
          detail:
            'The sorted bottles are washed to remove labels, glue and any remaining liquid or dirt.',
        },
        {
          label: 'Shredding',
          detail:
            'Clean bottles are fed into a machine that shreds them into small plastic flakes.',
        },
        {
          label: 'Melting',
          detail:
            'The flakes are heated until they melt and are then formed into small, hard plastic pellets.',
        },
        {
          label: 'New products',
          detail:
            'Manufacturers buy the pellets and melt them again to make new items such as bottles, clothing fibre and containers.',
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 6 · multi-series line (adult literacy rate, two regions, six decades) ──
  {
    id: 'wt1c8-literacy-rates',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Adult literacy rates in two regions over time',
    prompt: [
      'The line graph below shows the adult literacy rate, as a percentage of the adult population, in two regions of the world between 1970 and 2020.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: '%',
      yAxisLabel: 'Adult literacy rate (%)',
      caption: 'Adult literacy rate as a share of the adult population (%), 1970–2020.',
      categories: ['1970', '1980', '1990', '2000', '2010', '2020'],
      series: [
        { name: 'Region A', values: [88, 91, 94, 96, 98, 99] },
        { name: 'Region B', values: [34, 42, 51, 60, 68, 77] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },
]
