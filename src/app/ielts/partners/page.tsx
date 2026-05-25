import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  Users2,
  Briefcase,
  LayoutDashboard,
  Languages,
  Sparkles,
  LineChart,
  ShieldCheck,
  GraduationCap,
  ClipboardCheck,
  Layers,
  Compass,
  CheckCircle2,
  Mail,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'

// ─── /ielts/partners — partnerships & institutional overview ────────────────
// SEO landing page for schools, exam centres and education agencies considering
// partnering WITH The English Hub to deliver IELTS Academic preparation. Server
// component so the marketing copy renders statically for SEO/AI answer engines.
// Exactly one <h1>. Section metadata + canonical live in ./layout.tsx.
//
// COMPLIANCE (hard requirement): the British Council UK Agent Hub, the IELTS
// Partnership Programme and UK university recruitment relationships are
// described as routes we are PURSUING and standards we ALIGN TO — never as
// affiliations already held. No third-party logos or trademarked marks are
// used. All copy original.
// ────────────────────────────────────────────────────────────────────────────

const CONTACT_HREF = '/contact'

// What partnering with us puts in front of learners. Original copy — these
// describe the existing IELTS platform (the Wave 1 learning loop) packaged for
// institutional delivery.
const OFFERINGS = [
  {
    icon: Users2,
    accent: 'border-l-teal-500/60',
    title: 'Bulk learner access',
    body: 'Onboard a cohort in one step and assign the full IELTS Academic learning loop — diagnostic, study plan, four-skill practice and mock tests — to every learner under one agreement.',
  },
  {
    icon: LayoutDashboard,
    accent: 'border-l-sage-500/60',
    title: 'A centre dashboard',
    body: 'Track starting bands, practice volume and predicted overall bands across your cohort, so coordinators can see who is on track and who needs a nudge before test day.',
  },
  {
    icon: Languages,
    accent: 'border-l-ochre-500/60',
    title: 'Bilingual English / Arabic',
    body: 'Every learner-facing screen works in English or Arabic, so instructions never get in the way of the practice for Gulf students building towards an English-medium future.',
  },
  {
    icon: Sparkles,
    accent: 'border-l-clay-500/60',
    title: 'Instant AI band feedback',
    body: 'Writing and Speaking responses are scored against the official band descriptors in seconds, with targeted next steps — extending your teachers rather than replacing them.',
  },
  {
    icon: LineChart,
    accent: 'border-l-teal-500/60',
    title: 'Progress you can report on',
    body: 'Per-skill bands and trend lines give you the evidence to show learners, parents and stakeholders how preparation is translating into measurable gains.',
  },
  {
    icon: ClipboardCheck,
    accent: 'border-l-sage-500/60',
    title: 'Full, timed mock tests',
    body: 'Learners sit complete Academic mocks under exam conditions, so the jump to the real test feels familiar — and your centre gets a defensible predicted band.',
  },
]

// Who this is for — three institutional audiences, two with their own deep
// landing page.
const AUDIENCES = [
  {
    icon: Building2,
    accent: 'teal' as const,
    label: 'Schools & colleges',
    headline: 'IELTS for sixth forms and international schools',
    body: 'Add a structured, AI-marked IELTS pathway alongside your existing English provision — ideal for GCC schools preparing students for English-medium universities.',
    href: '/ielts/partners/for-schools',
    cta: 'For schools',
  },
  {
    icon: GraduationCap,
    accent: 'ochre' as const,
    label: 'Exam-prep centres',
    headline: 'A platform behind your tutors',
    body: 'Give your teaching team automatic marking, ready-made practice and cohort analytics so they can spend their hours on teaching, not admin.',
    href: '/ielts/partners/for-schools',
    cta: 'For centres',
  },
  {
    icon: Briefcase,
    accent: 'sage' as const,
    label: 'Education agencies',
    headline: 'Get applicants test-ready',
    body: 'Help the students you place reach the band their destination requires, and show universities the evidence behind every application.',
    href: '/ielts/partners/for-agencies',
    cta: 'For agencies',
  },
]

// Partnership roadmap. CRITICAL: every item is framed as intent / alignment,
// NOT a held affiliation. The caveat directly below the list reinforces this.
const ROADMAP = [
  {
    icon: ShieldCheck,
    title: 'British Council UK Agent Hub',
    body: 'We are working towards the standards set out by the British Council UK Agent Hub and intend to pursue certification, so partner agencies can have confidence in how we operate.',
  },
  {
    icon: Compass,
    title: 'IELTS Partnership Programme',
    body: 'We are aligning our preparation content and assessment practice with official IELTS criteria and intend to apply to the IELTS Partnership Programme as the platform matures.',
  },
  {
    icon: GraduationCap,
    title: 'UK university recruitment relationships',
    body: 'We are pursuing relationships with UK universities and their recruitment teams, with the goal of supporting applicants through a recognised, standards-aligned preparation route.',
  },
]

// Differentiators — short "why us" strip.
const WHY = [
  {
    icon: Sparkles,
    title: 'Feedback that used to need a tutor',
    body: 'AI band scoring on every Writing and Speaking attempt means learners improve between lessons, not only during them.',
  },
  {
    icon: Languages,
    title: 'Built bilingual for Gulf learners',
    body: 'English / Arabic throughout — purpose-built for the schools, centres and agencies we work with across the Gulf.',
  },
  {
    icon: Layers,
    title: 'A complete, repeatable loop',
    body: 'Diagnose, plan, practise, get feedback, mock, predict — one loop your learners run until they hit their target band.',
  },
]

const FAQS = [
  {
    question: 'Is The English Hub an official British Council or IELTS partner?',
    answer:
      'Not currently. The English Hub is an independent IELTS Academic preparation platform. Official British Council and IELTS partnerships are routes we are actively pursuing and standards we align our content and assessment practice to — we will only describe ourselves as holding an affiliation once it is formally granted.',
  },
  {
    question: 'Do you deliver the IELTS test itself?',
    answer:
      'No. We provide preparation — diagnostic placement, a personalised study plan, four-skill practice, AI band feedback and full mock tests. The official IELTS test is sat through authorised test centres.',
  },
  {
    question: 'What does a partnership give our learners?',
    answer:
      'Bulk access to the full IELTS Academic learning loop, a centre dashboard for tracking cohort progress and predicted bands, bilingual English / Arabic delivery, and instant AI feedback on Writing and Speaking against the official band descriptors.',
  },
  {
    question: 'Can teachers see how their cohort is progressing?',
    answer:
      'Yes. The centre dashboard surfaces starting bands, practice activity and predicted overall bands across the cohort, so coordinators can identify who is on track and intervene early where needed.',
  },
  {
    question: 'Is the platform suitable for Arabic-speaking students?',
    answer:
      'Yes. Every learner-facing screen is available in English or Arabic, so instructions and navigation never become a barrier to the practice itself. It is purpose-built for Gulf learners.',
  },
  {
    question: 'How do we start a conversation about partnering?',
    answer:
      'Get in touch through our contact page with a little about your school, centre or agency and the cohort you have in mind, and we will follow up to scope a pilot.',
  },
]

export default function IeltsPartnersPage() {
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IELTS', url: 'https://theenglishhub.app/ielts' },
          { name: 'Partners', url: 'https://theenglishhub.app/ielts/partners' },
        ]}
      />
      <FAQPageJsonLd faqs={FAQS} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-teal-500/[0.06] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-clay-500">
            Partnerships
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            Bring AI-marked IELTS preparation to your learners
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The English Hub is an IELTS Academic preparation platform built for schools, exam-prep
            centres and education agencies — with bulk access, a centre dashboard, bilingual English
            / Arabic delivery and instant AI band feedback.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href={CONTACT_HREF} />}
            >
              Talk to us about partnering
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href="/ielts" />}
            >
              Explore the IELTS platform
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              'Schools & colleges',
              'Exam-prep centres',
              'Education agencies',
              'English / العربية',
            ].map((l) => (
              <span
                key={l}
                className="rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. What we offer institutions */}
      <section aria-labelledby="offer-heading" className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              What partners get
            </p>
            <h2
              id="offer-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              A complete IELTS preparation platform, ready for your cohort
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Everything in the Wave 1 learning loop, packaged for institutional delivery — so your
              learners practise the whole Academic test and you can see how they are progressing.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OFFERINGS.map(({ icon: Icon, accent, title, body }) => (
              <Card
                key={title}
                className={`flex flex-col gap-4 border-l-4 ${accent} border-border/50 bg-card p-6`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Who it's for */}
      <section aria-labelledby="audience-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
              Who we work with
            </p>
            <h2
              id="audience-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Built for the institutions preparing IELTS candidates
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {AUDIENCES.map(({ icon: Icon, accent, label, headline, body, href, cta }) => (
              <GlassPanel key={headline} accent={accent} className="flex flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <PanelEyebrow>{label}</PanelEyebrow>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.06]">
                    <Icon className="h-4 w-4 text-muted-foreground" aria-hidden />
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-xl font-semibold tracking-tight text-foreground">
                  {headline}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <div className="mt-auto pt-5">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5"
                    render={<Link href={href} />}
                  >
                    {cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why The English Hub */}
      <section
        aria-labelledby="why-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Why The English Hub
          </p>
          <h2
            id="why-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            A preparation partner that extends your team
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {WHY.map(({ icon: Icon, title, body }) => (
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

      {/* 5. Partnership roadmap — framed as INTENT, with explicit caveat */}
      <section aria-labelledby="roadmap-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
              Our roadmap
            </p>
            <h2
              id="roadmap-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              The standards we are building towards
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              We hold ourselves to recognised standards as we grow. The accreditations and
              relationships below are routes we are actively pursuing — not affiliations we
              currently hold.
            </p>
          </div>

          <div className="mt-10">
            <GlassPanel accent="primary" className="p-6 sm:p-8">
              <PanelEyebrow>Pursuing &amp; aligning to</PanelEyebrow>
              <ul className="mt-5 space-y-5">
                {ROADMAP.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          {title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="font-mono text-[10px] uppercase tracking-wide"
                        >
                          Pursuing
                        </Badge>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </div>

          {/* Explicit compliance caveat — required. */}
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            The English Hub is an independent IELTS preparation provider. We are not currently an
            official British Council or IELTS partner, and we are not an accredited UCAS or
            university recruitment agent. References to the British Council UK Agent Hub, the IELTS
            Partnership Programme and university recruitment relationships describe standards we
            align to and routes we are pursuing, and do not imply any existing affiliation,
            accreditation or endorsement.
          </p>
        </div>
      </section>

      {/* 6. CTA */}
      <section aria-labelledby="cta-heading" className="border-t border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Mail className="h-5 w-5" aria-hidden />
          </span>
          <h2
            id="cta-heading"
            className="mt-5 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Let&rsquo;s scope a pilot for your learners
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Tell us about your school, centre or agency and the cohort you have in mind. We will
            follow up to talk through access, the centre dashboard and a pilot that fits your
            timeline.
          </p>
          <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left text-sm text-muted-foreground">
            {[
              'A walkthrough of the platform and centre dashboard',
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
              Talk to us about partnering
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
