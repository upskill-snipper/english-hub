import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  Languages,
  Sparkles,
  LineChart,
  ClipboardCheck,
  LayoutDashboard,
  Clock,
  Target,
  Users2,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'

// ─── /ielts/partners/for-schools ───────────────────────────────────────────
// Focused B2B landing page for GCC schools, sixth forms and exam-prep centres
// considering an IELTS Academic pathway from The English Hub. Server component,
// single <h1>, original copy. Metadata + canonical in ./layout.tsx.
//
// COMPLIANCE: no claimed British Council / IELTS affiliation; standards we
// align to are described as such on the /ielts/partners overview.
// ────────────────────────────────────────────────────────────────────────────

const CONTACT_HREF = '/contact'

// Pressures a school/centre coordinator feels when standing up IELTS provision.
const CHALLENGES = [
  {
    icon: Clock,
    accent: 'border-l-clay-500/50',
    body: 'Marking IELTS Writing and Speaking by hand is slow, so learners wait days for the feedback that would actually move their band.',
  },
  {
    icon: LineChart,
    accent: 'border-l-ochre-500/50',
    body: 'Without per-skill data it is hard to know which students are on track for their target band and which need an intervention now.',
  },
  {
    icon: Languages,
    accent: 'border-l-teal-500/50',
    body: 'English-only resources add a comprehension barrier for Arabic-speaking learners who are still building academic English.',
  },
  {
    icon: ClipboardCheck,
    accent: 'border-l-sage-500/50',
    body: 'Sourcing enough exam-style practice and full mocks for a whole cohort is a constant drain on teacher time.',
  },
]

// What the school/centre gets. Original copy, grounded in the existing loop.
const FEATURES = [
  {
    icon: Users2,
    title: 'Onboard a whole cohort',
    body: 'Assign the full IELTS Academic learning loop — diagnostic, plan, four-skill practice and mocks — to every student under a single agreement.',
  },
  {
    icon: Sparkles,
    title: 'Instant AI band feedback',
    body: 'Writing and Speaking are scored against the official descriptors in seconds, with concrete next steps your teachers can build a lesson around.',
  },
  {
    icon: LayoutDashboard,
    title: 'A coordinator dashboard',
    body: 'See starting bands, practice activity and predicted overall bands across the cohort — so you spot the students who need support before test day.',
  },
  {
    icon: Languages,
    title: 'Bilingual English / Arabic',
    body: 'Every learner screen works in English or Arabic, removing the language barrier so Gulf students can focus on the IELTS skill itself.',
  },
  {
    icon: ClipboardCheck,
    title: 'Ready-made practice & mocks',
    body: 'Original Academic passages, tasks and full timed mock tests mean your team spends its hours teaching, not building materials.',
  },
  {
    icon: Target,
    title: 'Evidence for stakeholders',
    body: 'Per-skill bands and trend lines give you a defensible story to share with learners, parents and leadership about progress towards target bands.',
  },
]

// Concrete use cases — how schools/centres actually deploy it.
const USE_CASES = [
  {
    label: 'Sixth form / Year 12–13',
    headline: 'A university-entry IELTS pathway',
    body: 'Run a structured IELTS strand alongside your curriculum for students heading to English-medium universities, with predicted bands you can reference in references.',
  },
  {
    label: 'International school',
    headline: 'English-medium readiness',
    body: 'Support EAL and bilingual students towards the band their next stage requires, with practice that works in the language they are most comfortable navigating.',
  },
  {
    label: 'Exam-prep centre',
    headline: 'A platform behind your tutors',
    body: 'Hand your teaching team automatic marking, cohort analytics and a deep bank of practice, so every contact hour goes further.',
  },
]

const FAQS = [
  {
    question: 'How do students access the platform?',
    answer:
      'Through bulk access set up under your partnership. Each student gets the full IELTS Academic learning loop, and coordinators get a dashboard view across the cohort.',
  },
  {
    question: 'Does this replace our teachers?',
    answer:
      'No — it extends them. Automatic marking and AI band feedback handle the repetitive load so your teachers can spend their time on instruction, feedback conversations and intervention.',
  },
  {
    question: 'Is it suitable for Arabic-speaking students?',
    answer:
      'Yes. The platform is fully bilingual in English and Arabic, so navigation and instructions never get in the way of the IELTS practice itself. It is purpose-built for Gulf learners.',
  },
  {
    question: 'Can we run a pilot first?',
    answer:
      'Yes. Get in touch and we will scope a pilot around a single class or cohort and your test-prep calendar before any wider rollout.',
  },
]

export default function IeltsPartnersForSchoolsPage() {
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IELTS', url: 'https://theenglishhub.app/ielts' },
          { name: 'Partners', url: 'https://theenglishhub.app/ielts/partners' },
          { name: 'For schools', url: 'https://theenglishhub.app/ielts/partners/for-schools' },
        ]}
      />
      <FAQPageJsonLd faqs={FAQS} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal-500/[0.07] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-clay-500">
            <Building2 className="h-3.5 w-3.5" aria-hidden />
            For schools &amp; exam centres
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            An IELTS pathway your department can run with confidence
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Give your students AI-marked IELTS Academic preparation, give your teachers their time
            back, and give your coordinators a clear view of who is on track — bilingual in English
            and Arabic throughout.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href={CONTACT_HREF} />}
            >
              Book a pilot conversation
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/ielts/partners" />}
            >
              All partnership options
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Challenges */}
      <section aria-labelledby="challenge-heading" className="relative overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              The challenge
            </p>
            <h2
              id="challenge-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Standing up IELTS provision is hard work
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {CHALLENGES.map(({ icon: Icon, accent, body }) => (
              <Card
                key={body}
                className={`flex items-start gap-4 border-l-4 ${accent} border-border/50 bg-card p-5 sm:p-6`}
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.05] text-muted-foreground">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <p className="text-sm leading-relaxed text-foreground">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What you get */}
      <section aria-labelledby="features-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
              What your school gets
            </p>
            <h2
              id="features-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              The whole IELTS loop, run for your cohort
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, body }) => (
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
        </div>
      </section>

      {/* 4. Use cases */}
      <section
        aria-labelledby="usecase-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            How schools use it
          </p>
          <h2
            id="usecase-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Three ways to deploy the platform
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {USE_CASES.map(({ label, headline, body }, i) => (
            <GlassPanel
              key={headline}
              accent={(['teal', 'ochre', 'sage'] as const)[i]}
              className="p-6"
            >
              <PanelEyebrow>{label}</PanelEyebrow>
              <h3 className="mt-3 font-serif text-xl font-semibold tracking-tight text-foreground">
                {headline}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      {/* 5. CTA */}
      <section aria-labelledby="cta-heading" className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2
            id="cta-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Bring IELTS preparation to your students
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Tell us about your cohort and timeline, and we will scope a pilot that fits your
            department.
          </p>
          <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left text-sm text-muted-foreground">
            {[
              'A platform and dashboard walkthrough for coordinators',
              'Bulk access and bilingual delivery for your cohort',
              'A pilot scoped to your test-prep calendar',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href={CONTACT_HREF} />}
            >
              Book a pilot conversation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
