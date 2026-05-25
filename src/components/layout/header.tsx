'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useAuthStore, useAuthUserLoading, useAuthProfile } from '@/store/auth-store'
import { Menu, LogOut, School, Sparkles, BookOpen, ChevronDown, RefreshCw } from 'lucide-react'
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
import { getBoardType } from '@/lib/board/board-filter'
import type { ExamBoard } from '@/lib/board/board-store'
import { LanguageToggle } from '@/components/layout/language-toggle'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { useT } from '@/lib/i18n/use-t'

type NavLink = {
  href: string
  /** Dictionary key — resolved by useT() at render time. */
  labelKey: string
}

function getNavForBoardType(
  type: 'ks3' | 'gcse' | 'igcse' | 'ial' | 'a-level' | null,
  board: ExamBoard | null,
): NavLink[] {
  if (type) {
    void board
    // KS3 and EAL are full hubs in their own right, reached from the
    // homepage and in-context links — they are deliberately NOT
    // top-level nav headings.
    return [
      { href: '/revision', labelKey: 'header.nav.your_hub' },
      { href: '/ielts', labelKey: 'ielts.nav' },
      { href: '/schools', labelKey: 'header.nav.schools' },
      { href: '/demo', labelKey: 'header.nav.demo' },
      { href: '/pricing', labelKey: 'header.nav.pricing' },
    ]
  }

  // 2026-05-20: trimmed from 7 to 5 items. The previous list (Schools,
  // Teachers, Students, EAL, Demo, School Pilot, Pricing) overflowed
  // the centre grid column at common laptop widths (1280-1440px) once
  // the right-hand auth section + theme/lang toggles + brand +
  // BoardSwitcher were all rendered after hydration — caused the
  // "flashes ok then reverts to overlapping" header bug. EAL is still
  // discoverable as a tile on every board card + on /schools + in the
  // footer "Try it" section; School Pilot is the primary CTA on
  // /schools and reachable from the footer.
  return [
    { href: '/schools', labelKey: 'header.nav.schools' },
    { href: '/teachers', labelKey: 'header.nav.teachers' },
    { href: '/students', labelKey: 'header.nav.students' },
    { href: '/ielts', labelKey: 'ielts.nav' },
    { href: '/pricing', labelKey: 'header.nav.pricing' },
  ]
}

// Routes where the board context actually drives the rendered content
// (revision hub, board-filtered practice etc.). The BoardSwitcher only
// renders on these — on marketing/legal/demo/general routes it just
// adds clutter and contributes to the header-overflow bug.
const BOARD_CONTEXT_ROUTES = [
  '/revision',
  '/assessment',
  '/practice',
  '/games',
  '/mock-exams',
  '/courses',
  '/analysis',
  '/learn',
  '/marking',
] as const

function isBoardContextRoute(pathname: string): boolean {
  return BOARD_CONTEXT_ROUTES.some((p) => pathname === p || pathname.startsWith(p + '/'))
}

export function Header() {
  const { user, isLoading } = useAuthUserLoading()
  const profile = useAuthProfile()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isSchoolMember, setIsSchoolMember] = useState(false)
  const { board, isHydrated: isBoardHydrated } = useBoard()
  const t = useT()

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
          {/* Board switcher — desktop only, AND only on routes whose
              content is filtered by the board context. On marketing /
              legal / demo / general pages the switcher just adds
              clutter (and contributes to the header-overflow bug). */}
          {isBoardContextRoute(pathname) ? (
            <div className="hidden lg:flex">
              <BoardSwitcher board={board} isHydrated={isBoardHydrated} />
            </div>
          ) : null}
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
                {t(link.labelKey)}
              </Link>
            )
          })}
        </nav>

        {/* Desktop auth / CTA */}
        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          {/* Theme + language toggles — always visible for ANY auth state
              so dark/light AND English/Arabic are reachable everywhere on
              desktop. The language toggle was previously rendered only in
              the signed-out branch, leaving logged-in desktop users with
              no way to switch to / stay in Arabic ("losing Arabic"). */}
          <ThemeToggle className="border-white/15 bg-white/5 text-[#B5B8B3]" />
          <LanguageToggle className="border-white/15 bg-white/5 text-[#B5B8B3]" />
          {isLoading ? (
            <Skeleton className="h-8 w-20 rounded-full bg-white/10" />
          ) : user ? (
            <>
              {isPremium ? (
                <>
                  <Link
                    href="/dashboard"
                    className="rounded-full px-4 py-1.5 text-sm font-medium text-[#0F1411] transition-colors duration-200"
                    style={{ background: '#E8A382' }}
                  >
                    {t('header.nav.dashboard')}
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/dashboard"
                    className="rounded-full px-3 py-1.5 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] transition-colors duration-200"
                  >
                    {t('header.nav.dashboard')}
                  </Link>
                  <Link
                    href="/pricing"
                    className="rounded-full px-4 py-1.5 text-sm font-medium text-[#0F1411] transition-colors duration-200"
                    style={{ background: '#E8A382' }}
                  >
                    {t('header.cta.upgrade')}
                  </Link>
                </>
              )}
              <Link
                href="/account"
                className="rounded-full px-3 py-1.5 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] transition-colors duration-200"
              >
                {t('header.nav.account')}
              </Link>
              {isSchoolMember && (
                <Link
                  href="/school"
                  className="inline-flex items-center rounded-full px-3 py-1.5 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] transition-colors duration-200"
                >
                  <School className="mr-1.5 h-4 w-4" />
                  {t('header.nav.school_dashboard')}
                </Link>
              )}
              <SignOutButton />
            </>
          ) : (
            // 2026-05-20: trimmed inline "Try demo" + "Affiliates" links
            // from the desktop signed-out auth section — Demo is now in
            // the main nav and Affiliates lives in the footer. Removing
            // them stops the right-hand cluster from ballooning after
            // hydration and squeezing the centre nav.
            <>
              <Link
                href="/auth/login"
                className="rounded-full px-3 py-1.5 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] transition-colors duration-200"
              >
                {t('header.cta.login')}
              </Link>
              <Link
                href="/auth/register"
                className="rounded-full px-5 py-2 text-sm font-medium text-[#0F1411] transition-colors duration-200 hover:brightness-110"
                style={{ background: '#E8A382' }}
              >
                {t('header.cta.start_free')} &rarr;
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
                aria-label={t('header.action.open_menu')}
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
                        <span className="text-xs font-medium text-[#B5B8B3]">
                          {t('header.board.studying')}
                        </span>
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
                        {t('header.board.change')}
                      </Link>
                      <Link
                        href="/board-select?change=1"
                        onClick={() => setMobileOpen(false)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-red-400 transition-colors hover:bg-red-400/10"
                      >
                        <RefreshCw className="h-3 w-3" aria-hidden="true" />
                        {t('header.board.reset')}
                      </Link>
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
                    {t('header.board.select_button')}
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
                    {t(link.labelKey)}
                  </Link>
                )
              })}

              <Separator className="my-3 bg-white/10" />

              {isLoading ? (
                <Skeleton className="h-9 w-full rounded-full bg-white/10" />
              ) : user ? (
                <>
                  {isPremium ? (
                    <>
                      <Link
                        href="/dashboard"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-center w-full rounded-full px-3 py-2 text-sm font-medium text-[#0F1411] transition-colors"
                        style={{ background: '#E8A382' }}
                      >
                        {t('header.nav.dashboard')}
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/dashboard"
                        onClick={() => setMobileOpen(false)}
                        className="w-full rounded-lg px-3 py-2 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] hover:bg-white/5 transition-colors"
                      >
                        {t('header.nav.dashboard')}
                      </Link>
                      <Link
                        href="/pricing"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-center w-full rounded-full px-3 py-2 text-sm font-medium text-[#0F1411] transition-colors"
                        style={{ background: '#E8A382' }}
                      >
                        {t('header.cta.upgrade')}
                      </Link>
                    </>
                  )}
                  <Link
                    href="/account"
                    onClick={() => setMobileOpen(false)}
                    className="w-full rounded-lg px-3 py-2 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] hover:bg-white/5 transition-colors"
                  >
                    {t('header.nav.account')}
                  </Link>
                  {isSchoolMember && (
                    <Link
                      href="/school"
                      onClick={() => setMobileOpen(false)}
                      className="inline-flex items-center w-full rounded-lg px-3 py-2 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] hover:bg-white/5 transition-colors"
                    >
                      <School className="mr-1.5 h-4 w-4" />
                      {t('header.nav.school_dashboard')}
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
                    {t('header.nav.try_demo')}
                  </Link>
                  <Link
                    href="/auth/login"
                    onClick={() => setMobileOpen(false)}
                    className="w-full rounded-lg px-3 py-2 text-sm text-[#B5B8B3] hover:text-[#FBF7F0] hover:bg-white/5 transition-colors"
                  >
                    {t('header.cta.login')}
                  </Link>
                  <Link
                    href="/auth/register"
                    onClick={() => setMobileOpen(false)}
                    className="mt-1 flex items-center justify-center w-full rounded-full px-3 py-2.5 text-sm font-medium text-[#0F1411] transition-colors"
                    style={{ background: '#E8A382' }}
                  >
                    {t('header.cta.start_free')} &rarr;
                  </Link>
                </>
              )}

              {/* Language toggle inside the mobile sheet — previously only
                  the desktop nav rendered it, so mobile users had no way
                  to switch between EN and AR once they were on a small
                  screen. Render it last and centered for both EN + AR. */}
              <Separator className="my-3 bg-white/10" />
              <div className="flex flex-wrap justify-center gap-2 pb-1">
                <ThemeToggle className="border-white/15 bg-white/5 text-[#B5B8B3]" />
                <LanguageToggle className="border-white/15 bg-white/5 text-[#B5B8B3]" />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function BoardSwitcher({ board, isHydrated }: { board: ExamBoard | null; isHydrated: boolean }) {
  const t = useT()
  const pathname = usePathname()
  const router = useRouter()
  const { clearBoard } = useBoard()

  // Avoid hydration mismatch — render a placeholder until the persisted
  // store is ready. Width tuned to the typical loaded width so the
  // hydration swap does not visibly shift the surrounding layout.
  if (!isHydrated) {
    return <div className="h-7 w-[120px]" aria-hidden="true" />
  }

  // 2026-05-20: when the user is ON /board-select, the BoardSwitcher
  // would render its dropdown alongside the picker grid; the dropdown
  // popper portal then visually overlaps the picker, leaving phantom
  // UI in front of and behind page content the user wants to click.
  // The switcher exists to NAVIGATE to the picker, so hiding it on
  // the picker page is both correct and removes the overlap entirely.
  if (pathname === '/board-select' || pathname.startsWith('/board-select/')) {
    return null
  }

  const config = getBoardConfig(board)

  if (!config) {
    return (
      <Link
        href="/board-select"
        className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-[#B5B8B3] hover:text-[#FBF7F0] hover:border-white/30 transition-colors duration-200"
      >
        <BookOpen className="h-3.5 w-3.5" />
        {t('header.board.select_short')}
      </Link>
    )
  }

  // 2026-05-20: Change vs Reset previously both linked to the same
  // `/board-select?change=1` URL, so Reset never actually cleared
  // anything. Reset now calls clearBoard() (which clears BOTH the
  // cookie AND the persisted localStorage value — required because
  // the board store's onRehydrateStorage repairs the cookie from
  // localStorage if only the cookie were cleared) before navigating.
  // Both items use onClick handlers instead of render={<Link>} so the
  // menu primitive closes the popper synchronously before navigation,
  // avoiding the orphaned-portal overlap the user reported.
  const handleChange = () => {
    router.push('/board-select')
  }
  const handleReset = () => {
    clearBoard()
    router.push('/board-select')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            aria-label={`Current exam board: ${config.fullName}. Click to change.`}
            className="inline-flex max-w-[160px] items-center gap-1.5 rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-[#B5B8B3] hover:text-[#FBF7F0] hover:border-white/30 transition-colors duration-200"
          />
        }
      >
        <BookOpen className="h-3.5 w-3.5 shrink-0 text-[#B5B8B3]" aria-hidden="true" />
        <span className="truncate text-[#FBF7F0]">{config.shortName}</span>
        <ChevronDown className="h-3 w-3 shrink-0 text-[#B5B8B3]" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={6} className="w-72">
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t('header.board.studying')}</DropdownMenuLabel>
          <div className="px-1.5 pb-1.5">
            <p className="text-sm font-semibold text-foreground leading-tight">{config.fullName}</p>
            <p className="mt-1 text-xs text-muted-foreground leading-snug">{config.description}</p>
          </div>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleChange}>{t('header.board.change')}</DropdownMenuItem>
        <DropdownMenuItem onClick={handleReset} className="text-destructive focus:text-destructive">
          <RefreshCw className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
          {t('header.board.reset')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function SignOutButton() {
  const clear = useAuthStore((s) => s.clear)
  const t = useT()

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
      {t('header.action.sign_out')}
    </button>
  )
}
