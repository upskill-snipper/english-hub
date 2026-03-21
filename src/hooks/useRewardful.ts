'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    Rewardful?: {
      referral: string | null
    }
    rewardful?: (action: string, callback: (referral: string) => void) => void
  }
}

/**
 * Hook that reads the Rewardful referral token from the window object.
 *
 * The Rewardful script (loaded in root layout) sets `window.Rewardful.referral`
 * when a visitor arrives via an affiliate link (`?via=CODE`). This hook polls
 * for the value and returns it so it can be passed to the checkout API.
 */
export function useRewardful() {
  const [referral, setReferral] = useState<string | null>(null)

  useEffect(() => {
    const checkRewardful = () => {
      if (typeof window !== 'undefined' && window.Rewardful?.referral) {
        setReferral(window.Rewardful.referral)
      }
    }

    // Check immediately
    checkRewardful()

    // Rewardful script loads async — retry after delays
    const t1 = setTimeout(checkRewardful, 500)
    const t2 = setTimeout(checkRewardful, 1500)
    const t3 = setTimeout(checkRewardful, 3000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  return { referral }
}
