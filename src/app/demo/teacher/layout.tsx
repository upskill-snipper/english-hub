"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Hammer,
  PenTool,
  ClipboardList,
  HelpCircle,
  BookOpen,
  BarChart3,
  ArrowLeft,
  Sparkles,
  Menu,
  X,
  UserCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import DemoBanner from "@/components/demo/DemoBanner"

const NAV_ITEMS = [
  { label: "My Dashboard", href: "/demo/teacher", icon: LayoutDashboard },
  { label: "My Classes", href: "/demo/teacher/classes", icon: Users },
  { label: "My Students", href: "/demo/teacher/students", icon: GraduationCap },
  { label: "Lesson Builder", href: "/demo/teacher/lessons", icon: Hammer },
  { label: "AI Essay Marking", href: "/demo/teacher/essays", icon: PenTool },
  { label: "Homework", href: "/demo/teacher/homework", icon: ClipboardList },
  { label: "Quizzes", href: "/demo/teacher/quizzes", icon: HelpCircle },
  { label: "Resources", href: "/demo/teacher/resources", icon: BookOpen },
  { label: "Progress", href: "/demo/teacher/progress", icon: BarChart3 },
]

export default function TeacherDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  function isActive(href: string) {
    if (href === "/demo/teacher") return pathname === "/demo/teacher"
    return pathname.startsWith(href)
  }

  const sidebarContent = (
    <div className="flex h-full flex-col">
      {/* Demo mode badge */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500/15 border border-emerald-500/25 px-3 py-2">
          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Teacher Demo
          </span>
        </div>
      </div>

      {/* Teacher header */}
      <div className="border-b border-border px-5 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
            <UserCircle className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="truncate text-sm font-bold text-foreground">
                Mrs Mitchell
              </p>
              <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 uppercase tracking-wider">
                Demo
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">Head of English</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom actions */}
      <div className="border-t border-border px-3 py-4 space-y-3">
        <Button render={<Link href="/auth/teacher-register" />} className="w-full font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 text-black hover:opacity-90">
            <Sparkles className="h-4 w-4 mr-1.5" />
            Start Free Trial
        </Button>
        <Link
          href="/demo"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Demos
        </Link>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden w-60 shrink-0 border-r border-border bg-card lg:block">
        <div className="sticky top-0 h-screen overflow-y-auto">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile header */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-14 items-center border-b border-border bg-card px-4 lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mr-3"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
        <div className="flex items-center gap-2">
          <UserCircle className="h-5 w-5 text-emerald-400" />
          <span className="text-sm font-bold">Mrs Mitchell</span>
          <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 uppercase tracking-wider">
            Teacher Demo
          </Badge>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-60 bg-card shadow-xl lg:hidden">
            {sidebarContent}
          </aside>
        </>
      )}

      {/* Main content */}
      <main className="flex-1 pt-14 lg:pt-0">
        <DemoBanner />
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  )
}
