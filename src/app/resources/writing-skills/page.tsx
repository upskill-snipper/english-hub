import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { tMany } from '@/lib/i18n/t'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Writing Skills Masterclass | The English Hub',
    description:
      'Master every type of writing for your English exams. Comprehensive, board-agnostic guides covering creative writing, persuasive writing, analytical writing, and grammar & punctuation.',
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/writing-skills' },
  title: 'Writing Skills Masterclass',
  description:
    'Master every type of writing for your English exams. Comprehensive, board-agnostic guides covering creative writing, persuasive writing, analytical writing, and grammar & punctuation.',
}

/* ─── Data ───────────────────────────────────────────────────── */

const SKILL_AREAS = [
  {
    titleKey: 'study.skills.ws.card.creative.title',
    subtitleKey: 'study.skills.ws.card.creative.subtitle',
    descKey: 'study.skills.ws.card.creative.desc',
    href: '/resources/writing-skills/creative-writing',
    topics: [
      'Descriptive writing',
      'Narrative writing',
      'Opening techniques',
      'Ending techniques',
      'Structural devices',
      'Vocabulary enhancement',
      'Model responses',
    ],
    icon: (
      <svg
        className="h-10 w-10 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    ),
    colour: 'border-primary',
    bg: 'bg-primary/5',
    hoverBg: 'hover:bg-primary/10',
  },
  {
    titleKey: 'study.skills.ws.card.persuasive.title',
    subtitleKey: 'study.skills.ws.card.persuasive.subtitle',
    descKey: 'study.skills.ws.card.persuasive.desc',
    href: '/resources/writing-skills/persuasive-writing',
    topics: [
      'AFOREST techniques',
      'Counter-arguments',
      'Tone & register',
      'Articles & speeches',
      'Letters & reports',
      'Model responses',
    ],
    icon: (
      <svg
        className="h-10 w-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
        />
      </svg>
    ),
    colour: 'border-accent',
    bg: 'bg-accent/5',
    hoverBg: 'hover:bg-accent/10',
  },
  {
    titleKey: 'study.skills.ws.card.analytical.title',
    subtitleKey: 'study.skills.ws.card.analytical.subtitle',
    descKey: 'study.skills.ws.card.analytical.desc',
    href: '/resources/writing-skills/analytical-writing',
    topics: [
      'PEEL paragraphs',
      'Embedding quotations',
      'Language analysis',
      'Structural analysis',
      'Evaluative language',
      'Context linking',
      'Model essays',
    ],
    icon: (
      <svg
        className="h-10 w-10 text-secondary"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
    colour: 'border-secondary',
    bg: 'bg-secondary/5',
    hoverBg: 'hover:bg-secondary/10',
  },
  {
    titleKey: 'study.skills.ws.card.grammar.title',
    subtitleKey: 'study.skills.ws.card.grammar.subtitle',
    descKey: 'study.skills.ws.card.grammar.desc',
    href: '/resources/writing-skills/grammar-punctuation',
    topics: [
      'Sentence types',
      'Semicolons & colons',
      'Dashes & ellipsis',
      'Paragraphing',
      'Common errors',
      'Active vs passive voice',
      'Tense consistency',
    ],
    icon: (
      <svg
        className="h-10 w-10 text-success"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
        />
      </svg>
    ),
    colour: 'border-success',
    bg: 'bg-success/5',
    hoverBg: 'hover:bg-success/10',
  },
]

const QUICK_TIPS = [
  {
    number: 1,
    tip: 'Plan before you write',
    detail:
      'Spend 3-5 minutes planning. A clear structure separates Grade 7 from Grade 9. Even a quick bullet list transforms your response.',
  },
  {
    number: 2,
    tip: 'Vary your sentence lengths deliberately',
    detail:
      'Long sentences build tension; short sentences shatter it. A single word can form a paragraph. Control is what markers reward.',
  },
  {
    number: 3,
    tip: 'Replace generic words with precise ones',
    detail:
      'Don\'t "walk" -- "stride", "trudge", "saunter". Don\'t "say" -- "whisper", "demand", "concede". Precision signals sophistication.',
  },
  {
    number: 4,
    tip: 'Deploy punctuation for effect',
    detail:
      'Semicolons link related ideas; colons introduce revelations. Dashes create -- pause. Ellipsis builds suspense... Use them intentionally.',
  },
  {
    number: 5,
    tip: 'Proofread the final five minutes',
    detail:
      'Reserve time to correct SPaG errors and upgrade vocabulary. One upgraded verb or a well-placed semicolon can push you into the next band.',
  },
]

const PRACTICE_LINKS = [
  {
    labelKey: 'study.skills.ws.practice.creative.label',
    href: '/practice?type=creative-writing',
    descKey: 'study.skills.ws.practice.creative.desc',
  },
  {
    labelKey: 'study.skills.ws.practice.persuasive.label',
    href: '/practice?type=persuasive-writing',
    descKey: 'study.skills.ws.practice.persuasive.desc',
  },
  {
    labelKey: 'study.skills.ws.practice.language.label',
    href: '/practice?type=language-analysis',
    descKey: 'study.skills.ws.practice.language.desc',
  },
  {
    labelKey: 'study.skills.ws.practice.all.label',
    href: '/practice',
    descKey: 'study.skills.ws.practice.all.desc',
  },
]

/* ─── Arrow icon ─────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default async function WritingSkillsPage() {
  const [
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    ctaExplore,
    ctaPractice,
    bcHome,
    bcResources,
    bcThis,
    chooseTitle,
    chooseSubtitle,
    startLearning,
    tipsTitle,
    tipsSubtitle,
    aiTitle,
    aiBody,
    aiCta,
    practiceTitle,
    practiceSubtitle,
    startPractising,
    whyTitle,
    whyBoardTitle,
    whyBoardBody,
    whyExamplesTitle,
    whyExamplesBody,
    whyModelsTitle,
    whyModelsBody,
  ] = await tMany([
    'study.skills.ws.hero.eyebrow',
    'study.skills.ws.hero.title',
    'study.skills.ws.hero.subtitle',
    'study.skills.ws.hero.cta_explore',
    'study.skills.ws.hero.cta_practice',
    'study.skills.common.bc.home',
    'study.skills.common.bc.resources',
    'study.skills.ws.bc.this',
    'study.skills.ws.choose.title',
    'study.skills.ws.choose.subtitle',
    'study.skills.common.start_learning',
    'study.skills.ws.tips.title',
    'study.skills.ws.tips.subtitle',
    'study.skills.ws.ai.title',
    'study.skills.ws.ai.body',
    'study.skills.ws.ai.cta',
    'study.skills.ws.practice.title',
    'study.skills.ws.practice.subtitle',
    'study.skills.ws.practice.start',
    'study.skills.ws.why.title',
    'study.skills.ws.why.board.title',
    'study.skills.ws.why.board.body',
    'study.skills.ws.why.examples.title',
    'study.skills.ws.why.examples.body',
    'study.skills.ws.why.models.title',
    'study.skills.ws.why.models.body',
  ])

  const areaCopy = await tMany(SKILL_AREAS.flatMap((a) => [a.titleKey, a.subtitleKey, a.descKey]))
  const areaText = SKILL_AREAS.map((a, i) => ({
    href: a.href,
    title: areaCopy[i * 3],
    subtitle: areaCopy[i * 3 + 1],
    desc: areaCopy[i * 3 + 2],
  }))

  const practiceCopy = await tMany(PRACTICE_LINKS.flatMap((l) => [l.labelKey, l.descKey]))
  const practiceText = PRACTICE_LINKS.map((l, i) => ({
    href: l.href,
    label: practiceCopy[i * 2],
    desc: practiceCopy[i * 2 + 1],
  }))

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {heroEyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {heroSubtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#skill-areas"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary/90"
            >
              {ctaExplore}
            </Link>
            <Link
              href="/practice"
              className="rounded-lg border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              {ctaPractice}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb ─────────────────────────────────────────── */}
      <nav className="mx-auto max-w-6xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="transition-colors hover:text-foreground">
              {bcHome}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/resources" className="transition-colors hover:text-foreground">
              {bcResources}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-foreground">{bcThis}</li>
        </ol>
      </nav>

      {/* ── Skill area cards ───────────────────────────────────── */}
      <section
        id="skill-areas"
        className="mx-auto max-w-6xl scroll-mt-8 px-4 py-14 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl font-bold text-foreground">{chooseTitle}</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">{chooseSubtitle}</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {SKILL_AREAS.map((area, i) => (
            <Link
              key={area.href}
              href={area.href}
              className={`group flex flex-col rounded-xl border-2 ${area.colour} ${area.bg} ${area.hoverBg} p-6 shadow-md transition-all hover:shadow-lg`}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">{area.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-foreground">
                    {areaText[i].title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {areaText[i].subtitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {areaText[i].desc}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {area.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-card px-2.5 py-0.5 text-xs font-medium text-muted-foreground shadow-md"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-foreground">
                {startLearning} <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 5 Universal Writing Tips ───────────────────────────── */}
      <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-foreground">{tipsTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">{tipsSubtitle}</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_TIPS.map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {item.number}
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{item.tip}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Feedback Callout ─────────────────────────────────── */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/[0.03] to-primary/[0.06]">
          <div className="flex flex-col items-center gap-6 p-8 text-center sm:p-12 md:flex-row md:text-left">
            {/* Icon */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <svg
                className="h-8 w-8 text-primary"
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
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">{aiTitle}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {aiBody}
              </p>
              <Link
                href="/practice"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-primary"
              >
                {aiCta}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practice Questions Links ───────────────────────────── */}
      <section className="bg-card px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">{practiceTitle}</h2>
          <p className="mt-2 text-muted-foreground">{practiceSubtitle}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practiceText.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-border bg-muted p-5 shadow-md transition-all hover:border-primary/40 hover:shadow-md"
              >
                <h3 className="font-bold text-foreground transition-colors group-hover:text-foreground">
                  {link.label}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{link.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors group-hover:text-foreground">
                  {startPractising} <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why These Guides Work ──────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">{whyTitle}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <svg
                className="h-6 w-6 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-bold text-foreground">{whyBoardTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{whyBoardBody}</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <svg
                className="h-6 w-6 text-primary"
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
            </div>
            <h3 className="mt-4 font-bold text-foreground">{whyExamplesTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{whyExamplesBody}</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
              <svg
                className="h-6 w-6 text-success"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-bold text-foreground">{whyModelsTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{whyModelsBody}</p>
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  )
}
