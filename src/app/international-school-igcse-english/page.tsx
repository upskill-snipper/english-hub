import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'
/* ───────────────────── Metadata ───────────────────── */

const SITE_URL = 'https://theenglishhub.app'
const PAGE_PATH = '/international-school-igcse-english'
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`
const OG_IMAGE =
  '/api/og?title=IGCSE+English+for+international+schools&subtitle=Pearson+Edexcel+and+Cambridge+covered&level=igcse'

export const metadata: Metadata = {
  title: 'IGCSE English for international schools — The English Hub',
  description:
    'IGCSE English Literature and Language revision for British international schools worldwide. Pearson Edexcel 4ET1, 4EA1 and Cambridge 0500, 0990 covered.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'IGCSE English for international schools — The English Hub',
    description:
      'IGCSE English Literature and Language revision for British international schools worldwide. Pearson Edexcel 4ET1, 4EA1 and Cambridge 0500, 0990 covered.',
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'IGCSE English for international schools — Pearson Edexcel and Cambridge covered',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGCSE English for international schools — The English Hub',
    description:
      'IGCSE English Literature and Language revision for British international schools worldwide. Pearson Edexcel 4ET1, 4EA1 and Cambridge 0500, 0990 covered.',
    images: [OG_IMAGE],
  },
}

/* ───────────────────── FAQ data ───────────────────── */

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'Does the platform support multiple boards within one school licence?',
    answer:
      'Yes. A single department licence covers every board we publish. If half your cohort sits Cambridge 0500 and the other half sits Pearson Edexcel 4EA1, both groups work from the same licence — each student sees revision pages keyed to their own specification, and teachers can move between boards without switching account.',
  },
  {
    question:
      "How does AI marking handle international students whose first language isn't English?",
    answer:
      'The AI marks against the same mark scheme criteria the board uses, so feedback focuses on assessment objectives — reading, analysis, structure, vocabulary, and accuracy — rather than on whether English is a first language. EAL students often benefit because the feedback is specific (which sentence, which AO) rather than general. Teachers always review and can adjust marks before the student sees them.',
  },
  {
    question: 'Can we customise revision schedules for a longer or shorter academic year?',
    answer:
      'Revision content is on-demand rather than tied to a fixed UK academic calendar. Department leads pick which papers, set texts, and skills to prioritise; students work through them at their own pace. Schools running a Northern Hemisphere August–June year, a Southern Hemisphere January–November year, or a split-semester model all use the same library.',
  },
  {
    question: 'Is content available offline for schools with limited connectivity?',
    answer:
      'The platform is web-delivered and requires a connection to load pages, submit essays for AI marking, and sync teacher dashboards. Printable resources — model answers, mark-scheme breakdowns, practice papers — can be downloaded as PDFs in advance for use in classrooms with intermittent connectivity. We do not currently ship a fully offline app.',
  },
  {
    question: 'How do you handle GDPR and non-EU/UK data residency?',
    answer:
      'The English Hub is operated from the UK and applies UK GDPR standards to all accounts globally, regardless of where the school is based. Schools in jurisdictions with their own data-protection regimes (for example UAE, Singapore, or Hong Kong) can request a data-processing addendum before signing. Specific residency requirements should be raised during onboarding so we can confirm compatibility before contracts are issued.',
  },
]

/* ───────────────────── IGCSE specs ───────────────────── */

type Spec = {
  code: string
  name: string
  board: string
  blurb: string
  href: string
}

const SPECS: Spec[] = [
  {
    code: '4ET1',
    name: 'Pearson Edexcel IGCSE English Literature',
    board: 'Pearson Edexcel',
    blurb:
      'Closed-book examination covering an anthology, a modern drama or prose text, and a Shakespeare play. Two papers, with an optional coursework route.',
    href: '/igcse/edexcel',
  },
  {
    code: '4EA1',
    name: 'Pearson Edexcel IGCSE English Language A',
    board: 'Pearson Edexcel',
    blurb:
      'Anthology-based reading and writing exam with a transactional and imaginative writing component. Widely sat by international centres.',
    href: '/igcse/edexcel-lang',
  },
  {
    code: '0500',
    name: 'Cambridge IGCSE First Language English',
    board: 'Cambridge International',
    blurb:
      'Reading, directed writing, and composition across two papers. The default Cambridge route for first-language English speakers in international schools.',
    href: '/igcse/cambridge/0500',
  },
  {
    code: '0990',
    name: 'Cambridge IGCSE English Language (9–1)',
    board: 'Cambridge International',
    blurb:
      'The 9–1 graded sibling of 0500, with the same paper structure but reformed grade boundaries aligned to the UK reformed scale.',
    href: '/igcse/cambridge/0990',
  },
]

/* ───────────────────── Page ───────────────────── */

export default async function InternationalSchoolIgcsePage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <main className="min-h-screen bg-ink-950">
      <BreadcrumbJsonLd
        nonce={nonce}
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'International schools', url: PAGE_URL },
        ]}
      />
      <FAQPageJsonLd nonce={nonce} faqs={FAQS} />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section aria-labelledby="hero-heading" className="bg-ink-950 pb-10 sm:pb-14">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 pt-12 sm:pt-16">
          <nav className="mb-6 text-xs text-cream-200/55" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cream-50 underline-offset-4 hover:underline">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream-100/85">International schools</span>
          </nav>

          <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-3 text-emerald-300">
            For British international schools
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cream-50 leading-tight"
          >
            IGCSE English revision for British international schools
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-cream-100/80 leading-relaxed">
            One platform that covers Pearson Edexcel and Cambridge IGCSE English side by side —
            calibrated to mark schemes, exam-zone-agnostic, and built so a head of department can
            roll the same workflow across mixed-board cohorts.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/for-schools"
              className="inline-flex items-center gap-2 rounded-2xl bg-clay-300 px-5 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-clay-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              Department licence options <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/for-teachers"
              className="inline-flex items-center gap-2 rounded-2xl border border-cream-200/30 bg-cream-50/[0.04] px-5 py-3 text-sm font-medium text-cream-50 transition-colors hover:bg-cream-50/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-cream-200 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              For individual teachers
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why The English Hub ─────────────────────────────────────── */}
      <Section id="why">
        <Eyebrow tone="emerald">Why us</Eyebrow>
        <SectionHeading id="why-heading">
          Why The English Hub for international schools
        </SectionHeading>
        <Prose>
          <p>
            International English departments sit at an awkward intersection. The texts and
            specifications are British, the students often aren&rsquo;t, and the resources you can
            actually buy from UK publishers tend to assume a UK timetable, a UK calendar, and a
            UK-centric reference frame. The English Hub is built for the way British international
            schools actually run — not the way UK schools do.
          </p>
          <p>What that means in practice:</p>
          <ul>
            <li>
              <strong>Spec-aligned revision.</strong> Every revision page is keyed to one exam board
              and one paper. Cambridge 0500 students never see Pearson 4ET1 mark schemes by
              accident, and vice versa.
            </li>
            <li>
              <strong>AI-marked practice.</strong> Students submit essays, the AI marks against the
              correct board&rsquo;s assessment objectives, and the teacher reviews before the
              student sees the feedback. Removes the bottleneck of marking 60 mock essays in a week.
            </li>
            <li>
              <strong>Multi-board coverage in one product.</strong> Pearson Edexcel 4ET1, 4EA1, and
              Cambridge 0500, 0990 — covered in the same library, accessible from the same
              department licence.
            </li>
            <li>
              <strong>Exam-zone-agnostic content.</strong> Pages don&rsquo;t assume a UK-shaped
              academic year. Whether your students sit in May/June or November, the revision library
              works the same way.
            </li>
            <li>
              <strong>Calibrated to mark schemes.</strong> Model answers, AO weightings, and
              feedback rubrics are built from each board&rsquo;s published mark scheme — not from
              one teacher&rsquo;s house style.
            </li>
          </ul>
        </Prose>
      </Section>

      {/* ── Specs covered ──────────────────────────────────────────── */}
      <Section id="specs" divider>
        <Eyebrow tone="clay">Specifications</Eyebrow>
        <SectionHeading id="specs-heading">IGCSE English specs we cover</SectionHeading>
        <Prose>
          <p>
            Four IGCSE English specifications are the backbone of most British international school
            English departments. Every page on The English Hub is keyed to one of them — pick the
            spec your students sit and the rest follows.
          </p>
        </Prose>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {SPECS.map((spec) => (
            <Link
              key={spec.code}
              href={spec.href}
              className="group block rounded-2xl border border-cream-200/12 bg-cream-50/[0.03] p-5 transition-colors hover:border-clay-300/40 hover:bg-clay-300/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-clay-300">
                  {spec.board}
                </span>
                <span className="font-mono text-xs text-cream-200/60">{spec.code}</span>
              </div>
              <h3 className="mt-2 font-serif text-lg font-semibold text-cream-50 leading-snug">
                {spec.name}
              </h3>
              <p className="mt-2 text-sm text-cream-100/75 leading-relaxed">{spec.blurb}</p>
              <p className="mt-3 text-xs font-medium text-clay-300 group-hover:text-clay-200">
                Open hub <span aria-hidden="true">&rarr;</span>
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Curriculum coverage ────────────────────────────────────── */}
      <Section id="coverage" divider>
        <Eyebrow tone="emerald">Curriculum coverage</Eyebrow>
        <SectionHeading id="coverage-heading">
          Coverage across the British international school curriculum
        </SectionHeading>
        <Prose>
          <p>
            Most British international schools follow a recognisable shape — Key Stage 3 in the
            lower years, then either GCSE or IGCSE for the 14–16 cohort, depending on which exam
            zone the school enters. The English Hub is built around the same shape:
          </p>
          <ul>
            <li>
              <strong>Key Stage 3 (Years 7–9).</strong> Foundational reading, analysis, and writing
              skills. Schools running a UK-curriculum lower school can use these as the on-ramp to
              IGCSE. KS3-specific landing pages are still being added — for now, browse the full
              revision library for KS3 material.
            </li>
            <li>
              <strong>GCSE (for UK-curriculum branches).</strong> Schools whose 14–16 cohort sits UK
              GCSE rather than IGCSE — for example a campus aligned with a UK partner school — can
              use the AQA, Pearson Edexcel, OCR, and WJEC Eduqas hubs.
            </li>
            <li>
              <strong>IGCSE (the international standard).</strong> Pearson Edexcel and Cambridge
              International, the two specifications most British international schools enter. Linked
              above.
            </li>
          </ul>
          <p>
            Not sure which board your school enters? The{' '}
            <Link href="/board-select" className="underline underline-offset-4 hover:text-clay-300">
              board-select page
            </Link>{' '}
            walks through the options by level, or jump straight to the{' '}
            <Link href="/igcse" className="underline underline-offset-4 hover:text-clay-300">
              IGCSE hub
            </Link>{' '}
            if you already know it&rsquo;s IGCSE.
          </p>
        </Prose>
      </Section>

      {/* ── How department leads get started ──────────────────────── */}
      <Section id="get-started" divider>
        <Eyebrow tone="clay">For heads of department</Eyebrow>
        <SectionHeading id="get-started-heading">How department leads get started</SectionHeading>
        <Prose>
          <p>
            Rolling a new platform across an English department is rarely a same-day decision. We
            recommend a three-step plan that lets you trial the product on a single class before
            committing the whole faculty.
          </p>
        </Prose>

        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              n: '01',
              title: 'Pick your dominant board',
              body: 'Identify the IGCSE specification that the largest share of your cohort sits — usually Cambridge 0500/0990 or Pearson Edexcel 4ET1/4EA1. Start there. The other boards remain available within the same licence.',
            },
            {
              n: '02',
              title: 'Trial with a single class',
              body: 'Run one Year 10 or Year 11 group through the platform for a half-term — set practice papers, use AI marking on a mock essay, and review the analytics. No fabricated success stories — judge it on your own students.',
            },
            {
              n: '03',
              title: 'Roll across the department',
              body: 'Once the trial class has proof points your colleagues recognise, expand to the rest of the faculty under one department licence. Onboarding shifts from per-teacher to whole-team.',
            },
          ].map((step) => (
            <li
              key={step.n}
              className="rounded-2xl border border-cream-200/12 bg-cream-50/[0.03] p-5"
            >
              <span className="font-mono text-xs tracking-[0.14em] text-emerald-300">
                Step {step.n}
              </span>
              <h3 className="mt-2 font-serif text-lg font-semibold text-cream-50 leading-snug">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-cream-100/75 leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/for-schools"
            className="inline-flex items-center gap-2 rounded-2xl bg-clay-300 px-5 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-clay-200"
          >
            See department licence options <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/for-teachers"
            className="inline-flex items-center gap-2 rounded-2xl border border-cream-200/30 bg-cream-50/[0.04] px-5 py-3 text-sm font-medium text-cream-50 transition-colors hover:bg-cream-50/[0.08]"
          >
            Individual teacher plans
          </Link>
        </div>
      </Section>

      {/* ── Multi-board workflow ──────────────────────────────────── */}
      <Section id="multi-board" divider>
        <Eyebrow tone="emerald">Mixed cohorts</Eyebrow>
        <SectionHeading id="multi-board-heading">
          Multi-board international department workflow
        </SectionHeading>
        <Prose>
          <p>
            Plenty of British international schools don&rsquo;t enter every student for the same
            board. A school might run Cambridge 0500 as the default, but enter a small EAL cohort
            for Pearson 4EA1 because the anthology suits them better. Or it might be the opposite —
            Pearson dominant, with a Cambridge sub-group for legacy reasons.
          </p>
          <p>
            One department licence on The English Hub covers every IGCSE board we publish. There are
            no per-board upgrades and no second account to manage. Each student sees revision pages
            keyed to their own specification; each teacher can flip between boards from the same
            dashboard. The workflow looks the same whether you run one board or four.
          </p>
          <p>
            Pricing for a department licence depends on faculty size rather than board count — see
            the{' '}
            <Link href="/pricing" className="underline underline-offset-4 hover:text-clay-300">
              pricing page
            </Link>{' '}
            for the current rate, and{' '}
            <Link href="/for-schools" className="underline underline-offset-4 hover:text-clay-300">
              the schools page
            </Link>{' '}
            for the founding-schools programme if you&rsquo;re joining early.
          </p>
        </Prose>
      </Section>

      {/* ── FAQs ──────────────────────────────────────────────────── */}
      <Section id="faqs" divider>
        <Eyebrow tone="clay">FAQs</Eyebrow>
        <SectionHeading id="faqs-heading">Frequently asked questions</SectionHeading>

        <dl className="mt-8 space-y-6">
          {FAQS.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-cream-200/12 bg-cream-50/[0.03] p-5"
            >
              <dt className="font-serif text-lg font-semibold text-cream-50 leading-snug">
                {faq.question}
              </dt>
              <dd className="mt-2 text-sm text-cream-100/80 leading-relaxed">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ── CTA + Email capture ──────────────────────────────────── */}
      <Section id="cta" divider>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <Eyebrow tone="emerald">Next step</Eyebrow>
            <SectionHeading id="cta-heading">
              Bring The English Hub into your department
            </SectionHeading>
            <Prose>
              <p>
                If you&rsquo;re a head of English or a department lead, the fastest route is the{' '}
                <Link
                  href="/for-schools"
                  className="underline underline-offset-4 hover:text-clay-300"
                >
                  schools page
                </Link>{' '}
                — it covers licence shape, onboarding, and pricing. If you&rsquo;re a single teacher
                trialling for your own classes,{' '}
                <Link
                  href="/for-teachers"
                  className="underline underline-offset-4 hover:text-clay-300"
                >
                  start on the teacher plan
                </Link>
                .
              </p>
            </Prose>
          </div>
          <div className="flex justify-center lg:justify-end"></div>
        </div>
      </Section>
    </main>
  )
}

/* ───────────────────── Layout helpers ───────────────────── */

function Section({
  id,
  divider = false,
  children,
}: {
  id: string
  divider?: boolean
  children: React.ReactNode
}) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className={`bg-ink-950 ${
        divider ? 'border-t border-cream-200/10 pt-12 sm:pt-16' : 'pt-4 sm:pt-6'
      } pb-12 sm:pb-16`}
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">{children}</div>
    </section>
  )
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-cream-50 leading-tight"
    >
      {children}
    </h2>
  )
}

function Eyebrow({ children, tone }: { children: React.ReactNode; tone: 'emerald' | 'clay' }) {
  const colour = tone === 'emerald' ? 'text-emerald-300' : 'text-clay-300'
  return (
    <p className={`font-mono text-[11px] tracking-[0.14em] uppercase mb-3 ${colour}`}>{children}</p>
  )
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 space-y-4 text-sm sm:text-base text-cream-100/80 leading-relaxed [&_strong]:text-cream-50 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-clay-300">
      {children}
    </div>
  )
}
