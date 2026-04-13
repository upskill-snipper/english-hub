"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  BarChart3,
  FileText,
  TrendingUp,
  ArrowLeft,
  School,
  Sparkles,
  Menu,
  X,
  Settings,
  Upload,
  UserCog,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ToastProvider } from "@/components/ui/Toast"
import DemoBanner from "@/components/demo/DemoBanner"

const NAV_ITEMS = [
  { label: "Dashboard", href: "/demo/school", icon: LayoutDashboard },
  { label: "Students", href: "/demo/school/students", icon: Users },
  { label: "Teachers", href: "/demo/school/teachers", icon: GraduationCap },
  { label: "Classes", href: "/demo/school/classes", icon: BookOpen },
  { label: "Analytics", href: "/demo/school/analytics", icon: BarChart3 },
  { label: "Reports", href: "/demo/school/reports", icon: FileText },
  { label: "Progress", href: "/demo/school/progress", icon: TrendingUp },
  { label: "Users", href: "/demo/school/users", icon: UserCog },
  { label: "Import", href: "/demo/school/import", icon: Upload },
  { label: "Settings", href: "/demo/school/settings", icon: Settings },
]

export default function DemoSchoolLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  function isActive(href: string) {
    if (href === "/demo/school") return pathname === "/demo/school"
    return pathname.startsWith(href)
  }

  return (
    <ToastProvider>
      <div className="min-h-screen bg-background">
        <DemoBanner />

        {/* Top bar: school name + actions */}
        <div className="border-b border-border bg-card">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <School className="h-4 w-4 text-primary" />
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-foreground">
                  Riverside Academy
                </p>
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 uppercase tracking-wider">
                  Demo
                </Badge>
              </div>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <Link
                href="/demo"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Demos
              </Link>
              <Button render={<Link href="/for-schools/register" />} size="sm" className="font-semibold">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                Register Your School
              </Button>
            </div>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="sm:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Horizontal nav strip (desktop) */}
        <nav className="hidden border-b border-border/40 bg-card/50 sm:block">
          <div className="flex overflow-x-auto gap-1 px-4 py-2 sm:px-6 lg:px-8">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Mobile nav dropdown */}
        {mobileOpen && (
          <div className="border-b border-border/40 bg-card/50 sm:hidden">
            <div className="flex flex-wrap gap-1 px-4 py-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    {item.label}
                  </Link>
                )
              })}
            </div>
            <div className="flex items-center gap-3 border-t border-border/40 px-4 py-3">
              <Link
                href="/demo"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Demos
              </Link>
              <Button render={<Link href="/for-schools/register" />} size="sm" className="font-semibold">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                Register
              </Button>
            </div>
          </div>
        )}

        {/* Main content - full width */}
        <main className="w-full">
          <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            {children}
          </div>
        </main>
      </div>
    </ToastProvider>
  )
}
