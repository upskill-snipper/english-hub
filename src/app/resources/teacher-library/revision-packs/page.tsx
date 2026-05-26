import type { Metadata } from 'next'
import Link from 'next/link'
import { TeacherResourceCard, TeacherResourceGrid } from '@/components/teacher/ResourceCard'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-config'
import { textAvailableForBoard } from '@/lib/board/set-texts'

export const metadata: Metadata = {
  openGraph: {
    title: 'Revision Packs - Teacher Library',
    description:
      'Ready-made GCSE English revision packs by set text. Quote banks, themes, characters, context, and essay plans in one place.',
  },
  title: 'Revision Packs - Teacher Library',
  description:
    'Ready-made GCSE English revision packs by set text. Quote banks, themes, characters, context, and essay plans in one place.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/teacher-library/revision-packs',
  },
}

const PACKS = [
  {
    id: 'jekyll-and-hyde-pack',
    title: 'Jekyll and Hyde Revision Pack',
    description:
      'Full revision booklet: quote bank, character analysis, themes, Victorian context, and five graded essay plans.',
    tag: 'Full pack',
  },
  {
    id: 'macbeth',
    title: 'Macbeth Revision Pack',
    description:
      'Act-by-act quote bank, character arcs for Macbeth, Lady Macbeth & Banquo, key themes, Jacobean context, essay plans.',
    tag: 'Coming soon',
  },
  {
    id: 'inspector-calls',
    title: 'An Inspector Calls Revision Pack',
    description:
      "Priestley's social message unpacked. Quote bank by character, themes, 1912 vs 1945 context, graded essay plans.",
    tag: 'Coming soon',
  },
  {
    id: 'a-christmas-carol',
    title: 'A Christmas Carol Revision Pack',
    description:
      'Stave-by-stave summaries, Scrooge transformation tracker, Victorian poverty context, themes, essay plans.',
    tag: 'Coming soon',
  },
  {
    id: 'power-conflict-anthology',
    title: 'Power & Conflict Anthology Pack',
    description:
      'All 15 poems with notes, quote banks, comparison grids, and comparative essay plans.',
    tag: 'Coming soon',
  },
  {
    id: 'love-relationships-anthology',
    title: 'Love & Relationships Anthology Pack',
    description:
      'Full anthology notes with theme links, form and structure analysis, and comparison practice.',
    tag: 'Coming soon',
  },
  {
    id: 'romeo-and-juliet',
    title: 'Romeo and Juliet Revision Pack',
    description:
      'Scene-by-scene summaries, key quotes, themes, and essay plans covering fate, love, violence, and family.',
    tag: 'Coming soon',
  },
  {
    id: 'animal-farm',
    title: 'Animal Farm Revision Pack',
    description:
      'Chapter summaries, allegorical parallels to the Russian Revolution, themes, and essay plans.',
    tag: 'Coming soon',
  },
]

// Map this page's pack IDs to canonical set-text slugs in @/lib/board/set-texts.
const PACK_TO_SET_TEXT_SLUG: Record<string, string> = {
  'jekyll-and-hyde-pack': 'jekyll-and-hyde',
  macbeth: 'macbeth',
  'inspector-calls': 'an-inspector-calls',
  'a-christmas-carol': 'a-christmas-carol',
  'romeo-and-juliet': 'romeo-and-juliet',
  'animal-farm': 'animal-farm',
  // Anthology packs are AQA-only
  'power-conflict-anthology': '__aqa-only__',
  'love-relationships-anthology': '__aqa-only__',
}

function packMatchesBoard(packId: string, board: ExamBoard | null): boolean {
  if (!board) return true
  const slug = PACK_TO_SET_TEXT_SLUG[packId]
  if (!slug) return true // unknown - keep
  if (slug === '__aqa-only__') return board === 'aqa'
  return textAvailableForBoard(slug, board)
}

export default async function RevisionPacksPage() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)
  const visiblePacks = PACKS.filter((p) => packMatchesBoard(p.id, board))
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/resources/teacher-library" className="hover:text-primary">
              Teacher Library
            </Link>
            <span>/</span>
            <span className="text-foreground">Revision Packs</span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
              For Teachers
            </span>
            {boardConfig && (
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                For {boardConfig.shortName}
              </span>
            )}
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">Revision Packs</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Ready-to-print revision booklets for every major GCSE set text. Hand them out as
            homework, mock-revision packs, or self-study resources.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <TeacherResourceGrid>
          {visiblePacks.map((p) => (
            <TeacherResourceCard
              key={p.id}
              title={p.title}
              description={p.description}
              kind="Revision Pack"
              tag={p.tag}
              href={
                p.id === 'jekyll-and-hyde-pack'
                  ? `/resources/teacher-library/revision-packs/${p.id}`
                  : '/resources/teacher-library/revision-packs'
              }
            />
          ))}
        </TeacherResourceGrid>
      </section>
    </main>
  )
}
