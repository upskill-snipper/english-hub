import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  FileText,
  GraduationCap,
  Languages,
  ListChecks,
  Plane,
  School,
  Sparkles,
  Target,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'

// ─── IELTS → UK university admissions hub — SEO landing page ─────────────────
// The entry point to the admissions track that sits alongside the IELTS
// learning loop. Server component so all guidance copy renders statically for
// SEO. Exactly one <h1>. Section-level <metadata> + canonical live in
// layout.tsx. All content is ORIGINAL preparation guidance written for Gulf
// students applying to the UK — it never implies official UCAS / university
// affiliation and presents bands/dates as typical, not guaranteed.
//
// Bilingual (English + Khaleeji Arabic) via `await t('ielts.admissions.*')`;
// keys live in src/lib/i18n/dictionary-ielts-admissions.ts. Translated copy is
// resolved up-front below so the visible UI and the FAQ/Breadcrumb JSON-LD all
// carry the active locale's strings.
// ────────────────────────────────────────────────────────────────────────────

// Interpolated values rendered through {token} placeholders so the surrounding
// phrases stay translatable. Brand/numeric tokens only.
const TIMELINE_MONTHS = '18'
const PS_CHAR_LIMIT = '4,000'
const PS_LINE_LIMIT = '47'

export default async function IeltsAdmissionsHubPage() {
  // Resolve every visible string once (the locale read is cached per request).
  const [
    backToIelts,
    bcHome,
    bcIelts,
    bcAdmissions,
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    ctaCoach,
    ctaPractiseWriting,
    heroDisclaimer,
    glanceEyebrow,
    glanceTitle,
    glanceCourseTitle,
    glanceCourseBody,
    glanceStatementTitle,
    glanceStatementBody,
    glanceBandTitle,
    glanceBandBody,
    glanceVisaTitle,
    glanceVisaBody,
    ucasEyebrow,
    ucasTitle,
    ucasStep1Title,
    ucasStep1Body,
    ucasStep2Title,
    ucasStep2Body,
    ucasStep3Title,
    ucasStep3Body,
    ucasStep4Title,
    ucasStep4Body,
    ucasStep5Title,
    ucasStep5Body,
    timelineEyebrow,
    timelineTitleRaw,
    timelineRow1When,
    timelineRow1What,
    timelineRow2When,
    timelineRow2What,
    timelineRow3When,
    timelineRow3What,
    timelineRow4When,
    timelineRow4What,
    timelineRow5When,
    timelineRow5What,
    timelineRow6When,
    timelineRow6What,
    timelineNote,
    englishEyebrow,
    englishTitle,
    englishIntro,
    englishColBand,
    englishColComponent,
    englishColCourses,
    tier1Detail,
    tier1Courses,
    tier2Detail,
    tier2Courses,
    tier3Detail,
    tier3Courses,
    tier4Detail,
    tier4Courses,
    englishCtaText,
    englishCtaButton,
    psEyebrow,
    psTitle,
    psIntroRaw,
    psListLead,
    psPoint1,
    psPoint2,
    psPoint3,
    psPoint4,
    psPoint5,
    psCardTitle,
    psCardBody,
    psCardButton,
    visaEyebrow,
    visaTitle,
    visaBody,
    visaButton,
    visaDisclaimer,
    faqEyebrow,
    faqTitle,
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
    closeTitle,
    closeBody,
    closeBack,
  ] = await Promise.all([
    t('ielts.admissions.back_to_ielts'),
    t('ielts.admissions.breadcrumb.home'),
    t('ielts.admissions.breadcrumb.ielts'),
    t('ielts.admissions.breadcrumb.admissions'),
    t('ielts.admissions.hub.eyebrow'),
    t('ielts.admissions.hub.title'),
    t('ielts.admissions.hub.subtitle'),
    t('ielts.admissions.hub.cta.coach'),
    t('ielts.admissions.hub.cta.practise_writing'),
    t('ielts.admissions.hub.disclaimer'),
    t('ielts.admissions.hub.glance.eyebrow'),
    t('ielts.admissions.hub.glance.title'),
    t('ielts.admissions.hub.glance.course.title'),
    t('ielts.admissions.hub.glance.course.body'),
    t('ielts.admissions.hub.glance.statement.title'),
    t('ielts.admissions.hub.glance.statement.body'),
    t('ielts.admissions.hub.glance.band.title'),
    t('ielts.admissions.hub.glance.band.body'),
    t('ielts.admissions.hub.glance.visa.title'),
    t('ielts.admissions.hub.glance.visa.body'),
    t('ielts.admissions.hub.ucas.eyebrow'),
    t('ielts.admissions.hub.ucas.title'),
    t('ielts.admissions.hub.ucas.step1.title'),
    t('ielts.admissions.hub.ucas.step1.body'),
    t('ielts.admissions.hub.ucas.step2.title'),
    t('ielts.admissions.hub.ucas.step2.body'),
    t('ielts.admissions.hub.ucas.step3.title'),
    t('ielts.admissions.hub.ucas.step3.body'),
    t('ielts.admissions.hub.ucas.step4.title'),
    t('ielts.admissions.hub.ucas.step4.body'),
    t('ielts.admissions.hub.ucas.step5.title'),
    t('ielts.admissions.hub.ucas.step5.body'),
    t('ielts.admissions.hub.timeline.eyebrow'),
    t('ielts.admissions.hub.timeline.title'),
    t('ielts.admissions.hub.timeline.row1.when'),
    t('ielts.admissions.hub.timeline.row1.what'),
    t('ielts.admissions.hub.timeline.row2.when'),
    t('ielts.admissions.hub.timeline.row2.what'),
    t('ielts.admissions.hub.timeline.row3.when'),
    t('ielts.admissions.hub.timeline.row3.what'),
    t('ielts.admissions.hub.timeline.row4.when'),
    t('ielts.admissions.hub.timeline.row4.what'),
    t('ielts.admissions.hub.timeline.row5.when'),
    t('ielts.admissions.hub.timeline.row5.what'),
    t('ielts.admissions.hub.timeline.row6.when'),
    t('ielts.admissions.hub.timeline.row6.what'),
    t('ielts.admissions.hub.timeline.note'),
    t('ielts.admissions.hub.english.eyebrow'),
    t('ielts.admissions.hub.english.title'),
    t('ielts.admissions.hub.english.intro'),
    t('ielts.admissions.hub.english.col.band'),
    t('ielts.admissions.hub.english.col.component'),
    t('ielts.admissions.hub.english.col.courses'),
    t('ielts.admissions.hub.english.tier1.detail'),
    t('ielts.admissions.hub.english.tier1.courses'),
    t('ielts.admissions.hub.english.tier2.detail'),
    t('ielts.admissions.hub.english.tier2.courses'),
    t('ielts.admissions.hub.english.tier3.detail'),
    t('ielts.admissions.hub.english.tier3.courses'),
    t('ielts.admissions.hub.english.tier4.detail'),
    t('ielts.admissions.hub.english.tier4.courses'),
    t('ielts.admissions.hub.english.cta.text'),
    t('ielts.admissions.hub.english.cta.button'),
    t('ielts.admissions.hub.ps.eyebrow'),
    t('ielts.admissions.hub.ps.title'),
    t('ielts.admissions.hub.ps.intro'),
    t('ielts.admissions.hub.ps.list_lead'),
    t('ielts.admissions.hub.ps.point1'),
    t('ielts.admissions.hub.ps.point2'),
    t('ielts.admissions.hub.ps.point3'),
    t('ielts.admissions.hub.ps.point4'),
    t('ielts.admissions.hub.ps.point5'),
    t('ielts.admissions.hub.ps.card.title'),
    t('ielts.admissions.hub.ps.card.body'),
    t('ielts.admissions.hub.ps.card.button'),
    t('ielts.admissions.hub.visa.eyebrow'),
    t('ielts.admissions.hub.visa.title'),
    t('ielts.admissions.hub.visa.body'),
    t('ielts.admissions.hub.visa.button'),
    t('ielts.admissions.hub.visa.disclaimer'),
    t('ielts.admissions.hub.faq.eyebrow'),
    t('ielts.admissions.hub.faq.title'),
    t('ielts.admissions.hub.faq.q1'),
    t('ielts.admissions.hub.faq.a1'),
    t('ielts.admissions.hub.faq.q2'),
    t('ielts.admissions.hub.faq.a2'),
    t('ielts.admissions.hub.faq.q3'),
    t('ielts.admissions.hub.faq.a3'),
    t('ielts.admissions.hub.faq.q4'),
    t('ielts.admissions.hub.faq.a4'),
    t('ielts.admissions.hub.faq.q5'),
    t('ielts.admissions.hub.faq.a5'),
    t('ielts.admissions.hub.cta.title'),
    t('ielts.admissions.hub.cta.body'),
    t('ielts.admissions.hub.cta.back'),
  ])

  const timelineTitle = timelineTitleRaw.replace('{token}', TIMELINE_MONTHS)
  const psIntro = psIntroRaw.replace('{chars}', PS_CHAR_LIMIT).replace('{lines}', PS_LINE_LIMIT)

  // Typical IELTS Academic requirements by course type. INDICATIVE only — every
  // university and course sets its own; students must always check the specific
  // course page. Overall band, then the typical per-component minimum.
  const REQUIREMENT_TIERS: { band: string; detail: string; courses: string }[] = [
    { band: '7.0–7.5+', detail: tier1Detail, courses: tier1Courses },
    { band: '6.5', detail: tier2Detail, courses: tier2Courses },
    { band: '6.0', detail: tier3Detail, courses: tier3Courses },
    { band: '5.0–5.5', detail: tier4Detail, courses: tier4Courses },
  ]

  // The five UCAS steps.
  const UCAS_STEPS: { title: string; body: string }[] = [
    { title: ucasStep1Title, body: ucasStep1Body },
    { title: ucasStep2Title, body: ucasStep2Body },
    { title: ucasStep3Title, body: ucasStep3Body },
    { title: ucasStep4Title, body: ucasStep4Body },
    { title: ucasStep5Title, body: ucasStep5Body },
  ]

  const TIMELINE: { when: string; what: string }[] = [
    { when: timelineRow1When, what: timelineRow1What },
    { when: timelineRow2When, what: timelineRow2What },
    { when: timelineRow3When, what: timelineRow3What },
    { when: timelineRow4When, what: timelineRow4What },
    { when: timelineRow5When, what: timelineRow5What },
    { when: timelineRow6When, what: timelineRow6What },
  ]

  const PS_POINTS = [psPoint1, psPoint2, psPoint3, psPoint4, psPoint5]

  // FAQ content — surfaced both visually and as FAQ schema (localized).
  const FAQS: { question: string; answer: string }[] = [
    { question: faqQ1, answer: faqA1 },
    { question: faqQ2, answer: faqA2 },
    { question: faqQ3, answer: faqA3 },
    { question: faqQ4, answer: faqA4 },
    { question: faqQ5, answer: faqA5 },
  ]

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: bcHome, url: 'https://theenglishhub.app' },
          { name: bcIelts, url: 'https://theenglishhub.app/ielts' },
          { name: bcAdmissions, url: 'https://theenglishhub.app/ielts/admissions' },
        ]}
      />
      <FAQPageJsonLd faqs={FAQS} />

      <div className="mx-auto max-w-5xl px-4 py-8 pb-20 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 text-muted-foreground"
          render={<Link href="/ielts" />}
        >
          <ArrowLeft className="size-3.5" />
          {backToIelts}
        </Button>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="mt-4 rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-sky-500/[0.05] p-6 sm:p-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
            <GraduationCap className="size-3.5" />
            {heroEyebrow}
          </span>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            {heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href="/ielts/admissions/personal-statement" />}
            >
              <Sparkles className="size-4" />
              {ctaCoach}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href="/ielts/writing" />}
            >
              {ctaPractiseWriting}
              <ArrowRight className="size-4" />
            </Button>
          </div>
          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-muted-foreground/80">
            {heroDisclaimer}
          </p>
        </section>

        {/* ── The UK pathway at a glance ────────────────────────────── */}
        <section aria-labelledby="pathway-heading" className="mt-14">
          <SectionHeading id="pathway-heading" eyebrow={glanceEyebrow} title={glanceTitle} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: School, title: glanceCourseTitle, body: glanceCourseBody },
              { icon: FileText, title: glanceStatementTitle, body: glanceStatementBody },
              { icon: Languages, title: glanceBandTitle, body: glanceBandBody },
              { icon: Plane, title: glanceVisaTitle, body: glanceVisaBody },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── UCAS process ──────────────────────────────────────────── */}
        <section aria-labelledby="ucas-heading" className="mt-16">
          <SectionHeading id="ucas-heading" eyebrow={ucasEyebrow} title={ucasTitle} />
          <ol className="mt-8 space-y-4">
            {UCAS_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Timeline ──────────────────────────────────────────────── */}
        <section aria-labelledby="timeline-heading" className="mt-16">
          <SectionHeading id="timeline-heading" eyebrow={timelineEyebrow} title={timelineTitle} />
          <div className="mt-8 space-y-3">
            {TIMELINE.map((row) => (
              <div
                key={row.when}
                className="flex flex-col gap-1 rounded-xl border border-border/60 bg-card p-4 sm:flex-row sm:gap-5"
              >
                <div className="flex shrink-0 items-center gap-2 sm:w-48">
                  <CalendarClock className="size-4 text-clay-500" aria-hidden />
                  <span className="text-sm font-semibold text-foreground">{row.when}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{row.what}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground/80">{timelineNote}</p>
        </section>

        {/* ── English-language requirements ─────────────────────────── */}
        <section aria-labelledby="english-heading" className="mt-16">
          <SectionHeading id="english-heading" eyebrow={englishEyebrow} title={englishTitle} />
          <p
            className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground [&_strong]:text-foreground"
            dangerouslySetInnerHTML={{ __html: englishIntro }}
          />
          <div className="mt-8 overflow-hidden rounded-2xl border border-border/60">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-4 py-3 font-semibold">{englishColBand}</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell">
                    {englishColComponent}
                  </th>
                  <th className="px-4 py-3 font-semibold">{englishColCourses}</th>
                </tr>
              </thead>
              <tbody>
                {REQUIREMENT_TIERS.map((tier) => (
                  <tr key={tier.band} className="border-t border-border/60 align-top">
                    <td className="px-4 py-4">
                      <span className="font-heading text-xl font-bold text-foreground">
                        {tier.band}
                      </span>
                      <span className="mt-0.5 block text-[11px] text-muted-foreground sm:hidden">
                        {tier.detail}
                      </span>
                    </td>
                    <td className="hidden px-4 py-4 text-sm text-muted-foreground sm:table-cell">
                      {tier.detail}
                    </td>
                    <td className="px-4 py-4 text-sm leading-relaxed text-muted-foreground">
                      {tier.courses}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-col items-start gap-3 rounded-2xl border border-primary/20 bg-primary/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Target className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <p className="text-sm leading-relaxed text-foreground">{englishCtaText}</p>
            </div>
            <Button render={<Link href="/ielts" />} className="shrink-0">
              {englishCtaButton}
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>

        {/* ── Personal statement ────────────────────────────────────── */}
        <section aria-labelledby="ps-heading" className="mt-16">
          <SectionHeading id="ps-heading" eyebrow={psEyebrow} title={psTitle} />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>{psIntro}</p>
              <p>{psListLead}</p>
              <ul className="space-y-2">
                {PS_POINTS.map((point) => (
                  <li key={point} className="flex gap-2 text-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" aria-hidden />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-sky-500/20 bg-sky-500/[0.03] p-6">
              <div className="flex items-center gap-2">
                <ListChecks className="size-5 text-sky-400" aria-hidden />
                <h3 className="font-serif text-lg font-semibold text-foreground">{psCardTitle}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{psCardBody}</p>
              <Button
                className="mt-5 w-full"
                render={<Link href="/ielts/admissions/personal-statement" />}
              >
                <Sparkles className="size-4" />
                {psCardButton}
              </Button>
            </div>
          </div>
        </section>

        {/* ── Student visa ──────────────────────────────────────────── */}
        <section aria-labelledby="visa-heading" className="mt-16">
          <SectionHeading id="visa-heading" eyebrow={visaEyebrow} title={visaTitle} />
          <div className="mt-8 rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            <p
              className="text-sm leading-relaxed text-muted-foreground [&_strong]:text-foreground"
              dangerouslySetInnerHTML={{ __html: visaBody }}
            />
            <div className="mt-5">
              <Button variant="outline" render={<Link href="/ielts/admissions/student-visa" />}>
                <Plane className="size-3.5" />
                {visaButton}
              </Button>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground/80">
              {visaDisclaimer}
            </p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section aria-labelledby="faq-heading" className="mt-16">
          <SectionHeading id="faq-heading" eyebrow={faqEyebrow} title={faqTitle} />
          <div className="mt-8 space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border/60 bg-card p-5 [&_summary]:cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-3 font-serif text-base font-semibold text-foreground marker:content-['']">
                  {faq.question}
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Closing CTA ───────────────────────────────────────────── */}
        <section aria-labelledby="cta-heading" className="mt-16">
          <div className="rounded-2xl border border-border/60 bg-muted/30 px-6 py-12 text-center sm:px-10">
            <h2
              id="cta-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {closeTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {closeBody}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 gap-2 px-7 text-base"
                render={<Link href="/ielts/admissions/personal-statement" />}
              >
                <Sparkles className="size-4" />
                {ctaCoach}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 gap-2 px-7 text-base"
                render={<Link href="/ielts" />}
              >
                {closeBack}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

// ─── Shared section heading ──────────────────────────────────────────────────

function SectionHeading({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
    </div>
  )
}
