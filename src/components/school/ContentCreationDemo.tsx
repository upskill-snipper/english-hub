"use client"

import { useState } from "react"
import { Brain, BookOpen, FileText, Monitor, ClipboardList, Sparkles, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Types ───────────────────────────────────────────────────────────────────

type TabId = "lessons" | "worksheets" | "presentations" | "homework"

interface Tab {
  id: TabId
  label: string
  icon: React.ComponentType<{ className?: string }>
}

// ─── Static data ─────────────────────────────────────────────────────────────

const TABS: Tab[] = [
  { id: "lessons", label: "Lesson Plans", icon: BookOpen },
  { id: "worksheets", label: "Worksheets", icon: FileText },
  { id: "presentations", label: "Presentations", icon: Monitor },
  { id: "homework", label: "Homework Tasks", icon: ClipboardList },
]

// Each tab has multiple example indices that cycle on button click
const LESSON_EXAMPLES = [
  {
    title: "Macbeth Act 1 — Introduction to Ambition",
    meta: ["Year 10", "AQA", "60 min", "Literature"],
    objectives: [
      "Analyse Shakespeare's presentation of ambition in Act 1",
      "Explore the relationship between Macbeth and Lady Macbeth",
      "Identify key language techniques used by Shakespeare",
    ],
    activities: [
      { phase: "Starter (10 min)", detail: "Close reading of Act 1 Scene 5 — Lady Macbeth's soliloquy. Students annotate for imperative verbs." },
      { phase: "Main 1 (20 min)", detail: "Structured group discussion: how does Shakespeare use the supernatural to drive ambition? Textual evidence required." },
      { phase: "Main 2 (20 min)", detail: "Model paragraph construction using PEEL framework. Focus on the metaphor 'vaulting ambition'." },
      { phase: "Plenary (10 min)", detail: "Exit ticket: write two analytical sentences about Lady Macbeth's influence on Macbeth." },
    ],
    homework: "Write a 250-word analytical paragraph comparing how ambition is presented in Act 1 Scene 3 and Act 1 Scene 7. Use at least two embedded quotations.",
    differentiations: ["Foundation: sentence starters provided", "Extension: compare to Jacobean context"],
  },
  {
    title: "An Inspector Calls — Class & Responsibility",
    meta: ["Year 11", "AQA", "60 min", "Literature"],
    objectives: [
      "Understand Priestley's social message in An Inspector Calls",
      "Analyse the Inspector as a dramatic device",
      "Compare attitudes of older and younger Birlings",
    ],
    activities: [
      { phase: "Starter (10 min)", detail: "Hot-seating activity: students take on character roles and answer questions from the Inspector." },
      { phase: "Main 1 (20 min)", detail: "Text analysis — track how Sheila's attitude shifts across the play. Group annotated timeline task." },
      { phase: "Main 2 (20 min)", detail: "Essay planning frame: 'How does Priestley use the Inspector to convey his socialist message?' " },
      { phase: "Plenary (10 min)", detail: "Peer feedback on introductions — mark against AQA mark scheme level descriptors." },
    ],
    homework: "Read the final scene again and write a director's note explaining how you would stage the Inspector's exit for maximum dramatic impact.",
    differentiations: ["Foundation: character profile scaffold", "Extension: consider post-WW2 context"],
  },
]

const WORKSHEET_EXAMPLES = [
  {
    title: "Language Analysis Worksheet — Macbeth Act 2",
    subtitle: "Year 10 | AQA Literature | Reading & Analysis",
    intro: "Read the extract from Act 2 Scene 2 carefully. Macbeth has just returned from murdering King Duncan.",
    extract: '"Will all great Neptune\'s ocean wash this blood / Clean from my hand? No, this my hand will rather / The multitudinous seas incarnadine, / Making the green one red."',
    questions: [
      { num: "1", marks: 2, q: "What does Macbeth fear in this extract? Use one quotation to support your answer." },
      { num: "2", marks: 4, q: "How does Shakespeare use the imagery of water and blood in this extract? Explore the effect on the audience." },
      { num: "3", marks: 6, q: "How does Shakespeare present Macbeth's guilt at this point in the play? Use the extract and your wider knowledge of the play." },
      { num: "4", marks: 8, q: "\"Macbeth is ultimately a play about the destructive power of guilt.\" How far do you agree? Write a full essay response." },
    ],
  },
  {
    title: "Creative Writing Stimulus — Descriptive Writing",
    subtitle: "Year 9 | English Language | Writing",
    intro: "Look at this image of an abandoned library. Write a descriptive piece inspired by what you see.",
    extract: "Shelves buckled under the weight of forgotten stories. Dust motes hung in the amber light, slow as secrets. The clock on the wall had stopped — but at what hour, and why, no one had thought to ask.",
    questions: [
      { num: "1", marks: 2, q: "List four things you notice in the image above. Use precise nouns." },
      { num: "2", marks: 4, q: "Write a sentence using personification to describe the library. Annotate your technique." },
      { num: "3", marks: 6, q: "Write a paragraph describing the library from the perspective of someone entering it for the first time." },
      { num: "4", marks: 24, q: "Write a description or narrative suggested by the image. (24 marks + 4 SPaG)" },
    ],
  },
]

const PRESENTATION_EXAMPLES = [
  {
    title: "Macbeth — Themes & Context",
    subtitle: "Year 10 AQA Literature | 14 slides",
    slides: [
      { n: "01", label: "Title Slide", note: "Macbeth: Ambition, Power, and Fate — Learning objectives + agenda" },
      { n: "02", label: "Historical Context", note: "Jacobean England, divine right of kings, the Gunpowder Plot (1605)" },
      { n: "03", label: "The Witches", note: "Macabre imagery, fate vs. free will — 'Fair is foul, and foul is fair'" },
      { n: "04", label: "Ambition — Close Read", note: "Act 1 Scene 7 — 'vaulting ambition' — annotated extract + discussion questions" },
      { n: "05", label: "Lady Macbeth", note: "Gender & power — 'unsex me here' — character analysis task" },
      { n: "06", label: "Guilt & Consequence", note: "Act 2 Scene 2 — visual timeline of Macbeth's psychological collapse" },
      { n: "07", label: "Exam Technique", note: "AQA mark scheme levels — model paragraph + success criteria" },
    ],
  },
  {
    title: "An Inspector Calls — Priestley's Message",
    subtitle: "Year 11 AQA Literature | 12 slides",
    slides: [
      { n: "01", label: "Starter: Who Is Responsible?", note: "Opinion line activity — who bears most responsibility for Eva Smith's death?" },
      { n: "02", label: "Context: 1912 vs. 1945", note: "Edwardian class system, post-WW2 attitudes, Priestley's socialism" },
      { n: "03", label: "The Inspector", note: "Dramatic device or real police officer? Symbolism of Goole/ghoul" },
      { n: "04", label: "The Birling Family", note: "Character map — attitudes to responsibility tracked across the play" },
      { n: "05", label: "Sheila's Arc", note: "Before and after — close reading of Act 1 vs. Act 3 dialogue" },
      { n: "06", label: "Essay Planning Frame", note: "Question scaffold + paragraph structure + model introduction" },
    ],
  },
]

const HOMEWORK_EXAMPLES = [
  {
    title: "Analytical Essay — Macbeth",
    meta: ["Year 10", "Due: Next Tuesday", "Estimated: 45 min", "AQA Literature"],
    task: "\"Shakespeare presents Macbeth as a tragic hero destroyed by his own ambition.\" How far do you agree with this view?",
    requirements: [
      "Write a full essay response of 400-600 words",
      "Include at least 4 embedded quotations with analysis",
      "Address both sides of the argument",
      "Use correct literary terminology throughout",
    ],
    guidance: [
      "Plan your essay before you write — 5 minutes of planning saves 10 minutes of rewriting",
      "Use the PEEL paragraph structure: Point, Evidence, Explain, Link",
      "Remember to consider context: Jacobean attitudes to ambition and kingship",
    ],
    markingFocus: ["AO1: Understanding & response", "AO2: Language & structure analysis", "AO3: Context"],
    extension: "Research the real Macbeth — how does history compare to Shakespeare's portrayal? Write a 100-word comparison.",
  },
  {
    title: "Creative Writing Practice — Narrative",
    meta: ["Year 9", "Due: Thursday", "Estimated: 30 min", "English Language"],
    task: "Write the opening of a story set in an unusual or unexpected place. Your aim is to engage and intrigue your reader from the very first line.",
    requirements: [
      "Write 300-400 words",
      "Begin in medias res — start in the middle of the action",
      "Use at least three different sentence structures for effect",
      "Include a character whose motivations are unclear",
    ],
    guidance: [
      "Avoid starting with 'I woke up' — begin with something unexpected",
      "Read your writing aloud — if it sounds odd, it probably reads odd",
      "Show, don't tell: 'Her hands shook' not 'She was nervous'",
    ],
    markingFocus: ["AO5: Communication & organisation", "AO6: Technical accuracy (SPaG)"],
    extension: "Swap your opening with a classmate and write a second paragraph continuing their story.",
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function LessonPlanCard({ idx }: { idx: number }) {
  const ex = LESSON_EXAMPLES[idx % LESSON_EXAMPLES.length]
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1">
            Lesson Plan
          </p>
          <h3 className="text-base font-bold text-white leading-snug">{ex.title}</h3>
        </div>
        <div className="flex flex-wrap gap-1.5 shrink-0">
          {ex.meta.map((m) => (
            <span
              key={m}
              className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/70"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Objectives */}
      <div className="rounded-lg bg-white/5 border border-white/10 p-3 space-y-1.5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-2">
          Learning Objectives
        </p>
        {ex.objectives.map((obj, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[9px] font-bold text-emerald-400">
              {i + 1}
            </span>
            <p className="text-xs text-white/70 leading-relaxed">{obj}</p>
          </div>
        ))}
      </div>

      {/* Activities */}
      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
          Activities
        </p>
        {ex.activities.map((act, i) => (
          <div
            key={i}
            className="flex gap-3 rounded-lg border border-white/[0.07] bg-white/[0.04] p-3"
          >
            <div className="shrink-0 w-28">
              <p className="text-[11px] font-semibold text-emerald-400">{act.phase}</p>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">{act.detail}</p>
          </div>
        ))}
      </div>

      {/* Homework */}
      <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-clay-600 mb-1">
          Homework
        </p>
        <p className="text-xs text-white/60 leading-relaxed">{ex.homework}</p>
      </div>

      {/* Differentiations */}
      <div className="flex gap-2">
        {ex.differentiations.map((d, i) => (
          <span
            key={i}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/50"
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  )
}

function WorksheetCard({ idx }: { idx: number }) {
  const ex = WORKSHEET_EXAMPLES[idx % WORKSHEET_EXAMPLES.length]
  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">
          Worksheet
        </p>
        <h3 className="text-base font-bold text-white">{ex.title}</h3>
        <p className="text-xs text-white/40 mt-0.5">{ex.subtitle}</p>
      </div>

      {/* Context */}
      <div className="rounded-lg bg-white/5 border border-white/10 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-2">
          Context
        </p>
        <p className="text-xs text-white/60 leading-relaxed">{ex.intro}</p>
      </div>

      {/* Extract */}
      <div className="rounded-lg border-l-2 border-blue-400 bg-blue-500/5 px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-400 mb-2">
          Source Extract
        </p>
        <p className="text-sm italic text-white/70 leading-relaxed">{ex.extract}</p>
      </div>

      {/* Questions */}
      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
          Questions
        </p>
        {ex.questions.map((q) => (
          <div
            key={q.num}
            className="flex gap-3 rounded-lg border border-white/[0.07] bg-white/[0.03] p-3"
          >
            <div className="shrink-0 flex flex-col items-center gap-1">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-[11px] font-bold text-blue-400">
                {q.num}
              </span>
              <span className="text-[10px] text-white/30">[{q.marks}]</span>
            </div>
            <p className="text-xs text-white/65 leading-relaxed">{q.q}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PresentationCard({ idx }: { idx: number }) {
  const ex = PRESENTATION_EXAMPLES[idx % PRESENTATION_EXAMPLES.length]
  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-1">
          Presentation Outline
        </p>
        <h3 className="text-base font-bold text-white">{ex.title}</h3>
        <p className="text-xs text-white/40 mt-0.5">{ex.subtitle}</p>
      </div>

      {/* Mock slide deck preview */}
      <div className="grid grid-cols-3 gap-2">
        {ex.slides.slice(0, 3).map((s) => (
          <div
            key={s.n}
            className="aspect-video rounded-lg border border-white/10 bg-gradient-to-br from-purple-900/40 to-slate-900/60 p-2 flex flex-col justify-between"
          >
            <span className="text-[9px] font-bold text-purple-400/60">{s.n}</span>
            <p className="text-[10px] font-semibold text-white/80 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Slide list */}
      <div className="space-y-1.5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
          Slide Outline
        </p>
        {ex.slides.map((s) => (
          <div
            key={s.n}
            className="flex items-start gap-3 rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-2"
          >
            <span className="shrink-0 rounded bg-purple-500/20 px-1.5 py-0.5 text-[10px] font-bold text-purple-300">
              {s.n}
            </span>
            <div>
              <p className="text-xs font-semibold text-white/80">{s.label}</p>
              <p className="text-[11px] text-white/40 mt-0.5 leading-snug">{s.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function HomeworkCard({ idx }: { idx: number }) {
  const ex = HOMEWORK_EXAMPLES[idx % HOMEWORK_EXAMPLES.length]
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-1">
            Homework Assignment
          </p>
          <h3 className="text-base font-bold text-white leading-snug">{ex.title}</h3>
        </div>
        <div className="flex flex-wrap gap-1.5 shrink-0">
          {ex.meta.map((m) => (
            <span
              key={m}
              className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/60"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Task */}
      <div className="rounded-lg border-l-2 border-rose-400 bg-rose-500/5 px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-rose-400 mb-1.5">
          The Task
        </p>
        <p className="text-sm text-white/75 leading-relaxed italic">{ex.task}</p>
      </div>

      {/* Requirements */}
      <div className="rounded-lg bg-white/5 border border-white/10 p-3 space-y-1.5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-2">
          Requirements
        </p>
        {ex.requirements.map((r, i) => (
          <div key={i} className="flex items-start gap-2">
            <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-rose-400" />
            <p className="text-xs text-white/65 leading-relaxed">{r}</p>
          </div>
        ))}
      </div>

      {/* Guidance */}
      <div className="space-y-1.5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
          Tips & Guidance
        </p>
        {ex.guidance.map((g, i) => (
          <p key={i} className="text-xs text-white/50 leading-relaxed pl-3 border-l border-white/10">
            {g}
          </p>
        ))}
      </div>

      {/* Marking focus */}
      <div className="flex items-center gap-2 flex-wrap">
        <p className="text-[11px] text-white/30">Marked against:</p>
        {ex.markingFocus.map((m) => (
          <span
            key={m}
            className="rounded-full bg-white/[0.06] border border-white/10 px-2 py-0.5 text-[11px] text-white/50"
          >
            {m}
          </span>
        ))}
      </div>

      {/* Extension */}
      <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-clay-600 mb-1">
          Extension Challenge
        </p>
        <p className="text-xs text-white/55 leading-relaxed">{ex.extension}</p>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ContentCreationDemo() {
  const [activeTab, setActiveTab] = useState<TabId>("lessons")
  const [exampleIndex, setExampleIndex] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)

  function handleGenerate() {
    setIsGenerating(true)
    setTimeout(() => {
      setExampleIndex((prev) => prev + 1)
      setIsGenerating(false)
    }, 900)
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#161b22] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <div className="ml-4 flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1">
          <Brain className="h-3 w-3 text-white/30" />
          <span className="text-[11px] text-white/30 font-mono">englishhub.ai / content-creator</span>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex border-b border-white/10 bg-[#0d1117]">
        {TABS.map((tab) => {
          const Icon = tab.icon
          const active = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 text-xs font-medium transition-colors border-b-2",
                active
                  ? "border-blue-500 text-white bg-white/5"
                  : "border-transparent text-white/40 hover:text-white/60 hover:bg-white/[0.03]"
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          )
        })}

        {/* Generate button */}
        <div className="ml-auto flex items-center px-3">
          <button
            type="button"
            onClick={handleGenerate}
            disabled={isGenerating}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all",
              isGenerating
                ? "bg-blue-600/40 text-white/50 cursor-wait"
                : "bg-blue-600 text-white hover:bg-blue-500 active:scale-95"
            )}
          >
            <Sparkles className={cn("h-3.5 w-3.5", isGenerating && "animate-spin")} />
            {isGenerating ? "Generating..." : "Generate with AI"}
          </button>
        </div>
      </div>

      {/* Content panel */}
      <div className="min-h-[480px] p-5 overflow-auto">
        {/* Simulated "AI generating" skeleton */}
        {isGenerating ? (
          <div className="space-y-3 animate-pulse">
            <div className="h-3 w-32 rounded bg-white/10" />
            <div className="h-5 w-64 rounded bg-white/10" />
            <div className="h-3 w-full rounded bg-white/[0.06]" />
            <div className="h-3 w-5/6 rounded bg-white/[0.06]" />
            <div className="h-3 w-4/6 rounded bg-white/[0.06]" />
            <div className="mt-4 h-24 rounded-lg bg-white/[0.04]" />
            <div className="h-24 rounded-lg bg-white/[0.04]" />
            <div className="h-16 rounded-lg bg-white/[0.04]" />
          </div>
        ) : (
          <>
            {activeTab === "lessons" && <LessonPlanCard idx={exampleIndex} />}
            {activeTab === "worksheets" && <WorksheetCard idx={exampleIndex} />}
            {activeTab === "presentations" && <PresentationCard idx={exampleIndex} />}
            {activeTab === "homework" && <HomeworkCard idx={exampleIndex} />}
          </>
        )}
      </div>

      {/* Footer status bar */}
      <div className="flex items-center justify-between border-t border-white/[0.07] bg-[#161b22] px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-white/30 font-mono">AI ready</span>
        </div>
        <span className="text-[11px] text-white/20 font-mono">
          Curriculum-aligned &bull; Editable &bull; Exportable
        </span>
      </div>
    </div>
  )
}
