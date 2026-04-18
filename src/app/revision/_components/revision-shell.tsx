'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  BookOpen,
  Layers,
  FileText,
  PenTool,
  Target,
  TrendingUp,
  Zap,
  BookText,
  Menu,
  GraduationCap,
  ChevronRight,
  Home,
  CalendarDays,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Progress, ProgressTrack, ProgressIndicator } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-store'
import { isIgcseBoard, isGcseBoard, getBoardType } from '@/lib/board/board-filter'

// ─── Nav items ──────────────────────────────────────────────────────────────

interface NavItem {
  label: string
  href: string
  icon: typeof BookOpen
  colour: string
  /** Boards this item is shown to. Omit to show for all. */
  boards?: ExamBoard[]
  /** Hide for any IGCSE board. */
  gcseOnly?: boolean
  /** Hide for any GCSE board. */
  igcseOnly?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Hub Home', href: '/revision', icon: Home, colour: 'text-primary' },
  { label: 'Study Plan', href: '/revision/study-plan', icon: CalendarDays, colour: 'text-primary' },
  {
    label: 'Poetry',
    href: '/revision/poetry',
    icon: FileText,
    colour: 'text-rose-400',
    // Cambridge 0500/0990 are language only — no poetry
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    label: 'Set Texts',
    href: '/revision/texts',
    icon: BookText,
    colour: 'text-blue-400',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  { label: 'Language Skills', href: '/revision/language', icon: PenTool, colour: 'text-violet-400' },
  { label: 'Flashcards', href: '/revision/flashcards', icon: Layers, colour: 'text-clay-600' },
  { label: 'Exam Technique', href: '/revision/exam-technique', icon: Target, colour: 'text-emerald-400' },
  { label: 'Grade Targets', href: '/revision/grade-targets', icon: TrendingUp, colour: 'text-cyan-400' },
  { label: 'Quick Quizzes', href: '/revision/quiz', icon: Zap, colour: 'text-clay-600' },
  // Board-specific deep-link entries (IGCSE)
  {
    label: 'Edexcel IGCSE Hub',
    href: '/igcse/edexcel',
    icon: GraduationCap,
    colour: 'text-cyan-400',
    boards: ['edexcel-igcse'],
    igcseOnly: true,
  },
  {
    label: 'Cambridge Hub',
    href: '/igcse/cambridge/0500',
    icon: GraduationCap,
    colour: 'text-cyan-400',
    boards: ['cambridge-0500'],
    igcseOnly: true,
  },
  {
    label: 'Cambridge (9-1) Hub',
    href: '/igcse/cambridge/0990',
    icon: GraduationCap,
    colour: 'text-cyan-400',
    boards: ['cambridge-0990'],
    igcseOnly: true,
  },
]

function getNavItemsForBoard(board: ExamBoard | null): NavItem[] {
  return NAV_ITEMS.filter((item) => {
    if (!board) {
      // No board chosen yet — hide board-locked items (igcse-only / gcse-only)
      return !item.igcseOnly && !item.gcseOnly && !item.boards
        ? true
        : !item.boards // generic items pass; board-pinned items hidden until board chosen
    }
    if (item.boards && !item.boards.includes(board)) return false
    if (item.gcseOnly && !isGcseBoard(board)) return false
    if (item.igcseOnly && !isIgcseBoard(board)) return false
    return true
  })
}

// ─── Progress from localStorage ─────────────────────────────────────────────

const PROGRESS_KEY = 'english-hub-revision-progress'

function useRevisionProgress(items: NavItem[]) {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)

  // Track section visits — once visited, contributes to overall progress
  const sectionKeys = items.filter((i) => i.href !== '/revision').map((i) => i.href)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(PROGRESS_KEY)
      const data: { visited?: string[]; percentage?: number } = stored ? JSON.parse(stored) : {}
      const visited = new Set(data.visited ?? [])

      const matchedSection = sectionKeys.find(
        (href) => pathname === href || pathname.startsWith(href + '/'),
      )
      if (matchedSection) visited.add(matchedSection)

      // Only count visits to sections currently visible to this board
      const visibleVisited = Array.from(visited).filter((v) => sectionKeys.includes(v))
      const denominator = sectionKeys.length || 1
      const percentage = Math.round((visibleVisited.length / denominator) * 100)
      setProgress(Math.min(100, Math.max(0, percentage)))

      localStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify({ visited: Array.from(visited), percentage }),
      )
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, sectionKeys.join('|')])

  return progress
}

// ─── Sidebar content (shared between desktop & mobile) ──────────────────────

function SidebarNav({
  onNavigate,
  navItems,
  boardName,
}: {
  onNavigate?: () => void
  navItems: NavItem[]
  boardName: string | null
}) {
  const pathname = usePathname()
  const progress = useRevisionProgress(navItems)

  return (
    <nav className="flex flex-col gap-1">
      {/* Board badge */}
      {boardName && (
        <div className="mb-3 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/[0.05] px-3 py-2">
          <span className="text-caption font-medium text-muted-foreground">Exam board</span>
          <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
            {boardName}
          </Badge>
        </div>
      )}

      {/* Progress indicator */}
      <div className="mb-4 rounded-xl border border-border/40 bg-background/50 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-caption font-medium text-muted-foreground">
            Overall Progress
          </span>
          <span className="text-caption font-semibold text-foreground">
            {progress}%
          </span>
        </div>
        <Progress value={progress}>
          <ProgressTrack className="h-1.5">
            <ProgressIndicator className="rounded-full bg-primary" />
          </ProgressTrack>
        </Progress>
      </div>

      {/* Nav links */}
      {navItems.map((item) => {
        const isActive = pathname === item.href
        const isHub = item.href === '/revision'

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150',
              isActive
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-accent hover:text-foreground',
              isHub && 'mb-1'
            )}
          >
            <item.icon
              className={cn(
                'size-4 shrink-0',
                isActive ? 'text-primary' : item.colour
              )}
            />
            <span className="flex-1">{item.label}</span>
            {isActive && (
              <ChevronRight className="size-3.5 text-primary" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}

// ─── Shell ───────────────────────────────────────────────────────────────────

function getIgcseHubPath(board: ExamBoard): string {
  switch (board) {
    case 'edexcel-igcse':
      return '/igcse/edexcel'
    case 'cambridge-0500':
      return '/igcse/cambridge/0500'
    case 'cambridge-0990':
      return '/igcse/cambridge/0990'
    default:
      return '/igcse'
  }
}

export function RevisionShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { board, isHydrated } = useBoard()
  const router = useRouter()
  const config = getBoardConfig(board)
  const boardName = config?.shortName ?? null
  const boardType = getBoardType(board)

  // Redirect non-GCSE students away from the revision hub
  useEffect(() => {
    if (!isHydrated || !board) return
    if (boardType === 'ks3') {
      router.replace('/courses')
    } else if (boardType === 'igcse') {
      router.replace(getIgcseHubPath(board))
    }
  }, [isHydrated, board, boardType, router])

  const navItems = getNavItemsForBoard(board)

  // Don't render the revision shell for non-GCSE students (they're being redirected)
  if (isHydrated && boardType && boardType !== 'gcse') {
    return null
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex gap-8">
        {/* ── Desktop sidebar ──────────────────────────────────────── */}
        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-24">
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="size-5 text-primary" />
              <span className="text-heading-md font-heading text-foreground">Revision</span>
            </div>
            <SidebarNav navItems={navItems} boardName={boardName} />
          </div>
        </aside>

        {/* ── Main content ─────────────────────────────────────────── */}
        <main className="min-w-0 flex-1">
          {/* Mobile header with menu button */}
          <div className="mb-4 flex items-center gap-3 lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                    <span className="sr-only">Open revision menu</span>
                  </Button>
                }
              />
              <SheetContent side="left" className="w-72 p-0">
                <SheetHeader className="border-b border-border/60 px-4 py-3">
                  <SheetTitle>
                    <span className="flex items-center gap-2">
                      <GraduationCap className="size-4 text-primary" />
                      Revision
                      {boardName && (
                        <Badge variant="secondary" className="ml-1 text-[0.65rem] uppercase tracking-wider">
                          {boardName}
                        </Badge>
                      )}
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="p-4">
                  <SidebarNav
                    onNavigate={() => setMobileOpen(false)}
                    navItems={navItems}
                    boardName={boardName}
                  />
                </div>
              </SheetContent>
            </Sheet>
            <h1 className="text-heading-md font-heading text-foreground">
              Revision
              {boardName && (
                <Badge variant="secondary" className="ml-2 text-[0.65rem] uppercase tracking-wider">
                  {boardName}
                </Badge>
              )}
            </h1>
          </div>

          {children}
        </main>
      </div>
    </div>
  )
}
