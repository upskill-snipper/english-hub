import type { Metadata } from 'next'
import { markSchemeAnchor } from '@/lib/marking/mark-scheme-anchor'
import Link from 'next/link'
import { TeacherResourceCard } from '@/components/teacher/ResourceCard'
import { BoardGroupedResources, groupForBoard } from '@/components/teacher/board-grouped'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-config'
import {
  MARK_SCHEME_GUIDES,
  durationWords,
  guideHref,
  questionCount,
} from '@/data/mark-scheme-guides'

const DESCRIPTION =
  'A plain-English guide to the mark scheme of every GCSE and International GCSE English paper our marker covers: what each question asks, what earns marks and what each level looks like.'

export const metadata: Metadata = {
  openGraph: {
    title: 'Mark Schemes - Teacher Library',
    description: DESCRIPTION,
    images: [
      {
        url: '/api/og?title=Mark+Schemes+-+Teacher+Library',
        width: 1200,
        height: 630,
        alt: 'Mark Schemes - Teacher Library',
      },
    ],
  },
  title: 'Mark Schemes - Teacher Library',
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://theenglishhub.app/resources/teacher-library/mark-schemes',
  },
}

/**
 * One card per paper, each opening its guide (24 October 2026).
 *
 * WHAT WAS WRONG. This page held sixteen hand-written cards. Each was a title
 * and one line promising "grade descriptors", "AO weightings" and "common
 * examiner comments", and nothing was behind any of them: the card was the
 * whole of it, so clicking did nothing. The founder found the marking hub's
 * mark-scheme links led here and "only shows boxes for each one, no reference
 * cards behind it". Several of the promises were also untrue of the boxes, and
 * the page said the cards were "written by teachers", which nothing records.
 *
 * NOW. The cards are built from the guides themselves (src/data/mark-scheme-guides),
 * one for every paper the AI marker can mark against, International GCSE and
 * Cambridge included, and each links to its guide. A card's description is
 * the paper's own name and size, so it cannot promise what the guide lacks.
 * Each card keeps the anchor it has always had, so old links to
 * `#aqa-english-language-paper-1` still land on the right card.
 */
const MARK_SCHEMES = MARK_SCHEME_GUIDES.map((g) => ({
  title: g.title,
  description: `${g.paperName}. ${questionCount(g)} questions, ${g.totalMarks} marks, ${durationWords(g.durationMinutes)}.`,
  examBoard: g.board,
  href: guideHref(g),
}))

/**
 * Which cards are the reader's own. The labels are the guides' board names, so
 * an International GCSE reader is matched to the Edexcel International GCSE
 * and Cambridge guides, not to the UK GCSE ones; a board with no guide yet
 * (KS3, Cambridge Literature, A level) matches nothing, and the grouping says
 * so and shows every card.
 */
function markSchemeMatchesBoard(examBoard: string, board: ExamBoard | null): boolean {
  if (!board) return true
  const map: Record<ExamBoard, string> = {
    ks3: 'KS3',
    aqa: 'AQA',
    edexcel: 'Edexcel',
    ocr: 'OCR',
    eduqas: 'Eduqas',
    'edexcel-igcse': 'Edexcel International GCSE',
    'edexcel-igcse-lang': 'Edexcel International GCSE',
    'cambridge-0500': 'Cambridge',
    'cambridge-0990': 'Cambridge',
    'cambridge-0475': 'Cambridge Literature',
    'ial-edexcel': 'Edexcel International A level',
    'aqa-a-level': 'AQA A level',
    'edexcel-a-level': 'Edexcel A level',
    'ocr-a-level': 'OCR A level',
    'eduqas-a-level': 'Eduqas A level',
  }
  return examBoard === map[board]
}

/**
 * WHAT THE BOARD FILTER DID, reported from the live site on 19 September 2026.
 *
 * It hid every card that did not match the reader's board. For four of the
 * fifteen boards - KS3, and the three Cambridge syllabuses - nothing in the list
 * matches at all, so the page rendered its heading, its promise of
 * "quick-reference cards for every major GCSE English exam board", a badge
 * reading "For KS3", and then an empty grid.
 *
 * It also broke twelve links. The marking hub deep-links to all sixteen cards
 * by anchor, and an anchor only exists on a card that renders, so an AQA reader
 * following an Edexcel link arrived at this page and jumped nowhere. The test
 * for those links could not see it: it reads the MARK_SCHEMES array out of this
 * file and checks the anchors against that, which proves the list is consistent
 * and says nothing about what a reader is served.
 *
 * So nothing is hidden now. The reader's own board comes first, the rest follow
 * under a heading that says what they are, and every anchor exists on every
 * render whatever board is set.
 */
export default async function MarkSchemesPage() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)
  const grouping = groupForBoard(
    MARK_SCHEMES,
    (m) => markSchemeMatchesBoard(m.examBoard, board),
    board,
  )
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/resources/teacher-library" className="hover:text-primary">
              Teacher Library
            </Link>
            <span>/</span>
            <span className="text-foreground">Mark Schemes</span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
              For students and teachers
            </span>
            {/* Only when we hold cards for that board. It read "For KS3" over an
                empty page, which is a claim about relevance the page could not
                keep. */}
            {boardConfig && grouping.boardHasOwn && (
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                For {boardConfig.shortName}
              </span>
            )}
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">Mark Schemes</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            A plain-English guide to each paper: what every question asks, what earns marks, what
            each level looks like and what to avoid. Open a paper to read its guide.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            Each guide is in our own words and was checked against the board&apos;s published
            specification and mark schemes. It is not the board&apos;s mark scheme: each one links
            to the board&apos;s own papers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <BoardGroupedResources
          grouping={grouping}
          all={MARK_SCHEMES}
          boardShortName={boardConfig?.shortName}
          noun="mark scheme guides"
          renderItem={(m) => (
            <div key={m.title} id={markSchemeAnchor(m.title)} className="scroll-mt-24">
              <TeacherResourceCard
                title={m.title}
                description={m.description}
                href={m.href}
                kind="Mark Scheme"
                examBoard={m.examBoard}
                tag="Guide"
                forTeachersBadge={false}
              />
            </div>
          )}
        />
      </section>
    </div>
  )
}
