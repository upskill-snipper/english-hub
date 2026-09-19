'use client'

// ─── The first fortnight, on the dashboard ──────────────────────────────────
//
// UX-4. A new account met a stats row reading "0 courses, 0 modules,
// 0 certificates": three zeroes and no instruction, on the screen where
// somebody decides whether to pay. This replaces it for two weeks with three
// steps that can be finished on day one, with AI marking - the flagship paid
// feature, previously one chip among nine - as step two.
//
// The plan state comes from `profiles.subscription_status` and
// `subscription_end_date`, which are the fields the web entitlement gates
// actually read (src/lib/course-access.ts), rather than the Prisma row: most
// accounts have no Prisma row at all, so keying off it would tell almost
// everyone they have nothing.
//
// No counts, no grade promises: the copy stays inside the claim sheet.

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Circle } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'
import { Card, CardContent } from '@/components/ui/card'
import {
  firstWeekSteps,
  nextStep,
  readFirstWeekSignals,
  type FirstWeekSignals,
} from '@/lib/dashboard/first-week'

const LABEL_KEY: Record<string, string> = {
  board: 'dash.first_week.step_board',
  marking: 'dash.first_week.step_marking',
  result: 'dash.first_week.step_result',
}

export function FirstWeekCard({
  subscriptionStatus,
  subscriptionEndDate,
}: {
  subscriptionStatus: string | null | undefined
  subscriptionEndDate: string | null | undefined
}) {
  const t = useT()

  // Read after mount, never during render: the signals live in cookies and
  // localStorage, which the server cannot see, so seeding them here would be a
  // hydration mismatch. Until the effect runs the card shows all three steps
  // outstanding, which is the correct answer for a brand-new account.
  const [signals, setSignals] = useState<FirstWeekSignals>({
    boardChosen: false,
    essayMarked: false,
    resultOpened: false,
  })

  useEffect(() => {
    setSignals(readFirstWeekSignals())
  }, [])

  const steps = firstWeekSteps(signals)
  const next = nextStep(steps)
  const doneCount = steps.filter((s) => s.done).length

  const isPaid = subscriptionStatus === 'pro'
  const renewal = subscriptionEndDate ? new Date(subscriptionEndDate) : null
  const renewalLabel =
    renewal && !Number.isNaN(renewal.getTime())
      ? renewal.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
      : null

  return (
    <Card className="mb-6 border-primary/20 bg-primary/[0.03]">
      <CardContent className="p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-semibold text-foreground">{t('dash.first_week.title')}</h2>
          <p className="text-xs text-muted-foreground">
            {doneCount}/{steps.length} {t('dash.first_week.done')}
          </p>
        </div>

        <ol className="mt-4 space-y-2">
          {steps.map((step) => (
            <li key={step.id}>
              <Link
                href={step.href}
                className="group flex items-center gap-3 rounded-lg border border-border/60 bg-card px-4 py-3 transition-colors hover:border-primary/40"
              >
                {step.done ? (
                  <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                ) : (
                  <Circle className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                )}
                <span
                  className={
                    step.done
                      ? 'flex-1 text-sm text-muted-foreground line-through'
                      : 'flex-1 text-sm text-foreground'
                  }
                >
                  {t(LABEL_KEY[step.id])}
                </span>
                {!step.done && step.id === next?.id && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                )}
              </Link>
            </li>
          ))}
        </ol>

        <p className="mt-4 text-xs text-muted-foreground">
          {isPaid && renewalLabel
            ? `${t('dash.first_week.plan_active')} ${renewalLabel}`
            : t('dash.first_week.plan_trial')}
        </p>
      </CardContent>
    </Card>
  )
}
