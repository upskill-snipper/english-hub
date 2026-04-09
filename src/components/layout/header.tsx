'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuthStore, useAuthUserLoading, useAuthProfile } from '@/store/auth-store'
import { Menu, LogOut, School, Sparkles } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

const NAV_LINKS = [
  { href: '/courses', label: 'Courses' },
  { href: '/mock-exams', label: 'Mock Exams' },
  { href: '/games', label: 'Games' },
  { href: '/practice', label: 'Practice' },
  { href: '/revision', label: 'Revision' },
  { href: '/for-teachers', label: 'For Teachers' },
  { href: '/for-schools', label: 'For Schools' },
  { href: '/pricing', label: 'Pricing' },
]

export function Header() {
  const { user, isLoading } = useAuthUserLoading()
  const profile = useAuthProfile()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isSchoolMember, setIsSchoolMember] = useState(false)

  const isPremium = profile?.subscription_status === 'pro'

  useEffect(() => {
    if (!user) {
      setIsSchoolMember(false)
      return
    }

    let cancelled = false

    async function checkSchoolMembership() {
      try {
        const { createClient } = await import('@/lib/supabase/client')
        const supabase = createClient()
        const { data } = await supabase
          .from('school_members')
          .select('id, role')
          .eq('user_id', user!.id)
          .eq('invite_status', 'accepted')
          .single()

        if (!cancelled && data) {
          setIsSchoolMember(true)
        }
      } catch {
        // Not a school member or network error — ignore
      }
    }

    checkSchoolMembership()
    return () => { cancelled = true }
  }, [user])

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5 group">
          <span className="text-lg font-bold tracking-tight whitespace-nowrap text-foreground group-hover:text-primary transition-colors duration-200">
            The English Hub
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden min-w-0 items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                render={<Link href={link.href} aria-current={isActive ? 'page' : undefined} />}
                className={cn(isActive && 'bg-accent text-foreground')}
              >
                {link.label}
              </Button>
            )
          })}
        </nav>

        {/* Desktop auth buttons */}
        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          {isLoading ? (
            <Skeleton className="h-8 w-20 rounded-lg" />
          ) : user ? (
            <>
              {isPremium ? (
                <Button variant="default" size="sm" render={<Link href="/dashboard" />}>
                  Dashboard
                </Button>
              ) : (
                <>
                  <Button variant="ghost" size="sm" render={<Link href="/dashboard" />}>
                    Dashboard
                  </Button>
                  <Button variant="default" size="sm" render={<Link href="/pricing" />}>
                    Upgrade
                  </Button>
                </>
              )}
              <Button variant="ghost" size="sm" render={<Link href="/account" />}>
                Account
              </Button>
              {isSchoolMember && (
                <Button variant="ghost" size="sm" render={<Link href="/school" />}>
                  <School className="mr-1.5 h-4 w-4" />
                  School
                </Button>
              )}
              <SignOutButton />
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" render={<Link href="/demo/school" />}>
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                Try Demo
              </Button>
              <Button variant="ghost" size="sm" render={<Link href="/auth/login" />}>
                Log in
              </Button>
              <Button variant="default" size="sm" render={<Link href="/auth/register" />}>
                Start Free
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            render={
              <button
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "lg:hidden")}
                aria-label="Open menu"
              />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="text-foreground font-bold tracking-tight">The English Hub</SheetTitle>
            </SheetHeader>

            <nav aria-label="Mobile navigation" className="flex flex-col gap-1 pt-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                return (
                  <Button
                    key={link.href}
                    variant="ghost"
                    className={cn('w-full justify-start', isActive && 'bg-accent text-foreground')}
                    render={<Link href={link.href} aria-current={isActive ? 'page' : undefined} />}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Button>
                )
              })}

              <Separator className="my-3" />

              {isLoading ? (
                <Skeleton className="h-9 w-full rounded-lg" />
              ) : user ? (
                <>
                  {isPremium ? (
                    <Button
                      variant="default"
                      className="w-full"
                      render={<Link href="/dashboard" />}
                      onClick={() => setMobileOpen(false)}
                    >
                      Dashboard
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        render={<Link href="/dashboard" />}
                        onClick={() => setMobileOpen(false)}
                      >
                        Dashboard
                      </Button>
                      <Button
                        variant="default"
                        className="w-full"
                        render={<Link href="/pricing" />}
                        onClick={() => setMobileOpen(false)}
                      >
                        Upgrade
                      </Button>
                    </>
                  )}
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    render={<Link href="/account" />}
                    onClick={() => setMobileOpen(false)}
                  >
                    Account
                  </Button>
                  {isSchoolMember && (
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      render={<Link href="/school" />}
                      onClick={() => setMobileOpen(false)}
                    >
                      <School className="mr-1.5 h-4 w-4" />
                      School Dashboard
                    </Button>
                  )}
                  <SignOutButton />
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    render={<Link href="/demo/school" />}
                    onClick={() => setMobileOpen(false)}
                  >
                    <Sparkles className="mr-1.5 h-4 w-4" />
                    Try Demo
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    render={<Link href="/auth/login" />}
                    onClick={() => setMobileOpen(false)}
                  >
                    Log in
                  </Button>
                  <Button
                    variant="default"
                    className="mt-1 w-full"
                    render={<Link href="/auth/register" />}
                    onClick={() => setMobileOpen(false)}
                  >
                    Start Free
                  </Button>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function SignOutButton() {
  const clear = useAuthStore((s) => s.clear)

  async function handleSignOut() {
    const { createClient } = await import('@/lib/supabase/client')
    const supabase = createClient()
    await supabase.auth.signOut()
    clear()
    window.location.href = '/'
  }

  return (
    <Button
      variant="ghost"
      onClick={handleSignOut}
      className="text-muted-foreground hover:text-destructive"
    >
      <LogOut className="mr-1.5 h-4 w-4" />
      Sign out
    </Button>
  )
}
