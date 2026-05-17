'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Users,
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Target,
  ExternalLink,
  FileText,
  Lightbulb,
  XCircle,
  BookOpen,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  TEACHER_DEMO_CLASSES,
  DEMO_STUDENTS,
  type DemoClass,
  type DemoStudent,
} from '@/data/demo-data'
import { AnimatedNumber, RankBars } from '@/components/dataviz'

function ragDot(status: 'green' | 'amber' | 'red') {
  const colors = {
    green: 'bg-green-500',
    amber: 'bg-amber-500',
    red: 'bg-red-500',
  }
  return <span className={`inline-block w-2.5 h-2.5 rounded-full ${colors[status]}`} />
}

function ragLabel(status: 'green' | 'amber' | 'red') {
  const labels = { green: 'On Track', amber: 'Monitor', red: 'At Risk' }
  const styles = {
    green: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
    amber: 'bg-amber-500/10 text-clay-600 dark:text-clay-400 border-amber-500/20',
    red: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
  }
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${styles[status]}`}
    >
      {ragDot(status)}
      {labels[status]}
    </span>
  )
}

function trendIcon(trend: 'up' | 'down' | 'stable') {
  if (trend === 'up')
    return <TrendingUp className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
  if (trend === 'down')
    return <TrendingDown className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
  return <Minus className="h-3.5 w-3.5 text-muted-foreground" />
}

function scoreColor(score: number) {
  if (score >= 70) return 'text-green-600 dark:text-green-400'
  if (score >= 50) return 'text-clay-600 dark:text-clay-400'
  return 'text-red-600 dark:text-red-400'
}

function progressBarColor(pct: number) {
  if (pct >= 70) return 'bg-green-500'
  if (pct >= 50) return 'bg-amber-500'
  return 'bg-red-500'
}

export default function TeacherClassDetailPage() {
  const params = useParams()
  const classId = params.id as string
  const cls = TEACHER_DEMO_CLASSES.find((c: any) => c.id === classId)

  if (!cls) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-foreground mb-2">Class Not Found</h1>
          <p className="text-muted-foreground text-sm mb-6">
            This class does not exist or is not assigned to you.
          </p>
          <Link href="/demo/teacher/classes" className="text-primary hover:underline text-sm">
            Back to My Classes
          </Link>
        </div>
      </div>
    )
  }

  const classStudents = cls.students ?? []
  const sortedStudents = [...classStudents].sort((a, b) => {
    if (a.atRisk && !b.atRisk) return -1
    if (!a.atRisk && b.atRisk) return 1
    return b.overallScore - a.overallScore
  })

  // Full student data from DEMO_STUDENTS for deeper analytics
  const fullClassStudents = DEMO_STUDENTS.filter((s: DemoStudent) => s.className === cls.name)

  const avgScore = cls.avgScore
  const avgCompletion = cls.completionRate
  const atRiskCount = cls.atRiskCount ?? 0
  const onTrackCount = classStudents.filter((s: any) => s.ragStatus === 'green').length
  const monitorCount = classStudents.filter((s: any) => s.ragStatus === 'amber').length
  const improvingCount = classStudents.filter((s: any) => s.trend === 'up').length
  const decliningCount = classStudents.filter((s: any) => s.trend === 'down').length

  // Aggregate recent assessment results
  const recentAssessments = fullClassStudents
    .flatMap((s: DemoStudent) => {
      const essays = s.essaySubmissions
        .filter((e) => e.score > 0)
        .map((e) => ({
          studentName: s.name,
          studentId: s.id,
          title: e.title,
          type: 'Essay' as const,
          score: e.score,
          maxScore: 100,
          date: e.date,
        }))
      const quizzes = s.quizAttempts.map((q) => ({
        studentName: s.name,
        studentId: s.id,
        title: q.quiz,
        type: 'Quiz' as const,
        score: q.score,
        maxScore: q.maxScore,
        date: q.date,
      }))
      const mocks = s.mockExamResults.map((m) => ({
        studentName: s.name,
        studentId: s.id,
        title: m.exam,
        type: 'Mock' as const,
        score: m.score,
        maxScore: 100,
        date: m.date,
      }))
      return [...essays, ...quizzes, ...mocks]
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 12)

  // Aggregate strengths and weaknesses across class
  const strengthCounts: Record<string, number> = {}
  const weaknessCounts: Record<string, number> = {}
  fullClassStudents.forEach((s: DemoStudent) => {
    s.strengths.forEach((st) => {
      const name = typeof st === 'string' ? st : st.name
      strengthCounts[name] = (strengthCounts[name] || 0) + 1
    })
    s.weaknesses.forEach((w) => {
      const name = typeof w === 'string' ? w : w.name
      weaknessCounts[name] = (weaknessCounts[name] || 0) + 1
    })
  })
  const topStrengths = Object.entries(strengthCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
  const topWeaknesses = Object.entries(weaknessCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
          <p className="text-sm text-clay-600 dark:text-clay-400">
            <span className="font-semibold">Teacher Demo</span> -- Viewing sample data for{' '}
            {cls.name}
          </p>
        </div>

        {/* Back nav */}
        <Link
          href="/demo/teacher/classes"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-muted-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to My Classes
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light tracking-tight text-foreground mb-2">{cls.name}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Badge variant="outline" className="text-xs border-border/60 text-muted-foreground">
              Year {cls.yearGroup}
            </Badge>
            <Badge variant="outline" className="text-xs border-border/60 text-muted-foreground">
              {cls.examBoard}
            </Badge>
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {cls.studentCount} students
            </span>
          </div>
        </div>

        {/* Class Analytics KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card border-border/60">
            <CardContent className="p-4">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                Avg Score
              </p>
              <AnimatedNumber
                value={avgScore}
                suffix="%"
                className={`block text-2xl font-light ${scoreColor(avgScore)}`}
              />
            </CardContent>
          </Card>
          <Card className="bg-card border-border/60">
            <CardContent className="p-4">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                Completion Rate
              </p>
              <AnimatedNumber
                value={avgCompletion}
                suffix="%"
                className="block text-2xl font-light text-foreground"
              />
            </CardContent>
          </Card>
          <Card className="bg-card border-border/60">
            <CardContent className="p-4">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                At-Risk
              </p>
              <AnimatedNumber
                value={atRiskCount}
                className={`block text-2xl font-light ${atRiskCount > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}
              />
            </CardContent>
          </Card>
          <Card className="bg-card border-border/60">
            <CardContent className="p-4">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                On Track
              </p>
              <AnimatedNumber
                value={onTrackCount}
                className="block text-2xl font-light text-green-600 dark:text-green-400"
              />
            </CardContent>
          </Card>
        </div>

        {/* RAG Distribution */}
        <Card className="bg-card border-border/60 mb-8">
          <CardContent className="p-5">
            <p className="text-sm font-medium text-muted-foreground mb-3">Student Distribution</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">On Track: {onTrackCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-sm text-muted-foreground">Monitor: {monitorCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="text-sm text-muted-foreground">At Risk: {atRiskCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                <span className="text-sm text-muted-foreground">Improving: {improvingCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingDown className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
                <span className="text-sm text-muted-foreground">Declining: {decliningCount}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Student Table */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4">All Students</h2>
          <Card className="bg-card border-border/60 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Student
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Score
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden md:table-cell">
                      RAG
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden md:table-cell">
                      Trend
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden lg:table-cell">
                      Last Active
                    </th>
                    <th className="text-right px-4 py-3 text-xs font-medium text-muted-foreground">
                      Profile
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedStudents.map((student) => (
                    <tr
                      key={student.id}
                      className={`border-b border-border/60 last:border-0 transition-colors hover:bg-card ${
                        student.atRisk ? 'bg-red-500/[0.02]' : ''
                      }`}
                    >
                      <td className="px-4 py-3">
                        <Link
                          href={`/demo/teacher/students/${student.id}`}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {student.name}
                        </Link>
                        {student.atRisk && student.riskReason && (
                          <p className="text-[11px] text-red-600/70 dark:text-red-400/70 mt-0.5 max-w-xs truncate">
                            {student.riskReason}
                          </p>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`font-medium ${scoreColor(student.overallScore)}`}>
                          {student.overallScore}%
                        </span>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        {ragLabel(student.ragStatus)}
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">{trendIcon(student.trend)}</td>
                      <td className="px-4 py-3 hidden lg:table-cell text-xs text-muted-foreground">
                        {student.lastActive}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button
                          render={<Link href={`/demo/teacher/students/${student.id}`} />}
                          variant="ghost"
                          size="xs"
                          className="text-muted-foreground hover:text-primary"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* ── Assessment Results Table ─────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Recent Assessment Results
          </h2>
          <Card className="bg-card border-border/60 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Student
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Assessment
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Type
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Score
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden md:table-cell">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentAssessments.map((item, idx) => {
                    const pct = Math.round((item.score / item.maxScore) * 100)
                    return (
                      <tr
                        key={idx}
                        className="border-b border-border/60 last:border-0 hover:bg-card"
                      >
                        <td className="px-4 py-3">
                          <Link
                            href={`/demo/teacher/students/${item.studentId}`}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {item.studentName}
                          </Link>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground max-w-[200px] truncate">
                          {item.title}
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            variant="outline"
                            className={
                              item.type === 'Essay'
                                ? 'bg-primary/10 text-primary border-primary/20'
                                : item.type === 'Quiz'
                                  ? 'bg-amber-500/10 text-clay-600 dark:text-clay-400 border-amber-500/20'
                                  : 'bg-clay-500/10 text-clay-600 dark:text-clay-400 border-clay-500/20'
                            }
                          >
                            {item.type}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <span className={scoreColor(pct)}>
                            {item.score}/{item.maxScore}
                          </span>
                          <span className="text-muted-foreground text-xs ml-1">({pct}%)</span>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground text-xs hidden md:table-cell">
                          {item.date}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* ── Class Strengths & Weaknesses ────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Class Strengths &amp; Weaknesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-card border-border/60">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-primary flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> Class Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                {topStrengths.length > 0 ? (
                  <>
                    <RankBars
                      data={topStrengths.map(([name, count]) => ({
                        name,
                        pct: Math.round((count / Math.max(1, fullClassStudents.length)) * 100),
                      }))}
                      labelKey="name"
                      valueKey="pct"
                      height={Math.max(180, topStrengths.length * 40)}
                    />
                    <ul className="mt-3 space-y-1">
                      {topStrengths.map(([name, count], i) => (
                        <li
                          key={i}
                          className="flex items-center justify-between text-[11px] text-muted-foreground"
                        >
                          <span>{name}</span>
                          <span>
                            {count}/{fullClassStudents.length} students
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground">Not enough data yet.</p>
                )}
              </CardContent>
            </Card>

            <Card className="bg-card border-border/60">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-red-600 dark:text-red-400 flex items-center gap-2">
                  <XCircle className="h-4 w-4" /> Class Weaknesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                {topWeaknesses.length > 0 ? (
                  <>
                    <RankBars
                      data={topWeaknesses.map(([name, count]) => ({
                        name,
                        pct: Math.round((count / Math.max(1, fullClassStudents.length)) * 100),
                      }))}
                      labelKey="name"
                      valueKey="pct"
                      height={Math.max(180, topWeaknesses.length * 40)}
                    />
                    <ul className="mt-3 space-y-1">
                      {topWeaknesses.map(([name, count], i) => (
                        <li
                          key={i}
                          className="flex items-center justify-between text-[11px] text-muted-foreground"
                        >
                          <span>{name}</span>
                          <span>
                            {count}/{fullClassStudents.length} students
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground">Not enough data yet.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Suggested Lesson Focus ──────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-clay-600 dark:text-clay-400" />
            Suggested Lesson Focus
          </h2>
          <Card className="bg-card border-border/60">
            <CardContent className="p-6">
              <div className="space-y-4">
                {topWeaknesses.slice(0, 3).map(([weakness, count], i) => {
                  const lower = weakness.toLowerCase()
                  let suggestion = ''
                  let activity = ''
                  if (
                    lower.includes('essay') ||
                    lower.includes('writing') ||
                    lower.includes('paragraph')
                  ) {
                    suggestion =
                      'Dedicate a lesson to essay structure using model answers. Break down PEE paragraphs with live examples.'
                    activity = 'Collaborative essay scaffolding exercise with peer feedback'
                  } else if (
                    lower.includes('grammar') ||
                    lower.includes('punctuation') ||
                    lower.includes('spag')
                  ) {
                    suggestion =
                      'Run a focused SPAG workshop with common error patterns from recent submissions.'
                    activity =
                      'Error correction relay: students identify and fix errors in anonymised work'
                  } else if (lower.includes('quote') || lower.includes('evidence')) {
                    suggestion =
                      'Teach the embed-and-analyse technique for weaving quotes into analytical paragraphs.'
                    activity =
                      'Quote embedding challenge: transform clunky quotes into fluent analysis'
                  } else if (
                    lower.includes('time') ||
                    lower.includes('exam') ||
                    lower.includes('technique')
                  ) {
                    suggestion =
                      'Practice timed exam responses with immediate self-assessment against mark schemes.'
                    activity =
                      'Speed analysis: 5-minute response bursts with mark scheme comparison'
                  } else if (lower.includes('analysis') || lower.includes('depth')) {
                    suggestion =
                      "Model deep analysis using the 'What? How? Why?' framework on a key extract."
                    activity =
                      'Layered analysis: whole class builds from surface to deep reading together'
                  } else if (lower.includes('vocabulary') || lower.includes('spelling')) {
                    suggestion =
                      'Introduce Tier 2 academic vocabulary with contextual usage examples.'
                    activity =
                      'Vocabulary auction: students bid on words to use in their next piece'
                  } else if (lower.includes('reading') || lower.includes('comprehension')) {
                    suggestion =
                      'Use retrieval and inference practice with unfamiliar non-fiction texts.'
                    activity =
                      'Reading detective: answer retrieval vs inference questions collaboratively'
                  } else {
                    suggestion = `Address the common weakness in ${weakness.toLowerCase()} through targeted practice.`
                    activity = 'Differentiated practice tasks with teacher-led focus group'
                  }
                  return (
                    <div
                      key={i}
                      className="rounded-lg border border-amber-500/10 bg-amber-500/[0.03] p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-4 w-4 text-clay-600 dark:text-clay-400" />
                        <span className="text-sm font-medium text-foreground">
                          Focus: {weakness}
                        </span>
                        <span className="text-[11px] text-muted-foreground ml-auto">
                          Affects {count}/{fullClassStudents.length} students
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{suggestion}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-wider text-clay-600/60 dark:text-clay-400/60">
                          Suggested Activity:
                        </span>
                        <span className="text-xs text-muted-foreground">{activity}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Personalised Class Report */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Personalised Class Report
          </h2>
          <Card className="bg-card border-border/60">
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm text-muted-foreground">Strengths</span>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1 pl-6">
                    <li>Strong engagement from top performers</li>
                    <li>Good completion rate on reading tasks</li>
                    <li>Consistent improvement in essay scores</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-clay-600 dark:text-clay-400" />
                    <span className="text-sm text-muted-foreground">Areas for Focus</span>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1 pl-6">
                    <li>
                      {decliningCount} student{decliningCount !== 1 ? 's' : ''} showing declining
                      engagement
                    </li>
                    <li>Paper 2 scores below class average</li>
                    <li>Homework submission rate needs attention</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Recommendations</span>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1 pl-6">
                    <li>Intervention meeting for at-risk students</li>
                    <li>Additional Paper 2 practice resources</li>
                    <li>Peer mentoring for mid-range students</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Demo data -- {cls.name} -- {cls.studentCount} students
        </p>
      </div>
    </div>
  )
}
