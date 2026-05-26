'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { KS3 } from '@/lib/ks3/curriculum'
import { useT } from '@/lib/i18n/use-t'

/**
 * Shared shell for the /ks3 route tree.
 *
 * The EXACT `/ks3` index is the curriculum *hub* - it owns its own
 * full-width layout (gradient hero + section card grids, mirroring the
 * `/revision` hub) and must NOT be boxed inside the curriculum sidebar
 * or the `prose` typography wrapper. Every OTHER `/ks3/*` route
 * (year/term/week pages, rubrics, skills, end-of-ks3, the
 * iLowerSecondary subtree) keeps the established left-hand year + term
 * nav + prose-eh article shell.
 *
 * We branch on `usePathname()` - the same client-pathname pattern the
 * codebase already uses for `legal/layout.tsx` and
 * `dashboard/teacher/layout.tsx`. A Client Component can't export
 * `metadata`, so the KS3 `title` template + description moved to the
 * index `page.tsx` (a Server Component); KS3 sub-pages keep their own
 * per-page `title` and inherit the site-wide
 * `'%s - The English Hub'` template from the root layout.
 *
 * The KS3 routes do not require an exam-board cookie - KS3 sits
 * before students pick their GCSE/IGCSE board, so middleware
 * allowlists `/ks3` for guests too.
 */
export default function KS3Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const t = useT()

  // The middleware rewrites `/ar/ks3` → `/ks3` internally, but the
  // browser-visible pathname (what usePathname returns) may still be
  // `/ar/ks3` in Arabic mode. Treat both as the hub index. A trailing
  // slash is normalised too so `/ks3/` doesn't fall through to the
  // sidebar shell.
  const normalised = pathname.replace(/\/+$/, '') || '/'
  const isHubIndex = normalised === '/ks3' || normalised === '/ar/ks3'

  // ── Hub index → full-width, no sidebar, no prose wrapper ──────────
  // The page renders its own hub chrome (see src/app/ks3/page.tsx),
  // matching the /revision hub exactly.
  if (isHubIndex) {
    return <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">{children}</main>
  }

  // ── Every other /ks3/* route → existing sidebar + prose shell ─────
  const yearNameTr: Record<number, string> = {
    7: t('ks3.year_7_name'),
    8: t('ks3.year_8_name'),
    9: t('ks3.year_9_name'),
  }
  const yearLabelTr: Record<number, string> = {
    7: t('ks3.year_7'),
    8: t('ks3.year_8'),
    9: t('ks3.year_9'),
  }
  const termLabelTr: Record<number, string> = {
    1: t('ks3.term_1'),
    2: t('ks3.term_2'),
    3: t('ks3.term_3'),
  }

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[14rem_1fr]">
        {/* Sidebar nav */}
        <aside className="hidden lg:block">
          <nav aria-label={t('ks3.nav.aria')} className="sticky top-28 space-y-6 text-sm">
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                {t('ks3.english_header')}
              </p>
              <Link href="/ks3" className="block py-1 hover:text-foreground">
                {t('ks3.nav.overview')}
              </Link>
              <Link href="/ks3/rubrics" className="block py-1 hover:text-foreground">
                {t('ks3.marking_rubrics')}
              </Link>
              <Link href="/ks3/skills" className="block py-1 hover:text-foreground">
                {t('ks3.skill_codes')}
              </Link>
              <Link href="/ks3/end-of-ks3" className="block py-1 hover:text-foreground">
                {t('ks3.end_of_ks3')}
              </Link>
            </div>
            {KS3.years.map((year) => (
              <div key={year.number}>
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                  {yearNameTr[year.number] ?? year.name.en}
                </p>
                <Link
                  href={`/ks3/year-${year.number}`}
                  className="block py-1 font-medium hover:text-foreground"
                >
                  {yearLabelTr[year.number]} - {t('ks3.year_overview')}
                </Link>
                {year.terms.map((term) => (
                  <Link
                    key={term.number}
                    href={`/ks3/year-${year.number}/term-${term.number}`}
                    className="block py-1 ps-3 text-muted-foreground hover:text-foreground"
                  >
                    {termLabelTr[term.number]}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        {/* Page content - uses the same prose-eh variant we shipped for blogs */}
        <article className="prose prose-eh prose-lg max-w-none dark:prose-invert">
          {children}
        </article>
      </div>
    </main>
  )
}
