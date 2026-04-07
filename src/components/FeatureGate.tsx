'use client'

import { useState, useCallback, type ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { UpgradeModal } from '@/components/UpgradeModal'
import { FeatureLockout } from '@/components/FeatureLockout'
import {
  type GatedFeature,
  FEATURE_NAMES,
  getFeatureUsage,
  incrementFeatureUsage,
  getRemainingUses,
  isFeatureLocked,
  isUserPremium,
  FREE_USES_PER_FEATURE,
} from '@/lib/feature-gating'

interface FeatureGateProps {
  feature: GatedFeature
  children: ReactNode
  /**
   * Called when the user is allowed to proceed.
   * Use this to trigger the actual feature action after gating checks pass.
   */
  onUse?: () => void
}

/**
 * Wraps any gated feature button/action.
 * - Shows usage counter badge ("2 of 3 remaining")
 * - On 2nd use: shows soft upgrade nudge after completion
 * - Before 3rd use: shows warning modal ("This is your last free use")
 * - After 3rd use: replaces content with lockout card
 * - Premium users bypass everything
 */
export function FeatureGate({ feature, children, onUse }: FeatureGateProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalVariant, setModalVariant] = useState<'warning' | 'nudge'>('nudge')
  const [locked, setLocked] = useState(() => !isUserPremium() && isFeatureLocked(feature))
  const [remaining, setRemaining] = useState(() => getRemainingUses(feature))

  const premium = isUserPremium()

  const handleUse = useCallback(() => {
    // Premium users bypass all gating
    if (premium) {
      onUse?.()
      return
    }

    // Already locked
    if (isFeatureLocked(feature)) {
      setLocked(true)
      return
    }

    const currentUsage = getFeatureUsage(feature)

    // Before 3rd (last) use: show warning modal
    if (currentUsage === FREE_USES_PER_FEATURE - 1) {
      setModalVariant('warning')
      setModalOpen(true)
      return
    }

    // Proceed with the use
    const newCount = incrementFeatureUsage(feature)
    const newRemaining = Math.max(0, FREE_USES_PER_FEATURE - newCount)
    setRemaining(newRemaining)
    onUse?.()

    // After 2nd use: show soft nudge
    if (newCount === 2) {
      // Small delay so the user sees their result first
      setTimeout(() => {
        setModalVariant('nudge')
        setModalOpen(true)
      }, 1500)
    }
  }, [feature, onUse, premium])

  const handleLastFreeUse = useCallback(() => {
    incrementFeatureUsage(feature)
    const newRemaining = getRemainingUses(feature)
    setRemaining(newRemaining)
    onUse?.()

    // Check if now locked
    if (isFeatureLocked(feature)) {
      setLocked(true)
    }
  }, [feature, onUse])

  // Premium users see raw children with no gating UI
  if (premium) {
    return <>{children}</>
  }

  // Locked out: replace content entirely
  if (locked) {
    return <FeatureLockout feature={feature} />
  }

  return (
    <div className="relative">
      {/* Usage badge */}
      <div className="mb-3 flex items-center gap-2">
        <Badge
          variant={remaining === 1 ? 'destructive' : 'secondary'}
          className="text-xs"
        >
          {remaining === 1
            ? `1 of ${FREE_USES_PER_FEATURE} free use remaining`
            : `${remaining} of ${FREE_USES_PER_FEATURE} free uses remaining`}
        </Badge>
      </div>

      {/* Wrap children and intercept the action via onUse */}
      {children}

      {/* Upgrade / warning modal */}
      <UpgradeModal
        feature={feature}
        open={modalOpen}
        onOpenChange={setModalOpen}
        variant={modalVariant}
        onContinueFree={handleLastFreeUse}
      />
    </div>
  )
}
