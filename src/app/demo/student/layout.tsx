"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  BookOpen,
  Target,
  BarChart3,
  Sparkles,
} from "lucide-react"

const navItems = [
  { href: "/demo/student", label: "My Dashboard", icon: LayoutDashboard },
  { href: "/demo/student/courses", label: "My Courses", icon: BookOpen },
  { href: "/demo/student/flashcards", label: "Flashcards", icon: Target },
  { href: "/demo/student/practice", label: "Practice", icon: Sparkles },
  { href: "/demo/student/progress", label: "Progress", icon: BarChart3 },
]

export default function StudentDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-cream-50">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-ink-200 bg-cream-50">
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-ink-200">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-clay-400 flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">EH</span>
          </div>
          <div>
            <p className="text-sm font-medium text-ink-900">The English Hub</p>
            <p className="text-[10px] text-ink-500">Student Portal</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/demo/student"
                ? pathname === "/demo/student"
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-cream-100 text-ink-900"
                    : "text-ink-500 hover:text-ink-900 hover:bg-cream-100"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="px-4 pb-4 space-y-2">
          <Link
            href="/auth/register"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-violet-500 to-clay-400 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Sparkles className="h-4 w-4" />
            Start Free Trial
          </Link>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-cream-50/95 backdrop-blur border-b border-ink-200">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-clay-400 flex items-center justify-center">
            <span className="text-[9px] font-bold text-white">EH</span>
          </div>
          <span className="text-sm text-ink-900">Student Demo</span>
        </div>
        <Link
          href="/auth/register"
          className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-500 to-clay-400 text-xs font-medium text-white"
        >
          Start Free Trial
        </Link>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-auto lg:p-0 pt-14 lg:pt-0">
        {children}
      </main>
    </div>
  )
}
