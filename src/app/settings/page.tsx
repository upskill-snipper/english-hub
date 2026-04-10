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

export default function SettingsPage() {
  const { user, profile } = useAuthStore()
  const { board, isHydrated } = useBoard()
  const config = getBoardConfig(board)

  // Notification preferences (simple local stub — wire to backend later).
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [productUpdates, setProductUpdates] = useState(true)

  useEffect(() => {
    // Hydrate notification prefs from profile if available.
    if (profile && typeof profile === 'object') {
      const p = profile as Record<string, unknown>
      if (typeof p.email_notifications === 'boolean') {
        setEmailNotifications(p.email_notifications)
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
          Back to dashboard
        </Link>

        <div className="mb-8 flex items-center gap-3">
          <SettingsIcon className="size-6 text-primary" aria-hidden="true" />
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        </div>

        {/* ─── Your exam board ───────────────────────────────────── */}
        <section
          aria-labelledby="board-heading"
          className="mb-6 rounded-xl border border-border bg-card p-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <BookOpen className="size-5 text-primary" aria-hidden="true" />
            <h2
              id="board-heading"
              className="text-xl font-semibold text-foreground"
            >
              Your exam board
            </h2>
          </div>

          {!isHydrated ? (
            <div className="h-24 animate-pulse rounded-lg bg-muted/40" />
          ) : config ? (
            <>
              <div className="mb-4 rounded-lg border border-border bg-background/40 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Currently studying
                </p>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  {config.fullName}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {config.description}
                </p>
              </div>

              <div
                role="note"
                className="mb-4 flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-300"
              >
                <AlertTriangle
                  className="mt-0.5 size-4 shrink-0"
                  aria-hidden="true"
                />
                <p>
                  Changing your board will filter your content to the new
                  board. Your progress is preserved.
                </p>
              </div>

              <ChangeBoardButton variant="card" />
            </>
          ) : (
            <>
              <p className="mb-4 text-sm text-muted-foreground">
                You haven't picked an exam board yet. Choose one to personalise
                your revision content.
              </p>
              <Button
                variant="default"
                size="lg"
                render={<Link href="/board-select" />}
              >
                <BookOpen className="size-4" />
                Choose your exam board
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
            <h2
              id="account-heading"
              className="text-xl font-semibold text-foreground"
            >
              Account
            </h2>
          </div>

          <div className="space-y-3">
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                value={user?.email ?? ''}
                disabled
                className="input-field cursor-not-allowed opacity-60"
              />
              <p className="mt-1 text-xs text-muted-foreground">
                For full account settings (name, password, deletion) visit your{' '}
                <Link
                  href="/account"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  account page
                </Link>
                .
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
            <h2
              id="notifications-heading"
              className="text-xl font-semibold text-foreground"
            >
              Notifications
            </h2>
          </div>

          <div className="space-y-4">
            <NotificationToggle
              icon={<Mail className="size-4" />}
              label="Email reminders"
              description="Weekly revision reminders and study streak nudges."
              checked={emailNotifications}
              onChange={setEmailNotifications}
            />
            <NotificationToggle
              icon={<Bell className="size-4" />}
              label="Product updates"
              description="Occasional announcements about new features."
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
