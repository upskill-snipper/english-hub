import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Choose your exam board',
  description:
    'Pick the level your school sits — GCSE or IGCSE — then the board so we can show you the right texts, poems, and past paper walkthroughs for your course.',
  alternates: { canonical: 'https://theenglishhub.app/board-select' },
  openGraph: {
    title: 'Choose your exam board — The English Hub',
    description: 'Pick the level your school sits, then the board. GCSE and IGCSE supported.',
  },
  robots: { index: false, follow: true },
}

/* ────────────────────────────────────────────────────────────────────────────
 * Board data
 * Mirrors the homepage's BoardPickerSection so users see the same options
 * whether they enter via the homepage card grid or via this page.
 * ──────────────────────────────────────────────────────────────────────────── */

type Level = 'GCSE' | 'IGCSE'

type Board = {
  name: string
  href: string
  descriptionKey: string
  level: Level
}

// 02 May 2026 — hrefs use the canonical `/revision?setBoard=<id>` mechanism.
// Middleware reads ?setBoard=, validates, sets cookie, redirects to clean
// /revision. See business-docs/BOARD_NAVIGATION_MODEL.md.
const GCSE_BOARDS: readonly Board[] = [
  {
    name: 'AQA',
    href: '/revision?setBoard=aqa',
    descriptionKey: 'board.desc.aqa',
    level: 'GCSE',
  },
  {
    name: 'Pearson Edexcel GCSE',
    href: '/revision?setBoard=edexcel',
    descriptionKey: 'board.desc.edexcel_gcse',
    level: 'GCSE',
  },
  {
    name: 'OCR',
    href: '/revision?setBoard=ocr',
    descriptionKey: 'board.desc.ocr',
    level: 'GCSE',
  },
  {
    name: 'WJEC Eduqas',
    href: '/revision?setBoard=eduqas',
    descriptionKey: 'board.desc.eduqas',
    level: 'GCSE',
  },
] as const

const IGCSE_BOARDS: readonly Board[] = [
  {
    name: 'Cambridge IGCSE',
    href: '/revision?setBoard=cambridge-0500',
    descriptionKey: 'board.desc.cambridge_igcse',
    level: 'IGCSE',
  },
  {
    name: 'Pearson Edexcel IGCSE Literature',
    href: '/revision?setBoard=edexcel-igcse',
    descriptionKey: 'board.desc.edexcel_igcse_lit',
    level: 'IGCSE',
  },
  {
    name: 'Pearson Edexcel IGCSE Language A',
    href: '/revision?setBoard=edexcel-igcse-lang',
    descriptionKey: 'board.desc.edexcel_igcse_lang',
    level: 'IGCSE',
  },
] as const

/* ────────────────────────────────────────────────────────────────────────────
 * Page
 * ──────────────────────────────────────────────────────────────────────────── */

export default async function BoardSelectPage() {
  // Pre-resolve all visible strings on the server (one locale read for the
  // whole page). Order matches the keys array exactly.
  const descKeys = [
    ...GCSE_BOARDS.map((b) => b.descriptionKey),
    ...IGCSE_BOARDS.map((b) => b.descriptionKey),
  ]
  const staticKeys = [
    'board.select.eyebrow',
    'board.choose',
    'board.select.intro',
    'board.select.gcse_subtitle',
    'board.select.igcse_subtitle',
    'board.select.back_home',
    'board.select.open_board',
  ]
  const allKeys = [...staticKeys, ...descKeys]
  const resolved = await tMany(allKeys)

  const [
    tEyebrow,
    tChoose,
    tIntro,
    tGcseSubtitle,
    tIgcseSubtitle,
    tBackHome,
    tOpenBoard,
    ...descResolved
  ] = resolved

  const gcseDescriptions = descResolved.slice(0, GCSE_BOARDS.length)
  const igcseDescriptions = descResolved.slice(GCSE_BOARDS.length)

  const gcseBoards = GCSE_BOARDS.map((b, i) => ({ ...b, description: gcseDescriptions[i] ?? '' }))
  const igcseBoards = IGCSE_BOARDS.map((b, i) => ({
    ...b,
    description: igcseDescriptions[i] ?? '',
  }))

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Choose your exam board', url: 'https://theenglishhub.app/board-select' },
        ]}
      />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 pb-14 sm:pt-16 sm:pb-20">
        {/* Headline */}
        <header className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-emerald-600 dark:text-emerald-300 mb-3">
            {tEyebrow}
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            {tChoose}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed">
            {tIntro}
          </p>
        </header>

        {/* GCSE section */}
        <BoardSection
          id="gcse"
          level="GCSE"
          subtitle={tGcseSubtitle}
          boards={gcseBoards}
          openBoardLabel={tOpenBoard}
        />

        {/* IGCSE section */}
        <div className="mt-14 sm:mt-20">
          <BoardSection
            id="igcse"
            level="IGCSE"
            subtitle={tIgcseSubtitle}
            boards={igcseBoards}
            openBoardLabel={tOpenBoard}
          />
        </div>

        {/* Back to homepage */}
        <p className="mt-12 text-center text-xs text-muted-foreground">
          <Link
            href="/"
            className="underline underline-offset-4 hover:text-clay-600 dark:hover:text-clay-300"
          >
            {tBackHome}
          </Link>
        </p>
      </div>
    </main>
  )
}

type ResolvedBoard = Omit<Board, 'descriptionKey'> & { description: string }

/* ────────────────────────────────────────────────────────────────────────────
 * Section — one per level
 * ──────────────────────────────────────────────────────────────────────────── */

function BoardSection({
  id,
  level,
  subtitle,
  boards,
  openBoardLabel,
}: {
  id: string
  level: Level
  subtitle: string
  boards: readonly ResolvedBoard[]
  openBoardLabel: string
}) {
  const headingId = `${id}-heading`
  const isIgcse = level === 'IGCSE'
  return (
    <section aria-labelledby={headingId} className="border-t border-border/60 pt-10 sm:pt-12">
      <div className="mb-6 sm:mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h2
          id={headingId}
          className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-foreground leading-tight"
        >
          {level}
        </h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {boards.map((b) => (
          <li key={b.href}>
            <BoardCard
              board={b}
              highlight={isIgcse ? 'igcse' : 'gcse'}
              openBoardLabel={openBoardLabel}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
 * Card
 * ──────────────────────────────────────────────────────────────────────────── */

function BoardCard({
  board,
  highlight,
  openBoardLabel,
}: {
  board: ResolvedBoard
  highlight: 'gcse' | 'igcse'
  openBoardLabel: string
}) {
  // GCSE = emerald accent, IGCSE = clay accent. Mirrors the homepage palette
  // without importing its component — the spirit, not the literal markup.
  // Accent tints stay translucent so they read on both themes; the text /
  // ring shades use the dual light/dark pattern so a single shade is never
  // illegible against the cream (light) or ink (dark) surface.
  const pillClass =
    highlight === 'gcse'
      ? 'bg-emerald-500/15 text-emerald-700 ring-emerald-500/30 dark:text-emerald-300'
      : 'bg-clay-500/15 text-clay-700 ring-clay-500/30 dark:text-clay-300'

  const hoverClass =
    highlight === 'gcse'
      ? 'hover:border-emerald-500/40 focus-visible:ring-emerald-500'
      : 'hover:border-clay-500/40 focus-visible:ring-clay-500'

  const ctaClass =
    highlight === 'gcse'
      ? 'text-emerald-700 group-hover:text-emerald-600 dark:text-emerald-300 dark:group-hover:text-emerald-200'
      : 'text-clay-700 group-hover:text-clay-600 dark:text-clay-300 dark:group-hover:text-clay-200'

  return (
    <Link
      href={board.href}
      className={`group relative flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-card p-5 sm:p-6 transition-all hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${hoverClass}`}
    >
      {/* Level pill — top-right */}
      <span
        aria-hidden="true"
        className={`absolute top-4 right-4 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider ring-1 ${pillClass}`}
      >
        {board.level}
      </span>

      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground leading-tight pr-16">
        {board.name}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">{board.description}</p>

      <span
        className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${ctaClass}`}
      >
        {openBoardLabel} <span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  )
}
