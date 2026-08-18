'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { ToastProvider, useToast } from '@/components/ui/Toast'
import { useT } from '@/lib/i18n/use-t'

// ─── Inline wrappers ────────────────────────────────────────────────────

/** Input with label, error, and helpText support wrapping the base shadcn Input */
function LabeledInput({
  label,
  error,
  helpText,
  id,
  className,
  ...props
}: React.ComponentProps<typeof Input> & {
  label?: string
  error?: string
  helpText?: string
}) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="space-y-1.5">
      {label && (
        <Label htmlFor={inputId} className="text-sm font-medium text-foreground">
          {label}
        </Label>
      )}
      <Input id={inputId} aria-invalid={!!error} className={className} {...props} />
      {error && <p className="text-xs text-destructive">{error}</p>}
      {!error && helpText && <p className="text-xs text-muted-foreground">{helpText}</p>}
    </div>
  )
}

/** Button wrapper that adds a loading spinner and disables while loading */
function LoadingButton({
  loading,
  disabled,
  children,
  ...props
}: React.ComponentProps<typeof Button> & { loading?: boolean }) {
  return (
    <Button disabled={disabled || loading} {...props}>
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </Button>
  )
}

// ─── Types ──────────────────────────────────────────────────────────────

interface UserProfile {
  id: string
  email: string
  firstName: string
  lastName: string
  age: number
  isMinor: boolean
  school: string | null
  country: string
  createdAt: string
}

// ─── Country labels ─────────────────────────────────────────────────────

const COUNTRY_LABELS: Record<string, string> = {
  UK: 'United Kingdom',
  QA: 'Qatar',
  OTHER: 'Other',
}

// ─── Password requirements helper ───────────────────────────────────────

interface PasswordCheck {
  label: string
  met: boolean
}

function getPasswordChecks(password: string): PasswordCheck[] {
  return [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'One uppercase letter', met: /[A-Z]/.test(password) },
    { label: 'One lowercase letter', met: /[a-z]/.test(password) },
    { label: 'One number', met: /[0-9]/.test(password) },
  ]
}

// ═══════════════════════════════════════════════════════════════════════
// Profile Tab
// ═══════════════════════════════════════════════════════════════════════

function ProfileTab({
  profile,
  onProfileUpdated,
}: {
  profile: UserProfile
  onProfileUpdated: (p: UserProfile) => void
}) {
  const { toast } = useToast()
  const [firstName, setFirstName] = useState(profile.firstName)
  const [lastName, setLastName] = useState(profile.lastName)
  const [school, setSchool] = useState(profile.school ?? '')
  const [saving, setSaving] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const isDirty =
    firstName !== profile.firstName ||
    lastName !== profile.lastName ||
    (school || null) !== profile.school

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setErrors({})

    if (!firstName.trim()) {
      setErrors({ firstName: 'First name is required' })
      return
    }
    if (!lastName.trim()) {
      setErrors({ lastName: 'Last name is required' })
      return
    }

    setSaving(true)
    try {
      const res = await fetch('/api/user/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          school: school.trim() || null,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        if (data.errors) {
          const flat: Record<string, string> = {}
          for (const [key, msgs] of Object.entries(data.errors)) {
            flat[key] = (msgs as string[])[0]
          }
          setErrors(flat)
        } else {
          toast('error', data.error || 'Failed to save profile.')
        }
        return
      }

      onProfileUpdated({
        ...profile,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        school: data.user.school,
      })
      toast('success', 'Profile updated successfully.')
    } catch {
      toast('error', 'Something went wrong. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSave} className="space-y-6 max-w-lg">
      <div className="grid gap-4 sm:grid-cols-2">
        <LabeledInput
          label="First name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          error={errors.firstName}
          maxLength={50}
        />
        <LabeledInput
          label="Last name"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error={errors.lastName}
          maxLength={50}
        />
      </div>

      <LabeledInput
        label="School"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        helpText="Optional"
        maxLength={200}
      />

      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-foreground">Email</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.email}</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Contact support to change your email address.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <p className="text-sm font-medium text-foreground">Age</p>
            <p className="mt-1 text-sm text-muted-foreground">{profile.age}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Minor status</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {profile.isMinor ? (
                <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-clay-600">
                  Under 18
                </span>
              ) : (
                <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
                  Adult
                </span>
              )}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Country</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {COUNTRY_LABELS[profile.country] ?? profile.country}
            </p>
          </div>
        </div>
      </div>

      <LoadingButton type="submit" loading={saving} disabled={!isDirty}>
        Save changes
      </LoadingButton>
    </form>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// Password Tab
// ═══════════════════════════════════════════════════════════════════════

function PasswordTab() {
  const { toast } = useToast()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [saving, setSaving] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const checks = getPasswordChecks(newPassword)
  const allChecksMet = checks.every((c) => c.met)
  const passwordsMatch = newPassword === confirmPassword
  const canSubmit =
    currentPassword.length > 0 && allChecksMet && confirmPassword.length > 0 && passwordsMatch

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrors({})

    if (!canSubmit) return

    setSaving(true)
    try {
      const res = await fetch('/api/user/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword,
          newPassword,
          confirmNewPassword: confirmPassword,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        if (data.errors) {
          const flat: Record<string, string> = {}
          for (const [key, msgs] of Object.entries(data.errors)) {
            flat[key] = (msgs as string[])[0]
          }
          setErrors(flat)
        } else {
          toast('error', data.error || 'Failed to change password.')
        }
        return
      }

      toast('success', 'Password changed successfully.')
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch {
      toast('error', 'Something went wrong. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      <LabeledInput
        label="Current password"
        type="password"
        required
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        error={errors.currentPassword}
        autoComplete="current-password"
      />

      <div>
        <LabeledInput
          label="New password"
          type="password"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          error={errors.newPassword}
          autoComplete="new-password"
        />
        {newPassword.length > 0 && (
          <ul className="mt-2 space-y-1" aria-label="Password requirements">
            {checks.map((check) => (
              <li
                key={check.label}
                className={`flex items-center gap-2 text-xs ${
                  check.met ? 'text-green-600' : 'text-muted-foreground'
                }`}
              >
                {check.met ? (
                  <svg
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <circle cx="10" cy="10" r="7" />
                  </svg>
                )}
                {check.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <LabeledInput
        label="Confirm new password"
        type="password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={
          errors.confirmNewPassword ||
          (confirmPassword.length > 0 && !passwordsMatch ? 'Passwords do not match' : undefined)
        }
        autoComplete="new-password"
      />

      <LoadingButton type="submit" loading={saving} disabled={!canSubmit}>
        Change password
      </LoadingButton>
    </form>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// Communication Tab
// ═══════════════════════════════════════════════════════════════════════

function CommunicationTab() {
  return (
    <div className="space-y-4 max-w-lg">
      <div>
        <h3 className="text-sm font-semibold text-foreground">Email preferences</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Choices about marketing and other optional emails are consent decisions, so they are
          managed in one place: the consent centre. Changes you make there take effect immediately
          and are recorded on your consent history.
        </p>
      </div>
      <nav className="space-y-2" aria-label="Communication preferences navigation">
        <Link
          href="/dashboard/consent"
          className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm text-foreground hover:border-accent/40 hover:bg-muted transition-colors"
        >
          <span>Manage email and consent preferences</span>
          <ChevronRightIcon />
        </Link>
      </nav>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// Subscription Tab
// ═══════════════════════════════════════════════════════════════════════

function SubscriptionTab() {
  return (
    <div className="space-y-4 max-w-lg">
      <div>
        <h3 className="text-sm font-semibold text-foreground">Subscription and billing</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Your plan, billing status and cancellation options are managed on the subscription page,
          which always shows your real, up-to-date details.
        </p>
      </div>
      <nav className="space-y-2" aria-label="Subscription navigation">
        <Link
          href="/dashboard/subscription"
          className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm text-foreground hover:border-accent/40 hover:bg-muted transition-colors"
        >
          <span>Manage subscription</span>
          <ChevronRightIcon />
        </Link>
        <Link
          href="/account/billing"
          className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm text-foreground hover:border-accent/40 hover:bg-muted transition-colors"
        >
          <span>Plans and purchases</span>
          <ChevronRightIcon />
        </Link>
      </nav>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// Data & Privacy Tab
// ═══════════════════════════════════════════════════════════════════════

function DataPrivacyTab() {
  return (
    <div className="space-y-8 max-w-lg">
      {/* Links */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Privacy management</h3>
        <nav className="space-y-2" aria-label="Privacy settings navigation">
          <Link
            href="/dashboard/privacy"
            className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm text-foreground hover:border-accent/40 hover:bg-muted transition-colors"
          >
            <span>Privacy Settings</span>
            <ChevronRightIcon />
          </Link>
          <Link
            href="/dashboard/data-requests"
            className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm text-foreground hover:border-accent/40 hover:bg-muted transition-colors"
          >
            <span>Data Rights (DSAR)</span>
            <ChevronRightIcon />
          </Link>
          <Link
            href="/dashboard/consent"
            className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm text-foreground hover:border-accent/40 hover:bg-muted transition-colors"
          >
            <span>Consent Management</span>
            <ChevronRightIcon />
          </Link>
        </nav>
      </div>

      {/* Data export */}
      <div>
        <h3 className="text-sm font-semibold text-foreground">Download your data</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Get a copy of all the data we hold about you as a file downloaded straight to your device,
          from the data export page.
        </p>
        <Link
          href="/account/data-export"
          className="mt-3 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-accent/40 hover:bg-muted transition-colors"
        >
          Go to data export
          <ChevronRightIcon />
        </Link>
      </div>

      {/* Delete account */}
      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
        <h3 className="text-sm font-semibold text-red-700 dark:text-red-300">
          Delete your account
        </h3>
        <p className="mt-1 text-xs text-red-600">
          Deleting your account is permanent once the grace period ends. The deletion page explains
          exactly what is removed and asks you to confirm before anything happens.
        </p>
        <Link
          href="/account/delete"
          className="mt-3 inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-500/20 transition-colors"
        >
          Go to account deletion
          <ChevronRightIcon />
        </Link>
      </div>
    </div>
  )
}

// ─── Chevron icon ───────────────────────────────────────────────────────

function ChevronRightIcon() {
  return (
    <svg
      className="h-4 w-4 text-muted-foreground"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// Main Settings Page (inner, with toast access)
// ═══════════════════════════════════════════════════════════════════════

function SettingsContent() {
  const t = useT()
  const { toast } = useToast()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchProfile = useCallback(async () => {
    try {
      const res = await fetch('/api/user/profile')
      if (!res.ok) throw new Error('Failed to load profile')
      const data: UserProfile = await res.json()
      setProfile(data)
    } catch {
      toast('error', 'Failed to load your profile. Please refresh the page.')
    } finally {
      setLoading(false)
    }
  }, [toast])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 rounded bg-muted" />
          <div className="h-4 w-64 rounded bg-muted" />
          <div className="mt-6 h-10 w-full rounded bg-muted" />
          <div className="h-40 w-full rounded bg-muted" />
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          Unable to load your profile.{' '}
          <button
            type="button"
            onClick={() => {
              setLoading(true)
              fetchProfile()
            }}
            className="font-medium text-accent hover:text-primary"
          >
            Try again
          </button>
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-primary sm:text-3xl">
          {t('dashboard.settings.h1')}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{t('dashboard.settings.intro')}</p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="bg-transparent gap-1.5 p-0 flex-wrap">
          <TabsTrigger
            value="profile"
            className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40"
          >
            Password
          </TabsTrigger>
          <TabsTrigger
            value="communication"
            className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40"
          >
            Communication
          </TabsTrigger>
          <TabsTrigger
            value="subscription"
            className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40"
          >
            Subscription
          </TabsTrigger>
          <TabsTrigger
            value="data-privacy"
            className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40"
          >
            Data &amp; Privacy
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileTab profile={profile} onProfileUpdated={setProfile} />
        </TabsContent>
        <TabsContent value="password">
          <PasswordTab />
        </TabsContent>
        <TabsContent value="communication">
          <CommunicationTab />
        </TabsContent>
        <TabsContent value="subscription">
          <SubscriptionTab />
        </TabsContent>
        <TabsContent value="data-privacy">
          <DataPrivacyTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// Page export (wraps content with ToastProvider)
// ═══════════════════════════════════════════════════════════════════════

export default function SettingsPage() {
  return (
    <ToastProvider>
      <SettingsContent />
    </ToastProvider>
  )
}
