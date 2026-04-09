'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

/**
 * Conditionally renders the root Header and Footer.
 *
 * Routes under /school and /demo/school have their own complete layout
 * (sidebar navigation, mobile header, etc.), so the root Header and Footer
 * are hidden to avoid double navigation bars and to let the school layout
 * occupy the full viewport.
 */

const FULL_LAYOUT_PREFIXES = ['/school', '/demo/school']

export function RootLayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isSchoolRoute = FULL_LAYOUT_PREFIXES.some((p) => pathname.startsWith(p))

  if (isSchoolRoute) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <div id="main-content" className="min-h-[calc(100vh-3.5rem)]">
        {children}
      </div>
      <Footer />
    </>
  )
}
