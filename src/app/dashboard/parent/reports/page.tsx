"use client";

import { useState } from "react";
import { openPrintableDocument } from "@/lib/generate-download";

/* ─── Mock data (replace with real data fetching) ────────────────── */

const MOCK_STUDENTS = [
  { id: "s1", name: "Alex Johnson" },
  { id: "s2", name: "Emma Johnson" },
];

interface WeeklyReport {
  id: string;
  weekStart: string;
  weekEnd: string;
  studentName: string;
  essaysCompleted: number;
  timeSpentMinutes: number;
  averageScore: number;
  previousWeekScore: number;
  projectedGrades: { subject: string; workingAt: string; predicted: string }[];
  strengths: string[];
  improvements: string[];
  recommendations: string[];
}

const MOCK_REPORTS: Record<string, WeeklyReport[]> = {
  s1: [
    {
      id: "r1",
      weekStart: "2026-03-16",
      weekEnd: "2026-03-22",
      studentName: "Alex Johnson",
      essaysCompleted: 3,
      timeSpentMinutes: 210,
      averageScore: 78,
      previousWeekScore: 73,
      projectedGrades: [
        { subject: "English Literature", workingAt: "6", predicted: "7" },
        { subject: "English Language", workingAt: "6", predicted: "7" },
      ],
      strengths: [
        "Strong analytical paragraphs with contextual references",
        "Good understanding of character motivations",
        "Improving use of persuasive techniques",
      ],
      improvements: [
        "Sentence structure variety needs work",
        "Conclusions could be stronger",
        "Spelling accuracy in key terminology",
      ],
      recommendations: [
        "Complete the Sentence Variety Workshop in Resources",
        "Review model conclusion examples for An Inspector Calls",
        "Use the Vocabulary Builder tool daily for 10 minutes",
      ],
    },
    {
      id: "r2",
      weekStart: "2026-03-09",
      weekEnd: "2026-03-15",
      studentName: "Alex Johnson",
      essaysCompleted: 2,
      timeSpentMinutes: 140,
      averageScore: 73,
      previousWeekScore: 71,
      projectedGrades: [
        { subject: "English Literature", workingAt: "5", predicted: "6" },
        { subject: "English Language", workingAt: "6", predicted: "6" },
      ],
      strengths: [
        "Consistent use of PEA paragraphs",
        "Good vocabulary range in creative writing",
        "Effective use of structural techniques",
      ],
      improvements: [
        "Need to develop counter-arguments in discursive writing",
        "Quotation integration could be smoother",
        "Time management during timed essays",
      ],
      recommendations: [
        "Practice discursive writing with the Counter-Argument pack",
        "Work through the Embedding Quotations module",
        "Try one timed essay practice per week",
      ],
    },
    {
      id: "r3",
      weekStart: "2026-03-02",
      weekEnd: "2026-03-08",
      studentName: "Alex Johnson",
      essaysCompleted: 3,
      timeSpentMinutes: 180,
      averageScore: 71,
      previousWeekScore: 68,
      projectedGrades: [
        { subject: "English Literature", workingAt: "5", predicted: "5" },
        { subject: "English Language", workingAt: "5", predicted: "6" },
      ],
      strengths: [
        "Improving analytical depth in literature essays",
        "Good use of descriptive language",
        "Strong opening paragraphs",
      ],
      improvements: [
        "Grammar accuracy, especially comma usage",
        "Need more varied sentence openings",
        "Could include more writer's intent analysis",
      ],
      recommendations: [
        "Complete the Comma Rules module in Grammar section",
        "Review the Sentence Starters resource pack",
        "Watch the Writer's Intent video tutorial",
      ],
    },
  ],
  s2: [
    {
      id: "r4",
      weekStart: "2026-03-16",
      weekEnd: "2026-03-22",
      studentName: "Emma Johnson",
      essaysCompleted: 2,
      timeSpentMinutes: 95,
      averageScore: 68,
      previousWeekScore: 66,
      projectedGrades: [
        { subject: "English Literature", workingAt: "4", predicted: "5" },
        { subject: "English Language", workingAt: "5", predicted: "5" },
      ],
      strengths: [
        "Creative flair in descriptive writing",
        "Good engagement with set texts",
        "Improving paragraph organisation",
      ],
      improvements: [
        "Analytical depth needs improvement",
        "Tense consistency in narrative writing",
        "Reading comprehension inference skills",
      ],
      recommendations: [
        "Work through the Analysis Skills Builder module",
        "Complete the Tense Consistency exercises",
        "Do 3 comprehension passages from the Reading Pack",
      ],
    },
  ],
};

/* ─── Inline SVG icons ─────────────────────────────────────────────── */

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className ?? "h-5 w-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className ?? "h-5 w-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className ?? "h-5 w-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className ?? "h-5 w-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );
}

/* ─── Helpers ────────────────────────────────────────────────────────── */

function formatWeekRange(start: string, end: string): string {
  const s = new Date(start);
  const e = new Date(end);
  return `${s.toLocaleDateString("en-GB", { day: "numeric", month: "short" })} - ${e.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`;
}

function formatTime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

/* ─── Page ───────────────────────────────────────────────────────────── */

export default function ReportsPage() {
  const [selectedStudent, setSelectedStudent] = useState(MOCK_STUDENTS[0].id);
  const [expandedReport, setExpandedReport] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const reports = MOCK_REPORTS[selectedStudent] || [];

  async function handleDownloadPdf(report: WeeklyReport) {
    setDownloadingId(report.id);
    try {
      const e = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const scoreDiff = report.averageScore - report.previousWeekScore;
      const body = `
        <h2>Summary</h2>
        <table>
          <tr><th>Student</th><td>${e(report.studentName)}</td><th>Week</th><td>${e(report.weekStart)} to ${e(report.weekEnd)}</td></tr>
          <tr><th>Essays Completed</th><td>${report.essaysCompleted}</td><th>Time Spent</th><td>${Math.round(report.timeSpentMinutes / 60 * 10) / 10} hours</td></tr>
          <tr><th>Average Score</th><td>${report.averageScore}%</td><th>Change</th><td>${scoreDiff >= 0 ? "+" : ""}${scoreDiff}%</td></tr>
        </table>
        <h2>Working At &amp; Predicted Grades</h2>
        <table>
          <tr><th>Subject</th><th>Working At</th><th>Predicted</th></tr>
          ${report.projectedGrades.map((g) => `<tr><td>${e(g.subject)}</td><td>Grade ${e(g.workingAt)}</td><td>Grade ${e(g.predicted)}</td></tr>`).join("")}
        </table>
        <h2>Strengths</h2>
        <ul>${report.strengths.map((s) => `<li>${e(s)}</li>`).join("")}</ul>
        <h2>Areas for Improvement</h2>
        <ul>${report.improvements.map((s) => `<li>${e(s)}</li>`).join("")}</ul>
        <h2>Recommendations</h2>
        <ol>${report.recommendations.map((s) => `<li>${e(s)}</li>`).join("")}</ol>`;
      openPrintableDocument(`Weekly Report: ${report.studentName}`, body, {
        subtitle: `Week of ${report.weekStart} to ${report.weekEnd}`,
      });
    } finally {
      setDownloadingId(null);
    }
  }

  return (
    <div className="space-y-8">
      {/* ── Header ───────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary sm:text-3xl">
            Weekly Reports
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            View detailed weekly progress reports for your child.
          </p>
        </div>

        {MOCK_STUDENTS.length > 1 && (
          <select
            value={selectedStudent}
            onChange={(e) => {
              setSelectedStudent(e.target.value);
              setExpandedReport(null);
            }}
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

      {/* ── Reports list ─────────────────────────────────────── */}
      {reports.length === 0 ? (
        <div className="card text-center py-12">
          <CalendarIcon className="mx-auto h-10 w-10 text-muted-foreground" />
          <p className="mt-4 text-muted-foreground">No reports available yet.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Weekly reports are generated automatically every week.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {reports.map((report) => {
            const isExpanded = expandedReport === report.id;
            const scoreDiff = report.averageScore - report.previousWeekScore;

            return (
              <div key={report.id} className="card">
                {/* ── Collapsed header ─────────────────────── */}
                <button
                  type="button"
                  onClick={() => setExpandedReport(isExpanded ? null : report.id)}
                  className="flex w-full items-center justify-between text-left"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Week of {formatWeekRange(report.weekStart, report.weekEnd)}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {report.essaysCompleted} essay{report.essaysCompleted !== 1 ? "s" : ""} &middot;{" "}
                        {formatTime(report.timeSpentMinutes)} &middot;{" "}
                        Avg {report.averageScore}%{" "}
                        <span className={scoreDiff >= 0 ? "text-success" : "text-warn"}>
                          ({scoreDiff >= 0 ? "+" : ""}{scoreDiff}%)
                        </span>
                      </p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUpIcon className="h-5 w-5 shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 shrink-0 text-muted-foreground" />
                  )}
                </button>

                {/* ── Expanded detail ──────────────────────── */}
                {isExpanded && (
                  <div className="mt-6 space-y-6 border-t border-border pt-6">
                    {/* Summary stats */}
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-lg bg-primary/10 px-4 py-3 text-center">
                        <p className="text-2xl font-bold text-primary">{report.essaysCompleted}</p>
                        <p className="text-xs text-primary">Essays Completed</p>
                      </div>
                      <div className="rounded-lg bg-primary/10 px-4 py-3 text-center">
                        <p className="text-2xl font-bold text-accent">{formatTime(report.timeSpentMinutes)}</p>
                        <p className="text-xs text-primary">Time on Platform</p>
                      </div>
                      <div className="rounded-lg bg-success-50 px-4 py-3 text-center">
                        <p className="text-2xl font-bold text-success">{report.averageScore}%</p>
                        <p className="text-xs text-success-600">
                          Average Score{" "}
                          <span className={scoreDiff >= 0 ? "text-success-700" : "text-warn"}>
                            ({scoreDiff >= 0 ? "+" : ""}{scoreDiff}%)
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Working At & Predicted grades */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Working At &amp; Predicted Grades</h4>
                      <div className="mt-2 space-y-2">
                        {report.projectedGrades.map((g, i) => (
                          <div key={i} className="flex items-center justify-between rounded-lg border border-border px-4 py-2">
                            <span className="text-sm text-foreground">{g.subject}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-muted-foreground">Working At:</span>
                              <span className="font-bold text-primary">Grade {g.workingAt}</span>
                              <span className="text-xs text-muted-foreground">Predicted:</span>
                              <span className="font-bold text-primary">Grade {g.predicted}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Strengths */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Top Strengths</h4>
                      <ul className="mt-2 space-y-2">
                        {report.strengths.map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <svg className="mt-0.5 h-4 w-4 shrink-0 text-success" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Areas for improvement */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Areas for Improvement</h4>
                      <ul className="mt-2 space-y-2">
                        {report.improvements.map((imp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <svg className="mt-0.5 h-4 w-4 shrink-0 text-warn" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            {imp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Recommendations */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Recommended Next Steps</h4>
                      <ul className="mt-2 space-y-2">
                        {report.recommendations.map((rec, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Download PDF button */}
                    <div className="flex justify-end border-t border-border pt-4">
                      <button
                        type="button"
                        onClick={() => handleDownloadPdf(report)}
                        disabled={downloadingId === report.id}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-background disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                      >
                        <DownloadIcon className="h-4 w-4" />
                        {downloadingId === report.id ? "Generating..." : "Download as PDF"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
