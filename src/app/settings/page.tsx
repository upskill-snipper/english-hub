'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  Bell,
  Mail,
  Settings as SettingsIcon,
  User as UserIcon,
} from 'lucide-react'

import { useAuthStore } from '@/store/auth-store'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { Button } from '@/components/ui/button'
import { ChangeBoardButton } from '@/components/board/ChangeBoardButton'
import { useT } from '@/lib/i18n/use-t'

export default function SettingsPage() {
  const t = useT()
  const { user, profile } = useAuthStore()
  const { board, isHydrated } = useBoard()
  const config = getBoardConfig(board)

  // ICO Children's Code: child users (under-16) get privacy-safe defaults.
  // Streak nudges and marketing notifications are OFF for children.
  const isChildUser = profile?.is_minor === true && profile?.streaks_enabled === false

  // Notification preferences (simple local stub - wire to backend later).
  const [emailNotifications, setEmailNotifications] = useState(!isChildUser)
  const [productUpdates, setProductUpdates] = useState(true)

  useEffect(() => {
    // Hydrate notification prefs from profile if available.
    if (profile && typeof profile === 'object') {
      const p = profile as unknown as Record<string, unknown>
      if (typeof p.email_notifications === 'boolean') {
        setEmailNotifications(p.email_notifications)
      } else if (profile.streak_notifications === false) {
        // Children's Code: streak nudge emails default to off for children
        setEmailNotifications(false)
      }
      if (typeof p.product_updates === 'boolean') {
        setProductUpdates(p.product_updates)
      }
    }
  }, [profile])

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/dashboard"
          className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {t('settings.back_to_dashboard')}
        </Link>

        <div className="mb-8 flex items-center gap-3">
          <SettingsIcon className="size-6 text-primary" aria-hidden="true" />
          <h1 className="text-3xl font-bold text-foreground">{t('settings.title')}</h1>
        </div>

        {/* ─── Your exam board ───────────────────────────────────── */}
        <section
          aria-labelledby="board-heading"
          className="mb-6 rounded-xl border border-border bg-card p-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <BookOpen className="size-5 text-primary" aria-hidden="true" />
            <h2 id="board-heading" className="text-xl font-semibold text-foreground">
              {t('settings.board.heading')}
            </h2>
          </div>

          {!isHydrated ? (
            <div className="h-24 animate-pulse rounded-lg bg-muted/40" />
          ) : config ? (
            <>
              <div className="mb-4 rounded-lg border border-border bg-background/40 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {t('settings.board.currently_studying')}
                </p>
                <p className="mt-1 text-lg font-semibold text-foreground">{config.fullName}</p>
                <p className="mt-1 text-sm text-muted-foreground">{config.description}</p>
              </div>

              <div
                role="note"
                className="mb-4 flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-50 p-3 text-sm text-amber-700"
              >
                <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <p>{t('settings.board.change_warning')}</p>
              </div>

              <ChangeBoardButton variant="card" />
            </>
          ) : (
            <>
              <p className="mb-4 text-sm text-muted-foreground">{t('settings.board.empty')}</p>
              <Button variant="default" size="lg" render={<Link href="/board-select" />}>
                <BookOpen className="size-4" />
                {t('settings.board.choose_cta')}
              </Button>
            </>
          )}
        </section>

        {/* ─── Account ───────────────────────────────────────────── */}
        <section
          aria-labelledby="account-heading"
          className="mb-6 rounded-xl border border-border bg-card p-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <UserIcon className="size-5 text-primary" aria-hidden="true" />
            <h2 id="account-heading" className="text-xl font-semibold text-foreground">
              {t('settings.account.heading')}
            </h2>
          </div>

          <div className="space-y-3">
            <div>
              <label className="label">{t('settings.account.email_label')}</label>
              <input
                type="email"
                value={user?.email ?? ''}
                disabled
                className="input-field cursor-not-allowed opacity-60"
              />
              <p className="mt-1 text-xs text-muted-foreground">
                {t('settings.account.full_settings_prefix')}{' '}
                <Link href="/account" className="text-primary underline-offset-4 hover:underline">
                  {t('settings.account.account_page_link')}
                </Link>
                {t('settings.account.full_settings_suffix')}
              </p>
            </div>
          </div>
        </section>

        {/* ─── Notifications ─────────────────────────────────────── */}
        <section
          aria-labelledby="notifications-heading"
          className="rounded-xl border border-border bg-card p-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <Bell className="size-5 text-primary" aria-hidden="true" />
            <h2 id="notifications-heading" className="text-xl font-semibold text-foreground">
              {t('settings.notifications.heading')}
            </h2>
          </div>

          <div className="space-y-4">
            <NotificationToggle
              icon={<Mail className="size-4" />}
              label={t('settings.notifications.email_label')}
              description={t('settings.notifications.email_description')}
              checked={emailNotifications}
              onChange={setEmailNotifications}
            />
            <NotificationToggle
              icon={<Bell className="size-4" />}
              label={t('settings.notifications.product_label')}
              description={t('settings.notifications.product_description')}
              checked={productUpdates}
              onChange={setProductUpdates}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

// ─── Helpers ────────────────────────────────────────────────────────────

function NotificationToggle({
  icon,
  label,
  description,
  checked,
  onChange,
}: {
  icon: React.ReactNode
  label: string
  description: string
  checked: boolean
  onChange: (next: boolean) => void
}) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4 rounded-lg border border-border bg-background/40 p-4 transition-colors hover:border-primary/30">
      <span className="flex items-start gap-3">
        <span className="mt-0.5 text-muted-foreground" aria-hidden="true">
          {icon}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-medium text-foreground">{label}</span>
          <span className="text-xs text-muted-foreground">{description}</span>
        </span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 size-4 cursor-pointer accent-primary"
        aria-label={label}
      />
    </label>
  )
}
