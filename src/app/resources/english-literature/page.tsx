import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-config'

export const metadata: Metadata = {
  title: 'English Literature Revision — GCSE & IGCSE | The English Hub',
  description:
    'Complete GCSE and IGCSE English Literature revision hub. Study guides for Shakespeare, prose, drama, and poetry. Character analysis, themes, quotations, essay techniques, and exam preparation for all boards.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-literature',
  },
  openGraph: {
    title: 'English Literature Revision — The English Hub',
    description:
      'Complete GCSE and IGCSE English Literature revision hub. Study guides, essay techniques, and exam preparation.',
  },
}

/* ─── Data ───────────────────────────────────────────────────── */

const HERO_STATS = [
  { label: 'Set Texts Covered', value: '30+' },
  { label: 'Key Quotations', value: '500+' },
  { label: 'Revision Notes', value: '200+' },
  { label: 'Practice Questions', value: '500+' },
]

const CORE_SKILLS = [
  'Close reading and textual analysis',
  'Character and theme exploration',
  "Understanding writers' methods (language, form, structure)",
  'Historical, social, and cultural context',
  'Comparing texts and poems effectively',
  'Essay planning and exam technique',
]

type TextGuide = {
  title: string
  author: string
  genre: string
  description: string
  href: string
  themes: string[]
  boards: ExamBoard[]
}

const TEXT_GUIDES: TextGuide[] = [
  {
    title: 'Macbeth',
    author: 'William Shakespeare',
    genre: 'Shakespeare',
    description:
      "Ambition, guilt, and the supernatural. Explore the Macbeths' descent into tyranny with act-by-act summaries, character analysis, and 20+ key quotations.",
    href: '/resources/english-literature/aqa/macbeth',
    themes: ['Ambition', 'Guilt', 'The Supernatural', 'Kingship'],
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    genre: 'Shakespeare',
    description:
      "Love, fate, and family conflict in Verona. Study the play's dramatic structure, character arcs, and Shakespeare's use of light and dark imagery.",
    href: '/resources/english-literature/aqa/romeo-and-juliet',
    themes: ['Love', 'Fate', 'Conflict', 'Family'],
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    title: 'A Christmas Carol',
    author: 'Charles Dickens',
    genre: '19th-Century Prose',
    description:
      "Dickens' powerful critique of Victorian society through Scrooge's transformation. Stave-by-stave analysis, character studies, and contextual links to poverty and philanthropy.",
    href: '/resources/english-literature/aqa/christmas-carol',
    themes: ['Redemption', 'Social Responsibility', 'Poverty', 'Christmas'],
    boards: ['aqa', 'edexcel', 'eduqas'],
  },
  {
    title: 'An Inspector Calls',
    author: 'J.B. Priestley',
    genre: 'Modern Drama',
    description:
      "Priestley's socialist message delivered through a gripping mystery. Examine how each Birling is exposed and what the Inspector represents.",
    href: '/resources/english-literature/aqa/inspector-calls',
    themes: ['Social Responsibility', 'Class', 'Gender', 'Generations'],
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
  },
  {
    title: 'Jekyll and Hyde',
    author: 'Robert Louis Stevenson',
    genre: '19th-Century Prose',
    description:
      'Duality, repression, and Victorian hypocrisy. Analyse how Stevenson uses the Gothic genre to explore the conflict between civilisation and primal instinct.',
    href: '/resources/english-literature/aqa/jekyll-and-hyde',
    themes: ['Duality', 'Repression', 'Science', 'Victorian Society'],
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
  },
  {
    title: 'Lord of the Flies',
    author: 'William Golding',
    genre: 'Modern Prose',
    description:
      "Civilisation versus savagery on a deserted island. Explore Golding's allegorical novel through character symbolism, key episodes, and post-war context.",
    href: '/resources/english-literature/edexcel/lord-of-the-flies',
    themes: ['Civilisation vs Savagery', 'Power', 'Fear', 'Innocence'],
    boards: ['aqa', 'ocr', 'eduqas'],
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Modern Prose',
    description:
      "Orwell's biting political allegory of the Russian Revolution. Study how the pigs' rise to power mirrors totalitarian regimes and corrupts ideals of equality.",
    href: '/resources/english-literature/edexcel/animal-farm',
    themes: ['Power', 'Corruption', 'Propaganda', 'Equality'],
    boards: ['aqa', 'edexcel', 'ocr'],
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Modern Prose',
    description:
      "Racial injustice in 1930s Alabama seen through a child's eyes. Analyse Atticus Finch's moral courage, Scout's coming of age, and Lee's use of narrative perspective.",
    href: '/resources/english-literature/caie/to-kill-a-mockingbird',
    themes: ['Racial Injustice', 'Moral Courage', 'Innocence', 'Empathy'],
    boards: ['edexcel-igcse', 'cambridge-0500', 'cambridge-0990'],
  },
]

type PoetrySection = {
  title: string
  description: string
  href: string
  boards: ExamBoard[]
}

const POETRY_SECTIONS: PoetrySection[] = [
  {
    title: 'AQA Power and Conflict',
    description:
      'All 15 poems with stanza-by-stanza analysis, techniques, themes, and comparison pairs.',
    href: '/resources/english-literature/aqa/poetry',
    boards: ['aqa'],
  },
  {
    title: 'Edexcel Relationships and Conflict',
    description: 'Detailed notes on both Edexcel poetry clusters with comparison frameworks.',
    href: '/resources/english-literature/edexcel/poetry',
    boards: ['edexcel'],
  },
  {
    title: 'OCR Poetry Anthology',
    description: 'Love and Relationships plus Conflict poetry with analytical breakdowns.',
    href: '/resources/english-literature/ocr/poetry',
    boards: ['ocr'],
  },
  {
    title: 'CAIE Songs of Ourselves',
    description: 'Poems from Volume 1 and Volume 2, with line-by-line annotation and context.',
    href: '/resources/english-literature/caie/songs-of-ourselves-v1',
    boards: ['cambridge-0500', 'cambridge-0990'],
  },
]

type ExamInfoLink = {
  name: string
  href: string
  boards: ExamBoard[]
}

const EXAM_INFO_LINKS: ExamInfoLink[] = [
  { name: 'AQA (8702)', href: '/resources/english-literature/aqa', boards: ['aqa'] },
  {
    name: 'Edexcel (1ET0)',
    href: '/resources/english-literature/edexcel',
    boards: ['edexcel', 'edexcel-igcse'],
  },
  { name: 'OCR (J352)', href: '/resources/english-literature/ocr', boards: ['ocr'] },
  { name: 'WJEC Eduqas (C720QS)', href: '/resources/english-literature/wjec', boards: ['eduqas'] },
  {
    name: 'Cambridge IGCSE (0475)',
    href: '/resources/english-literature/caie',
    boards: ['cambridge-0475'],
  },
]

const ESSAY_TIPS = [
  {
    title: 'Open with a clear thesis',
    detail:
      "Your opening sentence should directly answer the question with a debatable argument. Avoid restating the question. Instead, state your interpretation confidently: for example, 'Shakespeare presents Macbeth's ambition as both his defining strength and his fatal flaw.'",
  },
  {
    title: 'Embed quotations fluently',
    detail:
      "Weave short, precise quotations into your sentences rather than block-quoting. A well-embedded quote looks like part of your own argument: 'Lady Macbeth's imperative to \"unsex me here\" reveals her desire to reject feminine weakness.'",
  },
  {
    title: 'Analyse language, not just content',
    detail:
      "Move beyond what a quote means to how it creates meaning. Name the technique (metaphor, sibilance, dramatic irony), explain its effect on the reader, and connect it to the writer's purpose. This is where the highest marks live.",
  },
  {
    title: "Link every point to the writer's purpose",
    detail:
      "Markers call this 'authorial intent.' After analysing a technique, explain why the writer made that choice. What message or effect were they trying to create? How does it connect to the wider themes of the text?",
  },
  {
    title: 'Use context purposefully, not as filler',
    detail:
      "Context should deepen your analysis, not sit as a separate bolt-on paragraph. Integrate it: 'Dickens presents Scrooge's miserliness to critique the Victorian laissez-faire attitude that allowed poverty to flourish unchecked.'",
  },
  {
    title: 'Structure comparison essays integratively',
    detail:
      "In comparison questions, alternate between both texts within each paragraph rather than writing about them separately. Use connective phrases like 'Similarly,' 'In contrast,' and 'While X presents... Y instead...'",
  },
]

const EXAMPLE_PARAGRAPH = {
  question: 'How does Shakespeare present the theme of ambition in Macbeth?',
  paragraph: `Shakespeare presents ambition as a destructive force that corrupts moral judgement. In Act 1, Macbeth's aside — "Stars, hide your fires; / Let not light see my black and deep desires" — reveals that murderous ambition already exists within him before Lady Macbeth's influence. The imperative "hide" suggests Macbeth recognises the immorality of his thoughts; he needs darkness to conceal them from both society and God. The modifier "black and deep" creates a semantic field of darkness and concealment, associating his ambition with something hidden, shameful, and bottomless. Shakespeare's use of celestial imagery ("Stars") implies Macbeth is attempting to subvert the natural order — the Great Chain of Being — which a Jacobean audience would have found deeply transgressive. This foreshadows the play's wider pattern: Macbeth's ambition does not simply lead to Duncan's murder, but unravels the entire fabric of nature, as evidenced by the "unnatural" events reported after the regicide.`,
}

const REVISION_RESOURCES = [
  {
    title: 'Themes',
    description:
      'Cross-text theme guides for Power, Love, Guilt, Conflict, and Social Responsibility.',
    href: '/resources/themes',
  },
  {
    title: 'Context',
    description:
      'Period-specific context guides: Elizabethan/Jacobean, Victorian, Romantic, and 20th Century.',
    href: '/resources/context',
  },
  {
    title: 'Essay Structure',
    description:
      'How to plan, structure, and write high-scoring literature essays under exam conditions.',
    href: '/resources/exam-technique/essay-structure',
  },
  {
    title: 'Techniques Glossary',
    description:
      'A-Z of literary and language techniques with definitions and examples from set texts.',
    href: '/resources/glossary',
  },
  {
    title: 'Exam Day Tips',
    description:
      'Practical advice for managing time, staying calm, and maximising marks on the day.',
    href: '/resources/exam-technique/exam-day',
  },
  {
    title: 'Writing Skills',
    description: 'Improve your expression, vocabulary range, and accuracy for the SPaG marks.',
    href: '/resources/writing-skills',
  },
]

/* ─── Icons ──────────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

function ArrowRight({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={`transition-transform group-hover:translate-x-1 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default async function EnglishLiteraturePage() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)
  const textGuides = board ? TEXT_GUIDES.filter((g) => g.boards.includes(board)) : TEXT_GUIDES
  const poetrySections = board
    ? POETRY_SECTIONS.filter((s) => s.boards.includes(board))
    : POETRY_SECTIONS
  const examInfoLinks = board
    ? EXAM_INFO_LINKS.filter((l) => l.boards.includes(board))
    : EXAM_INFO_LINKS

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            GCSE &amp; IGCSE Revision
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            English Literature
          </h1>
          {boardConfig && (
            <div className="mt-4 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                For {boardConfig.shortName}
              </span>
            </div>
          )}
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            In-depth study guides for Shakespeare, prose, drama, and poetry. Character analysis,
            theme breakdowns, key quotations, essay techniques, and exam preparation — everything
            you need in one place.
          </p>

          {/* Hero stat cards */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl border bg-card px-4 py-4">
                <p className="text-2xl font-extrabold sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What English Literature covers ───────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            What does GCSE English Literature involve?
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            GCSE English Literature requires you to read, analyse, and respond to a range of
            literary texts from different periods and genres. You will develop skills in close
            reading, critical analysis, comparison, and essay writing — demonstrating how writers
            create meaning through language, form, and structure. These skills are universal across
            all exam boards; while the specific texts and paper structures vary, the core analytical
            approach remains the same.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {CORE_SKILLS.map((skill) => (
              <li key={skill} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckIcon />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Set Text Study Guides ────────────────────────────── */}
      {textGuides.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Set text study guides</h2>
          <p className="mt-2 text-muted-foreground">
            Detailed revision guides covering plot, characters, themes, key quotations, context, and
            essay planning. Each guide works for any exam board studying that text.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {textGuides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group flex flex-col rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md hover:border-primary/40"
              >
                <div className="h-1.5 rounded-t-xl bg-primary" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {guide.genre}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{guide.author}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {guide.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {guide.themes.map((theme) => (
                      <span
                        key={theme}
                        className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline">
                    View study guide <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Poetry Anthologies ───────────────────────────────── */}
      {poetrySections.length > 0 && (
        <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-foreground">Poetry anthology guides</h2>
            <p className="mt-2 text-muted-foreground">
              Poem-by-poem analysis with stanza breakdowns, technique identification, thematic
              links, and comparison pairs.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {poetrySections.map((section) => (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{section.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Essay Writing Tips ───────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          How to write a top-mark literature essay
        </h2>
        <p className="mt-2 text-muted-foreground">
          These techniques apply across all exam boards and question types. Master them and you will
          consistently reach the higher mark bands.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ESSAY_TIPS.map((tip, i) => (
            <div key={tip.title} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-foreground">{tip.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tip.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Example Paragraph ───────────────────────────────── */}
      <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground">Example analytical paragraph</h2>
          <p className="mt-2 text-muted-foreground">
            See how all six essay tips come together in a single paragraph that would score in the
            top mark band.
          </p>

          <div className="mt-6 rounded-xl border border-primary/20 bg-card p-6 sm:p-8">
            <p className="text-sm font-semibold text-primary">
              Question: {EXAMPLE_PARAGRAPH.question}
            </p>
            <blockquote className="mt-4 border-l-4 border-primary/30 pl-4 text-sm leading-relaxed text-muted-foreground italic">
              {EXAMPLE_PARAGRAPH.paragraph}
            </blockquote>
            <div className="mt-4 rounded-lg bg-primary/5 p-4">
              <p className="text-xs font-semibold text-foreground">What makes this effective:</p>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckIcon /> Opens with a clear thesis answering the question
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon /> Embeds short quotations within the sentence flow
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon /> Names techniques (imperative, semantic field, celestial imagery) and
                  explains their effects
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon /> Links analysis to authorial intent (Shakespeare suggests...)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon /> Integrates context (Jacobean beliefs, Great Chain of Being)
                  purposefully
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon /> Extends the point to the wider text (foreshadowing pattern)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI Feedback Callout ──────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-primary/[0.06] to-transparent p-8 sm:p-10">
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <SparklesIcon />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold sm:text-2xl">Get AI-powered essay feedback</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Paste your literature essay and receive instant, detailed feedback on your argument,
                use of evidence, analysis of language, and exam technique. Our AI marker is
                calibrated to GCSE marking guides.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow transition hover:bg-primary/90"
            >
              Try it free
            </Link>
          </div>
        </div>
      </section>

      {/* ── Revision Resources Grid ─────────────────────────── */}
      <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">More revision resources</h2>
          <p className="mt-2 text-muted-foreground">
            Strengthen specific skills that markers reward most highly.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REVISION_RESOURCES.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group rounded-xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/40"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Exam Board Information ───────────────────────────── */}
      {examInfoLinks.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Board-specific exam information</h2>
          <p className="mt-2 text-muted-foreground">
            While the study guides above work for any board, each exam board has its own paper
            structure, mark allocation, and assessment weighting. Visit your board&apos;s page for
            paper breakdowns, grade boundaries, and timing advice.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {examInfoLinks.map((info) => (
              <Link
                key={info.name}
                href={info.href}
                className="group flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4 transition hover:border-primary/40 hover:shadow-sm"
              >
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {info.name}
                </span>
                <ArrowRight />
              </Link>
            ))}
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Not sure which board you are studying? Check the front cover of your textbook or your
            exam entry paperwork for the specification code.
          </p>
        </section>
      )}

      {/* ── Top 5 Literature Exam Tips ───────────────────────── */}
      <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-xl border border-primary/20 bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground">5 quick exam-day reminders</h2>
            <ol className="mt-4 space-y-3">
              {[
                'Read the question twice. Underline the key words (theme, character, how, why) before you start planning.',
                'Spend 5 minutes planning each essay. Jot down 3-4 points with supporting quotations before writing.',
                'Always embed short, precise quotations within your sentences rather than block-quoting long passages.',
                'In comparison questions, integrate both texts throughout each paragraph rather than writing about them separately.',
                'Leave 5 minutes at the end to proofread for expression, spelling, and punctuation — SPaG marks add up.',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <ExamBoardDisclaimer variant="content" />
      </div>
    </>
  )
}
