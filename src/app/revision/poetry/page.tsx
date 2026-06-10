import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Sparkles, Info } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { getServerBoard } from '@/lib/board/get-server-board'
import type { ExamBoard } from '@/lib/board/board-config'
import { t } from '@/lib/i18n/t'
import { PoetryHubAQAClient } from './PoetryHubAQAClient'

type SearchParams = { wrongBoard?: string }

export const metadata: Metadata = {
  title: 'GCSE Poetry Anthology Revision',
  description:
    'Revise your GCSE poetry anthology by exam board: AQA Power and Conflict, Edexcel, Eduqas and OCR clusters with poem guides, themes and comparisons.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry' },
}

export default async function PoetryRevisionPage(props: { searchParams?: Promise<SearchParams> }) {
  const searchParams = await props.searchParams
  const board = await getServerBoard()
  const wrongBoard = searchParams?.wrongBoard === '1'

  const breadcrumbItems = [
    { label: await t('poetry.breadcrumb_revision'), href: '/revision' },
    { label: await t('poetry.breadcrumb_poetry') },
  ]

  // ── No board chosen yet ──────────────────────────────────────────────
  if (!board) {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <BoardlessPoetryShell
          title={await t('poetry.boardless.title')}
          description={await t('poetry.boardless.description')}
        />
      </>
    )
  }

  // ── AQA: full anthology hub via the existing client component ───────
  if (board === 'aqa') {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        {wrongBoard && <WrongBoardBanner />}
        <PoetryHubAQAClient />
      </>
    )
  }

  // ── Edexcel: Conflict + Time and Place ──────────────────────────────
  if (board === 'edexcel') {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <PoetryShell
          boardLabel="Pearson Edexcel"
          title={await t('poetry.edexcel.title')}
          description={await t('poetry.edexcel.description')}
          wrongBoard={wrongBoard}
          board={board}
        >
          <ClusterCard
            href="/revision/poetry/edexcel/conflict"
            title={await t('poetry.edexcel.cluster_conflict.title')}
            subtitle="15 poems"
            description={await t('poetry.edexcel.cluster_conflict.desc')}
          />
          <ClusterCard
            href="/revision/poetry/edexcel/time-and-place"
            title={await t('poetry.edexcel.cluster_time_place.title')}
            subtitle="15 poems"
            description={await t('poetry.edexcel.cluster_time_place.desc')}
          />
          <div className="sm:col-span-2">
            <Button variant="outline" size="sm" render={<Link href="/revision/poetry/edexcel" />}>
              {await t('poetry.edexcel.view_full')}
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </PoetryShell>
      </>
    )
  }

  // ── OCR: Towards a World Unknown (4 clusters) ────────────────────────
  if (board === 'ocr') {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <PoetryShell
          boardLabel="OCR"
          title={await t('poetry.ocr.title')}
          description={await t('poetry.ocr.description')}
          wrongBoard={wrongBoard}
          board={board}
        >
          <ClusterCard
            href="/revision/poetry/ocr/love-and-relationships"
            title={await t('poetry.ocr.cluster_lar.title')}
            subtitle="15 poems"
            description={await t('poetry.ocr.cluster_lar.desc')}
          />
          <ClusterCard
            href="/revision/poetry/ocr/conflict"
            title={await t('poetry.ocr.cluster_conflict.title')}
            subtitle="15 poems"
            description={await t('poetry.ocr.cluster_conflict.desc')}
          />
          <ClusterCard
            href="/revision/poetry/ocr/youth-and-age"
            title={await t('poetry.ocr.cluster_youth_age.title')}
            subtitle="15 poems"
            description={await t('poetry.ocr.cluster_youth_age.desc')}
          />
          <ClusterCard
            href="/revision/poetry/ocr/power-and-natural-world"
            title={await t('poetry.ocr.cluster_power_nature.title')}
            subtitle="15 poems"
            description={await t('poetry.ocr.cluster_power_nature.desc')}
          />
          <div className="sm:col-span-2">
            <Button variant="outline" size="sm" render={<Link href="/revision/poetry/ocr" />}>
              {await t('poetry.ocr.view_full')}
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </PoetryShell>
      </>
    )
  }

  // ── Eduqas: single 12-poem anthology (2025 specification) ──────────
  if (board === 'eduqas') {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <PoetryShell
          boardLabel="WJEC Eduqas"
          title={await t('poetry.eduqas.title')}
          description={await t('poetry.eduqas.description')}
          wrongBoard={wrongBoard}
          board={board}
        >
          <div className="sm:col-span-2">
            <Button variant="default" size="sm" render={<Link href="/revision/poetry/eduqas" />}>
              {await t('poetry.eduqas.view')}
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </PoetryShell>
      </>
    )
  }

  // ── Edexcel IGCSE: Edexcel international anthology ──────────────────
  if (board === 'edexcel-igcse') {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <PoetryShell
          boardLabel="Edexcel IGCSE"
          title={await t('poetry.edexcel_igcse.title')}
          description={await t('poetry.edexcel_igcse.description')}
          wrongBoard={wrongBoard}
          board={board}
        >
          <div className="sm:col-span-2">
            <Button variant="default" size="sm" render={<Link href="/igcse/edexcel/poetry" />}>
              {await t('poetry.edexcel_igcse.view')}
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </PoetryShell>
      </>
    )
  }

  // ── Cambridge 0500 / 0990: no poetry anthology ──────────────────────
  if (board === 'cambridge-0500' || board === 'cambridge-0990') {
    const paperHref =
      board === 'cambridge-0500' ? '/igcse/cambridge/0500/paper-1' : '/igcse/cambridge/0990/paper-1'

    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <PoetryShell
          boardLabel={board === 'cambridge-0500' ? 'Cambridge IGCSE' : 'Cambridge IGCSE (9-1)'}
          title={await t('poetry.cambridge.title')}
          description={await t('poetry.cambridge.description')}
          wrongBoard={wrongBoard}
          board={board}
        >
          <div className="sm:col-span-2">
            <Button variant="default" size="sm" render={<Link href={paperHref} />}>
              {await t('poetry.cambridge.paper1_cta')}
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </PoetryShell>
      </>
    )
  }

  // ── cambridge-0475 (Cambridge IGCSE Literature in English) ─────────
  if (board === 'cambridge-0475') {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <PoetryShell
          boardLabel="Cambridge IGCSE Literature in English (0475)"
          title={await t('poetry.cambridge_lit.title')}
          description={await t('poetry.cambridge_lit.description')}
          wrongBoard={wrongBoard}
          board={board}
        >
          <div className="sm:col-span-2">
            <Button variant="default" size="sm" render={<Link href="/igcse/cambridge" />}>
              {await t('poetry.cambridge_lit.cta')}
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </PoetryShell>
      </>
    )
  }

  // ── edexcel-igcse-lang (Pearson Edexcel IGCSE Language A 4EA1) ─────
  if (board === 'edexcel-igcse-lang') {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <PoetryShell
          boardLabel="Pearson Edexcel IGCSE Language A (4EA1)"
          title={await t('poetry.edexcel_lang.title')}
          description={await t('poetry.edexcel_lang.description')}
          wrongBoard={wrongBoard}
          board={board}
        >
          <div className="sm:col-span-2">
            <Button
              variant="default"
              size="sm"
              render={<Link href="/igcse/edexcel-lang/anthology" />}
            >
              {await t('poetry.edexcel_lang.cta')}
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </PoetryShell>
      </>
    )
  }

  // ── A-Level boards ──────────────────────────────────────────────────
  if (
    board === 'aqa-a-level' ||
    board === 'edexcel-a-level' ||
    board === 'ocr-a-level' ||
    board === 'eduqas-a-level'
  ) {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <PoetryShell
          boardLabel="A-Level English Literature"
          title={await t('poetry.a_level.title')}
          description={await t('poetry.a_level.description')}
          wrongBoard={wrongBoard}
          board={board}
        >
          <div className="sm:col-span-2">
            <Button variant="default" size="sm" render={<Link href="/revision" />}>
              {await t('poetry.a_level.cta')}
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </PoetryShell>
      </>
    )
  }

  // ── IAL Edexcel ─────────────────────────────────────────────────────
  if (board === 'ial-edexcel') {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <PoetryShell
          boardLabel="Edexcel IAL English Literature"
          title={await t('poetry.ial.title')}
          description={await t('poetry.ial.description')}
          wrongBoard={wrongBoard}
          board={board}
        >
          <div className="sm:col-span-2">
            <Button variant="default" size="sm" render={<Link href="/revision/ial" />}>
              {await t('poetry.ial.cta')}
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </PoetryShell>
      </>
    )
  }

  // ── KS3 ─────────────────────────────────────────────────────────────
  if (board === 'ks3') {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <PoetryShell
          boardLabel="KS3 English"
          title={await t('poetry.ks3.title')}
          description={await t('poetry.ks3.description')}
          wrongBoard={wrongBoard}
          board={board}
        >
          <div className="sm:col-span-2">
            <Button variant="default" size="sm" render={<Link href="/revision" />}>
              {await t('poetry.ks3.cta')}
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </PoetryShell>
      </>
    )
  }

  // Defensive fallback for any future board id added without a matching branch.
  // Boardless null users were handled higher up - they get the explicit
  // "Choose your exam board" CTA via BoardlessPoetryShell.
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <BoardlessPoetryShell
        title={await t('poetry.boardless.fallback_title')}
        description={await t('poetry.boardless.fallback_description')}
      />
    </>
  )
}

// ─── Shared shell components (server) ───────────────────────────────────────

async function PoetryShell({
  boardLabel,
  title,
  description,
  wrongBoard,
  board,
  children,
}: {
  boardLabel: string
  title: string
  description: string
  wrongBoard: boolean
  board: ExamBoard | null
  children: React.ReactNode
}) {
  return (
    <div className="space-y-10 pb-16">
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-rose-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision" />}
          >
            <ArrowLeft className="size-3.5" />
            {await t('poetry.back_to_revision')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              {boardLabel} {await t('poetry.badge_poetry_suffix')}
            </Badge>
            <Link
              href="/board-select"
              className="text-caption text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {await t('poetry.change_board')}
            </Link>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">{title}</h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{description}</p>

          {wrongBoard && (
            <div className="mt-6 flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
              <Info className="mt-0.5 size-4 shrink-0 text-clay-600" />
              <p className="text-caption text-muted-foreground">
                {await t('poetry.wrong_board_banner')}
              </p>
            </div>
          )}
        </div>
      </section>

      <PoetrySeoContent />

      <section>
        <div className="grid gap-4 sm:grid-cols-2">{children}</div>
      </section>

      <AnthologyLinks board={board} />
    </div>
  )
}

async function BoardlessPoetryShell({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="space-y-10 pb-16">
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-rose-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision" />}
          >
            <ArrowLeft className="size-3.5" />
            {await t('poetry.back_to_revision')}
          </Button>

          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 size-3" />
            {await t('poetry.badge_poetry_revision')}
          </Badge>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">{title}</h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{description}</p>

          <Button
            variant="default"
            size="lg"
            className="mt-6"
            render={<Link href="/board-select" />}
          >
            {await t('poetry.choose_your_board_cta')}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      <PoetrySeoContent />

      <AnthologyLinks board={null} />
    </div>
  )
}

function PoetrySeoContent() {
  return (
    <section
      aria-labelledby="poetry-seo-heading"
      className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8"
    >
      <h2 id="poetry-seo-heading" className="sr-only">
        About GCSE English poetry revision
      </h2>

      <div className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-heading-md font-heading text-foreground">
            How GCSE English poetry is marked
          </h2>
          <p className="text-body text-muted-foreground">
            Every GCSE English Literature poetry question is marked against three assessment
            objectives. AO1 rewards a clear, personal argument supported by well-chosen textual
            references. AO2 asks you to analyse how the poet&apos;s choices of language, structure
            and form shape meaning. AO3 credits your understanding of the contexts in which a poem
            was written and read. As a rough guide, anthology comparison questions weight these
            objectives at roughly AO1 33%, AO2 50% and AO3 17%, which is why close analysis of
            poetic method is where most marks are won or lost.
          </p>
          <p className="text-body text-muted-foreground">
            Each board introduces its own quirks. AQA Power and Conflict typically asks you to
            analyse a single named poem in depth and then compare a second poem from the cluster.
            Edexcel Conflict expects deeper historical contextualisation, because several of its
            poems sit in very specific political and military moments. Eduqas mixes the anthology
            with an unseen poem in the same paper, so you must flex between memorised material and
            cold reading on the day. Unseen poetry is marked against the same AO grid, just without
            the context-heavy AO3 element, so strong AO2 habits transfer directly.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-heading-md font-heading text-foreground">
            AO1 vs AO2 vs AO3 in poetry
          </h2>
          <p className="text-body text-muted-foreground">
            AO1 is your argument. Examiners reward a clear thesis developed through three or four
            precisely chosen quotations that build on one another, not a shopping list of anything
            you noticed. A strong AO1 paragraph commits to a reading of the poem and then proves it;
            a weak one lists features and hopes for the best. Keep quotations short, embedded and
            purposeful.
          </p>
          <p className="text-body text-muted-foreground">
            AO2 is analysis of method. The biggest upgrade most students can make is moving from
            &ldquo;the poet uses a metaphor&rdquo; to analysing the effect of that metaphor on
            meaning and on the reader. Name the technique, quote it, then explain what it does to
            our understanding of the speaker, the situation or the central idea. Always link back to
            the question. Form and structure count here too, so consider stanza shape, line breaks,
            volta and pace, not just imagery.
          </p>
          <p className="text-body text-muted-foreground">
            AO3 is context, used sparingly. A useful framework is to ask what was happening when the
            poet wrote this and what that helps us see in the poem. Context should illuminate the
            language, not replace it, so weave one sharp contextual point into an analytical
            paragraph rather than parking a biography paragraph at the end.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-heading-md font-heading text-foreground">
            Poetry comparison questions explained
          </h2>
          <p className="text-body text-muted-foreground">
            Roughly 45 to 50 per cent of your poetry marks come from comparison, so a reliable
            method matters. We teach three structures. PEEL-C (point, evidence, explain, link,
            compare) is the safest scaffold for students who want a clear paragraph shape. The
            two-poem thread runs a single idea, such as powerlessness or memory, through both poems
            in parallel, alternating evidence so the comparison is constant rather than tacked on.
            The hinge-point approach picks one central image in each poem and uses those paired
            images to open a sustained comparison of method and meaning.
          </p>
          <p className="text-body text-muted-foreground">
            Whichever structure you choose, avoid shopping-list comparison. Stringing together
            &ldquo;similarly&rdquo; and &ldquo;in contrast&rdquo; without analysing the poets&apos;
            choices fails AO2, because you are comparing topics rather than techniques. Aim to
            compare how each poet constructs meaning, not simply what each poem is about. When
            you&apos;re ready to rehearse under timed conditions, work through our poetry mock exams
            and mark schemes to build the habit of comparing method under pressure.
          </p>
        </div>
      </div>
    </section>
  )
}

type AnthologyLink = {
  href: string
  title: string
  snippet: string
  /** Boards this anthology link is relevant to. */
  boards: ExamBoard[]
  /** Short board tag rendered on each card so cross-board fallbacks stay labelled. */
  boardTag: string
}

const ANTHOLOGY_LINKS: AnthologyLink[] = [
  {
    href: '/revision/poetry/power-and-conflict',
    title: 'AQA Power & Conflict',
    snippet:
      'Fifteen poems on power, war and human struggle with annotations, themes and comparison pairings built for AQA.',
    boards: ['aqa'],
    boardTag: 'AQA',
  },
  {
    href: '/revision/poetry/love-and-relationships',
    title: 'AQA Love & Relationships',
    snippet:
      'Romantic, familial and painful love across fifteen poems with method analysis and exam-ready comparison grids.',
    boards: ['aqa'],
    boardTag: 'AQA',
  },
  {
    href: '/revision/poetry/aqa-worlds-and-lives',
    title: 'AQA Worlds & Lives',
    snippet:
      'The newer AQA cluster on identity, place and belonging with full annotations and thematic links between poems.',
    boards: ['aqa'],
    boardTag: 'AQA',
  },
  {
    href: '/revision/poetry/eduqas',
    title: 'Eduqas Poetry',
    snippet:
      'All twelve poems from the Eduqas 2025 GCSE anthology with strong pairing suggestions for the compulsory comparison question.',
    boards: ['eduqas'],
    boardTag: 'Eduqas',
  },
  {
    href: '/revision/poetry/edexcel/conflict',
    title: 'Edexcel Conflict',
    snippet:
      'Fifteen Edexcel Conflict poems with deeper historical context notes to hit AO3 confidently in the exam.',
    boards: ['edexcel'],
    boardTag: 'Edexcel',
  },
  {
    href: '/revision/poetry/edexcel/time-and-place',
    title: 'Edexcel Time and Place',
    snippet:
      'Edexcel anthology cluster on memory, landscape and belonging with full annotations and comparison support.',
    boards: ['edexcel'],
    boardTag: 'Edexcel',
  },
  {
    href: '/revision/poetry/ocr',
    title: 'OCR Towards a World Unknown',
    snippet:
      'OCR anthology revision covering Love and Relationships, Conflict, Youth and Age and Power and the Natural World clusters.',
    boards: ['ocr'],
    boardTag: 'OCR',
  },
  {
    href: '/igcse/edexcel/poetry',
    title: 'Edexcel IGCSE Poetry',
    snippet:
      'Pearson Edexcel IGCSE anthology poems with annotations, themes and comparison support for the international syllabus.',
    boards: ['edexcel-igcse'],
    boardTag: 'Edexcel IGCSE',
  },
]

async function AnthologyLinks({ board }: { board: ExamBoard | null }) {
  // Filter to the user's board when known. If we don't know the board, OR
  // we know the board but nothing matches it (e.g. Cambridge language-only),
  // we fall back to showing every anthology so the page still has discovery
  // value - but every card stays explicitly labelled with its board so a
  // student on the wrong board never confuses an AQA cluster for their own.
  const filtered = board ? ANTHOLOGY_LINKS.filter((l) => l.boards.includes(board)) : []
  const isFallback = filtered.length === 0
  const links = isFallback ? ANTHOLOGY_LINKS : filtered
  const heading = isFallback
    ? board
      ? await t('poetry.anthology_links.heading_other')
      : await t('poetry.anthology_links.heading_generic')
    : await t('poetry.anthology_links.heading_your')

  return (
    <section aria-labelledby="anthology-links-heading" className="space-y-4">
      <h2 id="anthology-links-heading" className="text-heading-md font-heading text-foreground">
        {heading}
      </h2>
      {isFallback && board && (
        <p className="text-body-sm text-muted-foreground">
          {await t('poetry.anthology_links.fallback_note')}
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex flex-col gap-1.5 rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-border hover:shadow-card-hover"
          >
            <div className="mb-1 flex items-center gap-2">
              <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                {link.boardTag}
              </Badge>
            </div>
            <h3 className="text-heading-sm font-heading text-foreground group-hover:text-primary">
              {link.title}
            </h3>
            <p className="text-body-sm text-muted-foreground">{link.snippet}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

function ClusterCard({
  href,
  title,
  subtitle,
  description,
}: {
  href: string
  title: string
  subtitle: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-2 rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-border hover:shadow-card-hover"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
          <BookOpen className="size-5 text-primary" />
        </div>
        <div>
          <h3 className="text-heading-sm font-heading text-foreground group-hover:text-primary">
            {title}
          </h3>
          <p className="text-caption text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <p className="text-body-sm text-muted-foreground">{description}</p>
      <div className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Open
        <ArrowRight className="size-3" />
      </div>
    </Link>
  )
}

async function WrongBoardBanner() {
  return (
    <div className="mb-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
      <div className="flex items-start gap-2">
        <Info className="mt-0.5 size-4 shrink-0 text-clay-600" />
        <p className="text-caption text-muted-foreground">{await t('poetry.wrong_board_banner')}</p>
      </div>
    </div>
  )
}
