import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BookText,
  Brain,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileText,
  GraduationCap,
  Layers,
  LineChart,
  PenTool,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { getSetTextsForBoard } from '@/lib/board/set-texts'

export const metadata: Metadata = {
  title: 'IAL English — Your Hub | The English Hub',
  description:
    'Pearson Edexcel International A-Level (IAL) English Literature & Language revision hub. Unit-by-unit breakdown, mock exam packs, AI self-learning, set-text guides and exam technique for IAL success.',
  alternates: { canonical: 'https://theenglishhub.app/revision/ial' },
  openGraph: {
    title: 'IAL English — The English Hub',
    description:
      'Pearson IAL English unit breakdown, mock exams, AI self-learning guidance and set-text guides.',
  },
}

// ─── Unit structure (Pearson IAL English Literature YLE0 / WET04) ─────────
// International A-Level English Literature is modular (AS + A2). Unit data
// below is compiled from the Pearson IAL specification — always cross-check
// against the current live specification before exam entry.

interface Unit {
  code: string
  name: string
  level: 'AS' | 'A2'
  weight: string
  duration: string
  summary: string
  assessedAOs: string
  keyComponents: string[]
}

const UNITS: Unit[] = [
  {
    code: 'WET01',
    name: 'Poetry and Drama',
    level: 'AS',
    weight: '40% of AS / 20% of full IAL',
    duration: '2h 15m',
    summary:
      'Closed-book. One post-1900 poetry collection and one drama text. Section A is an unseen poem comparison with a named anthology poem. Section B is an open essay on the drama text.',
    assessedAOs: 'AO1, AO2, AO3, AO4',
    keyComponents: [
      'Unseen poem + anthology comparison (Section A)',
      'Drama text essay (Section B) — choice of two questions',
      'Handwritten essay responses',
      'Accurate literary terminology and methods-focused analysis',
    ],
  },
  {
    code: 'WET02',
    name: 'Prose',
    level: 'AS',
    weight: '60% of AS / 30% of full IAL',
    duration: '1h 45m',
    summary:
      'Closed-book. Comparison essay on two prose texts from different time periods, linked by a shared theme. Strong comparative scaffolding is essential.',
    assessedAOs: 'AO1, AO2, AO3, AO4',
    keyComponents: [
      'Comparative essay — two prose texts on a shared theme',
      'One pre-1900, one post-1900 (typical pairing)',
      'Single extended response',
      'Connections AND differences required across both texts',
    ],
  },
  {
    code: 'WET03',
    name: 'Poetry and Prose (A2)',
    level: 'A2',
    weight: '40% of A2 / 20% of full IAL',
    duration: '2h 15m',
    summary:
      'Closed-book. Pre-1900 poetry anthology (Section A, unseen + anthology link) and a prose-study question (Section B). Harder analytical expectations than AS.',
    assessedAOs: 'AO1, AO2, AO3, AO4, AO5',
    keyComponents: [
      'Unseen pre-1900 poem linked to anthology (Section A)',
      'Prose essay with named critical perspective (Section B)',
      'AO5 — engagement with alternative interpretations',
      'Historical context integrated, not bolted on',
    ],
  },
  {
    code: 'WET04',
    name: 'Shakespeare and Pre-1900 Drama',
    level: 'A2',
    weight: '60% of A2 / 30% of full IAL',
    duration: '2h 15m',
    summary:
      'Closed-book. One Shakespeare play and one other pre-1900 drama text. Both essays require named critical perspectives and sustained contextual reading.',
    assessedAOs: 'AO1, AO2, AO3, AO4, AO5',
    keyComponents: [
      'Shakespeare essay (Section A)',
      'Pre-1900 drama essay (Section B)',
      'AO5 — named critics or theoretical framings',
      'Deep AO3 (context as argument, not backdrop)',
    ],
  },
]

// ─── Assessment Objective coverage (IAL English Literature) ───────────────

interface AO {
  code: string
  name: string
  weight: string
  summary: string
}

const AOS: AO[] = [
  {
    code: 'AO1',
    name: 'Articulate informed, personal responses',
    weight: '~20%',
    summary:
      'Writing that is clear, coherent and organised, using subject terminology accurately. Every paragraph needs a clear point, evidence, and a link back to the question.',
  },
  {
    code: 'AO2',
    name: 'Analyse writer\'s methods',
    weight: '~25%',
    summary:
      'Close reading of language, form and structure with an argument about effect. Grade 9 / A* AO2 work names the method AND the effect on the reader AND the writer\'s intention.',
  },
  {
    code: 'AO3',
    name: 'Demonstrate contextual understanding',
    weight: '~20%',
    summary:
      'Historical, social, literary and biographical context woven INTO analysis. Not a separate paragraph. At A* level, context reframes the meaning of a quote.',
  },
  {
    code: 'AO4',
    name: 'Explore connections across texts',
    weight: '~20%',
    summary:
      'Comparative essays live or die on AO4. Strong answers compare methods and ideas with language like "whereas", "however", "both share", "in contrast". The best identify POINTS OF TENSION between texts.',
  },
  {
    code: 'AO5',
    name: 'Evaluate alternative interpretations (A2 only)',
    weight: '~15% A2 papers',
    summary:
      'Name critics or critical positions, then defend your own reading against them. Feminist, Marxist, New Historicist, psychoanalytic frames all count — as long as they\'re used accurately.',
  },
]

// ─── Mock exam pack (cross-links into existing practice surfaces) ────────

interface MockExamEntry {
  unit: string
  title: string
  description: string
  href: string
  duration: string
  difficulty: 'Practice' | 'Mock' | 'Real-Time'
}

const MOCK_EXAMS: MockExamEntry[] = [
  {
    unit: 'WET01',
    title: 'Unit 1 unseen poetry comparison — drill set',
    description:
      'Three unseen poems paired with anthology selections. Time yourself to 45 minutes per comparison.',
    href: '/mock-exams?board=ial-edexcel&unit=WET01',
    duration: '45 min',
    difficulty: 'Practice',
  },
  {
    unit: 'WET01',
    title: 'Unit 1 full mock paper — timed',
    description:
      'Complete 2h 15m paper. Section A unseen + Section B drama essay. Auto-scored against IAL mark scheme bands.',
    href: '/mock-exams?board=ial-edexcel&paper=WET01-full',
    duration: '2h 15m',
    difficulty: 'Mock',
  },
  {
    unit: 'WET02',
    title: 'Unit 2 prose comparison — drill set',
    description:
      'Paired prose extracts on five common themes (power, identity, family, class, gender).',
    href: '/mock-exams?board=ial-edexcel&unit=WET02',
    duration: '60 min',
    difficulty: 'Practice',
  },
  {
    unit: 'WET02',
    title: 'Unit 2 full mock — timed',
    description:
      '1h 45m sustained comparative essay. Paired pre-1900 + post-1900 prose on a shared theme.',
    href: '/mock-exams?board=ial-edexcel&paper=WET02-full',
    duration: '1h 45m',
    difficulty: 'Mock',
  },
  {
    unit: 'WET03',
    title: 'Unit 3 pre-1900 poetry + prose drill',
    description:
      'Unseen Victorian poetry paired with the pre-1900 anthology. Plus a critical-perspective prose essay.',
    href: '/mock-exams?board=ial-edexcel&unit=WET03',
    duration: '90 min',
    difficulty: 'Practice',
  },
  {
    unit: 'WET04',
    title: 'Unit 4 Shakespeare + pre-1900 drama mock',
    description:
      'Full 2h 15m paper. Shakespeare essay with AO5 critic, plus pre-1900 drama essay.',
    href: '/mock-exams?board=ial-edexcel&paper=WET04-full',
    duration: '2h 15m',
    difficulty: 'Mock',
  },
]

// ─── AI self-learning surfaces (existing toolkit, framed for IAL) ────────

interface AISurface {
  title: string
  description: string
  href: string
  icon: typeof Sparkles
  tag: string
}

const AI_SURFACES: AISurface[] = [
  {
    title: 'AI essay marking — IAL rubric',
    description:
      'Submit a timed Unit 1-4 essay. AI returns a band-by-band breakdown aligned to IAL AO weightings (AO1/AO2/AO3/AO4 + AO5 for A2), plus three concrete rewrite suggestions.',
    href: '/dashboard/essay/new?board=ial-edexcel',
    icon: Sparkles,
    tag: 'Grade predictor',
  },
  {
    title: 'Personalised revision builder',
    description:
      'The AI reads your recent quiz + essay data, flags which AOs you under-hit, and builds a week-by-week plan that targets them with IAL set texts.',
    href: '/toolkit/personalised-revision?board=ial-edexcel',
    icon: Brain,
    tag: 'Adaptive',
  },
  {
    title: 'AI critic simulator',
    description:
      'Unit 3 + 4 require AO5 — engagement with critical perspectives. The AI roleplays a named critic (feminist, Marxist, New Historicist) and pushes back on your thesis so you learn to defend.',
    href: '/toolkit/critic',
    icon: Brain,
    tag: 'AO5 trainer',
  },
  {
    title: 'Revision note generator',
    description:
      'Input a quote or scene; AI generates AO2 analysis paragraphs + AO3 context hooks + potential essay opener sentences, then lets you save to My Materials.',
    href: '/toolkit/revision-builder?board=ial-edexcel',
    icon: FileText,
    tag: 'Content AI',
  },
]

// ─── Common pitfalls (IAL-specific, distinct from UK A-Level) ────────────

const PITFALLS = [
  {
    title: 'Treating IAL like UK A-Level',
    body: 'IAL is MODULAR — four exams spread across AS + A2 — whereas UK A-Level since 2015 is linear. Your revision should target each unit at its own exam window; don\'t try to revise everything at once.',
  },
  {
    title: 'Under-using AO5 at A2',
    body: 'Unit 3 and Unit 4 markers award for engagement with critical perspectives. A single named critic or framing used well is worth more than a plot-heavy narrative. Learn 2-3 critics per A2 text.',
  },
  {
    title: 'Forgetting the cross-period pairing in Unit 2',
    body: 'Unit 2 requires one pre-1900 and one post-1900 prose text, chosen by the student. Candidates who pair two similar texts miss easy AO4 comparative marks. Deliberately pick texts that contrast.',
  },
  {
    title: 'Context as a separate paragraph',
    body: 'IAL markers penalise "context paragraphs" that feel bolted on. AO3 marks come from contextual points woven into close reading — one sentence per analytical paragraph, tied to the quote you just analysed.',
  },
  {
    title: 'Writing too much on plot in Unit 4 Shakespeare',
    body: 'The Shakespeare essay expects evaluative, methods-focused analysis. Plot summary burns words and loses AO2 marks. Assume the examiner has read the play; move straight to argument.',
  },
]

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function IalHubPage() {
  const ialTexts = getSetTextsForBoard('ial-edexcel')

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Your Hub', url: 'https://theenglishhub.app/revision' },
          { name: 'IAL English', url: 'https://theenglishhub.app/revision/ial' },
        ]}
      />

      {/* ── Back link ─────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 text-muted-foreground"
          render={<Link href="/revision" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Your Hub
        </Button>
      </div>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 size-3" aria-hidden="true" />
            Pearson Edexcel International A-Level
          </Badge>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Your IAL Hub
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            Unit-by-unit guidance, mock exam packs, AI-marked essays, and set-text study for
            Pearson Edexcel International A-Level English Literature (YLE0) and Language. Every
            section below is built around the IAL specification — not borrowed from UK A-Level.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="default" size="sm" render={<Link href="#units" />}>
              Jump to units <ArrowRight className="size-3.5" />
            </Button>
            <Button variant="outline" size="sm" render={<Link href="#mocks" />}>
              Mock exam pack <Timer className="size-3.5" />
            </Button>
            <Button variant="outline" size="sm" render={<Link href="#ai" />}>
              AI self-learning <Brain className="size-3.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Unit breakdown ────────────────────────────────────────── */}
      <section id="units" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
            <GraduationCap className="size-4.5 text-primary" />
          </div>
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">Unit structure</h2>
            <p className="text-sm text-muted-foreground">
              Four modular exams — two at AS, two at A2. Each carries its own weighting and
              demands a different revision approach.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {UNITS.map((unit) => (
            <Card key={unit.code} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Badge variant="secondary" className="mb-2 text-[0.65rem] uppercase">
                      {unit.level}
                    </Badge>
                    <CardTitle className="text-heading-md font-heading">
                      <span className="font-mono text-primary">{unit.code}</span> — {unit.name}
                    </CardTitle>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <p className="flex items-center gap-1 justify-end">
                      <Timer className="size-3" /> {unit.duration}
                    </p>
                    <p className="mt-1">{unit.weight}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">{unit.summary}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Assessed AOs:</span>{' '}
                  {unit.assessedAOs}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {unit.keyComponents.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="size-3.5 shrink-0 mt-0.5 text-emerald-400" />
                      {c}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── AO coverage ─────────────────────────────────────────── */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-violet-500/10">
            <Target className="size-4.5 text-violet-400" />
          </div>
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">
              Assessment Objectives (AOs)
            </h2>
            <p className="text-sm text-muted-foreground">
              Every IAL essay is marked against these five AOs. Your writing needs to serve all of
              them — missing one is the difference between an A and an A*.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AOS.map((ao) => (
            <div
              key={ao.code}
              className="rounded-xl border border-border/40 bg-background/50 p-5"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-primary">{ao.code}</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {ao.weight}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground">{ao.name}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{ao.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mock exams ───────────────────────────────────────────── */}
      <section id="mocks" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10">
            <ClipboardList className="size-4.5 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">Mock exam pack</h2>
            <p className="text-sm text-muted-foreground">
              Unit-scoped drills and full-timed mocks. Auto-scored against IAL band descriptors,
              with AI feedback on each AO.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {MOCK_EXAMS.map((mock) => (
            <Link
              key={mock.title}
              href={mock.href}
              className="group flex flex-col rounded-xl border border-border/40 bg-background/50 p-5 transition-all hover:border-primary/30 hover:bg-background"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-primary">{mock.unit}</span>
                <Badge
                  variant={mock.difficulty === 'Mock' ? 'default' : 'secondary'}
                  className="text-[0.65rem]"
                >
                  {mock.difficulty}
                </Badge>
                <span className="ml-auto text-xs text-muted-foreground">{mock.duration}</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                {mock.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {mock.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Start <ArrowRight className="size-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── AI self-learning ─────────────────────────────────────── */}
      <section id="ai" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-500/10">
            <Brain className="size-4.5 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">
              AI self-learning
            </h2>
            <p className="text-sm text-muted-foreground">
              Tools that read your data, flag your weak AOs, and push you toward your target
              grade with IAL-specific framing.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {AI_SURFACES.map((surface) => (
            <Card
              key={surface.title}
              className="group transition-all hover:border-cyan-500/30 hover:shadow-card-hover"
            >
              <CardHeader className="pb-3">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10">
                    <surface.icon className="size-5 text-cyan-400" />
                  </div>
                  <Badge variant="secondary" className="text-[0.65rem] uppercase">
                    {surface.tag}
                  </Badge>
                </div>
                <CardTitle className="text-heading-sm font-heading">{surface.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs leading-relaxed">
                  {surface.description}
                </CardDescription>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-3 h-auto p-0 text-xs font-semibold text-primary"
                  render={<Link href={surface.href} />}
                >
                  Open tool <ArrowRight className="size-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Set texts ────────────────────────────────────────────── */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-blue-500/10">
            <BookText className="size-4.5 text-blue-400" />
          </div>
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">IAL set texts</h2>
            <p className="text-sm text-muted-foreground">
              Core texts across Units 1-4. Full study guides with plot, characters, themes,
              context, and 15+ verified quotations each.
            </p>
          </div>
        </div>

        {ialTexts.length === 0 ? (
          <p className="rounded-xl border border-border/40 bg-background/50 p-5 text-sm text-muted-foreground">
            Set-text tagging for IAL is being finalised in `src/lib/board/set-texts.ts`. Use the
            cross-board <Link href="/revision/texts" className="text-primary underline">Set Texts
            library</Link> in the meantime — all major IAL texts (Hamlet, King Lear, Othello,
            Gatsby, Handmaid&rsquo;s Tale, Streetcar, Waste Land, Pride and Prejudice, Jane Eyre)
            are authored.
          </p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ialTexts.map((text) => (
              <Link
                key={text.slug}
                href={`/revision/texts/${text.slug}`}
                className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-blue-500/30 hover:bg-background"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                  <BookOpen className="size-4 text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                    {text.title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground truncate">{text.author}</p>
                </div>
                <ArrowRight className="mt-1 size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ── Pitfalls ─────────────────────────────────────────────── */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-rose-500/10">
            <Target className="size-4.5 text-rose-400" />
          </div>
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">
              Common IAL pitfalls
            </h2>
            <p className="text-sm text-muted-foreground">
              The five mistakes that most often cost IAL candidates a grade. Check yourself against
              these before every mock.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {PITFALLS.map((p, i) => (
            <div key={p.title} className="rounded-xl border border-border/40 bg-background/50 p-5">
              <h3 className="text-sm font-semibold text-foreground">
                {i + 1}. {p.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quick links rail ────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground mb-4">Keep going</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/revision/analytics"
            className="group flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-primary/30"
          >
            <LineChart className="size-4 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Your Analytics
              </p>
              <p className="text-xs text-muted-foreground">Progress + weak AOs</p>
            </div>
          </Link>
          <Link
            href="/revision/study-plan"
            className="group flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-primary/30"
          >
            <CalendarDays className="size-4 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Study Plan
              </p>
              <p className="text-xs text-muted-foreground">Week-by-week diagnostic</p>
            </div>
          </Link>
          <Link
            href="/revision/flashcards"
            className="group flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-primary/30"
          >
            <Layers className="size-4 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Flashcards
              </p>
              <p className="text-xs text-muted-foreground">Quote + terminology drill</p>
            </div>
          </Link>
          <Link
            href="/revision/exam-technique"
            className="group flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-primary/30"
          >
            <PenTool className="size-4 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Exam Technique
              </p>
              <p className="text-xs text-muted-foreground">Essay structures + timing</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Footnote ─────────────────────────────────────────────── */}
      <p className="text-center text-[11px] text-muted-foreground/60">
        Aligned with the Pearson Edexcel International A-Level English Literature (YLE0) and
        English Language (WEN0) specifications. Always cross-check with the current live
        specification before exam entry. <TrendingUp className="inline size-3" /> New content and
        mock packs are added regularly.
      </p>
    </div>
  )
}
