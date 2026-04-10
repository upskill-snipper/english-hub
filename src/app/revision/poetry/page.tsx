import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  Info,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'
import { PoetryHubAQAClient } from './PoetryHubAQAClient'

type SearchParams = { wrongBoard?: string }

export default async function PoetryRevisionPage({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  const board = await getServerBoard()
  const wrongBoard = searchParams?.wrongBoard === '1'

  // ── No board chosen yet ──────────────────────────────────────────────
  if (!board) {
    return (
      <BoardlessPoetryShell
        title="Choose your exam board"
        description="Each exam board uses a different poetry anthology. Pick yours so we can show you only the poems you actually need to learn."
      />
    )
  }

  // ── AQA: full anthology hub via the existing client component ───────
  if (board === 'aqa') {
    return (
      <>
        {wrongBoard && <WrongBoardBanner />}
        <PoetryHubAQAClient />
      </>
    )
  }

  // ── Edexcel: Conflict + Time and Place ──────────────────────────────
  if (board === 'edexcel') {
    return (
      <PoetryShell
        boardLabel="Pearson Edexcel"
        title="Edexcel Poetry Anthology"
        description="The Pearson Edexcel anthology is split into themed clusters. You'll study one cluster: Conflict or Time and Place."
        wrongBoard={wrongBoard}
      >
        <ClusterCard
          href="/revision/poetry/edexcel/conflict"
          title="Conflict"
          subtitle="15 poems"
          description="War, struggle, internal turmoil and the cost of conflict."
        />
        <ClusterCard
          href="/revision/poetry/edexcel/time-and-place"
          title="Time and Place"
          subtitle="15 poems"
          description="Memory, landscape, identity and a sense of belonging."
        />
        <div className="sm:col-span-2">
          <Button variant="outline" size="sm" render={<Link href="/revision/poetry/edexcel" />}>
            View full Edexcel anthology hub
            <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </PoetryShell>
    )
  }

  // ── OCR: Towards a World Unknown (4 clusters) ────────────────────────
  if (board === 'ocr') {
    return (
      <PoetryShell
        boardLabel="OCR"
        title="Towards a World Unknown"
        description="The OCR anthology has 4 thematic clusters of 15 poems each. You'll study one cluster prescribed by your teacher."
        wrongBoard={wrongBoard}
      >
        <ClusterCard
          href="/revision/poetry/ocr/love-and-relationships"
          title="Love and Relationships"
          subtitle="15 poems"
          description="Romantic, familial and complicated forms of love across centuries."
        />
        <ClusterCard
          href="/revision/poetry/ocr/conflict"
          title="Conflict"
          subtitle="15 poems"
          description="Personal, political and global conflict in poetry."
        />
        <ClusterCard
          href="/revision/poetry/ocr/youth-and-age"
          title="Youth and Age"
          subtitle="15 poems"
          description="Time, growing up, mortality and looking back."
        />
        <ClusterCard
          href="/revision/poetry/ocr/power-and-natural-world"
          title="Power and the Natural World"
          subtitle="15 poems"
          description="Nature's force, human power and our relationship with the environment."
        />
        <div className="sm:col-span-2">
          <Button variant="outline" size="sm" render={<Link href="/revision/poetry/ocr" />}>
            View full OCR anthology hub
            <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </PoetryShell>
    )
  }

  // ── Eduqas: single 18-poem anthology ────────────────────────────────
  if (board === 'eduqas') {
    return (
      <PoetryShell
        boardLabel="WJEC Eduqas"
        title="Eduqas Poetry Anthology"
        description="The Eduqas anthology has 18 poems that all students study. You'll be asked to compare two of them in the exam — strong pairings are essential."
        wrongBoard={wrongBoard}
      >
        <div className="sm:col-span-2">
          <Button variant="default" size="sm" render={<Link href="/revision/poetry/eduqas" />}>
            View Eduqas anthology
            <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </PoetryShell>
    )
  }

  // ── Edexcel IGCSE: Edexcel international anthology ──────────────────
  if (board === 'edexcel-igcse') {
    return (
      <PoetryShell
        boardLabel="Edexcel IGCSE"
        title="Edexcel IGCSE Poetry Anthology"
        description="Pearson Edexcel IGCSE prescribes its own poetry anthology. Head to the IGCSE area for the poems you need."
        wrongBoard={wrongBoard}
      >
        <div className="sm:col-span-2">
          <Button variant="default" size="sm" render={<Link href="/igcse/edexcel/poetry" />}>
            View Edexcel IGCSE poetry
            <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </PoetryShell>
    )
  }

  // ── Cambridge 0500 / 0990: no poetry anthology ──────────────────────
  if (board === 'cambridge-0500' || board === 'cambridge-0990') {
    const paperHref =
      board === 'cambridge-0500'
        ? '/igcse/cambridge/0500/paper-1'
        : '/igcse/cambridge/0990/paper-1'

    return (
      <PoetryShell
        boardLabel={board === 'cambridge-0500' ? 'Cambridge 0500' : 'Cambridge 0990'}
        title="No poetry anthology for your board"
        description="Cambridge IGCSE First Language English doesn't include a poetry anthology. Focus on Paper 1 reading skills instead — that's where your time pays off."
        wrongBoard={wrongBoard}
      >
        <div className="sm:col-span-2">
          <Button variant="default" size="sm" render={<Link href={paperHref} />}>
            Go to Paper 1 reading
            <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </PoetryShell>
    )
  }

  // Fallback (shouldn't be reachable)
  return <BoardlessPoetryShell title="Choose your exam board" description="Pick a board to see your poetry anthology." />
}

// ─── Shared shell components (server) ───────────────────────────────────────

function PoetryShell({
  boardLabel,
  title,
  description,
  wrongBoard,
  children,
}: {
  boardLabel: string
  title: string
  description: string
  wrongBoard: boolean
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
            Back to Revision Hub
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              {boardLabel} Poetry
            </Badge>
            <Link
              href="/board-select"
              className="text-caption text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Change board
            </Link>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">{title}</h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{description}</p>

          {wrongBoard && (
            <div className="mt-6 flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
              <Info className="mt-0.5 size-4 shrink-0 text-amber-400" />
              <p className="text-caption text-muted-foreground">
                That page belongs to a different exam board. Here&apos;s your anthology instead.
              </p>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="grid gap-4 sm:grid-cols-2">{children}</div>
      </section>
    </div>
  )
}

function BoardlessPoetryShell({ title, description }: { title: string; description: string }) {
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
            Back to Revision Hub
          </Button>

          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 size-3" />
            Poetry Revision
          </Badge>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">{title}</h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{description}</p>

          <Button variant="default" size="lg" className="mt-6" render={<Link href="/board-select" />}>
            Choose your exam board
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
    </div>
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

function WrongBoardBanner() {
  return (
    <div className="mb-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
      <div className="flex items-start gap-2">
        <Info className="mt-0.5 size-4 shrink-0 text-amber-400" />
        <p className="text-caption text-muted-foreground">
          That page belongs to a different exam board. Here&apos;s your anthology instead.
        </p>
      </div>
    </div>
  )
}
