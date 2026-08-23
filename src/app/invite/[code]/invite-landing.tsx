'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Loader2, Users, AlertCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'

type ValidState =
  | { status: 'loading' }
  | { status: 'valid'; studentName: string; school: string | null }
  | { status: 'invalid'; message: string }

export function InviteLanding({ code }: { code: string }) {
  const t = useT()
  const [state, setState] = useState<ValidState>({ status: 'loading' })

  useEffect(() => {
    // Persist the code so it survives the sign-up / sign-in round-trip and can
    // prefill the redeem form on /dashboard/parent.
    try {
      window.localStorage.setItem('eh-parent-invite-code', code.trim().toUpperCase())
    } catch {
      // no-op
    }

    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(`/api/parent/invite/validate?code=${encodeURIComponent(code)}`)
        const data = (await res.json()) as {
          studentName?: string
          school?: string | null
          error?: string
        }
        if (cancelled) return
        if (res.ok && data.studentName) {
          setState({ status: 'valid', studentName: data.studentName, school: data.school ?? null })
        } else {
          setState({ status: 'invalid', message: data.error || t('invite.error.generic') })
        }
      } catch {
        if (!cancelled) setState({ status: 'invalid', message: t('invite.error.generic') })
      }
    })()
    return () => {
      cancelled = true
    }
  }, [code, t])

  if (state.status === 'loading') {
    return (
      <div className="flex flex-col items-center gap-3 text-center">
        <Loader2 className="size-6 animate-spin text-primary" aria-hidden="true" />
        <p className="text-sm text-muted-foreground">{t('invite.checking')}</p>
      </div>
    )
  }

  if (state.status === 'invalid') {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <AlertCircle className="mx-auto mb-4 size-8 text-destructive" aria-hidden="true" />
        <h1 className="mb-2 text-xl font-semibold text-foreground">{t('invite.invalid.title')}</h1>
        <p className="mb-6 text-sm text-muted-foreground">{state.message}</p>
        <Button variant="outline" render={<Link href="/" />}>
          {t('invite.go_home')}
        </Button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-8">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary/10">
          <Users className="size-5 text-primary" aria-hidden="true" />
        </span>
        <div>
          <h1 className="text-xl font-semibold leading-tight text-foreground">
            {t('invite.valid.title')}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t('invite.valid.for_student')} {state.studentName}
            {state.school ? ` · ${state.school}` : ''}
          </p>
        </div>
      </div>

      <ul className="mb-6 space-y-2 text-sm text-foreground/90">
        <li className="flex items-start gap-2">
          <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          {t('invite.benefit.progress')}
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          {t('invite.benefit.reports')}
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          {t('invite.benefit.free')}
        </li>
      </ul>

      <div className="flex flex-col gap-2">
        <Button
          size="lg"
          render={<Link href={`/auth/register?role=parent&code=${encodeURIComponent(code)}`} />}
        >
          {t('invite.cta.create')}
        </Button>
        <Button
          variant="outline"
          size="lg"
          render={<Link href={`/dashboard/parent?code=${encodeURIComponent(code)}`} />}
        >
          {t('invite.cta.signin')}
        </Button>
      </div>
    </div>
  )
}
