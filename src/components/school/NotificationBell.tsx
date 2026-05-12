'use client'

import { Bell } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'

interface NotificationBellProps {
  unreadCount: number
  onClick: () => void
  className?: string
}

export function NotificationBell({ unreadCount, onClick, className }: NotificationBellProps) {
  const t = useT()
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn('relative h-9 w-9', className)}
      onClick={onClick}
      aria-label={`${t('school.notif.bell')}${unreadCount > 0 ? ` (${unreadCount} ${t('school.notif.unread_short')})` : ''}`}
    >
      <Bell className="h-4.5 w-4.5 text-muted-foreground" />
      {unreadCount > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground">
          {unreadCount > 99 ? '99+' : unreadCount}
        </span>
      )}
    </Button>
  )
}
