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
  BarChart3,
  Wrench,
  Files,
  Gamepad2,
  ClipboardList,
  Timer,
  Dumbbell,
  Library,
  CheckSquare,
  GitCompare,
  Quote,
  Edit3,
  StickyNote,
  LayoutDashboard,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Progress, ProgressTrack, ProgressIndicator } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-store'
import { isIgcseBoard, isGcseBoard } from '@/lib/board/board-filter'
import { gradeDisplayLabel } from '@/lib/board/grade-boundaries'
import { useT } from '@/lib/i18n/use-t'

// ─── Nav items ──────────────────────────────────────────────────────────────

type NavGroup = 'top' | 'content' | 'practice' | 'skills' | 'resources' | 'board'

interface NavItem {
  /** i18n key for the nav label. Resolved at render time via useT(). */
  labelKey: string
  href: string
  icon: typeof BookOpen
  colour: string
  /** Boards this item is shown to. Omit to show for all. */
  boards?: ExamBoard[]
  /** Hide for any IGCSE board. */
  gcseOnly?: boolean
  /** Hide for any GCSE board. */
  igcseOnly?: boolean
  /** Sidebar grouping — controls which collapsible bucket the item lands in.
   *  Items without an explicit group are treated as `top` (always visible). */
  group?: NavGroup
}

// Boards that see literature (poetry, set texts, comparison essays). Cambridge
// 0500/0990 are language-only so they get filtered out for those entries.
const LIT_BOARDS: ExamBoard[] = ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse']

// Dense one-line-per-entry table. The `// prettier-ignore` block keeps prettier
// from wrapping each entry across 6+ lines — readable for editors as a flat
// register of routes, and keeps the file roughly the size of pre-grouping.
// `labelKey` for the Full Dashboard entry is a sentinel — navLabel() special-
// cases it so we can ship without expanding the i18n catalogue.
// prettier-ignore
const NAV_ITEMS: NavItem[] = [
  // Top tier — always visible above the collapsible groups.
  { labelKey: 'revision.shell.nav.your_hub',           href: '/revision',                                            icon: Home,           colour: 'text-primary',     group: 'top' },
  { labelKey: 'revision.shell.nav.full_dashboard',     href: '/demo/student',                                        icon: LayoutDashboard, colour: 'text-primary',    group: 'top' },
  { labelKey: 'revision.shell.nav.analytics',          href: '/revision/analytics',                                  icon: BarChart3,      colour: 'text-primary',     group: 'top' },
  { labelKey: 'revision.shell.nav.study_plan',         href: '/revision/study-plan',                                 icon: CalendarDays,   colour: 'text-primary',     group: 'top' },
  // Content & texts.
  { labelKey: 'revision.shell.nav.poetry',             href: '/revision/poetry',                                     icon: FileText,       colour: 'text-rose-400',    boards: LIT_BOARDS,                  group: 'content' },
  { labelKey: 'revision.shell.nav.set_texts',          href: '/revision/texts',                                      icon: BookText,       colour: 'text-blue-400',    boards: LIT_BOARDS,                  group: 'content' },
  { labelKey: 'revision.shell.nav.language_skills',    href: '/revision/language',                                   icon: PenTool,        colour: 'text-violet-400',                                       group: 'content' },
  { labelKey: 'revision.shell.nav.comparison_essays',  href: '/revision/poetry/love-and-relationships/comparison-guide', icon: GitCompare, colour: 'text-violet-400',  boards: LIT_BOARDS,                  group: 'content' },
  // Practice & assess.
  { labelKey: 'revision.shell.nav.mock_exams',         href: '/mock-exams',                                          icon: Timer,          colour: 'text-emerald-400',                                       group: 'practice' },
  { labelKey: 'revision.shell.nav.practice',           href: '/practice',                                            icon: Dumbbell,       colour: 'text-violet-400',                                       group: 'practice' },
  { labelKey: 'revision.shell.nav.quick_quizzes',      href: '/revision/quiz',                                       icon: Zap,            colour: 'text-clay-600',                                         group: 'practice' },
  { labelKey: 'revision.shell.nav.reading_assessment', href: '/assessment/reading',                                  icon: ClipboardList,  colour: 'text-blue-400',                                         group: 'practice' },
  { labelKey: 'revision.shell.nav.games',              href: '/games',                                               icon: Gamepad2,       colour: 'text-clay-600',                                         group: 'practice' },
  // Skills & technique.
  { labelKey: 'revision.shell.nav.exam_technique',     href: '/revision/exam-technique',                             icon: Target,         colour: 'text-emerald-400',                                       group: 'skills' },
  { labelKey: 'revision.shell.nav.grade_targets',      href: '/revision/grade-targets',                              icon: TrendingUp,     colour: 'text-cyan-400',                                         group: 'skills' },
  { labelKey: 'revision.shell.nav.writing_skills',     href: '/resources/writing-skills',                            icon: Edit3,          colour: 'text-cyan-400',                                         group: 'skills' },
  { labelKey: 'revision.shell.nav.vocabulary',         href: '/resources/vocabulary',                                icon: Quote,          colour: 'text-rose-400',                                         group: 'skills' },
  { labelKey: 'revision.shell.nav.flashcards',         href: '/revision/flashcards',                                 icon: Layers,         colour: 'text-clay-600',                                         group: 'skills' },
  // Resources — curated libraries + dashboard tooling.
  { labelKey: 'revision.shell.nav.resources_hub',      href: '/resources',                                           icon: Library,        colour: 'text-amber-400',                                        group: 'resources' },
  { labelKey: 'revision.shell.nav.revision_notes',     href: '/resources/revision-notes',                            icon: StickyNote,     colour: 'text-blue-400',                                         group: 'resources' },
  { labelKey: 'revision.shell.nav.model_answers',      href: '/resources/model-answers',                             icon: CheckSquare,    colour: 'text-emerald-400',                                       group: 'resources' },
  { labelKey: 'revision.shell.nav.my_papers',          href: '/dashboard/papers',                                    icon: Files,          colour: 'text-primary',                                          group: 'resources' },
  { labelKey: 'revision.shell.nav.study_tools',        href: '/revision#toolkit',                                    icon: Wrench,         colour: 'text-primary',                                          group: 'resources' },
  { labelKey: 'revision.shell.nav.toolkit',            href: '/toolkit',                                             icon: Wrench,         colour: 'text-primary',                                          group: 'resources' },
  // Your board — board-specific deep-links.
  { labelKey: 'revision.shell.nav.ial_guide',          href: '/revision/ial',                                        icon: GraduationCap,  colour: 'text-primary',     boards: ['ial-edexcel'],             group: 'board' },
  { labelKey: 'revision.shell.nav.edexcel_igcse_hub',  href: '/igcse/edexcel',                                       icon: GraduationCap,  colour: 'text-cyan-400',    boards: ['edexcel-igcse'],   igcseOnly: true, group: 'board' },
  { labelKey: 'revision.shell.nav.cambridge_hub',      href: '/igcse/cambridge/0500',                                icon: GraduationCap,  colour: 'text-cyan-400',    boards: ['cambridge-0500'],  igcseOnly: true, group: 'board' },
  { labelKey: 'revision.shell.nav.cambridge_91_hub',   href: '/igcse/cambridge/0990',                                icon: GraduationCap,  colour: 'text-cyan-400',    boards: ['cambridge-0990'],  igcseOnly: true, group: 'board' },
]

function getNavItemsForBoard(board: ExamBoard | null): NavItem[] {
  return NAV_ITEMS.filter((item) => {
    if (!board) {
      // No board chosen yet — hide board-locked items (igcse-only / gcse-only)
      return !item.igcseOnly && !item.gcseOnly && !item.boards ? true : !item.boards // generic items pass; board-pinned items hidden until board chosen
    }
    if (item.boards && !item.boards.includes(board)) return false
    if (item.gcseOnly && !isGcseBoard(board)) return false
    if (item.igcseOnly && !isIgcseBoard(board)) return false
    return true
  })
}

// Ordered list of collapsible group sections shown beneath the top-tier nav.
// English-literal labels — intentionally bypass useT() to avoid expanding the
// dictionary surface for a pure UI re-organisation; can be promoted to keys
// later if i18n needs them.
const GROUPS: { key: Exclude<NavGroup, 'top'>; label: string }[] = [
  { key: 'content', label: 'Content & texts' },
  { key: 'practice', label: 'Practice & assess' },
  { key: 'skills', label: 'Skills & technique' },
  { key: 'resources', label: 'Resources' },
  { key: 'board', label: 'Your board' },
]

// ─── Progress from localStorage ─────────────────────────────────────────────

const PROGRESS_KEY = 'english-hub-revision-progress'
const STUDY_PLAN_KEY = 'english-hub-study-plan'
const TARGET_GRADE_KEY = 'english-hub-target-grade'

type TargetGrade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

function clampGrade(n: number): TargetGrade {
  if (n < 1) return 1
  if (n > 9) return 9
  return Math.round(n) as TargetGrade
}

// Derive a target grade from the Study Plan save first (user's most recent
// explicit choice), then the direct target-grade override, then a sensible
// default of 7 (high achiever but reachable for most students).
function readTargetGrade(): TargetGrade {
  try {
    const direct = localStorage.getItem(TARGET_GRADE_KEY)
    if (direct) {
      const parsed = parseInt(direct, 10)
      if (!Number.isNaN(parsed)) return clampGrade(parsed)
    }
    const plan = localStorage.getItem(STUDY_PLAN_KEY)
    if (plan) {
      const parsed = JSON.parse(plan) as { answers?: { grade?: string } }
      const g = parsed?.answers?.grade
      // Study Plan stores ranges: '4-5' | '6-7' | '8-9'. Take the UPPER value.
      if (g === '4-5') return 5
      if (g === '6-7') return 7
      if (g === '8-9') return 9
    }
  } catch {
    // ignore
  }
  return 7
}

interface ProgressSnapshot {
  progress: number
  target: TargetGrade
  hasData: boolean
}

// Approximate 9-1 boundary % (board-agnostic averages) — used to convert the
// raw performance score (0-100 avg of quiz correct rate + AI essay score)
// into a "% of the way toward your target grade" fill. If you hit the
// target's % threshold, the bar is 100% full; below lowest-visible grade
// it's 0%. Matches boundaries table in src/lib/board/grade-boundaries.ts
// averaged across boards.
const GRADE_PERCENT_THRESHOLDS: Record<TargetGrade, number> = {
  1: 10,
  2: 20,
  3: 30,
  4: 40,
  5: 50,
  6: 60,
  7: 70,
  8: 80,
  9: 88,
}

function useRevisionProgress(items: NavItem[]): ProgressSnapshot {
  const pathname = usePathname()
  const [coverage, setCoverage] = useState(0)
  const [perfScore, setPerfScore] = useState<number | null>(null)
  const [target, setTarget] = useState<TargetGrade>(7)

  // Track section visits — once visited, contributes to overall progress
  const sectionKeys = items.filter((i) => i.href !== '/revision').map((i) => i.href)

  // Coverage % (revision sections visited) — immediate feedback loop
  useEffect(() => {
    try {
      const stored = localStorage.getItem(PROGRESS_KEY)
      const data: { visited?: string[]; percentage?: number } = stored ? JSON.parse(stored) : {}
      const visited = new Set(data.visited ?? [])

      const matchedSection = sectionKeys.find(
        (href) => pathname === href || pathname.startsWith(href + '/'),
      )
      if (matchedSection) visited.add(matchedSection)

      const visibleVisited = Array.from(visited).filter((v) => sectionKeys.includes(v))
      const denominator = sectionKeys.length || 1
      const percentage = Math.round((visibleVisited.length / denominator) * 100)
      setCoverage(Math.min(100, Math.max(0, percentage)))

      localStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify({ visited: Array.from(visited), percentage }),
      )
    } catch {
      // ignore
    }
    setTarget(readTargetGrade())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, sectionKeys.join('|')])

  // Real performance score — quiz correct rate + AI essay overall score
  // (server-aggregated via /api/profile/grade-progress). Fire once per
  // shell mount; anon users 401 silently and fall back to coverage.
  useEffect(() => {
    let cancelled = false
    fetch('/api/profile/grade-progress', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((j: { avgScore: number | null } | null) => {
        if (cancelled) return
        if (j && typeof j.avgScore === 'number') setPerfScore(j.avgScore)
      })
      .catch(() => {
        // silent — coverage-only fallback is fine
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Blend: prefer the real perf score once we have it (map it to
  // % toward target grade); fall back to the coverage proxy otherwise.
  const targetThreshold = GRADE_PERCENT_THRESHOLDS[target]
  const progress =
    perfScore !== null && targetThreshold > 0
      ? Math.min(100, Math.max(0, (perfScore / targetThreshold) * 100))
      : coverage

  return { progress: Math.round(progress), target, hasData: perfScore !== null }
}

// ─── Sidebar content (shared between desktop & mobile) ──────────────────────

// Resolve a nav-item label, special-casing the Full Dashboard entry which
// has no dictionary key (avoids growing the i18n catalogue for one item).
function navLabel(item: NavItem, t: ReturnType<typeof useT>): string {
  if (item.labelKey === 'revision.shell.nav.full_dashboard') return 'Full Dashboard'
  return t(item.labelKey)
}

// Single nav-link row — shared between the top-tier list and the grouped
// `<details>` lists so active styling stays in lockstep.
function NavLink({
  item,
  isActive,
  onNavigate,
  t,
}: {
  item: NavItem
  isActive: boolean
  onNavigate?: () => void
  t: ReturnType<typeof useT>
}) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={cn(
        'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150',
        isActive
          ? 'bg-primary/10 text-primary'
          : 'text-muted-foreground hover:bg-accent hover:text-foreground',
      )}
    >
      <item.icon className={cn('size-4 shrink-0', isActive ? 'text-primary' : item.colour)} />
      <span className="flex-1">{navLabel(item, t)}</span>
      {isActive && <ChevronRight className="size-3.5 text-primary" />}
    </Link>
  )
}

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
  const { progress, target, hasData } = useRevisionProgress(navItems)
  const { board } = useBoard()
  const t = useT()

  // Target + two grades below — e.g. target=7 → show 5, 6, 7 with fill
  // reflecting how far through the 5→7 journey the student has travelled.
  // If target ≤ 2 we show 1, 2, target so labels still make sense.
  const gradeRight = target
  const gradeMid = Math.max(1, target - 1) as TargetGrade
  const gradeLeft = Math.max(1, target - 2) as TargetGrade

  // Board-aware grade labels so IAL + A-Level render "A*/A/B" not "Grade 7/8/9"
  // and Cambridge 0500 falls back to its A*-G letters. 9-1 boards keep
  // "Grade N" as before.
  const labelLeft = gradeDisplayLabel(
    String(gradeLeft) as '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9',
    board,
  )
  const labelMid = gradeDisplayLabel(
    String(gradeMid) as '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9',
    board,
  )
  const labelRight = gradeDisplayLabel(
    String(gradeRight) as '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9',
    board,
  )

  // Partition nav items by group — items without an explicit group fall back
  // to the top tier (defensive default keeps newly-added entries visible).
  const topItems = navItems.filter((i) => !i.group || i.group === 'top')
  const groupedItems: Record<Exclude<NavGroup, 'top'>, NavItem[]> = {
    content: [],
    practice: [],
    skills: [],
    resources: [],
    board: [],
  }
  for (const item of navItems) {
    if (item.group && item.group !== 'top') groupedItems[item.group].push(item)
  }

  // A group is "active" (and therefore expanded by default) when the
  // current route matches any of its items. Native <details open=...>
  // lets the user collapse it again without React state.
  const isItemActive = (href: string) => pathname === href || pathname.startsWith(href + '/')
  const groupIsActive = (key: Exclude<NavGroup, 'top'>) =>
    groupedItems[key].some((i) => isItemActive(i.href))

  return (
    <nav className="flex flex-col gap-1">
      {/* Board badge */}
      {boardName && (
        <div className="mb-3 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/[0.05] px-3 py-2">
          <span className="text-caption font-medium text-muted-foreground">
            {t('revision.shell.exam_board_label')}
          </span>
          <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
            {boardName}
          </Badge>
        </div>
      )}

      {/* Grade progress bar — target grade + two grades below. The fill is
          the student's weighted performance score (quiz_responses correct
          rate + AIFeedback overallScore, server-aggregated at
          /api/profile/grade-progress) mapped onto the target-grade
          threshold. Until there's real data we fall back to a coverage
          proxy (sections visited / total visible sections).  */}
      <div className="mb-4 rounded-xl border border-border/40 bg-background/50 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-caption font-medium text-muted-foreground">
            {t('revision.shell.target_grade_label')}
          </span>
          <span className="text-caption font-semibold text-primary">{labelRight}</span>
        </div>
        <Progress value={progress}>
          <ProgressTrack className="h-2 bg-border/40">
            <ProgressIndicator className="rounded-full bg-gradient-to-r from-cyan-400 via-primary to-emerald-400" />
          </ProgressTrack>
        </Progress>
        <div className="mt-1.5 flex justify-between text-[10px] font-medium text-muted-foreground">
          <span>{labelLeft}</span>
          <span>{labelMid}</span>
          <span className="text-primary">{labelRight}</span>
        </div>
        {!hasData && (
          <p className="mt-2 text-[10px] text-muted-foreground/70 italic">
            {t('revision.shell.progress_hint')}
          </p>
        )}
      </div>

      {/* Top-tier nav — always-visible essentials (Your Hub, Full Dashboard,
          Analytics, Study Plan). Rendered flat above the collapsible groups
          so they read as the primary surface of the sidebar. */}
      {topItems.map((item) => (
        <NavLink
          key={item.href}
          item={item}
          isActive={pathname === item.href}
          onNavigate={onNavigate}
          t={t}
        />
      ))}

      {/* Collapsible group sections. Each is a native <details> so SSR/CSR
          stays clean — no React state, no hydration mismatch risk. The
          group whose href the user is currently inside opens by default;
          everything else stays tucked away. */}
      {GROUPS.map(({ key, label }) => {
        const items = groupedItems[key]
        if (items.length === 0) return null
        return (
          <details
            key={key}
            open={groupIsActive(key)}
            className="mt-3 [&[open]>summary>svg.group-chevron]:rotate-90"
          >
            <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none [&::-webkit-details-marker]:hidden">
              <ChevronRight className="group-chevron size-3 shrink-0 transition-transform duration-150" />
              <span className="flex-1">{label}</span>
            </summary>
            <div className="mt-1 ml-1 flex flex-col gap-0.5">
              {items.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  isActive={pathname === item.href}
                  onNavigate={onNavigate}
                  t={t}
                />
              ))}
            </div>
          </details>
        )
      })}
    </nav>
  )
}

// ─── Mobile scroll-chip rail ────────────────────────────────────────────────
//
// Horizontal, scrollable pill-rail that surfaces the same nav items as the
// desktop sidebar on small screens. Complements the hamburger Sheet — both
// are visible on mobile and click through to the same routes. Grouping
// would actively hurt here (a horizontal rail wants flat pills), so we
// intentionally render the items un-grouped.
function MobileScrollRail({ navItems }: { navItems: NavItem[] }) {
  const pathname = usePathname()
  const t = useT()
  return (
    <div
      className="-mx-4 mb-4 overflow-x-auto px-4 pb-1 lg:hidden"
      role="navigation"
      aria-label={t('revision.shell.nav_aria')}
    >
      <div className="flex min-w-max gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                isActive
                  ? 'border-primary/60 bg-primary/10 text-primary'
                  : 'border-border/60 bg-card text-muted-foreground hover:border-border hover:text-foreground',
              )}
            >
              <item.icon
                className={cn('size-3.5 shrink-0', isActive ? 'text-primary' : item.colour)}
              />
              {navLabel(item, t)}
            </Link>
          )
        })}
      </div>
    </div>
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
  const config = getBoardConfig(board)
  const boardName = config?.shortName ?? null
  const t = useT()

  // NB — the previous implementation redirected non-GCSE students AWAY from
  // this shell (KS3 → /courses, IGCSE → board hub, null render for A-Level/
  // IAL). That contradicted the unified "Your Hub" goal and produced the
  // "flash then navigates away" bug reported for IGCSE and A-Level. The
  // hub now renders for every board; board-aware filtering happens in
  // NAV_ITEMS (see `boards?: ExamBoard[]` per entry).
  void isHydrated

  const navItems = getNavItemsForBoard(board)

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex gap-8">
        {/* ── Desktop sidebar ──────────────────────────────────────── */}
        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-24">
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="size-5 text-primary" />
              <span className="text-heading-md font-heading text-foreground">
                {t('revision.shell.hub_title')}
              </span>
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
                    <span className="sr-only">{t('revision.shell.open_menu_sr')}</span>
                  </Button>
                }
              />
              <SheetContent side="left" className="w-72 p-0">
                <SheetHeader className="border-b border-border/60 px-4 py-3">
                  <SheetTitle>
                    <span className="flex items-center gap-2">
                      <GraduationCap className="size-4 text-primary" />
                      {t('revision.shell.hub_title')}
                      {boardName && (
                        <Badge
                          variant="secondary"
                          className="ml-1 text-[0.65rem] uppercase tracking-wider"
                        >
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
            {/* Persistent sidebar branding. Visually a heading, but
                semantically NOT the page's primary heading — every
                /revision/*, /igcse/*, /a-level/* page wraps in this
                shell AND renders its own page-specific <h1>. Keeping
                this as <h1> produced multi-H1 on 800+ routes and was
                flagged by the SEO audit on 2026-05-15. Demoted to
                <h2> so each page has exactly one <h1> for crawlers
                and screen readers. */}
            <h2 className="text-heading-md font-heading text-foreground">
              {t('revision.shell.hub_title')}
              {boardName && (
                <Badge variant="secondary" className="ml-2 text-[0.65rem] uppercase tracking-wider">
                  {boardName}
                </Badge>
              )}
            </h2>
          </div>

          {/* Mobile scroll-chip rail — horizontal nav that supplements the */}
          {/* hamburger menu above. Gives one-tap access to key sections   */}
          {/* without requiring the user to open the full sheet.           */}
          <MobileScrollRail navItems={navItems} />

          {children}
        </main>
      </div>
    </div>
  )
}
