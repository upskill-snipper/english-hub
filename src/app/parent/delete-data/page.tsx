'use client'

import { useEffect, useState } from 'react'
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  Loader2,
  ShieldAlert,
  Trash2,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// ── LocalStorage keys (pre-auth placeholder) ─────────────────────────────
const PARENT_ACCOUNT_KEY = 'english-hub-parent-account'

interface ParentAccount {
  name?: string
  email?: string
  childName?: string
  childId?: string
}

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

// ── Data categories shown to parent before deletion ────────────────────────
const DATA_CATEGORIES = {
  deleted: [
    {
      label: 'Essays and written work',
      description: 'All essays, practice answers, and drafts submitted by your child.',
    },
    {
      label: 'Progress and scores',
      description: 'Quiz scores, game scores, revision progress, and learning history.',
    },
    {
      label: 'AI feedback',
      description: 'All AI-generated marking feedback linked to essays.',
    },
    {
      label: 'Account profile',
      description: 'Name, email address, date of birth, and school information.',
    },
    {
      label: 'Privacy settings and consent records',
      description: 'Notification preferences and consent history.',
    },
  ],
  retained: [
    {
      label: 'Safeguarding records',
      description:
        'Any safeguarding reports are retained until your child turns 25 or for 7 years, whichever is longer. This is a legal requirement.',
    },
    {
      label: 'Payment records',
      description:
        'Billing and invoice records are retained for 7 years as required by HMRC.',
    },
    {
      label: 'Anonymised audit logs',
      description:
        'Compliance audit entries are retained with personal data removed. These cannot be linked back to your child.',
    },
  ],
}

type DeletionState = 'idle' | 'confirming' | 'submitting' | 'success' | 'error'

export default function ParentDeleteDataPage() {
  const [mounted, setMounted] = useState(false)
  const [account, setAccount] = useState<ParentAccount | null>(null)
  const [deletionState, setDeletionState] = useState<DeletionState>('idle')
  const [confirmText, setConfirmText] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [gracePeriodEnd, setGracePeriodEnd] = useState('')

  useEffect(() => {
    setMounted(true)
    // [P2:auth] Supabase — replace with supabase.auth.getUser()
    setAccount(safeParse<ParentAccount>(localStorage.getItem(PARENT_ACCOUNT_KEY)))
  }, [])

  const childName = account?.childName ?? 'your child'
  const confirmPhrase = 'DELETE'

  async function handleRequestDeletion() {
    if (confirmText !== confirmPhrase) return

    setDeletionState('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/parent/delete-child-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          childId: account?.childId,
          parentEmail: account?.email,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to submit deletion request.')
      }

      const data = await res.json()
      setGracePeriodEnd(data.gracePeriodEndsAt ?? '')
      setDeletionState('success')
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.')
      setDeletionState('error')
    }
  }

  if (!mounted) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  // ── Success state ─────────────────────────────────────────────────────────
  if (deletionState === 'success') {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Delete Data
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Children&apos;s Code Standard 11 &mdash; Parental Controls
          </p>
        </div>

        <Card className="border-emerald-500/30 bg-emerald-500/5">
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
            <CheckCircle2 className="h-12 w-12 text-emerald-500" />
            <h2 className="text-xl font-bold text-foreground">
              Deletion request submitted
            </h2>
            <p className="max-w-md text-sm text-muted-foreground">
              We have received your request to delete {childName}&apos;s account data.
              A confirmation email has been sent to{' '}
              <strong>{account?.email ?? 'your email address'}</strong>.
            </p>

            <div className="mt-2 rounded-lg border border-border bg-background px-4 py-3">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-amber-500" />
                <span className="font-medium text-foreground">
                  30-day grace period
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                The deletion will be carried out after a 30-day cooling-off period.
                {gracePeriodEnd && (
                  <>
                    {' '}
                    Data will be permanently deleted on or after{' '}
                    <strong>{new Date(gracePeriodEnd).toLocaleDateString('en-GB', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}</strong>.
                  </>
                )}
                {' '}You can cancel this request by contacting{' '}
                <a href="mailto:dpo@theenglishhub.app" className="text-primary underline">
                  dpo@theenglishhub.app
                </a>{' '}
                before the grace period ends.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // ── Main form ─────────────────────────────────────────────────────────────
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Delete Data
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Request deletion of {childName}&apos;s account data. This action follows
          a 30-day grace period before data is permanently removed.
        </p>
      </div>

      {/* What will be deleted */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Trash2 className="h-4 w-4 text-destructive" />
            Data that will be deleted
          </CardTitle>
          <CardDescription>
            The following data will be permanently removed after the 30-day grace period.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {DATA_CATEGORIES.deleted.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                  <FileText className="h-3 w-3 text-destructive" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* What will be retained */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <ShieldAlert className="h-4 w-4 text-amber-500" />
            Data retained for legal reasons
          </CardTitle>
          <CardDescription>
            Some records must be kept to comply with UK law, even after account deletion.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {DATA_CATEGORIES.retained.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                  <ShieldAlert className="h-3 w-3 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Separator />

      {/* Confirmation section */}
      {deletionState === 'idle' && (
        <Card className="border-destructive/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base text-destructive">
              <AlertTriangle className="h-4 w-4" />
              Request data deletion
            </CardTitle>
            <CardDescription>
              This will schedule {childName}&apos;s data for permanent deletion.
              You have 30 days to cancel the request.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="destructive"
              onClick={() => setDeletionState('confirming')}
            >
              <Trash2 className="h-4 w-4" />
              I want to delete {childName}&apos;s data
            </Button>
          </CardContent>
        </Card>
      )}

      {deletionState === 'confirming' && (
        <Card className="border-destructive/30 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base text-destructive">
              <AlertTriangle className="h-4 w-4" />
              Confirm deletion request
            </CardTitle>
            <CardDescription>
              This action cannot be undone after the 30-day grace period.
              Type <strong>{confirmPhrase}</strong> below to confirm.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-destructive/20 bg-background p-4">
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-amber-500" />
                  30-day grace period before permanent deletion
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 text-destructive" />
                  Essays, progress, AI feedback, and profile data will be deleted
                </li>
                <li className="flex items-center gap-2">
                  <ShieldAlert className="h-3.5 w-3.5 text-amber-500" />
                  Safeguarding and payment records will be retained per UK law
                </li>
              </ul>
            </div>

            <div>
              <Label htmlFor="confirm-delete" className="text-sm font-medium">
                Type <Badge variant="outline" className="mx-1 font-mono">{confirmPhrase}</Badge> to confirm
              </Label>
              <Input
                id="confirm-delete"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                placeholder={confirmPhrase}
                className="mt-2 max-w-xs font-mono"
                autoComplete="off"
              />
            </div>

            <div className="flex gap-3">
              <Button
                variant="destructive"
                disabled={confirmText !== confirmPhrase}
                onClick={handleRequestDeletion}
              >
                <Trash2 className="h-4 w-4" />
                Confirm deletion request
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setDeletionState('idle')
                  setConfirmText('')
                }}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {deletionState === 'submitting' && (
        <Card className="border-border">
          <CardContent className="flex items-center justify-center gap-3 p-8">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Submitting deletion request...
            </p>
          </CardContent>
        </Card>
      )}

      {deletionState === 'error' && (
        <Card className="border-destructive/30 bg-destructive/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 text-destructive" />
              <div>
                <p className="text-sm font-medium text-destructive">
                  Deletion request failed
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {errorMessage}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3"
                  onClick={() => setDeletionState('confirming')}
                >
                  Try again
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Legal footnote */}
      <p className="text-xs text-muted-foreground">
        This data deletion facility is provided under the ICO Children&apos;s Code
        (Age Appropriate Design Code), Standard 11 &mdash; Parental Controls, and
        in accordance with UK GDPR Article 17 (Right to Erasure). If you have
        questions about this process, contact our Data Protection Officer at{' '}
        <a href="mailto:dpo@theenglishhub.app" className="text-primary underline">
          dpo@theenglishhub.app
        </a>.
      </p>
    </div>
  )
}
