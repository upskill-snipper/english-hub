'use client'

import { useEffect } from 'react'
import { captureUtmParams } from '@/lib/utm'

/**
 * Invisible client component that captures UTM parameters on page load.
 * Mount once in the root layout — renders nothing.
 */
export function UtmCapture() {
  useEffect(() => {
    captureUtmParams()
  }, [])

  return null
}
