"use client"

import Link from "next/link"
import {
  Users,
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  ArrowRight,
  BookOpen,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TEACHER_DEMO_CLASSES, DEMO_TEACHER, type DemoClass, type DemoStudent } from "@/data/demo-data"

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

function trendIcon(cls: typeof TEACHER_DEMO_CLASSES[number]) {
  const students = cls.students ?? []
  const upCount = students.filter((s: any) => s.trend === "up").length
  const downCount = students.filter((s: any) => s.trend === "down").length
  if (upCount > downCount) return <TrendingUp className="h-3.5 w-3.5 text-green-400" />
  if (downCount > upCount) return <TrendingDown className="h-3.5 w-3.5 text-red-400" />
  return <Minus className="h-3.5 w-3.5 text-white/30" />
}

export default function TeacherClassesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
          <p className="text-sm text-amber-400">
            <span className="font-semibold">Teacher Demo</span> -- Viewing sample class data for {DEMO_TEACHER.name}
          </p>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light tracking-tight text-white/90 mb-1">My Classes</h1>
            <p className="text-sm text-white/40">
              {TEACHER_DEMO_CLASSES.length} classes -- {DEMO_TEACHER.department} Department
            </p>
          </div>
          <Link href="/demo/teacher">
            <Button variant="outline" size="sm" className="text-white/60 border-white/10 hover:border-white/20">
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Summary KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <p className="text-[11px] uppercase tracking-wider text-white/30 mb-1">Total Students</p>
            <p className="text-2xl font-light text-white/80">
              {TEACHER_DEMO_CLASSES.reduce((sum: number, c: any) => sum + c.studentCount, 0)}
            </p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <p className="text-[11px] uppercase tracking-wider text-white/30 mb-1">Avg Score</p>
            <p className={`text-2xl font-light ${scoreColor(Math.round(TEACHER_DEMO_CLASSES.reduce((sum: number, c: any) => sum + c.avgScore, 0) / TEACHER_DEMO_CLASSES.length))}`}>
              {Math.round(TEACHER_DEMO_CLASSES.reduce((sum: number, c: any) => sum + c.avgScore, 0) / TEACHER_DEMO_CLASSES.length)}%
            </p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <p className="text-[11px] uppercase tracking-wider text-white/30 mb-1">Avg Completion</p>
            <p className="text-2xl font-light text-white/80">
              {Math.round(TEACHER_DEMO_CLASSES.reduce((sum: number, c: any) => sum + c.completionRate, 0) / TEACHER_DEMO_CLASSES.length)}%
            </p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <p className="text-[11px] uppercase tracking-wider text-white/30 mb-1">At-Risk Students</p>
            <p className={`text-2xl font-light ${TEACHER_DEMO_CLASSES.reduce((sum: number, c: any) => sum + c.atRiskCount, 0) > 0 ? "text-red-400" : "text-green-400"}`}>
              {TEACHER_DEMO_CLASSES.reduce((sum: number, c: any) => sum + c.atRiskCount, 0)}
            </p>
          </div>
        </div>

        {/* Class Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEACHER_DEMO_CLASSES.map((cls: any) => (
            <Link key={cls.id} href={`/demo/teacher/classes/${cls.id}`} className="block group">
              <Card className="bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-200 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium text-white/90 group-hover:text-white transition-colors">
                      {cls.name}
                    </CardTitle>
                    <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-white/50 transition-colors" />
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-[10px] border-white/10 text-white/50">
                      Year {cls.yearGroup}
                    </Badge>
                    <Badge variant="outline" className="text-[10px] border-white/10 text-white/50">
                      {cls.examBoard}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">Students</p>
                      <p className="text-lg font-light text-white/70 flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-white/30" />
                        {cls.studentCount}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">Avg Score</p>
                      <p className={`text-lg font-light ${scoreColor(cls.avgScore)}`}>
                        {cls.avgScore}%
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">Trend</p>
                      <div className="flex items-center gap-1 mt-1">
                        {trendIcon(cls)}
                      </div>
                    </div>
                  </div>

                  {/* Completion bar */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-[10px] uppercase tracking-wider text-white/30">Completion</p>
                      <span className="text-xs text-white/40">{cls.completionRate}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/5">
                      <div
                        className={`h-1.5 rounded-full ${progressBarColor(cls.completionRate)} transition-all`}
                        style={{ width: `${cls.completionRate}%` }}
                      />
                    </div>
                  </div>

                  {/* At-risk indicator */}
                  {cls.atRiskCount > 0 && (
                    <div className="flex items-center gap-1.5 text-xs text-red-400/80">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      {cls.atRiskCount} student{cls.atRiskCount > 1 ? "s" : ""} at risk
                    </div>
                  )}
                  {cls.atRiskCount === 0 && (
                    <div className="flex items-center gap-1.5 text-xs text-green-400/60">
                      <BookOpen className="h-3.5 w-3.5" />
                      All students on track
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-10 text-center text-[10px] uppercase tracking-[0.3em] text-neutral-600">
          Demo data -- {DEMO_TEACHER.name} -- {TEACHER_DEMO_CLASSES.length} classes
        </p>
      </div>
    </div>
  )
}
