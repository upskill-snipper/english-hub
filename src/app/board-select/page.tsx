import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Choose your exam board — The English Hub',
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
    <main className="min-h-screen bg-ink-950">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Choose your exam board', url: 'https://theenglishhub.app/board-select' },
        ]}
      />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 pb-14 sm:pt-16 sm:pb-20">
        {/* Headline */}
        <header className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-emerald-300 mb-3">
            {tEyebrow}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cream-50 leading-tight">
            {tChoose}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-cream-100/75 leading-relaxed">
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
        <p className="mt-12 text-center text-xs text-cream-200/55">
          <Link href="/" className="underline underline-offset-4 hover:text-clay-300">
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
    <section aria-labelledby={headingId} className="border-t border-cream-200/5 pt-10 sm:pt-12">
      <div className="mb-6 sm:mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h2
          id={headingId}
          className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50 leading-tight"
        >
          {level}
        </h2>
        <p className="text-sm text-cream-100/70">{subtitle}</p>
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
  const pillClass =
    highlight === 'gcse'
      ? 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30'
      : 'bg-clay-300/15 text-clay-300 ring-clay-300/30'

  const hoverClass =
    highlight === 'gcse'
      ? 'hover:border-emerald-400/40 focus-visible:ring-emerald-400'
      : 'hover:border-clay-300/40 focus-visible:ring-clay-300'

  const ctaClass =
    highlight === 'gcse'
      ? 'text-emerald-300 group-hover:text-emerald-200'
      : 'text-clay-300 group-hover:text-clay-200'

  return (
    <Link
      href={board.href}
      className={`group relative flex h-full flex-col gap-3 rounded-2xl border border-cream-200/10 bg-cream-50/[0.02] p-5 sm:p-6 transition-all hover:bg-cream-50/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${hoverClass}`}
    >
      {/* Level pill — top-right */}
      <span
        aria-hidden="true"
        className={`absolute top-4 right-4 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider ring-1 ${pillClass}`}
      >
        {board.level}
      </span>

      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-cream-50 leading-tight pr-16">
        {board.name}
      </h3>

      <p className="text-sm text-cream-100/70 leading-relaxed">{board.description}</p>

      <span
        className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${ctaClass}`}
      >
        {openBoardLabel} <span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  )
}
