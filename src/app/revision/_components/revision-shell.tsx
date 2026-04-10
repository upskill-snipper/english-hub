'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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

// ─── Nav items ──────────────────────────────────────────────────────────────

interface NavItem {
  label: string
  href: string
  icon: typeof BookOpen
  colour: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Hub Home', href: '/revision', icon: Home, colour: 'text-primary' },
  { label: 'Study Plan', href: '/revision/study-plan', icon: CalendarDays, colour: 'text-primary' },
  { label: 'Poetry', href: '/revision/poetry', icon: FileText, colour: 'text-rose-400' },
  { label: 'Set Texts', href: '/revision/texts', icon: BookText, colour: 'text-blue-400' },
  { label: 'Language Skills', href: '/revision/language', icon: PenTool, colour: 'text-violet-400' },
  { label: 'Flashcards', href: '/revision/flashcards', icon: Layers, colour: 'text-amber-400' },
  { label: 'Exam Technique', href: '/revision/exam-technique', icon: Target, colour: 'text-emerald-400' },
  { label: 'Grade Targets', href: '/revision/grade-targets', icon: TrendingUp, colour: 'text-cyan-400' },
  { label: 'Quick Quizzes', href: '/revision/quiz', icon: Zap, colour: 'text-orange-400' },
]

// ─── Progress from localStorage ─────────────────────────────────────────────

const PROGRESS_KEY = 'english-hub-revision-progress'
// Track section visits — once visited, contributes to overall progress
const SECTION_KEYS = NAV_ITEMS.filter((i) => i.href !== '/revision').map((i) => i.href)

function useRevisionProgress() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(PROGRESS_KEY)
      const data: { visited?: string[]; percentage?: number } = stored ? JSON.parse(stored) : {}
      const visited = new Set(data.visited ?? [])

      // Mark current section as visited if it matches one of the tracked sections
      const matchedSection = SECTION_KEYS.find(
        (href) => pathname === href || pathname.startsWith(href + '/'),
      )
      if (matchedSection) visited.add(matchedSection)

      const percentage = Math.round((visited.size / SECTION_KEYS.length) * 100)
      setProgress(Math.min(100, Math.max(0, percentage)))

      localStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify({ visited: Array.from(visited), percentage }),
      )
    } catch {
      // ignore
    }
  }, [pathname])

  return progress
}

// ─── Sidebar content (shared between desktop & mobile) ──────────────────────

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  const progress = useRevisionProgress()

  return (
    <nav className="flex flex-col gap-1">
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
      {NAV_ITEMS.map((item) => {
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

export function RevisionShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

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
            <SidebarNav />
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
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="p-4">
                  <SidebarNav onNavigate={() => setMobileOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
            <h1 className="text-heading-md font-heading text-foreground">Revision</h1>
          </div>

          {children}
        </main>
      </div>
    </div>
  )
}
