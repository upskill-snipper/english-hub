import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'
import { tMany } from '@/lib/i18n/t'
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

/* ───────────────────── IGCSE specs (codes/hrefs are not translated) ─ */

type Spec = {
  code: string
  href: string
  nameKey: string
  blurbKey: string
  board: 'Pearson Edexcel' | 'Cambridge International'
}

const SPECS: Spec[] = [
  {
    code: '4ET1',
    href: '/igcse/edexcel',
    nameKey: 'intl.spec.4et1.name',
    blurbKey: 'intl.spec.4et1.blurb',
    board: 'Pearson Edexcel',
  },
  {
    code: '4EA1',
    href: '/igcse/edexcel-lang',
    nameKey: 'intl.spec.4ea1.name',
    blurbKey: 'intl.spec.4ea1.blurb',
    board: 'Pearson Edexcel',
  },
  {
    code: '0500',
    href: '/igcse/cambridge/0500',
    nameKey: 'intl.spec.0500.name',
    blurbKey: 'intl.spec.0500.blurb',
    board: 'Cambridge International',
  },
  {
    code: '0990',
    href: '/igcse/cambridge/0990',
    nameKey: 'intl.spec.0990.name',
    blurbKey: 'intl.spec.0990.blurb',
    board: 'Cambridge International',
  },
]

/* ───────────────────── Page ───────────────────── */

export default async function InternationalSchoolIgcsePage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const keys = [
    'qatar.breadcrumb_home',
    'intl.breadcrumb_current',
    'intl.eyebrow_hero',
    'intl.h1',
    'intl.intro',
    'intl.cta.licence',
    'intl.cta.teachers',
    'intl.why.eyebrow',
    'intl.why.h2',
    'intl.why.body1',
    'intl.why.body2_intro',
    'intl.why.li1_strong',
    'intl.why.li1',
    'intl.why.li2_strong',
    'intl.why.li2',
    'intl.why.li3_strong',
    'intl.why.li3',
    'intl.why.li4_strong',
    'intl.why.li4',
    'intl.why.li5_strong',
    'intl.why.li5',
    'intl.specs.eyebrow',
    'intl.specs.h2',
    'intl.specs.intro',
    'intl.specs.open_hub',
    'intl.spec.4et1.name',
    'intl.spec.4et1.blurb',
    'intl.spec.4ea1.name',
    'intl.spec.4ea1.blurb',
    'intl.spec.0500.name',
    'intl.spec.0500.blurb',
    'intl.spec.0990.name',
    'intl.spec.0990.blurb',
    'intl.coverage.eyebrow',
    'intl.coverage.h2',
    'intl.coverage.intro',
    'intl.coverage.ks3_strong',
    'intl.coverage.ks3_body',
    'intl.coverage.gcse_strong',
    'intl.coverage.gcse_body',
    'intl.coverage.igcse_strong',
    'intl.coverage.igcse_body',
    'intl.coverage.note',
    'intl.coverage.note_link1',
    'intl.coverage.note_mid',
    'intl.coverage.note_link2',
    'intl.coverage.note_end',
    'intl.start.eyebrow',
    'intl.start.h2',
    'intl.start.intro',
    'intl.start.step1.title',
    'intl.start.step1.body',
    'intl.start.step2.title',
    'intl.start.step2.body',
    'intl.start.step3.title',
    'intl.start.step3.body',
    'intl.start.step_label',
    'intl.start.cta1',
    'intl.start.cta2',
    'intl.multi.eyebrow',
    'intl.multi.h2',
    'intl.multi.body1',
    'intl.multi.body2',
    'intl.multi.body3_pre',
    'intl.multi.body3_link1',
    'intl.multi.body3_mid',
    'intl.multi.body3_link2',
    'intl.multi.body3_end',
    'intl.faqs.eyebrow',
    'intl.faqs.h2',
    'intl.cta_final.eyebrow',
    'intl.cta_final.h2',
    'intl.cta_final.body_pre',
    'intl.cta_final.body_link1',
    'intl.cta_final.body_mid',
    'intl.cta_final.body_link2',
    'intl.faq.q1',
    'intl.faq.a1',
    'intl.faq.q2',
    'intl.faq.a2',
    'intl.faq.q3',
    'intl.faq.a3',
    'intl.faq.q4',
    'intl.faq.a4',
    'intl.faq.q5',
    'intl.faq.a5',
  ]
  const v = await tMany(keys)
  // Build a dictionary keyed by index for readability
  const [
    bcHome,
    bcCurrent,
    eyebrowHero,
    h1,
    intro,
    ctaLicence,
    ctaTeachers,
    whyEyebrow,
    whyH2,
    whyBody1,
    whyBody2Intro,
    whyLi1Strong,
    whyLi1,
    whyLi2Strong,
    whyLi2,
    whyLi3Strong,
    whyLi3,
    whyLi4Strong,
    whyLi4,
    whyLi5Strong,
    whyLi5,
    specsEyebrow,
    specsH2,
    specsIntro,
    specsOpenHub,
    spec4et1Name,
    spec4et1Blurb,
    spec4ea1Name,
    spec4ea1Blurb,
    spec0500Name,
    spec0500Blurb,
    spec0990Name,
    spec0990Blurb,
    coverageEyebrow,
    coverageH2,
    coverageIntro,
    coverageKs3Strong,
    coverageKs3Body,
    coverageGcseStrong,
    coverageGcseBody,
    coverageIgcseStrong,
    coverageIgcseBody,
    coverageNote,
    coverageNoteLink1,
    coverageNoteMid,
    coverageNoteLink2,
    coverageNoteEnd,
    startEyebrow,
    startH2,
    startIntro,
    startStep1Title,
    startStep1Body,
    startStep2Title,
    startStep2Body,
    startStep3Title,
    startStep3Body,
    startStepLabel,
    startCta1,
    startCta2,
    multiEyebrow,
    multiH2,
    multiBody1,
    multiBody2,
    multiBody3Pre,
    multiBody3Link1,
    multiBody3Mid,
    multiBody3Link2,
    multiBody3End,
    faqsEyebrow,
    faqsH2,
    ctaFinalEyebrow,
    ctaFinalH2,
    ctaFinalBodyPre,
    ctaFinalLink1,
    ctaFinalBodyMid,
    ctaFinalLink2,
    faqQ1,
    faqA1,
    faqQ2,
    faqA2,
    faqQ3,
    faqA3,
    faqQ4,
    faqA4,
    faqQ5,
    faqA5,
  ] = v

  // Map spec key → resolved name/blurb for the SPECS grid
  const specNames: Record<string, string> = {
    'intl.spec.4et1.name': spec4et1Name,
    'intl.spec.4et1.blurb': spec4et1Blurb,
    'intl.spec.4ea1.name': spec4ea1Name,
    'intl.spec.4ea1.blurb': spec4ea1Blurb,
    'intl.spec.0500.name': spec0500Name,
    'intl.spec.0500.blurb': spec0500Blurb,
    'intl.spec.0990.name': spec0990Name,
    'intl.spec.0990.blurb': spec0990Blurb,
  }

  const FAQS: { question: string; answer: string }[] = [
    { question: faqQ1, answer: faqA1 },
    { question: faqQ2, answer: faqA2 },
    { question: faqQ3, answer: faqA3 },
    { question: faqQ4, answer: faqA4 },
    { question: faqQ5, answer: faqA5 },
  ]

  const steps = [
    { n: '01', title: startStep1Title, body: startStep1Body },
    { n: '02', title: startStep2Title, body: startStep2Body },
    { n: '03', title: startStep3Title, body: startStep3Body },
  ]

  return (
    <main className="min-h-screen bg-ink-950">
      <BreadcrumbJsonLd
        nonce={nonce}
        items={[
          { name: bcHome, url: SITE_URL },
          { name: bcCurrent, url: PAGE_URL },
        ]}
      />
      <FAQPageJsonLd nonce={nonce} faqs={FAQS} />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section aria-labelledby="hero-heading" className="bg-ink-950 pb-10 sm:pb-14">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 pt-12 sm:pt-16">
          <nav className="mb-6 text-xs text-cream-200/55" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cream-50 underline-offset-4 hover:underline">
              {bcHome}
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream-100/85">{bcCurrent}</span>
          </nav>

          <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-3 text-emerald-300">
            {eyebrowHero}
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cream-50 leading-tight"
          >
            {h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-cream-100/80 leading-relaxed">
            {intro}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/for-schools"
              className="inline-flex items-center gap-2 rounded-2xl bg-clay-300 px-5 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-clay-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              {ctaLicence} <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/for-teachers"
              className="inline-flex items-center gap-2 rounded-2xl border border-cream-200/30 bg-cream-50/[0.04] px-5 py-3 text-sm font-medium text-cream-50 transition-colors hover:bg-cream-50/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-cream-200 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              {ctaTeachers}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why ─────────────────────────────────────────────────────── */}
      <Section id="why">
        <Eyebrow tone="emerald">{whyEyebrow}</Eyebrow>
        <SectionHeading id="why-heading">{whyH2}</SectionHeading>
        <Prose>
          <p>{whyBody1}</p>
          <p>{whyBody2Intro}</p>
          <ul>
            <li>
              <strong>{whyLi1Strong}</strong> {whyLi1}
            </li>
            <li>
              <strong>{whyLi2Strong}</strong> {whyLi2}
            </li>
            <li>
              <strong>{whyLi3Strong}</strong> {whyLi3}
            </li>
            <li>
              <strong>{whyLi4Strong}</strong> {whyLi4}
            </li>
            <li>
              <strong>{whyLi5Strong}</strong> {whyLi5}
            </li>
          </ul>
        </Prose>
      </Section>

      {/* ── Specs ──────────────────────────────────────────────────── */}
      <Section id="specs" divider>
        <Eyebrow tone="clay">{specsEyebrow}</Eyebrow>
        <SectionHeading id="specs-heading">{specsH2}</SectionHeading>
        <Prose>
          <p>{specsIntro}</p>
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
                {specNames[spec.nameKey]}
              </h3>
              <p className="mt-2 text-sm text-cream-100/75 leading-relaxed">
                {specNames[spec.blurbKey]}
              </p>
              <p className="mt-3 text-xs font-medium text-clay-300 group-hover:text-clay-200">
                {specsOpenHub}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Coverage ───────────────────────────────────────────────── */}
      <Section id="coverage" divider>
        <Eyebrow tone="emerald">{coverageEyebrow}</Eyebrow>
        <SectionHeading id="coverage-heading">{coverageH2}</SectionHeading>
        <Prose>
          <p>{coverageIntro}</p>
          <ul>
            <li>
              <strong>{coverageKs3Strong}</strong> {coverageKs3Body}
            </li>
            <li>
              <strong>{coverageGcseStrong}</strong> {coverageGcseBody}
            </li>
            <li>
              <strong>{coverageIgcseStrong}</strong> {coverageIgcseBody}
            </li>
          </ul>
          <p>
            {coverageNote}{' '}
            <Link href="/board-select" className="underline underline-offset-4 hover:text-clay-300">
              {coverageNoteLink1}
            </Link>
            {coverageNoteMid}
            <Link href="/igcse" className="underline underline-offset-4 hover:text-clay-300">
              {coverageNoteLink2}
            </Link>
            {coverageNoteEnd}
          </p>
        </Prose>
      </Section>

      {/* ── Get started ────────────────────────────────────────────── */}
      <Section id="get-started" divider>
        <Eyebrow tone="clay">{startEyebrow}</Eyebrow>
        <SectionHeading id="get-started-heading">{startH2}</SectionHeading>
        <Prose>
          <p>{startIntro}</p>
        </Prose>

        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-2xl border border-cream-200/12 bg-cream-50/[0.03] p-5"
            >
              <span className="font-mono text-xs tracking-[0.14em] text-emerald-300">
                {startStepLabel} {step.n}
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
            {startCta1} <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/for-teachers"
            className="inline-flex items-center gap-2 rounded-2xl border border-cream-200/30 bg-cream-50/[0.04] px-5 py-3 text-sm font-medium text-cream-50 transition-colors hover:bg-cream-50/[0.08]"
          >
            {startCta2}
          </Link>
        </div>
      </Section>

      {/* ── Multi-board workflow ──────────────────────────────────── */}
      <Section id="multi-board" divider>
        <Eyebrow tone="emerald">{multiEyebrow}</Eyebrow>
        <SectionHeading id="multi-board-heading">{multiH2}</SectionHeading>
        <Prose>
          <p>{multiBody1}</p>
          <p>{multiBody2}</p>
          <p>
            {multiBody3Pre}
            <Link href="/pricing" className="underline underline-offset-4 hover:text-clay-300">
              {multiBody3Link1}
            </Link>
            {multiBody3Mid}
            <Link href="/for-schools" className="underline underline-offset-4 hover:text-clay-300">
              {multiBody3Link2}
            </Link>
            {multiBody3End}
          </p>
        </Prose>
      </Section>

      {/* ── FAQs ──────────────────────────────────────────────────── */}
      <Section id="faqs" divider>
        <Eyebrow tone="clay">{faqsEyebrow}</Eyebrow>
        <SectionHeading id="faqs-heading">{faqsH2}</SectionHeading>

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

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <Section id="cta" divider>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <Eyebrow tone="emerald">{ctaFinalEyebrow}</Eyebrow>
            <SectionHeading id="cta-heading">{ctaFinalH2}</SectionHeading>
            <Prose>
              <p>
                {ctaFinalBodyPre}
                <Link
                  href="/for-schools"
                  className="underline underline-offset-4 hover:text-clay-300"
                >
                  {ctaFinalLink1}
                </Link>
                {ctaFinalBodyMid}
                <Link
                  href="/for-teachers"
                  className="underline underline-offset-4 hover:text-clay-300"
                >
                  {ctaFinalLink2}
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
