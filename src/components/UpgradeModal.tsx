'use client'

import Link from 'next/link'
import { Crown, Sparkles } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  type GatedFeature,
  FEATURE_NAMES,
  getRemainingUses,
  FREE_USES_PER_FEATURE,
} from '@/lib/feature-gating'

interface UpgradeModalProps {
  feature: GatedFeature
  open: boolean
  onOpenChange: (open: boolean) => void
  /** "warning" = before last use, "nudge" = soft nudge after 2nd use */
  variant: 'warning' | 'nudge'
  onContinueFree?: () => void
}

export function UpgradeModal({
  feature,
  open,
  onOpenChange,
  variant,
  onContinueFree,
}: UpgradeModalProps) {
  const featureName = FEATURE_NAMES[feature]
  const remaining = getRemainingUses(feature)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
            {variant === 'warning' ? (
              <Crown className="size-6 text-amber-600 dark:text-amber-400" />
            ) : (
              <Sparkles className="size-6 text-amber-600 dark:text-amber-400" />
            )}
          </div>
          <DialogTitle className="text-center">
            {variant === 'warning'
              ? `This is your last free use of ${featureName}`
              : `You're enjoying ${featureName}!`}
          </DialogTitle>
          <DialogDescription className="text-center">
            {variant === 'warning' ? (
              <>
                You have{' '}
                <span className="font-semibold text-foreground">
                  {remaining} of {FREE_USES_PER_FEATURE}
                </span>{' '}
                free uses remaining. After this, you&apos;ll need a Premium
                subscription to continue using {featureName}.
              </>
            ) : (
              <>
                You&apos;ve used {featureName}{' '}
                <span className="font-semibold text-foreground">
                  {FREE_USES_PER_FEATURE - remaining} times
                </span>
                . Upgrade to Premium for unlimited access to all features.
              </>
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Premium Plan</p>
              <p className="text-xs text-muted-foreground">
                Unlimited access to all features
              </p>
            </div>
            <Badge variant="default" className="bg-emerald-600 hover:bg-emerald-600">
              First month free
            </Badge>
          </div>
          <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-600">&#10003;</span>
              Unlimited AI marking and feedback
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-600">&#10003;</span>
              Full mock exams and analytics
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-600">&#10003;</span>
              Export to PowerPoint and Word
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-600">&#10003;</span>
              Priority support
            </li>
          </ul>
        </div>

        <DialogFooter className="sm:flex-col sm:gap-2">
          <Button
            render={<Link href="/pricing" />}
            className="w-full"
          >
            <Crown className="size-4" />
            Upgrade Now
          </Button>
          {variant === 'warning' ? (
            <DialogClose
              render={
                <button
                  className={buttonVariants({ variant: 'outline' })}
                  onClick={onContinueFree}
                />
              }
            >
              Use my last free try
            </DialogClose>
          ) : (
            <DialogClose
              render={
                <button
                  className={buttonVariants({ variant: 'ghost' })}
                />
              }
            >
              Continue Free
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
