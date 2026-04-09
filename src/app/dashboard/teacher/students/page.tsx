"use client";

import { useState } from "react";
import { percentageToGCSEGrade, percentageToGCSEGradeLabel, gcseGradeColor, predictedGradeColor, calculateWorkingAtGrade, calculateTargetGrade } from "@/lib/grades";

/* ─── Mock data ─────────────────────────────────────────────────────────
   TODO: Replace with real API calls:
   - GET /api/teacher/students — list linked students
   - POST /api/teacher/students/invite — add student by email/code
   - GET /api/teacher/students/:id — individual student detail
   - GET /api/teacher/groups — list class groups
   ───────────────────────────────────────────────────────────────────── */

interface Student {
  id: string;
  name: string;
  email: string;
  group: string;
  essaysSubmitted: number;
  averageScore: number;
  lastActive: string;
  trend: "up" | "down" | "stable";
}

const MOCK_GROUPS = ["All Classes", "10A English Lit", "10B English Lang", "11A English Lit"];

const MOCK_STUDENTS: Student[] = [
  { id: "1", name: "Emma Thompson", email: "emma.t@school.edu", group: "10A English Lit", essaysSubmitted: 14, averageScore: 82, lastActive: "2026-03-23", trend: "up" },
  { id: "2", name: "Oliver Chen", email: "oliver.c@school.edu", group: "10B English Lang", essaysSubmitted: 9, averageScore: 65, lastActive: "2026-03-23", trend: "stable" },
  { id: "3", name: "Amira Patel", email: "amira.p@school.edu", group: "10A English Lit", essaysSubmitted: 12, averageScore: 77, lastActive: "2026-03-22", trend: "up" },
  { id: "4", name: "James Walker", email: "james.w@school.edu", group: "10B English Lang", essaysSubmitted: 6, averageScore: 58, lastActive: "2026-03-20", trend: "down" },
  { id: "5", name: "Sophie Liu", email: "sophie.l@school.edu", group: "11A English Lit", essaysSubmitted: 18, averageScore: 88, lastActive: "2026-03-23", trend: "up" },
  { id: "6", name: "Liam Roberts", email: "liam.r@school.edu", group: "10A English Lit", essaysSubmitted: 7, averageScore: 61, lastActive: "2026-03-18", trend: "down" },
  { id: "7", name: "Chloe Martinez", email: "chloe.m@school.edu", group: "11A English Lit", essaysSubmitted: 15, averageScore: 79, lastActive: "2026-03-22", trend: "stable" },
  { id: "8", name: "Daniel Kim", email: "daniel.k@school.edu", group: "10B English Lang", essaysSubmitted: 4, averageScore: 52, lastActive: "2026-03-15", trend: "down" },
];

// Mock essays for the expanded student view
const MOCK_STUDENT_ESSAYS = [
  { id: "e1", title: "An Inspector Calls: Responsibility", score: 85, date: "2026-03-20" },
  { id: "e2", title: "Macbeth: Power and Ambition", score: 78, date: "2026-03-15" },
  { id: "e3", title: "Poetry Anthology: Conflict", score: 82, date: "2026-03-10" },
];

function scoreColor(score: number): string {
  if (score >= 80) return "text-green-500";
  if (score >= 60) return "text-amber-500";
  return "text-red-500";
}

function trendIcon(trend: "up" | "down" | "stable") {
  if (trend === "up") {
    return (
      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    );
  }
  if (trend === "down") {
    return (
      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────── */

export default function StudentsPage() {
  const [selectedGroup, setSelectedGroup] = useState("All Classes");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [expandedStudent, setExpandedStudent] = useState<string | null>(null);
  const [inviteValue, setInviteValue] = useState("");

  const filteredStudents = MOCK_STUDENTS.filter((s) => {
    const matchesGroup =
      selectedGroup === "All Classes" || s.group === selectedGroup;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGroup && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Students</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your linked students and track their progress.
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="btn-primary gap-2 self-start"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Student
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field"
          />
        </div>
        <select
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
          className="input-field sm:w-56"
        >
          {MOCK_GROUPS.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {/* Student list */}
      <div className="space-y-3">
        {filteredStudents.length === 0 ? (
          <div className="card text-center py-12">
            <p className="text-muted-foreground">No students found matching your criteria.</p>
          </div>
        ) : (
          filteredStudents.map((student) => (
            <div key={student.id} className="card">
              <div
                className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between cursor-pointer"
                onClick={() =>
                  setExpandedStudent(
                    expandedStudent === student.id ? null : student.id
                  )
                }
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{student.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {student.email} &middot; {student.group}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <p className="font-semibold text-foreground">
                      {student.essaysSubmitted}
                    </p>
                    <p className="text-xs text-muted-foreground">Essays</p>
                  </div>
                  <div className="text-center">
                    <p className={`font-semibold ${gcseGradeColor(percentageToGCSEGrade(student.averageScore))}`}>
                      Grade {percentageToGCSEGrade(student.averageScore)}
                    </p>
                    <p className="text-xs text-muted-foreground">Working At</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {trendIcon(student.trend)}
                    <span className="text-xs text-muted-foreground">Trend</span>
                  </div>
                  <div className="text-center hidden sm:block">
                    <p className="text-xs text-muted-foreground">
                      Last active{" "}
                      {new Date(student.lastActive).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                      })}
                    </p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedStudent === student.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Expanded view */}
              {expandedStudent === student.id && (
                <div className="mt-4 pt-4 border-t border-border">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Recent Essays
                  </h3>
                  {/* TODO: Fetch real essays for this student via API */}
                  <ul className="space-y-2">
                    {MOCK_STUDENT_ESSAYS.map((essay) => (
                      <li
                        key={essay.id}
                        className="flex items-center justify-between rounded-lg bg-background px-4 py-2.5"
                      >
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {essay.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(essay.date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                        <span className={`text-sm font-bold ${scoreColor(essay.score)}`}>
                          {percentageToGCSEGradeLabel(essay.score)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex gap-2">
                    {/* TODO: Link to actual student profile page */}
                    <button className="btn-outline text-xs px-3 py-1.5">
                      View Full Profile
                    </button>
                    <button className="btn-accent text-xs px-3 py-1.5">
                      Send Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* ── Add Student Modal ──────────────────────────────────── */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-card p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Add Student</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-muted-foreground hover:text-muted-foreground"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Enter a student&apos;s email address or invitation code to link them to your class.
            </p>
            <input
              type="text"
              placeholder="Email address or invite code"
              value={inviteValue}
              onChange={(e) => setInviteValue(e.target.value)}
              className="input-field mb-4"
            />
            <select className="input-field mb-4">
              {MOCK_GROUPS.filter((g) => g !== "All Classes").map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="btn-outline"
              >
                Cancel
              </button>
              {/* TODO: Call POST /api/teacher/students/invite */}
              <button
                onClick={() => {
                  alert(`TODO: Invite student with value "${inviteValue}"`);
                  setShowAddModal(false);
                  setInviteValue("");
                }}
                className="btn-primary"
              >
                Add Student
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
