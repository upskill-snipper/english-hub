import type { Metadata } from 'next'
import Link from 'next/link'
import { TeacherResourceCard, TeacherResourceGrid } from '@/components/teacher/ResourceCard'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-config'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Lesson Plans — Teacher Library',
  description:
    '20 free, ready-to-teach GCSE English lesson plans with learning objectives, activities, differentiation, and plenaries.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/teacher-library/lesson-plans',
  },
}

const LESSON_PLANS = [
  {
    id: 'macbeth-ambition',
    title: 'Macbeth: Ambition & the Supernatural',
    description:
      "Explore how Shakespeare presents ambition through Macbeth's soliloquies and the witches' prophecies. Full 60-min plan with starter, main, plenary, and homework.",
    yearGroup: 'Year 10',
    duration: '60 mins',
    examBoard: 'AQA / Edexcel',
  },
  {
    id: 'inspector-calls-responsibility',
    title: 'An Inspector Calls: Social Responsibility (Act 1)',
    description:
      "Examine how Priestley introduces the theme of responsibility through Mr Birling's birthday speech and the Inspector's arrival.",
    yearGroup: 'Year 11',
    duration: '60 mins',
    examBoard: 'AQA',
  },
  {
    id: 'power-conflict-comparison',
    title: 'Ozymandias vs My Last Duchess: Power Comparison',
    description:
      'Structured comparison lesson for the Power & Conflict anthology. Students build a side-by-side analysis and draft a comparative paragraph.',
    yearGroup: 'Year 11',
    duration: '60 mins',
    examBoard: 'AQA',
  },
  {
    id: 'jekyll-duality',
    title: 'Jekyll & Hyde: Duality of Human Nature',
    description:
      "Introduce the Victorian context of duality and analyse Stevenson's presentation of Jekyll and Hyde as two sides of one self.",
    yearGroup: 'Year 10',
    duration: '60 mins',
    examBoard: 'AQA',
  },
  {
    id: 'a-christmas-carol-scrooge',
    title: "A Christmas Carol: Scrooge's Transformation",
    description:
      "Track Scrooge's character arc across the five staves using a transformation graph and key quotation analysis.",
    yearGroup: 'Year 10',
    duration: '60 mins',
    examBoard: 'AQA / Eduqas',
  },
  {
    id: 'romeo-juliet-prologue',
    title: 'Romeo and Juliet: Prologue & Fate',
    description:
      "Decode the sonnet prologue and introduce the tragic framework of fate versus free will in Shakespeare's tragedy.",
    yearGroup: 'Year 10',
    duration: '60 mins',
    examBoard: 'OCR',
  },
  {
    id: 'lang-p1-q2-language',
    title: 'Language Paper 1 Q2: Language Analysis',
    description:
      'Step-by-step walkthrough of the Q2 language question with a high-grade model answer and guided student practice.',
    yearGroup: 'Year 11',
    duration: '60 mins',
    examBoard: 'AQA',
  },
  {
    id: 'lang-p1-q5-creative-writing',
    title: 'Language Paper 1 Q5: Descriptive Writing',
    description:
      'Build a sensory descriptive opening using imagery, figurative language, and varied sentence forms.',
    yearGroup: 'Year 11',
    duration: '60 mins',
    examBoard: 'AQA',
  },
  {
    id: 'lang-p2-q5-persuasive',
    title: 'Language Paper 2 Q5: Persuasive Writing',
    description:
      'Teach the DAFOREST toolkit for persuasive writing with a modelled opinion piece and guided student drafting.',
    yearGroup: 'Year 11',
    duration: '60 mins',
    examBoard: 'AQA',
  },
  {
    id: 'poetry-unseen',
    title: 'Unseen Poetry: Analysis Framework',
    description:
      'Teach the SMILE framework for approaching any unseen poem. Students apply the framework to a sample poem independently.',
    yearGroup: 'Year 11',
    duration: '60 mins',
    examBoard: 'AQA / Edexcel',
  },
  {
    id: 'animal-farm-allegory',
    title: 'Animal Farm: Allegory & Power',
    description:
      "Introduce the concept of allegory and link Orwell's characters to historical figures of the Russian Revolution.",
    yearGroup: 'Year 9',
    duration: '60 mins',
    examBoard: 'KS3',
  },
  {
    id: 'lord-of-the-flies-civilization',
    title: 'Lord of the Flies: Civilization vs Savagery',
    description:
      'Track the breakdown of order on the island using the conch as an extended symbol of civilization.',
    yearGroup: 'Year 10',
    duration: '60 mins',
    examBoard: 'Edexcel',
  },
  {
    id: 'blood-brothers-class',
    title: 'Blood Brothers: Class & Fate',
    description:
      'Examine how Russell uses the Narrator, doubling, and dramatic irony to explore class inequality.',
    yearGroup: 'Year 11',
    duration: '60 mins',
    examBoard: 'AQA',
  },
  {
    id: 'of-mice-and-men-loneliness',
    title: 'Of Mice and Men: Loneliness & the American Dream',
    description:
      "Analyse Steinbeck's presentation of Crooks and Curley's wife to explore isolation in 1930s America.",
    yearGroup: 'Year 10',
    duration: '60 mins',
    examBoard: 'OCR',
  },
  {
    id: 'non-fiction-19th-century',
    title: '19th Century Non-Fiction: Tone & Audience',
    description:
      'Introduce students to the conventions of Victorian non-fiction with a focus on tone, register, and audience.',
    yearGroup: 'Year 11',
    duration: '60 mins',
    examBoard: 'AQA / OCR',
  },
  {
    id: 'sentence-structures',
    title: 'Sentence Structures for Impact',
    description:
      'Teach the deliberate use of simple, compound, complex, and fragment sentences in student writing.',
    yearGroup: 'Year 9',
    duration: '60 mins',
    examBoard: 'KS3',
  },
  {
    id: 'shakespeare-context-jacobean',
    title: 'Jacobean Context: Witches, Kings & Divine Right',
    description:
      "A context-rich lesson to ground students' reading of Macbeth in its historical moment.",
    yearGroup: 'Year 10',
    duration: '60 mins',
    examBoard: 'AQA',
  },
  {
    id: 'great-expectations-pip',
    title: "Great Expectations: Pip's Moral Development",
    description:
      "Follow Pip's shifting moral compass from Chapter 1 through to his reunion with Magwitch.",
    yearGroup: 'Year 11',
    duration: '60 mins',
    examBoard: 'Edexcel',
  },
  {
    id: 'conflict-poetry-bayonet-charge',
    title: 'Bayonet Charge: Hughes & the Horror of War',
    description:
      "Analyse Hughes' fragmented syntax and visceral imagery to explore the disorientation of combat.",
    yearGroup: 'Year 11',
    duration: '60 mins',
    examBoard: 'AQA',
  },
  {
    id: 'exam-revision-walking-talking-mock',
    title: 'Walking Talking Mock: Literature Paper 2',
    description:
      'A full walkthrough mock exam experience for Lit Paper 2. Timed, scaffolded, and with live teacher modelling.',
    yearGroup: 'Year 11',
    duration: '90 mins',
    examBoard: 'AQA',
  },
]

const HAS_DETAIL = new Set([
  'macbeth-ambition',
  'inspector-calls-responsibility',
  'power-conflict-comparison',
])

// Map an ExamBoard to the labels we accept on lesson plans (e.g. "AQA / Edexcel").
function boardLabelsForExamBoard(board: ExamBoard | null): string[] | null {
  if (!board) return null
  switch (board) {
    case 'aqa':
      return ['AQA']
    case 'edexcel':
      return ['Edexcel']
    case 'ocr':
      return ['OCR']
    case 'eduqas':
      return ['Eduqas']
    case 'edexcel-igcse':
      return ['Edexcel']
    case 'cambridge-0500':
    case 'cambridge-0990':
      return ['CAIE', 'Cambridge']
    default:
      return null
  }
}

function lessonPlanMatchesBoard(planExamBoard: string, board: ExamBoard | null): boolean {
  // Generic / pedagogical resources stay (KS3, etc.)
  if (planExamBoard === 'KS3') return true
  if (!board) return true
  const labels = boardLabelsForExamBoard(board)
  if (!labels) return true
  return labels.some((l) => planExamBoard.toLowerCase().includes(l.toLowerCase()))
}

export default async function LessonPlansPage() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)
  const visiblePlans = LESSON_PLANS.filter((p) => lessonPlanMatchesBoard(p.examBoard, board))
  const [bcTeacherLibrary, bcLessonPlans, forTeachersLabel, forBoardLabel, h1, introTail] =
    await tMany([
      'resources.tl.lp.bc.teacher_library',
      'resources.tl.lp.bc.lesson_plans',
      'resources.tl.lp.idx.for_teachers',
      'resources.tl.lp.idx.for_board',
      'resources.tl.lp.idx.h1',
      'resources.tl.lp.idx.intro_a',
    ])
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/resources/teacher-library" className="hover:text-primary">
              {bcTeacherLibrary}
            </Link>
            <span>/</span>
            <span className="text-foreground">{bcLessonPlans}</span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
              {forTeachersLabel}
            </span>
            {boardConfig && (
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                {forBoardLabel} {boardConfig.shortName}
              </span>
            )}
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">{h1}</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            {visiblePlans.length} {introTail}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <TeacherResourceGrid>
          {visiblePlans.map((plan) => (
            <TeacherResourceCard
              key={plan.id}
              title={plan.title}
              description={plan.description}
              kind="Lesson Plan"
              yearGroup={plan.yearGroup}
              duration={plan.duration}
              examBoard={plan.examBoard}
              tag={HAS_DETAIL.has(plan.id) ? 'Full plan' : 'Coming soon'}
              href={
                HAS_DETAIL.has(plan.id)
                  ? `/resources/teacher-library/lesson-plans/${plan.id}`
                  : '/resources/teacher-library/lesson-plans'
              }
            />
          ))}
        </TeacherResourceGrid>
      </section>
    </main>
  )
}
