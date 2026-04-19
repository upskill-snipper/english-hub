import { cn } from '@/lib/utils'
import { Award, Gem, Medal, Rocket, Star } from 'lucide-react'
import { TIERS } from '@/lib/affiliate/tiers'

/**
 * Tier types exported for any legacy imports. All tier logic lives in
 * `src/lib/affiliate/tiers.ts` — this file is purely presentational.
 */
export type AffiliateTier = 'tier-1' | 'tier-2' | 'tier-3' | 'tier-4' | 'tier-5'

/** Legacy compatibility for older imports. Will be removed in v5. */
export const TIER_CONFIG: Record<
  AffiliateTier,
  {
    label: string
    /** Flat commission in GBP (no longer a percentage). */
    commission: number
    minReferrals: number
    description: string
  }
> = {
  'tier-1': {
    label: TIERS['tier-1'].label,
    commission: TIERS['tier-1'].commissionGbp,
    minReferrals: 0,
    description: 'First 100 signups — start earning straight away',
  },
  'tier-2': {
    label: TIERS['tier-2'].label,
    commission: TIERS['tier-2'].commissionGbp,
    minReferrals: TIERS['tier-2'].minSignup - 1,
    description: 'Signups 101–250 — £1 bump per signup',
  },
  'tier-3': {
    label: TIERS['tier-3'].label,
    commission: TIERS['tier-3'].commissionGbp,
    minReferrals: TIERS['tier-3'].minSignup - 1,
    description: 'Signups 251–500 — established affiliate',
  },
  'tier-4': {
    label: TIERS['tier-4'].label,
    commission: TIERS['tier-4'].commissionGbp,
    minReferrals: TIERS['tier-4'].minSignup - 1,
    description: 'Signups 501–1,000 — scaling partner',
  },
  'tier-5': {
    label: TIERS['tier-5'].label,
    commission: TIERS['tier-5'].commissionGbp,
    minReferrals: TIERS['tier-5'].minSignup - 1,
    description: 'Signups 1,001+ — top-tier partner',
  },
}

interface TierBadgeProps {
  tier: AffiliateTier
  size?: 'sm' | 'md' | 'lg'
  showCommission?: boolean
  className?: string
}

export function TierBadge({
  tier,
  size = 'md',
  showCommission = false,
  className,
}: TierBadgeProps) {
  const config = TIER_CONFIG[tier]

  const Icon =
    tier === 'tier-5'
      ? Star
      : tier === 'tier-4'
        ? Gem
        : tier === 'tier-3'
          ? Rocket
          : tier === 'tier-2'
            ? Award
            : Medal

  const tint =
    tier === 'tier-5'
      ? 'bg-primary/15 text-primary border-primary/30'
      : tier === 'tier-4'
        ? 'bg-primary/10 text-primary border-primary/20'
        : tier === 'tier-3'
          ? 'bg-accent text-accent-foreground border-border'
          : tier === 'tier-2'
            ? 'bg-accent/60 text-accent-foreground border-border'
            : 'bg-muted text-muted-foreground border-border'

  const sizeClasses =
    size === 'lg'
      ? 'px-4 py-2 text-sm gap-2 [&_svg]:size-5'
      : size === 'sm'
        ? 'px-2 py-0.5 text-xs gap-1 [&_svg]:size-3'
        : 'px-3 py-1 text-xs gap-1.5 [&_svg]:size-3.5'

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-semibold uppercase tracking-wide',
        tint,
        sizeClasses,
        className,
      )}
    >
      <Icon />
      {config.label}
      {showCommission && <span className="opacity-80">· £{config.commission}/signup</span>}
    </span>
  )
}

/**
 * Legacy helper. Takes a referral count and returns the tier label that the
 * NEXT signup would fall into. Preserved for existing call sites.
 */
export function getTierFromReferrals(confirmedReferrals: number): AffiliateTier {
  const nextSignup = Math.max(1, Math.floor(confirmedReferrals) + 1)
  if (nextSignup >= TIERS['tier-5'].minSignup) return 'tier-5'
  if (nextSignup >= TIERS['tier-4'].minSignup) return 'tier-4'
  if (nextSignup >= TIERS['tier-3'].minSignup) return 'tier-3'
  if (nextSignup >= TIERS['tier-2'].minSignup) return 'tier-2'
  return 'tier-1'
}
