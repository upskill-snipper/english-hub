'use client'

/**
 * Trustpilot TrustBox widget.
 *
 * Renders the official `<div class="trustpilot-widget">` wrapper for a given
 * variant and lazily loads the widget bootstrap script the first time any
 * TrustBox mounts. Falls back to a plain anchor if the business unit ID env
 * is missing - so preview environments render something clean rather than an
 * empty slot.
 *
 * The bootstrap script (`widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js`)
 * is distinct from the InviteJS script (`invitejs.trustpilot.com/tp.min.js`)
 * mounted globally in the root layout. They must not be confused - only the
 * widget bootstrap self-scans `.trustpilot-widget` nodes.
 */

import { useEffect } from 'react'
import { useT } from '@/lib/i18n/use-t'

export type TrustBoxVariant = 'micro-star' | 'horizontal' | 'mini-carousel' | 'starter'
export type TrustBoxTheme = 'light' | 'dark'

type Variant = { templateId: string; height: string; width: string }

const VARIANTS: Record<TrustBoxVariant, Variant> = {
  'micro-star': {
    templateId: '5419b732fbfb950b10de65e5',
    height: '24px',
    width: '100%',
  },
  horizontal: {
    templateId: '5406e65db0d04a09e042d5fc',
    height: '28px',
    width: '100%',
  },
  'mini-carousel': {
    templateId: '53aa8912dec7e10d38f59f36',
    height: '240px',
    width: '100%',
  },
  starter: {
    templateId: '5613c9cde69ddc09340c6beb',
    height: '120px',
    width: '100%',
  },
}

const REVIEW_URL = 'https://uk.trustpilot.com/review/theenglishhub.app'
const BOOTSTRAP_SRC = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'

declare global {
  interface Window {
    __tpWidgetLoaded?: boolean
  }
}

function loadBootstrapOnce(): void {
  if (typeof window === 'undefined') return
  if (window.__tpWidgetLoaded) return
  window.__tpWidgetLoaded = true
  const s = document.createElement('script')
  s.src = BOOTSTRAP_SRC
  s.async = true
  document.body.appendChild(s)
}

export function TrustBox({
  variant,
  theme = 'light',
}: {
  variant: TrustBoxVariant
  theme?: TrustBoxTheme
}) {
  const businessUnitId = process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID
  const t = useT()

  useEffect(() => {
    if (!businessUnitId) return
    loadBootstrapOnce()
  }, [businessUnitId])

  if (!businessUnitId) {
    return (
      <a
        href={REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline underline-offset-2 hover:no-underline"
        data-testid="trustbox-fallback"
      >
        {t('trustpilot.read_reviews')}
      </a>
    )
  }

  const { templateId, height, width } = VARIANTS[variant]

  return (
    <div
      className="trustpilot-widget"
      data-testid="trustbox-widget"
      data-locale="en-GB"
      data-template-id={templateId}
      data-businessunit-id={businessUnitId}
      data-style-height={height}
      data-style-width={width}
      data-theme={theme}
    >
      {/* Brand name "Trustpilot" stays Latin even in AR - trademark, per
          dictionary brand-name policy. */}
      <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer">
        {t('trustpilot.brand')}
      </a>
    </div>
  )
}

export default TrustBox
