'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useAuthStore, useAuthUserLoading, useAuthProfile } from '@/store/auth-store'
import { Menu, LogOut, School, Sparkles, BookOpen, ChevronDown, RefreshCw, Handshake } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
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
import { getBoardType, getIgcseHubUrl, getALevelHubUrl } from '@/lib/board/board-filter'
import type { ExamBoard } from '@/lib/board/board-store'

type NavLink = {
  href: string
  label: string
}

function getNavForBoardType(
  type: 'ks3' | 'gcse' | 'igcse' | 'ial' | 'a-level' | null,
  board: ExamBoard | null,
): NavLink[] {
  // Board is set — streamlined top nav. "My Papers" and "Games" live in
  // the Your Hub sidebar (see RevisionShell NAV_ITEMS) so they're reachable
  // from everywhere inside the hub without crowding the site-wide header.
  if (type) {
    void board
    return [
      { href: '/revision', label: 'Your Hub' },
      { href: '/for-teachers', label: 'For Teachers' },
      { href: '/for-schools', label: 'For Schools' },
      { href: '/pricing', label: 'Pricing' },
    ]
  }

  // No board selected — marketing visitor nav
  return [
    { href: '/board-select', label: 'For Students' },
    { href: '/for-parents', label: 'For Parents' },
    { href: '/for-teachers', label: 'For Teachers' },
    { href: '/for-schools', label: 'For Schools' },
    { href: '/pricing', label: 'Pricing' },
  ]
}

export function Header() {
  const { user, isLoading } = useAuthUserLoading()
  const profile = useAuthProfile()
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isSchoolMember, setIsSchoolMember] = useState(false)
  const { board, isHydrated: isBoardHydrated, clearBoard } = useBoard()

  const isPremium = profile?.subscription_status === 'pro'

  const visibleNavLinks = useMemo(
    () => getNavForBoardType(isBoardHydrated ? getBoardType(board) : null, board),
    [board, isBoardHydrated],
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
    return () => {
      cancelled = true
    }
  }, [user])

  return (
    <header className="sticky top-5 z-40 mx-4 sm:mx-6 lg:mx-8">
      {/* Skip to content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:left-4 focus:top-2 focus:rounded-full focus:bg-[#E8A382] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#0F1411] focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Pill-shaped floating navbar */}
      <div
        className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-6 rounded-full px-4 sm:px-5 py-2.5"
        style={{
          background: 'rgba(15,20,17,0.92)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
        }}
      >
        {/* Brand + board badge */}
        <div className="flex min-w-0 shrink items-center gap-3">
          <Link href="/" className="flex shrink-0 items-center group">
            <span className="font-serif text-xl font-medium tracking-tight whitespace-nowrap text-[#FBF7F0] transition-colors duration-200">
              The <em className="italic text-[#E8A382]">English</em> Hub
            </span>
          </Link>
          {/* Board switcher (desktop only — mobile has it inside the sheet) */}
          <div className="hidden lg:flex">
            <BoardSwitcher board={board} isHydrated={isBoardHydrated} />
          </div>
        </div>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="hidden min-w-0 items-center gap-1 lg:flex justify-center"
        >
          {visibleNavLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'px-3 py-1.5 rounded-full text-sm font-sans transition-colors duration-200',
                  isActive ? 'text-[#FBF7F0] bg-white/10' : 'text-[#B5B8B3] hover:text-[#FBF7F0]',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop auth / CTA */}
        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          {isLoading ? (
            <Skeleton className="h-8 w-20 rounded-full bg-white/10" />
          ) : user ? (
            <>
              {isPremium ? (
                <Link
                  href="/dashboard"
                  className="rounded-full px-4 py-1.5 text-sm font-medium text-[#0F1411] transition-colors duration-200"
                  style={{ background: '#E8A382' }}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/dashboard"
                    className="rounded-full px-3 py-1.5 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] transition-colors duration-200"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/pricing"
                    className="rounded-full px-4 py-1.5 text-sm font-medium text-[#0F1411] transition-colors duration-200"
                    style={{ background: '#E8A382' }}
                  >
                    Upgrade
                  </Link>
                </>
              )}
              <Link
                href="/account"
                className="rounded-full px-3 py-1.5 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] transition-colors duration-200"
              >
                Account
              </Link>
              {isSchoolMember && (
                <Link
                  href="/school"
                  className="inline-flex items-center rounded-full px-3 py-1.5 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] transition-colors duration-200"
                >
                  <School className="mr-1.5 h-4 w-4" />
                  School
                </Link>
              )}
              <SignOutButton />
            </>
          ) : (
            <>
              <Link
                href="/demo/school"
                className="inline-flex items-center rounded-full px-3 py-1.5 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] transition-colors duration-200"
              >
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                Try Demo
              </Link>
              <Link
                href="/affiliates"
                className="inline-flex items-center rounded-full px-3 py-1.5 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] transition-colors duration-200"
              >
                <Handshake className="mr-1 h-3.5 w-3.5" />
                Affiliates
              </Link>
              <Link
                href="/auth/login"
                className="rounded-full px-3 py-1.5 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] transition-colors duration-200"
              >
                Log in
              </Link>
              <Link
                href="/auth/register"
                className="rounded-full px-5 py-2 text-sm font-medium text-[#0F1411] transition-colors duration-200 hover:brightness-110"
                style={{ background: '#E8A382' }}
              >
                Start free &rarr;
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            render={
              <button
                type="button"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full text-[#B5B8B3] hover:text-[#FBF7F0] hover:bg-white/10 transition-colors duration-200 lg:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>

          <SheetContent side="right" className="border-l-0 bg-[#0F1411] text-[#FBF7F0]">
            <SheetHeader>
              <SheetTitle className="font-serif text-xl font-medium tracking-tight text-[#FBF7F0]">
                The <em className="italic text-[#E8A382]">English</em> Hub
              </SheetTitle>
            </SheetHeader>

            {/* Mobile: board info + change link */}
            {isBoardHydrated && (
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
                {boardConfig ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <BookOpen className="h-4 w-4 shrink-0 text-[#B5B8B3]" aria-hidden="true" />
                        <span className="text-xs font-medium text-[#B5B8B3]">Studying</span>
                      </div>
                      <Badge
                        variant="secondary"
                        className="shrink-0 bg-white/10 text-[#FBF7F0] border-0"
                      >
                        {boardConfig.shortName}
                      </Badge>
                    </div>
                    <p className="text-sm font-semibold text-[#FBF7F0] leading-tight">
                      {boardConfig.fullName}
                    </p>
                    <div className="flex flex-col gap-1.5">
                      <Link
                        href="/board-select?change=1"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-center w-full rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-[#FBF7F0] hover:bg-white/10 transition-colors"
                      >
                        Change board
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          clearBoard()
                          setMobileOpen(false)
                          router.push('/board-select')
                          router.refresh()
                        }}
                        className="inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-red-400 transition-colors hover:bg-red-400/10"
                      >
                        <RefreshCw className="h-3 w-3" aria-hidden="true" />
                        Reset exam board
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/board-select"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full rounded-full px-3 py-2 text-sm font-medium text-[#0F1411] transition-colors"
                    style={{ background: '#E8A382' }}
                  >
                    <BookOpen className="mr-1.5 h-4 w-4" />
                    Select your exam board
                  </Link>
                )}
              </div>
            )}

            <nav aria-label="Mobile navigation" className="flex flex-col gap-1 pt-4">
              {visibleNavLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'w-full rounded-lg px-3 py-2 text-sm font-sans transition-colors duration-200',
                      isActive
                        ? 'bg-white/10 text-[#FBF7F0]'
                        : 'text-[#B5B8B3] hover:text-[#FBF7F0] hover:bg-white/5',
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <Separator className="my-3 bg-white/10" />

              {isLoading ? (
                <Skeleton className="h-9 w-full rounded-full bg-white/10" />
              ) : user ? (
                <>
                  {isPremium ? (
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center w-full rounded-full px-3 py-2 text-sm font-medium text-[#0F1411] transition-colors"
                      style={{ background: '#E8A382' }}
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <>
                      <Link
                        href="/dashboard"
                        onClick={() => setMobileOpen(false)}
                        className="w-full rounded-lg px-3 py-2 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] hover:bg-white/5 transition-colors"
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/pricing"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-center w-full rounded-full px-3 py-2 text-sm font-medium text-[#0F1411] transition-colors"
                        style={{ background: '#E8A382' }}
                      >
                        Upgrade
                      </Link>
                    </>
                  )}
                  <Link
                    href="/account"
                    onClick={() => setMobileOpen(false)}
                    className="w-full rounded-lg px-3 py-2 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] hover:bg-white/5 transition-colors"
                  >
                    Account
                  </Link>
                  {isSchoolMember && (
                    <Link
                      href="/school"
                      onClick={() => setMobileOpen(false)}
                      className="inline-flex items-center w-full rounded-lg px-3 py-2 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] hover:bg-white/5 transition-colors"
                    >
                      <School className="mr-1.5 h-4 w-4" />
                      School Dashboard
                    </Link>
                  )}
                  <SignOutButton />
                </>
              ) : (
                <>
                  <Link
                    href="/demo/school"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center w-full rounded-lg px-3 py-2 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] hover:bg-white/5 transition-colors"
                  >
                    <Sparkles className="mr-1.5 h-4 w-4" />
                    Try Demo
                  </Link>
                  <Link
                    href="/affiliates"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center w-full rounded-lg px-3 py-2 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] hover:bg-white/5 transition-colors"
                  >
                    <Handshake className="mr-1.5 h-4 w-4" />
                    Affiliates
                  </Link>
                  <Link
                    href="/auth/login"
                    onClick={() => setMobileOpen(false)}
                    className="w-full rounded-lg px-3 py-2 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] hover:bg-white/5 transition-colors"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/auth/register"
                    onClick={() => setMobileOpen(false)}
                    className="mt-1 flex items-center justify-center w-full rounded-full px-3 py-2.5 text-sm font-medium text-[#0F1411] transition-colors"
                    style={{ background: '#E8A382' }}
                  >
                    Start free &rarr;
                  </Link>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function BoardSwitcher({ board, isHydrated }: { board: ExamBoard | null; isHydrated: boolean }) {
  const router = useRouter()
  const { clearBoard } = useBoard()

  // Avoid hydration mismatch — render a placeholder until the persisted store is ready.
  if (!isHydrated) {
    return <div className="h-8 w-20" aria-hidden="true" />
  }

  const config = getBoardConfig(board)

  if (!config) {
    return (
      <Link
        href="/board-select"
        className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-[#B5B8B3] hover:text-[#FBF7F0] hover:border-white/30 transition-colors duration-200"
      >
        <BookOpen className="h-3.5 w-3.5" />
        Select board
      </Link>
    )
  }

  const handleReset = () => {
    clearBoard()
    router.push('/board-select')
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            aria-label={`Current exam board: ${config.fullName}. Click to change.`}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-[#B5B8B3] hover:text-[#FBF7F0] hover:border-white/30 transition-colors duration-200"
          />
        }
      >
        <BookOpen className="h-3.5 w-3.5 text-[#B5B8B3]" aria-hidden="true" />
        <span className="text-[#FBF7F0]">{config.shortName}</span>
        <ChevronDown className="h-3 w-3 text-[#B5B8B3]" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={6} className="w-72">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Your exam board</DropdownMenuLabel>
          <div className="px-1.5 pb-1.5">
            <p className="text-sm font-semibold text-foreground leading-tight">{config.fullName}</p>
            <p className="mt-1 text-xs text-muted-foreground leading-snug">{config.description}</p>
          </div>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem render={<Link href="/board-select?change=1" />}>
          Change board
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleReset} className="text-destructive focus:text-destructive">
          <RefreshCw className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
          Reset exam board
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
    <button
      type="button"
      onClick={handleSignOut}
      className="inline-flex items-center rounded-full px-3 py-1.5 text-sm text-[#B5B8B3] hover:text-red-400 transition-colors duration-200"
    >
      <LogOut className="mr-1.5 h-4 w-4" />
      Sign out
    </button>
  )
}
