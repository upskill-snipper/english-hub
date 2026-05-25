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

// ─── IELTS → UK university admissions hub — SEO landing page ─────────────────
// The entry point to the admissions track that sits alongside the IELTS
// learning loop. Server component so all guidance copy renders statically for
// SEO. Exactly one <h1>. Section-level <metadata> + canonical live in
// layout.tsx. All content is ORIGINAL preparation guidance written for Gulf
// students applying to the UK — it never implies official UCAS / university
// affiliation and presents bands/dates as typical, not guaranteed.
//
// Module-specific Arabic translation is a later pass (mirroring the IELTS hub's
// stated convention of shipping original English section copy first); the page
// structure is bilingual-ready.
// ────────────────────────────────────────────────────────────────────────────

// Typical IELTS Academic requirements by course type. INDICATIVE only — every
// university and course sets its own; students must always check the specific
// course page. Overall band, then the typical per-component minimum.
const REQUIREMENT_TIERS: {
  band: string
  detail: string
  courses: string
}[] = [
  {
    band: '7.0–7.5+',
    detail: 'Often with no component below 7.0',
    courses:
      'Medicine, dentistry, veterinary, nursing, law, and most courses at the most selective universities.',
  },
  {
    band: '6.5',
    detail: 'Typically no component below 6.0',
    courses:
      'A large share of undergraduate degrees — business, engineering, sciences, humanities and social sciences at many universities.',
  },
  {
    band: '6.0',
    detail: 'Sometimes with a 5.5 minimum per component',
    courses:
      'Some foundation-linked degrees and a range of courses at universities with lower published entry requirements.',
  },
  {
    band: '5.0–5.5',
    detail: 'Per the provider’s own threshold',
    courses:
      'International foundation years and pre-sessional English pathways that lead into a degree.',
  },
]

// The five UCAS steps, written as original guidance.
const UCAS_STEPS: { title: string; body: string }[] = [
  {
    title: 'Register and research',
    body: 'Create a UCAS account and shortlist courses. You can apply to up to five courses on one application. Compare entry requirements, module content and the English-language threshold for each.',
  },
  {
    title: 'Build the application',
    body: 'Add your qualifications (e.g. high-school certificate, any predicted or actual grades), enter your personal details, and prepare your personal statement and a reference from a teacher or counsellor.',
  },
  {
    title: 'Write the personal statement',
    body: 'One statement goes to all five choices, so it must work for every course you pick. This is where applicants from outside the UK most often win or lose a place — specificity and reflection matter more than ambition alone.',
  },
  {
    title: 'Submit and track',
    body: 'Pay the application fee and submit. Universities then respond with offers — usually conditional (dependent on grades and/or an IELTS band) or unconditional. Track everything in your UCAS hub.',
  },
  {
    title: 'Reply, then meet your conditions',
    body: 'Choose a firm and an insurance offer. Then sit IELTS (if you have not already) and finish your exams to meet the conditions. Once met, you can move on to your student visa.',
  },
]

// FAQ content — original, surfaced both visually and as FAQ schema.
const FAQS: { question: string; answer: string }[] = [
  {
    question: 'What IELTS band do I need for a UK university?',
    answer:
      'It depends entirely on the course. Many undergraduate degrees ask for an overall IELTS Academic band of 6.0–6.5, while competitive courses such as medicine, law or those at the most selective universities often require 7.0 or higher, sometimes with a minimum in every component. Always check the specific course page for its exact requirement.',
  },
  {
    question: 'Which IELTS module do I take for university — Academic or General Training?',
    answer:
      'For undergraduate or postgraduate study at a UK university you take IELTS Academic. General Training is generally for work and migration routes, not degree-level study. The English Hub’s IELTS practice is built for the Academic module.',
  },
  {
    question: 'How important is the personal statement compared with grades and IELTS?',
    answer:
      'Grades and your English band get you over the threshold; the personal statement helps a selective course choose between applicants who all meet it. For applicants from the Gulf and elsewhere outside the UK, a specific, reflective statement — showing why this subject and what you have done about it — is one of the clearest ways to stand out.',
  },
  {
    question: 'When should I start, and when are the deadlines?',
    answer:
      'Start 12–18 months before you want to begin your degree. UCAS opens in the autumn before entry; many courses have an equal-consideration deadline in late January, while medicine, dentistry, veterinary and Oxford/Cambridge close in mid-October — much earlier. Sit IELTS early enough that your band is ready when offers ask for it.',
  },
  {
    question: 'Do I need a student visa, and what does it require?',
    answer:
      'Most students from the Gulf will need the UK Student visa. You generally apply after you accept an unconditional offer and receive a Confirmation of Acceptance for Studies (CAS) from your university. You will usually need to show your accepted offer, evidence of funds, and — depending on your nationality and course — an approved English-language qualification such as IELTS. See our student-visa basics for an overview.',
  },
]

export default function IeltsAdmissionsHubPage() {
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IELTS', url: 'https://theenglishhub.app/ielts' },
          { name: 'UK University Admissions', url: 'https://theenglishhub.app/ielts/admissions' },
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
          Back to IELTS
        </Button>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="mt-4 rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-sky-500/[0.05] p-6 sm:p-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
            <GraduationCap className="size-3.5" />
            IELTS → UK university
          </span>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            Your pathway from IELTS to a UK university place
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A clear, honest guide for students in the Gulf applying to the UK: how UCAS works and
            when to act, the IELTS band your course is likely to ask for, how to write a personal
            statement that stands out, and the student-visa basics. Then practise the English that
            gets you over the line — all in one place.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href="/ielts/admissions/personal-statement" />}
            >
              <Sparkles className="size-4" />
              Coach my personal statement
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href="/ielts/writing" />}
            >
              Practise IELTS Writing
              <ArrowRight className="size-4" />
            </Button>
          </div>
          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-muted-foreground/80">
            The English Hub is an independent preparation platform. We are not affiliated with UCAS,
            UK Visas and Immigration, or any university, and the guidance below is general
            information for your preparation — always confirm the details with each university and
            the official UCAS and UK government websites.
          </p>
        </section>

        {/* ── The UK pathway at a glance ────────────────────────────── */}
        <section aria-labelledby="pathway-heading" className="mt-14">
          <SectionHeading
            id="pathway-heading"
            eyebrow="The big picture"
            title="Four things stand between you and a place"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: School,
                title: 'The right course',
                body: 'Pick up to five courses on one UCAS application and check each one’s entry requirements.',
              },
              {
                icon: FileText,
                title: 'A standout statement',
                body: 'One personal statement that argues, with evidence, why you and why this subject.',
              },
              {
                icon: Languages,
                title: 'Your IELTS band',
                body: 'An IELTS Academic score that meets — ideally beats — the course threshold.',
              },
              {
                icon: Plane,
                title: 'A student visa',
                body: 'A Student visa, applied for once you hold an unconditional offer and a CAS.',
              },
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
          <SectionHeading
            id="ucas-heading"
            eyebrow="How UCAS works"
            title="The application, step by step"
          />
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
          <SectionHeading
            id="timeline-heading"
            eyebrow="When to act"
            title="A typical 18-month timeline"
          />
          <div className="mt-8 space-y-3">
            {[
              {
                when: '18–12 months before',
                what: 'Research courses and universities. Note the IELTS band and per-component minimum each one asks for. Begin IELTS practice in earnest, targeting your weakest skill first.',
              },
              {
                when: '12–6 months before',
                what: 'Draft and redraft your personal statement. Line up a teacher reference. Sit a first IELTS attempt so you know your starting band and how far you have to go.',
              },
              {
                when: 'Autumn before entry',
                what: 'UCAS opens. Submit early — especially for medicine, dentistry, veterinary and Oxford or Cambridge, which close in mid-October.',
              },
              {
                when: 'Late January',
                what: 'The equal-consideration deadline for most courses. Applications in by this date are considered on the same footing.',
              },
              {
                when: 'Spring–summer',
                what: 'Reply to your offers (firm + insurance). Meet your conditions: sit or re-sit IELTS if needed and complete your exams.',
              },
              {
                when: 'Summer before you start',
                what: 'Accept your unconditional offer, receive your CAS, and apply for your Student visa in good time.',
              },
            ].map((row) => (
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
          <p className="mt-4 text-xs text-muted-foreground/80">
            Dates move slightly year to year. Always confirm the current cycle’s deadlines on the
            official UCAS website.
          </p>
        </section>

        {/* ── English-language requirements ─────────────────────────── */}
        <section aria-labelledby="english-heading" className="mt-16">
          <SectionHeading
            id="english-heading"
            eyebrow="English-language requirements"
            title="The IELTS band your course is likely to want"
          />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            These tiers are <strong className="text-foreground">indicative</strong>. Every
            university and course sets its own requirement, and many specify a minimum in each of
            the four components, not just the overall band. Use this to set a target, then confirm
            the exact figure on your course page.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border/60">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-4 py-3 font-semibold">Typical overall band</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell">Component note</th>
                  <th className="px-4 py-3 font-semibold">Often required for</th>
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
              <p className="text-sm leading-relaxed text-foreground">
                Not at your target band yet? Practise the Academic module and get an instant
                AI-predicted band on Writing and Speaking.
              </p>
            </div>
            <Button render={<Link href="/ielts" />} className="shrink-0">
              Open the IELTS loop
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>

        {/* ── Personal statement ────────────────────────────────────── */}
        <section aria-labelledby="ps-heading" className="mt-16">
          <SectionHeading
            id="ps-heading"
            eyebrow="The personal statement"
            title="Where applicants from abroad win places"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Your personal statement is a single piece of writing (UCAS allows up to 4,000
                characters across 47 lines) that goes to every course you apply to. Selective
                universities use it to choose between applicants who already meet the grade and
                IELTS thresholds — so it has to do more than say you are passionate and
                hard-working.
              </p>
              <p>The strongest statements tend to:</p>
              <ul className="space-y-2">
                {[
                  'Open with something specific and genuine, not a famous quotation or a cliché.',
                  'Give a precise reason for THIS subject — and show what about it keeps you reading and thinking.',
                  'Use real evidence you own: named books, an EPQ or project, competitions, work experience, roles.',
                  'Reflect on each example — what it changed, what question it raised — rather than just listing it.',
                  'Read fluently and accurately, in an academic but natural register (especially important when English is an additional language).',
                ].map((point) => (
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
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Get AI feedback on your draft
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Paste your statement into the Personal-Statement Coach and get a rating and specific
                comments on structure, motivation, evidence, reflection and English — plus three
                concrete things to fix next. It is preparation guidance, not an admissions
                guarantee.
              </p>
              <Button
                className="mt-5 w-full"
                render={<Link href="/ielts/admissions/personal-statement" />}
              >
                <Sparkles className="size-4" />
                Open the coach
              </Button>
            </div>
          </div>
        </section>

        {/* ── Student visa ──────────────────────────────────────────── */}
        <section aria-labelledby="visa-heading" className="mt-16">
          <SectionHeading id="visa-heading" eyebrow="After the offer" title="Student-visa basics" />
          <div className="mt-8 rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Most students from the Gulf will need the UK{' '}
              <strong className="text-foreground">Student visa</strong>. In outline, you apply after
              you accept an unconditional offer and your university issues a Confirmation of
              Acceptance for Studies (CAS). You will typically need to evidence your accepted place,
              sufficient funds for fees and living costs, and — depending on your nationality and
              course — an approved English-language qualification such as IELTS (often the IELTS for
              UKVI variant; check what your university and the visa route require).
            </p>
            <div className="mt-5">
              <Button variant="outline" render={<Link href="/ielts/admissions/student-visa" />}>
                <Plane className="size-3.5" />
                Read the student-visa overview
              </Button>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground/80">
              Immigration rules change and depend on your circumstances. This is general preparation
              information, not immigration advice — always check the official UK government (GOV.UK)
              guidance and your university’s international office before you act.
            </p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section aria-labelledby="faq-heading" className="mt-16">
          <SectionHeading id="faq-heading" eyebrow="Common questions" title="UK admissions FAQ" />
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
              Start with the two things you control today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Sharpen your personal statement and lift your IELTS band. Do both well and you give
              yourself the best possible shot at your firm choice.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 gap-2 px-7 text-base"
                render={<Link href="/ielts/admissions/personal-statement" />}
              >
                <Sparkles className="size-4" />
                Coach my personal statement
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 gap-2 px-7 text-base"
                render={<Link href="/ielts" />}
              >
                Back to the IELTS loop
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
