'use client'

import { useState } from 'react'
import Link from 'next/link'
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
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  type ReadingAssessmentResult,
  formatAgeScore,
  compareToChronologicalAge,
} from '@/lib/reading-assessment'
import { useT } from '@/lib/i18n/use-t'

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
  color: 'emerald' | 'blue' | 'violet'
  chronologicalAge?: { years: number; months: number }
}) {
  const t = useT()
  const comparison = chronologicalAge
    ? compareToChronologicalAge(age, chronologicalAge.years, chronologicalAge.months)
    : null

  const colorClasses = {
    emerald: {
      bg: 'from-teal-500/10 to-teal-500/5',
      border: 'border-teal-500/20',
      text: 'text-teal-700 dark:text-teal-300',
      badge: 'bg-teal-500/10 text-teal-700 border-teal-500/20 dark:text-teal-300',
    },
    blue: {
      bg: 'from-blue-500/10 to-blue-500/5',
      border: 'border-blue-500/20',
      text: 'text-blue-700 dark:text-blue-300',
      badge: 'bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-300',
    },
    violet: {
      bg: 'from-clay-500/10 to-clay-500/5',
      border: 'border-clay-500/20',
      text: 'text-clay-600 dark:text-clay-300',
      badge: 'bg-clay-500/10 text-clay-600 border-clay-500/20 dark:text-clay-300',
    },
  }

  const c = colorClasses[color]

  const comparisonBadge = comparison
    ? {
        above: {
          label: t('assessment.reading.comparison.above'),
          className: 'bg-teal-500/10 text-teal-700 border-teal-500/20 dark:text-teal-300',
        },
        at: {
          label: t('assessment.reading.comparison.at'),
          className: 'bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-300',
        },
        below: {
          label: t('assessment.reading.comparison.below'),
          className: 'bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-300',
        },
      }[comparison]
    : null

  return (
    <div className={`rounded-2xl border ${c.border} bg-gradient-to-br ${c.bg} p-6`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`rounded-lg p-2 ${c.badge}`}>
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold text-foreground">{label}</h3>
      </div>
      <div className="text-3xl font-bold text-foreground mb-2">{formatAgeScore(age)}</div>
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
  const t = useT()
  return (
    <div className="space-y-8">
      {/* Age Gauges */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">
          {t('assessment.reading.profile_heading')}
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <AgeGauge
            label={t('assessment.reading.label.reading_age')}
            age={result.readingAge}
            icon={BookOpen}
            color="emerald"
            chronologicalAge={chronologicalAge}
          />
          <AgeGauge
            label={t('assessment.reading.label.decoding_age')}
            age={result.decodingAge}
            icon={Eye}
            color="blue"
            chronologicalAge={chronologicalAge}
          />
          <AgeGauge
            label={t('assessment.reading.label.fluency_age')}
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
                <Target className="h-5 w-5 text-amber-700 dark:text-amber-300" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {t('assessment.reading.gcse_equivalent')}
                </p>
                <p className="text-2xl font-bold text-foreground">
                  {t('assessment.reading.grade_prefix')} {result.gcseEquivalent}
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
            <BarChart3 className="h-5 w-5 text-muted-foreground" />
            {t('assessment.reading.score_breakdown')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border p-4">
              <p className="text-xs text-muted-foreground mb-1">
                {t('assessment.reading.comprehension')}
              </p>
              <p className="text-2xl font-bold text-foreground">
                {result.rawScores.comprehension.score}/{result.rawScores.comprehension.maxScore}
              </p>
              <p className="text-sm text-muted-foreground">
                {result.rawScores.comprehension.percentage}%
              </p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="text-xs text-muted-foreground mb-1">
                {t('assessment.reading.decoding')}
              </p>
              <p className="text-2xl font-bold text-foreground">
                {result.rawScores.decoding.score}/{result.rawScores.decoding.maxScore}
              </p>
              <p className="text-sm text-muted-foreground">
                {result.rawScores.decoding.percentage}%
              </p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="text-xs text-muted-foreground mb-1">
                {t('assessment.reading.fluency')}
              </p>
              <p className="text-2xl font-bold text-foreground">
                {result.rawScores.fluency.adjustedWpm} {t('assessment.reading.wpm_short')}
              </p>
              <p className="text-sm text-muted-foreground">
                {result.rawScores.fluency.accuracy}% {t('assessment.reading.accuracy_label')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strengths */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-teal-700 dark:text-teal-300" />
            {t('assessment.reading.strengths')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {result.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-teal-700 dark:text-teal-300 mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Areas for Development */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-amber-700 dark:text-amber-300" />
            {t('assessment.reading.areas_for_development')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {result.areasForDevelopment.map((a, i) => (
              <li key={i} className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-amber-700 dark:text-amber-300 mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{a}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Recommended Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>{t('assessment.reading.recommended_next_steps')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 rounded-xl border border-border p-4">
            <BookOpen className="h-5 w-5 text-blue-700 dark:text-blue-300 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">
                {t('assessment.reading.next_step.read_widely')}
              </p>
              <p className="text-xs text-muted-foreground">
                {t('assessment.reading.next_step.read_widely_body')}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-border p-4">
            <FileText className="h-5 w-5 text-clay-600 dark:text-clay-300 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">
                {t('assessment.reading.next_step.practise_comprehension')}
              </p>
              <p className="text-xs text-muted-foreground">
                {t('assessment.reading.next_step.practise_comprehension_body')}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-border p-4">
            <Brain className="h-5 w-5 text-teal-700 dark:text-teal-300 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">
                {t('assessment.reading.next_step.build_vocab')}
              </p>
              <p className="text-xs text-muted-foreground">
                {t('assessment.reading.next_step.build_vocab_body')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <Button onClick={onRetake} variant="outline">
          <RotateCcw className="h-4 w-4 mr-2" />
          {t('assessment.reading.retake')}
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            // Simple text-based "download" of results
            const text = [
              t('assessment.reading.download.title'),
              '========================',
              '',
              `${t('assessment.reading.label.reading_age')}: ${formatAgeScore(result.readingAge)}`,
              `${t('assessment.reading.label.decoding_age')}: ${formatAgeScore(result.decodingAge)}`,
              `${t('assessment.reading.label.fluency_age')}: ${formatAgeScore(result.fluencyAge)}`,
              '',
              `${t('assessment.reading.comprehension')}: ${result.rawScores.comprehension.score}/${result.rawScores.comprehension.maxScore} (${result.rawScores.comprehension.percentage}%)`,
              `${t('assessment.reading.decoding')}: ${result.rawScores.decoding.score}/${result.rawScores.decoding.maxScore} (${result.rawScores.decoding.percentage}%)`,
              `${t('assessment.reading.fluency')}: ${result.rawScores.fluency.adjustedWpm} ${t('assessment.reading.wpm_short')} (${result.rawScores.fluency.accuracy}% ${t('assessment.reading.accuracy_label')})`,
              result.gcseEquivalent
                ? `${t('assessment.reading.gcse_equivalent')}: ${t('assessment.reading.grade_prefix')} ${result.gcseEquivalent}`
                : '',
              '',
              t('assessment.reading.download.strengths_label'),
              ...result.strengths.map((s) => `  - ${s}`),
              '',
              t('assessment.reading.download.areas_label'),
              ...result.areasForDevelopment.map((a) => `  - ${a}`),
              '',
              t('assessment.reading.download.note'),
              `${t('assessment.reading.download.date_label')}: ${new Date().toLocaleDateString('en-GB')}`,
            ]
              .filter(Boolean)
              .join('\n')

            const blob = new Blob([text], { type: 'text/plain' })
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `reading-assessment-${new Date().toISOString().split('T')[0]}.txt`
            a.click()
            URL.revokeObjectURL(url)
          }}
        >
          <Download className="h-4 w-4 mr-2" />
          {t('assessment.reading.download_results')}
        </Button>
      </div>
    </div>
  )
}

// ─── Methodology Section ─────────────────────────────────────────────────────

function MethodologySection() {
  const t = useT()
  const [expanded, setExpanded] = useState(false)

  return (
    <Card>
      <CardHeader>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full text-left"
        >
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-muted-foreground" />
            {t('assessment.reading.methodology.title')}
          </CardTitle>
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
      </CardHeader>
      {expanded && (
        <CardContent className="space-y-4">
          <div className="space-y-3 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-1">
                {t('assessment.reading.methodology.how_it_works')}
              </h4>
              <p>{t('assessment.reading.methodology.how_it_works_body')}</p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium text-foreground mb-1">
                {t('assessment.reading.comprehension')}
              </h4>
              <p>{t('assessment.reading.methodology.comprehension_body')}</p>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-1">
                {t('assessment.reading.decoding')}
              </h4>
              <p>{t('assessment.reading.methodology.decoding_body')}</p>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-1">
                {t('assessment.reading.fluency')}
              </h4>
              <p>{t('assessment.reading.methodology.fluency_body')}</p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium text-foreground mb-1">
                {t('assessment.reading.methodology.standardisation')}
              </h4>
              <p>{t('assessment.reading.methodology.standardisation_body')}</p>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-1">
                {t('assessment.reading.methodology.basis')}
              </h4>
              <p>{t('assessment.reading.methodology.basis_body')}</p>
            </div>

            <Separator />

            <div className="flex items-start gap-2 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-300 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-medium text-amber-700 dark:text-amber-300 mb-1">
                  {t('assessment.reading.methodology.limitations')}
                </h4>
                <p className="text-muted-foreground">
                  {t('assessment.reading.methodology.limitations_body')}
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
  const t = useT()
  const [result, setResult] = useState<ReadingAssessmentResult | null>(null)
  const [chronologicalAge, setChronologicalAge] = useState({ years: 14, months: 0 })

  // Check if results were stored from the test page
  // Using useEffect to check sessionStorage on mount
  const [loaded, setLoaded] = useState(false)
  if (!loaded && typeof window !== 'undefined') {
    try {
      const stored = sessionStorage.getItem('reading-assessment-result')
      const storedAge = sessionStorage.getItem('reading-assessment-age')
      if (stored) {
        setResult(JSON.parse(stored))
        if (storedAge) setChronologicalAge(JSON.parse(storedAge))
        sessionStorage.removeItem('reading-assessment-result')
        sessionStorage.removeItem('reading-assessment-age')
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
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/dashboard" className="hover:text-foreground transition-colors">
            {t('assessment.reading.breadcrumb.dashboard')}
          </Link>
          <span>/</span>
          <span className="text-muted-foreground">
            {t('assessment.reading.breadcrumb.this_page')}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-3">
            <BookOpen className="h-8 w-8 text-teal-700 dark:text-teal-300" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              {t('assessment.reading.page_title')}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {t('assessment.reading.page_subtitle')}
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
              <CardTitle>{t('assessment.reading.landing.what_title')}</CardTitle>
              <CardDescription>{t('assessment.reading.landing.what_subtitle')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-teal-500/15 bg-gradient-to-br from-teal-500/5 to-teal-500/[0.02] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-5 w-5 text-teal-700 dark:text-teal-300" />
                    <h3 className="font-semibold text-foreground text-sm">
                      {t('assessment.reading.label.reading_age')}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t('assessment.reading.landing.reading_age_body')}
                  </p>
                </div>
                <div className="rounded-xl border border-blue-500/15 bg-gradient-to-br from-blue-500/5 to-blue-500/[0.02] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-5 w-5 text-blue-700 dark:text-blue-300" />
                    <h3 className="font-semibold text-foreground text-sm">
                      {t('assessment.reading.label.decoding_age')}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t('assessment.reading.landing.decoding_age_body')}
                  </p>
                </div>
                <div className="rounded-xl border border-clay-500/15 bg-gradient-to-br from-clay-500/5 to-clay-500/[0.02] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Timer className="h-5 w-5 text-clay-600 dark:text-clay-300" />
                    <h3 className="font-semibold text-foreground text-sm">
                      {t('assessment.reading.label.fluency_age')}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t('assessment.reading.landing.fluency_age_body')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How it works */}
          <Card>
            <CardHeader>
              <CardTitle>{t('assessment.reading.landing.how_title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: t('assessment.reading.landing.step1_title'),
                    description: t('assessment.reading.landing.step1_body'),
                    icon: Target,
                  },
                  {
                    step: 2,
                    title: t('assessment.reading.landing.step2_title'),
                    description: t('assessment.reading.landing.step2_body'),
                    icon: BookOpen,
                  },
                  {
                    step: 3,
                    title: t('assessment.reading.landing.step3_title'),
                    description: t('assessment.reading.landing.step3_body'),
                    icon: Brain,
                  },
                  {
                    step: 4,
                    title: t('assessment.reading.landing.step4_title'),
                    description: t('assessment.reading.landing.step4_body'),
                    icon: Eye,
                  },
                  {
                    step: 5,
                    title: t('assessment.reading.landing.step5_title'),
                    description: t('assessment.reading.landing.step5_body'),
                    icon: BarChart3,
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Time and info */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Timer className="h-4 w-4" />
              <span>{t('assessment.reading.landing.duration')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4" />
              <span>{t('assessment.reading.landing.scope')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Target className="h-4 w-4" />
              <span>{t('assessment.reading.landing.levels')}</span>
            </div>
          </div>

          {/* Start button */}
          <Button
            size="lg"
            className="w-full sm:w-auto"
            render={<Link href="/assessment/reading/test" />}
          >
            {t('assessment.reading.landing.start_cta')}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>

          {/* Methodology */}
          <MethodologySection />
        </div>
      )}
    </div>
  )
}
