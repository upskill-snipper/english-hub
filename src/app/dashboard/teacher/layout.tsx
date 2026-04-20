'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useAuthProfile, useAuthLoading } from '@/store/auth-store'

// ─── Navigation items ───────────────────────────────────────────────────

const navItems = [
  {
    label: 'Dashboard',
    href: '/dashboard/teacher',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    label: 'Students',
    href: '/dashboard/teacher/students',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
      </svg>
    ),
  },
  {
    label: 'Assignments',
    href: '/dashboard/teacher/assignments',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    label: 'Analytics',
    href: '/dashboard/teacher/analytics',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    label: 'Resources',
    href: '/dashboard/teacher/resources',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
]

// ─── Teacher Layout ─────────────────────────────────────────────────────

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const profile = useAuthProfile()
  const isLoading = useAuthLoading()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const isTeacher = profile?.role === 'teacher' || profile?.role === 'admin'

  useEffect(() => {
    if (!isLoading && profile && !isTeacher) {
      router.push('/dashboard')
    }
  }, [isLoading, profile, isTeacher, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">Loading teacher dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isTeacher) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Access Denied</h1>
          <p className="text-muted-foreground mb-4">
            You need a teacher account to view this page.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            If you are a teacher, please register with a teacher account.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/dashboard"
              className="inline-block text-primary hover:underline font-medium"
            >
              Go to student dashboard
            </Link>
            <Link
              href="/auth/register"
              className="inline-block text-primary hover:underline font-medium"
            >
              Register as teacher
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary text-white transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
          <Link href="/dashboard/teacher" className="font-bold text-lg">
            Teacher Hub
          </Link>
          <button
            className="lg:hidden text-white/80 hover:text-white"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="mt-6 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive =
              item.href === '/dashboard/teacher'
                ? pathname === '/dashboard/teacher'
                : pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-card/15 text-white'
                    : 'text-white/70 hover:bg-card/10 hover:text-white'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to student view
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 bg-card border-b border-border flex items-center px-4 lg:px-8">
          <button
            className="lg:hidden text-muted-foreground hover:text-foreground mr-4"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Demoted from h1 to p — each page renders its own canonical h1.
              Double-h1 was flagged by the Cycle 2 a11y agent. */}
          <p className="text-lg font-semibold text-foreground">
            The English Hub — Teacher Dashboard
          </p>
        </header>

        {/* Preview banner — hoisted from /dashboard/teacher root so it
            shows on every teacher sub-route (students, assignments,
            analytics, resources). Cycle 2 a11y audit P1: sub-routes
            render mock data with no banner, so paying teachers could
            interpret the mock students / submissions as real. */}
        <div
          role="status"
          className="mx-4 lg:mx-8 mt-4 flex items-start gap-3 rounded-xl border border-amber-500/40 bg-amber-500/10 px-5 py-4"
        >
          <svg
            className="h-5 w-5 shrink-0 text-amber-600 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01M5 19h14a2 2 0 001.84-2.75L13.73 4a2 2 0 00-3.46 0L3.17 16.25A2 2 0 005 19z"
            />
          </svg>
          <div className="text-sm text-foreground">
            <p className="font-semibold">Preview — teacher dashboard is still in development</p>
            <p className="mt-1 text-muted-foreground">
              The numbers, students, and submissions shown across these teacher pages are
              illustrative only. Live class stats, real student submissions, and progress tracking
              are coming soon. If you were expecting live data, please contact us at{' '}
              <a
                href="mailto:info@upskillenergy.com"
                className="underline underline-offset-2 font-medium text-foreground hover:text-primary"
              >
                info@upskillenergy.com
              </a>
              .
            </p>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
