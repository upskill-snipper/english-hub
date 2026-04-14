import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How AI Marking Works',
  description:
    'A simple explanation of how The English Hub uses AI to mark your GCSE English essays, what data is shared, and how to opt out.',
  alternates: { canonical: 'https://theenglishhub.app/marking/ai-explainer' },
}

export default function AiExplainerPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/marking" className="hover:text-primary">
              Marking
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-foreground">How AI Marking Works</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How AI Marking Works
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Written in plain language so students, parents and teachers can
        understand exactly what happens when you submit an essay.
      </p>

      <div className="mt-8 space-y-8">
        {/* 1 — What is AI marking? */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            1. What is AI marking?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            When you submit an essay on The English Hub, we use a computer
            program called an <strong className="text-foreground">AI model</strong>{' '}
            to read your work, compare it against the official GCSE marking guide,
            and give you a predicted grade with feedback. Think of it like a very
            fast practice marker that can help you spot strengths and areas to
            improve &mdash; but it is <em>not</em> a real marker and the grade
            is <em>not</em> an official result.
          </p>
        </section>

        {/* 2 — Which AI do we use? */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            2. Which AI do we use?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We use a model called{' '}
            <strong className="text-foreground">Claude</strong>, made by a
            company called{' '}
            <a
              href="https://www.anthropic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground"
            >
              Anthropic
            </a>
            . Anthropic is based in the United States and focuses on building AI
            that is safe and helpful.
          </p>
        </section>

        {/* 3 — What data is sent? */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            3. What information is sent to the AI?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            When you click &ldquo;Submit for marking&rdquo;, we send{' '}
            <strong className="text-foreground">only the text of your essay</strong>{' '}
            and the question you chose to the AI. We do <em>not</em> send:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-3">
            <li>Your name or email address</li>
            <li>Your date of birth or age</li>
            <li>Your school name</li>
            <li>Any other personal information</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Your essay text is sent securely over an encrypted connection. Under
            our agreement with Anthropic, your essay text is{' '}
            <strong className="text-foreground">
              not used to train their AI models
            </strong>
            .
          </p>
        </section>

        {/* 4 — Is the grade official? */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            4. Is the grade official?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">No.</strong> The grade you
            receive is a <em>predicted</em> grade based on how the AI interprets
            the marking guide. It is meant as a learning guide to help you
            practise and improve. Only a qualified marker appointed by your
            exam board (AQA, Edexcel, OCR or Eduqas) can award an official GCSE
            grade.
          </p>
        </section>

        {/* 5 — Can a human review my work? */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            5. Can a human review my work instead?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Yes. If you, your parent or guardian, or your teacher would like a
            human to review your essay instead of (or as well as) the AI, you
            can contact us at{' '}
            <a
              href="mailto:info@Upskillenergy.com"
              className="underline text-foreground"
            >
              info@Upskillenergy.com
            </a>{' '}
            and we will arrange this where possible.
          </p>
        </section>

        {/* 6 — How do I opt out? */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            6. How do I turn off AI marking?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You (or your parent/guardian) can turn off AI features at any time.
            When AI features are turned off, you will still be able to use every
            other part of The English Hub &mdash; only the AI essay marking and
            AI-powered recommendations will be disabled.
          </p>
          <div className="mt-4 rounded-lg border border-border bg-muted/50 p-5">
            <p className="text-sm font-medium text-foreground mb-2">
              To turn off AI features:
            </p>
            <ol className="list-decimal pl-6 text-muted-foreground leading-relaxed space-y-1 text-sm">
              <li>
                Go to{' '}
                <Link
                  href="/parent/settings"
                  className="underline text-primary"
                >
                  Parent Settings
                </Link>{' '}
                (parents/guardians) or ask your parent to do this for you.
              </li>
              <li>
                Find the <strong className="text-foreground">AI Features</strong>{' '}
                section.
              </li>
              <li>
                Turn off the <strong className="text-foreground">&ldquo;Enable AI essay marking&rdquo;</strong>{' '}
                switch.
              </li>
              <li>Your choice is saved straight away.</li>
            </ol>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-3">
            You can turn AI features back on at any time using the same switch.
            If you have any trouble, email us at{' '}
            <a
              href="mailto:info@Upskillenergy.com"
              className="underline text-foreground"
            >
              info@Upskillenergy.com
            </a>
            .
          </p>
        </section>

        {/* 7 — Your rights */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            7. Your rights
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Under UK data protection law (the UK GDPR and the Children&apos;s
            Code), you have the right to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1 mt-3">
            <li>Know that AI is being used to assess your work (this page tells you that).</li>
            <li>Opt out of AI-powered features at any time.</li>
            <li>Request that a human reviews any decision made by AI.</li>
            <li>Ask us to delete your essay submissions and AI feedback.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            For full details on how we handle your data, see our{' '}
            <Link href="/privacy-policy" className="underline text-foreground">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        {/* 8 — Questions */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            8. Questions?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about how AI is used on The English Hub,
            please contact us:
          </p>
          <ul className="list-none pl-0 text-muted-foreground leading-relaxed space-y-1 mt-3">
            <li>
              <strong className="text-foreground">Email:</strong>{' '}
              <a
                href="mailto:info@Upskillenergy.com"
                className="underline text-foreground"
              >
                info@Upskillenergy.com
              </a>
            </li>
            <li>
              <strong className="text-foreground">Website:</strong>{' '}
              <a
                href="https://theenglishhub.app"
                className="underline text-foreground"
              >
                theenglishhub.app
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
