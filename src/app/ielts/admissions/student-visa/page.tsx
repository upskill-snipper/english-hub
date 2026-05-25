import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Banknote,
  FileCheck2,
  Languages,
  Plane,
  ShieldAlert,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'

// ─── UK Student-visa basics - admissions sub-page (SEO) ──────────────────────
// A focused, original overview of the UK Student visa for Gulf students who
// have (or are about to receive) a UK university offer. Server component, one
// <h1>, canonical in the sibling layout.tsx. This is general PREPARATION
// information only - explicitly NOT immigration advice, and not affiliated with
// UK Visas and Immigration. Every section points the reader to GOV.UK for the
// authoritative, current rules.
//
// Bilingual (English + Khaleeji Arabic) via `await t('ielts.admissions.*')`;
// keys live in src/lib/i18n/dictionary-ielts-admissions.ts. Strings are
// resolved up-front so the visible UI and the FAQ/Breadcrumb JSON-LD carry the
// active locale.
// ────────────────────────────────────────────────────────────────────────────

export default async function StudentVisaBasicsPage() {
  const [
    bcHome,
    bcIelts,
    bcAdmissions,
    bcVisa,
    back,
    eyebrow,
    title,
    subtitle,
    notice,
    stepsEyebrow,
    stepsTitle,
    step1Title,
    step1Body,
    step2Title,
    step2Body,
    step3Title,
    step3Body,
    step4Title,
    step4Body,
    checklistEyebrow,
    checklistTitle,
    casLabel,
    casDetail,
    fundsLabel,
    fundsDetail,
    englishLabel,
    englishDetail,
    passportLabel,
    passportDetail,
    englishTitle,
    englishBody,
    englishButton,
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
  ] = await Promise.all([
    t('ielts.admissions.breadcrumb.home'),
    t('ielts.admissions.breadcrumb.ielts'),
    t('ielts.admissions.breadcrumb.admissions'),
    t('ielts.admissions.breadcrumb.visa'),
    t('ielts.admissions.visa.back'),
    t('ielts.admissions.visa.eyebrow'),
    t('ielts.admissions.visa.title'),
    t('ielts.admissions.visa.subtitle'),
    t('ielts.admissions.visa.notice'),
    t('ielts.admissions.visa.steps.eyebrow'),
    t('ielts.admissions.visa.steps.title'),
    t('ielts.admissions.visa.step1.title'),
    t('ielts.admissions.visa.step1.body'),
    t('ielts.admissions.visa.step2.title'),
    t('ielts.admissions.visa.step2.body'),
    t('ielts.admissions.visa.step3.title'),
    t('ielts.admissions.visa.step3.body'),
    t('ielts.admissions.visa.step4.title'),
    t('ielts.admissions.visa.step4.body'),
    t('ielts.admissions.visa.checklist.eyebrow'),
    t('ielts.admissions.visa.checklist.title'),
    t('ielts.admissions.visa.checklist.cas.label'),
    t('ielts.admissions.visa.checklist.cas.detail'),
    t('ielts.admissions.visa.checklist.funds.label'),
    t('ielts.admissions.visa.checklist.funds.detail'),
    t('ielts.admissions.visa.checklist.english.label'),
    t('ielts.admissions.visa.checklist.english.detail'),
    t('ielts.admissions.visa.checklist.passport.label'),
    t('ielts.admissions.visa.checklist.passport.detail'),
    t('ielts.admissions.visa.english.title'),
    t('ielts.admissions.visa.english.body'),
    t('ielts.admissions.visa.english.button'),
    t('ielts.admissions.visa.faq.eyebrow'),
    t('ielts.admissions.visa.faq.title'),
    t('ielts.admissions.visa.faq.q1'),
    t('ielts.admissions.visa.faq.a1'),
    t('ielts.admissions.visa.faq.q2'),
    t('ielts.admissions.visa.faq.a2'),
    t('ielts.admissions.visa.faq.q3'),
    t('ielts.admissions.visa.faq.a3'),
    t('ielts.admissions.visa.faq.q4'),
    t('ielts.admissions.visa.faq.a4'),
  ])

  const STEPS: { title: string; body: string }[] = [
    { title: step1Title, body: step1Body },
    { title: step2Title, body: step2Body },
    { title: step3Title, body: step3Body },
    { title: step4Title, body: step4Body },
  ]

  const CHECKLIST: { icon: typeof FileCheck2; label: string; detail: string }[] = [
    { icon: FileCheck2, label: casLabel, detail: casDetail },
    { icon: Banknote, label: fundsLabel, detail: fundsDetail },
    { icon: Languages, label: englishLabel, detail: englishDetail },
    { icon: BadgeCheck, label: passportLabel, detail: passportDetail },
  ]

  const FAQS: { question: string; answer: string }[] = [
    { question: faqQ1, answer: faqA1 },
    { question: faqQ2, answer: faqA2 },
    { question: faqQ3, answer: faqA3 },
    { question: faqQ4, answer: faqA4 },
  ]

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: bcHome, url: 'https://theenglishhub.app' },
          { name: bcIelts, url: 'https://theenglishhub.app/ielts' },
          { name: bcAdmissions, url: 'https://theenglishhub.app/ielts/admissions' },
          {
            name: bcVisa,
            url: 'https://theenglishhub.app/ielts/admissions/student-visa',
          },
        ]}
      />
      <FAQPageJsonLd faqs={FAQS} />

      <div className="mx-auto max-w-4xl px-4 py-8 pb-20 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 text-muted-foreground"
          render={<Link href="/ielts/admissions" />}
        >
          <ArrowLeft className="size-3.5" />
          {back}
        </Button>

        {/* Hero */}
        <section className="mt-4 rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.05] p-6 sm:p-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
            <Plane className="size-3.5" />
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </section>

        {/* Important notice */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-5">
          <ShieldAlert className="mt-0.5 size-5 shrink-0 text-amber-500" aria-hidden />
          <p
            className="text-sm leading-relaxed text-foreground"
            dangerouslySetInnerHTML={{ __html: notice }}
          />
        </div>

        {/* Steps */}
        <section aria-labelledby="steps-heading" className="mt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
            {stepsEyebrow}
          </p>
          <h2
            id="steps-heading"
            className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {stepsTitle}
          </h2>
          <ol className="mt-8 space-y-4">
            {STEPS.map((step, i) => (
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

        {/* Checklist */}
        <section aria-labelledby="checklist-heading" className="mt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
            {checklistEyebrow}
          </p>
          <h2
            id="checklist-heading"
            className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {checklistTitle}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CHECKLIST.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="rounded-2xl border border-border/60 bg-card p-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-foreground">{label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IELTS link */}
        <section className="mt-16 rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground">{englishTitle}</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {englishBody}
              </p>
            </div>
            <Button render={<Link href="/ielts" />} className="shrink-0">
              {englishButton}
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="mt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
            {faqEyebrow}
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {faqTitle}
          </h2>
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
      </div>
    </main>
  )
}
