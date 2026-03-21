'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { Menu, X, LogOut } from 'lucide-react'

const NAV_LINKS = [
  { href: '/courses', label: 'Courses' },
  { href: '/practice', label: 'Practice' },
  { href: '/revision', label: 'Revision' },
  { href: '/exam-guide', label: 'Exam Guide' },
]

export function Header() {
  const { user, isLoading } = useAuthStore()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-brand-accent focus:text-white focus:rounded">Skip to content</a>
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/95 backdrop-blur supports-[backdrop-filter]:bg-brand-bg/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-brand-accent">
            The English Hub
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {user &&
            NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="btn-ghost text-sm"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        {/* Desktop auth buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {isLoading ? (
            <div className="h-9 w-20 animate-pulse rounded-lg bg-brand-card" />
          ) : user ? (
            <>
              <Link href="/dashboard" className="btn-ghost text-sm">
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <>
              <Link href="/auth/login" className="btn-ghost text-sm">
                Log in
              </Link>
              <Link href="/auth/register" className="btn-primary text-sm">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="btn-ghost md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-brand-border bg-brand-bg md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4 py-3">
            {user &&
              NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="btn-ghost justify-start text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

            <div className="my-2 border-t border-brand-border" />

            {isLoading ? null : user ? (
              <>
                <Link
                  href="/dashboard"
                  className="btn-ghost justify-start text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Dashboard
                </Link>
                <SignOutButton />
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="btn-ghost justify-start text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/auth/register"
                  className="btn-primary mt-1 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
    </>
  )
}

function SignOutButton() {
  const clear = useAuthStore((s) => s.clear)

  async function handleSignOut() {
    const { createClient } = await import('@/lib/supabase/client')
    const supabase = createClient()
    await supabase.auth.signOut()
    clear()
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="btn-ghost text-sm text-brand-muted hover:text-brand-error"
    >
      <LogOut className="mr-1.5 h-4 w-4" />
      Sign out
    </button>
  )
}
