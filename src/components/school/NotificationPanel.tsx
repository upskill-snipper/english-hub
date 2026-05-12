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
  Bell,
  CheckCheck,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  type TeacherNotification,
  type NotificationType,
  NOTIFICATION_TYPE_CONFIG,
  markNotificationRead,
  markAllNotificationsRead,
} from '@/lib/teacher-notifications'
import { useT } from '@/lib/i18n/use-t'

// ── Icon resolver ────────────────────────────────────────────────────────────

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
  // Special case: grade prediction uses direction-specific icon
  if (type === 'grade_prediction_change') return TrendingUp
  return ICON_MAP[config.emoji] ?? AlertTriangle
}

// ── Relative time ────────────────────────────────────────────────────────────

function formatRelativeTime(iso: string): string {
  const date = new Date(iso)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffSec = Math.floor(diffMs / 1000)
  const diffMin = Math.floor(diffSec / 60)
  const diffHours = Math.floor(diffMin / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffSec < 60) return 'Just now'
  if (diffMin < 60) return `${diffMin}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays}d ago`
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

// ── Priority badge ───────────────────────────────────────────────────────────

function PriorityDot({ priority }: { priority: TeacherNotification['priority'] }) {
  const colors = {
    high: 'bg-red-500',
    medium: 'bg-amber-500',
    low: 'bg-green-500',
  }
  return (
    <span
      className={cn('inline-block h-2 w-2 rounded-full shrink-0', colors[priority])}
      aria-label={`${priority} priority`}
    />
  )
}

// ── Notification Item ────────────────────────────────────────────────────────

function NotificationItem({
  notification,
  onRead,
}: {
  notification: TeacherNotification
  onRead: (id: string) => void
}) {
  const config = NOTIFICATION_TYPE_CONFIG[notification.type]
  const Icon = getNotificationIcon(notification.type)

  const handleClick = () => {
    if (!notification.read) {
      onRead(notification.id)
    }
  }

  const content = (
    <div
      className={cn(
        'flex gap-3 rounded-lg px-3 py-2.5 transition-colors cursor-pointer',
        notification.read ? 'opacity-60 hover:bg-accent/50' : 'bg-accent/30 hover:bg-accent/50',
      )}
      onClick={handleClick}
    >
      {/* Icon */}
      <div
        className={cn('flex h-8 w-8 shrink-0 items-center justify-center rounded-full', config.bg)}
      >
        <Icon className={cn('h-4 w-4', config.color)} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-1.5">
            {!notification.read && <PriorityDot priority={notification.priority} />}
            <p
              className={cn(
                'text-sm leading-snug',
                notification.read ? 'text-muted-foreground' : 'font-medium text-foreground',
              )}
            >
              {notification.title}
            </p>
          </div>
          <span className="shrink-0 text-[10px] text-muted-foreground tabular-nums mt-0.5">
            {formatRelativeTime(notification.timestamp)}
          </span>
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {notification.message}
        </p>
        {notification.className && (
          <Badge variant="secondary" className="mt-1 h-4.5 text-[10px] px-1.5">
            {notification.className}
          </Badge>
        )}
      </div>
    </div>
  )

  if (notification.actionUrl) {
    return (
      <Link href={notification.actionUrl} onClick={handleClick}>
        {content}
      </Link>
    )
  }

  return content
}

// ── Panel Component ──────────────────────────────────────────────────────────

interface NotificationPanelProps {
  notifications: TeacherNotification[]
  onNotificationsChange: (updated: TeacherNotification[]) => void
  maxItems?: number
}

export function NotificationPanel({
  notifications,
  onNotificationsChange,
  maxItems = 20,
}: NotificationPanelProps) {
  const t = useT()
  const [open, setOpen] = useState(false)

  const unreadCount = useMemo(() => notifications.filter((n) => !n.read).length, [notifications])

  const displayNotifications = useMemo(
    () => notifications.slice(0, maxItems),
    [notifications, maxItems],
  )

  const handleRead = useCallback(
    (id: string) => {
      markNotificationRead(id)
      onNotificationsChange(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
    },
    [notifications, onNotificationsChange],
  )

  const handleMarkAllRead = useCallback(() => {
    const unreadIds = notifications.filter((n) => !n.read).map((n) => n.id)
    markAllNotificationsRead(unreadIds)
    onNotificationsChange(notifications.map((n) => ({ ...n, read: true })))
  }, [notifications, onNotificationsChange])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="relative inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent transition-colors">
        <Bell className="h-4.5 w-4.5 text-muted-foreground" />
        {unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={8} className="w-96 p-0">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-foreground">{t('school.notif.title')}</h3>
            {unreadCount > 0 && (
              <Badge variant="default" className="h-5 text-[10px] px-1.5">
                {unreadCount}
              </Badge>
            )}
          </div>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs text-muted-foreground"
              onClick={handleMarkAllRead}
            >
              <CheckCheck className="mr-1 h-3.5 w-3.5" />
              {t('school.notif.mark_all_read')}
            </Button>
          )}
        </div>

        {/* Notification list */}
        <ScrollArea className="max-h-[400px]">
          <div className="p-1.5 space-y-0.5">
            {displayNotifications.length === 0 ? (
              <div className="flex items-center justify-center py-8 text-sm text-muted-foreground">
                {t('school.notif.empty')}
              </div>
            ) : (
              displayNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onRead={handleRead}
                />
              ))
            )}
          </div>
        </ScrollArea>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="border-t border-border p-2">
            <Link
              href="/school/notifications"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-md py-1.5 text-xs font-medium text-primary hover:bg-accent transition-colors"
            >
              {t('school.notif.view_all')}
            </Link>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
