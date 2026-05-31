import type { Metadata } from 'next'
import Link from 'next/link'
import { Languages, Star, ArrowRight } from 'lucide-react'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { tMany } from '@/lib/i18n/t'
import { isMuslimMajorityVisitor } from '@/lib/geo/gcc'

export const metadata: Metadata = {
  title: 'Choose your level or exam board',
  description:
    'Pick the level you study - KS3, GCSE or IGCSE - then the board so we can show you the right texts, poems, and past paper walkthroughs. EAL support is included alongside every board.',
  alternates: { canonical: 'https://theenglishhub.app/board-select' },
  openGraph: {
    title: 'Choose your level or exam board - The English Hub',
    description:
      'Pick the level you study, then the board. KS3, GCSE and IGCSE supported, with EAL learner support alongside every board.',
  },
  robots: { index: false, follow: true },
}

/* ────────────────────────────────────────────────────────────────────────────
 * Board data
 * Mirrors the homepage's BoardPickerSection so users see the same options
 * whether they enter via the homepage card grid or via this page.
 * ──────────────────────────────────────────────────────────────────────────── */

type Level = 'KS3' | 'GCSE' | 'IGCSE' | 'EAL'

type Board = {
  name: string
  href: string
  descriptionKey: string
  level: Level
}

// 02 May 2026 - hrefs use the canonical `/revision?setBoard=<id>` mechanism.
// Middleware reads ?setBoard=, validates, sets cookie, redirects to clean
// /revision. See business-docs/BOARD_NAVIGATION_MODEL.md.

// 2026-05-20: KS3 was missing from the picker entirely - added so younger
// learners (Years 7-9) can find their starting point. EAL is added as its
// own section because it's a cross-cutting learner profile that runs
// alongside any board - not a board itself.
const KS3_BOARDS: readonly Board[] = [
  {
    name: 'KS3 English (Years 7-9)',
    href: '/revision?setBoard=ks3',
    descriptionKey: 'board.desc.ks3',
    level: 'KS3',
  },
] as const

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

// EAL is a cross-cutting learner profile (not an exam board). It pairs
// with any board the student is studying. Linking it as its own section
// lets EAL learners discover it without forcing them out of the board
// picker. The href routes to /eal rather than setting a board cookie.
const EAL_BOARDS: readonly Board[] = [
  {
    name: 'EAL - English for Additional-Language Learners',
    href: '/eal',
    descriptionKey: 'board.desc.eal',
    level: 'EAL',
  },
] as const

/* ────────────────────────────────────────────────────────────────────────────
 * Page
 * ──────────────────────────────────────────────────────────────────────────── */

export default async function BoardSelectPage() {
  // Pre-resolve all visible strings on the server (one locale read for the
  // whole page). Order matches the keys array exactly.
  const descKeys = [
    ...KS3_BOARDS.map((b) => b.descriptionKey),
    ...GCSE_BOARDS.map((b) => b.descriptionKey),
    ...IGCSE_BOARDS.map((b) => b.descriptionKey),
    ...EAL_BOARDS.map((b) => b.descriptionKey),
  ]
  const staticKeys = [
    'board.select.eyebrow',
    'board.choose',
    'board.select.intro',
    'board.select.ks3_subtitle',
    'board.select.gcse_subtitle',
    'board.select.igcse_subtitle',
    'board.select.eal_subtitle',
    'board.select.back_home',
    'board.select.open_board',
    'board.select.eal_supported',
  ]
  const allKeys = [...staticKeys, ...descKeys]
  const resolved = await tMany(allKeys)

  const [
    tEyebrow,
    tChoose,
    tIntro,
    tKs3Subtitle,
    tGcseSubtitle,
    tIgcseSubtitle,
    tEalSubtitle,
    tBackHome,
    tOpenBoard,
    tEalSupported,
    ...descResolved
  ] = resolved

  const ks3End = KS3_BOARDS.length
  const gcseEnd = ks3End + GCSE_BOARDS.length
  const igcseEnd = gcseEnd + IGCSE_BOARDS.length
  const ks3Descriptions = descResolved.slice(0, ks3End)
  const gcseDescriptions = descResolved.slice(ks3End, gcseEnd)
  const igcseDescriptions = descResolved.slice(gcseEnd, igcseEnd)
  const ealDescriptions = descResolved.slice(igcseEnd)

  const ks3Boards = KS3_BOARDS.map((b, i) => ({ ...b, description: ks3Descriptions[i] ?? '' }))
  const gcseBoards = GCSE_BOARDS.map((b, i) => ({ ...b, description: gcseDescriptions[i] ?? '' }))
  const igcseBoards = IGCSE_BOARDS.map((b, i) => ({
    ...b,
    description: igcseDescriptions[i] ?? '',
  }))
  const ealBoards = EAL_BOARDS.map((b, i) => ({ ...b, description: ealDescriptions[i] ?? '' }))

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

        {/* GCC / Muslim-majority recommendation banner — appears only for
            visitors whose resolved IP country is in the wider
            Muslim-majority list (see src/lib/geo/gcc.ts). Cambridge IGCSE
            English Language (0500 / 0990) is a language-only spec with
            no literature requirement, which avoids the cultural review
            that comes with the literature anthologies. The banner is
            purely advisory; every board remains selectable below. See
            /legal/school-content-policy for the full reasoning. */}
        {await GccRecommendationBanner()}

        {/* KS3 section - Years 7-9, the curriculum before GCSE. */}
        <BoardSection
          id="ks3"
          level="KS3"
          subtitle={tKs3Subtitle}
          boards={ks3Boards}
          openBoardLabel={tOpenBoard}
          ealSupportedLabel={tEalSupported}
        />

        {/* GCSE section */}
        <div className="mt-14 sm:mt-20">
          <BoardSection
            id="gcse"
            level="GCSE"
            subtitle={tGcseSubtitle}
            boards={gcseBoards}
            openBoardLabel={tOpenBoard}
            ealSupportedLabel={tEalSupported}
          />
        </div>

        {/* IGCSE section */}
        <div className="mt-14 sm:mt-20">
          <BoardSection
            id="igcse"
            level="IGCSE"
            subtitle={tIgcseSubtitle}
            boards={igcseBoards}
            openBoardLabel={tOpenBoard}
            ealSupportedLabel={tEalSupported}
          />
        </div>

        {/* EAL section - cross-cutting learner profile that pairs with
            any board. Sits LAST so it reads as "and also" rather than
            replacing a board choice. */}
        <div className="mt-14 sm:mt-20">
          <BoardSection
            id="eal"
            level="EAL"
            subtitle={tEalSubtitle}
            boards={ealBoards}
            openBoardLabel={tOpenBoard}
            ealSupportedLabel={null}
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
 * Section - one per level
 * ──────────────────────────────────────────────────────────────────────────── */

function BoardSection({
  id,
  level,
  subtitle,
  boards,
  openBoardLabel,
  ealSupportedLabel,
}: {
  id: string
  level: Level
  subtitle: string
  boards: readonly ResolvedBoard[]
  openBoardLabel: string
  /** Label for the "EAL support included" line. Pass null to hide
   *  (e.g. on the EAL section itself, where the indicator is redundant). */
  ealSupportedLabel: string | null
}) {
  const headingId = `${id}-heading`
  const highlight: 'ks3' | 'gcse' | 'igcse' | 'eal' =
    level === 'KS3' ? 'ks3' : level === 'IGCSE' ? 'igcse' : level === 'EAL' ? 'eal' : 'gcse'
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
              highlight={highlight}
              openBoardLabel={openBoardLabel}
              ealSupportedLabel={ealSupportedLabel}
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
  ealSupportedLabel,
}: {
  board: ResolvedBoard
  highlight: 'ks3' | 'gcse' | 'igcse' | 'eal'
  openBoardLabel: string
  ealSupportedLabel: string | null
}) {
  // KS3 = violet, GCSE = emerald, IGCSE = clay, EAL = teal.
  // Accent tints stay translucent so they read on both themes; the text
  // and ring shades use the dual light/dark pattern.
  const pillClass =
    highlight === 'ks3'
      ? 'bg-violet-500/15 text-violet-700 ring-violet-500/30 dark:text-violet-300'
      : highlight === 'gcse'
        ? 'bg-emerald-500/15 text-emerald-700 ring-emerald-500/30 dark:text-emerald-300'
        : highlight === 'igcse'
          ? 'bg-clay-500/15 text-clay-700 ring-clay-500/30 dark:text-clay-300'
          : 'bg-teal-500/15 text-teal-700 ring-teal-500/30 dark:text-teal-300'

  const hoverClass =
    highlight === 'ks3'
      ? 'hover:border-violet-500/40 focus-visible:ring-violet-500'
      : highlight === 'gcse'
        ? 'hover:border-emerald-500/40 focus-visible:ring-emerald-500'
        : highlight === 'igcse'
          ? 'hover:border-clay-500/40 focus-visible:ring-clay-500'
          : 'hover:border-teal-500/40 focus-visible:ring-teal-500'

  const ctaClass =
    highlight === 'ks3'
      ? 'text-violet-700 group-hover:text-violet-600 dark:text-violet-300 dark:group-hover:text-violet-200'
      : highlight === 'gcse'
        ? 'text-emerald-700 group-hover:text-emerald-600 dark:text-emerald-300 dark:group-hover:text-emerald-200'
        : highlight === 'igcse'
          ? 'text-clay-700 group-hover:text-clay-600 dark:text-clay-300 dark:group-hover:text-clay-200'
          : 'text-teal-700 group-hover:text-teal-600 dark:text-teal-300 dark:group-hover:text-teal-200'

  return (
    <Link
      href={board.href}
      className={`group relative flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-card p-5 sm:p-6 transition-all hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${hoverClass}`}
    >
      {/* Level pill - top-right */}
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

      {ealSupportedLabel ? (
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
          <Languages aria-hidden="true" className="h-3.5 w-3.5 text-teal-600 dark:text-teal-300" />
          {ealSupportedLabel}
        </span>
      ) : null}

      <span
        className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${ctaClass}`}
      >
        {openBoardLabel} <span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
 * GCC / Muslim-majority Cambridge recommendation banner
 *
 * Rendered for visitors whose resolved Vercel edge country code is in the
 * Muslim-majority list (see src/lib/geo/gcc.ts). The banner advises that
 * Cambridge IGCSE English Language 0500 / 0990 is the natural starting
 * point — it is the language-only spec with no literature requirement, so
 * the cultural review that comes with the literature anthologies does not
 * apply. The banner is purely informational; every board below remains
 * fully selectable. Hidden entirely for any other visitor so the UK GCSE
 * audience sees the default experience untouched.
 * ──────────────────────────────────────────────────────────────────────────── */
async function GccRecommendationBanner() {
  const showBanner = await isMuslimMajorityVisitor()
  if (!showBanner) return null
  return (
    <section
      aria-label="Recommended for international schools"
      className="mb-12 sm:mb-14 rounded-2xl border border-clay-500/30 bg-gradient-to-br from-clay-500/[0.07] via-card to-card p-5 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-clay-500/15 text-clay-700 ring-1 ring-clay-500/30 dark:text-clay-300"
          >
            <Star className="size-4" />
          </span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-700 dark:text-clay-300">
              Recommended for your region
            </p>
            <h2 className="mt-1 font-serif text-lg font-semibold text-foreground sm:text-xl">
              Cambridge IGCSE English Language (0500 / 0990)
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              The language-only Cambridge IGCSE is the most widely sat English specification at
              international schools in the region. It has no set-text literature requirement, which
              avoids the cultural review that comes with literature anthologies — while still
              preparing students for the same university entry standards. Other boards remain fully
              available below.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-stretch gap-2 sm:items-end">
          <Link
            href="/revision?setBoard=cambridge-0500"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-clay-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-clay-600/85"
          >
            Open Cambridge 0500 <ArrowRight aria-hidden="true" className="size-3.5" />
          </Link>
          <Link
            href="/legal/school-content-policy"
            className="text-center text-[11px] text-muted-foreground underline underline-offset-2 hover:text-foreground sm:text-right"
          >
            School content policy
          </Link>
        </div>
      </div>
    </section>
  )
}
