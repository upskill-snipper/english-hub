"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Mock data ─────────────────────────────────────────────────────────
   TODO: Replace with real API calls:
   - Fetch classes from /api/teacher/classes
   - Fetch student data from /api/teacher/classes/[id]/students
   ───────────────────────────────────────────────────────────────────── */

interface Student {
  id: string;
  name: string;
  email: string;
  averageScore: number;
  essaysSubmitted: number;
  lastActive: string;
  projectedGrade: string;
}

interface ClassGroup {
  id: string;
  name: string;
  subject: string;
  examBoard: string;
  yearGroup: number;
  students: Student[];
  createdAt: string;
}

const MOCK_CLASSES: ClassGroup[] = [
  {
    id: "c1",
    name: "10A English Literature",
    subject: "English Literature",
    examBoard: "AQA",
    yearGroup: 10,
    students: [
      { id: "s1", name: "Emma Thompson", email: "emma.t@school.edu", averageScore: 82, essaysSubmitted: 12, lastActive: "2026-03-23", projectedGrade: "7" },
      { id: "s2", name: "Oliver Chen", email: "oliver.c@school.edu", averageScore: 75, essaysSubmitted: 10, lastActive: "2026-03-22", projectedGrade: "6" },
      { id: "s3", name: "Amira Patel", email: "amira.p@school.edu", averageScore: 88, essaysSubmitted: 14, lastActive: "2026-03-23", projectedGrade: "8" },
      { id: "s4", name: "James Wilson", email: "james.w@school.edu", averageScore: 64, essaysSubmitted: 7, lastActive: "2026-03-20", projectedGrade: "5" },
      { id: "s5", name: "Sophie Brown", email: "sophie.b@school.edu", averageScore: 71, essaysSubmitted: 9, lastActive: "2026-03-21", projectedGrade: "6" },
    ],
    createdAt: "2025-09-05",
  },
  {
    id: "c2",
    name: "11B English Language",
    subject: "English Language",
    examBoard: "AQA",
    yearGroup: 11,
    students: [
      { id: "s6", name: "Liam Harris", email: "liam.h@school.edu", averageScore: 79, essaysSubmitted: 15, lastActive: "2026-03-23", projectedGrade: "7" },
      { id: "s7", name: "Chloe Adams", email: "chloe.a@school.edu", averageScore: 85, essaysSubmitted: 18, lastActive: "2026-03-23", projectedGrade: "8" },
      { id: "s8", name: "Ryan Davies", email: "ryan.d@school.edu", averageScore: 62, essaysSubmitted: 8, lastActive: "2026-03-19", projectedGrade: "5" },
    ],
    createdAt: "2025-09-05",
  },
  {
    id: "c3",
    name: "10C IGCSE Literature",
    subject: "English Literature",
    examBoard: "CAIE",
    yearGroup: 10,
    students: [
      { id: "s9", name: "Isabella Martinez", email: "isabella.m@school.edu", averageScore: 91, essaysSubmitted: 16, lastActive: "2026-03-23", projectedGrade: "A*" },
      { id: "s10", name: "Noah Kim", email: "noah.k@school.edu", averageScore: 73, essaysSubmitted: 11, lastActive: "2026-03-22", projectedGrade: "B" },
    ],
    createdAt: "2025-09-08",
  },
];

function getGradeColor(grade: string): string {
  const num = parseInt(grade);
  if (!isNaN(num)) {
    if (num >= 7) return "text-green-600";
    if (num >= 5) return "text-amber-600";
    return "text-red-600";
  }
  if (grade.includes("A")) return "text-green-600";
  if (grade === "B") return "text-amber-600";
  return "text-red-600";
}

export default function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const activeClass = MOCK_CLASSES.find((c) => c.id === selectedClass);

  const filteredStudents = activeClass?.students.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              href="/dashboard/teacher"
              className="text-sm text-primary hover:underline mb-2 inline-block"
            >
              ← Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-foreground">My Classes</h1>
            <p className="text-slate-600 mt-1">
              Manage your classes and track student progress
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary/80 transition-colors"
          >
            + Create Class
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Class List Sidebar */}
          <div className="lg:col-span-1 space-y-3">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Your Classes ({MOCK_CLASSES.length})
            </h2>
            {MOCK_CLASSES.map((cls) => (
              <button
                key={cls.id}
                onClick={() => {
                  setSelectedClass(cls.id);
                  setSearchQuery("");
                }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selectedClass === cls.id
                    ? "bg-white border-[#2E86C1] shadow-md ring-1 ring-[#2E86C1]/20"
                    : "bg-white border-border hover:border-[#2E86C1]/40 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-foreground">{cls.name}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                    {cls.examBoard}
                  </span>
                </div>
                <p className="text-sm text-slate-500">
                  {cls.students.length} students · Year {cls.yearGroup}
                </p>
                <div className="mt-2 flex items-center gap-3 text-xs text-slate-400">
                  <span>{cls.subject}</span>
                  <span>·</span>
                  <span>
                    Avg:{" "}
                    {Math.round(
                      cls.students.reduce((a, s) => a + s.averageScore, 0) /
                        cls.students.length
                    )}
                    %
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Class Detail */}
          <div className="lg:col-span-2">
            {activeClass ? (
              <div className="bg-white rounded-xl border border-border shadow-sm">
                {/* Class Header */}
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-foreground">
                        {activeClass.name}
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">
                        {activeClass.subject} · {activeClass.examBoard} · Year{" "}
                        {activeClass.yearGroup}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-sm bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-200 transition-colors">
                        Edit Class
                      </button>
                      <button className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors">
                        + Add Student
                      </button>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-foreground">
                        {activeClass.students.length}
                      </p>
                      <p className="text-xs text-slate-500">Students</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-primary">
                        {Math.round(
                          activeClass.students.reduce(
                            (a, s) => a + s.averageScore,
                            0
                          ) / activeClass.students.length
                        )}
                        %
                      </p>
                      <p className="text-xs text-slate-500">Class Average</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-green-600">
                        {activeClass.students.reduce(
                          (a, s) => a + s.essaysSubmitted,
                          0
                        )}
                      </p>
                      <p className="text-xs text-slate-500">Total Essays</p>
                    </div>
                  </div>
                </div>

                {/* Search */}
                <div className="p-4 border-b border-slate-100">
                  <input
                    type="text"
                    placeholder="Search students..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/30 focus:border-[#2E86C1]"
                  />
                </div>

                {/* Student Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs text-slate-500 uppercase tracking-wider">
                        <th className="px-6 py-3 font-medium">Student</th>
                        <th className="px-4 py-3 font-medium">Avg Score</th>
                        <th className="px-4 py-3 font-medium">Essays</th>
                        <th className="px-4 py-3 font-medium">Grade</th>
                        <th className="px-4 py-3 font-medium">Last Active</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {(filteredStudents ?? []).map((student) => (
                        <tr
                          key={student.id}
                          className="hover:bg-muted transition-colors"
                        >
                          <td className="px-6 py-3">
                            <p className="font-medium text-foreground text-sm">
                              {student.name}
                            </p>
                            <p className="text-xs text-slate-400">
                              {student.email}
                            </p>
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`font-semibold text-sm ${
                                student.averageScore >= 70
                                  ? "text-green-600"
                                  : student.averageScore >= 50
                                  ? "text-amber-600"
                                  : "text-red-600"
                              }`}
                            >
                              {student.averageScore}%
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-600">
                            {student.essaysSubmitted}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`font-semibold text-sm ${getGradeColor(
                                student.projectedGrade
                              )}`}
                            >
                              {student.projectedGrade}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-400">
                            {new Date(student.lastActive).toLocaleDateString(
                              "en-GB",
                              {
                                day: "numeric",
                                month: "short",
                              }
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-border p-12 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-slate-300 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Select a Class
                </h3>
                <p className="text-slate-500 text-sm">
                  Choose a class from the sidebar to view student progress and
                  manage your group.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Create Class Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Create New Class
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Class Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 10A English Literature"
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/30"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/30">
                      <option>English Literature</option>
                      <option>English Language</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Exam Board
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/30">
                      <option>AQA</option>
                      <option>Edexcel</option>
                      <option>CAIE</option>
                      <option>OCR</option>
                      <option>WJEC Eduqas</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Year Group
                  </label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/30">
                    <option>Year 10</option>
                    <option>Year 11</option>
                    <option>Year 12</option>
                    <option>Year 13</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-2 border border-border rounded-lg text-sm text-slate-600 hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/80 transition-colors"
                >
                  Create Class
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
