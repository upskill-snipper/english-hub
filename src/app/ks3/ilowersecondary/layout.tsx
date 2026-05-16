import type { Metadata } from 'next'
import Link from 'next/link'
import { QUALIFICATION } from '@/lib/ilowersecondary/spec'

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

const SUBNAV: { href: string; label: string }[] = [
  { href: '/ks3/ilowersecondary', label: 'Overview' },
  { href: '/ks3/ilowersecondary/specification', label: 'Specification' },
  { href: '/ks3/ilowersecondary/exam-format', label: 'Exam format' },
  { href: '/ks3/ilowersecondary/mark-scheme', label: 'Mark scheme' },
  { href: '/ks3/ilowersecondary/grade-targets', label: 'Grade targets S1–S4' },
  { href: '/ks3/ilowersecondary/reading-skills', label: 'Reading skills' },
  { href: '/ks3/ilowersecondary/writing-skills', label: 'Writing skills' },
  { href: '/ks3/ilowersecondary/question-types', label: 'Question types' },
  { href: '/ks3/ilowersecondary/text-types', label: 'Text types' },
  { href: '/ks3/ilowersecondary/fiction', label: 'Fiction' },
  { href: '/ks3/ilowersecondary/practice', label: 'Practice papers' },
  { href: '/ks3/ilowersecondary/quiz', label: 'Quiz' },
  { href: '/ks3/ilowersecondary/grammar-lab', label: 'Grammar lab' },
  { href: '/ks3/ilowersecondary/vocabulary', label: 'Vocabulary' },
]

export default function ILowerSecondaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav
        aria-label="iLowerSecondary English sections"
        className="not-prose mb-8 rounded-xl border border-border/60 bg-card p-4"
      >
        <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
          iLowerSecondary English
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {SUBNAV.map((item) => (
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
