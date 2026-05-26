'use client'

// ─── InfographicBanner ─────────────────────────────────────────────────────
//
// Drops a full-width hero infographic at the top of a marketing page. Used
// on /for-teachers, /for-schools, /for-students. The image itself is the
// one-glance summary of the product for that persona - the page body below
// provides the deeper copy, pricing, and CTAs.
//
// Uses a plain <img alt=""> tag (not next/image) so the same component handles
// SVG placeholders (committed) and the raster JPGs the founder will drop in
// later without needing to tweak `dangerouslyAllowSVG` in next.config.js.
// The images are already sized for final display (~1536 × 1024) so Next's
// optimisation buys us nothing here.
//
// i18n: marked `'use client'` so this component can call `useT()` for the
// wrapper section's aria-label. The caller pre-translates `alt` because the
// page knows which persona's infographic this is (teachers/schools/students)
// and can provide the right Khaleeji description. The component renders no
// interactive state - the client boundary cost is just the small useT()
// hook closure. Both server pages (for-schools, for-students) and client
// pages (for-teachers) can render this client child component freely.
// ──────────────────────────────────────────────────────────────────────────

import { useT } from '@/lib/i18n/use-t'

export interface InfographicBannerProps {
  /** Image source - path under /public, e.g. '/infographics/for-teachers.svg' */
  src: string
  /** Alt text - describe the infographic for screen readers. Pre-translated by the caller. */
  alt: string
  /** Optional extra class names to tune spacing per-page if needed. */
  className?: string
}

export function InfographicBanner({ src, alt, className }: InfographicBannerProps) {
  const t = useT()
  return (
    <section
      aria-label={t('marketing.infographic.region_label')}
      className={'relative w-full bg-background border-b border-border/50 ' + (className ?? '')}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-6 sm:pt-10 pb-4 sm:pb-6">
        <div className="overflow-hidden rounded-2xl border border-border/60 shadow-sm bg-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="block w-full h-auto" loading="eager" />
        </div>
      </div>
    </section>
  )
}
