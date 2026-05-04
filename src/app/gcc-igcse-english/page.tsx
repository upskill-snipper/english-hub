import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import EmailCaptureCard from '@/components/marketing/EmailCaptureCard'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'

/* ───────────────────── Metadata ───────────────────── */

const SITE_URL = 'https://theenglishhub.app'
const PAGE_URL = `${SITE_URL}/gcc-igcse-english`
const OG_IMAGE =
  '/api/og?title=IGCSE+English+revision+for+the+GCC&subtitle=Pearson+Edexcel+and+Cambridge+covered&level=igcse'

export const metadata: Metadata = {
  title: 'IGCSE English revision for the GCC — The English Hub',
  description:
    'IGCSE English Language and Literature revision for students across the GCC: UAE, Qatar, Saudi Arabia, Kuwait, Bahrain, Oman. Pearson Edexcel and Cambridge specs covered.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'IGCSE English revision for the GCC — The English Hub',
    description:
      'IGCSE English Language and Literature revision for students across the GCC: UAE, Qatar, Saudi Arabia, Kuwait, Bahrain, Oman. Pearson Edexcel and Cambridge specs covered.',
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'IGCSE English revision for the GCC — The English Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGCSE English revision for the GCC — The English Hub',
    description:
      'IGCSE English Language and Literature revision for students across the GCC: UAE, Qatar, Saudi Arabia, Kuwait, Bahrain, Oman. Pearson Edexcel and Cambridge specs covered.',
    images: [OG_IMAGE],
  },
}

/* ───────────────────── FAQ data ───────────────────── */

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'Is the platform available across the GCC?',
    answer:
      'Yes. The English Hub is a public web app served from a global CDN, so students in the UAE, Qatar, Saudi Arabia, Kuwait, Bahrain, and Oman can access it the same way they would from the UK. There is no regional licence to buy and no separate Gulf-only build — the same revision content, AI marker, and account features work over standard residential and school connections.',
  },
  {
    question: 'Can we pay in AED, SAR, or QAR?',
    answer:
      'Subscription pricing is set in GBP, but card payments are processed by Stripe, which converts from your card’s home currency at the time of charge. Most UAE, Saudi, and Qatari debit and credit cards work without setup, and your bank statement will show the converted amount in AED, SAR, or QAR alongside the GBP charge.',
  },
  {
    question: 'Does The English Hub work on school networks (filtered/proxied)?',
    answer:
      'The site loads over standard HTTPS on a single domain with no peer-to-peer or video-conferencing requirements, so it usually passes through school filters and proxies without special configuration. If your IT team needs to allowlist anything, the only required hostname is theenglishhub.app and its subdomains. We recommend testing one student account on the school network before rolling out wider.',
  },
  {
    question: 'Are there resources for Cambridge AS/A-Level English (KS5)?',
    answer:
      'Not yet. The current scope is KS3, GCSE, and IGCSE English Language and Literature, including Pearson Edexcel and Cambridge IGCSE specifications. AS/A-Level coverage is on the roadmap but is not live. If A-Level support matters to you, the launch list at the bottom of this page is the right place to be notified when it lands.',
  },
  {
    question: 'How does the AI marker handle British vs International English spelling?',
    answer:
      'The marker is calibrated to UK exam-board mark schemes, which accept both British and International English spellings as long as a candidate is consistent within a response. It will not penalise a student for writing "colour" or "color" provided one form is used throughout. Spelling is only flagged as a technical-accuracy issue when it falls outside accepted variants for the specification.',
  },
]

/* ───────────────────── Page ───────────────────── */

export default async function GccIgcseEnglishPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <main className="min-h-screen bg-ink-950">
      <BreadcrumbJsonLd
        nonce={nonce}
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'GCC IGCSE English', url: PAGE_URL },
        ]}
      />
      <FAQPageJsonLd nonce={nonce} faqs={FAQS} />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section aria-labelledby="page-heading" className="bg-ink-950 pb-10 sm:pb-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-12 sm:pt-16">
          <nav className="mb-6 text-xs text-cream-200/55" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cream-50 underline-offset-4 hover:underline">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream-100/85">GCC IGCSE English</span>
          </nav>

          <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-3 text-emerald-300">
            Local guide
          </p>
          <h1
            id="page-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cream-50 leading-tight"
          >
            IGCSE English revision for students in the GCC
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-cream-100/80 leading-relaxed">
            British curriculum students across the Gulf typically sit either Pearson Edexcel or
            Cambridge IGCSE English. This page maps the two pathways, points you at the right
            revision hub for your specification, and answers the questions parents and teachers here
            actually ask us.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/board-select"
              className="inline-flex items-center rounded-lg border border-emerald-400/40 bg-emerald-400/[0.08] px-4 py-2 text-sm font-medium text-emerald-200 transition-colors hover:bg-emerald-400/[0.12]"
            >
              Pick your exam board
            </Link>
            <Link
              href="/igcse/edexcel"
              className="inline-flex items-center rounded-lg border border-cream-200/20 bg-cream-50/[0.04] px-4 py-2 text-sm font-medium text-cream-100 transition-colors hover:border-cream-200/35 hover:bg-cream-50/[0.06]"
            >
              Edexcel hub
            </Link>
            <Link
              href="/igcse/cambridge/0500"
              className="inline-flex items-center rounded-lg border border-cream-200/20 bg-cream-50/[0.04] px-4 py-2 text-sm font-medium text-cream-100 transition-colors hover:border-cream-200/35 hover:bg-cream-50/[0.06]"
            >
              Cambridge 0500
            </Link>
          </div>
        </div>
      </section>

      {/* ── Body ────────────────────────────────────────────────────── */}
      <article className="bg-ink-950 border-t border-cream-200/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16 space-y-12 text-cream-100/85 text-sm sm:text-base leading-relaxed">
          {/* British curriculum schools in the GCC */}
          <section aria-labelledby="curriculum-heading" className="space-y-4">
            <h2
              id="curriculum-heading"
              className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50"
            >
              British curriculum schools in the GCC
            </h2>
            <p>
              Most British and international schools across the GCC sit students for either the
              Pearson Edexcel or Cambridge International IGCSE in English. Both qualifications are
              recognised by UK universities and by the regional regulators that audit English-medium
              schools in the Gulf — the choice between them is usually a school-level decision tied
              to teacher training and historic preference, rather than a difference in academic
              value.
            </p>
            <p>
              In practice, schools in Dubai and Abu Dhabi tend to lean towards Pearson Edexcel,
              while the picture in Saudi Arabia and Qatar is more evenly split between the two
              boards. Kuwait, Bahrain, and Oman show a similar mix. If you are not sure which board
              your school enters, the simplest check is the specification code printed on your most
              recent mock paper or the front of your set-text edition: 4ET1 or 4EA1 means Edexcel,
              0500 or 0990 means Cambridge.
            </p>
          </section>

          {/* Which IGCSE English specs */}
          <section aria-labelledby="specs-heading" className="space-y-4">
            <h2
              id="specs-heading"
              className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50"
            >
              Which IGCSE English specs?
            </h2>
            <p>
              There are four specifications you are realistically going to meet in a GCC classroom.
              Each has its own paper structure, mark scheme, and set-text list, so the first job of
              any revision programme is making sure you are practising against the right one.
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-cream-200/10 bg-cream-50/[0.02] p-5">
                <h3 className="font-serif text-lg font-semibold text-cream-50">
                  Pearson Edexcel IGCSE 4ET1 — English Literature
                </h3>
                <p className="mt-2">
                  A two-paper closed-book Literature qualification covering modern prose, modern
                  drama, a Shakespeare play, and the Pearson Edexcel Poetry Anthology, plus an
                  unseen-poetry section. The anthology contains 35 prescribed poems from across the
                  English-speaking world.{' '}
                  <Link
                    href="/igcse/edexcel"
                    className="text-emerald-300 underline-offset-4 hover:underline"
                  >
                    Open the 4ET1 hub
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-xl border border-cream-200/10 bg-cream-50/[0.02] p-5">
                <h3 className="font-serif text-lg font-semibold text-cream-50">
                  Pearson Edexcel IGCSE 4EA1 — English Language A
                </h3>
                <p className="mt-2">
                  The Edexcel Language A specification, assessed by exam (with a coursework route
                  available at some centres). Reading is tested on non-fiction extracts; writing
                  covers transactional and imaginative tasks.{' '}
                  <Link
                    href="/igcse/edexcel-lang"
                    className="text-emerald-300 underline-offset-4 hover:underline"
                  >
                    Open the 4EA1 hub
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-xl border border-cream-200/10 bg-cream-50/[0.02] p-5">
                <h3 className="font-serif text-lg font-semibold text-cream-50">
                  Cambridge IGCSE 0500 — English as a First Language
                </h3>
                <p className="mt-2">
                  The long-established Cambridge First Language paper. Two written exams test
                  reading comprehension, summary, and directed and composition writing. Many GCC
                  schools that have run Cambridge for years still enter cohorts on 0500.{' '}
                  <Link
                    href="/igcse/cambridge/0500"
                    className="text-emerald-300 underline-offset-4 hover:underline"
                  >
                    Open the 0500 hub
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-xl border border-cream-200/10 bg-cream-50/[0.02] p-5">
                <h3 className="font-serif text-lg font-semibold text-cream-50">
                  Cambridge IGCSE 0990 — English First Language (redesigned)
                </h3>
                <p className="mt-2">
                  The redesigned Cambridge First Language qualification, with an updated assessment
                  model and 9–1 reporting. Skills overlap heavily with 0500, but the question
                  weightings and rubric wording differ enough that practising against the right
                  paper matters.{' '}
                  <Link
                    href="/igcse/cambridge/0990"
                    className="text-emerald-300 underline-offset-4 hover:underline"
                  >
                    Open the 0990 hub
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* How The English Hub helps */}
          <section aria-labelledby="how-helps-heading" className="space-y-4">
            <h2
              id="how-helps-heading"
              className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50"
            >
              How The English Hub helps GCC IGCSE students
            </h2>
            <p>
              Every revision path on the site is calibrated to a specific specification’s mark
              scheme rather than a generic IGCSE template. That matters for Gulf students because
              cohorts in the same year group at the same school are often split across boards, and
              shared revision packs can quietly point you at the wrong rubric.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-cream-100/85">
              <li>
                <strong className="text-cream-50">Anthology coverage for 4ET1.</strong> The Pearson
                Edexcel Poetry Anthology contains 35 prescribed texts. The{' '}
                <Link
                  href="/igcse/edexcel"
                  className="text-emerald-300 underline-offset-4 hover:underline"
                >
                  Edexcel hub
                </Link>{' '}
                walks through each one with form, structure, language notes, and pairings for the
                Section B comparison.
              </li>
              <li>
                <strong className="text-cream-50">Unseen-poetry walkthroughs for Cambridge.</strong>{' '}
                Annotated unseen-poetry workings show how to move from first-read to a structured
                response under exam conditions, mapped to 0500 and 0990 question types.
              </li>
              <li>
                <strong className="text-cream-50">AI-marked practice essays.</strong> Submit a
                response and get feedback against the assessment objectives for your specific board
                — calibrated to mark schemes rather than a one-size-fits-all rubric.
              </li>
              <li>
                <strong className="text-cream-50">Board-aligned revision paths.</strong> The
                dashboard groups your work by paper, section, and assessment objective, so Edexcel
                and Cambridge students see different recommended next steps even when they sit in
                the same classroom.
              </li>
            </ul>
            <p>
              You can jump straight into a board now:{' '}
              <Link
                href="/igcse/edexcel"
                className="text-emerald-300 underline-offset-4 hover:underline"
              >
                Edexcel 4ET1
              </Link>
              ,{' '}
              <Link
                href="/igcse/edexcel-lang"
                className="text-emerald-300 underline-offset-4 hover:underline"
              >
                Edexcel 4EA1
              </Link>
              ,{' '}
              <Link
                href="/igcse/cambridge/0500"
                className="text-emerald-300 underline-offset-4 hover:underline"
              >
                Cambridge 0500
              </Link>
              , or{' '}
              <Link
                href="/igcse/cambridge/0990"
                className="text-emerald-300 underline-offset-4 hover:underline"
              >
                Cambridge 0990
              </Link>
              .
            </p>
          </section>

          {/* Time-zones */}
          <section aria-labelledby="timezone-heading" className="space-y-4">
            <h2
              id="timezone-heading"
              className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50"
            >
              Time-zones across the GCC: GMT+3 to GMT+4
            </h2>
            <p>
              Saudi Arabia, Qatar, Bahrain, and Kuwait sit at GMT+3. The UAE and Oman sit one hour
              ahead at GMT+4. None of the six observe daylight saving, so the offset to the UK is
              constant in winter and shrinks by an hour in British Summer Time.
            </p>
            <p>
              For revision scheduling the practical effect is that the productive window after
              school finishes lands well before the UK’s evening peak. A 4pm-to-7pm session in
              Riyadh or Doha is a 2pm-to-5pm session in London — early enough that the AI marker and
              the wider site tend to be quiet, which means faster response times on submitted
              essays. It is also worth front-loading mock practice: a Sunday evening mock in Dubai
              finishes long before most UK boarding-school cohorts have started.
            </p>
            <div className="rounded-xl border border-cream-200/10 bg-cream-50/[0.02] p-5">
              <h3 className="font-serif text-lg font-semibold text-cream-50">
                Practical scheduling tip
              </h3>
              <p className="mt-2">
                Block 90 minutes immediately after school for active revision (essay planning,
                AI-marked practice, anthology comparisons), and leave the second half of the evening
                for low-energy review work — flashcards, reading set texts, watching walkthrough
                notes. The pattern works well across both GMT+3 and GMT+4 schools.
              </p>
            </div>
          </section>

          {/* Sunday-Thursday */}
          <section aria-labelledby="week-heading" className="space-y-4">
            <h2
              id="week-heading"
              className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50"
            >
              Sunday–Thursday school week
            </h2>
            <p>
              Most British curriculum schools across the GCC follow a Sunday-to-Thursday teaching
              week, with Friday and Saturday as the weekend. The UAE’s public sector moved to a
              Monday-to-Friday week in 2022, and a small number of UAE schools have followed, but
              the majority of British and international schools across the region still operate on
              the Sunday start. That gives revision two clear advantages over the UK rhythm.
            </p>
            <p>
              First, your weekend genuinely is two consecutive days off-timetable, which makes
              long-form revision blocks (a full past paper under timed conditions, a Shakespeare
              re-read, an extended essay rewrite) much easier to slot in than they would be for a UK
              student trying to fit revision around Saturday sport or Sunday family commitments that
              are already routine. Second, Thursday afternoons effectively function as a Friday —
              energy drops, prep volume eases, and it is a good moment to review the week’s feedback
              rather than start anything new.
            </p>
            <div className="rounded-xl border border-cream-200/10 bg-cream-50/[0.02] p-5">
              <h3 className="font-serif text-lg font-semibold text-cream-50">
                Adapted study cadence
              </h3>
              <p className="mt-2">
                A workable weekly rhythm: heavy lifting on Sunday and Monday (when the term week is
                fresh), targeted technique work on Tuesday and Wednesday, light review on Thursday,
                then one timed practice paper plus one rewrite across the weekend. Rotate which
                paper or section you focus on each week so no element of the specification goes more
                than a fortnight without practice.
              </p>
            </div>
          </section>

          {/* FAQs */}
          <section aria-labelledby="faq-heading" className="space-y-4">
            <h2
              id="faq-heading"
              className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50"
            >
              Frequently asked questions
            </h2>
            <div className="divide-y divide-cream-200/10 rounded-xl border border-cream-200/10 bg-cream-50/[0.02]">
              {FAQS.map((faq) => (
                <details key={faq.question} className="group p-5">
                  <summary className="cursor-pointer list-none font-serif text-base font-semibold text-cream-50 marker:hidden">
                    <span className="flex items-start justify-between gap-4">
                      <span>{faq.question}</span>
                      <span
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-cream-200/60 transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-cream-100/80 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section aria-labelledby="cta-heading" className="space-y-4">
            <h2
              id="cta-heading"
              className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50"
            >
              Start with your board
            </h2>
            <p>
              The fastest way in is to pick your specification and let the dashboard line up the
              right revision sequence. If you are not sure whether your school enters Edexcel or
              Cambridge, the board-select page will walk you through it.
            </p>
            <div>
              <Link
                href="/board-select"
                className="inline-flex items-center rounded-lg border border-emerald-400/40 bg-emerald-400/[0.08] px-5 py-2.5 text-sm font-medium text-emerald-200 transition-colors hover:bg-emerald-400/[0.12]"
              >
                Pick your exam board →
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* ── Email capture ───────────────────────────────────────────── */}
      <section
        aria-labelledby="launch-list-heading"
        className="border-t border-cream-200/10 bg-cream-50/[0.02]"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-3 text-emerald-300">
                Launch list
              </p>
              <h2
                id="launch-list-heading"
                className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50 leading-tight"
              >
                Gulf-region resources, in your inbox
              </h2>
              <p className="mt-3 text-sm sm:text-base text-cream-100/75 leading-relaxed">
                We&rsquo;re building a small set of GCC-specific revision packs alongside the main
                board hubs. Drop your email and we&rsquo;ll send one note when each lands.
              </p>
            </div>
            <EmailCaptureCard
              magnetSlug="gcc-igcse-launch-list"
              magnetTitle="GCC IGCSE English revision pack — get the launch list"
              magnetDescription="One email when new Gulf-region resources land."
            />
          </div>
        </div>
      </section>
    </main>
  )
}
