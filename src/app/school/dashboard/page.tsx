"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  BookOpen,
  BarChart3,
  Upload,
  Download,
  CheckCircle,
  Clock,
  School,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { useAuthStore } from "@/store/auth-store"

// ── Types ────────────────────────────────────────────────────────────────────

interface DashboardStats {
  totalStudents: number
  totalTeachers: number
  activeClasses: number
  assignmentsThisWeek: number
}

interface SchoolData {
  id: string
  name: string
  subscription_plan: string
  created_at: string
}

const FOUNDER_ACCESS_UNTIL = "August 2027"
const RENEWAL_PRICE = "Contact us"

// ── Setup checklist ──────────────────────────────────────────────────────────

interface SetupStep {
  label: string
  done: boolean
}

// ── Component ────────────────────────────────────────────────────────────────

export default function SchoolDashboardPage() {
  const { user } = useAuthStore()
  const [school, setSchool] = useState<SchoolData | null>(null)
  const [stats, setStats] = useState<DashboardStats>({
    totalStudents: 0,
    totalTeachers: 0,
    activeClasses: 0,
    assignmentsThisWeek: 0,
  })
  const [isFounder, setIsFounder] = useState(false)
  const [setupSteps, setSetupSteps] = useState<SetupStep[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    async function fetchDashboardData() {
      const supabase = createClient()

      // Fetch school membership
      const { data: membership } = await supabase
        .from("school_members")
        .select("*, schools(*)")
        .eq("user_id", user!.id)
        .eq("invite_status", "accepted")
        .limit(1)
        .single()

      if (!membership?.school_id) {
        setLoading(false)
        return
      }

      const schoolData = (membership as { schools?: SchoolData }).schools
      if (schoolData) {
        setSchool(schoolData)
        // Founder access: schools registered before/during founder period
        // Identified by subscription_plan being "custom" or created early
        setIsFounder(
          schoolData.subscription_plan === "custom" ||
          schoolData.subscription_plan === "school"
        )
      }

      const schoolId = membership.school_id

      // Fetch stats in parallel
      const [studentsRes, teachersRes, classesRes, assignmentsRes] =
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
            .from("assignments")
            .select("id", { count: "exact", head: true })
            .eq("school_id", schoolId)
            .gte(
              "created_at",
              new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
            ),
        ])

      const totalStudents = studentsRes.count ?? 0
      const totalTeachers = teachersRes.count ?? 0
      const activeClasses = classesRes.count ?? 0
      const assignmentsThisWeek = assignmentsRes.count ?? 0

      setStats({ totalStudents, totalTeachers, activeClasses, assignmentsThisWeek })

      // Build setup checklist
      setSetupSteps([
        { label: "Create school account", done: true },
        { label: "Import teachers", done: totalTeachers > 0 },
        { label: "Import students", done: totalStudents > 0 },
        { label: "Create classes", done: activeClasses > 0 },
        {
          label: "Assign students to classes",
          done: activeClasses > 0 && totalStudents > 0,
        },
      ])

      setLoading(false)
    }

    fetchDashboardData()
  }, [user])

  const isNewSchool =
    !loading &&
    stats.totalTeachers === 0 &&
    stats.totalStudents === 0 &&
    stats.activeClasses === 0

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-7 w-7 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">
              School Dashboard
            </h1>
          </div>
          {school && (
            <p className="mt-1 flex items-center gap-2 text-muted-foreground">
              <School className="h-4 w-4" />
              {school.name}
            </p>
          )}
        </div>
        <Button variant="outline" size="sm" render={<Link href="/school/guide" />}>Setup Guide</Button>
      </div>

      {/* FOUNDER access banner */}
      {isFounder && (
        <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-5 py-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-lg">&#9733;</span>
            <div>
              <p className="font-semibold text-amber-400">
                Your Founding Schools access is active until {FOUNDER_ACCESS_UNTIL}.
              </p>
              <p className="mt-0.5 text-sm text-amber-400/80">
                Your preferential rate is locked. Contact us to discuss renewal.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border bg-card/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Students
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {loading ? (
                <span className="text-muted-foreground">--</span>
              ) : (
                stats.totalStudents
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Teachers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {loading ? (
                <span className="text-muted-foreground">--</span>
              ) : (
                stats.totalTeachers
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Classes
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {loading ? (
                <span className="text-muted-foreground">--</span>
              ) : (
                stats.activeClasses
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Assignments This Week
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {loading ? (
                <span className="text-muted-foreground">--</span>
              ) : (
                stats.assignmentsThisWeek
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left column: quick actions + activity */}
        <div className="space-y-6 lg:col-span-2">
          {/* Quick actions */}
          <Card className="border-border bg-card/60">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <Button
                variant="outline"
                className="h-auto justify-start gap-3 px-4 py-3"
                render={<Link href="/school/import" />}
              >
                  <Upload className="h-4 w-4 shrink-0 text-primary" />
                  <div className="text-left">
                    <p className="text-sm font-medium">Import Students / Teachers</p>
                    <p className="text-xs text-muted-foreground">
                      Upload CSV to bulk-add users
                    </p>
                  </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto justify-start gap-3 px-4 py-3"
                render={<Link href="/school/classes" />}
              >
                  <BookOpen className="h-4 w-4 shrink-0 text-primary" />
                  <div className="text-left">
                    <p className="text-sm font-medium">Manage Classes</p>
                    <p className="text-xs text-muted-foreground">
                      Create and organise classes
                    </p>
                  </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto justify-start gap-3 px-4 py-3"
                render={<Link href="/school/analytics" />}
              >
                  <BarChart3 className="h-4 w-4 shrink-0 text-primary" />
                  <div className="text-left">
                    <p className="text-sm font-medium">View Analytics</p>
                    <p className="text-xs text-muted-foreground">
                      Track progress and performance
                    </p>
                  </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto justify-start gap-3 px-4 py-3"
                render={<Link href="/school/import" />}
              >
                  <Download className="h-4 w-4 shrink-0 text-primary" />
                  <div className="text-left">
                    <p className="text-sm font-medium">Download Login Details</p>
                    <p className="text-xs text-muted-foreground">
                      Export credentials for students
                    </p>
                  </div>
              </Button>
            </CardContent>
          </Card>

          {/* Recent activity */}
          <Card className="border-border bg-card/60">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Clock className="mb-3 h-8 w-8 text-muted-foreground/40" />
                <p className="text-sm text-muted-foreground">
                  Activity will appear here as teachers and students use the platform.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column: setup checklist */}
        <div>
          {isNewSchool && (
            <Card className="border-border bg-card/60">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Setup Progress
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    Getting started
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {setupSteps.map((step, index) => (
                    <li key={index} className="flex items-center gap-3">
                      {step.done ? (
                        <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                      ) : (
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-border text-xs font-bold text-muted-foreground">
                          {index + 1}
                        </div>
                      )}
                      <span
                        className={
                          step.done
                            ? "text-sm text-muted-foreground line-through"
                            : "text-sm font-medium text-foreground"
                        }
                      >
                        {step.label}
                      </span>
                    </li>
                  ))}
                </ol>
                <Button className="mt-6 w-full" size="sm" render={<Link href="/school/guide" />}>View Setup Guide</Button>
              </CardContent>
            </Card>
          )}

          {!isNewSchool && !loading && (
            <Card className="border-border bg-card/60">
              <CardHeader>
                <CardTitle className="text-base font-semibold text-foreground">
                  Setup Complete
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center py-4 text-center">
                  <CheckCircle className="mb-3 h-10 w-10 text-green-500" />
                  <p className="text-sm text-muted-foreground">
                    Your school is set up and ready to go.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    render={<Link href="/school/guide" />}
                  >Setup Guide</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
