import type { Metadata } from 'next'
import Link from 'next/link'
import { TeacherResourceCard, TeacherResourceGrid } from '@/components/teacher/ResourceCard'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'

export const metadata: Metadata = {
  openGraph: {
    title: 'Worksheets - Teacher Library',
    description:
      '25 free printable worksheets for GCSE English: comprehension, analysis, writing scaffolds, and exam skills practice.',
  },
  title: 'Worksheets - Teacher Library',
  description:
    '25 free printable worksheets for GCSE English: comprehension, analysis, writing scaffolds, and exam skills practice.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/teacher-library/worksheets',
  },
}

const WORKSHEETS = [
  {
    id: 'pee-paragraph-builder',
    title: 'PEE Paragraph Builder',
    description:
      'A scaffolded worksheet that walks students through Point, Evidence, Explain with sentence starters and a worked example.',
    yearGroup: 'KS3-KS4',
  },
  {
    id: 'poetry-annotation-guide',
    title: 'Poetry Annotation Framework',
    description:
      'A reusable poem annotation worksheet that teaches students to mark up any poem using the SMILE framework.',
    yearGroup: 'Year 10-11',
  },
  {
    id: 'language-devices-bingo',
    title: 'Language Devices Bingo',
    description:
      '24 language device cards for a bingo-style starter or recap activity. Print and play in 5 minutes.',
    yearGroup: 'KS3-KS4',
  },
  {
    id: 'quote-memorisation-grid',
    title: 'Quote Memorisation Grid',
    description:
      'Blank grids for students to learn 10 quotes per character, with a space for analysis and context.',
    yearGroup: 'Year 11',
  },
  {
    id: 'unseen-prose-worksheet',
    title: 'Unseen Prose Practice',
    description:
      'A full unseen prose extract with scaffolded comprehension and analysis questions.',
    yearGroup: 'Year 11',
  },
  {
    id: 'connective-bank',
    title: 'Analytical Connective Bank',
    description:
      'A printable reference sheet of 50+ analytical connectives organised by function: adding, contrasting, emphasising, concluding.',
    yearGroup: 'Year 10-11',
  },
  {
    id: 'vocab-builder',
    title: 'Academic Vocabulary Builder',
    description:
      '30 Tier 2 academic words with definitions, examples, and a sentence-writing task.',
    yearGroup: 'KS3',
  },
  {
    id: 'character-profile',
    title: 'Character Profile Template',
    description:
      'A blank character analysis template covering key quotes, methods, context, and themes.',
    yearGroup: 'Year 10',
  },
  {
    id: 'theme-tracker',
    title: 'Theme Tracker Grid',
    description:
      'Track how a theme develops across a text with chapter-by-chapter evidence and analysis.',
    yearGroup: 'Year 10-11',
  },
  {
    id: 'sentence-variety',
    title: 'Sentence Variety Practice',
    description:
      'Students rewrite a flat paragraph using a range of sentence structures for impact.',
    yearGroup: 'KS3',
  },
  {
    id: 'figurative-language',
    title: 'Figurative Language Hunt',
    description:
      'Spot and explain metaphors, similes, personification, and hyperbole in an extract.',
    yearGroup: 'KS3',
  },
  {
    id: 'writing-to-describe',
    title: 'Writing to Describe Planner',
    description:
      'A visual planning sheet for descriptive writing using the 5 senses and a shift in time.',
    yearGroup: 'Year 10',
  },
  {
    id: 'writing-to-argue',
    title: 'Writing to Argue Planner',
    description:
      'A planning sheet using DAFOREST and a rhetorical structure (intro, three arguments, counter, conclusion).',
    yearGroup: 'Year 11',
  },
  {
    id: 'context-card-set',
    title: 'Context Card Set',
    description:
      'A set of printable cards linking key quotes to historical, social, and literary context.',
    yearGroup: 'Year 11',
  },
  {
    id: 'spag-audit',
    title: 'SPaG Self-Audit',
    description: 'A student-facing SPaG checklist and error log for tracking common mistakes.',
    yearGroup: 'KS3-KS4',
  },
  {
    id: 'essay-plan-scaffold',
    title: 'Essay Plan Scaffold',
    description: 'A single-sheet essay planner with thesis, three arguments, and conclusion boxes.',
    yearGroup: 'Year 11',
  },
  {
    id: 'tone-shift',
    title: 'Tone Shift Analysis',
    description: 'Students identify and annotate tone shifts in a non-fiction article.',
    yearGroup: 'Year 10',
  },
  {
    id: 'metaphor-builder',
    title: 'Metaphor Builder',
    description: 'Step-by-step scaffold for building extended metaphors in creative writing.',
    yearGroup: 'KS3',
  },
  {
    id: 'inference-ladder',
    title: 'Inference Ladder',
    description:
      'Teach students to move from literal to inferred to thematic reading with a three-step scaffold.',
    yearGroup: 'Year 10',
  },
  {
    id: 'opening-hooks',
    title: 'Opening Hooks Gallery',
    description: 'Ten model opening lines with analysis, plus a task to write five of their own.',
    yearGroup: 'Year 10',
  },
  {
    id: 'what-how-why',
    title: 'What-How-Why Grid',
    description: 'A three-column analysis grid to structure paragraphs on language and method.',
    yearGroup: 'Year 10',
  },
  {
    id: 'punctuation-review',
    title: 'Punctuation Review',
    description:
      'Target colons, semicolons, dashes, and brackets with a model text and correction tasks.',
    yearGroup: 'KS3-KS4',
  },
  {
    id: 'speech-writing',
    title: 'Speech Writing Workshop',
    description:
      'Plan and draft a one-minute speech with rhetorical devices highlighted throughout.',
    yearGroup: 'Year 11',
  },
  {
    id: 'structural-analysis',
    title: 'Structural Features Worksheet',
    description:
      'Spot and explain structural choices: openings, shifts, cyclical structure, foreshadowing.',
    yearGroup: 'Year 11',
  },
  {
    id: 'comparison-matrix',
    title: 'Comparison Matrix',
    description:
      'A reusable matrix for comparing two texts, characters, or poems across theme, method, and effect.',
    yearGroup: 'Year 11',
  },
]

const HAS_DETAIL = new Set([
  'pee-paragraph-builder',
  'poetry-annotation-guide',
  'language-devices-bingo',
])

export default async function WorksheetsPage() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/resources/teacher-library" className="hover:text-primary">
              Teacher Library
            </Link>
            <span>/</span>
            <span className="text-foreground">Worksheets</span>
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
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">Worksheets</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            25 printable worksheets covering comprehension, analysis, writing scaffolds, and exam
            skills practice. Designed to be used straight from the printer.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <TeacherResourceGrid>
          {WORKSHEETS.map((w) => (
            <TeacherResourceCard
              key={w.id}
              title={w.title}
              description={w.description}
              kind="Worksheet"
              yearGroup={w.yearGroup}
              tag={HAS_DETAIL.has(w.id) ? 'Full worksheet' : 'Coming soon'}
              href={
                HAS_DETAIL.has(w.id)
                  ? `/resources/teacher-library/worksheets/${w.id}`
                  : '/resources/teacher-library/worksheets'
              }
            />
          ))}
        </TeacherResourceGrid>
      </section>
    </main>
  )
}
