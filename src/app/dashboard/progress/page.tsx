"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Mock data ─────────────────────────────────────────────────────────
   TODO: Replace with real API calls:
   - Fetch linked students from /api/parent/students
   - Fetch progress data from /api/parent/students/[id]/progress
   ───────────────────────────────────────────────────────────────────── */

interface ProgressEntry {
  date: string;
  score: number;
  essayTitle: string;
  subject: string;
}

interface StudentProgress {
  id: string;
  name: string;
  school: string;
  yearGroup: number;
  examBoard: string;
  projectedGrade: string;
  targetGrade: string;
  averageScore: number;
  totalEssays: number;
  weeklyActivity: number[];
  recentWork: ProgressEntry[];
  strengths: string[];
  areasToImprove: string[];
}

const MOCK_STUDENTS: StudentProgress[] = [
  {
    id: "s1",
    name: "Alex Johnson",
    school: "Westfield Academy",
    yearGroup: 11,
    examBoard: "AQA",
    projectedGrade: "6",
    targetGrade: "7",
    averageScore: 74,
    totalEssays: 23,
    weeklyActivity: [3, 2, 4, 1, 3, 2, 5],
    recentWork: [
      { date: "2026-03-23", score: 78, essayTitle: "Macbeth: Ambition as a destructive force", subject: "English Literature" },
      { date: "2026-03-21", score: 72, essayTitle: "Persuasive letter: School uniform policy", subject: "English Language" },
      { date: "2026-03-19", score: 81, essayTitle: "An Inspector Calls: Generational conflict", subject: "English Literature" },
      { date: "2026-03-17", score: 69, essayTitle: "Creative writing: A moment of realisation", subject: "English Language" },
      { date: "2026-03-15", score: 75, essayTitle: "Power and Conflict: Ozymandias analysis", subject: "English Literature" },
    ],
    strengths: ["Quotation selection", "Contextual understanding", "Essay structure"],
    areasToImprove: ["Analytical vocabulary", "Language feature identification", "Time management"],
  },
  {
    id: "s2",
    name: "Emma Johnson",
    school: "Westfield Academy",
    yearGroup: 10,
    examBoard: "AQA",
    projectedGrade: "5",
    targetGrade: "6",
    averageScore: 68,
    totalEssays: 15,
    weeklyActivity: [2, 1, 2, 0, 1, 2, 3],
    recentWork: [
      { date: "2026-03-22", score: 70, essayTitle: "Romeo and Juliet: The role of fate", subject: "English Literature" },
      { date: "2026-03-20", score: 65, essayTitle: "Descriptive writing: A busy market", subject: "English Language" },
      { date: "2026-03-18", score: 72, essayTitle: "A Christmas Carol: Scrooge's transformation", subject: "English Literature" },
    ],
    strengths: ["Creative writing ideas", "Character analysis", "Engagement with texts"],
    areasToImprove: ["Spelling and grammar", "Paragraph structure", "Using evidence effectively"],
  },
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function ProgressPage() {
  const [selectedStudent, setSelectedStudent] = useState(MOCK_STUDENTS[0].id);
  const student = MOCK_STUDENTS.find((s) => s.id === selectedStudent)!;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/parent"
            className="text-sm text-[#2E86C1] hover:underline mb-2 inline-block"
          >
            ← Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-[#1A5276]">
            Student Progress
          </h1>
          <p className="text-slate-600 mt-1">
            Track your child&apos;s learning journey and achievements
          </p>
        </div>

        {/* Student Selector */}
        <div className="flex gap-3 mb-6">
          {MOCK_STUDENTS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedStudent(s.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                selectedStudent === s.id
                  ? "bg-[#2E86C1] text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#2E86C1]/40"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
            <p className="text-3xl font-bold text-[#1A5276]">
              {student.averageScore}%
            </p>
            <p className="text-sm text-slate-500 mt-1">Average Score</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
            <p className="text-3xl font-bold text-[#2E86C1]">
              {student.totalEssays}
            </p>
            <p className="text-sm text-slate-500 mt-1">Essays Written</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
            <p
              className={`text-3xl font-bold ${
                parseInt(student.projectedGrade) >= parseInt(student.targetGrade)
                  ? "text-green-600"
                  : "text-amber-600"
              }`}
            >
              Grade {student.projectedGrade}
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Projected (target: {student.targetGrade})
            </p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
            <p className="text-3xl font-bold text-green-600">
              {student.weeklyActivity.reduce((a, b) => a + b, 0)}
            </p>
            <p className="text-sm text-slate-500 mt-1">Activities This Week</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weekly Activity */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-[#1A5276] mb-4">
                Weekly Activity
              </h2>
              <div className="flex items-end justify-between gap-2 h-32">
                {student.weeklyActivity.map((count, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-[#2E86C1]/20 rounded-t-md relative"
                      style={{ height: `${Math.max(count * 20, 4)}px` }}
                    >
                      <div
                        className="absolute bottom-0 w-full bg-[#2E86C1] rounded-t-md transition-all"
                        style={{ height: `${Math.max(count * 20, 4)}px` }}
                      />
                    </div>
                    <span className="text-xs text-slate-400 mt-2">
                      {DAYS[i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Work */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-[#1A5276] mb-4">
                Recent Work
              </h2>
              <div className="space-y-3">
                {student.recentWork.map((entry, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-50"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-[#1A5276] truncate">
                        {entry.essayTitle}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {entry.subject} ·{" "}
                        {new Date(entry.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                        })}
                      </p>
                    </div>
                    <span
                      className={`text-lg font-bold ml-4 ${
                        entry.score >= 75
                          ? "text-green-600"
                          : entry.score >= 60
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    >
                      {entry.score}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Student Info */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-[#1A5276] mb-3">
                Student Info
              </h2>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-slate-500">School</dt>
                  <dd className="text-[#1A5276] font-medium">
                    {student.school}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Year Group</dt>
                  <dd className="text-[#1A5276] font-medium">
                    Year {student.yearGroup}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Exam Board</dt>
                  <dd className="text-[#1A5276] font-medium">
                    {student.examBoard}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Strengths */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-green-700 mb-3">
                Strengths
              </h2>
              <ul className="space-y-2">
                {student.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="text-slate-600">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas to Improve */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-amber-700 mb-3">
                Areas to Improve
              </h2>
              <ul className="space-y-2">
                {student.areasToImprove.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-amber-500 mt-0.5">→</span>
                    <span className="text-slate-600">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-[#1A5276] mb-3">
                Actions
              </h2>
              <div className="space-y-2">
                <Link
                  href="/dashboard/settings"
                  className="block w-full text-center px-4 py-2 bg-[#2E86C1]/10 text-[#2E86C1] rounded-lg text-sm font-medium hover:bg-[#2E86C1]/20 transition-colors"
                >
                  Manage Weekly Reports
                </Link>
                <Link
                  href="/help/contact"
                  className="block w-full text-center px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
                >
                  Contact Teacher
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
