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
import { Badge } from '@/components/ui/badge'

import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-store'
import { isIgcseBoard, isGcseBoard } from '@/lib/board/board-filter'
import { gradeDisplayLabel } from '@/lib/board/grade-boundaries'
import { useT } from '@/lib/i18n/use-t'
import { buildTextNav, textSlugFromPath } from '@/lib/revision/text-nav'
import { canonicalTextSlug } from '@/lib/revision/text-slug-aliases'
import { boardShelfHref } from '@/lib/board/board-landing'
import { textBackLink } from '@/lib/revision/text-back-href'
import { readExplicitTargetGrade, type TargetGrade } from '@/lib/revision/target-grade'

import { SidebarLink } from './sidebar-link'
import { TextScopedNav } from './text-scoped-nav'

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
  /** Sidebar grouping - controls which collapsible bucket the item lands in.
   *  Items without an explicit group are treated as `top` (always visible). */
  group?: NavGroup
  /**
   * A better destination once the student's board is known.
   *
   * "Set texts" pointed at /revision/texts, the catch-all index, even for a
   * student whose board we already had - so they were sent to a list of every
   * text on the platform and left to find their own. With a board it now goes
   * to that board's shelf.
   */
  hrefForBoard?: (board: ExamBoard) => string
}

// Boards that see literature (poetry, set texts, comparison essays). Cambridge
// 0500/0990 are language-only so they get filtered out for those entries.
const LIT_BOARDS: ExamBoard[] = ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse']

// Dense one-line-per-entry table. The `// prettier-ignore` block keeps prettier
// from wrapping each entry across 6+ lines - readable for editors as a flat
// register of routes, and keeps the file roughly the size of pre-grouping.
// `labelKey` for the Full Dashboard entry is a sentinel - navLabel() special-
// cases it so we can ship without expanding the i18n catalogue.
// prettier-ignore
const NAV_ITEMS: NavItem[] = [
  // Top tier - always visible above the collapsible groups.
  { labelKey: 'revision.shell.nav.your_hub',           href: '/revision',                                            icon: Home,           colour: 'text-primary',     group: 'top' },
  // 2026-08-18: AI marking is the flagship paid feature and had NO entry in
  // any navigation surface - header, footer, this sidebar or the hub tiles.
  // A subscriber could only reach it by typing the URL.
  { labelKey: 'revision.shell.nav.mark_essay',         href: '/marking',                                             icon: PenTool,        colour: 'text-emerald-400',  group: 'top' },
  // 10 October 2026: Games moved up from the closed "Practice" group. Learning
  // by playing is now a headline part of the product, with guided games on the
  // set texts themselves, and an entry that only appears after opening a
  // collapsed group is not one a student finds.
  { labelKey: 'revision.shell.nav.games',              href: '/games',                                               icon: Gamepad2,       colour: 'text-clay-600',     group: 'top' },
  // 2026-08-18: pointed at /demo/student - a synthetic-data demo - so a real
  // signed-in student clicking "Full Dashboard" landed on someone else's
  // fake progress. Now the real dashboard.
  { labelKey: 'revision.shell.nav.full_dashboard',     href: '/dashboard',                                           icon: LayoutDashboard, colour: 'text-primary',    group: 'top' },
  { labelKey: 'revision.shell.nav.analytics',          href: '/revision/analytics',                                  icon: BarChart3,      colour: 'text-primary',     group: 'top' },
  { labelKey: 'revision.shell.nav.study_plan',         href: '/revision/study-plan',                                 icon: CalendarDays,   colour: 'text-primary',     group: 'top' },
  // Content & texts.
  { labelKey: 'revision.shell.nav.poetry',             href: '/revision/poetry',                                     icon: FileText,       colour: 'text-rose-400',    boards: LIT_BOARDS,                  group: 'content' },
  { labelKey: 'revision.shell.nav.set_texts',          href: '/revision/texts',                                      icon: BookText,       colour: 'text-blue-400',    boards: LIT_BOARDS,                  group: 'content' , hrefForBoard: boardShelfHref },
  { labelKey: 'revision.shell.nav.language_skills',    href: '/revision/language',                                   icon: PenTool,        colour: 'text-violet-400',                                       group: 'content' },
  { labelKey: 'revision.shell.nav.comparison_essays',  href: '/revision/poetry/love-and-relationships/comparison-guide', icon: GitCompare, colour: 'text-violet-400',  boards: LIT_BOARDS,                  group: 'content' },
  // Practice & assess.
  { labelKey: 'revision.shell.nav.mock_exams',         href: '/mock-exams',                                          icon: Timer,          colour: 'text-emerald-400',                                       group: 'practice' },
  { labelKey: 'revision.shell.nav.practice',           href: '/practice',                                            icon: Dumbbell,       colour: 'text-violet-400',                                       group: 'practice' },
  { labelKey: 'revision.shell.nav.quick_quizzes',      href: '/revision/quiz',                                       icon: Zap,            colour: 'text-clay-600',                                         group: 'practice' },
  { labelKey: 'revision.shell.nav.reading_assessment', href: '/assessment/reading',                                  icon: ClipboardList,  colour: 'text-blue-400',                                         group: 'practice' },
  // Skills & technique.
  { labelKey: 'revision.shell.nav.exam_technique',     href: '/revision/exam-technique',                             icon: Target,         colour: 'text-emerald-400',                                       group: 'skills' },
  { labelKey: 'revision.shell.nav.grade_targets',      href: '/revision/grade-targets',                              icon: TrendingUp,     colour: 'text-cyan-400',                                         group: 'skills' },
  { labelKey: 'revision.shell.nav.writing_skills',     href: '/resources/writing-skills',                            icon: Edit3,          colour: 'text-cyan-400',                                         group: 'skills' },
  { labelKey: 'revision.shell.nav.vocabulary',         href: '/resources/vocabulary',                                icon: Quote,          colour: 'text-rose-400',                                         group: 'skills' },
  { labelKey: 'revision.shell.nav.flashcards',         href: '/revision/flashcards',                                 icon: Layers,         colour: 'text-clay-600',                                         group: 'skills' },
  // Resources - curated libraries + dashboard tooling.
  { labelKey: 'revision.shell.nav.resources_hub',      href: '/resources',                                           icon: Library,        colour: 'text-amber-400',                                        group: 'resources' },
  { labelKey: 'revision.shell.nav.revision_notes',     href: '/resources/revision-notes',                            icon: StickyNote,     colour: 'text-blue-400',                                         group: 'resources' },
  { labelKey: 'revision.shell.nav.model_answers',      href: '/resources/model-answers',                             icon: CheckSquare,    colour: 'text-emerald-400',                                       group: 'resources' },
  { labelKey: 'revision.shell.nav.my_papers',          href: '/dashboard/papers',                                    icon: Files,          colour: 'text-primary',                                          group: 'resources' },
  // 2026-08-18: "Study tools" (/revision#toolkit) and "Toolkit" (/toolkit)
  // were two entries, same icon, effectively the same destination - the
  // anchor just scrolls to a section that links onward to /toolkit. Kept the
  // real destination only.
  { labelKey: 'revision.shell.nav.toolkit',            href: '/toolkit',                                             icon: Wrench,         colour: 'text-primary',                                          group: 'resources' },
  // Your board - board-specific deep-links.
  { labelKey: 'revision.shell.nav.ial_guide',          href: '/revision/ial',                                        icon: GraduationCap,  colour: 'text-primary',     boards: ['ial-edexcel'],             group: 'board' },
  { labelKey: 'revision.shell.nav.edexcel_igcse_hub',  href: '/igcse/edexcel',                                       icon: GraduationCap,  colour: 'text-cyan-400',    boards: ['edexcel-igcse'],   igcseOnly: true, group: 'board' },
  { labelKey: 'revision.shell.nav.cambridge_hub',      href: '/igcse/cambridge/0500',                                icon: GraduationCap,  colour: 'text-cyan-400',    boards: ['cambridge-0500'],  igcseOnly: true, group: 'board' },
  { labelKey: 'revision.shell.nav.cambridge_91_hub',   href: '/igcse/cambridge/0990',                                icon: GraduationCap,  colour: 'text-cyan-400',    boards: ['cambridge-0990'],  igcseOnly: true, group: 'board' },
]

function getNavItemsForBoard(board: ExamBoard | null): NavItem[] {
  const resolve = (item: NavItem): NavItem =>
    board && item.hrefForBoard ? { ...item, href: item.hrefForBoard(board) } : item
  return NAV_ITEMS.map(resolve).filter((item) => {
    if (!board) {
      // No board chosen yet - hide board-locked items (igcse-only / gcse-only)
      return !item.igcseOnly && !item.gcseOnly && !item.boards ? true : !item.boards // generic items pass; board-pinned items hidden until board chosen
    }
    if (item.boards && !item.boards.includes(board)) return false
    if (item.gcseOnly && !isGcseBoard(board)) return false
    if (item.igcseOnly && !isIgcseBoard(board)) return false
    return true
  })
}

// Ordered list of collapsible group sections shown beneath the top-tier nav.
// `label` is an i18n key (resolved via t() at render) so the section titles
// translate (EN + Khaleeji) like the rest of the shell.
const GROUPS: { key: Exclude<NavGroup, 'top'>; label: string }[] = [
  { key: 'content', label: 'revision.shell.group.content' },
  { key: 'practice', label: 'revision.shell.group.practice' },
  { key: 'skills', label: 'revision.shell.group.skills' },
  { key: 'resources', label: 'revision.shell.group.resources' },
  { key: 'board', label: 'revision.shell.group.board' },
]

// ─── Section visits, and the student's own target ───────────────────────────

const PROGRESS_KEY = 'english-hub-revision-progress'

/**
 * Records which revision sections the student has opened, and reads the
 * target grade they set, if they set one.
 *
 * WHAT WAS WRONG, fixed 16 October 2026. The status card at the top of this
 * sidebar showed "Target grade: Grade 7" to every visitor who had not set a
 * target, because its reader fell back to 7, and under it a bar running from
 * "Grade 5" to "Grade 7". The bar never measured a grade. For a visitor it
 * filled with the share of sidebar sections they had opened; for a signed-in
 * student it divided an average of quiz answers and AI essay scores by
 * invented "boundary" percentages (a 7 was 70%). So a child who had clicked
 * round the menu was shown most of the way to a grade 7 they never chose.
 *
 * Now the target is shown only when the student set it, in the Study Plan,
 * through the same reader as the hub's hero pill (src/lib/revision/
 * target-grade.ts), and with no bar. A student without one is offered a link
 * to set it. The visit record is still written as before, because progress
 * sync and the flashcards read it.
 */
function useRevisionVisits(items: NavItem[]): { target: TargetGrade | null; ready: boolean } {
  const pathname = usePathname()
  // Null on the server and the first client render, so they agree; filled in
  // from this device's storage once mounted.
  const [target, setTarget] = useState<TargetGrade | null>(null)
  const [ready, setReady] = useState(false)

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

      const visibleVisited = Array.from(visited).filter((v) => sectionKeys.includes(v))
      const denominator = sectionKeys.length || 1
      const percentage = Math.round((visibleVisited.length / denominator) * 100)

      localStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify({ visited: Array.from(visited), percentage }),
      )
    } catch {
      // ignore
    }
    setTarget(readExplicitTargetGrade())
    setReady(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, sectionKeys.join('|')])

  return { target, ready }
}

// ─── Sidebar content (shared between desktop & mobile) ──────────────────────

// 2026-08-18: this used to hard-code the English string "Full Dashboard",
// so Arabic and Spanish users saw one untranslated Latin item in an
// otherwise localised sidebar. The key now exists in all three locales.
function navLabel(item: NavItem, t: ReturnType<typeof useT>): string {
  return t(item.labelKey)
}

// Single nav-link row - shared between the top-tier list and the grouped
// `<details>` lists so active styling stays in lockstep.
//
// The presentation moved to ./sidebar-link.tsx when the text-scoped navigation
// was added, so a text's own sections and the site-wide register render as one
// consistent column rather than two lists that look almost the same.
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
    <SidebarLink
      href={item.href}
      label={navLabel(item, t)}
      icon={<item.icon className="size-3.5" aria-hidden="true" />}
      iconColour={item.colour}
      isActive={isActive}
      onNavigate={onNavigate}
    />
  )
}

/**
 * Wraps the site-wide register in a closed group when the reader is inside a
 * text, and leaves it untouched everywhere else.
 *
 * Inside a text the text's own sections must come first, but the register is
 * the only route back to marking, the dashboard and mock exams, so it is
 * collapsed rather than removed. `<details>` gives that for free: no state, and
 * the reader can open it and leave it open while they browse.
 */
function RestOfSite({
  collapsed,
  label,
  children,
}: {
  collapsed: boolean
  label: string
  children: React.ReactNode
}) {
  if (!collapsed) return <>{children}</>
  return (
    <details className="mt-4 border-t border-border/60 pt-3 [&[open]>summary>svg.group-chevron]:rotate-90">
      <summary className="flex cursor-pointer list-none items-center gap-2 rounded-md px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none [&::-webkit-details-marker]:hidden">
        <ChevronRight
          aria-hidden="true"
          className="group-chevron size-3 shrink-0 transition-transform duration-150"
        />
        <span className="flex-1">{label}</span>
      </summary>
      <div className="mt-1 flex flex-col gap-1">{children}</div>
    </details>
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
  // Non-null while the reader is inside a set text, which switches this
  // sidebar from the site-wide register to that text's own sections.
  const textSlug = textSlugFromPath(pathname)
  // Collapse the site-wide register ONLY when the text has its own sections
  // to put in its place. 37 of the 53 texts have no sub-pages, and those
  // would otherwise get a rail with a single link AND a folded-away site
  // menu - less navigation than before this feature existed, not more.
  const hasScopedSections = textSlug !== null && buildTextNav(textSlug).sectionCount > 0
  const { target, ready: targetRead } = useRevisionVisits(navItems)
  const { board } = useBoard()
  const t = useT()

  // Board-aware, so IAL and A level show a letter rather than "Grade 7", and
  // Cambridge 0500 its A*-G letters. Only ever the student's own target.
  const targetLabel =
    target === null
      ? null
      : gradeDisplayLabel(
          String(target) as '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9',
          board,
        )

  // Partition nav items by group - items without an explicit group fall back
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
      {textSlug && <TextScopedNav slug={textSlug} onNavigate={onNavigate} />}
      <RestOfSite collapsed={hasScopedSections} label={t('textnav.rest_of_site')}>
        {/* Status card - the exam board and the student's own target grade
          in one panel. Visually anchors the top of the sidebar so the long
          nav list below feels organised rather than open-ended. */}
        <div className="relative mb-4 overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.06] via-card to-violet-500/[0.04] p-3.5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -end-8 -top-8 h-20 w-20 rounded-full bg-primary/[0.07] blur-2xl"
          />
          <div className="relative">
            {boardName && (
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {t('revision.shell.exam_board_label')}
                </span>
                <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                  {boardName}
                </Badge>
              </div>
            )}

            {/* The student's own target, or a way to set one. Never a
              default and never a bar: see useRevisionVisits for the "Grade
              7" every visitor was shown, and the bar that measured clicks.
              Nothing renders until storage has been read, so a student with
              a target does not see the "set one" link flash first. */}
            {targetRead &&
              (targetLabel !== null ? (
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {t('revision.shell.target_grade_label')}
                  </span>
                  <span className="font-heading text-base font-semibold text-primary">
                    {targetLabel}
                  </span>
                </div>
              ) : (
                <Link
                  href="/revision/study-plan"
                  onClick={onNavigate}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Target className="size-3" aria-hidden="true" />
                  {t('revision_page.pill.set_target')}
                </Link>
              ))}
          </div>
        </div>

        {/* Top-tier nav - always-visible essentials (Your Hub, Mark an essay,
          Games, Full Dashboard, Analytics, Study Plan). Rendered flat above
          the collapsible groups so they read as the primary surface of the
          sidebar. */}
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
          stays clean - no React state, no hydration mismatch risk. The
          group whose href the user is currently inside opens by default;
          everything else stays tucked away. */}
        {GROUPS.map(({ key, label }) => {
          const items = groupedItems[key]
          if (items.length === 0) return null
          const open = groupIsActive(key)
          return (
            <details
              key={key}
              open={open}
              className="mt-2.5 [&[open]>summary>svg.group-chevron]:rotate-90"
            >
              <summary className="flex cursor-pointer list-none items-center gap-2 rounded-md px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                <ChevronRight
                  aria-hidden="true"
                  className="group-chevron size-3 shrink-0 transition-transform duration-150"
                />
                <span className="flex-1">{t(label)}</span>
                <span
                  aria-hidden="true"
                  className="rounded-full bg-muted/50 px-1.5 py-px font-sans text-[10px] font-medium tracking-normal text-muted-foreground-subtle"
                >
                  {items.length}
                </span>
              </summary>
              <div className="mt-1 flex flex-col gap-0.5">
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
      </RestOfSite>
    </nav>
  )
}

// ─── Mobile scroll-chip rail ────────────────────────────────────────────────
//
// Horizontal, scrollable pill-rail that surfaces the same nav items as the
// desktop sidebar on small screens. Complements the hamburger Sheet - both
// are visible on mobile and click through to the same routes. Grouping
// would actively hurt here (a horizontal rail wants flat pills), so we
// intentionally render the items un-grouped.
/** One pill in the mobile rail. Shared by the scoped and site-wide variants. */
function MobileChip({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
        isActive
          ? 'border-primary/60 bg-primary/10 text-primary'
          : 'border-border/60 bg-card text-muted-foreground hover:border-border hover:text-foreground',
      )}
    >
      {label}
    </Link>
  )
}

function MobileScrollRail({ navItems }: { navItems: NavItem[] }) {
  const pathname = usePathname()
  const t = useT()
  const { board, isHydrated } = useBoard()

  // Inside a text, the chips must be that text's sections. Most of these
  // students revise on a phone, so leaving the global register here would have
  // meant the scoped navigation existed only on the surface the fewest of them
  // ever see. The hamburger sheet renders SidebarNav and is already scoped.
  const textSlug = textSlugFromPath(pathname)
  if (textSlug) {
    // The canonical slug, as text-scoped-nav.tsx has used since 20 September
    // 2026. Six revision-notes routes drop the article (`christmas-carol`), and
    // the raw segment gave this rail no sections and an Overview chip pointing
    // at /revision/texts/christmas-carol, which is "Set Text Not Found". The
    // desktop rail was fixed; this one, which more students use, was not.
    const nav = buildTextNav(canonicalTextSlug(textSlug))
    const items = nav.groups.flatMap((g) => g.items)
    return (
      <div
        className="-mx-4 mb-4 overflow-x-auto px-4 pb-1 lg:hidden"
        role="navigation"
        aria-label={t('revision.shell.nav_aria')}
      >
        <div className="flex min-w-max gap-2">
          {/* The mobile way out, to the student's OWN shelf - see the same fix
              in text-scoped-nav.tsx. This is the rail most students actually
              use, so it mattered more than the desktop one and was missed on
              the first pass because the browser was wide. */}
          <Link
            href={textBackLink(textSlug, isHydrated ? board : null).href}
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-border/60 bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
          >
            <ChevronRight aria-hidden="true" className="size-3.5 shrink-0 rotate-180" />
            {textBackLink(textSlug, isHydrated ? board : null).isBoardShelf
              ? t('textnav.back_to_board_shelf')
              : t('textnav.back_to_shelf')}
          </Link>
          <MobileChip
            href={nav.hubHref}
            label={t('textnav.overview')}
            isActive={pathname === nav.hubHref}
          />
          {/* Play this text, second only to the overview: on a phone this rail
              is the only text-scoped navigation most students see. */}
          {nav.playHref && (
            <MobileChip href={nav.playHref} label={t('textnav.play_text')} isActive={false} />
          )}
          {items.map((item) => (
            <MobileChip
              key={item.href}
              href={item.href}
              label={t(item.labelKey)}
              isActive={pathname === item.href}
            />
          ))}
        </div>
      </div>
    )
  }

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

  // NB - the previous implementation redirected non-GCSE students AWAY from
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
        {/* Widened from w-56 to w-64 to give the polished status card +
            grouped nav comfortable breathing room. The sticky inner
            container has its own scroll: `max-h-[calc(100vh-7rem)]` +
            `overflow-y-auto` so a long nav can scroll independently of
            the page (which the founder asked for) and a thin
            scrollbar-gutter keeps the layout stable rather than jumping
            by ~14px the moment the scrollbar appears. */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div
            className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-6 pe-1"
            style={{ scrollbarWidth: 'thin', scrollbarGutter: 'stable' }}
          >
            <div className="mb-4 flex items-center gap-2 px-1">
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/20">
                <GraduationCap className="size-4 text-primary" aria-hidden="true" />
              </span>
              <span className="text-heading-md font-heading text-foreground">
                {t('revision.shell.hub_title')}
              </span>
            </div>
            <SidebarNav navItems={navItems} boardName={boardName} />
          </div>
        </aside>

        {/* ── Main content ─────────────────────────────────────────── */}
        <div className="min-w-0 flex-1">
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
                          className="ms-1 text-[0.65rem] uppercase tracking-wider"
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
                semantically NOT the page's primary heading - every
                /revision/*, /igcse/*, /a-level/* page wraps in this
                shell AND renders its own page-specific <h1>. Keeping
                this as <h1> produced multi-H1 on 800+ routes and was
                flagged by the SEO audit on 2026-05-15. Demoted to
                <h2> so each page has exactly one <h1> for crawlers
                and screen readers. */}
            <h2 className="text-heading-md font-heading text-foreground">
              {t('revision.shell.hub_title')}
              {boardName && (
                <Badge variant="secondary" className="ms-2 text-[0.65rem] uppercase tracking-wider">
                  {boardName}
                </Badge>
              )}
            </h2>
          </div>

          {/* Mobile scroll-chip rail - horizontal nav that supplements the */}
          {/* hamburger menu above. Gives one-tap access to key sections   */}
          {/* without requiring the user to open the full sheet.           */}
          <MobileScrollRail navItems={navItems} />

          {children}
        </div>
      </div>
    </div>
  )
}
