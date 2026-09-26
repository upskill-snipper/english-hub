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
import { ANTHOLOGY_SOURCE } from '@/lib/board/edexcel-igcse-anthology'

import { CourseJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel IGCSE English Language A (4EA1) - The English Hub',
    description:
      'Revision hub for Pearson Edexcel IGCSE English Language A 4EA1: Paper 1 non-fiction and transactional writing, Paper 2 poetry, prose and imaginative writing.',
    images: [
      {
        url: '/api/og?title=Edexcel+IGCSE+English+Language+A+(4EA1)+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Edexcel IGCSE English Language A (4EA1) - The English Hub',
      },
    ],
  },
  title: 'Edexcel IGCSE English Language A (4EA1)',
  description:
    'Revision hub for Pearson Edexcel IGCSE English Language A 4EA1: Paper 1 non-fiction and transactional writing, Paper 2 poetry, prose and imaginative writing.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel-lang' },
}

/* ─── Data ───────────────────────────────────────────────────────────── */

// CORRECTED 26 September 2026 against the specification (Issue 7, August
// 2025) and the 4EA1 papers. These cards put the unseen extract in a Paper 1
// "Section B", gave Section A retrieval and separate language and structure
// questions, and described Paper 2 as unseen fiction plus two transactional
// tasks. Paper 1 Section A is one anthology text and one unseen extract (45
// marks); Section B is one transactional task (45 marks); Paper 2 is a
// 30-mark essay on a Part 2 anthology text and a 30-mark imaginative task.
// A card with no href renders without a link: the site has no IGCSE
// transactional writing page, and the GCSE one sets a different paper.
type PaperSection = {
  heading: string
  label: string
  detail: string
  href?: string
  subLinks?: { label: string; href: string }[]
}

const paper1Sections: PaperSection[] = [
  {
    heading: 'Section A - Reading: Non-Fiction Texts',
    label: 'Paper 1 Section A',
    detail:
      'Two texts: an unseen extract (Text One) and one of the 10 prescribed non-fiction texts from the Pearson Edexcel anthology (Text Two). Questions 1 to 3 (2, 4 and 5 marks) are on the unseen extract, Question 4 (12 marks) asks how the anthology writer uses language and structure, and Question 5 (22 marks) compares the two texts. 45 marks; about 1 hour 30 minutes, including reading time.',
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
    heading: 'Section B - Transactional Writing',
    label: 'Paper 1 Section B',
    detail:
      'One 45-mark writing task, chosen from two prompts that set an audience, form or purpose. The text types are an article for a magazine or newspaper, a speech, a letter, a guide, a review and the text of a leaflet. About 45 minutes.',
  },
]

const paper2Sections: PaperSection[] = [
  {
    heading: 'Section A - Poetry and Prose Texts',
    label: 'Paper 2 Section A',
    detail:
      'One 30-mark essay on a poem or prose text from Part 2 of the anthology, which is provided in the exam. There is no choice of text. About 45 minutes.',
  },
  {
    heading: 'Section B - Imaginative Writing',
    label: 'Paper 2 Section B',
    detail: 'One 30-mark imaginative writing task, chosen from three prompts. About 45 minutes.',
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

      {!mismatch.matched && <BoardMismatchBanner pageBoard="edexcel-igcse-lang" />}
      <div className="space-y-12 pb-16">
        {/* ── Back link ───────────────────────────────────────────────── */}
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="mb-3 -ms-2 text-muted-foreground"
            render={<Link href="/igcse" />}
          >
            <ArrowLeft className="size-3.5" />
            {await t('igcse.back_to_igcse')}
          </Button>
        </div>

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -start-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Sparkles className="me-1 size-3" />
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
                {await t('edexcel.lang.duration_total')}
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
          {/* Until 26 September 2026 this named Issue 2 and said the anthology was
              available "only through Pearson's school-licensed editions". The
              current issue is 8 (February 2026, same ISBN), and Pearson publishes
              it free as a PDF at the address linked below. */}
          <p className="mb-2">
            <strong className="text-foreground">Anthology version:</strong> This site teaches{' '}
            <strong className="text-foreground">Issue 8 (February 2026)</strong> of the Pearson
            Edexcel International GCSE English Anthology (ISBN 978-1-446-93108-0). Material
            differences from freely-available online versions include:
          </p>
          <ol className="mb-2 list-decimal space-y-1 ps-5 text-muted-foreground">
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
            Anthology © Pearson Education Limited 2026. Quotations on individual set-text pages are
            short fair-dealing extracts under CDPA s.30. Pearson publishes the full anthology free
            as a{' '}
            <a
              href={ANTHOLOGY_SOURCE.url}
              className="underline underline-offset-2 hover:text-foreground"
              rel="noopener noreferrer"
              target="_blank"
            >
              PDF on its qualifications website
            </a>
            .
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
                {section.href ? (
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
                ) : (
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
                )}

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
