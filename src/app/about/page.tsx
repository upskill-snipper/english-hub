import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — The English Hub',
  description:
    'Learn about The English Hub, our mission, and how we help students master GCSE English.',
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        About The English Hub
      </h1>

      <div className="mt-8 space-y-8">
        {/* Mission */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">Our Mission</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The English Hub exists to make high-quality GCSE English education accessible to every
            student. We believe that no learner should be held back by a lack of resources, and that
            every student deserves structured, exam-focused content that helps them achieve their
            best possible grade. Our platform is built to close the attainment gap and give every
            student the tools they need to succeed.
          </p>
        </section>

        {/* What We Offer */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">What We Offer</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We provide 15+ structured courses covering KS3, GCSE, and IGCSE English Language and
            Literature. Our content is tailored to five major exam boards — AQA, Edexcel, OCR, WJEC
            Eduqas, and Cambridge IGCSE — so students always study material aligned to the
            specification they are sitting. Each course is broken down into clear, manageable topics
            with lessons, practice activities, and revision resources designed to build confidence
            from the first lesson through to exam day.
          </p>
        </section>

        {/* Our Approach */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">Our Approach</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Every piece of content on The English Hub is built around four principles: exam board
            specificity, intelligent feedback, active learning, and comprehensive revision.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Exam board-specific content</strong> — lessons,
              mark schemes, and model answers mapped directly to AQA, Edexcel, OCR, WJEC Eduqas,
              and Cambridge IGCSE specifications.
            </li>
            <li>
              <strong className="text-foreground">AI-powered essay feedback</strong> — submit
              practice essays and receive detailed, criteria-referenced feedback in seconds, helping
              students understand how to improve before their real exam.
            </li>
            <li>
              <strong className="text-foreground">Mock exam practice</strong> — timed,
              exam-style questions that mirror the format, wording, and mark allocation students
              will encounter on the day.
            </li>
            <li>
              <strong className="text-foreground">Interactive games and revision tools</strong> —
              quizzes, key-term matching, and retrieval practice activities that make revision
              engaging and effective.
            </li>
          </ul>
        </section>

        {/* Who It's For */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">Who It&#39;s For</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The English Hub is designed for students aged 14 to 16 preparing for their English
            exams, but it supports the wider community around them too. Teachers use the platform to
            set homework, track progress, and supplement classroom teaching. Schools integrate our
            courses into their intervention and revision programmes. Parents gain visibility into
            what their child is studying and how they are progressing, giving them the confidence to
            support learning at home.
          </p>
        </section>

        {/* Our Values */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">Our Values</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Quality content</strong> — every lesson is
              written and reviewed by experienced English educators to ensure accuracy and clarity.
            </li>
            <li>
              <strong className="text-foreground">Accessibility</strong> — we are committed to
              making our platform usable and affordable for all students, regardless of background.
            </li>
            <li>
              <strong className="text-foreground">Evidence-based learning</strong> — our tools are
              grounded in proven pedagogical strategies including retrieval practice, spaced
              repetition, and formative feedback.
            </li>
            <li>
              <strong className="text-foreground">Exam board alignment</strong> — students can
              trust that what they study on The English Hub maps directly to the exam they will sit.
            </li>
          </ul>
        </section>

        {/* At a Glance */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">At a Glance</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { stat: '15+', label: 'Structured courses from KS3 to IGCSE' },
              { stat: '5', label: 'Exam boards supported' },
              { stat: 'AI-Powered', label: 'Essay feedback in seconds' },
              { stat: 'Exam-Style', label: 'Mock questions and timed practice' },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-card p-4 text-center"
              >
                <p className="text-2xl font-bold text-foreground">{stat}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
