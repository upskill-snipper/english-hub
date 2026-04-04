"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { DEMO_CLASSES, DEMO_STUDENTS } from "@/data/demo-data";

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

function statusBadge(status: string): { label: string; cls: string } {
  switch (status) {
    case "excelling":
      return {
        label: "Excelling",
        cls: "bg-emerald-500/15 text-emerald-400 print:bg-emerald-100 print:text-emerald-700",
      };
    case "on-track":
      return {
        label: "On Track",
        cls: "bg-blue-500/15 text-blue-400 print:bg-blue-100 print:text-blue-700",
      };
    case "needs-support":
      return {
        label: "Needs Support",
        cls: "bg-amber-500/15 text-amber-400 print:bg-amber-100 print:text-amber-700",
      };
    case "at-risk":
      return {
        label: "At Risk",
        cls: "bg-red-500/15 text-red-400 print:bg-red-100 print:text-red-700",
      };
    default:
      return {
        label: status,
        cls: "bg-neutral-500/15 text-neutral-400",
      };
  }
}

export default function ClassReportPage() {
  const params = useParams();
  const cls = DEMO_CLASSES.find((c) => c.id === params.id);
  const students = DEMO_STUDENTS.filter((s) => s.classId === params.id);

  if (!cls) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-neutral-200">Class Not Found</h2>
          <p className="mt-2 text-neutral-400">No class exists with this identifier.</p>
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

  // --- Class statistics ---
  const classAvgScore =
    students.length > 0
      ? Math.round(students.reduce((sum, s) => sum + s.averageScore, 0) / students.length)
      : cls.avgScore;
  const classCompletionPct =
    students.length > 0
      ? Math.round(
          students.reduce(
            (sum, s) => sum + (s.assignmentsCompleted / s.assignmentsTotal) * 100,
            0
          ) / students.length
        )
      : cls.completionRate;

  const ragCounts = {
    excelling: students.filter((s) => s.status === "excelling").length,
    onTrack: students.filter((s) => s.status === "on-track").length,
    needsSupport: students.filter((s) => s.status === "needs-support").length,
    atRisk: students.filter((s) => s.status === "at-risk").length,
  };

  const sortedStudents = [...students].sort((a, b) => b.averageScore - a.averageScore);
  const topPerformers = sortedStudents.filter((s) => s.status === "excelling");
  const needingSupport = sortedStudents.filter(
    (s) => s.status === "needs-support" || s.status === "at-risk"
  );

  // School average (across all demo students)
  const allStudents = DEMO_STUDENTS;
  const schoolAvg =
    allStudents.length > 0
      ? Math.round(allStudents.reduce((sum, s) => sum + s.averageScore, 0) / allStudents.length)
      : 0;
  const classVsSchool = classAvgScore - schoolAvg;

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
            font-size: 10pt;
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
            padding: 5px 8px;
            text-align: left;
          }
          th {
            background: #f3f4f6 !important;
            font-weight: 600;
          }
          * {
            color: black !important;
          }
        }
      `}</style>

      <div className="print-container max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Print Button */}
        <div className="no-print flex items-center justify-between mb-4">
          <Link
            href="/demo/school/reports"
            className="text-sm text-neutral-400 hover:text-neutral-200 flex items-center gap-1"
          >
            <span>&larr;</span> Back to Reports
          </Link>
          <button
            onClick={() => window.print()}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors"
          >
            Print this Report
          </button>
        </div>

        {/* Report Header */}
        <div className="report-header bg-neutral-900 border border-neutral-800 rounded-xl p-8 print:rounded-none">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-medium text-neutral-400 print:text-neutral-600 uppercase tracking-wider mb-1">
                Riverside Academy
              </div>
              <h1 className="text-2xl font-bold text-neutral-100 print:text-black">
                Class Progress Report
              </h1>
            </div>
            <div className="text-right text-sm text-neutral-400 print:text-neutral-600">
              <div className="w-16 h-16 border-2 border-dashed border-neutral-700 print:border-neutral-400 rounded-lg flex items-center justify-center text-xs text-neutral-500 print:text-neutral-500 mb-1">
                LOGO
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-neutral-500 print:text-neutral-600">Class:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">{cls.name}</span>
            </div>
            <div>
              <span className="text-neutral-500 print:text-neutral-600">Teacher:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">{cls.teacher}</span>
            </div>
            <div>
              <span className="text-neutral-500 print:text-neutral-600">Year Group:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">{cls.yearGroup}</span>
            </div>
            <div>
              <span className="text-neutral-500 print:text-neutral-600">Exam Board:</span>{" "}
              <span className="text-neutral-100 print:text-black font-medium">{cls.examBoard}</span>
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

        {/* Class Statistics */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Class Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-neutral-100 print:text-black">
                {classAvgScore}%
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                Average Score
              </div>
            </div>
            <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-neutral-100 print:text-black">
                {classCompletionPct}%
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                Completion Rate
              </div>
            </div>
            <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-neutral-100 print:text-black">
                {students.length > 0 ? students.length : cls.studentCount}
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                Students
              </div>
            </div>
            <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-4 text-center">
              <div className={`text-2xl font-bold ${gradeColor(scoreToGrade(classAvgScore))}`}>
                {scoreToGrade(classAvgScore)}
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                Class Grade
              </div>
            </div>
          </div>

          {/* RAG Breakdown */}
          <div className="mt-5 pt-4 border-t border-neutral-800 print:border-neutral-300">
            <h3 className="text-sm font-medium text-neutral-300 print:text-black mb-3">
              RAG Breakdown
            </h3>
            <div className="grid grid-cols-4 gap-3 text-sm">
              <div className="flex items-center gap-2 bg-emerald-500/10 print:bg-emerald-50 rounded-lg px-3 py-2">
                <span className="size-3 rounded-full bg-emerald-400 print:bg-emerald-600" />
                <span className="text-neutral-300 print:text-black">
                  Excelling: <strong className="text-neutral-100 print:text-black">{ragCounts.excelling}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/10 print:bg-blue-50 rounded-lg px-3 py-2">
                <span className="size-3 rounded-full bg-blue-400 print:bg-blue-600" />
                <span className="text-neutral-300 print:text-black">
                  On Track: <strong className="text-neutral-100 print:text-black">{ragCounts.onTrack}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 bg-amber-500/10 print:bg-amber-50 rounded-lg px-3 py-2">
                <span className="size-3 rounded-full bg-amber-400 print:bg-amber-600" />
                <span className="text-neutral-300 print:text-black">
                  Needs Support: <strong className="text-neutral-100 print:text-black">{ragCounts.needsSupport}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 bg-red-500/10 print:bg-red-50 rounded-lg px-3 py-2">
                <span className="size-3 rounded-full bg-red-400 print:bg-red-600" />
                <span className="text-neutral-300 print:text-black">
                  At Risk: <strong className="text-neutral-100 print:text-black">{ragCounts.atRisk}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Student Results Table */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Student Results
          </h2>
          {students.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-800 print:bg-neutral-200">
                    <th className="text-left px-3 py-2.5 font-semibold text-neutral-300 print:text-black rounded-tl-lg print:rounded-none">
                      #
                    </th>
                    <th className="text-left px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                      Student
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                      Avg Score
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                      Grade
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                      Progress
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black rounded-tr-lg print:rounded-none">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedStudents.map((s, i) => {
                    const badge = statusBadge(s.status);
                    const grade = scoreToGrade(s.averageScore);
                    return (
                      <tr
                        key={s.id}
                        className={i % 2 === 0 ? "bg-neutral-900 print:bg-white" : "bg-neutral-850 print:bg-neutral-50"}
                      >
                        <td className="px-3 py-2.5 text-neutral-400 print:text-neutral-600">
                          {i + 1}
                        </td>
                        <td className="px-3 py-2.5 text-neutral-200 print:text-black font-medium">
                          {s.name}
                        </td>
                        <td className="px-3 py-2.5 text-center text-neutral-300 print:text-black">
                          {s.averageScore}%
                        </td>
                        <td className={`px-3 py-2.5 text-center font-semibold ${gradeColor(grade)}`}>
                          {grade}
                        </td>
                        <td className="px-3 py-2.5 text-center text-neutral-300 print:text-black">
                          {s.overallProgress}%
                        </td>
                        <td className="px-3 py-2.5 text-center">
                          <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${badge.cls}`}>
                            {badge.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm text-neutral-400 print:text-neutral-600 italic">
              No individual student data available for this class in the demo dataset.
              Class-level statistics are shown above based on aggregate data.
            </p>
          )}
        </div>

        {/* Top Performers */}
        {topPerformers.length > 0 && (
          <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
            <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
              Top Performers
            </h2>
            <p className="text-sm text-neutral-300 print:text-black leading-relaxed mb-3">
              The following students are performing above expected levels and should be
              recognised for their achievement. Consider extension activities, mentoring
              opportunities, and enrichment programmes.
            </p>
            <div className="space-y-2">
              {topPerformers.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center justify-between bg-emerald-500/5 print:bg-emerald-50 border border-emerald-500/20 print:border-emerald-300 rounded-lg px-4 py-2.5 text-sm"
                >
                  <span className="text-neutral-200 print:text-black font-medium">{s.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-neutral-400 print:text-neutral-600">
                      {s.averageScore}% ({scoreToGrade(s.averageScore)})
                    </span>
                    <span className="text-emerald-400 print:text-emerald-700 text-xs font-medium">
                      {s.assignmentsCompleted}/{s.assignmentsTotal} completed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Students Needing Support */}
        {needingSupport.length > 0 && (
          <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
            <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
              Students Needing Support
            </h2>
            <p className="text-sm text-neutral-300 print:text-black leading-relaxed mb-3">
              The following students are performing below expected levels. Intervention
              strategies, additional support sessions, and parental engagement are recommended.
            </p>
            <div className="space-y-2">
              {needingSupport.map((s) => {
                const badge = statusBadge(s.status);
                return (
                  <div
                    key={s.id}
                    className="flex items-center justify-between bg-red-500/5 print:bg-red-50 border border-red-500/20 print:border-red-300 rounded-lg px-4 py-2.5 text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-200 print:text-black font-medium">{s.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badge.cls}`}>
                        {badge.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-neutral-400 print:text-neutral-600">
                        {s.averageScore}% ({scoreToGrade(s.averageScore)})
                      </span>
                      <span className="text-red-400 print:text-red-700 text-xs font-medium">
                        {s.assignmentsCompleted}/{s.assignmentsTotal} completed
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Class vs School Average */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Class vs School Average
          </h2>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-neutral-100 print:text-black">
                {classAvgScore}%
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                Class Average
              </div>
            </div>
            <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-neutral-100 print:text-black">
                {schoolAvg}%
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                School Average
              </div>
            </div>
            <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-4 text-center">
              <div
                className={`text-2xl font-bold ${
                  classVsSchool >= 0
                    ? "text-emerald-400 print:text-emerald-700"
                    : "text-red-400 print:text-red-700"
                }`}
              >
                {classVsSchool >= 0 ? "+" : ""}
                {classVsSchool}%
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                Difference
              </div>
            </div>
          </div>

          {/* Visual bar comparison */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-3 text-xs">
              <span className="w-24 text-neutral-400 print:text-neutral-600 text-right">Class</span>
              <div className="flex-1 bg-neutral-800 print:bg-neutral-200 rounded-full h-5 overflow-hidden">
                <div
                  className="bg-blue-500 print:bg-blue-600 h-full rounded-full flex items-center justify-end pr-2 text-white text-xs font-medium"
                  style={{ width: `${Math.min(classAvgScore, 100)}%` }}
                >
                  {classAvgScore}%
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="w-24 text-neutral-400 print:text-neutral-600 text-right">School</span>
              <div className="flex-1 bg-neutral-800 print:bg-neutral-200 rounded-full h-5 overflow-hidden">
                <div
                  className="bg-neutral-500 print:bg-neutral-500 h-full rounded-full flex items-center justify-end pr-2 text-white text-xs font-medium"
                  style={{ width: `${Math.min(schoolAvg, 100)}%` }}
                >
                  {schoolAvg}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
            Recommendations
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300 print:text-black">
            {classAvgScore < schoolAvg && (
              <li className="leading-relaxed pl-1">
                Class average is {Math.abs(classVsSchool)}% below the school average.
                Review teaching strategies and consider additional intervention sessions.
              </li>
            )}
            {ragCounts.atRisk > 0 && (
              <li className="leading-relaxed pl-1">
                {ragCounts.atRisk} student{ragCounts.atRisk > 1 ? "s are" : " is"} at risk.
                Prioritise individual learning plans and arrange parent/carer meetings.
              </li>
            )}
            {ragCounts.needsSupport > 0 && (
              <li className="leading-relaxed pl-1">
                {ragCounts.needsSupport} student{ragCounts.needsSupport > 1 ? "s need" : " needs"} additional support.
                Consider targeted small-group sessions focusing on key weaknesses.
              </li>
            )}
            {classCompletionPct < 70 && (
              <li className="leading-relaxed pl-1">
                Assignment completion rate is {classCompletionPct}%.
                Implement structured homework monitoring and follow-up procedures.
              </li>
            )}
            {topPerformers.length > 0 && (
              <li className="leading-relaxed pl-1">
                {topPerformers.length} top performer{topPerformers.length > 1 ? "s" : ""} should be
                challenged with extension material and considered for peer mentoring roles.
              </li>
            )}
            <li className="leading-relaxed pl-1">
              Continue to track progress fortnightly and adjust intervention groups as needed
              before the end-of-term assessment window.
            </li>
            <li className="leading-relaxed pl-1">
              Share individual student reports with parents/carers at the upcoming
              Parents&apos; Evening to support home-school collaboration.
            </li>
          </ol>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-neutral-500 print:text-neutral-600 pt-4 border-t border-neutral-800 print:border-neutral-300">
          <p>
            Riverside Academy -- Class Progress Report -- Confidential
          </p>
          <p className="mt-1">
            Generated on{" "}
            {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            . This report covers the Autumn Term 2025-2026 assessment period.
          </p>
        </div>

        {/* Bottom Print Button */}
        <div className="no-print text-center pt-2">
          <button
            onClick={() => window.print()}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors"
          >
            Print this Report
          </button>
        </div>
      </div>
    </>
  );
}
