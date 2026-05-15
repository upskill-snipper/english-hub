import type { Metadata } from 'next'
import Link from 'next/link'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Grade Targets | The English Hub',
    description:
      'Understand what each GCSE English grade looks like. Grade descriptors, self-assessment tools, and targeted advice for reaching Grade 5, 7, or 9 in English Language and Literature.',
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/grade-targets' },
  title: 'Grade Targets | The English Hub',
  description:
    'Understand what each GCSE English grade looks like. Grade descriptors, self-assessment tools, and targeted advice for reaching Grade 5, 7, or 9 in English Language and Literature.',
}

/* ─── Data ───────────────────────────────────────────────────── */

const GRADE_CARDS = [
  {
    grade: '5',
    label: 'Strong Pass',
    href: '/resources/grade-targets/grade-5',
    colour: 'border-emerald-600',
    bg: 'bg-emerald-600',
    tagline: 'Solid foundations, clear understanding',
    description:
      'A Grade 5 shows you can explain ideas clearly, use relevant evidence, and write with control. Learn what examiners expect and how to move from a 4 to a secure 5.',
    skills: [
      'Clear explanations with supporting evidence',
      'Appropriate use of subject terminology',
      'Controlled, accurate writing',
      "Awareness of writer's methods",
    ],
  },
  {
    grade: '7',
    label: 'Distinction',
    href: '/resources/grade-targets/grade-7',
    colour: 'border-primary',
    bg: 'bg-primary',
    tagline: 'Thoughtful analysis, confident expression',
    description:
      'A Grade 7 demonstrates detailed, perceptive analysis and ambitious, well-crafted writing. Discover how to push beyond competent responses into genuinely impressive work.',
    skills: [
      'Detailed, perceptive analysis',
      'Judicious use of quotations',
      'Ambitious vocabulary and sentence structures',
      'Thoughtful engagement with context',
    ],
  },
  {
    grade: '9',
    label: 'Exceptional',
    href: '/resources/grade-targets/grade-9',
    colour: 'border-primary',
    bg: 'bg-primary',
    tagline: 'Critical insight, originality, sophistication',
    description:
      'A Grade 9 places you in the top 2% of candidates. It requires conceptualised responses, original thinking, and writing that is genuinely compelling. See what makes the very best stand out.',
    skills: [
      'Conceptualised, critical analysis',
      'Original and convincing interpretations',
      'Sophisticated, compelling writing',
      'Seamless integration of context',
    ],
  },
]

const DESCRIPTORS = [
  {
    subject: 'English Language',
    areas: [
      {
        label: 'Reading',
        levels: [
          {
            grade: '5',
            text: 'Clear understanding; explains effects of language and structure with relevant examples',
          },
          {
            grade: '7',
            text: 'Detailed, perceptive analysis of language and structure; judicious quotation selection',
          },
          {
            grade: '9',
            text: 'Critical, exploratory analysis; conceptualised response with original interpretations',
          },
        ],
      },
      {
        label: 'Writing',
        levels: [
          {
            grade: '5',
            text: 'Clear, controlled writing; varied vocabulary; generally accurate SPAG',
          },
          {
            grade: '7',
            text: 'Compelling, well-structured writing; ambitious vocabulary; consistently accurate',
          },
          {
            grade: '9',
            text: 'Sophisticated, highly original writing; extensive vocabulary; virtually flawless SPAG',
          },
        ],
      },
    ],
  },
  {
    subject: 'English Literature',
    areas: [
      {
        label: 'Analysis',
        levels: [
          {
            grade: '5',
            text: "Clear understanding of texts; explains effects of writer's methods with examples",
          },
          {
            grade: '7',
            text: "Thoughtful, developed analysis; explores multiple interpretations of writer's choices",
          },
          {
            grade: '9',
            text: "Critical, conceptualised response; perceptive, original analysis of writer's craft",
          },
        ],
      },
      {
        label: 'Context',
        levels: [
          { grade: '5', text: 'Relevant references to context that support the argument' },
          { grade: '7', text: 'Thoughtful consideration of context integrated into analysis' },
          {
            grade: '9',
            text: 'Seamless, sophisticated integration of context that enriches interpretation',
          },
        ],
      },
    ],
  },
]

const SELF_ASSESSMENT = [
  {
    question: 'When I analyse a quotation, I usually...',
    options: [
      { text: 'Identify a technique and say what it shows', level: 'Grade 4-5' },
      {
        text: 'Explore why the writer chose specific words and their effects on the reader',
        level: 'Grade 6-7',
      },
      {
        text: 'Offer multiple interpretations and connect choices to wider themes and context',
        level: 'Grade 8-9',
      },
    ],
  },
  {
    question: 'My creative/descriptive writing typically...',
    options: [
      { text: 'Uses some techniques and has a clear structure', level: 'Grade 4-5' },
      {
        text: 'Has ambitious vocabulary, varied sentences, and a deliberate structure',
        level: 'Grade 6-7',
      },
      {
        text: 'Is genuinely original, with sophisticated techniques and a compelling voice',
        level: 'Grade 8-9',
      },
    ],
  },
  {
    question: 'When writing about context in Literature, I...',
    options: [
      { text: 'Mention relevant historical or social context', level: 'Grade 4-5' },
      { text: "Integrate context into my analysis of the writer's intentions", level: 'Grade 6-7' },
      {
        text: 'Use context to develop original interpretations and challenge readings',
        level: 'Grade 8-9',
      },
    ],
  },
  {
    question: 'My use of subject terminology is...',
    options: [
      { text: 'I can name common techniques (simile, metaphor, alliteration)', level: 'Grade 4-5' },
      {
        text: 'I use a wide range of terminology accurately and explore effects',
        level: 'Grade 6-7',
      },
      {
        text: 'I use precise terminology fluently as part of a conceptualised argument',
        level: 'Grade 8-9',
      },
    ],
  },
]

/* ─── Icons ──────────────────────────────────────────────────── */

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

function TargetIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function GradeTargetsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Resources
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Grade Targets
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            What does each grade actually look like? Understand the difference between a 5, a 7, and
            a 9 -- then build a clear plan to reach your target grade.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            {GRADE_CARDS.map((card) => (
              <Link
                key={card.grade}
                href={card.href}
                className="rounded-lg bg-muted px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Grade {card.grade}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Grade cards */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">What does each grade look like?</h2>
        <p className="mt-2 text-muted-foreground">
          Select a grade to see detailed descriptors, example responses, and targeted advice for
          reaching that level.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {GRADE_CARDS.map((card) => (
            <Link
              key={card.grade}
              href={card.href}
              className={`group flex flex-col rounded-xl border-2 ${card.colour} bg-card p-6 shadow-md transition hover:shadow-lg`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${card.bg} text-xl font-bold text-white`}
                >
                  {card.grade}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-foreground transition-colors">
                    Grade {card.grade}
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {card.label}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-sm font-medium italic text-muted-foreground">
                {card.tagline}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {card.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full ${card.bg}`} />
                    {skill}
                  </li>
                ))}
              </ul>

              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-foreground transition-colors">
                How to get a {card.grade} <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Grade descriptors comparison */}
      <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">Grade Descriptors</h2>
          <p className="mt-2 text-muted-foreground">
            Side-by-side comparison of what examiners expect at each level for English Language and
            Literature.
          </p>

          {DESCRIPTORS.map((subject) => (
            <div key={subject.subject} className="mt-8">
              <h3 className="text-lg font-bold text-foreground">{subject.subject}</h3>

              {subject.areas.map((area) => (
                <div key={area.label} className="mt-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {area.label}
                  </h4>
                  <div className="mt-2 grid gap-3 sm:grid-cols-3">
                    {area.levels.map((level) => (
                      <div
                        key={level.grade}
                        className="rounded-lg border border-border bg-card p-4"
                      >
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold text-white ${
                            level.grade === '5'
                              ? 'bg-emerald-600'
                              : level.grade === '7'
                                ? 'bg-primary'
                                : 'bg-primary'
                          }`}
                        >
                          Grade {level.grade}
                        </span>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {level.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Self-assessment */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <TargetIcon className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Where are you now?</h2>
        </div>
        <p className="mt-2 text-muted-foreground">
          A quick self-assessment to help you identify your current level and what to work on next.
          Be honest -- this is for you, not your teacher!
        </p>

        <div className="mt-8 space-y-6">
          {SELF_ASSESSMENT.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-border bg-card p-6 shadow-md">
              <p className="font-semibold text-foreground">
                {idx + 1}. {item.question}
              </p>
              <div className="mt-4 space-y-3">
                {item.options.map((option) => (
                  <label
                    key={option.level}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 transition hover:border-primary/40 hover:bg-primary/5"
                  >
                    <input
                      type="radio"
                      name={`q${idx}`}
                      className="mt-0.5 h-4 w-4 border-border text-primary focus:ring-primary"
                    />
                    <div>
                      <p className="text-sm text-muted-foreground">{option.text}</p>
                      <span
                        className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
                          option.level.includes('4-5')
                            ? 'bg-emerald-600/10 text-emerald-600'
                            : option.level.includes('6-7')
                              ? 'bg-primary/10 text-primary'
                              : 'bg-primary/10 text-primary'
                        }`}
                      >
                        {option.level}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
          <h3 className="font-bold text-foreground">What next?</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            If most of your answers fell in the <strong>Grade 4-5</strong> range, start with our{' '}
            <Link
              href="/resources/grade-targets/grade-5"
              className="font-semibold text-primary underline hover:text-foreground"
            >
              Getting a Grade 5
            </Link>{' '}
            guide. If you are mostly at <strong>Grade 6-7</strong>, check out{' '}
            <Link
              href="/resources/grade-targets/grade-7"
              className="font-semibold text-primary underline hover:text-foreground"
            >
              Getting a Grade 7
            </Link>
            . And if you are aiming for the very top, our{' '}
            <Link
              href="/resources/grade-targets/grade-9"
              className="font-semibold text-primary underline hover:text-foreground"
            >
              Getting a Grade 9
            </Link>{' '}
            guide will show you how to write responses that examiners remember.
          </p>
        </div>
      </section>
    </>
  )
}
