// ─── IELTS Academic Writing Task 1 · Chart set 12 ───────────────────────────
// A twelfth bank of five Academic Task 1 prompts, each paired with a REAL chart
// spec (a `WritingChartSpec`, see src/lib/ielts/types.ts) rendered by
// src/app/ielts/writing/_components/WritingChart.tsx — so the candidate sees an
// actual bar / line / pie / table / process visual, the way the exam presents
// it, rather than a textual data dump.
//
// Authoring rules followed throughout (mirroring chart sets 1–9 and the
// committed worked examples in writing-prompts.ts):
//   • `prompt` is INSTRUCTION ONLY — it never quotes the numbers, because the
//     data lives entirely in `chart` (one source of truth);
//   • bar / line — every series.values length === categories.length, and each
//     carries `unit` + `yAxisLabel`;
//   • table — every row.cells length === columns.length − 1 (first column is
//     the row header);
//   • pie '%' slices sum to ~100 (parts of one whole);
//   • every spec sets a `caption`;
//   • numbers are realistic, internally consistent and tell a clear story
//     (a trend, a comparison, a dominant category) so a 150-word report is
//     achievable.
//
// Five fresh, original topics, deliberately distinct from every existing prompt
// across the whole chart bank:
//   1 number of international students at three universities, three years
//     (multi-series bar)
//   2 average house prices in three regions over a decade (multi-series line)
//   3 employment by sector (%) in four countries (table)
//   4 reasons people give for visiting a city library, two survey years
//     (two pies)
//   5 how glass bottles are recycled into new glass (cyclical process)
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_CHARTS_12: WritingPrompt[] = [
  // ── 1 · multi-series bar (three universities across three years) ───────────
  {
    id: 'wt1-c12-intl-students',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Number of international students at three universities',
    prompt: [
      'The bar chart below shows the number of international students enrolled at three universities — Northgate, Saint Clare and Westfield — in 2018, 2021 and 2024.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: 'students',
      yAxisLabel: 'International students',
      caption: 'International student enrolment by university, 2018, 2021 and 2024.',
      categories: ['Northgate', 'Saint Clare', 'Westfield'],
      series: [
        { name: '2018', values: [3200, 4800, 2100] },
        { name: '2021', values: [4100, 4500, 3000] },
        { name: '2024', values: [5600, 5100, 4700] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 2 · multi-series line (three regions over a decade) ───────────────────
  {
    id: 'wt1-c12-house-prices',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average house prices in three regions over a decade',
    prompt: [
      'The line graph below shows the average price of a house, in thousands of pounds, in three regions — the North, the Midlands and the South — between 2014 and 2024.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: '£ thousands',
      yAxisLabel: 'Average price (£ 000s)',
      caption: 'Average house price by region (£ thousands), 2014–2024.',
      categories: ['2014', '2016', '2018', '2020', '2022', '2024'],
      series: [
        { name: 'North', values: [148, 152, 160, 171, 198, 214] },
        { name: 'Midlands', values: [185, 196, 210, 228, 262, 281] },
        { name: 'South', values: [262, 285, 305, 318, 372, 405] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 3 · table (four countries × employment share by sector) ───────────────
  {
    id: 'wt1-c12-employment-sector',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Employment by sector in four countries',
    prompt: [
      'The table below shows the percentage of the workforce employed in four sectors — agriculture, manufacturing, services and the public sector — in four countries in 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'table',
      unit: '%',
      caption: 'Share of the workforce employed by sector (%), by country, 2023.',
      columns: ['Country', 'Agriculture', 'Manufacturing', 'Services', 'Public sector'],
      rows: [
        { label: 'Vietnam', cells: [29, 27, 31, 13] },
        { label: 'Brazil', cells: [9, 20, 54, 17] },
        { label: 'Germany', cells: [2, 24, 58, 16] },
        { label: 'Egypt', cells: [24, 14, 41, 21] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 4 · two pie charts (reasons for visiting a library; each totals 100%) ──
  {
    id: 'wt1-c12-library-reasons',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Reasons people give for visiting a city library',
    prompt: [
      'The two pie charts below show the main reasons people gave for visiting a city library in surveys carried out in 2010 and in 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'pie',
      unit: '%',
      caption: 'Main reason given for visiting a city library (%), 2010 vs 2023.',
      datasets: [
        {
          name: '2010',
          slices: [
            { label: 'Borrowing books', value: 47 },
            { label: 'Studying or reading', value: 21 },
            { label: 'Using computers', value: 16 },
            { label: 'Attending events', value: 9 },
            { label: 'Other', value: 7 },
          ],
        },
        {
          name: '2023',
          slices: [
            { label: 'Borrowing books', value: 28 },
            { label: 'Studying or reading', value: 24 },
            { label: 'Using computers', value: 25 },
            { label: 'Attending events', value: 17 },
            { label: 'Other', value: 6 },
          ],
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 5 · process · CYCLICAL (how glass bottles are recycled) ───────────────
  {
    id: 'wt1-c12-glass-recycling',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How glass bottles are recycled into new glass',
    prompt: [
      'The diagram below shows the process by which used glass bottles are recycled and turned into new glass products.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'process',
      cyclical: true,
      caption:
        'The cycle by which used glass bottles are collected, reprocessed and remade into new glass.',
      steps: [
        {
          label: 'Collection',
          detail:
            'Households and businesses place empty glass bottles and jars into recycling bins, which are emptied and taken to a processing centre.',
        },
        {
          label: 'Sorting',
          detail:
            'The collected glass is separated by colour — clear, green and brown — and any plastic, metal or paper is removed.',
        },
        {
          label: 'Crushing',
          detail:
            'The sorted glass is crushed by machine into small fragments known as cullet, which are washed to take out remaining impurities.',
        },
        {
          label: 'Melting',
          detail:
            'The clean cullet is mixed with sand, soda ash and limestone and fed into a furnace, where it is heated until it melts into molten glass.',
        },
        {
          label: 'Moulding',
          detail:
            'The molten glass is poured into moulds and shaped into new bottles and jars, which are then cooled slowly to harden.',
        },
        {
          label: 'Reuse',
          detail:
            'The finished glass containers are filled with products and sold in shops, after which they can be emptied and returned to recycling, beginning the cycle again.',
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },
]
