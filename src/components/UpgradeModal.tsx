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
import { useT } from '@/lib/i18n/use-t'

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
  const t = useT()
  const featureName = FEATURE_NAMES[feature]
  const remaining = getRemainingUses(feature)
  const used = FREE_USES_PER_FEATURE - remaining

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
            {variant === 'warning' ? (
              <Crown className="size-6 text-amber-600" />
            ) : (
              <Sparkles className="size-6 text-amber-600" />
            )}
          </div>
          <DialogTitle className="text-center">
            {variant === 'warning'
              ? `${t('upgrade.title.last_free')} ${featureName}`
              : `${t('upgrade.title.enjoying')} ${featureName}!`}
          </DialogTitle>
          <DialogDescription className="text-center">
            {variant === 'warning' ? (
              <>
                {t('upgrade.you_have')}{' '}
                <span className="font-semibold text-foreground">
                  {remaining} {t('dash.out_of')} {FREE_USES_PER_FEATURE}
                </span>{' '}
                {t('upgrade.free_uses_left')} {featureName}.
              </>
            ) : (
              <>
                {t('upgrade.youve_used')} {featureName}{' '}
                <span className="font-semibold text-foreground">
                  {used} {used === 1 ? t('upgrade.time') : t('upgrade.times')}
                </span>
                . {t('upgrade.upgrade_for_unlimited')}
              </>
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">{t('upgrade.premium_plan')}</p>
              <p className="text-xs text-muted-foreground">{t('upgrade.unlimited_access')}</p>
            </div>
            <Badge variant="default" className="bg-emerald-600 hover:bg-emerald-600">
              {t('upgrade.seven_day_trial')}
            </Badge>
          </div>
          <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-600">&#10003;</span>
              {t('upgrade.benefit.ai_marking')}
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-600">&#10003;</span>
              {t('upgrade.benefit.mock_exams')}
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-600">&#10003;</span>
              {t('upgrade.benefit.export')}
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-600">&#10003;</span>
              {t('upgrade.benefit.priority_support')}
            </li>
          </ul>
        </div>

        <DialogFooter className="sm:flex-col sm:gap-2">
          <Button render={<Link href="/pricing" />} className="w-full">
            <Crown className="size-4" />
            {t('upgrade.upgrade_now')}
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
              {t('upgrade.use_last_free_try')}
            </DialogClose>
          ) : (
            <DialogClose render={<button className={buttonVariants({ variant: 'ghost' })} />}>
              {t('upgrade.continue_free')}
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
