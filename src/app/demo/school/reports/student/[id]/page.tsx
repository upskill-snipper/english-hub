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
    case "Excelling":
      return "Above Expected";
    case "On Track":
      return "Meeting Expected";
    case "Needs Support":
      return "Below Expected";
    case "At Risk":
      return "Well Below Expected";
    default:
      return status;
  }
}

function statusDot(status: string): string {
  switch (status) {
    case "Excelling":
      return "bg-emerald-400 print:bg-emerald-600";
    case "On Track":
      return "bg-blue-400 print:bg-blue-600";
    case "Needs Support":
      return "bg-amber-400 print:bg-amber-600";
    case "At Risk":
      return "bg-red-400 print:bg-red-600";
    default:
      return "bg-neutral-400";
  }
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
  const modulesWithScores = student.modules.filter((m) => m.score > 0);
  const avgQuizPct =
    student.quizAttempts.length > 0
      ? Math.round(
          student.quizAttempts.reduce((sum, q) => sum + (q.score / q.maxScore) * 100, 0) /
            student.quizAttempts.length
        )
      : 0;

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
                Student Progress Report
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

        {/* Overall Grade */}
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
            <div className="flex-1 grid grid-cols-3 gap-4 text-sm">
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

        {/* Subject Breakdown */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Subject Breakdown
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-neutral-800 print:bg-neutral-200">
                  <th className="text-left px-3 py-2.5 font-semibold text-neutral-300 print:text-black rounded-tl-lg print:rounded-none">
                    Area
                  </th>
                  <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                    Score
                  </th>
                  <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                    Grade
                  </th>
                  <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black rounded-tr-lg print:rounded-none">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {student.modules.map((mod, i) => (
                  <tr
                    key={mod.name}
                    className={i % 2 === 0 ? "bg-neutral-900 print:bg-white" : "bg-neutral-850 print:bg-neutral-50"}
                  >
                    <td className="px-3 py-2.5 text-neutral-200 print:text-black font-medium">
                      {mod.name}
                    </td>
                    <td className="px-3 py-2.5 text-center text-neutral-300 print:text-black">
                      {mod.score > 0 ? `${mod.score}%` : "--"}
                    </td>
                    <td className={`px-3 py-2.5 text-center font-semibold ${mod.score > 0 ? gradeColor(scoreToGrade(mod.score)) : "text-neutral-500"}`}>
                      {mod.score > 0 ? scoreToGrade(mod.score) : "--"}
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <span
                        className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${
                          mod.status === "Complete"
                            ? "bg-emerald-500/15 text-emerald-400 print:bg-emerald-100 print:text-emerald-700"
                            : mod.status === "In Progress"
                            ? "bg-blue-500/15 text-blue-400 print:bg-blue-100 print:text-blue-700"
                            : "bg-neutral-500/15 text-neutral-400 print:bg-neutral-200 print:text-neutral-600"
                        }`}
                      >
                        {mod.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Strengths */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
            Strengths
          </h2>
          <p className="text-sm text-neutral-300 print:text-black leading-relaxed">
            {student.name} demonstrates strong ability in{" "}
            {student.strengths.map((s) => s.name.toLowerCase()).join(", ")}.
            {student.strengths.length > 0 && (
              <> Their highest-performing area is{" "}
              <strong className="text-neutral-100 print:text-black">
                {student.strengths[0].name}
              </strong>{" "}
              with a score of {student.strengths[0].score}%.
              {student.status === "Excelling" &&
                " This student is performing above expectations and should be encouraged to pursue extension activities."}
              {student.status === "On Track" &&
                " Continued effort in these areas will help maintain strong progress."}
              </>
            )}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {student.strengths.map((s) => (
              <span
                key={s.name}
                className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 print:bg-emerald-50 print:text-emerald-700 print:border-emerald-300"
              >
                {s.name}: {s.score}%
              </span>
            ))}
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
                {student.weaknesses.map((w) => w.name.toLowerCase()).join(", ")}.
                {" "}The area requiring most attention is{" "}
                <strong className="text-neutral-100 print:text-black">
                  {student.weaknesses[student.weaknesses.length - 1].name}
                </strong>{" "}
                (currently at {student.weaknesses[student.weaknesses.length - 1].score}%).
                {student.status === "At Risk" &&
                  " Immediate intervention and additional support are strongly recommended."}
                {student.status === "Needs Support" &&
                  " Targeted support in these areas will help close the gap with expected standards."}
              </>
            ) : (
              <>{student.name} is performing well across all assessed areas. Continue to challenge with extension work.</>
            )}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {student.weaknesses.map((w) => (
              <span
                key={w.name}
                className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 print:bg-amber-50 print:text-amber-700 print:border-amber-300"
              >
                {w.name}: {w.score}%
              </span>
            ))}
          </div>
        </div>

        {/* Teacher Comment */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-3">
            Teacher Comment
          </h2>
          <div className="bg-neutral-800/50 print:bg-neutral-50 rounded-lg p-4 border border-neutral-700 print:border-neutral-300">
            <p className="text-sm text-neutral-300 print:text-black leading-relaxed italic">
              &quot;{student.name} has shown{" "}
              {student.status === "Excelling"
                ? "exceptional dedication and consistently outstanding work this term. Their contributions to class discussions and written assignments are of the highest calibre."
                : student.status === "On Track"
                ? "steady progress throughout the term with a positive attitude towards learning. They engage well in lessons and are developing their analytical skills effectively."
                : student.status === "Needs Support"
                ? "some progress this term but would benefit from more consistent engagement with homework and revision activities. I would encourage more regular reading and practice of written skills."
                : "potential in class discussions but this is not yet reflected in their written work. Consistent attendance, completion of set work, and engagement with support sessions are essential to make progress."}
              &quot;
            </p>
            <p className="text-sm text-neutral-400 print:text-neutral-600 mt-3 text-right">
              -- {student.teacherName}, {student.className}
            </p>
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

        {/* Footer */}
        <div className="text-center text-xs text-neutral-500 print:text-neutral-600 pt-4 border-t border-neutral-800 print:border-neutral-300">
          <p>
            Riverside Academy -- Student Progress Report -- Confidential
          </p>
          <p className="mt-1">
            Generated on{" "}
            {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            . This report is based on assessments completed during the Autumn Term 2025-2026.
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
