'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FolderOpen,
  BookOpen,
  FileText,
  ClipboardList,
  Library,
  Lightbulb,
  CalendarDays,
  BarChart3,
  Wrench,
  Bell,
  Building2,
  Settings,
  ChevronRight,
  ArrowLeft,
  Menu,
  X,
  Plus,
  PanelLeftClose,
  PanelLeft,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import type { School as SchoolType, SchoolMember, Class } from '@/lib/types'

// ── Types ───────────────────────────────────────────────────────────────────

interface SchoolSidebarProps {
  school: SchoolType | null
  member: SchoolMember | null
  classes: Class[]
}

type NavRole = 'admin' | 'head_of_department' | 'teacher'

interface NavItem {
  labelKey: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children?: { labelKey: string; href: string }[]
  dynamicChildren?: true
  roles?: NavRole[]
  badge?: true
}

// ── Navigation definition ───────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { labelKey: 'school.sidebar.dashboard', href: '/school', icon: LayoutDashboard },
  {
    labelKey: 'school.sidebar.my_classes',
    href: '/school/classes',
    icon: FolderOpen,
    dynamicChildren: true,
  },
  { labelKey: 'school.sidebar.lesson_plans', href: '/school/lessons', icon: BookOpen },
  { labelKey: 'school.sidebar.worksheets', href: '/school/worksheets', icon: FileText },
  { labelKey: 'school.sidebar.assignments', href: '/school/assignments', icon: ClipboardList },
  { labelKey: 'school.sidebar.resources', href: '/school/resources', icon: Library },
  { labelKey: 'school.sidebar.teaching_guides', href: '/school/guides', icon: Lightbulb },
  { labelKey: 'school.sidebar.calendar', href: '/school/calendar', icon: CalendarDays },
  { labelKey: 'school.sidebar.reports', href: '/school/progress-cards', icon: BarChart3 },
  {
    labelKey: 'school.sidebar.tools',
    href: '/school/tools',
    icon: Wrench,
    children: [
      { labelKey: 'school.sidebar.tools.seating', href: '/school/tools/seating' },
      { labelKey: 'school.sidebar.tools.groups', href: '/school/tools/groups' },
    ],
  },
  {
    labelKey: 'school.sidebar.notifications',
    href: '/school/notifications',
    icon: Bell,
    badge: true,
  },
  {
    labelKey: 'school.sidebar.department',
    href: '/school/department',
    icon: Building2,
    roles: ['admin', 'head_of_department'],
  },
  { labelKey: 'school.sidebar.settings', href: '/school/settings', icon: Settings },
]

// ── Component ───────────────────────────────────────────────────────────────

export function SchoolSidebar({ school, member, classes }: SchoolSidebarProps) {
  const t = useT()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  // Placeholder notification count -- wire up to real data when available
  const notificationCount = 3

  const memberRole = member?.role ?? 'teacher'
  const memberName = member?.full_name ?? t('school.sidebar.default_member_name')
  const memberInitials = memberName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  function isActive(href: string) {
    if (href === '/school') return pathname === '/school'
    return pathname.startsWith(href)
  }

  const toggleSection = useCallback((key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }, [])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  const visibleItems = NAV_ITEMS.filter((item) => !item.roles || item.roles.includes(memberRole))

  function renderSidebarContent(isMobile: boolean) {
    const isCollapsed = !isMobile && collapsed

    return (
      <div className="flex h-full flex-col">
        {/* School identity + collapse toggle */}
        <div className="border-b border-border px-3 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-primary/10">
              {school?.logo_url ? (
                <Image
                  src={school.logo_url}
                  alt={school.name ?? t('school.sidebar.school_dashboard')}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl object-cover"
                />
              ) : (
                <Building2 className="h-5 w-5 text-primary" />
              )}
            </div>
            {!isCollapsed && (
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-foreground">
                  {school?.name ?? t('school.sidebar.school_dashboard')}
                </p>
                <p className="text-xs capitalize text-muted-foreground">
                  {school?.subscription_plan ?? 'school'} {t('school.sidebar.plan_suffix')}
                </p>
              </div>
            )}
            {!isMobile && (
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 shrink-0 text-muted-foreground hover:text-foreground"
                onClick={() => setCollapsed((c) => !c)}
                aria-label={collapsed ? t('school.sidebar.expand') : t('school.sidebar.collapse')}
              >
                {collapsed ? (
                  <PanelLeft className="h-4 w-4" />
                ) : (
                  <PanelLeftClose className="h-4 w-4" />
                )}
              </Button>
            )}
          </div>

          {!isCollapsed && (
            <div className="mt-3 flex items-center gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                {memberInitials}
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-foreground">{memberName}</p>
                <p className="text-[10px] capitalize text-muted-foreground">
                  {memberRole.replace(/_/g, ' ')}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Quick action: Create */}
        <div className={cn('px-3 pt-3', isCollapsed ? 'flex justify-center' : '')}>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                isCollapsed ? 'h-9 w-9 p-0' : 'w-full',
              )}
            >
              <Plus className="h-4 w-4" />
              {!isCollapsed && <span>{t('school.sidebar.create')}</span>}
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="start" sideOffset={6}>
              <DropdownMenuGroup>
                <DropdownMenuLabel>{t('school.sidebar.create_new')}</DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem render={<Link href="/school/classes" onClick={closeMobile} />}>
                <FolderOpen className="h-4 w-4" />
                {t('school.sidebar.new_class')}
              </DropdownMenuItem>
              <DropdownMenuItem
                render={<Link href="/school/assignments/create" onClick={closeMobile} />}
              >
                <ClipboardList className="h-4 w-4" />
                {t('school.sidebar.new_assignment')}
              </DropdownMenuItem>
              <DropdownMenuItem render={<Link href="/school/lessons" onClick={closeMobile} />}>
                <BookOpen className="h-4 w-4" />
                {t('school.sidebar.new_lesson')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-3">
          <TooltipProvider delay={300}>
            {visibleItems.map((item) => {
              const active = isActive(item.href)
              const hasChildren =
                (item.children && item.children.length > 0) ||
                (item.dynamicChildren && classes.length > 0)
              const isExpanded = expandedSections[item.labelKey] ?? false

              const subItems: { label: string; href: string }[] = item.children
                ? item.children.map((c) => ({ label: t(c.labelKey), href: c.href }))
                : item.dynamicChildren
                  ? classes.map((c) => ({
                      label: c.name,
                      href: `/school/classes/${c.id}`,
                    }))
                  : []

              const itemLabel = t(item.labelKey)

              return (
                <div key={item.labelKey} className="flex flex-col">
                  <div className="flex items-center">
                    {isCollapsed ? (
                      <Tooltip>
                        <TooltipTrigger
                          className={cn(
                            'relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors',
                            active
                              ? 'bg-primary/10 text-primary'
                              : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                          )}
                          render={<Link href={item.href} onClick={closeMobile} />}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.badge && notificationCount > 0 && (
                            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground">
                              {notificationCount}
                            </span>
                          )}
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={10}>
                          {itemLabel}
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className={cn(
                          'group relative flex flex-1 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                          active
                            ? 'bg-primary/10 text-primary'
                            : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                        )}
                      >
                        <item.icon
                          className={cn(
                            'h-4 w-4 shrink-0',
                            active
                              ? 'text-primary'
                              : 'text-muted-foreground group-hover:text-foreground',
                          )}
                        />
                        <span className="flex-1 truncate">{itemLabel}</span>

                        {item.badge && notificationCount > 0 && (
                          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive px-1.5 text-[10px] font-bold text-destructive-foreground">
                            {notificationCount}
                          </span>
                        )}

                        {hasChildren && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              toggleSection(item.labelKey)
                            }}
                            className="flex h-5 w-5 items-center justify-center rounded text-muted-foreground/60 hover:text-foreground"
                            aria-label={
                              isExpanded
                                ? `${t('school.sidebar.collapse_section')} ${itemLabel}`
                                : `${t('school.sidebar.expand_section')} ${itemLabel}`
                            }
                          >
                            <ChevronRight
                              className={cn(
                                'h-3.5 w-3.5 transition-transform duration-200',
                                isExpanded && 'rotate-90',
                              )}
                            />
                          </button>
                        )}

                        {active && !hasChildren && (
                          <ChevronRight className="h-3.5 w-3.5 text-primary/60" />
                        )}
                      </Link>
                    )}
                  </div>

                  {hasChildren && !isCollapsed && (
                    <div
                      className={cn(
                        'grid transition-[grid-template-rows] duration-200 ease-in-out',
                        isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-5 border-l border-border/60 pb-1 pl-3 pt-1">
                          {subItems.map((child) => {
                            const childActive =
                              pathname === child.href || pathname.startsWith(child.href + '/')
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeMobile}
                                className={cn(
                                  'flex items-center rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors',
                                  childActive
                                    ? 'bg-primary/5 text-primary'
                                    : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground',
                                )}
                              >
                                <span className="truncate">{child.label}</span>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </TooltipProvider>
        </nav>

        {/* Seat usage */}
        {school && !isCollapsed && (
          <div className="border-t border-border px-5 py-4">
            <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground">
              <span>{t('school.sidebar.seats_used')}</span>
              <span className="font-medium text-foreground">
                {school.seats_used} / {school.seat_limit}
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{
                  width: `${Math.min((school.seats_used / school.seat_limit) * 100, 100)}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Back to Dashboard */}
        <div className="border-t border-border px-3 py-3">
          {isCollapsed ? (
            <TooltipProvider delay={300}>
              <Tooltip>
                <TooltipTrigger
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  render={<Link href="/dashboard" onClick={closeMobile} />}
                >
                  <ArrowLeft className="h-4 w-4" />
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={10}>
                  {t('school.sidebar.back_to_dashboard')}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Link
              href="/dashboard"
              onClick={closeMobile}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('school.sidebar.back_to_dashboard')}
            </Link>
          )}
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Mobile hamburger toggle */}
      <div className="fixed left-0 top-[3.75rem] z-40 lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="m-2 border border-border/40 bg-card/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? t('school.sidebar.close') : t('school.sidebar.open')}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Mobile sidebar drawer */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-30 w-full max-w-xs border-r border-border bg-card transition-transform duration-200 ease-in-out lg:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-end p-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={closeMobile}
            aria-label={t('school.sidebar.close')}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        {renderSidebarContent(true)}
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          'hidden bg-card/30 transition-[width] duration-200 ease-in-out lg:flex lg:shrink-0 lg:flex-col lg:border-r lg:border-border',
          collapsed ? 'lg:w-16' : 'lg:w-64',
        )}
      >
        {renderSidebarContent(false)}
      </aside>
    </>
  )
}
