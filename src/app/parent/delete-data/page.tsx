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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useT } from '@/lib/i18n/use-t'

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

type DeletionState = 'idle' | 'confirming' | 'submitting' | 'success' | 'error'

export default function ParentDeleteDataPage() {
  const t = useT()
  const [mounted, setMounted] = useState(false)

  const DATA_CATEGORIES = {
    deleted: [
      {
        label: t('parent.del_essays_label'),
        description: t('parent.del_essays_desc'),
      },
      {
        label: t('parent.del_progress_label'),
        description: t('parent.del_progress_desc'),
      },
      {
        label: t('parent.del_ai_feedback_label'),
        description: t('parent.del_ai_feedback_desc'),
      },
      {
        label: t('parent.del_account_label'),
        description: t('parent.del_account_desc'),
      },
      {
        label: t('parent.del_privacy_label'),
        description: t('parent.del_privacy_desc'),
      },
    ],
    retained: [
      {
        label: t('parent.ret_safeguarding_label'),
        description: t('parent.ret_safeguarding_desc'),
      },
      {
        label: t('parent.ret_payment_label'),
        description: t('parent.ret_payment_desc'),
      },
      {
        label: t('parent.ret_audit_label'),
        description: t('parent.ret_audit_desc'),
      },
    ],
  }

  const [account, setAccount] = useState<ParentAccount | null>(null)
  const [deletionState, setDeletionState] = useState<DeletionState>('idle')
  const [confirmText, setConfirmText] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [gracePeriodEnd, setGracePeriodEnd] = useState('')

  useEffect(() => {
    setMounted(true)
    // [P2:auth] Supabase - replace with supabase.auth.getUser()
    setAccount(safeParse<ParentAccount>(localStorage.getItem(PARENT_ACCOUNT_KEY)))
  }, [])

  const childName = account?.childName ?? t('parent.your_child')
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
        throw new Error(data.error || t('parent.deletion_submit_failed'))
      }

      const data = await res.json()
      setGracePeriodEnd(data.gracePeriodEndsAt ?? '')
      setDeletionState('success')
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : t('parent.something_went_wrong'))
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
            {t('parent.delete_data_title')}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{t('parent.delete_data_subtitle')}</p>
        </div>

        <Card className="border-emerald-500/30 bg-emerald-500/5">
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
            <CheckCircle2 className="h-12 w-12 text-emerald-500" />
            <h2 className="text-xl font-bold text-foreground">{t('parent.deletion_submitted')}</h2>
            <p className="max-w-md text-sm text-muted-foreground">
              {`${t('parent.deletion_received_prefix')} ${childName} ${t('parent.deletion_received_suffix')} `}
              <strong>{account?.email ?? t('parent.your_email_default')}</strong>.
            </p>

            <div className="mt-2 rounded-lg border border-border bg-background px-4 py-3">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-amber-500" />
                <span className="font-medium text-foreground">
                  {t('parent.grace_period_30day')}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {t('parent.grace_period_explanation')}
                {gracePeriodEnd && (
                  <>
                    {' '}
                    {t('parent.permanently_deleted_after')}{' '}
                    <strong>
                      {new Date(gracePeriodEnd).toLocaleDateString('en-GB', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </strong>
                    .
                  </>
                )}{' '}
                {t('parent.cancel_via_dpo_prefix')}{' '}
                <a href="mailto:dpo@theenglishhub.app" className="text-primary underline">
                  dpo@theenglishhub.app
                </a>{' '}
                {t('parent.cancel_via_dpo_suffix')}
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
          {t('parent.delete_data_title')}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {`${t('parent.delete_request_prefix')} ${childName} ${t('parent.delete_request_suffix')}`}
        </p>
      </div>

      {/* What will be deleted */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Trash2 className="h-4 w-4 text-destructive" />
            {t('parent.data_to_be_deleted')}
          </CardTitle>
          <CardDescription>{t('parent.data_to_be_deleted_desc')}</CardDescription>
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
            {t('parent.data_retained_legal')}
          </CardTitle>
          <CardDescription>{t('parent.data_retained_legal_desc')}</CardDescription>
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
              {t('parent.request_data_deletion')}
            </CardTitle>
            <CardDescription>
              {`${t('parent.schedule_deletion_prefix')} ${childName} ${t('parent.schedule_deletion_suffix')}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" onClick={() => setDeletionState('confirming')}>
              <Trash2 className="h-4 w-4" />
              {`${t('parent.want_to_delete_prefix')} ${childName} ${t('parent.want_to_delete_suffix')}`}
            </Button>
          </CardContent>
        </Card>
      )}

      {deletionState === 'confirming' && (
        <Card className="border-destructive/30 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base text-destructive">
              <AlertTriangle className="h-4 w-4" />
              {t('parent.confirm_deletion_request')}
            </CardTitle>
            <CardDescription>
              {t('parent.cannot_be_undone')} {t('parent.type_to_confirm_prefix')}{' '}
              <strong>{confirmPhrase}</strong> {t('parent.type_to_confirm_suffix')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-destructive/20 bg-background p-4">
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-amber-500" />
                  {t('parent.bullet_grace_period')}
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 text-destructive" />
                  {t('parent.bullet_what_deleted')}
                </li>
                <li className="flex items-center gap-2">
                  <ShieldAlert className="h-3.5 w-3.5 text-amber-500" />
                  {t('parent.bullet_what_retained')}
                </li>
              </ul>
            </div>

            <div>
              <Label htmlFor="confirm-delete" className="text-sm font-medium">
                {t('parent.type_label_prefix')}{' '}
                <Badge variant="outline" className="mx-1 font-mono">
                  {confirmPhrase}
                </Badge>{' '}
                {t('parent.type_label_suffix')}
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
                {t('parent.confirm_deletion_btn')}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setDeletionState('idle')
                  setConfirmText('')
                }}
              >
                {t('parent.cancel')}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {deletionState === 'submitting' && (
        <Card className="border-border">
          <CardContent className="flex items-center justify-center gap-3 p-8">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{t('parent.submitting_deletion')}</p>
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
                  {t('parent.deletion_request_failed')}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{errorMessage}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3"
                  onClick={() => setDeletionState('confirming')}
                >
                  {t('parent.try_again')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Legal footnote */}
      <p className="text-xs text-muted-foreground">
        {t('parent.legal_footnote_prefix')}{' '}
        <a href="mailto:dpo@theenglishhub.app" className="text-primary underline">
          dpo@theenglishhub.app
        </a>
        .
      </p>
    </div>
  )
}
