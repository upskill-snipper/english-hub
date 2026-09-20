import type { Metadata } from 'next'
import { markSchemeAnchor } from '@/lib/marking/mark-scheme-anchor'
import Link from 'next/link'
import { TeacherResourceCard } from '@/components/teacher/ResourceCard'
import { BoardGroupedResources, groupForBoard } from '@/components/teacher/board-grouped'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-config'

export const metadata: Metadata = {
  openGraph: {
    title: 'Mark Schemes - Teacher Library',
    description:
      'Mark scheme reference cards for AQA, Edexcel, OCR, and Eduqas GCSE English. Quick-reference grade descriptors and AOs.',
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
  description:
    'Mark scheme reference cards for AQA, Edexcel, OCR, and Eduqas GCSE English. Quick-reference grade descriptors and AOs.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/teacher-library/mark-schemes',
  },
}

const MARK_SCHEMES = [
  {
    title: 'AQA English Language Paper 1',
    description:
      'Grade descriptors for Q1-Q5 with AO1, AO2, AO5, AO6 weightings and common examiner comments.',
    examBoard: 'AQA',
  },
  {
    title: 'AQA English Language Paper 2',
    description:
      'Full reference for the non-fiction paper. Includes synthesis (Q2), comparison (Q4), and transactional writing (Q5).',
    examBoard: 'AQA',
  },
  {
    title: 'AQA English Literature Paper 1',
    description:
      'Shakespeare and the 19th Century Novel. AO1, AO2, AO3, AO4 descriptors with grade boundaries.',
    examBoard: 'AQA',
  },
  {
    title: 'AQA English Literature Paper 2',
    description:
      'Modern Texts, Poetry Anthology, and Unseen Poetry. Comparison requirements and weighting.',
    examBoard: 'AQA',
  },
  {
    title: 'Edexcel English Language Paper 1',
    description:
      '19th-century fiction and imaginative writing. AO breakdowns and level descriptors.',
    examBoard: 'Edexcel',
  },
  {
    title: 'Edexcel English Language Paper 2',
    description: 'Non-fiction and transactional writing. Synthesis and comparison AOs explained.',
    examBoard: 'Edexcel',
  },
  {
    title: 'Edexcel English Literature Paper 1',
    description: 'Shakespeare and post-1914 literature. Level descriptors and AO weighting.',
    examBoard: 'Edexcel',
  },
  {
    title: 'Edexcel English Literature Paper 2',
    description:
      '19th-century novel, poetry, and unseen poetry. Comparison expectations at each level.',
    examBoard: 'Edexcel',
  },
  {
    title: 'OCR English Language Component 01',
    description: 'Communicating information and ideas. Key AOs and descriptors at levels 1-6.',
    examBoard: 'OCR',
  },
  {
    title: 'OCR English Language Component 02',
    description: 'Exploring effects and impact. AO breakdown and common examiner feedback.',
    examBoard: 'OCR',
  },
  {
    title: 'OCR English Literature Component 01',
    description: 'Exploring modern and literary heritage texts. AOs, levels, and grade boundaries.',
    examBoard: 'OCR',
  },
  {
    title: 'OCR English Literature Component 02',
    description: 'Exploring poetry and Shakespeare. Comparison and AO3 (context) expectations.',
    examBoard: 'OCR',
  },
  {
    title: 'Eduqas English Language Component 1',
    description:
      '20th-century literature reading and creative prose writing. Mark descriptors and AOs.',
    examBoard: 'Eduqas',
  },
  {
    title: 'Eduqas English Language Component 2',
    description: '19th- and 21st-century non-fiction and transactional writing. Level descriptors.',
    examBoard: 'Eduqas',
  },
  {
    title: 'Eduqas English Literature Component 1',
    description: 'Shakespeare and poetry. Level descriptors and weighting of AOs.',
    examBoard: 'Eduqas',
  },
  {
    title: 'Eduqas English Literature Component 2',
    description:
      'Post-1914 prose/drama, 19th-century prose, unseen poetry. AO breakdown by section.',
    examBoard: 'Eduqas',
  },
]

function markSchemeMatchesBoard(examBoard: string, board: ExamBoard | null): boolean {
  if (!board) return true
  const map: Record<ExamBoard, string> = {
    ks3: 'KS3',
    aqa: 'AQA',
    edexcel: 'Edexcel',
    ocr: 'OCR',
    eduqas: 'Eduqas',
    'edexcel-igcse': 'Edexcel',
    'edexcel-igcse-lang': 'Edexcel',
    'cambridge-0500': 'Cambridge',
    'cambridge-0990': 'Cambridge',
    'cambridge-0475': 'Cambridge',
    'ial-edexcel': 'Edexcel',
    'aqa-a-level': 'AQA',
    'edexcel-a-level': 'Edexcel',
    'ocr-a-level': 'OCR',
    'eduqas-a-level': 'Eduqas',
  }
  const label = map[board]
  return examBoard.toLowerCase().includes(label.toLowerCase())
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
              For Teachers
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
            Quick-reference mark scheme cards for every major GCSE English exam board. Grade
            descriptors, AO weightings, and common examiner comments at your fingertips.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            These are summary reference cards written by teachers. For the official mark schemes,
            visit the awarding body websites.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <BoardGroupedResources
          grouping={grouping}
          all={MARK_SCHEMES}
          boardShortName={boardConfig?.shortName}
          noun="reference cards"
          renderItem={(m) => (
            <div key={m.title} id={markSchemeAnchor(m.title)} className="scroll-mt-24">
              <TeacherResourceCard
                title={m.title}
                description={m.description}
                kind="Mark Scheme"
                examBoard={m.examBoard}
                tag="Reference card"
              />
            </div>
          )}
        />
      </section>
    </div>
  )
}
