import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  FileText,
  Feather,
  Library,
  ScrollText,
  GraduationCap,
  Sparkles,
  Target,
  PenTool,
  Brain,
  Layers,
  ChevronRight,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getBoardMismatchState } from '@/app/igcse/_lib/guard'
import BoardMismatchBanner from '@/components/board/BoardMismatchBanner'
import { t } from '@/lib/i18n/t'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel IGCSE English Language A (4EA1) - The English Hub',
    description:
      'Complete revision hub for Pearson Edexcel IGCSE English Language A. Paper 1 non-fiction anthology, Paper 2 transactional writing, exam technique and study tools.',
  },
  title: 'Edexcel IGCSE English Language A (4EA1)',
  description:
    'Complete revision hub for Pearson Edexcel IGCSE English Language A. Paper 1 non-fiction anthology, Paper 2 transactional writing, exam technique and study tools.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel-lang' },
}

/* ─── Data ───────────────────────────────────────────────────────────── */

const paper1Sections = [
  {
    heading: 'Section A - Non-Fiction Anthology',
    label: 'Paper 1 Section A',
    detail:
      'Questions on the 10 prescribed non-fiction texts from the Pearson Edexcel anthology. Retrieval, language analysis, and structural analysis.',
    href: '/igcse/edexcel-lang/anthology',
    subLinks: [
      {
        label: 'The Danger of a Single Story',
        href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
      },
      { label: 'A Passage to Africa', href: '/igcse/edexcel-lang/anthology/a-passage-to-africa' },
      {
        label: "The Explorer's Daughter",
        href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
      },
      {
        label: 'Explorers or Boys Messing About',
        href: '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
      },
      { label: '127 Hours', href: '/igcse/edexcel-lang/anthology/127-hours' },
    ],
  },
  {
    heading: 'Section A - Anthology (continued)',
    label: 'Paper 1 Section A',
    detail: 'The remaining five prescribed non-fiction texts for the anthology study.',
    href: '/igcse/edexcel-lang/anthology',
    subLinks: [
      { label: 'Young and Dyslexic', href: '/igcse/edexcel-lang/anthology/young-and-dyslexic' },
      {
        label: 'A Game of Polo with a Headless Goat',
        href: '/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
      },
      {
        label: 'Beyond the Sky and the Earth',
        href: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
      },
      { label: 'H is for Hawk', href: '/igcse/edexcel-lang/anthology/h-is-for-hawk' },
      { label: 'Chinese Cinderella', href: '/igcse/edexcel-lang/anthology/chinese-cinderella' },
    ],
  },
  {
    heading: 'Section B - Unseen Non-Fiction',
    label: 'Paper 1 Section B',
    detail:
      'One unseen non-fiction extract with comprehension, language and comparison questions. Skills transfer from Section A anthology study.',
    href: '/igcse/edexcel-lang/anthology',
  },
]

const paper2Sections = [
  {
    heading: 'Section A - Reading (Fiction/Literary Non-Fiction)',
    label: 'Paper 2 Section A',
    detail:
      'One unseen fiction or literary non-fiction extract with comprehension and analytical response questions.',
    href: '/igcse/edexcel-lang',
  },
  {
    heading: 'Section B - Transactional Writing',
    label: 'Paper 2 Section B',
    detail:
      'Two transactional writing tasks from a choice. Text types include articles, letters, reports, reviews, speeches and essays.',
    href: '/igcse/edexcel-lang',
  },
]

/* ─── Page ───────────────────────────────────────────────────────────── */

export default async function EdexcelIgcseLangHubPage() {
  const mismatch = await getBoardMismatchState(['edexcel-igcse-lang'])

  return (
    <>
      <CourseJsonLd
        name="Pearson Edexcel IGCSE English Language A (4EA1)"
        description="Complete revision hub for Pearson Edexcel International GCSE English Language A 4EA1 - non-fiction anthology, transactional writing, exam technique."
        educationalLevel="IGCSE"
        provider="The English Hub"
        url="https://theenglishhub.app/igcse/edexcel-lang"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Language A', url: 'https://theenglishhub.app/igcse/edexcel-lang' },
        ]}
      />
      {!mismatch.matched && <BoardMismatchBanner pageBoard="edexcel-igcse-lang" />}
      <div className="space-y-12 pb-16">
        <BreadcrumbJsonLd
          items={[
            { name: 'Home', url: 'https://theenglishhub.app' },
            { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
            { name: 'Edexcel IGCSE Language', url: 'https://theenglishhub.app/igcse/edexcel-lang' },
          ]}
        />
        {/* ── Back link ───────────────────────────────────────────────── */}
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="mb-3 -ml-2 text-muted-foreground"
            render={<Link href="/igcse" />}
          >
            <ArrowLeft className="size-3.5" />
            {await t('igcse.back_to_igcse')}
          </Button>
        </div>

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Sparkles className="mr-1 size-3" />
                {await t('edexcel.lang.hero_badge')}
              </Badge>
            </div>
            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              {await t('edexcel.lang.hero_title')}
            </h1>
            <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
              {await t('edexcel.lang.hero_lead_pre')}
              <strong className="text-foreground">
                {await t('edexcel.lang.hero_lead_nf')}
              </strong>,{' '}
              <strong className="text-foreground">{await t('edexcel.lang.hero_lead_trans')}</strong>
              {await t('edexcel.lang.hero_lead_and')}
              <strong className="text-foreground">{await t('edexcel.lang.hero_lead_anth')}</strong>
              {await t('edexcel.lang.hero_lead_post')}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-body-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
                <ScrollText className="size-3.5" />
                {await t('igcse.papers.count_2')}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
                <Clock className="size-3.5" />
                {await t('edexcel.lang.duration_3h15')}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
                <BookOpen className="size-3.5" />
                {await t('edexcel.lang.anth_texts_count')}
              </span>
            </div>
          </div>
        </section>

        {/* ── Cross-link: Literature set texts ────────────────────────── */}
        <section
          aria-label="Edexcel Literature cross-link"
          className="rounded-xl border border-primary/30 bg-primary/[0.04] p-5"
        >
          <Link href="/igcse/edexcel" className="group flex items-center gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Library className="size-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-heading text-body text-foreground">
                {await t('edexcel.lang.studying_lit_title')}
              </h3>
              <p className="text-body-sm text-muted-foreground">
                {await t('edexcel.lang.studying_lit_body')}
              </p>
            </div>
            <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
          </Link>
        </section>

        {/* ── Anthology version disclaimer ────────────────────────────── */}
        <section
          aria-label="Anthology version notice"
          className="rounded-xl border border-amber-500/30 bg-amber-500/[0.06] p-5 text-body-sm text-card-foreground"
        >
          <p className="mb-2">
            <strong className="text-foreground">Anthology version:</strong> This site teaches the{' '}
            <strong className="text-foreground">Edexcel IGCSE Anthology Issue 2</strong> (ISBN
            978-1-446-93108-0, Pearson Education). Material differences from Issue 1 and from
            freely-available online versions include:
          </p>
          <ol className="mb-2 list-decimal space-y-1 pl-5 text-muted-foreground">
            <li>
              <em>Half-Caste</em> uses Agard&rsquo;s spelling &lsquo;yu&rsquo; (not
              &lsquo;you&rsquo;);
            </li>
            <li>
              <em>The Bright Lights of Sarajevo</em> has additional stanza breaks not in
              Harrison&rsquo;s original <em>Guardian</em> publication;
            </li>
            <li>
              the adapted non-fiction texts (&lsquo;Explorers or boys messing about?&rsquo; and
              &lsquo;Young and dyslexic?&rsquo;) differ from their online originals - always use the
              anthology version when answering Edexcel questions.
            </li>
          </ol>
          <p className="text-body-xs text-muted-foreground">
            © Pearson Education - quotations on individual set-text pages are short fair-dealing
            extracts under CDPA s.30. The full anthology is available only through Pearson&rsquo;s
            school-licensed editions.
          </p>
        </section>

        {/* ── Paper 1 ─────────────────────────────────────────────────── */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <Feather className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">
                {await t('edexcel.lang.paper1.title')}
              </h2>
              <p className="font-mono text-body-xs text-muted-foreground">
                {await t('edexcel.lang.paper1.meta')}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {paper1Sections.map((section) => (
              <div
                key={section.heading}
                className="rounded-2xl border border-border/60 bg-card transition-all duration-200"
              >
                <Link
                  href={section.href}
                  className="group/section flex items-center justify-between gap-3 p-5 pb-3"
                >
                  <div className="min-w-0">
                    <span className="mb-1 block font-mono text-body-xs text-muted-foreground uppercase tracking-wider">
                      {section.label}
                    </span>
                    <h3 className="font-heading text-heading-sm text-foreground group-hover/section:text-primary transition-colors">
                      {section.heading}
                    </h3>
                    <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                      {section.detail}
                    </p>
                  </div>
                  <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover/section:translate-x-0.5 group-hover/section:text-primary" />
                </Link>

                {section.subLinks && section.subLinks.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 border-t border-border/40 px-5 py-3">
                    {section.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="rounded-md border border-border/40 bg-muted/30 px-2.5 py-1 text-body-xs text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Paper 2 ─────────────────────────────────────────────────── */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <PenTool className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">
                {await t('edexcel.lang.paper2.title')}
              </h2>
              <p className="font-mono text-body-xs text-muted-foreground">
                {await t('edexcel.lang.paper2.meta')}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {paper2Sections.map((section) => (
              <div
                key={section.heading}
                className="rounded-2xl border border-border/60 bg-card transition-all duration-200"
              >
                <div className="p-5 pb-3">
                  <span className="mb-1 block font-mono text-body-xs text-muted-foreground uppercase tracking-wider">
                    {section.label}
                  </span>
                  <h3 className="font-heading text-heading-sm text-foreground">
                    {section.heading}
                  </h3>
                  <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                    {section.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Study Tools ─────────────────────────────────────────────── */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <GraduationCap className="size-5 text-primary" />
            </div>
            <h2 className="text-heading-lg font-heading text-foreground">
              {await t('igcse.section.quick_links')}
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {await Promise.all(
              (
                [
                  {
                    titleKey: 'edexcel.lang.tool.anthology.title',
                    descKey: 'edexcel.lang.tool.anthology.desc',
                    href: '/igcse/edexcel-lang/anthology',
                    icon: BookOpen,
                  },
                  {
                    titleKey: 'igcse.tool.ai_marking.title',
                    descKey: 'igcse.tool.ai_marking.desc',
                    href: '/marking',
                    icon: PenTool,
                  },
                  {
                    titleKey: 'igcse.tool.quiz.title',
                    descKey: 'edexcel.lang.tool.quiz.desc',
                    href: '/revision/quiz',
                    icon: Brain,
                  },
                ] as const
              ).map(async (tool) => {
                const Icon = tool.icon
                const title = await t(tool.titleKey)
                const description = await t(tool.descKey)
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-card-hover"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-body text-foreground">{title}</h3>
                      <p className="text-body-xs text-muted-foreground">{description}</p>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                )
              }),
            )}
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────────────────── */}
        <footer className="pt-4 text-center text-body-xs text-muted-foreground">
          {await t('edexcel.lang.footer_align')}
        </footer>
      </div>
    </>
  )
}
