// ─── IELTS Academic Writing Task 1 · Chart set 3 ────────────────────────────
// A third bank of six Academic Task 1 prompts, each paired with a REAL chart
// spec (a `WritingChartSpec`, see src/lib/ielts/types.ts) rendered by
// src/app/ielts/writing/_components/WritingChart.tsx - so the candidate sees an
// actual bar / line / pie / table / process visual, the way the exam presents
// it, rather than a textual data dump.
//
// Authoring rules followed throughout (mirroring chart sets 1 & 2 and the
// committed worked examples in writing-prompts.ts):
//   • `prompt` is INSTRUCTION ONLY - it never quotes the numbers, because the
//     data lives entirely in `chart` (one source of truth).
//   • bar / line - every series.values length === categories.length, and each
//     carries `unit` + `yAxisLabel`;
//   • pie '%' slices sum to ~100 (parts of one whole);
//   • every spec sets a `caption`;
//   • numbers are realistic, internally consistent and tell a clear story
//     (a trend, a comparison, a dominant category) so a 150-word report is
//     achievable.
//
// Six fresh, original topics, deliberately distinct from every existing prompt
// (renewable mix, tourism arrivals, freshwater, internet-by-age, water cycle,
// university enrolment, household spending, electricity sources, recycled
// materials, butterfly/coffee life-cycles, online grocery, paper recycling,
// museum visitors, household energy): car ownership per 1,000 people by country
// (bar), global CO2 emissions by sector over time (multi-series line), world
// population by region in two years (two pies), average temperature and
// rainfall by city (table), how chocolate is made from bean to bar (linear
// process) and cinema vs streaming viewing time by age group (grouped bar).
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_CHARTS_3: WritingPrompt[] = [
  // ── 1 · bar (single series across six countries) ──────────────────────────
  {
    id: 'wt1c3-car-ownership',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Car ownership per 1,000 people by country',
    prompt: [
      'The bar chart below shows the number of cars owned per 1,000 people in six countries in 2022.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: 'cars',
      yAxisLabel: 'Cars per 1,000 people',
      caption: 'Number of cars owned per 1,000 people, by country, 2022.',
      categories: ['USA', 'Italy', 'Japan', 'Russia', 'Brazil', 'India'],
      series: [{ name: 'Cars per 1,000 people', values: [837, 695, 591, 373, 206, 59] }],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 2 · multi-series line (three sectors over time) ───────────────────────
  {
    id: 'wt1c3-co2-by-sector',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Global CO2 emissions by sector',
    prompt: [
      'The line graph below shows the amount of carbon dioxide emitted worldwide by three sectors - electricity and heat, transport, and industry - between 1990 and 2020, measured in billions of tonnes.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: 'bn tonnes',
      yAxisLabel: 'CO2 (billion tonnes)',
      caption: 'Global CO2 emissions by sector (billion tonnes), 1990-2020.',
      categories: ['1990', '1998', '2006', '2014', '2020'],
      series: [
        { name: 'Electricity & heat', values: [7.6, 9.1, 11.8, 13.9, 14.2] },
        { name: 'Transport', values: [4.6, 5.5, 6.8, 7.5, 7.3] },
        { name: 'Industry', values: [4.0, 4.3, 5.6, 6.1, 6.4] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 3 · two pie charts (parts of one whole; each totals 100%) ─────────────
  {
    id: 'wt1c3-world-population-region',
    task: 'writing-task-1',
    track: 'academic',
    title: 'World population by region',
    prompt: [
      'The two pie charts below show the share of the world’s population living in six regions in 2000 and the projected share in 2050.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'pie',
      unit: '%',
      caption: 'Share of world population by region (%), 2000 vs projected 2050.',
      datasets: [
        {
          name: '2000',
          slices: [
            { label: 'Asia', value: 56 },
            { label: 'Africa', value: 13 },
            { label: 'Europe', value: 12 },
            { label: 'Latin America', value: 9 },
            { label: 'North America', value: 8 },
            { label: 'Oceania', value: 2 },
          ],
        },
        {
          name: '2050',
          slices: [
            { label: 'Asia', value: 54 },
            { label: 'Africa', value: 25 },
            { label: 'Europe', value: 8 },
            { label: 'Latin America', value: 7 },
            { label: 'North America', value: 5 },
            { label: 'Oceania', value: 1 },
          ],
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 4 · table (city × temperature + rainfall) ─────────────────────────────
  {
    id: 'wt1c3-climate-by-city',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average temperature and rainfall in four cities',
    prompt: [
      'The table below shows the average annual daytime temperature, the average annual night-time temperature and the total yearly rainfall in four cities.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'table',
      caption:
        'Average daytime and night-time temperature (°C) and total annual rainfall (mm) in four cities.',
      columns: [
        'City',
        'Avg daytime temp (°C)',
        'Avg night-time temp (°C)',
        'Annual rainfall (mm)',
      ],
      rows: [
        { label: 'Singapore', cells: [31, 25, 2340] },
        { label: 'Cairo', cells: [29, 16, 25] },
        { label: 'London', cells: [15, 8, 690] },
        { label: 'Moscow', cells: [9, 2, 710] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 5 · process · LINEAR (an industrial production process) ───────────────
  {
    id: 'wt1c3-chocolate-production',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How chocolate is made',
    prompt: [
      'The diagram below shows the stages in the production of chocolate, from the harvesting of cocoa pods to the finished chocolate bar.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'process',
      caption: 'The main stages in making chocolate, from cocoa pod to packaged bar.',
      steps: [
        {
          label: 'Harvesting',
          detail:
            'Ripe cocoa pods are cut from the trees by hand and split open to remove the beans inside.',
        },
        {
          label: 'Fermenting',
          detail:
            'The beans, still covered in white pulp, are placed in covered boxes and left to ferment for several days.',
        },
        {
          label: 'Drying',
          detail:
            'The fermented beans are spread out in the sun until they are dry, then packed into sacks.',
        },
        {
          label: 'Roasting',
          detail:
            'At the factory the dried beans are roasted at a high temperature, which deepens their flavour.',
        },
        {
          label: 'Grinding',
          detail:
            'The roasted beans are shelled and ground into a thick brown paste known as cocoa liquor.',
        },
        {
          label: 'Moulding & packing',
          detail:
            'Sugar and milk are mixed in, and the warm chocolate is poured into moulds, cooled and wrapped.',
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 6 · grouped bar (two activities across four age groups) ───────────────
  {
    id: 'wt1c3-cinema-vs-streaming',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Time spent watching films at the cinema and by streaming',
    prompt: [
      'The bar chart below shows the average number of hours per month that people in four age groups spent watching films at the cinema and watching films on streaming services in one country in 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: 'hours/month',
      yAxisLabel: 'Hours per month',
      caption: 'Average monthly hours spent watching films at the cinema and by streaming, 2023.',
      categories: ['16-24', '25-39', '40-59', '60+'],
      series: [
        { name: 'Cinema', values: [4.8, 3.6, 2.1, 1.3] },
        { name: 'Streaming', values: [26.4, 22.7, 15.9, 9.2] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },
]
