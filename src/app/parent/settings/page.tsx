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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { isAiOptedOut, setAiOptedOut } from '@/lib/ai-preferences'

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
      setPasswordError('Enter your current password.')
      return
    }
    if (newPassword.length < 8) {
      setPasswordError('New password must be at least 8 characters.')
      return
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match.')
      return
    }

    setPasswordLoading(true)
    try {
      // [P2:auth] Supabase — replace with supabase.auth.updateUser({ password })
      await new Promise((resolve) => setTimeout(resolve, 400))
      setPasswordMessage('Password updated.')
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch {
      setPasswordError('Could not update password.')
    } finally {
      setPasswordLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your account, notifications and billing.
        </p>
      </div>

      {/* Account info */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            <CardTitle className="text-base">Account</CardTitle>
          </div>
          <CardDescription>
            Your profile details on The English Hub parent portal.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                type="text"
                value={mounted ? account?.name ?? '' : ''}
                readOnly
                placeholder="—"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={mounted ? account?.email ?? '' : ''}
                readOnly
                placeholder="—"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="child">Linked child</Label>
              <Input
                id="child"
                type="text"
                value={mounted ? account?.childName ?? '' : ''}
                readOnly
                placeholder="—"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="linkCode">Link code</Label>
              <Input
                id="linkCode"
                type="text"
                value={mounted ? account?.linkCode ?? '' : ''}
                readOnly
                placeholder="—"
                className="uppercase tracking-wider"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            To update your name or email, contact support at{' '}
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
            <CardTitle className="text-base">Notifications</CardTitle>
          </div>
          <CardDescription>
            Choose which emails you&apos;d like to receive.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-0">
          {[
            {
              key: 'weekly',
              label: 'Weekly progress report',
              description: 'Sent every Sunday evening with a full summary.',
              value: weeklyReport,
              setter: setWeeklyReport,
            },
            {
              key: 'grade',
              label: 'Grade milestone alerts',
              description: 'Notify me when my child achieves a new grade level.',
              value: gradeAlerts,
              setter: setGradeAlerts,
            },
            {
              key: 'inactivity',
              label: 'Inactivity reminders',
              description: 'Let me know if no learning has happened for 5+ days.',
              value: inactivityAlerts,
              setter: setInactivityAlerts,
            },
            {
              key: 'updates',
              label: 'Product updates',
              description: 'Occasional emails about new features and resources.',
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
                  Saved.
                </span>
              ) : (
                'Changes are saved locally for now.'
              )}
            </p>
            <Button size="sm" onClick={saveNotifications}>
              <Mail className="h-4 w-4" />
              Save preferences
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* AI Features — Children's Code compliance (GAP-12B) */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-primary" />
            <CardTitle className="text-base">AI Features</CardTitle>
          </div>
          <CardDescription>
            Control whether AI-powered features (like essay marking) are enabled
            for your child&apos;s account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <label className="flex cursor-pointer items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground">
                Enable AI essay marking
              </p>
              <p className="text-xs text-muted-foreground">
                When turned on, your child can submit essays and receive
                AI-generated feedback and predicted grades. When turned off,
                the AI marking feature will be hidden and no data will be sent
                to the AI provider.
              </p>
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
              <strong className="text-foreground">What does the AI see?</strong>{' '}
              Only the essay text and the question chosen. No names, emails, or
              other personal information is sent.
            </p>
            <p>
              <strong className="text-foreground">Who provides the AI?</strong>{' '}
              We use Claude by Anthropic. Your child&apos;s essays are not used
              to train AI models.
            </p>
            <p>
              <Link
                href="/marking/ai-explainer"
                className="text-primary underline-offset-2 hover:underline"
              >
                Read the full AI marking explainer &rarr;
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
            <CardTitle className="text-base">Change password</CardTitle>
          </div>
          <CardDescription>
            Use at least 8 characters. You&apos;ll stay signed in after changing.
          </CardDescription>
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
              <Label htmlFor="currentPassword">Current password</Label>
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
                <Label htmlFor="newPassword">New password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword">Confirm new password</Label>
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
                    Updating...
                  </>
                ) : (
                  'Update password'
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
            <CardTitle className="text-base">Billing</CardTitle>
          </div>
          <CardDescription>
            Manage your subscription and payment details.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-border bg-background p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-foreground">
                    Parent Add-on
                  </p>
                  <Badge variant="secondary" className="text-xs">Active</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Added to your child&apos;s subscription &middot; Next renewal 1 May 2026
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                render={<Link href="/pricing" />}
              >
                Manage billing
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-start gap-2 rounded-lg border border-border bg-primary/10 p-3 text-sm text-primary">
            <Shield className="mt-0.5 h-4 w-4 shrink-0" />
            <p>
              Billing is managed through the main student account. View invoices and
              update your payment method from the pricing page.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
