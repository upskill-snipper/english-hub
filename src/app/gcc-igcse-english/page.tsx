import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'
import { tMany } from '@/lib/i18n/t'

/* ───────────────────── Metadata ───────────────────── */

const SITE_URL = 'https://theenglishhub.app'
const PAGE_URL = `${SITE_URL}/gcc-igcse-english`
const OG_IMAGE =
  '/api/og?title=IGCSE+English+revision+for+the+GCC&subtitle=Pearson+Edexcel+and+Cambridge+covered&level=igcse'

export const metadata: Metadata = {
  title: 'IGCSE English revision for the GCC',
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

/* ───────────────────── Page ───────────────────── */

export default async function GccIgcseEnglishPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const [
    bcHome,
    bcCurrent,
    eyebrow,
    h1,
    intro,
    ctaBoardSelect,
    ctaEdexcelHub,
    ctaCambridgeHub,
    curriculumH2,
    curriculumBody1,
    curriculumBody2,
    specsH2,
    specsIntro,
    spec4et1Title,
    spec4et1Body,
    spec4et1Link,
    spec4ea1Title,
    spec4ea1Body,
    spec4ea1Link,
    spec0500Title,
    spec0500Body,
    spec0500Link,
    spec0990Title,
    spec0990Body,
    spec0990Link,
    helpH2,
    helpIntro,
    helpLi1,
    helpLi2,
    helpLi3,
    helpLi4,
    helpJumpIn,
    tzH2,
    tzBody1,
    tzBody2,
    tzTipTitle,
    tzTipBody,
    weekH2,
    weekBody1,
    weekBody2,
    weekTipTitle,
    weekTipBody,
    faqH2,
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
    ctaH2,
    ctaBody,
    ctaButton,
    launchEyebrow,
    launchH2,
    launchBody,
  ] = await tMany([
    'qatar.breadcrumb_home',
    'gcc.breadcrumb_current',
    'gcc.eyebrow',
    'gcc.h1',
    'gcc.intro',
    'gcc.cta.board_select',
    'gcc.cta.edexcel_hub',
    'gcc.cta.cambridge_hub',
    'gcc.curriculum.h2',
    'gcc.curriculum.body1',
    'gcc.curriculum.body2',
    'gcc.specs.h2',
    'gcc.specs.intro',
    'gcc.specs.4et1.title',
    'gcc.specs.4et1.body',
    'gcc.specs.4et1_link',
    'gcc.specs.4ea1.title',
    'gcc.specs.4ea1.body',
    'gcc.specs.4ea1_link',
    'gcc.specs.0500.title',
    'gcc.specs.0500.body',
    'gcc.specs.0500_link',
    'gcc.specs.0990.title',
    'gcc.specs.0990.body',
    'gcc.specs.0990_link',
    'gcc.help.h2',
    'gcc.help.intro',
    'gcc.help.li1',
    'gcc.help.li2',
    'gcc.help.li3',
    'gcc.help.li4',
    'gcc.help.jump_in',
    'gcc.timezone.h2',
    'gcc.timezone.body1',
    'gcc.timezone.body2',
    'gcc.timezone.tip_title',
    'gcc.timezone.tip_body',
    'gcc.week.h2',
    'gcc.week.body1',
    'gcc.week.body2',
    'gcc.week.tip_title',
    'gcc.week.tip_body',
    'qatar.faq.h2',
    'gcc.faq.q1',
    'gcc.faq.a1',
    'gcc.faq.q2',
    'gcc.faq.a2',
    'gcc.faq.q3',
    'gcc.faq.a3',
    'gcc.faq.q4',
    'gcc.faq.a4',
    'gcc.faq.q5',
    'gcc.faq.a5',
    'gcc.cta.h2',
    'gcc.cta.body',
    'gcc.cta.button',
    'gcc.launch.eyebrow',
    'gcc.launch.h2',
    'gcc.launch.body',
  ])

  // Render bold-flagged markdown ish: **strong** -> <strong>. Keeps the
  // surrounding light-prose look without needing a markdown parser.
  function renderBold(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((p, i) => {
      const m = p.match(/^\*\*(.+)\*\*$/)
      return m ? (
        <strong key={i} className="text-cream-50">
          {m[1]}
        </strong>
      ) : (
        <span key={i}>{p}</span>
      )
    })
  }

  const FAQS: { question: string; answer: string }[] = [
    { question: faqQ1, answer: faqA1 },
    { question: faqQ2, answer: faqA2 },
    { question: faqQ3, answer: faqA3 },
    { question: faqQ4, answer: faqA4 },
    { question: faqQ5, answer: faqA5 },
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
      <section aria-labelledby="page-heading" className="bg-ink-950 pb-10 sm:pb-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-12 sm:pt-16">
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
            {eyebrow}
          </p>
          <h1
            id="page-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cream-50 leading-tight"
          >
            {h1}
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-cream-100/80 leading-relaxed">
            {intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/board-select"
              className="inline-flex items-center rounded-lg border border-emerald-400/40 bg-emerald-400/[0.08] px-4 py-2 text-sm font-medium text-emerald-200 transition-colors hover:bg-emerald-400/[0.12]"
            >
              {ctaBoardSelect}
            </Link>
            <Link
              href="/igcse/edexcel"
              className="inline-flex items-center rounded-lg border border-cream-200/20 bg-cream-50/[0.04] px-4 py-2 text-sm font-medium text-cream-100 transition-colors hover:border-cream-200/35 hover:bg-cream-50/[0.06]"
            >
              {ctaEdexcelHub}
            </Link>
            <Link
              href="/igcse/cambridge/0500"
              className="inline-flex items-center rounded-lg border border-cream-200/20 bg-cream-50/[0.04] px-4 py-2 text-sm font-medium text-cream-100 transition-colors hover:border-cream-200/35 hover:bg-cream-50/[0.06]"
            >
              {ctaCambridgeHub}
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
              {curriculumH2}
            </h2>
            <p>{curriculumBody1}</p>
            <p>{curriculumBody2}</p>
          </section>

          {/* Which IGCSE English specs */}
          <section aria-labelledby="specs-heading" className="space-y-4">
            <h2
              id="specs-heading"
              className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50"
            >
              {specsH2}
            </h2>
            <p>{specsIntro}</p>

            <div className="space-y-4">
              <div className="rounded-xl border border-cream-200/10 bg-cream-50/[0.02] p-5">
                <h3 className="font-serif text-lg font-semibold text-cream-50">{spec4et1Title}</h3>
                <p className="mt-2">
                  {spec4et1Body}{' '}
                  <Link
                    href="/igcse/edexcel"
                    className="text-emerald-300 underline-offset-4 hover:underline"
                  >
                    {spec4et1Link}
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-xl border border-cream-200/10 bg-cream-50/[0.02] p-5">
                <h3 className="font-serif text-lg font-semibold text-cream-50">{spec4ea1Title}</h3>
                <p className="mt-2">
                  {spec4ea1Body}{' '}
                  <Link
                    href="/igcse/edexcel-lang"
                    className="text-emerald-300 underline-offset-4 hover:underline"
                  >
                    {spec4ea1Link}
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-xl border border-cream-200/10 bg-cream-50/[0.02] p-5">
                <h3 className="font-serif text-lg font-semibold text-cream-50">{spec0500Title}</h3>
                <p className="mt-2">
                  {spec0500Body}{' '}
                  <Link
                    href="/igcse/cambridge/0500"
                    className="text-emerald-300 underline-offset-4 hover:underline"
                  >
                    {spec0500Link}
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-xl border border-cream-200/10 bg-cream-50/[0.02] p-5">
                <h3 className="font-serif text-lg font-semibold text-cream-50">{spec0990Title}</h3>
                <p className="mt-2">
                  {spec0990Body}{' '}
                  <Link
                    href="/igcse/cambridge/0990"
                    className="text-emerald-300 underline-offset-4 hover:underline"
                  >
                    {spec0990Link}
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
              {helpH2}
            </h2>
            <p>{helpIntro}</p>
            <ul className="list-disc space-y-2 pl-5 text-cream-100/85">
              <li>{renderBold(helpLi1)}</li>
              <li>{renderBold(helpLi2)}</li>
              <li>{renderBold(helpLi3)}</li>
              <li>{renderBold(helpLi4)}</li>
            </ul>
            <p>
              {helpJumpIn}{' '}
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
              , {/* or */}
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
              {tzH2}
            </h2>
            <p>{tzBody1}</p>
            <p>{tzBody2}</p>
            <div className="rounded-xl border border-cream-200/10 bg-cream-50/[0.02] p-5">
              <h3 className="font-serif text-lg font-semibold text-cream-50">{tzTipTitle}</h3>
              <p className="mt-2">{tzTipBody}</p>
            </div>
          </section>

          {/* Sunday-Thursday */}
          <section aria-labelledby="week-heading" className="space-y-4">
            <h2
              id="week-heading"
              className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50"
            >
              {weekH2}
            </h2>
            <p>{weekBody1}</p>
            <p>{weekBody2}</p>
            <div className="rounded-xl border border-cream-200/10 bg-cream-50/[0.02] p-5">
              <h3 className="font-serif text-lg font-semibold text-cream-50">{weekTipTitle}</h3>
              <p className="mt-2">{weekTipBody}</p>
            </div>
          </section>

          {/* FAQs */}
          <section aria-labelledby="faq-heading" className="space-y-4">
            <h2
              id="faq-heading"
              className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50"
            >
              {faqH2}
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
              {ctaH2}
            </h2>
            <p>{ctaBody}</p>
            <div>
              <Link
                href="/board-select"
                className="inline-flex items-center rounded-lg border border-emerald-400/40 bg-emerald-400/[0.08] px-5 py-2.5 text-sm font-medium text-emerald-200 transition-colors hover:bg-emerald-400/[0.12]"
              >
                {ctaButton}
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
                {launchEyebrow}
              </p>
              <h2
                id="launch-list-heading"
                className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50 leading-tight"
              >
                {launchH2}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-cream-100/75 leading-relaxed">
                {launchBody}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
