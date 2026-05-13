'use client'

import { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  Clock,
  Trophy,
  CalendarClock,
  UserPlus,
  BarChart3,
  TrendingUp,
  TrendingDown,
  UserX,
  CheckCheck,
  Bell,
  Filter,
  ArrowLeft,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  type TeacherNotification,
  type NotificationType,
  NOTIFICATION_TYPE_CONFIG,
  generateMockNotifications,
  filterNotifications,
  markNotificationRead,
  markAllNotificationsRead,
  applyReadStatus,
} from '@/lib/teacher-notifications'
import { useT } from '@/lib/i18n/use-t'

// ── Icon map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  AlertTriangle,
  Clock,
  Trophy,
  CalendarClock,
  UserPlus,
  BarChart3,
  TrendingUp,
  TrendingDown,
  UserX,
}

function getNotificationIcon(type: NotificationType): LucideIcon {
  const config = NOTIFICATION_TYPE_CONFIG[type]
  return ICON_MAP[config.emoji] ?? AlertTriangle
}

// ── Relative time ────────────────────────────────────────────────────────────

// Render-time relative-time formatter. Accepts a `t` lookup so AR strings
// resolve via the dictionary; fall-back date format remains en-GB short
// because numerals/months are already abbreviated and locale-safe.
function formatTimestamp(iso: string, t: (key: string) => string): string {
  const date = new Date(iso)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffHours / 24)

  if (diffHours < 1) {
    const diffMin = Math.floor(diffMs / (1000 * 60))
    if (diffMin < 1) return t('school.notifications.time.just_now')
    const unit =
      diffMin !== 1
        ? t('school.notifications.time.min_plural')
        : t('school.notifications.time.min_singular')
    return `${diffMin} ${unit}`
  }
  if (diffHours < 24) {
    const unit =
      diffHours !== 1
        ? t('school.notifications.time.hour_plural')
        : t('school.notifications.time.hour_singular')
    return `${diffHours} ${unit}`
  }
  if (diffDays === 1) return t('school.notifications.time.yesterday')
  if (diffDays < 7) return `${diffDays} ${t('school.notifications.time.days_ago_suffix')}`
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
  })
}

// ── Priority config ──────────────────────────────────────────────────────────
// Labels stored as i18n keys; resolved at render time via useT.
const PRIORITY_CONFIG: Record<
  'high' | 'medium' | 'low',
  { labelKey: string; color: string; dot: string }
> = {
  high: {
    labelKey: 'school.notifications.priority.high',
    color: 'text-red-400',
    dot: 'bg-red-500',
  },
  medium: {
    labelKey: 'school.notifications.priority.medium',
    color: 'text-clay-600',
    dot: 'bg-amber-500',
  },
  low: {
    labelKey: 'school.notifications.priority.low',
    color: 'text-green-400',
    dot: 'bg-green-500',
  },
}

// ── Notification types for filter ────────────────────────────────────────────
// `NOTIFICATION_TYPE_CONFIG[type].label` already ships en-only; AR comes
// from the dictionary upstream when those entries are added. We keep the
// label as-is here so missing types degrade gracefully to English.
const ALL_TYPES = Object.entries(NOTIFICATION_TYPE_CONFIG).map(([key, config]) => ({
  value: key as NotificationType,
  label: config.label,
}))

// ── Date range options ───────────────────────────────────────────────────────
// 'all' falls back to school.notifications.all_time (used in the SelectValue
// placeholder); the SelectItem label resolves the same key at render time.
const DATE_RANGES: { value: string; labelKey: string }[] = [
  { value: 'all', labelKey: 'school.notifications.all_time' },
  { value: 'today', labelKey: 'school.notifications.range.today' },
  { value: '7d', labelKey: 'school.notifications.range.7d' },
  { value: '30d', labelKey: 'school.notifications.range.30d' },
]

function getDateFrom(range: string): Date | undefined {
  const now = new Date()
  switch (range) {
    case 'today':
      return new Date(now.getFullYear(), now.getMonth(), now.getDate())
    case '7d':
      return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    case '30d':
      return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
    default:
      return undefined
  }
}

// ── Page Component ───────────────────────────────────────────────────────────

export default function NotificationsPage() {
  const t = useT()
  const [notifications, setNotifications] = useState<TeacherNotification[]>(() =>
    generateMockNotifications(),
  )

  // Filter state
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [dateRange, setDateRange] = useState<string>('all')
  const [classFilter, setClassFilter] = useState<string>('all')
  const [readFilter, setReadFilter] = useState<string>('all')

  // Extract unique classes from notifications
  const classOptions = useMemo(() => {
    const classMap = new Map<string, string>()
    for (const n of notifications) {
      if (n.classId && n.className) {
        classMap.set(n.classId, n.className)
      }
    }
    return Array.from(classMap.entries()).map(([id, name]) => ({
      value: id,
      label: name,
    }))
  }, [notifications])

  // Apply filters
  const filteredNotifications = useMemo(() => {
    return filterNotifications(notifications, {
      types: typeFilter !== 'all' ? [typeFilter as NotificationType] : undefined,
      classId: classFilter !== 'all' ? classFilter : undefined,
      dateFrom: getDateFrom(dateRange),
      readStatus: readFilter as 'all' | 'read' | 'unread',
    })
  }, [notifications, typeFilter, dateRange, classFilter, readFilter])

  const unreadCount = useMemo(() => notifications.filter((n) => !n.read).length, [notifications])

  const handleRead = useCallback((id: string) => {
    markNotificationRead(id)
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }, [])

  const handleMarkAllRead = useCallback(() => {
    const unreadIds = notifications.filter((n) => !n.read).map((n) => n.id)
    markAllNotificationsRead(unreadIds)
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }, [notifications])

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/school"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t('school.sidebar.back_to_dashboard')}
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Bell className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">{t('school.notif.title')}</h1>
              <p className="text-sm text-muted-foreground">
                {unreadCount > 0
                  ? `${unreadCount} ${unreadCount !== 1 ? t('school.notifications.unread_plural') : t('school.notifications.unread_singular')}`
                  : t('school.notifications.all_caught_up')}
              </p>
            </div>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={handleMarkAllRead} className="text-xs">
              <CheckCheck className="mr-1.5 h-3.5 w-3.5" />
              {t('school.notif.mark_all_read')}
            </Button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-3 rounded-lg border border-border bg-card/50 p-3">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Filter className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{t('school.notifications.filters_label')}</span>
        </div>

        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="h-8 w-[170px] text-xs">
            <SelectValue placeholder={t('school.notifications.all_types')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('school.notifications.all_types')}</SelectItem>
            {ALL_TYPES.map((t) => (
              <SelectItem key={t.value} value={t.value}>
                {t.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="h-8 w-[140px] text-xs">
            <SelectValue placeholder={t('school.notifications.all_time')} />
          </SelectTrigger>
          <SelectContent>
            {DATE_RANGES.map((d) => (
              <SelectItem key={d.value} value={d.value}>
                {t(d.labelKey)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={classFilter} onValueChange={setClassFilter}>
          <SelectTrigger className="h-8 w-[160px] text-xs">
            <SelectValue placeholder={t('school.notifications.all_classes')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('school.notifications.all_classes')}</SelectItem>
            {classOptions.map((c) => (
              <SelectItem key={c.value} value={c.value}>
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={readFilter} onValueChange={setReadFilter}>
          <SelectTrigger className="h-8 w-[120px] text-xs">
            <SelectValue placeholder={t('school.notifications.all')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('school.notifications.all')}</SelectItem>
            <SelectItem value="unread">{t('school.notifications.unread')}</SelectItem>
            <SelectItem value="read">{t('school.notifications.read')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Notification list */}
      <div className="space-y-2">
        {filteredNotifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
            <Bell className="mb-3 h-8 w-8 text-muted-foreground/70" />
            <p className="text-sm font-medium text-muted-foreground">
              {t('school.notifications.empty_match')}
            </p>
            <p className="mt-1 text-xs text-muted-foreground/70">
              {t('school.notifications.empty_match_hint')}
            </p>
          </div>
        ) : (
          filteredNotifications.map((notification) => {
            const config = NOTIFICATION_TYPE_CONFIG[notification.type]
            const Icon = getNotificationIcon(notification.type)
            const priorityConf = PRIORITY_CONFIG[notification.priority]

            return (
              <div
                key={notification.id}
                className={cn(
                  'group flex gap-4 rounded-lg border border-border p-4 transition-all',
                  notification.read
                    ? 'bg-card/30 opacity-70 hover:opacity-100'
                    : 'bg-card shadow-sm hover:shadow-md',
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    'flex h-10 w-10 shrink-0 items-center justify-center rounded-full',
                    config.bg,
                  )}
                >
                  <Icon className={cn('h-5 w-5', config.color)} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        {!notification.read && (
                          <span
                            className={cn('inline-block h-2 w-2 rounded-full', priorityConf.dot)}
                          />
                        )}
                        <h3
                          className={cn(
                            'text-sm',
                            notification.read
                              ? 'text-muted-foreground'
                              : 'font-semibold text-foreground',
                          )}
                        >
                          {notification.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {notification.message}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                      {formatTimestamp(notification.timestamp, t)}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="mt-2 flex items-center gap-2">
                    <Badge variant="secondary" className="h-5 text-[10px]">
                      {config.label}
                    </Badge>
                    {notification.className && (
                      <Badge variant="outline" className="h-5 text-[10px]">
                        {notification.className}
                      </Badge>
                    )}
                    <Badge variant="outline" className={cn('h-5 text-[10px]', priorityConf.color)}>
                      {t(priorityConf.labelKey)}
                    </Badge>
                  </div>

                  {/* Actions */}
                  <div className="mt-3 flex items-center gap-2">
                    {notification.actionUrl && (
                      <Link href={notification.actionUrl}>
                        <Button variant="outline" size="sm" className="h-7 text-xs">
                          {t('school.notifications.view_details')}
                        </Button>
                      </Link>
                    )}
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs text-muted-foreground"
                        onClick={() => handleRead(notification.id)}
                      >
                        {t('school.notifications.mark_as_read')}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Summary footer */}
      {filteredNotifications.length > 0 && (
        <div className="mt-6 text-center text-xs text-muted-foreground">
          {t('school.notifications.footer.showing')} {filteredNotifications.length}{' '}
          {t('school.notifications.footer.of')} {notifications.length}{' '}
          {notifications.length !== 1
            ? t('school.notifications.footer.notification_plural')
            : t('school.notifications.footer.notification_singular')}
        </div>
      )}
    </div>
  )
}
