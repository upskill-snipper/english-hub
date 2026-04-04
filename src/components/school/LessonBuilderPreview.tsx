"use client"

import { useState, useEffect } from "react"
import {
  Sparkles,
  Copy,
  Download,
  FileText,
  Target,
  Zap,
  BookOpen,
  Home,
  FolderOpen,
  RefreshCw,
} from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Types ───────────────────────────────────────────────────────────────────

type TabId = "objectives" | "starter" | "main" | "homework" | "resources"

interface LessonExample {
  title: string
  year: string
  board: string
  duration: string
  objectives: string[]
  starter: { activity: string; duration: string; detail: string }[]
  main: { phase: string; duration: string; detail: string }[]
  homework: string
  resources: { type: string; title: string }[]
}

// ─── Static data ─────────────────────────────────────────────────────────────

const SECTION_TABS: { id: TabId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "objectives", label: "Objectives", icon: Target },
  { id: "starter", label: "Starter", icon: Zap },
  { id: "main", label: "Main Activities", icon: BookOpen },
  { id: "homework", label: "Homework", icon: Home },
  { id: "resources", label: "Resources", icon: FolderOpen },
]

const LESSON_EXAMPLES: LessonExample[] = [
  {
    title: "Macbeth Act 1 - Power and Ambition",
    year: "Year 10",
    board: "Edexcel IGCSE",
    duration: "60 mins",
    objectives: [
      "By end of lesson students will be able to...",
      "Analyse Shakespeare's use of language to convey ambition",
      "Explain how power is presented through character and imagery",
      "Write a comparative paragraph using embedded quotations",
    ],
    starter: [
      {
        activity: "Think-Pair-Share",
        duration: "10 min",
        detail: "Students discuss: 'What does ambition feel like?' Share examples from history or fiction. Bridge to Macbeth's context.",
      },
    ],
    main: [
      {
        phase: "Close Reading",
        duration: "20 min",
        detail: "Annotate Act 1 Scene 7 — 'vaulting ambition' soliloquy. Students identify language techniques and discuss effect on the audience.",
      },
      {
        phase: "Structured Writing",
        duration: "20 min",
        detail: "Model PEEL paragraph on ambition. Students draft their own response to: 'How does Shakespeare present Macbeth's ambition?'",
      },
    ],
    homework: "Write a 250-word analytical paragraph comparing how power is presented in Act 1 Scene 3 and Act 1 Scene 7. Include at least two embedded quotations with analysis.",
    resources: [
      { type: "Extract", title: "Act 1 Scene 7 annotated extract" },
      { type: "Scaffold", title: "PEEL paragraph frame (Foundation)" },
      { type: "Context", title: "Jacobean attitudes to ambition - info sheet" },
      { type: "Mark Scheme", title: "AO2 language analysis success criteria" },
    ],
  },
  {
    title: "An Inspector Calls - Responsibility and Class",
    year: "Year 11",
    board: "AQA GCSE",
    duration: "60 mins",
    objectives: [
      "By end of lesson students will be able to...",
      "Understand Priestley's socialist message and dramatic purpose",
      "Analyse the Inspector as a symbol of collective responsibility",
      "Evaluate how Priestley uses dramatic irony and structure",
    ],
    starter: [
      {
        activity: "Opinion Line",
        duration: "8 min",
        detail: "Students position themselves on a scale from 'individual responsibility' to 'collective responsibility'. Justify their position.",
      },
    ],
    main: [
      {
        phase: "Character Tracking",
        duration: "20 min",
        detail: "Group task: track Sheila's attitude before and after the Inspector's visit. Create an annotated timeline with textual evidence.",
      },
      {
        phase: "Essay Planning",
        duration: "22 min",
        detail: "Scaffold an essay: 'How does Priestley use the Inspector to convey his message about responsibility?' Students plan and write an introduction.",
      },
    ],
    homework: "Read Act 3's final scene. Write a director's note explaining how you would stage the Inspector's exit for maximum dramatic impact. Consider lighting, sound, and character positioning.",
    resources: [
      { type: "Extract", title: "Act 1 opening and Act 3 closing - comparison sheet" },
      { type: "Scaffold", title: "Character arc tracking grid" },
      { type: "Context", title: "Post-WW2 Britain - social context card" },
      { type: "Mark Scheme", title: "AQA AO3 context mark scheme descriptors" },
    ],
  },
  {
    title: "A Christmas Carol - Redemption and Social Critique",
    year: "Year 9",
    board: "OCR GCSE",
    duration: "60 mins",
    objectives: [
      "By end of lesson students will be able to...",
      "Trace Scrooge's transformation arc across the novella",
      "Analyse Dickens' use of the Gothic and supernatural",
      "Identify how Dickens critiques Victorian attitudes to poverty",
    ],
    starter: [
      {
        activity: "Quotation Sort",
        duration: "10 min",
        detail: "Students sort quotations showing Scrooge at different points in the novella. Order chronologically and label the shift in characterisation.",
      },
    ],
    main: [
      {
        phase: "Close Read",
        duration: "20 min",
        detail: "Focus on Stave 1 — Scrooge's description. Analyse language choices: 'squeezing, wrenching, grasping, scraping'. What does each word reveal?",
      },
      {
        phase: "Comparison Task",
        duration: "20 min",
        detail: "Compare Stave 1 Scrooge with Stave 5. How does Dickens signal his redemption? Students write a structured comparative paragraph.",
      },
    ],
    homework: "Choose any one of the three Spirits. Write an analytical paragraph explaining how Dickens uses this Spirit to change Scrooge's perspective. Use at least two quotations.",
    resources: [
      { type: "Extract", title: "Stave 1 - Scrooge's introduction (annotated)" },
      { type: "Scaffold", title: "Comparative paragraph frame (Foundation + Extension)" },
      { type: "Context", title: "Victorian poverty - workhouses and the Poor Law" },
      { type: "Glossary", title: "Gothic and supernatural terminology" },
    ],
  },
]

// ─── Tab content renderers ────────────────────────────────────────────────────

function ObjectivesContent({ lesson }: { lesson: LessonExample }) {
  return (
    <div className="space-y-2">
      {lesson.objectives.map((obj, i) => (
        <div key={i} className="flex items-start gap-3 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2.5">
          {i === 0 ? (
            <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-widest text-white/30 shrink-0">
              Goal
            </span>
          ) : (
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-[10px] font-bold text-blue-400">
              {i}
            </span>
          )}
          <p className={cn("text-sm leading-relaxed", i === 0 ? "text-white/40 italic" : "text-white/75")}>
            {obj}
          </p>
        </div>
      ))}
    </div>
  )
}

function StarterContent({ lesson }: { lesson: LessonExample }) {
  return (
    <div className="space-y-3">
      {lesson.starter.map((s, i) => (
        <div key={i} className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-sm font-semibold text-amber-300">{s.activity}</span>
            </div>
            <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-400">
              {s.duration}
            </span>
          </div>
          <p className="text-sm text-white/65 leading-relaxed">{s.detail}</p>
        </div>
      ))}
    </div>
  )
}

function MainContent({ lesson }: { lesson: LessonExample }) {
  return (
    <div className="space-y-3">
      {lesson.main.map((activity, i) => (
        <div key={i} className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-4 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-400">
                {i + 1}
              </span>
              <span className="text-sm font-semibold text-white/90">{activity.phase}</span>
            </div>
            <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[11px] font-medium text-white/50">
              {activity.duration}
            </span>
          </div>
          <p className="text-sm text-white/65 leading-relaxed">{activity.detail}</p>
        </div>
      ))}
    </div>
  )
}

function HomeworkContent({ lesson }: { lesson: LessonExample }) {
  return (
    <div className="space-y-3">
      <div className="rounded-lg border border-purple-500/20 bg-purple-500/5 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-purple-400 mb-2">
          Homework Task
        </p>
        <p className="text-sm text-white/70 leading-relaxed">{lesson.homework}</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/40">
          Foundation: paragraph scaffold provided
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/40">
          Extension: consider historical context
        </span>
      </div>
    </div>
  )
}

function ResourcesContent({ lesson }: { lesson: LessonExample }) {
  const typeColors: Record<string, string> = {
    Extract: "text-blue-400 bg-blue-500/15",
    Scaffold: "text-emerald-400 bg-emerald-500/15",
    Context: "text-amber-400 bg-amber-500/15",
    "Mark Scheme": "text-rose-400 bg-rose-500/15",
    Glossary: "text-purple-400 bg-purple-500/15",
  }

  return (
    <div className="space-y-2">
      {lesson.resources.map((resource, i) => (
        <div key={i} className="flex items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2.5">
          <span
            className={cn(
              "shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold",
              typeColors[resource.type] ?? "text-white/50 bg-white/10"
            )}
          >
            {resource.type}
          </span>
          <p className="text-sm text-white/70">{resource.title}</p>
          <button
            type="button"
            className="ml-auto shrink-0 rounded px-2 py-0.5 text-[11px] text-white/30 hover:text-white/60 hover:bg-white/[0.06] transition-colors"
          >
            View
          </button>
        </div>
      ))}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function LessonBuilderPreview() {
  const [activeTab, setActiveTab] = useState<TabId>("objectives")
  const [lessonIndex, setLessonIndex] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)

  const lesson = LESSON_EXAMPLES[lessonIndex % LESSON_EXAMPLES.length]

  // Auto-cycle through tabs every 3 seconds
  useEffect(() => {
    const tabOrder: TabId[] = ["objectives", "starter", "main", "homework", "resources"]
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabOrder.indexOf(current)
        return tabOrder[(currentIndex + 1) % tabOrder.length]
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  function handleGenerateAnother() {
    setIsGenerating(true)
    setActiveTab("objectives")
    setTimeout(() => {
      setLessonIndex((prev) => prev + 1)
      setIsGenerating(false)
    }, 800)
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl">
      {/* Header bar */}
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#161b22] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-1">
            <BookOpen className="h-3 w-3 text-white/30" />
            <span className="text-[11px] font-medium text-white/40">Lesson Builder</span>
          </div>
        </div>
        <button
          type="button"
          disabled={isGenerating}
          className={cn(
            "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all",
            isGenerating
              ? "bg-blue-600/40 text-white/50 cursor-wait"
              : "bg-blue-600 text-white hover:bg-blue-500 active:scale-95"
          )}
        >
          <Sparkles className={cn("h-3.5 w-3.5", isGenerating && "animate-spin")} />
          {isGenerating ? "Generating..." : "Generate"}
        </button>
      </div>

      {/* Lesson card */}
      <div className="p-4 space-y-3">

        {/* Lesson metadata */}
        {isGenerating ? (
          <div className="space-y-2 animate-pulse">
            <div className="h-4 w-64 rounded bg-white/10" />
            <div className="flex gap-2">
              <div className="h-5 w-20 rounded-full bg-white/[0.07]" />
              <div className="h-5 w-28 rounded-full bg-white/[0.07]" />
              <div className="h-5 w-16 rounded-full bg-white/[0.07]" />
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 space-y-3">
            {/* Lesson title row */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-400 mb-1">
                  Generated Lesson Plan
                </p>
                <h3 className="text-base font-bold text-white leading-snug">{lesson.title}</h3>
              </div>
              <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              </span>
            </div>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-white/[0.06] border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/60">
                {lesson.year}
              </span>
              <span className="rounded-full bg-white/[0.06] border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/60">
                {lesson.board}
              </span>
              <span className="rounded-full bg-white/[0.06] border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/60">
                {lesson.duration}
              </span>
            </div>

            {/* Section tabs */}
            <div className="flex gap-0.5 rounded-lg bg-white/[0.04] p-0.5 overflow-x-auto">
              {SECTION_TABS.map((tab) => {
                const Icon = tab.icon
                const active = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] font-medium transition-all whitespace-nowrap",
                      active
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-white/40 hover:text-white/65 hover:bg-white/[0.05]"
                    )}
                  >
                    <Icon className="h-3 w-3" />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Tab content */}
            <div className="min-h-[160px]">
              {isGenerating ? (
                <div className="space-y-2 animate-pulse">
                  <div className="h-10 rounded-lg bg-white/[0.05]" />
                  <div className="h-10 rounded-lg bg-white/[0.05]" />
                  <div className="h-10 rounded-lg bg-white/[0.05]" />
                </div>
              ) : (
                <>
                  {activeTab === "objectives" && <ObjectivesContent lesson={lesson} />}
                  {activeTab === "starter" && <StarterContent lesson={lesson} />}
                  {activeTab === "main" && <MainContent lesson={lesson} />}
                  {activeTab === "homework" && <HomeworkContent lesson={lesson} />}
                  {activeTab === "resources" && <ResourcesContent lesson={lesson} />}
                </>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2 pt-1 border-t border-white/[0.06]">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/65 hover:bg-white/[0.08] hover:text-white/80 transition-colors"
              >
                <Copy className="h-3 w-3" />
                Copy Lesson Plan
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/65 hover:bg-white/[0.08] hover:text-white/80 transition-colors"
              >
                <Download className="h-3 w-3" />
                Download PDF
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/65 hover:bg-white/[0.08] hover:text-white/80 transition-colors"
              >
                <FileText className="h-3 w-3" />
                Create Worksheet
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Generate Another footer */}
      <div className="flex items-center justify-between border-t border-white/[0.07] bg-[#161b22] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-white/30 font-mono">AI ready</span>
        </div>
        <button
          type="button"
          onClick={handleGenerateAnother}
          disabled={isGenerating}
          className={cn(
            "flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-colors",
            isGenerating
              ? "text-white/20 cursor-wait"
              : "text-white/40 hover:text-white/70 hover:bg-white/[0.05]"
          )}
        >
          <RefreshCw className={cn("h-3 w-3", isGenerating && "animate-spin")} />
          Generate Another
        </button>
      </div>
    </div>
  )
}
