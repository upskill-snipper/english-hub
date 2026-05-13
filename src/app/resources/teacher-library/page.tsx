import type { Metadata } from 'next'
import Link from 'next/link'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Teacher Resources Library',
  description:
    'Free, downloadable teaching resources for GCSE English: lesson plans, worksheets, mark schemes, revision packs, starter activities, and homework tasks.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/teacher-library',
  },
  openGraph: {
    title: 'Teacher Resources Library — The English Hub',
    description:
      'Free, downloadable teaching resources for GCSE English teachers. Lesson plans, worksheets, mark schemes, and more.',
  },
}

// Categories are now keyed; rendered text comes from the dictionary.
const CATEGORIES = [
  { id: 'lesson_plans', href: '/resources/teacher-library/lesson-plans' },
  { id: 'worksheets', href: '/resources/teacher-library/worksheets' },
  { id: 'mark_schemes', href: '/resources/teacher-library/mark-schemes' },
  { id: 'revision_packs', href: '/resources/teacher-library/revision-packs' },
  { id: 'starters', href: '/resources/teacher-library/starters' },
  { id: 'homework', href: '/resources/teacher-library/homework' },
] as const

export default async function TeacherLibraryHub() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)

  // Pull every visible string in one batched read so we don't pay the
  // per-key headers() round-trip on a server component this large.
  const [
    eyebrow,
    eyebrowBoardPrefix,
    title,
    subtitle,
    badgeFree,
    badgeNoAccount,
    badgeBoards,
    browseHeading,
    browseCta,
    footerTitle,
    footerBody,
    footerLink,
    lpTitle,
    lpKind,
    lpCount,
    lpDesc,
    wsTitle,
    wsKind,
    wsCount,
    wsDesc,
    msTitle,
    msKind,
    msCount,
    msDesc,
    rpTitle,
    rpKind,
    rpCount,
    rpDesc,
    stTitle,
    stKind,
    stCount,
    stDesc,
    hwTitle,
    hwKind,
    hwCount,
    hwDesc,
  ] = await tMany([
    'teacher_page.library.eyebrow',
    'teacher_page.library.eyebrow_board_prefix',
    'teacher_page.library.title',
    'teacher_page.library.subtitle',
    'teacher_page.library.badge.free',
    'teacher_page.library.badge.no_account',
    'teacher_page.library.badge.boards',
    'teacher_page.library.browse_heading',
    'teacher_page.library.browse_cta',
    'teacher_page.library.footer_title',
    'teacher_page.library.footer_body',
    'teacher_page.library.footer_link',
    'teacher_page.library.cat.lesson_plans.title',
    'teacher_page.library.cat.lesson_plans.kind',
    'teacher_page.library.cat.lesson_plans.count',
    'teacher_page.library.cat.lesson_plans.desc',
    'teacher_page.library.cat.worksheets.title',
    'teacher_page.library.cat.worksheets.kind',
    'teacher_page.library.cat.worksheets.count',
    'teacher_page.library.cat.worksheets.desc',
    'teacher_page.library.cat.mark_schemes.title',
    'teacher_page.library.cat.mark_schemes.kind',
    'teacher_page.library.cat.mark_schemes.count',
    'teacher_page.library.cat.mark_schemes.desc',
    'teacher_page.library.cat.revision_packs.title',
    'teacher_page.library.cat.revision_packs.kind',
    'teacher_page.library.cat.revision_packs.count',
    'teacher_page.library.cat.revision_packs.desc',
    'teacher_page.library.cat.starters.title',
    'teacher_page.library.cat.starters.kind',
    'teacher_page.library.cat.starters.count',
    'teacher_page.library.cat.starters.desc',
    'teacher_page.library.cat.homework.title',
    'teacher_page.library.cat.homework.kind',
    'teacher_page.library.cat.homework.count',
    'teacher_page.library.cat.homework.desc',
  ])

  const categoryCopy: Record<
    (typeof CATEGORIES)[number]['id'],
    { title: string; kind: string; count: string; desc: string }
  > = {
    lesson_plans: { title: lpTitle, kind: lpKind, count: lpCount, desc: lpDesc },
    worksheets: { title: wsTitle, kind: wsKind, count: wsCount, desc: wsDesc },
    mark_schemes: { title: msTitle, kind: msKind, count: msCount, desc: msDesc },
    revision_packs: { title: rpTitle, kind: rpKind, count: rpCount, desc: rpDesc },
    starters: { title: stTitle, kind: stKind, count: stCount, desc: stDesc },
    homework: { title: hwTitle, kind: hwKind, count: hwCount, desc: hwDesc },
  }
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
                {eyebrow}
              </span>
              {boardConfig && (
                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                  {eyebrowBoardPrefix} {boardConfig.shortName}
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-success-600" />
                {badgeFree}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-success-600" />
                {badgeNoAccount}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-success-600" />
                {badgeBoards}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-8 text-2xl font-bold text-foreground">{browseHeading}</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => {
            const copy = categoryCopy[cat.id]
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
                    {copy.kind}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">{copy.count}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {copy.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {copy.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors group-hover:text-primary">
                  {browseCta}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Footer strip */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center">
          <h2 className="text-xl font-bold text-foreground">{footerTitle}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{footerBody}</p>
          <Link
            href="/resources/teaching"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            {footerLink} →
          </Link>
        </div>
      </section>
    </main>
  )
}
