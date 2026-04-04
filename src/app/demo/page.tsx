"use client"

import Link from "next/link"
import { School, GraduationCap, Users, ArrowRight, CheckCircle2, Download, Sparkles } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const demos = [
  {
    title: "School Admin Portal",
    description:
      "See how school leaders track 342 students, 18 teachers, and 24 classes. Drill down to any student.",
    icon: School,
    accent: "blue",
    href: "/demo/school",
    cta: "Launch School Demo",
    features: [
      "Department Analytics",
      "Student Drill-down",
      "Progress Reports",
      "Bulk User Management",
    ],
  },
  {
    title: "Teacher Dashboard",
    description:
      "See your class dashboard, build lessons, mark essays, and track student progress.",
    icon: GraduationCap,
    accent: "green",
    href: "/demo/teacher",
    cta: "Launch Teacher Demo",
    features: [
      "Lesson Builder",
      "AI Essay Marking",
      "Class Analytics",
      "Student Progress",
    ],
  },
  {
    title: "Student Experience",
    description:
      "Practice mock exams, use flashcards, track your progress, and get AI feedback.",
    icon: Users,
    accent: "purple",
    href: "/demo/student",
    cta: "Launch Student Demo",
    features: [
      "Mock Exams",
      "Flashcards",
      "AI Feedback",
      "Progress Tracking",
    ],
  },
] as const

const accentStyles = {
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    hoverBg: "hover:bg-blue-500/20",
    badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    glow: "group-hover:shadow-blue-500/10",
    iconBg: "bg-blue-500/15",
  },
  green: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    hoverBg: "hover:bg-emerald-500/20",
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    glow: "group-hover:shadow-emerald-500/10",
    iconBg: "bg-emerald-500/15",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    hoverBg: "hover:bg-purple-500/20",
    badge: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    glow: "group-hover:shadow-purple-500/10",
    iconBg: "bg-purple-500/15",
  },
} as const

export default function DemoHub() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
        <Badge variant="outline" className="mb-6 border-white/10 text-neutral-400">
          No signup required
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          Try The English Hub{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400">
            Free Interactive Demo
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto">
          Explore the full platform with sample data. No signup, no email
          required. Click any demo to start.
        </p>
      </section>

      {/* Demo cards */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {demos.map((demo) => {
            const styles = accentStyles[demo.accent]
            const Icon = demo.icon

            return (
              <Card
                key={demo.href}
                className={`group relative bg-white/[0.02] border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-xl ${styles.glow}`}
              >
                <CardHeader>
                  <div
                    className={`mb-2 inline-flex size-12 items-center justify-center rounded-xl ${styles.iconBg}`}
                  >
                    <Icon className={`size-6 ${styles.text}`} />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {demo.title}
                  </CardTitle>
                  <CardDescription className="text-neutral-400 text-sm leading-relaxed">
                    {demo.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-2.5">
                    {demo.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-neutral-300"
                      >
                        <CheckCircle2
                          className={`size-4 shrink-0 ${styles.text}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Screenshot placeholder */}
                <div className="mx-5 mb-4 rounded-lg border border-white/5 bg-white/[0.02] p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="size-2 rounded-full bg-white/10" />
                    <div className="size-2 rounded-full bg-white/10" />
                    <div className="size-2 rounded-full bg-white/10" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 rounded bg-white/5 w-3/4" />
                    <div className="h-2 rounded bg-white/5 w-1/2" />
                    <div className="h-2 rounded bg-white/5 w-2/3" />
                  </div>
                </div>

                <CardFooter className="px-5 pb-5">
                  <Button
                    render={<Link href={demo.href} />}
                    size="lg"
                    className={`w-full ${styles.bg} ${styles.text} border ${styles.border} ${styles.hoverBg} bg-clip-padding`}
                  >
                      {demo.cta}
                      <ArrowRight className="size-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Free resources */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <Sparkles className="size-5 text-amber-400" />
              <span className="text-sm font-medium text-amber-400 uppercase tracking-wider">
                Free Resources
              </span>
            </div>
            <p className="text-white text-lg font-medium mb-1">
              Free teaching materials pack for An Inspector Calls
            </p>
            <p className="text-neutral-500 text-sm">
              Lesson plans, worksheets, and revision guides -- ready to download.
            </p>
          </div>
          <Button
            render={<Link href="/for-teachers/free-resources" />}
            variant="outline"
            size="lg"
            className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 shrink-0"
          >
              <Download className="size-4 mr-1.5" />
              Download Free Pack
          </Button>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Ready to get started?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
            Choose the plan that fits your needs. Schools get full access with
            the FOUNDER plan -- completely free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button render={<Link href="/for-schools/register" />} size="lg" className="w-full sm:w-auto">
                Register School
                <Badge
                  variant="secondary"
                  className="ml-2 bg-white/20 text-white text-[10px] border-0"
                >
                  FREE WITH FOUNDER
                </Badge>
            </Button>
            <Button
              render={<Link href="/auth/teacher-register" />}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
            >
              Teacher Free Trial
            </Button>
            <Button
              render={<Link href="/auth/register" />}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
            >
              Student Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
