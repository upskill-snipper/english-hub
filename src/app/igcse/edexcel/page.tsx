import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  FileText,
  Feather,
  Drama,
  Landmark,
  ScrollText,
  GraduationCap,
  Sparkles,
  Target,
  PenTool,
  Brain,
  Gamepad2,
  BarChart3,
  Layers,
  Library,
  Wrench,
  ChevronRight,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getBoardMismatchState } from '@/app/igcse/_lib/guard'
import BoardMismatchBanner from '@/components/board/BoardMismatchBanner'
import { getSetTextsForBoard } from '@/lib/board/set-texts'
import { t } from '@/lib/i18n/t'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel IGCSE Literature - The English Hub',
    description:
      'Complete revision hub for Pearson Edexcel IGCSE English Literature. Paper 1 and Paper 2 breakdowns, set text guides, anthology poetry and exam technique.',
  },
  title: 'Edexcel IGCSE Literature',
  description:
    'Complete revision hub for Pearson Edexcel IGCSE English Literature. Paper 1 and Paper 2 breakdowns, set text guides, anthology poetry and exam technique.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel' },
}

/* ─── Data ───────────────────────────────────────────────────────────── */

interface TextEntry {
  name: string
  author: string
  href: string
  subLinks?: { label: string; href: string }[]
}

const paper1Sections = [
  {
    heading: 'Section A - Unseen Poetry',
    label: 'Paper 1 Section A',
    detail: 'One question on a single unseen poem. Comment on language, structure and meaning.',
    href: '/igcse/edexcel/unseen-poetry',
    subLinks: [
      { label: 'Approach', href: '/igcse/edexcel/unseen-poetry/approach' },
      { label: 'Language analysis', href: '/igcse/edexcel/unseen-poetry/language-analysis' },
      { label: 'Structure & form', href: '/igcse/edexcel/unseen-poetry/structure-form' },
      { label: 'Comparison', href: '/igcse/edexcel/unseen-poetry/comparison' },
      { label: 'Practice', href: '/igcse/edexcel/unseen-poetry/practice' },
    ],
  },
  {
    heading: 'Section B - Anthology Poetry',
    label: 'Paper 1 Section B',
    detail: 'One question comparing two poems from the Pearson Edexcel Poetry Anthology.',
    href: '/igcse/edexcel/poetry',
    subLinks: [
      { label: 'If-', href: '/igcse/edexcel/poetry/if' },
      { label: 'Remember', href: '/igcse/edexcel/poetry/remember' },
      { label: 'Sonnet 116', href: '/igcse/edexcel/poetry/sonnet-116' },
      { label: 'The Tyger', href: '/igcse/edexcel/poetry/the-tyger' },
      { label: 'La Belle Dame sans Merci', href: '/igcse/edexcel/poetry/la-belle-dame-sans-merci' },
    ],
  },
  {
    heading: 'Section C - Modern Prose',
    label: 'Paper 1 Section C',
    detail: 'One essay question on a studied modern prose text. Closed book.',
    href: '/igcse/edexcel/prose',
    texts: [
      {
        name: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        href: '/igcse/edexcel/prose/to-kill-a-mockingbird',
        subLinks: [
          { label: 'Characters', href: '/igcse/edexcel/prose/to-kill-a-mockingbird/characters' },
          { label: 'Themes', href: '/igcse/edexcel/prose/to-kill-a-mockingbird/themes' },
          { label: 'Context', href: '/igcse/edexcel/prose/to-kill-a-mockingbird/context' },
        ],
      },
      {
        name: 'Of Mice and Men',
        author: 'John Steinbeck',
        href: '/igcse/edexcel/prose/of-mice-and-men',
        subLinks: [{ label: 'Themes', href: '/igcse/edexcel/prose/of-mice-and-men/themes' }],
      },
      {
        name: 'Things Fall Apart',
        author: 'Chinua Achebe',
        href: '/igcse/edexcel/prose/things-fall-apart',
        subLinks: [{ label: 'Themes', href: '/igcse/edexcel/prose/things-fall-apart/themes' }],
      },
    ] as TextEntry[],
  },
]

const paper2Sections = [
  {
    heading: 'Section A - Modern Drama',
    label: 'Paper 2 Section A',
    detail: 'One extract-based question on a studied modern drama text.',
    href: '/igcse/edexcel/drama',
    texts: [
      {
        name: 'An Inspector Calls',
        author: 'J.B. Priestley',
        href: '/igcse/edexcel/drama/an-inspector-calls',
        subLinks: [
          { label: 'Characters', href: '/igcse/edexcel/drama/an-inspector-calls/characters' },
          { label: 'Themes', href: '/igcse/edexcel/drama/an-inspector-calls/themes' },
          { label: 'Context', href: '/igcse/edexcel/drama/an-inspector-calls/context' },
        ],
      },
      {
        name: 'A View from the Bridge',
        author: 'Arthur Miller',
        href: '/igcse/edexcel/drama/a-view-from-the-bridge',
        subLinks: [{ label: 'Themes', href: '/igcse/edexcel/drama/a-view-from-the-bridge/themes' }],
      },
      {
        name: 'The Curious Incident of the Dog in the Night-Time',
        author: 'Simon Stephens',
        href: '/igcse/edexcel/drama/curious-incident',
        subLinks: [{ label: 'Themes', href: '/igcse/edexcel/drama/curious-incident/themes' }],
      },
    ] as TextEntry[],
  },
  {
    heading: 'Section B - Literary Heritage',
    label: 'Paper 2 Section B',
    detail: 'One essay question on a studied Shakespeare play. Closed book.',
    href: '/igcse/edexcel/shakespeare',
    texts: [
      {
        name: 'Macbeth',
        author: 'William Shakespeare',
        href: '/igcse/edexcel/shakespeare/macbeth',
        subLinks: [
          { label: 'Characters', href: '/igcse/edexcel/shakespeare/macbeth/characters' },
          { label: 'Themes', href: '/igcse/edexcel/shakespeare/macbeth/themes' },
          { label: 'Context', href: '/igcse/edexcel/shakespeare/macbeth/context' },
          { label: 'Plot', href: '/igcse/edexcel/shakespeare/macbeth/plot' },
          { label: 'Key Quotes', href: '/igcse/edexcel/shakespeare/macbeth/quotes' },
        ],
      },
      {
        name: 'Romeo and Juliet',
        author: 'William Shakespeare',
        href: '/igcse/edexcel/shakespeare/romeo-and-juliet',
        subLinks: [
          { label: 'Themes', href: '/igcse/edexcel/shakespeare/romeo-and-juliet/themes' },
          { label: 'Key Quotes', href: '/igcse/edexcel/shakespeare/romeo-and-juliet/quotes' },
        ],
      },
      {
        name: 'Much Ado About Nothing',
        author: 'William Shakespeare',
        href: '/igcse/edexcel/shakespeare/much-ado',
        subLinks: [
          { label: 'Themes', href: '/igcse/edexcel/shakespeare/much-ado/themes' },
          { label: 'Key Quotes', href: '/igcse/edexcel/shakespeare/much-ado/quotes' },
        ],
      },
    ] as TextEntry[],
  },
]

const studyTools = [
  {
    titleKey: 'igcse.tool.ai_marking.title',
    descKey: 'igcse.tool.ai_marking.desc',
    href: '/marking',
    icon: PenTool,
  },
  {
    titleKey: 'igcse.tool.quiz.title',
    descKey: 'igcse.tool.quiz.desc',
    href: '/revision/quiz',
    icon: Brain,
  },
  {
    titleKey: 'igcse.tool.flashcards.title',
    descKey: 'igcse.tool.flashcards.desc',
    href: '/resources/study-tools/flashcards',
    icon: Layers,
  },
  {
    titleKey: 'igcse.tool.games.title',
    descKey: 'igcse.tool.games.desc',
    href: '/games',
    icon: Gamepad2,
  },
  {
    titleKey: 'igcse.tool.toolkit.title',
    descKey: 'igcse.tool.toolkit.desc',
    href: '/toolkit',
    icon: Wrench,
  },
]

const examResources = [
  {
    titleKey: 'edexcel.lit.exam.past_papers.title',
    descKey: 'edexcel.lit.exam.past_papers.desc',
    href: '/igcse/edexcel/past-papers',
    icon: FileText,
  },
  {
    titleKey: 'edexcel.lit.exam.technique.title',
    descKey: 'edexcel.lit.exam.technique.desc',
    href: '/igcse/edexcel/exam-technique',
    icon: Target,
  },
  {
    titleKey: 'edexcel.lit.exam.essay.title',
    descKey: 'edexcel.lit.exam.essay.desc',
    href: '/igcse/edexcel/essay-technique',
    icon: PenTool,
  },
  {
    titleKey: 'edexcel.lit.exam.grade.title',
    descKey: 'edexcel.lit.exam.grade.desc',
    href: '/revision/grade-targets',
    icon: BarChart3,
  },
  {
    titleKey: 'edexcel.lit.exam.syllabus.title',
    descKey: 'edexcel.lit.exam.syllabus.desc',
    href: '/igcse/edexcel/syllabus',
    icon: ScrollText,
  },
]

/* ─── Reusable components ────────────────────────────────────────────── */

function TextCard({ text }: { text: TextEntry }) {
  return (
    <div className="group/text rounded-xl border border-border/60 bg-card transition-all duration-200 hover:border-primary/30 hover:shadow-card-hover">
      <Link href={text.href} className="flex items-center justify-between gap-3 p-4">
        <div className="min-w-0">
          <h4 className="font-heading text-body text-foreground truncate">{text.name}</h4>
          <p className="text-body-xs text-muted-foreground">{text.author}</p>
        </div>
        <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover/text:translate-x-0.5 group-hover/text:text-primary" />
      </Link>
      {text.subLinks && text.subLinks.length > 0 && (
        <div className="flex flex-wrap gap-1.5 border-t border-border/40 px-4 py-2.5">
          {text.subLinks.map((sub) => (
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
  )
}

function SectionCard({
  section,
}: {
  section: {
    heading: string
    label: string
    detail: string
    href: string
    subLinks?: { label: string; href: string }[]
    texts?: TextEntry[]
  }
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card transition-all duration-200">
      {/* Section header - clickable */}
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

      {/* Sub-links (e.g. poem names for anthology, approach links for unseen) */}
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

      {/* Individual text cards (prose / drama / shakespeare) */}
      {section.texts && section.texts.length > 0 && (
        <div className="space-y-2 border-t border-border/40 p-4 pt-3">
          {section.texts.map((text) => (
            <TextCard key={text.href} text={text} />
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────────────── */

export default async function EdexcelIgcseHubPage() {
  const mismatch = await getBoardMismatchState(['edexcel-igcse'])

  // All Literature set texts prescribed for Pearson Edexcel IGCSE - pulled
  // straight from the canonical set-texts data so this list stays in sync
  // with the rest of the site (no hard-coded counts).
  const setTexts = getSetTextsForBoard('edexcel-igcse')

  // Category labels translate via the dictionary so the AR toggle updates
  // them. Fallback to the EN label is automatic when AR is missing.
  const setTextCategoryLabels: Record<string, string> = {
    shakespeare: await t('edexcel.lit.cat.shakespeare'),
    '19th-century': await t('edexcel.lit.cat.19c'),
    modern: await t('edexcel.lit.cat.modern'),
    'poetry-anthology': await t('edexcel.lit.cat.poetry'),
    'non-fiction': await t('edexcel.lit.cat.nonfiction'),
    prose: await t('edexcel.lit.cat.prose'),
  }

  return (
    <>
      <CourseJsonLd
        name="Pearson Edexcel IGCSE English Literature (4ET1)"
        description="Complete revision hub for Pearson Edexcel International GCSE English Literature 4ET1 - drama, prose, Shakespeare, anthology poetry, unseen poetry, and exam technique."
        educationalLevel="IGCSE"
        provider="The English Hub"
        url="https://theenglishhub.app/igcse/edexcel"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
        ]}
      />
      {!mismatch.matched && <BoardMismatchBanner pageBoard="edexcel-igcse" />}
      <div className="space-y-12 pb-16">
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
                {await t('edexcel.lit.hero_badge')}
              </Badge>
            </div>
            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              {await t('edexcel.lit.hero_title')}
            </h1>
            <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
              {await t('edexcel.lit.hero_lead_pre')}
              <strong className="text-foreground">{await t('edexcel.lit.hero_lead_poetry')}</strong>
              {await t('edexcel.lit.hero_lead_and')}
              <strong className="text-foreground">{await t('edexcel.lit.hero_lead_shakes')}</strong>
              {await t('edexcel.lit.hero_lead_post')}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-body-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
                <ScrollText className="size-3.5" />
                {await t('igcse.papers.count_2')}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
                <Clock className="size-3.5" />
                {await t('edexcel.lit.duration_3h30')}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
                <BookOpen className="size-3.5" />
                {await t('edexcel.lit.set_texts_count')}
              </span>
            </div>
          </div>
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
                {await t('edexcel.lit.paper1.title')}
              </h2>
              <p className="font-mono text-body-xs text-muted-foreground">
                {await t('edexcel.lit.paper1.meta')}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {paper1Sections.map((section) => (
              <SectionCard key={section.heading} section={section} />
            ))}
          </div>
        </section>

        {/* ── Paper 2 ─────────────────────────────────────────────────── */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <Drama className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">
                {await t('edexcel.lit.paper2.title')}
              </h2>
              <p className="font-mono text-body-xs text-muted-foreground">
                {await t('edexcel.lit.paper2.meta')}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {paper2Sections.map((section) => (
              <SectionCard key={section.heading} section={section} />
            ))}
          </div>
        </section>

        {/* ── Set Texts (full study guides) ───────────────────────────── */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <Library className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">
                {await t('igcse.section.set_texts')}
              </h2>
              <p className="font-mono text-body-xs text-muted-foreground">
                {await t('edexcel.lit.set_texts.subtitle')}
              </p>
            </div>
          </div>

          <p className="mb-5 max-w-3xl text-body-sm text-muted-foreground leading-relaxed">
            {await t('edexcel.lit.set_texts.intro')}
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {setTexts.map((text) => (
              <Link
                key={text.slug}
                href={`/revision/texts/${text.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-card-hover"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <BookOpen className="size-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-body text-foreground truncate">{text.title}</h3>
                  <p className="text-body-xs text-muted-foreground truncate">
                    {text.author} &middot; {setTextCategoryLabels[text.category] ?? text.category}
                  </p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
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
              {await t('igcse.section.study_tools')}
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {await Promise.all(
              studyTools.map(async (tool) => {
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

        {/* ── Exam Resources ──────────────────────────────────────────── */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <Target className="size-5 text-primary" />
            </div>
            <h2 className="text-heading-lg font-heading text-foreground">
              {await t('igcse.section.exam_resources')}
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {await Promise.all(
              examResources.map(async (res) => {
                const Icon = res.icon
                const title = await t(res.titleKey)
                const description = await t(res.descKey)
                return (
                  <Link
                    key={res.href}
                    href={res.href}
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
          {await t('edexcel.lit.footer_align')}
        </footer>
      </div>
    </>
  )
}
