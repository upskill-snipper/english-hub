import {
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  Target,
  BarChart3,
  Star,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  Info,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import {
  getGradeSystemForBoard,
  getPaperReferencesForBoard,
  GRADE_BOUNDARIES,
} from '@/lib/board/grade-boundaries'
import { GradeTargetsQuiz } from './grade-targets-quiz'

/* ── Grade card data ──────────────────────────────────────────────────── */

type GradeCard = {
  grade: string
  letterEquivalent?: string
  title: string
  subtitle: string
  href: string
  colour: string
  bgColour: string
  borderHover: string
  skills: string[]
}

const NINE_ONE_GRADE_CARDS: GradeCard[] = [
  {
    grade: '5',
    title: 'How to Get a Grade 5',
    subtitle: 'The "strong pass" — what you need to secure it',
    href: '/revision/grade-targets/grade-5',
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
    borderHover: 'hover:border-cyan-500/30',
    skills: ['Clear explanations with evidence', 'Relevant use of subject terminology', "Understanding of writer's methods"],
  },
  {
    grade: '7',
    title: 'How to Get a Grade 7',
    subtitle: 'Moving into the top band — what separates good from great',
    href: '/revision/grade-targets/grade-7',
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    borderHover: 'hover:border-emerald-500/30',
    skills: ['Thoughtful, developed analysis', 'Judicious use of quotes', 'Understanding of how meanings are shaped'],
  },
  {
    grade: '9',
    title: 'How to Get a Grade 9',
    subtitle: 'The very top — what markers look for in exceptional work',
    href: '/revision/grade-targets/grade-9',
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
    borderHover: 'hover:border-amber-500/30',
    skills: ['Conceptualised, critical responses', 'Alternative interpretations', 'Sophisticated, assured expression'],
  },
]

const LETTER_GRADE_CARDS: GradeCard[] = [
  {
    grade: 'C',
    letterEquivalent: 'equivalent to 9-1 Grade 4-5',
    title: 'How to Get a Grade C',
    subtitle: 'The pass mark — what you need to secure it',
    href: '/revision/grade-targets/grade-5',
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
    borderHover: 'hover:border-cyan-500/30',
    skills: ['Clear explanations with evidence', 'Relevant use of subject terminology', "Understanding of writer's methods"],
  },
  {
    grade: 'A',
    letterEquivalent: 'equivalent to 9-1 Grade 7',
    title: 'How to Get an A',
    subtitle: 'Strong analytical work — thoughtful and developed',
    href: '/revision/grade-targets/grade-7',
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    borderHover: 'hover:border-emerald-500/30',
    skills: ['Thoughtful, developed analysis', 'Judicious use of quotes', 'Understanding of how meanings are shaped'],
  },
  {
    grade: 'A*',
    letterEquivalent: 'equivalent to 9-1 Grade 8-9',
    title: 'How to Get an A*',
    subtitle: 'The very top — sophisticated, conceptualised responses',
    href: '/revision/grade-targets/grade-9',
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
    borderHover: 'hover:border-amber-500/30',
    skills: ['Conceptualised, critical responses', 'Alternative interpretations', 'Sophisticated, assured expression'],
  },
]

/* ── Component ────────────────────────────────────────────────────────── */

export default async function GradeTargetsPage() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)
  const gradeSystem = getGradeSystemForBoard(board)
  const papers = getPaperReferencesForBoard(board)
  const isLetterSystem = gradeSystem === 'A*-G'
  const gradeCards = isLetterSystem ? LETTER_GRADE_CARDS : NINE_ONE_GRADE_CARDS

  const boundaries = board ? GRADE_BOUNDARIES[board] : null

  const headingSuffix = boardConfig ? ` — ${boardConfig.shortName}` : ''
  const gradeSystemLabel = isLetterSystem ? 'A*-G' : '9-1'

  return (
    <div className="space-y-10 pb-16">
      <Breadcrumb items={[{ label: 'Revision', href: '/revision' }, { label: 'Grade Targets' }]} />
      {/* ── Header ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Revision Hub
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10">
            <TrendingUp className="size-5 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              Grade Targets{headingSuffix}
            </h1>
            <p className="text-body-sm text-muted-foreground">
              {boardConfig
                ? `Understand your ${boardConfig.shortName} grade, set your target, and know exactly how to get there (${gradeSystemLabel} grading)`
                : 'Understand your grade, set your target, and know exactly how to get there'}
            </p>
          </div>
        </div>
      </div>

      {/* ── Board context banner ────────────────────────────────── */}
      {board && boardConfig && (
        <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-4 flex items-start gap-3">
          <Info className="size-4 shrink-0 text-primary mt-0.5" />
          <div className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Showing {papers.boardLabel} guidance. </span>
            {isLetterSystem ? (
              <>
                Cambridge IGCSE uses the traditional <span className="font-semibold text-foreground">A*-G grading system</span>, not the 9-1 system used by most GCSE boards.
                Throughout these guides you will also see 9-1 conversions so you can compare with other students.
              </>
            ) : (
              <>
                {boardConfig.shortName} uses the <span className="font-semibold text-foreground">9-1 grading system</span>. Mark boundaries and paper references below are specific to your board.
              </>
            )}
          </div>
        </div>
      )}

      {/* ── Understanding Grades ──────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-violet-500/10">
            <BarChart3 className="size-4.5 text-violet-400" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">Understanding Your Grades</h2>
        </div>

        <p className="text-body-sm text-muted-foreground mb-6 max-w-3xl">
          {boardConfig
            ? `In ${boardConfig.fullName}, you will see three different grades on your reports. Understanding what each one means helps you set realistic targets and focus your revision.`
            : 'In GCSE English, you will see three different grades on your reports. Understanding what each one means helps you set realistic targets and focus your revision.'}
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="size-4 text-blue-400" />
              <h3 className="text-sm font-semibold text-foreground">Working At Grade</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This is the grade your current work is at right now. It is based on your classwork, homework, and assessments so far. Think of it as a snapshot of where you are today. This grade can change with effort and targeted practice.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Target className="size-4 text-emerald-400" />
              <h3 className="text-sm font-semibold text-foreground">Predicted Grade</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This is the grade your teacher thinks you will get in the actual exam, based on your trajectory. It factors in your current level plus how much progress is expected. If your predicted grade is lower than your target, it means you need to change something.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Star className="size-4 text-clay-600" />
              <h3 className="text-sm font-semibold text-foreground">Target Grade</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This is the grade your school expects you to achieve, usually based on your KS2 SATs results or baseline tests. It is the minimum you should be aiming for. Many students exceed their target grade with consistent revision and exam practice.
            </p>
          </div>
        </div>

        {/* ── Board-specific boundaries ─────────────────────────── */}
        {boundaries && boardConfig && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Target className="size-4 text-primary" />
              {boardConfig.shortName} Mark Boundaries (approximate, % of total)
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {Object.entries(boundaries).map(([grade, pct]) => (
                <div key={grade} className="rounded-lg border border-border/40 bg-background/50 p-3 text-center">
                  <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Grade</div>
                  <div className="text-lg font-bold text-foreground">{grade}</div>
                  <div className="text-[11px] text-muted-foreground">{pct}%</div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground mt-3 italic">
              Boundaries shift slightly year to year. Always check the latest official grade boundaries from {boardConfig.shortName}.
            </p>
          </div>
        )}

        <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-primary/20 bg-primary/[0.04] p-4">
          <Lightbulb className="size-4 shrink-0 text-primary mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Key insight: </span>
            Your working at grade is not fixed. Students regularly jump one or two grades between mocks and the real exam. The difference is almost always revision quality and exam technique, not natural ability.
          </p>
        </div>
      </section>

      {/* ── Grade Specific Pages ──────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <GraduationCap className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {isLetterSystem ? 'Grade-Specific Guides (A*-G)' : 'Grade-Specific Guides (9-1)'}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          {isLetterSystem
            ? 'Each guide is written for 9-1 grades, but we also show the equivalent A*-G grade for Cambridge IGCSE. Examples use texts you study.'
            : 'Each guide tells you exactly what markers want at that grade, what skills to practise, and how to level up from where you are now.'}
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {gradeCards.map((card) => (
            <Link
              key={card.grade}
              href={card.href}
              className={`group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover ${card.borderHover}`}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className={`flex size-10 items-center justify-center rounded-xl ${card.bgColour}`}>
                  <span className={`text-lg font-bold ${card.colour}`}>{card.grade}</span>
                </div>
                <div>
                  <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-caption text-muted-foreground">{card.subtitle}</p>
                  {card.letterEquivalent && (
                    <p className="text-[10px] text-muted-foreground/80 italic mt-0.5">{card.letterEquivalent}</p>
                  )}
                </div>
              </div>

              <ul className="flex-1 space-y-2 mb-4">
                {card.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className={`size-3.5 shrink-0 mt-0.5 ${card.colour}`} />
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read the guide
                <ArrowRight className="size-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Self-Assessment Quiz (client island) ──────────────── */}
      <GradeTargetsQuiz
        paperLiterature={papers.literature}
        paperLanguage={papers.language}
        gradeSystem={gradeSystem}
      />
    </div>
  )
}
