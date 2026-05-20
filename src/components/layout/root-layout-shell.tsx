'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useT } from '@/lib/i18n/use-t'

/**
 * Conditionally renders the root Header and Footer.
 *
 * Routes under /school and /demo/school have their own complete layout
 * (sidebar navigation, mobile header, etc.), so the root Header and Footer
 * are hidden to avoid double navigation bars and to let the school layout
 * occupy the full viewport.
 *
 * 2026-05-20: bug fix — the previous `startsWith('/school')` check also
 * matched the public marketing routes `/schools` and `/school-pilot`,
 * which hid the root Header (and its theme + language toggles) on those
 * pages. We now match either the EXACT prefix (`/school`, `/demo/school`)
 * or the prefix followed by a slash (`/school/`, `/demo/school/`) so
 * `/schools`, `/school-pilot`, `/schools-anything` are NOT swallowed.
 */

const FULL_LAYOUT_PREFIXES = ['/school', '/demo/school']

export function RootLayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const t = useT()
  const isSchoolRoute = FULL_LAYOUT_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(p + '/'),
  )

  if (isSchoolRoute) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <div
        id="main-content"
        role="main"
        aria-label={t('layout.main_content_label')}
        className="min-h-[calc(100vh-3.5rem)]"
      >
        {children}
      </div>
      <Footer />
    </>
  )
}
