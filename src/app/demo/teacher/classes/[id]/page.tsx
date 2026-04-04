"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
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
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TEACHER_DEMO_CLASSES, DEMO_STUDENTS } from "@/data/demo-data"

function ragDot(status: "green" | "amber" | "red") {
  const colors = {
    green: "bg-green-500",
    amber: "bg-amber-500",
    red: "bg-red-500",
  }
  return <span className={`inline-block w-2.5 h-2.5 rounded-full ${colors[status]}`} />
}

function ragLabel(status: "green" | "amber" | "red") {
  const labels = { green: "On Track", amber: "Monitor", red: "At Risk" }
  const styles = {
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${styles[status]}`}>
      {ragDot(status)}
      {labels[status]}
    </span>
  )
}

function trendIcon(trend: "up" | "down" | "stable") {
  if (trend === "up") return <TrendingUp className="h-3.5 w-3.5 text-green-400" />
  if (trend === "down") return <TrendingDown className="h-3.5 w-3.5 text-red-400" />
  return <Minus className="h-3.5 w-3.5 text-white/30" />
}

function scoreColor(score: number) {
  if (score >= 70) return "text-green-400"
  if (score >= 50) return "text-amber-400"
  return "text-red-400"
}

function progressBarColor(pct: number) {
  if (pct >= 70) return "bg-green-500"
  if (pct >= 50) return "bg-amber-500"
  return "bg-red-500"
}

export default function TeacherClassDetailPage() {
  const params = useParams()
  const classId = params.id as string
  const cls = TEACHER_DEMO_CLASSES.find((c) => c.id === classId)

  if (!cls) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-white/90 mb-2">Class Not Found</h1>
          <p className="text-neutral-500 text-sm mb-6">This class does not exist or is not assigned to you.</p>
          <Link href="/demo/teacher/classes" className="text-emerald-400 hover:underline text-sm">
            Back to My Classes
          </Link>
        </div>
      </div>
    )
  }

  const sortedStudents = [...cls.students].sort((a, b) => {
    if (a.atRisk && !b.atRisk) return -1
    if (!a.atRisk && b.atRisk) return 1
    return b.overallScore - a.overallScore
  })

  const classStudents = cls.students
  const avgScore = cls.avgScore
  const avgCompletion = cls.completionRate
  const atRiskCount = cls.atRiskCount
  const onTrackCount = classStudents.filter((s) => s.ragStatus === "green").length
  const monitorCount = classStudents.filter((s) => s.ragStatus === "amber").length
  const improvingCount = classStudents.filter((s) => s.trend === "up").length
  const decliningCount = classStudents.filter((s) => s.trend === "down").length

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
          <p className="text-sm text-amber-400">
            <span className="font-semibold">Teacher Demo</span> -- Viewing sample data for {cls.name}
          </p>
        </div>

        {/* Back nav */}
        <Link
          href="/demo/teacher/classes"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to My Classes
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light tracking-tight text-white/90 mb-2">
            {cls.name}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/40">
            <Badge variant="outline" className="text-xs border-white/10 text-white/50">
              Year {cls.yearGroup}
            </Badge>
            <Badge variant="outline" className="text-xs border-white/10 text-white/50">
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
          <Card className="bg-white/[0.02] border-white/5">
            <CardContent className="p-4">
              <p className="text-[11px] uppercase tracking-wider text-white/30 mb-1">Avg Score</p>
              <p className={`text-2xl font-light ${scoreColor(avgScore)}`}>{avgScore}%</p>
            </CardContent>
          </Card>
          <Card className="bg-white/[0.02] border-white/5">
            <CardContent className="p-4">
              <p className="text-[11px] uppercase tracking-wider text-white/30 mb-1">Completion Rate</p>
              <p className="text-2xl font-light text-white/80">{avgCompletion}%</p>
            </CardContent>
          </Card>
          <Card className="bg-white/[0.02] border-white/5">
            <CardContent className="p-4">
              <p className="text-[11px] uppercase tracking-wider text-white/30 mb-1">At-Risk</p>
              <p className={`text-2xl font-light ${atRiskCount > 0 ? "text-red-400" : "text-green-400"}`}>
                {atRiskCount}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/[0.02] border-white/5">
            <CardContent className="p-4">
              <p className="text-[11px] uppercase tracking-wider text-white/30 mb-1">On Track</p>
              <p className="text-2xl font-light text-green-400">{onTrackCount}</p>
            </CardContent>
          </Card>
        </div>

        {/* RAG Distribution */}
        <Card className="bg-white/[0.02] border-white/5 mb-8">
          <CardContent className="p-5">
            <p className="text-sm font-medium text-white/70 mb-3">Student Distribution</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-sm text-white/60">On Track: {onTrackCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-sm text-white/60">Monitor: {monitorCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="text-sm text-white/60">At Risk: {atRiskCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-3.5 w-3.5 text-green-400" />
                <span className="text-sm text-white/60">Improving: {improvingCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingDown className="h-3.5 w-3.5 text-red-400" />
                <span className="text-sm text-white/60">Declining: {decliningCount}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Student Table */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-white/80 mb-4">All Students</h2>
          <Card className="bg-white/[0.02] border-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-4 py-3 text-xs font-medium text-white/40">Student</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-white/40">Score</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-white/40 hidden md:table-cell">RAG</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-white/40 hidden md:table-cell">Trend</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-white/40 hidden lg:table-cell">Last Active</th>
                    <th className="text-right px-4 py-3 text-xs font-medium text-white/40">Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedStudents.map((student) => (
                    <tr
                      key={student.id}
                      className={`border-b border-white/5 last:border-0 transition-colors hover:bg-white/[0.02] ${
                        student.atRisk ? "bg-red-500/[0.02]" : ""
                      }`}
                    >
                      <td className="px-4 py-3">
                        <Link
                          href={`/demo/teacher/students/${student.id}`}
                          className="text-white/80 hover:text-emerald-400 transition-colors font-medium"
                        >
                          {student.name}
                        </Link>
                        {student.atRisk && student.riskReason && (
                          <p className="text-[11px] text-red-400/70 mt-0.5 max-w-xs truncate">
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
                      <td className="px-4 py-3 hidden md:table-cell">
                        {trendIcon(student.trend)}
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell text-xs text-white/40">
                        {student.lastActive}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link href={`/demo/teacher/students/${student.id}`}>
                          <Button variant="ghost" size="xs" className="text-white/40 hover:text-emerald-400">
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Personalised Class Report */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-white/80 mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-emerald-400" />
            Personalised Class Report
          </h2>
          <Card className="bg-white/[0.02] border-white/5">
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-white/70">Strengths</span>
                  </div>
                  <ul className="text-xs text-white/50 space-y-1 pl-6">
                    <li>Strong engagement from top performers</li>
                    <li>Good completion rate on reading tasks</li>
                    <li>Consistent improvement in essay scores</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    <span className="text-sm text-white/70">Areas for Focus</span>
                  </div>
                  <ul className="text-xs text-white/50 space-y-1 pl-6">
                    <li>{decliningCount} student{decliningCount !== 1 ? "s" : ""} showing declining engagement</li>
                    <li>Paper 2 scores below class average</li>
                    <li>Homework submission rate needs attention</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-white/70">Recommendations</span>
                  </div>
                  <ul className="text-xs text-white/50 space-y-1 pl-6">
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
        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] text-neutral-600">
          Demo data -- {cls.name} -- {cls.studentCount} students
        </p>
      </div>
    </div>
  )
}
