'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Crown, Lock, Sparkles, X, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import {
  type GatedFeature,
  FEATURE_NAMES,
  FREE_USES_PER_FEATURE,
  getRemainingUses,
  getFeatureUsage,
} from '@/lib/feature-gating'
import {
  FEATURE_LOCKOUT_COPY,
  SOFT_NUDGE_COPY,
  DASHBOARD_BANNER_COPY,
  getPriceString,
  getFullPricingLine,
  getBenefits,
  isTeacherFeature,
} from '@/constants/upgrade-copy'

// ─── UsageCounter ──────────────────────────────────────────────────────
// Small badge shown on gated feature buttons to indicate remaining uses.
// Green when 3 remaining, amber when 2, red when 1, hidden when 0 or premium.

interface UsageCounterProps {
  feature: GatedFeature
  className?: string
}

export function UsageCounter({ feature, className }: UsageCounterProps) {
  const [remaining, setRemaining] = useState<number | null>(null)

  useEffect(() => {
    setRemaining(getRemainingUses(feature))
  }, [feature])

  if (remaining === null || remaining <= 0) return null

  const colorClasses =
    remaining >= 3
      ? 'bg-emerald-600/15 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400'
      : remaining === 2
        ? 'bg-amber-600/15 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400'
        : 'bg-red-600/15 text-red-600 dark:bg-red-500/15 dark:text-red-400'

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.6875rem] font-medium ${colorClasses} ${className ?? ''}`}
    >
      {remaining} of {FREE_USES_PER_FEATURE} free remaining
    </span>
  )
}

// ─── SoftNudge ─────────────────────────────────────────────────────────
// Dismissible banner shown after the 2nd use of a gated feature.

interface SoftNudgeProps {
  feature: GatedFeature
  isTeacher: boolean
  onDismiss?: () => void
  className?: string
}

export function SoftNudge({
  feature,
  isTeacher,
  onDismiss,
  className,
}: SoftNudgeProps) {
  const [dismissed, setDismissed] = useState(false)
  const featureName = FEATURE_NAMES[feature]
  const usageCount = getFeatureUsage(feature)

  if (dismissed) return null

  const message = isTeacher
    ? SOFT_NUDGE_COPY.teacher(featureName, usageCount, FREE_USES_PER_FEATURE)
    : SOFT_NUDGE_COPY.student(featureName, usageCount, FREE_USES_PER_FEATURE)

  function handleDismiss() {
    setDismissed(true)
    onDismiss?.()
  }

  return (
    <div
      className={`relative rounded-lg border border-amber-200/60 bg-amber-50/50 p-4 dark:border-amber-800/40 dark:bg-amber-950/20 ${className ?? ''}`}
    >
      <button
        onClick={handleDismiss}
        className="absolute top-2.5 right-2.5 rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        aria-label="Dismiss"
      >
        <X className="size-3.5" />
      </button>

      <div className="flex items-start gap-3 pr-6">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
          <Sparkles className="size-4 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="space-y-2">
          <p className="text-sm leading-relaxed text-foreground">{message}</p>
          <Button
            render={<Link href="/pricing" />}
            size="sm"
            className="gap-1.5"
          >
            <Crown className="size-3.5" />
            Upgrade Now
            <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

// ─── FinalUseWarning ───────────────────────────────────────────────────
// Modal shown before the 3rd (last) use of a gated feature.

interface FinalUseWarningProps {
  feature: GatedFeature
  isTeacher: boolean
  open: boolean
  onOpenChange: (open: boolean) => void
  onUseLastFree: () => void
}

export function FinalUseWarning({
  feature,
  isTeacher,
  open,
  onOpenChange,
  onUseLastFree,
}: FinalUseWarningProps) {
  const featureName = FEATURE_NAMES[feature]
  const benefits = getBenefits(isTeacher)
  const pricingLine = getFullPricingLine(feature)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
            <Crown className="size-6 text-red-600 dark:text-red-400" />
          </div>
          <DialogTitle className="text-center">
            This is your last free {featureName.toLowerCase()}
          </DialogTitle>
          <DialogDescription className="text-center">
            After this, {featureName.toLowerCase()} will be locked until you
            upgrade to Premium.
          </DialogDescription>
        </DialogHeader>

        {/* Benefits summary */}
        <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
          <p className="mb-2.5 text-sm font-semibold">
            Premium includes:
          </p>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-1.5">
                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                {benefit}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">{pricingLine}</p>
        </div>

        <DialogFooter className="sm:flex-col sm:gap-2">
          <Button
            render={<Link href="/pricing" />}
            className="w-full"
          >
            <Crown className="size-4" />
            Upgrade Now
            <ArrowRight className="size-4" />
          </Button>
          <DialogClose
            render={
              <button
                className={buttonVariants({ variant: 'outline' })}
                onClick={onUseLastFree}
              />
            }
          >
            Use Last Free {featureName}
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// ─── LockoutCard ───────────────────────────────────────────────────────
// Replaces the feature UI when all free uses are exhausted.

interface LockoutCardProps {
  feature: GatedFeature
  className?: string
}

export function LockoutCard({ feature, className }: LockoutCardProps) {
  const featureName = FEATURE_NAMES[feature]
  const benefitCopy = FEATURE_LOCKOUT_COPY[feature]
  const priceString = getPriceString(feature)

  return (
    <Card
      className={`mx-auto max-w-md border-amber-200/60 dark:border-amber-800/40 ${className ?? ''}`}
    >
      <CardHeader className="text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
          <Lock className="size-7 text-amber-600 dark:text-amber-400" />
        </div>
        <CardTitle className="text-lg">{featureName} is now locked</CardTitle>
        <CardDescription>
          You&apos;ve used all {FREE_USES_PER_FEATURE} of your free
          submissions.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {benefitCopy}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 p-4">
          <div>
            <p className="text-sm font-semibold">{priceString}</p>
            <p className="text-xs text-muted-foreground">First month free</p>
          </div>
          <Badge
            variant="default"
            className="bg-emerald-600 hover:bg-emerald-600"
          >
            Cancel anytime
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button
          render={<Link href="/pricing" />}
          size="lg"
          className="w-full"
        >
          <Crown className="size-4" />
          Upgrade to Premium
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          No obligation after your free trial.
        </p>
      </CardFooter>
    </Card>
  )
}

// ─── DashboardUpgradeBanner ────────────────────────────────────────────
// Passive, non-intrusive banner for the dashboard sidebar.
// Dismissible with localStorage persistence.

const BANNER_DISMISSED_KEY = 'upgrade_banner_dismissed'

interface DashboardUpgradeBannerProps {
  isTeacher: boolean
  className?: string
}

export function DashboardUpgradeBanner({
  isTeacher,
  className,
}: DashboardUpgradeBannerProps) {
  const [dismissed, setDismissed] = useState(true) // default hidden until mounted

  useEffect(() => {
    const stored = localStorage.getItem(BANNER_DISMISSED_KEY)
    setDismissed(stored === 'true')
  }, [])

  if (dismissed) return null

  const copy = isTeacher
    ? DASHBOARD_BANNER_COPY.teacher
    : DASHBOARD_BANNER_COPY.student

  function handleDismiss() {
    setDismissed(true)
    localStorage.setItem(BANNER_DISMISSED_KEY, 'true')
  }

  return (
    <div
      className={`relative rounded-lg border border-border/60 bg-muted/30 p-4 ${className ?? ''}`}
    >
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        aria-label="Dismiss banner"
      >
        <X className="size-3.5" />
      </button>

      <div className="flex items-start gap-3 pr-5">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <Crown className="size-4 text-primary" />
        </div>
        <div className="space-y-2">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {copy}
          </p>
          <Button
            render={<Link href="/pricing" />}
            variant="outline"
            size="sm"
            className="gap-1.5"
          >
            Learn more
            <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
