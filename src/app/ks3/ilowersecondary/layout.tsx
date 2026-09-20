import type { Metadata } from 'next'
import Link from 'next/link'
import { QUALIFICATION } from '@/lib/ilowersecondary/spec'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  // BOTH a default and a template, and the pair matters.
  //
  // `default` is this segment's own title. `template` is what the 64 pages
  // beneath it compose with, and without it Next gives them no template at
  // all - a page then renders bare, so /ks3/ilowersecondary/fiction is a
  // search result reading "Fiction" and nothing else. That was briefly the
  // state on 20 September while this section's titles were being shortened.
  //
  // The template was ' · iLowerSecondary English · The English Hub' until the
  // same day: 43 characters, so any page title over seventeen exceeded the ~60
  // Google displays, and 56 of 65 pages did. The brand is dropped because
  // Google appends or rewrites the site name itself; the qualification stays
  // because it is what a student types.
  title: {
    default: 'iLowerSecondary English (LEH11)',
    template: '%s · iLowerSecondary English',
  },
  description:
    'The iLowerSecondary English student hub: specification, exam format, mark scheme, grade targets, reading and writing skills, and practice papers.',
}

/**
 * Standalone shell for the /ks3/ilowersecondary subtree.
 *
 * This layout nests inside the existing /ks3 layout, which already
 * supplies the outer content wrapper and the prose-eh <article>. To
 * avoid double-wrapping we only add a compact in-section sub-nav and
 * then render {children}.
 */

export default async function ILowerSecondaryLayout({ children }: { children: React.ReactNode }) {
  const subnav: { href: string; label: string }[] = [
    { href: '/ks3/ilowersecondary', label: await t('ks3.ils.nav.overview') },
    { href: '/ks3/ilowersecondary/specification', label: await t('ks3.ils.nav.specification') },
    { href: '/ks3/ilowersecondary/exam-format', label: await t('ks3.ils.nav.exam_format') },
    { href: '/ks3/ilowersecondary/mark-scheme', label: await t('ks3.ils.nav.mark_scheme') },
    { href: '/ks3/ilowersecondary/grade-targets', label: await t('ks3.ils.nav.grade_targets') },
    { href: '/ks3/ilowersecondary/reading-skills', label: await t('ks3.ils.nav.reading_skills') },
    { href: '/ks3/ilowersecondary/writing-skills', label: await t('ks3.ils.nav.writing_skills') },
    { href: '/ks3/ilowersecondary/question-types', label: await t('ks3.ils.nav.question_types') },
    { href: '/ks3/ilowersecondary/text-types', label: await t('ks3.ils.nav.text_types') },
    { href: '/ks3/ilowersecondary/fiction', label: await t('ks3.ils.nav.fiction') },
    { href: '/ks3/ilowersecondary/practice', label: await t('ks3.ils.nav.practice') },
    { href: '/ks3/ilowersecondary/quiz', label: await t('ks3.ils.nav.quiz') },
    { href: '/ks3/ilowersecondary/grammar-lab', label: await t('ks3.ils.nav.grammar_lab') },
    { href: '/ks3/ilowersecondary/vocabulary', label: await t('ks3.ils.nav.vocabulary') },
  ]
  const navHeader = await t('ks3.ils.nav.header')
  const navAria = await t('ks3.ils.nav.aria')

  return (
    <>
      <nav
        aria-label={navAria}
        className="not-prose mb-8 rounded-xl border border-border/60 bg-card p-4"
      >
        <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
          {navHeader}
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {subnav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </>
  )
}
