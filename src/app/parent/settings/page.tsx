'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Bell,
  Bot,
  CheckCircle2,
  CreditCard,
  ExternalLink,
  Loader2,
  Lock,
  Mail,
  Shield,
  User,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { isAiOptedOut, setAiOptedOut } from '@/lib/ai-preferences'
import { useT } from '@/lib/i18n/use-t'

const PARENT_ACCOUNT_KEY = 'english-hub-parent-account'

interface ParentAccount {
  name?: string
  email?: string
  childName?: string
  linkCode?: string
  notifications?: {
    weeklyReport?: boolean
    gradeAlerts?: boolean
    inactivityAlerts?: boolean
    productUpdates?: boolean
  }
}

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

export default function ParentSettingsPage() {
  const t = useT()
  const [mounted, setMounted] = useState(false)
  const [account, setAccount] = useState<ParentAccount | null>(null)

  // Notification toggles
  const [weeklyReport, setWeeklyReport] = useState(true)
  const [gradeAlerts, setGradeAlerts] = useState(true)
  const [inactivityAlerts, setInactivityAlerts] = useState(false)
  const [productUpdates, setProductUpdates] = useState(false)

  // Password fields
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordLoading, setPasswordLoading] = useState(false)
  const [passwordMessage, setPasswordMessage] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)

  // AI opt-out (Children's Code — GAP-12B)
  const [aiEnabled, setAiEnabled] = useState(true)

  // Save-state for notifications
  const [savedRecently, setSavedRecently] = useState(false)

  useEffect(() => {
    setMounted(true)
    const acc = safeParse<ParentAccount>(localStorage.getItem(PARENT_ACCOUNT_KEY))
    if (acc) {
      setAccount(acc)
      setWeeklyReport(acc.notifications?.weeklyReport ?? true)
      setGradeAlerts(acc.notifications?.gradeAlerts ?? true)
      setInactivityAlerts(acc.notifications?.inactivityAlerts ?? false)
      setProductUpdates(acc.notifications?.productUpdates ?? false)
    }
    setAiEnabled(!isAiOptedOut())
  }, [])

  function saveNotifications() {
    // [P2:data] Supabase — update parent_profile.notifications
    const next: ParentAccount = {
      ...(account ?? {}),
      notifications: {
        weeklyReport,
        gradeAlerts,
        inactivityAlerts,
        productUpdates,
      },
    }
    localStorage.setItem(PARENT_ACCOUNT_KEY, JSON.stringify(next))
    setAccount(next)
    setSavedRecently(true)
    window.setTimeout(() => setSavedRecently(false), 2000)
  }

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault()
    setPasswordError(null)
    setPasswordMessage(null)

    if (!currentPassword) {
      setPasswordError(t('parent.password_current_required'))
      return
    }
    if (newPassword.length < 8) {
      setPasswordError(t('parent.password_min_length'))
      return
    }
    if (newPassword !== confirmPassword) {
      setPasswordError(t('parent.password_mismatch'))
      return
    }

    setPasswordLoading(true)
    try {
      // [P2:auth] Supabase — replace with supabase.auth.updateUser({ password })
      await new Promise((resolve) => setTimeout(resolve, 400))
      setPasswordMessage(t('parent.password_updated'))
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch {
      setPasswordError(t('parent.password_update_failed'))
    } finally {
      setPasswordLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          {t('parent.nav.settings')}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{t('parent.settings_subtitle')}</p>
      </div>

      {/* Account info */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            <CardTitle className="text-base">{t('parent.account')}</CardTitle>
          </div>
          <CardDescription>{t('parent.account_desc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">{t('parent.full_name')}</Label>
              <Input
                id="name"
                type="text"
                value={mounted ? (account?.name ?? '') : ''}
                readOnly
                placeholder="—"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">{t('parent.email')}</Label>
              <Input
                id="email"
                type="email"
                value={mounted ? (account?.email ?? '') : ''}
                readOnly
                placeholder="—"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="child">{t('parent.linked_child')}</Label>
              <Input
                id="child"
                type="text"
                value={mounted ? (account?.childName ?? '') : ''}
                readOnly
                placeholder="—"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="linkCode">{t('parent.link_code')}</Label>
              <Input
                id="linkCode"
                type="text"
                value={mounted ? (account?.linkCode ?? '') : ''}
                readOnly
                placeholder="—"
                className="uppercase tracking-wider"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            {t('parent.contact_support_prefix')}{' '}
            <a
              href="mailto:support@theenglishhub.app"
              className="text-primary underline-offset-2 hover:underline"
            >
              support@theenglishhub.app
            </a>
            .
          </p>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-primary" />
            <CardTitle className="text-base">{t('parent.notifications_title')}</CardTitle>
          </div>
          <CardDescription>{t('parent.notifications_desc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-0">
          {[
            {
              key: 'weekly',
              label: t('parent.notif_weekly_label'),
              description: t('parent.notif_weekly_desc'),
              value: weeklyReport,
              setter: setWeeklyReport,
            },
            {
              key: 'grade',
              label: t('parent.notif_grade_label'),
              description: t('parent.notif_grade_desc'),
              value: gradeAlerts,
              setter: setGradeAlerts,
            },
            {
              key: 'inactivity',
              label: t('parent.notif_inactivity_label'),
              description: t('parent.notif_inactivity_desc'),
              value: inactivityAlerts,
              setter: setInactivityAlerts,
            },
            {
              key: 'updates',
              label: t('parent.notif_updates_label'),
              description: t('parent.notif_updates_desc'),
              value: productUpdates,
              setter: setProductUpdates,
            },
          ].map((item, index, arr) => (
            <div key={item.key}>
              <label className="flex cursor-pointer items-start justify-between gap-4 py-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
                <input
                  type="checkbox"
                  checked={item.value}
                  onChange={(e) => item.setter(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border border-input accent-primary"
                />
              </label>
              {index < arr.length - 1 && <Separator />}
            </div>
          ))}
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">
              {savedRecently ? (
                <span className="inline-flex items-center gap-1 text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {t('parent.saved_dot')}
                </span>
              ) : (
                t('parent.changes_saved_locally')
              )}
            </p>
            <Button size="sm" onClick={saveNotifications}>
              <Mail className="h-4 w-4" />
              {t('parent.save_preferences')}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* AI Features — Children's Code compliance (GAP-12B) */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-primary" />
            <CardTitle className="text-base">{t('parent.ai_features_title')}</CardTitle>
          </div>
          <CardDescription>{t('parent.ai_features_desc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <label className="flex cursor-pointer items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground">{t('parent.ai_toggle_label')}</p>
              <p className="text-xs text-muted-foreground">{t('parent.ai_toggle_desc')}</p>
            </div>
            <Switch
              checked={aiEnabled}
              onCheckedChange={(checked: boolean) => {
                setAiEnabled(checked)
                setAiOptedOut(!checked)
                // Sync to server for server-side enforcement (Children's Code — GAP-12B)
                fetch('/api/privacy/settings', {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ aiOptOut: !checked }),
                }).catch(() => {})
              }}
            />
          </label>
          <div className="rounded-lg border border-border bg-muted/50 p-4 text-xs text-muted-foreground space-y-2">
            <p>
              <strong className="text-foreground">{t('parent.ai_q_what_sees')}</strong>{' '}
              {t('parent.ai_a_what_sees')}
            </p>
            <p>
              <strong className="text-foreground">{t('parent.ai_q_provider')}</strong>{' '}
              {t('parent.ai_a_provider')}
            </p>
            <p>
              <Link
                href="/marking/ai-explainer"
                className="text-primary underline-offset-2 hover:underline"
              >
                {t('parent.ai_explainer_link')} &rarr;
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Password */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-primary" />
            <CardTitle className="text-base">{t('parent.change_password')}</CardTitle>
          </div>
          <CardDescription>{t('parent.password_hint')}</CardDescription>
        </CardHeader>
        <CardContent>
          {passwordError && (
            <div className="mb-4 rounded-md border border-destructive/40 bg-destructive/10 px-4 py-2 text-sm text-destructive">
              {passwordError}
            </div>
          )}
          {passwordMessage && (
            <div className="mb-4 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-primary">
              {passwordMessage}
            </div>
          )}
          <form onSubmit={handlePasswordChange} className="space-y-4" noValidate>
            <div className="space-y-1.5">
              <Label htmlFor="currentPassword">{t('parent.current_password')}</Label>
              <Input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="newPassword">{t('parent.new_password')}</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword">{t('parent.confirm_new_password')}</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" disabled={passwordLoading}>
                {passwordLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t('parent.updating')}
                  </>
                ) : (
                  t('parent.update_password')
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Billing */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-primary" />
            <CardTitle className="text-base">{t('parent.billing_title')}</CardTitle>
          </div>
          <CardDescription>{t('parent.billing_desc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-border bg-background p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-foreground">
                    {t('parent.parent_addon')}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {t('parent.badge_active')}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{t('parent.addon_renewal')}</p>
              </div>
              <Button variant="outline" size="sm" render={<Link href="/pricing" />}>
                {t('parent.manage_billing')}
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-start gap-2 rounded-lg border border-border bg-primary/10 p-3 text-sm text-primary">
            <Shield className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{t('parent.billing_note')}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
