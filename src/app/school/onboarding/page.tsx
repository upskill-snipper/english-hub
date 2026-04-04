"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  CheckCircle,
  Upload,
  Users,
  BookOpen,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  Copy,
  Download,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase/client"
import { useAuthStore } from "@/store/auth-store"

// ── Constants ────────────────────────────────────────────────────────────────

const TOTAL_STEPS = 5
const STORAGE_KEY = "school_onboarding_state"
const COMPLETION_KEY = "school_onboarding_complete"

const YEAR_GROUPS = [
  "Year 7",
  "Year 8",
  "Year 9",
  "Year 10",
  "Year 11",
  "Year 12",
  "Year 13",
]

const EXAM_BOARDS = ["AQA", "Edexcel", "OCR", "WJEC", "CIE", "Eduqas"]

const STEP_LABELS = ["Welcome", "Teachers", "Students", "Classes", "Complete"]

// ── Types ────────────────────────────────────────────────────────────────────

interface WizardState {
  currentStep: number
  teacherEmailsAdded: string[]
  classCreated: boolean
  importDone: boolean
}

interface SchoolStats {
  teacherCount: number
  studentCount: number
  classCount: number
  schoolName: string
  joinCode: string | null
}

interface ClassForm {
  name: string
  year_group: string
  exam_board: string
  teacher_id: string
}

interface TeacherMember {
  id: string
  full_name: string
}

interface JoinCodeEntry {
  code: string
  is_usable: boolean
  class_id: string | null
}

// ── localStorage helpers ─────────────────────────────────────────────────────

function loadWizardState(): WizardState {
  if (typeof window === "undefined") {
    return {
      currentStep: 1,
      teacherEmailsAdded: [],
      classCreated: false,
      importDone: false,
    }
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as WizardState
  } catch {
    // ignore
  }
  return {
    currentStep: 1,
    teacherEmailsAdded: [],
    classCreated: false,
    importDone: false,
  }
}

function saveWizardState(state: WizardState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore
  }
}

// ── Animated checkmark (CSS only, no external lib) ───────────────────────────

function AnimatedCheckmark() {
  return (
    <div className="flex items-center justify-center mb-4">
      <div className="w-24 h-24">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#6366f1"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="276"
            strokeDashoffset="276"
            style={{ animation: "eh-circle 0.65s ease-out 0.1s forwards" }}
          />
          <polyline
            points="28,52 44,68 72,34"
            fill="none"
            stroke="#6366f1"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="64"
            strokeDashoffset="64"
            style={{ animation: "eh-check 0.4s ease-out 0.75s forwards" }}
          />
        </svg>
      </div>
      <style>{`
        @keyframes eh-circle {
          to { stroke-dashoffset: 0; }
        }
        @keyframes eh-check {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  )
}

// ── Step indicator ───────────────────────────────────────────────────────────

function StepIndicator({ currentStep }: { currentStep: number }) {
  const pct = Math.round(((currentStep - 1) / (TOTAL_STEPS - 1)) * 100)

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-zinc-500">
          Step {currentStep} of {TOTAL_STEPS}
        </span>
        <span className="text-xs text-zinc-500">{pct}% complete</span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-5">
        <div
          className="h-full bg-indigo-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Step dots */}
      <div className="flex items-start justify-between">
        {STEP_LABELS.map((label, i) => {
          const stepNum = i + 1
          const done = stepNum < currentStep
          const active = stepNum === currentStep
          return (
            <div key={label} className="flex flex-col items-center gap-1.5 flex-1">
              <div
                className={[
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 mx-auto",
                  done
                    ? "bg-indigo-500 border-indigo-500 text-white"
                    : active
                    ? "bg-zinc-900 border-indigo-500 text-indigo-400"
                    : "bg-zinc-900 border-zinc-700 text-zinc-600",
                ].join(" ")}
              >
                {done ? <CheckCircle className="w-4 h-4" /> : stepNum}
              </div>
              <span
                className={[
                  "text-[10px] text-center leading-tight hidden sm:block",
                  active
                    ? "text-indigo-400 font-medium"
                    : done
                    ? "text-zinc-400"
                    : "text-zinc-600",
                ].join(" ")}
              >
                {label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Main wizard page ─────────────────────────────────────────────────────────

export default function SchoolOnboardingPage() {
  const router = useRouter()
  const { user } = useAuthStore()

  // Wizard persistence
  const [wizardState, setWizardState] = useState<WizardState>(() =>
    loadWizardState()
  )

  // School data
  const [stats, setStats] = useState<SchoolStats>({
    teacherCount: 0,
    studentCount: 0,
    classCount: 0,
    schoolName: "Your School",
    joinCode: null,
  })
  const [teachers, setTeachers] = useState<TeacherMember[]>([])
  const [statsLoading, setStatsLoading] = useState(true)

  // Step 2 — teacher invite
  const [inviteEmail, setInviteEmail] = useState("")
  const [inviteList, setInviteList] = useState<string[]>([])
  const [inviteSending, setInviteSending] = useState(false)
  const [inviteError, setInviteError] = useState<string | null>(null)
  const [inviteSuccess, setInviteSuccess] = useState(false)

  // Step 3 — join code copy
  const [codeCopied, setCodeCopied] = useState(false)

  // Step 4 — class creation
  const [classForm, setClassForm] = useState<ClassForm>({
    name: "",
    year_group: "",
    exam_board: "",
    teacher_id: "",
  })
  const [classCreating, setClassCreating] = useState(false)
  const [classError, setClassError] = useState<string | null>(null)
  const [classSuccess, setClassSuccess] = useState(false)

  const currentStep = wizardState.currentStep

  // ── Persist state ────────────────────────────────────────────────────────

  const updateWizardState = useCallback((updates: Partial<WizardState>) => {
    setWizardState((prev) => {
      const next = { ...prev, ...updates }
      saveWizardState(next)
      return next
    })
  }, [])

  // ── Fetch school data on mount ───────────────────────────────────────────

  useEffect(() => {
    if (!user) return

    async function fetchData() {
      setStatsLoading(true)
      const supabase = createClient()

      const { data: membership } = await supabase
        .from("school_members")
        .select("*, schools(*)")
        .eq("user_id", user!.id)
        .eq("invite_status", "accepted")
        .limit(1)
        .single()

      if (!membership?.school_id) {
        setStatsLoading(false)
        return
      }

      const schoolId = membership.school_id
      const schoolRow = (membership as { schools?: { name?: string } }).schools

      const [studentsRes, teachersRes, classesRes, membersListRes, joinCodesRes] =
        await Promise.all([
          supabase
            .from("school_members")
            .select("id", { count: "exact", head: true })
            .eq("school_id", schoolId)
            .eq("role", "student")
            .eq("invite_status", "accepted"),
          supabase
            .from("school_members")
            .select("id", { count: "exact", head: true })
            .eq("school_id", schoolId)
            .in("role", ["teacher", "head_of_department"])
            .eq("invite_status", "accepted"),
          supabase
            .from("classes")
            .select("id", { count: "exact", head: true })
            .eq("school_id", schoolId)
            .eq("is_active", true),
          supabase
            .from("school_members")
            .select("id, full_name")
            .eq("school_id", schoolId)
            .in("role", ["teacher", "head_of_department"])
            .eq("invite_status", "accepted"),
          fetch("/api/school/join-codes"),
        ])

      let joinCode: string | null = null
      try {
        if (joinCodesRes.ok) {
          const jcData = (await joinCodesRes.json()) as {
            join_codes?: JoinCodeEntry[]
          }
          const usable = (jcData.join_codes ?? []).find(
            (c) => c.is_usable && !c.class_id
          )
          if (usable) joinCode = usable.code
        }
      } catch {
        // ignore
      }

      setStats({
        teacherCount: teachersRes.count ?? 0,
        studentCount: studentsRes.count ?? 0,
        classCount: classesRes.count ?? 0,
        schoolName: schoolRow?.name ?? "Your School",
        joinCode,
      })
      setTeachers((membersListRes.data ?? []) as TeacherMember[])
      setStatsLoading(false)
    }

    fetchData()
  }, [user])

  // ── Navigation ───────────────────────────────────────────────────────────

  function nextStep() {
    updateWizardState({ currentStep: Math.min(currentStep + 1, TOTAL_STEPS) })
  }

  function prevStep() {
    updateWizardState({ currentStep: Math.max(currentStep - 1, 1) })
  }

  function skipToDashboard() {
    localStorage.setItem(COMPLETION_KEY, "true")
    router.push("/school/dashboard")
  }

  function completeDashboard() {
    localStorage.setItem(COMPLETION_KEY, "true")
    localStorage.removeItem(STORAGE_KEY)
    router.push("/school/dashboard")
  }

  // ── Step 2 helpers ───────────────────────────────────────────────────────

  function addEmailToList() {
    const email = inviteEmail.trim().toLowerCase()
    if (!email || !email.includes("@") || inviteList.includes(email)) return
    setInviteList((prev) => [...prev, email])
    setInviteEmail("")
  }

  function removeFromList(email: string) {
    setInviteList((prev) => prev.filter((e) => e !== email))
  }

  async function sendInvites() {
    if (inviteList.length === 0) return
    setInviteSending(true)
    setInviteError(null)
    try {
      const res = await fetch("/api/school/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emails: inviteList, role: "teacher" }),
      })
      if (!res.ok) {
        const err = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(err.error ?? "Failed to send invites")
      }
      setInviteSuccess(true)
      updateWizardState({ teacherEmailsAdded: inviteList })
      setInviteList([])
    } catch (e) {
      setInviteError(e instanceof Error ? e.message : "Something went wrong")
    } finally {
      setInviteSending(false)
    }
  }

  // ── Step 3 helpers ───────────────────────────────────────────────────────

  async function copyJoinCode() {
    if (!stats.joinCode) return
    try {
      await navigator.clipboard.writeText(stats.joinCode)
      setCodeCopied(true)
      setTimeout(() => setCodeCopied(false), 2000)
    } catch {
      // ignore
    }
  }

  // ── Step 4 helpers ───────────────────────────────────────────────────────

  async function createClass() {
    if (!classForm.name.trim()) {
      setClassError("Class name is required.")
      return
    }
    setClassCreating(true)
    setClassError(null)
    try {
      const body: Record<string, string> = { name: classForm.name.trim() }
      if (classForm.year_group) body.year_group = classForm.year_group
      if (classForm.exam_board) body.exam_board = classForm.exam_board
      if (classForm.teacher_id) body.teacher_id = classForm.teacher_id

      const res = await fetch("/api/school/classes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      if (!res.ok) {
        const err = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(err.error ?? "Failed to create class")
      }
      setClassSuccess(true)
      updateWizardState({ classCreated: true })
      setStats((prev) => ({ ...prev, classCount: prev.classCount + 1 }))
    } catch (e) {
      setClassError(e instanceof Error ? e.message : "Something went wrong")
    } finally {
      setClassCreating(false)
    }
  }

  // ── Shared button classes ────────────────────────────────────────────────

  const pillActive = "bg-indigo-600 border-indigo-500 text-white"
  const pillInactive =
    "bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-zinc-600"

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-start py-10 px-4">
      <div className="w-full max-w-2xl">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-semibold text-zinc-300 tracking-wide">
            The English Hub{" "}
            <span className="text-zinc-600 font-normal">/ Setup</span>
          </span>
          {currentStep > 1 && (
            <button
              onClick={skipToDashboard}
              className="text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-2 transition-colors"
            >
              Skip setup, go to dashboard
            </button>
          )}
        </div>

        {/* Step indicator */}
        <StepIndicator currentStep={currentStep} />

        {/* ── STEP 1: Welcome ─────────────────────────────────────────── */}
        {currentStep === 1 && (
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                </div>
                <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-xs font-semibold">
                  FOUNDER ACCESS
                </Badge>
              </div>
              <CardTitle className="text-2xl text-zinc-100 leading-snug">
                Welcome to The English Hub,{" "}
                <span className="text-indigo-400">
                  {statsLoading ? "..." : stats.schoolName}
                </span>
                !
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-zinc-400 leading-relaxed text-sm">
                Your school account is ready. This short wizard will help you
                configure teachers, students, and your first class in just a few
                minutes.
              </p>

              {/* Access summary */}
              <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/5 p-4 space-y-3">
                <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                  What you have access to
                </p>
                <ul className="space-y-2">
                  {[
                    "FOUNDER access active until August 2026",
                    "Unlimited teachers and students",
                    "All resources, lessons, and worksheets",
                    "Assignments, progress tracking, and analytics",
                    "Priority support and early feature access",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-zinc-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={nextStep}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* ── STEP 2: Add Teachers ─────────────────────────────────────── */}
        {currentStep === 2 && (
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                {!statsLoading && (
                  <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700 text-xs">
                    {stats.teacherCount} teacher
                    {stats.teacherCount !== 1 ? "s" : ""} added
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl text-zinc-100">
                Add Your Teachers
              </CardTitle>
              <p className="text-sm text-zinc-400 mt-1">
                Choose how you would like to bring your teaching staff on board.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">

              {/* Option A — bulk import */}
              <div className="rounded-lg border border-zinc-700 bg-zinc-800/40 p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Upload className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-200">
                      Option A — Upload Excel / CSV
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Import many teachers at once from a spreadsheet.
                    </p>
                    <Link href="/school/import?type=teacher">
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-3 border-zinc-600 text-zinc-300 hover:bg-zinc-700"
                      >
                        Go to Import Tool
                        <ArrowRight className="w-3 h-3 ml-1.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Option B — invite individually */}
              <div className="rounded-lg border border-zinc-700 bg-zinc-800/40 p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-200">
                      Option B — Invite individually
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Send email invitations to teachers one by one.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="teacher@school.ac.uk"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addEmailToList()}
                    className="bg-zinc-900 border-zinc-700 text-zinc-200 placeholder:text-zinc-600 text-sm"
                  />
                  <Button
                    onClick={addEmailToList}
                    variant="outline"
                    size="sm"
                    className="border-zinc-600 text-zinc-300 hover:bg-zinc-700 shrink-0"
                  >
                    Add
                  </Button>
                </div>

                {inviteList.length > 0 && (
                  <div className="space-y-1.5">
                    {inviteList.map((email) => (
                      <div
                        key={email}
                        className="flex items-center justify-between bg-zinc-900 rounded px-3 py-1.5"
                      >
                        <span className="text-xs text-zinc-300">{email}</span>
                        <button
                          onClick={() => removeFromList(email)}
                          className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <Button
                      onClick={sendInvites}
                      disabled={inviteSending}
                      size="sm"
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white mt-1"
                    >
                      {inviteSending
                        ? "Sending..."
                        : `Send ${inviteList.length} Invite${inviteList.length !== 1 ? "s" : ""}`}
                    </Button>
                  </div>
                )}

                {inviteError && (
                  <p className="text-xs text-red-400">{inviteError}</p>
                )}
                {inviteSuccess && (
                  <p className="text-xs text-green-400">
                    Invites sent. Teachers will receive an email to join.
                  </p>
                )}
              </div>

              {/* Option C — skip */}
              <p className="text-xs text-zinc-600 text-center">
                Option C — skip for now and continue below.
              </p>

              {/* Nav */}
              <div className="flex items-center justify-between pt-1">
                <Button
                  onClick={prevStep}
                  variant="outline"
                  size="sm"
                  className="border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                >
                  <ArrowLeft className="w-3 h-3 mr-1.5" />
                  Back
                </Button>
                <div className="flex gap-2">
                  <Button
                    onClick={nextStep}
                    variant="outline"
                    size="sm"
                    className="border-zinc-700 text-zinc-500 hover:bg-zinc-800"
                  >
                    Skip for now
                  </Button>
                  <Button
                    onClick={nextStep}
                    size="sm"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white"
                  >
                    Continue
                    <ArrowRight className="w-3 h-3 ml-1.5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ── STEP 3: Add Students ─────────────────────────────────────── */}
        {currentStep === 3 && (
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-emerald-400" />
                </div>
                {!statsLoading && (
                  <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700 text-xs">
                    {stats.studentCount} student
                    {stats.studentCount !== 1 ? "s" : ""} added
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl text-zinc-100">
                Add Your Students
              </CardTitle>
              <p className="text-sm text-zinc-400 mt-1">
                Import a class list or share your school join code.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">

              {/* Option A — bulk import */}
              <div className="rounded-lg border border-zinc-700 bg-zinc-800/40 p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Upload className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-200">
                      Option A — Upload Excel / CSV
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Import a full year group or class list from a spreadsheet.
                    </p>
                    <Link href="/school/import?type=student">
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-3 border-zinc-600 text-zinc-300 hover:bg-zinc-700"
                      >
                        Go to Import Tool
                        <ArrowRight className="w-3 h-3 ml-1.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Option B — join code */}
              <div className="rounded-lg border border-zinc-700 bg-zinc-800/40 p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-200">
                      Option B — Share your school join code
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Students enter this code to join your school instantly.
                    </p>

                    {stats.joinCode ? (
                      <div className="mt-3 flex items-center gap-2">
                        <div className="flex-1 bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2">
                          <span className="font-mono text-xl font-bold tracking-widest text-indigo-300">
                            {stats.joinCode}
                          </span>
                        </div>
                        <Button
                          onClick={copyJoinCode}
                          size="sm"
                          variant="outline"
                          className="border-zinc-600 text-zinc-300 hover:bg-zinc-700 shrink-0"
                        >
                          <Copy className="w-3.5 h-3.5 mr-1.5" />
                          {codeCopied ? "Copied!" : "Copy"}
                        </Button>
                      </div>
                    ) : (
                      <p className="text-xs text-zinc-500 mt-3">
                        No active join code found.{" "}
                        <Link
                          href="/school/settings"
                          className="text-indigo-400 hover:underline"
                        >
                          Generate one in Settings.
                        </Link>
                      </p>
                    )}

                    <p className="text-xs text-zinc-600 mt-2">
                      Students visit{" "}
                      <span className="text-zinc-400">
                        englishhub.app/school/join
                      </span>{" "}
                      and enter the code above.
                    </p>
                  </div>
                </div>
              </div>

              {/* Option C */}
              <p className="text-xs text-zinc-600 text-center">
                Option C — skip for now and continue below.
              </p>

              {/* Nav */}
              <div className="flex items-center justify-between pt-1">
                <Button
                  onClick={prevStep}
                  variant="outline"
                  size="sm"
                  className="border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                >
                  <ArrowLeft className="w-3 h-3 mr-1.5" />
                  Back
                </Button>
                <div className="flex gap-2">
                  <Button
                    onClick={nextStep}
                    variant="outline"
                    size="sm"
                    className="border-zinc-700 text-zinc-500 hover:bg-zinc-800"
                  >
                    Skip for now
                  </Button>
                  <Button
                    onClick={nextStep}
                    size="sm"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white"
                  >
                    Continue
                    <ArrowRight className="w-3 h-3 ml-1.5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ── STEP 4: Create First Class ───────────────────────────────── */}
        {currentStep === 4 && (
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <CardTitle className="text-xl text-zinc-100">
                Create Your First Class
              </CardTitle>
              <p className="text-sm text-zinc-400 mt-1">
                Set up a class so you can assign resources and track progress.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {classSuccess ? (
                <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-5 text-center">
                  <CheckCircle className="w-9 h-9 text-green-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-green-300">
                    Class created successfully!
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    You can create more classes later from the Classes page.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Class name */}
                  <div className="space-y-1.5">
                    <Label className="text-sm text-zinc-300">
                      Class Name{" "}
                      <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      placeholder="e.g. 10B English Language"
                      value={classForm.name}
                      onChange={(e) =>
                        setClassForm((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="bg-zinc-800 border-zinc-700 text-zinc-200 placeholder:text-zinc-600"
                    />
                  </div>

                  {/* Year group */}
                  <div className="space-y-2">
                    <Label className="text-sm text-zinc-300">Year Group</Label>
                    <div className="flex flex-wrap gap-2">
                      {YEAR_GROUPS.map((yg) => (
                        <button
                          key={yg}
                          onClick={() =>
                            setClassForm((prev) => ({
                              ...prev,
                              year_group:
                                prev.year_group === yg ? "" : yg,
                            }))
                          }
                          className={[
                            "px-3 py-1.5 rounded-md text-xs font-medium border transition-all",
                            classForm.year_group === yg
                              ? pillActive
                              : pillInactive,
                          ].join(" ")}
                        >
                          {yg}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Exam board */}
                  <div className="space-y-2">
                    <Label className="text-sm text-zinc-300">Exam Board</Label>
                    <div className="flex flex-wrap gap-2">
                      {EXAM_BOARDS.map((board) => (
                        <button
                          key={board}
                          onClick={() =>
                            setClassForm((prev) => ({
                              ...prev,
                              exam_board:
                                prev.exam_board === board ? "" : board,
                            }))
                          }
                          className={[
                            "px-3 py-1.5 rounded-md text-xs font-medium border transition-all",
                            classForm.exam_board === board
                              ? pillActive
                              : pillInactive,
                          ].join(" ")}
                        >
                          {board}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Assign teacher */}
                  {teachers.length > 0 && (
                    <div className="space-y-2">
                      <Label className="text-sm text-zinc-300">
                        Assign Teacher
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        {teachers.map((t) => (
                          <button
                            key={t.id}
                            onClick={() =>
                              setClassForm((prev) => ({
                                ...prev,
                                teacher_id:
                                  prev.teacher_id === t.id ? "" : t.id,
                              }))
                            }
                            className={[
                              "px-3 py-1.5 rounded-md text-xs font-medium border transition-all",
                              classForm.teacher_id === t.id
                                ? pillActive
                                : pillInactive,
                            ].join(" ")}
                          >
                            {t.full_name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {classError && (
                    <p className="text-xs text-red-400">{classError}</p>
                  )}

                  <Button
                    onClick={createClass}
                    disabled={classCreating || !classForm.name.trim()}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-50"
                  >
                    {classCreating ? "Creating..." : "Create Class"}
                  </Button>
                </div>
              )}

              {/* Nav */}
              <div className="flex items-center justify-between pt-1">
                <Button
                  onClick={prevStep}
                  variant="outline"
                  size="sm"
                  className="border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                >
                  <ArrowLeft className="w-3 h-3 mr-1.5" />
                  Back
                </Button>
                {classSuccess ? (
                  <Button
                    onClick={nextStep}
                    size="sm"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white"
                  >
                    Continue
                    <ArrowRight className="w-3 h-3 ml-1.5" />
                  </Button>
                ) : (
                  <Button
                    onClick={nextStep}
                    variant="outline"
                    size="sm"
                    className="border-zinc-700 text-zinc-500 hover:bg-zinc-800"
                  >
                    Skip - I'll do this later
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* ── STEP 5: All Set ──────────────────────────────────────────── */}
        {currentStep === 5 && (
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-2">
              <AnimatedCheckmark />
              <CardTitle className="text-2xl text-zinc-100 text-center">
                You're All Set!
              </CardTitle>
              <p className="text-sm text-zinc-400 text-center mt-1">
                Your school is configured and ready to go.
              </p>
            </CardHeader>
            <CardContent className="space-y-5 pt-4">

              {/* Summary */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    label: "Teachers",
                    value: stats.teacherCount,
                    icon: <Users className="w-4 h-4 text-blue-400" />,
                    color: "text-blue-400",
                  },
                  {
                    label: "Students",
                    value: stats.studentCount,
                    icon: (
                      <GraduationCap className="w-4 h-4 text-emerald-400" />
                    ),
                    color: "text-emerald-400",
                  },
                  {
                    label: "Classes",
                    value: stats.classCount,
                    icon: <BookOpen className="w-4 h-4 text-amber-400" />,
                    color: "text-amber-400",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3 text-center"
                  >
                    <div className="flex justify-center mb-1">{item.icon}</div>
                    <p
                      className={[
                        "text-2xl font-bold tabular-nums",
                        item.color,
                      ].join(" ")}
                    >
                      {statsLoading ? "-" : item.value}
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="space-y-2.5">
                {wizardState.importDone && (
                  <Button
                    variant="outline"
                    className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                    onClick={() => router.push("/school/import")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Login Details
                  </Button>
                )}

                <Button
                  onClick={completeDashboard}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Go to Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <Link href="/school/guide">
                  <Button
                    variant="outline"
                    className="w-full border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                  >
                    View Setup Guide
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
