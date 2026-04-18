"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ClipboardList,
  CheckCircle2,
  Clock,
  AlertTriangle,
  BookOpen,
  FileText,
  Users,
  ChevronRight,
  X,
  Sparkles,
  Star,
  ArrowLeft,
  Wand2,
} from "lucide-react"
import DemoBanner from "@/components/demo/DemoBanner"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Tab = "set" | "track" | "mark"

interface Assignment {
  id: string
  title: string
  className: string
  type: string
  dueDate: string
  submitted: number
  total: number
  overdue: number
}

interface StudentSubmission {
  name: string
  status: "submitted" | "overdue" | "not started"
  submittedAt?: string
}

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

const CLASSES = ["Year 10A - English Literature", "Year 11B - English Literature", "Year 9C - English Language", "Year 8D - English Language"]
const TYPES = ["Essay", "Worksheet", "Reading Task", "Quiz"]

const MOCK_ASSIGNMENTS: Assignment[] = [
  {
    id: "a1",
    title: "Macbeth Essay - Lady Macbeth Character Analysis",
    className: "Year 10A",
    type: "Essay",
    dueDate: "2026-04-10",
    submitted: 22,
    total: 28,
    overdue: 6,
  },
  {
    id: "a2",
    title: "An Inspector Calls - Comprehension Questions",
    className: "Year 11B",
    type: "Worksheet",
    dueDate: "2026-04-08",
    submitted: 25,
    total: 25,
    overdue: 0,
  },
  {
    id: "a3",
    title: "Creative Writing - Descriptive Piece",
    className: "Year 9C",
    type: "Essay",
    dueDate: "2026-04-12",
    submitted: 18,
    total: 30,
    overdue: 2,
  },
  {
    id: "a4",
    title: "Poetry Anthology - Unseen Poetry Practice",
    className: "Year 10A",
    type: "Reading Task",
    dueDate: "2026-04-15",
    submitted: 10,
    total: 28,
    overdue: 0,
  },
]

const MOCK_STUDENTS: StudentSubmission[] = [
  { name: "Emily Chen", status: "submitted", submittedAt: "2 Apr, 14:32" },
  { name: "James Wilson", status: "submitted", submittedAt: "3 Apr, 09:15" },
  { name: "Sophie Taylor", status: "submitted", submittedAt: "1 Apr, 16:48" },
  { name: "Oliver Brown", status: "submitted", submittedAt: "3 Apr, 11:20" },
  { name: "Amara Okafor", status: "submitted", submittedAt: "2 Apr, 10:05" },
  { name: "Liam Patterson", status: "overdue" },
  { name: "Isabella Martinez", status: "overdue" },
  { name: "Daniel Hughes", status: "overdue" },
  { name: "Grace Thompson", status: "not started" },
  { name: "Noah Williams", status: "not started" },
]

const MOCK_ESSAY = `Lady Macbeth is presented as a powerful and manipulative character in Shakespeare's play. From her first appearance, she challenges the gender norms of the Jacobean era by calling on dark spirits to "unsex" her, showing her desire to reject femininity in favour of cruelty.

Shakespeare uses imperative language when Lady Macbeth commands her husband, demonstrating her dominance in their relationship. The metaphor of the "serpent" suggests she is cunning and deceptive, linking to the biblical imagery of evil.

However, as the play progresses, Lady Macbeth's guilt overwhelms her. The sleepwalking scene in Act 5 reveals her mental deterioration, with the repetition of "Out, damned spot" symbolising her inability to cleanse her conscience. This contrast between her earlier strength and later fragility makes her a tragic figure.`

// ---------------------------------------------------------------------------
// Toast component
// ---------------------------------------------------------------------------

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg bg-teal-800/10 border border-teal-800/30 px-4 py-3 text-sm text-teal-700 shadow-xl animate-in slide-in-from-bottom-4">
      <CheckCircle2 className="h-4 w-4 text-teal-700 shrink-0" />
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 text-teal-700/60 hover:text-teal-700">
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Progress bar component
// ---------------------------------------------------------------------------

function ProgressBar({ submitted, total, overdue }: { submitted: number; total: number; overdue: number }) {
  const pct = Math.round((submitted / total) * 100)
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="text-ink-500">{submitted}/{total} submitted</span>
        {overdue > 0 && (
          <span className="text-clay-600/80 flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />
            {overdue} overdue
          </span>
        )}
        {overdue === 0 && submitted === total && (
          <span className="text-teal-700/80 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Complete
          </span>
        )}
      </div>
      <div className="h-2 rounded-full bg-cream-100 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            submitted === total ? "bg-teal-700" : overdue > 0 ? "bg-amber-500" : "bg-teal-600"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function HomeworkDemoPage() {
  const [activeTab, setActiveTab] = useState<Tab>("set")
  const [toast, setToast] = useState<string | null>(null)
  const [createdAssignment, setCreatedAssignment] = useState(false)
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null)

  // Set Homework form state
  const [formClass, setFormClass] = useState("")
  const [formTitle, setFormTitle] = useState("")
  const [formType, setFormType] = useState("")
  const [formDue, setFormDue] = useState("")
  const [formInstructions, setFormInstructions] = useState("")

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(null), 3000)
  }

  function handleSetHomework() {
    showToast("Assignment set (demo mode)")
    setCreatedAssignment(true)
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: "set", label: "Set Homework" },
    { key: "track", label: "Track Progress" },
    { key: "mark", label: "Mark Work" },
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      <DemoBanner message="This is an interactive demo of homework management. No real data is saved." />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-800/10 to-teal-600/20 border border-teal-800/20">
                <ClipboardList className="h-5 w-5 text-teal-700" />
              </div>
              <h1 className="text-2xl font-bold text-ink-900">Homework Dashboard</h1>
            </div>
            <Link
              href="/demo/teacher/homework/generate"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-800 to-teal-600 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              <Wand2 className="h-4 w-4" />
              Auto-Generate Homework
            </Link>
          </div>
          <p className="text-ink-500 text-sm mt-1">Set, track, and mark homework assignments for your classes.</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 p-1 rounded-xl bg-white border border-ink-200 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key)
                setSelectedAssignment(null)
              }}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? "bg-cream-100 text-ink-900 shadow-sm"
                  : "text-ink-500 hover:text-ink-600 hover:bg-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ============================================================= */}
        {/* SET HOMEWORK TAB */}
        {/* ============================================================= */}
        {activeTab === "set" && (
          <div className="space-y-6">
            {/* AI Generate Card */}
            <Link
              href="/demo/teacher/homework/generate"
              className="block rounded-xl border border-teal-800/20 bg-gradient-to-r from-teal-800/5 to-teal-600/5 p-6 hover:from-teal-800/10 hover:to-teal-600/10 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-800/20 to-teal-600/10 border border-teal-800/20">
                    <Sparkles className="h-6 w-6 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink-900 group-hover:text-teal-700 transition-colors">
                      Auto-Generate Homework with AI
                    </h3>
                    <p className="text-sm text-ink-500 mt-0.5">
                      Select a topic, type, and grade level -- get a complete homework assignment with mark scheme, success criteria, and extension tasks in seconds.
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-ink-500 group-hover:text-teal-700 transition-colors shrink-0 ml-4" />
              </div>
            </Link>

            <div className="rounded-xl border border-ink-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-ink-900 mb-6">Create New Assignment</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Class select */}
                <div className="space-y-2">
                  <label className="text-sm text-ink-600">Class</label>
                  <select
                    value={formClass}
                    onChange={(e) => setFormClass(e.target.value)}
                    className="w-full rounded-lg bg-white border border-ink-200 px-3 py-2.5 text-sm text-ink-900 focus:outline-none focus:border-teal-800/40"
                  >
                    <option value="" className="bg-cream-100">Select class...</option>
                    {CLASSES.map((c) => (
                      <option key={c} value={c} className="bg-cream-100">{c}</option>
                    ))}
                  </select>
                </div>

                {/* Type select */}
                <div className="space-y-2">
                  <label className="text-sm text-ink-600">Assignment Type</label>
                  <select
                    value={formType}
                    onChange={(e) => setFormType(e.target.value)}
                    className="w-full rounded-lg bg-white border border-ink-200 px-3 py-2.5 text-sm text-ink-900 focus:outline-none focus:border-teal-800/40"
                  >
                    <option value="" className="bg-cream-100">Select type...</option>
                    {TYPES.map((t) => (
                      <option key={t} value={t} className="bg-cream-100">{t}</option>
                    ))}
                  </select>
                </div>

                {/* Title */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm text-ink-600">Assignment Title</label>
                  <input
                    type="text"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. Macbeth Act 1 Analysis Essay"
                    className="w-full rounded-lg bg-white border border-ink-200 px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-teal-800/40"
                  />
                </div>

                {/* Due date */}
                <div className="space-y-2">
                  <label className="text-sm text-ink-600">Due Date</label>
                  <input
                    type="date"
                    value={formDue}
                    onChange={(e) => setFormDue(e.target.value)}
                    className="w-full rounded-lg bg-white border border-ink-200 px-3 py-2.5 text-sm text-ink-900 focus:outline-none focus:border-teal-800/40"
                  />
                </div>

                {/* Instructions */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm text-ink-600">Instructions</label>
                  <textarea
                    value={formInstructions}
                    onChange={(e) => setFormInstructions(e.target.value)}
                    rows={4}
                    placeholder="Write detailed instructions for your students..."
                    className="w-full rounded-lg bg-white border border-ink-200 px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-teal-800/40 resize-none"
                  />
                </div>
              </div>

              <button
                onClick={handleSetHomework}
                className="mt-6 px-6 py-2.5 rounded-lg bg-gradient-to-r from-teal-800 to-teal-600 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Set Homework
              </button>
            </div>

            {/* Created assignment preview */}
            {createdAssignment && (
              <div className="rounded-xl border border-teal-800/20 bg-teal-800/5 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-4 w-4 text-teal-700" />
                  <h3 className="text-sm font-semibold text-teal-700">Assignment Created</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-ink-500 text-xs mb-1">Class</p>
                    <p className="text-ink-900">{formClass || "Year 10A - English Literature"}</p>
                  </div>
                  <div>
                    <p className="text-ink-500 text-xs mb-1">Title</p>
                    <p className="text-ink-900">{formTitle || "Macbeth Act 1 Analysis Essay"}</p>
                  </div>
                  <div>
                    <p className="text-ink-500 text-xs mb-1">Type</p>
                    <p className="text-ink-900">{formType || "Essay"}</p>
                  </div>
                  <div>
                    <p className="text-ink-500 text-xs mb-1">Due</p>
                    <p className="text-ink-900">{formDue || "2026-04-14"}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================================= */}
        {/* TRACK PROGRESS TAB */}
        {/* ============================================================= */}
        {activeTab === "track" && !selectedAssignment && (
          <div className="space-y-4">
            {MOCK_ASSIGNMENTS.map((a) => (
              <button
                key={a.id}
                onClick={() => setSelectedAssignment(a)}
                className="w-full text-left rounded-xl border border-ink-200 bg-white p-5 hover:bg-white transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-ink-900 group-hover:text-ink-900">{a.title}</h3>
                    <p className="text-xs text-ink-500 mt-0.5">{a.className} -- {a.type} -- Due: {a.dueDate}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-ink-500 group-hover:text-ink-500 transition-colors" />
                </div>
                <ProgressBar submitted={a.submitted} total={a.total} overdue={a.overdue} />
              </button>
            ))}
          </div>
        )}

        {/* Student submission list */}
        {activeTab === "track" && selectedAssignment && (
          <div className="space-y-4">
            <button
              onClick={() => setSelectedAssignment(null)}
              className="flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to assignments
            </button>

            <div className="rounded-xl border border-ink-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-ink-900 mb-1">{selectedAssignment.title}</h3>
              <p className="text-sm text-ink-500 mb-4">{selectedAssignment.className}</p>
              <ProgressBar
                submitted={selectedAssignment.submitted}
                total={selectedAssignment.total}
                overdue={selectedAssignment.overdue}
              />
            </div>

            <div className="rounded-xl border border-ink-200 bg-white overflow-hidden">
              <div className="px-5 py-3 border-b border-ink-200">
                <h4 className="text-sm font-medium text-ink-600">Student Submissions</h4>
              </div>
              <div className="divide-y divide-ink-200">
                {MOCK_STUDENTS.map((s) => (
                  <div key={s.name} className="flex items-center justify-between px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-cream-100 flex items-center justify-center text-xs text-ink-500 font-medium">
                        {s.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className="text-sm text-ink-900">{s.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {s.status === "submitted" && (
                        <>
                          <span className="text-xs text-ink-500">{s.submittedAt}</span>
                          <span className="px-2 py-0.5 rounded-full text-xs bg-teal-800/10 text-teal-700 border border-teal-800/20">
                            Submitted
                          </span>
                        </>
                      )}
                      {s.status === "overdue" && (
                        <span className="px-2 py-0.5 rounded-full text-xs bg-amber-500/15 text-clay-600 border border-amber-500/20">
                          Overdue
                        </span>
                      )}
                      {s.status === "not started" && (
                        <span className="px-2 py-0.5 rounded-full text-xs bg-cream-100 text-ink-500 border border-ink-200">
                          Not Started
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================= */}
        {/* MARK WORK TAB */}
        {/* ============================================================= */}
        {activeTab === "mark" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Student essay */}
            <div className="rounded-xl border border-ink-200 bg-white p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-cream-100 flex items-center justify-center text-xs text-ink-500 font-medium">
                  EC
                </div>
                <div>
                  <p className="text-sm font-medium text-ink-900">Emily Chen</p>
                  <p className="text-xs text-ink-500">Macbeth Essay - Submitted 2 Apr, 14:32</p>
                </div>
              </div>
              <div className="rounded-lg bg-white border border-ink-200 p-4 text-sm text-ink-600 leading-relaxed whitespace-pre-line max-h-[400px] overflow-y-auto">
                {MOCK_ESSAY}
              </div>
            </div>

            {/* AI feedback panel + teacher review */}
            <div className="space-y-5">
              {/* AI Analysis */}
              <div className="rounded-xl border border-clay-500/20 bg-clay-500/5 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-clay-600" />
                  <h3 className="text-sm font-semibold text-clay-600">AI Feedback</h3>
                </div>

                {/* Grade prediction */}
                <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-white border border-ink-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-800/10 to-teal-600/20 border border-teal-800/20">
                    <span className="text-lg font-bold text-teal-700">6</span>
                  </div>
                  <div>
                    <p className="text-xs text-ink-500">Predicted Grade</p>
                    <p className="text-sm font-semibold text-ink-900">Grade 6</p>
                  </div>
                </div>

                {/* AO scores */}
                <div className="space-y-2.5 mb-4">
                  {[
                    { label: "AO1 - Reading & Understanding", score: 14, max: 20 },
                    { label: "AO2 - Analysis of Language", score: 12, max: 20 },
                    { label: "AO3 - Context", score: 10, max: 20 },
                    { label: "AO4 - SPaG", score: 8, max: 10 },
                  ].map((ao) => (
                    <div key={ao.label} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-ink-600">{ao.label}</span>
                        <span className="text-ink-900 font-medium">{ao.score}/{ao.max}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-cream-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-teal-600 to-teal-600"
                          style={{ width: `${(ao.score / ao.max) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-ink-200 flex items-center justify-between text-sm">
                    <span className="text-ink-600">Overall</span>
                    <span className="text-ink-900 font-semibold">44/70 (63%)</span>
                  </div>
                </div>

                {/* Detailed feedback */}
                <div className="text-xs text-ink-600 leading-relaxed space-y-2">
                  <p>
                    Strong opening paragraph that immediately addresses the question. Good use of embedded quotations
                    and some effective analysis of language devices. The essay demonstrates clear understanding of Lady
                    Macbeth&apos;s character arc across the play.
                  </p>
                  <p>
                    To improve: develop contextual links more fully -- the Jacobean reference needs expansion. Consider
                    the audience&apos;s reaction and explore alternative interpretations to reach the top band.
                  </p>
                </div>
              </div>

              {/* Teacher review */}
              <div className="rounded-xl border border-ink-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-ink-900 mb-4">Teacher Review</h3>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs text-ink-500">Adjusted Grade</label>
                    <select className="w-full rounded-lg bg-white border border-ink-200 px-3 py-2 text-sm text-ink-900 focus:outline-none focus:border-teal-800/40">
                      <option value="6" className="bg-cream-100">Grade 6 (agree with AI)</option>
                      <option value="7" className="bg-cream-100">Grade 7</option>
                      <option value="5" className="bg-cream-100">Grade 5</option>
                      <option value="4" className="bg-cream-100">Grade 4</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-ink-500">Additional Comments</label>
                    <textarea
                      rows={3}
                      placeholder="Add your own feedback for the student..."
                      className="w-full rounded-lg bg-white border border-ink-200 px-3 py-2 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-teal-800/40 resize-none"
                    />
                  </div>

                  <button
                    onClick={() => showToast("Feedback returned to student (demo mode)")}
                    className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-teal-800 to-teal-600 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                  >
                    Return to Student
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  )
}
