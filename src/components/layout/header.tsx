'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuthStore, useAuthUserLoading, useAuthProfile } from '@/store/auth-store'
import { Menu, LogOut, School, Sparkles, BookOpen, ChevronDown } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { isGcseBoard, isIgcseBoard } from '@/lib/board/board-filter'
import type { ExamBoard } from '@/lib/board/board-store'

type NavLink = {
  href: string
  label: string
  // If omitted, link is generic and shown for every board / when no board set.
  boardType?: 'gcse' | 'igcse'
}

const NAV_LINKS: NavLink[] = [
  { href: '/courses', label: 'Courses' },
  { href: '/games', label: 'Games' },
  { href: '/revision', label: 'Revision' },
  { href: '/assessment/reading', label: 'Assessment' },
  { href: '/mock-exams', label: 'Mock Exams' },
  { href: '/igcse', label: 'IGCSE', boardType: 'igcse' },
  { href: '/for-teachers', label: 'For Teachers' },
  { href: '/for-schools', label: 'For Schools' },
  { href: '/pricing', label: 'Pricing' },
]

function filterNavLinks(links: NavLink[], board: ExamBoard | null): NavLink[] {
  // No board chosen yet — show the generic nav (hide IGCSE-only link by default).
  if (!board) {
    return links.filter((l) => l.boardType !== 'igcse')
  }
  if (isIgcseBoard(board)) {
    // IGCSE: hide GCSE-only links (currently none are marked gcse-only, but keep the guard).
    return links.filter((l) => l.boardType !== 'gcse')
  }
  if (isGcseBoard(board)) {
    // GCSE: hide IGCSE-only links.
    return links.filter((l) => l.boardType !== 'igcse')
  }
  return links
}

export function Header() {
  const { user, isLoading } = useAuthUserLoading()
  const profile = useAuthProfile()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isSchoolMember, setIsSchoolMember] = useState(false)
  const { board, isHydrated: isBoardHydrated } = useBoard()

  const isPremium = profile?.subscription_status === 'pro'

  const visibleNavLinks = useMemo(
    () => filterNavLinks(NAV_LINKS, isBoardHydrated ? board : null),
    [board, isBoardHydrated]
  )

  const boardConfig = getBoardConfig(board)

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
        {/* Logo + board */}
        <div className="flex min-w-0 shrink items-center gap-2">
          <Link href="/" className="flex shrink-0 items-center gap-2.5 group">
            <span className="text-lg font-bold tracking-tight whitespace-nowrap text-foreground group-hover:text-primary transition-colors duration-200">
              The English Hub
            </span>
          </Link>
          {/* Board switcher (desktop only — mobile has it inside the sheet) */}
          <div className="hidden lg:flex">
            <BoardSwitcher board={board} isHydrated={isBoardHydrated} />
          </div>
        </div>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden min-w-0 items-center gap-0.5 lg:flex">
          {visibleNavLinks.map((link) => {
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

            {/* Mobile: board info + change link */}
            {isBoardHydrated && (
              <div className="mt-4 rounded-lg border border-border/60 bg-muted/40 p-3">
                {boardConfig ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                        <span className="text-xs font-medium text-muted-foreground">Studying</span>
                      </div>
                      <Badge variant="secondary" className="shrink-0">{boardConfig.shortName}</Badge>
                    </div>
                    <p className="text-sm font-semibold text-foreground leading-tight">{boardConfig.fullName}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      render={<Link href="/board-select?change=1" />}
                      onClick={() => setMobileOpen(false)}
                    >
                      Change board
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full"
                    render={<Link href="/board-select" />}
                    onClick={() => setMobileOpen(false)}
                  >
                    <BookOpen className="mr-1.5 h-4 w-4" />
                    Select your exam board
                  </Button>
                )}
              </div>
            )}

            <nav aria-label="Mobile navigation" className="flex flex-col gap-1 pt-4">
              {visibleNavLinks.map((link) => {
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

function BoardSwitcher({
  board,
  isHydrated,
}: {
  board: ExamBoard | null
  isHydrated: boolean
}) {
  // Avoid hydration mismatch — render a placeholder until the persisted store is ready.
  if (!isHydrated) {
    return <div className="h-8 w-20" aria-hidden="true" />
  }

  const config = getBoardConfig(board)

  if (!config) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="h-8 gap-1.5"
        render={<Link href="/board-select" />}
      >
        <BookOpen className="h-3.5 w-3.5" />
        Select board
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            aria-label={`Current exam board: ${config.fullName}. Click to change.`}
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'sm' }),
              'h-8 gap-1.5 px-2'
            )}
          />
        }
      >
        <BookOpen className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
        <Badge variant="secondary" className="pointer-events-none">
          {config.shortName}
        </Badge>
        <ChevronDown className="h-3 w-3 text-muted-foreground" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={6} className="w-72">
        <DropdownMenuLabel>Your exam board</DropdownMenuLabel>
        <div className="px-1.5 pb-1.5">
          <p className="text-sm font-semibold text-foreground leading-tight">
            {config.fullName}
          </p>
          <p className="mt-1 text-xs text-muted-foreground leading-snug">
            {config.description}
          </p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          render={<Link href="/board-select?change=1" />}
        >
          Change board
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
