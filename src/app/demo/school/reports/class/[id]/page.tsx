"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { DEMO_CLASSES, DEMO_STUDENTS } from "@/data/demo-data";
import { downloadCSV } from "@/lib/download-csv";
import { percentageToGCSEGrade, gcseGradeColor, predictedGradeColor, formatReadingAge } from "@/lib/grades";

function scoreToGrade(score: number): string {
  return String(percentageToGCSEGrade(score));
}

function gradeColor(grade: string): string {
  const num = parseInt(grade);
  if (num >= 8) return "text-emerald-400 print:text-emerald-700";
  if (num >= 6) return "text-blue-400 print:text-blue-700";
  if (num >= 4) return "text-amber-400 print:text-amber-700";
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

  // Compute class-level grade averages
  const classAvgWorkingAt = students.length > 0
    ? +(students.reduce((sum, s) => sum + s.workingAtGrade, 0) / students.length).toFixed(1)
    : percentageToGCSEGrade(classAvgScore);
  const classAvgPredicted = students.length > 0
    ? +(students.reduce((sum, s) => sum + s.predictedGrade, 0) / students.length).toFixed(1)
    : percentageToGCSEGrade(classAvgScore);
  const classAvgTarget = students.length > 0
    ? +(students.reduce((sum, s) => sum + s.targetGrade, 0) / students.length).toFixed(1)
    : percentageToGCSEGrade(classAvgScore) + 1;

  // Module performance analysis
  const modulePerformance = (() => {
    if (students.length === 0) return [];
    const moduleMap: Record<string, { totalScore: number; count: number }> = {};
    students.forEach((s) => {
      s.modules.forEach((m) => {
        if (m.score > 0) {
          if (!moduleMap[m.name]) moduleMap[m.name] = { totalScore: 0, count: 0 };
          moduleMap[m.name].totalScore += m.score;
          moduleMap[m.name].count += 1;
        }
      });
    });
    return Object.entries(moduleMap)
      .map(([name, data]) => ({
        name,
        avgScore: Math.round(data.totalScore / data.count),
        studentCount: data.count,
      }))
      .sort((a, b) => b.avgScore - a.avgScore);
  })();

  // Distribution analysis
  const totalStudentCount = students.length > 0 ? students.length : cls.studentCount;
  const excellingPct = students.length > 0 ? Math.round((ragCounts.excelling / students.length) * 100) : 0;
  const onTrackPct = students.length > 0 ? Math.round((ragCounts.onTrack / students.length) * 100) : 0;
  const needsSupportPct = students.length > 0 ? Math.round((ragCounts.needsSupport / students.length) * 100) : 0;
  const atRiskPct = students.length > 0 ? Math.round((ragCounts.atRisk / students.length) * 100) : 0;

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
            className="text-sm text-neutral-400 hover:text-neutral-200 flex items-center gap-1"
          >
            <span>&larr;</span> Back to Reports
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                toast.success("Report emailed to department", {
                  description: "In production, this sends the class report PDF to all teachers in the English department.",
                });
              }}
              className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 border border-neutral-700"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Email to Department
            </button>
            <button
              onClick={() => {
                if (students.length > 0) {
                  const csvData = students.map((s) => ({
                    Name: s.name,
                    "Average Score (%)": s.averageScore,
                    Grade: scoreToGrade(s.averageScore),
                    "Overall Progress (%)": s.overallProgress,
                    "Assignments Completed": s.assignmentsCompleted,
                    "Assignments Total": s.assignmentsTotal,
                    Status: s.status,
                  }));
                  downloadCSV(csvData, `${cls.name.replace(/\s+/g, "-")}-class-data.csv`);
                  toast.success("CSV downloaded", {
                    description: `Exported data for ${students.length} students in ${cls.name}.`,
                  });
                } else {
                  toast.info("No student data available to export for this class in the demo.");
                }
              }}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium text-sm transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Export CSV
            </button>
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
                Class Progress Report
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-4 text-center">
              <div className={`text-2xl font-bold ${gradeColor(String(Math.round(classAvgWorkingAt)))}`}>
                Grade {classAvgWorkingAt}
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                Avg Working At
              </div>
            </div>
            <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-4 text-center">
              <div className={`text-2xl font-bold ${Number(classAvgPredicted) > Number(classAvgWorkingAt) ? "text-emerald-400 print:text-emerald-700" : Number(classAvgPredicted) < Number(classAvgWorkingAt) ? "text-red-400 print:text-red-700" : "text-amber-400 print:text-amber-700"}`}>
                Grade {classAvgPredicted}
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                Avg Predicted
              </div>
            </div>
            <div className="bg-neutral-800/50 print:bg-neutral-100 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400 print:text-cyan-700">
                Grade {classAvgTarget}
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                Avg Target
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
                {totalStudentCount}
              </div>
              <div className="text-neutral-500 print:text-neutral-600 text-xs mt-1">
                Students
              </div>
            </div>
          </div>

          {/* RAG Breakdown */}
          {students.length > 0 && (
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
          )}
        </div>

        {/* Distribution Analysis */}
        {students.length > 0 && (
          <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
            <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
              Distribution Analysis
            </h2>
            <div className="space-y-3">
              {[
                { label: "Excelling", count: ragCounts.excelling, pct: excellingPct, color: "bg-emerald-500 print:bg-emerald-600", textColor: "text-emerald-400 print:text-emerald-700" },
                { label: "On Track", count: ragCounts.onTrack, pct: onTrackPct, color: "bg-blue-500 print:bg-blue-600", textColor: "text-blue-400 print:text-blue-700" },
                { label: "Needs Support", count: ragCounts.needsSupport, pct: needsSupportPct, color: "bg-amber-500 print:bg-amber-600", textColor: "text-amber-400 print:text-amber-700" },
                { label: "At Risk", count: ragCounts.atRisk, pct: atRiskPct, color: "bg-red-500 print:bg-red-600", textColor: "text-red-400 print:text-red-700" },
              ].map((band) => (
                <div key={band.label} className="flex items-center gap-3">
                  <span className={`text-sm w-28 shrink-0 font-medium ${band.textColor}`}>{band.label}</span>
                  <div className="flex-1 bg-neutral-800 print:bg-neutral-200 rounded-full h-5 overflow-hidden">
                    <div
                      className={`${band.color} h-full rounded-full flex items-center justify-end pr-2 text-white text-[10px] font-medium min-w-[32px]`}
                      style={{ width: `${Math.max(band.pct, 5)}%` }}
                    >
                      {band.count}
                    </div>
                  </div>
                  <span className="text-sm text-neutral-400 print:text-neutral-600 w-10 text-right">{band.pct}%</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-neutral-300 print:text-black leading-relaxed">
              {ragCounts.excelling + ragCounts.onTrack > ragCounts.needsSupport + ragCounts.atRisk
                ? `The majority of the class (${excellingPct + onTrackPct}%) is performing at or above expected levels. `
                : `A significant proportion of the class (${needsSupportPct + atRiskPct}%) is performing below expected levels and requires targeted intervention. `}
              {ragCounts.atRisk > 0
                ? `${ragCounts.atRisk} student${ragCounts.atRisk > 1 ? "s require" : " requires"} immediate intervention.`
                : "No students are currently classified as at risk."}
            </p>
          </div>
        )}

        {/* Student Results Table */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Student Performance Table
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
                      Working At
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                      Predicted
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                      Target
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                      Reading Age
                    </th>
                    <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                      Completed
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
                        <td className={`px-3 py-2.5 text-center font-bold ${gradeColor(String(s.workingAtGrade))}`}>
                          {s.workingAtGrade}
                        </td>
                        <td className={`px-3 py-2.5 text-center font-bold ${s.predictedGrade > s.workingAtGrade ? "text-emerald-400 print:text-emerald-700" : s.predictedGrade < s.workingAtGrade ? "text-red-400 print:text-red-700" : "text-amber-400 print:text-amber-700"}`}>
                          {s.predictedGrade}
                        </td>
                        <td className="px-3 py-2.5 text-center font-semibold text-cyan-400 print:text-cyan-700">
                          {s.targetGrade}
                        </td>
                        <td className="px-3 py-2.5 text-center text-neutral-400 print:text-neutral-600 text-xs">
                          {s.readingAge ? formatReadingAge(s.readingAge) : "--"}
                        </td>
                        <td className="px-3 py-2.5 text-center text-neutral-400 print:text-neutral-600">
                          {s.assignmentsCompleted}/{s.assignmentsTotal}
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

        {/* Module Performance */}
        {modulePerformance.length > 0 && (
          <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
            <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
              Module Performance
            </h2>
            <div className="space-y-3">
              {modulePerformance.map((mod) => (
                <div key={mod.name} className="flex items-center gap-4">
                  <span className="text-sm text-neutral-300 print:text-black w-44 shrink-0 font-medium">{mod.name}</span>
                  <div className="flex-1 bg-neutral-800 print:bg-neutral-200 rounded-full h-4 overflow-hidden">
                    <div
                      className={`h-full rounded-full flex items-center justify-end pr-2 text-white text-[10px] font-medium ${
                        mod.avgScore >= 70
                          ? "bg-emerald-500 print:bg-emerald-600"
                          : mod.avgScore >= 50
                          ? "bg-amber-500 print:bg-amber-600"
                          : "bg-red-500 print:bg-red-600"
                      }`}
                      style={{ width: `${mod.avgScore}%` }}
                    >
                      {mod.avgScore}%
                    </div>
                  </div>
                  <span className="text-xs text-neutral-500 print:text-neutral-600 w-20 text-right">
                    {mod.studentCount} student{mod.studentCount !== 1 ? "s" : ""}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-800 print:border-neutral-300 grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="text-xs font-semibold text-emerald-400 print:text-emerald-700 uppercase tracking-wider mb-2">Strongest Modules</h4>
                <ul className="space-y-1">
                  {modulePerformance.slice(0, 2).map((m) => (
                    <li key={m.name} className="text-neutral-300 print:text-black flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-emerald-400 print:bg-emerald-600" />
                      {m.name} ({m.avgScore}%)
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-red-400 print:text-red-700 uppercase tracking-wider mb-2">Weakest Modules</h4>
                <ul className="space-y-1">
                  {modulePerformance.slice(-2).reverse().map((m) => (
                    <li key={m.name} className="text-neutral-300 print:text-black flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-red-400 print:bg-red-600" />
                      {m.name} ({m.avgScore}%)
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

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
                      {s.averageScore}% (Grade {scoreToGrade(s.averageScore)})
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
                        {s.averageScore}% (Grade {scoreToGrade(s.averageScore)})
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

        {/* Compare with Previous Term */}
        <div className="report-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 print:rounded-none">
          <h2 className="text-lg font-semibold text-neutral-100 print:text-black mb-4">
            Compare with Previous Term
          </h2>
          <p className="text-xs text-neutral-500 print:text-neutral-600 mb-4">
            Comparison of key metrics between Autumn Term 2025-26 and Summer Term 2024-25.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-neutral-800 print:bg-neutral-200">
                  <th className="text-left px-3 py-2.5 font-semibold text-neutral-300 print:text-black rounded-tl-lg print:rounded-none">
                    Metric
                  </th>
                  <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                    Previous Term
                  </th>
                  <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black">
                    This Term
                  </th>
                  <th className="text-center px-3 py-2.5 font-semibold text-neutral-300 print:text-black rounded-tr-lg print:rounded-none">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "Average Score", prev: Math.max(classAvgScore - 7, 30), curr: classAvgScore, unit: "%" },
                  { metric: "Completion Rate", prev: Math.max(classCompletionPct - 12, 25), curr: classCompletionPct, unit: "%" },
                  { metric: "Excelling Students", prev: Math.max(ragCounts.excelling - 1, 0), curr: ragCounts.excelling, unit: "" },
                  { metric: "At Risk Students", prev: ragCounts.atRisk + 2, curr: ragCounts.atRisk, unit: "" },
                  { metric: "Class Grade", prev: scoreToGrade(Math.max(classAvgScore - 7, 30)), curr: scoreToGrade(classAvgScore), unit: "" },
                ].map((row, i) => {
                  const numDiff = typeof row.prev === "number" && typeof row.curr === "number" ? row.curr - row.prev : 0;
                  const improved = row.metric === "At Risk Students" ? numDiff < 0 : numDiff > 0;
                  const isGrade = row.metric === "Class Grade";
                  return (
                    <tr
                      key={row.metric}
                      className={i % 2 === 0 ? "bg-neutral-900 print:bg-white" : "bg-neutral-850 print:bg-neutral-50"}
                    >
                      <td className="px-3 py-2.5 text-neutral-200 print:text-black font-medium">{row.metric}</td>
                      <td className="px-3 py-2.5 text-center text-neutral-400 print:text-neutral-600">
                        {isGrade ? row.prev : `${row.prev}${row.unit}`}
                      </td>
                      <td className="px-3 py-2.5 text-center text-neutral-100 print:text-black font-semibold">
                        {isGrade ? row.curr : `${row.curr}${row.unit}`}
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        {isGrade ? (
                          <span className="text-neutral-400 print:text-neutral-600">--</span>
                        ) : (
                          <span className={`text-xs font-semibold ${improved ? "text-emerald-400 print:text-emerald-700" : numDiff === 0 ? "text-neutral-400" : "text-red-400 print:text-red-700"}`}>
                            {numDiff > 0 ? "+" : ""}{numDiff}{row.unit}
                            {improved ? " \u2191" : numDiff < 0 ? " \u2193" : ""}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-neutral-300 print:text-black leading-relaxed">
            {classAvgScore > (classAvgScore - 7)
              ? "The class has shown positive improvement compared to the previous term. Continue with current strategies and maintain momentum heading into the next assessment window."
              : "Performance has remained stable. Consider reviewing teaching approaches and intervention strategies to drive improvement."}
          </p>
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
            {modulePerformance.length > 0 && modulePerformance[modulePerformance.length - 1].avgScore < 60 && (
              <li className="leading-relaxed pl-1">
                {modulePerformance[modulePerformance.length - 1].name} is the weakest module at {modulePerformance[modulePerformance.length - 1].avgScore}%.
                Consider dedicated revision sessions and supplementary resources for this area.
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
            The English Hub -- Class Progress Report -- Confidential
          </p>
          <p className="mt-1">
            Generated on{" "}
            {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            . This report covers the Autumn Term 2025-2026 assessment period.
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
