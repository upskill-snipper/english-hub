import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import LevelChip, { type Level } from '@/components/home/LevelChip'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/* ───────────────────── Metadata ───────────────────── */

export const metadata: Metadata = {
  title: 'GCSE and IGCSE English exam boards covered — The English Hub',
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

const GCSE_BOARDS: Board[] = [
  {
    id: 'aqa',
    name: 'AQA',
    initials: 'AQA',
    href: '/revision?setBoard=aqa',
    blurb: 'Power & Conflict, Love & Relationships, Worlds & Lives.',
    level: 'gcse',
    discClass: 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30',
  },
  {
    id: 'edexcel',
    name: 'Pearson Edexcel GCSE',
    initials: 'EDX',
    href: '/revision?setBoard=edexcel',
    blurb: 'Time & Place, Conflict, Relationships anthology.',
    level: 'gcse',
    discClass: 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30',
  },
  {
    id: 'ocr',
    name: 'OCR',
    initials: 'OCR',
    href: '/revision?setBoard=ocr',
    blurb: 'Love, Conflict, Power & Natural World, Youth & Age.',
    level: 'gcse',
    discClass: 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30',
  },
  {
    id: 'eduqas',
    name: 'WJEC Eduqas',
    initials: 'WJEC',
    href: '/revision?setBoard=eduqas',
    blurb: 'Eduqas anthology with annotated walkthroughs.',
    level: 'gcse',
    discClass: 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30',
  },
]

const IGCSE_BOARDS: Board[] = [
  {
    id: 'cambridge-0500',
    name: 'Cambridge IGCSE (CIE 0500 / 0990)',
    initials: 'CIE',
    href: '/revision?setBoard=cambridge-0500',
    blurb: '0500 and 0990 — Reading, Composition, model answers.',
    level: 'igcse',
    discClass: 'bg-clay-300/15 text-clay-300 ring-clay-300/30',
  },
  {
    id: 'edexcel-igcse',
    name: 'Pearson Edexcel IGCSE Literature (4ET1)',
    initials: 'iEDX-Lit',
    href: '/revision?setBoard=edexcel-igcse',
    blurb: 'Drama, Prose, Shakespeare, Unseen Poetry.',
    level: 'igcse',
    discClass: 'bg-clay-300/15 text-clay-300 ring-clay-300/30',
  },
  {
    id: 'edexcel-igcse-lang',
    name: 'Pearson Edexcel IGCSE Language A (4EA1)',
    initials: 'iEDX-Lang',
    href: '/revision?setBoard=edexcel-igcse-lang',
    blurb: 'Anthology, non-fiction, transactional writing.',
    level: 'igcse',
    discClass: 'bg-clay-300/15 text-clay-300 ring-clay-300/30',
  },
]

const ALL_BOARDS: Board[] = [...GCSE_BOARDS, ...IGCSE_BOARDS]

const SITE_URL = 'https://theenglishhub.app'

/* ───────────────────── Page ───────────────────── */

export default async function ExamBoardsPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  // ItemList schema groups all seven board landings as a single ranked list,
  // which Google understands as a hub page rather than a duplicate of the
  // homepage's board picker.
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'GCSE and IGCSE English exam boards covered by The English Hub',
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
    <main className="min-h-screen bg-ink-950">
      <BreadcrumbJsonLd
        nonce={nonce}
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Exam boards', url: `${SITE_URL}/exam-boards` },
        ]}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section aria-labelledby="exam-boards-heading" className="bg-ink-950 pb-10 sm:pb-14">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 sm:pt-16">
          <nav className="mb-6 text-xs text-cream-200/55" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cream-50 underline-offset-4 hover:underline">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream-100/85">Exam boards</span>
          </nav>
          <div className="text-center mb-2">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-3 text-emerald-300">
              Internal-link hub
            </p>
            <h1
              id="exam-boards-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cream-50 leading-tight"
            >
              Exam boards covered
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-cream-100/75 leading-relaxed">
              Six boards. One revision platform. Every page calibrated to your exam board&rsquo;s
              mark scheme.
            </p>
          </div>
        </div>
      </section>

      {/* ── GCSE grid ───────────────────────────────────────────────── */}
      <BoardSection
        sectionId="gcse-boards"
        heading="GCSE boards"
        subheading="Year 10–11, ages 14–16. Tap your board and you&rsquo;ll land on the exact specification you sit."
        boards={GCSE_BOARDS}
      />

      {/* ── IGCSE grid ──────────────────────────────────────────────── */}
      <BoardSection
        sectionId="igcse-boards"
        heading="IGCSE boards (international)"
        subheading="International routes for the same age group. Pick the spec your school enters."
        boards={IGCSE_BOARDS}
        showDivider
      />

      {/* ── Compare boards CTA strip ────────────────────────────────── */}
      <section
        aria-labelledby="compare-boards-heading"
        className="border-t border-cream-200/10 bg-cream-50/[0.02]"
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-3 text-clay-300">
                Side-by-side
              </p>
              <h2
                id="compare-boards-heading"
                className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50 leading-tight"
              >
                Comparing two boards?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-cream-100/75 leading-relaxed">
                Some students sit one board at GCSE and consider another at IGCSE. Our comparison
                pages put the assessment objectives, set-text lists, and paper structures alongside
                each other so you can see what actually changes.
              </p>
            </div>
            <Link
              href="/compare/aqa-vs-edexcel-gcse-english-literature"
              className="inline-flex items-center gap-2 rounded-2xl border border-clay-300/40 bg-clay-300/[0.06] px-5 py-3 text-sm font-medium text-clay-200 transition-colors hover:bg-clay-300/[0.10] hover:text-clay-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              Compare AQA vs Edexcel <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Helper copy ─────────────────────────────────────────────── */}
      <section aria-labelledby="why-boards-differ-heading" className="border-t border-cream-200/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
          <h2
            id="why-boards-differ-heading"
            className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50 leading-tight"
          >
            Why exam boards differ — and what to do if you don&rsquo;t know yours
          </h2>
          <div className="mt-5 space-y-4 text-sm sm:text-base text-cream-100/80 leading-relaxed">
            <p>
              All six boards on this page sit GCSE or IGCSE English at the same level — grades 9 to
              1, the same age group, the same broad assessment objectives. What differs is the
              anthology, the set texts, the paper structure, and the way examiners weight each AO.
              An AQA Power and Conflict response is marked against a different anthology and a
              different question stem from an Eduqas Conflict response, even when the underlying
              skill is the same.
            </p>
            <p>
              That&rsquo;s why every page on The English Hub is keyed to a single board. The Macbeth
              pages an AQA student sees use AQA&rsquo;s extract-plus-essay structure and AO
              weighting; the Macbeth pages an Edexcel IGCSE student sees use the 4ET1 closed-book
              format. Same play, different mark scheme — different revision.
            </p>
            <p>
              If you&rsquo;re not sure which board your school enters you for, ask your English
              teacher or check a recent piece of marked work for the board logo. You can also{' '}
              <Link
                href="/board-select"
                className="underline underline-offset-4 hover:text-clay-300"
              >
                choose by level on the board-select page
              </Link>{' '}
              and we&rsquo;ll walk you through the options.
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
}

function BoardSection({
  boards,
  sectionId,
  heading,
  subheading,
  showDivider = false,
}: BoardSectionProps) {
  const headingId = `${sectionId}-heading`

  return (
    <section
      aria-labelledby={headingId}
      className={`bg-ink-950 pb-14 sm:pb-20${
        showDivider ? ' border-t border-cream-200/10 pt-12 sm:pt-16' : ''
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2
            id={headingId}
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-cream-50 leading-tight"
          >
            {heading}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-cream-100/75 leading-relaxed">
            {subheading}
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {boards.map((b) => (
            <li key={b.id}>
              <Link
                href={b.href}
                aria-label={`${b.name} — ${b.level === 'gcse' ? 'GCSE' : 'IGCSE'} — open board`}
                className={`group relative flex h-full flex-col gap-4 rounded-2xl border border-cream-200/10 bg-cream-50/[0.02] p-5 sm:p-6 transition-all hover:bg-cream-50/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${
                  b.level === 'gcse'
                    ? 'hover:border-emerald-400/40 focus-visible:ring-emerald-400'
                    : 'hover:border-clay-300/40 focus-visible:ring-clay-300'
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
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-cream-50 leading-tight">
                    {b.name}
                  </h3>
                </div>
                <p className="text-sm text-cream-100/70 leading-relaxed">{b.blurb}</p>
                <span
                  className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    b.level === 'gcse'
                      ? 'text-emerald-300 group-hover:text-emerald-200'
                      : 'text-clay-300 group-hover:text-clay-200'
                  }`}
                >
                  Open board <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
