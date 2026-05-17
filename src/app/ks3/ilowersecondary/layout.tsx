import type { Metadata } from 'next'
import Link from 'next/link'
import { QUALIFICATION } from '@/lib/ilowersecondary/spec'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: {
    default: `${QUALIFICATION.title} (${QUALIFICATION.subjectCode})`,
    template: '%s · iLowerSecondary English · The English Hub',
  },
  description:
    `Student learning hub for the ${QUALIFICATION.title} (${QUALIFICATION.subjectCode}). ` +
    'Specification, exam format, mark scheme, grade targets S1–S4, reading and writing skills, ' +
    'question types, text types, original practice papers, quizzes, a grammar lab and vocabulary builder.',
}

/**
 * Standalone shell for the /ks3/ilowersecondary subtree.
 *
 * This layout nests inside the existing /ks3 layout, which already
 * supplies the outer <main> and the prose-eh <article> wrapper. To
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
