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

// ─── UK Student-visa basics — admissions sub-page (SEO) ──────────────────────
// A focused, original overview of the UK Student visa for Gulf students who
// have (or are about to receive) a UK university offer. Server component, one
// <h1>, canonical in the sibling layout.tsx. This is general PREPARATION
// information only — explicitly NOT immigration advice, and not affiliated with
// UK Visas and Immigration. Every section points the reader to GOV.UK for the
// authoritative, current rules.
// ────────────────────────────────────────────────────────────────────────────

const STEPS: { title: string; body: string }[] = [
  {
    title: 'Accept an unconditional offer',
    body: 'Your university confirms your place is secure — your grades and English-language condition (e.g. an IELTS band) are met. Until an offer is unconditional, you cannot get the document the visa needs.',
  },
  {
    title: 'Receive your CAS',
    body: 'The university issues a Confirmation of Acceptance for Studies (CAS): a reference number that links your visa application to your course. You usually request it once you are unconditional and have met the university’s own checks.',
  },
  {
    title: 'Prepare your documents',
    body: 'Gather your passport, the CAS, evidence of funds, and your English-language evidence. Some applicants also need a tuberculosis test certificate and academic transcripts — the exact list depends on your nationality and circumstances.',
  },
  {
    title: 'Apply, pay and attend biometrics',
    body: 'Apply online, pay the visa fee and the Immigration Health Surcharge, and provide biometrics. Apply in good time before your course starts — processing times vary by country and season.',
  },
]

const CHECKLIST: { icon: typeof FileCheck2; label: string; detail: string }[] = [
  {
    icon: FileCheck2,
    label: 'Your CAS and accepted offer',
    detail: 'The reference number from your university that ties the application to your course.',
  },
  {
    icon: Banknote,
    label: 'Evidence of funds',
    detail:
      'Proof you can pay your course fees and living costs for a set period, held for the required number of days before you apply.',
  },
  {
    icon: Languages,
    label: 'Approved English-language evidence',
    detail:
      'Often an IELTS qualification — frequently the IELTS for UKVI variant — unless your course or nationality exempts you. Check which test and score the route requires.',
  },
  {
    icon: BadgeCheck,
    label: 'Passport and personal documents',
    detail:
      'A valid passport plus any additional documents (e.g. a TB test certificate) that apply to your country.',
  },
]

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'Does my IELTS score matter for the visa as well as the offer?',
    answer:
      'It can. Universities use your IELTS band to make and confirm your offer, and the Student visa route also has an English-language requirement. Many courses ask for the IELTS for UKVI variant specifically, taken at an approved test centre. Confirm with your university and the official guidance which test and score you need for both the offer and the visa.',
  },
  {
    question: 'When should I apply for the Student visa?',
    answer:
      'After you accept an unconditional offer and receive your CAS, and far enough ahead of your course start date to allow for processing, which varies by country and time of year. Applying early reduces stress and the risk of delays.',
  },
  {
    question: 'How much money do I need to show?',
    answer:
      'You generally need to evidence your tuition fees plus living costs for a defined period, held for a set number of days before you apply. The exact figures are set by the UK government and updated periodically — always check the current amounts on GOV.UK and confirm with your university.',
  },
  {
    question: 'Is this immigration advice?',
    answer:
      'No. The English Hub is an independent study-preparation platform and is not affiliated with UK Visas and Immigration. This page is general information to help you prepare and ask the right questions. For decisions about your application, rely on the official GOV.UK guidance and your university’s international student office.',
  },
]

export default function StudentVisaBasicsPage() {
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IELTS', url: 'https://theenglishhub.app/ielts' },
          { name: 'UK University Admissions', url: 'https://theenglishhub.app/ielts/admissions' },
          {
            name: 'Student-visa basics',
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
          Back to UK admissions
        </Button>

        {/* Hero */}
        <section className="mt-4 rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.05] p-6 sm:p-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
            <Plane className="size-3.5" />
            After your offer
          </span>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            UK Student-visa basics for Gulf students
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A plain-English overview of how the UK Student visa fits into your journey — what you
            need, when to apply, and how your IELTS result connects to it. Use it to prepare and to
            plan your timing; rely on GOV.UK and your university for the authoritative rules.
          </p>
        </section>

        {/* Important notice */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-5">
          <ShieldAlert className="mt-0.5 size-5 shrink-0 text-amber-500" aria-hidden />
          <p className="text-sm leading-relaxed text-foreground">
            <strong>This is general information, not immigration advice.</strong> The English Hub is
            independent and not affiliated with UK Visas and Immigration. Immigration rules and
            financial thresholds change and depend on your personal circumstances — always confirm
            the current requirements on the official UK government website and with your
            university’s international office.
          </p>
        </div>

        {/* Steps */}
        <section aria-labelledby="steps-heading" className="mt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
            The sequence
          </p>
          <h2
            id="steps-heading"
            className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            From offer to visa, in four steps
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
            What you typically need
          </p>
          <h2
            id="checklist-heading"
            className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            A starting checklist
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
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Make sure your English meets both bars
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Your IELTS band has to satisfy your university’s offer and the visa route’s
                English-language requirement. Practise the Academic module and check where you stand
                with an instant AI-predicted band.
              </p>
            </div>
            <Button render={<Link href="/ielts" />} className="shrink-0">
              Practise IELTS
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="mt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
            Common questions
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Student-visa FAQ
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
