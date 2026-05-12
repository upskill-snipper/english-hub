import type { Metadata } from 'next'
import Link from 'next/link'
import { KS3 } from '@/lib/ks3/curriculum'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: {
    default: 'KS3 English — Years 7, 8 & 9',
    template: '%s · KS3 English · The English Hub',
  },
  description:
    'The full KS3 English curriculum (Years 7–9) — yearly expectations, termly plans, weekly lesson frameworks, marking rubrics, skill progression, and end-of-KS3 standards.',
}

/**
 * Shared shell for the /ks3 route tree.
 *
 * Renders a left-hand year + term nav on lg+ screens and a slim
 * top navigation on smaller viewports. Designed to match the
 * established /revision and /igcse shell rhythms (prose-eh
 * typography, sticky header offset, generous spacing).
 *
 * The KS3 routes do not require an exam-board cookie — KS3 sits
 * before students pick their GCSE/IGCSE board, so middleware
 * allowlists `/ks3` for guests too.
 */
export default async function KS3Layout({ children }: { children: React.ReactNode }) {
  const tr = await Promise.all([
    t('ks3.english_header'), // 0
    t('ks3.nav.overview'), // 1
    t('ks3.marking_rubrics'), // 2
    t('ks3.skill_codes'), // 3
    t('ks3.end_of_ks3'), // 4
    t('ks3.year_overview'), // 5
    t('ks3.year_7_name'), // 6
    t('ks3.year_8_name'), // 7
    t('ks3.year_9_name'), // 8
    t('ks3.year_7'), // 9
    t('ks3.year_8'), // 10
    t('ks3.year_9'), // 11
    t('ks3.term_1'), // 12
    t('ks3.term_2'), // 13
    t('ks3.term_3'), // 14
    t('ks3.nav.aria'), // 15
  ])
  const yearNameTr: Record<number, string> = { 7: tr[6], 8: tr[7], 9: tr[8] }
  const yearLabelTr: Record<number, string> = { 7: tr[9], 8: tr[10], 9: tr[11] }
  const termLabelTr: Record<number, string> = { 1: tr[12], 2: tr[13], 3: tr[14] }

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[14rem_1fr]">
        {/* Sidebar nav */}
        <aside className="hidden lg:block">
          <nav aria-label={tr[15]} className="sticky top-28 space-y-6 text-sm">
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                {tr[0]}
              </p>
              <Link href="/ks3" className="block py-1 hover:text-foreground">
                {tr[1]}
              </Link>
              <Link href="/ks3/rubrics" className="block py-1 hover:text-foreground">
                {tr[2]}
              </Link>
              <Link href="/ks3/skills" className="block py-1 hover:text-foreground">
                {tr[3]}
              </Link>
              <Link href="/ks3/end-of-ks3" className="block py-1 hover:text-foreground">
                {tr[4]}
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
                  {yearLabelTr[year.number]} — {tr[5]}
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

        {/* Page content — uses the same prose-eh variant we shipped for blogs */}
        <article className="prose prose-eh prose-lg max-w-none dark:prose-invert">
          {children}
        </article>
      </div>
    </main>
  )
}
