"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BookOpen,
  Brain,
  Timer,
  ArrowRight,
  Target,
  BarChart3,
  CheckCircle,
  Info,
  ChevronDown,
  ChevronUp,
  Download,
  RotateCcw,
  AlertTriangle,
  Sparkles,
  Eye,
  Volume2,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  type ReadingAssessmentResult,
  formatAgeScore,
  compareToChronologicalAge,
} from "@/lib/reading-assessment"

// ─── Age Gauge Component ─────────────────────────────────────────────────────

function AgeGauge({
  label,
  age,
  icon: Icon,
  color,
  chronologicalAge,
}: {
  label: string
  age: { years: number; months: number }
  icon: React.ElementType
  color: "emerald" | "blue" | "violet"
  chronologicalAge?: { years: number; months: number }
}) {
  const comparison = chronologicalAge
    ? compareToChronologicalAge(age, chronologicalAge.years, chronologicalAge.months)
    : null

  const colorClasses = {
    emerald: {
      bg: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/20",
      text: "text-emerald-400",
      badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    blue: {
      bg: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/20",
      text: "text-blue-400",
      badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    violet: {
      bg: "from-violet-500/20 to-violet-500/5",
      border: "border-violet-500/20",
      text: "text-violet-400",
      badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    },
  }

  const c = colorClasses[color]

  const comparisonBadge = comparison
    ? {
        above: { label: "Above expected", className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
        at: { label: "At expected level", className: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
        below: { label: "Below expected", className: "bg-red-500/10 text-red-400 border-red-500/20" },
      }[comparison]
    : null

  return (
    <div className={`rounded-2xl border ${c.border} bg-gradient-to-br ${c.bg} p-6`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`rounded-lg p-2 ${c.badge}`}>
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold text-white/90">{label}</h3>
      </div>
      <div className="text-3xl font-bold text-white/95 mb-2">
        {formatAgeScore(age)}
      </div>
      {comparisonBadge && (
        <Badge variant="outline" className={`text-xs ${comparisonBadge.className}`}>
          {comparisonBadge.label}
        </Badge>
      )}
    </div>
  )
}

// ─── Results Display ─────────────────────────────────────────────────────────

function ResultsDisplay({
  result,
  chronologicalAge,
  onRetake,
}: {
  result: ReadingAssessmentResult
  chronologicalAge: { years: number; months: number }
  onRetake: () => void
}) {
  return (
    <div className="space-y-8">
      {/* Age Gauges */}
      <div>
        <h2 className="text-xl font-bold text-white/90 mb-4">Your Reading Profile</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <AgeGauge
            label="Reading Age"
            age={result.readingAge}
            icon={BookOpen}
            color="emerald"
            chronologicalAge={chronologicalAge}
          />
          <AgeGauge
            label="Decoding Age"
            age={result.decodingAge}
            icon={Eye}
            color="blue"
            chronologicalAge={chronologicalAge}
          />
          <AgeGauge
            label="Fluency Age"
            age={result.fluencyAge}
            icon={Volume2}
            color="violet"
            chronologicalAge={chronologicalAge}
          />
        </div>
      </div>

      {/* GCSE Grade */}
      {result.gcseEquivalent && (
        <Card>
          <CardContent className="pt-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-amber-500/10 p-2">
                <Target className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <p className="text-sm text-white/50">GCSE Equivalent</p>
                <p className="text-2xl font-bold text-white/90">
                  Grade {result.gcseEquivalent}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Raw Scores */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-white/50" />
            Score Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-xs text-white/40 mb-1">Comprehension</p>
              <p className="text-2xl font-bold text-white/90">
                {result.rawScores.comprehension.score}/{result.rawScores.comprehension.maxScore}
              </p>
              <p className="text-sm text-white/50">
                {result.rawScores.comprehension.percentage}%
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-xs text-white/40 mb-1">Decoding</p>
              <p className="text-2xl font-bold text-white/90">
                {result.rawScores.decoding.score}/{result.rawScores.decoding.maxScore}
              </p>
              <p className="text-sm text-white/50">
                {result.rawScores.decoding.percentage}%
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-xs text-white/40 mb-1">Fluency</p>
              <p className="text-2xl font-bold text-white/90">
                {result.rawScores.fluency.adjustedWpm} WPM
              </p>
              <p className="text-sm text-white/50">
                {result.rawScores.fluency.accuracy}% accuracy
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strengths */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-emerald-400" />
            Strengths
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {result.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">{s}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Areas for Development */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-amber-400" />
            Areas for Development
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {result.areasForDevelopment.map((a, i) => (
              <li key={i} className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">{a}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Recommended Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Next Steps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 rounded-xl border border-white/10 p-4">
            <BookOpen className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-white/80">Read widely</p>
              <p className="text-xs text-white/50">
                Aim for 15-20 minutes of reading daily across fiction and non-fiction at your reading level.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-white/10 p-4">
            <FileText className="h-5 w-5 text-violet-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-white/80">Practise comprehension</p>
              <p className="text-xs text-white/50">
                Work through reading comprehension exercises, focusing on inference and evaluation questions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-white/10 p-4">
            <Brain className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-white/80">Build vocabulary</p>
              <p className="text-xs text-white/50">
                Learn new words in context. Keep a vocabulary journal and review unfamiliar words regularly.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <Button onClick={onRetake} variant="outline">
          <RotateCcw className="h-4 w-4 mr-2" />
          Retake Assessment
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            // Simple text-based "download" of results
            const text = [
              "Reading Assessment Results",
              "========================",
              "",
              `Reading Age: ${formatAgeScore(result.readingAge)}`,
              `Decoding Age: ${formatAgeScore(result.decodingAge)}`,
              `Fluency Age: ${formatAgeScore(result.fluencyAge)}`,
              "",
              `Comprehension: ${result.rawScores.comprehension.score}/${result.rawScores.comprehension.maxScore} (${result.rawScores.comprehension.percentage}%)`,
              `Decoding: ${result.rawScores.decoding.score}/${result.rawScores.decoding.maxScore} (${result.rawScores.decoding.percentage}%)`,
              `Fluency: ${result.rawScores.fluency.adjustedWpm} adjusted WPM (${result.rawScores.fluency.accuracy}% accuracy)`,
              result.gcseEquivalent ? `GCSE Equivalent: Grade ${result.gcseEquivalent}` : "",
              "",
              "Strengths:",
              ...result.strengths.map((s) => `  - ${s}`),
              "",
              "Areas for Development:",
              ...result.areasForDevelopment.map((a) => `  - ${a}`),
              "",
              "Note: This is a screening tool, not a diagnostic assessment.",
              `Date: ${new Date().toLocaleDateString("en-GB")}`,
            ]
              .filter(Boolean)
              .join("\n")

            const blob = new Blob([text], { type: "text/plain" })
            const url = URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = url
            a.download = `reading-assessment-${new Date().toISOString().split("T")[0]}.txt`
            a.click()
            URL.revokeObjectURL(url)
          }}
        >
          <Download className="h-4 w-4 mr-2" />
          Download Results
        </Button>
      </div>
    </div>
  )
}

// ─── Methodology Section ─────────────────────────────────────────────────────

function MethodologySection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card>
      <CardHeader>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full text-left"
        >
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-white/50" />
            Methodology
          </CardTitle>
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-white/40" />
          ) : (
            <ChevronDown className="h-5 w-5 text-white/40" />
          )}
        </button>
      </CardHeader>
      {expanded && (
        <CardContent className="space-y-4">
          <div className="space-y-3 text-sm text-white/60">
            <div>
              <h4 className="font-medium text-white/80 mb-1">How the test works</h4>
              <p>
                This assessment uses graded passages of increasing difficulty (Year 3 to Year 13 level)
                to measure reading ability across three dimensions: comprehension, decoding, and fluency.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium text-white/80 mb-1">Comprehension</h4>
              <p>
                Measured through a combination of literal (retrieval), inferential (reading between
                the lines), and evaluative (analysis and judgment) questions on each passage.
                Both multiple-choice and short-answer formats are used.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-white/80 mb-1">Decoding</h4>
              <p>
                Measured through word recognition accuracy, including both real words and
                pseudo-words (nonsense words that follow English phonetic patterns, similar to the
                Year 1 phonics screening check). This isolates decoding ability from vocabulary knowledge.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-white/80 mb-1">Fluency</h4>
              <p>
                Measured through words-per-minute reading speed, adjusted for accuracy.
                The adjusted WPM (words read correctly per minute) is compared against
                age-related norms.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium text-white/80 mb-1">Standardisation</h4>
              <p>
                Results are standardised against UK national curriculum reading expectations.
                The reading age is calculated as a weighted composite: comprehension (50%),
                decoding (25%), and fluency (25%). This weighting reflects the primacy of
                comprehension in reading ability while acknowledging the foundational
                importance of decoding and fluency.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-white/80 mb-1">Methodology basis</h4>
              <p>
                The assessment draws on methodology from established standardised reading tests
                including the NFER Group Reading Test, the Salford Sentence Reading Test,
                the Suffolk Reading Scale, and the York Assessment of Reading for Comprehension (YARC).
                Grade boundaries are mapped to chronological reading age norms used in these assessments.
              </p>
            </div>

            <Separator />

            <div className="flex items-start gap-2 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-medium text-amber-400 mb-1">Limitations</h4>
                <p className="text-white/50">
                  This is a screening tool, not a diagnostic assessment. It provides an
                  indicative reading age that can help identify strengths and areas for
                  development. For a formal diagnosis of reading difficulties such as dyslexia,
                  a qualified educational psychologist or specialist teacher assessment is required.
                  Results should be interpreted alongside teacher judgment and other evidence of
                  reading ability.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function ReadingAssessmentPage() {
  const [result, setResult] = useState<ReadingAssessmentResult | null>(null)
  const [chronologicalAge, setChronologicalAge] = useState({ years: 14, months: 0 })

  // Check if results were stored from the test page
  // Using useEffect to check sessionStorage on mount
  const [loaded, setLoaded] = useState(false)
  if (!loaded && typeof window !== "undefined") {
    try {
      const stored = sessionStorage.getItem("reading-assessment-result")
      const storedAge = sessionStorage.getItem("reading-assessment-age")
      if (stored) {
        setResult(JSON.parse(stored))
        if (storedAge) setChronologicalAge(JSON.parse(storedAge))
        sessionStorage.removeItem("reading-assessment-result")
        sessionStorage.removeItem("reading-assessment-age")
      }
    } catch {
      // ignore
    }
    setLoaded(true)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-white/40 mb-4">
          <Link href="/dashboard" className="hover:text-white/60 transition-colors">
            Dashboard
          </Link>
          <span>/</span>
          <span className="text-white/60">Reading Assessment</span>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 p-3">
            <BookOpen className="h-8 w-8 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white/90 sm:text-3xl">
              Reading Comprehension Assessment
            </h1>
            <p className="text-sm text-white/50 mt-1">
              Measure your reading age, decoding skills, and fluency
            </p>
          </div>
        </div>
      </div>

      {result ? (
        <ResultsDisplay
          result={result}
          chronologicalAge={chronologicalAge}
          onRetake={() => setResult(null)}
        />
      ) : (
        <div className="space-y-6">
          {/* What this test measures */}
          <Card>
            <CardHeader>
              <CardTitle>What this test measures</CardTitle>
              <CardDescription>
                A comprehensive assessment of reading ability across three dimensions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-emerald-500/15 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-5 w-5 text-emerald-400" />
                    <h3 className="font-semibold text-white/80 text-sm">Reading Age</h3>
                  </div>
                  <p className="text-xs text-white/50">
                    Your overall reading comprehension level, expressed as an age equivalent.
                    Measures understanding of both fiction and non-fiction texts.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-500/15 bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-5 w-5 text-blue-400" />
                    <h3 className="font-semibold text-white/80 text-sm">Decoding Age</h3>
                  </div>
                  <p className="text-xs text-white/50">
                    Your ability to recognise and decode words accurately, including
                    real words and pseudo-words that test phonics knowledge.
                  </p>
                </div>
                <div className="rounded-xl border border-violet-500/15 bg-gradient-to-br from-violet-500/10 to-violet-500/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Timer className="h-5 w-5 text-violet-400" />
                    <h3 className="font-semibold text-white/80 text-sm">Fluency Age</h3>
                  </div>
                  <p className="text-xs text-white/50">
                    Your reading speed combined with accuracy. Fluent readers read
                    smoothly and quickly while maintaining comprehension.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How it works */}
          <Card>
            <CardHeader>
              <CardTitle>How it works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Enter your age",
                    description: "So we can compare your reading level to age-related expectations.",
                    icon: Target,
                  },
                  {
                    step: 2,
                    title: "Read graded passages",
                    description: "Starting from simpler texts and progressing to more challenging ones. Your reading is timed.",
                    icon: BookOpen,
                  },
                  {
                    step: 3,
                    title: "Answer comprehension questions",
                    description: "A mix of multiple-choice and short-answer questions test your understanding at each level.",
                    icon: Brain,
                  },
                  {
                    step: 4,
                    title: "Complete word recognition exercises",
                    description: "Identify real words and pseudo-words to assess your decoding skills.",
                    icon: Eye,
                  },
                  {
                    step: 5,
                    title: "Get your results",
                    description: "Receive your reading age, decoding age, and fluency age with detailed feedback.",
                    icon: BarChart3,
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-sm font-semibold text-white/60">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/80">{item.title}</p>
                      <p className="text-xs text-white/50">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Time and info */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Timer className="h-4 w-4" />
              <span>Approximately 20-30 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <FileText className="h-4 w-4" />
              <span>10 passages, 40 questions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Target className="h-4 w-4" />
              <span>Year 3 to Year 13 levels</span>
            </div>
          </div>

          {/* Start button */}
          <Button
            size="lg"
            className="w-full sm:w-auto"
            render={<Link href="/assessment/reading/test" />}
          >
            Start Assessment
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>

          {/* Methodology */}
          <MethodologySection />
        </div>
      )}
    </div>
  )
}
