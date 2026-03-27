import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/spoken-language' },
  title: "Spoken Language Endorsement Guide | The English Hub",
  description:
    "Complete guide to the GCSE English Language Spoken Language endorsement. Presentation planning, delivery techniques, responding to questions, Standard English, assessment criteria, and 20+ topic ideas.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const TOPIC_IDEAS = [
  "Should school uniforms be abolished?",
  "The impact of social media on mental health",
  "Should the voting age be lowered to 16?",
  "Is space exploration worth the cost?",
  "Should animals be used in scientific research?",
  "The importance of learning a second language",
  "Should homework be banned?",
  "Is technology making us less creative?",
  "The ethics of fast fashion",
  "Should junk food advertising be banned?",
  "Why representation in the media matters",
  "The case for or against nuclear energy",
  "Should mobile phones be allowed in schools?",
  "The impact of climate change on future generations",
  "Is competitive sport good for young people?",
  "Should the UK adopt a four-day working week?",
  "The role of art and music in education",
  "Why reading fiction matters",
  "Should zoos be closed?",
  "The dangers of misinformation online",
  "Is it ethical to keep pets?",
  "Should public transport be free?",
];

const COMMON_MISTAKES = [
  {
    mistake: "Reading from a full script",
    fix: "Use cue cards with key words and phrases only. Practise enough that you can speak naturally from brief prompts.",
  },
  {
    mistake: "Speaking too quickly",
    fix: "Nerves cause rushing. Practise with a timer, consciously pause after key points, and aim for a measured, deliberate pace.",
  },
  {
    mistake: "Avoiding eye contact",
    fix: "Scan the room and look at different people. If direct eye contact feels difficult, look at foreheads or the space just above heads.",
  },
  {
    mistake: "Using slang or informal language",
    fix: "Prepare formal versions of your points in advance. Replace \"like\", \"basically\", \"innit\", and \"yeah\" with Standard English equivalents.",
  },
  {
    mistake: "Choosing a topic with no depth",
    fix: "Pick something with multiple angles, evidence to draw on, and scope for counter-arguments. Avoid topics that can be summarised in one sentence.",
  },
  {
    mistake: "One-word answers to questions",
    fix: "Always expand your answers. Use phrases like \"To elaborate on that...\" or \"Building on my earlier point...\" to give fuller responses.",
  },
  {
    mistake: "No clear structure",
    fix: "Use a clear introduction, 3-4 main points, a counter-argument, and a conclusion. Signal transitions: \"My next point is...\" or \"Moving on to...\"",
  },
  {
    mistake: "Fidgeting or swaying",
    fix: "Stand with feet shoulder-width apart. Keep hands relaxed at your sides or use deliberate, purposeful gestures to emphasise points.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function SpokenLanguagePage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-[primary] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Resources
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Spoken Language Endorsement
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Everything you need to achieve a Distinction in your GCSE English
            Language Spoken Language endorsement. Plan, practise, and deliver
            a presentation with confidence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/spoken-language/topics"
              className="rounded-lg bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-md transition hover:bg-blue-50"
            >
              Browse 30+ Topic Ideas
            </Link>
            <a
              href="#planning"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-card/10"
            >
              How to Plan
            </a>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb ────────────────────────────────────────── */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/resources"
              className="hover:text-foreground transition-colors"
            >
              Resources
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-foreground">Spoken Language</li>
        </ol>
      </nav>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">

        {/* 1. What is the Spoken Language Endorsement? */}
        <section aria-labelledby="what-heading">
          <h2
            id="what-heading"
            className="text-2xl font-bold text-foreground"
          >
            1. What Is the Spoken Language Endorsement?
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Spoken Language endorsement is a <strong>compulsory component</strong> of
              GCSE English Language. Every student must complete it, but it is
              reported <strong>separately</strong> from your main 9&ndash;1 GCSE
              grade. It does not affect your English Language grade &mdash; instead,
              it appears on your certificate as its own result.
            </p>
            <p>
              The endorsement requires you to deliver a <strong>formal
              presentation or speech</strong> on a topic of your choice, respond
              to questions and feedback from the audience, and use spoken
              Standard English throughout. It is designed to assess your ability
              to communicate effectively in a formal spoken context &mdash; a
              skill valued by employers, colleges, and universities.
            </p>
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
              <p className="text-sm font-semibold text-foreground">Key facts</p>
              <ul className="ml-4 mt-2 list-disc space-y-1 text-sm text-muted-foreground">
                <li>Required for all GCSE English Language students (AQA, Edexcel, OCR)</li>
                <li>Reported separately &mdash; does <strong>not</strong> count towards your 9&ndash;1 grade</li>
                <li>Assessed by your teacher, moderated by the exam board</li>
                <li>You deliver a presentation, then answer questions</li>
                <li>Standard English must be used throughout</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* 2. How it's assessed */}
        <section aria-labelledby="assessment-heading">
          <h2
            id="assessment-heading"
            className="text-2xl font-bold text-foreground"
          >
            2. How Is It Assessed?
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Your teacher assesses your spoken language performance against
              three assessment strands. The result is graded as one of
              four outcomes:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border-2 border-emerald-500 bg-emerald-50 p-4 text-center">
                <p className="text-lg font-bold text-emerald-700">Distinction</p>
                <p className="mt-1 text-xs text-muted-foreground">Outstanding performance across all three strands</p>
              </div>
              <div className="rounded-lg border-2 border-primary bg-blue-50 p-4 text-center">
                <p className="text-lg font-bold text-primary">Merit</p>
                <p className="mt-1 text-xs text-muted-foreground">Competent and clear across all strands</p>
              </div>
              <div className="rounded-lg border-2 border-amber-500 bg-amber-50 p-4 text-center">
                <p className="text-lg font-bold text-amber-700">Pass</p>
                <p className="mt-1 text-xs text-muted-foreground">Basic competence demonstrated</p>
              </div>
              <div className="rounded-lg border-2 border-gray-400 bg-muted p-4 text-center">
                <p className="text-lg font-bold text-muted-foreground">Not Classified</p>
                <p className="mt-1 text-xs text-muted-foreground">Requirements not met</p>
              </div>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-foreground">
              The Three Assessment Strands
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-muted p-5">
                <h4 className="font-semibold text-foreground">Strand 1 &mdash; Presenting</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Demonstrate presentation skills in a formal setting. Speak
                  clearly, maintain appropriate pace and volume, use gestures and
                  eye contact effectively, and structure your talk logically. You
                  may use brief notes or cue cards but should not read from a
                  full script.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h4 className="font-semibold text-foreground">Strand 2 &mdash; Listening and Responding</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  After your presentation, you will answer questions from your
                  teacher and/or classmates. You must listen carefully, understand
                  each question, and respond thoughtfully and in full. This
                  demonstrates your ability to engage in formal spoken exchange.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h4 className="font-semibold text-foreground">Strand 3 &mdash; Using Standard English</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use spoken Standard English effectively throughout your
                  presentation and when answering questions. This means formal
                  grammar, avoiding slang, and speaking in complete, well-formed
                  sentences appropriate to a formal context.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* 3. Presentation topic suggestions */}
        <section aria-labelledby="topics-heading">
          <h2
            id="topics-heading"
            className="text-2xl font-bold text-foreground"
          >
            3. Presentation Topic Ideas
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Choose a topic you are genuinely interested in. The best
              presentations come from speakers who are passionate about their
              subject. Here are {TOPIC_IDEAS.length} ideas to get you started:
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {TOPIC_IDEAS.map((topic, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-border bg-muted p-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm">{topic}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-5">
              <p className="text-sm text-muted-foreground">
                <strong>Want more ideas?</strong> We have 30+ topics with full
                outlines, key points, and potential questions.{" "}
                <Link
                  href="/resources/spoken-language/topics"
                  className="font-semibold text-primary underline hover:text-foreground"
                >
                  Browse all topic ideas &rarr;
                </Link>
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* 4. How to plan a presentation */}
        <section id="planning" aria-labelledby="planning-heading">
          <h2
            id="planning-heading"
            className="text-2xl font-bold text-foreground"
          >
            4. How to Plan Your Presentation
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <h3 className="text-lg font-semibold text-foreground">
              Step-by-Step Planning Process
            </h3>
            <ol className="ml-6 list-decimal space-y-4">
              <li>
                <strong>Choose your topic</strong> &mdash; Pick something you
                care about and can speak on with authority. Ensure it has enough
                depth for 3&ndash;5 minutes of sustained speaking and follow-up
                questions.
              </li>
              <li>
                <strong>Research thoroughly</strong> &mdash; Gather facts,
                statistics, expert opinions, and real-world examples. The
                stronger your evidence, the more convincing your presentation.
              </li>
              <li>
                <strong>Decide your angle</strong> &mdash; Are you arguing for
                or against something? Informing? Persuading? Your angle shapes
                your entire structure.
              </li>
              <li>
                <strong>Structure your content</strong> &mdash; Use the framework
                below to organise your material into a clear, logical flow.
              </li>
              <li>
                <strong>Create cue cards</strong> &mdash; Write key words and
                short phrases on numbered cards. Never write full sentences
                &mdash; you should speak naturally, not read aloud.
              </li>
              <li>
                <strong>Anticipate questions</strong> &mdash; Think about what
                your audience might ask and prepare thoughtful responses.
              </li>
              <li>
                <strong>Practise aloud</strong> &mdash; Rehearse at least three
                times. Time yourself. Practise in front of a friend or family
                member for feedback.
              </li>
            </ol>

            <h3 className="mt-8 text-lg font-semibold text-foreground">
              Recommended Structure
            </h3>
            <div className="mt-3 space-y-3">
              <div className="rounded-lg border-l-4 border-[primary] bg-muted p-4">
                <p className="font-semibold text-foreground">Introduction (30&ndash;45 seconds)</p>
                <p className="mt-1 text-sm">
                  Hook your audience with a compelling opening: a rhetorical
                  question, a surprising statistic, a powerful quotation, or a
                  bold statement. State your topic and your main argument or
                  position clearly.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="font-semibold text-primary">Main Points (2&ndash;3 minutes)</p>
                <p className="mt-1 text-sm">
                  Present 3&ndash;4 well-developed points, each supported with
                  evidence, examples, or statistics. Use clear signposting:
                  &ldquo;My first point is&hellip;&rdquo;, &ldquo;Furthermore&hellip;&rdquo;,
                  &ldquo;Most importantly&hellip;&rdquo;
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-amber-500 bg-muted p-4">
                <p className="font-semibold text-amber-700">Counter-Argument (30&ndash;45 seconds)</p>
                <p className="mt-1 text-sm">
                  Acknowledge the opposing viewpoint and explain why your
                  position is stronger. This demonstrates maturity and critical
                  thinking: &ldquo;Some may argue that&hellip; however&hellip;&rdquo;
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-emerald-500 bg-muted p-4">
                <p className="font-semibold text-emerald-700">Conclusion (30&ndash;45 seconds)</p>
                <p className="mt-1 text-sm">
                  Summarise your key points, restate your argument, and end with
                  a memorable closing line or call to action. Circle back to your
                  opening hook for a satisfying circular structure.
                </p>
              </div>
            </div>

            <h3 className="mt-8 text-lg font-semibold text-foreground">
              Notes and Cue Cards
            </h3>
            <p>
              You may use brief notes or cue cards, but you should
              <strong> never read from a full script</strong>. Effective cue
              cards contain:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Key words and short phrases, not full sentences</li>
              <li>Statistics or quotations you want to reference precisely</li>
              <li>Clear numbering so you keep track of the order</li>
              <li>One main point per card for easy navigation</li>
            </ul>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* 5. How to deliver effectively */}
        <section aria-labelledby="delivery-heading">
          <h2
            id="delivery-heading"
            className="text-2xl font-bold text-foreground"
          >
            5. How to Deliver Effectively
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Delivery is just as important as content. A well-researched
              presentation can fall flat with poor delivery, while confident
              delivery can elevate even a straightforward topic. Focus on these
              six areas:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-muted p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-foreground">Eye Contact</h3>
                </div>
                <p className="mt-3 text-sm">
                  Look at your audience, not at the floor, ceiling, or your
                  notes. Scan different parts of the room to engage everyone.
                  If direct eye contact feels difficult, look at foreheads.
                  Eye contact builds confidence and credibility.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-foreground">Pace</h3>
                </div>
                <p className="mt-3 text-sm">
                  Speak at a measured pace. Nerves often cause people to
                  rush &mdash; consciously slow down. Use deliberate pauses
                  after key points for emphasis. A well-timed pause can be more
                  powerful than any word.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-foreground">Volume and Clarity</h3>
                </div>
                <p className="mt-3 text-sm">
                  Ensure everyone in the room can hear you clearly. Project
                  your voice without shouting. Enunciate words properly &mdash;
                  avoid mumbling. Vary your volume for effect: a quieter moment
                  can draw the audience in.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-foreground">Tone and Expression</h3>
                </div>
                <p className="mt-3 text-sm">
                  Avoid speaking in a monotone. Vary your intonation to express
                  enthusiasm, concern, humour, or urgency. Your voice should
                  reflect the content &mdash; let your passion for the topic
                  come through naturally.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-foreground">Body Language</h3>
                </div>
                <p className="mt-3 text-sm">
                  Stand up straight with feet shoulder-width apart. Use open,
                  confident body language. Avoid fidgeting, crossing your arms,
                  or swaying. Use hand gestures naturally to emphasise points,
                  but do not overdo it.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-foreground">Rhetorical Techniques</h3>
                </div>
                <p className="mt-3 text-sm">
                  Use rhetorical questions, tricolon (rule of three), anaphora
                  (repetition at the start of sentences), emotive language, and
                  direct address to engage your audience. These are the
                  hallmarks of an effective speaker.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* 6. Responding to questions */}
        <section aria-labelledby="questions-heading">
          <h2
            id="questions-heading"
            className="text-2xl font-bold text-foreground"
          >
            6. Responding to Questions
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              After your presentation, you will face questions from your teacher
              and/or classmates. This is a critical part of the assessment and
              tests your ability to think on your feet while maintaining formal
              spoken English. Here are key strategies:
            </p>
            <ul className="ml-6 list-disc space-y-3">
              <li>
                <strong>Listen to the full question</strong> before you start
                answering. Do not interrupt or jump in prematurely.
              </li>
              <li>
                <strong>Take a moment to think</strong> &mdash; it is perfectly
                acceptable to pause briefly before responding. A thoughtful
                answer is always better than a rushed one.
              </li>
              <li>
                <strong>Answer in full sentences</strong> using Standard English.
                Avoid one-word answers or informal language.
              </li>
              <li>
                <strong>Develop your answers</strong> &mdash; use phrases such as
                &ldquo;To elaborate on that&hellip;&rdquo;,
                &ldquo;Building on my earlier point&hellip;&rdquo;, or
                &ldquo;An example of this would be&hellip;&rdquo;
              </li>
              <li>
                <strong>If you do not know the answer</strong>, say so honestly
                and offer what you can: &ldquo;That is an excellent question. I
                have not researched that specific aspect, but based on what I do
                know, I would suggest&hellip;&rdquo;
              </li>
              <li>
                <strong>Refer back to your presentation</strong> where relevant:
                &ldquo;As I mentioned earlier&hellip;&rdquo;
              </li>
              <li>
                <strong>Engage with challenging questions</strong> &mdash; these
                are opportunities to demonstrate critical thinking and depth of
                knowledge, not threats.
              </li>
              <li>
                <strong>Stay calm and composed</strong> &mdash; maintain your
                formal register even if a question catches you off guard.
              </li>
            </ul>

            <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
              <p className="text-sm font-semibold text-foreground">Top tip</p>
              <p className="mt-1 text-sm text-muted-foreground">
                When preparing your presentation, write down 5&ndash;10
                questions your audience might ask and practise answering them
                aloud. This is the single most effective way to prepare for the
                Q&amp;A section.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* 7. Using Standard English */}
        <section aria-labelledby="standard-english-heading">
          <h2
            id="standard-english-heading"
            className="text-2xl font-bold text-foreground"
          >
            7. Using Standard English
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Standard English is the formal variety of English used in
              professional and academic contexts. For the Spoken Language
              endorsement, you must demonstrate that you can use Standard
              English consistently throughout your presentation and when
              answering questions.
            </p>
            <h3 className="text-lg font-semibold text-foreground">
              What Standard English Means in Practice
            </h3>
            <div className="overflow-x-auto">
              <table className="mt-3 w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[primary]">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Avoid (Non-Standard)</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Use Instead (Standard English)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-red-50/50">
                    <td className="px-4 py-2">&ldquo;We was going&hellip;&rdquo;</td>
                    <td className="px-4 py-2">&ldquo;We were going&hellip;&rdquo;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">&ldquo;I done it&rdquo;</td>
                    <td className="px-4 py-2">&ldquo;I did it&rdquo; / &ldquo;I have done it&rdquo;</td>
                  </tr>
                  <tr className="bg-red-50/50">
                    <td className="px-4 py-2">&ldquo;They ain&rsquo;t&rdquo;</td>
                    <td className="px-4 py-2">&ldquo;They are not&rdquo; / &ldquo;They have not&rdquo;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">&ldquo;Like, basically&hellip;&rdquo;</td>
                    <td className="px-4 py-2">&ldquo;Essentially&hellip;&rdquo; / &ldquo;In summary&hellip;&rdquo;</td>
                  </tr>
                  <tr className="bg-red-50/50">
                    <td className="px-4 py-2">&ldquo;Innit&rdquo; / &ldquo;Yeah&rdquo;</td>
                    <td className="px-4 py-2">&ldquo;Is it not?&rdquo; / &ldquo;Indeed&rdquo;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">&ldquo;Me and my friend&hellip;&rdquo;</td>
                    <td className="px-4 py-2">&ldquo;My friend and I&hellip;&rdquo;</td>
                  </tr>
                  <tr className="bg-red-50/50">
                    <td className="px-4 py-2">&ldquo;Could of&rdquo;</td>
                    <td className="px-4 py-2">&ldquo;Could have&rdquo;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="ml-6 mt-4 list-disc space-y-2">
              <li>Use formal vocabulary: &ldquo;furthermore&rdquo; rather than &ldquo;also&rdquo;; &ldquo;however&rdquo; rather than &ldquo;but&rdquo;</li>
              <li>Speak in complete sentences, not fragments</li>
              <li>Avoid filler words: &ldquo;um&rdquo;, &ldquo;er&rdquo;, &ldquo;like&rdquo;, &ldquo;you know&rdquo;</li>
              <li>Use subject-verb agreement correctly</li>
              <li>Avoid double negatives: say &ldquo;I do not have any&rdquo; not &ldquo;I don&rsquo;t have none&rdquo;</li>
            </ul>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* 8. Common mistakes */}
        <section aria-labelledby="mistakes-heading">
          <h2
            id="mistakes-heading"
            className="text-2xl font-bold text-foreground"
          >
            8. Common Mistakes to Avoid
          </h2>
          <div className="mt-4 space-y-3">
            {COMMON_MISTAKES.map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-muted p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{item.mistake}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* 9. Example presentation plans */}
        <section aria-labelledby="examples-heading">
          <h2
            id="examples-heading"
            className="text-2xl font-bold text-foreground"
          >
            9. Example Presentation Plans
          </h2>
          <div className="mt-4 space-y-6 text-muted-foreground leading-relaxed">

            {/* Example 1 */}
            <div className="rounded-lg border-2 border-[primary]/20 bg-card p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">
                Example 1: &ldquo;Should the Voting Age Be Lowered to 16?&rdquo;
              </h3>
              <div className="mt-4 space-y-3">
                <div className="rounded border-l-4 border-[primary] bg-muted p-3">
                  <p className="text-sm font-semibold text-foreground">Introduction</p>
                  <p className="mt-1 text-sm">
                    Hook: &ldquo;In 2014, 75% of 16 and 17-year-olds voted in
                    the Scottish independence referendum. They proved they were
                    ready. So why are we still shutting them out?&rdquo; State
                    argument: voting age should be lowered to 16.
                  </p>
                </div>
                <div className="rounded border-l-4 border-primary bg-muted p-3">
                  <p className="text-sm font-semibold text-primary">Point 1: Taxation and representation</p>
                  <p className="mt-1 text-sm">
                    16-year-olds can work and pay tax. The principle of &ldquo;no
                    taxation without representation&rdquo; demands they should
                    have a vote.
                  </p>
                </div>
                <div className="rounded border-l-4 border-primary bg-muted p-3">
                  <p className="text-sm font-semibold text-primary">Point 2: Legal responsibilities</p>
                  <p className="mt-1 text-sm">
                    At 16, you can join the army, get married, and leave school.
                    If you can make these life-changing decisions, you should be
                    trusted to vote.
                  </p>
                </div>
                <div className="rounded border-l-4 border-primary bg-muted p-3">
                  <p className="text-sm font-semibold text-primary">Point 3: Engagement and habit-forming</p>
                  <p className="mt-1 text-sm">
                    Research shows that voting early creates lifelong habits of
                    civic participation. Lowering the voting age could help
                    combat declining voter turnout.
                  </p>
                </div>
                <div className="rounded border-l-4 border-amber-500 bg-muted p-3">
                  <p className="text-sm font-semibold text-amber-700">Counter-argument</p>
                  <p className="mt-1 text-sm">
                    &ldquo;Some argue that 16-year-olds lack the maturity and
                    political knowledge to vote responsibly. However, maturity
                    varies at any age, and education, not age, is the real
                    barrier to informed voting.&rdquo;
                  </p>
                </div>
                <div className="rounded border-l-4 border-emerald-500 bg-muted p-3">
                  <p className="text-sm font-semibold text-emerald-700">Conclusion</p>
                  <p className="mt-1 text-sm">
                    Summarise key points. Circular ending: &ldquo;If 75% of
                    16-year-olds can turn out in Scotland, imagine what they
                    could do for the whole country. It is time to let them
                    be heard.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="rounded-lg border-2 border-[primary]/20 bg-card p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">
                Example 2: &ldquo;The Impact of Social Media on Mental Health&rdquo;
              </h3>
              <div className="mt-4 space-y-3">
                <div className="rounded border-l-4 border-[primary] bg-muted p-3">
                  <p className="text-sm font-semibold text-foreground">Introduction</p>
                  <p className="mt-1 text-sm">
                    Hook: &ldquo;The average teenager spends over seven hours a
                    day on screens. But what is that doing to their
                    minds?&rdquo; State angle: exploring the negative impact of
                    social media on young people&rsquo;s mental health.
                  </p>
                </div>
                <div className="rounded border-l-4 border-primary bg-muted p-3">
                  <p className="text-sm font-semibold text-primary">Point 1: Comparison culture and self-esteem</p>
                  <p className="mt-1 text-sm">
                    Filtered images and curated lives lead to unhealthy
                    comparisons. Studies link heavy social media use to lower
                    self-esteem, particularly among teenage girls.
                  </p>
                </div>
                <div className="rounded border-l-4 border-primary bg-muted p-3">
                  <p className="text-sm font-semibold text-primary">Point 2: Cyberbullying</p>
                  <p className="mt-1 text-sm">
                    Social media provides a platform for anonymous harassment.
                    1 in 5 young people report experiencing cyberbullying, with
                    lasting psychological effects.
                  </p>
                </div>
                <div className="rounded border-l-4 border-primary bg-muted p-3">
                  <p className="text-sm font-semibold text-primary">Point 3: Sleep disruption and anxiety</p>
                  <p className="mt-1 text-sm">
                    Blue light and notification cycles disrupt sleep patterns.
                    The &ldquo;fear of missing out&rdquo; (FOMO) creates
                    persistent anxiety and compulsive checking behaviour.
                  </p>
                </div>
                <div className="rounded border-l-4 border-amber-500 bg-muted p-3">
                  <p className="text-sm font-semibold text-amber-700">Counter-argument</p>
                  <p className="mt-1 text-sm">
                    &ldquo;Some argue that social media can be positive &mdash;
                    connecting communities, raising awareness, and supporting
                    those who feel isolated. This is valid, but it does not
                    negate the overwhelming evidence of harm.&rdquo;
                  </p>
                </div>
                <div className="rounded border-l-4 border-emerald-500 bg-muted p-3">
                  <p className="text-sm font-semibold text-emerald-700">Conclusion</p>
                  <p className="mt-1 text-sm">
                    Call to action: &ldquo;We need better regulation, better
                    education, and better awareness. Seven hours a day is not
                    just screen time &mdash; it is time that shapes who our young
                    people become.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* 10. Teacher assessment criteria */}
        <section aria-labelledby="criteria-heading">
          <h2
            id="criteria-heading"
            className="text-2xl font-bold text-foreground"
          >
            10. Teacher Assessment Criteria
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Your teacher will assess your performance against the following
              criteria for each grade. Understanding what your teacher is looking
              for helps you target the highest grade.
            </p>

            <div className="space-y-4">
              {/* Distinction */}
              <div className="rounded-lg border-2 border-emerald-500 bg-emerald-50 p-5">
                <h3 className="text-lg font-bold text-emerald-700">Distinction</h3>
                <ul className="ml-4 mt-3 list-disc space-y-2 text-sm text-muted-foreground">
                  <li><strong>Presenting:</strong> The presentation is confidently, skilfully, and engagingly delivered with a commanding presence. Content is challenging, well-researched, and compelling. A wide range of rhetorical and presentational techniques is used effectively and deliberately.</li>
                  <li><strong>Listening &amp; Responding:</strong> Responds to questions and feedback perceptively, with authority and in considerable detail. Demonstrates sophisticated critical thinking and the ability to develop and extend ideas spontaneously.</li>
                  <li><strong>Standard English:</strong> Standard English is used fluently, consistently, and with precision throughout both the presentation and the Q&amp;A. Vocabulary is ambitious, varied, and appropriate to the formal context.</li>
                </ul>
              </div>

              {/* Merit */}
              <div className="rounded-lg border-2 border-primary bg-blue-50 p-5">
                <h3 className="text-lg font-bold text-primary">Merit</h3>
                <ul className="ml-4 mt-3 list-disc space-y-2 text-sm text-muted-foreground">
                  <li><strong>Presenting:</strong> The presentation is clearly and competently delivered with good audience engagement. Content is well-organised, relevant, and supported with evidence. Rhetorical and presentational techniques are used with success.</li>
                  <li><strong>Listening &amp; Responding:</strong> Responds to questions clearly, with some detail and development. Shows the ability to engage with ideas and offer reasoned responses.</li>
                  <li><strong>Standard English:</strong> Standard English is used securely and consistently, with only occasional minor errors. Vocabulary is appropriate and sometimes ambitious.</li>
                </ul>
              </div>

              {/* Pass */}
              <div className="rounded-lg border-2 border-amber-500 bg-amber-50 p-5">
                <h3 className="text-lg font-bold text-amber-700">Pass</h3>
                <ul className="ml-4 mt-3 list-disc space-y-2 text-sm text-muted-foreground">
                  <li><strong>Presenting:</strong> The presentation is delivered with basic competence. Content is understandable and has some structure, though it may lack depth or sustained development. Some attempt is made to use presentational techniques.</li>
                  <li><strong>Listening &amp; Responding:</strong> Responds to questions with simple, relevant answers but may lack development or detail.</li>
                  <li><strong>Standard English:</strong> Standard English is used with some consistency, though there may be noticeable lapses into non-standard forms.</li>
                </ul>
              </div>

              {/* Not Classified */}
              <div className="rounded-lg border-2 border-gray-400 bg-muted p-5">
                <h3 className="text-lg font-bold text-muted-foreground">Not Classified</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The student has not met the minimum requirements for a Pass.
                  The presentation may be incomplete, incoherent, or delivered
                  without any formal structure. Standard English is not
                  sustained, and responses to questions are absent or
                  inadequate.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Practice checklist */}
        <section aria-labelledby="checklist-heading">
          <h2
            id="checklist-heading"
            className="text-2xl font-bold text-foreground"
          >
            Your Preparation Checklist
          </h2>
          <div className="mt-4 space-y-2 text-muted-foreground">
            <p>Use this checklist to make sure you are fully prepared:</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "I have chosen a topic I am knowledgeable and passionate about",
                "My presentation has a clear introduction, main body, and conclusion",
                "I have at least three strong, evidence-based points",
                "I have addressed a counter-argument",
                "I have used rhetorical techniques (tricolon, anaphora, rhetorical questions)",
                "I have prepared cue cards with key words (not a full script)",
                "I have practised delivering my presentation aloud at least three times",
                "I have practised maintaining eye contact and using open body language",
                "I have timed my presentation (aim for 3-5 minutes)",
                "I have prepared for likely questions and practised answering them aloud",
                "I am confident using Standard English throughout",
                "I have asked someone to give me feedback on my delivery",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-border bg-muted p-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-[primary]/40 text-xs text-transparent">
                    &#10003;
                  </span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA to topics */}
        <div className="mt-12 rounded-lg bg-gradient-to-r from-primary to-[primary] p-8 text-center text-white shadow-lg">
          <h2 className="text-2xl font-bold">Need a Topic?</h2>
          <p className="mx-auto mt-2 max-w-lg text-white/90">
            Browse our collection of 30+ presentation topic ideas, each with a
            full outline, key points to cover, and potential audience questions.
          </p>
          <Link
            href="/resources/spoken-language/topics"
            className="mt-6 inline-block rounded-lg bg-card px-8 py-3 text-sm font-semibold text-foreground shadow transition hover:bg-blue-50"
          >
            Browse All Topics &rarr;
          </Link>
        </div>
      </div>

    </>
  );
}
