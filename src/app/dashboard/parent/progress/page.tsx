"use client";

import { useState } from "react";

/* ─── Mock data (replace with real data fetching) ────────────────── */

const MOCK_STUDENTS = [
  { id: "s1", name: "Alex Johnson" },
  { id: "s2", name: "Emma Johnson" },
];

const MOCK_SCORE_TRENDS: Record<string, { week: string; score: number }[]> = {
  s1: [
    { week: "W1 Feb", score: 62 },
    { week: "W2 Feb", score: 65 },
    { week: "W3 Feb", score: 68 },
    { week: "W4 Feb", score: 66 },
    { week: "W1 Mar", score: 71 },
    { week: "W2 Mar", score: 73 },
    { week: "W3 Mar", score: 74 },
    { week: "W4 Mar", score: 78 },
  ],
  s2: [
    { week: "W1 Feb", score: 55 },
    { week: "W2 Feb", score: 58 },
    { week: "W3 Feb", score: 60 },
    { week: "W4 Feb", score: 59 },
    { week: "W1 Mar", score: 63 },
    { week: "W2 Mar", score: 65 },
    { week: "W3 Mar", score: 66 },
    { week: "W4 Mar", score: 68 },
  ],
};

const MOCK_ESSAYS_PER_WEEK: Record<string, { week: string; count: number }[]> = {
  s1: [
    { week: "W1 Feb", count: 2 },
    { week: "W2 Feb", count: 3 },
    { week: "W3 Feb", count: 2 },
    { week: "W4 Feb", count: 4 },
    { week: "W1 Mar", count: 3 },
    { week: "W2 Mar", count: 3 },
    { week: "W3 Mar", count: 2 },
    { week: "W4 Mar", count: 3 },
  ],
  s2: [
    { week: "W1 Feb", count: 1 },
    { week: "W2 Feb", count: 2 },
    { week: "W3 Feb", count: 2 },
    { week: "W4 Feb", count: 1 },
    { week: "W1 Mar", count: 2 },
    { week: "W2 Mar", count: 3 },
    { week: "W3 Mar", count: 2 },
    { week: "W4 Mar", count: 2 },
  ],
};

const MOCK_TIME_SPENT: Record<string, { week: string; minutes: number }[]> = {
  s1: [
    { week: "W1 Feb", minutes: 90 },
    { week: "W2 Feb", minutes: 120 },
    { week: "W3 Feb", minutes: 105 },
    { week: "W4 Feb", minutes: 150 },
    { week: "W1 Mar", minutes: 135 },
    { week: "W2 Mar", minutes: 140 },
    { week: "W3 Mar", minutes: 100 },
    { week: "W4 Mar", minutes: 130 },
  ],
  s2: [
    { week: "W1 Feb", minutes: 60 },
    { week: "W2 Feb", minutes: 75 },
    { week: "W3 Feb", minutes: 80 },
    { week: "W4 Feb", minutes: 55 },
    { week: "W1 Mar", minutes: 90 },
    { week: "W2 Mar", minutes: 100 },
    { week: "W3 Mar", minutes: 85 },
    { week: "W4 Mar", minutes: 95 },
  ],
};

interface StrengthsData {
  readingComprehension: number;
  creativeWriting: number;
  analysis: number;
  vocabulary: number;
  grammar: number;
}

const MOCK_STRENGTHS: Record<string, StrengthsData> = {
  s1: {
    readingComprehension: 82,
    creativeWriting: 70,
    analysis: 78,
    vocabulary: 75,
    grammar: 68,
  },
  s2: {
    readingComprehension: 65,
    creativeWriting: 72,
    analysis: 60,
    vocabulary: 68,
    grammar: 62,
  },
};

const MOCK_WEAKNESSES: Record<string, { area: string; description: string; recommendedPath: string }[]> = {
  s1: [
    { area: "Grammar", description: "Sentence structure and punctuation need improvement", recommendedPath: "Grammar Foundations module + Punctuation Practice Pack" },
    { area: "Creative Writing", description: "Vocabulary variety and descriptive techniques could be expanded", recommendedPath: "Creative Writing Masterclass + Vocabulary Builder" },
    { area: "Essay Structure", description: "Conclusions sometimes lack strength", recommendedPath: "Essay Conclusions Workshop + Model Answer Analysis" },
  ],
  s2: [
    { area: "Analysis", description: "Needs to develop deeper analytical skills with textual evidence", recommendedPath: "Analysis Skills module + Quote Integration Practice" },
    { area: "Grammar", description: "Common errors in tense consistency", recommendedPath: "Tense Consistency Workshop + Grammar Drills" },
    { area: "Reading Comprehension", description: "Inference skills need development", recommendedPath: "Inference & Deduction Practice + Comprehension Pack" },
  ],
};

const MOCK_GRADE_COMPARISON: Record<string, { subject: string; workingAt: string; predicted: string; target: string }[]> = {
  s1: [
    { subject: "English Literature", workingAt: "6", predicted: "7", target: "7" },
    { subject: "English Language", workingAt: "6", predicted: "7", target: "7" },
  ],
  s2: [
    { subject: "English Literature", workingAt: "4", predicted: "5", target: "6" },
    { subject: "English Language", workingAt: "5", predicted: "5", target: "6" },
  ],
};

/* ─── CSS-based line chart component ────────────────────────────────── */

function LineChart({
  data,
  valueKey,
  label,
  color,
  formatValue,
}: {
  data: { week: string; [key: string]: string | number }[];
  valueKey: string;
  label: string;
  color: string;
  formatValue?: (v: number) => string;
}) {
  const values = data.map((d) => d[valueKey] as number);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;

  return (
    <div className="card">
      <h3 className="text-sm font-semibold text-foreground mb-4">{label}</h3>
      <div className="relative h-48">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-muted-foreground w-8">
          <span>{formatValue ? formatValue(max) : max}</span>
          <span>{formatValue ? formatValue(Math.round((max + min) / 2)) : Math.round((max + min) / 2)}</span>
          <span>{formatValue ? formatValue(min) : min}</span>
        </div>
        {/* Chart area */}
        <div className="ml-10 flex items-end gap-1 h-full pb-6">
          {data.map((d, i) => {
            const value = d[valueKey] as number;
            const height = ((value - min) / range) * 100;
            const clampedHeight = Math.max(height, 4);
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs font-medium text-foreground">
                  {formatValue ? formatValue(value) : value}
                </span>
                <div
                  className="w-full rounded-t-sm transition-all duration-300"
                  style={{
                    height: `${clampedHeight}%`,
                    backgroundColor: color,
                    minHeight: "4px",
                  }}
                />
                <span className="text-[10px] text-muted-foreground whitespace-nowrap">{d.week}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Radar/skill chart using CSS ───────────────────────────────────── */

function StrengthsRadar({ strengths }: { strengths: StrengthsData }) {
  const skills = [
    { label: "Reading Comprehension", value: strengths.readingComprehension },
    { label: "Creative Writing", value: strengths.creativeWriting },
    { label: "Analysis", value: strengths.analysis },
    { label: "Vocabulary", value: strengths.vocabulary },
    { label: "Grammar", value: strengths.grammar },
  ];

  return (
    <div className="card">
      <h3 className="text-sm font-semibold text-foreground mb-4">Strengths Radar</h3>
      <div className="space-y-4">
        {skills.map((skill) => {
          const barColor =
            skill.value >= 75
              ? "bg-success"
              : skill.value >= 60
                ? "bg-accent"
                : "bg-warn";
          return (
            <div key={skill.label}>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-foreground">{skill.label}</span>
                <span className="font-semibold text-foreground">{skill.value}%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-muted">
                <div
                  className={`h-3 rounded-full ${barColor} transition-all duration-500`}
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Grade colour helper ───────────────────────────────────────────── */

function gradeColour(grade: string, target: string): string {
  const g = parseInt(grade);
  const t = parseInt(target);
  if (isNaN(g) || isNaN(t)) return "text-foreground";
  if (g >= t) return "text-success";
  if (g >= t - 1) return "text-accent";
  return "text-warn";
}

/* ─── Page ───────────────────────────────────────────────────────────── */

export default function ProgressPage() {
  const [selectedStudent, setSelectedStudent] = useState(MOCK_STUDENTS[0].id);
  const student = MOCK_STUDENTS.find((s) => s.id === selectedStudent)!;
  const scoreTrends = MOCK_SCORE_TRENDS[selectedStudent];
  const essaysPerWeek = MOCK_ESSAYS_PER_WEEK[selectedStudent];
  const timeSpent = MOCK_TIME_SPENT[selectedStudent];
  const strengths = MOCK_STRENGTHS[selectedStudent];
  const weaknesses = MOCK_WEAKNESSES[selectedStudent];
  const gradeComparison = MOCK_GRADE_COMPARISON[selectedStudent];

  return (
    <div className="space-y-8">
      {/* ── Header with student selector ─────────────────────── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary sm:text-3xl">
            Detailed Progress
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Track {student.name}&apos;s learning journey over time.
          </p>
        </div>

        {MOCK_STUDENTS.length > 1 && (
          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
            className="self-start rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground focus:border-accent focus:ring-1 focus:ring-accent"
            aria-label="Select student"
          >
            {MOCK_STUDENTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* ── Score trends ─────────────────────────────────────── */}
      <section aria-labelledby="score-trends-heading">
        <h2 id="score-trends-heading" className="sr-only">Score Trends</h2>
        <LineChart
          data={scoreTrends}
          valueKey="score"
          label="Average Score Trend"
          color="hsl(var(--chart-2))"
          formatValue={(v) => `${v}%`}
        />
      </section>

      {/* ── Essays and time side by side ──────────────────────── */}
      <div className="grid gap-6 lg:grid-cols-2">
        <section aria-labelledby="essays-per-week-heading">
          <h2 id="essays-per-week-heading" className="sr-only">Essays Per Week</h2>
          <LineChart
            data={essaysPerWeek}
            valueKey="count"
            label="Essays Completed Per Week"
            color="hsl(var(--chart-2))"
          />
        </section>

        <section aria-labelledby="time-spent-heading">
          <h2 id="time-spent-heading" className="sr-only">Time Spent Studying</h2>
          <LineChart
            data={timeSpent}
            valueKey="minutes"
            label="Time Spent Studying (minutes)"
            color="hsl(var(--chart-1))"
            formatValue={(v) => {
              const h = Math.floor(v / 60);
              const m = v % 60;
              return h > 0 ? `${h}h${m}m` : `${m}m`;
            }}
          />
        </section>
      </div>

      {/* ── Strengths radar ──────────────────────────────────── */}
      <section aria-labelledby="strengths-heading">
        <h2 id="strengths-heading" className="sr-only">Strengths</h2>
        <StrengthsRadar strengths={strengths} />
      </section>

      {/* ── Weaknesses with recommended learning paths ─────── */}
      <section aria-labelledby="weaknesses-heading">
        <h2 id="weaknesses-heading" className="text-lg font-semibold text-foreground">
          Areas for Improvement
        </h2>
        <div className="mt-4 space-y-4">
          {weaknesses.map((w, idx) => (
            <div key={idx} className="card border-l-4 border-l-warn">
              <h3 className="font-semibold text-foreground">{w.area}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{w.description}</p>
              <div className="mt-3 rounded-lg bg-primary/10 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Recommended Learning Path
                </p>
                <p className="mt-1 text-sm text-primary">{w.recommendedPath}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projected vs Target Grades ─────────────────────── */}
      <section aria-labelledby="grades-comparison-heading">
        <h2 id="grades-comparison-heading" className="text-lg font-semibold text-foreground">
          Working At Grade, Predicted Grade &amp; Target
        </h2>
        <div className="mt-4 card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="pb-2 pr-4 text-left text-xs font-medium text-muted-foreground">Subject</th>
                  <th scope="col" className="pb-2 pr-4 text-left text-xs font-medium text-muted-foreground">Working At</th>
                  <th scope="col" className="pb-2 pr-4 text-left text-xs font-medium text-muted-foreground">Predicted</th>
                  <th scope="col" className="pb-2 pr-4 text-left text-xs font-medium text-muted-foreground">Target</th>
                  <th scope="col" className="pb-2 text-left text-xs font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {gradeComparison.map((row, idx) => {
                  const p = parseInt(row.predicted);
                  const t = parseInt(row.target);
                  const diff = p - t;
                  let statusLabel = "On track";
                  let statusClass = "bg-success-50 text-success-700";
                  if (diff < 0) {
                    statusLabel = `${Math.abs(diff)} grade${Math.abs(diff) > 1 ? "s" : ""} below target`;
                    statusClass = diff <= -2 ? "bg-warn-50 text-warn-700" : "bg-yellow-500/10 text-yellow-700";
                  } else if (diff > 0) {
                    statusLabel = "Above target";
                    statusClass = "bg-success-50 text-success-700";
                  }

                  return (
                    <tr key={idx}>
                      <td className="py-2.5 pr-4 font-medium text-foreground">{row.subject}</td>
                      <td className={`py-2.5 pr-4 font-bold ${gradeColour(row.workingAt, row.target)}`}>
                        Grade {row.workingAt}
                      </td>
                      <td className={`py-2.5 pr-4 font-bold ${gradeColour(row.predicted, row.target)}`}>
                        Grade {row.predicted}
                      </td>
                      <td className="py-2.5 pr-4 font-medium text-muted-foreground">Grade {row.target}</td>
                      <td className="py-2.5">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusClass}`}>
                          {statusLabel}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
