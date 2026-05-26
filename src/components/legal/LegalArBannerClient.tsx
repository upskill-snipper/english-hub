'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { lookup, type Locale } from '@/lib/i18n/dictionary'

/**
 * Client-side mirror of LegalArBanner - for pages that are already
 * `'use client'` and can't await a server component. Reads the
 * `eh-lang` cookie via document.cookie (same path as `useT`) and
 * renders the same Khaleeji banner block when locale is AR.
 *
 * See LegalArBanner.tsx for the dictionary key contract.
 */

interface LegalArBannerClientProps {
  pageKey: string
}

function readLocale(): Locale {
  if (typeof document === 'undefined') return 'en'
  const m = document.cookie.match(/(?:^|;\s*)eh-lang=(en|bi|ar)\b/)
  return m?.[1] === 'ar' ? 'ar' : 'en'
}

export function LegalArBannerClient({ pageKey }: LegalArBannerClientProps) {
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    setLocale(readLocale())
    function onLangChange() {
      setLocale(readLocale())
    }
    window.addEventListener('eh-lang-change', onLangChange)
    return () => window.removeEventListener('eh-lang-change', onLangChange)
  }, [])

  if (locale !== 'ar') return null

  const title = lookup(`legal_banner.${pageKey}.title`, locale)
  const body = lookup(`legal_banner.${pageKey}.body`, locale)
  const cta = lookup(`legal_banner.${pageKey}.cta`, locale)
  const ctaHref = lookup(`legal_banner.${pageKey}.cta_href`, 'en')

  return (
    <aside
      dir="rtl"
      lang="ar"
      className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-right"
    >
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <Link
        href={ctaHref}
        className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {cta}
      </Link>
    </aside>
  )
}
