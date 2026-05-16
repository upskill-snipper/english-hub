import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import LevelChip, { type Level } from '@/components/home/LevelChip'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { tMany, t } from '@/lib/i18n/t'

/* ───────────────────── Metadata ───────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'GCSE and IGCSE English exam boards covered — The English Hub',
    description:
      'Six exam boards covered: AQA, Pearson Edexcel, OCR, WJEC Eduqas, Cambridge IGCSE, Pearson Edexcel IGCSE. Pick yours and revise the way examiners actually mark.',
  },
  title: 'GCSE and IGCSE English exam boards covered',
  description:
    'Six exam boards covered: AQA, Pearson Edexcel, OCR, WJEC Eduqas, Cambridge IGCSE, Pearson Edexcel IGCSE. Pick yours and revise the way examiners actually mark.',
  alternates: { canonical: 'https://theenglishhub.app/exam-boards' },
}

/* ───────────────────── Board data ─────────────────────
 *
 * The seven board cards mirror the homepage's BoardPickerSection. Every card
 * lands on /revision?setBoard=<id>; the middleware validates the id against
 * the BOARDS allow-list, writes the cookie, and 307s back to clean /revision.
 * Keep ids in sync with src/lib/board/boards.ts (single source of truth).
 */

type BoardLevel = Extract<Level, 'gcse' | 'igcse'>

type Board = {
  id: string
  name: string
  initials: string
  href: string
  blurb: string
  level: BoardLevel
  discClass: string
}

type BoardDef = {
  id: string
  nameKey: string
  initials: string
  href: string
  blurbKey: string
  level: BoardLevel
  discClass: string
}

const GCSE_BOARD_DEFS: BoardDef[] = [
  {
    id: 'aqa',
    nameKey: 'exam_boards.aqa.name',
    initials: 'AQA',
    href: '/revision?setBoard=aqa',
    blurbKey: 'exam_boards.aqa.blurb',
    level: 'gcse',
    discClass: 'bg-emerald-500/15 text-emerald-700 ring-emerald-500/30 dark:text-emerald-300',
  },
  {
    id: 'edexcel',
    nameKey: 'exam_boards.edexcel.name',
    initials: 'EDX',
    href: '/revision?setBoard=edexcel',
    blurbKey: 'exam_boards.edexcel.blurb',
    level: 'gcse',
    discClass: 'bg-emerald-500/15 text-emerald-700 ring-emerald-500/30 dark:text-emerald-300',
  },
  {
    id: 'ocr',
    nameKey: 'exam_boards.ocr.name',
    initials: 'OCR',
    href: '/revision?setBoard=ocr',
    blurbKey: 'exam_boards.ocr.blurb',
    level: 'gcse',
    discClass: 'bg-emerald-500/15 text-emerald-700 ring-emerald-500/30 dark:text-emerald-300',
  },
  {
    id: 'eduqas',
    nameKey: 'exam_boards.eduqas.name',
    initials: 'WJEC',
    href: '/revision?setBoard=eduqas',
    blurbKey: 'exam_boards.eduqas.blurb',
    level: 'gcse',
    discClass: 'bg-emerald-500/15 text-emerald-700 ring-emerald-500/30 dark:text-emerald-300',
  },
]

const IGCSE_BOARD_DEFS: BoardDef[] = [
  {
    id: 'cambridge-0500',
    nameKey: 'exam_boards.cambridge.name',
    initials: 'CIE',
    href: '/revision?setBoard=cambridge-0500',
    blurbKey: 'exam_boards.cambridge.blurb',
    level: 'igcse',
    discClass: 'bg-clay-500/15 text-clay-700 ring-clay-500/30 dark:text-clay-300',
  },
  {
    id: 'edexcel-igcse',
    nameKey: 'exam_boards.edexcel_igcse.name',
    initials: 'iEDX-Lit',
    href: '/revision?setBoard=edexcel-igcse',
    blurbKey: 'exam_boards.edexcel_igcse.blurb',
    level: 'igcse',
    discClass: 'bg-clay-500/15 text-clay-700 ring-clay-500/30 dark:text-clay-300',
  },
  {
    id: 'edexcel-igcse-lang',
    nameKey: 'exam_boards.edexcel_igcse_lang.name',
    initials: 'iEDX-Lang',
    href: '/revision?setBoard=edexcel-igcse-lang',
    blurbKey: 'exam_boards.edexcel_igcse_lang.blurb',
    level: 'igcse',
    discClass: 'bg-clay-500/15 text-clay-700 ring-clay-500/30 dark:text-clay-300',
  },
]

const SITE_URL = 'https://theenglishhub.app'

/* ───────────────────── Page ───────────────────── */

export default async function ExamBoardsPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  // Resolve all dynamic strings up-front.
  const boardKeys = [...GCSE_BOARD_DEFS, ...IGCSE_BOARD_DEFS].flatMap((b) => [
    b.nameKey,
    b.blurbKey,
  ])
  const baseKeys = [
    'exam_boards.crumb.home',
    'exam_boards.crumb.self',
    'exam_boards.eyebrow',
    'exam_boards.h1',
    'exam_boards.lead',
    'exam_boards.gcse.heading',
    'exam_boards.gcse.subheading',
    'exam_boards.igcse.heading',
    'exam_boards.igcse.subheading',
    'exam_boards.why.h2',
    'exam_boards.why.p1',
    'exam_boards.why.p2',
    'exam_boards.why.p3_pre',
    'exam_boards.why.p3_link',
    'exam_boards.why.p3_post',
    'exam_boards.cta.open_board',
    'exam_boards.aria.open_board',
    'exam_boards.list.schema_name',
  ]
  const v = await tMany([...baseKeys, ...boardKeys])
  let i = 0
  const tCrumbHome = v[i++]!
  const tCrumbSelf = v[i++]!
  const tEyebrow = v[i++]!
  const tH1 = v[i++]!
  const tLead = v[i++]!
  const tGcseHeading = v[i++]!
  const tGcseSubheading = v[i++]!
  const tIgcseHeading = v[i++]!
  const tIgcseSubheading = v[i++]!
  const tWhyH2 = v[i++]!
  const tWhyP1 = v[i++]!
  const tWhyP2 = v[i++]!
  const tWhyP3Pre = v[i++]!
  const tWhyP3Link = v[i++]!
  const tWhyP3Post = v[i++]!
  const tOpenBoard = v[i++]!
  const tAriaOpenBoard = v[i++]!
  const tListSchema = v[i++]!

  const GCSE_BOARDS: Board[] = GCSE_BOARD_DEFS.map((b) => ({
    id: b.id,
    name: v[i++]!,
    initials: b.initials,
    href: b.href,
    blurb: v[i++]!,
    level: b.level,
    discClass: b.discClass,
  }))
  const IGCSE_BOARDS: Board[] = IGCSE_BOARD_DEFS.map((b) => ({
    id: b.id,
    name: v[i++]!,
    initials: b.initials,
    href: b.href,
    blurb: v[i++]!,
    level: b.level,
    discClass: b.discClass,
  }))
  const ALL_BOARDS = [...GCSE_BOARDS, ...IGCSE_BOARDS]

  // Resolve EN-level GCSE/IGCSE labels for the LevelChip aria — kept inline.
  const tLevelGcse = await t('exam_boards.level.gcse')
  const tLevelIgcse = await t('exam_boards.level.igcse')

  // ItemList schema groups all seven board landings as a single ranked list,
  // which Google understands as a hub page rather than a duplicate of the
  // homepage's board picker.
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: tListSchema,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: ALL_BOARDS.length,
    itemListElement: ALL_BOARDS.map((board, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: board.name,
      url: `${SITE_URL}${board.href}`,
    })),
  }

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        nonce={nonce}
        items={[
          { name: tCrumbHome, url: SITE_URL },
          { name: tCrumbSelf, url: `${SITE_URL}/exam-boards` },
        ]}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section aria-labelledby="exam-boards-heading" className="bg-background pb-10 sm:pb-14">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 sm:pt-16">
          <nav className="mb-6 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground underline-offset-4 hover:underline">
              {tCrumbHome}
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-foreground/85">{tCrumbSelf}</span>
          </nav>
          <div className="text-center mb-2">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-3 text-emerald-600 dark:text-emerald-300">
              {tEyebrow}
            </p>
            <h1
              id="exam-boards-heading"
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight"
            >
              {tH1}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed">
              {tLead}
            </p>
          </div>
        </div>
      </section>

      {/* ── GCSE grid ───────────────────────────────────────────────── */}
      <BoardSection
        sectionId="gcse-boards"
        heading={tGcseHeading}
        subheading={tGcseSubheading}
        boards={GCSE_BOARDS}
        openBoardLabel={tOpenBoard}
        ariaOpenBoardTemplate={tAriaOpenBoard}
        levelGcseLabel={tLevelGcse}
        levelIgcseLabel={tLevelIgcse}
      />

      {/* ── IGCSE grid ──────────────────────────────────────────────── */}
      <BoardSection
        sectionId="igcse-boards"
        heading={tIgcseHeading}
        subheading={tIgcseSubheading}
        boards={IGCSE_BOARDS}
        showDivider
        openBoardLabel={tOpenBoard}
        ariaOpenBoardTemplate={tAriaOpenBoard}
        levelGcseLabel={tLevelGcse}
        levelIgcseLabel={tLevelIgcse}
      />

      {/* ── Helper copy ─────────────────────────────────────────────── */}
      <section aria-labelledby="why-boards-differ-heading" className="border-t border-border/60">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
          <h2
            id="why-boards-differ-heading"
            className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-foreground leading-tight"
          >
            {tWhyH2}
          </h2>
          <div className="mt-5 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>{tWhyP1}</p>
            <p>{tWhyP2}</p>
            <p>
              {tWhyP3Pre}{' '}
              <Link
                href="/board-select"
                className="underline underline-offset-4 hover:text-clay-600 dark:hover:text-clay-300"
              >
                {tWhyP3Link}
              </Link>{' '}
              {tWhyP3Post}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ───────────────────── Board section ───────────────────── */

type BoardSectionProps = {
  boards: Board[]
  sectionId: string
  heading: string
  subheading: string
  showDivider?: boolean
  openBoardLabel: string
  ariaOpenBoardTemplate: string
  levelGcseLabel: string
  levelIgcseLabel: string
}

function BoardSection({
  boards,
  sectionId,
  heading,
  subheading,
  showDivider = false,
  openBoardLabel,
  ariaOpenBoardTemplate,
  levelGcseLabel,
  levelIgcseLabel,
}: BoardSectionProps) {
  const headingId = `${sectionId}-heading`

  return (
    <section
      aria-labelledby={headingId}
      className={`bg-background pb-14 sm:pb-20${
        showDivider ? ' border-t border-border/60 pt-12 sm:pt-16' : ''
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2
            id={headingId}
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight"
          >
            {heading}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed">
            {subheading}
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {boards.map((b) => {
            const levelLabel = b.level === 'gcse' ? levelGcseLabel : levelIgcseLabel
            const ariaLabel = ariaOpenBoardTemplate
              .replace('{name}', b.name)
              .replace('{level}', levelLabel)
            return (
              <li key={b.id}>
                <Link
                  href={b.href}
                  aria-label={ariaLabel}
                  className={`group relative flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-card p-5 sm:p-6 transition-all hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    b.level === 'gcse'
                      ? 'hover:border-emerald-500/40 focus-visible:ring-emerald-500'
                      : 'hover:border-clay-500/40 focus-visible:ring-clay-500'
                  }`}
                >
                  <LevelChip level={b.level} className="absolute right-4 top-4" />
                  <div className="flex items-center gap-4 pr-16">
                    <span
                      aria-hidden="true"
                      className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-1 ${b.discClass} font-mono text-xs sm:text-sm font-bold tracking-wide`}
                    >
                      {b.initials}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground leading-tight">
                      {b.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.blurb}</p>
                  <span
                    className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      b.level === 'gcse'
                        ? 'text-emerald-700 group-hover:text-emerald-600 dark:text-emerald-300 dark:group-hover:text-emerald-200'
                        : 'text-clay-700 group-hover:text-clay-600 dark:text-clay-300 dark:group-hover:text-clay-200'
                    }`}
                  >
                    {openBoardLabel} <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
