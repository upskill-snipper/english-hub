"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BookOpen,
  FileText,
  Presentation,
  ClipboardList,
  GraduationCap,
  Download,
  Eye,
  EyeOff,
  Search,
  Sparkles,
  Lock,
  Star,
  Clock,
  Filter,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import DemoBanner from "@/components/demo/DemoBanner"

// ─── Types ─────────────────────────────────────────────────────────────────

type ResourceType = "Lesson Plan" | "Worksheet" | "Teaching Guide" | "Presentation" | "Mock Paper"

interface TeachingResource {
  id: string
  type: ResourceType
  title: string
  yearGroup: string
  examBoard: string
  duration?: string
  isFree: boolean
  objectives: string[]
  firstActivity: string
}

// ─── Resource Data (drawn from actual lesson plan titles in the codebase) ─

const RESOURCES: TeachingResource[] = [
  // ── 8 Lesson Plans ────────────────────────────────────────────────────────
  {
    id: "lp-aic-context",
    type: "Lesson Plan",
    title: "An Inspector Calls: Context -- 1912 vs 1945 and Priestley's Message",
    yearGroup: "Year 10",
    examBoard: "AQA",
    duration: "60 min",
    isFree: true,
    objectives: [
      "Understand the significance of the dual time setting (written 1945, set 1912)",
      "Explore Priestley's socialist political beliefs and how they shape the play",
      "Analyse how historical context creates dramatic irony for the 1945 audience",
    ],
    firstActivity: "Display two images side by side: one of a wealthy Edwardian dinner party (circa 1912) and one of bomb-damaged British streets (circa 1945). Students write three observations about each image in silence, then pair-share.",
  },
  {
    id: "lp-macbeth-ambition",
    type: "Lesson Plan",
    title: "Macbeth's Ambition: Act 1 Analysis",
    yearGroup: "Year 10",
    examBoard: "AQA",
    duration: "60 min",
    isFree: false,
    objectives: [
      "Track the development of Macbeth's ambition across Act 1",
      "Analyse key soliloquies for language revealing inner conflict",
      "Evaluate whether Macbeth is inherently ambitious or influenced by external forces",
    ],
    firstActivity: "Ambition Spectrum: students position themselves on a physical line from 'ambition is always positive' to 'ambition is always destructive', then justify their position with real-world examples.",
  },
  {
    id: "lp-macbeth-lady",
    type: "Lesson Plan",
    title: "Lady Macbeth: Power, Manipulation & Gender",
    yearGroup: "Year 11",
    examBoard: "AQA",
    duration: "60 min",
    isFree: false,
    objectives: [
      "Analyse Lady Macbeth's 'unsex me here' soliloquy in detail",
      "Explore how Shakespeare subverts Jacobean gender expectations",
      "Evaluate Lady Macbeth's role as a manipulator in Act 1, Scene 7",
    ],
    firstActivity: "What Were Women Expected to Be? Students examine a grid of Jacobean expectations for women and identify which ones Lady Macbeth violates in the first two acts.",
  },
  {
    id: "lp-carol-scrooge",
    type: "Lesson Plan",
    title: "A Christmas Carol: Scrooge's Characterisation & The Counting House",
    yearGroup: "Year 10",
    examBoard: "AQA",
    duration: "60 min",
    isFree: false,
    objectives: [
      "Analyse Dickens' initial presentation of Scrooge through language and imagery",
      "Explore the counting house as a symbolic setting",
      "Link Scrooge's characterisation to Dickens' social purpose",
    ],
    firstActivity: "Word Association -- Cold: students brainstorm connotations of coldness in 60 seconds, then compare their ideas to Dickens' opening description of Scrooge.",
  },
  {
    id: "lp-romeo-prologue",
    type: "Lesson Plan",
    title: "Romeo and Juliet: Prologue and Fate -- Examining the Sonnet Prologue",
    yearGroup: "Year 9",
    examBoard: "Edexcel",
    duration: "55 min",
    isFree: false,
    objectives: [
      "Identify the sonnet structure of the Prologue and its significance",
      "Analyse how Shakespeare uses the Prologue to establish themes of fate and conflict",
      "Evaluate why Shakespeare reveals the ending at the start of the play",
    ],
    firstActivity: "Predicting the Plot: students receive six jumbled plot images and attempt to sequence them before reading, then compare to the Prologue's summary.",
  },
  {
    id: "lp-jekyll-gothic",
    type: "Lesson Plan",
    title: "Dr Jekyll and Mr Hyde: Context & the Gothic Genre",
    yearGroup: "Year 10",
    examBoard: "AQA",
    duration: "60 min",
    isFree: false,
    objectives: [
      "Understand the key features of Victorian Gothic literature",
      "Explore the social and scientific context of Stevenson's novella",
      "Analyse how Gothic conventions create tension in the opening chapters",
    ],
    firstActivity: "Gothic Image Gallery: students view six images (gargoyles, fog-shrouded streets, laboratories) and categorise them as 'Gothic' or 'not Gothic', justifying their choices.",
  },
  {
    id: "lp-poetry-ozymandias",
    type: "Lesson Plan",
    title: "Power & Conflict Poetry: Ozymandias & My Last Duchess",
    yearGroup: "Year 11",
    examBoard: "AQA",
    duration: "60 min",
    isFree: false,
    objectives: [
      "Compare presentations of individual power in both poems",
      "Analyse how Shelley and Browning use dramatic monologue and narrative voice",
      "Develop comparative analytical paragraphs using the anthology framework",
    ],
    firstActivity: "Two Voices of Power: listen to readings of both poems and note three differences in tone, then share with a partner.",
  },
  {
    id: "lp-creative-openings",
    type: "Lesson Plan",
    title: "Creative Writing: Narrative Openings -- Hooking the Reader",
    yearGroup: "Year 9",
    examBoard: "Edexcel",
    duration: "55 min",
    isFree: false,
    objectives: [
      "Identify and analyse five techniques for compelling narrative openings",
      "Apply 'show don't tell' to create atmospheric first paragraphs",
      "Evaluate published openings and identify what makes them effective",
    ],
    firstActivity: "First Lines Gallery Walk: students circulate around the room reading ten famous opening lines pinned to the walls and vote for the most effective one.",
  },

  // ── 4 Worksheets ──────────────────────────────────────────────────────────
  {
    id: "ws-macbeth-quotes",
    type: "Worksheet",
    title: "Macbeth Key Quotations: Learn, Analyse, Apply",
    yearGroup: "Year 11",
    examBoard: "AQA",
    isFree: false,
    objectives: [
      "Memorise 15 key quotations across all five acts",
      "Annotate each quotation for language devices and effects",
      "Practise embedding quotations into analytical paragraphs",
    ],
    firstActivity: "Quotation sorting activity: match 15 quotations to the correct act and scene, then highlight the key word in each.",
  },
  {
    id: "ws-lang-p1-q5",
    type: "Worksheet",
    title: "Language Paper 1 Question 5: Descriptive Writing Scaffold",
    yearGroup: "Year 11",
    examBoard: "AQA",
    isFree: false,
    objectives: [
      "Structure a descriptive piece using a five-paragraph framework",
      "Apply sensory language, figurative devices, and varied syntax",
      "Self-assess using the AQA mark scheme criteria for content and accuracy",
    ],
    firstActivity: "Annotate a model Level 4 response, highlighting three examples of effective sensory language and two structural choices.",
  },
  {
    id: "ws-carol-transformation",
    type: "Worksheet",
    title: "A Christmas Carol: Tracking Scrooge's Transformation",
    yearGroup: "Year 10",
    examBoard: "AQA",
    isFree: false,
    objectives: [
      "Map Scrooge's character arc across all five staves",
      "Select key quotations showing change at each stage",
      "Write an analytical paragraph comparing Stave 1 and Stave 5 Scrooge",
    ],
    firstActivity: "Complete the transformation timeline by adding quotations and brief annotations for each stave.",
  },
  {
    id: "ws-unseen-poetry",
    type: "Worksheet",
    title: "Unseen Poetry: Step-by-Step Analysis Framework",
    yearGroup: "Year 11",
    examBoard: "AQA",
    isFree: false,
    objectives: [
      "Apply a systematic four-step approach to unseen poetry questions",
      "Identify and analyse language, structure, and form in an unfamiliar poem",
      "Write a timed response using the SMILE framework",
    ],
    firstActivity: "Read the unseen poem twice: first for meaning, second with annotation prompts for language, structure, and form.",
  },

  // ── 4 Teaching Guides ─────────────────────────────────────────────────────
  {
    id: "tg-aic-scheme",
    type: "Teaching Guide",
    title: "An Inspector Calls: Complete Scheme of Work (12 Lessons)",
    yearGroup: "Year 10",
    examBoard: "AQA",
    isFree: false,
    objectives: [
      "Plan a full 12-lesson unit covering context, character, themes, and exam skills",
      "Differentiate activities for mixed-ability GCSE classes",
      "Integrate formative and summative assessment points across the unit",
    ],
    firstActivity: "Scheme overview: review the lesson sequence, key assessment points, and resource checklist for the full unit.",
  },
  {
    id: "tg-igcse-transition",
    type: "Teaching Guide",
    title: "IGCSE to IAL Transition: Bridging the Gap for Year 12",
    yearGroup: "Year 12",
    examBoard: "IAL",
    isFree: false,
    objectives: [
      "Identify key skill gaps between IGCSE and IAL expectations",
      "Plan bridging activities for the first half-term of Year 12",
      "Establish independent study habits and critical essay-writing frameworks",
    ],
    firstActivity: "Diagnostic assessment: students complete a timed comparison of two short extracts to benchmark their current analytical writing level.",
  },
  {
    id: "tg-differentiation",
    type: "Teaching Guide",
    title: "Differentiation Strategies for Mixed-Ability English Classes",
    yearGroup: "Year 7",
    examBoard: "All",
    isFree: false,
    objectives: [
      "Apply tiered questioning to reading and writing tasks",
      "Design scaffolded and stretch tasks for the same learning objective",
      "Use formative assessment to adjust in-lesson differentiation",
    ],
    firstActivity: "Review three differentiated versions of the same analytical paragraph task and identify the scaffolding techniques used at each tier.",
  },
  {
    id: "tg-poetry-comparison",
    type: "Teaching Guide",
    title: "Teaching Poetry Comparison: A Structured Approach for GCSE",
    yearGroup: "Year 11",
    examBoard: "AQA",
    isFree: false,
    objectives: [
      "Teach students to identify meaningful points of comparison between poems",
      "Model integrated comparative paragraphs using the 'thread' method",
      "Build confidence with the AQA poetry comparison question format",
    ],
    firstActivity: "Model a comparison planning grid using two power poems, demonstrating how to find three meaningful threads.",
  },

  // ── 2 Presentations ───────────────────────────────────────────────────────
  {
    id: "pres-macbeth-supernatural",
    type: "Presentation",
    title: "The Supernatural in Macbeth: Witches, Visions & Prophecy",
    yearGroup: "Year 10",
    examBoard: "AQA",
    duration: "45 min",
    isFree: false,
    objectives: [
      "Trace the role of the supernatural across all five acts",
      "Analyse the witches' language and its effect on atmosphere",
      "Evaluate whether Macbeth is a victim of fate or free will",
    ],
    firstActivity: "Witchcraft in 1606: students read three brief primary source extracts about Jacobean beliefs in witchcraft and discuss why Shakespeare's audience would find the witches genuinely terrifying.",
  },
  {
    id: "pres-lang-p2-overview",
    type: "Presentation",
    title: "Language Paper 2: Non-Fiction Reading & Writing Overview",
    yearGroup: "Year 11",
    examBoard: "AQA",
    duration: "40 min",
    isFree: false,
    objectives: [
      "Understand the structure and timing of all four reading questions plus Q5",
      "Identify key differences between Paper 1 and Paper 2 approaches",
      "Review exemplar responses and mark scheme descriptors for each question",
    ],
    firstActivity: "Paper 2 at a Glance: annotate a blank exam paper template with question types, marks, and recommended timings.",
  },

  // ── 2 Mock Papers ─────────────────────────────────────────────────────────
  {
    id: "mock-lang-p1",
    type: "Mock Paper",
    title: "Language Paper 1 Full Mock: Explorations in Creative Reading & Writing",
    yearGroup: "Year 11",
    examBoard: "AQA",
    isFree: false,
    objectives: [
      "Complete a full 1h 45min timed examination under exam conditions",
      "Apply reading analysis skills to an unseen 20th/21st century prose extract",
      "Produce a creative writing response to a visual or written stimulus",
    ],
    firstActivity: "Read the source extract carefully for 15 minutes before beginning Question 1, annotating for language and structural features.",
  },
  {
    id: "mock-lit-p2",
    type: "Mock Paper",
    title: "Literature Paper 2 Mock: Poetry Anthology & Unseen Poetry",
    yearGroup: "Year 11",
    examBoard: "AQA",
    isFree: false,
    objectives: [
      "Answer a poetry comparison question selecting an appropriate partner poem",
      "Respond to an unseen poetry question under timed conditions",
      "Manage time across two sections with different mark allocations",
    ],
    firstActivity: "Read both the named poem and your chosen comparison poem, spending five minutes planning your comparative argument before writing.",
  },
]

// ─── Filter Options ────────────────────────────────────────────────────────

const YEAR_GROUPS = ["All", "Year 7", "Year 8", "Year 9", "Year 10", "Year 11", "Year 12", "Year 13"]
const EXAM_BOARDS = ["All", "AQA", "Edexcel", "IGCSE", "IAL", "OCR"]
const RESOURCE_TYPES: ("All" | ResourceType)[] = [
  "All",
  "Lesson Plan",
  "Worksheet",
  "Teaching Guide",
  "Presentation",
  "Mock Paper",
]

// ─── Helpers ───────────────────────────────────────────────────────────────

function getTypeIcon(type: ResourceType) {
  switch (type) {
    case "Lesson Plan":
      return <BookOpen className="h-4 w-4" />
    case "Worksheet":
      return <FileText className="h-4 w-4" />
    case "Teaching Guide":
      return <GraduationCap className="h-4 w-4" />
    case "Presentation":
      return <Presentation className="h-4 w-4" />
    case "Mock Paper":
      return <ClipboardList className="h-4 w-4" />
  }
}

function getTypeBadgeClasses(type: ResourceType) {
  switch (type) {
    case "Lesson Plan":
      return "bg-blue-500/15 text-blue-400 border-blue-500/20"
    case "Worksheet":
      return "bg-purple-500/15 text-purple-400 border-purple-500/20"
    case "Teaching Guide":
      return "bg-amber-500/15 text-amber-400 border-amber-500/20"
    case "Presentation":
      return "bg-emerald-500/15 text-emerald-400 border-emerald-500/20"
    case "Mock Paper":
      return "bg-red-500/15 text-red-400 border-red-500/20"
  }
}

// ─── Page Component ────────────────────────────────────────────────────────

export default function TeacherResourcesPage() {
  const [yearGroup, setYearGroup] = useState("All")
  const [examBoard, setExamBoard] = useState("All")
  const [resourceType, setResourceType] = useState<"All" | ResourceType>("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [previewOpen, setPreviewOpen] = useState<string | null>(null)
  const [toast, setToast] = useState<string | null>(null)

  const filtered = RESOURCES.filter((r) => {
    if (yearGroup !== "All" && !r.yearGroup.includes(yearGroup.replace("Year ", ""))) return false
    if (examBoard !== "All" && r.examBoard !== examBoard && r.examBoard !== "All") return false
    if (resourceType !== "All" && r.type !== resourceType) return false
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      if (
        !r.title.toLowerCase().includes(q) &&
        !r.type.toLowerCase().includes(q) &&
        !r.examBoard.toLowerCase().includes(q)
      ) {
        return false
      }
    }
    return true
  })

  function handleDownload(resource: TeachingResource) {
    if (resource.isFree) {
      // The free An Inspector Calls lesson actually navigates
      window.location.href = "/for-teachers/free-resources"
      return
    }
    setToast("Subscribe to download -- first month free")
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <DemoBanner message="You are viewing a demo of the teacher resources library." />

      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="flex items-center gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm px-5 py-3 text-sm text-amber-200 shadow-lg shadow-amber-500/5">
            <Lock className="h-4 w-4 text-amber-400 shrink-0" />
            <span>{toast}</span>
            <Link
              href="/for-teachers"
              className="ml-2 font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-2"
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            Teacher Resources
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Teaching Resources Library
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Lesson plans, worksheets, teaching guides, presentations, and mock papers --
            all aligned to UK exam boards and ready to use.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <Filter className="h-4 w-4" />
              Filters:
            </div>

            {/* Year Group */}
            <select
              value={yearGroup}
              onChange={(e) => setYearGroup(e.target.value)}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              {YEAR_GROUPS.map((yg) => (
                <option key={yg} value={yg} className="bg-neutral-900">
                  {yg === "All" ? "All Year Groups" : yg}
                </option>
              ))}
            </select>

            {/* Exam Board */}
            <select
              value={examBoard}
              onChange={(e) => setExamBoard(e.target.value)}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              {EXAM_BOARDS.map((eb) => (
                <option key={eb} value={eb} className="bg-neutral-900">
                  {eb === "All" ? "All Exam Boards" : eb}
                </option>
              ))}
            </select>

            {/* Resource Type */}
            <select
              value={resourceType}
              onChange={(e) => setResourceType(e.target.value as "All" | ResourceType)}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              {RESOURCE_TYPES.map((rt) => (
                <option key={rt} value={rt} className="bg-neutral-900">
                  {rt === "All" ? "All Resource Types" : `${rt}s`}
                </option>
              ))}
            </select>

            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus-visible:ring-blue-500/50"
              />
            </div>
          </div>

          <p className="text-sm text-neutral-500">
            Showing {filtered.length} of {RESOURCES.length} resources
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-16">
          {filtered.map((resource) => {
            const isPreviewOpen = previewOpen === resource.id

            return (
              <Card
                key={resource.id}
                className={`relative flex flex-col bg-white/[0.03] border transition-all duration-300 hover:bg-white/[0.06] ${
                  resource.isFree
                    ? "border-emerald-500/40 shadow-lg shadow-emerald-500/5"
                    : "border-white/[0.08]"
                }`}
              >
                <div className="p-5 flex-1 flex flex-col">
                  {/* Top row: type badge + free badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <Badge
                      variant="outline"
                      className={`gap-1.5 text-xs font-medium ${getTypeBadgeClasses(resource.type)}`}
                    >
                      {getTypeIcon(resource.type)}
                      {resource.type}
                    </Badge>

                    {resource.isFree && (
                      <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 gap-1">
                        <Star className="h-3 w-3 fill-emerald-400" />
                        FREE
                      </Badge>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-white/90 leading-snug mb-3 line-clamp-2">
                    {resource.title}
                  </h3>

                  {/* Badges row */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-[11px] border-white/10 text-neutral-400">
                      {resource.yearGroup}
                    </Badge>
                    <Badge variant="outline" className="text-[11px] border-white/10 text-neutral-400">
                      {resource.examBoard}
                    </Badge>
                    {resource.duration && (
                      <Badge variant="outline" className="text-[11px] border-white/10 text-neutral-400 gap-1">
                        <Clock className="h-3 w-3" />
                        {resource.duration}
                      </Badge>
                    )}
                  </div>

                  {/* Preview panel (toggled) */}
                  {isPreviewOpen && (
                    <div className="mb-4 rounded-lg border border-white/[0.08] bg-white/[0.03] p-4 text-xs space-y-3 animate-in slide-in-from-top-1 fade-in duration-200">
                      <div>
                        <p className="text-neutral-500 uppercase tracking-wider text-[10px] mb-1.5 font-semibold">
                          Objectives
                        </p>
                        <ul className="space-y-1 text-neutral-300">
                          {resource.objectives.map((obj, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-blue-400 shrink-0 mt-0.5">-</span>
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-neutral-500 uppercase tracking-wider text-[10px] mb-1.5 font-semibold">
                          First Activity
                        </p>
                        <p className="text-neutral-300 leading-relaxed">
                          {resource.firstActivity}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 text-xs text-neutral-400 hover:text-white hover:bg-white/[0.06] gap-1.5"
                      onClick={() => setPreviewOpen(isPreviewOpen ? null : resource.id)}
                    >
                      {isPreviewOpen ? (
                        <>
                          <EyeOff className="h-3.5 w-3.5" />
                          Hide Preview
                        </>
                      ) : (
                        <>
                          <Eye className="h-3.5 w-3.5" />
                          Preview
                        </>
                      )}
                    </Button>

                    <Button
                      size="sm"
                      className={`flex-1 text-xs gap-1.5 ${
                        resource.isFree
                          ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                          : "bg-white/10 hover:bg-white/15 text-neutral-300"
                      }`}
                      onClick={() => handleDownload(resource)}
                    >
                      {resource.isFree ? (
                        <>
                          <Download className="h-3.5 w-3.5" />
                          Download Free
                        </>
                      ) : (
                        <>
                          <Lock className="h-3.5 w-3.5" />
                          Download
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* No results */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Search className="h-10 w-10 text-neutral-600 mx-auto mb-4" />
            <p className="text-neutral-400 text-lg mb-2">No resources match your filters</p>
            <p className="text-neutral-500 text-sm">Try broadening your search or clearing filters.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-blue-500/[0.07] via-purple-500/[0.05] to-blue-500/[0.07] p-10 text-center">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-50 blur-xl -z-10" />

          <Sparkles className="h-8 w-8 text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            See all 300+ resources
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto mb-6">
            Unlock the complete library of lesson plans, worksheets, teaching guides,
            presentations, and mock papers. New resources added weekly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              render={<Link href="/for-teachers" />}
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8"
            >
                Subscribe -- First Month Free
            </Button>
            <Button
              render={<Link href="/for-teachers/free-resources" />}
              variant="outline"
              size="lg"
              className="border-white/10 text-neutral-300 hover:bg-white/5 hover:text-white"
            >
                Try the Free Lesson First
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
