"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { percentageToGCSEGrade, percentageToGCSEGradeLabel, gcseGradeColor, predictedGradeColor, formatReadingAge } from "@/lib/grades";
import GradeProgressCard from "@/components/GradeProgressCard";
import { toast } from "sonner";
import { DEMO_STUDENTS } from "@/data/demo-data";

function scoreToGrade(score: number): string {
  return String(percentageToGCSEGrade(score));
}

function gradeColor(grade: string): string {
  const num = parseInt(grade);
  if (num >= 8) return "text-teal-700 print:text-emerald-700";
  if (num >= 6) return "text-teal-700 print:text-blue-700";
  if (num >= 4) return "text-amber-400 print:text-amber-700";
  return "text-red-400 print:text-red-700";
}

function statusLabel(status: string): string {
  switch (status) {
    case "excelling":
    case "Excelling":
      return "Above Expected";
    case "on-track":
    case "On Track":
      return "Meeting Expected";
    case "needs-support":
    case "Needs Support":
      return "Below Expected";
    case "at-risk":
    case "At Risk":
      return "Well Below Expected";
    default:
      return status;
  }
}

function statusDot(status: string): string {
  switch (status) {
    case "excelling":
    case "Excelling":
      return "bg-teal-600 print:bg-teal-800";
    case "on-track":
    case "On Track":
      return "bg-blue-400 print:bg-teal-800";
    case "needs-support":
    case "Needs Support":
      return "bg-amber-400 print:bg-amber-600";
    case "at-risk":
    case "At Risk":
      return "bg-red-400 print:bg-red-600";
    default:
      return "bg-neutral-400";
  }
}

function getScoreTrend(scores: number[]): { label: string; description: string } {
  if (scores.length < 2) return { label: "Insufficient Data", description: "Not enough assessment data to determine a trend." };
  const firstHalf = scores.slice(0, Math.ceil(scores.length / 2));
  const secondHalf = scores.slice(Math.ceil(scores.length / 2));
  const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
  const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
  const diff = secondAvg - firstAvg;
  if (diff > 5) return { label: "Improving", description: `Scores have improved by an average of ${Math.round(diff)} percentage points across recent assessments, indicating strong upward momentum.` };
  if (diff < -5) return { label: "Declining", description: `Scores have dropped by an average of ${Math.round(Math.abs(diff))} percentage points across recent assessments. Intervention may be required.` };
  return { label: "Stable", description: "Scores have remained consistent across recent assessments. Encourage continued effort and targeted practice to push for improvement." };
}

export default function StudentReportPage() {
  const params = useParams();
  const student = DEMO_STUDENTS.find((s) => s.id === params.id);
  const [teacherNotes, setTeacherNotes] = useState("");

  if (!student) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-ink-600">Student Not Found</h2>
          <p className="mt-2 text-ink-600">No student exists with this identifier.</p>
          <Link
            href="/demo/school/reports"
            className="mt-4 inline-block text-teal-700 hover:underline"
          >
            Back to Reports
          </Link>
        </div>
      </div>
    );
  }

  const overallGrade = scoreToGrade(student.averageScore);
  const completionPct = Math.round(
    (student.assignmentsCompleted / student.assignmentsTotal) * 100
  );
  const avgQuizPct =
    student.quizAttempts.length > 0
      ? Math.round(
          student.quizAttempts.reduce((sum, q) => sum + (q.score / q.maxScore) * 100, 0) /
            student.quizAttempts.length
        )
      : 0;

  // Combine all assessment results into one sorted table
  const allAssessments = [
    ...student.mockExams.map((m) => ({
      name: m.name,
      type: "Mock Exam" as const,
      score: m.score,
      grade: m.grade,
      date: m.date,
    })),
    ...student.essays.map((e) => ({
      name: e.title,
      type: "Essay" as const,
      score: e.score,
      grade: scoreToGrade(e.score),
      date: e.date,
    })),
    ...student.quizAttempts.map((q) => ({
      name: q.quiz,
      type: "Quiz" as const,
      score: Math.round((q.score / q.maxScore) * 100),
      grade: scoreToGrade(Math.round((q.score / q.maxScore) * 100)),
      date: q.date,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const scoreTrend = getScoreTrend(student.recentScores);

  return (
    <>
      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 15mm 12mm;
          }
          body {
            background: white !important;
            color: black !important;
            font-size: 11pt;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          nav, aside, header, footer,
          [data-sidebar], [data-topbar], [role="navigation"],
          .no-print {
            display: none !important;
          }
          .print-container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .report-card {
            background: white !important;
            border: 1px solid #d1d5db !important;
            box-shadow: none !important;
            break-inside: avoid;
          }
          .report-header {
            background: white !important;
            border-bottom: 2px solid #1e3a5f !important;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid #d1d5db;
            padding: 6px 10px;
            text-align: left;
          }
          th {
            background: #f3f4f6 !important;
            font-weight: 600;
          }
          * {
            color: black !important;
          }
          .print-grade {
            color: inherit !important;
          }
          .print-page-break {
            page-break-before: always;
          }
        }
      `}</style>

      <div className="print-container px-4 py-8 space-y-6">
        {/* Action Bar */}
        <div className="no-print flex items-center justify-between mb-4">
          <Link
            href="/demo/school/reports"
            className="text-sm text-ink-600 hover:text-ink-600 flex items-center gap-1"
          >
            <span>&larr;</span> Back to Reports
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                toast.success("Secure link generated", {
                  description: "In production, this sends a secure, time-limited link to the student's parents/carers via email. They can view the report without needing an account.",
                });
              }}
              className="px-5 py-2.5 bg-teal-800 hover:bg-teal-800 text-white rounded-lg font-medium text-sm transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Share with Parents
            </button>
            <button
              onClick={() => window.print()}
              className="px-5 py-2.5 bg-teal-800 hover:bg-teal-700 text-white rounded-lg font-medium text-sm transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" /></svg>
              Download PDF
            </button>
          </div>
        </div>

        {/* Report Header */}
        <div className="report-header bg-cream-100 border border-ink-200 rounded-xl p-8 print:rounded-none">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-medium text-ink-600 print:text-ink-500 uppercase tracking-wider mb-1">
                The English Hub
              </div>
              <h1 className="text-2xl font-bold text-neutral-100 print:text-black">
                Student Progress Report
              </h1>
            </div>
            <div className="text-right text-sm text-ink-600 print:text-ink-500">
              <div className="w-16 h-16 border-2 border-dashed border-ink-200 print:border-neutral-400 rounded-lg flex items-center justify-center text-[10px] text-ink-500 print:text-ink-500 mb-1 font-medium">
                LOGO
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-ink-500 print:text-ink-500">Student:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">{student.name}</span>
            </div>
            <div>
              <span className="text-ink-500 print:text-ink-500">Year Group:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">{student.yearGroup}</span>
            </div>
            <div>
              <span className="text-ink-500 print:text-ink-500">Class:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">{student.className}</span>
            </div>
            <div>
              <span className="text-ink-500 print:text-ink-500">Teacher:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">{student.teacherName}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-ink-200 print:border-neutral-300 flex items-center justify-between text-sm">
            <div>
              <span className="text-ink-500 print:text-ink-500">Reporting Period:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">Autumn Term 2025-2026</span>
            </div>
            <div>
              <span className="text-ink-500 print:text-ink-500">Date Issued:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">
                {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </div>
          </div>
        </div>

        {/* Grade Progress Card */}
        <div className="report-card bg-cream-100 border border-ink-200 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Grade Summary
          </h2>
          <GradeProgressCard
            currentGrade={student.workingAtGrade}
            predictedGrade={student.predictedGrade}
            targetGrade={student.targetGrade}
            trend={scoreTrend.label === "Improving" ? "up" : scoreTrend.label === "Declining" ? "down" : "stable"}
          />
          {student.readingAge && (
            <div className="mt-3 text-sm text-ink-600 print:text-ink-500">
              Reading Age: <span className="font-semibold text-ink-600 print:text-black">{formatReadingAge(student.readingAge)}</span>
            </div>
          )}
        </div>

        {/* KPI Summary */}
        <div className="report-card bg-cream-100 border border-ink-200 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Overall Assessment
          </h2>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className={`text-5xl font-bold ${gradeColor(String(student.workingAtGrade))}`}>
                {student.workingAtGrade}
              </div>
              <div className="text-xs text-ink-500 print:text-ink-500 mt-1">
                Working At Grade
              </div>
            </div>
            <div className="flex-1 grid grid-cols-4 gap-3 text-sm">
              <div className="bg-cream-100/50 print:bg-neutral-100 rounded-lg p-3 text-center">
                <div className={`text-2xl font-bold ${predictedGradeColor(student.predictedGrade, student.workingAtGrade)}`}>
                  Grade {student.predictedGrade}
                </div>
                <div className="text-ink-500 print:text-ink-500 text-xs mt-1">
                  Predicted Grade
                </div>
              </div>
              <div className="bg-cream-100/50 print:bg-neutral-100 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-teal-700 print:text-violet-700">
                  Grade {student.targetGrade}
                </div>
                <div className="text-ink-500 print:text-ink-500 text-xs mt-1">
                  Target Grade
                </div>
              </div>
              <div className="bg-cream-100/50 print:bg-neutral-100 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-neutral-100 print:text-black">
                  {completionPct}%
                </div>
                <div className="text-ink-500 print:text-ink-500 text-xs mt-1">
                  Work Completed
                </div>
              </div>
              <div className="bg-cream-100/50 print:bg-neutral-100 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1.5">
                  <span className={`inline-block size-2.5 rounded-full ${statusDot(student.status)}`} />
                  <span className="text-sm font-semibold text-neutral-100 print:text-black">
                    {statusLabel(student.status)}
                  </span>
                </div>
                <div className="text-ink-500 print:text-ink-500 text-xs mt-1">
                  Current Standing
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assessment Results Table */}
        <div className="report-card bg-cream-100 border border-ink-200 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Assessment Results
          </h2>
          {allAssessments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-cream-100 print:bg-neutral-200">
                    <th className="text-left px-3 py-2.5 font-semibold text-ink-600 print:text-black rounded-tl-lg print:rounded-none">
                      Assessment
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-ink-600 print:text-black">
                      Type
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-ink-600 print:text-black">
                      Date
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-ink-600 print:text-black">
                      Score
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-ink-600 print:text-black rounded-tr-lg print:rounded-none">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allAssessments.map((a, i) => (
                    <tr
                      key={`${a.name}-${i}`}
                      className={i % 2 === 0 ? "bg-cream-100 print:bg-white" : "bg-white print:bg-neutral-50"}
                    >
                      <td className="px-3 py-2.5 text-ink-600 print:text-black font-medium">
                        {a.name}
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <span
                          className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${
                            a.type === "Mock Exam"
                              ? "bg-teal-700/15 text-teal-700 print:bg-teal-100 print:text-violet-700"
                              : a.type === "Essay"
                              ? "bg-teal-700/15 text-teal-700 print:bg-teal-100 print:text-violet-600"
                              : "bg-teal-800/10 text-teal-700/80 print:bg-teal-50 print:text-violet-600"
                          }`}
                        >
                          {a.type}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-center text-ink-600 print:text-ink-500">
                        {a.date}
                      </td>
                      <td className="px-3 py-2.5 text-center text-ink-600 print:text-black font-medium">
                        G{percentageToGCSEGrade(a.score)}
                      </td>
                      <td className={`px-3 py-2.5 text-center font-bold ${gradeColor(a.grade)}`}>
                        {a.grade}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm text-ink-600 print:text-ink-500 italic">
              No assessment results available yet.
            </p>
          )}
        </div>

        {/* Score Trend */}
        <div className="report-card bg-cream-100 border border-ink-200 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
            Score Trend
          </h2>
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full ${
                scoreTrend.label === "Improving"
                  ? "bg-teal-800/10 text-teal-700 print:bg-teal-50 print:text-emerald-700"
                  : scoreTrend.label === "Declining"
                  ? "bg-red-500/15 text-red-400 print:bg-red-100 print:text-red-700"
                  : "bg-blue-500/15 text-teal-700 print:bg-blue-100 print:text-blue-700"
              }`}
            >
              {scoreTrend.label === "Improving" && (
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              )}
              {scoreTrend.label === "Declining" && (
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
              )}
              {scoreTrend.label === "Stable" && (
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg>
              )}
              {scoreTrend.label}
            </span>
          </div>
          <p className="text-sm text-ink-600 print:text-black leading-relaxed">
            {scoreTrend.description}
          </p>
          {student.recentScores.length > 0 && (
            <div className="mt-4 flex items-end gap-2 h-24">
              {student.recentScores.map((score, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-ink-500 print:text-ink-500 font-medium">G{percentageToGCSEGrade(score)}</span>
                  <div className="w-full bg-cream-100 print:bg-neutral-200 rounded-t relative" style={{ height: "70px" }}>
                    <div
                      className={`absolute bottom-0 left-0 right-0 rounded-t transition-all ${
                        score >= 70 ? "bg-teal-700 print:bg-teal-800" : score >= 50 ? "bg-amber-500 print:bg-amber-600" : "bg-red-500 print:bg-red-600"
                      }`}
                      style={{ height: `${(score / 100) * 70}px` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Module Progress */}
        <div className="report-card bg-cream-100 border border-ink-200 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Module Progress
          </h2>
          <div className="space-y-3">
            {student.modules.map((mod) => {
              const pct = mod.progress ?? (mod.status === "Complete" ? 100 : mod.status === "In Progress" ? 50 : 0);
              return (
                <div key={mod.name} className="flex items-center gap-4">
                  <span className="text-sm text-ink-600 print:text-black w-44 shrink-0 font-medium">{mod.name}</span>
                  <div className="flex-1 bg-cream-100 print:bg-neutral-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        (mod.score || 0) >= 70 ? "bg-teal-700 print:bg-teal-800" : (mod.score || 0) >= 50 ? "bg-amber-500 print:bg-amber-600" : "bg-red-500 print:bg-red-600"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-sm text-ink-600 print:text-black w-12 text-right font-semibold">
                    {mod.score > 0 ? percentageToGCSEGradeLabel(mod.score) : "--"}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium w-24 text-center ${
                      mod.status === "Complete"
                        ? "bg-teal-800/10 text-teal-700 print:bg-teal-50 print:text-emerald-700"
                        : mod.status === "In Progress"
                        ? "bg-blue-500/15 text-teal-700 print:bg-blue-100 print:text-blue-700"
                        : "bg-ink-200/15 text-ink-600 print:bg-neutral-200 print:text-ink-500"
                    }`}
                  >
                    {mod.status || "Not Started"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strengths */}
        <div className="report-card bg-cream-100 border border-ink-200 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
            Strengths
          </h2>
          <p className="text-sm text-ink-600 print:text-black leading-relaxed">
            {student.name} demonstrates strong ability in{" "}
            {student.strengths.map((s) => (typeof s === "string" ? s : s.name).toLowerCase()).join(", ")}.
            {student.strengths.length > 0 && (() => {
              const first = student.strengths[0]
              const firstName = typeof first === "string" ? first : first.name
              const firstScore = typeof first === "string" ? null : first.score
              return (
              <> Their highest-performing area is{" "}
              <strong className="text-neutral-100 print:text-black">
                {firstName}
              </strong>
              {firstScore !== null && <> with a score of {firstScore}%</>}.
              {student.status === "excelling" &&
                " This student is performing above expectations and should be encouraged to pursue extension activities."}
              {student.status === "on-track" &&
                " Continued effort in these areas will help maintain strong progress."}
              </>
              )
            })()}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {student.strengths.map((s) => {
              const sName = typeof s === "string" ? s : s.name
              const sScore = typeof s === "string" ? null : s.score
              return (
              <span
                key={sName}
                className="text-xs px-2.5 py-1 rounded-full bg-teal-800/10 text-teal-700 border border-teal-800/20 print:bg-teal-50 print:text-emerald-700 print:border-emerald-300"
              >
                {sName}{sScore !== null && <>: {sScore}%</>}
              </span>
              )
            })}
          </div>
        </div>

        {/* Areas for Development */}
        <div className="report-card bg-cream-100 border border-ink-200 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
            Areas for Development
          </h2>
          <p className="text-sm text-ink-600 print:text-black leading-relaxed">
            {student.weaknesses.length > 0 ? (
              <>
                To improve further, {student.name} should focus on developing{" "}
                {student.weaknesses.map((w) => (typeof w === "string" ? w : w.name).toLowerCase()).join(", ")}.
                {" "}The area requiring most attention is{" "}
                {(() => {
                  const last = student.weaknesses[student.weaknesses.length - 1]
                  const lastName = typeof last === "string" ? last : last.name
                  const lastScore = typeof last === "string" ? null : last.score
                  return (
                    <>
                      <strong className="text-neutral-100 print:text-black">
                        {lastName}
                      </strong>
                      {lastScore !== null && <> (currently at {lastScore}%)</>}
                    </>
                  )
                })()}.
                {student.status === "at-risk" &&
                  " Immediate intervention and additional support are strongly recommended."}
                {student.status === "needs-support" &&
                  " Targeted support in these areas will help close the gap with expected standards."}
              </>
            ) : (
              <>{student.name} is performing well across all assessed areas. Continue to challenge with extension work.</>
            )}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {student.weaknesses.map((w) => {
              const wName = typeof w === "string" ? w : w.name
              const wScore = typeof w === "string" ? null : w.score
              return (
              <span
                key={wName}
                className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 print:bg-amber-50 print:text-amber-700 print:border-amber-300"
              >
                {wName}{wScore !== null && <>: {wScore}%</>}
              </span>
              )
            })}
          </div>
        </div>

        {/* Attendance & Engagement */}
        <div className="report-card bg-cream-100 border border-ink-200 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Attendance &amp; Engagement
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-cream-100/50 print:bg-neutral-100 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-neutral-100 print:text-black">
                {student.assignmentsCompleted}/{student.assignmentsTotal}
              </div>
              <div className="text-ink-500 print:text-ink-500 text-xs mt-1">
                Assignments Submitted
              </div>
            </div>
            <div className="bg-cream-100/50 print:bg-neutral-100 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-neutral-100 print:text-black">
                {student.modulesCompleted}/{student.modules.length}
              </div>
              <div className="text-ink-500 print:text-ink-500 text-xs mt-1">
                Modules Completed
              </div>
            </div>
            <div className="bg-cream-100/50 print:bg-neutral-100 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-neutral-100 print:text-black">
                {student.quizAttempts.length}
              </div>
              <div className="text-ink-500 print:text-ink-500 text-xs mt-1">
                Quizzes Attempted
              </div>
            </div>
            <div className="bg-cream-100/50 print:bg-neutral-100 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-neutral-100 print:text-black">
                {avgQuizPct}%
              </div>
              <div className="text-ink-500 print:text-ink-500 text-xs mt-1">
                Avg Quiz Score
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Next Steps */}
        <div className="report-card bg-cream-100 border border-ink-200 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
            Recommended Next Steps
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-ink-600 print:text-black">
            {student.recommendations.map((rec, i) => (
              <li key={i} className="leading-relaxed pl-1">
                {rec}
              </li>
            ))}
          </ol>
        </div>

        {/* Teacher Comment */}
        <div className="report-card bg-cream-100 border border-ink-200 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
            Teacher Notes
          </h2>
          <div className="bg-cream-100/50 print:bg-neutral-50 rounded-lg p-4 border border-ink-200 print:border-neutral-300">
            <p className="text-sm text-ink-600 print:text-black leading-relaxed italic">
              &quot;{student.name} has shown{" "}
              {student.status === "excelling"
                ? "exceptional dedication and consistently outstanding work this term. Their contributions to class discussions and written assignments are of the highest calibre."
                : student.status === "on-track"
                ? "steady progress throughout the term with a positive attitude towards learning. They engage well in lessons and are developing their analytical skills effectively."
                : student.status === "needs-support"
                ? "some progress this term but would benefit from more consistent engagement with homework and revision activities. I would encourage more regular reading and practice of written skills."
                : "potential in class discussions but this is not yet reflected in their written work. Consistent attendance, completion of set work, and engagement with support sessions are essential to make progress."}
              &quot;
            </p>
            <p className="text-sm text-ink-600 print:text-ink-500 mt-3 text-right">
              -- {student.teacherName}, {student.className}
            </p>
          </div>
        </div>

        {/* Previous Reports */}
        <div className="no-print report-card bg-cream-100 border border-ink-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-100 mb-4 flex items-center gap-2">
            <svg className="h-5 w-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Previous Reports
          </h2>
          <p className="text-xs text-ink-500 mb-4">
            In the full product, all previously generated reports are archived and accessible here.
          </p>
          <div className="space-y-2">
            {[
              { date: "4 April 2026", term: "Spring Term 2025-26", type: "Progress Report" },
              { date: "13 December 2025", term: "Autumn Term 2025-26", type: "Progress Report" },
              { date: "18 July 2025", term: "Summer Term 2024-25", type: "End of Year Report" },
              { date: "28 March 2025", term: "Spring Term 2024-25", type: "Progress Report" },
              { date: "15 December 2024", term: "Autumn Term 2024-25", type: "Progress Report" },
            ].map((report) => (
              <div
                key={report.date}
                className="flex items-center justify-between bg-cream-100/50 rounded-lg px-4 py-3 text-sm"
              >
                <div className="flex items-center gap-3">
                  <svg className="h-4 w-4 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <div>
                    <span className="text-ink-600 font-medium">{report.type}</span>
                    <span className="text-ink-500 ml-2">-- {report.term}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-ink-500 text-xs">{report.date}</span>
                  <button
                    onClick={() => toast.info("In the full product, this would open the archived report PDF.")}
                    className="text-teal-700 hover:text-blue-300 text-xs font-medium"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Teacher Notes */}
        <div className="no-print report-card bg-cream-100 border border-ink-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-100 mb-2 flex items-center gap-2">
            <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            Add Teacher Notes
          </h2>
          <p className="text-xs text-ink-500 mb-3">
            Add additional notes for this report. In the full product, notes are saved and included in the exported PDF.
          </p>
          <textarea
            value={teacherNotes}
            onChange={(e) => setTeacherNotes(e.target.value)}
            placeholder="Add any additional observations, context, or notes about this student's progress..."
            className="w-full bg-cream-100/50 border border-ink-200 rounded-lg p-4 text-sm text-ink-600 placeholder:text-ink-500 focus:outline-none focus:border-blue-500/50 resize-y min-h-[100px]"
            rows={4}
          />
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-ink-500">
              {teacherNotes.length > 0 ? `${teacherNotes.length} characters` : "No notes added"}
            </span>
            <button
              onClick={() => {
                if (teacherNotes.trim()) {
                  toast.success("Notes saved", {
                    description: "In the full product, these notes would be saved and included in future report exports.",
                  });
                } else {
                  toast.info("No notes to save. Type your notes in the box above.");
                }
              }}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium text-xs transition-colors"
            >
              Save Notes
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-ink-500 print:text-ink-500 pt-4 border-t border-ink-200 print:border-neutral-300">
          <p>
            The English Hub -- Student Progress Report -- Confidential
          </p>
          <p className="mt-1">
            Generated on{" "}
            {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            . This report is based on assessments completed during the Autumn Term 2025-2026.
          </p>
        </div>

        {/* Bottom Download Button */}
        <div className="no-print text-center pt-2">
          <button
            onClick={() => window.print()}
            className="px-5 py-2.5 bg-teal-800 hover:bg-teal-700 text-white rounded-lg font-medium text-sm transition-colors flex items-center gap-2 mx-auto"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" /></svg>
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
}
