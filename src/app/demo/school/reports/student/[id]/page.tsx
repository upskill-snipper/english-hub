"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { DEMO_STUDENTS } from "@/data/demo-data";

function scoreToGrade(score: number): string {
  if (score >= 90) return "A*";
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  if (score >= 40) return "E";
  return "U";
}

function gradeColor(grade: string): string {
  if (grade === "A*" || grade === "A") return "text-emerald-400 print:text-emerald-700";
  if (grade === "B") return "text-blue-400 print:text-blue-700";
  if (grade === "C") return "text-amber-400 print:text-amber-700";
  if (grade === "D") return "text-orange-400 print:text-orange-700";
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
      return "bg-emerald-400 print:bg-emerald-600";
    case "on-track":
    case "On Track":
      return "bg-blue-400 print:bg-blue-600";
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

  if (!student) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-neutral-200">Student Not Found</h2>
          <p className="mt-2 text-neutral-400">No student exists with this identifier.</p>
          <Link
            href="/demo/school/reports"
            className="mt-4 inline-block text-blue-400 hover:underline"
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

      <div className="print-container max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Action Bar */}
        <div className="no-print flex items-center justify-between mb-4">
          <Link
            href="/demo/school/reports"
            className="text-sm text-neutral-400 hover:text-neutral-200 flex items-center gap-1"
          >
            <span>&larr;</span> Back to Reports
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" /></svg>
              Download PDF
            </button>
          </div>
        </div>

        {/* Report Header */}
        <div className="report-header bg-neutral-900 border border-neutral-800 rounded-xl p-8 print:rounded-none">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-medium text-neutral-400 print:text-neutral-600 uppercase tracking-wider mb-1">
                The English Hub
              </div>
              <h1 className="text-2xl font-bold text-neutral-100 print:text-black">
                Student Progress Report
              </h1>
            </div>
            <div className="text-right text-sm text-neutral-400 print:text-neutral-600">
              <div className="w-16 h-16 border-2 border-dashed border-neutral-700 print:border-neutral-400 rounded-lg flex items-center justify-center text-[10px] text-neutral-500 print:text-neutral-500 mb-1 font-medium">
                LOGO
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-neutral-500 print:text-neutral-600">Student:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">{student.name}</span>
            </div>
            <div>
              <span className="text-neutral-500 print:text-neutral-600">Year Group:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">{student.yearGroup}</span>
            </div>
            <div>
              <span className="text-neutral-500 print:text-neutral-600">Class:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">{student.className}</span>
            </div>
            <div>
              <span className="text-neutral-500 print:text-neutral-600">Teacher:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">{student.teacherName}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-800 print:border-neutral-300 flex items-center justify-between text-sm">
            <div>
              <span className="text-neutral-500 print:text-neutral-600">Reporting Period:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">Autumn Term 2025-2026</span>
            </div>
            <div>
              <span className="text-neutral-500 print:text-neutral-600">Date Issued:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">
                {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </div>
          </div>
        </div>

        {/* KPI Summary */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Overall Assessment
          </h2>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className={`text-5xl font-bold ${gradeColor(overallGrade)}`}>
                {overallGrade}
              </div>
              <div className="text-xs text-neutral-500 print:text-neutral-600 mt-1">
                Predicted Grade
              </div>
            </div>
            <div className="flex-1 grid grid-cols-4 gap-3 text-sm">
              <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-neutral-100 print:text-black">
                  {student.averageScore}%
                </div>
                <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                  Average Score
                </div>
              </div>
              <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-neutral-100 print:text-black">
                  {student.overallProgress}%
                </div>
                <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                  Progress
                </div>
              </div>
              <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-neutral-100 print:text-black">
                  {completionPct}%
                </div>
                <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                  Work Completed
                </div>
              </div>
              <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1.5">
                  <span className={`inline-block size-2.5 rounded-full ${statusDot(student.status)}`} />
                  <span className="text-sm font-semibold text-neutral-100 print:text-black">
                    {statusLabel(student.status)}
                  </span>
                </div>
                <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                  Current Standing
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assessment Results Table */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Assessment Results
          </h2>
          {allAssessments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-800 print:bg-neutral-200">
                    <th className="text-left px-3 py-2.5 font-semibold text-neutral-300 print:text-black rounded-tl-lg print:rounded-none">
                      Assessment
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                      Type
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                      Date
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                      Score
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black rounded-tr-lg print:rounded-none">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allAssessments.map((a, i) => (
                    <tr
                      key={`${a.name}-${i}`}
                      className={i % 2 === 0 ? "bg-neutral-900 print:bg-white" : "bg-neutral-850 print:bg-neutral-50"}
                    >
                      <td className="px-3 py-2.5 text-neutral-200 print:text-black font-medium">
                        {a.name}
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <span
                          className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${
                            a.type === "Mock Exam"
                              ? "bg-violet-500/15 text-violet-400 print:bg-violet-100 print:text-violet-700"
                              : a.type === "Essay"
                              ? "bg-blue-500/15 text-blue-400 print:bg-blue-100 print:text-blue-700"
                              : "bg-cyan-500/15 text-cyan-400 print:bg-cyan-100 print:text-cyan-700"
                          }`}
                        >
                          {a.type}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-center text-neutral-400 print:text-neutral-600">
                        {a.date}
                      </td>
                      <td className="px-3 py-2.5 text-center text-neutral-300 print:text-black font-medium">
                        {a.score}%
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
            <p className="text-sm text-neutral-400 print:text-neutral-600 italic">
              No assessment results available yet.
            </p>
          )}
        </div>

        {/* Score Trend */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
            Score Trend
          </h2>
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full ${
                scoreTrend.label === "Improving"
                  ? "bg-emerald-500/15 text-emerald-400 print:bg-emerald-100 print:text-emerald-700"
                  : scoreTrend.label === "Declining"
                  ? "bg-red-500/15 text-red-400 print:bg-red-100 print:text-red-700"
                  : "bg-blue-500/15 text-blue-400 print:bg-blue-100 print:text-blue-700"
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
          <p className="text-sm text-neutral-300 print:text-black leading-relaxed">
            {scoreTrend.description}
          </p>
          {student.recentScores.length > 0 && (
            <div className="mt-4 flex items-end gap-2 h-24">
              {student.recentScores.map((score, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-neutral-500 print:text-neutral-600 font-medium">{score}%</span>
                  <div className="w-full bg-neutral-800 print:bg-neutral-200 rounded-t relative" style={{ height: "70px" }}>
                    <div
                      className={`absolute bottom-0 left-0 right-0 rounded-t transition-all ${
                        score >= 70 ? "bg-emerald-500 print:bg-emerald-600" : score >= 50 ? "bg-amber-500 print:bg-amber-600" : "bg-red-500 print:bg-red-600"
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
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Module Progress
          </h2>
          <div className="space-y-3">
            {student.modules.map((mod) => {
              const pct = mod.progress ?? (mod.status === "Complete" ? 100 : mod.status === "In Progress" ? 50 : 0);
              return (
                <div key={mod.name} className="flex items-center gap-4">
                  <span className="text-sm text-neutral-300 print:text-black w-44 shrink-0 font-medium">{mod.name}</span>
                  <div className="flex-1 bg-neutral-800 print:bg-neutral-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        (mod.score || 0) >= 70 ? "bg-emerald-500 print:bg-emerald-600" : (mod.score || 0) >= 50 ? "bg-amber-500 print:bg-amber-600" : "bg-red-500 print:bg-red-600"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-sm text-neutral-300 print:text-black w-12 text-right font-semibold">
                    {mod.score > 0 ? `${mod.score}%` : "--"}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium w-24 text-center ${
                      mod.status === "Complete"
                        ? "bg-emerald-500/15 text-emerald-400 print:bg-emerald-100 print:text-emerald-700"
                        : mod.status === "In Progress"
                        ? "bg-blue-500/15 text-blue-400 print:bg-blue-100 print:text-blue-700"
                        : "bg-neutral-500/15 text-neutral-400 print:bg-neutral-200 print:text-neutral-600"
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
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
            Strengths
          </h2>
          <p className="text-sm text-neutral-300 print:text-black leading-relaxed">
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
                className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 print:bg-emerald-50 print:text-emerald-700 print:border-emerald-300"
              >
                {sName}{sScore !== null && <>: {sScore}%</>}
              </span>
              )
            })}
          </div>
        </div>

        {/* Areas for Development */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
            Areas for Development
          </h2>
          <p className="text-sm text-neutral-300 print:text-black leading-relaxed">
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
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Attendance &amp; Engagement
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-neutral-100 print:text-black">
                {student.assignmentsCompleted}/{student.assignmentsTotal}
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                Assignments Submitted
              </div>
            </div>
            <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-neutral-100 print:text-black">
                {student.modulesCompleted}/{student.modules.length}
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                Modules Completed
              </div>
            </div>
            <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-neutral-100 print:text-black">
                {student.quizAttempts.length}
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                Quizzes Attempted
              </div>
            </div>
            <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-neutral-100 print:text-black">
                {avgQuizPct}%
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                Avg Quiz Score
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Next Steps */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
            Recommended Next Steps
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300 print:text-black">
            {student.recommendations.map((rec, i) => (
              <li key={i} className="leading-relaxed pl-1">
                {rec}
              </li>
            ))}
          </ol>
        </div>

        {/* Teacher Comment */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
            Teacher Notes
          </h2>
          <div className="bg-neutral-800/50 print:bg-neutral-50 rounded-lg p-4 border border-neutral-700 print:border-neutral-300">
            <p className="text-sm text-neutral-300 print:text-black leading-relaxed italic">
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
            <p className="text-sm text-neutral-400 print:text-neutral-600 mt-3 text-right">
              -- {student.teacherName}, {student.className}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-neutral-500 print:text-neutral-600 pt-4 border-t border-neutral-800 print:border-neutral-300">
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
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors flex items-center gap-2 mx-auto"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" /></svg>
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
}
