'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { Menu, LogOut } from 'lucide-react'
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
  { href: '/practice', label: 'Practice' },
  { href: '/revision', label: 'Revision' },
  { href: '/exam-guide', label: 'Exam Guide' },
]

export function Header() {
  const { user, isLoading } = useAuthStore()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
            The English Hub
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 md:flex">
          {user &&
            NAV_LINKS.map((link) => (
              <Button key={link.href} variant="ghost" size="sm" render={<Link href={link.href} />}>
                {link.label}
              </Button>
            ))}
        </nav>

        {/* Desktop auth buttons */}
        <div className="hidden items-center gap-2.5 md:flex">
          {isLoading ? (
            <Skeleton className="h-8 w-20 rounded-lg" />
          ) : user ? (
            <>
              <Button variant="ghost" size="sm" render={<Link href="/dashboard" />}>
                Dashboard
              </Button>
              <SignOutButton />
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" render={<Link href="/auth/login" />}>
                Log in
              </Button>
              <Button variant="default" size="sm" render={<Link href="/auth/register" />}>
                Register
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            render={
              <button
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden")}
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
              {user &&
                NAV_LINKS.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    className="w-full justify-start"
                    render={<Link href={link.href} />}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Button>
                ))}

              <Separator className="my-3" />

              {isLoading ? (
                <Skeleton className="h-9 w-full rounded-lg" />
              ) : user ? (
                <>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    render={<Link href="/dashboard" />}
                    onClick={() => setMobileOpen(false)}
                  >
                    Dashboard
                  </Button>
                  <SignOutButton />
                </>
              ) : (
                <>
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
                    Register
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
