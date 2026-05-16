'use client'

import { useState } from 'react'
import {
  BarChart3,
  TrendingUp,
  ArrowUpRight,
  Download,
  CheckCircle2,
  AlertTriangle,
  Users,
  Target,
  BookOpen,
  Lightbulb,
} from 'lucide-react'
import { toast } from 'sonner'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import DemoBanner from '@/components/demo/DemoBanner'
import { openPrintableDocument } from '@/lib/generate-download'
import { percentageToGCSEGrade } from '@/lib/grades'

// ── Mock benchmark data ──────────────────────────────────────────────────────

const overviewCards = [
  {
    label: 'Average Score',
    school: 68,
    national: 62,
    diff: 6,
    status: 'above' as const,
    icon: Target,
  },
  {
    label: 'Completion Rate',
    school: 84,
    national: 71,
    diff: 13,
    status: 'above' as const,
    icon: CheckCircle2,
  },
  {
    label: 'At-Risk %',
    school: 7,
    national: 12,
    diff: -5,
    status: 'better' as const,
    icon: AlertTriangle,
  },
  {
    label: 'Active Rate',
    school: 89,
    national: 74,
    diff: 15,
    status: 'above' as const,
    icon: Users,
  },
]

const yearGroupBenchmarks = [
  { year: 'Year 7', school: 72, national: 65, diff: 7, percentile: 78 },
  { year: 'Year 8', school: 70, national: 64, diff: 6, percentile: 74 },
  { year: 'Year 9', school: 66, national: 63, diff: 3, percentile: 62 },
  { year: 'Year 10', school: 64, national: 62, diff: 2, percentile: 55 },
  { year: 'Year 11', school: 68, national: 61, diff: 7, percentile: 76 },
  { year: 'Year 12', school: 71, national: 66, diff: 5, percentile: 70 },
  { year: 'Year 13', school: 74, national: 67, diff: 7, percentile: 79 },
]

const subjectComparison = [
  { subject: 'Reading Comprehension', school: 71, platform: 65 },
  { subject: 'Writing Skills', school: 63, platform: 60 },
  { subject: 'Literature Analysis', school: 69, platform: 64 },
  { subject: 'Exam Technique', school: 58, platform: 55 },
]

const termTrend = [
  { term: 'Autumn 2024', school: 61, national: 60 },
  { term: 'Spring 2025', school: 64, national: 61 },
  { term: 'Summer 2025', school: 66, national: 61 },
  { term: 'Autumn 2025', school: 68, national: 62 },
]

const recommendations = [
  {
    text: 'Year 10 writing is closest to national average -- consider targeted intervention',
    type: 'warning' as const,
  },
  {
    text: 'Year 7 reading is a strength -- maintain current approach',
    type: 'success' as const,
  },
  {
    text: 'Exam Technique gap is narrowest across all subjects -- allocate additional practice sessions',
    type: 'warning' as const,
  },
  {
    text: 'Completion rate is 13% above national average -- strong engagement culture to build on',
    type: 'success' as const,
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function BenchmarksPage() {
  const [downloading, setDownloading] = useState(false)

  function handleDownload() {
    setDownloading(true)
    const e = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const body = `
      <h2>Overview</h2>
      <table>
        <tr><th>Metric</th><th>School</th><th>National</th><th>Difference</th></tr>
        ${overviewCards.map((c) => `<tr><td>${e(c.label)}</td><td>${c.school}%</td><td>${c.national}%</td><td>${c.diff > 0 ? '+' : ''}${c.diff}%</td></tr>`).join('')}
      </table>
      <h2>Year Group Benchmarks</h2>
      <table>
        <tr><th>Year Group</th><th>School Avg</th><th>National Avg</th><th>Difference</th><th>Percentile</th></tr>
        ${yearGroupBenchmarks.map((y) => `<tr><td>${e(y.year)}</td><td>${y.school}%</td><td>${y.national}%</td><td>+${y.diff}%</td><td>${y.percentile}th</td></tr>`).join('')}
      </table>
      <h2>Subject Comparison</h2>
      <table>
        <tr><th>Subject</th><th>School</th><th>Platform Avg</th></tr>
        ${subjectComparison.map((s) => `<tr><td>${e(s.subject)}</td><td>${s.school}%</td><td>${s.platform}%</td></tr>`).join('')}
      </table>
      <h2>Term-on-Term Trend</h2>
      <table>
        <tr><th>Term</th><th>School</th><th>National</th></tr>
        ${termTrend.map((t) => `<tr><td>${e(t.term)}</td><td>${t.school}%</td><td>${t.national}%</td></tr>`).join('')}
      </table>
      <h2>Recommendations</h2>
      <ol>${recommendations.map((r) => `<li>${e(r.text)}</li>`).join('')}</ol>`
    openPrintableDocument('Performance Benchmark Report', body, {
      subtitle: 'Riverside Academy | English Department | Demo Data',
    })
    setDownloading(false)
    toast.success('Benchmark report opened for download')
  }

  const maxTermSchool = Math.max(...termTrend.map((t) => t.school))

  return (
    <div className="space-y-8">
      <DemoBanner />

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <BarChart3 className="h-8 w-8 text-primary" />
            Performance Benchmarks
          </h1>
          <p className="text-muted-foreground mt-1">
            How Riverside Academy compares to national and platform averages
          </p>
        </div>
        <Button
          onClick={handleDownload}
          disabled={downloading}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Download className="h-4 w-4 mr-2" />
          {downloading ? 'Downloading...' : 'Download Benchmark Report'}
        </Button>
      </div>

      {/* ── School vs National Average cards ────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewCards.map((card) => {
          const Icon = card.icon
          const isAtRisk = card.label === 'At-Risk %'
          return (
            <Card key={card.label} className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-muted">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge className="bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/30">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    {isAtRisk ? 'Better' : 'Above Avg'}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{card.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {card.school}%
                    {card.label === 'Average Score' && (
                      <span className="text-base font-normal text-muted-foreground ml-1">
                        (Grade {percentageToGCSEGrade(card.school)})
                      </span>
                    )}
                  </span>
                  <span className="text-sm text-foreground">vs {card.national}% national</span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-sm text-green-700 dark:text-green-300">
                  <TrendingUp className="h-3 w-3" />
                  {isAtRisk
                    ? `${Math.abs(card.diff)}% lower than average`
                    : `+${card.diff}% above average`}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* ── Year Group Benchmarks table ─────────────────────────────────────── */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Year Group Benchmarks</CardTitle>
          <CardDescription className="text-muted-foreground">
            Performance by year group compared to national averages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="text-left py-3 px-4 font-medium">Year Group</th>
                  <th className="text-right py-3 px-4 font-medium">School Avg</th>
                  <th className="text-right py-3 px-4 font-medium">National Avg</th>
                  <th className="text-right py-3 px-4 font-medium">Difference</th>
                  <th className="text-right py-3 px-4 font-medium">Percentile</th>
                </tr>
              </thead>
              <tbody>
                {yearGroupBenchmarks.map((row) => (
                  <tr
                    key={row.year}
                    className="border-b border-border/60 hover:bg-muted/60 transition-colors"
                  >
                    <td className="py-3 px-4 text-foreground font-medium">{row.year}</td>
                    <td className="text-right py-3 px-4 text-foreground">
                      {row.school}%{' '}
                      <span className="text-foreground text-xs">
                        (G{percentageToGCSEGrade(row.school)})
                      </span>
                    </td>
                    <td className="text-right py-3 px-4 text-muted-foreground">
                      {row.national}%{' '}
                      <span className="text-muted-foreground text-xs">
                        (G{percentageToGCSEGrade(row.national)})
                      </span>
                    </td>
                    <td className="text-right py-3 px-4">
                      <span className="text-green-700 dark:text-green-300 font-medium">
                        +{row.diff}%
                      </span>
                    </td>
                    <td className="text-right py-3 px-4">
                      <Badge
                        className={
                          row.percentile >= 75
                            ? 'bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/30'
                            : row.percentile >= 60
                              ? 'bg-primary/10 text-primary border-primary/30'
                              : 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border-yellow-500/30'
                        }
                      >
                        {row.percentile}th
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* ── Subject Area Comparison ─────────────────────────────────────────── */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Subject Area Comparison
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            School performance vs platform-wide averages by subject
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {subjectComparison.map((subject) => {
              const diff = subject.school - subject.platform
              return (
                <div key={subject.subject} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">{subject.subject}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground">Platform: {subject.platform}%</span>
                      <span className="text-foreground font-medium">School: {subject.school}%</span>
                      <span className="text-green-700 dark:text-green-300 text-xs font-medium">
                        +{diff}%
                      </span>
                    </div>
                  </div>
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-muted-foreground/30 rounded-full"
                      style={{ width: `${subject.platform}%` }}
                    />
                    <div
                      className="absolute inset-y-0 left-0 bg-blue-500 rounded-full"
                      style={{ width: `${subject.school}%`, opacity: 0.8 }}
                    />
                  </div>
                  <div className="flex items-center gap-4 text-xs text-foreground">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                      School
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/30 inline-block" />
                      Platform
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* ── Trend Over Time ─────────────────────────────────────────────────── */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-700 dark:text-green-300" />
            Trend Over Time
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Four-term comparison showing improvement trajectory
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {termTrend.map((term) => (
              <div key={term.term} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-medium w-36">{term.term}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground text-xs">
                      National: {term.national}%
                    </span>
                    <span className="text-foreground font-medium text-xs">
                      School: {term.school}%
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative h-8 bg-muted rounded overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-muted-foreground/30 rounded"
                      style={{ width: `${(term.national / maxTermSchool) * 100}%` }}
                    />
                    <div
                      className="absolute inset-y-0 left-0 bg-blue-500/80 rounded flex items-center justify-end pr-2"
                      style={{ width: `${(term.school / maxTermSchool) * 100}%` }}
                    >
                      <span className="text-xs text-white font-medium">{term.school}%</span>
                    </div>
                  </div>
                  <span className="text-green-700 dark:text-green-300 text-sm font-medium w-12 text-right">
                    +{term.school - term.national}%
                  </span>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-4 text-xs text-foreground mt-2 pt-2 border-t border-border">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                School Average
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-muted-foreground/30 inline-block" />
                National Average
              </span>
              <span className="ml-auto text-foreground">+7% improvement over 4 terms</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Recommendations ─────────────────────────────────────────────────── */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-700 dark:text-amber-300" />
            Recommendations
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Actionable insights based on benchmark analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recommendations.map((rec, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 p-3 rounded-lg ${
                  rec.type === 'warning'
                    ? 'bg-yellow-500/10 border border-yellow-500/30'
                    : 'bg-green-500/10 border border-green-500/30'
                }`}
              >
                {rec.type === 'warning' ? (
                  <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-300 mt-0.5 shrink-0" />
                ) : (
                  <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-300 mt-0.5 shrink-0" />
                )}
                <p
                  className={`text-sm ${
                    rec.type === 'warning'
                      ? 'text-amber-700 dark:text-amber-300'
                      : 'text-green-700 dark:text-green-300'
                  }`}
                >
                  {rec.text}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
